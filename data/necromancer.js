let necromancerData = {};

necromancerData["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0
	},
	"Core": {
		connections: [ "Macabre" ],
		requiredPoints: 2,
		x: -1193.775,
		y: 612.52
	},
	"Macabre": {
		connections: [ "Corruption" ],
		requiredPoints: 6,
		x: 507.47,
		y: 1513.16
	},
	"Corruption": {
		connections: [ "Summoning" ],
		requiredPoints: 11,
		x: -1200.65,
		y: 2438.479
	},
	"Summoning": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 507.125,
		y: 3343.385
	},
	"Ultimate": {
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1201.801,
		y: 4246.085
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -10.884,
		y: 4865.98
	},
	"Book of the Dead": {
		x: 2500,
		y: 0
	},
};

necromancerData["Basic"] = {
	"Decompose": {
		connections: [ "Enhanced Decompose", "Basic" ],
		description: `Generate Essence: 6 per second
Lucky Hit Chance: {#}%
Tear the flesh from an enemy, dealing {30/33/36/39/42/45/48/51/54/57}% damage per second and forming a usable Corpse with the flesh every 2.5 seconds.

Tags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.`,
		nameLocalized: {
			"deDE": "Zersetzen",
			"esES": "Descomponer",
			"esMX": "Descomponer",
			"frFR": "Décomposition",
			"itIT": "Decomposizione",
			"jaJP": "腐敗",
			"koKR": "부패",
			"plPL": "Rozkład",
			"ptBR": "Decomposição",
			"ruRU": "Распад",
			"zhCN": "分解"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Essenz: 6 pro Sekunde\nGlückstrefferchance: {#}%\nReißt das Fleisch von den Knochen eines Gegners, verursacht {30/33/36/39/42/45/48/51/54/57}% Schaden pro Sekunde und bildet aus dem Fleisch alle 2.5 Sek. eine nutzbare Leiche.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"esES": "Generación de esencia: 6 por segundo\nProbabilidad de golpe de suerte: {#}%\nDesgarras la carne de un enemigo, lo que inflige {30/33/36/39/42/45/48/51/54/57}% de daño por segundo y forma cada 2.5 s un cadáver que puedes usar.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"esMX": "Generación de Esencia: 6 por segundo\nProbabilidad de golpe afortunado: {#}%\nDesgarras la carne de un enemigo, le infliges {30/33/36/39/42/45/48/51/54/57}% de daño por segundo y formas un cadáver útil a partir de la carne cada 2.5 segundos.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"frFR": "Essence générée : 6 par seconde\nChances de coup de chance : {#}%\nVous arrachez la chair d'une cible, ce qui lui inflige {30/33/36/39/42/45/48/51/54/57}% points de dégâts par seconde et crée un cadavre utilisable à partir de sa chair toutes les 2.5 s.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"itIT": "Generazione essenza: 6 ogni s\nProbabilità di colpo fortunato: {#}%\nStrappi la carne da un nemico, infliggendo {30/33/36/39/42/45/48/51/54/57}% danni ogni secondo e creando con quella carne un cadavere utilizzabile ogni 2.5 s.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"jaJP": "精髄生成量: 毎秒 6\n幸運の一撃発生率: {#}%\n敵から肉を引き剥がし、毎秒{30/33/36/39/42/45/48/51/54/57}%のダメージを与えつつ、2.5秒ごとに引き剥がした肉から利用可能な死体を作りだす。\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"koKR": "생성: 초당 정수 6\n행운의 적중 확률: {#}%\n적의 살점을 찢어 초당 {30/33/36/39/42/45/48/51/54/57}%의 피해를 주고 2.5초마다 살점으로 사용 가능한 시체를 만들어 냅니다.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"plPL": "Generuje: 6 pkt. esencji na sek.\nSzansa na szczęśliwy traf: {#}%\nWydzierasz wrogowi płaty ciała, zadając mu {30/33/36/39/42/45/48/51/54/57}% pkt. obrażeń na sekundę. Z wydartego ciała co 2.5 sek. tworzysz możliwe do wykorzystania zwłoki.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"ptBR": "Gerar Essência: 6 por segundo\nChance de Golpe de Sorte: {#}%\nArranca a carne de um inimigo, causando {30/33/36/39/42/45/48/51/54/57}% de dano por segundo e formando um cadáver utilizável com a carne a cada 2.5 segundos.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"ruRU": "Дает эссенцию: 6 ед. в сек.\nВероятность удачного удара: {#}%.\nВы вырываете плоть противника, нанося {30/33/36/39/42/45/48/51/54/57}% ед. урона в секунду. Создает труп раз в 2.5 сек.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"zhCN": "生成精魂:6每秒\n幸运一击几率:{#}%\n从敌人身上撕扯血肉,每秒造成{30/33/36/39/42/45/48/51/54/57}%点伤害,并且每2.5秒用这些血肉塑成一具可以使用的亡骸。\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse."
},
		id: 0,
		maxPoints: 5,
		values: [ "40" ],
		x: -217.817,
		y: -258.02
	},
	"Enhanced Decompose": {
		baseSkill: "Decompose",
		connections: [ "Decompose", "Acolyte's Decompose", "Initiate's Decompose" ],
		description: `If an enemy dies while being Decomposed, you gain 10 Essence.

Tags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.`,
		nameLocalized: {
			"deDE": "Verbessertes Zersetzen",
			"esES": "Descomponer mejorado",
			"esMX": "Descomposición Potenciada",
			"frFR": "Décomposition renforcée",
			"itIT": "Decomposizione Rinforzata",
			"jaJP": "腐敗(強化版)",
			"koKR": "강화된 부패",
			"plPL": "Wzmocniony Rozkład",
			"ptBR": "Decomposição Aperfeiçoada",
			"ruRU": "Усиленный распад",
			"zhCN": "强化分解"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Gegner stirbt, während er zersetzt ist, erhaltet Ihr 10 Essenz.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"esES": "Si un enemigo muere cuando está descomponiéndose, obtienes 10 de esencia.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"esMX": "Si un enemigo muere mientras está en descomposición, obtienes 10 de Esencia.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"frFR": "Si une cible en décomposition meurt, vous gagnez 10 points d'essence.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"itIT": "Se un nemico muore mentre è Decomposto, ottieni 10 essenza.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"jaJP": "腐敗した敵が死亡すると、10の精髄を得る。\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"koKR": "적이 부패 상태에서 사망하면 정수를 10 얻습니다.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"plPL": "Jeśli wróg zginie podczas Rozkładu, zyskasz 10 pkt. esencji.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"ptBR": "Se um inimigo morrer sob efeito de decomposição, você recebe 10 de essência.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"ruRU": "Если противник погибает под действием \"Распада\", вы накапливаете 10 ед. эссенции.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"zhCN": "如果一名敌人在被分解时死亡,你获得10点精魂。\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse."
},
		id: 1,
		maxPoints: 1,
		x: -392.051,
		y: -430.79
	},
	"Acolyte's Decompose": {
		baseSkill: "Decompose",
		connections: [ "Enhanced Decompose" ],
		description: `You and your Minions deal x10% increased damage to enemies who are being Decomposed.

Tags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.`,
		nameLocalized: {
			"deDE": "Zersetzung des Akolythen",
			"esES": "Descomponer del acólito",
			"esMX": "Descomposición de Acólito",
			"frFR": "Décomposition d'acolyte",
			"itIT": "Decomposizione degli Accoliti",
			"jaJP": "腐敗(従者)",
			"koKR": "시종의 부패",
			"plPL": "Rozkład Akolity",
			"ptBR": "Decomposição do Acólito",
			"ruRU": "Распад послушника",
			"zhCN": "助祭的分解"
},
		descriptionLocalized: {
			"deDE": "Ihr und Eure Diener fügt Gegnern, die zersetzt werden, x10% mehr nichtphysischen Schaden zu.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"esES": "Tus esbirros y tú infligís un x10% más de daño a los enemigos que se están descomponiendo.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"esMX": "Tú y tus esbirros infligen un x10% más de daño a enemigos en descomposición.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"frFR": "Vous et vos serviteurs infligez x10% de dégâts non physiques supplémentaires aux adversaires en décomposition.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"itIT": "Tu e i tuoi servitori evocati infliggete il x10% di danni aggiuntivi ai nemici Decomposti.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"jaJP": "腐敗状態の敵にミニオンが与えるダメージがx10%増加する。\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"koKR": "자신과 하수인이 부패 상태의 적에게 주는 피해가 x10% 증가합니다.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"plPL": "Ty i twoje sługi zadajecie obrażenia niefizyczne zwiększone o x10% wrogom objętym Rozkładem.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"ptBR": "Você e seus lacaios causam 10% de dano aumentado a inimigos em decomposição.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"ruRU": "Вы и ваши прислужники наносите на x10% больше урона противникам под действием \"Распада\".\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"zhCN": "你和你的仆从对被分解的敌人造成的伤害提高x10%。\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse."
},
		id: 2,
		maxPoints: 1,
		x: -632.476,
		y: -478.095
	},
	"Initiate's Decompose": {
		baseSkill: "Decompose",
		connections: [ "Enhanced Decompose" ],
		description: `Decompose Slows enemies by 30%.

Tags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.`,
		nameLocalized: {
			"deDE": "Zersetzung des Initianden",
			"esES": "Descomponer del iniciado",
			"esMX": "Descomposición de Iniciado",
			"frFR": "Décomposition d'adepte",
			"itIT": "Decomposizione degli Iniziati",
			"jaJP": "腐敗(秘伝)",
			"koKR": "신병의 부패",
			"plPL": "Rozkład Nowicjusza",
			"ptBR": "Decomposição do Iniciado",
			"ruRU": "Распад новичка",
			"zhCN": "学徒的分解"
},
		descriptionLocalized: {
			"deDE": "Zersetzen verlangsamt Gegner um 30%.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"esES": "Descomponer ralentiza un 30% a los enemigos.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"esMX": "Descomponer ralentiza a los enemigos un 30%.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"frFR": "Décomposition ralentit les adversaires de 30%.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"itIT": "Decomposizione rallenta i nemici del 30%.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"jaJP": "〈腐敗〉が敵の移動速度を30%低下させる。\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"koKR": "부패가 적을 30% 감속시킵니다.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"plPL": "Rozkład spowalnia wrogów o 30%.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"ptBR": "Decomposição desacelera inimigos em 30%.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"ruRU": "\"Распад\" замедляет противников на 30%.\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.",
			"zhCN": "分解使敌人减速30%。\n\nTags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse."
},
		id: 3,
		maxPoints: 1,
		x: -371.68,
		y: -569.72
	},
	"Reap": {
		connections: [ "Enhanced Reap", "Basic" ],
		description: `Generate Essence: 4 per enemy hit
Lucky Hit Chance: {#}%
Sweep an ethereal scythe in front of you, dealing {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% damage. Hitting an enemy with Reap increases your Damage Reduction by 15% for 2 seconds.

Tags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Blutige Ernte",
			"esES": "Cosechar",
			"esMX": "Segar",
			"frFR": "Fauchage",
			"itIT": "Mietitura",
			"jaJP": "鎌切り",
			"koKR": "수확",
			"plPL": "Żniwa",
			"ptBR": "Ceifar",
			"ruRU": "Жатва",
			"zhCN": "收割"
},
		descriptionLocalized: {
			"deDE": "Essenz erzeugen: 4 pro getroffenem Gegner\nGlückstrefferchance: {#}%\nSchwingt eine geisterhafte Sense vor Euch und verursacht {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% Schaden. Wenn Ihr einen Gegner mit Blutige Ernte trefft, erhöht sich Eure Schadensreduktion 2 Sek. lang um 15%.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"esES": "Generación de esencia: 4 por enemigo golpeado\nProbabilidad de golpe de suerte: {#}%\nRealizas un ataque de barrido frontal con una guadaña etérea que inflige {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% de daño. Al golpear a un enemigo con Cosechar, tu reducción de daño aumenta un 15% durante 2 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"esMX": "Generación de Esencia: 4 por cada enemigo golpeado\nProbabilidad de golpe afortunado: {#}%\nRevoleas una guadaña etérea frente a ti que inflige {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% de daño. Golpear a un enemigo con Segar aumenta tu reducción de daño un 15% durante 2 segundos.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"frFR": "Essence générée : 4 par cible touchée\nChances de coup de chance : {#}%\nVous donnez un large coup de faux éthérée devant vous, infligeant {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% points de dégâts. Lorsque vous touchez une cible avec Fauchage, votre réduction des dégâts est augmentée de 15% pendant 2 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"itIT": "Generazione essenza: 4 per ogni nemico colpito\nProbabilità di colpo fortunato: {#}%\nUna falce eterea spazza l'area di fronte a te, infliggendo {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% danni. Colpire un nemico con Mietitura aumenta la tua riduzione danni del 15% per 2 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"jaJP": "精髄生成量: 敵に命中するたびに4\n幸運の一撃発生率: {#}%\n 霊的な鎌で目の前を薙ぎ払い、{12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}%のダメージを与える。〈鎌切り〉が敵に命中すると受けるダメージが2秒間、15%軽減される。\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"koKR": "생성: 적중한 적 하나당 정수 4\n행운의 적중 확률: {#}%\n전방에 무형의 낫을 휘둘러 {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% 의 피해를 줍니다. 수확으로 적에게 공격을 적중시키면 2초 동안 피해 감소가 15% 증가합니다.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"plPL": "Generuje: 4 pkt. esencji za każdego trafionego wroga\nSzansa na szczęśliwy traf: {#}%\nWykonujesz przed sobą cięcie widmową kosą i zadajesz {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% pkt. obrażeń. Trafienie przeciwnika Żniwami zwiększa redukcję otrzymywanych przez ciebie obrażeń o 15% na 2 sek.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"ptBR": "Gerar Essência: 4 por inimigo atingido\nChance de Golpe de Sorte: {#}%\nVocê golpeia com uma foice etérea à sua frente, causando {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% de dano. Atingir um inimigo com Ceifar aumenta sua redução de dano em 15% por 2 segundos.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"ruRU": "Дает эссенцию: 4 ед. за каждого пораженного противника.\nВероятность удачного удара: {#}%.\nВы взмахиваете перед собой призрачной косой, нанося {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% ед. урона. Когда \"Жатва\" поражает противника, получаемый вами урон уменьшается на 15% на 2 сек.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"zhCN": "生成精魂:每命中一名敌人4点\n幸运一击几率:{#}%\n在你面前挥舞一把无形的镰刀,造成{12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}%点伤害。使用收割命中敌人会使你的伤害减免效果提高15%,持续2秒。\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction."
},
		id: 4,
		maxPoints: 5,
		values: [ "17" ],
		x: -498.75,
		y: -99.975
	},
	"Enhanced Reap": {
		baseSkill: "Reap",
		connections: [ "Reap", "Initiate's Reap", "Acolyte's Reap" ],
		description: `If an enemy hit by Reap dies within 2 seconds, you gain +30% Attack Speed for 3 seconds.

Tags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Verbesserte Blutige Ernte",
			"esES": "Cosechar mejorado",
			"esMX": "Segado Potenciado",
			"frFR": "Fauchage renforcé",
			"itIT": "Mietitura Rinforzata",
			"jaJP": "鎌切り(強化版)",
			"koKR": "강화된 수확",
			"plPL": "Wzmocnione Żniwa",
			"ptBR": "Ceifar Aperfeiçoado",
			"ruRU": "Усиленная жатва",
			"zhCN": "强化收割"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Gegner, der von Blutige Ernte getroffen wurde, innerhalb von 2 Sek. stirbt, erhaltet Ihr 3 Sek. lang +30% Angriffsgeschwindigkeit.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"esES": "Si un enemigo golpeado por Cosechar muere en los siguientes 2 s, obtienes un +30% de velocidad de ataque durante 3 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"esMX": "Si un enemigo golpeado por Segar muere dentro de un lapso de 2 segundos, obtienes un +30% de velocidad de ataque durante 3 segundos.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"frFR": "Si une cible touchée par Fauchage meurt dans les 2 s qui suivent, votre vitesse d'attaque est augmentée de +30% pendant 3 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"itIT": "Se un nemico colpito da Mietitura muore entro 2 s, la tua velocità d'attacco aumenta del +30% per 3 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"jaJP": "〈鎌切り〉が命中した敵が2秒以内に死亡すると3秒間、自身の攻撃速度が+30%上昇する。\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"koKR": "수확에 적중한 적이 2초 내에 죽으면, 3초 동안 공격 속도가 +30% 증가합니다.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"plPL": "Jeśli wróg trafiony Żniwami umrze w ciągu 2 sek., zyskasz +30% do szybkości ataku na 3 sek.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"ptBR": "Se um inimigo atingido por Ceifar morrer em 2 segundos, você recebe +30% de velocidade de ataque por 3 segundos.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"ruRU": "Когда противник, пораженный \"Жатвой\", погибает в течение 2 сек. после получения эффекта, ваша скорость атаки повышается на +30% на 3 сек.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"zhCN": "如果被收割命中的敌人在2秒内死亡,你的攻击速度提高+30%,持续3秒。\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction."
},
		id: 5,
		maxPoints: 1,
		x: -830.87,
		y: -161.91
	},
	"Initiate's Reap": {
		baseSkill: "Reap",
		connections: [ "Enhanced Reap" ],
		description: `Reap instantly kills targets below 5% Life.

This does not work on bosses or players.

Tags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Blutige Ernte des Initianden",
			"esES": "Cosechar del iniciado",
			"esMX": "Segado de Iniciado",
			"frFR": "Fauchage d'adepte",
			"itIT": "Mietitura degli Iniziati",
			"jaJP": "鎌切り(秘伝)",
			"koKR": "신병의 수확",
			"plPL": "Żniwa Nowicjusza",
			"ptBR": "Ceifar do Iniciado",
			"ruRU": "Жатва новичка",
			"zhCN": "学徒的收割"
},
		descriptionLocalized: {
			"deDE": "Blutige Ernte tötet Ziele, die weniger als 5% Leben haben, sofort.\n\nNicht bei Bossen und Spielern anwendbar.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"esES": "Cosechar mata al instante a objetivos que tengan menos de un 5% de vida.\n\nEsto no funciona con jefes ni jugadores.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"esMX": "Segar mata instantáneamente a los objetivos que tienen menos del 5% de vida.\n\nEsto no funciona en jefes o jugadores.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"frFR": "Fauchage tue instantanément les cibles ayant moins de 5% de points de vie.\n\nCet effet ne fonctionne pas sur les boss et les personnages-joueurs.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"itIT": "Mietitura uccide istantaneamente i bersagli con meno del 5% di Vita.\n\nNon funziona con i boss o gli utenti.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"jaJP": "〈鎌切り〉が、ライフが5%未満の敵を瞬時に処刑する。この効果はボスとプレイヤーには発動しない。\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"koKR": "수확이 생명력이 5% 미만인 적을 즉시 처치합니다. 이 효과는 우두머리나 플레이어에게는 발동하지 않습니다.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"plPL": "Żniwa natychmiast zabijają cele, które mają mniej niż 5% zdrowia.\n\nEfekt ten nie działa na bossów i graczy.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"ptBR": "Ceifar mata instantaneamente alvos com menos de 5% de vida.\n\nNão funciona em chefes ou jogadores.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"ruRU": "\"Жатва\" мгновенно добивает противников с уровнем здоровья ниже 5%. Не действует на боссов и игроков.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"zhCN": "收割会立即消灭生命低于5%的敌人。对首领或玩家无效。\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction."
},
		id: 6,
		maxPoints: 1,
		x: -921.775,
		y: -287.89
	},
	"Acolyte's Reap": {
		baseSkill: "Reap",
		connections: [ "Enhanced Reap" ],
		description: `Reap forms a Corpse under the first enemy hit. Can only occur every 5 seconds.

Tags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Blutige Ernte des Akolythen",
			"esES": "Cosechar del acólito",
			"esMX": "Segado de Acólito",
			"frFR": "Fauchage d'acolyte",
			"itIT": "Mietitura degli Accoliti",
			"jaJP": "鎌切り(従者)",
			"koKR": "시종의 수확",
			"plPL": "Żniwa Akolity",
			"ptBR": "Ceifar do Acólito",
			"ruRU": "Жатва послушника",
			"zhCN": "助祭的收割"
},
		descriptionLocalized: {
			"deDE": "Blutige Ernte erschafft eine Leiche unter dem ersten getroffenen Gegner. Kann nur einmal alle 5 Sek. auftreten.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"esES": "Cosechar forma un cadáver bajo el primer enemigo golpeado. Solo puede ocurrir una vez cada 5 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"esMX": "Segar genera un cadáver debajo del primer enemigo golpeado. Solo puede ocurrir cada 5 segundos.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"frFR": "Fauchage génère un cadavre sous la première cible touchée. Cet effet ne peut se produire qu'une fois toutes les 5 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"itIT": "Mietitura genera un cadavere sotto al primo nemico colpito. Può verificarsi solo una volta ogni 5 s.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"jaJP": "〈鎌切り〉使用時、最初に命中した敵の場所に死体を生成する。この効果は5秒に1回のみ発生する。\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"koKR": "수확이 처음 적중한 적 아래에 시체를 생성합니다. 이 효과는 5초에 한 번씩만 발동합니다.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"plPL": "Żniwa tworzą zwłoki pod pierwszym trafionym wrogiem. Efekt ten może wystąpić raz na 5 sek.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"ptBR": "Ceifar forma um cadáver embaixo do primeiro inimigo atingido. Só pode ocorrer a cada 5 segundos.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"ruRU": "\"Жатва\" создает труп под первым пораженным противником. Срабатывает не чаще раза в 5 сек.\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.",
			"zhCN": "收割命中第一名敌人时生成一具亡骸。该效果每5秒只能触发一次。\n\nTags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction."
},
		id: 7,
		maxPoints: 1,
		x: -1072.505,
		y: -107.4
	},
	"Hemorrhage": {
		connections: [ "Enhanced Hemorrhage", "Basic" ],
		description: `Generate Essence: 8
Lucky Hit Chance: {#}%
Burst an enemy's blood, dealing {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage. Hemorrhage has a 20% chance to form a Blood Orb.

Tags: Basic, Blood, Blood Orb, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Blutsturz",
			"esES": "Hemorragia",
			"esMX": "Hemorragia",
			"frFR": "Saignée",
			"itIT": "Emorragia",
			"jaJP": "出血",
			"koKR": "과다출혈",
			"plPL": "Krwotok",
			"ptBR": "Hemorragia",
			"ruRU": "Кровоизлияние",
			"zhCN": "出血"
},
		descriptionLocalized: {
			"deDE": "Essenz erzeugen: 8\nGlückstrefferchance: {#}%\nVerspritzt das Blut eines Gegners und fügt ihm {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% Schaden zu. Blutsturz hat eine Chance von 20%, eine Blutkugel zu erzeugen.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"esES": "Generación de esencia: 8\nProbabilidad de golpe de suerte: {#}%\nHaces brotar la sangre de un enemigo para infligirle {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño. Hemorragia tiene un 20% de probabilidad de generar un orbe de sangre.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"esMX": "Generación de Esencia: 8\nProbabilidad de golpe afortunado: {#}%\nHaces estallar la sangre de un enemigo y le infliges {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño. Hemorragia tiene un 20% de probabilidad de formar un Orbe de Sangre.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"frFR": "Essence générée : 8\nChances de coup de chance : {#}%\nVous faites gicler le sang d'une cible et lui infligez {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% points de dégâts. Saignée a 20% de chances de générer un orbe de sang.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"itIT": "Generazione essenza: 8\nProbabilità di colpo fortunato: {#}%\nFai esplodere il sangue di un nemico, infliggendo {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% danni. Emorragia ha una probabilità del 20% di generare un Globo di Sangue.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"jaJP": "精髄生成量: 8\n幸運の一撃発生率: {#}%\n敵の血液を爆発させ、{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%のダメージを与える。〈出血〉が20%の確率で〈血のオーブ〉を形成する。\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"koKR": "생성: 정수 8\n행운의 적중 확률: {#}%\n적의 피를 폭발시켜 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%의 피해를 줍니다. 과다출혈이 20% 확률로 피의 구슬을 생성합니다.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"plPL": "Generuje: 8 pkt. esencji\nSzansa na szczęśliwy traf: {#}%\nPowodujesz eksplozję krwi wroga, zadając {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% pkt. obrażeń. Krwotok ma o 20% zwiększoną szansę na utworzenie krwawej kuli.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"ptBR": "Gerar Essência: 8\nChance de Golpe de Sorte: {#}%\nExplode o sangue de um inimigo, causando {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de dano. Hemorragia tem 20% de chance de formar um orbe de sangue.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"ruRU": "Дает эссенцию: 8 ед.\nВероятность удачного удара: {#}%.\nВы пускаете противнику кровь, нанося {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% ед. урона. \"Кровоизлияние\" с вероятностью 20% создает сферу крови.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"zhCN": "生成精魂:8\n幸运一击几率:{#}%\n使一名敌人出血,造成{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%点伤害。出血额外有20%几率生成一颗生命球。\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence."
},
		id: 8,
		maxPoints: 5,
		values: [ "40" ],
		x: 214.396,
		y: -265.9
	},
	"Enhanced Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Hemorrhage", "Acolyte's Hemorrhage", "Initiate's Hemorrhage" ],
		description: `After picking up a Blood Orb, your next Hemorrhage also deals damage to enemies around your target and grants 2 additional Essence per enemy hit.

Tags: Basic, Blood, Blood Orb, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Verbesserter Blutsturz",
			"esES": "Hemorragia mejorada",
			"esMX": "Hemorragia Potenciada",
			"frFR": "Saignée renforcée",
			"itIT": "Emorragia Rinforzata",
			"jaJP": "出血(強化版)",
			"koKR": "강화된 과다출혈",
			"plPL": "Wzmocniony Krwotok",
			"ptBR": "Hemorragia Aperfeiçoada",
			"ruRU": "Усиленное кровоизлияние",
			"zhCN": "强化出血"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr eine Blutkugel aufgesammelt habt, fügt Euer nächster Blutsturz auch Gegnern in der Nähe Eures Ziels Schaden zu und gewährt 2 zusätzliche Essenz für jeden getroffenen Gegner.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"esES": "Tras recoger un orbe de sangre, tu siguiente Hemorragia también inflige daño a los enemigos que rodean a tu objetivo y te otorga 2 más de esencia por cada enemigo golpeado.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"esMX": "Luego de recoger un Orbe de Sangre, tu siguiente Hemorragia también inflige daño a los enemigos que rodean a tu objetivo y te otorga 2 de Esencia adicional por enemigo golpeado.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"frFR": "Après avoir ramassé un orbe de sang, votre prochaine Saignée inflige aussi des dégâts aux adversaires autour de votre cible et vous confère 2 points d'essence supplémentaires par cible touchée.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"itIT": "Dopo aver raccolto un Globo di Sangue, il prossimo utilizzo di Emorragia infligge danni anche ai nemici intorno al bersaglio e fornisce inoltre 2 essenza aggiuntiva per ogni nemico colpito.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"jaJP": "〈血のオーブ〉を拾った後、次の〈出血〉が標的の周囲の敵にもダメージを与え、命中した敵1体ごとに精髄を2獲得する。\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"koKR": "피의 구슬을 획득하면 다음 과다출혈이 대상 주위의 적에게도 피해를 주고 적중한 적 하나당 정수를 추가로 2 생성합니다.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"plPL": "Po podniesieniu krwawej kuli twój następny Krwotok zada również obrażenia wrogom wokół twojego celu i zapewni dodatkowo 2 pkt. esencji za każdego trafionego przeciwnika.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"ptBR": "Depois de coletar um orbe de sangue, sua próxima Hemorragia também causa dano a inimigos ao redor do alvo e concede 2 de essência adicional por inimigo atingido.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"ruRU": "Когда вы подбираете сферу крови, следующее \"Кровоизлияние\" также наносит урон противникам вокруг цели и дает еще 2 ед. эссенции за каждого пораженного противника.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"zhCN": "拾取一颗生命球后,你下一个出血也会对你目标周围的敌人造成伤害,并且每命中一名敌人额外获得2点精魂。\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence."
},
		id: 9,
		maxPoints: 1,
		x: 356.625,
		y: -432.41
	},
	"Acolyte's Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Enhanced Hemorrhage" ],
		description: `Hemorrhage gains an additional +20% Attack Speed while Healthy.

Tags: Basic, Blood, Blood Orb, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Blutsturz des Akolythen",
			"esES": "Hemorragia del acólito",
			"esMX": "Hemorragia de Acólito",
			"frFR": "Saignée d'acolyte",
			"itIT": "Emorragia degli Accoliti",
			"jaJP": "出血(従者)",
			"koKR": "시종의 과다출혈",
			"plPL": "Krwotok Akolity",
			"ptBR": "Hemorragia do Acólito",
			"ruRU": "Кровоизлияние послушника",
			"zhCN": "助祭的出血"
},
		descriptionLocalized: {
			"deDE": "Blutsturz erhält zusätzlich +20% Angriffsgeschwindigkeit, während Ihr gesund seid.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"esES": "Hemorragia otorga un +20% más de velocidad de ataque mientras estás saludable.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"esMX": "Hemorragia obtiene un +20% más de velocidad de ataque mientras estás saludable.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"frFR": "La vitesse d'attaque de Saignée est augmentée de +20% supplémentaires lorsque vous êtes en bonne santé.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"itIT": "La velocità d'attacco di Emorragia aumenta del +20% mentre sei in salute.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"jaJP": "健全状態の時、〈出血〉の攻撃速度が+20%上昇する。\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"koKR": "건강 상태에서 과다출혈이 공격 속도를 추가로 +20% 증가시킵니다.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"plPL": "Krwotok zapewnia dodatkową premię +20% do szybkości ataku, gdy jesteś w pełni sił.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"ptBR": "Hemorragia recebe +20% de velocidade de ataque adicional enquanto saudável.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"ruRU": "Пока у вас высокий уровень здоровья, скорость атаки \"Кровоизлияния\" повышается на +20%.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"zhCN": "健康状态下,出血额外获得+20%攻击速度加成。\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence."
},
		id: 10,
		maxPoints: 1,
		x: 607.455,
		y: -493.645
	},
	"Initiate's Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Enhanced Hemorrhage" ],
		description: `Hemorrhage grants 1.6% Base Life as Fortify each time it hits an enemy, and has a 1.5% chance per enemy hit to Fortify you for 100% Base Life.

Tags: Basic, Blood, Blood Orb, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Blutsturz des Initianden",
			"esES": "Hemorragia del iniciado",
			"esMX": "Hemorragia de Iniciado",
			"frFR": "Saignée d'adepte",
			"itIT": "Emorragia degli Iniziati",
			"jaJP": "出血(秘伝)",
			"koKR": "신병의 과다출혈",
			"plPL": "Krwotok Nowicjusza",
			"ptBR": "Hemorragia do Iniciado",
			"ruRU": "Кровоизлияние новичка",
			"zhCN": "学徒的出血"
},
		descriptionLocalized: {
			"deDE": "Blutsturz verleiht jedes Mal, wenn ein Gegner getroffen wird, 1.6% Basisleben als Stählung und verfügt über eine Chance von 1.5% für jeden getroffenen Gegner, Stählung in Höhe von 100% Eures Basislebens zu verleihen.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"esES": "Hemorragia te otorga un 1.6% de tu vida base como fortificación cada vez que golpea a un enemigo y tiene un 1.5% de probabilidad por cada enemigo golpeado de fortificar un 100% de tu vida base.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"esMX": "Hemorragia te otorga un 1.6% de tu vida de base como fortificación cada vez que golpea a un enemigo, y tiene un 1.5% de probabilidad de fortificarte con un 100% de tu vida de base por enemigo golpeado.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"frFR": "Saignée vous confère un montant de fortification égal à 1.6% de vos points de vie de base chaque fois qu'elle touche une cible, et a 1.5% de chances de vous conférer un montant de fortification égal à 100% de vos points de vie de base par cible touchée.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"itIT": "Emorragia fornisce il 1.6% della Vita base come Fortificazione ogni volta che colpisce un nemico, e ha una probabilità del 1.5% di fornirti Fortificazione per il 100% della Vita base per ogni nemico colpito.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"jaJP": "〈出血〉が敵に命中するたびに基本ライフの1.6%にあたるの強化を獲得し、命中した敵1体ごとに1.5%の確率で、基本ライフの100%にあたるの強化を獲得する。\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"koKR": "과다출혈이 적에게 적중할 때마다 자신을 기본 생명력의 1.6%만큼 보강하고, 적에게 적중할 때마다 1.5% 확률로 자신을 기본 생명력의 100%만큼 보강합니다.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"plPL": "Krwotok zapewnia 1.6% podstawowego zdrowia jako umocnienie za każdym razem, gdy trafi wroga. W przypadku każdego trafionego wroga zapewnia 1.5% szans na umocnienie równe 100% twojego podstawowego zdrowia.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"ptBR": "Hemorragia concede 1.6% de vida básica como fortificação sempre que atinge um inimigo, e tem 1.5% de chance por inimigo atingido de fortificar você em 100% da vida básica.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"ruRU": "\"Кровоизлияние\" дает вам укрепление в объеме 1.6% базового запаса здоровья каждый раз, когда поражает противника, а также с вероятностью 1.5% за каждого пораженного противника может дать вам укрепление в объеме 100% базового запаса здоровья.\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence.",
			"zhCN": "出血每次命中敌人,强固你1.6%基础生命,而且每命中一名敌人有1.5%几率强固你100%基础生命。\n\nTags: Basic, Blood, Blood Orb, Damage, Physical, Essence."
},
		id: 11,
		maxPoints: 1,
		x: 328.303,
		y: -569.91
	},
	"Bone Splinters": {
		connections: [ "Enhanced Bone Splinters", "Basic" ],
		description: `Generate Essence: 5
Lucky Hit Chance: {#}%
Fire 3 bone splinters, dealing {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% damage each. Each subsequent time an enemy is hit by the same cast of Bone Splinters, you gain 1 Essence.

Tags: Basic, Bone, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Knochensplitter",
			"esES": "Astillas de hueso",
			"esMX": "Astillas Óseas",
			"frFR": "Éclats d'os",
			"itIT": "Spezzaossa",
			"jaJP": "ボーン・スプリンター",
			"koKR": "뼈 파편",
			"plPL": "Kościane Odłamki",
			"ptBR": "Estilhaços Ósseos",
			"ruRU": "Костяные осколки",
			"zhCN": "白骨碎片"
},
		descriptionLocalized: {
			"deDE": "Essenz erzeugen: 5\nGlückstrefferchance: {#}%\nFeuert 3 Knochensplitter ab, die jeweils {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% Schaden verursachen. Jedes Mal, wenn ein Gegner von demselben Wirken von Knochensplitter getroffen wird, erhaltet Ihr 1 Essenz.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"esES": "Generación de esencia: 5\nProbabilidad de golpe de suerte: {#}%\nDisparas 3 astillas de hueso que infligen {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% de daño cada una. Cada vez que un enemigo recibe golpes de un mismo lanzamiento de Astillas de hueso, obtienes 1 de esencia.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"esMX": "Generación de Esencia: 5\nProbabilidad de golpe afortunado: {#}%\nDisparas 3 astillas óseas que infligen {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% de daño cada una. Cada vez consecutiva que un enemigo es golpeado por el mismo lanzamiento de Astillas Óseas, obtienes 1 de Esencia.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"frFR": "Essence générée : 5\nChances de coup de chance : {#}%\nVous lancez 3 éclats d'os infligeant {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% points de dégâts chacun. Chaque cible supplémentaire touchée par la même utilisation d'Éclat d'os vous fait gagner 1 points d'essence.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"itIT": "Generazione essenza: 5\nProbabilità di colpo fortunato: {#}%\nLanci 3 Spezzaossa, che infliggono {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% danni ciascuno. A ogni successivo colpo a segno della stessa raffica di Spezzaossa, ottieni 1 essenza.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"jaJP": "精髄生成量: 5\n幸運の一撃発生率: {#}%\n〈ボーン・スプリンター〉を3発放ち、それぞれ{22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}%のダメージを与える。一度の〈ボーン・スプリンター〉の発動中に2発目以降が敵に命中するたびに、精髄を1獲得する。\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"koKR": "생성: 정수 5\n행운의 적중 확률: {#}%\n뼈 파편 3개를 발사하여 각각 {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}%의 피해를 줍니다. 뼈 파편을 한 번 시전하여 적이 적중할 때마다 정수를 1 얻습니다.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"plPL": "Generuje: 5 pkt. esencji\nSzansa na szczęśliwy traf: {#}%\nWypuszczasz 3 Kościane Odłamki, zadając {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% pkt. obrażeń każdym. Za każdym razem, gdy kolejny wróg zostanie trafiony tymi samymi odłamkami, zyskujesz 1 pkt. esencji.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"ptBR": "Gerar Essência: 5\nChance de Golpe de Sorte: {#}%\nDispara 3 estilhaços ósseos. Cada um causa {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% de dano. Cada vez subsequente que um inimigo é atingido pelo mesmo lançamento de Estilhaços Ósseos, você recebe 1 de essência.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"ruRU": "Дает эссенцию: 5 ед.\nВероятность удачного удара: {#}%.\nВы выпускаете 3 костяных осколка, наносящих по {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% ед. урона. Когда \"Костяные осколки\", вызванные одним применением, поражают одну и ту же цель более одного раза, вы накапливаете по 1 ед. эссенции.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"zhCN": "生成精魂:5\n幸运一击几率:{#}%\n发射3枚白骨碎片,每枚碎片造成{22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}%点伤害。随后每次敌人被单次施放的白骨碎片命中时,你都会获得1点精魂。\n\nTags: Basic, Bone, Damage, Physical, Essence."
},
		id: 12,
		maxPoints: 5,
		values: [ "17" ],
		x: 488.405,
		y: -91.8
	},
	"Enhanced Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Bone Splinters", "Acolyte's Bone Splinters", "Initiate's Bone Splinters" ],
		description: `Bone Splinters has a 30% chance to fire 2 additional projectiles if cast while you have 50 or more Essence.

Tags: Basic, Bone, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Verbesserte Knochensplitter",
			"esES": "Astillas de hueso mejoradas",
			"esMX": "Astillas Óseas Potenciadas",
			"frFR": "Éclats d'os renforcés",
			"itIT": "Spezzaossa Rinforzato",
			"jaJP": "ボーン・スプリンター(強化版)",
			"koKR": "강화된 뼈 파편",
			"plPL": "Wzmocnione Kościane Odłamki",
			"ptBR": "Estilhaços Ósseos Aperfeiçoados",
			"ruRU": "Усиленные костяные осколки",
			"zhCN": "强化白骨碎片"
},
		descriptionLocalized: {
			"deDE": "Knochensplitter verfügt über eine Chance von 30%, 2 zusätzliche Projekte abzufeuern, wenn Ihr beim Wirken mindestens 50 Essenz habt.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"esES": "Astillas de hueso tiene un 30% de probabilidad de disparar 2 proyectiles adicionales si la lanzas mientras tienes 50 de esencia o más.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"esMX": "Astillas Óseas tiene un 30% de probabilidad de arrojar 2 proyectiles adicionales si lanzas esta habilidad mientras tienes 50 de Esencia o más.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"frFR": "Éclats d'os a 30% de chances de lancer 2 projectiles supplémentaires si vous avez au moins 50 points d'essence au moment de son utilisation.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"itIT": "Spezzaossa ha una probabilità del 30% di emettere 2 proiettili aggiuntivi se viene lanciato mentre hai 50 o più essenza.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"jaJP": "残りの精髄が50以上の時に〈ボーン・スプリンター〉を使うと、30%の確率で追加の投射体を2発放つ。\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"koKR": "정수가 50 이상일 때 뼈 파편을 시전하면 30% 확률로 추가 투사체가 2개 발사됩니다.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"plPL": "Kościane Odłamki mają 30% szans na wystrzelenie dodatkowych pocisków (2), jeśli użyjesz umiejętności, mając co najmniej 50 pkt. esencji.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"ptBR": "Estilhaços Ósseos tem 30% de chance de disparar 2 projéteis adicionais se a habilidade for lançada enquanto você tem 50 ou mais de essência.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"ruRU": "\"Костяные осколки\" с вероятностью 30% выпускают еще 2 снаряда:снарядов, если на момент применения у вас есть 50 ед. эссенции или более.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"zhCN": "释放技能时,如果你拥有50点及更多精魂,白骨碎片则有30%几率额外发射2枚投射物。\n\nTags: Basic, Bone, Damage, Physical, Essence."
},
		id: 13,
		maxPoints: 1,
		x: 877.154,
		y: -161.18
	},
	"Acolyte's Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Enhanced Bone Splinters" ],
		description: `Hitting the same enemy at least 3 times with the same cast of Bone Splinters grants +8% Critical Strike Chance for 4 seconds.

Tags: Basic, Bone, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Knochensplitter des Akolythen",
			"esES": "Astillas de hueso del acólito",
			"esMX": "Astillas Óseas de Acólito",
			"frFR": "Éclats d'os d'acolyte",
			"itIT": "Spezzaossa degli Accoliti",
			"jaJP": "ボーン・スプリンター(従者)",
			"koKR": "시종의 뼈 파편",
			"plPL": "Kościane Odłamki Akolity",
			"ptBR": "Estilhaços Ósseos do Acólito",
			"ruRU": "Костяные осколки послушника",
			"zhCN": "助祭白骨碎片"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr denselben Gegner mindestens 3-mal mit demselben Wirken von Knochensplitter trefft, werden 4 Sek. lang +8% kritische Trefferchance gewährt.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"esES": "Golpear al mismo enemigo al menos 3 veces con un mismo lanzamiento de Astillas de hueso te otorga un +8% de probabilidad de golpe crítico durante 4 s.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"esMX": "Golpear al mismo enemigo al menos 3 veces con el mismo lanzamiento de Astillas Óseas te otorga un +8% de probabilidad de golpe crítico durante 4 segundos.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"frFR": "Si une seule utilisation d'Éclats d'os touche la même cible au moins 3 fois, vos chances d'infliger un coup critique sont augmentées de +8% pendant 4 s.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"itIT": "Colpendo lo stesso nemico almeno 3 volte con la stessa raffica di Spezzaossa ottieni una probabilità di critico del +8% per 4 s.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"jaJP": "〈ボーン・スプリンター〉が一度の使用で最低3回敵に命中するたびに4秒間、クリティカルヒット率が+8%上昇する。\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"koKR": "뼈 파편을 시전하여 한 번에 동일한 적에게 3번 이상 공격을 적중시키면 4초 동안 극대화 확률이 +8% 증가합니다.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"plPL": "Trafienie tego samego wroga przynajmniej 3 razy jednym użyciem Kościanych Odłamków zapewnia premię +8% do szansy na trafienie krytyczne na 4 sek.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"ptBR": "Atingir o mesmo inimigo pelo menos 3 vezes com o mesmo lançamento de Estilhaços Ósseos concede +8% de chance de acerto crítico por 4 segundos.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"ruRU": "Когда \"Костяные осколки\" поражают одного противника 3 раза:раз за одно применение, вероятность критического удара повышается на +8% на 4 сек.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"zhCN": "同一次施放的白骨碎片命中相同敌人至少3次后,获得+8%暴击几率加成,持续4秒。\n\nTags: Basic, Bone, Damage, Physical, Essence."
},
		id: 14,
		maxPoints: 1,
		x: 1137.875,
		y: -122.755
	},
	"Initiate's Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Enhanced Bone Splinters" ],
		description: `Bone Splinters has a 20% chance per hit to make enemies Vulnerable for 2 seconds.

Tags: Basic, Bone, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Knochensplitter des Initianden",
			"esES": "Astillas de hueso del iniciado",
			"esMX": "Astillas Óseas de Iniciado",
			"frFR": "Éclats d'os d'adepte",
			"itIT": "Spezzaossa degli Iniziati",
			"jaJP": "ボーン・スプリンター(秘伝)",
			"koKR": "신병의 뼈 파편",
			"plPL": "Kościane Odłamki Nowicjusza",
			"ptBR": "Estilhaços Ósseos do Iniciado",
			"ruRU": "Костяные осколки новичка",
			"zhCN": "学徒的白骨碎片"
},
		descriptionLocalized: {
			"deDE": "Knochensplitter verfügt über eine Chance von 20%, Gegner 2 Sek. lang verwundbar zu machen.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"esES": "Astillas de hueso tiene un 20% de probabilidad por impacto de volver vulnerables a los enemigos durante 2 s.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"esMX": "Astillas Óseas tiene un 20% de probabilidad por golpe de volver a los enemigos vulnerables durante 2 segundos.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"frFR": "Éclats d'os a 20% de chances par coup de rendre les adversaires vulnérables pendant 2 s.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"itIT": "Ogni colpo a segno di Spezzaossa ha una probabilità del 20% di rendere i nemici vulnerabili per 2 s.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"jaJP": "〈ボーン・スプリンター〉が20%}の確率で敵を2秒間、脆弱状態にする。\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"koKR": "뼈 파편이 적중당 20% 확률로 적을 2초 동안 취약하게 만듭니다.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"plPL": "Każde trafienie Kościanymi Odłamkami ma 20% szans na odsłonięcie wrogów na 2 sek.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"ptBR": "Estilhaços Ósseos tem 20% de chance por acerto de tornar os inimigos vulneráveis por 2 segundos.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"ruRU": "\"Костяные осколки\" с вероятностью 20% за попадание делают противников уязвимыми на 2 сек.\n\nTags: Basic, Bone, Damage, Physical, Essence.",
			"zhCN": "白骨碎片每次命中都有20%几率使敌人陷入易伤状态,持续2秒。\n\nTags: Basic, Bone, Damage, Physical, Essence."
},
		id: 15,
		maxPoints: 1,
		x: 989.495,
		y: -302.135
	},
};

necromancerData["Core"] = {
	"Blight": {
		connections: [ "Enhanced Blight", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Unleash concentrated blight that deals {30/33/36/39/42/45/48/51/54/57}% damage and leaves behind a defiled area, dealing {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% damage over 6 seconds.

Tags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.`,
		nameLocalized: {
			"deDE": "Pest",
			"esES": "Peste",
			"esMX": "Infestación",
			"frFR": "Chancre",
			"itIT": "Morbo",
			"jaJP": "病害",
			"koKR": "마름병",
			"plPL": "Mór",
			"ptBR": "Praga",
			"ruRU": "Тлен",
			"zhCN": "枯萎"
},
		descriptionLocalized: {
			"deDE": "Essenzkosten: {#}\nGlückstrefferchance: {#}%\nEntfesselt eine konzentrierte Pest, die {30/33/36/39/42/45/48/51/54/57}% Schaden verursacht und ein verunreinigtes Gebiet zurücklässt, das im Verlauf von 6 Sek. {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% Schaden verursacht.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"esES": "Coste de esencia: {#}\nProbabilidad de golpe de suerte: {#}%\nLanzas una peste concentrada que inflige {30/33/36/39/42/45/48/51/54/57}% de daño y deja tras de sí una zona ultrajada que inflige {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% de daño durante 6 s.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"esMX": "Costo de Esencia: {#}\nProbabilidad de golpea afortunado: {#}%\nLiberas una infestación concentrada que inflige {30/33/36/39/42/45/48/51/54/57}% de daño y contamina un área, lo que a su vez inflige {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% de daño durante 6 segundos.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"frFR": "Coût en essence : {#}\nChances de coup de chance : {#}%\nVous libérez un chancre concentré qui inflige {30/33/36/39/42/45/48/51/54/57}% points de dégâts à l'impact et laisse derrière lui une zone souillée qui inflige {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% points de dégâts en 6 s.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"itIT": "Costo in essenza: {#}\nProbabilità di colpo fortunato: {#}%\nScatena del morbo concentrato che infligge {30/33/36/39/42/45/48/51/54/57}% danni e lascia dietro di sé un'area corrotta, infliggendo {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% danni in 6 s.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"jaJP": "精髄消費量: {#}\n幸運の一撃発生率: {#}%\n濃縮した〈病害〉を解き放って{30/33/36/39/42/45/48/51/54/57}%のダメージを与え、さらに一帯を汚して6秒間かけて{79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}%のダメージを与える。\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"koKR": "소모: 정수 {#}\n행운의 적중 확률: {#}%\n집중된 마름병을 방출하여 {30/33/36/39/42/45/48/51/54/57}%의 피해를 주고, 부정한 지대를 남겨 6초에 걸쳐 {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}%의 피해를 줍니다.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"plPL": "Koszt: {#} pkt. esencji\nSzansa na szczęśliwy traf: {#}%\nWyzwalasz skoncentrowaną energię moru, która zadaje {30/33/36/39/42/45/48/51/54/57}% pkt. obrażeń i pozostawia skażony obszar zadający {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% pkt. obrażeń w ciągu 6 sek.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"ptBR": "Custo de essência: {#}\nChance de Golpe de Sorte: {#}%\nLibera uma praga concentrada que causa {30/33/36/39/42/45/48/51/54/57}% de dano e deixa para trás uma área corrompida, causando {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% de dano ao longo de 6 segundos.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"ruRU": "Затраты эссенции: {#} ед.\nВероятность удачного удара: {#}%.\nВы выпускаете концентрированную гниль, наносящую {30/33/36/39/42/45/48/51/54/57}% ед. урона и оставляющую область порчи, которая наносит {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% ед. урона за 6 сек.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"zhCN": "精魂消耗:{#}\n幸运一击几率:{#}%\n释放浓缩枯萎,造成{30/33/36/39/42/45/48/51/54/57}%点伤害并留下一片亵渎区域,在6秒内造成{79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}%点伤害。\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence."
},
		id: 16,
		maxPoints: 5,
		values: [ "25", "40" ],
		x: -543.69,
		y: 87.56
	},
	"Enhanced Blight": {
		baseSkill: "Blight",
		connections: [ "Blight", "Paranormal Blight", "Supernatural Blight" ],
		description: `Blight Slows enemies by 25%.

Tags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.`,
		nameLocalized: {
			"deDE": "Verbesserte Pest",
			"esES": "Peste mejorada",
			"esMX": "Infestación Potenciada",
			"frFR": "Chancre renforcé",
			"itIT": "Morbo Rinforzato",
			"jaJP": "病害(強化版)",
			"koKR": "강화된 마름병",
			"plPL": "Wzmocniony Mór",
			"ptBR": "Praga Aperfeiçoada",
			"ruRU": "Усиленный тлен",
			"zhCN": "强化枯萎"
},
		descriptionLocalized: {
			"deDE": "Pest verlangsamt Gegner um 25%.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"esES": "Peste ralentiza un 25% a los enemigos.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"esMX": "Infestación ralentiza a los enemigos un 25%.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"frFR": "Le chancre ralentit les adversaires de 25%.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"itIT": "Morbo rallenta i nemici del 25%.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"jaJP": "〈病害〉が敵の移動速度を25%低下させる。\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"koKR": "마름병이 적을 25% 감속시킵니다.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"plPL": "Mór spowalnia wrogów o 25%.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"ptBR": "Praga desacelera inimigos em 25%.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"ruRU": "\"Тлен\" замедляет противников на 25%.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"zhCN": "枯萎使敌人减速25%。\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence."
},
		id: 17,
		maxPoints: 1,
		x: -922.335,
		y: 147.785
	},
	"Paranormal Blight": {
		baseSkill: "Blight",
		connections: [ "Enhanced Blight" ],
		description: `Blight has a 30% chance to Immobilize enemies for 1.5 seconds on impact.

Tags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.`,
		nameLocalized: {
			"deDE": "Paranormale Pest",
			"esES": "Peste paranormal",
			"esMX": "Infestación Paranormal",
			"frFR": "Chancre paranormal",
			"itIT": "Morbo Paranormale",
			"jaJP": "病害(超常)",
			"koKR": "불가사의 마름병",
			"plPL": "Paranormalny Mór",
			"ptBR": "Praga Paranormal",
			"ruRU": "Паранормальный тлен",
			"zhCN": "灵异枯萎"
},
		descriptionLocalized: {
			"deDE": "Pest verfügt über eine Chance von 30%, Gegner beim Aufprall 1.5 Sek. lang bewegungsunfähig zu machen.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"esES": "Peste tiene un 30% de probabilidad de inmovilizar a los enemigos durante 1.5 s al impactar.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"esMX": "Infestación tiene un 30% de probabilidad de inmovilizar a los enemigos golpeados durante 1.5 segundos.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"frFR": "Chancre a 30% de chances d'immobiliser les adversaires pendant 1.5 s à l'impact.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"itIT": "Morbo ha una probabilità del 30% di immobilizzare i nemici all'impatto per 1.5 s.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"jaJP": "〈病害〉が命中した敵が30%の確率で1.5秒間、移動不能になる。\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"koKR": "마름병에 걸린 적이 30% 확률로 1.5초 동안 이동 불가 상태가 됩니다.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"plPL": "Mór ma 30% szans na unieruchomienie wrogów na 1.5 sek. po ich trafieniu.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"ptBR": "Praga tem 30% de chance de imobilizar inimigos por 1.5 segundos no impacto.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"ruRU": "При попадании \"Тлен\" с вероятностью 30% обездвиживает цель на 1.5 сек.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"zhCN": "枯萎命中敌人时有30%几率使其定身1.5秒。\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence."
},
		id: 18,
		maxPoints: 1,
		x: -1096.55,
		y: 268.61
	},
	"Supernatural Blight": {
		baseSkill: "Blight",
		connections: [ "Enhanced Blight" ],
		description: `You and your Minions deal x15% increased damage to enemies within Blight.

Tags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.`,
		nameLocalized: {
			"deDE": "Übernatürliche Pest",
			"esES": "Peste sobrenatural",
			"esMX": "Infestación Sobrenatural",
			"frFR": "Chancre surnaturel",
			"itIT": "Morbo Sovrannaturale",
			"jaJP": "病害(超自然)",
			"koKR": "초자연적 마름병",
			"plPL": "Nadnaturalny Mór",
			"ptBR": "Praga Sobrenatural",
			"ruRU": "Сверхъестественный тлен",
			"zhCN": "超自然枯萎"
},
		descriptionLocalized: {
			"deDE": "Ihr und Eure Diener fügen Gegnern in Reichweite von Pest x15% mehr Schaden zu.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"esES": "Tus esbirros y tú infligís un x15% más de daño a los enemigos en el interior de la peste.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"esMX": "Tú y tus esbirros infligen un x15% más de daño a los enemigos con Infestación.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"frFR": "Vous et vos serviteurs infligez x15% de dégâts supplémentaires aux cibles dans le chancre.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"itIT": "Tu e i tuoi servitori infliggete il x15% di danni aggiuntivi ai bersagli affetti da Morbo.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"jaJP": "〈病害〉の範囲内の敵に自身とミニオンが与えるダメージがx15%増加する。\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"koKR": "자신과 하수인이 마름병에 걸린 적에게 주는 피해가 x15% 증가합니다.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"plPL": "Ty i twoje sługi zadajecie obrażenia niefizyczne zwiększone o x15% wrogom objętym Morem.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"ptBR": "Você e seus lacaios causam 15% de dano aumentado a inimigos na área de Praga.\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"ruRU": "Вы и ваши прислужники наносите на x15% больше урона противникам в области действия \"Тлена\".\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.",
			"zhCN": "你和你的仆从对枯萎范围内的敌人造成的伤害提高x15%。\n\nTags: Core, Darkness, Damage, Shadow Damage Over Time, Essence."
},
		id: 19,
		maxPoints: 1,
		x: -1190.43,
		y: 103.745
	},
	"Sever": {
		connections: [ "Enhanced Sever", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
A specter of you charges forward and attacks with its scythe for {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% damage then returns to you and attacks again for {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% damage.

Tags: Core, Darkness, Damage, Shadow, Essence.`,
		nameLocalized: {
			"deDE": "Schnitter",
			"esES": "Cercenar",
			"esMX": "Escindir",
			"frFR": "Section",
			"itIT": "Smembramento",
			"jaJP": "切断",
			"koKR": "절단",
			"plPL": "Rozdarcie",
			"ptBR": "Decepar",
			"ruRU": "Отсечение",
			"zhCN": "挥斩"
},
		descriptionLocalized: {
			"deDE": "Essenzkosten: {#}\nGlückstrefferchance: {#}%\nEin Phantom von Euch stürmt vorwärts, greift mit seiner Sense an und verursacht {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% Schaden, bevor es zu Euch zurückkehrt, erneut angreift und {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% Schaden verursacht.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"esES": "Coste de esencia: {#}\nProbabilidad de golpe de suerte: {#}%\nUn espectro tuyo carga hacia delante, ataca con su guadaña e inflige {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% de daño. Después regresa a tu lado y vuelve a atacar para infligir {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de daño.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"esMX": "Costo de Esencia: {#}\nProbabilidad de golpe afortunado: {#}%\nUn espectro de ti arremete hacia adelante, ataca con su guadaña e inflige {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% de daño. Luego regresa hacia ti, ataca de nuevo e inflige {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de daño.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"frFR": "Coût en essence : {#}\nChances de coup de chance : {#}%\nVotre forme spectrale charge vers l'avant en infligeant {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% points de dégâts avec sa faux puis revient vers vous en infligeant {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% points de dégâts.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"itIT": "Costo in essenza: {#}\nProbabilità di colpo fortunato: {#}%\nUn tuo spettro carica in avanti e attacca con la falce infliggendo {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% danni, per poi tornare verso di te e attaccare nuovamente infliggendo {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% danni.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"jaJP": "精髄消費量: {#}\n幸運の一撃発生率: {#}%\n自身の生き霊が前方に突進し、鎌で攻撃して{63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}%のダメージを与えた後、戻ってきてから再度攻撃して{21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}%のダメージを与える。\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"koKR": "소모: 정수 {#}\n행운의 적중 확률: {#}%\n자신의 귀신이 앞으로 돌진하며 낫으로 공격해 {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}%의 피해를 주고, 자신에게 돌아오며 다시 공격해 {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}%의 피해를 줍니다.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"plPL": "Koszt: {#} pkt. esencji.\nSzansa na szczęśliwy traf: {#}%\nTwoje widmo rusza gwałtownie naprzód i atakuje swoją kosą, zadając {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% pkt. obrażeń, a następnie wraca do ciebie i zadaje ponownie {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% pkt. obrażeń.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"ptBR": "Custo de essência: {#}\nChance de Golpe de Sorte: {#}%\nUm espectro seu avança e ataca com sua foice, causando {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% de dano. Depois ele retorna até você e ataca novamente, causando {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de dano.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"ruRU": "Затраты эссенции: {#} ед.\nВероятность удачного удара: {#}%.\nВаша призрачная копия совершает рывок вперед и взмахивает косой, нанося {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% ед. урона, а затем возвращается к вам и совершает еще один удар, наносящий {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% ед. урона.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"zhCN": "精魂消耗:{#}\n幸运一击几率:{#}%\n你的幽魂向前冲锋并用镰刀发动攻击,造成{63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}%点伤害,然后返回到你身边时再次攻击,造成{21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}%点伤害。\n\nTags: Core, Darkness, Damage, Shadow, Essence."
},
		id: 20,
		maxPoints: 5,
		values: [ "20", "20" ],
		x: -281.15,
		y: 258.115
	},
	"Enhanced Sever": {
		baseSkill: "Sever",
		connections: [ "Sever", "Paranormal Sever", "Supernatural Sever" ],
		description: `Sever damages enemies along its path for 25% of its initial damage.

Tags: Core, Darkness, Damage, Shadow, Essence.`,
		nameLocalized: {
			"deDE": "Verbesserter Schnitter",
			"esES": "Cercenar mejorado",
			"esMX": "Escisión Potenciada",
			"frFR": "Section renforcée",
			"itIT": "Smembramento Rinforzato",
			"jaJP": "切断(強化版)",
			"koKR": "강화된 절단",
			"plPL": "Wzmocnione Rozdarcie",
			"ptBR": "Decepar Aperfeiçoado",
			"ruRU": "Усиленное отсечение",
			"zhCN": "强化挥斩"
},
		descriptionLocalized: {
			"deDE": "Schnitter fügt Gegnern auf seinem Weg Schaden in Höhe von 25% des anfänglichen Schadens zu.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"esES": "Cercenar inflige un 25% de su daño inicial a los enemigos a su paso.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"esMX": "Escindir inflige un 25% de su daño inicial a los enemigos a lo largo de su camino.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"frFR": "Section inflige 25% de ses dégâts initiaux aux adversaires sur sa trajectoire.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"itIT": "Smembramento infligge danni ai nemici sulla sua traiettoria pari al 25% dei suoi danni iniziali.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"jaJP": "〈切断〉の生き霊が進路上の敵に自身のダメージの25%のダメージを与える。\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"koKR": "절단이 경로에 있는 적에게 최초 피해의 25%만큼 피해를 줍니다.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"plPL": "Rozdarcie rani także wrogów na swojej drodze, zadając im równowartość 25% początkowych obrażeń.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"ptBR": "Decepar causa dano aos inimigos no caminho equivalente a 25% do dano.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"ruRU": "Призванный \"Отсечением\" призрак наносит противникам на своем пути 25% изначального урона.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"zhCN": "挥斩会对路径上的敌人造成25%的初始伤害。\n\nTags: Core, Darkness, Damage, Shadow, Essence."
},
		id: 21,
		maxPoints: 1,
		x: -574.38,
		y: 439.87
	},
	"Paranormal Sever": {
		baseSkill: "Sever",
		connections: [ "Enhanced Sever" ],
		description: `Every 4th cast of Sever makes enemies Vulnerable for 2 seconds.

Tags: Core, Darkness, Damage, Shadow, Essence.`,
		nameLocalized: {
			"deDE": "Paranormaler Schnitter",
			"esES": "Cercenar paranormal",
			"esMX": "Escisión Paranormal",
			"frFR": "Section paranormale",
			"itIT": "Smembramento Paranormale",
			"jaJP": "切断(超常)",
			"koKR": "불가사의 절단",
			"plPL": "Paranormalne Rozdarcie",
			"ptBR": "Decepar Paranormal",
			"ruRU": "Паранормальное отсечение",
			"zhCN": "灵异挥斩"
},
		descriptionLocalized: {
			"deDE": "Jeder 4. Einsatz von Schnitter macht Gegner 2 Sek. lang verwundbar.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"esES": "Cada 4 lanzamientos de Cercenar, los enemigos se vuelven vulnerables durante 2 s.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"esMX": "Cada 4 lanzamientos, Escindir vuelve a los enemigos vulnerables durante 2 segundos.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"frFR": "Toutes les 4 utilisations de Section, la 4e rend les adversaires vulnérables pendant 2 s.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"itIT": "Ogni quarto lancio di Smembramento rende vulnerabili i nemici colpiti per 2 s.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"jaJP": "4回使用するごとに、〈切断〉が敵を2秒間、脆弱状態にする。\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"koKR": "절단을 4번째 시전할 때마다 적을 2초 동안 취약하게 만듭니다.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"plPL": "Co 4 rzucenie Rozdarcia sprawia, że wrogowie są odsłonięci przez 2 sek.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"ptBR": "Cada 4° lançamento de Decepar torna os inimigosvulneráveis por 2 segundos.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"ruRU": "При каждом 4-м применении \"Отсечение\" делает пораженных противников уязвимыми на 2 сек.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"zhCN": "每4次施放挥斩会使敌人陷入易伤状态,持续2秒。\n\nTags: Core, Darkness, Damage, Shadow, Essence."
},
		id: 22,
		maxPoints: 1,
		x: -840.68,
		y: 482.04
	},
	"Supernatural Sever": {
		baseSkill: "Sever",
		connections: [ "Enhanced Sever" ],
		description: `Sever deals x2% increased damage for each Minion you have upon cast.

Tags: Core, Darkness, Damage, Shadow, Essence.`,
		nameLocalized: {
			"deDE": "Übernatürlicher Schnitter",
			"esES": "Cercenar sobrenatural",
			"esMX": "Escisión Sobrenatural",
			"frFR": "Section surnaturelle",
			"itIT": "Smembramento Sovrannaturale",
			"jaJP": "切断(超自然)",
			"koKR": "초자연적 절단",
			"plPL": "Nadnaturalne Rozdarcie",
			"ptBR": "Decepar Sobrenatural",
			"ruRU": "Сверхъестественное отсечение",
			"zhCN": "超自然挥斩"
},
		descriptionLocalized: {
			"deDE": "Schnitter verursacht x2% mehr Schaden für jeden Diener, den Ihr beim Wirken besitzt.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"esES": "Cercenar inflige un x2% más de daño por cada esbirro que tengas al lanzar la habilidad.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"esMX": "Escindir inflige un x2% más de daño por cada esbirro que tengas al lanzarla.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"frFR": "Section inflige x2% de dégâts supplémentaires pour chaque serviteur que vous avez lors de son utilisation.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"itIT": "Smembramento infligge il x2% di danni aggiuntivi per ogni servitore attivo quando viene lanciato.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"jaJP": "使用時に従えているミニオン1体につき、〈切断〉 で与えるダメージがx2%増加する。\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"koKR": "시전 시점에 보유한 하수인 하나당 절단으로 주는 피해가 x2% 증가합니다.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"plPL": "Rozdarcie zadaje obrażenia zwiększone o x2% za każdego sługę, jakiego posiadasz podczas używania umiejętności.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"ptBR": "Decepar causa 2% de dano aumentado por cada lacaio que você tiver ao lançar.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"ruRU": "\"Отсечение\" наносит на x2% больше урона за каждого прислужника под вашим контролем.\n\nTags: Core, Darkness, Damage, Shadow, Essence.",
			"zhCN": "你每拥有一名仆从,挥斩的伤害提高x2%。\n\nTags: Core, Darkness, Damage, Shadow, Essence."
},
		id: 23,
		maxPoints: 1,
		x: -597.79,
		y: 590.745
	},
	"Blood Surge": {
		connections: [ "Enhanced Blood Surge", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Draw blood from enemies, dealing {20/22/24/26/28/30/32/34/36/38}% damage, and expel a blood nova, dealing {50/55/60/65/70/75/80/85/90/95}% damage. Blood Surge's nova damage is increased by x10% per enemy drained, up to x50%.

Tags: Core, Blood, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Blutwoge",
			"esES": "Andanada de sangre",
			"esMX": "Torrente Sanguíneo",
			"frFR": "Afflux sanguin",
			"itIT": "Scarica di Sangue",
			"jaJP": "ブラッド・サージ",
			"koKR": "피의 쇄도",
			"plPL": "Napływ Krwi",
			"ptBR": "Surto de Sangue",
			"ruRU": "Волнение крови",
			"zhCN": "血涌"
},
		descriptionLocalized: {
			"deDE": "Essenzkosten: {#}\nGlückstrefferchance: {#}%\nEntzieht Gegnern Blut, was {20/22/24/26/28/30/32/34/36/38}% Schaden verursacht, und erzeugt eine Blutnova, die {50/55/60/65/70/75/80/85/90/95}% Schaden verursacht. Der Schaden der Nova von Blutwoge erhöht sich um x10% pro blutentleertem Gegner, bis maximal x50%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esES": "Coste de esencia: {#}\nProbabilidad de golpe de suerte: {#}%\nDrenas sangre de los enemigos para infligirles {20/22/24/26/28/30/32/34/36/38}% de daño y generar una nova de sangre que inflige {50/55/60/65/70/75/80/85/90/95}% de daño. El daño de la nova de Andanada de sangre aumenta un x10% por cada enemigo drenado, hasta un máximo de un x50%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esMX": "Costo de Esencia: {#}\nProbabilidad de golpe afortunado: {#}%\nSuccionas la sangre de los enemigos, les infliges {20/22/24/26/28/30/32/34/36/38}% de daño y expulsas una nova de sangre que inflige {50/55/60/65/70/75/80/85/90/95}% de daño. El daño de la nova de Torrente Sanguíneo aumenta un x10% por cada enemigo drenado, hasta un máximo del x50%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"frFR": "Coût en essence : {#}\nChances de coup de chance : {#}%\nVous drainez le sang des adversaires, ce qui leur inflige {20/22/24/26/28/30/32/34/36/38}% points de dégâts et émet une nova de sang qui inflige {50/55/60/65/70/75/80/85/90/95}% points de dégâts. Les dégâts de la nova d'Afflux sanguin sont augmentés de x10% par cible drainée, jusqu'à un maximum de x50%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"itIT": "Costo in essenza: {#}\nProbabilità di colpo fortunato: {#}%\nRisucchi il sangue dai nemici, infliggendo {20/22/24/26/28/30/32/34/36/38}% e creando una Nova di Sangue che infligge {50/55/60/65/70/75/80/85/90/95}% danni. I danni della nova di Scarica di Sangue aumentano del x10% per ogni nemico dissanguato, fino a un massimo del x50%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"jaJP": "精髄消費量: {#}\n幸運の一撃発生率: {#}%\n敵から血液を抜き出して{20/22/24/26/28/30/32/34/36/38}%のダメージを与え、ブラッド・ノヴァを発射して{20/22/24/26/28/30/32/34/36/38}%のダメージを与える。〈ブラッド・サージ〉のノヴァのダメージは血を抜き出した敵1体あたりx10%増加する。増加率は最大x50%。\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"koKR": "소모: 정수 {#}\n행운의 적중 확률: {#}%\n적에게서 피를 뽑아, {20/22/24/26/28/30/32/34/36/38}%의 피해를 주고 피의 회오리를 방출하여 {50/55/60/65/70/75/80/85/90/95}%의 피해를 줍니다. 피를 뽑는 적 하나당 피의 쇄도 회오리의 공격력이 x10%만큼, 최대 x50%까지 증가합니다.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"plPL": "Koszt: {#} pkt. esencji.\nSzansa na szczęśliwy traf: {#}%\nWysysasz krew z wrogów i zadajesz im {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń, a następnie wywołujesz Novę Krwi, która zadaje {50/55/60/65/70/75/80/85/90/95}% pkt. obrażeń. Obrażenia od Novy za Napływ Krwi są zwiększane o x10% za każdego pozbawionego krwi wroga, aż do x50%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ptBR": "Custo de essência: {#}\nChance de Golpe de Sorte: {#}%\nExtrai sangue dos inimigos, causando {20/22/24/26/28/30/32/34/36/38}% de dano, e expele uma nova de sangue, causando {50/55/60/65/70/75/80/85/90/95}% de dano. O dano da nova de Surto de Sangue é aumentado em 10% por inimigo drenado, até 50%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ruRU": "Затраты эссенции: {#}\nВероятность удачного удара: {#}%\nВы вытягиваете кровь противников, нанося {20/22/24/26/28/30/32/34/36/38}% ед. урона, и исторгаете кольцо крови, наносящее {50/55/60/65/70/75/80/85/90/95}% ед. урона. Урон от кольца \"Волнения крови\" увеличивается на x10% за каждого обескровленного противника вплоть до x50%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"zhCN": "精魂消耗:{#}\n幸运一击几率:{#}%\n从敌人身上吸取鲜血,造成{20/22/24/26/28/30/32/34/36/38}%点伤害并释放一次鲜血新星,造成{50/55/60/65/70/75/80/85/90/95}%点伤害。每吸取一名敌人的鲜血,血涌的新星伤害提高x10%,最多提高x50%。\n\nTags: Core, Blood, Damage, Physical, Essence."
},
		id: 24,
		maxPoints: 5,
		values: [ "30", "20" ],
		x: -542.58,
		y: -124.71
	},
	"Enhanced Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Blood Surge", "Supernatural Blood Surge", "Paranormal Blood Surge" ],
		description: `Blood Surge Heals you for 2.5% of your Maximum Life when drawing blood from enemies. If 4 or more enemies are drawn from, then Heal for an additional 2.5% of your Maximum Life.

Tags: Core, Blood, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Verbesserte Blutwoge",
			"esES": "Andanada de sangre mejorada",
			"esMX": "Torrente Sanguíneo Potenciado",
			"frFR": "Afflux sanguin renforcé",
			"itIT": "Scarica di Sangue Rinforzata",
			"jaJP": "ブラッド・サージ(強化版)",
			"koKR": "강화된 피의 쇄도",
			"plPL": "Wzmocniony Napływ Krwi",
			"ptBR": "Surto de Sangue Aperfeiçoado",
			"ruRU": "Усиленное волнение крови",
			"zhCN": "强化血涌"
},
		descriptionLocalized: {
			"deDE": "Blutwoge heilt Euch um 2.5% Eures maximalen Lebens, wenn Ihr Gegnern Blut entzieht. Wenn mindestens 4 Gegnern Blut entzogen wird, werdet Ihr um zusätzliche 2.5% Eures maximalen Lebens geheilt.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esES": "Andanada de sangre te cura un 2.5% de tu vida máxima cuando drenas sangre de los enemigos. Si drenas a 4 enemigos o más, te cura un 2.5% adicional de tu vida máxima.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esMX": "Torrente Sanguíneo te sana por un 2.5% de tu vida máxima al extraer sangre de los enemigos. Si extraes sangre de 4 o más enemigos, te sana por un 2.5% más de tu vida máxima.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"frFR": "Afflux sanguin vous rend 2.5% de votre maximum de points de vie lorsque vous drainez le sang des adversaires. Si vous drainez le sang d'au moins 4 adversaires, vous récupérez 2.5% de votre maximum de points de vie.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"itIT": "Scarica di Sangue ti cura del 2.5% della tua Vita massima quando risucchi il sangue dai nemici. Se stai risucchiando il sangue a 4 o più nemici, ti curi di un ulteriore 2.5% della tua Vita massima.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"jaJP": "〈ブラッド・サージ〉で敵から血を抜き出すと、自身のライフが最大値の2.5%にあたる回復する。4体以上の敵から血を抜き出すと、ライフがさらに最大値の2.5%にあたる回復する。\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"koKR": "피의 쇄도로 적의 피를 흡수할 때 자신의 생명력이 최대 생명력의 2.5%만큼 회복됩니다. 4마리 이상 적의 피를 흡수할 때는 추가로 최대 생명력의 2.5%만큼 회복됩니다.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"plPL": "Napływ Krwi przywraca ci 2.5% maksymalnego zdrowia, kiedy czerpiesz krew z wrogów. Jeśli co najmniej 4 wrogów zostanie tym dotkniętych, odzyskasz dodatkowo 2.5% maksymalnego zdrowia.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ptBR": "Surto de Sangue cura 2.5% da sua vida máxima ao extrair sangue de inimigos. Se 4 ou mais inimigos forem drenados, depois cura mais 2.5% da sua vida máxima.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ruRU": "Когда \"Волнение крови\" вытягивает из противников кровь, вы восполняете 2.5% максимального запаса здоровья. Если умение иссушает 4 или более противников, вы восполняете еще 2.5% максимального запаса здоровья.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"zhCN": "血涌吸取敌人鲜血,可以为你恢复生命上限的2.5%。如果吸取了4个或更多敌人的鲜血,则额外为你恢复生命上限的2.5%。\n\nTags: Core, Blood, Damage, Physical, Essence."
},
		id: 25,
		maxPoints: 1,
		x: -912.83,
		y: -200.94
	},
	"Supernatural Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Enhanced Blood Surge" ],
		description: `Each time an enemy is hit by Blood Surge's nova, you are Fortified for 1.1% Base Life. While you have Fortify for over 50% of your Maximum Life, Blood Surge deals x20% increased damage.

Tags: Core, Blood, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Übernatürliche Blutwoge",
			"esES": "Andanada de sangre sobrenatural",
			"esMX": "Torrente Sanguíneo Sobrenatural",
			"frFR": "Afflux sanguin surnaturel",
			"itIT": "Scarica di Sangue Sovrannaturale",
			"jaJP": "ブラッド・サージ(超自然)",
			"koKR": "초자연적 피의 쇄도",
			"plPL": "Nadnaturalny Napływ Krwi",
			"ptBR": "Surto de Sangue Sobrenatural",
			"ruRU": "Сверхъестественное волнение крови",
			"zhCN": "超自然血涌"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn ein Gegner von der Nova von Blutwoge getroffen wird, erhaltet Ihr Stählung in Höhe von 1.1% Eures Basislebens. Solange Ihr um mindestens 50% Eures maximalen Lebens gestählt seid, fügt Blutwoge x20% mehr Schaden zu.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esES": "Cada vez que la nova de Andanada de sangre golpea a un enemigo, obtienes un 1.1% de tu vida base como fortificación. Mientras la fortificación supere el 50% de tu vida máxima, Andanada de sangre infligirá un x20% más de daño.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esMX": "Cada vez que golpeas a un enemigo con la nova de Torrente Sanguíneo, te fortificas con un 1.1% de tu vida de base. Mientras tienes más del 50% de tu vida máxima como fortificación, Torrente Sanguíneo inflige un x20% más de daño.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"frFR": "Chaque fois qu'une cible est touchée par la nova d'Afflux sanguin, vous obtenez un montant de fortification égal à 1.1% de vos points de vie de base. Tant que vous bénéficiez d'une fortification supérieure à 50% de votre maximum de points de vie, Afflux sanguin inflige x20% de dégâts supplémentaires..\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"itIT": "Ogni volta che un nemico viene colpito dalla nova di Scarica di Sangue, ottieni Fortificazione per il 1.1% della Vita base. Mentre sei affetto da Fortificazione per oltre il 50% della tua Vita massima, Scarica di Sangue infligge il x20% di danni aggiuntivi.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"jaJP": "〈ブラッド・サージ〉のノヴァが敵1体に命中するたびに、基本ライフの1.1%にあたるの強化を獲得する。強化量がライフ最大値の50%を越えていると、〈ブラッド・サージ〉で与えるダメージがx20%増加する。\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"koKR": "적이 피의 쇄도의 회오리에 적중당할 때마다 자신이 기본 생명력의 1.1%만큼 보강됩니다. 최대 생명력의 50%를 넘는 보강을 보유한 동안, 피의 쇄도의 공격력이 x20% 증가합니다.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"plPL": "Za każdym razem, gdy wróg zostaje trafiony novą wywołaną przez Napływ Krwi, zyskujesz umocnienie równe 1.1% podstawowego zdrowia. Kiedy twoja postać jest umocniona o równowartość ponad 50% twojego maksymalnego zdrowia, Napływ Krwi zadaje x20% więcej obrażeń.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ptBR": "Sempre que um inimigo é atingido pela nova de Surto de Sangue, você se fortifica em 1.1% da vida básica. Enquanto tiver fortificação em mais de 50% da sua vida máxima, Surto de Sangue causa 20% de dano aumentado.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ruRU": "Когда кольцо \"Волнения крови\" поражает противников, вы получаете укрепление в объеме 1.1% базового запаса здоровья. Когда ваш показатель укрепления превышает 50% максимального запаса здоровья, \"Волнение крови\" наносит на x20% больше урона.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"zhCN": "血涌的鲜血新星每命中一名敌人就会强固你1.1%基础生命。当你的强固效果超过生命上限的50%,血涌造成的伤害提高x20%。\n\nTags: Core, Blood, Damage, Physical, Essence."
},
		id: 26,
		maxPoints: 1,
		x: -1048.315,
		y: -328.79
	},
	"Paranormal Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Enhanced Blood Surge" ],
		description: `If an enemy is damaged by Blood Surge's nova while you are Healthy, then gain 1 stack of Overwhelming Blood. When you have 5 stacks of Overwhelming Blood, your next Blood Surge Overpowers.

Tags: Core, Blood, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Paranormale Blutwoge",
			"esES": "Andanada de sangre paranormal",
			"esMX": "Torrente Sanguíneo Paranormal",
			"frFR": "Afflux sanguin paranormal",
			"itIT": "Scarica di Sangue Paranormale",
			"jaJP": "ブラッド・サージ(超常)",
			"koKR": "불가사의 피의 쇄도",
			"plPL": "Paranormalny Napływ Krwi",
			"ptBR": "Surto de Sangue Paranormal",
			"ruRU": "Паранормальное волнение крови",
			"zhCN": "灵异血涌"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Gegner von der Nova von Blutwoge getroffen wird, während Ihr gesund seid, erhaltet Ihr 1 Stapel erdrückendes Blut. Wenn Ihr 5 Stapel erdrückendes Blut habt, überwältigt Eure nächste Blutwoge.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esES": "Si un enemigo sufre daño de la nova de Andanada de sangre mientras te encuentras en estado saludable, obtienes 1 acumulación de Sangre abrumadora. Con 5 acumulaciones, tu siguiente Andanada de sangre arrolla.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esMX": "Si un enemigo recibe daño de la nova de Torrente Sanguíneo mientras estás saludable, obtienes 1 acumulación de Sangre Sobrecogedora. Cuando tienes 5 acumulaciones de Sangre Sobrecogedora, tu siguiente Torrente Sanguíneo abruma.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"frFR": "Si une cible est blessée par la nova d'Afflux sanguin alors que vous êtes en bonne santé, vous obtenez 1 cumul de sang accablant. Lorsque vous avez 5 cumuls de sang accablant, votre prochain Afflux sanguin accablera les adversaires.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"itIT": "Se un nemico subisce danni dalla nova di Scarica di Sangue mentre sei in salute, allora ottieni 1 accumulo di Sangue Schiacciante. Quando arrivi a 5 accumuli di Sangue Schiacciante, la tua prossima Scarica di Sangue attiverà Sopraffazione.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"jaJP": "自身が健全状態の時に〈ブラッド・サージ〉のノヴァで敵にダメージを与えると、オーバーブラッドが1つ蓄積する。オーバーブラッドが5つ蓄積すると、次の〈ブラッド・サージ〉がオーバーパワーになる。\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"koKR": "자신이 건강 상태일 때 피의 쇄도의 회오리로 적에게 피해를 주면 압도적인 피 중첩을 1 얻습니다. 압도적인 피가 5회 중첩되면, 다음 피의 쇄도가 제압 효과를 얻습니다.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"plPL": "Jeśli wróg otrzyma obrażenia od novy Napływu Krwi, gdy jesteś w pełni sił, zyskujesz 1 poziom kumulacji Przytłaczającej Krwi. Kiedy masz 5 poziomów kumulacji Przytłaczającej Krwi, twój następny Napływ Krwi przytłoczy.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ptBR": "Se um inimigo for atingido pela nova de Surto de Sangue enquanto você estiver saudável, você recebe 1 aplicação de Sangue Avassalador. Quando você tem 5 aplicações de Sangue Avassalador, seu próximo Surto de Sangue desfere Golpe Brutal.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ruRU": "Если кольцо \"Волнения крови\" поражает противника, когда у вас высокий уровень здоровья, вы получаете 1 эффект \"Подавляющей крови\". Когда вы накапливаете 5 эффектов \"Подавляющей крови\", ваше следующее \"Волнение крови\" наносит подавляющий урон.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"zhCN": "当你在健康状态下使用血涌的新星对敌人造成伤害后,获得1层压制血液。当你拥有5层压制血液,你的下一次血涌造成压制。\n\nTags: Core, Blood, Damage, Physical, Essence."
},
		id: 27,
		maxPoints: 1,
		x: -1170.475,
		y: -160.385
	},
	"Blood Lance": {
		connections: [ "Enhanced Blood Lance", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Throw a blood lance that lingers in an enemy for 3 seconds, dealing {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% damage to the enemy and all other lanced enemies.

Tags: Core, Blood, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Blutlanze",
			"esES": "Lanza de sangre",
			"esMX": "Lanza Sangrienta",
			"frFR": "Prélèvement",
			"itIT": "Lancia di Sangue",
			"jaJP": "ブラッド・ランス",
			"koKR": "피의 창",
			"plPL": "Krwawa Lanca",
			"ptBR": "Lança de Sangue",
			"ruRU": "Окровавленное копье",
			"zhCN": "血矛"
},
		descriptionLocalized: {
			"deDE": "Essenzkosten: {#}\nGlückstrefferchance: {#}%\nWerft eine Blutlanze, die 3 Sek. lang in einem Gegner verbleibt und diesem und allen anderen betroffenen Gegnern {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% Schaden zufügt.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esES": "Coste de esencia: {#}\nProbabilidad de golpe de suerte: {#}%\nArrojas una lanza de sangre que permanece en el enemigo durante 3 s e inflige {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de daño al enemigo y al resto de enemigos atravesados.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esMX": "Costo de Esencia: {#}\nProbabilidad de golpe afortunado: {#}%\nArrojas una lanza sangrienta que permanece clavada en un enemigo durante 3 segundos e inflige {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de daño al enemigo y a los demás enemigos atravesados por la lanza.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"frFR": "Coût en essence : {#}\nChances de coup de chance : {#}%\nVous lancez une lance de sang qui reste plantée dans l'adversaire pendant 3 s, infligeant {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% points de dégâts à cette cible ainsi qu'à toutes les autres cibles empalées.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"itIT": "Costo in essenza: {#}\nProbabilità di colpo fortunato: {#}%\nScagli una lancia di sangue che infilza un nemico per 3 s. La lancia infligge {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% danni al bersaglio e a tutti gli altri nemici infilzati.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"jaJP": "精髄消費量: {#}\n幸運の一撃発生率: {#}%\n敵に3秒間残る〈ブラッド・ランス〉を放って、対象の敵および貫通したすべての敵に{45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%のダメージを与える。\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"koKR": "소모: 정수 {#}\n행운의 적중 확률: {#}%\n피의 창을 던집니다. 창은 3초 동안 적에게 꽂혀 있으면서 해당 적과 창이 꽂힌 모든 적에게 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%의 피해를 줍니다.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"plPL": "Koszt: {#} pkt. esencji\nSzansa na szczęśliwy traf: {#}%\nMiotasz krwawą lancą, która tkwi w przeciwniku przez 3 sek., zadając {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% pkt. obrażeń temu wrogowi i wszystkim pozostałym wrogom, którzy są przebici lancą.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ptBR": "Custo de essência: {#}\nChance de Golpe de Sorte: {#}%\nArremessa uma lança de sangue que permanece em um inimigo por 3 segundos, causando {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de dano ao inimigo e a todos os outros inimigos atingidos por lança.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ruRU": "Затраты эссенции: {#} ед.\nВероятность удачного удара: {#}%.\nВы бросаете окровавленное копье, которое остается в теле противника в течение 3 сек. и наносит {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% ед. урона цели и остальным пронзенным противникам.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"zhCN": "精魂消耗:{#}\n幸运一击几率:{#}%\n投掷一支留在敌人体内3秒的血矛,对该敌人和所有其他被血矛刺中的敌人造成{45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%点伤害。\n\nTags: Core, Blood, Damage, Physical, Essence."
},
		id: 28,
		maxPoints: 5,
		values: [ "10", "40" ],
		x: -278.15,
		y: -274.3
	},
	"Enhanced Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Blood Lance", "Supernatural Blood Lance", "Paranormal Blood Lance" ],
		description: `Blood Lance pierces through enemies who are currently lanced, dealing 15% reduced damage to subsequent enemies after the first.

Tags: Core, Blood, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Verbesserte Blutlanze",
			"esES": "Lanza de sangre mejorada",
			"esMX": "Lanza Sangrienta Potenciada",
			"frFR": "Prélèvement renforcé",
			"itIT": "Lancia di Sangue Rinforzata",
			"jaJP": "ブラッド・ランス(強化版)",
			"koKR": "강화된 피의 창",
			"plPL": "Wzmocniona Krwawa Lanca",
			"ptBR": "Lança de Sangue Aperfeiçoada",
			"ruRU": "Усиленное окровавленное копье",
			"zhCN": "强化血矛"
},
		descriptionLocalized: {
			"deDE": "Blutlanze durchschlägt Gegner, die bereits aufgespießt sind, und fügt allen Gegnern nach dem ersten 15% weniger Schaden zu.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esES": "Lanza de sangre atraviesa a los enemigos empalados por la lanza e inflige un 15% menos de daño a los enemigos posteriores al primero.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esMX": "Lanza Sangrienta perfora a los enemigos afectados por la lanza e inflige un 15% menos de daño a los enemigos golpeados después del primero.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"frFR": "Prélèvement perfore les cibles qui sont déjà empalées, infligeant 15% de dégâts en moins à chaque cible suivant la première.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"itIT": "Lancia di Sangue trapassa i nemici attualmente infilzati, infliggendo ai nemici il 15% di danni in meno dopo il primo colpo.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"jaJP": "槍攻撃を受けている敵を〈ブラッド・ランス〉が貫通し、初撃の後は与えるダメージが15%減少する。\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"koKR": "피의 창이 현재 창이 꽂힌 적을 관통하며, 2번째 적부터는 15% 감소한 피해를 줍니다.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"plPL": "Krwawa Lanca przebija wrogów, którzy są na nią nadziani, zadając drugiemu i kolejnym celom obrażenia zmniejszone o 15%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ptBR": "Lança de Sangue atravessa os inimigos atingidos por lança, causando 15% de dano reduzido a inimigos subsequentes após o primeiro.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ruRU": "\"Окровавленное копье\" пробивает насквозь противников, уже пронзенных другим копьем, нанося на 15% меньше урона целям после первой.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"zhCN": "血矛会穿过已经被刺穿的敌人,在对第一名敌人造成伤害后,对后续敌人造成的伤害降低15%。\n\nTags: Core, Blood, Damage, Physical, Essence."
},
		id: 29,
		maxPoints: 1,
		x: -470.775,
		y: -466.65
	},
	"Supernatural Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Enhanced Blood Lance" ],
		description: `After casting Blood Lance 8 times, your next cast of Blood Lance is guaranteed to Overpower and spawns a Blood Orb under the first enemy hit.

Tags: Core, Blood, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Übernatürliche Blutlanze",
			"esES": "Lanza de sangre sobrenatural",
			"esMX": "Lanza Sangrienta Sobrenatural",
			"frFR": "Prélèvement surnaturel",
			"itIT": "Lancia di Sangue Sovrannaturale",
			"jaJP": "ブラッド・ランス(超自然)",
			"koKR": "초자연적 피의 창",
			"plPL": "Nadnaturalna Krwawa Lanca",
			"ptBR": "Lança de Sangue Sobrenatural",
			"ruRU": "Сверхъестественное окровавленное копье",
			"zhCN": "超自然血矛"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr Blutlanze 8-mal gewirkt habt, überwältigt Eure nächste Blutlanze garantiert und erzeugt unter dem ersten getroffenen Gegner eine Blutkugel.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esES": "Tras lanzar Lanza de sangre 8 veces, tu siguiente lanzamiento de Lanza de sangre provoca arrollamiento y genera un orbe de sangre bajo el primer enemigo golpeado.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esMX": "Luego de lanzar Lanza Sangrienta 8 veces, tu siguiente lanzamiento de Lanza Sangrienta abruma de forma garantizada y genera un Orbe de Sangre bajo el primer enemigo golpeado.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"frFR": "Après avoir utilisé Prélèvement 8 fois, votre prochaine utilisation de Prélèvement accable les adversaires à coup sûr et fait apparaître un orbe de sang sous la première cible touchée.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"itIT": "Dopo aver utilizzato Lancia di Sangue per 8 volte, il tuo successivo utilizzo di Lancia di Sangue attiva sempre Sopraffazione e genera unaGlobo di Sangue sotto al primo nemico colpito.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"jaJP": "〈ブラッド・ランス〉を8回使用すると、次に使用する〈ブラッド・ランス〉が必ずオーバーパワーになり、最初の敵に命中した敵の下に血のオーブが出現する。\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"koKR": "피의 창을 8번 시전한 후, 다음 시전하는 피의 창은 확정적으로 제압 효과를 얻고, 첫 번째로 적중한 적 아래에 피의 구슬을 생성합니다.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"plPL": "Po użyciu Krwawej Lancy 8 razy następne jej użycie gwarantuje przytłoczenie i tworzy krwawą kulę pod pierwszym trafionym wrogiem.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ptBR": "Depois de lançar Lança de Sangue 8 vezes, seu próximo lançamento de Lança de Sangue desfere Golpe Brutal garantido e gera um orbe de sangue embaixo do primeiro inimigo atingido.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ruRU": "Когда вы применяете \"Окровавленное копье\" 8 раза:раз, ваше следующее \"Окровавленное копье\" гарантированно наносит подавляющий урон и создает сферу крови на месте первого пораженного противника.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"zhCN": "施放8次血矛后,你的下一次血矛必定造成压制,并且在命中的第一个敌人脚下生成一颗生命球。\n\nTags: Core, Blood, Damage, Physical, Essence."
},
		id: 30,
		maxPoints: 1,
		x: -445.5,
		y: -604.16
	},
	"Paranormal Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Enhanced Blood Lance" ],
		description: `While at least 2 enemies or a Boss are affected by Blood Lance, you gain +15% Attack Speed and Blood Lance's Essence cost is reduced by 2.

Tags: Core, Blood, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Paranormale Blutlanze",
			"esES": "Lanza de sangre paranormal",
			"esMX": "Lanza Sangrienta Paranormal",
			"frFR": "Prélèvement paranormal",
			"itIT": "Lancia di Sangue Paranormale",
			"jaJP": "ブラッド・ランス(超常)",
			"koKR": "불가사의 피의 창",
			"plPL": "Paranormalna Krwawa Lanca",
			"ptBR": "Lança de Sangue Paranormal",
			"ruRU": "Паранормальное окровавленное копье",
			"zhCN": "灵异血矛"
},
		descriptionLocalized: {
			"deDE": "Wenn mindestens 2 Gegner von Blutlanze betroffen sind, erhaltet Ihr +15% Angriffsgeschwindigkeit und die Essenzkosten von Blutlanze sind um 2 reduziert.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esES": "Mientras al menos 2 enemigos o un jefe estén afectados por Lanza de sangre, obtienes un +15% de velocidad de ataque y se reduce en 2 el coste de esencia de Lanza de sangre.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"esMX": "Mientras Lanza Sangrienta afecta a por lo menos 2 enemigos o a un jefe, obtienes un +15% de velocidad de ataque, y el costo de Esencia de Lanza Sangrienta se reduce en 2.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"frFR": "Tant qu'au moins 2 adversaires ou un boss sont affectés par Prélèvement, votre vitesse d'attaque est augmentée de +15% et le coût en essence de Prélèvement est réduit de 2.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"itIT": "Se ci sono almeno 2 nemici o un boss affetti da Lancia di Sangue, la tua velocità d'attacco aumenta del +15% e il costo in essenza di Lancia di Sangue si riduce di 2.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"jaJP": "少なくとも2体の敵またはボスが〈ブラッド・ランス〉の効果を受けている間、攻撃速度が+15%上昇し、〈ブラッド・ランス〉の精髄消費量が 2減少する。\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"koKR": "최소 2마리 이상의 적 또는 우두머리에게 피의 창이 꽂혀 있으면 자신의 공격 속도가 +15% 증가하고 피의 창의 정수 소모량이 2 감소합니다.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"plPL": "Gdy co najmniej 2 wrogów lub boss znajduje się pod wpływem działania Krwawej Lancy, zyskujesz +15% do szybkości ataku, zaś koszt Krwawej Lancy jest zmniejszony o 2.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ptBR": "Enquanto pelo menos 2 inimigos ou um chefe estão afetados por Lança de Sangue, você recebe +15% de velocidade de ataque e o custo de essência de Lança de Sangue é reduzido em 2.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"ruRU": "Пока \"Окровавленное копье\" пронзает не менее 2 противников:противников, затраты эссенции на его применение сокращаются на 2 ед., а скорость атаки повышается на +15%.\n\nTags: Core, Blood, Damage, Physical, Essence.",
			"zhCN": "至少有2名敌人或一名首领受血矛影响时,你的攻击速度提高+15%,血矛的精魂消耗降低2点。\n\nTags: Core, Blood, Damage, Physical, Essence."
},
		id: 31,
		maxPoints: 1,
		x: -727.57,
		y: -520.325
	},
	"Bone Spear": {
		connections: [ "Enhanced Bone Spear", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Conjure a bone spear from the ground, dealing {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% damage and piercing through enemies.

Tags: Core, Bone, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Knochenspeer",
			"esES": "Lanza de hueso",
			"esMX": "Lanza Ósea",
			"frFR": "Lance d'os",
			"itIT": "Lancia d'Ossa",
			"jaJP": "ボーン・スピア",
			"koKR": "뼈 창",
			"plPL": "Włócznia z Kości",
			"ptBR": "Lança de Ossos",
			"ruRU": "Костяное копье",
			"zhCN": "骨矛"
},
		descriptionLocalized: {
			"deDE": "Essenzkosten: {#}\nGlückstrefferchance: {#}%\nBeschwört einen Knochenspeer aus dem Boden, der {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% Schaden verursacht und Gegner durchschlägt.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"esES": "Coste de esencia: {#}\nProbabilidad de golpe de suerte: {#}%\nGeneras desde el suelo una lanza de hueso que inflige {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% de daño y atraviesa a los enemigos.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"esMX": "Costo de Esencia: {#}\nProbabilidad de golpe afortunado: {#}%\nConjuras una lanza ósea desde el suelo, lo que inflige {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% de daño y perfora a los enemigos.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"frFR": "Coût en essence : {#}\nChances de coup de chance : {#}%\nVous faites jaillir du sol une lance d'os qui inflige {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% points de dégâts et transperce les adversaires.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"itIT": "Costo in essenza: {#}\nProbabilità di colpo fortunato: {#}%\nInvochi una lancia d'ossa dal terreno, infliggendo {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% danni e perforando i nemici.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"jaJP": "精髄消費量: {#}\n幸運の一撃発生率: {#}%\n〈ボーン・スピア〉を地面から生やし、{85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}%のダメージを与えて複数の敵を貫通する。\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"koKR": "소모: 정수 {#}\n행운의 적중 확률: {#}%\n지면에서 뼈 창을 구현하여 {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}%의 피해를 주고 적을 관통합니다.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"plPL": "Koszt: {#} pkt. esencji\nSzansa na szczęśliwy traf: {#}%\nPrzyzywasz z ziemi kościaną włócznię, która zadaje {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% pkt. obrażeń i przebija wrogów.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"ptBR": "Custo de essência: {#}\nChance de Golpe de Sorte: {#}%\nConjura uma lança de ossos do chão, causando {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% de dano e perfurando inimigos.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"ruRU": "Затраты эссенции: {#} ед.\nВероятность удачного удара: {#}%.\nПризывает из-под земли костяное копье, наносящее {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% ед. урона и пронзающее противников.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"zhCN": "精魂消耗:{#}\n幸运一击几率:{#}%\n从地面召唤一支骨矛,造成{85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}%点伤害并刺穿敌人。\n\nTags: Core, Bone, Damage, Physical, Essence."
},
		id: 32,
		maxPoints: 5,
		values: [ "25", "50" ],
		x: 551.14,
		y: -0.17
	},
	"Enhanced Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Bone Spear", "Paranormal Bone Spear", "Supernatural Bone Spear" ],
		description: `Bone Spear breaks into 3 shards when it is destroyed, dealing {10/11/12/13/14/15/16/17/18/19}% damage each.

Tags: Core, Bone, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Verbesserter Knochenspeer",
			"esES": "Lanza de hueso mejorada",
			"esMX": "Lanza Ósea Potenciada",
			"frFR": "Lance d'os renforcée",
			"itIT": "Lancia d'Ossa Rinforzata",
			"jaJP": "ボーン・スピア(強化版)",
			"koKR": "강화된 뼈 창",
			"plPL": "Wzmocniona Włócznia z Kości",
			"ptBR": "Lança de Ossos Aperfeiçoada",
			"ruRU": "Усиленное костяное копье",
			"zhCN": "强化骨矛"
},
		descriptionLocalized: {
			"deDE": "Bei der Zerstörung von Knochenspeer entstehen 3 Splitter, die jeweils {10/11/12/13/14/15/16/17/18/19}% Schaden verursachen.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"esES": "Al ser destruida, Lanza de hueso se rompe en 3 fragmentos que infligen {10/11/12/13/14/15/16/17/18/19}% de daño cada uno.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"esMX": "Al destruirse, Lanza Ósea estalla en 3 fragmentos que infligen {10/11/12/13/14/15/16/17/18/19}% de daño cada uno.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"frFR": "Lorsqu'elle est détruite, la lance d'os se brise en 3 éclats qui infligent {10/11/12/13/14/15/16/17/18/19}% points de dégâts chacun.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"itIT": "Lancia d'Ossa si frantuma in 3 schegge che infliggono {10/11/12/13/14/15/16/17/18/19}% danni ciascuna.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"jaJP": "〈ボーン・スピア〉が破壊されると3個の欠片にわかれ、それぞれの欠片が{10/11/12/13/14/15/16/17/18/19}%のダメージを与える。\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"koKR": "뼈 창이 파괴될 때 3개의 파편으로 분해되어 각각 {10/11/12/13/14/15/16/17/18/19}%의 피해를 줍니다.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"plPL": "Włócznia z Kości po zniszczeniu rozpada się na odłamki (3). Każdy z nich zadaje {10/11/12/13/14/15/16/17/18/19}% pkt. obrażeń.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"ptBR": "Lança de Ossos estilhaça em 3 pedaços quando destruída, e cada estilhaço causa {10/11/12/13/14/15/16/17/18/19}% de dano.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"ruRU": "Разрушаясь, \"Костяное копье\" раскалывается на 3 осколка, наносящие:осколков, наносящих по {10/11/12/13/14/15/16/17/18/19}% ед. урона.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"zhCN": "骨矛被摧毁时会分裂成3枚碎片,每片造成{10/11/12/13/14/15/16/17/18/19}%点伤害。\n\nTags: Core, Bone, Damage, Physical, Essence."
},
		id: 33,
		maxPoints: 1,
		x: 968.272,
		y: 0.325
	},
	"Paranormal Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Enhanced Bone Spear" ],
		description: `Bone Spear has a +5% increased Critical Strike Chance. If Bone Spear's primary projectile Critically Strikes, it fires 2 additional bone shards upon being destroyed.

Tags: Core, Bone, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Paranormaler Knochenspeer",
			"esES": "Lanza de hueso paranormal",
			"esMX": "Lanza Ósea Paranormal",
			"frFR": "Lance d'os paranormale",
			"itIT": "Lancia d'Ossa Paranormale",
			"jaJP": "ボーン・スピア(超常)",
			"koKR": "불가사의 뼈 창",
			"plPL": "Paranormalna Włócznia z Kości",
			"ptBR": "Lança de Ossos Paranormal",
			"ruRU": "Паранормальное костяное копье",
			"zhCN": "灵异骨矛"
},
		descriptionLocalized: {
			"deDE": "Die kritische Trefferchance von Knochenspeer ist um +5% erhöht. Wenn das primäre Projektil von Knochenspeer einen kritischen Treffer erzielt, feuert es bei seiner Zerstörung 2 zusätzliche Knochensplitter ab.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"esES": "Lanza de hueso tiene un +5% más de probabilidad de golpe crítico. Si el proyectil principal de Lanza de hueso asesta un golpe crítico, dispara 2 fragmentos de hueso adicionales al destruirse.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"esMX": "Lanza Ósea tiene un +5% más de probabilidad de golpe crítico. Si el proyectil principal de Lanza Ósea asesta un golpe crítico, arroja 2 fragmentos más al ser destruida.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"frFR": "Les chances d'infliger un coup critique de Lance d'os sont augmentées de +5%. Si le projectile principal de Lance d'os inflige un coup critique, il projette 2 éclats supplémentaires lorsqu'il est détruit.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"itIT": "La probabilità di critico di Lancia d'Ossa aumenta del +5%. Se il proiettile principale di Lancia d'Ossa infligge danni critici, emette 2 frammenti d'ossa aggiuntivi quando viene distrutto.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"jaJP": "〈ボーン・スピア〉のクリティカルヒット率が+5%増加する。〈ボーン・スピア〉の主要部分がクリティカルヒットした場合、破壊時にさらに2個の骨の欠片を発射する。\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"koKR": "뼈 창의 극대화 확률이 +5% 증가합니다. 뼈 창의 주 투사체가 치명타로 적중하면 파괴 시 추가 뼈 조각을 2개 발사합니다.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"plPL": "Istnieje o +5% większa szansa na trafienie krytyczne Włócznią z Kości. Jeśli podstawowy pocisk Włóczni z Kości wywołuje trafienie krytyczne, w chwili jej zniszczenia wypuszczone zostaną dodatkowe odłamki (2).\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"ptBR": "Lança de Ossos tem +5% de chance de acerto crítico aumentada. Se o primeiro projétil de Lança de Ossos desferir um acerto crítico, dispara 2 estilhaços ósseos adicionais ao ser destruída.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"ruRU": "Вероятность критического удара \"Костяного копья\" повышается на +5%. Когда основной снаряд \"Костяного копья\" наносит критический урон, после разрушения он выпускает еще 2 костяных осколка:костяных осколков.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"zhCN": "骨矛的暴击几率提高+5%。如果骨矛的主要投射物造成暴击,其在被摧毁时会额外发射2枚白骨碎片。\n\nTags: Core, Bone, Damage, Physical, Essence."
},
		id: 34,
		maxPoints: 1,
		x: 1180.912,
		y: 94.56
	},
	"Supernatural Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Enhanced Bone Spear" ],
		description: `Bone Spear makes the first enemy hit Vulnerable for 3 seconds.

Tags: Core, Bone, Damage, Physical, Essence.`,
		nameLocalized: {
			"deDE": "Übernatürlicher Knochenspeer",
			"esES": "Lanza de hueso sobrenatural",
			"esMX": "Lanza Ósea Sobrenatural",
			"frFR": "Lance d'os surnaturelle",
			"itIT": "Lancia d'Ossa Sovrannaturale",
			"jaJP": "ボーン・スピア(超自然)",
			"koKR": "초자연적 뼈 창",
			"plPL": "Nadnaturalna Włócznia z Kości",
			"ptBR": "Lança de Ossos Sobrenatural",
			"ruRU": "Сверхъестественное костяное копье",
			"zhCN": "超自然骨矛"
},
		descriptionLocalized: {
			"deDE": "Knochenspeer macht den ersten getroffen Gegner 3 Sek. lang verwundbar.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"esES": "Lanza de hueso vuelve vulnerable durante 3 s al primer enemigo golpeado.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"esMX": "Lanza Ósea vuelve al primer enemigo golpeado vulnerable durante 3 segundos.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"frFR": "Lance d'os rend la première cible qu'elle touche vulnérable pendant 3 s.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"itIT": "Lancia d'Ossa rende vulnerabile il primo nemico colpito per 3 s.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"jaJP": "〈ボーン・スピア〉が最初に命中した敵が、3秒間、脆弱状態になる。\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"koKR": "뼈 창이 처음 적중한 적이 3초 동안 취약해집니다.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"plPL": "Włócznia z Kości sprawia, że pierwszy trafiony wróg zostaje odsłonięty na 3 sek.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"ptBR": "Lança de Ossos torna o primeiro inimigo atingido vulnerável por 3 segundos.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"ruRU": "\"Костяное копье\" делает первого пораженного противника уязвимым на 3 сек.\n\nTags: Core, Bone, Damage, Physical, Essence.",
			"zhCN": "骨矛会使第一个命中的敌人陷入易伤状态,持续3秒。\n\nTags: Core, Bone, Damage, Physical, Essence."
},
		id: 35,
		maxPoints: 1,
		x: 1183.487,
		y: -89.765
	},
	"Unliving Energy": {
		connections: [ "Core", "Imperfectly Balanced" ],
		description: `Your maximum Essence is increased by {3/6/9/12/15/18/21/24/27/30}.

Tags: Essence.`,
		nameLocalized: {
			"deDE": "Unlebende Energie",
			"esES": "Energía no viviente",
			"esMX": "Energía No Viva",
			"frFR": "Énergie non vivante",
			"itIT": "Energia Non Morta",
			"jaJP": "死者の生命力",
			"koKR": "부생의 에너지",
			"plPL": "Martwa Energia",
			"ptBR": "Energia Finada",
			"ruRU": "Неживая энергия",
			"zhCN": "无生能量"
},
		descriptionLocalized: {
			"deDE": "Eure maximale Essenz ist um {3/6/9/12/15/18/21/24/27/30} erhöht.\n\nTags: Essence.",
			"esES": "Tu esencia máxima aumenta {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Essence.",
			"esMX": "Tu Esencia máxima aumenta en {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Essence.",
			"frFR": "Votre essence maximale est augmentée de {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Essence.",
			"itIT": "La tua essenza massima aumenta di {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Essence.",
			"jaJP": "精髄の上限が{3/6/9/12/15/18/21/24/27/30}増加する。\n\nTags: Essence.",
			"koKR": "최대 정수가 {3/6/9/12/15/18/21/24/27/30} 증가합니다.\n\nTags: Essence.",
			"plPL": "Twoja maksymalna esencja jest zwiększona o {3/6/9/12/15/18/21/24/27/30} pkt..\n\nTags: Essence.",
			"ptBR": "Sua essência máxima é aumentada em {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Essence.",
			"ruRU": "Максимальный запас эссенции увеличивается на {3/6/9/12/15/18/21/24/27/30} ед.\n\nTags: Essence.",
			"zhCN": "你的精魂上限提高{3/6/9/12/15/18/21/24/27/30}点。\n\nTags: Essence."
},
		id: 36,
		maxPoints: 3,
		x: 149.05,
		y: -273.915
	},
	"Imperfectly Balanced": {
		connections: [ "Unliving Energy" ],
		description: `Your Core Skills cost x{5/10/15/20/25/30/35/40/45/50}% more Essence, but deal x{10/20/30/40/50/60/70/80/90/100}% increased damage.

Tags: Damage, Essence, Core.`,
		nameLocalized: {
			"deDE": "Aus dem Gleichgewicht",
			"esES": "Equilibrio imperfecto",
			"esMX": "Imperfectamente Equilibrado",
			"frFR": "Équilibre imparfait",
			"itIT": "Equilibrio Imperfetto",
			"jaJP": "不完全な均衡",
			"koKR": "불완전한 균형",
			"plPL": "Niedoskonała Równowaga",
			"ptBR": "Imperfeitamente Equilibrado",
			"ruRU": "Хрупкий баланс",
			"zhCN": "不完美平衡"
},
		descriptionLocalized: {
			"deDE": "Eure Basisfertigkeiten kosten x{5/10/15/20/25/30/35/40/45/50}% mehr Essenz, aber verursachen x{10/20/30/40/50/60/70/80/90/100}% mehr Schaden.\n\nTags: Damage, Essence, Core.",
			"esES": "Tus habilidades principales cuestan un x{5/10/15/20/25/30/35/40/45/50}% más de esencia, pero infligen un x{10/20/30/40/50/60/70/80/90/100}% más de daño.\n\nTags: Damage, Essence, Core.",
			"esMX": "Tus habilidades principales cuestan un x{5/10/15/20/25/30/35/40/45/50}% más de Esencia, pero infligen un x{10/20/30/40/50/60/70/80/90/100}% más de daño.\n\nTags: Damage, Essence, Core.",
			"frFR": "Vos compétences principales coûtent x{5/10/15/20/25/30/35/40/45/50}% d'essence en plus, mais infligent x{10/20/30/40/50/60/70/80/90/100}% de dégâts supplémentaires.\n\nTags: Damage, Essence, Core.",
			"itIT": "Le tue abilità primarie costano il x{5/10/15/20/25/30/35/40/45/50}% di essenza in più, ma infliggono il x{10/20/30/40/50/60/70/80/90/100}% di danni aggiuntivi.\n\nTags: Damage, Essence, Core.",
			"jaJP": "コアスキルで消費される精髄がx{5/10/15/20/25/30/35/40/45/50}%増加するが、ダメージがx{10/20/30/40/50/60/70/80/90/100}%増加する。\n\nTags: Damage, Essence, Core.",
			"koKR": "핵심 기술의 정수 소모량이 x{5/10/15/20/25/30/35/40/45/50}% 증가하지만, 주는 피해도 x{10/20/30/40/50/60/70/80/90/100}% 증가합니다.\n\nTags: Damage, Essence, Core.",
			"plPL": "Twoje umiejętności Główne zużywają o x{5/10/15/20/25/30/35/40/45/50}% więcej esencji, ale zadają o x{10/20/30/40/50/60/70/80/90/100}% więcej obrażeń.\n\nTags: Damage, Essence, Core.",
			"ptBR": "Suas habilidades principais custam {5/10/15/20/25/30/35/40/45/50}% mais essência, mas causam {10/20/30/40/50/60/70/80/90/100}% de dano aumentado.\n\nTags: Damage, Essence, Core.",
			"ruRU": "Основные умения расходуют на x{5/10/15/20/25/30/35/40/45/50}% больше эссенции, но наносят на x{10/20/30/40/50/60/70/80/90/100}% больше урона.\n\nTags: Damage, Essence, Core.",
			"zhCN": "你的核心技能消耗的精魂提高x{5/10/15/20/25/30/35/40/45/50}%,但造成的伤害也会提高x{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: Damage, Essence, Core."
},
		id: 37,
		maxPoints: 3,
		x: 150.19,
		y: -449.76
	},
	"Hewed Flesh": {
		connections: [ "Core" ],
		description: `Lucky Hit: Your damage has up to a {4/8/12/16/20/24/28/32/36/40}% chance to create a Corpse at the target's location.

This chance is doubled against Bosses.

Tags: Lucky Hit, Corpse.`,
		nameLocalized: {
			"deDE": "Geschundenes Fleisch",
			"esES": "Carne tallada",
			"esMX": "Corte de Carne",
			"frFR": "Chair dépecée",
			"itIT": "Carne Martoriata",
			"jaJP": "蘇りし肉体",
			"koKR": "잘린 살점",
			"plPL": "Okrawane Mięso",
			"ptBR": "Carne Cortada",
			"ruRU": "Обрезки плоти",
			"zhCN": "凿削血肉"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Euer Schaden verfügt über eine Chance von bis zu {4/8/12/16/20/24/28/32/36/40}%, an der Position des Ziels eine Leiche zu erschaffen.\n\nGegen Bosse verdoppelt sich diese Chance.\n\nTags: Lucky Hit, Corpse.",
			"esES": "Golpe de suerte: Tu daño tiene hasta un {4/8/12/16/20/24/28/32/36/40}% de probabilidad de crear un cadáver en la ubicación del objetivo.\n\nEsta probabilidad se duplica contra jefes.\n\nTags: Lucky Hit, Corpse.",
			"esMX": "Golpe afortunado: Tu daño tiene hasta un {4/8/12/16/20/24/28/32/36/40}% de probabilidad de crear un cadáver en la ubicación del objetivo.\n\nEsta probabilidad se duplica contra jefes.\n\nTags: Lucky Hit, Corpse.",
			"frFR": "Coup de chance : vos dégâts ont jusqu'à {4/8/12/16/20/24/28/32/36/40}% de chances de générer un cadavre à l'emplacement de la cible.\n\nCes chances sont doublées contre les boss.\n\nTags: Lucky Hit, Corpse.",
			"itIT": "Colpo fortunato: i tuoi danni hanno fino al {4/8/12/16/20/24/28/32/36/40}% di probabilità di creare un cadavere alla posizione del bersaglio.\n\nQuesta probabilità raddoppia contro i boss.\n\nTags: Lucky Hit, Corpse.",
			"jaJP": "幸運の一撃:自分でダメージを与えると、最大{4/8/12/16/20/24/28/32/36/40}%の確率で標的の位置に死体が出現する。\n\nボスに対しては確率が2倍になる。\n\nTags: Lucky Hit, Corpse.",
			"koKR": "행운의 적중: 피해를 주면 최대 {4/8/12/16/20/24/28/32/36/40}% 확률로 대상의 위치에 시체가 생성됩니다.\n\n우두머리를 상대할 때는 확률이 2배로 증가합니다.\n\nTags: Lucky Hit, Corpse.",
			"plPL": "Szczęśliwy traf: Zadane przez ciebie obrażenia mają maksymalnie {4/8/12/16/20/24/28/32/36/40}% szans na stworzenie zwłok w wyznaczonym miejscu.\n\nSzansa ta jest podwojona w przypadku bossów.\n\nTags: Lucky Hit, Corpse.",
			"ptBR": "Golpe de Sorte: Seu dano tem até {4/8/12/16/20/24/28/32/36/40}% de chance de criar um cadáver no local do alvo.\n\nA chance é dobrada contra chefes.\n\nTags: Lucky Hit, Corpse.",
			"ruRU": "Удачный удар: нанося урон, вы с вероятностью до {4/8/12/16/20/24/28/32/36/40}% создаете труп под целью.\n\nВероятность удваивается, если цель является боссом.\n\nTags: Lucky Hit, Corpse.",
			"zhCN": "幸运一击:你的伤害最多有{4/8/12/16/20/24/28/32/36/40}%几率在目标位置生成一具亡骸。\n\n在面对首领时该几率翻倍。\n\nTags: Lucky Hit, Corpse."
},
		id: 121,
		maxPoints: 3,
		x: 150.135,
		y: 264.425
	},
};

necromancerData["Macabre"] = {
	"Corpse Explosion": {
		connections: [ "Enhanced Corpse Explosion", "Macabre" ],
		description: `Lucky Hit Chance: {#}%
Detonate a Corpse, dealing {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% damage to surrounding enemies.

Tags: Corpse, Corruption, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Leichenexplosion",
			"esES": "Explosión de cadáveres",
			"esMX": "Explosión Cadavérica",
			"frFR": "Explosion macabre",
			"itIT": "Esplosione Cadaverica",
			"jaJP": "コープス・エクスプロージョン",
			"koKR": "시체 폭발",
			"plPL": "Wybuch Zwłok",
			"ptBR": "Explodir Cadáver",
			"ruRU": "Взрыв трупа",
			"zhCN": "邪爆"
},
		descriptionLocalized: {
			"deDE": "Glückstrefferchance: {#}%\nSprengt eine Leiche und fügt Gegnern in der Nähe {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% Schaden zu.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"esES": "Probabilidad de golpe de suerte: {#}%\nDetonas un cadáver para infligir {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de daño a los enemigos cercanos.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"esMX": "Probabilidad de golpe afortunado: {#}%\nDetonas un cadáver e infliges {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de daño a los enemigos circundantes.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"frFR": "Chances de coup de chance : {#}%\nVous faites exploser un cadavre, ce qui inflige {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% points de dégâts aux adversaires à proximité.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"itIT": "Probabilità di colpo fortunato: {#}%\nFai esplodere un cadavere, infliggendo {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% danni ai nemici circostanti.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"jaJP": "幸運の一撃発生率: {#}%\n死体を爆発させ、周囲の敵に{75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%のダメージを与える。\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"koKR": "행운의 적중 확률: {#}%\n시체를 폭발시켜 주위 적들에게 {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%의 피해를 줍니다.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"plPL": "Szansa na szczęśliwy traf: {#}%\nWybuchając, zwłoki zadają {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% pkt. obrażeń pobliskim wrogom.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"ptBR": "Chance de Golpe de Sorte: {#}%\nExplode um cadáver, causando {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de dano a inimigos ao redor.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"ruRU": "Вероятность удачного удара: {#}%.\nВзрывает труп, нанося ближайшим противникам {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% ед. урона.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"zhCN": "幸运一击几率:{#}%\n引爆一具亡骸,对周围的敌人造成{75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%点伤害。\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown."
},
		id: 39,
		maxPoints: 5,
		values: [ "40" ],
		x: -570.055,
		y: -2.03
	},
	"Enhanced Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Corpse Explosion", "Blighted Corpse Explosion", "Plagued Corpse Explosion" ],
		description: `Corpse Explosion's radius is increased by 15%.

Tags: Corpse, Corruption, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Leichenexplosion",
			"esES": "Explosión de cadáveres mejorada",
			"esMX": "Explosión Cadavérica Potenciada",
			"frFR": "Explosion macabre renforcée",
			"itIT": "Esplosione Cadaverica Rinforzata",
			"jaJP": "コープス・エクスプロージョン(強化版)",
			"koKR": "강화된 시체 폭발",
			"plPL": "Wzmocniony Wybuch Zwłok",
			"ptBR": "Explodir Cadáver Aperfeiçoado",
			"ruRU": "Усиленный взрыв трупа",
			"zhCN": "强化邪爆"
},
		descriptionLocalized: {
			"deDE": "Der Radius von Leichenexplosion erhöht sich um 15%.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"esES": "El radio de Explosión de cadáveres aumenta un 15%.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"esMX": "El radio de Explosión Cadavérica aumenta un 15%.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"frFR": "Le rayon d'Explosion macabre est augmenté de 15%.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"itIT": "Il raggio di Esplosione Cadaverica aumenta del 15%.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"jaJP": "〈コープス・エクスプロージョン〉の効果範囲が15%拡大する。\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"koKR": "시체 폭발의 반경이 15% 증가합니다.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"plPL": "Zwiększa promień Wybuchu Zwłok o 15%.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"ptBR": "O raio de Explodir Cadáver é aumentado em 15%.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"ruRU": "Радиус \"Взрыва трупа\" увеличивается на x15%.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"zhCN": "邪爆范围扩大15%。\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown."
},
		id: 40,
		maxPoints: 1,
		x: -964.178,
		y: -2.155
	},
	"Blighted Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Enhanced Corpse Explosion" ],
		description: `Corpse Explosion becomes a Darkness Skill and, instead of exploding, releases a vile miasma dealing {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% Shadow Damage over 6 seconds.

Tags: Corpse, Corruption, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Verpestete Leichenexplosion",
			"esES": "Explosión de cadáveres apestada",
			"esMX": "Explosión Cadavérica Infestada",
			"frFR": "Explosion macabre purulente",
			"itIT": "Esplosione Cadaverica Infetta",
			"jaJP": "コープス・エクスプロージョン(害毒)",
			"koKR": "마름병 걸린 시체 폭발",
			"plPL": "Morowy Wybuch Zwłok",
			"ptBR": "Explodir Cadáver Empesteado",
			"ruRU": "Гнилостный взрыв трупа",
			"zhCN": "枯萎邪爆"
},
		descriptionLocalized: {
			"deDE": "Leichenexplosion wird zur Dunkelheitsfertigkeit. Anstatt zu explodieren, verströmt es ein abscheuliches Miasma, das im Verlauf von 6 Sek. {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% Schattenschaden zufügt.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"esES": "Explosión de cadáveres se convierte en una habilidad de oscuridad y, en vez de explotar, libera un miasma repugnante que inflige {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% de daño de sombra durante 6 s.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"esMX": "Explosión Cadavérica se vuelve una habilidad de Oscuridad y, en lugar de explotar, libera un miasma vil que inflige {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% de daño de sombra durante 6 segundos.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"frFR": "Explosion macabre devient une compétence de ténèbres qui, au lieu de faire exploser un cadavre, libère maintenant un ignoble miasme infligeant {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% points de dégâts d'ombre en 6 s.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"itIT": "Esplosione Cadaverica diventa un'abilità di oscurità e invece di esplodere rilascia un miasma vile che infligge {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% danni da ombra in 6 s.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"jaJP": "〈コープス・エクスプロージョン〉が闇スキルになり、爆発する代わりに毒の瘴気を放ち、6秒かけて{109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}%のシャドウダメージを与える。\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"koKR": "시체 폭발이 어둠 기술이 되며, 폭발하지 않고 대신 끔찍한 독기를 내뿜어 6초에 걸쳐 {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}%의 암흑 피해를 줍니다.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"plPL": "Wybuch Zwłok staje się umiejętnością Ciemności. Zamiast eksplozji wyzwolone zostają cuchnące miazmaty, które zadają {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% pkt. obrażeń od Cienia w ciągu 6 sek.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"ptBR": "Explodir Cadáver se torna uma habilidade de escuridão e, em vez de explodir, libera um miasma vil, causando {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% dano de sombra ao longo de 6 segundos.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"ruRU": "\"Взрыв трупа\" становится умением тьмы и больше не производит взрыв, а высвобождает из тела ужасные миазмы, наносящие {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% ед. урона от темной магии за 6 сек.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"zhCN": "邪爆变为黑暗技能并不再产生爆炸,而是释放一股邪恶的瘴气,在6秒内造成{109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}%点暗影伤害。\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown."
},
		id: 122,
		maxPoints: 1,
		x: -1186.325,
		y: -102.68
	},
	"Plagued Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Enhanced Corpse Explosion" ],
		description: `Corpse Explosion deals x10% increased damage to enemies that are Slowed, Stunned or Vulnerable. These damage bonuses can stack.

Tags: Corpse, Corruption, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Verseuchte Leichenexplosion",
			"esES": "Explosión de cadáveres plagada",
			"esMX": "Explosión Cadavérica Apestada",
			"frFR": "Explosion macabre pestiférée",
			"itIT": "Esplosione Cadaverica Appestante",
			"jaJP": "コープス・エクスプロージョン(疫病)",
			"koKR": "역병 시체 폭발",
			"plPL": "Zaraźliwy Wybuch Zwłok",
			"ptBR": "Explodir Cadáver Pestilento",
			"ruRU": "Чумной взрыв трупа",
			"zhCN": "疫病邪爆"
},
		descriptionLocalized: {
			"deDE": "Leichenexplosion fügt verlangsamten, betäubten oder verwundbaren Gegnern x10% mehr Schaden zu. Diese Schadensboni sind stapelbar.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"esES": "Explosión de cadáveres inflige un x10% más de daño a enemigos ralentizados, aturdidos o vulnerables. Estos bonus de daño pueden acumularse.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"esMX": "Explosión Cadavérica inflige un x10% más de daño a los enemigos ralentizados, aturdidos o vulnerables. Estas bonificaciones de daño pueden acumularse.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"frFR": "Explosion macabre inflige x10% de dégâts supplémentaires aux cibles ralenties, étourdies ou vulnérables. Ces bonus aux dégâts peuvent se cumuler.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"itIT": "Esplosione Cadaverica infligge il x10% di danni aggiuntivi ai nemici rallentati, storditi o vulnerabili. Questi danni bonus sono cumulabili.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"jaJP": "〈コープス・エクスプロージョン〉が移動速度低下、スタン、または脆弱状態の敵に与えるダメージがx10%増加する。このダメージボーナスは蓄積する。\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"koKR": "감속, 기절, 취약 상태의 적에게 시체 폭발로 주는 피해가 x10% 증가합니다. 이 피해 증가 효과는 중첩될 수 있습니다.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"plPL": "Wybuch Zwłok zadaje spowolnionym, ogłuszonym lub odsłoniętym wrogom obrażenia zwiększone o x10%. Te premie do obrażeń mogą się kumulować.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"ptBR": "Explodir Cadáver causa 10% de dano aumentado a inimigos desacelerados, atordoados ou vulneráveis. Esses bônus de dano podem acumular.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"ruRU": "\"Взрыв трупа\" наносит на x10% больше урона замедленным, оглушенным или уязвимым противникам. Бонусы к урону суммируются.\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown.",
			"zhCN": "邪爆对处于减速、昏迷或易伤状态的敌人造成的伤害提高x10%。这些伤害加成可以叠加。\n\nTags: Corpse, Corruption, Damage, Physical, Cooldown."
},
		id: 123,
		maxPoints: 1,
		x: -1183.965,
		y: 98.81
	},
	"Grim Harvest": {
		connections: [ "Fueled by Death", "Macabre" ],
		description: `Consuming a Corpse generates {3/6/9/12/15/18/21/24/27/30} Essence.

Tags: Essence, Corpse.`,
		nameLocalized: {
			"deDE": "Bluternte",
			"esES": "Cosecha nefasta",
			"esMX": "Cosecha Desagradable",
			"frFR": "Moisson sinistre",
			"itIT": "Oscura Mietitura",
			"jaJP": "残忍な収穫",
			"koKR": "기분 나쁜 수확",
			"plPL": "Ponure Żniwa",
			"ptBR": "Colheita Sinistra",
			"ruRU": "Мрачный урожай",
			"zhCN": "恐怖收割"
},
		descriptionLocalized: {
			"deDE": "Der Verbrauch einer Leiche erzeugt {3/6/9/12/15/18/21/24/27/30} Essenz.\n\nTags: Essence, Corpse.",
			"esES": "Consumir un cadáver genera {3/6/9/12/15/18/21/24/27/30} de esencia.\n\nTags: Essence, Corpse.",
			"esMX": "Consumir un cadáver genera {3/6/9/12/15/18/21/24/27/30} de Esencia.\n\nTags: Essence, Corpse.",
			"frFR": "Consommer un cadavre vous confère {3/6/9/12/15/18/21/24/27/30} points d'essence.\n\nTags: Essence, Corpse.",
			"itIT": "Consumare un cadavere genera {3/6/9/12/15/18/21/24/27/30} essenza.\n\nTags: Essence, Corpse.",
			"jaJP": "死体を消費すると精髄を{3/6/9/12/15/18/21/24/27/30}回復する。\n\nTags: Essence, Corpse.",
			"koKR": "시체 섭취 시 정수를 {3/6/9/12/15/18/21/24/27/30} 생성합니다.\n\nTags: Essence, Corpse.",
			"plPL": "Pochłanianie zwłok generuje {3/6/9/12/15/18/21/24/27/30} pkt. esencji.\n\nTags: Essence, Corpse.",
			"ptBR": "Consumir um cadáver gera {3/6/9/12/15/18/21/24/27/30} de essência.\n\nTags: Essence, Corpse.",
			"ruRU": "Расходуя труп, вы получаете {3/6/9/12/15/18/21/24/27/30} ед. эссенции.\n\nTags: Essence, Corpse.",
			"zhCN": "消耗一具亡骸生成{3/6/9/12/15/18/21/24/27/30}点精魂。\n\nTags: Essence, Corpse."
},
		id: 43,
		maxPoints: 3,
		x: -3.265,
		y: 300.7
	},
	"Fueled by Death": {
		connections: [ "Grim Harvest" ],
		description: `You deal x{4/8/12/16/20/24/28/32/36/40}% increased damage for 4 seconds after consuming a Corpse.

Tags: Damage, Corpse.`,
		nameLocalized: {
			"deDE": "Kraftbringender Tod",
			"esES": "Impulso mortal",
			"esMX": "Impulsado por la Muerte",
			"frFR": "Vol de mort",
			"itIT": "Alimentazione Mortale",
			"jaJP": "死者を糧に",
			"koKR": "죽음의 동력",
			"plPL": "Paliwo Śmierci",
			"ptBR": "Energia Mortal",
			"ruRU": "Смерть придает силы",
			"zhCN": "死亡增力"
},
		descriptionLocalized: {
			"deDE": "Ihr verursacht nach dem Verbrauch einer Leiche 4 Sek. lang x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden.\n\nTags: Damage, Corpse.",
			"esES": "Infliges un x{4/8/12/16/20/24/28/32/36/40}% más de daño durante 4 s tras consumir un cadáver.\n\nTags: Damage, Corpse.",
			"esMX": "Infliges un x{4/8/12/16/20/24/28/32/36/40}% más de daño durante 4 segundos después de consumir un cadáver.\n\nTags: Damage, Corpse.",
			"frFR": "Après avoir consommé un cadavre, vous infligez x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires pendant 4 s.\n\nTags: Damage, Corpse.",
			"itIT": "Infliggi il x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi per 4 s dopo aver consumato un cadavere.\n\nTags: Damage, Corpse.",
			"jaJP": "死体を消費した後の4秒間、与えるダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n\nTags: Damage, Corpse.",
			"koKR": "시체를 섭취한 후 4초 동안 주는 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: Damage, Corpse.",
			"plPL": "Po pochłonięciu zwłok zadajesz o x{4/8/12/16/20/24/28/32/36/40}% więcej obrażeń przez 4 sek.\n\nTags: Damage, Corpse.",
			"ptBR": "Você causa {4/8/12/16/20/24/28/32/36/40}% de dano aumentado por 4 segundos depois de consumir um cadáver.\n\nTags: Damage, Corpse.",
			"ruRU": "Наносимый урон увеличивается на x{4/8/12/16/20/24/28/32/36/40}% на 4 сек. после того как вы расходуете труп.\n\nTags: Damage, Corpse.",
			"zhCN": "消耗一具亡骸后,你造成的伤害提高x{4/8/12/16/20/24/28/32/36/40}%,持续4秒。\n\nTags: Damage, Corpse."
},
		id: 44,
		maxPoints: 3,
		x: -0.3,
		y: 530.055
	},
	"Spiked Armor": {
		connections: [ "Macabre" ],
		description: `Gain {40/80/120/160/200/240/280/320/360/400} Thorns.

Tags: Thorns.`,
		nameLocalized: {
			"deDE": "Stachelbewehrte Rüstung",
			"esES": "Armadura con pinchos",
			"esMX": "Armadura con Púas",
			"frFR": "Armure hérissée",
			"itIT": "Corazza Chiodata",
			"jaJP": "棘の鎧",
			"koKR": "대못 박힌 갑옷",
			"plPL": "Kolczasty Pancerz",
			"ptBR": "Armadura com Espinhos",
			"ruRU": "Шипастый доспех",
			"zhCN": "尖刺护甲"
},
		descriptionLocalized: {
			"deDE": "Erhaltet {40/80/120/160/200/240/280/320/360/400} Dornen.\n\nTags: Thorns.",
			"esES": "Obtienes {40/80/120/160/200/240/280/320/360/400} de espinas.\n\nTags: Thorns.",
			"esMX": "Obtienes {40/80/120/160/200/240/280/320/360/400} Espinas.\n\nTags: Thorns.",
			"frFR": "Vous gagnez un montant de dégâts d'épines égal à {40/80/120/160/200/240/280/320/360/400}.\n\nTags: Thorns.",
			"itIT": "Ottieni {40/80/120/160/200/240/280/320/360/400} Spine.\n\nTags: Thorns.",
			"jaJP": "{40/80/120/160/200/240/280/320/360/400}の〈荊棘の加護〉を得る。\n\nTags: Thorns.",
			"koKR": "가시를 {40/80/120/160/200/240/280/320/360/400} 얻습니다.\n\nTags: Thorns.",
			"plPL": "Zyskujesz premię {40/80/120/160/200/240/280/320/360/400} pkt. do obrażeń od cierni.\n\nTags: Thorns.",
			"ptBR": "Recebe {40/80/120/160/200/240/280/320/360/400} espinhos.\n\nTags: Thorns.",
			"ruRU": "Вы получаете {40/80/120/160/200/240/280/320/360/400} к показателю эффекта шипов.\n\nTags: Thorns.",
			"zhCN": "获得{40/80/120/160/200/240/280/320/360/400}点荆棘。\n\nTags: Thorns."
},
		id: 124,
		maxPoints: 3,
		x: 401.03,
		y: -216.235
	},
	"Blood Mist": {
		connections: [ "Enhanced Blood Mist", "Macabre" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Disperse into a bloody mist, becoming Immune for 3 seconds. Your Movement Speed is reduced by 20% and you periodically deal 1.7% damage to enemies and Healing for {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% of your Maximum Life.

Tags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Blutnebel",
			"esES": "Bruma de sangre",
			"esMX": "Niebla Sangrienta",
			"frFR": "Brume de sang",
			"itIT": "Nebbia di Sangue",
			"jaJP": "ブラッド・ミスト",
			"koKR": "피 안개",
			"plPL": "Krwawa Mgła",
			"ptBR": "Névoa de Sangue",
			"ruRU": "Кровавый туман",
			"zhCN": "血雾"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nLöst Euch in einen blutigen Nebel auf und werdet 3 Sek. lang immun. Eure Bewegungsgeschwindigkeit ist um 20% reduziert und Ihr fügt Gegnern in regelmäßigen Abständen 1.7% Schaden zu und heilt Euch um {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% Eures maximalen Lebens.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nTe dispersas en forma de bruma sangrienta para volverte inmune durante 3 s. Tu velocidad de movimiento se reduce un 20%, infliges 1.7% de daño periódicamente a los enemigos y te curas un {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% de tu vida máxima.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nTe disipas en una niebla sangrienta y te vuelves inmune durante 3 segundos. Tu velocidad de movimiento se reduce un 20%, infliges 1.7% de daño a los enemigos periódicamente y te sanas por un {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% de tu vida máxima.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVotre enveloppe charnelle se sublime en une brume de sang, ce qui vous rend insensible pendant 3 s. Votre vitesse de déplacement est réduite de 20%, vous infligez régulièrement 1.7% points de dégâts aux adversaires et récupérez un montant de points de vie égal à {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% de votre maximum de points de vie.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nTi disperdi in una nebbia di sangue, diventando immune per 3 s. La tua velocità di movimento è ridotta del 20% e infliggi periodicamente 1.7% danni ai nemici, curandoti del {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% della tua Vita massima.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n血の霧に変身して3秒間、無効状態になる。移動速度が20%低下し、敵に1.7%のダメージを与えて自身のライフ最大値の{0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% にあたるを回復する。\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n3초 동안 피의 안개로 변해 면역 상태가 됩니다. 이동 속도가 20% 감소하고, 주기적으로 적에게 1.7%의 피해를 주며, 최대 생명력의 {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}%만큼 생명력을 회복합니다.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nZamieniasz się w krwawą mgłę i otrzymujesz niewrażliwość na 3 sek. Twoja szybkość ruchu jest zmniejszona o 20% i co jakiś czas zadajesz wrogom 1.7% pkt. obrażeń oraz przywracasz sobie {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% maksymalnego zdrowia.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nDispersa-se em uma névoa sangrenta, tornando-se imune por 3 segundos. Sua velocidade de movimento é reduzida em 20%, você periodicamente causa 1.7% de dano aos inimigos e cura-se em {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% da sua vida máxima.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы превращаетесь в кровавый туман и получаете невосприимчивость на 3 сек. Ваша скорость передвижения снижается на 20%, вы время от времени наносите противникам 1.7% ед. урона и восполняете {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% максимального запаса здоровья.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n化作一片血雾,在3秒内获得免疫。你的移动速度降低20%,并且周期性对敌人造成1.7%点伤害,恢复你{0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}%生命上限。\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction."
},
		id: 46,
		maxPoints: 5,
		values: [ "{20/19/18/17/16/15.2/14.4/13.6/12.8/12}", "9" ],
		x: 6.515,
		y: -278.795
	},
	"Enhanced Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Blood Mist", "Ghastly Blood Mist", "Dreadful Blood Mist" ],
		description: `Casting a Skill that Overpowers reduces the cooldown of Blood Mist by 2 seconds.

Tags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Verbesserter Blutnebel",
			"esES": "Bruma de sangre mejorada",
			"esMX": "Niebla Sangrienta Potenciada",
			"frFR": "Brume de sang renforcée",
			"itIT": "Nebbia di Sangue Rinforzata",
			"jaJP": "ブラッド・ミスト(強化版)",
			"koKR": "강화된 피 안개",
			"plPL": "Wzmocniona Krwawa Mgła",
			"ptBR": "Névoa de Sangue Aperfeiçoada",
			"ruRU": "Усиленный кровавый туман",
			"zhCN": "强化血雾"
},
		descriptionLocalized: {
			"deDE": "Das Wirken einer Fertigkeit, die überwältigt, reduziert die Abklingzeit von Blutnebel um 2 Sek.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"esES": "Lanzar una habilidad que arrolla reduce 2 s el tiempo de reutilización de Bruma de sangre.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"esMX": "Lanzar una habilidad que abruma reduce 2 segundos la recuperación de Niebla Sangrienta.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"frFR": "Utiliser une compétence qui accable les adversaires réduit le temps de recharge de Brume de sang de 2 s.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"itIT": "Lanciare un'abilità che attiva Sopraffazione riduce il tempo di recupero di Nebbia di Sangue di 2 s.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"jaJP": "使用したスキルがオーバーパワーになると、〈ブラッド・ミスト〉のクールダウンが2秒短縮される。\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"koKR": "제압 기술을 시전하면 피 안개의 재사용 대기시간이 2초 감소합니다.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"plPL": "Użycie umiejętności, która przytłacza, skraca czas odnowienia Krwawej Mgły o 2 sek.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"ptBR": "Lançar uma habilidade que desfere Golpe Brutal reduz a recarga de Névoa de Sangue em 2 segundos.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"ruRU": "Умения, подавляющие противников, сокращают время восстановления \"Кровавого тумана\" на 2 сек.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"zhCN": "施放一个压制技能可以使血雾的冷却时间缩短2秒。\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction."
},
		id: 47,
		maxPoints: 1,
		x: 4.72,
		y: -504.595
	},
	"Ghastly Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Enhanced Blood Mist" ],
		description: `Blood Mist leaves behind a Corpse every 0.95 second.

Tags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Grässlicher Blutnebel",
			"esES": "Bruma de sangre truculenta",
			"esMX": "Niebla Sangrienta Horrenda",
			"frFR": "Brume de sang funèbre",
			"itIT": "Nebbia di Sangue Spettrale",
			"jaJP": "ブラッド・ミスト(凄惨)",
			"koKR": "섬뜩한 피 안개",
			"plPL": "Upiorna Krwawa Mgła",
			"ptBR": "Névoa de Sangue Hedionda",
			"ruRU": "Зловещий кровавый туман",
			"zhCN": "惊骇血雾"
},
		descriptionLocalized: {
			"deDE": "Blutnebel hinterlässt alle 0.95 Sek. eine Leiche.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"esES": "Bruma de sangre deja un cadáver tras de sí cada 0.95 s.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"esMX": "Niebla Sangrienta deja un cadáver cada 0.95 segundo.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"frFR": "Brume de sang laisse un cadavre dans son sillage toutes les 0.95 s.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"itIT": "Nebbia di Sangue rilascia un cadavere ogni 0.95 s.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"jaJP": "〈ブラッド・ミスト〉が0.95秒ごとに死体を1体残す。\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"koKR": "피 안개가 0.95초마다 시체를 남깁니다.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"plPL": "Krwawa Mgła pozostawia za sobą zwłoki co 0.95 sek.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"ptBR": "Névoa de Sangue deixa para trás um cadáver a cada 0.95 segundo.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"ruRU": "\"Кровавый туман\" раз в 0.95 сек. создает труп.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"zhCN": "血雾每0.95秒留下一具亡骸。\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction."
},
		id: 48,
		maxPoints: 1,
		x: -173.752,
		y: -623.38
	},
	"Dreadful Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Enhanced Blood Mist" ],
		description: `Blood Mist Fortifies you for 0.5% Base Life each time it hits an enemy.

Tags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Furchterregender Blutnebel",
			"esES": "Bruma de sangre pavorosa",
			"esMX": "Niebla Sangrienta Espantosa",
			"frFR": "Brume de sang épouvantable",
			"itIT": "Nebbia di Sangue Terrificante",
			"jaJP": "ブラッド・ミスト(畏怖)",
			"koKR": "끔찍한 피 안개",
			"plPL": "Przerażająca Krwawa Mgła",
			"ptBR": "Névoa de Sangue Pavorosa",
			"ruRU": "Кошмарный кровавый туман",
			"zhCN": "可怖血雾"
},
		descriptionLocalized: {
			"deDE": "Blutnebel verleiht Euch mit jedem getroffenen Gegner Stählung in Höhe von 0.5% Eures Basislebens.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"esES": "Bruma de sangre te otorga un 0.5% de tu vida base como fortificación cada vez que golpea a un enemigo.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"esMX": "Niebla Sangrienta te fortifica con 0.5% de tu vida de base cada vez que golpea a un enemigo.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"frFR": "Brume de sang vous confère un montant de fortification égal à 0.5% de vos points de vie de base à chaque fois qu'elle touche une cible.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"itIT": "Nebbia di Sangue ti fornisce Fortificazione per il 0.5% della Vita base ogni volta che colpisce un nemico.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"jaJP": "〈ブラッド・ミスト〉が敵1体に命中するたびに、基本ライフの0.5%にあたる の強化を獲得する。\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"koKR": "피 안개가 적에게 공격을 적중시킬 때마다 자신을 기본 생명력의 0.5%만큼 보강합니다.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"plPL": "Za każdym razem, gdy Krwawa Mgła trafia wroga, zapewnia ci umocnienie równe 0.5% twojego podstawowego zdrowia.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"ptBR": "Névoa de Sangue fortifica você em 0.5% da vida básica sempre que atinge um inimigo.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"ruRU": "Каждый раз, когда \"Кровавый туман\" наносит урон, вы получаете укрепление в объеме 0.5% базового запаса здоровья.\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.",
			"zhCN": "血雾强固你0.5%基础生命。\n\nTags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction."
},
		id: 49,
		maxPoints: 1,
		x: 195.505,
		y: -624.15
	},
	"Bone Prison": {
		connections: [ "Enhanced Bone Prison", "Macabre" ],
		description: `Cooldown: {#} seconds
Unearth a prison of bone with {#} Life that surrounds the target area for 6 seconds.

Tags: Macabre, Bone, Cooldown.`,
		nameLocalized: {
			"deDE": "Knochengefängnis",
			"esES": "Prisión de huesos",
			"esMX": "Prisión de Huesos",
			"frFR": "Prison d'os",
			"itIT": "Prigione d'Ossa",
			"jaJP": "ボーン・プリズン",
			"koKR": "뼈 감옥",
			"plPL": "Więzienie z Kości",
			"ptBR": "Prisão de Ossos",
			"ruRU": "Костяная тюрьма",
			"zhCN": "骨牢"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nLasst ein Knochengefängnis mit {#} Leben aus dem Boden steigen, das den Zielbereich 6 Sek. lang umgibt.\n\nTags: Macabre, Bone, Cooldown.",
			"esES": "Tiempo de reutilización: {#} s\nDesentierras una prisión de huesos con {#} de vida que rodea la zona seleccionada durante 6 s.\n\nTags: Macabre, Bone, Cooldown.",
			"esMX": "Recuperación: {#} segundos\nDesentierras una prisión ósea con {#} de vida que rodea el área objetivo durante 6 segundos.\n\nTags: Macabre, Bone, Cooldown.",
			"frFR": "Temps de recharge : {#} s\nVous exhumez une prison d'os avec {#} points de vie qui entoure la zone ciblée pendant 6 s.\n\nTags: Macabre, Bone, Cooldown.",
			"itIT": "Tempo di recupero: {#} s\nInnalzi una prigione d'ossa con {#} vita che circonda l'area bersaglio per 6 s.\n\nTags: Macabre, Bone, Cooldown.",
			"jaJP": "クールダウン: {#}秒\n骨の檻を地面から出現させる。この檻はライフが{#}あり、標的エリアを6秒間取り囲む。\n\nTags: Macabre, Bone, Cooldown.",
			"koKR": "재사용 대기시간: {#}초\n땅에서 뼈의 감옥을 일으켜 세웁니다. 뼈의 감옥은 {#}의 생명력을 지니고 대상 지역을 6초 동안 둘러쌉니다.\n\nTags: Macabre, Bone, Cooldown.",
			"plPL": "Czas odnowienia: {#} sek.\nPrzywołujesz spod ziemi więzienie z kości, które ma {#} pkt. wytrzymałości i otacza wskazany obszar na 6 sek.\n\nTags: Macabre, Bone, Cooldown.",
			"ptBR": "Recarga: {#} segundos\nDesenterra uma prisão de ossos com {#} de vida ao redor da área selecionada por 6 segundos.\n\nTags: Macabre, Bone, Cooldown.",
			"ruRU": "Время восстановления: {#} сек.\nПоднимает из-под земли костяную тюрьму с {#} ед. прочности, которая огораживает указанную область в течение 6 сек.\n\nTags: Macabre, Bone, Cooldown.",
			"zhCN": "冷却时间:{#}秒\n从地面召唤一道具有{#}点生命的骨牢包围目标区域,持续6秒。\n\nTags: Macabre, Bone, Cooldown."
},
		id: 50,
		maxPoints: 5,
		values: [ "{20/19/18/17/16/15.2/14.4/13.6/12.8/12}", "" ],
		x: 411.49,
		y: 218.61
	},
	"Enhanced Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Bone Prison", "Ghastly Bone Prison", "Dreadful Bone Prison" ],
		description: `If an enemy is trapped by Bone Prison, gain 15 Essence, plus an additional 5 per enemy trapped.

Tags: Macabre, Bone, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbessertes Knochengefängnis",
			"esES": "Prisión de huesos mejorada",
			"esMX": "Prisión de Huesos Potenciada",
			"frFR": "Prison d'os renforcée",
			"itIT": "Prigione d'Ossa Rinforzata",
			"jaJP": "ボーン・プリズン(強化版)",
			"koKR": "강화된 뼈 감옥",
			"plPL": "Wzmocnione Więzienie z Kości",
			"ptBR": "Prisão de Ossos Aperfeiçoada",
			"ruRU": "Усиленная костяная тюрьма",
			"zhCN": "强化骨牢"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Gegner im Knochengefängnis eingeschlossen ist, erhaltet Ihr 15 Essenz, sowie zusätzliche 5 für jeden eingeschlossenen Gegner.\n\nTags: Macabre, Bone, Cooldown.",
			"esES": "Si un enemigo queda atrapado por Prisión de huesos, obtienes 15 de esencia y 5 más por cada enemigo atrapado.\n\nTags: Macabre, Bone, Cooldown.",
			"esMX": "Si un enemigo es atrapado por Prisión de Huesos, obtienes 15 de Esencia y 5 más por cada enemigo atrapado.\n\nTags: Macabre, Bone, Cooldown.",
			"frFR": "Si une cible est piégée par Prison d'os, vous gagnez 15 points d'essence plus 5 points supplémentaires par cible piégée.\n\nTags: Macabre, Bone, Cooldown.",
			"itIT": "Se un nemico viene intrappolato da Prigione d'Ossa, ottieni 15 essenza, più un ulteriore 5 per ogni nemico intrappolato.\n\nTags: Macabre, Bone, Cooldown.",
			"jaJP": "敵が骨の牢獄を攻撃するたびに、15の精髄を獲得する。\n\nTags: Macabre, Bone, Cooldown.",
			"koKR": "적이 뼈 감옥에 갇히면 정수를 15 얻고, 갇힌 적 하나당 추가로 정수를 5 얻습니다.\n\nTags: Macabre, Bone, Cooldown.",
			"plPL": "Jeśli wróg zostanie uwięziony przez Więzienie z Kości, zyskujesz 15 pkt. esencji oraz dodatkowe 5 za każdego uwięzionego wroga.\n\nTags: Macabre, Bone, Cooldown.",
			"ptBR": "Se um inimigo for preso por Prisão de Ossos, recebe 15 de essência, além de 5 adicional por inimigo preso.\n\nTags: Macabre, Bone, Cooldown.",
			"ruRU": "Заточая противника в костяную тюрьму, вы накапливаете 15 ед. эссенции. За каждого заточенного противника дополнительно накапливается еще 5 ед. эссенции.\n\nTags: Macabre, Bone, Cooldown.",
			"zhCN": "如果骨牢困住一名敌人,则获得15点精魂,每困住一名敌人额外获得5点精魂。\n\nTags: Macabre, Bone, Cooldown."
},
		id: 51,
		maxPoints: 1,
		x: 725.485,
		y: 358.205
	},
	"Ghastly Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Enhanced Bone Prison" ],
		description: `Enemies inside of Bone Prison are Vulnerable.

Tags: Macabre, Bone, Cooldown.`,
		nameLocalized: {
			"deDE": "Grässliches Knochengefängnis",
			"esES": "Prisión de huesos truculenta",
			"esMX": "Prisión de Huesos Horrenda",
			"frFR": "Prison d'os funèbre",
			"itIT": "Prigione d'Ossa Spettrale",
			"jaJP": "ボーン・プリズン(凄惨)",
			"koKR": "섬뜩한 뼈 감옥",
			"plPL": "Upiorne Więzienie z Kości",
			"ptBR": "Prisão de Ossos Hedionda",
			"ruRU": "Зловещая костяная тюрьма",
			"zhCN": "惊骇骨牢"
},
		descriptionLocalized: {
			"deDE": "Gegner im Knochengefängnis sind verwundbar.\n\nTags: Macabre, Bone, Cooldown.",
			"esES": "Los enemigos que quedan dentro de Prisión de huesos son vulnerables.\n\nTags: Macabre, Bone, Cooldown.",
			"esMX": "Los enemigos dentro de Prisión de Huesos son vulnerables.\n\nTags: Macabre, Bone, Cooldown.",
			"frFR": "Les cibles prises au piège dans Prison d'os sont vulnérables.\n\nTags: Macabre, Bone, Cooldown.",
			"itIT": "I nemici all'interno della Prigione d'Ossa sono vulnerabili.\n\nTags: Macabre, Bone, Cooldown.",
			"jaJP": "〈ボーン・プリズン〉の中に捕らわれた敵が脆弱状態になる。\n\nTags: Macabre, Bone, Cooldown.",
			"koKR": "뼈 감옥 안의 적이 취약해집니다.\n\nTags: Macabre, Bone, Cooldown.",
			"plPL": "Wrogowie w Więzieniu z Kości stają się odsłonięci.\n\nTags: Macabre, Bone, Cooldown.",
			"ptBR": "Inimigos dentro de Prisão de Ossos ficam vulneráveis.\n\nTags: Macabre, Bone, Cooldown.",
			"ruRU": "Противники в костяной тюрьме становятся уязвимыми.\n\nTags: Macabre, Bone, Cooldown.",
			"zhCN": "骨牢中的敌人会陷入易伤状态。\n\nTags: Macabre, Bone, Cooldown."
},
		id: 52,
		maxPoints: 1,
		x: 769.465,
		y: 494.305
	},
	"Dreadful Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Enhanced Bone Prison" ],
		description: `Fortify for 5% Base Life for each enemy trapped by Bone Prison.

Tags: Macabre, Bone, Cooldown.`,
		nameLocalized: {
			"deDE": "Furchterregendes Knochengefängnis",
			"esES": "Prisión de huesos pavorosa",
			"esMX": "Prisión de Huesos Espantosa",
			"frFR": "Prison d'os épouvantable",
			"itIT": "Prigione d'Ossa Terrificante",
			"jaJP": "ボーン・プリズン(畏怖)",
			"koKR": "끔찍한 뼈 감옥",
			"plPL": "Przerażające Więzienie z Kości",
			"ptBR": "Prisão de Ossos Pavorosa",
			"ruRU": "Кошмарная костяная тюрьма",
			"zhCN": "可怖骨牢"
},
		descriptionLocalized: {
			"deDE": "Erhaltet Stählung in Höhe von 5% Basisleben für jeden Gegner, der im Knochengefängnis eingeschlossen ist.\n\nTags: Macabre, Bone, Cooldown.",
			"esES": "Obtienes un 5% de tu vida base como fortificación por cada enemigo atrapado por Prisión de huesos.\n\nTags: Macabre, Bone, Cooldown.",
			"esMX": "Te fortificas un 5% de tu vida de base por cada enemigo atrapado por Prisión de Huesos.\n\nTags: Macabre, Bone, Cooldown.",
			"frFR": "Vous obtenez un montant de fortification égal à 5% de vos points de vie de base pour chaque cible piégée par Prison d'os.\n\nTags: Macabre, Bone, Cooldown.",
			"itIT": "Ottieni Fortificazione per il 5% della Vita base per ogni nemico intrappolato da Prigione d'Ossa.\n\nTags: Macabre, Bone, Cooldown.",
			"jaJP": "〈ボーン・プリズン〉に敵を1体捕らえるごとに基本ライフの5%にあたるの強化を獲得する。\n\nTags: Macabre, Bone, Cooldown.",
			"koKR": "뼈 감옥에 갇힌 적 하나당 기본 생명력의 5%만큼 보강됩니다.\n\nTags: Macabre, Bone, Cooldown.",
			"plPL": "Zyskujesz umocnienie równe 5% twojego podstawowego zdrowia za każdego wroga schwytanego w Więzieniu z Kości.\n\nTags: Macabre, Bone, Cooldown.",
			"ptBR": "Fortifica em 5% da vida básica por cada inimigo preso por Prisão de Ossos.\n\nTags: Macabre, Bone, Cooldown.",
			"ruRU": "Вы получаете укрепление в объеме 5% базового запаса здоровья за каждого противника, заточенного в костяной тюрьме.\n\nTags: Macabre, Bone, Cooldown.",
			"zhCN": "骨牢每困住一名敌人,强固你5%基础生命。\n\nTags: Macabre, Bone, Cooldown."
},
		id: 53,
		maxPoints: 1,
		x: 998.005,
		y: 367.725
	},
	"Skeletal Warrior Mastery": {
		connections: [ "Macabre" ],
		description: `Increase the damage and Life of your Skeletal Warriors by x{15/30/45/60/75/90/105/120/135/150}%.

Tags: Minion, Damage, Life.`,
		nameLocalized: {
			"deDE": "Beherrschung von Skelettkriegern",
			"esES": "Dominio de los guerreros esqueléticos",
			"esMX": "Dominio de Guerreros Esqueléticos",
			"frFR": "Maîtrise des guerriers squelettes",
			"itIT": "Dominio degli Scheletri Guerrieri",
			"jaJP": "スケルトンウォーリア・マスター",
			"koKR": "해골 전사 숙련",
			"plPL": "Mistrzostwo Szkieletowych Wojowników",
			"ptBR": "Maestria do Guerreiro Esqueleto",
			"ruRU": "Мастер скелетов-воинов",
			"zhCN": "骷髅战士精通"
},
		descriptionLocalized: {
			"deDE": "Erhöht Schaden und Leben Eurer Skelettkrieger um x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Minion, Damage, Life.",
			"esES": "Aumenta un x{15/30/45/60/75/90/105/120/135/150}% el daño y la vida de tus guerreros esqueléticos.\n\nTags: Minion, Damage, Life.",
			"esMX": "Aumenta un x{15/30/45/60/75/90/105/120/135/150}% el daño y la vida de tus Guerreros Esqueléticos.\n\nTags: Minion, Damage, Life.",
			"frFR": "Augmente les dégâts et les points de vie de vos guerriers squelettes de x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Minion, Damage, Life.",
			"itIT": "Aumenta i danni e la Vita dei tuoi Guerrieri Scheletrici del x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Minion, Damage, Life.",
			"jaJP": "スケルトンウォーリアの与えるダメージとライフがx{15/30/45/60/75/90/105/120/135/150}%増加する。\n\nTags: Minion, Damage, Life.",
			"koKR": "해골 전사의 공격력과 생명력이 x{15/30/45/60/75/90/105/120/135/150}% 증가합니다.\n\nTags: Minion, Damage, Life.",
			"plPL": "Obrażenia zadawane przez twoich szkieletowych wojowników oraz ich zdrowie są zwiększone o x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Minion, Damage, Life.",
			"ptBR": "Aumenta o dano e a vida dos seus Guerreiros Esqueletos em {15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Minion, Damage, Life.",
			"ruRU": "Наносимый урон и запас здоровья скелетов-воинов увеличиваются на x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Minion, Damage, Life.",
			"zhCN": "你的骷髅战士的伤害和生命提高x{15/30/45/60/75/90/105/120/135/150}%。\n\nTags: Minion, Damage, Life."
},
		id: 54,
		maxPoints: 3,
		x: 562.475,
		y: -0.165
	},
};

necromancerData["Corruption"] = {
	"Iron Maiden": {
		connections: [ "Enhanced Iron Maiden", "Corruption" ],
		description: `Essence Cost: {#}
Curse the target area. Enemies afflicted by Iron Maiden take {10/11/12/13/14/15/16/17/18/19}% damage each time they deal direct damage. Lasts 10 seconds.

Tags: Curse, Corruption, Essence, Damage.`,
		nameLocalized: {
			"deDE": "Eiserne Jungfrau",
			"esES": "Doncella de hierro",
			"esMX": "Doncella de Hierro",
			"frFR": "Vierge de fer",
			"itIT": "Vergine di ferro",
			"jaJP": "アイアンメイデン",
			"koKR": "가시 박힌 철관",
			"plPL": "Żelazna Dziewica",
			"ptBR": "Dama de Ferro",
			"ruRU": "Железная дева",
			"zhCN": "铁处女"
},
		descriptionLocalized: {
			"deDE": "Essenzkosten: {#}\nVerflucht den Zielbereich. Von Eiserne Jungfrau betroffene Gegner erleiden jedes Mal {10/11/12/13/14/15/16/17/18/19}% Schaden, wenn sie direkten Schaden verursachen. Hält bis zu 10 Sek. an.\n\nTags: Curse, Corruption, Essence, Damage.",
			"esES": "Coste de esencia: {#}\nMaldices la zona seleccionada. Los enemigos afectados por Doncella de hierro sufren {10/11/12/13/14/15/16/17/18/19}% de daño cada vez que infligen daño directo. Dura 10 s.\n\nTags: Curse, Corruption, Essence, Damage.",
			"esMX": "Costo de Esencia: {#}\nEchas una maldición en el área objetivo. Los enemigos afectados por Doncella de Hierro reciben {10/11/12/13/14/15/16/17/18/19}% de daño cada vez que infligen daño directo. Dura 10 segundos.\n\nTags: Curse, Corruption, Essence, Damage.",
			"frFR": "Coût en essence : {#}\nVous maudissez la zone ciblée. Les cibles affligées par Vierge de fer subissent {10/11/12/13/14/15/16/17/18/19}% points de dégâts chaque fois qu'elles infligent des dégâts directs. Dure 10 s.\n\nTags: Curse, Corruption, Essence, Damage.",
			"itIT": "Costo in essenza: {#}\nMaledice l'area bersaglio. I nemici affetti da Vergine di Ferro subiscono {10/11/12/13/14/15/16/17/18/19}% danni ogni volta che infliggono danni a te o a un alleato. Dura 10 s.\n\nTags: Curse, Corruption, Essence, Damage.",
			"jaJP": "精髄消費量: {#}\n標的エリアに呪いをかける。〈アイアン・メイデン〉の影響を受けた敵は、直接ダメージを与えるたびに{10/11/12/13/14/15/16/17/18/19}%のダメージを受ける。この効果は10秒間持続する。\n\nTags: Curse, Corruption, Essence, Damage.",
			"koKR": "소모: 정수 {#}\n대상 지역에 저주를 내립니다. 가시 박힌 철관의 영향을 받는 적은 직접 피해를 줄 때마다 {10/11/12/13/14/15/16/17/18/19}%의 피해를 받습니다. 10초 동안 지속됩니다\n\nTags: Curse, Corruption, Essence, Damage.",
			"plPL": "Koszt: {#} pkt. esencji\nPrzeklinasz wybrany obszar. Wrogowie pod wpływem Żelaznej Dziewicy otrzymują {10/11/12/13/14/15/16/17/18/19}% pkt. obrażeń za każdym razem, gdy zadają bezpośrednie obrażenia. Czas działania: 10 sek.\n\nTags: Curse, Corruption, Essence, Damage.",
			"ptBR": "Custo de essência: {#}\nAmaldiçoa a área selecionada. Inimigos afetados por Dama de Ferro recebem {10/11/12/13/14/15/16/17/18/19}% de dano sempre que causam dano direto. Dura 10 segundos.\n\nTags: Curse, Corruption, Essence, Damage.",
			"ruRU": "Затраты эссенции: {#} ед.\nВы проклинаете указанную область. Противники под действием \"Железной девы\" получают {10/11/12/13/14/15/16/17/18/19}% ед. урона каждый раз, когда наносят прямой урон. Время действия – 10 сек.\n\nTags: Curse, Corruption, Essence, Damage.",
			"zhCN": "精魂消耗:{#}\n诅咒目标区域。受到铁处女影响的敌人每次造成直接伤害都会受到{10/11/12/13/14/15/16/17/18/19}%点伤害,持续10秒。\n\nTags: Curse, Corruption, Essence, Damage."
},
		id: 55,
		maxPoints: 5,
		values: [ "10" ],
		x: -452.675,
		y: -233.982
	},
	"Enhanced Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Iron Maiden", "Horrid Iron Maiden", "Abhorrent Iron Maiden" ],
		description: `Iron Maiden no longer costs Essence. Instead, gain 5 Essence for each enemy Cursed. Does not work with enemies who are already Cursed with Iron Maiden.

Tags: Curse, Corruption, Essence, Damage.`,
		nameLocalized: {
			"deDE": "Verbesserte Eiserne Jungfrau",
			"esES": "Doncella de hierro mejorada",
			"esMX": "Doncella de Hierro Potenciada",
			"frFR": "Vierge de fer renforcée",
			"itIT": "Vergine di Ferro Rinforzata",
			"jaJP": "アイアンメイデン(強化版)",
			"koKR": "강화된 가시 박힌 철관",
			"plPL": "Wzmocniona Żelazna Dziewica",
			"ptBR": "Dama de Ferro Aperfeiçoada",
			"ruRU": "Усиленная железная дева",
			"zhCN": "强化铁处女"
},
		descriptionLocalized: {
			"deDE": "Eiserne Jungfrau kostet keine Essenz mehr. Stattdessen erhaltet Ihr 5 Essenz für jeden verfluchten Gegner. Wirkt nicht bei Gegnern, die bereits von Eiserne Jungfrau verflucht sind.\n\nTags: Curse, Corruption, Essence, Damage.",
			"esES": "Doncella de hierro ya no cuesta esencia. Además, obtienes 5 de esencia por cada enemigo maldito. No funciona con enemigos que ya estén malditos con Doncella de hierro.\n\nTags: Curse, Corruption, Essence, Damage.",
			"esMX": "Doncella de Hierro ya no cuesta Esencia. En su lugar, obtendrás 5 de Esencia por cada enemigo maldecido. No funciona con enemigos que ya están maldecidos por Doncella de Hierro.\n\nTags: Curse, Corruption, Essence, Damage.",
			"frFR": "Vierge de fer ne coûte plus d'essence. À la place, vous gagnez 5 points d'essence pour chaque cible maudite. Ne fonctionne pas avec les cibles qui sont déjà maudites avec Vierge de fer.\n\nTags: Curse, Corruption, Essence, Damage.",
			"itIT": "Vergine di Ferro non costa più essenza. Invece, genera 5 essenza per ogni nemico maledetto. Non funziona con i nemici già maledetti da Vergine di Ferro.\n\nTags: Curse, Corruption, Essence, Damage.",
			"jaJP": "〈アイアンメイデン〉が精髄を消費しなくなる上に、呪った敵1体につき精髄を5得る。すでに〈アイアンメイデン〉の呪いを受けた敵には効果が発動しない。\n\nTags: Curse, Corruption, Essence, Damage.",
			"koKR": "가시 박힌 철관이 정수를 소모하지 않습니다. 대신 저주받은 적 하나당 5의 정수를 얻습니다. 이미 가시 박힌 철관으로 저주받은 적에게는 적용되지 않습니다.\n\nTags: Curse, Corruption, Essence, Damage.",
			"plPL": "Żelazna Dziewica nie zużywa już esencji. Zamiast tego zyskujesz 5 pkt. esencji za każdego przeklętego wroga. Nie działa na wrogów, którzy zostali już przeklęci przez Żelazną Dziewicę.\n\nTags: Curse, Corruption, Essence, Damage.",
			"ptBR": "Dama de Ferro deixa de custar essência. Em vez disso, recebe 5 de essência por cada inimigo amaldiçoado. Não funciona com inimigos que já estão amaldiçoados com Dama de Ferro.\n\nTags: Curse, Corruption, Essence, Damage.",
			"ruRU": "\"Железная дева\" больше не расходует эссенцию. Вместо этого вы накапливаете 5 ед. эссенции за каждого проклятого противника. Эффект не срабатывает, если противник уже проклят \"Железной девой\".\n\nTags: Curse, Corruption, Essence, Damage.",
			"zhCN": "铁处女不再消耗精魂,而是每诅咒一名敌人,获得5点精魂。该效果对已经被铁处女诅咒的敌人无效。\n\nTags: Curse, Corruption, Essence, Damage."
},
		id: 56,
		maxPoints: 1,
		x: -771.585,
		y: -385.35
	},
	"Horrid Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Enhanced Iron Maiden" ],
		description: `When at least 3 enemies are afflicted by Iron Maiden, its damage is increased by x15%.

Tags: Curse, Corruption, Essence, Damage.`,
		nameLocalized: {
			"deDE": "Entsetzliche Eiserne Jungfrau",
			"esES": "Doncella de hierro horrenda",
			"esMX": "Doncella de Hierro Horrenda",
			"frFR": "Vierge de fer horrible",
			"itIT": "Vergine di Ferro Orrida",
			"jaJP": "アイアンメイデン(惨悽)",
			"koKR": "잔학한 가시 박힌 철관",
			"plPL": "Straszliwa Żelazna Dziewica",
			"ptBR": "Dama de Ferro Horrenda",
			"ruRU": "Ужасная железная дева",
			"zhCN": "悚然铁处女"
},
		descriptionLocalized: {
			"deDE": "Wenn mindestens 3 Gegner von Eiserne Jungfrau betroffen sind, erhöht sich der Schaden um x15%.\n\nTags: Curse, Corruption, Essence, Damage.",
			"esES": "Cuando estén afectados por Doncella de hierro al menos 3 enemigos, el daño aumenta un x15%.\n\nTags: Curse, Corruption, Essence, Damage.",
			"esMX": "Cuando al menos 3 enemigos están afectados por Doncella de Hierro, su daño aumenta un x15%.\n\nTags: Curse, Corruption, Essence, Damage.",
			"frFR": "Lorsqu'au moins 3 cibles sont affectés par Vierge de fer, ses dégâts sont augmentés de x15%.\n\nTags: Curse, Corruption, Essence, Damage.",
			"itIT": "Quando almeno 3 nemici sono affetti da Vergine di Ferro, i danni aumentano del x15%.\n\nTags: Curse, Corruption, Essence, Damage.",
			"jaJP": "〈アイアンメイデン〉が少なくとも3体の敵に影響を及ぼすと、与えるダメージがx15%増加する。\n\nTags: Curse, Corruption, Essence, Damage.",
			"koKR": "가시 박힌 철관의 영향을 받는 적이 3마리 이상일 경우 공격력이 x15% 증가합니다.\n\nTags: Curse, Corruption, Essence, Damage.",
			"plPL": "Kiedy co najmniej 3 wrogów jest objętych działaniem Żelaznej Dziewicy, jej obrażenia są zwiększone o x15%.\n\nTags: Curse, Corruption, Essence, Damage.",
			"ptBR": "Quando pelo menos 3 inimigos são afetados por Dama de Ferro, o dano é aumentado em 15%.\n\nTags: Curse, Corruption, Essence, Damage.",
			"ruRU": "Если \"Железная дева\" действует хотя бы на 3 противников, урон от проклятия увеличивается на x15%.\n\nTags: Curse, Corruption, Essence, Damage.",
			"zhCN": "铁处女至少影响3名敌人时,伤害提高x15%。\n\nTags: Curse, Corruption, Essence, Damage."
},
		id: 57,
		maxPoints: 1,
		x: -806.375,
		y: -523.514
	},
	"Abhorrent Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Enhanced Iron Maiden" ],
		description: `Heal for 5% of your Maximum Life when an enemy dies while afflicted with Iron Maiden.

Tags: Curse, Corruption, Essence, Damage.`,
		nameLocalized: {
			"deDE": "Abscheuliche Eiserne Jungfrau",
			"esES": "Doncella de hierro abominable",
			"esMX": "Doncella de Hierro Abominable",
			"frFR": "Vierge de fer abjecte",
			"itIT": "Vergine di Ferro Abominevole",
			"jaJP": "アイアンメイデン(凶悪)",
			"koKR": "혐오스러운 가시 박힌 철관",
			"plPL": "Odrażająca Żelazna Dziewica",
			"ptBR": "Dama de Ferro Repugnante",
			"ruRU": "Омерзительная железная дева",
			"zhCN": "可憎铁处女"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn ein von Eiserne Jungfrau betroffener Gegner stirbt, werdet Ihr um 5% Eures maximalen Lebens geheilt.\n\nTags: Curse, Corruption, Essence, Damage.",
			"esES": "Te curas un 5% de tu vida máxima cuando un enemigo muere mientras está afectado por Doncella de hierro.\n\nTags: Curse, Corruption, Essence, Damage.",
			"esMX": "Sanas por un 5% de tu vida máxima cuando muere un enemigo afectado por Doncella de Hierro.\n\nTags: Curse, Corruption, Essence, Damage.",
			"frFR": "Vous récupérez 5% de votre maximum de points de vie lorsqu'une cible meurt en étant affectée par Vierge de fer.\n\nTags: Curse, Corruption, Essence, Damage.",
			"itIT": "Ti curi del 5% della tua Vita massima quando un nemico muore mentre è affetto da Vergine di Ferro.\n\nTags: Curse, Corruption, Essence, Damage.",
			"jaJP": "〈アイアンメイデン〉の影響を受けた敵が死ぬと、ライフ最大値の5%にあたるを回復する。\n\nTags: Curse, Corruption, Essence, Damage.",
			"koKR": "적이 가시 박힌 철관의 영향을 받는 동안 죽으면 최대 생명력의 5%만큼 생명력이 회복됩니다.\n\nTags: Curse, Corruption, Essence, Damage.",
			"plPL": "Kiedy ginie wróg, który jest pod wpływem Żelaznej Dziewicy, odzyskujesz 5% maksymalnego zdrowia.\n\nTags: Curse, Corruption, Essence, Damage.",
			"ptBR": "Cura 5% da sua vida máxima quando um inimigo morre sob efeito de Dama de Ferro.\n\nTags: Curse, Corruption, Essence, Damage.",
			"ruRU": "Когда противник под действием \"Железной девы\" погибает, вы восполняете 5% максимального запаса здоровья.\n\nTags: Curse, Corruption, Essence, Damage.",
			"zhCN": "受到铁处女影响的一名敌人死亡时,会使你恢复生命上限的5%。\n\nTags: Curse, Corruption, Essence, Damage."
},
		id: 58,
		maxPoints: 1,
		x: -1050.125,
		y: -372.255
	},
	"Skeletal Mage Mastery": {
		connections: [ "Corruption" ],
		description: `Increase the damage and Life of your Skeletal Mages by x{15/30/45/60/75/90/105/120/135/150}%.

Tags: Damage, Life, Minion.`,
		nameLocalized: {
			"deDE": "Beherrschung von Skelettmagiern",
			"esES": "Dominio de los magos esqueléticos",
			"esMX": "Dominio de Magos Esqueléticos",
			"frFR": "Maîtrise des mages squelettes",
			"itIT": "Dominio degli Scheletri Maghi",
			"jaJP": "スケルトンメイジ・マスター",
			"koKR": "해골 마법학자 숙련",
			"plPL": "Mistrzostwo Szkieletowych Magów",
			"ptBR": "Maestria do Mago Esqueleto",
			"ruRU": "Мастер скелетов-магов",
			"zhCN": "骷髅法师精通"
},
		descriptionLocalized: {
			"deDE": "Erhöht Schaden und Leben Eurer Skelettmagier um x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Damage, Life, Minion.",
			"esES": "Aumenta un x{15/30/45/60/75/90/105/120/135/150}% el daño y la vida de tus magos esqueléticos.\n\nTags: Damage, Life, Minion.",
			"esMX": "Aumenta un x{15/30/45/60/75/90/105/120/135/150}% el daño y la vida de tus Magos Esqueléticos.\n\nTags: Damage, Life, Minion.",
			"frFR": "Augmente les dégâts et les points de vie de vos mages squelettes de x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Damage, Life, Minion.",
			"itIT": "Aumenta i danni e la Vita dei tuoi Maghi Scheletrici del x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Damage, Life, Minion.",
			"jaJP": "スケルトンメイジの与えるダメージとライフがx{15/30/45/60/75/90/105/120/135/150}%増加する。\n\nTags: Damage, Life, Minion.",
			"koKR": "해골 마법학자의 공격력과 생명력이 x{15/30/45/60/75/90/105/120/135/150}% 증가합니다.\n\nTags: Damage, Life, Minion.",
			"plPL": "Obrażenia zadawane przez twoich szkieletowych magów oraz ich zdrowie są zwiększone o x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Damage, Life, Minion.",
			"ptBR": "Aumenta o dano e a vida dos seus Magos Esqueletos em {15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Damage, Life, Minion.",
			"ruRU": "Наносимый урон и запас здоровья скелетов-магов увеличиваются на x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Damage, Life, Minion.",
			"zhCN": "你的骷髅法师的伤害和生命提高x{15/30/45/60/75/90/105/120/135/150}%。\n\nTags: Damage, Life, Minion."
},
		id: 59,
		maxPoints: 3,
		x: -2.93,
		y: 322.683
	},
	"Amplify Damage": {
		connections: [ "Corruption" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Cursed enemies.

Tags: Damage, Curse.`,
		nameLocalized: {
			"deDE": "Verstärkter Schaden",
			"esES": "Amplificar daño",
			"esMX": "Amplificar Daño",
			"frFR": "Amplification des dégâts",
			"itIT": "Amplificazione Danni",
			"jaJP": "ダメージ増幅",
			"koKR": "피해 증폭",
			"plPL": "Zwiększenie Obrażeń",
			"ptBR": "Amplificar Dano",
			"ruRU": "Усиление урона",
			"zhCN": "伤害增效"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt verfluchten Gegnern x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden zu.\n\nTags: Damage, Curse.",
			"esES": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a enemigos malditos.\n\nTags: Damage, Curse.",
			"esMX": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a los enemigos maldecidos.\n\nTags: Damage, Curse.",
			"frFR": "Vous infligez x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires aux cibles maudites.\n\nTags: Damage, Curse.",
			"itIT": "Infliggi il x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi ai nemici maledetti.\n\nTags: Damage, Curse.",
			"jaJP": "呪われた敵に与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: Damage, Curse.",
			"koKR": "저주에 걸린 적에게 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: Damage, Curse.",
			"plPL": "Zadajesz obrażenia zwiększone o x{3/6/9/12/15/18/21/24/27/30}% przeklętym wrogom.\n\nTags: Damage, Curse.",
			"ptBR": "Você causa {3/6/9/12/15/18/21/24/27/30}% de dano aumentado a inimigos amaldiçoados.\n\nTags: Damage, Curse.",
			"ruRU": "Вы наносите на x{3/6/9/12/15/18/21/24/27/30}% больше урона проклятым противникам.\n\nTags: Damage, Curse.",
			"zhCN": "你对被诅咒的敌人造成的伤害提高x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: Damage, Curse."
},
		id: 60,
		maxPoints: 3,
		x: -558.415,
		y: 1.584
	},
	"Decrepify": {
		connections: [ "Enhanced Decrepify", "Corruption" ],
		description: `Essence Cost: {#}
Curse the target area. Enemies afflicted by Decrepify are Slowed by {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% and deal {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% less damage for 10 seconds.

Tags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Altern",
			"esES": "Decrepitud",
			"esMX": "Decrepitar",
			"frFR": "Décrépitude",
			"itIT": "Decadimento",
			"jaJP": "衰弱",
			"koKR": "노화",
			"plPL": "Zniedołężnienie",
			"ptBR": "Decrepitar",
			"ruRU": "Немощь",
			"zhCN": "衰老"
},
		descriptionLocalized: {
			"deDE": "Essenzkosten: {#}\nVerflucht den Zielbereich. Von Altern betroffene Gegner werden 10 Sek. lang um {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% verlangsamt und verursachen {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% weniger Schaden.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"esES": "Coste de esencia: {#}\nMaldices la zona seleccionada. Los enemigos afectados por Decrepitud quedan ralentizados un {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% e infligen un {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% menos de daño durante 10 s.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"esMX": "Costo de Esencia: {#}\nEchas una maldición en el área objetivo. Los enemigos afectados por Decrepitar quedan ralentizados un {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% e infligen un {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% menos de daño durante 10 segundos.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"frFR": "Coût en essence : {#}\nVous maudissez la zone ciblée. Les cibles affligées par Décrépitude sont ralenties de {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% et infligent {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% de dégâts en moins pendant 10 s.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"itIT": "Costo in essenza: {#}\nMaledici l'area bersaglio. I nemici affetti da Decadimento sono rallentati del {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% e infliggono il {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% di danni in meno per 10 s.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"jaJP": "精髄消費量: {#}\n標的エリアに呪いをかける。〈衰弱〉の影響を受けた敵は10秒間、移動速度が{40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}%、与ダメージが{20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}%減少する。\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"koKR": "소모: 정수 {#}\n대상 지역에 저주를 내립니다. 노화의 영향을 받는 적은 10초 동안 {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% 감속되고, 공격력이 {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% 감소합니다.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"plPL": "Koszt: {#} pkt. esencji\nPrzeklinasz wskazany obszar. Przeciwnicy dotknięci Zniedołężnieniem są spowolnieni o {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% i zadają o {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% mniej obrażeń przez 10 sek.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"ptBR": "Custo de essência: {#}\nAmaldiçoa a área selecionada. Inimigos afetados por Decrepitar são desacelerados em {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% e causam {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% de dano reduzido por 10 segundos.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"ruRU": "Затраты эссенции: {#}\nВы проклинаете указанную область. Противники под действием \"Немощи\" замедляются на {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% и наносят на {20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}% меньше урона в течение 10 сек.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"zhCN": "精魂消耗:{#}\n诅咒目标区域。受到衰老影响的敌人会被减速{40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}%,并且造成的伤害降低{20/20.9/22/23.1/24.3/25.4/26.6/28/29.4/31.1}%,持续10秒。\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction."
},
		id: 61,
		maxPoints: 5,
		values: [ "10" ],
		x: -457.14,
		y: 240.226
	},
	"Enhanced Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Decrepify", "Abhorrent Decrepify", "Horrid Decrepify" ],
		description: `Lucky Hit: Enemies hit while afflicted with Decrepify have up to a 10% chance to Stun them for 2 seconds.

Tags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Verbessertes Altern",
			"esES": "Decrepitud mejorada",
			"esMX": "Decrepitación Potenciada",
			"frFR": "Décrépitude renforcée",
			"itIT": "Decadimento Rinforzato",
			"jaJP": "衰弱(強化版)",
			"koKR": "강화된 노화",
			"plPL": "Wzmocnione Zniedołężnienie",
			"ptBR": "Decrepitar Aperfeiçoado",
			"ruRU": "Усиленная немощь",
			"zhCN": "强化衰老"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Treffer bei von Altern betroffenen Gegner haben eine Chance von bis zu 10%, sie 2 Sek. lang zu betäuben.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"esES": "Golpe de suerte: Los enemigos golpeados mientras están afectados por Decrepitud tienen hasta un 10% de probabilidad de quedar aturdidos durante 2 s.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"esMX": "Golpe afortunado: Los enemigos golpeados que están afectados por Decrepitar tienen hasta un 10% de probabilidad de quedar aturdidos durante 2 segundos.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"frFR": "Coup de chance : les cibles affligées par Décrépitude ont jusqu'à 10% de chances d'être étourdies pendant 2 s lorsqu'elles sont touchées.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"itIT": "Colpo fortunato: i nemici colpiti mentre sono affetti da Decadimento hanno una probabilità fino al 10% di restare storditi per 2 s.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"jaJP": "幸運の一撃: 〈衰弱〉の影響を受けた敵に命中すると最大10%の確率でその敵を2秒間スタンさせる。\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"koKR": "행운의 적중: 노화의 영향을 받는 동안 공격에 적중당한 적이 최대 10% 확률로 2초 동안 기절합니다.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"plPL": "Szczęśliwy traf: Wrogowie trafieni, gdy znajdują się pod wpływem Zniedołężnienia, mają do 10% szans, by zostali ogłuszeni na 2 sek.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"ptBR": "Golpe de Sorte: Inimigos atingidos enquanto afetados por Decrepitar têm até 10% de chance de serem atordoados por 2 segundos.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"ruRU": "Удачный удар: пораженные противники, на которых действует эффект \"Немощь\", с вероятностью до 10% оглушаются на 2 сек.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"zhCN": "幸运一击:攻击衰老的敌人最多有10%几率使其昏迷2秒。\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction."
},
		id: 62,
		maxPoints: 1,
		x: -757.225,
		y: 392.89
	},
	"Abhorrent Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Enhanced Decrepify" ],
		description: `Lucky Hit: Enemies hit while afflicted with Decrepify have up to a 15% chance to reduce your active Cooldowns by 1 second.

Tags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Abscheuliches Altern",
			"esES": "Decrepitud abominable",
			"esMX": "Decrepitación Abominable",
			"frFR": "Décrépitude abjecte",
			"itIT": "Decadimento Abominevole",
			"jaJP": "衰弱(凶悪)",
			"koKR": "혐오스러운 노화",
			"plPL": "Odrażające Zniedołężnienie",
			"ptBR": "Decrepitar Repugnante",
			"ruRU": "Омерзительная немощь",
			"zhCN": "可憎衰老"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Treffer gegen von Altern betroffene Gegner haben eine Chance von bis zu 15%, Eure aktiven Abklingzeiten um 1 Sek. zu reduzieren.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"esES": "Golpe de suerte: Los enemigos golpeados mientras están afectados por Decrepitud tienen hasta un 15% de probabilidad de reducir 1 s tus tiempos de reutilización activos.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"esMX": "Golpe afortunado: Los enemigos golpeados que están afectados por Decrepitar tienen un 15% de probabilidad de reducir tus recuperaciones activas 1 segundo.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"frFR": "Coup de chance : les cibles affligées par Décrépitude ont jusqu'à 15% de chances de réduire vos temps de recharge actifs de 1 s lorsqu'elles sont touchées.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"itIT": "Colpo fortunato: i nemici colpiti mentre sono affetti da Decadimento hanno fino al 15% di probabilità di ridurre i tuoi tempi di recupero attivi di 1 s.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"jaJP": "幸運の一撃: 〈衰弱〉の影響を受けた敵に命中すると最大15%の確率で発生中のクールダウンが1秒短くなる。\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"koKR": "행운의 적중: 노화의 영향을 받는 적을 적중하면 최대 15% 확률로 재사용 대기 중인 모든 기술의 재사용 대기시간이 1초 감소합니다.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"plPL": "Szczęśliwy traf: Wrogowie trafieni, gdy znajdują się pod wpływem Zniedołężnienia, mają 15% szans na skrócenie aktywnych czasów odnowienia twoich umiejętności o 1 sek.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"ptBR": "Golpe de Sorte: Inimigos atingidos enquanto afetados por Decrepitar têm até 15% de chance de reduzir suas recargas ativas em 1 segundo.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"ruRU": "Удачный удар: когда вы поражаете противников, на которых действует \"Немощь\", время восстановления ваших умений с вероятностью до 15% сокращается на 1 сек.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"zhCN": "幸运一击:攻击受到衰老影响的敌人最多有15%几率使你的剩余冷却时间缩短1秒。\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction."
},
		id: 63,
		maxPoints: 1,
		x: -1026.955,
		y: 390.108
	},
	"Horrid Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Enhanced Decrepify" ],
		description: `When you or your Minions hit an enemy afflicted with Decrepify below 10% Life, they are instantly killed. Does not work on Bosses.

Tags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Entsetzliches Altern",
			"esES": "Decrepitud horrenda",
			"esMX": "Decrepitación Horrenda",
			"frFR": "Décrépitude horrible",
			"itIT": "Decadimento Orrido",
			"jaJP": "衰弱(惨悽)",
			"koKR": "잔학한 노화",
			"plPL": "Straszliwe Zniedołężnienie",
			"ptBR": "Decrepitar Horrendo",
			"ruRU": "Ужасная немощь",
			"zhCN": "悚然衰老"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr oder Eure Diener einen von Altern betroffenen Gegner trefft, der weniger als 10% Leben hat, stirbt dieser sofort. Gilt nicht für Bosse.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"esES": "Cuando tú o tus esbirros golpeáis a un enemigo afectado por Decrepitud que tenga menos de un 10% de vida, muere al instante. No funciona con jefes.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"esMX": "Cuando tú y tus esbirros golpean a un enemigo afectado por Decrepitar que tiene menos del 10% de vida, se elimina instantáneamente. No funciona con jefes.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"frFR": "Lorsque vous ou vos serviteurs frappez une cible qui a moins de 10% de ses points de vie et qui est affligée par Décrépitude, celle-ci est instantanément tuée. Ne fonctionne pas avec les boss.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"itIT": "Quando tu o i tuoi servitori colpite un nemico affetto da Decadimento che ha meno del 10% di Vita, questi muore istantaneamente. Non funziona sui boss.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"jaJP": "〈衰弱〉の影響下にあってライフが10%未満の敵が自分またはミニオンを攻撃してきた場合、その敵は即死する。ボスには無効。\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"koKR": "자신 또는 자신의 하수인이 생명력이 10% 미만이고 노화의 영향을 받는 적에게 공격을 적중시키면 해당 적이 즉시 죽습니다. 우두머리에게는 효과가 없습니다.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"plPL": "Kiedy ty lub twoje sługi trafiacie wroga objętego działaniem Zniedołężnienia i posiadającego mniej niż 10% zdrowia, cel ten natychmiast ginie. Nie działa na bossów.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"ptBR": "Quando você ou seus lacaios atingem um inimigo afetado por Decrepitar e com menos de 10% de vida, ele morre instantaneamente. Não funciona em chefes.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"ruRU": "Когда вы или ваши прислужники поражаете противника, на которого действует эффект \"Немощь\", с уровнем здоровья ниже 10%, вы мгновенно убиваете его. Не действует на боссов.\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.",
			"zhCN": "你和你的仆从攻击生命低于10%且受到衰老影响的敌人时,会立即消灭目标。该效果对首领无效。\n\nTags: Curse, Corruption, Crowd Control, Essence, Damage Reduction."
},
		id: 64,
		maxPoints: 1,
		x: -810.09,
		y: 533.678
	},
	"Death's Embrace": {
		connections: [ "Corruption" ],
		description: `Close enemies take x{2/4/6/8/10/12/14/16/18/20}% more damage from you and deal {3/6/9/12/15/18/21/24/27/30}% less damage to you.

Tags: Damage, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Umarmung des Todes",
			"esES": "Abrazo de la muerte",
			"esMX": "Abrazo de la Muerte",
			"frFR": "Caresse de la Mort",
			"itIT": "Abbraccio della Morte",
			"jaJP": "死の抱擁",
			"koKR": "죽음의 은총",
			"plPL": "Objęcia Śmierci",
			"ptBR": "Abraço da Morte",
			"ruRU": "Объятия смерти",
			"zhCN": "死亡之拥"
},
		descriptionLocalized: {
			"deDE": "Nahe Gegner erleiden durch Euch x{2/4/6/8/10/12/14/16/18/20}% mehr Schaden und fügen Euch {3/6/9/12/15/18/21/24/27/30}% weniger Schaden zu.\n\nTags: Damage, Damage Reduction.",
			"esES": "Infliges un x{2/4/6/8/10/12/14/16/18/20}% más de daño a los enemigos cercanos y ellos te infligen un {3/6/9/12/15/18/21/24/27/30}% menos de daño.\n\nTags: Damage, Damage Reduction.",
			"esMX": "Los enemigos cercanos reciben un x{2/4/6/8/10/12/14/16/18/20}% más de daño y te infligen un {3/6/9/12/15/18/21/24/27/30}% menos de daño.\n\nTags: Damage, Damage Reduction.",
			"frFR": "Vous infligez x{2/4/6/8/10/12/14/16/18/20}% de dégâts supplémentaires aux cibles à proximité, et les dégâts qu'elles vous infligent sont réduits de {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Damage, Damage Reduction.",
			"itIT": "I nemici vicini subiscono il x{2/4/6/8/10/12/14/16/18/20}% di danni aggiuntivi da te e ti infliggono il {3/6/9/12/15/18/21/24/27/30}% di danni in meno.\n\nTags: Damage, Damage Reduction.",
			"jaJP": "近距離の敵に与えるダメージがx{2/4/6/8/10/12/14/16/18/20}%増加し、近距離の敵から受けるダメージは{3/6/9/12/15/18/21/24/27/30}%減少する。\n\nTags: Damage, Damage Reduction.",
			"koKR": "근거리에 있는 적이 자신에게 받는 피해가 x{2/4/6/8/10/12/14/16/18/20}% 증가하고, 자신에게 주는 피해가 {3/6/9/12/15/18/21/24/27/30}% 감소합니다.\n\nTags: Damage, Damage Reduction.",
			"plPL": "Pobliscy wrogowie otrzymują od ciebie o x{2/4/6/8/10/12/14/16/18/20}% więcej obrażeń i zadają ci o {3/6/9/12/15/18/21/24/27/30}% mniej obrażeń.\n\nTags: Damage, Damage Reduction.",
			"ptBR": "Inimigos próximos recebem {2/4/6/8/10/12/14/16/18/20}% de dano aumentado e causam {3/6/9/12/15/18/21/24/27/30}% de dano reduzido a você.\n\nTags: Damage, Damage Reduction.",
			"ruRU": "Вы наносите на x{2/4/6/8/10/12/14/16/18/20}% больше урона находящимся вблизи противникам и получаете от них на {3/6/9/12/15/18/21/24/27/30}% меньше урона.\n\nTags: Damage, Damage Reduction.",
			"zhCN": "近距敌人受到来自你的伤害提高x{2/4/6/8/10/12/14/16/18/20}%,对你造成的伤害降低{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: Damage, Damage Reduction."
},
		id: 65,
		maxPoints: 3,
		x: 1.235,
		y: -289.131
	},
	"Death's Reach": {
		connections: [ "Corruption" ],
		description: `You deal x{4/8/12/16/20/24/28/32/36/40}% increased damage to Distant enemies.

Tags: Damage.`,
		nameLocalized: {
			"deDE": "Todesweite",
			"esES": "Alcance de la muerte",
			"esMX": "Alcance de la Muerte",
			"frFR": "Portée de la Mort",
			"itIT": "Presa della Morte",
			"jaJP": "デス・リーチ",
			"koKR": "죽음의 손길",
			"plPL": "Długie Ramię Śmierci",
			"ptBR": "Alcance da Morte",
			"ruRU": "Предел смерти",
			"zhCN": "死亡延伸"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt entfernten Gegnern x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden zu.\n\nTags: Damage.",
			"esES": "Infliges un x{4/8/12/16/20/24/28/32/36/40}% más de daño a enemigos lejanos.\n\nTags: Damage.",
			"esMX": "Infliges un x{4/8/12/16/20/24/28/32/36/40}% más de daño a los enemigos lejanos.\n\nTags: Damage.",
			"frFR": "Vous infligez x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires aux cibles à distance.\n\nTags: Damage.",
			"itIT": "Infliggi il x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi ai nemici lontani.\n\nTags: Damage.",
			"jaJP": "遠距離の敵に与えるダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n\nTags: Damage.",
			"koKR": "원거리에 있는 적에게 주는 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: Damage.",
			"plPL": "Zadajesz obrażenia zwiększone o x{4/8/12/16/20/24/28/32/36/40}% odległym wrogom.\n\nTags: Damage.",
			"ptBR": "Você causa {4/8/12/16/20/24/28/32/36/40}% de dano aumentado a inimigos distantes.\n\nTags: Damage.",
			"ruRU": "Вы наносите на x{4/8/12/16/20/24/28/32/36/40}% больше урона противникам вдалеке.\n\nTags: Damage.",
			"zhCN": "你对远距敌人造成的伤害提高x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: Damage."
},
		id: 66,
		maxPoints: 3,
		x: 576.795,
		y: 2.084
	},
};

necromancerData["Summoning"] = {
	"Corpse Tendrils": {
		connections: [ "Enhanced Corpse Tendrils", "Summoning" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Veins burst out of a Corpse, Pulling in enemies, Stunning them for 3 seconds, and dealing {20/22/24/26/28/30/32/34/36/38}% damage to them. Does not consume the Corpse.

Tags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.`,
		nameLocalized: {
			"deDE": "Leichenranken",
			"esES": "Zarcillos cadavéricos",
			"esMX": "Zarcillos Cadavéricos",
			"frFR": "Vrilles nécrophages",
			"itIT": "Tentacoli Cadaverici",
			"jaJP": "死食草",
			"koKR": "시체 촉수",
			"plPL": "Trupie Macki",
			"ptBR": "Tentáculos Cadavéricos",
			"ruRU": "Трупные щупальца",
			"zhCN": "亡骸卷须"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nAdern brechen aus einer Leiche hervor, ziehen Gegner zu sich, betäuben sie 3 Sek. lang und fügen ihnen {20/22/24/26/28/30/32/34/36/38}% Schaden zu. Dies verbraucht den Leichnam nicht.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nDe un cadáver brotan unas venas que atraen a los enemigos, los aturden durante 3 s y les infligen {20/22/24/26/28/30/32/34/36/38}% de daño. No consume el cadáver.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nExpulsas las venas de un cadáver que succionan a los enemigos, los aturden durante 3 segundos y les infligen {20/22/24/26/28/30/32/34/36/38}% de daño. No consume el cadáver.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nDes veines jaillissent d'un cadavre, attirant les adversaires, les étourdissant pendant 3 s et leur infligeant {20/22/24/26/28/30/32/34/36/38}% points de dégâts. Ceci ne consomme pas le cadavre.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nLe vene di un cadavere fuoriescono, trascinando i nemici verso di te, stordendoli per 3 s e infliggendogli {20/22/24/26/28/30/32/34/36/38}% danni. Il cadavere non viene consumato.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n死体を突き破って飛び出した血管が敵を引き寄せて3秒間スタンさせ、さらに{20/22/24/26/28/30/32/34/36/38}%のダメージを与える。死体を消費しない。\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n시체에서 핏줄이 튀어나와 적을 끌어당겨 3초 동안 기절시키고 {20/22/24/26/28/30/32/34/36/38}%의 피해를 줍니다. 시체를 소모하지 않습니다.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nZe zwłok wystrzeliwują żyły przyciągające wrogów, które ogłuszają ich na 3 sek. oraz zadają im {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń. Umiejętność nie pochłania zwłok.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nVeias irrompem de um cadáver, puxando inimigos, atordoando-os por 3 segundos e causando {20/22/24/26/28/30/32/34/36/38}% de dano a eles. Não consome o cadáver.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nИз трупа вырываются вены, притягивающие противников и оглушающие их на 3 сек., нанося {20/22/24/26/28/30/32/34/36/38}% ед. урона. При этом труп не уничтожается.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n亡骸迸发血脉并藉此拖拽敌人,使其昏迷3秒并对其造成{20/22/24/26/28/30/32/34/36/38}%点伤害。不消耗亡骸。\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical."
},
		id: 67,
		maxPoints: 5,
		values: [ "{11/10.45/9.9/9.35/8.8/8.36/7.92/7.48/7.04/6.6}", "20" ],
		x: 444.22,
		y: -228.515
	},
	"Enhanced Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Corpse Tendrils", "Plagued Corpse Tendrils", "Blighted Corpse Tendrils" ],
		description: `Enemies who are in range of Corpse Tendrils are Slowed by 50% before being Pulled.

Tags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserte Leichenranken",
			"esES": "Zarcillos cadavéricos mejorados",
			"esMX": "Zarcillos Cadavéricos Potenciados",
			"frFR": "Vrilles nécrophages renforcées",
			"itIT": "Tentacoli Cadaverici Rinforzati",
			"jaJP": "死食草(強化版)",
			"koKR": "강화된 시체 촉수",
			"plPL": "Wzmocnione Trupie Macki",
			"ptBR": "Tentáculos Cadavéricos Aperfeiçoados",
			"ruRU": "Усиленные трупные щупальца",
			"zhCN": "强化亡骸卷须"
},
		descriptionLocalized: {
			"deDE": "Gegner in Reichweite von Leichenranken werden um 50% verlangsamt, bevor sie herangezogen werden.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"esES": "Los enemigos que estén al alcance de Zarcillos cadavéricos quedan ralentizados un 50% antes de ser atraídos.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"esMX": "Los enemigos dentro del rango de Zarcillos Cadavéricos se ralentizan un 50% antes de ser succionados.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"frFR": "Les cibles à portée des vrilles nécrophages sont ralenties de 50% avant d'être attirées.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"itIT": "I nemici che sono a portata dei Tentacoli Cadaverici vengono rallentati del 50% prima di essere trascinati.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"jaJP": "〈死食草〉の射程内の敵は、引き寄せられる前に移動速度が50%低下する。\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"koKR": "시체 촉수의 범위 안에 있는 적이 끌어당겨지기 전 50% 감속됩니다.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"plPL": "Wrogowie znajdujący się w zasięgu Trupich Macek zostają spowolnieni o 50% przed przyciągnięciem.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"ptBR": "Inimigos no alcance de Tentáculos Cadavéricos são desacelerados em 50% antes de serem puxados.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"ruRU": "\"Трупные щупальца\" замедляют противников в области поражения на 50% перед тем, как притянуть их.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"zhCN": "亡骸卷须在拖拽范围内的敌人之前会使其减速50%。\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical."
},
		id: 68,
		maxPoints: 1,
		x: 740.58,
		y: -392.601
	},
	"Plagued Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Enhanced Corpse Tendrils" ],
		description: `Enemies damaged by Corpse Tendrils are made Vulnerable for 3 seconds.

Tags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.`,
		nameLocalized: {
			"deDE": "Verseuchte Leichenranken",
			"esES": "Zarcillos cadavéricos plagados",
			"esMX": "Zarcillos Cadavéricos Apestados",
			"frFR": "Vrilles nécrophages pestiférées",
			"itIT": "Tentacoli Cadaverici Appestanti",
			"jaJP": "死食草(疫病)",
			"koKR": "역병 걸린 시체 촉수",
			"plPL": "Zaraźliwe Trupie Macki",
			"ptBR": "Tentáculos Cadavéricos Pestilentos",
			"ruRU": "Чумные трупные щупальца",
			"zhCN": "疫病亡骸卷须"
},
		descriptionLocalized: {
			"deDE": "Gegner, denen von Leichenranken Schaden zugefügt wird, werden 3 Sek. lang verwundbar.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"esES": "Los enemigos dañados por Zarcillos cadavéricos se vuelven vulnerables durante 3 s.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"esMX": "Los enemigos dañados por Zarcillos Cadavéricos se vuelven vulnerables durante 3 segundos.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"frFR": "Les cibles blessées par Vrilles nécrophages deviennent vulnérables pendant 3 s.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"itIT": "I nemici colpiti da Tentacoli Cadaverici sono vulnerabili per 3 s.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"jaJP": "〈死食草〉がダメージを与えた敵が3秒間、脆弱状態になる。\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"koKR": "시체 촉수로 피해를 받은 적이 3초 동안 취약해집니다.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"plPL": "Wrogowie zranieni Trupimi Mackami zostają odsłonięci na 3 sek.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"ptBR": "Os inimigos atingidos por Tentáculos Cadavéricos ficam vulneráveis por 3 segundos.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"ruRU": "Противники, пораженные \"Трупными щупальцами\", становятся уязвимыми на 3 сек.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"zhCN": "亡骸卷须对敌人造成伤害时会使其陷入易伤状态,持续3秒。\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical."
},
		id: 125,
		maxPoints: 1,
		x: 999.47,
		y: -388.527
	},
	"Blighted Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Enhanced Corpse Tendrils" ],
		description: `Corpse Tendrils has a 20% chance when damaging enemies to drop a Blood Orb.

Tags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.`,
		nameLocalized: {
			"deDE": "Verpestete Leichenranken",
			"esES": "Zarcillos cadavéricos apestados",
			"esMX": "Zarcillos Cadavéricos Infestados",
			"frFR": "Vrilles nécrophages purulentes",
			"itIT": "Tentacoli Cadaverici Infetti",
			"jaJP": "死食草(害毒)",
			"koKR": "마름병 걸린 시체 촉수",
			"plPL": "Morowe Trupie Macki",
			"ptBR": "Tentáculos Cadavéricos Empesteados",
			"ruRU": "Гнилостные трупные щупальца",
			"zhCN": "枯萎亡骸卷须"
},
		descriptionLocalized: {
			"deDE": "Leichenranken hat eine Chance von 20%, eine Blutkugel zu hinterlassen, wenn Gegnern Schaden zugefügt wird.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"esES": "Zarcillos cadavéricos tiene un 20% de probabilidad de soltar un orbe de sangre al infligir daño a enemigos.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"esMX": "Los Zarcillos Cadavéricos tienen un 20% de probabilidad de dejar un Orbe de Sangre al infligir daño a enemigos.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"frFR": "Vrilles nécrophages a 20% de chances de générer un orbe de sang lorsqu'elle inflige des dégâts.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"itIT": "Quando Tentacoli Cadaverici danneggia i nemici ha una probabilità del 20% di rilasciare un Globo di Sangue.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"jaJP": "〈死食草〉がダメージを与えた敵が、20%の確率で〈血のオーブ〉を落とす。\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"koKR": "시체 촉수로 적에게 피해를 주면 20% 확률로 피의 구슬이 떨어집니다.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"plPL": "Istnieje 20% szans, że Trupie Macki pozostawią krwawą kulę, gdy zadadzą wrogom obrażenia.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"ptBR": "Tentáculos Cadavéricos tem 20% de chance de largar um orbe de sangue ao causar dano a inimigos.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"ruRU": "Когда \"Трупные щупальца\" поражают противников, с вероятностью 20% появляется сфера крови.\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.",
			"zhCN": "亡骸卷须对敌人造成伤害时有20%几率掉落一颗生命球。\n\nTags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical."
},
		id: 126,
		maxPoints: 1,
		x: 762.735,
		y: -532.53
	},
	"Reaper's Pursuit": {
		connections: [ "Gloom", "Crippling Darkness", "Summoning" ],
		description: `Damaging enemies with Darkness Skills increases your Movement Speed by +{5/10/15/20/25/30/35/40/45/50}% for 3 seconds.

Tags: Movement, Darkness.`,
		nameLocalized: {
			"deDE": "Verfolgung des Schnitters",
			"esES": "Persecución del segador",
			"esMX": "Persecución del Segador",
			"frFR": "Poursuite de la Faucheuse",
			"itIT": "Ricerca del Mietitore",
			"jaJP": "リーパーの追撃",
			"koKR": "사신의 추적",
			"plPL": "Pogoń Żniwiarza",
			"ptBR": "Perseguição Fatal",
			"ruRU": "Преследующий жнец",
			"zhCN": "夺魂者的追击"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Gegnern mit Dunkelheitsfertigkeiten Schaden zufügt, ist Eure Bewegungsgeschwindigkeit 3 Sek. lang um +{5/10/15/20/25/30/35/40/45/50}% erhöht.\n\nTags: Movement, Darkness.",
			"esES": "Infligir daño a enemigos con habilidades de oscuridad aumenta tu velocidad de movimiento un +{5/10/15/20/25/30/35/40/45/50}% durante 3 s.\n\nTags: Movement, Darkness.",
			"esMX": "Infligir daño con habilidades de Oscuridad aumenta tu velocidad de movimiento un +{5/10/15/20/25/30/35/40/45/50}% durante 3 segundos.\n\nTags: Movement, Darkness.",
			"frFR": "Infliger des dégâts aux adversaires avec des compétences de ténèbres augmente votre vitesse de déplacement de +{5/10/15/20/25/30/35/40/45/50}% pendant 3 s.\n\nTags: Movement, Darkness.",
			"itIT": "Infliggere danni ai nemici con le abilità di oscurità aumenta la tua velocità di movimento del +{5/10/15/20/25/30/35/40/45/50}% per 3 s.\n\nTags: Movement, Darkness.",
			"jaJP": "闇スキルで敵にダメージを負わせると、自身の移動速度が3秒間+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: Movement, Darkness.",
			"koKR": "어둠 기술로 적에게 피해를 주면 이동 속도가 3초 동안 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Movement, Darkness.",
			"plPL": "Ranienie wrogów umiejętnościami Ciemności zwiększa twoją szybkość ruchu o +{5/10/15/20/25/30/35/40/45/50}% na 3 sek.\n\nTags: Movement, Darkness.",
			"ptBR": "Causar dano a inimigos com habilidades de Escuridão aumenta sua velocidade de movimento em +{5/10/15/20/25/30/35/40/45/50}% por 3 segundos.\n\nTags: Movement, Darkness.",
			"ruRU": "Когда умения тьмы наносят противникам урон, ваша скорость передвижения повышается на +{5/10/15/20/25/30/35/40/45/50}% на 3 сек.\n\nTags: Movement, Darkness.",
			"zhCN": "使用黑暗技能对敌人造成伤害会使你的移动速度提高+{5/10/15/20/25/30/35/40/45/50}%,持续3秒。\n\nTags: Movement, Darkness."
},
		id: 71,
		maxPoints: 3,
		x: -539.448,
		y: 0.085
	},
	"Gloom": {
		connections: [ "Reaper's Pursuit", "Terror" ],
		description: `When you damage enemies with Darkness Skills, they take x{2/4/6/8/10/12/14/16/18/20}% increased Shadow Damage from you and your Minions for 2 seconds, stacking up to 3 times.

Tags: Damage, Shadow, Minion, Darkness.`,
		nameLocalized: {
			"deDE": "Schwermut",
			"esES": "Tinieblas",
			"esMX": "Penumbra",
			"frFR": "Obscurité",
			"itIT": "Tenebre",
			"jaJP": "酸鼻",
			"koKR": "어스름",
			"plPL": "Smuga Cienia",
			"ptBR": "Melancolia",
			"ruRU": "Сумрак",
			"zhCN": "阴霾"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Gegnern mit Dunkelheitsfertigkeiten Schaden zufügt, erleiden sie 2 Sek. lang x{2/4/6/8/10/12/14/16/18/20}% mehr Schattenschaden durch Euch und Eure Diener (bis zu 3-mal stapelbar).\n\nTags: Damage, Shadow, Minion, Darkness.",
			"esES": "Cuando infliges daño a enemigos con habilidades de oscuridad, tus esbirros y tú les infligís un x{2/4/6/8/10/12/14/16/18/20}% más de daño de sombra durante 2 s. Se acumula hasta 3 veces.\n\nTags: Damage, Shadow, Minion, Darkness.",
			"esMX": "Cuando infliges daño a los enemigos con habilidades de Oscuridad, reciben un x{2/4/6/8/10/12/14/16/18/20}% más de daño de sombra de ti y tus esbirros durante 2 segundos. El efecto puede acumularse hasta 3 veces.\n\nTags: Damage, Shadow, Minion, Darkness.",
			"frFR": "Lorsque vos compétences de ténèbres infligent des dégâts à des cibles, celles-ci subissent x{2/4/6/8/10/12/14/16/18/20}% de dégâts d'ombre supplémentaires de votre part et de celle de vos serviteurs pendant 2 s, cet effet pouvant se cumuler jusqu'à 3 fois.\n\nTags: Damage, Shadow, Minion, Darkness.",
			"itIT": "Quando infliggi danni ai nemici con le tue abilità di oscurità, questi subiscono il x{2/4/6/8/10/12/14/16/18/20}% di danni da ombra aggiuntivi da te e dai tuoi servitori per 2 s, fino a un massimo di 3 volte.\n\nTags: Damage, Shadow, Minion, Darkness.",
			"jaJP": "闇スキルで敵にダメージを与えると、自分とミニオンがその敵に与えるシャドウダメージが2秒間x{2/4/6/8/10/12/14/16/18/20}%増加する。この効果は最大3回まで蓄積する。\n\nTags: Damage, Shadow, Minion, Darkness.",
			"koKR": "어둠 기술로 적에게 피해를 주면, 해당 적이 자신과 자신의 하수인에게 받는 암흑 피해가 2초 동안 x{2/4/6/8/10/12/14/16/18/20}% 증가합니다. 이 효과는 최대 3번까지 중첩됩니다.\n\nTags: Damage, Shadow, Minion, Darkness.",
			"plPL": "Kiedy zadajesz wrogom obrażenia twoimi umiejętnościami Ciemności, otrzymują oni od ciebie i twoich sług zwiększone o x{2/4/6/8/10/12/14/16/18/20}% obrażenia Cienia przez 2 sek. Efekt kumuluje się maksymalnie 3 razy.\n\nTags: Damage, Shadow, Minion, Darkness.",
			"ptBR": "Ao causar dano a inimigos com habilidades de Escuridão, eles recebem {2/4/6/8/10/12/14/16/18/20}% de dano de sombra aumentado de você e seus lacaios por 2 segundos, acumulando até 3 vezes.\n\nTags: Damage, Shadow, Minion, Darkness.",
			"ruRU": "Когда ваши умения тьмы наносят урон противникам, пораженные цели в течение 2 сек. получают на x{2/4/6/8/10/12/14/16/18/20}% больше урона от темной магии от вас и ваших прислужников. Эффект суммируется до 3 раз.\n\nTags: Damage, Shadow, Minion, Darkness.",
			"zhCN": "你的黑暗技能对敌人造成伤害时,你和你的仆从对其造成的暗影伤害提高x{2/4/6/8/10/12/14/16/18/20}%,持续2秒,该效果最多可叠加3次。\n\nTags: Damage, Shadow, Minion, Darkness."
},
		id: 72,
		maxPoints: 3,
		x: -812.116,
		y: -96.84
	},
	"Terror": {
		connections: [ "Gloom", "Crippling Darkness" ],
		description: `Darkness Skills deal x{3/6/9/12/15/18/21/24/27/30}% bonus damage to enemies who are Slowed, and x{3/6/9/12/15/18/21/24/27/30}% bonus damage to enemies who are Stunned or Immobilized. These bonuses stack and apply to Shadow Damage dealt by your Minions.

Tags: Crowd Control, Damage, Shadow, Darkness, Minion.`,
		nameLocalized: {
			"deDE": "Schrecken",
			"esES": "Terror",
			"esMX": "Terror",
			"frFR": "Terreur",
			"itIT": "Terrore",
			"jaJP": "恐怖",
			"koKR": "공포",
			"plPL": "Groza",
			"ptBR": "Terror",
			"ruRU": "Устрашение",
			"zhCN": "畏惧"
},
		descriptionLocalized: {
			"deDE": "Dunkelheitsfertigkeiten fügen verlangsamten Gegnern x{3/6/9/12/15/18/21/24/27/30}% Bonusschaden und betäubten oder bewegungsunfähigen Gegnern x{3/6/9/12/15/18/21/24/27/30}% Bonusschaden zu. Diese Boni stapeln sich und wirken sich auf den Schattenschaden Eurer Diener aus.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"esES": "Las habilidades de oscuridad infligen un x{3/6/9/12/15/18/21/24/27/30}% de daño adicional a enemigos ralentizados y un x{3/6/9/12/15/18/21/24/27/30}% de daño adicional a enemigos aturdidos o inmovilizados. Estos bonus se acumulan y se aplican al daño de sombra que infligen tus esbirros.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"esMX": "Las habilidades de Oscuridad infligen un x{3/6/9/12/15/18/21/24/27/30}% más de daño a los enemigos ralentizados y un x{3/6/9/12/15/18/21/24/27/30}% más de daño a los enemigos aturdidos o inmovilizados. Estas bonificaciones se acumulan y aplican al daño de sombra que infligen tus esbirros.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"frFR": "Vos compétences de ténèbres infligent x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires aux cibles ralenties, et x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires aux cibles étourdies ou immobilisées. Ces bonus se cumulent et s'appliquent aussi aux dégâts d'ombre infligés par vos serviteurs.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"itIT": "Le abilità di oscurità infliggono il x{3/6/9/12/15/18/21/24/27/30}% di danni bonus ai nemici rallentati, e il x{3/6/9/12/15/18/21/24/27/30}% di danni bonus ai nemici storditi o immobilizzati. Questi bonus si accumulano e si applicano ai danni da ombra inflitti dai tuoi servitori.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"jaJP": "暗黒スキルが移動速度低下状態の敵に与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%、スタン・移動不能状態の敵に与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。これらのボーナスは蓄積し、自身のミニオンが与えるシャドウダメージにも適用される。\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"koKR": "어둠 기술로 감속 상태의 적에게 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가하고, 기절 또는 이동 불가 상태의 적에게 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다. 이 효과는 하수인이 주는 암흑 피해에도 적용됩니다.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"plPL": "Umiejętności Mroku zadają x{3/6/9/12/15/18/21/24/27/30}% dodatkowych obrażeń wrogom, którzy są spowolnieni, i x{3/6/9/12/15/18/21/24/27/30}% dodatkowych obrażeń wrogom, którzy są ogłuszeni lub unieruchomieni. Te premie kumulują się i mają zastosowanie do obrażeń Cienia zadawanych przez twoje sługi.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"ptBR": "Habilidades de Escuridão causam {3/6/9/12/15/18/21/24/27/30}% de bônus de dano a inimigos desacelerados e {3/6/9/12/15/18/21/24/27/30}% de bônus de dano a inimigos atordoados ou imobilizados. Esses bônus acumulam e aplicam-se ao dano de sombra causado por seus lacaios.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"ruRU": "Навыки тьмы наносят на x{3/6/9/12/15/18/21/24/27/30}% больше урона замедленным противникам и на x{3/6/9/12/15/18/21/24/27/30}% больше урона оглушенным или обездвиженным противникам. Этот эффект суммируется и также действует для урона от темной магии, который наносят ваши прислужники.\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion.",
			"zhCN": "黑暗技能对被减速的敌人造成的伤害提高x{3/6/9/12/15/18/21/24/27/30}%,并且对昏迷或定身的敌人造成的伤害提高x{3/6/9/12/15/18/21/24/27/30}%。该加成可以叠加并且也会对你仆从造成的暗影伤害生效。\n\nTags: Crowd Control, Damage, Shadow, Darkness, Minion."
},
		id: 73,
		maxPoints: 3,
		x: -1072.725,
		y: 1.175
	},
	"Crippling Darkness": {
		connections: [ "Reaper's Pursuit", "Terror" ],
		description: `Lucky Hit: Darkness Skills have up to a 15% chance to Stun for {1/2/3/4/5/6/7/8/9/10} seconds.

Tags: Crowd Control, Darkness, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Lähmende Dunkelheit",
			"esES": "Oscuridad paralizadora",
			"esMX": "Oscuridad Paralizante",
			"frFR": "Ténèbres paralysantes",
			"itIT": "Oscurità Debilitante",
			"jaJP": "壊滅的な闇",
			"koKR": "불구의 어둠",
			"plPL": "Wyniszczająca Ciemność",
			"ptBR": "Escuridão Incapacitante",
			"ruRU": "Жестокая тьма",
			"zhCN": "致残黑暗"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Dunkelheitsfertigkeiten verfügen über eine Chance von bis zu 15 %, Gegner {1/2/3/4/5/6/7/8/9/10} Sek. lang zu betäuben.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"esES": "Golpe de suerte: Las habilidades de oscuridad tienen hasta un 15% de probabilidad de aturdir durante {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"esMX": "Golpe afortunado: Las habilidades de Oscuridad tienen hasta un 15% de probabilidad de aturdir durante {1/2/3/4/5/6/7/8/9/10} segundos.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"frFR": "Coup de chance : vos compétences de ténèbres ont jusqu'à 15% de chances d'étourdir les adversaires pendant {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"itIT": "Colpo fortunato: le abilità di oscurità hanno fino al 15% di probabilità di stordire per {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"jaJP": "幸運の一撃: 暗黒スキルが最大15%の確率で敵を{1/2/3/4/5/6/7/8/9/10}秒間スタンさせる。\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"koKR": "행운의 적중: 어둠 기술이 최대 15% 확률로 적을 {1/2/3/4/5/6/7/8/9/10}초 동안 기절시킵니다.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"plPL": "Szczęśliwy traf: Umiejętności Ciemności mają maksymalnie 15% szans na ogłuszenie wrogów na {1/2/3/4/5/6/7/8/9/10} sek.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"ptBR": "Golpe de Sorte: Habilidades de Escuridão têm até 15% de chance de atordoar por {1/2/3/4/5/6/7/8/9/10} segundos.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"ruRU": "Удачный удар: навыки тьмы с вероятностью до 15% оглушают противников на {1/2/3/4/5/6/7/8/9/10} сек.\n\nTags: Crowd Control, Darkness, Lucky Hit.",
			"zhCN": "幸运一击:黑暗技能最多有15%几率使敌人昏迷{1/2/3/4/5/6/7/8/9/10}秒。\n\nTags: Crowd Control, Darkness, Lucky Hit."
},
		id: 74,
		maxPoints: 3,
		x: -812.306,
		y: 96.35
	},
	"Gruesome Mending": {
		connections: [ "Transfusion", "Coalesced Blood", "Summoning" ],
		description: `While below 50% Life, you receive +{10/20/30/40/50/60/70/80/90/100}% more Healing from all sources.

Tags: Life, Healing.`,
		nameLocalized: {
			"deDE": "Grausige Heilung",
			"esES": "Reparación truculenta",
			"esMX": "Reparación Grotesca",
			"frFR": "Convalescence macabre",
			"itIT": "Cura Macabra",
			"jaJP": "凄惨なる治癒",
			"koKR": "섬뜩한 회복",
			"plPL": "Makabryczne Zasklepienie",
			"ptBR": "Reparação Terrível",
			"ruRU": "Зловещее исцеление",
			"zhCN": "阴森愈合"
},
		descriptionLocalized: {
			"deDE": "Bei weniger als 50 % Leben erhaltet Ihr +{10/20/30/40/50/60/70/80/90/100}% mehr Heilung aus allen Quellen.\n\nTags: Life, Healing.",
			"esES": "Mientras tienes menos de un 50% de vida, recibes un +{10/20/30/40/50/60/70/80/90/100}% más de curación de todas las fuentes.\n\nTags: Life, Healing.",
			"esMX": "Cuando tienes menos del 50% de vida, recibes un +{10/20/30/40/50/60/70/80/90/100}% más de sanación de todas las fuentes.\n\nTags: Life, Healing.",
			"frFR": "Lorsque vous avez moins de 50% de vos points de vie, vous recevez +{10/20/30/40/50/60/70/80/90/100}% de soins supplémentaires de toutes les sources.\n\nTags: Life, Healing.",
			"itIT": "Quando hai meno del 50% di Vita, ricevi il +{10/20/30/40/50/60/70/80/90/100}% di cure aggiuntive da tutte le fonti.\n\nTags: Life, Healing.",
			"jaJP": "ライフが50%未満の時、あらゆる要素による回復量が+{10/20/30/40/50/60/70/80/90/100}%増加する。\n\nTags: Life, Healing.",
			"koKR": "생명력이 50% 미만일 때 받는 모든 치유량이 +{10/20/30/40/50/60/70/80/90/100}% 증가합니다.\n\nTags: Life, Healing.",
			"plPL": "Kiedy masz poniżej 50% zdrowia, otrzymujesz o +{10/20/30/40/50/60/70/80/90/100}% więcej leczenia ze wszystkich źródeł.\n\nTags: Life, Healing.",
			"ptBR": "Enquanto estiver abaixo de 50% de vida, você recebe +{10/20/30/40/50/60/70/80/90/100}% de cura adicional de todas as fontes.\n\nTags: Life, Healing.",
			"ruRU": "Пока ваш уровень здоровья ниже 50%, вы получаете на +{10/20/30/40/50/60/70/80/90/100}% больше исцеления от любых источников.\n\nTags: Life, Healing.",
			"zhCN": "生命低于50%时,从所有来源获得的生命恢复效果提高+{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: Life, Healing."
},
		id: 127,
		maxPoints: 3,
		x: 1.18,
		y: -309.335
	},
	"Transfusion": {
		connections: [ "Tides of Blood", "Gruesome Mending" ],
		description: `Blood Orbs also Heal your Minions for {15/30/45/60/75/90/105/120/135/150}% of the amount.

Tags: Blood Orb, Minion, Healing.`,
		nameLocalized: {
			"deDE": "Transfusion",
			"esES": "Transfusión",
			"esMX": "Transfusión",
			"frFR": "Perfusion",
			"itIT": "Trasfusione",
			"jaJP": "輸血",
			"koKR": "수혈",
			"plPL": "Transfuzja",
			"ptBR": "Transfusão",
			"ruRU": "Переливание",
			"zhCN": "鲜血输送"
},
		descriptionLocalized: {
			"deDE": "Blutkugeln heilen außerdem Eure Diener in Höhe von {15/30/45/60/75/90/105/120/135/150}% der ursprünglichen Menge.\n\nTags: Blood Orb, Minion, Healing.",
			"esES": "Los orbes de sangre también curan a tus esbirros un {15/30/45/60/75/90/105/120/135/150}% de la cantidad.\n\nTags: Blood Orb, Minion, Healing.",
			"esMX": "Los Orbes de Sangre también sanan a tus esbirros por un {15/30/45/60/75/90/105/120/135/150}% del valor.\n\nTags: Blood Orb, Minion, Healing.",
			"frFR": "Les orbes de sang soignent également vos serviteurs à hauteur de {15/30/45/60/75/90/105/120/135/150}% de leur montant habituel.\n\nTags: Blood Orb, Minion, Healing.",
			"itIT": "I Globi di Sangue curano anche i tuoi servitori del {15/30/45/60/75/90/105/120/135/150}% del loro ammontare.\n\nTags: Blood Orb, Minion, Healing.",
			"jaJP": "〈血のオーブ〉取得時、ミニオンもその効果の{15/30/45/60/75/90/105/120/135/150}%の回復効果を得る。\n\nTags: Blood Orb, Minion, Healing.",
			"koKR": "피의 구슬이 회복량의 {15/30/45/60/75/90/105/120/135/150}%만큼 하수인의 생명력도 회복시킵니다.\n\nTags: Blood Orb, Minion, Healing.",
			"plPL": "Krwawe kule leczą również twoje sługi, przywracając im {15/30/45/60/75/90/105/120/135/150}% wartości leczenia.\n\nTags: Blood Orb, Minion, Healing.",
			"ptBR": "Orbes de sangue também curam seus lacaios em {15/30/45/60/75/90/105/120/135/150}% do valor.\n\nTags: Blood Orb, Minion, Healing.",
			"ruRU": "Сферы крови также восполняют вашим прислужникам {15/30/45/60/75/90/105/120/135/150}% обычного объема здоровья.\n\nTags: Blood Orb, Minion, Healing.",
			"zhCN": "生命球也会为你的仆从恢复{15/30/45/60/75/90/105/120/135/150}%的治疗量。\n\nTags: Blood Orb, Minion, Healing."
},
		id: 77,
		maxPoints: 3,
		x: 191.07,
		y: -457.803
	},
	"Tides of Blood": {
		connections: [ "Transfusion", "Coalesced Blood" ],
		description: `Your Blood Skills deal x{5/10/15/20/25/30/35/40/45/50}% increased Overpower damage. This bonus is doubled while you are Healthy.

Tags: Healthy, Overpower, Blood, Damage.`,
		nameLocalized: {
			"deDE": "Flut des Blutes",
			"esES": "Mareas de sangre",
			"esMX": "Mareas de Sangre",
			"frFR": "Vagues de sang",
			"itIT": "Maree di Sangue",
			"jaJP": "血の怒涛",
			"koKR": "피의 격류",
			"plPL": "Krwawy Przypływ",
			"ptBR": "Maré de Sangue",
			"ruRU": "Волны крови",
			"zhCN": "鲜血之潮"
},
		descriptionLocalized: {
			"deDE": "Eure Blutfertigkeiten verursachen x{5/10/15/20/25/30/35/40/45/50}% mehr Überwältigungsschaden. Während Ihr gesund seid, wird dieser Bonus verdoppelt.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"esES": "Tus habilidades de sangre infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño de arrollamiento. Este bonus se duplica mientras estás saludable.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"esMX": "Tus habilidades de Sangre infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño abrumador. Esta bonificación se duplica mientras estás saludable.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"frFR": "Vos compétences de sang infligent x{5/10/15/20/25/30/35/40/45/50}% de dégâts d'accablement supplémentaires. Ce bonus est doublé lorsque vous êtes en bonne santé.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"itIT": "Le tue abilità di sangue infliggono il x{5/10/15/20/25/30/35/40/45/50}% di danni da Sopraffazione aggiuntivi. Il bonus raddoppia se sei in salute.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"jaJP": "血のスキルが与えるオーバーパワーダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。健全状態の間はこのボーナスが2倍になる。\n\nTags: Healthy, Overpower, Blood, Damage.",
			"koKR": "피 기술이 주는 제압 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다. 건강 상태에서는 효과가 2배로 증가합니다.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"plPL": "Obrażenia od przytłoczenia zadawane przez twoje umiejętności Krwi są zwiększone o x{5/10/15/20/25/30/35/40/45/50}%. Premia ta zostaje podwojona, gdy jesteś w pełni sił.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"ptBR": "Suas habilidades de Sangue causam {5/10/15/20/25/30/35/40/45/50}% de dano aumentado de Golpe Brutal. O bônus é dobrado enquanto você estiver saudável.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"ruRU": "Ваши умения крови наносят на x{5/10/15/20/25/30/35/40/45/50}% больше подавляющего урона. Бонус удваивается, пока у вас высокий уровень здоровья.\n\nTags: Healthy, Overpower, Blood, Damage.",
			"zhCN": "你的鲜血技能造成的压制伤害提高x{5/10/15/20/25/30/35/40/45/50}%。该加成在你处于健康状态下翻倍。\n\nTags: Healthy, Overpower, Blood, Damage."
},
		id: 78,
		maxPoints: 3,
		x: 3.55,
		y: -609.869
	},
	"Coalesced Blood": {
		connections: [ "Drain Vitality", "Tides of Blood", "Gruesome Mending" ],
		description: `While Healthy your Blood Skills deal x{6/12/18/24/30/36/42/48/54/60}% increased damage.

Tags: Healthy, Damage, Blood.`,
		nameLocalized: {
			"deDE": "Geronnenes Blut",
			"esES": "Sangre concentrada",
			"esMX": "Sangre Fusionada",
			"frFR": "Sang amalgamé",
			"itIT": "Sangue Coagulato",
			"jaJP": "血の癒合",
			"koKR": "응결된 피",
			"plPL": "Zakrzepła Krew",
			"ptBR": "Aglutinação Sanguínea",
			"ruRU": "Сгусток крови",
			"zhCN": "凝结之血"
},
		descriptionLocalized: {
			"deDE": "Während Ihr gesund seid verursachen Eure Blutfertigkeiten x{6/12/18/24/30/36/42/48/54/60}% mehr Schaden.\n\nTags: Healthy, Damage, Blood.",
			"esES": "En estado saludable, tus habilidades de sangre infligen un x{6/12/18/24/30/36/42/48/54/60}% más de daño.\n\nTags: Healthy, Damage, Blood.",
			"esMX": "Mientras estás saludable, tus habilidades de Sangre infligen un x{6/12/18/24/30/36/42/48/54/60}% más de daño.\n\nTags: Healthy, Damage, Blood.",
			"frFR": "Lorsque vous êtes en bonne santé, vos compétences de sang infligent x{6/12/18/24/30/36/42/48/54/60}% de dégâts supplémentaires.\n\nTags: Healthy, Damage, Blood.",
			"itIT": "Mentre sei in salute le tue abilità di sangue infliggono il x{6/12/18/24/30/36/42/48/54/60}% di danni aggiuntivi.\n\nTags: Healthy, Damage, Blood.",
			"jaJP": "健全状態の間、血のスキルで与えるダメージがx{6/12/18/24/30/36/42/48/54/60}%増加する。\n\nTags: Healthy, Damage, Blood.",
			"koKR": "건강 상태에서 피 기술로 주는 피해가 x{6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: Healthy, Damage, Blood.",
			"plPL": "Kiedy jesteś w pełni sił twoje umiejętności Krwi zadają x{6/12/18/24/30/36/42/48/54/60}% więcej obrażeń.\n\nTags: Healthy, Damage, Blood.",
			"ptBR": "Enquanto estiver saudável, suas habilidades de Sangue causam {6/12/18/24/30/36/42/48/54/60}% de dano aumentado.\n\nTags: Healthy, Damage, Blood.",
			"ruRU": "Пока у вас высокий уровень здоровья, ваши умения крови наносят на x{6/12/18/24/30/36/42/48/54/60}% больше урона.\n\nTags: Healthy, Damage, Blood.",
			"zhCN": "处于健康状态时,你的鲜血技能造成的伤害提高x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: Healthy, Damage, Blood."
},
		id: 76,
		maxPoints: 3,
		x: -190.339,
		y: -455.995
	},
	"Drain Vitality": {
		connections: [ "Coalesced Blood" ],
		description: `Lucky Hit: Hitting enemies with Blood Skills has up to a 25% chance to Fortify you for {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% Base Life.

Tags: Fortify, Lucky Hit, Blood.`,
		nameLocalized: {
			"deDE": "Vitalität entziehen",
			"esES": "Drenar vitalidad",
			"esMX": "Drenar Vitalidad",
			"frFR": "Drain de vitalité",
			"itIT": "Prosciugamento Vitalità",
			"jaJP": "生命力吸収",
			"koKR": "활력 흡수",
			"plPL": "Wyssanie Witalności",
			"ptBR": "Drenar Vitalidade",
			"ruRU": "Иссушение жизненной силы",
			"zhCN": "吸取活力"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Wenn Ihr Gegner mit Blutfertigkeiten trefft, besteht eine Chance von bis zu 25%, Stählung in Höhe von {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% Eures Basislebens zu erhalten.\n\nTags: Fortify, Lucky Hit, Blood.",
			"esES": "Golpe de suerte: Golpear a enemigos con habilidades de sangre tiene hasta un 25% de probabilidad fortificar un {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% de tu vida base.\n\nTags: Fortify, Lucky Hit, Blood.",
			"esMX": "Golpe afortunado: Golpear a los enemigos con habilidades de Sangre tiene hasta un 25% de probabilidad de fortificarte con un {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% de tu vida de base.\n\nTags: Fortify, Lucky Hit, Blood.",
			"frFR": "Coup de chance : blesser des adversaires avec des compétences de sang a jusqu'à 25% de chances de vous conférer un montant de fortification égal à {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% de vos points de vie de base.\n\nTags: Fortify, Lucky Hit, Blood.",
			"itIT": "Colpo fortunato: colpire i nemici con abilità di sangue ha fino al 25% di probabilità di fornirti Fortificazione per il {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% della tua Vita base.\n\nTags: Fortify, Lucky Hit, Blood.",
			"jaJP": "幸運の一撃: 血のスキルが敵に命中すると、最大25%の確率で基本ライフの{2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}%にあたるの強化を獲得する。\n\nTags: Fortify, Lucky Hit, Blood.",
			"koKR": "행운의 적중: 피 기술을 적에게 적중시키면 최대 25% 확률로 기본 생명력의 {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}%만큼 보강됩니다.\n\nTags: Fortify, Lucky Hit, Blood.",
			"plPL": "Szczęśliwy traf: Trafienie wrogów umiejętnościami Krwi ma maksymalnie 25% szans na zapewnienie ci umocnienia równego {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% twojego podstawowego zdrowia.\n\nTags: Fortify, Lucky Hit, Blood.",
			"ptBR": "Golpe de Sorte: Atingir inimigos com habilidades de Sangue tem até 25% de chance de fortificar você em {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% da vida básica.\n\nTags: Fortify, Lucky Hit, Blood.",
			"ruRU": "Удачный удар: поражая противников умениями крови, вы с вероятностью до 25% получаете укрепление в объеме {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% базового запаса здоровья.\n\nTags: Fortify, Lucky Hit, Blood.",
			"zhCN": "幸运一击:使用鲜血技能命中敌人最多有25%几率强固你{2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}%基础生命。\n\nTags: Fortify, Lucky Hit, Blood."
},
		id: 79,
		maxPoints: 3,
		x: -382.557,
		y: -610.311
	},
	"Bone Spirit": {
		connections: [ "Enhanced Bone Spirit", "Summoning" ],
		description: `Cooldown: {#} seconds
Essence Cost: All Remaining Essence
Lucky Hit Chance: {#}%
Consume all of your Essence to conjure a spirit of bone that seeks enemies. Upon reaching an enemy, the spirit explodes, dealing {80/88/96/104/112/120/128/136/144/152}% damage to the target and all surrounding enemies. Damage is increased by x3% for each point of Essence spent casting Bone Spirit.

Tags: Macabre, Bone, Damage, Cooldown, Essence, Physical.`,
		nameLocalized: {
			"deDE": "Knochengeist",
			"esES": "Espíritu de hueso",
			"esMX": "Espíritu Óseo",
			"frFR": "Esprit d'os",
			"itIT": "Spirito d'Ossa",
			"jaJP": "ボーン・スピリット",
			"koKR": "뼈 영혼",
			"plPL": "Kościane Widmo",
			"ptBR": "Espírito de Ossos",
			"ruRU": "Костяной дух",
			"zhCN": "骨灵"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nEssenzkosten: Gesamte verbleibende Essenz\nGlückstrefferchance: {#}%\nVerbraucht all Eure Essenz, um einen Knochengeist zu beschwören, der Gegner aufspürt. Wenn er einen Gegner erreicht, explodiert der Geist und fügt dem Ziel sowie allen Gegnern in der Nähe {80/88/96/104/112/120/128/136/144/152}% Schaden zu. Der Schaden erhöht sich für jeden bei der Wirkung von Knochengeist verbrauchten Essenzpunkt um x3%.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"esES": "Tiempo de reutilización: {#} s\nCoste de esencia: Toda la esencia restante\nProbabilidad de golpe de suerte: {#}%\nConsumes toda tu esencia para invocar un espíritu de hueso que busca enemigos. Al alcanzar uno, explota e inflige {80/88/96/104/112/120/128/136/144/152}% de daño al objetivo y a todos los enemigos cercanos. Este daño aumenta un x3% por cada punto de esencia gastado al lanzar Espíritu de hueso.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"esMX": "Recuperación: {#} segundos\nCosto de Esencia: Toda tu Esencia restante\nProbabilidad de golpe afortunado: {#}%\nConsume toda tu Esencia para conjurar un espíritu óseo que busca a los enemigos. Al llegar al enemigo, el espíritu explota y le inflige {80/88/96/104/112/120/128/136/144/152}% de daño al objetivo y a todos los enemigos circundantes. El daño aumenta un x3% por cada punto de Esencia usado para lanzar Espíritu Óseo.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"frFR": "Temps de recharge : {#} s\nCoût en essence : toute votre essence restante\nChances de coup de chance : {#}%\nVous dépensez toute votre essence pour invoquer un esprit d'os qui traque les adversaires. Lorsqu'il atteint une cible adverse, l'esprit explose en infligeant {80/88/96/104/112/120/128/136/144/152}% points de dégâts à la cible et à l'ensemble des adversaires à proximité. Ces dégâts sont augmentés de x3% pour chaque point d'essence dépensé lors de l'utilisation d'Esprit d'os.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"itIT": "Tempo di recupero: {#} s\nCosto in essenza: tutta l'essenza restante\nProbabilità di colpo fortunato: {#}%\nConsumi tutti la tua essenza per invocare uno spirito d'ossa che insegue i nemici. Quando ne raggiunge uno, lo spirito esplode, infliggendo {80/88/96/104/112/120/128/136/144/152}% danni al bersaglio e a tutti i nemici circostanti. I danni aumentano del x3% per ogni punto di essenza consumato per lanciare Spirito d'Ossa.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"jaJP": "クールダウン: {#}秒\nEssence Cost: 残りの全精髄\n幸運の一撃発生率: {#}%\n精髄を残らず消費して、敵を追尾する〈ボーン・スピリット〉を呼び出す。敵に到達すると霊魂は爆発し、標的および周囲のすべての敵に{80/88/96/104/112/120/128/136/144/152}%のダメージを与える。ダメージは、〈ボーン・スピリット〉の召喚に使用した精髄1ポイントにつきx3%増加する。\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"koKR": "재사용 대기시간: {#}초\n소모: 남아 있는 모든 정수\n행운의 적중 확률: {#}%\n정수를 전부 소모하여 적을 찾아가는 뼈 영혼을 구현합니다. 뼈 영혼이 적에게 닿으면 폭발하며 대상과 주위 모든 적에게 {80/88/96/104/112/120/128/136/144/152}%의 피해를 줍니다. 뼈 영혼을 시전할 때 소모한 정수 하나당 피해가 x3% 증가합니다.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"plPL": "Czas odnowienia: {#} sek.\nKoszt esencji: cała pozostała esencja.\nSzansa na szczęśliwy traf: {#}%\nPochłaniasz całą swoją esencję, by przyzwać kościanego ducha, który wyszukuje wrogów. Po dosięgnięciu przeciwnika duch wybucha, zadając {80/88/96/104/112/120/128/136/144/152}% pkt. obrażeń celowi i wszystkim wrogom wokół. Obrażenia te są zwiększone o x3% za każdy punkt esencji wydany na użycie Kościanego Widma.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"ptBR": "Recarga: {#} segundos\nCusto de essência: Toda a essência restante\nChance de Golpe de Sorte: {#}%\nConsome toda a sua essência para conjurar um espírito de ossos que busca inimigos. Ao alcançar um inimigo, o espírito explode, causando {80/88/96/104/112/120/128/136/144/152}% de dano ao alvo e a todos os inimigos ao redor. O dano é aumentado em 3% por cada ponto de essência gasto ao lançar Espírito de Ossos.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"ruRU": "Время восстановления: {#} сек.\nЗатраты эссенции: весь оставшийся запас.\nВероятность удачного удара: {#}%.\nВы расходуете весь запас эссенции и призываете костяного духа, преследующего противников. Достигнув цели, дух взрывается, нанося {80/88/96/104/112/120/128/136/144/152}% ед. урона ей и ближайшим противникам. Урон увеличивается на x3% за каждую ед. эссенции, затраченную на призыв \"Костяного духа\".\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"zhCN": "冷却时间:{#}秒\n精魂消耗:剩余所有精魂\n幸运一击几率:{#}%\n消耗所有精魂召唤一只能够索敌的骨灵。骨灵在到达敌人身边时发生爆炸,对目标和周围所有敌人造成{80/88/96/104/112/120/128/136/144/152}%点伤害。施放骨灵时,每消耗一点精魂都会使其伤害提高x3%。\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical."
},
		id: 80,
		maxPoints: 5,
		values: [ "12", "33" ],
		x: 441.425,
		y: 214.93
	},
	"Enhanced Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Bone Spirit", "Ghastly Bone Spirit", "Dreadful Bone Spirit" ],
		description: `If Bone Spirit Critically Strikes, its Cooldown is reduced by 6 seconds. This effect can only happen once per cast.

Tags: Macabre, Bone, Damage, Cooldown, Essence, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Knochengeist",
			"esES": "Espíritu de hueso mejorado",
			"esMX": "Espíritu Óseo Potenciado",
			"frFR": "Esprit d'os renforcé",
			"itIT": "Spirito d'Ossa Rinforzato",
			"jaJP": "ボーン・スピリット(強化版)",
			"koKR": "강화된 뼈 영혼",
			"plPL": "Wzmocnione Kościane Widmo",
			"ptBR": "Espírito de Ossos Aperfeiçoado",
			"ruRU": "Усиленный костяной дух",
			"zhCN": "强化骨灵"
},
		descriptionLocalized: {
			"deDE": "Wenn Knochengeist einen kritischen Treffer erzielt, wird die Abklingzeit um 6 Sek reduziert. Dieser Effekt kann nur einmal pro Einsatz auftreten.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"esES": "Si Espíritu de hueso asesta un golpe crítico, su tiempo de reutilización se reduce 6 s. Este efecto solo puede ocurrir una vez por lanzamiento.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"esMX": "Si Espíritu Óseo realiza un golpe crítico, su recuperación se reduce 6 segundos. Este efecto solo puede ocurrir una vez por lanzamiento.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"frFR": "Si Esprit d'os inflige un coup critique, son temps de recharge est réduit de 6 s. Cet effet ne peut se produire qu'une fois par utilisation.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"itIT": "Se Spirito d'Ossa infligge danni critici, il suo tempo di recupero si riduce di 6 s. Può attivarsi solo una volta per lancio.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"jaJP": "〈ボーン・スピリット〉がクリティカルヒットを出すと、クールダウンが6秒短くなる。効果が発動するのは1回の使用につき一度のみ。\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"koKR": "뼈 영혼이 극대화로 적중하면 뼈 영혼의 재사용 대기시간이 6초 감소합니다. 이 효과는 시전 1회당 한 번만 발동합니다.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"plPL": "Jeśli Kościane Widmo wywołuje trafienie krytyczne, jego czas odnowienia zostaje skrócony o 6 sek. Efekt ten może wystąpić tylko raz na użycie zdolności.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"ptBR": "Se Espírito de Ossos desfere um acerto crítico, a recarga é reduzida em 6 segundos. Este efeito só pode ocorrer uma vez por lançamento.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"ruRU": "Когда \"Костяной дух\" наносит критический удар, время восстановления умения сокращается на 6 сек. Эффект срабатывает только раз за одно применение.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"zhCN": "骨灵暴击时,法术冷却时间缩短6秒。该效果每次施法只能触发一次。\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical."
},
		id: 81,
		maxPoints: 1,
		x: 737.945,
		y: 347.195
	},
	"Ghastly Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Enhanced Bone Spirit" ],
		description: `Bone Spirit has an additional +10% Critical Strike Chance.

Tags: Macabre, Bone, Damage, Cooldown, Essence, Physical.`,
		nameLocalized: {
			"deDE": "Grässlicher Knochengeist",
			"esES": "Espíritu de hueso truculento",
			"esMX": "Espíritu Óseo Horrendo",
			"frFR": "Esprit d'os funèbre",
			"itIT": "Spirito d'Ossa Spettrale",
			"jaJP": "ボーン・スピリット(凄惨)",
			"koKR": "섬뜩한 뼈 영혼",
			"plPL": "Upiorne Kościane Widmo",
			"ptBR": "Espírito de Ossos Hediondo",
			"ruRU": "Зловещий костяной дух",
			"zhCN": "惊骇骨灵"
},
		descriptionLocalized: {
			"deDE": "Knochengeist erhält eine zusätzliche kritische Trefferchance von +10%.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"esES": "Espíritu de hueso tiene un +10% más de probabilidad de golpe crítico.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"esMX": "Espíritu Óseo tiene un +10% más de probabilidad de golpe crítico.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"frFR": "Les chances d'infliger un coup critique d'Esprit d'os sont augmentées de +10%.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"itIT": "Spirito d'Ossa ha una probabilità di critico aggiuntiva del +10%.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"jaJP": "〈ボーン・スピリット〉のクリティカルヒット率が+10%上昇する。\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"koKR": "뼈 영혼의 극대화 확률이 +10% 증가합니다.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"plPL": "Kościane Widmo ma dodatkowo +10% szans na trafienie krytyczne.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"ptBR": "Espírito de Ossos tem +10% de chance de acerto crítico aumentada.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"ruRU": "Вероятность критического удара \"Костяного духа\" повышается на +10%.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"zhCN": "骨灵有额外+10%几率造成暴击。\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical."
},
		id: 82,
		maxPoints: 1,
		x: 1016.045,
		y: 348.86
	},
	"Dreadful Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Enhanced Bone Spirit" ],
		description: `After Bone Spirit hits an enemy, you generate 30 Essence over the next 4 seconds.

Tags: Macabre, Bone, Damage, Cooldown, Essence, Physical.`,
		nameLocalized: {
			"deDE": "Furchterregender Knochengeist",
			"esES": "Espíritu de hueso pavoroso",
			"esMX": "Espíritu Óseo Espantoso",
			"frFR": "Esprit d'os épouvantable",
			"itIT": "Spirito d'Ossa Terrificante",
			"jaJP": "ボーン・スピリット(畏怖)",
			"koKR": "끔찍한 뼈 영혼",
			"plPL": "Przerażające Kościane Widmo",
			"ptBR": "Espírito de Ossos Pavoroso",
			"ruRU": "Кошмарный костяной дух",
			"zhCN": "可怖骨灵"
},
		descriptionLocalized: {
			"deDE": "Wenn Knochengeist einen Gegner trifft, erzeugt Ihr im Verlauf der nächsten 4 Sek. 30 Essenz.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"esES": "Cuando Espíritu de hueso golpea a un enemigo, generas 30 de esencia durante los siguientes 4 s.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"esMX": "Después de que Espíritu Óseo golpea a un enemigo, generas 30 de Esencia durante los próximos 4 segundos.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"frFR": "Une fois qu'Esprit d'os a touché un adversaire, vous générez 30 points d'essence au cours des 4 prochaines secondes.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"itIT": "Dopo che Spirito d'Ossa colpisce un nemico, rigeneri 30 essenza nei successivi 4 s.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"jaJP": "〈ボーン・スピリット〉が敵1体に命中した後、次の4秒間に30の精髄を回復する。\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"koKR": "뼈 영혼이 적에게 적중하면 다음 4초에 걸쳐 정수를 30 생성합니다.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"plPL": "Po trafieniu wroga Kościanym Widmem odzyskujesz 30 pkt. esencji w ciągu kolejnych 4 sek.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"ptBR": "Quando Espírito de Ossos atinge um inimigo, você gera 30 de essência ao longo dos próximos 4 segundos.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"ruRU": "Когда \"Костяной дух\" поражает противника, вы накапливаете 30 ед. эссенции за 4 сек.\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical.",
			"zhCN": "骨灵命中一名敌人后,你会在接下来的4秒内回复30点精魂。\n\nTags: Macabre, Bone, Damage, Cooldown, Essence, Physical."
},
		id: 83,
		maxPoints: 1,
		x: 787.835,
		y: 492.635
	},
	"Serration": {
		connections: [ "Rapid Ossification", "Compound Fracture", "Summoning" ],
		description: `Your Bone Skills have a +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% increased Critical Strike Chance for each 10 Essence you have upon cast.

Tags: Critical Strikes, Essence, Bone.`,
		nameLocalized: {
			"deDE": "Zahnbewehrt",
			"esES": "Corte serrado",
			"esMX": "Sierra",
			"frFR": "Crantage",
			"itIT": "Ossa Taglienti",
			"jaJP": "鋸歯",
			"koKR": "톱니",
			"plPL": "Ząbkowane Ostrze",
			"ptBR": "Serrilha",
			"ruRU": "Зазубрины",
			"zhCN": "齿状骨刺"
},
		descriptionLocalized: {
			"deDE": "Die kritische Trefferchance Eurer Knochenfertigkeiten erhöht sich je 10 Essenz, die Ihr beim Wirken besitzt, um +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}%.\n\nTags: Critical Strikes, Essence, Bone.",
			"esES": "Tus habilidades de hueso tienen un +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% más de probabilidad de golpe crítico por cada 10 de esencia que tengas al lanzarlas.\n\nTags: Critical Strikes, Essence, Bone.",
			"esMX": "Tus habilidades de Hueso tienen un +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% más de probabilidad de golpe crítico por cada 10 de Esencia que tengas al lanzarlas.\n\nTags: Critical Strikes, Essence, Bone.",
			"frFR": "Vos compétences d'os ont +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% de chances supplémentaires d'infliger un coup critique pour chaque tranche de 10 points d'essence que vous avez lors de l'utilisation.\n\nTags: Critical Strikes, Essence, Bone.",
			"itIT": "La probabilità di critico delle abilità d'ossa aumenta del +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% ogni 10 essenza accumulata al lancio dell'abilità.\n\nTags: Critical Strikes, Essence, Bone.",
			"jaJP": "骨スキルのクリティカルヒット率が、スキル使用時に持っている精髄10ポイント毎に+{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}%上昇する。\n\nTags: Critical Strikes, Essence, Bone.",
			"koKR": "뼈 기술을 시전할 때 보유한 정수 10당 해당 기술의 극대화 확률이 +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% 증가합니다.\n\nTags: Critical Strikes, Essence, Bone.",
			"plPL": "Twoje umiejętności Kości mają o +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% większą szansę na trafienie krytyczne za każde 10 pkt. esencji posiadane w momencie użycia umiejętności.\n\nTags: Critical Strikes, Essence, Bone.",
			"ptBR": "Suas habilidades de Osso têm +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% de chance de acerto crítico aumentada por cada 10 de essência que você tiver ao lançar.\n\nTags: Critical Strikes, Essence, Bone.",
			"ruRU": "Вероятность нанести критический урон навыками костей увеличивается на +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% за каждые 10 ед. эссенции, накопленные на момент применения навыка.\n\nTags: Critical Strikes, Essence, Bone.",
			"zhCN": "施放白骨技能时,每有10点精魂都能使你的白骨技能暴击几率提高+{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}%。\n\nTags: Critical Strikes, Essence, Bone."
},
		id: 84,
		maxPoints: 3,
		x: -3.41,
		y: 280.62
	},
	"Rapid Ossification": {
		connections: [ "Serration", "Evulsion" ],
		description: `Every 100 Essence you spend reduces the cooldowns of your Bone Skills by {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds.

Tags: Essence, Cooldown, Bone.`,
		nameLocalized: {
			"deDE": "Rapide Verknöcherung",
			"esES": "Osificación rápida",
			"esMX": "Osificación Rápida",
			"frFR": "Ossification rapide",
			"itIT": "Ossificazione Rapida",
			"jaJP": "急速骨化",
			"koKR": "급속 골화",
			"plPL": "Błyskawiczne Skostnienie",
			"ptBR": "Ossificação Rápida",
			"ruRU": "Быстрое окостенение",
			"zhCN": "快速骨化"
},
		descriptionLocalized: {
			"deDE": "Jede 100 Essenz, die Ihr verbraucht, reduziert die Abklingzeiten Eurer Knochenfertigkeiten um {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} Sek.\n\nTags: Essence, Cooldown, Bone.",
			"esES": "Cada 100 de esencia que gastes reduce {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s los tiempos de reutilización de tus habilidades de hueso.\n\nTags: Essence, Cooldown, Bone.",
			"esMX": "Cada 100 de Esencia que consumes, se reduce {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos la recuperación de tus habilidades de Hueso.\n\nTags: Essence, Cooldown, Bone.",
			"frFR": "Tous les 100 points d'essence que vous dépensez, le temps de recharge de vos compétences d'os est réduit de {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Essence, Cooldown, Bone.",
			"itIT": "Ogni 100 essenza consumata, riduci il tempo di recupero delle tue abilità d'ossa di {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Essence, Cooldown, Bone.",
			"jaJP": "精髄を100使うたびに、骨スキルのクールダウンが{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒短くなる。\n\nTags: Essence, Cooldown, Bone.",
			"koKR": "정수를 100 소모할 때마다 뼈 기술의 재사용 대기시간이 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}초 감소합니다.\n\nTags: Essence, Cooldown, Bone.",
			"plPL": "Każde użyte przez ciebie 100 pkt. esencji skraca czas odnowienia twoich umiejętności Kości o {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} sek.\n\nTags: Essence, Cooldown, Bone.",
			"ptBR": "Cada 100 de essência que você gasta reduz as recargas das suas habilidades de Osso em {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Essence, Cooldown, Bone.",
			"ruRU": "За каждые потраченные 100 ед. эссенции время восстановления навыков костей сокращается на {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} сек.\n\nTags: Essence, Cooldown, Bone.",
			"zhCN": "每消耗100点精魂,你的白骨技能的冷却时间缩短{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒。\n\nTags: Essence, Cooldown, Bone."
},
		id: 85,
		maxPoints: 3,
		x: -187.052,
		y: 416.56
	},
	"Evulsion": {
		connections: [ "Compound Fracture", "Rapid Ossification" ],
		description: `Your Bone Skills deal x{6/12/18/24/30/36/42/48/54/60}% increased Critical Strike Damage to Vulnerable enemies.

Tags: Vulnerable, Critical Strikes, Damage, Bone.`,
		nameLocalized: {
			"deDE": "Ausreißen",
			"esES": "Evulsión",
			"esMX": "Avulsión",
			"frFR": "Évulsion",
			"itIT": "Estrazione",
			"jaJP": "捻除",
			"koKR": "적출",
			"plPL": "Strzępy",
			"ptBR": "Extração",
			"ruRU": "Искоренение",
			"zhCN": "敲骨吸髓"
},
		descriptionLocalized: {
			"deDE": "Eure Knochenfertigkeiten fügen verwundbaren Gegnern x{6/12/18/24/30/36/42/48/54/60}% mehr kritischen Trefferschaden zu.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"esES": "Tus habilidades de hueso infligen un x{6/12/18/24/30/36/42/48/54/60}% más de daño de golpe crítico a enemigos vulnerables.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"esMX": "Tus habilidades de Hueso infligen un x{6/12/18/24/30/36/42/48/54/60}% más de daño de golpe crítico a los enemigos vulnerables.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"frFR": "Vos compétences d'os infligent x{6/12/18/24/30/36/42/48/54/60}% de dégâts critiques supplémentaires aux adversaires vulnérables.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"itIT": "Le tue abilità d'ossa infliggono il x{6/12/18/24/30/36/42/48/54/60}% di danni critici aggiuntivi ai nemici vulnerabili.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"jaJP": "脆弱状態の敵に対する骨スキルのクリティカルヒットダメージがx{6/12/18/24/30/36/42/48/54/60}%増加する。\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"koKR": "뼈 기술이 취약 상태의 적에게 주는 극대화 피해가 x{6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"plPL": "Twoje umiejętności Kości zadają odsłoniętym wrogom obrażenia od trafień krytycznych zwiększone o x{6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"ptBR": "Suas habilidades de Osso causam {6/12/18/24/30/36/42/48/54/60}% de dano de acerto crítico aumentado a inimigos vulneráveis.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"ruRU": "Ваши умения категории \"Кости\" наносят на x{6/12/18/24/30/36/42/48/54/60}% больше критического урона уязвимым противникам.\n\nTags: Vulnerable, Critical Strikes, Damage, Bone.",
			"zhCN": "你的白骨技能对处于易伤状态的敌人造成的暴击伤害提高x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: Vulnerable, Critical Strikes, Damage, Bone."
},
		id: 86,
		maxPoints: 3,
		x: -3.545,
		y: 558.38
	},
	"Compound Fracture": {
		connections: [ "Serration", "Evulsion" ],
		description: `After Critically Striking 10 times with Bone Skills, your Bone Skills deal x{5/10/15/20/25/30/35/40/45/50}% increased damage for 5 seconds.

Tags: Critical Strikes, Damage, Bone.`,
		nameLocalized: {
			"deDE": "Offener Bruch",
			"esES": "Fractura múltiple",
			"esMX": "Fractura Compuesta",
			"frFR": "Fracture ouverte",
			"itIT": "Frattura Composta",
			"jaJP": "複雑骨折",
			"koKR": "복합 골절",
			"plPL": "Złamanie z Przemieszczeniem",
			"ptBR": "Fratura Exposta",
			"ruRU": "Сложный перелом",
			"zhCN": "有创骨折"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mit Knochenfertigkeiten 10 kritische Treffer erzielt habt, verursachen Eure Knochenfertigkeiten 5 Sek. lang x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden.\n\nTags: Critical Strikes, Damage, Bone.",
			"esES": "Tras asestar 10 golpes críticos con habilidades de hueso, tus habilidades de hueso infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño durante los siguientes 5 s.\n\nTags: Critical Strikes, Damage, Bone.",
			"esMX": "Después de asestar 10 golpes críticos con tus habilidades de Hueso, dichas habilidades infligirán un x{5/10/15/20/25/30/35/40/45/50}% más de daño durante los siguientes 5 segundos.\n\nTags: Critical Strikes, Damage, Bone.",
			"frFR": "Lorsque vous réalisez 10 coups critiques avec des compétences d'os, vos compétences d'os infligent x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires pendant 5 s.\n\nTags: Critical Strikes, Damage, Bone.",
			"itIT": "Dopo che hai inflitto 10 colpi critici con abilità d'ossa, le tue abilità d'ossa infliggono il x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi per i successivi 5 s.\n\nTags: Critical Strikes, Damage, Bone.",
			"jaJP": "骨スキルでクリティカルヒットを10回出すと、骨スキルの与えるダメージが5秒間x{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: Critical Strikes, Damage, Bone.",
			"koKR": "뼈 기술이 10회 극대화로 적중한 후 5초 동안 뼈 기술로 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Critical Strikes, Damage, Bone.",
			"plPL": "Po wykonaniu 10 trafień krytycznych umiejętnościami Kości te umiejętności zadają obrażenia zwiększone o x{5/10/15/20/25/30/35/40/45/50}% w ciągu kolejnych 5 sek.\n\nTags: Critical Strikes, Damage, Bone.",
			"ptBR": "Depois de 10 acertos críticos com habilidades de Osso, suas habilidades de Osso causam {5/10/15/20/25/30/35/40/45/50}% de dano aumentado por 5 segundos.\n\nTags: Critical Strikes, Damage, Bone.",
			"ruRU": "После того как вы наносите 10 критических удара:критических ударов навыками костей, наносимый урон от навыков этой категории увеличивается на x{5/10/15/20/25/30/35/40/45/50}% на 5 сек.\n\nTags: Critical Strikes, Damage, Bone.",
			"zhCN": "当你使用白骨技能造成10次暴击后,你的白骨技能造成的伤害提高x{5/10/15/20/25/30/35/40/45/50}%,持续5秒。\n\nTags: Critical Strikes, Damage, Bone."
},
		id: 87,
		maxPoints: 3,
		x: 183.23,
		y: 416.205
	},
	"Necrotic Carapace": {
		connections: [ "Summoning" ],
		description: `When a Corpse is formed from your Skills or your Minions, Fortify for {2/4/6/8/10/12/14/16/18/20}% Base Life.

Tags: Fortify, Corpse, Minion.`,
		nameLocalized: {
			"deDE": "Nekrotischer Panzer",
			"esES": "Carapacho necrótico",
			"esMX": "Caparazón Necrótico",
			"frFR": "Carapace nécrotique",
			"itIT": "Carapace Necrotico",
			"jaJP": "壊死の甲皮",
			"koKR": "괴저 껍질",
			"plPL": "Nekrotyczny Karapaks",
			"ptBR": "Carapaça Necrótica",
			"ruRU": "Некротический панцирь",
			"zhCN": "死疽甲壳"
},
		descriptionLocalized: {
			"deDE": "Wenn eine Eurer Fertigkeiten oder Diener eine Leiche erzeugt, erhaltet Ihr Stählung in Höhe von {2/4/6/8/10/12/14/16/18/20}% Eures Basislebens.\n\nTags: Fortify, Corpse, Minion.",
			"esES": "Cuando formas un cadáver con tus habilidades o esbirros, fortificas un {2/4/6/8/10/12/14/16/18/20}% de tu vida base.\n\nTags: Fortify, Corpse, Minion.",
			"esMX": "Cuando se genera un cadáver por tus habilidades o tus esbirros, te fortificas con un {2/4/6/8/10/12/14/16/18/20}% de tu vida de base.\n\nTags: Fortify, Corpse, Minion.",
			"frFR": "Lorsqu'un cadavre est créé par l'une de vos compétences ou l'un de vos serviteurs, vous obtenez un montant de fortification égal à {2/4/6/8/10/12/14/16/18/20}% de vos points de vie de base.\n\nTags: Fortify, Corpse, Minion.",
			"itIT": "Quando si genera un cadavere dal lancio di una tua abilità o da uno dei tuoi servitori, ottieni Fortificazione per il {2/4/6/8/10/12/14/16/18/20}% della tua Vita base.\n\nTags: Fortify, Corpse, Minion.",
			"jaJP": "スキルまたはミニオンが死体を1体形成すると、基本ライフの{2/4/6/8/10/12/14/16/18/20}%にあたるの強化を獲得する。\n\nTags: Fortify, Corpse, Minion.",
			"koKR": "자신이나 하수인의 기술로 시체가 생성되면 기본 생명력의 {2/4/6/8/10/12/14/16/18/20}%만큼 보강됩니다.\n\nTags: Fortify, Corpse, Minion.",
			"plPL": "Kiedy stworzysz zwłoki z pomocą umiejętności lub sług, zyskujesz umocnienie równe {2/4/6/8/10/12/14/16/18/20}% twojego podstawowego zdrowia.\n\nTags: Fortify, Corpse, Minion.",
			"ptBR": "Quando um cadáver é formado a partir das suas habilidades ou dos seus lacaios, você se fortifica em {2/4/6/8/10/12/14/16/18/20}% da vida básica.\n\nTags: Fortify, Corpse, Minion.",
			"ruRU": "Когда ваши умения или прислужники создают труп, вы получаете укрепление в объеме {2/4/6/8/10/12/14/16/18/20}% базового запаса здоровья.\n\nTags: Fortify, Corpse, Minion.",
			"zhCN": "如果你的技能或仆从生成了一具亡骸,强固你{2/4/6/8/10/12/14/16/18/20}%基础生命。\n\nTags: Fortify, Corpse, Minion."
},
		id: 128,
		maxPoints: 3,
		x: 541.815,
		y: 2.895
	},
};

necromancerData["Ultimate"] = {
	"Bonded in Essence": {
		connections: [ "Death's Defense", "Ultimate" ],
		description: `Every 5 seconds, your Skeletal Priest's Healing will Heal your skeletons for {20/40/60/80/100/120/140/160/180/200}% of their Maximum Life.

Tags: Minion, Healing.`,
		nameLocalized: {
			"deDE": "In Essenz gebunden",
			"esES": "Enlace de esencia",
			"esMX": "Unidos por la Esencia",
			"frFR": "Liens de substance",
			"itIT": "Vincolo dell'Essenza",
			"jaJP": "精髄の絆",
			"koKR": "정수 속박",
			"plPL": "Więź Esencji",
			"ptBR": "Vínculo Essencial",
			"ruRU": "Связанные одной эссенцией",
			"zhCN": "精魂纽带"
},
		descriptionLocalized: {
			"deDE": "Alle 5 Sek. heilt die Heilung Eures Skelettpriesters Eure Skelette um {20/40/60/80/100/120/140/160/180/200}% ihres maximalen Lebens.\n\nTags: Minion, Healing.",
			"esES": "Cada 5 s, tu sacerdote esquelético curará un {20/40/60/80/100/120/140/160/180/200}% de la vida máxima de tus esqueletos.\n\nTags: Minion, Healing.",
			"esMX": "Cada 5 segundos, la sanación de tu Sacerdote Esquelético sanará a tus esqueletos un {20/40/60/80/100/120/140/160/180/200}% de su vida máxima.\n\nTags: Minion, Healing.",
			"frFR": "Toutes les 5 s, les soins de votre prêtre squelette rendent {20/40/60/80/100/120/140/160/180/200}% de leur maximum de points de vie à vos squelettes.\n\nTags: Minion, Healing.",
			"itIT": "Ogni 5 s, le cure del tuo Sacerdote Scheletrico cureranno i tuoi scheletri del {20/40/60/80/100/120/140/160/180/200}% della loro Vita massima.\n\nTags: Minion, Healing.",
			"jaJP": "5秒に1回、スケルトンプリーストが配下のスケルトンをさらにライフ最大値の{20/40/60/80/100/120/140/160/180/200}%回復させる。\n\nTags: Minion, Healing.",
			"koKR": "5초마다 해골 사제가 자신의 해골의 생명력을 최대 생명력의 {20/40/60/80/100/120/140/160/180/200}%만큼 추가로 회복시킵니다.\n\nTags: Minion, Healing.",
			"plPL": "Co 5 sek. twoi Szkieletowi Kapłani leczą twoje szkielety, przywracając im {20/40/60/80/100/120/140/160/180/200}% maksymalnego zdrowia.\n\nTags: Minion, Healing.",
			"ptBR": "A cada 5 segundos, seu Sacerdote Esqueleto curará seus esqueletos em {20/40/60/80/100/120/140/160/180/200}% de suas vidas máximas.\n\nTags: Minion, Healing.",
			"ruRU": "Раз в 5 сек. ваши скелеты-жрецы восполняют вашим скелетам {20/40/60/80/100/120/140/160/180/200}% их максимального запаса здоровья.\n\nTags: Minion, Healing.",
			"zhCN": "每隔5秒,你的骷髅祭司的恢复效果会为你的骷髅额外恢复生命上限的{20/40/60/80/100/120/140/160/180/200}%。\n\nTags: Minion, Healing."
},
		id: 89,
		maxPoints: 3,
		x: -293.765,
		y: 208.59
	},
	"Death's Defense": {
		connections: [ "Bonded in Essence", "Inspiring Leader" ],
		description: `Your Minions cannot lose more than {75/50/25/0/-25/-50/-75/-100/-125/-150}% of their Maximum Life from a single damage instance.

Tags: Life, Damage Reduction, Minion.`,
		nameLocalized: {
			"deDE": "Widerstand des Todes",
			"esES": "Defensa de la muerte",
			"esMX": "Defensa de la Muerte",
			"frFR": "Défense de la Mort",
			"itIT": "Difesa della Morte",
			"jaJP": "死の守り",
			"koKR": "죽음의 변호",
			"plPL": "Śmiertelna Obrona",
			"ptBR": "Defesa da Morte",
			"ruRU": "Защита смерти",
			"zhCN": "亡者之御"
},
		descriptionLocalized: {
			"deDE": "Eure Diener können durch eine einzige Schadensinstanz nicht mehr als {75/50/25/0/-25/-50/-75/-100/-125/-150}% ihres maximalen Lebens verlieren.\n\nTags: Life, Damage Reduction, Minion.",
			"esES": "Tus esbirros no pueden perder más de un {75/50/25/0/-25/-50/-75/-100/-125/-150}% de su vida máxima por un solo efecto de daño.\n\nTags: Life, Damage Reduction, Minion.",
			"esMX": "Tus esbirros no pueden perder más del {75/50/25/0/-25/-50/-75/-100/-125/-150}% de su vida máxima con una instancia de daño simple.\n\nTags: Life, Damage Reduction, Minion.",
			"frFR": "Vos serviteurs ne peuvent pas perdre plus de {75/50/25/0/-25/-50/-75/-100/-125/-150}% de leur maximum de points de vie en une seule instance de dégâts.\n\nTags: Life, Damage Reduction, Minion.",
			"itIT": "Le tue evocazioni non possono perdere più del {75/50/25/0/-25/-50/-75/-100/-125/-150}% della loro Vita massima per una singola istanza di danno.\n\nTags: Life, Damage Reduction, Minion.",
			"jaJP": "ミニオンが1回の攻撃で受けるダメージがライフ最大値の{75/50/25/0/-25/-50/-75/-100/-125/-150}%以下になる。\n\nTags: Life, Damage Reduction, Minion.",
			"koKR": "하수인이 피해를 1회 받을 때 최대 생명력의 {75/50/25/0/-25/-50/-75/-100/-125/-150}% 이상을 잃지 않습니다.\n\nTags: Life, Damage Reduction, Minion.",
			"plPL": "Twoje sługi nie mogą stracić więcej niż {75/50/25/0/-25/-50/-75/-100/-125/-150}% swojego maksymalnego zdrowia od pojedynczego źródła obrażeń.\n\nTags: Life, Damage Reduction, Minion.",
			"ptBR": "Seus lacaios não podem perder mais do que {75/50/25/0/-25/-50/-75/-100/-125/-150}% da vida máxima a partir de uma única ocorrência de dano.\n\nTags: Life, Damage Reduction, Minion.",
			"ruRU": "Ваши прислужники не могут потерять больше {75/50/25/0/-25/-50/-75/-100/-125/-150}% максимального запаса здоровья от одного удара.\n\nTags: Life, Damage Reduction, Minion.",
			"zhCN": "你的仆从不会从单次攻命中受到超过生命上限{75/50/25/0/-25/-50/-75/-100/-125/-150}%的伤害。\n\nTags: Life, Damage Reduction, Minion."
},
		id: 90,
		maxPoints: 3,
		x: -451.67,
		y: 328.78
	},
	"Inspiring Leader": {
		connections: [ "Hellbent Commander", "Ultimate", "Death's Defense" ],
		description: `After you have been Healthy for at least 4 seconds, you and your Minions gain +{4/8/12/16/20/24/28/32/36/40}% Attack Speed.

Tags: Healthy, Minion, Attack Speed.`,
		nameLocalized: {
			"deDE": "Inspirierender Anführer",
			"esES": "Liderazgo inspirador",
			"esMX": "Líder Inspirador",
			"frFR": "Leader charismatique",
			"itIT": "Leader carismatico",
			"jaJP": "勇ましき司令官",
			"koKR": "고무적인 지도자",
			"plPL": "Inspirujące Przywództwo",
			"ptBR": "Liderança Inspiradora",
			"ruRU": "Пример для подражания",
			"zhCN": "鼓舞领袖"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr mindestens 4 Sek. gesund gewesen seid, erhaltet Ihr und Eure Diener +{4/8/12/16/20/24/28/32/36/40}% Angriffsgeschwindigkeit.\n\nTags: Healthy, Minion, Attack Speed.",
			"esES": "Tras llevar al menos 4 s en estado saludable, tus esbirros y tú obtenéis un +{4/8/12/16/20/24/28/32/36/40}% de velocidad de ataque.\n\nTags: Healthy, Minion, Attack Speed.",
			"esMX": "Después de permanecer saludable durante al menos 4 segundos, tú y tus esbirros obtienen un +{4/8/12/16/20/24/28/32/36/40}% de velocidad de ataque.\n\nTags: Healthy, Minion, Attack Speed.",
			"frFR": "Après avoir passé au moins 4 s en bonne santé, votre vitesse d'attaque et celle des vos serviteurs est augmentée de +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Healthy, Minion, Attack Speed.",
			"itIT": "Dopo essere stati in salute per almeno 4 s, la velocità d'attacco tua e dei tuoi servitori aumenta del +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Healthy, Minion, Attack Speed.",
			"jaJP": "健全状態が少なくとも4秒間続いた後、自分とミニオンの攻撃速度が+{4/8/12/16/20/24/28/32/36/40}%上昇する。\n\nTags: Healthy, Minion, Attack Speed.",
			"koKR": "건강 상태를 4초 이상 유지하면, 자신과 하수인의 공격 속도가 +{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: Healthy, Minion, Attack Speed.",
			"plPL": "Jeśli jesteś w pełni sił przez co najmniej 4 sek., ty i twoje sługi zyskujecie premię +{4/8/12/16/20/24/28/32/36/40}% do szybkości ataku.\n\nTags: Healthy, Minion, Attack Speed.",
			"ptBR": "Depois de ficar saudável por pelo menos 4 segundos, você e seus lacaios recebem +{4/8/12/16/20/24/28/32/36/40}% de velocidade de ataque.\n\nTags: Healthy, Minion, Attack Speed.",
			"ruRU": "Если вы поддерживаете высокий уровень здоровья в течение как минимум 4 сек., скорость атаки повышается на +{4/8/12/16/20/24/28/32/36/40}% для вас и ваших прислужников.\n\nTags: Healthy, Minion, Attack Speed.",
			"zhCN": "处于健康状态至少4秒后,你和你仆从的攻击速度提高+{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: Healthy, Minion, Attack Speed."
},
		id: 129,
		maxPoints: 3,
		x: -606.325,
		y: 83.67
	},
	"Hellbent Commander": {
		connections: [ "Inspiring Leader" ],
		description: `Your Minions deal x{10/20/30/40/50/60/70/80/90/100}% increased damage while you are Close to them.

Tags: Damage, Minion.`,
		nameLocalized: {
			"deDE": "Versessener Kommandant",
			"esES": "Comandante impenitente",
			"esMX": "Comandante Resuelto",
			"frFR": "Capitaine des troupes",
			"itIT": "Comandante Infernale",
			"jaJP": "猛進の命令",
			"koKR": "지옥의 사령관",
			"plPL": "Piekielny Dowódca",
			"ptBR": "Comandante Tenaz",
			"ruRU": "Одержимый командир",
			"zhCN": "冷面指挥官"
},
		descriptionLocalized: {
			"deDE": "Eure Diener verursachen x{10/20/30/40/50/60/70/80/90/100}% mehr Schaden, solange Ihr in der Nähe seid.\n\nTags: Damage, Minion.",
			"esES": "Tus esbirros infligen un x{10/20/30/40/50/60/70/80/90/100}% más de daño mientras estás cerca de ellos.\n\nTags: Damage, Minion.",
			"esMX": "Tus esbirros infligen un x{10/20/30/40/50/60/70/80/90/100}% más de daño mientras estás cerca de ellos.\n\nTags: Damage, Minion.",
			"frFR": "Vos serviteurs infligent x{10/20/30/40/50/60/70/80/90/100}% de dégâts supplémentaires tant que vous êtes près d'eux.\n\nTags: Damage, Minion.",
			"itIT": "I tuoi servitori infliggono il x{10/20/30/40/50/60/70/80/90/100}% di danni aggiuntivi quando sei vicino a loro.\n\nTags: Damage, Minion.",
			"jaJP": "自身の近くにいるミニオンが敵に与えるダメージがx{10/20/30/40/50/60/70/80/90/100}%増加する。\n\nTags: Damage, Minion.",
			"koKR": "강령술사가 가까이 있을 때 하수인이 주는 피해가 x{10/20/30/40/50/60/70/80/90/100}% 증가합니다.\n\nTags: Damage, Minion.",
			"plPL": "Twoje sługi zadają o x{10/20/30/40/50/60/70/80/90/100}% więcej obrażeń, gdy znajdujesz się w ich pobliżu.\n\nTags: Damage, Minion.",
			"ptBR": "Seus lacaios causam {10/20/30/40/50/60/70/80/90/100}% de dano aumentado enquanto você está perto deles.\n\nTags: Damage, Minion.",
			"ruRU": "Ваши прислужники наносят на x{10/20/30/40/50/60/70/80/90/100}% больше урона, пока вы рядом с ними.\n\nTags: Damage, Minion.",
			"zhCN": "你的仆从在你身边时造成的伤害提高x{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: Damage, Minion."
},
		id: 91,
		maxPoints: 3,
		x: -805.99,
		y: 208.305
	},
	"Army of the Dead": {
		connections: [ "Prime Army of the Dead", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Call forth the deep buried dead. Volatile Skeletons emerge over the next 7 seconds that explode when around enemies, dealing 30% damage.

Tags: Ultimate, Damage, Cooldown, Physical.`,
		nameLocalized: {
			"deDE": "Armee der Toten",
			"esES": "Ejército de muertos",
			"esMX": "Ejército de Muertos",
			"frFR": "Armée de morts",
			"itIT": "Armata dei Morti",
			"jaJP": "死者の軍団",
			"koKR": "망자의 군대",
			"plPL": "Armia Umarłych",
			"ptBR": "Exército dos Mortos",
			"ruRU": "Армия мертвецов",
			"zhCN": "亡者大军"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nRuft die tief vergrabenen Toten herbei. Die nächsten 7 Sek. erscheinen unberechenbare Skelette, explodieren in der Nähe von Gegnern und verursachen 30% Schaden.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nInvocas a los muertos sepultados a gran profundidad. Durante los siguientes 7 s, emergen esqueletos volátiles que explotan al acercarse a los enemigos e infligen 30% de daño.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nConvocas a los muertos enterrados en las profundidades. Los esqueletos volátiles emergen durante los siguientes 7 segundos, explotan cuando están alrededor de los enemigos e infligen 30% de daño.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVous réveillez les morts profondément enterrés. Des squelettes instables émergent du sol pendant 7 s et explosent lorsqu'ils sont à proximité des adversaires, leur infligeant 30% points de dégâts.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nRichiami i morti sepolti. Scheletri instabili emergono nei successivi 7 s, esplodendo quando si trovano vicino ai nemici e infliggendo 30% danni.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n土中深く埋められた死者を呼び出す。次の7秒間にわたって不安定なスケルトンが現れ、敵が近くにいると爆発して30%のダメージを与える。\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n깊이 파묻힌 망자를 불러 일으킵니다. 다음 7초에 걸쳐 적 주위에서 폭발하여 30%의 피해를 주는 불안정한 해골들이 나타납니다.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nPrzyzywasz głęboko pogrzebane zwłoki. Przez następne 7 sek. pojawiają się rozszalałe szkielety, które wybuchają w pobliżu wrogów, zadając im 30% pkt. obrażeń.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nChama os mortos enterrados nas profundezas. Esqueletos voláteis emergem ao longo dos próximos 7 segundos e explodem quando inimigos estão ao redor, causando 30% de dano.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы призываете мертвецов, погребенных глубоко под землей. Через 7 сек. из-под земли появляются нестабильные скелеты, которые взрываются рядом с противниками, нанося 30% ед. урона.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"zhCN": "冷却时间:{#} 秒\n幸运一击几率:{#}%\n召唤深埋地下的亡灵。易爆骷髅会在接下来的7秒内出现并爆炸,对附近的敌人造成30%点伤害。\n\nTags: Ultimate, Damage, Cooldown, Physical."
},
		id: 93,
		maxPoints: 1,
		values: [ "90", "54" ],
		x: -591.12,
		y: -96.445
	},
	"Prime Army of the Dead": {
		baseSkill: "Army of the Dead",
		connections: [ "Army of the Dead", "Supreme Army of the Dead" ],
		description: `When Army of the Dead's Volatile Skeletons explode, they have a 15% chance to leave behind a Corpse.

Tags: Ultimate, Damage, Cooldown, Physical.`,
		nameLocalized: {
			"deDE": "Oberste Armee der Toten",
			"esES": "Ejército de muertos mayor",
			"esMX": "Ejército de Muertos Supremo",
			"frFR": "Armée de morts primordiale",
			"itIT": "Armata dei Morti Pregiata",
			"jaJP": "死者の軍団(上級)",
			"koKR": "극상의 망자의 군대",
			"plPL": "Największa Armia Umarłych",
			"ptBR": "Exército dos Mortos Primordial",
			"ruRU": "Первородная армия мертвецов",
			"zhCN": "至尊亡者大军"
},
		descriptionLocalized: {
			"deDE": "Wenn die Unberechenbaren Skelette von Armee der Toten explodieren, besteht eine Chance von 15%, dass sie ein Leiche hinterlassen.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"esES": "Cuando explotan los esqueletos volátiles de Ejército de muertos, tienen un 15% de probabilidad de dejar un cadáver tras de sí.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"esMX": "Cuando los esqueletos volátiles de Ejército de Muertos explotan, tienen un 15% de probabilidad de dejar un cadáver.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"frFR": "Lorsque les squelettes instables d'Armée de morts explosent, ils ont 15% de chances de laisser un cadavre derrière eux.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"itIT": "Quando gli scheletri di Armata dei Morti esplodono, hanno una probabilità del 15% di rilasciare un cadavere.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"jaJP": "〈死者の軍団〉の不安定なスケルトンが爆発した際に、15%の確率で死体を1つ残す。\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"koKR": "망자의 군대의 불안정한 해골이 폭발할 때 15% 확률로 시체를 남깁니다.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"plPL": "Kiedy rozszalałe szkielety z Armii Umarłych wybuchają, mają 15% szans na pozostawienie po sobie zwłok.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"ptBR": "Quando os esqueletos voláteis de Exército dos Mortos explodem, eles têm 15% de chance de deixar para trás um cadáver.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"ruRU": "Взрывающиеся скелеты, призванные \"Армией мертвецов\", с вероятностью 15% оставляют после взрыва труп.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"zhCN": "亡者大军的易爆骷髅爆炸时,有15%几率留下一具亡骸。\n\nTags: Ultimate, Damage, Cooldown, Physical."
},
		id: 94,
		maxPoints: 1,
		x: -832.855,
		y: -247.695
	},
	"Supreme Army of the Dead": {
		baseSkill: "Army of the Dead",
		connections: [ "Prime Army of the Dead" ],
		description: `Army of the Dead also raises your Skeletal Warriors and Skeletal Mages.

Tags: Ultimate, Damage, Cooldown, Physical.`,
		nameLocalized: {
			"deDE": "Überlegene Armee der Toten",
			"esES": "Ejército de muertos supremo",
			"esMX": "Ejército de Muertos Superior",
			"frFR": "Armée de morts suprême",
			"itIT": "Armata dei Morti Suprema",
			"jaJP": "死者の軍団(高級)",
			"koKR": "최고의 망자의 군대",
			"plPL": "Wielka Armia Umarłych",
			"ptBR": "Exército dos Mortos Supremo",
			"ruRU": "Неотвратимая армия мертвецов",
			"zhCN": "至极亡者大军"
},
		descriptionLocalized: {
			"deDE": "Armee der Toten erweckt auch Eure Skelettkrieger und Skelettmagier.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"esES": "Ejército de muertos también resucita tus guerreros esqueléticos y magos esqueléticos.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"esMX": "Ejército de Muertos también revive tus Guerreros y Magos Esqueléticos.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"frFR": "Armée de morts fait aussi se relever vos guerriers squelettes et mages squelettes.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"itIT": "Armata dei Morti resuscita anche i tuoi Guerrieri Scheletrici e Maghi Scheletrici.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"jaJP": "〈死者の軍団〉に、スケルトンウォーリアとスケルトンメイジを召喚する効果が加わる。\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"koKR": "망자의 군대가 해골 전사와 해골 마법학자도 일으킵니다.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"plPL": "Armia Umarłych powoduje również wskrzeszenie Szkieletowych Wojowników oraz Szkieletowych Magów.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"ptBR": "Exército dos Mortos também revive seus Guerreiros Esqueletos e Magos Esqueletos.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"ruRU": "\"Армия мертвецов\" также воскрешает ваших скелетов-воинов и скелетов-магов.\n\nTags: Ultimate, Damage, Cooldown, Physical.",
			"zhCN": "亡者大军也会复活你的骷髅战士和骷髅法师。\n\nTags: Ultimate, Damage, Cooldown, Physical."
},
		id: 95,
		maxPoints: 1,
		x: -1169.725,
		y: -246.42
	},
	"Blood Wave": {
		connections: [ "Prime Blood Wave", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a tidal wave of blood that deals 90% damage and Knocks Back enemies.

Tags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.`,
		nameLocalized: {
			"deDE": "Blutwelle",
			"esES": "Ola de sangre",
			"esMX": "Ola Sangrienta",
			"frFR": "Vague de sang",
			"itIT": "Ondata di Sangue",
			"jaJP": "ブラッド・ウェーブ",
			"koKR": "피의 파도",
			"plPL": "Fala Krwi",
			"ptBR": "Onda de Sangue",
			"ruRU": "Кровавая волна",
			"zhCN": "血潮"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nBeschwört eine Flutwelle aus Blut, die 90% Schaden verursacht und Gegner zurückstößt.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nCreas un maremoto de sangre que inflige 90% de daño y repele a los enemigos.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nConjuras una ola sangrienta gigante que inflige 90% de daño y repele a los enemigos.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVous créez une vague de sang qui inflige 90% points de dégâts aux adversaires et les repousse.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nInvochi un'ondata di sangue che infligge 90% danni e respinge indietro i nemici.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n血の大波を呼び起こし、敵に90%のダメージを与えてノックバックする。\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n피의 파도를 구현해 90%의 피해를 주고 적들을 밀쳐냅니다.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nTworzysz uderzeniową falę krwi, która zadaje 90% pkt. obrażeń i odrzuca wrogów.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nConjura uma onda de sangue que causa 90% de dano e repele inimigos.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nСоздает волну крови, наносящую 90% ед. урона и отбрасывающую противников.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n召唤一道鲜血浪潮,造成90%点伤害并将敌人击退。\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical."
},
		id: 96,
		maxPoints: 1,
		values: [ "50", "30" ],
		x: 0.355,
		y: -282.205
	},
	"Prime Blood Wave": {
		baseSkill: "Blood Wave",
		connections: [ "Blood Wave", "Supreme Blood Wave" ],
		description: `Blood Wave Slows enemies by 50% for 4 seconds.

Tags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.`,
		nameLocalized: {
			"deDE": "Oberste Blutwelle",
			"esES": "Ola de sangre mayor",
			"esMX": "Ola Sangrienta Suprema",
			"frFR": "Vague de sang primordiale",
			"itIT": "Ondata di Sangue Pregiata",
			"jaJP": "ブラッド・ウェーブ(上級)",
			"koKR": "극상의 피의 파도",
			"plPL": "Wielka Fala Krwi",
			"ptBR": "Onda de Sangue Primordial",
			"ruRU": "Первородная кровавая волна",
			"zhCN": "至尊血潮"
},
		descriptionLocalized: {
			"deDE": "Blutwelle verlangsamt Gegner 4 Sek. lang um 50%.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"esES": "Ola de sangre ralentiza a los enemigos un 50% durante 4 s.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"esMX": "Ola Sangrienta ralentiza a los enemigos un 50% durante 4 segundos.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"frFR": "Vague de sang ralentit les adversaires de 50% pendant 4 s.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"itIT": "Ondata di Sangue rallenta i nemici del 50% per 4 s.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"jaJP": "〈ブラッド・ウェーブ〉が敵の移動速度を4秒間50%低下させる。\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"koKR": "피의 파도가 적을 4초 동안 50% 감속시킵니다.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"plPL": "Fala Krwi spowalnia wrogów o 50% na 4 sek.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"ptBR": "Onda de Sangue desacelera inimigos em 50% por 4 segundos.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"ruRU": "\"Кровавая волна\" замедляет противников на 50% на 4 сек.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"zhCN": "血潮使敌人减速50%,持续4秒。\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical."
},
		id: 97,
		maxPoints: 1,
		x: -3.18,
		y: -507.345
	},
	"Supreme Blood Wave": {
		baseSkill: "Blood Wave",
		connections: [ "Prime Blood Wave" ],
		description: `Blood Wave leaves behind 3 Blood Orbs as it travels.

Tags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.`,
		nameLocalized: {
			"deDE": "Überlegene Blutwelle",
			"esES": "Ola de sangre suprema",
			"esMX": "Ola Sangrienta Superior",
			"frFR": "Vague de sang suprême",
			"itIT": "Ondata di Sangue Suprema",
			"jaJP": "ブラッド・ウェーブ(高級)",
			"koKR": "최고의 피의 파도",
			"plPL": "Największa Fala Krwi",
			"ptBR": "Onda de Sangue Suprema",
			"ruRU": "Неотвратимая кровавая волна",
			"zhCN": "至极血潮"
},
		descriptionLocalized: {
			"deDE": "Blutwelle hinterlässt entlang des Weges 3 Blutkugeln.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"esES": "Ola de sangre deja tras de sí 3 orbes de sangre.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"esMX": "Ola Sangrienta deja 3 Orbes de Sangre a medida que se desplaza.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"frFR": "La vague de sang laisse 3 orbes de sang dans son sillage.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"itIT": "Ondata di Sangue rilascia 3 Globi di Sangue lungo la sua traiettoria.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"jaJP": "〈ブラッド・ウェーブ〉が移動した跡に3個 〈血のオーブ〉を残していく。\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"koKR": "피의 파도가 경로를 따라 이동하며 피의 구슬을 3개 떨어뜨립니다.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"plPL": "Fala Krwi pozostawia na swojej drodze 3 krwawe kule.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"ptBR": "Onda de Sangue deixa para trás 3 orbes de sangue durante o trajeto.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"ruRU": "\"Кровавая волна\" оставляет 3 сферы крови на своем пути.\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.",
			"zhCN": "血潮会在其路径上留下3颗生命球。\n\nTags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical."
},
		id: 98,
		maxPoints: 1,
		x: -377.265,
		y: -506.98
	},
	"Stand Alone": {
		connections: [ "Memento Mori", "Ultimate" ],
		description: `Increases Damage Reduction by {6/12/18/24/30/36/42/48/54/60}%, reduced by 2% for each active Minion.

Tags: Damage Reduction, Minion.`,
		nameLocalized: {
			"deDE": "Allein stehen",
			"esES": "Desamparo",
			"esMX": "En Soledad",
			"frFR": "Autosuffisance",
			"itIT": "Autonomia",
			"jaJP": "独立独歩",
			"koKR": "홀로서기",
			"plPL": "Samotna Warta",
			"ptBR": "Independência",
			"ruRU": "Одиночка",
			"zhCN": "独行者"
},
		descriptionLocalized: {
			"deDE": "Erhöht die Schadensreduktion um {6/12/18/24/30/36/42/48/54/60}%. Jeder aktive Diener reduziert diesen Bonus um 2%.\n\nTags: Damage Reduction, Minion.",
			"esES": "Aumenta un {6/12/18/24/30/36/42/48/54/60}% la reducción de daño, que se reduce un 2% más por cada esbirro activo.\n\nTags: Damage Reduction, Minion.",
			"esMX": "Aumenta la reducción de daño un {6/12/18/24/30/36/42/48/54/60}%. El efecto se reduce un 2% por cada esbirro activo.\n\nTags: Damage Reduction, Minion.",
			"frFR": "Augmente la réduction des dégâts de {6/12/18/24/30/36/42/48/54/60}%. Cette valeur est réduite de 2% pour chaque serviteur actif.\n\nTags: Damage Reduction, Minion.",
			"itIT": "Aumenta la riduzione danni del {6/12/18/24/30/36/42/48/54/60}%, ma viene ridotta del 2% per ogni servitore attivo.\n\nTags: Damage Reduction, Minion.",
			"jaJP": "ダメージ軽減量が{6/12/18/24/30/36/42/48/54/60}%増加する。活動中のミニオン1体につき2%軽減される。\n\nTags: Damage Reduction, Minion.",
			"koKR": "피해 감소가 {6/12/18/24/30/36/42/48/54/60}% 증가하며, 활성화된 하수인 하나당 증가량이 2% 감소합니다.\n\nTags: Damage Reduction, Minion.",
			"plPL": "Redukcja obrażeń jest zwiększona o {6/12/18/24/30/36/42/48/54/60}%, ale wartość ta jest zmniejszona o 2% za każdego aktywnego sługę.\n\nTags: Damage Reduction, Minion.",
			"ptBR": "Aumenta a redução de dano em {6/12/18/24/30/36/42/48/54/60}%, reduzida em 2% por cada lacaio ativo.\n\nTags: Damage Reduction, Minion.",
			"ruRU": "Получаемый урон уменьшается на {6/12/18/24/30/36/42/48/54/60}%. Эффективность бонуса снижается на 2% за каждого активного прислужника.\n\nTags: Damage Reduction, Minion.",
			"zhCN": "伤害减免提高{6/12/18/24/30/36/42/48/54/60}%,每有一个激活的仆从降低2%。\n\nTags: Damage Reduction, Minion."
},
		id: 99,
		maxPoints: 3,
		x: 533.97,
		y: 0.78
	},
	"Memento Mori": {
		connections: [ "Stand Alone" ],
		description: `Sacrificing both Skeletal Warriors and Skeletal Mages increases their Sacrifice bonuses by {20/40/60/80/100/120/140/160/180/200}%.

Tags: Minion.`,
		nameLocalized: {
			"deDE": "Memento Mori",
			"esES": "Memento mori",
			"esMX": "Memento Mori",
			"frFR": "Memento mori",
			"itIT": "Memento mori",
			"jaJP": "メメント・モリ",
			"koKR": "죽음의 상징",
			"plPL": "Memento Mori",
			"ptBR": "Memento Mori",
			"ruRU": "Помни о смерти",
			"zhCN": "死亡警告"
},
		descriptionLocalized: {
			"deDE": "Opfert sowohl Skelettkrieger als auch Skelettmagier, um ihre Opferboni um {20/40/60/80/100/120/140/160/180/200}% zu erhöhen.\n\nTags: Minion.",
			"esES": "Sacrificar guerreros esqueléticos y magos esqueléticos aumenta un {20/40/60/80/100/120/140/160/180/200}% sus bonus de sacrificio.\n\nTags: Minion.",
			"esMX": "Al sacrificar Guerreros y Magos Esqueléticos, aumentas sus bonificaciones de sacrificio un {20/40/60/80/100/120/140/160/180/200}%.\n\nTags: Minion.",
			"frFR": "Sacrifier des guerriers squelettes et des mages squelettes augmente leurs bonus sacrificiels de {20/40/60/80/100/120/140/160/180/200}%.\n\nTags: Minion.",
			"itIT": "Sacrificare sia Guerrieri Scheletrici che Maghi Scheletrici aumenta i bonus forniti da ciascuno dei loro sacrifici del {20/40/60/80/100/120/140/160/180/200}%.\n\nTags: Minion.",
			"jaJP": "スケルトンウォーリアとスケルトンメイジの両方を生贄にすると、生贄ボーナスが{20/40/60/80/100/120/140/160/180/200}%増加する。\n\nTags: Minion.",
			"koKR": "해골 전사와 해골 마법학자를 모두 희생시키면 모두의 희생 효과가 {20/40/60/80/100/120/140/160/180/200}% 증가합니다.\n\nTags: Minion.",
			"plPL": "Złożenie w ofierze zarówno szkieletowych wojowników oraz szkieletowych magów zwiększa ich premię za Ofiarę o {20/40/60/80/100/120/140/160/180/200}%.\n\nTags: Minion.",
			"ptBR": "Sacrificar tanto Guerreiros Esqueletos quanto Magos Esqueletos aumenta seus bônus de sacrifício em {20/40/60/80/100/120/140/160/180/200}%.\n\nTags: Minion.",
			"ruRU": "Если вы приносите в жертву и скелетов-воинов, и скелетов-магов, эффективность соответствующих бонусов повышается на {20/40/60/80/100/120/140/160/180/200}%.\n\nTags: Minion.",
			"zhCN": "同时牺牲骷髅战士和骷髅法师会使其牲祭加成提高{20/40/60/80/100/120/140/160/180/200}%。\n\nTags: Minion."
},
		id: 100,
		maxPoints: 3,
		x: 929.458,
		y: 1.63
	},
	"Bone Storm": {
		connections: [ "Prime Bone Storm", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
A swirling storm of bones appears around you and your Golem, dealing 180% to surrounding enemies over 10 seconds.

Tags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.`,
		nameLocalized: {
			"deDE": "Knochensturm",
			"esES": "Tormenta de hueso",
			"esMX": "Tormenta Ósea",
			"frFR": "Tempête d'os",
			"itIT": "Tempesta d'Ossa",
			"jaJP": "ボーン・ストーム",
			"koKR": "뼈 폭풍",
			"plPL": "Nawałnica Kości",
			"ptBR": "Tempestade de Ossos",
			"ruRU": "Буря костей",
			"zhCN": "白骨风暴"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nEin wirbelnder Sturm aus Knochen umgibt Euch und Euren Golem und fügt Gegnern in der Nähe im Verlauf von 10 Sek. 180% Schaden zu.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nUna tormenta de huesos os rodea a ti y a tu gólem para infligir 180% de daño a los enemigos cercanos durante 10 s.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nUna tormenta arremolinada de huesos aparece en torno a ti y a tu Gólem e inflige 180% de daño a los enemigos circundantes durante 10 segundos.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nUne tempête d'ossements tourbillonnants se forme autour de votre golem et vous, ce qui inflige 180% points de dégâts aux adversaires à proximité en 10 s.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nUna tempesta di ossa turbinanti si materializza attorno a te e al tuo Golem, infliggendo 180% ai nemici circostanti in 10 s.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n自分と自分のゴーレムの周りに渦を巻く骨の嵐が出現し、10秒かけて180%のダメージを周囲の敵に与える。\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n휘몰아치는 뼈의 폭풍이 강령술사와 골렘의 주위에 나타나 주변 적들에게 10초에 걸쳐 180%의 피해를 줍니다.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nWirująca nawałnica kości otacza ciebie i twojego golema, zadając 180% pkt. obrażeń wrogom wokół w ciągu 10 sek.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nUma tempestade rodopiante de ossos cerca você e seu golem, causando 180% de dano a inimigos ao redor ao longo de 10 segundos.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВокруг вас и вашего голема образуется буря костей, наносящая противникам 180% ед. урона за 10 сек.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n用一阵白骨风暴环绕你和你的傀儡,在10秒内对周围敌人造成180%点伤害。\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion."
},
		id: 101,
		maxPoints: 1,
		values: [ "60", "40" ],
		x: 3.41,
		y: 307.975
	},
	"Prime Bone Storm": {
		baseSkill: "Bone Storm",
		connections: [ "Bone Storm", "Supreme Bone Storm" ],
		description: `Your Damage Reduction is increased by 15% while Bone Storm is active.

Tags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.`,
		nameLocalized: {
			"deDE": "Oberster Knochensturm",
			"esES": "Tormenta de hueso mayor",
			"esMX": "Tormenta Ósea Suprema",
			"frFR": "Tempête d'os primordiale",
			"itIT": "Tempesta d'Ossa Pregiata",
			"jaJP": "ボーン・ストーム(上級)",
			"koKR": "극상의 뼈 폭풍",
			"plPL": "Większa Nawałnica Kości",
			"ptBR": "Tempestade de Ossos Primordial",
			"ruRU": "Первородная буря костей",
			"zhCN": "至尊白骨风暴"
},
		descriptionLocalized: {
			"deDE": "Eure Schadensreduktion ist um 15% erhöht, solange Knochensturm aktiv ist.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"esES": "Tu reducción de daño aumenta un 15% mientras dura Tormenta de hueso.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"esMX": "Tu reducción de daño aumenta un 15% mientras Tormenta Ósea está activa.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"frFR": "Votre réduction des dégâts est augmentée de 15% tant que Tempête d'os est active.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"itIT": "La tua riduzione danni aumenta del 15% mentre Tempesta d'Ossa è attiva.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"jaJP": "〈ボーン・ストーム〉の発動中、ダメージ軽減量が15%増幅する。\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"koKR": "뼈 폭풍이 활성화되어 있는 동안 피해 감소가 15% 증가합니다.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"plPL": "Twoja redukcja obrażeń jest zwiększona o 15%, kiedy aktywna jest Nawałnica Kości.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"ptBR": "Sua redução de dano é aumentada em 15% enquanto Tempestade de Ossos está ativa.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"ruRU": "Пока действует \"Буря костей\", вы получаете на 15% меньше урона.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"zhCN": "白骨风暴激活时,你的伤害减免效果提高15%。\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion."
},
		id: 102,
		maxPoints: 1,
		x: -4.345,
		y: 506.955
	},
	"Supreme Bone Storm": {
		baseSkill: "Bone Storm",
		connections: [ "Prime Bone Storm" ],
		description: `Your Critical Strike Chance is increased by +20% while Bone Storm is active.

Tags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.`,
		nameLocalized: {
			"deDE": "Überlegener Knochensturm",
			"esES": "Tormenta de hueso suprema",
			"esMX": "Tormenta Ósea Superior",
			"frFR": "Tempête d'os suprême",
			"itIT": "Tempesta d'Ossa Suprema",
			"jaJP": "ボーン・ストーム(高級)",
			"koKR": "최고의 뼈 폭풍",
			"plPL": "Najwyższa Nawałnica Kości",
			"ptBR": "Tempestade de Ossos Suprema",
			"ruRU": "Неотвратимая буря костей",
			"zhCN": "至极白骨风暴"
},
		descriptionLocalized: {
			"deDE": "Eure kritische Trefferchance ist um +20% erhöht, solange Knochensturm aktiv ist.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"esES": "Tu probabilidad de golpe crítico aumenta un +20% mientras dura Tormenta de hueso.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"esMX": "Tu probabilidad de golpe crítico aumenta un +20% mientras Tormenta Ósea está activa.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"frFR": "Vos chances d'infliger des coups critiques sont augmentées de +20% tant que Tempête d'os est active.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"itIT": "La tua probabilità di critico aumenta del +20% mentre Tempesta d'Ossa è attiva.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"jaJP": "〈ボーン・ストーム〉の発動中、クリティカルヒット率が+20%増加する。\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"koKR": "뼈 폭풍이 활성화되어 있는 동안 자신의 극대화 확률이 +20% 증가합니다.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"plPL": "Twoja szansa na trafienie krytyczne zostaje zwiększona o +20%, kiedy aktywna jest Nawałnica Kości.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"ptBR": "Sua chance de acerto crítico é aumentada em +20% enquanto Tempestade de Ossos está ativa.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"ruRU": "Пока действует \"Буря костей\", ваша вероятность критического удара повышается на 20%.\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.",
			"zhCN": "白骨风暴激活时,你的暴击几率提高+20%。\n\nTags: Ultimate, Bone, Physical, Cooldown, Damage, Minion."
},
		id: 103,
		maxPoints: 1,
		x: -378.16,
		y: 507.51
	},
	"Golem Mastery": {
		connections: [ "Ultimate" ],
		description: `Increase the damage and Life of your Golem by x{15/30/45/60/75/90/105/120/135/150}%.

Tags: Life, Minion, Damage.`,
		nameLocalized: {
			"deDE": "Beherrschung von Golems",
			"esES": "Dominio de los gólems",
			"esMX": "Dominio de Gólem",
			"frFR": "Maîtrise des golems",
			"itIT": "Dominio dei Golem",
			"jaJP": "ゴーレム・マスター",
			"koKR": "골렘 숙련",
			"plPL": "Mistrzostwo Golemów",
			"ptBR": "Maestria do Golem",
			"ruRU": "Мастер големов",
			"zhCN": "傀儡精通"
},
		descriptionLocalized: {
			"deDE": "Erhöht Schaden und Leben Eures Golems um x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Life, Minion, Damage.",
			"esES": "Aumenta un x{15/30/45/60/75/90/105/120/135/150}% el daño y la vida de tu gólem.\n\nTags: Life, Minion, Damage.",
			"esMX": "Aumenta el daño y la vida de tu Gólem un x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Life, Minion, Damage.",
			"frFR": "Augmente les dégâts et les points de vie de votre golem de x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Life, Minion, Damage.",
			"itIT": "Aumenta i danni e la Vita del tuo Golem del x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Life, Minion, Damage.",
			"jaJP": "ゴーレムの与えるダメージとライフがx{15/30/45/60/75/90/105/120/135/150}%増加する。\n\nTags: Life, Minion, Damage.",
			"koKR": "골렘의 공격력과 생명력이 x{15/30/45/60/75/90/105/120/135/150}% 증가합니다.\n\nTags: Life, Minion, Damage.",
			"plPL": "Obrażenia zadawane przez twojego golema oraz jego zdrowie są zwiększone o x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Life, Minion, Damage.",
			"ptBR": "Aumenta o dano e a vida do seu golem em {15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Life, Minion, Damage.",
			"ruRU": "Наносимый урон и запас здоровья голема увеличиваются на x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Life, Minion, Damage.",
			"zhCN": "傀儡的伤害和生命提高x{15/30/45/60/75/90/105/120/135/150}%。\n\nTags: Life, Minion, Damage."
},
		id: 104,
		maxPoints: 3,
		x: -340.515,
		y: -223.78
	},
};

necromancerData["Key Passive"] = {
	"Ossified Essence": {
		connections: [ "Key Passive" ],
		description: `Your Bone Skills deal x1% increased damage for each point of Essence you have above 50 upon cast.

Tags: Damage, Essence, Bone.`,
		nameLocalized: {
			"deDE": "Knöcherne Essenz",
			"esES": "Esencia osificada",
			"esMX": "Esencia Osificada",
			"frFR": "Essence ossifiée",
			"itIT": "Essenza Ossea",
			"jaJP": "骨化した精髄",
			"koKR": "골화 정수",
			"plPL": "Skostniała Esencja",
			"ptBR": "Essência Calcificada",
			"ruRU": "Окостеневшая эссенция",
			"zhCN": "骨化精魂"
},
		descriptionLocalized: {
			"deDE": "Eure Knochenfertigkeiten verursachen x1% mehr Schaden für jeden Essenzpunkt über 50, den Ihr beim Wirken besitzt.\n\nTags: Damage, Essence, Bone.",
			"esES": "Tus habilidades de hueso infligen un x1% más de daño por cada punto de esencia que tengas por encima de 50 al lanzarlas.\n\nTags: Damage, Essence, Bone.",
			"esMX": "Tus habilidades de Hueso infligen un x1% más de daño por cada punto de Esencia que tengas por encima de 50 al lanzarlas.\n\nTags: Damage, Essence, Bone.",
			"frFR": "Vos compétences d'os infligent x1% de dégâts supplémentaires pour chaque point d'essence que vous avez au-dessus de 50 points lors de l'utilisation.\n\nTags: Damage, Essence, Bone.",
			"itIT": "Le tue abilità d'ossa infliggono il x1% di danni aggiuntivi per ogni punto di essenza oltre 50 che avevi al lancio dell'abilità.\n\nTags: Damage, Essence, Bone.",
			"jaJP": "骨スキルを使用した際に精髄の量が50を超える場合、上回っているポイントごとに与えるダメージがx1%増加する。\n\nTags: Damage, Essence, Bone.",
			"koKR": "뼈 기술을 시전할 때 보유한 정수가 50|1을;를; 초과하면, 초과한 정수 1당 공격력이 x1% 증가합니다.\n\nTags: Damage, Essence, Bone.",
			"plPL": "Twoje umiejętności Kości zadają obrażenia zwiększone o x1% za każdy punkt esencji powyżej 50 posiadany w momencie użycia umiejętności.\n\nTags: Damage, Essence, Bone.",
			"ptBR": "Suas habilidades de Osso causam 1% de dano aumentado por cada ponto de essência que você tiver acima de 50 ao lançar.\n\nTags: Damage, Essence, Bone.",
			"ruRU": "Ваши навыки костей наносят на x1% больше урона за каждую единицу эссенции, превышающую объем в 50 ед. на момент применения навыка.\n\nTags: Damage, Essence, Bone.",
			"zhCN": "精魂高于50点时,每多出1点精魂,就会使你施放的白骨技能造成的伤害提高x1%。\n\nTags: Damage, Essence, Bone."
},
		id: 105,
		maxPoints: 1,
		x: -4.466,
		y: -320.48
	},
	"Shadowblight": {
		connections: [ "Key Passive" ],
		description: `Shadow Damage infects enemies with Shadowblight for 2 seconds. You and your minions deal x10% bonus damage to enemies with Shadowblight.

Every 10th time an enemy receives Shadow Damage from you or your Minions while they are affected by Shadowblight, they take additional 20% Shadow Damage.

Tags: Damage, Shadow, Minion.`,
		nameLocalized: {
			"deDE": "Schattenseuche",
			"esES": "Pestesombra",
			"esMX": "Infestación Umbría",
			"frFR": "Chancre d'ombre",
			"itIT": "Morbo d'Ombra",
			"jaJP": "シャドウブライト",
			"koKR": "그림자 마름병",
			"plPL": "Skaza Cienia",
			"ptBR": "Praga das Sombras",
			"ruRU": "Чума тьмы",
			"zhCN": "暗影凋零"
},
		descriptionLocalized: {
			"deDE": "Dunkelheitsfertigkeiten infizieren Gegner 2 Sek. lang mit Schattenseuche. Ihr und Eure Diener fügen Gegnern mit Schattenseuche x10% Bonusschaden zu.\n\nJedes 10. Mal, wenn ein von Schattenseuche betroffener Gegner durch Euch oder Eure Diener Schattenschaden erleidet, erleidet er zusätzlich 20% Schattenschaden.\n\nTags: Damage, Shadow, Minion.",
			"esES": "El daño de sombra infecta a los enemigos con Pestesombra durante 2 s. Tus esbirros y tú infligís un x10% de daño adicional a enemigos con Pestesombra.\n\nCada 10 veces que tus esbirros o tú le infligís daño de sombra a un enemigo mientras tiene Pestesombra, este sufre 20% más de daño de sombra.\n\nTags: Damage, Shadow, Minion.",
			"esMX": "El daño de sombra infecta a los enemigos con Infestación Umbría durante 2 segundos. Tú y tus esbirros infligen un x10% más de daño a enemigos afectados por Infestación Umbría.\n\nCada 10 instancias de daño de sombra que tú o tus esbirros inflijan a un enemigo afectado por Infestación Umbría, recibirá 20% de daño de sombra adicional.\n\nTags: Damage, Shadow, Minion.",
			"frFR": "Vos dégâts d'ombre infectent les adversaires avec Chancre d'ombre pendant 2 s. Vous et vos serviteurs infligez x10% de dégâts supplémentaires aux cibles affectées par Chancre d'ombre.\n\nToutes les 10 fois qu'une cible subit des dégâts d'ombre de votre part ou de celle de vos serviteurs alors qu'elle est affectée par Chancre d'ombre, elle subit 20% points de dégâts d'ombre supplémentaires.\n\nTags: Damage, Shadow, Minion.",
			"itIT": "I danni da ombra infettano i nemici con Morbo d'Ombra per 2 s. Tu e i tuoi servitori evocati infliggete il x10% di danni aggiuntivi ai nemici affetti da Morbo d'Ombra.\n\nOgni 10a volta che un nemico subisce danni da ombra da te o dai tuoi servitori mentre è affetto da Morbo d'Ombra, subisce 20% ulteriori danni da ombra.\n\nTags: Damage, Shadow, Minion.",
			"jaJP": "シャドウダメージが敵を2秒間、シャドウブライトに感染させる。シャドウブライト状態の敵に自身またはミニオンが与えるシャドウダメージがx10%増加する。\n\n自身またはミニオンがシャドウブライトを受けている敵にシャドウダメージを10回与えるたびに、追加で20%のシャドウダメージを与える。\n\nTags: Damage, Shadow, Minion.",
			"koKR": "암흑 피해가 적에게 2초 동안 그림자 마름병을 감염시킵니다. 그림자 마름병에 감염된 적에게 자신과 자신의 하수인이 주는 피해가 x10% 증가합니다.\n\n그림자 마름병에 감염된 적이 자신 또는 자신의 하수인으로부터 암흑 피해를 10번 받을 때마다 추가로 20%의 암흑 피해를 받습니다.\n\nTags: Damage, Shadow, Minion.",
			"plPL": "Obrażenia Cienia zarażają wrogów Skazą Cienia na 2 sek. Ty i twoje sługi zadajecie dodatkowe x10% obrażeń wrogom ze Skazą Cienia.\n\nKiedy wróg jest objęty działaniem Skazy Cienia, co 10 jego obrażenie Cienia od ciebie lub twoich sług powoduje u niego eksplozję zadającą 20% pkt. obrażeń Cienia.\n\nTags: Damage, Shadow, Minion.",
			"ptBR": "Dano de sombra infecta inimigos com Praga das Sombras por 2 segundos. Você e seus lacaios causam 10% de bônus de dano a inimigos com Praga das Sombras.\n\nA cada 10ª vez que um inimigo recebe dano de sombra de você ou dos seus lacaios enquanto afetado por Praga das Sombras, ele recebe 20% de dano de sombra adicional.\n\nTags: Damage, Shadow, Minion.",
			"ruRU": "Урон от темной магии заражает противников \"Чумой тьмы\" на 2 сек. Вы и ваши прислужники наносите на x10% больше урона противникам, на которых действует \"Чума тьмы\".\n\nПока противники заражены \"Чумой тьмы\", каждый 10-й удар с уроном от темной магии, совершенный вами или вашими прислужниками, наносит им еще 20% ед. урона от темной магии.\n\nTags: Damage, Shadow, Minion.",
			"zhCN": "暗影伤害使敌人感染暗影凋零,持续2秒。你和你的仆从对受暗影凋零影响的敌人造成的伤害提高x10%。\n\n受到暗影凋零影响的敌人每第10次受到来自你或你仆从的暗影伤害,就会额外受到20%点暗影伤害。\n\nTags: Damage, Shadow, Minion."
},
		id: 106,
		maxPoints: 1,
		x: -2.974,
		y: 344.505
	},
	"Rathma's Vigor": {
		connections: [ "Key Passive" ],
		description: `Increase your Maximum Life by x10%. After being Healthy for 15 seconds, your next Blood Skill Overpowers.

Tags: Healthy, Overpower, Life, Blood.`,
		nameLocalized: {
			"deDE": "Rathmas Kraft",
			"esES": "Vigor de Rathma",
			"esMX": "Vigor de Rathma",
			"frFR": "Vigueur de Rathma",
			"itIT": "Vigore di Rathma",
			"jaJP": "ラズマの活力",
			"koKR": "라트마의 원기",
			"plPL": "Wigor Rathmy",
			"ptBR": "Vigor de Rathma",
			"ruRU": "Бодрость Ратмы",
			"zhCN": "拉斯玛的活力"
},
		descriptionLocalized: {
			"deDE": "Erhöht Euer maximales Leben um x10%. Wenn Ihr 15 Sek. lang gesund gewesen seid, überwältigt Eure nächste Blutfertigkeit.\n\nTags: Healthy, Overpower, Life, Blood.",
			"esES": "Tu vida máxima aumenta un x10%. Tras mantenerte saludable durante 15 s, tu siguiente habilidad de sangre arrolla.\n\nTags: Healthy, Overpower, Life, Blood.",
			"esMX": "Aumenta tu vida máxima un x10%. Luego de permanecer saludable durante 15 segundos, tu siguiente habilidad de Sangre abruma.\n\nTags: Healthy, Overpower, Life, Blood.",
			"frFR": "Augmente votre maximum de points de vie de x10%. Après avoir passé 15 s en bonne santé, votre prochaine compétence de sang accable les adversaires.\n\nTags: Healthy, Overpower, Life, Blood.",
			"itIT": "Aumenta la tua Vita massima del x10%. Dopo essere rimasto in salute per 15 s, la tua abilità del sangue attiva Sopraffazione.\n\nTags: Healthy, Overpower, Life, Blood.",
			"jaJP": "ライフ最大値がx10%増加する。15秒間、健全状態でいると、次に使用する血のスキルがオーバーパワーになる。\n\nTags: Healthy, Overpower, Life, Blood.",
			"koKR": "최대 생명력이 x10% 증가합니다. 15초 동안 건강 상태가 유지된 후, 다음 피 기술이 제압합니다.\n\nTags: Healthy, Overpower, Life, Blood.",
			"plPL": "Twoje maksymalne zdrowie jest zwiększone o x10%. Jeśli jesteś w pełni sił przez 15 sek., twoja następna umiejętność Krwi przytłacza.\n\nTags: Healthy, Overpower, Life, Blood.",
			"ptBR": "Aumenta sua vida máxima em 10%. Depois de ficar saudável por 15 segundos, sua próxima habilidade de Sangue desfere um Golpe Brutal.\n\nTags: Healthy, Overpower, Life, Blood.",
			"ruRU": "Ваш максимальный запас здоровья увеличивается на 10%. Если высокий уровень здоровья сохраняется в течение 15 сек., следующее умение крови наносит подавляющий урон.\n\nTags: Healthy, Overpower, Life, Blood.",
			"zhCN": "你的生命上限提高x10%。保持健康状态15秒后,你的下一个鲜血技能造成压制。\n\nTags: Healthy, Overpower, Life, Blood."
},
		id: 107,
		maxPoints: 1,
		x: 659.499,
		y: -0.755
	},
	"Kalan's Edict": {
		connections: [ "Key Passive" ],
		description: `After you have not taken damage in the last 3 seconds, your Minions gain +15% Attack Speed. While you have at least 7 Minions, this bonus is doubled.

Tags: Attack Speed, Minion.`,
		nameLocalized: {
			"deDE": "Kalans Edikt",
			"esES": "Edicto de Kalan",
			"esMX": "Edicto de Kalan",
			"frFR": "Décret de Kalan",
			"itIT": "Editto di Kalan",
			"jaJP": "カランの布告",
			"koKR": "칼란의 칙령",
			"plPL": "Edykt Kalana",
			"ptBR": "Decreto de Kalan",
			"ruRU": "Эдикт Калана",
			"zhCN": "卡兰的法令"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr in den letzten 3 Sek. keinen Schaden erlitten habt, erhalten Eure Diener +15% Angriffsgeschwindigkeit. Wenn Ihr über mindestens 7 Diener verfügt, verdoppelt sich dieser Bonus.\n\nTags: Attack Speed, Minion.",
			"esES": "Tras no haber sufrido daño en los últimos 3 s, tus esbirros obtienen un +15% de velocidad de ataque. Mientras tengas al menos 7 esbirros, este bonus se duplica.\n\nTags: Attack Speed, Minion.",
			"esMX": "Después de no recibir daño durante 3 segundos, tus esbirros obtienen un +15% de velocidad de ataque. Mientras tengas al menos 7 esbirros, esta bonificación se duplica.\n\nTags: Attack Speed, Minion.",
			"frFR": "Si vous n'avez subi aucun dégât dans les 3 dernières secondes, la vitesse d'attaque de vos serviteurs est augmentée de +15%. Ce bonus est doublé tant que vous avez au moins 7 serviteurs.\n\nTags: Attack Speed, Minion.",
			"itIT": "Se non subisci danni per 3 s, la velocità d'attacco dei tuoi servitori aumenta del +15%. Finché hai almeno 7 servitori il bonus raddoppia.\n\nTags: Attack Speed, Minion.",
			"jaJP": "自身が3秒間ダメージを受けずにいると、ミニオンの攻撃速度が+15%増加する。7体以上のミニオンを使役していると、このボーナスは2倍になる。\n\nTags: Attack Speed, Minion.",
			"koKR": "3초 동안 피해를 받지 않으면 하수인의 공격 속도가 +15% 증가합니다. 하수인이 7마리 이상 있을 때는 효과가 2배로 증가합니다.\n\nTags: Attack Speed, Minion.",
			"plPL": "Jeśli nie zadano ci obrażeń w ciągu ostatnich 3 sek., twoje sługi zyskują +15% do szybkości ataku. Jeśli liczba twoich sług wynosi co najmniej 7, premia zostaje podwojona.\n\nTags: Attack Speed, Minion.",
			"ptBR": "Depois de você não receber dano nos últimos 3 segundos, seus lacaios recebem +15% de velocidade de ataque. Enquanto você tiver pelo menos 7 lacaios, esse bônus é dobrado.\n\nTags: Attack Speed, Minion.",
			"ruRU": "Если вы не получаете урон в течение 3 сек., скорость атаки ваших прислужников повышается на +15%. Бонус удваивается, если у вас есть хотя бы 7 прислужника:прислужников.\n\nTags: Attack Speed, Minion.",
			"zhCN": "在3秒内没有受到伤害后,你仆从的攻击速度提高+15%。当你至少有7个仆从时,该加成翻倍。\n\nTags: Attack Speed, Minion."
},
		id: 130,
		maxPoints: 1,
		x: -685.026,
		y: -1.45
	},
};

necromancerData["Book of the Dead"] = {
	"Skeletal Warriors": {
		description: `Raise a Skeleton from a Corpse to fight for you.

Once all of your Skeletons have been summoned, Raise Skeleton briefly summons a Skeletal Priest to empower your Minions for 5 seconds, increasing their damage by 20% and healing them for 10% of their Maximum Life.`,
		name: `Raise Skeleton`,
		"Skeletal Skirmishers": {
			description: `Sword-wielding damage dealers that deal 30% increased damage but have 15% reduced Life.`,
			id: 110,
			sacrifice: `Your Critical Strike Chance is increased by +5%, but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`You can raise one additional Skirmisher Warrior.`,
				`Each time you Critically Strike, your Skirmishers Warriors' next attack Critically Strikes and deals x50% bonus Critical Strike damage. Can only happen every 3 seconds.`
			]
		},
		"Skeletal Defenders": {
			description: `Durable shield-bearers with 15% increased Life.`,
			id: 111,
			sacrifice: `You gain 15% Non-Physical Resistance, but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`Every 8 seconds your Skeletal Defenders negate the next instance of Direct Damage they would take.`,
				`Increase the amount of Thorns that Defender Warriors inherit from you from 30% to 50%.`
			]
		},
		"Skeletal Reapers": {
			description: `Deals area damage with a slow and powerful scythe, and has a special wind-up attack, dealing heavy damage every 10 seconds.`,
			id: 112,
			sacrifice: `You deal x10% increased Shadow Damage, but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`Reaper attacks against enemies who are Immobilized, Slowed, Stunned, or Vulnerable reduce the cooldown of their powerful wind-up attack by 2 seconds.`,
				`Reapers have a 15% chance to carve the flesh off enemies, forming a Corpse.`
			]
		},
	},
	"Skeletal Mages": {
		description: `Raise a Skeleton from a Corpse to fight for you.

Once all of your Skeletons have been summoned, Raise Skeleton briefly summons a Skeletal Priest to empower your Minions for 5 seconds, increasing their damage by 20% and healing them for 10% of their Maximum Life.`,
		name: `Raise Skeleton`,
		"Shadow Mages": {
			description: `Deals moderate Shadow Damage.`,
			id: 113,
			sacrifice: `Your maximum Essence is increased by 15, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Shadow Mage attacks have a 10% chance to Stun for 2 seconds. This cannot happen on the same enemy more than once every 5 seconds.`,
				`Shadow Mages fire an additional shadow bolt every 6th attack.`
			]
		},
		"Cold Mages": {
			description: `Chills and Freezes enemies.`,
			id: 114,
			sacrifice: `You deal x15% increased damage to Vulnerable enemies, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Each time your Cold Mages damage enemies with their primary attack, you gain 2 Essence.`,
				`Enemies who are Frozen by or damaged while Frozen by your Cold Mages' primary attack are made Vulnerable for 3 seconds.`
			]
		},
		"Bone Mages": {
			description: `Uses its own bones as projectiles, dealing heavy damage for a Life cost.`,
			id: 115,
			sacrifice: `Your Overpower damage is increased by x30%, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Reduce the Life cost of your Bone Mages' attacks from 15% to 10%. After being alive for 5 seconds, Bone Mages deal x40% increased damage.`,
				`Each time a Bone Mage dies from its own attack, they leave behind a Corpse and Fortify you for 11% of your Base Life.`
			]
		},
	},
	"Golem": {
		description: `Passive: You are protected by a Golem with {#} Life that attacks for {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage.

When your Golem dies, it respawns after 20 seconds.`,
		name: `Golem`,
		"Bone Golem": {
			description: `Active: Your Golem becomes Unstoppable and Taunts Nearby enemies and takes 30% reduced damage for the next 6 seconds. This has a 16 second cooldown.`,
			id: 116,
			sacrifice: `You gain +10% increased Attack Speed, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Each time your Bone Golem takes up to 20% of its Maximum Life as damage, it sheds a Corpse.`,
				`Your Bone Golem gains 10% Maximum Life and the amount of Thorns they inherit from you is increased from 30% to 50%.`
			]
		},
		"Blood Golem": {
			description: `Active: Your Golem becomes Unstoppable and drains the blood of enemies in the area, dealing 40% damage and healing 4% of its Life for each enemy drained. Damage and healing received are tripled if only one enemy is drained. This has a 10 second cooldown.`,
			id: 117,
			sacrifice: `Your Maximum Life is increased by x10%, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Your Blood Golem absorbs 15% of damage you would take.`,
				`While Healthy, your Blood Golem gains 25% Damage Reduction and x50% increased damage.`
			]
		},
		"Iron Golem": {
			description: `Active: Command your Golem to go to the targeted area, they become Unstoppable and slam their fists into the ground, dealing 25% damage and Stunning surrounding enemies for 3 seconds. This has a 16 second cooldown.`,
			id: 118,
			sacrifice: `You deal x30% increased Critical Strike Damage, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Every 5th Iron Golem attack causes a shockwave, dealing 16% damage to the primary enemy and to enemies behind them.`,
				`Your Iron Golem's slam attack also makes enemies Vulnerable for 3 seconds.`
			]
		},
	},
};

export { necromancerData };