APP.addTopic({
  id: 'comp',
  title: 'Comparing: cheaper, more expensive, the best',
  level: 'A2',
  group: 'Adjectives & adverbs',
  icon: '📏',
  about: '-er / more, than, the most, as… as',
  rule: {
    en: `- **Short** adjectives (one syllable, or two ending in *-y*) → **-er / the -est**: *cheap → cheaper → the cheapest; big → bigger; easy → easier*.
- **Long** adjectives → **more / the most**: *more expensive, the most comfortable*. Never both: *cheaper*, not *more cheaper*.
- Irregular: *good → better → the best, bad → worse → the worst, far → farther / further, many / much → more, little → less*.
- Compare with **than**: *older than me, more than before*. (Not *that, as, then*.)
- The superlative takes **the**: *the best restaurant in town, the most beautiful place I've ever seen*. Usually *in* + a place.
- Equal: **as … as** — *as tall as his father*. Not equal: **not as … as** — *It isn't as cold here as in Chicago.* Same: **the same as** (not *the same like*).
- Stronger: **much / a lot / far** + comparative: *much cheaper* (not *very cheaper*). Growing: *colder and colder, more and more expensive*.`,
    uk: `- **Короткі** прикметники (один склад або два з *-y* в кінці) → **-er / the -est**: *cheap → cheaper → the cheapest; big → bigger; easy → easier*.
- **Довгі** прикметники → **more / the most**: *more expensive, the most comfortable*. Ніколи разом: *cheaper*, а не *more cheaper*.
- Неправильні: *good → better → the best, bad → worse → the worst, far → farther / further, many / much → more, little → less*.
- Порівнюємо через **than** («ніж, за»): *older than me, more than before*. (Не *that, as, then*.)
- Найвищий ступінь — з **the**: *the best restaurant in town, the most beautiful place I've ever seen*. Зазвичай *in* + місце.
- Однаково: **as … as** — *as tall as his father*. Не однаково: **not as … as** — *It isn't as cold here as in Chicago.* Такий самий: **the same as** (не *the same like*).
- Сильніше: **much / a lot / far** + порівняльний ступінь: *much cheaper* (не *very cheaper*). Наростання: *colder and colder, more and more expensive*.`,
    ru: `- **Короткие** прилагательные (один слог или два с *-y* на конце) → **-er / the -est**: *cheap → cheaper → the cheapest; big → bigger; easy → easier*.
- **Длинные** прилагательные → **more / the most**: *more expensive, the most comfortable*. Никогда вместе: *cheaper*, а не *more cheaper*.
- Неправильные: *good → better → the best, bad → worse → the worst, far → farther / further, many / much → more, little → less*.
- Сравниваем через **than** («чем»): *older than me, more than before*. (Не *that, as, then*.)
- Превосходная степень — с **the**: *the best restaurant in town, the most beautiful place I've ever seen*. Обычно *in* + место.
- Одинаково: **as … as** — *as tall as his father*. Не одинаково: **not as … as** — *It isn't as cold here as in Chicago.* Такой же: **the same as** (не *the same like*).
- Сильнее: **much / a lot / far** + сравнительная степень: *much cheaper* (не *very cheaper*). Нарастание: *colder and colder, more and more expensive*.`,
  },
  examples: ['This phone is cheaper than my old one.', 'Flying is more expensive than driving.', 'This is the best restaurant in town.', "It isn't as cold here as in Chicago.", 'Prices are getting higher and higher.'],
  trap: {
    uk: 'Тут дорожче, ніж у Києві.',
    ru: 'Здесь дороже, чем в Киеве.',
    wrong: 'Here is more expensive that in Kyiv.',
    right: "It's more expensive here than in Kyiv.",
    note: {
      en: 'Two traps: English needs a subject (*It\'s… here*), and *ніж / чем* is **than**, not *that*.',
      uk: 'Дві пастки: англійському реченню потрібен підмет (*It\'s… here*), а «ніж» — це **than**, а не *that*.',
      ru: 'Две ловушки: английскому предложению нужно подлежащее (*It\'s… here*), а «чем» — это **than**, а не *that*.',
    },
  },
  errors: {
    er: {
      en: 'Short adjectives (one syllable, or two ending in *-y*) → **-er / the -est**: *cheaper, bigger, easier, the tallest*. Not *more cheap, the most tall*.',
      uk: 'Короткі прикметники (один склад або два з *-y*) → **-er / the -est**: *cheaper, bigger, easier, the tallest*. Не *more cheap, the most tall*.',
      ru: 'Короткие прилагательные (один слог или два с *-y*) → **-er / the -est**: *cheaper, bigger, easier, the tallest*. Не *more cheap, the most tall*.',
    },
    more: {
      en: 'Long adjectives (two or more syllables) → **more / the most**: *more expensive, more convenient, the most comfortable*. Not *expensiver*.',
      uk: 'Довгі прикметники (два і більше складів) → **more / the most**: *more expensive, more convenient, the most comfortable*. Не *expensiver*.',
      ru: 'Длинные прилагательные (два и более слогов) → **more / the most**: *more expensive, more convenient, the most comfortable*. Не *expensiver*.',
    },
    double: {
      en: 'Only one marker: *cheaper* **or** *more expensive* — never *more cheaper*. Stronger: *much / a lot / far cheaper* (not *very cheaper*). Growing: *colder and colder*.',
      uk: 'Лише один показник: *cheaper* **або** *more expensive* — ніколи *more cheaper*. Сильніше: *much / a lot / far cheaper* (не *very cheaper*). Наростання: *colder and colder*.',
      ru: 'Только один показатель: *cheaper* **или** *more expensive* — никогда *more cheaper*. Сильнее: *much / a lot / far cheaper* (не *very cheaper*). Нарастание: *colder and colder*.',
    },
    than: {
      en: 'The word for comparing is **than**: *bigger than, more than*. Not *that* (что), *as*, or *then* (тоді).',
      uk: 'Слово для порівняння — **than** («ніж, за»): *bigger than, more than*. Не *that*, не *as*, не *then* (тоді).',
      ru: 'Слово для сравнения — **than** («чем»): *bigger than, more than*. Не *that*, не *as*, не *then* (тогда).',
    },
    irr: {
      en: 'Irregular forms: **good → better → the best, bad → worse → the worst, far → farther / further, many / much → more, little → less**.',
      uk: 'Неправильні форми: **good → better → the best, bad → worse → the worst, far → farther / further, many / much → more, little → less**.',
      ru: 'Неправильные формы: **good → better → the best, bad → worse → the worst, far → farther / further, many / much → more, little → less**.',
    },
    super: {
      en: 'The superlative needs **the**: *the best, the coldest, the most beautiful*. With a place → **in**: *the best doctor in our city*.',
      uk: 'Найвищий ступінь — з **the**: *the best, the coldest, the most beautiful*. З місцем → **in**: *the best doctor in our city*.',
      ru: 'Превосходная степень — с **the**: *the best, the coldest, the most beautiful*. С местом → **in**: *the best doctor in our city*.',
    },
    'as-as': {
      en: 'Equal → **as … as**; not equal → **not as … as**; the same → **the same as** (not *the same like*, not *as … than*).',
      uk: 'Однаково → **as … as**; не однаково → **not as … as**; такий самий → **the same as** (не *the same like* і не *as … than*).',
      ru: 'Одинаково → **as … as**; не одинаково → **not as … as**; такой же → **the same as** (не *the same like* и не *as … than*).',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'er', l: 1, p: 'This phone is ___ than my old one.', a: 'cheaper', o: ['more cheap', 'cheapest'], w: { 'more cheap': 'er', cheapest: 'super' }, e: 'er' },
    { t: 'choose', pt: 'more', l: 1, p: 'Flying is ___ than driving.', a: 'more expensive', o: ['expensiver', 'most expensive'], w: { expensiver: 'more', 'most expensive': 'super' }, e: 'more' },
    { t: 'choose', pt: 'than', l: 1, p: 'My sister is older ___ me.', a: 'than', o: ['that', 'as'], w: { that: 'than', as: 'than' }, e: 'than' },
    { t: 'choose', pt: 'irr', l: 1, p: 'Your English is ___ than mine.', a: 'better', o: ['gooder', 'more good'], w: { gooder: 'irr', 'more good': 'irr' }, e: 'irr' },
    { t: 'choose', pt: 'super', l: 1, p: 'This is ___ restaurant in town.', a: 'the best', o: ['the better', 'best'], w: { 'the better': 'super', best: 'super' }, e: 'super' },
    { t: 'choose', pt: 'as-as', l: 1, p: 'My son is as tall ___ his father.', a: 'as', o: ['than', 'like'], w: { than: 'as-as', like: 'as-as' }, e: 'as-as' },
    { t: 'choose', pt: 'irr', l: 1, p: 'The traffic today is ___ than yesterday.', a: 'worse', o: ['badder', 'worst'], w: { badder: 'irr', worst: 'irr' }, e: 'irr' },
    { t: 'fill', pt: 'er', l: 1, p: 'Can you speak a little ___ (slow), please?', a: ['slower', 'more slowly'], w: { 'more slower': 'double', 'more slow': 'er' }, e: 'er' },
    { t: 'fill', pt: 'er', l: 1, p: 'Texas is ___ (big) than California.', a: 'bigger', w: { 'more big': 'er' }, e: 'er' },
    { t: 'fill', pt: 'super', l: 1, p: "It's ___ (cold) day of the year.", a: 'the coldest', w: { 'the colder': 'super', 'the most cold': 'er', coldest: 'super' }, e: 'super' },
    { t: 'fill', pt: 'more', l: 1, p: 'This sofa is ___ (comfortable) than the old one.', a: 'more comfortable', w: { comfortabler: 'more' }, e: 'more' },
    { t: 'fill', pt: 'er', l: 1, p: 'The test today was ___ (easy) than yesterday.', a: 'easier', w: { 'more easy': 'er' }, e: 'er' },
    { t: 'fill', pt: 'as-as', l: 1, p: "The new apartment isn't as big ___ the old one.", a: 'as', w: { than: 'as-as', like: 'as-as' }, e: 'as-as' },
    { t: 'fill', pt: 'super', l: 1, p: "She's the smartest person ___ our family.", a: 'in', w: { of: 'super', from: 'super' }, e: 'super' },
    { t: 'build', pt: 'than', l: 1, a: 'My husband is taller than me.', x: ['that'], e: 'than' },
    { t: 'build', pt: 'super', l: 1, a: 'This is the most beautiful park in the city.', x: ['more'], e: 'super' },
    { t: 'build', pt: 'as-as', l: 1, a: 'Your bag is the same as mine.', x: ['like'], e: 'as-as' },

    // ---------- Use
    { t: 'fill', pt: 'irr', l: 2, p: 'Is the hospital ___ (far) than the school?', a: ['farther', 'further'], w: { farer: 'irr', 'more far': 'irr' }, e: 'irr' },
    { t: 'fill', pt: 'double', l: 2, p: 'My new job is much ___ (good) than the old one.', a: 'better', w: { 'more better': 'double', gooder: 'irr' }, e: 'double' },
    { t: 'fill', pt: 'super', l: 2, p: "That was ___ (bad) movie I've ever seen.", a: 'the worst', w: { 'the baddest': 'irr', 'the worse': 'irr' }, e: 'super' },
    { t: 'fill', pt: 'more', l: 2, p: 'Online shopping is ___ (convenient) than going to the mall.', a: 'more convenient', w: { convenienter: 'more' }, e: 'more' },
    { t: 'fill', pt: 'as-as', l: 2, p: 'This coat is twice ___ expensive as that one.', a: 'as', w: { more: 'as-as' }, e: 'as-as' },
    { t: 'fill', pt: 'er', l: 2, p: 'The ___ (old) I get, the ___ (wise) I become.', a: 'older|wiser', w: { 'more old|more wise': 'er' }, e: 'er' },
    { t: 'fill', pt: 'double', l: 2, p: "This one is ___ cheaper — let's buy it.", a: ['much', 'a lot', 'far', 'way'], w: { very: 'double', more: 'double' }, e: 'double', n: '*very* does not go with comparatives: *much cheaper*, not *very cheaper*.' },
    { t: 'fill', pt: 'irr', l: 2, p: 'We have ___ (many) problems than before.', a: 'more', w: { 'more many': 'irr', manier: 'irr' }, e: 'irr' },
    { t: 'build', pt: 'irr', l: 2, a: 'Today I feel much better.', x: ['more'], e: 'double' },
    { t: 'fix', pt: 'double', l: 2, p: 'This hotel is more cheaper than that one.', a: ['This hotel is cheaper than that one.', 'This hotel is much cheaper than that one.'], e: 'double' },
    { t: 'fix', pt: 'than', l: 2, p: 'Kyiv is bigger as Lviv.', a: ['Kyiv is bigger than Lviv.'], e: 'than' },
    { t: 'fix', pt: 'as-as', l: 2, p: 'Your phone is the same like mine.', a: ['Your phone is the same as mine.'], e: 'as-as' },
    { t: 'fix', pt: 'er', l: 2, p: "He's the most tall in his class.", a: ["He's the tallest in his class.", "He's the tallest boy in his class.", "He's the tallest kid in his class.", "He's the tallest student in his class."], e: 'er' },
    { t: 'tr', pt: 'as-as', l: 2, i: 'Rewrite with *not as… as*.', p: 'My car is faster than yours.', s: 'Your car', a: ["Your car isn't as fast as mine."], e: 'as-as' },
    { t: 'tr', pt: 'super', l: 2, i: 'Use the superlative: *the… in the world*.', p: 'No other mountain is as high as Everest.', s: 'Everest', a: ['Everest is the highest mountain in the world.', 'Everest is the tallest mountain in the world.'], e: 'super' },
    { t: 'tl', pt: 'more', l: 2, uk: 'Тут дорожче, ніж у Києві.', ru: 'Здесь дороже, чем в Киеве.', a: ["It's more expensive here than in Kyiv.", 'Everything is more expensive here than in Kyiv.', 'Things are more expensive here than in Kyiv.', 'Life here is more expensive than in Kyiv.', "It's more expensive here than it is in Kyiv."], e: 'more' },
    { t: 'tl', pt: 'irr', l: 2, uk: 'Мені вже краще, дякую.', ru: 'Мне уже лучше, спасибо.', a: ['I feel better now, thank you.', 'I feel better now, thanks.', "I'm feeling better, thank you.", "I'm feeling better, thanks.", "I'm already feeling better, thank you.", "I'm better now, thank you.", "I'm better now, thanks.", "I'm already better, thank you.", 'I already feel better, thank you.', 'I feel better already, thanks.', 'I feel better, thank you.', 'I feel better, thanks.', "I'm feeling better now, thank you."], e: 'irr' },

    // ---------- Pro
    { t: 'fix', pt: 'than', l: 3, p: 'I earn more then my husband.', a: ['I earn more than my husband.', 'I earn more than my husband does.'], e: 'than' },
    { t: 'fix', pt: 'irr', l: 3, p: 'This is the baddest day of my life.', a: ['This is the worst day of my life.'], e: 'irr' },
    { t: 'fix', pt: 'double', l: 3, p: "It's getting more and more colder.", a: ["It's getting colder and colder."], e: 'double' },
    { t: 'fix', pt: 'er', l: 3, p: 'Life in a small town is more cheap and more easy.', a: ['Life in a small town is cheaper and easier.'], e: 'er' },
    { t: 'tr', pt: 'er', l: 3, i: 'Compare with *than*.', p: 'My old job was 30 minutes away. My new job is 10 minutes away.', s: 'My new job is', a: ['My new job is closer than my old job.', 'My new job is closer than my old one.', 'My new job is closer than the old one.', 'My new job is nearer than my old one.', 'My new job is closer to home than my old one.', 'My new job is closer to home than my old job.'], e: 'er' },
    { t: 'tr', pt: 'super', l: 3, i: "Use *the most… I've ever…*", p: 'I have never seen such a beautiful place.', s: 'This is', a: ["This is the most beautiful place I've ever seen."], e: 'super' },
    { t: 'tr', pt: 'as-as', l: 3, i: 'Use *the same… as*.', p: 'My dress and your dress are the same color.', s: 'My dress is', a: ['My dress is the same color as yours.', 'My dress is the same color as your dress.'], e: 'as-as' },
    { t: 'tl', pt: 'super', l: 3, uk: 'Це найкращий лікар у нашому місті.', ru: 'Это лучший врач в нашем городе.', a: ['This is the best doctor in our city.', 'This is the best doctor in our town.', 'This is the best doctor in town.', "He's the best doctor in our city.", "She's the best doctor in our city.", "He's the best doctor in our town.", "She's the best doctor in our town.", "He's the best doctor in town.", "She's the best doctor in town."], e: 'super' },
    { t: 'tl', pt: 'as-as', l: 3, uk: 'Тут не так холодно, як у Чикаго.', ru: 'Здесь не так холодно, как в Чикаго.', a: ["It's not as cold here as in Chicago.", "It isn't as cold here as in Chicago.", "It's not as cold here as it is in Chicago.", "It isn't as cold here as it is in Chicago."], e: 'as-as' },
    { t: 'tl', pt: 'er', l: 3, uk: 'Ця дорога коротша й безпечніша.', ru: 'Эта дорога короче и безопаснее.', a: ['This road is shorter and safer.', 'This way is shorter and safer.', 'This route is shorter and safer.'], e: 'er' },
    { t: 'tl', pt: 'than', l: 3, uk: 'Мій син вищий за мене.', ru: 'Мой сын выше меня.', a: ['My son is taller than me.', 'My son is taller than I am.'], e: 'than' },
    { t: 'tl', pt: 'double', l: 3, uk: 'Ціни стають все вищими і вищими.', ru: 'Цены становятся всё выше и выше.', a: ['Prices are getting higher and higher.', 'Prices keep getting higher and higher.', 'Prices are becoming higher and higher.', 'The prices are getting higher and higher.', 'Prices are going up and up.'], e: 'double' },
    { t: 'fill', pt: 'more', l: 3, p: 'Could you be a bit ___ (careful) next time?', a: 'more careful', w: { carefuller: 'more' }, e: 'more' },
    { t: 'fill', pt: 'irr', l: 3, p: "I need ___ (little) sugar in my coffee — it's too sweet.", a: 'less', w: { 'more little': 'irr', littler: 'irr' }, e: 'irr' },
    { t: 'fill', pt: 'super', l: 3, p: 'Which planet is ___ (far) from the sun?', a: ['the farthest', 'the furthest'], w: { 'the farest': 'irr', 'the most far': 'irr', farthest: 'super' }, e: 'super' },
  ],
});
