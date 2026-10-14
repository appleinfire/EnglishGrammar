APP.addTopic({
  id: 'pres',
  title: 'Present Simple or Continuous?',
  level: 'A2',
  group: 'Tenses',
  icon: '🔁',
  about: 'I work / I\'m working; know, need, like',
  rule: {
    en: `- **Present Simple** — routines, facts, things that are usually true: *I work at a hospital. She doesn't drink coffee. The bus leaves at 7:40.* With *usually, often, every day, never*.
  *he / she / it* → verb **+ s**: *works, goes, costs*. Questions and negatives with **do / does**.
- **Present Continuous** — **am / is / are + -ing**: happening **now** or **around now**, temporary: *Shh, the baby's sleeping. I'm driving right now. This week I'm working from home.*
- Verbs of **state** stay simple even now: *know, understand, like, love, want, need, believe, remember, own, belong, mean*: *I know. I need a charger.*
- **What do you do?** = What's your job? **What are you doing?** = right now.
Don't mix the two forms: *I work* or *I'm working* — never *I am work*.`,
    uk: `- **Present Simple** — звички, факти, те, що зазвичай правда: *I work at a hospital. She doesn't drink coffee. The bus leaves at 7:40.* Зі словами *usually, often, every day, never*.
  *he / she / it* → дієслово **+ s**: *works, goes, costs*. Питання й заперечення — з **do / does**.
- **Present Continuous** — **am / is / are + -ing**: відбувається **зараз** або **в цей період**, тимчасово: *Shh, the baby's sleeping. I'm driving right now. This week I'm working from home.*
- Дієслова **стану** не вживаємо з -ing навіть зараз: *know, understand, like, love, want, need, believe, remember, own, belong, mean*: *I know. I need a charger.*
- **What do you do?** = Ким ви працюєте? **What are you doing?** = Що ви робите зараз?
Не змішуйте форми: *I work* або *I'm working* — ніколи *I am work*.`,
    ru: `- **Present Simple** — привычки, факты, то, что обычно верно: *I work at a hospital. She doesn't drink coffee. The bus leaves at 7:40.* Со словами *usually, often, every day, never*.
  *he / she / it* → глагол **+ s**: *works, goes, costs*. Вопросы и отрицания — с **do / does**.
- **Present Continuous** — **am / is / are + -ing**: происходит **сейчас** или **в этот период**, временно: *Shh, the baby's sleeping. I'm driving right now. This week I'm working from home.*
- Глаголы **состояния** не используем с -ing даже сейчас: *know, understand, like, love, want, need, believe, remember, own, belong, mean*: *I know. I need a charger.*
- **What do you do?** = Кем вы работаете? **What are you doing?** = Что вы делаете сейчас?
Не смешивайте формы: *I work* или *I'm working* — никогда *I am work*.`,
  },
  examples: ['My husband works at a hospital.', "Shh! The baby's sleeping.", 'I usually walk to work, but today I\'m taking a taxi.', "I don't remember his name.", 'What do you do? — I\'m a nurse.'],
  trap: {
    uk: 'Я працюю в аптеці.',
    ru: 'Я работаю в аптеке.',
    wrong: 'I am work at a pharmacy.',
    right: 'I work at a pharmacy.',
    note: {
      en: 'Ukrainian and Russian have one present tense. English has two, and they never mix: *I work* (usually) or *I\'m working* (now). *I am work* is neither.',
      uk: 'В українській один теперішній час. В англійській два, і вони не змішуються: *I work* (зазвичай) або *I\'m working* (зараз). *I am work* — ні те, ні інше.',
      ru: 'В русском одно настоящее время. В английском два, и они не смешиваются: *I work* (обычно) или *I\'m working* (сейчас). *I am work* — ни то, ни другое.',
    },
  },
  errors: {
    habit: {
      en: 'A routine, a habit, a fact, a timetable (*usually, every day, often, How often…?*) → **Present Simple**: *We usually go to the park on Sundays.*',
      uk: 'Звичка, розпорядок, факт, розклад (*usually, every day, often, How often…?*) → **Present Simple**: *We usually go to the park on Sundays.*',
      ru: 'Привычка, распорядок, факт, расписание (*usually, every day, often, How often…?*) → **Present Simple**: *We usually go to the park on Sundays.*',
    },
    now: {
      en: 'Happening **now** (*now, right now, at the moment, Look!, Listen!*) → **am / is / are + -ing**: *Look! It\'s snowing. I\'m driving.*',
      uk: 'Відбувається **зараз** (*now, right now, at the moment, Look!, Listen!*) → **am / is / are + -ing**: *Look! It\'s snowing. I\'m driving.*',
      ru: 'Происходит **сейчас** (*now, right now, at the moment, Look!, Listen!*) → **am / is / are + -ing**: *Look! It\'s snowing. I\'m driving.*',
    },
    state: {
      en: 'Verbs of state — *know, understand, like, want, need, believe, remember, have* (= own), *belong, taste, mean* — stay **simple**, even right now: *I understand. We have two cars.*',
      uk: 'Дієслова стану — *know, understand, like, want, need, believe, remember, have* (= мати), *belong, taste, mean* — у **простій** формі навіть зараз: *I understand. We have two cars.*',
      ru: 'Глаголы состояния — *know, understand, like, want, need, believe, remember, have* (= иметь), *belong, taste, mean* — в **простой** форме даже сейчас: *I understand. We have two cars.*',
    },
    's-ending': {
      en: '*he / she / it / my husband / the bus* → verb **+ s**: *she works, it costs, the store opens*. Negative and question: *doesn\'t / does + verb* (no *s*).',
      uk: '*he / she / it / my husband / the bus* → дієслово **+ s**: *she works, it costs, the store opens*. Заперечення й питання: *doesn\'t / does + дієслово* (без *s*).',
      ru: '*he / she / it / my husband / the bus* → глагол **+ s**: *she works, it costs, the store opens*. Отрицание и вопрос: *doesn\'t / does + глагол* (без *s*).',
    },
    'be-ing': {
      en: 'Two forms, never mixed: **I work** (no *am*) or **I\'m working** (*am* + *-ing*). Not *I am work*, not *I working*.',
      uk: 'Дві форми, які не змішуються: **I work** (без *am*) або **I\'m working** (*am* + *-ing*). Не *I am work* і не *I working*.',
      ru: 'Две формы, которые не смешиваются: **I work** (без *am*) или **I\'m working** (*am* + *-ing*). Не *I am work* и не *I working*.',
    },
    temporary: {
      en: 'Something **temporary**, true only for now (*this week, these days, this month, until…*) → **am / is / are + -ing**: *I\'m staying with my sister this week.*',
      uk: 'Щось **тимчасове**, лише на цей період (*this week, these days, this month, until…*) → **am / is / are + -ing**: *I\'m staying with my sister this week.*',
      ru: 'Что-то **временное**, только на этот период (*this week, these days, this month, until…*) → **am / is / are + -ing**: *I\'m staying with my sister this week.*',
    },
    job: {
      en: '**What do you do?** asks about your job. **What are you doing?** asks what you are doing right now.',
      uk: '**What do you do?** — про роботу, професію. **What are you doing?** — що ви робите саме зараз.',
      ru: '**What do you do?** — о работе, профессии. **What are you doing?** — что вы делаете прямо сейчас.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'habit', l: 1, p: 'My husband ___ at a hospital.', a: 'works', o: ['working', 'is work'], w: { working: 'be-ing', 'is work': 'be-ing' }, e: 'habit' },
    { t: 'choose', pt: 'now', l: 1, p: 'Shh! The baby ___.', a: 'is sleeping', o: ['sleeps', 'sleeping'], w: { sleeps: 'now', sleeping: 'be-ing' }, e: 'now' },
    { t: 'choose', pt: 'state', l: 1, p: 'I ___ what you mean.', a: 'understand', o: ['am understanding', 'understanding'], w: { 'am understanding': 'state', understanding: 'be-ing' }, e: 'state' },
    { t: 'choose', pt: 's-ending', l: 1, p: 'She ___ coffee in the morning.', a: "doesn't drink", o: ["don't drink", "isn't drink"], w: { "don't drink": 's-ending', "isn't drink": 'be-ing' }, e: 's-ending' },
    { t: 'choose', pt: 'job', l: 1, p: "What ___? — I'm a nurse.", a: 'do you do', o: ['are you doing', 'you do'], w: { 'are you doing': 'job', 'you do': 'q:no-aux' }, e: 'job' },
    { t: 'choose', pt: 'temporary', l: 1, p: 'I ___ with my sister this week.', a: 'am staying', o: ['stay', 'stays'], w: { stay: 'temporary', stays: 's-ending' }, e: 'temporary' },
    { t: 'fill', pt: 'habit', l: 1, p: 'We usually ___ (go) to the park on Sundays.', a: 'go', w: { 'are going': 'habit', goes: 's-ending' }, e: 'habit' },
    { t: 'fill', pt: 'now', l: 1, p: 'Look! It ___ (snow)!', a: 'is snowing', w: { snows: 'now', snowing: 'be-ing' }, e: 'now' },
    { t: 'fill', pt: 's-ending', l: 1, p: 'The bus ___ (leave) at 7:40 every morning.', a: 'leaves', w: { leave: 's-ending', 'is leaving': 'habit' }, e: 's-ending' },
    { t: 'fill', pt: 'state', l: 1, p: 'I ___ (need) a new phone charger.', a: 'need', w: { 'am needing': 'state', needs: 's-ending' }, e: 'state' },
    { t: 'fill', pt: 'now', l: 1, p: 'Can you call back later? I ___ (drive) right now.', a: 'am driving', w: { drive: 'now', driving: 'be-ing' }, e: 'now' },
    { t: 'fill', pt: 's-ending', l: 1, p: 'My son ___ (not / like) vegetables.', a: "doesn't like", w: { "isn't liking": 'state', "don't like": 's-ending', "doesn't likes": 'q:does-s' }, e: 's-ending' },
    { t: 'fill', pt: 'habit', l: 1, p: '___ you ___ (work) on weekends?', a: 'Do|work', w: { 'Do|working': 'be-ing', 'Does|work': 's-ending' }, e: 'habit' },
    { t: 'fill', pt: 'temporary', l: 1, p: 'These days I ___ (learn) to drive.', a: 'am learning', w: { learn: 'temporary', learning: 'be-ing' }, e: 'temporary' },
    { t: 'build', pt: 'now', l: 1, a: 'What are you doing right now?', x: ['do'], e: 'now' },
    { t: 'build', pt: 'habit', l: 1, a: 'She usually takes the bus to work.', x: ['is'], e: 'habit' },
    { t: 'build', pt: 'state', l: 1, a: "I don't know the answer.", x: ['am'], e: 'state' },

    // ---------- Use
    { t: 'fill', pt: 'now', l: 2, p: 'I usually ___ (walk) to work, but today I ___ (take) a taxi.', a: 'walk|am taking', w: { 'am walking|take': 'habit', 'walk|take': 'now', 'walks|am taking': 's-ending' }, e: 'now' },
    { t: 'fill', pt: 'now', l: 2, p: 'What ___ you ___ (do)? You look so busy!', a: 'are|doing', w: { 'do|do': 'now' }, e: 'now' },
    { t: 'fill', pt: 'state', l: 2, p: 'This soup ___ (taste) amazing!', a: 'tastes', w: { 'is tasting': 'state', taste: 's-ending' }, e: 'state' },
    { t: 'fill', pt: 's-ending', l: 2, p: 'Where ___ your daughter ___ (go) to school?', a: 'does|go', w: { 'do|go': 's-ending', 'does|goes': 'q:does-s', 'is|going': 'habit' }, e: 's-ending' },
    { t: 'fill', pt: 'temporary', l: 2, p: 'My sister ___ (stay) with us until she finds an apartment.', a: 'is staying', w: { stays: 'temporary', stay: 's-ending' }, e: 'temporary' },
    { t: 'fill', pt: 'now', l: 2, p: "Why ___ you ___ (wear) a coat? It's 30 degrees outside!", a: 'are|wearing', w: { 'do|wear': 'now' }, e: 'now' },
    { t: 'fill', pt: 'habit', l: 2, p: 'How often ___ she ___ (call) you?', a: 'does|call', w: { 'is|calling': 'habit', 'do|call': 's-ending' }, e: 'habit' },
    { t: 'fill', pt: 'state', l: 2, p: 'Do you ___ (want) some tea?', a: 'want', w: { wanting: 'state', wants: 'q:does-s' }, e: 'state' },
    { t: 'build', pt: 'job', l: 2, a: 'What do you do for a living?', x: ['are'], e: 'job' },
    { t: 'fix', pt: 'habit', l: 2, p: 'I am work at a pharmacy.', a: ['I work at a pharmacy.', "I'm working at a pharmacy."], e: 'be-ing' },
    { t: 'fix', pt: 's-ending', l: 2, p: 'My husband speak three languages.', a: ['My husband speaks three languages.'], e: 's-ending' },
    { t: 'fix', pt: 'state', l: 2, p: "I'm not believing this story.", a: ["I don't believe this story."], e: 'state' },
    { t: 'fix', pt: 'now', l: 2, p: 'Listen! Somebody knocks on the door.', a: ['Listen! Somebody is knocking on the door.', 'Listen! Someone is knocking on the door.'], e: 'now' },
    { t: 'tr', pt: 'now', l: 2, i: "It's happening now. Use *right now*.", p: 'I cook dinner.', s: 'I', a: ["I'm cooking dinner right now.", "Right now I'm cooking dinner."], e: 'now' },
    { t: 'tr', pt: 'job', l: 2, i: 'Ask what her job is.', p: "She's a pharmacist.", s: 'What', a: ['What does she do?', 'What does she do for a living?', 'What is her job?'], e: 'job' },
    { t: 'tl', pt: 'habit', l: 2, uk: 'Я зазвичай прокидаюся о шостій.', ru: 'Я обычно просыпаюсь в шесть.', a: ['I usually wake up at six.', 'I usually get up at six.', 'I usually wake up at 6.', 'I usually get up at 6.', "I usually wake up at six o'clock.", "I usually get up at six o'clock.", 'Usually I wake up at six.', 'I normally wake up at six.'], e: 'habit' },
    { t: 'tl', pt: 'now', l: 2, uk: 'Не можу говорити, я за кермом.', ru: 'Не могу говорить, я за рулём.', a: ["I can't talk, I'm driving.", "I can't talk right now, I'm driving.", "I can't talk now, I'm driving.", "I can't speak, I'm driving.", "I can't talk, I'm driving right now."], e: 'now' },

    // ---------- Pro
    { t: 'fix', pt: 'temporary', l: 3, p: 'This month I work nights, so I sleep during the day.', a: ["This month I'm working nights, so I'm sleeping during the day.", "This month I'm working nights, so I sleep during the day."], e: 'temporary' },
    { t: 'fix', pt: 'now', l: 3, p: 'What do you do now? Can I call you later?', a: ['What are you doing now? Can I call you later?', 'What are you doing right now? Can I call you later?'], e: 'job' },
    { t: 'fix', pt: 'state', l: 3, p: 'We are having two cars.', a: ['We have two cars.', "We've got two cars."], e: 'state' },
    { t: 'fix', pt: 's-ending', l: 3, p: 'The pharmacy open at nine on Saturdays.', a: ['The pharmacy opens at nine on Saturdays.', 'The pharmacy opens at 9 on Saturdays.'], e: 's-ending' },
    { t: 'tr', pt: 'temporary', l: 3, i: "It's only for now. Use *These days*.", p: 'My husband works from home.', s: 'These days', a: ['These days my husband is working from home.'], e: 'temporary' },
    { t: 'tr', pt: 'habit', l: 3, i: 'Make it negative.', p: 'Our son watches TV in the morning.', s: 'Our son', a: ["Our son doesn't watch TV in the morning."], e: 's-ending' },
    { t: 'tr', pt: 'habit', l: 3, i: 'Ask with *How often*.', p: 'I go to the dentist twice a year.', s: 'How often', a: ['How often do you go to the dentist?'], e: 'habit' },
    { t: 'tl', pt: 'state', l: 3, uk: "Я не пам'ятаю його ім'я.", ru: 'Я не помню его имя.', a: ["I don't remember his name.", "I can't remember his name."], e: 'state' },
    { t: 'tl', pt: 'temporary', l: 3, uk: 'Цього тижня я працюю з дому.', ru: 'На этой неделе я работаю из дома.', a: ["This week I'm working from home.", "I'm working from home this week.", "This week I'm working at home.", "I'm working at home this week."], e: 'temporary' },
    { t: 'tl', pt: 'job', l: 3, uk: 'Ким ти працюєш?', ru: 'Кем ты работаешь?', a: ['What do you do?', 'What do you do for a living?', "What's your job?", 'What do you do for work?', 'What kind of work do you do?'], e: 'job' },
    { t: 'tl', pt: 's-ending', l: 3, uk: 'Моя донька говорить англійською краще за мене.', ru: 'Моя дочь говорит по-английски лучше меня.', a: ['My daughter speaks English better than me.', 'My daughter speaks English better than I do.', 'My daughter speaks better English than me.', 'My daughter speaks better English than I do.'], e: 's-ending' },
    { t: 'tl', pt: 'now', l: 3, uk: 'Подивись, діти грають у снігу!', ru: 'Смотри, дети играют в снегу!', a: ['Look, the kids are playing in the snow!', 'Look, the children are playing in the snow!'], e: 'now' },
    { t: 'fill', pt: 'now', l: 3, p: "— Where's Dad? — He ___ (fix) the sink in the bathroom.", a: 'is fixing', w: { fixes: 'now', fix: 'now' }, e: 'now' },
    { t: 'fill', pt: 'state', l: 3, p: 'This bag ___ (belong) to Maria.', a: 'belongs', w: { 'is belonging': 'state', belong: 's-ending' }, e: 'state' },
    { t: 'fill', pt: 'habit', l: 3, p: 'Water ___ (boil) at 100 degrees Celsius.', a: 'boils', w: { 'is boiling': 'habit', boil: 's-ending' }, e: 'habit' },
  ],
});
