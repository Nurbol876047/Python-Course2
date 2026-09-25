const fs = require('fs');
const file = 'src/data/python_omirde.js';
let data = fs.readFileSync(file, 'utf8');

const m1 = [
{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Дүкеннен 3 түрлі тауар сатып алдыңыз. Олардың бағалары берілген. Барлығы қанша теңге шыққанын есептеңіз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>total</code> — <b>1500</b> болуы керек.',
    starter: 'price1 = 400\nprice2 = 600\nprice3 = 500\n\ntotal = ___\nprint("Барлығы:", total)',
    clearVars: ["total"],
    exprMap: {total: "total"},
    expected: {total: 1500},
    fieldLabels: {total: "жалпы сома"},
    hint: 'Барлық бағаларды қосу керек: <code>total = price1 + price2 + price3</code>.',
    realLife: "Дүкен чегі осылай есептеледі."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Қызметкердің бір күндік жалақысы белгілі. Ол 22 күн жұмыс істесе, бір айлық жалақысын табыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>salary</code> — <b>220000</b> болуы керек.',
    starter: 'daily_rate = 10000\ndays_worked = 22\n\nsalary = ___\nprint("Айлық жалақы:", salary)',
    clearVars: ["salary"],
    exprMap: {salary: "salary"},
    expected: {salary: 220000},
    fieldLabels: {salary: "айлық жалақы"},
    hint: 'Күндік мөлшерлемені күндер санына көбейтіңіз: <code>salary = daily_rate * days_worked</code>.',
    realLife: "Бухгалтерияда жалақы осылай есептеледі."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Тауардың бастапқы бағасы мен жеңілдік сомасы берілген. Жеңілдікпен қанша болатынын табыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>final_price</code> — <b>11500</b> болуы керек.',
    starter: 'original_price = 15000\ndiscount = 3500\n\nfinal_price = ___\nprint("Жеңілдікпен баға:", final_price)',
    clearVars: ["final_price"],
    exprMap: {final_price: "final_price"},
    expected: {final_price: 11500},
    fieldLabels: {final_price: "соңғы баға"},
    hint: 'Бастапқы бағадан жеңілдікті алып тастаңыз: <code>final_price = original_price - discount</code>.',
    realLife: "Интернет-дүкендерде жеңілдік осылай есептеледі."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Жол жүру үшін бірнеше адам ақша жинады. Жалпы жиналған соманы 4 адамға тең бөлу керек.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>per_person</code> — <b>3500</b> болуы керек.',
    starter: 'total_collected = 14000\npeople = 4\n\nper_person = ___\nprint("Әр адамға:", per_person)',
    clearVars: ["per_person"],
    exprMap: {per_person: "per_person"},
    expected: {per_person: 3500},
    fieldLabels: {per_person: "әр адамға"},
    hint: 'Жалпы соманы адам санына бөліңіз: <code>per_person = total_collected / people</code>.',
    realLife: "Таксиде немесе мейрамханада шотты бөлу осылай жұмыс істейді."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Батареяның зарядталу деңгейі пайызда берілген. 100% болу үшін қанша пайыз қалғанын табыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>remaining</code> — <b>28</b> болуы керек.',
    starter: 'current_battery = 72\n\nremaining = ___\nprint("Қалған заряд:", remaining)',
    clearVars: ["remaining"],
    exprMap: {remaining: "remaining"},
    expected: {remaining: 28},
    fieldLabels: {remaining: "қалған пайыз"},
    hint: '100-ден қазіргі зарядты алып тастаңыз: <code>remaining = 100 - current_battery</code>.',
    realLife: "Смартфоныңыздағы зарядты көрсету жүйесі осыны қолданады."
}];

const m2 = [
{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Тізімдегі оң сандардың санын табыңыз (қанша оң сан бар екенін санау).</p></div>',
    valuesHtml: 'Нәтижесінде: <code>count</code> — <b>3</b> болуы керек.',
    starter: 'numbers = [4, -2, 8, -5, 10]\ncount = 0\nfor n in numbers:\n    if n > 0:\n        count = ___\nprint("Оң сандар саны:", count)',
    clearVars: ["count"],
    exprMap: {count: "count"},
    expected: {count: 3},
    fieldLabels: {count: "оң сандар саны"},
    hint: 'Оң сан табылған сайын count айнымалысын 1-ге арттырыңыз: <code>count = count + 1</code>.',
    realLife: "Статистикада белгілі бір шартқа сай деректерді санау жиі кездеседі."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Тізімдегі барлық сандарды 2 есе көбейтіп, жаңа тізімге сақтаңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>doubled</code> — <b>[10, 20, 30]</b> болуы керек.',
    starter: 'numbers = [5, 10, 15]\ndoubled = []\nfor n in numbers:\n    doubled.append(___)\nprint(doubled)',
    clearVars: ["doubled"],
    exprMap: {a: "doubled[0]", b: "doubled[1]", c: "doubled[2]"},
    expected: {a: 10, b: 20, c: 30},
    fieldLabels: {a: "1-сан", b: "2-сан", c: "3-сан"},
    hint: 'Цикл ішінде <code>doubled.append(n * 2)</code> деп жазыңыз.',
    realLife: "Барлық тауарлардың бағасын белгілі бір есеге арттыру кезінде қолданылады."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Тізімнен ең кіші санды (min() функциясынсыз) табыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>minimum</code> — <b>-3</b> болуы керек.',
    starter: 'numbers = [12, 5, 8, -3, 15]\nminimum = numbers[0]\nfor n in numbers:\n    if n < minimum:\n        minimum = ___\nprint(minimum)',
    clearVars: ["minimum"],
    exprMap: {minimum: "minimum"},
    expected: {minimum: -3},
    fieldLabels: {minimum: "ең кіші сан"},
    hint: 'Егер n қазіргі минимумнан кіші болса, <code>minimum = n</code>.',
    realLife: "Деректер арасынан ең төменгі көрсеткішті табу."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Студенттердің бағалары тізімі берілген. Тек 90-нан жоғары баға алғандардың санын табыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>excellent</code> — <b>2</b> болуы керек.',
    starter: 'grades = [85, 92, 78, 95, 88]\nexcellent = 0\nfor g in grades:\n    if ___ > 90:\n        excellent = excellent + 1\nprint(excellent)',
    clearVars: ["excellent"],
    exprMap: {excellent: "excellent"},
    expected: {excellent: 2},
    fieldLabels: {excellent: "үздік бағалар"},
    hint: 'if шартында <code>g > 90</code> деп жазыңыз.',
    realLife: "Стипендия немесе мақтау қағазын алатындарды іріктеу."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Сөздер тізімінен тек 5 әріптен тұратын сөздердің санын табыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>count_words</code> — <b>2</b> болуы керек.',
    starter: 'words = ["қазан", "күз", "аспан", "бұлт", "жаңбыр"]\ncount_words = 0\nfor w in words:\n    if len(w) == ___:\n        count_words += 1\nprint(count_words)',
    clearVars: ["count_words"],
    exprMap: {count: "count_words"},
    expected: {count: 2},
    fieldLabels: {count: "сөздер саны"},
    hint: 'Шартта сөздің ұзындығы 5-ке тең екенін тексеріңіз: <code>len(w) == 5</code>.',
    realLife: "Мәтіндік деректерді өңдеу және сүзу."
}];

const m3 = [
{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Студенттің пәндер бойынша кредиттері берілген. Барлық кредиттердің қосындысын табыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>total_credits</code> — <b>12</b> болуы керек.',
    starter: 'credits = {"Мат": 4, "Физика": 3, "Химия": 2, "Информатика": 3}\ntotal_credits = sum(___)\nprint(total_credits)',
    clearVars: ["total_credits"],
    exprMap: {total: "total_credits"},
    expected: {total: 12},
    fieldLabels: {total: "жалпы кредит"},
    hint: 'Барлық мәндерді алу үшін <code>credits.values()</code> қолданыңыз.',
    realLife: "ЖОО-да семестрлік жүктемені есептеу."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Қоймадағы тауар қалдықтары сөздігі берілген. Оған жаңа "Дәптер" тауарын 50 дана көлемінде қосыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>inventory["Дәптер"]</code> — <b>50</b> болуы керек.',
    starter: 'inventory = {"Қалам": 100, "Өшіргіш": 30}\ninventory["___"] = ___\nprint(inventory)',
    clearVars: ["inventory"],
    exprMap: {dapter: "inventory.get('Дәптер')"},
    expected: {dapter: 50},
    fieldLabels: {dapter: "Дәптер саны"},
    hint: 'Кілт ретінде "Дәптер", ал мәніне 50 беріңіз: <code>inventory["Дәптер"] = 50</code>.',
    realLife: "Дүкенде жаңа тауар келгенде базаны жаңарту."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Елдер мен олардың астаналары берілген. Егер "Қазақстан" сөздікте болса, оның астанасын шығарыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>capital</code> — <b>"Астана"</b> болуы керек.',
    starter: 'countries = {"Қазақстан": "Астана", "Түркия": "Анкара"}\ncapital = ""\nif "Қазақстан" in countries:\n    capital = countries["___"]\nprint(capital)',
    clearVars: ["capital"],
    exprMap: {cap: "capital"},
    expected: {cap: "Астана"},
    fieldLabels: {cap: "Астана"},
    hint: 'Мәнді алу үшін кілтті көрсетіңіз: <code>countries["Қазақстан"]</code>.',
    realLife: "Анықтамалық базадан іздеу жүйелері осылай істейді."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Тауарлар бағасынан 20% жеңілдік (инфляция емес, керісінше арзандату) жасалған жаңа бағаларды есептеңіз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>prices["Кофе"]</code> — <b>800</b> болуы керек.',
    starter: 'prices = {"Кофе": 1000, "Шай": 500}\nfor item in prices:\n    prices[item] = int(prices[item] * ___)\nprint(prices)',
    clearVars: ["prices"],
    exprMap: {coffee: "prices.get('Кофе')"},
    expected: {coffee: 800},
    fieldLabels: {coffee: "Кофе жаңа бағасы"},
    hint: '20% жеңілдік жасау үшін мәнді 0.8-ге көбейтіңіз: <code>prices[item] * 0.8</code>.',
    realLife: "Жаппай жеңілдіктер (Black Friday) кезінде бағаларды жаңарту."
},{
    conditionHtml: '<div class="task-section"><span class="task-section-label">Шарты</span><p>Сөздіктегі кілттердің санын (яғни неше түрлі тауар бар екенін) табыңыз.</p></div>',
    valuesHtml: 'Нәтижесінде: <code>types_count</code> — <b>3</b> болуы керек.',
    starter: 'stock = {"Алма": 50, "Банан": 20, "Алмұрт": 30}\ntypes_count = ___(stock)\nprint(types_count)',
    clearVars: ["types_count"],
    exprMap: {cnt: "types_count"},
    expected: {cnt: 3},
    fieldLabels: {cnt: "тауар түрлері"},
    hint: 'Сөздіктегі элементтер санын табу үшін <code>len(stock)</code> қолданыңыз.',
    realLife: "Қоймадағы тауарлар номенклатурасының санын анықтау."
}];

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

inject(1, m1);
inject(2, m2);
inject(3, m3);

fs.writeFileSync(file, data);
console.log("Success");
