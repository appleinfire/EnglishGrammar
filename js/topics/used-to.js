APP.addTopic({
  id: 'used',
  title: "used to, would, be used to",
  level: 'B1',
  group: 'Tenses',
  icon: '🕰',
  about: 'I used to live… / I\'m used to living…',
  rule: {
    en: `- **used to + verb** — a past habit or state that is **not true now**: *I used to live in Kharkiv. We used to have a dog.* Negative and question: **didn't use to, Did you use to…?** (no *-d*).
- **would + verb** — repeated actions in the past (a story, a memory), **not** states: *Every summer we would go to the sea.* But *I used to have a dog* (not *would have*).
- *used to* is only past. For now say **usually** + Present Simple: *I usually get up at 7.*
- **be used to + -ing / noun** — accustomed to it, it feels normal: *I'm used to driving on the right. She isn't used to the heat.*
- **get used to + -ing / noun** — become accustomed (a process): *I'm getting used to the weather. You'll get used to it.*
The difference: *I used to get up early* (I did, but not now) — *I'm used to getting up early* (it's normal for me).`,
    uk: `- **used to + дієслово** — звичка чи стан у минулому, яких **зараз немає**: *I used to live in Kharkiv* — «Раніше я жила в Харкові». *We used to have a dog.* Заперечення й питання: **didn't use to, Did you use to…?** (без *-d*).
- **would + дієслово** — дії, що повторювалися в минулому (розповідь, спогад), **не** стани: *Every summer we would go to the sea.* Але *I used to have a dog* (не *would have*).
- *used to* — лише про минуле. Про теперішнє: **usually** + Present Simple: *I usually get up at 7.*
- **be used to + -ing / іменник** — звикла, це для мене нормально: *I'm used to driving on the right. She isn't used to the heat.*
- **get used to + -ing / іменник** — звикати (процес): *I'm getting used to the weather. You'll get used to it.*
Різниця: *I used to get up early* (раніше вставала, тепер ні) — *I'm used to getting up early* (мені звично рано вставати).`,
    ru: `- **used to + глагол** — привычка или состояние в прошлом, которых **сейчас нет**: *I used to live in Kharkiv* — «Раньше я жила в Харькове». *We used to have a dog.* Отрицание и вопрос: **didn't use to, Did you use to…?** (без *-d*).
- **would + глагол** — повторявшиеся действия в прошлом (рассказ, воспоминание), **не** состояния: *Every summer we would go to the sea.* Но *I used to have a dog* (не *would have*).
- *used to* — только о прошлом. О настоящем: **usually** + Present Simple: *I usually get up at 7.*
- **be used to + -ing / существительное** — привыкла, мне это нормально: *I'm used to driving on the right. She isn't used to the heat.*
- **get used to + -ing / существительное** — привыкать (процесс): *I'm getting used to the weather. You'll get used to it.*
Разница: *I used to get up early* (раньше вставала, теперь нет) — *I'm used to getting up early* (мне привычно рано вставать).`,
  },
  examples: ['I used to live in Kharkiv.', 'Every summer we would go to the sea.', "I'm used to driving on the right now.", "I'm getting used to the weather here.", "Did you use to play the piano?"],
  trap: {
    uk: 'Я вже звикла до спеки.',
    ru: 'Я уже привыкла к жаре.',
    wrong: 'I already used to the heat.',
    right: "I'm already used to the heat.",
    note: {
      en: '"звикла / привыкла" (accustomed) is **be used to**, with *am / is / are*. *I used to…* without *be* means "I did it in the past, not now".',
      uk: '«Звикла» — це **be used to**, з *am / is / are*. *I used to…* без *be* означає «раніше робила, тепер ні».',
      ru: '«Привыкла» — это **be used to**, с *am / is / are*. *I used to…* без *be* значит «раньше делала, теперь нет».',
    },
  },
  errors: {
    'used-form': {
      en: '**used to + verb** (*I used to live*). In negatives and questions: **didn\'t use to**, **Did you use to…?** — no *-d* after *did*.',
      uk: '**used to + дієслово** (*I used to live*). У запереченнях і питаннях: **didn\'t use to**, **Did you use to…?** — після *did* без *-d*.',
      ru: '**used to + глагол** (*I used to live*). В отрицаниях и вопросах: **didn\'t use to**, **Did you use to…?** — после *did* без *-d*.',
    },
    'used-present': {
      en: '*used to* is only about the **past**. A habit **now** → **usually** + Present Simple: *I usually get up at 7.* (Not *I use to get up*.)',
      uk: '*used to* — лише про **минуле**. Звичка **зараз** → **usually** + Present Simple: *I usually get up at 7.* (Не *I use to get up*.)',
      ru: '*used to* — только о **прошлом**. Привычка **сейчас** → **usually** + Present Simple: *I usually get up at 7.* (Не *I use to get up*.)',
    },
    'would-state': {
      en: '**would** is for repeated **actions** in the past (*we would go, she would sing*), not for states — *have, live, be, like, know* take **used to**: *We used to have a dog.*',
      uk: '**would** — для повторюваних **дій** у минулому (*we would go, she would sing*), а не для станів: *have, live, be, like, know* — з **used to**: *We used to have a dog.*',
      ru: '**would** — для повторявшихся **действий** в прошлом (*we would go, she would sing*), а не для состояний: *have, live, be, like, know* — с **used to**: *We used to have a dog.*',
    },
    'be-used': {
      en: 'Accustomed = **be used to + -ing / noun**: *I\'m used to driving on the right. I\'m not used to the cold.* Here *to* is a preposition, so *-ing*, not the base verb.',
      uk: 'Звикла = **be used to + -ing / іменник**: *I\'m used to driving on the right. I\'m not used to the cold.* Тут *to* — прийменник, тому *-ing*, а не початкова форма.',
      ru: 'Привыкла = **be used to + -ing / существительное**: *I\'m used to driving on the right. I\'m not used to the cold.* Здесь *to* — предлог, поэтому *-ing*, а не начальная форма.',
    },
    'get-used': {
      en: 'Becoming accustomed (a process) = **get used to + -ing / noun**: *I\'m getting used to it. You\'ll get used to working nights.*',
      uk: 'Звикати (процес) = **get used to + -ing / іменник**: *I\'m getting used to it. You\'ll get used to working nights.*',
      ru: 'Привыкать (процесс) = **get used to + -ing / существительное**: *I\'m getting used to it. You\'ll get used to working nights.*',
    },
    mix: {
      en: '*I **used to** get up early* = I did, but not now. *I\'m **used to** getting up early* = it\'s normal for me. Check: is it about the past (no *be*) or about being accustomed (*be* + *-ing*)?',
      uk: '*I **used to** get up early* = раніше вставала, тепер ні. *I\'m **used to** getting up early* = мені це звично. Перевірте: це про минуле (без *be*) чи про звичку (*be* + *-ing*)?',
      ru: '*I **used to** get up early* = раньше вставала, теперь нет. *I\'m **used to** getting up early* = мне это привычно. Проверьте: это о прошлом (без *be*) или о привычке (*be* + *-ing*)?',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'used', l: 1, p: 'I ___ live in Kharkiv before we moved.', a: 'used to', o: ['use to', 'was used to'], w: { 'use to': 'used-form', 'was used to': 'mix' }, e: 'used-form' },
    { t: 'choose', pt: 'used', l: 1, p: "We didn't ___ have a car in Ukraine.", a: 'use to', o: ['used to', 'using to'], w: { 'used to': 'used-form', 'using to': 'used-form' }, e: 'used-form' },
    { t: 'choose', pt: 'be-used', l: 1, p: "I'm used to ___ on the right now.", a: 'driving', o: ['drive', 'drove'], w: { drive: 'be-used', drove: 'be-used' }, e: 'be-used' },
    { t: 'choose', pt: 'present', l: 1, p: 'I ___ get up at seven on weekdays.', a: 'usually', o: ['use to', 'used to'], w: { 'use to': 'used-present', 'used to': 'used-present' }, e: 'used-present' },
    { t: 'choose', pt: 'would', l: 1, p: 'When I was little, we ___ have a cat.', a: 'used to', o: ['would'], w: { would: 'would-state' }, e: 'would-state' },
    { t: 'choose', pt: 'get-used', l: 1, p: "Don't worry, you'll ___ used to it.", a: 'get', o: ['be', 'use'], w: { be: 'get-used', use: 'get-used' }, e: 'get-used' },
    { t: 'fill', pt: 'used', l: 1, p: 'My husband ___ (used to / smoke), but he quit.', a: 'used to smoke', w: { 'use to smoke': 'used-form', 'used to smoking': 'used-form' }, e: 'used-form' },
    { t: 'fill', pt: 'used', l: 1, p: '___ you ___ (use to / play) the piano?', a: 'Did|use to play', w: { 'Did|used to play': 'used-form', 'Were|used to play': 'mix' }, e: 'used-form' },
    { t: 'fill', pt: 'be-used', l: 1, p: "She isn't used to ___ (work) at night.", a: 'working', w: { work: 'be-used', 'to work': 'be-used' }, e: 'be-used' },
    { t: 'fill', pt: 'would', l: 1, p: 'Every summer my grandma ___ (would / bake) cherry pies.', a: ['would bake', 'used to bake'], w: { baked: 'would-state', 'would baked': 'used-form' }, e: 'would-state' },
    { t: 'fill', pt: 'get-used', l: 1, p: "I'm still ___ (get) used to the time difference.", a: 'getting', w: { get: 'get-used', got: 'get-used' }, e: 'get-used' },
    { t: 'fill', pt: 'present', l: 1, p: 'Now I ___ (usually / walk) to work.', a: 'usually walk', w: { 'use to walk': 'used-present', 'used to walk': 'used-present' }, e: 'used-present' },
    { t: 'fill', pt: 'be-used', l: 1, p: 'Are you used ___ the cold weather yet?', a: 'to', w: { with: 'be-used', for: 'be-used' }, e: 'be-used' },
    { t: 'fill', pt: 'used', l: 1, p: 'There ___ (used to / be) a bakery on this corner.', a: 'used to be', w: { 'use to be': 'used-form', 'used to being': 'used-form' }, e: 'used-form' },
    { t: 'build', pt: 'used', l: 1, a: 'I used to work as a teacher.', x: ['was'], e: 'used-form' },
    { t: 'build', pt: 'be-used', l: 1, a: "I'm not used to eating so late.", x: ['eat'], e: 'be-used' },
    { t: 'build', pt: 'get-used', l: 1, a: "You'll get used to it soon.", x: ['be'], e: 'get-used' },

    // ---------- Use
    { t: 'fill', pt: 'mix', l: 2, p: 'I ___ (get up) at five when I worked at the bakery. Now I get up at eight.', a: 'used to get up', w: { 'am used to getting up': 'mix', 'was used to get up': 'mix' }, e: 'mix' },
    { t: 'fill', pt: 'mix', l: 2, p: "After three years, I ___ (be used to / drive) on American highways.", a: 'am used to driving', w: { 'used to drive': 'mix', 'am used to drive': 'be-used' }, e: 'mix' },
    { t: 'fill', pt: 'would', l: 2, p: 'When we were kids, we ___ (would / play) outside until dark.', a: ['would play', 'used to play'], w: { 'would played': 'used-form', 'were playing': 'would-state' }, e: 'would-state' },
    { t: 'fill', pt: 'would', l: 2, p: 'My grandfather ___ (used to / be) a pilot.', a: 'used to be', w: { 'would be': 'would-state', 'use to be': 'used-form' }, e: 'would-state' },
    { t: 'fill', pt: 'get-used', l: 2, p: "It took me a year to ___ (get used to / speak) English at work.", a: 'get used to speaking', w: { 'get used to speak': 'be-used', 'be used to speaking': 'get-used' }, e: 'get-used' },
    { t: 'fill', pt: 'present', l: 2, p: '— Do you cook every day? — Yes, I ___ cook dinner at home.', a: ['usually', 'always', 'normally'], w: { 'use to': 'used-present', 'used to': 'used-present' }, e: 'used-present' },
    { t: 'fill', pt: 'used', l: 2, p: "She ___ (not / use to / like) coffee, but now she drinks it every day.", a: "didn't use to like", w: { "didn't used to like": 'used-form', "wasn't used to like": 'mix' }, e: 'used-form' },
    { t: 'fill', pt: 'be-used', l: 2, p: "The kids ___ (not / be used to) American food yet.", a: ["aren't used to", 'are not used to'], w: { "didn't use to": 'mix', "aren't use to": 'be-used' }, e: 'be-used' },
    { t: 'build', pt: 'would', l: 2, a: 'On Sundays we would visit my grandparents.', x: ['visited'], e: 'would-state' },
    { t: 'fix', pt: 'used', l: 2, p: 'Did you used to live in Odesa?', a: ['Did you use to live in Odesa?'], e: 'used-form' },
    { t: 'fix', pt: 'present', l: 2, p: 'I use to drink tea in the morning.', a: ['I usually drink tea in the morning.', 'I normally drink tea in the morning.'], e: 'used-present' },
    { t: 'fix', pt: 'be-used', l: 2, p: "I'm used to work long hours.", a: ["I'm used to working long hours."], e: 'be-used' },
    { t: 'fix', pt: 'would', l: 2, p: 'We would have a big garden in Ukraine.', a: ['We used to have a big garden in Ukraine.', 'We had a big garden in Ukraine.'], e: 'would-state' },
    { t: 'tr', pt: 'used', l: 2, i: 'It\'s not true now. Use *used to*.', p: 'In the past, my sister had long hair.', s: 'My sister', a: ['My sister used to have long hair.'], e: 'used-form' },
    { t: 'tr', pt: 'be-used', l: 2, i: 'Say it with *be used to*.', p: 'Driving in heavy traffic is normal for me now.', s: "I'm", a: ["I'm used to driving in heavy traffic.", "I'm used to driving in heavy traffic now.", "I'm used to heavy traffic now.", "I'm used to heavy traffic."], e: 'be-used' },
    { t: 'tl', pt: 'used', l: 2, uk: 'Раніше я працювала в банку.', ru: 'Раньше я работала в банке.', a: ['I used to work at a bank.', 'I used to work in a bank.', 'I used to work for a bank.'], e: 'used-form' },
    { t: 'tl', pt: 'get-used', l: 2, uk: 'Я поступово звикаю до нового міста.', ru: 'Я постепенно привыкаю к новому городу.', a: ["I'm gradually getting used to the new city.", "I'm slowly getting used to the new city.", "I'm getting used to the new city little by little.", "I'm gradually getting used to my new city.", "I'm slowly getting used to my new city.", "I'm getting used to the new city.", "I'm getting used to the new town.", "I'm gradually getting used to the new town."], e: 'get-used' },

    // ---------- Pro
    { t: 'fix', pt: 'mix', l: 3, p: "I used to the noise of the city now, so I sleep well.", a: ["I'm used to the noise of the city now, so I sleep well.", "I've gotten used to the noise of the city now, so I sleep well.", "I've got used to the noise of the city now, so I sleep well.", "I got used to the noise of the city, so I sleep well now."], e: 'mix' },
    { t: 'fix', pt: 'get-used', l: 3, p: "It's hard to get used to live without my family.", a: ["It's hard to get used to living without my family."], e: 'be-used' },
    { t: 'fix', pt: 'would', l: 3, p: 'My parents would live in a small village before the war.', a: ['My parents used to live in a small village before the war.', 'My parents lived in a small village before the war.'], e: 'would-state' },
    { t: 'fix', pt: 'used', l: 3, p: "We didn't used to celebrate Thanksgiving.", a: ["We didn't use to celebrate Thanksgiving."], e: 'used-form' },
    { t: 'tr', pt: 'get-used', l: 3, i: 'Say it will become normal: *get used to*.', p: 'The new schedule is strange for you now.', s: "You'll", a: ["You'll get used to the new schedule.", "You'll get used to the new schedule soon.", "You'll soon get used to the new schedule.", "You'll get used to it."], e: 'get-used' },
    { t: 'tr', pt: 'would', l: 3, i: 'Tell it as a memory with *would*.', p: 'Every evening my dad read us stories.', s: 'Every evening my dad', a: ['Every evening my dad would read us stories.', 'Every evening my dad would read stories to us.'], e: 'would-state' },
    { t: 'tr', pt: 'mix', l: 3, i: 'Now it\'s normal for you: *I\'m used to…*', p: 'I used to find the American accent hard.', s: "Now I'm", a: ["Now I'm used to the American accent."], e: 'mix' },
    { t: 'tl', pt: 'be-used', l: 3, uk: 'Я вже звикла до спеки.', ru: 'Я уже привыкла к жаре.', a: ["I'm already used to the heat.", "I've already gotten used to the heat.", "I've already got used to the heat.", "I'm used to the heat already.", "I already got used to the heat."], e: 'mix' },
    { t: 'tl', pt: 'present', l: 3, uk: 'Я зазвичай ходжу в спортзал після роботи.', ru: 'Я обычно хожу в спортзал после работы.', a: ['I usually go to the gym after work.', 'I normally go to the gym after work.', 'Usually I go to the gym after work.'], e: 'used-present' },
    { t: 'tl', pt: 'would', l: 3, uk: 'Улітку ми щодня ходили на море.', ru: 'Летом мы каждый день ходили на море.', a: ['In the summer we would go to the sea every day.', 'In summer we would go to the sea every day.', 'In the summer we used to go to the sea every day.', 'In summer we used to go to the sea every day.', 'In the summer we went to the sea every day.', 'Every day in the summer we would go to the sea.', 'In the summer we would go to the beach every day.', 'In the summer we used to go to the beach every day.'], e: 'would-state' },
    { t: 'tl', pt: 'used', l: 3, uk: 'Ти раніше жила в Одесі?', ru: 'Ты раньше жила в Одессе?', a: ['Did you use to live in Odesa?', 'Did you use to live in Odessa?', 'Did you live in Odesa before?', 'Did you live in Odessa before?', 'Have you lived in Odesa before?'], e: 'used-form' },
    { t: 'tl', pt: 'mix', l: 3, uk: 'Раніше я не пила каву, а тепер не можу без неї.', ru: 'Раньше я не пила кофе, а теперь не могу без него.', a: ["I didn't use to drink coffee, but now I can't live without it.", "I didn't use to drink coffee, but now I can't do without it.", "I didn't use to drink coffee, and now I can't live without it.", "I never used to drink coffee, but now I can't live without it.", "I used not to drink coffee, but now I can't live without it."], e: 'used-form' },
    { t: 'fill', pt: 'mix', l: 3, p: "I'm a nurse, so I ___ (be used to / see) blood.", a: 'am used to seeing', w: { 'used to see': 'mix', 'am used to see': 'be-used' }, e: 'mix' },
    { t: 'fill', pt: 'get-used', l: 3, p: "Have you ___ (get used to) the new apartment yet?", a: ['gotten used to', 'got used to'], w: { 'used to': 'get-used', 'been used to': 'get-used' }, e: 'get-used' },
    { t: 'fill', pt: 'present', l: 3, p: "She ___ (usually / not / eat) breakfast — just coffee.", a: ["doesn't usually eat", 'usually does not eat', "usually doesn't eat"], w: { "doesn't use to eat": 'used-present', "didn't use to eat": 'used-present' }, e: 'used-present' },
  ],
});
