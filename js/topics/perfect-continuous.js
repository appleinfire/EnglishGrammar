APP.addTopic({
  id: 'ppc',
  title: 'Present Perfect Continuous',
  level: 'B1',
  group: 'Tenses',
  icon: '🔄',
  about: "I've been waiting: an activity up to now",
  rule: {
    en: `**have / has been + verb-ing**: *I've been waiting. She's been working.*
- An activity that started in the past and is **still going on** (or just stopped), often with *for, since, How long, all day, lately*: *We've been waiting for an hour.*
- You can **see the result** of a recent activity: *Your eyes are red. Have you been crying?*
The **Present Perfect Simple** (*I've done*) is about the **result** or **how many / how much**:
- *I've been painting the kitchen* (the activity; maybe not finished) — *I've painted the kitchen* (finished).
- *I've been writing emails all morning* — *I've written five emails.*
Verbs of state (*know, like, want, believe, own, have* = own) usually do not take *-ing*: *I've known her for years.*`,
    uk: `**have / has been + дієслово з -ing**: *I've been waiting. She's been working.*
- Дія почалася в минулому і **досі триває** (або щойно закінчилася), часто з *for, since, How long, all day, lately*: *We've been waiting for an hour* — «Ми чекаємо вже годину».
- **Видно результат** недавньої дії: *Your eyes are red. Have you been crying?* — «Ти плакала?»
**Present Perfect Simple** (*I've done*) — про **результат** або **скільки**:
- *I've been painting the kitchen* (процес, можливо не закінчений) — *I've painted the kitchen* (готово).
- *I've been writing emails all morning* — *I've written five emails.*
Дієслова стану (*know, like, want, believe, own, have* = мати) зазвичай без *-ing*: *I've known her for years.*`,
    ru: `**have / has been + глагол с -ing**: *I've been waiting. She's been working.*
- Действие началось в прошлом и **всё ещё длится** (или только что закончилось), часто с *for, since, How long, all day, lately*: *We've been waiting for an hour* — «Мы ждём уже час».
- **Виден результат** недавнего действия: *Your eyes are red. Have you been crying?* — «Ты плакала?»
**Present Perfect Simple** (*I've done*) — о **результате** или **сколько**:
- *I've been painting the kitchen* (процесс, может, не закончен) — *I've painted the kitchen* (готово).
- *I've been writing emails all morning* — *I've written five emails.*
Глаголы состояния (*know, like, want, believe, own, have* = иметь) обычно без *-ing*: *I've known her for years.*`,
  },
  examples: ["We've been waiting for the doctor for an hour.", 'Your eyes are red. Have you been crying?', "I've been cleaning all day, but I haven't finished yet.", "I've written five emails this morning.", "I've known my husband for ten years."],
  trap: {
    uk: 'Я шукаю роботу з березня.',
    ru: 'Я ищу работу с марта.',
    wrong: "I'm looking for a job since March.",
    right: "I've been looking for a job since March.",
    note: {
      en: 'Ukrainian and Russian use the present tense for "since March and still now". English needs *have been + -ing* for an activity that goes on up to now.',
      uk: 'Українською для «з березня і досі» вживаємо теперішній час. Англійською для дії, що триває до зараз, потрібно *have been + -ing*.',
      ru: 'По-русски для «с марта и до сих пор» используем настоящее время. По-английски для действия, длящегося до сейчас, нужно *have been + -ing*.',
    },
  },
  errors: {
    form: {
      en: 'The form is **have / has + been + verb-ing**: *I\'ve been working, she\'s been sleeping*. Not *I\'ve working*, *I\'m been working* or *I have been work*.',
      uk: 'Форма: **have / has + been + дієслово з -ing**: *I\'ve been working, she\'s been sleeping*. Не *I\'ve working*, *I\'m been working* чи *I have been work*.',
      ru: 'Форма: **have / has + been + глагол с -ing**: *I\'ve been working, she\'s been sleeping*. Не *I\'ve working*, *I\'m been working* или *I have been work*.',
    },
    tense: {
      en: 'An activity that started in the past and still goes on, with *for / since / How long* → **have been + -ing**, not the Present Simple or Present Continuous: *I\'ve been waiting for an hour.*',
      uk: 'Дія почалася в минулому і триває досі, з *for / since / How long* → **have been + -ing**, а не Present Simple чи Present Continuous: *I\'ve been waiting for an hour.*',
      ru: 'Действие началось в прошлом и длится до сих пор, с *for / since / How long* → **have been + -ing**, а не Present Simple или Present Continuous: *I\'ve been waiting for an hour.*',
    },
    count: {
      en: 'A number or amount (*three emails, four books, how many*) → **Present Perfect Simple**: *I\'ve written three emails.* The *-ing* form is for how long, not how many.',
      uk: 'Кількість (*three emails, four books, how many*) → **Present Perfect Simple**: *I\'ve written three emails.* Форма з *-ing* — про «як довго», а не «скільки».',
      ru: 'Количество (*three emails, four books, how many*) → **Present Perfect Simple**: *I\'ve written three emails.* Форма с *-ing* — про «как долго», а не «сколько».',
    },
    stative: {
      en: 'Verbs of state — *know, like, love, want, believe, own, belong, have* (= own) — are usually not used with *-ing*: *I\'ve known him for ages*, not *I\'ve been knowing*.',
      uk: 'Дієслова стану — *know, like, love, want, believe, own, belong, have* (= мати) — зазвичай не вживаються з *-ing*: *I\'ve known him for ages*, а не *I\'ve been knowing*.',
      ru: 'Глаголы состояния — *know, like, love, want, believe, own, belong, have* (= иметь) — обычно не используются с *-ing*: *I\'ve known him for ages*, а не *I\'ve been knowing*.',
    },
    evidence: {
      en: 'You can **see or feel the result** of a recent activity (wet ground, red eyes, a smell) → **have been + -ing**: *Have you been crying? It\'s been raining.*',
      uk: '**Видно чи відчутно наслідок** недавньої дії (мокра земля, червоні очі, запах) → **have been + -ing**: *Have you been crying? It\'s been raining.*',
      ru: '**Виден или ощутим след** недавнего действия (мокрая земля, красные глаза, запах) → **have been + -ing**: *Have you been crying? It\'s been raining.*',
    },
    result: {
      en: '**Finished, with a result** → *have + 3rd form*: *I\'ve painted the kitchen. Come and see!* **The activity, maybe not finished** → *have been + -ing*: *I\'ve been painting all morning.*',
      uk: '**Завершено, є результат** → *have + 3-тя форма*: *I\'ve painted the kitchen. Come and see!* **Процес, можливо незавершений** → *have been + -ing*: *I\'ve been painting all morning.*',
      ru: '**Завершено, есть результат** → *have + 3-я форма*: *I\'ve painted the kitchen. Come and see!* **Процесс, может, не завершён** → *have been + -ing*: *I\'ve been painting all morning.*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'duration', l: 1, p: 'I ___ for the bus for twenty minutes.', a: 'have been waiting', o: ['am waiting', 'have waiting'], w: { 'am waiting': 'tense', 'have waiting': 'form' }, e: 'tense' },
    { t: 'choose', pt: 'form', l: 1, p: 'She ___ been working all day.', a: 'has', o: ['is', 'have'], w: { is: 'form', have: 'pp:has-have' }, e: 'form' },
    { t: 'choose', pt: 'evidence', l: 1, p: 'Your eyes are red. ___ you been crying?', a: 'Have', o: ['Are', 'Did'], w: { Are: 'form', Did: 'evidence' }, e: 'evidence' },
    { t: 'choose', pt: 'count', l: 1, p: 'I ___ five emails this morning.', a: 'have written', o: ['have been writing', 'am writing'], w: { 'have been writing': 'count', 'am writing': 'count' }, e: 'count' },
    { t: 'choose', pt: 'stative', l: 1, p: 'We ___ each other since we were kids.', a: 'have known', o: ['have been knowing', 'know'], w: { 'have been knowing': 'stative', know: 'tense' }, e: 'stative' },
    { t: 'choose', pt: 'howlong', l: 1, p: 'How long ___ you been learning English?', a: 'have', o: ['are', 'do'], w: { are: 'form', do: 'tense' }, e: 'form' },
    { t: 'fill', pt: 'duration', l: 1, p: 'It ___ (rain) since this morning.', a: ['has been raining', 'has rained'], w: { 'is raining': 'tense', rains: 'tense' }, e: 'tense' },
    { t: 'fill', pt: 'form', l: 1, p: 'They ___ (play) video games for three hours.', a: 'have been playing', w: { 'are playing': 'tense', 'have playing': 'form', 'has been playing': 'pp:has-have', 'have been play': 'form' }, e: 'form' },
    { t: 'fill', pt: 'evidence', l: 1, p: '— Why are your hands so dirty? — I ___ (fix) the car.', a: ['have been fixing', 'was fixing'], w: { 'am fixing': 'evidence', fix: 'evidence' }, e: 'evidence' },
    { t: 'fill', pt: 'count', l: 1, p: 'She ___ (drink) three cups of coffee today.', a: 'has drunk', w: { 'has been drinking': 'count', 'has drank': 'pp:form', drinks: 'count' }, e: 'count' },
    { t: 'fill', pt: 'stative', l: 1, p: 'I ___ (have) this laptop for six years.', a: 'have had', w: { 'have been having': 'stative', have: 'tense', 'am having': 'stative' }, e: 'stative' },
    { t: 'fill', pt: 'howlong', l: 1, p: 'How long ___ you ___ (wait)?', a: 'have|been waiting', w: { 'are|waiting': 'tense', 'did|wait': 'tense', 'have|waiting': 'form' }, e: 'tense' },
    { t: 'fill', pt: 'duration', l: 1, p: 'My son ___ (learn) to swim since June.', a: 'has been learning', w: { 'is learning': 'tense', learns: 'tense', 'have been learning': 'pp:has-have' }, e: 'tense' },
    { t: 'fill', pt: 'result', l: 1, p: 'I ___ (finish) my homework. Can I go out now?', a: 'have finished', am: 'finished', w: { 'have been finishing': 'result', 'am finishing': 'result' }, e: 'result' },
    { t: 'build', pt: 'duration', l: 1, a: 'We have been living here since May.', x: ['are'], e: 'tense' },
    { t: 'build', pt: 'evidence', l: 1, a: 'Have you been running?', x: ['did'], e: 'evidence' },
    { t: 'build', pt: 'howlong', l: 1, a: 'How long has she been working here?', x: ['is'], e: 'tense' },

    // ---------- Use
    { t: 'fill', pt: 'result', l: 2, p: "I ___ (paint) the kitchen all morning, and it isn't finished yet.", a: 'have been painting', w: { 'have painted': 'result', painted: 'result', 'am painting': 'tense' }, e: 'result' },
    { t: 'fill', pt: 'result', l: 2, p: 'I ___ (paint) the kitchen. Come and see — it looks great!', a: 'have painted', am: 'painted', w: { 'have been painting': 'result', 'am painting': 'result' }, e: 'result' },
    { t: 'fill', pt: 'count', l: 2, p: 'How many pages ___ you ___ (read) so far?', a: 'have|read', w: { 'have|been reading': 'count', 'did|read': 'pp:period-ps' }, e: 'count' },
    { t: 'fill', pt: 'howlong', l: 2, p: 'How long ___ you ___ (read) that book? You started it in June!', a: 'have|been reading', w: { 'are|reading': 'tense', 'do|read': 'tense' }, e: 'tense' },
    { t: 'fill', pt: 'stative', l: 2, p: 'She ___ (not / like) her job since the new boss came.', a: "hasn't liked", w: { "hasn't been liking": 'stative', "doesn't like": 'tense', "didn't like": 'tense' }, e: 'stative' },
    { t: 'fill', pt: 'evidence', l: 2, p: 'The ground is wet. It ___ (rain).', a: 'has been raining', am: 'rained', w: { 'is raining': 'evidence', rains: 'evidence' }, e: 'evidence' },
    { t: 'fill', pt: 'duration', l: 2, p: "I'm so tired. I ___ (not / sleep) well lately.", a: ["haven't been sleeping", "haven't slept"], w: { "don't sleep": 'tense', "am not sleeping": 'tense', "didn't sleep": 'tense' }, e: 'tense' },
    { t: 'fill', pt: 'duration', l: 2, p: '___ she ___ (feel) better since the operation?', a: ['Has|been feeling', 'Has|felt'], w: { 'Is|feeling': 'tense', 'Does|feel': 'tense', 'Has|feeling': 'form' }, e: 'tense' },
    { t: 'build', pt: 'result', l: 2, a: 'I have been cleaning the house all day.', x: ['cleaned'], e: 'result' },
    { t: 'fix', pt: 'form', l: 2, p: 'I have been work here since 2022.', a: ['I have been working here since 2022.'], e: 'form' },
    { t: 'fix', pt: 'duration', l: 2, p: "I am waiting for you since 6 o'clock!", a: ["I have been waiting for you since 6 o'clock!", "I've been waiting for you since six o'clock!"], e: 'tense' },
    { t: 'fix', pt: 'stative', l: 2, p: 'I have been knowing him for ages.', a: ['I have known him for ages.'], e: 'stative' },
    { t: 'fix', pt: 'count', l: 2, p: 'She has been writing three reports today.', a: ['She has written three reports today.'], e: 'count' },
    { t: 'tr', pt: 'duration', l: 2, i: 'One sentence with *for* and *have been + -ing*.', p: "I started cooking two hours ago. I'm still cooking.", s: 'I', a: ["I've been cooking for two hours.", "I've been cooking for 2 hours."], e: 'tense' },
    { t: 'tr', pt: 'evidence', l: 2, i: 'Ask about the activity that caused it.', p: 'Your hands are covered in paint.', s: 'Have you', a: ['Have you been painting?'], e: 'evidence' },
    { t: 'tl', pt: 'duration', l: 2, uk: 'Ми чекаємо на лікаря вже годину.', ru: 'Мы ждём врача уже час.', a: ["We've been waiting for the doctor for an hour.", "We've been waiting for the doctor for an hour now.", "We've been waiting for the doctor for one hour."], e: 'tense' },
    { t: 'tl', pt: 'evidence', l: 2, uk: 'Чому ти така втомлена? Ти працювала весь день?', ru: 'Почему ты такая уставшая? Ты работала весь день?', a: ['Why are you so tired? Have you been working all day?', 'Why are you so tired? Were you working all day?', 'Why are you so tired? Have you been working the whole day?'], e: 'evidence' },

    // ---------- Pro
    { t: 'fix', pt: 'count', l: 3, p: "I've been reading four books this month.", a: ["I've read four books this month."], e: 'count' },
    { t: 'fix', pt: 'result', l: 3, p: "Look! I've been fixing the faucet — it doesn't drip anymore.", a: ["Look! I've fixed the faucet — it doesn't drip anymore.", "Look! I've fixed the faucet — it doesn't drip any more."], am: ["Look! I fixed the faucet — it doesn't drip anymore."], e: 'result' },
    { t: 'fix', pt: 'stative', l: 3, p: 'How long have you been owning this house?', a: ['How long have you owned this house?', 'How long have you had this house?'], e: 'stative' },
    { t: 'fix', pt: 'duration', l: 3, p: 'My daughter learns piano for three years.', a: ['My daughter has been learning piano for three years.', 'My daughter has been learning the piano for three years.'], e: 'tense' },
    { t: 'tr', pt: 'count', l: 3, i: 'Say how much: use *three chapters*.', p: "I've been reading this book all week.", s: "I've read", a: ["I've read three chapters.", "I've read three chapters this week.", "I've read three chapters of this book.", "I've read three chapters of this book this week.", "I've read three chapters of it."], e: 'count' },
    { t: 'tr', pt: 'howlong', l: 3, i: 'Ask with *How long*.', p: 'He has been driving for Uber since spring.', s: 'How long', a: ['How long has he been driving for Uber?'], e: 'tense' },
    { t: 'tr', pt: 'result', l: 3, i: 'The job is finished now. Rewrite.', p: "We've been packing the boxes for the move.", s: "We've", a: ["We've packed the boxes for the move.", "We've packed all the boxes for the move.", "We've finished packing the boxes for the move."], e: 'result' },
    { t: 'tl', pt: 'duration', l: 3, uk: 'Я шукаю роботу з березня.', ru: 'Я ищу работу с марта.', a: ["I've been looking for a job since March.", "I've been looking for work since March.", "I've been searching for a job since March.", "I've been searching for work since March.", "I've been job hunting since March.", "I've been job-hunting since March."], e: 'tense' },
    { t: 'tl', pt: 'count', l: 3, uk: 'Я вже відправила десять резюме.', ru: 'Я уже отправила десять резюме.', a: ["I've already sent ten resumes.", "I've already sent 10 resumes.", "I've already sent ten résumés.", "I've already sent out ten resumes.", "I've already sent out 10 resumes.", "I've sent ten resumes already.", "I've sent out ten resumes already.", "I've already sent ten CVs."], am: ['I already sent ten resumes.', 'I already sent out ten resumes.'], e: 'count' },
    { t: 'tl', pt: 'stative', l: 3, uk: 'Я знаю свого чоловіка десять років.', ru: 'Я знаю своего мужа десять лет.', a: ["I've known my husband for ten years.", "I've known my husband for 10 years."], e: 'stative' },
    { t: 'tl', pt: 'evidence', l: 3, uk: 'Пахне чудово! Ти щось пекла?', ru: 'Пахнет чудесно! Ты что-то пекла?', a: ['It smells wonderful! Have you been baking?', 'It smells great! Have you been baking?', 'It smells amazing! Have you been baking?', 'It smells wonderful! Have you been baking something?', 'It smells great! Have you been baking something?', 'It smells amazing! Have you been baking something?'], am: ['It smells great! Did you bake something?', 'It smells wonderful! Did you bake something?', 'It smells amazing! Did you bake something?'], e: 'evidence' },
    { t: 'tl', pt: 'result', l: 3, uk: 'Я цілий день прибирала, але ще не закінчила.', ru: 'Я весь день убиралась, но ещё не закончила.', a: ["I've been cleaning all day, but I haven't finished yet.", "I've been cleaning all day, but I'm not done yet.", "I've been cleaning all day, but I'm not finished yet.", "I've been cleaning all day, but I haven't finished.", "I've been cleaning the whole day, but I haven't finished yet.", "I've been cleaning all day, but I still haven't finished."], am: ["I've been cleaning all day, but I didn't finish yet."], e: 'result' },
    { t: 'fill', pt: 'evidence', l: 3, p: '— Why is the floor so wet? — The kids ___ (play) with the hose.', a: ['have been playing', 'were playing'], w: { played: 'evidence', 'are playing': 'evidence', 'have played': 'evidence' }, e: 'evidence' },
    { t: 'fill', pt: 'count', l: 3, p: 'She ___ (call) me four times since lunch. Something must be wrong.', a: 'has called', w: { 'has been calling': 'count', called: 'pp:period-ps', 'is calling': 'tense' }, e: 'count' },
    { t: 'fill', pt: 'stative', l: 3, p: 'I ___ (always / want) to visit the Grand Canyon.', a: 'have always wanted', am: 'always wanted', w: { 'have always been wanting': 'stative', 'always want': 'tense', 'am always wanting': 'stative' }, e: 'stative' },
  ],
});
