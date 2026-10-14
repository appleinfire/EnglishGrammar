// Checking typed answers. Everything runs on the device.
//   tokens(s)      → words in a comparable form: lower case, no punctuation, contractions split
//                    (I've → i have, don't → do not, she's → she 's, which matches "is" and "has").
//   check(given, accepted, opts) → { ok, typo, close, best, diff }
// A typo (one letter, in a long word, not in its ending) is forgiven; grammar endings never are.
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const K = {};

  const SPECIAL = { "won't": 'will not', "can't": 'can not', cannot: 'can not', "shan't": 'shall not', "ain't": 'is not' };
  // Normalize quotes (iPhone types ’ and “ ”), case and punctuation, then split contractions.
  K.tokens = (s) => {
    let t = ' ' + String(s || '').toLowerCase().replace(/[‘’`´]/g, "'").replace(/[“”«»]/g, '"') + ' ';
    t = t.replace(/[.,!?;:"()…–—]/g, ' ').replace(/\s-\s/g, ' ');
    t = t.replace(/\b(won't|can't|cannot|shan't|ain't)\b/g, (m) => SPECIAL[m]);
    t = t.replace(/n't\b/g, ' not');
    t = t.replace(/'m\b/g, ' am').replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will');
    t = t.replace(/'d\b/g, " 'd").replace(/'s\b/g, " 's");
    // Quotes used as quotation marks ('yes', students') are not part of a word.
    return t.split(/\s+/).map((w) => (w === "'s" || w === "'d" ? w : w.replace(/^'+|'+$/g, ''))).filter(Boolean);
  };
  // 's = is / has / possessive; 'd = would / had.
  const eq = (a, b) => a === b ||
    (a === "'s" && (b === 'is' || b === 'has')) || (b === "'s" && (a === 'is' || a === 'has')) ||
    (a === "'d" && (b === 'would' || b === 'had')) || (b === "'d" && (a === 'would' || a === 'had'));

  // Edit distance where swapping two neighbouring letters counts as one edit (becuase → because).
  K.lev = (a, b) => {
    const m = a.length, n = b.length;
    const d = Array.from({ length: m + 1 }, (_, i) => [i].concat(new Array(n).fill(0)));
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
    return d[m][n];
  };
  // Two forms of one word (lives / lived, work / worked, began / begun) differ in grammar, not in spelling.
  const SUFFIXES = ['', 's', 'es', 'd', 'ed', 'ing', 'er', 'est', 'ly', 'n', 'en'];
  const IRREGULAR = new Set(('begin began begun break broke broken choose chose chosen drink drank drunk drive drove driven ' +
    'ride rode ridden ring rang rung rise rose risen sing sang sung sink sank sunk swim swam swum write wrote written ' +
    'speak spoke spoken steal stole stolen wake woke woken throw threw thrown grow grew grown know knew known ' +
    'forget forgot forgotten freeze froze frozen bring brought buy bought think thought teach taught catch caught ' +
    'fight fought seek sought sleep slept spend spent build built lose lost leave left lend lent bend bent ' +
    'worse worst less least loose lose quiet quite')
    .split(' '));
  const formsOfOneWord = (a, b) => {
    if (IRREGULAR.has(a) && IRREGULAR.has(b)) return true;
    for (const s1 of SUFFIXES) {
      if (!a.endsWith(s1)) continue;
      for (const s2 of SUFFIXES) if (s1 !== s2 && b.endsWith(s2) && a.slice(0, a.length - s1.length) === b.slice(0, b.length - s2.length)) return true;
    }
    return false;
  };
  // A spelling slip, not a grammar mistake: long words, one edit apart, same first letter, not two forms of one word.
  K.isTypo = (a, b) => a !== b && a.length >= 5 && b.length >= 5 && a[0] === b[0] && K.lev(a, b) === 1 && !formsOfOneWord(a, b);

  // Longest common subsequence of two token lists → which positions match.
  function lcs(x, y, same) {
    const m = x.length, n = y.length;
    const L = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) L[i][j] = same(x[i], y[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const mx = new Array(m).fill(false), my = new Array(n).fill(false);
    let i = 0, j = 0;
    while (i < m && j < n) {
      if (same(x[i], y[j])) { mx[i] = my[j] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++;
    }
    return { len: L[0][0], mx, my };
  }
  K.sameTokens = (x, y) => x.length === y.length && x.every((t, i) => eq(t, y[i]));

  // Words that voice recognition often gets wrong; in spoken answers a difference only here is "close".
  const SMALL = new Set(['a', 'an', 'the', "'s", "'d"]);
  const stem = (w) => w.replace(/(ed|es|s|d)$/, '');

  // given: what she typed; accepted: list of right answers. opts.spoken: answer came from dictation.
  K.check = (given, accepted, opts = {}) => {
    const g = K.tokens(given);
    const list = (Array.isArray(accepted) ? accepted : [accepted]).filter((a) => a != null);
    let best = null;
    for (const a of list) {
      const t = K.tokens(a);
      if (K.sameTokens(g, t)) return { ok: true, typo: false, best: a, exact: true };
      const typoSame = (p, q) => eq(p, q) || K.isTypo(p, q);
      const r = lcs(g, t, typoSame);
      if (r.len === g.length && r.len === t.length) {
        best = best && best.score >= 2 ? best : { a, score: 2, typo: true };
        continue;
      }
      const score = r.len / Math.max(g.length, t.length, 1);
      if (!best || score > best.score) best = { a, score };
    }
    if (best && best.typo) return { ok: true, typo: true, best: best.a };
    if (opts.spoken && best) {
      // Only articles or word endings differ: recognition may have misheard. Count it, and ask her to check.
      const t = K.tokens(best.a);
      const r = lcs(g, t, (p, q) => eq(p, q) || K.isTypo(p, q) || (p.length > 3 && stem(p) === stem(q)));
      const rest = (arr, m) => arr.filter((w, i) => !m[i]);
      const gx = rest(g, r.mx), tx = rest(t, r.my);
      const endingsOnly = g.length === t.length && r.len === g.length;
      if ((gx.every((w) => SMALL.has(w)) && tx.every((w) => SMALL.has(w))) || endingsOnly) return { ok: true, close: true, best: best.a };
    }
    return { ok: false, best: best ? best.a : list[0] };
  };

  // Word-by-word comparison for display. Returns [{w, bad}] for her answer and for the right one.
  K.diff = (given, right) => {
    const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean);
    const gw = words(given), rw = words(right);
    const flat = (ws) => { const out = []; ws.forEach((w, i) => K.tokens(w).forEach((t) => out.push({ t, i }))); return out; };
    const gf = flat(gw), rf = flat(rw);
    const r = lcs(gf.map((x) => x.t), rf.map((x) => x.t), (p, q) => eq(p, q) || K.isTypo(p, q));
    const badG = new Set(), badR = new Set();
    gf.forEach((x, k) => { if (!r.mx[k]) badG.add(x.i); });
    rf.forEach((x, k) => { if (!r.my[k]) badR.add(x.i); });
    return { given: gw.map((w, i) => ({ w, bad: badG.has(i) })), right: rw.map((w, i) => ({ w, bad: badR.has(i) })) };
  };

  APP.check = K;
})();
