// What a profile holds, and how two copies of the same profile (used offline on two devices) are combined.
// Nothing learned is ever lost:
//   collected per key (topics, words seen, mistakes counted, minutes per day, dialogs) → union, best value per key;
//   repetition cards → union; for one card the copy answered more recently wins (a mistake can lower a box);
//   counters that only grow (stats)                                     → the higher value;
//   things changed by choice (settings, last topic, recent mistakes, level check) → the newer copy (the base of `out`).
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const STATS = ['answers', 'correct', 'fixed', 'sessions', 'endlessBest', 'lightning'];
  APP.schema = {
    STATS,
    fresh: () => ({
      stats: { answers: 0, correct: 0, fixed: 0, sessions: 0, endlessBest: 0, lightning: 0 }, // endlessBest: longest run of right answers in Endless; lightning: most right in a 2-minute round
      topics: {}, // topicId: { tier (current, 1–3), reached (highest tier passed, 0–3), done (lessons), a, c (answers, right), check (best topic check %) }
      cards: {}, // 'topic:pattern': { box 1–5, due 'YYYY-MM-DD', seen (time), ok, miss, last (item id), md / ud (day of mistake / move up), pend }
      errors: {}, // error id: times made
      seen: {}, // item id: time last shown
      time: {}, // 'YYYY-MM-DD': seconds of practice
      log: {}, // 'YYYY-MM-DD': { f (mistakes fixed), l (patterns learned), u (tiers passed), t / r: { topicId: answers / right answers }, e: { error id: times } } — for the weekly report
      scenes: {}, // dialog id: best % right
      facts: {}, // fact item id: 'YYYY-MM-DD' when she first answered it right (the fact is in her collection)
      endless: null, // the last Endless choice: { topics: [ids] or [] (my topics), src, timer }
      reportSeen: '', // Monday of the last week whose report she opened
      recent: [], // last mistakes, newest first: { id, g (her answer), d (day) }
      diag: null, // level check: { day, tiers: { topicId: start tier } }
      lastTopic: '',
      settings: { sound: true, unlockAll: false, l1: 'uk', voice: '', slow: false, goal: 10, say: true, mic: true, alwaysL1: false },
    }),
    // out = a copy of the newer profile `nw`; `old` is the other copy. M = helpers from the store (union, max).
    mergeProgress(out, nw, old, M) {
      out.topics = M.union(old.topics, nw.topics, (a, b) => ({
        tier: b.tier, reached: M.max(a.reached, b.reached), done: M.max(a.done, b.done),
        a: M.max(a.a, b.a), c: M.max(a.c, b.c), check: M.max(a.check, b.check),
      }));
      out.cards = M.union(old.cards, nw.cards, (a, b) => ((a.seen || 0) > (b.seen || 0) ? a : b));
      out.errors = M.union(old.errors, nw.errors, M.max);
      out.seen = M.union(old.seen, nw.seen, M.max);
      out.time = M.union(old.time, nw.time, M.max);
      out.scenes = M.union(old.scenes, nw.scenes, M.max);
      out.facts = M.union(old.facts, nw.facts, (a, b) => (a < b ? a : b));
      out.log = M.union(old.log, nw.log, (a, b) => ({
        f: M.max(a.f, b.f), l: M.max(a.l, b.l), u: M.max(a.u, b.u),
        t: M.union(a.t, b.t, M.max), r: M.union(a.r, b.r, M.max), e: M.union(a.e, b.e, M.max),
      }));
      if ((old.reportSeen || '') > (out.reportSeen || '')) out.reportSeen = old.reportSeen;
      for (const k of STATS) out.stats[k] = M.max(nw.stats[k], old.stats[k]);
      if (!out.diag && old.diag) out.diag = old.diag;
    },
  };
})();
