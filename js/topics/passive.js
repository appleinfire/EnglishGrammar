APP.addTopic({
  id: 'pass',
  title: 'Passive: it was made, I was born',
  level: 'B1',
  group: 'Passive',
  icon: '🏗️',
  about: 'be + 3rd form; have something done',
  rule: {
    en: `**be + past participle** (3rd form). Use it when **who did it** is unknown, unimportant or obvious:
*My wallet was stolen. Credit cards are accepted here. The meeting has been canceled.*
- The tense is in **be**: *is made · was made · is being made · has been made · will be made · must be made*.
- The doer, if needed, after **by**: *It was painted **by** my daughter.*
- *I **was born** in Kharkiv.* (Always passive.)
- Someone does a service for you: **have / get + thing + 3rd form**: *I **had my hair cut**. We need to **get the car repaired**.*
- Verbs like *happen, die, arrive, rise* have **no passive**: *It happened. She died.*
Ukrainian and Russian often say *«Його побудували / Его построили»* (they built it). In English, that is usually passive: *It was built.*`,
    uk: `**be + третя форма дієслова**. Вживаємо, коли **хто це зробив** — невідомо, неважливо або й так зрозуміло:
*My wallet was stolen* — «У мене вкрали гаманець». *Credit cards are accepted here. The meeting has been canceled.*
- Час показує **be**: *is made · was made · is being made · has been made · will be made · must be made*.
- Виконавця, якщо треба, додаємо через **by**: *It was painted **by** my daughter.*
- *I **was born** in Kharkiv* — «Я народилася». (Завжди пасив.)
- Хтось робить послугу для вас: **have / get + річ + третя форма**: *I **had my hair cut*** — «Я підстриглася (у перукаря)». *We need to **get the car repaired**.*
- Дієслова *happen, die, arrive, rise* **не мають пасиву**: *It happened. She died.*
Українською часто кажемо *«Його побудували»*. Англійською це зазвичай пасив: *It was built.*`,
    ru: `**be + третья форма глагола**. Используем, когда **кто это сделал** — неизвестно, неважно или и так понятно:
*My wallet was stolen* — «У меня украли кошелёк». *Credit cards are accepted here. The meeting has been canceled.*
- Время показывает **be**: *is made · was made · is being made · has been made · will be made · must be made*.
- Исполнителя, если нужно, добавляем через **by**: *It was painted **by** my daughter.*
- *I **was born** in Kharkiv* — «Я родилась». (Всегда пассив.)
- Кто-то оказывает вам услугу: **have / get + вещь + третья форма**: *I **had my hair cut*** — «Я подстриглась (у парикмахера)». *We need to **get the car repaired**.*
- Глаголы *happen, die, arrive, rise* **не имеют пассива**: *It happened. She died.*
По-русски часто говорим *«Его построили»*. По-английски это обычно пассив: *It was built.*`,
  },
  examples: ['My wallet was stolen on the subway.', 'Credit cards are accepted here.', 'I was born in Kharkiv.', 'This medicine should be taken with food.', 'I had my hair cut yesterday.'],
  trap: {
    uk: 'Цей сир роблять у Вісконсині.',
    ru: 'Этот сыр делают в Висконсине.',
    wrong: 'They make this cheese in Wisconsin.',
    right: 'This cheese is made in Wisconsin.',
    note: {
      en: 'Ukrainian and Russian use "they" with no real person (*роблять / делают*). English prefers the passive here. (*They make it in Wisconsin* is not wrong in speech, but the passive sounds natural and clear.)',
      uk: 'Українською кажемо «роблять» без конкретних людей. Англійською тут природніше пасив. (*They make it in Wisconsin* у розмові не помилка, але пасив звучить природно і чітко.)',
      ru: 'По-русски говорим «делают» без конкретных людей. По-английски здесь естественнее пассив. (*They make it in Wisconsin* в разговоре не ошибка, но пассив звучит естественно и чётко.)',
    },
  },
  errors: {
    'be-missing': {
      en: 'The passive needs **be**: *The package **was** delivered. It must **be** signed. The results **haven\'t been** announced.* Without *be* it means the thing did the action itself.',
      uk: 'Пасиву потрібне **be**: *The package **was** delivered. It must **be** signed. The results **haven\'t been** announced.* Без *be* виходить, що річ сама виконала дію.',
      ru: 'Пассиву нужен **be**: *The package **was** delivered. It must **be** signed. The results **haven\'t been** announced.* Без *be* получается, что вещь сама совершила действие.',
    },
    participle: {
      en: 'After *be* use the **past participle** (3rd form): *was written, were broken, was bitten, be signed* — not *wrote, broke, bit, sign*.',
      uk: 'Після *be* — **третя форма** дієслова: *was written, were broken, was bitten, be signed*, а не *wrote, broke, bit, sign*.',
      ru: 'После *be* — **третья форма** глагола: *was written, were broken, was bitten, be signed*, а не *wrote, broke, bit, sign*.',
    },
    'tense-be': {
      en: 'Put the tense into **be**: *is / are* (now, usually), *was / were* (past), *is being* (right now), *has / have been* (up to now), *will be* (future).',
      uk: 'Час виражаємо через **be**: *is / are* (зараз, зазвичай), *was / were* (минуле), *is being* (саме зараз), *has / have been* (досі), *will be* (майбутнє).',
      ru: 'Время выражаем через **be**: *is / are* (сейчас, обычно), *was / were* (прошлое), *is being* (прямо сейчас), *has / have been* (до сих пор), *will be* (будущее).',
    },
    'active-passive': {
      en: 'If the subject **does** the action → active (*The doctor examined me*). If it **receives** the action → passive (*I was bitten by a dog*). *happen, die, rise, arrive* are never passive.',
      uk: 'Якщо підмет **виконує** дію → активний стан (*The doctor examined me*). Якщо дія **відбувається з ним** → пасив (*I was bitten by a dog*). *happen, die, rise, arrive* ніколи не бувають у пасиві.',
      ru: 'Если подлежащее **совершает** действие → активный залог (*The doctor examined me*). Если действие **происходит с ним** → пассив (*I was bitten by a dog*). *happen, die, rise, arrive* никогда не бывают в пассиве.',
    },
    born: {
      en: '**I was born** (past, passive) — for everyone, always: *Where were you born? My son was born in Texas.* Not *I born / I am born*.',
      uk: '**I was born** (минулий час, пасив) — для всіх і завжди: *Where were you born? My son was born in Texas.* Не *I born / I am born*.',
      ru: '**I was born** (прошедшее время, пассив) — для всех и всегда: *Where were you born? My son was born in Texas.* Не *I born / I am born*.',
    },
    'have-done': {
      en: 'Someone else does it for you (a hairdresser, a mechanic) → **have / get + object + 3rd form**: *I had my hair cut. I need to get my car repaired.* (*I cut my hair* = I did it myself.)',
      uk: 'Хтось робить це для вас (перукар, механік) → **have / get + об\'єкт + третя форма**: *I had my hair cut. I need to get my car repaired.* (*I cut my hair* = я сама підстриглася.)',
      ru: 'Кто-то делает это для вас (парикмахер, механик) → **have / get + объект + третья форма**: *I had my hair cut. I need to get my car repaired.* (*I cut my hair* = я сама подстриглась.)',
    },
    by: {
      en: 'The doer of a passive action comes after **by**: *painted by my daughter, written by a famous singer*. Not *from* or *with*.',
      uk: 'Виконавця пасивної дії вводимо через **by**: *painted by my daughter, written by a famous singer*. Не *from* і не *with*.',
      ru: 'Исполнителя пассивного действия вводим через **by**: *painted by my daughter, written by a famous singer*. Не *from* и не *with*.',
    },
  },
  items: [
    // ---------- Core
    { t: 'choose', pt: 'present', l: 1, p: 'English ___ in many countries.', a: 'is spoken', o: ['speaks', 'is speak'], w: { speaks: 'be-missing', 'is speak': 'participle' }, e: 'be-missing' },
    { t: 'choose', pt: 'past', l: 1, p: 'This bridge ___ in 1937.', a: 'was built', o: ['built', 'was build'], w: { built: 'be-missing', 'was build': 'participle' }, e: 'be-missing' },
    { t: 'choose', pt: 'born', l: 1, p: 'I ___ in Kharkiv.', a: 'was born', o: ['born', 'am born'], w: { born: 'born', 'am born': 'born' }, e: 'born' },
    { t: 'choose', pt: 'perfect', l: 1, p: 'Your car ___ repaired. You can pick it up now.', a: 'has been', o: ['has', 'is been'], w: { has: 'be-missing', 'is been': 'tense-be' }, e: 'be-missing' },
    { t: 'choose', pt: 'modal', l: 1, p: 'The form must ___ in black ink.', a: 'be signed', o: ['signed', 'be sign'], w: { signed: 'be-missing', 'be sign': 'participle' }, e: 'be-missing' },
    { t: 'choose', pt: 'by', l: 1, p: 'This picture was painted ___ my daughter.', a: 'by', o: ['from', 'with'], w: { from: 'by', with: 'by' }, e: 'by' },
    { t: 'choose', pt: 'active', l: 1, p: 'My wallet ___ on the subway yesterday.', a: 'was stolen', o: ['stole', 'was stole'], w: { stole: 'active-passive', 'was stole': 'participle' }, e: 'active-passive' },
    { t: 'fill', pt: 'present', l: 1, p: 'Credit cards ___ (accept) here.', a: 'are accepted', w: { accept: 'be-missing', 'are accept': 'participle', 'is accepted': 'tense-be', accepted: 'be-missing' }, e: 'be-missing' },
    { t: 'fill', pt: 'past', l: 1, p: 'We ___ (invite) to their wedding last year.', a: 'were invited', w: { invited: 'be-missing', 'was invited': 'tense-be', 'are invited': 'tense-be' }, e: 'be-missing' },
    { t: 'fill', pt: 'perfect', l: 1, p: 'The meeting ___ (cancel). Nobody told me!', a: ['has been canceled', 'has been cancelled', 'was canceled', 'was cancelled'], w: { 'has canceled': 'be-missing', 'is canceled': 'tense-be', canceled: 'be-missing' }, e: 'be-missing' },
    { t: 'fill', pt: 'modal', l: 1, p: 'Your package will ___ (deliver) tomorrow.', a: 'be delivered', w: { delivered: 'be-missing', deliver: 'be-missing', 'be deliver': 'participle' }, e: 'be-missing' },
    { t: 'fill', pt: 'born', l: 1, p: 'Where ___ you born?', a: 'were', w: { did: 'born', are: 'born', was: 'tense-be' }, e: 'born' },
    { t: 'fill', pt: 'past', l: 1, p: 'In the past, all letters ___ (write) by hand.', a: 'were written', w: { 'were wrote': 'participle', wrote: 'be-missing', 'was written': 'tense-be', written: 'be-missing' }, e: 'participle' },
    { t: 'fill', pt: 'by', l: 1, p: 'The song was written ___ a famous singer.', a: 'by', w: { from: 'by', of: 'by' }, e: 'by' },
    { t: 'build', pt: 'present', l: 1, a: 'Rice is grown in Asia.', x: ['grows'], e: 'be-missing' },
    { t: 'build', pt: 'born', l: 1, a: 'My son was born in Texas.', x: ['is'], e: 'born' },
    { t: 'build', pt: 'modal', l: 1, a: 'This medicine should be taken with food.', x: ['take'], e: 'participle' },

    // ---------- Use
    { t: 'fill', pt: 'have-done', l: 2, p: 'I had my hair ___ (cut) yesterday.', a: 'cut', w: { cutting: 'have-done', 'to cut': 'have-done' }, e: 'have-done' },
    { t: 'fill', pt: 'have-done', l: 2, p: 'We need to have the car ___ (repair) before the trip.', a: 'repaired', w: { repair: 'have-done', repairing: 'have-done', 'to repair': 'have-done' }, e: 'have-done' },
    { t: 'fill', pt: 'perfect', l: 2, p: 'Three people ___ (arrest) so far.', a: 'have been arrested', w: { 'are arrested': 'tense-be', arrested: 'be-missing', 'has been arrested': 'pp:has-have', 'have arrested': 'be-missing' }, e: 'tense-be' },
    { t: 'fill', pt: 'active', l: 2, p: 'The doctor ___ (examine) me and gave me a prescription.', a: 'examined', w: { 'was examined': 'active-passive' }, e: 'active-passive' },
    { t: 'fill', pt: 'active', l: 2, p: 'I ___ (bite) by a dog when I was a child.', a: 'was bitten', w: { bit: 'active-passive', 'was bit': 'participle', bitten: 'be-missing' }, e: 'active-passive' },
    { t: 'fill', pt: 'modal', l: 2, p: "Children under 12 can't ___ (leave) home alone.", a: 'be left', w: { leave: 'active-passive', 'be leave': 'participle', left: 'be-missing' }, e: 'be-missing' },
    { t: 'fill', pt: 'present', l: 2, p: 'Sorry, the elevator ___ (repair) right now.', a: 'is being repaired', w: { 'is repaired': 'tense-be', 'is repairing': 'active-passive', repaired: 'be-missing' }, e: 'tense-be' },
    { t: 'fill', pt: 'past', l: 2, p: 'When ___ the Statue of Liberty ___ (build)?', a: 'was|built', w: { 'did|build': 'active-passive', 'was|build': 'participle', 'is|built': 'tense-be' }, e: 'tense-be' },
    { t: 'build', pt: 'have-done', l: 2, a: 'I had my nails done yesterday.', x: ['did'], e: 'have-done' },
    { t: 'fix', pt: 'past', l: 2, p: 'The package delivered yesterday.', a: ['The package was delivered yesterday.'], e: 'be-missing' },
    { t: 'fix', pt: 'past', l: 2, p: 'The windows were broke during the storm.', a: ['The windows were broken during the storm.'], e: 'participle' },
    { t: 'fix', pt: 'born', l: 2, p: 'My daughter born in 2019.', a: ['My daughter was born in 2019.'], e: 'born' },
    { t: 'fix', pt: 'active', l: 2, p: 'The accident was happened at night.', a: ['The accident happened at night.'], e: 'active-passive', n: '*happen* has no passive.' },
    { t: 'tr', pt: 'past', l: 2, i: 'Make it passive. Start with *The thief*.', p: 'The police caught the thief.', s: 'The thief', a: ['The thief was caught by the police.', 'The thief was caught.'], e: 'be-missing' },
    { t: 'tr', pt: 'perfect', l: 2, i: 'Make it passive. Who did it is not important.', p: 'Someone has stolen my bike.', s: 'My bike', a: ['My bike has been stolen.'], e: 'tense-be' },
    { t: 'tl', pt: 'born', l: 2, uk: 'Я народилася в Одесі.', ru: 'Я родилась в Одессе.', a: ['I was born in Odesa.', 'I was born in Odessa.'], e: 'born' },
    { t: 'tl', pt: 'present', l: 2, uk: 'Цей сир роблять у Вісконсині.', ru: 'Этот сыр делают в Висконсине.', a: ['This cheese is made in Wisconsin.', 'This cheese is produced in Wisconsin.'], e: 'be-missing' },

    // ---------- Pro
    { t: 'fix', pt: 'modal', l: 3, p: 'The new hospital will built next year.', a: ['The new hospital will be built next year.'], e: 'be-missing' },
    { t: 'fix', pt: 'have-done', l: 3, p: 'I cut my hair at the salon yesterday.', a: ['I had my hair cut at the salon yesterday.', 'I got my hair cut at the salon yesterday.'], e: 'have-done', n: '*I cut my hair* means you did it yourself.' },
    { t: 'fix', pt: 'active', l: 3, p: 'My grandmother was died in 2015.', a: ['My grandmother died in 2015.'], e: 'active-passive' },
    { t: 'fix', pt: 'perfect', l: 3, p: "The results haven't announced yet.", a: ["The results haven't been announced yet."], e: 'be-missing' },
    { t: 'tr', pt: 'modal', l: 3, i: 'Make it passive.', p: 'You must wear a mask in the clinic.', s: 'A mask', a: ['A mask must be worn in the clinic.'], e: 'be-missing' },
    { t: 'tr', pt: 'have-done', l: 3, i: 'A mechanic did it. Say it with *I had… + 3rd form*.', p: 'A mechanic checked the brakes on my car.', s: 'I had', a: ['I had the brakes on my car checked.', 'I had the brakes checked on my car.', "I had my car's brakes checked.", 'I had the brakes checked.'], e: 'have-done' },
    { t: 'tr', pt: 'present', l: 3, i: 'Make it passive, without *they*.', p: 'They speak English and Spanish here.', s: 'English and Spanish', a: ['English and Spanish are spoken here.'], e: 'tense-be' },
    { t: 'tl', pt: 'past', l: 3, uk: 'Наш будинок побудували в 1950 році.', ru: 'Наш дом построили в 1950 году.', a: ['Our house was built in 1950.'], e: 'be-missing' },
    { t: 'tl', pt: 'perfect', l: 3, uk: 'Мою заявку вже схвалили!', ru: 'Мою заявку уже одобрили!', a: ['My application has already been approved!', 'My application has been approved already!', 'My application has been approved!'], am: ['My application was already approved!', 'My application was approved!'], e: 'tense-be' },
    { t: 'tl', pt: 'have-done', l: 3, uk: 'Я фарбую волосся в салоні.', ru: 'Я крашу волосы в салоне.', a: ['I get my hair dyed at a salon.', 'I have my hair dyed at a salon.', 'I get my hair colored at a salon.', 'I have my hair colored at a salon.', 'I get my hair dyed at the salon.', 'I have my hair dyed at the salon.', 'I get my hair colored at the salon.', 'I have my hair colored at the salon.', 'I get my hair done at the salon.', 'I get my hair done at a salon.'], e: 'have-done', n: '*I dye my hair* = you do it yourself at home.' },
    { t: 'tl', pt: 'modal', l: 3, uk: "Ці документи треба підписати до п'ятниці.", ru: 'Эти документы нужно подписать до пятницы.', a: ['These documents must be signed by Friday.', 'These documents need to be signed by Friday.', 'These documents have to be signed by Friday.', 'These documents should be signed by Friday.', 'These documents must be signed before Friday.', 'These documents need to be signed before Friday.', 'These documents have to be signed before Friday.', 'The documents must be signed by Friday.', 'The documents need to be signed by Friday.', 'The documents have to be signed by Friday.'], e: 'be-missing' },
    { t: 'tl', pt: 'active', l: 3, uk: 'Мене запросили на співбесіду.', ru: 'Меня пригласили на собеседование.', a: ['I was invited to an interview.', 'I was invited for an interview.', 'I was invited to a job interview.', 'I was invited for a job interview.', "I've been invited to an interview.", "I've been invited for an interview.", 'I got invited to an interview.', 'I got invited for an interview.', 'I was invited to the interview.'], e: 'active-passive' },
    { t: 'fill', pt: 'by', l: 3, p: 'The new law was criticized ___ many doctors.', a: 'by', w: { from: 'by', with: 'by' }, e: 'by' },
    { t: 'fill', pt: 'present', l: 3, p: 'Breakfast ___ (serve) from 7 to 10 a.m.', a: 'is served', w: { serves: 'active-passive', served: 'be-missing', 'is serve': 'participle', 'are served': 'tense-be' }, e: 'be-missing' },
    { t: 'fill', pt: 'active', l: 3, p: 'The price of eggs ___ (rise) by 20% last year.', a: 'rose', w: { 'was risen': 'active-passive', rised: 'participle', 'was rose': 'active-passive' }, e: 'active-passive', n: '*rise* (go up by itself) has no passive. *raise* (someone lifts it) does: *Prices were raised.*' },
  ],
});
