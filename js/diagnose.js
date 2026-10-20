// What exactly is wrong in a wrong answer, how to fix it, and why. Everything runs on the device.
//   D.ops(given, right) → the differences as fixes: change (her words → right words), add, remove,
//                         move (the same words in another place), order (the same words, another order)
//   D.diagnose(it, given, right, mode) → { err, own, ops, right }
//     own: her mistake is in what the exercise trains: err is then the exercise's mistake (a known wrong answer,
//          a type of mistake of the topic that her fix shows, else the item's usual mistake). Otherwise what the
//          exercise trains was right, and the mistake is elsewhere: err is the type of mistake of that fix, if known.
//     ops: every fix, each with its reason: a type of mistake of any topic (op.err) or a general note (op.gen).
// Which type of mistake a fix is comes from an index built from the content (every known wrong answer of a fill-in
// or a choice, and every "find the mistake" sentence, says which words in place of which are which mistake), and
// from a few general patterns: prepositions of time, forms of a verb after do / have / be / modals, word order.
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const K = APP.check, C = APP.content;
  const D = {};

  // Words in a comparable form, each with the index of the word it came from (to show her own words).
  const flat = (s) => {
    const words = String(s || '').trim().split(/\s+/).filter(Boolean);
    const toks = [];
    words.forEach((w, i) => K.tokens(w).forEach((t) => toks.push({ t, i })));
    return { words, toks };
  };
  // The words of tokens ks, as written (a contraction only partly in it shows that part: I'll → will).
  const show = (S, ks) => {
    const out = [];
    for (const k of ks) {
      const i = S.toks[k].i, whole = S.toks.every((x, n) => x.i !== i || ks.includes(n));
      const w = whole ? S.words[i].replace(/^["“‘(]+|[.,!?;:"”’)]+$/g, '') : S.toks[k].t;
      if (!whole || out[out.length - 1] !== w || out.lastI !== i) out.push(w);
      out.lastI = i;
    }
    return out.join(' ');
  };
  const same = (p, q) => K.eq(p, q) || K.isTypo(p, q);
  const sameList = (x, y) => x.length === y.length && x.every((t, i) => K.eq(t, y[i]));
  const sorted = (x) => x.slice().sort().join(' ');
  const set = (s) => new Set(s.split(' '));
  const SMALL = set("a an the my your his her its our their this that these those it i you he she we they me him us them to of in on at for and 's");
  const ADVERBS = set('always usually often sometimes never rarely seldom ever already just still also even hardly normally generally');

  D.ops = (given, right) => {
    const G = flat(given), R = flat(right);
    const g = G.toks.map((x) => x.t), r = R.toks.map((x) => x.t);
    const m = K.lcs(g, r, same);
    // Walk both; the unmatched words between two matched ones make one fix.
    const gaps = [];
    let i = 0, j = 0, cur = null;
    while (i < g.length || j < r.length) {
      if (i < g.length && j < r.length && m.mx[i] && m.my[j]) { if (cur) gaps.push(cur); cur = null; i++; j++; continue; }
      if (!cur) cur = { gi: [], ri: [], at: j };
      if (i < g.length && !m.mx[i]) cur.gi.push(i++); else cur.ri.push(j++);
    }
    if (cur) gaps.push(cur);
    const words = (k0, k1) => show(R, r.slice(k0, k1).map((_, n) => k0 + n));
    // One fix from her words gi and the right words ri (at: its place when ri is empty).
    const mk = (gi, ri, at) => {
      const op = {
        kind: gi.length && ri.length ? 'change' : gi.length ? 'remove' : 'add', gi, ri,
        g: gi.map((k) => g[k]), r: ri.map((k) => r[k]),
        gw: show(G, gi), rw: show(R, ri),
        // its place in the right sentence: right words [s, e) (s = e: between two words)
        s: ri.length ? ri[0] : at, e: ri.length ? ri[ri.length - 1] + 1 : at,
      };
      Object.assign(op, { prev: r[op.s - 1] || '', next: r[op.e] || '', next2: r[op.e + 1] || '', back4: r.slice(Math.max(0, op.s - 4), op.s).reverse() });
      op.before = op.s > 0 ? words(op.s - 1, op.s) : '';
      op.after = op.e < r.length ? words(op.e, op.e + 1) : '';
      op.after2 = op.e < r.length ? words(op.e, op.e + 2) : '';
      if (op.kind === 'change' && sorted(op.g) === sorted(op.r)) op.kind = 'order';
      return op;
    };
    // Words taken out at a and put back at b: one move. "over" = the words it moved over.
    const move = (a, b) => {
      const [o0, o1] = a.s <= b.s ? [a.s, b.s] : [b.e, a.s];
      const mv = Object.assign(b, { kind: 'move', g: a.g, gi: a.gi, gw: a.gw, over: r.slice(o0, o1), overw: words(o0, o1), back: a.s > b.s });
      // One word over a longer phrase, or over a small word (usually, at, the, does): say it the other way round
      // ("put usually before takes", "put at before seven").
      const small = (x) => x.length === 1 && (ADVERBS.has(x[0]) || PREPS.has(x[0]) || DETS.has(x[0]) || AUX.has(x[0]));
      mv.swap = mv.over.length > 0 && (mv.over.length < mv.g.length || (small(mv.over) && !small(mv.g)));
      return mv;
    };
    let ops = gaps.map((x) => mk(x.gi, x.ri, x.at));
    const moves = [];
    // A whole run moved…
    for (const a of ops.filter((o) => o.kind === 'remove')) {
      const b = ops.find((o) => o.kind === 'add' && !o.used && sameList(o.r, a.g));
      if (!b) continue;
      b.used = a.used = true;
      moves.push(move(a, mk([], b.ri, b.s)));
    }
    // …or single words: a word she put somewhere else is a move, the rest stays an addition or a removal.
    ops = ops.filter((o) => !o.used);
    const out = ops.filter((o) => o.kind !== 'add').flatMap((o) => o.gi.map((k) => ({ k, o })));
    const taken = new Set();
    for (const b of ops) {
      if (b.kind === 'remove') continue;
      b.keep = [];
      for (const k of b.ri) {
        const n = out.findIndex((x) => !x.used && x.o !== b && K.eq(g[x.k], r[k]));
        if (n < 0) { b.keep.push(k); continue; }
        out[n].used = true;
        taken.add(out[n].k);
        moves.push(move(mk([out[n].k], [], out[n].o.s), mk([], [k], k)));
      }
    }
    // What is left of each fix (right words in a row make one).
    ops = ops.flatMap((o) => {
      const gi = o.gi.filter((k) => !taken.has(k)), ri = o.keep || o.ri;
      if (gi.length === o.gi.length && ri.length === o.ri.length) return [o];
      const runs = [];
      ri.forEach((k, n) => { if (n && k === ri[n - 1] + 1) runs[runs.length - 1].push(k); else runs.push([k]); });
      if (!runs.length) return gi.length ? [mk(gi, [], o.s)] : [];
      return runs.map((run, n) => mk(n ? [] : gi, run, run[0]));
    }).concat(moves);
    return ops.sort((a, b) => a.s - b.s);
  };

  // ---------------------------------------------------------------- the index of known mistakes
  // "her words>right words" → { error id: [[next word, word before], …] }
  let INDEX = null;
  const keyOf = (op) => op.g.join(' ') + '>' + op.r.join(' ');
  function addTo(op, err) {
    if (!err || op.kind === 'move' || op.kind === 'order') return;
    const e = (INDEX[keyOf(op)] = INDEX[keyOf(op)] || {});
    (e[err] = e[err] || []).push([op.next, op.prev]);
  }
  D.index = () => {
    if (INDEX) return INDEX;
    INDEX = {};
    for (const it of C.items.concat(C.sceneItems)) {
      if (it.t === 'fill' || it.t === 'choose') {
        for (const [bad, err] of Object.entries(it.w)) {
          const o = D.ops(C.sentence(it, bad), C.sentence(it, it.a[0]));
          if (o.length === 1) addTo(o[0], err);
        }
      }
      if (it.t === 'fix') {
        const o = D.ops(it.p, it.a[0]);
        if (o.length === 1) addTo(o[0], it.e);
      }
    }
    return INDEX;
  };
  // The type of mistake a fix is: the one the index has seen most in the same place (the same next word, else
  // the same word before), else seen most. null when two are equally likely. With topic: only that topic's
  // mistakes; without: any topic's, but only one seen in the same place (the same words mean different things).
  D.lookup = (op, topic) => {
    const e = D.index()[keyOf(op)];
    if (!e) return null;
    let list = Object.entries(e).filter(([id]) => C.errors[id] && (!topic || C.errors[id].topic === topic));
    // the same place: the same next word, else the same word before (small words like "the, my" don't say much)
    const at = (c) => (op.next && c[0] === op.next ? (SMALL.has(op.next) ? 10 : 100) : 0) + (op.prev && c[1] === op.prev ? (SMALL.has(op.prev) ? 1 : 10) : 0);
    const score = (ctx) => ctx.length + ctx.reduce((x, c) => x + at(c), 0);
    list = list.map(([id, ctx]) => [id, score(ctx), Math.max(...ctx.map(at))]).filter((x) => topic || x[2] >= 20).sort((a, b) => b[1] - a[1]);
    if (!list.length || (list.length > 1 && list[0][1] === list[1][1])) return null;
    return list[0][0];
  };

  // ---------------------------------------------------------------- what kind of fix it is
  const ARTICLES = set('a an the');
  const DETS = set('a an the my your his her its our their this that these those some any');
  const PREPS = set('in on at to for of with by from about into onto');
  const AUX = set('do does did am is are was were have has had can could will would shall should may might must');
  const MODALS = set('can could must should may might will would shall');
  const DO = set('do does did');
  const BE = set("be been being am is are was were 's");
  const HAVE = set("have has had 'd");
  const PRONOUNS = set('it them him her me us you');
  const SUBJECTS = set('i you he she it we they there');
  const PARTICLES = set('off on up down back out in away over');
  const DAYS = set('monday tuesday wednesday thursday friday saturday sunday mondays tuesdays wednesdays thursdays fridays saturdays sundays weekend weekends birthday');
  const PERIODS = set('january february march april may june july august september october november december spring summer fall autumn winter morning afternoon evening');
  const CLOCK = set("one two three four five six seven eight nine ten eleven twelve noon midnight night lunchtime o'clock");
  const TIME = new Set([...DAYS, ...PERIODS, ...CLOCK, ...set('today tomorrow yesterday tonight week month year ago last next now then soon later every day days hours minutes')]);
  const isYear = (t) => /^(1[89]|20)\d\d$/.test(t);
  const isClock = (t) => CLOCK.has(t) || /^\d{1,2}(:\d\d)?(am|pm)?$/.test(t);
  // Irregular verbs (base, then the other forms; the last one is the 3rd form): forms of one word differ in grammar.
  const LEMMA = {}, PART = new Set();
  ('be:is:am:are:was:were:been have:has:had do:does:did:done go:goes:went:gone see:saw:seen eat:ate:eaten take:took:taken ' +
    'give:gave:given get:got:gotten know:knew:known think:thought make:made say:said tell:told find:found ' +
    'leave:left feel:felt bring:brought buy:bought pay:paid meet:met keep:kept sleep:slept send:sent spend:spent ' +
    'lose:lost sit:sat stand:stood understand:understood write:wrote:written drive:drove:driven ride:rode:ridden ' +
    'speak:spoke:spoken break:broke:broken choose:chose:chosen forget:forgot:forgotten begin:began:begun ' +
    'drink:drank:drunk swim:swam:swum sing:sang:sung fly:flew:flown grow:grew:grown throw:threw:thrown ' +
    'draw:drew:drawn wear:wore:worn steal:stole:stolen wake:woke:woken fall:fell:fallen hold:held hear:heard ' +
    'teach:taught catch:caught fight:fought build:built lend:lent win:won sell:sold lead:led feed:fed ' +
    'bite:bit:bitten hide:hid:hidden shake:shook:shaken rise:rose:risen')
    .split(' ').forEach((grp) => { const f = grp.split(':'); f.forEach((x) => { LEMMA[x] = LEMMA[x] || f[0]; }); PART.add(f[f.length - 1]); });
  // Regular forms: the base form a word may come from, and the forms of a base (works, worked, working, lives,
  // lived, living, stops, stopped, studies, studied). "sevn" and "seven" are not forms of one word: a spelling slip.
  const bases = (w) => {
    const out = [w];
    for (const [re, to] of [[/ies$/, 'y'], [/ied$/, 'y'], [/es$/, ''], [/s$/, ''], [/ed$/, ''], [/d$/, ''], [/ing$/, ''], [/ing$/, 'e']]) if (re.test(w)) out.push(w.replace(re, to));
    const dbl = w.match(/^(.*([bdgklmnprt]))\2(ed|ing)$/);
    if (dbl) out.push(dbl[1]);
    return out.filter((x) => x.length > 1);
  };
  const formsOf = (b) => {
    const e = b.endsWith('e') ? b.slice(0, -1) : b, y = /[^aeiou]y$/.test(b) ? b.slice(0, -1) + 'i' : null;
    return new Set([b, b + 's', b + 'es', e + 'ed', e + 'ing', b + 'ing', b + 'ed', y && y + 'es', y && y + 'ed', b + b.slice(-1) + 'ed', b + b.slice(-1) + 'ing'].filter(Boolean));
  };
  const lemmaOf = (w) => LEMMA[w] || bases(w).find((x) => x !== w && formsOf(x).has(w)) || w;
  const forms = (a, b) => a !== b && ((!!LEMMA[a] && LEMMA[a] === LEMMA[b]) || bases(a).some((x) => formsOf(x).has(a) && formsOf(x).has(b)));
  const isParticiple = (w) => PART.has(w) || /ed$/.test(w);
  const AGREE = [set('am is are'), set('was were'), set('has have'), set('do does')];
  const known = (id) => (C.errors[id] ? id : null);

  // A preposition of time, from the word after it: on + a day, in + a month / year / part of the day, at + a clock time.
  function timePrep(op) {
    const r = op.r.length === 1 && op.g.length <= 1 ? op.r[0] : null;
    if (!['in', 'on', 'at'].includes(r)) return null;
    const n = op.next, n2 = op.next2;
    if (DAYS.has(n) || (n === 'the' && n2 === 'weekend')) return known('prep:time-on');
    if (isClock(n)) return known('prep:time-at');
    if (PERIODS.has(n) || isYear(n) || (n === 'the' && PERIODS.has(n2))) return known('prep:time-in');
    return null;
  }
  // Topics about word order, and their mistake for a sentence whose words are all mixed up.
  const ORDER = { q: 'q:order', iq: 'iq:order', rep: 'rep:rq-order', inv: 'inv:order', phr: 'phr:pronoun' };
  // A word order mistake, from the words that moved and the words they moved over.
  function orderOf(op, question, sentence, topic) {
    if (op.whole) return ORDER[topic] ? { err: ORDER[topic] } : question ? { err: known('q:order') } : { gen: 'order' };
    const ws = op.g.concat(op.over || []);
    if (ws.some((w) => PRONOUNS.has(w)) && ws.some((w) => PARTICLES.has(w))) return { err: known('phr:pronoun') };
    if (ws.some((w) => ADVERBS.has(w))) return { gen: 'order-adv' };
    const moved = op.swap ? op.over : op.g;
    const one = op.g.length === 1 && (op.over || []).length === 1;
    if (one && ws.some((w) => DETS.has(w))) return { gen: 'order-det' };
    // Never have I…, Only then did I…, Had I known…: inversion after a negative word at the start
    if (!question && /^(never|rarely|seldom|little|hardly|scarcely|no sooner|not only|not once|not until|under no|at no|only|had|should|were) /.test(sentence)
      && op.g.concat(op.over || []).some((w) => AUX.has(w))) return { err: known(/^only|^not until/.test(sentence) ? 'inv:only' : /^(had|should|were) /.test(sentence) ? 'inv:cond' : 'inv:order') };
    if (question && !op.swap && moved.length === 1 && PREPS.has(moved[0]) && !op.next) return { err: known('q:prep') };
    if (moved.length <= 2 && moved.some((w) => AUX.has(w))) {
      if (question && op.s <= 2) return { err: known('q:order') };
      // "…asked where I worked", "Could you tell me where it is": a question inside a sentence keeps statement order.
      if (/\b(asked|ask|tell me|know|wonder|wondering|idea|sure|remember|explain)\b.*\b(where|what|why|how|when|who|which|if|whether)\b/.test(sentence)) {
        return { err: /\basked\b/.test(sentence) ? known('rep:rq-order') : known('iq:order') };
      }
      return question ? { err: known('q:order') } : { gen: 'order' };
    }
    if (one && ws.some((w) => PREPS.has(w))) return { gen: 'order-prep' };
    if (moved.some((w) => TIME.has(w) || isYear(w))) return { gen: 'order-time' };
    return { gen: 'order' };
  }
  // What a fix is about: a type of mistake of some topic (err), or a general note (gen).
  function classify(op, question, sentence, topic) {
    if (op.kind === 'move' || op.kind === 'order') return orderOf(op, question, sentence, topic);
    const tp = timePrep(op);
    if (tp) return { err: tp };
    // ("to" is a preposition or a part of the verb: another topic's "to" says little about this one)
    const hit = (topic && D.lookup(op, topic)) || (keyOf(op) === '>to' || keyOf(op) === 'to>' ? null : D.lookup(op));
    if (hit) return { err: hit };
    const g = op.g, r = op.r, both = g.concat(r), one = g.length <= 1 && r.length <= 1;
    const gw = g[0] || '', rw = r[0] || '';
    // the word the verb's form depends on: the one before it (before "not": the one before that), else a do / modal
    // a few words back (does your sister live)
    const b = op.prev === 'not' ? op.back4[1] : AUX.has(op.prev) || op.prev === 'to' ? op.prev : op.back4.find((t) => DO.has(t) || MODALS.has(t)) || op.prev;
    if (one && ['a', 'an'].includes(gw) && ['a', 'an'].includes(rw)) return { err: known('art:a-an') };
    if (both.every((w) => ARTICLES.has(w))) return { gen: op.kind === 'add' && (rw === 'a' || rw === 'an') ? 'article-a' : 'article' };
    if (op.kind === 'remove' && one && gw === 'to' && MODALS.has(b)) return { err: known('mod1:form') };
    if (op.kind === 'change' && one && AGREE.some((x) => x.has(gw) && x.has(rw))) return { gen: 'agree' };
    if (op.kind === 'change' && one && forms(gw, rw)) {
      const base = LEMMA[rw] === rw || (!LEMMA[rw] && !/(s|ed|ing)$/.test(rw));
      if (DO.has(b) && base) return { err: b === 'did' ? known('past:did-base') : known('q:does-s') };
      if (MODALS.has(b) && base) return { err: known('mod1:form') };
      if (b === 'to') return { gen: 'form-to' };
      if (HAVE.has(b) && isParticiple(rw)) return { err: known('pp:form') };
      if (BE.has(b) && rw.endsWith('ing')) return { err: known('pres:be-ing') };
      if (BE.has(b) && isParticiple(rw)) return { err: known('pass:participle') };
      if (rw.endsWith('ing')) return { gen: 'form-ing' };
      if (/s$/.test(rw) && !/s$/.test(gw) && lemmaOf(rw) === gw) return { err: known('pres:s-ending') };
      return { gen: 'form' };
    }
    if (both.every((w) => PREPS.has(w))) return { gen: 'prep' };
    if (op.kind === 'change' && one && Math.min(gw.length, rw.length) >= 4 && K.lev(gw, rw) <= (rw.length >= 7 ? 2 : 1)) return { gen: 'spell' };
    if (op.kind === 'add' && one && BE.has(rw) && /ing$/.test(op.next)) return { err: known('pres:be-ing') };
    if (op.kind === 'add' && one && SUBJECTS.has(rw)) return { gen: 'subject' };
    if (op.kind === 'add' && one && AUX.has(rw)) return { gen: 'aux' };
    return { gen: op.kind === 'add' ? 'missing' : op.kind === 'remove' ? 'extra' : 'word' };
  }

  // ---------------------------------------------------------------- the diagnosis
  // Her answer as a whole sentence (a fill-in or a choice puts her words into the sentence).
  D.sentence = (it, given, mode) => (mode !== 'dict' && (it.t === 'fill' || it.t === 'choose')
    ? C.sentence(it, String(given).split('|').map((x) => x || '…').join('|')) : String(given || ''));
  // Where the exercise's point is in the right sentence: a list of [s, e) places, 'all', or null (not known).
  function keyPlaces(it, right, mode) {
    if (it.t === 'fill' || it.t === 'choose') return mode === 'dict' ? D.ops(C.sentence(it, it.a[0].split('|').map(() => 'zzkey').join('|')), right) : 'all';
    if (it.t === 'fix' || it.t === 'tr') return D.ops(it.p, right);
    return null;
  }
  const touches = (a, b) => (a.s === a.e || b.s === b.e ? a.s <= b.e && b.s <= a.e : a.s < b.e && b.s < a.e);
  const moved = (o) => o.kind === 'move' || o.kind === 'order';
  // The words a topic is about: in at least two of its exercises, a blank or its wrong answer, an extra tile, or
  // a word its fixes and rewrites change. verbs: the topic is about verb forms (its helping verbs come up often).
  const KEYS = {};
  function topicKeys(topic) {
    if (KEYS[topic]) return KEYS[topic];
    const n = {};
    for (const it of (C.byId[topic] || { items: [] }).items) {
      const k = new Set();
      if (it.t === 'fill' || it.t === 'choose') it.a.concat(it.o, Object.keys(it.w)).forEach((a) => K.tokens(a.replace(/\|/g, ' ')).forEach((t) => k.add(t)));
      if (it.t === 'build') it.x.forEach((x) => K.tokens(x).forEach((t) => k.add(t)));
      if (it.t === 'fix' || it.t === 'tr') D.ops(it.p, it.a[0]).forEach((o) => o.g.concat(o.r).forEach((t) => k.add(t)));
      k.forEach((t) => { n[t] = (n[t] || 0) + 1; });
    }
    const words = new Set(Object.keys(n).filter((t) => n[t] >= 2 && t !== C.NONE));
    return (KEYS[topic] = { words, verbs: [...AUX].some((t) => n[t] >= 5) });
  }

  D.diagnose = (it, given, right, mode = 'type') => {
    right = right || C.sentence(it, it.a[0]);
    const g = K.tokens(given);
    // a known wrong answer, or the sentence to fix left as it was: exactly the mistake the exercise is about
    const w = mode === 'dict' ? null : Object.entries(it.w).find(([ans]) => K.sameTokens(g, K.tokens(ans))) ||
      (it.t === 'fix' && K.sameTokens(g, K.tokens(it.p)) ? [it.p, it.e] : null);
    const her = D.sentence(it, given, mode);
    const H = K.tokens(her), R = K.tokens(right);
    const question = /\?\s*$/.test(right), sentence = R.join(' ');
    const mixed = sorted(H) === sorted(R);
    // Far from the right sentence: no fixes to list (the right sentence is shown), only the exercise's mistake.
    if (!w && !mixed && K.lcs(H, R, K.eq).len / Math.max(R.length, H.length, 1) < 0.5) return { err: it.e, own: true, ops: [], right };
    let ops = D.ops(her, right);
    // All the right words, mixed up: one fix, the whole sentence.
    if (mixed && ops.length > 2) {
      ops = [Object.assign(D.ops('', right)[0], { kind: 'order', g: H, gw: her.replace(/[.!?]+$/, ''), whole: true })];
      ops[0].rw = right.replace(/[.!?]+$/, '');
    }
    // Which fixes are about what the exercise trains.
    if (w || !ops.length) ops.forEach((o) => { o.key = true; });
    else {
      const places = keyPlaces(it, right, mode);
      if (places === 'all') ops.forEach((o) => { o.key = true; });
      // (the right words in the wrong place: that is word order, the exercise's own point only if its topic teaches it)
      else if (places) ops.forEach((o) => { o.key = !moved(o) && places.some((p) => touches(o, p)); });
      else if (it.t === 'build' && mode !== 'dict') {
        const tiles = new Set(it.x.flatMap((x) => K.tokens(x)));
        ops.forEach((o) => { o.key = !moved(o) && o.g.some((t) => tiles.has(t)); });
      } else {
        const kw = topicKeys(it.topic);
        ops.forEach((o) => { o.key = !moved(o) && (o.g.concat(o.r).some((t) => kw.words.has(t)) || (kw.verbs && o.kind === 'change' && o.g.length === 1 && o.r.length === 1 && forms(o.g[0], o.r[0]))); });
      }
    }
    const all = ops.length && ops.every((o) => o.key);
    for (const op of ops) Object.assign(op, classify(op, question, sentence, it.topic));
    const mine = (o) => o.err && C.errors[o.err].topic === it.topic;
    // A mistake of the topic itself (its word order too: questions, phrasal verbs…) is the exercise's own point;
    // a fix that is surely a mistake of another topic (a preposition of time in a Present Perfect sentence) is not.
    for (const op of ops) {
      if (!op.key && mine(op)) op.key = true;
      if (op.key && !w && !all && op.err && !mine(op)) op.key = false;
    }
    const own = ops.some((o) => o.key) || !ops.length;
    let err;
    if (own) {
      // A known wrong answer, else a mistake of this topic that one of her fixes there shows, else the usual one.
      err = w ? w[1] : (ops.find((o) => o.key && mine(o)) || {}).err || it.e;
      // Her fixes at the exercise's point are explained by it, unless they are surely something more precise.
      for (const op of ops) if (op.key && (w || (!mine(op) && !(op.gen && SURE.has(op.gen)) && !(op.err && all)))) { op.err = err; delete op.gen; }
    } else {
      err = (ops.find((o) => o.err) || {}).err || null;
    }
    return { err, own, ops, right };
  };
  // General notes precise enough to stand next to the exercise's own mistake.
  const SURE = set('spell agree article article-a form-to form-ing order-adv order-time subject');

  // ---------------------------------------------------------------- how to say it
  // How to fix it, in one line. f: how to mark her words (bad), the right words (good) and the words around (at);
  // by default the tiny text format.
  const TINY = { bad: (x) => `*${x}*`, good: (x) => `**${x}**`, at: (x) => `*${x}*` };
  D.fixLine = (op, f = TINY) => {
    const at = op.after ? `before ${f.at(op.after)}` : op.before ? 'at the end' : '';
    if (op.kind === 'change') return `${f.bad(op.gw)} → ${f.good(op.rw)}`;
    if (op.kind === 'add') return `Add ${f.good(op.rw)}${at ? ' ' + at : ''}`;
    if (op.kind === 'remove') return `Remove ${f.bad(op.gw)}`;
    if (op.kind === 'order') return op.whole ? `Word order: ${f.good(op.rw)}` : `Word order: ${f.good(op.rw)}, not ${f.bad(op.gw)}`;
    if (op.swap) return `Put ${f.good(op.overw)} ${op.back ? 'after' : 'before'} ${f.at(op.rw)}`;
    return op.before ? `Put ${f.good(op.rw)} after ${f.at(op.before)}` : `Put ${f.good(op.rw)} at the start`;
  };
  // Why, when it is not a type of mistake of a topic: general notes, in three languages.
  const GEN = {
    order: () => ({
      en: `English word order is fixed: **who → does what → what / whom → where → when**: *She takes the kids to school every morning.* Ukrainian and Russian can move words around; in English that sounds wrong or changes the meaning.`,
      uk: `Порядок слів в англійській сталий: **хто → що робить → що / кого → де → коли**: *She takes the kids to school every morning.* В українській слова можна переставляти, в англійській — ні: це звучить неправильно або змінює зміст.`,
      ru: `Порядок слов в английском фиксированный: **кто → что делает → что / кого → где → когда**: *She takes the kids to school every morning.* В русском слова можно переставлять, в английском — нет: это звучит неправильно или меняет смысл.`,
    }),
    'order-adv': () => ({
      en: `*always, usually, often, sometimes, never, already, just, still* go **before the main verb**, but **after** *am / is / are / was / were* and after the first helping verb: *She usually takes the bus. He is always late. I have never tried it.*`,
      uk: `*always, usually, often, sometimes, never, already, just, still* стоять **перед основним дієсловом**, але **після** *am / is / are / was / were* і після першого допоміжного: *She usually takes the bus. He is always late. I have never tried it.*`,
      ru: `*always, usually, often, sometimes, never, already, just, still* стоят **перед основным глаголом**, но **после** *am / is / are / was / were* и после первого вспомогательного: *She usually takes the bus. He is always late. I have never tried it.*`,
    }),
    'order-time': () => ({
      en: `Words of time go at the **end** of the sentence (or at the very **start**), not between the verb and what follows it. **Where?** comes before **when?**: *We saw a movie at the mall last night. Last night we saw a movie.*`,
      uk: `Слова про час ставлять у **кінці** речення (або на самому **початку**), а не між дієсловом і тим, що після нього. **Де?** — перед **коли?**: *We saw a movie at the mall last night. Last night we saw a movie.*`,
      ru: `Слова о времени ставят в **конце** предложения (или в самом **начале**), а не между глаголом и тем, что после него. **Где?** — перед **когда?**: *We saw a movie at the mall last night. Last night we saw a movie.*`,
    }),
    'order-det': () => ({
      en: `*a, the, my, this, some* go **before** their noun and before its adjectives: *the kids, a new phone, my old car*.`,
      uk: `*a, the, my, this, some* стоять **перед** своїм іменником і перед його прикметниками: *the kids, a new phone, my old car*.`,
      ru: `*a, the, my, this, some* стоят **перед** своим существительным и перед его прилагательными: *the kids, a new phone, my old car*.`,
    }),
    'order-prep': () => ({
      en: `A preposition goes **before** its noun: *at seven, on Saturday, in the car, for two hours*. Only in questions can it go to the end: *Who are you talking to?*`,
      uk: `Прийменник стоїть **перед** своїм іменником: *at seven, on Saturday, in the car, for two hours*. Тільки в питаннях він може піти в кінець: *Who are you talking to?*`,
      ru: `Предлог стоит **перед** своим существительным: *at seven, on Saturday, in the car, for two hours*. Только в вопросах он может уйти в конец: *Who are you talking to?*`,
    }),
    article: () => ({
      en: `**a / an** = one of many, mentioned for the first time: *a doctor*. **the** = this exact one, you both know which: *the doctor I told you about, the door, the sun*. **No article** with plural and uncountable nouns in general: *Doctors work long hours. Coffee is expensive.*`,
      uk: `**a / an** = один з багатьох, згадуємо вперше: *a doctor*. **the** = саме цей, обидва знаєте який: *the doctor I told you about, the door, the sun*. **Без артикля** — множина й незлічувані іменники загалом: *Doctors work long hours. Coffee is expensive.*`,
      ru: `**a / an** = один из многих, упоминаем впервые: *a doctor*. **the** = именно этот, оба знаете какой: *the doctor I told you about, the door, the sun*. **Без артикля** — множественное число и неисчисляемые существительные вообще: *Doctors work long hours. Coffee is expensive.*`,
    }),
    'article-a': () => ({
      en: `A **singular countable** noun can't stand alone: it needs **a / an** (or *the, my, this…*): *She's a nurse. I have a question. It's an old car.*`,
      uk: `**Злічуваний іменник в однині** не стоїть сам: потрібен **a / an** (або *the, my, this…*): *She's a nurse. I have a question. It's an old car.*`,
      ru: `**Исчисляемое существительное в единственном числе** не стоит само: нужен **a / an** (или *the, my, this…*): *She's a nurse. I have a question. It's an old car.*`,
    }),
    prep: (op) => {
      const p = (op.kind === 'remove' ? [op.before, op.after2] : [op.rw, op.after2]).filter(Boolean).join(' ');
      return {
        en: `Prepositions don't translate word for word from Ukrainian or Russian, so learn them as part of a phrase: *at home, on the bus, in the car, wait for, listen to, depend on*. Here: ***${p}***.`,
        uk: `Прийменники не перекладаються слово в слово з української, тож вчи їх разом із фразою: *at home, on the bus, in the car, wait for, listen to, depend on*. Тут: ***${p}***.`,
        ru: `Предлоги не переводятся слово в слово с русского, поэтому учи их вместе с фразой: *at home, on the bus, in the car, wait for, listen to, depend on*. Здесь: ***${p}***.`,
      };
    },
    agree: (op) => ({
      en: `The verb agrees with the subject: **I am, he / she / it is, we / you / they are**; **he / she / it has, does**, the others **have, do**; **was** with *I, he, she, it*, **were** with *we, you, they*. Here: **${op.rw}**.`,
      uk: `Дієслово узгоджується з підметом: **I am, he / she / it is, we / you / they are**; **he / she / it has, does**, решта — **have, do**; **was** з *I, he, she, it*, **were** з *we, you, they*. Тут: **${op.rw}**.`,
      ru: `Глагол согласуется с подлежащим: **I am, he / she / it is, we / you / they are**; **he / she / it has, does**, остальные — **have, do**; **was** с *I, he, she, it*, **were** с *we, you, they*. Здесь: **${op.rw}**.`,
    }),
    form: (op) => ({
      en: `*${op.gw}* and **${op.rw}** are forms of the same word, and this sentence needs **${op.rw}**. The words around it decide the form: the subject, the helping verb (*do, have, be, will*) and the time (*yesterday, now, every day*).`,
      uk: `*${op.gw}* і **${op.rw}** — форми одного слова, і цьому реченню потрібна **${op.rw}**. Форму визначають слова навколо: підмет, допоміжне дієслово (*do, have, be, will*) і час (*yesterday, now, every day*).`,
      ru: `*${op.gw}* и **${op.rw}** — формы одного слова, и этому предложению нужна **${op.rw}**. Форму определяют слова вокруг: подлежащее, вспомогательный глагол (*do, have, be, will*) и время (*yesterday, now, every day*).`,
    }),
    'form-to': (op) => ({
      en: `After **to** the verb has its base form, with no ending: *to go, to see, to work*. So: **to ${op.rw}**.`,
      uk: `Після **to** дієслово в початковій формі, без закінчень: *to go, to see, to work*. Тобто: **to ${op.rw}**.`,
      ru: `После **to** глагол в начальной форме, без окончаний: *to go, to see, to work*. То есть: **to ${op.rw}**.`,
    }),
    'form-ing': (op) => ({
      en: `Here the verb needs **-ing**: after *am / is / are / was / were* (an action in progress), after a preposition (*before leaving, good at cooking*) and after verbs like *enjoy, mind, finish, keep*. So: **${op.rw}**.`,
      uk: `Тут дієслову потрібне **-ing**: після *am / is / are / was / were* (дія в процесі), після прийменника (*before leaving, good at cooking*) і після дієслів на кшталт *enjoy, mind, finish, keep*. Тобто: **${op.rw}**.`,
      ru: `Здесь глаголу нужно **-ing**: после *am / is / are / was / were* (действие в процессе), после предлога (*before leaving, good at cooking*) и после глаголов вроде *enjoy, mind, finish, keep*. То есть: **${op.rw}**.`,
    }),
    spell: (op) => ({
      en: `Spelling: **${op.rw}**, not *${op.gw}*.`,
      uk: `Правопис: **${op.rw}**, а не *${op.gw}*.`,
      ru: `Правописание: **${op.rw}**, а не *${op.gw}*.`,
    }),
    subject: (op) => ({
      en: `An English sentence always has a **subject**, even when Ukrainian or Russian leaves it out: *It's raining. I'm going home. It's cold.* Here: **${op.rw}**.`,
      uk: `В англійському реченні завжди є **підмет**, навіть коли українською його пропускають: *It's raining. I'm going home. It's cold.* Тут: **${op.rw}**.`,
      ru: `В английском предложении всегда есть **подлежащее**, даже когда по-русски его пропускают: *It's raining. I'm going home. It's cold.* Здесь: **${op.rw}**.`,
    }),
    aux: (op) => ({
      en: `The tense needs its helping verb **${op.rw}**: English doesn't drop it the way Ukrainian or Russian can: *I am working, she has gone, Do you know?*`,
      uk: `Цьому часу потрібне допоміжне дієслово **${op.rw}**: в англійській його не пропускають, як в українській: *I am working, she has gone, Do you know?*`,
      ru: `Этому времени нужен вспомогательный глагол **${op.rw}**: в английском его не пропускают, как в русском: *I am working, she has gone, Do you know?*`,
    }),
    missing: (op) => ({
      en: `This sentence needs **${op.rw}** here; without it, it is not complete in English.`,
      uk: `Тут потрібне **${op.rw}**: без нього речення англійською неповне.`,
      ru: `Здесь нужно **${op.rw}**: без него предложение по-английски неполное.`,
    }),
    extra: (op) => ({
      en: `*${op.gw}* is not needed here: English doesn't use it in this sentence.`,
      uk: `*${op.gw}* тут зайве: англійською в цьому реченні його не вживають.`,
      ru: `*${op.gw}* здесь лишнее: по-английски в этом предложении его не используют.`,
    }),
    word: (op) => ({
      en: `Here the right word is **${op.rw}**, not *${op.gw}*: they mean different things.`,
      uk: `Тут правильне слово — **${op.rw}**, а не *${op.gw}*: вони означають різне.`,
      ru: `Здесь правильное слово — **${op.rw}**, а не *${op.gw}*: они значат разное.`,
    }),
  };
  D.GEN = GEN;
  // Why: the type of mistake ({ en, uk, ru } of a topic) or a general note.
  D.reason = (op) => (op.err ? C.errors[op.err] : op.gen && GEN[op.gen] ? GEN[op.gen](op) : null);

  APP.diag = D;
})();
