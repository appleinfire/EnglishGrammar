// Run: node tests/check.test.js
// How typed answers are judged: contractions, quotes typed on an iPhone, typos, grammar endings, spoken answers.
const assert = require('assert');
const APP = require('./load');
const K = APP.check, X = APP.ex, C = APP.content;

const ok = (given, right, opts) => K.check(given, right, opts).ok;
// Contractions and the full form are the same answer.
assert.ok(ok("I have lived here since 2022", "I've lived here since 2022."));
assert.ok(ok("I've lived here since 2022", 'I have lived here since 2022.'));
assert.ok(ok('She is working', "She's working"));
assert.ok(ok('She has been there', "She's been there"));
assert.ok(ok("I would go", "I'd go"));
assert.ok(ok('They will not come', "They won't come."));
assert.ok(ok('I can not swim', "I can't swim"));
assert.ok(ok('I cannot swim', "I can't swim"));
// iPhone quotes, capitals, spaces and final punctuation do not matter.
assert.ok(ok('  i’ve   NEVER been to california ', "I've never been to California."));
assert.ok(ok('Is it open', 'Is it open?'));
// Typos in long words are forgiven; grammar endings and different forms are not.
assert.ok(K.check('We have been here sinse May', ["We've been here since May."]).typo);
assert.ok(ok('Thank you becuase you came', 'Thank you because you came'));
assert.ok(!ok('She lives here', 'She lived here'), '-s / -ed is grammar, not a typo');
assert.ok(!ok('He worked', 'He works'));
assert.ok(!ok('It began yesterday', 'It begun yesterday'), 'two forms of one irregular verb');
assert.ok(!ok('I live here since 2022', "I've lived here since 2022."));
assert.ok(!ok('I has seen it', 'I have seen it'));
// Spoken answers: if only articles or endings differ, recognition may have misheard — counted, marked "close".
const s = K.check('I have been to the Paris', ['I have been to Paris'], { spoken: true });
assert.ok(s.ok && s.close);
assert.ok(K.check('she has finish', ['she has finished'], { spoken: true }).close);
assert.ok(!K.check('she finish', ['she has finished'], { spoken: true }).ok, 'a missing helping verb is still wrong when spoken');
// The comparison marks the words that differ.
const d = K.diff('I live here since 2022.', "I've lived here since 2022.");
assert.deepStrictEqual(d.given.filter((x) => x.bad).map((x) => x.w), ['live']);
assert.deepStrictEqual(d.right.filter((x) => x.bad).map((x) => x.w), ["I've", 'lived']);

// Exercises: blanks, two blanks, American answers, dictation, tiles.
const item = (pred) => C.items.find(pred);
const fill2 = item((i) => i.t === 'fill' && i.a[0] === 'Have|eaten');
assert.ok(X.judge({ it: fill2, mode: 'type' }, "Have|eaten").ok);
assert.ok(X.judge({ it: fill2, mode: 'type' }, "have|eaten").ok);
assert.ok(!X.judge({ it: fill2, mode: 'type' }, 'Did|eat').ok);
const amer = item((i) => i.t === 'fill' && i.am.includes("didn't finish"));
const j = X.judge({ it: amer, mode: 'type' }, "didn't finish");
assert.ok(j.ok && j.american, 'American English answer is accepted with a note');
assert.ok(X.judge({ it: amer, mode: 'type' }, "hasn't finished").ok && !X.judge({ it: amer, mode: 'type' }, "hasn't finished").american);
const dictIt = item((i) => i.t === 'fill' && i.p.startsWith('I ___ (see) this movie'));
assert.strictEqual(C.sentence(dictIt), 'I have seen this movie three times.', 'the hint is dropped from the whole sentence');
assert.ok(X.judge({ it: dictIt, mode: 'dict' }, "I've seen this movie three times").ok, 'dictation checks the whole sentence');
const none = item((i) => i.t === 'choose' && i.a[0] === C.NONE);
assert.ok(!/—/.test(C.sentence(none)), 'the "no article" choice leaves no mark in the sentence');
assert.strictEqual(X.asSentence({ it: dictIt, mode: 'type' }, 'saw'), 'I saw this movie three times.');
// Which mistake a wrong answer is
assert.strictEqual(APP.level.errorOf(dictIt, 'saw'), 'pp:ps-exp');
assert.strictEqual(APP.level.errorOf(dictIt, 'have see'), 'pp:form', 'an unknown wrong answer gets the item\'s usual mistake');
console.log('check tests passed');
