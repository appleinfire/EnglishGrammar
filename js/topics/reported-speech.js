APP.addTopic({
  id: 'rep',
  title: 'Reported speech: she said, he asked',
  level: 'B1',
  group: 'Reported speech',
  icon: '💬',
  about: 'said / told me, asked if…, told me to…',
  rule: {
    en: `Passing on what someone said:
- **say** (no person): *She said (that) she was busy.* **tell** + person: *She told **me** (that) she was busy.* Not *said me*.
- After *said / told* in the past, move the tense **one step back**: *am → was, live → lived, will → would, can → could, have lost → had lost, lost → had lost*.
  If it is still true now, keeping the present is fine in speech: *He said he lives in Ohio.*
- Questions: **asked + if / whether** (yes/no) or **asked + question word**, then **statement order**, no *do / did*: *She asked **if I was** ready. He asked **where I worked**.*
- Requests and orders: **told / asked + person + to + verb**; negative **not to**: *The doctor told me **to drink** more water. She asked us **not to park** here.*
- Words of time and place change: *tomorrow → the next day, yesterday → the day before, here → there, today → that day*.`,
    uk: `Переказуємо чужі слова:
- **say** (без особи): *She said (that) she was busy.* **tell** + особа: *She told **me** (that) she was busy.* Не *said me*.
- Після *said / told* у минулому зсуваємо час **на крок назад**: *am → was, live → lived, will → would, can → could, have lost → had lost, lost → had lost*.
  Якщо це досі правда, у розмові можна залишити теперішній: *He said he lives in Ohio.*
- Питання: **asked + if / whether** («чи») або **asked + питальне слово**, далі **порядок ствердження**, без *do / did*: *She asked **if I was** ready. He asked **where I worked**.*
- Прохання й накази: **told / asked + особа + to + дієслово**; заперечення — **not to**: *The doctor told me **to drink** more water. She asked us **not to park** here.*
- Слова часу й місця змінюються: *tomorrow → the next day, yesterday → the day before, here → there, today → that day*.`,
    ru: `Пересказываем чужие слова:
- **say** (без лица): *She said (that) she was busy.* **tell** + лицо: *She told **me** (that) she was busy.* Не *said me*.
- После *said / told* в прошлом сдвигаем время **на шаг назад**: *am → was, live → lived, will → would, can → could, have lost → had lost, lost → had lost*.
  Если это всё ещё правда, в разговоре можно оставить настоящее: *He said he lives in Ohio.*
- Вопросы: **asked + if / whether** («ли») или **asked + вопросительное слово**, дальше **порядок утверждения**, без *do / did*: *She asked **if I was** ready. He asked **where I worked**.*
- Просьбы и приказы: **told / asked + лицо + to + глагол**; отрицание — **not to**: *The doctor told me **to drink** more water. She asked us **not to park** here.*
- Слова времени и места меняются: *tomorrow → the next day, yesterday → the day before, here → there, today → that day*.`,
  },
  examples: ['She told me she was busy.', 'He said he would call back.', 'The officer asked if I was married.', 'She asked me where I worked.', 'The doctor told me not to eat after eight.'],
  trap: {
    uk: 'Він сказав, що запізниться.',
    ru: 'Он сказал, что опоздает.',
    wrong: 'He said me that he will be late.',
    right: 'He told me that he would be late.',
    note: {
      en: 'Ukrainian and Russian keep the original tense (*запізниться / опоздает*). English usually moves it back after *said* (*will → would*). And *say* takes no person: *told me*, not *said me*.',
      uk: 'Українською час зберігається («запізниться»). Англійською після *said* його зазвичай зсувають назад (*will → would*). І *say* не приймає особу: *told me*, а не *said me*.',
      ru: 'По-русски время сохраняется («опоздает»). По-английски после *said* его обычно сдвигают назад (*will → would*). И *say* не принимает лицо: *told me*, а не *said me*.',
    },
  },
  errors: {
    'say-tell': {
      en: '**tell** + person: *told me, told us, tell you*. **say** without a person: *she said (that)…, say goodbye*. Not *said me*. (*say to me* is possible but rare.)',
      uk: '**tell** + особа: *told me, told us, tell you*. **say** без особи: *she said (that)…, say goodbye*. Не *said me*. (*say to me* можливо, але рідко.)',
      ru: '**tell** + лицо: *told me, told us, tell you*. **say** без лица: *she said (that)…, say goodbye*. Не *said me*. (*say to me* возможно, но редко.)',
    },
    backshift: {
      en: 'After *said / told / asked* in the past, move the tense back: **am / is → was, do → did, am doing → was doing, have done → had done**.',
      uk: 'Після *said / told / asked* у минулому зсуваємо час назад: **am / is → was, do → did, am doing → was doing, have done → had done**.',
      ru: 'После *said / told / asked* в прошлом сдвигаем время назад: **am / is → was, do → did, am doing → was doing, have done → had done**.',
    },
    'will-would': {
      en: 'In reported speech **will → would**, **can → could**, **may → might**: *He said he would call. She said she could help.*',
      uk: 'У непрямій мові **will → would**, **can → could**, **may → might**: *He said he would call. She said she could help.*',
      ru: 'В косвенной речи **will → would**, **can → could**, **may → might**: *He said he would call. She said she could help.*',
    },
    'rq-order': {
      en: 'A reported question has **statement order** and **no do / did**: *He asked where I worked* — not *where did I work*.',
      uk: 'Непряме питання має **порядок ствердження** і **без do / did**: *He asked where I worked* — а не *where did I work*.',
      ru: 'Косвенный вопрос имеет **порядок утверждения** и **без do / did**: *He asked where I worked* — а не *where did I work*.',
    },
    'rq-if': {
      en: 'A reported **yes/no** question starts with **if** or **whether**: *She asked if I liked my job.* Not *asked do I like*, not *asked that*.',
      uk: 'Непряме питання **«так/ні»** починається з **if** або **whether**: *She asked if I liked my job.* Не *asked do I like* і не *asked that*.',
      ru: 'Косвенный вопрос **«да/нет»** начинается с **if** или **whether**: *She asked if I liked my job.* Не *asked do I like* и не *asked that*.',
    },
    command: {
      en: 'Reported orders and requests: **told / asked + person + to + verb**; negative: **not to + verb**: *She told me not to worry.* Not *told me don\'t*.',
      uk: 'Переказані накази й прохання: **told / asked + особа + to + дієслово**; заперечення: **not to + дієслово**: *She told me not to worry.* Не *told me don\'t*.',
      ru: 'Пересказанные приказы и просьбы: **told / asked + лицо + to + глагол**; отрицание: **not to + глагол**: *She told me not to worry.* Не *told me don\'t*.',
    },
    'time-words': {
      en: 'Time and place words change when you report later: **tomorrow → the next day**, **yesterday → the day before**, **here → there**, **today → that day**.',
      uk: 'Слова часу й місця змінюються, коли переказуємо пізніше: **tomorrow → the next day**, **yesterday → the day before**, **here → there**, **today → that day**.',
      ru: 'Слова времени и места меняются, когда пересказываем позже: **tomorrow → the next day**, **yesterday → the day before**, **here → there**, **today → that day**.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'say-tell', l: 1, p: 'She ___ me she was busy.', a: 'told', o: ['said', 'spoke'], w: { said: 'say-tell', spoke: 'say-tell' }, e: 'say-tell' },
    { t: 'choose', pt: 'say-tell', l: 1, p: 'He ___ that he would be late.', a: 'said', o: ['told', 'talked'], w: { told: 'say-tell', talked: 'say-tell' }, e: 'say-tell' },
    { t: 'choose', pt: 'backshift', l: 1, p: '"I\'m tired," she said last night. → She said she ___ tired.', a: 'was', o: ['is', 'has been'], w: { is: 'backshift', 'has been': 'backshift' }, e: 'backshift' },
    { t: 'choose', pt: 'will-would', l: 1, p: '"I\'ll call you," he said last week. → He said he ___ call me.', a: 'would', o: ['will', 'can'], w: { will: 'will-would', can: 'will-would' }, e: 'will-would' },
    { t: 'choose', pt: 'rq-order', l: 1, p: 'She asked me where I ___.', a: 'lived', o: ['did live', 'do live'], w: { 'did live': 'rq-order', 'do live': 'rq-order' }, e: 'rq-order' },
    { t: 'choose', pt: 'commands', l: 1, p: 'The doctor told me ___ more water.', a: 'to drink', o: ['drink', 'drinking'], w: { drink: 'command', drinking: 'command' }, e: 'command' },
    { t: 'choose', pt: 'rq-if', l: 1, p: 'He asked ___ I was ready.', a: 'if', o: ['that', 'was'], w: { that: 'rq-if', was: 'rq-if' }, e: 'rq-if' },
    { t: 'fill', pt: 'say-tell', l: 1, p: 'She ___ (say / tell) us about the new rules.', a: 'told', w: { said: 'say-tell', say: 'say-tell', tell: 'say-tell' }, e: 'say-tell' },
    { t: 'fill', pt: 'backshift', l: 1, p: '"We live in Ohio." → They said they ___ in Ohio.', a: 'lived', w: { living: 'backshift', 'have lived': 'backshift' }, e: 'backshift' },
    { t: 'fill', pt: 'will-would', l: 1, p: '"I can help." → She said she ___ help.', a: 'could', w: { can: 'will-would', will: 'will-would' }, e: 'will-would' },
    { t: 'fill', pt: 'commands', l: 1, p: 'My boss told me ___ (not / be) late again.', a: ['not to be', 'to not be'], w: { "don't be": 'command', 'not be': 'command', "didn't be": 'command' }, e: 'command' },
    { t: 'fill', pt: 'rq-order', l: 1, p: 'Last year she asked me how old my son ___.', a: 'was', w: { 'is': 'backshift', 'was he': 'rq-order' }, e: 'rq-order' },
    { t: 'fill', pt: 'time-words', l: 1, p: '"I\'ll do it tomorrow." → He said he would do it the ___ day.', a: ['next', 'following'], w: { tomorrow: 'time-words', other: 'time-words' }, e: 'time-words' },
    { t: 'fill', pt: 'say-tell', l: 1, p: 'He ___ (say / tell) goodbye and left.', a: 'said', w: { told: 'say-tell' }, e: 'say-tell' },
    { t: 'build', pt: 'rq-order', l: 1, a: 'She asked me where I worked.', x: ['did'], e: 'rq-order' },
    { t: 'build', pt: 'commands', l: 1, a: 'He told us to wait outside.', x: ['said'], e: 'command' },
    { t: 'build', pt: 'say-tell', l: 1, a: 'She told me that she was pregnant.', x: ['said'], e: 'say-tell' },

    // ---------- Use
    { t: 'fill', pt: 'backshift', l: 2, p: '"I\'m working from home today." → She said she ___ from home that day.', a: 'was working', w: { 'is working': 'backshift', worked: 'backshift', 'has worked': 'backshift' }, e: 'backshift' },
    { t: 'fill', pt: 'backshift', l: 2, p: '"I\'ve lost my keys." → He said he ___ his keys.', a: 'had lost', am: 'lost', w: { 'has lost': 'backshift', 'have lost': 'backshift' }, e: 'backshift' },
    { t: 'fill', pt: 'rq-if', l: 2, p: '"Are you married?" → The officer asked ___ I ___ married.', a: ['if|was', 'whether|was'], w: { 'that|was': 'rq-if', 'if|am': 'backshift', 'was|I': 'rq-order' }, e: 'rq-if' },
    { t: 'fill', pt: 'rq-order', l: 2, p: '"Where do you work?" → He asked me where I ___.', a: 'worked', w: { 'did work': 'rq-order', 'do work': 'rq-order', 'did I work': 'rq-order' }, e: 'rq-order' },
    { t: 'fill', pt: 'commands', l: 2, p: '"Please sit down." → The nurse asked me ___ down.', a: 'to sit', w: { sit: 'command', sitting: 'command', 'please sit': 'command' }, e: 'command' },
    { t: 'fill', pt: 'will-would', l: 2, p: '"It will be ready on Monday." → They said it ___ ready on Monday.', a: 'would be', w: { 'will be': 'will-would', is: 'will-would' }, e: 'will-would' },
    { t: 'fill', pt: 'say-tell', l: 2, p: 'Did she ___ you why she was upset?', a: 'tell', w: { say: 'say-tell', told: 'pp:form' }, e: 'say-tell' },
    { t: 'fill', pt: 'time-words', l: 2, p: '"I\'ll meet you here at 5." → She said she would meet me ___ at 5.', a: 'there', w: { here: 'time-words' }, e: 'time-words' },
    { t: 'build', pt: 'rq-if', l: 2, a: 'He asked me if I needed help.', x: ['did'], e: 'rq-if' },
    { t: 'fix', pt: 'say-tell', l: 2, p: 'She said me that she was sick.', a: ['She told me that she was sick.', 'She told me she was sick.', 'She said that she was sick.', 'She said she was sick.'], e: 'say-tell' },
    { t: 'fix', pt: 'rq-order', l: 2, p: 'He asked me where did I buy it.', a: ['He asked me where I bought it.', 'He asked me where I had bought it.'], e: 'rq-order' },
    { t: 'fix', pt: 'commands', l: 2, p: "The teacher told them don't run.", a: ['The teacher told them not to run.'], e: 'command' },
    { t: 'fix', pt: 'rq-if', l: 2, p: 'She asked me do I like my job.', a: ['She asked me if I liked my job.', 'She asked me whether I liked my job.'], e: 'rq-if' },
    { t: 'tr', pt: 'backshift', l: 2, i: 'Report it. Start with *She said*.', p: '"I\'m going to quit my job."', s: 'She said', a: ['She said she was going to quit her job.', 'She said that she was going to quit her job.'], e: 'backshift' },
    { t: 'tr', pt: 'commands', l: 2, i: 'Report the request with *asked me to*.', p: '"Can you close the door?" said my neighbor.', s: 'My neighbor asked me', a: ['My neighbor asked me to close the door.'], e: 'command' },
    { t: 'tl', pt: 'say-tell', l: 2, uk: 'Він сказав мені, що запізниться.', ru: 'Он сказал мне, что опоздает.', a: ['He told me he would be late.', 'He told me that he would be late.'], e: 'say-tell' },
    { t: 'tl', pt: 'rq-order', l: 2, uk: 'Вона спитала, де я живу.', ru: 'Она спросила, где я живу.', a: ['She asked where I lived.', 'She asked me where I lived.', 'She asked where I live.', 'She asked me where I live.'], e: 'rq-order' },

    // ---------- Pro
    { t: 'fix', pt: 'will-would', l: 3, p: 'She told me she will call me back, but she never did.', a: ['She told me she would call me back, but she never did.', 'She said she would call me back, but she never did.'], e: 'will-would' },
    { t: 'fix', pt: 'rq-order', l: 3, p: 'The doctor asked me how long have I had the pain.', a: ['The doctor asked me how long I had had the pain.', 'The doctor asked me how long I have had the pain.', 'The doctor asked how long I had had the pain.'], e: 'rq-order' },
    { t: 'fix', pt: 'say-tell', l: 3, p: 'My mom said me to call her when I arrived.', a: ['My mom told me to call her when I arrived.', 'My mom asked me to call her when I arrived.', 'My mom told me to call her when I arrive.'], e: 'say-tell' },
    { t: 'fix', pt: 'time-words', l: 3, p: 'Last week she said she would finish it tomorrow.', a: ['Last week she said she would finish it the next day.', 'Last week she said she would finish it the following day.'], e: 'time-words' },
    { t: 'tr', pt: 'rq-if', l: 3, i: 'Report the question.', p: '"Do you have health insurance?" the receptionist asked me.', s: 'The receptionist asked me', a: ['The receptionist asked me if I had health insurance.', 'The receptionist asked me whether I had health insurance.'], e: 'rq-if' },
    { t: 'tr', pt: 'rq-order', l: 3, i: 'Report the question.', p: '"When did you arrive in the US?" the officer asked.', s: 'The officer asked', a: ['The officer asked when I had arrived in the US.', 'The officer asked me when I had arrived in the US.', 'The officer asked when I arrived in the US.', 'The officer asked me when I arrived in the US.'], e: 'rq-order' },
    { t: 'tr', pt: 'commands', l: 3, i: 'Report the warning with *told us not to*.', p: '"Don\'t touch the wires!" said the electrician.', s: 'The electrician told us', a: ['The electrician told us not to touch the wires.'], e: 'command' },
    { t: 'tl', pt: 'commands', l: 3, uk: 'Лікар сказав мені не їсти після восьмої.', ru: 'Врач сказал мне не есть после восьми.', a: ['The doctor told me not to eat after eight.', 'The doctor told me not to eat after 8.', 'The doctor told me not to eat after 8 p.m.', 'The doctor told me not to eat after 8 pm.', "The doctor told me not to eat after eight o'clock.", 'The doctor told me to not eat after eight.', 'The doctor said not to eat after eight.'], e: 'command' },
    { t: 'tl', pt: 'rq-if', l: 3, uk: 'Він запитав, чи я вже обідала.', ru: 'Он спросил, обедала ли я уже.', a: ['He asked if I had already had lunch.', 'He asked me if I had already had lunch.', 'He asked whether I had already had lunch.', 'He asked me whether I had already had lunch.', 'He asked if I had had lunch yet.', 'He asked me if I had had lunch yet.', 'He asked if I had eaten lunch yet.', 'He asked me if I had eaten lunch yet.', 'He asked if I had already eaten lunch.', 'He asked me if I had already eaten lunch.'], am: ['He asked if I already had lunch.', 'He asked me if I already had lunch.', 'He asked me if I already ate lunch.'], e: 'rq-if' },
    { t: 'tl', pt: 'backshift', l: 3, uk: 'Вона сказала, що втомилася і хоче додому.', ru: 'Она сказала, что устала и хочет домой.', a: ['She said she was tired and wanted to go home.', 'She said that she was tired and wanted to go home.', 'She said she was tired and she wanted to go home.', 'She said she was tired and wanted to go back home.'], e: 'backshift' },
    { t: 'tl', pt: 'will-would', l: 3, uk: 'Вони пообіцяли, що все буде готово до понеділка.', ru: 'Они пообещали, что всё будет готово к понедельнику.', a: ['They promised everything would be ready by Monday.', 'They promised that everything would be ready by Monday.', 'They promised it would all be ready by Monday.', 'They promised that it would all be ready by Monday.'], e: 'will-would' },
    { t: 'tl', pt: 'say-tell', l: 3, uk: 'Що він тобі сказав?', ru: 'Что он тебе сказал?', a: ['What did he tell you?', 'What did he say to you?'], e: 'say-tell' },
    { t: 'fill', pt: 'backshift', l: 3, p: '"I don\'t know anyone here." → She told me she ___ anyone there.', a: "didn't know", w: { "doesn't know": 'backshift', "don't know": 'backshift', "didn't knew": 'q:does-s' }, e: 'backshift' },
    { t: 'fill', pt: 'time-words', l: 3, p: '"I saw him yesterday." → She said she had seen him the day ___.', a: 'before', w: { yesterday: 'time-words', ago: 'time-words' }, e: 'time-words' },
    { t: 'fill', pt: 'rq-order', l: 3, p: 'I wonder what time the store ___ (close) on Sundays.', a: 'closes', w: { 'does close': 'rq-order', close: 'rq-order' }, e: 'rq-order' },
  ],
});
