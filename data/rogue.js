let rogueData = {};

rogueData["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0
	},
	"Core": {
		connections: [ "Agility" ],
		requiredPoints: 2,
		x: -1198.861,
		y: 607.225
	},
	"Agility": {
		connections: [ "Subterfuge" ],
		requiredPoints: 6,
		x: 503.82,
		y: 1513.225
	},
	"Subterfuge": {
		connections: [ "Imbuements" ],
		requiredPoints: 11,
		x: -1196.535,
		y: 2437.774
	},
	"Imbuements": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 513.93,
		y: 3341.84
	},
	"Ultimate": {
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1204.781,
		y: 4246.85
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -6.259,
		y: 4859.065
	},
};

rogueData["Basic"] = {
	"Blade Shift": {
		connections: [ "Enhanced Blade Shift", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: {#}%
Quickly stab your victim for {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% damage and shift, allowing you to move freely through enemies for 3 seconds.

Tags: Basic, Cutthroat, Damage, Physical, Movement.`,
		nameLocalized: {
			"deDE": "Gleitklinge",
			"esES": "Traslación eviscerante",
			"esMX": "Desplazamiento con Cuchillas",
			"frFR": "Passage des lames",
			"itIT": "Guizzo di Lama",
			"jaJP": "ブレード・シフト",
			"koKR": "칼날 차원 이동",
			"plPL": "Taniec Ostrzy",
			"ptBR": "Lâmina Ágil",
			"ruRU": "Блуждающий клинок",
			"zhCN": "锋刃闪转"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: {#}%\nStecht schnell auf Euer Ziel ein, fügt ihm {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% Schaden zu und gleitet, wodurch Ihr Euch 3 Sek. lang frei durch Gegner bewegen könnt.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: {#}%\nApuñalas rápidamente a tu víctima para infligir {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de daño y trasladarte, lo que te permite atravesar libremente a los enemigos durante 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: {#}%\nApuñalas rápidamente a tu víctima, le infliges {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de daño y desapareces, lo que te permite desplazarte libremente a través de los enemigos durante 3 segundos.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"frFR": "Points de combo générés : 1\nChances de coup de chance : {#}%\nVous poignardez rapidement votre victime en lui infligeant {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% points de dégâts et vous déphasez, ce qui vous permet de vous mouvoir librement parmi les adversaires pendant 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: {#}%\nAccoltelli rapidamente la vittima, infliggendo {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% danni e ti sposti più velocemente tra i nemici per 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: {#}%\n素早く敵を刺し、{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%のダメージを与えた上で身のこなしを切り替え、3秒間にわたって敵をすり抜けて移動できるようになる。\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: {#}%\n적을 빠르게 찔러 {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%의 피해를 주고, 차원 이동을 하여 3초 동안 적을 자유롭게 통과합니다.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: {#}%\nSzybko przebijasz ofiarę ostrzem i zadajesz jej {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% pkt. obrażeń, a następnie przemieniasz się, aby przenikać przez wrogów przez 3 sek.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: {#}%\nApunhala rapidamente a vítima, causando {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de dano e deslocando-se, permitindo que você se mova livremente através de inimigos por 3 segundos.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: {#}%.\nВы стремительно пронзаете цель, нанося {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% ед. урона, и переходите в другое измерение, получая возможность проходить сквозь врагов в течение 3 сек.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"zhCN": "生成连击点数:1\n幸运一击几率:{#}%\n快速刺击你的受害者,造成{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%点伤害并闪转腾挪,使你可以自由地穿过敌人,持续3秒。\n\nTags: Basic, Cutthroat, Damage, Physical, Movement."
},
		id: 0,
		maxPoints: 5,
		values: [ "35" ],
		x: -1.473,
		y: -323.735
	},
	"Enhanced Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Fundamental Blade Shift", "Blade Shift", "Primary Blade Shift" ],
		description: `Damaging an enemy with Blade Shift grants +5% Movement Speed while Blade Shift is active, up to +20%.

Tags: Basic, Cutthroat, Damage, Physical, Movement.`,
		nameLocalized: {
			"deDE": "Verbesserte Gleitklinge",
			"esES": "Traslación eviscerante mejorada",
			"esMX": "Desplazamiento con Cuchillas Potenciado",
			"frFR": "Passage des lames renforcé",
			"itIT": "Guizzo di Lama Rinforzato",
			"jaJP": "ブレード・シフト(強化版)",
			"koKR": "강화된 칼날 차원 이동",
			"plPL": "Wzmocniony Taniec Ostrzy",
			"ptBR": "Lâmina Ágil Aperfeiçoada",
			"ruRU": "Усиленный блуждающий клинок",
			"zhCN": "强化锋刃闪转"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner mit Gleitklinge Schaden zufügt, erhaltet Ihr +5% Bewegungsgeschwindigkeit, während Gleitklinge aktiv ist, bis maximal +20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"esES": "Infligir daño a un enemigo con Traslación eviscerante te otorga un +5% de velocidad de movimiento mientras dura Traslación eviscerante, hasta un máximo de un +20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"esMX": "Infligir daño a un enemigo con Desplazamiento con Cuchillas te otorga un +5% más de velocidad de movimiento mientras Desplazamiento con Cuchillas está activa, hasta un +20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"frFR": "Infliger des dégâts à une cible avec Passage des lames augmente votre vitesse de déplacement de +5% tant que Passage des lames est actif, jusqu'à un maximum de +20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"itIT": "Danneggiare un nemico con Guizzo di Lama conferisce una velocità di movimento del +5% mentre Guizzo di Lama è attivo, fino a un massimo del +20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"jaJP": "〈ブレード・シフト〉で敵1体にダメージを与えると、〈ブレード・シフト〉発動中の移動速度が+5%増加する。効果は最大で+20%。\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"koKR": "칼날 차원 이동으로 적에게 피해를 주면 칼날 차원 이동이 활성화되어 있는 동안 이동 속도가 +5%만큼, 최대 +20%까지 증가합니다.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"plPL": "Zranienie wroga przy użyciu Tańca Ostrzy zapewnia ci premię +5% do szybkości ruchu, kiedy Taniec Ostrzy jest aktywny, maksymalnie do +20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"ptBR": "Causar dano a um inimigo com Lâmina Ágil concede +5% de velocidade de movimento enquanto Lâmina Ágil está ativa, até +20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"ruRU": "Когда \"Блуждающий клинок\" наносит противнику урон, ваша скорость передвижения повышается на +5% на время действия навыка, вплоть до +20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"zhCN": "锋刃闪转激活时,使用锋刃闪转对一名敌人造成伤害会使移动速度提高+5%,最多提高+20%。\n\nTags: Basic, Cutthroat, Damage, Physical, Movement."
},
		id: 1,
		maxPoints: 1,
		x: 3.694,
		y: -527.345
	},
	"Fundamental Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `Moving through enemies while Blade Shift is active refreshes its duration. After moving through enemies 5 times, your next Blade Shift will Daze enemies for 2 seconds.

Tags: Basic, Cutthroat, Damage, Physical, Movement.`,
		nameLocalized: {
			"deDE": "Fundamentale Gleitklinge",
			"esES": "Traslación eviscerante fundamental",
			"esMX": "Desplazamiento con Cuchillas Fundamental",
			"frFR": "Passage des lames fondamental",
			"itIT": "Guizzo di Lama Fondamentale",
			"jaJP": "ブレード・シフト(本格)",
			"koKR": "근본적인 칼날 차원 이동",
			"plPL": "Fundamentalny Taniec Ostrzy",
			"ptBR": "Lâmina Ágil Fundamental",
			"ruRU": "Фундаментальный блуждающий клинок",
			"zhCN": "基础锋刃闪转"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Euch durch Gegner hindurchbewegt, während Gleitklinge aktiv ist, wird ihre Dauer aktualisiert. Wenn Ihr Euch 5-mal durch Gegner hindurchbewegt habt, wird Eure nächste Gleitklinge Gegner 2 Sek. lang benommen machen.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"esES": "Al atravesar a los enemigos mientras dura Traslación eviscerante, se renueva su duración. Tras atravesar a los enemigos 5 veces, tu siguiente Traslación eviscerante los atontará durante 2 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"esMX": "Desplazarte a través de los enemigos mientras Desplazamiento con Cuchillas está activa renueva su duración. Tras desplazarte a través de enemigos 5 veces, tu siguiente Desplazamiento con Cuchillas atontará a los enemigos durante 2 segundos.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"frFR": "Lorsque vous traversez des adversaires pendant que Passage des lames est actif, sa durée se réinitialise. Après avoir traversé 5 adversaires, votre prochain Passage des lames hébète les adversaires pendant 2 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"itIT": "Attraversare i nemici mentre Guizzo di Lama è attivo ne ripristina la durata. Dopo aver attraversato i nemici per 5 volte, il tuo prossimo Guizzo di Lama infliggerà Frastornamento ai nemici per 2 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"jaJP": "ブレード・シフトの発動中に敵の中をすり抜けると持続時間がリセットされる。敵を5回すり抜けると、次に使用するブレード・シフトは、敵を2秒間にわたって眩暈状態にする。\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"koKR": "칼날 차원 이동이 활성화되어 있는 동안 적을 통과하면 지속시간이 초기화됩니다. 적을 5번 통과하면 다음 칼날 차원 이동이 적을 2초 동안 멍하게 만듭니다.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"plPL": "Przenikanie przez wrogów, kiedy Taniec Ostrzy jest aktywny, odświeża czas jego działania. Po przeniknięciu wrogów 5 razy twój następny Taniec Ostrzy oszałamia wrogów na 2 sek.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"ptBR": "Mover-se através de inimigos enquanto Lâmina Ágil está ativa atualiza sua duração. Depois de se mover através de inimigos 5 vezes, sua próxima Lâmina Ágil aplicará torpor nos inimigos por 2 segundos.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"ruRU": "Когда вы проходите сквозь противников во время действия \"Блуждающего клинка\" время действия навыка обновляется. Когда вы проходите сквозь противников 5 раза:раз, следующий \"Блуждающий клинок\" вызывает у противников головокружение на 2 сек.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"zhCN": "锋刃闪转激活期间穿过敌人会刷新其持续时间。穿过敌人5次后,你的下一次锋刃闪转会眩晕敌人2秒。\n\nTags: Basic, Cutthroat, Damage, Physical, Movement."
},
		id: 2,
		maxPoints: 1,
		x: 154.361,
		y: -636.79
	},
	"Primary Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `While Blade Shift is active you gain 15% to all Non-Physical Resistances and reduce the duration of incoming Control Impairing Effects by 20%.

Tags: Basic, Cutthroat, Damage, Physical, Movement.`,
		nameLocalized: {
			"deDE": "Primäre Gleitklinge",
			"esES": "Contador de Traslación eviscerante primaria",
			"esMX": "Desplazamiento con Cuchillas Primario",
			"frFR": "Passage des lames primaire",
			"itIT": "Guizzo di Lama Primario",
			"jaJP": "ブレード・シフト(極上)",
			"koKR": "주요한 칼날 차원 이동",
			"plPL": "Podstawowy Taniec Ostrzy",
			"ptBR": "Lâmina Ágil Primária",
			"ruRU": "Основной блуждающий клинок",
			"zhCN": "主要锋刃闪转"
},
		descriptionLocalized: {
			"deDE": "Während Gleitklinge aktiv ist, werden all Eure nichtphysischen Widerstände um 15% erhöht und die Dauer von eingehenden Kontrollverlusteffekten um 20% reduziert.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"esES": "Mientras dura Traslación eviscerante, aumentan un 15% todas tus resistencias no físicas y se reduce un 20% la duración de los efectos de pérdida de control dirigidos hacia ti.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"esMX": "Mientras Desplazamiento con Cuchillas está activa, obtienes un 15% de todas las resistencias no físicas y reduces la duración de los efectos que causan pérdida de control un 20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"frFR": "Tant que Passage des lames est actif, toutes vos résistances non physiques sont augmentées de 15% et la durée des effets affectant le contrôle est réduite de 20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"itIT": "Mentre Guizzo di Lama è attivo ottieni il 15% a tutte le resistenze non fisiche e la durata degli effetti debilitanti subiti in seguito si riduce del 20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"jaJP": "〈ブレード・シフト〉中はすべての非物理攻撃耐性が15%増加し、受けた操作障害効果の持続時間を20%短縮する。\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"koKR": "칼날 차원 이동이 활성화된 상태에서 모든 비물리 저항이 15% 증가하고, 받는 제어 방해 효과의 지속시간이 20% 감소합니다.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"plPL": "Kiedy Taniec Ostrzy jest aktywny, zyskujesz premię 15% do wszystkich odporności niefizycznych i skracasz czas działania ograniczenia kontroli o 20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"ptBR": "Enquanto Lâmina Ágil está ativa, você recebe 15% para todas as resistências a dano não físico e reduz a duração de efeitos de controle recebidos em 20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"ruRU": "Пока действует \"Блуждающий клинок\", сопротивление всем видам нефизического урона повышается на 15%, а время действия применяемых к вам эффектов контроля сокращается на 20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Movement.",
			"zhCN": "锋刃闪转激活时,你的所有非物理抗性提高15%,并使所有受到的控制类限制效果的持续时间缩短20%。\n\nTags: Basic, Cutthroat, Damage, Physical, Movement."
},
		id: 3,
		maxPoints: 1,
		x: -170.121,
		y: -634.25
	},
	"Invigorating Strike": {
		connections: [ "Enhanced Invigorating Strike", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: {#}%
Melee attack an enemy, dealing {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% damage and increasing Energy Regeneration by x20% for 3 seconds.

Tags: Basic, Cutthroat, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Belebender Schlag",
			"esES": "Golpe vigorizador",
			"esMX": "Golpe Vigorizante",
			"frFR": "Frappe revigorante",
			"itIT": "Assalto Rinvigorente",
			"jaJP": "活性の一撃",
			"koKR": "원기의 일격",
			"plPL": "Ożywcze Uderzenie",
			"ptBR": "Golpe Revigorante",
			"ruRU": "Живительный удар",
			"zhCN": "振奋打击"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: {#}%\nGreift einen Gegner im Nahkampf an, verursacht {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% Schaden und erhöht die Energieregeneration 3 Sek. lang um x20%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: {#}%\nEjecutas un ataque cuerpo a cuerpo contra un enemigo para infligir {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de daño y aumentar un x20% tu regeneración de energía durante 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: {#}%\nAsestas un ataque de melé a un enemigo, le infliges {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de daño y aumentas la regeneración de Energía un x20% durante 3 segundos.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"frFR": "Points de combo générés : 1\nChances de coup de chance : {#}%\nVous attaquez une cible en mêlée, ce qui lui inflige {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% points de dégâts et augmente votre régénération d'énergie de x20% pendant 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: {#}%\nAttacca un nemico in mischia, infliggendo {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% danni e aumentando la rigenerazione di energia del x20% per 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: {#}%\n敵に近接攻撃を行い、{23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}%のダメージを与える。さらにエネルギー回復量が3秒間にわたりx20%増加する。\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: {#}%\n적을 근접 공격하여 {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}%의 피해를 주고 3초 동안 기력 재생이 x20% 증가합니다.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: {#}%\nAtakujesz wroga wręcz, zadając {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% pkt. obrażeń i zwiększając regenerację energii o x20% przez 3 sek.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: {#}%\nAtaca um inimigo em corpo a corpo, causando {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de dano e aumentando a regeneração de energia em 20% por 3 segundos.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: {#}%.\nВы атакуете противника в ближнем бою, нанося {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% ед. урона. При этом ваша скорость восстановления энергии увеличивается на x20% на 3 сек.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"zhCN": "生成连击点数:1\n幸运一击几率:{#}%\n近战攻击一名敌人时造成{23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}%点伤害,并且使能量回复速度提高x20%,持续3秒。\n\nTags: Basic, Cutthroat, Damage, Physical, Energy."
},
		id: 4,
		maxPoints: 5,
		values: [ "50" ],
		x: -393.363,
		y: -211.415
	},
	"Enhanced Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Invigorating Strike", "Primary Invigorating Strike", "Fundamental Invigorating Strike" ],
		description: `Damaging a Crowd Controlled or Injured enemy with Invigorating Strike increases its Energy Regeneration bonus to x30%.

Tags: Basic, Cutthroat, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbesserter Belebender Schlag",
			"esES": "Golpe vigorizador mejorado",
			"esMX": "Golpe Vigorizante Potenciado",
			"frFR": "Frappe revigorante renforcée",
			"itIT": "Assalto Rinvigorente Rinforzato",
			"jaJP": "活性の一撃(強化版)",
			"koKR": "강화된 원기의 일격",
			"plPL": "Wzmocnione Ożywcze Uderzenie",
			"ptBR": "Golpe Revigorante Aperfeiçoado",
			"ruRU": "Усиленный живительный удар",
			"zhCN": "强化振奋打击"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner, der unter Kontrollverlusteffekten leidet oder verwundet ist, mit Belebender Schlag Schaden zufügt, erhöht sich der Bonus auf Energieregeneration auf x30%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"esES": "Infligir daño a un enemigo afectado por control de masas o herido con Golpe vigorizador aumenta un x30% su bonus de regeneración de energía.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"esMX": "Al infligir daño a un enemigo bajo los efectos de control de multitudes o herido con Golpe Vigorizante, aumentas su bonificación de regeneración de Energía al x30%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"frFR": "Infliger des dégâts à une cible blessée ou subissant un effet de perte de contrôle avec Frappe revigorante augmente son bonus de régénération d'énergie de x30%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"itIT": "Infliggere danni a un nemico ferito o sotto un effetto di controllo delle creature con Assalto Rinvigorente aumenta al x30% il suo bonus di rigenerazione di energia.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"jaJP": "操作障害または負傷効果を受けた敵に〈活性の一撃〉でダメージを与えると、エネルギー回復ボーナスがx30%に増加する。\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"koKR": "원기의 일격으로 군중 제어 또는 부상 상태의 적에게 피해를 주면 기력 재생이 추가로 x30% 증가합니다.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"plPL": "Zadawanie Ożywczym Uderzeniem obrażeń wrogowi okaleczonemu lub o ograniczonej kontroli zwiększa premię do regeneracji energii zapewnianą przez tę moc do x30%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"ptBR": "Causar dano a um inimigo sob controle de grupo ou ferido com Golpe Revigorante aumenta o bônus de regeneração de energia em 30%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"ruRU": "Когда \"Живительный удар\" наносит урон противнику с низким уровнем здоровья или цели под действием эффектов контроля, бонус к скорости восстановления энергии этого навыка повышается до x30%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"zhCN": "使用振奋打击对一名被群控或受伤的敌人造成伤害,会使其能量回复速度加成提高至x30%。\n\nTags: Basic, Cutthroat, Damage, Physical, Energy."
},
		id: 5,
		maxPoints: 1,
		x: -686.981,
		y: -357.315
	},
	"Primary Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Invigorating Strike additionally grants +8% Lucky Hit Chance. Hitting a Crowd Controlled or Injured enemy increases this bonus to +16% Lucky Hit Chance.

Tags: Basic, Cutthroat, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Primärer Belebender Schlag",
			"esES": "Golpe vigorizador primario",
			"esMX": "Golpe Vigorizante Primario",
			"frFR": "Frappe revigorante primaire",
			"itIT": "Assalto Rinvigorente Primario",
			"jaJP": "活性の一撃(極上)",
			"koKR": "주 원기의 일격",
			"plPL": "Podstawowe Ożywcze Uderzenie",
			"ptBR": "Golpe Revigorante Primário",
			"ruRU": "Основной живительный удар",
			"zhCN": "主要振奋打击"
},
		descriptionLocalized: {
			"deDE": "Belebender Schlag verleiht außerdem +8% Glückstrefferchance. Wenn Ihr einen Gegner trefft, der unter Kontrollverlusteffekten leidet oder verwundet ist, wird dieser Bonus auf +16% Glückstrefferchance erhöht.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"esES": "Golpe vigorizador también otorga un +8% de probabilidad de golpe de suerte. Golpear a un enemigo afectado por control de masas o herido aumenta este bonus a un +16% de probabilidad de golpe de suerte.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"esMX": "Golpe Vigorizante además otorga un +8% de probabilidad de golpe afortunado. Golpear a un enemigo bajo los efectos de control de multitudes o herido aumenta esta bonificación a un +16% de probabilidad de golpe afortunado.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"frFR": "Frappe revigorante confère aussi un bonus aux chances de coup de chance de +8%. Lorsque vous touchez une cible blessée ou subissant un effet de perte de contrôle, ce bonus aux chances de coup de chance est porté à +16%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"itIT": "Assalto Rinvigorente conferisce inoltre il +8% di probabilità di colpo fortunato. Colpire un nemico sotto un effetto di controllo delle creature o ferito incrementa questo bonus al +16% di probabilità di colpo fortunato.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"jaJP": "〈活性の一撃〉に、幸運の一撃発生率を+8%増加させる効果が加わる。操作障害または負傷効果を受けた敵に〈活性の一撃〉を命中させると、このボーナスの効果が+16%に強化される。\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"koKR": "원기의 일격이 추가로 행운의 적중 확률을 +8% 증가시킵니다. 군중 제어 또는 부상 상태의 적에게 공격을 적중시키면 행운의 적중 확률이 +16% 증가합니다.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"plPL": "Ożywcze Uderzenie dodatkowo zapewnia premię +8% do szansy na szczęśliwy traf. Trafienie wroga okaleczonego lub o ograniczonej kontroli zwiększa tę premię do +16%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"ptBR": "Golpe Revigorante também concede +8% de chance de Golpe de Sorte. Atingir um inimigo sob controle de grupo ou ferido aumenta esse bônus em +16% de chance de Golpe de Sorte.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"ruRU": "\"Живительный удар\" дополнительно повышает вероятность удачного удара на +8%. Когда вы поражаете противника с низким уровнем здоровья или цель под действием эффектов контроля, этот бонус увеличивается до +16%.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"zhCN": "振奋打击额外给予+8%的幸运一击几率。命中一名被群控或受伤的敌人时,使该加成提高至+16%。\n\nTags: Basic, Cutthroat, Damage, Physical, Energy."
},
		id: 7,
		maxPoints: 1,
		x: -660.611,
		y: -496.7
	},
	"Fundamental Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Hitting an enemy with Invigorating Strike while you are below 50% Energy makes them Vulnerable for 3 seconds.

Tags: Basic, Cutthroat, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Fundamentaler Belebender Schlag",
			"esES": "Golpe vigorizador fundamental",
			"esMX": "Golpe Vigorizante Fundamental",
			"frFR": "Frappe revigorante fondamentale",
			"itIT": "Assalto Rinvigorente Fondamentale",
			"jaJP": "活性の一撃(本格)",
			"koKR": "기본 원기의 일격",
			"plPL": "Fundamentalne Ożywcze Uderzenie",
			"ptBR": "Golpe Revigorante Fundamental",
			"ruRU": "Фундаментальный живительный удар",
			"zhCN": "基础振奋打击"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen Gegner mit Belebender Schlag trefft, während Ihr über weniger als 50% Energie verfügt, wird dieser 3 Sek. lang verwundbar.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"esES": "Golpear a un enemigo con Golpe vigorizador cuando tienes menos de un 50% de energía lo vuelve vulnerable durante 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"esMX": "Golpear a un enemigo con Golpe Vigorizante mientras tienes menos del 50% de Energía lo vuelve vulnerable durante 3 segundos.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"frFR": "Toucher une cible avec Frappe revigorante alors que vous avez moins de 50% d'énergie rend celle-ci vulnérable pendant 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"itIT": "Colpire un nemico con Assalto Rinvigorente mentre hai meno del 50% di energia li rende vulnerabili per 3 s.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"jaJP": "エネルギーが50%未満の状態で〈活性の一撃〉を敵に命中させると、その敵を3秒間にわたり脆弱状態にする。\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"koKR": "원기의 일격을 기력이 50% 미만일 때 적에게 적중시키면 해당 적이 3초 동안 취약해집니다.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"plPL": "Wróg trafiony Ożywczym Uderzeniem, kiedy twój poziom energii jest poniżej 50%, staje się odsłonięty na 3 sek.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"ptBR": "Acertar um inimigo com Golpe Revigorante enquanto você estiver abaixo de 50% de energia torna-o vulnerável por 3 segundos.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"ruRU": "Когда вы поражаете противника \"Живительным ударом\", пока ваш запас энергии ниже 50%, он становится уязвимым на 3 сек.\n\nTags: Basic, Cutthroat, Damage, Physical, Energy.",
			"zhCN": "能量低于50%时,使用振奋打击命中一名敌人会使其陷入易伤状态,持续3秒。\n\nTags: Basic, Cutthroat, Damage, Physical, Energy."
},
		id: 6,
		maxPoints: 1,
		x: -955.226,
		y: -375.21
	},
	"Puncture": {
		connections: [ "Enhanced Puncture", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: {#}%
Throw blades a short distance, dealing {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% damage. Every 3rd cast Slows enemies by 20% for 2 seconds. Critical Strikes will always Slow.

Tags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Einstich",
			"esES": "Pinchar",
			"esMX": "Punzar",
			"frFR": "Perforation",
			"itIT": "Perforazione",
			"jaJP": "釘刺し",
			"koKR": "구멍 뚫기",
			"plPL": "Rana Kłuta",
			"ptBR": "Puncionar",
			"ruRU": "Колющий удар",
			"zhCN": "穿刺飞刀"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: {#}%\nWerft Klingen über eine kurze Distanz und verursacht {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% Schaden. Jeder 3. Einsatz verlangsamt Gegner 2 Sek. lang um 20%. Kritische Treffer verlangsamen immer.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: {#}%\nLanzas a corta distancia unas cuchillas que infligen {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de daño. Cada 3 lanzamientos, los enemigos se ralentizan un 20% durante 2 s. Los golpes críticos siempre ralentizan.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: {#}%\nArrojas cuchillas a corta distancia que infligen {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de daño. Cada 3 lanzamientos, ralentiza a los enemigos un 20% durante 2 segundos. Los golpes críticos siempre ralentizan.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"frFR": "Points de combo générés : 1\nChances de coup de chance : {#}%\nVous lancez des lames à courte distance, ce qui inflige {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% points de dégâts. Toutes les 3 utilisations, la e utilisation ralentit les adversaires de 20% pendant 2 s. Les coups critiques ralentissent à coup sûr les adversaires.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: {#}%\nLancia delle lame a breve distanza, infliggendo {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% danni. Ogni 3° lancio dell'abilità rallenta i nemici del 20% per 2 s. I colpi critici rallenteranno sempre i nemici.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: {#}%\n近距離に刃を投げつけ、{21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}%のダメージを与える。3回使用するたびに、対象となった敵の移動速度を2秒間にわたって20%低下させる。クリティカルヒット時、移動速度低下効果が必ず発生する。\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: {#}%\n짧게 칼날을 던져 {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}%의 피해를 줍니다. 3번 시전할 때마다 2초 동안 적을 20% 감속시킵니다. 극대화 적중하면 언제나 적을 감속시킵니다.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: {#}%\nRzucasz ostrzami na niewielką odległość, zadając {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% pkt. obrażeń. Co 3 użycie spowalnia wrogów o 20% na 2 sek. Trafienia krytyczne zawsze spowalniają cele.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: {#}%\nArremessa lâminas por uma curta distância, causando {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de dano. Cada 3° lançamento desacelera inimigos em 20% por 2 segundos. Acertos críticos sempre aplicarão lentidão.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: {#}%.\nВы бросаете на короткое расстояние клинки, наносящие {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% ед. урона. Каждое 3-е применение замедляет противников на 20% на 2 сек. Критические удары всегда замедляют цели.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"zhCN": "生成连击点数:1\n幸运一击几率:{#}%\n短距离扔出你的飞刀,造成{21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}%点伤害。每第3次施放会使敌人减速20%,持续2秒。暴击必定造成减速。\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical."
},
		id: 8,
		maxPoints: 5,
		values: [ "50" ],
		x: 391.432,
		y: -210.87
	},
	"Enhanced Puncture": {
		baseSkill: "Puncture",
		connections: [ "Puncture", "Fundamental Puncture", "Primary Puncture" ],
		description: `Gain 2 Energy when Puncture damages a Crowd Controlled enemy.

Tags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Einstich",
			"esES": "Pinchar mejorado",
			"esMX": "Punción Potenciada",
			"frFR": "Perforation renforcée",
			"itIT": "Perforazione Rinforzata",
			"jaJP": "釘刺し(強化版)",
			"koKR": "강화된 구멍 뚫기",
			"plPL": "Wzmocniona Rana Kłuta",
			"ptBR": "Puncionar Aperfeiçoado",
			"ruRU": "Усиленный колющий удар",
			"zhCN": "强化穿刺飞刀"
},
		descriptionLocalized: {
			"deDE": "Erhaltet 2 Energie, wenn Einstich einem Gegner Schaden zufügt, der unter Kontrollverlusteffekten leidet.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"esES": "Obtienes 2 de energía cuando Pinchar inflige daño a un enemigo afectado por control de masas.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"esMX": "Obtienes 2 de Energía cuando Punzar inflige daño a un enemigo bajo los efectos de control de multitudes.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"frFR": "Vous gagnez 2 points d'énergie lorsque Perforation blesse une cible subissant un effet de perte de contrôle.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"itIT": "Ottieni 2 energia quando Perforazione infligge danni a un nemico sotto un effetto di controllo delle creature.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"jaJP": "操作障害効果を受けている敵に〈釘刺し〉でダメージを与えると、2のエネルギーを獲得する。\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"koKR": "구멍 뚫기가 군중 제어 상태의 적에게 피해를 주면 기력을 2 얻습니다.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"plPL": "Zyskujesz 2 pkt. energii, kiedy Rana Kłuta zada obrażenia wrogowi o ograniczonej kontroli.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"ptBR": "Recebe 2 de energia quando Puncionar causa dano a um inimigo sob controle de grupo.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"ruRU": "Вы накапливаете 2 ед. энергии, когда \"Колющий удар\" наносит урон противнику под действием эффектов контроля.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"zhCN": "穿刺飞刀对被群控的敌人造成伤害时获得2点能量。\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical."
},
		id: 9,
		maxPoints: 1,
		x: 665.19,
		y: -347.11
	},
	"Fundamental Puncture": {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Puncture now throws 3 blades in a spread, each dealing 35% of its Base damage. Hitting an enemy with at least 2 blades at once makes them Vulnerable for 2 seconds.

Tags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Fundamentaler Einstich",
			"esES": "Pinchar fundamental",
			"esMX": "Punción Fundamental",
			"frFR": "Perforation fondamentale",
			"itIT": "Perforazione Fondamentale",
			"jaJP": "釘刺し(本格)",
			"koKR": "근본적인 구멍 뚫기",
			"plPL": "Fundamentalna Rana Kłuta",
			"ptBR": "Puncionar Fundamental",
			"ruRU": "Фундаментальный колющий удар",
			"zhCN": "基础穿刺飞刀"
},
		descriptionLocalized: {
			"deDE": "Einstich schleudert jetzt 3 Klingen in einer Fächerform, wobei jede 35% des Basisschadens verursacht. Wenn ein Gegner mit mindestens 2 Klingen gleichzeitig getroffen wird, wird er 2 Sek. lang verwundbar.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"esES": "Ahora, Pinchar lanza en abanico 3 cuchillas que infligen un 35% de su daño base cada una. Golpear a un enemigo con al menos 2 cuchillas a la vez lo vuelve vulnerable durante 2 s.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"esMX": "Punzar ahora lanza 3 cuchillas desplegadas, y cada una inflige un 35% de su daño de base. Golpear a un enemigo con al menos 2 cuchillas a la vez lo vuelve vulnerable durante 2 segundos.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"frFR": "Perforation lance désormais 3 lames en éventail qui infligent chacune 35% de ses dégâts de base. Si au moins 2 lames touchent une même cible en même temps, celle-ci devient vulnérable pendant 2 s.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"itIT": "Perforazione ora scaglia a ventaglio 3 lame che infliggono ciascuna il 35% dei danni base. Colpire un nemico con almeno 2 lame simultaneamente lo rende vulnerabile per 2 s.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"jaJP": "〈釘刺し〉使用時に3本の刃をばらまくようになる。それぞれの刃は基礎ダメージの35%のダメージを与える。1体の敵に少なくとも2本の刃が同時に命中すると、その敵を2秒間にわたり脆弱状態にする。\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"koKR": "구멍 뚫기가 3개의 칼날을 흩뿌려 각각 기본 공격력의 35%에 해당하는 피해를 줍니다. 한 번에 적에게 2개 이상의 칼날을 적중시키면 해당 적은 2초 동안 취약해집니다.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"plPL": "Rana Kłuta powoduje teraz ciśnięcie 3 ostrzami na obszar w kształcie wachlarza. Każde z nich zadaje 35% podstawowych obrażeń od Rany Kłutej. Wróg trafiony co najmniej 2 ostrzami naraz staje się odsłonięty na 2 sek.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"ptBR": "Puncionar agora arremessa 3 lâminas em uma área. Cada uma causa 35% do dano-base. Atingir um inimigo com pelo menos 2 lâminas de uma vez torna-o vulnerável por 2 segundos.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"ruRU": "\"Колющий удар\" теперь выпускает веером 3 клинка, наносящие по 35% базового урона. Если хотя бы 2 клинка поражают одну цель, она становится уязвимой на 2 сек.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"zhCN": "现在穿刺飞刀会投掷3把散开的刀刃,每把造成35%的基础伤害。一次至少用2把飞刀命中一名敌人将使其陷入易伤状态,持续2秒。\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical."
},
		id: 10,
		maxPoints: 1,
		x: 939.345,
		y: -358.89
	},
	"Primary Puncture": {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Every 3rd cast of Puncture will also ricochet up to 2 times. Critical Strikes will always ricochet.

Tags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Primärer Einstich",
			"esES": "Pinchar primario",
			"esMX": "Punción Primaria",
			"frFR": "Perforation primaire",
			"itIT": "Perforazione Primaria",
			"jaJP": "釘刺し(極上)",
			"koKR": "주요한 구멍 뚫기",
			"plPL": "Podstawowa Rana Kłuta",
			"ptBR": "Puncionar Primário",
			"ruRU": "Основной колющий удар",
			"zhCN": "主要穿刺飞刀"
},
		descriptionLocalized: {
			"deDE": "Jeder 3. Einsatz von Einstich verursacht außerdem bis zu 2 Querschläger. Kritische Treffer verursachen immer Querschläger.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"esES": "Cada 3 lanzamientos de Pinchar, el efecto rebotará también hasta 2 veces. Los golpes críticos siempre rebotan.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"esMX": "Cada 3 lanzamientos de Punzar, también rebotará hasta 2 veces. Los golpes críticos siempre rebotan.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"frFR": "Toutes les 3 utilisations de Perforation, la 3e utilisation ricochera jusqu'à 2 fois. Les coups critiques ricochent à coup sûr.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"itIT": "Ogni 3° lancio di Perforazione rimbalzerà inoltre 2 volte. I colpi critici rimbalzeranno sempre.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"jaJP": "〈釘刺し〉が、3回使用するたびに最大2回跳飛するようになる。クリティカルヒット時は必ず跳飛する。\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"koKR": "구멍 뚫기를 3번째로 시전하면 공격이 최대 2번 튕깁니다. 극대화 적중하면 언제나 튕깁니다.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"plPL": "Co 3 użycie Rany Kłutej rykoszetuje maksymalnie 2 razy. Trafienia krytyczne zawsze rykoszetują.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"ptBR": "Cada 3° lançamento de Puncionar também ricocheteará até 2 vezes. Acertos críticos sempre ricochetearão.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"ruRU": "При каждом 3-м применении \"Колющий удар\" рикошетит, поражая до 2 целей. При критических ударах эффект рикошета срабатывает гарантированно.\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.",
			"zhCN": "每第3次施放穿刺飞刀也会弹射最多2次。暴击必定弹射。\n\nTags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical."
},
		id: 11,
		maxPoints: 1,
		x: 692.899,
		y: -483.34
	},
	"Heartseeker": {
		connections: [ "Enhanced Heartseeker", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: {#}%
Fire an arrow that seeks an enemy, dealing {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% damage and increasing your Critical Strike Chance against them by +3% for 4 seconds, up to +15%.

Tags: Basic, Marksman, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Herzsucher",
			"esES": "Buscacorazones",
			"esMX": "Buscacorazones",
			"frFR": "Crève-cœur",
			"itIT": "Centracuore",
			"jaJP": "ハートシーカー",
			"koKR": "심장추적자",
			"plPL": "Poszukiwanie Serc",
			"ptBR": "Furacórdio",
			"ruRU": "Пронзатель сердец",
			"zhCN": "觅心箭"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: {#}%\nSchießt einen Pfeil ab, der einen Gegner aufsucht, {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% Schaden verursacht und Eure kritische Trefferchance gegen ihn 4 Sek. lang um +3% erhöht, bis maximal +15%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: {#}%\nDisparas una flecha que busca a un enemigo, le inflige {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% de daño y aumenta un +3% la probabilidad de golpe crítico contra él durante 4 s, hasta un máximo de un +15%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: {#}%\nDisparas una flecha que busca a un enemigo, le inflige {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% de daño y aumenta un +3% tu probabilidad de golpe crítico contra él durante 4 segundos, hasta un máximo del +15%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"frFR": "Points de combo générés : 1\nChances de coup de chance : {#}%\nVous tirez une flèche qui traque une cible, ce qui lui inflige {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% points de dégâts à l'impact et augmente vos chances de lui infliger un coup critique de +3% pendant 4 s, jusqu'à un maximum de +15%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: {#}%\nScagli una freccia che insegue un nemico, infliggendo {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% danni e aumentando la probabilità di critico contro di questi del +3% per 4 s, fino a un massimo del +15%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: {#}%\n敵を追尾する矢を放ち{22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}%のダメージを与えた上で、その敵に対するクリティカルヒット率が4秒間にわたり+3%上昇する。上昇量は最大で+15%。\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: {#}%\n적을 추적하는 화살을 발사하여, {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}%의 피해를 주고 대상에 대한 자신의 극대화 확률을 4초 동안 +3%만큼, 최대 +15%까지 증가시킵니다.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: {#}%\nWypuszczasz strzałę, która wyszukuje wroga, zadaje mu {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% pkt. obrażeń i zwiększa szansę na zadanie mu trafienia krytycznego o +3% przez 4 sek., maksymalnie do +15%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: {#}%\nDispara uma flecha que busca um inimigo, causando {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% de dano e aumentando sua chance de acerto crítico contra ele em +3% por 4 segundos, até +15%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: {#}%.\nВыпускает стрелу, которая сама находит и поражает противника. Стрела наносит {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% ед. урона и повышает вашу вероятность критического удара против этой цели на +3% на 4 сек. вплоть до +15%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"zhCN": "生成连击点数:1\n幸运一击几率:{#}%\n发射一支会追踪敌人的箭矢,造成{22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}%点伤害,并且使你对其造成暴击的几率提高+3%,持续4秒,最多提高+15%。\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical."
},
		id: 12,
		maxPoints: 5,
		values: [ "50" ],
		x: 517.08,
		y: -0.265
	},
	"Enhanced Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Heartseeker", "Fundamental Heartseeker", "Primary Heartseeker" ],
		description: `When Heartseeker Critically Strikes, gain +8% Attack Speed for 4 seconds. Double this amount if the enemy is Vulnerable.

Tags: Basic, Marksman, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Herzsucher",
			"esES": "Buscacorazones mejorado",
			"esMX": "Buscacorazones Potenciado",
			"frFR": "Crève-cœur renforcé",
			"itIT": "Centracuore Rinforzato",
			"jaJP": "ハートシーカー(強化版)",
			"koKR": "강화된 심장추적자",
			"plPL": "Wzmocnione Poszukiwanie Serc",
			"ptBR": "Furacórdio Aperfeiçoado",
			"ruRU": "Усиленный пронзатель сердец",
			"zhCN": "强化觅心箭"
},
		descriptionLocalized: {
			"deDE": "Wenn Herzsucher einen kritischen Treffer erzielt, erhaltet Ihr 4 Sek. lang +8% Angriffsgeschwindigkeit. Dieser Wert verdoppelt sich, wenn der Gegner verwundbar ist.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"esES": "Cuando Buscacorazones asesta un golpe crítico, obtienes un +8% de velocidad de ataque durante 4 s. Esta cantidad se duplica si el enemigo es vulnerable.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"esMX": "Cuando asestas un golpe crítico con Buscacorazones, obtienes un +8% más de velocidad de ataque durante 4 segundos. Esta cantidad se duplica si el enemigo está vulnerable.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"frFR": "Lorsque Crève-cœur inflige un coup critique, votre vitesse d'attaque est augmentée de +8% pendant 4 s. Cette valeur est doublée si l'adversaire est vulnérable.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"itIT": "Infliggere colpi critici con Centracuore aumenta la velocità d'attacco del +8% per 4 s. Questo ammontare raddoppia se il nemico è vulnerabile.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"jaJP": "〈ハートシーカー〉でクリティカルヒットが発生すると、攻撃速度が4秒間にわたり+8%上昇する。脆弱状態の敵に対しては、この上昇度が2倍になる。\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"koKR": "심장추적자가 극대화로 적중하면 4초 동안 공격 속도가 +8% 증가합니다. 적이 취약 상태일 경우 효과가 2배로 증가합니다.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"plPL": "Kiedy Poszukiwanie Serc zada trafienie krytyczne, zyskujesz +8% do szybkości ataku na 4 sek. Wartość ta jest podwojona, jeśli wróg jest odsłonięty.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"ptBR": "Quando Furacórdio desfere um acerto crítico, recebe +8% de velocidade de ataque por 4 segundos. O valor é dobrado se o inimigo está vulnerável.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"ruRU": "Когда \"Пронзатель сердец\" наносит критический урон, ваша скорость атаки повышается на +8% на 4 сек. Прибавка удваивается, если противник уязвим.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"zhCN": "觅心箭暴击时,攻击速度提高+8%,持续4秒。如果敌人处于易伤状态则该加成翻倍。\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical."
},
		id: 13,
		maxPoints: 1,
		x: 878.274,
		y: -0.72
	},
	"Fundamental Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `Heartseeker also increases the Critical Strike Damage the enemy takes from you by +5% for 4 seconds, up to +25%.

Tags: Basic, Marksman, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Fundamentaler Herzsucher",
			"esES": "Buscacorazones fundamental",
			"esMX": "Buscacorazones Fundamental",
			"frFR": "Crève-cœur fondamental",
			"itIT": "Centracuore Fondamentale",
			"jaJP": "ハートシーカー(本格)",
			"koKR": "근본적인 심장추적자",
			"plPL": "Fundamentalne Poszukiwanie Serc",
			"ptBR": "Furacórdio Fundamental",
			"ruRU": "Фундаментальный пронзатель сердец",
			"zhCN": "基础觅心箭"
},
		descriptionLocalized: {
			"deDE": "Herzsucher erhöht außerdem 4 Sek. lang den durch Euch erlittenen kritischen Trefferschaden des Gegners um +5%, bis maximal +25%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"esES": "Buscacorazones también aumenta el daño de golpe crítico que infliges al enemigo un +5% durante 4 s, hasta un máximo de un +25%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"esMX": "Buscacorazones también aumenta un +5% el daño de golpe crítico que recibe de ti el enemigo durante 4 segundos, hasta un máximo del +25%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"frFR": "Crève-cœur augmente aussi les dégâts critiques que l'adversaire subit de votre part de +5% pendant 4 s, jusqu'à un maximum de +25%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"itIT": "Centracuore aumenta anche i danni critici che infliggi al nemico del +5% per 4 s, fino a un massimo del +25%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"jaJP": "〈ハートシーカー〉に、命中した敵に自分が与えるクリティカルヒットのダメージが4秒間にわたり+5%増加する効果が加わる。増加量は最大で+25%。\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"koKR": "심장추적자가 추가로 적이 자신에게 받는 극대화 피해를 4초 동안 +5%만큼, 최대 +25%까지 증가시킵니다.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"plPL": "Poszukiwanie Serc zwiększa również obrażenia otrzymywane przez wroga od twoich trafień krytycznych o +5% na 4 sek., maksymalnie do +25%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"ptBR": "Furacórdio também aumenta o dano de acerto crítico recebido de você pelo inimigo em +5% por 4 segundos, até +25%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"ruRU": "\"Пронзатель сердец\" также увеличивает критический урон, который противник получает от вас, на +5% на 4 сек. вплоть до +25%.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"zhCN": "觅心箭也会使你对敌人的暴击伤害提高+5%,持续4秒,最多提高+25%。\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical."
},
		id: 14,
		maxPoints: 1,
		x: 1078.76,
		y: -93.745
	},
	"Primary Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `Heartseeker ricochets to an additional enemy, dealing 30% of the original damage.

Tags: Basic, Marksman, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Primärer Herzsucher",
			"esES": "Buscacorazones primario",
			"esMX": "Buscacorazones Primario",
			"frFR": "Crève-cœur primaire",
			"itIT": "Centracuore Primario",
			"jaJP": "ハートシーカー(極上)",
			"koKR": "주요한 심장추적자",
			"plPL": "Podstawowe Poszukiwanie Serc",
			"ptBR": "Furacórdio Primário",
			"ruRU": "Основной пронзатель сердец",
			"zhCN": "主要觅心箭"
},
		descriptionLocalized: {
			"deDE": "Herzsucher springt zu einem zusätzlichen Gegner und fügt ihm 30% des ursprünglichen Schadens zu.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"esES": "Buscacorazones rebota a un enemigo adicional, que sufre un 30% del daño original.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"esMX": "Buscacorazones rebota en un enemigo adicional e inflige un 30% del daño original.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"frFR": "Crève-cœur ricoche sur une cible supplémentaire et lui inflige 30% des dégâts initiaux.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"itIT": "Centracuore rimbalza su un nemico aggiuntivo, infliggendo il 30% dei danni originali.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"jaJP": "〈ハートシーカー〉が追加の敵1体に跳飛し、本来の30%のダメージを与える。\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"koKR": "심장추적자가 튕겨나가 다른 대상 하나에 추가로 적중하여, 원래 피해의 30%만큼 피해를 줍니다.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"plPL": "Poszukiwanie Serc rykoszetuje do dodatkowego wroga i zadaje mu 30% pierwotnych obrażeń.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"ptBR": "Furacórdio ricocheteia em um inimigo adicional, causando 30% do dano original.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"ruRU": "\"Пронзатель сердец\" рикошетит в еще одного противника и наносит 30% изначального урона.\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical.",
			"zhCN": "觅心箭弹射至一名额外的敌人,造成30%初始伤害。\n\nTags: Basic, Marksman, Critical Strikes, Damage, Physical."
},
		id: 15,
		maxPoints: 1,
		x: 1082.04,
		y: 80.68
	},
	"Forceful Arrow": {
		connections: [ "Enhanced Forceful Arrow", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: {#}%
Fire a powerful arrow at an enemy, dealing {20/22/24/26/28/30/32/34/36/38}% damage. Every 3rd cast makes the enemy Vulnerable for 2 seconds.

Tags: Basic, Marksman, Vulnerable, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Kraftvoller Pfeil",
			"esES": "Flecha impetuosa",
			"esMX": "Flecha Imperiosa",
			"frFR": "Flèche puissante",
			"itIT": "Freccia Travolgente",
			"jaJP": "フォースフル・アロー",
			"koKR": "강력한 화살",
			"plPL": "Mocarna Strzała",
			"ptBR": "Flecha Contundente",
			"ruRU": "Стрела силы",
			"zhCN": "蓄力劲射"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: {#}%\nFeuert einen kraftvollen Pfeil auf einen Gegner und fügt ihm {20/22/24/26/28/30/32/34/36/38}% Schaden zu. Jeder 3. Einsatz macht den Gegner 2 Sek. lang verwundbar.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: {#}%\nDisparas a un enemigo una poderosa flecha que inflige {20/22/24/26/28/30/32/34/36/38}% de daño. Cada 3 lanzamientos, vuelve vulnerable al enemigo durante 2 s.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: {#}%\nDisparas una flecha potente a un enemigo, lo que inflige {20/22/24/26/28/30/32/34/36/38}% de daño. Cada 3 lanzamientos, lo vuelve vulnerable durante 2 segundos.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"frFR": "Points de combo générés : 1\nChances de coup de chance : {#}%\nVous tirez une flèche puissante qui inflige {20/22/24/26/28/30/32/34/36/38}% points de dégâts à une cible. Toutes les 3 utilisations, la 3e utilisation rend la cible vulnérable pendant 2 s.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: {#}%\nScagli una potente freccia verso un nemico, infliggendo {20/22/24/26/28/30/32/34/36/38}% danni. Ogni 3° utilizzo dell'abilità rende il nemico vulnerabile per 2 s.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: {#}%\n敵1体に強力な矢を放ち、{20/22/24/26/28/30/32/34/36/38}%のダメージを与える。3回使用するたびに、対象となった敵を2秒間にわたり脆弱状態にする。\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: {#}%\n적에게 강력한 화살을 발사하여 {20/22/24/26/28/30/32/34/36/38}%의 피해를 줍니다. 3번째 시전할 때마다 적이 2초 동안 취약해집니다.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: {#}%\nWystrzeliwujesz we wroga potężną strzałę, która zadaje {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń. Co 3 użycie odsłania wroga na 2 sek.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: {#}%\nDispara uma flecha poderosa contra um inimigo, causando {20/22/24/26/28/30/32/34/36/38}% de dano. Cada 3º lançamento deixa o inimigo vulnerável por 2 segundos.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: {#}%.\nВыпускает в противника мощную стрелу, наносящую {20/22/24/26/28/30/32/34/36/38}% ед. урона. Каждое 3-е применение делает цель уязвимой на 2 сек.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"zhCN": "生成连击点数:1\n幸运一击几率:{#}%\n对一名敌人发射一支强力箭矢,造成{20/22/24/26/28/30/32/34/36/38}%点伤害。每第3次施放会使敌人陷入易伤状态,持续2秒。\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical."
},
		id: 16,
		maxPoints: 5,
		values: [ "50" ],
		x: 396.765,
		y: 197.18
	},
	"Enhanced Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Forceful Arrow", "Fundamental Forceful Arrow", "Primary Forceful Arrow" ],
		description: `Every 3rd cast of Forceful Arrow additionally has a +15% increased Critical Strike Chance.

Tags: Basic, Marksman, Vulnerable, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Kraftvoller Pfeil",
			"esES": "Flecha impetuosa mejorada",
			"esMX": "Flecha Imperiosa Potenciada",
			"frFR": "Flèche puissante renforcée",
			"itIT": "Freccia Travolgente Rinforzata",
			"jaJP": "フォースフル・アロー(強化版)",
			"koKR": "강화된 강력한 화살",
			"plPL": "Wzmocniona Mocarna Strzała",
			"ptBR": "Flecha Contundente Aperfeiçoada",
			"ruRU": "Усиленная стрела силы",
			"zhCN": "强化蓄力劲射"
},
		descriptionLocalized: {
			"deDE": "Jeder 3.  Einsatz von Kraftvoller Pfeil hat außerdem eine um +15% erhöhte kritische Trefferchance.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"esES": "Cada 3 lanzamientos de Flecha impetuosa, obtienes también un +15% más de probabilidad de golpe crítico.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"esMX": "Cada tres lanzamientos de Flecha Imperiosa, también tiene un +15% más de probabilidad de golpe crítico.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"frFR": "Toutes les 3 utilisations de Flèche puissante, les chances d'infliger un coup critique de la 3e utilisation sont augmentées de +15%.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"itIT": "Ogni 3° utilizzo di Freccia Travolgente aumenta la probabilità di critico del +15%.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"jaJP": "〈フォースフル・アロー〉のクリティカルヒット率が3回使用するたびに一度、+15%増加する。\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"koKR": "강력한 화살을 3번 시전할 때마다 극대화 확률이 추가로 +15% 증가합니다.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"plPL": "Co 3 użycie Mocarnej Strzały ma dodatkowo premię +15% do szansy na trafienie krytyczne.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"ptBR": "Cada 3º lançamento de Flecha Contundente também tem +15% de chance de acerto crítico aumentada.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"ruRU": "При каждом 3-м применении вероятность критического удара \"Стрелы силы\" повышена на +15%.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"zhCN": "每第3次施放蓄力劲射的暴击几率额外提高+15%。\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical."
},
		id: 17,
		maxPoints: 1,
		x: 668.675,
		y: 321.035
	},
	"Fundamental Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `Forceful Arrow Knocks Back Non-Elite enemies if they are Close. If they collide with another enemy, both are Knocked Down for 1.5 seconds.

Tags: Basic, Marksman, Vulnerable, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Fundamentaler Kraftvoller Pfeil",
			"esES": "Flecha impetuosa fundamental",
			"esMX": "Flecha Imperiosa Fundamental",
			"frFR": "Flèche puissante fondamentale",
			"itIT": "Freccia Travolgente Fondamentale",
			"jaJP": "フォースフル・アロー(本格)",
			"koKR": "근본적인 강력한 화살",
			"plPL": "Fundamentalna Mocarna Strzała",
			"ptBR": "Flecha Contundente Fundamental",
			"ruRU": "Фундаментальная стрела силы",
			"zhCN": "基础蓄力劲射"
},
		descriptionLocalized: {
			"deDE": "Kraftvoller Pfeil stößt Nicht-Elitegegner in der Nähe zurück. Wenn dieser mit einem weiteren Gegner zusammenstößt, werden beide 1.5 Sek. lang niedergeschlagen.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"esES": "Flecha impetuosa repele a los enemigos que no sean de élite si están cerca. Si chocan contra otro enemigo, ambos quedan derribados durante 1.5 s.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"esMX": "Flecha Imperiosa repele a los enemigos que no son de Élite si están cerca. Si chocan con otro enemigo, ambos quedan derribados durante 1.5 segundos.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"frFR": "Flèche puissante repousse les cibles non élites à proximité. Si celles-ci percutent une autre cible, elles sont toutes deux renversées pendant 1.5 s.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"itIT": "Freccia Travolgente respinge indietro i nemici vicini non élite. Se si scontrano con un altro nemico, cadono tutti a terra per 1.5 s.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"jaJP": "〈フォースフル・アロー〉が付近にいる非エリート敵をノックバックさせる。ノックバックさせた敵が別の敵と衝突すると、どちらも1.5秒間ノックダウン状態になる。\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"koKR": "강력한 화살이 근거리에 있는 비정예 적을 밀쳐냅니다. 적이 다른 적과 충돌하면 둘 다 1.5초 동안 넘어집니다.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"plPL": "Mocarna Strzała odrzuca pobliskich wrogów nieelitarnych. Jeśli odrzucony wróg zderzy się z innym, obaj zostają powaleni na 1.5 sek.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"ptBR": "Flecha Contundente repele inimigos não elite se estiverem próximos. Se colidirem com outro inimigo, ambos são nocauteados por1.5 segundos.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"ruRU": "\"Стрела силы\" отбрасывает находящихся рядом противников. Если отброшенный противник столкнется с другим врагом, они оба будут сбиты с ног на 1.5 сек. Не действует на особых противников.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"zhCN": "蓄力劲射会击退附近的非精英敌人。如果被击退的敌人撞到另一名敌人,两者都会被击倒1.5秒。\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical."
},
		id: 18,
		maxPoints: 1,
		x: 689.435,
		y: 457.555
	},
	"Primary Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `Forceful Arrow pierces through Vulnerable enemies.

Tags: Basic, Marksman, Vulnerable, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Primärer Kraftvoller Pfeil",
			"esES": "Flecha impetuosa primaria",
			"esMX": "Flecha Imperiosa Primaria",
			"frFR": "Flèche puissante primaire",
			"itIT": "Freccia Travolgente Primaria",
			"jaJP": "フォースフル・アロー(極上)",
			"koKR": "주요한 강력한 화살",
			"plPL": "Podstawowa Mocarna Strzała",
			"ptBR": "Flecha Contundente Primária",
			"ruRU": "Основная стрела силы",
			"zhCN": "主要蓄力劲射"
},
		descriptionLocalized: {
			"deDE": "Kraftvoller Pfeil durchschlägt verwundbare Gegner.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"esES": "Flecha impetuosa atraviesa a los enemigos vulnerables.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"esMX": "Flecha Imperiosa perfora a los enemigos vulnerables.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"frFR": "Flèche puissante transperce les adversaires vulnérables.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"itIT": "Freccia Travolgente trapassa i nemici vulnerabili.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"jaJP": "〈フォースフル・アロー〉が脆弱状態の敵を貫通する。\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"koKR": "강력한 화살이 취약 상태의 적을 관통합니다.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"plPL": "Mocarna Strzała przebija odsłoniętych wrogów.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"ptBR": "Flecha Contundente atravessa inimigos vulneráveis.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"ruRU": "\"Стрела силы\" проходит через уязвимых противников.\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical.",
			"zhCN": "蓄力劲射会穿透易伤的敌人。\n\nTags: Basic, Marksman, Vulnerable, Damage, Physical."
},
		id: 19,
		maxPoints: 1,
		x: 922.875,
		y: 320.12
	},
};

rogueData["Core"] = {
	"Twisting Blades": {
		connections: [ "Enhanced Twisting Blades", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Impale an enemy with your blades, dealing {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% damage and making them take x8% increased damage from you while impaled. After 1.5 seconds the blades return to you, piercing enemies for {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% damage.

Combo Points increase damage and grant a Movement Speed bonus:
• 1 Point: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% damage, +20% bonus
• 2 Points: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% damage, +40% bonus
• 3 Points: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% damage, +60% bonus

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Schraubklingen",
			"esES": "Hojas retorcidas",
			"esMX": "Cuchillas Inteligentes",
			"frFR": "Lames sournoises",
			"itIT": "Lame Serpeggianti",
			"jaJP": "ツイストブレード",
			"koKR": "회전 칼날",
			"plPL": "Wirujące Ostrza",
			"ptBR": "Lâminas Retorcidas",
			"ruRU": "Вонзающиеся клинки",
			"zhCN": "回旋刀锋"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: {#}\nGlückstrefferchance: {#}%\nSpießt einen Gegner mit Euren Klingen auf, verursacht {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% Schaden und fügt ihm anschließend x8% mehr Schaden zu, solange er aufgespießt ist. Nach 1.5 Sek. kehren die Klingen zu Euch zurück, durchschlagen Gegner und verursachen dabei {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% Schaden.\n\nKombopunkte erhöhen den Schaden und verleihen einen Bonus auf Bewegungsgeschwindigkeit:\n • 1 Punkt: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% Schaden, +20% Bonus\n• 2 Punkte: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% Schaden, +40% Bonus\n • 3 Punkte: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% Schaden, +60% Bonus\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esES": "Coste de energía: {#}\nProbabilidad de golpe de suerte: {#}%\nEmpalas a un enemigo con tus hojas, lo que le inflige {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de daño y hace que le inflijas un x8% más de daño mientras está empalado. Tras 1.5 s, las hojas vuelven a ti y perforan a los enemigos para infligirles {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño.\n\nLos puntos de combo aumentan el daño y otorgan un bonus de velocidad de movimiento:\n• 1 punto: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% de daño, +20% de bonus\n• 2 puntos: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño, +40% de bonus\n• 3 puntos: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% de daño, +60% de bonus\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esMX": "Costo de Energía: {#}\nProbabilidad de golpe afortunado: {#}%\nHundes tus cuchillas en un enemigo, infliges {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de daño y haces que reciba un x8% más de daño mientras está empalado. Después de 1.5 segundos, las cuchillas vuelven a ti e infligen {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño a los enemigos que perforan.\n\nLos puntos de combo aumentan el daño y otorgan una bonificación de velocidad de movimiento:\n• 1 punto: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% de daño, un +20% de bonificación\n• 2 puntos: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño, un +40% de bonificación\n• 3 puntos: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% de daño, un +60% de bonificación\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"frFR": "Coût en énergie : {#}\nChances de coup de chance : {#}%\nVous empalez une cible avec vos lames et infligez {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% points de dégâts. Tant que la cible est empalée, vous lui infligez x8% de dégâts supplémentaires. Après 1.5 s, vos lames reviennent vers vous en transperçant les adversaires, infligeant {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% points de dégâts.\n\nLes points de combo augmentent les dégâts et confèrent un bonus à la vitesse de déplacement :\n• 1 point : {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% points de dégâts, bonus de +20%\n• 2 points : {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% points de dégâts, bonus de +40%\n• 3 points : {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% points de dégâts, bonus de +60%.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"itIT": "Costo in energia: {#}\nProbabilità di colpo fortunato: {#}%\nImpali un nemico con le tue lame, infliggendo {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% danni e facendogli subire il x8% di danni aggiuntivi mentre è impalato. Dopo 1.5 s, le lame tornano da te, trapassando i nemici e infliggendo {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% danni.\n\nI punti combo aumentano i danni e la velocità di movimento:\n• 1 punto: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% danni, +20% bonus\n• 2 punti: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% danni, +40% bonus\n• 3 punti: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% danni, +60% bonus\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"jaJP": "エネルギー消費量: {#}\n幸運の一撃発生率: {#}%\n敵に刃を突き立て、{45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%のダメージを与える。刃が刺さっている間、自身がその敵に与えるダメージがx8%増加する。1.5秒後、刃は敵を貫通して{72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%のダメージを与えながら手元に戻って来る。\n\nコンボポイントでダメージ上昇効果と移動速度ボーナスを得る:\n• 1ポイント: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}%ダメージ、ボーナス量+20%\n• 2ポイント: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%ダメージ、ボーナス量+40%\n• 3ポイント: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}%ダメージ、ボーナス量+60%\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"koKR": "소모: 기력 {#}\n행운의 적중 확률: {#}%\n적을 칼날로 꿰뚫어 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%의 피해를 주고, 꿰뚫려 있는 동안 대상이 자신에게 받는 피해를 x8% 증가시킵니다. 1.5초 후에는 칼날이 돌아오면서 적을 관통하여 {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%의 피해를 줍니다.\n\n연계 점수에 따라 피해가 증가하고 이동 속도가 증가합니다.\n• 1점: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}%의 피해, 이동 속도 +20% 증가\n• 2점: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%의 피해, 이동 속도 +40% 증가\n• 3점: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}%의 피해, 이동 속도 +60% 증가\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"plPL": "Koszt: {#} pkt. energii\nSzansa na szczęśliwy traf: {#}%\nNabijasz wroga na swoje ostrza, zadając mu {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% pkt. obrażeń i sprawiając, że otrzymuje w tym stanie o x8% większe obrażenia. Po 1.5 sek. ostrza wracają do ciebie, przebijając wrogów i zadając im {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% pkt. obrażeń.\n\nPunkty kombinacji zwiększają zadawane obrażenia i zapewniają premię do szybkości ruchu:\n • 1 pkt.: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% pkt. obrażeń, +20% premii.\n • 2 pkt.: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% pkt. obrażeń, +40% premii.\n • 3 pkt.: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% pkt. obrażeń, +60% premii.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Custo de energia: {#}\nChance de Golpe de Sorte: {#}%\nEmpala um inimigo com suas lâminas, causando {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de dano e fazendo-o receber 8% de dano aumentado de você enquanto empalado. Após 1.5 segundos, as lâminas retornam até você, perfurando inimigos e causando {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de dano.\n\nPontos de combo aumentam o dano e concedem um bônus de velocidade de movimento:\n • 1 ponto: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% de dano, 20% de bônus\n • 2 pontos: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de dano, 40% de bônus\n • 3 pontos: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% de dano, +60% de bônus\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Затраты энергии: {#}\nВероятность удачного удара: {#}%\nВы пронзаете противника клинками, нанося {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% ед. урона. Пока действует эффект, вы наносите цели на x8% больше урона. Через 1.5 сек. клинки возвращаются к вам, пробивая противников и нанося им {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% ед. урона.\n\nДополнительные приемы серии увеличивают урон и повышают скорость передвижения:\n• 1 прием: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% ед. урона, +20% бонус\n• 2 приема: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% ед. урона, +40% бонус\n• 3 приема: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% ед. урона, +60% бонус\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"zhCN": "能量消耗:{#}\n幸运一击几率:{#}%\n用你的剑刃刺穿一名敌人,造成{45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%点伤害并使其在被刺穿时受到来自你的伤害提高x8%。1.5秒后,剑刃会回到你身边,穿透敌人并造成{72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%点伤害。\n\n连击点数会提高伤害并给予移动速度加成:\n• 1点:{58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}%点伤害,+20%加成\n• 2点:{72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%点伤害,+40%加成\n• 3点:{85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}%点伤害,+60%加成\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy."
},
		id: 20,
		maxPoints: 5,
		values: [ "30", "35" ],
		x: -394.26,
		y: -207.555
	},
	"Enhanced Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Twisting Blades", "Advanced Twisting Blades", "Improved Twisting Blades" ],
		description: `Twisting Blades deals x30% increased damage when returning.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbesserte Schraubklingen",
			"esES": "Hojas retorcidas mejoradas",
			"esMX": "Cuchillas Inteligentes Potenciadas",
			"frFR": "Lames sournoises renforcées",
			"itIT": "Lame Serpeggianti Rinforzate",
			"jaJP": "ツイストブレード(強化版)",
			"koKR": "강화된 회전 칼날",
			"plPL": "Wzmocnione Wirujące Ostrza",
			"ptBR": "Lâminas Retorcidas Aperfeiçoadas",
			"ruRU": "Усиленные вонзающиеся клинки",
			"zhCN": "强化回旋刀锋"
},
		descriptionLocalized: {
			"deDE": "Schraubklingen verursachen bei der Rückkehr x30% mehr Schaden.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esES": "Las hojas retorcidas infligen un x30% más de daño al volver.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esMX": "Cuchillas Inteligentes inflige un x30% más de daño cuando las cuchillas regresan.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"frFR": "Vos Lames sournoises infligent x30% de dégâts supplémentaires lorsqu'elles reviennent vers vous.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"itIT": "Le Lame Serpeggianti infliggono il x30% di danni aggiuntivi quando mentre tornano indietro.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈ツイストブレード〉が戻って来る際に与えるダメージがx30%増加する。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"koKR": "회전 칼날이 돌아오면서 주는 피해가 x30% 증가합니다.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"plPL": "W drodze powrotnej Wirujące Ostrza zadają obrażenia zwiększone o x30%.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Lâminas Retorcidas causam 30% de dano aumentado ao retornarem.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Возвращаясь к вам, \"Вонзающиеся клинки\" наносят на x30% больше урона.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"zhCN": "回旋刀锋返回时造成的伤害提高x30%。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy."
},
		id: 21,
		maxPoints: 1,
		x: -673.39,
		y: -339.63
	},
	"Advanced Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `When your Twisting Blades return, your active Cooldowns are reduced by 1 second per enemy they passed through, up to 3 seconds.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickelte Schraubklingen",
			"esES": "Hojas retorcidas avanzadas",
			"esMX": "Cuchillas Inteligentes Avanzadas",
			"frFR": "Lames sournoises avancées",
			"itIT": "Lame Serpeggianti Avanzate",
			"jaJP": "ツイストブレード(高度)",
			"koKR": "고급 회전 칼날",
			"plPL": "Zaawansowane Wirujące Ostrza",
			"ptBR": "Lâminas Retorcidas Avançadas",
			"ruRU": "Передовые вонзающиеся клинки",
			"zhCN": "进阶回旋刀锋"
},
		descriptionLocalized: {
			"deDE": "Wenn Eure Schraubklingen zurückkehren, werden Eure aktiven Abklingzeiten für jeden Gegner, den sie durchschlagen haben, um 1 Sek. reduziert, bis zu maximal 3 Sek.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esES": "Cuando vuelven las hojas retorcidas, tus tiempos de reutilización activos se reducen 1 s por cada enemigo atravesado, hasta un máximo de 3 s.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esMX": "Cuando tus Cuchillas Inteligentes vuelven, tus recuperaciones se reducen 1 segundo por cada enemigo que atravesaron, hasta un máximo de 3 segundos.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"frFR": "Lorsque vos Lames sournoises vous reviennent, vos temps de recharge actifs sont réduits de 1 s pour chaque cible traversée, jusqu'à un maximum de 3 s.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"itIT": "Quando le tue Lame Serpeggianti tornano indietro, i tuoi tempi di recupero attivi si riducono di 1 secondi per ogni nemico trapassato, fino a 3 s.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈ツイストブレード〉が戻って来る時、ブレードがすり抜けてきた敵1体ごとにクールダウンが1秒短縮される。短縮量は最大で3秒。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"koKR": "자신의 회전 칼날이 돌아오면 칼날이 통과한 적 하나당 자신의 활성화된 재사용 대기시간이 1초만큼, 최대 3까지 증가합니다.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"plPL": "Kiedy twoje Wirujące Ostrza wracają do ciebie, twoje aktywne czasy odnowienia zostają skrócone o 1 sek. za każdego wroga, przez którego przeniknęły, do maksymalnie 3 sek.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Quando suas Lâminas Retorcidas retornam, suas recargas ativas são reduzidas em 1 segundo por inimigo atravessado por elas, até 3 segundos.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Когда \"Вонзающиеся клинки\" возвращаются к вам, время восстановления навыков сокращается на 1 сек. за каждого противника, через которого они прошли, вплоть до 3 сек.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"zhCN": "回旋刀锋返回时每穿过一名敌人,你的剩余冷却时间缩短1秒,最多缩短3秒。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy."
},
		id: 22,
		maxPoints: 1,
		x: -925,
		y: -337.045
	},
	"Improved Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `Enemies are Dazed while impaled with Twisting Blades.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübte Schraubklingen",
			"esES": "Hojas retorcidas perfeccionadas",
			"esMX": "Cuchillas Inteligentes Mejoradas",
			"frFR": "Lames sournoises améliorées",
			"itIT": "Lame Serpeggianti Migliorato",
			"jaJP": "ツイストブレード(改良)",
			"koKR": "향상된 회전 칼날",
			"plPL": "Ulepszone Wirujące Ostrza",
			"ptBR": "Lâminas Retorcidas Aprimoradas",
			"ruRU": "Улучшенные вонзающиеся клинки",
			"zhCN": "强力回旋刀锋"
},
		descriptionLocalized: {
			"deDE": "Gegner sind benommen, solange sie von Schraubklingen aufgespießt sind.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esES": "Los enemigos quedan atontados mientras están empalados por Hojas retorcidas.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esMX": "Los enemigos quedan atontados cuando están empalados por Cuchillas Inteligentes.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"frFR": "Les cibles empalées par vos Lames sournoises sont hébétées.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"itIT": "I nemici sono affetti da Frastornamento quando vengono colpiti da Lame Serpeggianti.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈ツイストブレード〉に貫かれている敵は眩暈状態になる。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"koKR": "회전 칼날에 꿰뚫린 적이 멍해짐 상태가 됩니다.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"plPL": "Wrogowie są oszołomieni, kiedy przebijają ich Wirujące Ostrza.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Inimigos são atingidos por torpor enquanto empalados por Lâminas Retorcidas.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Пока \"Вонзающиеся клинки\" пронзают цель, на нее действует головокружение.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"zhCN": "回旋刀锋穿透敌人时使其眩晕。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy."
},
		id: 23,
		maxPoints: 1,
		x: -701.45,
		y: -465.235
	},
	"Flurry": {
		connections: [ "Enhanced Flurry", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Unleash a flurry of stabs and slashes, striking enemies in front of you 4 times and dealing a total of {60/66/72/78/84/90/96/102/108/114}% damage to each.

Combo Points increase damage and grant an Attack Speed bonus:
• 1 Point: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% damage, +15% bonus
• 2 Points: {90/99/108/117/126/135/144/153/162/171}% damage, +30% bonus
• 3 Points: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% damage, +45% bonus

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Klingensturm",
			"esES": "Aluvión",
			"esMX": "Ráfaga",
			"frFR": "Rafale",
			"itIT": "Raffica",
			"jaJP": "連続斬り",
			"koKR": "연타",
			"plPL": "Wir Ostrzy",
			"ptBR": "Turbilhão",
			"ruRU": "Шквал",
			"zhCN": "快刀乱刺"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: {#}\nGlückstrefferchance: {#}%\nEntfesselt einen Sturm aus Klingenhieben, der Gegner vor Euch 4-mal trifft und jedem Gegner insgesamt {60/66/72/78/84/90/96/102/108/114}% Schaden zufügt.\n\nKombopunkte erhöhen den Schaden und verleihen einen Angriffsgeschwindigkeitsbonus:\n • 1 Punkt: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% Schaden, +15% Bonus\n • 2 Punkte: {90/99/108/117/126/135/144/153/162/171}% Schaden, +30% Bonus\n • 3 Punkte: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% Schaden, +45% Bonus\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esES": "Coste de energía: {#}\nProbabilidad de golpe de suerte: {#}%\nEjecutas un aluvión de puñaladas y tajos para golpear 4 veces a los enemigos frente a ti e infligir un total de {60/66/72/78/84/90/96/102/108/114}% de daño a cada uno.\n\nLos puntos de combo aumentan el daño y otorgan un bonus de velocidad de ataque:\n• 1 punto: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de daño y un +15% de bonus\n• 2 puntos: {90/99/108/117/126/135/144/153/162/171}% de daño y un +30% de bonus\n• 3 puntos: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% de daño y un +45% de bonus\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esMX": "Costo de Energía: {#}\nProbabilidad de golpe afortunado: {#}%\nDesatas una ráfaga de puñaladas y cuchilladas que golpean a los enemigos frente a ti 4 veces e infligen un total de {60/66/72/78/84/90/96/102/108/114}% de daño a cada uno.\n\nLos puntos de combo aumentan el daño y otorgan una bonificación de velocidad de ataque:\n• 1 punto: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de daño, +15% de bonificación\n• 2 puntos: {90/99/108/117/126/135/144/153/162/171}% de daño, +30% de bonificación\n• 3 puntos: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% de daño, +45% de bonificación\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"frFR": "Coût en énergie : {#}\nChances de coup de chance : {#}%\nVous déclenchez une rafale de coups et frappez les adversaires devant vous 4 fois, ce qui inflige {60/66/72/78/84/90/96/102/108/114}% points de dégâts au total à chaque cible.\n\nLes points de combo augmentent les dégâts et confèrent un bonus à la vitesse d'attaque :\n• 1 point : {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% points de dégâts, bonus de +15%\n• 2 points : {90/99/108/117/126/135/144/153/162/171}% points de dégâts, bonus de +30%\n• 3 points : {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% points de dégâts, bonus de +45%\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"itIT": "Costo in energia: {#}\nProbabilità di colpo fortunato: {#}%\nScateni una raffica di colpi e fendenti, che colpisce i nemici frontali per 4 volte e infligge a ciascuno un totale di {60/66/72/78/84/90/96/102/108/114}% danni.\n\nI punti combo aumentano i danni e forniscono un bonus del alla velocità d'attacco:\n• 1 punto: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% danni, bonus del +15%\n• 2 punti: {90/99/108/117/126/135/144/153/162/171}% danni, bonus del +30%\n• 3 punti: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% danni, bonus del +45%\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"jaJP": "エネルギー消費量: {#}\n幸運の一撃発生率: {#}%\n高速の刺突と斬撃を繰り出して前方の敵を4回攻撃し、 敵それぞれに合計で{60/66/72/78/84/90/96/102/108/114}%のダメージを与える。\n\nコンボポイントでダメージが上昇し、の攻撃速度ボーナスを得る:\n• 1ポイント: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%ダメージ、+15%のボーナス\n• 2ポイント: {90/99/108/117/126/135/144/153/162/171}%ダメージ、+30%のボーナス\n• 3ポイント: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}%ダメージ、+45%のボーナス\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"koKR": "소모: 기력 {#}\n행운의 적중 확률: {#}%\n전방의 적들을 4번 마구 찌르고 베어 각각의 적에게 총 {60/66/72/78/84/90/96/102/108/114}%의 피해를 줍니다.\n\n연계 점수에 따라 피해가 증가하고 공격 속도가 증가합니다.\n• 1점: 피해 {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%, 추가 +15%\n• 2점: 피해 {90/99/108/117/126/135/144/153/162/171}%, 추가 +30%\n• 3점: 피해 {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}%, 추가 +45%\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"plPL": "Koszt: {#} pkt. energii\nSzansa na szczęśliwy traf: {#}%\nWyzwalasz nawałnicę cięć i ciosów, atakując wrogów przed tobą 4 razy i zadając każdemu z nich {60/66/72/78/84/90/96/102/108/114}% pkt. obrażeń.\n\nPunkty kombinacji zwiększają zadawane obrażenia i zapewniają premię do szybkości ataku:\n• 1 pkt.: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% pkt. obrażeń, premia +15% sek.\n• 2 pkt.: {90/99/108/117/126/135/144/153/162/171}% pkt. obrażeń, premia +30% sek.\n• 3 pkt.: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% pkt. obrażeń, premia +45% sek.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Custo de energia: {#}\nChance de Golpe de Sorte: {#}%\nLibera um turbilhão de punhaladas e cortes, atingindo inimigos à sua frente 4 vezes e causando um total de {60/66/72/78/84/90/96/102/108/114}% de dano a cada um.\n\nPontos de combo aumentam o dano e concedem um bônus de velocidade de ataque:\n • 1 ponto: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de dano, +15% de bônus\n• 2 pontos: {90/99/108/117/126/135/144/153/162/171}% de dano, +30% de bônus\n• 3 pontos: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% de dano, +45% de bônus\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Затраты энергии: {#}\nВероятность удачного удар: {#}%\nВы обрушиваете на противников перед собой шквал из 4 рубящих и режущих ударов, в общей сложности нанося {60/66/72/78/84/90/96/102/108/114}% ед. урона каждой цели.\n\nДополнительные приемы серии увеличивают урон и повышают скорость атаки:\n• 1 прием: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% ед. урона, +15% к скорости атаки\n• 2 приема: {90/99/108/117/126/135/144/153/162/171}% ед. урона, +30% к скорости атаки\n• 3 приема: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% ед. урона, +45% к скорости атаки\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"zhCN": "能量消耗:{#}\n幸运一击几率:{#}%\n连续刺击并劈砍前方的敌人4次,造成总计{60/66/72/78/84/90/96/102/108/114}%点伤害。\n\n连击点数会提高伤害并给予攻击速度加成:\n• 1点:{75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%点伤害,+15%加成\n• 2点:{90/99/108/117/126/135/144/153/162/171}%伤害,+30%加成\n• 3点:{105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}%点伤害,+45%加成\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy."
},
		id: 24,
		maxPoints: 5,
		values: [ "25", "8" ],
		x: -382.935,
		y: 182.375
	},
	"Enhanced Flurry": {
		baseSkill: "Flurry",
		connections: [ "Flurry", "Improved Flurry", "Advanced Flurry" ],
		description: `Each time Flurry damages a Crowd Controlled or Vulnerable enemy, you are Healed for 1% of your Maximum Life, up to 12% Maximum Life per cast.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbesserter Klingensturm",
			"esES": "Aluvión mejorado",
			"esMX": "Ráfaga Potenciada",
			"frFR": "Rafale renforcée",
			"itIT": "Raffica Rinforzata",
			"jaJP": "連続斬り(強化版)",
			"koKR": "강화된 연타",
			"plPL": "Wzmocniony Wir Ostrzy",
			"ptBR": "Turbilhão Aperfeiçoado",
			"ruRU": "Усиленный шквал",
			"zhCN": "强化快刀乱刺"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Klingensturm einem Gegner Schaden zufügt, der unter Kontrollverlusteffekten leidet oder verwundbar ist, werdet Ihr um 1% Eures maximalen Lebens geheilt, bis zu 12% maximalem Leben pro Einsatz.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esES": "Cada vez que Aluvión inflige daño a un enemigo vulnerable o afectado por control de masas, te curas un 1% de tu vida máxima, hasta un máximo de un 12% de vida máxima por lanzamiento.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esMX": "Cada vez que Ráfaga inflige daño a un enemigo bajo los efectos de control de multitudes o vulnerable, te sanas un 1% de tu vida máxima, hasta un 12% de vida máxima por lanzamiento.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"frFR": "Chaque fois que Rafale inflige des dégâts à une cible vulnérable ou subissant un effet de perte de contrôle, vous récupérez 1% de votre maximum de points de vie, jusqu'à un maximum de 12% de vos points de vie par utilisation.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"itIT": "Ogni volta che Raffica infligge danni a un nemico sotto effetti debilitanti o vulnerabile, ti cura del 1% della tua Vita massima, fino a un massimo del 12% della Vita massima per utilizzo.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"jaJP": "操作妨害効果を受けているか脆弱状態の敵に対して〈連続斬り〉でダメージを与えるたびに、ライフ最大値の1%にあたるのライフを回復する。一度の使用での回復上限は、ライフ最大値の12%にあたる。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"koKR": "연타로 군중 제어 또는 취약 상태의 적에게 피해를 줄 때마다 자신의 생명력을 최대 생명력의 1%만큼, 시전당 최대 12%까지 회복합니다.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"plPL": "Za każdym razem, gdy Wir Ostrzy zadaje obrażenia wrogowi, który jest odsłonięty albo pod wpływem ograniczenia kontrolę, odzyskujesz 1% maksymalnego zdrowia, maksymalnie do 12% za każde użycie umiejętności.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Sempre que Turbilhão causa dano a um inimigo sob controle de grupo ou vulnerável, você recebe cura de 1% da sua vida máxima, até 12% da vida máxima por lançamento.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Когда \"Шквал\" поражает уязвимого противника или цель под действием эффектов контроля, вы восполняете 1% максимального запаса здоровья вплоть до 12% максимального запаса здоровья за одно применение.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"zhCN": "每次快刀乱刺对一名被群控或处于易伤状态的敌人造成伤害,你会恢复1%生命上限,单次施法最多恢复12%生命上限。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy."
},
		id: 25,
		maxPoints: 1,
		x: -659.145,
		y: 319.86
	},
	"Improved Flurry": {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `If Flurry hits any Vulnerable enemy it will make all enemies hit by that cast Vulnerable for 3 seconds.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübter Klingensturm",
			"esES": "Aluvión mejorado",
			"esMX": "Ráfaga Mejorada",
			"frFR": "Rafale améliorée",
			"itIT": "Raffica Migliorata",
			"jaJP": "連続斬り(改良)",
			"koKR": "향상된 연타",
			"plPL": "Ulepszony Wir Ostrzy",
			"ptBR": "Turbilhão Aprimorado",
			"ruRU": "Улучшенный шквал",
			"zhCN": "强力快刀乱刺"
},
		descriptionLocalized: {
			"deDE": "Wenn Klingensturm einen verwundbaren Gegner trifft, werden alle Gegner, die von diesem Einsatz getroffen werden, 3 Sek. lang verwundbar.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esES": "Si Aluvión golpea a cualquier enemigo vulnerable, volverá vulnerables durante 3 s a todos los enemigos golpeados por el lanzamiento.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esMX": "Si Ráfaga golpea a algún enemigo vulnerable, volverá vulnerables a todos los enemigos golpeados por ese lanzamiento durante 3 segundos.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"frFR": "Si Rafale touche une cible vulnérable, toutes les cibles qu'elle touche lors de cette utilisation deviennent vulnérables pendant 3 s.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"itIT": "Se Raffica colpisce un nemico vulnerabile renderà tutti i nemici colpiti da quel lancio vulnerabili per 3 s.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈連続斬り〉が脆弱状態の敵に命中すると、その際に命中していたすべての敵を3秒間にわたり脆弱状態にする。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"koKR": "연타가 취약 상태의 적에게 적중하면 해당 기술을 시전하여 적중한 모든 적이 3초 동안 취약 상태가 됩니다.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"plPL": "Jeśli Wir Ostrzy trafi odsłoniętego wroga, wszyscy wrogowie trafieni tym użyciem staną się odsłonięci na 3 sek.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Se Turbilhão atingir qualquer inimigo vulnerável, ele deixará todos os inimigos atingidos por esse lançamento vulneráveis por 3 segundos.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Когда \"Шквал\" поражает уязвимого противника, все противники, пораженные за это применение навыка, становятся уязвимыми на 3 сек.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"zhCN": "如果快刀乱刺命中任意易伤的敌人,其会使所有被该次技能命中的敌人都陷入易伤状态,持续3秒。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy."
},
		id: 26,
		maxPoints: 1,
		x: -919.385,
		y: 329.755
	},
	"Advanced Flurry": {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `Evading through an enemy will cause your next Flurry to Stun enemies for 2.5 seconds.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Fortgeschrittener Klingensturm",
			"esES": "Aluvión avanzado",
			"esMX": "Ráfaga Avanzada",
			"frFR": "Rafale avancée",
			"itIT": "Raffica Avanzata",
			"jaJP": "連続斬り(高度)",
			"koKR": "고급 연타",
			"plPL": "Zaawansowany Wir Ostrzy",
			"ptBR": "Turbilhão Avançado",
			"ruRU": "Передовой шквал",
			"zhCN": "高级快刀乱刺"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr durch einen Gegner hindurch entrinnt, wird Euer nächster Klingensturm Gegner 2.5 Sek. lang betäuben.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esES": "Evadirte a través de un enemigo hace que tu siguiente Aluvión aturda a los enemigos durante 2.5 s.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"esMX": "Atravesar a un enemigo para evadir hará que tu siguiente Ráfaga aturda a los enemigos durante 2.5 segundos.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"frFR": "Après avoir effectué une esquive en traversant une cible, votre prochaine Rafale étourdit les cibles pendant 2.5 s.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"itIT": "Schivando attraverso un nemico il tuo prossimo utilizzo di Raffica stordirà i nemici per 2.5 s.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"jaJP": "敵をすり抜けると、次に使用する〈連続斬り〉が敵を2.5秒間にわたりスタンさせる。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"koKR": "피하기로 적을 통과하면 다음 연타가 적을 2.5초 동안 기절시킵니다.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"plPL": "Przeniknięcie przez wroga przy użyciu Odskoku sprawi, że twój następny Wir Ostrzy ogłuszy wrogów na 2.5 sek.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Evadir através de um inimigo fará seu próximo Turbilhão atordoar inimigos por 2.5 segundos.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Когда вы уклоняетесь через противника, ваш следующий \"Шквал\" оглушает противников на 2.5 сек.\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.",
			"zhCN": "闪避敌人攻击将使你的下一个快刀乱刺击晕敌人2.5秒。\n\nTags: Core, Cutthroat, Imbueable, Damage, Physical, Energy."
},
		id: 27,
		maxPoints: 1,
		x: -685.845,
		y: 462.11
	},
	"Penetrating Shot": {
		connections: [ "Enhanced Penetrating Shot", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Fire an arrow that pierces through all enemies in a line, dealing {70/77/84/91/98/105/112/119/126/133}% damage.

Combo Points increase damage and improve Lucky Hit Chance:
• 1 Point: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% damage, +10% chance
• 2 Points: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% damage, +20% chance
• 3 Points: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% damage, +30% chance

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Durchschlagender Schuss",
			"esES": "Disparo penetrante",
			"esMX": "Disparo Penetrante",
			"frFR": "Tir pénétrant",
			"itIT": "Tiro Penetrante",
			"jaJP": "貫通矢",
			"koKR": "꿰뚫는 사격",
			"plPL": "Przebijający Strzał",
			"ptBR": "Disparo Perfurante",
			"ruRU": "Пробивающий выстрел",
			"zhCN": "穿透射击"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: {#}\nGlückstrefferchance: {#}%\nSchießt einen Pfeil ab, der alle Gegner in einer Linie durchschlägt und {70/77/84/91/98/105/112/119/126/133}% Schaden verursacht.\n\nKombopunkte erhöhen den Schaden und verbessern die Glückstrefferchance:\n • 1 Punkt: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% Schaden, Chance von +10%\n • 2 Punkte: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% Schaden, Chance von +20%\n • 3 Punkte: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% Schaden, Chance von +30%\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Coste de energía: {#}\nProbabilidad de golpe de suerte: {#}%\nDisparas una flecha que perfora a todos los enemigos situados en una línea e inflige {70/77/84/91/98/105/112/119/126/133}% de daño.\n\nLos puntos de combo aumentan el daño y la probabilidad de golpe de suerte:\n• 1 punto: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% de daño y un +10% de probabilidad\n• 2 puntos: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% de daño y un +20% de probabilidad\n• 3 puntos: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% de daño y un +30% de probabilidad\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Costo de Energía: {#}\nProbabilidad de golpe afortunado: {#}%\nDisparas una flecha que perfora a todos los enemigos en una línea y les inflige {70/77/84/91/98/105/112/119/126/133}% de daño.\n\nLos puntos de combo aumentan el daño y mejoran la probabilidad de golpe afortunado:\n• 1 punto: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% de daño, +10% de probabilidad\n• 2 puntos: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% de daño, +20% de probabilidad\n• 3 puntos: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% de daño, +30% de probabilidad\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Coût en énergie : {#}\nChances de coup de chance : {#}%\nVous tirez une flèche qui transperce toutes les cibles adverses en ligne droite et leur inflige {70/77/84/91/98/105/112/119/126/133}% points de dégâts.\n\nLes points de combo augmentent les dégâts et confèrent un bonus aux chances de coup de chance :\n• 1 point : {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% points de dégâts, bonus de +10%\n• 2 points : {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% points de dégâts, bonus de +20%\n• 3 point : {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% points de dégâts, bonus de +30%\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Costo in energia: {#}\nProbabilità di colpo fortunato: {#}%\nScagli una freccia che trapassa i nemici lungo una linea retta, infliggendo {70/77/84/91/98/105/112/119/126/133}% danni.\n\nI punti combo aumentano i danni e migliorano le probabilità di colpo fortunato:\n• 1 punto: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% danni, +10% probabilità\n• 2 punti: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% danni, +20% probabilità\n• 3 punti: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% danni, +30% probabilità\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "エネルギー消費量: {#}\n幸運の一撃発生率: {#}%\n直線上にいるすべての敵を貫通する矢を放ち、{70/77/84/91/98/105/112/119/126/133}%のダメージを与える。\n\nコンボポイントでダメージと幸運の一撃発生率が増加する:\n• 1ポイント: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}%ダメージ、発生率+10%\n• 2ポイント: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}%ダメージ、発生率+20%\n• 3ポイント: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}%ダメージ、発生率+30%\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "소모: 기력 {#}\n행운의 적중 확률: {#}%\n직선상의 모든 적을 관통하는 화살을 발사하여 {70/77/84/91/98/105/112/119/126/133}%의 피해를 줍니다.\n\n연계 점수에 따라 피해와 행운의 적중 확률이 증가합니다.\n• 1점: 피해 {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}%, 확률 +10%\n• 2점: 피해 {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}%, 확률 +20%\n• 3점: 피해 {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}%, 확률 +30%\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Koszt: {#} pkt. energii\nSzansa na szczęśliwy traf: {#}%\nWypuszczasz strzałę, która przebija wszystkich wrogów w linii prostej, zadając im {70/77/84/91/98/105/112/119/126/133}% pkt. obrażeń.\n\nPunkty kombinacji zwiększają obrażenia i szansę na szczęśliwy traf:\n• 1 pkt.: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% pkt. obrażeń, +10% szans.\n • 2 pkt.: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% pkt. obrażeń, +20% szans.\n • 3 pkt.: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% pkt. obrażeń, +30% szans.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Custo de energia: {#}\nChance de Golpe de Sorte: {#}%\nDispara uma flecha que atravessa todos os inimigos em uma linha, causando {70/77/84/91/98/105/112/119/126/133}% de dano.\n\nPontos de combo aumentam o dano e melhoram a chance de Golpe de Sorte:\n• 1 ponto: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% de dano, +10% de chance\n• 2 pontos: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% de dano, +20% de chance\n• 3 pontos: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% de dano, +30% de chance\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Затраты энергии: {#}\nВероятность удачного удара: {#}%\nВы выпускаете стрелу, пронзающую всех противников на линии и наносящую {70/77/84/91/98/105/112/119/126/133}% ед. урона.\n\nДополнительные приемы серии увеличивают урон и повышают вероятность удачного удара:\n• 1 прием: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% ед. урона, +10% к вероятности\n• 2 приема: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% ед. урона, +20% к вероятности\n• 3 приема: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% ед. урона, +30% к вероятности\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "能量消耗:{#}\n幸运一击几率:{#}%\n发射一支会穿透一条直线上所有敌人的箭矢,造成{70/77/84/91/98/105/112/119/126/133}%点伤害。\n\n连击点数会提高伤害与幸运一击几率:\n• 1点:{91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}%点伤害,+10%几率\n• 2点:{112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}%点伤害,+20%几率\n• 3点:{133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}%点伤害,+30%几率\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 28,
		maxPoints: 5,
		values: [ "35", "50" ],
		x: 4.86,
		y: 290.085
	},
	"Enhanced Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Penetrating Shot", "Advanced Penetrating Shot", "Improved Penetrating Shot" ],
		description: `Penetrating Shot deals x20% increased damage per enemy it pierces.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbesserter Durchschlagender Schuss",
			"esES": "Disparo penetrante mejorado",
			"esMX": "Disparo Penetrante Potenciado",
			"frFR": "Tir pénétrant renforcé",
			"itIT": "Tiro Penetrante Rinforzato",
			"jaJP": "貫通矢(強化版)",
			"koKR": "강화된 꿰뚫는 사격",
			"plPL": "Wzmocniony Przebijający Strzał",
			"ptBR": "Disparo Perfurante Aperfeiçoado",
			"ruRU": "Усиленный пробивающий выстрел",
			"zhCN": "强化穿透射击"
},
		descriptionLocalized: {
			"deDE": "Durchschlagender Schuss verursacht x20% mehr Schaden pro durchschlagenem Gegner.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Disparo penetrante inflige un x20% más de daño por cada enemigo que atraviesa.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Disparo Penetrante inflige un x20% más de daño por cada enemigo que perfora.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Tir pénétrant inflige x20% de dégâts supplémentaires par cible transpercée.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Tiro Penetrante infligge il x20% di danni aggiuntivi per ogni nemico che trapassa.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "敵1体を貫くごとに〈貫通矢〉の与えるダメージがx20%増加する。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "꿰뚫는 사격이 관통하는 적 하나당 공격력이 x20% 증가합니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Przebijający Strzał zadaje obrażenia zwiększone o x20% za każdego przebitego wroga.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Disparo Perfurante causa 20% de dano aumentado por inimigo perfurado.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Урон от \"Пробивающего выстрела\" увеличивается на x20% за каждого пронзенного противника.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "穿透射击每穿透一名敌人,造成的伤害提高x20%。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 29,
		maxPoints: 1,
		x: 3.43,
		y: 491.945
	},
	"Advanced Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `When cast with full Energy, Penetrating Shot will Slow all enemies it hits by 50% for 3 seconds. Elite enemies will also be Knocked Down for 1.5 seconds.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickelter Durchschlagender Schuss",
			"esES": "Disparo penetrante avanzado",
			"esMX": "Disparo Penetrante Avanzado",
			"frFR": "Tir pénétrant avancé",
			"itIT": "Tiro Penetrante Avanzato",
			"jaJP": "貫通矢(高度)",
			"koKR": "고급 꿰뚫는 사격",
			"plPL": "Zaawansowany Przebijający Strzał",
			"ptBR": "Disparo Perfurante Avançado",
			"ruRU": "Передовой пробивающий выстрел",
			"zhCN": "进阶穿透射击"
},
		descriptionLocalized: {
			"deDE": "Beim Einsatz mit voller Energie wird Durchschlagender Schuss alle getroffenen Gegner 3 Sek. um 50% verlangsamen. Elitegegner werden außerdem 1.5 Sek. lang niedergeschlagen.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Cuando se lanza con la energía al máximo, Disparo penetrante ralentizará a todos los enemigos que golpee un 50% durante 3 s. Además, los enemigos de élite quedarán derribados durante 1.5 s.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Lanzar Disparo Penetrante con la Energía al máximo ralentizará a todos los enemigos golpeados un 50% durante 3 segundos. Los enemigos de Élite también serán derribados durante 1.5 segundos.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Si vous lancez Tir pénétrant alors que votre énergie est au maximum, il ralentira les adversaires qu'il touche de 50% pendant 3 s. Il renversera également les élites pendant 1.5 s.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Quando viene lanciato con l'energia al massimo, Tiro Penetrante rallenta tutti i nemici che colpisce del 50% per 3 s. I nemici élite inoltre cadranno a terra per 1.5 s.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "エネルギー満タン時に使用した〈貫通矢〉は、命中したすべての敵の移動速度を3秒間にわたり50%低下させる。エリート敵に対しては、1.5秒間にわたりノックダウン状態にする効果が加わる。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "기력이 가득 차 있을 때 꿰뚫는 사격이 적중한 모든 적을 3초 동안 50% 감속시킵니다. 또한 정예 적은 1.5초 동안 넘어뜨립니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Jeśli Przebijający Strzał zostanie użyty przy pełnym zasobie energii, spowolni wszystkich trafionych wrogów o 50% na 3 sek. Elitarni wrogowie zostaną dodatkowo powaleni na 1.5 sek.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Ao ser lançado com energia cheia, Disparo Perfurante aplicará lentidão a todos os inimigos atingidos em 50% por 3 segundos. Inimigos de elite também serão nocauteados por 1.5 segundos.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Когда вы применяете \"Пробивающий выстрел\" с полным запасом энергии, пораженные противники замедляются на 50% на 3 сек. Особые противники также сбиваются с ног на 1.5 сек.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "能量全满时,穿透射击会使所有命中的敌人减速50%,持续3秒。精英敌人还会被击倒,持续1.5秒。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 30,
		maxPoints: 1,
		x: -151.43,
		y: 600.305
	},
	"Improved Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `If Penetrating Shot damages at least 3 enemies, your next Penetrating Shot has a +20% increased Critical Strike Chance.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübter Durchschlagender Schuss",
			"esES": "Disparo penetrante perfeccionado",
			"esMX": "Disparo Penetrante Mejorado",
			"frFR": "Tir pénétrant amélioré",
			"itIT": "Tiro Penetrante Migliorato",
			"jaJP": "貫通矢(改良)",
			"koKR": "향상된 꿰뚫는 사격",
			"plPL": "Poprawiony Przebijający Strzał",
			"ptBR": "Disparo Perfurante Aprimorado",
			"ruRU": "Улучшенный пробивающий выстрел",
			"zhCN": "强力穿透射击"
},
		descriptionLocalized: {
			"deDE": "Wenn Durchschlagender Schuss mindestens 3 Gegnern Schaden zufügt, verfügt Euer nächster Einsatz von Durchschlagender Schuss über eine +20% höhere kritische Trefferchance.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Si Disparo penetrante inflige daño a al menos 3 enemigos, tu siguiente Disparo penetrante tiene un +20% más de probabilidad de golpe crítico.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Si Disparo Penetrante inflige daño a por lo menos 3 enemigos, tu próximo Disparo Penetrante tiene un +20% más de probabilidad de golpe crítico.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Si Tir pénétrant inflige des dégâts à au moins 3 adversaires, les chances d'infliger un coup critique de votre prochain Tir pénétrant sont augmentées de +20%.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Se Tiro Penetrante infligge danni ad almeno 3 nemici, la probabilità di critico del tuo successivo Tiro Penetrante aumenta del +20%.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈貫通矢〉が少なくとも3体の敵にダメージを与えると、次の〈貫通矢〉のクリティカルヒット率が+20%上昇する。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "꿰뚫는 사격으로 적에게 최소 3의 피해를 주면, 다음 꿰뚫는 사격의 극대화 확률이 +20% 증가합니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Jeśli Przebijający Strzał zada obrażenia co najmniej 3 wrogom, twój kolejny Przebijający Strzał będzie miał szansę na trafienie krytyczne zwiększoną o +20%.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Se Disparo Perfurante causar dano a pelo menos 3 inimigos, seu próximo Disparo Perfurante tem +20% de chance de acerto crítico aumentada.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Если \"Пробивающий выстрел\" поражает не менее 3 противников, вероятность критического эффекта следующего \"Пробивающего выстрела\" повышается на +20%.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "如果穿透射击至少对3名敌人造成伤害,你的下一个穿透射击的暴击几率提高+20%。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 31,
		maxPoints: 1,
		x: 167.52,
		y: 602.47
	},
	"Rapid Fire": {
		connections: [ "Enhanced Rapid Fire", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Rapidly fire 5 arrows, each dealing {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% damage.

Combo Points increase damage and arrows fired:
• 1 Point: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% damage, 6 arrows
• 2 Points: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% damage, 7 arrows
• 3 Points: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% damage, 8 arrows

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Schnellfeuer",
			"esES": "Fuego rápido",
			"esMX": "Disparo Rápido",
			"frFR": "Tir rapide",
			"itIT": "Tiro Rapido",
			"jaJP": "ラピッド・ファイア",
			"koKR": "연발 사격",
			"plPL": "Szybki Ostrzał",
			"ptBR": "Fogo Rápido",
			"ruRU": "Скоростная стрельба",
			"zhCN": "快速射击"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: {#}\nGlückstrefferchance: {#}%\nFeuert schnell 5 Pfeile ab, die jeweils {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% Schaden verursachen.\n\nKombopunkte erhöhen den Schaden und die Menge der abgeschossenen Pfeile::\n • 1 Punkt: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% Schaden, 6 Pfeile\n • 2 Punkte: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% Schaden, 7 Pfeile\n • 3 Punkte: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% Schaden, 8 Pfeile\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Coste de energía: {#}\nProbabilidad de golpe de suerte: {#}%\nDisparas rápidamente 5 flechas que infligen {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% de daño cada una.\n\nLos puntos de combo aumentan el daño y el número de flechas lanzadas:\n• 1 punto: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% de daño y 6 flechas\n• 2 puntos: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% de daño y 7 flechas\n• 3 puntos: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% de daño y 8 flechas\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Costo de Energía: {#}\nProbabilidad de golpe afortunado: {#}%\nDisparas 5 flechas con rapidez que infligen {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% de daño cada una.\n\nLos puntos de combo aumentan el daño y la cantidad de flechas disparadas:\n• 1 punto: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% de daño, 6 flechas\n• 2 puntos: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% de daño, 7 flechas\n• 3 puntos: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% de daño, 8 flechas\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Coût en énergie : {#}\nChances de coup de chance : {#}%\nVous tirez rapidement 5 flèches qui infligent chacune {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% points de dégâts.\n\nLes points de combo augmentent les dégâts et le nombre de flèches tirées :\n• 1 point : {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% points de dégâts, 6 flèches\n• 2 points : {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% points de dégâts, 7 flèches\n• 3 points : {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% points de dégâts, 8 flèches\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Costo in energia: {#}\nProbabilità di colpo fortunato: {#}%\nScagli rapidamente 5 frecce che infliggono {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% danni ciascuna.\n\nI punti combo aumentano i danni e le frecce scagliate:\n• 1 punto: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% danni, 6 frecce\n• 2 punti: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% danni, 7 frecce\n• 3 punti: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% danni, 8 frecce\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "エネルギー消費量: {#}\n幸運の一撃発生率: {#}%\n矢を5本連射し、それぞれの矢が{24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}%のダメージを与える。\n\nコンボポイントでダメージと放たれる矢の数が増大:\n• 1ポイント: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}%ダメージ、6本の矢\n• 2ポイント: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}%ダメージ、7本の矢\n• 3ポイント: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}%ダメージ、8本の矢\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "소모: 기력 {#}\n행운의 적중 확률: {#}%\n화살 5개를 빠르게 발사하여 각각 {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}%의 피해를 줍니다.\n\n연계 점수에 따라 주는 피해와 발사하는 화살 개수가 증가합니다.\n• 1점: 피해 {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}%, 화살 6개\n• 2점: 피해 {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}%, 화살 7개\n• 3점: 피해 {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}%, 화살 8개\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Koszt: {#} pkt. energii\nSzansa na szczęśliwy traf: {#}%\nSzybko wypuszczasz strzały (5), z których każda zadaje {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% pkt. obrażeń.\n\nPunkty kombinacji zwiększają zadawane obrażenia i liczbę wypuszczonych strzał:\n • 1 pkt.: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% pkt. obrażeń, strzały: 6.\n • 2 pkt.: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% pkt. obrażeń, strzały: 7.\n • 3 pkt.: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% pkt. obrażeń, strzały: 8.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Custo de energia: {#}\nChance de Golpe de Sorte: {#}%\nDispara 5 flechas rapidamente. Cada uma causa {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% de dano.\n\nPontos de combo aumentam o dano e a quantidade de flechas disparadas:\n• 1: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% de dano, 6 flechas\n • 2: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% de dano, 7 flechas\n • 3: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% de dano, 8 flechas\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Затраты энергии: {#}\nВероятность удачного удара: {#}%\nВы стремительно выпускаете 5 стрелы, наносящие:стрел, наносящих по {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% ед. урона.\n\nДополнительные приемы серии увеличивают урон и количество стрел:\n• 1 прием: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% ед. урона, 6 стрелы:стрел\n• 2 приема: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% ед. урона, 7 стрелы:стрел\n• 3 приема: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% ед. урона, 8 стрелы:стрел\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "能量消耗:{#}\n幸运一击几率:{#}%\n快速发射5支箭矢,每支造成{24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}%点伤害。\n\n连击点数会提高伤害并增加箭矢数量:\n• 1点:{26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}%点伤害,6支箭矢\n• 2点:{29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}%点伤害,7支箭矢\n• 3点:{33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}%点伤害,8支箭矢\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 32,
		maxPoints: 5,
		values: [ "25", "20" ],
		x: 574.29,
		y: -57.45
	},
	"Enhanced Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Rapid Fire", "Advanced Rapid Fire", "Improved Rapid Fire" ],
		description: `Each subsequent arrow from Rapid Fire has +5% increased Critical Strike Chance, up to +40% for the 8th arrow.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbessertes Schnellfeuer",
			"esES": "Fuego rápido mejorado",
			"esMX": "Disparo Rápido Potenciado",
			"frFR": "Tir rapide renforcé",
			"itIT": "Tiro Rapido Rinforzato",
			"jaJP": "ラピッド・ファイア(強化版)",
			"koKR": "강화된 연발 사격",
			"plPL": "Wzmocniony Szybki Ostrzał",
			"ptBR": "Fogo Rápido Aperfeiçoado",
			"ruRU": "Усиленная скоростная стрельба",
			"zhCN": "强化快速射击"
},
		descriptionLocalized: {
			"deDE": "Jeder nachfolgende Pfeil von Schnellfeuer verfügt über eine +5% höhere kritische Trefferchance, bis maximal +40% für den 8. Pfeil.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Cada flecha adicional de Fuego rápido tiene un +5% más de probabilidad de golpe crítico, hasta un +40% para la 8.ª flecha.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Cada flecha consecutiva de Disparo Rápido tiene un +5% más de probabilidad de golpe crítico, hasta un +40% para la flecha 8.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Chaque flèche de Tir rapide suivant la première a +5% de chances supplémentaires d'infliger un coup critique, jusqu'à un maximum de +40% pour la 8e flèche.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Ogni successiva freccia di Tiro Rapido ha una probabilità di critico aggiuntiva del +5%, fino a un massimo del +40% per la 8a freccia.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈ラピッド・ファイア〉の後続の矢のクリティカル・ヒット率が+5%上昇する。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "연발 사격으로 화살을 발사할 때마다 극대화 확률이 +5%만큼, 최대 8번째 화살의 +40%까지 증가합니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Każda kolejna strzała wypuszczona przy użyciu Szybkiego Ostrzału ma szansę na trafienie krytyczne zwiększoną o +5%, maksymalnie do +40% w przypadku 8 strzały.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Cada flecha subsequente de Fogo Rápido tem +5% de chance de acerto crítico aumentada, até +40% para a 8ª flecha\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "При \"Скоростной стрельбе\" вероятность критического удара повышается на +5% для каждой последующей стрелы, вплоть до +40% для 8-й стрелы.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "快速射击的每一支后续箭矢都会使暴击几率提高+5%,在第8支箭矢时达到最高+40%。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 33,
		maxPoints: 1,
		x: 953.768,
		y: -54.995
	},
	"Advanced Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Rapid Fire deals x30% increased Critical Strike Damage for 3 seconds after you Evade.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickeltes Schnellfeuer",
			"esES": "Fuego rápido avanzado",
			"esMX": "Disparo Rápido Avanzado",
			"frFR": "Tir rapide avancé",
			"itIT": "Tiro Rapido Avanzato",
			"jaJP": "ラピッド・ファイア(高度)",
			"koKR": "고급 연발 사격",
			"plPL": "Zaawansowany Szybki Ostrzał",
			"ptBR": "Fogo Rápido Avançado",
			"ruRU": "Передовая скоростная стрельба",
			"zhCN": "进阶快速射击"
},
		descriptionLocalized: {
			"deDE": "Schnellfeuer verursacht 3 Sek. lang nach dem Ausweichen x30% mehr kritischen Trefferschaden.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Fuego rápido inflige un x30% más de daño de golpe crítico durante 3 s tras evadir.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Disparo Rápido inflige un x30% más de daño de golpe crítico durante 3 segundos al evadir.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Tir rapide inflige x30% de dégâts critiques supplémentaires durant les 3 s qui suivent une esquive.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Tiro Rapido infligge il x30% di danni critici aggiuntivi per 3 s dopo aver eseguito una schivata.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "回避した後の3秒間、〈ラピッド・ファイア〉のクリティカルヒットダメージがx30%増加する。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "피하기 후 3초 동안 연발 사격으로 주는 극대화 피해가 x30% 증가합니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Szybki Ostrzał zadaje obrażenia od trafień krytycznych zwiększone o x30% przez 3 sek. po wykonaniu Odskoku.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Fogo Rápido causa 30% de dano de acerto crítico aumentado por 3 segundos após uma evasão.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Когда вы уклоняетесь, \"Скоростная стрельба\" наносит на x30% больше критического урона в течение 3 сек.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "闪避后,快速射击造成的的暴击伤害提高x30%,持续3秒。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 34,
		maxPoints: 1,
		x: 1172.98,
		y: 34.93
	},
	"Improved Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Gain 15 Energy per cast of Rapid Fire when it damages a Vulnerable enemy.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübtes Schnellfeuer",
			"esES": "Fuego rápido perfeccionado",
			"esMX": "Disparo Rápido Mejorado",
			"frFR": "Tir rapide amélioré",
			"itIT": "Tiro Rapido Migliorato",
			"jaJP": "ラピッド・ファイア(改良)",
			"koKR": "향상된 연발 사격",
			"plPL": "Ulepszony Szybki Ostrzał",
			"ptBR": "Fogo Rápido Aprimorado",
			"ruRU": "Улучшенная скоростная стрельба",
			"zhCN": "强力快速射击"
},
		descriptionLocalized: {
			"deDE": "Erhaltet 15 Energie pro Einsatz von Schnellfeuer, wenn einem verwundbaren Gegner Schaden zugefügt wird.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Obtienes 15 de energía por cada lanzamiento de Fuego rápido cuando daña a un enemigo vulnerable.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Obtienes 15 de Energía por lanzamiento de Disparo Rápido cuando inflige daño a un enemigo vulnerable.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Vous obtenez 15 points d'énergie chaque fois qu'une utilisation de Tir rapide inflige des dégâts à une cible vulnérable.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Ottieni 15 energia per ogni utilizzo di Tiro Rapido che danneggia un nemico vulnerabile.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈ラピッド・ファイア〉が脆弱状態の敵にダメージを与えると、1回の使用あたり15のエネルギーを獲得する。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "연발 사격을 시전하여 취약 상태의 적에게 피해를 줄 때마다 기력을 15 얻습니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Zyskujesz 15 pkt. energii za każde użycie umiejętności, kiedy Szybki Ostrzał zada obrażenia odsłoniętemu wrogowi.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Recebe 15 de energia por lançamento de Fogo Rápido ao causar dano a um inimigo vulnerável.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Вы накапливаете 15 ед. энергии за одно применение \"Скоростной стрельбы\", когда навык поражает уязвимого противника.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "每次施放快速射击对一名处于易伤状态的敌人造成伤害时获得15点能量。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 35,
		maxPoints: 1,
		x: 1175.849,
		y: -134.515
	},
	"Barrage": {
		connections: [ "Enhanced Barrage", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Unleash a barrage of 5 arrows that expands outwards, each dealing {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% damage. Each arrow has a 20% chance to ricochet off an enemy up to 1 time. Ricochets deal 40% of the arrow's Base damage.

Combo Points increase damage and arrows fired:
• 1 Point: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% damage, 6 arrows
• 2 Points: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% damage, 7 arrows
• 3 Points: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% damage, 8 arrows

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Sperrfeuer",
			"esES": "Ráfaga",
			"esMX": "Aluvión",
			"frFR": "Déluge",
			"itIT": "Salva",
			"jaJP": "怒涛",
			"koKR": "탄막",
			"plPL": "Salwa",
			"ptBR": "Salva",
			"ruRU": "Шквальный огонь",
			"zhCN": "乱射"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: {#}\nGlückstrefferchance: {#}%\nEntfesselt ein Sperrfeuer aus 5 Pfeilen, die sich ausdehnen und jeweils {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% Schaden verursachen. Jeder Pfeil verfügt über eine Chance von 20%, bis zu 1-mal von einem Gegner abzuprallen. Querschläger verursachen 40% des Basisschadens des Pfeils.\n\nKombopunkte erhöhen den Schaden und die Menge der abgeschossenen Pfeile:\n • 1 Punkt: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% Schaden, 6 Pfeile\n • 2 Punkte: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% Schaden, 7 Pfeile\n• 3 Punkte: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% Schaden, 8 Pfeile\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Coste de energía: {#}\nProbabilidad de golpe de suerte: {#}%\nLanzas una amplia ráfaga de 5 flechas que se abren hacia fuera e infligen {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% de daño cada una. Cada flecha tiene un 20% de probabilidad de rebotar sobre el enemigo hasta 1 vez. Los rebotes infligen un 40% del daño base de la flecha.\n\nLos puntos de combo aumentan el daño y el número de flechas lanzadas:\n• 1 punto: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% de daño y 6 flechas\n• 2 puntos: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% de daño y 7 flechas\n• 3 puntos: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% de daño y 8 flechas\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Costo de Energía: {#}\nProbabilidad de golpe afortunado: {#}%\nDesatas un aluvión de 5 flechas que se expande hacia afuera, cuyas flechas infligen {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% de daño cada una. Cada flecha tiene un 20% de probabilidad de rebotar en un enemigo hasta 1 vez. Los rebotes infligen un 40% del daño de base de la flecha.\n\nLos puntos de combo aumentan el daño y la cantidad de flechas disparadas:\n• 1 punto: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% de daño, 6 flechas\n • 2 puntos: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% de daño, 7 flechas\n • 3 puntos: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% de daño, 8 flechas\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Coût en énergie : {#}\nChances de coup de chance : {#}%\nVous déclenchez un violent déluge de 5 flèches qui se déploient en infligeant chacune {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% points de dégâts. Chaque flèche a 20% de chances de ricocher sur une cible jusqu'à 1 fois. Les ricochets infligent 40% des dégâts de base de la flèche.\n\nLes points de combo augmentent les dégâts et le nombre de flèches tirées :\n• 1 point : {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% points de dégâts, 6 flèches\n• 2 points : {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% points de dégâts, 7 flèches\n• 3 points : {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% points de dégâts, 8 flèches\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Costo in energia: {#}\nProbabilità di colpo fortunato: {#}%\nScatena una raffica di 5 di frecce che si espandono verso l'esterno e infliggono {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% danni ciascuna. Ogni freccia ha il 20% di probabilità di rimbalzare su un nemico fino a 1 volte. Le frecce rimbalzate infliggono il 40% del danno base delle frecce.\n\nI punti combo aumentano i danni e le frecce scagliate:\n • 1 punto: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% danni, 6 frecce\n • 2 punti: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% danni, 7 frecce\n • 3 punti: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% danni, 8 frecce\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "エネルギー消費量: {#}\n幸運の一撃発生率: {#}%\n5本の外側に拡散する矢を放ち、それぞれの矢が{20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}%のダメージを与える。それぞれの矢は敵に命中した際に20%の確率で最大で1回まで跳飛する。跳飛した矢は、矢の基礎ダメージの40%のダメージを与える。\n\nコンボポイントでダメージと放たれる矢の数が増大:\n• 1ポイント: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}%ダメージ、6本の矢\n• 2ポイント: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}%ダメージ、7本の矢\n• 3ポイント: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}%ダメージ、8本の矢\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "소모: 기력 {#}\n행운의 적중 확률: {#}%\n화살 5개를 넓게 발사하여 각각 {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}%의 피해를 줍니다. 화살은 각각 20% 확률로 최대 1번까지 적에게 부딪혀 튕깁니다. 튕긴 화살은 화살의 기본 공격력의 40%에 해당하는 피해를 줍니다.\n\n연계 점수에 따라 주는 피해와 발사하는 화살 개수가 증가합니다.\n• 1점: 피해 {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}%, 화살 6개\n• 2점: 피해 {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}%, 화살 7개\n• 3점: 피해 {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}%, 화살 8개\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Koszt: {#} pkt. energii.\nSzansa na szczęśliwy traf: {#}%\nWystrzeliwujesz salwę 5 strzał, która rozchodzi się na boki. Każda z nich zadaje {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% pkt. obrażeń i ma 20% szans na odbicie się rykoszetem od wroga maksymalnie 1 raz. Trafienie rykoszetem zadaje 40% obrażeń podstawowych strzały.\n\nPunkty kombinacji zwiększają zadawane obrażenia i liczbę wypuszczonych strzał:\n • 1 pkt.: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% pkt. obrażeń, strzały: 6.\n • 2 pkt.: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% pkt. obrażeń, strzały: 7.\n • 3 pkt.: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% pkt. obrażeń, strzały: 8.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Custo de energia: {#}\nChance de Golpe de Sorte: {#}%\nLibera uma salva de 5 flechas que se expande. Cada uma causa {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% de dano. Cada flecha tem 20% de chance de ricochetear em um inimigo até 1 vez. Os ricochetes causam 40% do dano-base da flecha.\n\nPontos de combo aumentam o dano e a quantidade de flechas disparadas:\n • 1 ponto: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% de dano, 6 flechas\n • 2 pontos: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% de dano, 7 flechas\n • 3 pontos: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% de dano, 36 flechas\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Затраты энергии: {#}\nВероятность удачного удара: {#}%\nВы выпускаете 5 стрелы:стрел, которые разлетаются веером и наносят по {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% ед. урона. Каждая стрела с вероятностью 20% может срикошетить до 1 раз:раз. Рикошетящие стрелы наносят 40% базового урона.\n\nДополнительные приемы серии увеличивают урон и количество стрел:\n• 1 прием: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% ед. урона, 6 стрелы:стрел\n• 2 приема: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% ед. урона, 7 стрелы:стрел\n• 3 приема: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% ед. урона, 8 стрелы:стрел\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "能量消耗:{#}\n幸运一击几率:{#}%\n释放一轮5支箭矢向外扩散的乱射,每支箭矢造成{20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}%点伤害。每支有20%几率从敌人身上弹射最多1次。弹射造成箭矢40%基础伤害。\n\n连击点数会提高伤害和箭矢数量:\n• 1点:{25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}%点伤害,6支箭矢\n• 2点:{29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}%点伤害,7支箭矢\n• 3点:{33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}%点伤害,8支箭矢\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 36,
		maxPoints: 5,
		values: [ "30", "20" ],
		x: -5,
		y: -292.875
	},
	"Enhanced Barrage": {
		baseSkill: "Barrage",
		connections: [ "Barrage", "Advanced Barrage", "Improved Barrage" ],
		description: `Barrage's ricochet chance is increased to 100% for arrows that damage a Vulnerable enemy or Critically Strike any enemy.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbessertes Sperrfeuer",
			"esES": "Ráfaga mejorada",
			"esMX": "Aluvión Potenciado",
			"frFR": "Déluge renforcé",
			"itIT": "Salva Rinforzata",
			"jaJP": "怒涛(強化版)",
			"koKR": "강화된 탄막",
			"plPL": "Wzmocniona Salwa",
			"ptBR": "Salva Aperfeiçoada",
			"ruRU": "Усиленный шквальный огонь",
			"zhCN": "强化乱射"
},
		descriptionLocalized: {
			"deDE": "Die Querschlägerchance von Sperrfeuer erhöht sich auf 100 % für Pfeile, die einem verwundbaren Gegner Schaden zufügen oder einen kritischen Treffer erzielen.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "La probabilidad de rebote de Ráfaga aumenta al 100% en las flechas que inflijan daño a un enemigo vulnerable o asesten un golpe crítico a cualquier enemigo.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "La probabilidad de rebotar de Aluvión aumenta al 100% para flechas que infligen daño a un enemigo vulnerable o asestan un golpe crítico a cualquier enemigo.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Les chances de ricocher de Déluge sont augmentées de 100% pour les flèches qui infligent des dégâts à une cible vulnérable ou qui infligent un coup critique.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "La probabilità di rimbalzo di Salva sale al 100% per quelle frecce che danneggiano un nemico vulnerabile o che infliggono danni critici a un nemico qualsiasi.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈怒涛〉の矢が脆弱状態の敵に命中するかクリティカルヒットになると、その矢が跳飛する確率が100%になる。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "탄막이 취약 상태의 적에게 피해를 주거나 아무 적에게나 극대화로 적중하면 화살이 튕길 확률이 100%로 증가합니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Szansa Salwy na rykoszet jest zwiększona do 100% w przypadku strzał, które zranią odsłoniętego wroga lub zadadzą trafienie krytyczne dowolnemu wrogowi.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "A chance de ricochete de Salva é aumentada para 100% para flechas que causam dano a um inimigo vulnerável ou desferem um acerto crítico contra qualquer inimigo.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Если стрела \"Шквального огня\" поражает уязвимого противника или наносит любому противнику критический урон, ее вероятность рикошета повышается до 100%.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "乱射的箭矢对易伤敌人造成伤害或对任意敌人造成暴击时,弹射几率提高至100%。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 37,
		maxPoints: 1,
		x: -2.455,
		y: -503.82
	},
	"Advanced Barrage": {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Whenever a single cast of Barrage ricochets at least 4 times, your next cast gains +20% increased Critical Strike Chance.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickeltes Sperrfeuer",
			"esES": "Ráfaga avanzada",
			"esMX": "Aluvión Avanzado",
			"frFR": "Déluge avancé",
			"itIT": "Salva Avanzata",
			"jaJP": "怒涛(高度)",
			"koKR": "고급 탄막",
			"plPL": "Zaawansowana Salwa",
			"ptBR": "Salva Avançada",
			"ruRU": "Передовой шквальный огонь",
			"zhCN": "进阶乱射"
},
		descriptionLocalized: {
			"deDE": "Immer, wenn ein Einsatz von Sperrfeuer mindestens 4-mal Querschläger verursacht, erhält Euer nächster Einsatz eine um +20% erhöhte kritische Trefferchance.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Cuando un mismo lanzamiento de Ráfaga rebota al menos 4 veces, tu siguiente lanzamiento obtiene un +20% más de probabilidad de golpe crítico.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "Cuando un único lanzamiento de Aluvión rebota al menos 4 veces, tu siguiente lanzamiento obtiene un +20% más de probabilidad de golpe crítico.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Chaque fois qu'une utilisation de Déluge produit au moins 4 ricochets, les chances d'infliger un coup critique lors de sa prochaine utilisation sont augmentées de +20%.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Ogni volta che un singolo lancio di Salva rimbalza almeno 4 volte, la probabilità di critico del lancio successivo aumenta del +20%.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "〈怒涛〉が1回の使用で少なくとも4回跳飛すると、次回使用時のクリティカルヒット率が+20%増加する。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "1회 시전한 탄막이 최소 4회 이상 튕기면, 다음 시전 시의 극대화 확률이 +20% 증가합니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Za każdym razem, gdy pojedyncze użycie Salwy rykoszetuje co najmniej 4 razy, następne użycie zyska premię +20% do szansy na trafienie krytyczne.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Sempre que um único lançamento de Salva ricocheteia pelo menos 4 vezes, seu próximo lançamento recebe +20% de chance de acerto crítico aumentada.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "Когда \"Шквальный огонь\" рикошетит хотя бы 4 раза:раз, вероятность нанести критический урон при следующем применении повышается на +20%.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "单次乱射弹射至少4次,你的下一次施法的暴击几率提高+20%。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 38,
		maxPoints: 1,
		x: 171.15,
		y: -615.165
	},
	"Improved Barrage": {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Every 3rd cast of Barrage makes enemies Vulnerable for 2 seconds.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübtes Sperrfeuer",
			"esES": "Ráfaga perfeccionada",
			"esMX": "Aluvión Mejorado",
			"frFR": "Déluge amélioré",
			"itIT": "Salva Migliorata",
			"jaJP": "怒涛(改良)",
			"koKR": "강화 탄막",
			"plPL": "Lepsza Salwa",
			"ptBR": "Salva Aprimorada",
			"ruRU": "Улучшенный шквальный огонь",
			"zhCN": "强力乱射"
},
		descriptionLocalized: {
			"deDE": "Jeder 3. Einsatz von Sperrfeuer macht Ziele 2 Sek. lang verwundbar.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esES": "Cada 3 lanzamientos de Ráfaga, los enemigos se vuelven vulnerables durante 2 s.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"esMX": "El tercer lanzamiento de Aluvión vuelve a los enemigos vulnerables durante 2 segundos.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"frFR": "Toutes les 3 utilisations de Déluge, la 3e utilisation rend les adversaires vulnérables pendant 2 s.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"itIT": "Ogni 3° utilizzo di Salva rende i nemici vulnerabili per 2 s.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"jaJP": "3回使用するごとに、〈怒涛〉が敵を2秒間にわたり脆弱状態にする。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"koKR": "탄막을 3번째 시전할 때마다 적이 2초 동안 취약해집니다.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"plPL": "Co 3 Salwa odsłania wrogów na 2 sek.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ptBR": "Cada 3º lançamento de Salva deixa os inimigos vulneráveis por 2 segundos.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"ruRU": "При каждом 3-м применении \"Шквальный огонь\" делает пораженных противников уязвимыми на 2 сек.\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy.",
			"zhCN": "每第3次施放乱射会使敌人陷入易伤状态,持续2秒。\n\nTags: Core, Marksman, Imbueable, Damage, Physical, Energy."
},
		id: 39,
		maxPoints: 1,
		x: -162.535,
		y: -614.96
	},
	"Sturdy": {
		connections: [ "Core", "Siphoning Strikes" ],
		description: `You gain {4/8/12/16/20/24/28/32/36/40}% Close Damage Reduction.

Tags: Damage Reduction.`,
		nameLocalized: {
			"deDE": "Zäh",
			"esES": "Firme",
			"esMX": "Robusto",
			"frFR": "Robuste",
			"itIT": "Solido",
			"jaJP": "頑丈",
			"koKR": "튼튼함",
			"plPL": "Solidność",
			"ptBR": "Resistente",
			"ruRU": "Прочность",
			"zhCN": "坚韧"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet {4/8/12/16/20/24/28/32/36/40}% Schadensreduktion im Nahkampf.\n\nTags: Damage Reduction.",
			"esES": "Obtienes un {4/8/12/16/20/24/28/32/36/40}% de reducción de daño cercano.\n\nTags: Damage Reduction.",
			"esMX": "Obtienes un {4/8/12/16/20/24/28/32/36/40}% de reducción de daño a corta distancia.\n\nTags: Damage Reduction.",
			"frFR": "Vous obtenez {4/8/12/16/20/24/28/32/36/40}% de réduction des dégâts à proximité.\n\nTags: Damage Reduction.",
			"itIT": "Ottieni il {4/8/12/16/20/24/28/32/36/40}% di riduzione danni da vicino.\n\nTags: Damage Reduction.",
			"jaJP": "受ける近距離ダメージが{4/8/12/16/20/24/28/32/36/40}%軽減される。\n\nTags: Damage Reduction.",
			"koKR": "근접 피해 감소가 {4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: Damage Reduction.",
			"plPL": "Twoja redukcja obrażeń z bliska jest zwiększona o {4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Damage Reduction.",
			"ptBR": "Você recebe {4/8/12/16/20/24/28/32/36/40}% de redução de dano de curta distância.\n\nTags: Damage Reduction.",
			"ruRU": "Вы получаете на x{4/8/12/16/20/24/28/32/36/40}% меньше урона в ближнем бою.\n\nTags: Damage Reduction.",
			"zhCN": "你获得{4/8/12/16/20/24/28/32/36/40}%近距伤害减免。\n\nTags: Damage Reduction."
},
		id: 40,
		maxPoints: 3,
		x: -508.635,
		y: 1.66
	},
	"Siphoning Strikes": {
		connections: [ "Sturdy" ],
		description: `Heal for {1/2/3/4/5/6/7/8/9/10}% of your Maximum Life when you Critically Strike Close enemies.

Tags: Critical Strikes, Healing.`,
		nameLocalized: {
			"deDE": "Labende Schläge",
			"esES": "Golpes absorbentes",
			"esMX": "Ataques Succionadores",
			"frFR": "Frappes drainantes",
			"itIT": "Assalti Prosciuganti",
			"jaJP": "吸収攻撃",
			"koKR": "흡수의 일격",
			"plPL": "Wysysające Uderzenia",
			"ptBR": "Golpes Drenantes",
			"ruRU": "Вытягивающие удары",
			"zhCN": "虹吸打击"
},
		descriptionLocalized: {
			"deDE": "Heilt Euch um {1/2/3/4/5/6/7/8/9/10}% Eures maximalen Lebens, wenn Ihr Gegner in der Nähe kritisch trefft.\n\nTags: Critical Strikes, Healing.",
			"esES": "Te curas un {1/2/3/4/5/6/7/8/9/10}% de tu vida máxima cuando asestas un golpe crítico a enemigos cercanos.\n\nTags: Critical Strikes, Healing.",
			"esMX": "Te sanas por un {1/2/3/4/5/6/7/8/9/10}% de tu vida máxima cuando asestas un golpe crítico a los enemigos cercanos.\n\nTags: Critical Strikes, Healing.",
			"frFR": "Vous récupérez {1/2/3/4/5/6/7/8/9/10}% de votre maximum de points de vie lorsque vous infligez des coups critiques aux adversaires à proximité.\n\nTags: Critical Strikes, Healing.",
			"itIT": "Quando infliggi danni critici ai nemici vicini ti curi del {1/2/3/4/5/6/7/8/9/10}% della tua Vita massima.\n\nTags: Critical Strikes, Healing.",
			"jaJP": "付近の敵にクリティカルヒットを与えると、ライフ最大値の{1/2/3/4/5/6/7/8/9/10}%を回復する。\n\nTags: Critical Strikes, Healing.",
			"koKR": "근거리에 있는 적에게 공격이 극대화로 적중하면 최대 생명력의 {1/2/3/4/5/6/7/8/9/10}%만큼 생명력을 회복합니다.\n\nTags: Critical Strikes, Healing.",
			"plPL": "Odzyskujesz {1/2/3/4/5/6/7/8/9/10}% twojego maksymalnego zdrowia, gdy zadajesz pobliskim wrogom trafienia krytyczne.\n\nTags: Critical Strikes, Healing.",
			"ptBR": "Cura {1/2/3/4/5/6/7/8/9/10}% da sua vida máxima ao desferir um acerto crítico contra inimigos próximos.\n\nTags: Critical Strikes, Healing.",
			"ruRU": "Вы восполняете {1/2/3/4/5/6/7/8/9/10}% максимального запаса здоровья, когда поражаете находящихся рядом противников критическими ударами.\n\nTags: Critical Strikes, Healing.",
			"zhCN": "对近距敌人造成暴击时,为你恢复{1/2/3/4/5/6/7/8/9/10}%生命上限。\n\nTags: Critical Strikes, Healing."
},
		id: 41,
		maxPoints: 3,
		x: -854.135,
		y: 2.815
	},
	"Stutter Step": {
		connections: [ "Core" ],
		description: `Critically Striking an enemy grants +{5/10/15/20/25/30/35/40/45/50}% Movement Speed for 4.0 seconds.

Tags: Critical Strikes, Movement.`,
		nameLocalized: {
			"deDE": "Stotterschritt",
			"esES": "Juego de pies",
			"esMX": "Paso Interrumpido",
			"frFR": "Petits pas",
			"itIT": "Passo Impetuoso",
			"jaJP": "スタッター・ステップ",
			"koKR": "비틀걸음",
			"plPL": "Przerywany Krok",
			"ptBR": "Passo Hesitante",
			"ruRU": "Перебежка",
			"zhCN": "鬼步疾行"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr bei Gegnern einen kritischen Treffer erzielt, erhaltet Ihr 4.0 Sek. lang +{5/10/15/20/25/30/35/40/45/50}% Bewegungsgeschwindigkeit.\n\nTags: Critical Strikes, Movement.",
			"esES": "Asestar un golpe crítico a un enemigo otorga un +{5/10/15/20/25/30/35/40/45/50}% de velocidad de movimiento durante 4.0 s.\n\nTags: Critical Strikes, Movement.",
			"esMX": "Asestar un golpe crítico a un enemigo otorga un +{5/10/15/20/25/30/35/40/45/50}% de velocidad de movimiento durante 4.0 segundos.\n\nTags: Critical Strikes, Movement.",
			"frFR": "Infliger un coup critique à une cible augmente votre vitesse de déplacement de +{5/10/15/20/25/30/35/40/45/50}% pendant 4.0 s.\n\nTags: Critical Strikes, Movement.",
			"itIT": "Infliggere colpi critici a un nemico aumenta la velocità di movimento del +{5/10/15/20/25/30/35/40/45/50}% per 4.0 s.\n\nTags: Critical Strikes, Movement.",
			"jaJP": "敵1体にクリティカルヒットを与えると、移動速度が4.0秒間にわたり+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: Critical Strikes, Movement.",
			"koKR": "적에게 공격이 극대화로 적중하면 4.0초 동안 이동 속도가 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Critical Strikes, Movement.",
			"plPL": "Zadanie krytycznego trafienia wrogowi zapewnia +{5/10/15/20/25/30/35/40/45/50}% do szybkości ruchu na 4.0 sek.\n\nTags: Critical Strikes, Movement.",
			"ptBR": "Desferir um acerto crítico contra um inimigo concede +{5/10/15/20/25/30/35/40/45/50}% de velocidade de movimento por 4.0 segundos.\n\nTags: Critical Strikes, Movement.",
			"ruRU": "Критический удар повышает скорость передвижения на +{5/10/15/20/25/30/35/40/45/50}% на 4.0 сек.\n\nTags: Critical Strikes, Movement.",
			"zhCN": "对一名敌人造成暴击时,移动速度提高+{5/10/15/20/25/30/35/40/45/50}%,持续4.0秒。\n\nTags: Critical Strikes, Movement."
},
		id: 42,
		maxPoints: 3,
		x: 577.69,
		y: 84.675
	},
};

rogueData["Agility"] = {
	"Shadow Step": {
		connections: [ "Enhanced Shadow Step", "Agility" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Become Unstoppable and quickly move through the shadows to stab your victim from behind for {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% damage. Gain 50% increased Movement Speed for 2 seconds afterwards.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Schattenschritt",
			"esES": "Paso de las sombras",
			"esMX": "Paso Umbrío",
			"frFR": "Pas de l'ombre",
			"itIT": "Passo d'Ombra",
			"jaJP": "シャドウ・ステップ",
			"koKR": "그림자 걸음",
			"plPL": "Cienisty Krok",
			"ptBR": "Passo Sombrio",
			"ruRU": "Шаг сквозь тень",
			"zhCN": "暗影步"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nWerdet unaufhaltsam, bewegt Euch schnell durch die Schatten und stecht aus dem Hinterhalt auf ein Opfer ein, wodurch Ihr {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% Schaden verursacht. Erhaltet danach 2 Sek. lang 50% mehr Bewegungsgeschwindigkeit.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nTe vuelves imparable y te mueves con rapidez por las sombras para apuñalar por la espalda a tu víctima e infligir {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño. Después, obtienes un 50% más de velocidad de movimiento durante 2 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nTe vuelves imparable, te mueves rápidamente entre las sombras, apuñalas a tu víctima por la espalda y le infliges {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño. Luego, obtienes un 50% más de velocidad de movimiento durante 2 segundos.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVous devenez inarrêtable et vous déplacez rapidement à travers les ombres pour poignarder votre victime par-derrière, ce qui lui inflige {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% points de dégâts. Votre vitesse de déplacement est ensuite augmentée de 50% pendant 2 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nDiventi inarrestabile e ti muovi rapidamente tra le ombre per pugnalare la tua vittima nella schiena, infliggendo {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% danni. La tua velocità di movimento aumenta del 50% per i 2 s successivi.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n抑圧不可状態になって影を素早くすり抜けて移動し、背後から標的を突き刺して{72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%のダメージを与える。その後、移動速度が2秒間にわたり50%上昇する。\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n저지 불가 상태가 되어 그림자를 통해 빠르게 이동한 후 대상을 후방에서 찔러 {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%의 피해를 줍니다. 이후 2초 동안 이동 속도가 50% 증가합니다.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nZyskujesz nieustępliwość i przemykasz szybko wśród cieni, a następnie dźgasz od tyłu wroga i zadajesz mu {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% pkt. obrażeń. Zyskujesz następnie 50% do szybkości ruchu przez 2 sek.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\n{#}%\nVocê fica implacável e move-se rapidamente pelas sombras para apunhalar a vítima por trás, causando {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de dano. Depois, recebe 50% de velocidade de movimento aumentada por 2 segundos.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%\nВы становитесь неудержимым, быстро идете к цели сквозь тень и бьете ее в спину, нанося {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% ед. урона. После этого ваша скорость передвижения повышается на 50% на 2 сек.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n变得不可阻挡,快速穿过暗影并从背后刺击受害者,造成{72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%点伤害。之后移动速度提高50%,持续2秒。\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement."
},
		id: 43,
		maxPoints: 5,
		values: [ "9", "100" ],
		x: 5.42,
		y: -278.485
	},
	"Enhanced Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Shadow Step", "Methodical Shadow Step", "Disciplined Shadow Step" ],
		description: `Damaging an enemy with Shadow Step increases your Critical Strike Chance against them by +8% for 3 seconds.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Verbesserter Schattenschritt",
			"esES": "Paso de las sombras mejorado",
			"esMX": "Paso Umbrío Potenciado",
			"frFR": "Pas de l'ombre renforcé",
			"itIT": "Passo d'Ombra Rinforzato",
			"jaJP": "シャドウ・ステップ(強化版)",
			"koKR": "강화된 그림자 걸음",
			"plPL": "Wzmocniony Cienisty Krok",
			"ptBR": "Passo Sombrio Aperfeiçoado",
			"ruRU": "Усиленный шаг сквозь тень",
			"zhCN": "强化暗影步"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner mit Schattenschritt Schaden zufügt, wird Eure kritische Trefferchance gegen ihn 3 Sek. lang um +8% erhöht.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esES": "Infligir daño a un enemigo con Paso de las sombras aumenta tu probabilidad de golpe crítico contra él un +8% durante 3 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esMX": "Dañar a un enemigo con Paso Umbrío aumenta tu probabilidad de golpe crítico en su contra un +8% durante 3 segundos.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"frFR": "Infliger des dégâts à une cible avec Pas de l'ombre augmente vos chances de lui infliger un coup critique de +8% pendant 3 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"itIT": "Danneggiare un nemico con Passo d'Ombra aumenta le tue probabilità di critico contro di lui del +8% per 3 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"jaJP": "操作障害効果を受けた敵に〈シャドウ・ステップ〉のダメージを与えると、その敵へのクリティカルヒット率が3秒間にわたり+8%上昇する。\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"koKR": "그림자 걸음이 적에게 피해를 주면 3 초 동안 해당 적에 대한 극대화 확률이 +8% 증가합니다.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"plPL": "Zranienie wroga Cienistym Krokiem zwiększa twoją szansę na zadanie mu trafienia krytycznego o +8% na 3 sek.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Causar dano a um inimigo com Passo Sombrio aumenta sua chance de acerto crítico contra ele em +8% por 3 segundos.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Когда \"Шаг сквозь тень\" наносит противнику урон, вероятность нанести этой цели критический урон повышается на +8% на 3 сек.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"zhCN": "暗影步对一名敌人造成伤害时,你对其造成暴击的几率提高+8%,持续3秒。\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement."
},
		id: 44,
		maxPoints: 1,
		x: 4.62,
		y: -479.05
	},
	"Methodical Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Enemies damaged by Shadow Step are Stunned for 2 seconds.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Methodischer Schattenschritt",
			"esES": "Paso de las sombras metódico",
			"esMX": "Paso Umbrío Metódico",
			"frFR": "Pas de l'ombre méthodique",
			"itIT": "Passo d'Ombra Metodico",
			"jaJP": "シャドウ・ステップ(緻密)",
			"koKR": "체계적 그림자 걸음",
			"plPL": "Metodyczny Cienisty Krok",
			"ptBR": "Passo Sombrio Metódico",
			"ruRU": "Методичный шаг сквозь тень",
			"zhCN": "有序暗影步"
},
		descriptionLocalized: {
			"deDE": "Gegner, die durch Schattenschritt Schaden erleiden, sind 2 Sek. lang betäubt.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esES": "Los enemigos dañados por Paso de las sombras quedan aturdidos durante 2 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esMX": "Los enemigos dañados por Paso Umbrío quedan aturdidos durante 2 segundos.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"frFR": "Les cibles blessées par Pas de l'ombre sont étourdies pendant 2 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"itIT": "I nemici colpiti da Passo d'Ombra sono storditi per 2 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"jaJP": "〈シャドウ・ステップ〉でダメージを受けた敵が2秒間にわたりスタン状態になる。\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"koKR": "그림자 걸음의 피해를 받은 적이 2초 동안 기절합니다.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"plPL": "Wrogowie, którzy otrzymali obrażenia od Cienistego Kroku, zostają ogłuszeni na 2 sek.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Inimigos atingidos por Passo Sombrio ficam atordoados por 2 segundos.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Когда \"Шаг сквозь тень\" наносит противникам урон, он оглушает их на 2 сек.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"zhCN": "暗影步对敌人造成伤害时使其昏迷2秒。\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement."
},
		id: 45,
		maxPoints: 1,
		x: -150.428,
		y: -594.06
	},
	"Disciplined Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Shadow Step's Cooldown is reduced by 3 seconds when it damages an enemy you haven't hit with Shadow Step in the last 4 seconds.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Disziplinierter Schattenschritt",
			"esES": "Paso de las sombras disciplinado",
			"esMX": "Paso Umbrío Disciplinado",
			"frFR": "Pas de l'ombre discipliné",
			"itIT": "Passo d'Ombra Disciplinato",
			"jaJP": "シャドウ・ステップ(鍛錬)",
			"koKR": "절제된 그림자 걸음",
			"plPL": "Zdyscyplinowany Cienisty Krok",
			"ptBR": "Passo Sombrio Disciplinado",
			"ruRU": "Упорядоченный шаг сквозь тень",
			"zhCN": "戒律暗影步"
},
		descriptionLocalized: {
			"deDE": "Die Abklingzeit von Schattenschritt ist um 3 Sek. reduziert, wenn er einem Gegner Schaden zufügt, den Ihr in den letzten 4 Sek. nicht mit Schattenschritt getroffen habt.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esES": "El tiempo de reutilización de Paso de las sombras se reduce 3 s cuando inflige daño a un enemigo al que no has golpeado con Paso de las sombras durante los últimos 4 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esMX": "La recuperación de Paso Umbrío se reduce 3 segundos cuando daña a un enemigo que no has golpeado con Paso Umbrío en los últimos 4 segundos.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"frFR": "Le temps de recharge de Pas de l'ombre est réduit de 3 s lorsqu'il inflige des dégâts à une cible que vous n'avez pas touchée avec Pas de l'ombre au cours des 4 dernières secondes.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"itIT": "Il tempo di recupero di Passo d'Ombra si riduce di 3 s quando danneggia un nemico che non hai colpito con Passo d'Ombra negli ultimi 4 s.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"jaJP": "直近の4秒に〈シャドウ・ステップ〉を当てていない敵にダメージを与えると、〈シャドウ・ステップ〉のクールダウンが3秒短くなる。\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"koKR": "그림자 걸음이 최근 4초 동안 그림자 걸음으로 피해를 주지 않은 적에게 피해를 주면 그림자 걸음의 재사용 대기시간이 3초 감소합니다.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"plPL": "Czas odnowienia Cienistego Kroku jest skrócony o 3 sek., kiedy przy użyciu tej umiejętności ranisz wroga, który nie otrzymał obrażeń zadanych nią w ciągu ostatnich 4 sek.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ptBR": "A recarga de Passo Sombrio é reduzida em 3 segundos ao causar dano a um inimigo que não recebeu seu Passo Sombrio nos últimos 4 segundos.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Когда \"Шаг сквозь тень\" поражает противника, которому вы не наносили урон этим умением в течение последних 4 сек., время восстановления \"Шага сквозь тень\" сокращается на 3 сек.\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.",
			"zhCN": "在过去的4秒内当你用暗影步对一个未曾命中过的敌人造成伤害时,暗影步的冷却时间缩短3秒。\n\nTags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement."
},
		id: 46,
		maxPoints: 1,
		x: 157.65,
		y: -595.05
	},
	"Dash": {
		connections: [ "Enhanced Dash", "Agility" ],
		description: `Charges: 2
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Dash forward and slash enemies for {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% damage.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Preschen",
			"esES": "Carrera",
			"esMX": "Arremetida",
			"frFR": "Célérité",
			"itIT": "Scatto",
			"jaJP": "ダッシュ",
			"koKR": "질주",
			"plPL": "Pęd",
			"ptBR": "Disparada",
			"ruRU": "Рывок",
			"zhCN": "疾行斩"
},
		descriptionLocalized: {
			"deDE": "Aufladungen: 2\nAufladungsabklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nPrescht vorwärts und versetzt Gegnern Hiebe, die {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% Schaden verursachen.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esES": "Cargas: 2\nTiempo de reutilización de las cargas: {#} s\nProbabilidad de golpe de suerte: {#}%\nCorres hacia delante y rajas a los enemigos, lo que inflige {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de daño.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esMX": "Cargas: 2\nRecuperación de carga: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nArremetes hacia adelante, cortas a los enemigos y les infliges {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de daño.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"frFR": "Charges : 2\nTemps de recharge des charges : {#} s\nChances de coup de chance : {#}%\nVous foncez sur les adversaires et les lacérez en infligeant {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% points de dégâts.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"itIT": "Cariche: 2\nTempo di recupero cariche: {#} s\nProbabilità di colpo fortunato: {#}%\nScatti in avanti e colpisci i nemici, infliggendo {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% danni.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"jaJP": "チャージ: 2\nチャージのクールダウン: {#}秒\n幸運の一撃発生率: {#}%\n前方に突進して敵に斬りつけ{32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}%のダメージを与える。\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"koKR": "충전: 2\n충전 재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n앞으로 질주하며 적을 베어 {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}%의 피해를 줍니다.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"plPL": "Ładunki: 2\nCzas odnowienia ładunku: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nPędzisz naprzód i tniesz wrogów, zadając {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% pkt. obrażeń.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Cargas: 2\nRecarga de cargas: {#} segundos\nChance de Golpe de Sorte: {#}%\nAvança e retalha os inimigos, causando {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de dano.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Количество зарядов: 2.\nВремя восстановления заряда: {#} сек.\nВероятность удачного удара: {#}%.\nВы делаете рывок вперед и атакуете противников, нанося {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% ед. урона.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"zhCN": "使用次数:2\n充能冷却时间:{#}秒\n幸运一击几率:{#}%\n冲向前方并劈砍敌人,造成{32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}%点伤害。\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement."
},
		id: 47,
		maxPoints: 5,
		values: [ "{10/9.5/9/8.5/8/7.6/7.2/6.8/6.4/6}", "25" ],
		x: 9.47,
		y: 289.26
	},
	"Enhanced Dash": {
		baseSkill: "Dash",
		connections: [ "Dash", "Methodical Dash", "Disciplined Dash" ],
		description: `Enemies damaged by Dash take x20% increased Critical Strike Damage from you for 5 seconds.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Verbessertes Preschen",
			"esES": "Carrera mejorada",
			"esMX": "Arremetida Potenciada",
			"frFR": "Célérité renforcée",
			"itIT": "Scatto Rinforzato",
			"jaJP": "ダッシュ(強化版)",
			"koKR": "강화된 질주",
			"plPL": "Wzmocniony Pęd",
			"ptBR": "Disparada Aperfeiçoada",
			"ruRU": "Усиленный рывок",
			"zhCN": "强化疾行斩"
},
		descriptionLocalized: {
			"deDE": "Gegner, die durch Preschen Schaden erleiden, erleiden 5 Sek. lang x20% mehr kritischen Trefferschaden durch Euch.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esES": "Infliges un x20% más de daño de golpe crítico a los enemigos dañados por Carrera durante 5 s.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esMX": "Los enemigos dañados por Arremetida reciben un x20% más de daño de golpe crítico de ti durante 5 segundos.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"frFR": "Les cibles blessées par Célérité subissent x20% de dégâts critiques supplémentaires de votre part pendant 5 s.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"itIT": "I nemici colpiti da Scatto subiscono da te il x20% di danni critici aggiuntivi per 5 s.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"jaJP": "〈ダッシュ〉で敵にダメージを与えると、自分がその敵に与えるクリティカルヒットダメージが5秒間にわたりx20%増加する。\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"koKR": "질주로 피해를 받은 적이 자신에게 5초 동안 받는 극대화 피해가 x20% 증가합니다.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"plPL": "Wrogowie, którym Pęd zadał obrażenia, otrzymują przez 5 sek. obrażenia od twoich trafień krytycznych zwiększone o x20%.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Inimigos atingidos por Disparada recebem 20% de dano de acerto crítico aumentado de você por 5 segundos.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Противники, пораженные \"Рывком\", получают от вас на x20% больше критического урона в течение 5 сек.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"zhCN": "疾行斩对敌人造成伤害时,你对其造成的暴击伤害提高x20%,持续5秒。\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement."
},
		id: 48,
		maxPoints: 1,
		x: 10.465,
		y: 496.62
	},
	"Methodical Dash": {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dealing damage to Crowd Controlled enemies with Dash reduces its Charge Cooldown by 0.5 seconds, up to 3 seconds per cast.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Methodisches Stürmen",
			"esES": "Carrera metódica",
			"esMX": "Arremetida Metódica",
			"frFR": "Célérité méthodique",
			"itIT": "Scatto Metodico",
			"jaJP": "ダッシュ(緻密)",
			"koKR": "체계적 질주",
			"plPL": "Metodyczny Pęd",
			"ptBR": "Disparada Metódica",
			"ruRU": "Методичный рывок",
			"zhCN": "有序疾行斩"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mit Preschen Gegnern Schaden zufügt, die unter Kontrollverlusteffekten leiden, reduziert sich die Aufladungsabklingzeit der Fertigkeit um 0.5 Sek., bis maximal 3 Sek. pro Einsatz.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esES": "Infligir daño a enemigos afectados por control de masas con Carrera reduce 0.5 s el tiempo de reutilización de las cargas, hasta 3 s por lanzamiento.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esMX": "Infligir daño a enemigos bajo los efectos de control de multitudes con Arremetida reduce su recuperación de carga 0.5 segundos, hasta un máximo de 3 segundos por lanzamiento.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"frFR": "Infliger des dégâts avec Célérité à des adversaires subissant un effet de perte de contrôle réduit son temps de recharge de 0.5 s, jusqu'à un maximum de 3 s par utilisation.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"itIT": "Infliggere danni ai nemici sotto un effetto di controllo delle creature con Scatto riduce il tempo di recupero di una carica di 0.5 s, fino a un massimo di 3 s per lancio.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"jaJP": "操作障害効果を受けた敵に対して〈ダッシュ〉でダメージを与えると、〈ダッシュ〉のクールダウンが0.5秒短縮される。短縮量は1回の発動で最大3秒。\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"koKR": "질주로 군중 제어 상태의 적에게 피해를 주면 시전당 충전 재사용 대기시간이 0.5초만큼, 최대 3초까지 감소합니다.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"plPL": "Zadawanie obrażeń Pędem wrogom o ograniczonej kontroli skraca czas odnowienia ładunku o 0.5 sek., maksymalnie do 3 sek. za każde użycie umiejętności.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Causar dano com Disparada a inimigos sob controle de grupo reduz a recarga de cargas em 0.5 segundos, até 3 segundos por lançamento.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Когда \"Рывок\" наносит урон противникам под действием эффектов контроля, время восстановления его заряда сокращается на 0.5 сек. вплоть до 3 сек. за каждое применение.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"zhCN": "使用疾行斩对被群控的敌人造成伤害可以使其充能冷却时间缩短0.5秒,每次施放最多缩短3秒。\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement."
},
		id: 49,
		maxPoints: 1,
		x: -154.131,
		y: 595.963
	},
	"Disciplined Dash": {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dash Slows enemies it hits by 30% for 3 seconds. Any enemy already Slowed will be Dazed for 2 seconds instead.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Diszipliniertes Stürmen",
			"esES": "Carrera disciplinada",
			"esMX": "Arremetida Disciplinada",
			"frFR": "Célérité disciplinée",
			"itIT": "Scatto Disciplinato",
			"jaJP": "ダッシュ(鍛錬)",
			"koKR": "절제된 질주",
			"plPL": "Zdyscyplinowany Pęd",
			"ptBR": "Disparada Disciplinada",
			"ruRU": "Упорядоченный рывок",
			"zhCN": "戒律疾行斩"
},
		descriptionLocalized: {
			"deDE": "Preschen verlangsamt getroffene Gegner 3 Sek. lang um 30%. Bereits verlangsamte Gegner werden stattdessen 2 Sek. lang benommen.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esES": "Carrera ralentiza a los enemigos que golpea un 30% durante 3 s. Si el enemigo ya está ralentizado, lo atonta durante 2 s en su lugar.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"esMX": "Arremetida ralentiza a los enemigos golpeados un 30% durante 3 segundos. Los enemigos que ya están ralentizados serán atontados durante 2 segundos.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"frFR": "Célérité ralentit les cibles touchées de 30% pendant 3 s. Les cibles déjà ralenties sont hébétées pendant 2 s à la place.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"itIT": "Scatto rallenta i nemici che colpisce del 30% per 3 s. I nemici già rallentati diventeranno subiranno Frastornamento per 2 s.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"jaJP": "〈ダッシュ〉が命中した敵は、 3秒間にわたり移動速度が30%低下する。敵の移動速度がすでに低下していた場合は、代わりに2秒間にわたり眩暈状態になる。\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"koKR": "질주가 적중한 적을 3초 동안 30% 감소시킵니다. 적이 이미 감속 상태인 경우 대신 2초 동안 멍해집니다.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"plPL": "Pęd spowalnia trafionych wrogów o 30% na 3 sek. Cele spowolnione wcześniej zostaną zamiast tego oszołomione na 2 sek.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Disparada desacelera inimigos atingidos em 30% por 3 segundos. Qualquer inimigo já desacelerado ficará sob torpor por 2 segundos.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"ruRU": "\"Рывок\" замедляет пораженных противников на 30% на 3 сек. У уже замедленных противников вместо этого начинается головокружение, действующее 2 сек.\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.",
			"zhCN": "疾行斩使命中的敌人减速30%,持续3秒。已被减速的敌人会被眩晕,持续2秒。\n\nTags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement."
},
		id: 50,
		maxPoints: 1,
		x: 170.02,
		y: 597.246
	},
	"Weapon Mastery": {
		connections: [ "Agility" ],
		description: `Gain a bonus when attacking based on weapon type:
• Daggers: x{5/10/15/20/25/30/35/40/45/50}% increased damage to Healthy enemies.
• Swords: x{3/6/9/12/15/18/21/24/27/30}% increased damage.
• Bows: x{4/8/12/16/20/24/28/32/36/40}% increased damage to Vulnerable enemies.
• Crossbows: x{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Damage.

Tags: Vulnerable, Healthy, Critical Strikes, Damage.`,
		nameLocalized: {
			"deDE": "Waffenbeherrschung",
			"esES": "Dominio de las armas",
			"esMX": "Dominio de Arma",
			"frFR": "Maîtrise d'arme",
			"itIT": "Dominio delle Armi",
			"jaJP": "武器の達人",
			"koKR": "무기 숙련",
			"plPL": "Mistrzostwo Broni",
			"ptBR": "Maestria em Armas",
			"ruRU": "Мастер оружия",
			"zhCN": "武器精通"
},
		descriptionLocalized: {
			"deDE": "Erhaltet je nach Waffentyp einen Angriffsbonus:\n• Dolche: x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden gegen gesunde Gegner.\n• Schwerter: x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden.\n• Bögen x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden gegen verwundbare Gegner.\n• Armbrüste: x{5/10/15/20/25/30/35/40/45/50}% mehr kritischer Trefferschaden.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"esES": "Obtienes un bonus al atacar en función del tipo de arma:\n• Dagas: un x{5/10/15/20/25/30/35/40/45/50}% más de daño a enemigos saludables.\n• Espadas: un x{3/6/9/12/15/18/21/24/27/30}% más de daño.\n• Arcos: un x{4/8/12/16/20/24/28/32/36/40}% más de daño a enemigos vulnerables.\n• Ballestas: un x{5/10/15/20/25/30/35/40/45/50}% más de daño de golpe crítico.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"esMX": "Obtienes una bonificación al atacar según el tipo de arma:\n• Dagas: Un x{5/10/15/20/25/30/35/40/45/50}% más de daño a enemigos saludables.\n• Espadas: Un x{3/6/9/12/15/18/21/24/27/30}% más de daño.\n• Arcos: Un x{4/8/12/16/20/24/28/32/36/40}% más de daño a enemigos vulnerables.\n• Ballestas: Un x{5/10/15/20/25/30/35/40/45/50}% más de daño de golpe crítico.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"frFR": "Vous bénéficiez d'un bonus lorsque vous attaquez en fonction du type d'arme utilisé :\n• Dagues : x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires aux cibles en bonne santé.\n• Épées : x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires.\n• Arcs : x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires aux cibles vulnérables.\n• Arbalètes : x{5/10/15/20/25/30/35/40/45/50}% de dégâts critiques supplémentaires.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"itIT": "Fornisce un bonus quando attacchi in base al tipo di arma:\n• Pugnali: x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi ai nemici in salute.\n• Spade: x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi.\n• Archi: x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi ai nemici vulnerabili.\n• Balestre: x{5/10/15/20/25/30/35/40/45/50}% di danni critici aggiuntivi.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"jaJP": "攻撃時、武器の種類に応じてボーナスを獲得する:\n• ダガー: 健全状態の敵に対するダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n• 剣: ダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n• 弓: 脆弱状態の敵へのダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n• クロスボウ: クリティカルヒットダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"koKR": "무기 유형에 따라 공격 시 강화 효과를 얻습니다.\n• 단도: 건강 상태의 적에게 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n• 도검: 공격력이 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n• 활: 취약 상태의 적에게 주는 피해가 최대 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n• 쇠뇌: 극대화 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"plPL": "Zyskujesz premię w zależności od rodzaju używanej broni:\n• Sztylety: obrażenia są zwiększone o x{5/10/15/20/25/30/35/40/45/50}%, gdy atakujesz wroga będącego w pełni sił.\n• Miecze: obrażenia są zwiększone o x{3/6/9/12/15/18/21/24/27/30}%.\n• Łuki: obrażenia zadawane odsłoniętym wrogom są zwiększone o x{4/8/12/16/20/24/28/32/36/40}%.\n• Kusze: obrażenia od trafień krytycznych są zwiększone o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"ptBR": "Recebe um bônus ao atacar com base no tipo de arma:\n• Adagas: {5/10/15/20/25/30/35/40/45/50}% de dano aumentado contra inimigos saudáveis.\n• Espadas: {3/6/9/12/15/18/21/24/27/30}% de dano aumentado.\n• Arcos: {4/8/12/16/20/24/28/32/36/40}% de dano aumentado contra inimigos vulneráveis.\n• Bestas: {5/10/15/20/25/30/35/40/45/50}% de dano de acerto crítico aumentado.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"ruRU": "Ваши атаки усиливаются в зависимости от типа оружия:\n• Кинжалы: урон при атаке противников с высоким уровнем здоровья увеличивается на x{5/10/15/20/25/30/35/40/45/50}%.\n• Мечи: урон увеличивается на x{3/6/9/12/15/18/21/24/27/30}%.\n• Луки: урон увеличивается на x{4/8/12/16/20/24/28/32/36/40}% в бою с уязвимыми противниками.\n• Арбалеты: критический урон увеличивается на x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage.",
			"zhCN": "攻击时根据武器类型获得加成:\n• 匕首:对健康敌人造成的伤害提高x{5/10/15/20/25/30/35/40/45/50}%。\n• 剑:造成的伤害提高x{3/6/9/12/15/18/21/24/27/30}%。\n• 弓:对处于易伤状态的敌人造成的伤害提高x{4/8/12/16/20/24/28/32/36/40}%。\n• 弩:暴击伤害提高x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: Vulnerable, Healthy, Critical Strikes, Damage."
},
		id: 51,
		maxPoints: 3,
		x: -590.813,
		y: 1.36
	},
	"Concussive": {
		connections: [ "Agility", "Trick Attacks" ],
		description: `After Knocking Back or Knocking Down an enemy, you gain +{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Chance against them for 3 seconds.

Tags: Crowd Control, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Erschütterung",
			"esES": "Magullador",
			"esMX": "Conmocionante",
			"frFR": "Traumatisme",
			"itIT": "Concussiva",
			"jaJP": "振盪",
			"koKR": "충격",
			"plPL": "Wstrząsy",
			"ptBR": "Concussão",
			"ruRU": "Фугасный снаряд",
			"zhCN": "震荡打击"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr einen Gegner zurückgestoßen oder niedergeschlagen habt, ist Eure kritische Trefferchance gegen diesen Gegner 3 Sek. lang um +{5/10/15/20/25/30/35/40/45/50}% erhöht.\n\nTags: Crowd Control, Critical Strikes.",
			"esES": "Tras repeler o derribar a un enemigo, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe crítico contra él durante 3 s.\n\nTags: Crowd Control, Critical Strikes.",
			"esMX": "Después de repeler o derribar a un enemigo, tienes un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de asestarle un golpe crítico durante 3 segundos.\n\nTags: Crowd Control, Critical Strikes.",
			"frFR": "Après avoir repoussé ou renversé une cible, vos chances de lui infliger un coup critique sont augmentées de +{5/10/15/20/25/30/35/40/45/50}% pendant 3 s.\n\nTags: Crowd Control, Critical Strikes.",
			"itIT": "Dopo aver respinto indietro o fatto cadere un nemico, la probabilità di critico contro di lui aumenta del +{5/10/15/20/25/30/35/40/45/50}% per 3 s.\n\nTags: Crowd Control, Critical Strikes.",
			"jaJP": "敵1体をノックバックまたはノックダウンさせた後、その敵に対するクリティカルヒット率が3秒間にわたり+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: Crowd Control, Critical Strikes.",
			"koKR": "적을 밀쳐내거나 넘어뜨린 후, 3초 동안 해당 적을 상대로 극대화 확률이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Crowd Control, Critical Strikes.",
			"plPL": "Po odrzuceniu lub powaleniu wroga zyskujesz zwiększoną o +{5/10/15/20/25/30/35/40/45/50}% szansę na zadanie mu trafienia krytycznego przez 3 sek.\n\nTags: Crowd Control, Critical Strikes.",
			"ptBR": "Depois de repelir ou nocautear um inimigo, você recebe +{5/10/15/20/25/30/35/40/45/50}% de chance de acerto crítico aumentada contra ele por 3 segundos.\n\nTags: Crowd Control, Critical Strikes.",
			"ruRU": "Когда вы отбрасываете противника или сбиваете его с ног, вероятность нанести ему критический удар повышается на +{5/10/15/20/25/30/35/40/45/50}% на 3 сек.\n\nTags: Crowd Control, Critical Strikes.",
			"zhCN": "击退或击倒一名敌人后,你对其造成暴击的几率提高+{5/10/15/20/25/30/35/40/45/50}%,持续3秒。\n\nTags: Crowd Control, Critical Strikes."
},
		id: 52,
		maxPoints: 3,
		x: 645.39,
		y: 181.745
	},
	"Trick Attacks": {
		connections: [ "Rapid Gambits", "Concussive" ],
		description: `When you Critically Strike a Dazed enemy they are Knocked Down for {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds.

Tags: Daze, Crowd Control, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Listige Angriffe",
			"esES": "Ataques con truco",
			"esMX": "Ataques con Truco",
			"frFR": "Attaques trompeuses",
			"itIT": "Attacchi Ingannevoli",
			"jaJP": "トリック・アタック",
			"koKR": "속임수 공격",
			"plPL": "Podstępny Atak",
			"ptBR": "Ataque Ardiloso",
			"ruRU": "Коварные удары",
			"zhCN": "诡诈攻击"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen kritischen Treffer gegen einen benommenen Gegner erzielt, wird er {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} Sek. lang niedergeschlagen.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"esES": "Cuando asestas un golpe crítico a un enemigo atontado, queda derribado durante {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"esMX": "Cuando asestas un golpe crítico a un enemigo atontado, es derribado durante {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"frFR": "Lorsque vous infligez un coup critique à une cible hébétée, celle-ci est renversée pendant {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"itIT": "Quando infliggi danni critici a un nemico affetto da Frastornamento cadrà a terra per {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"jaJP": "眩暈状態の敵にクリティカルヒットが発生すると、その敵は{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒間にわたりノックダウンする。\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"koKR": "멍해진 적에게 극대화 공격을 적중시키면 해당 적이 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}초 동안 넘어집니다.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"plPL": "Po trafieniu krytycznym oszołomionego wroga zostaje on powalony na {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} sek.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"ptBR": "Ao desferir um acerto crítico contra um inimigo atingido por torpor, ele é nocauteado por {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"ruRU": "Нанося критический удар противнику с головокружением, вы сбиваете его с ног на {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} сек.\n\nTags: Daze, Crowd Control, Critical Strikes.",
			"zhCN": "当你对被眩晕的敌人造成暴击时,它们将被击倒{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒。\n\nTags: Daze, Crowd Control, Critical Strikes."
},
		id: 143,
		maxPoints: 3,
		x: 483.505,
		y: 485.53
	},
	"Rapid Gambits": {
		connections: [ "Agility", "Trick Attacks" ],
		description: `Your Evade Cooldown is reduced by {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds when you Daze an enemy.

Tags: Daze, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Schnelle Schachzüge",
			"esES": "Gambitos rápidos",
			"esMX": "Tácticas Rápidas",
			"frFR": "Manœuvres expéditives",
			"itIT": "Azzardo Rapido",
			"jaJP": "ラピッド・ガンビット",
			"koKR": "빠른 술수",
			"plPL": "Błyskawiczny Gambit",
			"ptBR": "Manobras Rápidas",
			"ruRU": "Быстрые хитрости",
			"zhCN": "棋行险招"
},
		descriptionLocalized: {
			"deDE": "Die Abklingzeit von Entrinnen reduziert sich um {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} Sek., wenn Ihr einen Gegner benommen macht.\n\nTags: Daze, Crowd Control, Cooldown.",
			"esES": "El tiempo de reutilización de tu Evadir se reduce {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s cuando atontas a un enemigo.\n\nTags: Daze, Crowd Control, Cooldown.",
			"esMX": "La recuperación de tu Evadir se reduce {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos cuando atontas a un enemigo.\n\nTags: Daze, Crowd Control, Cooldown.",
			"frFR": "Votre temps de recharge d'Esquive est réduit de {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s lorsque vous hébétez une cible.\n\nTags: Daze, Crowd Control, Cooldown.",
			"itIT": "Il tempo di recupero di Elusione si riduce di {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s quando infliggi Frastornamento a un nemico.\n\nTags: Daze, Crowd Control, Cooldown.",
			"jaJP": "敵1体を眩暈状態にすると、回避のクールダウンが{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒短縮される。\n\nTags: Daze, Crowd Control, Cooldown.",
			"koKR": "적을 멍하게 만들 때마다 자신의 피하기 재사용 대기시간이 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} 감소합니다.\n\nTags: Daze, Crowd Control, Cooldown.",
			"plPL": "Po oszołomieniu wroga czas odnowienia twojego Odskoku jest skrócony o {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} sek.\n\nTags: Daze, Crowd Control, Cooldown.",
			"ptBR": "Sua recarga de Evadir é reduzida em {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos ao aplicar torpor em um inimigo.\n\nTags: Daze, Crowd Control, Cooldown.",
			"ruRU": "Когда вы вызываете у противника головокружение, время восстановления \"Уклонения\" сокращается на {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} сек.\n\nTags: Daze, Crowd Control, Cooldown.",
			"zhCN": "当你眩晕一名敌人时,你的闪避技能的冷却时间缩短{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒。\n\nTags: Daze, Crowd Control, Cooldown."
},
		id: 144,
		maxPoints: 3,
		x: 316.785,
		y: 288.665
	},
	"Caltrops": {
		connections: [ "Enhanced Caltrops", "Agility" ],
		description: `Charges: 2
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Leap backwards and throw caltrops on the ground, dealing {30/33/36/39/42/45/48/51/54/57}% damage and Slowing enemies by {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Lasts 6 seconds.

Tags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Krähenfüße",
			"esES": "Abrojos",
			"esMX": "Abrojos",
			"frFR": "Chausse-trappe",
			"itIT": "Triboli",
			"jaJP": "鉄菱",
			"koKR": "쇠못 덫",
			"plPL": "Kolczatki",
			"ptBR": "Estrepes",
			"ruRU": "Шипы",
			"zhCN": "铁蒺藜"
},
		descriptionLocalized: {
			"deDE": "Aufladungen: 2\nAufladungsabklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nSpringt zurück und werft Krähenfüße auf den Boden, wodurch Ihr {30/33/36/39/42/45/48/51/54/57}% Schaden verursacht und Gegner um {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}% verlangsamt. Hält 6 Sek. an.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"esES": "Cargas: 2\nTiempo de reutilización de las cargas: {#} s\nProbabilidad de golpe de suerte: {#}%\nSaltas hacia atrás y lanzas al suelo unos abrojos que infligen {30/33/36/39/42/45/48/51/54/57}% de daño y ralentizan un {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}% a los enemigos. Dura 6 s.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"esMX": "Cargas: 2\nRecuperación de carga: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nSaltas hacia atrás y sueltas abrojos en el suelo que infligen {30/33/36/39/42/45/48/51/54/57}% de daño y ralentizan a los enemigos un {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Dura 6 segundos.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"frFR": "Charges : 2\nTemps de recharge des charges : {#} s\nChances de coup de chance : {#}%\nVous bondissez en arrière et lancez des chausse-trappes au sol qui infligent {30/33/36/39/42/45/48/51/54/57}% points de dégâts et ralentissent les adversaires de {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Dure 6 s.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"itIT": "Cariche: 2\nTempo di recupero cariche: {#} s\nProbabilità di colpo fortunato: {#}%\nBalzi indietro e lanci dei triboli sul terreno, infliggendo {30/33/36/39/42/45/48/51/54/57}% danni e rallentando i nemici del {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Dura 6 s.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"jaJP": "チャージ: 2\nチャージのクールダウン: {#}秒\n幸運の一撃発生率: {#}%\n後方に飛び退き、地面に鉄菱をばら撒いて敵に{30/33/36/39/42/45/48/51/54/57}%のダメージを与え、移動速度を{50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%低下させる。6秒間持続する。\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"koKR": "충전: 2\n충전 재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n뒤로 뛰어오르며 땅에 쇠못 덫을 던져 {30/33/36/39/42/45/48/51/54/57}%의 피해를 주고 적을 {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}% 감속시킵니다. 이 효과는 6초 동안 지속됩니다.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"plPL": "Ładunki: 2\nCzas odnowienia ładunku: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nOdskakujesz do tyłu i rzucasz na ziemię kolczatki, które zadają {30/33/36/39/42/45/48/51/54/57}% pkt. obrażeń i spowalniają wrogów o {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Czas działania: 6 sek.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Cargas: 2\nRecarga de cargas: {#} segundos\nChance de Golpe de Sorte: {#}%\nSalta para trás e arremessa estrepes no chão, causando {30/33/36/39/42/45/48/51/54/57}% de dano e desacelerando inimigos em {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Dura 6 segundos.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Количество зарядов: 2.\nВремя восстановления заряда: {#} сек.\nВероятность удачного удара: {#}%.\nВы прыгаете назад, бросая на землю шипы, которые наносят {30/33/36/39/42/45/48/51/54/57}% ед. урона и замедляют противников на {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Время действия – 6 сек.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"zhCN": "使用次数:2\n充能冷却时间:{#}秒\n幸运一击几率:{#}%\n向后跳跃并向地面扔下铁蒺藜,造成{30/33/36/39/42/45/48/51/54/57}%点伤害并使敌人减速{50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%。持续6秒。\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement."
},
		id: 53,
		maxPoints: 5,
		values: [ "12", "25" ],
		x: 542.77,
		y: -1.12
	},
	"Enhanced Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Caltrops", "Methodical Caltrops", "Disciplined Caltrops" ],
		description: `Enemies take x3% increased damage from you each second they are in Caltrops.

Tags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Verbesserte Krähenfüße",
			"esES": "Abrojos mejorados",
			"esMX": "Abrojos Potenciados",
			"frFR": "Chausse-trappe renforcée",
			"itIT": "Triboli Rinforzati",
			"jaJP": "鉄菱(強化版)",
			"koKR": "강화된 쇠못 덫",
			"plPL": "Wzmocniona Kolczatka",
			"ptBR": "Estrepes Aperfeiçoados",
			"ruRU": "Усиленные шипы",
			"zhCN": "强化铁蒺藜"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Krähenfüße betroffen sind, erleiden jede Sekunde x3% mehr Schaden durch Euch.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"esES": "Infliges un x3% más de daño a los enemigos por cada segundo que permanecen en los abrojos.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"esMX": "Los enemigos reciben un x3% más de daño de ti por cada segundo que permanecen en Abrojos.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"frFR": "Les cibles subissent x3% de dégâts supplémentaires de votre part par seconde passée dans des chausse-trappes.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"itIT": "I nemici subiscono il x3% di danni aggiuntivi da te per ogni secondo trascorso in mezzo ai Triboli.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"jaJP": "敵が〈鉄菱〉の範囲内にいる時、自分がその敵に与えるダメージが毎秒x3%増加する。\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"koKR": "쇠못 덫 범위 내에 있는 적이 자신에게 받는 피해가 매초 x3% 증가합니다.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"plPL": "Wrogowie otrzymują od ciebie obrażenia zwiększone o x3% za każdą sekundę spędzoną pod wpływem Kolczatki.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Inimigos recebem 3% de dano aumentado de você a cada segundo que estiverem em Estrepes.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"ruRU": "За каждую секунду, проведенную в области действия \"Шипов\", противники получают от вас на x3% больше урона.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"zhCN": "敌人在铁蒺藜范围内时,受到来自你的伤害每秒提高x3%。\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement."
},
		id: 54,
		maxPoints: 1,
		x: 938.955,
		y: -0.925
	},
	"Methodical Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `Caltrops now deals Cold damage and Chills enemies for 20% per second.

Tags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Methodische Krähenfüße",
			"esES": "Abrojos metódicos",
			"esMX": "Abrojos Metódicos",
			"frFR": "Chausse-trappe méthodique",
			"itIT": "Triboli Metodici",
			"jaJP": "鉄菱(緻密)",
			"koKR": "체계적 쇠못 덫",
			"plPL": "Metodyczne Kolczatki",
			"ptBR": "Estrepes Metódicos",
			"ruRU": "Методичные шипы",
			"zhCN": "有序铁蒺藜"
},
		descriptionLocalized: {
			"deDE": "Krähenfüße verursacht jetzt Kälteschaden und unterkühlt Gegner in Höhe von bis zu 20 % pro Sek.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"esES": "Ahora Abrojos inflige daño de frío y hiela a los enemigos un 20% por segundo.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"esMX": "Abrojos ahora inflige daño de frío y aplica un 20% de helamiento por segundo.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"frFR": "Chausse-trappe inflige désormais des dégâts de froid et glace les adversaires à hauteur de 20% par seconde.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"itIT": "Triboli ora infligge danni da freddo e raggela i nemici del 20% ogni secondo.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"jaJP": "〈鉄菱〉が、敵に冷気ダメージ与え、さらに毎秒20%の冷気効果を付与するようになる。\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"koKR": "쇠못 덫이 이제 냉기 피해를 주고 적에게 매초 20%의 오한을 느끼게 합니다.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"plPL": "Kolczatka zadaje teraz obrażenia od Zimna i wyziębia wrogów o 20% na sekundę.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Estrepes agora causa dano gélido e gela inimigos em 20% por segundo.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"ruRU": "\"Шипы\" теперь наносят урон от холода и заставляют противников коченеть, уменьшая их подвижность на 20% раз в секунду.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"zhCN": "铁蒺藜现在造成冰霜伤害并且每秒冻伤敌人20%。\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement."
},
		id: 55,
		maxPoints: 1,
		x: 1156.86,
		y: -91.955
	},
	"Disciplined Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `You have +5% Critical Strike Chance against enemies inside your Caltrops. Double this amount against Vulnerable enemies.

Tags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Disziplinierte Krähenfüße",
			"esES": "Abrojos disciplinados",
			"esMX": "Abrojos Disciplinados",
			"frFR": "Chausse-trappe disciplinée",
			"itIT": "Triboli Disciplinati",
			"jaJP": "鉄菱(鍛錬)",
			"koKR": "절제된 쇠못 덫",
			"plPL": "Zdyscyplinowane Kolczatki",
			"ptBR": "Estrepes Disciplinados",
			"ruRU": "Упорядоченные шипы",
			"zhCN": "戒律铁蒺藜"
},
		descriptionLocalized: {
			"deDE": "Ihr verfügt über eine kritische Trefferchance von +5% gegen Gegner, die von Krähenfüße betroffen sind. Der Wert verdoppelt sich bei verwundbaren Gegnern.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"esES": "Tienes un +5% de probabilidad de golpe crítico contra los enemigos en el interior de tus abrojos. Esta cantidad se duplica contra enemigos vulnerables.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"esMX": "Tienes un +5% de probabilidad de golpe crítico contra enemigos dentro de tus Abrojos. Esta cantidad se duplica contra enemigos vulnerables.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"frFR": "Vos chances d'infliger un coup critique sont augmentées de +5% contre les cibles prises dans vos chausse-trappes. Cette valeur est doublée contre les cibles vulnérables.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"itIT": "Ottieni il +5% di probabilità di critico aggiuntiva contro i nemici in mezzo ai Triboli. Questo ammontare raddoppia contro i nemici vulnerabili.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"jaJP": "〈カルトロップス〉内の敵に対するクリティカル・ヒット率が+5%になる。脆弱状態の敵に対してはこの度合いが二倍になる。\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"koKR": "쇠못 덫 안의 적에 대한 극대화 확률이 +5% 증가합니다. 적이 취약 상태일 경우 효과가 2배로 증가합니다.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"plPL": "Twoja szansa na trafienie krytyczne wrogów pod wpływem twojej Kolczatki jest zwiększona o +5%. Wartość ta jest podwojona w przypadku odsłoniętych wrogów.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"ptBR": "Você tem +5% de chance de acerto crítico contra inimigos dentro das suas Estrepes. O valor é dobrado contra inimigos vulneráveis.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"ruRU": "Вероятность критического удара повышается на +5% в бою с противниками в области действия ваших \"Шипов\". Это значение удваивается в бою с уязвимыми противниками.\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement.",
			"zhCN": "你对铁蒺藜范围内的敌人造成暴击几率提高+5%。该加成对处于易伤状态的敌人翻倍。\n\nTags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown, Movement."
},
		id: 56,
		maxPoints: 1,
		x: 1154.395,
		y: 99.55
	},
	"Rugged": {
		connections: [ "Agility", "Reactive Defense" ],
		description: `Gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction against Damage Over Time effects.

Tags: Damage Reduction.`,
		nameLocalized: {
			"deDE": "Robustheit",
			"esES": "Inquebrantable",
			"esMX": "Resistente",
			"frFR": "Opiniâtreté",
			"itIT": "Robustezza",
			"jaJP": "頑健",
			"koKR": "다부짐",
			"plPL": "Szorstkość",
			"ptBR": "Robustez",
			"ruRU": "Двужильность",
			"zhCN": "糙皮"
},
		descriptionLocalized: {
			"deDE": "Erhaltet {5/10/15/20/25/30/35/40/45/50}% Schadensreduktion gegen Effekte mit Schaden über Zeit.\n\nTags: Damage Reduction.",
			"esES": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño contra efectos de daño en el tiempo.\n\nTags: Damage Reduction.",
			"esMX": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño contra los efectos de daño con el tiempo.\n\nTags: Damage Reduction.",
			"frFR": "Vous obtenez {5/10/15/20/25/30/35/40/45/50}% de réduction des dégâts infligés par les effets de dégâts sur la durée.\n\nTags: Damage Reduction.",
			"itIT": "Ottieni il {5/10/15/20/25/30/35/40/45/50}% di riduzione danni contro i danni periodici.\n\nTags: Damage Reduction.",
			"jaJP": "継続ダメージの効果が{5/10/15/20/25/30/35/40/45/50}%軽減される。\n\nTags: Damage Reduction.",
			"koKR": "지속 피해 효과에 대한 피해 감소가 {5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Damage Reduction.",
			"plPL": "Zyskujesz {5/10/15/20/25/30/35/40/45/50}% redukcji obrażeń względem efektów obrażeń z upływem czasu.\n\nTags: Damage Reduction.",
			"ptBR": "Recebe {5/10/15/20/25/30/35/40/45/50}% de redução de dano contra efeitos de dano ao longo do tempo.\n\nTags: Damage Reduction.",
			"ruRU": "Вы получаете на {5/10/15/20/25/30/35/40/45/50}% меньше периодического урона.\n\nTags: Damage Reduction.",
			"zhCN": "对持续性伤害效果获得{5/10/15/20/25/30/35/40/45/50}%伤害减免。\n\nTags: Damage Reduction."
},
		id: 57,
		maxPoints: 3,
		x: 366.67,
		y: -223.635
	},
	"Reactive Defense": {
		connections: [ "Rugged" ],
		description: `Gain {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% Damage Reduction while inflicted with Control Impairing Effects.

Tags: Damage Reduction, Crowd Control.`,
		nameLocalized: {
			"deDE": "Reaktive Verteidigung",
			"esES": "Defensa reactiva",
			"esMX": "Defensa Reactiva",
			"frFR": "Défense réactive",
			"itIT": "Difesa Reattiva",
			"jaJP": "反射防御",
			"koKR": "반응성 방어",
			"plPL": "Reaktywna Obrona",
			"ptBR": "Defesa Reativa",
			"ruRU": "Защитный импульс",
			"zhCN": "被动防御"
},
		descriptionLocalized: {
			"deDE": "Erhaltet {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% Schadensreduktion, während Ihr unter Kontrollverlusteffekten leidet.\n\nTags: Damage Reduction, Crowd Control.",
			"esES": "Obtienes un {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% de reducción de daño mientras sufres efectos de pérdida de control.\n\nTags: Damage Reduction, Crowd Control.",
			"esMX": "Obtienes un {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% de reducción de daño mientras tienes efectos que debilitan el control.\n\nTags: Damage Reduction, Crowd Control.",
			"frFR": "Vous obtenez {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% de réduction des dégâts lorsque vous subissez des effets affectant le contrôle.\n\nTags: Damage Reduction, Crowd Control.",
			"itIT": "Ottieni il {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% di riduzione danni quando subisci effetti debilitanti.\n\nTags: Damage Reduction, Crowd Control.",
			"jaJP": "操作障害効果を受けている間、受けるダメージが{4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}%軽減される。\n\nTags: Damage Reduction, Crowd Control.",
			"koKR": "제어 방해 효과를 받고 있을 때 피해 감소가 {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% 증가합니다.\n\nTags: Damage Reduction, Crowd Control.",
			"plPL": "Zyskujesz {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% do redukcji obrażeń, gdy masz ograniczoną kontrolę.\n\nTags: Damage Reduction, Crowd Control.",
			"ptBR": "Recebe {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% de redução de dano enquanto sob efeitos de controle.\n\nTags: Damage Reduction, Crowd Control.",
			"ruRU": "Под действием эффектов контроля вы получаете на {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% меньше урона.\n\nTags: Damage Reduction, Crowd Control.",
			"zhCN": "受到控制类限制效果时获得{4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}%伤害减免。\n\nTags: Damage Reduction, Crowd Control."
},
		id: 58,
		maxPoints: 3,
		x: 645.62,
		y: -393.555
	},
};

rogueData["Subterfuge"] = {
	"Smoke Grenade": {
		connections: [ "Enhanced Smoke Grenade", "Subterfuge" ],
		description: `Cooldown: {#} seconds
Throw a smoky concoction at enemies that Dazes them for {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} seconds.

Tags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Rauchgranate",
			"esES": "Granada de humo",
			"esMX": "Granada de Humo",
			"frFR": "Bombe fumigène",
			"itIT": "Bomba Fumogena",
			"jaJP": "スモーク・グレネード",
			"koKR": "연막탄",
			"plPL": "Granat Dymny",
			"ptBR": "Granada de Fumaça",
			"ruRU": "Ослепляющий дым",
			"zhCN": "烟雾手雷"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nWerft ein rauchendes Gebräu auf Gegner, das sie {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} Sek. lang benommen macht.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"esES": "Tiempo de reutilización: {#} s\nLanzas a los enemigos un brebaje humeante que los atonta durante {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} s.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"esMX": "Recuperación: {#} segundos\nLanzas una bomba humeante a los enemigos que los atonta durante {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} segundos.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"frFR": "Temps de recharge : {#} s\nVous lancez une concoction fumante sur vos adversaires, ce qui les hébète pendant {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} s.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"itIT": "Tempo di recupero: {#} s\nLanci una mistura fumogena sui nemici, infliggendo Frastornamento per {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} s.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"jaJP": "クールダウン: {#}秒\n煙を発する調合物を敵に投げつけ、{4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6}秒間にわたり眩暈状態にする。\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"koKR": "재사용 대기시간: {#}초\n적에게 연기가 피어오르는 혼합물을 던져 {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6}초 동안 멍해지게 합니다.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"plPL": "Czas odnowienia: {#} sek.\nRzucasz we wrogów dymną miksturę, która oszałamia ich na {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} sek.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"ptBR": "Recarga: {#} segundos\nArremessa uma mistura esfumaçada que aplica torpor nos inimigos por {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} segundos.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"ruRU": "Время восстановления: {#} сек.\nВы бросаете в противников дымящийся отвар, вызывающий у них головокружение на {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} сек.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"zhCN": "冷却时间:{#}秒\n向敌人投掷烟雾缭绕的混合物,眩晕敌人{4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6}秒。\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown."
},
		id: 123,
		maxPoints: 5,
		values: [ "15" ],
		x: -603.97,
		y: 4.535
	},
	"Enhanced Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Smoke Grenade", "Subverting Smoke Grenade", "Countering Smoke Grenade" ],
		description: `Enemies affected by Smoke Grenade take x15% increased damage from you.

Tags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Rauchgranate",
			"esES": "Granada de humo mejorada",
			"esMX": "Granada de Humo Potenciada",
			"frFR": "Bombe fumigène renforcée",
			"itIT": "Bomba Fumogena Rinforzata",
			"jaJP": "スモーク・グレネード(強化版)",
			"koKR": "강화된 연막탄",
			"plPL": "Wzmocniony Granat Dymny",
			"ptBR": "Granada de Fumaça Aperfeiçoada",
			"ruRU": "Усиленный ослепляющий дым",
			"zhCN": "强化烟雾手雷"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Rauchgranate betroffen sind, erleiden durch Euch x15% mehr Schaden.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"esES": "Infliges un x15% más de daño a los enemigos afectados por Granada de humo.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"esMX": "Los enemigos afectados por Granada de Humo reciben un x15% más de daño de ti.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"frFR": "Les cibles affectées par Bombe fumigène subissent x15% de dégâts supplémentaires de votre part.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"itIT": "I nemici colpiti da Bomba Fumogena subiscono il x15% di danni aggiuntivi da te.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"jaJP": "〈スモーク・グレネード〉の影響を受けた敵に自分が与えるダメージがx15%増加する。\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"koKR": "연막탄의 영향을 받는 적들이 자신에게 받는 피해가 x15% 증가합니다.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"plPL": "Wrogowie znajdujący się pod wpływem Granatu Dymnego otrzymują od ciebie obrażenia zwiększone o x15%.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"ptBR": "Inimigos afetados por Granada de Fumaça recebem 15% de dano aumentado de você.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"ruRU": "Противники под действием \"Ослепляющего дыма\" получают от вас на x15% больше урона.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"zhCN": "被烟雾手雷影响的敌人受到来自你的伤害提高x15%。\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown."
},
		id: 124,
		maxPoints: 1,
		x: -1015.755,
		y: 4.314
	},
	"Subverting Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `If an enemy is Vulnerable, Slowed, or Chilled then Smoke Grenade will Daze them for x20% longer.

Tags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Zerrüttende Rauchgranate",
			"esES": "Granada de humo subversiva",
			"esMX": "Granada de Humo Subversiva",
			"frFR": "Bombe fumigène subversive",
			"itIT": "Bomba Fumogena Rivoluzionaria",
			"jaJP": "スモーク・グレネード(逆転)",
			"koKR": "전복시키는 연막탄",
			"plPL": "Obalający Granat Dymny",
			"ptBR": "Granada de Fumaça Destruidora",
			"ruRU": "Коварный ослепляющий дым",
			"zhCN": "颠覆烟雾手雷"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Gegner verwundbar, verlangsamt oder unterkühlt ist, macht Rauchgranate ihn x20% länger benommen.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"esES": "Si un enemigo es vulnerable o está ralentizado o helado, Granada de humo lo atonta durante un x20% más.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"esMX": "Si el enemigo está vulnerable, ralentizado o helado, Granada de Humo lo atonta un x20% más de tiempo.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"frFR": "Si une cible est vulnérable, ralentie ou glacée, alors Bombe fumigène l'hébète pour une durée rallongée de x20%.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"itIT": "Se un nemico è vulnerabile, rallentato o raggelato colpirlo con Bomba Fumogena gli infliggerà Frastornamento per il x20% più a lungo.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"jaJP": "敵が脆弱、移動速度低下、または冷気状態の場合、〈スモーク・グレネード〉がその敵を眩暈状態にする時間がx20%伸びる。\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"koKR": "적이 취약, 감속, 오한 상태인 경우 연막탄이 대상을 멍해지게 만드는 지속시간이 x20% 증가합니다.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"plPL": "Jeśli wróg jest odsłonięty, spowolniony albo wyziębiony, jego oszołomienie od Granatu Dymnego trwa o x20% dłużej.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"ptBR": "Se um inimigo está vulnerável, desacelerado ou com gelidez, então Granada de Fumaça aplicará torpor nele por 20% mais tempo.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"ruRU": "\"Ослепляющий дым\" вызывает головокружение у уязвимых, замедленных или окоченевших противников на x20% дольше.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"zhCN": "如果敌人处于易伤、减速或冻伤状态,烟雾手雷的眩晕时间延长x20%。\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown."
},
		id: 125,
		maxPoints: 1,
		x: -1235.79,
		y: 94.325
	},
	"Countering Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `Lucky Hit: Dealing direct damage to enemies affected by Smoke Grenade has up to a 25% chance to reduce its Cooldown by 1 second, or by 2 seconds instead if the enemy is Vulnerable.

Tags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Konternde Rauchgranate",
			"esES": "Granada de humo contrarrestante",
			"esMX": "Granada de Humo Contrarrestante",
			"frFR": "Bombe fumigène rebelle",
			"itIT": "Bomba Fumogena Contrastante",
			"jaJP": "スモーク・グレネード(逆襲)",
			"koKR": "역습하는 연막탄",
			"plPL": "Kontrujący Granat Dymny",
			"ptBR": "Granada de Fumaça Replicante",
			"ruRU": "Ответный ослепляющий дым",
			"zhCN": "反击烟雾手雷"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Bei direktem Schaden gegen Gegner, die unter Rauchgranate leiden, besteht eine Chance von 25 %, die Abklingzeit um 1 Sek. zu reduzieren. Ist der Gegner verwundbar, wird die Abklingzeit stattdessen um 2 Sek. reduziert.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"esES": "Golpe de suerte: Infligir daño directo a enemigos afectados por Granada de humo tiene hasta un 25% de probabilidad de reducir 1 s su tiempo de reutilización, o 2 s si el enemigo es vulnerable.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"esMX": "Golpe afortunado: Al infligir daño directo a enemigos afectados por Granada de Humo, obtienes un 25% de probabilidad de reducir su recuperación 1 segundo, o 2 segundos si el enemigo está vulnerable.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"frFR": "Coup de chance : infliger des dégâts directs à une cible affectée par Bombe fumigène a jusqu'à 25% de chances de réduire son temps de recharge de 1 s, ou de 2 s si la cible est vulnérable.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"itIT": "Colpo fortunato: i danni diretti inflitti ai nemici affetti da Bomba Fumogena hanno fino al 25% di probabilità di ridurne il tempo di recupero di 1 s, o di 2 s se il nemico è vulnerabile.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"jaJP": "幸運の一撃: 〈スモーク・グレネード〉の影響を受けた敵に直接ダメージを与えると、最大25%の確率で〈スモーク・グレネード〉のクールダウンが1秒短くなる。敵が脆弱状態の場合は2秒短くなる。\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"koKR": "행운의 적중: 연막탄의 영향을 받고 있는 적에게 직접 피해를 주면 최대 25% 확률로 해당 기술의 재사용 대기시간이 1초 감소합니다. 취약 상태의 적에게 피해를 주면 2초 감소합니다.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"plPL": "Szczęśliwy traf: Zadawanie bezpośrednich obrażeń wrogom pod wpływem Granatu Dymnego ma do 25% szans na skrócenie jego czasu odnowienia o 1 sek. albo o 2 sek., jeśli przeciwnik jest odsłonięty.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"ptBR": "Golpe de Sorte: Causar dano direto a inimigos afetados por Granada de Fumaça tem até 25% de chance de reduzir a recarga em 1 segundo, ou em 2 segundos se o inimigo estiver vulnerável.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"ruRU": "Удачный удар: прямой урон противникам под действием \"Ослепляющего дыма\" с вероятностью до 25% снижает его время восстановления на 1 сек. Если противники уязвимы, время восстановления сокращается на 2 сек.\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.",
			"zhCN": "幸运一击:对受烟雾手雷影响的敌人造成直接伤害时,最多有25%几率使其冷却时间缩短1秒,如果敌人处于易伤状态,则冷却时间缩短2秒。\n\nTags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown."
},
		id: 126,
		maxPoints: 1,
		x: -1241.33,
		y: -67.379
	},
	"Concealment": {
		connections: [ "Subterfuge", "Enhanced Stealth" ],
		description: `Cooldown: {#} seconds
Vanish from sight, gaining an advanced form of Stealth for 4 seconds that will not be removed by taking damage.

Concealment also makes you Unstoppable, grants +25% Movement Speed, and allows you to move freely through enemies for its duration.

Using an attack Skill during Concealment will break Concealment.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Verschleierung",
			"esES": "Ocultación",
			"esMX": "Ocultamiento",
			"frFR": "Dissimulation",
			"itIT": "Occultamento",
			"jaJP": "隠密",
			"koKR": "은신",
			"plPL": "Maskowanie",
			"ptBR": "Dissimulação",
			"ruRU": "Маскировка",
			"zhCN": "隐蔽"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nMacht Euch unsichtbar und geht 4 Sek. lang in eine fortgeschrittene Form von Verstohlenheit über, die nicht entfernt wird, wenn Ihr Schaden erleidet.\n\nVerschleierung lässt Euch zudem unaufhaltsam werden, gewährt Euch +25% Bewegungsgeschwindigkeit und ermöglicht es Euch, Euch während der Dauer ungehindert durch Gegner hindurchzubewegen.\n\nWenn Ihr während Verschleierung eine Angriffsfertigkeit einsetzt, endet Verschleierung.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"esES": "Tiempo de reutilización: {#} s\nTe esfumas y obtienes una forma avanzada de sigilo que no se elimina al sufrir daño durante 4 s.\n\nAdemás, Ocultación te vuelve imparable, te otorga un +25% de velocidad de movimiento y te permite atravesar a los enemigos libremente mientras dura.\n\nUsar una habilidad de ataque durante Ocultación interrumpe su efecto.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"esMX": "Recuperación: {#} segundos\nDesapareces y obtienes una forma avanzada de Sigilo durante 4 segundos que no se quitará al recibir daño.\n\nOcultamiento también te vuelve imparable, te otorga un +25% de velocidad de movimiento y te permite moverte libremente a través de los enemigos en el transcurso de su duración.\n\nSi usas una habilidad de ataque mientras tienes Ocultamiento, el Ocultamiento se interrumpirá.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"frFR": "Temps de recharge : {#} s\nVous devenez invisible, ce qui vous confère pendant 4 s une forme avancée de Camouflage qui ne se dissipe pas lorsque vous subissez des dégâts.\n\nDissimulation vous rend aussi inarrêtable, augmente votre vitesse de déplacement de +25% et vous permet de vous mouvoir librement parmi les adversaires pendant toute sa durée.\n\nDissimulation prend fin lorsque vous utilisez une compétence d'attaque.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"itIT": "Tempo di recupero: {#} s\nScompari, ottenendo una forma avanzata di Furtività per 4 s (il tempo non diminuirà quando subirai danni).\n\nAnche Occultamento ti rende inarrestabile, aumenta la velocità di movimento del +25% e ti permette di spostarti più velocemente tra i nemici per tutta la sua durata.\n\nUsare un'abilità d'attacco durante Occultamento interromperà Occultamento.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"jaJP": "クールダウン: {#}秒\n隠密の上位状態になり、4秒間にわたり認識されなくなる。この効果はダメージを受けても解除されない。\n\n〈隠密〉状態になると抑圧不可の効果も得る上に、移動速度が+25%増加し、持続時間中は敵をすり抜けて自由に移動できる。\n\n〈隠密〉中に攻撃スキルを使うと、〈隠密〉が解除される。\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"koKR": "재사용 대기시간: {#}초\n시야에서 사라져 4초 동안 향상된 방식으로 은폐 상태가 되고, 피해를 받아도 해당 효과가 사라지지 않습니다.\n\n은신의 지속시간 동안 저지 불가 상태가 되고, 이동 속도가 +25% 증가하고, 적을 자유롭게 통과합니다.\n\n은신 도중에 공격 기술을 사용하면 은신이 해제됩니다.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"plPL": "Czas odnowienia: {#} sek.\nZnikasz wrogom z oczu, zyskując zaawansowaną formę ukrycia na 4 sek. Efekt ten nie zostanie przerwany po otrzymaniu obrażeń.\n\nGdy Maskowanie jest aktywne, zapewnia ci również nieustępliwość i premię +25% do szybkości ruchu, a także pozwala swobodnie przenikać przez wrogów.\n\nUżycie umiejętności ataku w trakcie trwania Maskowania przerwie ten efekt.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"ptBR": "Recarga: {#} segundos\nVocê desaparece, recebendo uma forma avançada de Furtividade por 4 segundos que não será removida ao receber dano.\n\nDissimulação também torna você implacável, concede +25% de velocidade de movimento e permite mover-se livremente através de inimigos durante o efeito.\n\nUsar uma habilidade de ataque durante Dissimulação cancelará Dissimulação.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"ruRU": "Время восстановления: {#} сек.\nВы скрываетесь из виду, переходя в совершенное состояние незаметности на 4 сек., которое не рассеивается при получении урона.\n\nПока действует маскировка, вы также получаете неудержимость, скорость передвижения повышается на +25% и вы можете свободно проходить сквозь врагов.\n\nПри применении наносящих урон навыков маскировка снимается.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"zhCN": "冷却时间:{#}秒\n从视线中消失,获得高级形式的潜行,持续4秒,不会因受到伤害而移除。\n\n隐蔽还可以让你变得不可阻挡,移动速度提高+25%,并使你可以在持续时间内自由穿过敌人。\n\n在隐蔽期间使用攻击技能会打破隐蔽状态。\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement."
},
		id: 127,
		maxPoints: 5,
		values: [ "{20/19/18/17/16/15.2/14.4/13.6/12.8/12}" ],
		x: -390.71,
		y: -209.637
	},
	"Enhanced Stealth": {
		baseSkill: "Concealment",
		connections: [ "Concealment", "Subverting Stealth", "Countering Stealth" ],
		description: `You gain 40 Energy when you enter Concealment.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Verbesserte Verstohlenheit",
			"esES": "Sigilo mejorado",
			"esMX": "Sigilo Potenciado",
			"frFR": "Camouflage renforcé",
			"itIT": "Furtività Rinforzata",
			"jaJP": "隠密(強化版)",
			"koKR": "강화된 은폐",
			"plPL": "Wzmocnione Ukrycie",
			"ptBR": "Furtividade Aperfeiçoada",
			"ruRU": "Усиленная незаметность",
			"zhCN": "强化潜行"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet 40 Energie, wenn Ihr Verschleierung aktiviert.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"esES": "Obtienes 40 de energía cuando entras en estado de Ocultación.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"esMX": "Obtienes 40 de Energía cuando usas Ocultamiento.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"frFR": "Vous obtenez 40 points d'énergie lorsque vous entrez en Dissimulation.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"itIT": "Ottieni 40 energia attivando Occultamento.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"jaJP": "〈隠密〉状態になると、40のエネルギーを獲得する。\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"koKR": "은신 상태가 되면 기력을 40 얻습니다.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"plPL": "Odzyskujesz 40 pkt. energii, kiedy wchodzisz w tryb maskowania.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"ptBR": "Você recebe 40 de energia ao ativar Dissimulação.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"ruRU": "Вы накапливаете 40 ед. энергии после перехода в состояние маскировки.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"zhCN": "你进入隐蔽时获得40点能量。\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement."
},
		id: 75,
		maxPoints: 1,
		x: -681.17,
		y: -340.45
	},
	"Subverting Stealth": {
		baseSkill: "Concealment",
		connections: [ "Enhanced Stealth" ],
		description: `The Skill that breaks Concealment makes enemies Vulnerable for 3 seconds.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Zerrüttende Verstohlenheit",
			"esES": "Sigilo subversivo",
			"esMX": "Sigilo Subversivo",
			"frFR": "Camouflage subversif",
			"itIT": "Furtività Rivoluzionaria",
			"jaJP": "隠密(逆転)",
			"koKR": "전복시키는 은폐",
			"plPL": "Obalające Ukrycie",
			"ptBR": "Furtividade Destruidora",
			"ruRU": "Коварная незаметность",
			"zhCN": "颠覆潜行"
},
		descriptionLocalized: {
			"deDE": "Die Fertigkeit, die Verschleierung unterbricht, macht Gegner 3 Sek. lang verwundbar.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"esES": "La habilidad que interrumpe Ocultación siempre vuelve vulnerables a los enemigos durante 3 s.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"esMX": "La habilidad que interrumpe el Ocultamiento siempre vuelve a los enemigos vulnerables durante 3 segundos.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"frFR": "La compétence qui annule Dissimulation rend les adversaires vulnérables pendant 3 s.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"itIT": "Attivare un'abilità che interrompe Occultamento rende sempre i nemici vulnerabili per 3 s.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"jaJP": "〈隠密〉を解除したスキルは、敵を3秒間にわたり脆弱状態にする。\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"koKR": "은신을 해제하는 기술이 적을 3초 동안 취약하게 만듭니다.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"plPL": "Umiejętność, która przerwie maskowanie, sprawia również, że wrogowie stają się odsłonięci przez 3 sek.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"ptBR": "A habilidade que cancelar Dissimulação sempre torna os inimigos vulneráveis por 3 segundos.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"ruRU": "Навык, снимающий состояние маскировки, делает противников уязвимыми на 3 сек.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"zhCN": "使用技能打破隐蔽时必定会使敌人陷入易伤状态,持续3秒。\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement."
},
		id: 77,
		maxPoints: 1,
		x: -706.615,
		y: -486.354
	},
	"Countering Stealth": {
		baseSkill: "Concealment",
		connections: [ "Enhanced Stealth" ],
		description: `The Skill that breaks Concealment will always be a guaranteed Critical Strike.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Konternde Verstohlenheit",
			"esES": "Sigilo contrarrestante",
			"esMX": "Sigilo Contrarrestante",
			"frFR": "Camouflage rebelle",
			"itIT": "Furtività Contrastante",
			"jaJP": "隠密(逆襲)",
			"koKR": "역습하는 은폐",
			"plPL": "Kontrujące Ukrycie",
			"ptBR": "Furtividade Replicante",
			"ruRU": "Ответная незаметность",
			"zhCN": "反击潜行"
},
		descriptionLocalized: {
			"deDE": "Die Fertigkeit, die Verschleierung unterbricht, erzielt garantiert einen kritischen Treffer.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"esES": "La habilidad que interrumpa Ocultación asestará siempre un golpe crítico.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"esMX": "La habilidad que interrumpe el Ocultamiento siempre será un golpe crítico garantizado.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"frFR": "La compétence qui annule Dissimulation inflige un coup critique garanti.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"itIT": "Attivare un'abilità che interrompe Occultamento infliggerà sempre un colpo critico garantito.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"jaJP": "〈隠密〉を解除したスキルは必ずクリティカルヒットになる。\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"koKR": "은신을 해제하는 기술은 언제나 확정적으로 극대화 적중합니다.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"plPL": "Umiejętność, która przerwie maskowanie, ma zagwarantowane trafienie krytyczne.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"ptBR": "A habilidade que cancelar Dissimulação sempre será um acerto crítico garantido.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"ruRU": "Навык, снимающий состояние маскировки, гарантированно наносит критический урон.\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.",
			"zhCN": "技能打破隐蔽时必定暴击。\n\nTags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement."
},
		id: 76,
		maxPoints: 1,
		x: -951.19,
		y: -343.327
	},
	"Poison Trap": {
		connections: [ "Subterfuge", "Enhanced Poison Trap" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Place a trap that arms after {#} seconds. It activates when an enemy moves within range, applying {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% Poisoning damage over 9 seconds to enemies in the area.

You can have 4 armed traps out at once.

Tags: Subterfuge, Trap, Damage, Poison, Cooldown.`,
		nameLocalized: {
			"deDE": "Giftfalle",
			"esES": "Trampa de veneno",
			"esMX": "Trampa Venenosa",
			"frFR": "Piège de poison",
			"itIT": "Trappola Avvelenata",
			"jaJP": "ポイズン・トラップ",
			"koKR": "맹독 덫",
			"plPL": "Trująca Pułapka",
			"ptBR": "Armadilha Venenosa",
			"ruRU": "Ловушка с ядом",
			"zhCN": "剧毒陷阱"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nPlatziert eine Falle, die nach {#} Sek. scharf wird. Kommen Gegner ihr zu nahe, aktiviert sie sich und fügt Gegnern im Wirkungsbereich im Verlauf von 9 Sek. {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% Giftschaden zu.\n\nIhr könnt 4 scharfe Fallen gleichzeitig haben.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nColocas una trampa que se arma al cabo de {#} s. Cuando un enemigo se pone al alcance, se activa e inflige {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% de daño de veneno durante 9 s a los enemigos en la zona.\n\nPuedes tener 4 trampas armadas a la vez.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nColocas una trampa que se arma después de {#} segundos. Se activa cuando un enemigo se acerca e inflige {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% de daño de veneno durante 9 segundos a los enemigos en el área.\n\nPuedes tener 4 trampas armadas al mismo tiempo.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVous placez un piège qui s'arme au bout de {#} s. Il s'active lorsqu'une cible passe à portée, ce qui applique {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% points de dégâts de poison en 9 s aux adversaires se trouvant dans la zone affectée.\n\nVous pouvez avoir jusqu'à 4 pièges armés à la fois.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nPiazzi una trappola che si arma dopo {#} s. Quando un nemico entra nel suo raggio d'azione, la trappola si attiva infliggendo {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% danni da veleno per 9 s ai nemici nell'area.\n\nPuoi armare 4 trappole simultaneamente.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n{#}秒後に起動準備が完了する罠を仕掛ける。罠は範囲内で敵が動くと起動し、エリア内にいる敵に9秒間かけて{345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}%の毒ダメージを与える。\n\n罠は同時に4個まで起動可能状態にできる。\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n{#}초 후 장전되는 덫을 설치합니다. 덫은 적이 범위 내에 들어오면 발동하며, 해당 범위에 있는 적들에게 9초에 걸쳐 {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}%의 중독 피해를 줍니다.\n\n덫은 한 번에 4개까지 장전할 수 있습니다.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nTworzysz pułapkę, która uzbraja się po {#} sek. Gdy wróg zajdzie się w jej zasięgu, pułapka się aktywuje, a następnie zadaje wrogom na jej obszarze {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% pkt. obrażeń od zatrucia w ciągu 9 sek.\n\nMożesz mieć jednocześnie 4 uzbrojone pułapki:uzbrojonych pułapek.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nPosiciona uma armadilha que arma após {#} segundos. É ativada quando um inimigo entra em alcance, aplicando {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% de dano venenoso ao longo de 9 segundos a inimigos na área.\n\nVocê pode ter 4 armadilhas armadas de uma vez.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы размещаете на земле ловушку, которая заряжается через {#} сек. Когда в область действия попадает противник, она срабатывает и отравляет цели в зоне поражения, нанося {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% ед. урона от отравления за 9 сек.\n\nМаксимальное количество заряженных размещенных ловушек – 4.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n放置一个在{#}秒后完成部署的陷阱。陷阱会在敌人进入范围时激活,在9秒内对范围内的敌人造成{345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}%点毒素伤害。\n\n你在同一时间只能拥有4个部署的陷阱。\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown."
},
		id: 70,
		maxPoints: 5,
		values: [ "10", "20", "1.25" ],
		x: -411.99,
		y: 220.272
	},
	"Enhanced Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Poison Trap", "Countering Poison Trap", "Subverting Poison Trap" ],
		description: `Poison Trap Knocks Down enemies for 1.5 seconds when it activates.

Tags: Subterfuge, Trap, Damage, Poison, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Giftfalle",
			"esES": "Trampa de veneno mejorada",
			"esMX": "Trampa Venenosa Potenciada",
			"frFR": "Piège de poison renforcé",
			"itIT": "Trappola Avvelenata Rinforzata",
			"jaJP": "ポイズン・トラップ(強化版)",
			"koKR": "강화된 맹독 덫",
			"plPL": "Wzmocniona Trująca Pułapka",
			"ptBR": "Armadilha Venenosa Aperfeiçoada",
			"ruRU": "Усиленная ловушка с ядом",
			"zhCN": "强化剧毒陷阱"
},
		descriptionLocalized: {
			"deDE": "Giftfalle schlägt Gegner bei der Aktivierung 1.5 Sek. lang nieder.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"esES": "Trampa de veneno derriba a los enemigos durante 1.5 s cuando se activa.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"esMX": "Trampa Venenosa derriba a los enemigos durante 1.5 segundos al activarse.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"frFR": "Piège de poison renverse les adversaires pendant 1.5 s quand il s'active.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"itIT": "Trappola Avvelenata fa cadere a terra i nemici per 1.5 s quando si attiva.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"jaJP": "〈ポイズン・トラップ〉が起動すると、敵を1.5秒間ノックダウン状態にする。\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"koKR": "맹독 덫이 발동할 때 적들을 1.5초 동안 넘어뜨립니다.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"plPL": "Przy aktywacji Trująca Pułapka powala wrogów na 1.5 sek.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"ptBR": "Armadilha Venenosa nocauteia inimigos por 1.5 segundos quando é ativada.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"ruRU": "При срабатывании \"Ловушка с ядом\" сбивает противников с ног на 1.5 сек.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"zhCN": "剧毒陷阱激活时击倒敌人,持续1.5秒。\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown."
},
		id: 71,
		maxPoints: 1,
		x: -686.37,
		y: 364.826
	},
	"Countering Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `Poison Trap has a 20% chance to reset your Imbuement Skill Cooldowns when activated.

Tags: Subterfuge, Trap, Damage, Poison, Cooldown.`,
		nameLocalized: {
			"deDE": "Konternde Giftfalle",
			"esES": "Trampa de veneno contrarrestante",
			"esMX": "Trampa Venenosa Contrarrestante",
			"frFR": "Piège de poison rebelle",
			"itIT": "Trappola Avvelenata Contrastante",
			"jaJP": "ポイズン・トラップ(逆襲)",
			"koKR": "역습하는 맹독 덫",
			"plPL": "Kontrująca Trująca Pułapka",
			"ptBR": "Armadilha Venenosa Replicante",
			"ruRU": "Ответная ловушка с ядом",
			"zhCN": "反击剧毒陷阱"
},
		descriptionLocalized: {
			"deDE": "Giftfalle verfügt über eine Chance von 20%, bei der Aktivierung Eure Infusionsabklingzeiten zurückzusetzen.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"esES": "Trampa de veneno tiene un 20% de probabilidad de reiniciar los tiempos de reutilización de tus habilidades de imbuición cuando se activa.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"esMX": "Trampa Venenosa tiene un 20% de probabilidad de restablecer tus recuperaciones de habilidades de Imbuición al activarse.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"frFR": "Piège de poison a 20% de chances de réinitialiser les temps de recharge de vos compétences d'imprégnation lorsqu'il est activé.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"itIT": "Trappola Avvelenata ha una probabilità del 20% di azzerare i tempi di recupero delle tue abilità di Infusione quando si attiva.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"jaJP": "〈ポイズン・トラップ〉が起動すると、20%の確率で注入スキルのクールダウンがリセットされる。\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"koKR": "맹독 덫이 발동하면 20% 확률로 주입 기술의 재사용 대기시간이 초기화됩니다.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"plPL": "Trująca Pułapka ma przy aktywacji 20% szans na wyzerowanie czasów odnowienia twoich umiejętności Nasycania.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"ptBR": "Armadilha Venenosa tem 20% de chance de reiniciar as recargas de habilidades de Imbuição quando ativada.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"ruRU": "При срабатывании \"Ловушка с ядом\" с вероятностью 20% обновляет ваши навыки категории \"Насыщение\".\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"zhCN": "剧毒陷阱激活时有20%几率重置你的灌注技能冷却时间。\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown."
},
		id: 72,
		maxPoints: 1,
		x: -971.755,
		y: 363.911
	},
	"Subverting Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `You deal x10% increased Poison damage to enemies standing inside your Poison Trap.

Tags: Subterfuge, Trap, Damage, Poison, Cooldown.`,
		nameLocalized: {
			"deDE": "Zerrüttende Giftfalle",
			"esES": "Trampa de veneno subversiva",
			"esMX": "Trampa Venenosa Subversiva",
			"frFR": "Piège de poison subversif",
			"itIT": "Trappola Avvelenata Rivoluzionaria",
			"jaJP": "ポイズン・トラップ(逆転)",
			"koKR": "전복시키는 맹독 덫",
			"plPL": "Obalająca Trująca Pułapka",
			"ptBR": "Armadilha Venenosa Destruidora",
			"ruRU": "Коварная ловушка с ядом",
			"zhCN": "颠覆剧毒陷阱"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt Gegnern, die in Eurer Giftfalle stehen, x10% mehr Giftschaden zu.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"esES": "Infliges un x10% más de daño de veneno a enemigos en el interior de tu Trampa de veneno.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"esMX": "Infliges un x10% más de daño de veneno a los enemigos que se encuentran dentro de tu Trampa Venenosa.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"frFR": "Vous infligez x10% de dégâts de poison supplémentaires aux adversaires se trouvant dans votre Piège de poison.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"itIT": "Infliggi il x10% di danni da veleno aggiuntivi ai nemici che si trovano all'interno della tua Trappola Avvelenata.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"jaJP": "〈ポイズン・トラップ〉の中にいる敵に与える毒ダメージがx10%増加する。\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"koKR": "자신의 맹독 덫 안에 있는 적들에게 주는 독 피해가 x10% 증가합니다.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"plPL": "Zadajesz obrażenia od Trucizny zwiększone o x10% wrogom stojącym na Trującej Pułapce.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"ptBR": "Você causa 10% de dano venenoso aumentado a inimigos que estão dentro da sua Armadilha Venenosa.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"ruRU": "Вы наносите на x10% больше урона от яда противникам, находящимся в ловушке с ядом.\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown.",
			"zhCN": "你对站在剧毒陷阱中的敌人造成的毒素伤害提高x10%。\n\nTags: Subterfuge, Trap, Damage, Poison, Cooldown."
},
		id: 73,
		maxPoints: 1,
		x: -713.635,
		y: 514.772
	},
	"Dark Shroud": {
		connections: [ "Enhanced Dark Shroud", "Subterfuge" ],
		description: `Cooldown: {#} seconds
Surround yourself with up to 5 protective shadows. Gain {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% Damage Reduction per active shadow. Each time you take direct damage, that damage is reduced and a shadow is consumed.

Tags: Subterfuge, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Dunkler Schleier",
			"esES": "Embozo oscuro",
			"esMX": "Sudario Oscuro",
			"frFR": "Sombre voile",
			"itIT": "Manto Oscuro",
			"jaJP": "ダーク・シュラウド",
			"koKR": "어둠의 장막",
			"plPL": "Mroczny Całun",
			"ptBR": "Véu Sombrio",
			"ruRU": "Теневая завеса",
			"zhCN": "暗影帷幕"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nUmhüllt Euch mit bis zu 5 schützenden Schatten. Erhaltet {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% Schadensreduktion pro aktivem Schatten. Jedes Mal, wenn Ihr direkten Schaden erleidet, wird dieser Schaden reduziert und ein Schatten wird verbraucht.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"esES": "Tiempo de reutilización: {#} s\nTe rodeas con hasta 5 sombras protectoras. Obtienes un {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de reducción de daño por sombra activa. Cada vez que sufres daño directo, ese daño se reduce y se consume una sombra.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"esMX": "Recuperación: {#} segundos\nTe envuelves con hasta 5 sombras protectoras. Obtienes un {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de reducción de daño por cada sombra activa. Cada vez que recibes daño directo, dicho daño se reduce, y se consume una sombra.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"frFR": "Temps de recharge : {#} s\nVous vous entourez de 5 ombres protectrices au maximum. Vous obtenez {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de réduction des dégâts pour chaque ombre active. Chaque fois que vous subissez des dégâts directs, ces dégâts sont réduits et une ombre est consommée.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"itIT": "Tempo di recupero: {#} s\nTi circondi di massimo 5 ombre protettive. Ottieni il {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% di riduzione danni per ombra attiva. Ogni volta che subisci danni diretti, quei danni si riducono e un'ombra si consuma.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"jaJP": "クールダウン: {#}秒\n最大5個の防御用影で身を取り巻く。発動している影1個につき、受けるダメージが{8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%軽減される。直接ダメージを受けるたびに、影1個を消費してそのダメージを軽減する。\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"koKR": "재사용 대기시간: {#}초\n자신을 최대 5개의 그림자로 둘러쌉니다. 활성화된 그림자 하나당 피해 감소가 {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% 증가합니다. 자신이 직접 피해를 받을 때마다 해당 피해가 감소하고 그림자 하나가 소모됩니다.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"plPL": "Czas odnowienia: {#} sek.\nOtaczasz się ochronnymi cieniami (maksymalnie 5). Zyskujesz premię {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% do redukcji obrażeń za aktywny cień. Za każdym razem, gdy otrzymujesz bezpośrednie obrażenia, są one zredukowane, a jeden z cieni zostaje pochłonięty.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"ptBR": "Recarga: {#} segundos\nAté 5 sombras protetoras cercam você. Você recebe {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de redução de dano por sombra ativa. Sempre que você receber dano direto, esse dano é reduzido e uma sombra é consumida.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"ruRU": "Время восстановления: {#} сек.\nВас окружает до 5 теней, каждая из которых уменьшает получаемый урон на {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%. Каждый раз, когда вы получаете прямой урон, этот урон уменьшается, а одна тень исчезает.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"zhCN": "冷却时间:{#}秒\n用最多5层防御性暗影环绕你。每有一层激活的暗影获得{8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%伤害减免。每次受到直接伤害时,该伤害都会降低并消耗一层暗影。\n\nTags: Subterfuge, Damage Reduction, Cooldown."
},
		id: 59,
		maxPoints: 5,
		values: [ "20" ],
		x: 546.385,
		y: 3.375
	},
	"Enhanced Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Dark Shroud", "Countering Dark Shroud", "Subverting Dark Shroud" ],
		description: `Dark Shroud's shadows have a 10% chance to not be consumed.

Tags: Subterfuge, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserter Dunkler Schleier",
			"esES": "Embozo oscuro mejorado",
			"esMX": "Sudario Oscuro Potenciado",
			"frFR": "Sombre voile renforcé",
			"itIT": "Manto Oscuro Rinforzato",
			"jaJP": "ダーク・シュラウド(強化版)",
			"koKR": "강화된 어둠의 장막",
			"plPL": "Wzmocniony Mroczny Całun",
			"ptBR": "Véu Sombrio Aperfeiçoado",
			"ruRU": "Усиленная теневая завеса",
			"zhCN": "强化暗影帷幕"
},
		descriptionLocalized: {
			"deDE": "Die Schatten von Dunkle Schleier verfügen über eine Chance von 10%, nicht verbraucht zu werden.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"esES": "Las sombras de Embozo oscuro tienen un 10% de probabilidad de no consumirse.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"esMX": "Las sombras de Sudario Oscuro tienen un 10% de probabilidad de no consumirse.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"frFR": "Les ombres de Sombre voile ont 10% de chances de ne pas être consommées.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"itIT": "Le ombre di Manto Oscuro hanno una probabilità del 10% di non essere consumate.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"jaJP": "〈ダーク・シュラウド〉の影が10%の確率で消費されない。\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"koKR": "어둠의 장막의 그림자가 10% 확률로 소모되지 않습니다.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"plPL": "Istnieje 10% szans na to, że cienie z Mrocznego Całunu nie zostaną pochłonięte.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"ptBR": "As sombras de Véu Sombrio têm 10% de chance de não serem consumidas.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"ruRU": "Тени \"Теневой завесы\" с вероятностью 10% не исчезают после принятия удара.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"zhCN": "暗影帷幕的暗影有10%几率不被消耗。\n\nTags: Subterfuge, Damage Reduction, Cooldown."
},
		id: 60,
		maxPoints: 1,
		x: 948.573,
		y: 3.039
	},
	"Countering Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `While you have at least 2 active shadows from Dark Shroud, gain +10% Critical Strike Chance.

Tags: Subterfuge, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Konternder Dunkler Schleier",
			"esES": "Embozo oscuro contrarrestante",
			"esMX": "Sudario Oscuro Contrarrestante",
			"frFR": "Sombre voile rebelle",
			"itIT": "Manto Oscuro Contrastante",
			"jaJP": "ダーク・シュラウド(逆襲)",
			"koKR": "역습하는 어둠의 장막",
			"plPL": "Kontrujący Mroczny Całun",
			"ptBR": "Véu Sombrio Replicante",
			"ruRU": "Ответная теневая завеса",
			"zhCN": "反击暗影帷幕"
},
		descriptionLocalized: {
			"deDE": "Solange Ihr mindestens 2 aktive Schatten von Dunkler Schleier habt, steigt Eure kritische Trefferchance um +10%.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"esES": "Mientras tengas al menos 2 sombras activas de Embozo oscuro, obtienes un +10% de probabilidad de golpe crítico.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"esMX": "Mientras tengas al menos 2 sombras activas de Sudario Oscuro, obtienes un +10% de probabilidad de golpe crítico.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"frFR": "Tant que Sombre voile a encore 2 ombres actives, vos chances d'infliger un coup critique sont augmentées de +10%.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"itIT": "Finché hai 2 o più ombre di Manto Oscuro attive, la tua probabilità di critico aumenta del +10%.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"jaJP": "〈ダーク・シュラウド〉による影が少なくとも2個発動している間、クリティカルヒット率が+10%上昇する。\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"koKR": "어둠의 장막의 그림자가 2개 이상 활성화되어 있을 때 극대화 확률이 +10% 증가합니다.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"plPL": "Kiedy masz aktywne cienie (co najmniej 2) z Mrocznego Całunu, zyskujesz premię +10% do szansy na trafienie krytyczne.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"ptBR": "Enquanto você tiver pelo menos 2 sombras ativas de Véu Sombrio, recebe +10% de chance de acerto crítico.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"ruRU": "Пока существует хотя бы 2 тени:теней, созданная \"Теневой завесой\", ваша вероятность критического удара повышается на +10%.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"zhCN": "暗影帷幕至少有2层激活的暗影时,暴击几率提高+10%。\n\nTags: Subterfuge, Damage Reduction, Cooldown."
},
		id: 62,
		maxPoints: 1,
		x: 1160.602,
		y: -68.416
	},
	"Subverting Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `Each active shadow from Dark Shroud grants you +3% increased Movement Speed.

Tags: Subterfuge, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Zerrüttender Dunkler Schleier",
			"esES": "Embozo oscuro subversivo",
			"esMX": "Sudario Oscuro Subversivo",
			"frFR": "Sombre voile subversif",
			"itIT": "Manto Oscuro Rivoluzionaria",
			"jaJP": "ダーク・シュラウド(逆転)",
			"koKR": "전복시키는 어둠의 장막",
			"plPL": "Obalający Mroczny Całun",
			"ptBR": "Véu Sombrio Destruidor",
			"ruRU": "Коварная теневая завеса",
			"zhCN": "颠覆暗影帷幕"
},
		descriptionLocalized: {
			"deDE": "Jeder aktive Schatten von Dunkler Schleier verleiht Euch +3% mehr Bewegungsgeschwindigkeit.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"esES": "Cada sombra activa de Embozo oscuro te otorga un +3% más de velocidad de movimiento.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"esMX": "Cada sombra activa de Sudario Oscuro te otorga un +3% más de velocidad de movimiento.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"frFR": "Chaque ombre active de Sombre voile augmente votre vitesse de déplacement de +3%.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"itIT": "Ogni ombra attiva di Manto Oscuro aumenta la tua velocità di movimento del +3%.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"jaJP": "〈ダーク・シュラウド〉によって発動している影1個につき、移動速度が+3%上昇する。\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"koKR": "어둠의 장막의 활성화된 그림자 하나당 자신의 이동 속도가 +3% 증가합니다.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"plPL": "Każdy aktywny cień z Mrocznego Całunu zapewnia ci +3% do szybkości ruchu.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"ptBR": "Cada sombra ativa de Véu Sombrio concede a você +3% de velocidade de movimento aumentada.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"ruRU": "Каждая активная тень \"Теневой завесы\" повышает скорость передвижения на +3%.\n\nTags: Subterfuge, Damage Reduction, Cooldown.",
			"zhCN": "暗影帷幕每层激活的暗影都会使你的移动速度提高+3%。\n\nTags: Subterfuge, Damage Reduction, Cooldown."
},
		id: 61,
		maxPoints: 1,
		x: 1157.68,
		y: 98.315
	},
	"Exploit": {
		connections: [ "Malice", "Subterfuge" ],
		description: `You deal x{6/12/18/24/30/36/42/48/54/60}% increased damage to Healthy and Injured enemies.

Tags: Healthy, Injured, Damage.`,
		nameLocalized: {
			"deDE": "Ausnutzen",
			"esES": "Explotar",
			"esMX": "Aprovechamiento",
			"frFR": "Exploitation",
			"itIT": "Opportunismo",
			"jaJP": "搾取",
			"koKR": "착취",
			"plPL": "Nadużycie",
			"ptBR": "Exploração",
			"ruRU": "Уловка",
			"zhCN": "利用"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt gesunden und verletzten Gegnern x{6/12/18/24/30/36/42/48/54/60}% mehr Schaden zu.\n\nTags: Healthy, Injured, Damage.",
			"esES": "Infliges un x{6/12/18/24/30/36/42/48/54/60}% más de daño a enemigos saludables y heridos.\n\nTags: Healthy, Injured, Damage.",
			"esMX": "Infliges un x{6/12/18/24/30/36/42/48/54/60}% más de daño a enemigos saludables y heridos.\n\nTags: Healthy, Injured, Damage.",
			"frFR": "Vous infligez x{6/12/18/24/30/36/42/48/54/60}% de dégâts supplémentaires aux cibles en bonne santé et aux cibles blessées.\n\nTags: Healthy, Injured, Damage.",
			"itIT": "Infliggi il x{6/12/18/24/30/36/42/48/54/60}% di danni aggiuntivi contro i nemici in salute e feriti.\n\nTags: Healthy, Injured, Damage.",
			"jaJP": "健全状態および負傷した敵に与えるダメージがx{6/12/18/24/30/36/42/48/54/60}%増加する。\n\nTags: Healthy, Injured, Damage.",
			"koKR": "건강 및 부상 상태의 적에게 주는 피해가 x{6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: Healthy, Injured, Damage.",
			"plPL": "Zadajesz obrażenia zwiększone o x{6/12/18/24/30/36/42/48/54/60}% wrogom w pełni sił i okaleczonym.\n\nTags: Healthy, Injured, Damage.",
			"ptBR": "Você causa {6/12/18/24/30/36/42/48/54/60}% de dano aumentado a inimigos saudáveis e feridos.\n\nTags: Healthy, Injured, Damage.",
			"ruRU": "Вы наносите на x{6/12/18/24/30/36/42/48/54/60}% больше урона противникам с высоким и низким уровнем здоровья.\n\nTags: Healthy, Injured, Damage.",
			"zhCN": "你对健康和受伤的敌人造成的伤害提高x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: Healthy, Injured, Damage."
},
		id: 68,
		maxPoints: 3,
		x: 1.475,
		y: 280.736
	},
	"Malice": {
		connections: [ "Exploit" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Vulnerable enemies.

Tags: Vulnerable, Damage.`,
		nameLocalized: {
			"deDE": "Bösartigkeit",
			"esES": "Malicia",
			"esMX": "Malicia",
			"frFR": "Malveillance",
			"itIT": "Malizia",
			"jaJP": "悪意",
			"koKR": "악의",
			"plPL": "Złośliwość",
			"ptBR": "Malícia",
			"ruRU": "Злоба",
			"zhCN": "恶意"
},
		descriptionLocalized: {
			"deDE": "Ihr verursacht x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden gegen verwundbare Gegner.\n\nTags: Vulnerable, Damage.",
			"esES": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a enemigos vulnerables.\n\nTags: Vulnerable, Damage.",
			"esMX": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a los enemigos vulnerables.\n\nTags: Vulnerable, Damage.",
			"frFR": "Vous infligez x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires aux adversaires vulnérables.\n\nTags: Vulnerable, Damage.",
			"itIT": "Infliggi il x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi ai nemici vulnerabili.\n\nTags: Vulnerable, Damage.",
			"jaJP": "脆弱状態の敵に与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: Vulnerable, Damage.",
			"koKR": "취약한 적에게 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: Vulnerable, Damage.",
			"plPL": "Zadajesz obrażenia zwiększone o x{3/6/9/12/15/18/21/24/27/30}% odsłoniętym wrogom.\n\nTags: Vulnerable, Damage.",
			"ptBR": "Você causa {3/6/9/12/15/18/21/24/27/30}% de dano aumentado a inimigos vulneráveis.\n\nTags: Vulnerable, Damage.",
			"ruRU": "Вы наносите на x{3/6/9/12/15/18/21/24/27/30}% больше урона уязвимым противникам.\n\nTags: Vulnerable, Damage.",
			"zhCN": "你对处于易伤状态的敌人造成的伤害提高x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: Vulnerable, Damage."
},
		id: 69,
		maxPoints: 3,
		x: 0.765,
		y: 481.536
	},
	"Agile": {
		connections: [ "Subterfuge", "Mending Obscurity" ],
		description: `Using a Cooldown increases your Dodge Chance by {3/6/9/12/15/18/21/24/27/30}% for 2 seconds.

Tags: Dodge, Cooldown.`,
		nameLocalized: {
			"deDE": "Agil",
			"esES": "Ágil",
			"esMX": "Ágil",
			"frFR": "Agilité",
			"itIT": "Agilità",
			"jaJP": "機敏",
			"koKR": "날렵함",
			"plPL": "Zwinność",
			"ptBR": "Ágil",
			"ruRU": "Изворотливость",
			"zhCN": "灵动"
},
		descriptionLocalized: {
			"deDE": "Bei der Nutzung einer Abklingzeit erhöht sich Eure Ausweichchance 2 Sek. lang um {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Dodge, Cooldown.",
			"esES": "Usar un tiempo de reutilización aumenta tu probabilidad de esquivar un {3/6/9/12/15/18/21/24/27/30}% durante 2 s.\n\nTags: Dodge, Cooldown.",
			"esMX": "Usar una habilidad con recuperación aumenta tu probabilidad de esquivar un {3/6/9/12/15/18/21/24/27/30}% durante 2 segundos.\n\nTags: Dodge, Cooldown.",
			"frFR": "Utiliser une compétence avec temps de recharge augmente vos chances d'esquiver de {3/6/9/12/15/18/21/24/27/30}% pendant 2 s.\n\nTags: Dodge, Cooldown.",
			"itIT": "Lanciare un'abilità con tempo di recupero aumenta la tua probabilità di schivata del {3/6/9/12/15/18/21/24/27/30}% per 2 s.\n\nTags: Dodge, Cooldown.",
			"jaJP": "クールダウンを使用すると、回避率が2秒間にわたり{3/6/9/12/15/18/21/24/27/30}%上昇する。\n\nTags: Dodge, Cooldown.",
			"koKR": "재사용 대기시간이 있는 기술을 사용하면 2초 동안 회피 확률이 {3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: Dodge, Cooldown.",
			"plPL": "Użycie umiejętności z czasem odnowienia zwiększa twoją szansę na unik o {3/6/9/12/15/18/21/24/27/30}% na 2 sek.\n\nTags: Dodge, Cooldown.",
			"ptBR": "Usar uma recarga aumenta sua chance de esquiva em {3/6/9/12/15/18/21/24/27/30}% por 2 segundos.\n\nTags: Dodge, Cooldown.",
			"ruRU": "Когда вы применяете умение с временем восстановления, ваша вероятность уклонения повышается на {3/6/9/12/15/18/21/24/27/30}% на 2 сек.\n\nTags: Dodge, Cooldown.",
			"zhCN": "使用一个冷却技能会使你的躲闪几率提高{3/6/9/12/15/18/21/24/27/30}%,持续2秒。\n\nTags: Dodge, Cooldown."
},
		id: 67,
		maxPoints: 3,
		x: 0.75,
		y: -269.039
	},
	"Mending Obscurity": {
		connections: [ "Agile" ],
		description: `While Stealthed, you Heal for {1/2/3/4/5/6/7/8/9/10}% Maximum Life per second.

Tags: Stealth, Healing.`,
		nameLocalized: {
			"deDE": "Lindernde Dunkelheit",
			"esES": "Oscuridad reparadora",
			"esMX": "Oscuridad Reparadora",
			"frFR": "Obscurité réparatrice",
			"itIT": "Oscurità Curativa",
			"jaJP": "忍び治療",
			"koKR": "회복의 어스름",
			"plPL": "Leczące Zaciemnienie",
			"ptBR": "Reparação Obscura",
			"ruRU": "Целительная пелена",
			"zhCN": "晦暗疗愈"
},
		descriptionLocalized: {
			"deDE": "Während Ihr verstohlen seid, werdet Ihr pro Sekunde um {1/2/3/4/5/6/7/8/9/10}% Eures maximalen Lebens geheilt.\n\nTags: Stealth, Healing.",
			"esES": "Mientras estás en sigilo, te curas un {1/2/3/4/5/6/7/8/9/10}% de tu vida máxima por segundo.\n\nTags: Stealth, Healing.",
			"esMX": "Mientras tengas Sigilo, te sanas por un {1/2/3/4/5/6/7/8/9/10}% de tu vida máxima por segundo.\n\nTags: Stealth, Healing.",
			"frFR": "En Camouflage, vous récupérez {1/2/3/4/5/6/7/8/9/10}% de votre maximum de points de vie par seconde.\n\nTags: Stealth, Healing.",
			"itIT": "Mentre sei in modalità furtiva, ti curi del {1/2/3/4/5/6/7/8/9/10}% della tua Vita massima ogni secondo.\n\nTags: Stealth, Healing.",
			"jaJP": "隠密中、ライフが毎秒最大値の{1/2/3/4/5/6/7/8/9/10}%にあたる回復する。\n\nTags: Stealth, Healing.",
			"koKR": "은폐 상태에서 초당 최대 생명력의 {1/2/3/4/5/6/7/8/9/10}%만큼 생명력을 회복합니다.\n\nTags: Stealth, Healing.",
			"plPL": "Podczas trwania ukrycia przywracasz sobie {1/2/3/4/5/6/7/8/9/10}% maksymalnego zdrowia na sekundę.\n\nTags: Stealth, Healing.",
			"ptBR": "Enquanto você estiver em furtividade, você cura {1/2/3/4/5/6/7/8/9/10}% da vida máxima por segundo.\n\nTags: Stealth, Healing.",
			"ruRU": "В состоянии незаметности вы восполняете {1/2/3/4/5/6/7/8/9/10}% максимального запаса здоровья в секунду.\n\nTags: Stealth, Healing.",
			"zhCN": "在潜行状态下,你每秒恢复{1/2/3/4/5/6/7/8/9/10}%生命上限。\n\nTags: Stealth, Healing."
},
		id: 145,
		maxPoints: 3,
		x: 4.7,
		y: -479.249
	},
};

rogueData["Imbuements"] = {
	"Deadly Venom": {
		connections: [ "Alchemical Advantage", "Debilitating Toxins", "Imbuements" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased Poisoning damage.

Tags: Damage, Poison.`,
		nameLocalized: {
			"deDE": "Tödliches Gift",
			"esES": "Veneno mortífero",
			"esMX": "Veneno Letal",
			"frFR": "Venin mortel",
			"itIT": "Veleno Letale",
			"jaJP": "死を誘う毒",
			"koKR": "치명적인 맹독",
			"plPL": "Zabójczy Jad",
			"ptBR": "Veneno Mortal",
			"ruRU": "Смертельный яд",
			"zhCN": "致命剧毒"
},
		descriptionLocalized: {
			"deDE": "Ihr verursacht x{3/6/9/12/15/18/21/24/27/30}% mehr Giftschaden.\n\nTags: Damage, Poison.",
			"esES": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño de veneno.\n\nTags: Damage, Poison.",
			"esMX": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño de veneno.\n\nTags: Damage, Poison.",
			"frFR": "Vous infligez x{3/6/9/12/15/18/21/24/27/30}% de dégâts de poison supplémentaires.\n\nTags: Damage, Poison.",
			"itIT": "Infliggi il x{3/6/9/12/15/18/21/24/27/30}% di danni da veleno aggiuntivi.\n\nTags: Damage, Poison.",
			"jaJP": "敵に毒で与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: Damage, Poison.",
			"koKR": "주는 중독 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: Damage, Poison.",
			"plPL": "Zadajesz obrażenia od Trucizny zwiększone o x{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Damage, Poison.",
			"ptBR": "Você causa {3/6/9/12/15/18/21/24/27/30}% de dano venenoso aumentado.\n\nTags: Damage, Poison.",
			"ruRU": "Вы наносите на x{3/6/9/12/15/18/21/24/27/30}% больше урона от отравления.\n\nTags: Damage, Poison.",
			"zhCN": "你造成的毒素伤害提高x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: Damage, Poison."
},
		id: 78,
		maxPoints: 3,
		x: 498.16,
		y: 90.21
	},
	"Alchemical Advantage": {
		connections: [ "Deadly Venom" ],
		description: `You gain +{1/2/3/4/5/6/7/8/9/10}% increased Attack Speed for each enemy you've Poisoned, up to +15%.

Tags: Poison, Attack Speed.`,
		nameLocalized: {
			"deDE": "Alchemistischer Vorteil",
			"esES": "Ventaja alquímica",
			"esMX": "Ventaja Alquímica",
			"frFR": "Avantage alchimique",
			"itIT": "Vantaggio Alchemico",
			"jaJP": "錬金術の恩恵",
			"koKR": "연금술의 우위",
			"plPL": "Przewaga Alchemiczna",
			"ptBR": "Vantagem Alquímica",
			"ruRU": "Польза алхимии",
			"zhCN": "炼金优势"
},
		descriptionLocalized: {
			"deDE": "Für jeden von Euch vergifteten Gegner erhaltet Ihr +{1/2/3/4/5/6/7/8/9/10}% mehr Angriffsgeschwindigkeit, bis maximal +15%.\n\nTags: Poison, Attack Speed.",
			"esES": "Obtienes un +{1/2/3/4/5/6/7/8/9/10}% más de velocidad de ataque por cada enemigo al que hayas envenenado, hasta un máximo de un +15%.\n\nTags: Poison, Attack Speed.",
			"esMX": "Obtienes un +{1/2/3/4/5/6/7/8/9/10}% más de velocidad de ataque por cada enemigo envenenado, hasta un máximo del +15%.\n\nTags: Poison, Attack Speed.",
			"frFR": "Votre vitesse d'attaque est augmentée de +{1/2/3/4/5/6/7/8/9/10}% pour chaque cible que vous avez empoisonnée, jusqu'à un maximum de +15%.\n\nTags: Poison, Attack Speed.",
			"itIT": "La tua velocità d'attacco aumenta del +{1/2/3/4/5/6/7/8/9/10}% per ogni nemico che hai avvelenato, fino a un massimo del +15%.\n\nTags: Poison, Attack Speed.",
			"jaJP": "敵を1体毒でおかすたびに攻撃速度が+{1/2/3/4/5/6/7/8/9/10}%増加する。増加量は最大+15%。\n\nTags: Poison, Attack Speed.",
			"koKR": "중독시킨 적 하나당 공격 속도가 +{1/2/3/4/5/6/7/8/9/10}%만큼, 최대 +15%까지 증가합니다.\n\nTags: Poison, Attack Speed.",
			"plPL": "Zyskujesz premię +{1/2/3/4/5/6/7/8/9/10}% do szybkości ataku za każdego zatrutego przez ciebie wroga, maksymalnie do +15%.\n\nTags: Poison, Attack Speed.",
			"ptBR": "Você recebe +{1/2/3/4/5/6/7/8/9/10}% de velocidade de ataque aumentada por cada inimigo que envenenou, até +15%.\n\nTags: Poison, Attack Speed.",
			"ruRU": "Ваша скорость атаки повышается на +{1/2/3/4/5/6/7/8/9/10}% за каждого отравленного противника, вплоть до +15%.\n\nTags: Poison, Attack Speed.",
			"zhCN": "你每使一名敌人中毒,你的攻击速度就会提高+{1/2/3/4/5/6/7/8/9/10}%,最多提高+15%。\n\nTags: Poison, Attack Speed."
},
		id: 79,
		maxPoints: 3,
		x: 776.575,
		y: 174.9
	},
	"Debilitating Toxins": {
		connections: [ "Deadly Venom" ],
		description: `Poisoned enemies deal {5/10/15/20/25/30/35/40/45/50}% less damage.

Tags: Poison, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Schwächende Toxine",
			"esES": "Toxinas debilitantes",
			"esMX": "Toxinas Debilitantes",
			"frFR": "Toxines incapacitantes",
			"itIT": "Tossine Debilitanti",
			"jaJP": "弱体の毒物",
			"koKR": "쇠약의 독소",
			"plPL": "Obezwładniające Toksyny",
			"ptBR": "Toxinas Debilitantes",
			"ruRU": "Изнуряющие яды",
			"zhCN": "衰弱毒素"
},
		descriptionLocalized: {
			"deDE": "Vergiftete Gegner verursachen {5/10/15/20/25/30/35/40/45/50}% weniger Schaden.\n\nTags: Poison, Damage Reduction.",
			"esES": "Los enemigos envenenados infligen un {5/10/15/20/25/30/35/40/45/50}% menos de daño.\n\nTags: Poison, Damage Reduction.",
			"esMX": "Los enemigos envenenados infligen un {5/10/15/20/25/30/35/40/45/50}% menos de daño.\n\nTags: Poison, Damage Reduction.",
			"frFR": "Les cibles empoisonnées infligent {5/10/15/20/25/30/35/40/45/50}% de dégâts en moins.\n\nTags: Poison, Damage Reduction.",
			"itIT": "I nemici avvelenati infliggono il {5/10/15/20/25/30/35/40/45/50}% di danni in meno.\n\nTags: Poison, Damage Reduction.",
			"jaJP": "毒状態の敵から受けるダメージが{5/10/15/20/25/30/35/40/45/50}%減少する。\n\nTags: Poison, Damage Reduction.",
			"koKR": "중독된 적이 주는 피해가 {5/10/15/20/25/30/35/40/45/50}% 감소합니다.\n\nTags: Poison, Damage Reduction.",
			"plPL": "Zatruci wrogowie zadają obrażenia zmniejszone o {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Poison, Damage Reduction.",
			"ptBR": "Inimigos envenenados causam {5/10/15/20/25/30/35/40/45/50}% de dano reduzido.\n\nTags: Poison, Damage Reduction.",
			"ruRU": "Отравленные противники наносят на {5/10/15/20/25/30/35/40/45/50}% меньше урона.\n\nTags: Poison, Damage Reduction.",
			"zhCN": "中毒的敌人造成的伤害降低{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: Poison, Damage Reduction."
},
		id: 80,
		maxPoints: 3,
		x: 776.715,
		y: 4.865
	},
	"Poison Imbuement": {
		connections: [ "Enhanced Poison Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Imbue your weapons with lethal poison. Your next 2 Imbueable Skills deal Poison damage and apply {70/77/84/91/98/105/112/119/126/133}% of their Base damage as additional Poisoning damage over 5 seconds.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Giftinfusion",
			"esES": "Imbuición de veneno",
			"esMX": "Imbuición Venenosa",
			"frFR": "Imprégnation de poison",
			"itIT": "Infusione del Veleno",
			"jaJP": "毒注入",
			"koKR": "독 주입",
			"plPL": "Nasycenie Trucizną",
			"ptBR": "Imbuição de Veneno",
			"ruRU": "Насыщение ядом",
			"zhCN": "毒素灌注"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nErfüllt Eure Waffen mit tödlichem Gift. Eure nächsten 2 infusionsfähigen Fertigkeiten verursachen Giftschaden und fügen zusätzliche {70/77/84/91/98/105/112/119/126/133}% ihres Basisschadens im Verlauf von 5 Sek. als Giftschaden zu.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nImbuyes tus armas de veneno letal. Tus 2 siguientes habilidades imbuibles infligen daño de veneno y aplican un {70/77/84/91/98/105/112/119/126/133}% de su daño base como daño de veneno adicional durante 5 s.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nImbuyes tus armas con veneno letal. Tus próximas 2 habilidades imbuibles infligen daño de veneno y aplican un {70/77/84/91/98/105/112/119/126/133}% de su daño de base como daño de veneno adicional durante 5 segundos.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVous imprégnez vos armes d'un poison mortel. Vos 2 prochaines compétences imprégnables infligent des dégâts de poison et appliquent {70/77/84/91/98/105/112/119/126/133}% de leurs dégâts de base sous forme de dégâts de poison supplémentaires en 5 s.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nInfondi le tue armi con veleno letale. Le prossime 2 volte che utilizzerai delle abilità d'infusione infliggerai danni da veleno e il {70/77/84/91/98/105/112/119/126/133}% dei relativi danni base sotto forma di danni da veleno aggiuntivi per 5 s.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n武器に猛毒を注入する。次の2回の注入対応 スキルは毒ダメージを与え、さらに5秒かけて基礎ダメージの{70/77/84/91/98/105/112/119/126/133}%の毒ダメージを追加で与える。\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n무기에 치명적인 독을 주입합니다. 다음 2번의 주입 기술이 독 피해를 주고 5초에 걸쳐 기본 공격력의 {70/77/84/91/98/105/112/119/126/133}%에 해당하는 중독 피해를 추가로 부여합니다.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nNasycasz swoją broń śmiercionośną trucizną. Twoje następne 2 Nasycalne umiejętności zadają obrażenia od Trucizny oraz dodatkowo {70/77/84/91/98/105/112/119/126/133}% swoich obrażeń podstawowych w postaci obrażeń od zatrucia w ciągu 5 sek.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nImbui suas armas com veneno letal. Suas próximas 2 habilidades Imbuíveis causam dano venenoso e aplicam {70/77/84/91/98/105/112/119/126/133}% do dano-base como dano venenoso adicional ao longo de 5 segundos.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы насыщаете оружие смертоносным ядом. Атаки 2 следующих насыщаемых умений наносят урон от яда и дополнительно отравляют цели, нанося {70/77/84/91/98/105/112/119/126/133}% базового урона за 5 сек.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n用致命毒素灌注你的武器。你的下2次灌注技能造成毒素伤害并在5秒内额外造成{70/77/84/91/98/105/112/119/126/133}%的基础伤害(作为毒素伤害)。\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable."
},
		id: 128,
		maxPoints: 5,
		values: [ "9", "33" ],
		x: 500.35,
		y: -114.65
	},
	"Enhanced Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Poison Imbuement", "Mixed Poison Imbuement", "Blended Poison Imbuement" ],
		description: `Poison Imbuement's Poisoning Duration is increased by 1 second.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Verbesserte Giftinfusion",
			"esES": "Imbuición de veneno mejorada",
			"esMX": "Imbuición Venenosa Potenciada",
			"frFR": "Imprégnation de poison renforcée",
			"itIT": "Infusione del Veleno Rinforzata",
			"jaJP": "毒注入(強化版)",
			"koKR": "강화된 독 주입",
			"plPL": "Wzmocnione Nasycenie Trucizną",
			"ptBR": "Imbuição de Veneno Aperfeiçoada",
			"ruRU": "Усиленное насыщение ядом",
			"zhCN": "强化毒素灌注"
},
		descriptionLocalized: {
			"deDE": "Die Giftdauer von Giftinfusion wird um 1 Sek. erhöht.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"esES": "La duración del veneno de Imbuición de veneno aumenta 1 s.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"esMX": "La duración del veneno de Imbuición Venenosa aumenta 1 segundo.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"frFR": "La durée d'empoisonnement de l'imprégnation de poison augmente de 1 s.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"itIT": "La durata del veleno di Infusione di Veleno aumenta di 1 s.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"jaJP": "毒注入の毒の持続時間が1秒伸びる。\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"koKR": "독 주입의 중독 지속시간이 1초 증가합니다.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"plPL": "Czas trwania zatrucia wywołanego przez nasycenie Trucizną jest wydłużony o 1.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"ptBR": "A duração do veneno de Imbuição de Veneno é aumentada em 1 segundo.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"ruRU": "Время действия эффекта отравления от \"Насыщения ядом\" увеличивается на 1 сек.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"zhCN": "毒素灌注的中毒持续时间延长1秒。\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable."
},
		id: 129,
		maxPoints: 1,
		x: 882.88,
		y: -208.685
	},
	"Mixed Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Lucky Hit: Poison Imbued Skills have up to a 30% chance to apply double the amount of Poisoning damage over time.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Gemischte Giftinfusion",
			"esES": "Imbuición de veneno combinada",
			"esMX": "Imbuición Venenosa Mezclada",
			"frFR": "Imprégnation de poison mixte",
			"itIT": "Infusione del Veleno Mista",
			"jaJP": "毒注入(混合)",
			"koKR": "뒤섞은 독 주입",
			"plPL": "Wymieszane Nasycenie Trucizną",
			"ptBR": "Imbuição de Veneno Misturada",
			"ruRU": "Смешанное насыщение ядом",
			"zhCN": "混合毒素灌注"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Fertigkeiten mit Giftinfusion verfügen über eine Chance von 30%, über Zeit die doppelte Menge an Giftschaden zu verursachen.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"esES": "Golpe de suerte: Tus habilidades imbuidas de veneno tienen hasta un 30% de probabilidad de aplicar el doble de daño de veneno en el tiempo.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"esMX": "Golpe afortunado: Las habilidades de Imbuición Venenosa tienen hasta un 30% de probabilidad de duplicar la cantidad de daño de veneno con el tiempo.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"frFR": "Coup de chance : les compétences imprégnées de poison ont jusqu'à 30% de chances d'appliquer le double de dégâts de poison sur la durée.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"itIT": "Colpo fortunato: le abilità infuse di veleno hanno fino al 30% di probabilità di infliggere il doppio dei danni da veleno periodici.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"jaJP": "幸運の一撃: 毒合成スキルが最大30%の確率で、時間経過と共に毒ダメージ量を二倍にする。\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"koKR": "행운의 적중: 독 주입 기술이 최대 30% 확률로 지속 중독 피해를 두 배로 적용합니다.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"plPL": "Szczęśliwy traf: Umiejętności nasycone Trucizną mają 30% szans na nałożenie podwójnych obrażeń od zatrucia wraz z upływem czasu.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"ptBR": "Golpe de Sorte: Habilidades de Imbuição de Veneno têm até 30% de chance de aplicar o dobro de dano venenoso ao longo do tempo.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"ruRU": "Удачный удар: навыки, насыщенные ядом, с вероятностью до 30% наносят двойной периодический урон от отравления.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"zhCN": "幸运一击:毒素灌注技能最多有30%几率使持续性毒素伤害翻倍。\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable."
},
		id: 130,
		maxPoints: 1,
		x: 1140.45,
		y: -189.88
	},
	"Blended Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Critical Strikes with Poison Imbued Skills deal x30% increased Poisoning damage.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Vermengte Giftinfusion",
			"esES": "Imbuición de veneno mezclada",
			"esMX": "Imbuición Venenosa Combinada",
			"frFR": "Imprégnation de poison composite",
			"itIT": "Infusione del Veleno Miscelata",
			"jaJP": "毒注入(融合)",
			"koKR": "혼합 독 주입",
			"plPL": "Złączone Nasycenie Trucizną",
			"ptBR": "Imbuição de Veneno Mesclada",
			"ruRU": "Сопряженное насыщение ядом",
			"zhCN": "交融毒素灌注"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Fertigkeiten mit Giftinfusion verursachen x30% mehr Giftschaden.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"esES": "Los golpes críticos con habilidades imbuidas de veneno infligen un x30% más de daño de veneno.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"esMX": "Los golpes críticos con habilidades de Imbuición Venenosa infligen un x30% más de daño de veneno.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"frFR": "Les coups critiques portés avec des compétences imprégnées de poison infligent x30% de dégâts de poison supplémentaires.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"itIT": "Infliggere colpi critici con abilità infuse di veleno infligge il x30% di danni da veleno aggiuntivi.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"jaJP": "毒注入状態のスキルのクリティカルで与える毒ダメージがx30%増加する。\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"koKR": "독 주입 기술이 극대화로 적중하면 주는 중독 피해가 x30% 증가합니다.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"plPL": "Trafienia krytyczne umiejętnościami nasyconymi Trucizną zadają x30% zwiększone obrażenia od zatrucia.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"ptBR": "Acertos críticos com habilidades de Imbuição de Veneno causam 30% de dano venenoso aumentado.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"ruRU": "Критические удары навыков, насыщенных ядом, наносят на x30% больше урона от отравления.\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable.",
			"zhCN": "使用毒素灌注技能暴击时造成的毒素伤害提高x30%。\n\nTags: Imbuement, Damage, Poison, Cooldown, Imbueable."
},
		id: 131,
		maxPoints: 1,
		x: 969.07,
		y: -338.106
	},
	"Shadow Crash": {
		connections: [ "Consuming Shadows", "Imbuements" ],
		description: `Lucky Hit: Shadow damage has up to a 10% chance to Stun for {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds.

Tags: Crowd Control, Shadow, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Schattensturz",
			"esES": "Choque tenebroso",
			"esMX": "Fragor de Sombra",
			"frFR": "Déferlante d'ombre",
			"itIT": "Schianto d'Ombra",
			"jaJP": "シャドウ・クラッシュ",
			"koKR": "그림자 붕괴",
			"plPL": "Zderzenie Cienia",
			"ptBR": "Colisão de Sombras",
			"ruRU": "Теневое сокрушение",
			"zhCN": "暗影压制"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Schattenschaden verfügt über eine Chance von bis zu 10 %, Gegner {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} Sek. lang zu betäuben.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"esES": "Golpe de suerte: El daño de sombra tiene hasta un 10% de probabilidad de aturdir durante {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"esMX": "Golpe afortunado: El daño de sombra tiene hasta un 10% de probabilidad de aturdir durante {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"frFR": "Coup de chance : vos dégâts d'ombre ont jusqu'à 10% de chances d'étourdir les adversaires pendant {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"itIT": "Colpo fortunato: i danni da ombra hanno fino al 10% di probabilità di stordire per {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"jaJP": "幸運の一撃:シャドウダメージが、最大10%の確率で敵を{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒間スタンさせる。\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"koKR": "행운의 적중:암흑 피해가 최대 10% 확률로 적을 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}초 동안 기절시킵니다.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"plPL": "Szczęśliwy traf: Obrażenia Cienia mają do 10% szans na ogłuszenie wroga na {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} sek.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"ptBR": "Golpe de Sorte: Dano de sombra tem até 10% de chance de atordoar por {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"ruRU": "Удачный удар: урон от темной магии с вероятностью до 10% оглушает цель на {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} сек.\n\nTags: Crowd Control, Shadow, Lucky Hit.",
			"zhCN": "幸运一击:暗影伤害最多有10%几率使敌人昏迷{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒。\n\nTags: Crowd Control, Shadow, Lucky Hit."
},
		id: 85,
		maxPoints: 3,
		x: -165.624,
		y: -327.788
	},
	"Consuming Shadows": {
		connections: [ "Shadow Crash" ],
		description: `Each time you kill an enemy with Shadow Damage, you generate {10/20/30/40/50/60/70/80/90/100} Energy.

Tags: Shadow, Energy.`,
		nameLocalized: {
			"deDE": "Verschlingende Schatten",
			"esES": "Sombras consumidoras",
			"esMX": "Sombras Acuciantes",
			"frFR": "Ombres brûlantes",
			"itIT": "Ombre Logoranti",
			"jaJP": "貪る影",
			"koKR": "흡수의 어둠",
			"plPL": "Pożerające Cienie",
			"ptBR": "Sombras Debilitantes",
			"ruRU": "Поглощающие теней",
			"zhCN": "吞噬之影"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Ihr einen Gegner mit Schattenschaden tötet, erzeugt Ihr {10/20/30/40/50/60/70/80/90/100} Energie.\n\nTags: Shadow, Energy.",
			"esES": "Cada vez que matas a un enemigo con daño de sombra, generas {10/20/30/40/50/60/70/80/90/100} de energía.\n\nTags: Shadow, Energy.",
			"esMX": "Cada vez que eliminas a un enemigo con daño de sombra, generas {10/20/30/40/50/60/70/80/90/100} de energía.\n\nTags: Shadow, Energy.",
			"frFR": "Chaque fois que vous tuez une cible avec des dégâts d'ombre, vous générez {10/20/30/40/50/60/70/80/90/100} points d'énergie.\n\nTags: Shadow, Energy.",
			"itIT": "Ogni volta che uccidi un nemico con danni da ombra, generi {10/20/30/40/50/60/70/80/90/100} energia.\n\nTags: Shadow, Energy.",
			"jaJP": "シャドウダメージで敵を1体倒すたび、エネルギーが{10/20/30/40/50/60/70/80/90/100}回復する。\n\nTags: Shadow, Energy.",
			"koKR": "암흑 피해로 적을 처치할 때마다 기력을 {10/20/30/40/50/60/70/80/90/100} 생성합니다.\n\nTags: Shadow, Energy.",
			"plPL": "Za każdego wroga zabitego przy pomocy obrażeń od cienia generujesz {10/20/30/40/50/60/70/80/90/100} pkt. energii.\n\nTags: Shadow, Energy.",
			"ptBR": "Cada vez que você mata um inimigo com fano de sombra, você gera {10/20/30/40/50/60/70/80/90/100} de energia.\n\nTags: Shadow, Energy.",
			"ruRU": "Когда вы убиваете противника уроном от темной магии, вы накапливаете {10/20/30/40/50/60/70/80/90/100} ед. энергии.\n\nTags: Shadow, Energy.",
			"zhCN": "每当你使用暗影伤害消灭敌人,产生{10/20/30/40/50/60/70/80/90/100}点能量。\n\nTags: Shadow, Energy."
},
		id: 86,
		maxPoints: 3,
		x: -163.933,
		y: -493.045
	},
	"Shadow Imbuement": {
		connections: [ "Enhanced Shadow Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Imbue your weapons with festering shadows. Your next 2 Imbueable Skills deal Shadow damage and infect enemies for 6 seconds. Infected enemies explode on death, dealing {40/44/48/52/56/60/64/68/72/76}% damage to all surrounding enemies.

If the infection expires before the enemy dies, it will deal {40/44/48/52/56/60/64/68/72/76}% damage to only that enemy.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Schatteninfusion",
			"esES": "Imbuición de sombra",
			"esMX": "Imbuición Umbría",
			"frFR": "Imprégnation d'ombre",
			"itIT": "Infusione dell'Ombra",
			"jaJP": "シャドウ注入",
			"koKR": "암흑 주입",
			"plPL": "Nasycenie Cieniem",
			"ptBR": "Imbuição de Sombra",
			"ruRU": "Насыщение тенью",
			"zhCN": "暗影灌注"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nErfüllt Eure Waffen mit schwärenden Schatten. Eure nächsten 2 infusionsfähigen Fertigkeiten verursachen Schattenschaden und infizieren Gegner 6 Sek. lang. Infizierte Gegner explodieren beim Tod und fügen allen Gegnern in der Nähe {40/44/48/52/56/60/64/68/72/76}% Schaden zu.\n\nWenn die Infektion vor dem Tod des Gegners abläuft, fügt sie nur diesem Gegner {40/44/48/52/56/60/64/68/72/76}% Schaden zu.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nImbuyes tus armas de sombras infectas. Tus 2 siguientes habilidades imbuibles infligen daño de sombra e infectan a los enemigos durante 6 s. Los enemigos infectados explotan al morir e infligen {40/44/48/52/56/60/64/68/72/76}% de daño a todos los enemigos cercanos.\n\nSi la infección termina antes de que el enemigo muera, infligirá {40/44/48/52/56/60/64/68/72/76}% de daño solo a ese enemigo.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nImbuyes tus armas con sombras purulentas. Tus siguientes 2 habilidades imbuibles infligen daño de sombra e infectan a los enemigos durante 6 segundos. Los enemigos infectados explotan el morir e infligen {40/44/48/52/56/60/64/68/72/76}% de daño a todos los enemigos circundantes.\n\nSi la infección caduca antes de que el enemigo muera, infligirá {40/44/48/52/56/60/64/68/72/76}% de daño solo a ese enemigo.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVous imprégnez vos armes d'ombres purulentes. Vos 2 prochaines compétences imprégnables infligent des dégâts d'ombre et infectent les cibles pendant 6 s. Les cibles infectées explosent en mourant, ce qui inflige {40/44/48/52/56/60/64/68/72/76}% points de dégâts à l'ensemble des adversaires à proximité.\n\nSi l'infection expire avant la mort d'une cible, elle sera la seule à subir {40/44/48/52/56/60/64/68/72/76}% points de dégâts.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nInfondi le tue armi con ombre putrescenti. Le prossime 2 volte che utilizzerai delle abilità d'infusione infliggerai danni da ombra e infetterai i nemici per 6 s. I nemici infettati esplodono alla morte, infliggendo {40/44/48/52/56/60/64/68/72/76}% danni a tutti i nemici vicini.\n\nSe l'infezione si esaurisce prima della morte del nemico, infligge {40/44/48/52/56/60/64/68/72/76}% danni solamente a quel nemico.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n武器に腐敗をもたらす闇を注入する。次の2回の注入対応スキルはシャドウダメージを与え、さらに6秒間にわたり敵を闇に感染させる。感染した敵は死亡時に爆発し、周囲にいるすべての敵に{40/44/48/52/56/60/64/68/72/76}%のダメージを与える。\n\n敵が死亡する前に感染が終了すると、その敵のみに{40/44/48/52/56/60/64/68/72/76}%のダメージを与える。\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n무기에 부패한 암흑을 주입합니다. 다음 2번의 주입 기술이 암흑 피해를 주고 적을 6초 동안 감염시킵니다. 감염된 적은 사망 시 폭발하여 주변 적들에게 {40/44/48/52/56/60/64/68/72/76}%의 피해를 잡니다.\n\n적이 죽기 전에 감염이 만료되면, 해당 적에게만 {40/44/48/52/56/60/64/68/72/76}%의 피해를 줍니다.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nNasycasz swoją broń jątrzącymi cieniami. Twoje następne (2) Nasycalne umiejętności zadają obrażenia Cienia i zakażają wrogów na 6 sek. Zakażeni wrogowie po śmierci wybuchają, zadając {40/44/48/52/56/60/64/68/72/76}% pkt. obrażeń wszystkim pobliskim celom.\n\nJeśli zakażenie dobiegnie końca, zanim wróg zginie, zada {40/44/48/52/56/60/64/68/72/76}% pkt. obrażeń tylko temu wrogowi.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nImbui suas armas com sombras pútridas. Suas próximas 2 habilidades Imbuíveis causam dano de sombra e infectam inimigos por 6 segundos. Inimigos infectados explodem ao morrer, causando {40/44/48/52/56/60/64/68/72/76}% de dano a todos os inimigos ao redor.\n\nSe a infecção expirar antes de o inimigo morrer, causará {40/44/48/52/56/60/64/68/72/76}% de dano somente a esse inimigo.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы насыщаете оружие тлетворной силой тени. Атаки 2 следующих насыщаемых умений наносят урон от темной магии и заражают противников на 6 сек.\nЗараженные противники взрываются после смерти, нанося {40/44/48/52/56/60/64/68/72/76}% ед. урона окружающим противникам.\n\nЕсли действие заражения заканчивается до смерти противника, он получает {40/44/48/52/56/60/64/68/72/76}% ед. урона.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n使用溃烂的暗影能量灌注你的武器。你接下来的2个 可灌注技能造成暗影伤害并感染敌人6秒。被感染的敌人死亡时爆炸,对周围所有敌人造成{40/44/48/52/56/60/64/68/72/76}%点伤害。\n\n如果感染在敌人死亡前结束,它只会对那一名敌人造成{40/44/48/52/56/60/64/68/72/76}%点伤害。\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable."
},
		id: 132,
		maxPoints: 5,
		values: [ "9", "33" ],
		x: 221.62,
		y: -249.835
	},
	"Enhanced Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Shadow Imbuement", "Mixed Shadow Imbuement", "Blended Shadow Imbuement" ],
		description: `You have +25% increased Critical Strike Chance against Injured enemies infected by Shadow Imbuement.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Verbesserte Schatteninfusion",
			"esES": "Imbuición de sombra mejorada",
			"esMX": "Imbuición Umbría Potenciada",
			"frFR": "Imprégnation d'ombre renforcée",
			"itIT": "Infusione dell'Ombra Rinforzata",
			"jaJP": "シャドウ注入(強化版)",
			"koKR": "강화된 암흑 주입",
			"plPL": "Wzmocnione Nasycenie Cieniem",
			"ptBR": "Imbuição de Sombra Aperfeiçoada",
			"ruRU": "Усиленное насыщение тенью",
			"zhCN": "强化暗影灌注"
},
		descriptionLocalized: {
			"deDE": "Ihr habt eine +25% höhere kritische Trefferchance gegen verwundete Gegner, die von Schatteninfusion infiziert sind.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"esES": "Tienes un +25% más de probabilidad de golpe crítico contra enemigos heridos infectados por Imbuición de sombra.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"esMX": "Tienes un +25% más de probabilidad de golpe crítico contra enemigos heridos infectados por Imbuición Umbría.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"frFR": "Vos chances d'infliger un coup critique aux cibles blessées infectées par l'imprégnation d'ombre sont augmentées de +25%.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"itIT": "La tua probabilità di critico contro nemici feriti e infettati da Infusione dell'Ombra aumenta del +25%.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"jaJP": "〈シャドウ注入〉の影響を受けている負傷状態の敵に対してのクリティカルヒット率が、+25%増加する。\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"koKR": "암흑 주입의 영향을 받은 부상 상태의 적에 대한 극대화 확률이 +25% 증가합니다.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"plPL": "Masz premię +25% do szansy na trafienie krytyczne przeciwko okaleczonym wrogom pod wpływem Nasycenia Cieniem.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"ptBR": "Você tem +25% de chance de acerto crítico aumentada contra inimigos feridos infectados por Imbuição de Sombra.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"ruRU": "Вероятность нанести противнику критический урон повышается на +25%, если у цели низкий уровень здоровья и на нее действует эффект \"Насыщения тенью\".\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"zhCN": "你对受暗影灌注影响的受伤的敌人造成伤害时,打出暴击的几率提高+25%。\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable."
},
		id: 133,
		maxPoints: 1,
		x: 415.425,
		y: -434.215
	},
	"Mixed Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Enemies damaged by Shadow Imbued Skills take x12% increased Non-Physical damage from you for 8 seconds.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Gemischte Schatteninfusion",
			"esES": "Imbuición de sombra combinada",
			"esMX": "Imbuición Umbría Mezclada",
			"frFR": "Imprégnation d'ombre mixte",
			"itIT": "Infusione dell'Ombra Mista",
			"jaJP": "シャドウ注入(混合)",
			"koKR": "뒤섞은 암흑 주입",
			"plPL": "Wymieszane Nasycenie Cieniem",
			"ptBR": "Imbuição de Sombra Misturada",
			"ruRU": "Смешанное насыщение тенью",
			"zhCN": "混合暗影灌注"
},
		descriptionLocalized: {
			"deDE": "Gegner, die durch Fertigkeiten mit Schatteninfusion Schaden erleiden, erleiden 8 Sek. lang x12% mehr nichtphysischen Schaden von Euch.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"esES": "Infliges un x12% más de daño no físico a los enemigos dañados por habilidades imbuidas de sombra durante 8 s.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"esMX": "Los enemigos dañados por habilidades de Imbuición Umbría reciben un x12% más de daño no físico durante 8 segundos.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"frFR": "Vous infligez x12% de dégâts non physiques supplémentaires aux cibles blessées par les compétences imprégnées d'ombre pendant 8 s.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"itIT": "I nemici colpiti da abilità infuse d'ombra subiscono il x12% di danni non fisici aggiuntivi per 8 s.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"jaJP": "シャドウ注入の効果を受けた敵は、受ける非物理ダメージが8秒間にわたりx12%増加する。\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"koKR": "암흑 주입에 감염된 적은 자신으로부터 받는 비물리 피해가 8초 동안 x12% 증가합니다.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"plPL": "Wrogowie, którym obrażenia zadały umiejętności nasycone Cieniem, otrzymują zwiększone o x12% obrażenia niefizyczne przez 8 sek.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"ptBR": "Inimigos atingidos por habilidades de Imbuição de Sombra recebem 12% de dano não físico aumentado por 8 segundos.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"ruRU": "Противники, пораженные насыщенными тенью умениями, получают от вас на x12% больше нефизического урона в течение 8 сек.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"zhCN": "敌人受暗影灌注影响时,其受到来自你的非物理伤害提高x12%,持续8秒。\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable."
},
		id: 134,
		maxPoints: 1,
		x: 665.515,
		y: -493.117
	},
	"Blended Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Shadow Imbuement's primary explosion makes enemies Vulnerable for 2 seconds.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Vermengte Schatteninfusion",
			"esES": "Imbuición de sombra mezclada",
			"esMX": "Imbuición Umbría Combinada",
			"frFR": "Imprégnation d'ombre composite",
			"itIT": "Infusione dell'Ombra Miscelata",
			"jaJP": "シャドウ注入(融合)",
			"koKR": "혼합 암흑 주입",
			"plPL": "Złączone Nasycenie Cieniem",
			"ptBR": "Imbuição de Sombra Mesclada",
			"ruRU": "Сопряженное насыщение тенью",
			"zhCN": "交融暗影灌注"
},
		descriptionLocalized: {
			"deDE": "Die primäre Explosion von Schatteninfusion macht Gegner 2 Sek. lang verwundbar.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"esES": "La explosión principal de Imbuición de sombra vuelve vulnerables a los enemigos durante 2 s.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"esMX": "La explosión principal de Imbuición Umbría vuelve a los enemigos vulnerables durante 2 segundos.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"frFR": "L'explosion principale de l'imprégnation d'ombre rend les adversaires vulnérables pendant 2 s.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"itIT": "L'esplosione principale di Infusione dell'Ombra rende i nemici vulnerabili per2 s.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"jaJP": "シャドウ注入の最初の爆発が、敵を2秒間にわたり脆弱状態にする。\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"koKR": "암흑 주입의 주 폭발이 적을 2초 동안 취약하게 만듭니다.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"plPL": "Główna eksplozja Nasycenia Cieniem sprawia, że wrogowie stają się odsłonięci na 2 sek.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"ptBR": "A explosão primária de Imbuição de Sombra torna os inimigos vulneráveis por 2 segundos.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"ruRU": "Первый взрыв \"Насыщения тенью\" делает противников уязвимыми на 2 сек.\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable.",
			"zhCN": "暗影灌注的主要爆炸使敌人陷入易伤,持续2秒。\n\nTags: Imbuement, Damage, Shadow, Cooldown, Imbueable."
},
		id: 135,
		maxPoints: 1,
		x: 393.345,
		y: -571.263
	},
	"Cold Imbuement": {
		connections: [ "Enhanced Cold Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Imbue your weapons with frigid energies. Your next 2 Imbueable Skills deal Cold damage and Chill enemies for {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% per hit.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		nameLocalized: {
			"deDE": "Kälteinfusion",
			"esES": "Imbuición de frío",
			"esMX": "Imbuición Gélida",
			"frFR": "Imprégnation de givre",
			"itIT": "Infusione del Freddo",
			"jaJP": "冷気注入",
			"koKR": "냉기 주입",
			"plPL": "Nasycenie Zimnem",
			"ptBR": "Imbuição de Gelo",
			"ruRU": "Насыщение холодом",
			"zhCN": "冰霜灌注"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nErfüllt Eure Waffen mit frostiger Energie. Eure nächsten 2 infusionsfähigen Fertigkeiten verursachen Kälteschaden und unterkühlen Gegner um {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% pro Treffer.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"esES": "Tiempo de reutilización: {#} s\nImbuye tus armas de energías gélidas. Tus 2 siguientes habilidades imbuibles infligen daño de frío y aplican un {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de helada por golpe a los enemigos.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"esMX": "Recuperación: {#} segundos\nImbuyes tus armas de energías frígidas. Tus próximas 2 habilidades imbuibles infligen daño de frío y hielan a los enemigos un {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% por golpe.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"frFR": "Temps de recharge : {#} s\nVous imprégnez vos armes d'énergie glaciale. Vos 2 prochaines compétences imprégnables infligent des dégâts de froid et glacent les adversaires à hauteur de {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% par coup.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"itIT": "Tempo di recupero: {#} s\nInfondi le tue armi con energie gelide. Le prossime 2 volte che utilizzerai delle abilità d'infusione infliggerai danni da freddo e raggelerai i nemici del {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% per colpo.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"jaJP": "クールダウン: {#}秒\n武器に極低温のエネルギーを注入する。次の2回の注入対応スキルは敵に冷気ダメージを与え、さらに命中するたびに{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%の冷気効果を付与する。\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"koKR": "재사용 대기시간: {#}초\n무기에 혹한의 에너지를 주입합니다. 다음 2번의 주입 기술이 냉기 피해를 주고 적중한 적 하나당 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%의 오한을 느끼게 합니다.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"plPL": "Czas odnowienia: {#} sek.\nNasycasz swoją broń mroźnymi energiami. Twoje następne umiejętności Nasycalne (2) zadają obrażenia od Zimna oraz przy każdym trafieniu wyziębiają wrogów o {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"ptBR": "Recarga: {#} segundos\nImbui suas armas com energias gélidas. Suas próximas 2 habilidades Imbuíveis causam dano gélido e gelam inimigos, causando {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de dano por acerto.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"ruRU": "Время восстановления: {#} сек.\nВы наделяете свое оружие силой мороза. Атаки 2 следующих насыщаемых навыков наносят урон от холода и заставляют противников коченеть, уменьшая их подвижность на {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% за попадание.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"zhCN": "冷却时间: {#}秒\n为你的武器灌注冰冷的能量。你的下2个可灌注技能造成冰霜伤害,每一击冻伤敌人{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%。\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable."
},
		id: 136,
		maxPoints: 5,
		values: [ "9" ],
		x: 280.1,
		y: 265.1
	},
	"Enhanced Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Cold Imbuement", "Mixed Cold Imbuement", "Blended Cold Imbuement" ],
		description: `Lucky Hit: Cold Imbued Skills have up to a 30% chance to make enemies Vulnerable for 3 seconds.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		nameLocalized: {
			"deDE": "Verbesserte Kälteinfusion",
			"esES": "Imbuición de frío mejorada",
			"esMX": "Imbuición Gélida Potenciada",
			"frFR": "Imprégnation de givre renforcée",
			"itIT": "Infusione del Freddo Rinforzata",
			"jaJP": "冷気注入(強化版)",
			"koKR": "강화된 냉기 주입",
			"plPL": "Wzmocnione Nasycenie Zimnem",
			"ptBR": "Imbuição de Gelo Aperfeiçoada",
			"ruRU": "Усиленное насыщение силой холода",
			"zhCN": "强化冰霜灌注"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Fertigkeiten mit Kälteinfusion verfügen über eine Chance von 30%, Gegner 3 Sek. lang verwundbar zu machen.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"esES": "Golpe de suerte: Las habilidades imbuidas de frío tienen hasta un 30% de probabilidad de volver vulnerables a los enemigos durante 3 s.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"esMX": "Golpe afortunado: Las habilidades de Imbuición Gélida tienen hasta un 30% de probabilidad de volver a los enemigos vulnerables durante 3 segundos.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"frFR": "Coup de chance : les compétences imprégnées de givre ont jusqu'à 30% de chances de rendre les adversaires vulnérables pendant 3 s.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"itIT": "Colpo fortunato: le abilità infuse di freddo hanno fino al 30% di probabilità di rendere i nemici vulnerabili per 3 s.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"jaJP": "幸運の一撃: 冷気注入状態のスキルが最大30%の確率で、敵を3秒間にわたり脆弱状態にする。\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"koKR": "행운의 적중: 냉기 주입 기술이 최대 30% 확률로 적을 3초 동안 취약하게 합니다.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"plPL": "Szczęśliwy traf: Umiejętności nasycone Zimnem mają 30% szans na odsłonięcie wrogów na 3 sek.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"ptBR": "Golpe de Sorte: Habilidades de Imbuição de Gelo têm até 30% de chance de tornar os inimigos vulneráveis por 3 segundos.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"ruRU": "Удачный удар: навыки, насыщенные силой холода, с вероятностью до 30% делают противников уязвимыми на 3 сек.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"zhCN": "幸运一击:冰霜灌注技能最多有30%几率使敌人陷入易伤状态,持续3秒。\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable."
},
		id: 137,
		maxPoints: 1,
		x: 489.875,
		y: 445.235
	},
	"Mixed Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `Cold Imbued Skills deal x20% damage to Crowd Controlled enemies. Double this bonus against Frozen enemies.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		nameLocalized: {
			"deDE": "Gemischte Kälteinfusion",
			"esES": "Imbuición de frío combinada",
			"esMX": "Imbuición Gélida Mezclada",
			"frFR": "Imprégnation de givre mixte",
			"itIT": "Infusione del Freddo Mista",
			"jaJP": "冷気注入(混合)",
			"koKR": "뒤섞은 냉기 주입",
			"plPL": "Wymieszane Nasycenie Zimnem",
			"ptBR": "Imbuição de Gelo Misturada",
			"ruRU": "Смешанное насыщение холодом",
			"zhCN": "混合冰霜灌注"
},
		descriptionLocalized: {
			"deDE": "Fertigkeiten mit Kälteinfusion fügen Gegnern, die unter Kontrollverlusteffekten leiden, x20% Schaden zu. Dieser Bonus verdoppelt sich gegen eingefrorene Gegner.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"esES": "Las habilidades imbuidas de frío infligen un x20% de daño a enemigos afectados por control de masas. Este bonus se duplica contra enemigos congelados.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"esMX": "Las habilidades de Imbuición Gélida infligen un x20% más de daño a los enemigos bajo los efectos de control de multitudes. La bonificación se duplica contra enemigos congelados.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"frFR": "Les compétences imprégnées de givre infligent x20% de dégâts aux cibles subissant un effet de perte de contrôle. Ce bonus est doublé contre les cibles gelées.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"itIT": "Le abilità infuse di freddo infliggono il x20% di danni aggiuntivi ai nemici sotto un effetto di controllo delle creature. Il bonus raddoppia contro i nemici congelati.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"jaJP": "操作障害効果を受けた敵に冷気注入状態のスキルで与えるダメージがx20%増加する。凍結状態の敵に対しては増加量が2倍になる。\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"koKR": "냉기 주입 기술이 군중 제어 상태의 적에게 주는 피해가 x20% 증가합니다. 빙결 상태의 적을 상대할 때는 이 효과가 2배로 증가합니다.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"plPL": "Umiejętności nasycone Zimnem zadają x20% obrażeń wrogom o ograniczonej kontroli. Wartość ta jest podwojona w przypadku zamrożonych wrogów.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"ptBR": "Habilidades de Imbuição de Gelo causam 20% de dano a inimigos sob controle de grupo. O bônus é dobrado contra inimigos congelados.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"ruRU": "Навыки, насыщенные силой холода, наносят на x20% больше урона противникам, на которых действуют эффекты контроля. Бонус удваивается, если цель заморожена.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"zhCN": "冰霜灌注技能对被群控敌人造成的伤害提高x20%。该加成对被冻结的敌人翻倍。\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable."
},
		id: 138,
		maxPoints: 1,
		x: 480.65,
		y: 583.225
	},
	"Blended Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `Lucky Hit: Critical Strikes with Cold Imbued Skills have up to a 20% chance to instantly Freeze enemies for 3 seconds.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		nameLocalized: {
			"deDE": "Vermengte Kälteinfusion",
			"esES": "Imbuición de frío mezclada",
			"esMX": "Imbuición Gélida Combinada",
			"frFR": "Imprégnation de givre composite",
			"itIT": "Infusione del Freddo Miscelata",
			"jaJP": "冷気注入(融合)",
			"koKR": "혼합 냉기 주입",
			"plPL": "Złączone Nasycenie Zimnem",
			"ptBR": "Imbuição de Gelo Mesclada",
			"ruRU": "Сопряженное насыщение холодом",
			"zhCN": "交融冰霜灌注"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Kritische Treffer mit Fertigkeiten mit Kälteinfusion verfügen über eine Chance von bis zu 20%, Gegner sofort 3 Sek. lang einzufrieren.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"esES": "Golpe de suerte: Los golpes críticos con habilidades imbuidas de frío tienen hasta un 20% de probabilidad de congelar al instante a los enemigos durante 3 s.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"esMX": "Golpe afortunado: Los golpes críticos con habilidades de Imbuición Gélida tienen hasta un 20% de probabilidad de congelar a los enemigos instantáneamente durante 3 segundos.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"frFR": "Coup de chance : les coups critiques infligés avec des compétences imprégnées de givre ont jusqu'à 20% de chances de geler instantanément les cibles pendant 3 s.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"itIT": "Colpo fortunato: i colpi critici delle abilità infuse di freddo hanno fino al 20% di probabilità di congelare istantaneamente i nemici per 3 s.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"jaJP": "幸運の一撃: 冷気注入状態のスキルでクリティカルヒットが発生すると、最大20%の確率で敵を瞬時に3秒間にわたって凍結させる。\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"koKR": "행운의 적중: 냉기 주입 기술이 극대화로 적중하면 최대 20% 확률로 대상을 즉시 3초 동안 빙결시킵니다.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"plPL": "Szczęśliwy traf: Trafienia krytyczne zadane umiejętnościami nasyconymi Zimnem mają do 20% szans na natychmiastowe zamrożenie wrogów na 3 sek.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"ptBR": "Golpe de Sorte: Acertos críticos com habilidades de Imbuição de Gelo têm até 20% de chance de congelar inimigos instantaneamente por 3 segundos.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"ruRU": "Удачный удар: атаки, насыщенные силой холода, с вероятностью до 20% мгновенно замораживают цель на 3 сек.\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.",
			"zhCN": "幸运一击:使用冰霜灌注技能造成暴击最多有20%几率立即冻结敌人,持续3秒。\n\nTags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable."
},
		id: 139,
		maxPoints: 1,
		x: 739.755,
		y: 471.33
	},
	"Frigid Finesse": {
		connections: [ "Chilling Weight", "Imbuements" ],
		description: `You deal x{5/10/15/20/25/30/35/40/45/50}% increased damage to Chilled enemies. This bonus increases to x{10/20/30/40/50/60/70/80/90/100}% against Frozen enemies.

Tags: Chill, Frozen, Crowd Control, Damage.`,
		nameLocalized: {
			"deDE": "Frostige Finesse",
			"esES": "Finura gélida",
			"esMX": "Fineza Frígida",
			"frFR": "Finesse glaciale",
			"itIT": "Raffinatezza Gelida",
			"jaJP": "氷結の手腕",
			"koKR": "혹한의 기교",
			"plPL": "Chłodna Finezja",
			"ptBR": "Elegância Frígida",
			"ruRU": "Ледяная точность",
			"zhCN": "冰冷巧劲"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt unterkühlten Gegnern x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden zu. Dieser Bonus erhöht sich bei eingefrorenen Gegnern um x{10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"esES": "Infliges un x{5/10/15/20/25/30/35/40/45/50}% más de daño a enemigos helados. Este bonus aumenta a un x{10/20/30/40/50/60/70/80/90/100}% contra enemigos congelados.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"esMX": "Infliges un x{5/10/15/20/25/30/35/40/45/50}% más de daño a los enemigos helados. La bonificación aumenta al x{10/20/30/40/50/60/70/80/90/100}% contra enemigos congelados.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"frFR": "Vous infligez x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires aux cibles glacées. Ce bonus est porté à x{10/20/30/40/50/60/70/80/90/100}% contre les cibles gelées.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"itIT": "Infliggi il x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi ai nemici raggelati. Questo bonus aumenta al x{10/20/30/40/50/60/70/80/90/100}% contro i nemici congelati.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"jaJP": "冷気状態の敵に与えるダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。凍結状態の敵に対してはx{10/20/30/40/50/60/70/80/90/100}%増加する。\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"koKR": "오한을 느끼는 적에게 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가하고, 빙결된 적에게 주는 피해는 x{10/20/30/40/50/60/70/80/90/100}% 증가합니다.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"plPL": "Zadajesz obrażenia zwiększone o x{5/10/15/20/25/30/35/40/45/50}% wyziębionym wrogom. Premia ta wzrasta do x{10/20/30/40/50/60/70/80/90/100}% w przypadku zamrożonych wrogów.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"ptBR": "Você causa {5/10/15/20/25/30/35/40/45/50}% de dano aumentado a inimigos com gelidez. Esse bônus aumenta para {10/20/30/40/50/60/70/80/90/100}% contra inimigos congelados.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"ruRU": "Вы наносите на x{5/10/15/20/25/30/35/40/45/50}% больше урона окоченевшим противникам. Бонус усиливается до x{10/20/30/40/50/60/70/80/90/100}%, если ваша цель заморожена.\n\nTags: Chill, Frozen, Crowd Control, Damage.",
			"zhCN": "你对被冻伤的敌人造成的伤害提高x{5/10/15/20/25/30/35/40/45/50}%。该加成对被冻结的敌人提高至x{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: Chill, Frozen, Crowd Control, Damage."
},
		id: 99,
		maxPoints: 3,
		x: -160.371,
		y: 330.145
	},
	"Chilling Weight": {
		connections: [ "Frigid Finesse" ],
		description: `Chilled enemies have their Movement Speed further reduced by up to {10/20/30/40/50/60/70/80/90/100}%.

Tags: Chill, Crowd Control, Movement.`,
		nameLocalized: {
			"deDE": "Unterkühlendes Gewicht",
			"esES": "Peso helado",
			"esMX": "Peso Gélido",
			"frFR": "Chape de glace",
			"itIT": "Peso Raggelante",
			"jaJP": "冷たき重圧",
			"koKR": "싸늘한 무게",
			"plPL": "Chłodny Ciężar",
			"ptBR": "Peso Gélido",
			"ruRU": "Обременяющий холод",
			"zhCN": "寒冷之重"
},
		descriptionLocalized: {
			"deDE": "Die Bewegungsgeschwindigkeit von unterkühlten Gegnern verringert sich zusätzlich um {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Chill, Crowd Control, Movement.",
			"esES": "La velocidad de movimiento de los enemigos helados se reduce hasta un {10/20/30/40/50/60/70/80/90/100}% más.\n\nTags: Chill, Crowd Control, Movement.",
			"esMX": "Los enemigos helados tienen hasta un {10/20/30/40/50/60/70/80/90/100}% de reducción de velocidad de movimiento adicional.\n\nTags: Chill, Crowd Control, Movement.",
			"frFR": "La vitesse de déplacement des cibles glacées est davantage réduite, jusqu'à un maximum de {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Chill, Crowd Control, Movement.",
			"itIT": "La velocità di movimento dei nemici raggelati si riduce fino a un massimo del {10/20/30/40/50/60/70/80/90/100}% aggiuntivo.\n\nTags: Chill, Crowd Control, Movement.",
			"jaJP": "冷気効果を受けた敵は、移動速度が更に最大{10/20/30/40/50/60/70/80/90/100}%低下する。\n\nTags: Chill, Crowd Control, Movement.",
			"koKR": "오한을 느끼는 적의 이동 속도가 최대 {10/20/30/40/50/60/70/80/90/100}%까지 추가로 감소합니다.\n\nTags: Chill, Crowd Control, Movement.",
			"plPL": "Szybkość ruchu wyziębionych wrogów jest dodatkowo zmniejszona o maksymalnie {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Chill, Crowd Control, Movement.",
			"ptBR": "Inimigos com gelidez têm a velocidade de movimento reduzida ainda mais em até {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Chill, Crowd Control, Movement.",
			"ruRU": "Скорость передвижения окоченевших противников дополнительно снижается на {10/20/30/40/50/60/70/80/90/100}% или менее.\n\nTags: Chill, Crowd Control, Movement.",
			"zhCN": "被冻伤敌人的移动速度最多额外降低{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: Chill, Crowd Control, Movement."
},
		id: 100,
		maxPoints: 3,
		x: -164.62,
		y: 503.995
	},
	"Precision Imbuement": {
		connections: [ "Imbuements" ],
		description: `Imbued Skills gain +{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Chance.

Tags: Critical Strikes, Imbuement.`,
		nameLocalized: {
			"deDE": "Präzisionsinfusion",
			"esES": "Imbuición precisa",
			"esMX": "Imbuición Precisa",
			"frFR": "Enduisage précis",
			"itIT": "Infusione Precisa",
			"jaJP": "高精度注入",
			"koKR": "정밀 주입",
			"plPL": "Precyzyjne Nasycenie",
			"ptBR": "Imbuição de Precisão",
			"ruRU": "Прицельное насыщение",
			"zhCN": "精准灌注"
},
		descriptionLocalized: {
			"deDE": "Fertigkeiten mit Infusionen erhalten eine um +{5/10/15/20/25/30/35/40/45/50}% erhöhte kritische Trefferchance.\n\nTags: Critical Strikes, Imbuement.",
			"esES": "Las habilidades imbuidas obtienen un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe crítico.\n\nTags: Critical Strikes, Imbuement.",
			"esMX": "Las habilidades de Imbuición obtienen un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe crítico.\n\nTags: Critical Strikes, Imbuement.",
			"frFR": "Les compétences imprégnées ont +{5/10/15/20/25/30/35/40/45/50}% de chances supplémentaires d'infliger un coup critique.\n\nTags: Critical Strikes, Imbuement.",
			"itIT": "La probabilità di critico delle abilità infuse aumentano del +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Critical Strikes, Imbuement.",
			"jaJP": "注入状態のスキルのクリティカルヒット率が+{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: Critical Strikes, Imbuement.",
			"koKR": "주입된 기술의 극대화 확률이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Critical Strikes, Imbuement.",
			"plPL": "Umiejętności Nasycenia zyskują szansę na trafienie krytyczne zwiększoną o +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Critical Strikes, Imbuement.",
			"ptBR": "Habilidades de Imbuição recebem +{5/10/15/20/25/30/35/40/45/50}% de chance de acerto crítico aumentada.\n\nTags: Critical Strikes, Imbuement.",
			"ruRU": "Вероятность критического удара навыка с эффектом насыщения повышается на +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Critical Strikes, Imbuement.",
			"zhCN": "灌注技能的暴击几率提高+{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: Critical Strikes, Imbuement."
},
		id: 94,
		maxPoints: 3,
		x: -614.69,
		y: 3.325
	},
};

rogueData["Ultimate"] = {
	"Innervation": {
		connections: [ "Ultimate", "Alchemist's Fortune", "Second Wind" ],
		description: `Lucky Hit: Up to a {10/20/30/40/50/60/70/80/90/100}% chance to gain 8 Energy.

Tags: Energy, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Anregung",
			"esES": "Inervación",
			"esMX": "Enervación",
			"frFR": "Innervation",
			"itIT": "Innervazione",
			"jaJP": "神経支配",
			"koKR": "신경자극",
			"plPL": "Orzeźwienie",
			"ptBR": "Inervação",
			"ruRU": "Прилив энергии",
			"zhCN": "神经兴奋"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer:Es besteht eine Chance von bis zu {10/20/30/40/50/60/70/80/90/100} %, 8 Energie zu erhalten.\n\nTags: Energy, Lucky Hit.",
			"esES": "Golpe de suerte: Hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de obtener 8 de energía.\n\nTags: Energy, Lucky Hit.",
			"esMX": "Golpe afortunado: Tienes hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de obtener 8 de Energía.\n\nTags: Energy, Lucky Hit.",
			"frFR": "Coup de chance : vous avez jusqu'à {10/20/30/40/50/60/70/80/90/100}% de gagner 8 points d'énergie.\n\nTags: Energy, Lucky Hit.",
			"itIT": "Colpo fortunato: fino al {10/20/30/40/50/60/70/80/90/100}% di probabilità di generare 8 energia.\n\nTags: Energy, Lucky Hit.",
			"jaJP": "幸運の一撃:最大{10/20/30/40/50/60/70/80/90/100}%の確率で8のエネルギーを獲得する。\n\nTags: Energy, Lucky Hit.",
			"koKR": "행운의 적중: 최대 {10/20/30/40/50/60/70/80/90/100}% 확률로 기력을 8 얻습니다.\n\nTags: Energy, Lucky Hit.",
			"plPL": "Szczęśliwy traf: Do {10/20/30/40/50/60/70/80/90/100}% szans na zyskanie 8 pkt. energii.\n\nTags: Energy, Lucky Hit.",
			"ptBR": "Golpe de Sorte: Até {10/20/30/40/50/60/70/80/90/100}% de chance de receber 8 de energia.\n\nTags: Energy, Lucky Hit.",
			"ruRU": "Удачный удар: вы с вероятностью до {10/20/30/40/50/60/70/80/90/100}% накапливаете 8 ед. энергии.\n\nTags: Energy, Lucky Hit.",
			"zhCN": "幸运一击:最多有{10/20/30/40/50/60/70/80/90/100}%几率获得8点能量。\n\nTags: Energy, Lucky Hit."
},
		id: 101,
		maxPoints: 3,
		x: -337.03,
		y: -332.265
	},
	"Alchemist's Fortune": {
		connections: [ "Innervation" ],
		description: `Non-Physical damage you deal has a +{5/10/15/20/25/30/35/40/45/50}% increased Lucky Hit Chance.

Tags: Non-Physical, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Alchemistenglück",
			"esES": "Fortuna de alquimista",
			"esMX": "Fortuna del Alquimista",
			"frFR": "Fortune d'alchimiste",
			"itIT": "Fortuna dell'Alchimista",
			"jaJP": "錬金術師の幸運",
			"koKR": "연금술사의 행운",
			"plPL": "Szczęście Alchemika",
			"ptBR": "Fortuna do Alquimista",
			"ruRU": "Удача алхимика",
			"zhCN": "炼金师的幸运"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr nichtphysischen Schaden verursacht, besteht eine um +{5/10/15/20/25/30/35/40/45/50}% erhöhte Glückstrefferchance.\n\nTags: Non-Physical, Lucky Hit.",
			"esES": "El daño no físico que infliges tiene un +{5/10/15/20/25/30/35/40/45/50}% de probabilidad de golpe de suerte.\n\nTags: Non-Physical, Lucky Hit.",
			"esMX": "El daño no físico que infliges tiene un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe afortunado.\n\nTags: Non-Physical, Lucky Hit.",
			"frFR": "Les chances d'obtenir un coup de chance avec vos dégâts non physiques sont augmentées de +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Non-Physical, Lucky Hit.",
			"itIT": "I danni non fisici da te inflitti hanno una probabilità di colpo fortunato aggiuntiva del +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Non-Physical, Lucky Hit.",
			"jaJP": "非物理ダメージが〈幸運の一撃〉になる確率が+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: Non-Physical, Lucky Hit.",
			"koKR": "비물리 피해를 주면 행운의 적중 확률이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Non-Physical, Lucky Hit.",
			"plPL": "Zadawane przez ciebie obrażenia niefizyczne zwiększają o +{5/10/15/20/25/30/35/40/45/50}% szansę na szczęśliwy traf.\n\nTags: Non-Physical, Lucky Hit.",
			"ptBR": "O dano não físico causado por você tem +{5/10/15/20/25/30/35/40/45/50}% de chance de Golpe de Sorte aumentada.\n\nTags: Non-Physical, Lucky Hit.",
			"ruRU": "Вероятность активировать удачный удар нефизической атакой повышается на +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Non-Physical, Lucky Hit.",
			"zhCN": "你造成的非物理伤害出现幸运一击的几率提高+{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: Non-Physical, Lucky Hit."
},
		id: 103,
		maxPoints: 3,
		x: -329.83,
		y: -519.715
	},
	"Second Wind": {
		connections: [ "Innervation" ],
		description: `Every 100 Energy you spend grants you +{5/10/15/20/25/30/35/40/45/50}% increased Lucky Hit Chance for 5 seconds.

Tags: Energy, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Kräfte sammeln",
			"esES": "Impulso renovado",
			"esMX": "Segundo Aliento",
			"frFR": "Second souffle",
			"itIT": "Aria di Sfida",
			"jaJP": "セカンド・ウィンド",
			"koKR": "재기의 바람",
			"plPL": "Drugi Oddech",
			"ptBR": "Fôlego Extra",
			"ruRU": "Второе дыхание",
			"zhCN": "复苏之风"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Ihr 100 Energie verbraucht, erhaltet Ihr 5 Sek. lang eine +{5/10/15/20/25/30/35/40/45/50}% höhere Glückstrefferchance.\n\nTags: Energy, Lucky Hit.",
			"esES": "Por cada 100 de energía que gastas, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe de suerte durante 5 s.\n\nTags: Energy, Lucky Hit.",
			"esMX": "Cada 100 de Energía que usas, te otorga un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe afortunado durante 5 segundos.\n\nTags: Energy, Lucky Hit.",
			"frFR": "Tous les 100 points d'énergie que vous dépensez, vos chances d'obtenir un coup de chance sont augmentées de +{5/10/15/20/25/30/35/40/45/50}% pendant 5 s.\n\nTags: Energy, Lucky Hit.",
			"itIT": "Ogni 100 energia consumata, la tua probabilità di colpo fortunato aumenta del +{5/10/15/20/25/30/35/40/45/50}% per 5 s.\n\nTags: Energy, Lucky Hit.",
			"jaJP": "エネルギーを100消費するたびに、幸運の一撃の発生率が5 秒間にわたり+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: Energy, Lucky Hit.",
			"koKR": "기력을 100 소모할 때마다 5초 동안 행운의 적중 확률이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Energy, Lucky Hit.",
			"plPL": "Za każde wykorzystane 100 pkt. energii zyskujesz premię +{5/10/15/20/25/30/35/40/45/50}% do szansy na szczęśliwy traf przez 5 sek.\n\nTags: Energy, Lucky Hit.",
			"ptBR": "Cada 100 de energia que você gasta concede +{5/10/15/20/25/30/35/40/45/50}% de chance de Golpe de Sorte aumentada por 5 segundos.\n\nTags: Energy, Lucky Hit.",
			"ruRU": "За каждые потраченные 100 ед. энергии вероятность срабатывания удачного удара повышается на +{5/10/15/20/25/30/35/40/45/50}% на 5 сек.\n\nTags: Energy, Lucky Hit.",
			"zhCN": "每花费100点能量都会使你的幸运一击几率提高+{5/10/15/20/25/30/35/40/45/50}%,持续5秒。\n\nTags: Energy, Lucky Hit."
},
		id: 102,
		maxPoints: 3,
		x: -565.345,
		y: -521.42
	},
	"Shadow Clone": {
		connections: [ "Prime Shadow Clone", "Ultimate" ],
		description: `Cooldown: {#} seconds
Your shadow mimicks your actions for 15 seconds.
The shadow deals 60% of your damage.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Schattenklon",
			"esES": "Clon tenebroso",
			"esMX": "Clon Umbrío",
			"frFR": "Clone d'ombre",
			"itIT": "Clone d'Ombra",
			"jaJP": "シャドウ・クローン",
			"koKR": "복제된 그림자",
			"plPL": "Klon Cienia",
			"ptBR": "Clone de Sombras",
			"ruRU": "Темное отражение",
			"zhCN": "暗影分身"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nEuer Schatten ahmt Euch 15 Sek. lang nach. Der Schattenklon verursacht 60% Eures Schadens.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"esES": "Tiempo de reutilización: {#} s\nTu clon imita tus acciones durante 15 s. Este Clon tenebroso inflige un 60% de tu daño.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"esMX": "Recuperación: {#} segundos\nTu sombra copia tus acciones durante 15 segundos. Este clon umbrío inflige un 60% de tu daño.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"frFR": "Temps de recharge : {#} s\nVotre ombre imite vos faits et gestes pendant 15 s. Ce Clone d'ombre inflige 60% de vos dégâts.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"itIT": "Tempo di recupero: {#} s\nLa tua ombra copia le tue azioni per 15 s. Questo Clone d'Ombra infligge il 60% dei tuoi danni.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"jaJP": "クールダウン: {#}秒\n15秒間、影が自分の行動を模倣する。このシャドウ・クローンは、自分の与えるダメージの60%のダメージを与える。\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"koKR": "재사용 대기시간: {#}초\n15초 동안 그림자가 도적의 행동을 흉내냅니다. 복제된 그림자는 도적이 주는 피해의 60%에 해당하는 피해를 줍니다.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"plPL": "Czas odnowienia: {#} sek.\nTwój Cień naśladuje twoje działania przez 15 sek.\nTen Klon Cienia zadaje równowartość 60% twoich obrażeń.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"ptBR": "Recarga: {#} segundos\nSua sombra imita suas ações por 15 segundos. Este Clone de Sombras causa 60% do seu dano.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"ruRU": "Время восстановления: {#} сек.\nВаша тень копирует ваши действия в течение 15 сек. Темное отражение наносит 60% вашего урона.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"zhCN": "冷却时间:{#}秒\n你的暗影分身会模仿你的行动,持续15秒。\n暗影分身造成的伤害相当于你造成伤害的60%。\n\nTags: Ultimate, Damage, Physical, Cooldown."
},
		id: 104,
		maxPoints: 1,
		values: [ "60" ],
		x: 2.07,
		y: -283.5
	},
	"Prime Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Shadow Clone", "Supreme Shadow Clone" ],
		description: `You are Unstoppable for 5 seconds after casting Shadow Clone.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Primärer Schattenklon",
			"esES": "Clon tenebroso mayor",
			"esMX": "Clon Umbrío Supremo",
			"frFR": "Clone d'ombre primordial",
			"itIT": "Clone d'Ombra Pregiato",
			"jaJP": "シャドウ・クローン(上級)",
			"koKR": "극상의 복제된 그림자",
			"plPL": "Większy Klon Cienia",
			"ptBR": "Clone de Sombras Primordial",
			"ruRU": "Первородное темное отражение",
			"zhCN": "至尊暗影分身"
},
		descriptionLocalized: {
			"deDE": "Nach dem Wirken von Schattenklon werdet Ihr 5 Sek. lang unaufhaltsam.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"esES": "Eres imparable durante 5 s tras lanzar Clon tenebroso.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"esMX": "Eres imparable durante 5 segundos luego de lanzar Clon Umbrío.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"frFR": "Vous êtes inarrêtable durant les 5 s qui suivent l'utilisation de Clone d'ombre.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"itIT": "Sei inarrestabile per 5 s dopo aver lanciato Clone d'Ombra.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"jaJP": "〈シャドウ・クローン〉を使用した後の5秒間、抑圧不可状態になる。\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"koKR": "복제된 그림자를 시전한 후 5초 동안 저지 불가 상태가 됩니다.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"plPL": "Zyskujesz nieustępliwość na 5 sek. po użyciu Klona Cienia.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"ptBR": "Você fica implacável por 5 segundos depois de lançar Clone de Sombras.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"ruRU": "Вы получаете неудержимость на 5 сек. после призыва темного отражения.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"zhCN": "施放暗影分身后,你获得不可阻挡,持续5秒。\n\nTags: Ultimate, Damage, Physical, Cooldown."
},
		id: 105,
		maxPoints: 1,
		x: 6.085,
		y: -465.75
	},
	"Supreme Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Prime Shadow Clone" ],
		description: `Your Shadow Clone deals an additional 20% of your damage.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegener Schattenklon",
			"esES": "Clon tenebroso supremo",
			"esMX": "Clon Umbrío Superior",
			"frFR": "Clone d'ombre suprême",
			"itIT": "Clone d'Ombra Supremo",
			"jaJP": "シャドウ・クローン(高級)",
			"koKR": "최고의 복제된 그림자",
			"plPL": "Najwyższy Klon Cienia",
			"ptBR": "Clone de Sombras Supremo",
			"ruRU": "Неотвратимое темное отражение",
			"zhCN": "至极暗影分身"
},
		descriptionLocalized: {
			"deDE": "Euer Schattenklon verursacht zusätzlich 20 % Eures Schadens.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"esES": "Tu clon tenebroso inflige un 20% adicional de tu daño.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"esMX": "Tu Clon Umbrío inflige un 20% de tu daño como daño adicional.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"frFR": "Votre Clone d'ombre inflige un montant de dégâts supplémentaires égal à 20% de vos dégâts.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"itIT": "Il tuo Clone d'Ombra infligge un ulteriore 20% dei tuoi danni.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"jaJP": "〈シャドウ・クローン〉の与えるダメージが、自分が与えるダメージに20%上乗せされたものになる。\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"koKR": "자신의 복제된 그림자가 자신의 피해의 20%만큼 추가 피해를 줍니다.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"plPL": "Twój Klon Cienia zadaje dodatkowo równowartość 20% twoich obrażeń.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"ptBR": "Seu Clone de Sombras causa um adicional de 20% do seu dano.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"ruRU": "Ваше темное отражение наносит дополнительный урон в размере 20% наносимого вами урона.\n\nTags: Ultimate, Damage, Physical, Cooldown.",
			"zhCN": "你的暗影分身额外造成你伤害的20%。\n\nTags: Ultimate, Damage, Physical, Cooldown."
},
		id: 106,
		maxPoints: 1,
		x: 9.375,
		y: -623.95
	},
	"Aftermath": {
		connections: [ "Ultimate" ],
		description: `After using an Ultimate Skill, restore {25/50/75/100/125/150/175/200/225/250} Energy.

Tags: Energy, Ultimate.`,
		nameLocalized: {
			"deDE": "Nachwirkung",
			"esES": "Repercusión",
			"esMX": "Secuela",
			"frFR": "Après-coup",
			"itIT": "Conseguenze",
			"jaJP": "余波",
			"koKR": "여파",
			"plPL": "Pokłosie",
			"ptBR": "Epílogo",
			"ruRU": "Итог",
			"zhCN": "余劲尚存"
},
		descriptionLocalized: {
			"deDE": "Das Verwenden einer ultimativen Fertigkeit stellt {25/50/75/100/125/150/175/200/225/250} Energie wieder her.\n\nTags: Energy, Ultimate.",
			"esES": "Tras usar una habilidad definitiva, recuperas {25/50/75/100/125/150/175/200/225/250} de energía.\n\nTags: Energy, Ultimate.",
			"esMX": "Después de usar una habilidad máxima, restauras {25/50/75/100/125/150/175/200/225/250} de Energía.\n\nTags: Energy, Ultimate.",
			"frFR": "Après avoir utilisé une compétence ultime, vous récupérez {25/50/75/100/125/150/175/200/225/250} points d'énergie.\n\nTags: Energy, Ultimate.",
			"itIT": "Dopo aver usato un'abilità Ultra, rigeneri {25/50/75/100/125/150/175/200/225/250} energia.\n\nTags: Energy, Ultimate.",
			"jaJP": "奥義スキルを使用した後、エネルギーが{25/50/75/100/125/150/175/200/225/250}回復する。\n\nTags: Energy, Ultimate.",
			"koKR": "궁극기 사용 후 기력을 {25/50/75/100/125/150/175/200/225/250} 회복합니다.\n\nTags: Energy, Ultimate.",
			"plPL": "Po użyciu Mocy Specjalnej odzyskujesz {25/50/75/100/125/150/175/200/225/250} pkt. energii.\n\nTags: Energy, Ultimate.",
			"ptBR": "Depois de usar uma habilidade suprema, restaura {25/50/75/100/125/150/175/200/225/250} de energia.\n\nTags: Energy, Ultimate.",
			"ruRU": "После применения мощного навыка вы восстанавливаете {25/50/75/100/125/150/175/200/225/250} ед. энергии.\n\nTags: Energy, Ultimate.",
			"zhCN": "使用终极技能后,恢复{25/50/75/100/125/150/175/200/225/250}点能量。\n\nTags: Energy, Ultimate."
},
		id: 107,
		maxPoints: 3,
		x: -537.565,
		y: 187.49
	},
	"Death Trap": {
		connections: [ "Prime Death Trap", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Place a trap that arms after {#} seconds. It activates when an enemy moves within range, dealing a total of 250% damage to each enemy in the area.

Tags: Ultimate, Trap, Damage, Shadow, Cooldown.`,
		nameLocalized: {
			"deDE": "Todesfalle",
			"esES": "Trampa mortal",
			"esMX": "Trampa Mortal",
			"frFR": "Piège mortel",
			"itIT": "Trappola Mortale",
			"jaJP": "デス・トラップ",
			"koKR": "죽음의 덫",
			"plPL": "Zabójcza Pułapka",
			"ptBR": "Armadilha da Morte",
			"ruRU": "Смертоносная ловушка",
			"zhCN": "索命陷阱"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nPlatziert eine Falle, die nach {#} Sek. scharf wird. Kommen Gegner ihr zu nahe, aktiviert sie sich, explodiert und fügt jedem Gegner im Wirkungsbereich insgesamt 250% Schaden zu.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nColocas una trampa que se arma al cabo de {#} s. Cuando un enemigo se pone al alcance, se activa e inflige un total de 250% de daño a cada enemigo en la zona.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nColocas una trampa que se arma después de {#} segundos. Se activa cuando un enemigo se mueve dentro del alcance e inflige un total de 250% de daño a cada enemigo en el área.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVous placez un piège qui s'arme au bout de {#} s. Il s'active lorsqu'une cible adverse passe à portée, ce qui inflige un total de 250% points de dégâts à chaque adversaire se trouvant dans la zone affectée.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nPiazzi una trappola che si arma dopo {#} s. Quando un nemico entra nel suo raggio d'azione, la trappola si attiva infliggendo un totale di 250% danni a ogni nemico nell'area.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n{#}秒後に起動準備が完了する罠を仕掛ける。罠は一定距離内で敵が動くと起動し、エリア内にいる敵それぞれに合計250%のダメージを与える。\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n{#}초 후 장전되는 덫을 설치합니다. 덫은 적이 범위 내에 들어오면 발동하며, 해당 범위 내에 있는 각각의 적에게 총 250%의 피해를 줍니다.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nTworzysz pułapkę, która uzbraja się po {#} sek. Gdy wróg zajdzie się w jej zasięgu, pułapka się aktywuje, a następnie wybucha, zadając w sumie 250% pkt. obrażeń każdemu wrogowi w polu rażenia.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nPosiciona uma armadilha que arma após {#} segundos. É ativada quando um inimigo entre em alcance, causando um total de 250% de ano a cada inimigo na área.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nВы размещаете на земле ловушку, которая заряжается через {#} сек. Когда в область действия попадает противник, она срабатывает и наносит целям в зоне поражения по 250% ед. урона.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n放置一个在{#}秒后完成部署的陷阱。陷阱会在敌人进入范围时激活,对范围内的每个敌人造成总共250%点伤害。\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown."
},
		id: 108,
		maxPoints: 1,
		values: [ "45", "40", "1.25" ],
		x: -543.29,
		y: 2.23
	},
	"Prime Death Trap": {
		baseSkill: "Death Trap",
		connections: [ "Death Trap", "Supreme Death Trap" ],
		description: `Enemies are Pulled into Death Trap when it activates.

Tags: Ultimate, Trap, Damage, Shadow, Cooldown.`,
		nameLocalized: {
			"deDE": "Oberste Todesfalle",
			"esES": "Trampa mortal mayor",
			"esMX": "Trampa Mortal Suprema",
			"frFR": "Piège mortel primordial",
			"itIT": "Trappola Mortale Pregiata",
			"jaJP": "デス・トラップ(上級)",
			"koKR": "극상의 죽음의 덫",
			"plPL": "Większa Zabójcza Pułapka",
			"ptBR": "Armadilha da Morte Primordial",
			"ruRU": "Первородная смертоносная ловушка",
			"zhCN": "至尊索命陷阱"
},
		descriptionLocalized: {
			"deDE": "Gegner werden bei der Aktivierung von Todesfalle zur Falle gezogen.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"esES": "Trampa mortal atrae a los enemigos cuando se activa.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"esMX": "Trampa Mortal atrae a los enemigos al activarse.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"frFR": "Les cibles adverses sont attirées dans le piège mortel lorsqu'il s'active.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"itIT": "I nemici vengono trascinati nella Trappola Mortale quando si attiva.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"jaJP": "〈デス・トラップ〉が起動すると敵を引き寄せる。\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"koKR": "죽음의 덫이 발동할 때 적들을 끌어당깁니다.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"plPL": "Wrogowie są przyciągani do Zabójczej Pułapki, kiedy ta się aktywuje.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"ptBR": "Inimigos são puxados para a Armadilha da Morte quando ela é ativada.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"ruRU": "При срабатывании \"Смертоносная ловушка\" притягивает противников.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"zhCN": "索命陷阱激活时会将敌人拖拽至陷阱当中。\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown."
},
		id: 109,
		maxPoints: 1,
		x: -905.975,
		y: 1.305
	},
	"Supreme Death Trap": {
		baseSkill: "Death Trap",
		connections: [ "Prime Death Trap" ],
		description: `If Death Trap kills an enemy, its Cooldown is reduced by 10 seconds.

Tags: Ultimate, Trap, Damage, Shadow, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegene Todesfalle",
			"esES": "Trampa mortal suprema",
			"esMX": "Trampa Mortal Superior",
			"frFR": "Piège mortel suprême",
			"itIT": "Trappola Mortale Suprema",
			"jaJP": "デス・トラップ(高級)",
			"koKR": "최고의 죽음의 덫",
			"plPL": "Najwyższa Zabójcza Pułapka",
			"ptBR": "Armadilha da Morte Suprema",
			"ruRU": "Неотвратимая смертоносная ловушка",
			"zhCN": "至极索命陷阱"
},
		descriptionLocalized: {
			"deDE": "Wenn Todesfalle einen Gegner tötet, reduziert sich die Abklingzeit um 10 Sek.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"esES": "Si Trampa mortal mata a un enemigo, su tiempo de reutilización se reduce 10 s.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"esMX": "Si Trampa Mortal elimina a un enemigo, su recuperación se reduce 10 segundos.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"frFR": "Si Piège mortel tue une cible, son temps de recharge est réduit de 10 s.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"itIT": "Se Trappola Mortale uccide un nemico, il suo tempo di recupero si riduce di 10 s.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"jaJP": "〈デス・トラップ〉が敵1体を倒すと、クールダウンが10秒短縮される。\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"koKR": "죽음의 덫으로 적을 처치하면 재사용 대기시간이 10초 감소합니다.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"plPL": "Jeśli Zabójcza Pułapka zabije wroga, jej czas odnowienia zostaje skrócony o 10 sek.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"ptBR": "Se Armadilha da Morte matar um inimigo, a recarga é reduzida em 10 segundos.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"ruRU": "Когда \"Смертоносная ловушка\" убивает противника, ее время восстановления сокращается на 10 сек.\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown.",
			"zhCN": "如果索命陷阱消灭一名敌人,其冷却时间缩短10秒。\n\nTags: Ultimate, Trap, Damage, Shadow, Cooldown."
},
		id: 110,
		maxPoints: 1,
		x: -1195.38,
		y: 1.185
	},
	"Trap Mastery": {
		connections: [ "Ultimate" ],
		description: `When Poison Trap or Death Trap activates, you gain +{4/8/12/16/20/24/28/32/36/40}% increased Critical Strike Chance against Vulnerable and Crowd Controlled enemies for 4 seconds.

Tags: Vulnerable, Crowd Control, Critical Strikes, Trap.`,
		nameLocalized: {
			"deDE": "Fallenbeherrschung",
			"esES": "Dominio de las trampas",
			"esMX": "Maestría en Trampas",
			"frFR": "Maîtrise des pièges",
			"itIT": "Padronanza delle Trappole",
			"jaJP": "罠の達人",
			"koKR": "덫 숙련",
			"plPL": "Mistrzostwo Pułapek",
			"ptBR": "Maestria em Armadilhas",
			"ruRU": "Мастер ловушек",
			"zhCN": "陷阱精通"
},
		descriptionLocalized: {
			"deDE": "Wenn Giftfalle oder Todesfalle aktiviert werden, wird Eure kritische Trefferchance gegen Gegner, die verwundbar sind oder unter Kontrollverlusteffekten leiden, 4 Sek. lang um +{4/8/12/16/20/24/28/32/36/40}% erhöht.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"esES": "Cuando Trampa de veneno o Trampa mortal se activan, obtienes un +{4/8/12/16/20/24/28/32/36/40}% más de probabilidad de golpe crítico contra enemigos vulnerables y afectados por control de masas durante 4 s.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"esMX": "Cuando Trampa Venenosa o Trampa Mortal se activan, obtienes un +{4/8/12/16/20/24/28/32/36/40}% más de probabilidad de golpe crítico contra enemigos vulnerables y bajo los efectos de control de multitudes durante 4 segundos.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"frFR": "À l'activation de Piège de poison ou de Piège mortel, vos chances d'infliger un coup critique aux adversaires vulnérables ou subissant un effet de perte de contrôle sont augmentées de +{4/8/12/16/20/24/28/32/36/40}% pendant 4 s.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"itIT": "Quando Trappola Avvelenata o Trappola Mortale si attivano, la probabilità di critico contro i nemici vulnerabili o sotto un effetto di controllo delle creature aumenta del +{4/8/12/16/20/24/28/32/36/40}% per 4 s.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"jaJP": "〈ポイズン・トラップ〉または〈デス・トラップ〉が起動すると、脆弱状態または操作障害効果を受けた敵に対するクリティカルヒット率が4秒間にわたり+{4/8/12/16/20/24/28/32/36/40}%上昇する。\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"koKR": "맹독 덫이나 죽음의 덫이 발동하면 4초 동안 취약 또는 군중 제어 상태의 적에 대한 극대화 확률이 +{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"plPL": "Kiedy aktywuje się Trująca Pułapka lub Zabójcza Pułapka, przez 4 sek. szansa na trafienie krytyczne we wrogów odsłoniętych lub o ograniczonej kontroli jest zwiększona o +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"ptBR": "Quando Armadilha Venenosa ou Armadilha da Morte é ativada, você recebe +{4/8/12/16/20/24/28/32/36/40}% de chance de acerto crítico aumentada contra inimigos vulneráveis e sob controle de grupo por 4 segundos.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"ruRU": "При срабатывании \"Ловушки с ядом\" или \"Смертоносной ловушки\" вероятность критического удара повышается на +{4/8/12/16/20/24/28/32/36/40}% на 4 сек. в бою с уязвимыми противниками и целями под действием эффектов контроля.\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap.",
			"zhCN": "剧毒陷阱或索命陷阱激活时,你对处于易伤状态和被群控的敌人造成暴击的几率提高+{4/8/12/16/20/24/28/32/36/40}%,持续4秒。\n\nTags: Vulnerable, Crowd Control, Critical Strikes, Trap."
},
		id: 111,
		maxPoints: 3,
		x: -538.46,
		y: -182.505
	},
	"Rain of Arrows": {
		connections: [ "Prime Rain of Arrows", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Arrows rain down over a large area 2 times, each wave dealing 100% damage.

Tags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Pfeilhagel",
			"esES": "Lluvia de flechas",
			"esMX": "Lluvia de Flechas",
			"frFR": "Pluie de flèches",
			"itIT": "Pioggia di Frecce",
			"jaJP": "矢の雨",
			"koKR": "화살비",
			"plPL": "Grad Strzał",
			"ptBR": "Chuva de Flechas",
			"ruRU": "Град стрел",
			"zhCN": "箭雨"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {#} Sek.\nGlückstrefferchance: {#}%\nPfeile regnen 2-mal auf ein großes Gebiet herab, wobei jede Welle 100% Schaden verursacht.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"esES": "Tiempo de reutilización: {#} s\nProbabilidad de golpe de suerte: {#}%\nCae una lluvia de flechas en una gran zona 2 veces. Cada oleada inflige 100% de daño.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"esMX": "Recuperación: {#} segundos\nProbabilidad de golpe afortunado: {#}%\nHaces llover flechas sobre un área grande 2 veces, y cada ola inflige 100% de daño.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"frFR": "Temps de recharge : {#} s\nChances de coup de chance : {#}%\nVous faites pleuvoir des flèches sur une large zone à 2 reprises, chaque vague infligeant 100% points de dégâts.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"itIT": "Tempo di recupero: {#} s\nProbabilità di colpo fortunato: {#}%\nFrecce piovono su un'ampia area per 2 volte, infliggendo 100% danni a ogni ondata.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"jaJP": "クールダウン: {#}秒\n幸運の一撃発生率: {#}%\n広範囲に矢の雨が2回にわたって降り注ぎ、1回ごとに100%のダメージを与える。\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"koKR": "재사용 대기시간: {#}초\n행운의 적중 확률: {#}%\n넓은 지역에 화살비가 2번 쏟아져, 각각 100%의 피해를 줍니다.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"plPL": "Czas odnowienia: {#} sek.\nSzansa na szczęśliwy traf: {#}%\nStrzały spadają falami na duży obszar 2 razy, a każda fala zadaje 100% pkt. obrażeń.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"ptBR": "Recarga: {#} segundos\nChance de Golpe de Sorte: {#}%\nFlechas são disparadas em uma grande área 2 vezes. Cada onda causa 100% de dano.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"ruRU": "Время восстановления: {#} сек.\nВероятность удачного удара: {#}%.\nГрад стрел поражает широкую область 2 залпами, которые наносят по 100% ед. урона.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"zhCN": "冷却时间:{#}秒\n幸运一击几率:{#}%\n箭矢如雨一般在大范围内落下2次,每波造成100%点伤害。\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown."
},
		id: 112,
		maxPoints: 1,
		values: [ "60", "20" ],
		x: 5.58,
		y: 290.575
	},
	"Prime Rain of Arrows": {
		baseSkill: "Rain of Arrows",
		connections: [ "Rain of Arrows", "Supreme Rain of Arrows" ],
		description: `Imbuement Skill effects applied by Rain of Arrows have x20% increased potency.

Tags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Oberster Pfeilhagel",
			"esES": "Lluvia de flechas mayor",
			"esMX": "Lluvia de Flechas Suprema",
			"frFR": "Pluie de flèches primordiale",
			"itIT": "Pioggia di Frecce Pregiata",
			"jaJP": "矢の雨(上級)",
			"koKR": "극상의 화살비",
			"plPL": "Większy Grad Strzał",
			"ptBR": "Chuva de Flechas Primordial",
			"ruRU": "Первородный град стрел",
			"zhCN": "至尊箭雨"
},
		descriptionLocalized: {
			"deDE": "Die Wirksamkeit von Infusionseffekten, die von Pfeilhagel erzeugt wurden, ist um x20% erhöht.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"esES": "Los efectos de las habilidades de imbuición aplicados por Lluvia de flechas tienen un x20% más de potencia.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"esMX": "Los efectos de las habilidades de Imbuición aplicados por Lluvia de Flechas tienen un x20% más de potencia.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"frFR": "Les effets des compétences d'imprégnation appliqués par Pluie de flèches sont x20% plus puissants.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"itIT": "Gli effetti delle abilità di infusione inflitti da Pioggia di Frecce hanno il x20% di potenza aggiuntiva.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"jaJP": "〈矢の雨〉を通じて適用される注入スキルの効果がx20%上昇する。\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"koKR": "화살비가 적용한 주입 기술의 효과가 x20% 강해집니다.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"plPL": "Efekty umiejętności Nasycenia nałożone przez Grad Strzał są silniejsze o x20%.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"ptBR": "Efeitos de habilidades de Imbuição aplicados por Chuva de Flechas têm 20% de potência aumentada.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"ruRU": "Навыки категории \"Насыщение\", активированные \"Градом стрел\", усиливаются на x20%.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"zhCN": "箭雨施加的灌注技能效果提高x20%。\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown."
},
		id: 113,
		maxPoints: 1,
		x: 9.95,
		y: 488.685
	},
	"Supreme Rain of Arrows": {
		baseSkill: "Rain of Arrows",
		connections: [ "Prime Rain of Arrows" ],
		description: `Rain of Arrows' second wave Knocks Down enemies for 3 seconds.

Tags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegener Pfeilhagel",
			"esES": "Lluvia de flechas suprema",
			"esMX": "Lluvia de Flechas Superior",
			"frFR": "Pluie de flèches suprême",
			"itIT": "Pioggia di Frecce Suprema",
			"jaJP": "矢の雨(高級)",
			"koKR": "최고의 화살비",
			"plPL": "Najwyższy Grad Strzał",
			"ptBR": "Chuva de Flechas Suprema",
			"ruRU": "Неотвратимый град стрел",
			"zhCN": "至极箭雨"
},
		descriptionLocalized: {
			"deDE": "Die zweite Welle von Pfeilhagel schlägt Gegner 3 Sek. lang nieder.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"esES": "La segunda oleada de Lluvia de flechas derriba a los enemigos durante 3 s.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"esMX": "La segunda ola de Lluvia de Flechas derriba a los enemigos durante 3 segundos.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"frFR": "La seconde vague de Pluie de flèches renverse les adversaires pendant 3 s.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"itIT": "La seconda ondata di Pioggia di Frecce fa cadere a terra i nemici per 3 s.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"jaJP": "〈矢の雨〉の第二波が敵を3秒間ノックダウンする。\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"koKR": "화살비의 두 번째 사격이 적을 3초 동안 넘어뜨립니다.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"plPL": "Druga fala Gradu Strzał powala wrogów na 3 sek.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"ptBR": "A segunda onda de Chuva de Flechas nocauteia inimigos por 3 segundos.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"ruRU": "Второй залп \"Града стрел\" сбивает противников с ног на 3 сек.\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.",
			"zhCN": "箭雨的第二波攻击会击倒敌人,持续3秒。\n\nTags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown."
},
		id: 114,
		maxPoints: 1,
		x: 14.99,
		y: 646.1
	},
	"Adrenaline Rush": {
		connections: [ "Impetus", "Haste", "Ultimate" ],
		description: `While moving, you gain x{5/10/15/20/25/30/35/40/45/50}% increased Energy Regeneration.

Tags: Energy, Movement.`,
		nameLocalized: {
			"deDE": "Adrenalinrausch",
			"esES": "Torrente de adrenalina",
			"esMX": "Descarga de Adrenalina",
			"frFR": "Montée d'adrénaline",
			"itIT": "Scarica di Adrenalina",
			"jaJP": "アドレナリン・ラッシュ",
			"koKR": "아드레날린 촉진",
			"plPL": "Przypływ Adrenaliny",
			"ptBR": "Pico de Adrenalina",
			"ruRU": "Выброс адреналина",
			"zhCN": "狂血奔涌"
},
		descriptionLocalized: {
			"deDE": "In Bewegung ist eure Energieregeneration um x{5/10/15/20/25/30/35/40/45/50}% erhöht.\n\nTags: Energy, Movement.",
			"esES": "Al moverte, obtienes un x{5/10/15/20/25/30/35/40/45/50}% más de regeneración de energía.\n\nTags: Energy, Movement.",
			"esMX": "Mientras estás en movimiento, obtienes un x{5/10/15/20/25/30/35/40/45/50}% más de regeneración de Energía.\n\nTags: Energy, Movement.",
			"frFR": "Lorsque vous vous déplacez, votre régénération d'énergie est augmentée de x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Energy, Movement.",
			"itIT": "Quando ti muovi, la tua rigenerazione di energia aumenta del x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Energy, Movement.",
			"jaJP": "移動中はエネルギー回復量がx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: Energy, Movement.",
			"koKR": "이동하는 동안 기력 재생이 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Energy, Movement.",
			"plPL": "Podczas ruchu twoja regeneracja energii jest zwiększona o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Energy, Movement.",
			"ptBR": "Enquanto se move, você recebe {5/10/15/20/25/30/35/40/45/50}% de regeneração de energia aumentada.\n\nTags: Energy, Movement.",
			"ruRU": "Во время движения вы восстанавливаете энергию на x{5/10/15/20/25/30/35/40/45/50}% быстрее.\n\nTags: Energy, Movement.",
			"zhCN": "移动时,你的能量回复速度提高x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: Energy, Movement."
},
		id: 115,
		maxPoints: 3,
		x: -325.67,
		y: 334.9
	},
	"Impetus": {
		connections: [ "Adrenaline Rush" ],
		description: `After moving 15 meters, your next attack deals x{7/14/21/28/35/42/49/56/63/70}% increased damage.

Tags: Damage, Movement.`,
		nameLocalized: {
			"deDE": "Anlauf",
			"esES": "Ímpetu",
			"esMX": "Ímpetu",
			"frFR": "Stimulus",
			"itIT": "Impetus",
			"jaJP": "はずみ",
			"koKR": "자극",
			"plPL": "Rozmach",
			"ptBR": "Ímpeto",
			"ruRU": "Сила движения",
			"zhCN": "动量充沛"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr Euch 15 Meter bewegt habt, verursacht Euer nächster Angriff x{7/14/21/28/35/42/49/56/63/70}% mehr Schaden.\n\nTags: Damage, Movement.",
			"esES": "Tras desplazarte 15 m, tu siguiente ataque inflige un x{7/14/21/28/35/42/49/56/63/70}% más de daño.\n\nTags: Damage, Movement.",
			"esMX": "Después de moverte 15 metros, tu siguiente ataque inflige un x{7/14/21/28/35/42/49/56/63/70}% más de daño.\n\nTags: Damage, Movement.",
			"frFR": "Après avoir effectué un déplacement de 15 m, votre prochaine attaque inflige x{7/14/21/28/35/42/49/56/63/70}% de dégâts supplémentaires.\n\nTags: Damage, Movement.",
			"itIT": "Dopo esserti spostato di 15 m, il tuo successivo attacco infligge il x{7/14/21/28/35/42/49/56/63/70}% di danni aggiuntivi.\n\nTags: Damage, Movement.",
			"jaJP": "15メートル移動すると、次の攻撃で与えるダメージがx{7/14/21/28/35/42/49/56/63/70}%増加する。\n\nTags: Damage, Movement.",
			"koKR": "15미터 이동한 후 다음 공격으로 주는 피해가 x{7/14/21/28/35/42/49/56/63/70}% 증가합니다.\n\nTags: Damage, Movement.",
			"plPL": "Po przejściu 15 m twój następny atak zadaje obrażenia zwiększone o x{7/14/21/28/35/42/49/56/63/70}%.\n\nTags: Damage, Movement.",
			"ptBR": "Depois de percorrer 15 metros, seu próximo ataque causa {7/14/21/28/35/42/49/56/63/70}% de dano aumentado.\n\nTags: Damage, Movement.",
			"ruRU": "После того как вы перемещаетесь на 15 м, ваша следующая атака наносит на x{7/14/21/28/35/42/49/56/63/70}% больше урона.\n\nTags: Damage, Movement.",
			"zhCN": "移动15米后,你的下一次攻击造成的伤害提高x{7/14/21/28/35/42/49/56/63/70}%。\n\nTags: Damage, Movement."
},
		id: 116,
		maxPoints: 3,
		x: -570.38,
		y: 507.995
	},
	"Haste": {
		connections: [ "Adrenaline Rush" ],
		description: `While at or above 50% maximum Energy, gain +{5/10/15/20/25/30/35/40/45/50}% increased Movement Speed. While below 50% maximum Energy, gain +{5/10/15/20/25/30/35/40/45/50}% increased Attack Speed.

Tags: Movement, Attack Speed, Energy.`,
		nameLocalized: {
			"deDE": "Hast",
			"esES": "Celeridad",
			"esMX": "Apremio",
			"frFR": "Hâte",
			"itIT": "Celerità",
			"jaJP": "迅速",
			"koKR": "신속",
			"plPL": "Pośpiech",
			"ptBR": "Agilidade",
			"ruRU": "Спешка",
			"zhCN": "急速"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mindestens 50% maximale Energie habt, ist Eure Bewegungsgeschwindigkeit um +{5/10/15/20/25/30/35/40/45/50}% erhöht. Wenn Ihr weniger als 50% maximale Energie habt, ist Eure Angriffsgeschwindigkeit um +{5/10/15/20/25/30/35/40/45/50}% erhöht.\n\nTags: Movement, Attack Speed, Energy.",
			"esES": "Mientras tengas un 50% de energía o más, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de velocidad de movimiento. Mientras tengas menos de un 50% de la energía máxima, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de velocidad de ataque.\n\nTags: Movement, Attack Speed, Energy.",
			"esMX": "Mientras tienes un 50% de la Energía máxima o más, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de velocidad de movimiento. Mientras tienes menos del 50% de la Energía máxima, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de velocidad de ataque.\n\nTags: Movement, Attack Speed, Energy.",
			"frFR": "Lorsque vous avez au moins 50% de votre énergie maximale, votre vitesse de déplacement est augmentée de +{5/10/15/20/25/30/35/40/45/50}%. Lorsque vous avez moins de 50% de votre énergie maximale, votre vitesse d'attaque est augmentée de +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Movement, Attack Speed, Energy.",
			"itIT": "Quando hai almeno il 50% dell'energia massima, la tua velocità di movimento aumenta del +{5/10/15/20/25/30/35/40/45/50}%. Quando hai meno del 50% dell'energia massima, la tua velocità d'attacco aumenta del +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Movement, Attack Speed, Energy.",
			"jaJP": "エネルギーが最大値の50%以上ある場合、移動速度が+{5/10/15/20/25/30/35/40/45/50}%上昇する。エネルギーが最大値の50%未満の場合は、攻撃速度が+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: Movement, Attack Speed, Energy.",
			"koKR": "최대 기력이 50% 이상일 때 이동 속도가 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다. 최대 기력이 50% 미만일 때 공격 속도가 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: Movement, Attack Speed, Energy.",
			"plPL": "Kiedy masz co najmniej 50% maksymalnej energii, otrzymujesz premię +{5/10/15/20/25/30/35/40/45/50}% do szybkości ruchu. Kiedy masz mniej niż 50% maksymalnej energii, zyskujesz premię +{5/10/15/20/25/30/35/40/45/50}% do szybkości ataku.\n\nTags: Movement, Attack Speed, Energy.",
			"ptBR": "Enquanto estiver com 50% ou mais de energia máxima, recebe +{5/10/15/20/25/30/35/40/45/50}% de velocidade de movimento aumentada. Enquanto estiver abaixo de 50% de energia máxima, recebe +{5/10/15/20/25/30/35/40/45/50}% de velocidade de ataque aumentada.\n\nTags: Movement, Attack Speed, Energy.",
			"ruRU": "Пока ваш уровень энергии равен или превышает 50% от максимального, скорость передвижения повышается на +{5/10/15/20/25/30/35/40/45/50}%. Пока ваш уровень энергии ниже 50% максимального, скорость атаки повышается на +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Movement, Attack Speed, Energy.",
			"zhCN": "能量在50%及以上时,移动速度提高+{5/10/15/20/25/30/35/40/45/50}%。在50%以下时,攻击速度提高+{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: Movement, Attack Speed, Energy."
},
		id: 117,
		maxPoints: 3,
		x: -323.665,
		y: 509.91
	},
};

rogueData["Key Passive"] = {
	"Momentum": {
		connections: [ "Key Passive" ],
		description: `Cutthroat Skills grant a stack of Momentum for 8 seconds if they either:
• Hit a Stunned, Dazed, or Frozen enemy
• Hit any enemy from behind

While at 3 stacks of Momentum you gain:
• 20% increased Damage Reduction
• x30% increased Energy Regeneration
• +15% increased Movement Speed

Tags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.`,
		nameLocalized: {
			"deDE": "Schwung",
			"esES": "Impulso",
			"esMX": "Impulso",
			"frFR": "Lancée",
			"itIT": "Impeto",
			"jaJP": "機運",
			"koKR": "여세",
			"plPL": "Impet",
			"ptBR": "Impulsão",
			"ruRU": "Импульс",
			"zhCN": "乘胜追击"
},
		descriptionLocalized: {
			"deDE": "Meuchelfertigkeiten verleihen 8 Sek. lang einen Stapel von Schwung, wenn sie:\n• einen betäubten, benommenen oder eingefrorenen Gegner treffen\n• einen Gegner von hinten treffen\n\nWährend Ihr über 3 Stapel von Schwung verfügt, erhaltet Ihr:\n• 20% mehr Schadensreduktion\n• x30% mehr Energieregeneration\n• +15% mehr Bewegungsgeschwindigkeit\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"esES": "Las habilidades de degollador otorgan una acumulación de Impulso durante 8 s si:\n• Golpean a un enemigo aturdido, atontado o congelado, o;\n• Golpean a un enemigo por la espalda\n\nMientras tienes 3 acumulaciones de Impulso, obtienes:\n• Un 20% más de reducción de daño\n• Un x30% más de regeneración de energía\n• Un +15% más de velocidad de movimiento\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"esMX": "Las habilidades de Degollador otorgan una acumulación de Impulso durante 8 segundos si:\n• Golpean a un enemigo aturdido, atontado o congelado\n• Golpean a un enemigo por la espalda\n\nMientras tienes 3 acumulaciones de Impulso, obtienes:\n• un 20% más de reducción de daño\n• un x30% más de regeneración de Energía\n• un +15% más de velocidad de movimiento\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"frFR": "Les compétences de coupe-jarret vous confèrent un cumul d'Inertie pendant 8 s si elles :\n• touchent une cible étourdie, hébétée ou gelée ;\n• touchent une cible par derrière.\n\nTant que vous avez 3 cumuls d'Inertie, vous bénéficiez de :\n• 20% de réduction des dégâts supplémentaire ;\n• x30% de régénération d'énergie supplémentaire ;\n• +15% de vitesse de déplacement supplémentaire.\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"itIT": "Le tue abilità da sgozzatore forniscono un accumulo di Impeto per 8 s se:\n• Colpiscono un nemico stordito, frastornato o congelato\n• Colpiscono un nemico alle spalle\n\nQuando hai3 accumuli di Impeto ottieni:\n• Una riduzione dei danni superiore del 20%\n• Una rigenerazione dell'energia superiore del x30%\n• Una velocità di movimento superiore del +15%\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"jaJP": "喉かきスキル使用時、次の条件に当てはまる場合に8秒間にわたり機運を獲得する:\n• スタン、眩暈、または 凍結状態の敵に命中する\n• 敵の背後から命中させる\n\n機運が3蓄積している場合、以下を獲得する:\n• ダメージ軽減率が20%増加\n• エネルギー回復量がx30%増加\n• 移動速度が+15%増加\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"koKR": "암살 기술을 사용할 때 다음과 같은 경우 8초 동안 여세가 중첩됩니다:\n• 기절, 멍해짐, 빙결 상태의 적에게 적중\n• 후방에서 적에게 적중\n\n여세 3중첩 시 다음 효과를 얻습니다:\n• 피해 감소 20% 증가\n• 기력 재생 x30% 증가\n• 이동 속도 +15% 증가\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"plPL": "Umiejętności Napaści zapewniają poziom kumulacji Impetu na 8 sek., jeśli:\n• trafią ogłuszonego, oszołomionego lub zamrożonego wroga; albo\n• trafią dowolnego wroga od tyłu.\n\nPrzy 3 poziomach kumulacji Impetu zyskujesz:\n• premię 20% do redukcji obrażeń;\n• premię x30% do regeneracji energii;\n• premię +15% do szybkości ruchu.\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"ptBR": "Habilidades de Degola concedem uma aplicação de Impulsão por 8 segundos se:\n• Atingirem um inimigo atordoado, sob torpor ou congelado\n• Atingirem um inimigo por trás\n\nEnquanto estiver com 3 aplicações de Impulsão, você recebe:\n• 20% de redução de dano aumentada\n• 30% de regeneração de energia aumentada\n• +15% de velocidade de movimento aumentada\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"ruRU": "Навыки головореза на 8 сек. дают эффект \"Импульса\", если:\n• Они поражают оглушенного, замороженного противника или цель с головокружением\n• Наносят противнику удар сзади\n\nКогда вы накапливаете 3 эффекта:эффектов \"Импульса\":\n• Получаемый урон уменьшается на 20%\n• Восстановление энергии ускоряется на x30%\n• Скорость передвижения повышается на +15%\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement.",
			"zhCN": "如果刺杀技能满足以下任意一个条件则获得一层乘胜追击,持续8秒:\n• 命中一个昏迷、眩晕或冻结的敌人\n• 从背后命中任意敌人\n\n达到3层乘胜追击时你获得以下效果:\n• 提高20%伤害减免\n• 提高x30%能量回复速度\n• 提高+15%移动速度\n\nTags: Frozen, Daze, Cutthroat, Crowd Control, Energy, Damage Reduction, Movement."
},
		id: 118,
		maxPoints: 1,
		x: -721.136,
		y: -1.72
	},
	"Close Quarters Combat": {
		connections: [ "Key Passive" ],
		description: `Damaging a Close enemy with Marksman or Cutthroat Skills each grant a +10% Attack Speed bonus for 8 seconds.

While both Attack Speed bonuses are active, you deal x20% increased damage against Crowd Controlled enemies.

Tags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.`,
		nameLocalized: {
			"deDE": "Auf engem Raum",
			"esES": "Combate cuerpo a cuerpo",
			"esMX": "Combate Cuerpo a Cuerpo",
			"frFR": "Corps à corps",
			"itIT": "Specializzazione: Pugnali",
			"jaJP": "近距離戦",
			"koKR": "백병전",
			"plPL": "Walka w Zwarciu",
			"ptBR": "Combate Próximo",
			"ruRU": "Ближний бой",
			"zhCN": "近身格斗"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner in der Nähe mit einer Präzisionsfertigkeit oder einer Meuchelfertigkeit Schaden zufügt, erhaltet Ihr 8 Sek. lang +10% mehr Angriffsgeschwindigkeit.\n\nSolange beide Angriffsgeschwindigkeitsboni aktiv sind, verursacht Ihr x20% mehr Schaden gegen Gegner, die unter Kontrollverlusteffekten leiden.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"esES": "Infligir daño a un enemigo cercano con habilidades de tirador o degollador otorga sendos bonus de velocidad de ataque de un +10% durante 8 s.\n\nMientras duran los dos bonus de velocidad de ataque, infliges un x20% más de daño contra enemigos afectados por control de masas.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"esMX": "Infligir daño a un enemigo cercano con habilidades de Tirador o de Degollador otorga un +10% de bonificación de velocidad de ataque durante 8 segundos.\n\nMientras ambas bonificaciones de velocidad de ataque están activas, infliges un x20% más de daño contra enemigos bajo los efectos de control de multitudes.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"frFR": "Infliger des dégâts à une cible à proximité avec des compétences de tir d'élite ou de coupe-jarret vous confère un bonus à la vitesse d'attaque de +10% pendant 8 s.\n\nSi les deux bonus à la vitesse d'attaque sont actifs, vous infligez x20% de dégâts supplémentaires aux cibles subissant un effet de perte de contrôle.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"itIT": "Infliggere danni a un nemico vicino con abilità da tiratore scelto o da sgozzatore ti fornisce il +10% di velocità d'attacco aggiuntiva per 8 s.\n\nFinché entrambi gli aumenti alla velocità d'attacco sono attivi, infliggi il x20% di danni aggiuntivi contro i nemici sotto un effetto di controllo delle creature.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"jaJP": "付近の敵1体に射手か喉かきスキルでダメージを与えると、攻撃速度が各スキルごとに8秒間にわたり+10%上昇する。\n\n両方の攻撃速度ボーナスが発動している間、操作障害効果を受けた敵に与えるダメージがx20%増加する。\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"koKR": "명사수 또는 암살 기술로 근거리 적에게 피해를 주면 8초 동안 공격 속도가 +10% 증가합니다.\n\n공격 속도 증가 효과가 둘 다 활성화되어 있는 동안 군중 제어 상태의 적에게 주는 피해가 x20% 증가합니다.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"plPL": "Zadawanie obrażeń pobliskiemu celowi przy użyciu umiejętności Strzelectwa lub Napaści zapewnia premię +10% do szybkości ataku na 8 sek.\n\nKiedy obie te premie do szybkości ataku są aktywne, zadajesz wrogom o ograniczonej kontroli obrażenia zwiększone o x20%.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"ptBR": "Causar dano a um inimigo com habilidades de Precisão ou Degola concede +10% de bônus de velocidade de ataque por 8 segundos.\n\nEnquanto os dois bônus de velocidade de ataque estão ativos, você causa 20% de dano aumentado contra inimigos sob controle de grupo.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"ruRU": "Когда вы наносите урон противникам поблизости навыком стрелка или головореза, скорость атаки повышается на +10% на 8 сек. за оба типа навыка.\n\nКогда действуют оба бонуса, вы наносите на x20% больше урона целям под действием эффектов контроля.\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.",
			"zhCN": "使用神射手或刺杀技能对一名近距敌人造成伤害时,每种技能都会使攻击速度提高+10%,持续8秒。\n\n两种攻击速度加成同时激活时,你对被群控的敌人造成的伤害提高x20%。\n\nTags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage."
},
		id: 119,
		maxPoints: 1,
		x: -564.571,
		y: 251.22
	},
	"Victimize": {
		connections: [ "Key Passive" ],
		description: `Lucky Hit: Dealing direct damage to a Vulnerable enemy has up to a 30% chance to cause an explosion, dealing 23% of the original damage to them and surrounding enemies.

Tags: Vulnerable, Damage, Physical, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Bestrafen",
			"esES": "Victimizar",
			"esMX": "Victimizar",
			"frFR": "Victimisation",
			"itIT": "Perseguitare",
			"jaJP": "加害",
			"koKR": "희생",
			"plPL": "Krzywda",
			"ptBR": "Vitimizar",
			"ruRU": "Жестокая расправа",
			"zhCN": "迫害"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Wenn Ihr einem verwundbaren Gegner direkten Schaden zufügt, besteht eine Chance von bis zu 30%, eine Explosion zu verursachen, die diesem und Gegnern in der Nähe 23% des ursprünglichen Schadens zufügt.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"esES": "Golpe de suerte: Infligir daño directo a un enemigo vulnerable tiene hasta un 30% de probabilidad de provocar una explosión que inflige un 23% del daño original a él y a los enemigos cercanos.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"esMX": "Golpe afortunado: Infligir daño directo a un enemigo vulnerable tiene hasta un 30% de probabilidad de provocar una explosión, lo que inflige un 23% del daño original a ese enemigo y a los enemigos circundantes.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"frFR": "Coup de chance : infliger des dégâts directs à une cible vulnérable a jusqu'à 30% de chances de provoquer une explosion qui inflige 23% des dégâts initiaux à la cible et aux adversaires à proximité.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"itIT": "Colpo fortunato: i danni diretti inflitti a un nemico vulnerabile hanno fino al 30% di probabilità di causare un'esplosione che infligge il 23% dei danni originali a esso e ai nemici circostanti.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"jaJP": "幸運の一撃: 脆弱状態の敵に対する直接ダメージが最大30%の確率で爆発を起こし、元々のダメージの23%をその敵と付近の敵に与える。\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"koKR": "행운의 적중: 취약 상태의 적에게 직접 피해를 주면 최대 30% 확률로 폭발을 일으켜 대상과 주변 적들에게 원래 피해의 23%에 해당하는 피해를 줍니다.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"plPL": "Szczęśliwy traf: Zadanie bezpośrednich obrażeń odsłoniętemu wrogowi ma maksymalnie 30% szans na wywołanie eksplozji zadającej mu oraz pobliskim wrogom 23% pierwotnych obrażeń.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"ptBR": "Golpe de Sorte: Causar dano direto a um inimigo vulnerável tem até 30% de chance de provocar uma explosão, causando 23% do dano original a ele e a inimigos ao redor.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"ruRU": "Удачный удар: прямой урон уязвимому противнику с вероятностью до 30% вызывает взрыв, наносящий 23% изначального урона цели и окружающим противникам.\n\nTags: Vulnerable, Damage, Physical, Lucky Hit.",
			"zhCN": "幸运一击:对一名易伤状态下的敌人造成伤害最多有30%几率产生爆炸,对该敌人和其周围的敌人造成初始伤害的23%。\n\nTags: Vulnerable, Damage, Physical, Lucky Hit."
},
		id: 120,
		maxPoints: 1,
		x: 493.144,
		y: 247.36
	},
	"Exposure": {
		connections: [ "Key Passive" ],
		description: `Lucky Hit: Dealing direct damage to an enemy affected by a Trap Skill has up to a 25% chance to:
• Reduce the active Cooldowns of your Trap Skills by 20%
• Drop a cluster of exploding Stun Grenades that deal 40% total Physical damage and Stun enemies for 0.5 seconds

Tags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Belastung",
			"esES": "Exposición",
			"esMX": "Exposición",
			"frFR": "Exposition",
			"itIT": "Esposizione",
			"jaJP": "露呈",
			"koKR": "노출",
			"plPL": "Obnażenie",
			"ptBR": "Exposição",
			"ruRU": "Вредное воздействие",
			"zhCN": "暴露"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Wenn Ihr einem Gegner, der unter einer Fallenfertigkeit leidet, direkten Schaden zufügt, besteht eine Chance von 25%:\n• die aktiven Abklingzeiten Eurer Fallenfertigkeiten um 20% zu reduzieren\n• Blendgranaten zu hinterlassen, die explodieren und insgesamt 40% physischen Schaden verursachen und Gegner 0.5 Sek. lang betäuben\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"esES": "Golpe de suerte: Infligir daño directo a un enemigo afectado por una habilidad de trampa tiene hasta un 25% de probabilidad de:\n• Reducir un 20% los tiempos de reutilización activos de tus habilidades de trampa\n• Soltar un racimo de granadas aturdidoras que explotan, infligen un total de 40% daño físico y aturden a los enemigos durante 0.5 s\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"esMX": "Golpe afortunado: Al infligir daño directo a un enemigo afectado por una habilidad de Trampa, obtienes hasta un 25% de probabilidad de:\n• Reducir las recuperaciones activas de tus habilidades de Trampa un 20%\n• Soltar un cúmulo de Granadas Aturdidoras explosivas que infligen 40% de daño físico total y aturden a los enemigos durante 0.5 segundos.\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"frFR": "Coup de chance : infliger des dégâts directs à une cible affectée par une compétence de piège confère jusqu'à 25% de chances de :\n• réduire les temps de recharge actifs de vos compétences de piège de 20%\n• générer des grenades étourdissantes qui explosent en infligeant un total de 40% points de dégâts physiques et en étourdissant les cibles pendant 0.5 s.\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"itIT": "Colpo fortunato: i danni diretti inflitti ai nemici affetti da un'abilità di trappole hanno fino al 25% di probabilità di:\n• ridurre i tempi di recupero attivi delle tue abilità di trappole del 20%\n• rilasciare una salva di Bombe Stordenti che esplodono e infliggono 40% danni fisici totali e stordiscono i nemici per 0.5 s.\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"jaJP": "幸運の一撃: 罠スキルの影響を受けている敵に直接ダメージを与えると、最大25%の確率で以下の効果が発生する:\n• 自分の罠スキルの発生中のクールダウンが20%減少する。\n• 大量のスタン・グレネードを落として爆発させ、合計で40%の物理ダメージを与えて0.5秒間にわたりスタンさせる。\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"koKR": "행운의 적중: 덫 기술의 영향을 받는 적에게 직접 피해를 주면 최대 25% 확률로\n• 자신의 덫 기술의 재사용 대기시간이 20%초 감소합니다.\n• 섬광 수류탄 더미를 떨어뜨립니다. 수류탄은 폭발하며 총 40%의 물리 피해를 주고 적들을 0.5초 동안 기절시킵니다.\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"plPL": "Szczęśliwy traf: Zadawanie bezpośrednich obrażeń wrogom pod wpływem umiejętności Pułapek ma do 25% szans na:\n• skrócenie aktywnych czasów odnowienia umiejętności Pułapek o 20%\n• upuszczenie wiązki Granatów Ogłuszających, które wybuchają, zadając 40% całkowitych obrażeń Fizycznych i ogłuszając wrogów na 0.5 sek.\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"ptBR": "Golpe de Sorte: Causar dano direto a um inimigo afetado por uma habilidade de Armadilha tem até 25% de chance de:\n• Reduzir as recargas ativas das suas habilidades de Armadilha em 20%\n• Largar um conjunto de Granadas Atordoantes que explodem, causando 40% de dano físico total e atordoando inimigos por 0.5 segundos.\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"ruRU": "Удачный урон: когда вы наносите прямой урон противнику, находящемуся под действием ловушки, с вероятностью до 25% срабатывают эффекты:\n• Время восстановления ваших ловушек сокращается на 20%\n• Вы бросаете связку оглушающих гранат, наносящих 40% ед. физического урона и оглушающих противников на 0.5 сек.\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.",
			"zhCN": "幸运一击:对一名受陷阱技能影响的敌人造成直接伤害时,最多有25%几率\n• 使你的陷阱技能的剩余冷却时间缩短 20%秒\n• 留下一串会爆炸的眩晕手雷,造成总计40%点物理伤害并击晕敌人0.5秒。\n\nTags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit."
},
		id: 121,
		maxPoints: 1,
		x: 779.668,
		y: -2.585
	},
	"Precision": {
		connections: [ "Key Passive" ],
		description: `Critical Strikes with Marksman Skills grant you Precision. You gain x4% increased Critical Strike Damage per stack of Precision, up to a maximum of x20%.

When you reach maximum Precision, your next Marksman Skill is a guaranteed Critical Strike that deals x40% increased Critical Strike Damage, then consumes all stacks of Precision.

Tags: Marksman, Critical Strikes, Damage.`,
		nameLocalized: {
			"deDE": "Präzision",
			"esES": "Precisión",
			"esMX": "Precisión",
			"frFR": "Précision",
			"itIT": "Precisione",
			"jaJP": "精度",
			"koKR": "정밀도",
			"plPL": "Precyzja",
			"ptBR": "Precisão",
			"ruRU": "Точность",
			"zhCN": "精准"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Präzisionsfertigkeiten verleihen Euch Präzision. Ihr erhaltet x4% höheren kritischen Trefferschaden pro Stapel Präzision, bis maximal x20%.\n\nWenn Ihr maximale Präzision erreicht habt, landet Eure nächste Präzisionsfertigkeit garantiert einen kritischen Treffer, der x40% höheren kritischen Trefferschaden verursacht und alle Stapel Präzision verbraucht.\n\nTags: Marksman, Critical Strikes, Damage.",
			"esES": "Los golpes críticos con habilidades de tirador te otorgan precisión. Obtienes un x4% más de daño de golpe crítico por acumulación de precisión, hasta un máximo de un x20%.\n\nAl alcanzar el máximo de precisión, tu siguiente habilidad de tirador es un golpe crítico garantizado que inflige un x40% más de daño de golpe crítico y consume todas las acumulaciones de precisión.\n\nTags: Marksman, Critical Strikes, Damage.",
			"esMX": "Los golpes críticos con habilidades de Tirador te otorgan Precisión. Obtienes un x4% más de daño de golpe crítico por acumulación de Precisión, hasta un máximo del x20%.\n\nAl llegar a la Precisión máxima, tu siguiente habilidad de Tirador será un golpe crítico garantizado que inflige un x40% más de daño de golpe crítico, y luego consume todas las acumulaciones de Precisión.\n\nTags: Marksman, Critical Strikes, Damage.",
			"frFR": "Les coups critiques infligés avec des compétences de tir d'élite vous confèrent Précision. Vos dégâts critiques sont augmentés de x4% par cumul de Précision, jusqu'à un maximum de x20%.\n\nLorsque vous atteignez la limite maximale de Précision, votre prochaine compétence de tir d'élite est un coup critique garanti qui inflige x40% de dégâts critiques supplémentaires et consomme tous les cumuls de Précision.\n\nTags: Marksman, Critical Strikes, Damage.",
			"itIT": "I colpi critici con le abilità da tiratore scelto ti conferiscono precisione. Infliggi il x4% di danni critici aggiuntivi per ogni accumulo di precisione, fino a un massimo del x20%.\n\nQuando raggiungi il massimo di precisione, la tua successiva abilità da tiratore scelto è un colpo critico garantito che infligge il x40% di danni critici aggiuntivi e consuma tutti gli accumuli di precisione.\n\nTags: Marksman, Critical Strikes, Damage.",
			"jaJP": "射手スキルでクリティカルヒットを出すと、精度を獲得する。精度が1つ蓄積するごとに、クリティカルヒットダメージがx4%増加する。増加量は最大でx20%。\n\n精度が上限に達すると、次に使用した射手スキルが必ずクリティカルヒットとなりx40%増加したクリティカルヒットダメージを与えた後、蓄積していた精度をすべて消費する。\n\nTags: Marksman, Critical Strikes, Damage.",
			"koKR": "명사수 기술이 극대화 적중 시 자신의 정밀도가 증가합니다. 정밀도 중첩당 극대화 피해가 x4%만큼, 최대 x20%까지 증가합니다.\n\n정밀도가 최대에 도달하면, 다음 명사수 기술은 확정적으로 극대화 적중하여 x40% 증가한 극대화 피해를 주며, 이때 정밀도 중첩은 모두 소모됩니다.\n\nTags: Marksman, Critical Strikes, Damage.",
			"plPL": "Trafienia krytyczne przy pomocy umiejętności Strzelectwa zapewniają ci precyzję. Zyskujesz premię x4% do obrażeń od trafień krytycznych za każdy poziom kumulacji precyzji, maksymalnie do x20%.\n\nPo osiągnięciu maksymalnej precyzji twoja kolejna umiejętność Strzelectwa wywoła gwarantowane trafienie krytyczne i zada przy tym obrażenia zwiększone o x40%, a następnie pochłonie wszystkie poziomy kumulacji precyzji.\n\nTags: Marksman, Critical Strikes, Damage.",
			"ptBR": "Acertos críticos com habilidades de Precisão concedem Precisão. Você recebe 4% de dano de acerto crítico aumentado por aplicação de Precisão, até o máximo de 20%.\n\nQuando você atinge o máximo de Precisão, sua próxima habilidade de Precisão é um acerto crítico garantido que causa 40% de dano de acerto crítico aumentado e consome todas as aplicações de Precisão.\n\nTags: Marksman, Critical Strikes, Damage.",
			"ruRU": "Критические эффекты умений стрелка повышают вашу точность. За каждый эффект точности ваш критический урон увеличивается на x4% вплоть до x20%.\n\nКогда вы достигаете максимального показателя точности, ваше следующее умение стрелка гарантированно наносит критический урон, увеличенный на x40%. После этого все эффекты точности снимаются.\n\nTags: Marksman, Critical Strikes, Damage.",
			"zhCN": "神射手技能暴击时使你获得精准。每层精准使你的暴击伤害提高x4%,最多提高x20%。\n\n精准层数达到最大时,你的下一个神射手技能必定暴击并且造成的暴击伤害提高x40%,并消耗所有精准层数。\n\nTags: Marksman, Critical Strikes, Damage."
},
		id: 122,
		maxPoints: 1,
		x: 3.252,
		y: 383.425
	},
};

export { rogueData };