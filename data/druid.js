let druidData = {};

druidData["Trunk Data"] = {
	"Basic": {
		connections: [ "Spirit" ],
		x: 0,
		y: 0
	},
	"Spirit": {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: -1196.614,
		y: 616.14
	},
	"Defensive": {
		connections: [ "Companion" ],
		requiredPoints: 6,
		x: 506.001,
		y: 1514.89
	},
	"Companion": {
		connections: [ "Wrath" ],
		requiredPoints: 11,
		x: -1199.644,
		y: 2443.636
	},
	"Wrath": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 505.396,
		y: 3340.8
	},
	"Ultimate": {
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1204.559,
		y: 4247.91
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -12.662,
		y: 4864.15
	},
	"Spirit Boons": {
		x: 2500,
		y: 0
	},
};

druidData["Basic"] = {
	"Earth Spike": {
		connections: [ "Basic", "Enhanced Earth Spike" ],
		description: `Generate Spirit: 10
Lucky Hit Chance: 35%
Sunder the earth, impaling the first enemy hit for {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% damage.

Tags: Basic, Nature Magic, Earth, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Erdspieß",
			"esES": "Aguja de tierra",
			"esMX": "Púa Terrestre",
			"frFR": "Pointe de terre",
			"itIT": "Spuntone di Terra",
			"jaJP": "土の棘",
			"koKR": "대지의 쐐기",
			"plPL": "Ziemny Kolec",
			"ptBR": "Espeto Terreno",
			"ruRU": "Шип земли",
			"zhCN": "大地尖刺",
			"zhTW": "大地尖刺"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Geisteskraft: 10\nGlückstrefferchance: 35%\nSpaltet die Erde, durchbohrt den ersten getroffenen Gegner und verursacht {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% Schaden.\n\nTags: Basis, Naturmagie, Erde, Schaden, Geisteskraft, Physisch.",
			"esES": "Generación de espíritu: 10\nProbabilidad de golpe de suerte: 35%\nDestrozas la tierra y empalas al primer enemigo golpeado, que sufre {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% de daño.\n\nTags: Básica, Magia de la naturaleza, Tierra, Daño, Espíritu, Física.",
			"esMX": "Generación de Espíritu: 10\nProbabilidad de golpe afortunado: 35%\nRompes la tierra, empalas al primer enemigo golpeado y le infliges {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% de daño.\n\nTags: Básica, Magia de la naturaleza, Tierra, Daño, Espíritu, Física.",
			"frFR": "Esprit généré: 10\nChances d'obtenir un coup de chance: 35%\nVous fissurez la terre et empalez la première cible touchée, ce qui lui inflige {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% points de dégâts.\n\nTags: Basique, Magie naturelle, Terre, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Generazione spirito: 10\nProbabilità di colpo fortunato: 35%\nSollevi la terra, impalando il primo nemico colpito e infliggendo {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% danni.\n\nTags: Base, Magia naturale, Terra, Danni, Spirito, Fisico.",
			"jaJP": "精神力回復量: 10\n幸運の一撃発生率: 35%\n大地を砕き、最初に命中した敵を貫いて{16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}%のダメージを与える。\n\nTags: 基本, 自然魔法, 地, ダメージ, 精神力, 物理.",
			"koKR": "생성: 영력 10\n행운의 적중 확률: 35%\n대지를 가르고 처음 적중한 적을 꿰뚫어 {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}%의 피해를 줍니다.\n\nTags: 기본, 자연 마법, 대지, 피해, 영력, 물리.",
			"plPL": "Generuje: 10 pkt. siły duchowej.\nSzansa na szczęśliwy traf: 35%\nRozdzierasz ziemię i przebijasz pierwszego trafionego wroga, zadając mu {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% pkt. obrażeń.\n\nTags: Podstawowe, Magia Natury, Ziemia, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Gerar Espírito: 10\nChance de Golpe de Sorte: 35%\nRompe a terra, empalando o primeiro inimigo atingido e causando {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% de dano.\n\nTags: Básica, Magia da Natureza, Terra, Dano, Espírito, Física.",
			"ruRU": "Дает дух: 10 ед.\nВероятность удачного удара: 35%.\nЗемля раскалывается, пронзая первого пораженного противника и нанося ему {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% ед. урона.\n\nTags: Базовое, Силы природы, Земля, Урон, Дух, Физический урон.",
			"zhCN": "生成灵力: 10\n幸运一击几率: 35%\n击碎大地, 刺穿命中的第一名敌人, 造成 {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% 点伤害。\n\nTags: 基础, 自然魔法, 大地, 伤害, 灵力, 物理.",
			"zhTW": "產生靈力:10\n幸運觸發機率:35%\n改變地貌,刺穿第一個被擊中的敵人,造成 {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% 點傷害。\n\nTags: 基本, 自然魔法, 大地, 傷害, 靈力, 物理."
},
		id: 162,
		maxPoints: 5,
		x: -409.637,
		y: -122.635
	},
	"Enhanced Earth Spike": {
		baseSkill: "Earth Spike",
		connections: [ "Earth Spike", "Wild Earth Spike", "Fierce Earth Spike" ],
		description: `Earth Spike has a 10% chance to Stun for 2.5 seconds.

Tags: Basic, Nature Magic, Earth, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Erdspieß",
			"esES": "Aguja de tierra mejorada",
			"esMX": "Púa Terrestre Potenciada",
			"frFR": "Pointe de terre renforcée",
			"itIT": "Spuntone di Terra Rinforzato",
			"jaJP": "土の棘(強化版)",
			"koKR": "강화된 대지의 쐐기",
			"plPL": "Wzmocniony Ziemny Kolec",
			"ptBR": "Espeto Terreno Aperfeiçoado",
			"ruRU": "Усиленный шип земли",
			"zhCN": "强化大地尖刺",
			"zhTW": "強化大地尖刺"
},
		descriptionLocalized: {
			"deDE": "Erdspieß verfügt über eine Chance von 10%, 2.5 Sek. lang zu betäuben.\n\nTags: Basis, Naturmagie, Erde, Schaden, Geisteskraft, Physisch.",
			"esES": "Aguja de tierra tiene una probabilidad de un 10% de aturdir durante 2.5 s.\n\nTags: Básica, Magia de la naturaleza, Tierra, Daño, Espíritu, Física.",
			"esMX": "Púa Terrestre tiene un 10% de probabilidad de aturdir durante 2.5 segundos.\n\nTags: Básica, Magia de la naturaleza, Tierra, Daño, Espíritu, Física.",
			"frFR": "Pointe de terre a 10% de chances d'étourdir pendant 2.5 s.\n\nTags: Basique, Magie naturelle, Terre, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Spuntone di Terra ha il 10% di probabilità di stordire per 2.5 s.\n\nTags: Base, Magia naturale, Terra, Danni, Spirito, Fisico.",
			"jaJP": "〈土の棘〉が10%の確率で2.5秒間スタンさせる。\n\nTags: 基本, 自然魔法, 地, ダメージ, 精神力, 物理.",
			"koKR": "대지의 쐐기가 10% 확률로 대상을 2.5초 동안 기절시킵니다.\n\nTags: 기본, 자연 마법, 대지, 피해, 영력, 물리.",
			"plPL": "Istnieje 10% szans na to, że Ziemny Kolec ogłuszy wrogów na 2.5 sek.\n\nTags: Podstawowe, Magia Natury, Ziemia, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Espeto Terreno tem 10% de chance de atordoar por 2.5 segundos.\n\nTags: Básica, Magia da Natureza, Terra, Dano, Espírito, Física.",
			"ruRU": "\"Шип земли\" с вероятностью 10% оглушает цели на 2.5 сек.\n\nTags: Базовое, Силы природы, Земля, Урон, Дух, Физический урон.",
			"zhCN": "大地尖刺有 10% 几率使敌人昏迷 2.5 秒。\n\nTags: 基础, 自然魔法, 大地, 伤害, 灵力, 物理.",
			"zhTW": "大地尖刺有 10% 機率擊昏目標,持續 2.5 秒。\n\nTags: 基本, 自然魔法, 大地, 傷害, 靈力, 物理."
},
		id: 163,
		maxPoints: 1,
		x: -718.25,
		y: -217.87
	},
	"Wild Earth Spike": {
		baseSkill: "Earth Spike",
		connections: [ "Enhanced Earth Spike" ],
		description: `Summon a second Earth Spike when hitting an Immobilized or Stunned enemy.

Tags: Basic, Nature Magic, Earth, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Wilder Erdspieß",
			"esES": "Aguja de tierra salvaje",
			"esMX": "Púa Terrestre Salvaje",
			"frFR": "Pointe de terre indomptable",
			"itIT": "Spuntone di Terra Sfrenato",
			"jaJP": "土の棘(野生)",
			"koKR": "억센 대지의 쐐기",
			"plPL": "Dziki Ziemny Kolec",
			"ptBR": "Espeto Terreno Selvagem",
			"ruRU": "Дикий шип земли",
			"zhCN": "狂野大地尖刺",
			"zhTW": "狂野大地尖刺"
},
		descriptionLocalized: {
			"deDE": "Beschwört einen zweiten Erdspieß, wenn ein bewegungsunfähiger oder betäubter Gegner getroffen wird.\n\nTags: Basis, Naturmagie, Erde, Schaden, Geisteskraft, Physisch.",
			"esES": "Invocas una segunda Aguja de tierra cuando golpeas a un enemigo inmovilizado o aturdido.\n\nTags: Básica, Magia de la naturaleza, Tierra, Daño, Espíritu, Física.",
			"esMX": "Invoca una segunda Púa Terrestre al golpear a un enemigo inmovilizado o aturdido.\n\nTags: Básica, Magia de la naturaleza, Tierra, Daño, Espíritu, Física.",
			"frFR": "Vous invoquez une deuxième Pointe de terre lorsque vous touchez une cible immobilisée ou étourdie.\n\nTags: Basique, Magie naturelle, Terre, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Evochi un secondo Spuntone di Terra colpendo un nemico immobilizzato o stordito.\n\nTags: Base, Magia naturale, Terra, Danni, Spirito, Fisico.",
			"jaJP": "移動不能かスタン状態の敵に〈土の棘〉を命中させると、2本目を呼び出す。\n\nTags: 基本, 自然魔法, 地, ダメージ, 精神力, 物理.",
			"koKR": "이동 불가 또는 기절 상태의 적에게 공격을 적중시키면 두 번째 대지의 쐐기가 생성됩니다.\n\nTags: 기본, 자연 마법, 대지, 피해, 영력, 물리.",
			"plPL": "Przywołujesz drugi Ziemny Kolec, kiedy trafisz unieruchomionego lub ogłuszonego wroga.\n\nTags: Podstawowe, Magia Natury, Ziemia, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Evoca um segundo Espeto Terreno ao atingir um inimigo imobilizado ou atordoado.\n\nTags: Básica, Magia da Natureza, Terra, Dano, Espírito, Física.",
			"ruRU": "Поражая обездвиженного или оглушенного противника, вы создаете второй шип земли.\n\nTags: Базовое, Силы природы, Земля, Урон, Дух, Физический урон.",
			"zhCN": "命中一名定身或昏迷的敌人时额外召唤一根大地尖刺。\n\nTags: 基础, 自然魔法, 大地, 伤害, 灵力, 物理.",
			"zhTW": "擊中定身或昏迷的敵人時,召喚第二個大地尖刺。\n\nTags: 基本, 自然魔法, 大地, 傷害, 靈力, 物理."
},
		id: 164,
		maxPoints: 1,
		x: -741.72,
		y: -341.93
	},
	"Fierce Earth Spike": {
		baseSkill: "Earth Spike",
		connections: [ "Enhanced Earth Spike" ],
		description: `Fortify for 4% of your Base Life whenever Earth Spike damages enemies who are Stunned, Immobilized, or Knocked Back.

Tags: Basic, Nature Magic, Earth, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Grimmiger Erdspieß",
			"esES": "Aguja de tierra fiera",
			"esMX": "Púa Terrestre Feroz",
			"frFR": "Pointe de terre féroce",
			"itIT": "Spuntone di Terra Bestiale",
			"jaJP": "土の棘(苛烈)",
			"koKR": "사나운 대지의 쐐기",
			"plPL": "Zaciekły Ziemny Kolec",
			"ptBR": "Espeto Terreno Feroz",
			"ruRU": "Разрушительный шип земли",
			"zhCN": "凶暴大地尖刺",
			"zhTW": "兇狠大地尖刺"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet jedes Mal 4% Eures Basislebens als Stählung, wenn Erdspieß betäubten, bewegungsunfähigen oder zurückgestoßenen Gegnern Schaden zufügt.\n\nTags: Basis, Naturmagie, Erde, Schaden, Geisteskraft, Physisch.",
			"esES": "Fortificas un 4% de tu vida base cada vez que Aguja de tierra inflige daño a enemigos aturdidos, inmovilizados o repelidos.\n\nTags: Básica, Magia de la naturaleza, Tierra, Daño, Espíritu, Física.",
			"esMX": "Te fortificas con un 4% de tu vida de base cuando Púa Terrestre inflige daño a los enemigos aturdidos, inmovilizados o repelidos.\n\nTags: Básica, Magia de la naturaleza, Tierra, Daño, Espíritu, Física.",
			"frFR": "Vous obtenez un montant de fortification égal à 4% de vos points de vie de base chaque fois que Pointe de terre inflige des dégâts à des cibles étourdies, immobilisées ou repoussées.\n\nTags: Basique, Magie naturelle, Terre, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Ottieni Fortificazione per il 4% della tua Vita base quando Spuntone di Terra infligge danni a nemici storditi, immobilizzati o respinti.\n\nTags: Base, Magia naturale, Terra, Danni, Spirito, Fisico.",
			"jaJP": "スタン、移動不能、ノックバック状態の敵に〈土の棘〉でダメージを与えると、基本ライフの4%にあたるの強化を獲得する。\n\nTags: 基本, 自然魔法, 地, ダメージ, 精神力, 物理.",
			"koKR": "대지의 쐐기가 기절 또는 이동 불가 상태이거나 밀려난 적에게 피해를 줄 때마다 기본 생명력의 4%만큼 보강됩니다.\n\nTags: 기본, 자연 마법, 대지, 피해, 영력, 물리.",
			"plPL": "Otrzymujesz umocnienie równe 4% twojego podstawowego zdrowia za każdym razem, gdy Ziemny Kolec rani ogłuszonych, unieruchomionych lub odrzuconych wrogów.\n\nTags: Podstawowe, Magia Natury, Ziemia, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Fortifica em 4% da sua vida básica sempre que Espeto Terreno causar dano a inimigos atordoados, imobilizados ou repelidos.\n\nTags: Básica, Magia da Natureza, Terra, Dano, Espírito, Física.",
			"ruRU": "Когда \"Шип земли\" поражает оглушенного, обездвиженного или отброшенного противника, вы получаете укрепление в объеме 4% базового запаса здоровья.\n\nTags: Базовое, Силы природы, Земля, Урон, Дух, Физический урон.",
			"zhCN": "大地尖刺对被击晕、定身或击退的敌人造成伤害时可以强固你 4% 基础生命。\n\nTags: 基础, 自然魔法, 大地, 伤害, 灵力, 物理.",
			"zhTW": "每當大地尖刺對被擊昏、定身或擊退的敵人造成傷害時,賦予你相當於 4% 基礎生命值的強韌。\n\nTags: 基本, 自然魔法, 大地, 傷害, 靈力, 物理."
},
		id: 165,
		maxPoints: 1,
		x: -948.965,
		y: -208.475
	},
	"Maul": {
		connections: [ "Basic", "Enhanced Maul" ],
		description: `Generate Spirit: 14
Lucky Hit Chance: 30%
Shapeshift into a Werebear and maul enemies in front of you, dealing {20/22/24/26/28/30/32/34/36/38}% damage.

Tags: Basic, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Anfallen",
			"esES": "Vapulear",
			"esMX": "Vapulear",
			"frFR": "Mutilation",
			"itIT": "Graffiata",
			"jaJP": "爪撃",
			"koKR": "할퀴기",
			"plPL": "Poturbowanie",
			"ptBR": "Dilacerar",
			"ruRU": "Трепка",
			"zhCN": "重殴",
			"zhTW": "槌擊"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Geisteskraft: 14\nGlückstrefferchance: 30%\nVerwandelt Euch in einen Werbären und fallt Gegner vor Euch an, wodurch Ihr {20/22/24/26/28/30/32/34/36/38}% Schaden verursacht.\n\nTags: Basis, Gestaltwandeln, Werbär, Geisteskraft, Schaden, Physisch.",
			"esES": "Generación de espíritu: 14\nProbabilidad de golpe de suerte: 30%\nTe transformas en hombre oso y vapuleas a los enemigos frente a ti para infligirles {20/22/24/26/28/30/32/34/36/38}% de daño.\n\nTags: Básica, Cambio de forma, Hombre oso, Espíritu, Daño, Física.",
			"esMX": "Generación de Espíritu: 14\nProbabilidad de golpe afortunado: 30%\nCambias de forma a un hombre oso, vapuleas a los enemigos que están frente a ti y les infliges {20/22/24/26/28/30/32/34/36/38}% de daño.\n\nTags: Básica, Metamorfosis, Hombre oso, Espíritu, Daño, Física.",
			"frFR": "Esprit généré: 14\nChances d'obtenir un coup de chance: 30%\nVous vous transformez en ursoïde et mutilez les adversaires devant vous, leur infligeant {20/22/24/26/28/30/32/34/36/38}% points de dégâts.\n\nTags: Basique, Métamorphose, Ursoïde, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Generazione spirito: 14\nProbabilità di colpo fortunato: 30%\nMuti in un Orso Mannaro e graffi i nemici frontali, infliggendo {20/22/24/26/28/30/32/34/36/38}% danni.\n\nTags: Base, Mutaforma, Orso Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "精神力回復量: 14\n幸運の一撃発生率: 30%\n人熊に変身して前方の敵を爪で切り裂き、{20/22/24/26/28/30/32/34/36/38}%のダメージを与える。\n\nTags: 基本, 変身, 人熊, 精神力, ダメージ, 物理.",
			"koKR": "생성: 영력 14\n행운의 적중 확률: 30%\n곰인간으로 변신하고 전방의 적을 후려쳐 {20/22/24/26/28/30/32/34/36/38}%의 피해를 줍니다.\n\nTags: 기본, 변신, 곰인간, 영력, 피해, 물리.",
			"plPL": "Generuje: 14 pkt. siły duchowej.\nSzansa na szczęśliwy traf: 30%\nPrzemieniasz się w niedźwiedziołaka i turbujesz pobliskich wrogów, zadając im {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń.\n\nTags: Podstawowe, Zmiennokształtność, Niedźwiedziołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Gerar Espírito: 14\nChance de Golpe de Sorte: 30%\nTransforma-se em um urso e ataca inimigos à sua frente, causando {20/22/24/26/28/30/32/34/36/38}% de dano.\n\nTags: Básica, Metamorfose, Urso, Espírito, Dano, Física.",
			"ruRU": "Дает дух: 14 ед.\nВероятность удачного удара: 30%.\nВы принимаете облик медведя и терзаете противников перед собой, нанося {20/22/24/26/28/30/32/34/36/38}% ед. урона.\n\nTags: Базовое, Смена облика, Медведь, Дух, Урон, Физический урон.",
			"zhCN": "生成灵力: 14\n幸运一击几率: 30%\n变成熊人并重殴面前的敌人, 造成 {20/22/24/26/28/30/32/34/36/38}% 点伤害。\n\nTags: 基础, 变形, 熊人, 灵力, 伤害, 物理.",
			"zhTW": "產生靈力:14\n幸運觸發機率:30%\n變身為熊人,槌擊你前方的敵人,造成 {20/22/24/26/28/30/32/34/36/38}% 點傷害。\n\nTags: 基本, 變形, 熊人, 靈力, 傷害, 物理."
},
		id: 4,
		maxPoints: 5,
		x: 376.573,
		y: 153.87
	},
	"Enhanced Maul": {
		baseSkill: "Maul",
		connections: [ "Maul", "Wild Maul", "Fierce Maul" ],
		description: `If an enemy is hit by Maul, then Fortify for 2% of your Base Life.

Tags: Basic, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbessertes Anfallen",
			"esES": "Vapulear mejorado",
			"esMX": "Vapuleo Potenciado",
			"frFR": "Mutilation renforcée",
			"itIT": "Graffiata Rinforzata",
			"jaJP": "爪撃(強化版)",
			"koKR": "강화된 할퀴기",
			"plPL": "Wzmocnione Poturbowanie",
			"ptBR": "Dilacerar Aperfeiçoado",
			"ruRU": "Усиленная трепка",
			"zhCN": "强化重殴",
			"zhTW": "強化槌擊"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Gegner von Anfallen getroffen wird, erhaltet Ihr Stählung in Höhe von 2% Eures Basislebens.\n\nTags: Basis, Gestaltwandeln, Werbär, Geisteskraft, Schaden, Physisch.",
			"esES": "Si Vapulear golpea a un enemigo, fortificas un 2% de tu vida base.\n\nTags: Básica, Cambio de forma, Hombre oso, Espíritu, Daño, Física.",
			"esMX": "Si golpeas a un enemigo con Vapulear, te fortificarás con un 2% de tu vida de base.\n\nTags: Básica, Metamorfosis, Hombre oso, Espíritu, Daño, Física.",
			"frFR": "Lorsqu'une cible est touchée par Mutilation, vous obtenez un montant de fortification égal à 2% de vos points de vie de base.\n\nTags: Basique, Métamorphose, Ursoïde, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Se un nemico viene colpito da Graffiata, fornisce Fortificazione per il 2% della tua Vita base.\n\nTags: Base, Mutaforma, Orso Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "〈爪撃〉が敵に命中すると、基本ライフの2%にあたるの強化を獲得する。\n\nTags: 基本, 変身, 人熊, 精神力, ダメージ, 物理.",
			"koKR": "적이 할퀴기에 적중당하면 기본 생명력의 2%만큼 보강됩니다.\n\nTags: 기본, 변신, 곰인간, 영력, 피해, 물리.",
			"plPL": "Jeśli wróg zostanie trafiony Poturbowaniem, zyskujesz umocnienie równe 2% twojego podstawowego zdrowia.\n\nTags: Podstawowe, Zmiennokształtność, Niedźwiedziołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Se um inimigo é atingido por Dilacerar, fortifica você em 2% da sua vida básica.\n\nTags: Básica, Metamorfose, Urso, Espírito, Dano, Física.",
			"ruRU": "Когда \"Трепка\" поражает противника, вы получаете укрепление в объеме 2% базового запаса здоровья.\n\nTags: Базовое, Смена облика, Медведь, Дух, Урон, Физический урон.",
			"zhCN": "如果重殴命中敌人, 则强固你 2% 基础生命。\n\nTags: 基础, 变形, 熊人, 灵力, 伤害, 物理.",
			"zhTW": "槌擊擊中敵人時,會賦予你相當於 2% 基礎生命值的強韌。\n\nTags: 基本, 變形, 熊人, 靈力, 傷害, 物理."
},
		id: 5,
		maxPoints: 1,
		x: 662.861,
		y: 275.905
	},
	"Wild Maul": {
		baseSkill: "Maul",
		connections: [ "Enhanced Maul" ],
		description: `Maul has a 20% chance to Knock Down enemies for 1.5 seconds.

Tags: Basic, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Wildes Anfallen",
			"esES": "Vapulear salvaje",
			"esMX": "Vapuleo Salvaje",
			"frFR": "Mutilation indomptable",
			"itIT": "Graffiata Sfrenata",
			"jaJP": "爪撃(野生)",
			"koKR": "억센 할퀴기",
			"plPL": "Dzikie Poturbowanie",
			"ptBR": "Dilacerar Selvagem",
			"ruRU": "Дикая трепка",
			"zhCN": "狂野重殴",
			"zhTW": "狂野槌擊"
},
		descriptionLocalized: {
			"deDE": "Anfallen verfügt über eine Chance von 20%, Gegner 1.5 Sek. lang niederzuschlagen.\n\nTags: Basis, Gestaltwandeln, Werbär, Geisteskraft, Schaden, Physisch.",
			"esES": "Vapulear tiene un 20% de probabilidad de derribar a los enemigos durante 1.5 s.\n\nTags: Básica, Cambio de forma, Hombre oso, Espíritu, Daño, Física.",
			"esMX": "Vapulear tiene un 20% de probabilidad de derribar a los enemigos durante 1.5 segundos.\n\nTags: Básica, Metamorfosis, Hombre oso, Espíritu, Daño, Física.",
			"frFR": "Mutilation a 20% de chances de renverser les cibles pendant 1.5 s.\n\nTags: Basique, Métamorphose, Ursoïde, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Graffiata ha una probabilità del 20% di far cadere i nemici per 1.5 s.\n\nTags: Base, Mutaforma, Orso Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "20%の確率で、〈爪撃〉が敵を1.5秒間ノックダウン状態にする。\n\nTags: 基本, 変身, 人熊, 精神力, ダメージ, 物理.",
			"koKR": "할퀴기가 20% 확률로 적을 1.5초 동안 쓰러뜨립니다.\n\nTags: 기본, 변신, 곰인간, 영력, 피해, 물리.",
			"plPL": "Istnieje 20% szans na to, że Poturbowanie powali wrogów na 1.5 sek.\n\nTags: Podstawowe, Zmiennokształtność, Niedźwiedziołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Dilacerar tem 20% de chance de nocautear inimigos por 1.5 segundos.\n\nTags: Básica, Metamorfose, Urso, Espírito, Dano, Física.",
			"ruRU": "\"Трепка\" с вероятностью 20% сбивает противников с ног на 1.5 сек.\n\nTags: Базовое, Смена облика, Медведь, Дух, Урон, Физический урон.",
			"zhCN": "重殴有 20% 几率击倒敌人, 持续 1.5 秒。\n\nTags: 基础, 变形, 熊人, 灵力, 伤害, 物理.",
			"zhTW": "槌擊有 20% 機率擊倒敵人,持續 1.5 秒。\n\nTags: 基本, 變形, 熊人, 靈力, 傷害, 物理."
},
		id: 6,
		maxPoints: 1,
		x: 693.195,
		y: 399.79
	},
	"Fierce Maul": {
		baseSkill: "Maul",
		connections: [ "Enhanced Maul" ],
		description: `Increases the range and radius of Maul by 25%.

Tags: Basic, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Grimmiges Anfallen",
			"esES": "Vapulear fiero",
			"esMX": "Vapuleo Feroz",
			"frFR": "Mutilation féroce",
			"itIT": "Graffiata Bestiale",
			"jaJP": "爪撃(苛烈)",
			"koKR": "사나운 할퀴기",
			"plPL": "Zaciekłe Poturbowanie",
			"ptBR": "Dilacerar Feroz",
			"ruRU": "Разрушительная трепка",
			"zhCN": "凶暴重殴",
			"zhTW": "兇狠槌擊"
},
		descriptionLocalized: {
			"deDE": "Erhöht die Reichweite und den Radius von Anfallen um 25%.\n\nTags: Basis, Gestaltwandeln, Werbär, Geisteskraft, Schaden, Physisch.",
			"esES": "Aumenta un 25% el alcance y el radio de Vapulear.\n\nTags: Básica, Cambio de forma, Hombre oso, Espíritu, Daño, Física.",
			"esMX": "Aumenta el alcance y el radio de Vapulear un 25%.\n\nTags: Básica, Metamorfosis, Hombre oso, Espíritu, Daño, Física.",
			"frFR": "Augmente la portée et le périmètre de Mutilation de 25%.\n\nTags: Basique, Métamorphose, Ursoïde, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Aumenta la portata e il raggio di Graffiata del 25%.\n\nTags: Base, Mutaforma, Orso Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "〈爪撃〉の射程と範囲が25%増加する。\n\nTags: 基本, 変身, 人熊, 精神力, ダメージ, 物理.",
			"koKR": "할퀴기의 범위와 반경이 25% 증가합니다.\n\nTags: 기본, 변신, 곰인간, 영력, 피해, 물리.",
			"plPL": "Zasięg i promień Poturbowania jest zwiększony o 25%.\n\nTags: Podstawowe, Zmiennokształtność, Niedźwiedziołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Aumenta o alcance e o raio de Dilacerar em 25%.\n\nTags: Básica, Metamorfose, Urso, Espírito, Dano, Física.",
			"ruRU": "Увеличивает дальность действия и радиус \"Трепки\" на 25%.\n\nTags: Базовое, Смена облика, Медведь, Дух, Урон, Физический урон.",
			"zhCN": "重殴的范围和半径提高 25%。\n\nTags: 基础, 变形, 熊人, 灵力, 伤害, 物理.",
			"zhTW": "槌擊的距離和半徑提高 25%。\n\nTags: 基本, 變形, 熊人, 靈力, 傷害, 物理."
},
		id: 7,
		maxPoints: 1,
		x: 902.52,
		y: 279.665
	},
	"Wind Shear": {
		connections: [ "Basic", "Enhanced Wind Shear" ],
		description: `Generate Spirit: 12
Lucky Hit Chance: 20%
Conjure a piercing blade of wind, dealing {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% damage.

Tags: Basic, Nature Magic, Storm, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Windschere",
			"esES": "Cortante de viento",
			"esMX": "Viento Penetrante",
			"frFR": "Vent cisaillant",
			"itIT": "Folata Travolgente",
			"jaJP": "風の刃",
			"koKR": "바람 칼날",
			"plPL": "Kąsający Wicher",
			"ptBR": "Corte de Vento",
			"ruRU": "Ветрорез",
			"zhCN": "风剪",
			"zhTW": "削風剪"
},
		descriptionLocalized: {
			"deDE": "Erzeugt Geisteskraft 12\nGlückstrefferchance: 20%\nBeschwört eine durchschlagende Windklinge, die {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% Schaden verursacht.\n\nTags: Basis, Naturmagie, Sturm, Schaden, Geisteskraft, Physisch.",
			"esES": "Generación de espíritu: 12\nProbabilidad de golpe de suerte: 20%\nGeneras una hoja de viento perforadora que inflige {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% de daño.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Espíritu, Física.",
			"esMX": "Generación de Espíritu: 12\nProbabilidad de golpe afortunado: 20%\nConjuras una cuchilla de viento penetrante que inflige {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% de daño.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Espíritu, Física.",
			"frFR": "Esprit généré: 12\nChances d'obtenir un coup de chance: 20%\nVous invoquez une lame de vent perçante qui inflige {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% points de dégâts.\n\nTags: Basique, Magie naturelle, Tempête, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Generazione spirito: 12\nProbabilità di colpo fortunato: 20%\nInvochi una lama di vento perforante, infliggendo {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% danni.\n\nTags: Base, Magia naturale, Tempesta, Danni, Spirito, Fisico.",
			"jaJP": "精神力回復量: 12\n幸運の一撃発生率: 20%\n貫通力のある風の刃を呼び出し、{17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}%のダメージを与える。\n\nTags: 基本, 自然魔法, 嵐, ダメージ, 精神力, 物理.",
			"koKR": "생성: 영력 12\n행운의 적중 확률: 20%\n관통하는 바람의 칼날을 구현하여 {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}%의 피해를 줍니다.\n\nTags: 기본, 자연 마법, 폭풍, 피해, 영력, 물리.",
			"plPL": "Generuje: 12 pkt. siły duchowej\nSzansa na szczęśliwy traf: 20%\nPrzyzywasz przebijające ostrze wiatru, które zadaje {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% pkt. obrażeń.\n\nTags: Podstawowe, Magia Natury, Burza, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Gerar Espírito: 12\nChance de Golpe de Sorte: 20%\nConjura uma lâmina de vento perfurante, causando {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% de dano.\n\nTags: Básica, Magia da Natureza, Tempestade, Dano, Espírito, Física.",
			"ruRU": "Дает дух: 12 ед.\nВероятность удачного удара: 20%.\nВы создаете рассекающий поток ветра, наносящий {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% ед. урона.\n\nTags: Базовое, Силы природы, Буря, Урон, Дух, Физический урон.",
			"zhCN": "生成灵力: 12\n幸运一击几率: 20%\n召唤一道凛冽的风刃, 造成 {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% 点伤害。\n\nTags: 基础, 自然魔法, 风暴, 伤害, 灵力, 物理.",
			"zhTW": "產生靈力:12\n幸運觸發機率:20%\n呼喚一把銳利的風之刃,造成 {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% 點傷害。\n\nTags: 基本, 自然魔法, 風暴, 傷害, 靈力, 物理."
},
		id: 8,
		maxPoints: 5,
		x: -114.365,
		y: -239.92
	},
	"Enhanced Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Wind Shear", "Fierce Wind Shear", "Wild Wind Shear" ],
		description: `Wind Shear has a 20% chance to make enemies Vulnerable for 4 seconds.

Tags: Basic, Nature Magic, Storm, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserte Windschere",
			"esES": "Cortante de viento mejorado",
			"esMX": "Viento Penetrante Potenciado",
			"frFR": "Vent cisaillant renforcé",
			"itIT": "Folata Travolgente Rinforzata",
			"jaJP": "風の刃(強化版)",
			"koKR": "강화된 바람 칼날",
			"plPL": "Wzmocniony Kąsający Wicher",
			"ptBR": "Corte de Vento Aperfeiçoado",
			"ruRU": "Усиленный ветрорез",
			"zhCN": "强化风剪",
			"zhTW": "強化削風剪"
},
		descriptionLocalized: {
			"deDE": "Windschere verfügt über eine Chance von 20%, Gegner 4 Sek. lang verwundbar zu machen.\n\nTags: Basis, Naturmagie, Sturm, Schaden, Geisteskraft, Physisch.",
			"esES": "Cortante de viento tiene un 20% de probabilidad de volver vulnerables a los enemigos durante 4 s.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Espíritu, Física.",
			"esMX": "Viento Penetrante tiene un 20% de probabilidad de volver a los enemigos vulnerables durante 4 segundos.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Espíritu, Física.",
			"frFR": "Vent cisaillant a 20% de chances de rendre les adversaires vulnérables pendant 4 s.\n\nTags: Basique, Magie naturelle, Tempête, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Folata Travolgente ha una probabilità del 20% di rendere i nemici vulnerabili per 4 s.\n\nTags: Base, Magia naturale, Tempesta, Danni, Spirito, Fisico.",
			"jaJP": "〈風の刃〉が20%の確率で敵を4秒間、脆弱状態にする。\n\nTags: 基本, 自然魔法, 嵐, ダメージ, 精神力, 物理.",
			"koKR": "바람 칼날이 20% 확률로 적을 4초 동안 취약하게 만듭니다.\n\nTags: 기본, 자연 마법, 폭풍, 피해, 영력, 물리.",
			"plPL": "Kąsający Wicher ma 20% szans na odsłonięcie wrogów na 4 sek.\n\nTags: Podstawowe, Magia Natury, Burza, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Corte de Vento tem 20% de chance de tornar os inimigos vulneráveis por 4 segundos.\n\nTags: Básica, Magia da Natureza, Tempestade, Dano, Espírito, Física.",
			"ruRU": "\"Ветрорез\" с вероятностью 20% делает противников уязвимыми на 4 сек.\n\nTags: Базовое, Силы природы, Буря, Урон, Дух, Физический урон.",
			"zhCN": "风剪有 20% 几率使敌人陷入易伤状态, 持续 4 秒。\n\nTags: 基础, 自然魔法, 风暴, 伤害, 灵力, 物理.",
			"zhTW": "削風剪有 20% 機率使敵人易傷,持續 4 秒。\n\nTags: 基本, 自然魔法, 風暴, 傷害, 靈力, 物理."
},
		id: 9,
		maxPoints: 1,
		x: -198.861,
		y: -426.135
	},
	"Fierce Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Enhanced Wind Shear" ],
		description: `Each enemy hit by Wind Shear increases your Movement Speed by +5% for 5 seconds, up to +20%.

Tags: Basic, Nature Magic, Storm, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Grimmige Windschere",
			"esES": "Cortante de viento fiero",
			"esMX": "Viento Penetrante Feroz",
			"frFR": "Vent cisaillant féroce",
			"itIT": "Folata Travolgente Bestiale",
			"jaJP": "風の刃(苛烈)",
			"koKR": "사나운 바람 칼날",
			"plPL": "Zaciekły Kąsający Wicher",
			"ptBR": "Corte de Vento Feroz",
			"ruRU": "Разрушительный ветрорез",
			"zhCN": "凶暴风剪",
			"zhTW": "兇狠削風剪"
},
		descriptionLocalized: {
			"deDE": "Mit jedem von Windschere getroffenen Gegner erhöht sich Eure Bewegungsgeschwindigkeit 5 Sek. lang um +5%, bis maximal +20%.\n\nTags: Basis, Naturmagie, Sturm, Schaden, Geisteskraft, Physisch.",
			"esES": "Cada enemigo golpeado por Cortante de viento aumenta tu velocidad de movimiento un +5% durante 5 s, hasta un máximo de un +20%.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Espíritu, Física.",
			"esMX": "Cada enemigo golpeado por Viento Penetrante aumenta tu velocidad de movimiento un +5% durante 5 segundos, hasta un máximo del +20%.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Espíritu, Física.",
			"frFR": "Chaque cible touchée par Vent cisaillant augmente votre vitesse de déplacement de +5% pendant 5 s, jusqu'à un maximum de +20%.\n\nTags: Basique, Magie naturelle, Tempête, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Ogni nemico colpito da Folata Travolgente aumenta la tua velocità di movimento del +5% per 5 s, fino a un massimo del +20%.\n\nTags: Base, Magia naturale, Tempesta, Danni, Spirito, Fisico.",
			"jaJP": "敵に〈風の刃〉が命中するごとに、自分の移動速度が5秒間+5%上昇する。上昇量は最大+20%。\n\nTags: 基本, 自然魔法, 嵐, ダメージ, 精神力, 物理.",
			"koKR": "바람 칼날이 적에게 적중할 때마다 이동 속도가 5초 동안 +5%만큼, 최대 +20%까지 증가합니다.\n\nTags: 기본, 자연 마법, 폭풍, 피해, 영력, 물리.",
			"plPL": "Za każdego wroga trafionego Kąsającym Wichrem zyskujesz premię +5% do szybkości ruchu na 5 sek., maksymalnie do +20%.\n\nTags: Podstawowe, Magia Natury, Burza, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Cada inimigo atingido por Corte de Vento aumenta sua velocidade de movimento em +5% por 5 segundos, até +20%.\n\nTags: Básica, Magia da Natureza, Tempestade, Dano, Espírito, Física.",
			"ruRU": "За каждого противника, пораженного \"Ветрорезом\", ваша скорость передвижения увеличивается на +5% на 5 сек. вплоть до +20%.\n\nTags: Базовое, Силы природы, Буря, Урон, Дух, Физический урон.",
			"zhCN": "风剪每命中一名敌人, 你的移动速度就会提高 +5%, 持续 5 秒, 最多提高 +20%。\n\nTags: 基础, 自然魔法, 风暴, 伤害, 灵力, 物理.",
			"zhTW": "削風剪每擊中一個敵人會使你的移動速度提高 +5%,持續 5 秒,最多提高至 +20%。\n\nTags: 基本, 自然魔法, 風暴, 傷害, 靈力, 物理."
},
		id: 10,
		maxPoints: 1,
		x: -396.793,
		y: -516.16
	},
	"Wild Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Enhanced Wind Shear" ],
		description: `Wind Shear grants 3 additional Spirit for each enemy hit beyond the first.

Tags: Basic, Nature Magic, Storm, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Wilde Windschere",
			"esES": "Cortante de viento salvaje",
			"esMX": "Viento Penetrante Salvaje",
			"frFR": "Vent cisaillant indomptable",
			"itIT": "Folata Travolgente Sfrenata",
			"jaJP": "風の刃(野生)",
			"koKR": "억센 바람 칼날",
			"plPL": "Dziki Kąsający Wicher",
			"ptBR": "Corte de Vento Selvagem",
			"ruRU": "Дикий ветрорез",
			"zhCN": "狂野风剪",
			"zhTW": "狂野削風剪"
},
		descriptionLocalized: {
			"deDE": "Windschere verleiht 3 zusätzliche Geisteskraft für jeden weiteren getroffenen Gegner nach dem ersten.\n\nTags: Basis, Naturmagie, Sturm, Schaden, Geisteskraft, Physisch.",
			"esES": "Cortante de viento otorga 3 más de espíritu por cada enemigo golpeado después del primero.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Espíritu, Física.",
			"esMX": "Viento Penetrante otorga 3 de Espíritu adicional por cada enemigo que golpees, además del primero.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Espíritu, Física.",
			"frFR": "Vent cisaillant vous confère 3 points d'esprit supplémentaires pour chaque cible touchée après la première cible.\n\nTags: Basique, Magie naturelle, Tempête, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Folata Travolgente genera 3 spirito aggiuntivo per ogni nemico colpito dopo il primo.\n\nTags: Base, Magia naturale, Tempesta, Danni, Spirito, Fisico.",
			"jaJP": "〈風の刃〉が最初の敵に命中した後、攻撃が敵に命中するごとに追加の精神力を3生成する。\n\nTags: 基本, 自然魔法, 嵐, ダメージ, 精神力, 物理.",
			"koKR": "바람 칼날이 첫 적에게 적중한 후 추가로 적에게 적중할 때마다 영력을 3 추가로 생성합니다.\n\nTags: 기본, 자연 마법, 폭풍, 피해, 영력, 물리.",
			"plPL": "Kąsający Wicher zapewnia dodatkowo 3 pkt. siły duchowej za każdego trafionego wroga poza pierwszym.\n\nTags: Podstawowe, Magia Natury, Burza, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Corte de Vento concede 3 de espírito adicional por cada inimigo atingido após o primeiro.\n\nTags: Básica, Magia da Natureza, Tempestade, Dano, Espírito, Física.",
			"ruRU": "Поразив одного противника, \"Ветрорез\" начинает восполнять еще 3 ед. духа за каждую последующую цель.\n\nTags: Базовое, Силы природы, Буря, Урон, Дух, Физический урон.",
			"zhCN": "风剪命中第一名敌人后, 每额外命中一名敌人就会获得 3 点灵力。\n\nTags: 基础, 自然魔法, 风暴, 伤害, 灵力, 物理.",
			"zhTW": "削風剪在第一個擊中的敵人之外,每擊中一個敵人就會獲得 3 點額外靈力。\n\nTags: 基本, 自然魔法, 風暴, 傷害, 靈力, 物理."
},
		id: 11,
		maxPoints: 1,
		x: -107.221,
		y: -552.75
	},
	"Storm Strike": {
		connections: [ "Basic", "Enhanced Storm Strike" ],
		description: `Generate Spirit: 14
Lucky Hit Chance: 25%
Electricity gathers around your weapon, dealing {20/22/24/26/28/30/32/34/36/38}% damage to your target and chaining to up to 3 surrounding enemies, dealing 20% less damage each time it chains.

You gain 25% Damage Reduction for 3 seconds after dealing damage with Storm Strike.

Tags: Basic, Nature Magic, Storm, Damage, Damage Reduction, Spirit, Lightning.`,
		nameLocalized: {
			"deDE": "Sturmschlag",
			"esES": "Golpe de tormenta",
			"esMX": "Golpe de Tormenta",
			"frFR": "Coup de tonnerre",
			"itIT": "Assalto della Tempesta",
			"jaJP": "嵐の一撃",
			"koKR": "폭풍 강타",
			"plPL": "Uderzenie Burzy",
			"ptBR": "Ataque Tempestuoso",
			"ruRU": "Удар бури",
			"zhCN": "风暴打击",
			"zhTW": "風暴雷擊"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Geisteskraft: 14\nGlückstrefferchance: 25%\nElektrizität sammelt sich um Eure Waffe, fügt Eurem Ziel {20/22/24/26/28/30/32/34/36/38}% Schaden zu und springt auf bis zu 3 Gegner in der Nähe über, wobei bei jedem Sprung 20% weniger Schaden verursacht wird.\n\nIhr erhaltet 3 Sek. lang 25% Schadensreduktion, nachdem Ihr mit Sturmschlag Schaden verursacht habt.\n\nTags: Basis, Naturmagie, Sturm, Schaden, Schadensreduktion, Geisteskraft, Blitz.",
			"esES": "Generación de espíritu: 14\nProbabilidad de golpe de suerte: 25%\nTu arma se rodea de una electricidad que inflige {20/22/24/26/28/30/32/34/36/38}% de daño a tu objetivo, salta a los enemigos cercanos hasta 3 veces e inflige un 20% menos de daño cada vez que salta.\n\nObtienes un 25% de reducción de daño durante 3 s tras infligir daño con Golpe de tormenta.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Reducción de daño, Espíritu, Rayos.",
			"esMX": "Generación de Espíritu: 14\nProbabilidad de golpe afortunado: 25%\nConcentras electricidad alrededor de tu arma, lo que inflige {20/22/24/26/28/30/32/34/36/38}% de daño a tu objetivo, rebota hasta en 3 enemigos circundantes e inflige un 20% menos de daño cada vez que rebota.\n\nObtienes 25% de reducción de daño durante 3 segundos después de infligir daño con Golpe de Tormenta.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Reducción de daño, Espíritu, Rayo.",
			"frFR": "Esprit généré: 14\nChances d'obtenir un coup de chance: 25%\nDe l'électricité se concentre autour de votre arme et inflige {20/22/24/26/28/30/32/34/36/38}% points de dégâts à votre cible, puis se propage à un maximum de 3 adversaires à proximité en infligeant 20% de dégâts en moins à chaque propagation.\n\nAprès avoir infligé des dégâts avec Coup de tonnerre, vous obtenez 25% de réduction des dégâts pendant 3 s.\n\nTags: Basique, Magie naturelle, Tempête, Dégâts, Réduction des dégâts, Esprit, Foudre.",
			"itIT": "Generazione spirito: 14\nProbabilità di colpo fortunato: 25%\nL'elettricità si concentra intorno alla tua arma, infliggendo {20/22/24/26/28/30/32/34/36/38}% danni al bersaglio e generando una catena di fulmini che colpisce fino a 3 nemici circostanti, infliggendo il 20% di danni in meno a ogni nuovo bersaglio colpito.\n\nOttieni una riduzione danni del 25% per 3 s dopo aver inflitto danni con Assalto della Tempesta.\n\nTags: Base, Magia naturale, Tempesta, Danni, Riduzione danni, Spirito, Fulmine.",
			"jaJP": "精神力回復量: 14\n幸運の一撃発生率: 25%\n武器が電気を帯びて標的に{20/22/24/26/28/30/32/34/36/38}%のダメージを与える。また、標的の周囲にいる最大3体の敵に連鎖ダメージを与えるが、このダメージは1回連鎖する毎に20%減少していく。\n\n〈嵐の一撃〉でダメージを与えると、被ダメージが3秒間にわたり25%減少する。\n\nTags: 基本, 自然魔法, 嵐, ダメージ, ダメージ減少, 精神力, 稲妻.",
			"koKR": "생성: 영력 14\n행운의 적중 확률: 25%\n무기 주위에 전기를 끌어모아 대상에게 {20/22/24/26/28/30/32/34/36/38}%의 피해를 주고, 주위의 적 최대 3마리를 연쇄 공격하여 적중할 때마다 20% 감소한 피해를 줍니다.\n\n폭풍 강타로 피해를 준 후 3초 동안 25%의 피해 감소를 얻습니다.\n\nTags: 기본, 자연 마법, 폭풍, 피해, 피해 감소, 영력, 번개.",
			"plPL": "Generuje 14 pkt. siły duchowej\nSzansa na szczęśliwy traf: 25%\nTwoja broń gromadzi ładunek elektryczny i zadaje {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń twojemu celowi oraz do 3 dodatkowym wrogom wokół, zadając o 20% mniej obrażeń za każdym razem, gdy efekt przejdzie na wroga.\n\nZyskujesz premię 25% do redukcji obrażeń na 3 sek. po zadaniu obrażeń Uderzeniem Burzy.\n\nTags: Podstawowe, Magia Natury, Burza, Obrażenia, Redukcja Obrażeń, Siła Duchowa, Błyskawica.",
			"ptBR": "Gerar Espírito: 14\nChance de Golpe de Sorte: 25%\nEletricidade é acumulada ao redor da sua arma, causando {20/22/24/26/28/30/32/34/36/38}% de dano ao seu alvo e propagando-se para até 3 inimigos ao redor, causando 20% de dano reduzido cada vez que se propaga.\n\nVocê recebe 25% de redução de dano por 3 segundos depois de causar dano com Ataque Tempestuoso.\n\nTags: Básica, Magia da Natureza, Tempestade, Dano, Redução de Dano, Espírito, Eletricidade.",
			"ruRU": "Дает дух: 14 ед.\nВероятность удачного удара: 25%.\nВаше оружие окружает электрическая энергия, которая наносит {20/22/24/26/28/30/32/34/36/38}% ед. урона цели и поражает еще максимум 3 противников рядом с ней, нанося на 20% меньше урона с каждым переходом.\n\nКогда \"Удар бури\" наносит урон, вы получаете на 25% меньше урона в течение 3 сек.\n\nTags: Базовое, Силы природы, Буря, Урон, Уменьшение урона, Дух, Молния.",
			"zhCN": "生成灵力: 14\n幸运一击几率: 25%\n电能聚集在你的武器周围, 对你的目标造成 {20/22/24/26/28/30/32/34/36/38}% 点伤害并最多连锁攻击周围的 3 名敌人, 每次连锁攻击造成的伤害降低 20%。\n\n使用风暴打击造成伤害后, 你获得 25% 的伤害减免, 持续 3 秒。\n\nTags: 基础, 自然魔法, 风暴, 伤害, 伤害减免, 灵力, 闪电.",
			"zhTW": "產生靈力:14\n幸運觸發機率:25%\n你的武器聚集電能,對你的目標造成 {20/22/24/26/28/30/32/34/36/38}% 點傷害,並最多連鎖攻擊 3 個附近的敵人,每次連鎖攻擊造成的傷害減少 20%。\n\n使用風暴雷擊造成傷害後,你獲得 25% 傷害減免,持續 3 秒。\n\nTags: 基本, 自然魔法, 風暴, 傷害, 傷害減免, 靈力, 電擊."
},
		id: 12,
		maxPoints: 5,
		x: 276.665,
		y: -215.355
	},
	"Enhanced Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Storm Strike", "Fierce Storm Strike", "Wild Storm Strike" ],
		description: `Storm Strike has a 15% chance to Immobilize all enemies hit for 2.5 seconds.

Tags: Basic, Nature Magic, Storm, Damage, Damage Reduction, Spirit, Lightning.`,
		nameLocalized: {
			"deDE": "Verbesserter Sturmschlag",
			"esES": "Golpe de tormenta mejorada",
			"esMX": "Golpe de Tormenta Potenciado",
			"frFR": "Coup de tonnerre renforcé",
			"itIT": "Assalto della Tempesta Rinforzato",
			"jaJP": "嵐の一撃(強化版)",
			"koKR": "강화된 폭풍 강타",
			"plPL": "Wzmocnione Uderzenie Burzy",
			"ptBR": "Ataque Tempestuoso Aperfeiçoado",
			"ruRU": "Усиленный удар бури",
			"zhCN": "强化风暴打击",
			"zhTW": "強化風暴雷擊"
},
		descriptionLocalized: {
			"deDE": "Sturmschlag verfügt über eine Chance von 15%, alle getroffenen Gegner 2.5 Sek. lang bewegungsunfähig zu machen.\n\nTags: Basis, Naturmagie, Sturm, Schaden, Schadensreduktion, Geisteskraft, Blitz.",
			"esES": "Golpe de tormenta tiene un 15% de probabilidad de inmovilizar a todos los enemigos golpeados durante 2.5 s.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Reducción de daño, Espíritu, Rayos.",
			"esMX": "Golpe de Tormenta tiene un 15% de probabilidad de inmovilizar a todos los enemigos golpeados durante 2.5 segundos.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Reducción de daño, Espíritu, Rayo.",
			"frFR": "Coup de tonnerre a 15% de chances d'immobiliser toutes les cibles touchées pendant 2.5 s.\n\nTags: Basique, Magie naturelle, Tempête, Dégâts, Réduction des dégâts, Esprit, Foudre.",
			"itIT": "Assalto della Tempesta ha una probabilità del 15% di immobilizzare tutti i nemici per 2.5 s.\n\nTags: Base, Magia naturale, Tempesta, Danni, Riduzione danni, Spirito, Fulmine.",
			"jaJP": "〈嵐の一撃〉が15%の確率で、命中したあらゆる敵を2.5秒間、移動不能にする。\n\nTags: 基本, 自然魔法, 嵐, ダメージ, ダメージ減少, 精神力, 稲妻.",
			"koKR": "폭풍 강타가 15% 확률로 적중한 모든 적을 2.5초 동안 이동 불가 상태로 만듭니다.\n\nTags: 기본, 자연 마법, 폭풍, 피해, 피해 감소, 영력, 번개.",
			"plPL": "Uderzenie Burzy ma 15% szans na unieruchomienie wszystkich trafionych wrogów na 2.5 sek.\n\nTags: Podstawowe, Magia Natury, Burza, Obrażenia, Redukcja Obrażeń, Siła Duchowa, Błyskawica.",
			"ptBR": "Ataque Tempestuoso tem 15% de chance de imobilizar todos os inimigos atingidos por 2.5 segundos.\n\nTags: Básica, Magia da Natureza, Tempestade, Dano, Redução de Dano, Espírito, Eletricidade.",
			"ruRU": "\"Удар бури\" с вероятностью 15% обездвиживает пораженных противников на 2.5 сек.\n\nTags: Базовое, Силы природы, Буря, Урон, Уменьшение урона, Дух, Молния.",
			"zhCN": "风暴打击命中敌人时有 15% 几率使被命中的所有敌人定身 2.5 秒。\n\nTags: 基础, 自然魔法, 风暴, 伤害, 伤害减免, 灵力, 闪电.",
			"zhTW": "風暴雷擊有 15% 機率使擊中的所有敵人定身,持續 2.5 秒。\n\nTags: 基本, 自然魔法, 風暴, 傷害, 傷害減免, 靈力, 電擊."
},
		id: 13,
		maxPoints: 1,
		x: 481.829,
		y: -372.805
	},
	"Fierce Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Enhanced Storm Strike" ],
		description: `Storm Strike has a 50% chance to make enemies Vulnerable for 3 seconds.

Tags: Basic, Nature Magic, Storm, Damage, Damage Reduction, Spirit, Lightning.`,
		nameLocalized: {
			"deDE": "Grimmiger Sturmschlag",
			"esES": "Golpe de tormenta fiera",
			"esMX": "Golpe de Tormenta Feroz",
			"frFR": "Coup de tonnerre féroce",
			"itIT": "Assalto della Tempesta Bestiale",
			"jaJP": "嵐の一撃(苛烈)",
			"koKR": "사나운 폭풍 강타",
			"plPL": "Zaciekłe Uderzenie Burzy",
			"ptBR": "Ataque Tempestuoso Feroz",
			"ruRU": "Разрушительный удар бури",
			"zhCN": "凶暴风暴打击",
			"zhTW": "兇狠風暴雷擊"
},
		descriptionLocalized: {
			"deDE": "Sturmschlag verfügt über eine Chance von 50%, Gegner 3 Sek. lang verwundbar zu machen.\n\nTags: Basis, Naturmagie, Sturm, Schaden, Schadensreduktion, Geisteskraft, Blitz.",
			"esES": "Golpe de tormenta tiene un 50% de probabilidad de volver vulnerables a los enemigos durante 3 s.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Reducción de daño, Espíritu, Rayos.",
			"esMX": "Golpe de Tormenta tiene un 50% de probabilidad de volver a los enemigos vulnerables durante 3 segundos.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Reducción de daño, Espíritu, Rayo.",
			"frFR": "Coup de tonnerre a 50% de chances de rendre les adversaires vulnérables pendant 3 s.\n\nTags: Basique, Magie naturelle, Tempête, Dégâts, Réduction des dégâts, Esprit, Foudre.",
			"itIT": "Assalto della Tempesta ha una probabilità del 50% di rendere i nemici vulnerabili per 3 s.\n\nTags: Base, Magia naturale, Tempesta, Danni, Riduzione danni, Spirito, Fulmine.",
			"jaJP": "〈嵐の一撃〉が50%の確率で敵を3秒間、脆弱状態にする。\n\nTags: 基本, 自然魔法, 嵐, ダメージ, ダメージ減少, 精神力, 稲妻.",
			"koKR": "폭풍 강타가 50% 확률로 적을 3초 동안 취약하게 만듭니다.\n\nTags: 기본, 자연 마법, 폭풍, 피해, 피해 감소, 영력, 번개.",
			"plPL": "Uderzenie Burzy ma 50% szans na odsłonięcie wrogów na 3 sek.\n\nTags: Podstawowe, Magia Natury, Burza, Obrażenia, Redukcja Obrażeń, Siła Duchowa, Błyskawica.",
			"ptBR": "Ataque Tempestuoso tem 50% de chance de tornar os inimigos vulneráveis por 3 segundos.\n\nTags: Básica, Magia da Natureza, Tempestade, Dano, Redução de Dano, Espírito, Eletricidade.",
			"ruRU": "\"Удар бури\" с вероятностью 50% делает противников уязвимыми на 3 сек.\n\nTags: Базовое, Силы природы, Буря, Урон, Уменьшение урона, Дух, Молния.",
			"zhCN": "风暴打击有 50% 几率使敌人陷入易伤状态, 持续 3 秒。\n\nTags: 基础, 自然魔法, 风暴, 伤害, 伤害减免, 灵力, 闪电.",
			"zhTW": "風暴雷擊有 50% 機率使敵人易傷,持續 3 秒。\n\nTags: 基本, 自然魔法, 風暴, 傷害, 傷害減免, 靈力, 電擊."
},
		id: 14,
		maxPoints: 1,
		x: 471.808,
		y: -509.25
	},
	"Wild Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Enhanced Storm Strike" ],
		description: `Storm Strike chains to 2 additional targets.

Tags: Basic, Nature Magic, Storm, Damage, Damage Reduction, Spirit, Lightning.`,
		nameLocalized: {
			"deDE": "Wilder Sturmschlag",
			"esES": "Golpe de tormenta salvaje",
			"esMX": "Golpe de Tormenta Salvaje",
			"frFR": "Coup de tonnerre indomptable",
			"itIT": "Assalto della Tempesta Sfrenato",
			"jaJP": "嵐の一撃(野生)",
			"koKR": "억센 폭풍 강타",
			"plPL": "Dzikie Uderzenie Burzy",
			"ptBR": "Ataque Tempestuoso Selvagem",
			"ruRU": "Дикий удар бури",
			"zhCN": "狂野风暴打击",
			"zhTW": "狂野風暴雷擊"
},
		descriptionLocalized: {
			"deDE": "Sturmschlag springt auf bis zu 2 zusätzliche Ziele über.\n\nTags: Basis, Naturmagie, Sturm, Schaden, Schadensreduktion, Geisteskraft, Blitz.",
			"esES": "Golpe de tormenta salta a 2 objetivos adicionales.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Reducción de daño, Espíritu, Rayos.",
			"esMX": "Golpe de Tormenta rebota en hasta 2 objetivos más.\n\nTags: Básica, Magia de la naturaleza, Tormenta, Daño, Reducción de daño, Espíritu, Rayo.",
			"frFR": "Coup de tonnerre se propage à 2 cibles supplémentaires.\n\nTags: Basique, Magie naturelle, Tempête, Dégâts, Réduction des dégâts, Esprit, Foudre.",
			"itIT": "La catena di fulmini di Assalto della Tempesta si irradia a 2 bersagli aggiuntivi.\n\nTags: Base, Magia naturale, Tempesta, Danni, Riduzione danni, Spirito, Fulmine.",
			"jaJP": "〈嵐の一撃〉がさらに2体の敵に連鎖する。\n\nTags: 基本, 自然魔法, 嵐, ダメージ, ダメージ減少, 精神力, 稲妻.",
			"koKR": "폭풍 강타가 추가 대상 2마리를 연쇄 공격합니다.\n\nTags: 기본, 자연 마법, 폭풍, 피해, 피해 감소, 영력, 번개.",
			"plPL": "Uderzenie Burzy przechodzi na dodatkowe cele w liczbie 2.\n\nTags: Podstawowe, Magia Natury, Burza, Obrażenia, Redukcja Obrażeń, Siła Duchowa, Błyskawica.",
			"ptBR": "Ataque Tempestuoso propaga-se para 2 alvos adicionais.\n\nTags: Básica, Magia da Natureza, Tempestade, Dano, Redução de Dano, Espírito, Eletricidade.",
			"ruRU": "\"Удар бури\" переходит еще к 2 целям.\n\nTags: Базовое, Силы природы, Буря, Урон, Уменьшение урона, Дух, Молния.",
			"zhCN": "风暴打击额外连锁攻击 2 个目标。\n\nTags: 基础, 自然魔法, 风暴, 伤害, 伤害减免, 灵力, 闪电.",
			"zhTW": "風暴雷擊 額外連鎖 2 個目標。\n\nTags: 基本, 自然魔法, 風暴, 傷害, 傷害減免, 靈力, 電擊."
},
		id: 15,
		maxPoints: 1,
		x: 738.505,
		y: -381.855
	},
	"Claw": {
		connections: [ "Basic", "Enhanced Claw" ],
		description: `Generate Spirit: 10
Lucky Hit Chance: 50%
Shapeshift into a Werewolf and claw at an enemy for {20/22/24/26/28/30/32/34/36/38}% damage.

Tags: Basic, Shapeshifting, Werewolf, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Klaue",
			"esES": "Desgarrar",
			"esMX": "Rasguño",
			"frFR": "Griffe",
			"itIT": "Artigliata",
			"jaJP": "鉤爪",
			"koKR": "발톱",
			"plPL": "Pazury",
			"ptBR": "Garra",
			"ruRU": "Удар когтями",
			"zhCN": "爪击",
			"zhTW": "爪擊"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Geisteskraft: 10\nGlückstrefferchance: 50%\nVerwandelt Euch in einen Werwolf und schlagt Eure Krallen in einen Gegner, um {20/22/24/26/28/30/32/34/36/38}% Schaden zu verursachen.\n\nTags: Basis, Gestaltwandeln, Werwolf, Schaden, Geisteskraft, Physisch.",
			"esES": "Generación de espíritu: 10\nProbabilidad de golpe de suerte: 50%\nTe transformas en un hombre lobo y atacas con tus garras a un enemigo, lo que inflige {20/22/24/26/28/30/32/34/36/38}% de daño.\n\nTags: Básica, Cambio de forma, Hombre lobo, Daño, Espíritu, Física.",
			"esMX": "Generación de Espíritu: 10\nProbabilidad de golpe afortunado: 50%\nCambias de forma a un hombre lobo y rasguñas a un enemigo para infligirle {20/22/24/26/28/30/32/34/36/38}% de daño.\n\nTags: Básica, Metamorfosis, Hombre lobo, Daño, Espíritu, Física.",
			"frFR": "Esprit généré: 10\nChances d'obtenir un coup de chance: 50%\nVous vous transformez en lycanthrope et griffez une cible, ce qui lui inflige {20/22/24/26/28/30/32/34/36/38}% points de dégâts.\n\nTags: Basique, Métamorphose, Lycanthrope, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Generazione spirito: 10\nProbabilità di colpo fortunato: 50%\nMuti in un Lupo Mannaro e artigli un nemico, infliggendo {20/22/24/26/28/30/32/34/36/38}% danni.\n\nTags: Base, Mutaforma, Lupo Mannaro, Danni, Spirito, Fisico.",
			"jaJP": "精神力回復量: 10\n幸運の一撃発生率: 50%\n人狼に変身して爪で敵を切り裂き、{20/22/24/26/28/30/32/34/36/38}%のダメージを与える。\n\nTags: 基本, 変身, 人狼, ダメージ, 精神力, 物理.",
			"koKR": "생성: 영력 10\n행운의 적중 확률: 50%\n늑대인간으로 변신하고 발톱으로 적을 공격하여 {20/22/24/26/28/30/32/34/36/38}%의 피해를 줍니다.\n\nTags: 기본, 변신, 늑대인간, 피해, 영력, 물리.",
			"plPL": "Generuje: 10 pkt. siły duchowej\nSzansa na szczęśliwy traf: 50%\nPrzemieniasz się w wilkołaka i atakujesz wroga pazurami, zadając {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń.\n\nTags: Podstawowe, Zmiennokształtność, Wilkołak, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Gerar Espírito: 10\nChance de Golpe de Sorte: 50%\nTransforma-se em um lobisomem e ataca um inimigo, causando {20/22/24/26/28/30/32/34/36/38}% de dano.\n\nTags: Básica, Metamorfose, Lobisomem, Dano, Espírito, Física.",
			"ruRU": "Дает дух: 10 ед.\nВероятность удачного удара: 50%.\nВы принимаете облик волка и терзаете противника когтями, нанося {20/22/24/26/28/30/32/34/36/38}% ед. урона.\n\nTags: Базовое, Смена облика, Облик волка, Урон, Дух, Физический урон.",
			"zhCN": "生成灵力: 10\n幸运一击几率: 50%\n变成狼人并爪击敌人, 造成 {20/22/24/26/28/30/32/34/36/38}% 点伤害。\n\nTags: 基础, 变形, 狼人, 伤害, 灵力, 物理.",
			"zhTW": "產生靈力:10\n幸運觸發機率:50%\n變身為狼人並爪擊一名敵人,造成 {20/22/24/26/28/30/32/34/36/38}% 點傷害。\n\nTags: 基本, 變形, 狼人, 傷害, 靈力, 物理."
},
		id: 16,
		maxPoints: 5,
		x: 499.625,
		y: -41.135
	},
	"Enhanced Claw": {
		baseSkill: "Claw",
		connections: [ "Claw", "Fierce Claw", "Wild Claw" ],
		description: `Claw's Attack Speed is increased by +10%.

Tags: Basic, Shapeshifting, Werewolf, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserte Klaue",
			"esES": "Desgarrar mejorado",
			"esMX": "Rasguño Potenciado",
			"frFR": "Griffe renforcée",
			"itIT": "Artigliata Rinforzata",
			"jaJP": "鉤爪(強化版)",
			"koKR": "강화된 발톱",
			"plPL": "Wzmocnione Pazury",
			"ptBR": "Garra Aperfeiçoada",
			"ruRU": "Усиленный удар когтями",
			"zhCN": "强化爪击",
			"zhTW": "強化爪擊"
},
		descriptionLocalized: {
			"deDE": "Die Angriffsgeschwindigkeit von Klaue ist um +10% erhöht.\n\nTags: Basis, Gestaltwandeln, Werwolf, Schaden, Geisteskraft, Physisch.",
			"esES": "La velocidad de ataque de Desgarrar aumenta un +10%.\n\nTags: Básica, Cambio de forma, Hombre lobo, Daño, Espíritu, Física.",
			"esMX": "La velocidad de ataque de Rasguño aumenta un +10%.\n\nTags: Básica, Metamorfosis, Hombre lobo, Daño, Espíritu, Física.",
			"frFR": "La vitesse d'attaque de Griffe est augmentée de +10%.\n\nTags: Basique, Métamorphose, Lycanthrope, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "La velocità d'attacco di Artigliata aumenta del +10%.\n\nTags: Base, Mutaforma, Lupo Mannaro, Danni, Spirito, Fisico.",
			"jaJP": "〈鉤爪〉の攻撃速度が+10%上昇する。\n\nTags: 基本, 変身, 人狼, ダメージ, 精神力, 物理.",
			"koKR": "발톱의 공격 속도가 +10% 증가합니다.\n\nTags: 기본, 변신, 늑대인간, 피해, 영력, 물리.",
			"plPL": "Szybkość ataku Pazurów jest zwiększona o +10%.\n\nTags: Podstawowe, Zmiennokształtność, Wilkołak, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "A velocidade de ataque de Garra é aumentada em +10%.\n\nTags: Básica, Metamorfose, Lobisomem, Dano, Espírito, Física.",
			"ruRU": "Скорость атаки \"Удара когтями\" повышается на +10%.\n\nTags: Базовое, Смена облика, Облик волка, Урон, Дух, Физический урон.",
			"zhCN": "爪击的攻击速度提高 +10%。\n\nTags: 基础, 变形, 狼人, 伤害, 灵力, 物理.",
			"zhTW": "爪擊攻擊速度提高 +10%.。\n\nTags: 基本, 變形, 狼人, 傷害, 靈力, 物理."
},
		id: 17,
		maxPoints: 1,
		x: 865.42,
		y: -70.405
	},
	"Fierce Claw": {
		baseSkill: "Claw",
		connections: [ "Enhanced Claw" ],
		description: `Claw applies 10.2% Poisoning damage over 6 seconds.

Tags: Basic, Shapeshifting, Werewolf, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Grimmige Klaue",
			"esES": "Desgarrar fiero",
			"esMX": "Rasguño Feroz",
			"frFR": "Griffe féroce",
			"itIT": "Artigliata Bestiale",
			"jaJP": "鉤爪(苛烈)",
			"koKR": "사나운 발톱",
			"plPL": "Zaciekłe Pazury",
			"ptBR": "Garra Feroz",
			"ruRU": "Разрушительный удар когтями",
			"zhCN": "凶暴爪击",
			"zhTW": "兇狠爪擊"
},
		descriptionLocalized: {
			"deDE": "Klaue verursacht im Verlauf von 6 Sek. 10.2% Giftschaden.\n\nTags: Basis, Gestaltwandeln, Werwolf, Schaden, Geisteskraft, Physisch.",
			"esES": "Desgarrar aplica 10.2% de daño de veneno durante 6 s.\n\nTags: Básica, Cambio de forma, Hombre lobo, Daño, Espíritu, Física.",
			"esMX": "Garra aplica 10.2% de daño de veneno durante 6 segundos.\n\nTags: Básica, Metamorfosis, Hombre lobo, Daño, Espíritu, Física.",
			"frFR": "Griffe inflige 10.2% points de dégâts de poison en 6 s.\n\nTags: Basique, Métamorphose, Lycanthrope, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Artigliata applica 10.2% danni da veleno nell'arco di 6 s.\n\nTags: Base, Mutaforma, Lupo Mannaro, Danni, Spirito, Fisico.",
			"jaJP": "〈鉤爪〉が敵を毒状態にし、6秒かけて10.2%の毒ダメージを与える。\n\nTags: 基本, 変身, 人狼, ダメージ, 精神力, 物理.",
			"koKR": "발톱이 6초에 걸친 10.2%의 중독 피해를 적용합니다.\n\nTags: 기본, 변신, 늑대인간, 피해, 영력, 물리.",
			"plPL": "Pazury wywołują 10.2% pkt. obrażeń od zatrucia w ciągu 6 sek.\n\nTags: Podstawowe, Zmiennokształtność, Wilkołak, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Garra aplica 10.2% de dano venenoso ao longo de 6 segundos.\n\nTags: Básica, Metamorfose, Lobisomem, Dano, Espírito, Física.",
			"ruRU": "\"Удар когтями\" отравляет противников, нанося 10.2% ед. урона от отравления за 6 сек.\n\nTags: Базовое, Смена облика, Облик волка, Урон, Дух, Физический урон.",
			"zhCN": "爪击在 6 秒内持续造成 10.2% 点毒素伤害。\n\nTags: 基础, 变形, 狼人, 伤害, 灵力, 物理.",
			"zhTW": "爪擊在 6 秒內造成 10.2% 點中毒傷害。\n\nTags: 基本, 變形, 狼人, 傷害, 靈力, 物理."
},
		id: 18,
		maxPoints: 1,
		x: 1070.101,
		y: -2.05
	},
	"Wild Claw": {
		baseSkill: "Claw",
		connections: [ "Enhanced Claw" ],
		description: `Claw has a 10% chance to attack twice.

Tags: Basic, Shapeshifting, Werewolf, Damage, Spirit, Physical.`,
		nameLocalized: {
			"deDE": "Wilde Klaue",
			"esES": "Desgarrar salvaje",
			"esMX": "Rasguño Salvaje",
			"frFR": "Griffe indomptable",
			"itIT": "Artigliata Sfrenata",
			"jaJP": "鉤爪(野生)",
			"koKR": "억센 발톱",
			"plPL": "Dzikie Pazury",
			"ptBR": "Garra Selvagem",
			"ruRU": "Дикий удар когтями",
			"zhCN": "狂野爪击",
			"zhTW": "狂野爪擊"
},
		descriptionLocalized: {
			"deDE": "Klaue hat eine Chance von 10%, doppelt anzugreifen.\n\nTags: Basis, Gestaltwandeln, Werwolf, Schaden, Geisteskraft, Physisch.",
			"esES": "Desgarrar tiene una probabilidad de un 10% de atacar dos veces.\n\nTags: Básica, Cambio de forma, Hombre lobo, Daño, Espíritu, Física.",
			"esMX": "Rasguño tiene un 10% de probabilidad de atacar dos veces.\n\nTags: Básica, Metamorfosis, Hombre lobo, Daño, Espíritu, Física.",
			"frFR": "Griffe a 10% de chances d'attaquer deux fois.\n\nTags: Basique, Métamorphose, Lycanthrope, Dégâts, Esprit, Dégâts physiques.",
			"itIT": "Artigliata ha il 10% di probabilità di attaccare due volte.\n\nTags: Base, Mutaforma, Lupo Mannaro, Danni, Spirito, Fisico.",
			"jaJP": "〈鉤爪〉が10%の確率で2回攻撃になる。\n\nTags: 基本, 変身, 人狼, ダメージ, 精神力, 物理.",
			"koKR": "발톱이 10% 확률로 두 번 공격합니다.\n\nTags: 기본, 변신, 늑대인간, 피해, 영력, 물리.",
			"plPL": "Pazury mają 10% szans na podwójny atak.\n\nTags: Podstawowe, Zmiennokształtność, Wilkołak, Obrażenia, Siła Duchowa, Fizyczne.",
			"ptBR": "Garra tem 10% de chance de atacar duas vezes.\n\nTags: Básica, Metamorfose, Lobisomem, Dano, Espírito, Física.",
			"ruRU": "\"Удар когтями\" с вероятностью 10% поражает цель дважды.\n\nTags: Базовое, Смена облика, Облик волка, Урон, Дух, Физический урон.",
			"zhCN": "爪击有 10% 几率触发两次。\n\nTags: 基础, 变形, 狼人, 伤害, 灵力, 物理.",
			"zhTW": "爪擊有 10% 機率攻擊兩次。\n\nTags: 基本, 變形, 狼人, 傷害, 靈力, 物理."
},
		id: 19,
		maxPoints: 1,
		x: 1035.416,
		y: -164.095
	},
};

druidData["Spirit"] = {
	"Landslide": {
		connections: [ "Spirit", "Enhanced Landslide" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: 20%
Crush enemies between 2 pillars of earth, dealing up to {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% damage.

Tags: Core, Nature Magic, Earth, Spirit, Damage.`,
		nameLocalized: {
			"deDE": "Erdrutsch",
			"esES": "Alud",
			"esMX": "Desprendimiento",
			"frFR": "Éboulement",
			"itIT": "Smottamento",
			"jaJP": "地滑り",
			"koKR": "산사태",
			"plPL": "Osuwisko",
			"ptBR": "Deslizamento",
			"ruRU": "Оползень",
			"zhCN": "山崩",
			"zhTW": "崩石裂土"
},
		descriptionLocalized: {
			"deDE": "Geisteskraftkosten: {#}\nGlückstrefferchance: 20%\nZerschmettert Gegner zwischen 2 Erdsäulen und verursacht bis zu {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% Schaden.\n\nTags: Kern, Naturmagie, Erde, Geisteskraft, Schaden.",
			"esES": "Coste de espíritu: {#}\nProbabilidad de golpe de suerte: 20%\nAplastas a los enemigos entre 2 pilares de tierra, lo que inflige hasta {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% de daño.\n\nTags: Principal, Magia de la naturaleza, Tierra, Espíritu, Daño.",
			"esMX": "Costo de Espíritu: {#}\nProbabilidad de golpe afortunado: 20%\nAplastas a los enemigos entre 2 pilares de tierra, que infligen hasta un máximo de {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% de daño.\n\nTags: Principal, Magia de la naturaleza, Tierra, Espíritu, Daño.",
			"frFR": "Coût en esprit: {#}\nChances d'obtenir un coup de chance: 20%\nVous écrasez les adversaires entre 2 piliers de terre, ce qui leur inflige jusqu'à {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% points de dégâts.\n\nTags: Principale, Magie naturelle, Terre, Esprit, Dégâts.",
			"itIT": "Costo in spirito: {#}\nProbabilità di colpo fortunato: 20%\nSchiacci i nemici tra 2 pilastri di terra, infliggendo fino a {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% danni.\n\nTags: Primaria, Magia naturale, Terra, Spirito, Danni.",
			"jaJP": "精神力消費量: {#}\n幸運の一撃発生率: 20%\n2本の土の柱で敵を挟み、最大{75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}%のダメージを与える。\n\nTags: コア, 自然魔法, 地, 精神力, ダメージ.",
			"koKR": "소모: 영력 {#}\n행운의 적중 확률: 20%\n2개의 흙 기둥으로 적을 짓뭉개 최대 {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}%의 피해를 줍니다.\n\nTags: 핵심, 자연 마법, 대지, 영력, 피해.",
			"plPL": "Koszt: {#} pkt. siły duchowej.\nSzansa na szczęśliwy traf: 20%\nMiażdżysz wrogów 2 ziemnymi filarami i zadajesz do {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% pkt. obrażeń.\n\nTags: Główne, Magia Natury, Ziemia, Siła Duchowa, Obrażenia.",
			"ptBR": "Custo de espírito: {#}\nChance de Golpe de Sorte: 20%\nEsmaga inimigos entre 2 pilares de terra, causando até {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% de dano.\n\nTags: Principal, Magia da Natureza, Terra, Espírito, Dano.",
			"ruRU": "Затраты духа: {#} ед.\nВероятность удачного удара: 20%.\n2 земляных столпа сокрушают противников, нанося до {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% ед. урона.\n\nTags: Основное, Силы природы, Земля, Дух, Урон.",
			"zhCN": "灵力消耗: {#}\n幸运一击几率: 20%\n碾压 2 根大地之柱之间的敌人, 最多造成 {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% 点伤害。\n\nTags: 核心, 自然魔法, 大地, 灵力, 伤害.",
			"zhTW": "靈力消耗:{#}\n幸運觸發機率:20%\n召喚 2 道泥漿洪流淹沒敵人,最多造成 {75/82.6/90/97.6/105/112.4/120/127.6/135/142.4}% 點傷害。\n\nTags: 核心, 自然魔法, 大地, 靈力, 傷害."
},
		id: 20,
		maxPoints: 5,
		values: [ "30" ],
		x: 527.495,
		y: -1.355
	},
	"Enhanced Landslide": {
		baseSkill: "Landslide",
		connections: [ "Landslide", "Raging Landslide", "Primal Landslide" ],
		description: `After Landslide damages enemies 4 times, the next hit will Immobilize enemies for 3 seconds.

Tags: Core, Nature Magic, Earth, Spirit, Damage.`,
		nameLocalized: {
			"deDE": "Verbesserter Erdrutsch",
			"esES": "Alud mejorado",
			"esMX": "Desprendimiento Potenciado",
			"frFR": "Éboulement renforcé",
			"itIT": "Smottamento Rinforzato",
			"jaJP": "地滑り(強化版)",
			"koKR": "강화된 산사태",
			"plPL": "Wzmocnione Osuwisko",
			"ptBR": "Deslizamento Aperfeiçoado",
			"ruRU": "Усиленный оползень",
			"zhCN": "强化山崩",
			"zhTW": "強化崩石裂土"
},
		descriptionLocalized: {
			"deDE": "Nachdem Erdrutsch Gegnern 4-mal Schaden zugefügt hat, macht der nächste Treffer Gegner 3 Sek. lang bewegungsunfähig.\n\nTags: Kern, Naturmagie, Erde, Geisteskraft, Schaden.",
			"esES": "Después de que Alud inflija daño a enemigos 4 veces, el siguiente golpe inmovilizará a los enemigos durante 3 s.\n\nTags: Principal, Magia de la naturaleza, Tierra, Espíritu, Daño.",
			"esMX": "Cuando Desprendimiento inflige daño a los enemigos 4 veces, el siguiente golpe inmovilizará a los enemigos durante 3 segundos.\n\nTags: Principal, Magia de la naturaleza, Tierra, Espíritu, Daño.",
			"frFR": "Une fois qu'Éboulement a infligé des dégâts aux adversaires 4 fois, le prochain coup immobilisera les adversaires pendant 3 s.\n\nTags: Principale, Magie naturelle, Terre, Esprit, Dégâts.",
			"itIT": "Dopo che Smottamento ha inflitto danni ai nemici per 4 volte, il prossimo colpo li immobilizzerà per 3 s.\n\nTags: Primaria, Magia naturale, Terra, Spirito, Danni.",
			"jaJP": "〈地滑り〉で敵に4回ダメージを与えると、次に命中した際に敵を3秒間、移動不能にする。\n\nTags: コア, 自然魔法, 地, 精神力, ダメージ.",
			"koKR": "산사태가 적에게 4번 피해를 준 후, 다음 공격이 적중하면 적들은 3초 동안 이동 불가 상태가 됩니다.\n\nTags: 핵심, 자연 마법, 대지, 영력, 피해.",
			"plPL": "Kiedy Osuwisko zada obrażenia wrogom 4 razy, następne trafienie unieruchomi przeciwników na 3 sek.\n\nTags: Główne, Magia Natury, Ziemia, Siła Duchowa, Obrażenia.",
			"ptBR": "Depois de Deslizamento causar dano a inimigos 4 vezes, o próximo acerto imobilizará inimigos por 3 segundos.\n\nTags: Principal, Magia da Natureza, Terra, Espírito, Dano.",
			"ruRU": "Когда \"Оползень\" поражает противников 4 раза:раз, следующий удар обездвиживает противников на 3 сек.\n\nTags: Основное, Силы природы, Земля, Дух, Урон.",
			"zhCN": "山崩对敌人造成 4 次伤害后, 下一次命中会使敌人定身 3 秒。\n\nTags: 核心, 自然魔法, 大地, 灵力, 伤害.",
			"zhTW": "崩石裂土對敵人造成傷害 4 次後,下次擊中敵人會使其定身 3 秒。\n\nTags: 核心, 自然魔法, 大地, 靈力, 傷害."
},
		id: 21,
		maxPoints: 1,
		x: 925.578,
		y: -2.315
	},
	"Raging Landslide": {
		baseSkill: "Landslide",
		connections: [ "Enhanced Landslide" ],
		description: `When you strike an Immobilized or Stunned enemy with Landslide, an additional pillar of earth is formed.

Tags: Core, Nature Magic, Earth, Spirit, Damage.`,
		nameLocalized: {
			"deDE": "Tobender Erdrutsch",
			"esES": "Alud iracundo",
			"esMX": "Desprendimiento Iracundo",
			"frFR": "Éboulement enragé",
			"itIT": "Smottamento Furente",
			"jaJP": "地滑り(猛烈)",
			"koKR": "격렬한 산사태",
			"plPL": "Szaleńcze Osuwisko",
			"ptBR": "Deslizamento Raivoso",
			"ruRU": "Бушующий оползень",
			"zhCN": "暴怒山崩",
			"zhTW": "盛怒崩石裂土"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen bewegungsunfähigen oder betäubten Gegner mit Erdrutsch trefft, bildet sich eine zusätzliche Erdsäule.\n\nTags: Kern, Naturmagie, Erde, Geisteskraft, Schaden.",
			"esES": "Cuando golpeas a un enemigo inmovilizado o aturdido con Alud, se forma un pilar de tierra más.\n\nTags: Principal, Magia de la naturaleza, Tierra, Espíritu, Daño.",
			"esMX": "Al golpear a un enemigo inmovilizado o aturdido con Desprendimiento, se forma un pilar de tierra adicional.\n\nTags: Principal, Magia de la naturaleza, Tierra, Espíritu, Daño.",
			"frFR": "Lorsque vous frappez une cible immobilisée ou étourdie avec Éboulement, un pilier de terre supplémentaire se forme.\n\nTags: Principale, Magie naturelle, Terre, Esprit, Dégâts.",
			"itIT": "Colpendo un nemico immobilizzato o stordito con Smottamento, si genera un pilastro di terra aggiuntivo.\n\nTags: Primaria, Magia naturale, Terra, Spirito, Danni.",
			"jaJP": "〈地滑り〉で敵を移動不能にするかスタンさせると、追加の土の柱が発生する。\n\nTags: コア, 自然魔法, 地, 精神力, ダメージ.",
			"koKR": "산사태로 이동 불가 또는 기절 상태의 적에게 공격을 적중시키면 추가 흙 기둥이 형성됩니다.\n\nTags: 핵심, 자연 마법, 대지, 영력, 피해.",
			"plPL": "Kiedy uderzasz unieruchomionego lub ogłuszonego wroga za pomocą Osuwiska, powstaje dodatkowy słup ziemi.\n\nTags: Główne, Magia Natury, Ziemia, Siła Duchowa, Obrażenia.",
			"ptBR": "Ao acertar um inimigo imobilizado ou atordoado com Deslizamento, é formado um pilar de terra adicional.\n\nTags: Principal, Magia da Natureza, Terra, Espírito, Dano.",
			"ruRU": "Когда \"Оползень\" поражает обездвиженного или оглушенного противника, возникает дополнительный столб земли.\n\nTags: Основное, Силы природы, Земля, Дух, Урон.",
			"zhCN": "当你使用山崩打击一名定身或昏迷的敌人时, 会额外形成一根大地之柱。\n\nTags: 核心, 自然魔法, 大地, 灵力, 伤害.",
			"zhTW": "當你以崩石裂土擊中定身或昏迷的敵人時,額外形成一道巨石。\n\nTags: 核心, 自然魔法, 大地, 靈力, 傷害."
},
		id: 22,
		maxPoints: 1,
		x: 1121.353,
		y: 85.54
	},
	"Primal Landslide": {
		baseSkill: "Landslide",
		connections: [ "Enhanced Landslide" ],
		description: `When you Immobilize or Stun an enemy, you gain a Terramote. Each enemy hit by Landslide consumes a Terramote causing a guaranteed Critical Strike with x40% Critical Strike Damage. Bosses always have up to a 10% chance to grant a Terramote when hit.

Tags: Core, Nature Magic, Earth, Spirit, Damage.`,
		nameLocalized: {
			"deDE": "Urtümlicher Erdrutsch",
			"esES": "Alud primigenio",
			"esMX": "Desprendimiento Primigenio",
			"frFR": "Éboulement primordial",
			"itIT": "Smottamento Primordiale",
			"jaJP": "地滑り(原始)",
			"koKR": "태초의 산사태",
			"plPL": "Pierwotne Osuwisko",
			"ptBR": "Deslizamento Primevo",
			"ruRU": "Первозданный оползень",
			"zhCN": "原始山崩",
			"zhTW": "原始崩石裂土"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen Gegner bewegungsunfähig macht oder betäubt, erhaltet Ihr einen Terrapartikel. Jeder von Erdrutsch getroffene Gegner verbraucht einen Terrapartikel und garantiert einen kritischen Treffer mit x40% kritischem Trefferschaden. Getroffene Bosse verfügen immer über eine Chance von bis zu 10%, einen Terrapartikel zu verleihen.\n\nTags: Kern, Naturmagie, Erde, Geisteskraft, Schaden.",
			"esES": "Cuando inmovilizas o aturdes a un enemigo, obtienes una terramota. Cada enemigo golpeado por Alud consume una terramota para provocar un golpe crítico garantizado con un x40% de daño de golpe crítico. Los jefes siempre tienen una probabilidad de hasta un 10% de otorgar una terramota al ser golpeados.\n\nTags: Principal, Magia de la naturaleza, Tierra, Espíritu, Daño.",
			"esMX": "Obtienes una Terramota al inmovilizar o aturdir a un enemigo. Cada enemigo golpeado por Desprendimiento consume una Terramota, que causa un golpe crítico garantizado con un x40% de daño de golpe crítico. Los jefes siempre tienen hasta un 10% de probabilidad de otorgar una Terramota al ser golpeados.\n\nTags: Principal, Magia de la naturaleza, Tierra, Espíritu, Daño.",
			"frFR": "Lorsque vous immobilisez ou étourdissez une cible, vous gagnez un grain de terre. Chaque cible touchée par Éboulement consomme un grain de terre, ce qui garantit un coup critique qui infligera x40% de dégâts critiques supplémentaires. Les boss ont toujours jusqu'à 10% de chances d'octroyer un grain de terre lorsqu'ils sont touchés.\n\nTags: Principale, Magie naturelle, Terre, Esprit, Dégâts.",
			"itIT": "Quando immobilizzi o stordisci un nemico, ottieni un Granulo di Terra. Ogni nemico colpito da Smottamento consuma un Granulo di Terra che infligge un colpo critico garantito con il x40% di danni critici. I boss hanno sempre fino al 10% di probabilità di assegnare un Granulo di Terra quando colpiti.\n\nTags: Primaria, Magia naturale, Terra, Spirito, Danni.",
			"jaJP": "敵を移動不能にするかスタンさせると大地の欠片を得る。〈地滑り〉が敵1体に命中する毎に大地の欠片を1消費し、必ずクリティカルが発生してx40%のクリティカルダメージを与える。ボスに命中した場合、最大10%の確率で大地の欠片を得る。\n\nTags: コア, 自然魔法, 地, 精神力, ダメージ.",
			"koKR": "적을 이동 불가 또는 기절 상태로 만들면 대지티끌을 얻습니다. 산사태로 적중한 적 하나당 대지티끌이 하나 소모되어 공격이 확정적으로 극대화 적중하며 x40%의 극대화 피해를 줍니다. 우두머리에게 공격이 적중하면 항상 최대 10% 확률로 대지티끌을 얻습니다.\n\nTags: 핵심, 자연 마법, 대지, 영력, 피해.",
			"plPL": "Kiedy unieruchomisz lub ogłuszysz wroga, zyskujesz Osunięcie Ziemi. Każdy wróg trafiony przez Osuwisko zużywa Osunięcie Ziemi, wywołując gwarantowane trafienie krytyczne z premią x40% do obrażeń krytycznych. Trafienie bossa zawsze ma 10% szans na Osunięcie Ziemi.\n\nTags: Główne, Magia Natury, Ziemia, Siła Duchowa, Obrażenia.",
			"ptBR": "Ao imobilizar ou atordoar um inimigo, você recebe um Terrátomo. Cada inimigo atingido por Deslizamento consome um Terrátomo, causando um acerto crítico garantido com 40% de dano de acerto crítico. Chefes sempre têm até 10% de chance de conceder um Terrátomo ao serem atingidos.\n\nTags: Principal, Magia da Natureza, Terra, Espírito, Dano.",
			"ruRU": "Когда вы обездвиживаете или оглушаете противника, вы получаете частицу земли. \"Оползень\" поглощает частицу земли за каждого пораженного противника и гарантированно наносит критический урон, увеличенный на x40%. Поражая боссов, вы с вероятностью до 10% получаете частицу земли.\n\nTags: Основное, Силы природы, Земля, Дух, Урон.",
			"zhCN": "当你定身或击晕一名敌人时, 你会获得一个大地微粒。每一个被山崩命中的敌人都会消耗一个大地微粒使之必定暴击, 造成 x40% 的暴击伤害。命中首领必定有最高 10% 几率获得大地微粒。\n\nTags: 核心, 自然魔法, 大地, 灵力, 伤害.",
			"zhTW": "當你定身或擊昏一個敵人時,獲得一個大地微粒。崩石裂土每擊中一個敵人會消耗一個大地微粒,使其必定爆擊,並擁有 x40% 爆擊傷害加成。擊中首領時必定有最多 10% 機率獲得一個大地微粒。\n\nTags: 核心, 自然魔法, 大地, 靈力, 傷害."
},
		id: 23,
		maxPoints: 1,
		x: 1123.278,
		y: -78.075
	},
	"Pulverize": {
		connections: [ "Spirit", "Enhanced Pulverize" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: 33%
Shapeshift into a Werebear and slam the ground, dealing {50/55/60/65/70/75/80/85/90/95}% damage to surrounding enemies.

Tags: Core, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Pulverisieren",
			"esES": "Pulverizar",
			"esMX": "Pulverizar",
			"frFR": "Pulvérisation",
			"itIT": "Sminuzzamento",
			"jaJP": "粉砕",
			"koKR": "쳐부수기",
			"plPL": "Spustoszenie",
			"ptBR": "Pulverizar",
			"ruRU": "Сокрушение",
			"zhCN": "粉碎",
			"zhTW": "粉碎"
},
		descriptionLocalized: {
			"deDE": "Geisteskraftkosten: {#}\nGlückstrefferchance: 33%\nVerwandelt Euch in einen Werbären, schmettert auf den Boden und fügt Gegnern in der Nähe {50/55/60/65/70/75/80/85/90/95}% Schaden zu.\n\nTags: Kern, Gestaltwandeln, Werbär, Geisteskraft, Schaden, Physisch.",
			"esES": "Coste de espíritu: {#}\nProbabilidad de golpe de suerte: 33%\nTe transformas en un hombre oso y golpeas el suelo, lo que inflige {50/55/60/65/70/75/80/85/90/95}% de daño a los enemigos cercanos.\n\nTags: Principal, Cambio de forma, Hombre oso, Espíritu, Daño, Física.",
			"esMX": "Costo de Espíritu: {#}\nProbabilidad de golpe afortunado: 33%\nCambias de forma a un hombre oso, golpeas el suelo e infliges {50/55/60/65/70/75/80/85/90/95}% de daño a los enemigos circundantes.\n\nTags: Principal, Metamorfosis, Hombre oso, Espíritu, Daño, Física.",
			"frFR": "Coût en esprit: {#}\nChances d'obtenir un coup de chance: 33%\nVous vous transformez en ursoïde et frappez le sol, ce qui inflige {50/55/60/65/70/75/80/85/90/95}% points de dégâts aux adversaires à proximité.\n\nTags: Principale, Métamorphose, Ursoïde, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Costo in spirito: {#}\nProbabilità di colpo fortunato: 33%\nMuti in un Orso Mannaro e colpisci il terreno, infliggendo {50/55/60/65/70/75/80/85/90/95}% danni ai nemici circostanti.\n\nTags: Primaria, Mutaforma, Orso Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "精神力消費量: {#}\n幸運の一撃発生率: 33%\n人熊に変身して地面を殴りつけ、周囲の敵に{50/55/60/65/70/75/80/85/90/95}%のダメージを与える。\n\nTags: コア, 変身, 人熊, 精神力, ダメージ, 物理.",
			"koKR": "소모: {#}\n행운의 적중 확률: 33%\n곰인간으로 변신하고 땅을 내려쳐 주위 적들에게 {50/55/60/65/70/75/80/85/90/95}%의 피해를 줍니다.\n\nTags: 핵심, 변신, 곰인간, 영력, 피해, 물리.",
			"plPL": "Koszt: {#} pkt. siły duchowej.\nSzansa na szczęśliwy traf: 33%\nPrzemieniasz się w niedźwiedziołaka i uderzasz w ziemię, zadając {50/55/60/65/70/75/80/85/90/95}% pkt. obrażeń wrogom wokół.\n\nTags: Główne, Zmiennokształtność, Niedźwiedziołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Custo de espírito: {#}\nChance de Golpe de Sorte: 33%\nTransforma-se em um urso e bate no chão, causando {50/55/60/65/70/75/80/85/90/95}% de dano a inimigos ao redor.\n\nTags: Principal, Metamorfose, Urso, Espírito, Dano, Física.",
			"ruRU": "Затраты духа: {#} ед.\nВероятность удачного удара: 33%.\nВы принимаете облик медведя и с силой бьете по земле, нанося противникам вокруг {50/55/60/65/70/75/80/85/90/95}% ед. урона.\n\nTags: Основное, Смена облика, Медведь, Дух, Урон, Физический урон.",
			"zhCN": "灵力消耗: {#}\n幸运一击几率: 33%\n变成熊人并猛击地面, 对周围敌人造成 {50/55/60/65/70/75/80/85/90/95}% 点伤害。\n\nTags: 核心, 变形, 熊人, 灵力, 伤害, 物理.",
			"zhTW": "靈力消耗:{#}\n幸運觸發機率:33%\n變身為熊人猛擊地面,對附近的敵人造成 {50/55/60/65/70/75/80/85/90/95}% 點傷害。\n\nTags: 核心, 變形, 熊人, 靈力, 傷害, 物理."
},
		id: 24,
		maxPoints: 5,
		values: [ "35" ],
		x: -662.09,
		y: 108.51
	},
	"Enhanced Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Pulverize", "Primal Pulverize", "Raging Pulverize" ],
		description: `Your next Pulverize will Overpower every 12 seconds while you remain Healthy.

Tags: Core, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbessertes Pulverisieren",
			"esES": "Pulverizar mejorado",
			"esMX": "Pulverización Potenciada",
			"frFR": "Pulvérisation renforcée",
			"itIT": "Sminuzzamento Rinforzato",
			"jaJP": "粉砕(強化版)",
			"koKR": "강화된 쳐부수기",
			"plPL": "Wzmocnione Spustoszenie",
			"ptBR": "Pulverizar Aperfeiçoado",
			"ruRU": "Усиленное сокрушение",
			"zhCN": "强化粉碎",
			"zhTW": "強化粉碎"
},
		descriptionLocalized: {
			"deDE": "Euer nächstes Pulverisieren wird alle 12 Sek. überwältigen, solange Ihr gesund bleibt.\n\nTags: Kern, Gestaltwandeln, Werbär, Geisteskraft, Schaden, Physisch.",
			"esES": "Tu siguiente Pulverizar arrollará cada 12 s mientras permanezcas en estado saludable.\n\nTags: Principal, Cambio de forma, Hombre oso, Espíritu, Daño, Física.",
			"esMX": "Tu siguiente Pulverizar abrumará cada 12 segundos mientras estás saludable.\n\nTags: Principal, Metamorfosis, Hombre oso, Espíritu, Daño, Física.",
			"frFR": "Votre prochaine Pulvérisation accablera les cibles toutes les 12 s tant que vous restez en bonne santé.\n\nTags: Principale, Métamorphose, Ursoïde, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Il tuo prossimo Sminuzzamento causerà Sopraffazione ogni 12 secondi finché resti in salute.\n\nTags: Primaria, Mutaforma, Orso Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "健全状態でいると、12秒ごとに次に使用する〈粉砕〉がオーバーパワーになる。\n\nTags: コア, 変身, 人熊, 精神力, ダメージ, 物理.",
			"koKR": "건강 상태가 유지되는 동안 다음 쳐부수기가 12초마다 제압 효과를 얻습니다.\n\nTags: 핵심, 변신, 곰인간, 영력, 피해, 물리.",
			"plPL": "Twoje następne Spustoszenie będzie przytłaczać co 12 sek., kiedy będziesz w pełni sił.\n\nTags: Główne, Zmiennokształtność, Niedźwiedziołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Seu próximo Pulverizar desfere Golpe Brutal a cada 12 segundos enquanto você permanecer saudável.\n\nTags: Principal, Metamorfose, Urso, Espírito, Dano, Física.",
			"ruRU": "Следующее \"Сокрушение\" будет наносить подавляющий урон раз в 12 сек., пока у вас высокий уровень здоровья.\n\nTags: Основное, Смена облика, Медведь, Дух, Урон, Физический урон.",
			"zhCN": "健康状态每持续 12 秒, 你的下一次粉碎 就会造成压制。\n\nTags: 核心, 变形, 熊人, 灵力, 伤害, 物理.",
			"zhTW": "當你在健康狀態下,每 12 秒使你的下一個粉碎獲得壓制效果。\n\nTags: 核心, 變形, 熊人, 靈力, 傷害, 物理."
},
		id: 25,
		maxPoints: 1,
		x: -1030.275,
		y: 169.15
	},
	"Primal Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Enhanced Pulverize" ],
		description: `Enemies hit with Pulverize deal 20% reduced damage for 4 seconds.

Tags: Core, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Urtümliches Pulverisieren",
			"esES": "Pulverizar primigenio",
			"esMX": "Pulverización Primigenia",
			"frFR": "Pulvérisation primordiale",
			"itIT": "Sminuzzamento Primordiale",
			"jaJP": "粉砕(原始)",
			"koKR": "태초의 쳐부수기",
			"plPL": "Pierwotne Spustoszenie",
			"ptBR": "Pulverizar Primevo",
			"ruRU": "Первозданное сокрушение",
			"zhCN": "原始粉碎",
			"zhTW": "原始粉碎"
},
		descriptionLocalized: {
			"deDE": "Reduziert den verursachten Schaden von Gegnern, die mit Pulverisieren getroffen wurden, 4 Sek. lang um 20%.\n\nTags: Kern, Gestaltwandeln, Werbär, Geisteskraft, Schaden, Physisch.",
			"esES": "Los enemigos golpeados por Pulverizar infligen un 20% menos de daño durante 4 s.\n\nTags: Principal, Cambio de forma, Hombre oso, Espíritu, Daño, Física.",
			"esMX": "Los enemigos golpeados con Pulverizar infligen un 20% menos de daño durante 4 segundos.\n\nTags: Principal, Metamorfosis, Hombre oso, Espíritu, Daño, Física.",
			"frFR": "Les cibles touchées par Pulvérisation infligent des dégâts réduits de 20% pendant 4 s.\n\nTags: Principale, Métamorphose, Ursoïde, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "I nemici colpiti da Sminuzzamento infliggono il 20% di danni in meno per 4 s.\n\nTags: Primaria, Mutaforma, Orso Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "〈粉砕〉が命中した敵から受けるダメージを4秒間20%軽減する。\n\nTags: コア, 変身, 人熊, 精神力, ダメージ, 物理.",
			"koKR": "쳐부수기에 적중당한 적은 4초 동안 공격력이 20% 감소합니다.\n\nTags: 핵심, 변신, 곰인간, 영력, 피해, 물리.",
			"plPL": "Wrogowie trafieni Spustoszeniem zadają obrażenia zmniejszone o 20% przez 4 sek.\n\nTags: Główne, Zmiennokształtność, Niedźwiedziołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Inimigos atingidos por Pulverizar causam 20% de dano reduzido por 4 segundos.\n\nTags: Principal, Metamorfose, Urso, Espírito, Dano, Física.",
			"ruRU": "Противники, пораженные \"Сокрушением\", наносят на 20% меньше урона в течение 4 сек.\n\nTags: Основное, Смена облика, Медведь, Дух, Урон, Физический урон.",
			"zhCN": "粉碎命中敌人时使其造成的伤害降低 20%, 持续 4 秒。\n\nTags: 核心, 变形, 熊人, 灵力, 伤害, 物理.",
			"zhTW": "被粉碎擊中的敵人造成的傷害降低 20%,持續 4 秒。\n\nTags: 核心, 變形, 熊人, 靈力, 傷害, 物理."
},
		id: 26,
		maxPoints: 1,
		x: -1158.38,
		y: 294.075
	},
	"Raging Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Enhanced Pulverize" ],
		description: `Enemies Overpowered by Pulverize are Stunned for 2 seconds.

Tags: Core, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Tobendes Pulverisieren",
			"esES": "Pulverizar iracundo",
			"esMX": "Pulverización Iracunda",
			"frFR": "Pulvérisation enragée",
			"itIT": "Sminuzzamento Furente",
			"jaJP": "粉砕(猛烈)",
			"koKR": "격렬한 쳐부수기",
			"plPL": "Szaleńcze Spustoszenie",
			"ptBR": "Pulverizar Raivoso",
			"ruRU": "Бушующее сокрушение",
			"zhCN": "暴怒粉碎",
			"zhTW": "盛怒粉碎"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Pulverisieren überwältigt wurden, sind 2 Sek. lang betäubt.\n\nTags: Kern, Gestaltwandeln, Werbär, Geisteskraft, Schaden, Physisch.",
			"esES": "Los enemigos arrollados por Pulverizar quedan aturdidos durante 2 s.\n\nTags: Principal, Cambio de forma, Hombre oso, Espíritu, Daño, Física.",
			"esMX": "Los enemigos abrumados por Pulverizar quedan aturdidos durante 2 segundos.\n\nTags: Principal, Metamorfosis, Hombre oso, Espíritu, Daño, Física.",
			"frFR": "Les cibles accablées par Pulvérisation sont étourdies pendant 2 s.\n\nTags: Principale, Métamorphose, Ursoïde, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "I nemici che hanno subito Sopraffazione da Sminuzzamento sono storditi per 2 s.\n\nTags: Primaria, Mutaforma, Orso Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "〈粉砕〉によるオーバーパワーを受けた敵が2秒間スタン状態になる。\n\nTags: コア, 変身, 人熊, 精神力, ダメージ, 物理.",
			"koKR": "쳐부수기로 제압된 적이 2초 동안 기절합니다.\n\nTags: 핵심, 변신, 곰인간, 영력, 피해, 물리.",
			"plPL": "Wrogowie przytłoczeni z użyciem Spustoszenia zostają ogłuszeni na 2 sek.\n\nTags: Główne, Zmiennokształtność, Niedźwiedziołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Inimigos que receberem Golpe Brutal com Pulverizar são atordoados por 2 segundos.\n\nTags: Principal, Metamorfose, Urso, Espírito, Dano, Física.",
			"ruRU": "Когда \"Сокрушение\" наносит противникам подавляющий урон, они оглушаются на 2 сек.\n\nTags: Основное, Смена облика, Медведь, Дух, Урон, Физический урон.",
			"zhCN": "敌人在被具有压制效果的粉碎 击中时昏迷 2 秒。\n\nTags: 核心, 变形, 熊人, 灵力, 伤害, 物理.",
			"zhTW": "當敵人被有壓制效果的粉碎擊中時,會昏迷 2 秒。\n\nTags: 核心, 變形, 熊人, 靈力, 傷害, 物理."
},
		id: 27,
		maxPoints: 1,
		x: -1271.72,
		y: 125.535
	},
	"Tornado": {
		connections: [ "Spirit", "Enhanced Tornado" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: 8%
Conjure a swirling tornado that deals {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage.

Tags: Core, Nature Magic, Storm, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Tornado",
			"esES": "Tornado",
			"esMX": "Tornado",
			"frFR": "Tornade",
			"itIT": "Tornado",
			"jaJP": "竜巻",
			"koKR": "회오리바람",
			"plPL": "Tornado",
			"ptBR": "Tornado",
			"ruRU": "Смерч",
			"zhCN": "龙卷风",
			"zhTW": "龍捲風"
},
		descriptionLocalized: {
			"deDE": "Geisteskraftkosten: {#}\nGlückstrefferchance: 8%\nBeschwört einen wirbelnden Tornado, der {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% Schaden verursacht.\n\nTags: Kern, Naturmagie, Sturm, Geisteskraft, Schaden, Physisch.",
			"esES": "Coste de espíritu: {#}\nProbabilidad de golpe de suerte: 8%\nCreas un tornado que inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de daño.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Espíritu, Daño, Física.",
			"esMX": "Costo de Espíritu: {#}\nProbabilidad de golpe afortunado: 8%\nConjuras un tornado que inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de daño.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Espíritu, Daño, Física.",
			"frFR": "Coût en esprit: {#}\nChances d'obtenir un coup de chance: 8%\nVous invoquez une tornade qui inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% points de dégâts.\n\nTags: Principale, Magie naturelle, Tempête, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Costo in spirito: {#}\nProbabilità di colpo fortunato: 8%\nInvochi un tornado che infligge {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% danni.\n\nTags: Primaria, Magia naturale, Tempesta, Spirito, Danni, Fisico.",
			"jaJP": "精神力消費量: {#}\n幸運の一撃発生率: 8%\n渦巻く竜巻を呼び出して{35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%のダメージを与える。\n\nTags: コア, 自然魔法, 嵐, 精神力, ダメージ, 物理.",
			"koKR": "소모: 영력 {#}\n행운의 적중 확률: 8%\n소용돌이치는 회오리바람을 생성하여 {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%의 피해를 줍니다.\n\nTags: 핵심, 자연 마법, 폭풍, 영력, 피해, 물리.",
			"plPL": "Koszt: {#} pkt. siły duchowej\nSzansa na szczęśliwy traf: 8%\nPrzyzywasz wirujące tornado, które zadaje {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% pkt. obrażeń.\n\nTags: Główne, Magia Natury, Burza, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Custo de espírito: {#}\nChance de Golpe de Sorte: 8%\nConjura um tornado rodopiante que causa {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de dano.\n\nTags: Principal, Magia da Natureza, Tempestade, Espírito, Dano, Física.",
			"ruRU": "Затраты духа: {#} ед.\nВероятность удачного удара: 8%.\nВы создаете кружащийся смерч, который наносит {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% ед. урона.\n\nTags: Основное, Силы природы, Буря, Дух, Урон, Физический урон.",
			"zhCN": "灵力消耗: {#}\n幸运一击几率: 8%\n召唤旋转的龙卷风, 造成 {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% 点伤害。\n\nTags: 核心, 自然魔法, 风暴, 灵力, 伤害, 物理.",
			"zhTW": "靈力消耗:{#}\n幸運觸發機率:8%\n呼喚旋轉的龍捲風,造成 {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% 點傷害。\n\nTags: 核心, 自然魔法, 風暴, 靈力, 傷害, 物理."
},
		id: 28,
		maxPoints: 5,
		values: [ "40" ],
		x: -658.16,
		y: -95.45
	},
	"Enhanced Tornado": {
		baseSkill: "Tornado",
		connections: [ "Tornado", "Raging Tornado", "Primal Tornado" ],
		description: `Each time you cast Tornado, you have a 20% chance to spawn an additional Tornado.

Tags: Core, Nature Magic, Storm, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Tornado",
			"esES": "Tornado mejorado",
			"esMX": "Tornado Potenciado",
			"frFR": "Tornade renforcée",
			"itIT": "Tornado Rinforzato",
			"jaJP": "竜巻(強化版)",
			"koKR": "강화된 회오리바람",
			"plPL": "Wzmocnione Tornado",
			"ptBR": "Tornado Aperfeiçoado",
			"ruRU": "Усиленный смерч",
			"zhCN": "强化龙卷风",
			"zhTW": "強化龍捲風"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Ihr Tornado wirkt, besteht eine Chance von 20%, einen zusätzlichen Tornado zu erschaffen.\n\nTags: Kern, Naturmagie, Sturm, Geisteskraft, Schaden, Physisch.",
			"esES": "Cada vez que lanzas Tornado, tienes un 20% de probabilidad de generar un tornado más.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Espíritu, Daño, Física.",
			"esMX": "Cada vez que lanzas Tornado, tienes un 20% de probabilidad de crear un Tornado adicional.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Espíritu, Daño, Física.",
			"frFR": "Chaque fois que vous utilisez Tornade, vous avez 20% de chances de faire apparaître une Tornade supplémentaire.\n\nTags: Principale, Magie naturelle, Tempête, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Ogni volta che lanci Tornado, hai una probabilità del 20% di far comparire un ulteriore Tornado.\n\nTags: Primaria, Magia naturale, Tempesta, Spirito, Danni, Fisico.",
			"jaJP": "〈竜巻〉を使用するたびに、20%の確率でさらに1つ〈竜巻〉を呼び出せる。\n\nTags: コア, 自然魔法, 嵐, 精神力, ダメージ, 物理.",
			"koKR": "회오리바람을 시전할 때마다 20% 확률로 추가 회오리바람을 생성합니다.\n\nTags: 핵심, 자연 마법, 폭풍, 영력, 피해, 물리.",
			"plPL": "Za każdym razem, gdy używasz Tornada, masz 20% szans na stworzenie dodatkowego Tornada.\n\nTags: Główne, Magia Natury, Burza, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Sempre que lançar Tornado, você tem 20% de chance de gerar um Tornado adicional.\n\nTags: Principal, Magia da Natureza, Tempestade, Espírito, Dano, Física.",
			"ruRU": "Применяя умение \"Смерч\", вы с вероятностью 20% можете призвать еще один смерч.\n\nTags: Основное, Силы природы, Буря, Дух, Урон, Физический урон.",
			"zhCN": "每次施放龙卷风时, 你都有 20% 几率额外召唤一股龙卷风。\n\nTags: 核心, 自然魔法, 风暴, 灵力, 伤害, 物理.",
			"zhTW": "每次施放龍捲風時,有 20% 機率額外生成一個龍捲風。\n\nTags: 核心, 自然魔法, 風暴, 靈力, 傷害, 物理."
},
		id: 29,
		maxPoints: 1,
		x: -1022.51,
		y: -146.015
	},
	"Raging Tornado": {
		baseSkill: "Tornado",
		connections: [ "Enhanced Tornado" ],
		description: `Enemies hit with Tornado have a 10% chance to become Vulnerable for 3 seconds.

Tags: Core, Nature Magic, Storm, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Tobender Tornado",
			"esES": "Tornado iracundo",
			"esMX": "Tornado Iracundo",
			"frFR": "Tornade enragée",
			"itIT": "Tornado Furente",
			"jaJP": "竜巻(猛烈)",
			"koKR": "격렬한 회오리바람",
			"plPL": "Szaleńcze Tornado",
			"ptBR": "Tornado Raivoso",
			"ruRU": "Бушующий смерч",
			"zhCN": "暴怒龙卷风",
			"zhTW": "盛怒龍捲風"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Tornado getroffen werden, haben eine Chance von 10%, 3 Sek. lang verwundbar zu werden.\n\nTags: Kern, Naturmagie, Sturm, Geisteskraft, Schaden, Physisch.",
			"esES": "Los enemigos golpeados con Tornado tienen un 10% de probabilidad de volverse vulnerables durante 3 s.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Espíritu, Daño, Física.",
			"esMX": "Los enemigos golpeados con Tornado tienen un 10% de probabilidad de volverse vulnerables durante 3 segundos.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Espíritu, Daño, Física.",
			"frFR": "Les cibles touchées par Tornade ont 10% de chances de devenir vulnérables pendant 3 s.\n\nTags: Principale, Magie naturelle, Tempête, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "I nemici colpiti da Tornado hanno una probabilità del 10% di diventare vulnerabili per 3 s.\n\nTags: Primaria, Magia naturale, Tempesta, Spirito, Danni, Fisico.",
			"jaJP": "〈竜巻〉が命中した敵は10%の確率で3秒間、脆弱状態になる。\n\nTags: コア, 自然魔法, 嵐, 精神力, ダメージ, 物理.",
			"koKR": "회오리바람에 적중된 적이 10% 확률로 3초 동안 취약 상태가 됩니다.\n\nTags: 핵심, 자연 마법, 폭풍, 영력, 피해, 물리.",
			"plPL": "Istnieje 10% szans, że wrogowie trafieni Tornadem zostaną odsłonięci na 3 sek.\n\nTags: Główne, Magia Natury, Burza, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Inimigos atingidos com Tornado têm 10% de chance de se tornarem vulneráveis por 3 segundos.\n\nTags: Principal, Magia da Natureza, Tempestade, Espírito, Dano, Física.",
			"ruRU": "\"Смерч\" с вероятностью 10% делает пораженных противников уязвимыми на 3 сек.\n\nTags: Основное, Силы природы, Буря, Дух, Урон, Физический урон.",
			"zhCN": "被龙卷风命中的敌人有 10% 几率陷入易伤状态, 持续 3 秒。\n\nTags: 核心, 自然魔法, 风暴, 灵力, 伤害, 物理.",
			"zhTW": "被龍捲風擊中的敵人有 10% 機率易傷,持續 3 秒。\n\nTags: 核心, 自然魔法, 風暴, 靈力, 傷害, 物理."
},
		id: 30,
		maxPoints: 1,
		x: -1245.89,
		y: -85.1
	},
	"Primal Tornado": {
		baseSkill: "Tornado",
		connections: [ "Enhanced Tornado" ],
		description: `Enemies damaged by Tornado are Slowed by 8% for 3 seconds, stacking up to 40%.

Tags: Core, Nature Magic, Storm, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Urtümlicher Tornado",
			"esES": "Tornado primigenio",
			"esMX": "Tornado Primigenio",
			"frFR": "Tornade primordiale",
			"itIT": "Tornado Primordiale",
			"jaJP": "竜巻(原始)",
			"koKR": "태초의 회오리바람",
			"plPL": "Pierwotne Tornado",
			"ptBR": "Tornado Primevo",
			"ruRU": "Первозданный смерч",
			"zhCN": "原始龙卷风",
			"zhTW": "原始龍捲風"
},
		descriptionLocalized: {
			"deDE": "Gegner, die durch Tornado Schaden erleiden, werden 3 Sek. lang um 8% verlangsamt, bis maximal 40%.\n\nTags: Kern, Naturmagie, Sturm, Geisteskraft, Schaden, Physisch.",
			"esES": "Los enemigos dañados por los tornados quedan ralentizados un 8% durante 3 s. Se acumula hasta un 40%.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Espíritu, Daño, Física.",
			"esMX": "Los enemigos dañados por Tornado se ralentizan un 8% durante 3 segundos. El efecto puede acumularse hasta un 40%.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Espíritu, Daño, Física.",
			"frFR": "Les cibles blessées par Tornade sont ralenties de 8% pendant 3 s, jusqu'à un maximum de 40%.\n\nTags: Principale, Magie naturelle, Tempête, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "I nemici danneggiati da Tornado sono rallentati del 8% per 3 s, fino a un massimo del 40%.\n\nTags: Primaria, Magia naturale, Tempesta, Spirito, Danni, Fisico.",
			"jaJP": "〈竜巻〉によりダメージを受けた敵の移動速度が3秒間8%低下する。この効果は最大40%まで蓄積する。\n\nTags: コア, 自然魔法, 嵐, 精神力, ダメージ, 物理.",
			"koKR": "회오리바람에 피해를 받은 적은 3초 동안 8% 감속되며, 이 효과는 최대 40%까지 중첩됩니다.\n\nTags: 핵심, 자연 마법, 폭풍, 영력, 피해, 물리.",
			"plPL": "Wrogowie zranieni Tornadem zostają spowolnieni o 8% na 3 sek., maksymalnie do 40%.\n\nTags: Główne, Magia Natury, Burza, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Inimigos atingidos por Tornado são desacelerados em 8% por 3 segundos, acumulando até 40%.\n\nTags: Principal, Magia da Natureza, Tempestade, Espírito, Dano, Física.",
			"ruRU": "Нанеся урон противникам, \"Смерч\" замедляет их на 8% на 3 сек. Эффект суммируется до 40%.\n\nTags: Основное, Силы природы, Буря, Дух, Урон, Физический урон.",
			"zhCN": "龙卷风对敌人造成伤害会使其减速 8%, 持续 3 秒, 最多叠加至 40%。\n\nTags: 核心, 自然魔法, 风暴, 灵力, 伤害, 物理.",
			"zhTW": "被龍捲風傷害的敵人會緩速 8%,持續 3 秒,最多可堆疊至 40%。\n\nTags: 核心, 自然魔法, 風暴, 靈力, 傷害, 物理."
},
		id: 31,
		maxPoints: 1,
		x: -1165.365,
		y: -263.91
	},
	"Shred": {
		connections: [ "Spirit", "Enhanced Shred" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: 20%
Shapeshift into a Werewolf and perform a trio of combo attacks:
• 1st Attack: Dash towards the target and deal {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage.
• 2nd Attack: Deal {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage.
• 3rd Attack: Perform a larger finishing move dealing {60/66/72/78/84/90/96/102/108/114}% damage.

Tags: Core, Shapeshifting, Werewolf, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Zerfetzen",
			"esES": "Despedazar",
			"esMX": "Despedazar",
			"frFR": "Déchiquetage",
			"itIT": "Dilaniamento",
			"jaJP": "切り裂き",
			"koKR": "칼날 발톱",
			"plPL": "Rozszarpanie",
			"ptBR": "Retalhar",
			"ruRU": "Разрывание",
			"zhCN": "利爪撕扯",
			"zhTW": "撕碎"
},
		descriptionLocalized: {
			"deDE": "Geisteskraftkosten: {#}\nGlückstrefferchance: 20%\nVerwandelt Euch in einen Werwolf und führt eine Kombo aus drei Angriffen:\n• 1. Angriff: Stürmt auf das Ziel zu und verursacht {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% Schaden.\n• 2. Angriff: Verursacht {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% Schaden.\n• 3. Angriff: Führt einen mächtigen Finishing-Move aus, der {60/66/72/78/84/90/96/102/108/114}% Schaden verursacht.\n\nTags: Kern, Gestaltwandeln, Werwolf, Geisteskraft, Schaden, Physisch.",
			"esES": "Coste de espíritu: {#}\nProbabilidad de golpe de suerte: 20%\nTe transformas en un hombre lobo y ejecutas un combo triple:\n• Primer ataque:Corres hacia el objetivo e infliges {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño.\n• Segundo ataque: Infliges {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de daño.\n• Tercer ataque: Ejecutas un remate mayor que inflige {60/66/72/78/84/90/96/102/108/114}% de daños.\n\nTags: Principal, Cambio de forma, Hombre lobo, Espíritu, Daño, Física.",
			"esMX": "Costo de Espíritu: {#}\nProbabilidad de golpe afortunado: 20%\nCambias de forma a un hombre lobo y realizas un trío de ataques de combo:\n• Primer ataque: Arremete contra el objetivo e inflige {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño.\n• Segundo ataque: Inflige {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de daño.\n• Tercer ataque: Realizas un ataque final mayor que inflige {60/66/72/78/84/90/96/102/108/114}% de daño.\n\nTags: Principal, Metamorfosis, Hombre lobo, Espíritu, Daño, Física.",
			"frFR": "Coût en esprit: {#}\nChances d'obtenir un coup de chance: 20%\nVous vous transformez en lycanthrope et effectuez un combo de trois attaques :\n• 1re attaque: Vous foncez sur la cible et infligez {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% points de dégâts.\n• 2e attaque: Vous infligez {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% points de dégâts.\n• 3e attaque: Vous effectuez un grand coup final qui inflige {60/66/72/78/84/90/96/102/108/114}% points de dégâts.\n\nTags: Principale, Métamorphose, Lycanthrope, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Costo in spirito: {#}\nProbabilità di colpo fortunato: 20%\nMuti in un Lupo Mannaro ed esegui tre attacchi:\n• Primo attacco: Scatti verso il bersaglio e infliggi {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% danni.\n• Secondo attacco: Infliggi {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% danni.\n• Terzo attacco: Esegui un'ampia mossa finale che infligge {60/66/72/78/84/90/96/102/108/114}% danni.\n\nTags: Primaria, Mutaforma, Lupo Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "精神力消費量: {#}\n幸運の一撃発生率: 20%\n人狼に変身して三段階のコンボ攻撃を行う:\n• 1回目の攻撃: {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%ダメージを与える。\n• 2回目の攻撃: {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%ダメージを与える。\n• 3回目の攻撃: 強力な必殺技を放ち、{60/66/72/78/84/90/96/102/108/114}%ダメージを与える。\n\nTags: コア, 変身, 人狼, 精神力, ダメージ, 物理.",
			"koKR": "소모: 영력 {#}\n행운의 적중 확률: 20%\n늑대인간으로 변신하여 3번의 연계 공격을 가합니다.\n• 1번째 공격: {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%의 피해를 줍니다.\n• 2번째 공격: {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}%의 피해를 줍니다.\n• 3번째 공격: 더 넓은 범위에 필살기를 가해 {60/66/72/78/84/90/96/102/108/114}%의 피해를 줍니다.\n\nTags: 핵심, 변신, 늑대인간, 영력, 피해, 물리.",
			"plPL": "Koszt: {#} pkt. siły duchowej\nSzansa na szczęśliwy traf: 20%\nPrzemieniasz się w wilkołaka, pędzisz do celu i wykonujesz kombinację trzech ataków:\n• 1 atak: Pęd w kierunku celu i zadajesz {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% pkt. obrażeń.\n• 2 atak: Zadajesz {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% pkt. obrażeń.\n• 3 atak: Wykonujesz potężny cios kończący, który zadaje {60/66/72/78/84/90/96/102/108/114}% pkt. obrażeń.\n\nTags: Główne, Zmiennokształtność, Wilkołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Custo de espírito: {#}\nChance de Golpe de Sorte: 20%\nTransforma-se em um lobisomem e realiza três ataques em combo:\n• 1º ataque:Avança contra o alvo e causa {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de dano.\n• 2º ataque: Causa {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% de dano.\n• 3º ataque: Realiza uma finalização maior, causando {60/66/72/78/84/90/96/102/108/114}% de dano.\n\nTags: Principal, Metamorfose, Lobisomem, Espírito, Dano, Física.",
			"ruRU": "Затраты духа: {#}\nВероятность удачного удара: 20%\nВы принимаете облик волка и проводите серию из трех атак:\n• 1-я атака: совершает рывок к цели и наносит {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% ед. урона.\n• 2-я атака: наносит {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% ед. урона.\n• 3-я атака: мощный завершающий прием наносит {60/66/72/78/84/90/96/102/108/114}% ед. урона.\n\nTags: Основное, Смена облика, Облик волка, Дух, Урон, Физический урон.",
			"zhCN": "灵力消耗: {#}\n幸运一击几率: 20%\n变成狼人并发动三连击:\n• 第一次攻击: 朝目标疾奔并造成 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% 点伤害。\n• 第二次攻击: 造成 {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% 点伤害。\n• 第三次攻击: 发动一次更强大的终结技能, 造成 {60/66/72/78/84/90/96/102/108/114}% 点伤害。\n\nTags: 核心, 变形, 狼人, 灵力, 伤害, 物理.",
			"zhTW": "靈力消耗:{#}\n幸運觸發機率:20%\n變身為狼人並使出三連擊:\n• 第 1 次攻擊:衝向目標並造成 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% 點傷害。\n• 第 2 次攻擊:造成 {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% 點傷害。\n• 第 3 次攻擊:使出強力終結攻擊,造成 {60/66/72/78/84/90/96/102/108/114}% 點傷害。\n\nTags: 核心, 變形, 狼人, 靈力, 傷害, 物理."
},
		id: 33,
		maxPoints: 5,
		values: [ "35" ],
		x: -446.83,
		y: 275.82
	},
	"Enhanced Shred": {
		baseSkill: "Shred",
		connections: [ "Shred", "Raging Shred", "Primal Shred" ],
		description: `Shred gains +30% Attack Speed and Heals for 1% of your Maximum Life if an enemy is struck.

Tags: Core, Shapeshifting, Werewolf, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbessertes Zerfetzen",
			"esES": "Despedazar mejorado",
			"esMX": "Despedazamiento Potenciado",
			"frFR": "Déchiquetage renforcé",
			"itIT": "Dilaniamento Rinforzato",
			"jaJP": "切り裂き(強化版)",
			"koKR": "강화된 칼날 발톱",
			"plPL": "Wzmocnione Rozszarpanie",
			"ptBR": "Retalhar Aperfeiçoado",
			"ruRU": "Усиленное разрывание",
			"zhCN": "强化利爪撕扯",
			"zhTW": "強化撕碎"
},
		descriptionLocalized: {
			"deDE": "Zerfetzen erhält +30% Angriffsgeschwindigkeit und heilt um 1% Eures maximalen Lebens, wenn ein Ziel getroffen wird.\n\nTags: Kern, Gestaltwandeln, Werwolf, Geisteskraft, Schaden, Physisch.",
			"esES": "Despedazar obtiene un +30% de velocidad de ataque y te cura un 1% de tu vida máxima si golpea a un enemigo.\n\nTags: Principal, Cambio de forma, Hombre lobo, Espíritu, Daño, Física.",
			"esMX": "Despedazar obtiene un +30% de velocidad de ataque y sana un 1% de tu vida máxima si golpea a un enemigo.\n\nTags: Principal, Metamorfosis, Hombre lobo, Espíritu, Daño, Física.",
			"frFR": "La vitesse d'attaque de Déchiquetage est augmentée de +30% et Déchiquetage vous rend 1% de votre maximum de points de vie lorsqu'une cible est touchée.\n\nTags: Principale, Métamorphose, Lycanthrope, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Dilaniamento ottiene una velocità d'attacco del +30% e cura per il 1% della tua Vita massima quando viene colpito un nemico.\n\nTags: Primaria, Mutaforma, Lupo Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "〈切り裂き〉の攻撃速度が+30%上昇し、敵に命中した場合、自身のライフ最大値の1%にあたるの回復効果が発生する。\n\nTags: コア, 変身, 人狼, 精神力, ダメージ, 物理.",
			"koKR": "칼날 발톱의 공격 속도가 +30%만큼 증가하고 적에게 공격이 적중하면 최대 생명력의 1%만큼 생명력을 회복합니다.\n\nTags: 핵심, 변신, 늑대인간, 영력, 피해, 물리.",
			"plPL": "Rozszarpanie zwiększa swoją szybkość ataku o +30% i przywraca ci 1% maksymalnego zdrowia, jeśli wróg zostanie trafiony.\n\nTags: Główne, Zmiennokształtność, Wilkołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "Retalhar recebe +30% de velocidade de ataque e cura 1% da sua vida máxima se um inimigo for atingido.\n\nTags: Principal, Metamorfose, Lobisomem, Espírito, Dano, Física.",
			"ruRU": "Скорость атаки \"Разрывания\" повышается на 30%. Поражая противника, умение восстанавливает 1% максимального запаса здоровья.\n\nTags: Основное, Смена облика, Облик волка, Дух, Урон, Физический урон.",
			"zhCN": "利爪撕扯在命中一名敌人后攻击速度提高 +30%, 并为你恢复 1% 生命上限。\n\nTags: 核心, 变形, 狼人, 灵力, 伤害, 物理.",
			"zhTW": "擊中敵人時,撕碎獲得 +30% 攻擊速度,並恢復生命值上限的 1%。\n\nTags: 核心, 變形, 狼人, 靈力, 傷害, 物理."
},
		id: 34,
		maxPoints: 1,
		x: -710.395,
		y: 428.735
	},
	"Raging Shred": {
		baseSkill: "Shred",
		connections: [ "Enhanced Shred" ],
		description: `Shred's third combo attack is larger and applies an additional {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% Poisoning damage over 5 seconds.

Tags: Core, Shapeshifting, Werewolf, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Tobendes Zerfetzen",
			"esES": "Despedazar iracundo",
			"esMX": "Despedazamiento Iracundo",
			"frFR": "Déchiquetage enragé",
			"itIT": "Dilaniamento Furente",
			"jaJP": "切り裂き(猛烈)",
			"koKR": "격렬한 칼날 발톱",
			"plPL": "Szaleńcze Rozszarpanie",
			"ptBR": "Retalhar Raivoso",
			"ruRU": "Бушующее разрывание",
			"zhCN": "暴怒利爪撕扯",
			"zhTW": "盛怒撕碎"
},
		descriptionLocalized: {
			"deDE": "Der dritte Komboangriff von Zerfetzen ist größer und verursacht im Verlauf von 5 Sek. zusätzlich {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% Giftschaden.\n\nTags: Kern, Gestaltwandeln, Werwolf, Geisteskraft, Schaden, Physisch.",
			"esES": "El tercer ataque de combo de Despedazar es más poderoso e inflige {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% de daño de veneno adicional durante 5 s.\n\nTags: Principal, Cambio de forma, Hombre lobo, Espíritu, Daño, Física.",
			"esMX": "El tercer ataque de combo de Despedazar es mayor y aplica {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% de daño de veneno adicional durante 5 segundos.\n\nTags: Principal, Metamorfosis, Hombre lobo, Espíritu, Daño, Física.",
			"frFR": "La troisième attaque du combo de Déchiquetage est plus ample et inflige {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% points de dégâts supplémentaires de poison en 5 s.\n\nTags: Principale, Métamorphose, Lycanthrope, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Il terzo attacco in combo di Dilaniamento è più ampio e infligge {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% danni da veleno aggiuntivi in 5 s.\n\nTags: Primaria, Mutaforma, Lupo Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "〈切り裂き〉の第3コンボの攻撃が強力になり、5秒間かけて{51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}%の毒ダメージを与えるようになる。\n\nTags: コア, 変身, 人狼, 精神力, ダメージ, 物理.",
			"koKR": "칼날 발톱의 3번째 연계 공격을 더 넓은 범위에 가하여 추가로 5초에 걸쳐 {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}%의 중독 피해를 줍니다.\n\nTags: 핵심, 변신, 늑대인간, 영력, 피해, 물리.",
			"plPL": "Trzeci atak w kombinacji Rozszarpania jest potężniejszy i wywołuje u wrogów {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% obrażeń od zatrucia w ciągu 5 sek.\n\nTags: Główne, Zmiennokształtność, Wilkołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "O terceiro ataque de combo de Retalhar é maior e aplica dano venenoso de {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% ao longo de 5 segundos.\n\nTags: Principal, Metamorfose, Lobisomem, Espírito, Dano, Física.",
			"ruRU": "Третья атака \"Разрывания\" применяет к противникам мощный яд, наносящий еще {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% ед. урона от отравления за 5 сек.\n\nTags: Основное, Смена облика, Облик волка, Дух, Урон, Физический урон.",
			"zhCN": "利爪撕扯的第三次连击更强大, 并在 5 秒内额外造成 {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% 点毒素伤害。\n\nTags: 核心, 变形, 狼人, 灵力, 伤害, 物理.",
			"zhTW": "撕碎的第三次連擊攻擊傷害提高,並附帶在 5 秒內造成 {51/56/61/66.5/71.5/76.5/81.5/86.5/92/97}% 點中毒傷害。\n\nTags: 核心, 變形, 狼人, 靈力, 傷害, 物理."
},
		id: 36,
		maxPoints: 1,
		x: -968.945,
		y: 450.595
	},
	"Primal Shred": {
		baseSkill: "Shred",
		connections: [ "Enhanced Shred" ],
		description: `Shred's second and third attacks also perform a dash. In addition, Shred's Critical Strike Damage is increased by x20%.

Tags: Core, Shapeshifting, Werewolf, Spirit, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Urtümliches Zerfetzen",
			"esES": "Despedazar primigenio",
			"esMX": "Despedazamiento Primigenio",
			"frFR": "Déchiquetage primordial",
			"itIT": "Dilaniamento Primordiale",
			"jaJP": "切り裂き(原始)",
			"koKR": "태초의 칼날 발톱",
			"plPL": "Pierwotne Rozszarpanie",
			"ptBR": "Retalhar Primevo",
			"ruRU": "Первозданное разрывание",
			"zhCN": "原始利爪撕扯",
			"zhTW": "原始撕碎"
},
		descriptionLocalized: {
			"deDE": "Der zweite und dritte Angriff von Zerfetzen löst außerdem Stürmen aus. Zusätzlich wird der kritische Trefferschaden von Zerfetzen um x20% erhöht.\n\nTags: Kern, Gestaltwandeln, Werwolf, Geisteskraft, Schaden, Physisch.",
			"esES": "El segundo y el tercer ataque de Despedazar también hacen que te desplaces rápidamente. Además, el daño de golpe crítico de Despedazar aumenta un x20%.\n\nTags: Principal, Cambio de forma, Hombre lobo, Espíritu, Daño, Física.",
			"esMX": "El segundo y el tercer ataque de Despedazar también realizan una arremetida. Además, el daño de golpe crítico de Despedazar aumenta un x20%.\n\nTags: Principal, Metamorfosis, Hombre lobo, Espíritu, Daño, Física.",
			"frFR": "Lors des deuxième et troisième attaques combo de Déchiquetage, vous vous ruez sur l'adversaire. De plus, les dégâts critiques de Déchiquetage sont augmentés de x20%.\n\nTags: Principale, Métamorphose, Lycanthrope, Esprit, Dégâts, Dégâts physiques.",
			"itIT": "Il secondo e terzo attacco in combo con Dilaniamento eseguono anche uno scatto. Inoltre, i danni critici di Dilaniamento aumentano del x20%.\n\nTags: Primaria, Mutaforma, Lupo Mannaro, Spirito, Danni, Fisico.",
			"jaJP": "〈切り裂き〉の2回目と3回目の攻撃でダッシュする。さらに、〈切り裂き〉のクリティカルヒットダメージがx20%上昇する。\n\nTags: コア, 変身, 人狼, 精神力, ダメージ, 物理.",
			"koKR": "칼날 발톱의 2번째 및 3번째 공격 시 질주도 수행합니다. 추가로 칼날 발톱의 극대화 피해가 x20% 증가합니다.\n\nTags: 핵심, 변신, 늑대인간, 영력, 피해, 물리.",
			"plPL": "Drugi i trzeci atak Rozszarpania wywołuje również pęd. Ponadto obrażenia od trafień krytycznych Rozszarpania są zwiększone o x20%.\n\nTags: Główne, Zmiennokształtność, Wilkołak, Siła Duchowa, Obrażenia, Fizyczne.",
			"ptBR": "O segundo e terceiro ataques de Retalhar também realizam uma disparada. Além disso, o dano de acerto crítico de Retalhar é aumentado em 20%.\n\nTags: Principal, Metamorfose, Lobisomem, Espírito, Dano, Física.",
			"ruRU": "Вторая и третья атака \"Разрывания\" также происходят с рывком. Критический урон \"Разрывания\" увеличивается на x20%.\n\nTags: Основное, Смена облика, Облик волка, Дух, Урон, Физический урон.",
			"zhCN": "利爪撕扯的第二、三次攻击也会发起猛冲。此外, 利爪撕扯的暴击伤害提高 x20%。\n\nTags: 核心, 变形, 狼人, 灵力, 伤害, 物理.",
			"zhTW": "撕碎的第二和第三次攻擊會附帶衝刺效果。此外,撕碎的爆擊傷害提高 x20%。\n\nTags: 核心, 變形, 狼人, 靈力, 傷害, 物理."
},
		id: 35,
		maxPoints: 1,
		x: -709.735,
		y: 566.865
	},
	"Lightning Storm": {
		connections: [ "Spirit", "Enhanced Lightning Storm" ],
		description: `Spirit Cost: {#} per strike
Lucky Hit Chance: 15%
Conjure a growing lightning storm that deals {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% damage per strike. The number of strikes increase the longer the storm is channeled up to a maximum of 5 at once.

Tags: Core, Nature Magic, Storm, Channeled, Spirit, Damage, Lightning.`,
		nameLocalized: {
			"deDE": "Gewittersturm",
			"esES": "Tormenta de rayos",
			"esMX": "Tormenta Eléctrica",
			"frFR": "Orage",
			"itIT": "Tempesta di Fulmini",
			"jaJP": "稲妻の嵐",
			"koKR": "번개 폭풍",
			"plPL": "Burza z Piorunami",
			"ptBR": "Tempestade de Raios",
			"ruRU": "Грозовой шторм",
			"zhCN": "雷暴",
			"zhTW": "閃電風暴"
},
		descriptionLocalized: {
			"deDE": "Geisteskraftkosten: {#} pro Angriff\nGlückstrefferchance: 15%\nBeschwört einen wachsenden Gewittersturm, der {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% Schaden pro Angriff verursacht. Die Anzahl der Angriffe wird erhöht, solange der Sturm kanalisiert wird, bis zu einem Maximum von 5 gleichzeitig.\n\nTags: Kern, Naturmagie, Sturm, Kanalisiert, Geisteskraft, Schaden, Blitz.",
			"esES": "Coste de espíritu: {#} por golpe\nProbabilidad de golpe de suerte: 15%\nCreas una tormenta de rayos creciente que inflige {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de daño por golpe. El número de golpes aumenta cuanto más tiempo se canaliza la tormenta, hasta un máximo de 5 a la vez.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Canalizada, Espíritu, Daño, Rayos.",
			"esMX": "Costo de Espíritu: {#} por golpe\nProbabilidad de golpe afortunado: 15%\nConjuras una tormenta eléctrica creciente que inflige {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de daño por golpe. El número de golpes aumenta cuanto más tiempo se canaliza la tormenta, hasta un máximo de 5 a la vez.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Canalizado, Espíritu, Daño, Rayo.",
			"frFR": "Coût en esprit: {#}par frappe\nChances d'obtenir un coup de chance: 15%\nVous invoquez un orage grandissant qui inflige {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% points de dégâts par coup de foudre. Le nombre de coups de foudre augmente avec la durée de canalisation de l'orage, jusqu'à un maximum de 5 coups à la fois.\n\nTags: Principale, Magie naturelle, Tempête, Canalisation, Esprit, Dégâts, Foudre.",
			"itIT": "Costo in spirito: {#} per fulmine\nProbabilità di colpo fortunato: 15%\nInvochi una tempesta di fulmini crescente che infligge {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% danni per fulmine. Il numero di fulmini aumenta in base alla durata della canalizzazione della tempesta, fino a un massimo di 5 simultanei.\n\nTags: Primaria, Magia naturale, Tempesta, Canalizzazione, Spirito, Danni, Fulmine.",
			"jaJP": "精神力消費量: 一撃ごとに{#}\n幸運の一撃発生率: 15%\n成長する稲妻の嵐を呼び出し、1撃ごとに{32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}%のダメージを与える。嵐の召喚が長いほど命中回数が増加し、一度に最大5回まで命中する。\n\nTags: コア, 自然魔法, 嵐, 連続発動, 精神力, ダメージ, 稲妻.",
			"koKR": "소모: 공격당 영력 {#}\n행운의 적중 확률: 15%\n점점 커지는 번개 폭풍을 생성하여 공격당 {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}%의 피해를 줍니다. 정신 집중이 계속되면 번개 폭풍의 공격 횟수가 한 번에 최대 5까지 증가합니다.\n\nTags: 핵심, 자연 마법, 폭풍, 정신 집중, 영력, 피해, 번개.",
			"plPL": "Koszt: {#} pkt siy duchowej za kade trafienie\nSzansa na szczęśliwy traf: 15%\nPrzywołujesz rozrastającą się burzę z piorunami, które zadają {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% pkt. obrażeń przy każdym uderzeniu. Liczba uderzeń wzrasta wraz z czasem podtrzymywania, maksymalnie do 5 naraz.\n\nTags: Główne, Magia Natury, Burza, Podtrzymanie, Siła Duchowa, Obrażenia, Błyskawica.",
			"ptBR": "Custo de espírito: {#} por acerto\nChance de Golpe de Sorte: 15%\nConjura uma tempestade de raios crescente que causa {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de dano por raio. O número de raios aumenta conforme o tempo de canalização da tempestade, até o máximo de 5 ao mesmo tempo.\n\nTags: Principal, Magia da Natureza, Tempestade, Canalizada, Espírito, Dano, Eletricidade.",
			"ruRU": "Затраты духа: {#} .\nВероятность удачного удара: 15%.\nПризывает растущий грозовой шторм, наносящий {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% ед. урона за каждый удар. Количество ударов увеличивается с поддержанием умения вплоть до 5.\n\nTags: Основное, Силы природы, Буря, Поддерживаемое, Дух, Урон, Молния.",
			"zhCN": "灵力消耗: 每次打击消耗{#}\n幸运一击几率: 15%\n召唤一阵不断变强的雷暴, 每一击造成 {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% 点伤害, 并且引导时间越长, 命中目标的数量越多, 最多可同时命中 5 个目标。\n\nTags: 核心, 自然魔法, 风暴, 引导, 灵力, 伤害, 闪电.",
			"zhTW": "每次雷擊靈力消耗:{#}\n幸運觸發機率:15%\n呼喚不斷成長的閃電風暴,每次雷擊造成 {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% 點傷害。風暴引導的時間越長,雷擊的次數就越多,一次引導最多可提高至 5 次。\n\nTags: 核心, 自然魔法, 風暴, 引導, 靈力, 傷害, 電擊."
},
		id: 37,
		maxPoints: 5,
		values: [ "15" ],
		x: -452.28,
		y: -268.415
	},
	"Enhanced Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Lightning Storm", "Primal Lightning Storm", "Raging Lightning Storm" ],
		description: `The size of your Lightning Storm is preserved for 4 seconds after channeling.

Tags: Core, Nature Magic, Storm, Channeled, Spirit, Damage, Lightning.`,
		nameLocalized: {
			"deDE": "Verbesserter Gewittersturm",
			"esES": "Tormenta de rayos mejorada",
			"esMX": "Tormenta Eléctrica Potenciada",
			"frFR": "Orage renforcé",
			"itIT": "Tempesta di Fulmini Rinforzata",
			"jaJP": "稲妻の嵐(強化版)",
			"koKR": "강화된 번개 폭풍",
			"plPL": "Wzmocniona Burza z Piorunami",
			"ptBR": "Tempestade de Raios Aperfeiçoada",
			"ruRU": "Усиленный грозовой шторм",
			"zhCN": "强化雷暴",
			"zhTW": "強化閃電風暴"
},
		descriptionLocalized: {
			"deDE": "Die Größe Eures Gewittersturms bleibt nach dem Kanalisieren 4 Sek. lang erhalten.\n\nTags: Kern, Naturmagie, Sturm, Kanalisiert, Geisteskraft, Schaden, Blitz.",
			"esES": "El tamaño de tu Tormenta de rayos se mantiene durante 4 s tras la canalización.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Canalizada, Espíritu, Daño, Rayos.",
			"esMX": "El tamaño de tu Tormenta Eléctrica se preserva durante 4 segundos luego de canalizar.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Canalizado, Espíritu, Daño, Rayo.",
			"frFR": "La taille de votre Orage est conservée encore 4 s après sa canalisation.\n\nTags: Principale, Magie naturelle, Tempête, Canalisation, Esprit, Dégâts, Foudre.",
			"itIT": "Le dimensioni della Tempesta di Fulmini vengono mantenute per 4 s dopo la canalizzazione.\n\nTags: Primaria, Magia naturale, Tempesta, Canalizzazione, Spirito, Danni, Fulmine.",
			"jaJP": "〈稲妻の嵐〉の規模が、発動後4秒間、持続する。\n\nTags: コア, 自然魔法, 嵐, 連続発動, 精神力, ダメージ, 稲妻.",
			"koKR": "번개 폭풍의 크기가 정신 집중 후 4초 동안 유지됩니다.\n\nTags: 핵심, 자연 마법, 폭풍, 정신 집중, 영력, 피해, 번개.",
			"plPL": "Rozmiar twojej Burzy z Piorunami utrzymuje się przez 4 sek. po podtrzymywaniu.\n\nTags: Główne, Magia Natury, Burza, Podtrzymanie, Siła Duchowa, Obrażenia, Błyskawica.",
			"ptBR": "O tamanho de Tempestade de Raios é mantido por 4 segundos após a canalização.\n\nTags: Principal, Magia da Natureza, Tempestade, Canalizada, Espírito, Dano, Eletricidade.",
			"ruRU": "Размер области \"Грозового шторма\" сохраняется на 4 сек. после поддержания умения.\n\nTags: Основное, Силы природы, Буря, Поддерживаемое, Дух, Урон, Молния.",
			"zhCN": "雷暴的大小会在引导结束后保留 4 秒。\n\nTags: 核心, 自然魔法, 风暴, 引导, 灵力, 伤害, 闪电.",
			"zhTW": "閃電風暴的大小會保留至引導後 4 秒。\n\nTags: 核心, 自然魔法, 風暴, 引導, 靈力, 傷害, 電擊."
},
		id: 38,
		maxPoints: 1,
		x: -684.545,
		y: -435.935
	},
	"Primal Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Enhanced Lightning Storm" ],
		description: `Lightning Storm has a 8% chance to Immobilize enemies hit for 3 seconds.

Tags: Core, Nature Magic, Storm, Channeled, Spirit, Damage, Lightning.`,
		nameLocalized: {
			"deDE": "Urtümlicher Gewittersturm",
			"esES": "Tormenta de rayos primigenia",
			"esMX": "Tormenta Eléctrica Primigenia",
			"frFR": "Orage primordial",
			"itIT": "Tempesta di Fulmini Primordiale",
			"jaJP": "プライマル〈稲妻の嵐〉",
			"koKR": "태초의 번개 폭풍",
			"plPL": "Pierwotna Burza z Piorunami",
			"ptBR": "Tempestade de Raios Primeva",
			"ruRU": "Первозданный грозовой шторм",
			"zhCN": "原始雷暴",
			"zhTW": "原始閃電風暴"
},
		descriptionLocalized: {
			"deDE": "Gewittersturm verfügt über eine Chance von 8%, alle getroffenen Gegner 3 Sek. lang bewegungsunfähig zu machen.\n\nTags: Kern, Naturmagie, Sturm, Kanalisiert, Geisteskraft, Schaden, Blitz.",
			"esES": "Tormenta de rayos tiene un 8% de probabilidad de inmovilizar a los enemigos golpeados durante 3 s.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Canalizada, Espíritu, Daño, Rayos.",
			"esMX": "Tormenta Eléctrica tiene un 8% de probabilidad de inmovilizar a los enemigos golpeados durante 3 segundos.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Canalizado, Espíritu, Daño, Rayo.",
			"frFR": "Orage a 8% de chances d'immobiliser les cibles touchées pendant 3 s.\n\nTags: Principale, Magie naturelle, Tempête, Canalisation, Esprit, Dégâts, Foudre.",
			"itIT": "Tempesta di Fulmini ha una probabilità del 8% di immobilizzare i nemici colpiti per 3 s.\n\nTags: Primaria, Magia naturale, Tempesta, Canalizzazione, Spirito, Danni, Fulmine.",
			"jaJP": "〈稲妻の嵐〉が命中した敵が8%の確率で3秒間、移動不能になる。\n\nTags: コア, 自然魔法, 嵐, 連続発動, 精神力, ダメージ, 稲妻.",
			"koKR": "번개 폭풍에 적중당한 적이 8% 확률로 3초 동안 이동 불가 상태가 됩니다.\n\nTags: 핵심, 자연 마법, 폭풍, 정신 집중, 영력, 피해, 번개.",
			"plPL": "Burza z Piorunami ma 8% szans na unieruchomienie trafionych wrogów na 3 sek.\n\nTags: Główne, Magia Natury, Burza, Podtrzymanie, Siła Duchowa, Obrażenia, Błyskawica.",
			"ptBR": "Tempestade de Raios tem 8% de chance de imobilizar inimigos atingidos por 3 segundos.\n\nTags: Principal, Magia da Natureza, Tempestade, Canalizada, Espírito, Dano, Eletricidade.",
			"ruRU": "\"Грозовой шторм\" с вероятностью 8% обездвиживает пораженных противников на 3 сек.\n\nTags: Основное, Силы природы, Буря, Поддерживаемое, Дух, Урон, Молния.",
			"zhCN": "雷暴命中敌人时有 8% 几率使其定身 3 秒。\n\nTags: 核心, 自然魔法, 风暴, 引导, 灵力, 伤害, 闪电.",
			"zhTW": "閃電風暴有 8% 機率使擊中的敵人定身,持續 3 秒。\n\nTags: 核心, 自然魔法, 風暴, 引導, 靈力, 傷害, 電擊."
},
		id: 39,
		maxPoints: 1,
		x: -956.755,
		y: -443.375
	},
	"Raging Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Enhanced Lightning Storm" ],
		description: `Lightning Storm gains 1 additional lightning strike.

Tags: Core, Nature Magic, Storm, Channeled, Spirit, Damage, Lightning.`,
		nameLocalized: {
			"deDE": "Tobender Gewittersturm",
			"esES": "Tormenta de rayos iracunda",
			"esMX": "Tormenta Eléctrica Iracunda",
			"frFR": "Orage enragé",
			"itIT": "Tempesta di Fulmini Furente",
			"jaJP": "レイジング〈稲妻の嵐〉",
			"koKR": "격렬한 번개 폭풍",
			"plPL": "Szaleńcza Burza z Piorunami",
			"ptBR": "Tempestade de Raios Raivosa",
			"ruRU": "Бушующий грозовой шторм",
			"zhCN": "暴怒雷暴",
			"zhTW": "盛怒閃電風暴"
},
		descriptionLocalized: {
			"deDE": "Gewittersturm erhält 1 zusätzlichen Blitzschlag.\n\nTags: Kern, Naturmagie, Sturm, Kanalisiert, Geisteskraft, Schaden, Blitz.",
			"esES": "Tormenta de rayos obtiene 1 relámpago más.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Canalizada, Espíritu, Daño, Rayos.",
			"esMX": "Tormenta Eléctrica obtiene 1 relámpago adicional.\n\nTags: Principal, Magia de la naturaleza, Tormenta, Canalizado, Espíritu, Daño, Rayo.",
			"frFR": "Orage gagne 1 coup de foudre supplémentaire.\n\nTags: Principale, Magie naturelle, Tempête, Canalisation, Esprit, Dégâts, Foudre.",
			"itIT": "Tempesta di Fulmini ottiene 1 fulmine aggiuntivo.\n\nTags: Primaria, Magia naturale, Tempesta, Canalizzazione, Spirito, Danni, Fulmine.",
			"jaJP": "〈稲妻の嵐〉に稲妻が1追加される。\n\nTags: コア, 自然魔法, 嵐, 連続発動, 精神力, ダメージ, 稲妻.",
			"koKR": "번개 폭풍의 번개 강타가 추가로 1회 증가합니다.\n\nTags: 핵심, 자연 마법, 폭풍, 정신 집중, 영력, 피해, 번개.",
			"plPL": "Burza z Piorunami zyskuje 1 dodatkowe uderzenie pioruna.\n\nTags: Główne, Magia Natury, Burza, Podtrzymanie, Siła Duchowa, Obrażenia, Błyskawica.",
			"ptBR": "Tempestade de Raios recebe 1 raio adicional.\n\nTags: Principal, Magia da Natureza, Tempestade, Canalizada, Espírito, Dano, Eletricidade.",
			"ruRU": "\"Грозовой шторм\" ударяет разрядом молнии еще 1 раз.\n\nTags: Основное, Силы природы, Буря, Поддерживаемое, Дух, Урон, Молния.",
			"zhCN": "雷暴额外造成 1 次闪电打击。\n\nTags: 核心, 自然魔法, 风暴, 引导, 灵力, 伤害, 闪电.",
			"zhTW": "閃電風暴獲得額外 1 次閃電強擊。\n\nTags: 核心, 自然魔法, 風暴, 引導, 靈力, 傷害, 電擊."
},
		id: 40,
		maxPoints: 1,
		x: -700.415,
		y: -572.245
	},
	"Heart of the Wild": {
		connections: [ "Spirit", "Wild Impulses", "Abundance" ],
		description: `Maximum Spirit is increased by {3/6/9/12/15/18/21/24/27/30}.

Tags: Spirit.`,
		nameLocalized: {
			"deDE": "Herz der Wildnis",
			"esES": "Corazón de la naturaleza",
			"esMX": "Corazón de la Naturaleza",
			"frFR": "Cœur de fauve",
			"itIT": "Cuore Selvaggio",
			"jaJP": "野生の心",
			"koKR": "야생의 정수",
			"plPL": "Serce Dziczy",
			"ptBR": "Coração da Selva",
			"ruRU": "Сердце дикой природы",
			"zhCN": "野性之心",
			"zhTW": "野性之心"
},
		descriptionLocalized: {
			"deDE": "Maximale Geisteskraft erhöht sich um {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Geisteskraft.",
			"esES": "El espíritu máximo aumenta {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Espíritu.",
			"esMX": "Aumenta {3/6/9/12/15/18/21/24/27/30} el Espíritu máximo.\n\nTags: Espíritu.",
			"frFR": "Votre maximum d'esprit est augmenté de {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Esprit.",
			"itIT": "Lo spirito massimo aumenta di {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Spirito.",
			"jaJP": "最大精神力が{3/6/9/12/15/18/21/24/27/30}増加する。\n\nTags: 精神力.",
			"koKR": "최대 영력이 {3/6/9/12/15/18/21/24/27/30} 증가합니다.\n\nTags: 영력.",
			"plPL": "Maksymalna wartość siły duchowej wzrasta o {3/6/9/12/15/18/21/24/27/30} pkt.\n\nTags: Siła Duchowa.",
			"ptBR": "Espírito máximo aumentado em {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Espírito.",
			"ruRU": "Максимальный запас духа увеличивается на {3/6/9/12/15/18/21/24/27/30} ед.\n\nTags: Дух.",
			"zhCN": "灵力上限提高 {3/6/9/12/15/18/21/24/27/30} 点。\n\nTags: 灵力.",
			"zhTW": "靈力上限提高 {3/6/9/12/15/18/21/24/27/30}。\n\nTags: 靈力."
},
		id: 42,
		maxPoints: 3,
		x: -2.48,
		y: -269.805
	},
	"Wild Impulses": {
		connections: [ "Heart of the Wild" ],
		description: `Your Core Skills cost x{3/6/9/12/15/18/21/24/27/30}% more Spirit but deal x{5/10/15/20/25/30/35/40/45/50}% increased damage.

Tags: Damage, Spirit, Core.`,
		nameLocalized: {
			"deDE": "Wildes Impulse",
			"esES": "Impulsos salvajes",
			"esMX": "Impulsos Salvajes",
			"frFR": "Pulsions sauvages",
			"itIT": "Impulsi Selvaggi",
			"jaJP": "荒々しい衝動",
			"koKR": "야생의 충동",
			"plPL": "Dzikie Impulsy",
			"ptBR": "Impulsos Selvagens",
			"ruRU": "Дикие инстинкты",
			"zhCN": "野性冲动",
			"zhTW": "狂野衝動"
},
		descriptionLocalized: {
			"deDE": "Eure Kernfertigkeiten kosten x{3/6/9/12/15/18/21/24/27/30}% mehr Geisteskraft, aber verursachen x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden.\n\nTags: Schaden, Geisteskraft, Kern.",
			"esES": "Tus habilidades principales cuestan un x{3/6/9/12/15/18/21/24/27/30}% más de espíritu, pero infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño.\n\nTags: Daño, Espíritu, Principal.",
			"esMX": "Tus habilidades principales cuestan un x{3/6/9/12/15/18/21/24/27/30}% más de Espíritu, pero infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño.\n\nTags: Daño, Espíritu, Principal.",
			"frFR": "Vos compétences principales coûtent x{3/6/9/12/15/18/21/24/27/30}% d'esprit en plus, mais infligent x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires.\n\nTags: Dégâts, Esprit, Principale.",
			"itIT": "Le tue abilità Primarie costano il x{3/6/9/12/15/18/21/24/27/30}% di spirito in più ma infliggono il x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi.\n\nTags: Danni, Spirito, Primaria.",
			"jaJP": "コアスキルで消費される精神力がx{3/6/9/12/15/18/21/24/27/30}%増加するが、ダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: ダメージ, 精神力, コア.",
			"koKR": "핵심 기술의 영력 소모량이 x{3/6/9/12/15/18/21/24/27/30}% 증가하지만 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 피해, 영력, 핵심.",
			"plPL": "Twoje umiejętności Główne zużywają o x{3/6/9/12/15/18/21/24/27/30}% więcej siły duchowej, ale zadają obrażenia zwiększone o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Obrażenia, Siła Duchowa, Główne.",
			"ptBR": "Suas habilidades principais custam {3/6/9/12/15/18/21/24/27/30}% mais espírito, mas causam {5/10/15/20/25/30/35/40/45/50}% de dano aumentado.\n\nTags: Dano, Espírito, Principal.",
			"ruRU": "Основные умения расходуют на x{3/6/9/12/15/18/21/24/27/30}% больше духа, но наносят на x{5/10/15/20/25/30/35/40/45/50}% больше урона.\n\nTags: Урон, Дух, Основное.",
			"zhCN": "你的核心技能消耗的灵力提高 x{3/6/9/12/15/18/21/24/27/30}%, 但造成的伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 伤害, 灵力, 核心.",
			"zhTW": "你的核心技能消耗的靈力提高 x{3/6/9/12/15/18/21/24/27/30}%,但造成的傷害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 傷害, 靈力, 核心."
},
		id: 32,
		maxPoints: 3,
		x: 140.505,
		y: -403.84
	},
	"Abundance": {
		connections: [ "Heart of the Wild" ],
		description: `Basic Skills generate x{6/12/18/24/30/36/42/48/54/60}% more Spirit.

Tags: Spirit, Basic.`,
		nameLocalized: {
			"deDE": "Überfluss",
			"esES": "Abundancia",
			"esMX": "Abundancia",
			"frFR": "Profusion",
			"itIT": "Abbondanza",
			"jaJP": "余剰",
			"koKR": "풍요",
			"plPL": "Obfitość",
			"ptBR": "Abundância",
			"ruRU": "Изобилие",
			"zhCN": "生机绽放",
			"zhTW": "豐饒"
},
		descriptionLocalized: {
			"deDE": "Basisfertigkeiten erzeugen x{6/12/18/24/30/36/42/48/54/60}% mehr Geisteskraft.\n\nTags: Geisteskraft, Basis.",
			"esES": "Las habilidades básicas generan un x{6/12/18/24/30/36/42/48/54/60}% más de espíritu.\n\nTags: Espíritu, Básica.",
			"esMX": "Las habilidades básicas generan un x{6/12/18/24/30/36/42/48/54/60}% más de Espíritu.\n\nTags: Espíritu, Básica.",
			"frFR": "Les compétences de base génèrent x{6/12/18/24/30/36/42/48/54/60}% d'esprit en plus.\n\nTags: Esprit, Basique.",
			"itIT": "Le abilità Base generano il x{6/12/18/24/30/36/42/48/54/60}% di spirito aggiuntivo.\n\nTags: Spirito, Base.",
			"jaJP": "基本スキルで回復する精神力がx{6/12/18/24/30/36/42/48/54/60}%増加する。\n\nTags: 精神力, 基本.",
			"koKR": "기본 기술로 생성하는 영력이 x{6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: 영력, 기본.",
			"plPL": "Umiejętności Podstawowe generują o x{6/12/18/24/30/36/42/48/54/60}% więcej siły duchowej.\n\nTags: Siła Duchowa, Podstawowe.",
			"ptBR": "Habilidades básicas geram {6/12/18/24/30/36/42/48/54/60}% mais espírito.\n\nTags: Espírito, Básica.",
			"ruRU": "Базовые умения позволяют накапливать на x{6/12/18/24/30/36/42/48/54/60}% больше духа.\n\nTags: Дух, Базовое.",
			"zhCN": "基础技能生成的灵力提高 x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 灵力, 基础.",
			"zhTW": "基本技能額外產生 x{6/12/18/24/30/36/42/48/54/60}% 靈力。\n\nTags: 靈力, 基本."
},
		id: 41,
		maxPoints: 3,
		x: -151.965,
		y: -404.925
	},
	"Predatory Instinct": {
		connections: [ "Spirit", "Iron Fur", "Digitigrade Gait" ],
		description: `Critical Strike Chance against Close enemies is increased by +{2/4/6/8/10/12/14/16/18/20}%.

Tags: Critical Strikes.`,
		nameLocalized: {
			"deDE": "Raubtierinstinkt",
			"esES": "Instinto depredador",
			"esMX": "Instinto Depredador",
			"frFR": "Instinct du prédateur",
			"itIT": "Istinto Predatorio",
			"jaJP": "捕食者的本能",
			"koKR": "포식 본능",
			"plPL": "Instynkt Drapieżnika",
			"ptBR": "Instinto Predatório",
			"ruRU": "Инстинкт хищника",
			"zhCN": "掠食本能",
			"zhTW": "掠食本能"
},
		descriptionLocalized: {
			"deDE": "Eure kritische Trefferchance erhöht sich bei Gegnern in der Nähe um +{2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Kritische Treffer.",
			"esES": "Probabilidad de golpe crítico contra los enemigos cercanos aumentada un +{2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Golpes críticos.",
			"esMX": "La probabilidad de golpe crítico a los enemigos cercanos aumenta un +{2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Golpes críticos.",
			"frFR": "Vos chances d'infliger un coup critique aux adversaires à proximité sont augmentées de +{2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Coups critiques.",
			"itIT": "La probabilità di critico contro i nemici vicini aumenta del +{2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Colpi critici.",
			"jaJP": "付近の敵へのクリティカルヒット率が+{2/4/6/8/10/12/14/16/18/20}%上昇する。\n\nTags: クリティカルヒット.",
			"koKR": "근거리에 있는 적을 상대로 극대화 확률이 +{2/4/6/8/10/12/14/16/18/20}% 증가합니다.\n\nTags: 극대화.",
			"plPL": "Szansa na zadanie pobliskim wrogom trafienia krytycznego jest zwiększona o +{2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Trafienia Krytyczne.",
			"ptBR": "A chance de acerto crítico contra inimigos próximos é aumentada em +{2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Acertos Críticos.",
			"ruRU": "Вероятность нанести критический удар находящимся рядом противникам повышается на +{2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Критические удары.",
			"zhCN": "对近距敌人造成暴击的几率提高 +{2/4/6/8/10/12/14/16/18/20}%。\n\nTags: 暴击.",
			"zhTW": "對近距離敵人的爆擊機率提高 +{2/4/6/8/10/12/14/16/18/20}%。\n\nTags: 爆擊."
},
		id: 136,
		maxPoints: 3,
		x: -4.22,
		y: 274.21
	},
	"Iron Fur": {
		connections: [ "Predatory Instinct" ],
		description: `You gain {3/6/9/12/15/18/21/24/27/30}% Damage Reduction while in Werebear form.

This bonus persists for 3 seconds after leaving Werebear form.

Tags: Werebear, Shapeshifting, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Eisenpelz",
			"esES": "Pelaje de hierro",
			"esMX": "Pelaje de Hierro",
			"frFR": "Poil de fer",
			"itIT": "Pelo Duro",
			"jaJP": "鉄の毛皮",
			"koKR": "무쇠 가죽",
			"plPL": "Żelazne Futro",
			"ptBR": "Pelego de Ferro",
			"ruRU": "Железный мех",
			"zhCN": "钢铁皮毛",
			"zhTW": "鋼鐵毛皮"
},
		descriptionLocalized: {
			"deDE": "In Werbärgestalt erhaltet Ihr {3/6/9/12/15/18/21/24/27/30}% Schadensreduktion.\n\nDieser Bonus hält 3 Sek. lang an, nachdem Ihr die Werbärgestalt verlassen habt.\n\nTags: Werbär, Gestaltwandeln, Schadensreduktion.",
			"esES": "Obtienes un {3/6/9/12/15/18/21/24/27/30}% de reducción de daño mientras estás en forma de hombre oso.\n\nEste bonus persiste durante 3 s tras salir de la forma de hombre oso.\n\nTags: Hombre oso, Cambio de forma, Reducción de daño.",
			"esMX": "Obtienes un {3/6/9/12/15/18/21/24/27/30}% de reducción de daño mientras estás en forma de hombre oso.\n\nEsta bonificación persiste durante 3 segundos después de abandonar la forma de hombre oso.\n\nTags: Hombre oso, Metamorfosis, Reducción de daño.",
			"frFR": "Vous bénéficiez de {3/6/9/12/15/18/21/24/27/30}% de réduction des dégâts sous forme ursoïde.\n\nCe bonus persiste pendant 3 s après avoir quitté la forme ursoïde.\n\nTags: Ursoïde, Métamorphose, Réduction des dégâts.",
			"itIT": "In forma di Orso Mannaro, la riduzione danni aumenta del {3/6/9/12/15/18/21/24/27/30}%.\n\nIl bonus persiste per 3 s dopo che la forma di Orso Mannaro è terminata.\n\nTags: Orso Mannaro, Mutaforma, Riduzione danni.",
			"jaJP": "人熊形態でいると、被ダメージが{3/6/9/12/15/18/21/24/27/30}%減少する。\n\nこのボーナスは人熊形態を解除した後も3秒間継続する。\n\nTags: 人熊, 変身, ダメージ減少.",
			"koKR": "곰인간 형상일 때 {3/6/9/12/15/18/21/24/27/30}%의 피해 감소를 얻습니다.\n\n이 효과는 곰인간 형상에서 벗어난 후 3초 동안 지속됩니다.\n\nTags: 곰인간, 변신, 피해 감소.",
			"plPL": "Pod postacią niedźwiedziołaka zyskujesz premię {3/6/9/12/15/18/21/24/27/30}% do redukcji obrażeń.\nPremia ta utrzymuje się przez 3 sek. po wyjściu z postaci niedźwiedziołaka.\n\nTags: Niedźwiedziołak, Zmiennokształtność, Redukcja Obrażeń.",
			"ptBR": "Você recebe {3/6/9/12/15/18/21/24/27/30}% de redução de dano enquanto está na forma de urso.\n\nEsse bônus continua por 3 segundos depois de sair da forma de urso.\n\nTags: Urso, Metamorfose, Redução de Dano.",
			"ruRU": "Пока вы находитесь в облике медведя, получаемый вами урон уменьшается на {3/6/9/12/15/18/21/24/27/30}%.\n\nЭффект сохраняется в течение 3 сек. после принятия другого облика.\n\nTags: Медведь, Смена облика, Уменьшение урона.",
			"zhCN": "熊人形态下获得 {3/6/9/12/15/18/21/24/27/30}% 的伤害减免。\n\n离开熊人形态后该加成还会持续 3 秒。\n\nTags: 熊人, 变形, 伤害减免.",
			"zhTW": "處於熊人形態時,你獲得 {3/6/9/12/15/18/21/24/27/30}% 傷害減免。\n\n此加成效果在離開熊人形態後會持續 3 秒。\n\nTags: 熊人, 變形, 傷害減免."
},
		id: 137,
		maxPoints: 3,
		x: 126.735,
		y: 410.19
	},
	"Digitigrade Gait": {
		connections: [ "Predatory Instinct" ],
		description: `You gain +{3/6/9/12/15/18/21/24/27/30}% Movement Speed while in Werewolf form.

This bonus persists for 3 seconds after leaving Werewolf form.

Tags: Werewolf, Movement, Shapeshifting.`,
		nameLocalized: {
			"deDE": "Zehengänger",
			"esES": "Caminar digitígrado",
			"esMX": "Marcha de Digitígrado",
			"frFR": "Démarche de digitigrade",
			"itIT": "Passo Digitigrado",
			"jaJP": "人狼の足どり",
			"koKR": "지행 걸음",
			"plPL": "Leśne Opuszki",
			"ptBR": "Andar Digitígrado",
			"ruRU": "Прыть пальцеходящих",
			"zhCN": "趾行步态",
			"zhTW": "趾行步伐"
},
		descriptionLocalized: {
			"deDE": "In Werwolfgestalt erhaltet Ihr +{3/6/9/12/15/18/21/24/27/30}% Bewegungsgeschwindigkeit.\n\nDieser Bonus hält 3 Sek. lang an, nachdem Ihr die Werwolfgestalt verlassen habt.\n\nTags: Werwolf, Bewegung, Gestaltwandeln.",
			"esES": "Obtienes un +{3/6/9/12/15/18/21/24/27/30}% de velocidad de movimiento mientras estás en forma de hombre lobo.\n\nEste bonus persiste durante 3 s tras salir de la forma de hombre lobo.\n\nTags: Hombre lobo, Movimiento, Cambio de forma.",
			"esMX": "Obtienes un +{3/6/9/12/15/18/21/24/27/30}% de velocidad de movimiento mientras estás en forma de hombre lobo.\n\nLa bonificación se mantiene 3 segundos después de abandonar la forma de hombre lobo.\n\nTags: Hombre lobo, Movimiento, Metamorfosis.",
			"frFR": "Sous forme de lycanthrope, votre vitesse de déplacement est augmentée de +{3/6/9/12/15/18/21/24/27/30}%.\n\nCe bonus persiste pendant 3 s après avoir quitté la forme de lycanthrope.\n\nTags: Lycanthrope, Déplacement, Métamorphose.",
			"itIT": "In forma di Lupo Mannaro, la tua velocità di movimento aumenta del +{3/6/9/12/15/18/21/24/27/30}%.\n\nIl bonus persiste per 3 s dopo che la forma di Lupo Mannaro è terminata.\n\nTags: Lupo Mannaro, Movimento, Mutaforma.",
			"jaJP": "人狼形態でいる間、移動速度が+{3/6/9/12/15/18/21/24/27/30}%上昇する。\n\nこのボーナスは人狼形態が終わった後も3秒間継続する。\n\nTags: 人狼, 移動, 変身.",
			"koKR": "늑대인간 형상일 때 이동 속도가 +{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\n이 효과는 늑대인간 형상에서 벗어난 후 3초 동안 지속됩니다.\n\nTags: 늑대인간, 이동, 변신.",
			"plPL": "Pod postacią wilkołaka zyskujesz premię +{3/6/9/12/15/18/21/24/27/30}% do szybkości ruchu.\n\nPremia ta utrzymuje się przez 3 sek. po wyjściu z postaci wilkołaka.\n\nTags: Wilkołak, Ruch, Zmiennokształtność.",
			"ptBR": "Você recebe +{3/6/9/12/15/18/21/24/27/30}% de velocidade de movimento enquanto está na forma de lobisomem.\n\nEsse bônus continua por 3 segundos depois de sair da forma de lobisomem.\n\nTags: Lobisomem, Movimento, Metamorfose.",
			"ruRU": "Пока вы находитесь в облике волка, ваша скорость передвижения повышается на +{3/6/9/12/15/18/21/24/27/30}%.\n\nЭффект сохраняется в течение 3 сек. после принятия другого облика.\n\nTags: Облик волка, Движение, Смена облика.",
			"zhCN": "狼人形态下, 你的移动速度提高 +{3/6/9/12/15/18/21/24/27/30}%。\n\n离开狼人形态后该加成还会持续 3 秒。\n\nTags: 狼人, 移动, 变形.",
			"zhTW": "處於狼人形態時,你獲得 +{3/6/9/12/15/18/21/24/27/30}% 移動速度。\n\n此加成效果在離開狼人形態後會持續 3 秒。\n\nTags: 狼人, 移動, 變形."
},
		id: 138,
		maxPoints: 3,
		x: -145.46,
		y: 412.55
	},
};

druidData["Defensive"] = {
	"Earthen Bulwark": {
		connections: [ "Defensive", "Enhanced Earthen Bulwark" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 30%
Rocks surround you for 3 seconds, granting a Barrier that absorbs {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% of your Base Life in damage.

Tags: Defensive, Nature Magic, Earth, Barrier, Cooldown.`,
		nameLocalized: {
			"deDE": "Irdenes Bollwerk",
			"esES": "Baluarte de tierra",
			"esMX": "Baluarte Rocoso",
			"frFR": "Rempart de terre",
			"itIT": "Baluardo di Terra",
			"jaJP": "土の防壁",
			"koKR": "대지 방벽",
			"plPL": "Ziemny Szaniec",
			"ptBR": "Baluarte Terreno",
			"ruRU": "Земляной бастион",
			"zhCN": "大地壁垒",
			"zhTW": "大地壁壘"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 30%\nFelsen umgeben Euch 3 Sek. lang und gewähren eine Barriere, die Schaden in Höhe von {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% Eures Basislebens absorbiert.\n\nTags: Defensiv, Naturmagie, Erde, Barriere, Abklingzeit.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 30%\nDurante 3 s, te rodean unas rocas en forma de barrera que absorbe un daño equivalente a un {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de tu vida base.\n\nTags: Defensiva, Magia de la naturaleza, Tierra, Barrera, Tiempo de reutilización.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 30%\nAparecen rocas a tu alrededor durante 3 segundos, que te otorgan una barrera que absorbe el daño equivalente a un {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de tu vida de base.\n\nTags: Defensivo, Magia de la naturaleza, Tierra, Barrera, Recuperación.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 30%\nDes rochers vous entourent pendant 3 s, ce qui vous octroie une barrière absorbant un montant de dégâts égal à {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de vos points de vie de base.\n\nTags: Défense, Magie naturelle, Terre, Barrière, Temps de recharge.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 30%\nDelle rocce ti circondano per 3 secondi, conferendoti una barriera che assorbe danni pari al {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% della tua Vita base.\n\nTags: Difesa, Magia naturale, Terra, Barriera, Tempo di recupero.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 30%\n岩石で自身を取り囲み、3秒間、基本ライフの{45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%にあたるダメージを吸収する障壁を獲得する。\n\nTags: 防御, 自然魔法, 地, 障壁, クールダウン.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 30%\n3초 동안 바위가 자신을 둘러싸 기본 생명력의 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%에 해당하는 피해를 흡수하는 보호막을 얻습니다.\n\nTags: 방어, 자연 마법, 대지, 보호막, 재사용 대기시간.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 30%\nOtaczają cię na 3 sek. skały, które zapewniają barierę pochłaniającą obrażenia równe {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% twojego podstawowego zdrowia.\n\nTags: Defensywa, Magia Natury, Ziemia, Bariera, Odnowienie.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 30%\nRochas cercam você por 3 segundos, concedendo uma barreira que absorve {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% da sua vida básica em dano.\n\nTags: Defesa, Magia da Natureza, Terra, Barreira, Recarga.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 30%.\nВас на 3 сек. окружает каменный барьер, поглощающий урон в объеме {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% базового запаса здоровья.\n\nTags: Защита, Силы природы, Земля, Барьер, Время восстановления.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 30%\n岩石环绕在你的周围, 持续 3 秒, 给予你一层可以吸收相当于基础生命 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%伤害的屏障。\n\nTags: 防御, 自然魔法, 大地, 屏障, 冷却时间.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:30%\n岩石圍繞在你周圍,持續 3 秒,賦予你可吸收 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% 基礎生命值傷害的屏障。\n\nTags: 防禦, 自然魔法, 大地, 屏障, 冷卻時間."
},
		id: 43,
		maxPoints: 5,
		values: [ "16" ],
		x: -2.035,
		y: -310.27
	},
	"Enhanced Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Earthen Bulwark", "Innate Earthen Bulwark", "Preserving Earthen Bulwark" ],
		description: `Earthen Bulwark makes you Unstoppable while active.

Tags: Defensive, Nature Magic, Earth, Barrier, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbessertes Irdenes Bollwerk",
			"esES": "Baluarte de tierra mejorado",
			"esMX": "Baluarte Rocoso Potenciado",
			"frFR": "Rempart de terre renforcé",
			"itIT": "Baluardo di Terra Rinforzato",
			"jaJP": "土の防壁(強化版)",
			"koKR": "강화된 대지 방벽",
			"plPL": "Wzmocniony Ziemny Szaniec",
			"ptBR": "Baluarte Terreno Aperfeiçoado",
			"ruRU": "Усиленный земляной бастион",
			"zhCN": "强化大地壁垒",
			"zhTW": "強化大地壁壘"
},
		descriptionLocalized: {
			"deDE": "Irdenes Bollwerk macht Euch unaufhaltsam, solange die Fertigkeit aktiv ist.\n\nTags: Defensiv, Naturmagie, Erde, Barriere, Abklingzeit.",
			"esES": "Baluarte de tierra te vuelve imparable mientras dura.\n\nTags: Defensiva, Magia de la naturaleza, Tierra, Barrera, Tiempo de reutilización.",
			"esMX": "Baluarte Rocoso te vuelve imparable mientras está activa.\n\nTags: Defensivo, Magia de la naturaleza, Tierra, Barrera, Recuperación.",
			"frFR": "Rempart de terre vous rend inarrêtable tant qu'il est actif.\n\nTags: Défense, Magie naturelle, Terre, Barrière, Temps de recharge.",
			"itIT": "Baluardo di Terra ti rende inarrestabile mentre è attivo.\n\nTags: Difesa, Magia naturale, Terra, Barriera, Tempo di recupero.",
			"jaJP": "〈土の防壁〉の発動中は抑圧不可状態になる。\n\nTags: 防御, 自然魔法, 地, 障壁, クールダウン.",
			"koKR": "대지 방벽이 활성화되어 있는 동안 저지 불가 상태가 됩니다.\n\nTags: 방어, 자연 마법, 대지, 보호막, 재사용 대기시간.",
			"plPL": "Kiedy Ziemny Szaniec jest aktywny, zapewnia ci nieustępliwość.\n\nTags: Defensywa, Magia Natury, Ziemia, Bariera, Odnowienie.",
			"ptBR": "Baluarte Terreno torna você implacável enquanto ativo.\n\nTags: Defesa, Magia da Natureza, Terra, Barreira, Recarga.",
			"ruRU": "\"Земляной бастион\" также дает неудержимость.\n\nTags: Защита, Силы природы, Земля, Барьер, Время восстановления.",
			"zhCN": "大地壁垒激活时使你获得不可阻挡。\n\nTags: 防御, 自然魔法, 大地, 屏障, 冷却时间.",
			"zhTW": "大地壁壘啟動時可使你無阻。\n\nTags: 防禦, 自然魔法, 大地, 屏障, 冷卻時間."
},
		id: 44,
		maxPoints: 1,
		x: 5.025,
		y: -529.025
	},
	"Innate Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Rock shrapnel flies outward when Earthen Bulwark is destroyed or expires, dealing 30% to surrounding enemies. This damage is increased by Barrier bonuses.

Tags: Defensive, Nature Magic, Earth, Barrier, Cooldown.`,
		nameLocalized: {
			"deDE": "Angeborenes Irdenes Bollwerk",
			"esES": "Baluarte de tierra innato",
			"esMX": "Baluarte Rocoso Innato",
			"frFR": "Rempart de terre inné",
			"itIT": "Baluardo di Terra Innato",
			"jaJP": "土の防壁(天性)",
			"koKR": "타고난 대지 방벽",
			"plPL": "Wrodzony Ziemny Szaniec",
			"ptBR": "Baluarte Terreno Inato",
			"ruRU": "Исконный земляной бастион",
			"zhCN": "天禀大地壁垒",
			"zhTW": "固有大地壁壘"
},
		descriptionLocalized: {
			"deDE": "Felssplitter fliegen nach außen, wenn Irdenes Bollwerk zerstört wird oder abläuft, und fügen Gegnern in der Nähe 30% Schaden zu. Dieser Schaden wird um Boni der Barriere erhöht.\n\nTags: Defensiv, Naturmagie, Erde, Barriere, Abklingzeit.",
			"esES": "Cuando Baluarte de tierra se destruye o expira, salen despedidos trozos de roca que infligen 30% de daño a los enemigos cercanos. Este daño aumenta con los bonus de barrera.\n\nTags: Defensiva, Magia de la naturaleza, Tierra, Barrera, Tiempo de reutilización.",
			"esMX": "Esquirlas de roca vuelan hacia afuera cuando Baluarte Rocoso es destruido o expira, lo que inflige 30% de daño a los enemigos circundantes. Este daño se incrementa por las bonificaciones de barrera.\n\nTags: Defensivo, Magia de la naturaleza, Tierra, Barrera, Recuperación.",
			"frFR": "Lorsque Rempart de terre expire ou se fait détruire, une explosion d'éclats de roches se produit et inflige 30% points de dégâts aux adversaires à proximité. Ces dégâts sont augmentés par les bonus de barrière.\n\nTags: Défense, Magie naturelle, Terre, Barrière, Temps de recharge.",
			"itIT": "Frammenti di roccia vengono sparati in aria quando Baluardo di Terra viene distrutto o scade, infliggendo 30% danni ai nemici circostanti. Questi danni vengono aumentati dai bonus alla barriera.\n\nTags: Difesa, Magia naturale, Terra, Barriera, Tempo di recupero.",
			"jaJP": "〈土の防壁〉が破壊されるか効果が終了すると、岩の破片が飛散し周囲の敵に30%のダメージを与える。このダメージは障壁ボーナス分増加する。\n\nTags: 防御, 自然魔法, 地, 障壁, クールダウン.",
			"koKR": "대지 방벽이 파괴되거나 만료되면 바위 파편이 날아 나가 주위의 적에게 30%의 피해를 줍니다. 이 피해는 추가 보호막에 따라 증가합니다.\n\nTags: 방어, 자연 마법, 대지, 보호막, 재사용 대기시간.",
			"plPL": "Kiedy Ziemny Szaniec zostanie zniszczony lub przestanie działać, wylatują z niego skalne odłamki, które zadają 30% pkt. obrażeń wrogom wokół. Obrażenia te są zwiększone przez premie do barier.\n\nTags: Defensywa, Magia Natury, Ziemia, Bariera, Odnowienie.",
			"ptBR": "Estilhaços de pedra voam quando Baluarte Terreno é destruído ou expira, causando 30% a inimigos ao redor. Esse dano é aumentado por bônus de barreira.\n\nTags: Defesa, Magia da Natureza, Terra, Barreira, Recarga.",
			"ruRU": "Когда время действия \"Земляного бастиона\" заканчивается или барьер уничтожают, вокруг разлетаются осколки, наносящие ближайшим противникам 30% ед. урона. Бонусы к барьеру увеличивают этот урон.\n\nTags: Защита, Силы природы, Земля, Барьер, Время восстановления.",
			"zhCN": "大地壁垒被摧毁或结束时, 岩石弹片会向外飞出, 对周围的敌人造成 30% 点伤害。该伤害会随着屏障加成的提高而提高。\n\nTags: 防御, 自然魔法, 大地, 屏障, 冷却时间.",
			"zhTW": "大地壁壘遭到摧毀或持續時間結束時會噴射出岩石破片,對附近敵人造成 30% 點傷害。此傷害會受到屏障的加成而提高。\n\nTags: 防禦, 自然魔法, 大地, 屏障, 冷卻時間."
},
		id: 45,
		maxPoints: 1,
		x: -159.395,
		y: -636.45
	},
	"Preserving Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Casting Earthen Bulwark grants 18% Base Life as Fortify.

Tags: Defensive, Nature Magic, Earth, Barrier, Cooldown.`,
		nameLocalized: {
			"deDE": "Bewahrendes Irdenes Bollwerk",
			"esES": "Baluarte de tierra defensor",
			"esMX": "Baluarte Rocoso Preservador",
			"frFR": "Rempart de terre préservateur",
			"itIT": "Baluardo di Terra Tutelato",
			"jaJP": "土の防壁(保護)",
			"koKR": "보존하는 대지 방벽",
			"plPL": "Zachowawczy Ziemny Szaniec",
			"ptBR": "Baluarte Terreno de Proteção",
			"ruRU": "Оберегающий земляной бастион",
			"zhCN": "固成大地壁垒",
			"zhTW": "護存大地壁壘"
},
		descriptionLocalized: {
			"deDE": "Der Einsatz von Irdenes Bollwerk verleiht Euch 18% Basisleben als Stählung.\n\nTags: Defensiv, Naturmagie, Erde, Barriere, Abklingzeit.",
			"esES": "Lanzar Baluarte de tierra te otorga un 18% de tu vida base como fortificación.\n\nTags: Defensiva, Magia de la naturaleza, Tierra, Barrera, Tiempo de reutilización.",
			"esMX": "Lanzar Baluarte Rocoso te otorga un 18% de tu vida de base como fortificación.\n\nTags: Defensivo, Magia de la naturaleza, Tierra, Barrera, Recuperación.",
			"frFR": "Utiliser Rempart de terre vous confère un montant de fortification égal à 18% de vos points de vie de base.\n\nTags: Défense, Magie naturelle, Terre, Barrière, Temps de recharge.",
			"itIT": "Lanciare Baluardo di Terra fornisce il 18% della Vita base come Fortificazione.\n\nTags: Difesa, Magia naturale, Terra, Barriera, Tempo di recupero.",
			"jaJP": "〈土の防壁〉使用時、基本ライフの18%にあたるの強化を獲得する。\n\nTags: 防御, 自然魔法, 地, 障壁, クールダウン.",
			"koKR": "대지 방벽을 시전하면 기본 생명력의 18%를 보강으로 얻습니다.\n\nTags: 방어, 자연 마법, 대지, 보호막, 재사용 대기시간.",
			"plPL": "Użycie Ziemnego Szańca zapewnia 18% podstawowego zdrowia w postaci umocnienia.\n\nTags: Defensywa, Magia Natury, Ziemia, Bariera, Odnowienie.",
			"ptBR": "Lançar Baluarte Terreno concede 18% de vida básica como fortificação.\n\nTags: Defesa, Magia da Natureza, Terra, Barreira, Recarga.",
			"ruRU": "\"Земляной бастион\" дает вам укрепление в объеме 18% базового запаса здоровья.\n\nTags: Защита, Силы природы, Земля, Барьер, Время восстановления.",
			"zhCN": "施放大地壁垒强固你 18% 基础生命。\n\nTags: 防御, 自然魔法, 大地, 屏障, 冷却时间.",
			"zhTW": "施放大地壁壘可賦予你相當於 18% 基礎生命值的強韌。\n\nTags: 防禦, 自然魔法, 大地, 屏障, 冷卻時間."
},
		id: 46,
		maxPoints: 1,
		x: 160.175,
		y: -637.145
	},
	"Debilitating Roar": {
		connections: [ "Defensive", "Enhanced Debilitating Roar" ],
		description: `Cooldown: {#} seconds
Shapeshift into a Werebear and bellow a mighty roar, reducing Nearby enemies' damage dealt by 70% for 4 seconds.

Tags: Defensive, Shapeshifting, Werebear, Cooldown, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Schwächendes Gebrüll",
			"esES": "Rugido debilitante",
			"esMX": "Rugido Debilitante",
			"frFR": "Rugissement débilitant",
			"itIT": "Ruggito Debilitante",
			"jaJP": "衰弱の雄叫び",
			"koKR": "쇠약의 포효",
			"plPL": "Obezwładniający Ryk",
			"ptBR": "Rugido Debilitante",
			"ruRU": "Изнуряющий рев",
			"zhCN": "挫志咆哮",
			"zhTW": "致衰狂吼"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nVerwandelt Euch in einen Werbären und stoßt ein mächtiges Gebrüll aus, das den von Gegnern in der Nähe verursachten Schaden 4 Sek. lang um 70% verringert.\n\nTags: Defensiv, Gestaltwandeln, Werbär, Abklingzeit, Schadensreduktion.",
			"esES": "Tiempo de reutilización: {#} s\nTe transformas en un hombre oso y profieres un potente rugido, lo que reduce el daño infligido por los enemigos cercanos un 70% durante 4 s.\n\nTags: Defensiva, Cambio de forma, Hombre oso, Tiempo de reutilización, Reducción de daño.",
			"esMX": "Recuperación: {#} segundos\nCambias de forma a un hombre oso y emites un rugido potente, que reduce el daño infligido de enemigos cercanos un 70% durante 4 segundos.\n\nTags: Defensivo, Metamorfosis, Hombre oso, Recuperación, Reducción de daño.",
			"frFR": "Temps de recharge: {#} s\nVous vous transformez en ursoïde et poussez un puissant rugissement, réduisant les dégâts infligés par les adversaires à proximité de 70% pendant 4 s.\n\nTags: Défense, Métamorphose, Ursoïde, Temps de recharge, Réduction des dégâts.",
			"itIT": "Tempo di recupero: {#} s\nMuti in un Orso Mannaro e rugli ferocemente, riducendo i danni inflitti dai nemici vicini del 70% per 4 s.\n\nTags: Difesa, Mutaforma, Orso Mannaro, Tempo di recupero, Riduzione danni.",
			"jaJP": "クールダウン: {#}秒\n人熊に変身して強力な雄叫びを上げ、付近の敵から受けるダメージを4秒間70%軽減する。\n\nTags: 防御, 変身, 人熊, クールダウン, ダメージ減少.",
			"koKR": "재사용 대기시간: {#}초\n곰인간으로 변신하고 강대한 포효를 내질러, 4초 동안 주위의 적들이 주는 피해를 70% 감소시킵니다.\n\nTags: 방어, 변신, 곰인간, 재사용 대기시간, 피해 감소.",
			"plPL": "Czas odnowienia: {#} sek.\nPrzemieniasz się w niedźwiedziołaka i wydajesz potężny ryk, który zmniejsza obrażenia zadawane przez pobliskich wrogów o 70% przez 4 sek.\n\nTags: Defensywa, Zmiennokształtność, Niedźwiedziołak, Odnowienie, Redukcja Obrażeń.",
			"ptBR": "Recarga: {#} segundos\nTransforma-se em um urso e solta um rugido poderoso, reduzindo o dano causado por inimigos próximos em 70% por 4 segundos.\n\nTags: Defesa, Metamorfose, Urso, Recarga, Redução de Dano.",
			"ruRU": "Время восстановления: {#} сек.\nВы принимаете облик медведя и издаете могучий рев, уменьшая наносимый ближайшими противниками урон на 70% на 4 сек.\n\nTags: Защита, Смена облика, Медведь, Время восстановления, Уменьшение урона.",
			"zhCN": "冷却时间: {#} 秒\n变成熊人并发出猛烈的咆哮, 使附近敌人造成的伤害降低 70%, 持续 4 秒。\n\nTags: 防御, 变形, 熊人, 冷却时间, 伤害减免.",
			"zhTW": "冷卻時間:{#} 秒\n變身為熊人發出巨大怒吼,使附近敵人造成的傷害降低 70%,持續 4 秒。\n\nTags: 防禦, 變形, 熊人, 冷卻時間, 傷害減免."
},
		id: 47,
		maxPoints: 5,
		values: [ "{22/20.9/19.8/18.92/18.04/17.38/16.72/16.28/15.84/15.4}" ],
		x: 4.69,
		y: 314.825
	},
	"Enhanced Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Debilitating Roar", "Preserving Debilitating Roar", "Innate Debilitating Roar" ],
		description: `Debilitating Roar also Fortifies you for 22% Base Life.

Tags: Defensive, Shapeshifting, Werebear, Cooldown, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Verbessertes Schwächendes Gebrüll",
			"esES": "Rugido debilitante mejorado",
			"esMX": "Rugido Debilitante Potenciado",
			"frFR": "Rugissement débilitant renforcé",
			"itIT": "Ruggito Debilitante Rinforzato",
			"jaJP": "衰弱の雄叫び(強化版)",
			"koKR": "강화된 쇠약의 포효",
			"plPL": "Wzmocniony Obezwładniający Ryk",
			"ptBR": "Rugido Debilitante Aperfeiçoado",
			"ruRU": "Усиленный изнуряющий рев",
			"zhCN": "强化挫志咆哮",
			"zhTW": "強化致衰狂吼"
},
		descriptionLocalized: {
			"deDE": "Schwächendes Gebrüll verleiht Euch außerdem Stählung in Höhe von 22% Basisleben.\n\nTags: Defensiv, Gestaltwandeln, Werbär, Abklingzeit, Schadensreduktion.",
			"esES": "Rugido debilitante también fortifica un 22% de tu vida base.\n\nTags: Defensiva, Cambio de forma, Hombre oso, Tiempo de reutilización, Reducción de daño.",
			"esMX": "Rugido Debilitante también te fortifica con un 22% de tu vida de base.\n\nTags: Defensivo, Metamorfosis, Hombre oso, Recuperación, Reducción de daño.",
			"frFR": "Rugissement débilitant vous confère aussi un montant de fortification égal à 22% de vos points de vie de base.\n\nTags: Défense, Métamorphose, Ursoïde, Temps de recharge, Réduction des dégâts.",
			"itIT": "Ruggito Debilitante ti fornisce anche Fortificazione per il 22% della Vita base.\n\nTags: Difesa, Mutaforma, Orso Mannaro, Tempo di recupero, Riduzione danni.",
			"jaJP": "〈衰弱の雄叫び〉に、基本ライフの22%にあたる分、自らを強化する効果が加わる。\n\nTags: 防御, 変身, 人熊, クールダウン, ダメージ減少.",
			"koKR": "쇠약의 포효가 자신을 기본 생명력의 22%만큼 보강합니다.\n\nTags: 방어, 변신, 곰인간, 재사용 대기시간, 피해 감소.",
			"plPL": "Obezwładniający Ryk zapewnia ci również umocnienie równe 22% podstawowego zdrowia.\n\nTags: Defensywa, Zmiennokształtność, Niedźwiedziołak, Odnowienie, Redukcja Obrażeń.",
			"ptBR": "Rugido Debilitante também fortifica você em 22% da vida básica.\n\nTags: Defesa, Metamorfose, Urso, Recarga, Redução de Dano.",
			"ruRU": "\"Изнуряющий рев\" также дает вам укрепление в объеме 22% базового запаса здоровья.\n\nTags: Защита, Смена облика, Медведь, Время восстановления, Уменьшение урона.",
			"zhCN": "挫志咆哮也会强固你 22% 基础生命。\n\nTags: 防御, 变形, 熊人, 冷却时间, 伤害减免.",
			"zhTW": "致衰狂吼會使你獲得相當於 22% 基礎生命值的強韌。\n\nTags: 防禦, 變形, 熊人, 冷卻時間, 傷害減免."
},
		id: 48,
		maxPoints: 1,
		x: 4.11,
		y: 515.641
	},
	"Preserving Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Enhanced Debilitating Roar" ],
		description: `Debilitating Roar also Heals you for 4% of your Maximum Life each second for its duration.

Tags: Defensive, Shapeshifting, Werebear, Cooldown, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Bewahrendes Schwächendes Gebrüll",
			"esES": "Rugido debilitante defensor",
			"esMX": "Rugido Debilitante Preservador",
			"frFR": "Rugissement débilitant préservateur",
			"itIT": "Ruggito Debilitante Tutelato",
			"jaJP": "衰弱の雄叫び(保護)",
			"koKR": "보존하는 쇠약의 포효",
			"plPL": "Zachowawczy Obezwładniający Ryk",
			"ptBR": "Rugido Debilitante de Proteção",
			"ruRU": "Оберегающий изнуряющий рев",
			"zhCN": "固成挫志咆哮",
			"zhTW": "護存致衰狂吼"
},
		descriptionLocalized: {
			"deDE": "Schwächendes Gebrüll heilt Euch außerdem um 4% Eures maximalen Lebens pro Sekunde, solange die Fertigkeit anhält.\n\nTags: Defensiv, Gestaltwandeln, Werbär, Abklingzeit, Schadensreduktion.",
			"esES": "Rugido debilitante también te cura un 4% de tu vida máxima cada segundo mientras dura.\n\nTags: Defensiva, Cambio de forma, Hombre oso, Tiempo de reutilización, Reducción de daño.",
			"esMX": "Rugido Debilitante también te sana por un 4% de tu vida máxima por cada segundo de su duración.\n\nTags: Defensivo, Metamorfosis, Hombre oso, Recuperación, Reducción de daño.",
			"frFR": "Rugissement débilitant vous rend aussi 4% de votre maximum de points de vie par seconde durant toute sa durée.\n\nTags: Défense, Métamorphose, Ursoïde, Temps de recharge, Réduction des dégâts.",
			"itIT": "Ruggito Debilitante ti cura anche del 4% della tua Vita massima ogni secondo per tutta la sua durata.\n\nTags: Difesa, Mutaforma, Orso Mannaro, Tempo di recupero, Riduzione danni.",
			"jaJP": "〈衰弱の雄叫び〉に、効果時間中はライフ最大値の4%にあたる([PlayerHealthMax() * 0.04])を毎秒回復する効果が加わる。\n\nTags: 防御, 変身, 人熊, クールダウン, ダメージ減少.",
			"koKR": "쇠약의 포효가 지속시간 동안 매초 최대 생명력의 4%만큼 자신의 생명력을 회복합니다.\n\nTags: 방어, 변신, 곰인간, 재사용 대기시간, 피해 감소.",
			"plPL": "Obezwładniający Ryk przywraca ci również co sekundę przez cały czas działania 4% twojego maksymalnego zdrowia.\n\nTags: Defensywa, Zmiennokształtność, Niedźwiedziołak, Odnowienie, Redukcja Obrażeń.",
			"ptBR": "Rugido Debilitante também cura 4% da sua vida máxima a cada segundo durante o efeito.\n\nTags: Defesa, Metamorfose, Urso, Recarga, Redução de Dano.",
			"ruRU": "\"Изнуряющий рев\" также восполняет вам 4% максимального запаса здоровья раз в сек.\n\nTags: Защита, Смена облика, Медведь, Время восстановления, Уменьшение урона.",
			"zhCN": "挫志咆哮持续期间也会使你每秒恢复 4% 生命上限。\n\nTags: 防御, 变形, 熊人, 冷却时间, 伤害减免.",
			"zhTW": "致衰狂吼在持續時間內每秒為你恢復生命值上限的4%。\n\nTags: 防禦, 變形, 熊人, 冷卻時間, 傷害減免."
},
		id: 49,
		maxPoints: 1,
		x: 158.01,
		y: 633.444
	},
	"Innate Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Enhanced Debilitating Roar" ],
		description: `Debilitating Roar also Slows enemies by 65% for its duration.

Tags: Defensive, Shapeshifting, Werebear, Cooldown, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Angeborenes Schwächendes Gebrüll",
			"esES": "Rugido debilitante innato",
			"esMX": "Rugido Debilitante Innato",
			"frFR": "Rugissement débilitant inné",
			"itIT": "Ruggito Debilitante Innato",
			"jaJP": "衰弱の雄叫び(天性)",
			"koKR": "타고난 쇠약의 포효",
			"plPL": "Wrodzony Obezwładniający Ryk",
			"ptBR": "Rugido Debilitante Inato",
			"ruRU": "Исконный изнуряющий рев",
			"zhCN": "天禀挫志咆哮",
			"zhTW": "固有致衰狂吼"
},
		descriptionLocalized: {
			"deDE": "Schwächendes Gebrüll verlangsamt außerdem Gegner um 65%, solange die Fertigkeit anhält.\n\nTags: Defensiv, Gestaltwandeln, Werbär, Abklingzeit, Schadensreduktion.",
			"esES": "Rugido debilitante también ralentiza a los enemigos un 65% mientras dura.\n\nTags: Defensiva, Cambio de forma, Hombre oso, Tiempo de reutilización, Reducción de daño.",
			"esMX": "Rugido Debilitante también ralentiza a los enemigos un 65% en el transcurso de su duración.\n\nTags: Defensivo, Metamorfosis, Hombre oso, Recuperación, Reducción de daño.",
			"frFR": "Rugissement débilitant ralentit aussi les adversaires de 65% durant toute sa durée.\n\nTags: Défense, Métamorphose, Ursoïde, Temps de recharge, Réduction des dégâts.",
			"itIT": "Ruggito Debilitante rallenta anche i nemici del 65% per tutta la sua durata.\n\nTags: Difesa, Mutaforma, Orso Mannaro, Tempo di recupero, Riduzione danni.",
			"jaJP": "〈衰弱の雄叫び〉に、効果時間中は敵の移動速度を65%低下させる効果が加わる。\n\nTags: 防御, 変身, 人熊, クールダウン, ダメージ減少.",
			"koKR": "쇠약의 포효가 지속시간 동안 적을 65% 감속시킵니다.\n\nTags: 방어, 변신, 곰인간, 재사용 대기시간, 피해 감소.",
			"plPL": "Obezwładniający Ryk spowalnia również wrogów o 65% przez cały czas działania.\n\nTags: Defensywa, Zmiennokształtność, Niedźwiedziołak, Odnowienie, Redukcja Obrażeń.",
			"ptBR": "Rugido Debilitante também desacelera inimigos em 65% durante o efeito.\n\nTags: Defesa, Metamorfose, Urso, Recarga, Redução de Dano.",
			"ruRU": "\"Изнуряющий рев\" также замедляет противников на 65% до истечения времени действия.\n\nTags: Защита, Смена облика, Медведь, Время восстановления, Уменьшение урона.",
			"zhCN": "挫志咆哮也会在持续期间内使敌人减速 65%。\n\nTags: 防御, 变形, 熊人, 冷却时间, 伤害减免.",
			"zhTW": "致衰狂吼在持續時間內會使敵人緩速65%。\n\nTags: 防禦, 變形, 熊人, 冷卻時間, 傷害減免."
},
		id: 50,
		maxPoints: 1,
		x: -150.868,
		y: 633.023
	},
	"Ancestral Fortitude": {
		connections: [ "Defensive", "Vigilance" ],
		description: `Increase your Non-Physical Resistances by {5/10/15/20/25/30/35/40/45/50}%.

Tags: Non-Physical, Resistance.`,
		nameLocalized: {
			"deDE": "Kraft der Ahnen",
			"esES": "Entereza ancestral",
			"esMX": "Fortaleza Ancestral",
			"frFR": "Vigueur ancestrale",
			"itIT": "Fermezza Ancestrale",
			"jaJP": "祖霊の忍耐力",
			"koKR": "선조의 인내",
			"plPL": "Hart Przodków",
			"ptBR": "Fortitude Ancestral",
			"ruRU": "Стойкость предков",
			"zhCN": "先祖坚韧",
			"zhTW": "先祖剛毅"
},
		descriptionLocalized: {
			"deDE": "Erhöht Eure nichtphysischen Widerstände um {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Nichtphysisch, Widerstand.",
			"esES": "Aumenta un {5/10/15/20/25/30/35/40/45/50}% tus resistencias no físicas.\n\nTags: No física, Resistencia.",
			"esMX": "Aumenta tus resistencias no físicas un {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: No física, Resistencia.",
			"frFR": "Augmente vos résistances non physiques de {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Non physique, Résistance.",
			"itIT": "Aumenti le tue resistenze non fisiche del {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Non fisico, Resistenza.",
			"jaJP": "非物理攻撃耐性が{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: 非物理, 耐性.",
			"koKR": "모든 비물리 저항이 {5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 비물리, 저항.",
			"plPL": "Twoje odporności niefizyczne są zwiększone o {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Niefizyczne, Odporność.",
			"ptBR": "Aumenta suas resistências a dano não físico em {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Não física, Resistência.",
			"ruRU": "Сопротивление нефизическому урону повышается на {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Нефизический урон, Сопротивление.",
			"zhCN": "你的非物理抗性提高 {5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 非物理, 抗性.",
			"zhTW": "你的非物理抗性提高 {5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 非物理, 抗性."
},
		id: 51,
		maxPoints: 3,
		x: -552.215,
		y: 1.025
	},
	"Vigilance": {
		connections: [ "Ancestral Fortitude" ],
		description: `You gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction for 6 seconds after using a Defensive Skill.

Tags: Damage Reduction, Defensive.`,
		nameLocalized: {
			"deDE": "Wachsamkeit",
			"esES": "Vigilancia",
			"esMX": "Custodia",
			"frFR": "Vigilance",
			"itIT": "Vigilanza",
			"jaJP": "警戒",
			"koKR": "수문장",
			"plPL": "Czujność",
			"ptBR": "Vigilância",
			"ruRU": "Бдительность",
			"zhCN": "警戒者",
			"zhTW": "戒慎"
},
		descriptionLocalized: {
			"deDE": "Nach der Verwendung einer defensiven Fertigkeit erhaltet Ihr 6 Sek. lang {5/10/15/20/25/30/35/40/45/50}% Schadensreduktion.\n\nTags: Schadensreduktion, Defensiv.",
			"esES": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño durante 6 s tras usar una habilidad defensiva.\n\nTags: Reducción de daño, Defensiva.",
			"esMX": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño durante 6 segundos tras usar una habilidad defensiva.\n\nTags: Reducción de daño, Defensivo.",
			"frFR": "Vous obtenez {5/10/15/20/25/30/35/40/45/50}% de réduction des dégâts dans les 6 s qui suivent l'utilisation d'une compétence défensive.\n\nTags: Réduction des dégâts, Défense.",
			"itIT": "Ottieni il {5/10/15/20/25/30/35/40/45/50}% di riduzione danni per 6 s dopo aver usato un'abilità di Difesa.\n\nTags: Riduzione danni, Difesa.",
			"jaJP": "防御スキル使用後の6秒間、受けるダメージが{5/10/15/20/25/30/35/40/45/50}%軽減される。\n\nTags: ダメージ減少, 防御.",
			"koKR": "방어 기술 사용 후 6초 동안 {5/10/15/20/25/30/35/40/45/50}%의 피해 감소를 얻습니다.\n\nTags: 피해 감소, 방어.",
			"plPL": "Otrzymujesz premię {5/10/15/20/25/30/35/40/45/50}% do redukcji obrażeń na 6 sek. po użyciu umiejętności Defensywnej.\n\nTags: Redukcja Obrażeń, Defensywa.",
			"ptBR": "Você recebe {5/10/15/20/25/30/35/40/45/50}% de redução de dano por 6 segundos depois de usar uma habilidade de Defesa.\n\nTags: Redução de Dano, Defesa.",
			"ruRU": "Когда вы применяете умение категории \"Защита\", получаемый вами урон уменьшается на {5/10/15/20/25/30/35/40/45/50}% на 6 сек.\n\nTags: Уменьшение урона, Защита.",
			"zhCN": "使用防御技能后, 你获得 {5/10/15/20/25/30/35/40/45/50}% 的伤害减免, 持续 6 秒。\n\nTags: 伤害减免, 防御.",
			"zhTW": "使用防禦技能後,你獲得 {5/10/15/20/25/30/35/40/45/50}% 傷害減免,持續 6 秒。\n\nTags: 傷害減免, 防禦."
},
		id: 52,
		maxPoints: 3,
		x: -923.905,
		y: 0.39
	},
	"Blood Howl": {
		connections: [ "Defensive", "Enhanced Blood Howl" ],
		description: `Cooldown: {#} seconds
Shapeshift into a Werewolf and howl furiously, Healing you for {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% of your Maximum Life.

Tags: Defensive, Shapeshifting, Werewolf, Cooldown, Healing.`,
		nameLocalized: {
			"deDE": "Blutgeheul",
			"esES": "Aullido de sangre",
			"esMX": "Aullido Sanguinario",
			"frFR": "Hurlement sanglant",
			"itIT": "Ululato Sanguinario",
			"jaJP": "血の遠吠え",
			"koKR": "피의 울부짖음",
			"plPL": "Zew Krwi",
			"ptBR": "Uivo Sangrento",
			"ruRU": "Кровавый вой",
			"zhCN": "血性狂吼",
			"zhTW": "血性狂吼"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nVerwandelt Euch in einen Werwolf und lasst ein wildes Heulen erschallen, das Euch um {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% Eures maximalen Lebens heilt.\n\nTags: Defensiv, Gestaltwandeln, Werwolf, Abklingzeit, Heilung.",
			"esES": "Tiempo de reutilización: {#} s\nTe transformas en un hombre lobo y profieres un aullido furioso para curarte un {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% de tu vida máxima.\n\nTags: Defensiva, Cambio de forma, Hombre lobo, Tiempo de reutilización, Curación.",
			"esMX": "Recuperación: {#} segundos\nCambias de forma a un hombre lobo, aúllas furiosamente y te sanas por un {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% de tu vida máxima.\n\nTags: Defensivo, Metamorfosis, Hombre lobo, Recuperación, Sanación.",
			"frFR": "Temps de recharge: {#} s\nVous vous transformez en lycanthrope et hurlez furieusement, ce qui vous rend {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% de votre maximum de points de vie.\n\nTags: Défense, Métamorphose, Lycanthrope, Temps de recharge, Soins.",
			"itIT": "Tempo di recupero: {#} s\nMuti in un Lupo Mannaro e ululi furiosamente, curandoti del {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% della tua Vita massima.\n\nTags: Difesa, Mutaforma, Lupo Mannaro, Tempo di recupero, Guarigione.",
			"jaJP": "クールダウン: {#}秒\n人狼に変身して雄叫びを上げ、ライフが最大値の{20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}%にあたる回復する。\n\nTags: 防御, 変身, 人狼, クールダウン, 回復.",
			"koKR": "재사용 대기시간: {#}초\n늑대인간으로 변신하고 맹렬하게 포효하여 최대 생명력의 {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}%만큼 생명력을 회복합니다.\n\nTags: 방어, 변신, 늑대인간, 재사용 대기시간, 치유.",
			"plPL": "Czas odnowienia: {#} sek.\nPrzemieniasz się w wilkołaka i wydajesz przeraźliwy skowyt, który przywraca ci {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% maksymalnego zdrowia.\n\nTags: Defensywa, Zmiennokształtność, Wilkołak, Odnowienie, Leczenie.",
			"ptBR": "Recarga: {#} segundos\nTransforma-se em um lobisomem e uiva furiosamente, curando {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% da sua vida máxima.\n\nTags: Defesa, Metamorfose, Lobisomem, Recarga, Cura.",
			"ruRU": "Время восстановления: {#} сек.\nВы принимаете облик волка и яростно воете, восполняя {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% максимального запаса здоровья.\n\nTags: Защита, Смена облика, Облик волка, Время восстановления, Исцеление.",
			"zhCN": "冷却时间: {#} 秒\n变成狼人并疯狂吼叫, 为你恢复 {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% 生命上限。\n\nTags: 防御, 变形, 狼人, 冷却时间, 治疗.",
			"zhTW": "冷卻時間:{#} 秒\n變身為狼人並憤怒嗥叫,為你恢復相當於生命值上限 {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}%的生命值。\n\nTags: 防禦, 變形, 狼人, 冷卻時間, 治療."
},
		id: 53,
		maxPoints: 5,
		values: [ "15" ],
		x: 445.755,
		y: 169.805
	},
	"Enhanced Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Blood Howl", "Innate Blood Howl", "Preserving Blood Howl" ],
		description: `Kills reduce the Cooldown of Blood Howl by 1 second.

Tags: Defensive, Shapeshifting, Werewolf, Cooldown, Healing.`,
		nameLocalized: {
			"deDE": "Verbessertes Blutgeheul",
			"esES": "Aullido de sangre mejorado",
			"esMX": "Aullido Sanguinario Potenciado",
			"frFR": "Hurlement sanglant renforcé",
			"itIT": "Ululato Sanguinario Rinforzato",
			"jaJP": "血の遠吠え(強化版)",
			"koKR": "강화된 피의 울부짖음",
			"plPL": "Wzmocniony Zew Krwi",
			"ptBR": "Uivo Sangrento Aperfeiçoado",
			"ruRU": "Усиленный кровавый вой",
			"zhCN": "强化血性狂吼",
			"zhTW": "強化血性狂吼"
},
		descriptionLocalized: {
			"deDE": "Das Töten von Gegnern reduziert die Abklingzeit von Blutgeheul um 1 Sek.\n\nTags: Defensiv, Gestaltwandeln, Werwolf, Abklingzeit, Heilung.",
			"esES": "Los asesinatos reducen 1 s el tiempo de reutilización de Aullido de sangre.\n\nTags: Defensiva, Cambio de forma, Hombre lobo, Tiempo de reutilización, Curación.",
			"esMX": "Cada enemigo eliminado reduce 1 segundo la recuperación de Aullido Sanguinario.\n\nTags: Defensivo, Metamorfosis, Hombre lobo, Recuperación, Sanación.",
			"frFR": "Chaque cible tuée réduit le temps de recharge de Hurlement sanglant de 1 s.\n\nTags: Défense, Métamorphose, Lycanthrope, Temps de recharge, Soins.",
			"itIT": "Le uccisioni riducono il tempo di recupero di Ululato Sanguinario di 1 s.\n\nTags: Difesa, Mutaforma, Lupo Mannaro, Tempo di recupero, Guarigione.",
			"jaJP": "敵を倒すと〈血の遠吠え〉のクールダウン時間が1秒短縮される。\n\nTags: 防御, 変身, 人狼, クールダウン, 回復.",
			"koKR": "적 처치 시 피의 울부짖음의 재사용 대기시간이 1초 감소합니다.\n\nTags: 방어, 변신, 늑대인간, 재사용 대기시간, 치유.",
			"plPL": "Zabijanie wrogów skraca czas odnowienia Zewu Krwi o 1 sek.\n\nTags: Defensywa, Zmiennokształtność, Wilkołak, Odnowienie, Leczenie.",
			"ptBR": "Abates reduzem a recarga de Uivo Sangrento em 1 segundo.\n\nTags: Defesa, Metamorfose, Lobisomem, Recarga, Cura.",
			"ruRU": "Убийства сокращают время восстановления \"Кровавого воя\" на 1 сек.\n\nTags: Защита, Смена облика, Облик волка, Время восстановления, Исцеление.",
			"zhCN": "消灭敌人会使血性狂吼的冷却时间缩短 1 秒。\n\nTags: 防御, 变形, 狼人, 冷却时间, 治疗.",
			"zhTW": "殺死敵人使血性狂吼的冷卻時間縮短 1 秒。\n\nTags: 防禦, 變形, 狼人, 冷卻時間, 治療."
},
		id: 54,
		maxPoints: 1,
		x: 774.845,
		y: 289.015
	},
	"Innate Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Enhanced Blood Howl" ],
		description: `Blood Howl also generates 20 Spirit.

Tags: Defensive, Shapeshifting, Werewolf, Cooldown, Healing.`,
		nameLocalized: {
			"deDE": "Angeborenes Blutgeheul",
			"esES": "Aullido de sangre innato",
			"esMX": "Aullido Sanguinario Innato",
			"frFR": "Hurlement sanglant inné",
			"itIT": "Ululato Sanguinario Innato",
			"jaJP": "血の遠吠え(天性)",
			"koKR": "타고난 피의 울부짖음",
			"plPL": "Wrodzony Zew Krwi",
			"ptBR": "Uivo Sangrento Inato",
			"ruRU": "Исконный кровавый вой",
			"zhCN": "天禀血性狂吼",
			"zhTW": "固有血性狂吼"
},
		descriptionLocalized: {
			"deDE": "Blutgeheul generiert außerdem 20 Geisteskraft.\n\nTags: Defensiv, Gestaltwandeln, Werwolf, Abklingzeit, Heilung.",
			"esES": "Aullido de sangre también genera 20 de espíritu.\n\nTags: Defensiva, Cambio de forma, Hombre lobo, Tiempo de reutilización, Curación.",
			"esMX": "Aullido Sanguinario también genera 20 de Espíritu.\n\nTags: Defensivo, Metamorfosis, Hombre lobo, Recuperación, Sanación.",
			"frFR": "Hurlement sanglant génère aussi 20 points d'esprit.\n\nTags: Défense, Métamorphose, Lycanthrope, Temps de recharge, Soins.",
			"itIT": "Ululato Sanguinario genera anche 20 spirito.\n\nTags: Difesa, Mutaforma, Lupo Mannaro, Tempo di recupero, Guarigione.",
			"jaJP": "〈血の遠吠え〉に、精神力を20回復する効果が加わる。\n\nTags: 防御, 変身, 人狼, クールダウン, 回復.",
			"koKR": "피의 울부짖음이 영력도 20 생성합니다.\n\nTags: 방어, 변신, 늑대인간, 재사용 대기시간, 치유.",
			"plPL": "Zew Krwi generuje także 20 pkt. siły duchowej.\n\nTags: Defensywa, Zmiennokształtność, Wilkołak, Odnowienie, Leczenie.",
			"ptBR": "Uivo Sangrento também gera 20 de espírito.\n\nTags: Defesa, Metamorfose, Lobisomem, Recarga, Cura.",
			"ruRU": "\"Кровавый вой\" также дает 20 ед. духа.\n\nTags: Защита, Смена облика, Облик волка, Время восстановления, Исцеление.",
			"zhCN": "血性狂吼也会生成 20 点灵力。\n\nTags: 防御, 变形, 狼人, 冷却时间, 治疗.",
			"zhTW": "血性狂吼也會產生 20 點靈力。\n\nTags: 防禦, 變形, 狼人, 冷卻時間, 治療."
},
		id: 55,
		maxPoints: 1,
		x: 848.495,
		y: 414.8
	},
	"Preserving Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Enhanced Blood Howl" ],
		description: `Blood Howl also increases your Attack Speed by +15% for 4 seconds.

Tags: Defensive, Shapeshifting, Werewolf, Cooldown, Healing.`,
		nameLocalized: {
			"deDE": "Bewahrendes Blutgeheul",
			"esES": "Aullido de sangre defensor",
			"esMX": "Aullido Sanguinario Preservador",
			"frFR": "Hurlement sanglant préservateur",
			"itIT": "Ululato Sanguinario Tutelato",
			"jaJP": "血の遠吠え(保護)",
			"koKR": "보존하는 피의 울부짖음",
			"plPL": "Zachowawczy Zew Krwi",
			"ptBR": "Uivo Sangrento de Proteção",
			"ruRU": "Оберегающий кровавый вой",
			"zhCN": "固成血性狂吼",
			"zhTW": "護存血性狂吼"
},
		descriptionLocalized: {
			"deDE": "Blutgeheul erhöht außerdem 4 Sek. lang Eure Angriffsgeschwindigkeit um +15%.\n\nTags: Defensiv, Gestaltwandeln, Werwolf, Abklingzeit, Heilung.",
			"esES": "Aullido de sangre también aumenta un +15% tu velocidad de ataque durante 4 s.\n\nTags: Defensiva, Cambio de forma, Hombre lobo, Tiempo de reutilización, Curación.",
			"esMX": "Aullido Sanguinario también aumenta tu velocidad de ataque un +15% durante 4 segundos.\n\nTags: Defensivo, Metamorfosis, Hombre lobo, Recuperación, Sanación.",
			"frFR": "Hurlement sanglant augmente aussi votre vitesse d'attaque de +15% pendant 4 s.\n\nTags: Défense, Métamorphose, Lycanthrope, Temps de recharge, Soins.",
			"itIT": "Ululato Sanguinario aumenta anche la tua velocità d'attacco del +15% per 4 s.\n\nTags: Difesa, Mutaforma, Lupo Mannaro, Tempo di recupero, Guarigione.",
			"jaJP": "〈血の遠吠え〉に、攻撃速度が4秒間+15%上昇する効果が加わる。\n\nTags: 防御, 変身, 人狼, クールダウン, 回復.",
			"koKR": "피의 울부짖음이 4초 동안 공격 속도도 +15% 증가시킵니다.\n\nTags: 방어, 변신, 늑대인간, 재사용 대기시간, 치유.",
			"plPL": "Zew Krwi zwiększa także twoją szybkość ataku o +15% przez 4 sek.\n\nTags: Defensywa, Zmiennokształtność, Wilkołak, Odnowienie, Leczenie.",
			"ptBR": "Uivo Sangrento também aumenta sua velocidade de ataque em +15% por 4 segundos.\n\nTags: Defesa, Metamorfose, Lobisomem, Recarga, Cura.",
			"ruRU": "\"Кровавый вой\" также повышает вашу скорость атаки на +15% на 4 сек.\n\nTags: Защита, Смена облика, Облик волка, Время восстановления, Исцеление.",
			"zhCN": "血性狂吼也会使你的攻击速度提高 +15%, 持续 4 秒。\n\nTags: 防御, 变形, 狼人, 冷却时间, 治疗.",
			"zhTW": "血性狂吼會使攻擊速度提高 +15%,持續 4 秒。\n\nTags: 防禦, 變形, 狼人, 冷卻時間, 治療."
},
		id: 56,
		maxPoints: 1,
		x: 1024.25,
		y: 280.42
	},
	"Cyclone Armor": {
		connections: [ "Defensive", "Enhanced Cyclone Armor" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 25%
Passive: Powerful winds surround you, granting {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% Non-Physical Damage Reduction.

Active: The winds rapidly expand, Knocking Back enemies and dealing {30/33/36/39/42/45/48/51/54/57}% damage.

Tags: Defensive, Nature Magic, Storm, Cooldown, Damage, Damage Reduction, Non-Physical, Physical, Crowd Control.`,
		nameLocalized: {
			"deDE": "Zyklonrüstung",
			"esES": "Armadura de ciclón",
			"esMX": "Armadura de Ciclón",
			"frFR": "Armure cyclonique",
			"itIT": "Corazza del Ciclone",
			"jaJP": "風の加護",
			"koKR": "회오리 갑옷",
			"plPL": "Zbroja Cyklonu",
			"ptBR": "Armadura Ciclônica",
			"ruRU": "Ураганный доспех",
			"zhCN": "旋风甲",
			"zhTW": "氣旋護甲"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 25%\nPassiv: Mächtige Winde umgeben Euch und verringern Euren erlittenen nichtphysischen Schaden um {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}%.\n\nAktiv: Die Winde dehnen sich schnell aus, stoßen Gegner zurück und verursachen {30/33/36/39/42/45/48/51/54/57}% Schaden.\n\nTags: Defensiv, Naturmagie, Sturm, Abklingzeit, Schaden, Schadensreduktion, Nichtphysisch, Physisch, Kontrollverlust.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 25%\nPasiva: Te rodean vientos poderosos que te otorgan un {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% de reducción de daño no físico.\n\nActiva: Los vientos se expanden rápidamente, repelen a los enemigos e infligen {30/33/36/39/42/45/48/51/54/57}% de daño.\n\nTags: Defensiva, Magia de la naturaleza, Tormenta, Tiempo de reutilización, Daño, Reducción de daño, No física, Física, Control de masas.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 25%\nPasiva: Te rodean vientos fuertes que otorgan un {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% de reducción de daño no físico.\n\nActiva: Los vientos se expanden con rapidez, repelen a los enemigos e infligen {30/33/36/39/42/45/48/51/54/57}% de daño.\n\nTags: Defensivo, Magia de la naturaleza, Tormenta, Recuperación, Daño, Reducción de daño, No física, Física, Control de multitudes.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 25%\nCompétence passive: des vents puissants vous entourent, ce qui vous confère {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% de réduction des dégâts non physiques.\n\nCompétence active: les vents se déchaînent, ce qui repousse les adversaires en leur infligeant {30/33/36/39/42/45/48/51/54/57}% points de dégâts.\n\nTags: Défense, Magie naturelle, Tempête, Temps de recharge, Dégâts, Réduction des dégâts, Non physique, Dégâts physiques, Perte de contrôle.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 25%\nPassiva: venti potenti ti circondano, riducendo i danni non fisici che subisci del {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}%.\n\nAttiva: i venti si espandono rapidamente, respingendo indietro i nemici e infliggendo {30/33/36/39/42/45/48/51/54/57}% danni.\n\nTags: Difesa, Magia naturale, Tempesta, Tempo di recupero, Danni, Riduzione danni, Non fisico, Fisico, Effetti debilitanti.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 25%\nパッシブ: 強力な風が周囲を取り巻き、非物理ダメージを{10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}%軽減する。\n\nアクティブ: 風が猛烈な勢いで広がって、敵をノックバックして{30/33/36/39/42/45/48/51/54/57}%のダメージを与える。\n\nTags: 防御, 自然魔法, 嵐, クールダウン, ダメージ, ダメージ減少, 非物理, 物理, 操作障害効果.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 25%\n지속 효과: 강력한 바람이 드루이드를 둘러싸 비물리 피해를 {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% 감소시킵니다.\n\n사용 효과: 바람이 빠르게 넓어지며 근처의 적에게 {30/33/36/39/42/45/48/51/54/57}%의 피해를 주고 밀쳐냅니다.\n\nTags: 방어, 자연 마법, 폭풍, 재사용 대기시간, 피해, 피해 감소, 비물리, 물리, 군중 제어.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 25%\nDziałanie pasywne: Otaczają cię potężne wichry, zapewniając {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% redukcji obrażeń niefizycznych.\n\nDziałanie aktywne: Wichry gwałtownie się rozszerzają, odrzucając wrogów i zadając {30/33/36/39/42/45/48/51/54/57}% pkt. obrażeń.\n\nTags: Defensywa, Magia Natury, Burza, Odnowienie, Obrażenia, Redukcja Obrażeń, Niefizyczne, Fizyczne, Ograniczanie Kontroli.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 25%\nPassiva: Ventos poderosos cercam você, concedendo {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% de redução de dano não físico.\n\nAtiva: Os ventos intensificam-se rapidamente, repelindo inimigos e causando {30/33/36/39/42/45/48/51/54/57}% de dano.\n\nTags: Defesa, Magia da Natureza, Tempestade, Recarga, Dano, Redução de Dano, Não física, Física, Controle de Grupo.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 25%.\nПассивный эффект: вас окружают мощные потоки ветра, которые уменьшают получаемый нефизический урон на {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}%.\n\nЭффект при активации: потоки ветра стремительно расширяются, нанося ближайшим противникам {30/33/36/39/42/45/48/51/54/57}% ед. урона и отбрасывая их.\n\nTags: Защита, Силы природы, Буря, Время восстановления, Урон, Уменьшение урона, Нефизический урон, Физический урон, Контроль.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 25%\n被动: 强风环绕着你, 获得 {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% 非物理伤害减免。\n\n主动: 强风迅速膨胀, 对附近的敌人造成 {30/33/36/39/42/45/48/51/54/57}% 点伤害并将其击退。\n\nTags: 防御, 自然魔法, 风暴, 冷却时间, 伤害, 伤害减免, 非物理, 物理, 群控.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:25%\n被動效果:強勁的風環繞著你,獲得 {10/10.9/11.9/12.8/13.7/14.6/15.5/16.4/17.3/18.1}% 非物理傷害減免。\n\n主動效果:風襲範圍快速擴張,擊退敵人並造成 {30/33/36/39/42/45/48/51/54/57}% 點傷害。\n\nTags: 防禦, 自然魔法, 風暴, 冷卻時間, 傷害, 傷害減免, 非物理, 物理, 控場."
},
		id: 57,
		maxPoints: 5,
		values: [ "18" ],
		x: 415.99,
		y: -192.375
	},
	"Enhanced Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Cyclone Armor", "Preserving Cyclone Armor", "Innate Cyclone Armor" ],
		description: `Enemies who are Knocked Back by Cyclone Armor are also Slowed by 70% for 2 seconds.

Tags: Defensive, Nature Magic, Storm, Cooldown, Damage, Damage Reduction, Non-Physical, Physical, Crowd Control.`,
		nameLocalized: {
			"deDE": "Verbesserte Zyklonrüstung",
			"esES": "Armadura de ciclón mejorada",
			"esMX": "Armadura de Ciclón Potenciada",
			"frFR": "Armure cyclonique renforcée",
			"itIT": "Corazza del Ciclone Rinforzata",
			"jaJP": "風の加護(強化版)",
			"koKR": "강화된 회오리 갑옷",
			"plPL": "Wzmocniona Zbroja Cyklonu",
			"ptBR": "Armadura Ciclônica Aperfeiçoada",
			"ruRU": "Усиленный ураганный доспех",
			"zhCN": "强化旋风甲",
			"zhTW": "強化氣旋護甲"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Zyklonrüstung zurückgestoßen werden, werden außerdem 2 Sek. lang um 70% verlangsamt.\n\nTags: Defensiv, Naturmagie, Sturm, Abklingzeit, Schaden, Schadensreduktion, Nichtphysisch, Physisch, Kontrollverlust.",
			"esES": "Los enemigos repelidos por Armadura de ciclón también quedan ralentizados un 70% durante 2 s.\n\nTags: Defensiva, Magia de la naturaleza, Tormenta, Tiempo de reutilización, Daño, Reducción de daño, No física, Física, Control de masas.",
			"esMX": "Los enemigos repelidos por Armadura de Ciclón también se ralentizan un 70% durante 2 segundos.\n\nTags: Defensivo, Magia de la naturaleza, Tormenta, Recuperación, Daño, Reducción de daño, No física, Física, Control de multitudes.",
			"frFR": "Les cibles repoussées par Armure cyclonique sont aussi ralenties de 70% pendant 2 s.\n\nTags: Défense, Magie naturelle, Tempête, Temps de recharge, Dégâts, Réduction des dégâts, Non physique, Dégâts physiques, Perte de contrôle.",
			"itIT": "I nemici respinti indietro da Corazza del Ciclone sono anche rallentati del 70% per 2 s.\n\nTags: Difesa, Magia naturale, Tempesta, Tempo di recupero, Danni, Riduzione danni, Non fisico, Fisico, Effetti debilitanti.",
			"jaJP": "〈風の加護〉によってノックバックされた敵の移動速度が2秒間70%低下する。\n\nTags: 防御, 自然魔法, 嵐, クールダウン, ダメージ, ダメージ減少, 非物理, 物理, 操作障害効果.",
			"koKR": "회오리 갑옷으로 밀쳐낸 적이 2초 동안 70% 감속됩니다.\n\nTags: 방어, 자연 마법, 폭풍, 재사용 대기시간, 피해, 피해 감소, 비물리, 물리, 군중 제어.",
			"plPL": "Wrogowie odrzuceni przez Zbroję Cyklonu są również spowolnieni o 70% na 2 sek.\n\nTags: Defensywa, Magia Natury, Burza, Odnowienie, Obrażenia, Redukcja Obrażeń, Niefizyczne, Fizyczne, Ograniczanie Kontroli.",
			"ptBR": "Inimigos repelidos por Armadura Ciclônica também são desacelerados em 70% por 2 segundos.\n\nTags: Defesa, Magia da Natureza, Tempestade, Recarga, Dano, Redução de Dano, Não física, Física, Controle de Grupo.",
			"ruRU": "Противники, отброшенные \"Ураганным доспехом\", также замедляются на 70% на 2 сек.\n\nTags: Защита, Силы природы, Буря, Время восстановления, Урон, Уменьшение урона, Нефизический урон, Физический урон, Контроль.",
			"zhCN": "被旋风甲 击退的敌人也会被减速 70%, 持续 2 秒。\n\nTags: 防御, 自然魔法, 风暴, 冷却时间, 伤害, 伤害减免, 非物理, 物理, 群控.",
			"zhTW": "被氣旋護甲擊退的敵人會緩速 70%,持續 2 秒。\n\nTags: 防禦, 自然魔法, 風暴, 冷卻時間, 傷害, 傷害減免, 非物理, 物理, 控場."
},
		id: 58,
		maxPoints: 1,
		x: 726.745,
		y: -326.92
	},
	"Preserving Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Every 10 seconds, Cyclone Armor intensifies, causing incoming damage to grant you 30% Damage Reduction for 2 seconds.

Tags: Defensive, Nature Magic, Storm, Cooldown, Damage, Damage Reduction, Non-Physical, Physical, Crowd Control.`,
		nameLocalized: {
			"deDE": "Bewahrende Zyklonrüstung",
			"esES": "Armadura de ciclón defensora",
			"esMX": "Armadura de Ciclón Preservadora",
			"frFR": "Armure cyclonique préservatrice",
			"itIT": "Corazza del Ciclone Tutelata",
			"jaJP": "風の加護(保護)",
			"koKR": "보존하는 회오리 갑옷",
			"plPL": "Zachowawcza Zbroja Cyklonu",
			"ptBR": "Armadura Ciclônica de Proteção",
			"ruRU": "Оберегающий ураганный доспех",
			"zhCN": "固成旋风甲",
			"zhTW": "護存氣旋護甲"
},
		descriptionLocalized: {
			"deDE": "Alle 10 Sek. wird Zyklonrüstung stärker, wodurch erlittener Schaden 2 Sek. lang 30% Schadensreduktion gewährt.\n\nTags: Defensiv, Naturmagie, Sturm, Abklingzeit, Schaden, Schadensreduktion, Nichtphysisch, Physisch, Kontrollverlust.",
			"esES": "Cada 10 s, Armadura de ciclón se intensifica, lo que provoca que el daño recibido te otorgue un 30% de reducción de daño durante 2 s.\n\nTags: Defensiva, Magia de la naturaleza, Tormenta, Tiempo de reutilización, Daño, Reducción de daño, No física, Física, Control de masas.",
			"esMX": "Cada 10 segundos, Armadura de Ciclón se intensifica, lo que causa que el daño que recibas te otorgue un 30% de reducción de daño durante 2 segundos.\n\nTags: Defensivo, Magia de la naturaleza, Tormenta, Recuperación, Daño, Reducción de daño, No física, Física, Control de multitudes.",
			"frFR": "Toutes les 10 s, Armure cyclonique s'intensifie, et les dégâts subis vous confèrent 30% de réduction des dégâts pendant 2 s.\n\nTags: Défense, Magie naturelle, Tempête, Temps de recharge, Dégâts, Réduction des dégâts, Non physique, Dégâts physiques, Perte de contrôle.",
			"itIT": "Ogni 10 s, Corazza del Ciclone si intensifica, facendo sì che i danni subiti ti conferiscano il 30% di riduzione danni per 2 s.\n\nTags: Difesa, Magia naturale, Tempesta, Tempo di recupero, Danni, Riduzione danni, Non fisico, Fisico, Effetti debilitanti.",
			"jaJP": "10秒ごとに〈風の加護〉が激しさを増し、受けるダメージを2秒間30%減少させる。\n\nTags: 防御, 自然魔法, 嵐, クールダウン, ダメージ, ダメージ減少, 非物理, 物理, 操作障害効果.",
			"koKR": "10초마다 회오리 갑옷이 격렬해져, 받는 피해가 2초 동안 30%의 피해 감소를 부여합니다.\n\nTags: 방어, 자연 마법, 폭풍, 재사용 대기시간, 피해, 피해 감소, 비물리, 물리, 군중 제어.",
			"plPL": "Co 10 sek. Zbroja Cyklonu wzmacnia się, powodując, że zadawane ci obrażenia zapewniają ci 30% redukcji obrażeń na 2 sek.\n\nTags: Defensywa, Magia Natury, Burza, Odnowienie, Obrażenia, Redukcja Obrażeń, Niefizyczne, Fizyczne, Ograniczanie Kontroli.",
			"ptBR": "A cada 10 segundos, Armadura Ciclônica é potencializada, fazendo com que o dano recebido conceda 30% de redução de dano por 2 segundos.\n\nTags: Defesa, Magia da Natureza, Tempestade, Recarga, Dano, Redução de Dano, Não física, Física, Controle de Grupo.",
			"ruRU": "Раз в 10 сек. \"Ураганный доспех\" усиливается, в результате чего когда вы получаете урон, весь получаемый вами урон уменьшается на 30% на 2 сек.\n\nTags: Защита, Силы природы, Буря, Время восстановления, Урон, Уменьшение урона, Нефизический урон, Физический урон, Контроль.",
			"zhCN": "每隔 10 秒, 旋风甲的效果会加强, 受到伤害时使你获得 30% 伤害减免, 持续 2 秒。\n\nTags: 防御, 自然魔法, 风暴, 冷却时间, 伤害, 伤害减免, 非物理, 物理, 群控.",
			"zhTW": "每過 10 秒氣旋護甲會增強,受到傷害時會賦予你 30% 傷害減免,持續 2 秒。\n\nTags: 防禦, 自然魔法, 風暴, 冷卻時間, 傷害, 傷害減免, 非物理, 物理, 控場."
},
		id: 59,
		maxPoints: 1,
		x: 754.5,
		y: -466.305
	},
	"Innate Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Enemies Knocked Back by Cyclone Armor become Vulnerable for 3 seconds.

Tags: Defensive, Nature Magic, Storm, Cooldown, Damage, Damage Reduction, Non-Physical, Physical, Crowd Control.`,
		nameLocalized: {
			"deDE": "Angeborene Zyklonrüstung",
			"esES": "Armadura de ciclón innata",
			"esMX": "Armadura de Ciclón Innata",
			"frFR": "Armure cyclonique innée",
			"itIT": "Corazza del Ciclone Innata",
			"jaJP": "風の加護(天性)",
			"koKR": "타고난 회오리 갑옷",
			"plPL": "Wrodzona Zbroja Cyklonu",
			"ptBR": "Armadura Ciclônica Inata",
			"ruRU": "Исконный ураганный доспех",
			"zhCN": "天禀旋风甲",
			"zhTW": "固有氣旋護甲"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Zyklonrüstung zurückgestoßen werden, sind 3 Sek. lang verwundbar.\n\nTags: Defensiv, Naturmagie, Sturm, Abklingzeit, Schaden, Schadensreduktion, Nichtphysisch, Physisch, Kontrollverlust.",
			"esES": "Los enemigos repelidos por Armadura de ciclón se vuelven vulnerables durante 3 s.\n\nTags: Defensiva, Magia de la naturaleza, Tormenta, Tiempo de reutilización, Daño, Reducción de daño, No física, Física, Control de masas.",
			"esMX": "Los enemigos repelidos por Armadura de Ciclón se vuelven vulnerables durante 3 segundos.\n\nTags: Defensivo, Magia de la naturaleza, Tormenta, Recuperación, Daño, Reducción de daño, No física, Física, Control de multitudes.",
			"frFR": "Les cibles repoussées par Armure cyclonique deviennent vulnérables pendant 3 s.\n\nTags: Défense, Magie naturelle, Tempête, Temps de recharge, Dégâts, Réduction des dégâts, Non physique, Dégâts physiques, Perte de contrôle.",
			"itIT": "I nemici respinti indietro da Corazza del Ciclone diventano vulnerabili per 3 s.\n\nTags: Difesa, Magia naturale, Tempesta, Tempo di recupero, Danni, Riduzione danni, Non fisico, Fisico, Effetti debilitanti.",
			"jaJP": "〈風の加護〉によってノックバックされた敵が3秒間、脆弱状態になる。\n\nTags: 防御, 自然魔法, 嵐, クールダウン, ダメージ, ダメージ減少, 非物理, 物理, 操作障害効果.",
			"koKR": "회오리 갑옷으로 밀쳐낸 적이 3초 동안 취약해집니다.\n\nTags: 방어, 자연 마법, 폭풍, 재사용 대기시간, 피해, 피해 감소, 비물리, 물리, 군중 제어.",
			"plPL": "Wrogowie odrzuceni przez Zbroję Cyklonu zostają odsłonięci na 3 sek.\n\nTags: Defensywa, Magia Natury, Burza, Odnowienie, Obrażenia, Redukcja Obrażeń, Niefizyczne, Fizyczne, Ograniczanie Kontroli.",
			"ptBR": "Inimigos repelidos por Armadura Ciclônica tornam-se vulneráveis por 3 segundos.\n\nTags: Defesa, Magia da Natureza, Tempestade, Recarga, Dano, Redução de Dano, Não física, Física, Controle de Grupo.",
			"ruRU": "Противники, отброшенные \"Ураганным доспехом\", становятся уязвимыми на 3 сек.\n\nTags: Защита, Силы природы, Буря, Время восстановления, Урон, Уменьшение урона, Нефизический урон, Физический урон, Контроль.",
			"zhCN": "被旋风甲 击退的敌人将陷入易伤状态, 持续 3 秒。\n\nTags: 防御, 自然魔法, 风暴, 冷却时间, 伤害, 伤害减免, 非物理, 物理, 群控.",
			"zhTW": "被氣旋護甲擊退的敵人會受易傷狀態影響,持續 3 秒。\n\nTags: 防禦, 自然魔法, 風暴, 冷卻時間, 傷害, 傷害減免, 非物理, 物理, 控場."
},
		id: 60,
		maxPoints: 1,
		x: 995.69,
		y: -331.115
	},
};

druidData["Companion"] = {
	"Ravens": {
		connections: [ "Companion", "Enhanced Ravens" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 45%
Passive: 1 Ravens fly above you and periodically attack your enemies for 13% damage every 5 seconds.

Active: The target area is swarmed with ravens, dealing {160/176/192/208/224/240/256/272/288/304}% damage over 6 seconds.

Tags: Companion, Physical, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Raben",
			"esES": "Cuervos",
			"esMX": "Cuervos",
			"frFR": "Corbeaux",
			"itIT": "Corvi",
			"jaJP": "レイヴン",
			"koKR": "큰까마귀",
			"plPL": "Kruki",
			"ptBR": "Corvos",
			"ruRU": "Вороны",
			"zhCN": "渡鸦",
			"zhTW": "掠鴉"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 45%\nPassiv: 1 Raben kreisen über Euch, greifen wiederholt Eure Gegner an und fügen ihnen dabei alle 5 Sek. 13% Schaden zu.\n\nAktiv: Der Zielbereich wird von Raben umschwärmt, die Gegnern im Verlauf von 6 Sek. {160/176/192/208/224/240/256/272/288/304}% Schaden zufügen.\n\nTags: Gefährte, Physisch, Schaden, Abklingzeit.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 45%\nPasiva: Te sobrevuelan 1 cuervos que atacan periódicamente a tus enemigos para infligirles 13% de daño cada 5 s.\n\nActiva: La bandada invade la zona seleccionada para infligir {160/176/192/208/224/240/256/272/288/304}% de daño durante 6 s.\n\nTags: Compañero, Física, Daño, Tiempo de reutilización.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 45%\nPasiva: 1 cuervos te sobrevuelan y atacan periódicamente a los enemigos, lo que les inflige 13% de daño cada 5 segundos.\n\nActiva: Los cuervos atacan el área objetivo en bandada e infligen {160/176/192/208/224/240/256/272/288/304}% de daño durante 6 segundos.\n\nTags: Compañero, Física, Daño, Recuperación.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 45%\nCompétence passive: 1 corbeaux volent au-dessus de vous et attaquent régulièrement vos adversaires en leur infligeant 13% points de dégâts toutes les 5 s.\n\nCompétence active: la zone ciblée est assaillie de corbeaux, qui infligent {160/176/192/208/224/240/256/272/288/304}% points de dégâts en 6 s.\n\nTags: Compagnon, Dégâts physiques, Dégâts, Temps de recharge.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 45%\nPassiva:1 Corvi volano sopra di te attaccando periodicamente i nemici, infliggendo 13% danni ogni 5 s.\n\nAttiva: l'area bersaglio viene travolta da un nugolo di corvi che infliggono {160/176/192/208/224/240/256/272/288/304}% danni in 6 s.\n\nTags: Compagni, Fisico, Danni, Tempo di recupero.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 45%\nパッシブ: 1羽のレイヴンが自らの頭上を飛び回って定期的に敵を攻撃し、5秒ごとに13%のダメージを与える。\n\nアクティブ: 標的エリアにレイヴンの群れが押し寄せ、6秒かけて{160/176/192/208/224/240/256/272/288/304}%のダメージを与える。\n\nTags: 使い魔, 物理, ダメージ, クールダウン.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 45%\n지속 효과: 큰까마귀 1마리가 머리 위를 날아다니며 주기적으로 적을 공격해 5초마다 13%의 피해를 줍니다.\n\n사용 효과: 대상 지역에 큰까마귀 떼가 몰려들어, 적에게 6초에 걸쳐 {160/176/192/208/224/240/256/272/288/304}%의 피해를 줍니다.\n\nTags: 동료, 물리, 피해, 재사용 대기시간.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 45%\nDziałanie pasywne: 1 Kruki:Kruków krążą:krąży ci nad głową i co jakiś czas atakują:atakuje twoich wrogów, zadając im 13% pkt. obrażeń co 5 sek.\n\nDziałanie aktywne: Stado kruków atakuje wskazany obszar i zadaje {160/176/192/208/224/240/256/272/288/304}% pkt. obrażeń przez 6 sek.\n\nTags: Kompan, Fizyczne, Obrażenia, Odnowienie.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 45%\nPassiva: 1 Corvos sobrevoam você e atacam seus inimigos periodicamente, causando 13% de dano a cada 5 segundos.\n\nAtiva: A área selecionada é tomada por corvos, causando {160/176/192/208/224/240/256/272/288/304}% de dano ao longo de 6 segundos.\n\nTags: Mascote, Física, Dano, Recarga.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность критического удара: 45%\nПассивный эффект: 1 ворона:воронов кружат:кружат над вами и время от времени атакуют:атакуют противников, нанося 13% ед. урона раз в 5 сек.\n\nЭффект при активации: вороны атакуют цели в указанной области, нанося {160/176/192/208/224/240/256/272/288/304}% ед. урона за 6 сек.\n\nTags: Спутник, Физический урон, Урон, Время восстановления.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 45%\n被动: 1 只渡鸦从你的头顶飞过并周期性地攻击敌人, 每 5 秒对敌人造成 13% 点伤害。\n\n主动: 目标区域渡鸦成群, 在 6 秒内造成 {160/176/192/208/224/240/256/272/288/304}% 点伤害。\n\nTags: 同伴, 物理, 伤害, 冷却时间.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:45%\n被動效果:1 隻掠鴉在你上空飛翔並定期攻擊敵人,每 5 秒造成 13% 點傷害。\n\n主動效果:掠鴉圍攻指定地點,在 6 秒內造成 {160/176/192/208/224/240/256/272/288/304}% 點傷害。\n\nTags: 同伴, 物理, 傷害, 冷卻時間."
},
		id: 62,
		maxPoints: 5,
		values: [ "15" ],
		x: 0.92,
		y: 293.68
	},
	"Enhanced Ravens": {
		baseSkill: "Ravens",
		connections: [ "Ravens", "Brutal Ravens", "Ferocious Ravens" ],
		description: `You have +5% increased Critical Strike Chance against enemies for 6 seconds after they are hit by Ravens.

Tags: Companion, Physical, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Raben",
			"esES": "Cuervos mejorados",
			"esMX": "Cuervos Potenciados",
			"frFR": "Corbeaux renforcés",
			"itIT": "Corvi Rinforzati",
			"jaJP": "レイヴン(強化版)",
			"koKR": "강화된 큰까마귀",
			"plPL": "Wzmocnione Kruki",
			"ptBR": "Corvos Aperfeiçoados",
			"ruRU": "Усиленные вороны",
			"zhCN": "强化渡鸦",
			"zhTW": "強化掠鴉"
},
		descriptionLocalized: {
			"deDE": "Ihr habt 6 Sek. lang eine +5% höhere kritische Trefferchance gegen Gegner, nachdem sie von Raben getroffen wurden.\n\nTags: Gefährte, Physisch, Schaden, Abklingzeit.",
			"esES": "Tienes un +5% más de probabilidad de golpe crítico contra enemigos durante 6 s después de que reciban un golpe de Cuervos.\n\nTags: Compañero, Física, Daño, Tiempo de reutilización.",
			"esMX": "Tienes un +5% más de probabilidad de golpe crítico contra enemigos durante 6 segundos después de golpearlos con Cuervos.\n\nTags: Compañero, Física, Daño, Recuperación.",
			"frFR": "Lorsque des cibles sont touchées par les corbeaux, vos chances de leur infliger un coup critique sont augmentées de +5% durant les 6 s qui suivent.\n\nTags: Compagnon, Dégâts physiques, Dégâts, Temps de recharge.",
			"itIT": "Quando i nemici vengono colpiti dai Corvi, la probabilità di critico contro di loro aumenta del +5% per 6 s.\n\nTags: Compagni, Fisico, Danni, Tempo di recupero.",
			"jaJP": "敵がレイヴンの攻撃を受けた後、その敵に自分がクリティカルヒットを与える確率が6秒間、+5%増加する。\n\nTags: 使い魔, 物理, ダメージ, クールダウン.",
			"koKR": "적이 큰까마귀에 적중당한 후 6초 동안 해당 적에 대한 극대화 확률이 +5% 증가합니다.\n\nTags: 동료, 물리, 피해, 재사용 대기시간.",
			"plPL": "Zyskujesz premię +5% do szansy na trafienie krytyczne na 6 sek., gdy atakujesz wrogów trafionych wcześniej przez Kruki.\n\nTags: Kompan, Fizyczne, Obrażenia, Odnowienie.",
			"ptBR": "Você tem +5% de chance de acerto crítico contra inimigos aumentada por 6 segundos depois de eles serem atingidos por Corvos.\n\nTags: Mascote, Física, Dano, Recarga.",
			"ruRU": "Вороны отвлекают пораженных врагов, в результате чего ваша вероятность критического удара против этих целей повышается на +5% на 6 сек.\n\nTags: Спутник, Физический урон, Урон, Время восстановления.",
			"zhCN": "你对被渡鸦命中的敌人造成暴击的几率提高 +5%, 持续 6 秒。\n\nTags: 同伴, 物理, 伤害, 冷却时间.",
			"zhTW": "你對被掠鴉擊中的敵人造成的爆擊機率提高 +5%,持續 6 秒。\n\nTags: 同伴, 物理, 傷害, 冷卻時間."
},
		id: 63,
		maxPoints: 1,
		x: 1.905,
		y: 492.536
	},
	"Brutal Ravens": {
		baseSkill: "Ravens",
		connections: [ "Enhanced Ravens" ],
		description: `2 additional Ravens periodically attack enemies.

Tags: Companion, Physical, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Brutale Raben",
			"esES": "Cuervos brutales",
			"esMX": "Cuervos Brutales",
			"frFR": "Corbeaux brutaux",
			"itIT": "Corvi Brutali",
			"jaJP": "レイヴン(冷酷)",
			"koKR": "냉혹한 큰까마귀",
			"plPL": "Brutalne Kruki",
			"ptBR": "Corvos Brutais",
			"ruRU": "Безжалостные вороны",
			"zhCN": "残忍渡鸦",
			"zhTW": "殘暴掠鴉"
},
		descriptionLocalized: {
			"deDE": "2 zusätzliche Raben greifen in regelmäßigen Abständen Gegner an.\n\nTags: Gefährte, Physisch, Schaden, Abklingzeit.",
			"esES": "2 cuervos más atacan periódicamente a los enemigos.\n\nTags: Compañero, Física, Daño, Tiempo de reutilización.",
			"esMX": "2 Cuervos adicionales atacan a los enemigos periódicamente.\n\nTags: Compañero, Física, Daño, Recuperación.",
			"frFR": "2 corbeaux supplémentaires attaquent régulièrement les adversaires.\n\nTags: Compagnon, Dégâts physiques, Dégâts, Temps de recharge.",
			"itIT": "2 Corvi aggiuntivi attaccano periodicamente i nemici.\n\nTags: Compagni, Fisico, Danni, Tempo di recupero.",
			"jaJP": "定期的に敵を攻撃するレイヴンが2羽増える。\n\nTags: 使い魔, 物理, ダメージ, クールダウン.",
			"koKR": "추가 큰까마귀 2마리가 적을 주기적으로 공격합니다.\n\nTags: 동료, 물리, 피해, 재사용 대기시간.",
			"plPL": "Co jakiś czas dodatkowe Kruki (2) atakują wrogów.\n\nTags: Kompan, Fizyczne, Obrażenia, Odnowienie.",
			"ptBR": "2 corvos adicionais atacam inimigos periodicamente.\n\nTags: Mascote, Física, Dano, Recarga.",
			"ruRU": "Призывает еще 2 воронов, периодически атакующих противников.\n\nTags: Спутник, Физический урон, Урон, Время восстановления.",
			"zhCN": "额外有 2 只渡鸦周期性地攻击敌人。\n\nTags: 同伴, 物理, 伤害, 冷却时间.",
			"zhTW": "額外有 2 隻掠鴉定期攻擊敵人。\n\nTags: 同伴, 物理, 傷害, 冷卻時間."
},
		id: 64,
		maxPoints: 1,
		x: -148.35,
		y: 612.144
	},
	"Ferocious Ravens": {
		baseSkill: "Ravens",
		connections: [ "Enhanced Ravens" ],
		description: `Enemies inside the swarm of Ravens when it is activated become Vulnerable for 3 seconds.

Tags: Companion, Physical, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Grausame Raben",
			"esES": "Cuervos feroces",
			"esMX": "Cuervos Feroces",
			"frFR": "Corbeaux farouches",
			"itIT": "Corvi Feroci",
			"jaJP": "レイヴン(残忍)",
			"koKR": "포악한 큰까마귀",
			"plPL": "Zdziczałe Kruki",
			"ptBR": "Corvos Ferozes",
			"ruRU": "Свирепые вороны",
			"zhCN": "暴躁渡鸦",
			"zhTW": "兇猛掠鴉"
},
		descriptionLocalized: {
			"deDE": "Gegner, die sich bei der Aktivierung innerhalb des Rabenschwarms befinden, werden 3 Sek. lang verwundbar.\n\nTags: Gefährte, Physisch, Schaden, Abklingzeit.",
			"esES": "Al activar Cuervos, los enemigos que quedan en el interior de la bandada se vuelven vulnerables durante 3 s.\n\nTags: Compañero, Física, Daño, Tiempo de reutilización.",
			"esMX": "Cuando se activa, los enemigos que están dentro de la bandada de Cuervos se vuelven vulnerables durante 3 segundos.\n\nTags: Compañero, Física, Daño, Recuperación.",
			"frFR": "Les adversaires se trouvant à l'intérieur de la nuée de corbeaux lorsque la compétence est activée deviennent vulnérables pendant 3 s.\n\nTags: Compagnon, Dégâts physiques, Dégâts, Temps de recharge.",
			"itIT": "I nemici all'interno del nugolo di Corvi, quando si attiva, diventano vulnerabili per 3 s.\n\nTags: Compagni, Fisico, Danni, Tempo di recupero.",
			"jaJP": "発動すると、レイヴンの大群の中にいる敵は3秒間、脆弱状態になる。\n\nTags: 使い魔, 物理, ダメージ, クールダウン.",
			"koKR": "활성화되었을 때 큰까마귀 떼에 휘말린 적이 3초 동안 취약해집니다.\n\nTags: 동료, 물리, 피해, 재사용 대기시간.",
			"plPL": "Wrogowie znajdujący się wewnątrz stada Kruków w chwili, gdy jest ono aktywowane, zostają odsłonięci na 3 sek.\n\nTags: Kompan, Fizyczne, Obrażenia, Odnowienie.",
			"ptBR": "Inimigos dentro do bando de Corvos quando ativado tornam-se vulneráveis por 3 segundos.\n\nTags: Mascote, Física, Dano, Recarga.",
			"ruRU": "Противники, находящиеся в стае воронов при активации умения, становятся уязвимыми на 3 сек.\n\nTags: Спутник, Физический урон, Урон, Время восстановления.",
			"zhCN": "技能激活后, 位于渡鸦群内的敌人将陷入易伤状态, 持续 3 秒。\n\nTags: 同伴, 物理, 伤害, 冷却时间.",
			"zhTW": "在掠鴉啟動期間,在鴉群內的敵人會易傷,持續 3 秒。\n\nTags: 同伴, 物理, 傷害, 冷卻時間."
},
		id: 65,
		maxPoints: 1,
		x: 134.94,
		y: 611.014
	},
	"Call of the Wild": {
		connections: [ "Companion" ],
		description: `Your Companion Skills deal x{10/20/30/40/50/60/70/80/90/100}% bonus damage.

Tags: Companion, Damage.`,
		nameLocalized: {
			"deDE": "Ruf der Wildnis",
			"esES": "Llamada de la naturaleza",
			"esMX": "Llamado de la Naturaleza",
			"frFR": "Appel de la Nature",
			"itIT": "Richiamo della Selva",
			"jaJP": "野生の呼び声",
			"koKR": "야생의 부름",
			"plPL": "Zew Dziczy",
			"ptBR": "Chamado da Selva",
			"ruRU": "Зов дикой природы",
			"zhCN": "野性呼唤",
			"zhTW": "野性呼喚"
},
		descriptionLocalized: {
			"deDE": "Eure Gefährtenfertigkeiten verursachen x{10/20/30/40/50/60/70/80/90/100}% Bonusschaden.\n\nTags: Gefährte, Schaden.",
			"esES": "Tus habilidades de compañero infligen un x{10/20/30/40/50/60/70/80/90/100}% de daño adicional.\n\nTags: Compañero, Daño.",
			"esMX": "Tus habilidades de Compañero infligen un x{10/20/30/40/50/60/70/80/90/100}% de daño adicional.\n\nTags: Compañero, Daño.",
			"frFR": "Vos compétences de compagnon infligent x{10/20/30/40/50/60/70/80/90/100}% de dégâts supplémentaires.\n\nTags: Compagnon, Dégâts.",
			"itIT": "Le tue abilità dei Compagni infliggono il x{10/20/30/40/50/60/70/80/90/100}% di danni aggiuntivi.\n\nTags: Compagni, Danni.",
			"jaJP": "使い魔スキルがx{10/20/30/40/50/60/70/80/90/100}%のボーナスダメージを与える。\n\nTags: 使い魔, ダメージ.",
			"koKR": "동료 기술들이 x{10/20/30/40/50/60/70/80/90/100}%의 추가 피해를 줍니다.\n\nTags: 동료, 피해.",
			"plPL": "Twoje umiejętności Kompanów zadają dodatkowe x{10/20/30/40/50/60/70/80/90/100}% obrażeń.\n\nTags: Kompan, Obrażenia.",
			"ptBR": "Suas habilidades de Mascote causam {10/20/30/40/50/60/70/80/90/100}% de bônus de dano.\n\nTags: Mascote, Dano.",
			"ruRU": "Умения категории \"Питомец\" наносят на x{10/20/30/40/50/60/70/80/90/100}% больше урона.\n\nTags: Спутник, Урон.",
			"zhCN": "你的同伴技能造成的伤害提高 x{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 同伴, 伤害.",
			"zhTW": "你的同伴技能造成的傷害提高 x{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 同伴, 傷害."
},
		id: 66,
		maxPoints: 3,
		x: 550.22,
		y: 0.364
	},
	"Poison Creeper": {
		connections: [ "Companion", "Enhanced Poison Creeper" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 28%
Passive: A poison creeper periodically emerges from the ground every 7 seconds and applies {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% Poisoning damage over 6 seconds to an enemy in the area.

Active: Vines strangle all surrounding enemies, Immobilizing them for 2 seconds and Poisoning them for {90/99/108/117/126/135/144/153/162/171}% damage over 2 seconds.

Tags: Companion, Poison, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Giftranke",
			"esES": "Enredadera venenosa",
			"esMX": "Liana Venenosa",
			"frFR": "Lierre empoisonné",
			"itIT": "Rampicante Velenoso",
			"jaJP": "有毒なる蔦",
			"koKR": "맹독 덩굴",
			"plPL": "Trujący Pełzacz",
			"ptBR": "Rastejante Venenoso",
			"ruRU": "Ядовитая лоза",
			"zhCN": "剧毒蔓藤",
			"zhTW": "劇毒藤蔓"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 28%\nPassiv: Eine Giftranke schießt alle 7 Sek. aus dem Boden und fügt einem Gegner im Wirkungsbereich im Verlauf von 6 Sek. {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% Giftschaden zu.\n\nAktiv: Die Ranken strangulieren alle vergifteten Gegner in der Nähe, machen sie 2 Sek. lang bewegungsunfähig, vergiften sie und verursachen dabei im Verlauf von 2 Sek. {90/99/108/117/126/135/144/153/162/171}% Schaden.\n\nTags: Gefährte, Gift, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 28%\nPasiva: Una enredadera venenosa emerge del suelo cada 7 s y aplica {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% de daño de veneno durante 6 s a un enemigo en la zona.\n\nActiva: Las enredaderas estrangulan a todos los enemigos cercanos y los inmovilizan durante 2 s. Además, les aplican veneno, lo que les inflige {90/99/108/117/126/135/144/153/162/171}% de daño durante 2 s.\n\nTags: Compañero, Veneno, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 28%\nPasiva: Una liana venenosa sale periódicamente del suelo cada 7 segundos y aplica {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% de daño de veneno durante 6 segundos a un enemigo en el área.\n\nActiva: Las lianas estrangulan a todos los enemigos circundantes, los inmovilizan durante 2 segundos y los envenenan para infligir {90/99/108/117/126/135/144/153/162/171}% de daño durante 2 segundos.\n\nTags: Compañero, Veneno, Daño, Recuperación, Control de multitudes.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 28%\nCompétence passive: un lierre empoisonné surgit du sol toutes les 7 s et inflige à une cible dans la zone {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% points de dégâts de poison en 6 s.\n\nCompétence active: des lianes enserrent toutes les cibles à proximité, ce qui les immobilise pendant 2 s et les empoisonne à hauteur de {90/99/108/117/126/135/144/153/162/171}% points de dégâts en 2 s.\n\nTags: Compagnon, Poison, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 28%\nPassiva: Un rampicante velenoso emerge periodicamente dal terreno ogni 7 s e infligge {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% danni da veleno a un nemico nell'area in 6 s.\n\nAttiva: Dei rampicanti strangolano tutti i nemici circostanti, immobilizzandoli per 2 s e avvelenandoli, infliggendo {90/99/108/117/126/135/144/153/162/171}% danni in 2 s.\n\nTags: Compagni, Veleno, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 28%\nパッシブ: 有毒なるつる草が7秒ごとに地面から出現し、エリア内にいる敵1体に6秒かけて{36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}%の毒ダメージを与える。\n\nアクティブ: つる草が周囲にいるすべての敵を絡め取って2秒間移動不能にしつつ毒状態にし、2秒間かけて{90/99/108/117/126/135/144/153/162/171}%の毒ダメージを与える。\n\nTags: 使い魔, 毒, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 28%\n지속 효과: 바닥에서 7초마다 맹독 덩굴이 솟구쳐 나와 해당 지역 내의 적에게 6초에 걸쳐 {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}%의 중독 피해를 줍니다.\n\n사용 효과: 덩굴이 주변 적들을 얽어, 2초 동안 이동 불가 상태로 만들고 중독시켜 2초에 걸쳐 {90/99/108/117/126/135/144/153/162/171}%의 피해를 줍니다.\n\nTags: 동료, 독, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 28%\nDziałanie pasywne: Trujący pełzacz wyrasta z ziemi co 7 sek. i zadaje wrogowi na danym obszarze {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% pkt. obrażeń od zatrucia w ciągu 6 sek.\n\nDziałanie aktywne: Pnącze pęta wszystkich zatrutych wrogów znajdujących się wokół i unieruchamia ich na 2 sek. oraz zatruwa ich, zadając {90/99/108/117/126/135/144/153/162/171}% pkt. obrażeń w ciągu 2 sek.\n\nTags: Kompan, Trucizna, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 28%\nPassiva: Um rastejante venenoso emerge periodicamente do solo a cada 7 segundos e envenena um inimigo na área, causando {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% de dano ao longo de 6 segundos.\n\nAtiva: Vinhas estrangulam todos os inimigos ao redor, imobilizando-os por 2 segundos e envenenando-os, causando {90/99/108/117/126/135/144/153/162/171}% de dano ao longo de 2 segundos.\n\nTags: Mascote, Veneno, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 28%.\nПассивный эффект: раз в 7 сек. из-под земли появляется ядовитая лоза, которая отравляет ближайшего противника, нанося {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% ед. урона от отравления за 6 сек.\n\nЭффект при активации: лозы-душители оплетают противников вокруг, обездвиживая их на 2 сек. и нанося {90/99/108/117/126/135/144/153/162/171}% ед. урона от отравления за 2 сек.\n\nTags: Спутник, Яд, Урон, Время восстановления, Контроль.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 28%\n被动: 一个剧毒蔓藤每隔 7 秒从地面出现, 并在 6 秒内对区域内的敌人造成 {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% 点毒素伤害。\n\n主动: 蔓藤会绞杀周围所有敌人, 使其定身 2 秒并中毒, 在 2 秒内对其造成 {90/99/108/117/126/135/144/153/162/171}% 点伤害。\n\nTags: 同伴, 毒素, 伤害, 冷却时间, 群控.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:28%\n被動效果:劇毒藤蔓每隔 7 秒會冒出地面,對附近的一名敵人在 6 秒內造成 {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% 點中毒傷害。\n\n主動效果:藤蔓會纏住附近所有敵人,使敵人定身 2 秒,並在 2 秒內造成 {90/99/108/117/126/135/144/153/162/171}% 點中毒傷害。\n\nTags: 同伴, 毒素, 傷害, 冷卻時間, 控場."
},
		id: 167,
		maxPoints: 5,
		values: [ "20" ],
		x: -535.155,
		y: -0.594
	},
	"Enhanced Poison Creeper": {
		baseSkill: "Poison Creeper",
		connections: [ "Poison Creeper", "Ferocious Poison Creeper", "Brutal Poison Creeper" ],
		description: `Poison Creeper's Immobilize duration is increased by 1 second.

Tags: Companion, Poison, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Verbesserte Giftranke",
			"esES": "Enredadera venenosa mejorada",
			"esMX": "Liana Venenosa Potenciada",
			"frFR": "Lierre empoisonné renforcé",
			"itIT": "Rampicante Velenoso Rinforzato",
			"jaJP": "有毒なる蔦(強化版)",
			"koKR": "강화된 맹독 덩굴",
			"plPL": "Wzmocniony Trujący Pełzacz",
			"ptBR": "Rastejante Venenoso Aperfeiçoado",
			"ruRU": "Усиленная ядовитая лоза",
			"zhCN": "强化剧毒蔓藤",
			"zhTW": "強化劇毒藤蔓"
},
		descriptionLocalized: {
			"deDE": "Die Bewegungsunfähigkeit von Giftranke hält 1 Sek. länger an.\n\nTags: Gefährte, Gift, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "La duración de la inmovilización de Enredadera venenosa aumenta 1 s.\n\nTags: Compañero, Veneno, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "La duración de la inmovilización de Liana Venenosa aumenta 1 segundo.\n\nTags: Compañero, Veneno, Daño, Recuperación, Control de multitudes.",
			"frFR": "La durée d'immobilisation du lierre empoisonné est augmentée de 1 s.\n\nTags: Compagnon, Poison, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "La durata dell'immobilizzazione di Rampicante Velenoso aumenta di 1 s.\n\nTags: Compagni, Veleno, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈有毒なる蔦〉の移動不能効果の持続時間が1秒伸びる。\n\nTags: 使い魔, 毒, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "맹독 덩굴의 이동 불가 지속시간이 1초 증가합니다.\n\nTags: 동료, 독, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Czas działania efektu unieruchomienia zapewnianego przez Trującego Pełzacza jest wydłużony o 1 sek.\n\nTags: Kompan, Trucizna, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "A duração da imobilização de Rastejante Venenoso é aumentada em 1 segundo.\n\nTags: Mascote, Veneno, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Обездвиживание от ядовитой лозы действует на 1 сек. дольше.\n\nTags: Спутник, Яд, Урон, Время восстановления, Контроль.",
			"zhCN": "剧毒蔓藤的定身持续时间延长 1 秒。\n\nTags: 同伴, 毒素, 伤害, 冷却时间, 群控.",
			"zhTW": "劇毒藤蔓的定身持續時間延長 1 秒。\n\nTags: 同伴, 毒素, 傷害, 冷卻時間, 控場."
},
		id: 168,
		maxPoints: 1,
		x: -918.845,
		y: 0.299
	},
	"Ferocious Poison Creeper": {
		baseSkill: "Poison Creeper",
		connections: [ "Enhanced Poison Creeper" ],
		description: `Poison Creeper's active Poisoning duration is increased by 3 seconds.

Tags: Companion, Poison, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Grausame Giftranke",
			"esES": "Enredadera venenosa feroz",
			"esMX": "Liana Venenosa Feroz",
			"frFR": "Lierre empoisonné farouche",
			"itIT": "Rampicante Velenoso Feroce",
			"jaJP": "有毒なる蔦(残忍)",
			"koKR": "포악한 맹독 덩굴",
			"plPL": "Zdziczały Trujący Pełzacz",
			"ptBR": "Rastejante Venenoso Feroz",
			"ruRU": "Свирепая ядовитая лоза",
			"zhCN": "暴躁剧毒蔓藤",
			"zhTW": "兇猛劇毒藤蔓"
},
		descriptionLocalized: {
			"deDE": "Das aktive Gift von Giftranke hält 3 Sek. länger an.\n\nTags: Gefährte, Gift, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "La duración del veneno de Enredadera venenosa aumenta 3 s.\n\nTags: Compañero, Veneno, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "La duración del veneno activo de Liana Venenosa aumenta 3 segundos.\n\nTags: Compañero, Veneno, Daño, Recuperación, Control de multitudes.",
			"frFR": "La durée d'action du poison du lierre empoisonné est augmentée de 3 s.\n\nTags: Compagnon, Poison, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "La durata attiva del veleno di Rampicante Velenoso aumenta di 3 s.\n\nTags: Compagni, Veleno, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈有毒なる蔦〉の発動中の毒が持続する時間が3秒増加する。\n\nTags: 使い魔, 毒, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "맹독 덩굴의 진행 중인 중독 지속시간이 3초 증가합니다.\n\nTags: 동료, 독, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Czas działania efektu zatrucia zapewnianego przez Trującego Pełzacza jest wydłużony o 3 sek.\n\nTags: Kompan, Trucizna, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "A duração do veneno ativo de Rastejante Venenoso é aumentada em 3 segundos.\n\nTags: Mascote, Veneno, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Отравление от активного эффекта ядовитой лозы действует на 3 сек. дольше.\n\nTags: Спутник, Яд, Урон, Время восстановления, Контроль.",
			"zhCN": "剧毒蔓藤的主动中毒持续时间延长 3 秒。\n\nTags: 同伴, 毒素, 伤害, 冷却时间, 群控.",
			"zhTW": "劇毒藤蔓主動效果的中毒持續時間延長 3 秒。\n\nTags: 同伴, 毒素, 傷害, 冷卻時間, 控場."
},
		id: 169,
		maxPoints: 1,
		x: -1107.645,
		y: 88.49
	},
	"Brutal Poison Creeper": {
		baseSkill: "Poison Creeper",
		connections: [ "Enhanced Poison Creeper" ],
		description: `Your Critical Strike Chance is increased by +20% against enemies strangled by Poison Creeper.

Tags: Companion, Poison, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Brutale Giftranke",
			"esES": "Enredadera venenosa brutal",
			"esMX": "Liana Venenosa Brutal",
			"frFR": "Lierre empoisonné brutal",
			"itIT": "Rampicanti Velenoso Brutale",
			"jaJP": "有毒なる蔦(冷酷)",
			"koKR": "냉혹한 맹독 덩굴",
			"plPL": "Brutalny Trujący Pełzacz",
			"ptBR": "Rastejante Venenoso Brutal",
			"ruRU": "Безжалостная ядовитая лоза",
			"zhCN": "残忍剧毒蔓藤",
			"zhTW": "殘暴劇毒藤蔓"
},
		descriptionLocalized: {
			"deDE": "Eure kritische Trefferchance erhöht sich um +20% bei Gegnern, die von Giftranke stranguliert werden.\n\nTags: Gefährte, Gift, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Tu probabilidad de golpe crítico aumenta un +20% contra enemigos estrangulados por Enredadera venenosa.\n\nTags: Compañero, Veneno, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Tu probabilidad de golpe crítico aumenta un +20% contra los enemigos estrangulados por Liana Venenosa.\n\nTags: Compañero, Veneno, Daño, Recuperación, Control de multitudes.",
			"frFR": "Vos chances d'infliger un coup critique sont augmentées de +20% contre les cibles enserrées par un lierre empoisonné.\n\nTags: Compagnon, Poison, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "La tua probabilità di critico aumenta del +20% contro i nemici strangolati dal Rampicante Velenoso.\n\nTags: Compagni, Veleno, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈有毒なる蔦〉に絡め取られている敵に対するクリティカルヒット率が+20%上昇する。\n\nTags: 使い魔, 毒, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "맹독 덩굴에 얽힌 적을 상대로 극대화 확률이 +20% 증가합니다.\n\nTags: 동료, 독, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Szansa na trafienie krytyczne jest zwiększona o +20% przeciwko wrogom spętanym przez Trującego Pełzacza.\n\nTags: Kompan, Trucizna, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Sua chance de acerto crítico é aumentada em +20% contra inimigos estrangulados por Rastejante Venenoso.\n\nTags: Mascote, Veneno, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Вероятность нанести противнику критический урон повышается на +20%, если его душит ядовитая лоза.\n\nTags: Спутник, Яд, Урон, Время восстановления, Контроль.",
			"zhCN": "你对被剧毒蔓藤绞杀的敌人发动攻击时, 暴击几率提高 +20%。\n\nTags: 同伴, 毒素, 伤害, 冷却时间, 群控.",
			"zhTW": "對受到劇毒藤蔓糾纏的敵人造成爆擊的機率提高 +20%。\n\nTags: 同伴, 毒素, 傷害, 冷卻時間, 控場."
},
		id: 170,
		maxPoints: 1,
		x: -1097.525,
		y: -94.798
	},
	"Wolves": {
		connections: [ "Companion", "Enhanced Wolf Pack" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 50%
Passive: Summon 2 wolf companions that bite enemies for {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% damage.

Active: Direct your wolves to focus an enemy, leaping to them and striking for {110/121/132/143/154/165/176/187/198/209}% damage.

Tags: Companion, Cooldown, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Wölfe",
			"esES": "Lobos",
			"esMX": "Lobos",
			"frFR": "Loups",
			"itIT": "Lupi",
			"jaJP": "狼の群れ",
			"koKR": "늑대 무리",
			"plPL": "Wilki",
			"ptBR": "Lobos",
			"ruRU": "Волки",
			"zhCN": "群狼",
			"zhTW": "狼群"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 50%\nPassiv: Beschwört 2 Wolfsgefährten, die Gegner beißen und {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% Schaden verursachen.\n\nAktiv: Befehlt den Wölfen, einen Gegner anzufallen und ihm {110/121/132/143/154/165/176/187/198/209}% Schaden zuzufügen.\n\nTags: Gefährte, Abklingzeit, Schaden, Physisch.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 50%\nPasiva: Invocas 2 lobos que muerden a los enemigos e infligen {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% de daño.\n\nActiva: Azuzas a tus lobos para que se abalancen sobre un enemigo y le inflijan {110/121/132/143/154/165/176/187/198/209}% de daño.\n\nTags: Compañero, Tiempo de reutilización, Daño, Física.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 50%\nPasiva: Invocas 2 lobos compañeros que muerden a los enemigos y les infligen {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% de daño.\n\nActiva: Ordenas a tus lobos enfocarse en un enemigo, sobre quien se abalanzan y le infligen {110/121/132/143/154/165/176/187/198/209}% de daño.\n\nTags: Compañero, Recuperación, Daño, Física.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 50%\nCompétence passive: vous invoquez 2 compagnons loups qui mordent les adversaires et leur infligent {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% points de dégâts.\n\nCompétence active: vous ordonnez à vos loups de bondir sur une cible, qu'ils attaquent en infligeant {110/121/132/143/154/165/176/187/198/209}% points de dégâts.\n\nTags: Compagnon, Temps de recharge, Dégâts, Dégâts physiques.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 50%\nPassiva: evochi 2 compagni lupi che mordono i nemici, infliggendo {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% danni.\n\nAttiva: indichi ai tuoi lupi un nemico da prendere di mira, così che loro gli balzino sopra infliggendo {110/121/132/143/154/165/176/187/198/209}% danni.\n\nTags: Compagni, Tempo di recupero, Danni, Fisico.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 50%\nパッシブ: 召喚された2匹の狼が敵に噛み付いて{7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}%のダメージを与える。\n\nアクティブ: 狼を1体の敵に集中して飛び掛からせ、{110/121/132/143/154/165/176/187/198/209}%のダメージを与える。\n\nTags: 使い魔, クールダウン, ダメージ, 物理.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 50%\n지속 효과: 적들을 물어 {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}%의 피해를 주는 늑대 동료 2마리를 소환합니다.\n\n사용 효과: 자신의 늑대들에게 적 한 마리를 집중 공격하라고 지시합니다. 늑대들이 해당 적을 덮쳐 {110/121/132/143/154/165/176/187/198/209}%의 피해를 줍니다.\n\nTags: 동료, 재사용 대기시간, 피해, 물리.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 50%\nDziałanie pasywne: Przywołujesz 2 wilczych kompanów, którzy kąsają wrogów, zadając im {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% pkt. obrażeń.\n\nDziałanie aktywne: Rozkazujesz wilkom, by skupiły ataki na jednym wrogu, doskoczyły do niego i zadały przy tym {110/121/132/143/154/165/176/187/198/209}% pkt. obrażeń.\n\nTags: Kompan, Odnowienie, Obrażenia, Fizyczne.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 50%\nPassiva: Evoca 2 mascotes lobos que mordem os inimigos, causando {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% de dano.\n\nAtiva: Direciona os lobos para focarem em um inimigo, saltando neles e causando {110/121/132/143/154/165/176/187/198/209}% de dano.\n\nTags: Mascote, Recarga, Dano, Física.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 50%.\nПассивный эффект: вы призываете 2 волков:волков, которые кусают противников, нанося {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% ед. урона.\n\nЭффект при активации: волки бросаются на выбранного противника и наносят ему {110/121/132/143/154/165/176/187/198/209}% ед. урона.\n\nTags: Спутник, Время восстановления, Урон, Физический урон.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 50%\n被动: 召唤 2 只狼同伴撕咬敌人, 造成 {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% 点伤害。\n\n主动: 标记并指引你的群狼扑咬一名敌人, 造成 {110/121/132/143/154/165/176/187/198/209}% 点伤害。\n\nTags: 同伴, 冷却时间, 伤害, 物理.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:50%\n被動效果:召喚 2 隻惡狼同伴,咬擊敵人造成 {7.8/8.6/9.4/10.1/10.9/11.7/12.5/13.3/14/14.8}% 點傷害。\n\n主動效果:引導狼群鎖定攻擊一個敵人,撲襲敵人造成 {110/121/132/143/154/165/176/187/198/209}% 點傷害。\n\nTags: 同伴, 冷卻時間, 傷害, 物理."
},
		id: 71,
		maxPoints: 5,
		values: [ "14" ],
		x: 7.69,
		y: -289.968
	},
	"Enhanced Wolf Pack": {
		baseSkill: "Wolves",
		connections: [ "Wolves", "Brutal Wolf Pack", "Ferocious Wolf Pack" ],
		description: `Wolves deal x20% increased damage to Immobilized, Stunned, Slowed, or Poisoned enemies.

Tags: Companion, Cooldown, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbessertes Wolfsrudel",
			"esES": "Manada de lobos mejorada",
			"esMX": "Manada de Lobos Potenciada",
			"frFR": "Meute de loups renforcés",
			"itIT": "Branco di Lupi Rinforzato",
			"jaJP": "狼の群れ(強化版)",
			"koKR": "강화된 늑대 무리",
			"plPL": "Wzmocniona Wataha",
			"ptBR": "Alcateia Aperfeiçoada",
			"ruRU": "Усиленная волчья стая",
			"zhCN": "强化狼群",
			"zhTW": "強化狼群"
},
		descriptionLocalized: {
			"deDE": "Wölfe fügen bewegungsunfähigen, betäubten, verlangsamten oder vergifteten Gegnern x20% mehr Schaden zu.\n\nTags: Gefährte, Abklingzeit, Schaden, Physisch.",
			"esES": "Los lobos infligen un x20% más de daño a enemigos inmovilizados, aturdidos, ralentizados o envenenados.\n\nTags: Compañero, Tiempo de reutilización, Daño, Física.",
			"esMX": "Los Lobos infligen un x20% más de daño a los enemigos inmovilizados, aturdidos, ralentizados o envenenados.\n\nTags: Compañero, Recuperación, Daño, Física.",
			"frFR": "Les loups infligent x20% de dégâts supplémentaires aux cibles immobilisées, étourdies, ralenties ou empoisonnées.\n\nTags: Compagnon, Temps de recharge, Dégâts, Dégâts physiques.",
			"itIT": "I lupi infliggono il x20% di danni aggiuntivi ai nemici immobilizzati, storditi, rallentati o avvelenati.\n\nTags: Compagni, Tempo di recupero, Danni, Fisico.",
			"jaJP": "移動不能、スタン、速度低下または毒状態の敵に〈狼の群れ〉が与えるダメージがx20%増加する。\n\nTags: 使い魔, クールダウン, ダメージ, 物理.",
			"koKR": "늑대가 이동 불가, 기절, 감속, 중독 상태의 적에게 주는 피해가 x20% 증가합니다.\n\nTags: 동료, 재사용 대기시간, 피해, 물리.",
			"plPL": "Wilki zadają obrażenia zwiększone o x20% unieruchomionym, ogłuszonym, spowolnionym lub zatrutym celom.\n\nTags: Kompan, Odnowienie, Obrażenia, Fizyczne.",
			"ptBR": "Lobos causam 20% de dano aumentado a inimigos imobilizados, atordoados, desacelerados ou envenenados.\n\nTags: Mascote, Recarga, Dano, Física.",
			"ruRU": "Волки наносят на x20% больше урона обездвиженным, оглушенным, замедленным или отравленным противникам.\n\nTags: Спутник, Время восстановления, Урон, Физический урон.",
			"zhCN": "群狼对处于定身、昏迷、减速或中毒状态的敌人造成的伤害提高 x20%。\n\nTags: 同伴, 冷却时间, 伤害, 物理.",
			"zhTW": "狼群對定身、擊昏、緩速或中毒的敵人造成的傷害提高 x20%。\n\nTags: 同伴, 冷卻時間, 傷害, 物理."
},
		id: 72,
		maxPoints: 1,
		x: 7.025,
		y: -503.006
	},
	"Brutal Wolf Pack": {
		baseSkill: "Wolves",
		connections: [ "Enhanced Wolf Pack" ],
		description: `When you Critically Strike, your Wolves gain +20% Attack Speed for 3 seconds.

Tags: Companion, Cooldown, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Brutales Wolfsrudel",
			"esES": "Manada de lobos brutal",
			"esMX": "Manada de Lobos Brutal",
			"frFR": "Meute de loups brutaux",
			"itIT": "Lupi Brutali",
			"jaJP": "狼の群れ(冷酷)",
			"koKR": "냉혹한 늑대 무리",
			"plPL": "Brutalna Wataha",
			"ptBR": "Alcateia Brutal",
			"ruRU": "Безжалостная волчья стая",
			"zhCN": "残忍狼群",
			"zhTW": "殘暴狼群"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen kritischen Treffer erzielt, erhalten Eure Wölfe 3 Sek. lang +20% Angriffsgeschwindigkeit.\n\nTags: Gefährte, Abklingzeit, Schaden, Physisch.",
			"esES": "Cuando asestas un golpe crítico, tus lobos obtienen un +20% de velocidad de ataque durante 3 s.\n\nTags: Compañero, Tiempo de reutilización, Daño, Física.",
			"esMX": "Cuando asestas un golpe crítico, tus Lobos obtienen un +20% de velocidad de ataque durante 3 segundos.\n\nTags: Compañero, Recuperación, Daño, Física.",
			"frFR": "Lorsque vous infligez un coup critique, la vitesse d'attaque de vos loups est augmentée de +20% pendant 3 s.\n\nTags: Compagnon, Temps de recharge, Dégâts, Dégâts physiques.",
			"itIT": "Quando infliggi danni critici, la velocità d'attacco dei tuoi lupi aumenta del +20% per 3 s.\n\nTags: Compagni, Tempo di recupero, Danni, Fisico.",
			"jaJP": "クリティカルヒットを与えると、狼の攻撃速度が3秒間+20%増加する。\n\nTags: 使い魔, クールダウン, ダメージ, 物理.",
			"koKR": "공격이 극대화로 적중하면 늑대들의 공격 속도가 3초 동안 +20% 증가합니다.\n\nTags: 동료, 재사용 대기시간, 피해, 물리.",
			"plPL": "Po zadaniu trafienia krytycznego twoje Wilki zyskują premię +20% do szybkości ataku na 3 sek.\n\nTags: Kompan, Odnowienie, Obrażenia, Fizyczne.",
			"ptBR": "Ao desferir um acerto crítico, seus lobos recebem +20% de velocidade de ataque por 3 segundos.\n\nTags: Mascote, Recarga, Dano, Física.",
			"ruRU": "Когда вы наносите критический удар, скорость атаки ваших волков повышается на +20% на 3 сек.\n\nTags: Спутник, Время восстановления, Урон, Физический урон.",
			"zhCN": "造成暴击后, 群狼的攻击速度提高 +20%, 持续 3 秒。\n\nTags: 同伴, 冷却时间, 伤害, 物理.",
			"zhTW": "當你爆擊時,你的狼群獲得 +20% 攻擊速度,持續 3 秒。\n\nTags: 同伴, 冷卻時間, 傷害, 物理."
},
		id: 74,
		maxPoints: 1,
		x: -161.61,
		y: -605.781
	},
	"Ferocious Wolf Pack": {
		baseSkill: "Wolves",
		connections: [ "Enhanced Wolf Pack" ],
		description: `Lucky Hit: Your Wolves' attacks have up to a 10% chance to Fortify you for 5% Base Life.

Tags: Companion, Cooldown, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Grausames Wolfsrudel",
			"esES": "Manada de lobos feroz",
			"esMX": "Manada de Lobos Feroz",
			"frFR": "Meute de loups farouches",
			"itIT": "Lupi Feroci",
			"jaJP": "狼の群れ(残忍)",
			"koKR": "포악한 늑대 무리",
			"plPL": "Zdziczała Wataha",
			"ptBR": "Alcateia Feroz",
			"ruRU": "Свирепая волчья стая",
			"zhCN": "暴躁狼群",
			"zhTW": "兇猛狼群"
},
		descriptionLocalized: {
			"deDE": "Glücktreffer: Die Angriffe Eurer Wölfe haben eine Chance von bis zu 10%, Euch Stählung in Höhe von 5% Eures Basislebens zu verleihen.\n\nTags: Gefährte, Abklingzeit, Schaden, Physisch.",
			"esES": "Golpe de suerte: Los ataques de tus lobos tienen hasta un 10% de probabilidad de fortificar un 5% de tu vida base.\n\nTags: Compañero, Tiempo de reutilización, Daño, Física.",
			"esMX": "Golpe afortunado: Los ataques de tus Lobos tienen hasta un 10% de probabilidad de fortificarte con un 5% de tu vida de base.\n\nTags: Compañero, Recuperación, Daño, Física.",
			"frFR": "Coup de chance: les attaques de vos loups ont jusqu'à 10% de chances de vous conférer un montant de fortification égal à 5% de vos points de vie de base.\n\nTags: Compagnon, Temps de recharge, Dégâts, Dégâts physiques.",
			"itIT": "Colpo fortunato: gli attacchi dei tuoi lupi hanno fino al 10% di probabilità di fornirti Fortificazione per il 5% della Vita base.\n\nTags: Compagni, Tempo di recupero, Danni, Fisico.",
			"jaJP": "幸運の一撃: 狼が攻撃を行うと、最大10%の確率で基本ライフの5%にあたるの強化を獲得する。\n\nTags: 使い魔, クールダウン, ダメージ, 物理.",
			"koKR": "행운의 적중: 늑대의 공격이 최대 10% 확률로 기본 생명력의 5%만큼 자신을 보강합니다.\n\nTags: 동료, 재사용 대기시간, 피해, 물리.",
			"plPL": "Szczęśliwy traf: Ataki twoich Wilków mają do 10% szans na zapewnienie ci umocnienia równego 5% twojego podstawowego zdrowia.\n\nTags: Kompan, Odnowienie, Obrażenia, Fizyczne.",
			"ptBR": "Golpe de Sorte: Os ataques de seus lobos têm até 10% de chance de fortificar você em 5% da vida básica.\n\nTags: Mascote, Recarga, Dano, Física.",
			"ruRU": "Удачный удар: атаки ваших волков с вероятностью до 10% дают вам укрепление в объеме до 5% базового запаса здоровья.\n\nTags: Спутник, Время восстановления, Урон, Физический урон.",
			"zhCN": "幸运一击: 你的群狼 攻击最多有 10% 几率强固你 5% 基础生命。\n\nTags: 同伴, 冷却时间, 伤害, 物理.",
			"zhTW": "幸運觸發:你的狼群攻擊最多有 10% 機率賦予你相當於 5% 基礎生命值的強韌。\n\nTags: 同伴, 冷卻時間, 傷害, 物理."
},
		id: 73,
		maxPoints: 1,
		x: 170.175,
		y: -604.816
	},
	"Nature's Reach": {
		connections: [ "Companion" ],
		description: `Deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Distant enemies. Double this bonus if they are also Slowed, Stunned, Immobilized, or Knocked Back.

Tags: Damage, Crowd Control.`,
		nameLocalized: {
			"deDE": "Reichweite der Natur",
			"esES": "Alcance de la naturaleza",
			"esMX": "Alcance de la Naturaleza",
			"frFR": "Allonge de la Nature",
			"itIT": "Portata della Natura",
			"jaJP": "大自然の手",
			"koKR": "자연의 테두리",
			"plPL": "Zasięg Natury",
			"ptBR": "Alcance da Natureza",
			"ruRU": "Власть природы",
			"zhCN": "自然延伸",
			"zhTW": "自然之觸"
},
		descriptionLocalized: {
			"deDE": "Fügt entfernten Gegnern x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden zu. Wenn sie verlangsamt, betäubt, bewegungsunfähig oder zurückgestoßen sind, verdoppelt sich dieser Bonus.\n\nTags: Schaden, Kontrollverlust.",
			"esES": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a enemigos lejanos. Este bonus se duplica si, además, están ralentizados, aturdidos, inmovilizados o repelidos.\n\nTags: Daño, Control de masas.",
			"esMX": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a los enemigos lejanos. La bonificación se duplica si además están ralentizados, aturdidos, inmovilizados o repelidos.\n\nTags: Daño, Control de multitudes.",
			"frFR": "Vous infligez x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires aux cibles à distance. Ce bonus est doublé si les cibles sont ralenties, étourdies, immobilisées ou repoussées.\n\nTags: Dégâts, Perte de contrôle.",
			"itIT": "Infliggi il x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi ai nemici lontani. Questo bonus raddoppia se sono anche rallentati, storditi, immobilizzati o respinti.\n\nTags: Danni, Effetti debilitanti.",
			"jaJP": "遠距離にいる敵に与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。移動速度低下、スタン、移動不能、ノックバック状態の敵に対しては効果が2倍になる。\n\nTags: ダメージ, 操作障害効果.",
			"koKR": "원거리에 있는 적에게 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다. 감속, 기절, 이동 불가 상태이거나 밀려난 적에게는 효과가 2배로 증가합니다.\n\nTags: 피해, 군중 제어.",
			"plPL": "Zadajesz odległym wrogom obrażenia zwiększone o x{3/6/9/12/15/18/21/24/27/30}%. Premia ta jest podwojona w przypadku wrogów spowolnionych, ogłuszonych, unieruchomionych lub odrzuconych.\n\nTags: Obrażenia, Ograniczanie Kontroli.",
			"ptBR": "Causa {3/6/9/12/15/18/21/24/27/30}% de dano aumentado a inimigos distantes. O bônus é dobrado se eles também estiverem desacelerados, atordoados, imobilizados ou repelidos.\n\nTags: Dano, Controle de Grupo.",
			"ruRU": "Вы наносите на x{3/6/9/12/15/18/21/24/27/30}% больше урона находящимся вдалеке противникам. Бонус удваивается, если ваша цель замедлена, оглушена, обездвижена или отброшена.\n\nTags: Урон, Контроль.",
			"zhCN": "对远距敌人造成的伤害提高 x{3/6/9/12/15/18/21/24/27/30}%。如果敌人处于减速、昏迷、定身或击退状态, 则该加成翻倍。\n\nTags: 伤害, 群控.",
			"zhTW": "對遠程敵人造成的傷害提高 x{3/6/9/12/15/18/21/24/27/30}%。如果敵人也被緩速、擊昏、定身或擊退,則此加成效果加倍。\n\nTags: 傷害, 控場."
},
		id: 75,
		maxPoints: 3,
		x: -372.585,
		y: -196.762
	},
	"Clarity": {
		connections: [ "Companion" ],
		description: `Gain {2/4/6/8/10/12/14/16/18/20} Spirit when transforming into Human form.

Tags: Spirit, Shapeshifting.`,
		nameLocalized: {
			"deDE": "Klarheit",
			"esES": "Claridad",
			"esMX": "Claridad",
			"frFR": "Clarté",
			"itIT": "Chiarezza",
			"jaJP": "清澄",
			"koKR": "명료",
			"plPL": "Jasność",
			"ptBR": "Clareza",
			"ruRU": "Ясность",
			"zhCN": "明澈",
			"zhTW": "澄明"
},
		descriptionLocalized: {
			"deDE": "Erhaltet {2/4/6/8/10/12/14/16/18/20} Geisteskraft, wenn Ihr Menschengestalt annehmt.\n\nTags: Geisteskraft, Gestaltwandeln.",
			"esES": "Obtienes {2/4/6/8/10/12/14/16/18/20} de espíritu al cambiar a forma humana.\n\nTags: Espíritu, Cambio de forma.",
			"esMX": "Obtienes {2/4/6/8/10/12/14/16/18/20} de Espíritu cuando te transformas en forma humana.\n\nTags: Espíritu, Metamorfosis.",
			"frFR": "Vous gagnez {2/4/6/8/10/12/14/16/18/20} points d'esprit lorsque vous adoptez une forme humaine.\n\nTags: Esprit, Métamorphose.",
			"itIT": "Ottieni {2/4/6/8/10/12/14/16/18/20} spirito quando ti trasformi in forma umana.\n\nTags: Spirito, Mutaforma.",
			"jaJP": "人間形態に変身すると、精神力を{2/4/6/8/10/12/14/16/18/20}得る。\n\nTags: 精神力, 変身.",
			"koKR": "인간 형상으로 변신할 때 영력을 {2/4/6/8/10/12/14/16/18/20} 생성합니다.\n\nTags: 영력, 변신.",
			"plPL": "Kiedy przemieniasz się w człowieka, zyskujesz {2/4/6/8/10/12/14/16/18/20} pkt. siły duchowej.\n\nTags: Siła Duchowa, Zmiennokształtność.",
			"ptBR": "Recebe {2/4/6/8/10/12/14/16/18/20} de espírito ao se transformar em forma humana.\n\nTags: Espírito, Metamorfose.",
			"ruRU": "Принимая облик человека, вы накапливаете {2/4/6/8/10/12/14/16/18/20} ед. духа.\n\nTags: Дух, Смена облика.",
			"zhCN": "变成人类形态时获得 {2/4/6/8/10/12/14/16/18/20} 点灵力。\n\nTags: 灵力, 变形.",
			"zhTW": "變回人類形態時獲得 {2/4/6/8/10/12/14/16/18/20} 點靈力。\n\nTags: 靈力, 變形."
},
		id: 76,
		maxPoints: 3,
		x: -373.905,
		y: 228.091
	},
};

druidData["Wrath"] = {
	"Elemental Exposure": {
		connections: [ "Charged Atmosphere", "Wrath", "Endless Tempest" ],
		description: `Lucky Hit: Your Storm Skills have up to a 10% chance to make enemies Vulnerable for {1/2/3/4/5/6/7/8/9/10} seconds.

Tags: Vulnerable, Lucky Hit, Storm, Nature Magic.`,
		nameLocalized: {
			"deDE": "Den Elementen ausgesetzt",
			"esES": "Exposición elemental",
			"esMX": "Exposición Elemental",
			"frFR": "Sensibilité élémentaire",
			"itIT": "Rivelazione Elementale",
			"jaJP": "属性発露",
			"koKR": "원소 조합",
			"plPL": "Potęga Żywiołów",
			"ptBR": "Exposição Elemental",
			"ruRU": "Сила стихий",
			"zhCN": "元素易伤",
			"zhTW": "元素暴露"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Eure Sturmfertigkeiten verfügen über eine Chance von 10%, Gegner {1/2/3/4/5/6/7/8/9/10} Sek. lang verwundbar zu machen.\n\nTags: Verwundbar, Glückstreffer, Sturm, Naturmagie.",
			"esES": "Golpe de suerte: Tus habilidades de tormenta tienen hasta un 10% de probabilidad de volver vulnerables a los enemigos durante {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Vulnerable, Golpe de suerte, Tormenta, Magia de la naturaleza.",
			"esMX": "Golpe afortunado: Tus habilidades de Tormenta tienen hasta un 10% de probabilidad de volver a los enemigos vulnerables durante {1/2/3/4/5/6/7/8/9/10} segundos.\n\nTags: Vulnerable, Golpe afortunado, Tormenta, Magia de la naturaleza.",
			"frFR": "Coup de chance: vos compétences de tempête ont jusqu'à 10% de chances de rendre les adversaires vulnérables pendant {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Vulnérable, Coup de chance, Tempête, Magie naturelle.",
			"itIT": "Colpo fortunato: le tue abilità di Tempesta hanno fino al 10% di probabilità di rendere i nemici vulnerabili per {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Vulnerabilità, Colpo fortunato, Tempesta, Magia naturale.",
			"jaJP": "幸運の一撃: 嵐スキルが最大10%の確率で{1/2/3/4/5/6/7/8/9/10}秒間、敵を脆弱状態にする。\n\nTags: 脆弱, 幸運の一撃, 嵐, 自然魔法.",
			"koKR": "행운의 적중: 폭풍 기술이 최대 10% 확률로 적을 {1/2/3/4/5/6/7/8/9/10}초 동안 취약하게 만듭니다.\n\nTags: 취약, 행운의 적중, 폭풍, 자연 마법.",
			"plPL": "Szczęśliwy traf: Twoje umiejętności Burzy mają 10% szans na odsłonięcie wrogów na {1/2/3/4/5/6/7/8/9/10} sek.\n\nTags: Odsłonięcie, Szczęśliwy Traf, Burza, Magia Natury.",
			"ptBR": "Golpe de Sorte: Suas habilidades de Tempestade têm até 10% de chance de tornar os inimigos vulneráveis por {1/2/3/4/5/6/7/8/9/10} segundos.\n\nTags: Vulnerável, Golpe de Sorte, Tempestade, Magia da Natureza.",
			"ruRU": "Удачный удар: ваши умения бури с вероятностью 10% делают противников уязвимыми на {1/2/3/4/5/6/7/8/9/10} сек.\n\nTags: Уязвимость, Удачный удар, Буря, Силы природы.",
			"zhCN": "幸运一击: 你的风暴技能最多有 10% 几率使敌人陷入易伤状态, 持续 {1/2/3/4/5/6/7/8/9/10} 秒。\n\nTags: 易伤, 幸运一击, 风暴, 自然魔法.",
			"zhTW": "幸運觸發:你的暴風技能最高有 10% 機率使敵人易傷,持續 {1/2/3/4/5/6/7/8/9/10} 秒。\n\nTags: 易傷, 幸運觸發, 風暴, 自然魔法."
},
		id: 80,
		maxPoints: 3,
		x: -180.95,
		y: -344.481
	},
	"Charged Atmosphere": {
		connections: [ "Elemental Exposure", "Electric Shock", "Bad Omen" ],
		description: `Every {18/15/12/9/6/3/0/-3/-6/-9} seconds, a Lightning Bolt hits a Nearby enemy dealing 45% damage.

Tags: Storm, Nature Magic, Damage, Lightning.`,
		nameLocalized: {
			"deDE": "Geladene Atmosphäre",
			"esES": "Atmósfera cargada",
			"esMX": "Atmósfera Cargada",
			"frFR": "Atmosphère lourde",
			"itIT": "Atmosfera Elettrizzata",
			"jaJP": "空気帯電",
			"koKR": "충전된 대기",
			"plPL": "Naelektryzowana Atmosfera",
			"ptBR": "Atmosfera Carregada",
			"ruRU": "Атмосферное напряжение",
			"zhCN": "空气电场",
			"zhTW": "蓄電大氣"
},
		descriptionLocalized: {
			"deDE": "Alle {18/15/12/9/6/3/0/-3/-6/-9} Sek. trifft ein Blitzschlag einen Gegner in der Nähe und verursacht 45% Schaden.\n\nTags: Sturm, Naturmagie, Schaden, Blitz.",
			"esES": "Cada {18/15/12/9/6/3/0/-3/-6/-9} s, un rayo golpea a un enemigo cercano y le inflige 45% de daño.\n\nTags: Tormenta, Magia de la naturaleza, Daño, Rayos.",
			"esMX": "Cada {18/15/12/9/6/3/0/-3/-6/-9} segundos, un Rayo golpea a un enemigo cercano e inflige 45% de daño.\n\nTags: Tormenta, Magia de la naturaleza, Daño, Rayo.",
			"frFR": "Toutes les {18/15/12/9/6/3/0/-3/-6/-9} s, un trait de foudre touche une cible à proximité et lui inflige 45% points de dégâts.\n\nTags: Tempête, Magie naturelle, Dégâts, Foudre.",
			"itIT": "Ogni {18/15/12/9/6/3/0/-3/-6/-9} secondi, un Dardo Fulminante colpisce un nemico vicino infliggendo 45% danni.\n\nTags: Tempesta, Magia naturale, Danni, Fulmine.",
			"jaJP": "{18/15/12/9/6/3/0/-3/-6/-9}秒ごとに〈ライトニング・ボルト〉が付近の敵に命中し、45%のダメージを与える。\n\nTags: 嵐, 自然魔法, ダメージ, 稲妻.",
			"koKR": "{18/15/12/9/6/3/0/-3/-6/-9}초에 한 번씩, 주위의 적에게 번갯불이 꽂혀 45%의 피해를 줍니다.\n\nTags: 폭풍, 자연 마법, 피해, 번개.",
			"plPL": "Co {18/15/12/9/6/3/0/-3/-6/-9} sek. Uderzenie Błyskawicy razi pobliskiego wroga i zadaje mu 45% pkt. obrażeń.\n\nTags: Burza, Magia Natury, Obrażenia, Błyskawica.",
			"ptBR": "A cada {18/15/12/9/6/3/0/-3/-6/-9} segundos, um Raio atinge um inimigo próximo, causando 45% de dano.\n\nTags: Tempestade, Magia da Natureza, Dano, Eletricidade.",
			"ruRU": "Раз в {18/15/12/9/6/3/0/-3/-6/-9} сек. ближайшего противника поражает разряд молнии, наносящий 45% ед. урона.\n\nTags: Буря, Силы природы, Урон, Молния.",
			"zhCN": "每隔 {18/15/12/9/6/3/0/-3/-6/-9} 秒对附近的敌人射出一支闪电箭, 造成 45% 点伤害。\n\nTags: 风暴, 自然魔法, 伤害, 闪电.",
			"zhTW": "每 {18/15/12/9/6/3/0/-3/-6/-9} 秒會以閃電擊中一名附近的敵人,造成 45% 點傷害。\n\nTags: 風暴, 自然魔法, 傷害, 電擊."
},
		id: 81,
		maxPoints: 3,
		x: -373.152,
		y: -445.477
	},
	"Electric Shock": {
		connections: [ "Charged Atmosphere", "Bad Omen" ],
		description: `Lucky Hit: Dealing Lightning damage to enemies has up to a {5/10/15/20/25/30/35/40/45/50}% chance to Immobilize them for 3 seconds.

If the target is already Immobilized, the Lightning damage dealt to them is increased by x{5/10/15/20/25/30/35/40/45/50}% instead.

Tags: Crowd Control, Lightning, Lucky Hit, Damage.`,
		nameLocalized: {
			"deDE": "Elektroschock",
			"esES": "Electrochoque",
			"esMX": "Choque Eléctrico",
			"frFR": "Choc électrique",
			"itIT": "Folgore Elettrica",
			"jaJP": "感電",
			"koKR": "전류 충격",
			"plPL": "Porażenie Prądem",
			"ptBR": "Choque Elétrico",
			"ruRU": "Электрошок",
			"zhCN": "电能冲击",
			"zhTW": "電擊"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Wenn Ihr Gegnern Blitzschaden zufügt, besteht eine Chance von bis zu {5/10/15/20/25/30/35/40/45/50}%, sie 3 Sek. lang bewegungsunfähig zu machen.\n\nWenn das Ziel bereits bewegungsunfähig ist, erhöht sich sein erlittener Blitzschaden stattdessen um x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Kontrollverlust, Blitz, Glückstreffer, Schaden.",
			"esES": "Golpe de suerte: Infligir daño de rayos a enemigos tiene hasta un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de inmovilizarlos durante 3 s.\n\nSi el objetivo ya está inmovilizado, sufre un x{5/10/15/20/25/30/35/40/45/50}% más de daño de rayos en su lugar.\n\nTags: Control de masas, Rayos, Golpe de suerte, Daño.",
			"esMX": "Golpe afortunado: Infligir daño de rayo tiene hasta un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de inmovilizar a los enemigos durante 3 segundos.\n\nSi el objetivo ya está inmovilizado, el daño de rayo infligido aumenta un x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Control de multitudes, Rayo, Golpe afortunado, Daño.",
			"frFR": "Coup de chance: lorsque vous infligez des dégâts de foudre aux adversaires, vous avez jusqu'à {5/10/15/20/25/30/35/40/45/50}% de chances de les immobiliser pendant 3 s.\n\nSi la cible est déjà immobilisée, les dégâts de foudre qui lui sont infligés augmentent de x{5/10/15/20/25/30/35/40/45/50}% à la place.\n\nTags: Perte de contrôle, Foudre, Coup de chance, Dégâts.",
			"itIT": "Colpo fortunato: infliggere danni da fulmine ai nemici fornisce fino al {5/10/15/20/25/30/35/40/45/50}% di probabilità di immobilizzarli per 3 s.\n\nSe il bersaglio è già immobilizzato, i danni da fulmine inflitti aumentano invece del x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Effetti debilitanti, Fulmine, Colpo fortunato, Danni.",
			"jaJP": "幸運の一撃: 敵に電撃ダメージを与えると、{5/10/15/20/25/30/35/40/45/50}%の確率で敵を3秒間、移動不能にする。\n\n標的がすでに移動不能だった場合は、与える電撃ダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: 操作障害効果, 稲妻, 幸運の一撃, ダメージ.",
			"koKR": "행운의 적중: 적에게 번개 피해를 주면 최대 {5/10/15/20/25/30/35/40/45/50}% 확률로 해당 적이 3초 동안 이동 불가 상태가 됩니다.\n\n대상이 이미 이동 불가 상태일 경우, 해당 적에게 주는 번개 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 군중 제어, 번개, 행운의 적중, 피해.",
			"plPL": "Szczęśliwy traf: Zadawanie wrogom obrażeń od Błyskawic ma maksymalnie {5/10/15/20/25/30/35/40/45/50}% szans na unieruchomienie ich na 3 sek.\n\nJeżeli cel jest już unieruchomiony, zadawane mu obrażenia od Błyskawic są zwiększone o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Ograniczanie Kontroli, Błyskawica, Szczęśliwy Traf, Obrażenia.",
			"ptBR": "Golpe de Sorte: Causar dano elétrico a inimigos tem até {5/10/15/20/25/30/35/40/45/50}% de chance de imobilizá-los por 3 segundos.\n\nSe o alvo já estiver imobilizado, o dano elétrico recebido por ele é aumentado em {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Controle de Grupo, Eletricidade, Golpe de Sorte, Dano.",
			"ruRU": "Удачный удар: когда вы наносите противникам урон от молнии, вы с вероятностью до {5/10/15/20/25/30/35/40/45/50}% обездвиживаете их на 3 сек.\n\nЕсли цель уже обездвижена, наносимый ей урон от молнии увеличивается на x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Контроль, Молния, Удачный удар, Урон.",
			"zhCN": "幸运一击: 对敌人造成闪电伤害最多有 {5/10/15/20/25/30/35/40/45/50}% 几率使其定身 3 秒。\n\n如果目标已经处于定身状态, 则对其造成的闪电伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 群控, 闪电, 幸运一击, 伤害.",
			"zhTW": "幸運觸發:對敵人造成電擊傷害有最多 {5/10/15/20/25/30/35/40/45/50}% 的機率使他們定身,持續 3 秒。\n\n如目標已被定身,對目標造成的電擊傷害則會提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 控場, 電擊, 幸運觸發, 傷害."
},
		id: 82,
		maxPoints: 3,
		x: -373.93,
		y: -598.557
	},
	"Bad Omen": {
		connections: [ "Charged Atmosphere", "Electric Shock", "Endless Tempest" ],
		description: `Lucky Hit: Up to a {10/20/30/40/50/60/70/80/90/100}% chance when dealing damage to a Vulnerable, Immobilized or Stunned enemy that a Lightning Bolt also hits dealing 55% damage.

Tags: Vulnerable, Lightning, Damage, Nature Magic, Storm, Lucky Hit, Crowd Control.`,
		nameLocalized: {
			"deDE": "Schlechtes Omen",
			"esES": "Mal augurio",
			"esMX": "Mal Augurio",
			"frFR": "Mauvais présage",
			"itIT": "Cattivo presagio",
			"jaJP": "不吉な予兆",
			"koKR": "나쁜 징조",
			"plPL": "Zły Omen",
			"ptBR": "Mau Presságio",
			"ruRU": "Дурное знамение",
			"zhCN": "恶兆",
			"zhTW": "不祥之兆"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Wenn Ihr einem verwundbaren, bewegungsunfähigen oder betäubten Gegner Schaden zufügt, besteht eine Chance von bis zu {10/20/30/40/50/60/70/80/90/100}%, dass ihn auch ein Blitzschlag trifft und ihm 55% Schaden zufügt.\n\nTags: Verwundbar, Blitz, Schaden, Naturmagie, Sturm, Glückstreffer, Kontrollverlust.",
			"esES": "Golpe de suerte: Al infligir daño a un enemigo vulnerable, inmovilizado o aturdido, tienes hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de que también lo golpee un rayo que inflige 55% de daño.\n\nTags: Vulnerable, Rayos, Daño, Magia de la naturaleza, Tormenta, Golpe de suerte, Control de masas.",
			"esMX": "Golpe afortunado: Al infligir daño a un enemigo vulnerable, inmovilizado o aturdido, hay hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de que un Rayo también golpee e inflija 55% de daño.\n\nTags: Vulnerable, Rayo, Daño, Magia de la naturaleza, Tormenta, Golpe afortunado, Control de multitudes.",
			"frFR": "Coup de chance: lorsque vous infligez des dégâts à une cible vulnérable, immobilisée ou étourdie, vous avez jusqu'à {10/20/30/40/50/60/70/80/90/100}% de chances qu'une décharge électrique la frappe également en lui infligeant 55% points de dégâts.\n\nTags: Vulnérable, Foudre, Dégâts, Magie naturelle, Tempête, Coup de chance, Perte de contrôle.",
			"itIT": "Colpo fortunato: fino al {10/20/30/40/50/60/70/80/90/100}% di probabilità quando si infliggono danni a un nemico vulnerabile, immobilizzato o stordito di generare un Dardo Fulminante che infligge 55% danni.\n\nTags: Vulnerabilità, Fulmine, Danni, Magia naturale, Tempesta, Colpo fortunato, Effetti debilitanti.",
			"jaJP": "幸運の一撃: 最大{10/20/30/40/50/60/70/80/90/100}%の確率で、脆弱、移動不能、あるいはスタン状態の敵にダメージを与えると、その敵に追加で〈ライトニング・ボルト〉が命中し、55%のダメージを与える。\n\nTags: 脆弱, 稲妻, ダメージ, 自然魔法, 嵐, 幸運の一撃, 操作障害効果.",
			"koKR": "행운의 적중: 취약, 이동 불가, 기절 상태의 적에게 피해를 주면 최대 {10/20/30/40/50/60/70/80/90/100}% 확률로 번갯불이 적에게 꽂혀 55%의 피해를 줍니다.\n\nTags: 취약, 번개, 피해, 자연 마법, 폭풍, 행운의 적중, 군중 제어.",
			"plPL": "Szczęśliwy traf: Przy zranieniu odsłoniętego, unieruchomionego lub ogłuszonego wroga masz {10/20/30/40/50/60/70/80/90/100}% szans na wywołanie Uderzenia Błyskawicy, które zada 55% pkt. obrażeń.\n\nTags: Odsłonięcie, Błyskawica, Obrażenia, Magia Natury, Burza, Szczęśliwy Traf, Ograniczanie Kontroli.",
			"ptBR": "Golpe de Sorte: Ao causar dano a inimigos vulneráveis, imobilizados ou atordoados, tem até {10/20/30/40/50/60/70/80/90/100}% de chance de também os atingir com um Raio, causando 55% de dano.\n\nTags: Vulnerável, Eletricidade, Dano, Magia da Natureza, Tempestade, Golpe de Sorte, Controle de Grupo.",
			"ruRU": "Удачный удар: когда вы поражаете уязвимого, обездвиженного или оглушенного противника, с вероятностью {10/20/30/40/50/60/70/80/90/100}% создается разряд молнии, наносящий 55% ед. урона.\n\nTags: Уязвимость, Молния, Урон, Силы природы, Буря, Удачный удар, Контроль.",
			"zhCN": "幸运一击: 对处于易伤、定身或昏迷状态的敌人造成伤害时, 最多有 {10/20/30/40/50/60/70/80/90/100}% 几率对其射出一支闪电箭, 造成 55% 点伤害。\n\nTags: 易伤, 闪电, 伤害, 自然魔法, 风暴, 幸运一击, 群控.",
			"zhTW": "幸運觸發:對易傷、定身或昏迷的敵人造成傷害時,最多有 {10/20/30/40/50/60/70/80/90/100}% 機率觸發閃電,命中時造成 55% 點傷害。\n\nTags: 易傷, 電擊, 傷害, 自然魔法, 風暴, 幸運觸發, 控場."
},
		id: 83,
		maxPoints: 3,
		x: 3.305,
		y: -597.918
	},
	"Endless Tempest": {
		connections: [ "Elemental Exposure", "Bad Omen" ],
		description: `Increase the duration of Hurricane and Cataclysm by x{5/10/15/20/25/30/35/40/45/50}%.

Tags: Damage.`,
		nameLocalized: {
			"deDE": "Endloser Sturm",
			"esES": "Tempestad sin fin",
			"esMX": "Tempestad Interminable",
			"frFR": "Tempête éternelle",
			"itIT": "Tempesta Interminabile",
			"jaJP": "終わりなき大嵐",
			"koKR": "끝없는 비바람",
			"plPL": "Wiekuista Nawałnica",
			"ptBR": "Tormenta Infinita",
			"ruRU": "Нескончаемый ураган",
			"zhCN": "无尽风暴",
			"zhTW": "無盡風暴"
},
		descriptionLocalized: {
			"deDE": "Erhöht die Dauer von Hurrikan und Kataklysmus um x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Schaden.",
			"esES": "Aumenta un x{5/10/15/20/25/30/35/40/45/50}% la duración de Huracán y Cataclismo.\n\nTags: Daño.",
			"esMX": "Aumenta un x{5/10/15/20/25/30/35/40/45/50}% la duración de Huracán y Cataclismo.\n\nTags: Daño.",
			"frFR": "Augmente la durée d'Ouragan et de Cataclysme de x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Dégâts.",
			"itIT": "Aumenti la durata di Uragano e Cataclisma del x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Danni.",
			"jaJP": "〈烈風〉と〈大変動〉の持続時間がx{5/10/15/20/25/30/35/40/45/50}%長くなる。\n\nTags: ダメージ.",
			"koKR": "싹쓸바람과 대격변의 지속시간이 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 피해.",
			"plPL": "Czas działania Huraganu oraz Kataklizmu jest wydłużony o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Obrażenia.",
			"ptBR": "Aumenta a duração de Furacão e Cataclismo em {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Dano.",
			"ruRU": "Время действия \"Урагана\" и \"Катаклизма\" увеличивается на x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Урон.",
			"zhCN": "飓风和浩劫的持续时间延长 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 伤害.",
			"zhTW": "颶風術與災變的持續時間延長 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 傷害."
},
		id: 84,
		maxPoints: 3,
		x: 2.355,
		y: -446.745
	},
	"Boulder": {
		connections: [ "Wrath", "Enhanced Boulder" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 4%
Unearth a large rolling boulder that repeatedly Knocks Back enemies, dealing {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% damage with each hit.

Tags: Wrath, Nature Magic, Earth, Physical, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Felsbrocken",
			"esES": "Peñasco",
			"esMX": "Roca",
			"frFR": "Rocher",
			"itIT": "Macigno",
			"jaJP": "巨岩",
			"koKR": "바위",
			"plPL": "Głaz",
			"ptBR": "Rochedo",
			"ruRU": "Глыба",
			"zhCN": "滚石",
			"zhTW": "巨石"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 4%\nBringt einen großen Felsbrocken ins Rollen, der Gegner mehrfach zurückstößt und ihnen mit jedem Treffer {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% Schaden zufügt.\n\nTags: Zorn, Naturmagie, Erde, Physisch, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 4%\nDesentierras un gran peñasco rodante que repele repetidamente a los enemigos, lo que inflige {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% de daño con cada golpe.\n\nTags: Cólera, Magia de la naturaleza, Tierra, Física, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 4%\nDesentierras una roca gigante que repele repetidamente a los enemigos y les inflige {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% de daño por cada golpe.\n\nTags: Ira, Magia de la naturaleza, Tierra, Física, Daño, Recuperación, Control de multitudes.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 4%\nVous déterrez un gros rocher qui roule en percutant et en repoussant les adversaires plusieurs fois de suite, leur infligeant {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% points de dégâts à chaque coup.\n\nTags: Colère, Magie naturelle, Terre, Dégâts physiques, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 4%\nDissotterri un grosso macigno rotolante che respinge continuamente indietro i nemici, infliggendo {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% danni a ogni colpo.\n\nTags: Collera, Magia naturale, Terra, Fisico, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 4%\n巨岩を掘り起こして転がし、敵をノックバックしつつ、命中するたびに{33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}%のダメージを与える。\n\nTags: 憤怒, 自然魔法, 地, 物理, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 4%\n땅에서 커다란 바위를 꺼내 굴려 보냅니다. 바위는 반복적으로 적을 밀쳐내며, 적중할 때마다 {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}%의 피해를 줍니다.\n\nTags: 진노, 자연 마법, 대지, 물리, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 4%\nWydobywasz z ziemi wielki, toczący się głaz, który wielokrotnie odrzuca wrogów, zadając im przy każdym trafieniu {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% pkt. obrażeń.\n\nTags: Gniew, Magia Natury, Ziemia, Fizyczne, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 4%\nDesenterra um grande rochedo rolante que repele inimigos várias vezes, causando {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% de dano a cada acerto.\n\nTags: Ira, Magia da Natureza, Terra, Física, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 4%\nПоднимает из-под земли огромный валун, который катится вперед и непрерывно отбрасывает противников, нанося им {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% ед. урона каждым ударом.\n\nTags: Гнев, Силы природы, Земля, Физический урон, Урон, Время восстановления, Контроль.",
			"zhCN": "冷却时间: {#}秒\n幸运一击几率: 4%\n挖出一块巨大的滚石不断击退敌人, 每次命中造成 {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% 点伤害。\n\nTags: 愤怒, 自然魔法, 大地, 物理, 伤害, 冷却时间, 群控.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:4%\n挖出一顆滾動巨石,不斷擊退敵人,每次命中造成 {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% 點傷害。\n\nTags: 憤怒, 自然魔法, 大地, 物理, 傷害, 冷卻時間, 控場."
},
		id: 85,
		maxPoints: 5,
		values: [ "10" ],
		x: 528.095,
		y: -212.19
	},
	"Enhanced Boulder": {
		baseSkill: "Boulder",
		connections: [ "Boulder", "Natural Boulder", "Savage Boulder" ],
		description: `When Boulder reaches the end of its path, enemies hit are Slowed by 30% for 3 seconds. If Boulder Overpowered, enemies are Stunned for 4 seconds instead.

Tags: Wrath, Nature Magic, Earth, Physical, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Verbesserter Felsbrocken",
			"esES": "Peñasco mejorado",
			"esMX": "Roca Potenciada",
			"frFR": "Rocher renforcé",
			"itIT": "Macigno Rinforzato",
			"jaJP": "巨岩(強化版)",
			"koKR": "강화된 바위",
			"plPL": "Wzmocniony Głaz",
			"ptBR": "Rochedo Aperfeiçoado",
			"ruRU": "Усиленная глыба",
			"zhCN": "强化滚石",
			"zhTW": "強化巨石"
},
		descriptionLocalized: {
			"deDE": "Wenn Felsbrocken das Ende seines Pfads erreicht, werden getroffene Gegner 3 Sek. lang um 30% verlangsamt. Falls Felsbrocken überwältigt, werden Gegner stattdessen 4 Sek. lang betäubt.\n\nTags: Zorn, Naturmagie, Erde, Physisch, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Cuando Peñasco alcanza el final del recorrido, los enemigos golpeados quedan ralentizados un 30% durante 3 s. Si Peñasco arrolla, los enemigos quedan aturdidos durante 4 s en su lugar.\n\nTags: Cólera, Magia de la naturaleza, Tierra, Física, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Cuando Roca llega al final de su camino, los enemigos golpeados son ralentizados un 30% durante 3 segundos. Si Roca abrumó, los enemigos quedan en cambio aturdidos durante 4 segundos.\n\nTags: Ira, Magia de la naturaleza, Tierra, Física, Daño, Recuperación, Control de multitudes.",
			"frFR": "Lorsque le rocher termine sa course, les cibles touchées sont ralenties de 30% pendant 3 s. Si Rocher accable une cible, celle-ci est étourdie pendant 4 s à la place.\n\nTags: Colère, Magie naturelle, Terre, Dégâts physiques, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Quando Macigno raggiunge la fine del suo percorso, i nemici colpiti vengono rallentati del 30% per 3 s. Se Macigno ha Sopraffazione, i nemici vengono invece storditi per 4 s.\n\nTags: Collera, Magia naturale, Terra, Fisico, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈巨岩〉が転がり終わると、当たった敵の移動速度が3秒間30%低下する。〈巨岩〉でオーバーパワーが発生した場合、代わりに敵を4秒間スタンさせる。\n\nTags: 憤怒, 自然魔法, 地, 物理, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "바위가 경로 끝에 도달하면 적중당한 적들이 3초 동안 30% 감속됩니다. 바위가 제압했을 경우, 그 대신 적들이 4초 동안 기절합니다.\n\nTags: 진노, 자연 마법, 대지, 물리, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Kiedy Głaz dociera do końca swojej drogi, trafieni wrogowie zostają spowolnieni o 30% na 3 sek. Jeśli Głaz przytłoczy wrogów, zostaną zamiast tego ogłuszeni na 4 sek.\n\nTags: Gniew, Magia Natury, Ziemia, Fizyczne, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Quando Rochedo chega ao final da sua trajetória, os inimigos atingidos são desacelerados em 30% por 3 segundos. Se Rochedo desferir Golpe Brutal, os inimigos são atordoados por 4 segundos em vez disso.\n\nTags: Ira, Magia da Natureza, Terra, Física, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Когда \"Глыба\" достигает конца пути, пораженные противники замедляются на 30% на 3 сек. Если \"Глыба\" наносит подавляющий урон, вместо этого противники оглушаются на 4 сек.\n\nTags: Гнев, Силы природы, Земля, Физический урон, Урон, Время восстановления, Контроль.",
			"zhCN": "滚石达到路径终点时, 被命中的敌人会被减速 30%, 持续 3 秒。如果滚石压制了目标, 则敌人会被击晕 4 秒。\n\nTags: 愤怒, 自然魔法, 大地, 物理, 伤害, 冷却时间, 群控.",
			"zhTW": "巨石抵達路徑終點時,其擊中的敵人會緩速 30%,持續 3 秒。若巨石有壓制效果,則敵人改為昏迷 4 秒。\n\nTags: 憤怒, 自然魔法, 大地, 物理, 傷害, 冷卻時間, 控場."
},
		id: 86,
		maxPoints: 1,
		x: 826.57,
		y: -328.209
	},
	"Natural Boulder": {
		baseSkill: "Boulder",
		connections: [ "Enhanced Boulder" ],
		description: `While you have any Fortify, Boulder has +20% increased Critical Strike Chance.

Tags: Wrath, Nature Magic, Earth, Physical, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Natürlicher Felsbrocken",
			"esES": "Peñasco natural",
			"esMX": "Roca Natural",
			"frFR": "Rocher naturel",
			"itIT": "Macigno Naturale",
			"jaJP": "巨岩(天然)",
			"koKR": "자연의 바위",
			"plPL": "Naturalny Głaz",
			"ptBR": "Rochedo Natural",
			"ruRU": "Природная глыба",
			"zhCN": "自然滚石",
			"zhTW": "自然巨石"
},
		descriptionLocalized: {
			"deDE": "Während Ihr über Stählung verfügt, ist die kritische Trefferchance von Felsbrocken um +20% erhöht.\n\nTags: Zorn, Naturmagie, Erde, Physisch, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Mientras tienes fortificación, Peñasco tiene un +20% más de probabilidad de golpe crítico.\n\nTags: Cólera, Magia de la naturaleza, Tierra, Física, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Mientras tengas fortificación, Roca tiene un +20% más de probabilidad de golpe crítico.\n\nTags: Ira, Magia de la naturaleza, Tierra, Física, Daño, Recuperación, Control de multitudes.",
			"frFR": "Tant que vous bénéficiez d'une fortification, les chances d'infliger un coup critique de Rocher sont augmentées de +20%.\n\nTags: Colère, Magie naturelle, Terre, Dégâts physiques, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Quando hai Fortificazione, la probabilità di critico di Macigno aumenta del +20%.\n\nTags: Collera, Magia naturale, Terra, Fisico, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "強化されている間、〈巨岩〉のクリティカルヒット率が+20%増加する。\n\nTags: 憤怒, 自然魔法, 地, 物理, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "보강을 보유한 동안 바위의 극대화 확률이 +20% 증가합니다.\n\nTags: 진노, 자연 마법, 대지, 물리, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Kiedy masz umocnienie, szansa na trafienie krytyczne Głazem jest zwiększona o +20%.\n\nTags: Gniew, Magia Natury, Ziemia, Fizyczne, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Enquanto você tem qualquer fortificação, Rochedo tem +20% de chance de acerto crítico aumentada.\n\nTags: Ira, Magia da Natureza, Terra, Física, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Пока у вас есть эффект укрепления, вероятность критического эффекта \"Глыбы\" повышается на +20%.\n\nTags: Гнев, Силы природы, Земля, Физический урон, Урон, Время восстановления, Контроль.",
			"zhCN": "当你拥有任意强固效果时, 滚石的暴击几率提高 +20%。\n\nTags: 愤怒, 自然魔法, 大地, 物理, 伤害, 冷却时间, 群控.",
			"zhTW": "當你有強韌效果時,巨石的爆擊機率提高 +20%。\n\nTags: 憤怒, 自然魔法, 大地, 物理, 傷害, 冷卻時間, 控場."
},
		id: 87,
		maxPoints: 1,
		x: 892.545,
		y: -454.143
	},
	"Savage Boulder": {
		baseSkill: "Boulder",
		connections: [ "Enhanced Boulder" ],
		description: `Boulder's Critical Strike Chance is increased by +3% each time it deals damage.

Tags: Wrath, Nature Magic, Earth, Physical, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Wilder Felsbrocken",
			"esES": "Peñasco salvaje",
			"esMX": "Roca Salvaje",
			"frFR": "Rocher sauvage",
			"itIT": "Macigno Selvaggio",
			"jaJP": "巨岩(野生)",
			"koKR": "야생의 바위",
			"plPL": "Okrutny Głaz",
			"ptBR": "Rochedo Selvagem",
			"ruRU": "Неистовая глыба",
			"zhCN": "野蛮滚石",
			"zhTW": "野蠻巨石"
},
		descriptionLocalized: {
			"deDE": "Die kritische Trefferchance von Felsbrocken erhöht sich jedes Mal, wenn er Schaden verursacht, um +3%.\n\nTags: Zorn, Naturmagie, Erde, Physisch, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "La probabilidad de golpe crítico de Peñasco aumenta un +3% cada vez que inflige daño.\n\nTags: Cólera, Magia de la naturaleza, Tierra, Física, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "La probabilidad de golpe crítico de Roca aumenta un +3% cada vez que inflige daño.\n\nTags: Ira, Magia de la naturaleza, Tierra, Física, Daño, Recuperación, Control de multitudes.",
			"frFR": "Les chances d'infliger un coup critique de Rocher sont augmentées de +3% chaque fois qu'il inflige des dégâts.\n\nTags: Colère, Magie naturelle, Terre, Dégâts physiques, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "La probabilità di critico di Macigno aumenta del +3% ogni volta che infligge danni.\n\nTags: Collera, Magia naturale, Terra, Fisico, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈巨岩〉のクリティカルヒット率が、〈巨岩〉がダメージを与える度に+3%増加する。\n\nTags: 憤怒, 自然魔法, 地, 物理, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "바위가 피해를 줄 때마다 바위의 극대화 확률이 +3% 증가합니다.\n\nTags: 진노, 자연 마법, 대지, 물리, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Szansa na trafienie krytyczne Głazu jest zwiększona o +3% za każde zadanie nim obrażeń.\n\nTags: Gniew, Magia Natury, Ziemia, Fizyczne, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "A chance de acerto crítico de Rochedo é aumentada em +3% sempre que causa dano.\n\nTags: Ira, Magia da Natureza, Terra, Física, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Вероятность критического эффекта \"Глыбы\" повышается на +3%, когда она наносит урон.\n\nTags: Гнев, Силы природы, Земля, Физический урон, Урон, Время восстановления, Контроль.",
			"zhCN": "滚石每次造成伤害时, 其暴击几率提高 +3%。\n\nTags: 愤怒, 自然魔法, 大地, 物理, 伤害, 冷却时间, 群控.",
			"zhTW": "巨石每次造成傷害時,其爆擊機率提高 +3%。\n\nTags: 憤怒, 自然魔法, 大地, 物理, 傷害, 冷卻時間, 控場."
},
		id: 88,
		maxPoints: 1,
		x: 1067.875,
		y: -321.359
	},
	"Trample": {
		connections: [ "Wrath", "Enhanced Trample" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 20%
Shapeshift into a Werebear, become Unstoppable, and charge forward, dealing {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% damage and Knocking Back enemies.

Enemies who are Knocked Back into terrain take an additional {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% damage and are Stunned for 3 seconds.

Tags: Wrath, Shapeshifting, Werebear, Unstoppable, Physical, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Niedertrampeln",
			"esES": "Atropellar",
			"esMX": "Arrollar",
			"frFR": "Piétinement",
			"itIT": "Calpestamento",
			"jaJP": "踏みつけ",
			"koKR": "짓밟기",
			"plPL": "Tratowanie",
			"ptBR": "Atropelo",
			"ruRU": "Тяжелый шаг",
			"zhCN": "践踏",
			"zhTW": "踐踏"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 20%\nVerwandelt Euch in einen Werbären und werdet unaufhaltsam. Ihr stürmt nach vorn, verursacht {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% Schaden und stoßt Gegner zurück.\n\nGegner, die in Terrain gestoßen werden, erleiden zusätzlich {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% Schaden und sind 3 Sek. lang betäubt.\n\nTags: Zorn, Gestaltwandeln, Werbär, Unaufhaltsam, Physisch, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 20%\nTe transformas en un hombre oso, te vuelves imparable y cargas hacia delante, lo que inflige {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de daño y repele a los enemigos.\n\nLos enemigos repelidos contra el terreno sufren {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% más de daño y quedan aturdidos durante 3 s.\n\nTags: Cólera, Cambio de forma, Hombre oso, Imparable, Física, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 20%\nCambias de forma a un hombre oso, te vuelves imparable, arremetes hacia adelante, infliges {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de daño y repeles a los enemigos.\n\nLos enemigos que se golpean contra el terreno reciben {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% más de daño y quedan aturdidos durante 3 segundos.\n\nTags: Ira, Metamorfosis, Hombre oso, Imparable, Física, Daño, Recuperación, Control de multitudes.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 20%\nVous vous transformez en ursoïde, devenez inarrêtable et chargez, ce qui inflige {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% points de dégâts et repousse les adversaires.\n\nLes cibles repoussées qui percutent des obstacles subissent {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% points de dégâts supplémentaires et sont étourdies pendant 3 s.\n\nTags: Colère, Métamorphose, Ursoïde, Inarrêtable, Dégâts physiques, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 20%\nMuti in un Orso Mannaro, diventi inarrestabile e carichi in avanti, infliggendo {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% danni e respingendo indietro i nemici.\n\nI nemici che vengono respinti a terra subiscono {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% danni aggiuntivi e restano storditi per 3 s.\n\nTags: Collera, Mutaforma, Orso Mannaro, Inarrestabile, Fisico, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 20%\n人熊に変身して抑圧不可状態になって前方に突撃し、敵に{75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%のダメージを与えてノックバックする。\n\nノックバックで地形に叩きつけられた敵は{45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%の追加ダメージを受け、3秒間スタンする。\n\nTags: 憤怒, 変身, 人熊, 抑圧不可, 物理, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 20%\n곰인간으로 변신하여 저지 불가 상태가 되고 앞으로 돌진합니다. 적에게 {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%의 피해를 주고 밀쳐냅니다.\n\n밀려나서 지형지물에 부딪힌 적은 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%의 추가 피해를 받으며 3초 동안 기절합니다.\n\nTags: 진노, 변신, 곰인간, 저지 불가, 물리, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 20%\nPrzemieniasz się w niedźwiedziołaka, zyskujesz nieustępliwość i szarżujesz na wrogów, zadając im {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% pkt. obrażeń oraz ich odrzucając.\n\nOdrzuceni wrogowie, którzy zderzą się z przeszkodami terenu, otrzymują dodatkowo {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% pkt. obrażeń i zostają ogłuszeni na 3 sek.\n\nTags: Gniew, Zmiennokształtność, Niedźwiedziołak, Nieustępliwość, Fizyczne, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 20%\nTransforma-se em um urso, torna-se implacável e avança, causando {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de dano e repelindo inimigos.\n\nInimigos repelidos ao chão recebem {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de dano adicional e ficam atordoados por 3 segundos.\n\nTags: Ira, Metamorfose, Urso, Implacável, Física, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 20%.\nВы принимаете облик медведя, получаете неудержимость и устремляетесь вперед, нанося {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% ед. урона и отбрасывая противников.\n\nПри столкновении с препятствиями отброшенные противники получают {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% ед. урона и оглушаются на 3 сек.\n\nTags: Гнев, Смена облика, Медведь, Неудержимость, Физический урон, Урон, Время восстановления, Контроль.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 20%\n变成不可阻挡的熊人并向前冲锋, 造成 {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% 点伤害并将敌人击退。\n\n被击退到地形上的敌人将额外受到 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% 点伤害并昏迷 3 秒。\n\nTags: 愤怒, 变形, 熊人, 不可阻挡, 物理, 伤害, 冷却时间, 群控.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:20%\n變身為熊人,進入無阻狀態並向前衝鋒,造成 {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% 點傷害並擊退敵人。\n\n敵人被擊退撞到地形時,會額外受到 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% 點傷害並被擊昏 3 秒。\n\nTags: 憤怒, 變形, 熊人, 無阻, 物理, 傷害, 冷卻時間, 控場."
},
		id: 89,
		maxPoints: 5,
		values: [ "14" ],
		x: -538.268,
		y: 76.5
	},
	"Enhanced Trample": {
		baseSkill: "Trample",
		connections: [ "Trample", "Natural Trample", "Savage Trample" ],
		description: `Trample deals x150% bonus damage. This bonus is reduced by x50% for each enemy hit after the first.

Tags: Wrath, Shapeshifting, Werebear, Unstoppable, Physical, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Verbessertes Niedertrampeln",
			"esES": "Atropellar mejorado",
			"esMX": "Arrollamiento Potenciado",
			"frFR": "Piétinement renforcé",
			"itIT": "Calpestamento Rinforzato",
			"jaJP": "踏みつけ(強化版)",
			"koKR": "강화된 짓밟기",
			"plPL": "Wzmocnione Tratowanie",
			"ptBR": "Atropelo Aperfeiçoado",
			"ruRU": "Усиленный тяжелый шаг",
			"zhCN": "强化践踏",
			"zhTW": "強化踐踏"
},
		descriptionLocalized: {
			"deDE": "Niedertrampeln fügt x150% Bonusschaden zu. Dieser Bonus wird für jeden getroffenen Gegner nach dem ersten Ziel um x50% reduziert.\n\nTags: Zorn, Gestaltwandeln, Werbär, Unaufhaltsam, Physisch, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Atropellar inflige un x150% de daño adicional. Este bonus se reduce un x50% por cada enemigo golpeado después del primero.\n\nTags: Cólera, Cambio de forma, Hombre oso, Imparable, Física, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Arrollar inflige un x150% más de daño. Esta bonificación se reduce un x50% por cada enemigo que golpees, luego del primero.\n\nTags: Ira, Metamorfosis, Hombre oso, Imparable, Física, Daño, Recuperación, Control de multitudes.",
			"frFR": "Piétinement inflige x150% de dégâts supplémentaires. Ce bonus est réduit de x50% à chaque cible touchée après la première.\n\nTags: Colère, Métamorphose, Ursoïde, Inarrêtable, Dégâts physiques, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Calpestamento infligge il x150% di danni aggiuntivi. Il bonus ai danni si riduce del x50% per ogni nemico colpito successivamente.\n\nTags: Collera, Mutaforma, Orso Mannaro, Inarrestabile, Fisico, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈踏みつけ〉のダメージがx150%増加する。この増加ダメージは初撃後に命中した敵1体ごとにx50%減少する。\n\nTags: 憤怒, 変身, 人熊, 抑圧不可, 物理, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "짓밟기가 x150%의 추가 피해를 줍니다. 추가 피해는 첫 번째 이후 적중하는 적마다 x50% 감소합니다.\n\nTags: 진노, 변신, 곰인간, 저지 불가, 물리, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Tratowanie zadaje x150% dodatkowych obrażeń. Premia jest obniżona o x50% za każdego kolejnego trafionego wroga.\n\nTags: Gniew, Zmiennokształtność, Niedźwiedziołak, Nieustępliwość, Fizyczne, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Atropelo causa 150% de bônus de dano. Esse bônus é reduzido em 50% a cada inimigo atingido após o primeiro.\n\nTags: Ira, Metamorfose, Urso, Implacável, Física, Dano, Recarga, Controle de Grupo.",
			"ruRU": "\"Тяжелый шаг\" наносит на x150% больше урона. Прибавка к урону уменьшается на x50% за каждого пораженного противника после первого.\n\nTags: Гнев, Смена облика, Медведь, Неудержимость, Физический урон, Урон, Время восстановления, Контроль.",
			"zhCN": "践踏造成的伤害提高 x150%。在首次命中后, 每命中一名敌人都会使该加成降低 x50%。\n\nTags: 愤怒, 变形, 熊人, 不可阻挡, 物理, 伤害, 冷却时间, 群控.",
			"zhTW": "踐踏造成 x150% 額外傷害。在擊中第一個敵人之後,每個敵人使此額外傷害降低 x50%。\n\nTags: 憤怒, 變形, 熊人, 無阻, 物理, 傷害, 冷卻時間, 控場."
},
		id: 90,
		maxPoints: 1,
		x: -913.338,
		y: 77.55
	},
	"Natural Trample": {
		baseSkill: "Trample",
		connections: [ "Enhanced Trample" ],
		description: `Casting Trample grants 20% Base Life as Fortify.

Tags: Wrath, Shapeshifting, Werebear, Unstoppable, Physical, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Natürliches Niedertrampeln",
			"esES": "Atropellar natural",
			"esMX": "Arrollamiento Natural",
			"frFR": "Piétinement naturel",
			"itIT": "Calpestamento Naturale",
			"jaJP": "踏みつけ(天然)",
			"koKR": "자연의 짓밟기",
			"plPL": "Naturalne Tratowanie",
			"ptBR": "Atropelo Natural",
			"ruRU": "Природный тяжелый шаг",
			"zhCN": "自然践踏",
			"zhTW": "自然踐踏"
},
		descriptionLocalized: {
			"deDE": "Der Einsatz von Niedertrampeln verleiht Euch 20% Eures Basislebens als Stählung.\n\nTags: Zorn, Gestaltwandeln, Werbär, Unaufhaltsam, Physisch, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Lanzar Atropellar te otorga un 20% de tu vida base como fortificación.\n\nTags: Cólera, Cambio de forma, Hombre oso, Imparable, Física, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Lanzar Arrollar te otorga un 20% de tu vida de base como fortificación.\n\nTags: Ira, Metamorfosis, Hombre oso, Imparable, Física, Daño, Recuperación, Control de multitudes.",
			"frFR": "Utiliser Piétinement vous confère un montant de fortification égal à 20% de vos points de vie de base.\n\nTags: Colère, Métamorphose, Ursoïde, Inarrêtable, Dégâts physiques, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Lanciare Calpestamento fornisce il 20% della Vita base come Fortificazione.\n\nTags: Collera, Mutaforma, Orso Mannaro, Inarrestabile, Fisico, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈踏みつけ〉使用時、基本ライフの20%にあたるの強化を獲得する。\n\nTags: 憤怒, 変身, 人熊, 抑圧不可, 物理, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "짓밟기를 시전하면 기본 생명력의 20%를 보강으로 얻습니다.\n\nTags: 진노, 변신, 곰인간, 저지 불가, 물리, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Użycie Tratowania zapewnia 20% podstawowego zdrowia w postaci umocnienia.\n\nTags: Gniew, Zmiennokształtność, Niedźwiedziołak, Nieustępliwość, Fizyczne, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Lançar Atropelo concede 20% de vida básica como fortificação.\n\nTags: Ira, Metamorfose, Urso, Implacável, Física, Dano, Recarga, Controle de Grupo.",
			"ruRU": "\"Тяжелый шаг\" дает вам укрепление в объеме 20% базового запаса здоровья.\n\nTags: Гнев, Смена облика, Медведь, Неудержимость, Физический урон, Урон, Время восстановления, Контроль.",
			"zhCN": "施放践踏强固你 20% 基础生命。\n\nTags: 愤怒, 变形, 熊人, 不可阻挡, 物理, 伤害, 冷却时间, 群控.",
			"zhTW": "施放踐踏可賦予你相當於 20% 基礎生命值的強韌。\n\nTags: 憤怒, 變形, 熊人, 無阻, 物理, 傷害, 冷卻時間, 控場."
},
		id: 91,
		maxPoints: 1,
		x: -1104.485,
		y: 4.955
	},
	"Savage Trample": {
		baseSkill: "Trample",
		connections: [ "Enhanced Trample" ],
		description: `Casting Trample grants 20 Spirit.

Tags: Wrath, Shapeshifting, Werebear, Unstoppable, Physical, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Primitives Niedertrampeln",
			"esES": "Atropellar salvaje",
			"esMX": "Arrollamiento Salvaje",
			"frFR": "Piétinement sauvage",
			"itIT": "Calpestamento Selvaggio",
			"jaJP": "踏みつけ(野性)",
			"koKR": "야생의 짓밟기",
			"plPL": "Okrutne Tratowanie",
			"ptBR": "Atropelo Selvagem",
			"ruRU": "Неистовый тяжелый шаг",
			"zhCN": "野蛮践踏",
			"zhTW": "野蠻踐踏"
},
		descriptionLocalized: {
			"deDE": "Das Wirken von Niedertrampeln verleiht 20 Geisteskraft.\n\nTags: Zorn, Gestaltwandeln, Werbär, Unaufhaltsam, Physisch, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Lanzar Atropellar otorga 20 de espíritu.\n\nTags: Cólera, Cambio de forma, Hombre oso, Imparable, Física, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Lanzar Arrollar otorga 20 de Espíritu.\n\nTags: Ira, Metamorfosis, Hombre oso, Imparable, Física, Daño, Recuperación, Control de multitudes.",
			"frFR": "Utiliser Piétinement confère 20 points d'esprit.\n\nTags: Colère, Métamorphose, Ursoïde, Inarrêtable, Dégâts physiques, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Lanciare Calpestamento genera 20 spirito.\n\nTags: Collera, Mutaforma, Orso Mannaro, Inarrestabile, Fisico, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈踏みつけ〉を使用すると精神力を20獲得する。\n\nTags: 憤怒, 変身, 人熊, 抑圧不可, 物理, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "짓밟기를 시전하면 영력을 20 얻습니다.\n\nTags: 진노, 변신, 곰인간, 저지 불가, 물리, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Użycie Tratowania zapewnia 20 pkt. siły duchowej.\n\nTags: Gniew, Zmiennokształtność, Niedźwiedziołak, Nieustępliwość, Fizyczne, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Lançar Atropelo concede 20 de espírito.\n\nTags: Ira, Metamorfose, Urso, Implacável, Física, Dano, Recarga, Controle de Grupo.",
			"ruRU": "\"Тяжелый шаг\" позволяет накопить 20 ед. духа.\n\nTags: Гнев, Смена облика, Медведь, Неудержимость, Физический урон, Урон, Время восстановления, Контроль.",
			"zhCN": "施放践踏获得 20 点灵力。\n\nTags: 愤怒, 变形, 熊人, 不可阻挡, 物理, 伤害, 冷却时间, 群控.",
			"zhTW": "施放踐踏會獲得 20 點靈力。\n\nTags: 憤怒, 變形, 熊人, 無阻, 物理, 傷害, 冷卻時間, 控場."
},
		id: 92,
		maxPoints: 1,
		x: -1110.255,
		y: 154.84
	},
	"Crushing Earth": {
		connections: [ "Wrath", "Safeguard", "Stone Guard" ],
		description: `Earth Skills deal x{5/10/15/20/25/30/35/40/45/50}% increased damage to Slowed, Stunned, Immobilized or Knocked Back enemies.

Tags: Damage, Crowd Control, Earth, Nature Magic.`,
		nameLocalized: {
			"deDE": "Zerschmetternde Erde",
			"esES": "Tierra aplastante",
			"esMX": "Tierra Aplastante",
			"frFR": "Terre broyeuse",
			"itIT": "Terra Devastante",
			"jaJP": "砕きの大地",
			"koKR": "분열하는 대지",
			"plPL": "Miażdżąca Ziemia",
			"ptBR": "Terra Esmagadora",
			"ruRU": "Сокрушающая земля",
			"zhCN": "破碎大地",
			"zhTW": "粉碎大地"
},
		descriptionLocalized: {
			"deDE": "Erdfertigkeiten fügen verlangsamten, betäubten, bewegungsunfähigen oder zurückgestoßenen Gegnern x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden zu.\n\nTags: Schaden, Kontrollverlust, Erde, Naturmagie.",
			"esES": "Las habilidades de tierra infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño a los enemigos ralentizados, aturdidos, inmovilizados o repelidos.\n\nTags: Daño, Control de masas, Tierra, Magia de la naturaleza.",
			"esMX": "Las habilidades de Tierra infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño a los enemigos ralentizados, aturdidos, inmovilizados o repelidos.\n\nTags: Daño, Control de multitudes, Tierra, Magia de la naturaleza.",
			"frFR": "Les compétences de terre infligent x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires aux cibles ralenties, étourdies, immobilisées ou repoussées.\n\nTags: Dégâts, Perte de contrôle, Terre, Magie naturelle.",
			"itIT": "Le abilità di Terra infliggono il x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi ai nemici rallentati, storditi, immobilizzati o respinti.\n\nTags: Danni, Effetti debilitanti, Terra, Magia naturale.",
			"jaJP": "土スキルが、移動速度低下、スタン、移動不能、ノックバック状態の敵に与えるダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: ダメージ, 操作障害効果, 地, 自然魔法.",
			"koKR": "감속, 기절, 이동 불가 상태이거나 밀려난 적에게 대지 기술로 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 피해, 군중 제어, 대지, 자연 마법.",
			"plPL": "Twoje umiejętności Ziemi zadają obrażenia zwiększone o x{5/10/15/20/25/30/35/40/45/50}% wrogom, którzy zostali spowolnieni, ogłuszeni, unieruchomieni lub odrzuceni.\n\nTags: Obrażenia, Ograniczanie Kontroli, Ziemia, Magia Natury.",
			"ptBR": "Habilidades de Terra causam {5/10/15/20/25/30/35/40/45/50}% de dano aumentado a inimigos desacelerados, atordoados, imobilizados ou repelidos.\n\nTags: Dano, Controle de Grupo, Terra, Magia da Natureza.",
			"ruRU": "Умения земли наносят на x{5/10/15/20/25/30/35/40/45/50}% больше урона замедленным, оглушенным, обездвиженным или отброшенным противникам.\n\nTags: Урон, Контроль, Земля, Силы природы.",
			"zhCN": "大地技能对减速、昏迷、定身或击退的敌人造成的伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 伤害, 群控, 大地, 自然魔法.",
			"zhTW": "大地技能對被緩速、擊昏、定身或擊退的敵人造成的傷害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 傷害, 控場, 大地, 自然魔法."
},
		id: 93,
		maxPoints: 3,
		x: 527.13,
		y: 1.665
	},
	"Safeguard": {
		connections: [ "Crushing Earth" ],
		description: `Critical Strikes with Earth Skills Fortify you for {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% Base Life.

Tags: Fortify, Critical Strikes, Earth, Nature Magic.`,
		nameLocalized: {
			"deDE": "Sicherung",
			"esES": "Salvaguardia",
			"esMX": "Salvaguarda",
			"frFR": "Protection",
			"itIT": "Salvaguardia",
			"jaJP": "セーフガード",
			"koKR": "대비책",
			"plPL": "Opieka",
			"ptBR": "Salvaguarda",
			"ruRU": "Защитные меры",
			"zhCN": "护卫",
			"zhTW": "安全守護"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Erdfertigkeiten verleihen Euch Stählung in Höhe von {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% Eures Basislebens.\n\nTags: Stählung, Kritische Treffer, Erde, Naturmagie.",
			"esES": "Los golpes críticos con habilidades de tierra fortifican un {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% de tu vida base.\n\nTags: Fortificación, Golpes críticos, Tierra, Magia de la naturaleza.",
			"esMX": "Asestar golpes críticos con habilidades de Tierra te fortifica con un {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% de tu vida de base.\n\nTags: Fortificar, Golpes críticos, Tierra, Magia de la naturaleza.",
			"frFR": "Lorsque vous infligez des coups critiques avec des compétences de terre, vous obtenez un montant de fortification égal à {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% de vos points de vie de base.\n\nTags: Fortification, Coups critiques, Terre, Magie naturelle.",
			"itIT": "Infliggere danni critici ai nemici con abilità di Terra ti fornisce Fortificazione per il {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% della tua Vita base.\n\nTags: Fortificazione, Colpi critici, Terra, Magia naturale.",
			"jaJP": "土スキルでクリティカルヒットを与えると、基本ライフの{2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}%にあたるの強化を獲得する。\n\nTags: 強化, クリティカルヒット, 地, 自然魔法.",
			"koKR": "대지 기술이 적에게 극대화로 적중하면 기본 생명력의 {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}%만큼 보강됩니다.\n\nTags: 보강, 극대화, 대지, 자연 마법.",
			"plPL": "Trafienie krytyczne wroga z użyciem umiejętności Ziemi zapewnia umocnienie równe {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% podstawowego zdrowia.\n\nTags: Umocnienie, Trafienia Krytyczne, Ziemia, Magia Natury.",
			"ptBR": "Acertos críticos com habilidades de Terra fortificam você em {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% da vida básica.\n\nTags: Fortificação, Acertos Críticos, Terra, Magia da Natureza.",
			"ruRU": "Критические удары умениями земли дают укрепление в объеме {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% базового запаса здоровья.\n\nTags: Укрепление, Критические удары, Земля, Силы природы.",
			"zhCN": "使用大地技能造成暴击可以强固你 {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% 基础生命。\n\nTags: 强固, 暴击, 大地, 自然魔法.",
			"zhTW": "以大地技能造成爆擊時,會賦予你相當於 {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% 基礎生命值的強韌。\n\nTags: 強韌, 爆擊, 大地, 自然魔法."
},
		id: 94,
		maxPoints: 3,
		x: 827.855,
		y: -81.72
	},
	"Stone Guard": {
		connections: [ "Crushing Earth" ],
		description: `While you have Fortify for over 50% of your Maximum Life, your Earth Skills deal x{4/8/12/16/20/24/28/32/36/40}% increased damage.

Tags: Fortify, Damage, Life, Earth, Nature Magic.`,
		nameLocalized: {
			"deDE": "Steingardist",
			"esES": "Guardia de piedra",
			"esMX": "Guardia de Piedra",
			"frFR": "Garde de pierre",
			"itIT": "Guardia di Pietra",
			"jaJP": "石の守り",
			"koKR": "바위 경비병",
			"plPL": "Kamienny Strażnik",
			"ptBR": "Guarda Pétreo",
			"ruRU": "Каменный страж",
			"zhCN": "石土之御",
			"zhTW": "石衛士"
},
		descriptionLocalized: {
			"deDE": "Solange Ihr um mindestens 50% Eures maximalen Lebens gestählt seid, verursachen Eure Erdfertigkeiten x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden.\n\nTags: Stählung, Schaden, Leben, Erde, Naturmagie.",
			"esES": "Mientras tienes fortificada más de un 50% de tu vida máxima, tus habilidades de tierra infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño.\n\nTags: Fortificación, Daño, Vida, Tierra, Magia de la naturaleza.",
			"esMX": "Mientras tienes más del 50% de tu vida máxima como fortificación, tus habilidades de Tierra infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño.\n\nTags: Fortificar, Daño, Vida, Tierra, Magia de la naturaleza.",
			"frFR": "Tant que vous bénéficiez d'une fortification supérieure à 50% de votre maximum de points de vie, vos compétences de terre infligent x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires.\n\nTags: Fortification, Dégâts, Vie, Terre, Magie naturelle.",
			"itIT": "Mentre hai Fortificazione per oltre il 50% della tua Vita massima, le tue abilità di Terra infliggono il x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi.\n\nTags: Fortificazione, Danni, Vita, Terra, Magia naturale.",
			"jaJP": "ライフ最大値の50%を越える強化状態になっている間、土スキルで与えるダメージがx{4/8/12/16/20/24/28/32/36/40}%上昇する。\n\nTags: 強化, ダメージ, ライフ, 地, 自然魔法.",
			"koKR": "최대 생명력의 50%가 넘는 보강을 보유한 동안 대지 기술로 주는 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 보강, 피해, 생명력, 대지, 자연 마법.",
			"plPL": "Kiedy masz umocnienie równe ponad 50% maksymalnego zdrowia, twoje umiejętności Ziemi zadają obrażenia zwiększone o x{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Umocnienie, Obrażenia, Zdrowie, Ziemia, Magia Natury.",
			"ptBR": "Enquanto tiver fortificação em mais de 50% da sua vida máxima, suas habilidades de Terra causam {4/8/12/16/20/24/28/32/36/40}% de dano aumentado.\n\nTags: Fortificação, Dano, Vida, Terra, Magia da Natureza.",
			"ruRU": "Пока ваш показатель укрепления превышает 50% максимального запаса здоровья, ваши умения земли наносят на x{4/8/12/16/20/24/28/32/36/40}% больше урона.\n\nTags: Укрепление, Урон, Здоровье, Земля, Силы природы.",
			"zhCN": "当你获得的强固超过 50% 生命上限时, 你的大地技能造成的伤害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 强固, 伤害, 生命, 大地, 自然魔法.",
			"zhTW": "當你的強韌高於生命值上限的 50% 時,你的大地技能造成的傷害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 強韌, 傷害, 生命值, 大地, 自然魔法."
},
		id: 95,
		maxPoints: 3,
		x: 824.875,
		y: 86.045
	},
	"Hurricane": {
		connections: [ "Wrath", "Enhanced Hurricane" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 21.48%
Form a hurricane around you that deals {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% damage to surrounding enemies over 8 seconds.

Tags: Wrath, Nature Magic, Storm, Physical, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Hurrikan",
			"esES": "Huracán",
			"esMX": "Huracán",
			"frFR": "Ouragan",
			"itIT": "Uragano",
			"jaJP": "烈風",
			"koKR": "싹쓸바람",
			"plPL": "Huragan",
			"ptBR": "Furacão",
			"ruRU": "Ураган",
			"zhCN": "飓风",
			"zhTW": "颶風術"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 21.48%\nBildet einen Hurrikan um Euch herum, der Gegnern in der Nähe im Verlauf von 8 Sek. {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% Schaden zufügt.\n\nTags: Zorn, Naturmagie, Sturm, Physisch, Schaden, Abklingzeit.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 21.48%\nFormas a tu alrededor un huracán que inflige {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% de daño a los enemigos cercanos durante 8 s.\n\nTags: Cólera, Magia de la naturaleza, Tormenta, Física, Daño, Tiempo de reutilización.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 21.48%\nFormas un huracán a tu alrededor que inflige {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% de daño a los enemigos circundantes durante 8 segundos.\n\nTags: Ira, Magia de la naturaleza, Tormenta, Física, Daño, Recuperación.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 21.48%\nVous formez un ouragan autour de vous qui inflige {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% points de dégâts aux adversaires à proximité en 8 s.\n\nTags: Colère, Magie naturelle, Tempête, Dégâts physiques, Dégâts, Temps de recharge.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 21.48%\nIntorno a te si genera un uragano che infligge {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% danni ai nemici circostanti in 8 s.\n\nTags: Collera, Magia naturale, Tempesta, Fisico, Danni, Tempo di recupero.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 21.48%\n自分の周囲にハリケーンを形成し、8秒かけて近くの敵に{97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}%のダメージを与える。\n\nTags: 憤怒, 自然魔法, 嵐, 物理, ダメージ, クールダウン.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 21.48%\n자신의 주위에 싹쓸바람을 생성하여 주위 적들에게 8초에 걸쳐 {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}%의 피해를 줍니다.\n\nTags: 진노, 자연 마법, 폭풍, 물리, 피해, 재사용 대기시간.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 21.48%\nTworzysz wokół siebie huragan, który zadaje {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% pkt. obrażeń wrogom wokół w ciągu 8 sek.\n\nTags: Gniew, Magia Natury, Burza, Fizyczne, Obrażenia, Odnowienie.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 21.48%\nForma um furacão ao seu redor que causa {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% de dano a inimigos ao redor ao longo de 8 segundos.\n\nTags: Ira, Magia da Natureza, Tempestade, Física, Dano, Recarga.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 21.48%.\nВы создаете вокруг себя ураган, наносящий противникам {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% ед. урона за 8 сек.\n\nTags: Гнев, Силы природы, Буря, Физический урон, Урон, Время восстановления.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 21.48%\n在你的身边生成一道飓风, 在 8 秒内对周围的敌人造成 {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% 点伤害。\n\nTags: 愤怒, 自然魔法, 风暴, 物理, 伤害, 冷却时间.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:21.48%\n生成颶風環繞你周圍,在 8 秒內對附近的敵人造成 {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% 點傷害。\n\nTags: 憤怒, 自然魔法, 風暴, 物理, 傷害, 冷卻時間."
},
		id: 99,
		maxPoints: 5,
		values: [ "20" ],
		x: 255.145,
		y: -347.168
	},
	"Enhanced Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Hurricane", "Natural Hurricane", "Savage Hurricane" ],
		description: `Enemies who are damaged by Hurricane are Slowed by 25% for 2 seconds.

Tags: Wrath, Nature Magic, Storm, Physical, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserter Hurrikan",
			"esES": "Huracán mejorado",
			"esMX": "Huracán Potenciado",
			"frFR": "Ouragan renforcé",
			"itIT": "Uragano Rinforzato",
			"jaJP": "烈風(強化版)",
			"koKR": "강화된 싹쓸바람",
			"plPL": "Wzmocniony Huragan",
			"ptBR": "Furacão Aperfeiçoado",
			"ruRU": "Усиленный ураган",
			"zhCN": "强化飓风",
			"zhTW": "強化颶風術"
},
		descriptionLocalized: {
			"deDE": "Gegner, die durch Hurrikan Schaden erleiden, werden 2 Sek. lang um 25% verlangsamt.\n\nTags: Zorn, Naturmagie, Sturm, Physisch, Schaden, Abklingzeit.",
			"esES": "Los enemigos dañados por Huracán quedan ralentizados un 25% durante 2 s.\n\nTags: Cólera, Magia de la naturaleza, Tormenta, Física, Daño, Tiempo de reutilización.",
			"esMX": "Los enemigos dañados por Huracán se ralentizan un 25% durante 2 segundos.\n\nTags: Ira, Magia de la naturaleza, Tormenta, Física, Daño, Recuperación.",
			"frFR": "Les cibles blessées par Ouragan sont ralenties de 25% pendant 2 s.\n\nTags: Colère, Magie naturelle, Tempête, Dégâts physiques, Dégâts, Temps de recharge.",
			"itIT": "I nemici feriti da Uragano sono rallentati del 25% per 2 s.\n\nTags: Collera, Magia naturale, Tempesta, Fisico, Danni, Tempo di recupero.",
			"jaJP": "〈烈風〉によってダメージを受けた敵の移動速度が2秒間25%低下する。\n\nTags: 憤怒, 自然魔法, 嵐, 物理, ダメージ, クールダウン.",
			"koKR": "싹쓸바람에 피해를 받은 적이 2초 동안 25% 감속됩니다.\n\nTags: 진노, 자연 마법, 폭풍, 물리, 피해, 재사용 대기시간.",
			"plPL": "Wrogowie zranieni przez Huragan są spowolnieni o 25% na 2 sek.\n\nTags: Gniew, Magia Natury, Burza, Fizyczne, Obrażenia, Odnowienie.",
			"ptBR": "Inimigos atingidos por Furacão são desacelerados em 25% por 2 segundos.\n\nTags: Ira, Magia da Natureza, Tempestade, Física, Dano, Recarga.",
			"ruRU": "Противники, получившие урон от \"Урагана\", замедляются на 25% на 2 сек.\n\nTags: Гнев, Силы природы, Буря, Физический урон, Урон, Время восстановления.",
			"zhCN": "飓风命中敌人时会使其减速 25%, 持续 2 秒。\n\nTags: 愤怒, 自然魔法, 风暴, 物理, 伤害, 冷却时间.",
			"zhTW": "被颶風術傷害的敵人會緩速 25%,持續 2 秒。\n\nTags: 憤怒, 自然魔法, 風暴, 物理, 傷害, 冷卻時間."
},
		id: 100,
		maxPoints: 1,
		x: 394.545,
		y: -539.728
	},
	"Natural Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Enhanced Hurricane" ],
		description: `Hurricane has a 15% chance to make enemies Vulnerable for 3 seconds.

Tags: Wrath, Nature Magic, Storm, Physical, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Natürlicher Hurrikan",
			"esES": "Huracán natural",
			"esMX": "Huracán Natural",
			"frFR": "Ouragan naturel",
			"itIT": "Uragano Naturale",
			"jaJP": "烈風(天然)",
			"koKR": "자연의 싹쓸바람",
			"plPL": "Naturalny Huragan",
			"ptBR": "Furacão Natural",
			"ruRU": "Природный ураган",
			"zhCN": "自然飓风",
			"zhTW": "自然颶風術"
},
		descriptionLocalized: {
			"deDE": "Hurrikan verfügt über eine Chance von 15%, Gegner 3 Sek. lang verwundbar zu machen.\n\nTags: Zorn, Naturmagie, Sturm, Physisch, Schaden, Abklingzeit.",
			"esES": "Huracán tiene un 15% de probabilidad de volver vulnerables a los enemigos durante 3 s.\n\nTags: Cólera, Magia de la naturaleza, Tormenta, Física, Daño, Tiempo de reutilización.",
			"esMX": "Huracán tiene un 15% de probabilidad de volver a los enemigos vulnerables durante 3 segundos.\n\nTags: Ira, Magia de la naturaleza, Tormenta, Física, Daño, Recuperación.",
			"frFR": "Ouragan a 15% de chances de rendre les adversaires vulnérables pendant 3 s.\n\nTags: Colère, Magie naturelle, Tempête, Dégâts physiques, Dégâts, Temps de recharge.",
			"itIT": "Uragano ha il 15% di probabilità di rendere i nemici vulnerabili per 3 s.\n\nTags: Collera, Magia naturale, Tempesta, Fisico, Danni, Tempo di recupero.",
			"jaJP": "〈烈風〉が15%の確率で敵を3秒間、脆弱状態にする。\n\nTags: 憤怒, 自然魔法, 嵐, 物理, ダメージ, クールダウン.",
			"koKR": "싹쓸바람이 15% 확률로 적을 3초 동안 취약하게 만듭니다.\n\nTags: 진노, 자연 마법, 폭풍, 물리, 피해, 재사용 대기시간.",
			"plPL": "Huragan ma 15% szans na odsłonięcie wrogów na 3 sek.\n\nTags: Gniew, Magia Natury, Burza, Fizyczne, Obrażenia, Odnowienie.",
			"ptBR": "Furacão tem 15% de chance de tornar os inimigos vulneráveis por 3 segundos.\n\nTags: Ira, Magia da Natureza, Tempestade, Física, Dano, Recarga.",
			"ruRU": "\"Ураган\" с вероятностью 15% делает противников уязвимыми на 3 сек.\n\nTags: Гнев, Силы природы, Буря, Физический урон, Урон, Время восстановления.",
			"zhCN": "飓风有 15% 几率使敌人陷入易伤状态, 持续 3 秒。\n\nTags: 愤怒, 自然魔法, 风暴, 物理, 伤害, 冷却时间.",
			"zhTW": "颶風術有 15% 機率使敵人易傷,持續 3 秒。\n\nTags: 憤怒, 自然魔法, 風暴, 物理, 傷害, 冷卻時間."
},
		id: 101,
		maxPoints: 1,
		x: 317.175,
		y: -657.602
	},
	"Savage Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Enhanced Hurricane" ],
		description: `Enemies affected by Hurricane deal 20% less damage.

Tags: Wrath, Nature Magic, Storm, Physical, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Primitiver Hurrikan",
			"esES": "Huracán salvaje",
			"esMX": "Huracán Salvaje",
			"frFR": "Ouragan sauvage",
			"itIT": "Uragano Selvaggio",
			"jaJP": "烈風(野生)",
			"koKR": "야생의 싹쓸바람",
			"plPL": "Okrutny Huragan",
			"ptBR": "Furado Selvagem",
			"ruRU": "Неистовый ураган",
			"zhCN": "野蛮飓风",
			"zhTW": "野蠻颶風術"
},
		descriptionLocalized: {
			"deDE": "Von Hurrikan betroffene Gegner verursachen 20% weniger Schaden.\n\nTags: Zorn, Naturmagie, Sturm, Physisch, Schaden, Abklingzeit.",
			"esES": "Los enemigos afectados por Huracán infligen un 20% menos de daño.\n\nTags: Cólera, Magia de la naturaleza, Tormenta, Física, Daño, Tiempo de reutilización.",
			"esMX": "Los enemigos afectados por Huracán infligen un 20% menos de daño.\n\nTags: Ira, Magia de la naturaleza, Tormenta, Física, Daño, Recuperación.",
			"frFR": "Les cibles affectées par Ouragan infligent 20% de dégâts en moins.\n\nTags: Colère, Magie naturelle, Tempête, Dégâts physiques, Dégâts, Temps de recharge.",
			"itIT": "I nemici affetti da Uragano infliggono il 20% di danni in meno.\n\nTags: Collera, Magia naturale, Tempesta, Fisico, Danni, Tempo di recupero.",
			"jaJP": "〈烈風〉の影響を受けている敵から受けるダメージが20%減少する。\n\nTags: 憤怒, 自然魔法, 嵐, 物理, ダメージ, クールダウン.",
			"koKR": "싹쓸바람의 영향을 받는 적이 주는 피해가 20% 감소합니다.\n\nTags: 진노, 자연 마법, 폭풍, 물리, 피해, 재사용 대기시간.",
			"plPL": "Wrogowie objęci działaniem Huraganu zadają obrażenia zmniejszone o 20%.\n\nTags: Gniew, Magia Natury, Burza, Fizyczne, Obrażenia, Odnowienie.",
			"ptBR": "Inimigos afetados por Furacão causam 20% de dano reduzido.\n\nTags: Ira, Magia da Natureza, Tempestade, Física, Dano, Recarga.",
			"ruRU": "Противники под действием \"Урагана\" наносят на x20% меньше урона.\n\nTags: Гнев, Силы природы, Буря, Физический урон, Урон, Время восстановления.",
			"zhCN": "受飓风影响的敌人造成的伤害降低 20%。\n\nTags: 愤怒, 自然魔法, 风暴, 物理, 伤害, 冷却时间.",
			"zhTW": "受颶風術影響的敵人造成的傷害降低 20%。\n\nTags: 憤怒, 自然魔法, 風暴, 物理, 傷害, 冷卻時間."
},
		id: 102,
		maxPoints: 1,
		x: 615.43,
		y: -591.031
	},
	"Rabies": {
		connections: [ "Wrath", "Enhanced Rabies" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 50%
Shapeshift into a Werewolf and perform an infectious bite on the target dealing {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% damage, and applying an additional {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% Poisoning damage over 6 seconds.

Infected enemies spread Rabies to other surrounding targets.

Tags: Wrath, Shapeshifting, Werewolf, Poison, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Tollwut",
			"esES": "Rabia",
			"esMX": "Rabia",
			"frFR": "Morsure rabique",
			"itIT": "Idrofobia",
			"jaJP": "狂犬病",
			"koKR": "광견병",
			"plPL": "Wścieklizna",
			"ptBR": "Raiva",
			"ruRU": "Звериное бешенство",
			"zhCN": "狂犬撕咬",
			"zhTW": "狂犬撕咬"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 50%\nVerwandelt Euch in einen Werwolf und fügt dem Ziel mit einem infektiösen Biss {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% Schaden zu und verursacht zusätzlich {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% Giftschaden im Verlauf von 6 Sek.\n\nInfizierte Gegner verbreiten Tollwut auf andere Ziele in der Nähe.\n\nTags: Zorn, Gestaltwandeln, Werwolf, Gift, Schaden, Abklingzeit.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 50%\nTe transformas en hombre lobo y le das un mordisco infeccioso al objetivo, que sufre {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% de daño y {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% de daño de veneno adicional durante 6 s.\n\nLos enemigos infectados contagian la Rabia a otros objetivos cercanos.\n\nTags: Cólera, Cambio de forma, Hombre lobo, Veneno, Daño, Tiempo de reutilización.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado:50%\nCambias de forma a un hombre lobo, realizas una mordida infecciosa en el objetivo y le infliges {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% de daño y {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% de daño de veneno adicional durante 6 segundos.\n\nLos enemigos infectados propagan Rabia a los demás objetivos circundantes.\n\nTags: Ira, Metamorfosis, Hombre lobo, Veneno, Daño, Recuperación.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 50%\nVous vous transformez en lycanthrope et infligez une morsure infectieuse à la cible, ce qui lui inflige {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% points de dégâts, puis {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% points de dégâts de poison supplémentaires en 6 s.\n\nLes cibles infectées propagent le virus de Morsure rabique aux autres cibles à proximité.\n\nTags: Colère, Métamorphose, Lycanthrope, Poison, Dégâts, Temps de recharge.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 50%\nMuti in un Lupo Mannaro e azzanni il bersaglio con un morso infetto, infliggendo {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% danni e {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% danni da veleno aggiuntivi in 6 s.\n\nI nemici infetti diffondono Idrofobia sugli altri bersagli nei dintorni.\n\nTags: Collera, Mutaforma, Lupo Mannaro, Veleno, Danni, Tempo di recupero.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 50%\n人狼に変身して病を感染させる牙で標的に噛みつき{28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}%のダメージを与え、さらに6秒かけて{52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}%の毒ダメージを追加で与える。\n\n感染した敵は〈狂犬病〉を周囲の敵に伝染させる。\n\nTags: 憤怒, 変身, 人狼, 毒, ダメージ, クールダウン.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 50%\n늑대인간으로 변신하고 대상을 물어뜯어 감염시킵니다. {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}%의 피해를 주고, 추가로 6초에 걸친 {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}%의 중독 피해를 적용합니다.\n\n감염된 적은 주위의 다른 대상들에게 광견병을 퍼뜨립니다.\n\nTags: 진노, 변신, 늑대인간, 독, 피해, 재사용 대기시간.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 50%\nPrzemieniasz się w wilkołaka i zarażasz wroga przez ugryzienie, zadając mu {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% pkt. obrażeń oraz dodatkowo {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% pkt. obrażeń od zatrucia w ciągu 6 sek.\n\nZarażeni wrogowie przekazują Wściekliznę innym celom wokół.\n\nTags: Gniew, Zmiennokształtność, Wilkołak, Trucizna, Obrażenia, Odnowienie.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 50%\nTransforma-se em um lobisomem e atinge o alvo com uma mordida infecciosa, causando {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% de dano e aplicando {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% de dano venenoso adicional ao longo de 6 segundos.\n\nInimigos infectados espalham Raiva para outros alvos ao redor.\n\nTags: Ira, Metamorfose, Lobisomem, Veneno, Dano, Recarga.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 50%.\nВы принимаете облик волка и кусаете противника, нанося {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% ед. урона сразу и еще {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% ед. урона от отравления за 6 сек.\n\nЗараженные противники распространяют эффект \"Звериного бешенства\" на другие ближайшие цели.\n\nTags: Гнев, Смена облика, Облик волка, Яд, Урон, Время восстановления.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 50%\n变成狼人对目标施加感染撕咬, 造成 {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% 点伤害, 并在 6 秒内造成 {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% 点毒素伤害。\n\n被感染的敌人会向周围的其他目标传染狂犬撕咬。\n\nTags: 愤怒, 变形, 狼人, 毒素, 伤害, 冷却时间.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:50%\n變身為狼人並施展會傳染疾病的咬擊,對目標造成 {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% 點傷害,並額外在 6 秒內造成 {52.8/58.2/63.6/69/74.4/79.2/84.6/90/95.4/100.8}% 點中毒傷害。\n\n被感染的敵人會把狂犬撕咬傳染給附近其他目標。\n\nTags: 憤怒, 變形, 狼人, 毒素, 傷害, 冷卻時間."
},
		id: 103,
		maxPoints: 5,
		values: [ "12" ],
		x: 522.33,
		y: 283.86
	},
	"Enhanced Rabies": {
		baseSkill: "Rabies",
		connections: [ "Rabies", "Natural Rabies", "Savage Rabies" ],
		description: `Rabies' Poisoning damage also increases over the lifetime of the disease, dealing x30% bonus damage at max duration.

Tags: Wrath, Shapeshifting, Werewolf, Poison, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Tollwut",
			"esES": "Rabia mejorada",
			"esMX": "Rabia Potenciada",
			"frFR": "Morsure rabique renforcée",
			"itIT": "Idrofobia Rinforzata",
			"jaJP": "野生(強化)",
			"koKR": "강화된 광견병",
			"plPL": "Wzmocniona Wścieklizna",
			"ptBR": "Raiva Aperfeiçoada",
			"ruRU": "Усиленное звериное бешенство",
			"zhCN": "强化狂犬撕咬",
			"zhTW": "強化狂犬撕咬"
},
		descriptionLocalized: {
			"deDE": "Der Giftschaden von Tollwut erhöht sich zudem mit der Lebensdauer der Krankheit und fügt bei maximaler Dauer x30% Bonusschaden zu.\n\nTags: Zorn, Gestaltwandeln, Werwolf, Gift, Schaden, Abklingzeit.",
			"esES": "El daño de veneno de Rabia también aumenta mientras dura la enfermedad e inflige un x30% de daño adicional en la duración máxima.\n\nTags: Cólera, Cambio de forma, Hombre lobo, Veneno, Daño, Tiempo de reutilización.",
			"esMX": "El daño de veneno de Rabia también aumenta durante el curso de la enfermedad, lo que inflige un x30% más de daño con la duración máxima.\n\nTags: Ira, Metamorfosis, Hombre lobo, Veneno, Daño, Recuperación.",
			"frFR": "Les dégâts de poison de Morsure rabique augmentent pendant toute la durée de la maladie, infligeant x30% de dégâts supplémentaires à sa durée maximale.\n\nTags: Colère, Métamorphose, Lycanthrope, Poison, Dégâts, Temps de recharge.",
			"itIT": "Anche i danni da veleno di Idrofobia aumentano nel corso della durata della malattia, incrementando i danni inflitti alla massima durata del x30%.\n\nTags: Collera, Mutaforma, Lupo Mannaro, Veleno, Danni, Tempo di recupero.",
			"jaJP": "〈狂犬病〉の毒ダメージが感染中に増加していき、最大まで持続した場合のダメージボーナスはx30%に達する。\n\nTags: 憤怒, 変身, 人狼, 毒, ダメージ, クールダウン.",
			"koKR": "광견병의 중독 피해가 질병의 지속시간에 걸쳐 지속적으로 증가하여, 최대 시간에 x30%의 추가 피해를 줍니다.\n\nTags: 진노, 변신, 늑대인간, 독, 피해, 재사용 대기시간.",
			"plPL": "Obrażenia od zatrucia zadawane przez Wściekliznę rosną również z czasem działania choroby. Umiejętność zadaje dodatkowo x30% pkt. obrażeń przy maksymalnym czasie działania.\n\nTags: Gniew, Zmiennokształtność, Wilkołak, Trucizna, Obrażenia, Odnowienie.",
			"ptBR": "O dano venenoso de Raiva também aumenta ao longo da duração da doença, causando 30% de bônus de dano na duração máxima.\n\nTags: Ira, Metamorfose, Lobisomem, Veneno, Dano, Recarga.",
			"ruRU": "Наносимый \"Звериным бешенством\" урон от отравления постепенно увеличивается. В конце действия прибавка к урону достигает x30%.\n\nTags: Гнев, Смена облика, Облик волка, Яд, Урон, Время восстановления.",
			"zhCN": "狂犬撕咬的毒素伤害也会随着时间提高, 持续时间达到上限时造成 x30% 的加成伤害。\n\nTags: 愤怒, 变形, 狼人, 毒素, 伤害, 冷却时间.",
			"zhTW": "狂犬撕咬的中毒傷害會隨持續時間提高,在持續時間結束時造成 x30% 額外傷害。\n\nTags: 憤怒, 變形, 狼人, 毒素, 傷害, 冷卻時間."
},
		id: 104,
		maxPoints: 1,
		x: 774.63,
		y: 431.475
	},
	"Natural Rabies": {
		baseSkill: "Rabies",
		connections: [ "Enhanced Rabies" ],
		description: `Rabies spreads 100% faster.

Tags: Wrath, Shapeshifting, Werewolf, Poison, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Natürliche Tollwut",
			"esES": "Rabia natural",
			"esMX": "Rabia Natural",
			"frFR": "Morsure rabique naturelle",
			"itIT": "Idrofobia Naturale",
			"jaJP": "狂犬病(天然)",
			"koKR": "자연의 광견병",
			"plPL": "Naturalna Wścieklizna",
			"ptBR": "Raiva Natural",
			"ruRU": "Природное звериное бешенство",
			"zhCN": "自然狂犬撕咬",
			"zhTW": "自然狂犬撕咬"
},
		descriptionLocalized: {
			"deDE": "Tollwut verbreitet sich 100% schneller.\n\nTags: Zorn, Gestaltwandeln, Werwolf, Gift, Schaden, Abklingzeit.",
			"esES": "Rabia se contagia un 100% más rápido.\n\nTags: Cólera, Cambio de forma, Hombre lobo, Veneno, Daño, Tiempo de reutilización.",
			"esMX": "Rabia se esparce un 100% más rápido.\n\nTags: Ira, Metamorfosis, Hombre lobo, Veneno, Daño, Recuperación.",
			"frFR": "Le virus de Morsure rabique se propage 100% plus rapidement.\n\nTags: Colère, Métamorphose, Lycanthrope, Poison, Dégâts, Temps de recharge.",
			"itIT": "La velocità di diffusione di Idrofobia aumenta del 100%.\n\nTags: Collera, Mutaforma, Lupo Mannaro, Veleno, Danni, Tempo di recupero.",
			"jaJP": "〈狂犬病〉の感染拡大が100%早くなる。\n\nTags: 憤怒, 変身, 人狼, 毒, ダメージ, クールダウン.",
			"koKR": "광견병의 전파 속도가 100% 증가합니다.\n\nTags: 진노, 변신, 늑대인간, 독, 피해, 재사용 대기시간.",
			"plPL": "Wścieklizna roznosi się 100% szybciej.\n\nTags: Gniew, Zmiennokształtność, Wilkołak, Trucizna, Obrażenia, Odnowienie.",
			"ptBR": "Raiva espalha-se 100% mais rápido.\n\nTags: Ira, Metamorfose, Lobisomem, Veneno, Dano, Recarga.",
			"ruRU": "Эффект \"Звериного бешенства\" распространяется на 100% быстрее.\n\nTags: Гнев, Смена облика, Облик волка, Яд, Урон, Время восстановления.",
			"zhCN": "狂犬撕咬传播速度加快 100%。\n\nTags: 愤怒, 变形, 狼人, 毒素, 伤害, 冷却时间.",
			"zhTW": "狂犬撕咬擴散速度加快 100%。\n\nTags: 憤怒, 變形, 狼人, 毒素, 傷害, 冷卻時間."
},
		id: 105,
		maxPoints: 1,
		x: 791.44,
		y: 566.785
	},
	"Savage Rabies": {
		baseSkill: "Rabies",
		connections: [ "Enhanced Rabies" ],
		description: `Rabies deals its total Poisoning damage in 4 seconds instead of 6.

Tags: Wrath, Shapeshifting, Werewolf, Poison, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Primitive Tollwut",
			"esES": "Rabia salvaje",
			"esMX": "Rabia Salvaje",
			"frFR": "Morsure rabique sauvage",
			"itIT": "Idrofobia Selvaggia",
			"jaJP": "狂犬病(野生)",
			"koKR": "야생의 광견병",
			"plPL": "Okrutna Wścieklizna",
			"ptBR": "Raiva Selvagem",
			"ruRU": "Неистовое звериное бешенство",
			"zhCN": "野蛮狂犬撕咬",
			"zhTW": "野蠻狂犬撕咬"
},
		descriptionLocalized: {
			"deDE": "Tollwut verursacht den gesamten Giftschaden innerhalb von 4 Sek. anstatt 6 Sek.\n\nTags: Zorn, Gestaltwandeln, Werwolf, Gift, Schaden, Abklingzeit.",
			"esES": "Rabia inflige su daño de veneno total a lo largo de 4 s en lugar de 6 s.\n\nTags: Cólera, Cambio de forma, Hombre lobo, Veneno, Daño, Tiempo de reutilización.",
			"esMX": "Rabia inflige su daño de veneno total en 4 segundos en vez de 6.\n\nTags: Ira, Metamorfosis, Hombre lobo, Veneno, Daño, Recuperación.",
			"frFR": "Morsure rabique inflige la totalité de ses dégâts de poison en 4 s au lieu de 6 s.\n\nTags: Colère, Métamorphose, Lycanthrope, Poison, Dégâts, Temps de recharge.",
			"itIT": "I danni da veleno complessivi di Idrofobia vengono inflitti in 4 s invece di 6.\n\nTags: Collera, Mutaforma, Lupo Mannaro, Veleno, Danni, Tempo di recupero.",
			"jaJP": "〈狂犬病〉のすべての毒ダメージを、6秒ではなく4秒で与え終わる。\n\nTags: 憤怒, 変身, 人狼, 毒, ダメージ, クールダウン.",
			"koKR": "광견병이 총 중독 피해를 주는 시간이 6초에서 4초로 감소합니다.\n\nTags: 진노, 변신, 늑대인간, 독, 피해, 재사용 대기시간.",
			"plPL": "Wścieklizna zadaje całkowite obrażenia od zatrucia w 4 sek. zamiast w 6 sek.\n\nTags: Gniew, Zmiennokształtność, Wilkołak, Trucizna, Obrażenia, Odnowienie.",
			"ptBR": "Raiva causa o dano venenoso total em 4 segundos em vez de 6.\n\nTags: Ira, Metamorfose, Lobisomem, Veneno, Dano, Recarga.",
			"ruRU": "\"Звериное бешенство\" наносит весь урон от отравления за 4, а не за 6 сек.\n\nTags: Гнев, Смена облика, Облик волка, Яд, Урон, Время восстановления.",
			"zhCN": "狂犬撕咬会在 4 秒而不是 6 秒内造成全部的毒素伤害。\n\nTags: 愤怒, 变形, 狼人, 毒素, 伤害, 冷却时间.",
			"zhTW": "狂犬撕咬改為在 4 秒內造成全部的中毒傷害,而非 6 秒。\n\nTags: 憤怒, 變形, 狼人, 毒素, 傷害, 冷卻時間."
},
		id: 106,
		maxPoints: 1,
		x: 1026.475,
		y: 443.83
	},
	"Mending": {
		connections: [ "Wrath", "Provocation" ],
		description: `While in Werebear form, you receive +{5/10/15/20/25/30/35/40/45/50}% additional Healing from all sources.

Tags: Shapeshifting, Healing, Werebear.`,
		nameLocalized: {
			"deDE": "Zusammensetzen",
			"esES": "Alivio",
			"esMX": "Reparación",
			"frFR": "Convalescence",
			"itIT": "Combinazione",
			"jaJP": "治癒",
			"koKR": "회복",
			"plPL": "Zasklepienie",
			"ptBR": "Reparação",
			"ruRU": "Исправление",
			"zhCN": "疗愈",
			"zhTW": "癒合"
},
		descriptionLocalized: {
			"deDE": "In Werbärgestalt erhaltet Ihr +{5/10/15/20/25/30/35/40/45/50}% zusätzliche Heilung aus allen Quellen.\n\nTags: Gestaltwandeln, Heilung, Werbär.",
			"esES": "Mientras estás en forma de hombre oso, recibes un +{5/10/15/20/25/30/35/40/45/50}% más de curación de todas las fuentes.\n\nTags: Cambio de forma, Curación, Hombre oso.",
			"esMX": "Mientras estás en forma de hombre oso, recibes un +{5/10/15/20/25/30/35/40/45/50}% más de sanación de todas las fuentes.\n\nTags: Metamorfosis, Sanación, Hombre oso.",
			"frFR": "Sous forme ursoïde, vous recevez +{5/10/15/20/25/30/35/40/45/50}% de soins supplémentaires de toutes les sources.\n\nTags: Métamorphose, Soins, Ursoïde.",
			"itIT": "In forma di Orso Mannaro, ricevi il +{5/10/15/20/25/30/35/40/45/50}% di cure aggiuntive da tutte le fonti.\n\nTags: Mutaforma, Guarigione, Orso Mannaro.",
			"jaJP": "人熊形態でいる間、あらゆる要素による回復量が+{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: 変身, 回復, 人熊.",
			"koKR": "곰인간 형상일 때 받는 모든 치유가 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 변신, 치유, 곰인간.",
			"plPL": "Pod postacią niedźwiedziołaka otrzymujesz +{5/10/15/20/25/30/35/40/45/50}% dodatkowego leczenia ze wszystkich źródeł.\n\nTags: Zmiennokształtność, Leczenie, Niedźwiedziołak.",
			"ptBR": "Enquanto está na forma de urso, você recebe +{5/10/15/20/25/30/35/40/45/50}% de cura adicional de todas as fontes.\n\nTags: Metamorfose, Cura, Urso.",
			"ruRU": "В облике медведя вы получаете на +{5/10/15/20/25/30/35/40/45/50}% больше исцеления от любых источников.\n\nTags: Смена облика, Исцеление, Медведь.",
			"zhCN": "熊人形态下, 你从所有来源获得的生命恢复效果提高 +{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 变形, 治疗, 熊人.",
			"zhTW": "在熊人形態下,你從各種來源獲得的恢復效果提高 +{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 變形, 治療, 熊人."
},
		id: 97,
		maxPoints: 3,
		x: -545.966,
		y: -78.47
	},
	"Provocation": {
		connections: [ "Mending" ],
		description: `When you remain in Werebear form for at least {30/25/20/15/10/5/0/-5/-10/-15} seconds, your next Skill will Overpower.

Tags: Overpower, Shapeshifting, Werebear.`,
		nameLocalized: {
			"deDE": "Provokation",
			"esES": "Provocación",
			"esMX": "Provocación",
			"frFR": "Provocation",
			"itIT": "Provocazione",
			"jaJP": "挑発",
			"koKR": "흥분",
			"plPL": "Prowokacja",
			"ptBR": "Provocação",
			"ruRU": "Провокация",
			"zhCN": "挑衅",
			"zhTW": "挑釁"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mindestens {30/25/20/15/10/5/0/-5/-10/-15} Sek. lang in Werbärgestalt bleibt, wird Eure nächste Fertigkeit überwältigen.\n\nTags: Überwältigen, Gestaltwandeln, Werbär.",
			"esES": "Si permaneces en forma de hombre oso durante al menos {30/25/20/15/10/5/0/-5/-10/-15} s, tu siguiente habilidad arrollará.\n\nTags: Arrollamiento, Cambio de forma, Hombre oso.",
			"esMX": "Si permaneces en forma de hombre oso durante al menos {30/25/20/15/10/5/0/-5/-10/-15} segundos, tu siguiente habilidad abrumará.\n\nTags: Abrumar, Metamorfosis, Hombre oso.",
			"frFR": "Si vous restez sous forme ursoïde pendant au moins {30/25/20/15/10/5/0/-5/-10/-15} s, votre prochaine compétence accablera les adversaires.\n\nTags: Accablement, Métamorphose, Ursoïde.",
			"itIT": "Se ti trovi in forma di Orso Mannaro per almeno {30/25/20/15/10/5/0/-5/-10/-15} s, la tua abilità successiva causerà Sopraffazione.\n\nTags: Sopraffazione, Mutaforma, Orso Mannaro.",
			"jaJP": "{30/25/20/15/10/5/0/-5/-10/-15}秒以上人熊形態でいると、次のスキルがオーバーパワーになる。\n\nTags: オーバーパワー, 変身, 人熊.",
			"koKR": "곰인간 형태를 {30/25/20/15/10/5/0/-5/-10/-15}초 이상 유지하면 다음 기술이 제압합니다.\n\nTags: 제압, 변신, 곰인간.",
			"plPL": "Kiedy pozostajesz w postaci niedźwiedziołaka przez przynajmniej {30/25/20/15/10/5/0/-5/-10/-15} sek., twoja następna umiejętność przytłacza.\n\nTags: Przytłoczenie, Zmiennokształtność, Niedźwiedziołak.",
			"ptBR": "Quando você permanece na forma de urso por pelo menos {30/25/20/15/10/5/0/-5/-10/-15} segundos, sua próxima habilidade desfere Golpe Brutal.\n\nTags: Golpe Brutal, Metamorfose, Urso.",
			"ruRU": "Когда вы проводите в облике медведя {30/25/20/15/10/5/0/-5/-10/-15} сек., ваше следующее умение наносит подавляющий урон.\n\nTags: Подавление, Смена облика, Медведь.",
			"zhCN": "至少保持熊人形态 {30/25/20/15/10/5/0/-5/-10/-15} 秒, 则你的下一个技能必定压制敌人。\n\nTags: 压制, 变形, 熊人.",
			"zhTW": "當你停留在熊人形態下至少 {30/25/20/15/10/5/0/-5/-10/-15} 秒,你的下一個技能會 壓制。\n\nTags: 壓制, 變形, 熊人."
},
		id: 98,
		maxPoints: 3,
		x: -906.653,
		y: -78.28
	},
	"Neurotoxin": {
		connections: [ "Wrath", "Toxic Claws", "Envenom" ],
		description: `Poisoned enemies are slowed by {8/16/24/32/40/48/56/64/72/80}%.

Tags: Poison, Crowd Control.`,
		nameLocalized: {
			"deDE": "Nervengift",
			"esES": "Neurotoxina",
			"esMX": "Neurotoxina",
			"frFR": "Neurotoxine",
			"itIT": "Neurotossina",
			"jaJP": "神経毒",
			"koKR": "신경독",
			"plPL": "Neurotoksyna",
			"ptBR": "Neurotoxina",
			"ruRU": "Нейротоксин",
			"zhCN": "神经毒素",
			"zhTW": "神經毒素"
},
		descriptionLocalized: {
			"deDE": "Vergiftete Gegner werden um {8/16/24/32/40/48/56/64/72/80}% verlangsamt.\n\nTags: Gift, Kontrollverlust.",
			"esES": "Los enemigos envenenados quedan ralentizados un {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Veneno, Control de masas.",
			"esMX": "Los enemigos envenenados se ralentizan un {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Veneno, Control de multitudes.",
			"frFR": "Les cibles empoisonnées sont ralenties de {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Poison, Perte de contrôle.",
			"itIT": "I nemici avvelenati sono rallentati del {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Veleno, Effetti debilitanti.",
			"jaJP": "毒を受けた敵の移動速度が{8/16/24/32/40/48/56/64/72/80}%低下する。\n\nTags: 毒, 操作障害効果.",
			"koKR": "중독된 적의 이동 속도가 {8/16/24/32/40/48/56/64/72/80}% 감소합니다.\n\nTags: 독, 군중 제어.",
			"plPL": "Zatruci wrogowie zostają również spowolnieni o {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Trucizna, Ograniczanie Kontroli.",
			"ptBR": "Inimigos envenenados são desacelerados em {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Veneno, Controle de Grupo.",
			"ruRU": "Отравленные противники замедляются на {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Яд, Контроль.",
			"zhCN": "使中毒的敌人减速 {8/16/24/32/40/48/56/64/72/80}%。\n\nTags: 毒素, 群控.",
			"zhTW": "中毒的敵人會緩速 {8/16/24/32/40/48/56/64/72/80}%。\n\nTags: 毒素, 控場."
},
		id: 79,
		maxPoints: 3,
		x: 0.3,
		y: 283.825
	},
	"Toxic Claws": {
		connections: [ "Neurotoxin" ],
		description: `Critical Strikes with Werewolf Skills deal {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% of their Base damage as Poisoning damage over 4 seconds.

Tags: Critical Strikes, Werewolf, Poison, Damage, Shapeshifting.`,
		nameLocalized: {
			"deDE": "Toxische Klauen",
			"esES": "Garras tóxicas",
			"esMX": "Garras Tóxicas",
			"frFR": "Griffes toxiques",
			"itIT": "Artigli Tossici",
			"jaJP": "猛毒の鉤爪",
			"koKR": "독성 발톱",
			"plPL": "Toksyczne Pazury",
			"ptBR": "Garras Tóxicas",
			"ruRU": "Ядовитые когти",
			"zhCN": "毒素之爪",
			"zhTW": "毒爪"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Werwolffertigkeiten verursachen im Verlauf von 4 Sek. {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% des Basisschadens als Giftschaden.\n\nTags: Kritische Treffer, Werwolf, Gift, Schaden, Gestaltwandeln.",
			"esES": "Los golpes críticos con habilidades de hombre lobo infligen un {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% de su daño base como daño de veneno durante 4 s.\n\nTags: Golpes críticos, Hombre lobo, Veneno, Daño, Cambio de forma.",
			"esMX": "Los golpes críticos con habilidades de Hombre Lobo infligen un {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% de su daño de base como daño de veneno durante 4 segundos.\n\nTags: Golpes críticos, Hombre lobo, Veneno, Daño, Metamorfosis.",
			"frFR": "Les coups critiques que vous portez avec les compétences de lycanthrope infligent {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% de leurs dégâts de base sous forme de dégâts de poison en 4 s.\n\nTags: Coups critiques, Lycanthrope, Poison, Dégâts, Métamorphose.",
			"itIT": "I colpi critici con le abilità da Lupo Mannaro infliggono danni da veleno pari al {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% dei danni base in 4 s.\n\nTags: Colpi critici, Lupo Mannaro, Veleno, Danni, Mutaforma.",
			"jaJP": "人狼スキルでクリティカルヒットが発生した際に、4秒間かけて基礎ダメージの{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}%を毒ダメージとして与える。\n\nTags: クリティカルヒット, 人狼, 毒, ダメージ, 変身.",
			"koKR": "늑대인간 기술이 극대화로 적중하면 4초에 걸쳐 기본 공격력의 {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}%만큼 중독 피해를 줍니다.\n\nTags: 극대화, 늑대인간, 독, 피해, 변신.",
			"plPL": "Trafienia krytyczne wywołane przez umiejętności Wilkołaka zadają {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% swoich obrażeń podstawowych w postaci obrażeń od zatrucia w ciągu 4 sek.\n\nTags: Trafienia Krytyczne, Wilkołak, Trucizna, Obrażenia, Zmiennokształtność.",
			"ptBR": "Acertos críticos com habilidades de Lobisomem causam {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% do dano-base como dano venenoso ao longo de 4 segundos.\n\nTags: Acertos Críticos, Lobisomem, Veneno, Dano, Metamorfose.",
			"ruRU": "Критические удары умений волка наносят еще {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% базового урона как урон от отравления за 4 сек.\n\nTags: Критические удары, Облик волка, Яд, Урон, Смена облика.",
			"zhCN": "狼人技能暴击时, 在 4 秒内持续造成 {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% 基础伤害的毒素伤害。\n\nTags: 暴击, 狼人, 毒素, 伤害, 变形.",
			"zhTW": "狼人技能爆擊會在 4 秒內造成等同其基礎傷害 {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% 的中毒傷害。\n\nTags: 爆擊, 狼人, 毒素, 傷害, 變形."
},
		id: 78,
		maxPoints: 3,
		x: 142.805,
		y: 424.725
	},
	"Envenom": {
		connections: [ "Neurotoxin" ],
		description: `Poisoned enemies take x{10/20/30/40/50/60/70/80/90/100}% additional Critical Strike Damage.

Tags: Poison, Critical Strikes, Damage.`,
		nameLocalized: {
			"deDE": "Vergiften",
			"esES": "Emponzoñar",
			"esMX": "Envenenar",
			"frFR": "Envenimation",
			"itIT": "Intossicazione",
			"jaJP": "猛毒付与",
			"koKR": "독살",
			"plPL": "Zatrucie Jadem",
			"ptBR": "Envenenar",
			"ruRU": "Наполнение ядом",
			"zhCN": "毒伤",
			"zhTW": "毒化"
},
		descriptionLocalized: {
			"deDE": "Vergiftete Gegner erleiden x{10/20/30/40/50/60/70/80/90/100}% zusätzlichen kritischen Trefferschaden.\n\nTags: Gift, Kritische Treffer, Schaden.",
			"esES": "Los enemigos envenenados sufren un x{10/20/30/40/50/60/70/80/90/100}% más de daño de golpe crítico.\n\nTags: Veneno, Golpes críticos, Daño.",
			"esMX": "Los enemigos envenenados reciben un x{10/20/30/40/50/60/70/80/90/100}% más de daño de golpe crítico.\n\nTags: Veneno, Golpes críticos, Daño.",
			"frFR": "Les cibles empoisonnées subissent x{10/20/30/40/50/60/70/80/90/100}% de dégâts critiques supplémentaires.\n\nTags: Poison, Coups critiques, Dégâts.",
			"itIT": "I danni critici dei nemici avvelenati aumentano del x{10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Veleno, Colpi critici, Danni.",
			"jaJP": "毒状態の敵が受けるクリティカルヒットダメージがx{10/20/30/40/50/60/70/80/90/100}%増加する。\n\nTags: 毒, クリティカルヒット, ダメージ.",
			"koKR": "중독된 적이 추가로 x{10/20/30/40/50/60/70/80/90/100}%의 극대화 피해를 받습니다.\n\nTags: 독, 극대화, 피해.",
			"plPL": "Zatruci wrogowie otrzymują obrażenia od trafień krytycznych zwiększone o x{10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Trucizna, Trafienia Krytyczne, Obrażenia.",
			"ptBR": "Inimigos envenenados recebem {10/20/30/40/50/60/70/80/90/100}% de dano de acerto crítico adicional.\n\nTags: Veneno, Acertos Críticos, Dano.",
			"ruRU": "Отравленные противники получают на x{10/20/30/40/50/60/70/80/90/100}% больше критического урона.\n\nTags: Яд, Критические удары, Урон.",
			"zhCN": "中毒敌人受到的暴击伤害提高 x{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 毒素, 暴击, 伤害.",
			"zhTW": "中毒的敵人受到 x{10/20/30/40/50/60/70/80/90/100}% 額外的爆擊傷害。\n\nTags: 毒素, 爆擊, 傷害."
},
		id: 166,
		maxPoints: 3,
		x: -150.834,
		y: 424.885
	},
};

druidData["Ultimate"] = {
	"Grizzly Rage": {
		connections: [ "Ultimate", "Prime Grizzly Rage" ],
		description: `Cooldown: {#} seconds
Shapeshift into a Dire Werebear for 10 seconds gaining x20% bonus damage and 20% Damage Reduction. Damage bonus is increased by 3% each second while in this form.

Kills extend the duration by 1 second up to 10 additional seconds.

Tags: Ultimate, Shapeshifting, Werebear, Damage Reduction, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Grizzlyzorn",
			"esES": "Ira de oso pardo",
			"esMX": "Furia Parda",
			"frFR": "Rage du grizzly",
			"itIT": "Rabbia del Grizzly",
			"jaJP": "グリズリーの怒り",
			"koKR": "회색곰의 격노",
			"plPL": "Niedźwiedzi Szał",
			"ptBR": "Fúria do Urso",
			"ruRU": "Ярость гризли",
			"zhCN": "灰熊狂怒",
			"zhTW": "灰熊狂怒"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nVerwandelt Euch 10 Sek. lang in einen Todeswerbären. Ihr erhaltet x20% Bonusschaden und 20% Schadensreduktion. In dieser Gestalt erhöht sich der Bonusschaden jede Sek. um 3%.\n\nWenn Ihr Gegner tötet, verlängert sich die Dauer um 1 Sek. bis zu 10 zusätzlichen Sek.\n\nTags: Ultimativ, Gestaltwandeln, Werbär, Schadensreduktion, Schaden, Abklingzeit.",
			"esES": "Tiempo de reutilización: {#} s\nTe transformas en un hombre oso atroz durante 10 s, lo que te otorga un x20% de daño adicional y un 20% de reducción de daño. El bonus de daño aumenta un 3% por cada segundo que mantengas esta forma.\n\nMatar amplía 1 s su duración hasta un máximo de 10 s adicionales.\n\nTags: Definitiva, Cambio de forma, Hombre oso, Reducción de daño, Daño, Tiempo de reutilización.",
			"esMX": "Recuperación: {#} segundos\nCambias de forma a un hombre oso temible durante 10 segundos, lo que te otorga un x20% más de daño y un 20% de reducción de daño. El daño adicional aumenta un 3% por cada segundo que permanezcas en esta forma.\n\nCada enemigo que elimines aumenta 1 segundo la duración, hasta 10 segundos adicionales.\n\nTags: Máxima, Metamorfosis, Hombre oso, Reducción de daño, Daño, Recuperación.",
			"frFR": "Temps de recharge: {#} s\nVous vous transformez en ursoïde féroce pendant 10 s, ce qui augmente vos dégâts de x20% et votre réduction des dégâts de 20%. Ce bonus aux dégâts est augmenté de 3% par seconde passée sous cette forme.\n\nTuer une cible prolonge la durée de la transformation de 1 s, jusqu'à un maximum de 10 s supplémentaires.\n\nTags: Ultime, Métamorphose, Ursoïde, Réduction des dégâts, Dégâts, Temps de recharge.",
			"itIT": "Tempo di recupero: {#} s\nMuti in un Orso Mannaro Feroce per 10 s ottenendo un bonus ai danni del x20% e il 20% di riduzione danni. Il bonus ai danni aggiuntivi aumenta del 3% al secondo mentre rimani in questa forma.\n\nLe uccisioni estendono la durata della forma di 1 s fino a 10 s aggiuntivi.\n\nTags: Ultra, Mutaforma, Orso Mannaro, Riduzione danni, Danni, Tempo di recupero.",
			"jaJP": "クールダウン: {#}秒\n10秒間、のダイア・ウェアベアになり、x20%のダメージボーナスと20%のダメージ軽減を獲得する。この形態でいる間、ダメージボーナスは毎秒3%増加する。\n\n敵を倒すたびに持続時間が1秒延長される。合計延長時間は最大で10秒。\n\nTags: 奥義, 変身, 人熊, ダメージ減少, ダメージ, クールダウン.",
			"koKR": "재사용 대기시간: {#}초\n광포한 곰인간으로 10초 동안 변신하여 공격력이 x20% 증가하고 피해 감소가 20% 증가합니다. 이 형상을 유지하는 동안 매초 공격력이 3% 증가합니다.\n\n적을 처치하면 지속시간이 1초만큼, 최대 10초까지 추가로 증가합니다.\n\nTags: 궁극기, 변신, 곰인간, 피해 감소, 피해, 재사용 대기시간.",
			"plPL": "Czas odnowienia: {#} sek.\nPrzemieniasz się upiornego niedźwiedziołaka na 10 sek. i zyskujesz premię x20% do obrażeń oraz 20% do redukcji obrażeń. Premia do obrażeń wzrasta o 3% co sekundę, kiedy jesteś w tej postaci.\n\nZabijanie wrogów wydłuża czas działania o 1 sek., maksymalnie do 10 dodatkowych sekund.\n\nTags: Specjalne, Zmiennokształtność, Niedźwiedziołak, Redukcja Obrażeń, Obrażenia, Odnowienie.",
			"ptBR": "Recarga: {#} segundos\nTransforma-se em um Urso Atroz por 10 segundos, recebendo 20% de bônus de dano e 20% de redução de dano. O bônus de dano é aumentado em 3% a cada segundo enquanto estiver nessa forma.\n\nAbates aumentam a duração em 1 segundo até 10 segundos adicionais.\n\nTags: Suprema, Metamorfose, Urso, Redução de Dano, Dano, Recarga.",
			"ruRU": "Время восстановления: {#} сек.\nВы принимаете облик лютого медведя на 10 сек. Наносимый урон увеличивается на x20%, а получаемый урон уменьшается на 20%. Прибавка к урону увеличивается на 3% с каждой секундой, проведенной в этом облике.\n\nУбийства продлевают время действия эффекта на 1 сек. вплоть до 10 сек.\n\nTags: Мощное умение, Смена облика, Медведь, Уменьшение урона, Урон, Время восстановления.",
			"zhCN": "冷却时间: {#} 秒\n变成一只恐怖熊人, 持续 10 秒, 获得 x20% 伤害加成和 20% 伤害减免。在该形态下, 伤害加成每秒提高 3%。\n\n消灭会使持续时间延长 1 秒, 最多延长 10 秒。\n\nTags: 终极技能, 变形, 熊人, 伤害减免, 伤害, 冷却时间.",
			"zhTW": "冷卻時間:{#} 秒\n變身為兇蠻熊人,持續 10 秒。獲得 x20% 傷害加成與 20% 傷害減免。在此形態下,每秒傷害加成提高 3%。\n\n擊殺可以使持續時間延長 1 秒,最多延長 10 秒。\n\nTags: 絕招, 變形, 熊人, 傷害減免, 傷害, 冷卻時間."
},
		id: 107,
		maxPoints: 1,
		values: [ "50" ],
		x: 4.395,
		y: 301.055
	},
	"Prime Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Supreme Grizzly Rage", "Grizzly Rage" ],
		description: `You are Unstoppable while Grizzly Rage is active.

Tags: Ultimate, Shapeshifting, Werebear, Damage Reduction, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Oberster Grizzlyzorn",
			"esES": "Ira de oso pardo mayor",
			"esMX": "Furia Parda Suprema",
			"frFR": "Rage du grizzly primordiale",
			"itIT": "Rabbia del Grizzly Pregiata",
			"jaJP": "グリズリーの怒り(上級)",
			"koKR": "극상의 회색곰의 격노",
			"plPL": "Większy Niedźwiedzi Szał",
			"ptBR": "Fúria do Urso Primordial",
			"ruRU": "Первородная ярость гризли",
			"zhCN": "至尊灰熊狂怒",
			"zhTW": "強烈灰熊狂怒"
},
		descriptionLocalized: {
			"deDE": "Ihr seid unaufhaltsam, solange Euer Grizzlyzorn aktiv ist.\n\nTags: Ultimativ, Gestaltwandeln, Werbär, Schadensreduktion, Schaden, Abklingzeit.",
			"esES": "Eres imparable mientras dura Ira de oso pardo.\n\nTags: Definitiva, Cambio de forma, Hombre oso, Reducción de daño, Daño, Tiempo de reutilización.",
			"esMX": "Mientras Furia Parda está activa, eres imparable.\n\nTags: Máxima, Metamorfosis, Hombre oso, Reducción de daño, Daño, Recuperación.",
			"frFR": "Vous êtes inarrêtable tant que Rage du grizzly est active.\n\nTags: Ultime, Métamorphose, Ursoïde, Réduction des dégâts, Dégâts, Temps de recharge.",
			"itIT": "Sei inarrestabile mentre Rabbia del Grizzly è attiva.\n\nTags: Ultra, Mutaforma, Orso Mannaro, Riduzione danni, Danni, Tempo di recupero.",
			"jaJP": "〈グリズリーの怒り〉発動中は抑圧不可状態になる。\n\nTags: 奥義, 変身, 人熊, ダメージ減少, ダメージ, クールダウン.",
			"koKR": "회색곰의 격노가 활성화되어 있는 동안 저지 불가 상태가 됩니다.\n\nTags: 궁극기, 변신, 곰인간, 피해 감소, 피해, 재사용 대기시간.",
			"plPL": "Kiedy aktywny jest twój Niedźwiedzi Szał, zyskujesz nieustępliwość.\n\nTags: Specjalne, Zmiennokształtność, Niedźwiedziołak, Redukcja Obrażeń, Obrażenia, Odnowienie.",
			"ptBR": "Você fica implacável enquanto Fúria do Urso está ativa.\n\nTags: Suprema, Metamorfose, Urso, Redução de Dano, Dano, Recarga.",
			"ruRU": "\"Ярость гризли\" также дает неудержимость.\n\nTags: Мощное умение, Смена облика, Медведь, Уменьшение урона, Урон, Время восстановления.",
			"zhCN": "灰熊狂怒激活时, 你获得不可阻挡。\n\nTags: 终极技能, 变形, 熊人, 伤害减免, 伤害, 冷却时间.",
			"zhTW": "在灰熊狂怒啟用期間,你將進入無阻狀態。\n\nTags: 絕招, 變形, 熊人, 傷害減免, 傷害, 冷卻時間."
},
		id: 108,
		maxPoints: 1,
		x: 148.47,
		y: 497.15
	},
	"Supreme Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Prime Grizzly Rage" ],
		description: `Gain 8% Base Life as Fortify per second while Grizzly Rage is active.

Tags: Ultimate, Shapeshifting, Werebear, Damage Reduction, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegener Grizzlyzorn",
			"esES": "Ira de oso pardo suprema",
			"esMX": "Furia Parda Superior",
			"frFR": "Rage du grizzly suprême",
			"itIT": "Rabbia del Grizzly Suprema",
			"jaJP": "グリズリーの怒り(高級)",
			"koKR": "최고의 회색곰의 격노",
			"plPL": "Największy Niedźwiedzi Szał",
			"ptBR": "Fúria do Urso Suprema",
			"ruRU": "Неотвратимая ярость гризли",
			"zhCN": "至极灰熊狂怒",
			"zhTW": "終極灰熊狂怒"
},
		descriptionLocalized: {
			"deDE": "Erhaltet pro Sekunde 8% Eures Basislebens als Stählung, solange Grizzlyzorn aktiv ist.\n\nTags: Ultimativ, Gestaltwandeln, Werbär, Schadensreduktion, Schaden, Abklingzeit.",
			"esES": "Obtienes un 8% de vida base como fortificación por segundo mientras dura Ira de oso pardo.\n\nTags: Definitiva, Cambio de forma, Hombre oso, Reducción de daño, Daño, Tiempo de reutilización.",
			"esMX": "Recibes un 8% de tu vida de base como fortificación por segundo mientras Furia Parda está activa.\n\nTags: Máxima, Metamorfosis, Hombre oso, Reducción de daño, Daño, Recuperación.",
			"frFR": "Vous obtenez un montant de fortification égal à 8% de vos points de vie de base par seconde tant que Rage du grizzly est active.\n\nTags: Ultime, Métamorphose, Ursoïde, Réduction des dégâts, Dégâts, Temps de recharge.",
			"itIT": "Ottieni il 8% della Vita base come Fortificazione ogni secondo quando Rabbia del Grizzly è attiva.\n\nTags: Ultra, Mutaforma, Orso Mannaro, Riduzione danni, Danni, Tempo di recupero.",
			"jaJP": "〈グリズリーの怒り〉を使用中、基本ライフの8%にあたるの強化を毎秒獲得する。\n\nTags: 奥義, 変身, 人熊, ダメージ減少, ダメージ, クールダウン.",
			"koKR": "회색곰의 격노가 활성화되어 있는 동안 초당 기본 생명력의 8%에 해당하는 보강 효과를 얻습니다.\n\nTags: 궁극기, 변신, 곰인간, 피해 감소, 피해, 재사용 대기시간.",
			"plPL": "Zyskujesz 8% podstawowego zdrowia jako umocnienie, kiedy Niedźwiedzi Szał jest aktywny.\n\nTags: Specjalne, Zmiennokształtność, Niedźwiedziołak, Redukcja Obrażeń, Obrażenia, Odnowienie.",
			"ptBR": "Recebe 8% de vida básica por segundo como fortificação enquanto Fúria do Urso estiver ativa.\n\nTags: Suprema, Metamorfose, Urso, Redução de Dano, Dano, Recarga.",
			"ruRU": "Пока действует \"Ярость гризли\", вы получаете укрепление в объеме 8% базового запаса здоровья раз в сек.\n\nTags: Мощное умение, Смена облика, Медведь, Уменьшение урона, Урон, Время восстановления.",
			"zhCN": "灰熊狂怒激活时, 每秒强固你 8% 基础生命。\n\nTags: 终极技能, 变形, 熊人, 伤害减免, 伤害, 冷却时间.",
			"zhTW": "在灰熊狂怒啟動期間,每秒獲得相當於 8% 基礎生命值的強韌。\n\nTags: 絕招, 變形, 熊人, 傷害減免, 傷害, 冷卻時間."
},
		id: 109,
		maxPoints: 1,
		x: -1.065,
		y: 641.92
	},
	"Petrify": {
		connections: [ "Ultimate", "Prime Petrify" ],
		description: `Cooldown: {#} seconds
Encase all Nearby enemies in stone, Stunning them for 3 seconds. You deal x25% increased Critical Strike Damage to enemies affected by Petrify.

Against Bosses, the Critical Strike Damage bonus is increased to x50% and its duration is increased to 6 seconds.

Tags: Ultimate, Nature Magic, Earth, Crowd Control, Cooldown, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Versteinern",
			"esES": "Petrificar",
			"esMX": "Petrificación",
			"frFR": "Pétrification",
			"itIT": "Pietrificazione",
			"jaJP": "石化",
			"koKR": "석화",
			"plPL": "Petryfikacja",
			"ptBR": "Petrificar",
			"ruRU": "Окаменение",
			"zhCN": "石化",
			"zhTW": "石化"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nHüllt alle Gegner in der Nähe in Stein und betäubt sie 3 Sek. lang. Ihr fügt Gegnern, die von Versteinern betroffen sind, x25% mehr kritischen Trefferschaden zu.\n\nGegen Bosse ist der Bonus auf kritischen Trefferschaden auf x50% und seine Dauer auf 6 Sek. erhöht.\n\nTags: Ultimativ, Naturmagie, Erde, Kontrollverlust, Abklingzeit, Kritische Treffer.",
			"esES": "Tiempo de reutilización: {#} s\nEncierras a todos los enemigos cercanos en piedra, lo que los aturde durante 3 s. Infliges un x25% más de daño de golpe crítico a enemigos afectados por Petrificar.\n\nContra jefes, el bonus de daño de golpe crítico aumenta a un x50% y su duración aumenta a 6 s.\n\nTags: Definitiva, Magia de la naturaleza, Tierra, Control de masas, Tiempo de reutilización, Golpes críticos.",
			"esMX": "Recuperación: {#} segundos\nEncierras a todos los enemigos cercanos en piedra y los aturdes durante 3 segundos. Infliges un x25% más de daño de golpe crítico a los enemigos afectados por Petrificación.\n\nContra los jefes, la bonificación de daño de golpe crítico aumenta al x50%, y su duración aumenta a 6 segundos.\n\nTags: Máxima, Magia de la naturaleza, Tierra, Control de multitudes, Recuperación, Golpes críticos.",
			"frFR": "Temps de recharge: {#} s\nVous encastrez l'ensemble des adversaires à proximité dans de la pierre, ce qui les étourdit pendant 3 s. Vous infligez x25% de dégâts critiques supplémentaires aux cibles affectées par Pétrification.\n\nContre les boss, le bonus aux dégâts critiques est porté à x50% et sa durée à 6 s.\n\nTags: Ultime, Magie naturelle, Terre, Perte de contrôle, Temps de recharge, Coups critiques.",
			"itIT": "Tempo di recupero: {#} s\nIntrappoli tutti i nemici vicini nella pietra, stordendoli per 3 s. Infliggi il x25% di danni critici aggiuntivi ai nemici affetti da Pietrificazione.\n\nContro i boss, il bonus ai danni critici viene aumentato al x50% e la sua durata è aumentata a 6 s.\n\nTags: Ultra, Magia naturale, Terra, Effetti debilitanti, Tempo di recupero, Colpi critici.",
			"jaJP": "クールダウン: {#}秒\n周囲のすべての敵を岩で包み込み、3秒間スタンさせる。〈石化〉の影響を受けた敵へのクリティカルダメージがx25%増加する。\n\nボスに対しては、クリティカルダメージボーナスがx50%に増加し、持続時間が6秒に延長される。\n\nTags: 奥義, 自然魔法, 地, 操作障害効果, クールダウン, クリティカルヒット.",
			"koKR": "재사용 대기시간: {#}초\n주위 모든 적을 돌로 감싸 3초 동안 기절시킵니다. 석화의 영향을 받는 적에게 주는 극대화 피해가 x25% 증가합니다.\n\n우두머리를 상대할 때는 극대화 피해 증가량이 x50%로, 지속시간이 6초로 증가합니다.\n\nTags: 궁극기, 자연 마법, 대지, 군중 제어, 재사용 대기시간, 극대화.",
			"plPL": "Czas odnowienia: {#} sek.\nPrzemieniasz wszystkich wrogów w kamień i ogłuszasz ich na 3 sek. Zadajesz zwiększone o x25% obrażenia od trafień krytycznych celom pod działaniem Petryfikacji.\n\nW przypadku bossów premia do obrażeń od trafień krytycznych jest zwiększona do x50%, a czas jej działania jest wydłużony do 6 sek.\n\nTags: Specjalne, Magia Natury, Ziemia, Ograniczanie Kontroli, Odnowienie, Trafienia Krytyczne.",
			"ptBR": "Recarga: {#} segundos\nEnvolve todos os inimigos próximos em pedra, atordoando-os por 3 segundos. Você causa 25% de dano de acerto crítico aumentado a inimigos afetados por Petrificar.\n\nContra chefes, o bônus de dano de acerto crítico é aumentado para 50% e sua duração é aumentada para 6 segundos.\n\nTags: Suprema, Magia da Natureza, Terra, Controle de Grupo, Recarga, Acertos Críticos.",
			"ruRU": "Время восстановления: {#} сек.\nВы заключаете ближайших противников в камень, оглушая их на 3 сек. Цели под действием \"Окаменения\" получают от вас на x25% больше критического урона.\n\nПротив боссов бонус к критическому урону увеличивается до x50%, а время действия эффекта продлевается до 6 сек.\n\nTags: Мощное умение, Силы природы, Земля, Контроль, Время восстановления, Критические удары.",
			"zhCN": "冷却时间: {#} 秒\n石化附近所有敌人, 使其昏迷 3 秒。你对被石化的敌人造成的暴击伤害提高 x25%。\n\n目标为首领时, 暴击伤害加成提高至 x50%, 并且其持续时间提高至 6 秒。\n\nTags: 终极技能, 自然魔法, 大地, 群控, 冷却时间, 暴击.",
			"zhTW": "冷卻時間:{#} 秒\n以岩石包覆附近所有敵人,使其昏迷 3 秒。你對石化敵人造成的爆擊傷害提高 x25%。\n\n對上首領時,此爆擊傷害加成提高至 x50%,持續時間延長至 6 秒。\n\nTags: 絕招, 自然魔法, 大地, 控場, 冷卻時間, 爆擊."
},
		id: 110,
		maxPoints: 1,
		values: [ "50" ],
		x: 3.895,
		y: -279.14
	},
	"Prime Petrify": {
		baseSkill: "Petrify",
		connections: [ "Supreme Petrify", "Petrify" ],
		description: `Petrify's effect durations are increased by 1 second.

Tags: Ultimate, Nature Magic, Earth, Crowd Control, Cooldown, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Oberstes Versteinern",
			"esES": "Petrificar mayor",
			"esMX": "Petrificación Suprema",
			"frFR": "Pétrification primordiale",
			"itIT": "Pietrificazione Pregiata",
			"jaJP": "石化(上級)",
			"koKR": "극상의 석화",
			"plPL": "Większa Petryfikacja",
			"ptBR": "Petrificar Primordial",
			"ruRU": "Первородное окаменение",
			"zhCN": "至尊石化",
			"zhTW": "強烈石化"
},
		descriptionLocalized: {
			"deDE": "Die Dauer der Effekte von Versteinern erhöht sich um 1 Sek.\n\nTags: Ultimativ, Naturmagie, Erde, Kontrollverlust, Abklingzeit, Kritische Treffer.",
			"esES": "La duración de los efectos de Petrificar aumenta 1 s.\n\nTags: Definitiva, Magia de la naturaleza, Tierra, Control de masas, Tiempo de reutilización, Golpes críticos.",
			"esMX": "La duración de los efectos de Petrificación aumenta 1 segundo.\n\nTags: Máxima, Magia de la naturaleza, Tierra, Control de multitudes, Recuperación, Golpes críticos.",
			"frFR": "La durée des effets de Pétrification est augmentée de 1 s.\n\nTags: Ultime, Magie naturelle, Terre, Perte de contrôle, Temps de recharge, Coups critiques.",
			"itIT": "La durata di Pietrificazione viene aumentata di 1 s.\n\nTags: Ultra, Magia naturale, Terra, Effetti debilitanti, Tempo di recupero, Colpi critici.",
			"jaJP": "〈石化〉の効果の持続時間が1秒伸びる。\n\nTags: 奥義, 自然魔法, 地, 操作障害効果, クールダウン, クリティカルヒット.",
			"koKR": "석화의 효과 지속시간이 1초 증가합니다.\n\nTags: 궁극기, 자연 마법, 대지, 군중 제어, 재사용 대기시간, 극대화.",
			"plPL": "Czas działania efektu Petryfikacji jest wydłużony o 1 sek.\n\nTags: Specjalne, Magia Natury, Ziemia, Ograniczanie Kontroli, Odnowienie, Trafienia Krytyczne.",
			"ptBR": "As durações de efeito de Petrificar são aumentadas em 1 segundo.\n\nTags: Suprema, Magia da Natureza, Terra, Controle de Grupo, Recarga, Acertos Críticos.",
			"ruRU": "Время действия \"Окаменения\" увеличивается на 1 сек.\n\nTags: Мощное умение, Силы природы, Земля, Контроль, Время восстановления, Критические удары.",
			"zhCN": "石化效果的持续时间延长 1 秒。\n\nTags: 终极技能, 自然魔法, 大地, 群控, 冷却时间, 暴击.",
			"zhTW": "石化效果的持續時間延長 1 秒。\n\nTags: 絕招, 自然魔法, 大地, 控場, 冷卻時間, 爆擊."
},
		id: 111,
		maxPoints: 1,
		x: 193.785,
		y: -466.65
	},
	"Supreme Petrify": {
		baseSkill: "Petrify",
		connections: [ "Prime Petrify" ],
		description: `Killing an enemy affected by Petrify grants 25 Spirit.

Tags: Ultimate, Nature Magic, Earth, Crowd Control, Cooldown, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Überlegenes Versteinern",
			"esES": "Petrificar supremo",
			"esMX": "Petrificación Superior",
			"frFR": "Pétrification suprême",
			"itIT": "Pietrificazione Suprema",
			"jaJP": "石化(高級)",
			"koKR": "최고의 석화",
			"plPL": "Największa Petryfikacja",
			"ptBR": "Petrificar Supremo",
			"ruRU": "Неотвратимое окаменение",
			"zhCN": "至极石化",
			"zhTW": "終極石化"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen Gegner tötet, der von Versteinern betroffen ist, erhaltet Ihr 25 Geisteskraft.\n\nTags: Ultimativ, Naturmagie, Erde, Kontrollverlust, Abklingzeit, Kritische Treffer.",
			"esES": "Matar a un enemigo afectado por Petrificar te otorga 25 de espíritu.\n\nTags: Definitiva, Magia de la naturaleza, Tierra, Control de masas, Tiempo de reutilización, Golpes críticos.",
			"esMX": "Matar a un enemigo afectado por Petrificación otorga 25 de Espíritu.\n\nTags: Máxima, Magia de la naturaleza, Tierra, Control de multitudes, Recuperación, Golpes críticos.",
			"frFR": "Tuer une cible affectée par Pétrification vous confère 25 points d'esprit.\n\nTags: Ultime, Magie naturelle, Terre, Perte de contrôle, Temps de recharge, Coups critiques.",
			"itIT": "Uccidere un nemico affetto da Pietrificazione fornisce 25 spirito.\n\nTags: Ultra, Magia naturale, Terra, Effetti debilitanti, Tempo di recupero, Colpi critici.",
			"jaJP": "〈石化〉の影響を受けた敵を倒すと25の精神力を得る。\n\nTags: 奥義, 自然魔法, 地, 操作障害効果, クールダウン, クリティカルヒット.",
			"koKR": "석화의 영향을 받는 적을 처치하면 영력을 25 얻습니다.\n\nTags: 궁극기, 자연 마법, 대지, 군중 제어, 재사용 대기시간, 극대화.",
			"plPL": "Zabicie wroga objętego działaniem petryfikacji zapewnia 25 pkt. siły duchowej.\n\nTags: Specjalne, Magia Natury, Ziemia, Ograniczanie Kontroli, Odnowienie, Trafienia Krytyczne.",
			"ptBR": "Matar um inimigo afetado por Petrificar concede 25 de espírito.\n\nTags: Suprema, Magia da Natureza, Terra, Controle de Grupo, Recarga, Acertos Críticos.",
			"ruRU": "Убив противника, пораженного \"Окаменением\", вы накапливаете 25 ед. духа.\n\nTags: Мощное умение, Силы природы, Земля, Контроль, Время восстановления, Критические удары.",
			"zhCN": "消灭一名被石化的敌人可以获得 25 点灵力。\n\nTags: 终极技能, 自然魔法, 大地, 群控, 冷却时间, 暴击.",
			"zhTW": "殺死石化的敵人可獲得 25 點靈力。\n\nTags: 絕招, 自然魔法, 大地, 控場, 冷卻時間, 爆擊."
},
		id: 112,
		maxPoints: 1,
		x: -0.87,
		y: -605.175
	},
	"Defensive Posture": {
		connections: [ "Ultimate", "Thick Hide", "Nature's Resolve" ],
		description: `Increases the amount of Fortify you gain from all sources by +{5/10/15/20/25/30/35/40/45/50}%.

Tags: Fortify.`,
		nameLocalized: {
			"deDE": "Abwehrhaltung",
			"esES": "Postura defensiva",
			"esMX": "Postura Defensiva",
			"frFR": "Posture défensive",
			"itIT": "Postura Difensiva",
			"jaJP": "防御の構え",
			"koKR": "방어 자세",
			"plPL": "Postawa Obronna",
			"ptBR": "Postura Defensiva",
			"ruRU": "Защитная стойка",
			"zhCN": "防御姿态",
			"zhTW": "防禦態勢"
},
		descriptionLocalized: {
			"deDE": "Erhöht die Menge an Stählung, die Ihr aus allen Quellen erhaltet, um +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Stählung.",
			"esES": "Aumenta un +{5/10/15/20/25/30/35/40/45/50}% la cantidad de fortificación que obtienes de todas las fuentes.\n\nTags: Fortificación.",
			"esMX": "Aumenta un +{5/10/15/20/25/30/35/40/45/50}% la cantidad de fortificación que obtienes de todas las fuentes.\n\nTags: Fortificar.",
			"frFR": "Augmente de +{5/10/15/20/25/30/35/40/45/50}% le montant de fortification que vous obtenez de toutes les sources.\n\nTags: Fortification.",
			"itIT": "Aumenti la quantità di Fortificazione che ottieni da tutte le fonti del +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Fortificazione.",
			"jaJP": "あらゆる要素から得られる強化の量が+{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: 強化.",
			"koKR": "모든 보강 효과가 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 보강.",
			"plPL": "Siła umocnienia otrzymywanego ze wszystkich źródeł jest zwiększona o +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Umocnienie.",
			"ptBR": "Aumenta a quantidade de fortificação que você recebe de todas as fontes em +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Fortificação.",
			"ruRU": "Вы получаете на +{5/10/15/20/25/30/35/40/45/50}% больше укрепления от любых источников.\n\nTags: Укрепление.",
			"zhCN": "你从所有来源获得的强固数值提高 +{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 强固.",
			"zhTW": "使你從各種來源獲得的強韌提高 +{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 強韌."
},
		id: 113,
		maxPoints: 3,
		x: 509.67,
		y: 1.205
	},
	"Thick Hide": {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `Whenever you are Stunned, Immobilized, or Knocked Down, Fortify for {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% Base Life.

Tags: Fortify, Crowd Control.`,
		nameLocalized: {
			"deDE": "Dickes Fell",
			"esES": "Piel gruesa",
			"esMX": "Pellejo Grueso",
			"frFR": "Peau épaisse",
			"itIT": "Pelle Spessa",
			"jaJP": "分厚い皮",
			"koKR": "두꺼운 가죽",
			"plPL": "Gruboskórność",
			"ptBR": "Couro Espesso",
			"ruRU": "Плотная шкура",
			"zhCN": "厚皮",
			"zhTW": "厚皮"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr betäubt, bewegungsunfähig oder niedergeschlagen werdet, erhaltet Ihr Stählung in Höhe von {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% Eures Basislebens.\n\nTags: Stählung, Kontrollverlust.",
			"esES": "Cada vez que te aturdan, inmovilicen o derriben, fortificas un {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% de tu vida base.\n\nTags: Fortificación, Control de masas.",
			"esMX": "Cuando te aturden, inmovilizan o repelen, te fortificas con un {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% de tu vida de base.\n\nTags: Fortificar, Control de multitudes.",
			"frFR": "Chaque fois que vous subissez un étourdissement, une immobilisation ou un renversement, vous obtenez un montant de fortification égal à {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% de vos points de vie de base.\n\nTags: Fortification, Perte de contrôle.",
			"itIT": "Quando si è storditi, immobilizzati o caduti, si ottiene Fortificazione per il {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% della Vita base.\n\nTags: Fortificazione, Effetti debilitanti.",
			"jaJP": "スタン、移動不能、またはノックダウン状態になると、基本ライフの{6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}%にあたるの強化を獲得する。\n\nTags: 強化, 操作障害効果.",
			"koKR": "기절하거나, 이동 불가 상태가 되거나, 넘어질 때마다 기본 생명력의 {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}%만큼 보강됩니다.\n\nTags: 보강, 군중 제어.",
			"plPL": "Kiedy znajdujesz się pod wpływem efektów ogłuszenia, unieruchomienia lub powalenia, zyskujesz umocnienie równe {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% podstawowego zdrowia.\n\nTags: Umocnienie, Ograniczanie Kontroli.",
			"ptBR": "Sempre que estiver sob atordoamento, imobilização ou nocaute, você se fortifica em {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% da vida básica.\n\nTags: Fortificação, Controle de Grupo.",
			"ruRU": "Когда вас оглушают, обездвиживают или сбивают с ног, вы получаете укрепление в объеме {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% базового запаса здоровья.\n\nTags: Укрепление, Контроль.",
			"zhCN": "每当你被击晕、定身或击倒时, 强固你 {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% 基础生命。\n\nTags: 强固, 群控.",
			"zhTW": "每當你被擊昏、定身或擊倒時,會獲得相當於 {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% 基礎生命值的強韌。\n\nTags: 強韌, 控場."
},
		id: 114,
		maxPoints: 3,
		x: 781.551,
		y: -84.42
	},
	"Unrestrained": {
		connections: [ "Thick Hide", "Nature's Resolve" ],
		description: `Reduce the duration of Control Impairing Effects by {3/6/9/12/15/18/21/24/27/30}%. Triple this effect while you have Fortify for over 50% of your Maximum Life.

Tags: Fortify, Life, Crowd Control.`,
		nameLocalized: {
			"deDE": "Unbändig",
			"esES": "Irrefrenable",
			"esMX": "Irrefrenable",
			"frFR": "Sans retenue",
			"itIT": "Smisurato",
			"jaJP": "抑制知らず",
			"koKR": "무절제",
			"plPL": "Powściągliwość",
			"ptBR": "Irrestrito",
			"ruRU": "Необузданная сила",
			"zhCN": "狂野不羁",
			"zhTW": "無縛"
},
		descriptionLocalized: {
			"deDE": "Verringert die Dauer von Kontrollverlusteffekten um {3/6/9/12/15/18/21/24/27/30}%. Solange Ihr um mindestens 50% Eures maximalen Lebens gestählt seid, verdreifacht sich dieser Effekt.\n\nTags: Stählung, Leben, Kontrollverlust.",
			"esES": "Reduce un {3/6/9/12/15/18/21/24/27/30}% la duración de los efectos de pérdida de control. Este efecto se triplica si tienes fortificada más de un 50% de tu vida máxima.\n\nTags: Fortificación, Vida, Control de masas.",
			"esMX": "Reduce un {3/6/9/12/15/18/21/24/27/30}% la duración de los efectos que debilitan el control. Este efecto se triplica mientras tienes más del 50% de tu vida máxima como fortificación.\n\nTags: Fortificar, Vida, Control de multitudes.",
			"frFR": "La durée des effets de perte de contrôle est réduite de {3/6/9/12/15/18/21/24/27/30}%. Cet effet est triplé lorsque vous bénéficiez d'une fortification supérieure à 50% de votre maximum de points de vie.\n\nTags: Fortification, Vie, Perte de contrôle.",
			"itIT": "Riduci la durata degli effetti debilitanti del {3/6/9/12/15/18/21/24/27/30}%. Questo effetto triplica se hai Fortificazione per oltre il 50% della tua Vita massima.\n\nTags: Fortificazione, Vita, Effetti debilitanti.",
			"jaJP": "操作障害効果の持続時間を{3/6/9/12/15/18/21/24/27/30}%短縮する。ライフ最大値の50%を越える強化を受けている間は効果が3倍になる。\n\nTags: 強化, ライフ, 操作障害効果.",
			"koKR": "제어 방해 효과의 지속시간이 {3/6/9/12/15/18/21/24/27/30}% 감소합니다. 최대 생명력의 50%를 넘는 보강을 보유한 동안에는 이 효과가 3배 증가합니다.\n\nTags: 보강, 생명력, 군중 제어.",
			"plPL": "Czas działania ograniczenia kontroli jest skrócony o {3/6/9/12/15/18/21/24/27/30}%. Skuteczność efektu jest potrojona, jeśli wartość twojego umocnienia wynosi ponad 50% twojego maksymalnego zdrowia.\n\nTags: Umocnienie, Zdrowie, Ograniczanie Kontroli.",
			"ptBR": "Reduz a duração dos efeitos de controle em {3/6/9/12/15/18/21/24/27/30}%. O efeito é triplicado enquanto você tiver fortificação em mais de 50% da sua vida máxima.\n\nTags: Fortificação, Vida, Controle de Grupo.",
			"ruRU": "Время действия эффектов контроля сокращается на {3/6/9/12/15/18/21/24/27/30}%. Эффект утраивается, если у вас есть укрепление, превышающее 50% максимального запаса здоровья.\n\nTags: Укрепление, Здоровье, Контроль.",
			"zhCN": "控制类限制效果的持续时间缩短 {3/6/9/12/15/18/21/24/27/30}%。当你获得的强固数值超过 50% 生命上限时, 此效果变为三倍。\n\nTags: 强固, 生命, 群控.",
			"zhTW": "控場效果的持續時間縮短 {3/6/9/12/15/18/21/24/27/30}%。當你具有高於生命值上限 50% 的強韌時,此效果變成三倍。\n\nTags: 強韌, 生命值, 控場."
},
		id: 115,
		maxPoints: 3,
		x: 1046.071,
		y: -0.59
	},
	"Nature's Resolve": {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `{5/10/15/20/25/30/35/40/45/50}% chance when struck to Fortify you for 4.4% Base Life.

Tags: Fortify.`,
		nameLocalized: {
			"deDE": "Entschlossenheit der Natur",
			"esES": "Resolución de la naturaleza",
			"esMX": "Determinación de la Naturaleza",
			"frFR": "Volonté de la Nature",
			"itIT": "Risolutezza della Natura",
			"jaJP": "大自然の決意",
			"koKR": "자연의 결의",
			"plPL": "Determinacja Natury",
			"ptBR": "Determinação da Natureza",
			"ruRU": "Стойкость природы",
			"zhCN": "自然意志",
			"zhTW": "自然決心"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr getroffen werdet, besteht eine Chance von {5/10/15/20/25/30/35/40/45/50}%, Stählung in Höhe von 4.4% Eures Basislebens zu erhalten.\n\nTags: Stählung.",
			"esES": "{5/10/15/20/25/30/35/40/45/50}% de probabilidad fortificar un 4.4% de tu vida base al recibir un golpe.\n\nTags: Fortificación.",
			"esMX": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de probabilidad de fortificarte con 4.4% de tu vida de base cuando te golpean.\n\nTags: Fortificar.",
			"frFR": "Vous avez {5/10/15/20/25/30/35/40/45/50}% de chances d'obtenir un montant de fortification égal à 4.4% de vos points de vie de base lorsque vous vous faites toucher.\n\nTags: Fortification.",
			"itIT": "Probabilità del {5/10/15/20/25/30/35/40/45/50}% di ottenere Fortificazione per il 4.4% della Vita base quando subisci un colpo.\n\nTags: Fortificazione.",
			"jaJP": "攻撃を受けると{5/10/15/20/25/30/35/40/45/50}%の確率で基本ライフの4.4%にあたるの強化を獲得する。\n\nTags: 強化.",
			"koKR": "적중당하면 {5/10/15/20/25/30/35/40/45/50}% 확률로 기본 생명력의 4.4%만큼 보강됩니다.\n\nTags: 보강.",
			"plPL": "{5/10/15/20/25/30/35/40/45/50}% szans na umocnienie równe 4.4% podstawowego zdrowia przy otrzymaniu trafienia.\n\nTags: Umocnienie.",
			"ptBR": "{5/10/15/20/25/30/35/40/45/50}% de chance de fortificar você em 4.4% da vida básica ao receber um golpe.\n\nTags: Fortificação.",
			"ruRU": "Получив урон от атаки, вы с вероятностью {5/10/15/20/25/30/35/40/45/50}% получаете укрепление в объеме 4.4% базового запаса здоровья.\n\nTags: Укрепление.",
			"zhCN": "受到攻击时有 {5/10/15/20/25/30/35/40/45/50}% 几率强固你 4.4% 基础生命。\n\nTags: 强固.",
			"zhTW": "當你被擊中時,有 {5/10/15/20/25/30/35/40/45/50}% 機率賦予你相當於 4.4% 基礎生命值的強韌。\n\nTags: 強韌."
},
		id: 116,
		maxPoints: 3,
		x: 782.325,
		y: 91.16
	},
	"Quickshift": {
		connections: [ "Ultimate", "Natural Fortitude", "Heightened Senses" ],
		description: `When a Shapeshifting Skill transforms you into a different form, it deals x{5/10/15/20/25/30/35/40/45/50}% increased damage.

Tags: Shapeshifting, Damage.`,
		nameLocalized: {
			"deDE": "Schnellwandlung",
			"esES": "Transformación veloz",
			"esMX": "Cambio Rápido",
			"frFR": "Métamorphose rapide",
			"itIT": "Cambio Rapido",
			"jaJP": "瞬間変化",
			"koKR": "빠른 변신",
			"plPL": "Szybka Przemiana",
			"ptBR": "Mudança Rápida",
			"ruRU": "Быстрое преображение",
			"zhCN": "快速变形",
			"zhTW": "迅變"
},
		descriptionLocalized: {
			"deDE": "Wenn eine Verwandlungsfertigkeit Euch eine andere Gestalt verleiht, verursacht sie x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden.\n\nTags: Gestaltwandeln, Schaden.",
			"esES": "Cuando una habilidad de cambio de forma te transforma, inflige un x{5/10/15/20/25/30/35/40/45/50}% más de daño.\n\nTags: Cambio de forma, Daño.",
			"esMX": "Cuando una habilidad de Metamorfosis te cambia a una forma distinta, inflige un x{5/10/15/20/25/30/35/40/45/50}% más de daño.\n\nTags: Metamorfosis, Daño.",
			"frFR": "Lorsqu'une compétence de métamorphose vous fait prendre une autre forme, celle-ci inflige x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires.\n\nTags: Métamorphose, Dégâts.",
			"itIT": "Dopo aver cambiato forma con un'abilità Mutaforma, infliggi il x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi.\n\nTags: Mutaforma, Danni.",
			"jaJP": "変身スキルによって別の形態に変わった際、敵に与えるダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: 変身, ダメージ.",
			"koKR": "변신 기술의 효과로 다른 형상으로 변신하면 해당 기술로 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 변신, 피해.",
			"plPL": "Kiedy umiejętność Zmiennokształtności zmienia twoją formę, zadaje ona obrażenia zwiększone o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Zmiennokształtność, Obrażenia.",
			"ptBR": "Quando uma habilidade de Metamorfose transforma você em uma forma diferente, ela causa {5/10/15/20/25/30/35/40/45/50}% de dano aumentado.\n\nTags: Metamorfose, Dano.",
			"ruRU": "Если умение смены облика заставляет вас совершить превращение, оно наносит на x{5/10/15/20/25/30/35/40/45/50}% больше урона.\n\nTags: Смена облика, Урон.",
			"zhCN": "当变形技能使你变为另一个形态, 该技能造成的伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 变形, 伤害.",
			"zhTW": "當你使用變形技能改變形態,該技能造成的傷害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 變形, 傷害."
},
		id: 117,
		maxPoints: 3,
		x: -406.14,
		y: 294.95
	},
	"Natural Fortitude": {
		connections: [ "Quickshift" ],
		description: `Shapeshifting Fortifies you for {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% Base Life.

Tags: Fortify, Shapeshifting.`,
		nameLocalized: {
			"deDE": "Natürliche Stärke",
			"esES": "Entereza natural",
			"esMX": "Fortaleza Natural",
			"frFR": "Vigueur naturelle",
			"itIT": "Fortezza Naturale",
			"jaJP": "天性の忍耐力",
			"koKR": "자연의 인내",
			"plPL": "Hart Natury",
			"ptBR": "Fortitude Natural",
			"ruRU": "Природная выносливость",
			"zhCN": "自然坚毅",
			"zhTW": "自然剛毅"
},
		descriptionLocalized: {
			"deDE": "Gestaltwandeln verleiht Euch Stählung in Höhe von {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% Eures Basislebens.\n\nTags: Stählung, Gestaltwandeln.",
			"esES": "Cambiar de forma te otorga un {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% de tu vida base como fortificación.\n\nTags: Fortificación, Cambio de forma.",
			"esMX": "Cambiar de forma te fortifica con un {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% de tu vida de base.\n\nTags: Fortificar, Metamorfosis.",
			"frFR": "Vous métamorphoser vous confère un montant de fortification égal à {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% de vos points de vie de base.\n\nTags: Fortification, Métamorphose.",
			"itIT": "Mutare forma ti fornisce Fortificazione per il {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% della Vita base.\n\nTags: Fortificazione, Mutaforma.",
			"jaJP": "〈変身〉すると基本ライフの{1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}%にあたるの強化を獲得する。\n\nTags: 強化, 変身.",
			"koKR": "변신하면 기본 생명력의 {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}%만큼 보강됩니다.\n\nTags: 보강, 변신.",
			"plPL": "Zmiana kształtu zapewnia umocnienie równe {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% twojego podstawowego zdrowia.\n\nTags: Umocnienie, Zmiennokształtność.",
			"ptBR": "Metamorfose fortifica você em {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% da vida básica.\n\nTags: Fortificação, Metamorfose.",
			"ruRU": "При смене облика вы получаете укрепление в объеме {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% базового запаса здоровья.\n\nTags: Укрепление, Смена облика.",
			"zhCN": "变形强固你 {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% 基础生命。\n\nTags: 强固, 变形.",
			"zhTW": "變形使你獲得相當於 {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% 基礎生命值的強韌。\n\nTags: 強韌, 變形."
},
		id: 118,
		maxPoints: 3,
		x: -565.17,
		y: 421.475
	},
	"Heightened Senses": {
		connections: [ "Quickshift" ],
		description: `Upon Shapeshifting into a Werewolf or Werebear, gain {4/8/12/16/20/24/28/32/36/40}% Damage Reduction against Elites for 5 seconds.

Tags: Damage Reduction, Shapeshifting, Elite Monsters, Werebear, Werewolf.`,
		nameLocalized: {
			"deDE": "Geschärfte Sinne",
			"esES": "Sentidos agudizados",
			"esMX": "Sentidos Agudizados",
			"frFR": "Sens aiguisés",
			"itIT": "Sensi Amplificati",
			"jaJP": "警戒心",
			"koKR": "향상된 감각",
			"plPL": "Wyostrzone Zmysły",
			"ptBR": "Sentidos Aguçados",
			"ruRU": "Обостренные чувства",
			"zhCN": "敏锐感知",
			"zhTW": "增強感官"
},
		descriptionLocalized: {
			"deDE": "Bei der Verwandlung in einen Werwolf oder Werbären erhaltet Ihr 5 Sek. lang {4/8/12/16/20/24/28/32/36/40}% Schadensreduktion gegen Elitegegner.\n\nTags: Schadensreduktion, Gestaltwandeln, Elitemonster, Werbär, Werwolf.",
			"esES": "Al transformarte en un hombre lobo o un hombre oso, obtienes un {4/8/12/16/20/24/28/32/36/40}% de reducción de daño contra enemigos de élite durante 5 s.\n\nTags: Reducción de daño, Cambio de forma, Enemigos de élite, Hombre oso, Hombre lobo.",
			"esMX": "Al cambiar de forma a hombre lobo u oso, obtienes un {4/8/12/16/20/24/28/32/36/40}% de reducción de daño contra enemigos de Élite durante 5 segundos.\n\nTags: Reducción de daño, Metamorfosis, Monstruos de Élite, Hombre oso, Hombre lobo.",
			"frFR": "Lorsque vous vous métamorphosez en lycanthrope ou en ursoïde, vous obtenez {4/8/12/16/20/24/28/32/36/40}% de réduction des dégâts contre les élites pendant 5 s.\n\nTags: Réduction des dégâts, Métamorphose, Monstres élites, Ursoïde, Lycanthrope.",
			"itIT": "Quando muti in forma di Lupo Mannaro o Orso Mannaro, ottieni il {4/8/12/16/20/24/28/32/36/40}% di riduzione danni contro nemici élite per 5 s.\n\nTags: Riduzione danni, Mutaforma, Mostri élite, Orso Mannaro, Lupo Mannaro.",
			"jaJP": "人狼または人熊に変身する際、エリートから受けるダメージが5秒間{4/8/12/16/20/24/28/32/36/40}%軽減される。\n\nTags: ダメージ減少, 変身, エリートモンスター, 人熊, 人狼.",
			"koKR": "늑대인간 또는 곰인간으로 변신하면 5초 동안 {4/8/12/16/20/24/28/32/36/40}%의 정예에 대한 피해 감소를 얻습니다.\n\nTags: 피해 감소, 변신, 정예 괴물, 곰인간, 늑대인간.",
			"plPL": "Po przemianie w wilkołaka lub niedźwiedziołaka otrzymujesz przez 5 sek. {4/8/12/16/20/24/28/32/36/40}% redukcji obrażeń od wrogów elitarnych.\n\nTags: Redukcja Obrażeń, Zmiennokształtność, Elitarne Potwory, Niedźwiedziołak, Wilkołak.",
			"ptBR": "Ao se transformar em lobisomem ou urso, recebe {4/8/12/16/20/24/28/32/36/40}% de redução de dano contra elites por 5 segundos.\n\nTags: Redução de Dano, Metamorfose, Monstros de Elite, Urso, Lobisomem.",
			"ruRU": "Когда вы принимаете облик волка или медведя, получаемый вами урон от особых противников уменьшается на {4/8/12/16/20/24/28/32/36/40}% на 5 сек.\n\nTags: Уменьшение урона, Смена облика, Особые монстры, Медведь, Облик волка.",
			"zhCN": "变成狼人或熊人时, 获得 {4/8/12/16/20/24/28/32/36/40}%对精英怪的伤害减免, 持续 5 秒。\n\nTags: 伤害减免, 变形, 精英怪物, 熊人, 狼人.",
			"zhTW": "變形為狼人或熊人時,獲得對精英怪的 {4/8/12/16/20/24/28/32/36/40}% 傷害減免效果,持續 5 秒。\n\nTags: 傷害減免, 變形, 精英怪物, 熊人, 狼人."
},
		id: 119,
		maxPoints: 3,
		x: -254.14,
		y: 423.295
	},
	"Lacerate": {
		connections: [ "Ultimate", "Prime Lacerate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 7%
Shapeshift into a Werewolf, become Immune and quickly dash 10 times between enemies in the area dealing up to 400% damage.

Tags: Ultimate, Shapeshifting, Werewolf, Immune, Physical, Damage, Cooldown, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Zerreißen",
			"esES": "Lacerar",
			"esMX": "Lacerar",
			"frFR": "Lacération",
			"itIT": "Lacerazione",
			"jaJP": "裂傷",
			"koKR": "찢어발기기",
			"plPL": "Rany Szarpane",
			"ptBR": "Lacerar",
			"ruRU": "Раздирание",
			"zhCN": "疯狂撕咬",
			"zhTW": "割裂"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 7%\nVerwandelt Euch in einen Werwolf, werdet immun, springt 10-mal schnell zwischen Gegnern im Wirkungsbereich hin und her und verursacht bis zu 400% Schaden.\n\nTags: Ultimativ, Gestaltwandeln, Werwolf, Immun, Physisch, Schaden, Abklingzeit, Schadensreduktion.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 7%\nTe transformas en un hombre lobo, te vuelves inmune y te desplazas rápidamente 10 veces entre los enemigos cercanos para infligirles hasta 400% de daño.\n\nTags: Definitiva, Cambio de forma, Hombre lobo, Inmune, Física, Daño, Tiempo de reutilización, Reducción de daño.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 7%\nCambias de forma a un hombre lobo, te vuelves inmune, arremetes rápidamente 10 veces entre los enemigos en el área y les infliges hasta 400% de daño.\n\nTags: Máxima, Metamorfosis, Hombre lobo, Inmune, Física, Daño, Recuperación, Reducción de daño.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 7%\nVous vous transformez en lycanthrope, devenez insensible et bondissez 10 fois parmi les adversaires dans la zone, ce qui inflige jusqu'à 400% points de dégâts.\n\nTags: Ultime, Métamorphose, Lycanthrope, Insensible, Dégâts physiques, Dégâts, Temps de recharge, Réduction des dégâts.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 7%\nMuti in un Lupo Mannaro, diventando immune e scattando rapidamente 10 volte tra i nemici vicini, infliggendo fino a 400% danni.\n\nTags: Ultra, Mutaforma, Lupo Mannaro, Immunità, Fisico, Danni, Tempo di recupero, Riduzione danni.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 7%\n人狼に変身して無効状態になり、付近の敵の間を10回素早くダッシュして最大400%のダメージを与える。\n\nTags: 奥義, 変身, 人狼, 無効, 物理, ダメージ, クールダウン, ダメージ減少.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 7%\n늑대인간으로 변신하여 면역 상태가 됩니다. 해당 지역 내의 적 사이를 10회 빠르게 오가며 최대 400%의 피해를 줍니다.\n\nTags: 궁극기, 변신, 늑대인간, 면역, 물리, 피해, 재사용 대기시간, 피해 감소.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 7%\nPrzemieniasz się w wilkołaka, zyskujesz niewrażliwość i błyskawicznie przeskakujesz 10 razy między wrogami na obszarze oraz zadajesz im 400% pkt. obrażeń.\n\nTags: Specjalne, Zmiennokształtność, Wilkołak, Niewrażliwość, Fizyczne, Obrażenia, Odnowienie, Redukcja Obrażeń.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 7%\nTransforma-se em um lobisomem, fica imune e corre rapidamente 10 vezes entre inimigos na área, causando até 400% de dano.\n\nTags: Suprema, Metamorfose, Lobisomem, Imune, Física, Dano, Recarga, Redução de Dano.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 7%.\nВы принимаете облик волка, получаете невосприимчивость и совершаете 10 стремительных рывка:стремительных рывков между ближайшими противниками, нанося до 400% ед. урона.\n\nTags: Мощное умение, Смена облика, Облик волка, Невосприимчивость, Физический урон, Урон, Время восстановления, Уменьшение урона.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 7%\n变成狼人, 获得免疫并在区域内的敌人身边快速冲刺 10 次, 最多造成 400% 点伤害。\n\nTags: 终极技能, 变形, 狼人, 免疫, 物理, 伤害, 冷却时间, 伤害减免.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:7%\n變身為狼人,進入免疫狀態,並快速在範圍內的敵人之間衝刺 10 次,造成最多 400% 點傷害。\n\nTags: 絕招, 變形, 狼人, 免疫, 物理, 傷害, 冷卻時間, 傷害減免."
},
		id: 120,
		maxPoints: 1,
		values: [ "45" ],
		x: -581.85,
		y: 142.205
	},
	"Prime Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Supreme Lacerate", "Lacerate" ],
		description: `Each time Lacerate deals a Critical Strike, Heal for 3% Maximum Life.

Tags: Ultimate, Shapeshifting, Werewolf, Immune, Physical, Damage, Cooldown, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Oberstes Zerreißen",
			"esES": "Lacerar mayor",
			"esMX": "Laceración Suprema",
			"frFR": "Lacération primordiale",
			"itIT": "Lacerazione Pregiata",
			"jaJP": "裂傷(上級)",
			"koKR": "극상의 찢어발기기",
			"plPL": "Większe Rany Szarpane",
			"ptBR": "Lacerar Primordial",
			"ruRU": "Первородное раздирание",
			"zhCN": "至尊疯狂撕咬",
			"zhTW": "強烈割裂"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Zerreißen einen kritischen Treffer erzielt, werdet Ihr um 3% eures maximalen Lebens geheilt.\n\nTags: Ultimativ, Gestaltwandeln, Werwolf, Immun, Physisch, Schaden, Abklingzeit, Schadensreduktion.",
			"esES": "Cada vez que Lacerar asesta un golpe crítico, te curas un 3% de tu vida máxima.\n\nTags: Definitiva, Cambio de forma, Hombre lobo, Inmune, Física, Daño, Tiempo de reutilización, Reducción de daño.",
			"esMX": "Cada vez que asestas un golpe crítico con Lacerar, te sanas por un 3% de tu vida máxima.\n\nTags: Máxima, Metamorfosis, Hombre lobo, Inmune, Física, Daño, Recuperación, Reducción de daño.",
			"frFR": "Chaque fois que Lacération inflige un coup critique, vous récupérez 3% de votre maximum de points de vie.\n\nTags: Ultime, Métamorphose, Lycanthrope, Insensible, Dégâts physiques, Dégâts, Temps de recharge, Réduction des dégâts.",
			"itIT": "Ogni volta che Lacerazione infligge danni critici, ti cura del 3% della tua Vita massima.\n\nTags: Ultra, Mutaforma, Lupo Mannaro, Immunità, Fisico, Danni, Tempo di recupero, Riduzione danni.",
			"jaJP": "〈裂傷〉で敵にクリティカルヒットを与えるたびに、ライフ最大値の3%にあたる回復する。\n\nTags: 奥義, 変身, 人狼, 無効, 物理, ダメージ, クールダウン, ダメージ減少.",
			"koKR": "찢어발기기로 적에게 극대화 피해를 줄 때마다 최대 생명력의 3%만큼 생명력을 회복합니다.\n\nTags: 궁극기, 변신, 늑대인간, 면역, 물리, 피해, 재사용 대기시간, 피해 감소.",
			"plPL": "Za każdym razem, gdy Rany Szarpane wywołują trafienie krytyczne, odzyskujesz 3% maksymalnego zdrowia.\n\nTags: Specjalne, Zmiennokształtność, Wilkołak, Niewrażliwość, Fizyczne, Obrażenia, Odnowienie, Redukcja Obrażeń.",
			"ptBR": "Sempre que Lacerar causa um acerto crítico, cura 3% da vida máxima.\n\nTags: Suprema, Metamorfose, Lobisomem, Imune, Física, Dano, Recarga, Redução de Dano.",
			"ruRU": "Каждый раз, когда \"Раздирание\" наносит критический удар, вы восполняете 3% максимального запаса здоровья.\n\nTags: Мощное умение, Смена облика, Облик волка, Невосприимчивость, Физический урон, Урон, Время восстановления, Уменьшение урона.",
			"zhCN": "疯狂撕咬每次对敌人造成暴击都会为你恢复 3% 生命上限。\n\nTags: 终极技能, 变形, 狼人, 免疫, 物理, 伤害, 冷却时间, 伤害减免.",
			"zhTW": "割裂每次造成爆擊時,使你恢復生命值上限的 3%。\n\nTags: 絕招, 變形, 狼人, 免疫, 物理, 傷害, 冷卻時間, 傷害減免."
},
		id: 121,
		maxPoints: 1,
		x: -953.225,
		y: 146.245
	},
	"Supreme Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Prime Lacerate" ],
		description: `Lacerate's initial strike is guaranteed to Critically Strike and deals x150% increased damage.

Tags: Ultimate, Shapeshifting, Werewolf, Immune, Physical, Damage, Cooldown, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Überlegenes Zerreißen",
			"esES": "Lacerar supremo",
			"esMX": "Laceración Superior",
			"frFR": "Lacération suprême",
			"itIT": "Lacerazione Suprema",
			"jaJP": "裂傷(高級)",
			"koKR": "최고의 찢어발기기",
			"plPL": "Największe Rany Szarpane",
			"ptBR": "Lacerar Supremo",
			"ruRU": "Неотвратимое раздирание",
			"zhCN": "至极疯狂撕咬",
			"zhTW": "終極割裂"
},
		descriptionLocalized: {
			"deDE": "Der erste Treffer mit Zerreißen erzielt garantiert einen kritischen Treffer und verursacht x150% mehr Schaden.\n\nTags: Ultimativ, Gestaltwandeln, Werwolf, Immun, Physisch, Schaden, Abklingzeit, Schadensreduktion.",
			"esES": "El golpe inicial de Lacerar es un golpe crítico garantizado e inflige un x150% más de daño.\n\nTags: Definitiva, Cambio de forma, Hombre lobo, Inmune, Física, Daño, Tiempo de reutilización, Reducción de daño.",
			"esMX": "El golpe inicial de Lacerar es un golpe crítico garantizado e inflige un x150% más de daño.\n\nTags: Máxima, Metamorfosis, Hombre lobo, Inmune, Física, Daño, Recuperación, Reducción de daño.",
			"frFR": "La frappe initiale de Lacération est un coup critique garanti et inflige x150% de points de dégâts supplémentaires.\n\nTags: Ultime, Métamorphose, Lycanthrope, Insensible, Dégâts physiques, Dégâts, Temps de recharge, Réduction des dégâts.",
			"itIT": "Il colpo iniziale di Lacerazione infligge un colpo critico garantito e infligge danni aumentati del x150%.\n\nTags: Ultra, Mutaforma, Lupo Mannaro, Immunità, Fisico, Danni, Tempo di recupero, Riduzione danni.",
			"jaJP": "〈裂傷〉の最初の一撃が必ずクリティカルヒットになり、与えるダメージがx150%増加する。\n\nTags: 奥義, 変身, 人狼, 無効, 物理, ダメージ, クールダウン, ダメージ減少.",
			"koKR": "찢어발기기의 최초 공격이 확정적으로 극대화로 적중하고, 주는 피해가 x150% 증가합니다.\n\nTags: 궁극기, 변신, 늑대인간, 면역, 물리, 피해, 재사용 대기시간, 피해 감소.",
			"plPL": "Pierwsze trafienie Ranami Szarpanymi jest gwarantowanym trafieniem krytycznym i zadaje obrażenia zwiększone o x150%.\n\nTags: Specjalne, Zmiennokształtność, Wilkołak, Niewrażliwość, Fizyczne, Obrażenia, Odnowienie, Redukcja Obrażeń.",
			"ptBR": "O golpe inicial de Lacerar desfere um acerto crítico garantido e causa 150% de dano aumentado.\n\nTags: Suprema, Metamorfose, Lobisomem, Imune, Física, Dano, Recarga, Redução de Dano.",
			"ruRU": "Первый удар \"Раздирания\" гарантированно наносит критический урон, увеличенный на x150%.\n\nTags: Мощное умение, Смена облика, Облик волка, Невосприимчивость, Физический урон, Урон, Время восстановления, Уменьшение урона.",
			"zhCN": "疯狂撕咬的初始打击必定暴击并且造成的伤害提高 x150%。\n\nTags: 终极技能, 变形, 狼人, 免疫, 物理, 伤害, 冷却时间, 伤害减免.",
			"zhTW": "割裂的第一擊必定爆擊,且造成的傷害提高 x150%。\n\nTags: 絕招, 變形, 狼人, 免疫, 物理, 傷害, 冷卻時間, 傷害減免."
},
		id: 122,
		maxPoints: 1,
		x: -1155.4,
		y: 290.655
	},
	"Cataclysm": {
		connections: [ "Ultimate", "Prime Cataclysm" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: 62.175%
A massive storm follows you for 8 seconds. Twisters Knock Back enemies, and lightning strikes wildly dealing 52% damage.

Tags: Ultimate, Nature Magic, Storm, Lightning, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Kataklysmus",
			"esES": "Cataclismo",
			"esMX": "Cataclismo",
			"frFR": "Cataclysme",
			"itIT": "Cataclisma",
			"jaJP": "大変動",
			"koKR": "대격변",
			"plPL": "Kataklizm",
			"ptBR": "Cataclismo",
			"ruRU": "Катаклизм",
			"zhCN": "浩劫",
			"zhTW": "災變"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: 62.175%\nEin massiver Sturm folgt Euch 8 Sek. lang. Wirbel stoßen Gegner zurück und wilde Blitzschläge verursachen 52% Schaden.\n\nTags: Ultimativ, Naturmagie, Sturm, Blitz, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: 62.175%\nDurante 8 s, te sigue una enorme tormenta con remolinos que repelen a los enemigos y violentos relámpagos que infligen 52% de daño.\n\nTags: Definitiva, Magia de la naturaleza, Tormenta, Rayos, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: 62.175%\nUna gran tormenta te sigue durante 8 segundos. Los torbellinos repelen a los enemigos, y caen relámpagos terribles que infligen 52% de daño.\n\nTags: Máxima, Magia de la naturaleza, Tormenta, Rayo, Daño, Recuperación, Control de multitudes.",
			"frFR": "Temps de recharge: {#} s\nChances d'obtenir un coup de chance: 62.175%\nUne énorme tempête vous suit pendant 8 s. Des tornades repoussent les adversaires et des coups de foudre s'abattent violemment du ciel en infligeant 52% points de dégâts.\n\nTags: Ultime, Magie naturelle, Tempête, Foudre, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: 62.175%\nUna gigantesca tempesta ti segue per 8 s. I tornado respingono i nemici e i fulmini colpiscono selvaggiamente infliggendo 52% danni.\n\nTags: Ultra, Magia naturale, Tempesta, Fulmine, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: 62.175%\n巨大な嵐が8秒間、自分の後をついて来る。旋風が敵をノックバックさせ、強烈な稲妻が52%のダメージを与える。\n\nTags: 奥義, 自然魔法, 嵐, 稲妻, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: 62.175%\n8초 동안 거대한 폭풍이 드루이드를 따라다닙니다. 돌개바람이 적을 밀쳐내고 번개가 마구 내리쳐 52%의 피해를 줍니다.\n\nTags: 궁극기, 자연 마법, 폭풍, 번개, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: 62.175%\nPotężna burza podąża za tobą przez 8 sek. Tornada odrzucają wrogów, a wokół uderzają pioruny, zadając 52% pkt. obrażeń.\n\nTags: Specjalne, Magia Natury, Burza, Błyskawica, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: 62.175%\nUma enorme tempestade segue você por 8 segundos. Ciclones repelem os inimigos e raios são lançados descontroladamente, causando 52% de dano.\n\nTags: Suprema, Magia da Natureza, Tempestade, Eletricidade, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: 62.175%.\nПризывает разрушительную бурю, которая следует за вами в течение 8 сек. Появляющиеся вихри отбрасывают противников, а яростные разряды молнии наносят целям 52% ед. урона.\n\nTags: Мощное умение, Силы природы, Буря, Молния, Урон, Время восстановления, Контроль.",
			"zhCN": "冷却时间: {#} 秒\n幸运一击几率: 62.175%\n一场巨大的风暴跟随着你, 持续 8 秒。龙卷风会击退敌人, 并用闪电狂野地打击敌人, 造成 52% 点伤害。\n\nTags: 终极技能, 自然魔法, 风暴, 闪电, 伤害, 冷却时间, 群控.",
			"zhTW": "冷卻時間:{#} 秒\n幸運觸發機率:62.175%\n巨大風暴會跟隨著你,持續 8 秒。旋風術會擊退敵人,並降下猛烈閃電造成 52% 點傷害。\n\nTags: 絕招, 自然魔法, 風暴, 電擊, 傷害, 冷卻時間, 控場."
},
		id: 123,
		maxPoints: 1,
		values: [ "60" ],
		x: -581.665,
		y: -104.025
	},
	"Prime Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Supreme Cataclysm", "Cataclysm" ],
		description: `Cataclysm's duration is increased by 2 seconds.

Tags: Ultimate, Nature Magic, Storm, Lightning, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Oberster Kataklysmus",
			"esES": "Cataclismo mayor",
			"esMX": "Cataclismo Supremo",
			"frFR": "Cataclysme primordial",
			"itIT": "Cataclisma Pregiato",
			"jaJP": "大変動(上級)",
			"koKR": "극상의 대격변",
			"plPL": "Większy Kataklizm",
			"ptBR": "Cataclismo Primordial",
			"ruRU": "Первозданный катаклизм",
			"zhCN": "至尊浩劫",
			"zhTW": "強烈災變"
},
		descriptionLocalized: {
			"deDE": "Die Dauer von Kataklysmus wird um 2 Sek. erhöht.\n\nTags: Ultimativ, Naturmagie, Sturm, Blitz, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "La duración de Cataclismo aumenta 2 s.\n\nTags: Definitiva, Magia de la naturaleza, Tormenta, Rayos, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "La duración de Cataclismo aumenta 2 segundos.\n\nTags: Máxima, Magia de la naturaleza, Tormenta, Rayo, Daño, Recuperación, Control de multitudes.",
			"frFR": "La durée de Cataclysme est augmentée de 2 s.\n\nTags: Ultime, Magie naturelle, Tempête, Foudre, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "La durata di Cataclisma aumenta di 2 s.\n\nTags: Ultra, Magia naturale, Tempesta, Fulmine, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈大変動〉の持続時間が2秒増加する。\n\nTags: 奥義, 自然魔法, 嵐, 稲妻, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "대격변의 지속시간이 2초 증가합니다.\n\nTags: 궁극기, 자연 마법, 폭풍, 번개, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Czas działania Kataklizmu jest wydłużony o 2 sek.\n\nTags: Specjalne, Magia Natury, Burza, Błyskawica, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "A duração de Cataclismo é aumentada em 2 segundos.\n\nTags: Suprema, Magia da Natureza, Tempestade, Eletricidade, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Время действия \"Катаклизма\" увеличивается на 2 сек.\n\nTags: Мощное умение, Силы природы, Буря, Молния, Урон, Время восстановления, Контроль.",
			"zhCN": "浩劫的持续时间延长 2 秒。\n\nTags: 终极技能, 自然魔法, 风暴, 闪电, 伤害, 冷却时间, 群控.",
			"zhTW": "災變持續時間延長 2 秒。\n\nTags: 絕招, 自然魔法, 風暴, 電擊, 傷害, 冷卻時間, 控場."
},
		id: 124,
		maxPoints: 1,
		x: -951.14,
		y: -111.45
	},
	"Supreme Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Prime Cataclysm" ],
		description: `Lightning strikes from Cataclysm make enemies Vulnerable for 2 seconds.

Tags: Ultimate, Nature Magic, Storm, Lightning, Damage, Cooldown, Crowd Control.`,
		nameLocalized: {
			"deDE": "Überlegener Kataklysmus",
			"esES": "Cataclismo supremo",
			"esMX": "Cataclismo Superior",
			"frFR": "Cataclysme suprême",
			"itIT": "Cataclisma Supremo",
			"jaJP": "大変動(高級)",
			"koKR": "최고의 대격변",
			"plPL": "Największy Kataklizm",
			"ptBR": "Cataclismo Supremo",
			"ruRU": "Неотвратимый катаклизм",
			"zhCN": "至极浩劫",
			"zhTW": "終極災變"
},
		descriptionLocalized: {
			"deDE": "Von Kataklysmus verursachte Blitzschläge machen Gegner 2 Sek. lang verwundbar.\n\nTags: Ultimativ, Naturmagie, Sturm, Blitz, Schaden, Abklingzeit, Kontrollverlust.",
			"esES": "Los relámpagos de Cataclismo hacen que los enemigos se vuelvan vulnerables durante 2 s.\n\nTags: Definitiva, Magia de la naturaleza, Tormenta, Rayos, Daño, Tiempo de reutilización, Control de masas.",
			"esMX": "Los relámpagos de Cataclismo vuelven a los enemigos vulnerables durante 2 segundos.\n\nTags: Máxima, Magia de la naturaleza, Tormenta, Rayo, Daño, Recuperación, Control de multitudes.",
			"frFR": "Les coups de foudre de Cataclysme rendent les adversaires vulnérables pendant 2 s.\n\nTags: Ultime, Magie naturelle, Tempête, Foudre, Dégâts, Temps de recharge, Perte de contrôle.",
			"itIT": "I fulmini di Cataclisma rendono i nemici vulnerabili per 2 s.\n\nTags: Ultra, Magia naturale, Tempesta, Fulmine, Danni, Tempo di recupero, Effetti debilitanti.",
			"jaJP": "〈大変動〉から放たれた稲妻が敵を2秒間、脆弱状態にする。\n\nTags: 奥義, 自然魔法, 嵐, 稲妻, ダメージ, クールダウン, 操作障害効果.",
			"koKR": "대격변의 번개가 적을 2초 동안 취약하게 만듭니다.\n\nTags: 궁극기, 자연 마법, 폭풍, 번개, 피해, 재사용 대기시간, 군중 제어.",
			"plPL": "Uderzenia błyskawicy wywołane przez Kataklizm sprawiają, że wrogowie stają się odsłonięci na 2 sek.\n\nTags: Specjalne, Magia Natury, Burza, Błyskawica, Obrażenia, Odnowienie, Ograniczanie Kontroli.",
			"ptBR": "Os raios de Cataclismo tornam os inimigos vulneráveis por 2 segundos.\n\nTags: Suprema, Magia da Natureza, Tempestade, Eletricidade, Dano, Recarga, Controle de Grupo.",
			"ruRU": "Удары молнии от \"Катаклизма\" делают противников уязвимыми на 2 сек.\n\nTags: Мощное умение, Силы природы, Буря, Молния, Урон, Время восстановления, Контроль.",
			"zhCN": "浩劫造成的闪电打击会使敌人陷入易伤状态, 持续 2 秒。\n\nTags: 终极技能, 自然魔法, 风暴, 闪电, 伤害, 冷却时间, 群控.",
			"zhTW": "災變的閃電使敵人易傷 2 秒。\n\nTags: 絕招, 自然魔法, 風暴, 電擊, 傷害, 冷卻時間, 控場."
},
		id: 125,
		maxPoints: 1,
		x: -1152.59,
		y: -253.34
	},
	"Defiance": {
		connections: [ "Ultimate", "Circle of Life", "Natural Disaster" ],
		description: `Nature Magic Skills deal x{4/8/12/16/20/24/28/32/36/40}% increased damage to Elites.

Tags: Damage, Elite Monsters, Nature Magic.`,
		nameLocalized: {
			"deDE": "Trotz",
			"esES": "Desafío",
			"esMX": "Rebeldía",
			"frFR": "Résistance",
			"itIT": "Ribellione",
			"jaJP": "反逆",
			"koKR": "반항",
			"plPL": "Śmiałość",
			"ptBR": "Desafio",
			"ruRU": "Непокорность",
			"zhCN": "蔑视",
			"zhTW": "反抗"
},
		descriptionLocalized: {
			"deDE": "Naturmagiefertigkeiten fügen Elitegegnern x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden zu.\n\nTags: Schaden, Elitemonster, Naturmagie.",
			"esES": "Las habilidades de magia de la naturaleza infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño a enemigos de élite.\n\nTags: Daño, Enemigos de élite, Magia de la naturaleza.",
			"esMX": "Las habilidades de Magia de la Naturaleza infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño a los enemigos de Élite.\n\nTags: Daño, Monstruos de Élite, Magia de la naturaleza.",
			"frFR": "Les compétences de magie naturelle infligent x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires aux élites.\n\nTags: Dégâts, Monstres élites, Magie naturelle.",
			"itIT": "Le abilità di Magia naturale infliggono il x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi ai nemici élite.\n\nTags: Danni, Mostri élite, Magia naturale.",
			"jaJP": "エリートに自然魔術スキルで与えるダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n\nTags: ダメージ, エリートモンスター, 自然魔法.",
			"koKR": "자연 마법 기술로 정예에게 주는 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 피해, 정예 괴물, 자연 마법.",
			"plPL": "Umiejętności Magii Natury zadają wrogom elitarnym obrażenia zwiększone o x{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Obrażenia, Elitarne Potwory, Magia Natury.",
			"ptBR": "Habilidades de Magia da Natureza causam {4/8/12/16/20/24/28/32/36/40}% de dano aumentado contra elites.\n\nTags: Dano, Monstros de Elite, Magia da Natureza.",
			"ruRU": "Умения сил природы наносят на x{4/8/12/16/20/24/28/32/36/40}% больше урона особым противникам.\n\nTags: Урон, Особые монстры, Силы природы.",
			"zhCN": "自然魔法技能对精英怪造成的伤害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 伤害, 精英怪物, 自然魔法.",
			"zhTW": "自然魔法技能對精英怪的傷害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 傷害, 精英怪物, 自然魔法."
},
		id: 126,
		maxPoints: 3,
		x: -433.135,
		y: -261.99
	},
	"Circle of Life": {
		connections: [ "Defiance", "Resonance" ],
		description: `Nature Magic Skills that consume Spirit Heal you for {1/2/3/4/5/6/7/8/9/10}% of your Maximum Life.

Tags: Healing, Nature Magic, Spirit.`,
		nameLocalized: {
			"deDE": "Kreis des Lebens",
			"esES": "Círculo de la vida",
			"esMX": "Círculo de la Vida",
			"frFR": "Cycle de la vie",
			"itIT": "Cerchio della Vita",
			"jaJP": "生命の輪",
			"koKR": "생명의 순환",
			"plPL": "Krąg Życia",
			"ptBR": "Círculo da Vida",
			"ruRU": "Круг жизни",
			"zhCN": "生命循环",
			"zhTW": "生生不息"
},
		descriptionLocalized: {
			"deDE": "Naturmagiefertigkeiten, die Geisteskraft verbrauchen, heilen Euch um {1/2/3/4/5/6/7/8/9/10}% Eures maximalen Lebens.\n\nTags: Heilung, Naturmagie, Geisteskraft.",
			"esES": "Las habilidades de magia de la naturaleza que consumen espíritu te curan un {1/2/3/4/5/6/7/8/9/10}% de tu vida máxima.\n\nTags: Curación, Magia de la naturaleza, Espíritu.",
			"esMX": "Las habilidades de Magia de la Naturaleza que consumen Espíritu te sanan por un {1/2/3/4/5/6/7/8/9/10}% de tu vida máxima.\n\nTags: Sanación, Magia de la naturaleza, Espíritu.",
			"frFR": "Les compétences de magie naturelle qui consomment de l'esprit vous rendent {1/2/3/4/5/6/7/8/9/10}% de votre maximum de points de vie.\n\nTags: Soins, Magie naturelle, Esprit.",
			"itIT": "Le abilità di Magia naturale che consumano spirito ti curano del {1/2/3/4/5/6/7/8/9/10}% della tua Vita massima.\n\nTags: Guarigione, Magia naturale, Spirito.",
			"jaJP": "精神力を消費する自然魔法スキル使用時、ライフ最大値の{1/2/3/4/5/6/7/8/9/10}%にあたるを回復する。\n\nTags: 回復, 自然魔法, 精神力.",
			"koKR": "영력을 소모하는 자연 마법 기술을 사용하면 생명력을 최대 생명력의 {1/2/3/4/5/6/7/8/9/10}%만큼 회복합니다.\n\nTags: 치유, 자연 마법, 영력.",
			"plPL": "Umiejętności Magii Natury, które zużywają siłę duchową, przywracają ci {1/2/3/4/5/6/7/8/9/10}% maksymalnego zdrowia.\n\nTags: Leczenie, Magia Natury, Siła Duchowa.",
			"ptBR": "Habilidades de Magia da Natureza que consomem espírito curam {1/2/3/4/5/6/7/8/9/10}% da sua vida máxima.\n\nTags: Cura, Magia da Natureza, Espírito.",
			"ruRU": "Умения сил природы, расходующие дух, восполняют вам {1/2/3/4/5/6/7/8/9/10}% максимального запаса здоровья.\n\nTags: Исцеление, Силы природы, Дух.",
			"zhCN": "消耗灵力的自然魔法技能恢复你 {1/2/3/4/5/6/7/8/9/10}% 生命上限。\n\nTags: 治疗, 自然魔法, 灵力.",
			"zhTW": "消耗靈力的自然魔法技能可使你恢復生命值上限的 {1/2/3/4/5/6/7/8/9/10}%。\n\nTags: 治療, 自然魔法, 靈力."
},
		id: 127,
		maxPoints: 3,
		x: -603.125,
		y: -405.69
	},
	"Resonance": {
		connections: [ "Natural Disaster", "Circle of Life" ],
		description: `Nature Magic Skills deal x{2/4/6/8/10/12/14/16/18/20}% increased damage. Triple this bonus if an Earth Skill is the next Skill cast after a Storm Skill, or a Storm Skill is the next Skill cast after an Earth Skill.

Tags: Damage, Nature Magic, Earth, Storm.`,
		nameLocalized: {
			"deDE": "Resonanz",
			"esES": "Resonancia",
			"esMX": "Resonancia",
			"frFR": "Résonance",
			"itIT": "Risonanza",
			"jaJP": "共鳴",
			"koKR": "공명",
			"plPL": "Rezonans",
			"ptBR": "Ressonância",
			"ruRU": "Резонанс",
			"zhCN": "共鸣",
			"zhTW": "共鳴"
},
		descriptionLocalized: {
			"deDE": "Naturmagiefertigkeiten verursachen x{2/4/6/8/10/12/14/16/18/20}% mehr Schaden. Dieser Bonus verdreifacht sich, wenn nach einer Sturmfertigkeit eine Erdfertigkeit gewirkt wird oder nach einer Erdfertigkeit eine Sturmfertigkeit gewirkt wird.\n\nTags: Schaden, Naturmagie, Erde, Sturm.",
			"esES": "Las habilidades de magia de la naturaleza infligen un x{2/4/6/8/10/12/14/16/18/20}% más de daño. Este bonus se triplica si se lanza una habilidad de tierra después de una habilidad de tormenta y viceversa.\n\nTags: Daño, Magia de la naturaleza, Tierra, Tormenta.",
			"esMX": "Las habilidades de Magia de la Naturaleza infligen un x{2/4/6/8/10/12/14/16/18/20}% más de daño. La bonificación se triplica si después de una habilidad de Tormenta se lanza una habilidad de Tierra, o bien si después de una habilidad de Tierra se lanza una habilidad de Tormenta.\n\nTags: Daño, Magia de la naturaleza, Tierra, Tormenta.",
			"frFR": "Les compétences de magie naturelle infligent x{2/4/6/8/10/12/14/16/18/20}% de dégâts supplémentaires. Ce bonus est triplé si une compétence de terre est lancée juste après une compétence de tempête, ou si une compétence de tempête est lancée juste après une compétence de terre.\n\nTags: Dégâts, Magie naturelle, Terre, Tempête.",
			"itIT": "Le abilità di Magia naturale infliggono il x{2/4/6/8/10/12/14/16/18/20}% di danni aggiuntivi. Il bonus triplica se un'abilità di Terra viene lanciata subito dopo un'abilità di Tempesta, o se un'abilità di tempesta viene lanciata subito dopo un'abilità di terra.\n\nTags: Danni, Magia naturale, Terra, Tempesta.",
			"jaJP": "自然魔法の与えるダメージがx{2/4/6/8/10/12/14/16/18/20}%増加する。嵐スキルの次に土スキルを使った場合と、土スキルの次に嵐スキルを使った場合は、このボーナスが3倍になる。\n\nTags: ダメージ, 自然魔法, 地, 嵐.",
			"koKR": "자연 마법 기술로 주는 피해가 x{2/4/6/8/10/12/14/16/18/20}% 증가합니다. 폭풍 기술을 시전한 다음 대지 기술을 시전하거나, 대지 기술을 시전한 다음 폭풍 기술을 시전하는 경우 효과가 3배 증가합니다.\n\nTags: 피해, 자연 마법, 대지, 폭풍.",
			"plPL": "Umiejętności Magii Natury zadają obrażenia zwiększone o x{2/4/6/8/10/12/14/16/18/20}%. Otrzymujesz trzykrotność tej premii, jeśli użyjesz umiejętności Ziemi po umiejętności Burzy lub na odwrót.\n\nTags: Obrażenia, Magia Natury, Ziemia, Burza.",
			"ptBR": "Habilidades de Magia da Natureza causam {2/4/6/8/10/12/14/16/18/20}% de dano aumentado. O bônus é triplicado se uma habilidade de Terra for a próxima habilidade lançada após uma habilidade de Tempestade, ou se uma habilidade de Tempestade for a próxima habilidade lançada após uma habilidade de Terra.\n\nTags: Dano, Magia da Natureza, Terra, Tempestade.",
			"ruRU": "Умения сил природы наносят на x{2/4/6/8/10/12/14/16/18/20}% больше урона. Бонус к урону утраивается, когда вы применяете умение земли сразу после умения бури или умение бури сразу после умения земли.\n\nTags: Урон, Силы природы, Земля, Буря.",
			"zhCN": "自然魔法技能造成的伤害提高 x{2/4/6/8/10/12/14/16/18/20}%。在施放大地技能后施放风暴技能, 或在施放风暴技能之后施放大地技能, 可以使该加成变为原来的三倍。\n\nTags: 伤害, 自然魔法, 大地, 风暴.",
			"zhTW": "自然魔法技能的傷害提高 x{2/4/6/8/10/12/14/16/18/20}%。如果先施放風暴技能再施放大地技能,或先施放大地技能再施放風暴技能,此傷害加成將會變成三倍。\n\nTags: 傷害, 自然魔法, 大地, 風暴."
},
		id: 128,
		maxPoints: 3,
		x: -425.3,
		y: -549.32
	},
	"Natural Disaster": {
		connections: [ "Defiance", "Resonance" ],
		description: `Your Earth Skills deal x{4/8/12/16/20/24/28/32/36/40}% increased damage to Vulnerable enemies.

Your Storm Skills deal x{4/8/12/16/20/24/28/32/36/40}% increased damage to enemies that are Stunned, Immobilized, or Knocked Back.

Tags: Vulnerable, Damage, Crowd Control, Earth, Storm, Nature Magic.`,
		nameLocalized: {
			"deDE": "Naturkatastrophe",
			"esES": "Desastre natural",
			"esMX": "Desastre Natural",
			"frFR": "Catastrophe naturelle",
			"itIT": "Disastro Naturale",
			"jaJP": "天変地異",
			"koKR": "자연 재해",
			"plPL": "Katastrofa Naturalna",
			"ptBR": "Desastre Natural",
			"ruRU": "Природная катастрофа",
			"zhCN": "自然灾害",
			"zhTW": "自然災害"
},
		descriptionLocalized: {
			"deDE": "Eure Erdfertigkeiten fügen verwundbaren Gegnern x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden zu.\n\nEure Sturmfertigkeiten fügen betäubten, bewegungsunfähigen oder zurückgestoßenen Gegnern x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden zu.\n\nTags: Verwundbar, Schaden, Kontrollverlust, Erde, Sturm, Naturmagie.",
			"esES": "Tus habilidades de tierra infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño a los enemigos vulnerables.\n\nTus habilidades de tormenta infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño a los enemigos aturdidos, inmovilizados o repelidos.\n\nTags: Vulnerable, Daño, Control de masas, Tierra, Tormenta, Magia de la naturaleza.",
			"esMX": "Tus habilidades de Tierra infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño a los enemigos vulnerables.\n\nTus habilidades de Tormenta infligen un x{4/8/12/16/20/24/28/32/36/40}% más de daño a los enemigos aturdidos, inmovilizados o repelidos.\n\nTags: Vulnerable, Daño, Control de multitudes, Tierra, Tormenta, Magia de la naturaleza.",
			"frFR": "Vos compétences de terre infligent x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires aux cibles vulnérables.\n\nVos compétences de tempête infligent x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires aux cibles étourdies, immobilisées ou repoussées.\n\nTags: Vulnérable, Dégâts, Perte de contrôle, Terre, Tempête, Magie naturelle.",
			"itIT": "Le abilità di Terra infliggono il x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi ai nemici vulnerabili.\n\nLe tue abilità di Tempesta infliggono il x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi ai nemici storditi, immobilizzati o respinti.\n\nTags: Vulnerabilità, Danni, Effetti debilitanti, Terra, Tempesta, Magia naturale.",
			"jaJP": "脆弱状態の敵に土スキルが与えるダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n\nスタン、移動不能またはノックバック状態の敵に嵐スキルが与えるダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n\nTags: 脆弱, ダメージ, 操作障害効果, 地, 嵐, 自然魔法.",
			"koKR": "취약 상태의 적에게 대지 기술로 주는 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\n기절 또는 이동 불가 상태이거나 밀려난 적에게 폭풍 기술로 주는 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 취약, 피해, 군중 제어, 대지, 폭풍, 자연 마법.",
			"plPL": "Twoje umiejętności Ziemi zadają obrażenia zwiększone o x{4/8/12/16/20/24/28/32/36/40}% odsłoniętym wrogom.\n\nTwoje umiejętności Burzy zadają obrażenia zwiększone o x{4/8/12/16/20/24/28/32/36/40}% ogłuszonym, unieruchomionym lub odrzuconym wrogom.\n\nTags: Odsłonięcie, Obrażenia, Ograniczanie Kontroli, Ziemia, Burza, Magia Natury.",
			"ptBR": "Suas habilidades de Terra causam {4/8/12/16/20/24/28/32/36/40}% de dano aumentado a inimigos vulneráveis.\n\nSuas habilidades de Tempestade causam {4/8/12/16/20/24/28/32/36/40}% de dano aumentado a inimigos atordoados, imobilizados ou repelidos.\n\nTags: Vulnerável, Dano, Controle de Grupo, Terra, Tempestade, Magia da Natureza.",
			"ruRU": "Ваши умения земли наносят на x{4/8/12/16/20/24/28/32/36/40}% больше урона уязвимым противникам.\n\nВаши умения бури наносят на x{4/8/12/16/20/24/28/32/36/40}% больше урона оглушенным, обездвиженным и отброшенным противникам.\n\nTags: Уязвимость, Урон, Контроль, Земля, Буря, Силы природы.",
			"zhCN": "你的大地技能对处于易伤状态的敌人造成的伤害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\n你的风暴技能对处于昏迷、定身或击退状态的敌人造成的伤害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 易伤, 伤害, 群控, 大地, 风暴, 自然魔法.",
			"zhTW": "你的大地技能對易傷敵人造成的傷害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\n你的風暴技能對被擊昏、定身或擊退的敵人造成的傷害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 易傷, 傷害, 控場, 大地, 風暴, 自然魔法."
},
		id: 129,
		maxPoints: 3,
		x: -257.095,
		y: -407.48
	},
};

druidData["Key Passive"] = {
	"Nature's Fury": {
		connections: [ "Key Passive" ],
		description: `Casting an Earth Skill has a 20% chance to trigger a free Storm Skill of the same category.

In addition, casting a Storm Skill has a 20% chance to trigger a free Earth Skill of the same category.

Tags: Earth, Storm, Damage, Nature Magic.`,
		nameLocalized: {
			"deDE": "Zorn der Natur",
			"esES": "Furia de la naturaleza",
			"esMX": "Furia de la Naturaleza",
			"frFR": "Fureur de la Nature",
			"itIT": "Furia della Natura",
			"jaJP": "大自然の怒り",
			"koKR": "자연의 격노",
			"plPL": "Gniew Natury",
			"ptBR": "Fúria da Natureza",
			"ruRU": "Гнев природы",
			"zhCN": "自然之怒",
			"zhTW": "自然之怒"
},
		descriptionLocalized: {
			"deDE": "Beim Wirken einer Erdfertigkeit besteht eine Chance von 20%, eine kostenlose Sturmfertigkeit derselben Kategorie auszulösen.\n\nAußerdem besteht beim Wirken einer Sturmfertigkeit eine Chance von 20%, eine kostenlose Erdfertigkeit derselben Kategorie auszulösen.\n\nTags: Erde, Sturm, Schaden, Naturmagie.",
			"esES": "Lanzar una habilidad de tierra tiene un 20% de probabilidad de activar una habilidad de tormenta gratis de la misma categoría.\n\nAdemás, lanzar una habilidad de tormenta tiene un 20% de probabilidad de activar una habilidad de tierra gratis de la misma categoría.\n\nTags: Tierra, Tormenta, Daño, Magia de la naturaleza.",
			"esMX": "Lanzar una habilidad de Tierra tiene un 20% de probabilidad de activar sin costo una habilidad de Tormenta de la misma categoría.\n\nAdemás, lanzar una habilidad de Tormenta tiene un 20% de probabilidad de activar sin costo una habilidad de Tierra de la misma categoría.\n\nTags: Tierra, Tormenta, Daño, Magia de la naturaleza.",
			"frFR": "Lorsque vous utilisez une compétence de terre, celle-ci a 20% de chances de déclencher gratuitement une compétence de tempête de la même catégorie.\n\nDe plus, lorsque vous utilisez une compétence de tempête, celle-ci a 20% de chances de déclencher gratuitement une compétence terrestre de la même catégorie.\n\nTags: Terre, Tempête, Dégâts, Magie naturelle.",
			"itIT": "Attivare un'abilità di Terra ha una probabilità del 20% di scatenare senza costi un'abilità di tempesta della stessa categoria.\n\nInoltre, attivare un'abilità di Tempesta ha una probabilità del 20% di scatenare senza costi un'abilità di Terra della stessa categoria.\n\nTags: Terra, Tempesta, Danni, Magia naturale.",
			"jaJP": "土スキルを使うと、20%の確率で同じカテゴリーの嵐スキルをコスト無しで発動する。\n\nさらに、嵐スキルを使うと20%の確率で同じカテゴリーの土スキルをコスト無しで発動する。\n\nTags: 地, 嵐, ダメージ, 自然魔法.",
			"koKR": "대지 기술을 시전하면 20% 확률로 자원 소모 없이 같은 범주의 폭풍 기술이 발동합니다.\n\n추가로 폭풍 기술을 시전하면 20% 확률로 자원 소모 없이 같은 범주의 대지 기술이 발동합니다.\n\nTags: 대지, 폭풍, 피해, 자연 마법.",
			"plPL": "Użycie umiejętności Ziemi ma 20% szans na wywołanie darmowej umiejętności Burzy z tej samej kategorii.\n\nPonadto użycie umiejętności Burzy ma 20% szans na wywołanie darmowej umiejętności Ziemi z tej samej kategorii.\n\nTags: Ziemia, Burza, Obrażenia, Magia Natury.",
			"ptBR": "Lançar uma habilidade de Terra tem 20% de chance de acionar uma habilidade de Tempestade gratuita da mesma categoria.\n\nAlém disso, lançar uma habilidade deTempestade tem 20% de chance de acionar uma habilidade de Terra gratuita da mesma categoria.\n\nTags: Terra, Tempestade, Dano, Magia da Natureza.",
			"ruRU": "Ваши умения земли с вероятностью 20% также активируют умение бури той же категории без затрат ресурса.\n\nКроме того, ваши умения бури с вероятностью 20% активируют умение земли той же категории без затрат ресурса.\n\nTags: Земля, Буря, Урон, Силы природы.",
			"zhCN": "施放一个大地技能有 20% 的几率触发一个免费的同类别风暴技能。\n\n此外, 施放一个风暴技能有 20% 的几率触发一个免费的同类别大地技能。\n\nTags: 大地, 风暴, 伤害, 自然魔法.",
			"zhTW": "施展大地技能有 20% 機率觸發一次同類別的無消耗風暴技能。\n\n此外,施展風暴技能有 20% 機率觸發一次同類別的無消耗大地技能。\n\nTags: 大地, 風暴, 傷害, 自然魔法."
},
		id: 130,
		maxPoints: 1,
		x: 551.172,
		y: -296.755
	},
	"Earthen Might": {
		connections: [ "Key Passive" ],
		description: `Lucky Hit: Damaging enemies with Earth Skills has up to a 5% chance to:
• Restore all of your Spirit
• Cause your attacks to be guaranteed Critical Strikes for 5 seconds

This chance is increased by:
• 10% for Critical Strikes
• 10% if the target is Stunned, Immobilized, or Knocked Back

Tags: Critical Strikes, Damage, Spirit, Lucky Hit, Earth, Crowd Control, Nature Magic.`,
		nameLocalized: {
			"deDE": "Irdene Macht",
			"esES": "Poderío terrestre",
			"esMX": "Fuerza Terrenal",
			"frFR": "Puissance tectonique",
			"itIT": "Vigore Terrigeno",
			"jaJP": "大地の力",
			"koKR": "대지의 힘",
			"plPL": "Potęga Ziemi",
			"ptBR": "Poder Terreno",
			"ruRU": "Мощь земли",
			"zhCN": "大地之力",
			"zhTW": "大地之力"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Wenn Ihr Gegnern mit Erdfertigkeiten Schaden zufügt, besteht eine Chance von bis zu 5%, dass:\n• Eure gesamte Geisteskraft wiederhergestellt wird\n• Eure Angriffe 5 Sek. lang garantiert kritische Treffer erzielen\n\nDiese Chance erhöht sich um:\n• 10% für kritische Treffer\n• 10%, wenn das Ziel betäubt, bewegungsunfähig oder zurückgestoßen ist.\n\nTags: Kritische Treffer, Schaden, Geisteskraft, Glückstreffer, Erde, Kontrollverlust, Naturmagie.",
			"esES": "Golpe de suerte: Infligir daño a enemigos con habilidades de tierra tiene hasta un 5% de probabilidad de:\n• Restaurar todo tu espíritu\n• Hacer que tus ataques sean golpes críticos garantizados durante 5 s\n\nEsta probabilidad aumenta:\n• Un 10% con golpes críticos\n• Un 10% si el objetivo está aturdido, inmovilizado o repelido\n\nTags: Golpes críticos, Daño, Espíritu, Golpe de suerte, Tierra, Control de masas, Magia de la naturaleza.",
			"esMX": "Golpe afortunado: Golpear a enemigos con habilidades de Tierra tiene hasta un 5% de probabilidad de:\n• Restaurar todo tu Espíritu\n• Hacer que tus ataques sean golpes críticos garantizados durante 5 segundos\n\nEsta probabilidad se incrementa un:\n• 10% para los golpes críticos\n• 10% si el objetivo está aturdido, inmovilizado o repelido\n\nTags: Golpes críticos, Daño, Espíritu, Golpe afortunado, Tierra, Control de multitudes, Magia de la naturaleza.",
			"frFR": "Coup de chance: lorsque vous infligez des dégâts à des adversaires avec des compétences de terre, vous avez jusqu'à 5% de chances :\n• de récupérer tous vos points d'esprit ;\n• que vos attaques infligent des coups critiques garantis pendant 5 s.\n\nCes chances sont augmentées :\n• de 10% avec les coups critiques\n• de 10% si la cible est étourdie, immobilisée ou repoussée.\n\nTags: Coups critiques, Dégâts, Esprit, Coup de chance, Terre, Perte de contrôle, Magie naturelle.",
			"itIT": "Colpo Fortunato: infliggere danni ai nemici con abilità di Terra fornisce fino al 5% di probabilità di:\n• ripristinare tutto lo spirito.\n• far in modo che i tuoi attacchi mettano a segno colpi critici garantiti per 5 s\n\nQuesta probabilità aumenta del:\n• 10% per ogni colpo critico\n• 10% se il bersaglio è stordito, immobilizzato o respinto.\n\nTags: Colpi critici, Danni, Spirito, Colpo fortunato, Terra, Effetti debilitanti, Magia naturale.",
			"jaJP": "幸運の一撃: 敵に土スキルでダメージを与えると、最大5%の確率で次の効果が発動する:\n• 精神力が完全回復する\n• 5秒間にわたり、攻撃が必ずクリティカルヒットになる\n\n発生確率は次の条件で増加する:\n• クリティカルヒットの発生時は10%増加\n• 標的がスタン、移動不能、ノックバックしている場合は10%増加\n\nTags: クリティカルヒット, ダメージ, 精神力, 幸運の一撃, 地, 操作障害効果, 自然魔法.",
			"koKR": "행운의 적중: 대지 기술로 적에게 피해를 주면 5% 확률로\n• 영력을 모두 회복합니다.\n• 공격이 5초 동안 확정적으로 극대화로 적중합니다.\n\n이 확률은\n• 극대화 확률에 대해 10% 증가합니다.\n• 대상이 기절, 이동 불가 상태이거나 밀려났을 경우 10% 증가합니다.\n\nTags: 극대화, 피해, 영력, 행운의 적중, 대지, 군중 제어, 자연 마법.",
			"plPL": "Szczęśliwy traf: Zranienie wrogów przy pomocy umiejętności Ziemi zapewnia do 5% szans na wywołanie następujących efektów:\n• Przywrócenie całej siły duchowej\n• Sprawienie, że twoje ataki będą wywoływać gwarantowane trafienia krytyczne przez 5 sek.\n\nSzansa ta wzrasta o:\n• 10% dla trafień krytycznych\n• 10%, jeśli cel jest ogłuszony, unieruchomiony lub odrzucony.\n\nTags: Trafienia Krytyczne, Obrażenia, Siła Duchowa, Szczęśliwy Traf, Ziemia, Ograniczanie Kontroli, Magia Natury.",
			"ptBR": "Golpe de Sorte: Causar dano a inimigos com habilidades de Terra tem até 5% de chance de:\n• Restaurar todo o seu espírito\n• Fazer com que seus ataques sejam acertos críticos garantidos por 5 segundos\n\nEssa chance é aumentada em:\n• 10% para acertos críticos\n• 10% se o alvo estiver atordoado, imobilizado ou repelido\n\nTags: Acertos Críticos, Dano, Espírito, Golpe de Sorte, Terra, Controle de Grupo, Magia da Natureza.",
			"ruRU": "Удачный удар: когда вы наносите урон умениями земли, с вероятностью до 5% срабатывают следующие эффекты:\n• Вы полностью восполняете дух.\n• Ваши атаки гарантированно наносят критический урон в течение 5 сек.\n\nВероятность увеличивается:\n• На 10% в случае критического удара.\n• На 10%, если цель оглушена, обездвижена или отброшена.\n\nTags: Критические удары, Урон, Дух, Удачный удар, Земля, Контроль, Силы природы.",
			"zhCN": "幸运一击: 使用大地技能对敌人造成伤害时, 最多有 5% 几率:\n• 恢复你的所有灵力\n• 使你的攻击必定暴击, 持续 5 秒\n\n该几率提高:\n• 造成暴击时, 几率提高 10%\n• 对处于昏迷、定身或击退状态的目标, 几率提高 10%\n\nTags: 暴击, 伤害, 灵力, 幸运一击, 大地, 群控, 自然魔法.",
			"zhTW": "幸運觸發:以大地技能對敵人造成傷害,最高有 5% 機率可以:\n• 恢復你所有靈力\n• 使你的攻擊必定爆擊,持續 5 秒\n\n此機率可提高:\n• 爆擊提高 10%\n• 目標遭擊昏、定身或擊退提高 10%\n\nTags: 爆擊, 傷害, 靈力, 幸運觸發, 大地, 控場, 自然魔法."
},
		id: 131,
		maxPoints: 1,
		x: 551.997,
		y: -60.41
	},
	"Lupine Ferocity": {
		connections: [ "Key Passive" ],
		description: `Every 6th Werewolf Skill hit Critically Strikes and deals x60% increased damage.

Tags: Critical Strikes, Damage, Werewolf, Shapeshifting.`,
		nameLocalized: {
			"deDE": "Wölfische Wildheit",
			"esES": "Ferocidad lupina",
			"esMX": "Ferocidad Lupina",
			"frFR": "Férocité lupine",
			"itIT": "Ferocia Lupesca",
			"jaJP": "狼の猛威",
			"koKR": "늑대의 흉포함",
			"plPL": "Wilcza Zajadłość",
			"ptBR": "Ferocidade Lupina",
			"ruRU": "Волчья свирепость",
			"zhCN": "凶残狼性",
			"zhTW": "狼之怒"
},
		descriptionLocalized: {
			"deDE": "Jeder 6. Treffer mit einer Werwolffertigkeit erzielt einen kritischen Treffer und verursacht x60% mehr Schaden.\n\nTags: Kritische Treffer, Schaden, Werwolf, Gestaltwandeln.",
			"esES": "Cada 6 habilidades de hombre lobo que impactan, asestas un golpe crítico e infliges un x60% más de daño.\n\nTags: Golpes críticos, Daño, Hombre lobo, Cambio de forma.",
			"esMX": "Cada 6 golpes con una habilidad de Hombre Lobo, asestas un golpe crítico e infliges un x60% más de daño.\n\nTags: Golpes críticos, Daño, Hombre lobo, Metamorfosis.",
			"frFR": "Toutes les 6 compétences de lycanthrope utilisées, la 6e inflige un coup critique et ses dégâts sont augmentés de x60%.\n\nTags: Coups critiques, Dégâts, Lycanthrope, Métamorphose.",
			"itIT": "Ogni 6 colpi delle abilità da Lupo Mannaro è un colpo critico e infligge il x60% di danni aggiuntivi.\n\nTags: Colpi critici, Danni, Lupo Mannaro, Mutaforma.",
			"jaJP": "人狼スキルが6回使うごとにクリティカルヒットになり、与えるダメージがx60%増加する。\n\nTags: クリティカルヒット, ダメージ, 人狼, 変身.",
			"koKR": "늑대인간 기술을 6번째 사용할 때마다 극대화로 적중하고, 주는 피해가 x60% 증가합니다.\n\nTags: 극대화, 피해, 늑대인간, 변신.",
			"plPL": "Co 6 trafienie umiejętnością Wilkołaka wywołuje trafienie krytyczne i zadaje obrażenia zwiększone o x60%.\n\nTags: Trafienia Krytyczne, Obrażenia, Wilkołak, Zmiennokształtność.",
			"ptBR": "A cada 6º acerto, a habilidade de Lobisomem desfere um acerto crítico, causando 60% de dano aumentado.\n\nTags: Acertos Críticos, Dano, Lobisomem, Metamorfose.",
			"ruRU": "Каждый 6-й удар умения волка становится критическим и наносит на x60% больше урона.\n\nTags: Критические удары, Урон, Облик волка, Смена облика.",
			"zhCN": "每第 6 次狼人技能会暴击, 并且造成的伤害提高 x60%。\n\nTags: 暴击, 伤害, 狼人, 变形.",
			"zhTW": "每第 6 個狼人技能會爆擊,造成的傷害提高 x60%。\n\nTags: 爆擊, 傷害, 狼人, 變形."
},
		id: 132,
		maxPoints: 1,
		x: -87.174,
		y: 309.645
	},
	"Bestial Rampage": {
		connections: [ "Key Passive" ],
		description: `After being a Werewolf for 2.5 seconds, gain +20% Attack Speed for 15 seconds.

After being a Werebear for 2.5 seconds, deal x20% increased damage for 15 seconds.

Tags: Shapeshifting, Attack Speed, Damage, Werewolf, Werebear.`,
		nameLocalized: {
			"deDE": "Bestialische Raserei",
			"esES": "Desenfreno bestial",
			"esMX": "Desenfreno Bestial",
			"frFR": "Saccage bestial",
			"itIT": "Furore Bestiale",
			"jaJP": "野獣の猛威",
			"koKR": "야수의 광란",
			"plPL": "Amok Bestii",
			"ptBR": "Ira Bestial",
			"ruRU": "Звериное буйство",
			"zhCN": "兽性狂暴",
			"zhTW": "野獸狂暴"
},
		descriptionLocalized: {
			"deDE": "Nach 2.5 Sek. in Werwolfgestalt erhaltet Ihr 15 Sek. lang +20% Angriffsgeschwindigkeit.\n\nNach 2.5 Sek. in Werbärgestalt verursacht Ihr 15 Sek. lang x20% mehr Schaden.\n\nTags: Gestaltwandeln, Angriffsgeschwindigkeit, Schaden, Werwolf, Werbär.",
			"esES": "Tras estar en forma de hombre lobo durante 2.5 s, obtienes un +20% de velocidad de ataque durante 15 s.\n\nTras estar en forma de hombre oso durante 2.5 s, infliges un x20% más de daño durante 15 s.\n\nTags: Cambio de forma, Velocidad de ataque, Daño, Hombre lobo, Hombre oso.",
			"esMX": "Después de ser hombre lobo durante 2.5 segundos, obtienes un +20% de velocidad de ataque durante 15 segundos.\n\nDespués de ser un hombre oso durante 2.5 segundos, infliges un x20% más de daño durante 15 segundos.\n\nTags: Metamorfosis, Velocidad de ataque, Daño, Hombre lobo, Hombre oso.",
			"frFR": "Si vous restez sous forme de lycanthrope pendant 2.5 s, votre vitesse d'attaque est augmentée de +20% pendant 15 s.\n\nSi vous restez sous forme ursoïde pendant 2.5 s, vous infligez x20% de dégâts supplémentaires pendant 15 s.\n\nTags: Métamorphose, Vitesse d'attaque, Dégâts, Lycanthrope, Ursoïde.",
			"itIT": "Dopo essere stato un Lupo Mannaro per 2.5 s, la tua velocità d'attacco aumenta del +20% per 15 s.\n\nDopo essere stato un Orso Mannaro per 2.5 s, infliggi il x20% di danni aggiuntivi per 15 s.\n\nTags: Mutaforma, Velocità d'attacco, Danni, Lupo Mannaro, Orso Mannaro.",
			"jaJP": "2.5秒間人狼でいた後、攻撃速度が15秒間+20%上昇する。\n\n2.5秒間人熊でいた後、与えるダメージが15秒間x20%増加する。\n\nTags: 変身, 攻撃速度, ダメージ, 人狼, 人熊.",
			"koKR": "2.5초 이상 늑대인간 형상을 유지하면 공격 속도가 15초 동안 +20% 증가합니다.\n\n2.5초 이상 곰인간 형상을 유지하면 15초 동안 주는 피해가 x20% 증가합니다.\n\nTags: 변신, 공격 속도, 피해, 늑대인간, 곰인간.",
			"plPL": "Po spędzeniu co najmniej 2.5 sek. pod postacią wilkołaka otrzymujesz premię +20% do szybkości ataku na 15 sek.\n\nPo spędzeniu co najmniej 2.5 sek. pod postacią niedźwiedziołaka zadajesz obrażenia zwiększone o x20% przez 15 sek.\n\nTags: Zmiennokształtność, Szybkość Ataku, Obrażenia, Wilkołak, Niedźwiedziołak.",
			"ptBR": "Depois de ser um lobisomem por 2.5 segundos, recebe +20% de velocidade de ataque por 15 segundos.\n\nDepois de ser um urso por 2.5 segundos, causa 20% de dano aumentado por 15 segundos.\n\nTags: Metamorfose, Velocidade de Ataque, Dano, Lobisomem, Urso.",
			"ruRU": "Если вы пробудете в облике волка в течение 2.5 сек., ваша скорость атаки повысится на +20% на 15 сек.\n\nПробыв в облике медведя в течение 2.5 сек., вы наносите на x20% больше урона в течение 15 сек.\n\nTags: Смена облика, Скорость атаки, Урон, Облик волка, Медведь.",
			"zhCN": "变成狼人 2.5 秒后, 攻击速度提高 +20%, 持续 15 秒。\n\n变成熊人 2.5 秒后, 造成的伤害提高 x20%, 持续 15 秒。\n\nTags: 变形, 攻击速度, 伤害, 狼人, 熊人.",
			"zhTW": "在變身狼人 2.5 秒後,獲得 +20% 攻擊速度,持續 15 秒。\n\n在變身熊人 2.5 秒後,造成的傷害提高 x20%,持續 15 秒。\n\nTags: 變形, 攻擊速度, 傷害, 狼人, 熊人."
},
		id: 133,
		maxPoints: 1,
		x: -579.178,
		y: 308.825
	},
	"Perfect Storm": {
		connections: [ "Key Passive" ],
		description: `Storm Skills that you cast grant 1 Spirit and deal x15% increased damage when damaging a Vulnerable, Immobilized or Slowed enemy.

Tags: Vulnerable, Damage, Spirit, Storm, Crowd Control, Nature Magic.`,
		nameLocalized: {
			"deDE": "Perfekter Sturm",
			"esES": "Tormenta perfecta",
			"esMX": "Tormenta Perfecta",
			"frFR": "Tempête parfaite",
			"itIT": "Tempesta Perfetta",
			"jaJP": "恵みの嵐",
			"koKR": "완벽한 폭풍",
			"plPL": "Gwałtowna Burza",
			"ptBR": "Tempestade Perfeita",
			"ruRU": "Буря в разгаре",
			"zhCN": "完美风暴",
			"zhTW": "完美風暴"
},
		descriptionLocalized: {
			"deDE": "Von Euch gewirkte Sturmfertigkeiten verleihen 1 Geisteskraft und fügen einem verwundbaren, bewegungsunfähigen oder verlangsamten Gegner x15% mehr Schaden zu.\n\nTags: Verwundbar, Schaden, Geisteskraft, Sturm, Kontrollverlust, Naturmagie.",
			"esES": "Las habilidades de tormenta que lanzas te otorgan 1 de espíritu e infligen un x15% más de daño a enemigos vulnerables, inmovilizados o ralentizados.\n\nTags: Vulnerable, Daño, Espíritu, Tormenta, Control de masas, Magia de la naturaleza.",
			"esMX": "Las habilidades de Tormenta que lances te otorgan 1 de Espíritu e infligen un x15% más de daño a los enemigos vulnerables, inmovilizados o ralentizados.\n\nTags: Vulnerable, Daño, Espíritu, Tormenta, Control de multitudes, Magia de la naturaleza.",
			"frFR": "Les compétences de tempête que vous lancez vous confèrent 1 points d'esprit et infligent x15% de dégâts supplémentaires lorsqu'elles infligent des dégâts à des cibles vulnérables, immobilisées ou ralenties.\n\nTags: Vulnérable, Dégâts, Esprit, Tempête, Perte de contrôle, Magie naturelle.",
			"itIT": "Le abilità di Tempesta che utilizzi generano 1 spirito e infliggono il x15% di danni aggiuntivi a un nemico vulnerabile, immobilizzato o rallentato.\n\nTags: Vulnerabilità, Danni, Spirito, Tempesta, Effetti debilitanti, Magia naturale.",
			"jaJP": "使用した嵐スキルが精神力を1付与し、脆弱、移動不能または速度低下状態の敵に与えるダメージがx15%増加する。\n\nTags: 脆弱, ダメージ, 精神力, 嵐, 操作障害効果, 自然魔法.",
			"koKR": "자신이 시전하는 폭풍 기술이 1의 영력을 부여하고 취약 또는 이동 불가, 감속 상태의 적에게 주는 피해가 x15% 증가합니다.\n\nTags: 취약, 피해, 영력, 폭풍, 군중 제어, 자연 마법.",
			"plPL": "Twoje umiejętności Burzy zapewniają 1 pkt. siły duchowej i zadają obrażenia zwiększone o x15%, gdy ranią cele odsłonięte, unieruchomione lub spowolnione.\n\nTags: Odsłonięcie, Obrażenia, Siła Duchowa, Burza, Ograniczanie Kontroli, Magia Natury.",
			"ptBR": "As habilidades de Tempestade lançadas por você concedem 1 de espírito e causam 15% de dano aumentado ao atingir um inimigo vulnerável, imobilizado ou desacelerado.\n\nTags: Vulnerável, Dano, Espírito, Tempestade, Controle de Grupo, Magia da Natureza.",
			"ruRU": "Примененные вами умения бури восполняют 1 ед. духа и наносят на x15% больше урона уязвимым, обездвиженным и замедленным противникам.\n\nTags: Уязвимость, Урон, Дух, Буря, Контроль, Силы природы.",
			"zhCN": "你施放的风暴技能给予 1 点灵力, 并且对处于易伤、定身或减速状态的敌人造成的伤害提高 x15%。\n\nTags: 易伤, 伤害, 灵力, 风暴, 群控, 自然魔法.",
			"zhTW": "你施放的風暴技能會賦予 1 點靈力,並對易傷、定身或緩速敵人的傷害提高 x15%。\n\nTags: 易傷, 傷害, 靈力, 風暴, 控場, 自然魔法."
},
		id: 134,
		maxPoints: 1,
		x: 128.936,
		y: -296.355
	},
	"Ursine Strength": {
		connections: [ "Key Passive" ],
		description: `Gain x20% additional Maximum Life while in Werebear form and for 3 seconds after leaving Werebear form.

While Healthy, deal x30% increased damage.

Tags: Healthy, Shapeshifting, Life, Werebear, Damage.`,
		nameLocalized: {
			"deDE": "Bärenkraft",
			"esES": "Fuerza osuna",
			"esMX": "Fuerza Osuna",
			"frFR": "Force ursine",
			"itIT": "Forza Ursina",
			"jaJP": "猛獣の力",
			"koKR": "곰의 힘",
			"plPL": "Niedźwiedzia Siła",
			"ptBR": "Força Ursina",
			"ruRU": "Медвежья сила",
			"zhCN": "巨熊之力",
			"zhTW": "熊之力"
},
		descriptionLocalized: {
			"deDE": "Erhaltet in Werbärgestalt sowie 3 Sek. nach dem Verlassen der Werbärgestalt zusätzlich x20% maximales Leben.\n\nWenn Ihr gesund seid, verursacht Ihr x30% mehr Schaden.\n\nTags: Gesund, Gestaltwandeln, Leben, Werbär, Schaden.",
			"esES": "Obtienes un x20% de tu vida máxima adicional mientras estás en forma de hombre oso y durante 3 s tras abandonarla.\n\nEn estado saludable, infliges un x30% más de daño.\n\nTags: Saludable, Cambio de forma, Vida, Hombre oso, Daño.",
			"esMX": "Obtienes un x20% de vida máxima adicional mientras estás en forma de hombre oso y durante 3 segundos después de abandonar la forma de hombre oso.\n\nMientras estás saludable, infliges un x30% más de daño.\n\nTags: Saludable, Metamorfosis, Vida, Hombre oso, Daño.",
			"frFR": "Votre maximum de points de vie est augmenté de x20% lorsque vous adoptez la forme ursoïde. Cet effet persiste pendant 3 s après avoir quitté cette forme.\n\nTant que vous êtes en bonne santé, vous infligez x30% de dégâts supplémentaires.\n\nTags: En bonne santé, Métamorphose, Vie, Ursoïde, Dégâts.",
			"itIT": "La tua Vita massima aumenta del x20% quando sei in forma di Orso Mannaro e per 3 s dopo che la forma di Orso Mannaro è terminata.\n\nQuando sei in salute, infliggi il x30% di danni aggiuntivi.\n\nTags: In salute, Mutaforma, Vita, Orso Mannaro, Danni.",
			"jaJP": "人熊形態の間はライフ最大値がx20%増加し、この効果は人熊形態を解除した後も3秒間持続する。\n\n健全状態の時、敵に与えるダメージがx30%増加する。\n\nTags: 健全, 変身, ライフ, 人熊, ダメージ.",
			"koKR": "곰인간 형상일 때 그리고 곰인간 형상에서 벗어난 후 3초 동안 최대 생명력이 추가로 x20% 증가합니다.\n\n건강 상태에서 주는 피해가 x30% 증가합니다.\n\nTags: 건강, 변신, 생명력, 곰인간, 피해.",
			"plPL": "Twoje maksymalne zdrowie jest zwiększone o x20%, kiedy jesteś pod postacią niedźwiedziołaka, oraz na 3 sek. po wyjściu z tej postaci.\n\nKiedy jesteś w pełni sił, zadajesz obrażenia zwiększone o x30%.\n\nTags: Pełnia Sił, Zmiennokształtność, Zdrowie, Niedźwiedziołak, Obrażenia.",
			"ptBR": "Recebe 20% de vida máxima adicional enquanto está na forma de urso e por 3 segundos depois de sair da forma de urso.\n\nEnquanto você está saudável, causa 30% de dano aumentado.\n\nTags: Saudável, Metamorfose, Vida, Urso, Dano.",
			"ruRU": "Ваш максимальный запас здоровья увеличивается на x20%, пока вы находитесь в облике медведя и еще в течение 3 сек. после смены облика.\n\nПока у вас высокий уровень здоровья, вы наносите на x30% больше урона.\n\nTags: Высокое здоровье, Смена облика, Здоровье, Медведь, Урон.",
			"zhCN": "熊人形态下的生命上限额外提高 x20%, 离开熊人形态后, 该效果还会持续 3 秒。\n\n健康状态下, 造成的伤害提高 x30%。\n\nTags: 健康, 变形, 生命, 熊人, 伤害.",
			"zhTW": "在熊人形態下與解除熊人形態後 3 秒內,你的生命值上限提高 x20%。\n\n在健康狀態下,你造成的傷害提高 x30%。\n\nTags: 健康, 變形, 生命值, 熊人, 傷害."
},
		id: 135,
		maxPoints: 1,
		x: -581.903,
		y: 42.4
	},
};

druidData["Spirit Boons"] = {
	"Deer": {
		id: 158,
		"Prickleskin": {
			values: [ "" ],
			description: `Gain {#} Thorns.`,
			id: 142
		},
		"Gift of the Stag": {
			description: `Gain +10 Maximum Spirit.`,
			id: 143
		},
		"Wariness": {
			description: `Take 10% reduced damage from Elites.`,
			id: 144
		},
		"Advantageous Beast": {
			description: `Reduce the duration of Control Impairing Effects by 15%.`,
			id: 145
		}
	},
	"Eagle": {
		id: 159,
		"Scythe Talons": {
			description: `Gain +5% increased Critical Strike Chance.`,
			id: 146
		},
		"Iron Feather": {
			description: `Gain x10% Maximum Life.`,
			id: 147
		},
		"Swooping Attacks": {
			description: `Gain +10% Attack Speed.`,
			id: 148
		},
		"Avian Wrath": {
			description: `Gain x30% Critical Strike Damage.`,
			id: 149
		}
	},
	"Snake": {
		id: 161,
		"Obsidian Slam": {
			description: `Every 10th kill will cause your next Earth Skill to Overpower.`,
			id: 154
		},
		"Overload": {
			description: `Lucky Hit: Dealing Lightning damage has up to a 20% chance to cause the target to emit a static discharge, dealing 20% Lightning damage to surrounding enemies.`,
			id: 155
		},
		"Masochistic": {
			description: `Critical Strikes with Shapeshifting Skills Heal you for 3% Maximum Life.`,
			id: 156
		},
		"Calm Before the Storm": {
			description: `Lucky Hit: Nature Magic Skills have up to a 15% chance to reduce the Cooldown of your Ultimate Skill by 2 seconds.`,
			id: 157
		}
	},
	"Wolf": {
		id: 160,
		"Packleader": {
			description: `Lucky Hit: Critical Strikes have up to a 20% chance to reset the Cooldowns of your Companion Skills.`,
			id: 150
		},
		"Energize": {
			description: `Lucky Hit: Dealing damage has up to a 15% chance to restore 10 Spirit.`,
			id: 151
		},
		"Bolster": {
			description: `Fortify for 10% of your Maximum Life when you use a Defensive Skill.`,
			id: 152
		},
		"Calamity": {
			description: `Extend the duration of Ultimate Skills by 25%.`,
			id: 153
		}
	}
};

export { druidData };