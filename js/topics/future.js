APP.addTopic({
  id: 'fut',
  title: "Future: will, going to, I'm doing",
  level: 'B1',
  group: 'Future',
  icon: '🔮',
  about: "I'll get it! We're going to move. I'm seeing the doctor.",
  rule: {
    en: `English has no single future tense. Choose by **when you decided** and **how sure** you are:
- **will** — deciding **now**, offers, promises: *The phone is ringing. — I'll get it! Don't worry, I'll pay.* Also opinions about the future: *I'm sure you'll pass. It'll probably be cheaper online.*
- **be going to** — a plan you made **before**: *We're going to move this summer.* Also what you **see** coming: *Look at those clouds! It's going to rain.*
- **Present Continuous** — an **arrangement** with a time, a place, other people (it's in your calendar): *I'm seeing the doctor at 3 tomorrow.*
- After **when, as soon as, before, after, until, if** use the **present**, not *will*: *I'll call you when I **get** home.*
Form: *will* + verb (no *to*); *am / is / are going to* + verb.
Never the Present Simple for an offer or decision: *I'll help you*, not *I help you*.`,
    uk: `Одного майбутнього часу в англійській немає. Обираємо за тим, **коли вирішили** і **наскільки впевнені**:
- **will** — вирішуємо **зараз**, пропозиції, обіцянки: *The phone is ringing. — I'll get it! Don't worry, I'll pay.* Також думка про майбутнє: *I'm sure you'll pass. It'll probably be cheaper online.*
- **be going to** — план, складений **раніше**: *We're going to move this summer.* Також те, що **видно** заздалегідь: *Look at those clouds! It's going to rain.*
- **Present Continuous** — **домовленість** із часом, місцем, іншими людьми (є в календарі): *I'm seeing the doctor at 3 tomorrow.*
- Після **when, as soon as, before, after, until, if** — **теперішній** час, а не *will*: *I'll call you when I **get** home* — «коли прийду».
Форма: *will* + дієслово (без *to*); *am / is / are going to* + дієслово.
Ніколи не Present Simple для пропозиції чи рішення: *I'll help you*, а не *I help you* («я допоможу»).`,
    ru: `Одного будущего времени в английском нет. Выбираем по тому, **когда решили** и **насколько уверены**:
- **will** — решаем **сейчас**, предложения, обещания: *The phone is ringing. — I'll get it! Don't worry, I'll pay.* Также мнение о будущем: *I'm sure you'll pass. It'll probably be cheaper online.*
- **be going to** — план, составленный **раньше**: *We're going to move this summer.* Также то, что **видно** заранее: *Look at those clouds! It's going to rain.*
- **Present Continuous** — **договорённость** со временем, местом, другими людьми (есть в календаре): *I'm seeing the doctor at 3 tomorrow.*
- После **when, as soon as, before, after, until, if** — **настоящее** время, а не *will*: *I'll call you when I **get** home* — «когда приду».
Форма: *will* + глагол (без *to*); *am / is / are going to* + глагол.
Никогда не Present Simple для предложения или решения: *I'll help you*, а не *I help you* («я помогу»).`,
  },
  examples: ["The phone is ringing. — I'll get it!", "We're going to move this summer.", "I'm seeing the doctor at 3 tomorrow.", "Look at those clouds! It's going to rain.", "I'll call you when I get home."],
  trap: {
    uk: 'Я подзвоню тобі, коли прийду додому.',
    ru: 'Я позвоню тебе, когда приду домой.',
    wrong: 'I will call you when I will come home.',
    right: "I'll call you when I get home.",
    note: {
      en: 'Ukrainian and Russian put both parts in the future. In English, after *when, as soon as, until, if* the verb stays in the present.',
      uk: 'Українською обидві частини в майбутньому. Англійською після *when, as soon as, until, if* дієслово залишається в теперішньому часі.',
      ru: 'По-русски обе части в будущем. По-английски после *when, as soon as, until, if* глагол остаётся в настоящем времени.',
    },
  },
  errors: {
    'present-for-will': {
      en: 'An offer, promise or decision made now → **will**: *I\'ll help you. I\'ll pay. I\'ll take this one.* Not the Present Simple (*I help you* = I usually help you).',
      uk: 'Пропозиція, обіцянка чи рішення зараз → **will**: *I\'ll help you. I\'ll pay. I\'ll take this one.* Не Present Simple (*I help you* = я зазвичай допомагаю).',
      ru: 'Предложение, обещание или решение сейчас → **will**: *I\'ll help you. I\'ll pay. I\'ll take this one.* Не Present Simple (*I help you* = я обычно помогаю).',
    },
    decide: {
      en: 'You decide **at the moment of speaking** → **will**: *Then I\'ll have the salad.* *going to* / Present Continuous are for things decided **before**.',
      uk: 'Вирішуєте **в момент мовлення** → **will**: *Then I\'ll have the salad.* *going to* / Present Continuous — для того, що вирішили **раніше**.',
      ru: 'Решаете **в момент речи** → **will**: *Then I\'ll have the salad.* *going to* / Present Continuous — для того, что решили **раньше**.',
    },
    'will-plan': {
      en: 'A plan or intention you had **before** → **be going to**: *We\'re going to paint the kitchen. I\'m going to finish by June.*',
      uk: 'План чи намір, що був **заздалегідь** → **be going to**: *We\'re going to paint the kitchen. I\'m going to finish by June.*',
      ru: 'План или намерение, которое было **заранее** → **be going to**: *We\'re going to paint the kitchen. I\'m going to finish by June.*',
    },
    arrange: {
      en: 'An **arrangement** — a time, a place, other people, in your calendar → **Present Continuous**: *I\'m meeting the lawyer on Thursday. We\'re flying on June 3rd.*',
      uk: '**Домовленість** — час, місце, інші люди, є в календарі → **Present Continuous**: *I\'m meeting the lawyer on Thursday. We\'re flying on June 3rd.*',
      ru: '**Договорённость** — время, место, другие люди, есть в календаре → **Present Continuous**: *I\'m meeting the lawyer on Thursday. We\'re flying on June 3rd.*',
    },
    evidence: {
      en: 'You can **see it coming** right now → **be going to**: *Look at those clouds! It\'s going to rain. Careful, you\'re going to fall!*',
      uk: '**Видно, що це станеться** просто зараз → **be going to**: *Look at those clouds! It\'s going to rain. Careful, you\'re going to fall!*',
      ru: '**Видно, что это произойдёт** прямо сейчас → **be going to**: *Look at those clouds! It\'s going to rain. Careful, you\'re going to fall!*',
    },
    'time-clause': {
      en: 'After **when, as soon as, before, after, until, if** → **present** tense, even about the future: *when I get home, until you come back, if it rains*. No *will* there.',
      uk: 'Після **when, as soon as, before, after, until, if** → **теперішній** час, навіть про майбутнє: *when I get home, until you come back, if it rains*. *will* тут не вживаємо.',
      ru: 'После **when, as soon as, before, after, until, if** → **настоящее** время, даже о будущем: *when I get home, until you come back, if it rains*. *will* здесь не используем.',
    },
    form: {
      en: '**will + verb** (no *to*, no ending): *I\'ll call. She\'ll be here.* **am / is / are going to + verb**: *I\'m going to call.* *probably* goes after *will*: *It\'ll probably rain.*',
      uk: '**will + дієслово** (без *to*, без закінчення): *I\'ll call. She\'ll be here.* **am / is / are going to + дієслово**: *I\'m going to call.* *probably* — після *will*: *It\'ll probably rain.*',
      ru: '**will + глагол** (без *to*, без окончания): *I\'ll call. She\'ll be here.* **am / is / are going to + глагол**: *I\'m going to call.* *probably* — после *will*: *It\'ll probably rain.*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'decision', l: 1, p: '— The phone is ringing. — OK, I ___ it.', a: "'ll get", o: ['get', 'am getting'], w: { get: 'present-for-will', 'am getting': 'decide' }, e: 'present-for-will' },
    { t: 'choose', pt: 'plan', l: 1, p: "I've decided. I ___ learn to drive this summer.", a: 'am going to', o: ['am going', 'going to'], w: { 'am going': 'form', 'going to': 'form' }, e: 'will-plan' },
    { t: 'choose', pt: 'arrange', l: 1, p: 'I ___ the dentist at 3 p.m. tomorrow.', a: 'am seeing', o: ['see', 'seeing'], w: { see: 'arrange', seeing: 'form' }, e: 'arrange' },
    { t: 'choose', pt: 'evidence', l: 1, p: "Look at those clouds! It's ___ rain.", a: 'going to', o: ['will', 'going'], w: { will: 'form', going: 'form' }, e: 'evidence' },
    { t: 'choose', pt: 'time', l: 1, p: "When I ___ home, I'll call you.", a: 'get', o: ['will get', 'am going to get'], w: { 'will get': 'time-clause', 'am going to get': 'time-clause' }, e: 'time-clause' },
    { t: 'choose', pt: 'predict', l: 1, p: "Don't worry, I'm sure you ___ the exam.", a: 'will pass', o: ['pass', 'are passing'], w: { pass: 'present-for-will', 'are passing': 'arrange' }, e: 'present-for-will' },
    { t: 'choose', pt: 'decision', l: 1, p: "— It's cold in here. — I ___ close the window.", a: 'will', o: ['am', 'going to'], w: { am: 'form', 'going to': 'form' }, e: 'present-for-will' },
    { t: 'fill', pt: 'time', l: 1, p: "I'll text you as soon as I ___ (land).", a: 'land', w: { 'will land': 'time-clause', landed: 'time-clause', 'am landing': 'time-clause' }, e: 'time-clause' },
    { t: 'fill', pt: 'decision', l: 1, p: "— I don't have any cash. — Don't worry, I ___ (pay).", a: 'will pay', w: { pay: 'present-for-will', 'am paying': 'decide' }, e: 'present-for-will' },
    { t: 'fill', pt: 'arrange', l: 1, p: 'We ___ (fly) to Kyiv on June 3rd. We already have the tickets.', a: ['are flying', 'are going to fly'], w: { fly: 'arrange', 'will fly': 'arrange', flies: 'arrange' }, e: 'arrange' },
    { t: 'fill', pt: 'plan', l: 1, p: "She ___ (study) nursing. She's already applied to a college.", a: ['is going to study', 'is studying'], w: { studies: 'will-plan', 'will study': 'will-plan' }, e: 'will-plan' },
    { t: 'fill', pt: 'evidence', l: 1, p: 'Be careful! You ___ (drop) the plate!', a: ['are going to drop', 'will drop'], w: { drop: 'evidence', 'are dropping': 'evidence' }, e: 'evidence' },
    { t: 'fill', pt: 'plan', l: 1, p: "I'm going ___ call the landlord tomorrow.", a: 'to', w: { will: 'form' }, e: 'form' },
    { t: 'fill', pt: 'predict', l: 1, p: "She'll ___ (be) here in ten minutes.", a: 'be', w: { 'to be': 'form', is: 'form', being: 'form' }, e: 'form' },
    { t: 'build', pt: 'arrange', l: 1, a: 'What are you doing this weekend?', x: ['will'], e: 'arrange' },
    { t: 'build', pt: 'time', l: 1, a: "I'll wait until you come back.", x: ['will'], e: 'time-clause' },
    { t: 'build', pt: 'plan', l: 1, a: 'We are going to paint the kitchen.', x: ['painting'], e: 'will-plan' },

    // ---------- Use
    { t: 'fill', pt: 'decision', l: 2, p: '— This box is so heavy. — Wait, I ___ (help) you.', a: 'will help', w: { help: 'present-for-will', 'am helping': 'decide', 'am going to help': 'decide' }, e: 'present-for-will' },
    { t: 'fill', pt: 'time', l: 2, p: "If it ___ (rain) tomorrow, we'll stay home.", a: 'rains', w: { 'will rain': 'time-clause', rain: 'time-clause', 'is going to rain': 'time-clause' }, e: 'time-clause' },
    { t: 'fill', pt: 'arrange', l: 2, p: '— Can you come to dinner on Friday? — Sorry, I ___ (work) late on Friday.', a: ['am working', 'am going to work'], w: { work: 'arrange', 'will work': 'arrange' }, e: 'arrange' },
    { t: 'fill', pt: 'predict', l: 2, p: 'I think it ___ (be) a great party.', a: ['will be', 'is going to be'], w: { is: 'present-for-will', be: 'form' }, e: 'present-for-will' },
    { t: 'fill', pt: 'time', l: 2, p: "We'll start dinner after Dad ___ (come) home.", a: ['comes', 'gets', 'has come'], w: { 'will come': 'time-clause', come: 'time-clause' }, e: 'time-clause' },
    { t: 'fill', pt: 'plan', l: 2, p: 'What ___ you ___ (do) with the old sofa?', a: ['are|going to do', 'will|do', 'are|doing'], w: { 'do|do': 'present-for-will' }, e: 'will-plan' },
    { t: 'fill', pt: 'evidence', l: 2, p: "She's six months pregnant. She ___ (have) a baby in March.", a: ['is going to have', 'is having', 'will have'], w: { has: 'present-for-will' }, e: 'evidence' },
    { t: 'fill', pt: 'decision', l: 2, p: "I'm so tired. I think I ___ (go) to bed.", a: ['will go', 'am going to go'], w: { go: 'present-for-will' }, e: 'present-for-will' },
    { t: 'build', pt: 'predict', l: 2, a: "I'm sure you will love it.", x: ['are'], e: 'form' },
    { t: 'fix', pt: 'time', l: 2, p: "I'll call you when I will get home.", a: ["I'll call you when I get home."], e: 'time-clause' },
    { t: 'fix', pt: 'decision', l: 2, p: "Don't worry, I help you with the bags.", a: ["Don't worry, I'll help you with the bags."], e: 'present-for-will' },
    { t: 'fix', pt: 'predict', l: 2, p: 'We will to visit you next summer.', a: ['We will visit you next summer.'], e: 'form' },
    { t: 'fix', pt: 'arrange', l: 2, p: 'I meet my friend for lunch tomorrow at one.', a: ["I'm meeting my friend for lunch tomorrow at one.", "I'm going to meet my friend for lunch tomorrow at one."], e: 'arrange' },
    { t: 'tr', pt: 'arrange', l: 2, i: "It's in your calendar. Say it with *I'm …ing*.", p: 'Meeting with the lawyer — Thursday, 10 a.m.', s: "I'm", a: ["I'm meeting the lawyer on Thursday at 10 a.m.", "I'm meeting with the lawyer on Thursday at 10 a.m.", "I'm meeting the lawyer at 10 a.m. on Thursday.", "I'm meeting with the lawyer at 10 a.m. on Thursday.", "I'm meeting the lawyer on Thursday at 10.", "I'm meeting with the lawyer on Thursday at 10.", "I'm meeting the lawyer on Thursday at ten.", "I'm meeting with the lawyer on Thursday at ten."], e: 'arrange' },
    { t: 'tr', pt: 'time', l: 2, i: 'Join with *as soon as*.', p: 'The doctor will call you. She will get the results first.', s: 'The doctor will call you as soon as', a: ['The doctor will call you as soon as she gets the results.', 'The doctor will call you as soon as she has the results.'], e: 'time-clause' },
    { t: 'tl', pt: 'decision', l: 2, uk: 'Я відчиню двері!', ru: 'Я открою дверь!', a: ["I'll open the door!", "I'll get the door!", "I'll get it!"], e: 'present-for-will' },
    { t: 'tl', pt: 'plan', l: 2, uk: 'Ми збираємося переїхати влітку.', ru: 'Мы собираемся переехать летом.', a: ["We're going to move in the summer.", "We're going to move this summer.", "We're planning to move in the summer.", "We're planning to move this summer.", "We're moving in the summer.", "We're moving this summer."], e: 'will-plan' },

    // ---------- Pro
    { t: 'fix', pt: 'time', l: 3, p: "As soon as the baby will fall asleep, I'll start cooking.", a: ["As soon as the baby falls asleep, I'll start cooking."], e: 'time-clause' },
    { t: 'fix', pt: 'evidence', l: 3, p: 'Watch out! The glass falls!', a: ['Watch out! The glass is going to fall!', 'Watch out! The glass is falling!'], e: 'evidence' },
    { t: 'fix', pt: 'arrange', l: 3, p: "Sorry, I can't. I will have dinner with my in-laws tonight.", a: ["Sorry, I can't. I'm having dinner with my in-laws tonight.", "Sorry, I can't. I'm going to have dinner with my in-laws tonight."], e: 'arrange' },
    { t: 'fix', pt: 'decision', l: 3, p: "— We're out of milk. — Really? I'm buying some on my way home.", a: ["— We're out of milk. — Really? I'll buy some on my way home.", "— We're out of milk. — Really? I'll get some on my way home."], e: 'decide' },
    { t: 'tr', pt: 'predict', l: 3, i: 'Use *will* and *probably*.', p: 'Maybe it is cheaper online.', s: 'It', a: ['It will probably be cheaper online.'], e: 'form' },
    { t: 'tr', pt: 'plan', l: 3, i: 'Say your intention with *going to*.', p: 'My plan: to finish the course by June.', s: "I'm going to", a: ["I'm going to finish the course by June."], e: 'will-plan' },
    { t: 'tr', pt: 'time', l: 3, i: 'Join with *until*.', p: 'Wait here. The nurse will call your name.', s: 'Wait here until', a: ['Wait here until the nurse calls your name.', 'Wait here until the nurse calls you.'], e: 'time-clause' },
    { t: 'tl', pt: 'arrange', l: 3, uk: 'Завтра о десятій я йду до лікаря.', ru: 'Завтра в десять я иду к врачу.', a: ["I'm going to the doctor at ten tomorrow.", "I'm going to the doctor tomorrow at ten.", "Tomorrow at ten I'm going to the doctor.", "I'm seeing the doctor at ten tomorrow.", "I'm seeing the doctor tomorrow at ten.", "Tomorrow at ten I'm seeing the doctor.", "I'm going to the doctor at 10 tomorrow.", "I'm going to the doctor tomorrow at 10.", "I have a doctor's appointment at ten tomorrow.", "I have a doctor's appointment tomorrow at ten."], e: 'arrange' },
    { t: 'tl', pt: 'time', l: 3, uk: 'Коли діти заснуть, ми подивимося фільм.', ru: 'Когда дети уснут, мы посмотрим фильм.', a: ["When the kids fall asleep, we'll watch a movie.", "When the children fall asleep, we'll watch a movie.", "When the kids are asleep, we'll watch a movie.", "When the children are asleep, we'll watch a movie.", "When the kids go to sleep, we'll watch a movie.", "We'll watch a movie when the kids fall asleep.", "We'll watch a movie when the kids are asleep.", "When the kids fall asleep, we'll watch a film.", "Once the kids fall asleep, we'll watch a movie.", "When the kids fall asleep, we're going to watch a movie."], e: 'time-clause' },
    { t: 'tl', pt: 'decision', l: 3, uk: 'Добре, я візьму цю сукню.', ru: 'Хорошо, я возьму это платье.', a: ["OK, I'll take this dress.", "Okay, I'll take this dress.", "OK, I'll take the dress.", "Okay, I'll take the dress.", "All right, I'll take this dress.", "Alright, I'll take this dress.", "Fine, I'll take this dress.", "OK, I'll take it."], e: 'present-for-will' },
    { t: 'tl', pt: 'predict', l: 3, uk: 'Я впевнена, що ти знайдеш хорошу роботу.', ru: 'Я уверена, что ты найдёшь хорошую работу.', a: ["I'm sure you'll find a good job.", "I'm sure that you'll find a good job.", "I'm confident you'll find a good job.", "I'm sure you're going to find a good job."], e: 'present-for-will' },
    { t: 'tl', pt: 'evidence', l: 3, uk: 'Обережно, ти зараз впадеш!', ru: 'Осторожно, ты сейчас упадёшь!', a: ["Careful, you're going to fall!", "Be careful, you're going to fall!", "Watch out, you're going to fall!", "Careful, you'll fall!", "Be careful, you'll fall!", "Watch out, you'll fall!"], e: 'evidence' },
    { t: 'fill', pt: 'time', l: 3, p: "I won't sign anything until I ___ (read) the contract.", a: ['read', 'have read'], w: { 'will read': 'time-clause', reading: 'time-clause' }, e: 'time-clause' },
    { t: 'fill', pt: 'plan', l: 3, p: '— Why did you buy all this paint? — I ___ (redo) the bathroom.', a: ['am going to redo', 'am redoing'], w: { 'will redo': 'will-plan', redo: 'present-for-will' }, e: 'will-plan' },
    { t: 'fill', pt: 'decision', l: 3, p: "— Sorry, we're out of soup. — Oh, then I ___ (have) the salad.", a: 'will have', w: { have: 'present-for-will', 'am having': 'decide', 'am going to have': 'decide' }, e: 'decide' },
  ],
});
