APP.addTopic({
  id: 'phr',
  title: 'Phrasal verbs: turn it off, pick them up',
  level: 'B1',
  group: 'Verb patterns',
  icon: '🧩',
  about: 'where it / them goes; look after, run out of',
  rule: {
    en: `A phrasal verb = verb + a small word (*up, off, out, back, on…*). The small word changes the meaning: *fill out a form, pick up the kids, call back, find out, give up*.
- **Separable** verbs: a noun can go after or in the middle — *turn off the light / turn the light off*. A **pronoun** (*it, them, her*) always goes **in the middle**: *turn **it** off, pick **them** up, call **her** back* — never *turn off it*.
- **Inseparable** verbs keep the parts together: *look **after** the kids → look after **them**; look **for** my keys → look for **them**; get **on** the bus*.
- **Three-part** verbs never separate: *run out of milk, get along with my boss, look forward to the trip*.
- Change the **verb** for the tense, not the small word: *I picked them up, she gave up, we ran out of gas*.
Everyday ones: *fill out (a form), sign up (for a class), pick up / drop off (someone), call back, find out, put on / take off (clothes), try on, turn on / off, give up (stop), look up (a word)*.`,
    uk: `Фразове дієслово = дієслово + маленьке слово (*up, off, out, back, on…*). Маленьке слово змінює значення: *fill out a form* — «заповнити анкету», *pick up the kids* — «забрати дітей», *call back* — «передзвонити», *find out* — «дізнатися», *give up* — «кинути, здатися».
- **Роздільні** дієслова: іменник може стояти після або посередині — *turn off the light / turn the light off*. **Займенник** (*it, them, her*) — завжди **посередині**: *turn **it** off, pick **them** up, call **her** back* — ніколи *turn off it*.
- **Нероздільні** дієслова не розриваються: *look **after** the kids → look after **them*** («доглядати»); *look **for** my keys → look for **them*** («шукати»); *get **on** the bus*.
- **Тричастинні** ніколи не розриваються: *run out of milk* («закінчилося молоко»), *get along with my boss*, *look forward to the trip*.
- Для часу змінюємо **дієслово**, а не маленьке слово: *I picked them up, she gave up, we ran out of gas*.
Щоденні: *fill out (a form), sign up (for a class), pick up / drop off (someone), call back, find out, put on / take off (clothes), try on, turn on / off, give up, look up (a word)*.`,
    ru: `Фразовый глагол = глагол + маленькое слово (*up, off, out, back, on…*). Маленькое слово меняет значение: *fill out a form* — «заполнить анкету», *pick up the kids* — «забрать детей», *call back* — «перезвонить», *find out* — «узнать», *give up* — «бросить, сдаться».
- **Разделяемые** глаголы: существительное может стоять после или в середине — *turn off the light / turn the light off*. **Местоимение** (*it, them, her*) — всегда **в середине**: *turn **it** off, pick **them** up, call **her** back* — никогда *turn off it*.
- **Неразделяемые** глаголы не разрываются: *look **after** the kids → look after **them*** («присматривать»); *look **for** my keys → look for **them*** («искать»); *get **on** the bus*.
- **Трёхчастные** никогда не разрываются: *run out of milk* («закончилось молоко»), *get along with my boss*, *look forward to the trip*.
- Для времени меняем **глагол**, а не маленькое слово: *I picked them up, she gave up, we ran out of gas*.
Ежедневные: *fill out (a form), sign up (for a class), pick up / drop off (someone), call back, find out, put on / take off (clothes), try on, turn on / off, give up, look up (a word)*.`,
  },
  examples: ['Can you turn it off, please?', "I'll pick the kids up at three.", 'Please fill out this form.', 'Who looks after your kids when you work?', "We've run out of milk."],
  trap: {
    uk: 'Вимкни його, будь ласка.',
    ru: 'Выключи его, пожалуйста.',
    wrong: 'Turn off it, please.',
    right: 'Turn it off, please.',
    note: {
      en: 'In Ukrainian and Russian the pronoun comes after the verb. In English, with separable phrasal verbs, *it / them* goes **between** the verb and the small word.',
      uk: 'Українською займенник стоїть після дієслова. Англійською в роздільних фразових дієсловах *it / them* стоїть **між** дієсловом і маленьким словом.',
      ru: 'По-русски местоимение стоит после глагола. По-английски в разделяемых фразовых глаголах *it / them* стоит **между** глаголом и маленьким словом.',
    },
  },
  errors: {
    pronoun: {
      en: 'A pronoun (*it, them, her, him, me*) goes **between** the verb and the small word: *turn it off, pick them up, call her back, put it on*. Never *turn off it*.',
      uk: 'Займенник (*it, them, her, him, me*) стоїть **між** дієсловом і маленьким словом: *turn it off, pick them up, call her back, put it on*. Ніколи *turn off it*.',
      ru: 'Местоимение (*it, them, her, him, me*) стоит **между** глаголом и маленьким словом: *turn it off, pick them up, call her back, put it on*. Никогда *turn off it*.',
    },
    insep: {
      en: 'These don\'t split: **look after** (take care of), **look for** (search), **get on / off** (a bus, a train), **come across**. The noun or pronoun goes after: *look after them*.',
      uk: 'Ці не розриваються: **look after** (доглядати), **look for** (шукати), **get on / off** (автобус, потяг), **come across** (натрапити). Іменник чи займенник — після: *look after them*.',
      ru: 'Эти не разрываются: **look after** (присматривать), **look for** (искать), **get on / off** (автобус, поезд), **come across** (наткнуться). Существительное или местоимение — после: *look after them*.',
    },
    particle: {
      en: 'The small word carries the meaning: *fill **out** a form, sign **up** for a class, pick **up** / drop **off** someone, call **back**, find **out**, give **up**, try **on** clothes, look **up** a word*.',
      uk: 'Маленьке слово несе значення: *fill **out** a form, sign **up** for a class, pick **up** / drop **off** someone, call **back**, find **out**, give **up**, try **on** clothes, look **up** a word*.',
      ru: 'Маленькое слово несёт значение: *fill **out** a form, sign **up** for a class, pick **up** / drop **off** someone, call **back**, find **out**, give **up**, try **on** clothes, look **up** a word*.',
    },
    three: {
      en: 'Three-part verbs stay together, with the object at the end: *run out of milk, get along with her, look forward to it, catch up with them*.',
      uk: 'Тричастинні дієслова не розриваються, додаток — у кінці: *run out of milk, get along with her, look forward to it, catch up with them*.',
      ru: 'Трёхчастные глаголы не разрываются, дополнение — в конце: *run out of milk, get along with her, look forward to it, catch up with them*.',
    },
    tense: {
      en: 'Put the tense on the **verb**; the small word stays the same: *pick up → picked up, give up → gave up, run out → ran out, take off → took off*.',
      uk: 'Час показуємо на **дієслові**; маленьке слово не змінюється: *pick up → picked up, give up → gave up, run out → ran out, take off → took off*.',
      ru: 'Время показываем на **глаголе**; маленькое слово не меняется: *pick up → picked up, give up → gave up, run out → ran out, take off → took off*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'pronoun', l: 1, p: "The TV is too loud. Can you ___, please?", a: 'turn it down', o: ['turn down it', 'turn it'], w: { 'turn down it': 'pronoun', 'turn it': 'particle' }, e: 'pronoun' },
    { t: 'choose', pt: 'particle', l: 1, p: 'Please fill ___ this form and sign it.', a: 'out', o: ['on', 'off'], w: { on: 'particle', off: 'particle' }, e: 'particle' },
    { t: 'choose', pt: 'insep', l: 1, p: 'My mom looks ___ the kids when I work.', a: 'after', o: ['for', 'up'], w: { for: 'particle', up: 'particle' }, e: 'insep' },
    { t: 'choose', pt: 'three', l: 1, p: "We've run ___ milk. Can you buy some?", a: 'out of', o: ['out', 'off'], w: { out: 'three', off: 'particle' }, e: 'three' },
    { t: 'choose', pt: 'pronoun', l: 1, p: "These are your new shoes. ___!", a: 'Try them on', o: ['Try on them', 'Try them'], w: { 'Try on them': 'pronoun', 'Try them': 'particle' }, e: 'pronoun' },
    { t: 'choose', pt: 'tense', l: 1, p: 'Yesterday my husband ___ the kids from school.', a: 'picked up', o: ['pick upped', 'picked'], w: { 'pick upped': 'tense', picked: 'particle' }, e: 'tense' },
    { t: 'choose', pt: 'particle', l: 1, p: "She's not available. Can she call you ___?", a: 'back', o: ['again', 'up'], w: { again: 'particle', up: 'particle' }, e: 'particle' },
    { t: 'fill', pt: 'pronoun', l: 1, p: "It's cold — put your jacket on. Put ___ on!", a: 'it', w: { them: 'pronoun' }, e: 'pronoun' },
    { t: 'fill', pt: 'particle', l: 1, p: 'I signed ___ for a yoga class.', a: 'up', w: { in: 'particle', on: 'particle' }, e: 'particle' },
    { t: 'fill', pt: 'insep', l: 1, p: "I'm looking ___ my glasses. Have you seen them?", a: 'for', w: { after: 'particle', at: 'particle' }, e: 'insep' },
    { t: 'fill', pt: 'particle', l: 1, p: 'How did you find ___ about the sale?', a: 'out', w: { about: 'particle', up: 'particle' }, e: 'particle' },
    { t: 'fill', pt: 'three', l: 1, p: 'I really get along ___ my coworkers.', a: 'with', w: { to: 'three', for: 'three' }, e: 'three' },
    { t: 'fill', pt: 'tense', l: 1, p: 'He ___ (give up) smoking last year.', a: 'gave up', w: { 'give up': 'tense', 'gave': 'particle', 'gived up': 'tense' }, e: 'tense' },
    { t: 'fill', pt: 'insep', l: 1, p: 'Get ___ the bus at the third stop.', a: 'off', w: { out: 'insep', down: 'insep' }, e: 'insep' },
    { t: 'build', pt: 'pronoun', l: 1, a: 'Can you turn it off?', x: ['on'], e: 'pronoun' },
    { t: 'build', pt: 'three', l: 1, a: "I'm looking forward to the trip.", x: ['for'], e: 'three' },
    { t: 'build', pt: 'insep', l: 1, a: 'Who looks after your dog?', x: ['for'], e: 'insep' },

    // ---------- Use
    { t: 'fill', pt: 'pronoun', l: 2, p: "The kids are at school. I'll pick ___ up at three.", a: 'them', w: { they: 'pronoun', it: 'pronoun' }, e: 'pronoun' },
    { t: 'fill', pt: 'particle', l: 2, p: "Can you drop me ___ at the station on your way?", a: 'off', w: { out: 'particle', down: 'particle' }, e: 'particle' },
    { t: 'fill', pt: 'particle', l: 2, p: "I don't know this word. I'll look it ___.", a: 'up', w: { for: 'particle', after: 'particle' }, e: 'particle' },
    { t: 'fill', pt: 'three', l: 2, p: "Slow down! I can't keep up ___ you.", a: 'with', w: { to: 'three', for: 'three' }, e: 'three' },
    { t: 'fill', pt: 'tense', l: 2, p: 'The plane ___ (take off) an hour late.', a: 'took off', w: { 'taked off': 'tense', 'take off': 'tense', took: 'particle' }, e: 'tense' },
    { t: 'fill', pt: 'insep', l: 2, p: 'I came ___ an old photo of my grandparents.', a: 'across', w: { over: 'insep', through: 'insep' }, e: 'insep' },
    { t: 'fill', pt: 'pronoun', l: 2, p: "I didn't understand the instructions, so I asked the nurse to go over ___ again.", a: 'them', w: { it: 'pronoun' }, e: 'insep', n: '*go over* (= check, explain again) does not split: *go over them*.' },
    { t: 'fill', pt: 'three', l: 2, p: 'We ran out ___ gas on the highway.', a: 'of', w: { off: 'three', from: 'three' }, e: 'three' },
    { t: 'build', pt: 'pronoun', l: 2, a: "I'll call her back in ten minutes.", x: ['to'], e: 'pronoun' },
    { t: 'fix', pt: 'pronoun', l: 2, p: 'I found my keys. I picked up them from the floor.', a: ['I found my keys. I picked them up from the floor.', 'I found my keys. I picked them up off the floor.'], e: 'pronoun' },
    { t: 'fix', pt: 'particle', l: 2, p: 'Please fill in this application online and send it.', a: ['Please fill out this application online and send it.', 'Please fill this application out online and send it.'], e: 'particle', n: 'American English says *fill out a form*; British English often says *fill in*.' },
    { t: 'fix', pt: 'insep', l: 2, p: 'My neighbor looks the cat after when we travel.', a: ['My neighbor looks after the cat when we travel.'], e: 'insep' },
    { t: 'fix', pt: 'three', l: 2, p: "I'm looking forward to see you.", a: ["I'm looking forward to seeing you."], e: 'three', n: 'In *look forward to*, *to* is a preposition: + *-ing*.' },
    { t: 'tr', pt: 'pronoun', l: 2, i: 'Replace *the music* with *it*.', p: 'Turn the music down, please.', s: 'Turn', a: ['Turn it down, please.', 'Turn it down please.'], e: 'pronoun' },
    { t: 'tr', pt: 'three', l: 2, i: 'Use *run out of*.', p: "There's no more coffee.", s: "We've", a: ["We've run out of coffee.", "We've run out of coffee."], e: 'three' },
    { t: 'tl', pt: 'pronoun', l: 2, uk: 'Вимкни його, будь ласка.', ru: 'Выключи его, пожалуйста.', a: ['Turn it off, please.', 'Please turn it off.', 'Switch it off, please.', 'Please switch it off.'], e: 'pronoun' },
    { t: 'tl', pt: 'particle', l: 2, uk: 'Я заберу дітей зі школи.', ru: 'Я заберу детей из школы.', a: ["I'll pick up the kids from school.", "I'll pick the kids up from school.", "I'll pick up the children from school.", "I'll pick the children up from school.", "I'll pick the kids up at school.", "I'll pick up the kids at school.", "I will pick up the kids from school."], e: 'particle' },

    // ---------- Pro
    { t: 'fix', pt: 'pronoun', l: 3, p: "These boots are too small. I'll take back them tomorrow.", a: ["These boots are too small. I'll take them back tomorrow.", "These boots are too small. I'll return them tomorrow."], e: 'pronoun' },
    { t: 'fix', pt: 'tense', l: 3, p: 'She give up her job last month to stay with the baby.', a: ['She gave up her job last month to stay with the baby.', 'She gave her job up last month to stay with the baby.'], e: 'tense' },
    { t: 'fix', pt: 'insep', l: 3, p: "I've been looking it for all morning.", a: ["I've been looking for it all morning."], e: 'insep' },
    { t: 'fix', pt: 'three', l: 3, p: "I don't get along her very well.", a: ["I don't get along with her very well.", "I don't get on with her very well."], e: 'three' },
    { t: 'tr', pt: 'pronoun', l: 3, i: 'Use *put… on* with a pronoun.', p: "It's raining. Take your raincoat and wear it.", s: "It's raining.", a: ["It's raining. Put your raincoat on.", "It's raining. Put on your raincoat.", "It's raining. Put it on."], e: 'pronoun' },
    { t: 'tr', pt: 'particle', l: 3, i: 'Use *find out*.', p: 'I learned the news from my sister.', s: 'I found', a: ['I found out the news from my sister.', 'I found out about the news from my sister.', 'I found out from my sister.'], e: 'particle' },
    { t: 'tr', pt: 'insep', l: 3, i: 'Use *look after* and a pronoun.', p: 'Can you take care of the kids tonight?', s: 'Can you', a: ['Can you look after them tonight?', 'Can you look after the kids tonight?'], e: 'insep' },
    { t: 'tl', pt: 'three', l: 3, uk: 'З нетерпінням чекаю нашої зустрічі.', ru: 'С нетерпением жду нашей встречи.', a: ["I'm looking forward to our meeting.", 'I look forward to our meeting.', "I'm looking forward to meeting you.", 'I look forward to meeting you.', "I'm really looking forward to our meeting.", "I'm looking forward to seeing you."], e: 'three' },
    { t: 'tl', pt: 'particle', l: 3, uk: 'Можна мені приміряти ці джинси?', ru: 'Можно мне примерить эти джинсы?', a: ['Can I try on these jeans?', 'Can I try these jeans on?', 'Could I try on these jeans?', 'Could I try these jeans on?', 'May I try on these jeans?', 'May I try these jeans on?', 'Can I try them on?'], e: 'particle' },
    { t: 'tl', pt: 'insep', l: 3, uk: 'Я шукаю свій телефон уже пів години.', ru: 'Я ищу свой телефон уже полчаса.', a: ["I've been looking for my phone for half an hour.", "I've been looking for my phone for thirty minutes.", "I've been looking for my phone for 30 minutes.", "I've been searching for my phone for half an hour."], e: 'insep' },
    { t: 'tl', pt: 'tense', l: 3, uk: 'Вона кинула палити три роки тому.', ru: 'Она бросила курить три года назад.', a: ['She gave up smoking three years ago.', 'She quit smoking three years ago.', 'She stopped smoking three years ago.', 'She gave up smoking 3 years ago.'], e: 'tense' },
    { t: 'tl', pt: 'pronoun', l: 3, uk: 'Лікар передзвонить вам завтра.', ru: 'Врач перезвонит вам завтра.', a: ['The doctor will call you back tomorrow.', "The doctor'll call you back tomorrow.", 'The doctor is going to call you back tomorrow.', 'The doctor will call you back tomorrow morning.'], e: 'pronoun' },
    { t: 'fill', pt: 'particle', l: 3, p: "Don't give ___! You're almost there.", a: 'up', w: { in: 'particle', out: 'particle' }, e: 'particle' },
    { t: 'fill', pt: 'pronoun', l: 3, p: 'Your coat is on the floor. Hang ___ up, please.', a: 'it', w: { them: 'pronoun' }, e: 'pronoun' },
    { t: 'fill', pt: 'three', l: 3, p: 'I need to catch up ___ my emails after vacation.', a: ['on', 'with'], w: { to: 'three', for: 'three' }, e: 'three' },
  ],
});
