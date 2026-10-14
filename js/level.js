// Tiers and sessions. Every topic has three tiers: 1 Core (form with a hint), 2 Use (choose the form in context),
// 3 Pro (no hints: translate, fix, transform, say it). A topic is mastered when its Pro tier is passed.
// Inside a lesson the tier adapts: 3 right in a row → one tier up, 2 mistakes at a tier → one tier down.
// Sessions: lesson (one topic), review (due cards from all topics, mixed), check (Pro test of a topic),
// challenge (all started topics mixed, no hints), diag (level check), fix (mistakes of the last session again),
// drill (one type of mistake). Pure logic: the screens live in app.js.
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const U = APP.U, R = APP.srs, C = APP.content, K = APP.check;
  const L = {};
  const LEN = { lesson: 10, review: 12, check: 8, challenge: 15, drill: 10 };
  const PRODUCE = new Set(['fill', 'fix', 'tr', 'tl']);
  L.TIERS = ['Core', 'Use', 'Pro'];
  L.LEN = LEN;

  const topicState = (st, id) => (st.topics[id] = st.topics[id] || { tier: L.startTier(st), reached: 0, done: 0, a: 0, c: 0, check: 0 });
  L.startTier = (st) => (st.kind === 'B2' ? 2 : 1);
  L.tier = (st, id) => (st.topics[id] ? st.topics[id].tier : L.startTier(st));
  L.reached = (st, id) => (st.topics[id] ? st.topics[id].reached : 0);

  // 'new' | 'learning' | 'mastered'; due = cards of this topic to review today.
  L.status = (st, id, day = U.dateKey()) => {
    const t = st.topics[id];
    const due = Object.entries(st.cards).filter(([k, c]) => k.startsWith(id + ':') && c.due <= day).length;
    const state = !t || (!t.done && !t.a) ? 'new' : t.reached >= 3 ? 'mastered' : 'learning';
    return { state, due, tier: L.tier(st, id), reached: L.reached(st, id) };
  };
  // What to study next: the topic she worked on last if it is not mastered, else the first one not mastered.
  L.upNext = (st) => {
    const open = (t) => L.reached(st, t.id) < 3;
    const last = C.byId[st.lastTopic];
    if (last && open(last)) return last;
    return C.topics.find((t) => open(t) && st.topics[t.id]) || C.topics.find(open) || null;
  };

  // ---------------------------------------------------------------- building sessions
  const base = (mode, extra) => Object.assign({ mode, used: new Set(), log: [], run: 0, miss: 0, rand: Math.random, started: Date.now() }, extra);
  L.lesson = (st, topicId, tier) => {
    const t = tier || L.tier(st, topicId);
    return base('lesson', { topic: topicId, tier: t, startTier: t, n: LEN.lesson });
  };
  L.review = (st, day = U.dateKey()) => {
    const keys = R.due(st, day).slice(0, LEN.review);
    const used = new Set();
    const queue = [];
    for (const k of U.shuffle(keys)) {
      const it = R.pick(st, k, L.tier(st, k.split(':')[0]), used);
      if (it) { used.add(it.id); queue.push(it); }
    }
    return base('review', { queue, n: queue.length });
  };
  L.check = (st, topicId) => {
    const T = C.byId[topicId];
    const pro = U.shuffle(T.items.filter((i) => i.l === 3));
    const use = U.shuffle(T.items.filter((i) => i.l === 2 && PRODUCE.has(i.t)));
    const queue = pro.concat(use).slice(0, LEN.check);
    return base('check', { topic: topicId, tier: 3, queue: U.shuffle(queue), n: queue.length });
  };
  // Started topics, tiers Use and Pro, mixed: in real speech nobody says which tense comes next.
  L.challenge = (st) => {
    let ids = C.topics.filter((t) => st.topics[t.id] && (st.topics[t.id].done || st.topics[t.id].a)).map((t) => t.id);
    if (ids.length < 2) ids = C.topics.map((t) => t.id);
    const pool = C.items.filter((i) => ids.includes(i.topic) && i.l >= 2 && i.t !== 'choose');
    const byTopic = {};
    for (const i of U.shuffle(pool)) (byTopic[i.topic] = byTopic[i.topic] || []).push(i);
    const queue = [];
    while (queue.length < LEN.challenge && Object.values(byTopic).some((a) => a.length)) {
      for (const id of U.shuffle(Object.keys(byTopic))) if (byTopic[id].length && queue.length < LEN.challenge) queue.push(byTopic[id].shift());
    }
    return base('challenge', { queue, n: queue.length, topics: ids });
  };
  // Level check: per topic one Use item and one Pro item, all typed (no multiple choice: it would show a level above the real one).
  L.diag = () => {
    const queue = [];
    for (const T of C.topics) {
      const two = U.shuffle(T.items.filter((i) => i.l === 2 && PRODUCE.has(i.t)))[0];
      const three = U.shuffle(T.items.filter((i) => i.l === 3 && PRODUCE.has(i.t)))[0];
      if (two) queue.push(two);
      if (three) queue.push(three);
    }
    return base('diag', { queue, n: queue.length });
  };
  // The mistakes of a session again, each with a different sentence of the same pattern.
  L.fix = (st, missed) => {
    const used = new Set(missed.map((i) => i.id));
    const queue = [];
    for (const it of missed) {
      const other = R.pick(st, R.key(it), it.l, used) || it;
      used.add(other.id);
      queue.push(other);
    }
    return base('fix', { queue, n: queue.length });
  };
  // One type of mistake ("Past Simple with since"): the sentences that test it.
  L.drill = (st, errorId) => {
    const pool = C.items.filter((i) => i.e === errorId || Object.values(i.w).includes(errorId));
    const queue = pool.sort((x, y) => (st.seen[x.id] || 0) - (st.seen[y.id] || 0) || Math.random() - 0.5).slice(0, LEN.drill);
    return base('drill', { queue: U.shuffle(queue), n: queue.length, error: errorId });
  };

  // ---------------------------------------------------------------- next item
  // Returns { it, mode } or null when the session is over. mode: 'type' (as written), 'say' (answer aloud),
  // 'dict' (listen and type the whole sentence).
  L.next = (sess, st, opts = {}) => {
    if (sess.log.length >= sess.n) return null;
    let it;
    if (sess.queue) it = sess.queue[sess.log.length];
    else it = pickLesson(sess, st);
    if (!it) return null;
    sess.used.add(it.id);
    let mode = 'type';
    if (sess.mode !== 'diag') {
      if (it.t === 'tl' && opts.say && sess.rand() < 0.35) mode = 'say';
      else if ((it.t === 'fill' || it.t === 'build') && it.l >= 2 && opts.tts && sess.mode === 'lesson' && !/[→"]/.test(it.p || '') && sess.rand() < 0.2) mode = 'dict';
    }
    sess.cur = { it, mode };
    return sess.cur;
  };
  function pickLesson(sess, st) {
    const T = C.byId[sess.topic];
    const last = sess.log.slice(-2).map((x) => C.itemById[x.id]).filter(Boolean);
    const lastTypes = last.map((i) => i.t), lastPt = last.length ? last[last.length - 1].pt : null;
    const early = sess.log.length < 3;
    for (const d of [0, -1, 1, -2, 2]) {
      const tier = sess.tier + d;
      let pool = T.items.filter((i) => i.l === tier && !sess.used.has(i.id));
      if (!early && pool.some((i) => i.t !== 'choose')) pool = pool.filter((i) => i.t !== 'choose'); // choosing only warms up
      if (!pool.length) continue;
      const score = (i) => (lastTypes.includes(i.t) ? 2e13 : 0) + (i.pt === lastPt ? 1e13 : 0) + (st.seen[i.id] || 0) + sess.rand();
      return pool.map((i) => [score(i), i]).sort((a, b) => a[0] - b[0])[0][1];
    }
    return null;
  }

  // ---------------------------------------------------------------- answers
  // Which mistake a wrong answer is: a known wrong answer of this item, else the item's usual mistake.
  L.errorOf = (it, given) => {
    const g = K.tokens(given);
    for (const [ans, err] of Object.entries(it.w)) if (K.sameTokens(g, K.tokens(ans))) return err;
    return it.e;
  };
  // Record one answer in the profile: totals, the topic, the card, the type of mistake, recent mistakes.
  L.record = (st, it, ok, given, day = U.dateKey()) => {
    st.stats.answers++;
    if (ok) st.stats.correct++;
    const t = topicState(st, it.topic);
    t.a++;
    if (ok) t.c++;
    st.seen[it.id] = Date.now();
    const { fixed } = R.record(st, it, ok, day);
    if (fixed) st.stats.fixed++;
    let err = null;
    if (!ok) {
      err = L.errorOf(it, given);
      if (err) st.errors[err] = (st.errors[err] || 0) + 1;
      st.recent.unshift({ id: it.id, g: String(given).slice(0, 200), d: day });
      st.recent = st.recent.slice(0, 40);
    }
    return { err, fixed };
  };
  // Adapt the tier of a lesson after an answer. Returns +1, -1 or 0.
  L.adapt = (sess, ok) => {
    if (sess.mode !== 'lesson') return 0;
    if (ok) { sess.run++; } else { sess.run = 0; sess.miss++; }
    if (sess.run >= 3 && sess.tier < 3) { sess.tier++; sess.run = 0; sess.miss = 0; return 1; }
    if (sess.miss >= 2 && sess.tier > 1) { sess.tier--; sess.run = 0; sess.miss = 0; return -1; }
    return 0;
  };
  L.answer = (sess, st, it, ok, given, day) => {
    const tier = sess.mode === 'lesson' ? sess.tier : it.l;
    const rec = L.record(st, it, ok, given, day);
    sess.log.push({ id: it.id, ok, given, tier, err: rec.err });
    const change = L.adapt(sess, ok);
    return Object.assign(rec, { change });
  };

  // ---------------------------------------------------------------- end of a session
  L.finish = (sess, st, day = U.dateKey()) => {
    const right = sess.log.filter((x) => x.ok).length, total = sess.log.length;
    const out = { right, total, up: 0 };
    if (total) st.stats.sessions++;
    if (sess.mode === 'lesson' && sess.topic && total) {
      const t = topicState(st, sess.topic);
      t.done++;
      t.tier = sess.tier;
      st.lastTopic = sess.topic;
      const before = t.reached;
      for (const tier of [1, 2, 3]) {
        const at = sess.log.filter((x) => x.tier === tier);
        if (at.length >= 4 && at.filter((x) => x.ok).length / at.length >= 0.8) t.reached = Math.max(t.reached, tier);
      }
      out.up = t.reached - before;
      out.tierFrom = sess.startTier;
      out.tierTo = sess.tier;
    }
    if (sess.mode === 'check' && sess.topic && total) {
      const t = topicState(st, sess.topic);
      const score = Math.round((right / total) * 100);
      t.check = Math.max(t.check || 0, score);
      st.lastTopic = sess.topic;
      if (score >= 75) { const before = t.reached; t.reached = 3; t.tier = 3; out.up = 3 - before; out.passed = true; }
    }
    if (sess.mode === 'diag' && total) {
      const tiers = {};
      for (const T of C.topics) {
        const res = sess.log.filter((x) => C.itemById[x.id] && C.itemById[x.id].topic === T.id);
        if (!res.length) continue;
        const ok = res.filter((x) => x.ok).length;
        const tier = ok === res.length ? 3 : ok ? 2 : 1;
        tiers[T.id] = tier;
        const t = topicState(st, T.id);
        t.tier = tier;
        t.reached = Math.max(t.reached, tier - 1);
      }
      st.diag = { day, tiers };
      out.tiers = tiers;
    }
    out.missed = sess.log.filter((x) => !x.ok).map((x) => C.itemById[x.id]).filter(Boolean);
    return out;
  };

  APP.level = L;
})();
