APP.addTopic({
  id: 'cleft',
  title: "It was… who, What I need is…",
  level: 'C1',
  group: 'Emphasis',
  icon: '🔦',
  about: 'putting the focus on one part of the sentence',
  rule: {
    en: `English uses **sentence structure**, not just voice, to stress one part:
- **It is / was + focus + who / that + rest**: ***It was my sister who** called the ambulance. **It's the price that** worries me. **It wasn't until** 2019 **that** I saw them again.*
- **What + clause + is / was + focus**: ***What I need is** a vacation. **What surprised me was** how friendly people were.* (No extra *it*: not *What I need it is*.)
- **What + subject + did / should do + was / is + verb**: ***What she did was call** the police. **What you should do is call** the bank.*
- **All / The only thing / The reason + clause + is**: ***All I want is** a quiet weekend. **All I did was ask** a question.* (Not *All what*.)
- Emphatic **do / does / did + base verb**: *I **did call** you! She **does look** tired.*`,
    uk: `Англійська виділяє важливе **будовою речення**, а не лише інтонацією:
- **It is / was + те, що виділяємо + who / that + решта**: ***It was my sister who** called the ambulance* — «Це саме сестра викликала швидку». ***It wasn't until** 2019 **that** I saw them again* — «Лише у 2019 я знову їх побачила».
- **What + частина речення + is / was + головне**: ***What I need is** a vacation* — «Що мені потрібно — це відпустка». (Без зайвого *it*: не *What I need it is*.)
- **What + підмет + did / should do + was / is + дієслово**: ***What she did was call** the police. **What you should do is call** the bank.*
- **All / The only thing / The reason + частина речення + is**: ***All I want is** a quiet weekend* — «Все, чого я хочу, — це спокійні вихідні». (Не *All what* — хоча «все, **що**».)
- Підсилювальне **do / does / did + дієслово**: *I **did call** you!* — «Я ж дзвонила тобі!» *She **does look** tired.*`,
    ru: `Английский выделяет важное **строением предложения**, а не только интонацией:
- **It is / was + то, что выделяем + who / that + остальное**: ***It was my sister who** called the ambulance* — «Это именно сестра вызвала скорую». ***It wasn't until** 2019 **that** I saw them again* — «Только в 2019 я снова их увидела».
- **What + часть предложения + is / was + главное**: ***What I need is** a vacation* — «Что мне нужно — это отпуск». (Без лишнего *it*: не *What I need it is*.)
- **What + подлежащее + did / should do + was / is + глагол**: ***What she did was call** the police. **What you should do is call** the bank.*
- **All / The only thing / The reason + часть предложения + is**: ***All I want is** a quiet weekend* — «Всё, чего я хочу, — это спокойные выходные». (Не *All what* — хотя «всё, **что**».)
- Усилительное **do / does / did + глагол**: *I **did call** you!* — «Я же звонила тебе!» *She **does look** tired.*`,
  },
  examples: ['It was my sister who called the ambulance.', 'What I need is a vacation.', 'What she did was call the police.', 'All I want is a quiet weekend.', 'I did call you!'],
  trap: {
    uk: 'Все, що мені потрібно, — це трохи тиші.',
    ru: 'Всё, что мне нужно, — это немного тишины.',
    wrong: 'All what I need is a little quiet.',
    right: 'All I need is a little peace and quiet.',
    note: {
      en: '*Все, що / Всё, что* is not *all what*. Say **All I need is…** or **All that I need is…**, and don\'t add *it* or *this* before *is*.',
      uk: '«Все, що» — це не *all what*. Кажіть **All I need is…** або **All that I need is…**, і без *it* чи *this* перед *is* (тире «— це» не перекладається).',
      ru: '«Всё, что» — это не *all what*. Говорите **All I need is…** или **All that I need is…**, и без *it* или *this* перед *is* (тире «— это» не переводится).',
    },
  },
  errors: {
    it: {
      en: '**It is / was + focus + who / that + rest**: *It was my neighbor **who** called. It\'s the price **that** worries me.* Don\'t drop *who / that*, and use *who* or *that* for people, not *which*.',
      uk: '**It is / was + те, що виділяємо + who / that + решта**: *It was my neighbor **who** called. It\'s the price **that** worries me.* Не пропускайте *who / that*; для людей — *who* або *that*, не *which*.',
      ru: '**It is / was + то, что выделяем + who / that + остальное**: *It was my neighbor **who** called. It\'s the price **that** worries me.* Не пропускайте *who / that*; для людей — *who* или *that*, не *which*.',
    },
    what: {
      en: '**What + clause** works as the subject, then **is / was** (singular), with no extra *it*: *What I need **is** time.* After *is*, a question word keeps statement order: *is why he left*.',
      uk: '**What + частина речення** — це підмет, далі **is / was** (однина), без зайвого *it*: *What I need **is** time.* Після *is* питальне слово — з прямим порядком: *is why he left*.',
      ru: '**What + часть предложения** — это подлежащее, дальше **is / was** (единственное число), без лишнего *it*: *What I need **is** time.* После *is* вопросительное слово — с прямым порядком: *is why he left*.',
    },
    whatdo: {
      en: 'To focus on an action: **What + subject + did / should do + was / is + base verb** (or *to* + verb): *What she did was **call** her lawyer.* Not *was called* or *was calling*.',
      uk: 'Щоб виділити дію: **What + підмет + did / should do + was / is + дієслово** (або *to* + дієслово): *What she did was **call** her lawyer.* Не *was called*, не *was calling*.',
      ru: 'Чтобы выделить действие: **What + подлежащее + did / should do + was / is + глагол** (или *to* + глагол): *What she did was **call** her lawyer.* Не *was called*, не *was calling*.',
    },
    all: {
      en: '**All / The only thing / The reason + (that) + clause + is**: *All I need is…, The only thing that matters is…* Never *all what* or *the thing what*.',
      uk: '**All / The only thing / The reason + (that) + частина речення + is**: *All I need is…, The only thing that matters is…* Ніколи *all what* чи *the thing what*.',
      ru: '**All / The only thing / The reason + (that) + часть предложения + is**: *All I need is…, The only thing that matters is…* Никогда *all what* или *the thing what*.',
    },
    emph: {
      en: 'For emphasis or contrast, add **do / does / did** before the **base verb**: *I **did tell** him! She **does like** you.* Not *did told*.',
      uk: 'Для підсилення чи протиставлення додайте **do / does / did** перед **дієсловом у початковій формі**: *I **did tell** him! She **does like** you.* Не *did told*.',
      ru: 'Для усиления или противопоставления добавьте **do / does / did** перед **глаголом в начальной форме**: *I **did tell** him! She **does like** you.* Не *did told*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'it', l: 1, p: 'It was my sister ___ called the ambulance.', a: 'who', o: ['which', 'what'], w: { which: 'it', what: 'it' }, e: 'it' },
    { t: 'choose', pt: 'what', l: 1, p: 'What I need right now ___ a vacation.', a: 'is', o: ['it is', 'are'], w: { 'it is': 'what', are: 'what' }, e: 'what' },
    { t: 'choose', pt: 'all', l: 1, p: '___ I want is a quiet weekend.', a: 'All', o: ['All what', 'Everything what'], w: { 'All what': 'all', 'Everything what': 'all' }, e: 'all' },
    { t: 'choose', pt: 'emph', l: 1, p: "I ___ call you yesterday! You just didn't pick up.", a: 'did', o: ['do', 'was'], w: { do: 'emph', was: 'emph' }, e: 'emph' },
    { t: 'choose', pt: 'whatdo', l: 1, p: 'What she did was ___ the police.', a: 'call', o: ['called', 'calling'], w: { called: 'whatdo', calling: 'whatdo' }, e: 'whatdo' },
    { t: 'choose', pt: 'it', l: 1, p: "It's the price ___ worries me, not the size.", a: 'that', o: ['what', 'who'], w: { what: 'it', who: 'it' }, e: 'it' },
    { t: 'fill', pt: 'it', l: 1, p: 'It was in Kyiv ___ my parents met.', a: 'that', w: { which: 'it', what: 'it' }, e: 'it' },
    { t: 'fill', pt: 'what', l: 1, p: 'What I love about Texas ___ (be) the people.', a: 'is', w: { are: 'what' }, e: 'what' },
    { t: 'fill', pt: 'all', l: 1, p: 'All I did ___ (be) ask a question!', a: 'was', w: { were: 'all', is: 'all' }, e: 'all' },
    { t: 'fill', pt: 'emph', l: 1, p: "She ___ (do) look tired today, doesn't she?", a: 'does', w: { is: 'emph', do: 'emph' }, e: 'emph' },
    { t: 'fill', pt: 'whatdo', l: 1, p: 'What you should do ___ call the bank right away.', a: 'is', w: { are: 'whatdo', 'it is': 'whatdo' }, e: 'whatdo' },
    { t: 'fill', pt: 'it', l: 1, p: "It wasn't me ___ broke the window!", a: ['who', 'that'], w: { which: 'it', what: 'it' }, e: 'it' },
    { t: 'fill', pt: 'what', l: 1, p: '___ worries me is the cost of insurance.', a: 'What', w: { That: 'what', Which: 'what' }, e: 'what' },
    { t: 'build', pt: 'it', l: 1, a: 'It was my husband who found the apartment.', x: ['which'], e: 'it' },
    { t: 'build', pt: 'what', l: 1, a: 'What I need is more time.', x: ['it'], e: 'what' },
    { t: 'build', pt: 'emph', l: 1, a: 'I did lock the door.', x: ['locked'], e: 'emph' },

    // ---------- Use
    { t: 'fill', pt: 'whatdo', l: 2, p: 'What I did was ___ (call) the landlord.', a: ['call', 'to call'], w: { called: 'whatdo', calling: 'whatdo' }, e: 'whatdo' },
    { t: 'fill', pt: 'it', l: 2, p: 'It ___ (be) only last year that I got my green card.', a: 'was', w: { is: 'it' }, e: 'it' },
    { t: 'fill', pt: 'all', l: 2, p: '___ (I / do) was ask for a refund!', a: 'All I did', w: { 'All what I did': 'all', 'What I do': 'whatdo' }, e: 'all' },
    { t: 'fill', pt: 'what', l: 2, p: 'What surprised me most ___ how friendly people were.', a: 'was', w: { were: 'what', 'it was': 'what' }, e: 'what' },
    { t: 'fill', pt: 'emph', l: 2, p: "I know you don't believe me, but I ___ (do) send the email yesterday.", a: 'did', w: { do: 'emph', was: 'emph' }, e: 'emph' },
    { t: 'fill', pt: 'all', l: 2, p: "The only thing I don't like about my job ___ the commute.", a: 'is', w: { are: 'all', 'it is': 'all' }, e: 'all' },
    { t: 'build', pt: 'whatdo', l: 2, a: 'What we need to do is talk to her teacher.', x: ['are'], e: 'whatdo' },
    { t: 'build', pt: 'all', l: 2, a: 'All she wants is a little attention.', x: ['what'], e: 'all' },
    { t: 'fix', pt: 'all', l: 2, p: "All what I need is a good night's sleep.", a: ["All I need is a good night's sleep.", "All that I need is a good night's sleep."], e: 'all' },
    { t: 'fix', pt: 'it', l: 2, p: 'It was my neighbor called the police.', a: ['It was my neighbor who called the police.', 'It was my neighbor that called the police.'], e: 'it' },
    { t: 'fix', pt: 'what', l: 2, p: 'What I really want it is a house with a yard.', a: ['What I really want is a house with a yard.'], e: 'what' },
    { t: 'fix', pt: 'emph', l: 2, p: 'I did told him the truth!', a: ['I did tell him the truth!'], e: 'emph' },
    { t: 'tr', pt: 'it', l: 2, i: 'Put the focus on *my son*. Use *It was … who …*.', p: 'My son fixed the computer, not me.', s: 'It was', a: ['It was my son who fixed the computer, not me.', 'It was my son that fixed the computer, not me.', 'It was my son who fixed the computer.', 'It was my son that fixed the computer.'], e: 'it' },
    { t: 'tr', pt: 'what', l: 2, i: 'Start with *What*.', p: 'I need a long vacation.', s: 'What', a: ['What I need is a long vacation.'], e: 'what' },
    {
      t: 'tl', pt: 'what', l: 2, uk: 'Мене дивує те, як швидко ростуть діти.', ru: 'Меня удивляет то, как быстро растут дети.',
      a: ['kids', 'children'].flatMap((k) => ['fast', 'quickly'].flatMap((f) => ['grow', 'grow up'].flatMap((g) => [`What surprises me is how ${f} ${k} ${g}.`, `What amazes me is how ${f} ${k} ${g}.`, `It surprises me how ${f} ${k} ${g}.`]))),
      e: 'what',
    },
    {
      t: 'tl', pt: 'all', l: 2, uk: 'Все, що мені потрібно, — це трохи тиші.', ru: 'Всё, что мне нужно, — это немного тишины.',
      a: ['All I need is', 'All that I need is', 'All I want is', 'The only thing I need is'].flatMap((s) => ['a little quiet', 'some quiet', 'a little peace and quiet', 'some peace and quiet', 'a bit of quiet', 'a bit of peace and quiet', 'a little silence', 'some silence'].map((q) => `${s} ${q}.`)),
      e: 'all',
    },

    // ---------- Pro
    { t: 'fix', pt: 'whatdo', l: 3, p: 'What she did was calling her lawyer.', a: ['What she did was call her lawyer.', 'What she did was to call her lawyer.'], e: 'whatdo' },
    { t: 'fix', pt: 'it', l: 3, p: 'It is the teachers which make this school special.', a: ['It is the teachers who make this school special.', 'It is the teachers that make this school special.'], e: 'it' },
    { t: 'fix', pt: 'what', l: 3, p: "What I don't understand is why did he leave.", a: ["What I don't understand is why he left."], e: 'what' },
    { t: 'fix', pt: 'all', l: 3, p: 'The only thing what matters is that everyone is safe.', a: ['The only thing that matters is that everyone is safe.', 'All that matters is that everyone is safe.'], e: 'all' },
    { t: 'tr', pt: 'whatdo', l: 3, i: 'Start with *What I did*.', p: 'First I called the insurance company.', s: 'What I did', a: ['What I did first was call the insurance company.', 'What I did first was to call the insurance company.', 'What I did was call the insurance company first.', 'What I did was to call the insurance company first.', 'What I did first was call the insurance company.'], e: 'whatdo' },
    { t: 'tr', pt: 'it', l: 3, i: "Put the focus on the time. Use *It wasn't until … that …*.", p: "I didn't learn to drive until I moved to Texas.", s: "It wasn't until", a: ["It wasn't until I moved to Texas that I learned to drive."], e: 'it' },
    { t: 'tr', pt: 'emph', l: 3, i: 'Add emphasis with *do / does / did*.', p: "She likes you — she just doesn't show it.", s: 'She', a: ["She does like you — she just doesn't show it.", 'She does like you.'], e: 'emph' },
    { t: 'tr', pt: 'all', l: 3, i: 'Start with *All*.', p: 'I only asked a simple question!', s: 'All', a: ['All I did was ask a simple question!', 'All I asked was a simple question!'], e: 'all' },
    {
      t: 'tl', pt: 'it', l: 3, uk: 'Це ж саме ти порадила мені цього лікаря.', ru: 'Это ведь именно ты посоветовала мне этого врача.',
      a: ['It was you who', 'It was you that', 'You were the one who', 'You are the one who'].flatMap((s) => ['recommended this doctor to me', 'recommended this doctor', 'recommended that doctor to me', 'recommended that doctor', 'told me about this doctor', 'suggested this doctor'].map((v) => `${s} ${v}.`)),
      e: 'it',
    },
    { t: 'tl', pt: 'emph', l: 3, uk: 'Я справді намагалася, повір мені!', ru: 'Я правда старалась, поверь мне!', a: ['I did try, believe me!', 'I really did try, believe me!', 'I really tried, believe me!', 'Believe me, I did try!', 'Believe me, I really did try!', 'Believe me, I really tried!', 'I did try, trust me!', 'I really did try, trust me!'], e: 'emph' },
    { t: 'tl', pt: 'whatdo', l: 3, uk: 'Що тобі треба зробити — це зателефонувати їм.', ru: 'Что тебе нужно сделать — это позвонить им.', a: ['What you need to do', 'What you have to do', 'What you should do', 'All you need to do', 'All you have to do'].flatMap((s) => ['call them', 'to call them', 'give them a call'].map((v) => `${s} is ${v}.`)), e: 'whatdo' },
    { t: 'choose', pt: 'what', l: 3, p: "What I'm trying to say ___ that we need more time.", a: 'is', o: ['it is', 'are'], w: { 'it is': 'what', are: 'what' }, e: 'what' },
    { t: 'choose', pt: 'whatdo', l: 3, p: 'What the company should have done ___ apologize right away.', a: 'was', o: ['did', 'had'], w: { did: 'whatdo', had: 'whatdo' }, e: 'whatdo' },
    { t: 'fill', pt: 'emph', l: 3, p: 'Wow, you ___ (do) know a lot about cars!', a: 'do', w: { are: 'emph', does: 'emph' }, e: 'emph' },
    { t: 'fill', pt: 'it', l: 3, p: 'It was not until 2019 ___ she finally saw her parents again.', a: 'that', w: { when: 'it', which: 'it' }, e: 'it' },
    { t: 'fill', pt: 'all', l: 3, p: "The reason I'm calling ___ that my card was charged twice.", a: 'is', w: { are: 'all', 'it is': 'all' }, e: 'all' },
  ],
});
