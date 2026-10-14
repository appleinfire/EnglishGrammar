APP.addTopic({
  id: 'gi',
  title: 'Verb patterns: -ing or to?',
  level: 'B1',
  group: 'Verb patterns',
  icon: '🔗',
  about: 'enjoy cooking, decide to go, want you to…',
  rule: {
    en: `After some verbs comes **-ing**, after others **to + verb**. Learn them in groups:
- **-ing**: *enjoy, mind, avoid, finish, keep, suggest, consider, practice, can't stand*: *I enjoy working in the garden.*
- **to + verb**: *want, need, decide, plan, hope, agree, promise, refuse, afford, learn, would like*: *We decided to buy a car.*
- After a **preposition** → **-ing**: *good at cooking, interested in learning, thank you for helping, before leaving, instead of taking, look forward to seeing, be used to getting up*.
- **Why?** (purpose) → **to + verb**: *I came to the US **to work**.* Not *for work* / *for to work*.
- **want / would like + person + to**: *I want **you to call** me.* Not *I want that you call*.
- **make / let + person + verb** (no *to*): *It made me cry. Let me explain.*
- Meaning changes: *stop smoking* (quit) / *stop to smoke* (stop in order to smoke); *remember to lock* (don't forget) / *remember seeing* (a memory).`,
    uk: `Після одних дієслів іде **-ing**, після інших — **to + дієслово**. Вчіть групами:
- **-ing**: *enjoy, mind, avoid, finish, keep, suggest, consider, practice, can't stand*: *I enjoy working in the garden.*
- **to + дієслово**: *want, need, decide, plan, hope, agree, promise, refuse, afford, learn, would like*: *We decided to buy a car.*
- Після **прийменника** → **-ing**: *good at cooking, interested in learning, thank you for helping, before leaving, instead of taking, look forward to seeing, be used to getting up*.
- **Навіщо?** (мета) → **to + дієслово**: *I came to the US **to work*** — «щоб працювати». Не *for work* / *for to work*.
- **want / would like + особа + to**: *I want **you to call** me* — «Я хочу, щоб ти подзвонив». Не *I want that you call*.
- **make / let + особа + дієслово** (без *to*): *It made me cry. Let me explain.*
- Зміна значення: *stop smoking* (кинути палити) / *stop to smoke* (зупинитися, щоб закурити); *remember to lock* (не забути зачинити) / *remember seeing* (пам'ятати, як бачив).`,
    ru: `После одних глаголов идёт **-ing**, после других — **to + глагол**. Учите группами:
- **-ing**: *enjoy, mind, avoid, finish, keep, suggest, consider, practice, can't stand*: *I enjoy working in the garden.*
- **to + глагол**: *want, need, decide, plan, hope, agree, promise, refuse, afford, learn, would like*: *We decided to buy a car.*
- После **предлога** → **-ing**: *good at cooking, interested in learning, thank you for helping, before leaving, instead of taking, look forward to seeing, be used to getting up*.
- **Зачем?** (цель) → **to + глагол**: *I came to the US **to work*** — «чтобы работать». Не *for work* / *for to work*.
- **want / would like + лицо + to**: *I want **you to call** me* — «Я хочу, чтобы ты позвонил». Не *I want that you call*.
- **make / let + лицо + глагол** (без *to*): *It made me cry. Let me explain.*
- Смена значения: *stop smoking* (бросить курить) / *stop to smoke* (остановиться, чтобы закурить); *remember to lock* (не забыть закрыть) / *remember seeing* (помнить, как видел).`,
  },
  examples: ['I enjoy working in the garden.', 'We decided to buy a new car.', "I'm looking forward to seeing you.", 'I want you to call me.', 'I came to the US to work as a nurse.'],
  trap: {
    uk: 'Я хочу, щоб ти мені допоміг.',
    ru: 'Я хочу, чтобы ты мне помог.',
    wrong: 'I want that you help me.',
    right: 'I want you to help me.',
    note: {
      en: 'Ukrainian *щоб* and Russian *чтобы* make people say *want that you…*. In English it is **want + person + to + verb**.',
      uk: 'Українське *щоб* підштовхує сказати *want that you…*. Англійською: **want + особа + to + дієслово**.',
      ru: 'Русское *чтобы* подталкивает сказать *want that you…*. По-английски: **want + лицо + to + глагол**.',
    },
  },
  errors: {
    ing: {
      en: 'These verbs take **-ing**: *enjoy, mind, avoid, finish, keep, suggest, consider, practice, can\'t stand*: *Have you considered moving?*',
      uk: 'Ці дієслова вимагають **-ing**: *enjoy, mind, avoid, finish, keep, suggest, consider, practice, can\'t stand*: *Have you considered moving?*',
      ru: 'Эти глаголы требуют **-ing**: *enjoy, mind, avoid, finish, keep, suggest, consider, practice, can\'t stand*: *Have you considered moving?*',
    },
    to: {
      en: 'These verbs take **to + verb**: *want, need, decide, plan, hope, agree, promise, refuse, afford, learn*: *She refused to sign.*',
      uk: 'Ці дієслова вимагають **to + дієслово**: *want, need, decide, plan, hope, agree, promise, refuse, afford, learn*: *She refused to sign.*',
      ru: 'Эти глаголы требуют **to + глагол**: *want, need, decide, plan, hope, agree, promise, refuse, afford, learn*: *She refused to sign.*',
    },
    'prep-ing': {
      en: 'After a **preposition** (*in, at, of, for, about, before, after, without, instead of*) the verb takes **-ing**. In *look forward to* and *be used to*, *to* is a preposition too: *I look forward to seeing you.*',
      uk: 'Після **прийменника** (*in, at, of, for, about, before, after, without, instead of*) дієслово з **-ing**. У *look forward to* і *be used to* слово *to* теж прийменник: *I look forward to seeing you.*',
      ru: 'После **предлога** (*in, at, of, for, about, before, after, without, instead of*) глагол с **-ing**. В *look forward to* и *be used to* слово *to* тоже предлог: *I look forward to seeing you.*',
    },
    purpose: {
      en: 'To say **why** (purpose) → **to + verb**: *I went to the pharmacy to buy medicine. I came here to work.* Not *for buy / for buying / for to buy*.',
      uk: 'Щоб сказати **навіщо** (мета) → **to + дієслово**: *I went to the pharmacy to buy medicine. I came here to work.* Не *for buy / for buying / for to buy*.',
      ru: 'Чтобы сказать **зачем** (цель) → **to + глагол**: *I went to the pharmacy to buy medicine. I came here to work.* Не *for buy / for buying / for to buy*.',
    },
    'want-obj': {
      en: '**want / would like / need / ask + person + to + verb**: *I want you to come. Would you like me to help?* Never *want that you…*.',
      uk: '**want / would like / need / ask + особа + to + дієслово**: *I want you to come. Would you like me to help?* Ніколи *want that you…*.',
      ru: '**want / would like / need / ask + лицо + to + глагол**: *I want you to come. Would you like me to help?* Никогда *want that you…*.',
    },
    'make-let': {
      en: '**make / let + person + verb without to**: *The movie made me cry. Let me explain. Don\'t make me wait.*',
      uk: '**make / let + особа + дієслово без to**: *The movie made me cry. Let me explain. Don\'t make me wait.*',
      ru: '**make / let + лицо + глагол без to**: *The movie made me cry. Let me explain. Don\'t make me wait.*',
    },
    meaning: {
      en: 'The meaning changes: **stop / quit + -ing** = no longer do it; **stop + to** = stop in order to do. **remember / forget + to** = a task; **remember / forget + -ing** = a memory.',
      uk: 'Змінюється значення: **stop + -ing** = перестати; **stop + to** = зупинитися, щоб зробити. **remember / forget + to** = завдання (не забути); **remember / forget + -ing** = спогад.',
      ru: 'Меняется значение: **stop + -ing** = перестать; **stop + to** = остановиться, чтобы сделать. **remember / forget + to** = задача (не забыть); **remember / forget + -ing** = воспоминание.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'ing', l: 1, p: 'I enjoy ___ in the garden.', a: 'working', o: ['to work', 'work'], w: { 'to work': 'ing', work: 'ing' }, e: 'ing' },
    { t: 'choose', pt: 'to', l: 1, p: 'We decided ___ a new car.', a: 'to buy', o: ['buying', 'buy'], w: { buying: 'to', buy: 'to' }, e: 'to' },
    { t: 'choose', pt: 'prep-ing', l: 1, p: "She's really good at ___.", a: 'cooking', o: ['cook', 'to cook'], w: { cook: 'prep-ing', 'to cook': 'prep-ing' }, e: 'prep-ing' },
    { t: 'choose', pt: 'purpose', l: 1, p: 'I went to the pharmacy ___ some medicine.', a: 'to buy', o: ['for buy', 'for buying'], w: { 'for buy': 'purpose', 'for buying': 'purpose' }, e: 'purpose' },
    { t: 'choose', pt: 'want-obj', l: 1, p: 'I want ___ with me.', a: 'you to come', o: ['that you come', 'you come'], w: { 'that you come': 'want-obj', 'you come': 'want-obj' }, e: 'want-obj' },
    { t: 'choose', pt: 'make-let', l: 1, p: 'My boss let me ___ early.', a: 'leave', o: ['to leave', 'leaving'], w: { 'to leave': 'make-let', leaving: 'make-let' }, e: 'make-let' },
    { t: 'choose', pt: 'ing', l: 1, p: 'Have you finished ___ the report?', a: 'writing', o: ['to write', 'write'], w: { 'to write': 'ing', write: 'ing' }, e: 'ing' },
    { t: 'fill', pt: 'to', l: 1, p: "I can't afford ___ (buy) a new phone right now.", a: 'to buy', w: { buying: 'to', buy: 'to' }, e: 'to' },
    { t: 'fill', pt: 'ing', l: 1, p: 'He keeps ___ (forget) his password.', a: 'forgetting', w: { 'to forget': 'ing', forget: 'ing' }, e: 'ing' },
    { t: 'fill', pt: 'prep-ing', l: 1, p: 'Thank you for ___ (help) me.', a: 'helping', w: { 'to help': 'prep-ing', help: 'prep-ing' }, e: 'prep-ing' },
    { t: 'fill', pt: 'to', l: 1, p: 'She promised ___ (call) me back.', a: 'to call', w: { calling: 'to', call: 'to' }, e: 'to' },
    { t: 'fill', pt: 'prep-ing', l: 1, p: "I'm interested in ___ (learn) Spanish.", a: 'learning', w: { 'to learn': 'prep-ing', learn: 'prep-ing' }, e: 'prep-ing' },
    { t: 'fill', pt: 'ing', l: 1, p: 'We should avoid ___ (drive) in rush hour.', a: 'driving', w: { 'to drive': 'ing', drive: 'ing' }, e: 'ing' },
    { t: 'fill', pt: 'purpose', l: 1, p: "I'm saving money ___ (buy) a house.", a: 'to buy', w: { 'for buy': 'purpose', 'for buying': 'purpose', buying: 'purpose', 'for to buy': 'purpose' }, e: 'purpose' },
    { t: 'build', pt: 'to', l: 1, a: 'I need to talk to you.', x: ['talking'], e: 'to' },
    { t: 'build', pt: 'prep-ing', l: 1, a: "I'm looking forward to seeing you.", x: ['see'], e: 'prep-ing' },
    { t: 'build', pt: 'want-obj', l: 1, a: 'I want you to call me.', x: ['that'], e: 'want-obj' },

    // ---------- Use
    { t: 'fill', pt: 'meaning', l: 2, p: 'Please remember ___ (lock) the door when you leave.', a: 'to lock', w: { locking: 'meaning', lock: 'meaning' }, e: 'meaning' },
    { t: 'fill', pt: 'meaning', l: 2, p: "I'll never forget ___ (see) the ocean for the first time.", a: 'seeing', w: { 'to see': 'meaning', see: 'meaning' }, e: 'meaning' },
    { t: 'fill', pt: 'meaning', l: 2, p: 'He stopped ___ (smoke) five years ago, and he feels great.', a: 'smoking', w: { 'to smoke': 'meaning', smoke: 'meaning' }, e: 'meaning' },
    { t: 'fill', pt: 'prep-ing', l: 2, p: "I'm looking forward to ___ (meet) your family.", a: 'meeting', w: { meet: 'prep-ing', 'to meet': 'prep-ing' }, e: 'prep-ing' },
    { t: 'fill', pt: 'ing', l: 2, p: 'My doctor suggested ___ (take) vitamin D.', a: 'taking', w: { 'to take': 'ing', take: 'ing' }, e: 'ing' },
    { t: 'fill', pt: 'make-let', l: 2, p: 'That movie made me ___ (cry).', a: 'cry', w: { 'to cry': 'make-let', crying: 'make-let' }, e: 'make-let' },
    { t: 'fill', pt: 'want-obj', l: 2, p: 'My mother wants me ___ (visit) her more often.', a: 'to visit', w: { visit: 'want-obj', visiting: 'want-obj' }, e: 'want-obj' },
    { t: 'fill', pt: 'prep-ing', l: 2, p: "Instead of ___ (take) the bus, let's walk.", a: 'taking', w: { 'to take': 'prep-ing', take: 'prep-ing' }, e: 'prep-ing' },
    { t: 'build', pt: 'ing', l: 2, a: "I don't mind working on weekends.", x: ['to'], e: 'ing' },
    { t: 'fix', pt: 'purpose', l: 2, p: 'I came to America for work in a hospital.', a: ['I came to America to work in a hospital.'], e: 'purpose' },
    { t: 'fix', pt: 'want-obj', l: 2, p: 'I want that you help me.', a: ['I want you to help me.'], e: 'want-obj' },
    { t: 'fix', pt: 'prep-ing', l: 2, p: 'Before to leave, turn off the stove.', a: ['Before leaving, turn off the stove.', 'Before you leave, turn off the stove.'], e: 'prep-ing' },
    { t: 'fix', pt: 'make-let', l: 2, p: 'Let me to explain.', a: ['Let me explain.'], e: 'make-let' },
    { t: 'tr', pt: 'want-obj', l: 2, i: 'Rewrite with *want… to*.', p: 'My husband says: "Please learn to drive."', s: 'My husband wants me', a: ['My husband wants me to learn to drive.', 'My husband wants me to learn how to drive.'], e: 'want-obj' },
    { t: 'tr', pt: 'purpose', l: 2, i: 'Join with *to* (purpose).', p: 'I called the clinic. I wanted to make an appointment.', s: 'I called the clinic', a: ['I called the clinic to make an appointment.'], e: 'purpose' },
    { t: 'tl', pt: 'to', l: 2, uk: 'Я вирішила змінити роботу.', ru: 'Я решила сменить работу.', a: ['I decided to change jobs.', "I've decided to change jobs.", 'I decided to change my job.', "I've decided to change my job.", 'I decided to get a new job.', "I've decided to get a new job.", 'I decided to find a new job.', "I've decided to find a new job."], e: 'to' },
    { t: 'tl', pt: 'prep-ing', l: 2, uk: 'Я звикла вставати рано.', ru: 'Я привыкла вставать рано.', a: ["I'm used to getting up early.", "I'm used to waking up early.", "I've gotten used to getting up early.", "I've got used to getting up early.", 'I got used to getting up early.', "I'm used to getting up early now."], e: 'prep-ing', n: '*be used to* + **-ing** = to be accustomed. *I used to get up early* means "I did it in the past, not now".' },

    // ---------- Pro
    { t: 'fix', pt: 'ing', l: 3, p: 'Have you considered to move to another state?', a: ['Have you considered moving to another state?'], e: 'ing' },
    { t: 'fix', pt: 'meaning', l: 3, p: 'I stopped to drink coffee because it was bad for my sleep.', a: ['I stopped drinking coffee because it was bad for my sleep.', 'I quit drinking coffee because it was bad for my sleep.'], e: 'meaning' },
    { t: 'fix', pt: 'to', l: 3, p: 'She refused signing the papers.', a: ['She refused to sign the papers.'], e: 'to' },
    { t: 'fix', pt: 'prep-ing', l: 3, p: "I'm tired of to wait.", a: ["I'm tired of waiting."], e: 'prep-ing' },
    { t: 'tr', pt: 'ing', l: 3, i: 'Use *suggested + -ing*.', p: '"Let\'s take a taxi," she said.', s: 'She suggested', a: ['She suggested taking a taxi.'], e: 'ing' },
    { t: 'tr', pt: 'make-let', l: 3, i: 'Rewrite with *let*.', p: 'My parents allowed me to stay out late.', s: 'My parents let me', a: ['My parents let me stay out late.'], e: 'make-let' },
    { t: 'tr', pt: 'meaning', l: 3, i: 'Rewrite with *Remember* (it\'s a task).', p: "Don't forget to sign the form.", s: 'Remember', a: ['Remember to sign the form.'], e: 'meaning' },
    { t: 'tl', pt: 'want-obj', l: 3, uk: 'Я хочу, щоб ти був чесним зі мною.', ru: 'Я хочу, чтобы ты был честен со мной.', a: ['I want you to be honest with me.'], e: 'want-obj' },
    { t: 'tl', pt: 'purpose', l: 3, uk: 'Я приїхала в США, щоб працювати медсестрою.', ru: 'Я приехала в США, чтобы работать медсестрой.', a: ['I came to the US to work as a nurse.', 'I came to the USA to work as a nurse.', 'I came to the United States to work as a nurse.', 'I came to America to work as a nurse.', 'I moved to the US to work as a nurse.', 'I moved to the United States to work as a nurse.', 'I came to the US in order to work as a nurse.'], e: 'purpose' },
    { t: 'tl', pt: 'prep-ing', l: 3, uk: 'Дякую, що чекали.', ru: 'Спасибо, что подождали.', a: ['Thank you for waiting.', 'Thanks for waiting.', 'Thank you for waiting for me.', 'Thanks for waiting for me.'], e: 'prep-ing' },
    { t: 'tl', pt: 'ing', l: 3, uk: 'Я закінчила прибирати квартиру.', ru: 'Я закончила убирать квартиру.', a: ['I finished cleaning the apartment.', "I've finished cleaning the apartment.", 'I finished cleaning the flat.', "I've finished cleaning the flat.", "I'm done cleaning the apartment."], e: 'ing' },
    { t: 'tl', pt: 'make-let', l: 3, uk: 'Не змушуй мене чекати.', ru: 'Не заставляй меня ждать.', a: ["Don't make me wait."], e: 'make-let' },
    { t: 'fill', pt: 'meaning', l: 3, p: 'I tried ___ (call) you, but your phone was off.', a: ['to call', 'calling'], w: { call: 'to' }, e: 'to' },
    { t: 'fill', pt: 'to', l: 3, p: "We can't afford ___ (lose) this client.", a: 'to lose', w: { losing: 'to', lose: 'to' }, e: 'to' },
    { t: 'fill', pt: 'want-obj', l: 3, p: 'Would you like me ___ (help) you with that?', a: 'to help', w: { help: 'want-obj', helping: 'want-obj' }, e: 'want-obj' },
  ],
});
