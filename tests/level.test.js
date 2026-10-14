// Run: node tests/level.test.js
// Tiers and sessions: a lesson adapts its tier, a lesson result moves a topic forward, the level check sets starting
// tiers, Challenge uses only started topics, Review mixes topics, and recording an answer updates the profile.
const assert = require('assert');
const APP = require('./load');
const L = APP.level, C = APP.content, R = APP.srs;
const fresh = (kind = 'B1') => Object.assign(APP.schema.fresh(), { kind, days: {} });

// Starting tier comes from the profile level.
assert.strictEqual(L.tier(fresh('B1'), 'pp'), 1);
assert.strictEqual(L.tier(fresh('B2'), 'pp'), 2);

// A lesson: 10 exercises, no repeats, choosing only as a warm-up, types vary.
let st = fresh();
let s = L.lesson(st, 'pp');
const seen = new Set();
let prevType = null, sameTypeRuns = 0;
for (let i = 0; i < 10; i++) {
  const c = L.next(s, st, {});
  assert.ok(c && !seen.has(c.it.id) && c.it.topic === 'pp');
  if (i >= 3) assert.notStrictEqual(c.it.t, 'choose', 'multiple choice only in the first exercises');
  if (c.it.t === prevType) sameTypeRuns++;
  prevType = c.it.t;
  seen.add(c.it.id);
  L.answer(s, st, c.it, true, c.it.a[0], '2026-10-01');
}
assert.strictEqual(L.next(s, st, {}), null, 'the lesson ends after 10');
assert.ok(sameTypeRuns <= 2, 'exercise types change');
assert.strictEqual(s.tier, 3, '3 right in a row → up a tier, twice');
let res = L.finish(s, st, '2026-10-01');
assert.strictEqual(st.topics.pp.tier, 3);
assert.ok(st.topics.pp.reached >= 1);
assert.strictEqual(st.lastTopic, 'pp');
assert.strictEqual(st.stats.answers, 10);
assert.strictEqual(res.tierFrom, 1);

// Two mistakes at a tier → down a tier.
st = fresh();
s = L.lesson(st, 'art', 2);
const c1 = L.next(s, st, {});
assert.strictEqual(L.answer(s, st, c1.it, false, 'nonsense', '2026-10-01').change, 0);
const c2 = L.next(s, st, {});
assert.strictEqual(L.answer(s, st, c2.it, false, 'nonsense', '2026-10-01').change, -1);
assert.strictEqual(s.tier, 1);
// A wrong answer is recorded: totals, mistake type, recent mistakes, a card due today.
assert.strictEqual(st.stats.correct, 0);
assert.ok(Object.values(st.errors).reduce((x, y) => x + y, 0) === 2);
assert.strictEqual(st.recent[0].g, 'nonsense');
assert.ok(R.due(st, '2026-10-01').length >= 1);

// "Fix my mistakes" brings different sentences of the same patterns.
const missed = [c1.it, c2.it];
const fix = L.fix(st, missed);
assert.strictEqual(fix.n, 2);
fix.queue.forEach((it, i) => { assert.strictEqual(R.key(it), R.key(missed[i])); assert.notStrictEqual(it.id, missed[i].id); });

// Review mixes the due cards of all topics.
st = fresh();
for (const id of ['pp', 'art', 'cond']) R.record(st, C.byId[id].items[0], false, '2026-10-01');
const rv = L.review(st, '2026-10-01');
assert.strictEqual(rv.n, 3);
assert.deepStrictEqual(new Set(rv.queue.map((i) => i.topic)), new Set(['pp', 'art', 'cond']));

// Level check: two typed exercises per topic; all right → Pro, half → Use, none → Core.
st = fresh();
const dg = L.diag();
assert.strictEqual(dg.n, C.topics.length * 2);
assert.ok(dg.queue.every((it) => it.t !== 'choose' && it.t !== 'build'), 'the level check has no multiple choice');
dg.queue.forEach((it, i) => {
  const right = it.topic === 'pp' || (it.topic === 'art' && i % 2 === 0);
  L.next(dg, st, {});
  L.answer(dg, st, it, right, right ? it.a[0] : 'x', '2026-10-01');
});
res = L.finish(dg, st, '2026-10-01');
assert.strictEqual(res.tiers.pp, 3);
assert.strictEqual(res.tiers.art, 2);
assert.strictEqual(res.tiers.cond, 1);
assert.strictEqual(L.tier(st, 'pp'), 3);
assert.ok(st.diag && st.diag.tiers.cond === 1);

// Challenge: only started topics (when there are at least two), Use and Pro tiers, no multiple choice.
st = fresh();
st.topics.pp = { tier: 2, reached: 1, done: 1, a: 10, c: 8, check: 0 };
st.topics.fut = { tier: 1, reached: 0, done: 1, a: 10, c: 5, check: 0 };
const ch = L.challenge(st);
assert.strictEqual(ch.n, 15);
assert.ok(ch.queue.every((it) => ['pp', 'fut'].includes(it.topic) && it.l >= 2 && it.t !== 'choose'));

// Topic check: 75% or more → mastered.
st = fresh();
const tc = L.check(st, 'q');
tc.queue.forEach((it) => { L.next(tc, st, {}); L.answer(tc, st, it, true, it.a[0], '2026-10-01'); });
res = L.finish(tc, st, '2026-10-01');
assert.ok(res.passed);
assert.strictEqual(L.status(st, 'q', '2026-10-01').state, 'mastered');

// Practice one type of mistake.
const dr = L.drill(fresh(), 'art:no-a');
assert.ok(dr.n >= 3 && dr.queue.every((it) => it.e === 'art:no-a' || Object.values(it.w).includes('art:no-a')));

// Up next: the last topic if not mastered, else the first one not mastered.
st = fresh();
assert.strictEqual(L.upNext(st).id, C.topics[0].id);
st.topics.cond = { tier: 2, reached: 1, done: 2, a: 20, c: 15, check: 0 };
st.lastTopic = 'cond';
assert.strictEqual(L.upNext(st).id, 'cond');
console.log('level tests passed');
