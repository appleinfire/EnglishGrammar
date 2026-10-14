APP.addTopic({
  id: 'part',
  title: 'Feeling tired, Built in 1920, Having finished',
  level: 'C1',
  group: 'Linking',
  icon: '🔗',
  about: 'participle clauses instead of full clauses',
  rule: {
    en: `A **participle clause** is a short way to join ideas, common in writing:
- **-ing** — active, at the same time or as a reason: ***Feeling tired**, she went to bed early. **Not knowing** what to do, I called the police.*
- **3rd form** — passive meaning: ***Built** in 1920, the house is still in great condition. When **asked** about it, he said nothing.*
- **Having + 3rd form** — one action **before** another: ***Having finished** the report, she went home.*
- After **after, before, since, while, when** → **-ing**: *Before **leaving**, check the stove. While **waiting**, I called my mom.*
- Short relative clauses: *The woman **sitting** next to me…* (= who was sitting), *The car **parked** outside…* (= which is parked).
⚠️ The participle and the main clause must have the **same subject**: *Walking home, **I** got caught in the rain* — not *Walking home, the rain started* (the rain wasn't walking).`,
    uk: `**Дієприслівниковий / дієприкметниковий зворот** — короткий спосіб з'єднати думки, частий у письмі:
- **-ing** — активна дія, одночасна або як причина: ***Feeling tired**, she went to bed early* — «Відчуваючи втому, вона рано лягла». ***Not knowing** what to do, I called the police.*
- **третя форма** — пасивне значення: ***Built** in 1920, the house is still in great condition* — «Збудований у 1920 році, будинок…»
- **Having + третя форма** — одна дія **перед** іншою: ***Having finished** the report, she went home* — «Закінчивши звіт, вона пішла додому».
- Після **after, before, since, while, when** → **-ing**: *Before **leaving**, check the stove. While **waiting**, I called my mom.*
- Короткі означальні звороти: *The woman **sitting** next to me…* — «Жінка, що сиділа поруч…», *The car **parked** outside…*
⚠️ У звороту та головного речення має бути **той самий підмет**: *Walking home, **I** got caught in the rain* — не *Walking home, the rain started* (дощ не йшов додому).`,
    ru: `**Деепричастный / причастный оборот** — короткий способ соединить мысли, частый в письменной речи:
- **-ing** — активное действие, одновременное или как причина: ***Feeling tired**, she went to bed early* — «Чувствуя усталость, она рано легла». ***Not knowing** what to do, I called the police.*
- **третья форма** — пассивное значение: ***Built** in 1920, the house is still in great condition* — «Построенный в 1920 году, дом…»
- **Having + третья форма** — одно действие **перед** другим: ***Having finished** the report, she went home* — «Закончив отчёт, она ушла домой».
- После **after, before, since, while, when** → **-ing**: *Before **leaving**, check the stove. While **waiting**, I called my mom.*
- Короткие причастные обороты: *The woman **sitting** next to me…* — «Женщина, сидевшая рядом…», *The car **parked** outside…*
⚠️ У оборота и главного предложения должно быть **одно подлежащее**: *Walking home, **I** got caught in the rain* — не *Walking home, the rain started* (дождь не шёл домой).`,
  },
  examples: ['Feeling tired, she went to bed early.', 'Built in 1920, the house is still in great condition.', 'Having finished the report, she went home.', 'Before leaving, check the stove.', 'The woman sitting next to me was from Kyiv.'],
  trap: {
    uk: 'Заповнюючи форму, у мене виникло питання.',
    ru: 'Заполняя форму, у меня возник вопрос.',
    wrong: 'Filling out the form, a question came up.',
    right: 'While filling out the form, I had a question.',
    note: {
      en: 'This sounds as if *the question* was filling out the form. Strictly it\'s a mistake in Ukrainian and Russian too, but people say it all the time. In English it sounds wrong right away: the subject after the comma must be the one doing the *-ing* action.',
      uk: 'Виходить, ніби форму заповнювало *питання*. Українською це теж помилка, хоча так кажуть часто. Англійською вона відразу помітна: підмет після коми — той, хто виконує дію на *-ing*.',
      ru: 'Получается, будто форму заполнял *вопрос*. По-русски это тоже ошибка, хотя так говорят часто. По-английски она сразу заметна: подлежащее после запятой — тот, кто выполняет действие на *-ing*.',
    },
  },
  errors: {
    ing: {
      en: 'Active meaning (the subject does it) → **-ing**: *Feeling tired, she… Not knowing what to do, I…* Negative: **not** before the participle.',
      uk: 'Активне значення (підмет сам це робить) → **-ing**: *Feeling tired, she… Not knowing what to do, I…* Заперечення: **not** перед зворотом.',
      ru: 'Активное значение (подлежащее само это делает) → **-ing**: *Feeling tired, she… Not knowing what to do, I…* Отрицание: **not** перед оборотом.',
    },
    ed: {
      en: 'Passive meaning (something was done **to** it) → **3rd form**: *Built in 1920… Made in Italy… When asked…* Not *Building in 1920*.',
      uk: 'Пасивне значення (щось зробили **з ним**) → **третя форма**: *Built in 1920… Made in Italy… When asked…* Не *Building in 1920*.',
      ru: 'Пассивное значение (что-то сделали **с ним**) → **третья форма**: *Built in 1920… Made in Italy… When asked…* Не *Building in 1920*.',
    },
    having: {
      en: 'One action finished **before** the next → **Having + 3rd form**: *Having finished the report, she went home. Not having received a reply, I…*',
      uk: 'Одна дія завершилася **до** наступної → **Having + третя форма**: *Having finished the report, she went home. Not having received a reply, I…*',
      ru: 'Одно действие закончилось **до** следующего → **Having + третья форма**: *Having finished the report, she went home. Not having received a reply, I…*',
    },
    reduced: {
      en: 'Short relative clause: drop **who / which + be** completely: *the woman sitting there* (= who was sitting), *tickets bought online* (= which are bought). Not *who sitting*, not *is parked* in the middle.',
      uk: 'Короткий означальний зворот: прибираємо **who / which + be** повністю: *the woman sitting there* (= who was sitting), *tickets bought online*. Не *who sitting*.',
      ru: 'Короткий причастный оборот: убираем **who / which + be** полностью: *the woman sitting there* (= who was sitting), *tickets bought online*. Не *who sitting*.',
    },
    conj: {
      en: 'After **after, before, since, while, when** use **-ing** (or a full clause): *before leaving, after graduating, while waiting*. Not *before to leave*, *after graduated*.',
      uk: 'Після **after, before, since, while, when** — **-ing** (або повне речення): *before leaving, after graduating, while waiting*. Не *before to leave*, *after graduated*.',
      ru: 'После **after, before, since, while, when** — **-ing** (или полное предложение): *before leaving, after graduating, while waiting*. Не *before to leave*, *after graduated*.',
    },
    dangling: {
      en: 'The subject of the main clause must be the one doing the participle action: *Walking home, **I** got caught in the rain.* *Walking home, the rain started* means the rain was walking.',
      uk: 'Підмет головного речення — той, хто виконує дію звороту: *Walking home, **I** got caught in the rain.* *Walking home, the rain started* означає, що додому йшов дощ.',
      ru: 'Подлежащее главного предложения — тот, кто выполняет действие оборота: *Walking home, **I** got caught in the rain.* *Walking home, the rain started* значит, что домой шёл дождь.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'ing', l: 1, p: '___ home from work, I saw an accident.', a: 'Driving', o: ['Driven', 'Drove'], w: { Driven: 'ed', Drove: 'ing' }, e: 'ing' },
    { t: 'choose', pt: 'ed', l: 1, p: '___ in 1920, the house is still in great condition.', a: 'Built', o: ['Building', 'Having built'], w: { Building: 'ed', 'Having built': 'ed' }, e: 'ed' },
    { t: 'choose', pt: 'having', l: 1, p: '___ the report, she went home.', a: 'Having finished', o: ['Finished', 'Having finishing'], w: { Finished: 'having', 'Having finishing': 'having' }, e: 'having' },
    { t: 'choose', pt: 'reduced', l: 1, p: 'The woman ___ next to me on the plane was from Kyiv.', a: 'sitting', o: ['who sitting', 'sits'], w: { 'who sitting': 'reduced', sits: 'reduced' }, e: 'reduced' },
    { t: 'choose', pt: 'conj', l: 1, p: 'Before ___ the house, check that the stove is off.', a: 'leaving', o: ['to leave', 'leave'], w: { 'to leave': 'conj', leave: 'conj' }, e: 'conj' },
    { t: 'choose', pt: 'reduced', l: 1, p: 'The car ___ outside belongs to my neighbor.', a: 'parked', o: ['parking', 'is parked'], w: { parking: 'ed', 'is parked': 'reduced' }, e: 'reduced' },
    { t: 'choose', pt: 'dangling', l: 1, p: 'After waiting for an hour, ___.', a: 'we finally saw the doctor', o: ['the doctor finally saw us', 'the doctor finally came in'], w: { 'the doctor finally saw us': 'dangling', 'the doctor finally came in': 'dangling' }, e: 'dangling' },
    { t: 'fill', pt: 'ing', l: 1, p: '___ (feel) tired, she went to bed early.', a: 'Feeling', w: { Felt: 'ing', Feel: 'ing' }, e: 'ing' },
    { t: 'fill', pt: 'ed', l: 1, p: '___ (make) in Italy, these shoes are very expensive.', a: 'Made', w: { Making: 'ed', Make: 'ed' }, e: 'ed' },
    { t: 'fill', pt: 'having', l: 1, p: '___ (live) in Texas for three years, she knows how hot it can get.', a: ['Having lived', 'Having been living'], w: { Lived: 'having', 'Having living': 'having' }, e: 'having' },
    { t: 'fill', pt: 'conj', l: 1, p: 'After ___ (graduate) from college, he moved to Seattle.', a: ['graduating', 'having graduated'], w: { graduated: 'conj', graduate: 'conj', 'to graduate': 'conj' }, e: 'conj' },
    { t: 'fill', pt: 'reduced', l: 1, p: 'Anyone ___ (want) to join the trip should sign up by Friday.', a: 'wanting', w: { wants: 'reduced', 'who wanting': 'reduced', wanted: 'ing' }, e: 'reduced' },
    { t: 'fill', pt: 'ed', l: 1, p: 'The money ___ (raise) at the event will go to the school.', a: 'raised', w: { raising: 'ed', 'is raised': 'reduced' }, e: 'ed' },
    { t: 'fill', pt: 'conj', l: 1, p: 'While ___ (wait) for the bus, I called my mom.', a: 'waiting', w: { wait: 'conj', waited: 'conj' }, e: 'conj' },
    { t: 'build', pt: 'ing', l: 1, a: 'Feeling nervous, she called her sister.', x: ['felt'], e: 'ing' },
    { t: 'build', pt: 'reduced', l: 1, a: 'The man standing at the door is my boss.', x: ['who'], e: 'reduced' },
    { t: 'build', pt: 'ed', l: 1, a: 'Written in simple English, the book is easy to read.', x: ['writing'], e: 'ed' },

    // ---------- Use
    { t: 'fill', pt: 'having', l: 2, p: '___ (lose) her job, she decided to start her own business.', a: 'Having lost', w: { Lost: 'having', 'Having losing': 'having' }, e: 'having' },
    { t: 'fill', pt: 'ed', l: 2, p: 'When ___ (ask) about the delay, the manager said nothing.', a: 'asked', w: { asking: 'ed', ask: 'ed' }, e: 'ed' },
    { t: 'fill', pt: 'reduced', l: 2, p: 'Most of the people ___ (invite) to the wedding came from Ukraine.', a: 'invited', w: { inviting: 'ed', 'were invited': 'reduced' }, e: 'reduced' },
    { t: 'fill', pt: 'ing', l: 2, p: 'Not ___ (know) what to do, I called the police.', a: 'knowing', w: { known: 'ing', 'to know': 'ing', know: 'ing' }, e: 'ing' },
    { t: 'fill', pt: 'conj', l: 2, p: "Since ___ (move) here, we've made a lot of friends.", a: ['moving', 'we moved'], w: { moved: 'conj', 'to move': 'conj' }, e: 'conj' },
    { t: 'fill', pt: 'having', l: 2, p: '___ (not / receive) a reply, I sent another email.', a: ['Not having received', 'Having not received'], w: { 'Not received': 'having', "Didn't receive": 'having' }, e: 'having' },
    { t: 'build', pt: 'having', l: 2, a: 'Having lived abroad, she understands other cultures.', x: ['living'], e: 'having' },
    { t: 'build', pt: 'conj', l: 2, a: 'After finishing work, I picked up the kids.', x: ['finished'], e: 'conj' },
    { t: 'fix', pt: 'dangling', l: 2, p: 'Walking to the store, the rain started.', a: ['Walking to the store, I got caught in the rain.', 'While I was walking to the store, the rain started.', 'While I was walking to the store, it started to rain.', 'While I was walking to the store, it started raining.', 'As I was walking to the store, the rain started.', 'As I was walking to the store, it started to rain.', 'When I was walking to the store, it started to rain.'], e: 'dangling' },
    { t: 'fix', pt: 'ed', l: 2, p: 'Building in 1920, the church is the oldest in town.', a: ['Built in 1920, the church is the oldest in town.'], e: 'ed' },
    { t: 'fix', pt: 'conj', l: 2, p: 'Before to sign the contract, read it carefully.', a: ['Before signing the contract, read it carefully.', 'Before you sign the contract, read it carefully.'], e: 'conj' },
    { t: 'fix', pt: 'reduced', l: 2, p: 'The woman who sitting at the front desk was very helpful.', a: ['The woman sitting at the front desk was very helpful.', 'The woman who was sitting at the front desk was very helpful.'], e: 'reduced' },
    { t: 'tr', pt: 'ing', l: 2, i: 'Use a participle clause: *Not + -ing*.', p: "Because she didn't want to be late, she took a taxi.", s: 'Not wanting', a: ['Not wanting to be late, she took a taxi.'], e: 'ing' },
    { t: 'tr', pt: 'having', l: 2, i: 'Start with *Having*.', p: 'She finished her shift and then went straight to bed.', s: 'Having', a: ['Having finished her shift, she went straight to bed.', 'Having finished her shift, she went to bed.'], e: 'having' },
    {
      t: 'tl', pt: 'reduced', l: 2, uk: 'Чоловік, що стоїть біля дверей, — мій сусід.', ru: 'Мужчина, стоящий у двери, — мой сосед.',
      a: ['The man standing', 'The man who is standing', 'The man that is standing', 'The guy standing'].flatMap((s) => ['at the door', 'by the door', 'near the door', 'next to the door'].map((p) => `${s} ${p} is my neighbor.`)),
      e: 'reduced',
    },
    {
      t: 'tl', pt: 'ing', l: 2, uk: 'Повертаючись додому, я побачила аварію.', ru: 'Возвращаясь домой, я увидела аварию.',
      a: ['Coming home', 'Going home', 'Driving home', 'Walking home', 'On my way home', 'While coming home', 'While driving home', 'While walking home', 'While going home', 'Returning home', 'On the way home'].flatMap((s) => ['I saw an accident', 'I saw a car accident', 'I saw a crash'].map((v) => `${s}, ${v}.`)),
      e: 'ing',
    },

    // ---------- Pro
    { t: 'fix', pt: 'dangling', l: 3, p: 'Having eaten dinner, the dishes were washed.', a: ['Having eaten dinner, we washed the dishes.', 'Having eaten dinner, I washed the dishes.', 'Having eaten dinner, they washed the dishes.', 'After we had eaten dinner, the dishes were washed.', 'After we ate dinner, the dishes were washed.'], e: 'dangling' },
    { t: 'fix', pt: 'having', l: 3, p: 'Having finish my homework, I watched TV.', a: ['Having finished my homework, I watched TV.'], e: 'having' },
    { t: 'fix', pt: 'ing', l: 3, p: 'Knowing not the answer, she kept quiet.', a: ['Not knowing the answer, she kept quiet.'], e: 'ing' },
    { t: 'fix', pt: 'reduced', l: 3, p: 'The tickets buying online are cheaper.', a: ['The tickets bought online are cheaper.', 'Tickets bought online are cheaper.'], e: 'ed' },
    { t: 'tr', pt: 'ed', l: 3, i: 'Start with a past participle.', p: 'The letter was sent by express mail, so it arrived the next day.', s: 'Sent', a: ['Sent by express mail, the letter arrived the next day.'], e: 'ed' },
    { t: 'tr', pt: 'reduced', l: 3, i: 'Make the relative clause shorter.', p: 'Passengers who are traveling with small children can board first.', s: 'Passengers', a: ['Passengers traveling with small children can board first.', 'Passengers travelling with small children can board first.'], e: 'reduced' },
    { t: 'tr', pt: 'conj', l: 3, i: 'Use *after + -ing*.', p: 'She retired, and then she started volunteering at the hospital.', s: 'After', a: ['After retiring, she started volunteering at the hospital.', 'After retiring, she began volunteering at the hospital.', 'After having retired, she started volunteering at the hospital.'], e: 'conj' },
    {
      t: 'tr', pt: 'dangling', l: 3, i: 'Keep the same subject in both parts.', p: "Arriving at the hotel, our room wasn't ready.", s: 'Arriving at the hotel, we',
      a: ['found', 'found out', 'learned', 'discovered', 'were told', 'saw'].flatMap((v) => [`Arriving at the hotel, we ${v} that our room wasn't ready.`, `Arriving at the hotel, we ${v} our room wasn't ready.`]),
      e: 'dangling',
    },
    {
      t: 'tl', pt: 'having', l: 3, uk: 'Проживши тут три роки, я досі погано знаю місто.', ru: 'Прожив здесь три года, я до сих пор плохо знаю город.',
      a: ['Having lived here for three years', 'Having lived here three years', 'Despite having lived here for three years', 'Despite having lived here three years', 'Even though I have lived here for three years', 'Although I have lived here for three years']
        .flatMap((s) => ["I still don't know the city well", "I still don't know the city very well", "I still don't know the city that well"].map((v) => `${s}, ${v}.`)),
      e: 'having',
    },
    {
      t: 'tl', pt: 'ed', l: 3, uk: 'Цей міст, збудований понад сто років тому, досі використовується.', ru: 'Этот мост, построенный больше ста лет назад, до сих пор используется.',
      a: ['more than a hundred years ago', 'over a hundred years ago', 'more than 100 years ago', 'over 100 years ago', 'more than a century ago', 'over a century ago']
        .flatMap((t) => ['is still in use', 'is still used'].flatMap((v) => [`This bridge, built ${t}, ${v}.`, `Built ${t}, this bridge ${v}.`])),
      e: 'ed',
    },
    {
      t: 'tl', pt: 'conj', l: 3, uk: 'Перед тим як підписати договір, уважно його прочитай.', ru: 'Перед тем как подписать договор, внимательно его прочитай.',
      a: ['Before signing the contract', 'Before you sign the contract'].flatMap((s) => ['read it carefully', 'read it closely', 'read it through carefully'].map((v) => `${s}, ${v}.`))
        .concat(['Read the contract carefully before signing it.', 'Read the contract carefully before you sign it.']),
      e: 'conj',
    },
    { t: 'choose', pt: 'having', l: 3, p: '___ in a big city all her life, she found the small town too quiet.', a: 'Having lived', o: ['Lived', 'Having living'], w: { Lived: 'having', 'Having living': 'having' }, e: 'having' },
    { t: 'choose', pt: 'ed', l: 3, p: '___ at the top of the hill, the house has amazing views.', a: 'Located', o: ['Locating', 'Having located'], w: { Locating: 'ed', 'Having located': 'ed' }, e: 'ed' },
    { t: 'fill', pt: 'reduced', l: 3, p: 'Products ___ (sell) at a discount cannot be returned.', a: 'sold', w: { selling: 'ed', 'are sold': 'reduced' }, e: 'reduced' },
    { t: 'choose', pt: 'dangling', l: 3, p: 'Looking out of the window, ___.', a: 'I saw a deer in the yard', o: ['a deer was in the yard', 'there was a deer in the yard'], w: { 'a deer was in the yard': 'dangling', 'there was a deer in the yard': 'dangling' }, e: 'dangling' },
    { t: 'fill', pt: 'ing', l: 3, p: '___ (be) a nurse, she knew exactly what to do.', a: 'Being', w: { Been: 'ing', Is: 'ing' }, e: 'ing' },
  ],
});
