APP.addTopic({
  id: 'art2',
  title: 'the rich, go to school, the Rockies',
  level: 'B2',
  group: 'Articles & nouns',
  icon: '🗺️',
  about: 'articles with groups, places, institutions and ideas',
  rule: {
    en: `Harder article rules:
- **the + adjective** = a group of people, plural verb: *the rich, the poor, the elderly, the homeless, the unemployed* — *The elderly **need** more support.*
- **the + singular noun** = a whole kind (inventions, animals): ***The smartphone** has changed our lives. **The cheetah** is the fastest animal.*
- Places used for their purpose → **no article**: *go to **school / college / church / work / bed**, be in **jail***. The building itself → **the**: *I stopped by **the school** to talk to the teacher.* AmE: *in **the hospital***.
- Abstract ideas in general → **no article**: ***Life** is short. **Money** can't buy happiness.* A specific one → **the**: ***the history** of this city.*
- Geography: **the** with oceans, rivers, mountain ranges, plural or "united" countries: *the Pacific, the Mississippi, the Rockies, the Netherlands, the US*. **No article**: most countries, states, cities, single lakes and mountains: *Florida, Lake Michigan, Mount Rainier*.
- **the** before superlatives, *only, same, first*: *the best, the only person, one of the most famous…*`,
    uk: `Складніші правила артиклів:
- **the + прикметник** = група людей, дієслово в множині: *the rich, the poor, the elderly, the homeless, the unemployed* — *The elderly **need** more support* — «Літнім людям потрібно більше підтримки».
- **the + іменник в однині** = весь вид (винаходи, тварини): ***The smartphone** has changed our lives* — «Смартфон змінив наше життя».
- Місця, куди ходять за їх призначенням → **без артикля**: *go to **school / college / church / work / bed**, be in **jail***. Сама будівля → **the**: *I stopped by **the school** to talk to the teacher.* В американській: *in **the hospital***.
- Абстрактні поняття загалом → **без артикля**: ***Life** is short. **Money** can't buy happiness.* Конкретне → **the**: ***the history** of this city.*
- Географія: **the** з океанами, річками, гірськими хребтами, країнами в множині чи «об'єднаними»: *the Pacific, the Mississippi, the Rockies, the Netherlands, the US*. **Без артикля**: більшість країн, штати, міста, окремі озера й гори: *Florida, Lake Michigan, Mount Rainier*.
- **the** перед найвищим ступенем, *only, same, first*: *the best, the only person, one of the most famous…*`,
    ru: `Более сложные правила артиклей:
- **the + прилагательное** = группа людей, глагол во множественном числе: *the rich, the poor, the elderly, the homeless, the unemployed* — *The elderly **need** more support* — «Пожилым нужно больше поддержки».
- **the + существительное в единственном числе** = весь вид (изобретения, животные): ***The smartphone** has changed our lives* — «Смартфон изменил нашу жизнь».
- Места, куда ходят по их назначению → **без артикля**: *go to **school / college / church / work / bed**, be in **jail***. Само здание → **the**: *I stopped by **the school** to talk to the teacher.* В американском: *in **the hospital***.
- Абстрактные понятия в целом → **без артикля**: ***Life** is short. **Money** can't buy happiness.* Конкретное → **the**: ***the history** of this city.*
- География: **the** с океанами, реками, горными хребтами, странами во множественном числе или «объединёнными»: *the Pacific, the Mississippi, the Rockies, the Netherlands, the US*. **Без артикля**: большинство стран, штаты, города, отдельные озёра и горы: *Florida, Lake Michigan, Mount Rainier*.
- **the** перед превосходной степенью, *only, same, first*: *the best, the only person, one of the most famous…*`,
  },
  examples: ['The rich get richer and the poor get poorer.', 'The smartphone has changed our lives.', 'My kids walk to school.', 'Life in America is different.', 'We flew over the Rocky Mountains to Lake Tahoe.'],
  trap: {
    uk: 'Багаті стають багатшими, а бідні — біднішими.',
    ru: 'Богатые становятся богаче, а бедные — беднее.',
    wrong: 'Rich get richer and poor get poorer.',
    right: 'The rich get richer and the poor get poorer.',
    note: {
      en: 'In Ukrainian and Russian an adjective can be a noun by itself. In English a group of people is **the + adjective** (*the rich*) or **adjective + people** (*rich people*).',
      uk: 'Українською прикметник сам стає іменником: «багаті». Англійською група людей — це **the + прикметник** (*the rich*) або **прикметник + people** (*rich people*).',
      ru: 'По-русски прилагательное само становится существительным: «богатые». По-английски группа людей — это **the + прилагательное** (*the rich*) или **прилагательное + people** (*rich people*).',
    },
  },
  errors: {
    adj: {
      en: 'A group of people → **the + adjective** with a **plural** verb and no -s: *the poor, the elderly need…* Or say *poor people*.',
      uk: 'Група людей → **the + прикметник**, дієслово в **множині**, без -s: *the poor, the elderly need…* Або *poor people*.',
      ru: 'Группа людей → **the + прилагательное**, глагол во **множественном** числе, без -s: *the poor, the elderly need…* Или *poor people*.',
    },
    inst: {
      en: 'Going somewhere for its purpose → **no article**: *go to school, college, church, work, bed; in jail*. The building itself → **the**. In American English: *in the hospital, to the hospital*.',
      uk: 'Ходити кудись за призначенням → **без артикля**: *go to school, college, church, work, bed; in jail*. Сама будівля → **the**. В американській: *in the hospital, to the hospital*.',
      ru: 'Ходить куда-то по назначению → **без артикля**: *go to school, college, church, work, bed; in jail*. Само здание → **the**. В американском: *in the hospital, to the hospital*.',
    },
    generic: {
      en: 'A whole kind of thing (an invention, an animal species) → **the + singular**: *The telephone was invented in 1876.* Or plural with no article: *Elephants are smart.*',
      uk: 'Увесь вид (винахід, тварина) → **the + однина**: *The telephone was invented in 1876.* Або множина без артикля: *Elephants are smart.*',
      ru: 'Весь вид (изобретение, животное) → **the + единственное число**: *The telephone was invented in 1876.* Или множественное без артикля: *Elephants are smart.*',
    },
    geo: {
      en: '**the**: oceans, seas, rivers, mountain ranges, plural or "united" countries (*the Pacific, the Mississippi, the Rockies, the Bahamas, the US*). **No article**: most countries, states, cities, single lakes and mountains (*Florida, Lake Tahoe*).',
      uk: '**the**: океани, моря, річки, гірські хребти, країни в множині чи «об\'єднані» (*the Pacific, the Mississippi, the Rockies, the Bahamas, the US*). **Без артикля**: більшість країн, штати, міста, окремі озера й гори (*Florida, Lake Tahoe*).',
      ru: '**the**: океаны, моря, реки, горные хребты, страны во множественном числе или «объединённые» (*the Pacific, the Mississippi, the Rockies, the Bahamas, the US*). **Без артикля**: большинство стран, штаты, города, отдельные озёра и горы (*Florida, Lake Tahoe*).',
    },
    abstract: {
      en: 'An idea **in general** → **no article**: *Life is short. Money can\'t buy happiness. She studies history.* A **specific** one → **the**: *the history of this city, the love she feels.*',
      uk: 'Поняття **загалом** → **без артикля**: *Life is short. Money can\'t buy happiness. She studies history.* **Конкретне** → **the**: *the history of this city, the love she feels.*',
      ru: 'Понятие **в целом** → **без артикля**: *Life is short. Money can\'t buy happiness. She studies history.* **Конкретное** → **the**: *the history of this city, the love she feels.*',
    },
    superl: {
      en: 'Superlatives and *only, same, first, last* take **the**: *the best, the only person, the first time, one of the most famous…*',
      uk: 'Найвищий ступінь та *only, same, first, last* — з **the**: *the best, the only person, the first time, one of the most famous…*',
      ru: 'Превосходная степень и *only, same, first, last* — с **the**: *the best, the only person, the first time, one of the most famous…*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'adj', l: 1, p: 'The city should do more to help ___.', a: 'the homeless', o: ['homeless', 'the homelesses'], w: { homeless: 'adj', 'the homelesses': 'adj' }, e: 'adj' },
    { t: 'choose', pt: 'inst', l: 1, p: 'My kids walk to ___ school every day.', a: '—', o: ['the', 'a'], w: { the: 'inst', a: 'inst' }, e: 'inst' },
    { t: 'choose', pt: 'generic', l: 1, p: '___ telephone was invented in 1876.', a: 'The', o: ['A', '—'], w: { A: 'generic', '—': 'generic' }, e: 'generic' },
    { t: 'choose', pt: 'geo', l: 1, p: 'We drove along ___ Mississippi for two days.', a: 'the', o: ['a', '—'], w: { a: 'geo', '—': 'geo' }, e: 'geo' },
    { t: 'choose', pt: 'abstract', l: 1, p: '___ life is too short to worry about small things.', a: '—', o: ['The', 'A'], w: { The: 'abstract', A: 'abstract' }, e: 'abstract' },
    { t: 'choose', pt: 'superl', l: 1, p: 'This is ___ best pizza in town.', a: 'the', o: ['a', '—'], w: { a: 'superl', '—': 'superl' }, e: 'superl' },
    { t: 'fill', pt: 'adj', l: 1, p: 'This building has apartments for ___ elderly.', a: 'the', w: { an: 'adj', a: 'adj' }, e: 'adj' },
    { t: 'fill', pt: 'inst', l: 1, p: 'After high school she went to ___ (college) in Ohio.', a: 'college', w: { 'the college': 'inst' }, e: 'inst' },
    { t: 'fill', pt: 'generic', l: 1, p: '___ cheetah is the fastest land animal.', a: 'The', w: { A: 'generic' }, e: 'generic' },
    { t: 'fill', pt: 'geo', l: 1, p: 'We took a cruise in ___ Caribbean.', a: 'the', w: { a: 'geo' }, e: 'geo' },
    { t: 'fill', pt: 'superl', l: 1, p: 'She was ___ first person in her family to go to college.', a: 'the', w: { a: 'superl' }, e: 'superl' },
    { t: 'fill', pt: 'abstract', l: 1, p: '___ education my kids get here is better than mine was.', a: 'The', w: { An: 'abstract' }, e: 'abstract' },
    { t: 'fill', pt: 'adj', l: 1, p: '___ unemployed can get help at the job center.', a: 'The', w: { An: 'adj' }, e: 'adj' },
    { t: 'build', pt: 'adj', l: 1, a: 'The rich should pay more taxes.', x: ['a'], e: 'adj' },
    { t: 'build', pt: 'inst', l: 1, a: 'She goes to church every Sunday.', x: ['the'], e: 'inst' },
    { t: 'build', pt: 'geo', l: 1, a: 'We flew over the Rocky Mountains.', x: ['a'], e: 'geo' },

    // ---------- Use
    { t: 'choose', pt: 'geo', l: 2, p: 'Have you ever been to ___ Netherlands?', a: 'the', o: ['a', '—'], w: { a: 'geo', '—': 'geo' }, e: 'geo' },
    { t: 'choose', pt: 'geo', l: 2, p: 'We rented a cabin on ___ Lake Tahoe.', a: '—', o: ['the', 'a'], w: { the: 'geo', a: 'geo' }, e: 'geo' },
    { t: 'fill', pt: 'adj', l: 2, p: 'The new law will make life harder for ___ (poor).', a: ['the poor', 'poor people'], w: { poor: 'adj', 'the poors': 'adj' }, e: 'adj' },
    { t: 'fill', pt: 'inst', l: 2, p: 'Their dad is in ___ (jail) for drunk driving.', a: 'jail', w: { 'the jail': 'inst' }, e: 'inst' },
    { t: 'fill', pt: 'generic', l: 2, p: '___ (computer) has changed the way we work.', a: 'The computer', w: { Computer: 'generic', 'A computer': 'generic' }, e: 'generic' },
    { t: 'fill', pt: 'abstract', l: 2, p: "I'm interested in ___ (history) of this city.", a: 'the history', w: { history: 'abstract' }, e: 'abstract' },
    { t: 'fill', pt: 'abstract', l: 2, p: 'She studies ___ (history) at a community college.', a: 'history', w: { 'the history': 'abstract' }, e: 'abstract' },
    { t: 'fill', pt: 'superl', l: 2, p: "It's one of ___ (good) restaurants in Houston.", a: 'the best', w: { best: 'superl', 'a best': 'superl' }, e: 'superl' },
    { t: 'build', pt: 'generic', l: 2, a: 'The smartphone has changed our lives.', x: ['a'], e: 'generic' },
    { t: 'build', pt: 'abstract', l: 2, a: 'Health is more important than money.', x: ['the'], e: 'abstract' },
    { t: 'fix', pt: 'adj', l: 2, p: 'The government should help the poors.', a: ['The government should help the poor.', 'The government should help poor people.'], e: 'adj' },
    { t: 'fix', pt: 'geo', l: 2, p: 'We spent a week in the Florida and then flew to the Bahamas.', a: ['We spent a week in Florida and then flew to the Bahamas.'], e: 'geo' },
    { t: 'fix', pt: 'inst', l: 2, p: 'My daughter starts the college in September.', a: ['My daughter starts college in September.'], e: 'inst' },
    { t: 'fix', pt: 'abstract', l: 2, p: "The money can't buy happiness.", a: ["Money can't buy happiness."], e: 'abstract' },
    { t: 'tr', pt: 'adj', l: 2, i: 'Use *the + adjective*.', p: "Young people often don't save money.", s: 'The young', a: ["The young often don't save money.", "The young don't often save money."], e: 'adj' },
    { t: 'tl', pt: 'generic', l: 2, uk: 'Хто винайшов телефон?', ru: 'Кто изобрёл телефон?', a: ['Who invented the telephone?', 'Who invented the phone?'], e: 'generic' },
    { t: 'tl', pt: 'inst', l: 2, uk: 'Її чоловік у лікарні.', ru: 'Её муж в больнице.', a: ['Her husband is in the hospital.', 'Her husband is at the hospital.'], n: 'British English says *in hospital*; Americans say *in the hospital*.', e: 'inst' },
    { t: 'tl', pt: 'abstract', l: 2, uk: 'Життя в Америці дуже відрізняється.', ru: 'Жизнь в Америке очень отличается.', a: ['America', 'the US', 'the States', 'the United States'].flatMap((c) => ['very', 'really', 'so'].map((v) => `Life in ${c} is ${v} different.`)), e: 'abstract' },

    // ---------- Pro
    { t: 'fix', pt: 'superl', l: 3, p: 'Brooklyn Bridge is one of most famous bridges in world.', a: ['The Brooklyn Bridge is one of the most famous bridges in the world.'], e: 'superl' },
    { t: 'fix', pt: 'generic', l: 3, p: 'Elephant is very intelligent animal.', a: ['The elephant is a very intelligent animal.', 'Elephants are very intelligent animals.', 'An elephant is a very intelligent animal.'], e: 'generic' },
    { t: 'fix', pt: 'adj', l: 3, p: 'The elderly needs more support from the state.', a: ['The elderly need more support from the state.', 'Elderly people need more support from the state.'], e: 'adj' },
    { t: 'fix', pt: 'inst', l: 3, p: 'In our house the kids go to the bed at nine.', a: ['In our house the kids go to bed at nine.'], e: 'inst' },
    { t: 'tr', pt: 'geo', l: 3, i: 'Make one sentence. Add *the* only where needed.', p: 'last summer / we / visit / Grand Canyon, Lake Powell and Utah', s: 'Last summer we', a: ['Last summer we visited the Grand Canyon, Lake Powell and Utah.'], e: 'geo' },
    { t: 'tr', pt: 'generic', l: 3, i: 'Talk about the invention in general. Use *the + singular noun*.', p: 'Cars changed American cities more than anything else.', s: 'The car', a: ['The car changed American cities more than anything else.', 'The car has changed American cities more than anything else.'], e: 'generic' },
    { t: 'tr', pt: 'superl', l: 3, i: 'Use *the + superlative*.', p: 'No other city in Texas is as big as Houston.', s: 'Houston', a: ['Houston is the biggest city in Texas.', 'Houston is the largest city in Texas.'], e: 'superl' },
    { t: 'tl', pt: 'adj', l: 3, uk: 'Багаті стають багатшими, а бідні — біднішими.', ru: 'Богатые становятся богаче, а бедные — беднее.', a: ['The rich get richer and the poor get poorer.', 'The rich are getting richer and the poor are getting poorer.', 'The rich become richer and the poor become poorer.', 'Rich people get richer and poor people get poorer.', 'The rich get richer while the poor get poorer.', 'The rich get richer, while the poor get poorer.'], e: 'adj' },
    {
      t: 'tl', pt: 'geo', l: 3, uk: 'Ми живемо в США, недалеко від Тихого океану.', ru: 'Мы живём в США, недалеко от Тихого океана.',
      a: ['the US', 'the USA', 'the United States', 'the States', 'the U.S.'].flatMap((c) => ['not far from', 'near', 'close to'].flatMap((p) => [`We live in ${c}, ${p} the Pacific Ocean.`, `We live in ${c}, ${p} the Pacific.`])),
      e: 'geo',
    },
    { t: 'tl', pt: 'superl', l: 3, uk: 'Це найкращий день у моєму житті.', ru: 'Это лучший день в моей жизни.', a: ['This is the best day of my life.', 'It is the best day of my life.', 'This is the best day in my life.', 'It is the best day in my life.', 'Today is the best day of my life.', 'This has been the best day of my life.'], e: 'superl' },
    { t: 'choose', pt: 'abstract', l: 3, p: '___ love she feels for her kids is endless.', a: 'The', o: ['—', 'A'], w: { '—': 'abstract', A: 'abstract' }, e: 'abstract' },
    { t: 'choose', pt: 'inst', l: 3, p: "I need to stop by ___ school to drop off a package for my son's teacher.", a: 'the', o: ['—', 'a'], w: { '—': 'inst', a: 'inst' }, e: 'inst' },
    { t: 'fill', pt: 'geo', l: 3, p: 'My parents live in ___ Philippines, and my brother lives in Canada.', a: 'the', w: { a: 'geo' }, e: 'geo' },
    { t: 'fill', pt: 'superl', l: 3, p: "He's ___ only mechanic in town who can fix this car.", a: 'the', w: { an: 'superl', a: 'superl' }, e: 'superl' },
    { t: 'choose', pt: 'generic', l: 3, p: '___ dog is the most popular pet in America.', a: 'The', o: ['A', '—'], w: { A: 'generic', '—': 'generic' }, e: 'generic' },
  ],
});
