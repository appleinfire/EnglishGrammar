APP.addTopic({
  id: 'quant',
  title: 'much, many, some, any, a few',
  level: 'A2',
  group: 'Articles & nouns',
  icon: '🧺',
  about: 'countable and uncountable, there is / there are',
  rule: {
    en: `- **Countable** nouns have a plural: *a day → days, a person → people*. **Uncountable** nouns have no plural and no *a*: *money, time, water, advice, information, news, furniture, luggage, homework*. (*The news **is**…; some advice, a piece of advice.*)
- **many** + plural (*many people*), **much** + uncountable (*much time*). In positive sentences people usually say **a lot of / lots of**: *We have a lot of homework.* **How many** chairs? **How much** money? **How much** is it?
- **some** — positive sentences, offers, requests: *Would you like some coffee? Can I have some water?* **any** — negatives and questions: *I don't have any cash. Are there any messages?*
- **no** = *not any*: *There's no milk* = *There isn't any milk.* Never both: *I don't have **any** time* (not *don't have no*).
- **a few** + plural (*a few minutes*), **a little** + uncountable (*a little Spanish*). Without *a*: **few / little** = not enough: *Very few people know.*
- **there is** + singular / uncountable, **there are** + plural: *There are two pharmacies on our street.* (Ukrainian / Russian *є / есть* → *there is*, not *it has*.)`,
    uk: `- **Злічувані** іменники мають множину: *a day → days, a person → people*. **Незлічувані** — без множини і без *a*: *money, time, water, advice, information, news, furniture, luggage, homework*. (*The news **is**…; some advice, a piece of advice* — «порада».)
- **many** + множина (*many people*), **much** + незлічуване (*much time*). У стверджувальних реченнях частіше кажуть **a lot of / lots of**: *We have a lot of homework.* **How many** chairs? **How much** money? **How much** is it? — «Скільки коштує?»
- **some** — стверджувальні речення, пропозиції, прохання: *Would you like some coffee? Can I have some water?* **any** — заперечення й питання: *I don't have any cash. Are there any messages?*
- **no** = *not any*: *There's no milk* = *There isn't any milk.* Ніколи разом: *I don't have **any** time* (не *don't have no*).
- **a few** + множина (*a few minutes*), **a little** + незлічуване (*a little Spanish*). Без *a*: **few / little** = мало, недостатньо: *Very few people know.*
- **there is** + однина / незлічуване, **there are** + множина: *There are two pharmacies on our street.* (Українське «є» → *there is*, а не *it has*.)`,
    ru: `- **Исчисляемые** существительные имеют множественное число: *a day → days, a person → people*. **Неисчисляемые** — без множественного и без *a*: *money, time, water, advice, information, news, furniture, luggage, homework*. (*The news **is**…; some advice, a piece of advice* — «совет».)
- **many** + множественное (*many people*), **much** + неисчисляемое (*much time*). В утвердительных предложениях чаще говорят **a lot of / lots of**: *We have a lot of homework.* **How many** chairs? **How much** money? **How much** is it? — «Сколько стоит?»
- **some** — утвердительные предложения, предложения, просьбы: *Would you like some coffee? Can I have some water?* **any** — отрицания и вопросы: *I don't have any cash. Are there any messages?*
- **no** = *not any*: *There's no milk* = *There isn't any milk.* Никогда вместе: *I don't have **any** time* (не *don't have no*).
- **a few** + множественное (*a few minutes*), **a little** + неисчисляемое (*a little Spanish*). Без *a*: **few / little** = мало, недостаточно: *Very few people know.*
- **there is** + единственное / неисчисляемое, **there are** + множественное: *There are two pharmacies on our street.* (Русское «есть» → *there is*, а не *it has*.)`,
  },
  examples: ['How many people came to the party?', "I don't have much time today.", 'Would you like some coffee?', 'Can you wait a few minutes?', 'There are two pharmacies on our street.'],
  trap: {
    uk: 'Вона дала мені хорошу пораду.',
    ru: 'Она дала мне хороший совет.',
    wrong: 'She gave me a good advice.',
    right: 'She gave me some good advice.',
    note: {
      en: '*порада / совет* is countable in Ukrainian and Russian, but *advice* is uncountable in English: no *a*, no *advices*. The same with *information, news, furniture, luggage, homework*.',
      uk: '«Порада» злічувана, а *advice* в англійській незлічуване: без *a* і без *advices*. Так само *information, news, furniture, luggage, homework*.',
      ru: '«Совет» исчисляемый, а *advice* в английском неисчисляемое: без *a* и без *advices*. Так же *information, news, furniture, luggage, homework*.',
    },
  },
  errors: {
    'much-many': {
      en: '**many** + plural (*many people, How many times?*), **much** + uncountable (*much time, How much money? How much is it?*).',
      uk: '**many** + множина (*many people, How many times?*), **much** + незлічуване (*much time, How much money? How much is it?*).',
      ru: '**many** + множественное (*many people, How many times?*), **much** + неисчисляемое (*much time, How much money? How much is it?*).',
    },
    'some-any': {
      en: '**some** in positive sentences, offers and requests (*Would you like some…? Can I have some…?*); **any** in negatives and questions (*I don\'t have any…, Are there any…?*).',
      uk: '**some** — у стверджувальних реченнях, пропозиціях і проханнях (*Would you like some…? Can I have some…?*); **any** — у запереченнях і питаннях (*I don\'t have any…, Are there any…?*).',
      ru: '**some** — в утвердительных предложениях, предложениях и просьбах (*Would you like some…? Can I have some…?*); **any** — в отрицаниях и вопросах (*I don\'t have any…, Are there any…?*).',
    },
    'few-little': {
      en: '**a few** + plural (*a few minutes, a few friends*), **a little** + uncountable (*a little salt, a little Spanish*). **few / little** without *a* = not enough.',
      uk: '**a few** + множина (*a few minutes, a few friends*), **a little** + незлічуване (*a little salt, a little Spanish*). **few / little** без *a* = замало.',
      ru: '**a few** + множественное (*a few minutes, a few friends*), **a little** + неисчисляемое (*a little salt, a little Spanish*). **few / little** без *a* = мало, недостаточно.',
    },
    uncount: {
      en: '*advice, information, news, furniture, luggage, homework, money, work* are **uncountable**: no *a / an*, no *-s*, singular verb: *some advice, the news is…, a piece of advice*.',
      uk: '*advice, information, news, furniture, luggage, homework, money, work* — **незлічувані**: без *a / an*, без *-s*, дієслово в однині: *some advice, the news is…, a piece of advice*.',
      ru: '*advice, information, news, furniture, luggage, homework, money, work* — **неисчисляемые**: без *a / an*, без *-s*, глагол в единственном числе: *some advice, the news is…, a piece of advice*.',
    },
    there: {
      en: 'To say something exists → **there is** (singular, uncountable) / **there are** (plural). *У нас є / У нас есть парк* → *There\'s a park…* (or *We have a park*), not *It has a park*.',
      uk: 'Щоб сказати, що щось є → **there is** (однина, незлічуване) / **there are** (множина). «Біля нас є парк» → *There\'s a park…*, а не *It has a park*.',
      ru: 'Чтобы сказать, что что-то есть → **there is** (единственное, неисчисляемое) / **there are** (множественное). «Рядом есть парк» → *There\'s a park…*, а не *It has a park*.',
    },
    'a-lot': {
      en: '**a lot of** (with *of*) or **lots of** + noun: *a lot of friends, lots of homework*. In positive sentences it sounds more natural than *much / many*.',
      uk: '**a lot of** (з *of*) або **lots of** + іменник: *a lot of friends, lots of homework*. У стверджувальних реченнях звучить природніше, ніж *much / many*.',
      ru: '**a lot of** (с *of*) или **lots of** + существительное: *a lot of friends, lots of homework*. В утвердительных предложениях звучит естественнее, чем *much / many*.',
    },
    'no-any': {
      en: 'One negative is enough: **There\'s no…** = **There isn\'t any…**; *I don\'t have any time* or *I have no time* — never *don\'t have no*.',
      uk: 'Достатньо одного заперечення: **There\'s no…** = **There isn\'t any…**; *I don\'t have any time* або *I have no time* — ніколи *don\'t have no*.',
      ru: 'Достаточно одного отрицания: **There\'s no…** = **There isn\'t any…**; *I don\'t have any time* или *I have no time* — никогда *don\'t have no*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'much-many', l: 1, p: 'How ___ people came to the party?', a: 'many', o: ['much'], w: { much: 'much-many' }, e: 'much-many' },
    { t: 'choose', pt: 'much-many', l: 1, p: "I don't have ___ time today.", a: 'much', o: ['many'], w: { many: 'much-many' }, e: 'much-many' },
    { t: 'choose', pt: 'some-any', l: 1, p: "I don't have ___ cash on me.", a: 'any', o: ['some', 'no'], w: { some: 'some-any', no: 'no-any' }, e: 'some-any' },
    { t: 'choose', pt: 'few-little', l: 1, p: 'Can you wait ___ minutes?', a: 'a few', o: ['a little', 'much'], w: { 'a little': 'few-little', much: 'much-many' }, e: 'few-little' },
    { t: 'choose', pt: 'uncount', l: 1, p: 'Can I give you some ___?', a: 'advice', o: ['advices'], w: { advices: 'uncount' }, e: 'uncount' },
    { t: 'choose', pt: 'there', l: 1, p: 'There ___ two pharmacies on our street.', a: 'are', o: ['is', 'have'], w: { is: 'there', have: 'there' }, e: 'there' },
    { t: 'choose', pt: 'few-little', l: 1, p: 'I speak ___ Spanish.', a: 'a little', o: ['a few', 'many'], w: { 'a few': 'few-little', many: 'much-many' }, e: 'few-little' },
    { t: 'fill', pt: 'some-any', l: 1, p: 'Would you like ___ coffee?', a: 'some', w: { any: 'some-any' }, e: 'some-any' },
    { t: 'fill', pt: 'much-many', l: 1, p: 'How ___ does this jacket cost?', a: 'much', w: { many: 'much-many' }, e: 'much-many' },
    { t: 'fill', pt: 'a-lot', l: 1, p: 'She has a lot ___ friends at work.', a: 'of', e: 'a-lot' },
    { t: 'fill', pt: 'uncount', l: 1, p: 'We need some new ___ (furniture) for the living room.', a: 'furniture', w: { furnitures: 'uncount' }, e: 'uncount' },
    { t: 'fill', pt: 'there', l: 1, p: 'There ___ (be) a lot of traffic this morning.', a: ['was', 'is'], w: { were: 'there', are: 'there' }, e: 'there' },
    { t: 'fill', pt: 'some-any', l: 1, p: "There isn't ___ milk in the fridge.", a: 'any', w: { some: 'some-any', no: 'no-any' }, e: 'some-any' },
    { t: 'fill', pt: 'few-little', l: 1, p: 'We have very ___ time — hurry up!', a: 'little', w: { few: 'few-little' }, e: 'few-little' },
    { t: 'build', pt: 'much-many', l: 1, a: 'How many children do you have?', x: ['much'], e: 'much-many' },
    { t: 'build', pt: 'uncount', l: 1, a: 'Can I ask for some information?', x: ['informations'], e: 'uncount' },
    { t: 'build', pt: 'some-any', l: 1, a: "I don't have any plans for the weekend.", x: ['some'], e: 'some-any' },

    // ---------- Use
    { t: 'fill', pt: 'uncount', l: 2, p: 'The news ___ (be) really bad today.', a: 'is', w: { are: 'uncount' }, e: 'uncount' },
    { t: 'fill', pt: 'much-many', l: 2, p: "We don't have ___ money, and we don't have ___ friends here yet.", a: 'much|many', w: { 'many|much': 'much-many', 'many|many': 'much-many', 'much|much': 'much-many' }, e: 'much-many' },
    { t: 'fill', pt: 'few-little', l: 2, p: 'There are only ___ eggs left. We need to buy more.', a: ['a few', 'few'], w: { 'a little': 'few-little', little: 'few-little' }, e: 'few-little' },
    { t: 'fill', pt: 'a-lot', l: 2, p: 'We have ___ of homework tonight.', a: ['a lot', 'lots'], w: { many: 'much-many', much: 'a-lot' }, e: 'a-lot' },
    { t: 'fill', pt: 'some-any', l: 2, p: 'Can I have ___ water, please?', a: 'some', w: { any: 'some-any' }, e: 'some-any' },
    { t: 'fill', pt: 'no-any', l: 2, p: 'There are ___ seats left — the bus is full.', a: 'no', w: { any: 'no-any', not: 'no-any' }, e: 'no-any' },
    { t: 'fill', pt: 'uncount', l: 2, p: 'My suitcase is heavy — I have too much ___ (luggage).', a: 'luggage', w: { luggages: 'uncount' }, e: 'uncount' },
    { t: 'fill', pt: 'there', l: 2, p: '___ there any messages for me?', a: 'Are', w: { Is: 'there', Have: 'there' }, e: 'there' },
    { t: 'build', pt: 'few-little', l: 2, a: 'I need a little help with this form.', x: ['few'], e: 'few-little' },
    { t: 'fix', pt: 'uncount', l: 2, p: 'She gave me a good advice.', a: ['She gave me good advice.', 'She gave me some good advice.', 'She gave me a good piece of advice.', 'She gave me a piece of good advice.'], e: 'uncount' },
    { t: 'fix', pt: 'much-many', l: 2, p: 'There were too much people at the store.', a: ['There were too many people at the store.'], e: 'much-many' },
    { t: 'fix', pt: 'no-any', l: 2, p: "I don't have no time today.", a: ["I don't have any time today.", 'I have no time today.'], e: 'no-any' },
    { t: 'fix', pt: 'a-lot', l: 2, p: 'We have a lot problems with the landlord.', a: ['We have a lot of problems with the landlord.', 'We have lots of problems with the landlord.'], e: 'a-lot' },
    { t: 'tr', pt: 'no-any', l: 2, i: 'Say the same with *no*.', p: "There isn't any parking here.", s: "There's", a: ["There's no parking here."], e: 'no-any' },
    { t: 'tr', pt: 'much-many', l: 2, i: 'Ask about the number with *How many / How much*.', p: 'We need three bags.', s: 'How', a: ['How many bags do we need?'], e: 'much-many' },
    { t: 'tl', pt: 'uncount', l: 2, uk: 'Мені потрібна інформація про страховку.', ru: 'Мне нужна информация о страховке.', a: ['I need some information about the insurance.', 'I need information about the insurance.', 'I need some information about insurance.', 'I need information about insurance.', 'I need information about my insurance.', 'I need some information about my insurance.'], e: 'uncount' },
    { t: 'tl', pt: 'few-little', l: 2, uk: 'У мене є кілька питань.', ru: 'У меня есть несколько вопросов.', a: ['I have a few questions.', "I've got a few questions.", 'I have some questions.', 'I have several questions.'], e: 'few-little' },

    // ---------- Pro
    { t: 'fix', pt: 'uncount', l: 3, p: 'The news are not good.', a: ['The news is not good.'], e: 'uncount' },
    { t: 'fix', pt: 'few-little', l: 3, p: 'I have a little friends here.', a: ['I have a few friends here.', 'I have few friends here.'], e: 'few-little' },
    { t: 'fix', pt: 'there', l: 3, p: 'It has a nice park near our house.', a: ["There's a nice park near our house."], e: 'there' },
    { t: 'fix', pt: 'much-many', l: 3, p: 'How much times did you call?', a: ['How many times did you call?'], e: 'much-many' },
    { t: 'tr', pt: 'a-lot', l: 3, i: 'Make it positive with *a lot of*.', p: "We don't have much free time.", s: 'We have', a: ['We have a lot of free time.', 'We have lots of free time.'], e: 'a-lot' },
    { t: 'tr', pt: 'some-any', l: 3, i: 'Make it negative.', p: 'There are some apples in the bowl.', s: 'There', a: ["There aren't any apples in the bowl.", 'There are no apples in the bowl.'], e: 'some-any' },
    { t: 'tr', pt: 'few-little', l: 3, i: 'Say it with *a little* or *a few*.', p: 'Add some salt, but not much.', s: 'Add', a: ['Add a little salt.'], e: 'few-little' },
    { t: 'tl', pt: 'there', l: 3, uk: 'У нашому місті є гарний парк.', ru: 'В нашем городе есть красивый парк.', a: ["There's a beautiful park in our town.", "There's a beautiful park in our city.", "There's a nice park in our town.", "There's a nice park in our city.", 'Our town has a beautiful park.', 'Our city has a beautiful park.', 'Our town has a nice park.', 'Our city has a nice park.'], e: 'there' },
    { t: 'tl', pt: 'much-many', l: 3, uk: 'Скільки коштує ця сумка?', ru: 'Сколько стоит эта сумка?', a: ['How much does this bag cost?', 'How much is this bag?', 'How much does this purse cost?', 'How much is this purse?'], e: 'much-many' },
    { t: 'tl', pt: 'no-any', l: 3, uk: 'У мене немає ніяких планів на вихідні.', ru: 'У меня нет никаких планов на выходные.', a: ["I don't have any plans for the weekend.", 'I have no plans for the weekend.', "I haven't got any plans for the weekend."], e: 'no-any' },
    { t: 'tl', pt: 'uncount', l: 3, uk: 'Скільки багажу можна брати з собою?', ru: 'Сколько багажа можно брать с собой?', a: ['How much luggage can I take with me?', 'How much luggage can I bring?', 'How much luggage can I take?', 'How much luggage can I bring with me?', 'How much baggage can I take with me?', 'How much baggage can I bring?', 'How much luggage can we take with us?', 'How much luggage am I allowed to take?', 'How much luggage is allowed?'], e: 'uncount' },
    { t: 'tl', pt: 'a-lot', l: 3, uk: 'У неї багато друзів в Америці.', ru: 'У неё много друзей в Америке.', a: ['She has a lot of friends in America.', 'She has many friends in America.', 'She has lots of friends in America.', "She's got a lot of friends in America.", 'She has a lot of friends in the US.'], e: 'a-lot' },
    { t: 'fill', pt: 'there', l: 3, p: '___ there enough chairs for everyone?', a: 'Are', w: { Is: 'there', Have: 'there' }, e: 'there' },
    { t: 'fill', pt: 'few-little', l: 3, p: 'Very ___ people know about this discount.', a: 'few', w: { little: 'few-little', 'a few': 'few-little', much: 'much-many' }, e: 'few-little' },
    { t: 'fill', pt: 'uncount', l: 3, p: 'How much ___ (homework) do the kids get?', a: 'homework', w: { homeworks: 'uncount' }, e: 'uncount' },
  ],
});
