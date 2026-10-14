APP.addTopic({
  id: 'pperf',
  title: 'Past Perfect: it had already started',
  level: 'B1',
  group: 'Tenses',
  icon: '⏮️',
  about: 'had + 3rd form: the earlier of two past events',
  rule: {
    en: `**had + past participle** (the same for everyone): *I had left, she had seen, we hadn't eaten*.
Use it to show that something happened **before another moment in the past**:
- *When we got to the theater, the movie **had** already **started**.* (First the movie started, then we arrived.)
- *By the time the ambulance came, he **had stopped** breathing.*
- *I **had never seen** snow before I came to Chicago.*
Compare: *When I arrived, she **left**.* (I arrived, then she left.) — *When I arrived, she **had left**.* (She was already gone.)
If you tell events **in order**, the Past Simple is enough: *I got up, had breakfast and left.*
**have done** (Present Perfect) is connected to **now**; **had done** is connected to a moment **in the past**.`,
    uk: `**had + третя форма** (однаково для всіх): *I had left, she had seen, we hadn't eaten*.
Вживаємо, щоб показати, що щось сталося **раніше за інший момент у минулому**:
- *When we got to the theater, the movie **had** already **started**.* (Спершу почався фільм, потім ми прийшли.)
- *By the time the ambulance came, he **had stopped** breathing.*
- *I **had never seen** snow before I came to Chicago.*
Порівняйте: *When I arrived, she **left**.* (Я прийшла — і тоді вона пішла.) — *When I arrived, she **had left**.* (Вона вже пішла.)
Якщо розповідаєте події **по порядку**, вистачить Past Simple: *I got up, had breakfast and left.*
**have done** (Present Perfect) пов'язаний із **зараз**; **had done** — з моментом **у минулому**.`,
    ru: `**had + третья форма** (одинаково для всех): *I had left, she had seen, we hadn't eaten*.
Используем, чтобы показать, что что-то произошло **раньше другого момента в прошлом**:
- *When we got to the theater, the movie **had** already **started**.* (Сначала начался фильм, потом мы пришли.)
- *By the time the ambulance came, he **had stopped** breathing.*
- *I **had never seen** snow before I came to Chicago.*
Сравните: *When I arrived, she **left**.* (Я пришла — и тогда она ушла.) — *When I arrived, she **had left**.* (Она уже ушла.)
Если рассказываете события **по порядку**, хватит Past Simple: *I got up, had breakfast and left.*
**have done** (Present Perfect) связан с **сейчас**; **had done** — с моментом **в прошлом**.`,
  },
  examples: ['When we got to the theater, the movie had already started.', 'I had never seen snow before I came to Chicago.', 'By the time the ambulance came, he had stopped breathing.', "She was upset because she hadn't slept all night.", 'I got up, had breakfast and left.'],
  trap: {
    uk: 'Коли я прийшла, вони вже поїли.',
    ru: 'Когда я пришла, они уже поели.',
    wrong: 'When I came, they already ate.',
    right: 'When I came, they had already eaten.',
    note: {
      en: 'Ukrainian and Russian have one past tense and show the order with *вже / уже*. English shows "before that moment" with **had + 3rd form**.',
      uk: 'Українською один минулий час, а порядок показує слово «вже». Англійською «раніше за той момент» передає **had + третя форма**.',
      ru: 'По-русски одно прошедшее время, а порядок показывает слово «уже». По-английски «раньше того момента» передаёт **had + третья форма**.',
    },
  },
  errors: {
    form: {
      en: 'Past Perfect = **had + past participle** for everyone: *had left, had seen, had eaten, had gone* — not *had saw, had went*, not *have*.',
      uk: 'Past Perfect = **had + третя форма** для всіх осіб: *had left, had seen, had eaten, had gone* — не *had saw, had went* і не *have*.',
      ru: 'Past Perfect = **had + третья форма** для всех лиц: *had left, had seen, had eaten, had gone* — не *had saw, had went* и не *have*.',
    },
    earlier: {
      en: 'Two past events: the **earlier** one → **had + 3rd form**: *When we arrived, the movie **had started**.* The later one stays in the Past Simple.',
      uk: 'Дві події в минулому: **раніша** → **had + третя форма**: *When we arrived, the movie **had started**.* Пізніша — у Past Simple.',
      ru: 'Два события в прошлом: **более раннее** → **had + третья форма**: *When we arrived, the movie **had started**.* Более позднее — в Past Simple.',
    },
    'in-order': {
      en: 'Events told **in the order they happened** need only the **Past Simple**: *I got up, had breakfast and left.* Use *had done* only to go back in time.',
      uk: 'Події, розказані **в тому порядку, як ставалися**, — лише **Past Simple**: *I got up, had breakfast and left.* *had done* — тільки щоб «повернутися назад».',
      ru: 'События, рассказанные **в том порядке, как происходили**, — только **Past Simple**: *I got up, had breakfast and left.* *had done* — только чтобы «вернуться назад».',
    },
    'by-time': {
      en: '*by the time…, already, before, never… before* with a moment in the past → **had done**: *By the time I got home, they had eaten.*',
      uk: '*by the time…, already, before, never… before* з моментом у минулому → **had done**: *By the time I got home, they had eaten.*',
      ru: '*by the time…, already, before, never… before* с моментом в прошлом → **had done**: *By the time I got home, they had eaten.*',
    },
    'have-had': {
      en: '**have done** = connected to **now**. **had done** = before a moment **in the past**. In a story about the past, use *had*: *She told me she had lost her keys.*',
      uk: '**have done** — пов\'язане із **зараз**. **had done** — раніше за момент **у минулому**. У розповіді про минуле — *had*: *She told me she had lost her keys.*',
      ru: '**have done** — связано с **сейчас**. **had done** — раньше момента **в прошлом**. В рассказе о прошлом — *had*: *She told me she had lost her keys.*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'earlier', l: 1, p: 'When we got to the theater, the movie ___ already started.', a: 'had', o: ['has', 'was'], w: { has: 'have-had', was: 'form' }, e: 'earlier' },
    { t: 'choose', pt: 'form', l: 1, p: 'She was hungry because she ___ breakfast.', a: "hadn't eaten", o: ["hadn't ate", "haven't eaten"], w: { "hadn't ate": 'form', "haven't eaten": 'have-had' }, e: 'form' },
    { t: 'choose', pt: 'never', l: 1, p: 'I ___ snow before I came to Chicago.', a: 'had never seen', o: ['have never seen', 'never saw'], w: { 'have never seen': 'have-had', 'never saw': 'by-time' }, e: 'by-time' },
    { t: 'choose', pt: 'by-time', l: 1, p: 'By the time I got home, the kids ___ asleep.', a: 'had fallen', o: ['have fallen', 'fall'], w: { 'have fallen': 'have-had', fall: 'by-time' }, e: 'by-time' },
    { t: 'choose', pt: 'order', l: 1, p: 'I got up, ___ a shower and went to work.', a: 'took', o: ['had taken', 'have taken'], w: { 'had taken': 'in-order', 'have taken': 'in-order' }, e: 'in-order' },
    { t: 'choose', pt: 'form', l: 1, p: 'They ___ to Paris twice before their wedding.', a: 'had been', o: ['had went', 'had be'], w: { 'had went': 'form', 'had be': 'form' }, e: 'form' },
    { t: 'fill', pt: 'earlier', l: 1, p: 'When I arrived at the party, Anna ___ (leave). I didn\'t see her.', a: 'had left', w: { left: 'earlier', 'has left': 'have-had' }, e: 'earlier' },
    { t: 'fill', pt: 'form', l: 1, p: 'He ___ (not / finish) the report when his boss called.', a: "hadn't finished", w: { "didn't finish": 'earlier', "hasn't finished": 'have-had', "hadn't finish": 'form' }, e: 'earlier' },
    { t: 'fill', pt: 'never', l: 1, p: 'She ___ (never / fly) before she came to the US.', a: 'had never flown', w: { 'never flew': 'by-time', 'has never flown': 'have-had', 'had never flew': 'form' }, e: 'by-time' },
    { t: 'fill', pt: 'by-time', l: 1, p: 'By the time the police arrived, the thief ___ (run away).', a: 'had run away', w: { 'ran away': 'by-time', 'has run away': 'have-had', 'had ran away': 'form' }, e: 'by-time' },
    { t: 'fill', pt: 'earlier', l: 1, p: "I couldn't get in because I ___ (lose) my keys.", a: 'had lost', w: { lost: 'earlier', 'have lost': 'have-had' }, e: 'earlier' },
    { t: 'fill', pt: 'order', l: 1, p: 'She opened the door, ___ (turn) on the light and screamed.', a: 'turned', w: { 'had turned': 'in-order' }, e: 'in-order' },
    { t: 'fill', pt: 'form', l: 1, p: '___ you ___ (meet) him before the interview?', a: ['Had|met', 'Did|meet'], w: { 'Had|meet': 'form', 'Have|met': 'have-had' }, e: 'form' },
    { t: 'fill', pt: 'earlier', l: 1, p: 'The train ___ (already / leave) when we got to the station.', a: 'had already left', w: { 'already left': 'earlier', 'has already left': 'have-had' }, e: 'earlier' },
    { t: 'build', pt: 'earlier', l: 1, a: 'The movie had already started when we arrived.', x: ['has'], e: 'earlier' },
    { t: 'build', pt: 'never', l: 1, a: 'I had never been to a baseball game before.', x: ['have'], e: 'have-had' },
    { t: 'build', pt: 'order', l: 1, a: 'She finished her coffee and left.', x: ['had'], e: 'in-order' },

    // ---------- Use
    { t: 'fill', pt: 'earlier', l: 2, p: 'When I ___ (get) to the pharmacy, it ___ (close).', a: 'got|had closed', w: { 'had got|closed': 'earlier', 'got|closed': 'earlier', 'got|has closed': 'have-had' }, e: 'earlier' },
    { t: 'fill', pt: 'have-had', l: 2, p: 'She told me she ___ (lose) her passport the day before.', a: 'had lost', w: { 'has lost': 'have-had', lost: 'have-had' }, e: 'have-had' },
    { t: 'fill', pt: 'by-time', l: 2, p: "By the time we moved to Texas, we ___ (live) in New York for five years.", a: ['had lived', 'had been living'], w: { lived: 'by-time', 'have lived': 'have-had' }, e: 'by-time' },
    { t: 'fill', pt: 'earlier', l: 2, p: "I didn't recognize her because she ___ (change) so much.", a: 'had changed', w: { changed: 'earlier', 'has changed': 'have-had' }, e: 'earlier' },
    { t: 'fill', pt: 'order', l: 2, p: 'First we ___ (have) dinner, and then we ___ (watch) a movie.', a: 'had|watched', w: { 'had had|watched': 'in-order', 'had|had watched': 'in-order' }, e: 'in-order' },
    { t: 'fill', pt: 'never', l: 2, p: 'It was the first time I ___ (drive) on a highway.', a: 'had driven', w: { drove: 'by-time', 'have driven': 'have-had', 'had drove': 'form' }, e: 'by-time' },
    { t: 'fill', pt: 'form', l: 2, p: 'The kitchen was clean because my husband ___ (do) the dishes.', a: 'had done', w: { did: 'earlier', 'had did': 'form', 'has done': 'have-had' }, e: 'form' },
    { t: 'fill', pt: 'earlier', l: 2, p: 'We were late because we ___ (miss) the bus.', a: 'had missed', w: { missed: 'earlier', 'have missed': 'have-had' }, e: 'earlier' },
    { t: 'build', pt: 'by-time', l: 2, a: 'By the time I called, she had already left.', x: ['has'], e: 'by-time' },
    { t: 'fix', pt: 'form', l: 2, p: 'When I got home, my son had went to bed.', a: ['When I got home, my son had gone to bed.'], e: 'form' },
    { t: 'fix', pt: 'have-had', l: 2, p: 'When we arrived, the store has already closed.', a: ['When we arrived, the store had already closed.'], e: 'have-had' },
    { t: 'fix', pt: 'order', l: 2, p: 'I had woken up, had made coffee and had checked my email.', a: ['I woke up, made coffee and checked my email.'], e: 'in-order' },
    { t: 'fix', pt: 'earlier', l: 2, p: "I didn't know the movie because I didn't see it before.", a: ["I didn't know the movie because I hadn't seen it before."], e: 'earlier' },
    { t: 'tr', pt: 'earlier', l: 2, i: 'Join with *when*. Which happened first?', p: 'The guests left. Then I came back home.', s: 'When I came back home,', a: ['When I came back home, the guests had left.', 'When I came back home, the guests had already left.'], e: 'earlier' },
    { t: 'tr', pt: 'never', l: 2, i: 'Use *had never… before*.', p: 'It was my first time on a plane.', s: 'I', a: ['I had never been on a plane before.', 'I had never flown before.', "I'd never been on a plane before.", 'I had never flown on a plane before.'], e: 'by-time' },
    { t: 'tl', pt: 'earlier', l: 2, uk: 'Коли я прийшла, вони вже поїли.', ru: 'Когда я пришла, они уже поели.', a: ['When I came, they had already eaten.', 'When I arrived, they had already eaten.', 'When I got there, they had already eaten.', 'When I came, they had already had dinner.', 'When I arrived, they had already had dinner.', 'When I got home, they had already eaten.', 'They had already eaten when I came.', 'They had already eaten when I arrived.'], e: 'earlier' },
    { t: 'tl', pt: 'never', l: 2, uk: 'Я ніколи раніше не бачила океан.', ru: 'Я никогда раньше не видела океан.', a: ['I had never seen the ocean before.', 'I have never seen the ocean before.', "I'd never seen the ocean before.", "I've never seen the ocean before."], e: 'by-time', n: '*I had never seen…* — about a moment in the past (before that trip). *I have never seen…* — up to now.' },

    // ---------- Pro
    { t: 'fix', pt: 'by-time', l: 3, p: 'By the time the doctor came, the pain already went away.', a: ['By the time the doctor came, the pain had already gone away.', 'By the time the doctor came, the pain had already gone.'], e: 'by-time' },
    { t: 'fix', pt: 'have-had', l: 3, p: 'She was nervous because she has never spoken in public before.', a: ['She was nervous because she had never spoken in public before.'], e: 'have-had' },
    { t: 'fix', pt: 'earlier', l: 3, p: 'I wanted to thank him, but he left already.', a: ['I wanted to thank him, but he had already left.', 'I wanted to thank him, but he had left already.'], e: 'earlier' },
    { t: 'fix', pt: 'form', l: 3, p: "They hadn't saw each other for ten years.", a: ["They hadn't seen each other for ten years.", "They hadn't seen each other in ten years."], e: 'form' },
    { t: 'tr', pt: 'by-time', l: 3, i: 'Join with *By the time*.', p: 'The ambulance arrived. He had already woken up.', s: 'By the time the ambulance arrived,', a: ['By the time the ambulance arrived, he had already woken up.', 'By the time the ambulance arrived, he had woken up.'], e: 'by-time' },
    { t: 'tr', pt: 'have-had', l: 3, i: 'Report it: *She said (that)…*', p: '"I have found a new job."', s: 'She said', a: ['She said she had found a new job.', 'She said that she had found a new job.'], e: 'have-had' },
    { t: 'tr', pt: 'earlier', l: 3, i: 'Explain why with *because* + Past Perfect.', p: "I was tired. I didn't sleep the night before.", s: 'I was tired because', a: ["I was tired because I hadn't slept the night before.", "I was tired because I hadn't slept the previous night."], e: 'earlier' },
    { t: 'tl', pt: 'by-time', l: 3, uk: 'Коли ми приїхали в аеропорт, посадка вже закінчилася.', ru: 'Когда мы приехали в аэропорт, посадка уже закончилась.', a: ['When we got to the airport, boarding had already ended.', 'When we got to the airport, boarding had already finished.', 'When we got to the airport, boarding had already closed.', 'When we arrived at the airport, boarding had already ended.', 'When we arrived at the airport, boarding had already finished.', 'When we arrived at the airport, boarding had already closed.', 'By the time we got to the airport, boarding had already closed.', 'By the time we got to the airport, boarding had already ended.', 'By the time we got to the airport, boarding had ended.'], e: 'by-time' },
    { t: 'tl', pt: 'earlier', l: 3, uk: 'Я не впізнала її, бо вона дуже змінилася.', ru: 'Я не узнала её, потому что она очень изменилась.', a: ["I didn't recognize her because she had changed a lot.", "I didn't recognize her because she had changed so much.", "I didn't recognise her because she had changed a lot.", "I didn't recognize her because she'd changed a lot.", "I didn't recognize her because she had changed very much."], e: 'earlier' },
    { t: 'tl', pt: 'have-had', l: 3, uk: 'Він сказав, що вже бачив цей фільм.', ru: 'Он сказал, что уже видел этот фильм.', a: ['He said he had already seen this movie.', 'He said that he had already seen this movie.', 'He said he had already seen that movie.', 'He said that he had already seen that movie.', 'He said he had already seen the movie.', 'He said he had seen this movie already.', 'He said he had already seen this film.'], e: 'have-had' },
    { t: 'tl', pt: 'order', l: 3, uk: 'Я прокинулася, вдяглася і пішла на роботу.', ru: 'Я проснулась, оделась и пошла на работу.', a: ['I woke up, got dressed and went to work.', 'I woke up, got dressed, and went to work.', 'I got up, got dressed and went to work.', 'I got up, got dressed, and went to work.', 'I woke up, got dressed and left for work.'], e: 'in-order' },
    { t: 'tl', pt: 'form', l: 3, uk: 'Ми не їли з самого ранку, тому були дуже голодні.', ru: 'Мы не ели с самого утра, поэтому были очень голодные.', a: ["We hadn't eaten since the morning, so we were very hungry.", "We hadn't eaten since morning, so we were very hungry.", "We hadn't eaten anything since the morning, so we were very hungry.", "We hadn't eaten since early morning, so we were very hungry.", "We hadn't eaten since the morning, so we were really hungry."], e: 'form' },
    { t: 'fill', pt: 'earlier', l: 3, p: "When she opened the email, she realized she ___ (make) a terrible mistake.", a: 'had made', w: { made: 'earlier', 'has made': 'have-had' }, e: 'earlier' },
    { t: 'fill', pt: 'by-time', l: 3, p: 'By 2020 my parents ___ (be) married for thirty years.', a: 'had been', w: { were: 'by-time', 'have been': 'have-had' }, e: 'by-time' },
    { t: 'fill', pt: 'order', l: 3, p: 'The phone rang, so I ___ (answer) it.', a: 'answered', w: { 'had answered': 'in-order' }, e: 'in-order' },
  ],
});
