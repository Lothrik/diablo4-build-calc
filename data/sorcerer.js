let sorcererData = {};

sorcererData["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0
	},
	"Core": {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: -1195.229,
		y: 609.355
	},
	"Defensive": {
		connections: [ "Conjuration" ],
		requiredPoints: 6,
		x: 513.726,
		y: 1514.46
	},
	"Conjuration": {
		connections: [ "Mastery" ],
		requiredPoints: 11,
		x: -1199.059,
		y: 2442.965
	},
	"Mastery": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 505.046,
		y: 3340.265
	},
	"Ultimate": {
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1203.599,
		y: 4249.025
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -7.567,
		y: 4869.41
	},
};

sorcererData["Basic"] = {
	"Frost Bolt": {
		connections: [ "Basic", "Enhanced Frost Bolt" ],
		description: `Lucky Hit Chance: {#}%
Throw a bolt of frost at an enemy, dealing {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage and Chilling them for 15%.

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.

— Enchantment Effect —
Direct damage from Skills applies up to {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% Chill.`,
		nameLocalized: {
			"deDE": "Frostblitz",
			"esES": "Descarga de escarcha",
			"esMX": "Descarga Gélida",
			"frFR": "Éclair de givre",
			"itIT": "Dardo di Gelo",
			"jaJP": "フロスト・ボルト",
			"koKR": "서리 화살",
			"plPL": "Lodowy Pocisk",
			"ptBR": "Seta de Gelo",
			"ruRU": "Ледяная стрела",
			"zhCN": "冰霜弹"
},
		descriptionLocalized: {
			"deDE": "Glückstrefferchance: {#}%\nSchleudert einen Frostblitz auf einen Gegner, der {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% Schaden verursacht und ihn für 15% unterkühlt.\n\nTags: Grundlegend, Frost, Unterkühlen, Schaden, Kälte, Kontrollverlust.\n\n— Enchantment Effect —\nDirekter Schaden von Fertigkeiten verursacht bis zu {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% Unterkühlung.",
			"esES": "Probabilidad de golpe de suerte: {#}%\nLanzas a un enemigo una descarga de escarcha que inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de daño y lo hiela un 15%.\n\nTags: Básica, Escarcha, Helada, Daño, Frío, Control de masas.\n\n— Enchantment Effect —\nEl daño directo de las habilidades aplica hasta un {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de helada.",
			"esMX": "Probabilidad de golpe afortunado: {#}%\nLanzas una descarga gélida a un enemigo, lo que le inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de daño y lo hiela un 15%.\n\nTags: Básico, Congelar, Helar, Daño, Frío, Control de multitudes.\n\n— Enchantment Effect —\nEl daño directo de las habilidades aplica hasta un {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de helamiento.",
			"frFR": "Chances de coup de chance: {#}%\nVous lancez un éclair de givre sur une cible, ce qui lui inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% points de dégâts et la glace à hauteur de 15%.\n\nTags: De base, Givre, Glace, Dégâts, Froid, Perte de contrôle.\n\n— Enchantment Effect —\nLes dégâts directs que vous infligez avec des compétences appliquent jusqu'à {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% d'effets glaçants.",
			"itIT": "Probabilità di colpo fortunato: {#}%\nLanci un dardo di gelo contro un nemico, infliggendo {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% danni e raggelandolo del 15%.\n\nTags: Base, Gelo, Raggelamento, Danni, Freddo, Effetti debilitanti.\n\n— Enchantment Effect —\nI danni diretti delle abilità infliggono fino al {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% di raggelamento.",
			"jaJP": "幸運の一撃発生率: {#}%\n敵1体に氷の矢を放ち、{35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%のダメージと15%の冷気効果を与える。\n\nTags: 基本, 寒気, 冷気, ダメージ, 操作障害効果.\n\n— Enchantment Effect —\nスキルによる直接ダメージを与えると、最大{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%の冷気効果を付与する。",
			"koKR": "행운의 적중 확률: {#}%\n적에게 서리의 화살을 날려 {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%의 피해를 주고 15%의 오한을 느끼게 합니다.\n\nTags: 기본, 서리, 오한, 피해, 냉기, 군중 제어.\n\n— Enchantment Effect —\n기술로 직접 피해를 주면 대상이 최대 {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%의 오한을 느낍니다.",
			"plPL": "Szansa na szczęśliwy traf: {#}%\nCiskasz we wroga lodowym pociskiem, który wyziębia ofiarę o 15% i zadaje jej {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% pkt. obrażeń.\n\nTags: Podstawowe, Mróz, Wyziębienie, Obrażenia, Zimno, Ograniczanie Kontroli.\n\n— Enchantment Effect —\nObrażenia bezpośrednie od umiejętności wywołują dodatkowo {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% wyziębienia.",
			"ptBR": "Chance de Golpe de Sorte: {#}%\nArremessa uma seta de gelo em um inimigo, causando {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de dano e aplicando gelidez por 15%.\n\nTags: Básica, Geleira, Gelidez, Dano, Gelo, Controle de Grupo.\n\n— Enchantment Effect —\nO dano direto de habilidades aplica até {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de gelidez.",
			"ruRU": "Вероятность удачного удара: {#}%.\nВы запускаете морозный снаряд, наносящий цели {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% ед. урона и заставляющий ее коченеть, уменьшая подвижность на 15%.\n\nTags: Базовые, Мороз, Окоченение, Урон, Холод, Контроль.\n\n— Enchantment Effect —\nПрямой урон от умений применяет к противникам эффект окоченения, замедляющий на {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%.",
			"zhCN": "幸运一击几率:{#}%\n对一名敌人投掷冰霜弹,造成{35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%点伤害并使其冻伤15%。\n\nTags: 基础, 寒霜, 冻伤, 伤害, 冰霜, 群控.\n\n— Enchantment Effect —\n来自技能的直接伤害会施加最多{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%的冻伤。"
},
		id: 0,
		maxPoints: 5,
		values: [ "30" ],
		x: -195.614,
		y: -247.035
	},
	"Enhanced Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Frost Bolt", "Flickering Frost Bolt", "Glinting Frost Bolt" ],
		description: `Frost Bolt has a 15% chance to explode on Chilled enemies, hitting surrounding enemies. Chance increased to 100% against Frozen enemies.

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		nameLocalized: {
			"deDE": "Verbesserter Frostblitz",
			"esES": "Descarga de escarcha mejorada",
			"esMX": "Descarga Gélida Potenciada",
			"frFR": "Éclair de givre renforcé",
			"itIT": "Dardo di Gelo Rinforzato",
			"jaJP": "フロスト・ボルト(強化版)",
			"koKR": "강화된 서리 화살",
			"plPL": "Wzmocniony Lodowy Pocisk",
			"ptBR": "Seta de Gelo Aperfeiçoada",
			"ruRU": "Усиленная ледяная стрела",
			"zhCN": "强化冰霜弹"
},
		descriptionLocalized: {
			"deDE": "Frostblitz verfügt über eine Chance von 15%, auf unterkühlten Gegnern zu explodieren und Gegner in der Nähe zu treffen. Gegen eingefrorene Gegner erhöht sich diese Chance auf 100%.\n\nTags: Grundlegend, Frost, Unterkühlen, Schaden, Kälte, Kontrollverlust.",
			"esES": "Descarga de escarcha tiene un 15% de probabilidad de explotar en enemigos helados y golpear a los enemigos cercanos. La probabilidad es del 100% contra enemigos congelados.\n\nTags: Básica, Escarcha, Helada, Daño, Frío, Control de masas.",
			"esMX": "Descarga Gélida tiene un 15% de probabilidad de explotar contra enemigos helados, lo que golpea a los enemigos circundantes. La probabilidad aumenta al 100% contra enemigos congelados.\n\nTags: Básico, Congelar, Helar, Daño, Frío, Control de multitudes.",
			"frFR": "Éclair de givre a 15% de chances d'exploser sur les cibles glacées, ce qui inflige des dégâts aux adversaires à proximité. Les chances sont portées à 100% contre les cibles gelées.\n\nTags: De base, Givre, Glace, Dégâts, Froid, Perte de contrôle.",
			"itIT": "Dardo di Gelo ha il 15% di probabilità di esplodere colpendo dei nemici raggelati, danneggiando i nemici circostanti. La probabilità aumenta al 100% contro nemici congelati.\n\nTags: Base, Gelo, Raggelamento, Danni, Freddo, Effetti debilitanti.",
			"jaJP": "〈フロスト・ボルト〉が15%の確率で冷気状態の敵に命中した際に爆発して周囲の敵を巻き込む。凍結状態の敵に対しては確率が100%に上昇する。\n\nTags: 基本, 寒気, 冷気, ダメージ, 操作障害効果.",
			"koKR": "서리 화살이 오한을 느끼는 적에게서 15% 확률로 폭발하여 주변 적들에게 적중합니다. 빙결 상태의 대상에게는 확률이 100%로 증가합니다.\n\nTags: 기본, 서리, 오한, 피해, 냉기, 군중 제어.",
			"plPL": "Lodowy Pocisk ma 15% szans na wybuch przy kontakcie z wyziębionymi wrogami. Eksplozja trafia pobliskich przeciwników. Szansa ta wzrasta do 100% w przypadku zamrożonych wrogów.\n\nTags: Podstawowe, Mróz, Wyziębienie, Obrażenia, Zimno, Ograniczanie Kontroli.",
			"ptBR": "Seta de Gelo tem 15% de chance de explodir em alvos com gelidez, atingindo inimigos ao redor. A chance é aumentada para 100% contra inimigos congelados.\n\nTags: Básica, Geleira, Gelidez, Dano, Gelo, Controle de Grupo.",
			"ruRU": "\"Ледяная стрела\" с вероятностью 15% взрывается при попадании в окоченевшие цели, поражая окружающих противников. Эта вероятность повышается на 100%, если цель заморожена.\n\nTags: Базовые, Мороз, Окоченение, Урон, Холод, Контроль.",
			"zhCN": "冰霜弹有15%几率在冻伤的敌人身上爆炸,打击周围的敌人。对冻结的敌人几率提高至100%。\n\nTags: 基础, 寒霜, 冻伤, 伤害, 冰霜, 群控."
},
		id: 1,
		maxPoints: 1,
		x: -336.656,
		y: -421.415
	},
	"Flickering Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Enhanced Frost Bolt" ],
		description: `Frost Bolt makes Frozen enemies Vulnerable for 3 seconds.

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		nameLocalized: {
			"deDE": "Flackernder Frostblitz",
			"esES": "Descarga de escarcha trémula",
			"esMX": "Descarga Gélida Parpadeante",
			"frFR": "Éclair de givre fulgurant",
			"itIT": "Dardo di Gelo Intermittente",
			"jaJP": "フロスト・ボルト(明滅)",
			"koKR": "깜빡이는 서리 화살",
			"plPL": "Migoczący Lodowy Pocisk",
			"ptBR": "Seta de Gelo Tremeluzente",
			"ruRU": "Мерцающая ледяная стрела",
			"zhCN": "闪烁冰霜弹"
},
		descriptionLocalized: {
			"deDE": "Frostblitz macht eingefrorene Gegner 3 Sek. lang verwundbar.\n\nTags: Grundlegend, Frost, Unterkühlen, Schaden, Kälte, Kontrollverlust.",
			"esES": "Descarga de escarcha vuelve vulnerables a los enemigos congelados durante 3 s.\n\nTags: Básica, Escarcha, Helada, Daño, Frío, Control de masas.",
			"esMX": "Descarga Gélida vuelve a los enemigos congelados vulnerables durante 3 segundos.\n\nTags: Básico, Congelar, Helar, Daño, Frío, Control de multitudes.",
			"frFR": "Les cibles gelées qui se font toucher par Éclair de givre deviennent vulnérables pendant 3 s.\n\nTags: De base, Givre, Glace, Dégâts, Froid, Perte de contrôle.",
			"itIT": "Dardo di Gelo rende vulnerabili i nemici congelati per 3 s.\n\nTags: Base, Gelo, Raggelamento, Danni, Freddo, Effetti debilitanti.",
			"jaJP": "〈フロスト・ボルト〉が凍結状態の敵を3秒間にわたり脆弱状態にする。\n\nTags: 基本, 寒気, 冷気, ダメージ, 操作障害効果.",
			"koKR": "서리 화살로 빙결된 적을 적중하면 3초 동안 적이 취약해집니다.\n\nTags: 기본, 서리, 오한, 피해, 냉기, 군중 제어.",
			"plPL": "Lodowy Pocisk sprawia, że zamrożeni wrogowie stają się odsłonięci na 3 sek.\n\nTags: Podstawowe, Mróz, Wyziębienie, Obrażenia, Zimno, Ograniczanie Kontroli.",
			"ptBR": "Seta de Gelo torna os inimigos congelados vulneráveis por 3 segundos.\n\nTags: Básica, Geleira, Gelidez, Dano, Gelo, Controle de Grupo.",
			"ruRU": "\"Ледяная стрела\" делает замороженных противников уязвимыми на 3 сек.\n\nTags: Базовые, Мороз, Окоченение, Урон, Холод, Контроль.",
			"zhCN": "冰霜弹会使冻结的敌人陷入易伤状态,持续3秒。\n\nTags: 基础, 寒霜, 冻伤, 伤害, 冰霜, 群控."
},
		id: 2,
		maxPoints: 1,
		x: -592.019,
		y: -455.675
	},
	"Glinting Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Enhanced Frost Bolt" ],
		description: `Frost Bolt generates 4 Mana when hitting Chilled or Frozen enemies.

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		nameLocalized: {
			"deDE": "Funkelnder Frostblitz",
			"esES": "Descarga de escarcha centelleante",
			"esMX": "Descarga Gélida Destellante",
			"frFR": "Éclair de givre étincelant",
			"itIT": "Dardo di Gelo Scintillante",
			"jaJP": "フロスト・ボルト(閃光)",
			"koKR": "번쩍이는 서리 화살",
			"plPL": "Iskrzący Lodowy Pocisk",
			"ptBR": "Seta de Gelo Cintilante",
			"ruRU": "Сияющая ледяная стрела",
			"zhCN": "闪耀冰霜弹"
},
		descriptionLocalized: {
			"deDE": "Frostblitz erzeugt 4 Mana, wenn Ihr unterkühlte oder eingefrorene Gegner trefft.\n\nTags: Grundlegend, Frost, Unterkühlen, Schaden, Kälte, Kontrollverlust.",
			"esES": "Descarga de escarcha genera 4 de maná al golpear a enemigos helados o congelados.\n\nTags: Básica, Escarcha, Helada, Daño, Frío, Control de masas.",
			"esMX": "Descarga Gélida genera 4 de maná al golpear a enemigos helados o congelados.\n\nTags: Básico, Congelar, Helar, Daño, Frío, Control de multitudes.",
			"frFR": "Éclair de givre génère 4 points de mana lorsqu'il touche des cibles glacées ou gelées.\n\nTags: De base, Givre, Glace, Dégâts, Froid, Perte de contrôle.",
			"itIT": "Dardo di Gelo rigenera 4 mana quando colpisce nemici raggelati o congelati.\n\nTags: Base, Gelo, Raggelamento, Danni, Freddo, Effetti debilitanti.",
			"jaJP": "〈フロスト・ボルト〉が冷気状態か凍結状態の敵に命中すると、4マナを回復する。\n\nTags: 基本, 寒気, 冷気, ダメージ, 操作障害効果.",
			"koKR": "서리 화살이 오한을 느끼는 적이나 빙결 상태의 적에게 적중하면 마나를 4 생성합니다.\n\nTags: 기본, 서리, 오한, 피해, 냉기, 군중 제어.",
			"plPL": "Lodowy Pocisk przywraca ci 4 pkt. many, kiedy trafia wyziębionych lub zamrożonych wrogów.\n\nTags: Podstawowe, Mróz, Wyziębienie, Obrażenia, Zimno, Ograniczanie Kontroli.",
			"ptBR": "Seta de Gelo gera 4 de mana ao atingir inimigos com gelidez ou congelados.\n\nTags: Básica, Geleira, Gelidez, Dano, Gelo, Controle de Grupo.",
			"ruRU": "\"Ледяная стрела\" восстанавливает 4 ед. маны при попадании по окоченевшим или замороженным противникам.\n\nTags: Базовые, Мороз, Окоченение, Урон, Холод, Контроль.",
			"zhCN": "冰霜弹命中冻伤或冻结的敌人时会生成4点法力。\n\nTags: 基础, 寒霜, 冻伤, 伤害, 冰霜, 群控."
},
		id: 3,
		maxPoints: 1,
		x: -263.99,
		y: -545.8
	},
	"Spark": {
		connections: [ "Basic", "Enhanced Spark" ],
		description: `Lucky Hit Chance: {#}%
Launch a bolt of lightning that shocks an enemy 4 times, dealing {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% damage each hit.

Tags: Basic, Shock, Damage, Lightning.

— Enchantment Effect —
Killing an enemy has a {10/11/12/13/14/15/16/17/18/19}% chance to form a Crackling Energy.`,
		nameLocalized: {
			"deDE": "Funke",
			"esES": "Chispa",
			"esMX": "Chispa",
			"frFR": "Étincelle",
			"itIT": "Scintilla",
			"jaJP": "スパーク",
			"koKR": "벼락불",
			"plPL": "Iskra",
			"ptBR": "Faísca",
			"ruRU": "Искра",
			"zhCN": "电花"
},
		descriptionLocalized: {
			"deDE": "Glückstrefferchance: {#}%\nEntsendet einen Blitz, der einen Gegner 4-mal schockt und bei jedem Treffer {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% Schaden verursacht.\n\nTags: Grundlegend, Schock, Schaden, Blitz.\n\n— Enchantment Effect —\nWenn Ihr einen Gegner tötet, besteht eine Chance von {10/11/12/13/14/15/16/17/18/19}%, Knisternde Energie zu erzeugen.",
			"esES": "Probabilidad de golpe de suerte: {#}%\nLanzas una descarga de rayos que electrocuta 4 veces a un enemigo e inflige {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de daño con cada golpe.\n\nTags: Básica, Electrocución, Daño, Rayos.\n\n— Enchantment Effect —\nMatar a un enemigo tiene un {10/11/12/13/14/15/16/17/18/19}% de probabilidad de formar una energía crepitante.",
			"esMX": "Probabilidad de golpe afortunado: {#}%\nLanza un rayo que electrocuta a un enemigo 4 veces e inflige {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de daño por golpe.\n\nTags: Básico, Choque, Daño, Rayo.\n\n— Enchantment Effect —\nMatar a un enemigo tiene un {10/11/12/13/14/15/16/17/18/19}% de probabilidad de generar Energía Crepitante.",
			"frFR": "Chances de coup de chance: {#}%\nVous lancez un éclair de foudre qui électrocute une cible 4 fois, infligeant {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% points de dégâts par coup.\n\nTags: De base, Foudre, Dégâts.\n\n— Enchantment Effect —\nTuer une cible a {10/11/12/13/14/15/16/17/18/19}% de chances de générer de l'énergie crépitante.",
			"itIT": "Probabilità di colpo fortunato: {#}%\nLancia un dardo di fulmini che folgora un nemico 4 volte, infliggendo {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% danni a ogni colpo.\n\nTags: Base, Folgore, Danni, Fulmine.\n\n— Enchantment Effect —\nUccidere un nemico ha una probabilità del {10/11/12/13/14/15/16/17/18/19}% di generare Energia Crepitante.",
			"jaJP": "幸運の一撃発生率: {#}%\n稲妻を放って敵1体を4回感電させ、1回命中するごとに{8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%のダメージを与える。\n\nTags: 基本, 電撃, ダメージ, 稲妻.\n\n— Enchantment Effect —\n敵1体を倒すと{10/11/12/13/14/15/16/17/18/19}%の確率で〈帯び出す電気〉が発生する。",
			"koKR": "행운의 적중 확률: {#}%\n번개 화살을 발사하여 적을 4번 감전시키고, 각각 {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%의 피해를 줍니다.\n\nTags: 기본, 감전, 피해, 번개.\n\n— Enchantment Effect —\n적을 처치하면 {10/11/12/13/14/15/16/17/18/19}% 확률로 짜릿한 에너지가 남습니다.",
			"plPL": "Szansa na szczęśliwy traf: {#}%\nWystrzeliwujesz błyskawicę, która poraża cel 4 razy, przy każdym trafieniu zadając {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% pkt. obrażeń.\n\nTags: Podstawowe, Porażenie, Obrażenia, Piorun.\n\n— Enchantment Effect —\nZabicie wroga zapewnia {10/11/12/13/14/15/16/17/18/19}% szans na stworzenie Roziskrzonej Energii.",
			"ptBR": "Chance de Golpe de Sorte: {#}%\nLança um raio que eletrocuta um inimigo 4 vezes, causando {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de dano a cada acerto.\n\nTags: Básica, Choque, Dano, Eletricidade.\n\n— Enchantment Effect —\nMatar um inimigo tem {10/11/12/13/14/15/16/17/18/19}% de chance de formar uma Energia Crepitante.",
			"ruRU": "Вероятность удачного удара: {#}%.\nВы выпускаете разряд молнии, поражающий противника 4 раза:раз и наносящий {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% ед. урона за каждый удар.\n\nTags: Базовые, Шок, Урон, Молния.\n\n— Enchantment Effect —\nКогда вы убиваете противника, с вероятностью {10/11/12/13/14/15/16/17/18/19}% появляется искрящийся заряд энергии.",
			"zhCN": "幸运一击几率:{#}%\n发射一道闪电,震击一名敌人4次,每一击造成{8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%点伤害。\n\nTags: 基础, 电冲, 伤害, 闪电.\n\n— Enchantment Effect —\n消灭敌人时有{10/11/12/13/14/15/16/17/18/19}%几率生成一个爆裂电花。"
},
		id: 4,
		maxPoints: 5,
		values: [ "9" ],
		x: -489.038,
		y: -81.23
	},
	"Enhanced Spark": {
		baseSkill: "Spark",
		connections: [ "Spark", "Flickering Spark", "Glinting Spark" ],
		description: `Each time Spark hits its primary target, it has a 20% chance to hit up to 3 additional enemies, dealing {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% damage. If there are no other enemies to hit, Spark instead deals x20% increased damage to its primary target.

Tags: Basic, Shock, Damage, Lightning.`,
		nameLocalized: {
			"deDE": "Verbesserter Funke",
			"esES": "Chispa mejorada",
			"esMX": "Chispa Potenciada",
			"frFR": "Étincelle renforcée",
			"itIT": "Scintilla Rinforzata",
			"jaJP": "スパーク(強化版)",
			"koKR": "강화된 벼락불",
			"plPL": "Wzmocniona Iskra",
			"ptBR": "Faísca Aperfeiçoada",
			"ruRU": "Усиленная искра",
			"zhCN": "强化电花"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Funke sein Primärziel trifft, besteht eine Chance von 20%, bis zu 3 zusätzliche Gegner zu treffen und {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% Schaden zu verursachen. Wenn es keine zusätzlichen Gegner gibt, verursacht Funke stattdessen x20% mehr Schaden am Primärziel.\n\nTags: Grundlegend, Schock, Schaden, Blitz.",
			"esES": "Cada vez que Chispa golpea a su objetivo principal, hay un 20% de probabilidad de que golpee a hasta 3 enemigos más, lo que inflige {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% de daño. Si no hay más enemigos, Chispa inflige x20% más de daño a su objetivo principal en su lugar.\n\nTags: Básica, Electrocución, Daño, Rayos.",
			"esMX": "Cada vez que Chispa golpea a su objetivo principal, tiene un 20% de probabilidad de golpear a hasta 3 enemigos más e infligir {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% de daño. Si no hay más enemigos que golpear, Chispa inflige un x20% más de daño a su objetivo principal.\n\nTags: Básico, Choque, Daño, Rayo.",
			"frFR": "Chaque fois qu'Étincelle touche sa cible principale, il y a 20% de chances qu'elle touche jusqu'à 3 cibles supplémentaires en infligeant {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% points de dégâts. S'il n'y a aucune autre cible à toucher, alors Étincelle inflige x20% de dégâts supplémentaires à sa cible principale.\n\nTags: De base, Foudre, Dégâts.",
			"itIT": "Ogni volta che Scintilla colpisce il suo bersaglio principale, ha il 20% di probabilità di colpire fino a 3 nemici aggiuntivi, infliggendo {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% danni. Se non restano altri nemici da colpire, Scintilla infligge x20% di danni aggiuntivi al suo bersaglio principale.\n\nTags: Base, Folgore, Danni, Fulmine.",
			"jaJP": "〈スパーク〉がメインの標的に命中するたびに20%の確率で最大3体の敵に追加で命中し、{5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}%のダメージを与える。〈スパーク〉の攻撃対象がほかにいなかった場合は、メインの標的に与えるダメージがx20%増加する。\n\nTags: 基本, 電撃, ダメージ, 稲妻.",
			"koKR": "벼락불이 주 대상에게 적중할 때마다 20% 확률로 3마리의 추가 적에게 적중하여 {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}%의 피해를 줍니다. 적중할 다른 적이 없으면 벼락불이 주 대상에게 주는 피해가 x20% 증가합니다.\n\nTags: 기본, 감전, 피해, 번개.",
			"plPL": "Każde trafienie Iskrą głównego celu ma 20% szans na trafienie dodatkowo 3 wrogów i zadanie im {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% pkt. obrażeń. Jeśli nie ma innych wrogów do trafienia, Iskra zadaje głównemu celowi obrażenia zwiększone o x20% pkt.\n\nTags: Podstawowe, Porażenie, Obrażenia, Piorun.",
			"ptBR": "Sempre que Faísca acertar seu alvo primário, tem 20% de chance de atingir até 3 inimigos adicionais, causando {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% de dano. Se não houver outros inimigos para atingir, Faísca causa 20% de dano aumentado ao alvo principal.\n\nTags: Básica, Choque, Dano, Eletricidade.",
			"ruRU": "Когда \"Искра\" поражает основную цель, она с вероятностью 20% поражает еще максимум 3 противников:противников, нанося {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% ед. урона. Если рядом нет подходящих противников, \"Искра\" наносит основной цели на x20% больше урона.\n\nTags: Базовые, Шок, Урон, Молния.",
			"zhCN": "每次电花命中其主要目标,都有20%几率额外命中最多3名敌人,造成{5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}%点伤害。如果没有其他可以命中的敌人,改为电花对其主要目标造成的伤害提高x20%。\n\nTags: 基础, 电冲, 伤害, 闪电."
},
		id: 5,
		maxPoints: 1,
		x: -762.794,
		y: -204.92
	},
	"Flickering Spark": {
		baseSkill: "Spark",
		connections: [ "Enhanced Spark" ],
		description: `Each time Spark hits an enemy it has a 3% chance to form a Crackling Energy.

Tags: Basic, Shock, Damage, Lightning.`,
		nameLocalized: {
			"deDE": "Flackernder Funke",
			"esES": "Chispa trémula",
			"esMX": "Chispa Parpadeante",
			"frFR": "Étincelle fulgurante",
			"itIT": "Scintilla Intermittente",
			"jaJP": "スパーク(明滅)",
			"koKR": "깜박이는 벼락불",
			"plPL": "Migocząca Iskra",
			"ptBR": "Faísca Tremeluzente",
			"ruRU": "Мерцающая искра",
			"zhCN": "闪烁电花"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Funke einen Gegner trifft, besteht eine Chance von 3%, Knisternde Energie zu erzeugen.\n\nTags: Grundlegend, Schock, Schaden, Blitz.",
			"esES": "Cada vez que Chispa golpea a un enemigo, tiene un 3% de probabilidad de formar una energía crepitante.\n\nTags: Básica, Electrocución, Daño, Rayos.",
			"esMX": "Cada vez que Chispa golpea a un enemigo, tiene un 3% de probabilidad de formar una Energía Crepitante.\n\nTags: Básico, Choque, Daño, Rayo.",
			"frFR": "Chaque fois qu'Étincelle touche une cible, il y a 3% de chances qu'elle génère de l'énergie crépitante.\n\nTags: De base, Foudre, Dégâts.",
			"itIT": "Ogni volta che Scintilla colpisce un nemico, ha una probabilità del 3% di generare Energia Crepitante.\n\nTags: Base, Folgore, Danni, Fulmine.",
			"jaJP": "〈スパーク〉が敵に命中するたびに3%の確率で〈帯び出す電気〉が発生する。\n\nTags: 基本, 電撃, ダメージ, 稲妻.",
			"koKR": "벼락불이 적에게 적중할 때마다 3% 확률로 짜릿한 에너지를 생성합니다.\n\nTags: 기본, 감전, 피해, 번개.",
			"plPL": "Za każdym razem, gdy Iskra trafia wroga, istnieje 3% szans na stworzenie Roziskrzonej Energii.\n\nTags: Podstawowe, Porażenie, Obrażenia, Piorun.",
			"ptBR": "Sempre que Faísca atingir um inimigo, tem 3% de chance de formar uma Energia Crepitante.\n\nTags: Básica, Choque, Dano, Eletricidade.",
			"ruRU": "Каждый раз, когда \"Искра\" поражает противника, она с вероятностью 3% создает искрящийся заряд энергии.\n\nTags: Базовые, Шок, Урон, Молния.",
			"zhCN": "电花每次命中敌人时,有3%几率生成一个爆裂电花。\n\nTags: 基础, 电冲, 伤害, 闪电."
},
		id: 6,
		maxPoints: 1,
		x: -782.894,
		y: -342.245
	},
	"Glinting Spark": {
		baseSkill: "Spark",
		connections: [ "Enhanced Spark" ],
		description: `Spark grants +2% increased Critical Strike Chance per cast for 3 seconds, up to +10%.

Tags: Basic, Shock, Damage, Lightning.`,
		nameLocalized: {
			"deDE": "Funkelnder Funke",
			"esES": "Chispa centelleante",
			"esMX": "Chispa Destellante",
			"frFR": "Étincelle étincelante",
			"itIT": "Scintilla Scintillante",
			"jaJP": "スパーク(閃光)",
			"koKR": "번쩍이는 벼락불",
			"plPL": "Lśniąca Iskra",
			"ptBR": "Faísca Cintilante",
			"ruRU": "Сияющая искра",
			"zhCN": "闪耀电花"
},
		descriptionLocalized: {
			"deDE": "Funke verleiht Euch pro getroffenem Gegner 3 Sek. lang eine +2% höhere kritische Trefferchance, bis maximal +10%.\n\nTags: Grundlegend, Schock, Schaden, Blitz.",
			"esES": "Chispa otorga un +2% más de probabilidad de golpe crítico por lanzamiento durante 3 s, hasta un máximo de un +10%.\n\nTags: Básica, Electrocución, Daño, Rayos.",
			"esMX": "Chispa otorga un +2% más de probabilidad de golpe crítico por lanzamiento durante 3 segundos, hasta un +10%.\n\nTags: Básico, Choque, Daño, Rayo.",
			"frFR": "Chaque utilisation d'Étincelle augmente vos chances d'infliger un coup critique de +2% pendant 3 s, jusqu'à un maximum de +10%.\n\nTags: De base, Foudre, Dégâts.",
			"itIT": "Scintilla aumenta la probabilità di critico del +2% a ogni utilizzo per 3 s, fino a un massimo del +10%.\n\nTags: Base, Folgore, Danni, Fulmine.",
			"jaJP": "〈スパーク〉を使うたびに、クリティカルヒット率が3秒間にわたり+2%増加する。増加量は最大+10%。\n\nTags: 基本, 電撃, ダメージ, 稲妻.",
			"koKR": "벼락불 시전 1회당 3초 동안 극대화 확률이 +2%만큼, 최대 +10%까지 증가합니다.\n\nTags: 기본, 감전, 피해, 번개.",
			"plPL": "Iskra zapewnia za każde użycie premię +2% do szansy na trafienie krytyczne na 3 sek., maksymalnie do +10%.\n\nTags: Podstawowe, Porażenie, Obrażenia, Piorun.",
			"ptBR": "Faísca concede +2% de chance de acerto crítico aumentada por lançamento por 3 segundos, até +10%.\n\nTags: Básica, Choque, Dano, Eletricidade.",
			"ruRU": "\"Искра\" повышает вероятность критического удара на +2% на 3 сек. Максимальный бонус – +10%.\n\nTags: Базовые, Шок, Урон, Молния.",
			"zhCN": "电花每次施放时,暴击几率提高+2%,持续3秒,最多提高+10%。\n\nTags: 基础, 电冲, 伤害, 闪电."
},
		id: 7,
		maxPoints: 1,
		x: -1028.789,
		y: -207.505
	},
	"Arc Lash": {
		connections: [ "Basic", "Enhanced Arc Lash" ],
		description: `Lucky Hit Chance: {#}%
Unleash arcing lightning that deals {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% damage to enemies in front of you. Every 10 times Arc Lash swipes, it Stuns all enemies hit for 2 seconds.

Tags: Basic, Shock, Damage, Lightning, Crowd Control.

— Enchantment Effect —
When you use a Cooldown, enemies around you are Stunned for {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} seconds.`,
		nameLocalized: {
			"deDE": "Elektropeitsche",
			"esES": "Arco eléctrico",
			"esMX": "Latigazo de Arco Eléctrico",
			"frFR": "Fouet électrique",
			"itIT": "Sferzata ad Arco",
			"jaJP": "アーク・ラッシュ",
			"koKR": "전기 채찍",
			"plPL": "Bicz Wyładowań",
			"ptBR": "Açoite do Arco",
			"ruRU": "Грозовая плеть",
			"zhCN": "电弧鞭笞"
},
		descriptionLocalized: {
			"deDE": "Glückstrefferchance: {#}%\nEntsendet bogenförmige Blitze, die Gegnern vor Euch {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% Schaden zufügen. Mit jedem 10. Schwung der Elektropeitsche werden alle getroffenen Gegner 2 Sek. lang betäubt.\n\nTags: Grundlegend, Schock, Schaden, Blitz, Kontrollverlust.\n\n— Enchantment Effect —\nWenn Ihr eine Abklingzeit verwendet, werden Gegner um Euch herum {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} Sek. lang betäubt.",
			"esES": "Probabilidad de golpe de suerte: {#}%\nCreas un arco eléctrico que inflige {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% de daño a los enemigos frente a ti. Cada 10 pasadas de Arco eléctrico, aturdes a todos los enemigos golpeados durante 2 s.\n\nTags: Básica, Electrocución, Daño, Rayos, Control de masas.\n\n— Enchantment Effect —\nCuando usas un tiempo de reutilización, los enemigos que te rodean quedan aturdidos durante {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} s.",
			"esMX": "Probabilidad de golpe afortunado: {#}%\nDesatas un rayo en arco que inflige {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% de daño a los enemigos frente a ti. Cada 10 golpes de Latigazo de Arco Eléctrico, aturde a todos los enemigos durante 2 segundos.\n\nTags: Básico, Choque, Daño, Rayo, Control de multitudes.\n\n— Enchantment Effect —\nCuando usas una habilidad con recuperación, los enemigos a tu alrededor quedan aturdidos durante {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} segundos.",
			"frFR": "Chances de coup de chance: {#}%\nVous libérez des arcs de foudre qui infligent {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% points de dégâts aux adversaires en face de vous. Toutes les 10 frappes de Fouet électrique, la compétence étourdit toutes les cibles touchées pendant 2 s.\n\nTags: De base, Foudre, Dégâts, Perte de contrôle.\n\n— Enchantment Effect —\nLorsque vous utilisez une compétence avec un temps de recharge, les cibles autour de vous sont étourdies pendant {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} s.",
			"itIT": "Probabilità di colpo fortunato: {#}%\nScateni un arco di elettricità che infligge {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% danni ai nemici frontali. Ogni 10 colpi di Sferzata ad Arco, i nemici colpiti vengono storditi per 2 s.\n\nTags: Base, Folgore, Danni, Fulmine, Effetti debilitanti.\n\n— Enchantment Effect —\nQuando lanci un'abilità con tempo di recupero, i nemici circostanti vengono storditi per {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} s.",
			"jaJP": "幸運の一撃発生率: {#}%\n弧を描く稲妻を放ち、前方の敵に{42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}%ダメージを与える。〈アーク・ラッシュ〉は10回命中するたびに、当たったすべての敵を2秒間スタンさせる。\n\nTags: 基本, 電撃, ダメージ, 稲妻, 操作障害効果.\n\n— Enchantment Effect —\nクールダウンを使用すると、周囲の敵が{0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95}秒間スタンする。",
			"koKR": "행운의 적중 확률: {#}%\n뻗어나가는 번개를 내뿜어 전방의 적들에게 {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}%의 피해를 줍니다. 전기 채찍을 10번 휘두를 때마다 적중한 모든 적을 2초 동안 기절시킵니다.\n\nTags: 기본, 감전, 피해, 번개, 군중 제어.\n\n— Enchantment Effect —\n재사용 대기시간이 있는 기술을 사용하면 주위의 적들이 {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95}초 동안 기절합니다.",
			"plPL": "Szansa na szczęśliwy traf: {#}%\nUwalniasz po łuku błyskawicę, która zadaje wrogom znajdującym się przed tobą {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% pkt. obrażeń. Co 10 smagnięcie Bicza Wyładowań ogłusza wszystkich trafionych wrogów na 2 sek.\n\nTags: Podstawowe, Porażenie, Obrażenia, Piorun, Ograniczanie Kontroli.\n\n— Enchantment Effect —\nKiedy korzystasz z czasu odnowienia, wrogowie wokół ciebie zostają ogłuszeni na {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} sek.",
			"ptBR": "Chance de Golpe de Sorte: {#}%\nSolta raios em arco que causam {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% de dano aos inimigos à sua frente. Cada 10 vezes que Açoite do Arco golpeia, atordoa todos os inimigos atingidos por 2 segundos.\n\nTags: Básica, Choque, Dano, Eletricidade, Controle de Grupo.\n\n— Enchantment Effect —\nAo usar uma recarga, os inimigos ao seu redor ficam atordoados por {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} segundos.",
			"ruRU": "Вероятность удачного удара: {#}%.\nВы поражаете противников перед собой дуговым разрядом молнии, наносящим {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% ед. урона. Каждый 10-й взмах \"Грозовой плети\" оглушает пораженных противников на 2 сек.\n\nTags: Базовые, Шок, Урон, Молния, Контроль.\n\n— Enchantment Effect —\nКогда вы применяете умение с временем восстановления, противники вокруг оглушаются на {0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95} сек.",
			"zhCN": "幸运一击几率:{#}%\n施放弧形闪电,对你面前的敌人造成{42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}%点伤害。每第10次施放电弧鞭笞,击晕所有命中的敌人2秒。\n\nTags: 基础, 电冲, 伤害, 闪电, 群控.\n\n— Enchantment Effect —\n当你使用有冷却时间的技能时,你周围的敌人会昏迷{0.5/0.55/0.6/0.65/0.7/0.75/0.8/0.85/0.9/0.95}秒。"
},
		id: 8,
		maxPoints: 5,
		values: [ "30" ],
		x: 487.781,
		y: -80.27
	},
	"Enhanced Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Arc Lash", "Glinting Arc Lash", "Flickering Arc Lash" ],
		description: `If Arc Lash's initial swipe Critically Strikes, it swipes an additional time.

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		nameLocalized: {
			"deDE": "Verbesserte Elektropeitsche",
			"esES": "Arco eléctrico mejorado",
			"esMX": "Latigazo de Arco Eléctrico Potenciado",
			"frFR": "Fouet électrique renforcé",
			"itIT": "Sferzata ad Arco Rinforzata",
			"jaJP": "アーク・ラッシュ(強化版)",
			"koKR": "강화된 전기 채찍",
			"plPL": "Wzmocniony Bicz Wyładowań",
			"ptBR": "Açoite do Arco Aperfeiçoado",
			"ruRU": "Усиленная грозовая плеть",
			"zhCN": "强化电弧鞭笞"
},
		descriptionLocalized: {
			"deDE": "Wenn der erste Schwung von Elektropeitsche einen kritischen Treffer erzielt, schwingt Ihr sie erneut.\n\nTags: Grundlegend, Schock, Schaden, Blitz, Kontrollverlust.",
			"esES": "Si el golpe inicial de Arco eléctrico asesta golpes críticos, golpea una vez más.\n\nTags: Básica, Electrocución, Daño, Rayos, Control de masas.",
			"esMX": "Si el golpe inicial de Latigazo de Arco Eléctrico es un golpe crítico, realiza un golpe adicional.\n\nTags: Básico, Choque, Daño, Rayo, Control de multitudes.",
			"frFR": "Si la première attaque de Fouet électrique inflige un coup critique, il attaque une deuxième fois.\n\nTags: De base, Foudre, Dégâts, Perte de contrôle.",
			"itIT": "Se il colpo iniziale di Sferzata ad Arco infligge danni critici, colpisce un'altra volta.\n\nTags: Base, Folgore, Danni, Fulmine, Effetti debilitanti.",
			"jaJP": "〈アーク・ラッシュ〉の初撃がクリティカルヒットになると、攻撃回数が1回増える。\n\nTags: 基本, 電撃, ダメージ, 稲妻, 操作障害効果.",
			"koKR": "전기 채찍의 최초 공격이 극대화로 적중하면, 한 번 더 공격합니다.\n\nTags: 기본, 감전, 피해, 번개, 군중 제어.",
			"plPL": "Jeśli pierwsze smagnięcie Biczem Wyładowań wywołuje trafienie krytyczne, uderza on ponownie.\n\nTags: Podstawowe, Porażenie, Obrażenia, Piorun, Ograniczanie Kontroli.",
			"ptBR": "Se o primeiro golpe de Açoite do Arco for um acerto crítico, golpeia mais uma vez.\n\nTags: Básica, Choque, Dano, Eletricidade, Controle de Grupo.",
			"ruRU": "Если первый взмах \"Грозовой плети\" наносит критический удар, она срабатывает повторно.\n\nTags: Базовые, Шок, Урон, Молния, Контроль.",
			"zhCN": "如果电弧鞭笞的初始扫击造成暴击,则额外扫击一次。\n\nTags: 基础, 电冲, 伤害, 闪电, 群控."
},
		id: 9,
		maxPoints: 1,
		x: 765.421,
		y: -208.87
	},
	"Glinting Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Enhanced Arc Lash" ],
		description: `Hitting a Stunned enemy with Arc Lash reduces your Cooldowns by 0.25 seconds.

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		nameLocalized: {
			"deDE": "Funkelnde Elektropeitsche",
			"esES": "Arco eléctrico centelleante",
			"esMX": "Latigazo de Arco Eléctrico Destellante",
			"frFR": "Fouet électrique étincelant",
			"itIT": "Sferzata ad Arco Scintillante",
			"jaJP": "アーク・ラッシュ(閃光)",
			"koKR": "번쩍이는 전기 채찍",
			"plPL": "Lśniący Bicz Wyładowań",
			"ptBR": "Açoite do Arco Cintilante",
			"ruRU": "Сияющая грозовая плеть",
			"zhCN": "闪耀电弧鞭笞"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen betäubten Gegner mit Elektropeitsche trefft, werden Eure Abklingzeiten um 0.25 Sek. reduziert.\n\nTags: Grundlegend, Schock, Schaden, Blitz, Kontrollverlust.",
			"esES": "Golpear a un enemigo aturdido con Arco eléctrico reduce 0.25 s tus tiempos de reutilización.\n\nTags: Básica, Electrocución, Daño, Rayos, Control de masas.",
			"esMX": "Al golpear con Latigazo de Arco Eléctrico a un enemigo aturdido, tus recuperaciones se reducen 0.25 segundos.\n\nTags: Básico, Choque, Daño, Rayo, Control de multitudes.",
			"frFR": "Toucher une cible étourdie avec Fouet électrique réduit vos temps de recharge de 0.25 s.\n\nTags: De base, Foudre, Dégâts, Perte de contrôle.",
			"itIT": "Colpire un nemico stordito con Sferzata ad Arco riduce i tuoi tempi di recupero di 0.25 s.\n\nTags: Base, Folgore, Danni, Fulmine, Effetti debilitanti.",
			"jaJP": "スタン状態の敵に〈アーク・ラッシュ〉が命中すると、クールダウンが0.25秒短くなる。\n\nTags: 基本, 電撃, ダメージ, 稲妻, 操作障害効果.",
			"koKR": "기절한 적을 전기 채찍으로 적중하면 재사용 대기시간이 0.25초 감소합니다.\n\nTags: 기본, 감전, 피해, 번개, 군중 제어.",
			"plPL": "Trafienie ogłuszonego wroga za pomocą Bicza Wyładowań skraca twoje czasy odnowienia o 0.25 sek.\n\nTags: Podstawowe, Porażenie, Obrażenia, Piorun, Ograniczanie Kontroli.",
			"ptBR": "Atingir um inimigo atordoado com Açoite do Arco reduz suas recargas em 0.25 segundos.\n\nTags: Básica, Choque, Dano, Eletricidade, Controle de Grupo.",
			"ruRU": "Когда \"Грозовая плеть\" поражает оглушенного противника, время восстановления ваших умений сокращается на 0.25 сек.\n\nTags: Базовые, Шок, Урон, Молния, Контроль.",
			"zhCN": "用电弧鞭笞命中昏迷的敌人会使你的冷却时间缩短0.25秒。\n\nTags: 基础, 电冲, 伤害, 闪电, 群控."
},
		id: 10,
		maxPoints: 1,
		x: 1040.126,
		y: -209
	},
	"Flickering Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Enhanced Arc Lash" ],
		description: `Gain +6% Movement Speed for 5 seconds per enemy hit with Arc Lash, up to +18%.

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		nameLocalized: {
			"deDE": "Flackernde Elektropeitsche",
			"esES": "Arco eléctrico trémulo",
			"esMX": "Latigazo de Arco Eléctrico Parpadeante",
			"frFR": "Fouet électrique fulgurant",
			"itIT": "Sferzata ad Arco Intermittente",
			"jaJP": "アーク・ラッシュ(明滅)",
			"koKR": "깜빡이는 전기 채찍",
			"plPL": "Migoczący Bicz Wyładowań",
			"ptBR": "Açoite do Arco Tremeluzente",
			"ruRU": "Мерцающая грозовая плеть",
			"zhCN": "闪烁电弧鞭笞"
},
		descriptionLocalized: {
			"deDE": "Erhaltet 5 Sek. lang +6% Bewegungsgeschwindigkeit pro mit Elektropeitsche getroffenem Gegner, bis maximal +18%.\n\nTags: Grundlegend, Schock, Schaden, Blitz, Kontrollverlust.",
			"esES": "Obtienes un +6% de velocidad de movimiento durante 5 s por enemigo golpeado con Arco eléctrico, hasta un máximo de un +18%.\n\nTags: Básica, Electrocución, Daño, Rayos, Control de masas.",
			"esMX": "Obtienes un +6% de velocidad de movimiento durante 5 segundos por cada enemigo golpeado con Latigazo de Arco Eléctrico, hasta un máximo del +18%.\n\nTags: Básico, Choque, Daño, Rayo, Control de multitudes.",
			"frFR": "Votre vitesse de déplacement augmente de +6% pendant 5 s pour chaque cible touchée avec Fouet électrique, jusqu'à un maximum de +18%.\n\nTags: De base, Foudre, Dégâts, Perte de contrôle.",
			"itIT": "La velocità di movimento aumenta del +6% per 5 s per ogni nemico colpito da Sferzata ad Arco, fino a un massimo del +18%.\n\nTags: Base, Folgore, Danni, Fulmine, Effetti debilitanti.",
			"jaJP": "〈アーク・ラッシュ〉が敵1体に命中するごとに、移動速度が5秒間にわたり+6%増加する。増加量は最大で+18%。\n\nTags: 基本, 電撃, ダメージ, 稲妻, 操作障害効果.",
			"koKR": "전기 채찍이 적중한 적 하나당 5초 동안 이동 속도가 +6%만큼, 최대 +18%까지 증가합니다.\n\nTags: 기본, 감전, 피해, 번개, 군중 제어.",
			"plPL": "Zyskujesz premię +6% do szybkości ruchu na 5 sek. za każdego wroga trafionego Biczem Wyładowań, maksymalnie do +18%.\n\nTags: Podstawowe, Porażenie, Obrażenia, Piorun, Ograniczanie Kontroli.",
			"ptBR": "Recebe +6% de velocidade de movimento por 5 segundos por cada inimigo atingido com Açoite do Arco, até +18%.\n\nTags: Básica, Choque, Dano, Eletricidade, Controle de Grupo.",
			"ruRU": "За каждого противника, пораженного \"Грозовой плетью\", скорость передвижения повышается на +6% на 5 сек. вплоть до +18%.\n\nTags: Базовые, Шок, Урон, Молния, Контроль.",
			"zhCN": "电弧鞭笞每命中一名敌人,移动速度提高+6%,持续5秒,最多提高+18%。\n\nTags: 基础, 电冲, 伤害, 闪电, 群控."
},
		id: 11,
		maxPoints: 1,
		x: 759.211,
		y: -351.28
	},
	"Fire Bolt": {
		connections: [ "Basic", "Enhanced Fire Bolt" ],
		description: `Lucky Hit Chance: {#}%
Hurl a flaming bolt, dealing {10/11/12/13/14/15/16/17/18/19}% damage and Burning for {40/44/48/52/56/60/64/68/72/76}% damage over 8 seconds.

Tags: Basic, Pyromancy, Damage, Fire, Burn.

— Enchantment Effect —
Direct damage from Skills applies up to an additional {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% Burning damage over 8 seconds.`,
		nameLocalized: {
			"deDE": "Feuerblitz",
			"esES": "Descarga de fuego",
			"esMX": "Descarga Ígnea",
			"frFR": "Éclair de feu",
			"itIT": "Dardo di Fuoco",
			"jaJP": "ファイア・ボルト",
			"koKR": "화염탄",
			"plPL": "Ognista Wiązka",
			"ptBR": "Seta de Fogo",
			"ruRU": "Стрела огня",
			"zhCN": "火焰弹"
},
		descriptionLocalized: {
			"deDE": "Glückstrefferchance: {#}%\nSchleudert einen flammenden Blitz, der {10/11/12/13/14/15/16/17/18/19}% Schaden verursacht und im Verlauf von 8 Sek. für {40/44/48/52/56/60/64/68/72/76}% Schaden verbrennt.\n\nTags: Grundlegend, Pyromanie, Schaden, Feuer, Verbrennung.\n\n— Enchantment Effect —\nDirekter Schaden von Fertigkeiten verursacht im Verlauf von 8 Sek. bis zu {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% zusätzlichen Verbrennungsschaden.",
			"esES": "Probabilidad de golpe de suerte: {#}%\nArrojas una descarga flamígera que inflige {10/11/12/13/14/15/16/17/18/19}% de daño y {40/44/48/52/56/60/64/68/72/76}% de daño de quemadura durante 8 s.\n\nTags: Básica, Piromancia, Daño, Fuego, Quemadura.\n\n— Enchantment Effect —\nEl daño directo de las habilidades aplica hasta {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% más de daño de quemadura durante 8 s.",
			"esMX": "Probabilidad de golpe afortunado: {#}%\nLanzas una descarga ígnea que inflige {10/11/12/13/14/15/16/17/18/19}% de daño e inflige {40/44/48/52/56/60/64/68/72/76}% de daño de quemadura durante 8 segundos.\n\nTags: Básico, Piromancia, Daño, Fuego, Quemadura.\n\n— Enchantment Effect —\nEl daño directo de las habilidades inflige hasta {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% más de daño de quemadura durante 8 segundos.",
			"frFR": "Chances de coup de chance: {#}%\nVous lancez un trait enflammé qui inflige {10/11/12/13/14/15/16/17/18/19}% points de dégâts à l'impact et brûle les adversaires sur la durée en infligeant {40/44/48/52/56/60/64/68/72/76}% points de dégâts en 8 s.\n\nTags: De base, Pyromancie, Dégâts, Feu, Brûlure.\n\n— Enchantment Effect —\nLes dégâts directs que vous infligez avec des compétences appliquent jusqu'à {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% points de dégâts de brûlure supplémentaires en 8 s.",
			"itIT": "Probabilità di colpo fortunato: {#}%\nScagli un dardo infuocato, infliggendo {10/11/12/13/14/15/16/17/18/19}% danni, e mandi in fiamme il bersaglio, infliggendo {40/44/48/52/56/60/64/68/72/76}% danni in 8 s.\n\nTags: Base, Piromanzia, Danni, Fuoco, Bruciatura.\n\n— Enchantment Effect —\nI danni diretti delle abilità infliggono fino a {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% danni da fiamme aggiuntivi per 8 s.",
			"jaJP": "幸運の一撃発生率: {#}%\n炎の矢を発射し、{10/11/12/13/14/15/16/17/18/19}%のダメージを与え、8秒間炎上させて{40/44/48/52/56/60/64/68/72/76}%のダメージを与える。\n\nTags: 基本, 火術, ダメージ, 火炎, 炎上.\n\n— Enchantment Effect —\nスキルによる直接ダメージを与えると、8秒間かけて最大{23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}%の炎上ダメージを追加で与える。",
			"koKR": "행운의 적중 확률: {#}%\n불타는 화살을 날려 {10/11/12/13/14/15/16/17/18/19}%의 피해를 주고 대상을 불태워 8초에 걸쳐 {40/44/48/52/56/60/64/68/72/76}%의 피해를 줍니다.\n\nTags: 기본, 방화, 피해, 화염, 불태우기.\n\n— Enchantment Effect —\n기술로 직접 피해를 주면 8초에 걸쳐 최대 {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}%의 추가 연소 피해를 줍니다.",
			"plPL": "Szansa na szczęśliwy traf: {#}%\nMiotasz wiązkę płomieni, która zadaje {10/11/12/13/14/15/16/17/18/19}% pkt. obrażeń i podpala cel, zadając dodatkowo {40/44/48/52/56/60/64/68/72/76}% pkt. obrażeń w ciągu 8 sek.\n\nTags: Podstawowe, Piromancja, Obrażenia, Ogień, Podpalenie.\n\n— Enchantment Effect —\nObrażenia bezpośrednie od umiejętności wywołują dodatkowo {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% pkt. obrażeń od podpalenia w ciągu 8 sek.",
			"ptBR": "Chance de Golpe de Sorte: {#}%\nLança uma seta flamejante, causando {10/11/12/13/14/15/16/17/18/19}% de dano e queimando por {40/44/48/52/56/60/64/68/72/76}% de dano ao longo de 8 segundos.\n\nTags: Básica, Piromancia, Dano, Fogo, Queimadura.\n\n— Enchantment Effect —\nO dano direto de habilidades aplica até {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% de dano flamejante adicional ao longo de 8 segundos.",
			"ruRU": "Вероятность удачного удара: {#}%.\nВы запускаете огненный снаряд, наносящий {10/11/12/13/14/15/16/17/18/19}% ед. урона сразу и еще {40/44/48/52/56/60/64/68/72/76}% ед. урона от горения за 8 сек.\n\nTags: Базовые, Пиромантия, Урон, Огонь, Горение.\n\n— Enchantment Effect —\nПрямой урон от ваших умений поджигает противников, нанося {23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}% ед. урона от горения за 8 сек.",
			"zhCN": "幸运一击几率:{#}%\n投掷一枚火焰弹,造成{10/11/12/13/14/15/16/17/18/19}%点伤害,并使目标燃烧,在8秒内造成{40/44/48/52/56/60/64/68/72/76}%点伤害。\n\nTags: 基础, 爆焰, 伤害, 火焰, 燃烧.\n\n— Enchantment Effect —\n来自技能的直接伤害会在8秒内额外施加最多{23.2/25.6/28/30.4/32.8/35.2/37.6/40/42.4/44.8}%点燃烧伤害。"
},
		id: 12,
		maxPoints: 5,
		values: [ "20" ],
		x: 202.516,
		y: -251.18
	},
	"Enhanced Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Fire Bolt", "Glinting Fire Bolt", "Flickering Fire Bolt" ],
		description: `Fire Bolt pierces through Burning enemies.

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		nameLocalized: {
			"deDE": "Verbesserter Feuerblitz",
			"esES": "Descarga de fuego mejorada",
			"esMX": "Descarga Ígnea Potenciada",
			"frFR": "Éclair de feu renforcé",
			"itIT": "Dardo di Fuoco Rinforzato",
			"jaJP": "ファイア・ボルト(強化版)",
			"koKR": "강화된 화염탄",
			"plPL": "Wzmocniona Ognista Wiązka",
			"ptBR": "Seta de Fogo Aperfeiçoada",
			"ruRU": "Усиленная стрела огня",
			"zhCN": "强化火焰弹"
},
		descriptionLocalized: {
			"deDE": "Feuerblitz durchschlägt brennende Gegner.\n\nTags: Grundlegend, Pyromanie, Schaden, Feuer, Verbrennung.",
			"esES": "Descarga de fuego perfora a los enemigos que están quemándose.\n\nTags: Básica, Piromancia, Daño, Fuego, Quemadura.",
			"esMX": "Descarga Ígnea atraviesa a los enemigos quemados.\n\nTags: Básico, Piromancia, Daño, Fuego, Quemadura.",
			"frFR": "Trait de feu transperce les adversaires en feu.\n\nTags: De base, Pyromancie, Dégâts, Feu, Brûlure.",
			"itIT": "Dardo di Fuoco trapassa i nemici in fiamme.\n\nTags: Base, Piromanzia, Danni, Fuoco, Bruciatura.",
			"jaJP": "〈ファイア・ボルト〉が炎上している敵を貫通する。\n\nTags: 基本, 火術, ダメージ, 火炎, 炎上.",
			"koKR": "화염탄이 불타는 적을 관통합니다.\n\nTags: 기본, 방화, 피해, 화염, 불태우기.",
			"plPL": "Ognista Wiązka przebija podpalonych wrogów.\n\nTags: Podstawowe, Piromancja, Obrażenia, Ogień, Podpalenie.",
			"ptBR": "Seta de Fogo perfura inimigos em chamas.\n\nTags: Básica, Piromancia, Dano, Fogo, Queimadura.",
			"ruRU": "\"Стрела огня\" пробивает подожженных противников.\n\nTags: Базовые, Пиромантия, Урон, Огонь, Горение.",
			"zhCN": "火焰弹穿透燃烧的敌人。\n\nTags: 基础, 爆焰, 伤害, 火焰, 燃烧."
},
		id: 13,
		maxPoints: 1,
		x: 333.76,
		y: -423.11
	},
	"Glinting Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Enhanced Fire Bolt" ],
		description: `Critical Strikes with Fire Bolt increase the Burning damage you deal to the enemy by x20% for 4 seconds.

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		nameLocalized: {
			"deDE": "Funkelnder Feuerblitz",
			"esES": "Descarga de fuego centelleante",
			"esMX": "Descarga Ígnea Destellante",
			"frFR": "Éclair de feu étincelant",
			"itIT": "Dardo di Fuoco Scintillante",
			"jaJP": "ファイア・ボルト(閃光)",
			"koKR": "번쩍이는 화염탄",
			"plPL": "Iskrząca Ognista Wiązka",
			"ptBR": "Seta de Fogo Cintilante",
			"ruRU": "Сияющая стрела огня",
			"zhCN": "闪耀火焰弹"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Feuerblitz erhöhen jeglichen Verbrennungsschaden, den Ihr dem Gegner zufügt, 4 Sek. lang um x20%.\n\nTags: Grundlegend, Pyromanie, Schaden, Feuer, Verbrennung.",
			"esES": "Los golpes críticos de Descarga de fuego aumentan el daño de quemadura que infliges al enemigo un x20% durante 4 s.\n\nTags: Básica, Piromancia, Daño, Fuego, Quemadura.",
			"esMX": "Los golpes críticos con Descarga Ígnea aumentan el daño de quemadura infligido al enemigo un x20% durante 4 segundos.\n\nTags: Básico, Piromancia, Daño, Fuego, Quemadura.",
			"frFR": "Les coups critiques avec Trait de feu augmentent les dégâts de brûlure que vous infligez à la cible de x20% pendant 4 s.\n\nTags: De base, Pyromancie, Dégâts, Feu, Brûlure.",
			"itIT": "I colpi critici inflitti con Dardo di Fuoco aumentano i danni da fiamme che infliggi al nemico del x20% per 4 s.\n\nTags: Base, Piromanzia, Danni, Fuoco, Bruciatura.",
			"jaJP": "〈ファイア・ボルト〉でクリティカルヒットを与えると、その敵に与える炎上ダメージが4 秒間にわたりx20%増加する。\n\nTags: 基本, 火術, ダメージ, 火炎, 炎上.",
			"koKR": "화염탄이 극대화로 적중하면 4초 동안 자신이 적에게 주는 연소 피해가 x20% 증가합니다.\n\nTags: 기본, 방화, 피해, 화염, 불태우기.",
			"plPL": "Trafienia krytyczne z użyciem Ognistej Wiązki zwiększają zadawane przez ciebie obrażenia od podpalenia o x20% na 4 sek.\n\nTags: Podstawowe, Piromancja, Obrażenia, Ogień, Podpalenie.",
			"ptBR": "Acertos críticos com Seta de Fogo aumentam o dano flamejante recebido pelo alvo em 20% por 4 segundos.\n\nTags: Básica, Piromancia, Dano, Fogo, Queimadura.",
			"ruRU": "Критические удары \"Стрелы огня\" увеличивают получаемый целью урон от горения на x20% на 4 сек.\n\nTags: Базовые, Пиромантия, Урон, Огонь, Горение.",
			"zhCN": "火焰弹暴击会使你对敌人造成的燃烧伤害提高x20%,持续4秒。\n\nTags: 基础, 爆焰, 伤害, 火焰, 燃烧."
},
		id: 14,
		maxPoints: 1,
		x: 586.526,
		y: -457.72
	},
	"Flickering Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Enhanced Fire Bolt" ],
		description: `Fire Bolt generates 2 Mana when hitting a Burning enemy.

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		nameLocalized: {
			"deDE": "Flackernder Feuerblitz",
			"esES": "Descarga de fuego trémula",
			"esMX": "Descarga Ígnea Parpadeante",
			"frFR": "Éclair de feu fulgurant",
			"itIT": "Dardo di Fuoco Intermittente",
			"jaJP": "ファイア・ボルト(明滅)",
			"koKR": "깜빡이는 화염탄",
			"plPL": "Migocząca Ognista Wiązka",
			"ptBR": "Seta de Fogo Tremeluzente",
			"ruRU": "Мерцающая стрела огня",
			"zhCN": "闪烁火焰弹"
},
		descriptionLocalized: {
			"deDE": "Feuerblitz erzeugt 2 Mana, wenn die Fertigkeit einen brennenden Gegner trifft.\n\nTags: Grundlegend, Pyromanie, Schaden, Feuer, Verbrennung.",
			"esES": "Descarga de fuego genera 2 de maná al golpear a un enemigo que esté quemándose.\n\nTags: Básica, Piromancia, Daño, Fuego, Quemadura.",
			"esMX": "Descarga Ígnea genera 2 de maná cuando golpea a un enemigo que se quema.\n\nTags: Básico, Piromancia, Daño, Fuego, Quemadura.",
			"frFR": "Lorsqu'il touche une cible en feu, Trait de feu génère 2 points de mana.\n\nTags: De base, Pyromancie, Dégâts, Feu, Brûlure.",
			"itIT": "Dardo di Fuoco rigenera 2 mana quando colpisce un nemico in fiamme.\n\nTags: Base, Piromanzia, Danni, Fuoco, Bruciatura.",
			"jaJP": "炎上している敵に〈ファイア・ボルト〉が命中すると、2のマナを発生させる。\n\nTags: 基本, 火術, ダメージ, 火炎, 炎上.",
			"koKR": "화염탄이 불타는 적에게 적중하면 마나를 2 회복합니다.\n\nTags: 기본, 방화, 피해, 화염, 불태우기.",
			"plPL": "Ognista Wiązka przywraca ci 2 pkt. many, kiedy trafia podpalonego wroga.\n\nTags: Podstawowe, Piromancja, Obrażenia, Ogień, Podpalenie.",
			"ptBR": "Seta de Fogo gera 2 de mana ao atingir um inimigo que está queimando.\n\nTags: Básica, Piromancia, Dano, Fogo, Queimadura.",
			"ruRU": "\"Стрела огня\" дает 2 ед. маны, когда поражает горящего противника.\n\nTags: Базовые, Пиромантия, Урон, Огонь, Горение.",
			"zhCN": "火焰弹命中燃烧的敌人时,会生成2点法力。\n\nTags: 基础, 爆焰, 伤害, 火焰, 燃烧."
},
		id: 15,
		maxPoints: 1,
		x: 249.014,
		y: -546.625
	},
};

sorcererData["Core"] = {
	"Charged Bolts": {
		connections: [ "Core", "Enhanced Charged Bolts" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Release 5 bolts of lightning that course along the ground in an erratic pattern, dealing {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% damage each.

Tags: Core, Shock, Damage, Lightning, Mana.

— Enchantment Effect —
When you Stun an enemy, there's a 40% chance to release 3 Charged Bolts from them.`,
		nameLocalized: {
			"deDE": "Comboblitze",
			"esES": "Descarga de energía",
			"esMX": "Centellas",
			"frFR": "Décharge électrique",
			"itIT": "Scariche Elettriche",
			"jaJP": "チャージ・ボルト",
			"koKR": "번개 줄기",
			"plPL": "Wiązki Błyskawic",
			"ptBR": "Setas Carregadas",
			"ruRU": "Электрические разряды",
			"zhCN": "电荷弹"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nEntfesselt 5 Blitze, die sich in unvorhersehbarer Richtung über den Boden bewegen und jeweils {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% Schaden verursachen.\n\nTags: Basis, Schock, Schaden, Blitz, Mana.\n\n— Enchantment Effect —\nWenn Ihr einen Gegner betäubt, besteht eine Chance von 40%, 3 Comboblitze aus ihm zu entfesseln.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nLiberas 5 descargas de rayos que recorren el suelo de forma errática e infligen {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% de daño cada una.\n\nTags: Principal, Electrocución, Daño, Rayos, Maná.\n\n— Enchantment Effect —\nCuando aturdes a un enemigo, hay un 40% de probabilidad de que libere una 3 Descarga de energía.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nLiberas 5 rayos que circulan por el suelo de forma errática e infligen {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% de daño cada uno.\n\nTags: Principal, Choque, Daño, Rayo, Maná.\n\n— Enchantment Effect —\nCuando aturdes a un enemigo, hay un 40% de probabilidad de lanzar 3 Centellas.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous libérez 5 traits de foudre qui se propagent sur le sol de manière erratique et infligent chacun {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% points de dégâts.\n\nTags: Principale, Foudre, Dégâts, Mana.\n\n— Enchantment Effect —\nLorsque vous étourdissez une cible, il y a 40% de chances qu'elle libère 3 traits de foudre.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nRilasci 5 scariche elettriche che corrono lungo il terreno secondo uno schema casuale, infliggendo {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% danni ciascuna.\n\nTags: Primaria, Folgore, Danni, Fulmine, Mana.\n\n— Enchantment Effect —\nQuando stordisci un nemico, c'è il 40% di probabilità che sprigioni 3 Scariche Elettriche.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\nランダムなパターンで地面を走る稲妻を5本放ち、それぞれが{17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}%のダメージを与える。\n\nTags: コア, 電撃, ダメージ, 稲妻, マナ.\n\n— Enchantment Effect —\n敵をスタンさせると、その敵から40%の確率で3本の〈チャージ・ボルト〉が放たれる。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n바닥을 따라 종잡을 수 없는 양상으로 흐르는 번개 줄기를 5개 방출합니다. 번개 줄기는 각각 {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}%의 피해를 줍니다.\n\nTags: 핵심, 감전, 피해, 번개, 마나.\n\n— Enchantment Effect —\n적을 기절시킬 때마다 40% 확률로 해당 적으로부터 번개 줄기를 3개 내뿜습니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nWyzwalasz wiązki błyskawic (5), które przemieszczają się po ziemi w nieregularny sposób. Każda z nich zadaje {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% pkt. obrażeń.\n\nTags: Główne, Porażenie, Obrażenia, Piorun, Mana.\n\n— Enchantment Effect —\nPo ogłuszeniu wroga istnieje 40% szans na wyzwolenie z niego Wiązek Błyskawic (3).",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte: {#}%\nLibera 5 setas elétricas que percorrem o solo em um padrão errático. Cada uma causa {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% de dano.\n\nTags: Principal, Choque, Dano, Eletricidade, Mana.\n\n— Enchantment Effect —\nAo atordoar um inimigo, há 40% de chance de lançar 3 Setas Carregadas dele.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы выпускаете 5 молнии:молний, которые хаотично перемещаются по земле, нанося по {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% ед. урона.\n\nTags: Основные, Шок, Урон, Молния, Мана.\n\n— Enchantment Effect —\nКогда вы оглушаете противника, из его тела с вероятностью 40% вырывается 3 \"Электрических разряда\":\"Электрических разрядов\".",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n在地面上施放5枚轨迹不规则的闪电弹,每枚造成{17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}%点伤害。\n\nTags: 核心, 电冲, 伤害, 闪电, 法力.\n\n— Enchantment Effect —\n当你击晕一名敌人时,有40%几率从其身上放出3枚电荷弹。"
},
		id: 16,
		maxPoints: 5,
		values: [ "40", "25" ],
		x: 133.995,
		y: 322.79
	},
	"Enhanced Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Charged Bolts", "Greater Charged Bolts", "Destructive Charged Bolts" ],
		description: `Hitting an enemy at least 3 times with same cast of Charged Bolts releases a lightning nova, dealing 15% damage to enemies around them.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserte Comboblitze",
			"esES": "Descarga de energía mejorada",
			"esMX": "Centellas Potenciadas",
			"frFR": "Décharge électrique renforcée",
			"itIT": "Scariche Elettriche Rinforzate",
			"jaJP": "チャージ・ボルト(強化版)",
			"koKR": "강화된 번개 줄기",
			"plPL": "Wzmocnione Wiązki Błyskawic",
			"ptBR": "Setas Carregadas Aperfeiçoadas",
			"ruRU": "Усиленные электрические разряды",
			"zhCN": "强化电荷弹"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen Gegner mindestens 3-mal mit demselben Wirken von Comboblitze trefft, wird eine Blitznova entfesselt, die Gegnern um sie herum 15% Schaden zufügt.\n\nTags: Basis, Schock, Schaden, Blitz, Mana.",
			"esES": "Al golpear a un enemigo al menos 3 veces con la misma Descarga de energía, se libera una nova de rayos que inflige 15% de daño a los enemigos a su alrededor.\n\nTags: Principal, Electrocución, Daño, Rayos, Maná.",
			"esMX": "Golpear a un enemigo al menos 3 veces con el mismo lanzamiento de Centellas lanza una nova de rayo que inflige 15% de daño de rayo a los enemigos a su alrededor.\n\nTags: Principal, Choque, Daño, Rayo, Maná.",
			"frFR": "Toucher une cible au moins 3 fois en une seule utilisation de Traits de foudre déclenche une nova de foudre qui inflige 15% points de dégâts aux adversaires à proximité.\n\nTags: Principale, Foudre, Dégâts, Mana.",
			"itIT": "Colpire un nemico almeno 3 volte con lo stesso lancio di Scariche Elettriche rilascia una nova del fulmine che infligge 15% danni ai nemici che lo circondano.\n\nTags: Primaria, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "一度の〈チャージ・ボルト〉の使用で1体の敵に少なくとも3回命中するとライトニング・ノヴァが放出され、周囲の敵に15% のダメージを与える。\n\nTags: コア, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "번개 줄기를 한 번 시전하여 적 한 마리를 3번 이상 적중시키면 주위 적들에게 15%의 피해를 줍니다.\n\nTags: 핵심, 감전, 피해, 번개, 마나.",
			"plPL": "Trafienie wroga co najmniej 3 razy tym samym użyciem Wiązek Błyskawic uwalnia Novę Błyskawic, która zadaje celom wokół 15% pkt. obrażeń.\n\nTags: Główne, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "Acertar um inimigo pelo menos 3 vezes com o mesmo lançamento de Setas Carregadas libera uma nova elétrica, causando 15% de dano a inimigos ao redor dele.\n\nTags: Principal, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "Когда \"Электрические разряды\" поражают одного противника 3 раза:раз за одно применение, срабатывает вспышка молнии, наносящая врагам вокруг 15% ед. урона.\n\nTags: Основные, Шок, Урон, Молния, Мана.",
			"zhCN": "使用同一次技能施放的电荷弹命中一个敌人至少3次,会释放闪电新星,对附近的敌人造成15%点伤害。\n\nTags: 核心, 电冲, 伤害, 闪电, 法力."
},
		id: 17,
		maxPoints: 1,
		x: 198.23,
		y: 523.06
	},
	"Greater Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Enhanced Charged Bolts" ],
		description: `Charged Bolts deals x25% increased damage to Stunned enemies.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Große Comboblitze",
			"esES": "Descarga de energía superior",
			"esMX": "Centellas Mayores",
			"frFR": "Décharge électrique supérieure",
			"itIT": "Scariche Elettriche Maggiori",
			"jaJP": "チャージ・ボルト(増大)",
			"koKR": "상급 번개 줄기",
			"plPL": "Większe Wiązki Błyskawic",
			"ptBR": "Setas Carregadas Superiores",
			"ruRU": "Великие электрические разряды",
			"zhCN": "强效电荷弹"
},
		descriptionLocalized: {
			"deDE": "Comboblitze fügt betäubten Gegnern x25% mehr Schaden zu.\n\nTags: Basis, Schock, Schaden, Blitz, Mana.",
			"esES": "Descarga de energía inflige un x25% más de daño a enemigos aturdidos.\n\nTags: Principal, Electrocución, Daño, Rayos, Maná.",
			"esMX": "Centellas inflige un x25% más de daño a los enemigos aturdidos.\n\nTags: Principal, Choque, Daño, Rayo, Maná.",
			"frFR": "Les traits de foudre infligent x25% de dégâts supplémentaires aux cibles étourdies.\n\nTags: Principale, Foudre, Dégâts, Mana.",
			"itIT": "Scariche Elettriche infligge il x25% di danni aggiuntivi ai nemici storditi.\n\nTags: Primaria, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "〈チャージ・ボルト〉がスタン状態の敵に与えるダメージがx25%増加する。\n\nTags: コア, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "번개 줄기가 기절한 적에게 주는 피해가 x25% 증가합니다.\n\nTags: 핵심, 감전, 피해, 번개, 마나.",
			"plPL": "Wiązki Błyskawic zadają obrażenia zwiększone o x25% ogłuszonym celom.\n\nTags: Główne, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "Setas Carregadas causam 25% de dano aumentado a inimigos atordoados.\n\nTags: Principal, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "\"Электрические разряды\" наносят на x25% больше урона оглушенным противникам.\n\nTags: Основные, Шок, Урон, Молния, Мана.",
			"zhCN": "电荷弹对昏迷的敌人造成的伤害提高x25%。\n\nTags: 核心, 电冲, 伤害, 闪电, 法力."
},
		id: 18,
		maxPoints: 1,
		x: 92.625,
		y: 636.325
	},
	"Destructive Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Enhanced Charged Bolts" ],
		description: `Hitting an enemy with Charged Bolts reduces their damage dealt by 20% for 3 seconds.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Zerstörerische Comboblitze",
			"esES": "Descarga de energía destructora",
			"esMX": "Centellas Destructivas",
			"frFR": "Décharge électrique destructrice",
			"itIT": "Scariche Elettriche Distruttive",
			"jaJP": "チャージ・ボルト(破滅)",
			"koKR": "파괴적인 번개 줄기",
			"plPL": "Destrukcyjne Wiązki Błyskawic",
			"ptBR": "Setas Carregadas Destrutivas",
			"ruRU": "Разрушительные электрические разряды",
			"zhCN": "毁灭电荷弹"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen Gegner mit Comboblitzen trefft, wird dessen verursachter Schaden 3 Sek. lang um 20% reduziert.\n\nTags: Basis, Schock, Schaden, Blitz, Mana.",
			"esES": "Golpear a un enemigo con Descarga de energía reduce el daño que ese enemigo inflige un 20% durante 3 s.\n\nTags: Principal, Electrocución, Daño, Rayos, Maná.",
			"esMX": "Golpear a un enemigo con Centellas reduce un 20% su daño infligido durante 3 segundos.\n\nTags: Principal, Choque, Daño, Rayo, Maná.",
			"frFR": "Toucher une cible avec Traits de foudre réduit les dégâts qu'elle inflige de 20% pendant 3 s.\n\nTags: Principale, Foudre, Dégâts, Mana.",
			"itIT": "Colpire un nemico almeno con Scariche Elettriche ne riduce i danni inflitti del 20% per 3 s.\n\nTags: Primaria, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "〈チャージ・ボルト〉が命中した敵は、3秒間にわたり与えるダメージが20%減少する。\n\nTags: コア, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "번개 줄기를 적에게 적중시키면 3초 동안 해당 적이 주는 피해가 20% 감소합니다.\n\nTags: 핵심, 감전, 피해, 번개, 마나.",
			"plPL": "Trafienie wroga Wiązkami Błyskawic zmniejsza zadawane przez niego obrażenia o 20% na 3 sek.\n\nTags: Główne, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "Acertar um inimigo com Setas Carregadas reduz o dano causado por ele em 20% por 3 segundos.\n\nTags: Principal, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "Когда \"Электрические разряды\" поражают противника, наносимый им урон уменьшается на 20% на 3 сек.\n\nTags: Основные, Шок, Урон, Молния, Мана.",
			"zhCN": "用电荷弹命中一名敌人会使其造成的伤害降低20%,持续3秒。\n\nTags: 核心, 电冲, 伤害, 闪电, 法力."
},
		id: 19,
		maxPoints: 1,
		x: 384.92,
		y: 599.82
	},
	"Frozen Orb": {
		connections: [ "Core", "Enhanced Frozen Orb" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Unleash an orb that Chills for 34% and expels piercing shards, dealing a total of {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% damage. Upon expiration, Frozen Orb explodes, dealing {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% damage and Chilling enemies for 8.7%.

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.

— Enchantment Effect —
Whenever you cast a Non-Basic Skill, you have a 20% chance to launch a Frozen Orb at a Nearby enemy.`,
		nameLocalized: {
			"deDE": "Gefrorene Kugel",
			"esES": "Orbe congelado",
			"esMX": "Orbe Gélido",
			"frFR": "Orbe gelé",
			"itIT": "Globo di Gelo",
			"jaJP": "フローズン・オーブ",
			"koKR": "얼음 보주",
			"plPL": "Zamarznięta Kula",
			"ptBR": "Orbe Congelado",
			"ruRU": "Морозная сфера",
			"zhCN": "冰霜球"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nEntfesselt eine Kugel, die für 34% unterkühlt und durchschlagende Splitter ausstößt, die insgesamt {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% Schaden verursachen. Nach Ablauf explodiert Gefrorene Kugel, verursacht {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% Schaden und unterkühlt Gegner für 8.7%.\n\nTags: Basis, Frost, Unterkühlen, Schaden, Kälte, Kontrollverlust, Mana.\n\n— Enchantment Effect —\nJedes Mal, wenn Ihr eine Fertigkeit einsetzt, die keine Grundfertigkeit ist, verfügt Ihr über eine Chance von 20%, eine Gefrorene Kugel auf einen Gegner in der Nähe zu schleudern.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nLanzas un orbe que hiela un 34% y expele unas esquirlas perforadoras que infligen un total de {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% de daño. Cuando expira, Orbe congelado explota, inflige {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% de daño y hiela un 8.7% a los enemigos.\n\nTags: Principal, Escarcha, Helada, Daño, Frío, Control de masas, Maná.\n\n— Enchantment Effect —\nCuando lanzas una habilidad no básica, tienes un 20% de probabilidad de lanzar un Orbe congelado a un enemigo cercano.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nLiberas un orbe que hiela un 34% y expulsa fragmentos perforantes que infligen {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% de daño total. Al caducar, Orbe Gélido explota, inflige {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% de daño y hiela a los enemigos un 8.7%.\n\nTags: Principal, Congelar, Helar, Daño, Frío, Control de multitudes, Maná.\n\n— Enchantment Effect —\nCuando lanzas una habilidad no básica, tienes un 20% de probabilidad de lanzar un Orbe Gélido a un enemigo cercano.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous lancez un orbe qui glace à hauteur de 34% et projette des éclats perçants qui infligent {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% points de dégâts au total. À son terme, Orbe gelé explose, ce qui inflige {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% points de dégâts aux adversaires et les glace à hauteur de 8.7%.\n\nTags: Principale, Givre, Glace, Dégâts, Froid, Perte de contrôle, Mana.\n\n— Enchantment Effect —\nChaque fois que vous utilisez une compétence, hors compétences de base, vous avez 20% de chances de lancer un orbe gelé sur une cible à proximité.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nRilasci un globo che raggela del 34% ed espelle schegge perforanti, infliggendo un totale di {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% danni. Al termine, il Globo di Gelo esplode, infliggendo {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% danni e raggelando i nemici del 8.7%.\n\nTags: Primaria, Gelo, Raggelamento, Danni, Freddo, Effetti debilitanti, Mana.\n\n— Enchantment Effect —\nQuando lanci un'abilità non base, hai una probabilità del 20% di lanciare un Globo di Gelo contro un nemico vicino.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\n34%の冷気効果を与える球体を放ち、貫通能力のある欠片を放出させ、合計で{31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}%のダメージを与える。効果時間が終了した〈フローズン・オーブ〉は爆発し、敵に{29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}%のダメージと、8.7%の冷気効果を与える。\n\nTags: コア, 寒気, 冷気, ダメージ, 操作障害効果, マナ.\n\n— Enchantment Effect —\n非基本cスキルを使うと、20%の確率で付近の敵に〈フローズン・オーブ〉を放つ。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n적에게 34%의 오한을 느끼게 하고 관통하는 파편을 내뿜어 총 {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}%의 피해를 주는 보주를 발사합니다. 지속시간이 끝나면 얼음 보주가 폭발하여 {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}%의 피해를 주고 적에게 8.7%의 오한 을 느끼게 합니다.\n\nTags: 핵심, 서리, 오한, 피해, 냉기, 군중 제어, 마나.\n\n— Enchantment Effect —\n기본 기술이 아닌 기술을 시전할 때마다 20% 확률로 근처의 적에게 얼음 보주를 발사합니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nUwalniasz kulę, która wyziębia cel o 34% i wystrzeliwuje przeszywające odłamki, które zadają w sumie {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% pkt. obrażeń. Po zakończeniu działania Zamarznięta Kula wybucha i zadaje {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% pkt. obrażeń oraz wyziębia wrogów o 8.7%.\n\nTags: Główne, Mróz, Wyziębienie, Obrażenia, Zimno, Ograniczanie Kontroli, Mana.\n\n— Enchantment Effect —\nZa każdym razem, gdy używasz umiejętności innej niż Podstawowa, masz 20% szans na wystrzelenie Zamarzniętej Kuli w pobliskiego wroga.",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte: {#}%\nLibera um orbe que gela por 34% e expele estilhaços perfurantes, causando um total de {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% de dano. Ao expirar, Orbe Congelado explode, causando {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% de dano e aplicando gelidez a inimigos por 8.7%.\n\nTags: Principal, Geleira, Gelidez, Dano, Gelo, Controle de Grupo, Mana.\n\n— Enchantment Effect —\nSempre que lançar uma habilidade não básica, você tem 20% de chance de lançar um Orbe Congelado em um inimigo próximo.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы создаете морозную сферу, которая заставляет цели коченеть, замедляя на 34%, и выпускает пронзающие осколки, в совокупности наносящие {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% ед. урона. По завершении действия \"Морозная сфера\" взрывается, нанося {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% ед. урона, и заставляя противников коченеть, замедляя на 8.7%.\n\nTags: Основные, Мороз, Окоченение, Урон, Холод, Контроль, Мана.\n\n— Enchantment Effect —\nПри применении любых умений, кроме базовых, вы с вероятностью 20% выпускаете в ближайшего противника \"Морозную сферу\".",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n施放一颗冰球,冻伤敌人34%,并放出尖锐碎片,造成总计{31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}%点伤害。冰霜球会在持续时间结束后爆炸,造成{29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}%点伤害,并冻伤敌人8.7%。\n\nTags: 核心, 寒霜, 冻伤, 伤害, 冰霜, 群控, 法力.\n\n— Enchantment Effect —\n每当你施放非基础技能时,有20%几率向一名附近的敌人发射一颗冰霜球。"
},
		id: 20,
		maxPoints: 5,
		values: [ "40", "20" ],
		x: -639.26,
		y: -93.76
	},
	"Enhanced Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Destructive Frozen Orb", "Greater Frozen Orb", "Frozen Orb" ],
		description: `When cast above 50 Mana, Frozen Orb's explosion damage is increased by x30%.

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserte Gefrorene Kugel",
			"esES": "Orbe congelado mejorado",
			"esMX": "Orbe Gélido Potenciado",
			"frFR": "Orbe gelé renforcé",
			"itIT": "Globo di Gelo Rinforzato",
			"jaJP": "フローズン・オーブ(強化版)",
			"koKR": "강화된 얼음 보주",
			"plPL": "Wzmocniona Zamarznięta Kula",
			"ptBR": "Orbe Congelado Aperfeiçoado",
			"ruRU": "Усиленная морозная сфера",
			"zhCN": "强化冰霜球"
},
		descriptionLocalized: {
			"deDE": "Wenn Gefrorene Kugel mit mehr als 50 Mana gewirkt wird, erhöht sich der Schaden der Explosion um x30%.\n\nTags: Basis, Frost, Unterkühlen, Schaden, Kälte, Kontrollverlust, Mana.",
			"esES": "Cuando se lanza con más de 50 de maná, el daño de la explosión de Orbe congelado aumenta un x30%.\n\nTags: Principal, Escarcha, Helada, Daño, Frío, Control de masas, Maná.",
			"esMX": "Cuando lanzas Orbe Gélido con más de 50 de maná, el daño de la explosión del orbe aumenta un x30%.\n\nTags: Principal, Congelar, Helar, Daño, Frío, Control de multitudes, Maná.",
			"frFR": "Si vous avez plus de 50 points de mana lorsque vous utilisez Orbe gelé, les dégâts infligés par son explosion sont augmentés de x30%.\n\nTags: Principale, Givre, Glace, Dégâts, Froid, Perte de contrôle, Mana.",
			"itIT": "Quando viene lanciato avendo almeno 50 mana, i danni dell'esplosione di Globo di Gelo aumentano del x30%.\n\nTags: Primaria, Gelo, Raggelamento, Danni, Freddo, Effetti debilitanti, Mana.",
			"jaJP": "マナが50より多い状態で使用すると、〈フローズン・オーブ〉の爆発ダメージがx30%増加する。\n\nTags: コア, 寒気, 冷気, ダメージ, 操作障害効果, マナ.",
			"koKR": "마나가 50|1을;를; 초과할 때 시전하면, 얼음 보주의 폭발 공격력이 x30% 증가합니다.\n\nTags: 핵심, 서리, 오한, 피해, 냉기, 군중 제어, 마나.",
			"plPL": "Jeśli podczas użycia Zamarzniętej Kuli masz więcej niż 50 pkt. many, obrażenia od wybuchu są zwiększone o x30%.\n\nTags: Główne, Mróz, Wyziębienie, Obrażenia, Zimno, Ograniczanie Kontroli, Mana.",
			"ptBR": "Ao lançar com mais de 50 de mana, a explosão de Orbe Congelado é aumentada em 30%.\n\nTags: Principal, Geleira, Gelidez, Dano, Gelo, Controle de Grupo, Mana.",
			"ruRU": "Если при применении \"Морозной сферы\" у вас больше 50 ед. маны, урон от взрыва увеличивается на x30%.\n\nTags: Основные, Мороз, Окоченение, Урон, Холод, Контроль, Мана.",
			"zhCN": "法力大于50点时,施放的冰霜球爆炸伤害提高x30%。\n\nTags: 核心, 寒霜, 冻伤, 伤害, 冰霜, 群控, 法力."
},
		id: 21,
		maxPoints: 1,
		x: -965.455,
		y: -151.935
	},
	"Destructive Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Enhanced Frozen Orb" ],
		description: `Frozen Orb's explosion restores 5 Mana when hitting a Frozen enemy.

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		nameLocalized: {
			"deDE": "Zerstörerische Gefrorene Kugel",
			"esES": "Orbe congelado destructor",
			"esMX": "Orbe Gélido Destructivo",
			"frFR": "Orbe gelé destructeur",
			"itIT": "Globo di Gelo Distruttivo",
			"jaJP": "フローズン・オーブ(破滅)",
			"koKR": "파괴적인 얼음 보주",
			"plPL": "Destruktywna Zamarznięta Kula",
			"ptBR": "Orbe Congelado Destrutivo",
			"ruRU": "Разрушительная морозная сфера",
			"zhCN": "毁灭冰霜球"
},
		descriptionLocalized: {
			"deDE": "Die Explosion von Gefrorene Kugel stellt 5 Mana wieder her, wenn sie einen eingefrorenen Gegner trifft.\n\nTags: Basis, Frost, Unterkühlen, Schaden, Kälte, Kontrollverlust, Mana.",
			"esES": "La explosión de Orbe congelado restaura 5 de maná al golpear a un enemigo congelado.\n\nTags: Principal, Escarcha, Helada, Daño, Frío, Control de masas, Maná.",
			"esMX": "La explosión de Orbe Gélido restaura 5 de maná al golpear a un enemigo congelado.\n\nTags: Principal, Congelar, Helar, Daño, Frío, Control de multitudes, Maná.",
			"frFR": "L'explosion d'Orbe gelé restaure 5 points de mana lorsqu'elle touche une cible gelée.\n\nTags: Principale, Givre, Glace, Dégâts, Froid, Perte de contrôle, Mana.",
			"itIT": "L'esplosione di Globo di Gelo rigenera 5 mana quando colpisce un nemico congelato.\n\nTags: Primaria, Gelo, Raggelamento, Danni, Freddo, Effetti debilitanti, Mana.",
			"jaJP": "〈フローズン・オーブ〉の爆発が凍結状態の敵に命中すると、5のマナを回復する。\n\nTags: コア, 寒気, 冷気, ダメージ, 操作障害効果, マナ.",
			"koKR": "얼음 보주의 폭발이 빙결 상태의 적에게 적중하면 마나가 5 회복됩니다.\n\nTags: 핵심, 서리, 오한, 피해, 냉기, 군중 제어, 마나.",
			"plPL": "Wybuch Zamarzniętej Kuli przywraca 5 pkt. many, kiedy trafia zamrożonego wroga.\n\nTags: Główne, Mróz, Wyziębienie, Obrażenia, Zimno, Ograniczanie Kontroli, Mana.",
			"ptBR": "A explosão de Orbe Congelado restaura 5 de mana ao atingir um inimigo congelado.\n\nTags: Principal, Geleira, Gelidez, Dano, Gelo, Controle de Grupo, Mana.",
			"ruRU": "Взрыв \"Морозной сферы\" восполняет 5 ед. маны, когда поражает замороженного противника.\n\nTags: Основные, Мороз, Окоченение, Урон, Холод, Контроль, Мана.",
			"zhCN": "冰霜球爆炸命中一名冻结的敌人时恢复5点法力。\n\nTags: 核心, 寒霜, 冻伤, 伤害, 冰霜, 群控, 法力."
},
		id: 22,
		maxPoints: 1,
		x: -1219.085,
		y: -125.825
	},
	"Greater Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Enhanced Frozen Orb" ],
		description: `Frozen Orb's explosion has a 25% chance to make all enemies hit Vulnerable for 2 seconds. Frozen Orb always makes Frozen enemies Vulnerable.

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		nameLocalized: {
			"deDE": "Große Gefrorene Kugel",
			"esES": "Orbe congelado superior",
			"esMX": "Orbe Gélido Mayor",
			"frFR": "Orbe gelé supérieur",
			"itIT": "Sfera di Gelo Maggiore",
			"jaJP": "フローズン・オーブ(増大)",
			"koKR": "상급 얼음 보주",
			"plPL": "Większa Zamarznięta Kula",
			"ptBR": "Orbe Congelado Superior",
			"ruRU": "Великая морозная сфера",
			"zhCN": "强效冰霜球"
},
		descriptionLocalized: {
			"deDE": "Die Explosion von Gefrorene Kugel verfügt über eine Chance von 25%, alle getroffenen Gegner 2 Sek. lang verwundbar zu machen. Gefrorene Kugel macht eingefrorene Gegner immer verwundbar.\n\nTags: Basis, Frost, Unterkühlen, Schaden, Kälte, Kontrollverlust, Mana.",
			"esES": "La explosión de Orbe congelado tiene un 25% de probabilidad de volver vulnerables a todos los enemigos golpeados durante 2 s. Orbe congelado siempre vuelve vulnerables a los enemigos congelados.\n\nTags: Principal, Escarcha, Helada, Daño, Frío, Control de masas, Maná.",
			"esMX": "La explosión de Orbe Gélido tiene un 25% de probabilidad de volver vulnerables a todos los enemigos golpeados durante 2 segundos. Orbe Gélido siempre vuelve vulnerables a los enemigos congelados.\n\nTags: Principal, Congelar, Helar, Daño, Frío, Control de multitudes, Maná.",
			"frFR": "L'explosion d'Orbe gelé a 25% de chances de rendre toutes les cibles touchées vulnérables pendant 2 s. Orbe gelé rend toujours vulnérables les cibles qui sont gelées.\n\nTags: Principale, Givre, Glace, Dégâts, Froid, Perte de contrôle, Mana.",
			"itIT": "L'esplosione di Globo di Gelo ha una probabilità del 25% di rendere tutti i nemici colpiti vulnerabili per 2 s. Sfera di Gelo rende sempre i nemici congelati vulnerabili.\n\nTags: Primaria, Gelo, Raggelamento, Danni, Freddo, Effetti debilitanti, Mana.",
			"jaJP": "〈フローズン・オーブ〉の爆発が25%の確率で、命中したすべての敵を2秒間にわたり脆弱状態にする。〈フローズン・オーブ〉は凍結状態の敵を必ず脆弱状態にする。\n\nTags: コア, 寒気, 冷気, ダメージ, 操作障害効果, マナ.",
			"koKR": "얼음 보주의 폭발이 25% 확률로 적을 2초 동안 취약하게 만듭니다. 얼음 보주가 빙결 상태의 적을 언제나 취약하게 만듭니다.\n\nTags: 핵심, 서리, 오한, 피해, 냉기, 군중 제어, 마나.",
			"plPL": "Wybuch Zamarzniętej Kuli ma 25% szans na odsłonięcie wszystkich trafionych wrogów na 2 sek. Zamarznięta Kula sprawia, że zamrożeni wrogowie stają się odsłonięci.\n\nTags: Główne, Mróz, Wyziębienie, Obrażenia, Zimno, Ograniczanie Kontroli, Mana.",
			"ptBR": "A explosão de Orbe Congelado tem 25% de chance de tornar todos os inimigos atingidos vulneráveis por 2 segundos. Orbe Congelado sempre deixará os inimigos congelados vulneráveis.\n\nTags: Principal, Geleira, Gelidez, Dano, Gelo, Controle de Grupo, Mana.",
			"ruRU": "Взрыв \"Морозной сферы\" с вероятностью 25% делает пораженных противников уязвимыми на 2 сек. \"Морозная сфера\" всегда делает уязвимыми замороженных противников.\n\nTags: Основные, Мороз, Окоченение, Урон, Холод, Контроль, Мана.",
			"zhCN": "冰霜球爆炸时有25%几率使命中的所有敌人陷入易伤状态,持续2秒。冰霜球总是会使冻结的敌人陷入易伤状态。\n\nTags: 核心, 寒霜, 冻伤, 伤害, 冰霜, 群控, 法力."
},
		id: 23,
		maxPoints: 1,
		x: -1066.555,
		y: -284.32
	},
	"Incinerate": {
		connections: [ "Core", "Enhanced Incinerate" ],
		description: `Mana Cost: {#} per second
Lucky Hit Chance: {#}%
Channel a beam of fire, Burning enemies for {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% damage per second. Damage per second increases over 4 seconds, up to {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.

— Enchantment Effect —
Every 20 seconds, a serpent spawns and Incinerates enemies for 6 seconds.`,
		nameLocalized: {
			"deDE": "Flammentod",
			"esES": "Incinerar",
			"esMX": "Incinerar",
			"frFR": "Incinération",
			"itIT": "Incenerimento",
			"jaJP": "炎打",
			"koKR": "소각",
			"plPL": "Spopielenie",
			"ptBR": "Incinerar",
			"ruRU": "Испепеление",
			"zhCN": "焚烧"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#} pro Sekunde\nGlückstrefferchance: {#}%\nKanalisiert einen Feuerstrahl, der Gegner für {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% Schaden pro Sekunde verbrennt. Der Schaden pro Sekunde erhöht sich im Verlauf von 4 Sek., bis maximal {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.\n\nTags: Basis, Pyromanie, Kanalisiert, Schaden, Verbrennung, Mana.\n\n— Enchantment Effect —\nAlle 20 Sek. erscheint eine Schlange und schickt Gegner 6 Sek. lang in den Flammentod.",
			"esES": "Coste de maná: {#} por segundo\nProbabilidad de golpe de suerte: {#}%\nCanalizas un haz de fuego que inflige {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% de daño de quemadura por segundo a los enemigos. El daño por segundo aumenta a lo largo de 4 s, hasta un máximo de {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.\n\nTags: Principal, Piromancia, Canalizada, Daño, Quemadura, Maná.\n\n— Enchantment Effect —\nCada 20 s aparece una sierpe e Incinera a los enemigos durante 6 s.",
			"esMX": "Costo de maná: {#} por segundo\nProbabilidad de golpe afortunado: {#}%\nCanalizas un rayo de fuego que quema a los enemigos y les inflige {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% de daño por segundo. El daño por segundo aumenta durante 4 segundos, hasta un máximo de {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.\n\nTags: Principal, Piromancia, Canalizado, Daño, Quemadura, Maná.\n\n— Enchantment Effect —\nCada 20 segundos, aparece una serpiente e incinera a los enemigos durante 6 segundos.",
			"frFR": "Coût en mana: {#} par seconde\nChances de coup de chance: {#}%\nVous canalisez un rayon de feu et brûlez les adversaires, ce qui leur inflige {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% points de dégâts par seconde. Les dégâts infligés par seconde augmentent tout au long d'une durée de 4 s, jusqu'à un maximum de {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.\n\nTags: Principale, Pyromancie, Canalisation, Dégâts, Brûlure, Mana.\n\n— Enchantment Effect —\nToutes les 20 s, un serpent apparaît et incinère les adversaires pendant 6 s.",
			"itIT": "Costo in mana: {#} al secondo\nProbabilità di colpo fortunato: {#}%\nCanalizzi un raggio di fuoco che manda in fiamme i nemici infliggendo {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% danni al secondo. I danni al secondo aumentano per 4 s, fino a un massimo di {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.\n\nTags: Primaria, Piromanzia, Incanalamento, Danni, Bruciatura, Mana.\n\n— Enchantment Effect —\nOgni 20 s, generi un serpente che incenerisce i nemici per 6 s.",
			"jaJP": "マナ消費量: {#} per second\n幸運の一撃発生率: {#}%\n一直線の炎を継続的に放って敵を炎上させ、毎秒{9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}%のダメージを与える。秒間ダメージは4秒間かけて増加し、最大{49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%に到達する。\n\nTags: コア, 火術, 詠唱系, ダメージ, 炎上, マナ.\n\n— Enchantment Effect —\n20秒ごとに大蛇が出現し、6秒間にわたって敵に〈炎打〉を放つ。",
			"koKR": "소모: 초당 마나 {#}\n행운의 적중 확률: {#}%\n불의 광선을 집중하여 적을 불태우고 초당 {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}%의 피해를 줍니다. 초당 피해는 4초에 걸쳐 최대 {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%까지 증가합니다.\n\nTags: 핵심, 방화, 정신 집중, 피해, 불태우기, 마나.\n\n— Enchantment Effect —\n20초마다 뱀이 생성되어 적들을 6초 동안 소각합니다.",
			"plPL": "Koszt: {#} pkt many na sekund\nSzansa na szczęśliwy traf: {#}%\nWyzwalasz promień ognia, który podpala wrogów, zadając im {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% pkt. obrażeń na sekundę. Obrażenia na sekundę są zwiększone po upływie 4 sek., maksymalnie do {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.\n\nTags: Główne, Piromancja, Podtrzymanie, Obrażenia, Podpalenie, Mana.\n\n— Enchantment Effect —\nCo 20 sek. pojawia się wąż, który wymierza Spopielenie w pobliskiego wroga na 6 sek.",
			"ptBR": "Custo de mana: {#} por segundo\nChance de Golpe de Sorte: {#}%\nCanaliza um feixe de fogo, queimando os inimigos e causando {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% de dano por segundo. O dano por segundo aumenta ao longo de 4 segundos, até {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.\n\nTags: Principal, Piromancia, Canalizada, Dano, Queimadura, Mana.\n\n— Enchantment Effect —\nA cada 20 segundos, uma serpente surge e incinera inimigos próximos por 6 segundos.",
			"ruRU": "Затраты маны: {#}\nВероятность удачного удара: {#}%.\nВы поддерживаете поток пламени, наносящий противникам {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% ед. урона в секунду. Урон в секунду увеличивается в течение 4 сек., достигая {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}% ед.\n\nTags: Основные, Пиромантия, Поддерживаемое, Урон, Горение, Мана.\n\n— Enchantment Effect —\nРаз в 20 сек. появляется змей, поражающий ближайшего противника \"Испепелением\" в течение 6 сек.",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n引导一道火焰射线燃烧敌人,每秒造成{9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}%点伤害。在4秒内,伤害每秒都会提高,最多{49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%点。\n\nTags: 核心, 爆焰, 引导, 伤害, 燃烧, 法力.\n\n— Enchantment Effect —\n每20秒,召唤一条蛇并焚烧敌人,持续6秒。"
},
		id: 24,
		maxPoints: 5,
		values: [ "20", "40" ],
		x: 0.845,
		y: -304.65
	},
	"Enhanced Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Incinerate", "Destructive Incinerate", "Greater Incinerate" ],
		description: `While channeling Incinerate, you Burn enemies around you for 15% of the damage per second.

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserter Flammentod",
			"esES": "Incinerar mejorado",
			"esMX": "Incineración Potenciada",
			"frFR": "Incinération renforcée",
			"itIT": "Incenerimento Rinforzato",
			"jaJP": "炎打(強化版)",
			"koKR": "강화된 소각",
			"plPL": "Wzmocnione Spopielenie",
			"ptBR": "Incinerar Aperfeiçoado",
			"ruRU": "Усиленное испепеление",
			"zhCN": "强化焚烧"
},
		descriptionLocalized: {
			"deDE": "Während des Kanalisierens von Flammentod verbrennt Ihr Gegner um Euch herum und fügt ihnen 15% des Schadens pro Sekunde zu.\n\nTags: Basis, Pyromanie, Kanalisiert, Schaden, Verbrennung, Mana.",
			"esES": "Mientras se canaliza Incinerar, quemas a los enemigos que te rodean e infliges un 15% del daño de la habilidad por segundo.\n\nTags: Principal, Piromancia, Canalizada, Daño, Quemadura, Maná.",
			"esMX": "Mientras canalizas Incinerar, infliges un 15% de daño de quemadura por segundo a los enemigos a tu alrededor.\n\nTags: Principal, Piromancia, Canalizado, Daño, Quemadura, Maná.",
			"frFR": "Pendant la canalisation d'Incinération, vous brûlez les adversaires autour de vous en leur infligeant 15% des dégâts par seconde.\n\nTags: Principale, Pyromancie, Canalisation, Dégâts, Brûlure, Mana.",
			"itIT": "Durante la canalizzazione di Incenerimento, mandi in fiamme i nemici circostanti, infliggendo il 15% dei danni ogni secondo.\n\nTags: Primaria, Piromanzia, Incanalamento, Danni, Bruciatura, Mana.",
			"jaJP": "〈炎打〉を使用している間、付近の敵を炎上させて毎秒15%のダメージを与える。\n\nTags: コア, 火術, 詠唱系, ダメージ, 炎上, マナ.",
			"koKR": "소각에 정신을 집중하는 동안 주위의 적들을 불태워 초당 피해의 15%만큼 피해를 줍니다.\n\nTags: 핵심, 방화, 정신 집중, 피해, 불태우기, 마나.",
			"plPL": "Podczas podtrzymywania Spopielenia podpalasz wrogów wokół siebie i zadajesz im 15% obrażeń na sekundę.\n\nTags: Główne, Piromancja, Podtrzymanie, Obrażenia, Podpalenie, Mana.",
			"ptBR": "Enquanto canaliza Incinerar, você queima inimigos ao seu redor, causando 15% do dano por segundo.\n\nTags: Principal, Piromancia, Canalizada, Dano, Queimadura, Mana.",
			"ruRU": "При поддержании \"Испепеления\" вы также опаляете противников вокруг себя, нанося 15% урона раз в сек.\n\nTags: Основные, Пиромантия, Поддерживаемое, Урон, Горение, Мана.",
			"zhCN": "在引导焚烧时,你会燃烧附近的敌人,每秒造成伤害,相当于焚烧的15%。\n\nTags: 核心, 爆焰, 引导, 伤害, 燃烧, 法力."
},
		id: 25,
		maxPoints: 1,
		x: -0.58,
		y: -500.805
	},
	"Destructive Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Enhanced Incinerate" ],
		description: `Enemies deal 20% less damage while Burning from Incinerate.

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		nameLocalized: {
			"deDE": "Zerstörerischer Flammentod",
			"esES": "Incinerar destructor",
			"esMX": "Incineración Destructiva",
			"frFR": "Incinération destructrice",
			"itIT": "Incenerimento Distruttivo",
			"jaJP": "炎打(破滅)",
			"koKR": "파괴적인 소각",
			"plPL": "Destruktywne Spopielenie",
			"ptBR": "Incinerar Destrutivo",
			"ruRU": "Разрушительное испепеление",
			"zhCN": "毁灭焚烧"
},
		descriptionLocalized: {
			"deDE": "Während Gegner von Flammentod brennen, verursachen sie 20% weniger Schaden.\n\nTags: Basis, Pyromanie, Kanalisiert, Schaden, Verbrennung, Mana.",
			"esES": "Los enemigos infligen un 20% menos de daño mientras están quemándose por Incinerar.\n\nTags: Principal, Piromancia, Canalizada, Daño, Quemadura, Maná.",
			"esMX": "Los enemigos infligen un 20% menos de daño mientras están bajo los efectos de quemadura de Incinerar.\n\nTags: Principal, Piromancia, Canalizado, Daño, Quemadura, Maná.",
			"frFR": "Les cibles enflammées par Incinération infligent 20% de dégâts en moins.\n\nTags: Principale, Pyromancie, Canalisation, Dégâts, Brûlure, Mana.",
			"itIT": "I nemici infliggono il 20% di danni in meno mentre sono in fiamme a causa di Incenerimento.\n\nTags: Primaria, Piromanzia, Incanalamento, Danni, Bruciatura, Mana.",
			"jaJP": "〈炎打〉によって炎上状態になっている敵が与えるダメージが20%減少する。\n\nTags: コア, 火術, 詠唱系, ダメージ, 炎上, マナ.",
			"koKR": "소각으로 연소 상태가 된 적에게 받는 피해가 20% 감소합니다.\n\nTags: 핵심, 방화, 정신 집중, 피해, 불태우기, 마나.",
			"plPL": "Wrogowie podpaleni przez Spopielenie zadają obrażenia zmniejszone o 20%.\n\nTags: Główne, Piromancja, Podtrzymanie, Obrażenia, Podpalenie, Mana.",
			"ptBR": "Inimigos causam 20% de dano reduzido enquanto queimam com Incinerar.\n\nTags: Principal, Piromancia, Canalizada, Dano, Queimadura, Mana.",
			"ruRU": "Подожженные \"Испепелением\" противники наносят на 20% меньше урона.\n\nTags: Основные, Пиромантия, Поддерживаемое, Урон, Горение, Мана.",
			"zhCN": "敌人因焚烧而燃烧时,其造成的伤害降低20%。\n\nTags: 核心, 爆焰, 引导, 伤害, 燃烧, 法力."
},
		id: 26,
		maxPoints: 1,
		x: -137.58,
		y: -608.375
	},
	"Greater Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Enhanced Incinerate" ],
		description: `Every 4 seconds an enemy has been hit by Incinerate, they are Immobilized for 1 seconds.

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		nameLocalized: {
			"deDE": "Großer Flammentod",
			"esES": "Incinerar superior",
			"esMX": "Incineración Mayor",
			"frFR": "Incinération supérieure",
			"itIT": "Incenerimento Maggiore",
			"jaJP": "炎打(増大)",
			"koKR": "상급 소각",
			"plPL": "Większe Spopielenie",
			"ptBR": "Incinerar Superior",
			"ruRU": "Великое испепеление",
			"zhCN": "强效焚烧"
},
		descriptionLocalized: {
			"deDE": "Alle 4 Sek., die ein Gegner von Flammentod getroffen wurde, wird er 1 Sek. lang bewegungsunfähig.\n\nTags: Basis, Pyromanie, Kanalisiert, Schaden, Verbrennung, Mana.",
			"esES": "Por cada 4 s que ha pasado un enemigo afectado por Incinerar, queda inmovilizado durante 1 s.\n\nTags: Principal, Piromancia, Canalizada, Daño, Quemadura, Maná.",
			"esMX": "Por cada 4 segundos que un enemigo es golpeado por Incinerar, queda inmovilizado durante 1 segundos.\n\nTags: Principal, Piromancia, Canalizado, Daño, Quemadura, Maná.",
			"frFR": "Chaque fois qu'une cible est touchée par Incinération pendant 4 s, elle est immobilisée pendant 1 s.\n\nTags: Principale, Pyromancie, Canalisation, Dégâts, Brûlure, Mana.",
			"itIT": "I nemici colpiti da Incenerimento ogni 4 s vengono immobilizzati per 1 s.\n\nTags: Primaria, Piromanzia, Incanalamento, Danni, Bruciatura, Mana.",
			"jaJP": "〈炎打〉が4秒間敵に命中するごとに、その敵が1秒間にわたり移動不能になる。\n\nTags: コア, 火術, 詠唱系, ダメージ, 炎上, マナ.",
			"koKR": "적이 4초 동안 소각에 적중될 때마다 해당 적이 1초 동안 이동 불가 상태가 됩니다.\n\nTags: 핵심, 방화, 정신 집중, 피해, 불태우기, 마나.",
			"plPL": "Za każde 4 sek., które wróg spędził pod wpływem Spopielenia, zostaje on unieruchomiony na 1 sek.\n\nTags: Główne, Piromancja, Podtrzymanie, Obrażenia, Podpalenie, Mana.",
			"ptBR": "A cada 4 segundos que um inimigo for atingido por Incinerar, ele é imobilizado por 1 segundos.\n\nTags: Principal, Piromancia, Canalizada, Dano, Queimadura, Mana.",
			"ruRU": "Пораженные противники, непрерывно получающие урон от \"Испепеления\", обездвиживаются на 1 сек. раз в 4 сек.\n\nTags: Основные, Пиромантия, Поддерживаемое, Урон, Горение, Мана.",
			"zhCN": "每隔4秒,会有一名被焚烧命中的敌人被定身1秒。\n\nTags: 核心, 爆焰, 引导, 伤害, 燃烧, 法力."
},
		id: 27,
		maxPoints: 1,
		x: 144.77,
		y: -607.315
	},
	"Fireball": {
		connections: [ "Core", "Enhanced Fireball" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Hurl an exploding ball of fire, dealing {60/66/72/78/84/90/96/102/108/114}% damage to surrounding enemies.

Tags: Core, Pyromancy, Damage, Fire, Mana.

— Enchantment Effect —
When you kill an enemy, they explode in a Fireball for 50% of its damage.`,
		nameLocalized: {
			"deDE": "Feuerball",
			"esES": "Bola de fuego",
			"esMX": "Bola de Fuego",
			"frFR": "Boule de feu",
			"itIT": "Palla di Fuoco",
			"jaJP": "火の玉",
			"koKR": "화염구",
			"plPL": "Kula Ognia",
			"ptBR": "Bola de Fogo",
			"ruRU": "Огненный шар",
			"zhCN": "火球"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nSchleudert einen explodierenden Feuerball, der Gegnern in der Nähe {60/66/72/78/84/90/96/102/108/114}% Schaden zufügt.\n\nTags: Basis, Pyromanie, Schaden, Feuer, Mana.\n\n— Enchantment Effect —\nWenn Ihr einen Gegner tötet, explodiert dieser in einem Feuerball, der 50% des Schadens verursacht.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nArrojas una bola de fuego explosiva que inflige {60/66/72/78/84/90/96/102/108/114}% de daño a los enemigos cercanos.\n\nTags: Principal, Piromancia, Daño, Fuego, Maná.\n\n— Enchantment Effect —\nCuando matas a un enemigo, explota y sufre un 50% del daño de Bola de fuego.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nLanzas una bola de fuego explosiva que inflige {60/66/72/78/84/90/96/102/108/114}% de daño a los enemigos circundantes.\n\nTags: Principal, Piromancia, Daño, Fuego, Maná.\n\n— Enchantment Effect —\nCuando eliminas a un enemigo, este explota en una Bola de Fuego que inflige un 50% de su daño.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous lancez une boule de feu explosive qui inflige {60/66/72/78/84/90/96/102/108/114}% points de dégâts aux adversaires à proximité.\n\nTags: Principale, Pyromancie, Dégâts, Feu, Mana.\n\n— Enchantment Effect —\nLorsque vous tuez une cible, celle-ci explose dans une boule de feu qui inflige 50% de ses dégâts.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nLanci una palla di fuoco esplosiva, infliggendo {60/66/72/78/84/90/96/102/108/114}% danni ai nemici circostanti.\n\nTags: Primaria, Piromanzia, Danni, Fuoco, Mana.\n\n— Enchantment Effect —\nQuando uccidi un nemico, esplode in una Palla di fuoco, subendo il 50% dei suoi danni.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\n爆発する火の玉を投げつけ、周囲の敵に {60/66/72/78/84/90/96/102/108/114}%のダメージを与える。\n\nTags: コア, 火術, ダメージ, 火炎, マナ.\n\n— Enchantment Effect —\n倒した敵が〈火の玉〉となって爆発し、そのダメージの50%を与える。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n폭발하는 불덩이를 날려 주위 적들에게 {60/66/72/78/84/90/96/102/108/114}%의 피해를 줍니다.\n\nTags: 핵심, 방화, 피해, 화염, 마나.\n\n— Enchantment Effect —\n처치한 적이 화염구 속에서 폭발하여 화염구 피해의 50%만큼 피해를 줍니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nCiskasz wybuchową kulą ognia, która zadaje {60/66/72/78/84/90/96/102/108/114}% pkt. obrażeń pobliskim wrogom.\n\nTags: Główne, Piromancja, Obrażenia, Ogień, Mana.\n\n— Enchantment Effect —\nKiedy zabijasz wroga, wybucha on w postaci Kuli Ognia, która zadaje równowartość 50% obrażeń od tej umiejętności.",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte: {#}%\nArremessa uma bola de fogo explosiva, causando {60/66/72/78/84/90/96/102/108/114}% de dano a inimigos ao redor.\n\nTags: Principal, Piromancia, Dano, Fogo, Mana.\n\n— Enchantment Effect —\nQuando você mata um inimigo, ele explode em uma Bola de Fogo, causando 50% do dano.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы бросаете взрывающийся огненный шар, который наносит {60/66/72/78/84/90/96/102/108/114}% ед. урона окружающим противникам.\n\nTags: Основные, Пиромантия, Урон, Огонь, Мана.\n\n— Enchantment Effect —\nУбитые вами противники взрываются \"Огненными шарами\", наносящими 50% обычного урона.",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n施放一团会爆炸的火焰,对周围的敌人造成{60/66/72/78/84/90/96/102/108/114}%点伤害。\n\nTags: 核心, 爆焰, 伤害, 火焰, 法力.\n\n— Enchantment Effect —\n当你消灭一名敌人时会使其爆炸成火球,造成其伤害的50%。"
},
		id: 28,
		maxPoints: 5,
		values: [ "40", "33" ],
		x: -363.79,
		y: -251.52
	},
	"Enhanced Fireball": {
		baseSkill: "Fireball",
		connections: [ "Fireball", "Greater Fireball", "Destructive Fireball" ],
		description: `Fireball's radius is increased based on distance traveled, up to 50%.

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserter Feuerball",
			"esES": "Bola de fuego mejorada",
			"esMX": "Bola de Fuego Potenciada",
			"frFR": "Boule de feu renforcée",
			"itIT": "Palla di Fuoco Rinforzata",
			"jaJP": "火の玉(強化版)",
			"koKR": "강화된 화염구",
			"plPL": "Wzmocniona Kula Ognia",
			"ptBR": "Bola de Fogo Aperfeiçoada",
			"ruRU": "Усиленный огненный шар",
			"zhCN": "强化火球"
},
		descriptionLocalized: {
			"deDE": "Der Radius von Feuerball erhöht sich anhand der zurückgelegten Distanz, bis maximal 50%.\n\nTags: Basis, Pyromanie, Schaden, Feuer, Mana.",
			"esES": "El radio de Bola de fuego aumenta en función de la distancia recorrida, hasta un máximo de un 50%.\n\nTags: Principal, Piromancia, Daño, Fuego, Maná.",
			"esMX": "El radio de Bola de Fuego aumenta según la distancia recorrida, hasta un 50%.\n\nTags: Principal, Piromancia, Daño, Fuego, Maná.",
			"frFR": "Le rayon de la boule de feu augmente avec la distance parcourue, jusqu'à un maximum de 50%.\n\nTags: Principale, Pyromancie, Dégâts, Feu, Mana.",
			"itIT": "Il raggio di Palla di Fuoco aumenta in base alla distanza percorsa, fino a un massimo del 50%.\n\nTags: Primaria, Piromanzia, Danni, Fuoco, Mana.",
			"jaJP": "〈火の玉〉使用時、火球の移動距離に応じて効果範囲が最大50%まで拡大する。\n\nTags: コア, 火術, ダメージ, 火炎, マナ.",
			"koKR": "화염구의 반경이 이동 거리에 따라 최대 50%까지 증가합니다.\n\nTags: 핵심, 방화, 피해, 화염, 마나.",
			"plPL": "Promień Kuli Ognia zostaje zwiększony w oparciu o przebytą odległość, maksymalnie do 50%.\n\nTags: Główne, Piromancja, Obrażenia, Ogień, Mana.",
			"ptBR": "O raio de Bola de Fogo é aumentado com base na distância percorrida, até 50%.\n\nTags: Principal, Piromancia, Dano, Fogo, Mana.",
			"ruRU": "Радиус \"Огненного шара\" увеличивается с расстоянием вплоть до 50%.\n\nTags: Основные, Пиромантия, Урон, Огонь, Мана.",
			"zhCN": "火球的半径随行进距离扩大,最高可增加50%。\n\nTags: 核心, 爆焰, 伤害, 火焰, 法力."
},
		id: 29,
		maxPoints: 1,
		x: -597.17,
		y: -411.325
	},
	"Greater Fireball": {
		baseSkill: "Fireball",
		connections: [ "Enhanced Fireball" ],
		description: `Fireball deals 10% of the Burning damage you've applied to enemies as additional direct damage.

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		nameLocalized: {
			"deDE": "Großer Feuerball",
			"esES": "Bola de fuego superior",
			"esMX": "Bola de Fuego Mayor",
			"frFR": "Boule de feu supérieure",
			"itIT": "Palla di Fuoco Maggiore",
			"jaJP": "火の玉(増大)",
			"koKR": "상급 화염구",
			"plPL": "Większa Kula Ognia",
			"ptBR": "Bola de Fogo Superior",
			"ruRU": "Великий огненный шар",
			"zhCN": "强效火球"
},
		descriptionLocalized: {
			"deDE": "Feuerball fügt 10% des Verbrennungsschadens, den Ihr auf Gegner gewirkt habt, als zusätzlichen direkten Schaden zu.\n\nTags: Basis, Pyromanie, Schaden, Feuer, Mana.",
			"esES": "Bola de fuego inflige un 10% del daño de quemadura que hayas infligido a los enemigos como daño directo adicional.\n\nTags: Principal, Piromancia, Daño, Fuego, Maná.",
			"esMX": "Bola de Fuego inflige un 10% del daño de quemadura que aplicaste a los enemigos como daño directo adicional.\n\nTags: Principal, Piromancia, Daño, Fuego, Maná.",
			"frFR": "Boule de feu inflige 10% des dégâts de brûlure que vous avez appliqués aux adversaires sous forme de dégâts directs supplémentaires.\n\nTags: Principale, Pyromancie, Dégâts, Feu, Mana.",
			"itIT": "Palla di Fuoco infligge il 10% dei danni da fiamme inferti ai nemici come danni diretti aggiuntivi.\n\nTags: Primaria, Piromanzia, Danni, Fuoco, Mana.",
			"jaJP": "〈火の玉〉使用時、敵に与えた炎上ダメージの10%を追加で直接ダメージとして与える。\n\nTags: コア, 火術, ダメージ, 火炎, マナ.",
			"koKR": "화염구가 자신이 적에게 준 연소 피해의 10%를 추가 직접 피해로 줍니다.\n\nTags: 핵심, 방화, 피해, 화염, 마나.",
			"plPL": "Kula Ognia zadaje dodatkowo obrażenia bezpośrednie równe 10% obrażeń od podpalenia zadanych przez ciebie wrogom.\n\nTags: Główne, Piromancja, Obrażenia, Ogień, Mana.",
			"ptBR": "Bola de Fogo causa 10% do dano flamejante causado por você a inimigos como dano direto adicional.\n\nTags: Principal, Piromancia, Dano, Fogo, Mana.",
			"ruRU": "\"Огненный шар\" дополнительно наносит прямой урон, равный 10% примененного вами к противникам урона от горения.\n\nTags: Основные, Пиромантия, Урон, Огонь, Мана.",
			"zhCN": "火球造成额外直接伤害,数值相当于你已对敌人施加的燃烧伤害的10%。\n\nTags: 核心, 爆焰, 伤害, 火焰, 法力."
},
		id: 30,
		maxPoints: 1,
		x: -851.105,
		y: -424.01
	},
	"Destructive Fireball": {
		baseSkill: "Fireball",
		connections: [ "Enhanced Fireball" ],
		description: `Fireball's explosion's Critical Strike Damage is increased by +10%. Each enemy it hits increases this bonus by +5%, up to +25% total.

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		nameLocalized: {
			"deDE": "Zerstörerischer Feuerball",
			"esES": "Bola de fuego destructora",
			"esMX": "Bola de Fuego Destructiva",
			"frFR": "Boule de feu destructrice",
			"itIT": "Palla di Fuoco Distruttiva",
			"jaJP": "火の玉(破滅)",
			"koKR": "파괴적인 화염구",
			"plPL": "Destruktywna Kula Ognia",
			"ptBR": "Bola de Fogo Destrutiva",
			"ruRU": "Разрушительный огненный шар",
			"zhCN": "毁灭火球"
},
		descriptionLocalized: {
			"deDE": "Der kritische Trefferschaden der Explosion von Feuerball erhöht sich um +10%. Jeder getroffene Gegner erhöht diesen Bonus um +5%, bis maximal +25%.\n\nTags: Basis, Pyromanie, Schaden, Feuer, Mana.",
			"esES": "El daño de golpe crítico de la explosión de Bola de fuego aumenta un +10%. Cada enemigo golpeado aumenta este bonus un +5%, hasta un total del +25%.\n\nTags: Principal, Piromancia, Daño, Fuego, Maná.",
			"esMX": "El daño de golpe crítico de la explosión de Bola de Fuego aumenta un +10%. Cada enemigo golpeado aumenta esta bonificación un +5%, hasta un +25% en total.\n\nTags: Principal, Piromancia, Daño, Fuego, Maná.",
			"frFR": "Les dégâts critiques infligés par l'explosion de la boule de feu sont augmentés de +10%. Chaque cible qu'elle touche augmente ce bonus de +5%, jusqu'à un total de +25%.\n\nTags: Principale, Pyromancie, Dégâts, Feu, Mana.",
			"itIT": "I danni critici dell'esplosione di Palla di Fuoco aumentano del +10%. Ogni nemico colpito incrementa questo bonus del +5%, fino a un massimo complessivo del +25%.\n\nTags: Primaria, Piromanzia, Danni, Fuoco, Mana.",
			"jaJP": "〈火の玉〉の爆発のクリティカルヒットダメージが+10%増加する。このボーナス量は〈火の玉〉が命中した敵1体ごとに+5%増加する。合計最大増加量は+25%。\n\nTags: コア, 火術, ダメージ, 火炎, マナ.",
			"koKR": "화염구의 폭발의 극대화 피해가 +10% 증가합니다. 적중한 적 하나당 이 효과가 +5%만큼, 최대 총 +25%까지 증가합니다.\n\nTags: 핵심, 방화, 피해, 화염, 마나.",
			"plPL": "Obrażenia od trafień krytycznych wybuchem wywołanym przez Kulę Ognia są zwiększone o +10%. Każdy wróg trafiony tą umiejętnością zwiększa premię o +5%, maksymalnie do +25%.\n\nTags: Główne, Piromancja, Obrażenia, Ogień, Mana.",
			"ptBR": "O dano de acerto crítico da explosão de Bola de Fogo é aumentado em +10%. A cada inimigo atingido, o bônus é aumentado em +5%, até +25% do total.\n\nTags: Principal, Piromancia, Dano, Fogo, Mana.",
			"ruRU": "Критический урон от взрыва \"Огненного шара\" увеличивается на +10%. За каждого пораженного взрывом противника этот бонус увеличивается на +5% вплоть до +25%.\n\nTags: Основные, Пиромантия, Урон, Огонь, Мана.",
			"zhCN": "火球爆炸的暴击伤害提高+10%。每命中一名敌人,该加成都会提高+5%,总计提高最多+25%。\n\nTags: 核心, 爆焰, 伤害, 火焰, 法力."
},
		id: 31,
		maxPoints: 1,
		x: -599.05,
		y: -541.025
	},
	"Chain Lightning": {
		connections: [ "Core", "Enhanced Chain Lightning" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Unleash a stream of lightning that deals {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% damage and chains between Nearby enemies and you up to 6 times, prioritizing enemies.

Tags: Core, Shock, Damage, Lightning, Mana.

— Enchantment Effect —
Chain Lightning forms automatically after spending 100 Mana.`,
		nameLocalized: {
			"deDE": "Kettenblitz",
			"esES": "Cadena de rayos",
			"esMX": "Cadena de Relámpagos",
			"frFR": "Chaîne d'éclairs",
			"itIT": "Catena di Fulmini",
			"jaJP": "チェイン・ライトニング",
			"koKR": "연쇄 번개",
			"plPL": "Seryjne Błyskawice",
			"ptBR": "Cadeia de Raios",
			"ruRU": "Цепная молния",
			"zhCN": "连锁闪电"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nEntfesselt einen Blitzstoß, der {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% Schaden verursacht und bis zu 6-mal auf Euch und Gegner in der Nähe übergeht, wobei Gegner priorisiert werden.\n\nTags: Basis, Schock, Schaden, Blitz, Mana.\n\n— Enchantment Effect —\nKettenblitz bildet sich automatisch, wenn Ihr 100 Mana ausgebt.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nLanzas una corriente de rayos que inflige {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% de daño y salta entre los enemigos cercanos y tú hasta 6 veces (prioriza a los enemigos).\n\nTags: Principal, Electrocución, Daño, Rayos, Maná.\n\n— Enchantment Effect —\nSe forma automáticamente una Cadena de rayos tras gastar 100 de maná.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nDesatas un torrente de rayos que inflige {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% de daño y forma una cadena entre los enemigos cercanos y tú hasta 6 veces, priorizando a los enemigos.\n\nTags: Principal, Choque, Daño, Rayo, Maná.\n\n— Enchantment Effect —\nCadena de Relámpagos se lanza automáticamente después de usar 100 de maná.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous libérez un torrent de foudre qui inflige {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% points de dégâts et qui se propage entre les adversaires à proximité et vous jusqu'à 6 fois, en privilégiant les adversaires.\n\nTags: Principale, Foudre, Dégâts, Mana.\n\n— Enchantment Effect —\nUne chaîne d'éclairs se forme automatiquement lorsque vous dépensez 100 points de mana.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nScatena un flusso di fulmini che infligge {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% danni e rimbalza tra te e i nemici vicini fino a 6 volte, dando la priorità ai nemici.\n\nTags: Primaria, Folgore, Danni, Fulmine, Mana.\n\n— Enchantment Effect —\nCatena di Fulmini si genera automaticamente dopo aver consumato 100 mana.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\n稲妻の激流を解き放ち、{42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}%のダメージを与える。また、敵に優先順位をつけながら付近の敵と自分の間で最大6回まで連鎖する。\n\nTags: コア, 電撃, ダメージ, 稲妻, マナ.\n\n— Enchantment Effect —\nマナを100消費した後、自動的に〈チェイン・ライトニング〉が発動する。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n번개 줄기를 방출하여 {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}%의 피해를 주고 근처의 적과 자신을 최대 6번까지 연쇄 가격합니다. 적을 우선 공격합니다.\n\nTags: 핵심, 감전, 피해, 번개, 마나.\n\n— Enchantment Effect —\n마나를 100 소모하면 연쇄 번개가 자동으로 생겨납니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nWyzwalasz strumień błyskawic, który zadaje {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% pkt. obrażeń i przeskakuje pomiędzy pobliskimi wrogami a tobą do 6 razy, koncentrując się na wrogach.\n\nTags: Główne, Porażenie, Obrażenia, Piorun, Mana.\n\n— Enchantment Effect —\nSeryjne Błyskawice tworzą się automatycznie po zużyciu 100 pkt. many.",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte: {#}%\nLibera uma torrente de raios que causa {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% de dano e ricocheteia entre inimigos próximos e você até 6 vezes, priorizando inimigos.\n\nTags: Principal, Choque, Dano, Eletricidade, Mana.\n\n— Enchantment Effect —\nCadeia de Raios forma-se automaticamente depois de gastar 100 de mana.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы выпускаете поток молний, наносящий {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% ед. урона и перескакивающий между вами и ближайшими противниками до 6 раз, в первую очередь выбирая противников.\n\nTags: Основные, Шок, Урон, Молния, Мана.\n\n— Enchantment Effect —\n\"Цепная молния\" срабатывает автоматически, когда вы расходуете 100 ед. маны.",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n施放一道闪电,造成{42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}%点伤害,并最多在你和附近敌人之间连锁弹跳6次,目标优先选择敌人。\n\nTags: 核心, 电冲, 伤害, 闪电, 法力.\n\n— Enchantment Effect —\n消耗100点法力后自动施放连锁闪电。"
},
		id: 32,
		maxPoints: 5,
		values: [ "35", "25" ],
		x: -205.425,
		y: 323.95
	},
	"Enhanced Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Chain Lightning", "Greater Chain Lightning", "Destructive Chain Lightning" ],
		description: `Chain Lightning gains a +3% increased Critical Strike Chance per bounce.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserter Kettenblitz",
			"esES": "Cadena de rayos mejorada",
			"esMX": "Cadena de Relámpagos Potenciada",
			"frFR": "Chaîne d'éclairs renforcée",
			"itIT": "Catena di Fulmini Rinforzata",
			"jaJP": "チェイン・ライトニング(強化版)",
			"koKR": "강화된 연쇄 번개",
			"plPL": "Wzmocnione Seryjne Błyskawice",
			"ptBR": "Cadeia de Raios Aperfeiçoada",
			"ruRU": "Усиленная цепная молния",
			"zhCN": "强化连锁闪电"
},
		descriptionLocalized: {
			"deDE": "Kettenblitz erhält eine um +3% erhöhte kritische Trefferchance pro Sprung.\n\nTags: Basis, Schock, Schaden, Blitz, Mana.",
			"esES": "Cadena de rayos obtiene un +3% más de probabilidad de golpe crítico por salto.\n\nTags: Principal, Electrocución, Daño, Rayos, Maná.",
			"esMX": "Cadena de Relámpagos obtiene un +3% más de probabilidad de golpe crítico por rebote.\n\nTags: Principal, Choque, Daño, Rayo, Maná.",
			"frFR": "Chaîne d'éclairs a +3% de chances supplémentaires d'infliger un coup critique à chaque rebond.\n\nTags: Principale, Foudre, Dégâts, Mana.",
			"itIT": "Catena di Fulmini aumenta la probabilità di critico del +3% per rimbalzo.\n\nTags: Primaria, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "〈チェイン・ライトニング〉のクリティカルヒット率が、跳飛するたびに+3%増加する。\n\nTags: コア, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "연쇄 번개가 튕긴 횟수당 극대화 확률이 +3% 증가합니다.\n\nTags: 핵심, 감전, 피해, 번개, 마나.",
			"plPL": "Seryjne Błyskawice zyskują premię +3% do szansy na trafienie krytyczne za każde odbicie.\n\nTags: Główne, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "Cadeia de Raios recebe +3% de acerto crítico aumentado por ricochete.\n\nTags: Principal, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "С каждым переходом к новой цели вероятность критического удара \"Цепной молнии\" повышается на +3%.\n\nTags: Основные, Шок, Урон, Молния, Мана.",
			"zhCN": "连锁闪电每次弹跳,暴击几率提高+3%。\n\nTags: 核心, 电冲, 伤害, 闪电, 法力."
},
		id: 33,
		maxPoints: 1,
		x: -357.145,
		y: 505.675
	},
	"Greater Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Enhanced Chain Lightning" ],
		description: `If Chain Lightning bounces off of you, its next hit deals x25% increased damage.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Großer Kettenblitz",
			"esES": "Cadena de rayos superior",
			"esMX": "Cadena de Relámpagos Mayor",
			"frFR": "Chaîne d'éclairs supérieure",
			"itIT": "Catena di Fulmini Maggiore",
			"jaJP": "チェイン・ライトニング(増大)",
			"koKR": "상급 연쇄 번개",
			"plPL": "Większe Seryjne Błyskawice",
			"ptBR": "Cadeia de Raios Superior",
			"ruRU": "Великая цепная молния",
			"zhCN": "强效连锁闪电"
},
		descriptionLocalized: {
			"deDE": "Wenn Kettenblitz von Euch abspringt, fügt sein nächster Treffer x25% mehr Schaden zu.\n\nTags: Basis, Schock, Schaden, Blitz, Mana.",
			"esES": "Si Cadena de rayos salta de ti, su siguiente impacto inflige un x25% más de daño.\n\nTags: Principal, Electrocución, Daño, Rayos, Maná.",
			"esMX": "Si Cadena de Relámpagos rebota en ti, el siguiente golpe inflige un x25% más de daño.\n\nTags: Principal, Choque, Daño, Rayo, Maná.",
			"frFR": "Si Chaîne d'éclairs rebondit sur vous, son prochain coup inflige x25% de dégâts supplémentaires.\n\nTags: Principale, Foudre, Dégâts, Mana.",
			"itIT": "Se Catena di Fulmini rimbalza su di te, la prossima volta che andrà a segno infliggerà x25% danni aggiuntivi.\n\nTags: Primaria, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "〈チェイン・ライトニング〉が自分に当たって跳ねた場合、次に命中した際のダメージがx25%増加する。\n\nTags: コア, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "연쇄 번개가 자신에게 튕기면, 다음 적중으로 주는 피해가 x25% 증가합니다.\n\nTags: 핵심, 감전, 피해, 번개, 마나.",
			"plPL": "Jeśli Seryjne Błyskawice przeskoczą od ciebie, ich następne trafienie zada obrażenia zwiększone o x25%.\n\nTags: Główne, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "Se Cadeia de Raios ricochetear em você, o próximo acerto causa 25% de dano aumentado.\n\nTags: Principal, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "Когда \"Цепная молния\" переходит к цели от вас, ее следующий разряд наносит на x25% больше урона.\n\nTags: Основные, Шок, Урон, Молния, Мана.",
			"zhCN": "如果连锁闪电从你身上跳走,其下一跳造成的伤害提高x25%。\n\nTags: 核心, 电冲, 伤害, 闪电, 法力."
},
		id: 34,
		maxPoints: 1,
		x: -579.895,
		y: 551.75
	},
	"Destructive Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Enhanced Chain Lightning" ],
		description: `When Chain Lightning Critically Strikes, it has a 25% chance to form a Crackling Energy.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Zerstörerischer Kettenblitz",
			"esES": "Cadena de rayos destructora",
			"esMX": "Cadena de Relámpagos Destructiva",
			"frFR": "Chaîne d'éclairs destructrice",
			"itIT": "Catena di Fulmini Distruttiva",
			"jaJP": "チェイン・ライトニング(破滅)",
			"koKR": "파괴적인 연쇄 번개",
			"plPL": "Destruktywne Seryjne Błyskawice",
			"ptBR": "Cadeia de Raios Destrutiva",
			"ruRU": "Разрушительная цепная молния",
			"zhCN": "毁灭连锁闪电"
},
		descriptionLocalized: {
			"deDE": "Wenn Kettenblitz einen kritischen Treffer erzielt, besteht eine Chance von 25%, Knisternde Energie zu erzeugen.\n\nTags: Basis, Schock, Schaden, Blitz, Mana.",
			"esES": "Cuando Cadena de rayos asesta un golpe crítico, tiene un 25% de probabilidad de formar una energía crepitante.\n\nTags: Principal, Electrocución, Daño, Rayos, Maná.",
			"esMX": "Cuando asestas un golpe crítico con Cadena de Relámpagos, tienes un 25% de probabilidad de formar una Energía Crepitante.\n\nTags: Principal, Choque, Daño, Rayo, Maná.",
			"frFR": "Lorsque Chaîne d'éclairs inflige un coup critique, elle a 25% de chances de générer de l'énergie crépitante.\n\nTags: Principale, Foudre, Dégâts, Mana.",
			"itIT": "Quando Catena di Fulmini infligge danni critici, ha una probabilità del 25% di generare Energia Crepitante.\n\nTags: Primaria, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "〈チェイン・ライトニング〉がクリティカルヒットになると、25%の確率で〈帯び出す電気〉が発生する。\n\nTags: コア, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "연쇄 번개가 극대화로 적중하면, 25% 확률로 짜릿한 에너지를 생성합니다.\n\nTags: 핵심, 감전, 피해, 번개, 마나.",
			"plPL": "Za każdym razem, gdy Seryjne Błyskawice zadają trafienie krytyczne, istnieje 25% szans na stworzenie Roziskrzonej Energii.\n\nTags: Główne, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "Quando Cadeia de Raios desfere um acerto crítico, tem 25% de chance de formar uma Energia Crepitante.\n\nTags: Principal, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "Когда \"Цепная молния\" наносит критический удар, она с вероятностью 25% создает искрящийся заряд энергии.\n\nTags: Основные, Шок, Урон, Молния, Мана.",
			"zhCN": "连锁闪电暴击时,有25%几率生成一个爆裂电花。\n\nTags: 核心, 电冲, 伤害, 闪电, 法力."
},
		id: 35,
		maxPoints: 1,
		x: -298.86,
		y: 634.625
	},
	"Ice Shards": {
		connections: [ "Core", "Enhanced Ice Shards" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Launch 5 shards that deal {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage each. Deals x25% increased damage to Frozen enemies.

Tags: Core, Frost, Frozen, Damage, Cold, Mana.

— Enchantment Effect —
Ice Shards automatically conjure and fly towards Frozen enemies.`,
		nameLocalized: {
			"deDE": "Eissplitter",
			"esES": "Esquirlas de hielo",
			"esMX": "Fragmentos de Hielo",
			"frFR": "Éclats de glace",
			"itIT": "Schegge di Ghiaccio",
			"jaJP": "アイス・シャード",
			"koKR": "얼음 파편",
			"plPL": "Lodowe Odłamki",
			"ptBR": "Estilhaços de Gelo",
			"ruRU": "Осколки льда",
			"zhCN": "寒冰碎片"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nSchleudert 5 Splitter, die jeweils {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% Schaden verursachen. Der Schaden gegen eingefrorene Gegner ist um x25% erhöht.\n\nTags: Basis, Frost, Eingefroren, Schaden, Kälte, Mana.\n\n— Enchantment Effect —\nEissplitter bilden sich automatisch und fliegen auf eingefrorene Gegner.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nLanzas 5 esquirlas que infligen {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño cada una. Inflige un x25% más de daño a los enemigos congelados.\n\nTags: Principal, Escarcha, Congelación, Daño, Frío, Maná.\n\n— Enchantment Effect —\nSe generan automáticamente Esquirlas de hielo que vuelan hacia los enemigos congelados.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nLanza 5 fragmentos que infligen {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño cada uno. Inflige un x25% más de daño a enemigos congelados.\n\nTags: Principal, Congelar, Congelado, Daño, Frío, Maná.\n\n— Enchantment Effect —\nInvocas Fragmentos de Hielo que salen volando automáticamente hacia los enemigos congelados.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous lancez 5 éclats qui infligent {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% points de dégâts chacun. Les éclats infligent x25% de dégâts supplémentaires aux cibles gelées.\n\nTags: Principale, Givre, Gel, Dégâts, Froid, Mana.\n\n— Enchantment Effect —\nDes éclats de glace se forment automatiquement et fondent sur les cibles gelées.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nLanci 5 schegge che infliggono {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% danni ciascuna. Infligge il x25% di danni aggiuntivi ai nemici congelati.\n\nTags: Primaria, Gelo, Congelamento, Danni, Freddo, Mana.\n\n— Enchantment Effect —\nSchegge di Ghiaccio vengono invocate automaticamente e volano verso i nemici congelati.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\n5個の欠片を放ち、それぞれ{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%のダメージを与える。凍結状態の敵に対してはダメージがx25%増加する。\n\nTags: コア, 寒気, 凍結, ダメージ, 冷気, マナ.\n\n— Enchantment Effect —\n〈アイス・シャード〉が自動的に召喚され、凍結した敵めがけて飛ぶ。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n각각 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%의 피해를 주는 파편을 5개 날립니다. 빙결 상태의 적에게 주는 피해가 x25% 증가합니다.\n\nTags: 핵심, 서리, 빙결, 피해, 냉기, 마나.\n\n— Enchantment Effect —\n얼음 파편이 자동으로 구현되어 빙결된 적에게 날아갑니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nWystrzeliwujesz odłamki (5), z których każdy zadaje {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% pkt. obrażeń. Zamrożeni wrogowie otrzymują obrażenia zwiększone o x25%.\n\nTags: Główne, Mróz, Zamrażanie, Obrażenia, Zimno, Mana.\n\n— Enchantment Effect —\nLodowe Odłamki tworzą się automatycznie i lecą w stronę zamrożonych wrogów.",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte: {#}%\nLança 5 estilhaços que causam {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de dano cada um. Causa 25% de dano aumentado a inimigos congelados.\n\nTags: Principal, Geleira, Congelado, Dano, Gelo, Mana.\n\n— Enchantment Effect —\nEstilhaços de Gelo são conjurados automaticamente e voam na direção dos inimigos congelados.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы выпускаете 5 осколка:осколков, каждый из которых наносит {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% ед. урона. \"Осколки льда\" наносят на x25% больше урона замороженным противникам.\n\nTags: Основные, Мороз, Заморозка, Урон, Холод, Мана.\n\n— Enchantment Effect —\n\"Осколки льда\" создаются автоматически и поражают замороженных противников.",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n射出5枚冰片,每枚造成{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%点伤害。对冻结的敌人造成的伤害提高x25%。\n\nTags: 核心, 寒霜, 冻结, 伤害, 冰霜, 法力.\n\n— Enchantment Effect —\n自动召唤寒冰碎片,并使其飞向冻结的敌人。"
},
		id: 36,
		maxPoints: 5,
		values: [ "30", "25" ],
		x: -639.885,
		y: 87.015
	},
	"Enhanced Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Ice Shards", "Greater Ice Shards", "Destructive Ice Shards" ],
		description: `Ice Shards have a 15% chance to ricochet to another enemy. Ice Shards always ricochet off of Frozen enemies.

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserte Eissplitter",
			"esES": "Esquirlas de hielo mejoradas",
			"esMX": "Fragmentos de Hielo Potenciados",
			"frFR": "Éclats de glace renforcés",
			"itIT": "Schegge di Ghiaccio Rinforzate",
			"jaJP": "アイス・シャード(強化版)",
			"koKR": "강화된 얼음 파편",
			"plPL": "Wzmocnione Lodowe Odłamki",
			"ptBR": "Estilhaços de Gelo Aperfeiçoados",
			"ruRU": "Усиленные осколки льда",
			"zhCN": "强化寒冰碎片"
},
		descriptionLocalized: {
			"deDE": "Eissplitter verfügt über eine Chance von 15%, zu einem weiteren Gegner zu springen. Eissplitter springt immer von eingefrorenen Gegnern ab.\n\nTags: Basis, Frost, Eingefroren, Schaden, Kälte, Mana.",
			"esES": "Esquirlas de hielo tiene un 15% de probabilidad de rebotar sobre otro enemigo. Esquirlas de hielo siempre rebota sobre los enemigos congelados.\n\nTags: Principal, Escarcha, Congelación, Daño, Frío, Maná.",
			"esMX": "Fragmentos de Hielo tiene un 15% de probabilidad de rebotar en otro enemigo. Fragmentos de Hielo siempre rebota en los enemigos congelados.\n\nTags: Principal, Congelar, Congelado, Daño, Frío, Maná.",
			"frFR": "Les éclats de glace ont 15% de chances de ricocher sur une autre cible. Les éclats de glaces ricochent toujours sur les cibles gelées.\n\nTags: Principale, Givre, Gel, Dégâts, Froid, Mana.",
			"itIT": "Schegge di Ghiaccio ha una probabilità del 15% di rimbalzare su un altro nemico. Schegge di Ghiaccio rimbalza sempre sui nemici congelati.\n\nTags: Primaria, Gelo, Congelamento, Danni, Freddo, Mana.",
			"jaJP": "〈アイス・シャード〉が15%の確率で別の敵に跳飛する。〈アイス・シャード〉が凍結状態の敵に命中した場合は、必ず跳飛する。\n\nTags: コア, 寒気, 凍結, ダメージ, 冷気, マナ.",
			"koKR": "얼음 파편이 15% 확률로 다른 적에게 튕깁니다. 빙결 상태의 적에게는 항상 얼음 파편이 튕깁니다.\n\nTags: 핵심, 서리, 빙결, 피해, 냉기, 마나.",
			"plPL": "Lodowe Odłamki mają 15% szans na zrykoszetowanie do kolejnego wroga. Lodowe Odłamki zawsze rykoszetują od zamrożonych wrogów.\n\nTags: Główne, Mróz, Zamrażanie, Obrażenia, Zimno, Mana.",
			"ptBR": "Estilhaços de Gelo têm 15% de chance de ricochetear para outro inimigo. Estilhaços de Gelo sempre ricocheteiam em inimigos congelados.\n\nTags: Principal, Geleira, Congelado, Dano, Gelo, Mana.",
			"ruRU": "\"Осколки льда\" с вероятностью 15% рикошетят в другого противника. \"Осколки льда\" всегда рикошетят от замороженных противников.\n\nTags: Основные, Мороз, Заморозка, Урон, Холод, Мана.",
			"zhCN": "寒冰碎片有15%几率弹射向其他敌人。射向冻结敌人的寒冰碎片总是会弹射。\n\nTags: 核心, 寒霜, 冻结, 伤害, 冰霜, 法力."
},
		id: 37,
		maxPoints: 1,
		x: -971.225,
		y: 141.315
	},
	"Greater Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Enhanced Ice Shards" ],
		description: `While you have a Barrier active, casts of Ice Shards treat enemies as if they were Frozen.

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		nameLocalized: {
			"deDE": "Große Eissplitter",
			"esES": "Esquirlas de hielo superiores",
			"esMX": "Fragmentos de Hielo Mayores",
			"frFR": "Éclats de glace supérieurs",
			"itIT": "Schegge di Ghiaccio Maggiori",
			"jaJP": "アイス・シャード(増大)",
			"koKR": "상급 얼음 파편",
			"plPL": "Większe Lodowe Odłamki",
			"ptBR": "Estilhaços de Gelo Superiores",
			"ruRU": "Великие осколки льда",
			"zhCN": "强效寒冰碎片"
},
		descriptionLocalized: {
			"deDE": "Solange eine Barriere aktiv ist, verhält sich Eissplitter, als wären Gegner eingefroren.\n\nTags: Basis, Frost, Eingefroren, Schaden, Kälte, Mana.",
			"esES": "Mientras tienes una barrera activa, los lanzamientos de Esquirlas de hielo tratan a los enemigos como si estuvieran congelados.\n\nTags: Principal, Escarcha, Congelación, Daño, Frío, Maná.",
			"esMX": "Mientras tienes una barrera activa, tus lanzamientos de Fragmentos de Hielo tratan a los enemigos como si estuvieran congelados.\n\nTags: Principal, Congelar, Congelado, Daño, Frío, Maná.",
			"frFR": "Tant que vous avez une barrière active, les éclats de glace lancés agissent comme si les cibles étaient gelées.\n\nTags: Principale, Givre, Gel, Dégâts, Froid, Mana.",
			"itIT": "Quando hai una barriera attiva, i nemici subiscono gli effetti di Schegge di Ghiaccio come se fossero congelati.\n\nTags: Primaria, Gelo, Congelamento, Danni, Freddo, Mana.",
			"jaJP": "障壁が発生している間、〈アイス・シャード〉が敵を凍結したものとして扱う。\n\nTags: コア, 寒気, 凍結, ダメージ, 冷気, マナ.",
			"koKR": "보호막이 활성화되어 있는 동안, 얼음 파편을 시전하면 적을 빙결 상태로 간주합니다.\n\nTags: 핵심, 서리, 빙결, 피해, 냉기, 마나.",
			"plPL": "Kiedy masz aktywną barierę, użycie Lodowych Odłamków działa na wrogów tak, jakby byli zamrożeni.\n\nTags: Główne, Mróz, Zamrażanie, Obrażenia, Zimno, Mana.",
			"ptBR": "Enquanto você tiver uma barreira ativa, lançamentos de Estilhaços de Gelo tratam inimigos como se eles estivessem congelados.\n\nTags: Principal, Geleira, Congelado, Dano, Gelo, Mana.",
			"ruRU": "Пока действует барьер, \"Осколки льда\" действуют на противников так, будто они заморожены.\n\nTags: Основные, Мороз, Заморозка, Урон, Холод, Мана.",
			"zhCN": "当你有激活的屏障时,寒冰碎片可以将敌人视作冻结状态。\n\nTags: 核心, 寒霜, 冻结, 伤害, 冰霜, 法力."
},
		id: 38,
		maxPoints: 1,
		x: -1226.59,
		y: 115.585
	},
	"Destructive Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Enhanced Ice Shards" ],
		description: `Hitting an enemy with 5 Ice Shards in a single cast makes them Vulnerable for 2 seconds.

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		nameLocalized: {
			"deDE": "Zerstörerische Eissplitter",
			"esES": "Esquirlas de hielo destructoras",
			"esMX": "Fragmentos de Hielo Destructivos",
			"frFR": "Éclats de glace destructeurs",
			"itIT": "Schegge di Ghiaccio Distruttive",
			"jaJP": "アイス・シャード(破滅)",
			"koKR": "파괴적인 얼음 파편",
			"plPL": "Destruktywne Lodowe Odłamki",
			"ptBR": "Estilhaços de Gelo Destrutivos",
			"ruRU": "Разрушительные осколки льда",
			"zhCN": "毁灭寒冰碎片"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen Gegner mit einem Einsatz von Eissplitter 5-mal trefft, wird dieser 2 Sek. lang verwundbar.\n\nTags: Basis, Frost, Eingefroren, Schaden, Kälte, Mana.",
			"esES": "Golpear a un enemigo con 5 Esquirlas de hielo en un único lanzamiento lo vuelve vulnerable durante 2 s.\n\nTags: Principal, Escarcha, Congelación, Daño, Frío, Maná.",
			"esMX": "Golpear a un enemigo con 5 Fragmentos de Hielo en un mismo lanzamiento lo vuelve vulnerable durante 2 segundos.\n\nTags: Principal, Congelar, Congelado, Daño, Frío, Maná.",
			"frFR": "Les cibles touchées par 5 éclats de glace d'une seule utilisation d'Éclats de glace deviennent vulnérables pendant 2 s.\n\nTags: Principale, Givre, Gel, Dégâts, Froid, Mana.",
			"itIT": "Colpire un nemico con 5 Schegge di Ghiaccio con un unico lancio lo rende vulnerabile per 2 s.\n\nTags: Primaria, Gelo, Congelamento, Danni, Freddo, Mana.",
			"jaJP": "1回の詠唱で5個の〈アイス・シャード〉を1体の敵に命中させると、2秒間にわたり敵を脆弱状態にする。\n\nTags: コア, 寒気, 凍結, ダメージ, 冷気, マナ.",
			"koKR": "얼음 파편을 1회 시전하여 같은 적에게 5개의 얼음 파편을 적중하면 2초 동안 해당 적을 취약하게 만듭니다.\n\nTags: 핵심, 서리, 빙결, 피해, 냉기, 마나.",
			"plPL": "Wróg trafiony 5 Lodowymi Odłamkami przy jednorazowym użyciu umiejętności staje się odsłonięty na 2 sek.\n\nTags: Główne, Mróz, Zamrażanie, Obrażenia, Zimno, Mana.",
			"ptBR": "Acertar um inimigo com 5 Estilhaços de Gelo em um único lançamento torna-o vulnerável por 2 segundos.\n\nTags: Principal, Geleira, Congelado, Dano, Gelo, Mana.",
			"ruRU": "Когда \"Осколки льда\" поражают противника 5 раза:раз за одно применение, он становится уязвимым на 2 сек.\n\nTags: Основные, Мороз, Заморозка, Урон, Холод, Мана.",
			"zhCN": "单次施法中用5枚寒冰碎片命中一名敌人,会使其陷入易伤状态,持续2秒。\n\nTags: 核心, 寒霜, 冻结, 伤害, 冰霜, 法力."
},
		id: 39,
		maxPoints: 1,
		x: -1085.695,
		y: 260.63
	},
	"Devastation": {
		connections: [ "Core", "Elemental Dominance" ],
		description: `Your Maximum Mana is increased by {3/6/9/12/15/18/21/24/27/30}.

Tags: Mana.`,
		nameLocalized: {
			"deDE": "Verwüstung",
			"esES": "Devastación",
			"esMX": "Devastación",
			"frFR": "Dévastation",
			"itIT": "Devastazione",
			"jaJP": "圧倒",
			"koKR": "파멸",
			"plPL": "Spustoszenie",
			"ptBR": "Devastação",
			"ruRU": "Опустошение",
			"zhCN": "灭绝"
},
		descriptionLocalized: {
			"deDE": "Euer maximales Mana ist um {3/6/9/12/15/18/21/24/27/30} erhöht.\n\nTags: Mana.",
			"esES": "Tu maná máximo aumenta en {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Maná.",
			"esMX": "Tu maná máximo aumenta en {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Maná.",
			"frFR": "Votre maximum de mana est augmenté de {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Mana.",
			"itIT": "Il tuo mana massimo aumenta di {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Mana.",
			"jaJP": "マナの上限が{3/6/9/12/15/18/21/24/27/30}増加する。\n\nTags: マナ.",
			"koKR": "최대 마나가 {3/6/9/12/15/18/21/24/27/30} 증가합니다.\n\nTags: 마나.",
			"plPL": "Twoja maksymalna mana jest zwiększona o {3/6/9/12/15/18/21/24/27/30} pkt.\n\nTags: Mana.",
			"ptBR": "Seu mana máximo é aumentado em {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Mana.",
			"ruRU": "Максимальный запас маны увеличивается на {3/6/9/12/15/18/21/24/27/30} ед.\n\nTags: Мана.",
			"zhCN": "你的法力上限提高{3/6/9/12/15/18/21/24/27/30}点。\n\nTags: 法力."
},
		id: 40,
		maxPoints: 3,
		x: -520.555,
		y: 252.33
	},
	"Elemental Dominance": {
		connections: [ "Devastation" ],
		description: `Your Core Skills deal x{4/8/12/16/20/24/28/32/36/40}% increased damage when cast above 50 Mana.

Tags: Mana, Damage, Core.`,
		nameLocalized: {
			"deDE": "Herrschaft der Elemente",
			"esES": "Dominación elemental",
			"esMX": "Dominio Elemental",
			"frFR": "Domination élémentaire",
			"itIT": "Dominio Elementale",
			"jaJP": "元素の支配",
			"koKR": "원소 지배",
			"plPL": "Panowanie nad Żywiołami",
			"ptBR": "Dominância Elemental",
			"ruRU": "Власть над стихиями",
			"zhCN": "元素统御"
},
		descriptionLocalized: {
			"deDE": "Eure Basisfertigkeiten verursachen x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden, wenn sie mit mehr als 50 Mana gewirkt werden.\n\nTags: Mana, Schaden, Basis.",
			"esES": "Tus habilidades principales infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño cuando las lanzas con más de 50 de maná.\n\nTags: Maná, Daño, Principal.",
			"esMX": "Tus habilidades principales infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño cuando las lanzas con más de 50 de maná.\n\nTags: Maná, Daño, Principal.",
			"frFR": "Si vous avez plus de 50 points de mana lorsque vous utilisez vos compétences principales, celles-ci infligent x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires.\n\nTags: Mana, Dégâts, Principale.",
			"itIT": "Le tue abilità primarie infliggono il x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi quando vengono lanciate avendo almeno 50 mana.\n\nTags: Mana, Danni, Primaria.",
			"jaJP": "マナが50より多い状態で使用すると、コアスキルで与えるダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n\nTags: マナ, ダメージ, コア.",
			"koKR": "마나가 50|1을;를; 초과할 때 시전하면 자신의 핵심 기술이 주는 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 마나, 피해, 핵심.",
			"plPL": "Twoje umiejętności Główne zadają obrażenia zwiększone o x{4/8/12/16/20/24/28/32/36/40}%, jeśli podczas ich użycia masz ponad 50 pkt. many.\n\nTags: Mana, Obrażenia, Główne.",
			"ptBR": "Suas habilidades principais causam {4/8/12/16/20/24/28/32/36/40}% de dano aumentado ao serem lançadas com mais de 50 de mana.\n\nTags: Mana, Dano, Principal.",
			"ruRU": "Основные умения наносят на x{4/8/12/16/20/24/28/32/36/40}% больше урона, если в момент применения у вас больше 50 ед. маны.\n\nTags: Мана, Урон, Основные.",
			"zhCN": "法力大于50点时,你施放的核心技能伤害提高x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 法力, 伤害, 核心."
},
		id: 41,
		maxPoints: 3,
		x: -856.385,
		y: 406.375
	},
	"Potent Warding": {
		connections: [ "Core" ],
		description: `After casting a Non-Basic Skill, you gain {2/4/6/8/10/12/14/16/18/20}% Resistance to all elements and {1/2/3/4/5/6/7/8/9/10}% additional Resistance to that Skill's element for 3 seconds.

Tags: Resistance, Non-Physical.`,
		nameLocalized: {
			"deDE": "Mächtige Abwehr",
			"esES": "Custodia potente",
			"esMX": "Amparo Potente",
			"frFR": "Protection puissante",
			"itIT": "Protezione Potente",
			"jaJP": "強力結界",
			"koKR": "강력한 수호",
			"plPL": "Potężny Znak Ochronny",
			"ptBR": "Proteção Potente",
			"ruRU": "Надежные обереги",
			"zhCN": "强效咒护"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr eine Fertigkeit wirkt, die keine Grundfertigkeit ist, erhaltet Ihr 3 Sek. lang {2/4/6/8/10/12/14/16/18/20}% Widerstand gegen alle Schadensarten und {1/2/3/4/5/6/7/8/9/10}% zusätzlichen Widerstand gegen die Schadensart dieser Fertigkeit.\n\nTags: Widerstand, Nichtphysisch.",
			"esES": "Tras lanzar una habilidad no básica, obtienes un {2/4/6/8/10/12/14/16/18/20}% de resistencia a todos los elementos y un {1/2/3/4/5/6/7/8/9/10}% de resistencia adicional al elemento de la habilidad durante 3 s.\n\nTags: Resistencia, No física.",
			"esMX": "Después de lanzar una habilidad no básica, obtienes un {2/4/6/8/10/12/14/16/18/20}% de resistencia a todos los elementos y un {1/2/3/4/5/6/7/8/9/10}% más de resistencia al elemento de esa habilidad durante 3 segundos.\n\nTags: Resistencia, No físico.",
			"frFR": "Après avoir utilisé une compétence, hors compétences de base, vous bénéficiez de {2/4/6/8/10/12/14/16/18/20}% de résistance à tous les éléments et de {1/2/3/4/5/6/7/8/9/10}% de résistance supplémentaire à l'élément de cette compétence pendant 3 s.\n\nTags: Résistance, Dégâts non physiques.",
			"itIT": "Dopo aver lanciato un'abilità di tipo non base, ottieni il {2/4/6/8/10/12/14/16/18/20}% di resistenza a tutti gli elementi e il {1/2/3/4/5/6/7/8/9/10}% di resistenza aggiuntiva all'elemento di quell'abilità per 3 s.\n\nTags: Resistenza, Non fisico.",
			"jaJP": "非基本スキルを使用すると、3秒間にわたり、全属性への耐性が{2/4/6/8/10/12/14/16/18/20}%増加し、さらに使用したスキルの属性に対する耐性が{1/2/3/4/5/6/7/8/9/10}%増加する。\n\nTags: 耐性, 非物理.",
			"koKR": "기본 기술이 아닌 기술을 시전한 후 3초 동안 모든 원소 저항이 {2/4/6/8/10/12/14/16/18/20}% 증가하고, 해당 기술의 원소 저항이 추가로 {1/2/3/4/5/6/7/8/9/10}% 증가합니다.\n\nTags: 저항, 비물리.",
			"plPL": "Po użyciu umiejętności innej niż Podstawowa, zyskujesz premię {2/4/6/8/10/12/14/16/18/20}% do odporności na wszystkie żywioły oraz dodatkowo {1/2/3/4/5/6/7/8/9/10}% do odporności na żywioł tej umiejętności na 3 sek.\n\nTags: Odporność, Niefizyczne.",
			"ptBR": "Depois de lançar uma habilidade não básica, você recebe {2/4/6/8/10/12/14/16/18/20}% de resistência a todos os elementos e {1/2/3/4/5/6/7/8/9/10}% de resistência adicional para o elemento dessa habilidade por 3 segundos.\n\nTags: Resistência, Não física.",
			"ruRU": "Когда вы применяете умение, не являющийся базовым, ваше сопротивление всем стихиям повышается на {2/4/6/8/10/12/14/16/18/20}%, а сопротивление стихии этого умения – еще на {1/2/3/4/5/6/7/8/9/10}%. Время действия – 3 сек.\n\nTags: Сопротивление, Нефизический урон.",
			"zhCN": "施放一个非基础技能后,你获得{2/4/6/8/10/12/14/16/18/20}%全元素抗性和{1/2/3/4/5/6/7/8/9/10}%的该技能对应的元素抗性,持续3秒。\n\nTags: 抗性, 非物理."
},
		id: 42,
		maxPoints: 3,
		x: 622.72,
		y: 2.07
	},
};

sorcererData["Defensive"] = {
	"Flame Shield": {
		connections: [ "Defensive", "Enhanced Flame Shield" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Engulf yourself in flames for {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} seconds, Burning surrounding enemies for {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% damage per second.

While Flame Shield is active, you are Immune.

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.

— Enchantment Effect —
Flame Shield automatically activates when you take fatal damage. Can only happen once every 120 seconds.`,
		nameLocalized: {
			"deDE": "Flammenschild",
			"esES": "Escudo de llamas",
			"esMX": "Escudo Ígneo",
			"frFR": "Bouclier de feu",
			"itIT": "Scudo di Fiamme",
			"jaJP": "火炎の盾",
			"koKR": "화염 보호막",
			"plPL": "Tarcza Płomieni",
			"ptBR": "Escudo Flamejante",
			"ruRU": "Пламенный щит",
			"zhCN": "火盾"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nHüllt Euch {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} Sek. lang in Flammen und verbrennt Gegner in der Nähe für {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% Schaden pro Sekunde zu.\n\nSolange Flammenschild aktiv ist, seid Ihr immun.\n\nTags: Defensiv, Pyromanie, Immun., Schaden, Verbrennung, Abklingzeit.\n\n— Enchantment Effect —\nFlammenschild aktiviert sich automatisch, wenn Ihr tödlichen Schaden erleidet. Dieser Effekt kann nur einmal alle 120 Sek. auftreten.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nTe envuelves durante {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} s en unas llamas que infligen {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% de daño por segundo a los enemigos cercanos.\n\nMientras dura Escudo de llamas, eres inmune.\n\nTags: Defensiva, Piromancia, Inmune, Daño, Quemadura, Tiempo de reutilización.\n\n— Enchantment Effect —\nEscudo de llamas se activa automáticamente cuando sufres daño letal. Solo puede ocurrir una vez cada 120 s.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nTe envuelves en llamas durante {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} segundos, quemas a los enemigos circundantes y les infliges {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% de daño por segundo.\n\nMientras Escudo Ígneo está activa, eres inmune.\n\nTags: Defensivo, Piromancia, Inmune, Daño, Quemadura, Recuperación.\n\n— Enchantment Effect —\nEscudo Ígneo se activa automáticamente cuando recibes daño fatal. Solo puede ocurrir una vez cada 120 segundos.",
			"frFR": "Temps de recharge: {#} s\nChances de coup de chance: {#}%\nVous vous entourez de flammes pendant {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} s, ce qui brûle les adversaires à proximité en leur infligeant {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% points de dégâts par seconde.\n\nTant que Bouclier de feu est actif, vous êtes insensible.\n\nTags: Défensive, Pyromancie, Insensible, Dégâts, Brûlure, Temps de recharge.\n\n— Enchantment Effect —\nBouclier de feu s'active automatiquement lorsque vous subissez des dégâts qui devraient vous tuer. Cet effet ne peut se produire qu'une fois toutes les 120 s.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nTi avvolgi nelle fiamme per {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} s, mandando in fiamme i nemici circostanti e infliggendo {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% danni ogni secondo.\n\nMentre Scudo di Fiamme è attivo, sei immune.\n\nTags: Difesa, Piromanzia, Immunità, Danni, Bruciatura, Tempo di recupero.\n\n— Enchantment Effect —\nScudo di Fiamme si attiva automaticamente quando subisci danni fatali. Può attivarsi solo una volta ogni 120 s.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n{2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8}秒間炎に身を包んで付近の敵を炎上させ、毎秒{23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}%のダメージを与える。\n\n〈火炎の盾〉の発動中、自身が無効状態になる。\n\nTags: 防御, 火術, 無敵, ダメージ, 炎上, クールダウン.\n\n— Enchantment Effect —\n致命的なダメージを受けると〈火炎の盾〉が自動的に発動する。この効果は120秒に1回のみ発動する。",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n{2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8}초 동안 자신을 불길로 휩싸고 주위 적들을 불태워 초당 {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}%의 피해를 줍니다.\n\n화염 보호막이 활성화되어 있는 동안 면역 상태가 됩니다.\n\nTags: 방어, 방화, 면역, 피해, 불태우기, 재사용 대기시간.\n\n— Enchantment Effect —\n죽음에 이르는 피해를 받으면 화염 보호막이 자동으로 활성화됩니다. 120초에 한 번만 발동합니다.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nSpowijasz się w płomienie na {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} sek. i podpalasz pobliskich wrogów, zadając im {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% pkt. obrażeń na sekundę.\n\nKiedy Tarcza Płomieni jest aktywna, zyskujesz niewrażliwość.\n\nTags: Obrona, Piromancja, Niewrażliwość, Obrażenia, Podpalenie, Odnowienie.\n\n— Enchantment Effect —\nTarcza Płomieni aktywuje się automatycznie, gdy otrzymujesz śmiertelne obrażenia. Efekt ten może wystąpić tylko raz na 120 sek.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nEnvolve-se em chamas por {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} segundos, queimando inimigos ao redor e causando {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% de dano por segundo.\n\nEnquanto Escudo Flamejante está ativo, você fica imune.\n\nTags: Defesa, Piromancia, Imune, Dano, Queimadura, Recarga.\n\n— Enchantment Effect —\nEscudo Flamejante é ativado automaticamente quando você recebe dano fatal. Só pode ocorrer uma vez a cada 120 segundos.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы окутываете себя пламенем на {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} сек. и поджигаете противников вокруг, нанося {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% ед. урона от огня в секунду.\n\nПока действует \"Пламенный щит\", вы невосприимчивы.\n\nTags: Защита, Пиромантия, Неуязвимость, Урон, Горение, Время восстановления.\n\n— Enchantment Effect —\n\"Пламенный щит\" срабатывает автоматически, когда вы получаете смертельный урон. Срабатывает не чаще раза в 120 сек.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n用火焰笼罩你的身体,持续{2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8}秒,同时燃烧周围的敌人,每秒造成{23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}%点伤害。\n\n在火盾激活时,你获得免疫。\n\nTags: 防御, 爆焰, 免疫, 伤害, 燃烧, 冷却时间.\n\n— Enchantment Effect —\n火盾会在受到致命伤害时自动激活。每120秒只能触发一次。"
},
		id: 43,
		maxPoints: 5,
		values: [ "20", "50" ],
		x: -1.14,
		y: -278.29
	},
	"Enhanced Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Flame Shield", "Mystical Flame Shield", "Shimmering Flame Shield" ],
		description: `Flame Shield grants +25% Movement Speed while active.

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserter Flammenschild",
			"esES": "Escudo de llamas mejorado",
			"esMX": "Escudo Ígneo Potenciado",
			"frFR": "Bouclier de feu renforcé",
			"itIT": "Scudo di Fiamme Rinforzato",
			"jaJP": "火炎の盾(強化版)",
			"koKR": "강화된 화염 보호막",
			"plPL": "Wzmocniona Tarcza Płomieni",
			"ptBR": "Escudo Flamejante Aperfeiçoado",
			"ruRU": "Усиленный пламенный щит",
			"zhCN": "强化火盾"
},
		descriptionLocalized: {
			"deDE": "Flammenschild erhöht die Bewegungsgeschwindigkeit um +25%, solange die Fertigkeit aktiv ist.\n\nTags: Defensiv, Pyromanie, Immun., Schaden, Verbrennung, Abklingzeit.",
			"esES": "Escudo de llamas otorga un +25% de velocidad de movimiento mientras dura.\n\nTags: Defensiva, Piromancia, Inmune, Daño, Quemadura, Tiempo de reutilización.",
			"esMX": "Escudo Ígneo otorga un +25% de velocidad de movimiento mientras está activa.\n\nTags: Defensivo, Piromancia, Inmune, Daño, Quemadura, Recuperación.",
			"frFR": "Bouclier de feu augmente votre vitesse de déplacement de +25% tant qu'il est actif.\n\nTags: Défensive, Pyromancie, Insensible, Dégâts, Brûlure, Temps de recharge.",
			"itIT": "Scudo di Fiamme aumenta la velocità di movimento del +25% mentre è attivo.\n\nTags: Difesa, Piromanzia, Immunità, Danni, Bruciatura, Tempo di recupero.",
			"jaJP": "〈火炎の盾〉発動中は移動速度が+25%上昇する。\n\nTags: 防御, 火術, 無敵, ダメージ, 炎上, クールダウン.",
			"koKR": "화염 보호막이 활성화되어 있는 동안 이동 속도가 +25% 증가합니다.\n\nTags: 방어, 방화, 면역, 피해, 불태우기, 재사용 대기시간.",
			"plPL": "Kiedy Tarcza Płomieni jest aktywna, zapewnia premię +25% do szybkości ruchu.\n\nTags: Obrona, Piromancja, Niewrażliwość, Obrażenia, Podpalenie, Odnowienie.",
			"ptBR": "Escudo Flamejante concede +25% de velocidade de movimento enquanto ativo.\n\nTags: Defesa, Piromancia, Imune, Dano, Queimadura, Recarga.",
			"ruRU": "\"Пламенный щит\" повышает скорость передвижения на +25%.\n\nTags: Защита, Пиромантия, Неуязвимость, Урон, Горение, Время восстановления.",
			"zhCN": "火盾激活时,移动速度提高+25%。\n\nTags: 防御, 爆焰, 免疫, 伤害, 燃烧, 冷却时间."
},
		id: 44,
		maxPoints: 1,
		x: -4.89,
		y: -490.29
	},
	"Mystical Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Enhanced Flame Shield" ],
		description: `You gain 25% Mana Cost Reduction while Flame Shield is active.

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		nameLocalized: {
			"deDE": "Mystischer Flammenschild",
			"esES": "Escudo de llamas místico",
			"esMX": "Escudo Ígneo Místico",
			"frFR": "Bouclier de feu mystique",
			"itIT": "Scudo di Fiamme Mistico",
			"jaJP": "火炎の盾(神秘)",
			"koKR": "신비한 화염 보호막",
			"plPL": "Mistyczna Tarcza Płomieni",
			"ptBR": "Escudo Flamejante Místico",
			"ruRU": "Таинственный пламенный щит",
			"zhCN": "神秘火盾"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet 25% Manakostenreduktion, während Flammenschild aktiv ist.\n\nTags: Defensiv, Pyromanie, Immun., Schaden, Verbrennung, Abklingzeit.",
			"esES": "Obtienes un 25% de reducción de coste de maná mientras dura Escudo de llamas.\n\nTags: Defensiva, Piromancia, Inmune, Daño, Quemadura, Tiempo de reutilización.",
			"esMX": "Obtienes un 25% de reducción de costo de maná mientras Escudo Ígneo está activa.\n\nTags: Defensivo, Piromancia, Inmune, Daño, Quemadura, Recuperación.",
			"frFR": "Vous bénéficiez de 25% de réduction du coût en mana tant que Bouclier de feu est actif.\n\nTags: Défensive, Pyromancie, Insensible, Dégâts, Brûlure, Temps de recharge.",
			"itIT": "Mentre Scudo di Fiamme è attivo, il costo in mana delle abilità si riduce del 25%.\n\nTags: Difesa, Piromanzia, Immunità, Danni, Bruciatura, Tempo di recupero.",
			"jaJP": "〈火炎の盾〉の発動中、マナ消費量が25%軽減される。\n\nTags: 防御, 火術, 無敵, ダメージ, 炎上, クールダウン.",
			"koKR": "화염 보호막이 활성화되어 있는 동안 25%의 마나 소모량 감소를 얻습니다.\n\nTags: 방어, 방화, 면역, 피해, 불태우기, 재사용 대기시간.",
			"plPL": "Kiedy Tarcza Płomieni jest aktywna, zyskujesz premię 25% do redukcji kosztu many.\n\nTags: Obrona, Piromancja, Niewrażliwość, Obrażenia, Podpalenie, Odnowienie.",
			"ptBR": "Você recebe 25% de redução do custo de mana enquanto Escudo Flamejante está ativo.\n\nTags: Defesa, Piromancia, Imune, Dano, Queimadura, Recarga.",
			"ruRU": "Пока действует \"Пламенный щит\", все затраты маны уменьшаются на 25%.\n\nTags: Защита, Пиромантия, Неуязвимость, Урон, Горение, Время восстановления.",
			"zhCN": "火盾激活时,你获得25%法力消耗减免。\n\nTags: 防御, 爆焰, 免疫, 伤害, 燃烧, 冷却时间."
},
		id: 45,
		maxPoints: 1,
		x: -157.438,
		y: -605.77
	},
	"Shimmering Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Enhanced Flame Shield" ],
		description: `Flame Shield Heals you for 50% of your missing Life.

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		nameLocalized: {
			"deDE": "Schimmernder Flammenschild",
			"esES": "Escudo de llamas reluciente",
			"esMX": "Escudo Ígneo Resplandeciente",
			"frFR": "Bouclier de feu flamboyant",
			"itIT": "Scudo di Fiamme Splendente",
			"jaJP": "火炎の盾(輝滅)",
			"koKR": "빛나는 화염 보호막",
			"plPL": "Lśniąca Tarcza Płomieni",
			"ptBR": "Escudo Flamejante Reluzente",
			"ruRU": "Переливчатый пламенный щит",
			"zhCN": "微光火盾"
},
		descriptionLocalized: {
			"deDE": "Flammenschild heilt Euch um 50% Eures verlorenen Lebens.\n\nTags: Defensiv, Pyromanie, Immun., Schaden, Verbrennung, Abklingzeit.",
			"esES": "Escudo de llamas te cura un 50% de la vida que te falta.\n\nTags: Defensiva, Piromancia, Inmune, Daño, Quemadura, Tiempo de reutilización.",
			"esMX": "Escudo Ígneo te sana por un 50% de tu vida faltante.\n\nTags: Defensivo, Piromancia, Inmune, Daño, Quemadura, Recuperación.",
			"frFR": "Bouclier de feu vous rend 50% de vos points de vie manquants.\n\nTags: Défensive, Pyromancie, Insensible, Dégâts, Brûlure, Temps de recharge.",
			"itIT": "Scudo di Fiamme ti cura del 50% della tua Vita mancante.\n\nTags: Difesa, Piromanzia, Immunità, Danni, Bruciatura, Tempo di recupero.",
			"jaJP": "〈火炎の盾〉使用時、失ったライフの50%を回復する。\n\nTags: 防御, 火術, 無敵, ダメージ, 炎上, クールダウン.",
			"koKR": "화염 보호막이 잃은 생명력의 50%를 회복시킵니다.\n\nTags: 방어, 방화, 면역, 피해, 불태우기, 재사용 대기시간.",
			"plPL": "Tarcza Płomieni przywraca ci równowartość 50% brakujących punktów zdrowia.\n\nTags: Obrona, Piromancja, Niewrażliwość, Obrażenia, Podpalenie, Odnowienie.",
			"ptBR": "Escudo Flamejante cura 50% da sua vida perdida.\n\nTags: Defesa, Piromancia, Imune, Dano, Queimadura, Recarga.",
			"ruRU": "\"Пламенный щит\" восполняет вам 50% недостающего здоровья.\n\nTags: Защита, Пиромантия, Неуязвимость, Урон, Горение, Время восстановления.",
			"zhCN": "火盾会为你恢复已损失生命的50%。\n\nTags: 防御, 爆焰, 免疫, 伤害, 燃烧, 冷却时间."
},
		id: 46,
		maxPoints: 1,
		x: 151.31,
		y: -608.105
	},
	"Frost Nova": {
		connections: [ "Defensive", "Enhanced Frost Nova" ],
		description: `Cooldown: {#} seconds
Unleash a torrent of frost, Freezing enemies around you for 2 seconds.

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.

— Enchantment Effect —
Lucky Hit: Your Conjuration Skills have a 30% chance to unleash a Frost Nova when hitting enemies.`,
		nameLocalized: {
			"deDE": "Frostnova",
			"esES": "Nova de escarcha",
			"esMX": "Nova Gélida",
			"frFR": "Nova de givre",
			"itIT": "Nova Gelida",
			"jaJP": "フロスト・ノヴァ",
			"koKR": "서릿발",
			"plPL": "Nova Mrozu",
			"ptBR": "Nova Gélida",
			"ruRU": "Кольцо льда",
			"zhCN": "冰霜新星"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\n\nEntfesselt einen Froststrom, der Gegner um Euch herum 2 Sek. lang einfriert.\n\nTags: Defensiv, Frost, Eingefroren, Kontrollverlust, Abklingzeit.\n\n— Enchantment Effect —\nGlückstreffer: Eure Beschwörungsfertigkeiten haben eine Chance von 30%, bei einem Treffer eine Frostnova zu erschaffen.",
			"esES": "Tiempo de reutilización: {#} s\n\nLiberas un torrente de escarcha que congela a los enemigos cercanos durante 2 s.\n\nTags: Defensiva, Escarcha, Congelación, Control de masas, Tiempo de reutilización.\n\n— Enchantment Effect —\nGolpe de suerte: Tus habilidades de evocación tienen un 30% de probabilidad de liberar una Nova de escarcha al golpear a un enemigo.",
			"esMX": "Recuperación: {#} segundos\n\nDesatas un torrente gélido que congela a los enemigos a tu alrededor durante 2 segundos.\n\nTags: Defensivo, Congelar, Congelado, Control de multitudes, Recuperación.\n\n— Enchantment Effect —\nGolpe afortunado: Tus habilidades de Conjuración tienen un 30% de probabilidad de liberar una Nova Gélida al golpear a los enemigos.",
			"frFR": "Temps de recharge: {#} s\n\nVous déchaînez un torrent de givre qui gèle les adversaires autour de vous pendant 2 s.\n\nTags: Défensive, Givre, Gel, Perte de contrôle, Temps de recharge.\n\n— Enchantment Effect —\nCoup de chance: vos compétences de conjuration ont 30% de chances de lancer une nova de givre lorsqu'elles touchent des adversaires.",
			"itIT": "Tempo di recupero: {#} s\n\nScateni un torrente di gelo, congelando i nemici attorno a te per 2 s.\n\nTags: Difesa, Gelo, Congelamento, Effetti debilitanti, Tempo di recupero.\n\n— Enchantment Effect —\nColpo fortunato: le tue abilità d'invocazione hanno il 30% di probabilità di scatenare una Nova Gelida quando colpiscono i nemici.",
			"jaJP": "クールダウン: {#}秒\n\n寒気の激流を放ち、周囲の敵を2秒間にわたり凍結させる。\n\nTags: 防御, 寒気, 凍結, 操作障害効果, クールダウン.\n\n— Enchantment Effect —\n幸運の一撃: 召喚スキルが命中すると、30%の確率で〈フロスト・ノヴァ〉を放つ。",
			"koKR": "재사용 대기시간: {#}초\n\n서리의 격류를 내보내 주위의 적을 2초 동안 빙결시킵니다.\n\nTags: 방어, 서리, 빙결, 군중 제어, 재사용 대기시간.\n\n— Enchantment Effect —\n행운의 적중: 구현 기술이 적에게 적중했을 때 30% 확률로 서릿발을 방출합니다.",
			"plPL": "Czas odnowienia: {#} sek.\n\nWyzwalasz mroźną nawałnicę, która zamraża wrogów wokół ciebie na 2 sek.\n\nTags: Obrona, Mróz, Zamrażanie, Ograniczanie Kontroli, Odnowienie.\n\n— Enchantment Effect —\nSzczęśliwy traf: Twoje umiejętności Przyzywania mają 30% szans na wyzwolenie Novy Mrozu przy trafieniu wroga.",
			"ptBR": "Recarga: {#} segundos\n\nLibera uma torrente de gelo, congelando inimigos ao seu redor por 2 segundos.\n\nTags: Defesa, Geleira, Congelado, Controle de Grupo, Recarga.\n\n— Enchantment Effect —\nGolpe de Sorte: Suas habilidades de Conjuração têm 30% de chance de lançar uma Nova Gélida ao atingir inimigos.",
			"ruRU": "Время восстановления: {#} сек.\n\nВы выпускаете поток холода, замораживающий находящихся вокруг противников на 2 сек.\n\nTags: Защита, Мороз, Заморозка, Контроль, Время восстановления.\n\n— Enchantment Effect —\nУдачный удар: когда умения категории \"Колдовство\" поражают противников, с вероятностью 30% срабатывает \"Кольцо льда\".",
			"zhCN": "冷却时间:{#}秒\n\n释放一股冰霜洪流,冻结周围的敌人,持续2秒。\n\nTags: 防御, 寒霜, 冻结, 群控, 冷却时间.\n\n— Enchantment Effect —\n幸运一击:你的召唤魔法技能在命中敌人时有30%几率释放一次冰霜新星。"
},
		id: 47,
		maxPoints: 5,
		values: [ "{15/14.25/13.5/12.75/12/11.4/10.8/10.2/9.6/9}" ],
		x: 7.87,
		y: 296.675
	},
	"Enhanced Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Frost Nova", "Mystical Frost Nova", "Shimmering Frost Nova" ],
		description: `Killing enemies Frozen by Frost Nova reduces its Cooldown by 2 seconds, up to 6 seconds per cast.

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Frostnova",
			"esES": "Nova de escarcha mejorada",
			"esMX": "Nova Gélida Potenciada",
			"frFR": "Nova de givre renforcée",
			"itIT": "Nova Gelida Rinforzata",
			"jaJP": "フロスト・ノヴァ(強化版)",
			"koKR": "강화된 서릿발",
			"plPL": "Wzmocniona Nova Mrozu",
			"ptBR": "Nova Gélida Aperfeiçoada",
			"ruRU": "Усиленное кольцо льда",
			"zhCN": "强化冰霜新星"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Gegner tötet, die von Frostnova eingefroren wurden, wird die Abklingzeit um 2 Sek. reduziert, bis maximal 6 Sek. pro Einsatz.\n\nTags: Defensiv, Frost, Eingefroren, Kontrollverlust, Abklingzeit.",
			"esES": "Matar enemigos congelados con Nova de escarcha reduce 2 s su tiempo de reutilización, hasta un máximo de 6 s por lanzamiento.\n\nTags: Defensiva, Escarcha, Congelación, Control de masas, Tiempo de reutilización.",
			"esMX": "Matar enemigos congelados por Nova Gélida reduce su recuperación 2 segundos, hasta un máximo de 6 segundos por lanzamiento.\n\nTags: Defensivo, Congelar, Congelado, Control de multitudes, Recuperación.",
			"frFR": "Tuer des cibles gelées avec Nova de givre réduit son temps de recharge de 2 s, jusqu'à un maximum de 6 s par utilisation.\n\nTags: Défensive, Givre, Gel, Perte de contrôle, Temps de recharge.",
			"itIT": "Uccidere i nemici congelati da Nova Gelida ne riduce il tempo di recupero di 2 s, fino a un massimo di 6 s per lancio.\n\nTags: Difesa, Gelo, Congelamento, Effetti debilitanti, Tempo di recupero.",
			"jaJP": "凍結状態の敵を〈フロスト・ノヴァ〉で倒すとクールダウンが2秒短縮される。一度の使用での短縮量は最大6秒。\n\nTags: 防御, 寒気, 凍結, 操作障害効果, クールダウン.",
			"koKR": "서릿발로 빙결 상태의 적을 처치하면 재사용 대기시간이 시전당 2만큼, 최대 6까지 감소합니다.\n\nTags: 방어, 서리, 빙결, 군중 제어, 재사용 대기시간.",
			"plPL": "Zabijanie wrogów zamrożonych Novą Mrozu skraca jej czas odnowienia o 2 sek., maksymalnie do 6 sek. za każde użycie umiejętności.\n\nTags: Obrona, Mróz, Zamrażanie, Ograniczanie Kontroli, Odnowienie.",
			"ptBR": "Matar inimigos congelados por Nova Gélida reduz a recarga em 2 segundos, até 6 segundos por lançamento.\n\nTags: Defesa, Geleira, Congelado, Controle de Grupo, Recarga.",
			"ruRU": "Когда вы убиваете противников, замороженных \"Кольцом льда\", время восстановления умения сокращается на 2 сек. вплоть до 6 сек. за применение.\n\nTags: Защита, Мороз, Заморозка, Контроль, Время восстановления.",
			"zhCN": "消灭被冰霜新星冻结的敌人会使其冷却时间缩短2秒,每次施放最多缩短6秒。\n\nTags: 防御, 寒霜, 冻结, 群控, 冷却时间."
},
		id: 48,
		maxPoints: 1,
		x: 9.55,
		y: 507.05
	},
	"Mystical Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Enhanced Frost Nova" ],
		description: `Frost Nova makes enemies Vulnerable for 4 seconds, increased to 8 seconds against Bosses.

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Mystische Frostnova",
			"esES": "Nova de escarcha mística",
			"esMX": "Nova Gélida Mística",
			"frFR": "Nova de givre mystique",
			"itIT": "Nova Gelida Mistica",
			"jaJP": "フロスト・ノヴァ(神秘)",
			"koKR": "신비한 서릿발",
			"plPL": "Mistyczna Nova Mrozu",
			"ptBR": "Nova Gélida Mística",
			"ruRU": "Таинственное кольцо льда",
			"zhCN": "神秘冰霜新星"
},
		descriptionLocalized: {
			"deDE": "Frostnova macht Gegner 4 Sek. lang und Bosse 8 Sek. lang verwundbar.\n\nTags: Defensiv, Frost, Eingefroren, Kontrollverlust, Abklingzeit.",
			"esES": "Nova de escarcha vuelve vulnerables a los enemigos durante 4 s. El efecto aumenta a 8 s contra jefes.\n\nTags: Defensiva, Escarcha, Congelación, Control de masas, Tiempo de reutilización.",
			"esMX": "Nova Gélida vuelve a los enemigos vulnerables durante 4 segundos, lo que aumenta a 8 segundos contra jefes.\n\nTags: Defensivo, Congelar, Congelado, Control de multitudes, Recuperación.",
			"frFR": "Nova de givre rend les adversaires vulnérables pendant 4 s, et pendant 8 s si la cible est un boss.\n\nTags: Défensive, Givre, Gel, Perte de contrôle, Temps de recharge.",
			"itIT": "Nova Gelida rende i nemici vulnerabili per 4 s. La durata sale a 8 s contro i boss.\n\nTags: Difesa, Gelo, Congelamento, Effetti debilitanti, Tempo di recupero.",
			"jaJP": "〈フロスト・ノヴァ〉が敵を4秒間にわたり脆弱状態にする。持続時間がボスに対しては8秒に増加する。\n\nTags: 防御, 寒気, 凍結, 操作障害効果, クールダウン.",
			"koKR": "서릿발이 적을 4초 동안 취약하게 만듭니다. 우두머리를 상대할 때는 지속시간이 8초로 증가합니다.\n\nTags: 방어, 서리, 빙결, 군중 제어, 재사용 대기시간.",
			"plPL": "Nova Mrozu sprawia, że wrogowie są odsłonięci przez 4 sek. W przypadku bossów efekt ten trwa 8 sek.\n\nTags: Obrona, Mróz, Zamrażanie, Ograniczanie Kontroli, Odnowienie.",
			"ptBR": "Nova Gélida torna os inimigos vulneráveis por 4 segundos. A duração é aumentada para 8 segundos contra chefes.\n\nTags: Defesa, Geleira, Congelado, Controle de Grupo, Recarga.",
			"ruRU": "\"Кольцо льда\" делает противников уязвимыми на 4 сек. Действие эффекта продлевается до 8 сек., если цель является боссом.\n\nTags: Защита, Мороз, Заморозка, Контроль, Время восстановления.",
			"zhCN": "冰霜新星会使敌人陷入易伤状态,持续4秒。对首领提高至8秒。\n\nTags: 防御, 寒霜, 冻结, 群控, 冷却时间."
},
		id: 49,
		maxPoints: 1,
		x: -144.443,
		y: 623.882
	},
	"Shimmering Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Enhanced Frost Nova" ],
		description: `Frost Nova generates 4 Mana per enemy hit.

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Schimmernde Frostnova",
			"esES": "Nova de escarcha reluciente",
			"esMX": "Nova Gélida Resplandeciente",
			"frFR": "Nova de givre flamboyante",
			"itIT": "Nova Gelida Splendente",
			"jaJP": "フロスト・ノヴァ(輝滅)",
			"koKR": "빛나는 서릿발",
			"plPL": "Lśniąca Nova Mrozu",
			"ptBR": "Nova Gélida Reluzente",
			"ruRU": "Переливчатое кольцо льда",
			"zhCN": "微光冰霜新星"
},
		descriptionLocalized: {
			"deDE": "Frostnova erzeugt pro getroffenem Gegner 4 Mana.\n\nTags: Defensiv, Frost, Eingefroren, Kontrollverlust, Abklingzeit.",
			"esES": "Nova de escarcha genera 4 de maná por enemigo golpeado.\n\nTags: Defensiva, Escarcha, Congelación, Control de masas, Tiempo de reutilización.",
			"esMX": "Nova Gélida genera 4 de maná por cada enemigo golpeado.\n\nTags: Defensivo, Congelar, Congelado, Control de multitudes, Recuperación.",
			"frFR": "Nova de givre génère 4 points de mana par cible touchée.\n\nTags: Défensive, Givre, Gel, Perte de contrôle, Temps de recharge.",
			"itIT": "Nova Gelida rigenera 4 mana per ogni nemico colpito.\n\nTags: Difesa, Gelo, Congelamento, Effetti debilitanti, Tempo di recupero.",
			"jaJP": "〈フロスト・ノヴァ〉が敵1体に命中するごとに4のマナを回復する。\n\nTags: 防御, 寒気, 凍結, 操作障害効果, クールダウン.",
			"koKR": "서릿발이 적중한 적 하나당 4의 마나를 생성합니다.\n\nTags: 방어, 서리, 빙결, 군중 제어, 재사용 대기시간.",
			"plPL": "Nova Mrozu przywraca ci 4 pkt. many za każdego trafionego wroga.\n\nTags: Obrona, Mróz, Zamrażanie, Ograniczanie Kontroli, Odnowienie.",
			"ptBR": "Nova Gélida gera 4 de mana por inimigo atingido.\n\nTags: Defesa, Geleira, Congelado, Controle de Grupo, Recarga.",
			"ruRU": "\"Кольцо льда\" дает 4 ед. маны за каждого пораженного противника.\n\nTags: Защита, Мороз, Заморозка, Контроль, Время восстановления.",
			"zhCN": "冰霜新星每命中一名敌人,都会生成4点法力。\n\nTags: 防御, 寒霜, 冻结, 群控, 冷却时间."
},
		id: 50,
		maxPoints: 1,
		x: 165.83,
		y: 624.487
	},
	"Ice Armor": {
		connections: [ "Defensive", "Enhanced Ice Armor" ],
		description: `Cooldown: {#} seconds
A Barrier of ice forms around you for 6 seconds, absorbing {#}% of your Base Life in damage. While Ice Armor is active, 10% of your damage dealt is added to its Barrier.

Tags: Defensive, Frost, Barrier, Cooldown, Damage.

— Enchantment Effect —
Upon getting hit, you have a 5% chance to apply Ice Armor.`,
		nameLocalized: {
			"deDE": "Eisrüstung",
			"esES": "Armadura de hielo",
			"esMX": "Armadura Glacial",
			"frFR": "Armure de glace",
			"itIT": "Corazza di Ghiaccio",
			"jaJP": "アイス・アーマー",
			"koKR": "얼음 갑옷",
			"plPL": "Pancerz Lodu",
			"ptBR": "Armadura Gélida",
			"ruRU": "Ледяной доспех",
			"zhCN": "寒冰甲"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nUm Euch bildet sich 6 Sek. lang eine Eisbarriere, die Schaden in Höhe von {#}% Eures Basislebens absorbiert. Während Eisrüstung aktiv ist, wird 10% Eures verursachten Schadens der Barriere hinzugefügt.\n\nTags: Defensiv, Frost, Barriere, Abklingzeit, Schaden.\n\n— Enchantment Effect —\nWenn Ihr getroffen werdet, verfügt Ihr über eine Chance von 5%, Eisrüstung anzuwenden.",
			"esES": "Tiempo de reutilización: {#} s\nDurante 6 s, se forma a tu alrededor una barrera de hielo que absorbe un {#}% de tu vida base como daño. Mientras dura Armadura de hielo, un 10% del daño que infliges se añade a la barrera.\n\nTags: Defensiva, Escarcha, Barrera, Tiempo de reutilización, Daño.\n\n— Enchantment Effect —\nAl recibir un golpe, tienes un 5% de probabilidad de aplicarte Armadura de hielo.",
			"esMX": "Recuperación: {#} segundos\nSe forma una barrera de hielo a tu alrededor durante 6 segundos, que absorbe un {#}% de tu vida de base en daño. Mientras Armadura Glacial está activa, un 10% del daño que infliges se suma a su barrera.\n\nTags: Defensivo, Congelar, Barrera, Recuperación, Daño.\n\n— Enchantment Effect —\nAl recibir un golpe, tienes un 5% de probabilidad de lanzar Armadura Glacial.",
			"frFR": "Temps de recharge: {#} s\nUne barrière de glace se forme autour de vous pendant 6 s, et absorbe un montant de dégâts égal à {#}% de vos points de vie de base. Tant qu'Armure de glace est active, 10% des dégâts de froid que vous infligez sont ajoutés à sa barrière.\n\nTags: Défensive, Givre, Barrière, Temps de recharge, Dégâts.\n\n— Enchantment Effect —\nLorsque vous vous faites attaquer, vous avez 5% de chances de lancer Armure de glace.",
			"itIT": "Tempo di recupero: {#} s\nPer 6 s intorno a te si genera una barriera di ghiaccio che assorbe una quantità di danni pari al {#}% della tua Vita base. Mentre Corazza di Ghiaccio è attiva, il 10% dei danni che infliggi si aggiunge alla sua barriera.\n\nTags: Difesa, Gelo, Barriera, Tempo di recupero, Danni.\n\n— Enchantment Effect —\nQuando subisci un colpo, hai una probabilità del 5% di attivare Corazza di Ghiaccio.",
			"jaJP": "クールダウン: {#}秒\n氷の障壁を6秒間にわたり周囲に生み出し、基本ライフの{#}%にあたるのダメージを吸収する。〈アイス・アーマー〉を発動中は、与えた冷気ダメージの10%が障壁に追加される。\n\nTags: 防御, 寒気, 障壁, クールダウン, ダメージ.\n\n— Enchantment Effect —\n被弾した際に、5%の確率で〈アイス・アーマー〉が発動する。",
			"koKR": "재사용 대기시간: {#}초\n6초 동안 주위에 얼음의 보호막이 생겨나 기본 생명력의 {#}%에 해당하는 피해를 흡수합니다. 얼음 갑옷이 활성화되어 있는 동안 자신이 주는 피해의 10%가 해당 보호막에 추가됩니다.\n\nTags: 방어, 서리, 보호막, 재사용 대기시간, 피해.\n\n— Enchantment Effect —\n적중당하면 5% 확률로 얼음 갑옷 효과를 얻습니다.",
			"plPL": "Czas odnowienia: {#} sek.\nWyrasta wokół ciebie lodowa bariera, która utrzymuje się przez 6 sek. i pochłania obrażenia równe {#}% pkt. twojego podstawowego zdrowia. Kiedy Pancerz Lodu jest aktywny, równowartość 10% zadawanych przez ciebie obrażeń dodawana jest do tej bariery.\n\nTags: Obrona, Mróz, Bariera, Odnowienie, Obrażenia.\n\n— Enchantment Effect —\nJeśli staniesz się celem ataku, masz 5% szans na użycie Pancerza Lodu.",
			"ptBR": "Recarga: {#} segundos\nUma barreira de gelo forma-se ao seu redor por 6 segundos, absorvendo {#}% da sua vida básica em dano. Enquanto Armadura Gélida estiver ativa, 10% do dano causado por você é adicionado à barreira.\n\nTags: Defesa, Geleira, Barreira, Recarga, Dano.\n\n— Enchantment Effect —\nAo receber um golpe, você tem 5% de chance de aplicar Armadura Gélida.",
			"ruRU": "Время восстановления: {#} сек.\nВас на 6 сек. окружает ледяной барьер, поглощающий урон в объеме {#}% базового запаса здоровья. Пока действует \"Ледяной доспех\", 10% наносимого вами урона укрепляет барьер.\n\nTags: Защита, Мороз, Барьер, Время восстановления, Урон.\n\n— Enchantment Effect —\nКогда вы получаете урон, с вероятностью 5% срабатывает \"Ледяной доспех\".",
			"zhCN": "冷却时间:{#}秒\n在你周围形成一个由寒冰形成的屏障,持续6秒,吸收相当于你基础生命{#}%的伤害。寒冰甲激活时,你造成伤害的10%会被添加到屏障当中。\n\nTags: 防御, 寒霜, 屏障, 冷却时间, 伤害.\n\n— Enchantment Effect —\n被命中时,你有5%的几率施加寒冰甲。"
},
		id: 51,
		maxPoints: 5,
		values: [ "20", "" ],
		x: 421.865,
		y: 200.98
	},
	"Enhanced Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Ice Armor", "Shimmering Ice Armor", "Mystical Ice Armor" ],
		description: `While Ice Armor is active, your Mana Regeneration is increased by x25%.

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		nameLocalized: {
			"deDE": "Verbesserte Eisrüstung",
			"esES": "Armadura de hielo mejorada",
			"esMX": "Armadura Glacial Potenciada",
			"frFR": "Armure de glace renforcée",
			"itIT": "Corazza di Ghiaccio Rinforzata",
			"jaJP": "アイス・アーマー(強化版)",
			"koKR": "강화된 얼음 갑옷",
			"plPL": "Wzmocniony Pancerz Lodu",
			"ptBR": "Armadura Gélida Aperfeiçoada",
			"ruRU": "Усиленный ледяной доспех",
			"zhCN": "强化寒冰甲"
},
		descriptionLocalized: {
			"deDE": "Solange Eisrüstung aktiv ist, ist Eure Manaregeneration um x25% erhöht.\n\nTags: Defensiv, Frost, Barriere, Abklingzeit, Schaden.",
			"esES": "Mientras dura Armadura de hielo, tu regeneración de maná aumenta un x25%.\n\nTags: Defensiva, Escarcha, Barrera, Tiempo de reutilización, Daño.",
			"esMX": "Mientras Armadura Glacial está activa, tu regeneración de maná aumenta un x25%.\n\nTags: Defensivo, Congelar, Barrera, Recuperación, Daño.",
			"frFR": "Tant qu'Armure de glace est active, votre régénération de mana est augmentée de x25%.\n\nTags: Défensive, Givre, Barrière, Temps de recharge, Dégâts.",
			"itIT": "Quando Corazza di Ghiaccio è attiva, la rigenerazione di mana aumenta del x25%.\n\nTags: Difesa, Gelo, Barriera, Tempo di recupero, Danni.",
			"jaJP": "〈アイス・アーマー〉発動中、マナ生成量がx25%増加する。\n\nTags: 防御, 寒気, 障壁, クールダウン, ダメージ.",
			"koKR": "얼음 갑옷이 활성화되어 있는 동안 마나 재생량이 x25% 증가합니다.\n\nTags: 방어, 서리, 보호막, 재사용 대기시간, 피해.",
			"plPL": "Kiedy Pancerz Lodu jest aktywny, masz regenerację many powiększoną o x25%.\n\nTags: Obrona, Mróz, Bariera, Odnowienie, Obrażenia.",
			"ptBR": "Enquanto Armadura Gélida estiver ativa, sua regeneração de mana é aumentada em 25%.\n\nTags: Defesa, Geleira, Barreira, Recarga, Dano.",
			"ruRU": "\"Ледяной доспех\" повышает скорость восстановления маны на x25%.\n\nTags: Защита, Мороз, Барьер, Время восстановления, Урон.",
			"zhCN": "寒冰甲激活时,你的法力回复速度提高x25%。\n\nTags: 防御, 寒霜, 屏障, 冷却时间, 伤害."
},
		id: 52,
		maxPoints: 1,
		x: 707.875,
		y: 325.705
	},
	"Shimmering Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Enhanced Ice Armor" ],
		description: `Enemies that hit you while Ice Armor is active have a 15% chance to become Frozen for 3 seconds.

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		nameLocalized: {
			"deDE": "Schimmernde Eisrüstung",
			"esES": "Armadura de hielo reluciente",
			"esMX": "Armadura Glacial Resplandeciente",
			"frFR": "Armure de glace flamboyante",
			"itIT": "Corazza di Ghiaccio Splendente",
			"jaJP": "アイス・アーマー(輝滅)",
			"koKR": "빛나는 얼음 갑옷",
			"plPL": "Lśniący Pancerz Lodu",
			"ptBR": "Armadura Gélida Reluzente",
			"ruRU": "Переливчатый ледяной доспех",
			"zhCN": "微光寒冰甲"
},
		descriptionLocalized: {
			"deDE": "Wenn Gegner Euch treffen, während Eisrüstung aktiv ist, besteht eine Chance von 15%, dass sie 3 Sek. lang eingefroren werden.\n\nTags: Defensiv, Frost, Barriere, Abklingzeit, Schaden.",
			"esES": "Los enemigos que te golpean mientras dura Armadura de hielo tienen un 15% de probabilidad de quedar congelados durante 3 s.\n\nTags: Defensiva, Escarcha, Barrera, Tiempo de reutilización, Daño.",
			"esMX": "Los enemigos que te golpean mientras Armadura Glacial está activa tienen un 15% de probabilidad de congelarse durante 3 segundos.\n\nTags: Defensivo, Congelar, Barrera, Recuperación, Daño.",
			"frFR": "Les adversaires qui vous touchent pendant qu'Armure de glace est active ont 15% de chances de se faire geler pendant 3 s.\n\nTags: Défensive, Givre, Barrière, Temps de recharge, Dégâts.",
			"itIT": "Quando Corazza di Ghiaccio è attiva, i nemici che ti colpiscono hanno una probabilità del 15% di diventare congelati per 3 s.\n\nTags: Difesa, Gelo, Barriera, Tempo di recupero, Danni.",
			"jaJP": "〈アイス・アーマー〉発動中、自分に攻撃を命中させた敵が15%の確率で3秒間にわたり凍結する。\n\nTags: 防御, 寒気, 障壁, クールダウン, ダメージ.",
			"koKR": "얼음 갑옷이 활성화되어 있는 동안 자신을 적중하는 적이 15% 확률로 3초 동안 빙결됩니다.\n\nTags: 방어, 서리, 보호막, 재사용 대기시간, 피해.",
			"plPL": "Istnieje 15% szans na to, że wrogowie, których ataki trafią cię w czasie działania Pancerza Lodu, zostaną zamrożeni na 3 sek.\n\nTags: Obrona, Mróz, Bariera, Odnowienie, Obrażenia.",
			"ptBR": "Inimigos que atingirem você enquanto Armadura Gélida estiver ativa têm 15% de chance de serem congelados por 3 segundos.\n\nTags: Defesa, Geleira, Barreira, Recarga, Dano.",
			"ruRU": "Противники, атакующие вас, пока действует \"Ледяной доспех\", с вероятностью 15% замораживаются на 3 сек.\n\nTags: Защита, Мороз, Барьер, Время восстановления, Урон.",
			"zhCN": "寒冰甲激活时,攻击你的敌人有15%几率被冻结3秒。\n\nTags: 防御, 寒霜, 屏障, 冷却时间, 伤害."
},
		id: 53,
		maxPoints: 1,
		x: 787.605,
		y: 459.825
	},
	"Mystical Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Enhanced Ice Armor" ],
		description: `Damage against Vulnerable enemies contributes 100% more to Ice Armor's Barrier.

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		nameLocalized: {
			"deDE": "Mystische Eisrüstung",
			"esES": "Armadura de hielo mística",
			"esMX": "Armadura Glacial Mística",
			"frFR": "Armure de glace mystique",
			"itIT": "Corazza di Ghiaccio Mistica",
			"jaJP": "アイス・アーマー(神秘)",
			"koKR": "신비한 얼음 갑옷",
			"plPL": "Mistyczny Pancerz Lodu",
			"ptBR": "Armadura Gélida Mística",
			"ruRU": "Таинственный ледяной доспех",
			"zhCN": "神秘寒冰甲"
},
		descriptionLocalized: {
			"deDE": "Schaden gegen verwundbare Gegner trägt 100% mehr zur Barriere von Eisrüstung bei.\n\nTags: Defensiv, Frost, Barriere, Abklingzeit, Schaden.",
			"esES": "El daño contra enemigos vulnerables contribuye un 100% más a la barrera de Armadura de hielo.\n\nTags: Defensiva, Escarcha, Barrera, Tiempo de reutilización, Daño.",
			"esMX": "El daño contra enemigos vulnerables contribuye un 100% más a tu barrera de Armadura Glacial.\n\nTags: Defensivo, Congelar, Barrera, Recuperación, Daño.",
			"frFR": "La contribution des dégâts infligés aux cibles vulnérables à la barrière d'Armure de glace est augmentée de 100%.\n\nTags: Défensive, Givre, Barrière, Temps de recharge, Dégâts.",
			"itIT": "I danni contro i nemici vulnerabili contribuiscono il 100% in più alla barriera di Corazza di Ghiaccio.\n\nTags: Difesa, Gelo, Barriera, Tempo di recupero, Danni.",
			"jaJP": "脆弱状態の敵に与えたダメージの〈アイス・アーマー〉 の障壁への還元量が100%増加する。\n\nTags: 防御, 寒気, 障壁, クールダウン, ダメージ.",
			"koKR": "취약 상태의 적에게 피해를 주면 얼음 갑옷의 보호막에 100% 더 기여합니다.\n\nTags: 방어, 서리, 보호막, 재사용 대기시간, 피해.",
			"plPL": "Obrażenia zadawane odsłoniętym wrogom zapewniają o 100% mocniejszą barierę za Pancerz Lodu.\n\nTags: Obrona, Mróz, Bariera, Odnowienie, Obrażenia.",
			"ptBR": "Dano contra inimigos vulneráveis contribui 100% a mais para a barreira de Armadura de Gelo.\n\nTags: Defesa, Geleira, Barreira, Recarga, Dano.",
			"ruRU": "Урон, который вы наносите уязвимым противникам, укрепляет барьер \"Ледяного доспеха\" с увеличенной на 100% эффективностью.\n\nTags: Защита, Мороз, Барьер, Время восстановления, Урон.",
			"zhCN": "对易伤状态的敌人造成的伤害会额外为寒冰甲提供100%的屏障。\n\nTags: 防御, 寒霜, 屏障, 冷却时间, 伤害."
},
		id: 54,
		maxPoints: 1,
		x: 979.38,
		y: 318.55
	},
	"Teleport": {
		connections: [ "Defensive", "Enhanced Teleport" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Transform into lightning, becoming Unstoppable and surging to the target location, dealing {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage around you upon arrival.

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.

— Enchantment Effect —
Evade is replaced with a short range Teleport on a {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} second Cooldown.`,
		nameLocalized: {
			"deDE": "Teleportation",
			"esES": "Teletransporte",
			"esMX": "Teletransportar",
			"frFR": "Téléportation",
			"itIT": "Teletrasporto",
			"jaJP": "テレポート",
			"koKR": "순간이동",
			"plPL": "Teleportacja",
			"ptBR": "Teleporte",
			"ruRU": "Телепортация",
			"zhCN": "传送术"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nVerwandelt Euch in einen Blitz und werdet unaufhaltsam. Ihr schnellt zum Zielort und verursacht bei der Ankunft {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% Schaden um Euch herum.\n\nTags: Defensiv, Schock, Schaden, Blitz, Abklingzeit, Unaufhaltsam.\n\n— Enchantment Effect —\nEntrinnen wird durch eine Teleportation mit kurzer Reichweite und einer Abklingzeit von {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} Sek. ersetzt.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nTe transformas en rayos, te vuelves imparable y te desplazas rápidamente hasta la ubicación seleccionada para infligir {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño al llegar.\n\nTags: Defensiva, Electrocución, Daño, Rayos, Tiempo de reutilización, Imparable.\n\n— Enchantment Effect —\nEvadir se sustituye por un Teletransporte de corto alcance con un tiempo de reutilización de {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} s.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nTe transformas en rayo, te vuelves imparable, te desplazas hacia la ubicación objetivo e infliges {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño a tu alrededor al llegar a destino.\n\nTags: Defensivo, Choque, Daño, Rayo, Recuperación, Imparable.\n\n— Enchantment Effect —\nEvadir se reemplaza por un Teletransportar de corto alcance, que tiene una recuperación de {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} segundos.",
			"frFR": "Temps de recharge: {#} s\nChances de coup de chance: {#}%\nVous vous transformez en éclair, devenez inarrêtable et frappez l'endroit ciblé en infligeant {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% points de dégâts autour de vous à l'impact.\n\nTags: Défensive, Foudre, Dégâts, Temps de recharge, Inarrêtable.\n\n— Enchantment Effect —\nVotre Esquive est remplacée par une téléportation à courte portée avec un temps de recharge de {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} s.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nTi trasformi in un fulmine, diventando inarrestabile e comparendo sulla posizione bersaglio per infliggere {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% danni attorno a te all'arrivo.\n\nTags: Difesa, Folgore, Danni, Fulmine, Tempo di recupero, Inarrestabile.\n\n— Enchantment Effect —\nElusione viene sostituita da Teletrasporto a corto raggio con un tempo di recupero di {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} s.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n稲妻に姿を変え、抑圧不可状態になって目標地点に高速移動し、到達時に周囲に{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%のダメージを与える。\n\nTags: 防御, 電撃, ダメージ, 稲妻, クールダウン, 抑圧不可.\n\n— Enchantment Effect —\n〈回避〉が{17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2}秒のクールダウンで短距離の〈テレポート〉と入れ替わる。",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n번개로 변하여 저지 불가 상태가 되고 대상 지점으로 쇄도하며, 도착 시 주위에 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%의 피해를 줍니다.\n\nTags: 방어, 감전, 피해, 번개, 재사용 대기시간, 저지 불가.\n\n— Enchantment Effect —\n피하기가 재사용 대기시간 {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2}초의 단거리 순간이동으로 대체됩니다.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nPrzemieniasz się w błyskawicę, zyskujesz nieustępliwość i doskakujesz we wskazane miejsce, po czym zadajesz tam wokół siebie {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% pkt. obrażeń.\n\nTags: Obrona, Porażenie, Obrażenia, Piorun, Odnowienie, Nieustępliwość.\n\n— Enchantment Effect —\nOdskok zostaje zastąpiony Teleportacją na niewielką odległość, któej czas odnowienia wynosi {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} sek.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nTransforma-se em um raio, tornando-se implacável, avançando até o local selecionado e causando {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de dano ao seu redor ao chegar.\n\nTags: Defesa, Choque, Dano, Eletricidade, Recarga, Implacável.\n\n— Enchantment Effect —\nEvadir é substituída por Teleporte de curto alcance com uma recarga de {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} segundos.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы превращаетесь в поток электричества, получаете неудержимость, устремляетесь в указанную область и по прибытии наносите {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% ед. урона целям вокруг себя.\n\nTags: Защита, Шок, Урон, Молния, Время восстановления, Неудержимость.\n\n— Enchantment Effect —\n\"Уклонение\" заменяется \"Телепортацией\" с малым радиусом действия и временем восстановления {17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2} сек.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n化身闪电,不可阻挡,涌向目标位置并在抵达时对附近造成{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%点伤害。\n\nTags: 防御, 电冲, 伤害, 闪电, 冷却时间, 不可阻挡.\n\n— Enchantment Effect —\n闪避被短距离传送术取代,拥有{17/16.15/15.3/14.45/13.6/12.92/12.24/11.56/10.88/10.2}秒的冷却时间。"
},
		id: 55,
		maxPoints: 5,
		values: [ "{11/10.45/9.9/9.35/8.8/8.36/7.92/7.48/7.04/6.6}", "40" ],
		x: 422.375,
		y: -202.015
	},
	"Enhanced Teleport": {
		baseSkill: "Teleport",
		connections: [ "Teleport", "Mystical Teleport", "Shimmering Teleport" ],
		description: `Teleport's Cooldown is decreased by 0.5 seconds per enemy hit, up to 3 seconds.

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		nameLocalized: {
			"deDE": "Verbesserte Teleportation",
			"esES": "Teletransporte mejorado",
			"esMX": "Teletransportación Potenciada",
			"frFR": "Téléportation renforcée",
			"itIT": "Teletrasporto Rinforzato",
			"jaJP": "テレポート(強化版)",
			"koKR": "강화된 순간이동",
			"plPL": "Wzmocniona Teleportacja",
			"ptBR": "Teleporte Aperfeiçoado",
			"ruRU": "Усиленная телепортация",
			"zhCN": "强化传送术"
},
		descriptionLocalized: {
			"deDE": "Die Abklingzeit von Teleportation wird pro getroffenem Gegner um 0.5 Sek. reduziert, bis maximal 3 Sek.\n\nTags: Defensiv, Schock, Schaden, Blitz, Abklingzeit, Unaufhaltsam.",
			"esES": "El tiempo de reutilización de Teletransporte se reduce 0.5 s por enemigo golpeado, hasta un máximo de 3 s.\n\nTags: Defensiva, Electrocución, Daño, Rayos, Tiempo de reutilización, Imparable.",
			"esMX": "La recuperación de Teletransportar disminuye 0.5 segundos por enemigo golpeado, hasta un máximo de 3 segundos.\n\nTags: Defensivo, Choque, Daño, Rayo, Recuperación, Imparable.",
			"frFR": "Le temps de recharge de Téléportation est réduit de 0.5 s pour chaque cible touchée, jusqu'à un maximum de 3 s.\n\nTags: Défensive, Foudre, Dégâts, Temps de recharge, Inarrêtable.",
			"itIT": "Il tempo di recupero di Teletrasporto si riduce di 0.5 s per ogni nemico colpito, fino a un massimo di 3 s.\n\nTags: Difesa, Folgore, Danni, Fulmine, Tempo di recupero, Inarrestabile.",
			"jaJP": "〈テレポート〉のクールダウンが、命中した敵1体ごとに0.5秒短くなる。短縮量は最大3秒。\n\nTags: 防御, 電撃, ダメージ, 稲妻, クールダウン, 抑圧不可.",
			"koKR": "적을 적중할 때마다 순간이동의 재사용 대기시간이 0.5초만큼, 최대 3초까지 감소합니다.\n\nTags: 방어, 감전, 피해, 번개, 재사용 대기시간, 저지 불가.",
			"plPL": "Czas odnowienia Teleportacji jest skrócony o 0.5 sek. za każdego trafionego wroga, maksymalnie do 3 sek.\n\nTags: Obrona, Porażenie, Obrażenia, Piorun, Odnowienie, Nieustępliwość.",
			"ptBR": "A recarga de Teleporte é reduzida em 0.5 segundos por inimigo atingido, até 3 segundos.\n\nTags: Defesa, Choque, Dano, Eletricidade, Recarga, Implacável.",
			"ruRU": "Время восстановления \"Телепортации\" сокращается на 0.5 сек. за каждого пораженного противника вплоть до 3 сек.\n\nTags: Защита, Шок, Урон, Молния, Время восстановления, Неудержимость.",
			"zhCN": "传送术每命中一名敌人,其冷却时间就会缩短0.5秒,最多缩短3秒。\n\nTags: 防御, 电冲, 伤害, 闪电, 冷却时间, 不可阻挡."
},
		id: 56,
		maxPoints: 1,
		x: 707.335,
		y: -346.205
	},
	"Mystical Teleport": {
		baseSkill: "Teleport",
		connections: [ "Enhanced Teleport" ],
		description: `For 4 seconds after Teleporting, Crackling Energy hits 2 additional enemies.

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		nameLocalized: {
			"deDE": "Mystische Teleportation",
			"esES": "Teletransporte místico",
			"esMX": "Teletransportación Mística",
			"frFR": "Téléportation mystique",
			"itIT": "Teletrasporto Mistico",
			"jaJP": "テレポート(神秘)",
			"koKR": "신비한 순간이동",
			"plPL": "Mistyczna Teleportacja",
			"ptBR": "Teleporte Místico",
			"ruRU": "Таинственная телепортация",
			"zhCN": "神秘传送术"
},
		descriptionLocalized: {
			"deDE": "Nach der Teleportation trifft Knisternde Energie 4 Sek. lang 2 zusätzliche Gegner.\n\nTags: Defensiv, Schock, Schaden, Blitz, Abklingzeit, Unaufhaltsam.",
			"esES": "Durante 4 s tras Teletransportarte, la energía crepitante golpea a 2 enemigos más.\n\nTags: Defensiva, Electrocución, Daño, Rayos, Tiempo de reutilización, Imparable.",
			"esMX": "Durante 4 segundos después de teletransportarte, la Energía Crepitante golpea a 2 enemigos más.\n\nTags: Defensivo, Choque, Daño, Rayo, Recuperación, Imparable.",
			"frFR": "Pendant les 4 s qui suivent la téléportation, l'énergie crépitante touche 2 adversaires supplémentaires.\n\nTags: Défensive, Foudre, Dégâts, Temps de recharge, Inarrêtable.",
			"itIT": "Per 4 s dopo il Teletrasporto, Energia Crepitante colpisce 2 nemici aggiuntivi.\n\nTags: Difesa, Folgore, Danni, Fulmine, Tempo di recupero, Inarrestabile.",
			"jaJP": "〈テレポート〉後の4秒間、〈帯び出す電気〉がさらに2体の敵に命中する。\n\nTags: 防御, 電撃, ダメージ, 稲妻, クールダウン, 抑圧不可.",
			"koKR": "순간이동 후 4초 동안 짜릿한 에너지가 적 2마리에게 추가로 적중합니다.\n\nTags: 방어, 감전, 피해, 번개, 재사용 대기시간, 저지 불가.",
			"plPL": "Przez 4 sek. po Teleportacji Roziskrzona Energia trafia 2 dodatkowych wrogów.\n\nTags: Obrona, Porażenie, Obrażenia, Piorun, Odnowienie, Nieustępliwość.",
			"ptBR": "Por 4 segundos depois de Teleporte, Energia Crepitante atinge 2 inimigos adicionais.\n\nTags: Defesa, Choque, Dano, Eletricidade, Recarga, Implacável.",
			"ruRU": "В течение 4 сек. после телепортации искрящиеся заряды энергии поражают еще 2 противников:противников.\n\nTags: Защита, Шок, Урон, Молния, Время восстановления, Неудержимость.",
			"zhCN": "使用传送术后的4秒内,爆裂电花额外命中2名敌人。\n\nTags: 防御, 电冲, 伤害, 闪电, 冷却时间, 不可阻挡."
},
		id: 57,
		maxPoints: 1,
		x: 742.975,
		y: -485.9
	},
	"Shimmering Teleport": {
		baseSkill: "Teleport",
		connections: [ "Enhanced Teleport" ],
		description: `After Teleporting, you gain 30% Damage Reduction for 5 seconds.

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		nameLocalized: {
			"deDE": "Schimmernde Teleportation",
			"esES": "Teletransporte reluciente",
			"esMX": "Teletransportación Resplandeciente",
			"frFR": "Téléportation flamboyante",
			"itIT": "Teletrasporto Splendente",
			"jaJP": "テレポート(輝滅)",
			"koKR": "빛나는 순간이동",
			"plPL": "Lśniąca Teleportacja",
			"ptBR": "Teleporte Reluzente",
			"ruRU": "Переливчатая телепортация",
			"zhCN": "微光传送术"
},
		descriptionLocalized: {
			"deDE": "Nach der Teleportation erhaltet Ihr 5 Sek. lang 30% Schadensreduktion.\n\nTags: Defensiv, Schock, Schaden, Blitz, Abklingzeit, Unaufhaltsam.",
			"esES": "Después de Teletransportarte, obtienes un 30% de reducción de daño durante 5 s.\n\nTags: Defensiva, Electrocución, Daño, Rayos, Tiempo de reutilización, Imparable.",
			"esMX": "Después de teletransportarte, obtienes un 30% de reducción de daño durante 5 segundos.\n\nTags: Defensivo, Choque, Daño, Rayo, Recuperación, Imparable.",
			"frFR": "Pendant les 5 s qui suivent la téléportation, vous bénéficiez de 30% de réduction des dégâts.\n\nTags: Défensive, Foudre, Dégâts, Temps de recharge, Inarrêtable.",
			"itIT": "Dopo aver usato Teletrasporto, ottieni il 30% di riduzione danni per 5 s.\n\nTags: Difesa, Folgore, Danni, Fulmine, Tempo di recupero, Inarrestabile.",
			"jaJP": "〈テレポート〉後の5秒間は、受けるダメージが30%減少する。\n\nTags: 防御, 電撃, ダメージ, 稲妻, クールダウン, 抑圧不可.",
			"koKR": "순간이동 후 5초 동안 30%의 피해 감소를 얻습니다.\n\nTags: 방어, 감전, 피해, 번개, 재사용 대기시간, 저지 불가.",
			"plPL": "Po Teleportacji zyskujesz premię 30% do redukcji obrażeń na 5 sek.\n\nTags: Obrona, Porażenie, Obrażenia, Piorun, Odnowienie, Nieustępliwość.",
			"ptBR": "Após o Teleporte, você recebe 30% de redução de dano por 5 segundos.\n\nTags: Defesa, Choque, Dano, Eletricidade, Recarga, Implacável.",
			"ruRU": "После телепортации вы получаете на 30% меньше урона в течение 5 сек.\n\nTags: Защита, Шок, Урон, Молния, Время восстановления, Неудержимость.",
			"zhCN": "传送后,你获得30%的伤害减免,持续5秒。\n\nTags: 防御, 电冲, 伤害, 闪电, 冷却时间, 不可阻挡."
},
		id: 58,
		maxPoints: 1,
		x: 967.73,
		y: -351.155
	},
	"Elemental Attunement": {
		connections: [ "Defensive" ],
		description: `Lucky Hit: Critical Strikes have a {5/10/15/20/25/30/35/40/45/50}% chance to reset the Cooldown of one of your Defensive Skills. Can only happen once every 10 seconds.

Tags: Defensive, Lucky Hit, Critical Strikes, Cooldown.`,
		nameLocalized: {
			"deDE": "Einklang der Elemente",
			"esES": "Armonía elemental",
			"esMX": "Sintonía Elemental",
			"frFR": "Harmonie élémentaire",
			"itIT": "Armonia Elementale",
			"jaJP": "元素の調和",
			"koKR": "원소 조율",
			"plPL": "Zestrojenie Żywiołów",
			"ptBR": "Harmonização Elemental",
			"ruRU": "Единство со стихиями",
			"zhCN": "元素调和"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Kritische Treffer verfügen über eine Chance von {5/10/15/20/25/30/35/40/45/50}%, die Abklingzeit einer Eurer defensiven Fertigkeiten zurückzusetzen. Kann nur einmal alle 10 Sek. auftreten.\n\nTags: Defensiv, Glückstreffer, Kritische Treffer, Abklingzeit.",
			"esES": "Golpe de suerte: Los golpes críticos tienen un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de reiniciar el tiempo de reutilización de una de tus habilidades defensivas. Solo puede ocurrir una vez cada 10 s.\n\nTags: Defensiva, Golpe de suerte, Golpes críticos, Tiempo de reutilización.",
			"esMX": "Golpe afortunado: Los golpes críticos tienen un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de restablecer la recuperación de una de tus habilidades defensivas. Solo puede ocurrir una vez cada 10 segundos.\n\nTags: Defensivo, Golpe afortunado, Golpes críticos, Recuperación.",
			"frFR": "Coup de chance: les coups critiques ont {5/10/15/20/25/30/35/40/45/50}% de chances de réinitialiser le temps de recharge de l'une de vos compétences défensives. Cet effet ne peut se produire qu'une fois toutes les 10 s.\n\nTags: Défensive, Coup de chance, Coups critiques, Temps de recharge.",
			"itIT": "Colpo fortunato: i colpi critici hanno il {5/10/15/20/25/30/35/40/45/50}% di probabilità di azzerare il tempo di recupero di una delle tue abilità di difesa. Può attivarsi solo una volta ogni 10 s.\n\nTags: Difesa, Colpo fortunato, Colpi critici, Tempo di recupero.",
			"jaJP": "幸運の一撃: クリティカルヒット発生時、{5/10/15/20/25/30/35/40/45/50}%の確率でいずれかの防御スキルのクールダウンがリセットされる。この効果は10秒に1回のみ発生する。\n\nTags: 防御, 幸運の一撃, 致命の一撃, クールダウン.",
			"koKR": "행운의 적중: 공격이 극대화로 적중하면 {5/10/15/20/25/30/35/40/45/50}% 확률로 자신의 방어 기술 중 하나의 재사용 대기시간이 초기화됩니다. 10초에 한 번씩만 발동합니다.\n\nTags: 방어, 행운의 적중, 극대화, 재사용 대기시간.",
			"plPL": "Szczęśliwy traf: Trafienia krytyczne mają {5/10/15/20/25/30/35/40/45/50}% szans na wyzerowanie czasu odnowienia jednej z twoich umiejętności Defensywnych. Efekt ten może wystąpić tylko raz na 10 sek.\n\nTags: Obrona, Szczęśliwy Traf, Trafienia Krytyczne, Odnowienie.",
			"ptBR": "Golpe de Sorte: Acertos críticos têm {5/10/15/20/25/30/35/40/45/50}% de chance de reiniciar a recarga de uma das suas habilidades de Defesa. Só pode ocorrer uma vez a cada 10 segundos.\n\nTags: Defesa, Golpe de Sorte, Acertos Críticos, Recarga.",
			"ruRU": "Удачный удар: критические удары с вероятностью {5/10/15/20/25/30/35/40/45/50}% обновляют время восстановления умения категории \"Защита\". Срабатывает не чаще раза в 10 сек.\n\nTags: Защита, Удачный удар, Критические удары, Время восстановления.",
			"zhCN": "幸运一击:暴击有{5/10/15/20/25/30/35/40/45/50}%几率重置你的一个防御技能的冷却时间。该效果每10秒只能触发一次。\n\nTags: 防御, 幸运一击, 暴击, 冷却时间."
},
		id: 59,
		maxPoints: 3,
		x: -615.154,
		y: 1.335
	},
	"Glass Cannon": {
		connections: [ "Defensive" ],
		description: `You deal x{6/12/18/24/30/36/42/48/54/60}% increased damage, but take x{3/6/9/12/15/18/21/24/27/30}% more damage.

Tags: Damage.`,
		nameLocalized: {
			"deDE": "Glaskanone",
			"esES": "Cañón de cristal",
			"esMX": "Cañón de Cristal",
			"frFR": "Dragon de papier",
			"itIT": "Cannone di Vetro",
			"jaJP": "諸刃の大砲",
			"koKR": "유리 대포",
			"plPL": "Krucha Potęga",
			"ptBR": "Canhão de Vidro",
			"ruRU": "Хрупкий разрушитель",
			"zhCN": "玻璃大炮"
},
		descriptionLocalized: {
			"deDE": "Ihr verursacht x{6/12/18/24/30/36/42/48/54/60}% mehr Schaden, aber erleidet x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden.\n\nTags: Schaden.",
			"esES": "Infliges un x{6/12/18/24/30/36/42/48/54/60}% más de daño, pero también sufres un x{3/6/9/12/15/18/21/24/27/30}% más de daño.\n\nTags: Daño.",
			"esMX": "Infliges un x{6/12/18/24/30/36/42/48/54/60}% más de daño, pero recibes un x{3/6/9/12/15/18/21/24/27/30}% más de daño.\n\nTags: Daño.",
			"frFR": "Vous infligez x{6/12/18/24/30/36/42/48/54/60}% de dégâts supplémentaires, mais subissez x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires.\n\nTags: Dégâts.",
			"itIT": "Infliggi il x{6/12/18/24/30/36/42/48/54/60}% di danni aggiuntivi, ma subisci il x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi.\n\nTags: Danni.",
			"jaJP": "敵に与えるダメージがx{6/12/18/24/30/36/42/48/54/60}%増加するが、敵から受けるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: ダメージ.",
			"koKR": "주는 피해가 x{6/12/18/24/30/36/42/48/54/60}% 증가하지만, 받는 피해도 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 피해.",
			"plPL": "Zadajesz obrażenia zwiększone o x{6/12/18/24/30/36/42/48/54/60}%, ale otrzymujesz obrażenia zwiększone o x{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Obrażenia.",
			"ptBR": "Você causa {6/12/18/24/30/36/42/48/54/60}% de dano aumentado, mas recebe {3/6/9/12/15/18/21/24/27/30}% de dano aumentado.\n\nTags: Dano.",
			"ruRU": "Вы наносите на x{6/12/18/24/30/36/42/48/54/60}% больше урона, но и получаете на x{3/6/9/12/15/18/21/24/27/30}% больше урона.\n\nTags: Урон.",
			"zhCN": "你造成的伤害提高x{6/12/18/24/30/36/42/48/54/60}%,但受到的伤害提高x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 伤害."
},
		id: 60,
		maxPoints: 3,
		x: 630.605,
		y: 0.56
	},
};

sorcererData["Conjuration"] = {
	"Hydra": {
		connections: [ "Conjuration", "Enhanced Hydra" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a 3-headed hydra for 12 seconds. Each head spits fire at enemies, dealing {30/33/36/39/42/45/48/51/54/57}% damage.

Maximum 1 active Hydras at a time.

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.

— Enchantment Effect —
After spending 300 Mana, a 5-headed Hydra spawns for 5 seconds.`,
		nameLocalized: {
			"deDE": "Hydra",
			"esES": "Hidra",
			"esMX": "Hidra",
			"frFR": "Hydre",
			"itIT": "Idra",
			"jaJP": "ヒュドラ",
			"koKR": "히드라",
			"plPL": "Hydra",
			"ptBR": "Hidra",
			"ruRU": "Гидра",
			"zhCN": "多头蛇"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nBeschwört 12 Sek. lang eine 3-köpfige Hydra. Jeder Kopf speit Feuer auf Gegner und verursacht {30/33/36/39/42/45/48/51/54/57}% Schaden.\n\nMaximal 1 aktive Hydras gleichzeitig.\n\nTags: Beschwörung, Pyromanie, Schaden, Feuer, Mana.\n\n— Enchantment Effect —\nWenn Ihr 300 Mana verbraucht, erscheint 5 Sek. lang eine 5-köpfige Hydra.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nInvocas una hidra de 3 cabezas durante 12 s. Cada cabeza escupe fuego a los enemigos y les inflige {30/33/36/39/42/45/48/51/54/57}% de daño.\n\nMáximo de 1 hidras activas a la vez.\n\nTags: Evocación, Piromancia, Daño, Fuego, Maná.\n\n— Enchantment Effect —\nTras gastar 300 de maná, aparece una hidra de 5 cabezas durante 5 s.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nInvocas una hidra de 3 cabezas durante 12 segundos. Cada cabeza escupe fuego a los enemigos y les inflige {30/33/36/39/42/45/48/51/54/57}% de daño.\n\nPuedes tener como máximo 1 Hidras a la vez.\n\nTags: Conjuración, Piromancia, Daño, Fuego, Maná.\n\n— Enchantment Effect —\nDespués de usar 300 de maná, se genera una Hidra de 5 cabezas que dura 5 segundos.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous invoquez une hydre à 3 têtes qui dure 12 s. Chaque tête crache du feu sur les adversaires, ce qui inflige {30/33/36/39/42/45/48/51/54/57}% points de dégâts.\n\nVous pouvez avoir jusqu'à 1 hydres actives à la fois.\n\nTags: Conjuration, Pyromancie, Dégâts, Feu, Mana.\n\n— Enchantment Effect —\nAprès avoir dépensé 300 points de mana, une hydre à 5 têtes apparaît pendant 5 s.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nEvochi un'Idra a 3 teste per 12 s. Ogni testa sputa fuoco contro i nemici, infliggendo {30/33/36/39/42/45/48/51/54/57}% danni.\n\nNumero massimo di Idra evocabili simultaneamente: 1.\n\nTags: Invocazione, Piromanzia, Danni, Fuoco, Mana.\n\n— Enchantment Effect —\nDopo aver consumato 300 mana, generi un'Idra a 5 teste per 5 s.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\n首が3本ある〈ヒュドラ〉を12秒間にわたり召喚する。それぞれの頭が周囲の敵に炎を吐き、{30/33/36/39/42/45/48/51/54/57}%のダメージを与える。\n\n最大で1体の〈ヒュドラ〉を同時に使役可能。\n\nTags: 召喚, 火術, ダメージ, 火炎, マナ.\n\n— Enchantment Effect —\nマナを300消費すると、5秒間にわたり首が5個ある〈ヒュドラ〉が出現する。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n머리가 3개 달린 히드라를 소환합니다. 히드라는 12초 동안 지속되며, 머리는 각각 적에게 불을 내뿜어 {30/33/36/39/42/45/48/51/54/57}%의 피해를 줍니다.\n\n히드라는 한 번에 최대 1마리까지 활성화될 수 있습니다.\n\nTags: 구현, 방화, 피해, 화염, 마나.\n\n— Enchantment Effect —\n마나를 300 소모하면 5초 동안 머리가 5개인 히드라가 생성됩니다.",
			"plPL": "Koszt: {#} pkt. many.\nSzansa na szczęśliwy traf: {#}%\nPrzyzywasz Hydrę o 3 głowach na 12 sek. Każda głowa spluwa ogniem we wrogów i zadaje im {30/33/36/39/42/45/48/51/54/57}% pkt. obrażeń.\n\nJednocześnie możesz mieć maksymalnie 1 aktywne Hydry:aktywnych Hydr.\n\nTags: Przyzywanie, Piromancja, Obrażenia, Ogień, Mana.\n\n— Enchantment Effect —\nPo zużyciu 300 pkt. many na 5 sek. pojawia się 5-głowa Hydra.",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte: {#}%\nEvoca uma hidra com 3 cabeças por 12 segundos. Cada cabeça cospe fogo em inimigos, causando {30/33/36/39/42/45/48/51/54/57}% de dano.\n\nMáximo de 1 Hidras ativas por vez.\n\nTags: Conjuração, Piromancia, Dano, Fogo, Mana.\n\n— Enchantment Effect —\nDepois de gastar 300 de mana, uma Hidra com 5 cabeças surge por 5 segundos.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы на 12 сек. призываете гидру с 3 головами:головами. Каждая голова изрыгает в противников пламя, наносящее {30/33/36/39/42/45/48/51/54/57}% ед. урона.\n\nОдновременно можно призвать 1 гидр:гидр.\n\nTags: Колдовство, Пиромантия, Урон, Огонь, Мана.\n\n— Enchantment Effect —\nПотратив 300 ед. маны, вы на 5 сек. призываете гидру с 5 головами:головами.",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n召唤一只有3个头的多头蛇,持续12秒。每个头都会对敌人喷吐火焰,造成{30/33/36/39/42/45/48/51/54/57}%点伤害。\n\n同一时间最多可激活1只多头蛇。\n\nTags: 召唤魔法, 爆焰, 伤害, 火焰, 法力.\n\n— Enchantment Effect —\n消耗300点法力后,召唤一只拥有5个头的多头蛇,持续5秒。"
},
		id: 61,
		maxPoints: 5,
		values: [ "20", "77" ],
		x: 6.92,
		y: -281.666
	},
	"Enhanced Hydra": {
		baseSkill: "Hydra",
		connections: [ "Hydra", "Invoked Hydra", "Summoned Hydra" ],
		description: `While Healthy, your casts of Hydra gain 1 additional head.

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserte Hydra",
			"esES": "Hidra mejorada",
			"esMX": "Hidra Potenciada",
			"frFR": "Hydre renforcée",
			"itIT": "Idra Rinforzata",
			"jaJP": "ヒュドラ(強化版)",
			"koKR": "강화된 히드라",
			"plPL": "Wzmocniona Hydra",
			"ptBR": "Hidra Aperfeiçoada",
			"ruRU": "Усиленная гидра",
			"zhCN": "强化多头蛇"
},
		descriptionLocalized: {
			"deDE": "Solange Ihr beim Wirken gesund seid, erhöht sich die Kopfzahl Eurer Hydra um 1.\n\nTags: Beschwörung, Pyromanie, Schaden, Feuer, Mana.",
			"esES": "En estado saludable, tus lanzamientos de Hidra obtienen 1 cabeza más.\n\nTags: Evocación, Piromancia, Daño, Fuego, Maná.",
			"esMX": "Mientras estás saludable, tus lanzamientos de Hidra obtienen 1 cabeza adicional.\n\nTags: Conjuración, Piromancia, Daño, Fuego, Maná.",
			"frFR": "Tant que vous êtes en bonne santé, vos conjurations d'hydres ont 1 têtes supplémentaires.\n\nTags: Conjuration, Pyromancie, Dégâts, Feu, Mana.",
			"itIT": "Mentre sei in salute, ogni volta che usi l'abilità Idra quest'ultima ottiene una quantità di teste aggiuntive pari a 1.\n\nTags: Invocazione, Piromanzia, Danni, Fuoco, Mana.",
			"jaJP": "健全状態で〈ヒュドラ〉を使用すると、〈ヒュドラ〉の頭の数が1本増える。\n\nTags: 召喚, 火術, ダメージ, 火炎, マナ.",
			"koKR": "건강 상태에서 히드라 시전 시 머리가 1개 추가됩니다.\n\nTags: 구현, 방화, 피해, 화염, 마나.",
			"plPL": "Kiedy jesteś w pełni sił, przyzwana przez ciebie Hydra zyskuje 1 dodatkową głowę.\n\nTags: Przyzywanie, Piromancja, Obrażenia, Ogień, Mana.",
			"ptBR": "Enquanto estiver saudável, seus lançamentos de Hidra recebem 1 cabeça adicional.\n\nTags: Conjuração, Piromancia, Dano, Fogo, Mana.",
			"ruRU": "Пока у вас высокий уровень здоровья, гидры призываются еще с 1 головами:головами.\n\nTags: Колдовство, Пиромантия, Урон, Огонь, Мана.",
			"zhCN": "处于健康状态时,你的多头蛇额外获得1个头。\n\nTags: 召唤魔法, 爆焰, 伤害, 火焰, 法力."
},
		id: 62,
		maxPoints: 1,
		x: 6.62,
		y: -486.715
	},
	"Invoked Hydra": {
		baseSkill: "Hydra",
		connections: [ "Enhanced Hydra" ],
		description: `After you Critically Strike, your Hydras gain +30% Critical Strike Chance for 3 seconds.

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		nameLocalized: {
			"deDE": "Herbeigerufene Hydra",
			"esES": "Hidra invocada",
			"esMX": "Hidra Invocada",
			"frFR": "Hydre invoquée",
			"itIT": "Idra Invocata",
			"jaJP": "ヒュドラ(呼起)",
			"koKR": "불러낸 히드라",
			"plPL": "Przywołana Hydra",
			"ptBR": "Hidra Invocada",
			"ruRU": "Пробужденная гидра",
			"zhCN": "祈法多头蛇"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen kritischen Treffer erzielt, erhalten Eure Hydras 3 Sek. lang +30% kritische Trefferchance.\n\nTags: Beschwörung, Pyromanie, Schaden, Feuer, Mana.",
			"esES": "Después de que asestes un golpe crítico, las Hidras obtienen un +30% de probabilidad de golpe crítico durante 3 s.\n\nTags: Evocación, Piromancia, Daño, Fuego, Maná.",
			"esMX": "Cuando asestas un golpe crítico, tus Hidras obtienen un +30% de probabilidad de golpe crítico durante 3 segundos.\n\nTags: Conjuración, Piromancia, Daño, Fuego, Maná.",
			"frFR": "Lorsque vous infligez un coup critique, les chances d'infliger un coup critique de vos hydres sont augmentées de +30% pendant 3 s.\n\nTags: Conjuration, Pyromancie, Dégâts, Feu, Mana.",
			"itIT": "Dopo aver inflitto un colpo critico, la probabilità di critico delle tue Idra aumenta del +30% per 3 s.\n\nTags: Invocazione, Piromanzia, Danni, Fuoco, Mana.",
			"jaJP": "クリティカルヒットを出した後、〈ヒュドラ〉のクリティカルヒット率が3秒間にわたり+30%増加する。\n\nTags: 召喚, 火術, ダメージ, 火炎, マナ.",
			"koKR": "공격이 극대화로 적중하면 히드라의 극대화 확률이 3초 동안 +30% 증가합니다.\n\nTags: 구현, 방화, 피해, 화염, 마나.",
			"plPL": "Po wykonaniu trafienia krytycznego twoje Hydry zyskują premię +30% do szansy na trafienie krytyczne na 3 sek.\n\nTags: Przyzywanie, Piromancja, Obrażenia, Ogień, Mana.",
			"ptBR": "Depois de desferir um acerto crítico, suas Hidras recebem +30% de chance de acerto crítico por 3 segundos.\n\nTags: Conjuração, Piromancia, Dano, Fogo, Mana.",
			"ruRU": "Когда вы наносите критический удар, вероятность критического удара гидр повышается на +30% на 3 сек.\n\nTags: Колдовство, Пиромантия, Урон, Огонь, Мана.",
			"zhCN": "在你暴击后,你的多头蛇的暴击几率提高+30%,持续3秒。\n\nTags: 召唤魔法, 爆焰, 伤害, 火焰, 法力."
},
		id: 63,
		maxPoints: 1,
		x: 158.38,
		y: -596.294
	},
	"Summoned Hydra": {
		baseSkill: "Hydra",
		connections: [ "Enhanced Hydra" ],
		description: `Hydra also Burns enemies for an additional 12% of its Base damage dealt over 6 seconds.

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		nameLocalized: {
			"deDE": "Beschworene Hydra",
			"esES": "Hidra llamada",
			"esMX": "Hidra Convocada",
			"frFR": "Hydre conjurée",
			"itIT": "Idra Evocata",
			"jaJP": "ヒュドラ(召喚)",
			"koKR": "소환된 히드라",
			"plPL": "Przyzwana Hydra",
			"ptBR": "Hidra Evocada",
			"ruRU": "Призванная гидра",
			"zhCN": "召唤多头蛇"
},
		descriptionLocalized: {
			"deDE": "Hydra verbrennt außerdem Gegner und verursacht im Verlauf von 6 Sek. zusätzlichen Schaden in Höhe von 12% des verursachten Basisschadens.\n\nTags: Beschwörung, Pyromanie, Schaden, Feuer, Mana.",
			"esES": "La Hidra también inflige a los enemigos una cantidad de daño de quemadura equivalente a un 12% de su daño base durante 6 s.\n\nTags: Evocación, Piromancia, Daño, Fuego, Maná.",
			"esMX": "Hidra también quema a los enemigos y les inflige un 12% más de su daño de base durante 6 segundos.\n\nTags: Conjuración, Piromancia, Daño, Fuego, Maná.",
			"frFR": "L'hydre brûle aussi les adversaires en leur infligeant des dégâts supplémentaires égaux à 12% de ses dégâts de base en 6 s.\n\nTags: Conjuration, Pyromancie, Dégâts, Feu, Mana.",
			"itIT": "Idra manda anche in fiamme i nemici, infliggendo danni aggiuntivi pari al 12% dei danni base in 6 s.\n\nTags: Invocazione, Piromanzia, Danni, Fuoco, Mana.",
			"jaJP": "〈ヒュドラ〉に敵を炎上させる能力が加わり、基礎ダメージの12%のダメージを6秒かけて負わせる。\n\nTags: 召喚, 火術, ダメージ, 火炎, マナ.",
			"koKR": "히드라가 적을 불태워 6초에 걸쳐 기본 공격력의 12%만큼 추가 피해를 줍니다.\n\nTags: 구현, 방화, 피해, 화염, 마나.",
			"plPL": "Hydra podpala również wrogów, zadając im dodatkowo równowartość 12% podstawowych obrażeń w ciągu 6 sek.\n\nTags: Przyzywanie, Piromancja, Obrażenia, Ogień, Mana.",
			"ptBR": "Hidra também queima os inimigos, causando um adicional de 12% do dano-base causado ao longo de 6 segundos.\n\nTags: Conjuração, Piromancia, Dano, Fogo, Mana.",
			"ruRU": "Гидра также поджигает противников, нанося еще 12% базового урона за 6 сек.\n\nTags: Колдовство, Пиромантия, Урон, Огонь, Мана.",
			"zhCN": "多头蛇还会使敌人燃烧,在6秒内造成其基础伤害12%的额外伤害。\n\nTags: 召唤魔法, 爆焰, 伤害, 火焰, 法力."
},
		id: 64,
		maxPoints: 1,
		x: -145.46,
		y: -594.569
	},
	"Ice Blades": {
		connections: [ "Conjuration", "Enhanced Ice Blades" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a pair of ice blades for 6 seconds that rapidly slash enemies for {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% damage and have a 30% chance to make them Vulnerable for 2 seconds.

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.

— Enchantment Effect —
For every 20 seconds in Cooldowns you spend, you spawn an Ice Blades on a random enemy.`,
		nameLocalized: {
			"deDE": "Eisklingen",
			"esES": "Hojas de hielo",
			"esMX": "Cuchillas Gélidas",
			"frFR": "Lames de glace",
			"itIT": "Lame di ghiaccio",
			"jaJP": "氷の刃",
			"koKR": "얼음 칼날",
			"plPL": "Lodowe Ostrza",
			"ptBR": "Lâminas de Gelo",
			"ruRU": "Ледяные клинки",
			"zhCN": "冰刃"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nBeschwört 6 Sek. lang Klingen aus Eis, die Gegner blitzschnell aufschlitzen, dabei {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% Schaden verursachen und über eine Chance von 30% verfügen, sie 2 Sek. lang verwundbar zu machen.\n\nTags: Beschwörung, Frost, Verwundbar, Schaden, Kälte, Abklingzeit.\n\n— Enchantment Effect —\nFür alle 20 Sek. Abklingzeit, die Ihr verbraucht, erschafft Ihr Eisklingen auf einem zufälligen Gegner.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nCreas durante 6 s un par de hojas de hielo que atacan rápidamente a los enemigos, les infligen {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% de daño y tienen un 30% de probabilidad de volverlos vulnerables durante 2 s.\n\nTags: Evocación, Escarcha, Vulnerable, Daño, Frío, Tiempo de reutilización.\n\n— Enchantment Effect —\nPor cada 20 s que pasas en tiempo de reutilización, se genera unas Hojas de hielo sobre un enemigo aleatorio.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nConjuras un par de cuchillas gélidas durante 6 segundos que acuchillan rápidamente a los enemigos, les infligen {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% de daño y tienen un 30% de probabilidad de volverlos vulnerables durante 2 segundos.\n\nTags: Conjuración, Congelar, Vulnerable, Daño, Frío, Recuperación.\n\n— Enchantment Effect —\nPor cada 20 segundos de habilidades con recuperación que gastas, generas unas Cuchillas Gélidas en un enemigo al azar.",
			"frFR": "Temps de recharge: {#} s\nChances de coup de chance: {#}%\nVous invoquez deux lames de glace pendant 6 s qui lacèrent rapidement les adversaires, ce qui leur inflige {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% points de dégâts et a 30% de chances de les rendre vulnérables pendant 2 s.\n\nTags: Conjuration, Givre, Vulnérable, Dégâts, Froid, Temps de recharge.\n\n— Enchantment Effect —\nPour chaque tranche de 20 s passée en temps de recharge, vous lancez des lames de glace sur une cible aléatoire.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nInvochi due lame di ghiaccio per 6 s che rapidamente feriscono i nemici, infliggendo {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% danni, e hanno una probabilità del 30% di renderli vulnerabili per 2 s.\n\nTags: Invocazione, Gelo, Vulnerabilità, Danni, Freddo, Tempo di recupero.\n\n— Enchantment Effect —\nOgni 20 s trascorsi con abilità in fase di recupero, lanci Lame di Ghiaccio su un nemico a caso.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n一組の氷の刃を6秒間呼び出して敵を素早く斬りつけ、{30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}%のダメージを与える。また、その敵を30%の確率で2秒間にわたり脆弱状態にする。\n\nTags: 召喚, 寒気, 脆弱, ダメージ, 冷気, クールダウン.\n\n— Enchantment Effect —\nクールダウン中に20秒経過するごとに、ランダムな敵に対して〈氷の刃〉を生み出す。",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n6초 동안 얼음 칼날 한 쌍을 구현하고 빠르게 적을 베어 {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}%의 피해를 주고, 30% 확률로 2초 동안 대상을 취약하게 만듭니다.\n\nTags: 구현, 서리, 취약, 피해, 냉기, 재사용 대기시간.\n\n— Enchantment Effect —\n재사용 대기시간이 있는 기술을 20초 사용할 때마다 무작위 적의 위치에 얼음 칼날을 생성합니다.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nNa 6 sek. przyzywasz dwa lodowe ostrza, które szybko sieką przeciwników, zadając im {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% pkt. obrażeń i mają 30% szans na odsłonięcie wrogów na 2 sek.\n\nTags: Przyzywanie, Mróz, Odsłonięcie, Obrażenia, Zimno, Odnowienie.\n\n— Enchantment Effect —\nZa każde wykorzystane przez ciebie 20 sek. czasu odnowienia rzucasz Lodowe Ostrza na losowego wroga.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nConjura lâminas de gelo por 6 segundos que cortam os inimigos rapidamente, causando {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% de dano, e têm 30% de chance de torná-los vulneráveis por 2 segundos.\n\nTags: Conjuração, Geleira, Vulnerável, Dano, Gelo, Recarga.\n\n— Enchantment Effect —\nPara cada 20 segundos em recargas que gastar, você gera Lâminas de Gelo em um inimigo aleatório.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы на 6 сек. создаете два ледяных клинка, которые стремительно атакуют противников, нанося им {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% ед. урона и с вероятностью 30% делая их уязвимыми на 2 сек.\n\nTags: Колдовство, Мороз, Уязвимость, Урон, Холод, Время восстановления.\n\n— Enchantment Effect —\nКогда у вас восстанавливаются умения, вы раз в 20 сек. призываете ледяные клинки, атакующие случайного противника.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n召唤一对存在在6秒的冰刃,迅速劈砍敌人,造成{30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}%点伤害并有30%几率使其陷入易伤状态,持续2秒。\n\nTags: 召唤魔法, 寒霜, 易伤, 伤害, 冰霜, 冷却时间.\n\n— Enchantment Effect —\n每度过20秒的冷却时间,你就会对随机敌人召唤一把冰刃。"
},
		id: 65,
		maxPoints: 5,
		values: [ "12", "71" ],
		x: -533.46,
		y: -0.359
	},
	"Enhanced Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Ice Blades", "Summoned Ice Blades", "Invoked Ice Blades" ],
		description: `Ice Blades's Cooldown is reduced by 1 second each time it hits a Vulnerable enemy.

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Eisklingen",
			"esES": "Hojas de hielo mejoradas",
			"esMX": "Cuchillas Gélidas Potenciadas",
			"frFR": "Lames de glace renforcées",
			"itIT": "Lame di Ghiaccio Rinforzate",
			"jaJP": "氷の刃(強化版)",
			"koKR": "강화된 얼음 칼날",
			"plPL": "Wzmocnione Lodowe Ostrza",
			"ptBR": "Lâminas de Gelo Aperfeiçoadas",
			"ruRU": "Усиленные ледяные клинки",
			"zhCN": "强化冰刃"
},
		descriptionLocalized: {
			"deDE": "Die Abklingzeit von Eisklingen wird jedes Mal um 1 Sek. reduziert, wenn Ihr einen verwundbaren Gegner trefft.\n\nTags: Beschwörung, Frost, Verwundbar, Schaden, Kälte, Abklingzeit.",
			"esES": "El tiempo de reutilización de Hojas de hielo se reduce 1 s cada vez que golpean a un enemigo vulnerable.\n\nTags: Evocación, Escarcha, Vulnerable, Daño, Frío, Tiempo de reutilización.",
			"esMX": "La recuperación de Cuchillas Gélidas se reduce 1 segundo cada vez que golpea a un enemigo vulnerable.\n\nTags: Conjuración, Congelar, Vulnerable, Daño, Frío, Recuperación.",
			"frFR": "Le temps de recharge des lames de glace est réduit de 1 s chaque fois qu'elles touchent une cible vulnérable.\n\nTags: Conjuration, Givre, Vulnérable, Dégâts, Froid, Temps de recharge.",
			"itIT": "Il tempo di recupero di Lame di Ghiaccio si riduce di 1 s ogni volta che l'abilità colpisce un nemico vulnerabile.\n\nTags: Invocazione, Gelo, Vulnerabilità, Danni, Freddo, Tempo di recupero.",
			"jaJP": "〈氷の刃〉が脆弱状態の敵に命中するたびに、〈氷の刃〉のクールダウンが1秒短くなる。\n\nTags: 召喚, 寒気, 脆弱, ダメージ, 冷気, クールダウン.",
			"koKR": "얼음 칼날이 취약 상태의 적에게 적중할 때마다 재사용 대기시간이 1초 감소합니다.\n\nTags: 구현, 서리, 취약, 피해, 냉기, 재사용 대기시간.",
			"plPL": "Czas odnowienia Lodowych Ostrzy jest skrócony o 1 sek. za każdym razem, kiedy trafiają one odsłoniętego wroga.\n\nTags: Przyzywanie, Mróz, Odsłonięcie, Obrażenia, Zimno, Odnowienie.",
			"ptBR": "A recarga de Lâminas de Gelo é reduzida em 1 segundo sempre que atingir um inimigo vulnerável.\n\nTags: Conjuração, Geleira, Vulnerável, Dano, Gelo, Recarga.",
			"ruRU": "Когда \"Ледяные клинки\" поражают уязвимого противника, их время восстановления сокращается на 1 сек.\n\nTags: Колдовство, Мороз, Уязвимость, Урон, Холод, Время восстановления.",
			"zhCN": "冰刃每次命中一个易伤敌人,其冷却时间缩短1秒。\n\nTags: 召唤魔法, 寒霜, 易伤, 伤害, 冰霜, 冷却时间."
},
		id: 66,
		maxPoints: 1,
		x: -898.675,
		y: -0.442
	},
	"Summoned Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Enhanced Ice Blades" ],
		description: `50% of Enhanced Ice Blades's Cooldown reduction is applied to your other Skills.

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		nameLocalized: {
			"deDE": "Beschworene Eisklingen",
			"esES": "Hojas de hielo invocadas",
			"esMX": "Cuchillas Gélidas Convocadas",
			"frFR": "Lames de glace conjurées",
			"itIT": "Lame di ghiaccio Evocate",
			"jaJP": "氷の刃(召喚)",
			"koKR": "소환한 얼음 파편",
			"plPL": "Przyzwane Lodowe Ostrza",
			"ptBR": "Lâminas de Gelo Evocadas",
			"ruRU": "Призванные ледяные клинки",
			"zhCN": "召唤冰刃"
},
		descriptionLocalized: {
			"deDE": "50% der Abklingzeitreduktion von Verbesserte Eisklingen wird auf Eure anderen Fertigkeiten angewendet.\n\nTags: Beschwörung, Frost, Verwundbar, Schaden, Kälte, Abklingzeit.",
			"esES": "Un 50% de la reducción de tiempo de reutilización de Hojas de hielo mejoradas se aplica a tus otras habilidades.\n\nTags: Evocación, Escarcha, Vulnerable, Daño, Frío, Tiempo de reutilización.",
			"esMX": "50% de la reducción de recuperación de Cuchillas Gélidas Potenciadas se aplica a tus otras habilidades.\n\nTags: Conjuración, Congelar, Vulnerable, Daño, Frío, Recuperación.",
			"frFR": "50% de la réduction du temps de recharge de Lames de glace renforcées est appliquée à vos autres compétences.\n\nTags: Conjuration, Givre, Vulnérable, Dégâts, Froid, Temps de recharge.",
			"itIT": "Il 50% della riduzione del tempo di recupero di Lame di Ghiaccio Rinforzate si applica a tutte le altre abilità.\n\nTags: Invocazione, Gelo, Vulnerabilità, Danni, Freddo, Tempo di recupero.",
			"jaJP": "氷の刃(強化版)のクールダウン時間短縮量の50%がほかのスキルにも適用される。\n\nTags: 召喚, 寒気, 脆弱, ダメージ, 冷気, クールダウン.",
			"koKR": "강화된 얼음 칼날의 재사용 대기시간 감소 효과의 50%가 다른 기술에 적용됩니다.\n\nTags: 구현, 서리, 취약, 피해, 냉기, 재사용 대기시간.",
			"plPL": "50% równowartości redukcji czasu odnowienia Wzmocnionych Lodowych Ostrzy obejmuje twoje pozostałe umiejętności.\n\nTags: Przyzywanie, Mróz, Odsłonięcie, Obrażenia, Zimno, Odnowienie.",
			"ptBR": "50% da redução de recarga de Lâminas de Gelo Aperfeiçoadas é aplicada às suas outras habilidades.\n\nTags: Conjuração, Geleira, Vulnerável, Dano, Gelo, Recarga.",
			"ruRU": "\"Усиленные ледяные клинки\" также сокращают время восстановления других ваших умений с эффективностью 50%.\n\nTags: Колдовство, Мороз, Уязвимость, Урон, Холод, Время восстановления.",
			"zhCN": "强化冰刃的50%的冷却时间缩减会应用到你的其他技能上。\n\nTags: 召唤魔法, 寒霜, 易伤, 伤害, 冰霜, 冷却时间."
},
		id: 67,
		maxPoints: 1,
		x: -1089.415,
		y: 85.628
	},
	"Invoked Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Enhanced Ice Blades" ],
		description: `Your Ice Blades gain +10% increased Attack Speed per active Ice Blades.

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		nameLocalized: {
			"deDE": "Herbeigerufene Eisklingen",
			"esES": "Hojas de hielo llamadas",
			"esMX": "Cuchillas Gélidas Invocadas",
			"frFR": "Lames de glace invoquées",
			"itIT": "Lame di Ghiaccio Invocate",
			"jaJP": "氷の刃(呼起)",
			"koKR": "불러낸 얼음 칼날",
			"plPL": "Przywołane Lodowe Ostrza",
			"ptBR": "Lâminas de Gelo Invocadas",
			"ruRU": "Пробужденные ледяные клинки",
			"zhCN": "祈法冰刃"
},
		descriptionLocalized: {
			"deDE": "Eure Eisklingen erhalten +10% mehr Angriffsgeschwindigkeit pro aktiver Eisklinge.\n\nTags: Beschwörung, Frost, Verwundbar, Schaden, Kälte, Abklingzeit.",
			"esES": "Tus Hojas de hielo obtienen un +10% de velocidad de ataque por cada efecto de Hojas de hielo activo.\n\nTags: Evocación, Escarcha, Vulnerable, Daño, Frío, Tiempo de reutilización.",
			"esMX": "Tus Cuchillas Gélidas obtienen un +10% más de velocidad de ataque por cada Cuchillas Gélidas activa.\n\nTags: Conjuración, Congelar, Vulnerable, Daño, Frío, Recuperación.",
			"frFR": "La vitesse d'attaque de vos lames de glace est augmentée de +10% par paire de Lames de glace active.\n\nTags: Conjuration, Givre, Vulnérable, Dégâts, Froid, Temps de recharge.",
			"itIT": "La velocità d'attacco delle tue Lame di Ghiaccio aumenta del +10% per ogni Lama di Ghiaccio attiva.\n\nTags: Invocazione, Gelo, Vulnerabilità, Danni, Freddo, Tempo di recupero.",
			"jaJP": "発動中の〈氷の刃〉1つごとに、〈氷の刃〉の攻撃速度が+10%増加する。\n\nTags: 召喚, 寒気, 脆弱, ダメージ, 冷気, クールダウン.",
			"koKR": "활성화된 얼음 칼날 하나당 얼음 칼날의 공격 속도가 +10% 증가합니다.\n\nTags: 구현, 서리, 취약, 피해, 냉기, 재사용 대기시간.",
			"plPL": "Twoje Lodowe Ostrza zyskują premię +10% do szybkości ataku za każde aktywne Lodowe Ostrza.\n\nTags: Przyzywanie, Mróz, Odsłonięcie, Obrażenia, Zimno, Odnowienie.",
			"ptBR": "Suas Lâminas de Gelo recebem +10% de velocidade de ataque aumentada por Lâminas de Gelo ativas.\n\nTags: Conjuração, Geleira, Vulnerável, Dano, Gelo, Recarga.",
			"ruRU": "Скорость атаки \"Ледяных клинков\" повышается на +10% за каждый активный клинок.\n\nTags: Колдовство, Мороз, Уязвимость, Урон, Холод, Время восстановления.",
			"zhCN": "每有一个激活的冰刃,你的冰刃的攻击速度就会提高+10%。\n\nTags: 召唤魔法, 寒霜, 易伤, 伤害, 冰霜, 冷却时间."
},
		id: 68,
		maxPoints: 1,
		x: -1080.445,
		y: -89.709
	},
	"Lightning Spear": {
		connections: [ "Conjuration", "Enhanced Lightning Spear" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a spear of lightning that seeks out enemies for 6 seconds, dealing {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% damage per hit.

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.

— Enchantment Effect —
Absorbing Crackling Energy has a 10% chance to conjure a Lightning Spear.`,
		nameLocalized: {
			"deDE": "Blitzspeer",
			"esES": "Lanza de rayos",
			"esMX": "Lanza de Rayo",
			"frFR": "Lance de foudre",
			"itIT": "Lancia Fulminante",
			"jaJP": "稲妻の槍",
			"koKR": "번개 창",
			"plPL": "Włócznia Błyskawic",
			"ptBR": "Lança Elétrica",
			"ruRU": "Электрическое копье",
			"zhCN": "闪电矛"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nBeschwört einen Blitzspeer, der 6 Sek. lang Gegner aufspürt und pro Treffer {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% Schaden verursacht.\n\nTags: Beschwörung, Schock, Schaden, Blitz, Abklingzeit.\n\n— Enchantment Effect —\nWenn Ihr Knisternde Energie absorbiert, besteht eine Chance von 10%, einen Blitzspeer zu beschwören.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nCreas una lanza de rayos que busca enemigos durante 6 s y les inflige {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de daño por golpe.\n\nTags: Evocación, Electrocución, Daño, Rayos, Tiempo de reutilización.\n\n— Enchantment Effect —\nAbsorber energía crepitante tiene un 10% de probabilidad de crear una Lanza de rayos.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nConjuras una lanza de rayos que busca a los enemigos durante 6 segundos e inflige {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de daño por golpe.\n\nTags: Conjuración, Choque, Daño, Rayo, Recuperación.\n\n— Enchantment Effect —\nAbsorber Energía Crepitante tiene un 10% de probabilidad de conjurar una Lanza de Rayo.",
			"frFR": "Temps de recharge: {#} s\nChances de coup de chance: {#}%\nVous invoquez une lance de foudre qui traque les adversaires pendant 6 s et inflige {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% points de dégâts par coup.\n\nTags: Conjuration, Foudre, Dégâts, Temps de recharge.\n\n— Enchantment Effect —\nL'absorption d'énergie crépitante confère 10% de chances d'invoquer une lance de foudre.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nInvochi una lancia di fulmini che insegue i nemici per 6 s, infliggendo {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% danni per colpo.\n\nTags: Invocazione, Folgore, Danni, Fulmine, Tempo di recupero.\n\n— Enchantment Effect —\nAssorbire Energia Crepitante fornisce una probabilità del 10% di invocare una Lancia Fulminante.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n敵を6追尾する稲妻の槍を召喚し、命中するごとに{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%のダメージを与える。\n\nTags: 召喚, 電撃, ダメージ, 稲妻, クールダウン.\n\n— Enchantment Effect —\n〈帯び出す電気〉を吸収すると10%の確率で〈稲妻の槍〉を召喚する。",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n6초 동안 적을 추적하며 적중할 때마다 {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%의 피해를 주는 번개의 창을 구현합니다.\n\nTags: 구현, 감전, 피해, 번개, 재사용 대기시간.\n\n— Enchantment Effect —\n짜릿한 에너지를 흡수하면 10% 확률로 번개 창을 구현합니다.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nPrzyzywasz włócznię błyskawic, która wyszukuje wrogów przez 6 sek., zadając przy każdym trafieniu {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% pkt. obrażeń.\n\nTags: Przyzywanie, Porażenie, Obrażenia, Piorun, Odnowienie.\n\n— Enchantment Effect —\nPochłonięcie Roziskrzonej Energii zapewnia 10% szans na przyzwanie Włóczni Błyskawic.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nConjura uma lança de eletricidade que busca inimigos por 6 segundos, causando {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de dano por acerto.\n\nTags: Conjuração, Choque, Dano, Eletricidade, Recarga.\n\n— Enchantment Effect —\nAbsorver Energia Crepitante tem 10% de chance de conjurar uma Lança Elétrica.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы создаете электрическое копье, которое преследует противников в течение 6 сек. и наносит {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% ед. урона при каждом попадании.\n\nTags: Колдовство, Шок, Урон, Молния, Время восстановления.\n\n— Enchantment Effect —\nКогда вы поглощаете искрящийся заряд энергии, вы с вероятностью 10% создаете электрическое копье.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n召唤一支搜寻敌人的闪电矛,持续6秒,每次命中造成{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%点伤害。\n\nTags: 召唤魔法, 电冲, 伤害, 闪电, 冷却时间.\n\n— Enchantment Effect —\n吸收爆裂电花有10%的几率召唤一柄闪电矛。"
},
		id: 69,
		maxPoints: 5,
		values: [ "20", "35" ],
		x: -413.195,
		y: 220.974
	},
	"Enhanced Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Lightning Spear", "Summoned Lightning Spear", "Invoked Lightning Spear" ],
		description: `After Critically Striking, Lightning Spear gains a +5% increased stacking Critical Strike Chance for its duration.

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserter Blitzspeer",
			"esES": "Lanza de rayos mejorada",
			"esMX": "Lanza de Rayo Potenciada",
			"frFR": "Lance de foudre renforcée",
			"itIT": "Lancia Fulminante Rinforzata",
			"jaJP": "稲妻の槍(強化版)",
			"koKR": "강화된 번개 창",
			"plPL": "Wzmocniona Włócznia Błyskawic",
			"ptBR": "Lança Elétrica Aperfeiçoada",
			"ruRU": "Усиленное электрическое копье",
			"zhCN": "强化闪电矛"
},
		descriptionLocalized: {
			"deDE": "Nach einem kritischen Treffer erhält Blitzspeer über seine gesamte Dauer über eine +5% höhere kritische Trefferchance.\n\nTags: Beschwörung, Schock, Schaden, Blitz, Abklingzeit.",
			"esES": "Tras asestar un golpe crítico, Lanza de rayos obtiene un +5% más de probabilidad de golpe crítico acumulable mientras dura.\n\nTags: Evocación, Electrocución, Daño, Rayos, Tiempo de reutilización.",
			"esMX": "Al asestar un golpe crítico, Lanza de Rayo obtiene un +5% más de acumulación de probabilidad de golpe crítico en el transcurso de su duración.\n\nTags: Conjuración, Choque, Daño, Rayo, Recuperación.",
			"frFR": "Après avoir infligé un coup critique, Lance de foudre bénéficie de +5% de chances supplémentaires d'infliger un coup critique pendant toute sa durée, cet effet pouvant se cumuler.\n\nTags: Conjuration, Foudre, Dégâts, Temps de recharge.",
			"itIT": "Dopo aver inflitto un colpo critico, Lancia Fulminante ha una probabilità di critico aggiuntiva e cumulabile del +5% per la sua durata.\n\nTags: Invocazione, Folgore, Danni, Fulmine, Tempo di recupero.",
			"jaJP": "クリティカルヒットを出した後、〈稲妻の槍〉の持続時間中の蓄積クリティカルヒット率が+5%上昇する。\n\nTags: 召喚, 電撃, ダメージ, 稲妻, クールダウン.",
			"koKR": "극대화 적중 후 번개 창의 지속시간 동안 중첩되는 극대화 확률이 +5% 증가합니다.\n\nTags: 구현, 감전, 피해, 번개, 재사용 대기시간.",
			"plPL": "Po wykonaniu trafienia krytycznego Włócznia Błyskawic ma zwiększoną o +5% kumulującą się szansę na trafienie krytyczne podczas swojego działania.\n\nTags: Przyzywanie, Porażenie, Obrażenia, Piorun, Odnowienie.",
			"ptBR": "Depois de desferir um acerto crítico, Lança Elétrica recebe +5% de chance de acerto crítico cumulativo aumentada durante o efeito.\n\nTags: Conjuração, Choque, Dano, Eletricidade, Recarga.",
			"ruRU": "Когда \"Электрическое копье\" наносит критический удар, вероятность нанести критический удар этим умением повышается на +5% до завершения времени действия. Эффект суммируется.\n\nTags: Колдовство, Шок, Урон, Молния, Время восстановления.",
			"zhCN": "造成暴击后,闪电矛在持续时间内叠加暴击的几率提高+5%。\n\nTags: 召唤魔法, 电冲, 伤害, 闪电, 冷却时间."
},
		id: 70,
		maxPoints: 1,
		x: -685.66,
		y: 367.663
	},
	"Summoned Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Enhanced Lightning Spear" ],
		description: `Collecting Crackling Energy increases the damage of your next Lightning Spear cast by x20%, up to x100%.

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		nameLocalized: {
			"deDE": "Beschworener Blitzspeer",
			"esES": "Lanza de rayos llamada",
			"esMX": "Lanza de Rayo Convocada",
			"frFR": "Lance de foudre conjurée",
			"itIT": "Lancia Fulminante Evocata",
			"jaJP": "稲妻の槍(召喚)",
			"koKR": "소환된 번개 창",
			"plPL": "Przyzwana Włócznia Błyskawic",
			"ptBR": "Lança Elétrica Evocada",
			"ruRU": "Призванное электрическое копье",
			"zhCN": "召唤闪电矛"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Knisternde Energie sammelt, wird der Schaden Eures nächsten Blitzspeers um x20% erhöht, bis maximal x100%.\n\nTags: Beschwörung, Schock, Schaden, Blitz, Abklingzeit.",
			"esES": "Absorber energía crepitanteaumenta un x20% el daño de la siguiente Lanza de rayos que lances, hasta un máximo de un x100%.\n\nTags: Evocación, Electrocución, Daño, Rayos, Tiempo de reutilización.",
			"esMX": "Recolectar Energía Crepitante aumenta un x20% el daño de tu siguiente lanzamiento de Lanza de Rayo, hasta un x100%.\n\nTags: Conjuración, Choque, Daño, Rayo, Recuperación.",
			"frFR": "Lorsque vous ramassez de l'énergie crépitante, les dégâts de votre prochaine Lance de foudre sont augmentés de x20%, jusqu'à un maximum de x100%.\n\nTags: Conjuration, Foudre, Dégâts, Temps de recharge.",
			"itIT": "Raccogliere Energia Crepitante aumenta i danni del successivo utilizzo di Lancia Fulminante del x20%, fino a un massimo del x100%.\n\nTags: Invocazione, Folgore, Danni, Fulmine, Tempo di recupero.",
			"jaJP": "〈帯び出す電気〉を入手すると、次に使用した〈稲妻の槍〉のダメージがx20%増加する。増加量は最大x100%。\n\nTags: 召喚, 電撃, ダメージ, 稲妻, クールダウン.",
			"koKR": "짜릿한 에너지를 습득하면 다음 번개 창 시전으로 주는 피해가 x20%만큼, 최대 x100%까지 증가합니다.\n\nTags: 구현, 감전, 피해, 번개, 재사용 대기시간.",
			"plPL": "Zbieranie Roziskrzonej Energii zwiększa obrażenia od twojej następnej Włóczni Błyskawic o x20%, maksymalnie do x100%.\n\nTags: Przyzywanie, Porażenie, Obrażenia, Piorun, Odnowienie.",
			"ptBR": "Coletar Energia Crepitante aumenta o dano do seu próximo lançamento de Lança Elétrica em 20%, até 100%.\n\nTags: Conjuração, Choque, Dano, Eletricidade, Recarga.",
			"ruRU": "Когда вы подбираете искрящийся заряд энергии, урон от следующего \"Электрического копья\" увеличивается на x20% вплоть до x100%.\n\nTags: Колдовство, Шок, Урон, Молния, Время восстановления.",
			"zhCN": "拾取爆裂电花会使你施放的下一个闪电矛造成的伤害提高x20%,最多提高x100%。\n\nTags: 召唤魔法, 电冲, 伤害, 闪电, 冷却时间."
},
		id: 71,
		maxPoints: 1,
		x: -931.92,
		y: 378.401
	},
	"Invoked Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Enhanced Lightning Spear" ],
		description: `Lightning Spear Stuns enemies for 2 seconds when Critically Striking.

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		nameLocalized: {
			"deDE": "Herbeigerufener Blitzspeer",
			"esES": "Lanza de rayos invocada",
			"esMX": "Lanza de Rayo Invocada",
			"frFR": "Lance de foudre invoquée",
			"itIT": "Lancia Fulminante Invocata",
			"jaJP": "稲妻の槍(呼起)",
			"koKR": "불러낸 번개 창",
			"plPL": "Przywołana Włócznia Błyskawic",
			"ptBR": "Lança Elétrica Invocada",
			"ruRU": "Пробужденное электрическое копье",
			"zhCN": "祈法闪电矛"
},
		descriptionLocalized: {
			"deDE": "Bei einem kritischen Treffer betäubt Blitzspeer Gegner 2 Sek. lang.\n\nTags: Beschwörung, Schock, Schaden, Blitz, Abklingzeit.",
			"esES": "Lanza de rayos aturde a los enemigos durante 2 s cuando asesta un golpe crítico.\n\nTags: Evocación, Electrocución, Daño, Rayos, Tiempo de reutilización.",
			"esMX": "Lanza de Rayo aturde a los enemigos durante 2 segundos al asestar un golpe crítico.\n\nTags: Conjuración, Choque, Daño, Rayo, Recuperación.",
			"frFR": "Lance de foudre étourdit les adversaires pendant 2 s lorsqu'elle inflige un coup critique.\n\nTags: Conjuration, Foudre, Dégâts, Temps de recharge.",
			"itIT": "Lancia Fulminante stordisce i nemici per 2 s quando infligge danni critici.\n\nTags: Invocazione, Folgore, Danni, Fulmine, Tempo di recupero.",
			"jaJP": "〈稲妻の槍〉でクリティカルヒットが発生すると、敵を2秒間にわたりスタンさせる。\n\nTags: 召喚, 電撃, ダメージ, 稲妻, クールダウン.",
			"koKR": "번개 창이 극대화로 적중하면 적이 2초 동안 기절합니다.\n\nTags: 구현, 감전, 피해, 번개, 재사용 대기시간.",
			"plPL": "Trafienie krytyczne przy użyciu Włóczni Błyskawic ogłusza wrogów na 2 sek.\n\nTags: Przyzywanie, Porażenie, Obrażenia, Piorun, Odnowienie.",
			"ptBR": "Lança Elétrica atordoa inimigos por 2 segundos ao desferir acertos críticos.\n\nTags: Conjuração, Choque, Dano, Eletricidade, Recarga.",
			"ruRU": "Нанося критический удар, \"Электрическое копье\" оглушает противника на 2 сек.\n\nTags: Колдовство, Шок, Урон, Молния, Время восстановления.",
			"zhCN": "闪电矛会在暴击时击晕敌人2秒。\n\nTags: 召唤魔法, 电冲, 伤害, 闪电, 冷却时间."
},
		id: 72,
		maxPoints: 1,
		x: -732.94,
		y: 495.95
	},
	"Conjuration Mastery": {
		connections: [ "Conjuration" ],
		description: `You deal x{1/2/3/4/5/6/7/8/9/10}% increased damage for each active Conjuration.

Tags: Lucky Hit, Conjuration.`,
		nameLocalized: {
			"deDE": "Beschwörungskunst",
			"esES": "Dominio de las evocaciones",
			"esMX": "Dominio de la Conjuración",
			"frFR": "Maîtrise de conjuration",
			"itIT": "Maestria delle Invocazioni",
			"jaJP": "召喚の達人",
			"koKR": "구현 숙련",
			"plPL": "Mistrzostwo Przyzywania",
			"ptBR": "Maestria da Conjuração",
			"ruRU": "Мастер колдовства",
			"zhCN": "召唤魔法精通"
},
		descriptionLocalized: {
			"deDE": "Ihr verursacht für jede aktive Beschwörung x{1/2/3/4/5/6/7/8/9/10}% mehr Schaden.\n\nTags: Glückstreffer, Beschwörung.",
			"esES": "Infliges un x{1/2/3/4/5/6/7/8/9/10}% más de daño por cada evocación activa.\n\nTags: Golpe de suerte, Evocación.",
			"esMX": "Infliges un x{1/2/3/4/5/6/7/8/9/10}% más de daño por cada Conjuración activa.\n\nTags: Golpe afortunado, Conjuración.",
			"frFR": "Vous infligez x{1/2/3/4/5/6/7/8/9/10}% de dégâts supplémentaires par conjuration active.\n\nTags: Coup de chance, Conjuration.",
			"itIT": "Infliggi il x{1/2/3/4/5/6/7/8/9/10}% di danni aggiuntivi per ogni invocazione attiva.\n\nTags: Colpo fortunato, Invocazione.",
			"jaJP": "発動中の召喚スキル1つにつき、与えるダメージがx{1/2/3/4/5/6/7/8/9/10}%増加する。\n\nTags: 幸運の一撃, 召喚.",
			"koKR": "활성화된 구현 기술 하나당 주는 피해가 x{1/2/3/4/5/6/7/8/9/10}% 증가합니다.\n\nTags: 행운의 적중, 구현.",
			"plPL": "Zadajesz obrażenia zwiększone o x{1/2/3/4/5/6/7/8/9/10}% za każde aktywne Przyzwanie.\n\nTags: Szczęśliwy Traf, Przyzywanie.",
			"ptBR": "Você causa {1/2/3/4/5/6/7/8/9/10}% de dano aumentado para cada Conjuração ativa.\n\nTags: Golpe de Sorte, Conjuração.",
			"ruRU": "Вы наносите на x{1/2/3/4/5/6/7/8/9/10}% больше урона за каждый активный эффект колдовства.\n\nTags: Удачный удар, Колдовство.",
			"zhCN": "每有一个激活的召唤魔法,你造成的伤害提高x{1/2/3/4/5/6/7/8/9/10}%。\n\nTags: 幸运一击, 召唤魔法."
},
		id: 73,
		maxPoints: 3,
		x: -1.85,
		y: 301.34
	},
	"Precision Magic": {
		connections: [ "Conjuration" ],
		description: `Your Lucky Hit Chance is increased by +{5/10/15/20/25/30/35/40/45/50}%.

Tags: Lucky Hit.`,
		nameLocalized: {
			"deDE": "Präzisionsmagie",
			"esES": "Magia de precisión",
			"esMX": "Magia de Precisión",
			"frFR": "Magie de précision",
			"itIT": "Magia di Precisione",
			"jaJP": "精密魔法",
			"koKR": "정밀 마법",
			"plPL": "Magiczna Precyzja",
			"ptBR": "Magia de Precisão",
			"ruRU": "Точная магия",
			"zhCN": "精准魔法"
},
		descriptionLocalized: {
			"deDE": "Eure Glückstrefferchance ist um +{5/10/15/20/25/30/35/40/45/50}% erhöht.\n\nTags: Glückstreffer.",
			"esES": "Tu probabilidad de golpe de suerte aumenta un +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Golpe de suerte.",
			"esMX": "Tu probabilidad de golpe afortunado aumenta un +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Golpe afortunado.",
			"frFR": "Vos chances de coup de chance sont augmentées de +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Coup de chance.",
			"itIT": "La probabilità di colpo fortunato aumenta del +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Colpo fortunato.",
			"jaJP": "幸運の一撃の発生率が+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: 幸運の一撃.",
			"koKR": "행운의 적중 확률이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 행운의 적중.",
			"plPL": "Twoja szansa na szczęśliwy traf jest zwiększona o +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Szczęśliwy Traf.",
			"ptBR": "Sua chance de Golpe de Sorte é aumentada em +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Golpe de Sorte.",
			"ruRU": "Вероятность удачного удара повышается на {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Удачный удар.",
			"zhCN": "你的幸运一击几率提高+{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 幸运一击."
},
		id: 74,
		maxPoints: 3,
		x: -449.215,
		y: -240.001
	},
	"Align the Elements": {
		connections: [ "Mana Shield", "Conjuration", "Protection" ],
		description: `You gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction against Elites for each second you haven't taken damage from one, up to 50%.

Tags: Damage Reduction, Elite Monsters.`,
		nameLocalized: {
			"deDE": "Ausrichtung der Elemente",
			"esES": "Elementos alineados",
			"esMX": "Alineación de los Elementos",
			"frFR": "Alignement des éléments",
			"itIT": "Allineamento degli Elementi",
			"jaJP": "元素の加護",
			"koKR": "원소 조절",
			"plPL": "Koniunkcja Żywiołów",
			"ptBR": "Alinhar os Elementos",
			"ruRU": "Баланс стихий",
			"zhCN": "元素协调"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet eine Schadensreduktion von {5/10/15/20/25/30/35/40/45/50}% gegen Elitegegner für jede Sekunde, in der Ihr keinen Schaden durch einen von ihnen erleidet, bis maximal 50%.\n\nTags: Schadensreduktion, Elitemonster.",
			"esES": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño contra enemigos de élite por cada segundo que no te inflijan daño, hasta un máximo de un 50%.\n\nTags: Reducción de daño, Enemigos de élite.",
			"esMX": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño contra enemigos de Élite por cada segundo que no hayas recibido daño de uno, hasta un máximo del 50%.\n\nTags: Reducción de daño, Monstruos de Élite.",
			"frFR": "Vous bénéficiez de {5/10/15/20/25/30/35/40/45/50}% de réduction des dégâts contre les élites pour chaque seconde où vous ne subissez aucun dégât de leur part, jusqu'à un maximum de 50%.\n\nTags: Réduction des dégâts, Monstres élites.",
			"itIT": "Ottieni il {5/10/15/20/25/30/35/40/45/50}% di riduzione danni contro élite per ogni secondo trascorso senza subire danni da un nemico élite, fino a un massimo del 50%.\n\nTags: Riduzione danni, Mostri élite.",
			"jaJP": "エリートからダメージを受けずにいると、その状態が1秒続くごとにエリートから受けるダメージが{5/10/15/20/25/30/35/40/45/50}%減少する。減少量は最大50%。\n\nTags: ダメージ減少, エリート・モンスター.",
			"koKR": "정예 괴물로부터 피해를 받지 않는 동안 정예에 대한 피해 감소가 초당 {5/10/15/20/25/30/35/40/45/50}% 감소하여, 최대 50% 감소합니다.\n\nTags: 피해 감소, 정예 괴물.",
			"plPL": "Zyskujesz premię {5/10/15/20/25/30/35/40/45/50}% do redukcji obrażeń zadawanych przez wrogów elitarnych za każdą sekundę, kiedy nie otrzymujesz od nich obrażeń. Maksymalna premia wynosi 50%.\n\nTags: Redukcja Obrażeń, Elitarne Potwory.",
			"ptBR": "Você recebe {5/10/15/20/25/30/35/40/45/50}% de redução de dano contra elites por cada segundo que não receber dano de algum, até 50%.\n\nTags: Redução de Dano, Monstros de Elite.",
			"ruRU": "Урон, получаемый от особых противников, уменьшается на {5/10/15/20/25/30/35/40/45/50}% за каждую секунду, пока вы не получаете от них урон. Максимальная защита – 50%.\n\nTags: Уменьшение урона, Особые монстры.",
			"zhCN": "当你对战精英怪且未受到其伤害时,每秒获得{5/10/15/20/25/30/35/40/45/50}%伤害减免,最多获得50%。\n\nTags: 伤害减免, 精英怪物."
},
		id: 75,
		maxPoints: 3,
		x: 532.58,
		y: 0.059
	},
	"Mana Shield": {
		connections: [ "Align the Elements" ],
		description: `Every time you spend 100 Mana, you gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction for 5 seconds.

Tags: Mana, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Manaschild",
			"esES": "Escudo de maná",
			"esMX": "Escudo de Maná",
			"frFR": "Bouclier de mana",
			"itIT": "Scudo di Mana",
			"jaJP": "マナ・シールド",
			"koKR": "마나 보호막",
			"plPL": "Tarcza Many",
			"ptBR": "Escudo de Mana",
			"ruRU": "Щит маны",
			"zhCN": "法力护盾"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Ihr 100 Mana verbraucht, erhaltet Ihr 5 Sek. lang {5/10/15/20/25/30/35/40/45/50}% Schadensreduktion.\n\nTags: Mana, Schadensreduktion.",
			"esES": "Cada vez que gastas 100 de maná, obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño durante 5 s.\n\nTags: Maná, Reducción de daño.",
			"esMX": "Cada vez que consumes 100 de maná, obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño durante 5 segundos.\n\nTags: Maná, Reducción de daño.",
			"frFR": "Chaque fois que vous dépensez 100 points de mana, vous bénéficiez de {5/10/15/20/25/30/35/40/45/50}% de réduction des dégâts pendant 5 s.\n\nTags: Mana, Réduction des dégâts.",
			"itIT": "Quando consumi 100 Mana, ottieni il {5/10/15/20/25/30/35/40/45/50}% di riduzione danni per 5 s.\n\nTags: Mana, Riduzione danni.",
			"jaJP": "100のマナを消費するたびに、5秒間にわたり受けるダメージが{5/10/15/20/25/30/35/40/45/50}%軽減される。\n\nTags: マナ, ダメージ減少.",
			"koKR": "마나를 100 소모할 때마다 5초 동안 피해 감소가 {5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 마나, 피해 감소.",
			"plPL": "Za każdym razem, gdy wydajesz 100 pkt. many, zyskujesz {5/10/15/20/25/30/35/40/45/50}% do redukcji obrażeń na 5 sek.\n\nTags: Mana, Redukcja Obrażeń.",
			"ptBR": "Sempre que gasta 100 de mana, você recebe {5/10/15/20/25/30/35/40/45/50}% de redução de dano por 5 segundos.\n\nTags: Mana, Redução de Dano.",
			"ruRU": "Когда вы тратите 100 ед. маны, получаемый урон уменьшается на {5/10/15/20/25/30/35/40/45/50}% на 5 сек.\n\nTags: Мана, Уменьшение урона.",
			"zhCN": "你每消耗100点法力,就会获得{5/10/15/20/25/30/35/40/45/50}%的伤害减免,持续5秒。\n\nTags: 法力, 伤害减免."
},
		id: 76,
		maxPoints: 3,
		x: 836.363,
		y: -77.321
	},
	"Protection": {
		connections: [ "Align the Elements" ],
		description: `Using a Cooldown grants {10/20/30/40/50/60/70/80/90/100}% of your Maximum Life as a Barrier for 5 seconds.

Tags: Barrier, Cooldown.`,
		nameLocalized: {
			"deDE": "Schutz",
			"esES": "Protección",
			"esMX": "Protección",
			"frFR": "Protection",
			"itIT": "Protezione",
			"jaJP": "守護",
			"koKR": "피해 감소",
			"plPL": "Ochrona",
			"ptBR": "Proteção",
			"ruRU": "Защита",
			"zhCN": "魔法防护"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr eine Abklingzeit nutzt, erhaltet Ihr 5 Sek. lang {10/20/30/40/50/60/70/80/90/100}% Eures maximalen Lebens als Barriere.\n\nTags: Barriere, Abklingzeit.",
			"esES": "Usar un tiempo de reutilización otorga un {10/20/30/40/50/60/70/80/90/100}% de tu vida máxima como barrera durante 5 s.\n\nTags: Barrera, Tiempo de reutilización.",
			"esMX": "Usar una habilidad con recuperación otorga un {10/20/30/40/50/60/70/80/90/100}% de tu vida máxima como barrera durante 5 segundos.\n\nTags: Barrera, Recuperación.",
			"frFR": "Utiliser une compétence avec temps de recharge vous octroie une barrière égale à {10/20/30/40/50/60/70/80/90/100}% de votre maximum de points de vie pendant 5 s.\n\nTags: Barrière, Temps de recharge.",
			"itIT": "Usare un'abilità con tempo di recupero fornisce una barriera pari al {10/20/30/40/50/60/70/80/90/100}% della tua Vita massima per 5 s.\n\nTags: Barriera, Tempo di recupero.",
			"jaJP": "クールダウンを使うと、ライフ最大値の{10/20/30/40/50/60/70/80/90/100}%にあたるの障壁を5秒間獲得する。\n\nTags: 障壁, クールダウン.",
			"koKR": "재사용 대기시간이 있는 기술을 사용하면 5초 동안 최대 생명력의 {10/20/30/40/50/60/70/80/90/100}%를 보호막으로 얻습니다.\n\nTags: 보호막, 재사용 대기시간.",
			"plPL": "Użycie umiejętności z czasem odnowienia zapewnia ci barierę o mocy równej {10/20/30/40/50/60/70/80/90/100}% maksymalnego zdrowia na 5 sek.\n\nTags: Bariera, Odnowienie.",
			"ptBR": "Usar uma recarga concede {10/20/30/40/50/60/70/80/90/100}% da sua vida máxima como uma barreira por 5 segundos.\n\nTags: Barreira, Recarga.",
			"ruRU": "Когда вы применяете умение с временем восстановления, вас на 5 сек. защищает барьер с прочностью, равной {10/20/30/40/50/60/70/80/90/100}% максимального запаса здоровья.\n\nTags: Барьер, Время восстановления.",
			"zhCN": "使用有冷却时间的技能可以获得一层相当于生命上限{10/20/30/40/50/60/70/80/90/100}%的屏障,持续5秒。\n\nTags: 屏障, 冷却时间."
},
		id: 77,
		maxPoints: 3,
		x: 834.832,
		y: 80.406
	},
};

sorcererData["Mastery"] = {
	"Meteor": {
		connections: [ "Mastery", "Enhanced Meteor" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a meteor that strikes the target location, dealing {50/55/60/65/70/75/80/85/90/95}% damage and Burning the ground for {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage over 3 seconds.

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.

— Enchantment Effect —
Lucky Hit: 3% chance for a Meteor to fall on enemies.`,
		nameLocalized: {
			"deDE": "Meteor",
			"esES": "Meteorito",
			"esMX": "Meteoro",
			"frFR": "Météore",
			"itIT": "Meteora",
			"jaJP": "メテオ",
			"koKR": "운석 낙하",
			"plPL": "Meteoryt",
			"ptBR": "Meteoro",
			"ruRU": "Метеорит",
			"zhCN": "陨石术"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nBeschwört einen Meteor, der am Zielort einschlägt und {50/55/60/65/70/75/80/85/90/95}% Schaden verursacht. Meteor verbrennt im Verlauf von 3 Sek. den Boden und verursacht {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% Schaden.\n\nTags: Beherrschung, Pyromanie, Schaden, Feuer, Mana, Verbrennung.\n\n— Enchantment Effect —\nGlückstreffer: Chance von 3%, dass ein Meteor auf Gegner fällt.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nInvocas un meteorito que impacta en la ubicación seleccionada, inflige {50/55/60/65/70/75/80/85/90/95}% de daño y quema el suelo para infligir {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de daño durante 3 s.\n\nTags: Maestría, Piromancia, Daño, Fuego, Maná, Quemadura.\n\n— Enchantment Effect —\nGolpe de suerte: 3% de probabilidad de que caiga un Meteorito sobre tus enemigos.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nInvocas un meteoro que aterriza en la ubicación objetivo, inflige {50/55/60/65/70/75/80/85/90/95}% de daño, quema el suelo e inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de daño durante 3 segundos.\n\nTags: Dominio, Piromancia, Daño, Fuego, Maná, Quemadura.\n\n— Enchantment Effect —\nGolpe afortunado: un 3% de probabilidad de que un Meteoro caiga sobre los enemigos.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous invoquez un météore qui frappe l'emplacement ciblé en infligeant {50/55/60/65/70/75/80/85/90/95}% points de dégâts et en brûlant le sol, ce qui inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% points de dégâts en 3 s.\n\nTags: Maîtrise, Pyromancie, Dégâts, Feu, Mana, Brûlure.\n\n— Enchantment Effect —\nCoup de chance: 3% de chances qu'un météore tombe sur des adversaires.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nEvochi una meteora che colpisce la posizione bersaglio, infliggendo {50/55/60/65/70/75/80/85/90/95}% danni e mandando in fiamme il terreno, infliggendo {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% danni in 3 s.\n\nTags: Dominio, Piromanzia, Danni, Fuoco, Mana, Bruciatura.\n\n— Enchantment Effect —\nColpo fortunato: 3% di probabilità che una Meteora si abbatta sui nemici.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\n〈メテオ〉を呼んで標的地点に落下させ、{50/55/60/65/70/75/80/85/90/95}%のダメージを与える。また、地面を炎上させて3秒間かけて{35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%のダメージを与える。\n\nTags: 達人, 火術, ダメージ, 火炎, マナ, 炎上.\n\n— Enchantment Effect —\n幸運の一撃: 3%の確率で敵めがけて〈メテオ〉が落ちてくる。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n운석을 소환하여 대상 지점에 {50/55/60/65/70/75/80/85/90/95}%의 피해를 주고 땅을 불태워 3초에 걸쳐 {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%의 피해를 줍니다.\n\nTags: 숙련, 방화, 피해, 화염, 마나, 불태우기.\n\n— Enchantment Effect —\n행운의 적중: 3% 확률로 적에게 운석이 떨어집니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nPrzywołujesz meteoryt, który uderza we wskazane miejsce, zadając {50/55/60/65/70/75/80/85/90/95}% pkt. obrażeń. Meteoryt podpala ziemię, zadając {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% pkt. obrażeń w ciągu 3 sek.\n\nTags: Mistrzostwo, Piromancja, Obrażenia, Ogień, Mana, Podpalenie.\n\n— Enchantment Effect —\nSzczęśliwy traf: Istnieje 3% szans, że na wrogów spadnie Meteoryt.",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte: {#}%\nEvoca um meteoro que atinge o local selecionado, causando {50/55/60/65/70/75/80/85/90/95}% de dano e queimando o chão, o que causa {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de dano ao longo de 3 segundos.\n\nTags: Maestria, Piromancia, Dano, Fogo, Mana, Queimadura.\n\n— Enchantment Effect —\nGolpe de Sorte: 3% de chance de um Meteoro cair nos inimigos.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы обрушиваете на указанную область метеорит, наносящий {50/55/60/65/70/75/80/85/90/95}% ед. урона. Метеорит выжигает землю, нанося {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% ед. урона от огня за 3 сек.\n\nTags: Искусность, Пиромантия, Урон, Огонь, Мана, Горение.\n\n— Enchantment Effect —\nУдачный удар: на противников с вероятностью 3% обрушивается метеорит.",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n召唤一颗陨石打击目标位置,造成{50/55/60/65/70/75/80/85/90/95}%点伤害并使地面燃烧,在3秒内造成{35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%点伤害。\n\nTags: 掌控, 爆焰, 伤害, 火焰, 法力, 燃烧.\n\n— Enchantment Effect —\n幸运一击:有3%几率对敌人施放陨石术。"
},
		id: 78,
		maxPoints: 5,
		values: [ "40", "40" ],
		x: 601.53,
		y: -220.475
	},
	"Enhanced Meteor": {
		baseSkill: "Meteor",
		connections: [ "Meteor", "Mage's Meteor", "Wizard's Meteor" ],
		description: `If a cast of Meteor hits 3 or more enemies, there is a 30% chance an additional Meteor falls on the same location.

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		nameLocalized: {
			"deDE": "Verbesserter Meteor",
			"esES": "Meteorito mejorado",
			"esMX": "Meteoro Potenciado",
			"frFR": "Météore renforcé",
			"itIT": "Meteora Rinforzata",
			"jaJP": "メテオ(強化版)",
			"koKR": "강화된 운석 낙하",
			"plPL": "Wzmocniony Meteoryt",
			"ptBR": "Meteoro Aperfeiçoado",
			"ruRU": "Усиленный метеорит",
			"zhCN": "强化陨石术"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Wirken von Meteor mindestens 3 Gegner trifft, besteht eine Chance von 30%, dass ein zusätzlicher Meteor an derselben Stelle einschlägt.\n\nTags: Beherrschung, Pyromanie, Schaden, Feuer, Mana, Verbrennung.",
			"esES": "Si un lanzamiento de Meteorito golpea a 3 enemigos o más, hay un 30% de probabilidad de que caiga otro Meteorito en la misma ubicación.\n\nTags: Maestría, Piromancia, Daño, Fuego, Maná, Quemadura.",
			"esMX": "Si un lanzamiento de Meteoro golpea a 3 o más enemigos, hay un 30% de probabilidad de que otro Meteoro caiga en la misma ubicación.\n\nTags: Dominio, Piromancia, Daño, Fuego, Maná, Quemadura.",
			"frFR": "Si une utilisation de Météore touche au moins 3 adversaires, il y a 30% de chances qu'un météore supplémentaire s'abatte au même endroit.\n\nTags: Maîtrise, Pyromancie, Dégâts, Feu, Mana, Brûlure.",
			"itIT": "Se un lancio di Meteora colpisce 3 o più nemici, c'è una probabilità del 30% che una Meteora aggiuntiva cada sulla stessa posizione.\n\nTags: Dominio, Piromanzia, Danni, Fuoco, Mana, Bruciatura.",
			"jaJP": "〈メテオ〉が1回の使用で3体以上の敵に命中すると、30%の確率で同じ場所に追加で〈メテオ〉が落下する。\n\nTags: 達人, 火術, ダメージ, 火炎, マナ, 炎上.",
			"koKR": "운석 낙하를 1회 시전하여 적을 3마리 이상 적중하면, 30% 확률로 같은 지점에 운석이 하나 추가로 떨어집니다.\n\nTags: 숙련, 방화, 피해, 화염, 마나, 불태우기.",
			"plPL": "Jeśli jednym użyciem Meteorytu trafisz co najmniej 3 wrogów, istnieje 30% szans na uderzenie drugiego Meteorytu w tym samym miejscu.\n\nTags: Mistrzostwo, Piromancja, Obrażenia, Ogień, Mana, Podpalenie.",
			"ptBR": "Se um lançamento de Meteoro atingir 3 ou mais inimigos, há 30% de chance de um Meteoro adicional cair no mesmo local.\n\nTags: Maestria, Piromancia, Dano, Fogo, Mana, Queimadura.",
			"ruRU": "Если \"Метеорит\" поражает 3 или более противников за одно применение, на эту же область с вероятностью 30% обрушивается еще один Метеорит.\n\nTags: Искусность, Пиромантия, Урон, Огонь, Мана, Горение.",
			"zhCN": "如果陨石术命中3名或更多敌人,有30%几率对同一位置额外施放一次陨石术。\n\nTags: 掌控, 爆焰, 伤害, 火焰, 法力, 燃烧."
},
		id: 79,
		maxPoints: 1,
		x: 915.055,
		y: -337.375
	},
	"Mage's Meteor": {
		baseSkill: "Meteor",
		connections: [ "Enhanced Meteor" ],
		description: `Meteor falls 30% faster.

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		nameLocalized: {
			"deDE": "Meteor des Magiers",
			"esES": "Meteorito del hechicero",
			"esMX": "Meteoro de Mago",
			"frFR": "Météore de magie",
			"itIT": "Meteora dell'Arcanista",
			"jaJP": "メテオ(メイジ)",
			"koKR": "마법학자의 운석 낙하",
			"plPL": "Meteoryt Maga",
			"ptBR": "Meteoro de Mago",
			"ruRU": "Метеорит мага",
			"zhCN": "法师陨石术"
},
		descriptionLocalized: {
			"deDE": "Meteor fällt 30% schneller.\n\nTags: Beherrschung, Pyromanie, Schaden, Feuer, Mana, Verbrennung.",
			"esES": "El Meteorito cae un 30% más deprisa.\n\nTags: Maestría, Piromancia, Daño, Fuego, Maná, Quemadura.",
			"esMX": "Meteoro cae un 30% más rápido.\n\nTags: Dominio, Piromancia, Daño, Fuego, Maná, Quemadura.",
			"frFR": "Le météore tombe 30% plus rapidement.\n\nTags: Maîtrise, Pyromancie, Dégâts, Feu, Mana, Brûlure.",
			"itIT": "Meteora cade il 30% più velocemente.\n\nTags: Dominio, Piromanzia, Danni, Fuoco, Mana, Bruciatura.",
			"jaJP": "〈メテオ〉の落下速度が30%増加する。\n\nTags: 達人, 火術, ダメージ, 火炎, マナ, 炎上.",
			"koKR": "운석 낙하 속도가 30% 증가합니다.\n\nTags: 숙련, 방화, 피해, 화염, 마나, 불태우기.",
			"plPL": "Meteoryt spada o 30% szybciej.\n\nTags: Mistrzostwo, Piromancja, Obrażenia, Ogień, Mana, Podpalenie.",
			"ptBR": "Meteoro cai 30% mais rápido.\n\nTags: Maestria, Piromancia, Dano, Fogo, Mana, Queimadura.",
			"ruRU": "\"Метеорит\" обрушивается на 30% быстрее.\n\nTags: Искусность, Пиромантия, Урон, Огонь, Мана, Горение.",
			"zhCN": "陨石术坠落速度加快30%。\n\nTags: 掌控, 爆焰, 伤害, 火焰, 法力, 燃烧."
},
		id: 80,
		maxPoints: 1,
		x: 1174.005,
		y: -328.576
	},
	"Wizard's Meteor": {
		baseSkill: "Meteor",
		connections: [ "Enhanced Meteor" ],
		description: `Meteor's impact Immobilizes enemies for 2 seconds.

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		nameLocalized: {
			"deDE": "Meteor des Zauberers",
			"esES": "Meteorito del mago",
			"esMX": "Meteoro de Arcanista",
			"frFR": "Météore de sorcellerie",
			"itIT": "Meteora del Mago",
			"jaJP": "メテオ(ウィザード)",
			"koKR": "마법사의 운석 낙하",
			"plPL": "Meteoryt Czarownika",
			"ptBR": "Meteoro de Arcanista",
			"ruRU": "Метеорит чародея",
			"zhCN": "巫师陨石术"
},
		descriptionLocalized: {
			"deDE": "Der Aufprall von Meteor macht Gegner 2 Sek. lang bewegungsunfähig.\n\nTags: Beherrschung, Pyromanie, Schaden, Feuer, Mana, Verbrennung.",
			"esES": "El impacto de Meteorito inmoviliza a los enemigos durante 2 s.\n\nTags: Maestría, Piromancia, Daño, Fuego, Maná, Quemadura.",
			"esMX": "El impacto de Meteoro inmoviliza a los enemigos durante 2 segundos.\n\nTags: Dominio, Piromancia, Daño, Fuego, Maná, Quemadura.",
			"frFR": "L'impact de Météore immobilise les adversaires pendant 2 s.\n\nTags: Maîtrise, Pyromancie, Dégâts, Feu, Mana, Brûlure.",
			"itIT": "L'impatto di Meteora immobilizza i nemici per 2 s.\n\nTags: Dominio, Piromanzia, Danni, Fuoco, Mana, Bruciatura.",
			"jaJP": "〈メテオ〉の衝撃により、敵を2秒間にわたり移動不能にする。\n\nTags: 達人, 火術, ダメージ, 火炎, マナ, 炎上.",
			"koKR": "운석 충돌 시 적을 2초 동안 이동 불가 상태로 만듭니다.\n\nTags: 숙련, 방화, 피해, 화염, 마나, 불태우기.",
			"plPL": "Uderzenie Meteorytu unieruchamia wrogów na 2 sek.\n\nTags: Mistrzostwo, Piromancja, Obrażenia, Ogień, Mana, Podpalenie.",
			"ptBR": "O impacto de Meteoro imobiliza os inimigos por 2 segundos.\n\nTags: Maestria, Piromancia, Dano, Fogo, Mana, Queimadura.",
			"ruRU": "\"Метеорит\" обездвиживает пораженных противников на 2 сек.\n\nTags: Искусность, Пиромантия, Урон, Огонь, Мана, Горение.",
			"zhCN": "陨石术命中时会使敌人定身2秒。\n\nTags: 掌控, 爆焰, 伤害, 火焰, 法力, 燃烧."
},
		id: 81,
		maxPoints: 1,
		x: 991.17,
		y: -462.803
	},
	"Blizzard": {
		connections: [ "Mastery", "Enhanced Blizzard" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a frigid blizzard that deals {#}% damage and continually Chills enemies for 18% over 8 seconds.

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.

— Enchantment Effect —
Every 15 seconds, a Blizzard forms over you and follows you for 6 seconds.`,
		nameLocalized: {
			"deDE": "Blizzard",
			"esES": "Ventisca",
			"esMX": "Ventisca",
			"frFR": "Blizzard",
			"itIT": "Tormenta",
			"jaJP": "吹雪",
			"koKR": "눈보라",
			"plPL": "Zamieć",
			"ptBR": "Nevasca",
			"ruRU": "Снежная буря",
			"zhCN": "暴风雪"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nBeschwört einen eisigen Blizzard, der {#} Schaden verursacht und Gegner kontinuierlich 8 Sek. lang für 18% unterkühlt.\n\nTags: Beherrschung, Frost, Unterkühlen, Schaden, Kälte, Mana, Kontrollverlust.\n\n— Enchantment Effect —\nAlle 15 Sek. bildet sich über Euch ein Blizzard, der Euch 6 Sek. lang folgt.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nInvocas una ventisca glacial que inflige {#} de daño y hiela continuamente a los enemigos un 18% durante 8 s.\n\nTags: Maestría, Escarcha, Helada, Daño, Frío, Maná, Control de masas.\n\n— Enchantment Effect —\nCada 15 s, se forma sobre ti una Ventisca que te sigue durante 6 s.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nInvocas una ventisca glacial que inflige {#} de daño y hiela continuamente a los enemigos un 18% durante 8 segundos.\n\nTags: Dominio, Congelar, Helar, Daño, Frío, Maná, Control de multitudes.\n\n— Enchantment Effect —\nCada 15 segundos, se lanza una Ventisca sobre ti que te sigue durante 6 segundos.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous invoquez un blizzard glacial qui inflige {#} points de dégâts et glace en continu les adversaires à hauteur de 18% en 8 s.\n\nTags: Maîtrise, Givre, Glace, Dégâts, Froid, Mana, Perte de contrôle.\n\n— Enchantment Effect —\nToutes les 15 s, un blizzard se forme autour de vous et vous suit pendant 6 s.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nEvochi una tormenta gelida che infligge {#} danni e raggela costantemente i nemici del 18% per 8 s.\n\nTags: Dominio, Gelo, Raggelamento, Danni, Freddo, Mana, Effetti debilitanti.\n\n— Enchantment Effect —\nOgni 15 s, si forma una Tormenta che ti segue per 6 s.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\n極寒の吹雪を呼び起こして敵に{#}のダメージを与えた上で、8秒間かけて持続的に18%の冷気効果を与える。\n\nTags: 達人, 寒気, 冷気, ダメージ, マナ, 操作障害効果.\n\n— Enchantment Effect —\n15秒ごとに〈吹雪〉が頭上に形成され、6秒間ついて来る。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n차디찬 눈보라를 소환하여 {#}의 피해를 주고 8초에 걸쳐 지속적으로 적에게 18%의 오한을 느끼게 합니다.\n\nTags: 숙련, 서리, 오한, 피해, 냉기, 마나, 군중 제어.\n\n— Enchantment Effect —\n15초마다 자신의 머리 위에 눈보라가 생겨나 6초 동안 따라다닙니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nPrzywołujesz lodowatą zamieć, która zadaje wrogom {#} pkt. obrażeń i stale wyziębia ich o 18% w ciągu 8 sek.\n\nTags: Mistrzostwo, Mróz, Wyziębienie, Obrażenia, Zimno, Mana, Ograniczanie Kontroli.\n\n— Enchantment Effect —\nCo 15 sek. nad twoją głową tworzy się Zamieć, która podąża za tobą przez 6 sek.",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte: {#}%\nEvoca uma nevasca gélida que causa {#} de dano e gela inimigos de forma contínua por 18% ao longo de 8 segundos.\n\nTags: Maestria, Geleira, Gelidez, Dano, Gelo, Mana, Controle de Grupo.\n\n— Enchantment Effect —\nA cada 15 segundos, uma Nevasca forma-se e segue você por 6 segundos.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы призываете ледяную бурю, наносящую {#} ед. урона и заставляющую противников коченеть, замедляя их на 18% на 8 сек.\n\nTags: Искусность, Мороз, Окоченение, Урон, Холод, Мана, Контроль.\n\n— Enchantment Effect —\nРаз в 15 сек. над вами образуется снежная буря, которая следует за вами в течение 6 сек.",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n召唤一阵冰冷的暴风雪,造成{#}点伤害并在8秒内持续冻伤敌人18%。\n\nTags: 掌控, 寒霜, 冻伤, 伤害, 冰霜, 法力, 群控.\n\n— Enchantment Effect —\n每过15秒,在头顶汇聚一阵暴风雪并跟随你移动,持续6秒。"
},
		id: 82,
		maxPoints: 5,
		values: [ "40", "33", "120" ],
		x: 300.64,
		y: -339.596
	},
	"Enhanced Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Blizzard", "Mage's Blizzard", "Wizard's Blizzard" ],
		description: `Blizzard deals x25% increased damage to Frozen enemies.

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		nameLocalized: {
			"deDE": "Verbesserter Blizzard",
			"esES": "Ventisca mejorada",
			"esMX": "Ventisca Potenciada",
			"frFR": "Blizzard renforcé",
			"itIT": "Tormenta Rinforzata",
			"jaJP": "吹雪(強化版)",
			"koKR": "강화된 눈보라",
			"plPL": "Wzmocniona Zamieć",
			"ptBR": "Nevasca Aperfeiçoada",
			"ruRU": "Усиленная снежная буря",
			"zhCN": "强化暴风雪"
},
		descriptionLocalized: {
			"deDE": "Blizzard fügt eingefrorenen Gegnern x25% mehr Schaden zu.\n\nTags: Beherrschung, Frost, Unterkühlen, Schaden, Kälte, Mana, Kontrollverlust.",
			"esES": "Ventisca inflige un x25% más de daño a los enemigos congelados.\n\nTags: Maestría, Escarcha, Helada, Daño, Frío, Maná, Control de masas.",
			"esMX": "Ventisca inflige un x25% más de daño contra enemigos congelados.\n\nTags: Dominio, Congelar, Helar, Daño, Frío, Maná, Control de multitudes.",
			"frFR": "Blizzard inflige x25% de dégâts supplémentaires aux cibles gelées.\n\nTags: Maîtrise, Givre, Glace, Dégâts, Froid, Mana, Perte de contrôle.",
			"itIT": "Tormenta infligge il x25% di danni aggiuntivi ai nemici congelati.\n\nTags: Dominio, Gelo, Raggelamento, Danni, Freddo, Mana, Effetti debilitanti.",
			"jaJP": "〈吹雪〉が凍結状態の敵に与えるダメージがx25%増加する。\n\nTags: 達人, 寒気, 冷気, ダメージ, マナ, 操作障害効果.",
			"koKR": "눈보라가 빙결 상태의 적에게 주는 피해가 x25% 증가합니다.\n\nTags: 숙련, 서리, 오한, 피해, 냉기, 마나, 군중 제어.",
			"plPL": "Zamieć zadaje zamrożonym celom obrażenia zwiększone o x25%.\n\nTags: Mistrzostwo, Mróz, Wyziębienie, Obrażenia, Zimno, Mana, Ograniczanie Kontroli.",
			"ptBR": "Nevasca causa 25% de dano aumentado a inimigos congelados.\n\nTags: Maestria, Geleira, Gelidez, Dano, Gelo, Mana, Controle de Grupo.",
			"ruRU": "\"Снежная буря\" наносит на x25% больше урона замороженным противникам.\n\nTags: Искусность, Мороз, Окоченение, Урон, Холод, Мана, Контроль.",
			"zhCN": "暴风雪对被冻结敌人造成的伤害提高x25%。\n\nTags: 掌控, 寒霜, 冻伤, 伤害, 冰霜, 法力, 群控."
},
		id: 83,
		maxPoints: 1,
		x: 447.585,
		y: -525.399
	},
	"Mage's Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Enhanced Blizzard" ],
		description: `When cast above 50 Mana, Blizzard's duration is increased by 4 seconds.

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		nameLocalized: {
			"deDE": "Blizzard des Magiers",
			"esES": "Ventisca del hechicero",
			"esMX": "Ventisca de Mago",
			"frFR": "Blizzard de magie",
			"itIT": "Tormenta dell'Arcanista",
			"jaJP": "吹雪(メイジ)",
			"koKR": "마법학자의 눈보라",
			"plPL": "Zamieć Maga",
			"ptBR": "Nevasca de Mago",
			"ruRU": "Снежная буря мага",
			"zhCN": "巫师暴风雪"
},
		descriptionLocalized: {
			"deDE": "Wenn Blizzard mit mehr als 50 Mana gewirkt wird, erhöht sich die Dauer um 4 Sek.\n\nTags: Beherrschung, Frost, Unterkühlen, Schaden, Kälte, Mana, Kontrollverlust.",
			"esES": "Cuando lanzas Ventisca con más de 50 de maná, su duración aumenta 4 s.\n\nTags: Maestría, Escarcha, Helada, Daño, Frío, Maná, Control de masas.",
			"esMX": "Cuando lanzas Ventisca con más de 50 de maná, su duración aumenta 4 segundos.\n\nTags: Dominio, Congelar, Helar, Daño, Frío, Maná, Control de multitudes.",
			"frFR": "Si vous avez plus de 50 points de mana lorsque vous utilisez Blizzard, sa durée est augmentée de 4 s.\n\nTags: Maîtrise, Givre, Glace, Dégâts, Froid, Mana, Perte de contrôle.",
			"itIT": "Quando viene lanciata avendo almeno 50 mana, la durata di Tormenta aumenta di 4 s.\n\nTags: Dominio, Gelo, Raggelamento, Danni, Freddo, Mana, Effetti debilitanti.",
			"jaJP": "マナが50より多い状態で使用すると、〈吹雪〉の持続時間が4秒増加する。\n\nTags: 達人, 寒気, 冷気, ダメージ, マナ, 操作障害効果.",
			"koKR": "마나가 50|1을;를; 초과할 때 눈보라를 시전하면 지속시간이 4초 증가합니다.\n\nTags: 숙련, 서리, 오한, 피해, 냉기, 마나, 군중 제어.",
			"plPL": "Jeśli podczas użycia Zamieci masz powyżej 50 pkt. many, czas działania umiejętności jest wydłużony o 4 sek.\n\nTags: Mistrzostwo, Mróz, Wyziębienie, Obrażenia, Zimno, Mana, Ograniczanie Kontroli.",
			"ptBR": "Ao ser lançada com mais de 50 de mana, a duração de Nevasca é aumentada em 4 segundos.\n\nTags: Maestria, Geleira, Gelidez, Dano, Gelo, Mana, Controle de Grupo.",
			"ruRU": "Если при применении \"Снежной бури\" у вас больше 50 ед. маны, время действия умения продлевается на 4 сек.\n\nTags: Искусность, Мороз, Окоченение, Урон, Холод, Мана, Контроль.",
			"zhCN": "法力大于50点时,施放的暴风雪持续时间延长4秒。\n\nTags: 掌控, 寒霜, 冻伤, 伤害, 冰霜, 法力, 群控."
},
		id: 84,
		maxPoints: 1,
		x: 402.595,
		y: -654.156
	},
	"Wizard's Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Enhanced Blizzard" ],
		description: `While you have an active Blizzard, your Core Skills cost 10% less Mana.

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		nameLocalized: {
			"deDE": "Blizzard des Zauberers",
			"esES": "Ventisca del mago",
			"esMX": "Ventisca de Arcanista",
			"frFR": "Blizzard de sorcellerie",
			"itIT": "Tormenta del Mago",
			"jaJP": "吹雪(ウィザード)",
			"koKR": "마법사의 눈보라",
			"plPL": "Zamieć Czarownika",
			"ptBR": "Nevasca de Arcanista",
			"ruRU": "Снежная буря чародея",
			"zhCN": "法师暴风雪"
},
		descriptionLocalized: {
			"deDE": "Solange Blizzard aktiv ist, kosten Eure Basisfertigkeiten 10% weniger Mana.\n\nTags: Beherrschung, Frost, Unterkühlen, Schaden, Kälte, Mana, Kontrollverlust.",
			"esES": "Mientras tengas una Ventisca activa, tus habilidades principales cuestan un 10% menos de maná.\n\nTags: Maestría, Escarcha, Helada, Daño, Frío, Maná, Control de masas.",
			"esMX": "Mientras tienes una Ventisca activa, tus habilidades principales cuestan un 10% menos de maná.\n\nTags: Dominio, Congelar, Helar, Daño, Frío, Maná, Control de multitudes.",
			"frFR": "Tant que vous avez un blizzard actif, vos compétences principales coûtent 10% de mana en moins.\n\nTags: Maîtrise, Givre, Glace, Dégâts, Froid, Mana, Perte de contrôle.",
			"itIT": "Mentre hai una Tormenta attiva, le tue abilità primarie costano il 10% di mana in meno.\n\nTags: Dominio, Gelo, Raggelamento, Danni, Freddo, Mana, Effetti debilitanti.",
			"jaJP": "〈吹雪〉が1つ発動している間、コアスキルのマナ消費量が10%減少する。\n\nTags: 達人, 寒気, 冷気, ダメージ, マナ, 操作障害効果.",
			"koKR": "눈보라가 활성화되어 있는 동안 핵심 기술의 마나 소모량이 10% 감소합니다.\n\nTags: 숙련, 서리, 오한, 피해, 냉기, 마나, 군중 제어.",
			"plPL": "Kiedy masz aktywną Zamieć, twoje umiejętności Główne zużywają o 10% mniej many.\n\nTags: Mistrzostwo, Mróz, Wyziębienie, Obrażenia, Zimno, Mana, Ograniczanie Kontroli.",
			"ptBR": "Enquanto tiver uma Nevasca ativa, suas habilidades principais custam 10% a menos de mana.\n\nTags: Maestria, Geleira, Gelidez, Dano, Gelo, Mana, Controle de Grupo.",
			"ruRU": "Во время действия \"Снежной бури\" основные умения расходуют на 10% меньше маны.\n\nTags: Искусность, Мороз, Окоченение, Урон, Холод, Мана, Контроль.",
			"zhCN": "当你有激活的暴风雪时,你的核心技能消耗的法力降低10%。\n\nTags: 掌控, 寒霜, 冻伤, 伤害, 冰霜, 法力, 群控."
},
		id: 85,
		maxPoints: 1,
		x: 675.015,
		y: -585
	},
	"Ball Lightning": {
		connections: [ "Mastery", "Enhanced Ball Lightning" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Discharge a ball of lightning that slowly moves forward, continually zapping enemies for {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% damage.

Tags: Mastery, Shock, Damage, Lightning, Mana.

— Enchantment Effect —
Lucky Hit: Critical Strikes have a 25% chance to spawn a static Ball Lightning.`,
		nameLocalized: {
			"deDE": "Kugelblitz",
			"esES": "Bola de rayos",
			"esMX": "Rayo Globular",
			"frFR": "Sphère foudroyante",
			"itIT": "Palla Fulminante",
			"jaJP": "ボール・ライトニング",
			"koKR": "구상 번개",
			"plPL": "Piorun Kulisty",
			"ptBR": "Bola de Eletricidade",
			"ruRU": "Шаровая молния",
			"zhCN": "球状闪电"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nEntlädt eine Blitzkugel, die sich langsam vorwärts bewegt und Gegnern mit ihren Stromstößen fortwährend {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% Schaden zufügt.\n\nTags: Beherrschung, Schock, Schaden, Blitz, Mana.\n\n— Enchantment Effect —\nGlückstreffer: Kritische Treffer verfügen über eine Chance von 25%, einen statischen Kugelblitz zu erzeugen.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nLanzas una bola de rayos que se desplaza lentamente hacia delante y electrocuta continuamente a los enemigos, lo que inflige {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% de daño.\n\nTags: Maestría, Electrocución, Daño, Rayos, Maná.\n\n— Enchantment Effect —\nGolpe de suerte: Los golpes críticos tienen un 25% de probabilidad de generar una Bola de rayos estática.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nLiberas una bola de rayos que se mueve lentamente hacia adelante, electrocuta a los enemigos de manera continua y les inflige {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% de daño.\n\nTags: Dominio, Choque, Daño, Rayo, Maná.\n\n— Enchantment Effect —\nGolpe afortunado: Los golpes críticos tienen un 25% de probabilidad de generar un Rayo Globular estático.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous libérez une boule de foudre qui avance lentement et électrocute les adversaires en continu en leur infligeant {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% points de dégâts.\n\nTags: Maîtrise, Foudre, Dégâts, Mana.\n\n— Enchantment Effect —\nCoup de chance: les coups critiques ont 25% de chances de générer une sphère foudroyante statique.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nScateni una palla di fulmini che avanza lentamente, fulminando continuamente i nemici e infliggendo {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% danni.\n\nTags: Dominio, Folgore, Danni, Fulmine, Mana.\n\n— Enchantment Effect —\nColpo fortunato: i colpi critici hanno il 25% di probabilità di generare una Palla Fulminante statica.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\nゆっくりと前進する球電を放ち、敵を頻繁に感電させて{18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}%のダメージを与える。\n\nTags: 達人, 電撃, ダメージ, 稲妻, マナ.\n\n— Enchantment Effect —\n幸運の一撃: クリティカルヒット時、25%の確率で静電気を帯びた〈ボール・ライトニング〉が発生する。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n전방으로 천천히 움직이는 번개의 구체를 방출합니다. 구체는 계속해서 적을 감전시켜 {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}%의 피해를 줍니다.\n\nTags: 숙련, 감전, 피해, 번개, 마나.\n\n— Enchantment Effect —\n행운의 적중: 극대화 시 25%의 확률로 정지해 있는 구상 번개가 생성됩니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nWyzwalasz kulę błyskawic, która powoli przemieszcza się do przodu, nieprzerwanie porażając wrogów i zadając im {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% pkt. obrażeń.\n\nTags: Mistrzostwo, Porażenie, Obrażenia, Piorun, Mana.\n\n— Enchantment Effect —\nSzczęśliwy traf: Trafienia krytyczne mają 25% szans na stworzenie statycznego Pioruna Kulistego.",
			"ptBR": "Custo de mana{#}\nChance de Golpe de Sorte: {#}%\nDispara uma bola de eletricidade que avança lentamente, atacando inimigos de forma contínua e causando {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% de dano.\n\nTags: Maestria, Choque, Dano, Eletricidade, Mana.\n\n— Enchantment Effect —\nGolpe de Sorte: Acertos críticos têm 25% de chance de gerar uma Bola de Eletricidade estática.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы выпускаете шаровую молнию, которая медленно движется вперед, время от времени нанося противникам по {18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}% ед. урона.\n\nTags: Искусность, Шок, Урон, Молния, Мана.\n\n— Enchantment Effect —\nУдачный удар: критические удары с вероятностью 25% создают неподвижную \"Шаровую молнию\".",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n放出一个向前缓慢移动的闪电球持续电击敌人,造成{18/19.8/21.6/23.4/25.2/27/28.8/30.6/32.4/34.2}%点伤害。\n\nTags: 掌控, 电冲, 伤害, 闪电, 法力.\n\n— Enchantment Effect —\n幸运一击:暴击有25%的几率形成一团球状闪电。"
},
		id: 86,
		maxPoints: 5,
		values: [ "50", "20" ],
		x: 274.81,
		y: 344.08
	},
	"Enhanced Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Ball Lightning", "Wizard's Ball Lightning", "Mage's Ball Lightning" ],
		description: `Ball Lightning's damage rate is increased by 200% of your Attack Speed Bonus.

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserter Kugelblitz",
			"esES": "Bola de rayos mejorada",
			"esMX": "Rayo Globular Potenciado",
			"frFR": "Sphère foudroyante renforcée",
			"itIT": "Palla Fulminante Rinforzata",
			"jaJP": "ボール・ライトニング(強化版)",
			"koKR": "강화된 구상 번개",
			"plPL": "Wzmocniony Piorun Kulisty",
			"ptBR": "Bola de Eletricidade Aperfeiçoada",
			"ruRU": "Усиленная шаровая молния",
			"zhCN": "强化球状闪电"
},
		descriptionLocalized: {
			"deDE": "Der Schaden von Kugelblitz erhöht sich um 200% Eures Angriffsgeschwindigkeitsbonus.\n\nTags: Beherrschung, Schock, Schaden, Blitz, Mana.",
			"esES": "El índice de daño de Bola de rayos aumenta una cantidad equivalente a un 200% de tu bonus de velocidad de ataque.\n\nTags: Maestría, Electrocución, Daño, Rayos, Maná.",
			"esMX": "El índice de daño de Rayo Globular aumenta un 200% de tu bonificación de velocidad de ataque.\n\nTags: Dominio, Choque, Daño, Rayo, Maná.",
			"frFR": "Les dégâts infligés par Sphère foudroyante sont augmentés de 200% de votre bonus à la vitesse d'attaque.\n\nTags: Maîtrise, Foudre, Dégâts, Mana.",
			"itIT": "I danni di Palla Fulminante aumentano del 200% del tuo bonus alla velocità d'attacco.\n\nTags: Dominio, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "〈ボール・ライトニング〉のダメージ発生頻度が、自身の攻撃速度ボーナスの200%分高くなる。\n\nTags: 達人, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "구상 번개가 피해를 주는 빈도가 공격 속도 증가 효과의 200%만큼 증가합니다.\n\nTags: 숙련, 감전, 피해, 번개, 마나.",
			"plPL": "Tempo zadawania obrażeń przez Piorun Kulisty jest zwiększone o równowartość 200% twojej premii do szybkości ataku.\n\nTags: Mistrzostwo, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "A taxa de dano de Bola de Eletricidade é aumentada em 200% do seu bônus de velocidade de ataque.\n\nTags: Maestria, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "Частота срабатывания урона от \"Шаровой молнии\" повышается на 200% вашей прибавки к скорости атаки.\n\nTags: Искусность, Шок, Урон, Молния, Мана.",
			"zhCN": "球状闪电造成伤害的速度提高,程度相当于你攻击速度加成的200%。\n\nTags: 掌控, 电冲, 伤害, 闪电, 法力."
},
		id: 87,
		maxPoints: 1,
		x: 431.875,
		y: 536.465
	},
	"Wizard's Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Enhanced Ball Lightning" ],
		description: `If an enemy is hit at least 4 times by a cast of Ball Lightning, a Crackling Energy is formed. Can only happen once per cast.

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Kugelblitz des Zauberers",
			"esES": "Bola de rayos del mago",
			"esMX": "Rayo Globular de Arcanista",
			"frFR": "Sphère foudroyante de sorcellerie",
			"itIT": "Palla Fulminante del Mago",
			"jaJP": "ボール・ライトニング(ウィザード)",
			"koKR": "마법사의 구상 번개",
			"plPL": "Piorun Kulisty Czarownika",
			"ptBR": "Bola de Eletricidade de Arcanista",
			"ruRU": "Шаровая молния чародея",
			"zhCN": "巫师球状闪电"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Gegner mit einem Einsatz von Kugelblitz mindestens 4-mal getroffen wird, bildet sich Knisternde Energie. Dieser Effekt kann nur einmal pro Einsatz auftreten.\n\nTags: Beherrschung, Schock, Schaden, Blitz, Mana.",
			"esES": "Si un lanzamiento de Bola de rayos golpea a un enemigo al menos 4 veces, se forma una energía crepitante. Solo puede ocurrir una vez por lanzamiento.\n\nTags: Maestría, Electrocución, Daño, Rayos, Maná.",
			"esMX": "Si un enemigo es golpeado al menos 4 veces por un lanzamiento de Rayo Globular, se formará una Energía Crepitante.\n\nTags: Dominio, Choque, Daño, Rayo, Maná.",
			"frFR": "Si une cible est touchée au moins 4 fois par une seule utilisation de Sphère foudroyante, de l'énergie crépitante se forme. Cet effet ne peut se produire qu'une fois par utilisation.\n\nTags: Maîtrise, Foudre, Dégâts, Mana.",
			"itIT": "Se un nemico viene colpito almeno 4 volte da un lancio di Palla Fulminante, si genera Energia Crepitante. Può attivarsi solo una volta per lancio.\n\nTags: Dominio, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "〈ボール・ライトニング〉が一度の使用で敵1体に少なくとも4回命中すると、〈帯び出す電気〉が発生する。この効果は一度の使用で1回しか発動しない。\n\nTags: 達人, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "구상 번개를 1회 시전하여 같은 적을 최소 4회 적중하면 짜릿한 에너지가 생성됩니다. 이 효과는 시전 1회당 한 번만 발동합니다.\n\nTags: 숙련, 감전, 피해, 번개, 마나.",
			"plPL": "Jeśli wróg zostanie trafiony pojedynczym Piorunem Kulistym co najmniej 4 razy, powstaje Roziskrzona Energia. Efekt ten może wystąpić tylko raz na użycie zdolności.\n\nTags: Mistrzostwo, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "Se um inimigo for atingido pelo menos 4 vezes por um lançamento de Bola de Eletricidade, uma Energia Crepitante é formada. Só pode ocorrer uma vez por lançamento.\n\nTags: Maestria, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "Если одна и та же \"Шаровая молния\" поражает одного противника хотя бы 4 раза:раз, она создает искрящийся заряд энергии. Срабатывает один раз за применение.\n\nTags: Искусность, Шок, Урон, Молния, Мана.",
			"zhCN": "如果一名敌人被单次球状闪电命中至少4次,生成一个爆裂电花。该效果每次施法只能触发一次。\n\nTags: 掌控, 电冲, 伤害, 闪电, 法力."
},
		id: 88,
		maxPoints: 1,
		x: 399.115,
		y: 661.625
	},
	"Mage's Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Enhanced Ball Lightning" ],
		description: `After hitting Close enemies 50 times with Ball Lightning, your next cast of it Stuns enemies hit for 1 seconds.

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		nameLocalized: {
			"deDE": "Kugelblitz des Magiers",
			"esES": "Bola de rayos del hechicero",
			"esMX": "Rayo Globular de Mago",
			"frFR": "Sphère foudroyante de magie",
			"itIT": "Palla Fulminante dell'Arcanista",
			"jaJP": "ボール・ライトニング(メイジ)",
			"koKR": "마법학자의 구상 번개",
			"plPL": "Piorun Kulisty Maga",
			"ptBR": "Bola de Eletricidade de Mago",
			"ruRU": "Шаровая молния мага",
			"zhCN": "法师球状闪电"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr Gegner 50-mal mit Kugelblitz getroffen habt, betäubt die Fertigkeit getroffene Gegner bei der nächsten Wirkung 1 Sek. lang.\n\nTags: Beherrschung, Schock, Schaden, Blitz, Mana.",
			"esES": "Después de golpear a enemigos cercanos 50 veces con Bola de rayos, su siguiente lanzamiento aturdirá a los enemigos golpeados durante 1 s.\n\nTags: Maestría, Electrocución, Daño, Rayos, Maná.",
			"esMX": "Después de golpear a los enemigos cercanos 50 veces con Rayo Globular, tu siguiente lanzamiento aturde a los enemigos golpeados durante 1 segundos.\n\nTags: Dominio, Choque, Daño, Rayo, Maná.",
			"frFR": "Après avoir touché des cibles à proximité 50 fois avec Sphère foudroyante, votre prochaine utilisation de Sphère foudroyante étourdit les cibles touchées pendant 1 s.\n\nTags: Maîtrise, Foudre, Dégâts, Mana.",
			"itIT": "Dopo aver colpito i nemici vicini 50 volte con Palla Fulminante, il suo prossimo utilizzo stordisce i nemici colpiti per 1 s.\n\nTags: Dominio, Folgore, Danni, Fulmine, Mana.",
			"jaJP": "〈ボール・ライトニング〉が近距離の敵に50回命中すると、次に使用した際に命中した敵を1秒間スタンさせる。\n\nTags: 達人, 電撃, ダメージ, 稲妻, マナ.",
			"koKR": "구상 번개가 근거리에 있는 적에게 50번 적중하면, 다음으로 시전하는 구상 번개가 적중당한 적들을 1초 동안 기절시킵니다.\n\nTags: 숙련, 감전, 피해, 번개, 마나.",
			"plPL": "Po trafieniu pobliskich wrogów 50 razy Piorunem Kulistym kolejny atak z użyciem tej umiejętności ogłusza trafionych wrogów na 1 sek.\n\nTags: Mistrzostwo, Porażenie, Obrażenia, Piorun, Mana.",
			"ptBR": "Depois de acertar inimigos próximos 50 vezes com Bola de Eletricidade, seu próximo lançamento da habilidade atordoa inimigos atingidos por 1 segundos.\n\nTags: Maestria, Choque, Dano, Eletricidade, Mana.",
			"ruRU": "Когда вы поражаете находящихся рядом противников \"Шаровой молнией\" 50 раза:раз, ваша следующая шаровая молния оглушает пораженные цели на 1 сек.\n\nTags: Искусность, Шок, Урон, Молния, Мана.",
			"zhCN": "球状闪电命中近距敌人50次后,你下一次施放会击晕其命中的敌人1秒。\n\nTags: 掌控, 电冲, 伤害, 闪电, 法力."
},
		id: 89,
		maxPoints: 1,
		x: 656.41,
		y: 586.43
	},
	"Inner Flames": {
		connections: [ "Mastery", "Crippling Flames", "Devouring Blaze" ],
		description: `Your Pyromancy Skills deal x{3/6/9/12/15/18/21/24/27/30}% increased damage while you are Healthy.

Tags: Healthy, Pyromancy, Damage.`,
		nameLocalized: {
			"deDE": "Innere Flammen",
			"esES": "Fuego interior",
			"esMX": "Llamas Interiores",
			"frFR": "Flammes intérieures",
			"itIT": "Fiamme Interiori",
			"jaJP": "内なる炎",
			"koKR": "내면의 불꽃",
			"plPL": "Wewnętrzne Płomienie",
			"ptBR": "Chamas Interiores",
			"ruRU": "Внутреннее пламя",
			"zhCN": "心灵之火"
},
		descriptionLocalized: {
			"deDE": "Eure Pyromaniefertigkeiten verursachen x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden, solange Ihr gesund seid.\n\nTags: Gesund, Pyromanie, Schaden.",
			"esES": "Tus habilidades de piromancia infligen un x{3/6/9/12/15/18/21/24/27/30}% más de daño mientras estás saludable.\n\nTags: Saludable, Piromancia, Daño.",
			"esMX": "Tus habilidades de Piromancia infligen un x{3/6/9/12/15/18/21/24/27/30}% más de daño mientras estás saludable.\n\nTags: Saludable, Piromancia, Daño.",
			"frFR": "Vos compétences de pyromancie infligent x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires lorsque que vous êtes en bonne santé.\n\nTags: En bonne santé, Pyromancie, Dégâts.",
			"itIT": "Le tue abilità di piromanzia infliggono il x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi mentre sei in salute.\n\nTags: In salute, Piromanzia, Danni.",
			"jaJP": "健全状態でいる間、火術スキルで与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: 健全, 火術, ダメージ.",
			"koKR": "건강 상태일 때 자신의 방화 기술로 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 건강, 방화, 피해.",
			"plPL": "Twoje umiejętności Piromancji zadają obrażenia zwiększone o x{3/6/9/12/15/18/21/24/27/30}%, kiedy jesteś w pełni sił.\n\nTags: Pełnia Sił, Piromancja, Obrażenia.",
			"ptBR": "Suas habilidades de Piromancia causam {3/6/9/12/15/18/21/24/27/30}% de dano aumentado enquanto você estiver saudável.\n\nTags: Saudável, Piromancia, Dano.",
			"ruRU": "Ваши умения категории \"Пиромантия\" наносят на x{3/6/9/12/15/18/21/24/27/30}% больше урона, пока у вас высокий уровень здоровья.\n\nTags: Высокое здоровье, Пиромантия, Урон.",
			"zhCN": "健康状态下,你的爆焰技能造成的伤害提高x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 健康, 爆焰, 伤害."
},
		id: 90,
		maxPoints: 3,
		x: 594.325,
		y: 0.68
	},
	"Crippling Flames": {
		connections: [ "Inner Flames" ],
		description: `Lucky Hit: Your Pyromancy Skills have a {5/10/15/20/25/30/35/40/45/50}% chance to Immobilize enemies for 2 seconds. This chance is doubled while you are Healthy.

Tags: Healthy, Lucky Hit, Crowd Control, Pyromancy.`,
		nameLocalized: {
			"deDE": "Lähmende Flammen",
			"esES": "Llamas paralizadoras",
			"esMX": "Llamas Incapacitantes",
			"frFR": "Flammes paralysantes",
			"itIT": "Fiamme Debilitanti",
			"jaJP": "壊滅的な炎",
			"koKR": "마비의 불꽃",
			"plPL": "Okaleczające Płomienie",
			"ptBR": "Chamas Incapacitantes",
			"ruRU": "Увечащее пламя",
			"zhCN": "致残烈焰"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Eure Pyromaniefertigkeiten verfügen über eine Chance von {5/10/15/20/25/30/35/40/45/50}%, Gegner 2 Sek. lang bewegungsunfähig zu machen. Diese Chance verdoppelt sich, solange Ihr gesund seid.\n\nTags: Gesund, Glückstreffer, Kontrollverlust, Pyromanie.",
			"esES": "Golpe de suerte: Tus habilidades de piromancia tienen un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de inmovilizar a los enemigos durante 2 s. Esta probabilidad se duplica mientras estás saludable.\n\nTags: Saludable, Golpe de suerte, Control de masas, Piromancia.",
			"esMX": "Golpe afortunado: Tus habilidades de Piromancia tienen un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de inmovilizar a los enemigos durante 2 segundos. Esta probabilidad se duplica cuando estás saludable.\n\nTags: Saludable, Golpe afortunado, Control de multitudes, Piromancia.",
			"frFR": "Coup de chance: vos compétences de pyromancie ont {5/10/15/20/25/30/35/40/45/50}% de chances d'immobiliser les adversaires pendant 2 s. Ces chances sont doublées lorsque vous êtes en bonne santé.\n\nTags: En bonne santé, Coup de chance, Perte de contrôle, Pyromancie.",
			"itIT": "Colpo fortunato: le tue abilità di piromanzia hanno il {5/10/15/20/25/30/35/40/45/50}% di probabilità di immobilizzare i nemici per 2 s. Questa probabilità raddoppia mentre sei in salute.\n\nTags: In salute, Colpo fortunato, Effetti debilitanti, Piromanzia.",
			"jaJP": "幸運の一撃: 火術スキルが{5/10/15/20/25/30/35/40/45/50}%の確率で敵を2秒間にわたり移動不能状態にする。自身が健全状態の場合、この効果の発生率は2倍になる。\n\nTags: 健全, 幸運の一撃, 操作障害効果, 火術.",
			"koKR": "행운의 적중: 방화 기술이 {5/10/15/20/25/30/35/40/45/50}% 확률로 적을 2초 동안 이동 불가 상태로 만듭니다. 건강 상태에서는 확률이 2배로 증가합니다.\n\nTags: 건강, 행운의 적중, 군중 제어, 방화.",
			"plPL": "Szczęśliwy traf: Twoje umiejętności Piromancji mają {5/10/15/20/25/30/35/40/45/50}% szans na unieruchomienie wrogów na 2 sek. Szansa ta jest podwojona, kiedy jesteś w pełni sił.\n\nTags: Pełnia Sił, Szczęśliwy Traf, Ograniczanie Kontroli, Piromancja.",
			"ptBR": "Golpe de Sorte: Suas habilidades de Piromancia têm {5/10/15/20/25/30/35/40/45/50}% de chance de imobilizar inimigos por 2 segundos. Essa chance é dobrada enquanto você estiver saudável.\n\nTags: Saudável, Golpe de Sorte, Controle de Grupo, Piromancia.",
			"ruRU": "Удачный удар: ваши умения категории \"Пиромантия\" с вероятностью {5/10/15/20/25/30/35/40/45/50}% обездвиживают противников на 2 сек. Вероятность удваивается, пока у вас высокий уровень здоровья.\n\nTags: Высокое здоровье, Удачный удар, Контроль, Пиромантия.",
			"zhCN": "幸运一击:你的爆焰技能有{5/10/15/20/25/30/35/40/45/50}%几率使敌人定身2秒。该几率在你处于健康状态时翻倍。\n\nTags: 健康, 幸运一击, 群控, 爆焰."
},
		id: 132,
		maxPoints: 3,
		x: 884.67,
		y: 83.63
	},
	"Devouring Blaze": {
		connections: [ "Inner Flames" ],
		description: `You deal x{10/20/30/40/50/60/70/80/90/100}% increased Critical Strike Damage against Burning enemies. If they are also Immobilized, this bonus is increased to x{25/50/75/100/125/150/175/200/225/250}%.

Tags: Damage, Burn, Critical Strikes, Crowd Control.`,
		nameLocalized: {
			"deDE": "Verschlingende Feuersbrunst",
			"esES": "Llama devoradora",
			"esMX": "Llamarada Famélica",
			"frFR": "Brasier dévorant",
			"itIT": "Vampate Divoranti",
			"jaJP": "暴食の業火",
			"koKR": "걸신들린 불길",
			"plPL": "Pochłaniająca Pożoga",
			"ptBR": "Fogo Devorador",
			"ruRU": "Всепоглощающее пламя",
			"zhCN": "吞噬烈焰"
},
		descriptionLocalized: {
			"deDE": "Ihr verursacht x{10/20/30/40/50/60/70/80/90/100}% mehr kritischen Trefferschaden gegen brennende Gegner. Wenn sie außerdem bewegungsunfähig sind, erhöht sich dieser Bonus auf x{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Schaden, Verbrennung, Kritische Treffer, Kontrollverlust.",
			"esES": "Infliges un x{10/20/30/40/50/60/70/80/90/100}% más de daño de golpe crítico contra enemigos que están quemándose. Si también están inmovilizados, el bonus aumenta a un x{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Daño, Quemadura, Golpes críticos, Control de masas.",
			"esMX": "Infliges un x{10/20/30/40/50/60/70/80/90/100}% más de daño de golpe crítico contra enemigos quemados. Si también están inmovilizados, esta bonificación aumenta al x{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Daño, Quemadura, Golpes críticos, Control de multitudes.",
			"frFR": "Vous infligez x{10/20/30/40/50/60/70/80/90/100}% de dégâts critiques supplémentaires aux cibles en feu. Si elles sont aussi immobilisées, ce bonus est porté à x{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Dégâts, Brûlure, Coups critiques, Perte de contrôle.",
			"itIT": "Infliggi il x{10/20/30/40/50/60/70/80/90/100}% di danni critici aggiuntivi contro i nemici in fiamme. Se i nemici sono anche immobilizzati, questo bonus sale al x{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Danni, Bruciatura, Colpi critici, Effetti debilitanti.",
			"jaJP": "炎上状態の敵に対するクリティカルヒットダメージがx{10/20/30/40/50/60/70/80/90/100}%増加する。同時に移動不能状態だった場合、ボーナス量がx{25/50/75/100/125/150/175/200/225/250}%に増加する。\n\nTags: ダメージ, 炎上, 致命の一撃, 操作障害効果.",
			"koKR": "불타는 적에게 주는 극대화 피해가 x{10/20/30/40/50/60/70/80/90/100}% 증가합니다. 적이 이동 불가 상태이기도 한 경우 이 효과가 x{25/50/75/100/125/150/175/200/225/250}%까지 증가합니다.\n\nTags: 피해, 불태우기, 극대화, 군중 제어.",
			"plPL": "Zadajesz obrażenia od trafień krytycznych zwiększone o x{10/20/30/40/50/60/70/80/90/100}% podpalonym wrogom. Jeśli są także unieruchomieni, premia ta wzrasta do x{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Obrażenia, Podpalenie, Trafienia Krytyczne, Ograniczanie Kontroli.",
			"ptBR": "Você causa {10/20/30/40/50/60/70/80/90/100}% de dano de acerto crítico aumentado contra inimigos que estão queimando. Se eles também estiverem imobilizados, esse bônus é aumentado para {25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Dano, Queimadura, Acertos Críticos, Controle de Grupo.",
			"ruRU": "Вы наносите на x{10/20/30/40/50/60/70/80/90/100}% больше критического урона подожженным противникам. Если противники еще и обездвижены, прибавка увеличивается на x{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Урон, Горение, Критические удары, Контроль.",
			"zhCN": "你对燃烧的敌人造成的暴击伤害提高x{10/20/30/40/50/60/70/80/90/100}%。如果该敌人还被定身,则该加成提高至x{25/50/75/100/125/150/175/200/225/250}%。\n\nTags: 伤害, 燃烧, 暴击, 群控."
},
		id: 133,
		maxPoints: 3,
		x: 882.995,
		y: -75.715
	},
	"Static Discharge": {
		connections: [ "Invigorating Conduit", "Shocking Impact", "Mastery" ],
		description: `Lucky Hit: Critical Strikes with Shock Skills have up to a {5/10/15/20/25/30/35/40/45/50}% chance to form a Crackling Energy.

Tags: Crackling Energy, Shock, Lucky Hit, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Statische Entladung",
			"esES": "Descarga estática",
			"esMX": "Descarga Estática",
			"frFR": "Décharge statique",
			"itIT": "Scarica Statica",
			"jaJP": "スタティック・ディスチャージ",
			"koKR": "전하 방출",
			"plPL": "Wyładowanie Statyczne",
			"ptBR": "Descarga Estática",
			"ruRU": "Статический разряд",
			"zhCN": "静电释能"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Kritische Treffer mit Schockfertigkeiten verfügen über eine Chance von bis zu {5/10/15/20/25/30/35/40/45/50}%, Knisternde Energie zu erzeugen.\n\nTags: Knisternde Energie, Schock, Glückstreffer, Kritische Treffer.",
			"esES": "Golpe de suerte: Los golpes críticos de las habilidades de electrocución tienen hasta un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de formar una energía crepitante.\n\nTags: Energía crepitante, Electrocución, Golpe de suerte, Golpes críticos.",
			"esMX": "Golpe afortunado: Los golpes críticos con habilidades de Rayo tienen hasta un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de generar Energía Crepitante.\n\nTags: Energía Crepitante, Choque, Golpe afortunado, Golpes críticos.",
			"frFR": "Coup de chance: les coups critiques portés avec vos compétences de foudre ont jusqu'à {5/10/15/20/25/30/35/40/45/50}% de chances de générer de l'énergie crépitante.\n\nTags: Énergie crépitante, Foudre, Coup de chance, Coups critiques.",
			"itIT": "Colpo fortunato: infliggere colpi critici con le abilità di folgore ha una probabilità massima del {5/10/15/20/25/30/35/40/45/50}% di generare Energia Crepitante.\n\nTags: Energia Crepitante, Folgore, Colpo fortunato, Colpi critici.",
			"jaJP": "幸運の一撃: ショックスキルでクリティカルヒットを出すと、最大{5/10/15/20/25/30/35/40/45/50}%の確率で〈帯び出す電気〉が発生する。\n\nTags: 帯び出す電気, 電撃, 幸運の一撃, 致命の一撃.",
			"koKR": "행운의 적중: 감전 기술이 극대화로 적중하면 최대 {5/10/15/20/25/30/35/40/45/50}% 확률로 짜릿한 에너지가 생성됩니다.\n\nTags: 짜릿한 에너지, 감전, 행운의 적중, 극대화.",
			"plPL": "Szczęśliwy traf: Trafienie wrogów umiejętnościami Porażenia ma do {5/10/15/20/25/30/35/40/45/50}% szans na stworzenie Roziskrzonej Energii.\n\nTags: Roziskrzona Energia, Porażenie, Szczęśliwy Traf, Trafienia Krytyczne.",
			"ptBR": "Golpe de Sorte: Acertos críticos com habilidades de Choque têm até {5/10/15/20/25/30/35/40/45/50}% de chance de formar uma Energia Crepitante.\n\nTags: Energia Crepitante, Choque, Golpe de Sorte, Acertos Críticos.",
			"ruRU": "Удачный удар: критические удары умениями шока с вероятностью до {5/10/15/20/25/30/35/40/45/50}% создают искрящиеся заряды энергии.\n\nTags: Искрящийся заряд энергии, Шок, Удачный удар, Критические удары.",
			"zhCN": "幸运一击:电冲技能暴击时,有最高{5/10/15/20/25/30/35/40/45/50}%几率生成一个爆裂电花。\n\nTags: 爆裂电花, 电冲, 幸运一击, 暴击."
},
		id: 94,
		maxPoints: 3,
		x: -133.43,
		y: 371.055
	},
	"Invigorating Conduit": {
		connections: [ "Static Discharge" ],
		description: `Upon absorbing Crackling Energy, you gain {4/8/12/16/20/24/28/32/36/40} Mana.

Tags: Crackling Energy, Mana.`,
		nameLocalized: {
			"deDE": "Belebende Verbindung",
			"esES": "Conducto vigorizador",
			"esMX": "Conducto Vigorizante",
			"frFR": "Conduction revigorante",
			"itIT": "Conduzione Rinvigorente",
			"jaJP": "活力の感電",
			"koKR": "원기의 도관",
			"plPL": "Ożywcza Konduktywność",
			"ptBR": "Condutor Revigorante",
			"ruRU": "Бодрящий проводник",
			"zhCN": "激发导体"
},
		descriptionLocalized: {
			"deDE": "Bei der Absorption von Knisternde Energie erhaltet Ihr {4/8/12/16/20/24/28/32/36/40} Mana.\n\nTags: Knisternde Energie, Mana.",
			"esES": "Al absorber energía crepitante, obtienes {4/8/12/16/20/24/28/32/36/40} de maná.\n\nTags: Energía crepitante, Maná.",
			"esMX": "Tras absorber Energía Crepitante, obtienes {4/8/12/16/20/24/28/32/36/40} de maná.\n\nTags: Energía Crepitante, Maná.",
			"frFR": "Lorsque vous absorbez de l'énergie crépitante, vous gagnez {4/8/12/16/20/24/28/32/36/40} points de mana.\n\nTags: Énergie crépitante, Mana.",
			"itIT": "Dopo aver assorbito Energia Crepitante, ottieni {4/8/12/16/20/24/28/32/36/40} mana.\n\nTags: Energia Crepitante, Mana.",
			"jaJP": "〈帯び出す電気〉を獲得するとマナが{4/8/12/16/20/24/28/32/36/40}回復する。\n\nTags: 帯び出す電気, マナ.",
			"koKR": "짜릿한 에너지 흡수 시 마나가 {4/8/12/16/20/24/28/32/36/40} 회복됩니다.\n\nTags: 짜릿한 에너지, 마나.",
			"plPL": "Pochłonięcie Roziskrzonej Energii zapewnia ci {4/8/12/16/20/24/28/32/36/40} pkt. many.\n\nTags: Roziskrzona Energia, Mana.",
			"ptBR": "Ao absorver Energia Crepitante, você recebe {4/8/12/16/20/24/28/32/36/40} de mana.\n\nTags: Energia Crepitante, Mana.",
			"ruRU": "При сборе искрящиеся заряды энергии восполняют {4/8/12/16/20/24/28/32/36/40} ед. маны.\n\nTags: Искрящийся заряд энергии, Мана.",
			"zhCN": "吸收爆裂电花时,你会获得{4/8/12/16/20/24/28/32/36/40}点法力。\n\nTags: 爆裂电花, 法力."
},
		id: 134,
		maxPoints: 3,
		x: 4.47,
		y: 508.795
	},
	"Shocking Impact": {
		connections: [ "Static Discharge" ],
		description: `Every time you Stun an enemy, you deal {15/30/45/60/75/90/105/120/135/150}% Lightning damage to them.

Tags: Shock, Damage, Crowd Control, Lightning.`,
		nameLocalized: {
			"deDE": "Schockierende Wirkung",
			"esES": "Impacto electrocutador",
			"esMX": "Impacto Eléctrico",
			"frFR": "Impact électrique",
			"itIT": "Impatto Folgorante",
			"jaJP": "ショッキング・インパクト",
			"koKR": "감전의 충격",
			"plPL": "Porażające Zderzenie",
			"ptBR": "Impacto Elétrico",
			"ruRU": "Импульс шока",
			"zhCN": "电冲震击"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Ihr einen Gegner betäubt, fügt Ihr ihm {15/30/45/60/75/90/105/120/135/150}% Blitzschaden zu.\n\nTags: Schock, Schaden, Kontrollverlust, Blitz.",
			"esES": "Cada vez que aturdes a un enemigo, le infliges {15/30/45/60/75/90/105/120/135/150}% de daño de rayos.\n\nTags: Electrocución, Daño, Control de masas, Rayos.",
			"esMX": "Cada vez que aturdes a un enemigo, le infliges {15/30/45/60/75/90/105/120/135/150}% de daño de rayo.\n\nTags: Choque, Daño, Control de multitudes, Rayo.",
			"frFR": "Chaque fois que vous étourdissez une cible, vous lui infligez {15/30/45/60/75/90/105/120/135/150}% points de dégâts de foudre.\n\nTags: Foudre, Dégâts, Perte de contrôle.",
			"itIT": "Infliggi {15/30/45/60/75/90/105/120/135/150}% danni da fulmine a un nemico ogni volta che lo stordisci.\n\nTags: Folgore, Danni, Effetti debilitanti, Fulmine.",
			"jaJP": "敵1体をスタンさせるごとに、敵に与える電撃ダメージが{15/30/45/60/75/90/105/120/135/150}%増加する。\n\nTags: 電撃, ダメージ, 操作障害効果, 稲妻.",
			"koKR": "적을 기절시킬 때마다 적에게 {15/30/45/60/75/90/105/120/135/150}%의 번개 피해를 줍니다.\n\nTags: 감전, 피해, 군중 제어, 번개.",
			"plPL": "Za każdym razem, gdy ogłuszasz wroga, zadajesz mu {15/30/45/60/75/90/105/120/135/150}% obrażeń od Błyskawic.\n\nTags: Porażenie, Obrażenia, Ograniczanie Kontroli, Piorun.",
			"ptBR": "Sempre que você atordoar um inimigo, você causa {15/30/45/60/75/90/105/120/135/150}% de dano elétrico a ele.\n\nTags: Choque, Dano, Controle de Grupo, Eletricidade.",
			"ruRU": "Оглушая противника, вы наносите ему {15/30/45/60/75/90/105/120/135/150}% ед. урона от молнии.\n\nTags: Шок, Урон, Контроль, Молния.",
			"zhCN": "每次你击晕一名敌人,都会对其造成{15/30/45/60/75/90/105/120/135/150}%点闪电伤害。\n\nTags: 电冲, 伤害, 群控, 闪电."
},
		id: 95,
		maxPoints: 3,
		x: -280.938,
		y: 509
	},
	"Icy Veil": {
		connections: [ "Mastery", "Snap Freeze", "Cold Front" ],
		description: `Your Barriers have a +{5/10/15/20/25/30/35/40/45/50}% increased duration.

Tags: Barrier.`,
		nameLocalized: {
			"deDE": "Eisiger Schleier",
			"esES": "Velo helado",
			"esMX": "Velo Glacial",
			"frFR": "Voile de glace",
			"itIT": "Velo Gelido",
			"jaJP": "アイス・ヴェール",
			"koKR": "얼음 장막",
			"plPL": "Lodowy Całun",
			"ptBR": "Véu Gélido",
			"ruRU": "Ледяная завеса",
			"zhCN": "寒冰帷幕"
},
		descriptionLocalized: {
			"deDE": "Eure Barrieren halten +{5/10/15/20/25/30/35/40/45/50}% länger an.\n\nTags: Barriere.",
			"esES": "Tus barreras duran un +{5/10/15/20/25/30/35/40/45/50}% más.\n\nTags: Barrera.",
			"esMX": "Tus barreras duran un +{5/10/15/20/25/30/35/40/45/50}% más.\n\nTags: Barrera.",
			"frFR": "La durée de vos barrières est augmentée de +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Barrière.",
			"itIT": "La durata delle tue barriere aumenta del +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Barriera.",
			"jaJP": "自分の障壁の持続時間が+{5/10/15/20/25/30/35/40/45/50}%延長される。\n\nTags: 障壁.",
			"koKR": "보호막의 지속시간이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 보호막.",
			"plPL": "Czas działania twoich barier jest wydłużony o +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Bariera.",
			"ptBR": "Suas barreiras têm +{5/10/15/20/25/30/35/40/45/50}% de duração aumentada.\n\nTags: Barreira.",
			"ruRU": "Ваши барьеры действуют на x{5/10/15/20/25/30/35/40/45/50}% дольше.\n\nTags: Барьер.",
			"zhCN": "你的屏障持续时间延长+{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 屏障."
},
		id: 96,
		maxPoints: 3,
		x: -141.488,
		y: -351.513
	},
	"Snap Freeze": {
		connections: [ "Icy Veil" ],
		description: `Lucky Hit: Frost Skills have a {3/6/9/12/15/18/21/24/27/30}% chance to instantly Freeze.

Tags: Frozen, Lucky Hit, Crowd Control, Frost.`,
		nameLocalized: {
			"deDE": "Schockfrost",
			"esES": "Congelación instantánea",
			"esMX": "Congelación Quebradiza",
			"frFR": "Gel intense",
			"itIT": "Congelamento Rapido",
			"jaJP": "スナップ・フリーズ",
			"koKR": "순간 빙결",
			"plPL": "Nagły Mróz",
			"ptBR": "Congelamento Súbito",
			"ruRU": "Мгновенная заморозка",
			"zhCN": "急速冻结"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Frostfertigkeiten verfügen über eine Chance von {3/6/9/12/15/18/21/24/27/30}%, Gegner einzufrieren.\n\nTags: Eingefroren, Glückstreffer, Kontrollverlust, Frost.",
			"esES": "Golpe de suerte: Tus habilidades de escarcha tienen un {3/6/9/12/15/18/21/24/27/30}% de probabilidad de congelar al instante.\n\nTags: Congelación, Golpe de suerte, Control de masas, Escarcha.",
			"esMX": "Golpe afortunado: Las habilidades de Hielo tienen un {3/6/9/12/15/18/21/24/27/30}% de probabilidad de congelar instantáneamente.\n\nTags: Congelado, Golpe afortunado, Control de multitudes, Congelar.",
			"frFR": "Coup de chance: vos compétences de givre ont {3/6/9/12/15/18/21/24/27/30}% de chances de geler instantanément les adversaires.\n\nTags: Gel, Coup de chance, Perte de contrôle, Givre.",
			"itIT": "Colpo fortunato: le abilità di freddo hanno il {3/6/9/12/15/18/21/24/27/30}% di probabilità di congelare istantaneamente.\n\nTags: Congelamento, Colpo fortunato, Effetti debilitanti, Gelo.",
			"jaJP": "幸運の一撃: 冷気スキルが、{3/6/9/12/15/18/21/24/27/30}%の確率で即座に対象を凍結させる。\n\nTags: 凍結, 幸運の一撃, 操作障害効果, 寒気.",
			"koKR": "행운의 적중: 서리 기술이 {3/6/9/12/15/18/21/24/27/30}% 확률로 대상을 즉시 빙결시킵니다.\n\nTags: 빙결, 행운의 적중, 군중 제어, 서리.",
			"plPL": "Szczęśliwy traf: Twoje umiejętności Lodu mają {3/6/9/12/15/18/21/24/27/30}% szans na natychmiastowe zamrożenie celu.\n\nTags: Zamrażanie, Szczęśliwy Traf, Ograniczanie Kontroli, Mróz.",
			"ptBR": "Golpe de Sorte: Habilidades de Geleira têm {3/6/9/12/15/18/21/24/27/30}% de chance de congelar instantaneamente.\n\nTags: Congelado, Golpe de Sorte, Controle de Grupo, Geleira.",
			"ruRU": "Удачный удар: умения мороза с вероятностью до {3/6/9/12/15/18/21/24/27/30}% мгновенно замораживают цель.\n\nTags: Заморозка, Удачный удар, Контроль, Мороз.",
			"zhCN": "幸运一击:冰霜技能有{3/6/9/12/15/18/21/24/27/30}%几率立即冻结敌人。\n\nTags: 冻结, 幸运一击, 群控, 寒霜."
},
		id: 135,
		maxPoints: 3,
		x: 2.725,
		y: -507.73
	},
	"Cold Front": {
		connections: [ "Icy Veil" ],
		description: `While you have a Barrier active, you apply x{8/16/24/32/40/48/56/64/72/80}% more Chill.

Tags: Barrier, Chill, Crowd Control.`,
		nameLocalized: {
			"deDE": "Kaltfront",
			"esES": "Frente frío",
			"esMX": "Frente Frío",
			"frFR": "Coup de froid",
			"itIT": "Fronte Gelido",
			"jaJP": "コールド・フロント",
			"koKR": "한랭 전선",
			"plPL": "Front Chłodu",
			"ptBR": "Frente Fria",
			"ruRU": "Холодный фронт",
			"zhCN": "冰冷之锋"
},
		descriptionLocalized: {
			"deDE": "Solange eine Barriere aktiv ist, belegt Ihr Gegner mit x{8/16/24/32/40/48/56/64/72/80}% mehr Unterkühlung.\n\nTags: Barriere, Unterkühlen, Kontrollverlust.",
			"esES": "Cuando tienes una barrera activa, aplicas un x{8/16/24/32/40/48/56/64/72/80}% más de helada.\n\nTags: Barrera, Helada, Control de masas.",
			"esMX": "Mientras tengas una barrera activa, aplicarás un x{8/16/24/32/40/48/56/64/72/80}% de helamiento adicional.\n\nTags: Barrera, Helar, Control de multitudes.",
			"frFR": "Tant que vous avez une barrière active, vous appliquez x{8/16/24/32/40/48/56/64/72/80}% d'effets glaçants supplémentaires.\n\nTags: Barrière, Glace, Perte de contrôle.",
			"itIT": "Quando hai una barriera attiva, infliggi il x{8/16/24/32/40/48/56/64/72/80}% aggiuntivo di raggelamento.\n\nTags: Barriera, Raggelamento, Effetti debilitanti.",
			"jaJP": "障壁が1つ発動している間、与える冷気効果がx{8/16/24/32/40/48/56/64/72/80}%増加する。\n\nTags: 障壁, 冷気, 操作障害効果.",
			"koKR": "보호막이 활성화되어 있는 동안, 오한을 추가로 x{8/16/24/32/40/48/56/64/72/80}% 적용합니다.\n\nTags: 보호막, 오한, 군중 제어.",
			"plPL": "Kiedy masz aktywną barierę, powodujesz o x{8/16/24/32/40/48/56/64/72/80}% więcej wyziębienia.\n\nTags: Bariera, Wyziębienie, Ograniczanie Kontroli.",
			"ptBR": "Enquanto tiver uma barreira ativa, você aplica {8/16/24/32/40/48/56/64/72/80}% a mais de gelidez.\n\nTags: Barreira, Gelidez, Controle de Grupo.",
			"ruRU": "Пока действует барьер, ваши эффекты окоченения усиливаются на {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Барьер, Окоченение, Контроль.",
			"zhCN": "当你有激活的屏障时,你施加的冻伤提高x{8/16/24/32/40/48/56/64/72/80}%。\n\nTags: 屏障, 冻伤, 群控."
},
		id: 98,
		maxPoints: 3,
		x: -276.711,
		y: -506.953
	},
	"Firewall": {
		connections: [ "Mastery", "Enhanced Firewall" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Create a wall of flames that Burns enemies for {160/176/192/208/224/240/256/272/288/304}% damage over 8 seconds.

Tags: Mastery, Pyromancy, Damage, Burn, Mana.

— Enchantment Effect —
Each time an enemy takes Burning damage, there's a 5% chance to spawn 2 Firewalls underneath them for 3 seconds.`,
		nameLocalized: {
			"deDE": "Feuerwand",
			"esES": "Muro de fuego",
			"esMX": "Muro de Fuego",
			"frFR": "Mur de feu",
			"itIT": "Muro di Fuoco",
			"jaJP": "炎の壁",
			"koKR": "화염벽",
			"plPL": "Ściana Ognia",
			"ptBR": "Parede de Chamas",
			"ruRU": "Стена огня",
			"zhCN": "火墙"
},
		descriptionLocalized: {
			"deDE": "Manakosten: {#}\nGlückstrefferchance: {#}%\nErzeugt eine Feuerwand, die Gegner im Verlauf von 8 Sek. verbrennt und ihnen dabei {160/176/192/208/224/240/256/272/288/304}% Schaden zufügt.\n\nTags: Beherrschung, Pyromanie, Schaden, Verbrennung, Mana.\n\n— Enchantment Effect —\nJedes Mal, wenn ein Gegner Verbrennungsschaden erleidet, besteht eine Chance von 5%, dass 3 Sek. lang 2 Feuerwände unter ihm erscheinen.",
			"esES": "Coste de maná: {#}\nProbabilidad de golpe de suerte: {#}%\nCreas un muro de llamas que inflige {160/176/192/208/224/240/256/272/288/304}% de daño de quemadura a los enemigos durante 8 s.\n\nTags: Maestría, Piromancia, Daño, Quemadura, Maná.\n\n— Enchantment Effect —\nCada vez que un enemigo sufre daño de quemadura, hay un 5% de probabilidad de que aparezcan 2 Muros de fuego debajo de él durante 3 s.",
			"esMX": "Costo de maná: {#}\nProbabilidad de golpe afortunado: {#}%\nCrea un muro de llamas que infligen {160/176/192/208/224/240/256/272/288/304}% de daño de quemadura a los enemigos durante 8 segundos.\n\nTags: Dominio, Piromancia, Daño, Quemadura, Maná.\n\n— Enchantment Effect —\nCada vez que un enemigo recibe daño de quemadura, tiene un 5% de probabilidad de generar 2 Muros de Fuego bajo sus pies durante 3 segundos.",
			"frFR": "Coût en mana: {#}\nChances de coup de chance: {#}%\nVous créez un mur de flammes qui brûle les adversaires en infligeant {160/176/192/208/224/240/256/272/288/304}% points de dégâts en 8 s.\n\nTags: Maîtrise, Pyromancie, Dégâts, Brûlure, Mana.\n\n— Enchantment Effect —\nChaque fois qu'une cible subit des dégâts de brûlure, il y a 5% de chances que 2 murs de feu apparaissent sous celle-ci pendant 3 s.",
			"itIT": "Costo in mana: {#}\nProbabilità di colpo fortunato: {#}%\nCrea un muro di fiamme che brucia i nemici infliggendo {160/176/192/208/224/240/256/272/288/304}% danni in 8 s.\n\nTags: Dominio, Piromanzia, Danni, Bruciatura, Mana.\n\n— Enchantment Effect —\nOgni volta che un nemico subisce danni da fiamme, c'è il 5% di probabilità di generare 2 Muri di Fuoco sotto di lui per 3 s.",
			"jaJP": "マナ消費量: {#}\n幸運の一撃発生率: {#}%\n炎の壁を作りだし、敵を8秒間かけて炎上させて{160/176/192/208/224/240/256/272/288/304}%のダメージを与える。\n\nTags: 達人, 火術, ダメージ, 炎上, マナ.\n\n— Enchantment Effect —\n敵が炎上ダメージを受けるたびに、5%の確率でその敵の足元に3秒間にわたり2枚の〈炎の壁〉を発生させる。",
			"koKR": "소모: 마나 {#}\n행운의 적중 확률: {#}%\n불꽃 벽을 생성하고 적을 불태워 8초에 걸쳐 {160/176/192/208/224/240/256/272/288/304}%의 피해를 줍니다.\n\nTags: 숙련, 방화, 피해, 불태우기, 마나.\n\n— Enchantment Effect —\n적이 연소 피해를 받을 때마다 5% 확률로 해당 적의 아래에 3초 동안 화염벽을 2개 생성합니다.",
			"plPL": "Koszt: {#} pkt. many\nSzansa na szczęśliwy traf: {#}%\nTworzysz ścianę płomieni, która podpala wrogów, zadając im {160/176/192/208/224/240/256/272/288/304}% pkt. obrażeń w ciągu 8 sek.\n\nTags: Mistrzostwo, Piromancja, Obrażenia, Podpalenie, Mana.\n\n— Enchantment Effect —\nZa każdym razem, gdy wróg otrzymuje obrażenia od podpalenia, istnieje 5% szans na utworzenie pod nim 2 Ścian Ognia na 3 sek.",
			"ptBR": "Custo de mana: {#}\nChance de Golpe de Sorte:{#}%\nCria uma parede de chamas que queima inimigos por {160/176/192/208/224/240/256/272/288/304}% ao longo de 8 segundos.\n\nTags: Maestria, Piromancia, Dano, Queimadura, Mana.\n\n— Enchantment Effect —\nSempre que um inimigo recebe dano flamejante, há 5% de chance de gerar 2 Paredes de Chamas embaixo dele por 3 segundos.",
			"ruRU": "Затраты маны: {#} ед.\nВероятность удачного удара: {#}%.\nВы создаете стену огня, наносящую противникам {160/176/192/208/224/240/256/272/288/304}% ед. урона от огня за 8 сек.\n\nTags: Искусность, Пиромантия, Урон, Горение, Мана.\n\n— Enchantment Effect —\nКаждый раз, когда противник получает урон от горения, под ним с вероятностью 5% возникают 2 стены огня, существующие 3 сек.",
			"zhCN": "法力消耗:{#}\n幸运一击几率:{#}%\n制造一道烈焰墙使敌人燃烧,在8秒内造成{160/176/192/208/224/240/256/272/288/304}%点伤害。\n\nTags: 掌控, 爆焰, 伤害, 燃烧, 法力.\n\n— Enchantment Effect —\n每次敌人受到燃烧伤害时,都有5%几率在其脚下召唤2道火墙,持续3秒。"
},
		id: 99,
		maxPoints: 5,
		values: [ "30", "40" ],
		x: 592.435,
		y: 224.3
	},
	"Enhanced Firewall": {
		baseSkill: "Firewall",
		connections: [ "Firewall", "Wizard's Firewall", "Mage's Firewall" ],
		description: `Enemies take x25% increased Burning damage from you while standing in Firewall.

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		nameLocalized: {
			"deDE": "Verbesserte Feuerwand",
			"esES": "Muro de fuego mejorado",
			"esMX": "Muro de Fuego Potenciado",
			"frFR": "Mur de feu renforcé",
			"itIT": "Muro di Fuoco Rinforzato",
			"jaJP": "炎の壁(強化版)",
			"koKR": "강화된 화염벽",
			"plPL": "Wzmocniona Ściana Ognia",
			"ptBR": "Parede de Chamas Aperfeiçoada",
			"ruRU": "Усиленная стена огня",
			"zhCN": "强化火墙"
},
		descriptionLocalized: {
			"deDE": "Gegner erleiden x25% mehr Verbrennungsschaden durch Euch, während sie im Wirkungsbereich der Feuerwand stehen.\n\nTags: Beherrschung, Pyromanie, Schaden, Verbrennung, Mana.",
			"esES": "Infliges un x25% más de daño de quemadura a los enemigos cuando están en el Muro de fuego.\n\nTags: Maestría, Piromancia, Daño, Quemadura, Maná.",
			"esMX": "Los enemigos reciben un x25% más de daño de quemadura de ti mientras permanecen en Muro de Fuego.\n\nTags: Dominio, Piromancia, Daño, Quemadura, Maná.",
			"frFR": "Les cibles subissent x25% de dégâts de brûlure supplémentaires de votre part tant qu'elles se tiennent dans un mur de feu.\n\nTags: Maîtrise, Pyromancie, Dégâts, Brûlure, Mana.",
			"itIT": "I nemici che restano nel Muro di Fuoco subiscono il x25% di danni da fiamme aggiuntivi da te.\n\nTags: Dominio, Piromanzia, Danni, Bruciatura, Mana.",
			"jaJP": "〈炎の壁〉の中にいる敵に対し、自分が与える炎上ダメージがx25%増加する。\n\nTags: 達人, 火術, ダメージ, 炎上, マナ.",
			"koKR": "화염벽 안에 서 있는 적이 자신에게 받는 연소 피해가 x25% 증가합니다.\n\nTags: 숙련, 방화, 피해, 불태우기, 마나.",
			"plPL": "Wrogowie stojący w Ścianie Ognia otrzymują zwiększone o x25% obrażenia od podpalenia ze wszystkich źródeł.\n\nTags: Mistrzostwo, Piromancja, Obrażenia, Podpalenie, Mana.",
			"ptBR": "Inimigos recebem 25% de dano flamejante aumentado de você enquanto estiverem na Parede de Chamas.\n\nTags: Maestria, Piromancia, Dano, Queimadura, Mana.",
			"ruRU": "Противники, находящиеся в области действия \"Стены огня\", получают от вас на x25% больше урона от горения.\n\nTags: Искусность, Пиромантия, Урон, Горение, Мана.",
			"zhCN": "你对站在火墙内的敌人造成的火焰伤害提高x25%。\n\nTags: 掌控, 爆焰, 伤害, 燃烧, 法力."
},
		id: 100,
		maxPoints: 1,
		x: 905.955,
		y: 347.945
	},
	"Wizard's Firewall": {
		baseSkill: "Firewall",
		connections: [ "Enhanced Firewall" ],
		description: `You gain x5% increased Mana Regeneration per active Firewall, up to x25%.

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		nameLocalized: {
			"deDE": "Feuerwand des Zauberers",
			"esES": "Muro de fuego del mago",
			"esMX": "Muro de Fuego de Arcanista",
			"frFR": "Mur de feu de sorcellerie",
			"itIT": "Muro di Fuoco del Mago",
			"jaJP": "炎の壁(ウィザード)",
			"koKR": "마법사의 화염벽",
			"plPL": "Ściana Ognia Czarownika",
			"ptBR": "Parede de Chamas de Arcanista",
			"ruRU": "Стена огня чародея",
			"zhCN": "巫师火墙"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet x5% mehr Manaregeneration pro Feuerwand, bis zu maximal x25%.\n\nTags: Beherrschung, Pyromanie, Schaden, Verbrennung, Mana.",
			"esES": "Obtienes un x5% más de regeneración de maná por cada Muro de fuego activo, hasta un máximo del x25%.\n\nTags: Maestría, Piromancia, Daño, Quemadura, Maná.",
			"esMX": "Obtienes un x5% más de regeneración de maná por Muro de Fuego activo, hasta un x25%.\n\nTags: Dominio, Piromancia, Daño, Quemadura, Maná.",
			"frFR": "Votre régénération de mana est augmentée de x5% pour chaque mur de feu actif, jusqu'à un maximum de x25%.\n\nTags: Maîtrise, Pyromancie, Dégâts, Brûlure, Mana.",
			"itIT": "La rigenerazione di mana aumenta del x5% per ogni Muro di Fuoco attivo, fino a un massimo del x25%.\n\nTags: Dominio, Piromanzia, Danni, Bruciatura, Mana.",
			"jaJP": "発動中の〈炎の壁〉1つごとに、マナ生成量がx5%増加する。増加量は最大x25%。\n\nTags: 達人, 火術, ダメージ, 炎上, マナ.",
			"koKR": "활성화된 화염벽 하나당 마나 재생량이 x5%만큼, 최대 x25%까지 증가합니다.\n\nTags: 숙련, 방화, 피해, 불태우기, 마나.",
			"plPL": "Zyskujesz premię x5% do regeneracji many za każdą aktywną Ścianę Ognia, maksymalnie do x25%.\n\nTags: Mistrzostwo, Piromancja, Obrażenia, Podpalenie, Mana.",
			"ptBR": "Você recebe 5% de regeneração de mana aumentada por Parede de Chamas ativa, até 25%.\n\nTags: Maestria, Piromancia, Dano, Queimadura, Mana.",
			"ruRU": "Скорость восстановления маны повышается на x5% за каждую активную \"Стену огня\" вплоть до x25%.\n\nTags: Искусность, Пиромантия, Урон, Горение, Мана.",
			"zhCN": "每道激活的火墙都会使你的法力回复速度提高x5%,最多提高x25%。\n\nTags: 掌控, 爆焰, 伤害, 燃烧, 法力."
},
		id: 101,
		maxPoints: 1,
		x: 998.24,
		y: 479.99
	},
	"Mage's Firewall": {
		baseSkill: "Firewall",
		connections: [ "Enhanced Firewall" ],
		description: `Enemies continue Burning for 3 seconds after leaving Firewall.

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		nameLocalized: {
			"deDE": "Feuerwand des Magiers",
			"esES": "Muro de fuego del hechicero",
			"esMX": "Muro de Fuego de Mago",
			"frFR": "Mur de feu de magie",
			"itIT": "Muro di Fuoco dell'Arcanista",
			"jaJP": "炎の壁(メイジ)",
			"koKR": "마법학자의 화염벽",
			"plPL": "Ściana Ognia Maga",
			"ptBR": "Parede de Chamas de Mago",
			"ruRU": "Стена огня мага",
			"zhCN": "法师火墙"
},
		descriptionLocalized: {
			"deDE": "Gegner brennen noch 3 Sek. lang, nachdem sie den Wirkungsbereich der Feuerwand verlassen.\n\nTags: Beherrschung, Pyromanie, Schaden, Verbrennung, Mana.",
			"esES": "Los enemigos siguen quemándose durante 3 s más tras salir del Muro de fuego.\n\nTags: Maestría, Piromancia, Daño, Quemadura, Maná.",
			"esMX": "Los enemigos continúan quemándose durante 3 segundos después de salir del Muro de Fuego.\n\nTags: Dominio, Piromancia, Daño, Quemadura, Maná.",
			"frFR": "Les cibles continuent de brûler pendant 3 s après s'être éloignées du mur de feu.\n\nTags: Maîtrise, Pyromancie, Dégâts, Brûlure, Mana.",
			"itIT": "I nemici restano in fiamme per 3 s dopo che sono usciti dal Muro di Fuoco.\n\nTags: Dominio, Piromanzia, Danni, Bruciatura, Mana.",
			"jaJP": "敵が〈炎の壁〉を離れた後も3秒間、炎上し続ける。\n\nTags: 達人, 火術, ダメージ, 炎上, マナ.",
			"koKR": "적이 화염벽을 벗어난 후에도 3초 동안 계속 불탑니다.\n\nTags: 숙련, 방화, 피해, 불태우기, 마나.",
			"plPL": "Wrogowie są podpaleni przez 3 sek. po opuszczeniu Ściany Ognia.\n\nTags: Mistrzostwo, Piromancja, Obrażenia, Podpalenie, Mana.",
			"ptBR": "Os inimigos continuam queimando por 3 segundos depois de saírem da Parede de Chamas.\n\nTags: Maestria, Piromancia, Dano, Queimadura, Mana.",
			"ruRU": "Противники, покинувшие область действия \"Стены огня\", продолжают гореть еще в течение 3 сек.\n\nTags: Искусность, Пиромантия, Урон, Горение, Мана.",
			"zhCN": "敌人离开火墙后会继续燃烧3秒。\n\nTags: 掌控, 爆焰, 伤害, 燃烧, 法力."
},
		id: 102,
		maxPoints: 1,
		x: 1170.415,
		y: 343.18
	},
};

sorcererData["Ultimate"] = {
	"Inferno": {
		connections: [ "Ultimate", "Prime Inferno" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Summon a fiery serpent that continually constricts the target area, Burning enemies for 295% damage over 8 seconds.

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		nameLocalized: {
			"deDE": "Inferno",
			"esES": "Averno",
			"esMX": "Infierno",
			"frFR": "Inferno",
			"itIT": "Inferno",
			"jaJP": "業火",
			"koKR": "지옥불",
			"plPL": "Inferno",
			"ptBR": "Inferno",
			"ruRU": "Инферно",
			"zhCN": "炼狱烈焰"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#}\nGlückstrefferchance: {#}%\nBeschwört eine feurige Schlange, die den Zielbereich kontinuierlich einengt und Gegnern im Verlauf von 8 Sek. 295% Schaden zufügt.\n\nTags: Ultimativ, Pyromanie, Schaden, Verbrennung, Abklingzeit.",
			"esES": "Tiempo de reutilización: {#}\nProbabilidad de golpe de suerte: {#}%\nInvocas una sierpe flamígera que constriñe continuamente la zona seleccionada para infligir 295% de daño de quemadura a los enemigos durante 8 s.\n\nTags: Definitiva, Piromancia, Daño, Quemadura, Tiempo de reutilización.",
			"esMX": "Recuperación: {#}\nProbabilidad de golpe afortunado: {#}%\nInvocas a una serpiente ardiente que restringe continuamente el área objetivo y quema a los enemigos para infligirles 295% de daño durante 8 segundos.\n\nTags: Máxima, Piromancia, Daño, Quemadura, Recuperación.",
			"frFR": "Temps de recharge: {#}\nChances de coup de chance: {#}%\nVous invoquez un serpent embrasé qui enserre la zone ciblée en continu, ce qui brûle les cibles et leur inflige 295% de dégâts en 8 s.\n\nTags: Ultime, Pyromancie, Dégâts, Brûlure, Temps de recharge.",
			"itIT": "Tempo di recupero: {#}\nProbabilità di colpo fortunato: {#}%\nEvoca un serpente fiammeggiante che restringe continuamente l'area bersaglio, mandando in fiamme i nemici e infliggendo 295% danni in 8 s.\n\nTags: Ultra, Piromanzia, Danni, Bruciatura, Tempo di recupero.",
			"jaJP": "クールダウン: {#}\n幸運の一撃発生率: {#}%\n標的エリアを持続的に締め付ける炎の大蛇を召喚して敵を炎上させ、8秒間かけて295%のダメージを与える。\n\nTags: 奥義, 火術, ダメージ, 炎上, クールダウン.",
			"koKR": "재사용 대기시간: {#}\n행운의 적중 확률: {#}%\n불의 뱀을 소환합니다. 불의 뱀은 대상 지역을 계속 옥죄며 적들을 불태워 8초에 걸쳐 295%의 피해를 줍니다.\n\nTags: 궁극기, 방화, 피해, 불태우기, 재사용 대기시간.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nPrzywołujesz ognistego węża, który zaciska się wokół wskazanego obszaru oraz podpala wrogów, zadając im 295% pkt. obrażeń w ciągu 8 sek.\n\nTags: Specjalne, Piromancja, Obrażenia, Podpalenie, Odnowienie.",
			"ptBR": "Recarga: {#}\nChance de Golpe de Sorte: {#}%\nEvoca uma serpente de fogo que restringe continuamente a área selecionada, queimando os inimigos e causando 295% de dano ao longo de 8 segundos.\n\nTags: Suprema, Piromancia, Dano, Queimadura, Recarga.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%\nПризывает огненного змея, который обвивает указанную область, обжигая врагов и нанося им 295% ед. урона за 8 сек.\n\nTags: Мощное умение, Пиромантия, Урон, Горение, Время восстановления.",
			"zhCN": "冷却时间:{#}\n幸运一击几率:{#}%\n召唤一条不断向目标区域收紧的火蛇,在8秒内燃烧敌人,造成295%点伤害。\n\nTags: 终极技能, 爆焰, 伤害, 燃烧, 冷却时间."
},
		id: 103,
		maxPoints: 1,
		values: [ "45", "38" ],
		x: -526.72,
		y: -71.235
	},
	"Prime Inferno": {
		baseSkill: "Inferno",
		connections: [ "Inferno", "Supreme Inferno" ],
		description: `Inferno repeatedly Pulls enemies to its center.

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		nameLocalized: {
			"deDE": "Oberstes Inferno",
			"esES": "Averno mayor",
			"esMX": "Infierno Supremo",
			"frFR": "Inferno primordial",
			"itIT": "Inferno Pregiato",
			"jaJP": "インフェルノ(上級)",
			"koKR": "극상의 지옥불",
			"plPL": "Pierwotne Inferno",
			"ptBR": "Inferno Primordial",
			"ruRU": "Первородный инферно",
			"zhCN": "至尊炼狱烈焰"
},
		descriptionLocalized: {
			"deDE": "Inferno zieht Gegner wiederholt in seine Mitte.\n\nTags: Ultimativ, Pyromanie, Schaden, Verbrennung, Abklingzeit.",
			"esES": "Averno atrae repetidamente a los enemigos hacia su centro.\n\nTags: Definitiva, Piromancia, Daño, Quemadura, Tiempo de reutilización.",
			"esMX": "Infierno atrae a los enemigos hacia su centro repetidamente.\n\nTags: Máxima, Piromancia, Daño, Quemadura, Recuperación.",
			"frFR": "Inferno attire régulièrement les adversaires vers son centre.\n\nTags: Ultime, Pyromancie, Dégâts, Brûlure, Temps de recharge.",
			"itIT": "Inferno attira ripetutamente i nemici al centro del suo raggio d'azione.\n\nTags: Ultra, Piromanzia, Danni, Bruciatura, Tempo di recupero.",
			"jaJP": "〈インフェルノ〉が敵を繰り返し中央に引き寄せる。\n\nTags: 奥義, 火術, ダメージ, 炎上, クールダウン.",
			"koKR": "지옥불이 반복해서 적을 중앙으로 끌어당깁니다.\n\nTags: 궁극기, 방화, 피해, 불태우기, 재사용 대기시간.",
			"plPL": "Inferno wielokrotnie przyciąga wrogów do środka.\n\nTags: Specjalne, Piromancja, Obrażenia, Podpalenie, Odnowienie.",
			"ptBR": "Inferno puxa os inimigos para o centro várias vezes.\n\nTags: Suprema, Piromancia, Dano, Queimadura, Recarga.",
			"ruRU": "\"Инферно\" время от времени притягивает противников в центр области поражения.\n\nTags: Мощное умение, Пиромантия, Урон, Горение, Время восстановления.",
			"zhCN": "炼狱烈焰会不断将敌人牵引向其中心。\n\nTags: 终极技能, 爆焰, 伤害, 燃烧, 冷却时间."
},
		id: 104,
		maxPoints: 1,
		x: -866.555,
		y: -183.635
	},
	"Supreme Inferno": {
		baseSkill: "Inferno",
		connections: [ "Prime Inferno" ],
		description: `While Inferno is active, your Pyromancy Skills cost no Mana.

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegenes Inferno",
			"esES": "Averno supremo",
			"esMX": "Infierno Superior",
			"frFR": "Inferno suprême",
			"itIT": "Inferno Supremo",
			"jaJP": "インフェルノ(高級)",
			"koKR": "최고의 지옥불",
			"plPL": "Najwyższe Inferno",
			"ptBR": "Inferno Supremo",
			"ruRU": "Неотвратимый инферно",
			"zhCN": "至极炼狱烈焰"
},
		descriptionLocalized: {
			"deDE": "Während Inferno aktiv ist, kosten Eure Pyromaniefertigkeiten kein Mana.\n\nTags: Ultimativ, Pyromanie, Schaden, Verbrennung, Abklingzeit.",
			"esES": "Mientras dura Averno, tus habilidades de piromancia no cuestan maná.\n\nTags: Definitiva, Piromancia, Daño, Quemadura, Tiempo de reutilización.",
			"esMX": "Mientras Infierno está activa, tus habilidades de Piromancia no cuestan maná.\n\nTags: Máxima, Piromancia, Daño, Quemadura, Recuperación.",
			"frFR": "Tant qu'Inferno est actif, vos compétences de pyromancie ne coûtent pas de mana.\n\nTags: Ultime, Pyromancie, Dégâts, Brûlure, Temps de recharge.",
			"itIT": "Mentre Inferno è attivo, il costo in mana delle tue abilità di piromanzia si azzera.\n\nTags: Ultra, Piromanzia, Danni, Bruciatura, Tempo di recupero.",
			"jaJP": "〈インフェルノ〉の発動中、火術スキルがマナを消費しない。\n\nTags: 奥義, 火術, ダメージ, 炎上, クールダウン.",
			"koKR": "지옥불이 활성화되어 있는 동안 방화 기술이 마나를 소모하지 않습니다.\n\nTags: 궁극기, 방화, 피해, 불태우기, 재사용 대기시간.",
			"plPL": "Kiedy Inferno jest aktywne, twoje umiejętności Piromancji nie zużywają many.\n\nTags: Specjalne, Piromancja, Obrażenia, Podpalenie, Odnowienie.",
			"ptBR": "Enquanto Inferno está ativo, suas habilidades de Piromancia não custam mana.\n\nTags: Suprema, Piromancia, Dano, Queimadura, Recarga.",
			"ruRU": "Пока действует \"Инферно\", умения категории \"Пиромантия\" не требуют затрат маны.\n\nTags: Мощное умение, Пиромантия, Урон, Горение, Время восстановления.",
			"zhCN": "炼狱烈焰激活期间,你的爆焰技能不消耗法力。\n\nTags: 终极技能, 爆焰, 伤害, 燃烧, 冷却时间."
},
		id: 105,
		maxPoints: 1,
		x: -1163.615,
		y: -183.18
	},
	"Unstable Currents": {
		connections: [ "Prime Unstable Currents", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lightning surges within you for 10 seconds. Whenever you cast a Shock Skill, a random Core, Conjuration, or Mastery Shock Skill is also cast.

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		nameLocalized: {
			"deDE": "Instabile Strömung",
			"esES": "Corrientes inestables",
			"esMX": "Corrientes Inestables",
			"frFR": "Courant instable",
			"itIT": "Correnti Instabili",
			"jaJP": "不安定電流",
			"koKR": "불안정한 전류",
			"plPL": "Niestabilne Prądy",
			"ptBR": "Correntes Instáveis",
			"ruRU": "Бурный поток",
			"zhCN": "不稳电流"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#}\nBlitze durchströmen Euch 10 Sek. lang. Jedes Mal, wenn Ihr eine Schockfertigkeit wirkt, wird eine weitere zufällige Basis-, Beschwörungs-, Beherrschungs- oder Schockfertigkeit gewirkt.\n\nTags: Ultimativ, Schock, Schaden, Blitz, Abklingzeit.",
			"esES": "Tiempo de reutilización: {#}\nTu cuerpo se carga de rayos durante 10 s. Cada vez que lanzas una habilidad de electrocución, se lanza otra habilidad de electrocución básica, de evocación o de dominio al azar.\n\nTags: Definitiva, Electrocución, Daño, Rayos, Tiempo de reutilización.",
			"esMX": "Recuperación: {#}\nTe circulan rayos por el cuerpo durante 10 segundos. Cuando lanzas una habilidad de Rayo, también lanzas otra habilidad principal, de Conjuración o de Dominio de Rayo.\n\nTags: Máxima, Choque, Daño, Rayo, Recuperación.",
			"frFR": "Temps de recharge: {#}\nLa foudre vous habite pendant 10 s. Chaque fois que vous lancez une compétence de foudre, une autre compétence principale, de conjuration ou de maîtrise de foudre aléatoire est également lancée.\n\nTags: Ultime, Foudre, Dégâts, Temps de recharge.",
			"itIT": "Tempo di recupero: {#}\nIl fulmine cresce dentro di te per 10 s. Quando lanci un'abilità di fulmine, lanci anche un'altra abilità primaria, d'invocazione o di dominio della folgore.\n\nTags: Ultra, Folgore, Danni, Fulmine, Tempo di recupero.",
			"jaJP": "クールダウン: {#}秒\n10秒間にわたり、体内で稲妻が急発生する。ショックスキルを使用すると、ランダムでコア、召喚、達人、または ショックスキルが発動する。\n\nTags: 奥義, 電撃, ダメージ, 稲妻, クールダウン.",
			"koKR": "재사용 대기시간: {#}\n10초 동안 몸 안에 번개가 몰아칩니다. 충격 기술을 시전할 때마다, 무작위 핵심 또는 구현 또는 숙련 충격 기술이 시전됩니다.\n\nTags: 궁극기, 감전, 피해, 번개, 재사용 대기시간.",
			"plPL": "Czas odnowienia: {#} sek.\nWyzwalasz w sobie moc błyskawic na 10 sek. Za każdym razem, gdy używasz umiejętności Porażenia, towarzyszy jej inna losowa umiejętność Główna, Przyzywania, Mistrzostwa lub Porażenia.\n\nTags: Specjalne, Porażenie, Obrażenia, Piorun, Odnowienie.",
			"ptBR": "Recarga: {#}\nA eletricidade aumenta em você por 10 segundos. Sempre que você lançar uma habilidade de Eletricidade, uma habilidade aleatória de Eletricidade também é lançada, podendo ser Principal,Conjuração ou Maestria.\n\nTags: Suprema, Choque, Dano, Eletricidade, Recarga.",
			"ruRU": "Время восстановления: {#} сек.\nВас на 10 сек. наполняет сила молнии. Когда вы применяете умение шока, автоматически срабатывает другое случайный умение категории \"Колдовство\", \"Искусность\" или \"Шок\".\n\nTags: Мощное умение, Шок, Урон, Молния, Время восстановления.",
			"zhCN": "冷却时间:{#}\n闪电在你体内涌动,持续10秒。每当你施放电冲技能时,也会随机施放一个核心、召唤魔法或精通电冲技能。\n\nTags: 终极技能, 电冲, 伤害, 闪电, 冷却时间."
},
		id: 106,
		maxPoints: 1,
		values: [ "70.0" ],
		x: -347.8,
		y: 279.81
	},
	"Prime Unstable Currents": {
		baseSkill: "Unstable Currents",
		connections: [ "Unstable Currents", "Supreme Unstable Currents" ],
		description: `Unstable Currents increases your Attack Speed by +25% while active.

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		nameLocalized: {
			"deDE": "Primäre Instabile Strömung",
			"esES": "Corrientes inestables mayores",
			"esMX": "Corrientes Inestables Supremas",
			"frFR": "Courant instable primordial",
			"itIT": "Correnti Instabili Pregiate",
			"jaJP": "不安定電流(上級)",
			"koKR": "극상의 불안정한 전류",
			"plPL": "Większe Niestabilne Prądy",
			"ptBR": "Correntes Instáveis Primordiais",
			"ruRU": "Первородный бурный поток",
			"zhCN": "至尊不稳电流"
},
		descriptionLocalized: {
			"deDE": "Instabile Strömung erhöht Eure Angriffsgeschwindigkeit um +25%, solange die Fertigkeit aktiv ist.\n\nTags: Ultimativ, Schock, Schaden, Blitz, Abklingzeit.",
			"esES": "Corrientes inestables aumenta un +25% tu velocidad de ataque mientras dura.\n\nTags: Definitiva, Electrocución, Daño, Rayos, Tiempo de reutilización.",
			"esMX": "Corrientes Inestables aumenta tu velocidad de ataque un +25% mientras está activa.\n\nTags: Máxima, Choque, Daño, Rayo, Recuperación.",
			"frFR": "Courant instable augmente votre vitesse d'attaque de +25% tant qu'il est actif.\n\nTags: Ultime, Foudre, Dégâts, Temps de recharge.",
			"itIT": "Correnti Instabili aumenta la velocità d'attacco del +25% quando è attiva.\n\nTags: Ultra, Folgore, Danni, Fulmine, Tempo di recupero.",
			"jaJP": "〈不安定電流〉発動中、自分の攻撃速度が+25%上昇する。\n\nTags: 奥義, 電撃, ダメージ, 稲妻, クールダウン.",
			"koKR": "불안정한 전류가 활성화되어 있는 동안 자신의 공격 속도가 +25% 증가합니다.\n\nTags: 궁극기, 감전, 피해, 번개, 재사용 대기시간.",
			"plPL": "Kiedy Niestabilne Prądy są aktywne, twoja szybkość ataku jest zwiększona o +25%.\n\nTags: Specjalne, Porażenie, Obrażenia, Piorun, Odnowienie.",
			"ptBR": "Correntes Instáveis aumenta sua velocidade de ataque em +25% enquanto ativa.\n\nTags: Suprema, Choque, Dano, Eletricidade, Recarga.",
			"ruRU": "\"Бурный поток\" повышает скорость атаки на +25%.\n\nTags: Мощное умение, Шок, Урон, Молния, Время восстановления.",
			"zhCN": "不稳电流激活时,你的攻击速度提高+25%。\n\nTags: 终极技能, 电冲, 伤害, 闪电, 冷却时间."
},
		id: 107,
		maxPoints: 1,
		x: -568.77,
		y: 433.255
	},
	"Supreme Unstable Currents": {
		baseSkill: "Unstable Currents",
		connections: [ "Prime Unstable Currents" ],
		description: `While Unstable Currents is active, Crackling Energy continually pulses and consumes no charges.

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegene instabile Strömung",
			"esES": "Corrientes inestables supremas",
			"esMX": "Corrientes Inestables Superiores",
			"frFR": "Courant instable suprême",
			"itIT": "Correnti Instabili Supreme",
			"jaJP": "不安定電流(高級)",
			"koKR": "최고의 불안정한 전류",
			"plPL": "Przepotężne Niestabilne Prądy",
			"ptBR": "Correntes Instáveis Supremas",
			"ruRU": "Неотвратимый бурный поток",
			"zhCN": "至极不稳电流"
},
		descriptionLocalized: {
			"deDE": "Während Instabile Strömung aktiv ist, pulsiert Knisternde Energie kontinuierlich und verbraucht keine Aufladungen.\n\nTags: Ultimativ, Schock, Schaden, Blitz, Abklingzeit.",
			"esES": "Mientras dura Corrientes inestables, la energía crepitante emite pulsos continuos y no consume cargas.\n\nTags: Definitiva, Electrocución, Daño, Rayos, Tiempo de reutilización.",
			"esMX": "Mientras Corrientes Inestables está activa, Energía Crepitante pulsa continuamente y no consume cargas.\n\nTags: Máxima, Choque, Daño, Rayo, Recuperación.",
			"frFR": "Tant que Courant instable est actif, l'énergie crépitante émet des impulsions en continu et n'utilise aucune charge.\n\nTags: Ultime, Foudre, Dégâts, Temps de recharge.",
			"itIT": "Mentre Correnti Instabili è attiva, Energia Crepitante pulsa continuamente e non consuma cariche.\n\nTags: Ultra, Folgore, Danni, Fulmine, Tempo di recupero.",
			"jaJP": "〈不安定電流〉を発動していると〈帯び出す電気〉が持続的に脈動し、チャージを消費しない。\n\nTags: 奥義, 電撃, ダメージ, 稲妻, クールダウン.",
			"koKR": "불안정한 전류가 활성화되어 있는 동안 짜릿한 에너지가 충전을 소모하지 않고 계속 파동을 내보냅니다.\n\nTags: 궁극기, 감전, 피해, 번개, 재사용 대기시간.",
			"plPL": "Kiedy Niestabilne Prądy są aktywne, Roziskrzona Energia nieprzerwanie pulsuje i nie zużywa ładunków.\n\nTags: Specjalne, Porażenie, Obrażenia, Piorun, Odnowienie.",
			"ptBR": "Enquanto Correntes Instáveis está ativa, Energia Crepitante pulsa de forma contínua e não consome cargas.\n\nTags: Suprema, Choque, Dano, Eletricidade, Recarga.",
			"ruRU": "Пока действует \"Бурный поток\", искрящийся заряд энергии непрерывно пульсирует и не поглощает заряды.\n\nTags: Мощное умение, Шок, Урон, Молния, Время восстановления.",
			"zhCN": "不稳电流激活时,爆裂电花持续脉冲而不消耗充能。\n\nTags: 终极技能, 电冲, 伤害, 闪电, 冷却时间."
},
		id: 108,
		maxPoints: 1,
		x: -571.55,
		y: 596.365
	},
	"Deep Freeze": {
		connections: [ "Prime Deep Freeze", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Encase yourself in ice, becoming Immune for 4 seconds, continually dealing 12.5% damage, and Chilling enemies for 20%. When Deep Freeze expires, it deals an additional 100% damage.

Casting Deep Freeze again ends the effect early.

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Tiefgefroren",
			"esES": "Congelación total",
			"esMX": "Congelación Extrema",
			"frFR": "Froid intense",
			"itIT": "Congelamento Intenso",
			"jaJP": "ディープ・フリーズ",
			"koKR": "냉대",
			"plPL": "Głęboki Mróz",
			"ptBR": "Congelamento Profundo",
			"ruRU": "Глубокая заморозка",
			"zhCN": "深度冻结"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#}\nGlückstrefferchance: {#}%\nUmhüllt Euch in Eis und werdet 4 Sek. lang immun, wobei Ihr kontinuierlich 12.5% Schaden verursacht und Gegner für 20% einfriert. Wenn Tiefgefroren abläuft, verursacht es zusätzlich 100% Schaden.\n\nBei erneutem Wirken von Tiefgefroren wird der Effekt frühzeitig beendet.\n\nTags: Ultimativ, Frost, Immun., Unterkühlen, Schaden, Kälte, Abklingzeit, Kontrollverlust, Schadensreduktion.",
			"esES": "Tiempo de reutilización: {#}\nProbabilidad de golpe de suerte: {#}%\nTe encierras en hielo y te vuelves inmune durante 4 s, además de infligir 12.5% de daño continuamente y aplicar un 20% de helada a los enemigos. Cuando expira, Congelación total inflige 100% más de daño.\n\nLanzar Congelación total de nuevo termina el efecto antes.\n\nTags: Definitiva, Escarcha, Inmune, Helada, Daño, Frío, Tiempo de reutilización, Control de masas, Reducción de daño.",
			"esMX": "Recuperación: {#}\nProbabilidad de golpe afortunado: {#}%\nTe recubres de hielo, te vuelves inmune durante 4 segundos, infliges 12.5% de daño continuamente y hielas a los enemigos un 20%. Cuando Congelación Extrema caduca, inflige 100% más de daño.\n\n Si lanzas Congelación Extrema otra vez, el efecto se termina antes.\n\nTags: Máxima, Congelar, Inmune, Helar, Daño, Frío, Recuperación, Control de multitudes, Reducción de daño.",
			"frFR": "Temps de recharge: {#}\nChances de coup de chance: {#}%\nVous vous figez dans la glace, ce qui vous rend insensible pendant 4 s et inflige en continu 12.5% points de dégâts aux adversaires en les glaçant à hauteur de 20%. Lorsque Froid intense prend fin, il inflige 100% points de dégâts supplémentaires.\n\nVous pouvez mettre fin à cet effet plus tôt en relançant Froid intense.\n\nTags: Ultime, Givre, Insensible, Glace, Dégâts, Froid, Temps de recharge, Perte de contrôle, Réduction des dégâts.",
			"itIT": "Tempo di recupero: {#}\nProbabilità di colpo fortunato: {#}%\nTi avvolgi nel ghiaccio, diventando immune per 4 s, infliggendo costantemente 12.5% danni e raggelando i nemici del 20%. Quando Congelamento Intenso termina, infligge 100% danni aggiuntivi.\n\nRilanciare Congelamento Intenso fa terminare prima l'effetto.\n\nTags: Ultra, Gelo, Immunità, Raggelamento, Danni, Freddo, Tempo di recupero, Effetti debilitanti, Riduzione danni.",
			"jaJP": "クールダウン: {#}\n幸運の一撃発生率: {#}%\n氷に身を包み、4秒間にわたり無効状態になり、12.5%のダメージを与えつつ、 敵に20%の冷気効果を付与する。〈ディープ・フリーズ〉が終了すると、追加で100%のダメージを与える。\n\n〈ディープ・フリーズ〉を再び使用すると効果が早く終了する。\n\nTags: 奥義, 寒気, 無敵, 冷気, ダメージ, クールダウン, 操作障害効果, ダメージ減少.",
			"koKR": "재사용 대기시간: {#}\n행운의 적중 확률: {#}%\n자신을 얼음으로 감싸 4초 동안 면역 상태가 되고, 지속적으로 적에게 12.5%의 피해를 주고 20% 동안 적이 오한을 느끼게 합니다. 냉대가 만료될 때 추가로 100%의 피해를 줍니다.\n\n냉대를 다시 시전하면 이 효과가 더 빨리 끝납니다.\n\nTags: 궁극기, 서리, 면역, 오한, 피해, 냉기, 재사용 대기시간, 군중 제어, 피해 감소.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nOtaczasz się lodem i zyskujesz niewrażliwość na 4 sek. W tym czasie stale zadajesz 12.5% pkt. obrażeń i wyziębiasz wrogów o 20%. Kiedy Głęboki Mróz dobiega końca, zadaje dodatkowo 100% pkt. obrażeń.\n\nPonowne użycie Głębokiego Mrozu kończy ten efekt wcześniej.\n\nTags: Specjalne, Mróz, Niewrażliwość, Wyziębienie, Obrażenia, Zimno, Odnowienie, Ograniczanie Kontroli, Redukcja Obrażeń.",
			"ptBR": "Recarga: {#}\nChance de Golpe de Sorte: {#}%\nCobre-se com gelo, tornando-se imune por 4 segundos, causando 12.5% de dano contínuo e aplicando gelidez aos inimigos por 20%. Quando Congelamento Profundo termina, causa 100% de dano adicional.\n\nLançar Congelamento Profundo novamente acaba com o efeito mais cedo.\n\nTags: Suprema, Geleira, Imune, Gelidez, Dano, Gelo, Recarga, Controle de Grupo, Redução de Dano.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы заключаете себя в глыбу льда, получая невосприимчивость на 4 сек., непрерывно нанося противникам 12.5% ед. урона и применяя эффект окоченения, замедляющий на 20%. По окончании времени действия \"Глубокая заморозка\" наносит еще 100% ед. урона.\n\nЭффект можно завершить раньше времени, применив умение еще раз.\n\nTags: Мощное умение, Мороз, Неуязвимость, Окоченение, Урон, Холод, Время восстановления, Контроль, Уменьшение урона.",
			"zhCN": "冷却时间:{#}\n幸运一击几率:{#}%\n用冰块包裹自己,获得免疫,持续4秒,持续造成12.5%点伤害并冻伤敌人20%。深度冻结结束时,额外造成100%点伤害。\n\n再次施放深度冻结会提前结束技能效果。\n\nTags: 终极技能, 寒霜, 免疫, 冻伤, 伤害, 冰霜, 冷却时间, 群控, 伤害减免."
},
		id: 109,
		maxPoints: 1,
		values: [ "60", "5" ],
		x: -377.345,
		y: -274.565
	},
	"Prime Deep Freeze": {
		baseSkill: "Deep Freeze",
		connections: [ "Deep Freeze", "Supreme Deep Freeze" ],
		description: `When Deep Freeze ends, gain 10% of your Base Life as a Barrier for 6 seconds for each enemy you Froze while it was active.

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Oberstes Tiefgefroren",
			"esES": "Congelación total mayor",
			"esMX": "Congelación Extrema Suprema",
			"frFR": "Froid intense primordial",
			"itIT": "Congelamento Intenso Pregiato",
			"jaJP": "ディープ・フリーズ(上級)",
			"koKR": "극상의 냉대",
			"plPL": "Większy Głęboki Mróz",
			"ptBR": "Congelamento Profundo Primordial",
			"ruRU": "Первородная глубокая заморозка",
			"zhCN": "至尊深度冻结"
},
		descriptionLocalized: {
			"deDE": "Wenn Tiefgefroren endet, erhaltet Ihr 6 Sek. lang für jeden Gegner, den Ihr eingefroren habt, während Tiefgefroren aktiv war, 10% Eures Basislebens als Barriere.\n\nTags: Ultimativ, Frost, Immun., Unterkühlen, Schaden, Kälte, Abklingzeit, Kontrollverlust, Schadensreduktion.",
			"esES": "Cuando termina Congelación total, obtienes un 10% de tu vida base como barrera durante 6 s por cada enemigo que congelaste mientras estaba activa.\n\nTags: Definitiva, Escarcha, Inmune, Helada, Daño, Frío, Tiempo de reutilización, Control de masas, Reducción de daño.",
			"esMX": "Cuando Congelación Extrema finaliza, obtienes un 10% de tu vida de base como barrera durante 6 segundos por cada enemigo que congelaste mientras estaba activa.\n\nTags: Máxima, Congelar, Inmune, Helar, Daño, Frío, Recuperación, Control de multitudes, Reducción de daño.",
			"frFR": "Lorsque Froid intense prend fin, vous obtenez une barrière égale à 10% de vos points de vie de base pendant 6 s pour chaque cible que vous avez gelée pendant que Froid intense était actif.\n\nTags: Ultime, Givre, Insensible, Glace, Dégâts, Froid, Temps de recharge, Perte de contrôle, Réduction des dégâts.",
			"itIT": "Quando Congelamento Intenso termina ottieni una barriera pari al 10% della tua Vita base per 6 s per ogni nemico congelato mentre era attiva.\n\nTags: Ultra, Gelo, Immunità, Raggelamento, Danni, Freddo, Tempo di recupero, Effetti debilitanti, Riduzione danni.",
			"jaJP": "〈ディープ・フリーズ〉が終了すると、発動中に凍結させた敵1体ごとに、6秒間にわたり基本ライフの10%にあたるの障壁を獲得する。\n\nTags: 奥義, 寒気, 無敵, 冷気, ダメージ, クールダウン, 操作障害効果, ダメージ減少.",
			"koKR": "냉대가 종료되면, 냉대가 활성화되어 있는 동안 빙결시킨 적 하나당 6초 동안 자신의 기본 생명력의 10%를 보호막으로 얻습니다.\n\nTags: 궁극기, 서리, 면역, 오한, 피해, 냉기, 재사용 대기시간, 군중 제어, 피해 감소.",
			"plPL": "Gdy działanie Głębokiego Mrozu dobiega końca, zyskujesz barierę o mocy równej 10% twojego podstawowego zdrowia na 6 sek. za każdego wroga zamrożonego przez ciebie w trakcie działania umiejętności.\n\nTags: Specjalne, Mróz, Niewrażliwość, Wyziębienie, Obrażenia, Zimno, Odnowienie, Ograniczanie Kontroli, Redukcja Obrażeń.",
			"ptBR": "Quando Congelamento Profundo termina, você recebe 10% da sua vida básica como uma barreira por 6 segundos por cada inimigo que você congelou enquanto ele estava ativo.\n\nTags: Suprema, Geleira, Imune, Gelidez, Dano, Gelo, Recarga, Controle de Grupo, Redução de Dano.",
			"ruRU": "По завершении действия \"Глубокой заморозки\" вы на 6 сек. получаете барьер с прочностью, равной 10% базового запаса здоровья за каждого противника, замороженного вами во время действия умения.\n\nTags: Мощное умение, Мороз, Неуязвимость, Окоченение, Урон, Холод, Время восстановления, Контроль, Уменьшение урона.",
			"zhCN": "深度冻结结束时,技能激活期间每冻结一个敌人,获得一层相当于你10%的基础生命的屏障,持续6秒。\n\nTags: 终极技能, 寒霜, 免疫, 冻伤, 伤害, 冰霜, 冷却时间, 群控, 伤害减免."
},
		id: 110,
		maxPoints: 1,
		x: -592.28,
		y: -430.76
	},
	"Supreme Deep Freeze": {
		baseSkill: "Deep Freeze",
		connections: [ "Prime Deep Freeze" ],
		description: `When Deep Freeze ends, your Non-Ultimate Cooldowns are reduced by 50%.

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Überlegenes Tiefgefroren",
			"esES": "Congelación total suprema",
			"esMX": "Congelación Extrema Superior",
			"frFR": "Froid intense suprême",
			"itIT": "Congelamento Intenso Supremo",
			"jaJP": "ディープ・フリーズ(高級)",
			"koKR": "최고의 냉대",
			"plPL": "Najwyższy Głęboki Mróz",
			"ptBR": "Congelamento Profundo Supremo",
			"ruRU": "Неотвратимая глубокая заморозка",
			"zhCN": "至极深度冻结"
},
		descriptionLocalized: {
			"deDE": "Wenn Tiefgefroren endet, werden Eure nicht-ultimativen Abklingzeiten um 50% reduziert.\n\nTags: Ultimativ, Frost, Immun., Unterkühlen, Schaden, Kälte, Abklingzeit, Kontrollverlust, Schadensreduktion.",
			"esES": "Cuando termina Congelación total, tus tiempos de reutilización que no sean de definitivas se reducen un 50%.\n\nTags: Definitiva, Escarcha, Inmune, Helada, Daño, Frío, Tiempo de reutilización, Control de masas, Reducción de daño.",
			"esMX": "Cuando Congelación Extrema finaliza, las recuperaciones de tus habilidades no máximas se reducen un 50%.\n\nTags: Máxima, Congelar, Inmune, Helar, Daño, Frío, Recuperación, Control de multitudes, Reducción de daño.",
			"frFR": "Lorsque Froid intense prend fin, vos temps de recharge, hors compétences ultimes, sont réduits de 50%.\n\nTags: Ultime, Givre, Insensible, Glace, Dégâts, Froid, Temps de recharge, Perte de contrôle, Réduction des dégâts.",
			"itIT": "Quando Congelamento Intenso termina, i tuoi tempi di recupero di abilità non Ultra si riducono del 50%.\n\nTags: Ultra, Gelo, Immunità, Raggelamento, Danni, Freddo, Tempo di recupero, Effetti debilitanti, Riduzione danni.",
			"jaJP": "〈ディープ・フリーズ〉が終了すると、奥義以外のクールダウンが50%短くなる。\n\nTags: 奥義, 寒気, 無敵, 冷気, ダメージ, クールダウン, 操作障害効果, ダメージ減少.",
			"koKR": "냉대가 끝날 때, 궁극기가 아닌 기술의 재사용 대기시간이 50% 감소합니다.\n\nTags: 궁극기, 서리, 면역, 오한, 피해, 냉기, 재사용 대기시간, 군중 제어, 피해 감소.",
			"plPL": "Kiedy kończy się działanie Głębokiego Mrozu, czasy odnowienia twoich umiejętności (poza Mocą Specjalną) zostają skrócone o 50%.\n\nTags: Specjalne, Mróz, Niewrażliwość, Wyziębienie, Obrażenia, Zimno, Odnowienie, Ograniczanie Kontroli, Redukcja Obrażeń.",
			"ptBR": "Quando Congelamento Profundo termina, suas recargas não supremas são reduzidas em 50%.\n\nTags: Suprema, Geleira, Imune, Gelidez, Dano, Gelo, Recarga, Controle de Grupo, Redução de Dano.",
			"ruRU": "По завершении действия \"Глубокой заморозки\" время восстановления ваших умений сокращается на 50%. Не действует на мощные умения.\n\nTags: Мощное умение, Мороз, Неуязвимость, Окоченение, Урон, Холод, Время восстановления, Контроль, Уменьшение урона.",
			"zhCN": "深度冻结结束时,你的非终极技能冷却时间缩短50%。\n\nTags: 终极技能, 寒霜, 免疫, 冻伤, 伤害, 冰霜, 冷却时间, 群控, 伤害减免."
},
		id: 111,
		maxPoints: 1,
		x: -590.745,
		y: -581.04
	},
	"Permafrost": {
		connections: [ "Hoarfrost", "Ultimate", "Icy Touch" ],
		description: `Frost Skills deal x{5/10/15/20/25/30/35/40/45/50}% increased damage to Elites.

Tags: Elite Monsters, Damage, Frost.`,
		nameLocalized: {
			"deDE": "Permafrost",
			"esES": "Permaescarcha",
			"esMX": "Escarcha Permanente",
			"frFR": "Gel prolongé",
			"itIT": "Permagelo",
			"jaJP": "パーマフロスト",
			"koKR": "영구 결빙",
			"plPL": "Wieczny Mróz",
			"ptBR": "Permagelo",
			"ruRU": "Вечная мерзлота",
			"zhCN": "永冻之霜"
},
		descriptionLocalized: {
			"deDE": "Frostfertigkeiten fügen Elitegegnern x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden zu.\n\nTags: Elitemonster, Schaden, Frost.",
			"esES": "Las habilidades de escarcha infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño a enemigos de élite.\n\nTags: Enemigos de élite, Daño, Escarcha.",
			"esMX": "Las habilidades de Frío infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño a los enemigos de Élite.\n\nTags: Monstruos de Élite, Daño, Congelar.",
			"frFR": "Les compétences de givre infligent x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires aux élites.\n\nTags: Monstres élites, Dégâts, Givre.",
			"itIT": "Le abilità di freddo infliggono il x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi ai nemici élite.\n\nTags: Mostri élite, Danni, Gelo.",
			"jaJP": "エリートに冷気スキルが与えるダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: エリート・モンスター, ダメージ, 寒気.",
			"koKR": "서리 기술로 정예에게 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 정예 괴물, 피해, 서리.",
			"plPL": "Umiejętności Lodu zadają wrogom elitarnym obrażenia zwiększone o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Elitarne Potwory, Obrażenia, Mróz.",
			"ptBR": "Habilidades de Geleira causam {5/10/15/20/25/30/35/40/45/50}% de dano aumentado a elites.\n\nTags: Monstros de Elite, Dano, Geleira.",
			"ruRU": "Навыки мороза наносят на x{5/10/15/20/25/30/35/40/45/50}% больше урона особым противникам.\n\nTags: Особые монстры, Урон, Мороз.",
			"zhCN": "冰霜技能对精英怪造成的伤害提高x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 精英怪物, 伤害, 寒霜."
},
		id: 113,
		maxPoints: 3,
		x: -3.97,
		y: -277.33
	},
	"Hoarfrost": {
		connections: [ "Permafrost", "Frigid Breeze" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Chilled enemies, and x{6/12/18/24/30/36/42/48/54/60}% increased damage to Frozen enemies.

Tags: Chill, Frozen, Damage, Crowd Control.`,
		nameLocalized: {
			"deDE": "Raureif",
			"esES": "Escarcha",
			"esMX": "Triza de Escarcha",
			"frFR": "Gelée blanche",
			"itIT": "Calaverna",
			"jaJP": "白霜",
			"koKR": "흰서리",
			"plPL": "Szadź",
			"ptBR": "Geada",
			"ruRU": "Изморозь",
			"zhCN": "寒霜之灾"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt unterkühlten Gegnern x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden und eingefrorenen Gegnern x{6/12/18/24/30/36/42/48/54/60}% mehr Schaden zu.\n\nTags: Unterkühlen, Eingefroren, Schaden, Kontrollverlust.",
			"esES": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a enemigos helados, o un x{6/12/18/24/30/36/42/48/54/60}% si se trata de enemigos congelados.\n\nTags: Helada, Congelación, Daño, Control de masas.",
			"esMX": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a enemigos helados, y un x{6/12/18/24/30/36/42/48/54/60}% más de daño a enemigos congelados.\n\nTags: Helar, Congelado, Daño, Control de multitudes.",
			"frFR": "Vous infligez x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires aux cibles glacées, et x{6/12/18/24/30/36/42/48/54/60}% de dégâts supplémentaires aux cibles gelées.\n\nTags: Glace, Gel, Dégâts, Perte de contrôle.",
			"itIT": "Infliggi il x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi ai nemici raggelati, e il x{6/12/18/24/30/36/42/48/54/60}% di danni aggiuntivi ai nemici congelati.\n\nTags: Raggelamento, Congelamento, Danni, Effetti debilitanti.",
			"jaJP": "自分が冷気状態の敵に与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。凍結状態の敵に与えるダメージはx{6/12/18/24/30/36/42/48/54/60}%増加する。\n\nTags: 冷気, 凍結, ダメージ, 操作障害効果.",
			"koKR": "오한을 느끼는 적에게 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가하고, 빙결 상태의 적에게 주는 피해가 x{6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: 오한, 빙결, 피해, 군중 제어.",
			"plPL": "Zadajesz obrażenia zwiększone o x{3/6/9/12/15/18/21/24/27/30}% wyziębionym wrogom oraz obrażenia zwiększone o x{6/12/18/24/30/36/42/48/54/60}% zamrożonym wrogom.\n\nTags: Wyziębienie, Zamrażanie, Obrażenia, Ograniczanie Kontroli.",
			"ptBR": "Você causa {3/6/9/12/15/18/21/24/27/30}% de dano aumentado a inimigos com gelidez e {6/12/18/24/30/36/42/48/54/60}% de dano aumentado a inimigos congelados.\n\nTags: Gelidez, Congelado, Dano, Controle de Grupo.",
			"ruRU": "Вы наносите на x{3/6/9/12/15/18/21/24/27/30}% больше урона окоченевшим противникам и на x{6/12/18/24/30/36/42/48/54/60}% больше урона замороженным.\n\nTags: Окоченение, Заморозка, Урон, Контроль.",
			"zhCN": "你对冻伤的敌人造成的伤害提高x{3/6/9/12/15/18/21/24/27/30}%,对冻结的敌人造成的伤害提高x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 冻伤, 冻结, 伤害, 群控."
},
		id: 136,
		maxPoints: 3,
		x: -195.39,
		y: -421.43
	},
	"Frigid Breeze": {
		connections: [ "Hoarfrost", "Icy Touch" ],
		description: `Lucky Hit: Cold Damage against Vulnerable enemies has a 20% chance to generate {5/10/15/20/25/30/35/40/45/50} Mana.

Tags: Vulnerable, Cold, Lucky Hit, Mana.`,
		nameLocalized: {
			"deDE": "Eisige Brise",
			"esES": "Brisa gélida",
			"esMX": "Brisa Frígida",
			"frFR": "Brise glaciale",
			"itIT": "Brezza Gelida",
			"jaJP": "フリジッドブリーズ",
			"koKR": "차가운 바람",
			"plPL": "Lodowaty Powiew",
			"ptBR": "Brisa Frígida",
			"ruRU": "Леденящий ветер",
			"zhCN": "凛冽寒风"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Kälteschaden gegen verwundbare Gegner verfügt über eine Chance von 20%, {5/10/15/20/25/30/35/40/45/50} Mana zu erzeugen.\n\nTags: Verwundbar, Kälte, Glückstreffer, Mana.",
			"esES": "Golpe de suerte: El daño de frío contra enemigos vulnerables tiene un 20% de probabilidad de generar {5/10/15/20/25/30/35/40/45/50} de maná.\n\nTags: Vulnerable, Frío, Golpe de suerte, Maná.",
			"esMX": "Golpe afortunado: El daño de frío contra enemigos vulnerables tiene un 20% de probabilidad de generar {5/10/15/20/25/30/35/40/45/50} de maná.\n\nTags: Vulnerable, Frío, Golpe afortunado, Maná.",
			"frFR": "Coup de chance: infliger des dégâts de froid aux adversaires vulnérables a 20% de chances de générer {5/10/15/20/25/30/35/40/45/50} points de mana.\n\nTags: Vulnérable, Froid, Coup de chance, Mana.",
			"itIT": "Colpo fortunato: i danni da freddo contro i nemici vulnerabili hanno il 20% di probabilità di generare {5/10/15/20/25/30/35/40/45/50} mana.\n\nTags: Vulnerabilità, Freddo, Colpo fortunato, Mana.",
			"jaJP": "幸運の一撃: 脆弱状態の敵に冷気ダメージを与えると、20%の確率でマナを{5/10/15/20/25/30/35/40/45/50}生成する。\n\nTags: 脆弱, 冷気, 幸運の一撃, マナ.",
			"koKR": "행운의 적중: 취약 상태의 적에게 냉기 피해를 주면 20% 확률로 마나가 {5/10/15/20/25/30/35/40/45/50} 생성됩니다.\n\nTags: 취약, 냉기, 행운의 적중, 마나.",
			"plPL": "Szczęśliwy traf: Obrażenia od Zimna zadawane odsłoniętym wrogom mają 20% szans na przywrócenie {5/10/15/20/25/30/35/40/45/50} pkt. many.\n\nTags: Odsłonięcie, Zimno, Szczęśliwy Traf, Mana.",
			"ptBR": "Golpe de Sorte: Dano gélido contra inimigos vulneráveis tem 20% de chance de gerar {5/10/15/20/25/30/35/40/45/50} de mana.\n\nTags: Vulnerável, Gelo, Golpe de Sorte, Mana.",
			"ruRU": "Удачный удар: урон от холода, наносимый уязвимым противникам, с вероятностью 20% восполняет {5/10/15/20/25/30/35/40/45/50} ед. маны.\n\nTags: Уязвимость, Холод, Удачный удар, Мана.",
			"zhCN": "幸运一击:对易伤敌人造成冰霜伤害有20%几率生成{5/10/15/20/25/30/35/40/45/50}点法力。\n\nTags: 易伤, 冰霜, 幸运一击, 法力."
},
		id: 137,
		maxPoints: 3,
		x: -5.22,
		y: -581.655
	},
	"Icy Touch": {
		connections: [ "Permafrost", "Frigid Breeze" ],
		description: `You deal x{4/8/12/16/20/24/28/32/36/40}% increased Cold Damage to Vulnerable enemies.

Tags: Vulnerable, Cold, Damage.`,
		nameLocalized: {
			"deDE": "Eisige Berührung",
			"esES": "Toque helado",
			"esMX": "Toque Helado",
			"frFR": "Toucher de glace",
			"itIT": "Tocco Ghiacciato",
			"jaJP": "アイス・タッチ",
			"koKR": "얼음 손길",
			"plPL": "Lodowy Dotyk",
			"ptBR": "Toque Gélido",
			"ruRU": "Ледяное прикосновение",
			"zhCN": "寒冰之触"
},
		descriptionLocalized: {
			"deDE": "Ihr verursacht x{4/8/12/16/20/24/28/32/36/40}% mehr Kälteschaden gegen verwundbare Gegner.\n\nTags: Verwundbar, Kälte, Schaden.",
			"esES": "Infliges un x{4/8/12/16/20/24/28/32/36/40}% más de daño de frío a enemigos vulnerables.\n\nTags: Vulnerable, Frío, Daño.",
			"esMX": "Infliges un x{4/8/12/16/20/24/28/32/36/40}% más de daño de frío a los enemigos vulnerables.\n\nTags: Vulnerable, Frío, Daño.",
			"frFR": "Vous infligez x{4/8/12/16/20/24/28/32/36/40}% de dégâts de froid supplémentaires aux adversaires vulnérables.\n\nTags: Vulnérable, Froid, Dégâts.",
			"itIT": "Infliggi il x{4/8/12/16/20/24/28/32/36/40}% di danni da freddo aggiuntivi ai nemici vulnerabili.\n\nTags: Vulnerabilità, Freddo, Danni.",
			"jaJP": "脆弱状態の敵に与える冷気ダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n\nTags: 脆弱, 冷気, ダメージ.",
			"koKR": "취약 상태의 적에게 주는 냉기 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 취약, 냉기, 피해.",
			"plPL": "Zadajesz obrażenia od Zimna zwiększone o x{4/8/12/16/20/24/28/32/36/40}% odsłoniętym wrogom.\n\nTags: Odsłonięcie, Zimno, Obrażenia.",
			"ptBR": "Você causa {4/8/12/16/20/24/28/32/36/40}% de dano gélido aumentado a inimigos vulneráveis.\n\nTags: Vulnerável, Gelo, Dano.",
			"ruRU": "Вы наносите на x{4/8/12/16/20/24/28/32/36/40}% больше урона от холода уязвимым противникам.\n\nTags: Уязвимость, Холод, Урон.",
			"zhCN": "你对易伤敌人造成的冰霜伤害提高x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 易伤, 冰霜, 伤害."
},
		id: 115,
		maxPoints: 3,
		x: 180.41,
		y: -421.81
	},
	"Coursing Currents": {
		connections: [ "Electrocution", "Conduction", "Ultimate" ],
		description: `Hitting enemies with Shock Skills increases your Critical Strike Chance by +{1/2/3/4/5/6/7/8/9/10}%. Resets upon getting a Critical Strike.

Tags: Critical Strikes, Shock.`,
		nameLocalized: {
			"deDE": "Fließender Strom",
			"esES": "Corrientes arrebatadoras",
			"esMX": "Corrientes Cargadas",
			"frFR": "Courant continu",
			"itIT": "Flussi Correnti",
			"jaJP": "巡る電流",
			"koKR": "흐르는 전류",
			"plPL": "Orzeźwiające Prądy",
			"ptBR": "Correntes Elétricas",
			"ruRU": "Текучие потоки",
			"zhCN": "电流贯通"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Gegner mit Schockfertigkeiten trefft, erhöht sich Eure kritische Trefferchance um +{1/2/3/4/5/6/7/8/9/10}%. Wird bei einem kritischen Treffer zurückgesetzt.\n\nTags: Kritische Treffer, Schock.",
			"esES": "Golpear a enemigos con habilidades de electrocución aumenta un +{1/2/3/4/5/6/7/8/9/10}% tu probabilidad de golpe crítico. Se reinicia al asestar un golpe crítico.\n\nTags: Golpes críticos, Electrocución.",
			"esMX": "Golpear a los enemigos con habilidades de Rayo aumenta tu probabilidad de golpe crítico un +{1/2/3/4/5/6/7/8/9/10}%. El valor se restablece al asestar un golpe crítico.\n\nTags: Golpes críticos, Choque.",
			"frFR": "Toucher des adversaires avec des compétences de foudre augmente vos chances d'infliger un coup critique de +{1/2/3/4/5/6/7/8/9/10}%. Ces chances se réinitialisent en cas de coup critique.\n\nTags: Coups critiques, Foudre.",
			"itIT": "Colpire i nemici con abilità di folgore aumenta la tua probabilità di critico del +{1/2/3/4/5/6/7/8/9/10}%. Si azzera dopo un colpo critico.\n\nTags: Colpi critici, Folgore.",
			"jaJP": "ショックスキルが敵に命中すると、クリティカルヒット率が+{1/2/3/4/5/6/7/8/9/10}%上昇する。クリティカルヒットを出すと効果がリセットされる。\n\nTags: 致命の一撃, 電撃.",
			"koKR": "감전 기술로 적을 적중하면 극대화 확률이 +{1/2/3/4/5/6/7/8/9/10}% 증가합니다. 기술이 극대화로 적중하면 초기화됩니다.\n\nTags: 극대화, 감전.",
			"plPL": "Trafienie wrogów umiejętnościami Porażenia zwiększa twoją szansę na trafienie krytyczne o +{1/2/3/4/5/6/7/8/9/10}%. Premia zeruje się po wykonaniu trafienia krytycznego.\n\nTags: Trafienia Krytyczne, Porażenie.",
			"ptBR": "Atingir inimigos com habilidades de Choque aumenta sua chance de acerto crítico em +{1/2/3/4/5/6/7/8/9/10}%. Reinicia ao receber um acerto crítico.\n\nTags: Acertos Críticos, Choque.",
			"ruRU": "Когда вы поражаете противников навыками шока, вероятность критического удара повышается на +{1/2/3/4/5/6/7/8/9/10}%. Эффект сбрасывается после нанесения критического удара.\n\nTags: Критические удары, Шок.",
			"zhCN": "电冲技能命中敌人会使你的暴击几率提高+{1/2/3/4/5/6/7/8/9/10}%。打出暴击会重置该加成。\n\nTags: 暴击, 电冲."
},
		id: 116,
		maxPoints: 3,
		x: 2.03,
		y: 287.38
	},
	"Electrocution": {
		connections: [ "Coursing Currents", "Convulsions" ],
		description: `Enemies deal {5/10/15/20/25/30/35/40/45/50}% less damage for 5 seconds after being Critically Struck by your Shock Skills.

Tags: Critical Strikes, Damage Reduction, Shock.`,
		nameLocalized: {
			"deDE": "Stromschlag",
			"esES": "Electrocución",
			"esMX": "Electrocución",
			"frFR": "Électrocution",
			"itIT": "Elettrocuzione",
			"jaJP": "電撃症",
			"koKR": "감전",
			"plPL": "Porażenie",
			"ptBR": "Eletrocussão",
			"ruRU": "Электрошок",
			"zhCN": "电刑"
},
		descriptionLocalized: {
			"deDE": "Gegner verursachen 5 Sek. lang {5/10/15/20/25/30/35/40/45/50}% weniger Schaden, nachdem sie von Euren Schockfertigkeiten kritisch getroffen wurden.\n\nTags: Kritische Treffer, Schadensreduktion, Schock.",
			"esES": "Los enemigos infligen un {5/10/15/20/25/30/35/40/45/50}% menos de daño durante 5 s después de recibir un golpe crítico de tus habilidades de electrocución.\n\nTags: Golpes críticos, Reducción de daño, Electrocución.",
			"esMX": "Los enemigos infligen un {5/10/15/20/25/30/35/40/45/50}% menos de daño durante 5 segundos después de recibir un golpe crítico de tus habilidades de Rayo.\n\nTags: Golpes críticos, Reducción de daño, Choque.",
			"frFR": "Les adversaires infligent {5/10/15/20/25/30/35/40/45/50}% de dégâts en moins pendant 5 s après avoir subi un coup critique de vos compétences de foudre.\n\nTags: Coups critiques, Réduction des dégâts, Foudre.",
			"itIT": "I nemici infliggono il {5/10/15/20/25/30/35/40/45/50}% di danni in meno per 5 s dopo aver subito un colpo critico dalle tue abilità di folgore.\n\nTags: Colpi critici, Riduzione danni, Folgore.",
			"jaJP": "ショックスキルのクリティカルヒットを受けた敵の与えるダメージが5秒間にわたり{5/10/15/20/25/30/35/40/45/50}%減少する。\n\nTags: 致命の一撃, ダメージ減少, 電撃.",
			"koKR": "감전 기술이 적에게 극대화로 적중하면 해당 적이 주는 피해가 5초 동안 {5/10/15/20/25/30/35/40/45/50}% 감소합니다.\n\nTags: 극대화, 피해 감소, 감전.",
			"plPL": "Wrogowie zadają obrażenia zmniejszone o {5/10/15/20/25/30/35/40/45/50}% przez 5 sek. po otrzymaniu trafienia krytycznego od twoich umiejętności Porażenia.\n\nTags: Trafienia Krytyczne, Redukcja Obrażeń, Porażenie.",
			"ptBR": "Inimigos causam {5/10/15/20/25/30/35/40/45/50}% de dano reduzido por 5 segundos depois de receberem um acerto crítico das suas habilidades de Choque.\n\nTags: Acertos Críticos, Redução de Dano, Choque.",
			"ruRU": "Когда ваши навыки шока поражают противника критическим эффектом, наносимый ими урон уменьшается на {5/10/15/20/25/30/35/40/45/50}% на 5 сек.\n\nTags: Критические удары, Уменьшение урона, Шок.",
			"zhCN": "敌人被你的电冲技能暴击后,其造成的伤害降低{5/10/15/20/25/30/35/40/45/50}%,持续5秒。\n\nTags: 暴击, 伤害减免, 电冲."
},
		id: 117,
		maxPoints: 3,
		x: 201.78,
		y: 435.59
	},
	"Convulsions": {
		connections: [ "Conduction", "Electrocution" ],
		description: `Lucky Hit: Shock Skills have a {3/6/9/12/15/18/21/24/27/30}% chance to Stun enemies for 3 seconds.

Tags: Shock, Lucky Hit, Crowd Control.`,
		nameLocalized: {
			"deDE": "Erschütterungen",
			"esES": "Convulsiones",
			"esMX": "Convulsiones",
			"frFR": "Convulsions",
			"itIT": "Convulsioni",
			"jaJP": "痙攣",
			"koKR": "격동",
			"plPL": "Konwulsje",
			"ptBR": "Convulsões",
			"ruRU": "Конвульсии",
			"zhCN": "电击惊厥"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Schockfertigkeiten verfügen über eine Chance von {3/6/9/12/15/18/21/24/27/30}%, Gegner 3 Sek. lang zu betäuben.\n\nTags: Schock, Glückstreffer, Kontrollverlust.",
			"esES": "Golpe de suerte: Las habilidades de electrocución tienen un {3/6/9/12/15/18/21/24/27/30}% de probabilidad de aturdir a los enemigos durante 3 s.\n\nTags: Electrocución, Golpe de suerte, Control de masas.",
			"esMX": "Golpe afortunado: Las habilidades de Rayo tienen un {3/6/9/12/15/18/21/24/27/30}% de probabilidad de aturdir a los enemigos durante 3 segundos.\n\nTags: Choque, Golpe afortunado, Control de multitudes.",
			"frFR": "Coup de chance: vos compétences de foudre ont {3/6/9/12/15/18/21/24/27/30}% de chances d'étourdir les adversaires pendant 3 s.\n\nTags: Foudre, Coup de chance, Perte de contrôle.",
			"itIT": "Colpo fortunato: le tue abilità di folgore hanno il {3/6/9/12/15/18/21/24/27/30}% di probabilità di stordire i nemici per 3 s.\n\nTags: Folgore, Colpo fortunato, Effetti debilitanti.",
			"jaJP": "幸運の一撃: ショックスキルが{3/6/9/12/15/18/21/24/27/30}%の確率で敵を3秒間にわたりスタンさせる。\n\nTags: 電撃, 幸運の一撃, 操作障害効果.",
			"koKR": "행운의 적중: 감전기술이 {3/6/9/12/15/18/21/24/27/30}% 확률로 적을 3초 동안 기절시킵니다.\n\nTags: 감전, 행운의 적중, 군중 제어.",
			"plPL": "Szczęśliwy traf: Umiejętności Porażenia mają {3/6/9/12/15/18/21/24/27/30}% szans na ogłuszenie wrogów na 3 sek.\n\nTags: Porażenie, Szczęśliwy Traf, Ograniczanie Kontroli.",
			"ptBR": "Golpe de Sorte: Habilidades de Choque têm{3/6/9/12/15/18/21/24/27/30}% de chance de atordoar inimigos por 3 segundos.\n\nTags: Choque, Golpe de Sorte, Controle de Grupo.",
			"ruRU": "Удачный удар: умения шока с вероятностью до {3/6/9/12/15/18/21/24/27/30}% оглушают противников на 3 сек.\n\nTags: Шок, Удачный удар, Контроль.",
			"zhCN": "幸运一击:电冲技能有{3/6/9/12/15/18/21/24/27/30}%几率击晕敌人3秒。\n\nTags: 电冲, 幸运一击, 群控."
},
		id: 118,
		maxPoints: 3,
		x: 3.66,
		y: 604.95
	},
	"Conduction": {
		connections: [ "Coursing Currents", "Convulsions" ],
		description: `Critical Strikes with Shock Skills increase your Movement Speed by +{3/6/9/12/15/18/21/24/27/30}% for 3 seconds.

Tags: Shock, Critical Strikes, Movement.`,
		nameLocalized: {
			"deDE": "Leitfähigkeit",
			"esES": "Conducción",
			"esMX": "Conducción",
			"frFR": "Conduction",
			"itIT": "Conduzione",
			"jaJP": "伝導",
			"koKR": "전도",
			"plPL": "Przewodnictwo",
			"ptBR": "Condutividade",
			"ruRU": "Проводимость",
			"zhCN": "导电"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Schockfertigkeiten erhöhen Eure Bewegungsgeschwindigkeit 3 Sek. lang um +{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Schock, Kritische Treffer, Bewegungsgeschwindigkeit.",
			"esES": "Los golpes críticos con habilidades de electrocución aumentan tu velocidad de movimiento un +{3/6/9/12/15/18/21/24/27/30}% durante 3 s.\n\nTags: Electrocución, Golpes críticos, Movimiento.",
			"esMX": "Los golpes críticos con habilidades de Rayo aumentan tu velocidad de movimiento un +{3/6/9/12/15/18/21/24/27/30}% durante 3 segundos.\n\nTags: Choque, Golpes críticos, Movimiento.",
			"frFR": "Les coups critiques portés avec les compétences de foudre augmentent votre vitesse de déplacement de +{3/6/9/12/15/18/21/24/27/30}% pendant 3 s.\n\nTags: Foudre, Coups critiques, Vitesse de déplacement.",
			"itIT": "Infliggere colpi critici con abilità di folgore aumenta la tua velocità di movimento del +{3/6/9/12/15/18/21/24/27/30}% per 3 s.\n\nTags: Folgore, Colpi critici, Movimento.",
			"jaJP": "ショックスキルでクリティカルヒットを出すと、移動速度が3秒間にわたり+{3/6/9/12/15/18/21/24/27/30}%上昇する。\n\nTags: 電撃, 致命の一撃, 移動速度.",
			"koKR": "감전 기술이 극대화로 적중하면 3초 동안 자신의 이동 속도가 +{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 감전, 극대화, 이동 속도.",
			"plPL": "Trafienia krytyczne umiejętnościami Porażenia zwiększają twoją szybkość ruchu o +{3/6/9/12/15/18/21/24/27/30}% na 3 sek.\n\nTags: Porażenie, Trafienia Krytyczne, Szybkość Ruchu.",
			"ptBR": "Acertos críticos com habilidades de Choque aumentam sua velocidade de movimento em +{3/6/9/12/15/18/21/24/27/30}% por 3 segundos.\n\nTags: Choque, Acertos Críticos, Movimento.",
			"ruRU": "Когда вы наносите критический урон навыком шока, скорость передвижения повышается на +{3/6/9/12/15/18/21/24/27/30}% на 3 сек.\n\nTags: Шок, Критические удары, Скорость передвижения.",
			"zhCN": "电冲技能暴击会使你的移动速度提高+{3/6/9/12/15/18/21/24/27/30}%,持续3秒。\n\nTags: 电冲, 暴击, 移动."
},
		id: 119,
		maxPoints: 3,
		x: -191.455,
		y: 436.8
	},
	"Fiery Surge": {
		connections: [ "Endless Pyre", "Soulfire", "Ultimate" ],
		description: `Killing a Burning enemy increases your Mana Regeneration by +{10/20/30/40/50/60/70/80/90/100}% for 3 seconds.

Tags: Burn, Mana.`,
		nameLocalized: {
			"deDE": "Feurige Woge",
			"esES": "Rapto fogoso",
			"esMX": "Aluvión Ígneo",
			"frFR": "Déferlement ardent",
			"itIT": "Scarica di Fuoco",
			"jaJP": "燃え上がる勢い",
			"koKR": "불타는 과도 전류",
			"plPL": "Płomienne Uderzenie",
			"ptBR": "Surto Incandescente",
			"ruRU": "Вспышка огня",
			"zhCN": "烈焰汹涌"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen brennenden Gegner tötet, erhaltet Ihr 3 Sek. lang +{10/20/30/40/50/60/70/80/90/100}% mehr Manaregeneration.\n\nTags: Verbrennung, Mana.",
			"esES": "Matar a un enemigo que está quemándose aumenta tu regeneración de maná un +{10/20/30/40/50/60/70/80/90/100}% durante 3 s.\n\nTags: Quemadura, Maná.",
			"esMX": "Matar a un enemigo aumenta tu regeneración de maná un +{10/20/30/40/50/60/70/80/90/100}% durante 3 segundos.\n\nTags: Quemadura, Maná.",
			"frFR": "Tuer une cible en feu augmente votre régénération de mana de +{10/20/30/40/50/60/70/80/90/100}% pendant 3 s.\n\nTags: Brûlure, Mana.",
			"itIT": "Uccidere un nemico in fiamme aumenta la rigenerazione di mana del +{10/20/30/40/50/60/70/80/90/100}% per 3 s.\n\nTags: Bruciatura, Mana.",
			"jaJP": "炎上状態の敵を倒すと、3 秒間にわたりマナ生成量が+{10/20/30/40/50/60/70/80/90/100}%増加する。\n\nTags: 炎上, マナ.",
			"koKR": "불타는 적을 처치하면 마나 재생량이 3초 동안 +{10/20/30/40/50/60/70/80/90/100}% 증가합니다.\n\nTags: 불태우기, 마나.",
			"plPL": "Zabicie podpalonego wroga zapewnia ci premię +{10/20/30/40/50/60/70/80/90/100}% do regeneracji many na 3 sek.\n\nTags: Podpalenie, Mana.",
			"ptBR": "Matar um inimigo que está queimando aumenta sua regeneração de mana em +{10/20/30/40/50/60/70/80/90/100}% por 3 segundos.\n\nTags: Queimadura, Mana.",
			"ruRU": "Когда вы убиваете горящего противника, ваша скорость восстановления маны повышается на +{10/20/30/40/50/60/70/80/90/100}% на 3 сек.\n\nTags: Горение, Мана.",
			"zhCN": "消灭一名燃烧的敌人可以使你的法力回复速度提高+{10/20/30/40/50/60/70/80/90/100}%,持续3秒。\n\nTags: 燃烧, 法力."
},
		id: 123,
		maxPoints: 3,
		x: -533.615,
		y: 98.915
	},
	"Endless Pyre": {
		connections: [ "Warmth", "Fiery Surge" ],
		description: `You deal increased Burning damage to enemies for each second they remain Burning, up to x{5/10/15/20/25/30/35/40/45/50}% after 5 seconds.

Tags: Burn, Damage.`,
		nameLocalized: {
			"deDE": "Endloser Scheiterhaufen",
			"esES": "Pira sin fin",
			"esMX": "Pira Interminable",
			"frFR": "Bûcher éternel",
			"itIT": "Pira Interminabile",
			"jaJP": "際限なき炎",
			"koKR": "끝없는 장작",
			"plPL": "Stos Wiecznego Ognia",
			"ptBR": "Pira Infinita",
			"ruRU": "Нескончаемое сожжение",
			"zhCN": "火葬不熄"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt Gegnern für jede Sekunde, die sie brennen, mehr Verbrennungsschaden zu, bis maximal x{5/10/15/20/25/30/35/40/45/50}% nach 5 Sek.\n\nTags: Verbrennung, Schaden.",
			"esES": "Infliges más daño de quemadura a los enemigos por cada segundo que pasan quemándose, hasta un máximo de un x{5/10/15/20/25/30/35/40/45/50}% al cabo de 5 s.\n\nTags: Quemadura, Daño.",
			"esMX": "Infliges más daño de quemadura a los enemigos por cada segundo que permanecen quemados, hasta un x{5/10/15/20/25/30/35/40/45/50}% luego de 5 segundos.\n\nTags: Quemadura, Daño.",
			"frFR": "Chaque seconde que vos adversaires passent en feu, vous leur infligez des dégâts de brûlure supplémentaires, jusqu'à un maximum de x{5/10/15/20/25/30/35/40/45/50}% après 5 s.\n\nTags: Brûlure, Dégâts.",
			"itIT": "Infliggi danni da fiamme aggiuntivi ai nemici per ogni secondo in cui sono in fiamme, fino a un massimo del x{5/10/15/20/25/30/35/40/45/50}% dopo 5 s.\n\nTags: Bruciatura, Danni.",
			"jaJP": "敵が炎上し続けると、1秒ごとに自分が与える炎上ダメージが増加していく。増加量は5秒後に最大値のx{5/10/15/20/25/30/35/40/45/50}%に達する。\n\nTags: 炎上, ダメージ.",
			"koKR": "적이 연소 상태로 남아 있는 시간에 따라 적에게 주는 연소 피해가 증가합니다. 연소 피해는 5초 후 최대 x{5/10/15/20/25/30/35/40/45/50}%까지 증가합니다.\n\nTags: 불태우기, 피해.",
			"plPL": "Zadajesz wrogom zwiększone obrażenia od podpalenia za każdą sekundę spędzoną przez nich w stanie podpalenia, maksymalnie do x{5/10/15/20/25/30/35/40/45/50}% po upływie 5 sek.\n\nTags: Podpalenie, Obrażenia.",
			"ptBR": "Você causa dano flamejante aumentado a cada segundo enquanto os inimigos permanecem queimando, até {5/10/15/20/25/30/35/40/45/50}% depois de 5 segundos.\n\nTags: Queimadura, Dano.",
			"ruRU": "Получаемый противниками урон от горения увеличивается раз в секунду, пока они горят. Максимальная прибавка к урону – x{5/10/15/20/25/30/35/40/45/50}% за 5 сек.\n\nTags: Горение, Урон.",
			"zhCN": "敌人每燃烧一秒,你对其造成的燃烧伤害都会提高,最多在5秒后提高x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 燃烧, 伤害."
},
		id: 121,
		maxPoints: 3,
		x: -863.88,
		y: 204.975
	},
	"Warmth": {
		connections: [ "Soulfire", "Endless Pyre" ],
		description: `Every 1 second, you Heal for {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% of your Maximum Life for each Nearby Burning enemy. Healing increased to {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% from Bosses.

Tags: Healing, Burn.`,
		nameLocalized: {
			"deDE": "Wärme",
			"esES": "Calor",
			"esMX": "Calor",
			"frFR": "Chaleur",
			"itIT": "Calore",
			"jaJP": "インナー・フレイム",
			"koKR": "온기",
			"plPL": "Ciepło",
			"ptBR": "Calor",
			"ruRU": "Тепло",
			"zhCN": "急性高热"
},
		descriptionLocalized: {
			"deDE": "Alle 1 Sek. werdet Ihr für jeden brennenden Gegner in der Nähe um {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% Eures maximalen Lebens geheilt. Bei Bossen ist die Heilung um {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% erhöht.\n\nTags: Heilung, Verbrennung.",
			"esES": "Cada 1 s, te curas un {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% de tu vida máxima por cada enemigo cercano que esté quemándose. La curación aumenta hasta un {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% en el caso de los jefes.\n\nTags: Curación, Quemadura.",
			"esMX": "Cada 1 segundo, te sanas por un {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% de tu vida máxima por cada enemigo cercano quemado. La sanación aumenta al {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% contra jefes.\n\nTags: Sanación, Quemadura.",
			"frFR": "Toutes les 1 s, vous récupérez {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% de votre maximum de points de vie pour chaque adversaire en feu à proximité. Les soins sont portés à {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% contre les boss.\n\nTags: Soins, Brûlure.",
			"itIT": "Ogni 1 s, ti curi del {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% della tua Vita massima per ogni nemico in fiamme vicino. Le cure aumentano al {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% dai boss.\n\nTags: Guarigione, Bruciatura.",
			"jaJP": "1秒ごとに、周囲で炎上している敵1体につき自身のライフ最大値の{0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}%にあたるを回復する。炎上しているのがボスだった場合は、回復量が{0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}%に増加する。\n\nTags: 回復, 炎上.",
			"koKR": "1초마다 주위에 있는 연소 상태인 적 하나당 자신의 생명력을 최대 생명력의 {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}%만큼 회복합니다. 우두머리를 상대할 때는 치유량이 {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}%|1으로;로; 증가합니다.\n\nTags: 치유, 불태우기.",
			"plPL": "Co 1 sek. odzyskujesz {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% maksymalnego zdrowia za każdego podpalonego wroga w pobliżu. Skuteczność leczenia jest zwiększona do {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% w przypadku bossów.\n\nTags: Leczenie, Podpalenie.",
			"ptBR": "A cada 1 segundo, você recebe {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% de cura da sua vida máxima por cada inimigo próximo que estiver queimando. Cura aumentada para {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% por chefes.\n\nTags: Cura, Queimadura.",
			"ruRU": "Раз в 1 сек. вы восполняете {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% максимального запаса здоровья за каждого подожженного противника рядом с вами. Исцеление усиливается на {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}%, если цель является боссом.\n\nTags: Исцеление, Горение.",
			"zhCN": "每隔1秒,附近每有一名燃烧的敌人,可以为你恢复生命上限的{0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}%。敌人为首领时治疗效果提高至{0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}%。\n\nTags: 治疗, 燃烧."
},
		id: 138,
		maxPoints: 3,
		x: -1162.135,
		y: 102.405
	},
	"Soulfire": {
		connections: [ "Warmth", "Fiery Surge" ],
		description: `After standing still for 1.5 seconds, your Pyromancy Skills cost {5/10/15/20/25/30/35/40/45/50}% less Mana.

Tags: Mana, Pyromancy.`,
		nameLocalized: {
			"deDE": "Seelenfeuer",
			"esES": "Fuego de alma",
			"esMX": "Fuego de Alma",
			"frFR": "Feu de l'âme",
			"itIT": "Fuoco dell'Anima",
			"jaJP": "ソウルファイア",
			"koKR": "영혼의 불꽃",
			"plPL": "Ogień Duszy",
			"ptBR": "Fogo da Alma",
			"ruRU": "Ожог души",
			"zhCN": "灵魂之火"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr 1.5 Sek. lang stillsteht, kosten Eure Pyromaniefertigkeiten {5/10/15/20/25/30/35/40/45/50}% weniger Mana.\n\nTags: Mana, Pyromanie.",
			"esES": "Tras permanecer inmóvil durante 1.5 s, tus habilidades de piromancia cuestan un {5/10/15/20/25/30/35/40/45/50}% menos de maná.\n\nTags: Maná, Piromancia.",
			"esMX": "Después de permanecer inmóvil durante 1.5 segundos, tus habilidades de Piromancia cuestan un {5/10/15/20/25/30/35/40/45/50}% menos de maná.\n\nTags: Maná, Piromancia.",
			"frFR": "Après 1.5 s d'immobilité, vos compétences de pyromancie coûtent {5/10/15/20/25/30/35/40/45/50}% de mana en moins.\n\nTags: Mana, Pyromancie.",
			"itIT": "Rimanendo immobile per 1.5 s, il costo in mana delle tue abilità di piromanzia si riduce del {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Mana, Piromanzia.",
			"jaJP": "1.5秒間静止していると、火術スキルのマナ消費量が{5/10/15/20/25/30/35/40/45/50}%減少する。\n\nTags: マナ, 火術.",
			"koKR": "1.5초 동안 가만히 서 있은 후, 자신의 방화 기술의 마나 소모량이 {5/10/15/20/25/30/35/40/45/50}% 감소합니다.\n\nTags: 마나, 방화.",
			"plPL": "Jeśli pozostaniesz w bezruchu przez 1.5 sek., koszt twoich umiejętności Piromancji będzie zmniejszony o {5/10/15/20/25/30/35/40/45/50}% pkt. many.\n\nTags: Mana, Piromancja.",
			"ptBR": "Depois de permanecer imóvel por 1.5 segundos, suas habilidades de Piromancia custam {5/10/15/20/25/30/35/40/45/50}% a menos de mana.\n\nTags: Mana, Piromancia.",
			"ruRU": "Когда вы стоите неподвижно в течение 1.5 сек., затраты маны на ваши умения категории \"Пиромантия\" сокращаются на {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Мана, Пиромантия.",
			"zhCN": "站立不动1.5秒后,你的爆焰技能消耗的法力降低{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 法力, 爆焰."
},
		id: 139,
		maxPoints: 3,
		x: -868.11,
		y: 2.82
	},
};

sorcererData["Key Passive"] = {
	"Shatter": {
		connections: [ "Key Passive" ],
		description: `After Freeze expires, enemies explode for 25% of the damage you dealt to them while Frozen.

Tags: Frozen, Crowd Control, Damage.`,
		nameLocalized: {
			"deDE": "Zersplittern",
			"esES": "Desquebrajar",
			"esMX": "Fragmentar",
			"frFR": "Pulvérisation",
			"itIT": "Frantumazione",
			"jaJP": "爆砕",
			"koKR": "산산조각",
			"plPL": "Roztrzaskanie",
			"ptBR": "Estilhaçar",
			"ruRU": "Раскалывание",
			"zhCN": "碎冰"
},
		descriptionLocalized: {
			"deDE": "Sobald sie nicht mehr eingefroren sind, explodieren Gegner und verursachen dabei 25% des Schadens, den Ihr ihnen im eingefrorenen Zustand zugefügt habt.\n\nTags: Eingefroren, Kontrollverlust, Schaden.",
			"esES": "Cuando la congelación expira, los enemigos explotan y sufren un 25% del daño que les has infligido mientras estaban congelados.\n\nTags: Congelación, Control de masas, Daño.",
			"esMX": "Cuando el congelamiento caduca, los enemigos explotan e infligen un 25% del daño que les infligiste mientras estaban congelados.\n\nTags: Congelado, Control de multitudes, Daño.",
			"frFR": "Lorsque l'effet de gel expire, les cibles explosent en infligeant 25% des dégâts que vous leur avez infligés pendant qu'elles étaient gelées.\n\nTags: Gel, Perte de contrôle, Dégâts.",
			"itIT": "Al termine del congelamento, i nemici esplodono infliggendo danni pari al 25% dei danni che hai inflitto loro mentre erano congelati.\n\nTags: Congelamento, Effetti debilitanti, Danni.",
			"jaJP": "凍結状態が終了した敵が爆発し、凍結中のその敵に与えた分の25%のダメージを発生させる。\n\nTags: 凍結, 操作障害効果, ダメージ.",
			"koKR": "빙결이 만료된 후, 적이 폭발하며 빙결 상태인 동안 준 피해의 25%에 해당하는 피해를 받습니다.\n\nTags: 빙결, 군중 제어, 피해.",
			"plPL": "Po zakończeniu działania zamrożenia wrogowie wybuchają, otrzymując 25% obrażeń, jakie zadała im twoja postać, gdy byli zamrożeni.\n\nTags: Zamrażanie, Ograniczanie Kontroli, Obrażenia.",
			"ptBR": "Quando o congelamento expira, os inimigos explodem com 25% do dano que você causou a eles enquanto estavam congelados.\n\nTags: Congelado, Controle de Grupo, Dano.",
			"ruRU": "Когда время действия заморозки истекает, противники взрываются. Взрыв наносит 25% урона, который вы нанесли цели во время заморозки.\n\nTags: Заморозка, Контроль, Урон.",
			"zhCN": "敌人在其受到的冻结效果持续时间结束后会爆炸并受到伤害,相当于你在其冻结期间对其造成伤害的25%。\n\nTags: 冻结, 群控, 伤害."
},
		id: 124,
		maxPoints: 1,
		x: -633.197,
		y: 203.26
	},
	"Avalanche": {
		connections: [ "Key Passive" ],
		description: `Lucky Hit: Your Frost Skills have up to a 10% chance to make your next cast of Ice Shards, Frozen Orb, or Blizzard consume no Mana and deal x40% increased damage. Chance is doubled against Vulnerable enemies.

Tags: Vulnerable, Lucky Hit, Mana, Damage, Frost.`,
		nameLocalized: {
			"deDE": "Lawine",
			"esES": "Avalancha",
			"esMX": "Avalancha",
			"frFR": "Avalanche",
			"itIT": "Valanga",
			"jaJP": "アヴァランチ",
			"koKR": "눈사태",
			"plPL": "Lawina",
			"ptBR": "Avalanche",
			"ruRU": "Лавина",
			"zhCN": "雪崩"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Eure Frostfertigkeiten verfügen über eine Chance von bis zu 10%, zu erwirken, dass der nächste Einsatz von Eissplitter, Gefrorene Kugel oder Blizzard kein Mana verbraucht und x40% mehr Schaden verursacht. Bei verwundbaren Gegnern ist die Chance doppelt so hoch.\n\nTags: Verwundbar, Glückstreffer, Mana, Schaden, Frost.",
			"esES": "Golpe de suerte: Tus habilidades de escarcha tienen hasta un 10% de probabilidad de hacer que tu siguiente lanzamiento de Esquirlas de hielo, Orbe congelado o Ventisca no consuma maná e inflija un x40% más de daño. La probabilidad se duplica contra enemigos vulnerables.\n\nTags: Vulnerable, Golpe de suerte, Maná, Daño, Escarcha.",
			"esMX": "Golpe afortunado: Tus habilidades de Hielo tienen hasta un 10% de probabilidad de hacer que tu próximo lanzamiento de Fragmentos de Hielo, Orbe Gélido o Ventisca no consuma maná e inflija un x40% más de daño. La probabilidad se duplica contra enemigos vulnerables.\n\nTags: Vulnerable, Golpe afortunado, Maná, Daño, Congelar.",
			"frFR": "Coup de chance: vos compétences de givre ont jusqu'à 10% de chances d'annuler le coût en mana de votre prochaine utilisation d'Éclats de glace, d'Orbe gelé ou de Blizzard et d'augmenter ses dégâts de x40%. Ces chances sont doublées contre les adversaires vulnérables.\n\nTags: Vulnérable, Coup de chance, Mana, Dégâts, Givre.",
			"itIT": "Colpo fortunato: le tue abilità di freddo hanno fino al 10% di probabilità di azzerare il costo in mana del prossimo utilizzo di Schegge di Ghiaccio, Globo di Gelo o Tormenta, infliggendo inoltre il x40% di danni aggiuntivi con essa. Questa probabilità raddoppia contro i nemici vulnerabili.\n\nTags: Vulnerabilità, Colpo fortunato, Mana, Danni, Gelo.",
			"jaJP": "幸運の一撃: 冷気スキルが最大10%の確率で次に使用する〈アイス・シャード〉、〈フローズン・オーブ〉、〈吹雪〉がマナを消費しなくなり、与えるダメージがx40%増加する。脆弱状態の敵に対しては発生率が2倍になる。\n\nTags: 脆弱, 幸運の一撃, マナ, ダメージ, 寒気.",
			"koKR": "행운의 적중: 서리 기술을 사용하면 최대 10% 확률로 다음 얼음 파편이나 얼음 보주, 눈보라 시전 시 마나가 소모되지 않고 주는 피해가 x40% 증가합니다. 취약 상태의 적에게는 확률이 2배로 증가합니다.\n\nTags: 취약, 행운의 적중, 마나, 피해, 서리.",
			"plPL": "Szczęśliwy traf: Twoje umiejętności Lodu mają do 10% szans na to, że twoje następne Lodowe Odłamki, Zamarznięta Kula albo Zamieć nie zużyją many i zadadzą obrażenia zwiększone o x40%. Szansa ta jest podwojona w przypadku odsłoniętych wrogów.\n\nTags: Odsłonięcie, Szczęśliwy Traf, Mana, Obrażenia, Mróz.",
			"ptBR": "Golpe de Sorte: Suas habilidades de Geleira têm até 10% de chance de fazer seu próximo lançamento de Estilhaços de Gelo, Orbe Congelado ou Nevasca não consumir mana e causar 40% de dano aumentado. A chance é dobrada contra inimigos vulneráveis.\n\nTags: Vulnerável, Golpe de Sorte, Mana, Dano, Geleira.",
			"ruRU": "Удачный удар: ваши умения мороза с вероятностью до 10% позволяют применить \"Осколки льда\", \"Морозную сферу\" или \"Снежную бурю\" без затрат маны и с увеличенным на x40% уроном. Вероятность удваивается, если цель уязвима.\n\nTags: Уязвимость, Удачный удар, Мана, Урон, Мороз.",
			"zhCN": "幸运一击:你的冰霜技能有最高10%几率使你施放的下一个寒冰碎片、冰霜球或暴风雪不消耗法力并且造成的伤害提高x40%。该几率对易伤敌人翻倍。\n\nTags: 易伤, 幸运一击, 法力, 伤害, 寒霜."
},
		id: 140,
		maxPoints: 1,
		x: -636.932,
		y: -2.225
	},
	"Combustion": {
		connections: [ "Key Passive" ],
		description: `Your Burning effects deal x{2/4/6/8/10/12/14/16/18/20}% increased damage per unique source of Burning you have applied to the enemy. If the enemy is Burning from 3 or more sources, this bonus is doubled.

Tags: Burn, Damage.`,
		nameLocalized: {
			"deDE": "Verbrennen",
			"esES": "Combustión",
			"esMX": "Combustión",
			"frFR": "Déflagration",
			"itIT": "Vampata",
			"jaJP": "発火",
			"koKR": "연소",
			"plPL": "Zapłon",
			"ptBR": "Combustão",
			"ruRU": "Возгорание",
			"zhCN": "爆燃"
},
		descriptionLocalized: {
			"deDE": "Eure Verbrennungseffekte verursachen x{2/4/6/8/10/12/14/16/18/20}% mehr Schaden für jede einzigartige Quelle, aus der Ihr den Gegner verbrannt habt. Wenn der Gegner aus 3 oder mehr Quellen brennt, verdoppelt sich dieser Bonus.\n\nTags: Verbrennung, Schaden.",
			"esES": "Tus efectos de quemadura infligen un x{2/4/6/8/10/12/14/16/18/20}% más de daño por cada fuente única de quemadura que hayas aplicado al enemigo. Si tiene quemaduras activas de 3 o más fuentes, el bonus se duplica.\n\nTags: Quemadura, Daño.",
			"esMX": "Tus efectos de quemadura infligen un x{2/4/6/8/10/12/14/16/18/20}% más de daño por cada fuente única de quemadura que aplicas al enemigo. Si el enemigo está quemado por 3 o más fuentes, esta bonificación se duplica.\n\nTags: Quemadura, Daño.",
			"frFR": "Vos effets de brûlure infligent x{2/4/6/8/10/12/14/16/18/20}% de dégâts supplémentaires par source de brûlure unique que vous avez appliquée à l'adversaire. Si l'adversaire subit des brûlures de la part d'au moins 3 sources, ce bonus est doublé.\n\nTags: Brûlure, Dégâts.",
			"itIT": "I danni degli effetti di fiamme che infliggi aumentano del x{2/4/6/8/10/12/14/16/18/20}% per ogni effetto di fiamme inferto al nemico. Se il nemico è in fiamme a causa di 3 o più fonti di danno, il bonus raddoppia.\n\nTags: Bruciatura, Danni.",
			"jaJP": "敵に与えた炎上の原因となる要素が1種類増えるごとに、炎上効果のダメージがx{2/4/6/8/10/12/14/16/18/20}%増加する。3個以上の要素が原因で敵が炎上している場合、ボーナス量が2倍になる。\n\nTags: 炎上, ダメージ.",
			"koKR": "자신이 적에게 건 연소 효과의 근원 하나당 자신의 연소 효과로 해당 적에게 주는 피해가 x{2/4/6/8/10/12/14/16/18/20}% 증가합니다. 적이 3개 이상의 근원으로부터 연소 효과를 받고 있을 때는 이 효과가 2배로 증가합니다.\n\nTags: 불태우기, 피해.",
			"plPL": "Twoje efekty podpalenia zadają obrażenia zwiększone o x{2/4/6/8/10/12/14/16/18/20}% za każde niezależne źródło podpalenia użyte przez ciebie przeciwko celowi. Premia ta jest podwojona, jeśli wróg został podpalony przez 3 lub więcej źródeł.\n\nTags: Podpalenie, Obrażenia.",
			"ptBR": "Seus efeitos flamejantes causam {2/4/6/8/10/12/14/16/18/20}% de dano aumentado por fonte única de dano flamejante causado por você ao inimigo. Se o inimigo estiver queimando de 3 ou mais fontes, esse bônus é dobrado.\n\nTags: Queimadura, Dano.",
			"ruRU": "Эффекты горения наносят на x{2/4/6/8/10/12/14/16/18/20}% больше урона за каждый уникальный эффект горения, который вы применили к цели. Если таких эффектов 3 или более, бонус удваивается.\n\nTags: Горение, Урон.",
			"zhCN": "你对敌人施加的每个不同来源的燃烧效果都会使你的燃烧伤害提高x{2/4/6/8/10/12/14/16/18/20}%。如果敌人正受到3个或更多来源的燃烧效果,此加成翻倍。\n\nTags: 燃烧, 伤害."
},
		id: 141,
		maxPoints: 1,
		x: 633.813,
		y: -3.15
	},
	"Esu's Ferocity": {
		connections: [ "Key Passive" ],
		description: `Your Fire Critical Strike Damage is increased by x25% against enemies above 50% Life. Your Fire Critical Strike Chance is increased by +5% against enemies below 50% Life.

Killing an enemy with a Critical Strike grants both bonuses against all enemies for 3 seconds.

Tags: Damage, Critical Strikes, Life, Fire.`,
		nameLocalized: {
			"deDE": "Esus Wildheit",
			"esES": "Ferocidad de Esu",
			"esMX": "Ferocidad de Esu",
			"frFR": "Férocité d'Esu",
			"itIT": "Ferocia di Esu",
			"jaJP": "エスの猛威",
			"koKR": "에수의 흉포함",
			"plPL": "Zajadłość Esu",
			"ptBR": "Ferocidade de Esu",
			"ruRU": "Свирепость Эсу",
			"zhCN": "艾苏的残暴"
},
		descriptionLocalized: {
			"deDE": "Euer kritischer Trefferschaden mit Feuer erhöht sich gegen Gegner mit mehr als 50% Leben um x25%. Eure kritische Trefferchance mit Feuer erhöht sich gegen Gegner mit weniger als 50% Leben um +5%.\n\nWenn Ihr einen Gegner mit einem kritischen Treffer tötet, werden 3 Sek. lang beide Boni gegen alle Gegner gewährt.\n\nTags: Schaden, Kritische Treffer, Leben, Feuer.",
			"esES": "Tu daño de golpe crítico aumenta un x25% contra enemigos con más de un 50% de vida. Tu probabilidad de golpe crítico de fuego aumenta un +5% contra enemigos con menos de un 50% de vida.\n\nMatar a un enemigo con un golpe crítico otorga ambos bonus contra todos los enemigos durante 3 s.\n\nTags: Daño, Golpes críticos, Vida, Fuego.",
			"esMX": "Tu daño de golpes críticos de fuego aumenta un x25% contra enemigos con más del 50% de vida. Tu probabilidad de golpes críticos de fuego aumenta un +5% contra enemigos con menos del 50% de vida.\n\nMatar a un enemigo con un golpe crítico otorga ambas bonificaciones contra todos los enemigos durante 3 segundos.\n\nTags: Daño, Golpes críticos, Vida, Fuego.",
			"frFR": "Vos dégâts critiques de feu sont augmentés de x25% contre les adversaires qui ont plus de 50% de leurs points de vie. Vos chances d'infliger un coup critique de feu sont augmentées de +5% contre les adversaires qui ont moins de 50% de leurs points de vie.\n\nTuer une cible adverse avec un coup critique vous confère ces deux bonus contre tous les adversaires pendant 3 s.\n\nTags: Dégâts, Coups critiques, Vie, Feu.",
			"itIT": "I danni critici da fuoco aumentano del x25% contro i nemici con più del 50% di Vita. La tua probabilità di infliggere danni critici da fuoco aumenta del +5% contro i nemici che hanno meno del 50% di Vita.\n\nUccidere un nemico con un colpo critico conferisce entrambi i bonus contro tutti i nemici per 3 s.\n\nTags: Danni, Colpi critici, Vita, Fuoco.",
			"jaJP": "ライフが50%を超える敵に対する火炎属性のクリティカルヒットダメージがx25%増加する。また、ライフが50%未満の敵に対する火炎属性のクリティカルヒット率が+5%増加する。\n\nクリティカルヒットで敵を倒すと、3秒間にわたりすべての敵に対して両方のボーナスが適用される。\n\nTags: ダメージ, 致命の一撃, ライフ, 火炎.",
			"koKR": "생명력이 50%를 초과하는 적에게 자신의 화염 극대화 피해가 x25% 증가합니다. 생명력이 50% 미만인 적에게 자신의 화염 극대화 확률이 +5% 증가합니다.\n\n극대화 공격으로 적을 처치하면 3초 동안 모든 적에게 두 가지 효과가 모두 활성화됩니다.\n\nTags: 피해, 극대화, 생명력, 화염.",
			"plPL": "Twoje obrażenia od trafień krytycznych umiejętnościami Ognia są zwiększone o x25% przeciwko wrogom mającym ponad 50% zdrowia. Twoja szansa na trafienie krytyczne umiejętnościami Ognia jest zwiększona o +5% przeciwko wrogom mającym poniżej 50% zdrowia.\n\nZabicie celu trafieniem krytycznym zapewnia obie te premie przeciwko wszystkim wrogom na 3 sek.\n\nTags: Obrażenia, Trafienia Krytyczne, Zdrowie, Ogień.",
			"ptBR": "Seu dano de acerto crítico ígneo é aumentado em 25% contra inimigos com vida acima de 50%. Seu dano de acerto crítico ígneo é aumentado em +5% contra inimigos com vida abaixo de 50%.\n\nMatar um inimigo com um acerto crítico concede os dois bônus contra todos os inimigos por 3 segundos.\n\nTags: Dano, Acertos Críticos, Vida, Fogo.",
			"ruRU": "Критический урон от огня увеличивается на x25%, если уровень здоровья цели превышает 50%. Вероятность критического эффекта с уроном от огня повышается на +5%, если уровень здоровья цели меньше 50%.\n\nКогда критический удар убивает противника, оба эффекта применяются ко всем противникам на 3 сек.\n\nTags: Урон, Критические удары, Здоровье, Огонь.",
			"zhCN": "对生命高于50%的敌人,你造成的火焰暴击伤害提高x25%。对生命低于50%的敌人,你的火焰暴击几率提高+5%。\n\n用暴击消灭一名敌人可以对所有敌人获得两种加成,持续3秒。\n\nTags: 伤害, 暴击, 生命, 火焰."
},
		id: 127,
		maxPoints: 1,
		x: 637.394,
		y: 202.605
	},
	"Overflowing Energy": {
		connections: [ "Key Passive" ],
		description: `Crackling Energy hits 1 additional enemy. Each time Crackling Energy hits an enemy, your Shock Skill Cooldowns are reduced by 0.1 seconds, increased to 0.25 seconds against Elites.

Tags: Crackling Energy, Cooldown, Elite Monsters, Damage, Shock.`,
		nameLocalized: {
			"deDE": "Überschüssige Energie",
			"esES": "Energía desbordante",
			"esMX": "Energía Rebosante",
			"frFR": "Énergie débordante",
			"itIT": "Energia Traboccante",
			"jaJP": "ほとばしる電気",
			"koKR": "넘치는 에너지",
			"plPL": "Wszechobecna Energia",
			"ptBR": "Energia Transbordante",
			"ruRU": "Неудержимая энергия",
			"zhCN": "电能满溢"
},
		descriptionLocalized: {
			"deDE": "Knisternde Energie trifft 1 zusätzliche Gegner. Jedes Mal, wenn Knisternde Energie einen Gegner trifft, reduziert sich die Abklingzeit Eurer Schockfertigkeiten um 0.1 Sek., bzw. 0.25 Sek. gegen Elitegegner.\n\nTags: Knisternde Energie, Abklingzeit, Elitemonster, Schaden, Schock.",
			"esES": "La energía crepitante golpea a 1 enemigo adicional. Cada vez que la energía crepitante golpea a un enemigo, los tiempos de reutilización de tus habilidades de electrocución se reducen 0.1 s. Esta cantidad aumenta a 0.25 s contra enemigos de élite.\n\nTags: Energía crepitante, Tiempo de reutilización, Enemigos de élite, Daño, Electrocución.",
			"esMX": "La Energía Crepitante golpea a 1 enemigo adicional. Cada vez que la Energía Crepitante golpea a un enemigo, la recuperación de tus habilidades de Rayo se reduce 0.1 segundos y aumenta a 0.25 segundos contra enemigos de Élite.\n\nTags: Energía Crepitante, Recuperación, Monstruos de Élite, Daño, Choque.",
			"frFR": "L'énergie crépitante touche 1 adversaires supplémentaires. Chaque fois que l'énergie crépitante touche une cible, les temps de recharge de vos compétences de foudre sont réduits de 0.1 s, et de 0.25 s si la cible est une élite.\n\nTags: Énergie crépitante, Temps de recharge, Monstres élites, Dégâts, Foudre.",
			"itIT": "Energia Crepitante colpisce 1 nemico aggiuntivo. Ogni volta che Energia Crepitante colpisce un nemico, i tempi di recupero delle tue abilità di folgore si riducono di 0.1 s, aumentati a 0.25 s contro nemici élite.\n\nTags: Energia Crepitante, Tempo di recupero, Mostri élite, Danni, Folgore.",
			"jaJP": "〈帯び出す電気〉がさらに1体の敵に命中する。〈帯び出す電気〉が敵1体に命中するごとにショックスキルのクールダウンが0.1秒短くなるが、エリートに命中した場合は0.25秒長くなる。\n\nTags: 帯び出す電気, クールダウン, エリート・モンスター, ダメージ, 電撃.",
			"koKR": "짜릿한 에너지가 추가 적 1마리에게 적중합니다. 짜릿한 에너지가 적에게 적중할 때마다 감전 기술의 재사용 대기시간이 0.1초 감소합니다. 정예를 상대할 때는 감소량이 0.25초로 증가합니다.\n\nTags: 짜릿한 에너지, 재사용 대기시간, 정예 괴물, 피해, 감전.",
			"plPL": "Roziskrzona Energia trafia 1 dodatkowego wroga. Za każdym razem, gdy Roziskrzona Energia trafia przeciwnika, czasy odnowienia twoich umiejętności Porażenia zostają skrócone o 0.1 sek. albo 0.25 sek. w przypadku wrogów elitarnych.\n\nTags: Roziskrzona Energia, Odnowienie, Elitarne Potwory, Obrażenia, Porażenie.",
			"ptBR": "Energia Crepitante atinge 1 inimigo adicional. Sempre que Energia Crepitante atinge um inimigo, suas recargas de habilidades de Choque são reduzidas em 0.1 segundos e aumentadas para 0.25 segundos contra elites.\n\nTags: Energia Crepitante, Recarga, Monstros de Elite, Dano, Choque.",
			"ruRU": "Искрящиеся заряды энергии поражают еще 1 противника. Когда искрящийся заряд энергии поражает противника, время восстановления ваших умений шока сокращается на 0.1 сек. Если заряд поражает особого противника – то на 0.25 сек.\n\nTags: Искрящийся заряд энергии, Время восстановления, Особые монстры, Урон, Шок.",
			"zhCN": "爆裂电花额外命中1名敌人。每次爆裂电花命中一名敌人,你的电冲技能的冷却时间缩短0.1秒,命中精英怪时缩短0.25秒。\n\nTags: 爆裂电花, 冷却时间, 精英怪物, 伤害, 电冲."
},
		id: 128,
		maxPoints: 1,
		x: -187.52,
		y: 388.355
	},
	"Vyr's Mastery": {
		connections: [ "Key Passive" ],
		description: `Close enemies take x10% increased damage from your Shock Skills and deal 20% less damage to you. Critical Strikes increase these bonuses by 25% for 3 seconds.

Tags: Shock, Damage, Damage Reduction, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Vyrs Beherrschung",
			"esES": "Dominio de Vyr",
			"esMX": "Dominio de Vyr",
			"frFR": "Virtuosité de Vyr",
			"itIT": "Maestria di Vyr",
			"jaJP": "ヴィルの知識",
			"koKR": "비르의 숙련",
			"plPL": "Mistrzostwo Vyra",
			"ptBR": "Maestria de Vyr",
			"ruRU": "Мастерство Выра",
			"zhCN": "维尔的御雷术"
},
		descriptionLocalized: {
			"deDE": "Nahe Gegner erleiden durch Eure Schockfertigkeiten x10% mehr Schaden und fügen Euch 20% weniger Schaden zu. Kritische Treffer erhöhen diese Boni 3 Sek. lang um 25%.\n\nTags: Schock, Schaden, Schadensreduktion, Kritische Treffer.",
			"esES": "Los enemigos cercanos sufren un x10% más de daño de tus habilidades de electrocución y te infligen un 20% menos de daño. Los golpes críticos aumentan estos bonus un 25% durante 3 s.\n\nTags: Electrocución, Daño, Reducción de daño, Golpes críticos.",
			"esMX": "Los enemigos cercanos reciben un x10% más de daños de tus habilidades de Rayo y te infligen un 20% menos de daño. Los golpes críticos aumentan estas bonificaciones un 25% durante 3 segundos.\n\nTags: Choque, Daño, Reducción de daño, Golpes críticos.",
			"frFR": "Les cibles à proximité subissent x10% de dégâts supplémentaires de vos compétences de foudre, et les dégâts qu'elles vous infligent sont réduits de 20%. Les coups critiques augmentent ces bonus de 25% pendant 3 s.\n\nTags: Foudre, Dégâts, Réduction des dégâts, Coups critiques.",
			"itIT": "I nemici vicini subiscono il x10% di danni aggiuntivi dalle tue abilità di folgore e infliggono il 20% di danni in meno. I colpi critici aumentano questi bonus del 25% per 3 s.\n\nTags: Folgore, Danni, Riduzione danni, Colpi critici.",
			"jaJP": "〈ショック〉スキルが近距離の敵に与えるダメージがx10%増加し、近距離の敵から受けるダメージは20%減少する。クリティカルヒットが発生すると、3秒間にわたりこのボーナスが25%増加する。\n\nTags: 電撃, ダメージ, ダメージ減少, 致命の一撃.",
			"koKR": "근거리에 있는 적이 자신의 감전 기술로 받는 피해가 x10% 증가하고, 자신에게 주는 피해가 20% 감소합니다. 극대화 적중 시 해당 효과가 3초 동안 25% 증가합니다.\n\nTags: 감전, 피해, 피해 감소, 극대화.",
			"plPL": "Pobliscy wrogowie otrzymują obrażenia od twoich umiejętności Porażenia zwiększone o x10% i zadają ci o 20% mniej obrażeń. Trafienia krytyczne zwiększają te premie o 25% na 3 sek.\n\nTags: Porażenie, Obrażenia, Redukcja Obrażeń, Trafienia Krytyczne.",
			"ptBR": "Inimigos próximos recebem 10% de dano aumentado das suas habilidades de Choque e causam 20% de dano reduzido a você. Acertos críticos aumentam esses bônus em 25% por 3 segundos.\n\nTags: Choque, Dano, Redução de Dano, Acertos Críticos.",
			"ruRU": "Находящиеся рядом противники получают на x20% больше урона от ваших умений шока и наносят вам на 20% меньше урона. Критические эффекты усиливают эти бонусы на 25% на 3 сек.\n\nTags: Шок, Урон, Уменьшение урона, Критические удары.",
			"zhCN": "近距敌人受到来自你的电冲技能的伤害提高x10%,对你造成的伤害降低20%。暴击会使这些加成提高25%,持续3秒。\n\nTags: 电冲, 伤害, 伤害减免, 暴击."
},
		id: 129,
		maxPoints: 1,
		x: 185.762,
		y: 389.005
	},
};

export { sorcererData };