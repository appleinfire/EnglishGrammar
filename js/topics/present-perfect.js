APP.addTopic({
  id: 'pp',
  title: 'Present Perfect',
  level: 'B1',
  group: 'Tenses',
  icon: '⏳',
  about: 'have / has + 3rd form: experience, news, unfinished time',
  rule: {
    en: `**have / has + past participle** (worked, seen, been, gone).
Use it when the past is connected to **now**:
- life experience, no time given: *I've been to Chicago. Have you ever tried sushi?*
- news and results, often with *just, already, yet*: *I've lost my keys* (I don't have them now).
- a period that is not finished: *today, this week, so far*: *She's called three times today.*
- *It's the first time I've…*
Do **not** use it with a finished time (*yesterday, last year, in 2019, ago*) — that is the Past Simple.
**been or gone?** *She's been to Miami* (she went and came back). *She's gone to Miami* (she is there now).
In American English, *just, already, yet* often go with the Past Simple: *Did you eat yet? I just finished.* Both are correct.`,
    uk: `**have / has + третя форма дієслова** (worked, seen, been, gone).
Вживаємо, коли минуле пов'язане з **теперішнім**:
- життєвий досвід без вказівки часу: *I've been to Chicago. Have you ever tried sushi?*
- новини й результат, часто з *just, already, yet*: *I've lost my keys* (ключів у мене зараз немає).
- період, який ще не закінчився: *today, this week, so far*: *She's called three times today.*
- *It's the first time I've…* — «це вперше, коли я…»
**Не** вживаємо із завершеним часом (*yesterday, last year, in 2019, ago*) — там Past Simple.
**been чи gone?** *She's been to Miami* — була і повернулася. *She's gone to Miami* — поїхала і зараз там.
В американській англійській з *just, already, yet* часто вживають Past Simple: *Did you eat yet? I just finished.* Обидва варіанти правильні.`,
    ru: `**have / has + третья форма глагола** (worked, seen, been, gone).
Используем, когда прошлое связано с **настоящим**:
- жизненный опыт без указания времени: *I've been to Chicago. Have you ever tried sushi?*
- новости и результат, часто с *just, already, yet*: *I've lost my keys* (ключей у меня сейчас нет).
- период, который ещё не закончился: *today, this week, so far*: *She's called three times today.*
- *It's the first time I've…* — «это первый раз, когда я…»
**Не** используем с завершённым временем (*yesterday, last year, in 2019, ago*) — там Past Simple.
**been или gone?** *She's been to Miami* — была и вернулась. *She's gone to Miami* — уехала и сейчас там.
В американском английском с *just, already, yet* часто используют Past Simple: *Did you eat yet? I just finished.* Оба варианта верны.`,
  },
  examples: ["I've never been to California.", 'Have you ever worked at night?', "She's called the school three times this week.", "It's the first time I've driven on a highway.", "He's gone to the store. He'll be back soon."],
  trap: {
    uk: 'Я ніколи не була в Каліфорнії.',
    ru: 'Я никогда не была в Калифорнии.',
    wrong: 'I never was in California.',
    right: "I've never been to California.",
    note: {
      en: 'Ukrainian and Russian use the past tense for life experience. English uses the Present Perfect: the experience is part of your life **now**.',
      uk: 'Українською про досвід кажемо в минулому часі. Англійською — Present Perfect: цей досвід є частиною вашого життя **зараз**.',
      ru: 'По-русски об опыте говорим в прошедшем времени. По-английски — Present Perfect: этот опыт часть вашей жизни **сейчас**.',
    },
  },
  errors: {
    form: {
      en: 'After *have / has* use the **past participle** (3rd form): *seen, gone, written, eaten, drunk* — not *saw, went, wrote, ate, drank*.',
      uk: 'Після *have / has* — **третя форма** дієслова: *seen, gone, written, eaten, drunk*, а не *saw, went, wrote, ate, drank*.',
      ru: 'После *have / has* — **третья форма** глагола: *seen, gone, written, eaten, drunk*, а не *saw, went, wrote, ate, drank*.',
    },
    'has-have': {
      en: '*he, she, it, my husband, the school* → **has**. *I, you, we, they, my parents* → **have**.',
      uk: '*he, she, it, my husband, the school* → **has**. *I, you, we, they, my parents* → **have**.',
      ru: '*he, she, it, my husband, the school* → **has**. *I, you, we, they, my parents* → **have**.',
    },
    'ps-exp': {
      en: 'Life experience with no time given (*ever, never, before, how many times*) → **Present Perfect**: *Have you ever…? I\'ve never…*',
      uk: 'Досвід без вказівки часу (*ever, never, before, how many times*) → **Present Perfect**: *Have you ever…? I\'ve never…*',
      ru: 'Опыт без указания времени (*ever, never, before, how many times*) → **Present Perfect**: *Have you ever…? I\'ve never…*',
    },
    present: {
      en: 'It started in the past and still matters or continues now → **Present Perfect**, not the Present Simple.',
      uk: 'Почалося в минулому і досі триває або важливе зараз → **Present Perfect**, а не Present Simple.',
      ru: 'Началось в прошлом и всё ещё длится или важно сейчас → **Present Perfect**, а не Present Simple.',
    },
    'period-ps': {
      en: 'The period is **not finished** (*today, this week, this month, so far, since…*) → **Present Perfect**: *I\'ve had three coffees so far.*',
      uk: 'Період **ще не закінчився** (*today, this week, this month, so far, since…*) → **Present Perfect**: *I\'ve had three coffees so far.*',
      ru: 'Период **ещё не закончился** (*today, this week, this month, so far, since…*) → **Present Perfect**: *I\'ve had three coffees so far.*',
    },
    finished: {
      en: 'A **finished** time (*yesterday, last week, in 2021, two years ago, when I was…*) → **Past Simple**, never the Present Perfect: *We bought it in 2021.*',
      uk: '**Завершений** час (*yesterday, last week, in 2021, two years ago, when I was…*) → **Past Simple**, ніколи не Present Perfect: *We bought it in 2021.*',
      ru: '**Завершённое** время (*yesterday, last week, in 2021, two years ago, when I was…*) → **Past Simple**, никогда не Present Perfect: *We bought it in 2021.*',
    },
    'first-time': {
      en: '*It\'s / This is the first (second…) time* + **Present Perfect**: *It\'s the first time I\'ve seen snow.* Not *I see / I am seeing*.',
      uk: '*It\'s / This is the first (second…) time* + **Present Perfect**: *It\'s the first time I\'ve seen snow.* Не *I see / I am seeing*.',
      ru: '*It\'s / This is the first (second…) time* + **Present Perfect**: *It\'s the first time I\'ve seen snow.* Не *I see / I am seeing*.',
    },
    'been-gone': {
      en: '**been** = went and came back (*She\'s been to Miami twice*). **gone** = went and is still there (*Where\'s Mark? He\'s gone to the store.*)',
      uk: '**been** = поїхав і повернувся (*She\'s been to Miami twice*). **gone** = пішов і досі там (*Where\'s Mark? He\'s gone to the store.*)',
      ru: '**been** = съездил и вернулся (*She\'s been to Miami twice*). **gone** = ушёл и всё ещё там (*Where\'s Mark? He\'s gone to the store.*)',
    },
    'yet-already': {
      en: '**yet** — in questions and negatives, at the end: *Not yet. I haven\'t finished yet.* **already** — in positive sentences: *I\'ve already sent it.* **still** — with negatives before the verb: *I still haven\'t…*',
      uk: '**yet** — у питаннях і запереченнях, у кінці: *Not yet. I haven\'t finished yet.* **already** — у стверджувальних: *I\'ve already sent it.* **still** — із запереченням перед дієсловом: *I still haven\'t…*',
      ru: '**yet** — в вопросах и отрицаниях, в конце: *Not yet. I haven\'t finished yet.* **already** — в утвердительных: *I\'ve already sent it.* **still** — с отрицанием перед глаголом: *I still haven\'t…*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'exp', l: 1, p: '___ you ever been to Las Vegas?', a: 'Have', o: ['Did', 'Were'], w: { Did: 'ps-exp', Were: 'form' }, e: 'ps-exp' },
    { t: 'choose', pt: 'exp', l: 1, p: 'My husband ___ never tried Mexican food.', a: 'has', o: ['have', 'is'], w: { have: 'has-have', is: 'form' }, e: 'has-have' },
    { t: 'choose', pt: 'news', l: 1, p: 'Oh no, I ___ my phone! Can you call it?', a: 'have lost', o: ['have lose', 'lose'], w: { 'have lose': 'form', lose: 'present' }, e: 'form' },
    { t: 'choose', pt: 'period', l: 1, p: 'She ___ three emails to the school this week.', a: 'has written', o: ['has wrote', 'writes'], w: { 'has wrote': 'form', writes: 'period-ps' }, e: 'form' },
    { t: 'choose', pt: 'gone', l: 1, p: "Where's Mark? — He ___ to the store. He'll be back soon.", a: 'has gone', o: ['has been'], w: { 'has been': 'been-gone' }, e: 'been-gone' },
    { t: 'choose', pt: 'first', l: 1, p: 'This is the first time I ___ snow.', a: 'have seen', o: ['see', 'am seeing'], w: { see: 'first-time', 'am seeing': 'first-time' }, e: 'first-time' },
    { t: 'fill', pt: 'form', l: 1, p: 'I ___ (see) this movie three times.', a: 'have seen', w: { saw: 'ps-exp', 'have saw': 'form', seen: 'form' }, e: 'form' },
    { t: 'fill', pt: 'exp', l: 1, p: '___ you ever ___ (eat) sushi?', a: 'Have|eaten', w: { 'Did|eat': 'ps-exp', 'Have|ate': 'form', 'Have|eat': 'form' }, e: 'ps-exp' },
    { t: 'fill', pt: 'news', l: 1, p: 'She ___ (not / finish) her homework yet.', a: "hasn't finished", am: "didn't finish", w: { "haven't finished": 'has-have', "hasn't finish": 'form' }, e: 'form' },
    { t: 'fill', pt: 'period', l: 1, p: 'I ___ (drink) three cups of coffee so far today.', a: 'have drunk', w: { drank: 'period-ps', 'have drank': 'form', drink: 'period-ps' }, e: 'period-ps' },
    { t: 'fill', pt: 'exp', l: 1, p: 'My parents ___ never ___ (be) to the US.', a: 'have|been', w: { 'has|been': 'has-have', 'have|be': 'form', 'have|went': 'form' }, e: 'form' },
    { t: 'fill', pt: 'news', l: 1, p: 'I ___ just ___ (send) you the file.', a: 'have|sent', w: { 'have|send': 'form', 'has|sent': 'has-have' }, e: 'form' },
    { t: 'fill', pt: 'gone', l: 1, p: "Lisa isn't here. She ___ (go) home.", a: 'has gone', am: 'went', w: { 'has been': 'been-gone', 'has went': 'form' }, e: 'been-gone' },
    { t: 'fill', pt: 'first', l: 1, p: "It's the first time we ___ (fly) business class.", a: 'have flown', w: { fly: 'first-time', flew: 'first-time', 'have flew': 'form', 'are flying': 'first-time' }, e: 'first-time' },
    { t: 'build', pt: 'exp', l: 1, a: 'Have you ever been to Canada?', x: ['did'], e: 'ps-exp' },
    { t: 'build', pt: 'news', l: 1, a: "I haven't finished it yet.", x: ['already'], e: 'yet-already' },
    { t: 'build', pt: 'period', l: 1, a: 'She has called me twice this week.', x: ['calls'], e: 'period-ps' },

    // ---------- Use
    { t: 'fill', pt: 'period', l: 2, p: 'How many times ___ you ___ (call) the insurance company this month?', a: 'have|called', w: { 'did|call': 'period-ps', 'have|call': 'form' }, e: 'period-ps' },
    { t: 'fill', pt: 'period', l: 2, p: 'We ___ (live) in three different apartments since we came to the US.', a: ['have lived', 'have been living'], w: { lived: 'period-ps', live: 'present' }, e: 'period-ps' },
    { t: 'fill', pt: 'exp', l: 2, p: 'This is the best pizza I ___ ever ___ (have).', a: 'have|had', w: { 'have|have': 'form', 'had|had': 'ps-exp' }, e: 'ps-exp' },
    { t: 'fill', pt: 'period', l: 2, p: "Sorry, I can't come — I ___ (not / feel) well since Monday.", a: ["haven't felt", "haven't been feeling"], w: { "don't feel": 'present', "didn't feel": 'period-ps', "am not feeling": 'present' }, e: 'present' },
    { t: 'fill', pt: 'period', l: 2, p: 'Tom is still in Chicago. He ___ (be) there all week.', a: 'has been', w: { is: 'present', was: 'period-ps', 'has gone': 'been-gone' }, e: 'present' },
    { t: 'fill', pt: 'news', l: 2, p: 'Wow, your English ___ (get) so much better!', a: ['has gotten', 'has got'], am: 'got', w: { gets: 'present', 'is getting': 'present' }, e: 'present', n: "*gotten* is the American participle of *get*: *It's gotten better.*" },
    { t: 'fill', pt: 'news', l: 2, p: '— Can I borrow your laptop? — Sorry, I ___ (already / lend) it to Max.', a: 'have already lent', am: 'already lent', w: { 'have already lended': 'form', 'already lend': 'form' }, e: 'form' },
    { t: 'fill', pt: 'finished', l: 2, p: 'We ___ (move) to Texas in 2022.', a: 'moved', w: { 'have moved': 'finished', 'have been moving': 'finished' }, e: 'finished' },
    { t: 'build', pt: 'period', l: 2, a: 'How many times have you been late this month?', x: ['did'], e: 'period-ps' },
    { t: 'build', pt: 'exp', l: 2, a: 'She has never driven a car.', x: ['drove'], e: 'form' },
    { t: 'fix', pt: 'form', l: 2, p: 'I have saw this show before.', a: 'I have seen this show before.', e: 'form' },
    { t: 'fix', pt: 'form', l: 2, p: 'She has went to the bank.', a: ['She has gone to the bank.', 'She went to the bank.'], e: 'form' },
    { t: 'fix', pt: 'first', l: 2, p: "It's the first time I visit a dentist in America.", a: ["It's the first time I've visited a dentist in America.", "It's the first time I've been to a dentist in America."], e: 'first-time' },
    { t: 'tr', pt: 'exp', l: 2, i: 'Make it a question with *ever*.', p: 'You have worked night shifts.', a: 'Have you ever worked night shifts?', e: 'ps-exp' },
    { t: 'tr', pt: 'news', l: 2, i: 'Make it negative. Use *yet*.', p: 'The landlord has fixed the heater.', a: "The landlord hasn't fixed the heater yet.", am: "The landlord didn't fix the heater yet.", e: 'yet-already' },
    { t: 'tl', pt: 'exp', l: 2, uk: 'Ти коли-небудь був у Флориді?', ru: 'Ты когда-нибудь был во Флориде?', a: ['Have you ever been to Florida?', 'Have you ever been in Florida?'], e: 'ps-exp' },
    { t: 'tl', pt: 'news', l: 2, uk: 'Вона ще не відповіла на мій лист.', ru: 'Она ещё не ответила на моё письмо.', a: ["She hasn't answered my email yet.", "She hasn't replied to my email yet.", "She hasn't answered my letter yet.", "She hasn't replied to my letter yet.", "She hasn't responded to my email yet.", "She still hasn't answered my email.", "She still hasn't replied to my email."], am: ["She didn't answer my email yet.", "She didn't reply to my email yet."], e: 'yet-already' },
    { t: 'tl', pt: 'news', l: 2, uk: 'Ти бачила мої окуляри? Я не можу їх знайти.', ru: 'Ты видела мои очки? Я не могу их найти.', a: ["Have you seen my glasses? I can't find them."], am: ["Did you see my glasses? I can't find them."], e: 'present' },

    // ---------- Pro
    { t: 'fix', pt: 'finished', l: 3, p: 'We have bought this house in 2021.', a: 'We bought this house in 2021.', e: 'finished' },
    { t: 'fix', pt: 'finished', l: 3, p: 'They have arrived yesterday evening.', a: 'They arrived yesterday evening.', e: 'finished' },
    { t: 'fix', pt: 'gone', l: 3, p: "My daughter has been to school, she'll be home at three.", a: ["My daughter has gone to school, she'll be home at three.", "My daughter is at school, she'll be home at three."], e: 'been-gone' },
    { t: 'fix', pt: 'first', l: 3, p: "This is the first time I'm driving on a highway.", a: ["This is the first time I've driven on a highway.", "This is the first time I've ever driven on a highway."], e: 'first-time' },
    { t: 'tr', pt: 'first', l: 3, i: 'Start with *It\'s the first time…*', p: 'I have never cooked a turkey before.', s: "It's the first time", a: ["It's the first time I've cooked a turkey.", "It's the first time I've ever cooked a turkey."], e: 'first-time' },
    { t: 'tr', pt: 'gone', l: 3, i: 'Say it with the Present Perfect of *go*.', p: 'My parents are not here now. They are in Ukraine.', a: ['My parents have gone to Ukraine.'], e: 'been-gone' },
    { t: 'tr', pt: 'first', l: 3, i: 'Rewrite with *never* and the Present Perfect.', p: 'This is my first time in a hot-air balloon.', s: 'I', a: ["I've never been in a hot-air balloon before.", "I've never been in a hot-air balloon.", "I've never flown in a hot-air balloon before.", "I've never been in a hot air balloon before."], e: 'first-time' },
    { t: 'tl', pt: 'period', l: 3, uk: 'Я вже тричі змінювала пароль цього тижня.', ru: 'Я уже три раза меняла пароль на этой неделе.', a: ["I've already changed my password three times this week.", "I've changed my password three times this week already.", "I've changed my password three times this week.", "I've already changed the password three times this week.", "I've changed the password three times this week."], e: 'period-ps' },
    { t: 'tl', pt: 'news', l: 3, uk: 'Ми ще не вирішили, куди поїдемо влітку.', ru: 'Мы ещё не решили, куда поедем летом.', a: ["We haven't decided where to go this summer yet.", "We haven't decided where we're going this summer yet.", "We haven't decided yet where to go this summer.", "We haven't decided yet where we're going this summer.", "We haven't decided where we'll go this summer yet.", "We haven't yet decided where to go this summer.", "We haven't decided where to go in the summer yet.", "We haven't decided yet where to go in the summer."], am: ["We didn't decide yet where to go this summer."], e: 'yet-already' },
    { t: 'tl', pt: 'gone', l: 3, uk: 'Він щойно пішов додому.', ru: 'Он только что ушёл домой.', a: ["He's just gone home.", "He has just gone home.", "He's just left for home."], am: ['He just went home.', 'He just left for home.'], e: 'been-gone' },
    { t: 'tl', pt: 'exp', l: 3, uk: 'Скільки разів ти був у Нью-Йорку?', ru: 'Сколько раз ты был в Нью-Йорке?', a: ['How many times have you been to New York?', 'How many times have you been in New York?'], e: 'ps-exp' },
    { t: 'tl', pt: 'first', l: 3, uk: 'Це перший раз, коли я подаю податки сама.', ru: 'Это первый раз, когда я подаю налоги сама.', a: ["It's the first time I've filed my taxes myself.", "This is the first time I've filed my taxes myself.", "It's the first time I've done my taxes myself.", "This is the first time I've done my taxes myself.", "It's the first time I've filed my taxes on my own.", "This is the first time I've filed my taxes on my own.", "It's the first time I've filed taxes myself.", "It's the first time I've done my own taxes."], e: 'first-time' },
    { t: 'tl', pt: 'exp', l: 3, uk: 'Я ніколи не була в Каліфорнії, а мій чоловік був там двічі.', ru: 'Я никогда не была в Калифорнии, а мой муж был там дважды.', a: ["I've never been to California, but my husband has been there twice.", "I've never been to California, and my husband has been there twice.", "I've never been to California, but my husband has been there two times.", "I've never been to California, while my husband has been there twice."], e: 'ps-exp' },
    { t: 'fill', pt: 'news', l: 3, p: "— Is the report ready? — Not ___. I'll send it in an hour.", a: 'yet', w: { already: 'yet-already', still: 'yet-already' }, e: 'yet-already' },
    { t: 'fill', pt: 'gone', l: 3, p: 'She ___ (go) to the gym four times so far this month — a record for her!', a: 'has been', w: { 'has gone': 'been-gone', went: 'period-ps', goes: 'period-ps' }, e: 'been-gone', n: '*has been to the gym four times* = four visits, and she came back each time.' },
  ],
});
