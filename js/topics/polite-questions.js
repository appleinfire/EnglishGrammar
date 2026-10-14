APP.addTopic({
  id: 'iq',
  title: 'Polite and indirect questions',
  level: 'B1',
  group: 'Questions & word order',
  icon: '🙏',
  about: 'Could you tell me where…? Would you mind…? isn\'t it?',
  rule: {
    en: `Polite English often hides the question inside another sentence: *Could you tell me… / Do you know… / I'd like to know… / I was wondering…*
- After these openings, use **statement word order**, and **no do / does / did**:
  *Where is the station?* → *Could you tell me where the station **is**?*
  *What time does it start?* → *Do you know what time it **starts**?*
- A yes/no question becomes **if** or **whether**: *Is it open?* → *Do you know **if** it's open?*
- Requests: *Could you / Would you* + verb: *Could you **help** me?* *I was wondering if you could help me.*
- *Would you mind* + **-ing**: *Would you mind **waiting**?* *Do you mind **if I** sit here?*
- Question tags: positive → negative tag, negative → positive tag, with the same helping verb: *It's cold, **isn't it**? You don't eat meat, **do you**?* Special: *I'm late, **aren't I**?*`,
    uk: `Ввічлива англійська часто «ховає» питання в інше речення: *Could you tell me… / Do you know… / I'd like to know… / I was wondering…*
- Після таких початків — **порядок слів як у ствердженні** і **без do / does / did**:
  *Where is the station?* → *Could you tell me where the station **is**?*
  *What time does it start?* → *Do you know what time it **starts**?*
- Питання «так/ні» перетворюється на **if** або **whether** («чи»): *Is it open?* → *Do you know **if** it's open?*
- Прохання: *Could you / Would you* + дієслово: *Could you **help** me?* *I was wondering if you could help me.*
- *Would you mind* + **-ing**: *Would you mind **waiting**?* — «Вам не важко зачекати?» *Do you mind **if I** sit here?*
- Розділові питання: стверджувальне → заперечний «хвостик», заперечне → стверджувальний, із тим самим допоміжним дієсловом: *It's cold, **isn't it**? You don't eat meat, **do you**?* Особливий випадок: *I'm late, **aren't I**?*`,
    ru: `Вежливый английский часто «прячет» вопрос в другое предложение: *Could you tell me… / Do you know… / I'd like to know… / I was wondering…*
- После таких начал — **порядок слов как в утверждении** и **без do / does / did**:
  *Where is the station?* → *Could you tell me where the station **is**?*
  *What time does it start?* → *Do you know what time it **starts**?*
- Вопрос «да/нет» превращается в **if** или **whether** («ли»): *Is it open?* → *Do you know **if** it's open?*
- Просьбы: *Could you / Would you* + глагол: *Could you **help** me?* *I was wondering if you could help me.*
- *Would you mind* + **-ing**: *Would you mind **waiting**?* — «Вас не затруднит подождать?» *Do you mind **if I** sit here?*
- Разделительные вопросы: утвердительное → отрицательный «хвостик», отрицательное → утвердительный, с тем же вспомогательным глаголом: *It's cold, **isn't it**? You don't eat meat, **do you**?* Особый случай: *I'm late, **aren't I**?*`,
  },
  examples: ['Could you tell me where the nearest pharmacy is?', 'Do you know what time the store closes?', 'Do you know if the pool is open today?', 'Would you mind waiting a moment?', "It's cold today, isn't it?"],
  trap: {
    uk: 'Ви не підкажете, де зупинка автобуса?',
    ru: 'Не подскажете, где остановка автобуса?',
    wrong: 'Could you tell me where is the bus stop?',
    right: 'Could you tell me where the bus stop is?',
    note: {
      en: 'Ukrainian and Russian keep the same word order in both questions. In English, the hidden question takes statement order: *where the bus stop is*.',
      uk: 'Українською порядок слів однаковий в обох питаннях. Англійською «сховане» питання має порядок ствердження: *where the bus stop is*.',
      ru: 'По-русски порядок слов одинаков в обоих вопросах. По-английски «спрятанный» вопрос получает порядок утверждения: *where the bus stop is*.',
    },
  },
  errors: {
    order: {
      en: 'After *Could you tell me / Do you know / I wonder*, use **statement order** — subject, then verb: *where the station **is***, not *where is the station*.',
      uk: 'Після *Could you tell me / Do you know / I wonder* — **порядок ствердження**: спершу підмет, потім дієслово: *where the station **is***, а не *where is the station*.',
      ru: 'После *Could you tell me / Do you know / I wonder* — **порядок утверждения**: сначала подлежащее, потом глагол: *where the station **is***, а не *where is the station*.',
    },
    'no-do': {
      en: 'No **do / does / did** in the hidden question: *Do you know what time it **starts**?* *Can you tell me how much it **costs**?*',
      uk: 'Без **do / does / did** у «схованому» питанні: *Do you know what time it **starts**?* *Can you tell me how much it **costs**?*',
      ru: 'Без **do / does / did** в «спрятанном» вопросе: *Do you know what time it **starts**?* *Can you tell me how much it **costs**?*',
    },
    if: {
      en: 'A yes/no question inside another sentence starts with **if** or **whether**: *Do you know **if** the store is open?*',
      uk: 'Питання «так/ні» всередині іншого речення починається з **if** або **whether** («чи»): *Do you know **if** the store is open?*',
      ru: 'Вопрос «да/нет» внутри другого предложения начинается с **if** или **whether** («ли»): *Do you know **if** the store is open?*',
    },
    mind: {
      en: '**Would you mind + -ing**: *Would you mind closing the door?* **Do you mind if I + present**: *Do you mind if I open the window?* Not *mind to close*.',
      uk: '**Would you mind + -ing**: *Would you mind closing the door?* **Do you mind if I + теперішній час**: *Do you mind if I open the window?* Не *mind to close*.',
      ru: '**Would you mind + -ing**: *Would you mind closing the door?* **Do you mind if I + настоящее время**: *Do you mind if I open the window?* Не *mind to close*.',
    },
    'polite-form': {
      en: '*Could you / Would you / Can you* + **verb without to**: *Could you help me?* *I was wondering if you **could** help me* (past form *could*, no *to*).',
      uk: '*Could you / Would you / Can you* + **дієслово без to**: *Could you help me?* *I was wondering if you **could** help me* (форма *could*, без *to*).',
      ru: '*Could you / Would you / Can you* + **глагол без to**: *Could you help me?* *I was wondering if you **could** help me* (форма *could*, без *to*).',
    },
    tags: {
      en: 'Positive sentence → **negative tag**; negative sentence → **positive tag**. Use the sentence\'s helping verb (*is, does, did, have, can*): *She works here, doesn\'t she? She can\'t drive, can she?* *I\'m… → aren\'t I?*',
      uk: 'Стверджувальне речення → **заперечний «хвостик»**; заперечне → **стверджувальний**. Беремо допоміжне дієслово речення (*is, does, did, have, can*): *She works here, doesn\'t she? She can\'t drive, can she?* *I\'m… → aren\'t I?*',
      ru: 'Утвердительное предложение → **отрицательный «хвостик»**; отрицательное → **утвердительный**. Берём вспомогательный глагол предложения (*is, does, did, have, can*): *She works here, doesn\'t she? She can\'t drive, can she?* *I\'m… → aren\'t I?*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'order', l: 1, p: 'Could you tell me where ___?', a: 'the restroom is', o: ['is the restroom'], w: { 'is the restroom': 'order' }, e: 'order' },
    { t: 'choose', pt: 'no-do', l: 1, p: 'Do you know what time ___?', a: 'the bank opens', o: ['does the bank open', 'the bank does open'], w: { 'does the bank open': 'no-do', 'the bank does open': 'no-do' }, e: 'no-do' },
    { t: 'choose', pt: 'if', l: 1, p: 'Can you tell me ___ the store is open on Sundays?', a: 'if', o: ['is', 'does'], w: { is: 'if', does: 'if' }, e: 'if' },
    { t: 'choose', pt: 'mind', l: 1, p: 'Would you mind ___ the window?', a: 'closing', o: ['to close', 'close'], w: { 'to close': 'mind', close: 'mind' }, e: 'mind' },
    { t: 'choose', pt: 'polite', l: 1, p: 'Could you ___ me with this form?', a: 'help', o: ['to help', 'helping'], w: { 'to help': 'polite-form', helping: 'polite-form' }, e: 'polite-form' },
    { t: 'choose', pt: 'tags', l: 1, p: "It's really hot today, ___?", a: "isn't it", o: ['is it', "doesn't it"], w: { 'is it': 'tags', "doesn't it": 'tags' }, e: 'tags' },
    { t: 'fill', pt: 'tags', l: 1, p: "You don't eat meat, ___ you?", a: 'do', w: { "don't": 'tags', "doesn't": 'tags', are: 'tags' }, e: 'tags' },
    { t: 'fill', pt: 'order', l: 1, p: 'Do you know where Anna ___ (live)?', a: 'lives', w: { 'does live': 'no-do', 'does she live': 'no-do', live: 'no-do' }, e: 'no-do' },
    { t: 'fill', pt: 'if', l: 1, p: "I'd like to know ___ there is parking near the clinic.", a: ['if', 'whether'], w: { is: 'if', that: 'if' }, e: 'if' },
    { t: 'fill', pt: 'mind', l: 1, p: 'Do you mind if I ___ (open) the window?', a: 'open', w: { opening: 'mind', 'to open': 'mind', 'will open': 'mind' }, e: 'mind' },
    { t: 'fill', pt: 'polite', l: 1, p: 'I was wondering ___ you could help me.', a: ['if', 'whether'], w: { that: 'if', can: 'if' }, e: 'if' },
    { t: 'fill', pt: 'tags', l: 1, p: 'She works at the hospital, ___ she?', a: "doesn't", w: { "isn't": 'tags', does: 'tags', "don't": 'tags' }, e: 'tags' },
    { t: 'fill', pt: 'no-do', l: 1, p: 'Can you tell me how much this ___ (cost)?', a: 'costs', w: { 'does cost': 'no-do', 'is cost': 'no-do' }, e: 'no-do' },
    { t: 'fill', pt: 'order', l: 1, p: 'Excuse me, do you know what time it ___?', a: 'is', w: { 'is it': 'order', does: 'no-do' }, e: 'order' },
    { t: 'build', pt: 'order', l: 1, a: 'Could you tell me where the post office is?', x: ['does'], e: 'order' },
    { t: 'build', pt: 'mind', l: 1, a: 'Would you mind waiting a moment?', x: ['to'], e: 'mind' },
    { t: 'build', pt: 'if', l: 1, a: 'Do you know if she is coming?', x: ['does'], e: 'if' },

    // ---------- Use
    { t: 'fill', pt: 'no-do', l: 2, p: 'Do you remember what time the meeting ___ (start)?', a: ['starts', 'started', 'is starting'], w: { 'does start': 'no-do', 'did start': 'no-do', 'does it start': 'no-do' }, e: 'no-do' },
    { t: 'fill', pt: 'if', l: 2, p: 'Could you check ___ my prescription is ready?', a: ['if', 'whether'], w: { is: 'if', that: 'if' }, e: 'if' },
    { t: 'fill', pt: 'mind', l: 2, p: 'Would you ___ helping me carry these boxes?', a: 'mind', w: { like: 'mind', please: 'mind' }, e: 'mind' },
    { t: 'fill', pt: 'tags', l: 2, p: "You've been to Chicago, ___?", a: "haven't you", w: { "didn't you": 'tags', "don't you": 'tags', 'have you': 'tags' }, e: 'tags' },
    { t: 'fill', pt: 'tags', l: 2, p: "They didn't call back, ___?", a: 'did they', w: { "didn't they": 'tags', 'do they': 'tags' }, e: 'tags' },
    { t: 'fill', pt: 'no-do', l: 2, p: "I don't know where he ___ (put) my keys.", a: ['put', 'has put'], w: { 'did put': 'no-do', 'did he put': 'no-do' }, e: 'no-do' },
    { t: 'fill', pt: 'polite', l: 2, p: 'Could you ___ (send) me the address, please?', a: 'send', w: { 'to send': 'polite-form', sending: 'polite-form', sent: 'polite-form' }, e: 'polite-form' },
    { t: 'fill', pt: 'mind', l: 2, p: 'Do you mind ___ I sit here?', a: 'if', w: { that: 'mind', when: 'mind' }, e: 'mind' },
    { t: 'build', pt: 'polite', l: 2, a: 'I was wondering if you could help me.', x: ['that'], e: 'polite-form' },
    { t: 'fix', pt: 'order', l: 2, p: 'Could you tell me where is the bus stop?', a: ['Could you tell me where the bus stop is?'], e: 'order' },
    { t: 'fix', pt: 'no-do', l: 2, p: 'Do you know what time does the movie start?', a: ['Do you know what time the movie starts?'], e: 'no-do' },
    { t: 'fix', pt: 'mind', l: 2, p: 'Would you mind to wait outside?', a: ['Would you mind waiting outside?'], e: 'mind' },
    { t: 'fix', pt: 'if', l: 2, p: 'Can you tell me is the doctor available today?', a: ['Can you tell me if the doctor is available today?', 'Can you tell me whether the doctor is available today?'], e: 'if' },
    { t: 'tr', pt: 'order', l: 2, i: 'Start with *Could you tell me…*', p: 'Where is the nearest gas station?', s: 'Could you tell me', a: ['Could you tell me where the nearest gas station is?'], e: 'order' },
    { t: 'tr', pt: 'if', l: 2, i: 'Start with *Do you know…*', p: 'Is the pool open today?', s: 'Do you know', a: ['Do you know if the pool is open today?', 'Do you know whether the pool is open today?'], e: 'if' },
    { t: 'tl', pt: 'polite', l: 2, uk: 'Чи не могли б ви говорити трохи повільніше?', ru: 'Не могли бы вы говорить немного медленнее?', a: ['Could you speak a little more slowly?', 'Could you speak a bit more slowly?', 'Could you speak a little slower?', 'Could you speak a bit slower?', 'Could you speak more slowly?', 'Could you speak slower?', 'Could you please speak a little more slowly?', 'Could you please speak a little slower?', 'Could you please speak more slowly?', 'Could you please speak slower?', 'Could you talk a little slower?', 'Would you mind speaking a little more slowly?', 'Would you mind speaking a little slower?', 'Would you mind speaking more slowly?'], e: 'polite-form' },
    { t: 'tl', pt: 'tags', l: 2, uk: 'Сьогодні холодно, правда?', ru: 'Сегодня холодно, правда?', a: ["It's cold today, isn't it?"], e: 'tags' },

    // ---------- Pro
    { t: 'fix', pt: 'no-do', l: 3, p: "I'd like to know how much does the repair cost.", a: ["I'd like to know how much the repair costs.", "I'd like to know how much the repair will cost."], e: 'no-do' },
    { t: 'fix', pt: 'tags', l: 3, p: "She can't drive, can't she?", a: ["She can't drive, can she?"], e: 'tags' },
    { t: 'fix', pt: 'polite', l: 3, p: 'I was wondering if you can to help me with my resume.', a: ['I was wondering if you could help me with my resume.', 'I was wondering if you can help me with my resume.'], e: 'polite-form' },
    { t: 'fix', pt: 'order', l: 3, p: 'Do you know where are my glasses?', a: ['Do you know where my glasses are?'], e: 'order' },
    { t: 'tr', pt: 'no-do', l: 3, i: 'Start with *Can you tell me…*', p: 'How much does this jacket cost?', s: 'Can you tell me', a: ['Can you tell me how much this jacket costs?', 'Can you tell me how much this jacket is?'], e: 'no-do' },
    { t: 'tr', pt: 'mind', l: 3, i: 'Make it polite with *Would you mind…*', p: 'Turn the music down.', s: 'Would you mind', a: ['Would you mind turning the music down?', 'Would you mind turning down the music?', 'Would you mind turning the music down, please?'], e: 'mind' },
    { t: 'tr', pt: 'polite', l: 3, i: 'Make it polite with *I was wondering if…*', p: 'Can you give me a ride to the airport?', s: 'I was wondering if', a: ['I was wondering if you could give me a ride to the airport.', 'I was wondering if you could drive me to the airport.', 'I was wondering if you could take me to the airport.'], e: 'polite-form' },
    { t: 'tl', pt: 'order', l: 3, uk: 'Ви не підкажете, де тут найближча аптека?', ru: 'Не подскажете, где здесь ближайшая аптека?', a: ['Could you tell me where the nearest pharmacy is?', 'Can you tell me where the nearest pharmacy is?', 'Do you know where the nearest pharmacy is?', 'Could you tell me where the closest pharmacy is?', 'Can you tell me where the closest pharmacy is?', 'Do you know where the closest pharmacy is?', 'Excuse me, could you tell me where the nearest pharmacy is?', 'Excuse me, do you know where the nearest pharmacy is?', 'Could you tell me where the nearest drugstore is?', 'Do you know where the nearest drugstore is?', 'Can you tell me where the nearest drugstore is?', 'Could you tell me where the nearest pharmacy is around here?', 'Do you know where the nearest pharmacy is around here?'], e: 'order' },
    { t: 'tl', pt: 'if', l: 3, uk: 'Я не знаю, чи він прийде.', ru: 'Я не знаю, придёт ли он.', a: ["I don't know if he will come.", "I don't know if he's coming.", "I don't know whether he will come.", "I don't know whether he's coming.", "I don't know if he'll come.", "I don't know whether he'll come."], e: 'if' },
    { t: 'tl', pt: 'no-do', l: 3, uk: 'Ти знаєш, о котрій зачиняється магазин?', ru: 'Ты знаешь, во сколько закрывается магазин?', a: ['Do you know what time the store closes?', 'Do you know when the store closes?', 'Do you know what time the shop closes?', 'Do you know when the shop closes?'], e: 'no-do' },
    { t: 'tl', pt: 'mind', l: 3, uk: 'Ви не проти, якщо я тут сяду?', ru: 'Вы не против, если я здесь сяду?', a: ['Do you mind if I sit here?', 'Would you mind if I sat here?', 'Would you mind if I sit here?', 'Do you mind if I take this seat?', 'Do you mind if I sit down here?'], e: 'mind' },
    { t: 'tl', pt: 'tags', l: 3, uk: 'Ти ж не забула про зустріч, правда?', ru: 'Ты ведь не забыла про встречу, правда?', a: ["You didn't forget about the meeting, did you?", "You haven't forgotten about the meeting, have you?", "You didn't forget the meeting, did you?", "You haven't forgotten the meeting, have you?"], e: 'tags' },
    { t: 'fill', pt: 'tags', l: 3, p: "I'm late again, ___?", a: "aren't I", w: { 'am not I': 'tags', "amn't I": 'tags', "isn't I": 'tags', "am I": 'tags' }, e: 'tags', n: "*I am* is special: the tag is *aren't I?*" },
    { t: 'fill', pt: 'no-do', l: 3, p: 'Nobody knows why she ___ (quit) her job.', a: ['quit', 'has quit', 'quitted'], w: { 'did quit': 'no-do', 'did she quit': 'no-do' }, e: 'no-do' },
    { t: 'fill', pt: 'if', l: 3, p: 'The nurse asked ___ I was allergic to anything.', a: ['if', 'whether'], w: { that: 'if', was: 'if' }, e: 'if' },
  ],
});
