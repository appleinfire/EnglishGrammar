APP.addTopic({
  id: 'cond3',
  title: 'If I had known… (past and mixed)',
  level: 'B2',
  group: 'Conditionals',
  icon: '🔙',
  about: 'If + had done, would have done; mixed conditionals',
  rule: {
    en: `**Imagining the past** (it did **not** happen) — 3rd conditional:
**If + had + 3rd form, would have + 3rd form**: *If I had known, I would have called you.* (I didn't know, so I didn't call.)
- *could have / might have* for possibility: *If we hadn't left early, we might have missed the flight.*
- No *would* in the *if* part: *If I had known* — not *If I would have known*.
- Form: *would have gone, would've seen* (in speech it sounds like "would of", but it's always **have**).
**Mixed conditionals**
- Past condition → result **now**: *If I had taken that job, I **would live** in Boston now.*
- Something always true (now) → past result: *If I **spoke** English better, I **would have got** that job.*`,
    uk: `**Уявне минуле** (цього **не** сталося) — 3-й тип:
**If + had + третя форма, would have + третя форма**: *If I had known, I would have called you* — «Якби я знала, я б тобі подзвонила». (Не знала — і не подзвонила.)
- *could have / might have* — для можливості: *If we hadn't left early, we might have missed the flight.*
- У частині з *if* — без *would*: *If I had known* — а не *If I would have known*.
- Форма: *would have gone, would've seen* (у мовленні звучить як «would of», але пишемо завжди **have**).
**Змішані умовні**
- Умова в минулому → наслідок **зараз**: *If I had taken that job, I **would live** in Boston now.*
- Щось завжди правдиве (зараз) → наслідок у минулому: *If I **spoke** English better, I **would have got** that job.*`,
    ru: `**Воображаемое прошлое** (этого **не** случилось) — 3-й тип:
**If + had + третья форма, would have + третья форма**: *If I had known, I would have called you* — «Если бы я знала, я бы тебе позвонила». (Не знала — и не позвонила.)
- *could have / might have* — для возможности: *If we hadn't left early, we might have missed the flight.*
- В части с *if* — без *would*: *If I had known* — а не *If I would have known*.
- Форма: *would have gone, would've seen* (в речи звучит как «would of», но пишем всегда **have**).
**Смешанные условные**
- Условие в прошлом → результат **сейчас**: *If I had taken that job, I **would live** in Boston now.*
- Что-то всегда верное (сейчас) → результат в прошлом: *If I **spoke** English better, I **would have got** that job.*`,
  },
  examples: ['If I had known, I would have called you.', "If we hadn't left early, we might have missed the flight.", 'If I had taken that job, I would live in Boston now.', 'If I spoke English better, I would have got that job.', "What would you have done if you'd been there?"],
  trap: {
    uk: 'Якби я знала, я б прийшла.',
    ru: 'Если бы я знала, я бы пришла.',
    wrong: 'If I would know, I would come.',
    right: 'If I had known, I would have come.',
    note: {
      en: 'Ukrainian *якби… б* and Russian *если бы… бы* look the same for now and for the past. English shows the past with **had done / would have done**, and never puts *would* after *if*.',
      uk: 'Українське «якби… б» однакове і для теперішнього, і для минулого. Англійською минуле показують **had done / would have done**, і після *if* ніколи не ставлять *would*.',
      ru: 'Русское «если бы… бы» одинаково и для настоящего, и для прошлого. По-английски прошлое показывают **had done / would have done**, и после *if* никогда не ставят *would*.',
    },
  },
  errors: {
    third: {
      en: 'Imagining the past (it didn\'t happen) → **If + had + 3rd form, would have + 3rd form**: *If she had studied, she would have passed.*',
      uk: 'Уявне минуле (цього не сталося) → **If + had + третя форма, would have + третя форма**: *If she had studied, she would have passed.*',
      ru: 'Воображаемое прошлое (этого не было) → **If + had + третья форма, would have + третья форма**: *If she had studied, she would have passed.*',
    },
    'if-would': {
      en: 'No **would** after *if*: *If I **had** known…* — not *If I would have known…*',
      uk: 'Після *if* — без **would**: *If I **had** known…* — а не *If I would have known…*',
      ru: 'После *if* — без **would**: *If I **had** known…* — а не *If I would have known…*',
    },
    form: {
      en: '**would / could / might have + 3rd form**: *would have gone, could have seen, might have missed*. Not *would have went*, not *would of*.',
      uk: '**would / could / might have + третя форма**: *would have gone, could have seen, might have missed*. Не *would have went* і не *would of*.',
      ru: '**would / could / might have + третья форма**: *would have gone, could have seen, might have missed*. Не *would have went* и не *would of*.',
    },
    'mixed-now': {
      en: 'Past condition, **present** result → *If + had done, **would + verb** (now)*: *If I had taken the job, I would live in Boston now.*',
      uk: 'Умова в минулому, наслідок **зараз** → *If + had done, **would + дієслово** (now)*: *If I had taken the job, I would live in Boston now.*',
      ru: 'Условие в прошлом, результат **сейчас** → *If + had done, **would + глагол** (now)*: *If I had taken the job, I would live in Boston now.*',
    },
    'mixed-past': {
      en: 'Something true **in general / now**, a **past** result → *If + past simple, would have done*: *If I spoke better English, I would have got the job.*',
      uk: 'Щось правдиве **загалом / зараз**, наслідок **у минулому** → *If + past simple, would have done*: *If I spoke better English, I would have got the job.*',
      ru: 'Что-то верное **вообще / сейчас**, результат **в прошлом** → *If + past simple, would have done*: *If I spoke better English, I would have got the job.*',
    },
    possibility: {
      en: 'Not sure about the imagined result → **might have / could have + 3rd form**: *We might have missed the flight. You could have been hurt.*',
      uk: 'Не впевнені в уявному наслідку → **might have / could have + третя форма**: *We might have missed the flight. You could have been hurt.*',
      ru: 'Не уверены в воображаемом результате → **might have / could have + третья форма**: *We might have missed the flight. You could have been hurt.*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'third', l: 1, p: 'If I had known, I ___ you.', a: 'would have called', o: ['would call', 'had called'], w: { 'would call': 'third', 'had called': 'third' }, e: 'third' },
    { t: 'choose', pt: 'if-would', l: 1, p: 'If she ___ harder, she would have passed.', a: 'had studied', o: ['would have studied', 'studied'], w: { 'would have studied': 'if-would', studied: 'third' }, e: 'if-would' },
    { t: 'choose', pt: 'form', l: 1, p: 'We would have ___ if it had been warmer.', a: 'gone', o: ['went', 'go'], w: { went: 'form', go: 'form' }, e: 'form' },
    { t: 'choose', pt: 'mixed-now', l: 1, p: 'If I had taken that job, I ___ in Boston now.', a: 'would live', o: ['would have lived', 'had lived'], w: { 'would have lived': 'mixed-now', 'had lived': 'mixed-now' }, e: 'mixed-now' },
    { t: 'choose', pt: 'possibility', l: 1, p: "If we hadn't left early, we ___ the flight.", a: 'might have missed', o: ['might miss', 'might missed'], w: { 'might miss': 'possibility', 'might missed': 'form' }, e: 'possibility' },
    { t: 'choose', pt: 'mixed-past', l: 1, p: 'If I ___ better English, I would have got that job.', a: 'spoke', o: ['would speak', 'speak'], w: { 'would speak': 'if-would', speak: 'mixed-past' }, e: 'mixed-past' },
    { t: 'fill', pt: 'third', l: 1, p: 'If you ___ (tell) me, I would have helped.', a: 'had told', w: { told: 'third', 'would have told': 'if-would', 'had tell': 'form' }, e: 'third' },
    { t: 'fill', pt: 'third', l: 1, p: "If it hadn't rained, we ___ (go) to the beach.", a: 'would have gone', w: { 'would go': 'third', 'would have went': 'form', 'had gone': 'third' }, e: 'third' },
    { t: 'fill', pt: 'form', l: 1, p: "I would ___ (buy) it if I'd had the money.", a: 'have bought', w: { 'have buyed': 'form', buy: 'third', 'of bought': 'form' }, e: 'form' },
    { t: 'fill', pt: 'if-would', l: 1, p: 'If we ___ (leave) earlier, we would have caught the bus.', a: 'had left', w: { 'would have left': 'if-would', left: 'third' }, e: 'if-would' },
    { t: 'fill', pt: 'possibility', l: 1, p: 'You ___ (could / be) hurt! Be more careful.', a: 'could have been', w: { 'could be': 'possibility', 'could have be': 'form' }, e: 'possibility' },
    { t: 'fill', pt: 'mixed-now', l: 1, p: "If she hadn't moved to Texas, she ___ (be) here now.", a: 'would be', w: { 'would have been': 'mixed-now', was: 'mixed-now' }, e: 'mixed-now' },
    { t: 'fill', pt: 'third', l: 1, p: "What would you have done if you ___ (be) in my place?", a: 'had been', w: { were: 'third', 'would have been': 'if-would' }, e: 'third' },
    { t: 'fill', pt: 'mixed-past', l: 1, p: "If I ___ (not / be) so shy, I would have talked to him.", a: ["weren't", "wasn't"], w: { "hadn't been": 'mixed-past', "wouldn't be": 'if-would' }, e: 'mixed-past', n: '*shy* is true about you in general, so the past simple: *If I weren\'t so shy…* (*If I hadn\'t been so shy* is also possible about that one moment.)' },
    { t: 'build', pt: 'third', l: 1, a: 'If I had known, I would have come.', x: ['would'], e: 'third' },
    { t: 'build', pt: 'form', l: 1, a: 'She would have loved this place.', x: ['of'], e: 'form' },
    { t: 'build', pt: 'mixed-now', l: 1, a: 'If I had saved money, I would be rich now.', x: ['have'], e: 'mixed-now' },

    // ---------- Use
    { t: 'fill', pt: 'third', l: 2, p: 'If the doctor ___ (see) her earlier, she ___ (not / need) surgery.', a: ["had seen|wouldn't have needed", 'had seen|would not have needed'], w: { "saw|wouldn't need": 'third', "would have seen|wouldn't have needed": 'if-would', "had seen|wouldn't need": 'third' }, e: 'third' },
    { t: 'fill', pt: 'mixed-now', l: 2, p: 'If I had learned to drive in Ukraine, I ___ (not / need) lessons now.', a: ["wouldn't need", 'would not need'], w: { "wouldn't have needed": 'mixed-now', "didn't need": 'mixed-now' }, e: 'mixed-now' },
    { t: 'fill', pt: 'possibility', l: 2, p: "If he had driven faster, he ___ (might / have) an accident.", a: 'might have had', w: { 'might have': 'possibility', 'might had': 'form', 'might have have': 'form' }, e: 'possibility' },
    { t: 'fill', pt: 'if-would', l: 2, p: "I wouldn't have said that if I ___ (know) she was listening.", a: ['had known', "'d known"], w: { 'would have known': 'if-would', knew: 'third' }, e: 'if-would' },
    { t: 'fill', pt: 'mixed-past', l: 2, p: 'If she ___ (be) more organized, she would have finished on time.', a: ['were', 'was', 'had been'], w: { 'would be': 'if-would', is: 'mixed-past' }, e: 'mixed-past' },
    { t: 'fill', pt: 'form', l: 2, p: 'We could ___ (take) a taxi — why did you walk?', a: 'have taken', w: { take: 'possibility', 'have took': 'form', 'of taken': 'form' }, e: 'form' },
    { t: 'fill', pt: 'third', l: 2, p: "If you ___ (not / remind) me, I'd have forgotten the appointment.", a: ["hadn't reminded", 'had not reminded'], w: { "didn't remind": 'third', "wouldn't have reminded": 'if-would' }, e: 'third' },
    { t: 'fill', pt: 'mixed-now', l: 2, p: 'If we had bought that house, we ___ (have) a garden now.', a: 'would have', w: { 'would have had': 'mixed-now', had: 'mixed-now' }, e: 'mixed-now' },
    { t: 'build', pt: 'possibility', l: 2, a: 'We might have missed the train.', x: ['miss'], e: 'possibility' },
    { t: 'fix', pt: 'if-would', l: 2, p: 'If I would have known, I would have come earlier.', a: ['If I had known, I would have come earlier.', "If I'd known, I would have come earlier."], e: 'if-would' },
    { t: 'fix', pt: 'form', l: 2, p: 'If we had left at six, we would have went to the museum.', a: ['If we had left at six, we would have gone to the museum.'], e: 'form' },
    { t: 'fix', pt: 'third', l: 2, p: 'If she studied, she would have passed the exam.', a: ['If she had studied, she would have passed the exam.'], e: 'third' },
    { t: 'fix', pt: 'mixed-now', l: 2, p: "If I hadn't eaten so much, I wouldn't have felt sick now.", a: ["If I hadn't eaten so much, I wouldn't feel sick now.", "If I hadn't eaten so much, I wouldn't be sick now."], e: 'mixed-now' },
    { t: 'tr', pt: 'third', l: 2, i: 'Imagine the past. Start with *If*.', p: "I didn't know about the sale, so I didn't buy the sofa.", s: 'If I had', a: ['If I had known about the sale, I would have bought the sofa.'], e: 'third' },
    { t: 'tr', pt: 'mixed-now', l: 2, i: 'Past condition, result now.', p: "I didn't go to bed early, so I'm tired now.", s: 'If I had', a: ["If I had gone to bed early, I wouldn't be tired now.", 'If I had gone to bed early, I would not be tired now.'], e: 'mixed-now' },
    { t: 'tl', pt: 'third', l: 2, uk: 'Якби я знала, я б прийшла.', ru: 'Если бы я знала, я бы пришла.', a: ['If I had known, I would have come.', "If I'd known, I would have come.", "If I had known, I'd have come."], e: 'third' },
    { t: 'tl', pt: 'possibility', l: 2, uk: 'Ти могла б мене попередити!', ru: 'Ты могла бы меня предупредить!', a: ['You could have warned me!', 'You could have told me!', "You could've warned me!", 'You could have let me know!'], e: 'possibility' },

    // ---------- Pro
    { t: 'fix', pt: 'mixed-past', l: 3, p: "If I wasn't afraid of flying, I would visit you last summer.", a: ["If I wasn't afraid of flying, I would have visited you last summer.", "If I weren't afraid of flying, I would have visited you last summer."], e: 'mixed-past' },
    { t: 'fix', pt: 'possibility', l: 3, p: 'If the ambulance had come later, he might die.', a: ['If the ambulance had come later, he might have died.', 'If the ambulance had come later, he could have died.', 'If the ambulance had come later, he would have died.'], e: 'possibility' },
    { t: 'fix', pt: 'if-would', l: 3, p: "If you would have asked me, I would have helped you.", a: ['If you had asked me, I would have helped you.', "If you'd asked me, I would have helped you."], e: 'if-would' },
    { t: 'fix', pt: 'form', l: 3, p: 'I would of called you, but my phone died.', a: ['I would have called you, but my phone died.'], e: 'form' },
    { t: 'tr', pt: 'mixed-past', l: 3, i: 'A fact about you now → a past result.', p: "I don't speak Spanish, so I couldn't help the tourist yesterday.", s: 'If I spoke Spanish,', a: ['If I spoke Spanish, I could have helped the tourist yesterday.', 'If I spoke Spanish, I would have helped the tourist yesterday.', 'If I spoke Spanish, I could have helped the tourist.'], e: 'mixed-past' },
    { t: 'tr', pt: 'third', l: 3, i: 'Start with *If* and use *wouldn\'t have*.', p: 'We got lost because we didn\'t have a map.', s: 'If we had had', a: ["If we had had a map, we wouldn't have got lost.", "If we had had a map, we wouldn't have gotten lost.", 'If we had had a map, we would not have got lost.'], e: 'third' },
    { t: 'tr', pt: 'possibility', l: 3, i: 'Use *could have* — another option existed.', p: 'Why did you walk? A taxi was possible.', s: 'You', a: ['You could have taken a taxi.'], e: 'possibility' },
    { t: 'tl', pt: 'mixed-now', l: 3, uk: 'Якби ми не переїхали, я б зараз жила в Києві.', ru: 'Если бы мы не переехали, я бы сейчас жила в Киеве.', a: ["If we hadn't moved, I would live in Kyiv now.", "If we hadn't moved, I would be living in Kyiv now.", "If we hadn't moved, I'd be living in Kyiv now.", "If we had not moved, I would live in Kyiv now.", "If we hadn't moved, I would now live in Kyiv.", "If we hadn't moved, I would still live in Kyiv."], e: 'mixed-now' },
    { t: 'tl', pt: 'third', l: 3, uk: 'Якби ти мені сказала, я б тобі допомогла.', ru: 'Если бы ты мне сказала, я бы тебе помогла.', a: ['If you had told me, I would have helped you.', "If you'd told me, I would have helped you.", "If you had told me, I'd have helped you.", 'I would have helped you if you had told me.', "I would have helped you if you'd told me."], e: 'third' },
    { t: 'tl', pt: 'possibility', l: 3, uk: 'Ми могли спізнитися на літак.', ru: 'Мы могли опоздать на самолёт.', a: ['We could have missed the plane.', 'We might have missed the plane.', 'We could have missed the flight.', 'We might have missed the flight.'], e: 'possibility' },
    { t: 'tl', pt: 'mixed-past', l: 3, uk: 'Якби я краще говорила англійською, мене б узяли на ту роботу.', ru: 'Если бы я лучше говорила по-английски, меня бы взяли на ту работу.', a: ['If I spoke English better, I would have got that job.', 'If I spoke better English, I would have got that job.', 'If I spoke English better, I would have gotten that job.', 'If I spoke better English, I would have gotten that job.', 'If my English were better, I would have got that job.', 'If my English were better, I would have gotten that job.', 'If my English was better, I would have got that job.', 'If my English was better, I would have gotten that job.', 'If I spoke English better, they would have hired me for that job.', 'If I spoke better English, they would have given me that job.'], e: 'mixed-past' },
    { t: 'tl', pt: 'if-would', l: 3, uk: 'Що б ти зробила, якби втратила роботу?', ru: 'Что бы ты сделала, если бы потеряла работу?', a: ['What would you have done if you had lost your job?', 'What would you do if you lost your job?', "What would you have done if you'd lost your job?"], e: 'if-would', n: 'Both are right: about the past (*would have done if you had lost*) or about an imagined now (*would do if you lost*).' },
    { t: 'fill', pt: 'third', l: 3, p: 'She ___ (not / get) the job if she hadn\'t practiced so much.', a: ["wouldn't have gotten", "wouldn't have got", 'would not have gotten', 'would not have got'], w: { "wouldn't get": 'third', "hadn't got": 'third' }, e: 'third' },
    { t: 'fill', pt: 'mixed-now', l: 3, p: "If you'd listened to the doctor, you ___ (feel) better by now.", a: 'would feel', w: { 'would have felt': 'mixed-now', felt: 'mixed-now' }, e: 'mixed-now' },
    { t: 'fill', pt: 'form', l: 3, p: "I'm sure she ___ (would / help) if you had asked her.", a: ['would have helped', "'d have helped"], w: { 'would help': 'third', 'would of helped': 'form', 'would have help': 'form' }, e: 'form' },
  ],
});
