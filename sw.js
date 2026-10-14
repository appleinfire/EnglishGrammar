// Offline cache: the app works without internet once it has been opened.
// The deploy workflow replaces 'v1' with the commit hash, so every deploy gets a fresh cache.
// PREFIX must be unique per app: all apps on <user>.github.io share one browser origin and one cache storage,
// so each app deletes only its own old caches. Use APP.CONFIG.id from js/config.js.
// Add every new js/css file to FILES (tests/shell.test.js checks that index.html and FILES agree).
const PREFIX = 'english-grammar-cache-';
const CACHE = PREFIX + 'v1';
const FILES = ['./', 'index.html', 'css/style.css', 'js/config.js', 'js/util.js', 'js/schema.js', 'js/store.js', 'js/vendor/firebase-app-compat.js', 'js/vendor/firebase-auth-compat.js', 'js/vendor/firebase-firestore-compat.js', 'js/cloud.js', 'js/check.js', 'js/content.js', 'js/topics/present-simple-continuous.js', 'js/topics/past-simple-continuous.js', 'js/topics/quantifiers.js', 'js/topics/comparatives.js', 'js/topics/prepositions.js', 'js/topics/modals-obligation.js', 'js/topics/questions.js', 'js/topics/present-perfect.js', 'js/topics/past-vs-perfect.js', 'js/topics/for-since.js', 'js/topics/perfect-continuous.js', 'js/topics/used-to.js', 'js/topics/past-perfect.js', 'js/topics/future.js', 'js/topics/polite-questions.js', 'js/topics/articles.js', 'js/topics/relative-clauses.js', 'js/topics/modals-advice.js', 'js/topics/phrasal-verbs.js', 'js/topics/linking.js', 'js/topics/too-enough.js', 'js/topics/conditionals.js', 'js/topics/passive.js', 'js/topics/reported-speech.js', 'js/topics/gerund-infinitive.js', 'js/topics/third-conditional.js', 'js/topics/wish.js', 'js/topics/deduction.js', 'js/topics/future-perfect.js', 'js/topics/passive-advanced.js', 'js/topics/reporting-verbs.js', 'js/topics/articles-advanced.js', 'js/topics/inversion.js', 'js/topics/cleft.js', 'js/topics/participle-clauses.js', 'js/topics/subjunctive.js', 'js/topics/past-modals.js', 'js/scenes/doctor.js', 'js/scenes/return.js', 'js/scenes/insurance.js', 'js/scenes/landlord.js', 'js/scenes/pharmacy.js', 'js/scenes/absence.js', 'js/scenes/conference.js', 'js/scenes/camp.js', 'js/scenes/interview.js', 'js/scenes/colleague.js', 'js/scenes/neighbor.js', 'js/scenes/trip.js', 'js/srs.js', 'js/level.js', 'js/report.js', 'js/i18n.js', 'js/voice.js', 'js/exercises.js', 'js/app.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
// Network first (so updates arrive), cache as fallback when offline.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((r) => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); } return r; })
      .catch(() => caches.match(e.request).then((r) => r || caches.match('index.html')))
  );
});
