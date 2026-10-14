// Everything that names this app.
(function () {
  const APP = (globalThis.APP = globalThis.APP || {});
  APP.CONFIG = {
    name: 'English Grammar',
    // Storage prefix and family-key salt. Never change it after launch:
    // a new id means every device starts empty and families can no longer be found.
    id: 'english-grammar',
    // What one profile is called in the interface.
    profileWord: 'learner',
    // Profile kinds are the starting level. Progress itself is kept per topic (Core → Use → Pro).
    kinds: [
      { id: 'A2', label: 'Pre-intermediate (A2)', icon: '🌱', color: '#5aa469', about: 'Start every topic from Core' },
      { id: 'B1', label: 'Intermediate (B1)', icon: '🌿', color: '#3f7fbf', about: 'Most people who speak but make mistakes' },
      { id: 'B2', label: 'Upper-intermediate (B2)', icon: '🌳', color: '#7a5cc2', about: 'Start every topic from Use' },
    ],
    avatars: ['🌻', '🌿', '☕', '📚', '🌙', '🦋', '🌸', '⭐'],
    // Our apps. The picker and settings link to every app except this one (matched by id).
    // Keep this list the same in every app.
    apps: [
      { id: 'math-expedition', name: 'Math Expedition', icon: '🧭', url: 'https://appleinfire.github.io/Math/' },
      { id: 'writing-power', name: 'WritingPower', icon: '✏️', url: 'https://appleinfire.github.io/WritingPower/' },
      { id: 'english-grammar', name: 'English Grammar', icon: '📘', url: 'https://appleinfire.github.io/EnglishGrammar/' },
    ],
    // Firebase project of Math Expedition (shared; data is separated by the family key, which is salted with `id`).
    // These values identify the project; they are not secrets. null = no cloud sync.
    firebase: {
      apiKey: 'AIzaSyAn0Pl1zrsT_OWZSfzgjnFHjAv4RTZowgI',
      authDomain: 'math-accc7.firebaseapp.com',
      projectId: 'math-accc7',
      storageBucket: 'math-accc7.firebasestorage.app',
      messagingSenderId: '932850319929',
      appId: '1:932850319929:web:0e1393157b84030f0b83e8',
    },
    // Later: address of a small proxy (e.g. a Cloudflare Worker) for AI explanations. null = the feature is hidden.
    aiProxy: null,
  };
})();
