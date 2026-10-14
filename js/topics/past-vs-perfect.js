APP.addTopic({
  id: 'ppps',
  title: 'Past Simple or Present Perfect?',
  level: 'B1',
  group: 'Contrasts',
  icon: '⚖️',
  about: 'finished time → Past Simple; connected to now → Present Perfect',
  rule: {
    en: `Ask: **is the time finished?**
- **Past Simple** — a finished time, said or understood: *yesterday, last year, in 2020, two days ago, when I was a child*. Questions with **When…? What time…? Where… (then)?**
  *We moved to Houston three years ago. When did you start?*
- **Present Perfect** — no finished time; the period or the situation continues to **now**: *since, for (up to now), so far, today, this week, ever, never*.
  *I've lived here since 2022. I haven't seen her for two years.*
- News first (Present Perfect), then the details (Past Simple): *I've cut my finger! — How did you do that?*
- The situation is over (a job you left, a person who died) → Past Simple: *My grandmother lived in Odesa all her life.*
American English often uses the Past Simple for fresh news (*I just lost my keys*), but never the Present Perfect with a finished time.`,
    uk: `Питання: **чи цей час уже закінчився?**
- **Past Simple** — завершений час, названий або зрозумілий: *yesterday, last year, in 2020, two days ago, when I was a child*. Питання **When…? What time…? Where… (тоді)?**
  *We moved to Houston three years ago. When did you start?*
- **Present Perfect** — завершеного часу немає; період або ситуація триває **до зараз**: *since, for (до сьогодні), so far, today, this week, ever, never*.
  *I've lived here since 2022. I haven't seen her for two years.*
- Спершу новина (Present Perfect), потім подробиці (Past Simple): *I've cut my finger! — How did you do that?*
- Ситуація закінчилася (робота, з якої пішли; людина, якої вже немає) → Past Simple: *My grandmother lived in Odesa all her life.*
В американській англійській для свіжих новин часто вживають Past Simple (*I just lost my keys*), але Present Perfect із завершеним часом — ніколи.`,
    ru: `Вопрос: **закончилось ли это время?**
- **Past Simple** — завершённое время, названное или понятное: *yesterday, last year, in 2020, two days ago, when I was a child*. Вопросы **When…? What time…? Where… (тогда)?**
  *We moved to Houston three years ago. When did you start?*
- **Present Perfect** — завершённого времени нет; период или ситуация длится **до сейчас**: *since, for (до сегодня), so far, today, this week, ever, never*.
  *I've lived here since 2022. I haven't seen her for two years.*
- Сначала новость (Present Perfect), потом подробности (Past Simple): *I've cut my finger! — How did you do that?*
- Ситуация закончилась (работа, с которой ушли; человек, которого уже нет) → Past Simple: *My grandmother lived in Odesa all her life.*
В американском английском для свежих новостей часто используют Past Simple (*I just lost my keys*), но Present Perfect с завершённым временем — никогда.`,
  },
  examples: ['We moved to Houston three years ago.', "I've lived here since 2022.", "I've been to Japan. I went there in 2018.", 'When did you get your license?', "I haven't seen my sister for two years."],
  trap: {
    uk: 'Я знаю її з 2019 року.',
    ru: 'Я знаю её с 2019 года.',
    wrong: 'I know her since 2019.',
    right: "I've known her since 2019.",
    note: {
      en: 'In Ukrainian and Russian the present tense covers "from then until now". English needs the Present Perfect for that bridge between the past and now.',
      uk: 'Українською теперішній час охоплює «відтоді й досі». Англійською для такого «мосту» між минулим і теперішнім потрібен Present Perfect.',
      ru: 'По-русски настоящее время охватывает «с тех пор и до сих пор». По-английски для такого «моста» между прошлым и настоящим нужен Present Perfect.',
    },
  },
  errors: {
    'pp-finished': {
      en: 'There is a **finished time** (*yesterday, last night, in 2020, on Sunday, ago*) → **Past Simple**. The Present Perfect never goes with a finished time.',
      uk: 'Є **завершений час** (*yesterday, last night, in 2020, on Sunday, ago*) → **Past Simple**. Present Perfect ніколи не вживається із завершеним часом.',
      ru: 'Есть **завершённое время** (*yesterday, last night, in 2020, on Sunday, ago*) → **Past Simple**. Present Perfect никогда не используется с завершённым временем.',
    },
    'ps-unfinished': {
      en: 'The situation goes on **until now** (*since…, for… up to now, How long…?, the third time today*) → **Present Perfect**: *I\'ve known her since 2019.*',
      uk: 'Ситуація триває **досі** (*since…, for… до сьогодні, How long…?, the third time today*) → **Present Perfect**: *I\'ve known her since 2019.*',
      ru: 'Ситуация длится **до сих пор** (*since…, for… до сегодня, How long…?, the third time today*) → **Present Perfect**: *I\'ve known her since 2019.*',
    },
    'when-pp': {
      en: '**When…? What time…? What… last weekend?** ask about a finished moment → **Past Simple**: *When did you arrive?* Not *When have you arrived?*',
      uk: '**When…? What time…? What… last weekend?** питають про завершений момент → **Past Simple**: *When did you arrive?* Не *When have you arrived?*',
      ru: '**When…? What time…? What… last weekend?** спрашивают о завершённом моменте → **Past Simple**: *When did you arrive?* Не *When have you arrived?*',
    },
    details: {
      en: 'The news or experience comes in the Present Perfect; the **details** (when, where, how) come in the **Past Simple**: *I\'ve been to Japan. I went there in 2018.*',
      uk: 'Новина чи досвід — у Present Perfect; **подробиці** (коли, де, як) — у **Past Simple**: *I\'ve been to Japan. I went there in 2018.*',
      ru: 'Новость или опыт — в Present Perfect; **подробности** (когда, где, как) — в **Past Simple**: *I\'ve been to Japan. I went there in 2018.*',
    },
    'ago-for': {
      en: '**ago** = how far back (with the **Past Simple**): *two hours ago*. **for** = how long: *for two hours*. Not *before* — *before* means "earlier than something".',
      uk: '**ago** = як давно (з **Past Simple**): *two hours ago* — «дві години тому». **for** = як довго: *for two hours*. Не *before* — це «раніше за щось».',
      ru: '**ago** = как давно (с **Past Simple**): *two hours ago* — «два часа назад». **for** = как долго: *for two hours*. Не *before* — это «раньше чего-то».',
    },
    over: {
      en: 'The situation is **over** (a job you left, a life that ended, a finished book) → **Past Simple**, even with *for* or *all her life*: *He worked there for five years* (not any more).',
      uk: 'Ситуація **закінчилася** (робота, з якої пішли; життя, що завершилося) → **Past Simple**, навіть із *for* чи *all her life*: *He worked there for five years* (вже не працює).',
      ru: 'Ситуация **закончилась** (работа, с которой ушли; жизнь, которая завершилась) → **Past Simple**, даже с *for* или *all her life*: *He worked there for five years* (уже не работает).',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'when', l: 1, p: 'We ___ to Florida last summer.', a: 'went', o: ['have gone', 'have been'], w: { 'have gone': 'pp-finished', 'have been': 'pp-finished' }, e: 'pp-finished' },
    { t: 'choose', pt: 'still', l: 1, p: 'I ___ here since January.', a: 'have worked', o: ['worked', 'work'], w: { worked: 'ps-unfinished', work: 'ps-unfinished' }, e: 'ps-unfinished' },
    { t: 'choose', pt: 'q-when', l: 1, p: 'When ___ you start your new job?', a: 'did', o: ['have', 'do'], w: { have: 'when-pp' }, e: 'when-pp' },
    { t: 'choose', pt: 'ago', l: 1, p: 'She called me two hours ___.', a: 'ago', o: ['before', 'for'], w: { before: 'ago-for', for: 'ago-for' }, e: 'ago-for' },
    { t: 'choose', pt: 'over', l: 1, p: 'My grandmother ___ in Odesa all her life. She died in 2015.', a: 'lived', o: ['has lived', 'lives'], w: { 'has lived': 'over', lives: 'over' }, e: 'over' },
    { t: 'choose', pt: 'details', l: 1, p: '___ you ever had a car accident?', a: 'Have', o: ['Did', 'Were'], w: { Did: 'pp:ps-exp', Were: 'pp:form' }, e: 'pp:ps-exp' },
    { t: 'fill', pt: 'when', l: 1, p: 'I ___ (see) Mark at the supermarket yesterday.', a: 'saw', w: { 'have seen': 'pp-finished', seen: 'pp-finished', 'has seen': 'pp-finished' }, e: 'pp-finished' },
    { t: 'fill', pt: 'still', l: 1, p: 'They ___ (know) each other since college.', a: 'have known', w: { knew: 'ps-unfinished', know: 'ps-unfinished', 'have knew': 'pp:form' }, e: 'ps-unfinished' },
    { t: 'fill', pt: 'q-when', l: 1, p: 'What time ___ you ___ (get) home last night?', a: 'did|get', w: { 'have|got': 'when-pp', 'have|gotten': 'when-pp', 'did|got': 'when-pp' }, e: 'when-pp' },
    { t: 'fill', pt: 'ago', l: 1, p: 'The package ___ (arrive) three days ago.', a: 'arrived', w: { 'has arrived': 'pp-finished', arrives: 'pp-finished' }, e: 'pp-finished' },
    { t: 'fill', pt: 'over', l: 1, p: 'I ___ (work) as a nurse in Kyiv for ten years. Now I am a student.', a: 'worked', w: { 'have worked': 'over', work: 'over' }, e: 'over' },
    { t: 'fill', pt: 'details', l: 1, p: "I've lost my wallet. I think I ___ (leave) it on the bus.", a: 'left', w: { 'have left': 'details', leave: 'details' }, e: 'details' },
    { t: 'fill', pt: 'when', l: 1, p: '___ you ___ (watch) the game on Sunday?', a: 'Did|watch', w: { 'Have|watched': 'pp-finished', 'Did|watched': 'pp-finished' }, e: 'pp-finished' },
    { t: 'choose', pt: 'details', l: 1, p: "I've been to Japan. I ___ there in 2018.", a: 'went', o: ['have gone', 'have been'], w: { 'have gone': 'details', 'have been': 'details' }, e: 'details' },
    { t: 'build', pt: 'ago', l: 1, a: 'We moved here two years ago.', x: ['have', 'before'], e: 'ago-for' },
    { t: 'build', pt: 'still', l: 1, a: 'I have known her since 2019.', x: ['knew'], e: 'ps-unfinished' },
    { t: 'build', pt: 'q-when', l: 1, a: 'When did you buy this car?', x: ['have'], e: 'when-pp' },

    // ---------- Use
    { t: 'fill', pt: 'details', l: 2, p: "— I've cut my finger! — Oh no! How ___ you ___ (do) that?", a: 'did|do', w: { 'have|done': 'details', 'did|did': 'pp:form' }, e: 'details' },
    { t: 'fill', pt: 'still', l: 2, p: "Anna ___ (be) sick since Tuesday, so she ___ (not / come) to work yesterday.", a: "has been|didn't come", w: { "was|didn't come": 'ps-unfinished', "has been|hasn't come": 'pp-finished', "is|didn't come": 'ps-unfinished' }, e: 'ps-unfinished' },
    { t: 'fill', pt: 'details', l: 2, p: '— Have you ever been to Mexico? — Yes, I ___ (go) to Cancun last year.', a: 'went', w: { 'have gone': 'details', 'have been': 'details' }, e: 'details' },
    { t: 'fill', pt: 'over', l: 2, p: 'Shakespeare ___ (write) 39 plays.', a: 'wrote', w: { 'has written': 'over', 'has wrote': 'pp:form' }, e: 'over', n: 'Shakespeare died long ago, so his writing is over: Past Simple.' },
    { t: 'fill', pt: 'when', l: 2, p: 'I ___ (not / sleep) well last night.', a: "didn't sleep", w: { "haven't slept": 'pp-finished', "didn't slept": 'pp:form' }, e: 'pp-finished' },
    { t: 'fill', pt: 'still', l: 2, p: 'How long ___ you ___ (have) this car? — Since 2021.', a: 'have|had', w: { 'did|have': 'ps-unfinished', 'do|have': 'ps-unfinished' }, e: 'ps-unfinished' },
    { t: 'fill', pt: 'still', l: 2, p: 'I ___ (not / see) my parents for two years. The last time was in 2023.', a: ["haven't seen", "haven't been seeing"], w: { "didn't see": 'ps-unfinished', "don't see": 'ps-unfinished' }, e: 'ps-unfinished' },
    { t: 'build', pt: 'q-when', l: 2, a: 'Where did you find it?', x: ['have', 'found'], e: 'when-pp' },
    { t: 'build', pt: 'over', l: 2, a: 'He worked there for five years.', x: ['ago'], e: 'over' },
    { t: 'fix', pt: 'when', l: 2, p: 'I have met him in 2020.', a: 'I met him in 2020.', e: 'pp-finished' },
    { t: 'fix', pt: 'q-when', l: 2, p: 'When have you arrived in the US?', a: 'When did you arrive in the US?', e: 'when-pp' },
    { t: 'fix', pt: 'still', l: 2, p: 'I live in this apartment since 2021.', a: ["I've lived in this apartment since 2021.", "I've been living in this apartment since 2021."], e: 'ps-unfinished' },
    { t: 'fix', pt: 'ago', l: 2, p: 'She has left an hour ago.', a: 'She left an hour ago.', e: 'pp-finished' },
    { t: 'tr', pt: 'details', l: 2, i: 'Answer with the Past Simple and *last week*.', p: 'Have you seen the new Marvel movie?', s: 'Yes, I', a: ['Yes, I saw it last week.', 'Yes, I watched it last week.', 'Yes, I saw it last week!'], e: 'details' },
    { t: 'tr', pt: 'q-when', l: 2, i: 'Ask about the time with *When*.', p: 'She has started a new job.', s: 'When', a: ['When did she start her new job?', 'When did she start the new job?', 'When did she start a new job?'], e: 'when-pp' },
    { t: 'tl', pt: 'ago', l: 2, uk: "Ми переїхали в Х'юстон три роки тому.", ru: 'Мы переехали в Хьюстон три года назад.', a: ['We moved to Houston three years ago.', 'We moved to Houston 3 years ago.'], e: 'ago-for' },
    { t: 'tl', pt: 'still', l: 2, uk: 'Я знаю її з дитинства.', ru: 'Я знаю её с детства.', a: ["I've known her since childhood.", "I've known her since I was a child.", "I've known her since we were children.", "I've known her since we were kids.", "I've known her since I was a kid.", "I've known her since my childhood."], e: 'ps-unfinished' },

    // ---------- Pro
    { t: 'fix', pt: 'details', l: 3, p: "I've been to Boston last month for a conference.", a: ['I went to Boston last month for a conference.', 'I was in Boston last month for a conference.'], e: 'details' },
    { t: 'fix', pt: 'over', l: 3, p: 'My father has worked at the factory for 30 years before he retired.', a: ['My father worked at the factory for 30 years before he retired.', 'My father had worked at the factory for 30 years before he retired.'], e: 'over' },
    { t: 'fix', pt: 'still', l: 3, p: "We didn't see each other since the wedding.", a: ["We haven't seen each other since the wedding."], e: 'ps-unfinished' },
    { t: 'fix', pt: 'q-when', l: 3, p: 'What have you done last weekend?', a: ['What did you do last weekend?'], e: 'when-pp' },
    { t: 'tr', pt: 'over', l: 3, i: "She doesn't work at the bank any more. Rewrite.", p: 'She has worked at the bank for six years.', a: ['She worked at the bank for six years.', 'She worked at the bank for 6 years.'], e: 'over' },
    { t: 'tr', pt: 'still', l: 3, i: 'Make one sentence with *since*.', p: 'I moved to Denver in May. I still live here.', s: 'I', a: ["I've lived in Denver since May.", "I've been living in Denver since May.", "I've lived here since May.", "I've been living here since May."], e: 'ps-unfinished' },
    { t: 'tr', pt: 'ago', l: 3, i: 'Say when you bought it. Use *ago*.', p: 'I have had this phone for two years.', s: 'I bought', a: ['I bought this phone two years ago.', 'I bought it two years ago.', 'I bought this phone 2 years ago.'], e: 'ago-for' },
    { t: 'tl', pt: 'details', l: 3, uk: 'Я вже бачила цей фільм. Ми дивилися його минулої зими.', ru: 'Я уже видела этот фильм. Мы смотрели его прошлой зимой.', a: ["I've already seen this movie. We watched it last winter.", "I've already seen this movie. We saw it last winter.", "I've already seen this film. We watched it last winter.", "I've already seen this film. We saw it last winter.", "I've seen this movie already. We watched it last winter.", "I've seen this movie already. We saw it last winter.", "I've already seen that movie. We watched it last winter.", "I've already seen that movie. We saw it last winter."], am: ['I already saw this movie. We watched it last winter.', 'I already saw this movie. We saw it last winter.'], e: 'details' },
    { t: 'tl', pt: 'q-when', l: 3, uk: 'Коли ти отримала водійські права?', ru: 'Когда ты получила водительские права?', a: ["When did you get your driver's license?", 'When did you get your driving license?', 'When did you get your license?', "When did you get your driver's licence?"], e: 'when-pp' },
    { t: 'tl', pt: 'still', l: 3, uk: 'Я не бачила свою сестру вже два роки.', ru: 'Я не видела свою сестру уже два года.', a: ["I haven't seen my sister for two years.", "I haven't seen my sister in two years.", "I haven't seen my sister for two years now.", "I haven't seen my sister in two years now.", "I haven't seen my sister for 2 years."], e: 'ps-unfinished' },
    { t: 'tl', pt: 'over', l: 3, uk: 'Мій дідусь сорок років працював лікарем.', ru: 'Мой дедушка сорок лет работал врачом.', a: ['My grandfather worked as a doctor for forty years.', 'My grandfather worked as a doctor for 40 years.', 'My grandpa worked as a doctor for forty years.', 'My grandpa worked as a doctor for 40 years.', 'My grandfather was a doctor for forty years.', 'My grandfather was a doctor for 40 years.'], e: 'over', n: 'He does not work any more, so the Past Simple — even with *for forty years*.' },
    { t: 'tl', pt: 'ago', l: 3, uk: 'Лікар дзвонив пів години тому.', ru: 'Врач звонил полчаса назад.', a: ['The doctor called half an hour ago.', 'The doctor called thirty minutes ago.', 'The doctor called 30 minutes ago.', 'The doctor phoned half an hour ago.'], e: 'ago-for' },
    { t: 'fill', pt: 'details', l: 3, p: '— Have you ever lost your passport? — Yes, once. Someone ___ (steal) it in Rome.', a: 'stole', w: { 'has stolen': 'details', stolen: 'pp:form' }, e: 'details' },
    { t: 'fill', pt: 'when', l: 3, p: "— Where's your jacket? — I think I ___ (leave) it at the restaurant last night.", a: 'left', w: { 'have left': 'pp-finished', leaved: 'pp:form' }, e: 'pp-finished' },
    { t: 'fill', pt: 'still', l: 3, p: 'This is the third time she ___ (ask) me that question today.', a: 'has asked', w: { asked: 'ps-unfinished', asks: 'ps-unfinished', 'is asking': 'ps-unfinished' }, e: 'ps-unfinished' },
    { t: 'tr', pt: 'when', l: 3, i: 'Add *yesterday* and change the tense.', p: "I've talked to the manager.", s: 'I', a: ['I talked to the manager yesterday.', 'Yesterday I talked to the manager.', 'I spoke to the manager yesterday.', 'I spoke with the manager yesterday.', 'I talked with the manager yesterday.'], e: 'pp-finished' },
  ],
});
