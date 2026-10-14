// Screens and routing. Screens render into #app; every click is routed through data-act="<action>" data-arg="<argument>".
// The profile picker, family sync and save code come from the family app shell (appleinfire/Math templates/app-shell).
(function () {
  const APP = globalThis.APP, U = APP.U, S = APP.store, CFG = APP.CONFIG;
  const C = APP.content, L = APP.level, R = APP.srs, I = APP.i18n, V = APP.voice, X = APP.ex, K = APP.check, W = APP.report;
  const esc = U.esc;
  const WORD = CFG.profileWord;
  const Word = WORD[0].toUpperCase() + WORD.slice(1);

  let st = null; // APP.state: the open profile
  let sess = null; // the session in progress
  let ui = {}; // small per-screen state (forms, "tap again to confirm" buttons…)
  let cur = ''; // screen that may be redrawn when another device changes the data ('' = leave it alone)
  let wanted = ''; // profile name from a link of our other app (…/#who=Mia): open that profile on start
  let timers = [];

  const $ = (sel) => document.querySelector(sel);
  const root = () => document.getElementById('app');
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const kindOf = (id) => CFG.kinds.find((k) => k.id === id) || CFG.kinds[0];
  const kindChip = (id) => `<span class="kchip" style="--pc:${kindOf(id).color}">${kindOf(id).label}</span>`;
  const pct = (c, a) => (a ? Math.round((c / a) * 100) : 0);
  const today = () => U.dateKey();
  const appLinks = () => {
    const other = (CFG.apps || []).filter((a) => a.id !== CFG.id);
    const who = st ? '#who=' + encodeURIComponent(st.name) : '';
    return other.length ? `<nav class="apps" aria-label="Our other apps"><span>Our other apps:</span>${other.map((a) => `<a class="appbtn" href="${esc(a.url + who)}">${a.icon} ${esc(a.name)}</a>`).join('')}</nav>` : '';
  };
  const speakBtn = (text, label = '🔊', slow = false) => `<button class="iconbtn sm" data-act="${slow ? 'speakSlow' : 'speak'}" data-arg="${esc(text)}" aria-label="${slow ? 'Listen slowly' : 'Listen'}">${label}</button>`;
  const tierDots = (reached, tier) => `<span class="dots" aria-label="${L.TIERS.map((t, i) => t + (reached > i ? ' passed' : '')).join(', ')}">${[1, 2, 3].map((t) => `<i class="${reached >= t ? 'on' : ''} ${tier === t && reached < t ? 'cur' : ''}"></i>`).join('')}</span>`;

  function render(html, cls = '') {
    timers.forEach(clearTimeout);
    timers = [];
    cur = '';
    V.forget();
    const r = root();
    r.className = cls;
    r.innerHTML = html;
    window.scrollTo(0, 0);
  }
  // Draw the same screen again after a choice on it (a chip, a toggle, "tap again to…"), keeping the scroll position.
  function redraw(screen) {
    const y = window.scrollY;
    screen();
    window.scrollTo(0, y);
  }
  function header(title, back = 'home') {
    return `<header class="bar"><button class="iconbtn" data-act="go" data-arg="${back}" aria-label="Back">←</button><h1>${title}</h1>
      <button class="mini-av" data-act="go" data-arg="who" aria-label="Switch ${WORD} (now ${esc(st.name)})" title="Switch ${WORD}">${st.avatar}</button></header>`;
  }
  function toast(html) {
    let box = $('#toasts');
    if (!box) { box = document.createElement('div'); box.id = 'toasts'; document.body.appendChild(box); }
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = html;
    box.appendChild(t);
    setTimeout(() => t.classList.add('out'), 2600);
    setTimeout(() => t.remove(), 3100);
  }
  function modal(html) {
    closeModal();
    const m = document.createElement('div');
    m.className = 'modal';
    m.id = 'modal';
    m.innerHTML = `<div class="modal-card" role="dialog" aria-modal="true">${html}</div>`;
    m.addEventListener('click', (e) => { if (e.target === m) closeModal(); });
    document.body.appendChild(m);
  }
  function closeModal() { const m = $('#modal'); if (m) m.remove(); }

  // ---------------------------------------------------------------- daily goal and streak
  const minutesToday = () => Math.floor(((st.time || {})[today()] || 0) / 60);
  const active = (day) => ((st.days[day] || {}).a || 0) >= 5;
  // Days in a row with at least 5 answers. Today does not break the streak until it is over;
  // one missed day a week is forgiven (a "freeze").
  function streak() {
    let d = today(), n = 0, i = 0, lastFreeze = -99;
    if (!active(d)) d = R.addDays(d, -1);
    for (; i < 3650; i++) {
      if (active(d)) n++;
      else if (n > 0 && i - lastFreeze >= 7 && active(R.addDays(d, -1))) lastFreeze = i;
      else break;
      d = R.addDays(d, -1);
    }
    return n;
  }
  function ring(done, goal) {
    const p = Math.min(1, done / goal), r = 26, c = 2 * Math.PI * r;
    return `<svg class="ring" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="${r}" class="track"/><circle cx="32" cy="32" r="${r}" class="fill" stroke-dasharray="${(c * p).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 32 32)"/></svg>`;
  }

  // ---------------------------------------------------------------- profiles
  function who() {
    const list = S.profiles();
    if (!list.length) return newProfile();
    sess = null;
    st = null;
    APP.state = null;
    render(`<main class="who-screen">
      <h1 class="title center">Who’s practicing?</h1>
      <div class="profiles">${list.map((p) => `<button class="profile" data-act="openProfile" data-arg="${p.id}" style="--pc:${kindOf(p.kind).color}">
          <span class="pav">${p.avatar}</span><b>${esc(p.name)}</b>${kindChip(p.kind)}<small>${p.stats.correct} right answers</small></button>`).join('')}
        <button class="profile add" data-act="go" data-arg="new"><span class="pav">＋</span><b>New ${WORD}</b><small>Each ${WORD} has their own progress</small></button>
      </div>
      ${syncLine()}
      ${appLinks()}
    </main>`, 'is-who');
    cur = 'who';
  }
  function newProfile() {
    const first = !S.profiles().length;
    const k = (ui.newKid = ui.newKid || { name: '', kind: 'B1', avatar: CFG.avatars[0], l1: 'uk' });
    render(`<main class="onboard">
      ${first ? `<h1 class="title">📘 ${esc(CFG.name)}</h1><p class="lead">Short rules, lots of practice, and feedback on every mistake. About 10 minutes a day.</p>` : `<header class="bar"><button class="iconbtn" data-act="go" data-arg="who" aria-label="Back">←</button><h1>New ${WORD}</h1></header>`}
      ${first && CL() && !APP.cloud.family ? '<p class="muted">Already use this app on another device? <button class="linkbtn" data-act="go" data-arg="family">Connect your family ☁️</button></p>' : ''}
      <label for="ob-name">Your name</label>
      <input id="ob-name" class="field" maxlength="16" autocomplete="off" value="${esc(k.name)}" placeholder="Name">
      <div class="label">Your level now</div>
      <div class="kinds">${CFG.kinds.map((g) => `<button class="kind-pick ${k.kind === g.id ? 'sel' : ''}" data-act="pickKind" data-arg="${g.id}" style="--pc:${g.color}"><span class="gi">${g.icon}</span><b>${g.label}</b><small>${g.about}</small></button>`).join('')}</div>
      <p class="muted">Not sure? Pick Intermediate. The level check on the home screen sets a starting tier for every topic.</p>
      <div class="label">Translations of rules and explanations</div>
      <div class="chips">${Object.entries(I.LANGS).map(([id, l]) => `<button class="chip ${k.l1 === id ? 'sel' : ''}" data-act="pickL1" data-arg="${id}">${l.name}</button>`).join('')}</div>
      <div class="label">Picture</div>
      <div class="avatars">${CFG.avatars.map((a) => `<button class="avatar-pick ${k.avatar === a ? 'sel' : ''}" data-act="pickAvatar" data-arg="${a}">${a}</button>`).join('')}</div>
      <button class="btn big" data-act="createProfile">Start →</button>
    </main>`, 'is-onboard');
  }
  const keepNewKid = () => { if ($('#ob-name')) ui.newKid.name = $('#ob-name').value.trim(); };
  function openProfile(id) {
    st = S.open(id);
    if (!st) return who();
    sess = null;
    ui = {};
    remember('home');
    home();
  }

  // ---------------------------------------------------------------- family sync
  const CL = () => (APP.cloud && APP.cloud.configured() ? APP.cloud : null);
  function syncLine() {
    const C2 = CL();
    if (!C2) return '';
    if (!C2.family) {
      const sib = C2.sibling();
      return `<div id="sync" class="sync off">📱 Progress is saved on this device only. <button class="linkbtn" data-act="go" data-arg="family">${sib ? `Use family ${esc(sib.name)} ☁️` : 'Sync devices ☁️'}</button></div>`;
    }
    const label = { connecting: 'connecting…', saving: 'saving…', synced: 'synced ✓', offline: 'offline — saved here, will sync later', error: 'sync problem, will retry' }[C2.status] || 'synced ✓';
    return `<div id="sync" class="sync s-${C2.status}">☁️ Family <b>${esc(C2.family.name)}</b> · ${label}</div>`;
  }
  const FAM_ERRORS = {
    'short-code': 'The family code needs at least 6 letters or numbers.',
    'bad-pin': 'The PIN must be 4 to 6 digits.',
    'pin-mismatch': 'The two PINs are different. Type the same PIN twice.',
    exists: 'This family code and PIN are already used. Choose “I already have a family” to join it, or pick a different code.',
    'not-found': 'No family found with this code and PIN. Check both and try again.',
    offline: 'No internet connection. Connect to Wi-Fi and try again.',
    denied: 'The server refused access. Check the Firebase setup.',
    unavailable: 'Online sync is not available in this copy of the app. Open the website version.',
  };
  function family() {
    const f = (ui.fam = ui.fam || { mode: 'choose', code: '', error: '' });
    const hasKids = S.profiles().length > 0;
    const back = f.mode !== 'choose' ? '<button class="iconbtn" data-act="famMode" data-arg="choose" aria-label="Back">←</button>'
      : hasKids ? '<button class="iconbtn" data-act="go" data-arg="who" aria-label="Back">←</button>' : '';
    const title = f.mode === 'create' ? 'Create a family' : f.mode === 'join' ? 'Join your family' : 'Save progress online';
    let body;
    if (f.mode === 'choose') {
      const sib = APP.cloud.sibling();
      body = `<p class="lead">Connect this device, and your phone, tablet and computer show the same progress. A “family” is a code and a PIN shared by our apps.</p>
        <div class="kinds">
          ${sib ? `<button class="kind-pick" id="fam-sib" data-act="famSibling" style="--pc:#5b3fa8"><span class="gi">🔗</span><b>Use family ${esc(sib.name)}</b><small>Already connected in ${esc(sib.app)} on this device · no PIN needed</small></button>` : ''}
          <button class="kind-pick" data-act="famMode" data-arg="create" style="--pc:#2f8f83"><span class="gi">🏡</span><b>Create a family</b><small>First device: choose a code and a PIN</small></button>
          <button class="kind-pick" data-act="famMode" data-arg="join" style="--pc:#c28a1e"><span class="gi">🔑</span><b>I already have a family</b><small>Another device, or the code from Math Expedition</small></button>
          ${hasKids ? '' : '<button class="kind-pick" data-act="localOnly" style="--pc:#9aa6b2"><span class="gi">📱</span><b>Use this device only</b><small>You can connect later in Settings</small></button>'}
        </div>
        <p class="famerr" id="fam-err" role="alert">${esc(f.error)}</p>`;
    } else {
      const create = f.mode === 'create';
      body = `<p class="muted">${create ? 'Pick a code you will remember (at least 6 letters, for example <b>smith-tigers</b>) and a 4–6 digit PIN. Write them down: you type them once on every new device.' : 'Type the family code and PIN you chose on the first device.'}${hasKids && create ? ` The ${WORD}s already on this device will be added to the family.` : ''}</p>
        <label for="fam-code">Family code</label>
        <input id="fam-code" class="field" maxlength="40" autocomplete="off" autocapitalize="none" spellcheck="false" value="${esc(f.code)}" placeholder="family code">
        <label for="fam-pin">PIN</label>
        <input id="fam-pin" class="field" type="password" inputmode="numeric" maxlength="6" autocomplete="off" placeholder="4–6 digits">
        ${create ? '<label for="fam-pin2">PIN again</label><input id="fam-pin2" class="field" type="password" inputmode="numeric" maxlength="6" autocomplete="off" placeholder="same PIN">' : ''}
        <p class="famerr" id="fam-err" role="alert">${esc(f.error)}</p>
        <button class="btn big" id="fam-go" data-act="famSubmit">${create ? 'Create family' : 'Connect'}</button>`;
    }
    render(`<main class="onboard"><header class="bar">${back}<h1>${title}</h1></header>${body}</main>`, 'is-onboard');
  }
  async function famSubmit() {
    const f = ui.fam, btn = $('#fam-go'), err = $('#fam-err');
    f.code = $('#fam-code').value;
    const pin = $('#fam-pin').value.trim();
    const showErr = (code) => { f.error = FAM_ERRORS[code] || 'Something went wrong. Try again.'; err.textContent = f.error; btn.disabled = false; btn.textContent = f.mode === 'create' ? 'Create family' : 'Connect'; };
    if (f.mode === 'create' && pin !== $('#fam-pin2').value.trim()) return showErr('pin-mismatch');
    btn.disabled = true;
    btn.textContent = 'Connecting…';
    err.textContent = '';
    try { await APP.cloud.connect({ code: f.code, pin, create: f.mode === 'create' }); } catch (e) { return showErr(e.code); }
    ui.fam = null;
    toast('☁️ Family connected');
    startScreen();
  }
  async function famSibling() {
    const btn = $('#fam-sib'), err = $('#fam-err');
    btn.disabled = true;
    err.textContent = '';
    try { await APP.cloud.connectSibling(); } catch (e) { btn.disabled = false; ui.fam.error = FAM_ERRORS[e.code] || 'Something went wrong. Try again.'; err.textContent = ui.fam.error; return; }
    ui.fam = null;
    toast('☁️ Family connected');
    startScreen();
  }
  // The first screen: the profile a link asked for (#who=), else the only profile, else the picker.
  function startScreen() {
    const list = S.profiles();
    const name = wanted.trim();
    if (name) {
      const p = list.find((x) => x.name.trim().toLowerCase() === name.toLowerCase());
      if (p) { wanted = ''; return openProfile(p.id); }
      ui.newKid = { name: name.slice(0, 16), kind: 'B1', avatar: CFG.avatars[0], l1: 'uk' };
      newProfile();
      cur = 'start';
      return;
    }
    if (!list.length) { ui.newKid = null; newProfile(); cur = 'start'; return; }
    if (list.length === 1) return openProfile(list[0].id);
    who();
  }
  // Another device changed something: refresh the screen if it only shows data (never in the middle of a session).
  function onCloud(what) {
    if (what === 'status') { const el = $('#sync'); if (el) el.outerHTML = syncLine(); return; }
    if (root().classList.contains('is-play')) return;
    if (st && APP.state !== st) { st = null; return who(); } // this profile was deleted on another device
    if (cur === 'start') { if (S.profiles().length) startScreen(); return; }
    if (!cur) return;
    const id = cur.startsWith('topic:') ? cur.slice(6) : '';
    const wk = cur.startsWith('week:') ? cur.slice(5) : '';
    const screen = id ? () => topic(id) : wk ? () => week(wk) : { who, home, topics, progress, mistakes }[cur];
    if (screen) redraw(screen); // new data from another device: same screen, same scroll position
  }

  // ---------------------------------------------------------------- home
  function home() {
    if (!st) return who();
    const due = R.due(st).length;
    const next = L.upNext(st);
    const mins = minutesToday(), goal = st.settings.goal || 10, s = streak();
    const nx = next ? L.status(st, next.id) : null;
    render(`<main class="home">
      <header class="bar"><button class="mini-av big" data-act="go" data-arg="who" aria-label="Switch ${WORD}">${st.avatar}</button><h1>Hi, ${esc(st.name)}!</h1>
        <button class="iconbtn" data-act="go" data-arg="settings" aria-label="Settings">⚙️</button></header>
      <section class="today">
        <div class="ringbox">${ring(mins, goal)}<b>${mins}</b><small>of ${goal} min</small></div>
        <div><p class="lead">${mins >= goal ? 'Goal done for today. 🎉' : 'Today’s goal: ' + goal + ' minutes.'}</p>
          <p class="muted">${s ? `🔥 ${s} day${s > 1 ? 's' : ''} in a row` : 'Practice 5 answers a day to start a streak.'} · ${(st.days[today()] || {}).a || 0} answers today</p></div>
      </section>
      ${weekBanner()}
      ${due ? `<button class="hero review" data-act="review"><span>🔁</span><span><b>Review · ${due} to repeat</b><small>Your mistakes and earlier topics, mixed. Do this first.</small></span></button>` : ''}
      ${next ? `<button class="hero" data-act="go" data-arg="topic:${next.id}"><span>${next.icon}</span><span><b>${nx.state === 'new' ? 'Start' : 'Continue'}: ${esc(next.title)}</b><small>${L.TIERS[nx.tier - 1]} tier · ${esc(next.about)}</small></span></button>` : '<p class="lead">Every topic is mastered. Keep them fresh with Review and Challenge.</p>'}
      ${st.diag ? '' : '<button class="hero soft" data-act="diag"><span>📏</span><span><b>Level check · 7–10 min</b><small>Typed answers only. Sets the starting tier for every topic.</small></span></button>'}
      <div class="tiles">
        <button class="tile" data-act="go" data-arg="topics"><span>📚</span><b>Topics</b><small>${C.topics.length} topics · Core → Use → Pro</small></button>
        <button class="tile" data-act="challenge"><span>⚡</span><b>Challenge</b><small>Started topics mixed, no hints</small></button>
        <button class="tile" data-act="go" data-arg="mistakes"><span>🧩</span><b>My mistakes</b><small>What goes wrong most often</small></button>
        <button class="tile" data-act="go" data-arg="progress"><span>📈</span><b>Progress</b><small>Accuracy, days, tiers</small></button>
      </div>
      ${syncLine()}
    </main>`, 'is-home');
    cur = 'home';
  }

  // Last week's report, until she opens it.
  function weekBanner() {
    const start = W.pending(st, today());
    if (!start) return '';
    const w = W.week(st, start);
    return `<button class="hero soft week" data-act="go" data-arg="week:${start}"><span>📊</span><span><b>Your week: ${W.range(w)}</b><small>${w.min} min · ${w.a} answers · ${w.acc}% right. See the report →</small></span></button>`;
  }

  // ---------------------------------------------------------------- topics
  const LEVEL_NAME = { A2: 'Pre-intermediate', B1: 'Intermediate', B2: 'Upper-intermediate', C1: 'Advanced' };
  function topics() {
    const levels = L.LEVELS.map((lv) => ({ lv, list: C.topics.filter((T) => T.level === lv) })).filter((x) => x.list.length);
    render(header('Topics') + `<main class="topics">
      <p class="muted">Every topic has three tiers: <b>Core</b> (the form, with hints), <b>Use</b> (in context, no hints), <b>Pro</b> (translate, fix, say it). Nothing is locked.</p>
      ${levels.map((g) => {
        const done = g.list.filter((T) => L.status(st, T.id).state === 'mastered').length;
        return `<section id="lv-${g.lv}"><h2>${g.lv} · ${LEVEL_NAME[g.lv]} <small class="muted">${done} of ${g.list.length} mastered</small></h2>${g.list.map((T) => {
        const s = L.status(st, T.id);
        const label = s.state === 'mastered' ? 'Mastered ✓' : s.state === 'new' ? 'New' : `${L.TIERS[s.tier - 1]} tier`;
        return `<button class="trow" data-act="go" data-arg="topic:${T.id}"><span class="ti">${T.icon}</span><span class="tt"><b>${esc(T.title)}</b><small>${esc(T.about)}</small></span>
          <span class="ts">${tierDots(s.reached, s.tier)}<small class="${s.state}">${label}${s.due ? ` · 🔁 ${s.due}` : ''}</small></span></button>`;
      }).join('')}</section>`;
      }).join('')}
    </main>`);
    cur = 'topics';
  }
  function trapHtml(T) {
    const l = I.lang();
    return `<div class="trap"><h3>⚠️ Typical mistake</h3>
      <p class="l1" lang="${l}">${esc(T.trap[l] || T.trap.uk)}</p>
      <p class="bad">❌ ${esc(T.trap.wrong)}</p><p class="good">✅ ${esc(T.trap.right)} ${speakBtn(T.trap.right)}</p>
      ${I.block(T.trap.note)}</div>`;
  }
  function topic(id) {
    const T = C.byId[id];
    if (!T) return topics();
    const s = L.status(st, id), t = st.topics[id] || {};
    const sel = ui.tierPick && ui.tierPick.id === id ? ui.tierPick.tier : s.tier;
    const errs = Object.keys(T.errors).filter((e) => st.errors[e]).sort((a, b) => st.errors[b] - st.errors[a]).slice(0, 3);
    render(header(`${T.icon} ${esc(T.title)}`, 'topics') + `<main class="topic">
      <div class="cols">
        <div class="col">
          <p class="muted">${esc(T.level)} · ${esc(T.group)}</p>
          <section class="rule">${I.block(T.rule)}</section>
          <section class="examples"><h2>Examples</h2><ul>${T.examples.map((e) => `<li>${speakBtn(e)} <span>${esc(e)}</span></li>`).join('')}</ul></section>
          ${trapHtml(T)}
        </div>
        <div class="col">
          <section class="practice"><h2>Practice</h2>
            <p class="muted">${s.state === 'new' ? 'Not started yet.' : `${pct(t.c, t.a)}% right of ${t.a} answers · ${s.state === 'mastered' ? 'mastered ✓' : 'passed: ' + (s.reached ? L.TIERS.slice(0, s.reached).join(', ') : 'none yet')}`}</p>
            <div class="tierpick">${[1, 2, 3].map((n) => `<button class="tierbtn ${sel === n ? 'sel' : ''} ${s.reached >= n ? 'done' : ''}" data-act="pickTier" data-arg="${id}:${n}" aria-pressed="${sel === n}"><b>${L.TIERS[n - 1]}</b><small>${['the form, with hints', 'in context', 'translate, fix, say'][n - 1]}</small></button>`).join('')}</div>
            <button class="btn big" id="practicebtn" data-act="lesson" data-arg="${id}:${sel}">Practice · ${L.TIERS[sel - 1]} →</button>
            <p class="muted">10 exercises. The tier moves up after 3 right answers in a row and down after 2 mistakes.</p>
            <button class="btn ghost wide" data-act="check" data-arg="${id}">🎓 Topic check (Pro)${t.check ? ` · best ${t.check}%` : ''}</button>
            ${s.due ? `<p class="muted">🔁 ${s.due} pattern${s.due > 1 ? 's' : ''} of this topic to review today.</p>` : ''}
          </section>
          ${errs.length ? `<section class="myerr"><h2>Your mistakes here</h2>${errs.map((e) => `<div class="errline"><span class="count">${st.errors[e]}×</span>${I.block(C.errors[e])}</div>`).join('')}</section>` : ''}
        </div>
      </div>
    </main>`);
    cur = 'topic:' + id;
  }

  // ---------------------------------------------------------------- sessions
  const TITLE = { lesson: () => C.byId[sess.topic].title, review: () => 'Review', check: () => 'Topic check', challenge: () => 'Challenge', diag: () => 'Level check', fix: () => 'Fix my mistakes', drill: () => 'Practice a mistake' };
  function start(s) {
    if (!s || !s.n) { toast('Nothing to practice here yet'); return; }
    sess = s;
    sess.tick = Date.now();
    remember('play');
    showNext();
  }
  function showNext() {
    const c = L.next(sess, st, { say: st.settings.say !== false, tts: V.canSpeak });
    if (!c) return finish();
    sess.done = false;
    sess.picked = null;
    const it = c.it;
    const n = sess.log.length + 1;
    const tierChip = sess.mode === 'lesson' ? `<span class="tchip t${sess.tier}">${L.TIERS[sess.tier - 1]}</span>` : sess.mode === 'diag' ? `<span class="tchip">${C.byId[it.topic].level}</span>` : `<span class="tchip t${it.l}">${esc(C.byId[it.topic].title)}</span>`;
    render(`<main class="play">
      <header class="bar"><button class="iconbtn" data-act="quit" aria-label="Stop">✕</button><h1>${esc(TITLE[sess.mode]())}</h1><span class="pill">${n} / ${sess.n}</span></header>
      <div class="progress"><span style="width:${Math.round(((n - 1) / sess.n) * 100)}%"></span></div>
      <div class="cols">
        <div class="col">
          <div class="qhead">${tierChip}<span class="qlabel">${X.label(c)}</span>${sess.timer ? '<span class="timer" id="timer"></span>' : ''}</div>
          <div class="question">${X.html(c)}</div>
          ${it.t === 'choose' ? '' : '<button class="btn big" id="checkbtn" data-act="checkAnswer">Check</button>'}
        </div>
        <div class="col"><div id="fb" aria-live="polite"></div></div>
      </div>
    </main>`, 'is-play');
    if (c.mode === 'dict') V.speak(APP.content.sentence(it));
    const first = $('.blank') || $('#ans');
    if (first) { first.focus(); if (first.setSelectionRange && first.value) first.setSelectionRange(first.value.length, first.value.length); }
    if (sess.timer) startTimer();
  }
  function startTimer() {
    const end = Date.now() + 40000;
    const tick = () => {
      const el = $('#timer');
      if (!el || !sess || sess.done) return;
      const left = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      el.textContent = '⏱ ' + left;
      el.classList.toggle('low', left <= 10);
      if (left <= 0) return checkAnswer(true);
      later(tick, 250);
    };
    tick();
  }
  function addTime() {
    const now = Date.now();
    const sec = Math.min(120, Math.round((now - (sess.tick || now)) / 1000));
    sess.tick = now;
    const d = today();
    st.time[d] = (st.time[d] || 0) + sec;
  }
  function checkAnswer(timeUp) {
    if (!sess || sess.done || !sess.cur) return;
    const c = sess.cur, it = c.it;
    const given = X.given(c);
    if (!timeUp && X.empty(c, given)) {
      const el = $('.blank') || $('#ans') || $('#built');
      if (el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
      return;
    }
    if (V.listening()) { V.abortListening(); const mb = $('.micbtn'); if (mb) mb.classList.remove('rec'); }
    sess.done = true;
    const j = X.judge(c, given);
    // Keep what the card and counters looked like, so "My answer was right too" can undo the mistake.
    sess.snap = { card: st.cards[R.key(it)] ? JSON.parse(JSON.stringify(st.cards[R.key(it)])) : null, recentLen: st.recent.length };
    const rec = L.answer(sess, st, it, j.ok, given);
    S.tally(j.ok);
    addTime();
    S.save();
    if (sess.mode !== 'diag') (j.ok ? V.sfx.good : V.sfx.bad)();
    document.querySelectorAll('.question input, .question textarea, .question button').forEach((el) => { el.disabled = true; });
    if (it.t === 'choose') document.querySelectorAll('.option').forEach((b, i) => { const o = c.options[i]; b.classList.toggle('right', it.a.includes(o)); b.classList.toggle('wrong', i === c.picked && !j.ok); });
    const btn = $('#checkbtn');
    if (btn) btn.remove();
    feedback(c, given, j, rec);
  }
  function feedback(c, given, j, rec) {
    const it = c.it;
    const fb = $('#fb');
    const right = j.right;
    const last = sess.log.length >= sess.n;
    const nextBtn = `<button class="btn big" id="nextbtn" data-act="nextQ">${last ? 'See results →' : 'Next →'}</button>`;
    if (sess.mode === 'diag') {
      fb.innerHTML = `<div class="fb ${j.ok ? 'ok' : 'no'}"><p class="verdict">${j.ok ? '✅ Right' : '❌ Not quite'}</p>${j.ok ? '' : `<p class="rightline">${esc(right)}</p>`}</div>${nextBtn}`;
      $('#nextbtn').focus();
      return;
    }
    const free = ['fix', 'tr', 'tl'].includes(it.t) || c.mode === 'dict';
    let html = `<div class="fb ${j.ok ? 'ok' : 'no'}">`;
    if (j.ok) {
      html += `<p class="verdict">✅ ${j.close ? 'Almost certainly right' : 'Right!'}</p>`;
      if (j.close) html += '<p class="note">Voice typing sometimes misses small words like <i>a, the</i> and endings like <i>-ed</i>. Compare with the sentence below.</p>';
      if (j.typo) html += '<p class="note">✏️ Small spelling slip — counted as right.</p>';
      if (j.american) html += `<p class="note">🇺🇸 Common in American English. The textbook form: <b>${esc(C.sentence(it, it.a[0]))}</b></p>`;
      if (j.typo || j.close || c.mode !== 'type' || it.t !== 'choose') html += `<p class="rightline">${esc(right)}</p>`;
    } else {
      const d = K.diff(X.asSentence(c, given), right);
      html += `<p class="verdict">❌ Not quite</p>
        <p class="cmp"><small>You</small>${d.given.map((x) => `<span class="${x.bad ? 'del' : ''}">${esc(x.w)}</span>`).join(' ') || '—'}</p>
        <p class="cmp"><small>Right</small>${d.right.map((x) => `<span class="${x.bad ? 'ins' : ''}">${esc(x.w)}</span>`).join(' ')}</p>`;
      const err = C.error(rec.err);
      if (err) html += `<div class="why">${I.block(err)}</div>`;
      if (it.a.length > 1 && free) html += `<p class="muted">Also right: ${it.a.slice(1, 3).map((a) => '<i>' + esc(a) + '</i>').join(' · ')}</p>`;
    }
    if (it.n) html += `<div class="why">${I.block({ en: it.n })}</div>`;
    html += `<div class="tools">
        ${speakBtn(right, '🔊 Listen')}${speakBtn(right, '🐢 Slow', true)}
        ${V.canRecord ? '<button class="iconbtn sm" data-act="recMe" id="recbtn">🎙 Say it yourself</button><button class="iconbtn sm" data-act="playMe" id="playme" hidden>▶ Me</button>' : ''}
        ${I.gtLink(right)}
        <button class="linkbtn" data-act="ruleModal" data-arg="${it.topic}">Why? Rule</button>
      </div>`;
    if (!j.ok && free) html += '<button class="linkbtn override" data-act="override">My answer was right too</button>';
    html += '</div>';
    if (rec.change > 0) html += `<p class="tierup">⬆ Moving up to <b>${L.TIERS[sess.tier - 1]}</b></p>`;
    if (rec.change < 0) html += `<p class="tierdown">⬇ Back to <b>${L.TIERS[sess.tier - 1]}</b> for a moment</p>`;
    fb.innerHTML = html + nextBtn;
    if (window.matchMedia && !window.matchMedia('(min-width: 900px)').matches) fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    $('#nextbtn').focus({ preventScroll: true });
  }
  // The 🎙 button: speech to text into the answer field. She sees what was heard and can edit it before Check.
  const MIC_ERR = {
    'not-allowed': 'The microphone is not allowed for this page. Allow it in the browser settings, or use 🎤 on the keyboard.',
    'service-not-allowed': 'Speech recognition is not available here. On iPhone, turn on Siri or Dictation in Settings. Meanwhile, use 🎤 on the keyboard.',
    'no-speech': 'I didn’t hear anything. Tap 🎙 and speak again.',
    'audio-capture': 'No microphone found.',
    network: 'Speech recognition needs the internet. Offline, use 🎤 on the keyboard.',
  };
  function mic() {
    const c = sess && sess.cur;
    if (!c || sess.done) return;
    if (V.listening()) { V.stopListening(); return; }
    const ta = $('#ans'), btn = $('.micbtn'), note = $('#micnote');
    if (!ta || !btn) return;
    const before = ta.value;
    const say = (t) => { if (note) note.textContent = t; };
    const started = V.listen({
      interim: (t) => { ta.value = t; },
      final: (alts) => {
        const nice = alts.map((t) => t.charAt(0).toUpperCase() + t.slice(1));
        ta.value = nice[0];
        c.heard = nice[0].trim();
        c.alts = nice;
        say('This is what I heard. Fix it by typing if needed, then tap Check.');
        const b = $('#checkbtn');
        if (b) b.focus({ preventScroll: true });
      },
      error: (code) => {
        if (code === 'aborted') return;
        ta.value = before;
        if (code === 'not-allowed' || code === 'service-not-allowed' || code === 'unsupported') {
          V.micBroken = true;
          btn.remove();
        }
        say(MIC_ERR[code] || 'Speech recognition stopped. Tap 🎙 to try again, or use 🎤 on the keyboard.');
      },
      end: () => { btn.classList.remove('rec'); btn.setAttribute('aria-pressed', 'false'); btn.setAttribute('aria-label', 'Speak your answer'); },
    });
    if (!started) return;
    btn.classList.add('rec');
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', 'Stop listening');
    c.heard = null;
    c.alts = null;
    ta.value = '';
    say('Listening… speak now. Tap 🎙 again to stop.');
  }

  // She is sure her answer was also right (a translation can be said many ways): count it as right.
  function override() {
    const entry = sess.log[sess.log.length - 1];
    if (!entry || entry.ok) return;
    const it = C.itemById[entry.id];
    entry.ok = true;
    st.stats.correct++;
    st.topics[it.topic].c++;
    const d = st.days[today()];
    if (d) d.c++;
    if (entry.err && st.errors[entry.err]) { st.errors[entry.err]--; if (!st.errors[entry.err]) delete st.errors[entry.err]; }
    const lg = L.dayLog(st, today());
    lg.r[it.topic] = (lg.r[it.topic] || 0) + 1;
    if (entry.err && lg.e[entry.err]) { lg.e[entry.err]--; if (!lg.e[entry.err]) delete lg.e[entry.err]; }
    st.recent.splice(0, st.recent.length - sess.snap.recentLen);
    if (sess.snap.card) st.cards[R.key(it)] = sess.snap.card; else delete st.cards[R.key(it)];
    R.record(st, it, true);
    if (sess.mode === 'lesson') { sess.miss = Math.max(0, sess.miss - 1); }
    S.save();
    const b = $('.override');
    if (b) b.outerHTML = '<p class="note">👍 Counted as right.</p>';
  }
  function quit() {
    modal(`<p class="lead">Stop now? Your answers so far are saved.</p>
      <div class="row"><button class="btn ghost" data-act="closeModal">Keep going</button><button class="btn" data-act="leave">Stop</button></div>`);
  }
  function finish() {
    const s = sess;
    const res = L.finish(s, st);
    addTime();
    S.save();
    sess = null;
    ui.lastMissed = res.missed;
    ui.lastSess = { mode: s.mode, topic: s.topic, tier: s.tier, error: s.error };
    V.sfx.done();
    const score = pct(res.right, res.total);
    let extra = '';
    if (s.mode === 'lesson') {
      const T = C.byId[s.topic];
      extra = res.tierTo > res.tierFrom ? `<p class="lead">⬆ You moved up to <b>${L.TIERS[res.tierTo - 1]}</b> in ${esc(T.title)}.</p>`
        : res.tierTo < res.tierFrom ? `<p class="lead">Next time: <b>${L.TIERS[res.tierTo - 1]}</b> tier — a step back to make it solid.</p>` : '';
      if (res.up > 0) extra += `<p class="lead">✓ ${L.TIERS[st.topics[s.topic].reached - 1]} tier passed${st.topics[s.topic].reached >= 3 ? ' — topic mastered! 🎉' : ''}.</p>`;
    }
    if (s.mode === 'check') extra = res.passed ? '<p class="lead">🎓 Passed — topic mastered!</p>' : '<p class="lead">You need 75% to pass. Practice the Pro tier and try again.</p>';
    if (s.mode === 'diag') {
      extra = `<p class="lead">Your level: <b>${res.level} · ${LEVEL_NAME[res.level]}</b></p>
        <p class="muted">${L.LEVELS.filter((lv) => res.score[lv] != null).map((lv) => `${lv}: ${Math.round(res.score[lv] * 100)}% right`).join(' · ')}</p>
        <p class="lead">Your starting tiers:</p><ul class="diagres">${C.topics.map((T) => res.tiers[T.id] ? `<li><span>${T.icon} ${esc(T.title)}</span><b class="tchip t${res.tiers[T.id]}">${L.TIERS[res.tiers[T.id] - 1]}</b></li>` : '').join('')}</ul>
        <p class="muted">Topics where you start at Core are the best place to begin. Topics above your level were not checked: they start from Core.</p>`;
      if (CFG.kinds.some((k) => k.id === res.level)) { S.update(st.id, { kind: res.level }); st = APP.state; }
    }
    const missed = res.missed;
    render(`<main class="result">
      <h1 class="title center">${score >= 90 ? '🌟' : score >= 70 ? '👍' : '💪'} ${res.right} of ${res.total}</h1>
      <p class="lead center">${score}% right · ${esc(TITLE[s.mode] ? (s.mode === 'lesson' ? C.byId[s.topic].title : TITLE[s.mode]()) : '')}</p>
      ${extra}
      ${missed.length && s.mode !== 'diag' ? `<section class="missed"><h2>Your mistakes</h2>${s.log.filter((x) => !x.ok).map((x) => {
        const it = C.itemById[x.id];
        const r = C.sentence(it);
        return `<div class="mrow"><p class="good">✅ ${esc(r)} ${speakBtn(r)}</p><p class="bad">❌ ${esc(X.asSentence({ it, mode: 'type' }, x.given) || '—')}</p>${x.err && C.error(x.err) ? I.block(C.error(x.err)) : ''}</div>`;
      }).join('')}</section>` : ''}
      <div class="row">
        ${missed.length && s.mode !== 'diag' ? `<button class="btn" data-act="fixNow">🔁 Fix my mistakes (${missed.length})</button>` : ''}
        ${s.mode === 'lesson' ? `<button class="btn ${missed.length ? 'ghost' : ''}" data-act="lesson" data-arg="${s.topic}:${st.topics[s.topic].tier}">Continue practice</button>` : ''}
        <button class="btn ghost" data-act="go" data-arg="home">Home</button>
      </div>
    </main>`, 'is-result');
    if (minutesToday() >= (st.settings.goal || 10) && !ui.goalShown) { ui.goalShown = today(); toast('🎉 Today’s goal is done!'); }
  }

  // ---------------------------------------------------------------- mistakes, progress
  function mistakes() {
    const top = Object.entries(st.errors).filter(([e, n]) => n > 0 && C.error(e)).sort((a, b) => b[1] - a[1]).slice(0, 8);
    render(header('My mistakes') + `<main class="mistakes">
      ${top.length ? `<p class="muted">The types of mistakes you make most often. Practice one, and its sentences come back in Review until they stick.</p>
        ${top.map(([e, n]) => { const E = C.error(e), T = C.byId[E.topic]; return `<section class="errcard"><p class="muted">${T.icon} ${esc(T.title)} · <b>${n}×</b></p>${I.block(E)}<button class="btn ghost" data-act="drill" data-arg="${e}">Practice this</button></section>`; }).join('')}`
        : '<p class="lead">No mistakes yet. They will show up here, grouped by type, with a button to practice each one.</p>'}
      ${st.recent.length ? `<section><h2>Recent mistakes</h2>${st.recent.slice(0, 15).map((m) => { const it = C.itemById[m.id]; if (!it) return ''; const r = C.sentence(it); return `<div class="mrow"><p class="good">✅ ${esc(r)} ${speakBtn(r)}</p><p class="bad">❌ ${esc(X.asSentence({ it, mode: 'type' }, m.g) || '—')}</p></div>`; }).join('')}</section>` : ''}
    </main>`);
    cur = 'mistakes';
  }
  function progress() {
    const s = st.stats;
    const days = U.range(0, 29).map((i) => { const k = R.addDays(today(), i - 29); return { k, m: Math.round(((st.time || {})[k] || 0) / 60), a: (st.days[k] || {}).a || 0 }; });
    const maxM = Math.max(st.settings.goal || 10, ...days.map((d) => d.m));
    const learned = Object.values(st.cards).filter(R.learned).length;
    render(header('Progress') + `<main class="progress-screen">
      <section class="kpis">
        <div><b>${s.answers}</b><small>answers</small></div>
        <div><b>${pct(s.correct, s.answers)}%</b><small>right</small></div>
        <div><b>${days.filter((d) => d.a).length}/30</b><small>active days</small></div>
        <div><b>${streak()}</b><small>day streak</small></div>
        <div><b>${s.fixed}</b><small>mistakes fixed</small></div>
        <div><b>${learned}</b><small>patterns learned</small></div>
      </section>
      ${weekCard()}
      <section><h2>Minutes a day · last 30 days</h2><div class="days">${days.map((d) => `<div class="day ${d.m >= (st.settings.goal || 10) ? 'goal' : ''}" title="${d.k}: ${d.m} min"><span style="height:${Math.round((d.m / maxM) * 100)}%"></span></div>`).join('')}</div></section>
      <section><h2>Topics</h2><table class="ttable"><tbody>${C.topics.map((T) => { const t = st.topics[T.id] || { a: 0, c: 0 }; const x = L.status(st, T.id); return `<tr><td>${T.icon} ${esc(T.title)}</td><td>${tierDots(x.reached, x.tier)}</td><td class="num">${t.a ? pct(t.c, t.a) + '%' : '—'}</td></tr>`; }).join('')}</tbody></table>
        <p class="muted">Dots: Core · Use · Pro passed. ${st.diag ? 'Level check done on ' + st.diag.day + '. <button class="linkbtn" data-act="diag">Take it again</button>' : '<button class="linkbtn" data-act="diag">Take the level check</button>'}</p></section>
    </main>`);
    cur = 'progress';
  }

  function weekCard() {
    const w = W.week(st, W.monday(today()));
    return `<section class="weekcard"><h2>This week · ${W.range(w)}</h2>
      <p>${w.a ? `${w.min} min · ${w.a} answers · ${w.acc}% right · ${w.f} mistakes fixed` : 'No practice yet this week.'}</p>
      <button class="btn ghost" data-act="go" data-arg="week">Weekly report →</button></section>`;
  }

  // ---------------------------------------------------------------- weekly report
  const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  // A change against the week before: "+12" in green, "−5" in red, nothing when there is no week before.
  function delta(now, before, unit = '') {
    if (before == null || now == null) return '';
    const d = now - before;
    if (!d) return '<i class="delta">=</i>';
    return `<i class="delta ${d > 0 ? 'up' : 'down'}">${d > 0 ? '+' : '−'}${Math.abs(d)}${unit}</i>`;
  }
  function week(start) {
    const thisMon = W.monday(today());
    start = start && /^\d{4}-\d\d-\d\d$/.test(start) ? W.monday(start) : thisMon;
    if (start > thisMon) start = thisMon;
    const rep = W.report(st, start), w = rep.cur, p = rep.prev;
    const isNow = start === thisMon;
    const had = p.a > 0;
    // Opening a finished week's report marks it as seen (the home banner goes away).
    if (!isNow && (st.reportSeen || '') < start) { st.reportSeen = start; S.save(); }
    const maxM = Math.max(w.goal, ...w.days.map((d) => d.min));
    const first = Object.keys(st.days).sort()[0] || today();
    const canBack = R.addDays(start, -1) >= first;
    const f = rep.focus;
    let focus = '';
    if (f && f.kind === 'topic') { const T = C.byId[f.id]; focus = `<p>${T.icon} <b>${esc(T.title)}</b> — ${f.acc}% right this week. A lesson at your tier makes it solid.</p><button class="btn" data-act="go" data-arg="topic:${f.id}">Open the topic</button>`; }
    else if (f && f.kind === 'error') { const E = C.error(f.id), T = C.byId[E.topic]; focus = `<p>${T.icon} <b>${esc(T.title)}</b> — your most frequent mistake (${f.n}×).</p>${I.block(E)}<button class="btn" data-act="drill" data-arg="${f.id}">Practice this mistake</button>`; }
    else if (f) { const T = C.byId[f.id]; focus = `<p>Next on your path: ${T.icon} <b>${esc(T.title)}</b>.</p><button class="btn" data-act="go" data-arg="topic:${f.id}">Open the topic</button>`; }
    render(header('Weekly report', 'progress') + `<main class="report">
      <div class="weeknav">
        <button class="iconbtn" data-act="go" data-arg="week:${R.addDays(start, -7)}" aria-label="Week before" ${canBack ? '' : 'disabled'}>‹</button>
        <div><h2>${W.range(w)}</h2><small class="muted">${isNow ? 'This week so far' : start === R.addDays(thisMon, -7) ? 'Last week' : 'Week of ' + W.range(w)}</small></div>
        <button class="iconbtn" data-act="go" data-arg="week:${R.addDays(start, 7)}" aria-label="Next week" ${isNow ? 'disabled' : ''}>›</button>
      </div>
      ${w.a ? `<section class="kpis">
        <div><b>${w.min}</b><small>minutes</small>${had ? delta(w.min, p.min) : ''}</div>
        <div><b>${w.a}</b><small>answers</small>${had ? delta(w.a, p.a) : ''}</div>
        <div><b>${w.acc}%</b><small>right</small>${had ? delta(w.acc, p.acc, ' pts') : ''}</div>
        <div><b>${w.active}/7</b><small>active days</small>${had ? delta(w.active, p.active) : ''}</div>
        <div><b>${w.f}</b><small>mistakes fixed</small></div>
        <div><b>${w.l}</b><small>patterns learned</small></div>
      </section>
      <section><h2>Minutes a day</h2>
        <div class="wdays">${w.days.map((d, i) => `<div class="wday ${d.min >= w.goal ? 'goal' : ''} ${d.k === today() ? 'today' : ''}"><small>${d.min || ''}</small><span style="height:${Math.round((d.min / maxM) * 100)}%"></span><b>${DOW[i]}</b></div>`).join('')}</div>
        <p class="muted">${w.goalDays} of 7 days at your ${w.goal}-minute goal${w.u ? ` · ⬆ ${w.u} tier${w.u > 1 ? 's' : ''} passed` : ''}.</p>
      </section>
      ${w.topicList.length ? `<section><h2>Topics this week</h2><table class="ttable"><tbody>${w.topicList.map((t) => { const T = C.byId[t.id]; return `<tr><td><button class="linkbtn" data-act="go" data-arg="topic:${t.id}">${T.icon} ${esc(T.title)}</button></td><td class="num">${t.a}</td><td class="num">${Math.round((t.c / t.a) * 100)}%</td></tr>`; }).join('')}</tbody></table><p class="muted">Answers and share of right answers.</p></section>` : ''}
      ${w.errorList.length ? `<section><h2>Mistakes this week</h2>${w.errorList.slice(0, 3).map((e) => { const E = C.error(e.id), T = C.byId[E.topic]; return `<div class="errline"><span class="count">${e.n}×</span><div><p class="muted">${T.icon} ${esc(T.title)}</p>${I.block(E)}<button class="linkbtn" data-act="drill" data-arg="${e.id}">Practice this</button></div></div>`; }).join('')}</section>` : ''}
      ${focus ? `<section class="focus"><h2>${isNow ? 'Focus for the rest of the week' : 'Focus for next week'}</h2>${focus}</section>` : ''}
      <div class="row"><button class="btn ghost" data-act="shareWeek" data-arg="${start}">Share the report</button></div>
      <p class="muted center" id="share-msg"></p>`
      : `<section><p class="lead">${isNow ? 'No practice yet this week.' : 'No practice this week.'}</p>${isNow ? '<button class="btn" data-act="go" data-arg="home">Start practicing</button>' : ''}</section>`}
    </main>`);
    cur = 'week:' + start;
  }

  // ---------------------------------------------------------------- settings
  function settings() {
    const set = st.settings;
    const voices = V.voices();
    const kids = S.profiles().map((p) => `<li class="kid"><span class="kav">${p.avatar}</span>
        <span class="kname"><b>${esc(p.name)}</b><small>${p.stats.correct} right${p.lastPlayed ? ' · last practice ' + p.lastPlayed : ''}</small></span>
        <span class="chips">${CFG.kinds.map((g) => `<button class="chip ${p.kind === g.id ? 'sel' : ''}" data-act="setKind" data-arg="${p.id}:${g.id}">${g.id}</button>`).join('')}</span>
        <button class="linkbtn" data-act="delProfile" data-arg="${p.id}">${ui.delArmed === p.id ? 'Tap again to delete' : 'Delete'}</button></li>`).join('');
    const synced = CL() && APP.cloud.family;
    render(header('Settings') + `<main class="settings-screen">
      <section><h2>Translations</h2>
        <p class="muted">Rules and explanations are in English. The 🌐 button shows them in:</p>
        <div class="chips">${Object.entries(I.LANGS).map(([id, l]) => `<button class="chip ${I.lang() === id ? 'sel' : ''}" data-act="setL1" data-arg="${id}">${l.name}</button>`).join('')}</div>
        <label class="toggle"><input type="checkbox" data-act="setting" data-arg="alwaysL1" ${set.alwaysL1 ? 'checked' : ''}> Always show the translation</label>
      </section>
      <section><h2>Voice</h2>
        ${V.canSpeak ? `<label for="voice">Reading voice</label><select id="voice" class="field" data-act="setVoice">${['<option value="">Automatic (American)</option>'].concat(voices.map((v) => `<option value="${esc(v.name)}" ${set.voice === v.name ? 'selected' : ''}>${esc(v.name)} · ${esc(v.lang)}</option>`)).join('')}</select>
          <div class="row left"><button class="btn ghost" data-act="speak" data-arg="I've lived here since 2022, and I've never been happier.">🔊 Test</button></div>
          <p class="muted">On iPhone and iPad, better voices are free: Settings → Accessibility → Spoken Content → Voices → English → choose a voice marked <b>Enhanced</b> or <b>Premium</b> and download it. Then pick it here.</p>` : '<p class="muted">This browser cannot read aloud.</p>'}
        <label class="toggle"><input type="checkbox" data-act="setting" data-arg="slow" ${set.slow ? 'checked' : ''}> Read more slowly</label>
        <label class="toggle"><input type="checkbox" data-act="setting" data-arg="say" ${set.say !== false ? 'checked' : ''}> “Say it out loud” exercises</label>
        ${V.canListen ? `<label class="toggle"><input type="checkbox" data-act="setting" data-arg="mic" ${set.mic !== false ? 'checked' : ''}> 🎙 Microphone button next to answers</label>
          <p class="muted">Speech to text is done by your browser (Apple or Google): the sound goes to them and comes back as text. If it doesn’t work in the app on your home screen, turn it off and use 🎤 on the keyboard — it works the same way.</p>` : '<p class="muted">For spoken answers, use 🎤 on the keyboard.</p>'}
        <label class="toggle"><input type="checkbox" data-act="setting" data-arg="sound" ${set.sound ? 'checked' : ''}> Sounds for right and wrong answers</label>
      </section>
      <section><h2>Daily goal</h2><div class="chips">${[5, 10, 15, 20, 30].map((m) => `<button class="chip ${(set.goal || 10) === m ? 'sel' : ''}" data-act="setGoal" data-arg="${m}">${m} min</button>`).join('')}</div></section>
      <section><h2>Name</h2><input id="set-name" class="field" maxlength="16" value="${esc(st.name)}"><div class="row left"><button class="btn ghost" data-act="saveName">Save name</button></div></section>
      ${famSection()}
      <section><h2>${synced ? 'Backup save code' : 'Move progress to another device'}</h2>
        <p class="muted">${synced ? 'Progress already syncs through your family. A save code is an extra backup.' : 'Copy the save code here and paste it on the other device.'}</p>
        <textarea id="savecode" class="field code" rows="3" placeholder="Save code appears here, or paste one to load it"></textarea>
        <div class="row left"><button class="btn ghost" data-act="exportSave">Show & copy save code</button><button class="btn ghost" data-act="importSave">Load pasted code</button></div>
        <p class="muted" id="save-msg"></p></section>
      <section><h2>${synced ? `${Word}s in your family` : `${Word}s on this device`}</h2>
        <p class="muted">The level (A2 / B1 / B2) sets the starting tier of topics not practiced yet.</p>
        <ul class="kids">${kids}</ul>
        <button class="btn ghost" data-act="go" data-arg="new">Add a ${WORD}</button></section>
      <section><h2>Start over</h2><button class="btn danger" data-act="reset">${ui.resetArmed ? `Tap again to erase ${esc(st.name)}’s progress` : `Erase ${esc(st.name)}’s progress`}</button></section>
      ${appLinks()}
    </main>`);
  }
  function famSection() {
    const C2 = CL();
    if (!C2) return '<section><h2>Sync devices</h2><p class="muted">Online sync works in the website version.</p></section>';
    if (!C2.family) return `<section><h2>Sync devices</h2>${syncLine()}<p class="muted">Connect to keep the same progress on your phone, tablet and computer.</p><button class="btn" data-act="go" data-arg="family">Connect ☁️</button></section>`;
    return `<section><h2>Sync devices</h2>${syncLine()}
      <p>To add a device: open <b>${esc(location.origin + location.pathname)}</b>, choose <b>I already have a family</b>, and type the family code <b>${esc(C2.family.name)}</b> and your PIN.</p>
      <p class="muted">The PIN is not stored on devices. If you forget it, create a new family on this device: the ${WORD}s here move into it.</p>
      <button class="btn ghost" data-act="famDisconnect">${ui.discArmed ? 'Tap again to disconnect this device' : 'Disconnect this device'}</button></section>`;
  }
  function ruleModal(id) {
    const T = C.byId[id];
    modal(`<h2>${T.icon} ${esc(T.title)}</h2><div class="rule">${I.block(T.rule)}</div><div class="row"><button class="btn" data-act="closeModal">Close</button></div>`);
  }

  // ---------------------------------------------------------------- routing
  // Browser back (Safari swipe, Android back) moves between screens instead of leaving the app.
  const useHistory = (() => { try { return window.top === window && !!history.pushState; } catch (e) { return false; } })();
  let fromPop = false;
  function remember(where) {
    if (!useHistory || fromPop) return;
    try { history.pushState({ where }, ''); } catch (e) { /* ignore */ }
  }
  function onPop(e) {
    if (sess && root().classList.contains('is-play')) { remember('play'); return quit(); } // leaving a session asks first
    closeModal();
    const where = (e.state && e.state.where) || (st ? 'home' : 'who');
    fromPop = true;
    go(where === 'play' || where === 'start' ? (st ? 'home' : 'who') : where);
    fromPop = false;
  }
  function go(where) {
    remember(where);
    wanted = '';
    closeModal();
    V.hush();
    if (where !== 'settings') { ui.resetArmed = false; ui.delArmed = null; ui.discArmed = false; }
    const [scr, arg] = where.split(':');
    sess = null;
    if (scr === 'who') return who();
    if (scr === 'new') { ui.newKid = null; return newProfile(); }
    if (scr === 'family') { ui.fam = null; return family(); }
    if (!st) return who();
    if (scr === 'topic') return topic(arg);
    if (scr === 'week') return week(arg);
    ({ home, topics, mistakes, progress, settings }[scr] || home)();
  }

  const ACTIONS = {
    go: (a) => go(a),
    closeModal: () => closeModal(),
    openProfile: (a) => openProfile(a),
    pickKind: (a) => { keepNewKid(); ui.newKid.kind = a; redraw(newProfile); },
    pickAvatar: (a) => { keepNewKid(); ui.newKid.avatar = a; redraw(newProfile); },
    pickL1: (a) => { keepNewKid(); ui.newKid.l1 = a; redraw(newProfile); },
    createProfile: () => {
      keepNewKid();
      const k = ui.newKid;
      if (!k.name) { $('#ob-name').focus(); $('#ob-name').classList.add('shake'); return; }
      wanted = '';
      st = S.create({ name: k.name.slice(0, 16), kind: k.kind, avatar: k.avatar });
      st.settings.l1 = k.l1 || 'uk';
      S.save();
      ui = {};
      remember('home');
      home();
    },
    famMode: (a) => { ui.fam = ui.fam || {}; if ($('#fam-code')) ui.fam.code = $('#fam-code').value; ui.fam.mode = a; ui.fam.error = ''; family(); },
    famSubmit: () => famSubmit(),
    famSibling: () => famSibling(),
    localOnly: () => { try { localStorage.setItem(CFG.id + '-localonly', '1'); } catch (e) { /* ignore */ } ui.newKid = null; startScreen(); },
    famDisconnect: () => {
      if (!ui.discArmed) { ui.discArmed = true; return redraw(settings); }
      ui.discArmed = false;
      APP.cloud.disconnect();
      toast('This device is no longer synced');
      redraw(settings);
    },
    // sessions
    lesson: (a) => { const [id, t] = a.split(':'); ui.tierPick = null; start(L.lesson(st, id, +t || undefined)); },
    check: (a) => start(L.check(st, a)),
    review: () => start(L.review(st)),
    challenge: () => {
      modal(`<h2>⚡ Challenge</h2><p>15 exercises from the topics you have started, mixed, at the Use and Pro tiers. No hints — like real conversation.</p>
        <div class="row"><button class="btn" data-act="challengeGo" data-arg="0">Start</button><button class="btn ghost" data-act="challengeGo" data-arg="1">⏱ With a timer (40 s each)</button></div>`);
    },
    challengeGo: (a) => { closeModal(); const s = L.challenge(st); s.timer = a === '1'; start(s); },
    diag: () => {
      modal(`<h2>📏 Level check</h2><p>One short exercise from each topic, from A2 up to C1 (at most ${C.topics.length}). It stops when a level gets too hard, so it usually takes 7–12 minutes. You type every answer — no multiple choice, so the result shows what you can really <i>use</i>.</p><p class="muted">No explanations during the check. At the end you get your level and a starting tier for every topic you met.</p>
        <div class="row"><button class="btn" data-act="diagGo">Start</button><button class="btn ghost" data-act="closeModal">Later</button></div>`);
    },
    diagGo: () => { closeModal(); start(L.diag()); },
    fixNow: () => start(L.fix(st, ui.lastMissed || [])),
    drill: (a) => start(L.drill(st, a)),
    // Choosing a tier changes the picker and the button in place: no redraw, the page stays where it is.
    pickTier: (a) => {
      const [id, t] = a.split(':');
      ui.tierPick = { id, tier: +t };
      document.querySelectorAll('.tierbtn').forEach((b) => { const on = b.dataset.arg === a; b.classList.toggle('sel', on); b.setAttribute('aria-pressed', on); });
      const btn = $('#practicebtn');
      if (btn) { btn.dataset.arg = a; btn.textContent = `Practice · ${L.TIERS[+t - 1]} →`; }
    },
    // inside a session
    pick: (a) => { if (!sess || sess.done) return; sess.cur.picked = +a; checkAnswer(); },
    tile: (a) => { const c = sess && sess.cur; if (!c || sess.done || c.built.includes(+a)) return; c.built.push(+a); $('.question').innerHTML = X.html(c); },
    untile: (a) => { const c = sess && sess.cur; if (!c || sess.done) return; c.built.splice(+a, 1); $('.question').innerHTML = X.html(c); },
    checkAnswer: () => checkAnswer(),
    nextQ: () => { if (sess && sess.done) showNext(); },
    override: () => override(),
    say: (a) => { if (sess && sess.cur) V.speak(APP.content.sentence(sess.cur.it), a === 'slow'); },
    quit: () => quit(),
    leave: () => { closeModal(); const s = sess; sess = null; if (s && s.log.length && s.mode !== 'diag') { L.finish(s, st); S.save(); } home(); }, // an unfinished level check sets nothing
    // voice
    speak: (a) => V.speak(a),
    speakSlow: (a) => V.speak(a, true),
    recMe: async () => {
      const b = $('#recbtn');
      if (V.recording()) { V.stop(); return; }
      try {
        await V.record(() => { const p = $('#playme'); if (p) p.hidden = false; const r = $('#recbtn'); if (r) { r.textContent = '🎙 Again'; r.classList.remove('rec'); } V.play(); });
        if (b) { b.textContent = '⏹ Stop'; b.classList.add('rec'); }
      } catch (e) { toast('The microphone is not available. Allow it in the browser settings.'); }
    },
    playMe: () => V.play(),
    mic: () => mic(),
    shareWeek: (a) => {
      const text = W.text(st, W.report(st, a));
      const msg = (t) => { const m = $('#share-msg'); if (m) m.textContent = t; };
      if (navigator.share) { navigator.share({ title: 'English Grammar · weekly report', text }).catch(() => {}); return; }
      try { navigator.clipboard.writeText(text).then(() => msg('Copied. Paste it into a message.'), () => msg(text)); } catch (e) { msg(text); }
    },
    tr: (a, el) => I.toggle(a, el),
    ruleModal: (a) => ruleModal(a),
    // settings
    setting: (a, el) => { st.settings[a] = el.checked; S.save(); if (a === 'alwaysL1') redraw(settings); },
    setL1: (a) => { st.settings.l1 = a; S.save(); redraw(settings); },
    setGoal: (a) => { st.settings.goal = +a; S.save(); redraw(settings); },
    setVoice: (a, el) => { st.settings.voice = el.value; S.save(); V.speak('This is how I sound.'); },
    saveName: () => { st.name = $('#set-name').value.trim().slice(0, 16) || st.name; S.save(); toast('Saved'); },
    setKind: (a) => {
      const [id, kind] = a.split(':');
      S.update(id, { kind });
      if (st.id === id) st = S.open(id);
      redraw(settings);
    },
    delProfile: (a) => {
      if (ui.delArmed !== a) { ui.delArmed = a; return redraw(settings); }
      ui.delArmed = null;
      const self = st.id === a;
      S.remove(a);
      if (self) { st = null; return who(); }
      redraw(settings);
    },
    exportSave: () => {
      const code = S.exportCode(), ta = $('#savecode');
      ta.value = code;
      const done = () => ($('#save-msg').textContent = 'Copied. Paste it on the other device.');
      const fallback = () => { ta.focus(); ta.select(); $('#save-msg').textContent = 'Select the code above and copy it.'; };
      try { navigator.clipboard.writeText(code).then(done, fallback); } catch (e) { fallback(); }
    },
    importSave: () => {
      try { st = S.importCode($('#savecode').value); toast('Progress loaded'); settings(); } catch (e) { $('#save-msg').textContent = 'That code did not work. Copy the whole code and try again.'; }
    },
    reset: () => {
      if (!ui.resetArmed) { ui.resetArmed = true; return redraw(settings); }
      ui.resetArmed = false;
      const l1 = st.settings.l1;
      S.reset();
      st = APP.state;
      st.settings.l1 = l1;
      S.save();
      toast('Progress erased');
      home();
    },
  };
  function act(name, arg, el) { if (ACTIONS[name]) ACTIONS[name](arg, el); }

  function init() {
    S.init();
    if (APP.cloud) { APP.cloud.init(); APP.cloud.onUpdate(onCloud); }
    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-act]');
      if (!el || el.disabled) return;
      if (el.type === 'checkbox' || el.tagName === 'SELECT') return; // handled on change
      act(el.dataset.act, el.dataset.arg, el);
    });
    document.addEventListener('change', (e) => {
      const el = e.target.closest('input[type=checkbox][data-act], select[data-act]');
      if (el) act(el.dataset.act, el.dataset.arg, el);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && $('#modal')) return closeModal();
      if (e.key !== 'Enter' || e.shiftKey) return;
      if ($('#fam-go') && !$('#fam-go').disabled) return famSubmit();
      if (sess && root().classList.contains('is-play') && !$('#modal')) {
        e.preventDefault();
        if (sess.done) showNext(); else checkAnswer();
      }
    });
    window.addEventListener('popstate', onPop);
    const m = /^#who=(.+)$/.exec(location.hash);
    if (m) { try { wanted = decodeURIComponent(m[1]); } catch (e) { /* broken link: ignore */ } }
    try {
      if (useHistory) history.replaceState({ where: 'start' }, '', location.pathname + location.search); // drop #who= from the address
    } catch (e) { /* ignore */ }
    // A brand-new device first offers to join the family, so progress is shared from the start.
    let localOnly = false;
    try { localOnly = localStorage.getItem(CFG.id + '-localonly') === '1'; } catch (e) { /* ignore */ }
    if (!S.profiles().length && CL() && !APP.cloud.family && !localOnly) return family();
    startScreen();
  }

  APP.app = { init, go, start, session: () => sess }; // start() and session() are used by the browser tests
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
