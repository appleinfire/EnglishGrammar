APP.addTopic({
  id: 'link',
  title: 'although, despite, because of, so that',
  level: 'B1',
  group: 'Linking',
  icon: '🔀',
  about: 'joining ideas: contrast, reason, result, purpose',
  rule: {
    en: `**Contrast**
- **although / even though** + a clause (subject + verb): *Although it was raining, we went out.*
- **despite / in spite of** + a noun or **-ing**: *Despite the rain, we went out. In spite of feeling tired, she finished.* (*despite* — no *of*.)
- **however** links two sentences, with a comma: *The hotel was nice. However, it was expensive.*
- Don't use *although* and *but* together — one is enough.
**Reason**: **because** + a clause (*because it was late*); **because of** + a noun (*because of the traffic*).
**Result**: **so** + a clause: *It was late, so we took a taxi.*
**Purpose** (why?): **to / in order to** + verb (*I called to ask*); **so that** + a clause, often with *can / could / will / would* (*I left early so that I could catch the bus*).`,
    uk: `**Протиставлення**
- **although / even though** + речення (підмет + дієслово): *Although it was raining, we went out* — «Хоча йшов дощ…».
- **despite / in spite of** + іменник або **-ing**: *Despite the rain, we went out* — «Попри дощ…». *In spite of feeling tired, she finished.* (*despite* — без *of*.)
- **however** («однак») з'єднує два речення, з комою: *The hotel was nice. However, it was expensive.*
- Не вживайте *although* і *but* разом — достатньо одного.
**Причина**: **because** + речення (*because it was late*); **because of** + іменник (*because of the traffic*) — «через затори».
**Наслідок**: **so** + речення: *It was late, so we took a taxi* — «тому ми взяли таксі».
**Мета** (навіщо?): **to / in order to** + дієслово (*I called to ask*); **so that** + речення, часто з *can / could / will / would* (*I left early so that I could catch the bus*) — «щоб устигнути».`,
    ru: `**Противопоставление**
- **although / even though** + предложение (подлежащее + глагол): *Although it was raining, we went out* — «Хотя шёл дождь…».
- **despite / in spite of** + существительное или **-ing**: *Despite the rain, we went out* — «Несмотря на дождь…». *In spite of feeling tired, she finished.* (*despite* — без *of*.)
- **however** («однако») связывает два предложения, с запятой: *The hotel was nice. However, it was expensive.*
- Не используйте *although* и *but* вместе — достаточно одного.
**Причина**: **because** + предложение (*because it was late*); **because of** + существительное (*because of the traffic*) — «из-за пробок».
**Следствие**: **so** + предложение: *It was late, so we took a taxi* — «поэтому мы взяли такси».
**Цель** (зачем?): **to / in order to** + глагол (*I called to ask*); **so that** + предложение, часто с *can / could / will / would* (*I left early so that I could catch the bus*) — «чтобы успеть».`,
  },
  examples: ['Although it was raining, we went to the park.', 'Despite the rain, we went to the park.', 'We were late because of the traffic.', 'I left early so that I could catch the bus.', 'The hotel was nice. However, it was expensive.'],
  trap: {
    uk: 'Хоча він втомився, але все одно прийшов.',
    ru: 'Хотя он устал, но всё равно пришёл.',
    wrong: 'Although he was tired, but he came anyway.',
    right: 'Although he was tired, he came anyway.',
    note: {
      en: 'Ukrainian and Russian often say "хоча… але / хотя… но". In English, use **one** linker: *although* **or** *but*, not both.',
      uk: 'Українською часто кажемо «хоча… але». Англійською — **одне** слово: *although* **або** *but*, не обидва.',
      ru: 'По-русски часто говорим «хотя… но». По-английски — **одно** слово: *although* **или** *but*, не оба.',
    },
  },
  errors: {
    'although-despite': {
      en: '**although / even though** + subject + verb (*although it was raining*). **despite / in spite of** + noun or *-ing* (*despite the rain, despite being tired*).',
      uk: '**although / even though** + підмет + дієслово (*although it was raining*). **despite / in spite of** + іменник або *-ing* (*despite the rain, despite being tired*).',
      ru: '**although / even though** + подлежащее + глагол (*although it was raining*). **despite / in spite of** + существительное или *-ing* (*despite the rain, despite being tired*).',
    },
    double: {
      en: 'One linker is enough: *Although he was tired, he came* **or** *He was tired, but he came* — not *although… but*. The same with *because… so*.',
      uk: 'Достатньо одного сполучника: *Although he was tired, he came* **або** *He was tired, but he came* — не *although… but*. Так само *because… so*.',
      ru: 'Достаточно одного союза: *Although he was tired, he came* **или** *He was tired, but he came* — не *although… but*. Так же *because… so*.',
    },
    however: {
      en: '**however** joins two separate sentences: *…expensive. However, the food was great.* It is not a word to join two parts with a comma like *but*.',
      uk: '**however** з\'єднує два окремі речення: *…expensive. However, the food was great.* Це не сполучник на зразок *but*, щоб з\'єднати частини комою.',
      ru: '**however** связывает два отдельных предложения: *…expensive. However, the food was great.* Это не союз вроде *but*, чтобы соединить части запятой.',
    },
    'because-of': {
      en: '**because** + subject + verb (*because the traffic was bad*). **because of** + noun (*because of the traffic*).',
      uk: '**because** + підмет + дієслово (*because the traffic was bad*). **because of** + іменник (*because of the traffic*).',
      ru: '**because** + подлежащее + глагол (*because the traffic was bad*). **because of** + существительное (*because of the traffic*).',
    },
    purpose: {
      en: 'Purpose (why? what for?): **to / in order to + verb** (*I went out to buy milk*) or **so that + clause** (*so that I could…*). Not *for buy*, not *so* alone.',
      uk: 'Мета (навіщо?): **to / in order to + дієслово** (*I went out to buy milk*) або **so that + речення** (*so that I could…*). Не *for buy* і не просто *so*.',
      ru: 'Цель (зачем?): **to / in order to + глагол** (*I went out to buy milk*) или **so that + предложение** (*so that I could…*). Не *for buy* и не просто *so*.',
    },
    result: {
      en: '**so** = the result: *It was late, **so** we took a taxi.* **because** = the reason: *We took a taxi **because** it was late.* Don\'t mix them up.',
      uk: '**so** = наслідок: *It was late, **so** we took a taxi.* **because** = причина: *We took a taxi **because** it was late.* Не плутайте.',
      ru: '**so** = следствие: *It was late, **so** we took a taxi.* **because** = причина: *We took a taxi **because** it was late.* Не путайте.',
    },
    'despite-of': {
      en: '**despite** has no *of*: *despite the rain*. With *of*: **in spite of** the rain.',
      uk: '**despite** — без *of*: *despite the rain*. З *of*: **in spite of** the rain.',
      ru: '**despite** — без *of*: *despite the rain*. С *of*: **in spite of** the rain.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'although', l: 1, p: '___ it was raining, we went to the park.', a: 'Although', o: ['Despite', 'However'], w: { Despite: 'although-despite', However: 'however' }, e: 'although-despite' },
    { t: 'choose', pt: 'despite', l: 1, p: '___ the rain, we went to the park.', a: 'Despite', o: ['Although', 'Even though'], w: { Although: 'although-despite', 'Even though': 'although-despite' }, e: 'although-despite' },
    { t: 'choose', pt: 'because-of', l: 1, p: 'We were late ___ the traffic.', a: 'because of', o: ['because', 'so'], w: { because: 'because-of', so: 'result' }, e: 'because-of' },
    { t: 'choose', pt: 'result', l: 1, p: 'It was late, ___ we took a taxi.', a: 'so', o: ['because', 'although'], w: { because: 'result', although: 'although-despite' }, e: 'result' },
    { t: 'choose', pt: 'purpose', l: 1, p: 'I went to the store ___ some milk.', a: 'to buy', o: ['for buy', 'so buy'], w: { 'for buy': 'purpose', 'so buy': 'purpose' }, e: 'purpose' },
    { t: 'choose', pt: 'however', l: 1, p: 'The hotel was very nice. ___, it was too expensive.', a: 'However', o: ['Although', 'Despite'], w: { Although: 'however', Despite: 'although-despite' }, e: 'however' },
    { t: 'fill', pt: 'despite', l: 1, p: 'In spite ___ the bad weather, the flight left on time.', a: 'of', e: 'despite-of' },
    { t: 'fill', pt: 'because-of', l: 1, p: "I couldn't sleep ___ the baby was crying.", a: ['because', 'since', 'as'], w: { 'because of': 'because-of', so: 'result' }, e: 'because-of' },
    { t: 'fill', pt: 'although', l: 1, p: 'She went to work ___ she felt sick.', a: ['although', 'even though', 'though'], w: { despite: 'although-despite', but: 'double' }, e: 'although-despite' },
    { t: 'fill', pt: 'purpose', l: 1, p: 'I set an alarm ___ that I wouldn\'t oversleep.', a: 'so', w: { for: 'purpose', to: 'purpose' }, e: 'purpose' },
    { t: 'fill', pt: 'result', l: 1, p: "The store was closed, ___ we went home.", a: 'so', w: { because: 'result', however: 'however' }, e: 'result' },
    { t: 'fill', pt: 'despite', l: 1, p: 'Despite ___ (be) tired, she finished the report.', a: 'being', w: { be: 'although-despite', she: 'although-despite' }, e: 'although-despite' },
    { t: 'fill', pt: 'because-of', l: 1, p: 'The school is closed today ___ of the snow.', a: 'because', w: { since: 'because-of', as: 'because-of' }, e: 'because-of' },
    { t: 'fill', pt: 'purpose', l: 1, p: 'We moved to the US ___ give our kids a better future.', a: ['to', 'in order to'], w: { for: 'purpose', 'for to': 'purpose' }, e: 'purpose' },
    { t: 'build', pt: 'double', l: 1, a: 'Although she was tired, she cooked dinner.', x: ['but'], e: 'double' },
    { t: 'build', pt: 'despite', l: 1, a: 'Despite the traffic, we arrived on time.', x: ['of'], e: 'despite-of' },
    { t: 'build', pt: 'purpose', l: 1, a: 'I called the clinic to make an appointment.', x: ['for'], e: 'purpose' },

    // ---------- Use
    { t: 'fill', pt: 'although', l: 2, p: '___ we left early, we missed the train.', a: ['Although', 'Even though', 'Though'], w: { Despite: 'although-despite', However: 'however' }, e: 'although-despite' },
    { t: 'fill', pt: 'despite', l: 2, p: '___ the high price, the apartment was rented in a day.', a: ['Despite', 'In spite of'], w: { Although: 'although-despite', 'Despite of': 'despite-of' }, e: 'although-despite' },
    { t: 'fill', pt: 'because-of', l: 2, p: 'The flight was canceled ___ the storm.', a: ['because of', 'due to'], w: { because: 'because-of' }, e: 'because-of' },
    { t: 'fill', pt: 'purpose', l: 2, p: 'Speak slowly ___ everyone can understand you.', a: 'so that', w: { 'so': 'purpose', 'for': 'purpose', 'to': 'purpose' }, e: 'purpose' },
    { t: 'fill', pt: 'however', l: 2, p: 'I wanted to go. ___, I had to work late.', a: 'However', w: { Although: 'however', But: 'however' }, e: 'however', n: 'After a full stop, *But* is common in speech, but *However,* is the normal written choice.' },
    { t: 'fill', pt: 'result', l: 2, p: 'We took a taxi ___ it was raining hard.', a: ['because', 'since', 'as'], w: { so: 'result' }, e: 'result' },
    { t: 'fill', pt: 'although', l: 2, p: "She speaks English very well, ___ she's only been here a year.", a: ['although', 'even though', 'though'], w: { despite: 'although-despite', however: 'however' }, e: 'although-despite' },
    { t: 'fill', pt: 'despite', l: 2, p: 'He kept working despite ___ (have) a fever.', a: 'having', w: { have: 'although-despite', 'he had': 'although-despite' }, e: 'although-despite' },
    { t: 'build', pt: 'because-of', l: 2, a: 'We stayed home because of the storm.', x: ['so'], e: 'because-of' },
    { t: 'fix', pt: 'double', l: 2, p: 'Although he was tired, but he came to the party.', a: ['Although he was tired, he came to the party.', 'He was tired, but he came to the party.'], e: 'double' },
    { t: 'fix', pt: 'despite', l: 2, p: 'Despite of the cold, the kids played outside.', a: ['Despite the cold, the kids played outside.', 'In spite of the cold, the kids played outside.'], e: 'despite-of' },
    { t: 'fix', pt: 'because-of', l: 2, p: 'I was late because the traffic.', a: ['I was late because of the traffic.'], e: 'because-of' },
    { t: 'fix', pt: 'purpose', l: 2, p: 'I learn English for get a better job.', a: ['I learn English to get a better job.', "I'm learning English to get a better job.", 'I learn English in order to get a better job.', 'I learn English so that I can get a better job.'], e: 'purpose' },
    { t: 'tr', pt: 'despite', l: 2, i: 'Start with *Despite*.', p: 'Although it was cold, we went swimming.', s: 'Despite', a: ['Despite the cold, we went swimming.', 'Despite the cold weather, we went swimming.', 'Despite it being cold, we went swimming.'], e: 'although-despite' },
    { t: 'tr', pt: 'result', l: 2, i: 'Join with *so*.', p: "I didn't have any cash. I paid by card.", s: "I didn't have any cash,", a: ["I didn't have any cash, so I paid by card."], e: 'result' },
    { t: 'tl', pt: 'although', l: 2, uk: 'Хоча він втомився, він усе одно прийшов.', ru: 'Хотя он устал, он всё равно пришёл.', a: ['Although he was tired, he still came.', 'Although he was tired, he came anyway.', 'Even though he was tired, he still came.', 'Even though he was tired, he came anyway.', 'Though he was tired, he still came.', 'He was tired, but he still came.', 'He was tired, but he came anyway.', 'Although he was tired, he came.'], e: 'double' },
    { t: 'tl', pt: 'because-of', l: 2, uk: 'Ми запізнилися через затори.', ru: 'Мы опоздали из-за пробок.', a: ['We were late because of the traffic.', 'We were late because of traffic.', 'We were late because of traffic jams.', 'We were late because of the traffic jams.', 'We were late due to the traffic.', 'We were late due to traffic.'], e: 'because-of' },

    // ---------- Pro
    { t: 'fix', pt: 'however', l: 3, p: 'However it was raining, we went for a walk.', a: ['Although it was raining, we went for a walk.', 'Even though it was raining, we went for a walk.', 'Though it was raining, we went for a walk.', 'It was raining. However, we went for a walk.'], e: 'however' },
    { t: 'fix', pt: 'although', l: 3, p: 'Despite she studied a lot, she failed the test.', a: ['Although she studied a lot, she failed the test.', 'Even though she studied a lot, she failed the test.', 'Despite studying a lot, she failed the test.', 'Despite the fact that she studied a lot, she failed the test.'], e: 'although-despite' },
    { t: 'fix', pt: 'result', l: 3, p: 'Because it was late, so we took a taxi.', a: ['Because it was late, we took a taxi.', 'It was late, so we took a taxi.'], e: 'double' },
    { t: 'fix', pt: 'purpose', l: 3, p: 'I saved money so I can buy a car.', a: ['I saved money so that I could buy a car.', 'I saved money to buy a car.', 'I saved money so I could buy a car.', 'I saved money in order to buy a car.'], e: 'purpose' },
    { t: 'tr', pt: 'although', l: 3, i: 'Rewrite with *Even though*.', p: 'In spite of the long flight, she felt great.', s: 'Even though', a: ['Even though the flight was long, she felt great.'], e: 'although-despite' },
    { t: 'tr', pt: 'purpose', l: 3, i: 'Join with *so that*.', p: 'I wrote it down. I wanted to remember it.', s: 'I wrote it down', a: ['I wrote it down so that I would remember it.', "I wrote it down so that I wouldn't forget it.", 'I wrote it down so that I could remember it.', 'I wrote it down so that I remember it.'], e: 'purpose' },
    { t: 'tr', pt: 'because-of', l: 3, i: 'Rewrite with *because of*.', p: 'The game was canceled because the weather was bad.', s: 'The game was canceled', a: ['The game was canceled because of the bad weather.', 'The game was canceled because of bad weather.', 'The game was canceled because of the weather.'], e: 'because-of' },
    { t: 'tl', pt: 'despite', l: 3, uk: 'Попри дощ, ми чудово провели час.', ru: 'Несмотря на дождь, мы прекрасно провели время.', a: ['Despite the rain, we had a great time.', 'In spite of the rain, we had a great time.', 'Despite the rain, we had a wonderful time.', 'In spite of the rain, we had a wonderful time.', 'Despite the rain, we had a lovely time.', 'Despite the rain, we had a really good time.'], e: 'although-despite' },
    { t: 'tl', pt: 'purpose', l: 3, uk: 'Я вийшла раніше, щоб не запізнитися.', ru: 'Я вышла раньше, чтобы не опоздать.', a: ['I left early so that I wouldn\'t be late.', "I left early so I wouldn't be late.", 'I left earlier so that I wouldn\'t be late.', "I left earlier so I wouldn't be late.", 'I left early in order not to be late.', 'I left early so as not to be late.', 'I left early so as not to be late.', 'I left early to avoid being late.'], e: 'purpose' },
    { t: 'tl', pt: 'however', l: 3, uk: 'Квартира гарна. Однак вона задорога для нас.', ru: 'Квартира хорошая. Однако она слишком дорогая для нас.', a: ["The apartment is nice. However, it's too expensive for us.", 'The apartment is nice. However, it is too expensive for us.', "The apartment is good. However, it's too expensive for us.", "The apartment is beautiful. However, it's too expensive for us.", "The apartment is great. However, it's too expensive for us."], e: 'however' },
    { t: 'tl', pt: 'result', l: 3, uk: 'Я забула гаманець, тому не змогла нічого купити.', ru: 'Я забыла кошелёк, поэтому не смогла ничего купить.', a: ["I forgot my wallet, so I couldn't buy anything.", "I forgot my wallet, so I wasn't able to buy anything.", "I left my wallet at home, so I couldn't buy anything.", "I forgot my purse, so I couldn't buy anything."], e: 'result' },
    { t: 'tl', pt: 'double', l: 3, uk: 'Хоча було пізно, але магазин ще працював.', ru: 'Хотя было поздно, но магазин ещё работал.', a: ['Although it was late, the store was still open.', 'Even though it was late, the store was still open.', 'It was late, but the store was still open.', 'Though it was late, the store was still open.', 'Although it was late, the shop was still open.'], e: 'double' },
    { t: 'fill', pt: 'although', l: 3, p: "___ I've lived here for three years, I still get lost downtown.", a: ['Although', 'Even though', 'Though'], w: { Despite: 'although-despite', However: 'however' }, e: 'although-despite' },
    { t: 'fill', pt: 'purpose', l: 3, p: "I'll write the address down ___ you don't forget it.", a: 'so that', w: { so: 'purpose', to: 'purpose', for: 'purpose' }, e: 'purpose' },
    { t: 'fill', pt: 'because-of', l: 3, p: 'She got the job ___ her excellent English.', a: ['because of', 'thanks to', 'due to'], w: { because: 'because-of', despite: 'although-despite' }, e: 'because-of' },
  ],
});
