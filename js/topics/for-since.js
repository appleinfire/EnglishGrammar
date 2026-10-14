APP.addTopic({
  id: 'fs',
  title: 'for, since, ago, How long',
  level: 'B1',
  group: 'Tenses',
  icon: '🕰️',
  about: 'how long until now, and how far back',
  rule: {
    en: `- **for** + a period: *for three years, for a week, for ages*.
- **since** + a starting point: *since 2019, since Monday, since I was a child*.
- With *for / since* up to now, use the **Present Perfect** (or Present Perfect Continuous), not the Present Simple: *I've lived here for three years.*
- **How long have you…?** asks about a situation that is still going on: *How long have you lived in Texas?*
- **ago** = back from now, with the **Past Simple**, after the period: *two years ago*. Not *before two years*.
- *It's been two years since we moved.* After **since** in a clause, use the **Past Simple**: *since we moved, since I was a student*.
- **during** + a noun (when?): *during the meeting*. **for** + a length of time (how long?): *for two weeks*.`,
    uk: `- **for** + проміжок часу: *for three years, for a week, for ages*.
- **since** + точка початку: *since 2019, since Monday, since I was a child* — «з…».
- Коли з *for / since* мова про «досі», потрібен **Present Perfect** (або Present Perfect Continuous), а не Present Simple: *I've lived here for three years* — «Я живу тут три роки».
- **How long have you…?** — про ситуацію, яка ще триває: *How long have you lived in Texas?*
- **ago** = «тому», з **Past Simple**, після проміжку: *two years ago*. Не *before two years*.
- *It's been two years since we moved* — «Минуло два роки, відколи ми переїхали». Після **since** у підрядному реченні — **Past Simple**: *since we moved, since I was a student*.
- **during** + іменник (коли?): *during the meeting* — «під час зустрічі». **for** + тривалість (як довго?): *for two weeks*.`,
    ru: `- **for** + промежуток времени: *for three years, for a week, for ages*.
- **since** + точка начала: *since 2019, since Monday, since I was a child* — «с…».
- Когда с *for / since* речь о «до сих пор», нужен **Present Perfect** (или Present Perfect Continuous), а не Present Simple: *I've lived here for three years* — «Я живу здесь три года».
- **How long have you…?** — о ситуации, которая ещё длится: *How long have you lived in Texas?*
- **ago** = «назад», с **Past Simple**, после промежутка: *two years ago*. Не *before two years*.
- *It's been two years since we moved* — «Прошло два года с тех пор, как мы переехали». После **since** в придаточном — **Past Simple**: *since we moved, since I was a student*.
- **during** + существительное (когда?): *during the meeting* — «во время встречи». **for** + длительность (как долго?): *for two weeks*.`,
  },
  examples: ["I've lived in Seattle for six years.", "She's worked at the hospital since 2020.", 'How long have you been waiting?', 'We met five years ago.', "It's been two years since we moved."],
  trap: {
    uk: 'Я живу в Америці три роки.',
    ru: 'Я живу в Америке три года.',
    wrong: 'I live in America for three years.',
    right: "I've lived in America for three years.",
    note: {
      en: 'The Ukrainian and Russian present tense means "and it still goes on". In English, *for* or *since* up to now needs the Present Perfect. *I live here for three years* sounds like a plan for the future.',
      uk: 'Український теперішній час означає «і досі триває». Англійською *for* чи *since* до теперішнього моменту вимагають Present Perfect. *I live here for three years* звучить як план на майбутнє.',
      ru: 'Русское настоящее время значит «и до сих пор длится». По-английски *for* или *since* до настоящего момента требуют Present Perfect. *I live here for three years* звучит как план на будущее.',
    },
  },
  errors: {
    'since-for': {
      en: '**since** + a point in time (*2019, Monday, breakfast, I was a child*). **for** + a length of time (*three years, a week, ages*). Not *from* for "since".',
      uk: '**since** + момент (*2019, Monday, breakfast, I was a child*). **for** + тривалість (*three years, a week, ages*). Не *from* у значенні «з тих пір».',
      ru: '**since** + момент (*2019, Monday, breakfast, I was a child*). **for** + длительность (*three years, a week, ages*). Не *from* в значении «с тех пор».',
    },
    tense: {
      en: 'Something that started in the past and is still going on, with *for / since* → **Present Perfect** (*I\'ve lived*) or **Present Perfect Continuous** (*I\'ve been living*), not the Present Simple or Continuous.',
      uk: 'Почалося в минулому і триває досі, з *for / since* → **Present Perfect** (*I\'ve lived*) або **Present Perfect Continuous** (*I\'ve been living*), а не Present Simple чи Continuous.',
      ru: 'Началось в прошлом и длится до сих пор, с *for / since* → **Present Perfect** (*I\'ve lived*) или **Present Perfect Continuous** (*I\'ve been living*), а не Present Simple или Continuous.',
    },
    howlong: {
      en: '**How long** about a situation that still goes on → **How long have you + 3rd form / been + -ing?** *How long have you lived here?* (*How long do you live here?* is wrong.)',
      uk: '**How long** про ситуацію, що триває → **How long have you + 3-тя форма / been + -ing?** *How long have you lived here?* (*How long do you live here?* — помилка.)',
      ru: '**How long** о ситуации, которая длится → **How long have you + 3-я форма / been + -ing?** *How long have you lived here?* (*How long do you live here?* — ошибка.)',
    },
    ago: {
      en: '**ago** comes **after** the period and goes with the **Past Simple**: *two years ago, an hour ago, How long ago…?* Not *before two years*.',
      uk: '**ago** стоїть **після** проміжку і вживається з **Past Simple**: *two years ago, an hour ago, How long ago…?* Не *before two years*.',
      ru: '**ago** стоит **после** промежутка и используется с **Past Simple**: *two years ago, an hour ago, How long ago…?* Не *before two years*.',
    },
    'since-clause': {
      en: '*It\'s been + time + since* + **Past Simple**: *It\'s been a year since I started.* After *since* in a clause, the Past Simple: *since we moved*, not *since we have moved*.',
      uk: '*It\'s been + час + since* + **Past Simple**: *It\'s been a year since I started.* Після *since* у підрядному реченні — Past Simple: *since we moved*, а не *since we have moved*.',
      ru: '*It\'s been + время + since* + **Past Simple**: *It\'s been a year since I started.* После *since* в придаточном — Past Simple: *since we moved*, а не *since we have moved*.',
    },
    during: {
      en: '**during** + a noun, answers "when?": *during the meeting, during the summer*. **for** + a length of time, answers "how long?": *for three years*. **while** + a clause: *while I was waiting*.',
      uk: '**during** + іменник, відповідає «коли?»: *during the meeting, during the summer*. **for** + тривалість, «як довго?»: *for three years*. **while** + речення: *while I was waiting*.',
      ru: '**during** + существительное, отвечает «когда?»: *during the meeting, during the summer*. **for** + длительность, «как долго?»: *for three years*. **while** + предложение: *while I was waiting*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'for', l: 1, p: "I've lived in Seattle ___ six years.", a: 'for', o: ['since', 'during'], w: { since: 'since-for', during: 'during' }, e: 'since-for' },
    { t: 'choose', pt: 'since', l: 1, p: 'She has worked at the hospital ___ 2020.', a: 'since', o: ['for', 'from'], w: { for: 'since-for', from: 'since-for' }, e: 'since-for' },
    { t: 'choose', pt: 'since', l: 1, p: "We haven't eaten ___ breakfast.", a: 'since', o: ['for', 'during'], w: { for: 'since-for', during: 'during' }, e: 'since-for' },
    { t: 'choose', pt: 'for', l: 1, p: "They've been married ___ a long time.", a: 'for', o: ['since', 'from'], w: { since: 'since-for', from: 'since-for' }, e: 'since-for' },
    { t: 'choose', pt: 'ago', l: 1, p: 'I started this course two weeks ___.', a: 'ago', o: ['before', 'since'], w: { before: 'ago', since: 'ago' }, e: 'ago' },
    { t: 'choose', pt: 'during', l: 1, p: 'My phone rang ___ the meeting.', a: 'during', o: ['for', 'since'], w: { for: 'during', since: 'since-for' }, e: 'during' },
    { t: 'choose', pt: 'howlong', l: 1, p: 'How long ___ you known your best friend?', a: 'have', o: ['do', 'did'], w: { do: 'howlong', did: 'howlong' }, e: 'howlong' },
    { t: 'fill', pt: 'for', l: 1, p: "I've had this cough ___ ten days.", a: 'for', w: { since: 'since-for', during: 'during' }, e: 'since-for' },
    { t: 'fill', pt: 'since', l: 1, p: "He's been in the US ___ last March.", a: 'since', w: { for: 'since-for', from: 'since-for' }, e: 'since-for' },
    { t: 'fill', pt: 'for', l: 1, p: 'We ___ (live) here for three years.', a: ['have lived', 'have been living'], w: { live: 'tense', lived: 'tense', 'are living': 'tense' }, e: 'tense' },
    { t: 'fill', pt: 'since', l: 1, p: 'I ___ (not / drink) coffee since Monday.', a: "haven't drunk", w: { "don't drink": 'tense', "didn't drink": 'tense', "haven't drank": 'pp:form' }, e: 'tense' },
    { t: 'fill', pt: 'howlong', l: 1, p: 'How long ___ you ___ (have) your dog?', a: 'have|had', w: { 'do|have': 'howlong', 'did|have': 'howlong' }, e: 'howlong' },
    { t: 'fill', pt: 'ago', l: 1, p: 'We met five years ___.', a: 'ago', w: { before: 'ago', since: 'ago' }, e: 'ago' },
    { t: 'fill', pt: 'during', l: 1, p: 'I fell asleep ___ the movie.', a: 'during', w: { for: 'during', while: 'during' }, e: 'during' },
    { t: 'build', pt: 'since', l: 1, a: "I have been here since nine o'clock.", x: ['for'], e: 'since-for' },
    { t: 'build', pt: 'howlong', l: 1, a: 'How long have you been waiting?', x: ['do'], e: 'howlong' },
    { t: 'build', pt: 'ago', l: 1, a: 'She called an hour ago.', x: ['before'], e: 'ago' },

    // ---------- Use
    { t: 'fill', pt: 'clause', l: 2, p: "It's been two years since we ___ (move) to Arizona.", a: 'moved', w: { 'have moved': 'since-clause', move: 'since-clause' }, e: 'since-clause' },
    { t: 'fill', pt: 'clause', l: 2, p: "I've known Sara since we ___ (be) at school together.", a: 'were', w: { 'have been': 'since-clause', are: 'since-clause', was: 'since-clause' }, e: 'since-clause' },
    { t: 'fill', pt: 'for', l: 2, p: 'Kate has been a teacher ___ 2015, and Paul has been one ___ only a year.', a: 'since|for', w: { 'for|since': 'since-for', 'from|for': 'since-for' }, e: 'since-for' },
    { t: 'fill', pt: 'howlong', l: 2, p: '— How long ___ she ___ (work) there? — For about six months.', a: ['has|worked', 'has|been working'], w: { 'does|work': 'howlong', 'is|working': 'howlong', 'did|work': 'howlong' }, e: 'howlong' },
    { t: 'fill', pt: 'ago', l: 2, p: 'The last time I saw a dentist was a year ___.', a: 'ago', w: { before: 'ago' }, e: 'ago' },
    { t: 'fill', pt: 'since', l: 2, p: "I haven't been to the gym ___ the summer.", a: 'since', w: { for: 'since-for', from: 'since-for', during: 'during' }, e: 'since-for' },
    { t: 'fill', pt: 'clause', l: 2, p: "It's been ages ___ we last talked!", a: 'since', w: { for: 'since-for', when: 'since-for' }, e: 'since-clause' },
    { t: 'fill', pt: 'during', l: 2, p: "We'll be in Kyiv ___ two weeks in August.", a: 'for', w: { during: 'during', since: 'since-for' }, e: 'during' },
    { t: 'build', pt: 'clause', l: 2, a: 'It has been three months since I started.', x: ['for', 'have'], e: 'since-clause' },
    { t: 'fix', pt: 'for', l: 2, p: 'I am in this country for three years.', a: ["I've been in this country for three years."], e: 'tense' },
    { t: 'fix', pt: 'howlong', l: 2, p: 'How long do you live in Texas?', a: ['How long have you lived in Texas?', 'How long have you been living in Texas?'], e: 'howlong' },
    { t: 'fix', pt: 'ago', l: 2, p: 'I came to America before two years.', a: ['I came to America two years ago.'], e: 'ago' },
    { t: 'fix', pt: 'during', l: 2, p: 'I studied English during three years.', a: ['I studied English for three years.'], e: 'during' },
    { t: 'tr', pt: 'clause', l: 2, i: "Rewrite with *It's been… since…*", p: 'I last saw my brother two years ago.', s: "It's been", a: ["It's been two years since I last saw my brother.", "It's been two years since I saw my brother.", "It's been 2 years since I last saw my brother."], e: 'since-clause' },
    { t: 'tr', pt: 'howlong', l: 2, i: 'Ask the question with *How long*.', p: 'I have been a nurse for eight years.', s: 'How long', a: ['How long have you been a nurse?'], e: 'howlong' },
    { t: 'tl', pt: 'for', l: 2, uk: 'Я вчу англійську вже два роки.', ru: 'Я учу английский уже два года.', a: ["I've been learning English for two years.", "I've been studying English for two years.", "I've been learning English for two years now.", "I've been studying English for two years now.", "I've been learning English for 2 years."], e: 'tense' },
    { t: 'tl', pt: 'since', l: 2, uk: 'Ми тут з восьмої ранку.', ru: 'Мы здесь с восьми утра.', a: ["We've been here since eight in the morning.", "We've been here since 8 in the morning.", "We've been here since 8 a.m.", "We've been here since eight a.m.", "We've been here since 8 am.", "We've been here since eight o'clock in the morning.", "We've been here since eight o'clock this morning.", "We've been here since eight this morning.", "We've been here since 8 this morning."], e: 'tense' },

    // ---------- Pro
    { t: 'fix', pt: 'clause', l: 3, p: "It's been a year since I have started this job.", a: ["It's been a year since I started this job."], e: 'since-clause' },
    { t: 'fix', pt: 'since', l: 3, p: "I'm waiting for the bus since 7:30.", a: ["I've been waiting for the bus since 7:30."], e: 'tense' },
    { t: 'fix', pt: 'for', l: 3, p: 'We are married for ten years.', a: ["We've been married for ten years.", "We've been married for 10 years."], e: 'tense' },
    { t: 'fix', pt: 'howlong', l: 3, p: 'How long are you working here?', a: ['How long have you been working here?', 'How long have you worked here?'], e: 'howlong' },
    { t: 'tr', pt: 'ago', l: 3, i: 'Say when he joined. Use *ago*.', p: 'He has been in the army for three months.', s: 'He joined', a: ['He joined the army three months ago.', 'He joined the army 3 months ago.'], e: 'ago' },
    { t: 'tr', pt: 'since', l: 3, i: 'One sentence with *since*.', p: 'I started this job in October. I still have it.', s: "I've had", a: ["I've had this job since October."], e: 'since-for' },
    { t: 'tr', pt: 'for', l: 3, i: 'One sentence with *for*.', p: "We started waiting at 2 p.m. Now it's 5 p.m.", s: "We've been", a: ["We've been waiting for three hours.", "We've been waiting for 3 hours."], e: 'tense' },
    { t: 'tl', pt: 'clause', l: 3, uk: 'Минуло три роки відтоді, як ми приїхали в США.', ru: 'Прошло три года с тех пор, как мы приехали в США.', a: ["It's been three years since we came to the US.", "It's been three years since we arrived in the US.", "It's been three years since we moved to the US.", "It's been three years since we came to the USA.", "It's been three years since we came to the United States.", "It's been three years since we arrived in the USA.", "It's been three years since we moved to the USA.", "It's been 3 years since we came to the US.", 'Three years have passed since we came to the US.', 'Three years have passed since we arrived in the US.'], e: 'since-clause' },
    { t: 'tl', pt: 'howlong', l: 3, uk: 'Скільки ти вже чекаєш?', ru: 'Сколько ты уже ждёшь?', a: ['How long have you been waiting?'], e: 'howlong' },
    { t: 'tl', pt: 'during', l: 3, uk: 'Під час співбесіди я дуже нервувала.', ru: 'Во время собеседования я очень нервничала.', a: ['I was very nervous during the interview.', 'During the interview I was very nervous.', 'I was really nervous during the interview.', 'During the interview I was really nervous.', 'I was so nervous during the interview.', 'I was very nervous during my interview.', 'I was really nervous during my interview.'], e: 'during' },
    { t: 'tl', pt: 'for', l: 3, uk: 'Він не працює вже місяць.', ru: 'Он не работает уже месяц.', a: ["He hasn't worked for a month.", "He hasn't been working for a month.", "He hasn't worked in a month.", "He hasn't been working in a month.", "He's been out of work for a month.", "He's been unemployed for a month.", "He hasn't worked for a month now."], e: 'tense' },
    { t: 'tl', pt: 'ago', l: 3, uk: 'Я дзвонила тобі десять хвилин тому.', ru: 'Я звонила тебе десять минут назад.', a: ['I called you ten minutes ago.', 'I called you 10 minutes ago.', 'I phoned you ten minutes ago.'], e: 'ago' },
    { t: 'fill', pt: 'clause', l: 3, p: "It's been a long time since I ___ (feel) this happy.", a: 'felt', w: { 'have felt': 'since-clause', feel: 'since-clause', 'was feeling': 'since-clause' }, e: 'since-clause' },
    { t: 'fill', pt: 'during', l: 3, p: 'Please turn off your phones ___ the performance.', a: 'during', w: { for: 'during', while: 'during', since: 'since-for' }, e: 'during' },
    { t: 'fill', pt: 'ago', l: 3, p: 'How long ___ did you graduate?', a: 'ago', w: { before: 'ago', since: 'ago', for: 'ago' }, e: 'ago' },
  ],
});
