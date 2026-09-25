const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

const newExamples = [
    {
        intro: "Қоқыс жәшігіндегі заттар санын анықтау (len функциясы):",
        code: "waste = ['қағаз', 'пластик', 'шыны', 'алма қалдығы']\nprint('Жалпы заттар саны:', len(waste))"
    },
    {
        intro: "Заттың қайта өңдеуге жарамдылығын тексеру (if шарты):",
        code: "item = 'пластик'\nrecyclable = ['қағаз', 'пластик', 'шыны']\nif item in recyclable:\n    print(item, 'қайта өңдеуге жарамды!')\nelse:\n    print(item, 'жарамсыз.')"
    },
    {
        intro: "Барлық пластик бөтелкелерді санау (for циклі):",
        code: "items = ['қағаз', 'пластик', 'пластик', 'шыны', 'пластик']\nplastic_count = 0\nfor i in items:\n    if i == 'пластик':\n        plastic_count += 1\nprint('Пластик саны:', plastic_count)"
    },
    {
        intro: "Қайта өңделетін қалдықтардың пайызын есептеу:",
        code: "total_items = 10\nrecycled_items = 7\npercent = (recycled_items / total_items) * 100\nprint('Қайта өңдеу пайызы:', percent, '%')"
    },
    {
        intro: "Қауіпті қалдықты (батарейка) іздеу:",
        code: "bin = ['қағаз', 'батарейка', 'шыны']\nif 'батарейка' in bin:\n    print('НАЗАР АУДАРЫҢЫЗ: Қауіпті қалдық табылды!')"
    }
];

const newTasks = [
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Тізімдегі <b>"қағаз"</b> қалдықтарының санын табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>paper_count</code> — <b>3</b> болуы керек.',
        starter: 'waste = ["қағаз", "пластик", "қағаз", "шыны", "қағаз"]\npaper_count = 0\nfor w in waste:\n    if w == "___":\n        paper_count += 1\nprint(paper_count)',
        clearVars: ["paper_count"], exprMap: {res: "paper_count"}, expected: {res: 3}, fieldLabels: {res: "Қағаз саны"}, hint: '"қағаз" деп жазыңыз.', realLife: "Макулатура жинау"
    },
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Қоқыстың неше пайызы қайта өңделетінін есептеңіз. Жалпы заттар: 20, өңделетіні: 15.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>percent</code> — <b>75.0</b> болуы керек.',
        starter: 'total = 20\nrecycled = 15\npercent = (recycled / ___) * 100\nprint(percent)',
        clearVars: ["percent"], exprMap: {res: "percent"}, expected: {res: 75}, fieldLabels: {res: "Пайыз"}, hint: 'total айнымалысына бөліңіз.', realLife: "Экологиялық есептеулер"
    },
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Жәшіктен тек шыны (glass) қалдықтарын жаңа тізімге жинаңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>glass_bin</code> — <b>["шыны", "шыны"]</b> болуы керек.',
        starter: 'waste = ["шыны", "пластик", "қағаз", "шыны"]\nglass_bin = []\nfor w in waste:\n    if w == "шыны":\n        glass_bin.___(w)\nprint(glass_bin)',
        clearVars: ["glass_bin"], exprMap: {a: "glass_bin[0]", b: "glass_bin[1]"}, expected: {a: "шыны", b: "шыны"}, fieldLabels: {a: "1", b: "2"}, hint: 'Тізімге қосу үшін append әдісін қолданыңыз.', realLife: "Қалдықтарды сұрыптау процесі"
    },
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Егер тізімде "пластик" болса, <code>has_plastic</code> айнымалысын True етіңіз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>has_plastic</code> — <b>True</b> болуы керек.',
        starter: 'waste = ["қағаз", "пластик", "шыны"]\nhas_plastic = False\nif "___" in waste:\n    has_plastic = True\nprint(has_plastic)',
        clearVars: ["has_plastic"], exprMap: {res: "has_plastic"}, expected: {res: true}, fieldLabels: {res: "Бар ма?"}, hint: '"пластик" сөзін іздеңіз.', realLife: "Автоматты сұрыптау датчиктері"
    },
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Қалдықтар салмақтары берілген. Барлығының жалпы салмағын табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>total_weight</code> — <b>12.5</b> болуы керек.',
        starter: 'weights = [2.5, 4.0, 1.5, 4.5]\ntotal_weight = 0\nfor w in weights:\n    total_weight += ___\nprint(total_weight)',
        clearVars: ["total_weight"], exprMap: {res: "total_weight"}, expected: {res: 12.5}, fieldLabels: {res: "Жалпы салмақ"}, hint: 'w айнымалысын қосыңыз.', realLife: "Қоқыс тасымалдаушы көліктің жүктемесін есептеу"
    }
];

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';

fs.writeFileSync('temp_mod.js', code);
const MODULES = require('./temp_mod.js');

let mod5 = MODULES.find(m => m.id === 5);
if (mod5) {
    mod5.examples = newExamples;
    mod5.tasks = newTasks;
}

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_mod.js');
console.log("Module 5 updated with 5 thematic examples and tasks.");
