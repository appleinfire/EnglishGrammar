APP.addTopic({
  id: 'fperf',
  title: "I'll be working, I'll have finished",
  level: 'B2',
  group: 'Future',
  icon: '🗓️',
  about: 'future continuous and future perfect',
  rule: {
    en: `Three future forms for a **point in the future**:
- **will be + -ing** (Future Continuous) — **in progress** at that moment: *This time tomorrow I'**ll be flying** to Kyiv. Don't call at 8 — we'**ll be eating**.*
- **will have + 3rd form** (Future Perfect) — **finished before** that moment: *By Friday I'**ll have finished** the report. When you get home, I'**ll have already cooked** dinner.*
- **will have been + -ing** — **how long** up to that moment: *In June I'**ll have been working** here for five years.*
- Polite question about someone's plans → **Will you be + -ing?** *Will you be using the car tonight?*
After **when, by the time, before, until, as soon as** use the **present**, not *will*: *By the time you **get** home…* (not *will get*).`,
    uk: `Три форми майбутнього для **конкретного моменту в майбутньому**:
- **will be + -ing** (Future Continuous) — дія **триватиме** в той момент: *This time tomorrow I'**ll be flying** to Kyiv* — «Завтра о цій порі я летітиму до Києва».
- **will have + третя форма** (Future Perfect) — дія **завершиться до** того моменту: *By Friday I'**ll have finished** the report* — «До п'ятниці я вже закінчу звіт».
- **will have been + -ing** — **скільки часу** до того моменту: *In June I'**ll have been working** here for five years* — «У червні буде п'ять років, як я тут працюю».
- Ввічливе питання про чиїсь плани → **Will you be + -ing?** *Will you be using the car tonight?*
Після **when, by the time, before, until, as soon as** — **теперішній** час, не *will*: *By the time you **get** home…* (не *will get*), хоча українською «коли ти **прийдеш**».`,
    ru: `Три формы будущего для **конкретного момента в будущем**:
- **will be + -ing** (Future Continuous) — действие **будет длиться** в тот момент: *This time tomorrow I'**ll be flying** to Kyiv* — «Завтра в это время я буду лететь в Киев».
- **will have + третья форма** (Future Perfect) — действие **закончится до** того момента: *By Friday I'**ll have finished** the report* — «К пятнице я уже закончу отчёт».
- **will have been + -ing** — **сколько времени** до того момента: *In June I'**ll have been working** here for five years* — «В июне будет пять лет, как я здесь работаю».
- Вежливый вопрос о чьих-то планах → **Will you be + -ing?** *Will you be using the car tonight?*
После **when, by the time, before, until, as soon as** — **настоящее** время, не *will*: *By the time you **get** home…* (не *will get*), хотя по-русски «когда ты **придёшь**».`,
  },
  examples: ["This time tomorrow I'll be flying to Kyiv.", "By Friday I'll have finished the report.", "In June I'll have been working here for five years.", 'Will you be using the car tonight?', "By the time you get home, I'll have cooked dinner."],
  trap: {
    uk: 'Коли ти прийдеш, я вже приготую вечерю.',
    ru: 'Когда ты придёшь, я уже приготовлю ужин.',
    wrong: 'When you will come, I will already cook dinner.',
    right: "When you come, I'll have already cooked dinner.",
    note: {
      en: 'Two traps: after *when* there is no *will* (*when you come*), and "already finished by then" needs **will have + 3rd form**.',
      uk: 'Дві пастки: після *when* немає *will* (*when you come*), а «вже буде зроблено до того моменту» — це **will have + третя форма**.',
      ru: 'Две ловушки: после *when* нет *will* (*when you come*), а «уже будет сделано к тому моменту» — это **will have + третья форма**.',
    },
  },
  errors: {
    cont: {
      en: 'In progress at a moment in the future → **will be + -ing**: *This time tomorrow I\'ll be flying. At 8 we\'ll be eating.*',
      uk: 'Дія триватиме в певний момент у майбутньому → **will be + -ing**: *This time tomorrow I\'ll be flying. At 8 we\'ll be eating.*',
      ru: 'Действие будет длиться в определённый момент в будущем → **will be + -ing**: *This time tomorrow I\'ll be flying. At 8 we\'ll be eating.*',
    },
    perf: {
      en: 'Finished **before** a moment in the future (*by Friday, by then, by the time…*) → **will have + 3rd form**: *By Friday I\'ll have finished.*',
      uk: 'Завершиться **до** певного моменту в майбутньому (*by Friday, by then, by the time…*) → **will have + третя форма**: *By Friday I\'ll have finished.*',
      ru: 'Закончится **до** определённого момента в будущем (*by Friday, by then, by the time…*) → **will have + третья форма**: *By Friday I\'ll have finished.*',
    },
    pcont: {
      en: 'How long something will have lasted by a future moment → **will have been + -ing** + *for*: *In June I\'ll have been working here for five years.*',
      uk: 'Скільки часу триватиме дія до певного моменту → **will have been + -ing** + *for*: *In June I\'ll have been working here for five years.*',
      ru: 'Сколько времени будет длиться действие к определённому моменту → **will have been + -ing** + *for*: *In June I\'ll have been working here for five years.*',
    },
    time: {
      en: 'After **when, by the time, before, until, as soon as, after** use the **present** (or present perfect), not *will*: *as soon as I land, by the time you get home.*',
      uk: 'Після **when, by the time, before, until, as soon as, after** — **теперішній** час (або present perfect), не *will*: *as soon as I land, by the time you get home.*',
      ru: 'После **when, by the time, before, until, as soon as, after** — **настоящее** время (или present perfect), не *will*: *as soon as I land, by the time you get home.*',
    },
    form: {
      en: 'Forms: **will be + -ing**, **will have + 3rd form**, **will have been + -ing**. After *will* always **have**, not *has* or *had*; the 3rd form, not the 2nd: *will have gone*, not *will have went*.',
      uk: 'Форми: **will be + -ing**, **will have + третя форма**, **will have been + -ing**. Після *will* завжди **have**, не *has* і не *had*; третя форма, не друга: *will have gone*, не *will have went*.',
      ru: 'Формы: **will be + -ing**, **will have + третья форма**, **will have been + -ing**. После *will* всегда **have**, не *has* и не *had*; третья форма, не вторая: *will have gone*, не *will have went*.',
    },
    plans: {
      en: 'To ask politely about someone\'s plans → **Will you be + -ing?** *Will you be using the car tonight?* (*Will you use…?* sounds like a request.)',
      uk: 'Щоб ввічливо запитати про чиїсь плани → **Will you be + -ing?** *Will you be using the car tonight?* (*Will you use…?* звучить як прохання.)',
      ru: 'Чтобы вежливо спросить о чьих-то планах → **Will you be + -ing?** *Will you be using the car tonight?* (*Will you use…?* звучит как просьба.)',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'cont', l: 1, p: "This time tomorrow I ___ to Kyiv.", a: 'will be flying', o: ['will fly', 'fly'], w: { 'will fly': 'cont', fly: 'cont' }, e: 'cont' },
    { t: 'choose', pt: 'perf', l: 1, p: 'Hurry up! By the time we get there, the movie will ___.', a: 'have started', o: ['start', 'started'], w: { start: 'perf', started: 'form' }, e: 'perf' },
    { t: 'choose', pt: 'time', l: 1, p: "By the time you ___ home, I'll have cooked dinner.", a: 'get', o: ['will get', 'will have got'], w: { 'will get': 'time', 'will have got': 'time' }, e: 'time' },
    { t: 'choose', pt: 'pcont', l: 1, p: 'In June I ___ here for five years.', a: 'will have been working', o: ['will work', 'will be working'], w: { 'will work': 'pcont', 'will be working': 'pcont' }, e: 'pcont' },
    { t: 'choose', pt: 'plans', l: 1, p: '___ you be using the car tonight?', a: 'Will', o: ['Do', 'Are'], w: { Do: 'plans', Are: 'plans' }, e: 'plans' },
    { t: 'choose', pt: 'perf', l: 1, p: 'By next week the doctor will ___ the test results.', a: 'have seen', o: ['has seen', 'had seen'], w: { 'has seen': 'form', 'had seen': 'form' }, e: 'form' },
    { t: 'fill', pt: 'cont', l: 1, p: "At 10 a.m. tomorrow I'll ___ (sit) in a job interview, so I can't talk.", a: 'be sitting', w: { sit: 'cont', sitting: 'form' }, e: 'cont' },
    { t: 'fill', pt: 'perf', l: 1, p: "Don't come at six. By six I'll already ___ (leave) the office.", a: 'have left', w: { leave: 'perf', left: 'form', 'had left': 'form' }, e: 'perf' },
    { t: 'fill', pt: 'time', l: 1, p: "I'll call you as soon as I ___ (land).", a: ['land', 'have landed'], w: { 'will land': 'time', 'will have landed': 'time' }, e: 'time' },
    { t: 'fill', pt: 'pcont', l: 1, p: 'By next month, she ___ (work) at the hospital for ten years.', a: ['will have been working', 'will have worked'], w: { 'will work': 'pcont', 'will be working': 'pcont', works: 'pcont' }, e: 'pcont' },
    { t: 'fill', pt: 'plans', l: 1, p: '___ you ___ (use) the printer this afternoon? I need to print a form.', a: 'Will|be using', w: { 'Will|use': 'plans', 'Do|use': 'plans' }, e: 'plans' },
    { t: 'fill', pt: 'perf', l: 1, p: "Don't wait for me. By the time you read this, I'll have ___ (go).", a: 'gone', w: { went: 'form', go: 'form' }, e: 'form' },
    { t: 'fill', pt: 'cont', l: 1, p: "Don't visit at seven — we'll ___ (eat) dinner.", a: 'be eating', w: { eat: 'cont', eating: 'form' }, e: 'cont' },
    { t: 'build', pt: 'cont', l: 1, a: 'This time next week I will be lying on a beach.', x: ['lie'], e: 'cont' },
    { t: 'build', pt: 'perf', l: 1, a: 'By the end of the year we will have paid off the car.', x: ['had'], e: 'perf' },
    { t: 'build', pt: 'time', l: 1, a: 'I will text you when I get home.', x: ['got'], e: 'time' },

    // ---------- Use
    { t: 'fill', pt: 'time', l: 2, p: "Before you ___ (leave), I'll have packed your lunch.", a: 'leave', w: { 'will leave': 'time', 'will have left': 'time' }, e: 'time' },
    { t: 'fill', pt: 'pcont', l: 2, p: 'When she retires next year, she ___ (teach) for 35 years.', a: ['will have been teaching', 'will have taught'], w: { 'will teach': 'pcont', 'will be teaching': 'pcont', teaches: 'pcont' }, e: 'pcont' },
    { t: 'fill', pt: 'perf', l: 2, p: "Don't worry — by the time the guests arrive, I ___ (clean) the whole apartment.", a: 'will have cleaned', w: { 'will clean': 'perf', clean: 'perf', 'will have clean': 'form' }, e: 'perf' },
    { t: 'fill', pt: 'cont', l: 2, p: "I can't pick you up at five. I ___ (drive) my son to soccer practice.", a: ['will be driving', 'am driving', 'am going to be driving'], w: { 'will drive': 'cont', drive: 'cont' }, e: 'cont' },
    { t: 'fill', pt: 'plans', l: 2, p: "___ (you / come) to the party on Saturday? I'm making the list.", a: ['Will you be coming', 'Are you coming'], w: { 'Will you come': 'plans', 'Do you come': 'plans' }, e: 'plans' },
    { t: 'fill', pt: 'pcont', l: 2, p: "Next March we'll have ___ (be) married for ten years.", a: 'been', w: { was: 'form', be: 'form', being: 'form' }, e: 'form' },
    { t: 'fill', pt: 'time', l: 2, p: "We won't start dinner until you ___ (get) here.", a: 'get', w: { 'will get': 'time' }, e: 'time' },
    { t: 'build', pt: 'pcont', l: 2, a: 'By August I will have been living in Texas for four years.', x: ['since'], e: 'pcont' },
    { t: 'build', pt: 'plans', l: 2, a: 'Will you be using the car tonight?', x: ['do'], e: 'plans' },
    { t: 'fix', pt: 'time', l: 2, p: 'Text me when you will be at the airport.', a: ["Text me when you're at the airport.", 'Text me when you get to the airport.'], e: 'time' },
    { t: 'fix', pt: 'perf', l: 2, p: 'By Monday I will have wrote the whole report.', a: ['By Monday I will have written the whole report.'], e: 'form' },
    { t: 'fix', pt: 'perf', l: 2, p: 'By the time you get here, we will eat everything.', a: ['By the time you get here, we will have eaten everything.', "By the time you get here, we'll have eaten everything."], e: 'perf' },
    { t: 'fix', pt: 'cont', l: 2, p: 'This time tomorrow I will sit on a plane to Kyiv.', a: ['This time tomorrow I will be sitting on a plane to Kyiv.'], e: 'cont' },
    { t: 'tr', pt: 'perf', l: 2, i: 'Say what will be finished. Use *will have + 3rd form*.', p: 'My shift ends at 7. At 8 I will be free.', s: 'By 8', a: ['By 8 I will have finished my shift.', 'By 8 my shift will have ended.', 'By 8 I will have finished work.', 'By 8 my shift will have finished.'], e: 'perf' },
    { t: 'tr', pt: 'pcont', l: 2, i: 'Say how long by then. Use *will have been + -ing*.', p: 'She started driving for Uber in 2023. Next year it will be three years.', s: 'Next year', a: ['Next year she will have been driving for Uber for three years.', 'Next year she will have been driving for Uber for 3 years.'], e: 'pcont' },
    { t: 'tl', pt: 'cont', l: 2, uk: 'Завтра о цій порі я летітиму до Києва.', ru: 'Завтра в это время я буду лететь в Киев.', a: ['This time tomorrow I will be flying to Kyiv.', 'At this time tomorrow I will be flying to Kyiv.', 'Tomorrow at this time I will be flying to Kyiv.', 'This time tomorrow I will be on my way to Kyiv.', 'This time tomorrow I will be on a plane to Kyiv.'], e: 'cont' },
    { t: 'tl', pt: 'time', l: 2, uk: 'Я подзвоню тобі, коли приїду.', ru: 'Я позвоню тебе, когда приеду.', a: ['I will call you when I arrive.', 'I will call you when I get there.', 'I will call you when I get here.', 'I will call you when I get in.', 'I will give you a call when I arrive.', 'I will give you a call when I get there.'], e: 'time' },

    // ---------- Pro
    { t: 'fix', pt: 'pcont', l: 3, p: 'By June I will work here for five years.', a: ['By June I will have been working here for five years.', 'By June I will have worked here for five years.'], e: 'pcont' },
    { t: 'fix', pt: 'time', l: 3, p: 'By the time he will finish college, he will have saved enough money.', a: ['By the time he finishes college, he will have saved enough money.', "By the time he finishes college, he'll have saved enough money."], e: 'time' },
    { t: 'fix', pt: 'plans', l: 3, p: 'Do you use the car tonight? I need it for work.', a: ['Will you be using the car tonight? I need it for work.', 'Are you using the car tonight? I need it for work.', 'Are you going to use the car tonight? I need it for work.'], e: 'plans' },
    { t: 'fix', pt: 'perf', l: 3, p: 'Call me at noon — the doctor will has seen the results by then.', a: ['Call me at noon — the doctor will have seen the results by then.'], e: 'form' },
    { t: 'tr', pt: 'cont', l: 3, i: 'Say what she will be in the middle of doing. Use *will be + -ing*.', p: 'Every night at 9, Mom watches her favorite show. Tonight will be the same.', s: 'At 9 tonight Mom', a: ['At 9 tonight Mom will be watching her favorite show.', 'At 9 tonight Mom will be watching her show.'], e: 'cont' },
    { t: 'tr', pt: 'plans', l: 3, i: 'Ask politely about her plans. Use *Will you be + -ing?*', p: 'Ask your neighbor if she is going to use her parking spot this weekend.', s: 'Will you', a: ['Will you be using your parking spot this weekend?', 'Will you be using your spot this weekend?'], e: 'plans' },
    { t: 'tr', pt: 'time', l: 3, i: 'Join the sentences with *as soon as*.', p: 'I will get the results. Then I will call you.', s: 'I will call you', a: ['I will call you as soon as I get the results.', 'I will call you as soon as I have the results.', 'I will call you as soon as I have gotten the results.', 'I will call you as soon as I have got the results.'], e: 'time' },
    {
      t: 'tl', pt: 'perf', l: 3, uk: 'Коли ти прийдеш, я вже приготую вечерю.', ru: 'Когда ты придёшь, я уже приготовлю ужин.',
      a: ['When you come', 'When you get here', 'When you get home', 'By the time you come', 'By the time you get here', 'By the time you get home'].flatMap((w) =>
        ['I will have already cooked dinner', 'I will already have cooked dinner', 'I will have already made dinner', 'I will already have made dinner', 'I will have cooked dinner already', 'I will have made dinner already'].map((m) => `${w}, ${m}.`)),
      e: 'perf',
    },
    {
      t: 'tl', pt: 'pcont', l: 3, uk: 'У вересні буде п’ять років, як ми живемо в Америці.', ru: 'В сентябре будет пять лет, как мы живём в Америке.',
      a: ['In September', 'By September'].flatMap((w) => ['America', 'the US', 'the States', 'the United States', 'the U.S.'].flatMap((c) => [
        `${w} we will have been living in ${c} for five years.`, `${w} we will have lived in ${c} for five years.`,
        `${w} we will have been living in ${c} for 5 years.`, `${w} we will have lived in ${c} for 5 years.`,
      ])).concat(['America', 'the US', 'the States'].map((c) => `In September it will be five years since we moved to ${c}.`)),
      e: 'pcont',
    },
    {
      t: 'tl', pt: 'plans', l: 3, uk: 'Ти будеш користуватися ноутбуком увечері?', ru: 'Ты будешь пользоваться ноутбуком вечером?',
      a: ['Will you be using', 'Are you using', 'Are you going to use', 'Are you going to be using'].flatMap((v) => ['the laptop', 'your laptop'].flatMap((n) => ['tonight', 'this evening'].map((t) => `${v} ${n} ${t}?`))),
      e: 'plans',
    },
    { t: 'fill', pt: 'perf', l: 3, p: 'By the time the kids wake up, I ___ (already / leave) for work.', a: ['will have already left', 'will already have left'], w: { 'will already leave': 'perf', 'already left': 'perf', 'will have already leaved': 'form' }, e: 'perf' },
    { t: 'fill', pt: 'time', l: 3, p: "The doctor won't call you until the lab ___ (send) the results.", a: ['sends', 'has sent'], w: { 'will send': 'time', 'will have sent': 'time' }, e: 'time' },
    { t: 'fill', pt: 'cont', l: 3, p: "Try not to call after nine — the baby ___ (sleep).", a: ['will be sleeping', 'is going to be sleeping'], w: { 'will sleep': 'cont', sleeps: 'cont' }, e: 'cont' },
    { t: 'choose', pt: 'pcont', l: 3, p: 'By the time we finally get to the front of the line, we ___ for over two hours.', a: 'will have been waiting', o: ['will wait', 'will be waiting'], w: { 'will wait': 'pcont', 'will be waiting': 'pcont' }, e: 'pcont' },
    { t: 'fill', pt: 'pcont', l: 3, p: 'Next month my parents will have ___ (know) each other for forty years.', a: 'known', w: { knew: 'form', knowed: 'form', know: 'form' }, e: 'form' },
    { t: 'fill', pt: 'plans', l: 3, p: "___ (you / need) the kitchen tomorrow morning? I'd like to bake a cake.", a: ['Will you be needing', 'Will you need', 'Do you need'], w: { 'Are you need': 'plans', 'Will you needing': 'form' }, e: 'plans' },
  ],
});
