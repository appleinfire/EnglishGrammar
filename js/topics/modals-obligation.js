APP.addTopic({
  id: 'mod1',
  title: "can, must, have to, don't have to",
  level: 'A2',
  group: 'Modals',
  icon: '🚦',
  about: "ability and obligation; mustn't or don't have to?",
  rule: {
    en: `- **can / could / must / should** + verb **without to**, no *-s*: *She can swim. You must sign here. You should rest.* Questions without *do*: *Can I pay by card?*
- **have to** is a normal verb: *I have to, she has to; Do you have to…? She doesn't have to…* Past: **had to** (there is no past of *must*): *Yesterday I had to work late.*
- **must / have to** = necessary. **mustn't** = **not allowed**: *You mustn't smoke here.* **don't have to** = **not necessary**: *It's free — you don't have to pay.*
- **can** = ability or permission. Past: **could / couldn't** or **was able to**: *I couldn't sleep last night.* Future and perfect: **will be able to, have been able to** (*can* has no such forms).
- **should** = advice: *You should see a doctor. You shouldn't drink coffee before bed.*`,
    uk: `- **can / could / must / should** + дієслово **без to**, без *-s*: *She can swim. You must sign here. You should rest.* Питання без *do*: *Can I pay by card?*
- **have to** — звичайне дієслово: *I have to, she has to; Do you have to…? She doesn't have to…* Минулий час: **had to** (у *must* минулої форми немає): *Yesterday I had to work late* — «Учора мені довелося…»
- **must / have to** = треба. **mustn't** = **не можна, заборонено**: *You mustn't smoke here.* **don't have to** = **не обов'язково**: *It's free — you don't have to pay.*
- **can** = вміння або дозвіл. Минуле: **could / couldn't** або **was able to**: *I couldn't sleep last night.* Майбутнє і perfect: **will be able to, have been able to** (у *can* таких форм немає).
- **should** = порада: *You should see a doctor* — «Тобі варто…». *You shouldn't drink coffee before bed.*`,
    ru: `- **can / could / must / should** + глагол **без to**, без *-s*: *She can swim. You must sign here. You should rest.* Вопросы без *do*: *Can I pay by card?*
- **have to** — обычный глагол: *I have to, she has to; Do you have to…? She doesn't have to…* Прошедшее: **had to** (у *must* прошедшей формы нет): *Yesterday I had to work late* — «Вчера мне пришлось…»
- **must / have to** = нужно. **mustn't** = **нельзя, запрещено**: *You mustn't smoke here.* **don't have to** = **не обязательно**: *It's free — you don't have to pay.*
- **can** = умение или разрешение. Прошедшее: **could / couldn't** или **was able to**: *I couldn't sleep last night.* Будущее и perfect: **will be able to, have been able to** (у *can* таких форм нет).
- **should** = совет: *You should see a doctor* — «Тебе стоит…». *You shouldn't drink coffee before bed.*`,
  },
  examples: ['She can speak three languages.', "It's free — you don't have to pay.", "You mustn't smoke in the hospital.", 'Yesterday I had to work late.', "I'll be able to help you tomorrow."],
  trap: {
    uk: 'Тобі не обов\'язково приходити.',
    ru: 'Тебе не обязательно приходить.',
    wrong: "You mustn't come.",
    right: "You don't have to come.",
    note: {
      en: '*mustn\'t* means "it is forbidden", not "it is not necessary". For "не обов\'язково / не обязательно" use **don\'t have to**.',
      uk: '*mustn\'t* означає «заборонено», а не «не обов\'язково». Для «не обов\'язково» — **don\'t have to**.',
      ru: '*mustn\'t* значит «запрещено», а не «не обязательно». Для «не обязательно» — **don\'t have to**.',
    },
  },
  errors: {
    form: {
      en: '**can / could / must / should / may** + verb **without to** and without *-s*: *She can drive. You should call. Could I have…?*',
      uk: '**can / could / must / should / may** + дієслово **без to** і без *-s*: *She can drive. You should call. Could I have…?*',
      ru: '**can / could / must / should / may** + глагол **без to** и без *-s*: *She can drive. You should call. Could I have…?*',
    },
    'dont-have': {
      en: '**mustn\'t** = it is **not allowed** (*You mustn\'t park here*). **don\'t have to** = it is **not necessary** (*You don\'t have to come early*).',
      uk: '**mustn\'t** = **заборонено** (*You mustn\'t park here*). **don\'t have to** = **не обов\'язково** (*You don\'t have to come early*).',
      ru: '**mustn\'t** = **запрещено** (*You mustn\'t park here*). **don\'t have to** = **не обязательно** (*You don\'t have to come early*).',
    },
    'had-to': {
      en: 'In the past, *must* and *have to* become **had to**: *Yesterday I had to work late.* Questions: *Did you have to…?*',
      uk: 'У минулому *must* і *have to* стають **had to**: *Yesterday I had to work late.* Питання: *Did you have to…?*',
      ru: 'В прошлом *must* и *have to* превращаются в **had to**: *Yesterday I had to work late.* Вопросы: *Did you have to…?*',
    },
    'have-to-form': {
      en: '**have to** works like a normal verb: *she **has** to*, *Do you have to…?*, *She **doesn\'t** have to…* Not *Must you have to*, not *haven\'t to*.',
      uk: '**have to** поводиться як звичайне дієслово: *she **has** to*, *Do you have to…?*, *She **doesn\'t** have to…* Не *Must you have to* і не *haven\'t to*.',
      ru: '**have to** ведёт себя как обычный глагол: *she **has** to*, *Do you have to…?*, *She **doesn\'t** have to…* Не *Must you have to* и не *haven\'t to*.',
    },
    'can-could': {
      en: 'Ability in the **past** → **could / couldn\'t** or **was / wasn\'t able to**: *I couldn\'t sleep last night. When I was five, I could swim.*',
      uk: 'Вміння чи можливість у **минулому** → **could / couldn\'t** або **was / wasn\'t able to**: *I couldn\'t sleep last night. When I was five, I could swim.*',
      ru: 'Умение или возможность в **прошлом** → **could / couldn\'t** или **was / wasn\'t able to**: *I couldn\'t sleep last night. When I was five, I could swim.*',
    },
    'be-able': {
      en: '*can* has no future or perfect form: use **will be able to** and **have been able to**: *I\'ll be able to help. I haven\'t been able to sleep.* Not *will can*.',
      uk: 'У *can* немає майбутньої чи perfect-форми: **will be able to**, **have been able to**: *I\'ll be able to help. I haven\'t been able to sleep.* Не *will can*.',
      ru: 'У *can* нет будущей или perfect-формы: **will be able to**, **have been able to**: *I\'ll be able to help. I haven\'t been able to sleep.* Не *will can*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'form', l: 1, p: 'She can ___ three languages.', a: 'speak', o: ['speaks', 'to speak'], w: { speaks: 'form', 'to speak': 'form' }, e: 'form' },
    { t: 'choose', pt: 'dont-have', l: 1, p: 'Tomorrow is Sunday, so I ___ get up early.', a: "don't have to", o: ["mustn't", 'must'], w: { "mustn't": 'dont-have', must: 'dont-have' }, e: 'dont-have' },
    { t: 'choose', pt: 'dont-have', l: 1, p: "You ___ smoke in the hospital. It's not allowed.", a: "mustn't", o: ["don't have to", 'must'], w: { "don't have to": 'dont-have', must: 'dont-have' }, e: 'dont-have' },
    { t: 'choose', pt: 'had-to', l: 1, p: 'Yesterday I ___ work late.', a: 'had to', o: ['must', 'have to'], w: { must: 'had-to', 'have to': 'had-to' }, e: 'had-to' },
    { t: 'choose', pt: 'can-could', l: 1, p: "I ___ sleep last night — it was too hot.", a: "couldn't", o: ["can't", "mustn't"], w: { "can't": 'can-could', "mustn't": 'can-could' }, e: 'can-could' },
    { t: 'choose', pt: 'have-to', l: 1, p: '___ you have to wear a uniform at work?', a: 'Do', o: ['Are', 'Have'], w: { Are: 'have-to-form', Have: 'have-to-form' }, e: 'have-to-form' },
    { t: 'choose', pt: 'should', l: 1, p: 'You look tired. You ___ go to bed early.', a: 'should', o: ['should to', 'must to'], w: { 'should to': 'form', 'must to': 'form' }, e: 'form' },
    { t: 'fill', pt: 'form', l: 1, p: 'Can you ___ (help) me with this box?', a: 'help', w: { 'to help': 'form', helping: 'form' }, e: 'form' },
    { t: 'fill', pt: 'have-to', l: 1, p: 'My husband ___ (have to) work on Saturdays.', a: 'has to', w: { 'have to': 'have-to-form' }, e: 'have-to-form' },
    { t: 'fill', pt: 'had-to', l: 1, p: 'We ___ (have to) wait two hours at the airport.', a: 'had to', w: { 'have to': 'had-to', must: 'had-to' }, e: 'had-to' },
    { t: 'fill', pt: 'dont-have', l: 1, p: "You ___ (not / have to) pay — it's free.", a: ["don't have to", "don't need to"], w: { "mustn't": 'dont-have', "haven't to": 'have-to-form' }, e: 'dont-have' },
    { t: 'fill', pt: 'can-could', l: 1, p: 'When I was five, I ___ (can) swim.', a: ['could', 'was able to'], w: { can: 'can-could' }, e: 'can-could' },
    { t: 'fill', pt: 'be-able', l: 1, p: "I hope I'll ___ come to your party.", a: 'be able to', w: { can: 'be-able', could: 'be-able' }, e: 'be-able' },
    { t: 'fill', pt: 'should', l: 1, p: 'You ___ (not / drink) coffee before bed.', a: "shouldn't drink", w: { "don't should drink": 'form', "shouldn't to drink": 'form' }, e: 'form' },
    { t: 'build', pt: 'form', l: 1, a: 'You must sign this form.', x: ['to'], e: 'form' },
    { t: 'build', pt: 'dont-have', l: 1, a: "You don't have to bring anything.", x: ["mustn't"], e: 'dont-have' },
    { t: 'build', pt: 'can-could', l: 1, a: "I couldn't find my keys this morning.", x: ["can't"], e: 'can-could' },

    // ---------- Use
    { t: 'fill', pt: 'have-to', l: 2, p: '___ she ___ (have to) take the test again?', a: 'Does|have to', w: { 'Has|to': 'have-to-form', 'Must|have to': 'have-to-form', 'Does|has to': 'have-to-form' }, e: 'have-to-form' },
    { t: 'fill', pt: 'dont-have', l: 2, p: "You ___ tell anyone — it's a secret!", a: ["mustn't", "can't", 'must not', 'cannot'], w: { "don't have to": 'dont-have' }, e: 'dont-have' },
    { t: 'fill', pt: 'be-able', l: 2, p: "Since the operation, she hasn't ___ (be able to) walk without help.", a: 'been able to', w: { can: 'be-able', could: 'be-able' }, e: 'be-able' },
    { t: 'fill', pt: 'had-to', l: 2, p: 'Did you ___ (have to) show your passport?', a: 'have to', w: { 'had to': 'had-to' }, e: 'had-to' },
    { t: 'fill', pt: 'can-could', l: 2, p: "Sorry, I ___ (not / come) to the meeting yesterday — my son was sick.", a: ["couldn't come", "wasn't able to come"], w: { "can't come": 'can-could', "didn't can come": 'can-could' }, e: 'can-could' },
    { t: 'fill', pt: 'should', l: 2, p: 'You ___ (should / see) a doctor about that cough.', a: 'should see', w: { 'should to see': 'form', 'should seeing': 'form' }, e: 'form' },
    { t: 'fill', pt: 'dont-have', l: 2, p: "It's a holiday, so the kids ___ (not / have to) go to school.", a: ["don't have to", "don't need to"], w: { "mustn't": 'dont-have', "doesn't have to": 'have-to-form' }, e: 'dont-have' },
    { t: 'fill', pt: 'form', l: 2, p: '___ I ___ (pay) by card here?', a: ['Can|pay', 'Could|pay', 'May|pay'], w: { 'Can|to pay': 'form' }, e: 'form' },
    { t: 'build', pt: 'had-to', l: 2, a: 'We had to cancel our trip.', x: ['must'], e: 'had-to' },
    { t: 'fix', pt: 'form', l: 2, p: 'She cans drive.', a: ['She can drive.'], e: 'form' },
    { t: 'fix', pt: 'had-to', l: 2, p: 'Yesterday I must go to the bank.', a: ['Yesterday I had to go to the bank.'], e: 'had-to' },
    { t: 'fix', pt: 'be-able', l: 2, p: 'I will can help you next week.', a: ['I will be able to help you next week.'], e: 'be-able' },
    { t: 'fix', pt: 'dont-have', l: 2, p: "You mustn't come early. The store opens at ten.", a: ["You don't have to come early. The store opens at ten.", "You don't need to come early. The store opens at ten.", "You needn't come early. The store opens at ten."], e: 'dont-have' },
    { t: 'tr', pt: 'had-to', l: 2, i: 'Say it about yesterday.', p: 'I have to take the kids to school.', s: 'Yesterday I', a: ['Yesterday I had to take the kids to school.'], e: 'had-to' },
    { t: 'tr', pt: 'dont-have', l: 2, i: "It's not necessary. Use *don't have to*.", p: "It isn't necessary to book a table.", s: 'You', a: ["You don't have to book a table.", "You don't need to book a table."], e: 'dont-have' },
    { t: 'tl', pt: 'form', l: 2, uk: 'Я не можу знайти свої окуляри.', ru: 'Я не могу найти свои очки.', a: ["I can't find my glasses."], e: 'form' },
    { t: 'tl', pt: 'have-to', l: 2, uk: 'Мені треба працювати в суботу.', ru: 'Мне нужно работать в субботу.', a: ['I have to work on Saturday.', 'I need to work on Saturday.', 'I have to work this Saturday.', 'I need to work this Saturday.', "I've got to work on Saturday.", 'I have to work on Saturdays.'], e: 'have-to-form' },

    // ---------- Pro
    { t: 'fix', pt: 'have-to', l: 3, p: 'Do you must wear a mask?', a: ['Do you have to wear a mask?', 'Must you wear a mask?'], e: 'have-to-form' },
    { t: 'fix', pt: 'can-could', l: 3, p: "When I was a child, I can't swim.", a: ["When I was a child, I couldn't swim.", "When I was a child, I wasn't able to swim."], e: 'can-could' },
    { t: 'fix', pt: 'should', l: 3, p: 'You should to call your mother more often.', a: ['You should call your mother more often.'], e: 'form' },
    { t: 'fix', pt: 'had-to', l: 3, p: 'We musted leave early because of the storm.', a: ['We had to leave early because of the storm.'], e: 'had-to' },
    { t: 'tr', pt: 'be-able', l: 3, i: 'Say it about the future with *will be able to*.', p: 'I can speak English well.', s: 'Soon I', a: ['Soon I will be able to speak English well.'], e: 'be-able' },
    { t: 'tr', pt: 'dont-have', l: 3, i: "It's forbidden. Use *mustn't*.", p: 'Parking here is not allowed.', s: 'You', a: ["You mustn't park here.", "You can't park here."], e: 'dont-have' },
    { t: 'tr', pt: 'have-to', l: 3, i: 'Ask with *Does… have to*.', p: 'He works on Sundays.', s: 'Does', a: ['Does he have to work on Sundays?'], e: 'have-to-form' },
    { t: 'tl', pt: 'had-to', l: 3, uk: 'Нам довелося чекати лікаря дві години.', ru: 'Нам пришлось ждать врача два часа.', a: ['We had to wait two hours for the doctor.', 'We had to wait for the doctor for two hours.', 'We had to wait for the doctor two hours.', 'We had to wait two hours to see the doctor.'], e: 'had-to' },
    { t: 'tl', pt: 'dont-have', l: 3, uk: "Тобі не обов'язково приходити.", ru: 'Тебе не обязательно приходить.', a: ["You don't have to come.", "You don't need to come.", "You needn't come."], e: 'dont-have' },
    { t: 'tl', pt: 'can-could', l: 3, uk: 'Я не змогла до тебе додзвонитися.', ru: 'Я не смогла до тебя дозвониться.', a: ["I couldn't get through to you.", "I couldn't reach you.", "I wasn't able to reach you.", "I wasn't able to get through to you.", "I couldn't get hold of you.", "I couldn't reach you by phone.", "I couldn't call you."], e: 'can-could' },
    { t: 'tl', pt: 'should', l: 3, uk: 'Тобі варто відпочити.', ru: 'Тебе стоит отдохнуть.', a: ['You should rest.', 'You should get some rest.', 'You should take a rest.', 'You should relax.', 'You should take a break.', 'You ought to rest.', 'You should have a rest.'], e: 'form' },
    { t: 'tl', pt: 'form', l: 3, uk: 'Можна мені склянку води?', ru: 'Можно мне стакан воды?', a: ['Can I have a glass of water?', 'Could I have a glass of water?', 'May I have a glass of water?', 'Can I get a glass of water?', 'Could I get a glass of water?', 'Can I have a glass of water, please?', 'Could I have a glass of water, please?', 'May I have a glass of water, please?', 'Can I get a glass of water, please?', 'Could I get a glass of water, please?'], e: 'form' },
    { t: 'fill', pt: 'be-able', l: 3, p: "I haven't ___ (be able to) sleep well since we moved.", a: 'been able to', w: { can: 'be-able', could: 'be-able' }, e: 'be-able' },
    { t: 'fill', pt: 'dont-have', l: 3, p: 'You ___ (not / have to) tip at fast-food places.', a: ["don't have to", "don't need to"], w: { "mustn't": 'dont-have' }, e: 'dont-have' },
    { t: 'fill', pt: 'had-to', l: 3, p: 'The flight was canceled, so we ___ (have to) stay at a hotel.', a: 'had to', w: { must: 'had-to', 'have to': 'had-to' }, e: 'had-to' },
  ],
});
