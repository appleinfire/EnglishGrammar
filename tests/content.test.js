// Run: node tests/content.test.js
// Every topic and exercise is complete and consistent: three languages for rules and explanations, every tier and
// pattern has enough sentences (review brings a different sentence of the same pattern), right answers are accepted
// by the checker, and the known wrong answers are not.
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const root = path.join(__dirname, '..');
for (const f of ['config', 'util', 'check', 'content', 'i18n']) require(path.join(root, 'js', f + '.js'));
const topicFiles = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script src="(js\/topics\/[^"]+)"/g)].map((m) => m[1]);
assert.ok(topicFiles.length > 0, 'index.html loads the topics');
assert.deepStrictEqual(topicFiles.slice().sort(), fs.readdirSync(path.join(root, 'js', 'topics')).map((f) => 'js/topics/' + f).sort(), 'every file in js/topics is loaded by index.html');
for (const f of topicFiles) require(path.join(root, f));
const APP = globalThis.APP, C = APP.content, K = APP.check;
APP.state = null;
global.document = undefined;
for (const f of ['exercises']) require(path.join(root, 'js', f + '.js'));
const X = APP.ex;

const LANGS = ['en', 'uk', 'ru'];
const TYPES = new Set(['choose', 'fill', 'build', 'fix', 'tr', 'tl']);
const PRODUCE = new Set(['fill', 'fix', 'tr', 'tl']);
const problems = [];
const need = (cond, msg) => { if (!cond) problems.push(msg); };
const ids = new Set();
let total = 0;

for (const T of C.topics) {
  const where = (s) => `${T.id}: ${s}`;
  for (const k of ['title', 'level', 'group', 'icon', 'about']) need(T[k], where('missing ' + k));
  for (const l of LANGS) need(T.rule && T.rule[l], where('rule in ' + l));
  need(T.examples && T.examples.length >= 3, where('at least 3 examples'));
  need(T.trap && T.trap.uk && T.trap.ru && T.trap.wrong && T.trap.right, where('trap'));
  for (const l of LANGS) need(T.trap && T.trap.note && T.trap.note[l], where('trap note in ' + l));
  for (const [id, e] of Object.entries(T.errors)) for (const l of LANGS) need(e[l], where(`error ${id} in ${l}`));
  const used = new Set();
  for (const it of T.items) {
    total++;
    const w = (s) => where(`${it.t} "${it.p || it.uk || it.a[0]}": ${s}`);
    need(!ids.has(it.id), w('duplicate item'));
    ids.add(it.id);
    need(TYPES.has(it.t), w('unknown type'));
    need(it.pt, w('no pattern'));
    need([1, 2, 3].includes(it.l), w('tier must be 1, 2 or 3'));
    need(it.a.length && it.a.every((a) => typeof a === 'string' && a.trim()), w('no answer'));
    need(it.e && C.errors[it.e], w('error id ' + it.e + ' is not defined'));
    for (const e of Object.values(it.w)) need(C.errors[e], w('error id ' + e + ' is not defined'));
    [it.e, ...Object.values(it.w)].forEach((e) => used.add(e));
    const cur = { it, mode: 'type' };
    // every right answer is accepted
    for (const a of it.a.concat(it.am)) {
      const given = it.t === 'build' || it.t === 'choose' || it.t === 'fill' ? a : a;
      need(X.judge(cur, given).ok, w('right answer not accepted: ' + a));
    }
    // known wrong answers are not
    for (const bad of Object.keys(it.w)) if (it.t !== 'choose') need(!X.judge(cur, bad).ok, w('wrong answer accepted: ' + bad));
    if (it.t === 'choose') {
      need(/_{3,}/.test(it.p), w('choose needs a ___ blank'));
      need(it.o.length >= 1 && !it.o.includes(it.a[0]), w('options'));
      for (const o of it.o) need(!X.judge(cur, o).ok, w('wrong option accepted: ' + o));
      for (const k of Object.keys(it.w)) need(it.o.includes(k), w('w key is not an option: ' + k));
    }
    if (it.t === 'fill') {
      const blanks = (it.p.match(/_{3,}/g) || []).length;
      need(blanks >= 1, w('fill needs a ___ blank'));
      for (const a of it.a.concat(it.am, Object.keys(it.w))) need(a.split('|').length === blanks, w(`"${a}" needs ${blanks} part(s)`));
    }
    if (it.t === 'build') {
      need(it.a.length === 1 || it.a.slice(1).every((a) => K.tokens(a).slice().sort().join() === K.tokens(it.a[0]).slice().sort().join()), w('build: other answers must use the same words'));
      need(K.tokens(it.a[0]).length <= 14, w('build: too many tiles'));
    }
    if (it.t === 'fix') {
      need(it.p, w('fix needs the wrong sentence'));
      need(!X.judge(cur, it.p).ok, w('the sentence to fix is already accepted'));
    }
    if (it.t === 'tr') need(it.i && it.p, w('tr needs i and p'));
    if (it.t === 'tl') need(it.uk && it.ru, w('tl needs uk and ru'));
  }
  for (const id of Object.keys(T.errors)) need(used.has(id), where(`error ${id} is never used`));
  for (const tier of [1, 2, 3]) need(T.items.filter((i) => i.l === tier).length >= 10, where(`tier ${tier} needs at least 10 items (has ${T.items.filter((i) => i.l === tier).length})`));
  const pts = {};
  T.items.forEach((i) => (pts[i.pt] = (pts[i.pt] || 0) + 1));
  for (const [pt, n] of Object.entries(pts)) need(n >= 3, where(`pattern ${pt} needs at least 3 items (has ${n})`));
  need(T.items.length >= 45, where(`needs at least 45 items (has ${T.items.length})`));
  need(T.items.some((i) => i.l === 2 && PRODUCE.has(i.t)) && T.items.some((i) => i.l === 3 && PRODUCE.has(i.t)), where('level check needs typed items at tiers 2 and 3'));
  for (const tp of ['choose', 'fill', 'build', 'fix', 'tr', 'tl']) need(T.items.some((i) => i.t === tp), where('no ' + tp + ' exercise'));
}

if (problems.length) { console.error(problems.join('\n')); console.error(`\n${problems.length} problem(s)`); process.exit(1); }
console.log(`content tests passed: ${C.topics.length} topics, ${total} exercises`);
