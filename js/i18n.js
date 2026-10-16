// English first, translation on demand. Rules and explanations are written in English with a Ukrainian and a
// Russian version; the 🌐 button under a block shows the version in the language chosen in Settings.
// Any exercise sentence can be opened in Google Translate (no key, nothing to write).
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const U = APP.U;
  const I = {};
  I.LANGS = { uk: { name: 'Українська', btn: '🌐 Українською' }, ru: { name: 'Русский', btn: '🌐 По-русски' } };
  I.lang = () => ((APP.state && APP.state.settings && I.LANGS[APP.state.settings.l1]) ? APP.state.settings.l1 : 'uk');

  // Tiny text format: every line is a paragraph, a blank line = a wider gap before the next one, "- " = bullet,
  // a line starting with ✅ or ❌ = an example sentence, **bold**, *italic*.
  I.inline = (s) => U.esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>');
  I.fmt = (text) => {
    const out = [];
    let ul = null, gap = false;
    const cls = (...c) => { if (gap && out.length) c.push('sp'); gap = false; c = c.filter(Boolean); return c.length ? ` class="${c.join(' ')}"` : ''; };
    for (const line of String(text || '').split('\n')) {
      const t = line.trim();
      if (t.startsWith('- ')) { if (!ul) { ul = []; ul.cls = cls(); } ul.push(`<li>${I.inline(t.slice(2))}</li>`); continue; }
      if (ul) { out.push(`<ul${ul.cls}>${ul.join('')}</ul>`); ul = null; }
      if (t) out.push(`<p${cls(/^[✅❌]/.test(t) && 'ex')}>${I.inline(t)}</p>`);
      else gap = true;
    }
    if (ul) out.push(`<ul${ul.cls}>${ul.join('')}</ul>`);
    return out.join('');
  };
  // A block in English with its translation behind 🌐. obj = { en, uk, ru }.
  let n = 0;
  I.block = (obj, cls = '') => (obj ? `<div class="trb ${cls}"><div class="en">${I.fmt(obj.en)}</div>${I.tr(obj)}</div>` : '');
  // Only the 🌐 button and the hidden translation (for a text whose English is shown in parts).
  I.tr = (obj) => {
    const l = I.lang();
    const tr = obj && obj[l];
    if (!tr) return '';
    const open = APP.state && APP.state.settings && APP.state.settings.alwaysL1;
    const id = 'tr' + ++n;
    return `<button class="trbtn" data-act="tr" data-arg="${id}" aria-expanded="${open ? 'true' : 'false'}">${I.LANGS[l].btn}</button><div class="l1" id="${id}" lang="${l}" ${open ? '' : 'hidden'}>${I.fmt(tr)}</div>`;
  };
  I.toggle = (id, btn) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.hidden = !el.hidden;
    if (btn) btn.setAttribute('aria-expanded', el.hidden ? 'false' : 'true');
  };
  I.gt = (text) => `https://translate.google.com/?sl=en&tl=${I.lang()}&op=translate&text=${encodeURIComponent(text)}`;
  I.gtLink = (text) => `<a class="gt" href="${U.esc(I.gt(text))}" target="_blank" rel="noopener">Translate ↗</a>`;

  APP.i18n = I;
})();
