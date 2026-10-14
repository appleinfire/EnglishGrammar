APP.addTopic({
  id: 'prep',
  title: 'Prepositions: in, on, at',
  level: 'A2',
  group: 'Prepositions',
  icon: '📍',
  about: 'at 5, on Monday, in May; at work, on the bus, in the car',
  rule: {
    en: `**Time**
- **at** + a clock time and short moments: *at 5 o'clock, at noon, at night, at the moment, at the weekend (BrE)*.
- **on** + days and dates: *on Monday, on June 3rd, on my birthday, on the weekend (AmE), on Monday morning*.
- **in** + longer periods: *in May, in 2022, in the summer, in the morning / afternoon / evening*.
- No preposition with *this, next, last, every, tomorrow, yesterday*: *next Friday, last week*.
**Place**
- **at** a point or a place where something happens: *at home, at work, at school, at the doctor's, at the bus stop, at 25 Main Street*.
- **in** inside or an area: *in the kitchen, in the car, in a taxi, in Texas, in the hospital*.
- **on** a surface or a line, and big vehicles: *on the table, on the wall, on the second floor, on Main Street, on the bus / train / plane*.
**Movement**: *go **to** work, come **to** the US, arrive **in** a city / **at** an airport, get **on** the bus, get **into** the car*. But *go home* (no *to*).`,
    uk: `**Час**
- **at** + точний час і короткі моменти: *at 5 o'clock, at noon, at night, at the moment, at the weekend (брит.)*.
- **on** + дні й дати: *on Monday, on June 3rd, on my birthday, on the weekend (амер.), on Monday morning*.
- **in** + довші періоди: *in May, in 2022, in the summer, in the morning / afternoon / evening*.
- Без прийменника з *this, next, last, every, tomorrow, yesterday*: *next Friday, last week*.
**Місце**
- **at** — точка або місце, де щось відбувається: *at home, at work, at school, at the doctor's, at the bus stop, at 25 Main Street*.
- **in** — всередині, на території: *in the kitchen, in the car, in a taxi, in Texas, in the hospital*.
- **on** — на поверхні, на лінії, у великому транспорті: *on the table, on the wall, on the second floor, on Main Street, on the bus / train / plane*.
**Рух**: *go **to** work, come **to** the US, arrive **in** a city / **at** an airport, get **on** the bus, get **into** the car*. Але *go home* (без *to*).`,
    ru: `**Время**
- **at** + точное время и короткие моменты: *at 5 o'clock, at noon, at night, at the moment, at the weekend (брит.)*.
- **on** + дни и даты: *on Monday, on June 3rd, on my birthday, on the weekend (амер.), on Monday morning*.
- **in** + более длинные периоды: *in May, in 2022, in the summer, in the morning / afternoon / evening*.
- Без предлога с *this, next, last, every, tomorrow, yesterday*: *next Friday, last week*.
**Место**
- **at** — точка или место, где что-то происходит: *at home, at work, at school, at the doctor's, at the bus stop, at 25 Main Street*.
- **in** — внутри, на территории: *in the kitchen, in the car, in a taxi, in Texas, in the hospital*.
- **on** — на поверхности, на линии, в большом транспорте: *on the table, on the wall, on the second floor, on Main Street, on the bus / train / plane*.
**Движение**: *go **to** work, come **to** the US, arrive **in** a city / **at** an airport, get **on** the bus, get **into** the car*. Но *go home* (без *to*).`,
  },
  examples: ["The appointment is at 3 p.m. on Friday.", 'We moved here in 2022.', "I'm at work now.", "I'll call you when I'm on the bus.", 'Our apartment is on the second floor.'],
  trap: {
    uk: 'Ми приїхали в Америку в червні.',
    ru: 'Мы приехали в Америку в июне.',
    wrong: 'We arrived to America on June.',
    right: 'We came to America in June.',
    note: {
      en: 'Ukrainian *в* and Russian *в* cover *in, at, to, on*. English chooses: *come / go **to** a place, arrive **in** a city, **in** a month, **on** a day*. *arrive to* is a common mistake.',
      uk: 'Українське «в» покриває *in, at, to, on*. Англійською треба вибрати: *come / go **to*** — рух, *arrive **in*** — місто, ***in*** — місяць, ***on*** — день. *arrive to* — часта помилка.',
      ru: 'Русское «в» покрывает *in, at, to, on*. По-английски нужно выбрать: *come / go **to*** — движение, *arrive **in*** — город, ***in*** — месяц, ***on*** — день. *arrive to* — частая ошибка.',
    },
  },
  errors: {
    'time-at': {
      en: '**at** + a clock time or a moment: *at 5, at noon, at night, at the moment, at lunchtime*.',
      uk: '**at** + час на годиннику чи момент: *at 5, at noon, at night, at the moment, at lunchtime*.',
      ru: '**at** + время на часах или момент: *at 5, at noon, at night, at the moment, at lunchtime*.',
    },
    'time-on': {
      en: '**on** + a day or a date: *on Monday, on June 3rd, on my birthday, on Friday morning, on the weekend* (American English).',
      uk: '**on** + день чи дата: *on Monday, on June 3rd, on my birthday, on Friday morning, on the weekend* (американська).',
      ru: '**on** + день или дата: *on Monday, on June 3rd, on my birthday, on Friday morning, on the weekend* (американский).',
    },
    'time-in': {
      en: '**in** + a month, a year, a season, a part of the day: *in May, in 2022, in the summer, in the morning*. Also *in ten minutes* = ten minutes from now.',
      uk: '**in** + місяць, рік, пора року, частина дня: *in May, in 2022, in the summer, in the morning*. А також *in ten minutes* = через десять хвилин.',
      ru: '**in** + месяц, год, время года, часть дня: *in May, in 2022, in the summer, in the morning*. А также *in ten minutes* = через десять минут.',
    },
    'no-prep': {
      en: 'No preposition before *this, next, last, every, tomorrow, yesterday*, and in *go home*: *next Friday, last week, every day, I\'m going home*.',
      uk: 'Без прийменника перед *this, next, last, every, tomorrow, yesterday*, а також у *go home*: *next Friday, last week, every day, I\'m going home*.',
      ru: 'Без предлога перед *this, next, last, every, tomorrow, yesterday*, а также в *go home*: *next Friday, last week, every day, I\'m going home*.',
    },
    'place-at': {
      en: '**at** a point or a place where something happens: *at home, at work, at school, at the doctor\'s, at the bus stop, at the airport, at 25 Main Street* (a full address).',
      uk: '**at** — точка чи місце, де щось відбувається: *at home, at work, at school, at the doctor\'s, at the bus stop, at the airport, at 25 Main Street* (повна адреса).',
      ru: '**at** — точка или место, где что-то происходит: *at home, at work, at school, at the doctor\'s, at the bus stop, at the airport, at 25 Main Street* (полный адрес).',
    },
    'place-in-on': {
      en: '**in** = inside, within an area (*in the car, in a taxi, in the kitchen, in Texas*). **on** = a surface, a street, a floor, a big vehicle (*on the table, on Main Street, on the second floor, on the bus*).',
      uk: '**in** = всередині, в межах (*in the car, in a taxi, in the kitchen, in Texas*). **on** = поверхня, вулиця, поверх, великий транспорт (*on the table, on Main Street, on the second floor, on the bus*).',
      ru: '**in** = внутри, в пределах (*in the car, in a taxi, in the kitchen, in Texas*). **on** = поверхность, улица, этаж, большой транспорт (*on the table, on Main Street, on the second floor, on the bus*).',
    },
    movement: {
      en: 'Movement **to** a place: *go to work, come to the US, move to Texas*. **arrive in** a city / country, **arrive at** a building / airport — never *arrive to*. *go home* has no *to*.',
      uk: 'Рух **до** місця: *go to work, come to the US, move to Texas*. **arrive in** — місто / країна, **arrive at** — будівля / аеропорт; ніколи *arrive to*. *go home* — без *to*.',
      ru: 'Движение **к** месту: *go to work, come to the US, move to Texas*. **arrive in** — город / страна, **arrive at** — здание / аэропорт; никогда *arrive to*. *go home* — без *to*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'time', l: 1, p: 'The meeting starts ___ 9 a.m.', a: 'at', o: ['in', 'on'], w: { in: 'time-at', on: 'time-at' }, e: 'time-at' },
    { t: 'choose', pt: 'time', l: 1, p: 'My birthday is ___ March.', a: 'in', o: ['on', 'at'], w: { on: 'time-in', at: 'time-in' }, e: 'time-in' },
    { t: 'choose', pt: 'time', l: 1, p: 'The store is closed ___ Sunday.', a: 'on', o: ['in', 'at'], w: { in: 'time-on', at: 'time-on' }, e: 'time-on' },
    { t: 'choose', pt: 'place', l: 1, p: "I can't talk now — I'm ___ work.", a: 'at', o: ['on', 'in'], w: { on: 'place-at', in: 'place-at' }, e: 'place-at' },
    { t: 'choose', pt: 'place', l: 1, p: 'Your keys are ___ the table.', a: 'on', o: ['in', 'at'], w: { in: 'place-in-on', at: 'place-in-on' }, e: 'place-in-on' },
    { t: 'choose', pt: 'move', l: 1, p: 'We arrived ___ Chicago late at night.', a: 'in', o: ['to', 'at'], w: { to: 'movement', at: 'movement' }, e: 'movement' },
    { t: 'choose', pt: 'no-prep', l: 1, p: "I'm going ___ now. See you tomorrow!", a: 'home', o: ['to home', 'at home'], w: { 'to home': 'no-prep', 'at home': 'movement' }, e: 'no-prep' },
    { t: 'fill', pt: 'time', l: 1, p: 'We moved to the US ___ 2022.', a: 'in', w: { on: 'time-in', at: 'time-in' }, e: 'time-in' },
    { t: 'fill', pt: 'time', l: 1, p: 'Can we meet ___ Friday morning?', a: 'on', w: { in: 'time-on', at: 'time-on' }, e: 'time-on' },
    { t: 'fill', pt: 'time', l: 1, p: "I don't like driving ___ night.", a: 'at', w: { in: 'time-at', on: 'time-at' }, e: 'time-at' },
    { t: 'fill', pt: 'place', l: 1, p: 'The kids are playing ___ the backyard.', a: 'in', w: { on: 'place-in-on', at: 'place-in-on' }, e: 'place-in-on' },
    { t: 'fill', pt: 'place', l: 1, p: 'Wait for me ___ the bus stop.', a: 'at', w: { on: 'place-at', in: 'place-at' }, e: 'place-at' },
    { t: 'fill', pt: 'vehicle', l: 1, p: "I'll call you when I'm ___ the train.", a: 'on', w: { in: 'place-in-on', at: 'place-in-on' }, e: 'place-in-on' },
    { t: 'fill', pt: 'move', l: 1, p: 'My husband goes ___ work by bus.', a: 'to', w: { on: 'movement', at: 'movement', in: 'movement' }, e: 'movement' },
    { t: 'build', pt: 'time', l: 1, a: 'The party is on Saturday at seven.', x: ['in'], e: 'time-on' },
    { t: 'build', pt: 'place', l: 1, a: 'She is at home with the kids.', x: ['in'], e: 'place-at' },
    { t: 'build', pt: 'no-prep', l: 1, a: "We're flying to Kyiv next week.", x: ['on'], e: 'no-prep' },

    // ---------- Use
    { t: 'fill', pt: 'time', l: 2, p: 'My appointment is ___ June 12th ___ 10:30.', a: 'on|at', w: { 'in|at': 'time-on', 'on|in': 'time-at', 'at|at': 'time-on' }, e: 'time-on' },
    { t: 'fill', pt: 'time', l: 2, p: 'We usually go on vacation ___ August.', a: 'in', w: { on: 'time-in', at: 'time-in' }, e: 'time-in' },
    { t: 'fill', pt: 'vehicle', l: 2, p: 'She left her umbrella ___ the taxi.', a: 'in', w: { on: 'place-in-on', at: 'place-in-on' }, e: 'place-in-on' },
    { t: 'fill', pt: 'place', l: 2, p: 'We live ___ the third floor.', a: 'on', w: { in: 'place-in-on', at: 'place-in-on' }, e: 'place-in-on' },
    { t: 'fill', pt: 'move', l: 2, p: 'What time does your flight arrive ___ the airport?', a: 'at', w: { to: 'movement', in: 'movement' }, e: 'movement' },
    { t: 'fill', pt: 'time', l: 2, p: "The doctor will see you ___ ten minutes.", a: 'in', w: { after: 'time-in', through: 'time-in', on: 'time-in' }, e: 'time-in', n: '*in ten minutes* = ten minutes from now (*через десять хвилин / через десять минут*).' },
    { t: 'fill', pt: 'place', l: 2, p: "She's not here — she's ___ the dentist's.", a: 'at', w: { in: 'place-at', on: 'place-at' }, e: 'place-at' },
    { t: 'fill', pt: 'place', l: 2, p: 'The pharmacy is ___ Main Street, next to the bank.', a: 'on', w: { in: 'place-in-on', at: 'place-in-on' }, e: 'place-in-on' },
    { t: 'build', pt: 'vehicle', l: 2, a: 'Get on the bus and get off at the third stop.', x: ['in'], e: 'place-in-on' },
    { t: 'fix', pt: 'move', l: 2, p: 'We arrived to New York in the morning.', a: ['We arrived in New York in the morning.'], e: 'movement' },
    { t: 'fix', pt: 'time', l: 2, p: 'I was born at 1992.', a: ['I was born in 1992.'], e: 'time-in' },
    { t: 'fix', pt: 'no-prep', l: 2, p: 'I saw her in last Friday.', a: ['I saw her last Friday.'], e: 'no-prep' },
    { t: 'fix', pt: 'vehicle', l: 2, p: 'I read books in the bus.', a: ['I read books on the bus.'], e: 'place-in-on' },
    { t: 'tr', pt: 'time', l: 2, i: 'Add the date and the time: *Monday, 4 p.m.*', p: 'The interview is next week.', s: 'The interview is', a: ['The interview is on Monday at 4 p.m.', 'The interview is on Monday at 4 pm.', 'The interview is at 4 p.m. on Monday.', 'The interview is at 4 pm on Monday.', 'The interview is next Monday at 4 p.m.', 'The interview is on Monday at four.', 'The interview is on Monday at 4.'], e: 'time-on' },
    { t: 'tr', pt: 'move', l: 2, i: 'Say where they moved: *Florida*.', p: 'They left New York last year.', s: 'They moved', a: ['They moved to Florida.', 'They moved to Florida last year.'], e: 'movement' },
    { t: 'tl', pt: 'time', l: 2, uk: 'Побачимося в понеділок о сьомій.', ru: 'Увидимся в понедельник в семь.', a: ['See you on Monday at seven.', 'See you on Monday at 7.', "I'll see you on Monday at seven.", "I'll see you on Monday at 7.", 'See you at seven on Monday.', 'See you Monday at seven.', 'See you Monday at 7.', "See you on Monday at seven o'clock."], e: 'time-on' },
    { t: 'tl', pt: 'place', l: 2, uk: 'Чоловік на роботі, а діти в школі.', ru: 'Муж на работе, а дети в школе.', a: ['My husband is at work, and the kids are at school.', 'My husband is at work and the kids are at school.', 'My husband is at work, and the children are at school.', 'My husband is at work, while the kids are at school.', 'My husband is at work, and the kids are in school.'], e: 'place-at' },

    // ---------- Pro
    { t: 'fix', pt: 'time', l: 3, p: 'The store opens in 8 a.m. in Saturdays.', a: ['The store opens at 8 a.m. on Saturdays.', 'The store opens at 8 am on Saturdays.'], e: 'time-at' },
    { t: 'fix', pt: 'place', l: 3, p: 'My parents live on Kyiv in a small apartment.', a: ['My parents live in Kyiv in a small apartment.', 'My parents live in a small apartment in Kyiv.'], e: 'place-in-on' },
    { t: 'fix', pt: 'move', l: 3, p: 'When I came to home, the kids were sleeping.', a: ['When I came home, the kids were sleeping.', 'When I got home, the kids were sleeping.'], e: 'no-prep' },
    { t: 'fix', pt: 'place', l: 3, p: 'I waited for you in the entrance for twenty minutes.', a: ['I waited for you at the entrance for twenty minutes.', 'I waited for you at the entrance for 20 minutes.'], e: 'place-at' },
    { t: 'tr', pt: 'place', l: 3, i: 'Give the full address with *at*: *350 Oak Street*.', p: 'Our office is on Oak Street.', s: 'Our office is', a: ['Our office is at 350 Oak Street.'], e: 'place-at' },
    { t: 'tr', pt: 'vehicle', l: 3, i: 'Say where you are: *the plane*.', p: "I'm flying to Denver right now.", s: "I'm", a: ["I'm on the plane.", "I'm on the plane right now.", "I'm on the plane to Denver.", "I'm on a plane.", "I'm on the plane to Denver right now."], e: 'place-in-on' },
    { t: 'tr', pt: 'no-prep', l: 3, i: 'Use *next* — no preposition.', p: 'Our vacation starts on the Saturday after this one.', s: 'Our vacation starts', a: ['Our vacation starts next Saturday.'], e: 'no-prep' },
    { t: 'tl', pt: 'move', l: 3, uk: 'Ми приїхали в Америку в червні.', ru: 'Мы приехали в Америку в июне.', a: ['We came to America in June.', 'We arrived in America in June.', 'We came to the US in June.', 'We arrived in the US in June.', 'We came to the United States in June.', 'We arrived in the United States in June.', 'We moved to America in June.', 'We moved to the US in June.'], e: 'movement' },
    { t: 'tl', pt: 'vehicle', l: 3, uk: 'Я забула телефон у машині.', ru: 'Я забыла телефон в машине.', a: ['I left my phone in the car.', 'I forgot my phone in the car.', 'I left the phone in the car.', 'I forgot the phone in the car.'], e: 'place-in-on' },
    { t: 'tl', pt: 'time', l: 3, uk: 'Вранці я п\'ю каву, а ввечері — чай.', ru: 'Утром я пью кофе, а вечером — чай.', a: ['I drink coffee in the morning and tea in the evening.', 'In the morning I drink coffee, and in the evening I drink tea.', 'I drink coffee in the morning, and tea in the evening.', 'In the morning I drink coffee, and in the evening tea.', 'In the morning I have coffee, and in the evening I have tea.', 'I have coffee in the morning and tea in the evening.'], e: 'time-in' },
    { t: 'tl', pt: 'place', l: 3, uk: 'Ми живемо на другому поверсі.', ru: 'Мы живём на втором этаже.', a: ['We live on the second floor.'], e: 'place-in-on' },
    { t: 'tl', pt: 'no-prep', l: 3, uk: 'Минулого тижня ми були в лікаря.', ru: 'На прошлой неделе мы были у врача.', a: ['Last week we were at the doctor\'s.', "We were at the doctor's last week.", 'Last week we went to the doctor.', 'We went to the doctor last week.', "Last week we were at the doctor's office.", "We were at the doctor's office last week.", 'Last week we saw the doctor.', 'We saw the doctor last week.'], e: 'no-prep' },
    { t: 'fill', pt: 'time', l: 3, p: "What are you doing ___ the weekend?", a: ['on', 'at', 'over'], w: { in: 'time-on' }, e: 'time-on', n: 'American English: *on the weekend*. British English: *at the weekend*.' },
    { t: 'fill', pt: 'move', l: 3, p: 'Get ___ the car — we\'re late!', a: ['in', 'into'], w: { on: 'place-in-on', to: 'movement' }, e: 'place-in-on' },
    { t: 'fill', pt: 'place', l: 3, p: 'There is a picture of my parents ___ the wall.', a: 'on', w: { in: 'place-in-on', at: 'place-in-on' }, e: 'place-in-on' },
  ],
});
