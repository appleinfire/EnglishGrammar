// Listening and speaking: read-aloud (speechSynthesis, American voice by default), recording her own voice
// to compare with the model (MediaRecorder), speech to text for spoken answers (SpeechRecognition), and short sounds.
// All free; only speech to text leaves the device (the browser's own service).
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  const V = {};
  const settings = () => (APP.state && APP.state.settings) || {};

  // ---------- read aloud ----------
  const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const NICE = /Premium|Enhanced|Neural|Natural|Ava|Samantha|Allison|Zoe|Evan|Nathan|Jenny|Aria|Google US/i;
  V.canSpeak = canSpeak;
  V.voices = () => (canSpeak ? window.speechSynthesis.getVoices().filter((v) => /^en[-_]/i.test(v.lang)) : []);
  // The voice from Settings, else the nicest American voice, else any English one.
  V.voice = () => {
    const vs = V.voices();
    const want = settings().voice;
    return (want && vs.find((v) => v.name === want)) ||
      vs.find((v) => /^en[-_]US/i.test(v.lang) && NICE.test(v.name)) ||
      vs.find((v) => /^en[-_]US/i.test(v.lang)) || vs[0] || null;
  };
  if (canSpeak) window.speechSynthesis.onvoiceschanged = () => {};
  V.speak = (text, slow) => {
    if (!canSpeak || !text) return false;
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(String(text).replace(/_{3,}/g, ' blank ').replace(/→/g, '. ').replace(/\s—\s/g, '. '));
    const v = V.voice();
    u.lang = v ? v.lang : 'en-US';
    if (v) u.voice = v;
    u.rate = slow || settings().slow ? 0.7 : 0.95;
    const busy = synth.speaking || synth.pending;
    synth.cancel();
    // Some browsers drop an utterance queued right after cancel().
    if (busy) setTimeout(() => synth.speak(u), 80);
    else synth.speak(u);
    return true;
  };
  V.hush = () => { if (canSpeak) window.speechSynthesis.cancel(); };

  // ---------- record yourself ----------
  V.canRecord = typeof navigator !== 'undefined' && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && typeof MediaRecorder !== 'undefined';
  let rec = null, chunks = [], stream = null, clip = null, stopTimer = null;
  V.recording = () => !!rec;
  V.hasClip = () => !!clip;
  // Starts recording (up to 12 s). onStop(url) is called with the recording.
  V.record = async (onStop) => {
    if (!V.canRecord || rec) return false;
    V.hush();
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const type = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'].find((t) => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t));
    rec = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
    chunks = [];
    rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    rec.onstop = () => {
      clearTimeout(stopTimer);
      stream.getTracks().forEach((t) => t.stop()); // release the microphone
      if (clip) URL.revokeObjectURL(clip);
      clip = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || type || 'audio/mp4' }));
      rec = null;
      if (onStop) onStop(clip);
    };
    rec.start();
    stopTimer = setTimeout(V.stop, 12000);
    return true;
  };
  V.stop = () => { if (rec && rec.state !== 'inactive') rec.stop(); };
  V.play = () => { if (clip) new Audio(clip).play().catch(() => {}); };
  V.forget = () => { V.stop(); V.abortListening(); if (clip) URL.revokeObjectURL(clip); clip = null; };

  // ---------- speech to text (the 🎙 button) ----------
  // Safari (iOS 14.5+, with Siri or Dictation turned on) and Chrome. The browser sends the sound to Apple or Google
  // and gets text back; nothing is stored by the app. If it fails (some home-screen apps on iOS), the keyboard
  // microphone still works.
  const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
  V.canListen = !!SR;
  V.micBroken = false; // set after "not allowed": the 🎙 button hides until the app is opened again
  let rcg = null;
  V.listening = () => !!rcg;
  // Listens for one sentence. on.interim(text) while she speaks; on.final([text, …alternatives]);
  // on.error(code) ('not-allowed', 'service-not-allowed', 'no-speech', 'audio-capture', 'network', …); on.end().
  V.listen = (on = {}) => {
    if (!SR || rcg) return false;
    V.hush();
    let r;
    try { r = new SR(); } catch (e) { if (on.error) on.error('unsupported'); return false; }
    r.lang = 'en-US';
    r.interimResults = true;
    r.continuous = false;
    r.maxAlternatives = 5;
    let alts = null, failed = false;
    r.onresult = (e) => {
      const finals = [];
      let interim = '';
      for (let i = 0; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) finals.push(res);
        else interim += res[0].transcript;
      }
      const head = finals.slice(0, -1).map((x) => x[0].transcript.trim()).join(' ');
      if (finals.length) {
        const last = finals[finals.length - 1];
        const list = [];
        for (let i = 0; i < last.length; i++) list.push((head + ' ' + last[i].transcript).trim());
        alts = [...new Set(list.filter(Boolean))];
      }
      const shown = ((alts ? alts[0] : head) + ' ' + interim).trim();
      if (on.interim && shown) on.interim(shown);
    };
    r.onerror = (e) => { failed = true; if (on.error) on.error(e.error || 'error'); };
    r.onend = () => {
      if (rcg !== r) return; // aborted
      rcg = null;
      if (alts && alts.length) { if (on.final) on.final(alts); } else if (!failed && on.error) on.error('no-speech');
      if (on.end) on.end();
    };
    try { r.start(); } catch (e) { if (on.error) on.error('busy'); return false; }
    rcg = r;
    return true;
  };
  V.stopListening = () => { if (rcg) { try { rcg.stop(); } catch (e) { /* already stopped */ } } };
  V.abortListening = () => {
    const r = rcg;
    rcg = null;
    if (r) { try { r.abort(); } catch (e) { /* already stopped */ } }
  };

  // ---------- short sounds (WebAudio, no files) ----------
  let ctx = null;
  function tone(freq, start = 0, dur = 0.1, type = 'sine', vol = 0.08) {
    if (settings().sound === false) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const t0 = ctx.currentTime + start;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(vol, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t0);
      o.stop(t0 + dur + 0.02);
    } catch (e) { /* no audio */ }
  }
  V.sfx = {
    good: () => { tone(660, 0, 0.08, 'triangle'); tone(990, 0.06, 0.1, 'triangle', 0.06); },
    bad: () => tone(220, 0, 0.16, 'sine', 0.07),
    done: () => [523, 659, 784].forEach((f, i) => tone(f, i * 0.1, 0.22, 'triangle')),
  };

  APP.voice = V;
})();
