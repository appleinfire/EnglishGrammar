// Spaced repetition (Leitner boxes). A card is one pattern of one topic ("present perfect with since"),
// not one sentence: when a card comes back, it brings a different sentence of the same pattern.
//   box 1 → back in 1 day, 2 → 3 days, 3 → 7, 4 → 14, 5 → 30.
// A mistake puts the card in box 1, due today. A card moves up at most once a day, and not on the day of a mistake,
// so a pattern counts as learned (box 3+) only after right answers on different days.
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const U = APP.U;
  const R = {};
  R.INTERVAL = [0, 1, 3, 7, 14, 30];
  R.LEARNED = 3;

  R.addDays = (day, n) => {
    const [y, m, d] = day.split('-').map(Number);
    return U.dateKey(new Date(y, m - 1, d + n));
  };
  R.key = (it) => it.topic + ':' + it.pt;

  // Record one answer. Returns { fixed } when a pattern she had got wrong is now right.
  R.record = (st, it, ok, day = U.dateKey(), now = Date.now()) => {
    const k = R.key(it);
    const c = st.cards[k] || { box: 0, due: day, ok: 0, miss: 0 };
    let fixed = false;
    c.seen = Math.max(now, (c.seen || 0) + 1);
    c.last = it.id;
    if (ok) {
      c.ok++;
      if (c.pend) { fixed = true; c.pend = false; }
      if (c.md === day || c.ud === day) {
        if (c.box <= 1) c.due = R.addDays(day, 1);
      } else {
        c.box = Math.min(5, (c.box || 0) + 1);
        c.due = R.addDays(day, R.INTERVAL[c.box]);
        c.ud = day;
      }
    } else {
      c.miss++;
      c.box = 1;
      c.due = day;
      c.md = day;
      c.pend = true;
    }
    st.cards[k] = c;
    return { fixed };
  };

  // Cards due today (or earlier): mistakes and low boxes first.
  R.due = (st, day = U.dateKey()) => Object.entries(st.cards)
    .filter(([k, c]) => c.due <= day && APP.content.byId[k.split(':')[0]])
    .sort((x, y) => x[1].box - y[1].box || (x[1].due < y[1].due ? -1 : 1))
    .map(([k]) => k);

  R.learned = (c) => !!c && c.box >= R.LEARNED;

  // A sentence for a card: same pattern, not the one shown last time, tier close to the topic's tier,
  // the one seen longest ago. `avoid` = item ids already used in this session.
  R.pick = (st, key, tier, avoid = new Set()) => {
    const [topic, pt] = [key.slice(0, key.indexOf(':')), key.slice(key.indexOf(':') + 1)];
    const T = APP.content.byId[topic];
    if (!T) return null;
    const c = st.cards[key] || {};
    let pool = T.items.filter((i) => i.pt === pt && !avoid.has(i.id));
    if (pool.length > 1) pool = pool.filter((i) => i.id !== c.last);
    if (!pool.length) return null;
    const seen = (i) => st.seen[i.id] || 0;
    pool.sort((x, y) => Math.abs(x.l - tier) - Math.abs(y.l - tier) || seen(x) - seen(y) || Math.random() - 0.5);
    return pool[0];
  };

  APP.srs = R;
})();
