APP.addTopic({
  id: 'ded',
  title: "must be, can't be, might have been",
  level: 'B2',
  group: 'Modals',
  icon: '🔍',
  about: 'guessing about now and about the past',
  rule: {
    en: `Use modals to say **how sure** you are:
- **must** = I'm almost sure it's **true**: *You've worked all day — you **must be** tired.*
- **can't / couldn't** = I'm almost sure it's **not true**: *That **can't be** her car — she sold it.* (Not *mustn't* — that means "not allowed".)
- **might / may / could** = maybe: *She **might be** at the gym.*
- Happening right now → **be + -ing**: *Don't call — he **must be sleeping**.*
- About the **past** → modal + **have + 3rd form**: *She **must have left** already. He **can't have seen** it. They **might have missed** the bus.*
Form: *must have gone, can't have known, might have been* — not *must had*, not *must have went*.`,
    uk: `Модальними дієсловами показуємо, **наскільки ми впевнені**:
- **must** = майже впевнена, що це **правда**: *You've worked all day — you **must be** tired* — «ти, мабуть, утомилася».
- **can't / couldn't** = майже впевнена, що це **неправда**: *That **can't be** her car — she sold it* — «Це не може бути її машина». (Не *mustn't* — це «заборонено».)
- **might / may / could** = можливо: *She **might be** at the gym.*
- Відбувається просто зараз → **be + -ing**: *Don't call — he **must be sleeping**.*
- Про **минуле** → модальне + **have + третя форма**: *She **must have left** already* — «Вона, мабуть, уже пішла». *He **can't have seen** it. They **might have missed** the bus.*
Форма: *must have gone, can't have known, might have been* — не *must had*, не *must have went*.`,
    ru: `Модальными глаголами показываем, **насколько мы уверены**:
- **must** = почти уверена, что это **правда**: *You've worked all day — you **must be** tired* — «ты, наверное, устала».
- **can't / couldn't** = почти уверена, что это **неправда**: *That **can't be** her car — she sold it* — «Это не может быть её машина». (Не *mustn't* — это «запрещено».)
- **might / may / could** = возможно: *She **might be** at the gym.*
- Происходит прямо сейчас → **be + -ing**: *Don't call — he **must be sleeping**.*
- О **прошлом** → модальный + **have + третья форма**: *She **must have left** already* — «Она, наверное, уже ушла». *He **can't have seen** it. They **might have missed** the bus.*
Форма: *must have gone, can't have known, might have been* — не *must had*, не *must have went*.`,
  },
  examples: ["You've worked all day — you must be tired.", "That can't be her car — she sold it.", 'She might be at the gym.', 'She must have left already.', "He can't have seen us."],
  trap: {
    uk: 'Вона, мабуть, забула.',
    ru: 'Она, наверное, забыла.',
    wrong: 'She must forgot.',
    right: 'She must have forgotten.',
    note: {
      en: 'Ukrainian *мабуть* and Russian *наверное* go with any tense. In English a guess about the **past** needs **must have + 3rd form**.',
      uk: '«Мабуть» поєднується з будь-яким часом. Англійською припущення про **минуле** — це **must have + третя форма**.',
      ru: '«Наверное» сочетается с любым временем. По-английски предположение о **прошлом** — это **must have + третья форма**.',
    },
  },
  errors: {
    must: {
      en: 'Almost sure it **is** true → **must** + verb: *She must be tired. They must know each other.*',
      uk: 'Майже впевнені, що це **так** → **must** + дієслово: *She must be tired. They must know each other.*',
      ru: 'Почти уверены, что это **так** → **must** + глагол: *She must be tired. They must know each other.*',
    },
    cant: {
      en: 'Almost sure it is **not** true → **can\'t / couldn\'t**: *That can\'t be right.* Not *mustn\'t* (= not allowed).',
      uk: 'Майже впевнені, що це **не так** → **can\'t / couldn\'t**: *That can\'t be right.* Не *mustn\'t* (= заборонено).',
      ru: 'Почти уверены, что это **не так** → **can\'t / couldn\'t**: *That can\'t be right.* Не *mustn\'t* (= запрещено).',
    },
    might: {
      en: 'Not sure, maybe → **might / may / could**: *She might be at the gym. It could be the battery.*',
      uk: 'Не впевнені, можливо → **might / may / could**: *She might be at the gym. It could be the battery.*',
      ru: 'Не уверены, возможно → **might / may / could**: *She might be at the gym. It could be the battery.*',
    },
    past: {
      en: 'A guess about the **past** → **must / can\'t / might + have + 3rd form**: *She must have left. He can\'t have seen it.*',
      uk: 'Припущення про **минуле** → **must / can\'t / might + have + третя форма**: *She must have left. He can\'t have seen it.*',
      ru: 'Предположение о **прошлом** → **must / can\'t / might + have + третья форма**: *She must have left. He can\'t have seen it.*',
    },
    form: {
      en: 'The past form is **modal + have + 3rd form**: *must have gone, might have taken, can\'t have known* — not *must had*, *must have went*, *must to have*.',
      uk: 'Минула форма — **модальне + have + третя форма**: *must have gone, might have taken, can\'t have known* — не *must had*, *must have went*, *must to have*.',
      ru: 'Прошедшая форма — **модальный + have + третья форма**: *must have gone, might have taken, can\'t have known* — не *must had*, *must have went*, *must to have*.',
    },
    cont: {
      en: 'A guess about what is happening **right now** → **must / might / can\'t + be + -ing**: *He must be sleeping. She might be driving.*',
      uk: 'Припущення про те, що відбувається **просто зараз** → **must / might / can\'t + be + -ing**: *He must be sleeping. She might be driving.*',
      ru: 'Предположение о том, что происходит **прямо сейчас** → **must / might / can\'t + be + -ing**: *He must be sleeping. She might be driving.*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'must', l: 1, p: "You've worked twelve hours. You ___ be exhausted.", a: 'must', o: ["can't", 'should'], w: { "can't": 'must', should: 'must' }, e: 'must' },
    { t: 'choose', pt: 'cant', l: 1, p: "That ___ be Anna — she's in Florida this week.", a: "can't", o: ["mustn't", 'must'], w: { "mustn't": 'cant', must: 'cant' }, e: 'cant' },
    { t: 'choose', pt: 'might', l: 1, p: "I'm not sure where she is. She ___ be at the gym.", a: 'might', o: ['must', "can't"], w: { must: 'might', "can't": 'might' }, e: 'might' },
    { t: 'choose', pt: 'past', l: 1, p: "The lights are off. They must ___ to bed.", a: 'have gone', o: ['went', 'have went'], w: { went: 'past', 'have went': 'form' }, e: 'past' },
    { t: 'choose', pt: 'cont', l: 1, p: "Don't call him now. He ___ sleeping.", a: 'must be', o: ['must', 'must have'], w: { must: 'cont', 'must have': 'cont' }, e: 'cont' },
    { t: 'choose', pt: 'past', l: 1, p: "He ___ have seen us — he didn't say hello.", a: "can't", o: ["mustn't", 'must'], w: { "mustn't": 'cant', must: 'cant' }, e: 'cant' },
    { t: 'fill', pt: 'must', l: 1, p: "They have three kids and two jobs. They ___ be very busy.", a: 'must', w: { "can't": 'must', should: 'must' }, e: 'must' },
    { t: 'fill', pt: 'cant', l: 1, p: "This ___ be the right address. It's a parking lot!", a: ["can't", "couldn't", 'cannot'], w: { "mustn't": 'cant', "mightn't": 'cant' }, e: 'cant' },
    { t: 'fill', pt: 'past', l: 1, p: "I can't find my wallet. I must ___ (leave) it at the store.", a: 'have left', w: { left: 'past', 'had left': 'form', leave: 'past' }, e: 'past' },
    { t: 'fill', pt: 'might', l: 1, p: "Take your phone. Your boss ___ call.", a: ['might', 'may', 'could'], w: { must: 'might', maybe: 'might' }, e: 'might' },
    { t: 'fill', pt: 'form', l: 1, p: 'She looks happy. She must ___ (get) the job.', a: ['have gotten', 'have got'], w: { 'had got': 'form', got: 'past', 'have getted': 'form' }, e: 'form' },
    { t: 'fill', pt: 'cont', l: 1, p: "She isn't answering. She ___ (might / drive).", a: ['might be driving', 'may be driving', 'could be driving'], w: { 'might drive': 'cont', 'might driving': 'cont' }, e: 'cont' },
    { t: 'fill', pt: 'past', l: 1, p: "You ___ (can't / see) him yesterday. He was in Chicago.", a: ["can't have seen", "couldn't have seen"], w: { "can't saw": 'past', "mustn't have seen": 'cant', "can't see": 'past' }, e: 'past' },
    { t: 'fill', pt: 'might', l: 1, p: "I'm not sure why the car won't start. It ___ be the battery.", a: ['might', 'could', 'may'], w: { must: 'might', "can't": 'might' }, e: 'might' },
    { t: 'build', pt: 'must', l: 1, a: 'You must be hungry after the flight.', x: ['have'], e: 'must' },
    { t: 'build', pt: 'past', l: 1, a: 'She must have forgotten about the meeting.', x: ['forgot'], e: 'form' },
    { t: 'build', pt: 'cant', l: 1, a: "That can't be true.", x: ["mustn't"], e: 'cant' },

    // ---------- Use
    { t: 'fill', pt: 'past', l: 2, p: "The streets are wet. It ___ (must / rain) last night.", a: 'must have rained', w: { 'must rain': 'past', 'must rained': 'form', 'must had rained': 'form' }, e: 'past' },
    { t: 'fill', pt: 'past', l: 2, p: "I'm not sure how he got home. He ___ (might / take) a taxi.", a: ['might have taken', 'may have taken', 'could have taken'], w: { 'might take': 'past', 'might have took': 'form', 'might took': 'form' }, e: 'past' },
    { t: 'fill', pt: 'cant', l: 2, p: "She ___ (can't / be) at work — it's Sunday!", a: "can't be", w: { "mustn't be": 'cant', "can't have been": 'cant' }, e: 'cant' },
    { t: 'fill', pt: 'cont', l: 2, p: 'Listen to the noise upstairs. The neighbors ___ (must / move) furniture.', a: 'must be moving', w: { 'must move': 'cont', 'must moving': 'cont' }, e: 'cont' },
    { t: 'fill', pt: 'past', l: 2, p: "The test was easy for him. He ___ (must / study) a lot.", a: 'must have studied', w: { 'must study': 'past', 'must studied': 'form' }, e: 'past' },
    { t: 'fill', pt: 'cant', l: 2, p: "He ___ (can't / forget) — I reminded him an hour ago!", a: ["can't have forgotten", "couldn't have forgotten"], w: { "can't forget": 'past', "mustn't have forgotten": 'cant', "can't have forgot": 'form' }, e: 'cant' },
    { t: 'fill', pt: 'must', l: 2, p: 'Your sister ___ (must / be) very proud of you.', a: 'must be', w: { 'must to be': 'form', 'can be': 'must' }, e: 'must' },
    { t: 'fill', pt: 'might', l: 2, p: "Where are my glasses? I ___ (might / leave) them in the car.", a: ['might have left', 'may have left', 'could have left'], w: { 'might left': 'form', 'might leave': 'past' }, e: 'past' },
    { t: 'build', pt: 'cont', l: 2, a: 'She must be working late again.', x: ['works'], e: 'cont' },
    { t: 'fix', pt: 'cant', l: 2, p: "He mustn't be at home — his car isn't there.", a: ["He can't be at home — his car isn't there.", "He couldn't be at home — his car isn't there."], e: 'cant' },
    { t: 'fix', pt: 'form', l: 2, p: 'They must have went on vacation.', a: ['They must have gone on vacation.'], e: 'form' },
    { t: 'fix', pt: 'past', l: 2, p: 'She must forget about our meeting yesterday.', a: ['She must have forgotten about our meeting yesterday.'], e: 'past' },
    { t: 'fix', pt: 'form', l: 2, p: "I can't find the keys. I might had dropped them.", a: ["I can't find the keys. I might have dropped them."], e: 'form' },
    { t: 'tr', pt: 'must', l: 2, i: "You're almost sure. Use *must*.", p: "I'm sure she's a doctor — she has a stethoscope.", s: 'She', a: ['She must be a doctor.', 'She must be a doctor — she has a stethoscope.'], e: 'must' },
    { t: 'tr', pt: 'past', l: 2, i: "You're almost sure about the past. Use *must have*.", p: "I'm sure he missed the train.", s: 'He', a: ['He must have missed the train.'], e: 'past' },
    { t: 'tl', pt: 'past', l: 2, uk: 'Вона, мабуть, забула.', ru: 'Она, наверное, забыла.', a: ['She must have forgotten.', 'She probably forgot.', "She must've forgotten."], e: 'past' },
    { t: 'tl', pt: 'cant', l: 2, uk: 'Не може бути! Ти жартуєш.', ru: 'Не может быть! Ты шутишь.', a: ["It can't be! You're joking.", "That can't be! You're joking.", "That can't be true! You're joking.", "It can't be true! You're joking.", "No way! You're joking.", "That can't be! You must be joking.", "It can't be! You must be joking."], e: 'cant' },

    // ---------- Pro
    { t: 'fix', pt: 'cont', l: 3, p: "Don't call her now. She must sleep.", a: ["Don't call her now. She must be sleeping.", "Don't call her now. She might be sleeping."], e: 'cont' },
    { t: 'fix', pt: 'might', l: 3, p: "I'm not sure, but she must be at her mother's.", a: ["I'm not sure, but she might be at her mother's.", "I'm not sure, but she may be at her mother's.", "I'm not sure, but she could be at her mother's."], e: 'might' },
    { t: 'fix', pt: 'cant', l: 3, p: "You can't saw him — he left two hours ago.", a: ["You can't have seen him — he left two hours ago.", "You couldn't have seen him — he left two hours ago."], e: 'past' },
    { t: 'fix', pt: 'must', l: 3, p: 'This must to be the place — look at the sign.', a: ['This must be the place — look at the sign.'], e: 'form' },
    { t: 'tr', pt: 'cant', l: 3, i: "You're sure it's not true. Use *can't have*.", p: "I'm sure she didn't say that — she's always polite.", s: 'She', a: ["She can't have said that.", "She couldn't have said that.", "She can't have said that — she's always polite."], e: 'cant' },
    { t: 'tr', pt: 'might', l: 3, i: "You're not sure. Use *might have*.", p: 'Maybe the package was delivered to the wrong address.', s: 'The package', a: ['The package might have been delivered to the wrong address.', 'The package may have been delivered to the wrong address.', 'The package could have been delivered to the wrong address.'], e: 'past' },
    { t: 'tr', pt: 'cont', l: 3, i: 'Guess what she is doing now. Use *must be + -ing*.', p: "I'm sure she's cooking — the whole house smells of garlic.", s: 'She', a: ['She must be cooking.', 'She must be cooking — the whole house smells of garlic.'], e: 'cont' },
    { t: 'tl', pt: 'must', l: 3, uk: 'Ви, мабуть, дуже втомилися після такої дороги.', ru: 'Вы, наверное, очень устали после такой дороги.', a: ['You must be very tired after such a long trip.', 'You must be very tired after such a trip.', 'You must be very tired after that trip.', 'You must be really tired after such a long trip.', 'You must be so tired after such a long trip.', 'You must be very tired after the trip.', 'You must be very tired after such a long journey.', 'You must be very tired after that long drive.'], e: 'must' },
    { t: 'tl', pt: 'might', l: 3, uk: 'Можливо, він не отримав мого повідомлення.', ru: 'Возможно, он не получил моё сообщение.', a: ["He might not have gotten my message.", "He may not have gotten my message.", "He might not have got my message.", "He may not have got my message.", "He might not have received my message.", "He may not have received my message.", "Maybe he didn't get my message.", "Maybe he didn't receive my message."], e: 'past' },
    { t: 'tl', pt: 'cont', l: 3, uk: 'Вона не відповідає — мабуть, ще спить.', ru: 'Она не отвечает — наверное, ещё спит.', a: ["She isn't answering — she must still be sleeping.", "She's not answering — she must still be sleeping.", "She isn't answering — she must be sleeping.", "She's not answering — she must be sleeping.", "She isn't answering — she must still be asleep.", "She's not answering — she must still be asleep.", "She isn't answering — she's probably still sleeping.", "She's not answering. She must still be sleeping."], e: 'cont' },
    { t: 'tl', pt: 'cant', l: 3, uk: 'Він не міг цього зробити — він був зі мною.', ru: 'Он не мог этого сделать — он был со мной.', a: ["He can't have done it — he was with me.", "He couldn't have done it — he was with me.", "He can't have done that — he was with me.", "He couldn't have done that — he was with me.", "He couldn't have done it. He was with me.", "He can't have done it. He was with me."], e: 'cant' },
    { t: 'fill', pt: 'past', l: 3, p: "The door was open when we came home. Someone ___ (must / break) in.", a: 'must have broken', w: { 'must break': 'past', 'must have broke': 'form', 'must broke': 'form' }, e: 'past' },
    { t: 'fill', pt: 'must', l: 3, p: "You ___ be Olena! Nice to finally meet you.", a: 'must', w: { "can't": 'must', might: 'must' }, e: 'must' },
    { t: 'fill', pt: 'might', l: 3, p: "Don't throw that away — we ___ need it later.", a: ['might', 'may', 'could'], w: { must: 'might', maybe: 'might' }, e: 'might' },
  ],
});
