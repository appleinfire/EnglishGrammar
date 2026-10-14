APP.addTopic({
  id: 'cond',
  title: 'If: real and unreal',
  level: 'B1',
  group: 'Conditionals',
  icon: '🔀',
  about: 'If it rains, we\'ll… / If I had…, I would…',
  rule: {
    en: `- **Real, possible** (1st conditional): **If + present, will + verb**: *If it rains tomorrow, we'll stay home.* No *will* after *if*.
- **Imaginary, unlikely now** (2nd conditional): **If + past, would + verb**: *If I had more time, I would learn Spanish.* (I don't have time.) No *would* after *if*.
- Advice: **If I were you, I'd…** (*If I was you* is common in speech).
- **unless** = *if … not*: *We'll be late unless we leave now* = *if we don't leave now*. Don't add another *not* after *unless*.
- The *if* part can come first or second: *I'd walk if I lived closer.* (A comma only when *if* comes first.)
Ask yourself: **can it really happen?** Yes → *will*. Only in my imagination → *would*.`,
    uk: `- **Реальне, можливе** (1-й тип): **If + теперішній, will + дієслово**: *If it rains tomorrow, we'll stay home* — «Якщо завтра буде дощ…». Після *if* — без *will*.
- **Уявне, малоймовірне зараз** (2-й тип): **If + минулий, would + дієслово**: *If I had more time, I would learn Spanish* — «Якби в мене було більше часу, я б…». Після *if* — без *would*.
- Порада: **If I were you, I'd…** — «На твоєму місці я б…» (*If I was you* часто кажуть у розмові).
- **unless** = *if … not* («якщо не»): *We'll be late unless we leave now* = *if we don't leave now*. Друге *not* після *unless* не додаємо.
- Частина з *if* може стояти першою або другою: *I'd walk if I lived closer.* (Кома — лише коли *if* на початку.)
Питання до себе: **це справді може статися?** Так → *will*. Лише в уяві → *would*.`,
    ru: `- **Реальное, возможное** (1-й тип): **If + настоящее, will + глагол**: *If it rains tomorrow, we'll stay home* — «Если завтра будет дождь…». После *if* — без *will*.
- **Воображаемое, маловероятное сейчас** (2-й тип): **If + прошедшее, would + глагол**: *If I had more time, I would learn Spanish* — «Если бы у меня было больше времени, я бы…». После *if* — без *would*.
- Совет: **If I were you, I'd…** — «На твоём месте я бы…» (*If I was you* часто говорят в разговоре).
- **unless** = *if … not* («если не»): *We'll be late unless we leave now* = *if we don't leave now*. Второе *not* после *unless* не добавляем.
- Часть с *if* может стоять первой или второй: *I'd walk if I lived closer.* (Запятая — только когда *if* в начале.)
Вопрос к себе: **это правда может случиться?** Да → *will*. Только в воображении → *would*.`,
  },
  examples: ["If it rains tomorrow, we'll stay home.", 'If I had more time, I would learn Spanish.', "If I were you, I'd talk to the manager.", "We'll miss the flight unless we leave now.", 'What would you do if you lost your passport?'],
  trap: {
    uk: 'Якби я знала його номер, я б йому подзвонила.',
    ru: 'Если бы я знала его номер, я бы ему позвонила.',
    wrong: 'If I would know his number, I would call him.',
    right: 'If I knew his number, I would call him.',
    note: {
      en: 'Ukrainian *якби… б* and Russian *если бы… бы* put "would" in both parts. English puts *would* only in the result; the *if* part takes the past form.',
      uk: 'Українське *якби… б* має «б» в обох частинах. Англійською *would* лише в частині з наслідком, а після *if* — минула форма.',
      ru: 'Русское *если бы… бы* ставит «бы» в обе части. По-английски *would* только в части с результатом, а после *if* — прошедшая форма.',
    },
  },
  errors: {
    'if-will': {
      en: 'No **will** in the *if* part, even about the future: *If it **rains** tomorrow, we\'ll stay home. If you\'re late, text me.*',
      uk: 'У частині з *if* **will** не буває, навіть про майбутнє: *If it **rains** tomorrow, we\'ll stay home. If you\'re late, text me.*',
      ru: 'В части с *if* **will** не бывает, даже о будущем: *If it **rains** tomorrow, we\'ll stay home. If you\'re late, text me.*',
    },
    'if-would': {
      en: 'No **would** in the *if* part. The *if* part takes the **past**: *If I **had** a car… If I **knew** his number…*',
      uk: 'У частині з *if* **would** не буває. Після *if* — **минула** форма: *If I **had** a car… If I **knew** his number…*',
      ru: 'В части с *if* **would** не бывает. После *if* — **прошедшая** форма: *If I **had** a car… If I **knew** his number…*',
    },
    'second-form': {
      en: 'Imaginary or unlikely now → **If + past, would + verb**: *If I had time, I would help. If she spoke English better, she could…*',
      uk: 'Уявне або малоймовірне зараз → **If + минулий, would + дієслово**: *If I had time, I would help. If she spoke English better, she could…*',
      ru: 'Воображаемое или маловероятное сейчас → **If + прошедшее, would + глагол**: *If I had time, I would help. If she spoke English better, she could…*',
    },
    'first-form': {
      en: 'Real and possible → **If + present, will + verb**: *If you leave now, you\'ll catch the bus. If she studies, she\'ll pass.*',
      uk: 'Реальне й можливе → **If + теперішній, will + дієслово**: *If you leave now, you\'ll catch the bus. If she studies, she\'ll pass.*',
      ru: 'Реальное и возможное → **If + настоящее, will + глагол**: *If you leave now, you\'ll catch the bus. If she studies, she\'ll pass.*',
    },
    were: {
      en: 'Advice: **If I were you, I\'d…** In imaginary *if*, *were* is used for all persons (*was* is common in everyday speech).',
      uk: 'Порада: **If I were you, I\'d…** В уявному *if* форма *were* для всіх осіб (*was* часто чути в розмові).',
      ru: 'Совет: **If I were you, I\'d…** В воображаемом *if* форма *were* для всех лиц (*was* часто слышно в разговоре).',
    },
    unless: {
      en: '**unless** = *if … not*. It is already negative: *Unless you pay* = *If you don\'t pay*. Not *Unless you don\'t pay*.',
      uk: '**unless** = *if … not* («якщо не»). Воно вже заперечне: *Unless you pay* = *If you don\'t pay*. Не *Unless you don\'t pay*.',
      ru: '**unless** = *if … not* («если не»). Оно уже отрицательное: *Unless you pay* = *If you don\'t pay*. Не *Unless you don\'t pay*.',
    },
    'real-unreal': {
      en: 'Ask: can it really happen? **Possible** → *If + present, will*. **Imaginary** → *If + past, would*. Don\'t mix them: *If I find…, I\'ll…* / *If I found…, I\'d…*',
      uk: 'Запитайте себе: це справді може статися? **Можливо** → *If + теперішній, will*. **Уявно** → *If + минулий, would*. Не змішуйте: *If I find…, I\'ll…* / *If I found…, I\'d…*',
      ru: 'Спросите себя: это правда может случиться? **Возможно** → *If + настоящее, will*. **Воображаемо** → *If + прошедшее, would*. Не смешивайте: *If I find…, I\'ll…* / *If I found…, I\'d…*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'first', l: 1, p: "If it ___ tomorrow, we'll stay home.", a: 'rains', o: ['will rain', 'rained'], w: { 'will rain': 'if-will', rained: 'real-unreal' }, e: 'if-will' },
    { t: 'choose', pt: 'second', l: 1, p: 'If I ___ more money, I would buy a bigger house.', a: 'had', o: ['have', 'would have'], w: { have: 'second-form', 'would have': 'if-would' }, e: 'second-form' },
    { t: 'choose', pt: 'were', l: 1, p: "If I ___ you, I'd talk to the manager.", a: 'were', o: ['am', 'would be'], w: { am: 'were', 'would be': 'if-would' }, e: 'were' },
    { t: 'choose', pt: 'first', l: 1, p: 'If you leave now, you ___ the bus.', a: 'will catch', o: ['catch', 'would catch'], w: { catch: 'first-form', 'would catch': 'real-unreal' }, e: 'first-form' },
    { t: 'choose', pt: 'unless', l: 1, p: "We'll miss the flight ___ we leave now.", a: 'unless', o: ['if', 'when'], w: { if: 'unless', when: 'unless' }, e: 'unless' },
    { t: 'choose', pt: 'second', l: 1, p: 'What ___ you do if you won the lottery?', a: 'would', o: ['will', 'did'], w: { will: 'real-unreal', did: 'second-form' }, e: 'second-form' },
    { t: 'choose', pt: 'second', l: 1, p: 'I would call her if I ___ her number.', a: 'knew', o: ['would know', 'know'], w: { 'would know': 'if-would', know: 'second-form' }, e: 'if-would' },
    { t: 'fill', pt: 'first', l: 1, p: 'If you ___ (need) help, call me.', a: 'need', w: { 'will need': 'if-will', needed: 'real-unreal' }, e: 'if-will' },
    { t: 'fill', pt: 'first', l: 1, p: 'If she studies hard, she ___ (pass) the test.', a: 'will pass', w: { passes: 'first-form', 'would pass': 'real-unreal' }, e: 'first-form' },
    { t: 'fill', pt: 'second', l: 1, p: 'If I ___ (live) closer, I would visit you more often.', a: 'lived', w: { 'would live': 'if-would', live: 'second-form' }, e: 'second-form' },
    { t: 'fill', pt: 'second', l: 1, p: 'If we had a garden, we ___ (grow) vegetables.', a: ['would grow', 'could grow'], w: { 'will grow': 'second-form', grew: 'second-form', grow: 'second-form' }, e: 'second-form' },
    { t: 'fill', pt: 'were', l: 1, p: "If I ___ (be) you, I wouldn't sign it.", a: 'were', am: 'was', w: { am: 'were', 'would be': 'if-would' }, e: 'were' },
    { t: 'fill', pt: 'unless', l: 1, p: "You can't park here ___ you have a permit.", a: 'unless', w: { if: 'unless' }, e: 'unless' },
    { t: 'fill', pt: 'first', l: 1, p: "I'll be angry if you ___ (not / call) me.", a: "don't call", w: { "won't call": 'if-will', "didn't call": 'real-unreal' }, e: 'if-will' },
    { t: 'build', pt: 'first', l: 1, a: 'If it is sunny, we will go to the beach.', x: ['would'], e: 'first-form' },
    { t: 'build', pt: 'second', l: 1, a: 'If I had time, I would help you.', x: ['will'], e: 'second-form' },
    { t: 'build', pt: 'were', l: 1, a: 'If I were you, I would wait.', x: ['am'], e: 'were' },

    // ---------- Use
    { t: 'fill', pt: 'real-unreal', l: 2, p: "If I ___ (find) your keys, I'll let you know.", a: 'find', w: { found: 'real-unreal', 'will find': 'if-will' }, e: 'real-unreal' },
    { t: 'fill', pt: 'second', l: 2, p: 'If I ___ (be) taller, I could play basketball.', a: ['were', 'was'], w: { am: 'second-form', 'would be': 'if-would' }, e: 'second-form' },
    { t: 'fill', pt: 'second', l: 2, p: 'If my parents ___ (live) here, they ___ (help) us with the kids.', a: ['lived|would help', 'lived|could help'], w: { 'live|will help': 'real-unreal', 'would live|would help': 'if-would', 'lived|will help': 'real-unreal' }, e: 'second-form' },
    { t: 'fill', pt: 'first', l: 2, p: 'If the doctor ___ (call), I ___ (tell) you right away.', a: 'calls|will tell', w: { 'will call|will tell': 'if-will', 'called|would tell': 'real-unreal' }, e: 'if-will' },
    { t: 'fill', pt: 'unless', l: 2, p: "___ you hurry, we'll be late.", a: 'Unless', w: { If: 'unless', When: 'unless' }, e: 'unless' },
    { t: 'fill', pt: 'were', l: 2, p: "I wouldn't do that if I ___ (be) you.", a: ['were', 'was'], w: { am: 'were', 'would be': 'if-would' }, e: 'were' },
    { t: 'fill', pt: 'first', l: 2, p: "What will you do if they ___ (not / give) you the job?", a: "don't give", w: { "won't give": 'if-will', "didn't give": 'real-unreal', "doesn't give": 'first-form' }, e: 'if-will' },
    { t: 'fill', pt: 'second', l: 2, p: 'If you could live anywhere, where ___ you live?', a: 'would', w: { will: 'real-unreal', do: 'second-form', did: 'second-form' }, e: 'second-form' },
    { t: 'build', pt: 'unless', l: 2, a: "I won't go unless you come with me.", x: ["don't"], e: 'unless' },
    { t: 'fix', pt: 'first', l: 2, p: 'If you will be late, text me.', a: ["If you're late, text me.", "If you're going to be late, text me."], e: 'if-will' },
    { t: 'fix', pt: 'second', l: 2, p: 'If I would have a car, I would drive to work.', a: ['If I had a car, I would drive to work.', "If I had a car, I'd drive to work."], e: 'if-would' },
    { t: 'fix', pt: 'second', l: 2, p: 'If I know the answer, I would tell you.', a: ['If I knew the answer, I would tell you.'], e: 'second-form' },
    { t: 'fix', pt: 'unless', l: 2, p: "Unless you don't pay the bill, they will turn off the electricity.", a: ['Unless you pay the bill, they will turn off the electricity.', "If you don't pay the bill, they will turn off the electricity."], e: 'unless' },
    { t: 'tr', pt: 'second', l: 2, i: 'Imagine. Rewrite with *If…, I would(n\'t)…*', p: "I don't have a car, so I take the bus.", s: 'If I', a: ["If I had a car, I wouldn't take the bus.", 'If I had a car, I would drive.', 'If I had a car, I would drive to work.'], e: 'second-form' },
    { t: 'tr', pt: 'unless', l: 2, i: 'Rewrite with *unless*.', p: "If you don't hurry, you'll miss the bus.", s: 'Unless', a: ["Unless you hurry, you'll miss the bus."], e: 'unless' },
    { t: 'tl', pt: 'first', l: 2, uk: 'Якщо завтра буде дощ, ми залишимося вдома.', ru: 'Если завтра будет дождь, мы останемся дома.', a: ["If it rains tomorrow, we'll stay home.", "If it rains tomorrow, we'll stay at home.", "If it's raining tomorrow, we'll stay home.", "We'll stay home if it rains tomorrow.", "We'll stay at home if it rains tomorrow."], e: 'if-will' },
    { t: 'tl', pt: 'were', l: 2, uk: 'На твоєму місці я б погодилася.', ru: 'На твоём месте я бы согласилась.', a: ['If I were you, I would agree.', 'If I were you, I would say yes.', 'If I were you, I would accept.', 'If I were you, I would accept it.', "If I were you, I'd take it.", 'If I were in your place, I would agree.', "If I were in your shoes, I'd agree."], am: ['If I was you, I would agree.'], e: 'were' },

    // ---------- Pro
    { t: 'fix', pt: 'real-unreal', l: 3, p: "If I will see her tomorrow, I'll give her the documents.", a: ["If I see her tomorrow, I'll give her the documents."], e: 'if-will' },
    { t: 'fix', pt: 'were', l: 3, p: 'If I am you, I would apply for that job.', a: ['If I were you, I would apply for that job.'], am: ['If I was you, I would apply for that job.'], e: 'were' },
    { t: 'fix', pt: 'second', l: 3, p: 'If I would know his number, I would call him.', a: ['If I knew his number, I would call him.'], e: 'if-would' },
    { t: 'fix', pt: 'real-unreal', l: 3, p: 'If you mix red and white, you would get pink.', a: ['If you mix red and white, you get pink.', 'If you mix red and white, you will get pink.'], e: 'real-unreal' },
    { t: 'tr', pt: 'first', l: 3, i: 'Make a warning with *If…, …will…*', p: "Don't touch it — it's hot. You can burn yourself.", s: 'If you touch it,', a: ['If you touch it, you will burn yourself.', 'If you touch it, you might burn yourself.', 'If you touch it, you can burn yourself.', "If you touch it, you'll get burned.", "If you touch it, you'll get burnt."], e: 'first-form' },
    { t: 'tr', pt: 'second', l: 3, i: 'It\'s a dream. Rewrite with *If… would…*', p: "I'm not rich, so I don't travel around the world.", s: 'If I', a: ['If I were rich, I would travel around the world.', 'If I was rich, I would travel around the world.', 'If I were rich, I would travel the world.', 'If I was rich, I would travel the world.'], e: 'second-form' },
    { t: 'tr', pt: 'unless', l: 3, i: 'Rewrite with *if… not*.', p: "I won't come unless they invite me.", s: "I won't come if", a: ["I won't come if they don't invite me."], e: 'unless' },
    { t: 'tl', pt: 'second', l: 3, uk: 'Якби в мене було більше часу, я б вивчала іспанську.', ru: 'Если бы у меня было больше времени, я бы учила испанский.', a: ['If I had more time, I would learn Spanish.', 'If I had more time, I would study Spanish.', 'I would learn Spanish if I had more time.', 'I would study Spanish if I had more time.', 'If I had more time, I would be learning Spanish.'], e: 'second-form' },
    { t: 'tl', pt: 'first', l: 3, uk: 'Якщо ти не поспішиш, ми запізнимося.', ru: 'Если ты не поторопишься, мы опоздаем.', a: ["If you don't hurry, we'll be late.", "If you don't hurry up, we'll be late.", "Unless you hurry, we'll be late.", "Unless you hurry up, we'll be late."], e: 'if-will' },
    { t: 'tl', pt: 'second', l: 3, uk: 'Що б ти зробила, якби загубила паспорт?', ru: 'Что бы ты сделала, если бы потеряла паспорт?', a: ['What would you do if you lost your passport?'], e: 'second-form' },
    { t: 'tl', pt: 'unless', l: 3, uk: 'Я не піду, якщо ти не підеш зі мною.', ru: 'Я не пойду, если ты не пойдёшь со мной.', a: ["I won't go unless you come with me.", "I won't go if you don't come with me.", "I won't go unless you go with me.", "I won't go if you don't go with me.", "I'm not going unless you come with me.", "I'm not going if you don't come with me."], e: 'unless' },
    { t: 'tl', pt: 'second', l: 3, uk: 'Якби я жила ближче до роботи, я б ходила пішки.', ru: 'Если бы я жила ближе к работе, я бы ходила пешком.', a: ['If I lived closer to work, I would walk.', 'If I lived closer to work, I would walk there.', 'If I lived closer to work, I would walk to work.', 'If I lived closer to work, I would go on foot.', 'If I lived nearer to work, I would walk.', 'If I lived closer to my work, I would walk.', 'I would walk to work if I lived closer.', 'I would walk if I lived closer to work.'], e: 'second-form' },
    { t: 'fill', pt: 'real-unreal', l: 3, p: "Take an umbrella. If it ___ (rain), you'll get wet.", a: 'rains', w: { 'will rain': 'if-will', rained: 'real-unreal' }, e: 'real-unreal' },
    { t: 'fill', pt: 'second', l: 3, p: 'If she ___ (speak) English better, she could get a better job.', a: 'spoke', w: { speaks: 'second-form', 'would speak': 'if-would' }, e: 'second-form' },
    { t: 'fill', pt: 'unless', l: 3, p: "I'll make pancakes ___ you'd prefer eggs.", a: 'unless', w: { if: 'unless' }, e: 'unless' },
  ],
});
