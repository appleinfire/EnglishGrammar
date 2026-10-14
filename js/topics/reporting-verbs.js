APP.addTopic({
  id: 'repv',
  title: 'advise me to, offer to, deny doing',
  level: 'B2',
  group: 'Reported speech',
  icon: '📣',
  about: 'reporting verbs: advise, offer, refuse, deny, suggest…',
  rule: {
    en: `Reporting verbs tell us **what kind** of thing someone said. Each verb has its own pattern:
- verb + **person + to**: *advise, tell, ask, remind, warn, encourage, invite* — *The doctor **advised me to rest**. She **warned us not to go**.*
- verb + **to** (no person): *offer, refuse, promise, agree, threaten* — *He **offered to help**.* (not *offered me to help*)
- verb + **-ing**: *deny, admit, recommend, suggest* — *He **denied taking** the money.*
- verb + **preposition + -ing**: *apologize **for**, insist **on**, thank sb **for**, accuse sb **of**, blame sb **for*** — *She **insisted on paying**.*
- **suggest**: *suggest **doing*** or *suggest **(that) I do*** — never *suggest me to*.
- **say** something / **tell someone** something / **explain to** someone: *She told me… He said that… Explain **to me**…*`,
    uk: `Дієслова передачі мови показують, **що саме** людина зробила словами: порадила, пообіцяла, заперечила. У кожного своя схема:
- дієслово + **людина + to**: *advise, tell, ask, remind, warn, encourage, invite* — *The doctor **advised me to rest*** — «Лікар порадив мені відпочити».
- дієслово + **to** (без людини): *offer, refuse, promise, agree, threaten* — *He **offered to help*** — «Він запропонував допомогти» (не *offered me to help*).
- дієслово + **-ing**: *deny, admit, recommend, suggest* — *He **denied taking** the money* — «Він заперечив, що взяв гроші».
- дієслово + **прийменник + -ing**: *apologize **for**, insist **on**, thank sb **for**, accuse sb **of**, blame sb **for*** — *She **insisted on paying**.*
- **suggest**: *suggest **doing*** або *suggest **(that) I do*** — ніколи *suggest me to*, хоча «запропонувала **мені**».
- **say** щось / **tell кому**-то щось / **explain to** кому-то: *She told me… He said that… Explain **to me**…* (не *explain me*).`,
    ru: `Глаголы передачи речи показывают, **что именно** человек сделал словами: посоветовал, пообещал, отрицал. У каждого своя схема:
- глагол + **человек + to**: *advise, tell, ask, remind, warn, encourage, invite* — *The doctor **advised me to rest*** — «Врач посоветовал мне отдохнуть».
- глагол + **to** (без человека): *offer, refuse, promise, agree, threaten* — *He **offered to help*** — «Он предложил помочь» (не *offered me to help*).
- глагол + **-ing**: *deny, admit, recommend, suggest* — *He **denied taking** the money* — «Он отрицал, что взял деньги».
- глагол + **предлог + -ing**: *apologize **for**, insist **on**, thank sb **for**, accuse sb **of**, blame sb **for*** — *She **insisted on paying**.*
- **suggest**: *suggest **doing*** или *suggest **(that) I do*** — никогда *suggest me to*, хотя «предложила **мне**».
- **say** что-то / **tell кому**-то что-то / **explain to** кому-то: *She told me… He said that… Explain **to me**…* (не *explain me*).`,
  },
  examples: ['The doctor advised me to rest.', 'He offered to help.', 'He denied taking the money.', 'She insisted on paying.', 'She suggested that I see another doctor.'],
  trap: {
    uk: 'Вона запропонувала мені піти до іншого лікаря.',
    ru: 'Она предложила мне пойти к другому врачу.',
    wrong: 'She suggested me to see another doctor.',
    right: 'She suggested that I see another doctor.',
    note: {
      en: '*Запропонувала мені* / *предложила мне* has a person, but English **suggest** doesn\'t take *me to*. Say *suggested that I see*, *suggested seeing*, or use *advised me to*.',
      uk: 'У «запропонувала **мені**» є людина, але англійське **suggest** не має схеми *me to*. Кажіть *suggested that I see*, *suggested seeing* або *advised me to*.',
      ru: 'В «предложила **мне**» есть человек, но английское **suggest** не имеет схемы *me to*. Говорите *suggested that I see*, *suggested seeing* или *advised me to*.',
    },
  },
  errors: {
    objto: {
      en: '**advise, tell, ask, remind, warn, encourage, invite, order** + **person + to + verb**: *She reminded me to call. He warned us not to go.*',
      uk: '**advise, tell, ask, remind, warn, encourage, invite, order** + **людина + to + дієслово**: *She reminded me to call. He warned us not to go.*',
      ru: '**advise, tell, ask, remind, warn, encourage, invite, order** + **человек + to + глагол**: *She reminded me to call. He warned us not to go.*',
    },
    noobj: {
      en: '**offer, refuse, promise, agree, threaten** + **to + verb**, with no person before *to*: *He offered to help me* (not *offered me to help*).',
      uk: '**offer, refuse, promise, agree, threaten** + **to + дієслово**, без людини перед *to*: *He offered to help me* (не *offered me to help*).',
      ru: '**offer, refuse, promise, agree, threaten** + **to + глагол**, без человека перед *to*: *He offered to help me* (не *offered me to help*).',
    },
    ing: {
      en: '**deny, admit, recommend, suggest** + **-ing**: *He denied taking it. She admitted making a mistake.* Not *denied to take*.',
      uk: '**deny, admit, recommend, suggest** + **-ing**: *He denied taking it. She admitted making a mistake.* Не *denied to take*.',
      ru: '**deny, admit, recommend, suggest** + **-ing**: *He denied taking it. She admitted making a mistake.* Не *denied to take*.',
    },
    prep: {
      en: 'Fixed prepositions + **-ing**: *apologize **for**, thank sb **for**, blame sb **for**, accuse sb **of**, insist **on***.',
      uk: 'Сталі прийменники + **-ing**: *apologize **for**, thank sb **for**, blame sb **for**, accuse sb **of**, insist **on***.',
      ru: 'Устойчивые предлоги + **-ing**: *apologize **for**, thank sb **for**, blame sb **for**, accuse sb **of**, insist **on***.',
    },
    suggest: {
      en: '**suggest / recommend** + **-ing** or **(that) + person + base verb**: *She suggested taking a taxi. I suggest (that) you call the bank.* Never *suggest me to*.',
      uk: '**suggest / recommend** + **-ing** або **(that) + людина + дієслово без закінчень**: *She suggested taking a taxi. I suggest (that) you call the bank.* Ніколи *suggest me to*.',
      ru: '**suggest / recommend** + **-ing** или **(that) + человек + глагол без окончаний**: *She suggested taking a taxi. I suggest (that) you call the bank.* Никогда *suggest me to*.',
    },
    saytell: {
      en: '**tell + person** (*told me*), **say** without a person (*said that*), **explain to + person** (*explain to me*). Not *said me*, *told to me*, *explain me*.',
      uk: '**tell + людина** (*told me*), **say** без людини (*said that*), **explain to + людина** (*explain to me*). Не *said me*, *told to me*, *explain me*.',
      ru: '**tell + человек** (*told me*), **say** без человека (*said that*), **explain to + человек** (*explain to me*). Не *said me*, *told to me*, *explain me*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'objto', l: 1, p: 'My doctor ___ me to walk more.', a: 'advised', o: ['suggested', 'said'], w: { suggested: 'suggest', said: 'saytell' }, e: 'objto' },
    { t: 'choose', pt: 'noobj', l: 1, p: 'He ___ to drive me to the airport.', a: 'offered', o: ['suggested', 'advised'], w: { suggested: 'suggest', advised: 'objto' }, e: 'noobj' },
    { t: 'choose', pt: 'ing', l: 1, p: 'He ___ taking the money.', a: 'denied', o: ['refused', 'promised'], w: { refused: 'noobj', promised: 'noobj' }, e: 'ing' },
    { t: 'choose', pt: 'prep', l: 1, p: 'She apologized ___ being late.', a: 'for', o: ['about', 'of'], w: { about: 'prep', of: 'prep' }, e: 'prep' },
    { t: 'choose', pt: 'saytell', l: 1, p: 'She ___ me she was moving to Denver.', a: 'told', o: ['said', 'explained'], w: { said: 'saytell', explained: 'saytell' }, e: 'saytell' },
    { t: 'choose', pt: 'suggest', l: 1, p: 'My friend suggested ___ a different lawyer.', a: 'trying', o: ['to try', 'me to try'], w: { 'to try': 'suggest', 'me to try': 'suggest' }, e: 'suggest' },
    { t: 'fill', pt: 'objto', l: 1, p: 'The teacher reminded the kids ___ (bring) their lunch.', a: 'to bring', w: { bring: 'objto', bringing: 'objto' }, e: 'objto' },
    { t: 'fill', pt: 'noobj', l: 1, p: 'My landlord refused ___ (fix) the heater.', a: 'to fix', w: { fixing: 'noobj', fix: 'noobj' }, e: 'noobj' },
    { t: 'fill', pt: 'ing', l: 1, p: 'He admitted ___ (break) the window.', a: ['breaking', 'to breaking', 'having broken'], w: { 'to break': 'ing', break: 'ing' }, e: 'ing' },
    { t: 'fill', pt: 'prep', l: 1, p: 'They accused him ___ lying.', a: 'of', w: { in: 'prep', for: 'prep' }, e: 'prep' },
    { t: 'fill', pt: 'saytell', l: 1, p: 'Can you ___ me how to get to the post office?', a: 'tell', w: { say: 'saytell', explain: 'saytell' }, e: 'saytell' },
    { t: 'fill', pt: 'objto', l: 1, p: 'The police warned us ___ (not / go) out during the storm.', a: ['not to go', 'to not go'], w: { "don't go": 'objto', 'not go': 'objto', 'not going': 'objto' }, e: 'objto' },
    { t: 'fill', pt: 'noobj', l: 1, p: 'She promised ___ (call) me after the appointment.', a: 'to call', w: { calling: 'noobj', call: 'noobj' }, e: 'noobj' },
    { t: 'build', pt: 'objto', l: 1, a: 'She asked me to pick up the kids.', x: ['that'], e: 'objto' },
    { t: 'build', pt: 'ing', l: 1, a: 'He denied stealing the money.', x: ['to'], e: 'ing' },
    { t: 'build', pt: 'noobj', l: 1, a: 'They agreed to lower the price.', x: ['lowering'], e: 'noobj' },

    // ---------- Use
    { t: 'fill', pt: 'suggest', l: 2, p: 'The nurse suggested that I ___ (drink) more water.', a: ['drink', 'should drink'], w: { 'to drink': 'suggest', drinking: 'suggest', drinks: 'suggest' }, e: 'suggest' },
    { t: 'fill', pt: 'prep', l: 2, p: 'She insisted ___ paying for dinner.', a: 'on', w: { to: 'prep', in: 'prep' }, e: 'prep' },
    { t: 'fill', pt: 'prep', l: 2, p: 'Stop blaming yourself ___ the accident.', a: 'for', w: { in: 'prep', of: 'prep' }, e: 'prep' },
    { t: 'fill', pt: 'objto', l: 2, p: 'My manager encouraged me ___ (apply) for the promotion.', a: 'to apply', w: { applying: 'objto', apply: 'objto' }, e: 'objto' },
    { t: 'fill', pt: 'ing', l: 2, p: 'The doctor recommended ___ (cut) down on sugar.', a: 'cutting', w: { 'to cut': 'ing', cut: 'ing' }, e: 'ing' },
    { t: 'fill', pt: 'saytell', l: 2, p: 'He ___ that the store was closed.', a: ['said', 'explained', 'told us', 'told me'], w: { told: 'saytell', 'said us': 'saytell' }, e: 'saytell' },
    { t: 'fill', pt: 'noobj', l: 2, p: 'The company has threatened ___ (close) the factory.', a: 'to close', w: { closing: 'noobj', close: 'noobj' }, e: 'noobj' },
    { t: 'build', pt: 'suggest', l: 2, a: 'My friend suggested that I talk to a lawyer.', x: ['me'], e: 'suggest' },
    { t: 'build', pt: 'prep', l: 2, a: 'She thanked us for helping with the move.', x: ['to'], e: 'prep' },
    { t: 'fix', pt: 'objto', l: 2, p: 'She told to me to wait outside.', a: ['She told me to wait outside.'], e: 'saytell' },
    { t: 'fix', pt: 'suggest', l: 2, p: 'The mechanic suggested me to buy new tires.', a: ['The mechanic suggested that I buy new tires.', 'The mechanic suggested I buy new tires.', 'The mechanic suggested that I should buy new tires.', 'The mechanic suggested I should buy new tires.', 'The mechanic suggested buying new tires.', 'The mechanic advised me to buy new tires.'], e: 'suggest' },
    { t: 'fix', pt: 'noobj', l: 2, p: 'He offered me to help with the boxes.', a: ['He offered to help me with the boxes.', 'He offered to help with the boxes.'], e: 'noobj' },
    { t: 'fix', pt: 'saytell', l: 2, p: 'Can you explain me how this works?', a: ['Can you explain to me how this works?', 'Can you explain how this works?'], e: 'saytell' },
    { t: 'tr', pt: 'objto', l: 2, i: 'Use *advise + person + to*.', p: '"You should rest for a few days," the doctor told me.', s: 'The doctor advised', a: ['The doctor advised me to rest for a few days.'], e: 'objto' },
    { t: 'tr', pt: 'ing', l: 2, i: 'Use *admit + -ing*.', p: '"Yes, I forgot to lock the door," he said.', s: 'He admitted', a: ['He admitted forgetting to lock the door.', 'He admitted to forgetting to lock the door.', 'He admitted having forgotten to lock the door.', 'He admitted that he had forgotten to lock the door.', 'He admitted that he forgot to lock the door.', 'He admitted he forgot to lock the door.', 'He admitted he had forgotten to lock the door.'], e: 'ing' },
    { t: 'tl', pt: 'noobj', l: 2, uk: 'Він пообіцяв подзвонити завтра.', ru: 'Он пообещал позвонить завтра.', a: ['He promised to call tomorrow.', 'He promised to call me tomorrow.', 'He promised to call us tomorrow.', 'He promised he would call tomorrow.', 'He promised that he would call tomorrow.', 'He promised to give me a call tomorrow.'], e: 'noobj' },
    {
      t: 'tl', pt: 'saytell', l: 2, uk: 'Поясніть мені, будь ласка, що це означає.', ru: 'Объясните мне, пожалуйста, что это значит.',
      a: ['this', 'it', 'that'].flatMap((x) => ['explain to me', 'explain'].flatMap((v) => [
        `Please ${v} what ${x} means.`, `Could you please ${v} what ${x} means?`, `Can you please ${v} what ${x} means?`,
        `Could you ${v} what ${x} means, please?`, `Can you ${v} what ${x} means, please?`, `Would you please ${v} what ${x} means?`,
      ])),
      e: 'saytell',
    },

    // ---------- Pro
    { t: 'fix', pt: 'ing', l: 3, p: 'He denied to take the money.', a: ['He denied taking the money.', 'He denied having taken the money.', 'He denied that he took the money.', 'He denied that he had taken the money.'], e: 'ing' },
    { t: 'fix', pt: 'prep', l: 3, p: 'They accused her in stealing from the store.', a: ['They accused her of stealing from the store.'], e: 'prep' },
    { t: 'fix', pt: 'objto', l: 3, p: 'The doctor warned me not eat anything after midnight.', a: ['The doctor warned me not to eat anything after midnight.'], e: 'objto' },
    { t: 'fix', pt: 'suggest', l: 3, p: 'I suggest you to call the bank first.', a: ['I suggest you call the bank first.', 'I suggest that you call the bank first.', 'I suggest calling the bank first.', 'I suggest you should call the bank first.'], e: 'suggest' },
    { t: 'tr', pt: 'noobj', l: 3, i: 'Use *refuse to*.', p: '"I won\'t sign this contract," she said.', s: 'She refused', a: ['She refused to sign the contract.', 'She refused to sign this contract.', 'She refused to sign that contract.'], e: 'noobj' },
    { t: 'tr', pt: 'suggest', l: 3, i: 'Use *suggest that + person + verb*.', p: '"Why don\'t you take the train?" my sister said to me.', s: 'My sister suggested', a: ['My sister suggested that I take the train.', 'My sister suggested I take the train.', 'My sister suggested that I should take the train.', 'My sister suggested I should take the train.', 'My sister suggested taking the train.'], e: 'suggest' },
    { t: 'tr', pt: 'prep', l: 3, i: 'Use *apologize for + -ing*.', p: '"I\'m sorry I didn\'t call you back," he said to me.', s: 'He apologized', a: ['He apologized for not calling me back.', 'He apologized for not calling back.', 'He apologized for not having called me back.', 'He apologized to me for not calling me back.', 'He apologized to me for not calling back.'], e: 'prep' },
    { t: 'tr', pt: 'objto', l: 3, i: 'Use *remind + person + to*.', p: '"Don\'t forget to bring your ID," the receptionist told me.', s: 'The receptionist reminded', a: ['The receptionist reminded me to bring my ID.'], e: 'objto' },
    {
      t: 'tl', pt: 'suggest', l: 3, uk: 'Вона запропонувала мені піти до іншого лікаря.', ru: 'Она предложила мне пойти к другому врачу.',
      a: ['another doctor', 'a different doctor'].flatMap((d) => ['She suggested that I', 'She suggested I', 'She suggested that I should', 'She suggested I should', 'She advised me to'].flatMap((s) => ['see', 'go to'].map((v) => `${s} ${v} ${d}.`))
        .concat([`She suggested seeing ${d}.`, `She suggested going to ${d}.`])),
      e: 'suggest',
    },
    { t: 'tl', pt: 'ing', l: 3, uk: 'Він визнав, що зробив помилку.', ru: 'Он признал, что сделал ошибку.', a: ['He admitted making a mistake.', 'He admitted to making a mistake.', 'He admitted that he had made a mistake.', 'He admitted that he made a mistake.', 'He admitted he made a mistake.', 'He admitted he had made a mistake.', 'He admitted having made a mistake.', 'He admitted his mistake.'], e: 'ing' },
    {
      t: 'tl', pt: 'prep', l: 3, uk: 'Дякую, що допомогли мені з документами.', ru: 'Спасибо, что помогли мне с документами.',
      a: ['Thank you for helping me with', 'Thanks for helping me with', 'Thank you for your help with', 'Thanks for your help with'].flatMap((s) => ['the documents', 'the paperwork', 'my documents', 'my paperwork'].map((d) => `${s} ${d}.`)),
      e: 'prep',
    },
    { t: 'choose', pt: 'objto', l: 3, p: 'The officer ordered the driver ___ out of the car.', a: 'to get', o: ['get', 'getting'], w: { get: 'objto', getting: 'objto' }, e: 'objto' },
    { t: 'choose', pt: 'saytell', l: 3, p: 'She ___ us all about her new job.', a: 'told', o: ['said', 'explained'], w: { said: 'saytell', explained: 'saytell' }, e: 'saytell' },
    { t: 'fill', pt: 'prep', l: 3, p: 'He insisted on ___ (pay) for everyone.', a: 'paying', w: { 'to pay': 'prep', pay: 'prep' }, e: 'prep' },
    { t: 'fill', pt: 'suggest', l: 3, p: 'The lawyer recommended that she ___ (not / sign) anything yet.', a: ['not sign', 'should not sign', "shouldn't sign"], w: { "doesn't sign": 'suggest', 'not to sign': 'suggest' }, e: 'suggest' },
  ],
});
