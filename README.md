# 📘 English Grammar

**Grammar practice for Ukrainian and Russian speakers who already speak English but want to stop making the same mistakes.** Short rules, lots of typed and spoken practice, feedback on every mistake, and spaced review of the patterns that go wrong.

Website: **https://appleinfire.github.io/EnglishGrammar/** (made for iPhone and iPad; install it with Safari → Share → *Add to Home Screen*, and it works offline).

Built on the family app shell from [Math Expedition](https://github.com/appleinfire/Math) (`templates/app-shell/`), like [WritingPower](https://github.com/appleinfire/WritingPower).

## How it works

- **12 topics** (≈590 exercises), chosen for the typical mistakes of Ukrainian and Russian speakers: Present Perfect, Past Simple vs Present Perfect, *for / since / ago*, Present Perfect Continuous, questions and *do*, polite and indirect questions, articles, the future, *if*, the passive, reported speech, *-ing* or *to*.
- **English first, translation on demand.** Rules and explanations are in simple English; the 🌐 button shows them in Ukrainian or Russian (Settings). Exercise sentences open in Google Translate.
- **Three tiers in every topic:** **Core** (the form, with hints) → **Use** (in context, no hints) → **Pro** (translate from Ukrainian/Russian, fix a mistake, rewrite, say it). A topic is mastered only at Pro. Inside a lesson the tier moves up after 3 right answers in a row and down after 2 mistakes.
- **Exercise types:** choose (only as a warm-up), fill in the blank, put the words in order, find and fix the mistake, rewrite, translate, listen and type, say it out loud.
- **Feedback after every answer:** her answer next to the right one with the differences marked, an explanation of *that* mistake (🌐 translation), 🔊 listen / 🐢 slowly, 🎙 record yourself and compare, "Why? Rule". Translations can be said many ways, so *My answer was right too* counts an answer the app did not know.
- **Checking answers** runs on the device: contractions equal full forms (*I've = I have*), iPhone quotes and capitals don't matter, a one-letter typo in a long word is forgiven, grammar endings (*-s, -ed*, *began / begun*) are not. Autocorrect is off in answer fields so the phone doesn't fix the grammar.
- **American English is the norm:** American voice, and answers like *Did you eat yet? / I just finished* are accepted with a note about the textbook form.
- **Spaced review:** every pattern she practices becomes a card (Leitner boxes: 1, 3, 7, 14, 30 days). A mistake brings the card back today; a card comes back with a **different sentence of the same pattern**. **Review** mixes all topics.
- **Level check** (24 typed exercises, 2 per topic) sets a starting tier for every topic. **Challenge** mixes the started topics with no hints and an optional 40-second timer. **Topic check** (Pro, 75% to pass).
- **My mistakes:** the types of mistakes made most often, each with an explanation and a *Practice this* button; recent mistakes with the right sentence.
- **Progress:** answers, accuracy, active days, streak (one missed day a week is forgiven), mistakes fixed, patterns learned, minutes per day for 30 days, tiers per topic. A daily goal (5–30 minutes) on the home screen.

## Voice

| What | How | Cost |
|---|---|---|
| Listen | `speechSynthesis` — Siri voices on iPhone/iPad (choose one in Settings; download *Enhanced / Premium* voices in iOS Settings → Accessibility → Spoken Content) | free |
| Record yourself and compare | `MediaRecorder`, nothing leaves the device | free |
| Say it out loud | *Say it* exercises: tap the microphone on the iPhone keyboard (iOS dictation) and the text is checked like a typed answer. Articles and endings that dictation may mishear do not count as mistakes. | free |
| Later | a microphone button with `webkitSpeechRecognition` (if it is reliable on the device); pronunciation scores with Azure Pronunciation Assessment through a small proxy | Azure: about 5 free audio hours a month |

`aiProxy` in `js/config.js` is reserved for a later "Explain my mistake" button (Claude through a Cloudflare Worker); with `null` nothing is shown.

## Same progress on every device

Same as Math Expedition and WritingPower: **Create a family** (code + PIN) on the first device, **I already have a family** on the others, or **Use family …** with one tap if another of our apps is connected on the device. Each device keeps a full copy and works offline; copies are merged without losing anything:

| What | When two copies differ |
|---|---|
| Topics (best tier passed, lessons, answers, best topic check), mistake counts, minutes per day, seen sentences | kept from both; the higher value wins |
| Review cards | kept from both; for one card, the copy answered more recently wins (a mistake can lower a box) |
| Totals (answers, right, fixed, sessions) | the higher value |
| Current tier of a topic, settings, recent mistakes | the newer copy |

Mastery and topic status are not stored; they are computed from the cards and answers.

## Files

```
index.html             the page; plain <script> tags, no build step, no npm
css/style.css          all styles; light and dark tokens in :root; two columns from 900px (iPad landscape)
js/config.js           name, storage id 'english-grammar' (never change), levels, Firebase config, aiProxy
js/schema.js           what a profile holds and how two copies merge
js/content.js          the content registry and the format of a topic (see the comment at the top)
js/topics/*.js         one file per topic: rule (en/uk/ru), typical mistake, error explanations (en/uk/ru), exercises
js/check.js            judging typed answers: contractions, quotes, typos, word-by-word comparison
js/srs.js              spaced repetition cards
js/level.js            tiers, lessons, review, level check, challenge, topic check, drills; recording answers
js/i18n.js             🌐 translations, Google Translate links, the tiny text format
js/voice.js            read-aloud, record yourself, sounds
js/exercises.js        how each exercise type looks and how an answer is read and judged
js/app.js              screens and routing (profiles, family, home, topics, session, results, mistakes, progress, settings)
js/util.js, js/store.js, js/cloud.js, js/vendor/   the app shell: helpers, profiles, Firebase sync, Firebase SDK 10.14.1
sw.js                  offline cache (every file is listed in FILES)
tests/                 see below
```

To add a topic: copy a file in `js/topics/`, add it to `index.html` and to `FILES` in `sw.js`, run `node tests/content.test.js`. The test checks three languages for every rule and explanation, at least 10 exercises per tier and 3 per pattern, that every right answer is accepted and every listed wrong answer is not.

## Tests

```sh
node tests/shell.test.js     # merging two copies, storage, save code, family key, offline file list
node tests/content.test.js   # every topic and exercise
node tests/check.test.js     # judging answers
node tests/srs.test.js       # review cards
node tests/level.test.js     # tiers and sessions
node tests/smoke.mjs         # in Chromium, iPhone and iPad sizes (needs Playwright)
node tests/cloud-e2e.mjs     # two "devices" syncing through the real Firebase project (needs Playwright and internet)
```

Every push to `main` runs the node tests and publishes the site to GitHub Pages (Actions → *Deploy to GitHub Pages*). One-time setup: Settings → Pages → Source: **GitHub Actions**.

To try it locally: `python3 -m http.server` and open http://localhost:8000 (family sync needs `http(s)://`).
