// Run: node tests/level.test.js
// Tiers and sessions: a lesson adapts its tier, a lesson result moves a topic forward, the level check sets starting
// tiers, Challenge uses only started topics, Review mixes topics, and recording an answer updates the profile.
// Endless never ends and adapts every topic on its own; a dialog counts for the grammar topics it trains.
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

// Level check, adaptive: one typed Pro exercise per topic, level by level (A2, B1, B2, C1).
const levelOf = (it) => C.byId[it.topic].level;
const runDiag = (rightFor) => {
  const s2 = fresh();
  const d = L.diag();
  assert.strictEqual(d.n, C.topics.length, 'at most one exercise per topic');
  let c;
  while ((c = L.next(d, s2, {}))) {
    assert.ok(c.it.t !== 'choose' && c.it.t !== 'build', 'the level check has no multiple choice');
    const right = rightFor(c.it, d.log.length);
    L.answer(d, s2, c.it, right, right ? c.it.a[0] : 'x', '2026-10-01');
  }
  return { st: s2, d, res: L.finish(d, s2, '2026-10-01') };
};
const levels = L.LEVELS.filter((lv) => C.topics.some((T) => T.level === lv));
// Levels come in order.
let r1 = runDiag(() => true);
const seenLv = r1.d.log.map((x) => levelOf(C.itemById[x.id]));
assert.deepStrictEqual([...new Set(seenLv)], levels, 'A2 first, then B1, B2, C1');
assert.strictEqual(r1.d.log.length, C.topics.length, 'all right: every topic is checked');
assert.strictEqual(r1.res.level, levels[levels.length - 1]);
assert.ok(Object.values(r1.res.tiers).every((t) => t === 3), 'right → start at Pro');
// Fewer than half right at the first level: the check stops there; those topics start at Core.
let r2 = runDiag(() => false);
assert.ok(r2.d.log.every((x) => levelOf(C.itemById[x.id]) === levels[0]), 'stops after the first level');
assert.strictEqual(r2.res.level, 'A2');
assert.ok(Object.values(r2.res.tiers).every((t) => t === 1));
assert.strictEqual(L.tier(r2.st, r2.d.log[0].id.split('.')[0]), 1);
// A2 all right, second level all wrong: the check stops after it, the third level is never shown.
if (levels.length > 2) {
  const r3 = runDiag((it) => levelOf(it) === levels[0]);
  assert.ok(!r3.d.log.some((x) => levelOf(C.itemById[x.id]) === levels[2]));
  assert.strictEqual(r3.res.level, levels[0]);
}
// Mostly right at a level (70%+): a wrong topic starts at Use, not Core.
let k = 0;
const r4 = runDiag((it) => levelOf(it) !== levels[1] || k++ % 5 !== 0);
const wrongB1 = r4.d.log.find((x) => !x.ok);
assert.strictEqual(r4.res.tiers[C.itemById[wrongB1.id].topic], 2);
assert.ok(r4.st.diag && r4.st.diag.level);
// After a level check, "up next" is the first topic that starts at Core.
const firstCore = C.topics.find((T) => r2.st.diag.tiers[T.id] === 1);
assert.strictEqual(L.upNext(r2.st).id, firstCore.id);

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

// Up next: the last topic if not mastered, else the first one at her level.
st = fresh();
assert.strictEqual(L.upNext(st).id, C.topics.find((T) => T.level === 'B1').id, 'a B1 learner starts with the first B1 topic');
assert.strictEqual(L.upNext(Object.assign(fresh('A2'))).id, C.topics[0].id, 'an A2 learner starts at the beginning');
st.topics.cond = { tier: 2, reached: 1, done: 2, a: 20, c: 15, check: 0 };
st.lastTopic = 'cond';
assert.strictEqual(L.upNext(st).id, 'cond');
// Endless: never the same topic twice in a row, every topic keeps its own tier, a due pattern comes back every 4th.
const seeded = (n) => () => ((n = (n * 16807) % 2147483647) / 2147483647);
const D0 = '2026-10-01';
st = fresh();
st.topics.pp = { tier: 1, reached: 0, done: 1, a: 10, c: 8, check: 0 };
st.topics.art = { tier: 2, reached: 1, done: 1, a: 10, c: 5, check: 0 };
st.topics.fut = { tier: 1, reached: 0, done: 1, a: 10, c: 9, check: 0 };
R.record(st, C.byId.fut.items[0], false, D0);
const dueKey = R.key(C.byId.fut.items[0]);
let en = L.endless(st, {});
en.rand = seeded(7);
assert.deepStrictEqual(en.topics.slice().sort(), ['art', 'fut', 'pp'], 'my topics = the started ones');
assert.strictEqual(en.n, Infinity);
let prevTopic = null, reviewed = false;
for (let i = 0; i < 60; i++) {
  const c = L.next(en, st, { day: D0 });
  assert.ok(c, 'Endless never runs out');
  assert.notStrictEqual(c.it.topic, prevTopic, 'never the same topic twice in a row');
  assert.ok(['pp', 'art', 'fut'].includes(c.it.topic));
  assert.ok(!c.it.scene, 'grammar sentences only');
  if (c.review) { assert.strictEqual(en.log.length % 4, 3, 'a review comes as every 4th'); if (R.key(c.it) === dueKey) reviewed = true; }
  prevTopic = c.it.topic;
  L.answer(en, st, c.it, c.it.topic !== 'art', 'x', D0);
}
assert.ok(reviewed, 'the pattern due for review came back');
assert.strictEqual(en.tiers.pp, 3, 'pp: right answers → up to Pro');
assert.strictEqual(en.tiers.art, 1, 'art: mistakes → down to Core');
res = L.finish(en, st, D0);
assert.strictEqual(st.topics.pp.tier, 3, 'the next lesson starts at the tier reached');
assert.strictEqual(st.topics.pp.reached, 0, 'passing a tier still needs a lesson');
assert.strictEqual(st.topics.art.tier, 1);
assert.deepStrictEqual(res.changes.map((x) => x.id).sort(), ['art', 'fut', 'pp'], 'every topic moved on its own');
assert.ok(res.best >= 1 && st.stats.endlessBest === res.best, 'the longest run is the record');
// One topic: sentences are reused when they run out; a lightning round ends when its time is up.
st = fresh();
en = L.endless(st, { topics: ['too'] });
for (let i = 0; i < 120; i++) { const c = L.next(en, st, { day: D0 }); assert.ok(c && c.it.topic === 'too'); L.answer(en, st, c.it, true, c.it.a[0], D0); }
en = L.endless(st, { timer: 120 });
assert.ok(L.next(en, st, { day: D0 }));
assert.strictEqual(L.next(en, st, { day: D0, now: Date.now() + 121000 }), null, 'time is up');
// Sources: lines of the dialogs, or both.
en = L.endless(fresh(), { src: 'scenes' });
for (let i = 0; i < 20; i++) { const c = L.next(en, st, { day: D0 }); assert.ok(c.it.scene && C.context(c.it) !== undefined); L.answer(en, st, c.it, true, c.it.a[0], D0); }
en = L.endless(fresh(), { src: 'mix', topics: ['iq', 'pp', 'fut', 'gi'] });
en.rand = seeded(3);
const kinds = new Set();
for (let i = 0; i < 40; i++) { const c = L.next(en, st, { day: D0 }); kinds.add(!!c.it.scene); L.answer(en, st, c.it, true, c.it.a[0], D0); }
assert.strictEqual(kinds.size, 2, 'mixed: topic sentences and dialog lines');

// A dialog: its exercises in order; the best score is kept; a mistake counts for the grammar topic, and the review
// card brings an ordinary sentence of that topic.
st = fresh();
const scn = L.scene(st, 'doctor');
assert.strictEqual(scn.n, C.sceneById.doctor.items.length);
let first = null;
for (let i = 0; i < scn.n; i++) {
  const c = L.next(scn, st, {});
  assert.strictEqual(c.it, C.sceneById.doctor.items[i]);
  if (!first) first = c.it;
  L.answer(scn, st, c.it, i > 0, i > 0 ? c.it.a[0] : 'wrong', D0);
}
assert.strictEqual(L.next(scn, st, {}), null);
res = L.finish(scn, st, D0);
assert.strictEqual(st.scenes.doctor, Math.round(((scn.n - 1) / scn.n) * 100));
assert.ok(st.topics[first.topic].a >= 1, 'the answer counts for the grammar topic');
assert.ok(R.due(st, D0).includes(R.key(first)), 'the mistake is a review card of the grammar topic');
const back = R.pick(st, R.key(first), 2);
assert.ok(back && !back.scene && back.topic === first.topic && back.pt === first.pt, 'review brings a topic sentence of the same pattern');
assert.ok(!L.drill(st, first.e).queue.some((it) => it.scene), 'practicing a mistake uses topic sentences');
const again = L.scene(st, 'doctor');
again.queue.forEach((it) => { L.next(again, st, {}); L.answer(again, st, it, false, 'x', D0); });
L.finish(again, st, D0);
assert.strictEqual(st.scenes.doctor, Math.round(((scn.n - 1) / scn.n) * 100), 'the best score stays');
console.log('level tests passed');
