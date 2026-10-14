APP.addTopic({
  id: 'mod2',
  title: 'should, had better, might, may',
  level: 'B1',
  group: 'Modals',
  icon: '🧭',
  about: 'advice and maybe: You should… It might…',
  rule: {
    en: `**Advice**
- **should / shouldn't** + verb: *You should see a doctor. You shouldn't drive tonight.* **ought to** = should (more formal): *You ought to rest.*
- **had better ('d better)** + verb — strong advice, a warning (something bad may happen): *You'd better take an umbrella. We'd better not be late.*
- **could** — a softer suggestion, one option: *You could ask your neighbor.*
**Maybe (possibility)**
- **may / might / could** + verb = maybe: *It might rain. She may be late. That could be the problem.* Negative: **may not / might not**: *He might not come.*
- **maybe** is a separate word at the start: *Maybe it will rain* = *It might rain.* Not *It maybe rain*.
- **can't** = impossible: *That can't be true.*
After all these (except *ought to*) the verb has **no to** and no *-s*: *She might call*, not *might to call / might calls*.`,
    uk: `**Порада**
- **should / shouldn't** + дієслово: *You should see a doctor* — «Тобі варто сходити до лікаря». *You shouldn't drive tonight.* **ought to** = should (офіційніше): *You ought to rest.*
- **had better ('d better)** + дієслово — наполеглива порада, попередження (інакше буде погано): *You'd better take an umbrella. We'd better not be late.*
- **could** — м'яка пропозиція, один із варіантів: *You could ask your neighbor.*
**Можливо (ймовірність)**
- **may / might / could** + дієслово = можливо: *It might rain. She may be late. That could be the problem.* Заперечення: **may not / might not**: *He might not come.*
- **maybe** — окреме слово на початку: *Maybe it will rain* = *It might rain.* Не *It maybe rain*.
- **can't** = неможливо: *That can't be true.*
Після них усіх (крім *ought to*) дієслово **без to** і без *-s*: *She might call*, а не *might to call / might calls*.`,
    ru: `**Совет**
- **should / shouldn't** + глагол: *You should see a doctor* — «Тебе стоит сходить к врачу». *You shouldn't drive tonight.* **ought to** = should (официальнее): *You ought to rest.*
- **had better ('d better)** + глагол — настойчивый совет, предупреждение (иначе будет плохо): *You'd better take an umbrella. We'd better not be late.*
- **could** — мягкое предложение, один из вариантов: *You could ask your neighbor.*
**Может быть (вероятность)**
- **may / might / could** + глагол = возможно: *It might rain. She may be late. That could be the problem.* Отрицание: **may not / might not**: *He might not come.*
- **maybe** — отдельное слово в начале: *Maybe it will rain* = *It might rain.* Не *It maybe rain*.
- **can't** = невозможно: *That can't be true.*
После них всех (кроме *ought to*) глагол **без to** и без *-s*: *She might call*, а не *might to call / might calls*.`,
  },
  examples: ['You should see a doctor about that.', "You'd better take an umbrella.", 'It might rain this afternoon.', "He might not come to the party.", "You could ask your neighbor for help."],
  trap: {
    uk: 'Можливо, вона запізниться.',
    ru: 'Возможно, она опоздает.',
    wrong: 'She maybe will late.',
    right: 'She might be late.',
    note: {
      en: '*можливо / возможно* is usually **might / may** + verb in English: *She might be late.* Or *Maybe she will be late* — with *maybe* at the start.',
      uk: '«Можливо» англійською зазвичай — **might / may** + дієслово: *She might be late.* Або *Maybe she will be late* — з *maybe* на початку.',
      ru: '«Возможно» по-английски обычно — **might / may** + глагол: *She might be late.* Или *Maybe she will be late* — с *maybe* в начале.',
    },
  },
  errors: {
    form: {
      en: '**should, might, may, could, had better** + verb **without to** and without *-s*: *You should rest. She might call. We\'d better go.* (Only *ought* takes *to*.)',
      uk: '**should, might, may, could, had better** + дієслово **без to** і без *-s*: *You should rest. She might call. We\'d better go.* (Лише *ought* — з *to*.)',
      ru: '**should, might, may, could, had better** + глагол **без to** и без *-s*: *You should rest. She might call. We\'d better go.* (Только *ought* — с *to*.)',
    },
    might: {
      en: 'Not sure, maybe → **may / might / could** + verb: *It might rain. She may be late. That could be the reason.*',
      uk: 'Не впевнені, можливо → **may / might / could** + дієслово: *It might rain. She may be late. That could be the reason.*',
      ru: 'Не уверены, возможно → **may / might / could** + глагол: *It might rain. She may be late. That could be the reason.*',
    },
    maybe: {
      en: '**maybe** is one word that goes at the **start**: *Maybe she\'s sick.* Inside the sentence use **might / may**: *She might be sick.* Not *She maybe sick*, not *may be* in the middle as "maybe".',
      uk: '**maybe** — одне слово, ставимо **на початок**: *Maybe she\'s sick.* Усередині речення — **might / may**: *She might be sick.* Не *She maybe sick*.',
      ru: '**maybe** — одно слово, ставим **в начало**: *Maybe she\'s sick.* Внутри предложения — **might / may**: *She might be sick.* Не *She maybe sick*.',
    },
    'had-better': {
      en: '**had better** (short: *\'d better*) + verb — strong advice or a warning. Negative: **had better not**: *You\'d better not be late.* Not *had better to*, not *have better*.',
      uk: '**had better** (коротко *\'d better*) + дієслово — наполеглива порада чи попередження. Заперечення: **had better not**: *You\'d better not be late.* Не *had better to* і не *have better*.',
      ru: '**had better** (коротко *\'d better*) + глагол — настойчивый совет или предупреждение. Отрицание: **had better not**: *You\'d better not be late.* Не *had better to* и не *have better*.',
    },
    should: {
      en: 'Advice → **should / shouldn\'t** + verb: *You should drink more water.* (*must* is stronger: a rule or an obligation.)',
      uk: 'Порада → **should / shouldn\'t** + дієслово: *You should drink more water.* (*must* — сильніше: правило чи обов\'язок.)',
      ru: 'Совет → **should / shouldn\'t** + глагол: *You should drink more water.* (*must* — сильнее: правило или обязанность.)',
    },
    'cant-impossible': {
      en: '**might not** = maybe not (*He might not come*). **can\'t** = it is impossible, I\'m sure it\'s not true (*That can\'t be true*).',
      uk: '**might not** = можливо, ні (*He might not come*). **can\'t** = неможливо, я впевнена, що це не так (*That can\'t be true*).',
      ru: '**might not** = возможно, нет (*He might not come*). **can\'t** = невозможно, я уверена, что это не так (*That can\'t be true*).',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'should', l: 1, p: "You have a fever. You ___ see a doctor.", a: 'should', o: ['should to', 'might'], w: { 'should to': 'form', might: 'should' }, e: 'should' },
    { t: 'choose', pt: 'might', l: 1, p: "Take an umbrella. It ___ rain later.", a: 'might', o: ['maybe', 'should'], w: { maybe: 'maybe', should: 'might' }, e: 'might' },
    { t: 'choose', pt: 'had-better', l: 1, p: "We ___ leave now, or we'll miss the train.", a: "'d better", o: ['better to', 'have better'], w: { 'better to': 'had-better', 'have better': 'had-better' }, e: 'had-better' },
    { t: 'choose', pt: 'form', l: 1, p: 'She might ___ late tonight.', a: 'be', o: ['to be', 'is'], w: { 'to be': 'form', is: 'form' }, e: 'form' },
    { t: 'choose', pt: 'maybe', l: 1, p: "___ he's still at work.", a: 'Maybe', o: ['May', 'Might'], w: { May: 'maybe', Might: 'maybe' }, e: 'maybe' },
    { t: 'choose', pt: 'cant', l: 1, p: "That ___ be true! I saw him an hour ago.", a: "can't", o: ["might not", "shouldn't"], w: { 'might not': 'cant-impossible', "shouldn't": 'cant-impossible' }, e: 'cant-impossible' },
    { t: 'fill', pt: 'should', l: 1, p: "You ___ (not / eat) so much sugar.", a: "shouldn't eat", w: { "don't should eat": 'form', "shouldn't to eat": 'form' }, e: 'should' },
    { t: 'fill', pt: 'might', l: 1, p: "I'm not sure, but I ___ (might / be) able to come.", a: 'might be', w: { 'might to be': 'form', 'maybe be': 'maybe' }, e: 'might' },
    { t: 'fill', pt: 'had-better', l: 1, p: "You'd ___ (better / not) tell anyone about this.", a: 'better not', w: { "better don't": 'had-better', 'not better': 'had-better' }, e: 'had-better' },
    { t: 'fill', pt: 'form', l: 1, p: 'He may ___ (call) you tonight.', a: 'call', w: { calls: 'form', 'to call': 'form' }, e: 'form' },
    { t: 'fill', pt: 'should', l: 1, p: 'What do you think I ___ do?', a: 'should', w: { must: 'should', 'should to': 'form' }, e: 'should' },
    { t: 'fill', pt: 'might', l: 1, p: "Don't wait for me. I ___ (might / not / come).", a: 'might not come', w: { "mightn't to come": 'form', "maybe don't come": 'maybe', "can't come": 'cant-impossible' }, e: 'might' },
    { t: 'fill', pt: 'suggest', l: 1, p: "If you're bored, you ___ (could / take) a dance class.", a: 'could take', w: { 'could to take': 'form', 'could taking': 'form' }, e: 'form' },
    { t: 'fill', pt: 'should', l: 1, p: 'You ought ___ (rest) more.', a: 'to rest', w: { rest: 'form', resting: 'form' }, e: 'form' },
    { t: 'build', pt: 'should', l: 1, a: 'You should drink more water.', x: ['to'], e: 'form' },
    { t: 'build', pt: 'might', l: 1, a: 'It might snow tomorrow.', x: ['maybe'], e: 'maybe' },
    { t: 'build', pt: 'had-better', l: 1, a: "You'd better hurry up.", x: ['to'], e: 'had-better' },

    // ---------- Use
    { t: 'fill', pt: 'might', l: 2, p: "Why isn't she answering? She ___ (may / be) in a meeting.", a: ['may be', 'might be', 'could be'], w: { maybe: 'maybe', 'may is': 'form' }, e: 'might' },
    { t: 'fill', pt: 'had-better', l: 2, p: "It's icy outside. You ___ (had better / drive) slowly.", a: ["'d better drive", 'had better drive'], w: { 'better drive': 'had-better', 'had better to drive': 'had-better', 'have better drive': 'had-better' }, e: 'had-better' },
    { t: 'fill', pt: 'cant', l: 2, p: "She ___ be at home — her car isn't there.", a: ["can't", 'cannot', "couldn't"], w: { "mightn't": 'cant-impossible', "shouldn't": 'cant-impossible', "mustn't": 'cant-impossible' }, e: 'cant-impossible' },
    { t: 'fill', pt: 'suggest', l: 2, p: '— Where can I get cheap furniture? — You ___ try IKEA or a thrift store.', a: ['could', 'should', 'might'], w: { must: 'should', 'could to': 'form' }, e: 'should' },
    { t: 'fill', pt: 'maybe', l: 2, p: "___ we should call a plumber.", a: 'Maybe', w: { 'May be': 'maybe', Might: 'maybe' }, e: 'maybe' },
    { t: 'fill', pt: 'should', l: 2, p: '___ I ___ (bring) anything to the party?', a: ['Should|bring', 'Shall|bring'], w: { 'Do|should bring': 'form', 'Should|to bring': 'form' }, e: 'should' },
    { t: 'fill', pt: 'might', l: 2, p: 'Be careful with that box — it ___ (could / be) heavy.', a: ['could be', 'might be', 'may be'], w: { 'could is': 'form', 'could to be': 'form' }, e: 'might' },
    { t: 'fill', pt: 'should', l: 2, p: "You ___ (ought / not) to work when you're sick.", a: ['ought not', "oughtn't"], w: { "don't ought": 'form', 'ought to not': 'form' }, e: 'form' },
    { t: 'build', pt: 'cant', l: 2, a: "This can't be the right address.", x: ['might'], e: 'cant-impossible' },
    { t: 'fix', pt: 'form', l: 2, p: 'You should to talk to your boss.', a: ['You should talk to your boss.'], e: 'form' },
    { t: 'fix', pt: 'maybe', l: 2, p: 'She maybe is sick today.', a: ['She might be sick today.', 'She may be sick today.', 'Maybe she is sick today.', "Maybe she's sick today.", 'She could be sick today.'], e: 'maybe' },
    { t: 'fix', pt: 'had-better', l: 2, p: "You'd better to take your passport.", a: ["You'd better take your passport."], e: 'had-better' },
    { t: 'fix', pt: 'might', l: 2, p: 'It mights be expensive.', a: ['It might be expensive.'], e: 'form' },
    { t: 'tr', pt: 'might', l: 2, i: 'Use *might* instead of *maybe*.', p: 'Maybe the store is closed.', s: 'The store', a: ['The store might be closed.'], e: 'might' },
    { t: 'tr', pt: 'should', l: 2, i: 'Give advice with *should*.', p: "I'm always tired. (go to bed earlier)", s: 'You', a: ['You should go to bed earlier.'], e: 'should' },
    { t: 'tl', pt: 'should', l: 2, uk: 'Тобі варто поговорити з лікарем.', ru: 'Тебе стоит поговорить с врачом.', a: ['You should talk to a doctor.', 'You should talk to your doctor.', 'You should speak to a doctor.', 'You should speak to your doctor.', 'You should talk to the doctor.', 'You ought to talk to a doctor.', 'You should talk with a doctor.', 'You should see a doctor.'], e: 'should' },
    { t: 'tl', pt: 'might', l: 2, uk: 'Можливо, вона запізниться.', ru: 'Возможно, она опоздает.', a: ['She might be late.', 'She may be late.', 'Maybe she will be late.', "Maybe she'll be late.", 'She could be late.'], e: 'might' },

    // ---------- Pro
    { t: 'fix', pt: 'cant', l: 3, p: "He might not be 40 — he looks so young!", a: ["He can't be 40 — he looks so young!", "He can't be forty — he looks so young!"], e: 'cant-impossible' },
    { t: 'fix', pt: 'had-better', l: 3, p: "We had better don't wake the baby.", a: ["We had better not wake the baby.", "We'd better not wake the baby."], e: 'had-better' },
    { t: 'fix', pt: 'should', l: 3, p: 'Do you think I should to call her?', a: ['Do you think I should call her?'], e: 'form' },
    { t: 'fix', pt: 'maybe', l: 3, p: 'It may be will rain tomorrow.', a: ['It might rain tomorrow.', 'It may rain tomorrow.', 'Maybe it will rain tomorrow.', 'It could rain tomorrow.'], e: 'maybe' },
    { t: 'tr', pt: 'had-better', l: 3, i: "It's a warning. Use *'d better*.", p: 'Take a jacket, or you will freeze.', s: "You'd better", a: ["You'd better take a jacket.", "You'd better take a jacket, or you'll freeze."], e: 'had-better' },
    { t: 'tr', pt: 'suggest', l: 3, i: 'Suggest one option with *could*.', p: 'Maybe ask your landlord to fix it?', s: 'You', a: ['You could ask your landlord to fix it.'], e: 'should' },
    { t: 'tr', pt: 'cant', l: 3, i: "You're sure it's not true. Use *can't*.", p: "I'm sure this isn't her phone — hers is pink.", s: 'This', a: ["This can't be her phone.", "This can't be her phone — hers is pink."], e: 'cant-impossible' },
    { t: 'tl', pt: 'had-better', l: 3, uk: 'Краще не запізнюватися — лікар суворий.', ru: 'Лучше не опаздывать — врач строгий.', a: ["We'd better not be late — the doctor is strict.", "You'd better not be late — the doctor is strict.", "We had better not be late — the doctor is strict.", "You had better not be late — the doctor is strict.", "We'd better not be late, the doctor is strict.", "You'd better not be late, the doctor is strict.", "We'd better not be late because the doctor is strict.", "You'd better not be late because the doctor is strict."], e: 'had-better' },
    { t: 'tl', pt: 'might', l: 3, uk: 'Він, можливо, не прийде сьогодні.', ru: 'Он, возможно, не придёт сегодня.', a: ['He might not come today.', 'He may not come today.', 'Maybe he will not come today.', "Maybe he won't come today.", "He might not come tonight.", 'He may not come tonight.'], e: 'might' },
    { t: 'tl', pt: 'cant', l: 3, uk: 'Це не може бути правдою!', ru: 'Это не может быть правдой!', a: ["That can't be true!", "This can't be true!", 'That cannot be true!', 'This cannot be true!', "It can't be true!"], e: 'cant-impossible' },
    { t: 'tl', pt: 'suggest', l: 3, uk: 'Ти могла б запитати сусідку.', ru: 'Ты могла бы спросить соседку.', a: ['You could ask your neighbor.', 'You could ask the neighbor.', 'You could ask your neighbour.', 'You might ask your neighbor.', 'You could ask a neighbor.'], e: 'should' },
    { t: 'tl', pt: 'should', l: 3, uk: 'Як ти думаєш, що мені робити?', ru: 'Как ты думаешь, что мне делать?', a: ['What do you think I should do?', 'What should I do, do you think?', 'What do you think I ought to do?'], e: 'should' },
    { t: 'fill', pt: 'might', l: 3, p: "I can't find my keys. I ___ (may / leave) them in the car.", a: ['may have left', 'might have left', 'could have left'], w: { 'may left': 'form', 'might left': 'form', 'maybe left': 'maybe' }, e: 'might', n: 'About the past: *may / might / could* + **have + 3rd form**.' },
    { t: 'fill', pt: 'cant', l: 3, p: "You just ate! You ___ (can't / be) hungry again.", a: "can't be", w: { "mightn't be": 'cant-impossible', "can't to be": 'form' }, e: 'cant-impossible' },
    { t: 'fill', pt: 'had-better', l: 3, p: "The roads are bad — we'd better ___ (not / go) tonight.", a: 'not go', w: { "don't go": 'had-better', 'not to go': 'had-better', 'not going': 'had-better' }, e: 'had-better' },
  ],
});
