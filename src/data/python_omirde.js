export const MODULES = [
    {
        "id": 1,
        "title": "Дастархан бюджеті",
        "topic": "Айнымалылар және арифметика",
        "time": "15 мин",
        "heroSvg": "<img src=\"/images/mod1.jpg\" alt=\"Модуль 1\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod1.jpg\" alt=\"Модуль 1\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Python-да <b>айнымалы</b> — бір мәнді есте сақтайтын аты бар \"қорап\". Мән беру үшін <code>=</code> таңбасы қолданылады: сол жағында айнымалының аты, оң жағында — мәні. Мысалы, <code>guests = 8</code> дегенде <code>guests</code> деген айнымалыға 8 саны жазылады.",
            "Python айнымалының түрін өзі анықтайды: <code>8</code> — бүтін сан (<b>int</b>), <code>8.5</code> — бөлшек сан (<b>float</b>), <code>\"сәлем\"</code> — мәтін (<b>str</b>). Түрді алдын ала жариялаудың қажеті жоқ.",
            "Арифметикалық амалдар әдеттегідей жазылады: <code>+</code> қосу, <code>-</code> азайту, <code>*</code> көбейту, <code>/</code> бөлу. Айнымалыларды өрнектерде еркін қолдануға болады: <code>total = price * quantity</code>.",
            "Есептің нәтижесін жаңа айнымалыға сақтап, оны келесі есептеулерде қайта пайдалануға болады — бұл кодты ретті әрі түсінікті етеді.",
            "Күнделікті өмірде бұл — кез келген бюджетті есептеудің негізі: неше адамға, қанша тұратынын, жалпы соманы қаншалықты жылдам тауып алуға болатынын көресіз.",
            "Мәннің түрін өзгерту керек болса, <code>int()</code>, <code>float()</code>, <code>str()</code> функциялары қолданылады. Мысалы, <code>\"1500\"</code> деген мәтінді санға айналдыру үшін <code>int(\"1500\")</code> жазылады — бұл деректер әртүрлі көзден (мәтін түрінде) келгенде жиі керек болады.",
            "Айнымалыны өз мәніне қарай өзгерту үшін қысқаша <b>біріктірілген операторлар</b> қолданылады: <code>total += 500</code> дегеніміз <code>total = total + 500</code> дегенмен бірдей. Дәл осылай <code>-=</code>, <code>*=</code>, <code>/=</code> да жұмыс істейді.",
            "Кодқа түсініктеме қалдыру үшін <code>#</code> таңбасы қолданылады: одан кейінгі жол Python үшін орындалмайды, тек оқушыға арналған жазба болып қалады. Мысалы: <code># бағасы теңгемен</code>."
        ],
        "theoryCodes": [
            "price_per_person = 1500\npeople = 4\ntotal = price_per_person * people\nprint(\"Жалпы сома:\", total, \"₸\")",
            "price = \"1500\"        # мәтін түрінде келді\nprice = int(price)    # санға айналдырамыз\n\ntotal = price\ntotal += 500           # total = total + 500\ntotal *= 2             # total = total * 2\n\nprint(\"Жалпы сома:\", total, \"₸\")"
        ],
        "examples": [
            {
                "intro": "Төменде 3 қонаққа арналған шай тарту бюджеті есептеледі. Кодты өзгертіп, \"Іске қосу\" батырмасын басып көріңіз.",
                "code": "guests = 3\ncups_per_guest = 2\nprice_per_cup = 100\n\ntotal_cups = guests * cups_per_guest\ntotal_price = total_cups * price_per_cup\n\nprint(\"Кесе саны:\", total_cups)\nprint(\"Бағасы:\", total_price, \"₸\")"
            },
            {
                "intro": "Мұнда дүкенге саяхат бюджеті есептеледі: бірнеше тауардың бағасы қосылады.",
                "code": "bread = 250\nmilk = 450\nfruit = 800\n\ntotal = bread + milk + fruit\nprint(\"Барлығы:\", total, \"₸\")"
            },
            {
                "intro": "Мұнда автобус билетінің бағасы жеңілдікпен есептеледі.",
                "code": "ticket_price = 200\ndiscount_percent = 50\n\ndiscount = ticket_price * discount_percent / 100\nfinal_price = ticket_price - discount\nprint(\"Жеңілдік:\", discount, \"₸\")\nprint(\"Соңғы баға:\", final_price, \"₸\")"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Киіз үйге қонақтар шақырылды. Әр қонаққа белгілі мөлшерде бауырсақ пен шай дайындалады, бағасы белгілі.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>қонақтар саны — <b>8</b></li><li>әр қонаққа — <b>6 бауырсақ</b>, <b>1 кесе шай</b></li><li>1 бауырсақ — <b>50 ₸</b></li><li>1 кесе шай — <b>100 ₸</b></li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>барлық бауырсақ саны (<code>baursak</code>), барлық шай саны (<code>tea</code>), жалпы сома (<code>total_money</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>baursak</code> — <b>48</b>, <code>tea</code> — <b>8</b>, <code>total_money</code> — <b>3200</b> болуы керек.",
                "starter": "guests = 8\nbaursak = guests * ___\ntea = guests * ___\ntotal_money = baursak * ___ + tea * ___\nprint(\"baursak:\", baursak, \" tea:\", tea, \" total_money:\", total_money)",
                "clearVars": [
                    "guests",
                    "baursak",
                    "tea",
                    "total_money"
                ],
                "exprMap": {
                    "baursak": "baursak",
                    "tea": "tea",
                    "total_money": "total_money"
                },
                "expected": {
                    "baursak": 48,
                    "tea": 8,
                    "total_money": 3200
                },
                "fieldLabels": {
                    "baursak": "бауырсақ саны",
                    "tea": "шай саны",
                    "total_money": "жалпы сома"
                },
                "hint": "Әр қонаққа 6 бауырсақ → <code>baursak = guests * 6</code>. Әр қонаққа 1 кесе шай → <code>tea = guests * 1</code>. 1 бауырсақ 50 ₸, 1 кесе шай 100 ₸ → <code>total_money = baursak * 50 + tea * 100</code>.",
                "realLife": "Осы тәсілмен кез келген той, кеш немесе отбасылық іс-шараның бюджетін алдын ала есептеуге болады."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Таксимен жол жүргенде ақы қалай есептелетінін көрейік: алдымен қону ақысы алынады, содан кейін әр шақырымға қосымша ақы қосылады.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>қону ақысы — <b>400 ₸</b></li><li>1 шақырымға — <b>90 ₸</b></li><li>жүрілген қашықтық — <b>12 шақырым</b></li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>жол ақысы (<code>fare</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>fare</code> — <b>1480</b> болуы керек.",
                "starter": "start_fare = 400\nprice_per_km = 90\ndistance = 12\n\nfare = start_fare + ___ * ___\nprint(\"fare:\", fare)",
                "clearVars": [
                    "start_fare",
                    "price_per_km",
                    "distance",
                    "fare"
                ],
                "exprMap": {
                    "fare": "fare"
                },
                "expected": {
                    "fare": 1480
                },
                "fieldLabels": {
                    "fare": "жол ақысы"
                },
                "hint": "Қону ақысына жол ақысын қос: <code>fare = start_fare + price_per_km * distance</code>.",
                "realLife": "Дәл осылай такси немесе жеткізу қызметтерінің қосымшаларында жол ақысы автоматты түрде есептеледі."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Ноутбук сатып алу үшін ақша жинау керек. Керекті сома бірнеше айға бөлініп жиналады.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>ноутбук бағасы — <b>360 000 ₸</b></li><li>жинау мерзімі — <b>6 ай</b></li><li>қазірге дейін жиналған — <b>2 ай</b></li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>айлық жарна (<code>monthly</code>), қазірге дейін жиналған сома (<code>saved</code>), әлі керек сома (<code>remaining</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>monthly</code> — <b>60000</b>, <code>saved</code> — <b>120000</b>, <code>remaining</code> — <b>240000</b> болуы керек.",
                "starter": "price = 360000\nmonths = 6\nsaved_months = 2\n\nmonthly = price / ___\nsaved = monthly * ___\nremaining = price - ___\nprint(\"monthly:\", monthly, \" saved:\", saved, \" remaining:\", remaining)",
                "clearVars": [
                    "price",
                    "months",
                    "saved_months",
                    "monthly",
                    "saved",
                    "remaining"
                ],
                "exprMap": {
                    "monthly": "monthly",
                    "saved": "saved",
                    "remaining": "remaining"
                },
                "expected": {
                    "monthly": 60000,
                    "saved": 120000,
                    "remaining": 240000
                },
                "fieldLabels": {
                    "monthly": "айлық жарна",
                    "saved": "жиналған сома",
                    "remaining": "әлі керек сома"
                },
                "hint": "Айлық жарна: <code>monthly = price / months</code>. Жиналған сома: <code>saved = monthly * saved_months</code>. Қалғаны: <code>remaining = price - saved</code>.",
                "realLife": "Осылай кез келген мақсатқа (телефон, саяхат, оқу) ақша жинау жоспарын алдын ала құруға болады."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Ұзақ жолға шыққанда автокөліктің жанармай шығынын алдын ала есептеп алу керек.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>жүрілетін қашықтық — <b>250 шақырым</b></li><li>100 шақырымға жұмсалатын жанармай — <b>7 литр</b></li><li>1 литр жанармай бағасы — <b>520 ₸</b></li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>жұмсалатын жанармай мөлшері (<code>liters</code>), жалпы шығын (<code>total_cost</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>liters</code> — <b>17.5</b>, <code>total_cost</code> — <b>9100.0</b> болуы керек.",
                "starter": "distance = 250\nconsumption = 7\nprice_per_liter = 520\n\nliters = distance * consumption / ___\ntotal_cost = liters * ___\nprint(\"liters:\", liters, \" total_cost:\", total_cost)",
                "clearVars": [
                    "distance",
                    "consumption",
                    "price_per_liter",
                    "liters",
                    "total_cost"
                ],
                "exprMap": {
                    "liters": "liters",
                    "total_cost": "total_cost"
                },
                "expected": {
                    "liters": 17.5,
                    "total_cost": 9100
                },
                "fieldLabels": {
                    "liters": "жанармай мөлшері",
                    "total_cost": "жалпы шығын"
                },
                "hint": "100 шақырымға 7 литр жұмсалса, 250 шақырымға: <code>liters = distance * consumption / 100</code>. Ақша: <code>total_cost = liters * price_per_liter</code>.",
                "realLife": "Дәл осылай навигация қосымшалары жол алдында жанармай шығынын және бағасын болжайды."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Онлайн қосымша арқылы тамақ тапсырыс берілді, оған жеткізу ақысы қосылады және купон бойынша жеңілдік алынады.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>1 порция бағасы — <b>1200 ₸</b></li><li>тапсырыс саны — <b>3 порция</b></li><li>жеткізу ақысы — <b>500 ₸</b></li><li>купон жеңілдігі — <b>300 ₸</b></li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>тамақтың жалпы бағасы (<code>subtotal</code>), төленетін соңғы сома (<code>total</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>subtotal</code> — <b>3600</b>, <code>total</code> — <b>3800</b> болуы керек.",
                "starter": "item_price = 1200\nquantity = 3\ndelivery_fee = 500\ndiscount = 300\n\nsubtotal = item_price * ___\ntotal = subtotal + ___ - ___\nprint(\"subtotal:\", subtotal, \" total:\", total)",
                "clearVars": [
                    "item_price",
                    "quantity",
                    "delivery_fee",
                    "discount",
                    "subtotal",
                    "total"
                ],
                "exprMap": {
                    "subtotal": "subtotal",
                    "total": "total"
                },
                "expected": {
                    "subtotal": 3600,
                    "total": 3800
                },
                "fieldLabels": {
                    "subtotal": "тамақтың жалпы бағасы",
                    "total": "төленетін сома"
                },
                "hint": "Тамақтың бағасы: <code>subtotal = item_price * quantity</code>. Соңғы сома: <code>total = subtotal + delivery_fee - discount</code>.",
                "realLife": "Дәл осылай тамақ жеткізу қосымшалары (Wolt, Glovo, Choco) төлем сомасын экранда автоматты есептейді."
            }
        ]
    },
    {
        "id": 2,
        "title": "Базардағы сатып алу",
        "topic": "Тізімдер (list) және for циклі",
        "time": "18 мин",
        "heroSvg": "<img src=\"/images/mod2.jpg\" alt=\"Модуль 2\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod2.jpg\" alt=\"Модуль 2\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "<b>Тізім (list)</b> — бірнеше мәнді бір айнымалыда сақтауға мүмкіндік беретін құрылым. Тізім шаршы жақшамен жазылады: <code>prices = [3500, 250, 450]</code>. Әр элементке нөмірі (индексі) бойынша қол жеткізуге болады: <code>prices[0]</code> — бірінші элемент.",
            "Тізімнің барлық элементін бірінен соң бірін қарап шығу үшін <b><code>for</code> циклі</b> қолданылады: <code>for price in prices:</code> — цикл әр қадамда <code>price</code> айнымалысына тізімнің келесі мәнін береді.",
            "Циклде жинақтаушы (аккумулятор) қолдану жиі кездеседі: алдымен <code>total = 0</code> деп бастапқы мән қойылады, содан кейін циклдің әр қадамында оған жаңа мән қосылады: <code>total = total + price</code>.",
            "Python-да тізімнің барлық сандарының қосындысын табу үшін дайын <code>sum()</code> функциясы да бар: <code>sum(prices)</code> — циклсіз-ақ бірден нәтиже береді. Бірақ циклдің қалай жұмыс істейтінін түсіну маңызды.",
            "Бұл тәсіл — дүкен чегін есептеу, тізімдегі деректерді талдау сияқты көптеген практикалық есептердің негізі.",
            "Тізімнің соңғы элементтеріне жету үшін теріс индекстер де қолданылады: <code>prices[-1]</code> — тізімнің соңғы элементін қайтарады, <code>prices[-2]</code> — соңынан екінші элементті.",
            "Тізімге жаңа элемент қосу үшін <code>.append()</code> әдісі қолданылады: <code>items.append(\"май\")</code> — тізімнің соңына жаңа тауар атауын қосады.",
            "Тізімдегі элементтер санын білу үшін <code>len()</code> функциясы қолданылады: <code>len(prices)</code> — тізімдегі баға саны. Сонымен қатар ең үлкен және ең кіші мәнді табу үшін <code>max()</code> және <code>min()</code> функциялары бар: <code>max(prices)</code> — ең қымбат баға."
        ],
        "theoryCodes": [
            "scores = [70, 85, 90]\ntotal = 0\nfor s in scores:\n    total = total + s\nprint(\"Қосынды:\", total)",
            "items = [\"нан\", \"сүт\"]\nitems.append(\"жұмыртқа\")\n\nprint(\"Тауарлар:\", items)\nprint(\"Соңғы тауар:\", items[-1])\nprint(\"Барлығы:\", len(items), \"тауар\")"
        ],
        "examples": [
            {
                "intro": "Төменде тауарлар тізімі бойынша әр атау мен оның бағасы шығарылады.",
                "code": "items = [\"дәптер\", \"қалам\", \"сызғыш\"]\nprices = [200, 80, 60]\n\nfor i in range(len(items)):\n    print(items[i], \"-\", prices[i], \"₸\")"
            },
            {
                "intro": "Мұнда тізімдегі бағалардың орташа мәні есептеледі.",
                "code": "prices = [1200, 800, 450, 300]\n\ntotal = 0\nfor p in prices:\n    total = total + p\n\naverage = total / len(prices)\nprint(\"Орташа баға:\", average, \"₸\")"
            },
            {
                "intro": "Мұнда тізім элементтері нөмірленіп, ретімен шығарылады (enumerate() көмегімен).",
                "code": "fruits = [\"алма\", \"алмұрт\", \"банан\"]\n\nfor index, fruit in enumerate(fruits, start=1):\n    print(index, \"-\", fruit)"
            },
            {
                "intro": "Мұнда тек белгілі бір бағадан қымбат тауарлар ғана шығарылады (if шарты арқылы).",
                "code": "prices = [150, 500, 200, 1000, 300]\nprint(\"500 теңгеден қымбат бағалар:\")\nfor p in prices:\n    if p > 500:\n        print(p, \"₸\")"
            },
            {
                "intro": "Мұнда тізімдегі әр бағаға 10% жеңілдік жасалып, жаңа тізімге сақталады.",
                "code": "prices = [1000, 2000, 5000]\ndiscounted = []\n\nfor p in prices:\n    new_price = int(p - (p * 0.1))\n    discounted.append(new_price)\n\nprint(\"Жаңа бағалар:\", discounted)"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Базардан бірнеше тауар сатып алынды. Әр тауардың бағасы белгілі, қолда белгілі сома бар.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>тауарлар тізімі және олардың бағалары (<code>items</code>, <code>prices</code>)</li><li>қолдағы ақша — <b>10 000 ₸</b></li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>тауарлардың жалпы құны (<code>total</code>), қайтарым сомасы (<code>change</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>total</code> — <b>6200</b>, <code>change</code> — <b>3800</b> болуы керек.",
                "starter": "items = [\"ет\", \"нан\", \"сүт\", \"алма\", \"шай\"]\nprices = [3500, 250, 450, 800, 1200]\n\ntotal = 0\nfor price in prices:\n    total = total + ___\n\nmoney = 10000\nchange = ___ - ___\nprint(\"total:\", total, \" change:\", change)",
                "clearVars": [
                    "items",
                    "prices",
                    "total",
                    "money",
                    "change"
                ],
                "exprMap": {
                    "total": "total",
                    "change": "change"
                },
                "expected": {
                    "total": 6200,
                    "change": 3800
                },
                "fieldLabels": {
                    "total": "жалпы сома",
                    "change": "қайтарым"
                },
                "hint": "Циклдің әр қадамында <code>price</code> мәнін <code>total</code>-ға қос: <code>total = total + price</code>. Қайтарым — бар ақшадан жұмсалған соманы алып тастау: <code>change = money - total</code>.",
                "realLife": "Дәл осылай дүкендегі чекті және қайтарым ақшаны тексеруге болады.",
                "bonusTip": "Python-да мұны бір жолмен де жазуға болады: <code>total = sum(prices)</code>."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Достар бірнеше дүкеннен бір тауардың бағасын жазып алды. Енді сол бағалардың орташа мәнін табу керек.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>бағалар тізімі (<code>prices</code>) — 5 дүкеннен</li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>барлық бағаның қосындысы (<code>total</code>), орташа баға (<code>average</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>total</code> — <b>4100</b>, <code>average</code> — <b>820.0</b> болуы керек.",
                "starter": "prices = [1200, 950, 700, 400, 850]\n\ntotal = 0\nfor price in prices:\n    total = total + ___\n\naverage = total / ___\nprint(\"total:\", total, \" average:\", average)",
                "clearVars": [
                    "prices",
                    "total",
                    "average"
                ],
                "exprMap": {
                    "total": "total",
                    "average": "average"
                },
                "expected": {
                    "total": 4100,
                    "average": 820
                },
                "fieldLabels": {
                    "total": "жалпы сома",
                    "average": "орташа баға"
                },
                "hint": "Цикл әр бағаны <code>total</code>-ға қосады: <code>total = total + price</code>. Орташаны табу үшін қосындыны элемент санына бөл: <code>average = total / len(prices)</code>.",
                "realLife": "Дәл осылай әртүрлі дүкендердегі бағаларды салыстырып, орташа нарық бағасын білуге болады."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Бірнеше дүкеннен жиналған бағалар ішінен ең қымбат және ең арзан тауарды табу керек.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>бағалар тізімі (<code>prices</code>)</li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>ең жоғары баға (<code>highest</code>), ең төмен баға (<code>lowest</code>), олардың айырмасы (<code>diff</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>highest</code> — <b>1850</b>, <code>lowest</code> — <b>400</b>, <code>diff</code> — <b>1450</b> болуы керек.",
                "starter": "prices = [1200, 950, 700, 400, 1850]\n\nhighest = ___(prices)\nlowest = ___(prices)\ndiff = highest - lowest\nprint(\"highest:\", highest, \" lowest:\", lowest, \" diff:\", diff)",
                "clearVars": [
                    "prices",
                    "highest",
                    "lowest",
                    "diff"
                ],
                "exprMap": {
                    "highest": "highest",
                    "lowest": "lowest",
                    "diff": "diff"
                },
                "expected": {
                    "highest": 1850,
                    "lowest": 400,
                    "diff": 1450
                },
                "fieldLabels": {
                    "highest": "ең жоғары баға",
                    "lowest": "ең төмен баға",
                    "diff": "айырма"
                },
                "hint": "Ең үлкен мән үшін <code>max(prices)</code>, ең кіші мән үшін <code>min(prices)</code> функцияларын қолдан.",
                "realLife": "Дәл осылай баға салыстыру қосымшалары ең тиімді немесе ең қымбат ұсынысты автоматты табады."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Дүкен себетіне жаңа тауар қосылды. Жаңартылған себет бойынша жалпы сома мен тауар санын қайта есептеу керек.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>себеттегі тауарлар (<code>cart</code>) және олардың бағалары (<code>prices</code>)</li><li>жаңа тауар — «жұмыртқа», бағасы — <b>500 ₸</b></li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>тауарлар саны (<code>items_count</code>), жалпы сома (<code>total</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>items_count</code> — <b>3</b>, <code>total</code> — <b>1200</b> болуы керек.",
                "starter": "cart = [\"нан\", \"сүт\"]\nprices = [250, 450]\n\ncart.append(\"жұмыртқа\")\nprices.append(500)\n\ntotal = 0\nfor price in prices:\n    total = total + ___\n\nitems_count = len(___)\nprint(\"items_count:\", items_count, \" total:\", total)",
                "clearVars": [
                    "cart",
                    "prices",
                    "total",
                    "items_count"
                ],
                "exprMap": {
                    "items_count": "items_count",
                    "total": "total"
                },
                "expected": {
                    "items_count": 3,
                    "total": 1200
                },
                "fieldLabels": {
                    "items_count": "тауар саны",
                    "total": "жалпы сома"
                },
                "hint": "<code>cart.append(...)</code> және <code>prices.append(...)</code> тізімнің соңына жаңа элемент қосады. Тауар санын білу үшін: <code>len(cart)</code>.",
                "realLife": "Дәл осылай онлайн дүкендердің себетіне тауар қосқанда сома мен саны автоматты жаңарады."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Тапсырыстар тізімінен соңғы екі тапсырысты және жалпы тапсырыс санын білу керек.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>тапсырыстар тізімі (<code>items</code>)</li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>соңғы тапсырыс (<code>last_item</code>), одан алдыңғы тапсырыс (<code>second_last</code>), жалпы саны (<code>items_count</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>last_item</code> — <b>\"шай\"</b>, <code>second_last</code> — <b>\"алма\"</b>, <code>items_count</code> — <b>5</b> болуы керек.",
                "starter": "items = [\"ет\", \"нан\", \"сүт\", \"алма\", \"шай\"]\n\nlast_item = items[___]\nsecond_last = items[___]\nitems_count = len(items)\nprint(\"last_item:\", last_item, \" second_last:\", second_last, \" items_count:\", items_count)",
                "clearVars": [
                    "items",
                    "last_item",
                    "second_last",
                    "items_count"
                ],
                "exprMap": {
                    "last_item": "last_item",
                    "second_last": "second_last",
                    "items_count": "items_count"
                },
                "expected": {
                    "last_item": "шай",
                    "second_last": "алма",
                    "items_count": 5
                },
                "fieldLabels": {
                    "last_item": "соңғы тапсырыс",
                    "second_last": "алдыңғы тапсырыс",
                    "items_count": "жалпы саны"
                },
                "hint": "Теріс индекстер соңынан саналады: <code>items[-1]</code> — соңғы элемент, <code>items[-2]</code> — соңынан екінші элемент.",
                "realLife": "Дәл осылай қосымшалар тапсырыс тарихындағы соңғы әрекеттерді бірден көрсетеді."
            }
        ]
    },
    {
        "id": 3,
        "title": "Күн тәртібі",
        "topic": "Сөздіктер (dict)",
        "time": "18 мин",
        "heroSvg": "<img src=\"/images/mod3.png\" alt=\"Күн тәртібі\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod3.png\" alt=\"Күн тәртібі\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "<b>Сөздік (dict)</b> — деректерді \"кілт : мән\" (key : value) түрінде сақтайтын құрылым. Ол бұйра жақшамен жазылады: <code>schedule = {\"Сабақ\": 6, \"Ұйқы\": 8}</code>. Мұнда <code>\"Сабақ\"</code> — кілт, <code>6</code> — оның мәні.",
            "Мәнге қол жеткізу үшін кілт қолданылады: <code>schedule[\"Сабақ\"]</code> — 6 санын қайтарады. Жаңа жазба қосу да дәл солай: <code>schedule[\"Спорт\"] = 1</code> — сөздікке жаңа кілт-мән жұбы қосылады.",
            "Сөздіктің барлық мәндерін алу үшін <code>.values()</code> әдісі, барлық кілттерін алу үшін <code>.keys()</code> әдісі, ал кілт-мән жұптарын бірге алу үшін <code>.items()</code> қолданылады. Мысалы, <code>sum(schedule.values())</code> — барлық мәндердің қосындысын табады.",
            "Сөздіктер нақты өмірдегі кестелерге ұқсас: әр атаудың (кілттің) өз мәні бар. Бұл — күн тәртібі, баға тізімі, байланыс кітапшасы сияқты деректерді сақтаудың ыңғайлы тәсілі.",
            "Сөздікті циклмен де аралауға болады: <code>for key in schedule:</code> — әр кілтті бірінен соң бірін қарап шығады."
        ],
        "theoryCodes": [
            "expenses = {\"Тамақ\": 40000, \"Көлік\": 15000}\nexpenses[\"Байланыс\"] = 5000\ntotal = sum(expenses.values())\nprint(\"Жалпы:\", total, \"₸\")",
            "schedule = {\"Сабақ\": 6, \"Ұйқы\": 8}\nprint(\"Ұйқы уақыты:\", schedule[\"Ұйқы\"], \"сағат\")",
            "marks = {\"Математика\": 5, \"Қазақ тілі\": 4}\nmarks[\"Физика\"] = 5\nprint(marks)",
            "contacts = {\"Али\": \"87071234567\", \"Айгүл\": \"87019876543\"}\nprint(contacts.keys())\nprint(contacts.values())",
            "schedule = {\"Сабақ\": 6, \"Ұйқы\": 8}\nfor k, v in schedule.items():\n    print(k, \"-\", v)"
        ],
        "examples": [
            {
                "intro": "Төменде апталық бюджет сөздігіне жаңа санат қосылып, жалпы сома есептеледі.",
                "code": "budget = {\"Тамақ\": 25000, \"Көлік\": 8000, \"Ойын-сауық\": 5000}\nbudget[\"Кітап\"] = 3000\n\ntotal = sum(budget.values())\nprint(\"Санаттар саны:\", len(budget))\nprint(\"Жалпы сома:\", total, \"₸\")"
            },
            {
                "intro": "Мұнда баға тізімінен ең қымбат тауардың бағасын табу көрсетілген.",
                "code": "prices = {\"Нан\": 250, \"Сүт\": 450, \"Ет\": 3500, \"Шай\": 1200}\n\nmax_price = max(prices.values())\nprint(\"Ең жоғары баға:\", max_price, \"₸\")"
            },
            {
                "intro": "Мұнда сөздіктегі кілттерді цикл арқылы қарап шығу мысалы көрсетілген.",
                "code": "inventory = {\"Алма\": 10, \"Банан\": 5, \"Алмұрт\": 8}\n\nfor item in inventory:\n    print(\"Қоймада\", item, \"бар.\")"
            },
            {
                "intro": "Мұнда сөздіктегі әр пәннің бағаларын шығарып, орташа бағаны табу.",
                "code": "grades = {\"Математика\": 5, \"Физика\": 4, \"Информатика\": 5}\n\nfor subject, grade in grades.items():\n    print(subject, \"-\", grade)\n\navg = sum(grades.values()) / len(grades)\nprint(\"Орташа баға:\", avg)"
            },
            {
                "intro": "Мұнда сөздікте белгілі бір кілттің бар-жоғын тексеру көрсетілген.",
                "code": "menu = {\"Кофе\": 800, \"Шай\": 400}\n\nif \"Кофе\" in menu:\n    print(\"Кофе бағасы:\", menu[\"Кофе\"])\nelse:\n    print(\"Кофе жоқ\")"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Күнделікті әрекеттерге бөлінген уақыт кестесі берілген, оған жаңа әрекет қосу керек.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>күн тәртібі сөздігі (<code>schedule</code>) — әрекет мен оған бөлінген сағат</li><li>жаңа әрекет — «Кітап оқу», <b>1 сағат</b></li><li>тәулік — <b>24 сағат</b></li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>жаңартылған кесте, жалпы жоспарланған уақыт (<code>total</code>), бос уақыт (<code>free</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>schedule[\"Кітап оқу\"]</code> — <b>1</b>, <code>total</code> — <b>19</b>, <code>free</code> — <b>5</b> болуы керек.",
                "starter": "schedule = {\"Сабақ\": 6, \"Үй жұмысы\": 2, \"Домбыра\": 1,\n            \"Спорт\": 1, \"Ұйқы\": 8}\n\nschedule[\"___\"] = ___\ntotal = sum(schedule.___())\nfree = 24 - ___\nprint(\"total:\", total, \" free:\", free)",
                "clearVars": [
                    "schedule",
                    "total",
                    "free"
                ],
                "exprMap": {
                    "kitap": "schedule.get('Кітап оқу')",
                    "total": "total",
                    "free": "free"
                },
                "expected": {
                    "kitap": 1,
                    "total": 19,
                    "free": 5
                },
                "fieldLabels": {
                    "kitap": "\"Кітап оқу\" уақыты",
                    "total": "жалпы уақыт",
                    "free": "бос уақыт"
                },
                "hint": "Жаңа кілт қосу: <code>schedule[\"Кітап оқу\"] = 1</code>. Барлық мәндерді қосу үшін: <code>total = sum(schedule.values())</code>. Бос уақыт: <code>free = 24 - total</code>.",
                "realLife": "Осылай өзіңіздің күнделікті немесе апталық жеке кестеңізді жоспарлауға болады."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Мектептегі оқушының пәндер бойынша бағалары берілген. Орташа бағаны есептеу қажет.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>бағалар сөздігі (<code>grades</code>) — пән атауы мен бағасы</li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>барлық бағалардың қосындысы (<code>total</code>), пәндер саны (<code>count</code>) және орташа баға (<code>average</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>total</code> — <b>18</b>, <code>average</code> — <b>4.5</b> болуы керек.",
                "starter": "grades = {\"Математика\": 4, \"Қазақ тілі\": 5, \"Тарих\": 4, \"Ағылшын\": 5}\n\ntotal = sum(grades.___())\ncount = len(grades)\naverage = ___ / ___\nprint(\"total:\", total, \" average:\", average)",
                "clearVars": [
                    "grades",
                    "total",
                    "count",
                    "average"
                ],
                "exprMap": {
                    "total": "total",
                    "count": "count",
                    "average": "average"
                },
                "expected": {
                    "total": 18,
                    "count": 4,
                    "average": 4.5
                },
                "fieldLabels": {
                    "total": "барлық баға қосындысы",
                    "count": "пәндер саны",
                    "average": "орташа баға"
                },
                "hint": "Мәндерді қосу: <code>sum(grades.values())</code>. Орташа баға: <code>average = total / count</code>.",
                "realLife": "Электронды күнделіктер (мысалы, Kundelik.kz) оқушының орташа бағасын дәл осылай есептейді."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Мейрамханадағы тағамдардың баға тізімі берілген. Ең қымбат және ең арзан тағам бағасын анықтау керек.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>мәзір сөздігі (<code>menu</code>) — тағам атауы және оның бағасы</li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>ең қымбат баға (<code>max_price</code>), ең арзан баға (<code>min_price</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>max_price</code> — <b>4500</b>, <code>min_price</code> — <b>500</b> болуы керек.",
                "starter": "menu = {\"Палау\": 2500, \"Сорпа\": 1500, \"Кәуап\": 4500, \"Шай\": 500}\n\nmax_price = max(menu.___())\nmin_price = ___(menu.values())\nprint(\"Ең қымбат:\", max_price, \" Ең арзан:\", min_price)",
                "clearVars": [
                    "menu",
                    "max_price",
                    "min_price"
                ],
                "exprMap": {
                    "max_price": "max_price",
                    "min_price": "min_price"
                },
                "expected": {
                    "max_price": 4500,
                    "min_price": 500
                },
                "fieldLabels": {
                    "max_price": "ең жоғары баға",
                    "min_price": "ең төмен баға"
                },
                "hint": "Мәндер ішінен үлкенін табу: <code>max(menu.values())</code>. Кішісін табу үшін <code>min()</code> функциясын қолданыңыз.",
                "realLife": "Кез келген онлайн дүкен немесе мәзір қосымшалары бағаларды осылайша сүзеді (filter/sort)."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Байланыс кітапшасы берілген. Оған жаңа нөмір қосып, барлық контактілердің санын білу қажет.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>контактілер (<code>contacts</code>) — есім және телефон нөмірі</li><li>жаңа контакт — «Асан», нөмірі «87051112233»</li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>жаңа нөмірдің сөздікте болуы, барлық контактілер саны (<code>count</code>).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>contacts[\"Асан\"]</code> — <b>\"87051112233\"</b>, <code>count</code> — <b>4</b> болуы керек.",
                "starter": "contacts = {\"Айдос\": \"87771234567\", \"Мақсат\": \"87019876543\", \"Динара\": \"87071112233\"}\n\ncontacts[\"___\"] = \"___\"\ncount = ___(contacts)\nprint(\"Жаңа контакт:\", contacts.get(\"Асан\"), \" Барлық саны:\", count)",
                "clearVars": [
                    "contacts",
                    "count"
                ],
                "exprMap": {
                    "asan": "contacts.get('Асан')",
                    "count": "count"
                },
                "expected": {
                    "asan": "87051112233",
                    "count": 4
                },
                "fieldLabels": {
                    "asan": "Асанның нөмірі",
                    "count": "контактілер саны"
                },
                "hint": "Жаңа контакт қосу: <code>contacts[\"Асан\"] = \"87051112233\"</code>. Сөздіктің ұзындығын табу үшін <code>len(contacts)</code> қолданыңыз.",
                "realLife": "Смартфоныңыздағы телефон кітапшасы да дәл осындай кілт-мән құрылымында жұмыс істейді."
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Сөздіктегі бағаларды циклмен аралап, әрқайсысын 10% арттыру керек (мысалы, инфляцияға байланысты).</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>бағалар тізімі (<code>prices</code>)</li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p>жаңартылған бағалар сөздігі, мысалы, «Нан» үшін <b>220</b> болуы керек.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>prices[\"Нан\"]</code> — <b>220</b>, <code>prices[\"Сүт\"]</code> — <b>440</b> болуы керек.",
                "starter": "prices = {\"Нан\": 200, \"Сүт\": 400, \"Май\": 1000}\n\nfor item in prices:\n    prices[item] = int(prices[item] * ___)\n\nprint(\"Жаңа бағалар:\", prices)",
                "clearVars": [
                    "prices"
                ],
                "exprMap": {
                    "nan": "prices.get('Нан')",
                    "sut": "prices.get('Сүт')"
                },
                "expected": {
                    "nan": 220,
                    "sut": 440
                },
                "fieldLabels": {
                    "nan": "Нанның жаңа бағасы",
                    "sut": "Сүттің жаңа бағасы"
                },
                "hint": "Циклдегі әр элементтің жаңа мәні оның ескі мәнінің 1.1-ге көбейтілгеніне тең (<code>prices[item] * 1.1</code>).",
                "realLife": "Дүкендерде барлық тауарлардың бағасын жаппай өзгерту үшін бағдарламалар дәл осылай жұмыс істейді."
            }
        ]
    },
    {
        "id": 4,
        "title": "Ауа райына қарай шешім",
        "topic": "if / elif / else және функциялар",
        "time": "20 мин",
        "heroSvg": "<img src=\"/images/mod4.png\" alt=\"Ауа райына қарай шешім\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod4.png\" alt=\"Ауа райына қарай шешім\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "<b>Функция</b> — белгілі бір әрекетті орындайтын, қайта пайдалануға болатын код бөлігі. Ол <code>def</code> сөзімен басталады: <code>def choose_clothes(temp):</code> — мұнда <code>temp</code> функцияның параметрі (кіріс мәні).",
            "Функция нәтижені <code>return</code> операторы арқылы қайтарады. <code>return</code> орындалғаннан кейін функция дереу аяқталады. Функцияны шақыру үшін оның атын жазып, жақшаның ішіне мән береміз: <code>choose_clothes(10)</code>.",
            "<b>Шартты оператор</b> <code>if / elif / else</code> бағдарламаға деректерге қарай әртүрлі жол таңдауға мүмкіндік береді: <code>if</code> — бірінші шарт, <code>elif</code> — келесі шарттар (қаншама керек болса), <code>else</code> — қалғаны.",
            "Шарттар жоғарыдан төменге қарай тексеріледі: біреуі ақиқат (True) болса, сол тармақ орындалып, қалғандары өткізіп жіберіледі. Салыстыру үшін <code>&lt;</code>, <code>&gt;</code>, <code>==</code>, <code>&lt;=</code>, <code>&gt;=</code> қолданылады.",
            "Функция мен шартты операторды біріктіру — деректерге сүйеніп автоматты шешім қабылдайтын бағдарламалардың негізі: температураға қарай киім таңдау, балл бойынша баға қою және т.б."
        ],
        "theoryCodes": [
            "def sign(n):\n    if n > 0:\n        return \"оң\"\n    elif n < 0:\n        return \"теріс\"\n    else:\n        return \"нөл\"\n\nprint(sign(-5))"
        ],
        "examples": [
            {
                "intro": "Төменде санның оң, теріс немесе нөл екенін анықтайтын функция көрсетілген. Мәнді өзгертіп көріңіз.",
                "code": "def sign(n):\n    if n > 0:\n        return \"оң\"\n    elif n < 0:\n        return \"теріс\"\n    else:\n        return \"нөл\"\n\nprint(sign(-5))\nprint(sign(7))\nprint(sign(0))"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Ауа температурасына байланысты қандай киім кию керектігін анықтайтын ереже берілген.</p></div><div class=\"task-section\"><span class=\"task-section-label\">Берілгені</span><ul><li>температура 0-ден төмен болса — «Қалың киім»</li><li>белгілі бір шектен төмен болса — «Күртеше»</li><li>одан жоғары болса — «Жеңіл киім»</li></ul></div><div class=\"task-section\"><span class=\"task-section-label\">Табу керек</span><p><code>choose_clothes(temp)</code> функциясы: ол -10, 10 және 25 мәндері үшін дұрыс нәтиже қайтаруы керек.</p></div>",
                "valuesHtml": "Тексеру: <code>choose_clothes(-10)</code> == «Қалың киім», <code>choose_clothes(10)</code> == «Күртеше», <code>choose_clothes(25)</code> == «Жеңіл киім».",
                "starter": "def choose_clothes(temp):\n    if temp < 0:\n        return \"Қалың киім\"\n    elif temp < ___:\n        return \"Күртеше\"\n    else:\n        return \"___\"\n\nprint(choose_clothes(-10))\nprint(choose_clothes(10))\nprint(choose_clothes(25))",
                "clearVars": [
                    "choose_clothes"
                ],
                "exprMap": {
                    "a": "choose_clothes(-10)",
                    "b": "choose_clothes(10)",
                    "c": "choose_clothes(25)"
                },
                "expected": {
                    "a": "Қалың киім",
                    "b": "Күртеше",
                    "c": "Жеңіл киім"
                },
                "fieldLabels": {
                    "a": "choose_clothes(-10)",
                    "b": "choose_clothes(10)",
                    "c": "choose_clothes(25)"
                },
                "hint": "<code>elif</code> жолындағы санды 10 мен 25 аралығында таңда (мысалы, 15). <code>else</code> тармағында <code>\"Жеңіл киім\"</code> деп қайтар.",
                "realLife": "Бұл — деректерге сүйеніп автоматты шешім қабылдайтын бағдарламалардың негізі (мысалы, ауа райы қосымшалары)."
            }
        ]
    },
    {
        "id": 5,
        "title": "Қалдықтарды сұрыптау",
        "topic": "Циклдер, шарттар, пайыздық есептеу",
        "time": "18 мин",
        "heroSvg": "<img src=\"/images/mod5.png\" alt=\"Қалдықтарды сұрыптау\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod5.png\" alt=\"Қалдықтарды сұрыптау\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "<code>in</code> операторы бір мәннің тізімде бар-жоғын тексереді: <code>\"алма\" in [\"алма\", \"нан\"]</code> — <code>True</code> қайтарады. Бұл шартты оператормен бірге жиі қолданылады: <code>if item in list:</code>.",
            "Циклді шартпен біріктіру арқылы тізімнен белгілі бір шартқа сай элементтерді санауға болады: <code>for item in waste: if item in recyclable: count += 1</code>. Мұндағы <code>count += 1</code> — <code>count = count + 1</code> дегенмен бірдей, қысқаша жазылу түрі.",
            "<b>Пайызды</b> есептеу формуласы: <code>бөлігі / жалпысы * 100</code>. Мысалы, 10 заттың 7-і қайта өңделсе, пайызы — <code>7 / 10 * 100 = 70</code>.",
            "Тізімнің ұзындығын (элемент санын) табу үшін <code>len()</code> функциясы қолданылады: <code>len(waste)</code> — тізімдегі элементтер саны.",
            "Бұл тәсіл — статистикалық және экологиялық деректерді талдаудың негізгі әдісі: қаншасы белгілі бір санатқа жатады, оның үлесі қанша пайыз екенін табу."
        ],
        "theoryCodes": [
            "fruits = [\"алма\", \"банан\", \"алма\", \"алмұрт\"]\ncount = 0\nfor f in fruits:\n    if f == \"алма\":\n        count += 1\npercent = count / len(fruits) * 100\nprint(percent, \"%\")"
        ],
        "examples": [
            {
                "intro": "Қоқыс жәшігіндегі заттар санын анықтау (len функциясы):",
                "code": "waste = ['қағаз', 'пластик', 'шыны', 'алма қалдығы']\nprint('Жалпы заттар саны:', len(waste))"
            },
            {
                "intro": "Заттың қайта өңдеуге жарамдылығын тексеру (if шарты):",
                "code": "item = 'пластик'\nrecyclable = ['қағаз', 'пластик', 'шыны']\nif item in recyclable:\n    print(item, 'қайта өңдеуге жарамды!')\nelse:\n    print(item, 'жарамсыз.')"
            },
            {
                "intro": "Барлық пластик бөтелкелерді санау (for циклі):",
                "code": "items = ['қағаз', 'пластик', 'пластик', 'шыны', 'пластик']\nplastic_count = 0\nfor i in items:\n    if i == 'пластик':\n        plastic_count += 1\nprint('Пластик саны:', plastic_count)"
            },
            {
                "intro": "Қайта өңделетін қалдықтардың пайызын есептеу:",
                "code": "total_items = 10\nrecycled_items = 7\npercent = (recycled_items / total_items) * 100\nprint('Қайта өңдеу пайызы:', percent, '%')"
            },
            {
                "intro": "Қауіпті қалдықты (батарейка) іздеу:",
                "code": "bin = ['қағаз', 'батарейка', 'шыны']\nif 'батарейка' in bin:\n    print('НАЗАР АУДАРЫҢЫЗ: Қауіпті қалдық табылды!')"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Тізімдегі <b>\"қағаз\"</b> қалдықтарының санын табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>paper_count</code> — <b>3</b> болуы керек.",
                "starter": "waste = [\"қағаз\", \"пластик\", \"қағаз\", \"шыны\", \"қағаз\"]\npaper_count = 0\nfor w in waste:\n    if w == \"___\":\n        paper_count += 1\nprint(paper_count)",
                "clearVars": [
                    "paper_count"
                ],
                "exprMap": {
                    "res": "paper_count"
                },
                "expected": {
                    "res": 3
                },
                "fieldLabels": {
                    "res": "Қағаз саны"
                },
                "hint": "\"қағаз\" деп жазыңыз.",
                "realLife": "Макулатура жинау"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Қоқыстың неше пайызы қайта өңделетінін есептеңіз. Жалпы заттар: 20, өңделетіні: 15.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>percent</code> — <b>75.0</b> болуы керек.",
                "starter": "total = 20\nrecycled = 15\npercent = (recycled / ___) * 100\nprint(percent)",
                "clearVars": [
                    "percent"
                ],
                "exprMap": {
                    "res": "percent"
                },
                "expected": {
                    "res": 75
                },
                "fieldLabels": {
                    "res": "Пайыз"
                },
                "hint": "total айнымалысына бөліңіз.",
                "realLife": "Экологиялық есептеулер"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Жәшіктен тек шыны (glass) қалдықтарын жаңа тізімге жинаңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>glass_bin</code> — <b>[\"шыны\", \"шыны\"]</b> болуы керек.",
                "starter": "waste = [\"шыны\", \"пластик\", \"қағаз\", \"шыны\"]\nglass_bin = []\nfor w in waste:\n    if w == \"шыны\":\n        glass_bin.___(w)\nprint(glass_bin)",
                "clearVars": [
                    "glass_bin"
                ],
                "exprMap": {
                    "a": "glass_bin[0]",
                    "b": "glass_bin[1]"
                },
                "expected": {
                    "a": "шыны",
                    "b": "шыны"
                },
                "fieldLabels": {
                    "a": "1",
                    "b": "2"
                },
                "hint": "Тізімге қосу үшін append әдісін қолданыңыз.",
                "realLife": "Қалдықтарды сұрыптау процесі"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Егер тізімде \"пластик\" болса, <code>has_plastic</code> айнымалысын True етіңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>has_plastic</code> — <b>True</b> болуы керек.",
                "starter": "waste = [\"қағаз\", \"пластик\", \"шыны\"]\nhas_plastic = False\nif \"___\" in waste:\n    has_plastic = True\nprint(has_plastic)",
                "clearVars": [
                    "has_plastic"
                ],
                "exprMap": {
                    "res": "has_plastic"
                },
                "expected": {
                    "res": true
                },
                "fieldLabels": {
                    "res": "Бар ма?"
                },
                "hint": "\"пластик\" сөзін іздеңіз.",
                "realLife": "Автоматты сұрыптау датчиктері"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Қалдықтар салмақтары берілген. Барлығының жалпы салмағын табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>total_weight</code> — <b>12.5</b> болуы керек.",
                "starter": "weights = [2.5, 4.0, 1.5, 4.5]\ntotal_weight = 0\nfor w in weights:\n    total_weight += ___\nprint(total_weight)",
                "clearVars": [
                    "total_weight"
                ],
                "exprMap": {
                    "res": "total_weight"
                },
                "expected": {
                    "res": 12.5
                },
                "fieldLabels": {
                    "res": "Жалпы салмақ"
                },
                "hint": "w айнымалысын қосыңыз.",
                "realLife": "Қоқыс тасымалдаушы көліктің жүктемесін есептеу"
            }
        ]
    },
    {
        "id": 6,
        "title": "Айлық бюджет",
        "topic": "Функциялар (тереңдету)",
        "time": "18 мин",
        "heroSvg": "<img src=\"/images/mod6.png\" alt=\"Айлық бюджет\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod6.png\" alt=\"Айлық бюджет\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Функциялар бірнеше параметр қабылдай алады: <code>def savings(income, expenses):</code> — мұнда <code>income</code> және <code>expenses</code> екі бөлек параметр. Функцияны шақырғанда екі мән де беріледі: <code>savings(150000, expenses_list)</code>.",
            "Функция ішінде басқа функцияларды да қолдануға болады: <code>sum(expenses)</code> — шығындар тізімінің қосындысын табады, содан кейін нәтиже табыстан алынып тасталады.",
            "Функцияны бір рет анықтап алғаннан кейін, оны әртүрлі мәндермен қанша рет керек — сонша рет шақыруға болады. Бұл кодтың қайталануын болдырмайды: айлық есептеуді жылдық есептеу үшін жай ғана 12-ге көбейту жеткілікті.",
            "Функциядан қайтарылған нәтижені жаңа айнымалыға сақтап, келесі есептеулерде пайдалануға болады: <code>month = savings(...)</code>, содан кейін <code>year = month * 12</code>.",
            "Бұл тәсіл — жеке немесе отбасылық қаржыны жоспарлаудың, үнемдеуді болжаудың негізгі құралы."
        ],
        "theoryCodes": [
            "def profit(revenue, cost):\n    return revenue - cost\n\nmonthly = profit(500000, 350000)\nyearly = monthly * 12\nprint(\"Жылдық пайда:\", yearly)"
        ],
        "examples": [
            {
                "intro": "Шығындардың жалпы сомасын есептейтін функция:",
                "code": "def calc_total(expenses):\n    return sum(expenses)\n\nmy_expenses = [12000, 5000, 8000]\nprint('Жалпы шығын:', calc_total(my_expenses))"
            },
            {
                "intro": "Тауардың таза бағасына салық қосып есептеу:",
                "code": "def price_with_tax(price, tax_percent):\n    return price + (price * tax_percent / 100)\n\nresult = price_with_tax(10000, 12)\nprint('Салықпен бірге:', result, '₸')"
            },
            {
                "intro": "Табыстың шығыннан асатынын тексеру (True/False):",
                "code": "def is_budget_ok(income, expenses):\n    total_expenses = sum(expenses)\n    return income >= total_expenses\n\nprint('Бюджет жеткілікті ме?', is_budget_ok(150000, [50000, 30000]))"
            },
            {
                "intro": "Ай сайын қанша ақша жинауға болатынын табу:",
                "code": "def get_savings(income, rent, food):\n    return income - rent - food\n\nsaved = get_savings(200000, 70000, 50000)\nprint('Үнемделген сома:', saved)"
            },
            {
                "intro": "Айлық табысты жылдық табысқа айналдыру:",
                "code": "def yearly_income(monthly_salary):\n    return monthly_salary * 12\n\nprint('Жылдық табыс:', yearly_income(250000))"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Шығындардың жалпы сомасын қайтаратын <code>calc_total</code> функциясын толықтырыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>calc_total([5000, 3000])</code> — <b>8000</b> қайтаруы керек.",
                "starter": "def calc_total(expenses):\n    return ___(expenses)\n\nprint(calc_total([5000, 3000]))",
                "clearVars": [
                    "calc_total"
                ],
                "exprMap": {
                    "res": "calc_total([5000, 3000])"
                },
                "expected": {
                    "res": 8000
                },
                "fieldLabels": {
                    "res": "Қосынды"
                },
                "hint": "Тізімнің қосындысын табу үшін sum функциясын қолданыңыз.",
                "realLife": "Айлық шығындарды есептеу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Жалақыдан 10% зейнетақы жарнасын есептейтін функция жазыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>get_tax(150000)</code> — <b>15000.0</b> қайтаруы керек.",
                "starter": "def get_tax(salary):\n    return salary * ___\n\nprint(get_tax(150000))",
                "clearVars": [
                    "get_tax"
                ],
                "exprMap": {
                    "res": "get_tax(150000)"
                },
                "expected": {
                    "res": 15000
                },
                "fieldLabels": {
                    "res": "Салық"
                },
                "hint": "10% табу үшін 0.1-ге көбейтіңіз.",
                "realLife": "Зейнетақы мен салық есептеу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Жиналған ақшаңыз тауарды сатып алуға жететінін тексеретін функция жазыңыз (True/False).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>can_buy(20000, 25000)</code> — <b>True</b> қайтаруы керек.",
                "starter": "def can_buy(price, savings):\n    return savings ___ price\n\nprint(can_buy(20000, 25000))",
                "clearVars": [
                    "can_buy"
                ],
                "exprMap": {
                    "res": "can_buy(20000, 25000)"
                },
                "expected": {
                    "res": true
                },
                "fieldLabels": {
                    "res": "Жете ме?"
                },
                "hint": "Үлкен немесе тең белгісін (>=) қолданыңыз.",
                "realLife": "Сатып алу мүмкіндігін бағалау"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Бюджеттен азық-түлікке кеткен шығынды алып тастағандағы қалдықты табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>remaining(50000, 15000)</code> — <b>35000</b> қайтаруы керек.",
                "starter": "def remaining(budget, groceries):\n    return budget ___ groceries\n\nprint(remaining(50000, 15000))",
                "clearVars": [
                    "remaining"
                ],
                "exprMap": {
                    "res": "remaining(50000, 15000)"
                },
                "expected": {
                    "res": 35000
                },
                "fieldLabels": {
                    "res": "Қалдық"
                },
                "hint": "Азайту (-) белгісін қолданыңыз.",
                "realLife": "Қолда қалған ақшаны санау"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><span class=\"task-section-label\">Шарты</span><p>Ай сайын үнемделген сома бойынша 1 жылда (12 ай) қанша жиналатынын есептейтін функция жазыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>yearly_savings(10000)</code> — <b>120000</b> қайтаруы керек.",
                "starter": "def yearly_savings(monthly):\n    return monthly * ___\n\nprint(yearly_savings(10000))",
                "clearVars": [
                    "yearly_savings"
                ],
                "exprMap": {
                    "res": "yearly_savings(10000)"
                },
                "expected": {
                    "res": 120000
                },
                "fieldLabels": {
                    "res": "Жылдық қор"
                },
                "hint": "1 жылда 12 ай бар.",
                "realLife": "Депозит пен жинақ есебі"
            }
        ]
    },
    {
        "id": 7,
        "title": "Қонақтарды күту",
        "topic": "(Айнымалылар)",
        "time": "15 мин",
        "heroSvg": "<img src=\"/images/mod7.jpg\" alt=\"Қонақтарды күту\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod7.jpg\" alt=\"Қонақтар\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Python-да <b>айнымалылар (variables)</b> — деректерді сақтайтын ыдыстар немесе қорапшалар іспеттес. Мысалы, үйге келген қонақтар санын сақтау үшін айнымалы қолданамыз.",
            "Қазақ халқы өте қонақжай, сондықтан қонақтар санын дәл есептеу, оларға жетерліктей орын мен ас дайындау өте маңызды.",
            "Айнымалы атауларына қойылатын ережелер: олар әріптен немесе астын сызу ( _ ) белгісінен басталуы керек. Бос орын тастауға немесе саннан бастауға болмайды. Мысалы: <code>qonaqtar_sany = 15</code>.",
            "Айнымалының ішіндегі мәнді кез келген уақытта өзгертуге болады. Егер тағы 2 қонақ келсе, кодта былай жазамыз: <code>qonaqtar_sany = qonaqtar_sany + 2</code>.",
            "Дұрыс қойылған атаулар бағдарламаны оқуды жеңілдетеді. Сондықтан <code>x = 10</code> дегеннен гөрі, <code>qonaqtar = 10</code> деп жазған әлдеқайда түсінікті."
        ],
        "theoryCodes": [
            "guests = 5\nprint(guests)"
        ],
        "examples": [
            {
                "intro": "Қонақтар санын анықтау:",
                "code": "guests = 10\nprint('Қонақтар саны:', guests)"
            },
            {
                "intro": "Балалар санын қосу:",
                "code": "balalar = 3\nprint('Балалар саны:', balalar)"
            },
            {
                "intro": "Жаңа қонақтар келді (айнымалыны өзгерту):",
                "code": "guests = 10\nguests = guests + 5\nprint('Жаңа қонақтар саны:', guests)"
            },
            {
                "intro": "Қонақтардың бір бөлігі кетті:",
                "code": "guests = 15\nguests = guests - 2\nprint('Қалған қонақтар:', guests)"
            },
            {
                "intro": "Жалпы санды есептеу:",
                "code": "erler = 6\naielder = 8\ntotal = erler + aielder\nprint('Барлығы:', total)"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><p>Қонақтар санын 12-ге теңестіріп шығарыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>qonaqtar</code> — <b>12</b> болуы керек.",
                "starter": "qonaqtar = ___\nprint(qonaqtar)",
                "clearVars": [
                    "qonaqtar"
                ],
                "exprMap": {
                    "res": "qonaqtar"
                },
                "expected": {
                    "res": 12
                },
                "fieldLabels": {
                    "res": "Қонақтар"
                },
                "hint": "12 деп жазыңыз.",
                "realLife": "Қонақтарды санау"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Үлкен кісілер санын 4-ке теңестіріп шығарыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>ulken_kisi</code> — <b>4</b> болуы керек.",
                "starter": "ulken_kisi = ___\nprint(ulken_kisi)",
                "clearVars": [
                    "ulken_kisi"
                ],
                "exprMap": {
                    "res": "ulken_kisi"
                },
                "expected": {
                    "res": 4
                },
                "fieldLabels": {
                    "res": "Адам саны"
                },
                "hint": "4 деп жазыңыз.",
                "realLife": "Құрметті қонақтар"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Қонақтар саны 10 еді, тағы 5 адам қосылды. Айнымалыны жаңартыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>qonaq</code> — <b>15</b> болуы керек.",
                "starter": "qonaq = 10\nqonaq = qonaq + ___\nprint(qonaq)",
                "clearVars": [
                    "qonaq"
                ],
                "exprMap": {
                    "res": "qonaq"
                },
                "expected": {
                    "res": 15
                },
                "fieldLabels": {
                    "res": "Жалпы қонақ"
                },
                "hint": "5 санын қосыңыз.",
                "realLife": "Адам санының өзгеруі"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Ерлер мен әйелдер санын қосып, жалпы санды табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>total</code> — <b>14</b> болуы керек.",
                "starter": "erler = 6\naielder = 8\ntotal = erler + ___\nprint(total)",
                "clearVars": [
                    "total"
                ],
                "exprMap": {
                    "res": "total"
                },
                "expected": {
                    "res": 14
                },
                "fieldLabels": {
                    "res": "Барлығы"
                },
                "hint": "aielder айнымалысын қосыңыз.",
                "realLife": "Жалпы есеп"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Қонақтардың 3-еуі қайтып кетті. Қалған қонақтар санын табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>qonaq</code> — <b>7</b> болуы керек.",
                "starter": "qonaq = 10\nqonaq = qonaq - ___\nprint(qonaq)",
                "clearVars": [
                    "qonaq"
                ],
                "exprMap": {
                    "res": "qonaq"
                },
                "expected": {
                    "res": 7
                },
                "fieldLabels": {
                    "res": "Қалған қонақ"
                },
                "hint": "3 санын азайтыңыз.",
                "realLife": "Қонақтардың қайтуы"
            }
        ]
    },
    {
        "id": 8,
        "title": "Дастархан есебі",
        "topic": "(Математика)",
        "time": "20 мин",
        "heroSvg": "<img src=\"/images/mod8.jpg\" alt=\"Дастархан есебі\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod8.jpg\" alt=\"Дастархан\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Python-да математикалық амалдар кәдімгі калькулятордағыдай өте оңай орындалады: <code>+</code> қосу, <code>-</code> азайту, <code>*</code> көбейту, <code>/</code> бөлу.",
            "Қазақ дастарханы әрқашан мол болады. Бауырсақтарды адамдарға тең бөлу немесе соғымға алынған еттің жалпы құнын есептеу үшін осы амалдарды жиі қолданамыз.",
            "Математикадағыдай, мұнда да <b>амалдардың орындалу реті</b> бар. Көбейту мен бөлу қосу мен азайтудан бұрын орындалады. Егер реттілікті өзгерткіңіз келсе, жақшаларды <code>()</code> қолданыңыз.",
            "Мысалы: <code>total = (5000 + 3000) * 2</code>. Мұнда алдымен жақша ішіндегі сандар қосылып, сосын 2-ге көбейтіледі.",
            "Айта кетерлігі, Python-да <code>/</code> арқылы бөлгенде нәтиже әрқашан бөлшек сан (Float) болады. Мысалы, <code>10 / 2</code> нәтижесі <code>5.0</code> болады."
        ],
        "theoryCodes": [
            "baursaq = 50\nadam = 5\nprint(baursaq / adam)"
        ],
        "examples": [
            {
                "intro": "Дастархандағы бауырсақтарды бөлу:",
                "code": "print(100 / 10)"
            },
            {
                "intro": "Тарелкалардағы кәмпиттер саны:",
                "code": "print(10 * 3)"
            },
            {
                "intro": "Ет пен көгөніс құны:",
                "code": "print(15000 + 5000)"
            },
            {
                "intro": "Дүкендегі қайтарым (сдача):",
                "code": "print(20000 - 3000)"
            },
            {
                "intro": "Жақшаларды қолданып есептеу:",
                "code": "print((10 + 15) * 2)"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><p>20 бауырсақты 4 адамға бөліңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>result</code> — <b>5.0</b> болуы керек.",
                "starter": "result = 20 / ___\nprint(result)",
                "clearVars": [
                    "result"
                ],
                "exprMap": {
                    "res": "result"
                },
                "expected": {
                    "res": 5
                },
                "fieldLabels": {
                    "res": "Нәтиже"
                },
                "hint": "4 деп жазыңыз.",
                "realLife": "Ас бөлу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Келісі 3000 теңге тұратын 5 келі еттің құнын есептеңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>cost</code> — <b>15000</b> болуы керек.",
                "starter": "cost = 5 * ___\nprint(cost)",
                "clearVars": [
                    "cost"
                ],
                "exprMap": {
                    "res": "cost"
                },
                "expected": {
                    "res": 15000
                },
                "fieldLabels": {
                    "res": "Құны"
                },
                "hint": "3000-ға көбейтіңіз.",
                "realLife": "Базардағы сауда"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>10000 теңге беріп, 1500 теңгелік зат алдыңыз. Қайтарым қанша?</p></div>",
                "valuesHtml": "Нәтижесінде: <code>change</code> — <b>8500</b> болуы керек.",
                "starter": "change = 10000 - ___\nprint(change)",
                "clearVars": [
                    "change"
                ],
                "exprMap": {
                    "res": "change"
                },
                "expected": {
                    "res": 8500
                },
                "fieldLabels": {
                    "res": "Қайтарым"
                },
                "hint": "1500-ді азайтыңыз.",
                "realLife": "Ақша қайтарымы"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Дастарханда 5 түрлі жеміс бар, әрқайсысынан 2 келіден алдыңыз. Жалпы неше келі?</p></div>",
                "valuesHtml": "Нәтижесінде: <code>total_kg</code> — <b>10</b> болуы керек.",
                "starter": "total_kg = 5 * ___\nprint(total_kg)",
                "clearVars": [
                    "total_kg"
                ],
                "exprMap": {
                    "res": "total_kg"
                },
                "expected": {
                    "res": 10
                },
                "fieldLabels": {
                    "res": "Келі"
                },
                "hint": "2-ге көбейтіңіз.",
                "realLife": "Жеміс-жидек есебі"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Екі түрлі тәттінің бағасын (2000 және 3000) қосып, оны 2-ге бөліңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>average</code> — <b>2500.0</b> болуы керек.",
                "starter": "average = (2000 + 3000) / ___\nprint(average)",
                "clearVars": [
                    "average"
                ],
                "exprMap": {
                    "res": "average"
                },
                "expected": {
                    "res": 2500
                },
                "fieldLabels": {
                    "res": "Орташа"
                },
                "hint": "2-ге бөліңіз.",
                "realLife": "Орташа шығын"
            }
        ]
    },
    {
        "id": 9,
        "title": "Төрге шақыру",
        "topic": "(Мәтіндер)",
        "time": "15 мин",
        "heroSvg": "<img src=\"/images/mod9.jpg\" alt=\"Төрге шақыру\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod9.jpg\" alt=\"Төр\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Бағдарламалауда мәтіндер <b>String</b> деп аталады. Python-да мәтін екенін білдіру үшін сөздерді қос (<code>\" \"</code>) немесе жалаң (<code>' '</code>) тырнақшаның ішіне жазу қажет.",
            "Қазақ мәдениетінде сәлемдесу, бата беру, төрге шақыру секілді сөз өнерінің орны ерекше. Бағдарламада осы сөздерді айнымалыларға сақтап, экранға шығара аламыз.",
            "Екі мәтінді біріктіру үшін <code>+</code> белгісін қолданамыз. Бұл процесс <i>конкатенация</i> деп аталады. Мысалы: <code>'Қош ' + 'келдіңіз'</code> нәтижесі <code>'Қош келдіңіз'</code> болады.",
            "Мәтінді бірнеше рет қайталау үшін <code>*</code> белгісін қолдануға болады. Мысалы: <code>'Жаса! ' * 3</code> деген код экранға <code>'Жаса! Жаса! Жаса! '</code> деп шығарады.",
            "Егер мәтіннің ішінде тырнақша қолдану керек болса, сыртынан басқа түрдегі тырнақшамен қоршаңыз. Мысалы: <code>\"Абайдың 'Қара сөздері'\"</code>."
        ],
        "theoryCodes": [
            "text = 'Төрлетіңіз!'\nprint(text)"
        ],
        "examples": [
            {
                "intro": "Сәлемдесу мәтіні:",
                "code": "print('Қош келдіңіздер!')"
            },
            {
                "intro": "Мәтінді айнымалыға сақтау:",
                "code": "salem = 'Ассалаумағалейкум!'\nprint(salem)"
            },
            {
                "intro": "Екі мәтінді біріктіру:",
                "code": "print('Қош ' + 'келдіңіз')"
            },
            {
                "intro": "Мәтінді қайталау:",
                "code": "print('Жақсы! ' * 3)"
            },
            {
                "intro": "Көп жолды мәтін:",
                "code": "print('Төрлетіңіз,\\nқұрметті қонақ!')"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"Төрлетіңіз\" деген мәтінді айнымалыға сақтаңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>soz</code> — <b>\"Төрлетіңіз\"</b> болуы керек.",
                "starter": "soz = \"___\"\nprint(soz)",
                "clearVars": [
                    "soz"
                ],
                "exprMap": {
                    "res": "soz"
                },
                "expected": {
                    "res": "Төрлетіңіз"
                },
                "fieldLabels": {
                    "res": "Сөз"
                },
                "hint": "Төрлетіңіз деп жазыңыз.",
                "realLife": "Қонақ күту"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"Қош келдіңіз\" сөзін айнымалыға жазыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>greeting</code> — <b>\"Қош келдіңіз\"</b> болуы керек.",
                "starter": "greeting = \"___\"\nprint(greeting)",
                "clearVars": [
                    "greeting"
                ],
                "exprMap": {
                    "res": "greeting"
                },
                "expected": {
                    "res": "Қош келдіңіз"
                },
                "fieldLabels": {
                    "res": "Сөз"
                },
                "hint": "Қош келдіңіз деп жазыңыз.",
                "realLife": "Сәлемдесу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"Сәлем, \" және \"Ата\" сөздерін қосыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>full_text</code> — <b>\"Сәлем, Ата\"</b> болуы керек.",
                "starter": "full_text = \"Сәлем, \" + \"___\"\nprint(full_text)",
                "clearVars": [
                    "full_text"
                ],
                "exprMap": {
                    "res": "full_text"
                },
                "expected": {
                    "res": "Сәлем, Ата"
                },
                "fieldLabels": {
                    "res": "Мәтін"
                },
                "hint": "Ата сөзін жазыңыз.",
                "realLife": "Сөз құрастыру"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"Жақсы! \" сөзін 3 рет қайталап шығарыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>repeat_text</code> — <b>\"Жақсы! Жақсы! Жақсы! \"</b> болуы керек.",
                "starter": "repeat_text = \"Жақсы! \" * ___\nprint(repeat_text)",
                "clearVars": [
                    "repeat_text"
                ],
                "exprMap": {
                    "res": "repeat_text"
                },
                "expected": {
                    "res": "Жақсы! Жақсы! Жақсы! "
                },
                "fieldLabels": {
                    "res": "Қайталау"
                },
                "hint": "3 санына көбейтіңіз.",
                "realLife": "Қуаныш білдіру"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"Ас дәмді болсын\" деп экранға шығарыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>as_text</code> — <b>\"Ас дәмді болсын\"</b> болуы керек.",
                "starter": "as_text = \"___\"\nprint(as_text)",
                "clearVars": [
                    "as_text"
                ],
                "exprMap": {
                    "res": "as_text"
                },
                "expected": {
                    "res": "Ас дәмді болсын"
                },
                "fieldLabels": {
                    "res": "Бата"
                },
                "hint": "Ас дәмді болсын деп жазыңыз.",
                "realLife": "Ас қайыру"
            }
        ]
    },
    {
        "id": 10,
        "title": "Киіз үй атауы",
        "topic": "(String)",
        "time": "15 мин",
        "heroSvg": "<img src=\"/images/mod10.jpg\" alt=\"Киіз үй атауы\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/mod10.jpg\" alt=\"Киіз үй\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Мәтіндермен (String) жұмыс істеудің қосымша көптеген пайдалы әдістері бар. Соның бірі — <code>len()</code> функциясы. Ол мәтіннің қанша әріптен (таңбадан) тұратынын санайды.",
            "Сөздің әрбір әрпінің өз <b>индексі</b> (реттік нөмірі) болады. Python-да санау 1-ден емес, <b>0-ден</b> басталады. Сондықтан <code>word = 'Орда'</code> болса, <code>word[0]</code> бізге <code>'О'</code> әрпін береді.",
            "Мәтіндерді өзгертетін арнайы әдістер бар: <code>.upper()</code> барлық әріптерді БАС ӘРІП қылады, ал <code>.lower()</code> кіші әріпке айналдырады.",
            "Мәтін ішіндегі айнымалыларды оңай қосу үшін <b>f-string</b> өте ыңғайлы. Мәтіннің алдына <code>f</code> әрпін жазып, айнымалыны бұйра жақшаның <code>{}</code> ішіне саламыз: <code>f'Сәлем, {name}!'</code>.",
            "Сондай-ақ, мәтіннің ішінде белгілі бір сөздің бар-жоғын <code>in</code> кілттік сөзі арқылы тексеруге болады. Мысалы: <code>'Киіз' in 'Киіз үй'</code> коды <code>True</code> (Ақиқат) қайтарады."
        ],
        "theoryCodes": [
            "a = 'Киіз '\nb = 'үй'\nprint(a + b)"
        ],
        "examples": [
            {
                "intro": "Мәтіннің ұзындығын табу:",
                "code": "print('Киіз үй ұзындығы:', len('Киіз үй'))"
            },
            {
                "intro": "Барлық әріптерді бас әріпке айналдыру:",
                "code": "print('ақ орда'.upper())"
            },
            {
                "intro": "Мәтіннен белгілі бір әріпті алу:",
                "code": "word = 'Шаңырақ'\nprint('Бірінші әріп:', word[0])"
            },
            {
                "intro": "Мәтін ішінен сөзді іздеу:",
                "code": "print('Киіз' in 'Киіз үй')"
            },
            {
                "intro": "Мәтінді пішімдеу (f-string):",
                "code": "name = 'Абай'\nprint(f'{name} ауылы')"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"Шаңырақ\" сөзінің ұзындығын (әріптер санын) табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>uzindyq</code> — <b>7</b> болуы керек.",
                "starter": "word = \"Шаңырақ\"\nuzindyq = ___(word)\nprint(uzindyq)",
                "clearVars": [
                    "uzindyq"
                ],
                "exprMap": {
                    "res": "uzindyq"
                },
                "expected": {
                    "res": 7
                },
                "fieldLabels": {
                    "res": "Ұзындығы"
                },
                "hint": "len функциясын қолданыңыз.",
                "realLife": "Сөздің өлшемі"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"қазақ\" сөзін толығымен бас әріппен жазыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>big_word</code> — <b>\"ҚАЗАҚ\"</b> болуы керек.",
                "starter": "word = \"қазақ\"\nbig_word = word.___()\nprint(big_word)",
                "clearVars": [
                    "big_word"
                ],
                "exprMap": {
                    "res": "big_word"
                },
                "expected": {
                    "res": "ҚАЗАҚ"
                },
                "fieldLabels": {
                    "res": "Бас әріппен"
                },
                "hint": "upper әдісін қолданыңыз.",
                "realLife": "Атауларды ерекшелеу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"Отау\" сөзінің ең бірінші әрпін алыңыз (индекс 0).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>first_letter</code> — <b>\"О\"</b> болуы керек.",
                "starter": "word = \"Отау\"\nfirst_letter = word[___]\nprint(first_letter)",
                "clearVars": [
                    "first_letter"
                ],
                "exprMap": {
                    "res": "first_letter"
                },
                "expected": {
                    "res": "О"
                },
                "fieldLabels": {
                    "res": "Бірінші әріп"
                },
                "hint": "0 индексін жазыңыз.",
                "realLife": "Индекс арқылы іздеу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>\"Ақ Орда\" сөзінің ішінде \"Ақ\" сөзі бар ма екенін тексеріңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>is_in</code> — <b>True</b> болуы керек.",
                "starter": "text = \"Ақ Орда\"\nis_in = \"Ақ\" ___ text\nprint(is_in)",
                "clearVars": [
                    "is_in"
                ],
                "exprMap": {
                    "res": "is_in"
                },
                "expected": {
                    "res": true
                },
                "fieldLabels": {
                    "res": "Ішінде бар ма"
                },
                "hint": "in кілттік сөзін қолданыңыз.",
                "realLife": "Іздеу жүйесі"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>f-string арқылы айнымалыны мәтінге кірістіріңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>full_name</code> — <b>\"Алатау ауылы\"</b> болуы керек.",
                "starter": "name = \"Алатау\"\nfull_name = f\"{___} ауылы\"\nprint(full_name)",
                "clearVars": [
                    "full_name"
                ],
                "exprMap": {
                    "res": "full_name"
                },
                "expected": {
                    "res": "Алатау ауылы"
                },
                "fieldLabels": {
                    "res": "Толық атау"
                },
                "hint": "name айнымалысын жақша ішіне жазыңыз.",
                "realLife": "Автоматты хаттар құрастыру"
            }
        ]
    },
    {
        "id": 11,
        "title": "Шаңырақ көтеру",
        "topic": "(Boolean)",
        "time": "15 мин",
        "heroSvg": "<img src=\"/images/shanyrak.jpg\" alt=\"Шаңырақ көтеру\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/shanyrak.jpg\" alt=\"Шаңырақ көтеру\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Бағдарламалауда ақиқатты немесе жалғандықты білдіретін арнайы деректер типі бар. Ол <b>Boolean (Бульдік)</b> тип деп аталады. Оның тек екі ғана мәні болуы мүмкін: <code>True</code> (Ақиқат / Шын) немесе <code>False</code> (Жалған / Өтірік). Бұл ұғымдар компьютердің шешім қабылдауына көмектеседі.",
            "Қазақ дәстүрінде киіз үйді тігу — үлкен процесс. Шаңырақ көтеру үшін алдымен кереге керілуі керек, сосын уық шаншылады. Яғни, «Шаңырақ көтерілді ме?» деген сұраққа тек «Иә» (True) немесе «Жоқ» (False) деп қана жауап бере аламыз. Бұл — логиканың нақты өмірдегі көрінісі.",
            "Сонымен қатар, Python-да <b>салыстыру операторлары</b> бар. Олар екі мәнді бір-бірімен салыстырып, нәтижесінде әрқашан <code>True</code> немесе <code>False</code> қайтарады. Мысалы: <br/><ul><li><code>==</code> (тең бе?)</li><li><code>!=</code> (тең емес пе?)</li><li><code>&gt;</code> (үлкен бе?)</li><li><code>&lt;</code> (кіші ме?)</li><li><code>&gt;=</code> (үлкен немесе тең)</li><li><code>&lt;=</code> (кіші немесе тең)</li></ul> Мысалы, <code>5 &gt; 3</code> коды <code>True</code> береді, ал <code>10 == 5</code> коды <code>False</code> береді.",
            "Күрделі шешімдер қабылдау үшін <b>логикалық операторларды</b> қолданамыз: <ul><li><code>and</code> (ЖӘНЕ): Екі шарт та орындалуы керек. Мысалы, «кереге керілді ЖӘНЕ уық шаншылды» дегенде ғана шаңырақ көтеріледі.</li><li><code>or</code> (НЕМЕСЕ): Екі шарттың кем дегенде біреуі орындалса жеткілікті. Мысалы, «шайға сүт НЕМЕСЕ қаймақ қосу».</li><li><code>not</code> (ЕМЕС): Нәтижені керісінше айналдырады. <code>not True</code> дегеніміз <code>False</code> болады.</li></ul>",
            "Осы қарапайым логикалық құрылымдар — жасанды интеллекттің, ойындардың және барлық заманауи бағдарламалардың негізгі «миы» болып табылады. Оларсыз компьютер ешқандай таңдау жасай алмас еді."
        ],
        "theoryCodes": [
            "is_ready = True\nprint(is_ready)"
        ],
        "examples": [
            {
                "intro": "Айнымалыға логикалық мән беру (Boolean):",
                "code": "is_up = True\nprint('Шаңырақ көтерілді ме?', is_up)"
            },
            {
                "intro": "Салыстыру операторы (Үлкен бе?):",
                "code": "print('10 саны 5-тен үлкен бе?', 10 > 5)"
            },
            {
                "intro": "Логикалық AND (ЖӘНЕ) операторы:",
                "code": "kerege = True\nuyq = True\nready = kerege and uyq\nprint('Киіз үй дайын ба?', ready)"
            },
            {
                "intro": "Теңдікті тексеру (==):",
                "code": "guest_count = 15\nprint('Қонақтар 15 пе?', guest_count == 15)"
            },
            {
                "intro": "NOT (ЕМЕС) операторы мәнді теріске шығарады:",
                "code": "is_raining = False\nprint('Дала ашық па?', not is_raining)"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><p>Шаңырақ көтерілгенін растайтын <b>True</b> мәнін меншіктеңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>is_up</code> — <b>True</b> болуы керек.",
                "starter": "is_up = ___\nprint(is_up)",
                "clearVars": [
                    "is_up"
                ],
                "exprMap": {
                    "res": "is_up"
                },
                "expected": {
                    "res": true
                },
                "fieldLabels": {
                    "res": "Мән"
                },
                "hint": "True деп жазыңыз (бас әріппен).",
                "realLife": "Статусты анықтау"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>20 саны 10-нан үлкен екенін тексеру үшін тиісті белгіні қойыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>result</code> — <b>True</b> болуы керек.",
                "starter": "result = 20 ___ 10\nprint(result)",
                "clearVars": [
                    "result"
                ],
                "exprMap": {
                    "res": "result"
                },
                "expected": {
                    "res": true
                },
                "fieldLabels": {
                    "res": "Нәтиже"
                },
                "hint": "> белгісін қойыңыз.",
                "realLife": "Салыстыру"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Кереге де, уық та дайын. Осы екеуін біріктіру үшін <b>ЖӘНЕ (and)</b> операторын қолданыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>shanyraq_ready</code> — <b>True</b> болуы керек.",
                "starter": "kerege = True\nuyq = True\nshanyraq_ready = kerege ___ uyq\nprint(shanyraq_ready)",
                "clearVars": [
                    "shanyraq_ready"
                ],
                "exprMap": {
                    "res": "shanyraq_ready"
                },
                "expected": {
                    "res": true
                },
                "fieldLabels": {
                    "res": "Дайын ба?"
                },
                "hint": "and деп жазыңыз.",
                "realLife": "Қос шарт"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>5 саны 5-ке тең екенін тексеру үшін <b>теңдік</b> операторын жазыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>is_equal</code> — <b>True</b> болуы керек.",
                "starter": "is_equal = 5 ___ 5\nprint(is_equal)",
                "clearVars": [
                    "is_equal"
                ],
                "exprMap": {
                    "res": "is_equal"
                },
                "expected": {
                    "res": true
                },
                "fieldLabels": {
                    "res": "Тең бе?"
                },
                "hint": "== белгісін қолданыңыз.",
                "realLife": "Дәлдікті тексеру"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>False мәнін керісінше (True) айналдыру үшін <b>ЕМЕС (not)</b> операторын қолданыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>result</code> — <b>True</b> болуы керек.",
                "starter": "result = ___ False\nprint(result)",
                "clearVars": [
                    "result"
                ],
                "exprMap": {
                    "res": "result"
                },
                "expected": {
                    "res": true
                },
                "fieldLabels": {
                    "res": "Керісінше"
                },
                "hint": "not деп жазыңыз.",
                "realLife": "Теріске шығару"
            }
        ]
    },
    {
        "id": 12,
        "title": "Қымыз салмағы",
        "topic": "(Float)",
        "time": "15 мин",
        "heroSvg": "<img src=\"/images/qymyz.jpg\" alt=\"Қымыз салмағы\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/qymyz.jpg\" alt=\"Қымыз салмағы\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Python-да бүтін сандардан (Integer) бөлек, <b>бөлшек сандар (Float)</b> бар. Олар салмақ, көлем, баға сияқты дәлдікті талап ететін шамаларды өлшеу үшін қолданылады.",
            "Қазақ дәстүрінде қымызды сабаға немесе күбіге құяды, ал оны ішу үшін кесеге құямыз. Бір кесе қымыз 0.5 литр (жарты литр) болуы мүмкін. Міне, осы <code>0.5</code> — Float типіндегі сан.",
            "Есте сақтаңыз: бағдарламалауда бөлшек сандарды жазу үшін үтір емес, <b>нүкте (.)</b> қолданылады. Мысалы, <code>1,5</code> емес, <code>1.5</code> деп жазу керек. Егер үтір қойсаңыз, бағдарлама оны екі бөлек сан деп түсінеді.",
            "Float сандармен кез келген математикалық амалдарды жасауға болады. Дегенмен, кейде оларды бүтін санға айналдыру немесе дөңгелектеу қажет болады. Ол үшін <code>round()</code> немесе <code>int()</code> функцияларын қолданамыз."
        ],
        "theoryCodes": [
            "volume = 1.5\nprint(volume)"
        ],
        "examples": [
            {
                "intro": "Float айнымалысын құру:",
                "code": "volume = 1.5\nprint('Көлемі:', volume, 'литр')"
            },
            {
                "intro": "Бөлшек сандарды қосу:",
                "code": "print(1.5 + 2.3)"
            },
            {
                "intro": "Float пен бүтін санды көбейту:",
                "code": "kese_kolemi = 0.5\nprint('3 кесе қымыз:', kese_kolemi * 3)"
            },
            {
                "intro": "Бөлшек санды дөңгелектеу (round):",
                "code": "print('Дөңгелектеу:', round(3.7))"
            },
            {
                "intro": "Float-ты бүтін санға (int) айналдыру (бөлшек бөлігін алып тастау):",
                "code": "print(int(3.9))"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><p>1.5 литрді білдіретін бөлшек санды айнымалыға жазыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>volume</code> — <b>1.5</b> болуы керек.",
                "starter": "volume = ___\nprint(volume)",
                "clearVars": [
                    "volume"
                ],
                "exprMap": {
                    "res": "volume"
                },
                "expected": {
                    "res": 1.5
                },
                "fieldLabels": {
                    "res": "Литр"
                },
                "hint": "1.5 деп нүктемен жазыңыз.",
                "realLife": "Көлемді өлшеу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>2.5 және 1.5 сандарын қосыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>total</code> — <b>4.0</b> болуы керек.",
                "starter": "total = 2.5 + ___\nprint(total)",
                "clearVars": [
                    "total"
                ],
                "exprMap": {
                    "res": "total"
                },
                "expected": {
                    "res": 4
                },
                "fieldLabels": {
                    "res": "Жалпы"
                },
                "hint": "1.5-ті қосыңыз.",
                "realLife": "Сұйықтықтарды араластыру"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>3.14 санын <b>round()</b> функциясы арқылы дөңгелектеңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>rounded</code> — <b>3</b> болуы керек.",
                "starter": "rounded = ___(3.14)\nprint(rounded)",
                "clearVars": [
                    "rounded"
                ],
                "exprMap": {
                    "res": "rounded"
                },
                "expected": {
                    "res": 3
                },
                "fieldLabels": {
                    "res": "Дөңгелек"
                },
                "hint": "round деп жазыңыз.",
                "realLife": "Шамалап есептеу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>0.5 литрлік 4 кеседе барлығы қанша қымыз бар екенін есептеңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>result</code> — <b>2.0</b> болуы керек.",
                "starter": "result = 0.5 * ___\nprint(result)",
                "clearVars": [
                    "result"
                ],
                "exprMap": {
                    "res": "result"
                },
                "expected": {
                    "res": 2
                },
                "fieldLabels": {
                    "res": "Қорытынды"
                },
                "hint": "4-ке көбейтіңіз.",
                "realLife": "Мөлшерді көбейту"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>4.9 санын <b>int()</b> арқылы бүтін санға айналдырыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>integer</code> — <b>4</b> болуы керек.",
                "starter": "integer = ___(4.9)\nprint(integer)",
                "clearVars": [
                    "integer"
                ],
                "exprMap": {
                    "res": "integer"
                },
                "expected": {
                    "res": 4
                },
                "fieldLabels": {
                    "res": "Бүтін бөлік"
                },
                "hint": "int деп жазыңыз.",
                "realLife": "Бөлшекті алып тастау"
            }
        ]
    },
    {
        "id": 13,
        "title": "Уық санау",
        "topic": "(Modulo %)",
        "time": "20 мин",
        "heroSvg": "<img src=\"/images/uyq.jpg\" alt=\"Уық санау\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/uyq.jpg\" alt=\"Уық санау\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Python-да <b>Modulo</b> немесе қалдық табу операторы бар. Ол пайыз белгісімен (<code>%</code>) белгіленеді. Бұл оператор бір санды екінші санға бөлгендегі <b>қалдықты</b> қайтарады.",
            "Мысалы, киіз үйдің шаңырағына уықтар қадалады. Егер бізде 10 уық болса және оларды 3 адамға теңдей бөліп берсек, әрқайсысына 3 уықтан тиіп, 1 уық артылып қалады. Код тілінде бұл: <code>10 % 3 = 1</code>.",
            "Modulo операторының ең көп таралған қолданысы — <b>санның жұп немесе тақ екенін анықтау</b>. Егер санды 2-ге бөлгенде қалдық 0 болса (<code>x % 2 == 0</code>), онда ол сан ЖҰП. Егер қалдық 1 болса (<code>x % 2 == 1</code>), онда сан ТАҚ.",
            "Сонымен қатар, Modulo уақытты есептеуде (мысалы, минуттарды сағатқа айналдыруда: <code>130 % 60 = 10 минут</code> қалдық) немесе шеңбер бойымен қайталанатын циклдерде жиі қолданылады."
        ],
        "theoryCodes": [
            "print(10 % 3)"
        ],
        "examples": [
            {
                "intro": "Қалдықты табу:",
                "code": "print('10-ды 3-ке бөлгендегі қалдық:', 10 % 3)"
            },
            {
                "intro": "Жұп санды тексеру (қалдық 0):",
                "code": "print('8 жұп сан ба?', 8 % 2 == 0)"
            },
            {
                "intro": "Тақ санды тексеру (қалдық 1):",
                "code": "print('11 тақ сан ба?', 11 % 2 == 1)"
            },
            {
                "intro": "Уақыттан қалған минутты табу (сағаттан асқаны):",
                "code": "print('130 минутта қанша артық минут бар?', 130 % 60)"
            },
            {
                "intro": "Санның ең соңғы цифрын табу (10-ға бөлу):",
                "code": "print('1234 санының соңғы цифры:', 1234 % 10)"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><p>15-ті 4-ке бөлгендегі қалдықты табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>result</code> — <b>3</b> болуы керек.",
                "starter": "result = 15 % ___\nprint(result)",
                "clearVars": [
                    "result"
                ],
                "exprMap": {
                    "res": "result"
                },
                "expected": {
                    "res": 3
                },
                "fieldLabels": {
                    "res": "Қалдық"
                },
                "hint": "4 деп жазыңыз.",
                "realLife": "Бөліністен қалған қалдық"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>10 санының <b>жұп</b> екенін тексеру үшін 2-ге бөлгендегі қалдықты табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>remainder</code> — <b>0</b> болуы керек.",
                "starter": "remainder = 10 % ___\nprint(remainder)",
                "clearVars": [
                    "remainder"
                ],
                "exprMap": {
                    "res": "remainder"
                },
                "expected": {
                    "res": 0
                },
                "fieldLabels": {
                    "res": "Жұптық"
                },
                "hint": "2 деп жазыңыз.",
                "realLife": "Жұптық тексеру"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>13 санының <b>тақ</b> екенін тексеру үшін 2-ге бөліп, қалдықты көріңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>is_odd</code> — <b>1</b> болуы керек.",
                "starter": "is_odd = 13 % ___\nprint(is_odd)",
                "clearVars": [
                    "is_odd"
                ],
                "exprMap": {
                    "res": "is_odd"
                },
                "expected": {
                    "res": 1
                },
                "fieldLabels": {
                    "res": "Тақтық"
                },
                "hint": "2 деп жазыңыз.",
                "realLife": "Тақтық тексеру"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>100 минуттың ішінде 1 сағаттан (60 мин) кейін қанша минут қалғанын табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>mins_left</code> — <b>40</b> болуы керек.",
                "starter": "mins_left = 100 % ___\nprint(mins_left)",
                "clearVars": [
                    "mins_left"
                ],
                "exprMap": {
                    "res": "mins_left"
                },
                "expected": {
                    "res": 40
                },
                "fieldLabels": {
                    "res": "Қалған минут"
                },
                "hint": "60-қа бөліп қалдығын алыңыз.",
                "realLife": "Уақыт есебі"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>75 санының ең соңғы цифрын табу үшін оны 10-ға бөлгендегі қалдықты табыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>last_digit</code> — <b>5</b> болуы керек.",
                "starter": "last_digit = 75 % ___\nprint(last_digit)",
                "clearVars": [
                    "last_digit"
                ],
                "exprMap": {
                    "res": "last_digit"
                },
                "expected": {
                    "res": 5
                },
                "fieldLabels": {
                    "res": "Соңғы цифр"
                },
                "hint": "10 деп жазыңыз.",
                "realLife": "Цифрды бөліп алу"
            }
        ]
    },
    {
        "id": 14,
        "title": "Қазан көлемі",
        "topic": "(**)",
        "time": "20 мин",
        "heroSvg": "<img src=\"/images/qazan.jpg\" alt=\"Қазан көлемі\" style=\"width:100%; height:100%; object-fit:cover; border-radius: 8px 8px 0 0;\" />",
        "theory": [
            "<img src=\"/images/qazan.jpg\" alt=\"Қазан көлемі\" style=\"width:100%; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" />",
            "Python-да математикалық <b>дәрежеге шығару</b> үшін екі жұлдызша (<code>**</code>) операторы қолданылады. Басқа тілдердегідей `^` белгісі емес, дәл осы <code>**</code> белгісі.",
            "Мысалы, 2-нің 3 дәрежесін (2³) есептеу үшін <code>2 ** 3</code> деп жазамыз. Бұл 2 * 2 * 2 = 8 деген сөз.",
            "Қазақтың қазаны — үлкен көлемді ыдыс. Егер біз қазанның немесе басқа да көлемді заттардың ауданы мен көлемін есептегіміз келсе, формулаларда дәреже (квадрат, куб) жиі кездеседі. Текшенің (кубтың) көлемі V = a³ болса, Python-да ол <code>V = a ** 3</code> болып жазылады.",
            "Қызықты факт: квадрат түбірді (корень) табу үшін де осы операторды қолдануға болады! Санның 0.5 дәрежесі — оның квадрат түбіріне тең. Мысалы, <code>25 ** 0.5</code> коды бізге <code>5.0</code> қайтарады."
        ],
        "theoryCodes": [
            "print(2 ** 3)"
        ],
        "examples": [
            {
                "intro": "Квадратқа шығару:",
                "code": "print('3-тің квадраты:', 3 ** 2)"
            },
            {
                "intro": "Кубқа шығару:",
                "code": "print('2-нің кубы:', 2 ** 3)"
            },
            {
                "intro": "Үлкен дәрежелер:",
                "code": "print('10-ның 4 дәрежесі:', 10 ** 4)"
            },
            {
                "intro": "Текшенің (кубтың) көлемін табу (a = 5):",
                "code": "a = 5\nvolume = a ** 3\nprint('Көлемі:', volume)"
            },
            {
                "intro": "Квадрат түбір (корень) табу (0.5 дәреже):",
                "code": "print('16-ның түбірі:', 16 ** 0.5)"
            }
        ],
        "tasks": [
            {
                "conditionHtml": "<div class=\"task-section\"><p>4-тің квадратын (2 дәрежесін) есептеңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>result</code> — <b>16</b> болуы керек.",
                "starter": "result = 4 ** ___\nprint(result)",
                "clearVars": [
                    "result"
                ],
                "exprMap": {
                    "res": "result"
                },
                "expected": {
                    "res": 16
                },
                "fieldLabels": {
                    "res": "Квадрат"
                },
                "hint": "2 деп жазыңыз.",
                "realLife": "Аудан есептеу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>3-тің кубын (3 дәрежесін) есептеңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>result</code> — <b>27</b> болуы керек.",
                "starter": "result = 3 ** ___\nprint(result)",
                "clearVars": [
                    "result"
                ],
                "exprMap": {
                    "res": "result"
                },
                "expected": {
                    "res": 27
                },
                "fieldLabels": {
                    "res": "Куб"
                },
                "hint": "3 деп жазыңыз.",
                "realLife": "Көлем есептеу"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>Қабырғасы a = 6 болатын текшенің (кубтың) көлемін табыңыз (a³).</p></div>",
                "valuesHtml": "Нәтижесінде: <code>volume</code> — <b>216</b> болуы керек.",
                "starter": "a = 6\nvolume = a ** ___\nprint(volume)",
                "clearVars": [
                    "volume"
                ],
                "exprMap": {
                    "res": "volume"
                },
                "expected": {
                    "res": 216
                },
                "fieldLabels": {
                    "res": "Көлемі"
                },
                "hint": "3 деп жазыңыз.",
                "realLife": "Қазан/қорап көлемі"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>2-нің 5 дәрежесін есептеңіз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>power</code> — <b>32</b> болуы керек.",
                "starter": "power = 2 ** ___\nprint(power)",
                "clearVars": [
                    "power"
                ],
                "exprMap": {
                    "res": "power"
                },
                "expected": {
                    "res": 32
                },
                "fieldLabels": {
                    "res": "Дәреже"
                },
                "hint": "5 деп жазыңыз.",
                "realLife": "Екілік жүйе"
            },
            {
                "conditionHtml": "<div class=\"task-section\"><p>81 санының квадрат түбірін табу үшін оны <b>0.5</b> дәрежесіне шығарыңыз.</p></div>",
                "valuesHtml": "Нәтижесінде: <code>root</code> — <b>9.0</b> болуы керек.",
                "starter": "root = 81 ** ___\nprint(root)",
                "clearVars": [
                    "root"
                ],
                "exprMap": {
                    "res": "root"
                },
                "expected": {
                    "res": 9
                },
                "fieldLabels": {
                    "res": "Түбір"
                },
                "hint": "0.5 деп жазыңыз.",
                "realLife": "Квадрат түбір"
            }
        ]
    }
];
