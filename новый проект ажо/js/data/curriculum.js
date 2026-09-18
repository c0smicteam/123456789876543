/* Curriculum Data — A1 Level */
window.CURRICULUM = {
  A1: [
    { id:'a1-01', num:1, title:'Алфавит и произношение', desc:'ä ö ü ß, долгие/краткие гласные, особые сочетания', icon:'🔤',
      theory:`<h3>Немецкий алфавит</h3><p>В немецком 26 букв + 4 особых: <strong>Ä, Ö, Ü</strong> (умлауты) и <strong>ß</strong> (эсцет). Произношение отличается от английского.</p>
      <div class="example-block"><span class="example-de">Ä/ä</span> — как русское «э» (Mädchen — девочка)</div>
      <div class="example-block"><span class="example-de">Ö/ö</span> — округлите губы для «о», скажите «э» (schön — красивый)</div>
      <div class="example-block"><span class="example-de">Ü/ü</span> — округлите губы для «у», скажите «и» (über — над)</div>
      <div class="example-block"><span class="example-de">ß</span> — глухое «с» (Straße — улица)</div>
      <h3>Особые сочетания</h3>
      <table class="grammar-table"><thead><tr><th>Сочетание</th><th>Звук</th><th>Пример</th></tr></thead><tbody>
      <tr><td>ch</td><td>«х» мягкое/твёрдое</td><td>ich, Buch</td></tr>
      <tr><td>sch</td><td>«ш»</td><td>Schule</td></tr>
      <tr><td>sp/st</td><td>«шп/шт» в начале слова</td><td>spielen, Straße</td></tr>
      <tr><td>ei</td><td>«ай»</td><td>mein, nein</td></tr>
      <tr><td>ie</td><td>долгое «и»</td><td>die, spielen</td></tr>
      <tr><td>eu/äu</td><td>«ой»</td><td>neu, Häuser</td></tr>
      </tbody></table>`,
      exercises:[
        {type:'quiz',question:'Как произносится "ei" в немецком?',options:['ай','эй','ей','ий'],correct:0},
        {type:'quiz',question:'Что значит ß?',options:['Глухое "с"','Звонкое "з"','Буква "б"','Пауза'],correct:0},
        {type:'quiz',question:'Как читается "sch"?',options:['ш','сх','ск','сч'],correct:0},
        {type:'fill',sentence:'Str__e (улица)',answer:'aß',hint:'ß'},
        {type:'quiz',question:'Как читается "sp" в начале слова?',options:['шп','сп','зп','шб'],correct:0},
      ],
      words:[
        {de:'das Mädchen',ru:'девочка',article:'das'},
        {de:'schön',ru:'красивый'},
        {de:'die Straße',ru:'улица',article:'die'},
        {de:'spielen',ru:'играть'},
        {de:'die Schule',ru:'школа',article:'die'},
      ]
    },
    { id:'a1-02', num:2, title:'Личные местоимения', desc:'ich, du, er, sie, es, wir, ihr, sie, Sie', icon:'👤',
      theory:`<h3>Личные местоимения</h3><p>Местоимения заменяют существительные. В немецком есть формальное «Вы» — <strong>Sie</strong> (с большой буквы).</p>
      <table class="grammar-table"><thead><tr><th>Немецкий</th><th>Русский</th><th>Пример</th></tr></thead><tbody>
      <tr><td><strong>ich</strong></td><td>я</td><td>Ich bin Anna.</td></tr>
      <tr><td><strong>du</strong></td><td>ты</td><td>Du bist nett.</td></tr>
      <tr><td><strong>er</strong></td><td>он</td><td>Er ist groß.</td></tr>
      <tr><td><strong>sie</strong></td><td>она</td><td>Sie ist schön.</td></tr>
      <tr><td><strong>es</strong></td><td>оно</td><td>Es ist gut.</td></tr>
      <tr><td><strong>wir</strong></td><td>мы</td><td>Wir sind hier.</td></tr>
      <tr><td><strong>ihr</strong></td><td>вы (неформ.)</td><td>Ihr seid toll!</td></tr>
      <tr><td><strong>sie</strong></td><td>они</td><td>Sie sind da.</td></tr>
      <tr><td><strong>Sie</strong></td><td>Вы (форм.)</td><td>Sie sind Herr Müller?</td></tr>
      </tbody></table>`,
      exercises:[
        {type:'quiz',question:'Как сказать «я» по-немецки?',options:['ich','du','er','wir'],correct:0},
        {type:'quiz',question:'Какое местоимение означает формальное «Вы»?',options:['Sie','ihr','du','sie'],correct:0},
        {type:'matching',pairs:[['ich','я'],['du','ты'],['wir','мы'],['sie','они']]},
        {type:'fill',sentence:'___ bin Student. (я)',answer:'Ich'},
        {type:'quiz',question:'«Он» по-немецки это...?',options:['er','es','sie','ihr'],correct:0},
      ],
      words:[
        {de:'ich',ru:'я'},{de:'du',ru:'ты'},{de:'er',ru:'он'},
        {de:'sie',ru:'она/они'},{de:'wir',ru:'мы'},{de:'ihr',ru:'вы (неформ.)'},{de:'Sie',ru:'Вы (формально)'},
      ]
    },
    { id:'a1-03', num:3, title:'Глаголы sein и haben', desc:'Два главных глагола: быть и иметь', icon:'⚡',
      theory:`<h3>sein — быть</h3>
      <table class="grammar-table"><thead><tr><th>Лицо</th><th>sein</th><th>Пример</th></tr></thead><tbody>
      <tr><td>ich</td><td><strong>bin</strong></td><td>Ich bin müde.</td></tr>
      <tr><td>du</td><td><strong>bist</strong></td><td>Du bist nett.</td></tr>
      <tr><td>er/sie/es</td><td><strong>ist</strong></td><td>Er ist Student.</td></tr>
      <tr><td>wir</td><td><strong>sind</strong></td><td>Wir sind Freunde.</td></tr>
      <tr><td>ihr</td><td><strong>seid</strong></td><td>Ihr seid toll!</td></tr>
      <tr><td>sie/Sie</td><td><strong>sind</strong></td><td>Sie sind hier.</td></tr>
      </tbody></table>
      <h3>haben — иметь</h3>
      <table class="grammar-table"><thead><tr><th>Лицо</th><th>haben</th><th>Пример</th></tr></thead><tbody>
      <tr><td>ich</td><td><strong>habe</strong></td><td>Ich habe Zeit.</td></tr>
      <tr><td>du</td><td><strong>hast</strong></td><td>Du hast Glück!</td></tr>
      <tr><td>er/sie/es</td><td><strong>hat</strong></td><td>Sie hat ein Buch.</td></tr>
      <tr><td>wir</td><td><strong>haben</strong></td><td>Wir haben Hunger.</td></tr>
      <tr><td>ihr</td><td><strong>habt</strong></td><td>Ihr habt recht.</td></tr>
      <tr><td>sie/Sie</td><td><strong>haben</strong></td><td>Sie haben Kinder.</td></tr>
      </tbody></table>`,
      exercises:[
        {type:'fill',sentence:'Ich ___ müde. (быть)',answer:'bin'},
        {type:'fill',sentence:'Du ___ ein Buch. (иметь)',answer:'hast'},
        {type:'quiz',question:'«Мы есть» — Wir ...?',options:['sind','seid','bin','ist'],correct:0},
        {type:'matching',pairs:[['ich bin','я есть'],['du hast','ты имеешь'],['er ist','он есть'],['wir haben','мы имеем']]},
        {type:'quiz',question:'Er ___ einen Hund.',options:['hat','hast','haben','habt'],correct:0},
      ],
      words:[
        {de:'sein',ru:'быть'},{de:'haben',ru:'иметь'},{de:'müde',ru:'уставший'},
        {de:'die Zeit',ru:'время',article:'die'},{de:'das Glück',ru:'счастье/удача',article:'das'},
        {de:'das Buch',ru:'книга',article:'das'},{de:'der Hunger',ru:'голод',article:'der'},
      ]
    },
    { id:'a1-04', num:4, title:'Präsens — настоящее время', desc:'Спряжение слабых и сильных глаголов', icon:'🔄',
      theory:`<h3>Спряжение глаголов в Präsens</h3><p>Берём основу глагола (убираем -en) и добавляем окончание.</p>
      <table class="grammar-table"><thead><tr><th>Лицо</th><th>Окончание</th><th>machen</th><th>arbeiten</th></tr></thead><tbody>
      <tr><td>ich</td><td>-e</td><td>mache</td><td>arbeite</td></tr>
      <tr><td>du</td><td>-st</td><td>machst</td><td>arbeitest</td></tr>
      <tr><td>er/sie/es</td><td>-t</td><td>macht</td><td>arbeitet</td></tr>
      <tr><td>wir</td><td>-en</td><td>machen</td><td>arbeiten</td></tr>
      <tr><td>ihr</td><td>-t</td><td>macht</td><td>arbeitet</td></tr>
      <tr><td>sie/Sie</td><td>-en</td><td>machen</td><td>arbeiten</td></tr>
      </tbody></table>
      <div class="example-block"><span class="example-de">⚠️ Сильные глаголы</span> меняют корневую гласную в du/er: fahren → du f<strong>ä</strong>hrst, lesen → er l<strong>ie</strong>st</div>`,
      exercises:[
        {type:'fill',sentence:'Ich ___ Deutsch. (lernen)',answer:'lerne'},
        {type:'fill',sentence:'Er ___ gern Bücher. (lesen)',answer:'liest'},
        {type:'quiz',question:'Du ___ nach Hause. (fahren)',options:['fährst','fahrst','fahrt','fahren'],correct:0},
        {type:'matching',pairs:[['ich lerne','я учу'],['du spielst','ты играешь'],['er arbeitet','он работает'],['wir machen','мы делаем']]},
        {type:'quiz',question:'Wir ___ Fußball. (spielen)',options:['spielen','spielt','spielst','spiele'],correct:0},
      ],
      words:[
        {de:'lernen',ru:'учить'},{de:'machen',ru:'делать'},{de:'arbeiten',ru:'работать'},
        {de:'lesen',ru:'читать'},{de:'fahren',ru:'ехать'},{de:'spielen',ru:'играть'},
      ]
    },
    { id:'a1-05', num:5, title:'Порядок слов', desc:'Verb-second, вопросы и отрицание', icon:'📐',
      theory:`<h3>Главное правило: глагол на 2-м месте!</h3>
      <div class="example-block"><span class="example-de">Ich lerne Deutsch.</span><br><span class="example-ru">Я учу немецкий.</span></div>
      <div class="example-block"><span class="example-de">Heute lerne ich Deutsch.</span><br><span class="example-ru">Сегодня я учу немецкий. (глагол всё ещё на 2-м месте!)</span></div>
      <h3>Вопросы</h3><p><strong>Да/Нет:</strong> глагол на 1-м месте. <strong>W-вопросы:</strong> вопросительное слово + глагол.</p>
      <div class="example-block"><span class="example-de">Lernst du Deutsch?</span> — Ты учишь немецкий?</div>
      <div class="example-block"><span class="example-de">Was lernst du?</span> — Что ты учишь?</div>`,
      exercises:[
        {type:'reorder',words:['Ich','Deutsch','lerne'],answer:'Ich lerne Deutsch'},
        {type:'reorder',words:['du','Lernst','Deutsch','?'],answer:'Lernst du Deutsch ?'},
        {type:'quiz',question:'Где стоит глагол в обычном предложении?',options:['На 2-м месте','На 1-м месте','В конце','Где угодно'],correct:0},
        {type:'quiz',question:'Где глагол в Ja/Nein-вопросе?',options:['На 1-м месте','На 2-м месте','В конце','Перед подлежащим'],correct:0},
        {type:'fill',sentence:'___ du Kaffee? (trinken — пить)',answer:'Trinkst'},
      ],
      words:[
        {de:'heute',ru:'сегодня'},{de:'was',ru:'что'},{de:'wo',ru:'где'},
        {de:'trinken',ru:'пить'},{de:'der Kaffee',ru:'кофе',article:'der'},
      ]
    },
    // Remaining A1 lessons (stubs)
    { id:'a1-06', num:6, title:'Артикли', desc:'der, die, das — определённые, неопределённые, отрицательные', icon:'📌',
      theory:`<h3>Определённые артикли (bestimmter Artikel)</h3><p>В немецком 3 рода. Каждый род имеет свой артикль:</p>
      <table class="grammar-table"><thead><tr><th>Род</th><th>Артикль</th><th>Пример</th></tr></thead><tbody>
      <tr><td>Мужской (Maskulinum)</td><td><strong>der</strong></td><td>der Mann — мужчина</td></tr>
      <tr><td>Женский (Femininum)</td><td><strong>die</strong></td><td>die Frau — женщина</td></tr>
      <tr><td>Средний (Neutrum)</td><td><strong>das</strong></td><td>das Kind — ребёнок</td></tr>
      <tr><td>Множественное число</td><td><strong>die</strong></td><td>die Kinder — дети</td></tr>
      </tbody></table>
      <h3>Неопределённые артикли (unbestimmter Artikel)</h3>
      <table class="grammar-table"><thead><tr><th>Род</th><th>Артикль</th><th>Пример</th></tr></thead><tbody>
      <tr><td>Мужской</td><td><strong>ein</strong></td><td>ein Mann — (один/какой-то) мужчина</td></tr>
      <tr><td>Женский</td><td><strong>eine</strong></td><td>eine Frau — (одна/какая-то) женщина</td></tr>
      <tr><td>Средний</td><td><strong>ein</strong></td><td>ein Kind — (одно/какое-то) дитя</td></tr>
      </tbody></table>
      <h3>Отрицательные артикли (Negationsartikel)</h3>
      <div class="example-block"><span class="example-de">kein/keine</span> = «не» + неопределённый артикль</div>
      <div class="example-block"><span class="example-de">Das ist kein Buch.</span> — Это не книга.</div>
      <div class="example-block"><span class="example-de">Das ist keine Lampe.</span> — Это не лампа.</div>`,
      exercises:[
        {type:'quiz',question:'Какой артикль у слова "Frau"?',options:['die','der','das','ein'],correct:0},
        {type:'quiz',question:'Какой неопределённый артикль у среднего рода?',options:['ein','eine','das','einer'],correct:0},
        {type:'fill',sentence:'___ Hund ist groß. (определённый артикль, муж. род)',answer:'Der'},
        {type:'matching',pairs:[['der','мужской род'],['die','женский род'],['das','средний род'],['ein','неопределённый (м/ср)']]},
        {type:'quiz',question:'Как отрицать: "Das ist ___ Auto"?',options:['kein','keine','nicht','keinen'],correct:0},
      ],
      words:[
        {de:'der Mann',ru:'мужчина',article:'der'},{de:'die Frau',ru:'женщина',article:'die'},
        {de:'das Kind',ru:'ребёнок',article:'das'},{de:'der Hund',ru:'собака',article:'der'},
        {de:'die Lampe',ru:'лампа',article:'die'},{de:'das Auto',ru:'автомобиль',article:'das'},
      ]
    },
    { id:'a1-07', num:7, title:'Род существительных', desc:'Как определить род немецкого существительного', icon:'🏷️',
      theory:`<h3>Как определить род?</h3><p>Род нужно учить с каждым словом! Но есть подсказки:</p>
      <h3>Мужской род (der)</h3>
      <table class="grammar-table"><thead><tr><th>Правило</th><th>Примеры</th></tr></thead><tbody>
      <tr><td>Дни недели, месяцы, времена года</td><td>der Montag, der Januar, der Sommer</td></tr>
      <tr><td>Окончания: -er, -ling, -ismus</td><td>der Lehrer, der Frühling, der Tourismus</td></tr>
      <tr><td>Мужские лица</td><td>der Vater, der Bruder</td></tr>
      </tbody></table>
      <h3>Женский род (die)</h3>
      <table class="grammar-table"><thead><tr><th>Правило</th><th>Примеры</th></tr></thead><tbody>
      <tr><td>Окончания: -ung, -heit, -keit, -tion, -ie</td><td>die Zeitung, die Freiheit, die Nation</td></tr>
      <tr><td>Женские лица</td><td>die Mutter, die Schwester</td></tr>
      <tr><td>Большинство на -e</td><td>die Lampe, die Schule</td></tr>
      </tbody></table>
      <h3>Средний род (das)</h3>
      <table class="grammar-table"><thead><tr><th>Правило</th><th>Примеры</th></tr></thead><tbody>
      <tr><td>Окончания: -chen, -lein (уменьшительные)</td><td>das Mädchen, das Büchlein</td></tr>
      <tr><td>Окончания: -ment, -um</td><td>das Dokument, das Museum</td></tr>
      <tr><td>Инфинитив как существительное</td><td>das Essen, das Lesen</td></tr>
      </tbody></table>`,
      exercises:[
        {type:'quiz',question:'Какой род у слова "Zeitung" (газета)?',options:['die (женский)','der (мужской)','das (средний)','die (множ.)'],correct:0},
        {type:'quiz',question:'Слова на -chen всегда...?',options:['среднего рода (das)','женского рода (die)','мужского рода (der)','без артикля'],correct:0},
        {type:'matching',pairs:[['der Lehrer','мужской'],['die Freiheit','женский'],['das Mädchen','средний'],['die Zeitung','женский']]},
        {type:'fill',sentence:'___ Montag ist ein Tag. (артикль дня недели)',answer:'Der'},
        {type:'quiz',question:'Какой род у слова "Dokument"?',options:['das','der','die','ein'],correct:0},
      ],
      words:[
        {de:'der Lehrer',ru:'учитель',article:'der'},{de:'die Zeitung',ru:'газета',article:'die'},
        {de:'das Mädchen',ru:'девочка',article:'das'},{de:'der Frühling',ru:'весна',article:'der'},
        {de:'die Freiheit',ru:'свобода',article:'die'},{de:'das Museum',ru:'музей',article:'das'},
      ]
    },
    { id:'a1-08', num:8, title:'Nominativ', desc:'Именительный падеж — кто? что?', icon:'🎯',
      theory:`<h3>Nominativ — именительный падеж</h3><p>Отвечает на вопрос <strong>Wer? Was?</strong> (Кто? Что?). Это падеж подлежащего.</p>
      <table class="grammar-table"><thead><tr><th>Род</th><th>Определённый</th><th>Неопределённый</th><th>Отрицательный</th></tr></thead><tbody>
      <tr><td>Мужской</td><td><strong>der</strong> Mann</td><td><strong>ein</strong> Mann</td><td><strong>kein</strong> Mann</td></tr>
      <tr><td>Женский</td><td><strong>die</strong> Frau</td><td><strong>eine</strong> Frau</td><td><strong>keine</strong> Frau</td></tr>
      <tr><td>Средний</td><td><strong>das</strong> Kind</td><td><strong>ein</strong> Kind</td><td><strong>kein</strong> Kind</td></tr>
      <tr><td>Множ.</td><td><strong>die</strong> Kinder</td><td>— Kinder</td><td><strong>keine</strong> Kinder</td></tr>
      </tbody></table>
      <div class="example-block"><span class="example-de">Der Lehrer ist nett.</span> — Учитель добрый.</div>
      <div class="example-block"><span class="example-de">Ein Kind spielt.</span> — Ребёнок играет.</div>
      <div class="example-block"><span class="example-de">Das ist keine Katze.</span> — Это не кошка.</div>`,
      exercises:[
        {type:'quiz',question:'Nominativ отвечает на вопрос...?',options:['Wer? Was?','Wen? Was?','Wem?','Wessen?'],correct:0},
        {type:'fill',sentence:'___ Katze ist klein. (определённый, жен. род)',answer:'Die'},
        {type:'quiz',question:'Ein ___ ist groß. (дом — Haus, ср. род)',options:['Haus','Hauses','Hause','Häuser'],correct:0},
        {type:'matching',pairs:[['der Tisch','муж., Nominativ'],['die Tür','жен., Nominativ'],['das Fenster','ср., Nominativ'],['die Bücher','множ., Nominativ']]},
      ],
      words:[
        {de:'der Tisch',ru:'стол',article:'der'},{de:'die Tür',ru:'дверь',article:'die'},
        {de:'das Fenster',ru:'окно',article:'das'},{de:'die Katze',ru:'кошка',article:'die'},
        {de:'das Haus',ru:'дом',article:'das'},{de:'nett',ru:'милый/добрый'},
      ]
    },
    { id:'a1-09', num:9, title:'Akkusativ', desc:'Винительный падеж — кого? что?', icon:'🎯',
      theory:`<h3>Akkusativ — винительный падеж</h3><p>Отвечает на <strong>Wen? Was?</strong> (Кого? Что?). Используется для прямого дополнения.</p>
      <table class="grammar-table"><thead><tr><th>Род</th><th>Nominativ</th><th>Akkusativ</th></tr></thead><tbody>
      <tr><td>Мужской</td><td>der / ein</td><td><strong>den / einen</strong></td></tr>
      <tr><td>Женский</td><td>die / eine</td><td>die / eine (без изменений)</td></tr>
      <tr><td>Средний</td><td>das / ein</td><td>das / ein (без изменений)</td></tr>
      <tr><td>Множ.</td><td>die / —</td><td>die / — (без изменений)</td></tr>
      </tbody></table>
      <div class="example-block">⚠️ Только <strong>мужской род</strong> меняется в Akkusativ!</div>
      <div class="example-block"><span class="example-de">Ich sehe <strong>den</strong> Mann.</span> — Я вижу мужчину.</div>
      <div class="example-block"><span class="example-de">Er kauft <strong>einen</strong> Tisch.</span> — Он покупает стол.</div>
      <div class="example-block"><span class="example-de">Ich habe <strong>keine</strong> Katze.</span> — У меня нет кошки.</div>`,
      exercises:[
        {type:'quiz',question:'Какой артикль меняется в Akkusativ?',options:['Только мужской (der→den)','Все три','Женский','Средний'],correct:0},
        {type:'fill',sentence:'Ich sehe ___ Hund. (определённый артикль, муж. род, Akk.)',answer:'den'},
        {type:'quiz',question:'Sie kauft ___ Buch. (ср. род)',options:['ein','einen','einem','einer'],correct:0},
        {type:'matching',pairs:[['den Mann','муж., Akk.'],['die Frau','жен., Akk.'],['das Kind','ср., Akk.'],['einen Tisch','муж., неопр., Akk.']]},
      ],
      words:[
        {de:'sehen',ru:'видеть'},{de:'kaufen',ru:'покупать'},{de:'brauchen',ru:'нуждаться'},
        {de:'der Apfel',ru:'яблоко',article:'der'},{de:'die Milch',ru:'молоко',article:'die'},
        {de:'das Wasser',ru:'вода',article:'das'},
      ]
    },
    { id:'a1-10', num:10, title:'Dativ', desc:'Дательный падеж — кому? чему?', icon:'🎯',
      theory:`<h3>Dativ — дательный падеж</h3><p>Отвечает на <strong>Wem?</strong> (Кому? Чему?). Используется для косвенного дополнения.</p>
      <table class="grammar-table"><thead><tr><th>Род</th><th>Nominativ</th><th>Dativ</th></tr></thead><tbody>
      <tr><td>Мужской</td><td>der / ein</td><td><strong>dem / einem</strong></td></tr>
      <tr><td>Женский</td><td>die / eine</td><td><strong>der / einer</strong></td></tr>
      <tr><td>Средний</td><td>das / ein</td><td><strong>dem / einem</strong></td></tr>
      <tr><td>Множ.</td><td>die</td><td><strong>den</strong> + -n</td></tr>
      </tbody></table>
      <div class="example-block"><span class="example-de">Ich gebe <strong>dem</strong> Mann ein Buch.</span> — Я даю мужчине книгу.</div>
      <div class="example-block"><span class="example-de">Sie hilft <strong>der</strong> Frau.</span> — Она помогает женщине.</div>
      <div class="example-block"><span class="example-de">Er dankt <strong>den</strong> Kindern.</span> — Он благодарит детей.</div>
      <h3>Глаголы с Dativ</h3>
      <div class="example-block"><span class="example-de">helfen, danken, gehören, gefallen, antworten</span></div>`,
      exercises:[
        {type:'quiz',question:'Dativ отвечает на вопрос...?',options:['Wem?','Wen?','Wer?','Was?'],correct:0},
        {type:'fill',sentence:'Ich helfe ___ Frau. (определённый артикль, жен. род, Dat.)',answer:'der'},
        {type:'quiz',question:'Er gibt ___ Kind ein Geschenk. (ср. род, Dat.)',options:['dem','den','der','das'],correct:0},
        {type:'matching',pairs:[['dem Mann','муж., Dat.'],['der Frau','жен., Dat.'],['dem Kind','ср., Dat.'],['den Kindern','множ., Dat.']]},
      ],
      words:[
        {de:'geben',ru:'давать'},{de:'helfen',ru:'помогать'},{de:'danken',ru:'благодарить'},
        {de:'gehören',ru:'принадлежать'},{de:'das Geschenk',ru:'подарок',article:'das'},
        {de:'antworten',ru:'отвечать'},
      ]
    },
    { id:'a1-11', num:11, title:'Модальные глаголы', desc:'können, müssen, wollen, dürfen, sollen, mögen', icon:'💪',
      theory:`<h3>Модальные глаголы (Modalverben)</h3><p>Модальные глаголы стоят на 2-м месте, а основной глагол — в конце в инфинитиве.</p>
      <table class="grammar-table"><thead><tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr></thead><tbody>
      <tr><td><strong>können</strong></td><td>мочь, уметь</td><td>Ich kann schwimmen.</td></tr>
      <tr><td><strong>müssen</strong></td><td>быть должным</td><td>Du musst lernen.</td></tr>
      <tr><td><strong>wollen</strong></td><td>хотеть</td><td>Er will spielen.</td></tr>
      <tr><td><strong>dürfen</strong></td><td>иметь разрешение</td><td>Darf ich fragen?</td></tr>
      <tr><td><strong>sollen</strong></td><td>быть должным (совет)</td><td>Du sollst mehr schlafen.</td></tr>
      <tr><td><strong>mögen</strong></td><td>любить, нравиться</td><td>Ich mag Kaffee.</td></tr>
      </tbody></table>
      <h3>Спряжение können</h3>
      <table class="grammar-table"><thead><tr><th>Лицо</th><th>können</th></tr></thead><tbody>
      <tr><td>ich</td><td>kann</td></tr><tr><td>du</td><td>kannst</td></tr>
      <tr><td>er/sie/es</td><td>kann</td></tr><tr><td>wir</td><td>können</td></tr>
      <tr><td>ihr</td><td>könnt</td></tr><tr><td>sie/Sie</td><td>können</td></tr>
      </tbody></table>
      <div class="example-block"><span class="example-de">Ich <strong>kann</strong> Deutsch <strong>sprechen</strong>.</span> — Я могу говорить по-немецки.</div>`,
      exercises:[
        {type:'quiz',question:'Где стоит основной глагол с модальным?',options:['В конце (инфинитив)','На 2-м месте','На 1-м месте','Перед модальным'],correct:0},
        {type:'fill',sentence:'Ich ___ schwimmen. (мочь)',answer:'kann'},
        {type:'quiz',question:'Du ___ mehr lernen. (должен)',options:['musst','kannst','willst','darfst'],correct:0},
        {type:'matching',pairs:[['können','мочь'],['müssen','быть должным'],['wollen','хотеть'],['dürfen','иметь разрешение']]},
      ],
      words:[
        {de:'können',ru:'мочь'},{de:'müssen',ru:'быть должным'},{de:'wollen',ru:'хотеть'},
        {de:'dürfen',ru:'иметь разрешение'},{de:'sollen',ru:'быть должным (совет)'},{de:'mögen',ru:'любить'},
      ]
    },
    { id:'a1-12', num:12, title:'Отрицание', desc:'nicht и kein — два способа отрицания', icon:'🚫',
      theory:`<h3>Отрицание в немецком</h3><p>Два главных слова для отрицания: <strong>nicht</strong> и <strong>kein</strong>.</p>
      <h3>kein / keine</h3><p>Используется вместо неопределённого артикля (ein→kein) или когда артикля нет.</p>
      <div class="example-block"><span class="example-de">Ich habe <strong>einen</strong> Hund → Ich habe <strong>keinen</strong> Hund.</span></div>
      <div class="example-block"><span class="example-de">Das ist <strong>kein</strong> Problem.</span> — Это не проблема.</div>
      <h3>nicht</h3><p>Используется для отрицания глаголов, прилагательных, наречий и всего с определённым артиклем.</p>
      <div class="example-block"><span class="example-de">Ich komme <strong>nicht</strong>.</span> — Я не приду.</div>
      <div class="example-block"><span class="example-de">Das ist <strong>nicht</strong> mein Buch.</span> — Это не моя книга.</div>
      <div class="example-block"><span class="example-de">Er ist <strong>nicht</strong> groß.</span> — Он не большой.</div>
      <h3>Правило позиции nicht</h3>
      <div class="example-block">nicht стоит <strong>перед</strong> тем, что отрицается, или <strong>в конце</strong> предложения.</div>`,
      exercises:[
        {type:'quiz',question:'Когда используем kein?',options:['Вместо ein / без артикля','Всегда','С определённым артиклем','С прилагательными'],correct:0},
        {type:'fill',sentence:'Ich habe ___ Auto. (отрицание, ср. род)',answer:'kein'},
        {type:'quiz',question:'Er kommt ___ . (не придёт)',options:['nicht','kein','keine','nichts'],correct:0},
        {type:'matching',pairs:[['kein Buch','нет книги'],['nicht groß','не большой'],['keine Zeit','нет времени'],['nicht hier','не здесь']]},
      ],
      words:[
        {de:'nicht',ru:'не'},{de:'kein',ru:'никакой/нет'},{de:'nie',ru:'никогда'},
        {de:'nichts',ru:'ничего'},{de:'niemand',ru:'никто'},{de:'das Problem',ru:'проблема',article:'das'},
      ]
    },
    { id:'a1-13', num:13, title:'Вопросительные слова', desc:'Wer, Was, Wo, Wann, Wie, Warum, Woher', icon:'❓',
      theory:`<h3>W-Fragen — вопросительные слова</h3>
      <table class="grammar-table"><thead><tr><th>Слово</th><th>Перевод</th><th>Пример</th></tr></thead><tbody>
      <tr><td><strong>Wer?</strong></td><td>Кто?</td><td>Wer ist das? — Кто это?</td></tr>
      <tr><td><strong>Was?</strong></td><td>Что?</td><td>Was machst du? — Что ты делаешь?</td></tr>
      <tr><td><strong>Wo?</strong></td><td>Где?</td><td>Wo wohnst du? — Где ты живёшь?</td></tr>
      <tr><td><strong>Woher?</strong></td><td>Откуда?</td><td>Woher kommst du? — Откуда ты?</td></tr>
      <tr><td><strong>Wohin?</strong></td><td>Куда?</td><td>Wohin gehst du? — Куда ты идёшь?</td></tr>
      <tr><td><strong>Wann?</strong></td><td>Когда?</td><td>Wann kommst du? — Когда ты придёшь?</td></tr>
      <tr><td><strong>Wie?</strong></td><td>Как?</td><td>Wie heißt du? — Как тебя зовут?</td></tr>
      <tr><td><strong>Warum?</strong></td><td>Почему?</td><td>Warum lernst du Deutsch?</td></tr>
      <tr><td><strong>Wie viel(e)?</strong></td><td>Сколько?</td><td>Wie viel kostet das?</td></tr>
      </tbody></table>
      <div class="example-block">Порядок слов: <strong>W-Wort + Verb + Subjekt + ...</strong></div>`,
      exercises:[
        {type:'matching',pairs:[['Wer?','Кто?'],['Was?','Что?'],['Wo?','Где?'],['Wann?','Когда?']]},
        {type:'fill',sentence:'___ heißt du? (как)',answer:'Wie'},
        {type:'quiz',question:'___ wohnst du? (где)',options:['Wo','Was','Wer','Wie'],correct:0},
        {type:'quiz',question:'___ kommst du? (откуда)',options:['Woher','Wohin','Wo','Wann'],correct:0},
      ],
      words:[
        {de:'wer',ru:'кто'},{de:'was',ru:'что'},{de:'wo',ru:'где'},{de:'woher',ru:'откуда'},
        {de:'wohin',ru:'куда'},{de:'wann',ru:'когда'},{de:'wie',ru:'как'},{de:'warum',ru:'почему'},
      ]
    },
    { id:'a1-14', num:14, title:'Притяжательные местоимения', desc:'mein, dein, sein, ihr, unser, euer', icon:'🤝',
      theory:`<h3>Притяжательные местоимения (Possessivpronomen)</h3>
      <table class="grammar-table"><thead><tr><th>Лицо</th><th>Местоимение</th><th>Пример</th></tr></thead><tbody>
      <tr><td>ich</td><td><strong>mein</strong></td><td>mein Buch — моя книга</td></tr>
      <tr><td>du</td><td><strong>dein</strong></td><td>dein Haus — твой дом</td></tr>
      <tr><td>er/es</td><td><strong>sein</strong></td><td>sein Auto — его машина</td></tr>
      <tr><td>sie</td><td><strong>ihr</strong></td><td>ihr Hund — её собака</td></tr>
      <tr><td>wir</td><td><strong>unser</strong></td><td>unser Lehrer — наш учитель</td></tr>
      <tr><td>ihr</td><td><strong>euer</strong></td><td>euer Zimmer — ваша комната</td></tr>
      <tr><td>sie/Sie</td><td><strong>ihr/Ihr</strong></td><td>ihr Garten — их сад</td></tr>
      </tbody></table>
      <h3>Окончания = как у ein/kein</h3>
      <div class="example-block"><span class="example-de">mein Bruder</span> (муж., Nom.) / <span class="example-de">mein<strong>e</strong> Schwester</span> (жен., Nom.)</div>
      <div class="example-block"><span class="example-de">mein<strong>en</strong> Bruder</span> (муж., Akk.) / <span class="example-de">mein<strong>em</strong> Bruder</span> (муж., Dat.)</div>`,
      exercises:[
        {type:'matching',pairs:[['mein','мой'],['dein','твой'],['sein','его'],['unser','наш']]},
        {type:'fill',sentence:'Das ist ___ Buch. (моя, жен. род)',answer:'meine'},
        {type:'quiz',question:'___ Mutter ist nett. (его)',options:['Seine','Sein','Seiner','Seinem'],correct:0},
        {type:'quiz',question:'Wo ist ___ Auto? (твоя, ср. род)',options:['dein','deine','deinem','deinen'],correct:0},
      ],
      words:[
        {de:'mein',ru:'мой'},{de:'dein',ru:'твой'},{de:'sein',ru:'его'},{de:'ihr',ru:'её'},
        {de:'unser',ru:'наш'},{de:'euer',ru:'ваш'},{de:'der Bruder',ru:'брат',article:'der'},
      ]
    },
    { id:'a1-15', num:15, title:'Отделяемые глаголы', desc:'aufstehen, anfangen, mitnehmen — топ-50', icon:'✂️',
      theory:`<h3>Trennbare Verben — отделяемые глаголы</h3><p>У отделяемых глаголов приставка отходит в конец предложения.</p>
      <div class="example-block"><span class="example-de"><strong>auf</strong>stehen → Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>.</span> — Я встаю в 7 часов.</div>
      <div class="example-block"><span class="example-de"><strong>an</strong>fangen → Der Film <strong>fängt</strong> um 8 <strong>an</strong>.</span> — Фильм начинается в 8.</div>
      <div class="example-block"><span class="example-de"><strong>mit</strong>nehmen → <strong>Nimmst</strong> du mich <strong>mit</strong>?</span> — Возьмёшь меня с собой?</div>
      <h3>Частые отделяемые приставки</h3>
      <table class="grammar-table"><thead><tr><th>Приставка</th><th>Значение</th><th>Примеры</th></tr></thead><tbody>
      <tr><td>auf-</td><td>открыть, встать</td><td>aufmachen, aufstehen</td></tr>
      <tr><td>an-</td><td>начать, включить</td><td>anfangen, anrufen</td></tr>
      <tr><td>ein-</td><td>войти, купить</td><td>einkaufen, einladen</td></tr>
      <tr><td>mit-</td><td>с собой</td><td>mitnehmen, mitkommen</td></tr>
      <tr><td>zu-</td><td>закрыть</td><td>zumachen, zuhören</td></tr>
      <tr><td>aus-</td><td>выключить, выйти</td><td>ausgehen, aussehen</td></tr>
      </tbody></table>`,
      exercises:[
        {type:'quiz',question:'Где стоит приставка отделяемого глагола?',options:['В конце предложения','На 2-м месте','Перед глаголом','Не отделяется'],correct:0},
        {type:'fill',sentence:'Ich ___ um 6 Uhr ___. (aufstehen, ich)',answer:'stehe|auf'},
        {type:'quiz',question:'Er ___ seine Freunde ___. (anrufen)',options:['ruft...an','anruft','rufen...an','anrufen'],correct:0},
        {type:'matching',pairs:[['aufstehen','вставать'],['anfangen','начинать'],['einkaufen','покупать'],['mitnehmen','брать с собой']]},
      ],
      words:[
        {de:'aufstehen',ru:'вставать'},{de:'anfangen',ru:'начинать'},{de:'einkaufen',ru:'покупать'},
        {de:'mitnehmen',ru:'брать с собой'},{de:'anrufen',ru:'звонить'},{de:'zumachen',ru:'закрывать'},
      ]
    },
    { id:'a1-16', num:16, title:'Предлоги', desc:'Akkusativ, Dativ и Wechselpräpositionen', icon:'📍',
      theory:`<h3>Предлоги с Akkusativ</h3>
      <div class="example-block"><span class="example-de">durch, für, gegen, ohne, um</span></div>
      <div class="example-block"><span class="example-de">Das ist <strong>für</strong> den Mann.</span> — Это для мужчины.</div>
      <h3>Предлоги с Dativ</h3>
      <div class="example-block"><span class="example-de">aus, bei, mit, nach, seit, von, zu</span></div>
      <div class="example-block"><span class="example-de">Ich komme <strong>aus</strong> der Schule.</span> — Я иду из школы.</div>
      <h3>Wechselpräpositionen (двойные предлоги)</h3><p>С Akk. (куда? — движение) или Dat. (где? — место):</p>
      <div class="example-block"><span class="example-de">an, auf, hinter, in, neben, über, unter, vor, zwischen</span></div>
      <div class="example-block"><span class="example-de">Ich gehe <strong>in die</strong> Schule.</span> (куда? → Akk.)</div>
      <div class="example-block"><span class="example-de">Ich bin <strong>in der</strong> Schule.</span> (где? → Dat.)</div>`,
      exercises:[
        {type:'quiz',question:'Какой падеж после "für"?',options:['Akkusativ','Dativ','Nominativ','Genitiv'],correct:0},
        {type:'quiz',question:'Какой падеж после "mit"?',options:['Dativ','Akkusativ','Nominativ','Genitiv'],correct:0},
        {type:'fill',sentence:'Ich gehe in ___ Schule. (куда? жен. род)',answer:'die'},
        {type:'matching',pairs:[['für','для (Akk.)'],['mit','с (Dat.)'],['aus','из (Dat.)'],['ohne','без (Akk.)']]},
      ],
      words:[
        {de:'für',ru:'для'},{de:'mit',ru:'с'},{de:'aus',ru:'из'},{de:'ohne',ru:'без'},
        {de:'nach',ru:'после/в (страну)'},{de:'in',ru:'в'},{de:'zu',ru:'к'},
      ]
    },
    { id:'a1-17', num:17, title:'Союзы и порядок слов', desc:'und, aber, oder, denn, weil, dass', icon:'🔗',
      theory:`<h3>Сочинительные союзы (Position 0)</h3><p>Не меняют порядок слов:</p>
      <table class="grammar-table"><thead><tr><th>Союз</th><th>Перевод</th><th>Пример</th></tr></thead><tbody>
      <tr><td><strong>und</strong></td><td>и</td><td>Ich lerne und er arbeitet.</td></tr>
      <tr><td><strong>aber</strong></td><td>но</td><td>Ich bin müde, aber ich lerne.</td></tr>
      <tr><td><strong>oder</strong></td><td>или</td><td>Kommst du oder bleibst du?</td></tr>
      <tr><td><strong>denn</strong></td><td>потому что</td><td>Ich lerne, denn ich will bestehen.</td></tr>
      </tbody></table>
      <h3>Подчинительные союзы (глагол → в конец!)</h3>
      <table class="grammar-table"><thead><tr><th>Союз</th><th>Перевод</th><th>Пример</th></tr></thead><tbody>
      <tr><td><strong>weil</strong></td><td>потому что</td><td>Ich lerne, weil ich Deutsch <strong>brauche</strong>.</td></tr>
      <tr><td><strong>dass</strong></td><td>что</td><td>Ich weiß, dass er nett <strong>ist</strong>.</td></tr>
      <tr><td><strong>wenn</strong></td><td>если/когда</td><td>Wenn ich Zeit <strong>habe</strong>, lese ich.</td></tr>
      <tr><td><strong>obwohl</strong></td><td>хотя</td><td>Er kommt, obwohl er müde <strong>ist</strong>.</td></tr>
      </tbody></table>`,
      exercises:[
        {type:'quiz',question:'После "weil" глагол стоит...?',options:['В конце','На 2-м месте','На 1-м месте','Где угодно'],correct:0},
        {type:'quiz',question:'Какой союз НЕ меняет порядок слов?',options:['und','weil','dass','wenn'],correct:0},
        {type:'fill',sentence:'Ich lerne, weil ich Deutsch ___. (brauchen)',answer:'brauche'},
        {type:'matching',pairs:[['und','и'],['aber','но'],['weil','потому что'],['dass','что']]},
      ],
      words:[
        {de:'und',ru:'и'},{de:'aber',ru:'но'},{de:'oder',ru:'или'},{de:'weil',ru:'потому что'},
        {de:'dass',ru:'что'},{de:'wenn',ru:'если/когда'},{de:'obwohl',ru:'хотя'},
      ]
    },
    { id:'a1-18', num:18, title:'Imperativ', desc:'Повелительное наклонение — команды и просьбы', icon:'📢',
      theory:`<h3>Imperativ — повелительное наклонение</h3>
      <table class="grammar-table"><thead><tr><th>Форма</th><th>Образование</th><th>Пример (machen)</th></tr></thead><tbody>
      <tr><td>du</td><td>основа глагола (без -st)</td><td><strong>Mach</strong> das!</td></tr>
      <tr><td>ihr</td><td>форма ihr без ihr</td><td><strong>Macht</strong> das!</td></tr>
      <tr><td>Sie</td><td>инфинитив + Sie</td><td><strong>Machen Sie</strong> das!</td></tr>
      </tbody></table>
      <h3>Особые случаи</h3>
      <div class="example-block"><span class="example-de">sein → <strong>Sei</strong> ruhig! / <strong>Seid</strong> ruhig! / <strong>Seien Sie</strong> ruhig!</span></div>
      <div class="example-block"><span class="example-de">haben → <strong>Hab</strong> Geduld!</span></div>
      <div class="example-block"><span class="example-de">lesen → <strong>Lies</strong> das Buch!</span> (сильные глаголы: e→ie/i)</div>
      <div class="example-block"><span class="example-de">fahren → <strong>Fahr</strong> langsam!</span> (без умлаута в du-форме)</div>`,
      exercises:[
        {type:'quiz',question:'Imperativ для du от "machen"?',options:['Mach!','Machst!','Mache!','Machen!'],correct:0},
        {type:'fill',sentence:'___ ruhig! (быть тихим, du-форма)',answer:'Sei'},
        {type:'quiz',question:'Imperativ для Sie от "kommen"?',options:['Kommen Sie!','Komm!','Kommt!','Kommst!'],correct:0},
        {type:'matching',pairs:[['Mach!','du-форма'],['Macht!','ihr-форма'],['Machen Sie!','Sie-форма'],['Lies!','du, lesen']]},
      ],
      words:[
        {de:'machen',ru:'делать'},{de:'kommen',ru:'приходить'},{de:'gehen',ru:'идти'},
        {de:'ruhig',ru:'тихий/спокойный'},{de:'langsam',ru:'медленно'},{de:'schnell',ru:'быстро'},
      ]
    },
    { id:'a1-19', num:19, title:'Числа, время, даты', desc:'Считаем, говорим время и даты', icon:'🔢',
      theory:`<h3>Числа (Zahlen)</h3>
      <table class="grammar-table"><thead><tr><th>Число</th><th>Немецкий</th><th>Число</th><th>Немецкий</th></tr></thead><tbody>
      <tr><td>1</td><td>eins</td><td>11</td><td>elf</td></tr>
      <tr><td>2</td><td>zwei</td><td>12</td><td>zwölf</td></tr>
      <tr><td>3</td><td>drei</td><td>13</td><td>dreizehn</td></tr>
      <tr><td>4</td><td>vier</td><td>20</td><td>zwanzig</td></tr>
      <tr><td>5</td><td>fünf</td><td>21</td><td>ein<strong>und</strong>zwanzig</td></tr>
      <tr><td>10</td><td>zehn</td><td>100</td><td>(ein)hundert</td></tr>
      </tbody></table>
      <div class="example-block">⚠️ Числа от 21 до 99: <strong>единицы + und + десятки</strong> (25 = fünfundzwanzig)</div>
      <h3>Время (Uhrzeit)</h3>
      <div class="example-block"><span class="example-de">Wie spät ist es?</span> / <span class="example-de">Wie viel Uhr ist es?</span></div>
      <div class="example-block"><span class="example-de">Es ist drei Uhr.</span> — 3:00</div>
      <div class="example-block"><span class="example-de">Es ist halb vier.</span> — 3:30 (половина четвёртого)</div>
      <div class="example-block"><span class="example-de">Es ist Viertel vor fünf.</span> — 4:45</div>
      <h3>Даты</h3>
      <div class="example-block"><span class="example-de">Heute ist der erste Januar.</span> — Сегодня первое января.</div>
      <div class="example-block"><span class="example-de">Am zweiten März.</span> — Второго марта.</div>`,
      exercises:[
        {type:'quiz',question:'Как сказать 25 по-немецки?',options:['fünfundzwanzig','zwanzigfünf','fünfzwanzig','zwundfünf'],correct:0},
        {type:'fill',sentence:'Es ist ___ vier. (половина, 3:30)',answer:'halb'},
        {type:'quiz',question:'Wie spät ist es? 7:15',options:['Viertel nach sieben','Viertel vor sieben','halb sieben','sieben Uhr'],correct:0},
        {type:'matching',pairs:[['eins','1'],['zwölf','12'],['zwanzig','20'],['hundert','100']]},
      ],
      words:[
        {de:'die Uhr',ru:'час/часы',article:'die'},{de:'halb',ru:'половина'},{de:'Viertel',ru:'четверть'},
        {de:'vor',ru:'до'},{de:'nach',ru:'после'},{de:'heute',ru:'сегодня'},{de:'morgen',ru:'завтра'},
      ]
    },
    { id:'a1-20', num:20, title:'Perfekt', desc:'haben/sein + Partizip II — прошедшее время', icon:'⏮️',
      theory:`<h3>Perfekt — прошедшее время</h3><p>Самое частое прошедшее время в разговорной речи.</p>
      <div class="example-block">Формула: <strong>haben/sein (на 2-м месте) + Partizip II (в конце)</strong></div>
      <h3>Partizip II образование</h3>
      <table class="grammar-table"><thead><tr><th>Тип</th><th>Формула</th><th>Пример</th></tr></thead><tbody>
      <tr><td>Слабые глаголы</td><td>ge- + основа + -t</td><td>machen → <strong>ge</strong>mach<strong>t</strong></td></tr>
      <tr><td>Сильные глаголы</td><td>ge- + основа + -en</td><td>fahren → <strong>ge</strong>fahr<strong>en</strong></td></tr>
      <tr><td>На -ieren</td><td>основа + -t (без ge-)</td><td>studieren → studier<strong>t</strong></td></tr>
      <tr><td>Неотделяемые</td><td>без ge-</td><td>besuchen → besuch<strong>t</strong></td></tr>
      <tr><td>Отделяемые</td><td>приставка + ge + основа</td><td>aufmachen → <strong>aufge</strong>mach<strong>t</strong></td></tr>
      </tbody></table>
      <h3>haben или sein?</h3>
      <div class="example-block"><strong>sein</strong> используется с глаголами движения и изменения состояния:</div>
      <div class="example-block"><span class="example-de">Ich <strong>bin</strong> nach Berlin <strong>gefahren</strong>.</span> — Я ездил в Берлин.</div>
      <div class="example-block"><span class="example-de">Ich <strong>habe</strong> Deutsch <strong>gelernt</strong>.</span> — Я учил немецкий.</div>`,
      exercises:[
        {type:'quiz',question:'Partizip II от "machen"?',options:['gemacht','gemachen','gemakt','macht'],correct:0},
        {type:'fill',sentence:'Ich habe Deutsch ___. (lernen, Partizip II)',answer:'gelernt'},
        {type:'quiz',question:'Ich ___ nach Hause gefahren. (вспомогательный глагол)',options:['bin','habe','hat','ist'],correct:0},
        {type:'matching',pairs:[['gemacht','делал'],['gefahren','ехал'],['gelernt','учил'],['gekommen','пришёл']]},
      ],
      words:[
        {de:'gemacht',ru:'сделал (P.II)'},{de:'gelernt',ru:'учил (P.II)'},{de:'gefahren',ru:'ехал (P.II)'},
        {de:'gekommen',ru:'пришёл (P.II)'},{de:'gegessen',ru:'ел (P.II)'},{de:'geschrieben',ru:'писал (P.II)'},
      ]
    },
  ],
  A2: [
    { id:'a2-01', num:1, title:'Präteritum', desc:'Простое прошедшее время базовых глаголов', icon:'⏪', theory:'', exercises:[], words:[] },
    { id:'a2-02', num:2, title:'Genitiv', desc:'Родительный падеж — чей? чего?', icon:'🔑', theory:'', exercises:[], words:[] },
    { id:'a2-03', num:3, title:'Придаточные предложения', desc:'weil, dass, wenn, obwohl', icon:'🔀', theory:'', exercises:[], words:[] },
    { id:'a2-04', num:4, title:'Степени сравнения', desc:'Сравнительная и превосходная степень', icon:'📊', theory:'', exercises:[], words:[] },
    { id:'a2-05', num:5, title:'Указательные местоимения', desc:'jeder, mancher, dieser', icon:'👆', theory:'', exercises:[], words:[] },
    { id:'a2-06', num:6, title:'Reflexive глаголы', desc:'sich waschen, sich freuen...', icon:'🔄', theory:'', exercises:[], words:[] },
    { id:'a2-07', num:7, title:'Plusquamperfekt', desc:'Предпрошедшее время', icon:'⏮️', theory:'', exercises:[], words:[] },
    { id:'a2-08', num:8, title:'Косвенная речь', desc:'Что он сказал? Базовый уровень', icon:'💬', theory:'', exercises:[], words:[] },
  ]
};
