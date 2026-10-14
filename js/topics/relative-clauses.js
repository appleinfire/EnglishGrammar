APP.addTopic({
  id: 'rel',
  title: 'who, which, that, whose, where',
  level: 'B1',
  group: 'Linking',
  icon: '🧷',
  about: 'the woman who…, the car which…, the city where…',
  rule: {
    en: `Join information about a noun with a **relative clause**:
- **who** — people: *the doctor **who** treated me*. **which** — things and animals: *the car **which** we bought*. **that** — people or things (very common in speech): *the book **that** I read*.
- **whose** — possession: *the woman **whose** son is in my class*.
- **where** — places: *the city **where** I was born*. **when** — times: *the day **when** we met*.
- If *who / which / that* is the **object**, you can drop it: *the man (who) I met, the phone (that) I bought*. Not when it is the subject: *the man **who** called*.
- **No extra pronoun**: *the book that I bought* — not *that I bought **it***.
- Extra information about someone already known → **commas** and **who / which**, never *that*: *My sister, who lives in Kyiv, is a doctor.*
- Not *what* after a noun: *everything **that** I have*, *the thing **that** worries me*.`,
    uk: `Додаємо інформацію про іменник за допомогою **підрядного означального речення**:
- **who** — люди: *the doctor **who** treated me* — «лікар, який мене лікував». **which** — речі й тварини: *the car **which** we bought*. **that** — і люди, і речі (дуже часто в розмові): *the book **that** I read*.
- **whose** — належність («чий»): *the woman **whose** son is in my class*.
- **where** — місця: *the city **where** I was born*. **when** — час: *the day **when** we met*.
- Якщо *who / which / that* — **додаток**, його можна пропустити: *the man (who) I met, the phone (that) I bought*. Не можна, коли це підмет: *the man **who** called*.
- **Без зайвого займенника**: *the book that I bought* — а не *that I bought **it***.
- Додаткова інформація про вже відому людину чи річ → **коми** і **who / which**, ніколи *that*: *My sister, who lives in Kyiv, is a doctor.*
- Не *what* після іменника: *everything **that** I have*, *the thing **that** worries me*.`,
    ru: `Добавляем информацию о существительном с помощью **определительного придаточного**:
- **who** — люди: *the doctor **who** treated me* — «врач, который меня лечил». **which** — вещи и животные: *the car **which** we bought*. **that** — и люди, и вещи (очень часто в разговоре): *the book **that** I read*.
- **whose** — принадлежность («чей»): *the woman **whose** son is in my class*.
- **where** — места: *the city **where** I was born*. **when** — время: *the day **when** we met*.
- Если *who / which / that* — **дополнение**, его можно опустить: *the man (who) I met, the phone (that) I bought*. Нельзя, когда это подлежащее: *the man **who** called*.
- **Без лишнего местоимения**: *the book that I bought* — а не *that I bought **it***.
- Дополнительная информация об уже известном человеке или вещи → **запятые** и **who / which**, никогда *that*: *My sister, who lives in Kyiv, is a doctor.*
- Не *what* после существительного: *everything **that** I have*, *the thing **that** worries me*.`,
  },
  examples: ['The doctor who treated me was very kind.', 'This is the city where I was born.', 'The woman whose son is in my class is a nurse.', 'The phone I bought last week is already broken.', 'My sister, who lives in Kyiv, is a doctor.'],
  trap: {
    uk: 'Це книжка, яку я купила вчора.',
    ru: 'Это книга, которую я купила вчера.',
    wrong: 'This is the book which I bought it yesterday.',
    right: 'This is the book (that) I bought yesterday.',
    note: {
      en: '*яку / которую* already points to the book, so English doesn\'t repeat it with *it*. And *that / which* can even be left out.',
      uk: '«Яку» вже вказує на книжку, тому англійською її не повторюють через *it*. А *that / which* можна навіть пропустити.',
      ru: '«Которую» уже указывает на книгу, поэтому по-английски её не повторяют через *it*. А *that / which* можно даже опустить.',
    },
  },
  errors: {
    'who-which': {
      en: '**who** for people, **which** for things and animals, **that** for both (in clauses without commas). Not *the man which*, not *the car who*.',
      uk: '**who** — для людей, **which** — для речей і тварин, **that** — для обох (у реченнях без ком). Не *the man which* і не *the car who*.',
      ru: '**who** — для людей, **which** — для вещей и животных, **that** — для обоих (в предложениях без запятых). Не *the man which* и не *the car who*.',
    },
    whose: {
      en: '**whose** = belonging to (*чий / чей*): *the woman **whose** son…, the company **whose** office…*. Not *who\'s son*, not *which son*.',
      uk: '**whose** = «чий»: *the woman **whose** son…, the company **whose** office…*. Не *who\'s son* і не *which son*.',
      ru: '**whose** = «чей»: *the woman **whose** son…, the company **whose** office…*. Не *who\'s son* и не *which son*.',
    },
    where: {
      en: '**where** for places (= *in which*): *the city **where** I was born, the store **where** I work*. If the place is the object, use *that / which*: *the city **that** I love*.',
      uk: '**where** — для місць (= *in which*): *the city **where** I was born, the store **where** I work*. Якщо місце — додаток, то *that / which*: *the city **that** I love*.',
      ru: '**where** — для мест (= *in which*): *the city **where** I was born, the store **where** I work*. Если место — дополнение, то *that / which*: *the city **that** I love*.',
    },
    extra: {
      en: 'Don\'t repeat the noun with a pronoun: *the book that I bought* — not *that I bought **it***; *the man who called* — not *who **he** called*.',
      uk: 'Не повторюйте іменник займенником: *the book that I bought* — а не *that I bought **it***; *the man who called* — а не *who **he** called*.',
      ru: 'Не повторяйте существительное местоимением: *the book that I bought* — а не *that I bought **it***; *the man who called* — а не *who **he** called*.',
    },
    what: {
      en: 'After a noun or *everything / all / something*, use **that** (or *which*), not *what*: *everything **that** I have, the thing **that** scares me*. *what* = "the thing that", with no noun before it.',
      uk: 'Після іменника чи *everything / all / something* — **that** (або *which*), не *what*: *everything **that** I have, the thing **that** scares me*. *what* = «те, що», без іменника перед ним.',
      ru: 'После существительного или *everything / all / something* — **that** (или *which*), не *what*: *everything **that** I have, the thing **that** scares me*. *what* = «то, что», без существительного перед ним.',
    },
    nondef: {
      en: 'Extra information about a person or thing that is already clear → **commas** + **who / which** (never *that*): *My sister, who lives in Kyiv, is a doctor.*',
      uk: 'Додаткова інформація про вже зрозумілу людину чи річ → **коми** + **who / which** (ніколи *that*): *My sister, who lives in Kyiv, is a doctor.*',
      ru: 'Дополнительная информация об уже понятном человеке или вещи → **запятые** + **who / which** (никогда *that*): *My sister, who lives in Kyiv, is a doctor.*',
    },
    omit: {
      en: 'You can leave out *who / that / which* only when it is the **object**: *the man (who) I met*. As the **subject** it must stay: *the man **who** called me*.',
      uk: 'Пропустити *who / that / which* можна лише тоді, коли це **додаток**: *the man (who) I met*. Як **підмет** воно обов\'язкове: *the man **who** called me*.',
      ru: 'Опустить *who / that / which* можно только когда это **дополнение**: *the man (who) I met*. Как **подлежащее** оно обязательно: *the man **who** called me*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'who-which', l: 1, p: 'The doctor ___ treated me was very kind.', a: 'who', o: ['which', 'what'], w: { which: 'who-which', what: 'what' }, e: 'who-which' },
    { t: 'choose', pt: 'who-which', l: 1, p: 'Is this the bus ___ goes downtown?', a: 'that', o: ['who', 'where'], w: { who: 'who-which', where: 'where' }, e: 'who-which' },
    { t: 'choose', pt: 'whose', l: 1, p: "That's the woman ___ son is in my daughter's class.", a: 'whose', o: ["who's", 'which'], w: { "who's": 'whose', which: 'whose' }, e: 'whose' },
    { t: 'choose', pt: 'where', l: 1, p: 'This is the hospital ___ I was born.', a: 'where', o: ['which', 'who'], w: { which: 'where', who: 'who-which' }, e: 'where' },
    { t: 'choose', pt: 'extra', l: 1, p: 'The phone ___ is already broken.', a: 'I bought', o: ['I bought it', 'what I bought'], w: { 'I bought it': 'extra', 'what I bought': 'what' }, e: 'extra' },
    { t: 'choose', pt: 'what', l: 1, p: 'Thank you for everything ___ you did for us.', a: 'that', o: ['what', 'who'], w: { what: 'what', who: 'who-which' }, e: 'what' },
    { t: 'fill', pt: 'who-which', l: 1, p: 'I have a friend ___ works at a bank.', a: ['who', 'that'], w: { which: 'who-which', what: 'what' }, e: 'who-which' },
    { t: 'fill', pt: 'who-which', l: 1, p: "Where's the cake ___ I made this morning?", a: ['that', 'which'], w: { who: 'who-which', what: 'what' }, e: 'who-which' },
    { t: 'fill', pt: 'where', l: 1, p: 'Do you know a store ___ I can buy a good coat?', a: 'where', w: { which: 'where', that: 'where' }, e: 'where' },
    { t: 'fill', pt: 'whose', l: 1, p: 'We have a neighbor ___ dog barks all night.', a: 'whose', w: { "who's": 'whose', which: 'whose', who: 'whose' }, e: 'whose' },
    { t: 'fill', pt: 'omit', l: 1, p: 'The man ___ called you yesterday is my boss.', a: ['who', 'that'], w: { which: 'who-which', whom: 'omit' }, e: 'omit' },
    { t: 'fill', pt: 'nondef', l: 1, p: 'My sister, ___ lives in Kyiv, is a doctor.', a: 'who', w: { that: 'nondef', which: 'who-which' }, e: 'nondef' },
    { t: 'fill', pt: 'what', l: 1, p: "That's not the thing ___ I wanted.", a: ['that', 'which'], w: { what: 'what' }, e: 'what' },
    { t: 'fill', pt: 'where', l: 1, p: 'I remember the day ___ we came to America.', a: ['when', 'that'], w: { where: 'where', which: 'where' }, e: 'where' },
    { t: 'build', pt: 'who-which', l: 1, a: 'She is the nurse who helped me.', x: ['which'], e: 'who-which' },
    { t: 'build', pt: 'where', l: 1, a: 'This is the cafe where we met.', x: ['which'], e: 'where' },
    { t: 'build', pt: 'extra', l: 1, a: 'The book you gave me is great.', x: ['it'], e: 'extra' },

    // ---------- Use
    { t: 'fill', pt: 'nondef', l: 2, p: 'Our car, ___ is ten years old, still runs perfectly.', a: 'which', w: { that: 'nondef', who: 'who-which', what: 'what' }, e: 'nondef' },
    { t: 'fill', pt: 'where', l: 2, p: 'Lviv is the city ___ I love most.', a: ['that', 'which'], w: { where: 'where' }, e: 'where', n: '*I love the city* — the city is the object here, so *that / which*, not *where*.' },
    { t: 'fill', pt: 'whose', l: 2, p: 'The company ___ office is next to ours is hiring.', a: 'whose', w: { which: 'whose', "who's": 'whose' }, e: 'whose' },
    { t: 'fill', pt: 'omit', l: 2, p: 'Is that the jacket ___ you bought online?', a: ['that', 'which', '—'], w: { who: 'who-which', what: 'what' }, e: 'who-which' },
    { t: 'fill', pt: 'who-which', l: 2, p: 'People ___ exercise regularly sleep better.', a: ['who', 'that'], w: { which: 'who-which', what: 'what' }, e: 'who-which' },
    { t: 'fill', pt: 'what', l: 2, p: '___ I need right now is a cup of coffee.', a: 'What', w: { That: 'what', Which: 'what' }, e: 'what', n: '*What* = "the thing that". Here there is no noun before it, so *what* is right.' },
    { t: 'fill', pt: 'nondef', l: 2, p: 'Dr. Lee, ___ I saw last week, says I\'m fine.', a: ['who', 'whom'], w: { that: 'nondef', which: 'who-which' }, e: 'nondef' },
    { t: 'fill', pt: 'who-which', l: 2, p: 'The dog ___ lives next door is very friendly.', a: ['that', 'which'], w: { who: 'who-which', what: 'what' }, e: 'who-which' },
    { t: 'build', pt: 'whose', l: 2, a: 'I know a girl whose mother is a pilot.', x: ['who'], e: 'whose' },
    { t: 'fix', pt: 'extra', l: 2, p: 'This is the house which we bought it last year.', a: ['This is the house which we bought last year.', 'This is the house that we bought last year.', 'This is the house we bought last year.'], e: 'extra' },
    { t: 'fix', pt: 'who-which', l: 2, p: 'The man which lives upstairs is very loud.', a: ['The man who lives upstairs is very loud.', 'The man that lives upstairs is very loud.'], e: 'who-which' },
    { t: 'fix', pt: 'what', l: 2, p: 'Everything what he said was true.', a: ['Everything that he said was true.', 'Everything he said was true.'], e: 'what' },
    { t: 'fix', pt: 'whose', l: 2, p: "I met a woman who's husband is from Odesa.", a: ['I met a woman whose husband is from Odesa.'], e: 'whose' },
    { t: 'tr', pt: 'who-which', l: 2, i: 'Join with *who*.', p: 'I have a cousin. She works in Miami.', s: 'I have a cousin', a: ['I have a cousin who works in Miami.', 'I have a cousin that works in Miami.'], e: 'who-which' },
    { t: 'tr', pt: 'where', l: 2, i: 'Join with *where*.', p: 'This is the school. My son studies there.', s: 'This is the school', a: ['This is the school where my son studies.'], e: 'where' },
    { t: 'tl', pt: 'extra', l: 2, uk: 'Це книжка, яку я купила вчора.', ru: 'Это книга, которую я купила вчера.', a: ['This is the book that I bought yesterday.', 'This is the book which I bought yesterday.', 'This is the book I bought yesterday.'], e: 'extra' },
    { t: 'tl', pt: 'who-which', l: 2, uk: 'Мені потрібен лікар, який говорить українською.', ru: 'Мне нужен врач, который говорит по-русски.', a: ['I need a doctor who speaks Ukrainian.', 'I need a doctor that speaks Ukrainian.', 'I need a doctor who speaks Russian.', 'I need a doctor that speaks Russian.'], e: 'who-which' },

    // ---------- Pro
    { t: 'fix', pt: 'nondef', l: 3, p: 'My husband, that works in IT, often travels.', a: ['My husband, who works in IT, often travels.'], e: 'nondef' },
    { t: 'fix', pt: 'where', l: 3, p: 'This is the restaurant where we went to it on our anniversary.', a: ['This is the restaurant where we went on our anniversary.', 'This is the restaurant that we went to on our anniversary.', 'This is the restaurant we went to on our anniversary.', 'This is the restaurant which we went to on our anniversary.'], e: 'extra' },
    { t: 'fix', pt: 'omit', l: 3, p: 'The woman helped me at the store was very kind.', a: ['The woman who helped me at the store was very kind.', 'The woman that helped me at the store was very kind.'], e: 'omit' },
    { t: 'fix', pt: 'what', l: 3, p: 'The only thing what I want is some sleep.', a: ['The only thing that I want is some sleep.', 'The only thing I want is some sleep.', 'All I want is some sleep.'], e: 'what' },
    { t: 'tr', pt: 'nondef', l: 3, i: 'Add the extra information with commas and *which*.', p: 'Our apartment is small. It costs $2,000 a month.', s: 'Our apartment,', a: ['Our apartment, which costs $2,000 a month, is small.', 'Our apartment, which is small, costs $2,000 a month.'], e: 'nondef' },
    { t: 'tr', pt: 'whose', l: 3, i: 'Join with *whose*.', p: 'I talked to a man. His daughter is a doctor.', s: 'I talked to a man', a: ['I talked to a man whose daughter is a doctor.'], e: 'whose' },
    { t: 'tr', pt: 'omit', l: 3, i: 'Join without *who / that* (it is the object).', p: 'The teacher was very strict. We had her last year.', s: 'The teacher', a: ['The teacher we had last year was very strict.'], e: 'omit' },
    { t: 'tl', pt: 'whose', l: 3, uk: 'Це жінка, чий син працює в лікарні.', ru: 'Это женщина, чей сын работает в больнице.', a: ['This is the woman whose son works at the hospital.', 'This is the woman whose son works in the hospital.', 'This is the woman whose son works at a hospital.', 'This is the woman whose son works in a hospital.', "That's the woman whose son works at the hospital.", 'She is the woman whose son works at the hospital.'], e: 'whose' },
    { t: 'tl', pt: 'where', l: 3, uk: 'Ми знайшли кафе, де готують борщ.', ru: 'Мы нашли кафе, где готовят борщ.', a: ['We found a cafe where they make borscht.', 'We found a café where they make borscht.', 'We found a cafe where they cook borscht.', 'We found a cafe that serves borscht.', 'We found a cafe where they serve borscht.', 'We found a café where they serve borscht.', 'We found a cafe where they make borsch.'], e: 'where' },
    { t: 'tl', pt: 'nondef', l: 3, uk: 'Моя мама, яка живе в Харкові, щодня мені дзвонить.', ru: 'Моя мама, которая живёт в Харькове, каждый день мне звонит.', a: ['My mom, who lives in Kharkiv, calls me every day.', 'My mother, who lives in Kharkiv, calls me every day.', 'My mom, who lives in Kharkiv, calls me every single day.', 'My mum, who lives in Kharkiv, calls me every day.'], e: 'nondef' },
    { t: 'tl', pt: 'what', l: 3, uk: 'Те, що ти сказала, дуже важливо.', ru: 'То, что ты сказала, очень важно.', a: ['What you said is very important.', 'What you said is really important.', 'What you said was very important.'], e: 'what' },
    { t: 'tl', pt: 'omit', l: 3, uk: 'Чоловік, який мені подзвонив, не назвав свого імені.', ru: 'Мужчина, который мне позвонил, не назвал своего имени.', a: ["The man who called me didn't say his name.", "The man who called me didn't give his name.", "The man that called me didn't say his name.", "The man that called me didn't give his name.", "The man who called me didn't tell me his name.", 'The man who called me did not give his name.'], e: 'omit' },
    { t: 'fill', pt: 'nondef', l: 3, p: 'We visited Charleston, ___ is famous for its old houses.', a: 'which', w: { that: 'nondef', where: 'where', what: 'what' }, e: 'nondef' },
    { t: 'fill', pt: 'whose', l: 3, p: "I don't know ___ phone this is.", a: 'whose', w: { "who's": 'whose', who: 'whose', which: 'whose' }, e: 'whose' },
    { t: 'fill', pt: 'omit', l: 3, p: 'Anyone ___ needs a ride can call me.', a: ['who', 'that'], w: { which: 'who-which', what: 'what' }, e: 'omit' },
  ],
});
