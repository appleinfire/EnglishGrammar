// How each type of exercise looks and how her answer is read and judged.
//   X.html(cur)        → the question (prompt, blanks, tiles, field)
//   X.given(cur)       → her answer as text, read from the screen
//   X.judge(cur, given) → { ok, typo, close, american, right (the whole right sentence), best }
// cur = { it, mode } from APP.level.next; mode 'say' = answer aloud with the keyboard microphone,
// 'dict' = listen and type the whole sentence.
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const U = APP.U, K = APP.check, C = APP.content, I = APP.i18n;
  const esc = U.esc;
  const X = {};
  // Typing fields: no autocorrect, no automatic capitals, no spellcheck — otherwise the phone fixes her grammar.
  const NOFIX = 'autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"';
  const BLANK = /_{3,}/g;

  X.LABEL = {
    choose: 'Choose the right form', fill: 'Fill in the blank', build: 'Put the words in order', fix: 'Find and fix the mistake',
    tr: 'Rewrite the sentence', tl: 'Say it in English', say: 'Say it out loud', dict: 'Listen and type',
  };
  X.label = (cur) => (cur.mode === 'say' ? X.LABEL.say : cur.mode === 'dict' ? X.LABEL.dict : X.LABEL[cur.it.t]);

  const field = (id, value = '', ph = 'Type your answer') => `<textarea id="${id}" class="field answer" rows="2" ${NOFIX} placeholder="${esc(ph)}" aria-label="Your answer">${esc(value)}</textarea>`;
  // The in-app microphone: shown next to sentence answers when speech to text works here and is not turned off.
  X.mic = () => { const V = APP.voice, s = (APP.state && APP.state.settings) || {}; return !!(V && V.canListen && !V.micBroken && s.mic !== false); };
  const spoken = (id, value, ph) => (X.mic()
    ? `<div class="answerbox">${field(id, value, ph)}<button class="micbtn" data-act="mic" aria-label="Speak your answer" aria-pressed="false">🎙</button></div><p class="micnote muted" id="micnote" aria-live="polite"></p>`
    : field(id, value, ph));
  const l1 = (it) => it[I.lang()] || it.uk || it.ru || '';

  X.html = (cur) => {
    const it = cur.it;
    if (cur.mode === 'dict') {
      return `<p class="task">🎧 Listen, then type the whole sentence.</p>
        <div class="row left"><button class="btn ghost" data-act="say" data-arg="model">🔊 Play</button><button class="btn ghost" data-act="say" data-arg="slow">🐢 Slowly</button></div>
        ${field('ans', '', 'Type what you hear')}`;
    }
    if (it.t === 'choose') {
      if (!cur.options) cur.options = U.shuffle([it.a[0]].concat(it.o));
      return `<p class="sentence">${esc(it.p).replace(BLANK, '<span class="gap">___</span>')}</p>
        <div class="options">${cur.options.map((o, i) => `<button class="option" data-act="pick" data-arg="${i}">${o === C.NONE ? '— <small>(no word)</small>' : esc(o)}</button>`).join('')}</div>`;
    }
    if (it.t === 'fill') {
      let k = 0;
      const s = esc(it.p).replace(BLANK, () => `<input class="blank" id="b${k++}" ${NOFIX} aria-label="blank ${k}">`);
      return `${it.i ? `<p class="task">${esc(it.i)}</p>` : ''}<p class="sentence fill">${s}</p>`;
    }
    if (it.t === 'build') {
      if (!cur.tiles) {
        const words = it.a[0].replace(/[.!?]+$/, '').split(/\s+/);
        if (words[0] !== 'I' && !it.cap) words[0] = words[0][0].toLowerCase() + words[0].slice(1);
        cur.end = (it.a[0].match(/[.!?]+$/) || [''])[0];
        cur.tiles = U.shuffle(words.concat(it.x));
        cur.built = [];
      }
      return `<div class="built" id="built" aria-live="polite">${cur.built.length ? cur.built.map((i, n) => `<button class="tile-w on" data-act="untile" data-arg="${n}">${esc(cur.tiles[i])}</button>`).join('') + `<span class="end">${esc(cur.end)}</span>` : '<span class="muted">Tap the words in order</span>'}</div>
        <div class="tiles-w">${cur.tiles.map((w, i) => `<button class="tile-w" data-act="tile" data-arg="${i}" ${cur.built.includes(i) ? 'disabled' : ''}>${esc(w)}</button>`).join('')}</div>`;
    }
    if (it.t === 'fix') {
      return `<p class="sentence wrongline">${esc(it.p)}</p><p class="task">Edit the sentence so it is correct${X.mic() ? ', or say the right sentence' : ''}.</p>${spoken('ans', it.p)}`;
    }
    if (it.t === 'tr') {
      return `<p class="task">${esc(it.i)}</p><p class="sentence">${esc(it.p)}</p>${spoken('ans', it.s ? it.s + ' ' : '')}`;
    }
    if (it.t === 'tl') {
      const say = cur.mode === 'say';
      return `<p class="sentence l1" lang="${I.lang()}">${esc(l1(it))}</p>
        ${say ? `<p class="task">${X.mic() ? '🎙 Tap the microphone and say it in English. (Or type it.)' : '🎤 Tap the microphone on your keyboard and say it in English. (Or type it.)'}</p>` : ''}
        ${spoken('ans', '', say ? 'Say it in English' : 'In English…')}`;
    }
    return '';
  };

  X.given = (cur) => {
    const it = cur.it;
    if (cur.mode === 'dict') return (document.getElementById('ans') || {}).value || '';
    if (it.t === 'choose') return cur.picked != null ? cur.options[cur.picked] : '';
    if (it.t === 'fill') return [...document.querySelectorAll('.blank')].map((b) => b.value.trim()).join('|');
    if (it.t === 'build') return cur.built.map((i) => cur.tiles[i]).join(' ') + cur.end;
    return (document.getElementById('ans') || {}).value || '';
  };
  X.empty = (cur, given) => !given.replace(/\|/g, '').trim();

  X.judge = (cur, given) => {
    const it = cur.it;
    const all = it.a.concat(it.am);
    const american = (best) => it.am.includes(best);
    if (cur.mode === 'dict') {
      const sentences = all.map((a) => C.sentence(it, a));
      const r = K.check(given, sentences);
      return Object.assign(r, { right: r.best || sentences[0], american: false });
    }
    if (it.t === 'choose') {
      const ok = it.a.includes(given);
      return { ok, best: it.a[0], right: C.sentence(it, it.a[0]) };
    }
    if (it.t === 'fill') {
      const parts = given.split('|');
      let typo = false;
      for (const a of all) {
        const want = a.split('|');
        if (want.length !== parts.length) continue;
        const res = want.map((w, i) => K.check(parts[i], [w]));
        if (res.every((r) => r.ok)) {
          typo = res.some((r) => r.typo);
          return { ok: true, typo, best: a, american: american(a), right: C.sentence(it, a) };
        }
      }
      // compared with the right answer closest to hers
      const near = K.check(X.asSentence(cur, given), it.a.map((a) => C.sentence(it, a)));
      const best = it.a.find((a) => C.sentence(it, a) === near.best) || it.a[0];
      return { ok: false, best, right: C.sentence(it, best) };
    }
    // From the 🎙 button (and not edited since): try every version the recognizer heard, exact matches first;
    // then forgive what recognition often mishears (articles, endings). Saying the wrong sentence of a "fix"
    // exercise back is never forgiven.
    const fromMic = cur.heard != null && given.trim() === cur.heard;
    const tries = fromMic && cur.alts && cur.alts.length ? cur.alts : [given];
    const lenient = cur.mode === 'say' || fromMic;
    const prompt = it.t === 'fix' ? K.tokens(it.p) : null;
    let r = null;
    for (const loose of lenient ? [false, true] : [false]) {
      for (const g of tries) {
        const x = K.check(g, all, { spoken: loose });
        if (x.ok && !(prompt && K.sameTokens(K.tokens(g), prompt))) { r = x; break; }
      }
      if (r) break;
    }
    if (!r) r = K.check(given, all);
    const best = r.best || it.a[0]; // when wrong: the right answer closest to hers
    return Object.assign(r, { best, american: r.ok && american(r.best), right: best });
  };

  // Her answer as a full sentence, for the side-by-side comparison.
  X.asSentence = (cur, given) => {
    const it = cur.it;
    if (cur.mode !== 'dict' && (it.t === 'fill' || it.t === 'choose')) return C.sentence(it, given.split('|').map((x) => x || '…').join('|'));
    return given;
  };

  APP.ex = X;
})();
