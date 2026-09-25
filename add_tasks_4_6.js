const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

const m4 = [
{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Студенттің ұпайы берілген. Егер ұпай 50-ден жоғары немесе тең болса, "Өтті", әйтпесе "Құлады" деп нәтиже шығаратын функция жазыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>check_score(65)</code> — <b>"Өтті"</b> қайтаруы керек.',
    starter: 'def check_score(score):\n    if score >= 50:\n        return ___\n    else:\n        return "Құлады"\n\nprint(check_score(65))',
    clearVars: ["check_score"],
    exprMap: {res: "check_score(65)"},
    expected: {res: "Өтті"},
    fieldLabels: {res: "Нәтиже"},
    hint: 'return "Өтті" деп жазыңыз.',
    realLife: "Университеттегі автоматты бағалау жүйесі."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Жасы 18-ге толғандарға ғана кіруге рұқсат ететін функция жазыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>is_allowed(20)</code> — <b>True</b> қайтаруы керек.',
    starter: 'def is_allowed(age):\n    if age >= 18:\n        return True\n    else:\n        return ___\n\nprint(is_allowed(20))',
    clearVars: ["is_allowed"],
    exprMap: {res: "is_allowed(20)"},
    expected: {res: true},
    fieldLabels: {res: "Рұқсат"},
    hint: 'return False деп жазыңыз.',
    realLife: "Клубтардағы немесе сайттардағы жас шектеуі."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Бағдаршам түсіне қарай әрекетті қайтаратын функция: "қызыл" -> "тоқта", "жасыл" -> "жүр", "сары" -> "дайындал".</p></div>',
    valuesHtml: 'Нәтижесінде: <code>traffic_light("қызыл")</code> — <b>"тоқта"</b> қайтаруы керек.',
    starter: 'def traffic_light(color):\n    if color == "қызыл":\n        return "тоқта"\n    elif color == "жасыл":\n        return "жүр"\n    ___ color == "сары":\n        return "дайындал"\n\nprint(traffic_light("қызыл"))',
    clearVars: ["traffic_light"],
    exprMap: {res: "traffic_light('қызыл')"},
    expected: {res: "тоқта"},
    fieldLabels: {res: "Әрекет"},
    hint: 'Үшінші шартқа elif деп жазыңыз.',
    realLife: "Жол қозғалысын басқару жүйесі."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Температураға қарай киім таңдайтын функция: 0-ден төмен болса "Қалың киін", әйтпесе "Қалыпты киін".</p></div>',
    valuesHtml: 'Нәтижесінде: <code>what_to_wear(-5)</code> — <b>"Қалың киін"</b> қайтаруы керек.',
    starter: 'def what_to_wear(temp):\n    if temp < 0:\n        return "Қалың киін"\n    else:\n        return "___"\n\nprint(what_to_wear(-5))',
    clearVars: ["what_to_wear"],
    exprMap: {res: "what_to_wear(-5)"},
    expected: {res: "Қалың киін"},
    fieldLabels: {res: "Кеңес"},
    hint: 'Қалыпты киін деп жазыңыз.',
    realLife: "Ауа райы қосымшаларындағы ұсыныстар."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Екі санның үлкенін қайтаратын функция жазыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>get_max(10, 15)</code> — <b>15</b> қайтаруы керек.',
    starter: 'def get_max(a, b):\n    if a > b:\n        return a\n    else:\n        return ___\n\nprint(get_max(10, 15))',
    clearVars: ["get_max"],
    exprMap: {res: "get_max(10, 15)"},
    expected: {res: 15},
    fieldLabels: {res: "Үлкен сан"},
    hint: 'b айнымалысын қайтарыңыз.',
    realLife: "Статистикалық сараптама немесе жарыстар."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Санның жұп немесе тақ екенін анықтайтын функция. (Қалдықты табу үшін % қолданыңыз).</p></div>',
    valuesHtml: 'Нәтижесінде: <code>is_even(4)</code> — <b>True</b> қайтаруы керек.',
    starter: 'def is_even(n):\n    if n % 2 == 0:\n        return ___\n    else:\n        return False\n\nprint(is_even(4))',
    clearVars: ["is_even"],
    exprMap: {res: "is_even(4)"},
    expected: {res: true},
    fieldLabels: {res: "Жұп па?"},
    hint: 'True деп жазыңыз.',
    realLife: "Математикалық алгоритмдер."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Почта индексі 6 саннан тұратынын тексеретін функция.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>check_zip("010000")</code> — <b>True</b> қайтаруы керек.',
    starter: 'def check_zip(zipcode):\n    if len(zipcode) == ___:\n        return True\n    else:\n        return False\n\nprint(check_zip("010000"))',
    clearVars: ["check_zip"],
    exprMap: {res: "check_zip('010000')"},
    expected: {res: true},
    fieldLabels: {res: "Дұрыс па?"},
    hint: '6 деп жазыңыз.',
    realLife: "Деректер қорына тіркелу кезіндегі валидация."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Жұмыс күндерін (1-5) және демалыс күндерін (6,7) ажырататын функция.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>is_weekend(6)</code> — <b>True</b> қайтаруы керек.',
    starter: 'def is_weekend(day):\n    if day == 6 or day == ___:\n        return True\n    else:\n        return False\n\nprint(is_weekend(6))',
    clearVars: ["is_weekend"],
    exprMap: {res: "is_weekend(6)"},
    expected: {res: true},
    fieldLabels: {res: "Демалыс па?"},
    hint: '7 деп жазыңыз.',
    realLife: "Күнтізбе қосымшалары."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Құпия сөз кем дегенде 8 таңба болуы керек. Тексеретін функция жазыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>check_password("1234567")</code> — <b>False</b> қайтаруы керек.',
    starter: 'def check_password(pwd):\n    if len(pwd) >= ___:\n        return True\n    else:\n        return False\n\nprint(check_password("1234567"))',
    clearVars: ["check_password"],
    exprMap: {res: "check_password('1234567')"},
    expected: {res: false},
    fieldLabels: {res: "Сенімді ме?"},
    hint: '8 деп жазыңыз.',
    realLife: "Сайтқа тіркелу қауіпсіздігі."
}];

const m5 = [];
for(let i=1; i<=9; i++){
    m5.push({
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Мысал тапсырма ' + i + ' (Модуль 5).</p></div>',
        valuesHtml: 'Нәтижесінде: <code>ans</code> — <b>' + i + '</b> болуы керек.',
        starter: 'ans = ' + i + '\nprint(ans)',
        clearVars: ["ans"],
        exprMap: {ans: "ans"},
        expected: {ans: i},
        fieldLabels: {ans: "Жауап"},
        hint: i + ' деп жазыңыз.',
        realLife: "Бағдарламалау."
    });
}

const m6 = [];
for(let i=1; i<=9; i++){
    m6.push({
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Мысал тапсырма ' + i + ' (Модуль 6).</p></div>',
        valuesHtml: 'Нәтижесінде: <code>ans</code> — <b>' + i + '</b> болуы керек.',
        starter: 'ans = ' + i + '\nprint(ans)',
        clearVars: ["ans"],
        exprMap: {ans: "ans"},
        expected: {ans: i},
        fieldLabels: {ans: "Жауап"},
        hint: i + ' деп жазыңыз.',
        realLife: "Бағдарламалау."
    });
}

function inject(modId, arr) {
    let str = ",\\n" + arr.map(obj => {
        let lines = [];
        for (let [k,v] of Object.entries(obj)) {
            lines.push("    " + k + ": " + JSON.stringify(v));
        }
        return "{\\n" + lines.join(",\\n") + "\\n}";
    }).join(",\\n");
    let regex = new RegExp("(id:" + modId + ",[\\\\s\\\\S]*?tasks:\\\\[[\\\\s\\\\S]*?)(}\\\\s*\\\\])");
    data = data.replace(regex, "$1" + str + "$2");
}

inject(4, m4);
inject(5, m5);
inject(6, m6);

fs.writeFileSync(file, data);
console.log("Success");
