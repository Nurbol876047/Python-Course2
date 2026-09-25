const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

const mod11Theory = [
    '<img src="/images/shanyrak.jpg" alt="Шаңырақ көтеру" style="width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />',
    "Бағдарламалауда ақиқатты немесе жалғандықты білдіретін арнайы деректер типі бар. Ол <b>Boolean (Бульдік)</b> тип деп аталады. Оның тек екі ғана мәні болуы мүмкін: <code>True</code> (Ақиқат / Шын) немесе <code>False</code> (Жалған / Өтірік). Бұл ұғымдар компьютердің шешім қабылдауына көмектеседі.",
    "Қазақ дәстүрінде киіз үйді тігу — үлкен процесс. Шаңырақ көтеру үшін алдымен кереге керілуі керек, сосын уық шаншылады. Яғни, «Шаңырақ көтерілді ме?» деген сұраққа тек «Иә» (True) немесе «Жоқ» (False) деп қана жауап бере аламыз. Бұл — логиканың нақты өмірдегі көрінісі.",
    "Сонымен қатар, Python-да <b>салыстыру операторлары</b> бар. Олар екі мәнді бір-бірімен салыстырып, нәтижесінде әрқашан <code>True</code> немесе <code>False</code> қайтарады. Мысалы: <br/><ul><li><code>==</code> (тең бе?)</li><li><code>!=</code> (тең емес пе?)</li><li><code>&gt;</code> (үлкен бе?)</li><li><code>&lt;</code> (кіші ме?)</li><li><code>&gt;=</code> (үлкен немесе тең)</li><li><code>&lt;=</code> (кіші немесе тең)</li></ul> Мысалы, <code>5 &gt; 3</code> коды <code>True</code> береді, ал <code>10 == 5</code> коды <code>False</code> береді.",
    "Күрделі шешімдер қабылдау үшін <b>логикалық операторларды</b> қолданамыз: <ul><li><code>and</code> (ЖӘНЕ): Екі шарт та орындалуы керек. Мысалы, «кереге керілді ЖӘНЕ уық шаншылды» дегенде ғана шаңырақ көтеріледі.</li><li><code>or</code> (НЕМЕСЕ): Екі шарттың кем дегенде біреуі орындалса жеткілікті. Мысалы, «шайға сүт НЕМЕСЕ қаймақ қосу».</li><li><code>not</code> (ЕМЕС): Нәтижені керісінше айналдырады. <code>not True</code> дегеніміз <code>False</code> болады.</li></ul>",
    "Осы қарапайым логикалық құрылымдар — жасанды интеллекттің, ойындардың және барлық заманауи бағдарламалардың негізгі «миы» болып табылады. Оларсыз компьютер ешқандай таңдау жасай алмас еді."
];

const mod11Examples = [
    { intro: "Айнымалыға логикалық мән беру (Boolean):", code: "is_up = True\nprint('Шаңырақ көтерілді ме?', is_up)" },
    { intro: "Салыстыру операторы (Үлкен бе?):", code: "print('10 саны 5-тен үлкен бе?', 10 > 5)" },
    { intro: "Логикалық AND (ЖӘНЕ) операторы:", code: "kerege = True\nuyq = True\nready = kerege and uyq\nprint('Киіз үй дайын ба?', ready)" },
    { intro: "Теңдікті тексеру (==):", code: "guest_count = 15\nprint('Қонақтар 15 пе?', guest_count == 15)" },
    { intro: "NOT (ЕМЕС) операторы мәнді теріске шығарады:", code: "is_raining = False\nprint('Дала ашық па?', not is_raining)" }
];

const mod11Tasks = [
    {
        conditionHtml: '<div class="task-section"><p>Шаңырақ көтерілгенін растайтын <b>True</b> мәнін меншіктеңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>is_up</code> — <b>True</b> болуы керек.',
        starter: 'is_up = ___\nprint(is_up)', clearVars: ["is_up"], exprMap: {res: "is_up"}, expected: {res: true}, fieldLabels: {res: "Мән"}, hint: 'True деп жазыңыз (бас әріппен).', realLife: "Статусты анықтау"
    },
    {
        conditionHtml: '<div class="task-section"><p>20 саны 10-нан үлкен екенін тексеру үшін тиісті белгіні қойыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>result</code> — <b>True</b> болуы керек.',
        starter: 'result = 20 ___ 10\nprint(result)', clearVars: ["result"], exprMap: {res: "result"}, expected: {res: true}, fieldLabels: {res: "Нәтиже"}, hint: '> белгісін қойыңыз.', realLife: "Салыстыру"
    },
    {
        conditionHtml: '<div class="task-section"><p>Кереге де, уық та дайын. Осы екеуін біріктіру үшін <b>ЖӘНЕ (and)</b> операторын қолданыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>shanyraq_ready</code> — <b>True</b> болуы керек.',
        starter: 'kerege = True\nuyq = True\nshanyraq_ready = kerege ___ uyq\nprint(shanyraq_ready)', clearVars: ["shanyraq_ready"], exprMap: {res: "shanyraq_ready"}, expected: {res: true}, fieldLabels: {res: "Дайын ба?"}, hint: 'and деп жазыңыз.', realLife: "Қос шарт"
    },
    {
        conditionHtml: '<div class="task-section"><p>5 саны 5-ке тең екенін тексеру үшін <b>теңдік</b> операторын жазыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>is_equal</code> — <b>True</b> болуы керек.',
        starter: 'is_equal = 5 ___ 5\nprint(is_equal)', clearVars: ["is_equal"], exprMap: {res: "is_equal"}, expected: {res: true}, fieldLabels: {res: "Тең бе?"}, hint: '== белгісін қолданыңыз.', realLife: "Дәлдікті тексеру"
    },
    {
        conditionHtml: '<div class="task-section"><p>False мәнін керісінше (True) айналдыру үшін <b>ЕМЕС (not)</b> операторын қолданыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>result</code> — <b>True</b> болуы керек.',
        starter: 'result = ___ False\nprint(result)', clearVars: ["result"], exprMap: {res: "result"}, expected: {res: true}, fieldLabels: {res: "Керісінше"}, hint: 'not деп жазыңыз.', realLife: "Теріске шығару"
    }
];

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';
fs.writeFileSync('temp_mod11.js', code);
const MODULES = require('./temp_mod11.js');

let m11 = MODULES.find(m => m.id === 11);
if(m11) {
    m11.theory = mod11Theory;
    m11.examples = mod11Examples;
    m11.tasks = mod11Tasks;
}

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_mod11.js');
console.log("Module 11 updated with image, expanded theory, 5 examples and 5 tasks.");
