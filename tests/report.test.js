// Run: node tests/report.test.js
// The weekly report: answers are logged per day, a week runs Monday to Sunday, it is compared with the week before,
// suggests what to focus on, and last week's report waits on the home screen until it is opened.
const assert = require('assert');
const APP = require('./load');
const L = APP.level, C = APP.content, W = APP.report, R = APP.srs;
const fresh = () => Object.assign(APP.schema.fresh(), { kind: 'B1', days: {} });
const tally = (st, day, ok) => { const d = (st.days[day] = st.days[day] || { a: 0, c: 0 }); d.a++; if (ok) d.c++; };

// Weeks start on Monday. 2026-10-14 is a Wednesday.
assert.strictEqual(W.monday('2026-10-14'), '2026-10-12');
assert.strictEqual(W.monday('2026-10-12'), '2026-10-12');
assert.strictEqual(W.monday('2026-10-18'), '2026-10-12', 'Sunday belongs to the week that started on Monday');
assert.strictEqual(W.monday('2026-11-01'), '2026-10-26', 'across a month');
assert.strictEqual(W.range(W.week(fresh(), '2026-10-05')), 'Oct 5 – Oct 11');

// Recording answers fills the day log: answers and right answers per topic, mistakes by type.
const st = fresh();
const pp = C.byId.pp.items.filter((i) => i.l === 1);
const art = C.byId.art.items.filter((i) => i.l === 1);
const day1 = '2026-10-06', day2 = '2026-10-08';
for (const [i, it] of pp.slice(0, 8).entries()) { const ok = i % 4 !== 0; L.record(st, it, ok, ok ? it.a[0] : 'zzz', day1); tally(st, day1, ok); }
for (const it of art.slice(0, 5)) { L.record(st, it, false, 'zzz', day2); tally(st, day2, false); }
st.time[day1] = 15 * 60;
st.time[day2] = 4 * 60;
assert.strictEqual(st.log[day1].t.pp, 8);
assert.strictEqual(st.log[day1].r.pp, 6);
assert.strictEqual(Object.values(st.log[day2].e).reduce((a, b) => a + b, 0), 5, 'every mistake has a type');

// A pattern answered wrong, then right on a later day, counts as fixed in the log of that day.
const it0 = pp[0];
const stf = fresh();
L.record(stf, it0, false, 'zzz', day1);
L.record(stf, it0, true, it0.a[0], day2);
assert.strictEqual(stf.log[day2].f, 1, 'mistake fixed');
assert.ok(!stf.log[day1].f);
L.record(st, it0, true, it0.a[0], day2);
tally(st, day2, true);
// Right answers on three different days put a card in box 3: learned that day.
const st2 = fresh();
['2026-10-06', '2026-10-07', '2026-10-08'].forEach((d) => L.record(st2, it0, true, it0.a[0], d));
assert.strictEqual(st2.log['2026-10-08'].l, 1, 'pattern learned on the third day');
assert.ok(!st2.log['2026-10-07'].l);

// The week: totals, accuracy, active days, goal days, topics and mistakes.
const w = W.week(st, '2026-10-05');
assert.strictEqual(w.a, 14);
assert.strictEqual(w.c, 7);
assert.strictEqual(w.acc, 50);
assert.strictEqual(w.min, 19);
assert.strictEqual(w.active, 2, 'a day with 5+ answers is active');
assert.strictEqual(w.goalDays, 1, 'one day reached the 10-minute goal');
assert.strictEqual(w.f, st.log[day1].f + st.log[day2].f);
assert.deepStrictEqual(w.topicList.map((t) => t.id), ['pp', 'art'], 'topics sorted by answers');
assert.deepStrictEqual(w.topicList[0], { id: 'pp', a: 9, c: 7 });
assert.ok(w.errorList.length && w.errorList[0].n >= w.errorList[w.errorList.length - 1].n, 'mistakes sorted by count');
assert.strictEqual(w.days.length, 7);
assert.strictEqual(w.days[1].min, 15, 'Tuesday');
assert.strictEqual(W.week(st, '2026-10-12').a, 0, 'nothing in the next week');

// Focus: the weakest topic with 6+ answers under 80% (art has only 5 answers yet), else the most frequent mistake.
let rep = W.report(st, '2026-10-05');
assert.strictEqual(rep.prev.a, 0);
assert.deepStrictEqual(rep.focus, { kind: 'topic', id: 'pp', acc: 78 });
const fw = W.week(stf, '2026-10-05');
assert.deepStrictEqual(W.focus(stf, fw), { kind: 'error', id: fw.errorList[0].id, n: 1 }, 'too few answers for a topic: the most frequent mistake');
L.record(st, art[5], false, 'zzz', day2);
tally(st, day2, false);
rep = W.report(st, '2026-10-05');
assert.strictEqual(rep.focus.kind, 'topic');
assert.strictEqual(rep.focus.id, 'art', 'art: 6 answers, 0% right');
assert.strictEqual(W.focus(fresh(), W.week(fresh(), '2026-10-05')).kind, 'next', 'an empty week points to the next topic');

// Passing a tier in a lesson is logged.
const st3 = fresh();
const s = L.lesson(st3, 'pp', 1);
for (let i = 0; i < 10; i++) { const c = L.next(s, st3, {}); L.answer(s, st3, c.it, true, c.it.a[0], '2026-10-07'); }
const res = L.finish(s, st3, '2026-10-07');
assert.ok(res.up > 0 && st3.log['2026-10-07'].u === res.up, 'tiers passed in the log');

// Last week's report waits until it is opened; an empty week has no report.
assert.strictEqual(W.pending(st, '2026-10-14'), '2026-10-05');
assert.strictEqual(W.pending(st, '2026-10-09'), '', 'the week is not over yet');
assert.strictEqual(W.pending(st, '2026-10-21'), '', 'the week before had no practice');
st.reportSeen = '2026-10-05';
assert.strictEqual(W.pending(st, '2026-10-14'), '');

// The text to share.
const text = W.text(Object.assign(st, { name: 'Olena' }), W.report(st, '2026-10-05'));
assert.ok(text.includes('Olena') && text.includes('Oct 5 – Oct 11') && text.includes('15 answers') && text.includes('Present Perfect'.slice(0, 7)), text);

// The log keeps 120 days.
const st4 = fresh();
for (let i = 0; i < 130; i++) L.dayLog(st4, R.addDays('2026-01-01', i));
assert.strictEqual(Object.keys(st4.log).length, L.LOG_DAYS);
assert.ok(!st4.log['2026-01-01'] && st4.log[R.addDays('2026-01-01', 129)]);

console.log('report tests passed');
