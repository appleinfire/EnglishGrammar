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
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const C = (APP.content = { topics: [], byId: {}, items: [], itemById: {}, errors: {} });

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

  APP.addTopic = (t) => {
    const errors = {};
    for (const [k, v] of Object.entries(t.errors || {})) errors[t.id + ':' + k] = Object.assign({ id: t.id + ':' + k, topic: t.id }, v);
    Object.assign(C.errors, errors);
    const topic = Object.assign({}, t, { errors, items: [] });
    for (const raw of t.items || []) {
      const it = Object.assign({}, raw, { topic: t.id, a: list(raw.a), am: list(raw.am), o: list(raw.o), x: list(raw.x) });
      it.e = errId(t.id, raw.e);
      it.w = {};
      for (const [k, v] of Object.entries(raw.w || {})) it.w[k] = errId(t.id, v);
      it.id = t.id + '.' + hash(it.t + '|' + (it.p || it.uk || '') + '|' + it.a[0]);
      topic.items.push(it);
      C.items.push(it);
      C.itemById[it.id] = it;
    }
    C.topics.push(topic);
    C.byId[t.id] = topic;
    return topic;
  };

  C.patterns = (topicId) => [...new Set(C.byId[topicId].items.map((i) => i.pt))];
  C.error = (id) => C.errors[id] || null;
})();
