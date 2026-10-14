APP.addTopic({
  id: 'subj',
  title: "I suggest he go, It's time we left",
  level: 'C1',
  group: 'Conditionals',
  icon: '🎩',
  about: "suggest that he go, it's time, would rather, as if, had better",
  rule: {
    en: `Some expressions need a special verb form:
- **suggest / recommend / insist / require / it's important / it's essential + that** → **base form** for every person: *I suggest that he **go**. It's essential that she **be** there. They insisted that we **not pay** in cash.* (Very common in American English; British English often uses *should go*.)
- **It's time / It's high time / It's about time + subject + past**: *It's time we **left**.* Or *It's time **to leave**.*
- **would rather + base form** (your own choice): *I'd rather **stay** home **than** go out.* **would rather + someone + past** (what you want others to do): *I'd rather you **didn't smoke** here.*
- **as if / as though + past** when it isn't true: *He talks as if he **were** the boss.* When it's probably true → normal tense: *It looks as if it's going to rain.*
- **had better + base form** (advice with a warning): *You'**d better go**. You'**d better not be** late.*`,
    uk: `Деякі вирази вимагають особливої форми дієслова:
- **suggest / recommend / insist / require / it's important / it's essential + that** → **початкова форма** для всіх осіб: *I suggest that he **go**. It's essential that she **be** there* — «Важливо, щоб вона там була». (Дуже поширено в американській; британці часто кажуть *should go*.)
- **It's time / It's high time / It's about time + підмет + минулий час**: *It's time we **left*** — «Нам пора йти». Або *It's time **to leave**.*
- **would rather + дієслово** (власний вибір): *I'd rather **stay** home **than** go out* — «Я б краще залишилася вдома». **would rather + хтось + минулий час** (чого хочемо від інших): *I'd rather you **didn't smoke** here* — «Я б не хотіла, щоб ти тут курив».
- **as if / as though + минулий час**, коли це неправда: *He talks as if he **were** the boss* — «Він говорить так, ніби він начальник». Коли це, мабуть, правда → звичайний час: *It looks as if it's going to rain.*
- **had better + дієслово** (порада з попередженням): *You'**d better go*** — «Тобі краще піти». *You'**d better not be** late.*`,
    ru: `Некоторые выражения требуют особой формы глагола:
- **suggest / recommend / insist / require / it's important / it's essential + that** → **начальная форма** для всех лиц: *I suggest that he **go**. It's essential that she **be** there* — «Важно, чтобы она там была». (Очень распространено в американском; британцы часто говорят *should go*.)
- **It's time / It's high time / It's about time + подлежащее + прошедшее время**: *It's time we **left*** — «Нам пора идти». Или *It's time **to leave**.*
- **would rather + глагол** (собственный выбор): *I'd rather **stay** home **than** go out* — «Я бы лучше осталась дома». **would rather + кто-то + прошедшее** (чего хотим от других): *I'd rather you **didn't smoke** here* — «Я бы предпочла, чтобы ты здесь не курил».
- **as if / as though + прошедшее**, когда это неправда: *He talks as if he **were** the boss* — «Он говорит так, будто он начальник». Когда это, скорее всего, правда → обычное время: *It looks as if it's going to rain.*
- **had better + глагол** (совет с предупреждением): *You'**d better go*** — «Тебе лучше уйти». *You'**d better not be** late.*`,
  },
  examples: ['I suggest that he go to the doctor.', "It's time we left.", "I'd rather you didn't smoke here.", 'He talks as if he were the boss.', "You'd better not be late."],
  trap: {
    uk: 'Тобі краще сходити до лікаря.',
    ru: 'Тебе лучше сходить к врачу.',
    wrong: 'You better to go to the doctor.',
    right: "You'd better go to the doctor.",
    note: {
      en: '*Краще / лучше* becomes **had better + verb**, with no *to*. In fast American speech you will hear *You better go*, but write *You\'d better go*.',
      uk: '«Тобі краще…» — це **had better + дієслово**, без *to*. У швидкій американській мові почуєте *You better go*, але пишіть *You\'d better go*.',
      ru: '«Тебе лучше…» — это **had better + глагол**, без *to*. В быстрой американской речи услышите *You better go*, но пишите *You\'d better go*.',
    },
  },
  errors: {
    mand: {
      en: 'After **suggest, recommend, insist, require, it\'s important / essential that** → **base form** for every person: *that he **take**, that she **be**, that we **not pay***. No *-s*, no *to*, not *is*.',
      uk: 'Після **suggest, recommend, insist, require, it\'s important / essential that** → **початкова форма** для всіх осіб: *that he **take**, that she **be**, that we **not pay***. Без *-s*, без *to*, не *is*.',
      ru: 'После **suggest, recommend, insist, require, it\'s important / essential that** → **начальная форма** для всех лиц: *that he **take**, that she **be**, that we **not pay***. Без *-s*, без *to*, не *is*.',
    },
    time: {
      en: '**It\'s (high / about) time + subject + past**: *It\'s time we **went**. It\'s about time you **got** a job.* Or **It\'s time to + verb**.',
      uk: '**It\'s (high / about) time + підмет + минулий час**: *It\'s time we **went**. It\'s about time you **got** a job.* Або **It\'s time to + дієслово**.',
      ru: '**It\'s (high / about) time + подлежащее + прошедшее**: *It\'s time we **went**. It\'s about time you **got** a job.* Или **It\'s time to + глагол**.',
    },
    rather: {
      en: '**would rather + base form** (no *to*), then **than**: *I\'d rather stay than go.* About someone else → **would rather + person + past**: *I\'d rather you **didn\'t** tell her.*',
      uk: '**would rather + дієслово** (без *to*), далі **than**: *I\'d rather stay than go.* Про іншу людину → **would rather + людина + минулий час**: *I\'d rather you **didn\'t** tell her.*',
      ru: '**would rather + глагол** (без *to*), дальше **than**: *I\'d rather stay than go.* О другом человеке → **would rather + человек + прошедшее**: *I\'d rather you **didn\'t** tell her.*',
    },
    asif: {
      en: 'Not true → **as if / as though + past** (*were* is the formal choice): *as if he were the boss.* Probably true → normal tense: *It looks as if it\'s going to rain.*',
      uk: 'Неправда → **as if / as though + минулий час** (*were* — формальний варіант): *as if he were the boss.* Мабуть, правда → звичайний час: *It looks as if it\'s going to rain.*',
      ru: 'Неправда → **as if / as though + прошедшее** (*were* — формальный вариант): *as if he were the boss.* Скорее всего правда → обычное время: *It looks as if it\'s going to rain.*',
    },
    better: {
      en: '**had better + base form**, no *to*: *You\'d better go.* Negative: **had better not**: *You\'d better not be late* (not *don\'t be*).',
      uk: '**had better + дієслово** без *to*: *You\'d better go.* Заперечення: **had better not**: *You\'d better not be late* (не *don\'t be*).',
      ru: '**had better + глагол** без *to*: *You\'d better go.* Отрицание: **had better not**: *You\'d better not be late* (не *don\'t be*).',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'mand', l: 1, p: 'The doctor suggested that he ___ more exercise.', a: 'get', o: ['gets', 'to get'], w: { gets: 'mand', 'to get': 'mand' }, e: 'mand' },
    { t: 'choose', pt: 'time', l: 1, p: "It's late. It's time we ___ home.", a: 'went', o: ['go', 'will go'], w: { go: 'time', 'will go': 'time' }, e: 'time' },
    { t: 'choose', pt: 'rather', l: 1, p: "I'd rather ___ home tonight.", a: 'stay', o: ['to stay', 'staying'], w: { 'to stay': 'rather', staying: 'rather' }, e: 'rather' },
    { t: 'choose', pt: 'asif', l: 1, p: "He talks as if he ___ the boss, but he isn't.", a: 'were', o: ['is', 'will be'], w: { is: 'asif', 'will be': 'asif' }, e: 'asif' },
    { t: 'choose', pt: 'better', l: 1, p: "You'd better ___ late for the interview.", a: 'not be', o: ["don't be", 'not to be'], w: { "don't be": 'better', 'not to be': 'better' }, e: 'better' },
    { t: 'choose', pt: 'mand', l: 1, p: "It's important that every student ___ a photo ID.", a: 'have', o: ['to have', 'having'], w: { 'to have': 'mand', having: 'mand' }, e: 'mand' },
    { t: 'fill', pt: 'mand', l: 1, p: 'The landlord insisted that we ___ (pay) the rent by the first of the month.', a: ['pay', 'should pay'], w: { 'to pay': 'mand', pays: 'mand' }, e: 'mand' },
    { t: 'fill', pt: 'time', l: 1, p: "It's about time you ___ (get) a real job.", a: 'got', w: { get: 'time', 'will get': 'time' }, e: 'time' },
    { t: 'fill', pt: 'rather', l: 1, p: "I'd rather you ___ (not / tell) anyone about this.", a: "didn't tell", w: { "don't tell": 'rather', 'not tell': 'rather', 'not to tell': 'rather' }, e: 'rather' },
    { t: 'fill', pt: 'better', l: 1, p: "It's going to rain. You ___ take an umbrella.", a: ["'d better", 'had better'], am: 'better', w: { 'better to': 'better', 'should better': 'better' }, e: 'better' },
    { t: 'fill', pt: 'asif', l: 1, p: "She looks as though she ___ (not / sleep) for days.", a: ["hasn't slept", "hadn't slept"], w: { "didn't sleep": 'asif', "doesn't sleep": 'asif' }, e: 'asif' },
    { t: 'fill', pt: 'mand', l: 1, p: 'It is essential that she ___ (be) at the meeting.', a: ['be', 'should be'], w: { is: 'mand', 'to be': 'mand' }, e: 'mand' },
    { t: 'fill', pt: 'rather', l: 1, p: 'Would you rather ___ (go) out or eat at home?', a: 'go', w: { 'to go': 'rather', going: 'rather' }, e: 'rather' },
    { t: 'build', pt: 'better', l: 1, a: 'You had better call your mom.', x: ['to'], e: 'better' },
    { t: 'build', pt: 'time', l: 1, a: 'It is time we went to bed.', x: ['go'], e: 'time' },
    { t: 'build', pt: 'mand', l: 1, a: 'I suggest that she see a specialist.', x: ['sees'], e: 'mand' },

    // ---------- Use
    { t: 'fill', pt: 'mand', l: 2, p: 'The school requires that every child ___ (be) vaccinated.', a: 'be', w: { is: 'mand', 'to be': 'mand', are: 'mand' }, e: 'mand' },
    { t: 'fill', pt: 'time', l: 2, p: "It's high time the city ___ (fix) this road.", a: 'fixed', w: { fix: 'time', fixes: 'time', 'will fix': 'time' }, e: 'time' },
    { t: 'fill', pt: 'rather', l: 2, p: 'My husband would rather we ___ (live) closer to the city.', a: 'lived', w: { live: 'rather', 'to live': 'rather' }, e: 'rather' },
    { t: 'fill', pt: 'asif', l: 2, p: "Don't talk to me as if I ___ (be) a child!", a: ['were', 'was'], w: { am: 'asif', 'will be': 'asif' }, e: 'asif' },
    { t: 'fill', pt: 'better', l: 2, p: "You'd better ___ (not / forget) your passport.", a: 'not forget', w: { "don't forget": 'better', 'not to forget': 'better', 'not forgetting': 'better' }, e: 'better' },
    { t: 'fill', pt: 'rather', l: 2, p: "I'd rather walk ___ take the bus.", a: 'than', w: { that: 'rather', then: 'rather' }, e: 'rather' },
    { t: 'build', pt: 'rather', l: 2, a: 'I would rather you did not smoke in the car.', x: ['do'], e: 'rather' },
    { t: 'build', pt: 'asif', l: 2, a: 'He acts as if he owned the place.', x: ['is'], e: 'asif' },
    { t: 'fix', pt: 'mand', l: 2, p: 'The doctor recommended that he takes a week off.', a: ['The doctor recommended that he take a week off.', 'The doctor recommended that he should take a week off.'], n: 'British English often allows *takes* here. Formal American English uses the base form: *that he take*.', e: 'mand' },
    { t: 'fix', pt: 'better', l: 2, p: 'You better to see a doctor about that cough.', a: ["You'd better see a doctor about that cough."], am: ['You better see a doctor about that cough.'], e: 'better' },
    { t: 'fix', pt: 'time', l: 2, p: "It's time you go to bed.", a: ["It's time you went to bed.", "It's time for you to go to bed.", "It's time to go to bed."], e: 'time' },
    { t: 'fix', pt: 'rather', l: 2, p: 'I would rather to work from home.', a: ['I would rather work from home.'], e: 'rather' },
    { t: 'tr', pt: 'time', l: 2, i: "Use *It's time + past*.", p: 'You really should start saving money.', s: "It's", a: ["It's time you started saving money.", "It's high time you started saving money.", "It's about time you started saving money.", "It's time for you to start saving money."], e: 'time' },
    { t: 'tr', pt: 'rather', l: 2, i: 'Use *would rather + someone + past*.', p: "Please don't call me after 10 p.m.", s: "I'd rather", a: ["I'd rather you didn't call me after 10 p.m.", "I'd rather you didn't call me after 10."], e: 'rather' },
    { t: 'tl', pt: 'better', l: 2, uk: 'Тобі краще сходити до лікаря.', ru: 'Тебе лучше сходить к врачу.', a: ["You'd better go to the doctor.", "You'd better see a doctor.", "You'd better go see a doctor.", "You'd better go to a doctor.", 'You should go to the doctor.', 'You should see a doctor.', 'You should go see a doctor.'], am: ['You better go to the doctor.', 'You better see a doctor.', 'You better go see a doctor.'], e: 'better' },
    { t: 'tl', pt: 'mand', l: 2, uk: 'Лікар наполіг, щоб я залишилася в лікарні.', ru: 'Врач настоял, чтобы я осталась в больнице.', a: ['The doctor insisted that I stay in the hospital.', 'The doctor insisted I stay in the hospital.', 'The doctor insisted that I remain in the hospital.', 'The doctor insisted that I should stay in the hospital.', 'The doctor insisted on my staying in the hospital.', 'The doctor insisted on me staying in the hospital.'], e: 'mand' },

    // ---------- Pro
    { t: 'fix', pt: 'mand', l: 3, p: "It's essential that he is here by eight.", a: ["It's essential that he be here by eight.", "It's essential that he should be here by eight."], n: 'In British English *that he is* is common. Formal American English uses *that he be*.', e: 'mand' },
    { t: 'fix', pt: 'asif', l: 3, p: 'She spends money as if she is a millionaire.', a: ['She spends money as if she were a millionaire.', 'She spends money as if she was a millionaire.', 'She spends money as though she were a millionaire.', 'She spends money as though she was a millionaire.'], e: 'asif' },
    { t: 'fix', pt: 'rather', l: 3, p: "I'd rather you don't tell my mom.", a: ["I'd rather you didn't tell my mom."], e: 'rather' },
    { t: 'fix', pt: 'better', l: 3, p: "We had better to leave now, or we'll miss the train.", a: ["We had better leave now, or we'll miss the train."], e: 'better' },
    { t: 'tr', pt: 'mand', l: 3, i: 'Use *suggest that + base form*.', p: '"You should talk to a lawyer," my friend told me.', s: 'My friend suggested', a: ['My friend suggested that I talk to a lawyer.', 'My friend suggested I talk to a lawyer.', 'My friend suggested that I should talk to a lawyer.', 'My friend suggested I should talk to a lawyer.'], e: 'mand' },
    { t: 'tr', pt: 'asif', l: 3, i: "Use *as if + past* (it isn't true).", p: "He behaves like he's my father, but he isn't.", s: 'He behaves', a: ['as if he were', 'as if he was', 'as though he were', 'as though he was'].flatMap((x) => [`He behaves ${x} my father.`, `He behaves ${x} my father, but he isn't.`]), e: 'asif' },
    { t: 'tr', pt: 'better', l: 3, i: 'Use *had better not*.', p: "Don't be late again, or you'll lose your job.", s: "You'd better", a: ["You'd better not be late again, or you'll lose your job.", "You'd better not be late again."], e: 'better' },
    { t: 'tr', pt: 'mand', l: 3, i: 'Use *It is important that + base form*.', p: 'Everyone must read the safety rules.', s: 'It is important that', a: ['It is important that everyone read the safety rules.', 'It is important that everyone should read the safety rules.'], e: 'mand' },
    { t: 'tl', pt: 'time', l: 3, uk: 'Нам давно пора переїхати.', ru: 'Нам давно пора переехать.', a: ['high time', 'about time'].flatMap((t) => [`It's ${t} we moved.`, `It's ${t} we moved out.`, `It's ${t} for us to move.`, `It's ${t} we moved somewhere else.`]), e: 'time' },
    { t: 'tl', pt: 'rather', l: 3, uk: 'Я б краще залишилася вдома, ніж ішла на цю вечірку.', ru: 'Я бы лучше осталась дома, чем пошла на эту вечеринку.', a: ['stay home', 'stay at home'].flatMap((s) => ['this party', 'that party', 'the party'].map((p) => `I'd rather ${s} than go to ${p}.`)), e: 'rather' },
    { t: 'tl', pt: 'asif', l: 3, uk: 'Вона поводиться так, ніби нічого не сталося.', ru: 'Она ведёт себя так, будто ничего не случилось.', a: ['She acts', 'She is acting', 'She behaves', 'She is behaving'].flatMap((s) => ['as if', 'as though', 'like'].flatMap((c) => ['nothing happened', 'nothing has happened', 'nothing had happened'].map((h) => `${s} ${c} ${h}.`))), e: 'asif' },
    { t: 'choose', pt: 'time', l: 3, p: "It's high time somebody ___ him the truth.", a: 'told', o: ['tells', 'will tell'], w: { tells: 'time', 'will tell': 'time' }, e: 'time' },
    { t: 'choose', pt: 'mand', l: 3, p: 'The judge ordered that the man ___ released.', a: 'be', o: ['is', 'to be'], w: { is: 'mand', 'to be': 'mand' }, e: 'mand' },
    { t: 'fill', pt: 'asif', l: 3, p: 'Look at those clouds. It looks as if it ___ (go) to rain.', a: ['is going', "'s going"], w: { goes: 'asif', 'will go': 'asif', went: 'asif' }, e: 'asif' },
    { t: 'fill', pt: 'better', l: 3, p: "We'd better ___ (leave) now, or we'll hit traffic.", a: 'leave', w: { 'to leave': 'better', leaving: 'better' }, e: 'better' },
    { t: 'choose', pt: 'rather', l: 3, p: 'Would you rather I ___ you tomorrow?', a: 'called', o: ['call', 'will call'], w: { call: 'rather', 'will call': 'rather' }, e: 'rather' },
  ],
});
