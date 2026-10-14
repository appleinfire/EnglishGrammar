// Browser smoke test: node tests/smoke.mjs   (needs Playwright; uses Chromium)
// iPhone-size screen: new profile, a topic with its translation, a lesson with a mistake and its feedback, results,
// "fix my mistakes" with a different sentence, Review, the back gesture, mistakes, progress, settings, level check,
// a second profile, reload, links from our other apps, and the two-column layout on an iPad. Fails on any console error.
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require(path.join(process.env.NODE_PATH || '/opt/node22/lib/node_modules', 'playwright')); }
const dir = path.dirname(fileURLToPath(import.meta.url));
const url = 'file://' + path.join(dir, '..', 'index.html');
const errors = [];
const ok = (cond, msg) => { if (!cond) throw new Error('FAILED: ' + msg); console.log('ok -', msg); };

const browser = await pw.chromium.launch({ executablePath: process.env.CHROMIUM || undefined });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto(url);

// Answer the exercise on screen: right (the first right answer) or wrong.
async function answer(right) {
  const c = await page.evaluate(() => { const c = APP.app.session().cur; return { t: c.it.t, mode: c.mode, a: c.it.a[0], s: APP.content.sentence(c.it), options: c.options, tiles: c.tiles, end: c.end }; });
  if (c.mode === 'dict') await page.fill('#ans', right ? c.s : 'something else');
  else if (c.t === 'choose') { const i = right ? c.options.indexOf(c.a) : c.options.findIndex((o) => o !== c.a); await page.click(`.option >> nth=${i}`); return c; }
  else if (c.t === 'fill') { const parts = c.a.split('|'); const blanks = await page.$$('.blank'); for (let k = 0; k < blanks.length; k++) await blanks[k].fill(right ? parts[k] : 'zzz'); }
  else if (c.t === 'build') {
    const want = c.a.replace(/[.!?]+$/, '').split(/\s+/).map((w, i) => (i === 0 && w !== 'I' ? w[0].toLowerCase() + w.slice(1) : w));
    const used = new Set();
    const order = right ? want.map((w) => { const i = c.tiles.findIndex((t, j) => t === w && !used.has(j)); used.add(i); return i; }) : [0];
    for (const i of order) await page.click(`.tiles-w .tile-w >> nth=${i}`);
  } else await page.fill('#ans', right ? c.a : 'I do not know');
  await page.click('#checkbtn');
  return c;
}

// New profile
ok(await page.isVisible('text=English Grammar'), 'first start shows the welcome form');
await page.fill('#ob-name', 'Olena');
await page.click('[data-act=pickKind][data-arg=B1]');
await page.click('[data-act=pickL1][data-arg=ru]');
await page.click('[data-act=createProfile]');
ok(await page.isVisible('text=Hi, Olena!'), 'the profile opens its home');
ok(await page.isVisible('text=Level check'), 'home offers the level check');
ok(await page.evaluate(() => APP.state.settings.l1 === 'ru'), 'translation language saved');

// A topic: the rule in English, the translation behind 🌐
await page.click('[data-act=go][data-arg="topic:pp"]');
ok(await page.isVisible('text=Typical mistake'), 'topic page shows the rule and the typical mistake');
ok(!(await page.isVisible('.trb .l1 >> nth=0')), 'translation is hidden at first');
await page.click('.trbtn >> nth=0');
ok(await page.isVisible('.trb .l1 >> nth=0') && (await page.textContent('.trb .l1 >> nth=0')).includes('Используем'), '🌐 shows the Russian translation');

// A lesson: one mistake, then right answers
// Choosing a tier at the bottom of the page: the page does not jump to the top, the button follows the choice
await page.locator('.tierpick').scrollIntoViewIfNeeded();
const y0 = await page.evaluate(() => window.scrollY);
await page.click('[data-act=pickTier][data-arg="pp:2"]');
ok(y0 > 300 && Math.abs((await page.evaluate(() => window.scrollY)) - y0) < 5, 'choosing a tier keeps the scroll position');
ok((await page.textContent('#practicebtn')).includes('Use') && await page.getAttribute('[data-arg="pp:2"]', 'aria-pressed') === 'true', 'the Practice button shows the chosen tier');
await page.click('[data-act=pickTier][data-arg="pp:1"]');
await page.click('[data-act=lesson]');
ok(await page.evaluate(() => APP.app.session().mode === 'lesson' && APP.app.session().tier === 1), 'lesson starts at the chosen tier');
const first = await answer(false);
ok(await page.isVisible('.fb.no'), 'a wrong answer gets "Not quite"');
ok(first.t === 'choose' || (await page.isVisible('.cmp')), 'her answer and the right one are compared');
ok(await page.isVisible('.why') || first.t === 'choose', 'the explanation of the mistake is shown');
ok(await page.isVisible('[data-act=ruleModal]'), '"Why? Rule" is offered');
await page.click('[data-act=ruleModal]');
ok(await page.isVisible('#modal'), 'the rule opens in a window');
await page.click('#modal [data-act=closeModal]');
await page.click('#nextbtn');
for (let i = 1; i < 10; i++) { await answer(true); ok(await page.isVisible('.fb.ok'), `exercise ${i + 1} right`); await page.keyboard.press('Enter'); }
ok(await page.isVisible('text=9 of 10'), 'results: 9 of 10');
ok(await page.evaluate(() => APP.state.stats.answers === 10 && APP.state.stats.correct === 9 && APP.state.topics.pp.done === 1), 'progress recorded');
ok(await page.isVisible('.missed'), 'results list the mistake with its explanation');

// Fix my mistakes: a different sentence of the same pattern
const missedId = await page.evaluate(() => APP.state.recent[0].id);
await page.click('[data-act=fixNow]');
const fixIt = await page.evaluate(() => { const c = APP.app.session().cur; return { id: c.it.id, key: APP.srs.key(c.it) }; });
const missedKey = await page.evaluate((id) => APP.srs.key(APP.content.itemById[id]), missedId);
ok(fixIt.key === missedKey && fixIt.id !== missedId, '"Fix my mistakes" brings another sentence of the same pattern');
await answer(true);
await page.click('#nextbtn');
ok(await page.isVisible('text=1 of 1'), 'fix session done');
ok(await page.evaluate(() => APP.state.stats.fixed >= 1), 'counted as a fixed mistake');

// Review from home (the next day: the cards are due); the back gesture asks before leaving
await page.evaluate(() => { for (const c of Object.values(APP.state.cards)) c.due = APP.U.dateKey(); APP.store.save(); });
await page.click('[data-act=go][data-arg=home]');
ok(await page.isVisible('.hero.review'), 'home offers Review');
await page.click('[data-act=review]');
ok(await page.evaluate(() => APP.app.session().mode === 'review'), 'review starts');
await page.goBack();
ok(await page.isVisible('#modal'), 'back during a session asks first');
await page.click('[data-act=leave]');
ok(await page.isVisible('text=Hi, Olena!'), 'leaving goes home');

// My mistakes, progress
await page.click('[data-act=go][data-arg=mistakes]');
ok(await page.isVisible('.errcard'), 'mistakes are grouped by type');
await page.click('.errcard [data-act=drill]');
ok(await page.evaluate(() => APP.app.session().mode === 'drill'), 'practice one type of mistake');
await page.click('[data-act=quit]');
await page.click('[data-act=leave]');
await page.click('[data-act=go][data-arg=progress]');
ok(await page.isVisible('.kpis') && await page.isVisible('.ttable'), 'progress shows totals and topics');

// Settings: goal, translation language
await page.click('[data-act=go][data-arg=home]');
await page.click('[data-act=go][data-arg=settings]');
await page.evaluate(() => document.querySelector('[data-act=setGoal]').scrollIntoView({ block: 'center' }));
const y1 = await page.evaluate(() => window.scrollY);
await page.click('[data-act=setGoal][data-arg="15"]');
ok(y1 > 0 && Math.abs((await page.evaluate(() => window.scrollY)) - y1) < 5, 'choosing a daily goal keeps the scroll position');
await page.click('[data-act=setL1][data-arg=uk]');
ok(await page.evaluate(() => APP.state.settings.goal === 15 && APP.state.settings.l1 === 'uk'), 'settings change');
ok(!(await page.isVisible('[data-act=gate]')), 'no grown-ups gate in this app');

// Level check
await page.click('[data-act=go][data-arg=home]');
await page.click('.hero.soft');
await page.click('[data-act=diagGo]');
const n = await page.evaluate(() => APP.app.session().n);
ok(n === 24, 'level check has 2 exercises per topic');
for (let i = 0; i < n; i++) { await answer(i % 3 !== 0); await page.click('#nextbtn'); }
ok(await page.isVisible('text=Your starting tiers'), 'level check shows the starting tiers');
ok(await page.evaluate(() => !!APP.state.diag), 'level check saved');

// Second profile and the picker
await page.click('[data-act=go][data-arg=home]');
await page.click('[data-act=go][data-arg=settings]');
await page.click('[data-act=go][data-arg=new]');
await page.fill('#ob-name', 'Max');
await page.click('[data-act=createProfile]');
ok(await page.isVisible('text=Hi, Max!'), 'second profile opens');
ok(await page.evaluate(() => APP.state.stats.answers === 0), 'profiles do not share progress');
await page.reload();
ok(await page.isVisible('text=Who’s practicing?'), 'with two profiles the app asks who is practicing');
ok(await page.evaluate(() => { const own = APP.CONFIG.apps.find((a) => a.id === APP.CONFIG.id); const links = [...document.querySelectorAll('.appbtn')].map((a) => a.href);
  return links.length === APP.CONFIG.apps.filter((a) => a.id !== APP.CONFIG.id).length && !(own && links.includes(own.url)); }), 'links to our other apps, not to this one');
await page.click('.profile >> text=Olena');
ok(await page.evaluate(() => APP.state.stats.answers > 10 && APP.state.settings.goal === 15), 'progress survives a reload');

// A link from our other app with a name (#who=) opens that profile; an unknown name offers to add it.
await page.goto('about:blank');
await page.goto(url + '#who=olena');
ok(await page.isVisible('text=Hi, Olena!'), '#who= opens the profile with that name');
await page.goto('about:blank');
await page.goto(url + '#who=Zed');
ok(await page.inputValue('#ob-name') === 'Zed', 'an unknown name opens the new-profile form with the name filled in');

// iPad landscape: topic and session in two columns
const ipad = page;
await ipad.setViewportSize({ width: 1180, height: 820 });
await ipad.goto('about:blank');
await ipad.goto(url + '#who=olena');
await ipad.click('[data-act=go][data-arg=topics]');
await ipad.click('[data-act=go][data-arg="topic:art"]');
ok(await ipad.evaluate(() => getComputedStyle(document.querySelector('.cols')).display === 'grid'), 'iPad: topic in two columns');

await browser.close();
if (errors.length) { console.error('Console errors:\n' + errors.join('\n')); process.exit(1); }
console.log('smoke test passed');
