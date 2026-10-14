// Run: node tests/srs.test.js
// Spaced repetition: boxes and intervals, a mistake brings the pattern back today, a pattern moves up once a day,
// and a card comes back with a different sentence of the same pattern.
const assert = require('assert');
const APP = require('./load');
const R = APP.srs, C = APP.content;
const st = APP.schema.fresh();
const it = C.byId.pp.items.find((i) => i.pt === 'since' || i.pt === 'period');
const key = R.key(it);
const D1 = '2026-10-01';

assert.strictEqual(R.addDays('2026-10-30', 3), '2026-11-02');
assert.strictEqual(R.addDays('2026-03-01', -1), '2026-02-28');

// First right answer: box 1, back tomorrow.
R.record(st, it, true, D1, 1);
assert.deepStrictEqual([st.cards[key].box, st.cards[key].due], [1, '2026-10-02']);
// Another right answer the same day does not move it again.
R.record(st, it, true, D1, 2);
assert.strictEqual(st.cards[key].box, 1);
// Next day: box 2, back in 3 days; then 7, 14, 30.
R.record(st, it, true, '2026-10-02', 3);
assert.deepStrictEqual([st.cards[key].box, st.cards[key].due], [2, '2026-10-05']);
R.record(st, it, true, '2026-10-05', 4);
assert.deepStrictEqual([st.cards[key].box, st.cards[key].due], [3, '2026-10-12']);
assert.ok(R.learned(st.cards[key]), 'right on three different days → learned');
// A mistake: box 1, due today, waiting to be fixed.
let res = R.record(st, it, false, '2026-10-12', 5);
assert.deepStrictEqual([st.cards[key].box, st.cards[key].due, st.cards[key].pend], [1, '2026-10-12', true]);
assert.deepStrictEqual(R.due(st, '2026-10-12'), [key]);
// Fixed the same day: counts as fixed, but comes back tomorrow (no jump on the day of a mistake).
res = R.record(st, it, true, '2026-10-12', 6);
assert.ok(res.fixed);
assert.deepStrictEqual([st.cards[key].box, st.cards[key].due], [1, '2026-10-13']);
assert.deepStrictEqual(R.due(st, '2026-10-12'), []);
assert.deepStrictEqual(R.due(st, '2026-10-13'), [key]);

// A card brings a different sentence of the same pattern than the one shown last time.
st.cards[key].last = it.id;
for (let n = 0; n < 20; n++) {
  const other = R.pick(st, key, 2);
  assert.ok(other && other.id !== it.id && R.key(other) === key);
}
// …and never one already used in this session.
const used = new Set(C.byId.pp.items.filter((i) => R.key(i) === key).map((i) => i.id));
const last = [...used].pop();
used.delete(last);
assert.strictEqual(R.pick(st, key, 2, used).id, last);
// Mistakes and low boxes come first in the review list.
st.cards['pp:exp'] = { box: 3, due: '2026-10-10', seen: 1, ok: 3, miss: 0 };
st.cards['art:the-known'] = { box: 1, due: '2026-10-13', seen: 1, ok: 0, miss: 1 };
assert.deepStrictEqual(R.due(st, '2026-10-13'), ['pp:' + it.pt, 'art:the-known', 'pp:exp'].sort((a, b) => st.cards[a].box - st.cards[b].box || (st.cards[a].due < st.cards[b].due ? -1 : 1)));
assert.strictEqual(st.cards[R.due(st, '2026-10-13')[0]].box, 1);
console.log('srs tests passed');
