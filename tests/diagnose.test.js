// Run: node tests/diagnose.test.js
// What exactly is wrong in a wrong answer: every difference as a fix (change, add, remove, move), each with its own
// reason, and the exercise's own explanation only when her mistake is in what the exercise trains.
const assert = require('assert');
const APP = require('./load');
const C = APP.content, D = APP.diag, L = APP.level, X = APP.ex;

const item = (t, a0) => C.items.concat(C.sceneItems).find((i) => i.t === t && i.a[0] === a0);
const diag = (it, given, mode = 'type') => D.diagnose(it, given, X.judge({ it, mode }, given).right, mode);
const lines = (d) => d.ops.map((o) => D.fixLine(o));
const LANGS = ['en', 'uk', 'ru'];

// The fixes, from the differences
let ops = D.ops('the party is at seven on Saturday.', 'The party is on Saturday at seven.');
assert.deepStrictEqual(ops.map((o) => [o.kind, o.rw]), [['move', 'at seven']], 'a phrase in another place is one move');
assert.deepStrictEqual(D.ops('She takes usually the bus.', 'She usually takes the bus.').map((o) => D.fixLine(o)), ['Put **usually** before *takes*'], 'the small word is the one that moves');
assert.deepStrictEqual(D.ops("I don't have plans for weekend.", "I don't have any plans for the weekend.").map((o) => D.fixLine(o)), ['Add **any** before *plans*', 'Add **the** before *weekend*']);
assert.deepStrictEqual(D.ops('I see you on Monday.', "I'll see you on Monday.").map((o) => o.rw), ['will'], 'only the missing part of a contraction');
assert.deepStrictEqual(D.ops('He go to school.', 'He went to school.').map((o) => [o.kind, o.gw, o.rw]), [['change', 'go', 'went']]);
assert.deepStrictEqual(D.ops('Yes, she is.', 'Yes, she is.'), [], 'no differences, no fixes');

// The case from the report: "on Saturday" was right, the order of "at seven" was not. Both orders are right English.
const party = item('build', 'The party is on Saturday at seven.');
assert.ok(X.judge({ it: party, mode: 'type' }, 'the party is at seven on Saturday.').ok, 'at seven on Saturday is right too');
let d = diag(party, 'the party is on Saturday seven at.');
assert.ok(!d.own && d.err === null, 'the preposition was right: the mistake is not "on + a day"');
assert.deepStrictEqual(lines(d), ['Put **at** before *seven*']);
assert.strictEqual(d.ops[0].gen, 'order-prep', 'and the reason is about that word order');
d = diag(party, 'the party is in Saturday at seven.');
assert.ok(d.own && d.err === 'prep:time-on', 'the extra tile in place of "on": the exercise\'s own mistake');
d = diag(party, 'the party is on Saturday in seven.');
assert.ok(d.own && d.err === 'prep:time-at', 'in place of "at": the mistake with "at", not the usual one of the exercise');
assert.deepStrictEqual(lines(d), ['*in* → **at**']);
d = diag(party, 'seven the Saturday on party at is.');
assert.ok(!d.own && d.ops.length === 1 && d.ops[0].whole && d.ops[0].gen === 'order', 'all the words mixed up: one fix, word order');

// Word order a topic teaches is that topic's mistake
const q = item('build', 'Where does your sister live?');
d = diag(q, 'where your sister does live?');
assert.ok(d.own && d.err === 'q:order');
d = diag(q, 'where does your sister lives?');
assert.ok(d.own && d.err === 'q:does-s', 'the ending after "does", a few words back');
assert.strictEqual(diag(item('build', 'Can you turn it off?'), 'can you turn off it?').err, 'phr:pronoun');
assert.strictEqual(diag(item('build', 'She usually takes the bus to work.'), 'she takes usually the bus to work.').ops[0].gen, 'order-adv');

// Find the mistake: fixed, but something else went wrong
const fix = C.byId.art.items.find((i) => i.t === 'fix' && i.p === 'My husband is engineer.');
d = diag(fix, 'My husband is engineer.');
assert.ok(d.own && d.err === fix.e, 'left as it was: the exercise\'s mistake');
d = diag(fix, 'My husband are an engineer.');
assert.ok(!d.own && d.ops.length === 1 && d.ops[0].gen === 'agree', 'the article was fixed; the new mistake is explained instead');
d = diag(fix, 'My husband is a engineer.');
assert.ok(d.own && d.err === 'art:a-an', 'a / an: the precise mistake of the topic');

// Translations: the topic's mistake only when it is in what the topic is about
const fl = C.byId.pp.items.find((i) => i.t === 'tl' && i.a.includes('Have you ever been to Florida?'));
const dfl = (g) => D.diagnose(fl, g, 'Have you ever been to Florida?');
assert.ok(dfl('Have you ever went to Florida?').own && dfl('Have you ever went to Florida?').err === 'pp:form');
d = dfl('Have you ever been in Florida?');
assert.ok(!d.own && d.ops[0].gen === 'prep', 'a preposition in a Present Perfect sentence is not a Present Perfect mistake');
const mon = item('tl', 'See you on Monday at seven.');
assert.strictEqual(diag(mon, 'See you in Monday at seven.').err, 'prep:time-on');
d = diag(mon, 'See you on Monday at sevn.');
assert.ok(!d.own && d.ops[0].gen === 'spell');

// Mistakes of other topics, from the content: a known wrong answer somewhere says what the same fix is
d = D.diagnose(fl, 'I met him on 2020.', 'I met him in 2020.');
assert.strictEqual(d.ops[0].err, 'prep:time-in', 'in + a year');

// A known wrong answer, and a fill-in: always the exercise's own mistake
const pp = item('fill', 'have seen');
if (pp) assert.ok(diag(pp, 'saw').own);
assert.strictEqual(L.errorOf(C.items.find((i) => i.t === 'fill' && i.p.startsWith('I ___ (see) this movie')), 'have see'), 'pp:form');

// Far from the right sentence: no list of fixes, the exercise's mistake
d = diag(party, 'we go home now.');
assert.ok(d.own && !d.ops.length && d.err === party.e);

// Every reason is there in three languages, and pairs up its ** / *
const sample = { kind: 'change', g: ['x'], r: ['y'], gw: 'go', rw: 'went', before: 'I', after: 'home', after2: 'home now' };
for (const [id, f] of Object.entries(D.GEN)) for (const l of LANGS) { const t = f(sample)[l]; assert.ok(t && APP.i18n.marksOk(t), `general note ${id} in ${l}`); }

// No answer of any exercise breaks it, and every fix has a reason
let n = 0;
for (const it of C.items.concat(C.sceneItems)) {
  for (const bad of Object.keys(it.w).concat(it.t === 'fix' ? [it.p] : [], ['zzz'])) {
    const j = X.judge({ it, mode: 'type' }, bad);
    if (j.ok) continue;
    const r = D.diagnose(it, bad, j.right);
    assert.ok(r.err === null || C.errors[r.err], 'a known type of mistake');
    if (Object.keys(it.w).includes(bad) && it.t !== 'choose') assert.strictEqual(r.err, it.w[bad], 'a known wrong answer is its mistake: ' + bad);
    for (const o of r.ops) { assert.ok(D.fixLine(o)); assert.ok(D.reason(o), 'every fix has a reason'); }
    n++;
  }
}
assert.ok(n > 2000);
console.log('diagnose tests passed');
