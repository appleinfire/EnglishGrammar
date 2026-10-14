APP.addTopic({
  id: 'inv',
  title: 'Never have I…, Had I known…',
  level: 'C1',
  group: 'Questions & word order',
  icon: '🔄',
  about: 'inversion for emphasis and formal conditionals',
  rule: {
    en: `In formal or emphatic English, some words at the **start** of a sentence make **question word order** (auxiliary + subject):
- **Never, Rarely, Seldom, Not once, Little**: ***Never have I** seen so much snow. **Rarely does he** complain. **Little did I** know…* (Present/Past Simple → add **do / does / did**.)
- **Not only … but also**: ***Not only does she** speak four languages, but she also writes poetry.*
- **No sooner … than**, **Hardly / Barely … when** (+ past perfect): ***No sooner had we** sat down **than** the phone rang.*
- **Only when / Only after / Not until** — inversion in the **second** part: *Only when I moved here **did I realize** how little I knew.*
- **Under no circumstances, So + adjective, Such**: *Under no circumstances **should you** share it. So tired **was she** that…*
- Conditionals without *if*: ***Had I known** (= If I had known), **Should you need** help (= If you need), **Were I** you (= If I were you).*
In everyday speech, normal word order is fine: *I've never seen so much snow.*`,
    uk: `У формальній чи емоційній англійській деякі слова на **початку** речення вимагають **порядку слів, як у питанні** (допоміжне + підмет):
- **Never, Rarely, Seldom, Not once, Little**: ***Never have I** seen so much snow* — «Ніколи я не бачила стільки снігу». ***Little did I** know…* — «Я й гадки не мала…» (Present/Past Simple → додаємо **do / does / did**.)
- **Not only … but also**: ***Not only does she** speak four languages, but she also writes poetry.*
- **No sooner … than**, **Hardly / Barely … when** (+ past perfect): ***No sooner had we** sat down **than** the phone rang* — «Не встигли ми сісти, як задзвонив телефон».
- **Only when / Only after / Not until** — інверсія в **другій** частині: *Only when I moved here **did I realize** how little I knew* — «Тільки коли я переїхала сюди, я зрозуміла…»
- **Under no circumstances, So + прикметник, Such**: *Under no circumstances **should you** share it. So tired **was she** that…*
- Умовні без *if*: ***Had I known** (= If I had known), **Should you need** help (= If you need), **Were I** you (= If I were you).*
У звичайній розмові прямий порядок слів — це нормально: *I've never seen so much snow.*`,
    ru: `В формальном или эмоциональном английском некоторые слова в **начале** предложения требуют **порядка слов, как в вопросе** (вспомогательный + подлежащее):
- **Never, Rarely, Seldom, Not once, Little**: ***Never have I** seen so much snow* — «Никогда я не видела столько снега». ***Little did I** know…* — «Я и понятия не имела…» (Present/Past Simple → добавляем **do / does / did**.)
- **Not only … but also**: ***Not only does she** speak four languages, but she also writes poetry.*
- **No sooner … than**, **Hardly / Barely … when** (+ past perfect): ***No sooner had we** sat down **than** the phone rang* — «Не успели мы сесть, как зазвонил телефон».
- **Only when / Only after / Not until** — инверсия во **второй** части: *Only when I moved here **did I realize** how little I knew* — «Только когда я переехала сюда, я поняла…»
- **Under no circumstances, So + прилагательное, Such**: *Under no circumstances **should you** share it. So tired **was she** that…*
- Условные без *if*: ***Had I known** (= If I had known), **Should you need** help (= If you need), **Were I** you (= If I were you).*
В обычном разговоре прямой порядок слов — это нормально: *I've never seen so much snow.*`,
  },
  examples: ['Never have I seen so much snow.', 'Little did I know what was coming.', 'No sooner had we sat down than the phone rang.', 'Only when I moved here did I realize how little I knew.', 'Had I known, I would have called.'],
  trap: {
    uk: 'Тільки коли я переїхала сюди, я зрозуміла, як мало знаю.',
    ru: 'Только когда я переехала сюда, я поняла, как мало знаю.',
    wrong: 'Only when I moved here I realized how little I knew.',
    right: 'Only when I moved here did I realize how little I knew.',
    note: {
      en: 'Ukrainian and Russian keep normal word order after *тільки коли / только когда*. In English, a sentence that starts with *Only when* needs **did I realize** in the second part.',
      uk: 'Після «тільки коли» порядок слів звичайний. Англійською, якщо речення починається з *Only when*, у другій частині потрібна інверсія: **did I realize**.',
      ru: 'После «только когда» порядок слов обычный. По-английски, если предложение начинается с *Only when*, во второй части нужна инверсия: **did I realize**.',
    },
  },
  errors: {
    order: {
      en: 'After a negative or limiting word at the start (*Never, Rarely, Not once, So tired…*), use **question order: auxiliary + subject + verb**: *Never have I seen…, So tired was she…*',
      uk: 'Після заперечного чи обмежувального слова на початку (*Never, Rarely, Not once, So tired…*) — **порядок як у питанні: допоміжне + підмет + дієслово**: *Never have I seen…, So tired was she…*',
      ru: 'После отрицательного или ограничительного слова в начале (*Never, Rarely, Not once, So tired…*) — **порядок как в вопросе: вспомогательный + подлежащее + глагол**: *Never have I seen…, So tired was she…*',
    },
    aux: {
      en: 'If there is no auxiliary (Present or Past Simple), add **do / does / did** and use the base verb: *Rarely **does** he **go**…, Little **did** I **know**…, Not only **did** she **forget**…* — not *Rarely goes he*.',
      uk: 'Якщо допоміжного немає (Present чи Past Simple), додайте **do / does / did**, а дієслово — у початковій формі: *Rarely **does** he **go**…, Little **did** I **know**…, Not only **did** she **forget**…* — не *Rarely goes he*.',
      ru: 'Если вспомогательного нет (Present или Past Simple), добавьте **do / does / did**, а глагол — в начальной форме: *Rarely **does** he **go**…, Little **did** I **know**…, Not only **did** she **forget**…* — не *Rarely goes he*.',
    },
    than: {
      en: 'Fixed pairs: **No sooner … than**, **Hardly / Barely / Scarcely … when**. Use the past perfect: *No sooner had I paid than…, Hardly had I closed the door when…*',
      uk: 'Сталі пари: **No sooner … than**, **Hardly / Barely / Scarcely … when**. З past perfect: *No sooner had I paid than…, Hardly had I closed the door when…*',
      ru: 'Устойчивые пары: **No sooner … than**, **Hardly / Barely / Scarcely … when**. С past perfect: *No sooner had I paid than…, Hardly had I closed the door when…*',
    },
    only: {
      en: 'With **Only when / Only after / Only then / Not until**, the inversion goes in the **main** (second) part; the first part keeps normal order: *Only when she called **did I understand**.*',
      uk: 'З **Only when / Only after / Only then / Not until** інверсія йде в **головній** (другій) частині; перша частина — зі звичайним порядком: *Only when she called **did I understand**.*',
      ru: 'С **Only when / Only after / Only then / Not until** инверсия идёт в **главной** (второй) части; первая часть — с обычным порядком: *Only when she called **did I understand**.*',
    },
    cond: {
      en: 'Formal conditional **without if**: ***Had** I known* = If I had known; ***Should** you need* = If you need; ***Were** I you* = If I were you. Don\'t add *if*; after *Should* use the base verb.',
      uk: 'Формальна умова **без if**: ***Had** I known* = If I had known; ***Should** you need* = If you need; ***Were** I you* = If I were you. Не додавайте *if*; після *Should* — дієслово в початковій формі.',
      ru: 'Формальное условие **без if**: ***Had** I known* = If I had known; ***Should** you need* = If you need; ***Were** I you* = If I were you. Не добавляйте *if*; после *Should* — глагол в начальной форме.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'neg', l: 1, p: 'Never ___ such a beautiful sunset.', a: 'have I seen', o: ['I have seen', 'I seen'], w: { 'I have seen': 'order', 'I seen': 'order' }, e: 'order' },
    { t: 'choose', pt: 'neg', l: 1, p: 'Rarely ___ before midnight.', a: 'does he go to bed', o: ['he goes to bed', 'goes he to bed'], w: { 'he goes to bed': 'order', 'goes he to bed': 'aux' }, e: 'aux' },
    { t: 'choose', pt: 'nosooner', l: 1, p: 'No sooner had we sat down ___ the phone rang.', a: 'than', o: ['when', 'then'], w: { when: 'than', then: 'than' }, e: 'than' },
    { t: 'choose', pt: 'only', l: 1, p: 'Only later ___ what had happened.', a: 'did I understand', o: ['I understood', 'understood I'], w: { 'I understood': 'only', 'understood I': 'aux' }, e: 'only' },
    { t: 'choose', pt: 'cond', l: 1, p: '___ I known about the traffic, I would have left earlier.', a: 'Had', o: ['If', 'Have'], w: { If: 'cond', Have: 'cond' }, e: 'cond' },
    { t: 'choose', pt: 'little', l: 1, p: 'Little ___ that she was about to win.', a: 'did she know', o: ['she knew', 'knew she'], w: { 'she knew': 'order', 'knew she': 'aux' }, e: 'aux' },
    { t: 'fill', pt: 'neg', l: 1, p: 'Never ___ (I / feel) so welcome in a new city.', a: ['have I felt', 'did I feel'], w: { 'I have felt': 'order', 'I felt': 'order', 'did I felt': 'aux' }, e: 'order' },
    { t: 'fill', pt: 'nosooner', l: 1, p: 'Hardly had I closed the door ___ the doorbell rang.', a: ['when', 'before'], w: { than: 'than', then: 'than' }, e: 'than' },
    { t: 'fill', pt: 'cond', l: 1, i: 'Formal style: no "if".', p: '___ you need any help, please call the front desk.', a: 'Should', w: { Would: 'cond', Do: 'cond' }, e: 'cond' },
    { t: 'fill', pt: 'only', l: 1, p: 'Not until I got home ___ (I / notice) the scratch on the car.', a: 'did I notice', w: { 'I noticed': 'only', 'I did notice': 'order', 'noticed I': 'aux' }, e: 'only' },
    { t: 'fill', pt: 'little', l: 1, p: 'Not only ___ (she / speak) four languages, but she also writes poetry.', a: 'does she speak', w: { 'she speaks': 'order', 'speaks she': 'aux', 'does she speaks': 'aux' }, e: 'aux' },
    { t: 'fill', pt: 'cond', l: 1, p: '___ (be) I in your position, I would accept the offer.', a: 'Were', w: { Was: 'cond', Am: 'cond' }, e: 'cond' },
    { t: 'fill', pt: 'nosooner', l: 1, p: 'No sooner ___ (we / arrive) than it started to rain.', a: ['had we arrived', 'did we arrive'], w: { 'we had arrived': 'order', 'we arrived': 'order' }, e: 'than' },
    { t: 'build', pt: 'neg', l: 1, a: 'Never have I seen so much snow.', x: ['did'], e: 'order' },
    { t: 'build', pt: 'cond', l: 1, a: 'Had we known, we would have come earlier.', x: ['if'], e: 'cond' },
    { t: 'build', pt: 'little', l: 1, a: 'Little did we know what was coming.', x: ['knew'], e: 'aux' },

    // ---------- Use
    { t: 'fill', pt: 'neg', l: 2, p: 'Seldom ___ (she / complain) about anything.', a: ['does she complain', 'did she complain'], w: { 'she complains': 'order', 'complains she': 'aux', 'does she complains': 'aux' }, e: 'aux' },
    { t: 'fill', pt: 'only', l: 2, p: 'Only after the meeting ___ (he / tell) us the truth.', a: 'did he tell', w: { 'he told': 'only', 'told he': 'aux' }, e: 'only' },
    { t: 'fill', pt: 'nosooner', l: 2, p: 'Hardly ___ (I / fall) asleep when the baby started crying.', a: 'had I fallen', w: { 'I had fallen': 'order', 'I fell': 'order' }, e: 'than' },
    { t: 'fill', pt: 'cond', l: 2, p: '___ (should / you / have) any questions, contact our office.', a: 'Should you have', w: { 'You should have': 'order', 'Should you having': 'cond' }, e: 'cond' },
    { t: 'fill', pt: 'little', l: 2, p: 'Under no circumstances ___ (you / should / open) this door.', a: 'should you open', w: { 'you should open': 'order' }, e: 'order' },
    { t: 'fill', pt: 'little', l: 2, p: 'So tired ___ (she / be) that she fell asleep at the table.', a: 'was she', w: { 'she was': 'order' }, e: 'order' },
    { t: 'build', pt: 'only', l: 2, a: 'Only then did I understand the problem.', x: ['understood'], e: 'only' },
    { t: 'build', pt: 'nosooner', l: 2, a: 'No sooner had she left than he called.', x: ['when'], e: 'than' },
    { t: 'fix', pt: 'neg', l: 2, p: 'Never I have been so embarrassed.', a: ['Never have I been so embarrassed.'], e: 'order' },
    { t: 'fix', pt: 'only', l: 2, p: 'Only when she called back I understood the problem.', a: ['Only when she called back did I understand the problem.'], e: 'only' },
    { t: 'fix', pt: 'nosooner', l: 2, p: 'No sooner had I paid when I saw that the price was wrong.', a: ['No sooner had I paid than I saw that the price was wrong.', 'Hardly had I paid when I saw that the price was wrong.'], e: 'than' },
    { t: 'fix', pt: 'cond', l: 2, p: 'If had I known, I would have called you.', a: ['Had I known, I would have called you.', 'If I had known, I would have called you.'], e: 'cond' },
    { t: 'tr', pt: 'cond', l: 2, i: 'Start with *Had*. Don\'t use *if*.', p: 'If I had known about the sale, I would have waited.', s: 'Had', a: ['Had I known about the sale, I would have waited.'], e: 'cond' },
    { t: 'tr', pt: 'neg', l: 2, i: 'Start with *Never*.', p: 'I have never eaten such good barbecue.', s: 'Never', a: ['Never have I eaten such good barbecue.'], e: 'order' },
    { t: 'tl', pt: 'little', l: 2, uk: 'Я й гадки не мала, що він теж українець.', ru: 'Я и понятия не имела, что он тоже украинец.', a: ['Little did I know', 'I had no idea'].flatMap((s) => ['that he was', 'he was'].flatMap((h) => [`${s} ${h} Ukrainian too.`, `${s} ${h} also Ukrainian.`, `${s} ${h} Ukrainian as well.`])), e: 'aux' },
    {
      t: 'tl', pt: 'only', l: 2, uk: 'Тільки коли я переїхала сюди, я зрозуміла, як мало знаю.', ru: 'Только когда я переехала сюда, я поняла, как мало знаю.',
      a: ['Only when I moved here', 'Only after I moved here', 'Only when I came here', 'Only after I came here'].flatMap((s) => ['did I realize', 'did I understand'].flatMap((v) => ['how little I knew', 'how little I know'].map((k) => `${s} ${v} ${k}.`)))
        .concat(['It was only when I moved here that I realized how little I knew.', 'I only realized how little I knew when I moved here.']),
      e: 'only',
    },

    // ---------- Pro
    { t: 'fix', pt: 'little', l: 3, p: 'Not only she forgot my birthday, but she also forgot our anniversary.', a: ['Not only did she forget my birthday, but she also forgot our anniversary.', 'Not only did she forget my birthday, but she forgot our anniversary too.'], e: 'aux' },
    { t: 'fix', pt: 'neg', l: 3, p: 'Rarely she has been late for work.', a: ['Rarely has she been late for work.'], e: 'order' },
    { t: 'fix', pt: 'only', l: 3, p: 'Only after did he apologize she forgave him.', a: ['Only after he apologized did she forgive him.'], e: 'only' },
    { t: 'fix', pt: 'cond', l: 3, p: 'Should you will need a ride, just text me.', a: ['Should you need a ride, just text me.'], e: 'cond' },
    { t: 'tr', pt: 'nosooner', l: 3, i: 'Start with *No sooner*.', p: 'As soon as we got to the airport, our flight was canceled.', s: 'No sooner', a: ['No sooner had we got to the airport than our flight was canceled.', 'No sooner had we gotten to the airport than our flight was canceled.', 'No sooner had we arrived at the airport than our flight was canceled.'], e: 'than' },
    { t: 'tr', pt: 'only', l: 3, i: 'Start with *Not until*.', p: "I didn't understand how hard it was until I tried it myself.", s: 'Not until', a: ['Not until I tried it myself did I understand how hard it was.'], e: 'only' },
    { t: 'tr', pt: 'little', l: 3, i: 'Start with *Under no circumstances*.', p: 'You must not give your password to anyone.', s: 'Under no circumstances', a: ['Under no circumstances should you give your password to anyone.', 'Under no circumstances must you give your password to anyone.', 'Under no circumstances should you give anyone your password.', 'Under no circumstances must you give anyone your password.'], e: 'order' },
    { t: 'tr', pt: 'cond', l: 3, i: 'Start with *Were*. Don\'t use *if*.', p: 'If I were in your place, I would talk to a lawyer.', s: 'Were', a: ['Were I in your place, I would talk to a lawyer.'], e: 'cond' },
    {
      t: 'tl', pt: 'neg', l: 3, uk: 'Ніколи в житті я не бачила стільки снігу.', ru: 'Никогда в жизни я не видела столько снега.',
      a: ['so much snow', 'this much snow', 'that much snow'].flatMap((s) => [`Never in my life have I seen ${s}.`, `Never have I seen ${s} in my life.`, `I have never seen ${s} in my life.`, `I have never in my life seen ${s}.`]),
      e: 'order',
    },
    {
      t: 'tl', pt: 'cond', l: 3, uk: 'Якщо у вас виникнуть питання, звертайтеся до нас.', ru: 'Если у вас возникнут вопросы, обращайтесь к нам.',
      a: ['Should you have any questions', 'If you have any questions', 'Should you have questions', 'If you have questions'].flatMap((s) => ['please contact us', 'contact us', 'feel free to contact us', 'please feel free to contact us', "don't hesitate to contact us", 'please let us know', 'let us know'].map((v) => `${s}, ${v}.`)),
      e: 'cond',
    },
    {
      t: 'tl', pt: 'nosooner', l: 3, uk: 'Не встигла я лягти спати, як задзвонив телефон.', ru: 'Не успела я лечь спать, как зазвонил телефон.',
      a: ['gone to bed', 'gone to sleep', 'lain down', 'gotten into bed', 'got into bed'].flatMap((b) => [`No sooner had I ${b} than the phone rang.`, `Hardly had I ${b} when the phone rang.`, `Barely had I ${b} when the phone rang.`, `Scarcely had I ${b} when the phone rang.`, `I had just ${b} when the phone rang.`, `I had barely ${b} when the phone rang.`, `I had hardly ${b} when the phone rang.`]),
      e: 'than',
    },
    { t: 'choose', pt: 'only', l: 3, p: 'Only by working two jobs ___ pay the rent.', a: 'could they', o: ['they could', 'they can'], w: { 'they could': 'only', 'they can': 'only' }, e: 'only' },
    { t: 'choose', pt: 'little', l: 3, p: 'Such ___ the noise that nobody could sleep.', a: 'was', o: ['did', 'had'], w: { did: 'order', had: 'order' }, e: 'order' },
    { t: 'fill', pt: 'neg', l: 3, p: 'Not once ___ (he / say) thank you.', a: 'did he say', w: { 'he said': 'order', 'said he': 'aux', 'did he said': 'aux' }, e: 'aux' },
    { t: 'fill', pt: 'nosooner', l: 3, p: 'Barely ___ (the plane / land) when people started standing up.', a: 'had the plane landed', w: { 'the plane had landed': 'order', 'the plane landed': 'order' }, e: 'than' },
    { t: 'choose', pt: 'cond', l: 3, p: '___ the weather be bad, the ceremony will move indoors.', a: 'Should', o: ['If', 'Would'], w: { If: 'cond', Would: 'cond' }, e: 'cond' },
  ],
});
