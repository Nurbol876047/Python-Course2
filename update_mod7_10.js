const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

const mod7Examples = [
    { intro: "Қонақтар санын анықтау:", code: "guests = 10\nprint('Қонақтар саны:', guests)" },
    { intro: "Балалар санын қосу:", code: "balalar = 3\nprint('Балалар саны:', balalar)" },
    { intro: "Жаңа қонақтар келді (айнымалыны өзгерту):", code: "guests = 10\nguests = guests + 5\nprint('Жаңа қонақтар саны:', guests)" },
    { intro: "Қонақтардың бір бөлігі кетті:", code: "guests = 15\nguests = guests - 2\nprint('Қалған қонақтар:', guests)" },
    { intro: "Жалпы санды есептеу:", code: "erler = 6\naielder = 8\ntotal = erler + aielder\nprint('Барлығы:', total)" }
];
const mod7Tasks = [
    {
        conditionHtml: '<div class="task-section"><p>Қонақтар санын 12-ге теңестіріп шығарыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>qonaqtar</code> — <b>12</b> болуы керек.',
        starter: 'qonaqtar = ___\nprint(qonaqtar)', clearVars: ["qonaqtar"], exprMap: {res: "qonaqtar"}, expected: {res: 12}, fieldLabels: {res: "Қонақтар"}, hint: '12 деп жазыңыз.', realLife: "Қонақтарды санау"
    },
    {
        conditionHtml: '<div class="task-section"><p>Үлкен кісілер санын 4-ке теңестіріп шығарыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>ulken_kisi</code> — <b>4</b> болуы керек.',
        starter: 'ulken_kisi = ___\nprint(ulken_kisi)', clearVars: ["ulken_kisi"], exprMap: {res: "ulken_kisi"}, expected: {res: 4}, fieldLabels: {res: "Адам саны"}, hint: '4 деп жазыңыз.', realLife: "Құрметті қонақтар"
    },
    {
        conditionHtml: '<div class="task-section"><p>Қонақтар саны 10 еді, тағы 5 адам қосылды. Айнымалыны жаңартыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>qonaq</code> — <b>15</b> болуы керек.',
        starter: 'qonaq = 10\nqonaq = qonaq + ___\nprint(qonaq)', clearVars: ["qonaq"], exprMap: {res: "qonaq"}, expected: {res: 15}, fieldLabels: {res: "Жалпы қонақ"}, hint: '5 санын қосыңыз.', realLife: "Адам санының өзгеруі"
    },
    {
        conditionHtml: '<div class="task-section"><p>Ерлер мен әйелдер санын қосып, жалпы санды табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>total</code> — <b>14</b> болуы керек.',
        starter: 'erler = 6\naielder = 8\ntotal = erler + ___\nprint(total)', clearVars: ["total"], exprMap: {res: "total"}, expected: {res: 14}, fieldLabels: {res: "Барлығы"}, hint: 'aielder айнымалысын қосыңыз.', realLife: "Жалпы есеп"
    },
    {
        conditionHtml: '<div class="task-section"><p>Қонақтардың 3-еуі қайтып кетті. Қалған қонақтар санын табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>qonaq</code> — <b>7</b> болуы керек.',
        starter: 'qonaq = 10\nqonaq = qonaq - ___\nprint(qonaq)', clearVars: ["qonaq"], exprMap: {res: "qonaq"}, expected: {res: 7}, fieldLabels: {res: "Қалған қонақ"}, hint: '3 санын азайтыңыз.', realLife: "Қонақтардың қайтуы"
    }
];

const mod8Examples = [
    { intro: "Дастархандағы бауырсақтарды бөлу:", code: "print(100 / 10)" },
    { intro: "Тарелкалардағы кәмпиттер саны:", code: "print(10 * 3)" },
    { intro: "Ет пен көгөніс құны:", code: "print(15000 + 5000)" },
    { intro: "Дүкендегі қайтарым (сдача):", code: "print(20000 - 3000)" },
    { intro: "Жақшаларды қолданып есептеу:", code: "print((10 + 15) * 2)" }
];
const mod8Tasks = [
    {
        conditionHtml: '<div class="task-section"><p>20 бауырсақты 4 адамға бөліңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>result</code> — <b>5.0</b> болуы керек.',
        starter: 'result = 20 / ___\nprint(result)', clearVars: ["result"], exprMap: {res: "result"}, expected: {res: 5}, fieldLabels: {res: "Нәтиже"}, hint: '4 деп жазыңыз.', realLife: "Ас бөлу"
    },
    {
        conditionHtml: '<div class="task-section"><p>Келісі 3000 теңге тұратын 5 келі еттің құнын есептеңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>cost</code> — <b>15000</b> болуы керек.',
        starter: 'cost = 5 * ___\nprint(cost)', clearVars: ["cost"], exprMap: {res: "cost"}, expected: {res: 15000}, fieldLabels: {res: "Құны"}, hint: '3000-ға көбейтіңіз.', realLife: "Базардағы сауда"
    },
    {
        conditionHtml: '<div class="task-section"><p>10000 теңге беріп, 1500 теңгелік зат алдыңыз. Қайтарым қанша?</p></div>',
        valuesHtml: 'Нәтижесінде: <code>change</code> — <b>8500</b> болуы керек.',
        starter: 'change = 10000 - ___\nprint(change)', clearVars: ["change"], exprMap: {res: "change"}, expected: {res: 8500}, fieldLabels: {res: "Қайтарым"}, hint: '1500-ді азайтыңыз.', realLife: "Ақша қайтарымы"
    },
    {
        conditionHtml: '<div class="task-section"><p>Дастарханда 5 түрлі жеміс бар, әрқайсысынан 2 келіден алдыңыз. Жалпы неше келі?</p></div>',
        valuesHtml: 'Нәтижесінде: <code>total_kg</code> — <b>10</b> болуы керек.',
        starter: 'total_kg = 5 * ___\nprint(total_kg)', clearVars: ["total_kg"], exprMap: {res: "total_kg"}, expected: {res: 10}, fieldLabels: {res: "Келі"}, hint: '2-ге көбейтіңіз.', realLife: "Жеміс-жидек есебі"
    },
    {
        conditionHtml: '<div class="task-section"><p>Екі түрлі тәттінің бағасын (2000 және 3000) қосып, оны 2-ге бөліңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>average</code> — <b>2500.0</b> болуы керек.',
        starter: 'average = (2000 + 3000) / ___\nprint(average)', clearVars: ["average"], exprMap: {res: "average"}, expected: {res: 2500}, fieldLabels: {res: "Орташа"}, hint: '2-ге бөліңіз.', realLife: "Орташа шығын"
    }
];

const mod9Examples = [
    { intro: "Сәлемдесу мәтіні:", code: "print('Қош келдіңіздер!')" },
    { intro: "Мәтінді айнымалыға сақтау:", code: "salem = 'Ассалаумағалейкум!'\nprint(salem)" },
    { intro: "Екі мәтінді біріктіру:", code: "print('Қош ' + 'келдіңіз')" },
    { intro: "Мәтінді қайталау:", code: "print('Жақсы! ' * 3)" },
    { intro: "Көп жолды мәтін:", code: "print('Төрлетіңіз,\\nқұрметті қонақ!')" }
];
const mod9Tasks = [
    {
        conditionHtml: '<div class="task-section"><p>"Төрлетіңіз" деген мәтінді айнымалыға сақтаңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>soz</code> — <b>"Төрлетіңіз"</b> болуы керек.',
        starter: 'soz = "___"\nprint(soz)', clearVars: ["soz"], exprMap: {res: "soz"}, expected: {res: "Төрлетіңіз"}, fieldLabels: {res: "Сөз"}, hint: 'Төрлетіңіз деп жазыңыз.', realLife: "Қонақ күту"
    },
    {
        conditionHtml: '<div class="task-section"><p>"Қош келдіңіз" сөзін айнымалыға жазыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>greeting</code> — <b>"Қош келдіңіз"</b> болуы керек.',
        starter: 'greeting = "___"\nprint(greeting)', clearVars: ["greeting"], exprMap: {res: "greeting"}, expected: {res: "Қош келдіңіз"}, fieldLabels: {res: "Сөз"}, hint: 'Қош келдіңіз деп жазыңыз.', realLife: "Сәлемдесу"
    },
    {
        conditionHtml: '<div class="task-section"><p>"Сәлем, " және "Ата" сөздерін қосыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>full_text</code> — <b>"Сәлем, Ата"</b> болуы керек.',
        starter: 'full_text = "Сәлем, " + "___"\nprint(full_text)', clearVars: ["full_text"], exprMap: {res: "full_text"}, expected: {res: "Сәлем, Ата"}, fieldLabels: {res: "Мәтін"}, hint: 'Ата сөзін жазыңыз.', realLife: "Сөз құрастыру"
    },
    {
        conditionHtml: '<div class="task-section"><p>"Жақсы! " сөзін 3 рет қайталап шығарыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>repeat_text</code> — <b>"Жақсы! Жақсы! Жақсы! "</b> болуы керек.',
        starter: 'repeat_text = "Жақсы! " * ___\nprint(repeat_text)', clearVars: ["repeat_text"], exprMap: {res: "repeat_text"}, expected: {res: "Жақсы! Жақсы! Жақсы! "}, fieldLabels: {res: "Қайталау"}, hint: '3 санына көбейтіңіз.', realLife: "Қуаныш білдіру"
    },
    {
        conditionHtml: '<div class="task-section"><p>"Ас дәмді болсын" деп экранға шығарыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>as_text</code> — <b>"Ас дәмді болсын"</b> болуы керек.',
        starter: 'as_text = "___"\nprint(as_text)', clearVars: ["as_text"], exprMap: {res: "as_text"}, expected: {res: "Ас дәмді болсын"}, fieldLabels: {res: "Бата"}, hint: 'Ас дәмді болсын деп жазыңыз.', realLife: "Ас қайыру"
    }
];

const mod10Examples = [
    { intro: "Мәтіннің ұзындығын табу:", code: "print('Киіз үй ұзындығы:', len('Киіз үй'))" },
    { intro: "Барлық әріптерді бас әріпке айналдыру:", code: "print('ақ орда'.upper())" },
    { intro: "Мәтіннен белгілі бір әріпті алу:", code: "word = 'Шаңырақ'\nprint('Бірінші әріп:', word[0])" },
    { intro: "Мәтін ішінен сөзді іздеу:", code: "print('Киіз' in 'Киіз үй')" },
    { intro: "Мәтінді пішімдеу (f-string):", code: "name = 'Абай'\nprint(f'{name} ауылы')" }
];
const mod10Tasks = [
    {
        conditionHtml: '<div class="task-section"><p>"Шаңырақ" сөзінің ұзындығын (әріптер санын) табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>uzindyq</code> — <b>7</b> болуы керек.',
        starter: 'word = "Шаңырақ"\nuzindyq = ___(word)\nprint(uzindyq)', clearVars: ["uzindyq"], exprMap: {res: "uzindyq"}, expected: {res: 7}, fieldLabels: {res: "Ұзындығы"}, hint: 'len функциясын қолданыңыз.', realLife: "Сөздің өлшемі"
    },
    {
        conditionHtml: '<div class="task-section"><p>"қазақ" сөзін толығымен бас әріппен жазыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>big_word</code> — <b>"ҚАЗАҚ"</b> болуы керек.',
        starter: 'word = "қазақ"\nbig_word = word.___()\nprint(big_word)', clearVars: ["big_word"], exprMap: {res: "big_word"}, expected: {res: "ҚАЗАҚ"}, fieldLabels: {res: "Бас әріппен"}, hint: 'upper әдісін қолданыңыз.', realLife: "Атауларды ерекшелеу"
    },
    {
        conditionHtml: '<div class="task-section"><p>"Отау" сөзінің ең бірінші әрпін алыңыз (индекс 0).</p></div>',
        valuesHtml: 'Нәтижесінде: <code>first_letter</code> — <b>"О"</b> болуы керек.',
        starter: 'word = "Отау"\nfirst_letter = word[___]\nprint(first_letter)', clearVars: ["first_letter"], exprMap: {res: "first_letter"}, expected: {res: "О"}, fieldLabels: {res: "Бірінші әріп"}, hint: '0 индексін жазыңыз.', realLife: "Индекс арқылы іздеу"
    },
    {
        conditionHtml: '<div class="task-section"><p>"Ақ Орда" сөзінің ішінде "Ақ" сөзі бар ма екенін тексеріңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>is_in</code> — <b>True</b> болуы керек.',
        starter: 'text = "Ақ Орда"\nis_in = "Ақ" ___ text\nprint(is_in)', clearVars: ["is_in"], exprMap: {res: "is_in"}, expected: {res: true}, fieldLabels: {res: "Ішінде бар ма"}, hint: 'in кілттік сөзін қолданыңыз.', realLife: "Іздеу жүйесі"
    },
    {
        conditionHtml: '<div class="task-section"><p>f-string арқылы айнымалыны мәтінге кірістіріңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>full_name</code> — <b>"Алатау ауылы"</b> болуы керек.',
        starter: 'name = "Алатау"\nfull_name = f"{___} ауылы"\nprint(full_name)', clearVars: ["full_name"], exprMap: {res: "full_name"}, expected: {res: "Алатау ауылы"}, fieldLabels: {res: "Толық атау"}, hint: 'name айнымалысын жақша ішіне жазыңыз.', realLife: "Автоматты хаттар құрастыру"
    }
];

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';
fs.writeFileSync('temp_mod710.js', code);
const MODULES = require('./temp_mod710.js');

let m7 = MODULES.find(m => m.id === 7);
if(m7) { m7.examples = mod7Examples; m7.tasks = mod7Tasks; }

let m8 = MODULES.find(m => m.id === 8);
if(m8) { m8.examples = mod8Examples; m8.tasks = mod8Tasks; }

let m9 = MODULES.find(m => m.id === 9);
if(m9) { m9.examples = mod9Examples; m9.tasks = mod9Tasks; }

let m10 = MODULES.find(m => m.id === 10);
if(m10) { m10.examples = mod10Examples; m10.tasks = mod10Tasks; }

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_mod710.js');
console.log("Modules 7, 8, 9, 10 updated with 5 thematic examples and 5 tasks.");
