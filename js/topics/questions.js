APP.addTopic({
  id: 'q',
  title: 'Questions and negatives',
  level: 'A2',
  group: 'Questions & word order',
  icon: '❓',
  about: 'do / does / did, word order, Who called?',
  rule: {
    en: `In English, a question needs a helping verb **before** the subject.
- Present and Past Simple: **do / does / did** + subject + verb (no ending): *Where **do** you work? **Does** she **speak** Ukrainian? What **did** you **buy**?*
- Negatives the same way: *I **don't** know. She **doesn't** drive. We **didn't go**.*
- With **be** (*am, is, are, was, were*) — no *do*: *Are you tired? Where were you born?*
- Word order: **question word + helping verb + subject + verb**: *What time does the store open?*
- When **who / what** is the **subject**, there is no *do / did*: *Who called you? What happened?* (Compare: *Who did you call?*)
- Prepositions go to the **end**: *Who are you talking to? Where are you from? What is it about?*
- Short answers repeat the helping verb: *Did you lock the door? — Yes, I did.*`,
    uk: `В англійській у питанні допоміжне дієслово стоїть **перед** підметом.
- Present і Past Simple: **do / does / did** + підмет + дієслово (без закінчення): *Where **do** you work? **Does** she **speak** Ukrainian? What **did** you **buy**?*
- Заперечення так само: *I **don't** know. She **doesn't** drive. We **didn't go**.*
- З **be** (*am, is, are, was, were*) — без *do*: *Are you tired? Where were you born?*
- Порядок слів: **питальне слово + допоміжне + підмет + дієслово**: *What time does the store open?*
- Коли **who / what** — це **підмет**, *do / did* не потрібні: *Who called you?* — «Хто тобі дзвонив?» *What happened?* (Порівняйте: *Who did you call?* — «Кому ти дзвонила?»)
- Прийменники йдуть у **кінець**: *Who are you talking to? Where are you from? What is it about?*
- Короткі відповіді повторюють допоміжне: *Did you lock the door? — Yes, I did.*`,
    ru: `В английском в вопросе вспомогательный глагол стоит **перед** подлежащим.
- Present и Past Simple: **do / does / did** + подлежащее + глагол (без окончания): *Where **do** you work? **Does** she **speak** Ukrainian? What **did** you **buy**?*
- Отрицания так же: *I **don't** know. She **doesn't** drive. We **didn't go**.*
- С **be** (*am, is, are, was, were*) — без *do*: *Are you tired? Where were you born?*
- Порядок слов: **вопросительное слово + вспомогательный + подлежащее + глагол**: *What time does the store open?*
- Когда **who / what** — это **подлежащее**, *do / did* не нужны: *Who called you?* — «Кто тебе звонил?» *What happened?* (Сравните: *Who did you call?* — «Кому ты звонила?»)
- Предлоги уходят в **конец**: *Who are you talking to? Where are you from? What is it about?*
- Краткие ответы повторяют вспомогательный глагол: *Did you lock the door? — Yes, I did.*`,
  },
  examples: ['Where does your husband work?', 'Did you lock the door?', 'Who called you?', 'Who are you talking to?', "She doesn't drive."],
  trap: {
    uk: 'Де ти працюєш?',
    ru: 'Где ты работаешь?',
    wrong: 'Where you work?',
    right: 'Where do you work?',
    note: {
      en: 'In Ukrainian and Russian a question can keep the normal word order. English needs a helping verb (*do, does, did*) before the subject.',
      uk: 'Українською питання може мати звичайний порядок слів. Англійською перед підметом потрібне допоміжне дієслово (*do, does, did*).',
      ru: 'По-русски вопрос может сохранять обычный порядок слов. По-английски перед подлежащим нужен вспомогательный глагол (*do, does, did*).',
    },
  },
  errors: {
    'no-aux': {
      en: 'A question or negative in the Present or Past Simple needs **do / does / did**: *Where do you work? What time does it close? I don\'t know.*',
      uk: 'Питання чи заперечення в Present або Past Simple потребує **do / does / did**: *Where do you work? What time does it close? I don\'t know.*',
      ru: 'Вопрос или отрицание в Present или Past Simple требует **do / does / did**: *Where do you work? What time does it close? I don\'t know.*',
    },
    'does-s': {
      en: 'After **does / did / doesn\'t / didn\'t**, the verb has **no ending**: *Does she work? Did you go? She didn\'t understand.* (Not *works, went, understood*.)',
      uk: 'Після **does / did / doesn\'t / didn\'t** дієслово **без закінчення**: *Does she work? Did you go? She didn\'t understand.* (Не *works, went, understood*.)',
      ru: 'После **does / did / doesn\'t / didn\'t** глагол **без окончания**: *Does she work? Did you go? She didn\'t understand.* (Не *works, went, understood*.)',
    },
    'does-do': {
      en: '*he, she, it, my husband* → **does / doesn\'t**. *I, you, we, they* → **do / don\'t**.',
      uk: '*he, she, it, my husband* → **does / doesn\'t**. *I, you, we, they* → **do / don\'t**.',
      ru: '*he, she, it, my husband* → **does / doesn\'t**. *I, you, we, they* → **do / don\'t**.',
    },
    past: {
      en: 'About the past (*yesterday, last night, on Saturday*) → **did**: *Did you see the news last night?* Not *Do you see…*',
      uk: 'Про минуле (*yesterday, last night, on Saturday*) → **did**: *Did you see the news last night?* Не *Do you see…*',
      ru: 'О прошлом (*yesterday, last night, on Saturday*) → **did**: *Did you see the news last night?* Не *Do you see…*',
    },
    order: {
      en: 'Word order: **question word + do/does/did + subject + verb**: *Where does her husband work? How long did the flight take?*',
      uk: 'Порядок слів: **питальне слово + do/does/did + підмет + дієслово**: *Where does her husband work? How long did the flight take?*',
      ru: 'Порядок слов: **вопросительное слово + do/does/did + подлежащее + глагол**: *Where does her husband work? How long did the flight take?*',
    },
    'subject-q': {
      en: 'When **who / what / how many people** is the subject (the one who does it), **no do / did**: *Who called you? What happened? Who broke the window?*',
      uk: 'Коли **who / what / how many people** — підмет (той, хто діє), **без do / did**: *Who called you? What happened? Who broke the window?*',
      ru: 'Когда **who / what / how many people** — подлежащее (тот, кто действует), **без do / did**: *Who called you? What happened? Who broke the window?*',
    },
    be: {
      en: 'With **be** (*am, is, are, was, were*) there is **no do / did**: *Are you ready? Were you at home? Where were you born?*',
      uk: 'З **be** (*am, is, are, was, were*) **без do / did**: *Are you ready? Were you at home? Where were you born?*',
      ru: 'С **be** (*am, is, are, was, were*) **без do / did**: *Are you ready? Were you at home? Where were you born?*',
    },
    prep: {
      en: 'The preposition goes to the **end** of the question: *Who did you go with? What is it about? Where are you from?* (*With whom…* is very formal.)',
      uk: 'Прийменник іде в **кінець** питання: *Who did you go with? What is it about? Where are you from?* (*With whom…* — дуже офіційно.)',
      ru: 'Предлог уходит в **конец** вопроса: *Who did you go with? What is it about? Where are you from?* (*With whom…* — очень официально.)',
    },
    short: {
      en: 'A short answer repeats the **helping verb of the question**: *Did you…? — Yes, I did. Were you…? — No, I wasn\'t. Has she…? — Yes, she has.*',
      uk: 'Коротка відповідь повторює **допоміжне дієслово питання**: *Did you…? — Yes, I did. Were you…? — No, I wasn\'t. Has she…? — Yes, she has.*',
      ru: 'Краткий ответ повторяет **вспомогательный глагол вопроса**: *Did you…? — Yes, I did. Were you…? — No, I wasn\'t. Has she…? — Yes, she has.*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'do', l: 1, p: '___ you like spicy food?', a: 'Do', o: ['Are', 'Does'], w: { Are: 'be', Does: 'does-do' }, e: 'no-aux' },
    { t: 'choose', pt: 'do', l: 1, p: 'Where ___ your husband work?', a: 'does', o: ['do', 'is'], w: { do: 'does-do', is: 'be' }, e: 'does-do' },
    { t: 'choose', pt: 'did', l: 1, p: '___ you see the news last night?', a: 'Did', o: ['Do', 'Were'], w: { Do: 'past', Were: 'be' }, e: 'past' },
    { t: 'choose', pt: 'be', l: 1, p: '___ you tired?', a: 'Are', o: ['Do', 'Does'], w: { Do: 'be', Does: 'be' }, e: 'be' },
    { t: 'choose', pt: 'subject', l: 1, p: 'Who ___ you yesterday?', a: 'called', o: ['did call'], w: { 'did call': 'subject-q' }, e: 'subject-q' },
    { t: 'choose', pt: 'neg', l: 1, p: 'She ___ eat meat.', a: "doesn't", o: ["don't", "isn't"], w: { "don't": 'does-do', "isn't": 'be' }, e: 'does-do' },
    { t: 'choose', pt: 'short', l: 1, p: '— Did you lock the door? — Yes, I ___.', a: 'did', o: ['do', 'locked'], w: { do: 'short', locked: 'short' }, e: 'short' },
    { t: 'fill', pt: 'do', l: 1, p: 'What time ___ the store open on Sundays?', a: 'does', w: { do: 'does-do', is: 'be' }, e: 'no-aux' },
    { t: 'fill', pt: 'did', l: 1, p: '___ you ___ (go) to the party on Saturday?', a: 'Did|go', w: { 'Did|went': 'does-s', 'Do|go': 'past', 'Have|went': 'past' }, e: 'past' },
    { t: 'fill', pt: 'do', l: 1, p: 'Does your daughter ___ (speak) Ukrainian?', a: 'speak', w: { speaks: 'does-s', speaking: 'does-s' }, e: 'does-s' },
    { t: 'fill', pt: 'neg', l: 1, p: 'Sorry, I ___ (not / understand) the question.', a: ["don't understand", "didn't understand"], w: { 'not understand': 'no-aux', "doesn't understand": 'does-do', "don't understood": 'does-s', "didn't understood": 'does-s' }, e: 'no-aux' },
    { t: 'fill', pt: 'neg', l: 1, p: 'We ___ (not / go) out last night.', a: "didn't go", w: { "didn't went": 'does-s', "don't go": 'past', 'not went': 'no-aux' }, e: 'does-s' },
    { t: 'fill', pt: 'be', l: 1, p: '___ he at work yesterday?', a: 'Was', w: { Did: 'be', Is: 'past', Were: 'does-do' }, e: 'be' },
    { t: 'fill', pt: 'prep', l: 1, p: "Where are you ___? — I'm from Lviv.", a: 'from', e: 'prep' },
    { t: 'build', pt: 'order', l: 1, a: 'Where does your sister live?', x: ['lives'], e: 'order' },
    { t: 'build', pt: 'did', l: 1, a: 'What did you have for lunch?', x: ['had'], e: 'does-s' },
    { t: 'build', pt: 'prep', l: 1, a: 'Who are you talking to?', x: ['do'], e: 'prep' },

    // ---------- Use
    { t: 'fill', pt: 'do', l: 2, p: 'How often ___ you ___ (call) your parents?', a: 'do|call', w: { 'does|call': 'does-do', 'are|calling': 'order', 'do|calls': 'does-s' }, e: 'order' },
    { t: 'fill', pt: 'subject', l: 2, p: 'What ___ (happen) at work today?', a: 'happened', w: { 'did happen': 'subject-q', 'did happened': 'subject-q', happen: 'past' }, e: 'subject-q' },
    { t: 'fill', pt: 'subject', l: 2, p: 'Who ___ (live) in that big house on the corner?', a: 'lives', w: { 'does live': 'subject-q', live: 'subject-q' }, e: 'subject-q' },
    { t: 'fill', pt: 'did', l: 2, p: 'Why ___ she ___ (leave) so early yesterday?', a: 'did|leave', w: { 'did|left': 'does-s', 'does|leave': 'past', 'has|left': 'past' }, e: 'past' },
    { t: 'fill', pt: 'neg', l: 2, p: 'My husband ___ (not / drink) coffee.', a: "doesn't drink", w: { "don't drink": 'does-do', "doesn't drinks": 'does-s', 'not drink': 'no-aux', "isn't drink": 'be' }, e: 'does-do' },
    { t: 'fill', pt: 'be', l: 2, p: 'Where ___ you born?', a: 'were', w: { did: 'be', are: 'be', was: 'does-do' }, e: 'be' },
    { t: 'fill', pt: 'short', l: 2, p: '— Does Max have a car? — No, he ___.', a: "doesn't", w: { "don't": 'does-do', "hasn't": 'short', "isn't": 'short' }, e: 'short' },
    { t: 'fill', pt: 'prep', l: 2, p: 'What is this book ___?', a: 'about', e: 'prep' },
    { t: 'build', pt: 'subject', l: 2, a: 'Who told you about the party?', x: ['did'], e: 'subject-q' },
    { t: 'fix', pt: 'order', l: 2, p: 'Where you work?', a: ['Where do you work?'], e: 'no-aux' },
    { t: 'fix', pt: 'do', l: 2, p: 'Does she works from home?', a: ['Does she work from home?'], e: 'does-s' },
    { t: 'fix', pt: 'subject', l: 2, p: 'Who did break the window?', a: ['Who broke the window?'], e: 'subject-q' },
    { t: 'fix', pt: 'be', l: 2, p: 'Do you are ready?', a: ['Are you ready?'], e: 'be' },
    { t: 'tr', pt: 'order', l: 2, i: 'Ask the question with *Where*.', p: 'Her husband works in a bank.', s: 'Where', a: ['Where does her husband work?'], e: 'order' },
    { t: 'tr', pt: 'subject', l: 2, i: 'Ask who did it, with *Who*.', p: 'Somebody called the police.', s: 'Who', a: ['Who called the police?'], e: 'subject-q' },
    { t: 'tl', pt: 'did', l: 2, uk: 'Ти зачинила двері, коли виходила?', ru: 'Ты закрыла дверь, когда уходила?', a: ['Did you lock the door when you left?', 'Did you close the door when you left?', 'Did you shut the door when you left?', 'Did you lock the door when you were leaving?', 'Did you close the door when you were leaving?'], e: 'past' },
    { t: 'tl', pt: 'order', l: 2, uk: 'Скільки коштує цей квиток?', ru: 'Сколько стоит этот билет?', a: ['How much does this ticket cost?', 'How much is this ticket?', 'How much does the ticket cost?', 'How much is the ticket?'], e: 'no-aux' },

    // ---------- Pro
    { t: 'fix', pt: 'order', l: 3, p: 'What time the pharmacy closes?', a: ['What time does the pharmacy close?'], e: 'no-aux' },
    { t: 'fix', pt: 'did', l: 3, p: 'Where did you bought these shoes?', a: ['Where did you buy these shoes?'], e: 'does-s' },
    { t: 'fix', pt: 'prep', l: 3, p: 'With who did you go to the concert?', a: ['Who did you go to the concert with?', 'With whom did you go to the concert?'], e: 'prep' },
    { t: 'fix', pt: 'subject', l: 3, p: 'What did happen to your car?', a: ['What happened to your car?'], e: 'subject-q' },
    { t: 'tr', pt: 'neg', l: 3, i: 'Make it negative.', p: 'She understood the instructions.', s: 'She', a: ["She didn't understand the instructions."], e: 'does-s' },
    { t: 'tr', pt: 'order', l: 3, i: 'Ask with *How long*.', p: 'The flight took ten hours.', s: 'How long', a: ['How long did the flight take?'], e: 'order' },
    { t: 'tr', pt: 'prep', l: 3, i: 'Ask about the person, with *Who*.', p: 'I live with my sister.', s: 'Who', a: ['Who do you live with?'], e: 'prep' },
    { t: 'tl', pt: 'do', l: 3, uk: 'Твій син ходить у садочок?', ru: 'Твой сын ходит в садик?', a: ['Does your son go to kindergarten?', 'Does your son go to daycare?', 'Does your son go to day care?', 'Does your son go to preschool?', 'Does your son attend kindergarten?', 'Does your son go to a kindergarten?'], e: 'no-aux' },
    { t: 'tl', pt: 'subject', l: 3, uk: 'Що сталося? Хто тобі це сказав?', ru: 'Что случилось? Кто тебе это сказал?', a: ['What happened? Who told you that?', 'What happened? Who told you this?', "What's happened? Who told you that?"], e: 'subject-q' },
    { t: 'tl', pt: 'be', l: 3, uk: 'Ти була вдома вчора ввечері?', ru: 'Ты была дома вчера вечером?', a: ['Were you at home last night?', 'Were you home last night?', 'Were you at home yesterday evening?', 'Were you home yesterday evening?'], e: 'be' },
    { t: 'tl', pt: 'prep', l: 3, uk: 'Про що цей фільм?', ru: 'О чём этот фильм?', a: ['What is this movie about?', "What's this movie about?", 'What is this film about?', "What's this film about?", 'What is the movie about?', "What's the movie about?"], e: 'prep' },
    { t: 'tl', pt: 'neg', l: 3, uk: 'Мій чоловік не любить ходити по магазинах.', ru: 'Мой муж не любит ходить по магазинам.', a: ["My husband doesn't like shopping.", "My husband doesn't like going shopping.", "My husband doesn't like to go shopping.", "My husband doesn't enjoy shopping.", "My husband doesn't like to shop."], e: 'does-do' },
    { t: 'fill', pt: 'short', l: 3, p: '— Were you at the meeting? — No, I ___.', a: "wasn't", w: { "didn't": 'short', "weren't": 'short', "don't": 'short' }, e: 'short' },
    { t: 'fill', pt: 'subject', l: 3, p: 'How many people ___ (come) to your birthday party?', a: 'came', w: { 'did come': 'subject-q', 'did came': 'subject-q', come: 'past' }, e: 'subject-q' },
    { t: 'fill', pt: 'short', l: 3, p: '— Has she finished the test? — Yes, she ___.', a: 'has', w: { did: 'short', is: 'short', does: 'short', finished: 'short' }, e: 'short' },
    { t: 'build', pt: 'prep', l: 3, a: 'What kind of music does your husband listen to?', x: ['listens'], e: 'prep' },
  ],
});
