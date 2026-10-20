APP.addTopic({
  id: 'art',
  title: 'Articles: a, an, the, no article',
  level: 'B1',
  group: 'Articles & nouns',
  icon: '🅰️',
  about: 'a nurse, the door, I love dogs, go to work',
  points: [
    {
      for: ['no-a', 'a-first'],
      rule: {
        en: `One thing of many, mentioned for the first time, or a job → **a / an**: *I need a new phone. She's a nurse.* A singular countable noun almost never stands alone: *a car, the car, my car* — not just *car*.`,
        uk: `Одна річ із багатьох, згадана вперше, або професія → **a / an**: *I need a new phone. She's a nurse.* Злічуваний іменник в однині майже ніколи не стоїть сам: *a car, the car, my car* — а не просто *car*.`,
        ru: `Одна вещь из многих, упомянутая впервые, или профессия → **a / an**: *I need a new phone. She's a nurse.* Исчисляемое существительное в единственном числе почти никогда не стоит одно: *a car, the car, my car* — а не просто *car*.`,
      },
      more: {
        en: `**The idea.** Ukrainian and Russian have no articles, so English ones feel like extra words. But for English speakers a singular noun without a "little word" in front sounds broken. A **singular countable** noun almost always needs one: *a, an, the, my, this, his…*

**a / an** = "one of many", "some", new information — often like «один / якийсь — один / какой-то»:
- *I need a new phone.* — any phone, not a specific one
- *Can I ask a question?*

**Jobs** always take *a / an*: *She's a nurse. My husband is an engineer.* — In Ukrainian and Russian «Він інженер / Он инженер» has no word, so people say *He is engineer*.

✅ *My husband is an engineer.*
❌ *My husband is engineer.*

✅ *I need a new phone. Mine is broken.*
❌ *I need new phone. Mine is broken.*

**Check yourself:** a single thing you can count (*phone, car, job*) with nothing before it? Add *a / an* (or *the, my*).`,
        uk: `**Суть.** В українській немає артиклів, тож англійські здаються зайвими словами. Але для англійця іменник в однині без «маленького слова» попереду звучить зламано. **Злічуваний іменник в однині** майже завжди потребує його: *a, an, the, my, this, his…*

**a / an** = «один з багатьох», «якийсь», нова інформація:
- *I need a new phone.* — будь-який телефон, не конкретний
- *Can I ask a question?*

**Професії** завжди з *a / an*: *She's a nurse. My husband is an engineer.* — Українською «Він інженер» без жодного слова, тому кажуть *He is engineer*.

✅ *My husband is an engineer.*
❌ *My husband is engineer.*

✅ *I need a new phone. Mine is broken.*
❌ *I need new phone. Mine is broken.*

**Перевір себе:** одна річ, яку можна порахувати (*phone, car, job*), і перед нею нічого немає? Додай *a / an* (або *the, my*).`,
        ru: `**Суть.** В русском нет артиклей, поэтому английские кажутся лишними словами. Но для англичанина существительное в единственном числе без «маленького слова» впереди звучит сломанно. **Исчисляемое существительное в единственном числе** почти всегда требует его: *a, an, the, my, this, his…*

**a / an** = «один из многих», «какой-то», новая информация:
- *I need a new phone.* — любой телефон, не конкретный
- *Can I ask a question?*

**Профессии** всегда с *a / an*: *She's a nurse. My husband is an engineer.* — По-русски «Он инженер» без всякого слова, поэтому говорят *He is engineer*.

✅ *My husband is an engineer.*
❌ *My husband is engineer.*

✅ *I need a new phone. Mine is broken.*
❌ *I need new phone. Mine is broken.*

**Проверь себя:** одна вещь, которую можно посчитать (*phone, car, job*), и перед ней ничего нет? Добавь *a / an* (или *the, my*).`,
      },
    },
    {
      for: ['a-the', 'the-known'],
      rule: {
        en: `Both people know **which one** (mentioned before, only one, clear from the situation) → **the**: *Close the door. I bought a dress — the dress was expensive. The sun.*`,
        uk: `Обидва знають, **яка саме** (вже згадували, єдина, зрозуміло з ситуації) → **the**: *Close the door. I bought a dress — the dress was expensive. The sun.*`,
        ru: `Оба знают, **какая именно** (уже упоминали, единственная, ясно из ситуации) → **the**: *Close the door. I bought a dress — the dress was expensive. The sun.*`,
      },
      more: {
        en: `**The idea.** **the** = "**you know which one**". Both people can point to the same thing:
- it was **mentioned before**: *I bought a dress and a bag. **The** dress was expensive.* — first *a* (new), then *the* (that one)
- it's the **only one** around: *the sun, the president, the kitchen* (in our home)
- it's **clear from the situation**: *Can you close **the** door?* — the door of this room; *Pass me **the** salt.*

A good way to feel it: *the* is like «цей / той / этот / тот», *a* is like «один / якийсь / один / какой-то».

✅ *Can you close the door, please?*
❌ *Can you close a door, please?* — sounds like any door anywhere

✅ *I bought a dress and a bag. The dress was expensive.*
❌ *I bought a dress and a bag. A dress was expensive.*

**Check yourself:** could the other person ask "which one?" → *a*. They already know which → *the*.`,
        uk: `**Суть.** **the** = «**ти знаєш, який саме**». Обидва можуть показати на одну й ту саму річ:
- про неї **вже говорили**: *I bought a dress and a bag. The dress was expensive.* — спочатку *a* (нове), потім *the* (та сама)
- вона **єдина** поруч: *the sun, the president, the kitchen* (у нашому домі)
- **зрозуміло з ситуації**: *Can you close the door?* — двері цієї кімнати; *Pass me the salt.*

Як відчути: *the* — це наче «цей / той», *a* — наче «один / якийсь».

✅ *Can you close the door, please?*
❌ *Can you close a door, please?* — звучить як «якісь двері, будь-де»

✅ *I bought a dress and a bag. The dress was expensive.*
❌ *I bought a dress and a bag. A dress was expensive.*

**Перевір себе:** співрозмовник міг би спитати «який саме?» → *a*. Він уже знає, який → *the*.`,
        ru: `**Суть.** **the** = «**ты знаешь, какой именно**». Оба могут показать на одну и ту же вещь:
- о ней **уже говорили**: *I bought a dress and a bag. The dress was expensive.* — сначала *a* (новое), потом *the* (то самое)
- она **единственная** рядом: *the sun, the president, the kitchen* (в нашем доме)
- **понятно из ситуации**: *Can you close the door?* — дверь этой комнаты; *Pass me the salt.*

Как почувствовать: *the* — это как «этот / тот», *a* — как «один / какой-то».

✅ *Can you close the door, please?*
❌ *Can you close a door, please?* — звучит как «какую-нибудь дверь, где-нибудь»

✅ *I bought a dress and a bag. The dress was expensive.*
❌ *I bought a dress and a bag. A dress was expensive.*

**Проверь себя:** собеседник мог бы спросить «какой именно?» → *a*. Он уже знает какой → *the*.`,
      },
    },
    {
      for: ['general'],
      rule: {
        en: `Things **in general** (plural or uncountable) → **no article**: *I love dogs. Coffee is expensive here. Life in America is different.*`,
        uk: `Про речі **загалом** (множина або незлічувані) → **без артикля**: *I love dogs. Coffee is expensive here. Life in America is different.*`,
        ru: `О вещах **вообще** (множественное число или неисчисляемые) → **без артикля**: *I love dogs. Coffee is expensive here. Life in America is different.*`,
      },
      more: {
        en: `**The idea.** When you talk about things **in general** — all dogs, coffee as such, life as a whole — English uses **no article** with plural and uncountable nouns:
- *I love dogs.* — dogs in general
- *Coffee is expensive here.*
- *Life in America is different.*
- *Children need attention.*

*the* would make it specific — **these** particular ones:
- *I love the dogs.* — those dogs we're talking about
- *The coffee here is great.* — the coffee in this café

✅ *I love dogs.*
❌ *I love the dogs.* — unless you mean specific dogs

✅ *Life is short.*
❌ *The life is short.*

**Check yourself:** do you mean all of them, the idea in general? → no article. Specific ones you both know? → *the*.`,
        uk: `**Суть.** Коли говориш про речі **загалом** — усіх собак, каву як таку, життя в цілому — англійська **не ставить артикль** з множиною і незлічуваними:
- *I love dogs.* — собак загалом
- *Coffee is expensive here.*
- *Life in America is different.*
- *Children need attention.*

*the* зробило б це конкретним — саме **ці**:
- *I love the dogs.* — тих собак, про яких ми говоримо
- *The coffee here is great.* — кава в цьому кафе

✅ *I love dogs.*
❌ *I love the dogs.* — якщо не маєш на увазі конкретних собак

✅ *Life is short.*
❌ *The life is short.*

**Перевір себе:** маєш на увазі всіх, ідею загалом? → без артикля. Конкретних, відомих обом? → *the*.`,
        ru: `**Суть.** Когда говоришь о вещах **вообще** — всех собаках, кофе как таковом, жизни в целом — английский **не ставит артикль** с множественным числом и неисчисляемыми:
- *I love dogs.* — собак вообще
- *Coffee is expensive here.*
- *Life in America is different.*
- *Children need attention.*

*the* сделало бы это конкретным — именно **эти**:
- *I love the dogs.* — тех собак, о которых мы говорим
- *The coffee here is great.* — кофе в этом кафе

✅ *I love dogs.*
❌ *I love the dogs.* — если не имеешь в виду конкретных собак

✅ *Life is short.*
❌ *The life is short.*

**Проверь себя:** имеешь в виду всех, идею вообще? → без артикля. Конкретных, известных обоим? → *the*.`,
      },
    },
    {
      for: ['a-an', 'an'],
      rule: {
        en: `**a** before a consonant **sound**, **an** before a vowel **sound**: *an hour, an MRI, an honest mistake — a university, a one-way ticket.*`,
        uk: `**a** перед приголосним **звуком**, **an** перед голосним **звуком**: *an hour, an MRI, an honest mistake — a university, a one-way ticket.*`,
        ru: `**a** перед согласным **звуком**, **an** перед гласным **звуком**: *an hour, an MRI, an honest mistake — a university, a one-way ticket.*`,
      },
      more: {
        en: `**The idea.** *a* and *an* are the same word; *an* just makes it easier to say before a vowel. What matters is the **sound** you hear, not the letter you see:
- **an** + a vowel sound: *an apple, an hour* (*h* is silent), *an MRI* ("em"), *an 18-year-old* ("eighteen"), *an honest mistake*
- **a** + a consonant sound: *a university* ("yoo"), *a European* ("yoo"), *a one-way ticket* ("wan"), *a house*

✅ *I'll be back in an hour.*
❌ *I'll be back in a hour.*

✅ *She goes to a university in Boston.*
❌ *She goes to an university in Boston.*

✅ *The doctor ordered an MRI.*
❌ *The doctor ordered a MRI.*

**Check yourself:** say the next word out loud. Starts with a vowel sound → *an*. Starts with a consonant sound (including "yoo", "wa") → *a*.`,
        uk: `**Суть.** *a* і *an* — одне й те саме слово; *an* просто легше вимовити перед голосною. Важить **звук**, який чуєш, а не літера, яку бачиш:
- **an** + голосний звук: *an apple, an hour* (*h* не читається), *an MRI* («ем»), *an 18-year-old* («ейтін»), *an honest mistake*
- **a** + приголосний звук: *a university* («ю»), *a European* («ю»), *a one-way ticket* («ван»), *a house*

✅ *I'll be back in an hour.*
❌ *I'll be back in a hour.*

✅ *She goes to a university in Boston.*
❌ *She goes to an university in Boston.*

✅ *The doctor ordered an MRI.*
❌ *The doctor ordered a MRI.*

**Перевір себе:** вимов наступне слово вголос. Починається з голосного звуку → *an*. З приголосного (включно з «ю», «ва») → *a*.`,
        ru: `**Суть.** *a* и *an* — одно и то же слово; *an* просто легче произнести перед гласной. Важен **звук**, который слышишь, а не буква, которую видишь:
- **an** + гласный звук: *an apple, an hour* (*h* не читается), *an MRI* («эм»), *an 18-year-old* («эйтин»), *an honest mistake*
- **a** + согласный звук: *a university* («ю»), *a European* («ю»), *a one-way ticket* («ван»), *a house*

✅ *I'll be back in an hour.*
❌ *I'll be back in a hour.*

✅ *She goes to a university in Boston.*
❌ *She goes to an university in Boston.*

✅ *The doctor ordered an MRI.*
❌ *The doctor ordered a MRI.*

**Проверь себя:** произнеси следующее слово вслух. Начинается с гласного звука → *an*. С согласного (включая «ю», «ва») → *a*.`,
      },
    },
    {
      for: ['places'],
      rule: {
        en: `No article: *go to work / school / bed, go home, at home, at work*. In American English: *in **the** hospital, go to **the** doctor, go to **the** store*.`,
        uk: `Без артикля: *go to work / school / bed, go home, at home, at work*. В американській англійській: *in **the** hospital, go to **the** doctor, go to **the** store*.`,
        ru: `Без артикля: *go to work / school / bed, go home, at home, at work*. В американском английском: *in **the** hospital, go to **the** doctor, go to **the** store*.`,
      },
      more: {
        en: `**The idea.** Some places are about the **activity**, not the building, and then there's no article:
- *go to work, at work* — working
- *go to school, at school* — studying
- *go to bed, in bed* — sleeping
- *go home, at home* — no *to* with *go home*

If you mean the building itself, the article comes back: *I left my bag at **the** school* (the building).

American English has its own habits with some places: *in **the** hospital, go to **the** doctor, go to **the** store, go to **the** gym*.

✅ *I usually go to bed at eleven.*
❌ *I usually go to the bed at eleven.*

✅ *I usually walk to work.*
❌ *I usually walk to the work.*

✅ *She's in the hospital.* (American English)

**Check yourself:** *work, school, bed, home* as an activity → no article.`,
        uk: `**Суть.** Деякі місця — про **заняття**, а не про будівлю, і тоді артикля немає:
- *go to work, at work* — працювати
- *go to school, at school* — навчатися
- *go to bed, in bed* — спати
- *go home, at home* — з *go home* без *to*

Якщо йдеться про саму будівлю, артикль повертається: *I left my bag at the school* (у будівлі школи).

В американській англійській свої звички з деякими місцями: *in the hospital, go to the doctor, go to the store, go to the gym*.

✅ *I usually go to bed at eleven.*
❌ *I usually go to the bed at eleven.*

✅ *I usually walk to work.*
❌ *I usually walk to the work.*

✅ *She's in the hospital.* (американська англійська)

**Перевір себе:** *work, school, bed, home* як заняття → без артикля.`,
        ru: `**Суть.** Некоторые места — про **занятие**, а не про здание, и тогда артикля нет:
- *go to work, at work* — работать
- *go to school, at school* — учиться
- *go to bed, in bed* — спать
- *go home, at home* — с *go home* без *to*

Если речь о самом здании, артикль возвращается: *I left my bag at the school* (в здании школы).

В американском английском свои привычки с некоторыми местами: *in the hospital, go to the doctor, go to the store, go to the gym*.

✅ *I usually go to bed at eleven.*
❌ *I usually go to the bed at eleven.*

✅ *I usually walk to work.*
❌ *I usually walk to the work.*

✅ *She's in the hospital.* (американский английский)

**Проверь себя:** *work, school, bed, home* как занятие → без артикля.`,
      },
    },
    {
      for: ['names'],
      rule: {
        en: `No article with most countries, cities, streets and meals: *in Texas, on Main Street, for lunch*. But: **the** US, **the** UK, **the** Netherlands, **the** Philippines.`,
        uk: `Без артикля — більшість країн, міст, вулиць і назви прийомів їжі: *in Texas, on Main Street, for lunch*. Але: **the** US, **the** UK, **the** Netherlands, **the** Philippines.`,
        ru: `Без артикля — большинство стран, городов, улиц и названия приёмов пищи: *in Texas, on Main Street, for lunch*. Но: **the** US, **the** UK, **the** Netherlands, **the** Philippines.`,
      },
      more: {
        en: `**The idea.** A name already says which one, so most names take **no article**:
- countries, states, cities: *Ukraine, Canada, Texas, New York, Chicago*
- streets and parks: *Main Street, Central Park*
- meals: *for breakfast, for lunch, after dinner*

**the** comes with names that are plural or a "union" — they sound like a description:
- *the United States (the US), the United Kingdom (the UK), the Netherlands, the Philippines*
- also rivers, seas and oceans: *the Mississippi, the Black Sea, the Pacific*

✅ *We live in Texas.*
❌ *We live in the Texas.*

✅ *We moved to the United States in 2022.*
❌ *We moved to United States in 2022.*

**Check yourself:** a plain name → no article. *States, Kingdom*, a plural name, a river or an ocean → *the*.`,
        uk: `**Суть.** Назва вже каже, про що йдеться, тому більшість назв **без артикля**:
- країни, штати, міста: *Ukraine, Canada, Texas, New York, Chicago*
- вулиці й парки: *Main Street, Central Park*
- прийоми їжі: *for breakfast, for lunch, after dinner*

**the** — з назвами у множині або з «об'єднанням»: вони звучать як опис:
- *the United States (the US), the United Kingdom (the UK), the Netherlands, the Philippines*
- також річки, моря й океани: *the Mississippi, the Black Sea, the Pacific*

✅ *We live in Texas.*
❌ *We live in the Texas.*

✅ *We moved to the United States in 2022.*
❌ *We moved to United States in 2022.*

**Перевір себе:** проста назва → без артикля. *States, Kingdom*, назва в множині, річка чи океан → *the*.`,
        ru: `**Суть.** Название уже говорит, о чём речь, поэтому большинство названий **без артикля**:
- страны, штаты, города: *Ukraine, Canada, Texas, New York, Chicago*
- улицы и парки: *Main Street, Central Park*
- приёмы пищи: *for breakfast, for lunch, after dinner*

**the** — с названиями во множественном числе или с «объединением»: они звучат как описание:
- *the United States (the US), the United Kingdom (the UK), the Netherlands, the Philippines*
- также реки, моря и океаны: *the Mississippi, the Black Sea, the Pacific*

✅ *We live in Texas.*
❌ *We live in the Texas.*

✅ *We moved to the United States in 2022.*
❌ *We moved to United States in 2022.*

**Проверь себя:** простое название → без артикля. *States, Kingdom*, название во множественном, река или океан → *the*.`,
      },
    },
    {
      for: ['phrases'],
      rule: {
        en: `Fixed phrases: *twice a week, in the morning, the same, the first time*.`,
        uk: `Сталі вирази: *twice a week, in the morning, the same, the first time*.`,
        ru: `Устойчивые выражения: *twice a week, in the morning, the same, the first time*.`,
      },
      more: {
        en: `**The idea.** Some phrases just have their article, and it's easier to learn them as whole chunks than to think about rules:
- *twice **a** week, three times **a** day, $20 **an** hour* — «на тиждень / в неделю» → *a*
- ***in the** morning / afternoon / evening* (but *at night*)
- ***the** same, **the** first time, **the** next day, **the** last one*
- *What **a** day! What **a** nice surprise!*

✅ *I go to the gym three times a week.*
❌ *I go to the gym three times in week.*

✅ *I'll call you in the morning.*
❌ *I'll call you in morning.*

✅ *We have the same phone.*
❌ *We have same phone.*

**Check yourself:** *times a week*, *in the morning*, *the same* — say them as one word.`,
        uk: `**Суть.** Деякі фрази просто мають свій артикль, і легше вивчити їх цілими шматками, ніж думати про правила:
- *twice a week, three times a day, $20 an hour* — «на тиждень, на день, за годину» → *a*
- *in the morning / afternoon / evening* (але *at night*)
- *the same, the first time, the next day, the last one*
- *What a day! What a nice surprise!*

✅ *I go to the gym three times a week.*
❌ *I go to the gym three times in week.*

✅ *I'll call you in the morning.*
❌ *I'll call you in morning.*

✅ *We have the same phone.*
❌ *We have same phone.*

**Перевір себе:** *times a week*, *in the morning*, *the same* — вимовляй як одне слово.`,
        ru: `**Суть.** Некоторые фразы просто имеют свой артикль, и проще выучить их целыми кусками, чем думать о правилах:
- *twice a week, three times a day, $20 an hour* — «в неделю, в день, в час» → *a*
- *in the morning / afternoon / evening* (но *at night*)
- *the same, the first time, the next day, the last one*
- *What a day! What a nice surprise!*

✅ *I go to the gym three times a week.*
❌ *I go to the gym three times in week.*

✅ *I'll call you in the morning.*
❌ *I'll call you in morning.*

✅ *We have the same phone.*
❌ *We have same phone.*

**Проверь себя:** *times a week*, *in the morning*, *the same* — произноси как одно слово.`,
      },
    },
  ],
  examples: ["My sister is a nurse.", 'Can you close the door, please?', 'I love dogs.', "I'll be back in an hour.", 'We moved to the United States in 2022.'],
  trap: {
    uk: 'Мій чоловік — інженер.',
    ru: 'Мой муж — инженер.',
    wrong: 'My husband is engineer.',
    right: 'My husband is an engineer.',
    note: {
      en: 'Ukrainian and Russian have no articles, so the article simply disappears. In English a singular countable noun needs *a / an*, *the* or *my*. This is a habit, not a rule you forget — it gets better only with a lot of practice.',
      uk: 'В українській немає артиклів, тому артикль просто «зникає». Англійською злічуваний іменник в однині потребує *a / an*, *the* чи *my*. Це звичка, а не забуте правило — вона виробляється лише великою практикою.',
      ru: 'В русском нет артиклей, поэтому артикль просто «пропадает». По-английски исчисляемое существительное в единственном числе требует *a / an*, *the* или *my*. Это привычка, а не забытое правило — она вырабатывается только большой практикой.',
    },
  },
  errors: {
    'no-a': {
      en: 'A **singular countable** noun needs a word before it: **a / an**, **the**, *my, this…* Jobs too: *She\'s **a** nurse. Can I ask **a** question?*',
      uk: '**Злічуваний іменник в однині** потребує слова перед собою: **a / an**, **the**, *my, this…* Професії теж: *She\'s **a** nurse. Can I ask **a** question?*',
      ru: '**Исчисляемое существительное в единственном числе** требует слова перед собой: **a / an**, **the**, *my, this…* Профессии тоже: *She\'s **a** nurse. Can I ask **a** question?*',
    },
    'a-the': {
      en: '**a** = one of many, new information. **the** = we both know which one: mentioned before, the only one, clear from the situation: *a restaurant… the food there…; the door; the salt.*',
      uk: '**a** = одна з багатьох, нова інформація. **the** = обидва знаємо, яка саме: вже згадували, єдина, зрозуміло з ситуації: *a restaurant… the food there…; the door; the salt.*',
      ru: '**a** = одна из многих, новая информация. **the** = оба знаем, какая именно: уже упоминали, единственная, ясно из ситуации: *a restaurant… the food there…; the door; the salt.*',
    },
    general: {
      en: 'About things **in general** — plural or uncountable — **no article**: *I love dogs. Life is short. Children need love.* (*the* = these particular ones.)',
      uk: 'Про речі **загалом** — у множині чи незлічувані — **без артикля**: *I love dogs. Life is short. Children need love.* (*the* = саме ці.)',
      ru: 'О вещах **вообще** — во множественном числе или неисчисляемые — **без артикля**: *I love dogs. Life is short. Children need love.* (*the* = именно эти.)',
    },
    'a-an': {
      en: 'It is about the **sound**, not the letter: **an** + vowel sound (*an hour, an MRI, an 18-year-old*), **a** + consonant sound (*a university, a European, a one-way ticket*).',
      uk: 'Важить **звук**, а не літера: **an** + голосний звук (*an hour, an MRI, an 18-year-old*), **a** + приголосний звук (*a university, a European, a one-way ticket*).',
      ru: 'Важен **звук**, а не буква: **an** + гласный звук (*an hour, an MRI, an 18-year-old*), **a** + согласный звук (*a university, a European, a one-way ticket*).',
    },
    places: {
      en: 'No article in *go to work / school / bed, go home, at home, at work, at school*. American English: *in **the** hospital*, *go to **the** doctor / **the** store*.',
      uk: 'Без артикля: *go to work / school / bed, go home, at home, at work, at school*. В американській: *in **the** hospital*, *go to **the** doctor / **the** store*.',
      ru: 'Без артикля: *go to work / school / bed, go home, at home, at work, at school*. В американском: *in **the** hospital*, *go to **the** doctor / **the** store*.',
    },
    names: {
      en: 'No article with most names: countries, states, cities, streets (*Texas, New York, Main Street, Canada*). **the** with plural or "united" names: *the US, the UK, the Netherlands, the Philippines*, and rivers and oceans.',
      uk: 'Без артикля з більшістю назв: країни, штати, міста, вулиці (*Texas, New York, Main Street, Canada*). **the** — з назвами в множині чи «об\'єднаними»: *the US, the UK, the Netherlands, the Philippines*, а також з річками й океанами.',
      ru: 'Без артикля с большинством названий: страны, штаты, города, улицы (*Texas, New York, Main Street, Canada*). **the** — с названиями во множественном числе или «объединёнными»: *the US, the UK, the Netherlands, the Philippines*, а также с реками и океанами.',
    },
    phrases: {
      en: 'Fixed phrases to learn as a whole: *twice **a** week, **in the** morning, **the** same, **the** first time, what **a** day!*',
      uk: 'Сталі вирази — вчимо цілком: *twice **a** week, **in the** morning, **the** same, **the** first time, what **a** day!*',
      ru: 'Устойчивые выражения — учим целиком: *twice **a** week, **in the** morning, **the** same, **the** first time, what **a** day!*',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'a-first', l: 1, p: 'My sister is ___ nurse.', a: 'a', o: ['the', '—'], w: { the: 'a-the', '—': 'no-a' }, e: 'no-a' },
    { t: 'choose', pt: 'the-known', l: 1, p: 'Can you close ___ door, please?', a: 'the', o: ['a', '—'], w: { a: 'a-the', '—': 'no-a' }, e: 'a-the' },
    { t: 'choose', pt: 'general', l: 1, p: 'I love ___ dogs.', a: '—', o: ['the', 'a'], w: { the: 'general', a: 'general' }, e: 'general' },
    { t: 'choose', pt: 'an', l: 1, p: "I'll be back in ___ hour.", a: 'an', o: ['a', '—'], w: { a: 'a-an', '—': 'no-a' }, e: 'a-an' },
    { t: 'choose', pt: 'an', l: 1, p: 'She goes to ___ university in Boston.', a: 'a', o: ['an', '—'], w: { an: 'a-an', '—': 'no-a' }, e: 'a-an' },
    { t: 'choose', pt: 'places', l: 1, p: 'I usually go to ___ bed at eleven.', a: '—', o: ['the', 'a'], w: { the: 'places', a: 'places' }, e: 'places' },
    { t: 'choose', pt: 'names', l: 1, p: 'We live in ___ Texas.', a: '—', o: ['the', 'a'], w: { the: 'names', a: 'names' }, e: 'names' },
    { t: 'choose', pt: 'names', l: 1, p: 'We moved to ___ United States in 2022.', a: 'the', o: ['—', 'a'], w: { '—': 'names', a: 'names' }, e: 'names' },
    { t: 'fill', pt: 'a-first', l: 1, p: 'I need ___ new phone. Mine is broken.', a: 'a', w: { the: 'a-the', an: 'a-an' }, e: 'no-a' },
    { t: 'fill', pt: 'the-known', l: 1, p: 'I bought a dress and a bag. ___ dress was expensive.', a: 'The', w: { A: 'a-the' }, e: 'a-the' },
    { t: 'fill', pt: 'an', l: 1, p: 'It was ___ honest mistake.', a: 'an', w: { a: 'a-an', the: 'a-the' }, e: 'a-an' },
    { t: 'fill', pt: 'the-known', l: 1, p: "What's ___ name of your doctor?", a: 'the', w: { a: 'a-the' }, e: 'a-the' },
    { t: 'fill', pt: 'phrases', l: 1, p: 'I go to the gym three times ___ week.', a: ['a', 'per', 'each', 'every'], w: { the: 'phrases', in: 'phrases' }, e: 'phrases' },
    { t: 'fill', pt: 'phrases', l: 1, p: "I'll call you in ___ morning.", a: 'the', w: { a: 'phrases' }, e: 'phrases' },
    { t: 'build', pt: 'general', l: 1, a: ['Coffee is more expensive than tea here.', 'Here coffee is more expensive than tea.'], x: ['the'], e: 'general' },
    { t: 'build', pt: 'a-first', l: 1, a: 'My husband is an engineer.', x: ['the'], e: 'no-a' },
    { t: 'build', pt: 'places', l: 1, a: ['I usually walk to work.', 'Usually I walk to work.'], x: ['the'], e: 'places' },

    // ---------- Use
    { t: 'fill', pt: 'the-known', l: 2, p: "There's ___ new restaurant on our street. ___ food there is great.", a: 'a|The', w: { 'the|The': 'a-the', 'a|A': 'a-the' }, e: 'a-the' },
    { t: 'fill', pt: 'the-known', l: 2, p: 'Is there ___ pharmacy near here? — Yes, ___ pharmacy on the corner is open until 9.', a: 'a|the', w: { 'the|the': 'a-the', 'a|a': 'a-the' }, e: 'a-the' },
    { t: 'fill', pt: 'names', l: 2, p: "She's from ___ Netherlands.", a: 'the', w: { a: 'names' }, e: 'names' },
    { t: 'fill', pt: 'places', l: 2, p: 'My husband is in ___ hospital. He had surgery yesterday.', a: 'the', w: { a: 'places' }, e: 'places', n: 'American English: *in the hospital*. British English: *in hospital*.' },
    { t: 'fill', pt: 'phrases', l: 2, p: 'What ___ beautiful day!', a: 'a', w: { the: 'phrases' }, e: 'phrases' },
    { t: 'fill', pt: 'an', l: 2, p: 'I need ___ MRI next week.', a: 'an', w: { a: 'a-an', the: 'a-the' }, e: 'a-an', n: '*MRI* starts with the sound "em", a vowel sound, so *an*.' },
    { t: 'fill', pt: 'the-known', l: 2, p: '___ sun is very strong today. Use sunscreen!', a: 'The', w: { A: 'a-the' }, e: 'a-the' },
    { t: 'fill', pt: 'phrases', l: 2, p: 'We had ___ same problem last year.', a: 'the', w: { a: 'phrases' }, e: 'phrases' },
    { t: 'build', pt: 'names', l: 2, a: 'We had lunch on Main Street.', x: ['the'], e: 'names' },
    { t: 'fix', pt: 'a-first', l: 2, p: 'My husband is engineer.', a: ['My husband is an engineer.'], e: 'no-a' },
    { t: 'fix', pt: 'general', l: 2, p: 'The life in America is very different.', a: ['Life in America is very different.'], e: 'general' },
    { t: 'fix', pt: 'places', l: 2, p: "I'm going to the home now.", a: ["I'm going home now."], e: 'places' },
    { t: 'fix', pt: 'an', l: 2, p: 'She has a appointment at 3.', a: ['She has an appointment at 3.', 'She has an appointment at three.'], e: 'a-an' },
    { t: 'tr', pt: 'a-first', l: 2, i: 'Say what her job is: *teacher*.', p: 'My mother teaches at a school.', s: 'My mother is', a: ['My mother is a teacher.', 'My mother is a school teacher.', 'My mother is a schoolteacher.'], e: 'no-a' },
    { t: 'tr', pt: 'general', l: 2, i: 'Say it about coffee in general.', p: 'I like the coffee from this café.', s: 'I like', a: ['I like coffee.'], e: 'general' },
    { t: 'tl', pt: 'a-first', l: 2, uk: 'Мені потрібна довідка від лікаря.', ru: 'Мне нужна справка от врача.', a: ['I need a note from a doctor.', 'I need a note from the doctor.', 'I need a note from my doctor.', "I need a doctor's note.", 'I need a certificate from a doctor.', 'I need a certificate from the doctor.', "I need a doctor's certificate.", 'I need a medical certificate.', 'I need a letter from my doctor.', 'I need a letter from a doctor.'], e: 'no-a' },
    { t: 'tl', pt: 'places', l: 2, uk: 'Діти вже в школі, а чоловік на роботі.', ru: 'Дети уже в школе, а муж на работе.', a: ['The kids are already at school, and my husband is at work.', 'The children are already at school, and my husband is at work.', 'The kids are at school already, and my husband is at work.', 'The children are at school already, and my husband is at work.', 'The kids are already in school, and my husband is at work.', 'The kids are already at school, while my husband is at work.'], e: 'places' },

    // ---------- Pro
    { t: 'fix', pt: 'the-known', l: 3, p: 'I bought a new sofa. A sofa is very comfortable.', a: ['I bought a new sofa. The sofa is very comfortable.', 'I bought a new sofa. It is very comfortable.'], e: 'a-the' },
    { t: 'fix', pt: 'names', l: 3, p: 'We spent a week in the New York and then went to the Canada.', a: ['We spent a week in New York and then went to Canada.'], e: 'names' },
    { t: 'fix', pt: 'general', l: 3, p: 'The children need the love and the attention.', a: ['Children need love and attention.'], e: 'general' },
    { t: 'fix', pt: 'a-first', l: 3, p: 'Can I ask question?', a: ['Can I ask a question?', 'Can I ask you a question?'], e: 'no-a' },
    { t: 'tr', pt: 'phrases', l: 3, i: 'Say how often. Use *twice* and *week*.', p: 'I go swimming on Mondays and Thursdays.', s: 'I go swimming', a: ['I go swimming twice a week.'], e: 'phrases' },
    { t: 'tr', pt: 'places', l: 3, i: 'She is a patient there. Say it shortly.', p: 'My grandmother is staying at the hospital as a patient.', s: 'My grandmother is', a: ['My grandmother is in the hospital.', 'My grandmother is in hospital.'], e: 'places' },
    { t: 'tr', pt: 'names', l: 3, i: 'Say where she is from: *Philippines*.', p: 'She was born in Manila.', s: 'She is from', a: ['She is from the Philippines.'], e: 'names' },
    { t: 'tl', pt: 'general', l: 3, uk: "Я не п'ю каву після обіду.", ru: 'Я не пью кофе после обеда.', a: ["I don't drink coffee after lunch.", "I don't drink coffee in the afternoon.", "I don't drink coffee after noon.", "I don't drink coffee after dinner."], e: 'general' },
    { t: 'tl', pt: 'a-first', l: 3, uk: 'У нас невеликий будинок із садом.', ru: 'У нас небольшой дом с садом.', a: ['We have a small house with a garden.', 'We have a small house with a yard.', 'We have a little house with a garden.', 'We have a little house with a yard.', "We've got a small house with a garden.", "We've got a small house with a yard.", 'We have a small house with a backyard.'], e: 'no-a' },
    { t: 'tl', pt: 'names', l: 3, uk: 'Ми летимо до Нью-Йорка у вівторок.', ru: 'Мы летим в Нью-Йорк во вторник.', a: ["We're flying to New York on Tuesday.", 'We fly to New York on Tuesday.', "We'll fly to New York on Tuesday.", 'We are going to fly to New York on Tuesday.'], e: 'names' },
    { t: 'tl', pt: 'the-known', l: 3, uk: 'Передай, будь ласка, сіль.', ru: 'Передай, пожалуйста, соль.', a: ['Pass the salt, please.', 'Please pass the salt.', 'Could you pass the salt, please?', 'Can you pass the salt, please?', 'Could you please pass the salt?', 'Can you please pass the salt?', 'Could you pass the salt?', 'Can you pass the salt?', 'Pass me the salt, please.', 'Please pass me the salt.', 'Could you pass me the salt, please?', 'Can you pass me the salt, please?'], e: 'a-the' },
    { t: 'tl', pt: 'phrases', l: 3, uk: 'Я приймаю ці ліки двічі на день.', ru: 'Я принимаю это лекарство два раза в день.', a: ['I take this medicine twice a day.', 'I take this medication twice a day.', 'I take these pills twice a day.', 'I take this medicine two times a day.', 'I take this medication two times a day.', 'I take these meds twice a day.', 'I take this medicine twice daily.'], e: 'phrases' },
    { t: 'fill', pt: 'the-known', l: 3, p: 'Could you turn off ___ lights when you leave?', a: 'the', w: { a: 'a-the' }, e: 'a-the' },
    { t: 'fill', pt: 'an', l: 3, p: "He's ___ 18-year-old student.", a: 'an', w: { a: 'a-an', the: 'a-the' }, e: 'a-an', n: '*18* is read "eighteen" — a vowel sound, so *an*.' },
    { t: 'fill', pt: 'phrases', l: 3, p: "It's ___ first time I've seen snow!", a: 'the', w: { a: 'phrases' }, e: 'phrases' },
  ],
});
