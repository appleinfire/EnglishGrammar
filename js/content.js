// The content registry. Every file in js/topics/ calls APP.addTopic({...}) with one topic:
//   id, title, level ('A2'…'C1'), group, icon, about
//   rule:   { en, uk, ru }   short explanation; lines starting with "- " are bullets, **bold**, *italic*
//   examples: [ 'English sentence', … ]   (each gets a 🔊 button)
//   trap:   { uk, ru, wrong, right, note: { en, uk, ru } }   the typical mistake of Ukrainian/Russian speakers
//   errors: { id: { en, uk, ru } }   one explanation per type of mistake (items point to them)
//   items:  [ … ]   exercises, written compactly:
//     common: t (type), pt (pattern: a group of sentences that test the same thing), l (tier 1 Core / 2 Use / 3 Pro),
//             a (right answer or list of right answers), e (error id when the answer is wrong),
//             am (American-English answers that are also right: accepted with a note), n (extra note, English)
//     choose: p ('She ___ to Rome twice.'), o (wrong options), w ({ wrongOption: errorId })
//     fill:   p ('I ___ (live) here since 2022.'), a ('have lived' or ['have lived', 'have been living']);
//             two blanks: a 'have|lived'; w ({ wrongAnswer: errorId })
//     build:  a (the sentence; its words become tiles), x (extra wrong tiles)
//     fix:    p (sentence with a mistake), a (corrected sentence(s))
//     tr:     i (instruction, e.g. 'Make it passive.'), p (sentence), a (result), s (start of the answer, shown)
//     tl:     uk, ru (sentence to translate), a (English answers)
// An item's id comes from its content, so it stays the same when other items are added or moved.
//
// Situations: every file in js/scenes/ calls APP.addScene({...}) with one short dialog from real life:
//   id, title, icon, about, level, theme ('life' | 'school' | 'work' | 'social'), who (the other speaker)
//   intro:   { en, uk, ru }   where we are and who is talking
//   lines:   [ { them: 'What they say.' } | { me: 'What she says (shown).' } | { me: { exercise } } ]
//            an exercise is written like a topic's item, plus g (the grammar topic it trains) and pt (an existing
//            pattern of that topic); e and w point to that topic's errors; l is 2 when not given.
//            So a mistake in a dialog counts for the grammar topic, its review card and "My mistakes".
//   phrases: [ { en, uk, ru } ]   how people really say it (each gets a 🔊 button)
//   tip:     { en, uk, ru }   a practical note about the situation
// Did you know: every file in js/facts/ calls APP.addFacts({ theme, items: [...] }) with sentences that are facts
// (theme: one of C.FACT_THEMES). A fact is an exercise written like a dialog's (g = its topic, pt = an existing pattern,
// e and w = that topic's errors, l = tier) plus f: { en, uk, ru } — a line or two more about it, shown after the answer.
// Facts ARE items of their topic: they come up in lessons, review, Challenge and Endless like any other sentence.
//
// Exercises of a dialog are not part of their topic's items: lessons and review bring sentences that make sense
// on their own, and a card made in a dialog comes back with an ordinary sentence of the same pattern.
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const C = (APP.content = { topics: [], byId: {}, items: [], itemById: {}, errors: {}, scenes: [], sceneById: {}, sceneItems: [], facts: [] });
  C.FACT_THEMES = [['world', '🇺🇸', 'The US & the world'], ['science', '🔭', 'Science & space'], ['nature', '🐾', 'Nature & animals'], ['people', '🧠', 'People & everyday life']];

  const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); };
  const list = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);
  const errId = (topic, e) => (!e ? null : e.includes(':') ? e : topic + ':' + e);

  C.NONE = '—'; // "no word here" as a choice (no article)
  // The whole sentence an item is about (for listening, dictation and the feedback line).
  const BLANK = /_{3,}(\s*\([^)]*\))?/;
  C.sentence = (it, answer) => {
    const a = answer || it.a[0];
    if (it.t === 'fill' || it.t === 'choose') {
      const parts = a.split('|');
      let s = it.p;
      for (const part of parts) s = s.replace(BLANK, part === C.NONE ? '' : part);
      return s.replace(/\s{2,}/g, ' ').replace(/^\s+/, '').replace(/\s+([.,!?])/g, '$1').replace(/ '(ll|s|re|ve|d|m)\b/g, "'$1").replace(/^[a-z]/, (c) => (it.p.match(BLANK) && it.p.indexOf('_') === 0 ? c.toUpperCase() : c));
    }
    return a;
  };

  const item = (raw, topic, salt) => {
    const it = Object.assign({}, raw, { topic, a: list(raw.a), am: list(raw.am), o: list(raw.o), x: list(raw.x) });
    it.e = errId(topic, raw.e);
    it.w = {};
    for (const [k, v] of Object.entries(raw.w || {})) it.w[k] = errId(topic, v);
    it.id = topic + '.' + hash(salt + it.t + '|' + (it.p || it.uk || '') + '|' + it.a[0]);
    return it;
  };

  APP.addTopic = (t) => {
    const errors = {};
    for (const [k, v] of Object.entries(t.errors || {})) errors[t.id + ':' + k] = Object.assign({ id: t.id + ':' + k, topic: t.id }, v);
    Object.assign(C.errors, errors);
    const topic = Object.assign({}, t, { errors, items: [] });
    for (const raw of t.items || []) {
      const it = item(raw, t.id, '');
      topic.items.push(it);
      C.items.push(it);
      C.itemById[it.id] = it;
    }
    C.topics.push(topic);
    C.byId[t.id] = topic;
    return topic;
  };

  APP.addScene = (s) => {
    const scene = Object.assign({}, s, { items: [] });
    scene.lines = (s.lines || []).map((ln, i) => {
      if (!ln.me || typeof ln.me !== 'object') return ln;
      const it = item(Object.assign({ l: 2 }, ln.me), ln.me.g, '@' + s.id + '|');
      delete it.g;
      it.scene = s.id;
      it.line = i;
      scene.items.push(it);
      C.sceneItems.push(it);
      C.itemById[it.id] = it;
      return { me: it };
    });
    C.scenes.push(scene);
    C.sceneById[s.id] = scene;
    return scene;
  };
  APP.addFacts = (group) => {
    for (const raw of group.items || []) {
      const T = C.byId[raw.g];
      const it = item(raw, raw.g, '');
      delete it.g;
      it.fact = raw.f;
      delete it.f;
      it.theme = group.theme;
      C.facts.push(it);
      C.items.push(it);
      C.itemById[it.id] = it;
      if (T) T.items.push(it);
    }
  };
  // What the other speaker said just before a dialog exercise (shown with it outside the dialog).
  C.context = (it) => {
    const S = it && it.scene && C.sceneById[it.scene];
    if (!S) return null;
    for (let i = it.line - 1; i >= 0; i--) if (S.lines[i].them) return S.lines[i].them;
    return null;
  };

  C.patterns = (topicId) => [...new Set(C.byId[topicId].items.map((i) => i.pt))];
  C.error = (id) => C.errors[id] || null;
})();
