const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

const imgStyle = 'style="width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"';

// --- MODULE 12: Қымыз салмағы (Float) ---
const mod12Theory = [
    `<img src="/images/qymyz.jpg" alt="Қымыз салмағы" ${imgStyle} />`,
    "Python-да бүтін сандардан (Integer) бөлек, <b>бөлшек сандар (Float)</b> бар. Олар салмақ, көлем, баға сияқты дәлдікті талап ететін шамаларды өлшеу үшін қолданылады.",
    "Қазақ дәстүрінде қымызды сабаға немесе күбіге құяды, ал оны ішу үшін кесеге құямыз. Бір кесе қымыз 0.5 литр (жарты литр) болуы мүмкін. Міне, осы <code>0.5</code> — Float типіндегі сан.",
    "Есте сақтаңыз: бағдарламалауда бөлшек сандарды жазу үшін үтір емес, <b>нүкте (.)</b> қолданылады. Мысалы, <code>1,5</code> емес, <code>1.5</code> деп жазу керек. Егер үтір қойсаңыз, бағдарлама оны екі бөлек сан деп түсінеді.",
    "Float сандармен кез келген математикалық амалдарды жасауға болады. Дегенмен, кейде оларды бүтін санға айналдыру немесе дөңгелектеу қажет болады. Ол үшін <code>round()</code> немесе <code>int()</code> функцияларын қолданамыз."
];
const mod12Examples = [
    { intro: "Float айнымалысын құру:", code: "volume = 1.5\nprint('Көлемі:', volume, 'литр')" },
    { intro: "Бөлшек сандарды қосу:", code: "print(1.5 + 2.3)" },
    { intro: "Float пен бүтін санды көбейту:", code: "kese_kolemi = 0.5\nprint('3 кесе қымыз:', kese_kolemi * 3)" },
    { intro: "Бөлшек санды дөңгелектеу (round):", code: "print('Дөңгелектеу:', round(3.7))" },
    { intro: "Float-ты бүтін санға (int) айналдыру (бөлшек бөлігін алып тастау):", code: "print(int(3.9))" }
];
const mod12Tasks = [
    {
        conditionHtml: '<div class="task-section"><p>1.5 литрді білдіретін бөлшек санды айнымалыға жазыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>volume</code> — <b>1.5</b> болуы керек.',
        starter: 'volume = ___\nprint(volume)', clearVars: ["volume"], exprMap: {res: "volume"}, expected: {res: 1.5}, fieldLabels: {res: "Литр"}, hint: '1.5 деп нүктемен жазыңыз.', realLife: "Көлемді өлшеу"
    },
    {
        conditionHtml: '<div class="task-section"><p>2.5 және 1.5 сандарын қосыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>total</code> — <b>4.0</b> болуы керек.',
        starter: 'total = 2.5 + ___\nprint(total)', clearVars: ["total"], exprMap: {res: "total"}, expected: {res: 4.0}, fieldLabels: {res: "Жалпы"}, hint: '1.5-ті қосыңыз.', realLife: "Сұйықтықтарды араластыру"
    },
    {
        conditionHtml: '<div class="task-section"><p>3.14 санын <b>round()</b> функциясы арқылы дөңгелектеңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>rounded</code> — <b>3</b> болуы керек.',
        starter: 'rounded = ___(3.14)\nprint(rounded)', clearVars: ["rounded"], exprMap: {res: "rounded"}, expected: {res: 3}, fieldLabels: {res: "Дөңгелек"}, hint: 'round деп жазыңыз.', realLife: "Шамалап есептеу"
    },
    {
        conditionHtml: '<div class="task-section"><p>0.5 литрлік 4 кеседе барлығы қанша қымыз бар екенін есептеңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>result</code> — <b>2.0</b> болуы керек.',
        starter: 'result = 0.5 * ___\nprint(result)', clearVars: ["result"], exprMap: {res: "result"}, expected: {res: 2.0}, fieldLabels: {res: "Қорытынды"}, hint: '4-ке көбейтіңіз.', realLife: "Мөлшерді көбейту"
    },
    {
        conditionHtml: '<div class="task-section"><p>4.9 санын <b>int()</b> арқылы бүтін санға айналдырыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>integer</code> — <b>4</b> болуы керек.',
        starter: 'integer = ___(4.9)\nprint(integer)', clearVars: ["integer"], exprMap: {res: "integer"}, expected: {res: 4}, fieldLabels: {res: "Бүтін бөлік"}, hint: 'int деп жазыңыз.', realLife: "Бөлшекті алып тастау"
    }
];

// --- MODULE 13: Уық санау (Modulo) ---
const mod13Theory = [
    `<img src="/images/uyq.jpg" alt="Уық санау" ${imgStyle} />`,
    "Python-да <b>Modulo</b> немесе қалдық табу операторы бар. Ол пайыз белгісімен (<code>%</code>) белгіленеді. Бұл оператор бір санды екінші санға бөлгендегі <b>қалдықты</b> қайтарады.",
    "Мысалы, киіз үйдің шаңырағына уықтар қадалады. Егер бізде 10 уық болса және оларды 3 адамға теңдей бөліп берсек, әрқайсысына 3 уықтан тиіп, 1 уық артылып қалады. Код тілінде бұл: <code>10 % 3 = 1</code>.",
    "Modulo операторының ең көп таралған қолданысы — <b>санның жұп немесе тақ екенін анықтау</b>. Егер санды 2-ге бөлгенде қалдық 0 болса (<code>x % 2 == 0</code>), онда ол сан ЖҰП. Егер қалдық 1 болса (<code>x % 2 == 1</code>), онда сан ТАҚ.",
    "Сонымен қатар, Modulo уақытты есептеуде (мысалы, минуттарды сағатқа айналдыруда: <code>130 % 60 = 10 минут</code> қалдық) немесе шеңбер бойымен қайталанатын циклдерде жиі қолданылады."
];
const mod13Examples = [
    { intro: "Қалдықты табу:", code: "print('10-ды 3-ке бөлгендегі қалдық:', 10 % 3)" },
    { intro: "Жұп санды тексеру (қалдық 0):", code: "print('8 жұп сан ба?', 8 % 2 == 0)" },
    { intro: "Тақ санды тексеру (қалдық 1):", code: "print('11 тақ сан ба?', 11 % 2 == 1)" },
    { intro: "Уақыттан қалған минутты табу (сағаттан асқаны):", code: "print('130 минутта қанша артық минут бар?', 130 % 60)" },
    { intro: "Санның ең соңғы цифрын табу (10-ға бөлу):", code: "print('1234 санының соңғы цифры:', 1234 % 10)" }
];
const mod13Tasks = [
    {
        conditionHtml: '<div class="task-section"><p>15-ті 4-ке бөлгендегі қалдықты табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>result</code> — <b>3</b> болуы керек.',
        starter: 'result = 15 % ___\nprint(result)', clearVars: ["result"], exprMap: {res: "result"}, expected: {res: 3}, fieldLabels: {res: "Қалдық"}, hint: '4 деп жазыңыз.', realLife: "Бөліністен қалған қалдық"
    },
    {
        conditionHtml: '<div class="task-section"><p>10 санының <b>жұп</b> екенін тексеру үшін 2-ге бөлгендегі қалдықты табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>remainder</code> — <b>0</b> болуы керек.',
        starter: 'remainder = 10 % ___\nprint(remainder)', clearVars: ["remainder"], exprMap: {res: "remainder"}, expected: {res: 0}, fieldLabels: {res: "Жұптық"}, hint: '2 деп жазыңыз.', realLife: "Жұптық тексеру"
    },
    {
        conditionHtml: '<div class="task-section"><p>13 санының <b>тақ</b> екенін тексеру үшін 2-ге бөліп, қалдықты көріңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>is_odd</code> — <b>1</b> болуы керек.',
        starter: 'is_odd = 13 % ___\nprint(is_odd)', clearVars: ["is_odd"], exprMap: {res: "is_odd"}, expected: {res: 1}, fieldLabels: {res: "Тақтық"}, hint: '2 деп жазыңыз.', realLife: "Тақтық тексеру"
    },
    {
        conditionHtml: '<div class="task-section"><p>100 минуттың ішінде 1 сағаттан (60 мин) кейін қанша минут қалғанын табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>mins_left</code> — <b>40</b> болуы керек.',
        starter: 'mins_left = 100 % ___\nprint(mins_left)', clearVars: ["mins_left"], exprMap: {res: "mins_left"}, expected: {res: 40}, fieldLabels: {res: "Қалған минут"}, hint: '60-қа бөліп қалдығын алыңыз.', realLife: "Уақыт есебі"
    },
    {
        conditionHtml: '<div class="task-section"><p>75 санының ең соңғы цифрын табу үшін оны 10-ға бөлгендегі қалдықты табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>last_digit</code> — <b>5</b> болуы керек.',
        starter: 'last_digit = 75 % ___\nprint(last_digit)', clearVars: ["last_digit"], exprMap: {res: "last_digit"}, expected: {res: 5}, fieldLabels: {res: "Соңғы цифр"}, hint: '10 деп жазыңыз.', realLife: "Цифрды бөліп алу"
    }
];

// --- MODULE 14: Қазан көлемі (Exponent) ---
const mod14Theory = [
    `<img src="/images/qazan.jpg" alt="Қазан көлемі" ${imgStyle} />`,
    "Python-да математикалық <b>дәрежеге шығару</b> үшін екі жұлдызша (<code>**</code>) операторы қолданылады. Басқа тілдердегідей `^` белгісі емес, дәл осы <code>**</code> белгісі.",
    "Мысалы, 2-нің 3 дәрежесін (2³) есептеу үшін <code>2 ** 3</code> деп жазамыз. Бұл 2 * 2 * 2 = 8 деген сөз.",
    "Қазақтың қазаны — үлкен көлемді ыдыс. Егер біз қазанның немесе басқа да көлемді заттардың ауданы мен көлемін есептегіміз келсе, формулаларда дәреже (квадрат, куб) жиі кездеседі. Текшенің (кубтың) көлемі V = a³ болса, Python-да ол <code>V = a ** 3</code> болып жазылады.",
    "Қызықты факт: квадрат түбірді (корень) табу үшін де осы операторды қолдануға болады! Санның 0.5 дәрежесі — оның квадрат түбіріне тең. Мысалы, <code>25 ** 0.5</code> коды бізге <code>5.0</code> қайтарады."
];
const mod14Examples = [
    { intro: "Квадратқа шығару:", code: "print('3-тің квадраты:', 3 ** 2)" },
    { intro: "Кубқа шығару:", code: "print('2-нің кубы:', 2 ** 3)" },
    { intro: "Үлкен дәрежелер:", code: "print('10-ның 4 дәрежесі:', 10 ** 4)" },
    { intro: "Текшенің (кубтың) көлемін табу (a = 5):", code: "a = 5\nvolume = a ** 3\nprint('Көлемі:', volume)" },
    { intro: "Квадрат түбір (корень) табу (0.5 дәреже):", code: "print('16-ның түбірі:', 16 ** 0.5)" }
];
const mod14Tasks = [
    {
        conditionHtml: '<div class="task-section"><p>4-тің квадратын (2 дәрежесін) есептеңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>result</code> — <b>16</b> болуы керек.',
        starter: 'result = 4 ** ___\nprint(result)', clearVars: ["result"], exprMap: {res: "result"}, expected: {res: 16}, fieldLabels: {res: "Квадрат"}, hint: '2 деп жазыңыз.', realLife: "Аудан есептеу"
    },
    {
        conditionHtml: '<div class="task-section"><p>3-тің кубын (3 дәрежесін) есептеңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>result</code> — <b>27</b> болуы керек.',
        starter: 'result = 3 ** ___\nprint(result)', clearVars: ["result"], exprMap: {res: "result"}, expected: {res: 27}, fieldLabels: {res: "Куб"}, hint: '3 деп жазыңыз.', realLife: "Көлем есептеу"
    },
    {
        conditionHtml: '<div class="task-section"><p>Қабырғасы a = 6 болатын текшенің (кубтың) көлемін табыңыз (a³).</p></div>',
        valuesHtml: 'Нәтижесінде: <code>volume</code> — <b>216</b> болуы керек.',
        starter: 'a = 6\nvolume = a ** ___\nprint(volume)', clearVars: ["volume"], exprMap: {res: "volume"}, expected: {res: 216}, fieldLabels: {res: "Көлемі"}, hint: '3 деп жазыңыз.', realLife: "Қазан/қорап көлемі"
    },
    {
        conditionHtml: '<div class="task-section"><p>2-нің 5 дәрежесін есептеңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>power</code> — <b>32</b> болуы керек.',
        starter: 'power = 2 ** ___\nprint(power)', clearVars: ["power"], exprMap: {res: "power"}, expected: {res: 32}, fieldLabels: {res: "Дәреже"}, hint: '5 деп жазыңыз.', realLife: "Екілік жүйе"
    },
    {
        conditionHtml: '<div class="task-section"><p>81 санының квадрат түбірін табу үшін оны <b>0.5</b> дәрежесіне шығарыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>root</code> — <b>9.0</b> болуы керек.',
        starter: 'root = 81 ** ___\nprint(root)', clearVars: ["root"], exprMap: {res: "root"}, expected: {res: 9.0}, fieldLabels: {res: "Түбір"}, hint: '0.5 деп жазыңыз.', realLife: "Квадрат түбір"
    }
];

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';
fs.writeFileSync('temp_mod12_14.js', code);
const MODULES = require('./temp_mod12_14.js');

let m12 = MODULES.find(m => m.id === 12);
if (m12) { m12.theory = mod12Theory; m12.examples = mod12Examples; m12.tasks = mod12Tasks; }

let m13 = MODULES.find(m => m.id === 13);
if (m13) { m13.theory = mod13Theory; m13.examples = mod13Examples; m13.tasks = mod13Tasks; }

let m14 = MODULES.find(m => m.id === 14);
if (m14) { m14.theory = mod14Theory; m14.examples = mod14Examples; m14.tasks = mod14Tasks; }

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_mod12_14.js');
console.log("Modules 12, 13, 14 updated with images, theory, examples, and tasks.");
