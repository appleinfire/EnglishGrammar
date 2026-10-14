APP.addTopic({
  id: 'past',
  title: 'Past Simple and Past Continuous',
  level: 'A2',
  group: 'Tenses',
  icon: '📼',
  about: 'went, bought; I was cooking when the phone rang',
  rule: {
    en: `- **Past Simple** — finished actions: *We went to the beach. I bought a coat.* Regular verbs + **-ed**; many common verbs are **irregular**: *go → went, buy → bought, see → saw, take → took, leave → left*.
  Questions and negatives: **did / didn't + verb** (no past form): *Did you go? I didn't see him.*
- **was / were**: *I / he / she / it **was**, you / we / they **were***. With *be* there is no *did*: *Were you at work?*
- **Past Continuous** — **was / were + -ing**: an action **in progress** at a moment in the past: *At 8 p.m. I was cooking dinner.*
- Together: a longer action (**was …ing**) interrupted by a short one (**Past Simple**): *I was taking a shower **when** the phone rang.* **While** + the longer action: *While I was driving, my phone rang.*
- *during* + a noun: *during the movie*.
Verbs of state (*know, understand, want*) stay simple: *I didn't know.*`,
    uk: `- **Past Simple** — завершені дії: *We went to the beach. I bought a coat.* Правильні дієслова + **-ed**; багато частих дієслів **неправильні**: *go → went, buy → bought, see → saw, take → took, leave → left*.
  Питання й заперечення: **did / didn't + дієслово** (без минулої форми): *Did you go? I didn't see him.*
- **was / were**: *I / he / she / it **was**, you / we / they **were***. З *be* — без *did*: *Were you at work?*
- **Past Continuous** — **was / were + -ing**: дія **в процесі** в певний момент у минулому: *At 8 p.m. I was cooking dinner* — «О восьмій я готувала вечерю».
- Разом: довша дія (**was …ing**), яку перервала коротка (**Past Simple**): *I was taking a shower **when** the phone rang.* **While** + довша дія: *While I was driving, my phone rang.*
- *during* + іменник: *during the movie*.
Дієслова стану (*know, understand, want*) — у простій формі: *I didn't know.*`,
    ru: `- **Past Simple** — завершённые действия: *We went to the beach. I bought a coat.* Правильные глаголы + **-ed**; многие частые глаголы **неправильные**: *go → went, buy → bought, see → saw, take → took, leave → left*.
  Вопросы и отрицания: **did / didn't + глагол** (без прошедшей формы): *Did you go? I didn't see him.*
- **was / were**: *I / he / she / it **was**, you / we / they **were***. С *be* — без *did*: *Were you at work?*
- **Past Continuous** — **was / were + -ing**: действие **в процессе** в определённый момент в прошлом: *At 8 p.m. I was cooking dinner* — «В восемь я готовила ужин».
- Вместе: более долгое действие (**was …ing**), которое прервало короткое (**Past Simple**): *I was taking a shower **when** the phone rang.* **While** + долгое действие: *While I was driving, my phone rang.*
- *during* + существительное: *during the movie*.
Глаголы состояния (*know, understand, want*) — в простой форме: *I didn't know.*`,
  },
  examples: ['Yesterday we went to the beach.', 'I was taking a shower when the phone rang.', 'While I was driving, my phone rang.', "I didn't know she had moved.", 'Did you get my email?'],
  trap: {
    uk: 'Коли я готувала вечерю, подзвонила мама.',
    ru: 'Когда я готовила ужин, позвонила мама.',
    wrong: 'When I cooked dinner, my mom called.',
    right: 'When I was cooking dinner, my mom called.',
    note: {
      en: 'Ukrainian and Russian show "in progress" with the imperfective verb (*готувала / готовила*). English needs *was / were + -ing* for the longer action that was interrupted.',
      uk: 'Українською «процес» передає недоконаний вид (*готувала*). Англійською для довшої дії, яку перервали, потрібно *was / were + -ing*.',
      ru: 'По-русски «процесс» передаёт несовершенный вид (*готовила*). По-английски для долгого действия, которое прервали, нужно *was / were + -ing*.',
    },
  },
  errors: {
    irregular: {
      en: 'This verb is **irregular**: learn its past form — *went, bought, saw, took, left, felt, began, taught, won* — not *goed, buyed, teached*.',
      uk: 'Це **неправильне** дієслово: вивчіть його минулу форму — *went, bought, saw, took, left, felt, began, taught, won* — а не *goed, buyed, teached*.',
      ru: 'Это **неправильный** глагол: выучите его прошедшую форму — *went, bought, saw, took, left, felt, began, taught, won* — а не *goed, buyed, teached*.',
    },
    'did-base': {
      en: 'After **did / didn\'t** use the verb **without** a past form: *Did you go? I didn\'t see him. Why did he leave?* (not *went, saw, left*).',
      uk: 'Після **did / didn\'t** — дієслово **без** минулої форми: *Did you go? I didn\'t see him. Why did he leave?* (а не *went, saw, left*).',
      ru: 'После **did / didn\'t** — глагол **без** прошедшей формы: *Did you go? I didn\'t see him. Why did he leave?* (а не *went, saw, left*).',
    },
    'was-were': {
      en: '*I / he / she / it* → **was**; *you / we / they* → **were**. With *was / were* there is no *did*: *Were you at home?*',
      uk: '*I / he / she / it* → **was**; *you / we / they* → **were**. З *was / were* не потрібне *did*: *Were you at home?*',
      ru: '*I / he / she / it* → **was**; *you / we / they* → **were**. С *was / were* не нужен *did*: *Were you at home?*',
    },
    cont: {
      en: 'An action **in progress** at a moment in the past (*at 8 p.m. yesterday, at midnight, What were you doing…?*) → **was / were + -ing**.',
      uk: 'Дія **в процесі** в певний момент у минулому (*at 8 p.m. yesterday, at midnight, What were you doing…?*) → **was / were + -ing**.',
      ru: 'Действие **в процессе** в определённый момент в прошлом (*at 8 p.m. yesterday, at midnight, What were you doing…?*) → **was / were + -ing**.',
    },
    interrupt: {
      en: 'The **longer** action that was going on → **was / were + -ing**; the **short** action that interrupted it → **Past Simple**: *I was cooking when the phone **rang**.*',
      uk: '**Довша** дія, що тривала → **was / were + -ing**; **коротка**, що її перервала → **Past Simple**: *I was cooking when the phone **rang**.*',
      ru: '**Долгое** действие, которое длилось → **was / were + -ing**; **короткое**, которое его прервало → **Past Simple**: *I was cooking when the phone **rang**.*',
    },
    'while-when': {
      en: '**while** + a clause with the longer action (*while I was driving*); **during** + a noun (*during the movie*). *For* is about how long.',
      uk: '**while** + речення з довшою дією (*while I was driving*); **during** + іменник (*during the movie*). *For* — про тривалість.',
      ru: '**while** + предложение с долгим действием (*while I was driving*); **during** + существительное (*during the movie*). *For* — про длительность.',
    },
    'state-past': {
      en: 'Verbs of state (*know, understand, want, like, believe*) are not used with *-ing*, also in the past: *I didn\'t know*, not *I wasn\'t knowing*.',
      uk: 'Дієслова стану (*know, understand, want, like, believe*) не вживаються з *-ing*, і в минулому теж: *I didn\'t know*, а не *I wasn\'t knowing*.',
      ru: 'Глаголы состояния (*know, understand, want, like, believe*) не используются с *-ing*, и в прошлом тоже: *I didn\'t know*, а не *I wasn\'t knowing*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'irregular', l: 1, p: 'Yesterday we ___ to the beach.', a: 'went', o: ['goed', 'go'], w: { goed: 'irregular', go: 'irregular' }, e: 'irregular' },
    { t: 'choose', pt: 'was-were', l: 1, p: 'They ___ at home last night.', a: 'were', o: ['was', 'did'], w: { was: 'was-were', did: 'was-were' }, e: 'was-were' },
    { t: 'choose', pt: 'cont', l: 1, p: 'At 8 p.m. yesterday I ___ dinner.', a: 'was cooking', o: ['am cooking', 'was cook'], w: { 'am cooking': 'cont', 'was cook': 'cont' }, e: 'cont' },
    { t: 'choose', pt: 'interrupt', l: 1, p: 'I was taking a shower when the phone ___.', a: 'rang', o: ['was ringing', 'rings'], w: { 'was ringing': 'interrupt', rings: 'interrupt' }, e: 'interrupt' },
    { t: 'choose', pt: 'did-base', l: 1, p: "I didn't ___ him at the party.", a: 'see', o: ['saw', 'seen'], w: { saw: 'did-base', seen: 'did-base' }, e: 'did-base' },
    { t: 'choose', pt: 'while', l: 1, p: '___ I was driving, my phone rang.', a: 'While', o: ['During', 'For'], w: { During: 'while-when', For: 'while-when' }, e: 'while-when' },
    { t: 'fill', pt: 'irregular', l: 1, p: 'I ___ (buy) a new coat last week.', a: 'bought', w: { buyed: 'irregular', buy: 'irregular', brought: 'irregular' }, e: 'irregular' },
    { t: 'fill', pt: 'irregular', l: 1, p: 'She ___ (leave) work early on Friday.', a: 'left', w: { leaved: 'irregular', leave: 'irregular' }, e: 'irregular' },
    { t: 'fill', pt: 'was-were', l: 1, p: 'We ___ very tired after the flight.', a: 'were', w: { was: 'was-were', did: 'was-were' }, e: 'was-were' },
    { t: 'fill', pt: 'cont', l: 1, p: "What ___ you ___ (do) at 10 o'clock last night?", a: 'were|doing', w: { 'did|do': 'cont', 'was|doing': 'was-were' }, e: 'cont' },
    { t: 'fill', pt: 'did-base', l: 1, p: '___ you ___ (enjoy) the concert?', a: 'Did|enjoy', w: { 'Did|enjoyed': 'did-base', 'Were|enjoy': 'was-were' }, e: 'did-base' },
    { t: 'fill', pt: 'interrupt', l: 1, p: 'We ___ (have) dinner when the lights went out.', a: 'were having', w: { had: 'interrupt', 'was having': 'was-were' }, e: 'interrupt' },
    { t: 'fill', pt: 'irregular', l: 1, p: 'My parents ___ (take) us to Disneyland when we were kids.', a: 'took', w: { taked: 'irregular', take: 'irregular' }, e: 'irregular' },
    { t: 'fill', pt: 'did-base', l: 1, p: 'He ___ (not / call) me back yesterday.', a: "didn't call", w: { "didn't called": 'did-base', "wasn't call": 'was-were', "doesn't call": 'did-base' }, e: 'did-base' },
    { t: 'build', pt: 'cont', l: 1, a: 'I was working when you called.', x: ['am'], e: 'cont' },
    { t: 'build', pt: 'irregular', l: 1, a: 'We saw a great movie last night.', x: ['seen'], e: 'irregular' },
    { t: 'build', pt: 'did-base', l: 1, a: 'Where did you buy that dress?', x: ['bought'], e: 'did-base' },

    // ---------- Use
    { t: 'fill', pt: 'interrupt', l: 2, p: 'While I ___ (wait) for the bus, I ___ (meet) an old friend.', a: 'was waiting|met', w: { 'waited|met': 'interrupt', 'was waiting|was meeting': 'interrupt' }, e: 'interrupt' },
    { t: 'fill', pt: 'while', l: 2, p: 'I cut my finger ___ I was cooking.', a: ['while', 'when'], w: { during: 'while-when', for: 'while-when' }, e: 'while-when' },
    { t: 'fill', pt: 'cont', l: 2, p: 'At midnight the neighbors ___ still ___ (play) loud music.', a: 'were|playing', w: { 'was|playing': 'was-were', 'did|play': 'cont' }, e: 'cont' },
    { t: 'fill', pt: 'state-past', l: 2, p: 'I ___ (not / know) the answer, so I guessed.', a: "didn't know", w: { "wasn't knowing": 'state-past', "didn't knew": 'did-base' }, e: 'state-past' },
    { t: 'fill', pt: 'irregular', l: 2, p: 'The meeting ___ (begin) at nine and ___ (finish) at noon.', a: 'began|finished', w: { 'begun|finished': 'irregular', 'begined|finished': 'irregular' }, e: 'irregular' },
    { t: 'fill', pt: 'interrupt', l: 2, p: 'When I ___ (arrive) home, the kids ___ (sleep).', a: 'arrived|were sleeping', w: { 'was arriving|slept': 'interrupt', 'arrived|slept': 'interrupt', 'arrived|was sleeping': 'was-were' }, e: 'interrupt' },
    { t: 'fill', pt: 'was-were', l: 2, p: '___ your parents at the wedding?', a: 'Were', w: { Was: 'was-were', Did: 'was-were' }, e: 'was-were' },
    { t: 'fill', pt: 'irregular', l: 2, p: 'I ___ (feel) sick yesterday, so I ___ (stay) home.', a: 'felt|stayed', w: { 'feeled|stayed': 'irregular', 'fell|stayed': 'irregular' }, e: 'irregular' },
    { t: 'build', pt: 'while', l: 2, a: 'While she was sleeping, it started to snow.', x: ['during'], e: 'while-when' },
    { t: 'fix', pt: 'irregular', l: 2, p: 'I buyed a new phone yesterday.', a: ['I bought a new phone yesterday.'], e: 'irregular' },
    { t: 'fix', pt: 'did-base', l: 2, p: 'Did you went to the doctor?', a: ['Did you go to the doctor?'], e: 'did-base' },
    { t: 'fix', pt: 'was-were', l: 2, p: 'We was at the mall all day.', a: ['We were at the mall all day.'], e: 'was-were' },
    { t: 'fix', pt: 'interrupt', l: 2, p: 'I watched TV when the doorbell rang.', a: ['I was watching TV when the doorbell rang.'], e: 'interrupt' },
    { t: 'tr', pt: 'interrupt', l: 2, i: 'Join with *when*. The longer action → *was …ing*.', p: 'I walked home. It started to rain.', s: 'I was walking home', a: ['I was walking home when it started to rain.', 'I was walking home when it started raining.', 'I was walking home when it began to rain.'], e: 'interrupt' },
    { t: 'tr', pt: 'did-base', l: 2, i: 'Make it negative.', p: 'She took her medicine this morning.', s: 'She', a: ["She didn't take her medicine this morning."], e: 'did-base' },
    { t: 'tl', pt: 'irregular', l: 2, uk: 'Ми купили квитки вчора.', ru: 'Мы купили билеты вчера.', a: ['We bought the tickets yesterday.', 'We bought tickets yesterday.', 'Yesterday we bought the tickets.', 'Yesterday we bought tickets.'], e: 'irregular' },
    { t: 'tl', pt: 'cont', l: 2, uk: 'Що ти робила вчора о сьомій вечора?', ru: 'Что ты делала вчера в семь вечера?', a: ['What were you doing at seven yesterday evening?', 'What were you doing yesterday at seven in the evening?', 'What were you doing at 7 p.m. yesterday?', 'What were you doing yesterday at 7 p.m.?', 'What were you doing at seven last night?', 'What were you doing at 7 last night?', 'What were you doing at 7 yesterday evening?', 'What were you doing yesterday at 7 pm?', 'What were you doing at 7 pm yesterday?'], e: 'cont' },

    // ---------- Pro
    { t: 'fix', pt: 'interrupt', l: 3, p: 'When I was coming home, I was seeing an accident.', a: ['When I was coming home, I saw an accident.', 'While I was coming home, I saw an accident.'], e: 'interrupt' },
    { t: 'fix', pt: 'state-past', l: 3, p: "I wasn't understanding what he wanted.", a: ["I didn't understand what he wanted."], e: 'state-past' },
    { t: 'fix', pt: 'irregular', l: 3, p: 'She teached English in Kharkiv for five years.', a: ['She taught English in Kharkiv for five years.'], e: 'irregular' },
    { t: 'fix', pt: 'was-were', l: 3, p: 'Was you at work yesterday?', a: ['Were you at work yesterday?'], e: 'was-were' },
    { t: 'tr', pt: 'while', l: 3, i: 'Join with *While*.', p: 'The kids were playing outside. I was cleaning the house.', s: 'While', a: ['While the kids were playing outside, I was cleaning the house.', 'While I was cleaning the house, the kids were playing outside.'], e: 'while-when' },
    { t: 'tr', pt: 'cont', l: 3, i: 'Ask what she was doing at that time.', p: 'She was busy at 6 p.m.', s: 'What', a: ['What was she doing at 6 p.m.?', 'What was she doing at six p.m.?', 'What was she doing at 6 pm?', 'What was she doing at six?', 'What was she doing at 6?'], e: 'cont' },
    { t: 'tr', pt: 'did-base', l: 3, i: 'Ask a question with *Why*.', p: 'He left early.', s: 'Why', a: ['Why did he leave early?'], e: 'did-base' },
    { t: 'tl', pt: 'interrupt', l: 3, uk: 'Коли я готувала вечерю, подзвонила мама.', ru: 'Когда я готовила ужин, позвонила мама.', a: ['When I was cooking dinner, my mom called.', 'While I was cooking dinner, my mom called.', 'My mom called when I was cooking dinner.', 'My mom called while I was cooking dinner.', 'When I was making dinner, my mom called.', 'While I was making dinner, my mom called.', 'When I was cooking dinner, Mom called.', 'While I was cooking dinner, Mom called.', 'When I was cooking dinner, my mother called.', 'While I was cooking dinner, my mother called.', 'Mom called while I was cooking dinner.', 'My mother called while I was cooking dinner.'], e: 'interrupt' },
    { t: 'tl', pt: 'did-base', l: 3, uk: 'Ти отримала мій лист?', ru: 'Ты получила моё письмо?', a: ['Did you get my email?', 'Did you get my letter?', 'Did you receive my email?', 'Did you receive my letter?', 'Did you get my message?', 'Have you gotten my email?', 'Have you received my email?', 'Have you got my email?'], e: 'did-base' },
    { t: 'tl', pt: 'state-past', l: 3, uk: 'Я не знала, що вона переїхала.', ru: 'Я не знала, что она переехала.', a: ["I didn't know that she had moved.", "I didn't know she had moved.", "I didn't know she moved.", "I didn't know that she moved."], e: 'state-past' },
    { t: 'tl', pt: 'was-were', l: 3, uk: 'Ми були в Нью-Йорку минулого літа.', ru: 'Мы были в Нью-Йорке прошлым летом.', a: ['We were in New York last summer.', 'Last summer we were in New York.', 'We went to New York last summer.', 'We visited New York last summer.'], e: 'was-were' },
    { t: 'tl', pt: 'irregular', l: 3, uk: 'Я забула ключі в машині.', ru: 'Я забыла ключи в машине.', a: ['I left my keys in the car.', 'I left the keys in the car.', 'I forgot my keys in the car.', 'I forgot the keys in the car.'], e: 'irregular', n: '*leave* = forget something somewhere: *I left my keys in the car.*' },
    { t: 'fill', pt: 'cont', l: 3, p: "Sorry, I didn't hear the phone. I ___ (vacuum).", a: 'was vacuuming', w: { vacuumed: 'cont', 'am vacuuming': 'cont' }, e: 'cont' },
    { t: 'fill', pt: 'irregular', l: 3, p: 'Who ___ (win) the game last night?', a: 'won', w: { winned: 'irregular', 'did win': 'q:subject-q' }, e: 'irregular' },
    { t: 'fill', pt: 'while', l: 3, p: 'My phone died ___ the movie.', a: 'during', w: { while: 'while-when', when: 'while-when' }, e: 'while-when' },
  ],
});
