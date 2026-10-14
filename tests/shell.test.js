// Run: node tests/shell.test.js
// Checks how two copies of one profile are merged, profile storage, the family key, and the offline file list.
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const mem = {};
globalThis.localStorage = { getItem: (k) => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); }, removeItem: (k) => { delete mem[k]; } };
for (const f of ['config', 'util', 'schema', 'store', 'cloud']) require(path.join(__dirname, '..', 'js', f + '.js'));
const APP = globalThis.APP, S = APP.store;

// The same learner practiced offline on a phone (A) and a laptop (B).
S.init();
const kid = S.create({ name: 'Olena', kind: 'B1', avatar: '🌻' });
const a = JSON.parse(JSON.stringify(kid)), b = JSON.parse(JSON.stringify(kid));
Object.assign(a, {
  rev: 100,
  topics: { pp: { tier: 3, reached: 2, done: 4, a: 40, c: 30, check: 50 }, art: { tier: 1, reached: 0, done: 1, a: 10, c: 5, check: 0 } },
  cards: { 'pp:exp': { box: 3, due: '2026-10-20', seen: 500, ok: 3, miss: 0 }, 'pp:news': { box: 1, due: '2026-10-11', seen: 900, ok: 1, miss: 2 } },
  errors: { 'pp:form': 3, 'art:no-a': 1 },
  seen: { 'pp.x1': 100, 'pp.x2': 300 },
  time: { '2026-10-09': 600 },
  recent: [{ id: 'pp.x1', g: 'old', d: '2026-10-09' }],
  diag: { day: '2026-10-01', tiers: { pp: 2 } },
  days: { '2026-10-09': { a: 10, c: 8 } },
  log: { '2026-10-09': { f: 1, l: 0, u: 1, t: { pp: 10 }, r: { pp: 8 }, e: { 'pp:form': 2 } } },
  reportSeen: '2026-10-05',
  settings: Object.assign({}, kid.settings, { l1: 'ru' }),
});
a.stats = { answers: 50, correct: 35, fixed: 4, sessions: 5, endlessBest: 12, lightning: 7 };
a.scenes = { doctor: 60, camp: 100 };
a.facts = { 'pass.f1': '2026-10-05', 'comp.f2': '2026-10-09' };
Object.assign(b, {
  rev: 200,
  topics: { pp: { tier: 2, reached: 1, done: 5, a: 35, c: 25, check: 80 }, q: { tier: 1, reached: 1, done: 1, a: 10, c: 9, check: 0 } },
  cards: { 'pp:exp': { box: 1, due: '2026-10-10', seen: 800, ok: 3, miss: 1 }, 'pp:news': { box: 2, due: '2026-10-13', seen: 700, ok: 2, miss: 1 } },
  errors: { 'pp:form': 2, 'q:be': 1 },
  seen: { 'pp.x1': 200 },
  time: { '2026-10-09': 300, '2026-10-10': 420 },
  recent: [{ id: 'q.y', g: 'new', d: '2026-10-10' }],
  diag: null,
  days: { '2026-10-09': { a: 4, c: 4 }, '2026-10-10': { a: 6, c: 5 } },
  log: { '2026-10-09': { f: 2, l: 1, u: 0, t: { pp: 4, q: 3 }, r: { pp: 4, q: 3 }, e: {} }, '2026-10-10': { f: 0, l: 0, u: 0, t: { q: 6 }, r: { q: 5 }, e: { 'q:be': 1 } } },
  reportSeen: '',
  settings: Object.assign({}, kid.settings, { l1: 'uk', goal: 15 }),
});
b.stats = { answers: 45, correct: 30, fixed: 6, sessions: 4, endlessBest: 9, lightning: 11 };
b.scenes = { doctor: 85, trip: 70 };
b.facts = { 'pass.f1': '2026-10-07', 'q.f3': '2026-10-08' };
const m = S.mergeProfiles(a, b);
assert.deepStrictEqual(m.topics.pp, { tier: 2, reached: 2, done: 5, a: 40, c: 30, check: 80 }, 'a topic keeps the best of both; the current tier comes from the newer copy');
assert.ok(m.topics.art && m.topics.q, 'topics practiced on either device are kept');
assert.strictEqual(m.cards['pp:exp'].box, 1, 'a card answered more recently wins, even when a mistake lowered its box');
assert.strictEqual(m.cards['pp:news'].box, 1, 'the more recent answer wins on the other device too');
assert.deepStrictEqual(m.errors, { 'pp:form': 3, 'art:no-a': 1, 'q:be': 1 }, 'mistake counts keep the higher number');
assert.deepStrictEqual(m.seen, { 'pp.x1': 200, 'pp.x2': 300 }, 'seen times keep the latest');
assert.deepStrictEqual(m.time, { '2026-10-09': 600, '2026-10-10': 420 }, 'minutes per day keep the higher value');
assert.deepStrictEqual(m.stats, { answers: 50, correct: 35, fixed: 6, sessions: 5, endlessBest: 12, lightning: 11 }, 'totals and records keep the higher value');
assert.deepStrictEqual(m.scenes, { doctor: 85, camp: 100, trip: 70 }, 'dialogs done on either device are kept, with the best score');
assert.deepStrictEqual(m.facts, { 'pass.f1': '2026-10-05', 'comp.f2': '2026-10-09', 'q.f3': '2026-10-08' }, 'facts found on either device are kept, with the first day');
assert.deepStrictEqual(m.diag, { day: '2026-10-01', tiers: { pp: 2 } }, 'a level check from either device is kept');
assert.strictEqual(m.recent[0].g, 'new', 'recent mistakes come from the newer copy');
assert.strictEqual(m.settings.l1, 'uk', 'settings come from the newer copy');
assert.strictEqual(m.settings.goal, 15);
assert.deepStrictEqual(m.days, { '2026-10-09': { a: 10, c: 8 }, '2026-10-10': { a: 6, c: 5 } });
assert.deepStrictEqual(m.log['2026-10-09'], { f: 2, l: 1, u: 1, t: { pp: 10, q: 3 }, r: { pp: 8, q: 3 }, e: { 'pp:form': 2 } }, 'the report log keeps the higher number per day, topic and mistake');
assert.ok(m.log['2026-10-10'], 'report days from either device are kept');
assert.strictEqual(m.reportSeen, '2026-10-05', 'an opened weekly report stays opened');
assert.strictEqual(m.rev, 200);
assert.deepStrictEqual(S.mergeProfiles(b, a), m, 'merge order does not matter');

// A deliberate reset is not undone by an older copy from another device.
const r = Object.assign(JSON.parse(JSON.stringify(b)), { rev: 300, resetAt: 300, topics: {}, cards: {} });
assert.deepStrictEqual(S.mergeProfiles(a, r).topics, {});

// A copy from another device updates the open profile in place.
const before = APP.state;
assert.strictEqual(S.applyRemote(Object.assign(JSON.parse(JSON.stringify(kid)), { rev: Date.now() + 1000, stats: { answers: 999, correct: 1, fixed: 0, sessions: 0 } })), true);
assert.strictEqual(APP.state, before, 'same object stays on screen');
assert.strictEqual(APP.state.stats.answers, 999);
assert.strictEqual(S.applyRemote(JSON.parse(JSON.stringify(APP.state))), false, 'nothing new: no change');

// A new profile from another device appears; a deleted one disappears.
const other = Object.assign(JSON.parse(JSON.stringify(kid)), { id: 'zz1', name: 'Max', rev: 5 });
S.applyRemote(other);
assert.deepStrictEqual(S.profiles().map((p) => p.name).sort(), ['Max', 'Olena']);
S.removeRemote('zz1');
assert.deepStrictEqual(S.profiles().map((p) => p.name), ['Olena']);

// Preview: nothing is saved.
const saved = mem[APP.CONFIG.id + '-p-' + kid.id];
S.startPreview();
APP.state.stats.answers = 12345;
S.save();
assert.strictEqual(mem[APP.CONFIG.id + '-p-' + kid.id], saved);
S.endPreview();
assert.strictEqual(APP.state.stats.answers, 999);

// Save code round trip.
const code = S.exportCode();
S.remove(kid.id);
assert.strictEqual(S.profiles().length, 0);
S.importCode(code);
assert.strictEqual(S.profiles()[0].name, 'Olena');

// Every script in index.html is in the offline cache list of sw.js.
const root = path.join(__dirname, '..');
const scripts = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script src="([^"]+)"/g)].map((x) => x[1]);
const cached = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
for (const s of scripts.concat('css/style.css')) assert.ok(cached.includes(`'${s}'`), s + ' is missing from FILES in sw.js');

// Family key: same code + PIN → same key on every device, whatever the spacing and case.
(async () => {
  const k1 = await APP.cloud.deriveId('Smith Tigers', '1234');
  const k2 = await APP.cloud.deriveId(' smith-tigers ', ' 1234');
  assert.strictEqual(k1, k2);
  assert.match(k1, /^[a-f0-9]{64}$/, 'matches the pattern in firestore.rules');
  assert.notStrictEqual(k1, await APP.cloud.deriveId('smith-tigers', '1235'));

  // One family code + PIN for all our apps: the root is the key Math Expedition already uses,
  // and each app keeps its data under its own key derived from the root.
  const MATH_KEY = 'd359f955e02a16da5751505a2d0bc555a26c7a08f33ac7eb1a1469ded2b601e6'; // Math Expedition: smith-tigers + 1234
  const root = await APP.cloud.deriveRoot('smith-tigers', '1234');
  assert.strictEqual(root, MATH_KEY, 'same family root as Math Expedition');
  assert.strictEqual(await APP.cloud.appKey(root, 'math-expedition'), MATH_KEY, 'Math Expedition keeps its data under the root');
  assert.strictEqual(k1, await APP.cloud.appKey(root), 'this app: key from the root');
  assert.notStrictEqual(k1, root);
  assert.notStrictEqual(await APP.cloud.appKey(root, 'writing-power'), await APP.cloud.appKey(root, 'english-grammar'), 'apps do not share data');

  // A family another app connected on this device can be joined without the PIN.
  assert.strictEqual(APP.cloud.sibling(), null);
  localStorage.setItem('math-expedition-family', JSON.stringify({ fid: MATH_KEY, name: 'smith-tigers' })); // Math's older link: no root
  assert.deepStrictEqual(APP.cloud.sibling(), { root: MATH_KEY, name: 'smith-tigers', app: 'Math Expedition' });
  localStorage.removeItem('math-expedition-family');
  localStorage.setItem('writing-power-family', JSON.stringify({ root: MATH_KEY, fid: 'x', name: 'smith-tigers' }));
  assert.strictEqual(APP.cloud.sibling().app, 'WritingPower');
  localStorage.removeItem('writing-power-family');

  // Catch-up on start: what never reached the server goes up; what was deleted elsewhere goes away here.
  const plan = (l, srv, syn) => { const p = APP.cloud.catchUpPlan(l, srv, syn); return [p.upload.join(), p.remove.join(), JSON.stringify(p.onServer)]; };
  assert.deepStrictEqual(plan([{ id: 'a', rev: 5 }], { a: 5 }, {}), ['', '', '{"a":5}'], 'in sync: nothing to do');
  assert.deepStrictEqual(plan([{ id: 'a', rev: 6 }], { a: 5 }, { a: 5 }), ['a', '', '{}'], 'a change that never went up is uploaded');
  assert.deepStrictEqual(plan([{ id: 'a', rev: 4 }], { a: 5 }, {}), ['', '', '{"a":5}'], 'the server is newer: the live update brings it');
  assert.deepStrictEqual(plan([{ id: 'n', rev: 3 }], {}, {}), ['n', '', '{}'], 'a new profile that never went up is uploaded');
  assert.deepStrictEqual(plan([{ id: 'd', rev: 3 }], {}, { d: 3 }), ['', 'd', '{}'], 'deleted on another device: removed here too');
  assert.deepStrictEqual(plan([{ id: 'd', rev: 4 }], {}, { d: 3 }), ['d', '', '{}'], 'changed here after it was deleted elsewhere: kept and uploaded');
  assert.deepStrictEqual(plan([{ id: 'd', rev: 3 }, { id: 'a', rev: 1 }], { a: 1 }, null), ['', '', '{"a":1}'], 'no record yet: a missing profile is left alone');
  console.log('shell tests passed');
})().catch((e) => { console.error(e); process.exit(1); });
