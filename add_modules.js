const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

const newModules = [
    {
        id: 7,
        title: "Қонақтарды күту",
        topic: "(Айнымалылар)",
        time: "15 мин",
        heroSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="100" height="60" fill="#E6F4F2" rx="8"/><circle cx="100" cy="80" r="20" fill="#18C4B8"/></svg>',
        theory: [
            "Python-да <b>айнымалылар</b> — деректерді сақтайтын ыдыстар. Мысалы, қонақтар санын сақтау үшін айнымалы қолданамыз.",
            "Қазақ халқы қонақжай, сондықтан қонақтар санын дәл есептеу маңызды."
        ],
        theoryCodes: [
            "guests = 5\nprint(guests)"
        ],
        examples: [
            { intro: "Қонақтар санын анықтау:", code: "guests = 10\nprint('Қонақтар саны:', guests)" }
        ],
        tasks: [
            {
                conditionHtml: '<div class="task-section"><p>Қонақтар санын 12-ге теңестіріп шығарыңыз.</p></div>',
                valuesHtml: 'Нәтижесінде: <code>qonaqtar</code> — <b>12</b> болуы керек.',
                starter: 'qonaqtar = ___\nprint(qonaqtar)',
                clearVars: ["qonaqtar"], exprMap: {res: "qonaqtar"}, expected: {res: 12}, fieldLabels: {res: "Қонақтар"}, hint: '12 деп жазыңыз.', realLife: "Қонақтарды санау"
            }
        ]
    },
    {
        id: 8,
        title: "Дастархан есебі",
        topic: "(Математика)",
        time: "20 мин",
        heroSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="70" width="120" height="20" fill="#E0AB3F" rx="4"/></svg>',
        theory: [
            "Python-да математикалық амалдарды оңай орындауға болады: <code>+</code> қосу, <code>-</code> азайту, <code>*</code> көбейту, <code>/</code> бөлу."
        ],
        theoryCodes: [
            "baursaq = 50\nadam = 5\nprint(baursaq / adam)"
        ],
        examples: [
            { intro: "Дастархандағы бауырсақтарды бөлу:", code: "print(100 / 10)" }
        ],
        tasks: [
            {
                conditionHtml: '<div class="task-section"><p>20 бауырсақты 4 адамға бөліңіз.</p></div>',
                valuesHtml: 'Нәтижесінде: <code>result</code> — <b>5.0</b> болуы керек.',
                starter: 'result = 20 / ___\nprint(result)',
                clearVars: ["result"], exprMap: {res: "result"}, expected: {res: 5}, fieldLabels: {res: "Нәтиже"}, hint: '4 деп жазыңыз.', realLife: "Ас бөлу"
            }
        ]
    },
    {
        id: 9,
        title: "Төрге шақыру",
        topic: "(Мәтіндер)",
        time: "15 мин",
        heroSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="80" height="60" fill="#F7D888" rx="8"/></svg>',
        theory: [
            "Мәтіндер (String) қос немесе жалаң тырнақшаның ішіне жазылады."
        ],
        theoryCodes: [
            "text = 'Төрлетіңіз!'\nprint(text)"
        ],
        examples: [
            { intro: "Сәлемдесу мәтіні:", code: "print('Қош келдіңіздер!')" }
        ],
        tasks: [
            {
                conditionHtml: '<div class="task-section"><p>"Төрлетіңіз" деген мәтінді айнымалыға сақтаңыз.</p></div>',
                valuesHtml: 'Нәтижесінде: <code>soz</code> — <b>"Төрлетіңіз"</b> болуы керек.',
                starter: 'soz = "___"\nprint(soz)',
                clearVars: ["soz"], exprMap: {res: "soz"}, expected: {res: "Төрлетіңіз"}, fieldLabels: {res: "Сөз"}, hint: 'Төрлетіңіз деп жазыңыз.', realLife: "Қонақ күту"
            }
        ]
    },
    {
        id: 10,
        title: "Киіз үй атауы",
        topic: "(String)",
        time: "15 мин",
        heroSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><path d="M50 80 L100 30 L150 80" fill="none" stroke="#0F8F86" stroke-width="8"/><rect x="60" y="80" width="80" height="40" fill="#E6F4F2"/></svg>',
        theory: [
            "Жолдарды (String) <code>+</code> таңбасымен біріктіруге болады."
        ],
        theoryCodes: [
            "a = 'Киіз '\nb = 'үй'\nprint(a + b)"
        ],
        examples: [
            { intro: "Екі сөзді қосу:", code: "print('Ақ ' + 'Орда')" }
        ],
        tasks: [
            {
                conditionHtml: '<div class="task-section"><p>"Ақ" және "үй" сөздерін қосып шығарыңыз.</p></div>',
                valuesHtml: 'Нәтижесінде: <code>name</code> — <b>"Ақ үй"</b> болуы керек.',
                starter: 'name = "Ақ " + "___"\nprint(name)',
                clearVars: ["name"], exprMap: {res: "name"}, expected: {res: "Ақ үй"}, fieldLabels: {res: "Атауы"}, hint: 'үй деп жазыңыз.', realLife: "Сөздерді біріктіру"
            }
        ]
    },
    {
        id: 11,
        title: "Шаңырақ көтеру",
        topic: "(Boolean)",
        time: "15 мин",
        heroSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="70" r="30" fill="none" stroke="#E0AB3F" stroke-width="8"/></svg>',
        theory: [
            "Бульдік мәндер (Boolean) тек екі мән қабылдайды: <code>True</code> (Ақиқат) немесе <code>False</code> (Жалған)."
        ],
        theoryCodes: [
            "is_ready = True\nprint(is_ready)"
        ],
        examples: [
            { intro: "Шаңырақ көтерілді ме?:", code: "raised = True\nprint(raised)" }
        ],
        tasks: [
            {
                conditionHtml: '<div class="task-section"><p>Шаңырақ көтерілгенін растайтын True мәнін меншіктеңіз.</p></div>',
                valuesHtml: 'Нәтижесінде: <code>is_up</code> — <b>True</b> болуы керек.',
                starter: 'is_up = ___\nprint(is_up)',
                clearVars: ["is_up"], exprMap: {res: "is_up"}, expected: {res: true}, fieldLabels: {res: "Көтерілді ме"}, hint: 'True деп жазыңыз.', realLife: "Логикалық жағдайлар"
            }
        ]
    },
    {
        id: 12,
        title: "Қымыз салмағы",
        topic: "(Float)",
        time: "15 мин",
        heroSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="40" width="40" height="70" fill="#E6F4F2" rx="4"/></svg>',
        theory: [
            "Float — бөлшек сандар. Мысалы: 1.5 литр, 2.5 келі."
        ],
        theoryCodes: [
            "volume = 1.5\nprint(volume)"
        ],
        examples: [
            { intro: "Қымыз көлемі:", code: "print(5.5)" }
        ],
        tasks: [
            {
                conditionHtml: '<div class="task-section"><p>3.5 литр қымызды айнымалыға сақтаңыз.</p></div>',
                valuesHtml: 'Нәтижесінде: <code>liters</code> — <b>3.5</b> болуы керек.',
                starter: 'liters = ___\nprint(liters)',
                clearVars: ["liters"], exprMap: {res: "liters"}, expected: {res: 3.5}, fieldLabels: {res: "Көлемі"}, hint: '3.5 деп жазыңыз.', realLife: "Сұйықтық көлемі"
            }
        ]
    },
    {
        id: 13,
        title: "Уық санау",
        topic: "(Modulo %)",
        time: "20 мин",
        heroSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="100" y1="20" x2="40" y2="100" stroke="#0F8F86" stroke-width="4"/><line x1="100" y1="20" x2="160" y2="100" stroke="#0F8F86" stroke-width="4"/></svg>',
        theory: [
            "Modulo <code>%</code> операторы бөлуден қалған қалдықты қайтарады. Мысалы, 10 % 3 = 1."
        ],
        theoryCodes: [
            "print(10 % 3)"
        ],
        examples: [
            { intro: "Қалдықты табу:", code: "print(15 % 4)" }
        ],
        tasks: [
            {
                conditionHtml: '<div class="task-section"><p>15-ті 4-ке бөлгендегі қалдықты табыңыз.</p></div>',
                valuesHtml: 'Нәтижесінде: <code>remainder</code> — <b>3</b> болуы керек.',
                starter: 'remainder = 15 % ___\nprint(remainder)',
                clearVars: ["remainder"], exprMap: {res: "remainder"}, expected: {res: 3}, fieldLabels: {res: "Қалдық"}, hint: '4 деп жазыңыз.', realLife: "Қалдықпен бөлу"
            }
        ]
    },
    {
        id: 14,
        title: "Қазан көлемі",
        topic: "(**)",
        time: "20 мин",
        heroSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><path d="M40 50 Q100 120 160 50 Z" fill="#18C4B8"/></svg>',
        theory: [
            "Дәрежеге шығару үшін <code>**</code> қолданылады. Мысалы, 2 ** 3 = 8."
        ],
        theoryCodes: [
            "print(2 ** 3)"
        ],
        examples: [
            { intro: "3-тің 2 дәрежесі:", code: "print(3 ** 2)" }
        ],
        tasks: [
            {
                conditionHtml: '<div class="task-section"><p>5-тің 2 дәрежесін (квадратын) есептеңіз.</p></div>',
                valuesHtml: 'Нәтижесінде: <code>square</code> — <b>25</b> болуы керек.',
                starter: 'square = 5 ** ___\nprint(square)',
                clearVars: ["square"], exprMap: {res: "square"}, expected: {res: 25}, fieldLabels: {res: "Квадрат"}, hint: '2 деп жазыңыз.', realLife: "Көлемді есептеу"
            }
        ]
    }
];

function expandTasks(mod) {
    let base = mod.tasks[0];
    for(let i = 2; i <= 10; i++) {
        let newTask = JSON.parse(JSON.stringify(base));
        newTask.conditionHtml = '<div class="task-section"><p>Қосымша тапсырма ' + i + ' (' + mod.title + ').</p></div>';
        mod.tasks.push(newTask);
    }
}

newModules.forEach(mod => {
    expandTasks(mod);
});

let modulesStr = newModules.map(mod => JSON.stringify(mod, null, 4)).join(',\\n');
// Ensure valid JS export formatting
let insertRegex = /(\];\s*$)/;
data = data.replace(insertRegex, ",\\n" + modulesStr + "\\n];");

fs.writeFileSync(file, data);
console.log("8 new modules added.");
