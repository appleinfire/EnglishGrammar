APP.addTopic({
  id: 'wish',
  title: 'I wish… / If only…',
  level: 'B2',
  group: 'Conditionals',
  icon: '🌠',
  about: 'I wish I had, I wish I had done, I wish you would',
  rule: {
    en: `**wish / if only** + a form one step "back in time", like the *if* in imaginary conditionals:
- About **now** → **past form**: *I wish I **had** more time. I wish I **lived** closer. I wish I **knew** the answer.* With *be*: **were** (*was* in casual speech): *I wish I were taller.*
- Ability now → **could**: *I wish I **could** speak French.*
- About the **past** (a regret) → **had + 3rd form**: *I wish I **had studied** harder. I wish I **hadn't said** that.*
- Someone else's behavior that annoys you (a wish for change) → **would**: *I wish you **would** stop interrupting. I wish it **would** stop raining.* Not about yourself: *I wish I could…*, not *I wish I would…*
- **If only** = a stronger *I wish*: *If only I had listened!*
Never *will* or the present after *wish*: not *I wish I have*, not *I wish it will stop*.`,
    uk: `**wish / if only** + форма на «крок назад у часі», як після *if* в уявних умовних реченнях:
- Про **зараз** → **минула форма**: *I wish I **had** more time* — «Шкода, що в мене мало часу / Хотіла б я мати більше часу». *I wish I **lived** closer. I wish I **knew** the answer.* З *be*: **were** (у розмові *was*): *I wish I were taller.*
- Вміння зараз → **could**: *I wish I **could** speak French.*
- Про **минуле** (жаль) → **had + третя форма**: *I wish I **had studied** harder* — «Шкода, що я не вчилася старанніше». *I wish I **hadn't said** that.*
- Чужа поведінка, яка дратує (хочеться змін) → **would**: *I wish you **would** stop interrupting. I wish it **would** stop raining.* Не про себе: *I wish I could…*, а не *I wish I would…*
- **If only** = сильніше *I wish*: *If only I had listened!* — «Якби ж то я послухала!»
Після *wish* ніколи не буває *will* чи теперішнього часу: не *I wish I have*, не *I wish it will stop*.`,
    ru: `**wish / if only** + форма на «шаг назад во времени», как после *if* в воображаемых условных:
- О **сейчас** → **прошедшая форма**: *I wish I **had** more time* — «Жаль, что у меня мало времени / Хотела бы я иметь больше времени». *I wish I **lived** closer. I wish I **knew** the answer.* С *be*: **were** (в разговоре *was*): *I wish I were taller.*
- Умение сейчас → **could**: *I wish I **could** speak French.*
- О **прошлом** (сожаление) → **had + третья форма**: *I wish I **had studied** harder* — «Жаль, что я не училась усерднее». *I wish I **hadn't said** that.*
- Чужое поведение, которое раздражает (хочется перемен) → **would**: *I wish you **would** stop interrupting. I wish it **would** stop raining.* Не о себе: *I wish I could…*, а не *I wish I would…*
- **If only** = сильнее *I wish*: *If only I had listened!* — «Если бы только я послушала!»
После *wish* никогда не бывает *will* или настоящего времени: не *I wish I have*, не *I wish it will stop*.`,
  },
  examples: ['I wish I had more time.', 'I wish I could speak French.', "I wish I hadn't said that.", 'I wish you would stop interrupting me.', 'If only I had listened to my mother!'],
  trap: {
    uk: 'Шкода, що я не вчила англійську в школі.',
    ru: 'Жаль, что я не учила английский в школе.',
    wrong: 'I wish I learned English at school.',
    right: 'I wish I had learned English at school.',
    note: {
      en: 'Ukrainian *шкода, що не…* and Russian *жаль, что не…* use a negative. English *I wish* turns it around: a **positive** wish with a past-in-the-past form — *I wish I **had learned***.',
      uk: 'Українське «шкода, що не…» — із запереченням. Англійське *I wish* перевертає думку: **стверджувальне** бажання з формою «минуле в минулому» — *I wish I **had learned***.',
      ru: 'Русское «жаль, что не…» — с отрицанием. Английское *I wish* переворачивает мысль: **утвердительное** желание с формой «прошлое в прошлом» — *I wish I **had learned***.',
    },
  },
  errors: {
    present: {
      en: 'A wish about **now** → **past form**: *I wish I **had** a car, I wish I **lived** closer, I wish I **knew**.* Not the present (*I wish I have*).',
      uk: 'Бажання про **зараз** → **минула форма**: *I wish I **had** a car, I wish I **lived** closer, I wish I **knew**.* Не теперішній час (*I wish I have*).',
      ru: 'Желание о **сейчас** → **прошедшая форма**: *I wish I **had** a car, I wish I **lived** closer, I wish I **knew**.* Не настоящее время (*I wish I have*).',
    },
    were: {
      en: 'With *be*: *I wish I **were**, I wish he **were*** (*was* is fine in casual speech). Not *I wish I am*.',
      uk: 'З *be*: *I wish I **were**, I wish he **were*** (*was* — нормально в розмові). Не *I wish I am*.',
      ru: 'С *be*: *I wish I **were**, I wish he **were*** (*was* — нормально в разговоре). Не *I wish I am*.',
    },
    past: {
      en: 'A regret about the **past** → **had + 3rd form**: *I wish I **had studied**, I wish I **hadn\'t eaten** so much.* Not the Past Simple.',
      uk: 'Жаль про **минуле** → **had + третя форма**: *I wish I **had studied**, I wish I **hadn\'t eaten** so much.* Не Past Simple.',
      ru: 'Сожаление о **прошлом** → **had + третья форма**: *I wish I **had studied**, I wish I **hadn\'t eaten** so much.* Не Past Simple.',
    },
    would: {
      en: '**wish + would** = you want **someone or something else** to change: *I wish you would call more. I wish it would stop raining.* Not *will*; about yourself use *could*.',
      uk: '**wish + would** = ви хочете, щоб **хтось чи щось інше** змінилося: *I wish you would call more. I wish it would stop raining.* Не *will*; про себе — *could*.',
      ru: '**wish + would** = вы хотите, чтобы **кто-то или что-то другое** изменилось: *I wish you would call more. I wish it would stop raining.* Не *will*; о себе — *could*.',
    },
    could: {
      en: 'A wish about **ability** → **could**: *I wish I **could** drive.* About the past: *I wish I **could have** come.*',
      uk: 'Бажання щодо **вміння, можливості** → **could**: *I wish I **could** drive.* Про минуле: *I wish I **could have** come.*',
      ru: 'Желание об **умении, возможности** → **could**: *I wish I **could** drive.* О прошлом: *I wish I **could have** come.*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'present', l: 1, p: 'I wish I ___ more free time.', a: 'had', o: ['have', 'will have'], w: { have: 'present', 'will have': 'present' }, e: 'present' },
    { t: 'choose', pt: 'past', l: 1, p: 'I wish I ___ harder at school.', a: 'had studied', o: ['studied', 'would study'], w: { studied: 'past', 'would study': 'past' }, e: 'past' },
    { t: 'choose', pt: 'would', l: 1, p: 'I wish you ___ stop interrupting me!', a: 'would', o: ['will', 'had'], w: { will: 'would', had: 'would' }, e: 'would' },
    { t: 'choose', pt: 'could', l: 1, p: 'I wish I ___ speak French.', a: 'could', o: ['can', 'would'], w: { can: 'could', would: 'would' }, e: 'could' },
    { t: 'choose', pt: 'present', l: 1, p: 'I wish I ___ taller.', a: 'were', o: ['am', 'will be'], w: { am: 'were', 'will be': 'present' }, e: 'were' },
    { t: 'choose', pt: 'past', l: 1, p: "I wish I ___ that. Now she's angry.", a: "hadn't said", o: ["didn't say", "wouldn't say"], w: { "didn't say": 'past', "wouldn't say": 'past' }, e: 'past' },
    { t: 'fill', pt: 'present', l: 1, p: 'I wish we ___ (live) closer to the ocean.', a: 'lived', w: { live: 'present', 'would live': 'would', 'had lived': 'past' }, e: 'present' },
    { t: 'fill', pt: 'present', l: 1, p: 'I wish I ___ (know) the answer.', a: 'knew', w: { know: 'present', 'would know': 'would' }, e: 'present' },
    { t: 'fill', pt: 'past', l: 1, p: 'I wish I ___ (buy) that dress when it was on sale.', a: 'had bought', w: { bought: 'past', 'would buy': 'past', 'had buyed': 'past' }, e: 'past' },
    { t: 'fill', pt: 'would', l: 1, p: 'I wish it ___ (stop) raining.', a: 'would stop', w: { 'will stop': 'would', stops: 'would' }, e: 'would' },
    { t: 'fill', pt: 'could', l: 1, p: "I wish I ___ (can) come to your wedding, but I'll be away.", a: 'could', w: { can: 'could', would: 'would' }, e: 'could' },
    { t: 'fill', pt: 'present', l: 1, p: "I wish my mom ___ (be) here with us.", a: ['were', 'was'], w: { is: 'were', 'would be': 'would' }, e: 'were' },
    { t: 'fill', pt: 'if-only', l: 1, p: 'If only I ___ (listen) to your advice!', a: 'had listened', w: { listened: 'past', 'would listen': 'past' }, e: 'past' },
    { t: 'fill', pt: 'present', l: 1, p: "I wish I ___ (not / have) to work tomorrow.", a: ["didn't have", 'did not have'], w: { "don't have": 'present', "won't have": 'present' }, e: 'present' },
    { t: 'build', pt: 'present', l: 1, a: 'I wish I had a bigger kitchen.', x: ['have'], e: 'present' },
    { t: 'build', pt: 'past', l: 1, a: "I wish I hadn't eaten so much.", x: ["didn't"], e: 'past' },
    { t: 'build', pt: 'would', l: 1, a: 'I wish you would call more often.', x: ['will'], e: 'would' },

    // ---------- Use
    { t: 'fill', pt: 'would', l: 2, p: 'I wish my neighbors ___ (not / play) loud music at night.', a: ["wouldn't play", 'would not play'], w: { "don't play": 'would', "won't play": 'would' }, e: 'would' },
    { t: 'fill', pt: 'past', l: 2, p: "I wish I ___ (not / sell) my old car. The new one keeps breaking down.", a: ["hadn't sold", 'had not sold'], w: { "didn't sell": 'past', "wouldn't sell": 'past' }, e: 'past' },
    { t: 'fill', pt: 'could', l: 2, p: 'I wish I ___ (could / see) my grandmother more often.', a: 'could see', w: { 'can see': 'could', 'would see': 'would' }, e: 'could' },
    { t: 'fill', pt: 'present', l: 2, p: "I wish I ___ (speak) English as well as you do.", a: ['spoke', 'could speak'], w: { speak: 'present', 'would speak': 'would' }, e: 'present' },
    { t: 'fill', pt: 'if-only', l: 2, p: 'If only we ___ (have) a bigger apartment!', a: 'had', w: { have: 'present', 'will have': 'present' }, e: 'present' },
    { t: 'fill', pt: 'past', l: 2, p: 'She wishes she ___ (go) to college.', a: 'had gone', w: { went: 'past', 'had went': 'past', 'would go': 'past' }, e: 'past' },
    { t: 'fill', pt: 'would', l: 2, p: "I wish you ___ (put) your dirty socks in the laundry basket!", a: 'would put', w: { put: 'would', 'will put': 'would' }, e: 'would' },
    { t: 'fill', pt: 'present', l: 2, p: "Don't you wish it ___ (be) Friday already?", a: ['were', 'was'], w: { is: 'were', 'would be': 'would' }, e: 'were' },
    { t: 'build', pt: 'could', l: 2, a: 'I wish I could help you.', x: ['can'], e: 'could' },
    { t: 'fix', pt: 'present', l: 2, p: 'I wish I have more money.', a: ['I wish I had more money.'], e: 'present' },
    { t: 'fix', pt: 'past', l: 2, p: 'I wish I went to the party last night.', a: ['I wish I had gone to the party last night.'], e: 'past' },
    { t: 'fix', pt: 'would', l: 2, p: 'I wish the bus will come soon.', a: ['I wish the bus would come soon.'], e: 'would' },
    { t: 'fix', pt: 'could', l: 2, p: 'I wish I can drive.', a: ['I wish I could drive.'], e: 'could' },
    { t: 'tr', pt: 'present', l: 2, i: 'Make a wish about now.', p: "I don't have a car.", s: 'I wish', a: ['I wish I had a car.'], e: 'present' },
    { t: 'tr', pt: 'past', l: 2, i: 'Make a wish about the past.', p: "I didn't take any photos at the wedding.", s: 'I wish', a: ['I wish I had taken some photos at the wedding.', 'I wish I had taken photos at the wedding.', 'I wish I had taken pictures at the wedding.', 'I wish I had taken some pictures at the wedding.'], e: 'past' },
    { t: 'tl', pt: 'present', l: 2, uk: 'Шкода, що я не знаю, що робити.', ru: 'Жаль, что я не знаю, что делать.', a: ['I wish I knew what to do.', 'I wish I knew what I should do.'], e: 'present' },
    { t: 'tl', pt: 'could', l: 2, uk: 'Шкода, що я не вмію плавати.', ru: 'Жаль, что я не умею плавать.', a: ['I wish I could swim.', 'I wish I knew how to swim.'], e: 'could' },

    // ---------- Pro
    { t: 'fix', pt: 'would', l: 3, p: 'I wish I would have a better job.', a: ['I wish I had a better job.'], e: 'would' },
    { t: 'fix', pt: 'present', l: 3, p: "I wish I am not so tired all the time.", a: ["I wish I weren't so tired all the time.", "I wish I wasn't so tired all the time."], e: 'were' },
    { t: 'fix', pt: 'past', l: 3, p: "If only I didn't miss the bus this morning!", a: ["If only I hadn't missed the bus this morning!"], e: 'past' },
    { t: 'fix', pt: 'could', l: 3, p: "I wish I could came to your party last week.", a: ['I wish I could have come to your party last week.', 'I wish I had come to your party last week.'], e: 'could' },
    { t: 'tr', pt: 'would', l: 3, i: 'Complain with *I wish you would…*', p: 'You never listen to me.', s: 'I wish you', a: ['I wish you would listen to me.', "I wish you'd listen to me.", 'I wish you would listen to me more.'], e: 'would' },
    { t: 'tr', pt: 'if-only', l: 3, i: 'Use *If only* about the past.', p: "I didn't check the weather, and now we're wet.", s: 'If only', a: ['If only I had checked the weather!', 'If only I had checked the weather.', 'If only I had checked the weather forecast!'], e: 'past' },
    { t: 'tr', pt: 'present', l: 3, i: 'Make a wish about now.', p: 'My parents live so far away.', s: 'I wish', a: ["I wish my parents didn't live so far away.", 'I wish my parents lived closer.', 'I wish my parents lived nearer.'], e: 'present' },
    { t: 'tl', pt: 'past', l: 3, uk: 'Шкода, що я не вчила англійську в школі.', ru: 'Жаль, что я не учила английский в школе.', a: ['I wish I had learned English at school.', 'I wish I had studied English at school.', "I wish I'd learned English at school.", "I wish I'd studied English at school.", 'I wish I had learned English in school.', 'I wish I had studied English in school.', 'I wish I had learnt English at school.'], e: 'past' },
    { t: 'tl', pt: 'would', l: 3, uk: 'Хоч би вже скінчився цей дощ!', ru: 'Хоть бы уже закончился этот дождь!', a: ['I wish this rain would stop!', 'I wish the rain would stop!', 'If only this rain would stop!', 'If only the rain would stop!', 'I wish it would stop raining!'], e: 'would' },
    { t: 'tl', pt: 'if-only', l: 3, uk: 'Якби ж то в мене було більше часу!', ru: 'Если бы только у меня было больше времени!', a: ['If only I had more time!', 'I wish I had more time!'], e: 'present' },
    { t: 'tl', pt: 'present', l: 3, uk: 'Шкода, що ти не тут.', ru: 'Жаль, что тебя здесь нет.', a: ['I wish you were here.', 'I wish you were here with me.', 'I wish you were here with us.'], e: 'were' },
    { t: 'tl', pt: 'could', l: 3, uk: 'Шкода, що я не змогла прийти на твій день народження.', ru: 'Жаль, что я не смогла прийти на твой день рождения.', a: ['I wish I could have come to your birthday party.', 'I wish I could have come to your birthday.', "I'm sorry I couldn't come to your birthday party.", "I'm sorry I couldn't come to your birthday.", 'I wish I had been able to come to your birthday party.', 'I wish I had come to your birthday party.'], e: 'could' },
    { t: 'fill', pt: 'past', l: 3, p: "Now that I see the price, I wish I ___ (not / order) the lobster.", a: ["hadn't ordered", 'had not ordered'], w: { "didn't order": 'past', "wouldn't order": 'past' }, e: 'past' },
    { t: 'fill', pt: 'would', l: 3, p: "My son never cleans his room. I wish he ___ (help) more around the house.", a: ['would help', 'helped'], w: { helps: 'would', 'will help': 'would' }, e: 'would' },
    { t: 'fill', pt: 'if-only', l: 3, p: "If only I ___ (be) younger, I would go back to school.", a: ['were', 'was'], w: { am: 'were', 'had been': 'past' }, e: 'were' },
  ],
});
