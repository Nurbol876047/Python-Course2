const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

const newExamples = [
    {
        intro: "Шығындардың жалпы сомасын есептейтін функция:",
        code: "def calc_total(expenses):\n    return sum(expenses)\n\nmy_expenses = [12000, 5000, 8000]\nprint('Жалпы шығын:', calc_total(my_expenses))"
    },
    {
        intro: "Тауардың таза бағасына салық қосып есептеу:",
        code: "def price_with_tax(price, tax_percent):\n    return price + (price * tax_percent / 100)\n\nresult = price_with_tax(10000, 12)\nprint('Салықпен бірге:', result, '₸')"
    },
    {
        intro: "Табыстың шығыннан асатынын тексеру (True/False):",
        code: "def is_budget_ok(income, expenses):\n    total_expenses = sum(expenses)\n    return income >= total_expenses\n\nprint('Бюджет жеткілікті ме?', is_budget_ok(150000, [50000, 30000]))"
    },
    {
        intro: "Ай сайын қанша ақша жинауға болатынын табу:",
        code: "def get_savings(income, rent, food):\n    return income - rent - food\n\nsaved = get_savings(200000, 70000, 50000)\nprint('Үнемделген сома:', saved)"
    },
    {
        intro: "Айлық табысты жылдық табысқа айналдыру:",
        code: "def yearly_income(monthly_salary):\n    return monthly_salary * 12\n\nprint('Жылдық табыс:', yearly_income(250000))"
    }
];

const newTasks = [
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Шығындардың жалпы сомасын қайтаратын <code>calc_total</code> функциясын толықтырыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>calc_total([5000, 3000])</code> — <b>8000</b> қайтаруы керек.',
        starter: 'def calc_total(expenses):\n    return ___(expenses)\n\nprint(calc_total([5000, 3000]))',
        clearVars: ["calc_total"], exprMap: {res: "calc_total([5000, 3000])"}, expected: {res: 8000}, fieldLabels: {res: "Қосынды"}, hint: 'Тізімнің қосындысын табу үшін sum функциясын қолданыңыз.', realLife: "Айлық шығындарды есептеу"
    },
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Жалақыдан 10% зейнетақы жарнасын есептейтін функция жазыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>get_tax(150000)</code> — <b>15000.0</b> қайтаруы керек.',
        starter: 'def get_tax(salary):\n    return salary * ___\n\nprint(get_tax(150000))',
        clearVars: ["get_tax"], exprMap: {res: "get_tax(150000)"}, expected: {res: 15000}, fieldLabels: {res: "Салық"}, hint: '10% табу үшін 0.1-ге көбейтіңіз.', realLife: "Зейнетақы мен салық есептеу"
    },
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Жиналған ақшаңыз тауарды сатып алуға жететінін тексеретін функция жазыңыз (True/False).</p></div>',
        valuesHtml: 'Нәтижесінде: <code>can_buy(20000, 25000)</code> — <b>True</b> қайтаруы керек.',
        starter: 'def can_buy(price, savings):\n    return savings ___ price\n\nprint(can_buy(20000, 25000))',
        clearVars: ["can_buy"], exprMap: {res: "can_buy(20000, 25000)"}, expected: {res: true}, fieldLabels: {res: "Жете ме?"}, hint: 'Үлкен немесе тең белгісін (>=) қолданыңыз.', realLife: "Сатып алу мүмкіндігін бағалау"
    },
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Бюджеттен азық-түлікке кеткен шығынды алып тастағандағы қалдықты табыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>remaining(50000, 15000)</code> — <b>35000</b> қайтаруы керек.',
        starter: 'def remaining(budget, groceries):\n    return budget ___ groceries\n\nprint(remaining(50000, 15000))',
        clearVars: ["remaining"], exprMap: {res: "remaining(50000, 15000)"}, expected: {res: 35000}, fieldLabels: {res: "Қалдық"}, hint: 'Азайту (-) белгісін қолданыңыз.', realLife: "Қолда қалған ақшаны санау"
    },
    {
        conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Ай сайын үнемделген сома бойынша 1 жылда (12 ай) қанша жиналатынын есептейтін функция жазыңыз.</p></div>',
        valuesHtml: 'Нәтижесінде: <code>yearly_savings(10000)</code> — <b>120000</b> қайтаруы керек.',
        starter: 'def yearly_savings(monthly):\n    return monthly * ___\n\nprint(yearly_savings(10000))',
        clearVars: ["yearly_savings"], exprMap: {res: "yearly_savings(10000)"}, expected: {res: 120000}, fieldLabels: {res: "Жылдық қор"}, hint: '1 жылда 12 ай бар.', realLife: "Депозит пен жинақ есебі"
    }
];

let code = data.replace('export const MODULES =', 'const MODULES =');
code += '\nmodule.exports = MODULES;';

fs.writeFileSync('temp_mod6.js', code);
const MODULES = require('./temp_mod6.js');

let mod6 = MODULES.find(m => m.id === 6);
if (mod6) {
    mod6.examples = newExamples;
    mod6.tasks = newTasks;
}

let finalOutput = "export const MODULES = " + JSON.stringify(MODULES, null, 4) + ";\n";
fs.writeFileSync(file, finalOutput);
fs.unlinkSync('temp_mod6.js');
console.log("Module 6 updated with 5 thematic examples and tasks.");
