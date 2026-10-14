APP.addTopic({
  id: 'too',
  title: 'too, enough, so, such; bored or boring',
  level: 'B1',
  group: 'Adjectives & adverbs',
  icon: '🌡️',
  about: 'too expensive, old enough, such a nice day, I\'m bored',
  rule: {
    en: `- **too** + adjective = more than is OK, a problem: *This coat is too expensive. It's too cold to swim.* (**very** = a lot, but OK: *It's very cold, but we can go.*)
- **too much** + uncountable (*too much sugar*), **too many** + plural (*too many people*). Before an adjective, just **too**: *too expensive*, not *too much expensive*.
- **enough** goes **after** an adjective (*old enough, warm enough*) but **before** a noun (*enough money, enough chairs*). *+ to* + verb: *She's old enough to drive.*
- **so** + adjective / adverb: *It's so cold!* **such** + (*a*) + adjective + noun: *It's such a nice day! They're such good people.* With a result: *It was so hot that we stayed inside.*
- **-ed** = how a person **feels**: *I'm bored, interested, tired, confused, surprised.* **-ing** = what **causes** the feeling: *The movie is boring. The news is surprising.*`,
    uk: `- **too** + прикметник = більше, ніж треба, проблема: *This coat is too expensive* — «надто дороге». *It's too cold to swim.* (**very** = дуже, але це нормально: *It's very cold, but we can go.*)
- **too much** + незлічуване (*too much sugar*), **too many** + множина (*too many people*). Перед прикметником — просто **too**: *too expensive*, а не *too much expensive*.
- **enough** стоїть **після** прикметника (*old enough, warm enough*), але **перед** іменником (*enough money, enough chairs*). *+ to* + дієслово: *She's old enough to drive.*
- **so** + прикметник / прислівник: *It's so cold!* **such** + (*a*) + прикметник + іменник: *It's such a nice day! They're such good people.* З наслідком: *It was so hot that we stayed inside.*
- **-ed** = що **відчуває** людина: *I'm bored* — «мені нудно», *interested, tired, confused, surprised*. **-ing** = що **викликає** почуття: *The movie is boring* — «фільм нудний». *The news is surprising.*`,
    ru: `- **too** + прилагательное = больше, чем нужно, проблема: *This coat is too expensive* — «слишком дорогое». *It's too cold to swim.* (**very** = очень, но это нормально: *It's very cold, but we can go.*)
- **too much** + неисчисляемое (*too much sugar*), **too many** + множественное (*too many people*). Перед прилагательным — просто **too**: *too expensive*, а не *too much expensive*.
- **enough** стоит **после** прилагательного (*old enough, warm enough*), но **перед** существительным (*enough money, enough chairs*). *+ to* + глагол: *She's old enough to drive.*
- **so** + прилагательное / наречие: *It's so cold!* **such** + (*a*) + прилагательное + существительное: *It's such a nice day! They're such good people.* Со следствием: *It was so hot that we stayed inside.*
- **-ed** = что **чувствует** человек: *I'm bored* — «мне скучно», *interested, tired, confused, surprised*. **-ing** = что **вызывает** чувство: *The movie is boring* — «фильм скучный». *The news is surprising.*`,
  },
  examples: ['This coat is too expensive.', "She's old enough to drive.", "It's such a nice day!", "I'm bored. This movie is so boring.", "There were too many people at the store."],
  trap: {
    uk: 'Мені нудно.',
    ru: 'Мне скучно.',
    wrong: "I'm boring.",
    right: "I'm bored.",
    note: {
      en: '*I\'m boring* means "I am a boring person"! How you feel is the **-ed** form: *I\'m bored, I\'m tired, I\'m interested.*',
      uk: '*I\'m boring* означає «я нудна людина»! Що ви відчуваєте — форма на **-ed**: *I\'m bored, I\'m tired, I\'m interested.*',
      ru: '*I\'m boring* значит «я скучный человек»! То, что вы чувствуете, — форма на **-ed**: *I\'m bored, I\'m tired, I\'m interested.*',
    },
  },
  errors: {
    too: {
      en: '**too** + adjective = more than is OK, so there is a problem: *too expensive, too hot to sleep*. **very** just means "a lot": *very nice*.',
      uk: '**too** + прикметник = більше, ніж треба, тобто є проблема: *too expensive, too hot to sleep*. **very** — просто «дуже»: *very nice*.',
      ru: '**too** + прилагательное = больше, чем нужно, то есть есть проблема: *too expensive, too hot to sleep*. **very** — просто «очень»: *very nice*.',
    },
    'too-much': {
      en: '**too much** + uncountable (*too much sugar*), **too many** + plural (*too many people*). Before an adjective only **too**: *too expensive* — not *too much expensive*.',
      uk: '**too much** + незлічуване (*too much sugar*), **too many** + множина (*too many people*). Перед прикметником лише **too**: *too expensive* — а не *too much expensive*.',
      ru: '**too much** + неисчисляемое (*too much sugar*), **too many** + множественное (*too many people*). Перед прилагательным только **too**: *too expensive* — а не *too much expensive*.',
    },
    enough: {
      en: '**enough** comes **after** an adjective or adverb (*big enough, fast enough*) and **before** a noun (*enough time, enough money*).',
      uk: '**enough** стоїть **після** прикметника чи прислівника (*big enough, fast enough*) і **перед** іменником (*enough time, enough money*).',
      ru: '**enough** стоит **после** прилагательного или наречия (*big enough, fast enough*) и **перед** существительным (*enough time, enough money*).',
    },
    'so-such': {
      en: '**so** + adjective (*so nice, so cold*). **such** + *a / an* + adjective + noun (*such a nice day*), or **such** + adjective + plural / uncountable (*such good people, such bad weather*).',
      uk: '**so** + прикметник (*so nice, so cold*). **such** + *a / an* + прикметник + іменник (*such a nice day*) або **such** + прикметник + множина / незлічуване (*such good people, such bad weather*).',
      ru: '**so** + прилагательное (*so nice, so cold*). **such** + *a / an* + прилагательное + существительное (*such a nice day*) или **such** + прилагательное + множественное / неисчисляемое (*such good people, such bad weather*).',
    },
    'ed-ing': {
      en: '**-ed** = how a person feels (*I\'m bored, tired, interested, confused, excited*). **-ing** = the thing that causes it (*a boring movie, a tiring day, confusing instructions*).',
      uk: '**-ed** = що відчуває людина (*I\'m bored, tired, interested, confused, excited*). **-ing** = те, що це викликає (*a boring movie, a tiring day, confusing instructions*).',
      ru: '**-ed** = что чувствует человек (*I\'m bored, tired, interested, confused, excited*). **-ing** = то, что это вызывает (*a boring movie, a tiring day, confusing instructions*).',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'too', l: 1, p: "I can't buy this coat. It's ___ expensive.", a: 'too', o: ['very', 'enough'], w: { very: 'too', enough: 'enough' }, e: 'too' },
    { t: 'choose', pt: 'enough', l: 1, p: "She isn't old ___ to drive.", a: 'enough', o: ['too', 'so'], w: { too: 'enough', so: 'enough' }, e: 'enough' },
    { t: 'choose', pt: 'so-such', l: 1, p: "It's ___ a beautiful day!", a: 'such', o: ['so', 'very'], w: { so: 'so-such', very: 'so-such' }, e: 'so-such' },
    { t: 'choose', pt: 'ed-ing', l: 1, p: "This movie is so ___. Let's watch something else.", a: 'boring', o: ['bored'], w: { bored: 'ed-ing' }, e: 'ed-ing' },
    { t: 'choose', pt: 'ed-ing', l: 1, p: "I'm really ___ in history.", a: 'interested', o: ['interesting'], w: { interesting: 'ed-ing' }, e: 'ed-ing' },
    { t: 'choose', pt: 'too-much', l: 1, p: 'There were ___ people at the mall.', a: 'too many', o: ['too much', 'too'], w: { 'too much': 'too-much', too: 'too-much' }, e: 'too-much' },
    { t: 'choose', pt: 'so-such', l: 1, p: "Thank you! You're ___ kind.", a: 'so', o: ['such', 'such a'], w: { such: 'so-such', 'such a': 'so-such' }, e: 'so-such' },
    { t: 'fill', pt: 'enough', l: 1, p: "We don't have ___ chairs for everyone.", a: 'enough', w: { too: 'enough', many: 'enough' }, e: 'enough' },
    { t: 'fill', pt: 'too', l: 1, p: "The soup is ___ hot to eat. Wait a minute.", a: 'too', w: { very: 'too', so: 'too' }, e: 'too' },
    { t: 'fill', pt: 'ed-ing', l: 1, p: "After work I'm always so ___ (tire).", a: 'tired', w: { tiring: 'ed-ing' }, e: 'ed-ing' },
    { t: 'fill', pt: 'too-much', l: 1, p: "Don't put ___ much salt in the soup.", a: 'too', w: { very: 'too-much', so: 'too-much' }, e: 'too-much' },
    { t: 'fill', pt: 'enough', l: 1, p: "Is the room warm ___ for the baby?", a: 'enough', w: { too: 'enough' }, e: 'enough' },
    { t: 'fill', pt: 'so-such', l: 1, p: "They're ___ nice people!", a: 'such', w: { so: 'so-such', 'such a': 'so-such' }, e: 'so-such' },
    { t: 'fill', pt: 'ed-ing', l: 1, p: 'The instructions were really ___ (confuse).', a: 'confusing', w: { confused: 'ed-ing' }, e: 'ed-ing' },
    { t: 'build', pt: 'too', l: 1, a: "It's too cold to swim today.", x: ['very'], e: 'too' },
    { t: 'build', pt: 'enough', l: 1, a: 'We have enough time for coffee.', x: ['too'], e: 'enough' },
    { t: 'build', pt: 'ed-ing', l: 1, a: "I'm bored. Let's go out.", x: ['boring'], e: 'ed-ing' },

    // ---------- Use
    { t: 'fill', pt: 'enough', l: 2, p: "He doesn't speak ___ (well / enough) to work as a translator.", a: 'well enough', w: { 'enough well': 'enough', 'enough good': 'enough' }, e: 'enough' },
    { t: 'fill', pt: 'so-such', l: 2, p: 'It was ___ a long day that I fell asleep at eight.', a: 'such', w: { so: 'so-such' }, e: 'so-such' },
    { t: 'fill', pt: 'so-such', l: 2, p: 'The test was ___ difficult that nobody finished it.', a: 'so', w: { such: 'so-such', 'such a': 'so-such' }, e: 'so-such' },
    { t: 'fill', pt: 'too-much', l: 2, p: "This apartment is ___ (too / small) for a family of five.", a: 'too small', w: { 'too much small': 'too-much', 'very small': 'too' }, e: 'too-much' },
    { t: 'fill', pt: 'ed-ing', l: 2, p: 'I was ___ (surprise) to see him there.', a: 'surprised', w: { surprising: 'ed-ing' }, e: 'ed-ing' },
    { t: 'fill', pt: 'ed-ing', l: 2, p: 'Moving to a new country is ___ (excite), but also ___ (frighten).', a: 'exciting|frightening', w: { 'excited|frightened': 'ed-ing', 'exciting|frightened': 'ed-ing', 'excited|frightening': 'ed-ing' }, e: 'ed-ing' },
    { t: 'fill', pt: 'too', l: 2, p: "It's very cold, ___ we can still go for a short walk.", a: 'but', w: { so: 'too', and: 'too' }, e: 'too', n: '*very cold* is OK. *too cold* would mean we can\'t go.' },
    { t: 'fill', pt: 'enough', l: 2, p: "I didn't have ___ money to pay for everything.", a: 'enough', w: { too: 'enough', 'too much': 'too-much' }, e: 'enough' },
    { t: 'build', pt: 'so-such', l: 2, a: 'It was such a good movie!', x: ['so'], e: 'so-such' },
    { t: 'fix', pt: 'ed-ing', l: 2, p: "I'm so boring at this party.", a: ["I'm so bored at this party."], e: 'ed-ing' },
    { t: 'fix', pt: 'enough', l: 2, p: "She isn't enough tall to reach the top shelf.", a: ["She isn't tall enough to reach the top shelf."], e: 'enough' },
    { t: 'fix', pt: 'too-much', l: 2, p: 'This car is too much expensive for us.', a: ['This car is too expensive for us.', 'This car is much too expensive for us.'], e: 'too-much' },
    { t: 'fix', pt: 'so-such', l: 2, p: "It's so a nice apartment!", a: ["It's such a nice apartment!", "It's a really nice apartment!", 'The apartment is so nice!'], e: 'so-such' },
    { t: 'tr', pt: 'too', l: 2, i: 'Use *too… to*.', p: "The box is very heavy. I can't lift it.", s: 'The box is', a: ['The box is too heavy to lift.', 'The box is too heavy for me to lift.'], e: 'too' },
    { t: 'tr', pt: 'enough', l: 2, i: 'Use *not… enough*.', p: "My English is too weak for this job.", s: 'My English', a: ["My English isn't good enough for this job.", 'My English is not good enough for this job.', "My English isn't strong enough for this job."], e: 'enough' },
    { t: 'tl', pt: 'ed-ing', l: 2, uk: 'Мені нудно.', ru: 'Мне скучно.', a: ["I'm bored."], e: 'ed-ing' },
    { t: 'tl', pt: 'too', l: 2, uk: 'Тут занадто шумно, щоб працювати.', ru: 'Здесь слишком шумно, чтобы работать.', a: ["It's too noisy to work here.", "It's too noisy here to work.", 'It is too noisy to work here.', "It's too loud to work here.", "It's too loud here to work."], e: 'too' },

    // ---------- Pro
    { t: 'fix', pt: 'too', l: 3, p: "The weather was too nice, so we had a picnic.", a: ['The weather was very nice, so we had a picnic.', 'The weather was so nice that we had a picnic.', 'The weather was really nice, so we had a picnic.'], e: 'too' },
    { t: 'fix', pt: 'ed-ing', l: 3, p: 'The lecture was very interested, but I was tiring.', a: ['The lecture was very interesting, but I was tired.'], e: 'ed-ing' },
    { t: 'fix', pt: 'enough', l: 3, p: "We don't have money enough for a new car.", a: ["We don't have enough money for a new car."], e: 'enough' },
    { t: 'fix', pt: 'so-such', l: 3, p: 'They have so beautiful kids!', a: ['They have such beautiful kids!', 'Their kids are so beautiful!'], e: 'so-such' },
    { t: 'tr', pt: 'so-such', l: 3, i: 'Rewrite with *such*.', p: 'The day was so hot.', s: 'It was', a: ['It was such a hot day.'], e: 'so-such' },
    { t: 'tr', pt: 'too-much', l: 3, i: 'Use *too many*.', p: "We bought more apples than we need.", s: 'We bought', a: ['We bought too many apples.'], e: 'too-much' },
    { t: 'tr', pt: 'ed-ing', l: 3, i: 'Describe the day with *-ing*.', p: 'I was exhausted after the day.', s: 'It was', a: ['It was an exhausting day.', 'It was exhausting.', 'It was a very exhausting day.'], e: 'ed-ing' },
    { t: 'tl', pt: 'enough', l: 3, uk: 'У мене не вистачає часу на спорт.', ru: 'У меня не хватает времени на спорт.', a: ["I don't have enough time for sports.", "I don't have enough time for exercise.", "I don't have enough time to exercise.", "I don't have enough time for sport.", "I don't have enough time to work out.", "I haven't got enough time for sports."], e: 'enough' },
    { t: 'tl', pt: 'so-such', l: 3, uk: 'Це був такий чудовий вечір!', ru: 'Это был такой чудесный вечер!', a: ['It was such a wonderful evening!', 'It was such a lovely evening!', 'It was such a great evening!', 'It was such a beautiful evening!', 'That was such a wonderful evening!', 'What a wonderful evening!'], e: 'so-such' },
    { t: 'tl', pt: 'too-much', l: 3, uk: 'Ти п\'єш забагато кави.', ru: 'Ты пьёшь слишком много кофе.', a: ['You drink too much coffee.'], e: 'too-much' },
    { t: 'tl', pt: 'ed-ing', l: 3, uk: 'Ця новина мене дуже здивувала.', ru: 'Эта новость меня очень удивила.', a: ['I was very surprised by this news.', 'I was really surprised by the news.', 'I was very surprised by the news.', 'The news really surprised me.', 'This news really surprised me.', 'This news surprised me a lot.', 'The news was very surprising to me.'], e: 'ed-ing' },
    { t: 'tl', pt: 'too', l: 3, uk: 'Ця сукня занадто коротка для роботи.', ru: 'Это платье слишком короткое для работы.', a: ['This dress is too short for work.', 'This dress is too short to wear to work.', 'This dress is too short for the office.'], e: 'too' },
    { t: 'fill', pt: 'so-such', l: 3, p: "I've never seen ___ a mess in my life!", a: 'such', w: { so: 'so-such', 'so much': 'so-such' }, e: 'so-such' },
    { t: 'fill', pt: 'enough', l: 3, p: 'Is your English good ___ for the interview?', a: 'enough', w: { too: 'enough', so: 'enough' }, e: 'enough' },
    { t: 'fill', pt: 'ed-ing', l: 3, p: 'The kids were ___ (amaze) by the fireworks.', a: 'amazed', w: { amazing: 'ed-ing' }, e: 'ed-ing' },
  ],
});
