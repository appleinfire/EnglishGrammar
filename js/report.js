// The weekly report: one week (Monday to Sunday) of practice, compared with the week before.
// Built from what the profile already keeps per day: minutes (time), answers (days) and the report log (log).
//   W.monday(day)          → the Monday of that day's week
//   W.week(st, monday)     → numbers for one week
//   W.report(st, monday)   → { cur, prev, focus }
//   W.pending(st, today)   → last week's Monday if that week had practice and its report is not opened yet
//   W.text(st, rep)        → the report as plain text, to share
(function () {
  const APP = globalThis.APP;
  const U = APP.U, R = APP.srs, C = APP.content;
  const W = {};
  const ACTIVE = 5; // answers that make a day count (as for the streak)

  W.monday = (day = U.dateKey()) => {
    const [y, m, d] = day.split('-').map(Number);
    return R.addDays(day, -((new Date(y, m - 1, d).getDay() + 6) % 7));
  };

  W.week = (st, start) => {
    const goal = (st.settings && st.settings.goal) || 10;
    const out = { start, end: R.addDays(start, 6), days: [], sec: 0, a: 0, c: 0, f: 0, l: 0, u: 0, active: 0, goalDays: 0, goal, topics: {}, errors: {} };
    for (let i = 0; i < 7; i++) {
      const k = R.addDays(start, i);
      const sec = (st.time || {})[k] || 0, d = (st.days || {})[k] || {}, lg = (st.log || {})[k] || {};
      const a = d.a || 0, c = d.c || 0;
      out.days.push({ k, min: Math.round(sec / 60), a, c });
      out.sec += sec;
      out.a += a;
      out.c += c;
      out.f += lg.f || 0;
      out.l += lg.l || 0;
      out.u += lg.u || 0;
      if (a >= ACTIVE) out.active++;
      if (sec >= goal * 60) out.goalDays++;
      for (const [t, n] of Object.entries(lg.t || {})) {
        const x = (out.topics[t] = out.topics[t] || { a: 0, c: 0 });
        x.a += n;
        x.c += (lg.r || {})[t] || 0;
      }
      for (const [e, n] of Object.entries(lg.e || {})) out.errors[e] = (out.errors[e] || 0) + n;
    }
    out.min = Math.round(out.sec / 60);
    out.acc = out.a ? Math.round((out.c / out.a) * 100) : null;
    out.topicList = Object.entries(out.topics).filter(([id]) => C.byId[id]).map(([id, x]) => ({ id, a: x.a, c: x.c })).sort((x, y) => y.a - x.a);
    out.errorList = Object.entries(out.errors).filter(([e, n]) => n > 0 && C.error(e)).map(([id, n]) => ({ id, n })).sort((x, y) => y.n - x.n);
    return out;
  };

  // What to work on next week: the topic with the lowest accuracy (at least 6 answers, under 80%),
  // else the most frequent mistake, else the next topic on her path.
  W.focus = (st, wk) => {
    const weak = wk.topicList.filter((t) => t.a >= 6 && t.c / t.a < 0.8).sort((x, y) => x.c / x.a - y.c / y.a)[0];
    if (weak) return { kind: 'topic', id: weak.id, acc: Math.round((weak.c / weak.a) * 100) };
    if (wk.errorList.length) return { kind: 'error', id: wk.errorList[0].id, n: wk.errorList[0].n };
    const next = APP.level.upNext(st);
    return next ? { kind: 'next', id: next.id } : null;
  };

  W.report = (st, start) => {
    const cur = W.week(st, start), prev = W.week(st, R.addDays(start, -7));
    return { cur, prev, focus: W.focus(st, cur) };
  };

  W.pending = (st, day = U.dateKey()) => {
    const last = R.addDays(W.monday(day), -7);
    return W.week(st, last).a > 0 && (st.reportSeen || '') < last ? last : '';
  };

  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const nice = (k) => { const [, m, d] = k.split('-').map(Number); return `${MON[m - 1]} ${d}`; };
  W.range = (wk) => `${nice(wk.start)} – ${nice(wk.end)}`;

  W.text = (st, rep) => {
    const w = rep.cur, p = rep.prev;
    const lines = [
      `English Grammar · ${st.name} · week of ${W.range(w)}`,
      `⏱ ${w.min} min (${w.goalDays} of 7 days at the ${w.goal}-minute goal)${p.a ? `, the week before: ${p.min} min` : ''}`,
      `✍️ ${w.a} answers, ${w.acc == null ? '—' : w.acc + '%'} right${p.acc != null ? ` (the week before: ${p.acc}%)` : ''}`,
      `🔁 ${w.f} mistakes fixed · ✅ ${w.l} patterns learned · ⬆ ${w.u} tiers passed`,
    ];
    if (w.topicList.length) lines.push('📚 ' + w.topicList.slice(0, 5).map((t) => `${C.byId[t.id].title} (${Math.round((t.c / t.a) * 100)}%)`).join(', '));
    if (w.errorList.length) lines.push('🧩 Most frequent mistake: ' + C.byId[C.error(w.errorList[0].id).topic].title + ` (${w.errorList[0].n}×)`);
    return lines.join('\n');
  };

  APP.report = W;
})();
