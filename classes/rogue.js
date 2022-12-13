let rogue = {};

rogue["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	"Core": {
		connections: [ "Agility" ],
		requiredPoints: 2,
		x: -3.916,
		y: 1197.495,
	},
	"Agility": {
		connections: [ "Subterfuge" ],
		requiredPoints: 6,
		x: -1376.251,
		y: 2265.48,
	},
	"Subterfuge": {
		connections: [ "Imbuements" ],
		requiredPoints: 11,
		x: 1378.264,
		y: 2263.735,
	},
	"Imbuements": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 1377.314,
		y: 3466.965,
	},
	"Ultimate": {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 4.677,
		y: 4334.23,
	},
	"Capstone": {
		requiredPoints: 33,
		x: -2.043,
		y: 5268.395,
	},
};

rogue["Basic"] = {
	"Blade Shift": {
		connections: [ "Enhanced Blade Shift", "Basic" ],
		damageType: 0,
		description: `Generate Combo Point: {#}
Lucky Hit Chance: {#}%
Quickly stab your victim for {#}% damage and shift, allowing you to move freely through enemies for {#} seconds.`,
		id: 0,
		maxPoints: 5,
		values: [ "1", "", "19", "3" ],
		x: -366.017,
		y: -99.39
	},
	"Enhanced Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Fundamental Blade Shift", "Blade Shift", "Primary Blade Shift" ],
		description: `Damaging an enemy with Blade Shift grants +{#}% Movement Speed while Blade Shift is active, up to +{#}%.`,
		id: 1,
		maxPoints: 1,
		values: [ "5", "20" ],
		x: -689.421,
		y: -194.4
	},
	"Fundamental Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `Moving through enemies while Blade Shift is active refreshes its duration. After moving through enemies {#} times, your next Blade Shift will Immobilize enemies for {#} seconds.`,
		id: 2,
		maxPoints: 1,
		values: [ "5", "2" ],
		x: -888.151,
		y: -351.975
	},
	"Primary Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `While Blade Shift is active you gain {#}% to all non-Physical Resistances and reduce the duration of Control Impairing Effects by {#}%.`,
		id: 3,
		maxPoints: 1,
		values: [ "15", "20" ],
		x: -1080.741,
		y: -206.28
	},
	"Invigorating Strike": {
		connections: [ "Enhanced Invigorating Strike", "Basic" ],
		damageType: 0,
		description: `Generate Combo Point: {#}
Lucky Hit Chance: {#}%
Melee attack an enemy, dealing {#}% damage and increasing Energy Regeneration by x{#}% for {#} seconds.`,
		id: 4,
		maxPoints: 5,
		values: [ "1", "", "29", "20", "3" ],
		x: -316.36,
		y: 145.92
	},
	"Enhanced Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Invigorating Strike", "Primary Invigorating Strike", "Fundamental Invigorating Strike" ],
		description: `Damaging a Crowd Controlled or Injured enemy with Invigorating Strike increases its Energy Regeneration bonus to x{#}%.`,
		id: 5,
		maxPoints: 1,
		values: [ "30" ],
		x: -600.261,
		y: 266.575
	},
	"Primary Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Invigorating Strike additionally grants +{#}% Lucky Hit Chance. Hitting a Crowd Controlled or Injured enemy increases this bonus to +{#}% Lucky Hit Chance.`,
		id: 7,
		maxPoints: 1,
		values: [ "8", "16" ],
		x: -968.641,
		y: 324.89
	},
	"Fundamental Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Hitting an enemy with Invigorating Strike while you are below {#}% Energy makes them Vulnerable for {#} seconds.`,
		id: 6,
		maxPoints: 1,
		values: [ "50", "3" ],
		x: -720.381,
		y: 461.245
	},
	"Puncture": {
		connections: [ "Enhanced Puncture", "Basic" ],
		damageType: 0,
		description: `Generate Combo Point: 1
Lucky Hit Chance: {#}%
Throw blades a short distance, dealing {#}% damage. Every {#}rd cast Slows enemies by {#}% for {#} seconds. Critical Strikes will always Slow.`,
		id: 8,
		maxPoints: 5,
		values: [ "", "27", "3", "20", "2" ],
		x: -0.181,
		y: -213.015
	},
	"Enhanced Puncture": {
		baseSkill: "Puncture",
		connections: [ "Puncture", "Fundamental Puncture", "Primary Puncture" ],
		description: `Gain {#} Energy when Puncture damages a Crowd Controlled enemy.`,
		id: 9,
		maxPoints: 1,
		values: [ "2" ],
		x: -1.778,
		y: -381.34
	},
	"Fundamental Puncture": {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Puncture now throws 3 blades in a spread, each dealing {#}% of its base damage. Hitting an enemy with at least 2 blades at once makes them Vulnerable for {#} seconds.`,
		id: 10,
		maxPoints: 1,
		values: [ "35", "2" ],
		x: 138.174,
		y: -551.08
	},
	"Primary Puncture": {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Every {#}rd cast of Puncture will also ricochet up to 2 times. Critical Strikes will always ricochet.`,
		id: 11,
		maxPoints: 1,
		values: [ "3" ],
		x: -152.237,
		y: -552.125
	},
	"Heartseeker": {
		connections: [ "Enhanced Heartseeker", "Basic" ],
		damageType: 0,
		description: `Generate Combo Point: {#}
Lucky Hit Chance: {#}%
Fire an arrow that seeks an enemy, dealing {#}% damage and increasing your Critical Strike Chance against them by +{#}% for {#} seconds, up to +{#}%.`,
		id: 12,
		maxPoints: 5,
		values: [ "1", "", "28", "3", "4", "15" ],
		x: 373.738,
		y: -97.06
	},
	"Enhanced Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Heartseeker", "Fundamental Heartseeker", "Primary Heartseeker" ],
		description: `When Heartseeker Critically Strikes, gain +{#}% Attack Speed for {#} seconds. Double this amount if the enemy is Vulnerable.`,
		id: 13,
		maxPoints: 1,
		values: [ "8", "4" ],
		x: 681.939,
		y: -189.45
	},
	"Fundamental Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `Heartseeker also increases the Critical Strike Damage the enemy takes by +{#}% for {#} seconds, up to +{#}%.`,
		id: 14,
		maxPoints: 1,
		values: [ "5", "4", "25" ],
		x: 845.544,
		y: -356.895
	},
	"Primary Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `Heartseeker ricochets to an additional enemy, dealing {#}% of the original damage.`,
		id: 15,
		maxPoints: 1,
		values: [ "30" ],
		x: 1040.879,
		y: -207.155
	},
	"Forceful Arrow": {
		connections: [ "Enhanced Forceful Arrow", "Basic" ],
		damageType: 0,
		description: `Generate Combo Point: {#}
Lucky Hit Chance: {#}%
Fire a powerful arrow at an enemy, dealing {#}% damage. Every 3rd cast makes the enemy Vulnerable for {#} seconds.`,
		id: 16,
		maxPoints: 5,
		values: [ "1", "", "25", "2" ],
		x: 315.613,
		y: 143.41
	},
	"Enhanced Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Forceful Arrow", "Fundamental Forceful Arrow", "Primary Forceful Arrow" ],
		description: `Every 3rd cast of Forceful Arrow additionally has a +{#}% increased Critical Strike Chance.`,
		id: 17,
		maxPoints: 1,
		values: [ "15" ],
		x: 590.964,
		y: 263.79
	},
	"Fundamental Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `Forceful Arrow Knocks Back the enemy if they are Close. If they collide with an enemy, both are Knocked Down for {#} seconds.`,
		id: 18,
		maxPoints: 1,
		values: [ "1.5" ],
		x: 718.164,
		y: 462.015
	},
	"Primary Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `Forceful Arrow pierces through Vulnerable enemies.`,
		id: 19,
		maxPoints: 1,
		x: 951.604,
		y: 324.58
	},
};

rogue["Core"] = {
	"Twisting Blades": {
		connections: [ "Enhanced Twisting Blades", "Core" ],
		damageType: 0,
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Impale an enemy with your blades, dealing {#}% damage and making them take x{#}% increased damage while impaled. After {#} seconds the blades return to you, piercing enemies for {#}% damage.

Combo Points increase damage and grant a Movement Speed bonus:
 1: {#}% damage, {#}% bonus
 2: {#}% damage, {#}% bonus
 3: {#}% damage, {#}% bonus`,
		id: 20,
		maxPoints: 5,
		values: [ "30", "", "57", "8", "1.5", "74", "", "", "", "", "", "" ],
		x: -249.907,
		y: -196.27
	},
	"Enhanced Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Twisting Blades", "Advanced Twisting Blades", "Improved Twisting Blades" ],
		description: `Twisting Blades deals x{#}% increased damage when returning.`,
		id: 21,
		maxPoints: 1,
		values: [ "30" ],
		x: -404.244,
		y: -347.93
	},
	"Advanced Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `When your Twisting Blades return, you gain +{#}% Cooldown Reduction per enemy they passed through for {#} seconds, up to +{#}%.`,
		id: 22,
		maxPoints: 1,
		values: [ "10", "5", "30" ],
		x: -728.365,
		y: -416.245
	},
	"Improved Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `Enemies are Immobilized while impaled with Twisting Blades.`,
		id: 23,
		maxPoints: 1,
		x: -439.554,
		y: -510.92
	},
	"Flurry": {
		connections: [ "Enhanced Flurry", "Core" ],
		damageType: 0,
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Unleash a flurry of stabs and slashes, dealing {#}% damage to enemies in front of you.

Combo Points increase damage and grant a +{#}% Attack Speed bonus:
 1: {#}% damage, {#} second bonus
 2: {#}% damage, {#} second bonus
 3: {#}% damage, {#} second bonus`,
		id: 24,
		maxPoints: 5,
		values: [ "25", "", "76", "", "", "", "", "", "", "" ],
		x: -383.598,
		y: 48
	},
	"Enhanced Flurry": {
		baseSkill: "Flurry",
		connections: [ "Flurry", "Improved Flurry", "Advanced Flurry" ],
		description: `Each time Flurry damages a Crowd Controlled or Vulnerable enemy, you are Healed for {#}% of your Maximum Life, up to {#}% per cast.`,
		id: 25,
		maxPoints: 1,
		values: [ "1", "12" ],
		x: -715.52,
		y: 91.45
	},
	"Improved Flurry": {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `If Flurry hits any Vulnerable enemy it will make all enemies hit by that cast Vulnerable for {#} seconds.`,
		id: 26,
		maxPoints: 1,
		values: [ "3" ],
		x: -1062.775,
		y: 63.965
	},
	"Advanced Flurry": {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `Evading through an enemy will cause your next Flurry to Stun enemies for {#} seconds.`,
		id: 27,
		maxPoints: 1,
		values: [ "2.5" ],
		x: -963.405,
		y: 227.51
	},
	"Penetrating Shot": {
		connections: [ "Enhanced Penetrating Shot", "Core" ],
		damageType: 0,
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Fire an arrow that pierces through all enemies in a line, dealing {#}% damage.

Combo Points increase damage and grant a chance to Knock Down for {#} seconds:
 1: {#}% damage, {#}% chance
 2: {#}% damage, {#}% chance
 3: {#}% damage, {#}% chance`,
		id: 28,
		maxPoints: 5,
		values: [ "35", "", "89", "", "", "", "", "", "", "" ],
		x: 2.441,
		y: 228
	},
	"Enhanced Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Penetrating Shot", "Advanced Penetrating Shot", "Improved Penetrating Shot" ],
		description: `Penetrating Shot deals x{#}% increased damage per enemy it pierces.`,
		id: 29,
		maxPoints: 1,
		values: [ "20" ],
		x: 3.779,
		y: 395.89
	},
	"Advanced Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `When cast with full Energy, Penetrating Shot will Slow all enemies it hits by {#}% for {#} seconds. Elite enemies will also be Knocked Down for {#} seconds.`,
		id: 30,
		maxPoints: 1,
		values: [ "50", "3", "1.5" ],
		x: -148.25,
		y: 548.025
	},
	"Improved Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `If Penetrating Shot damages at least {#} enemies, your next Penetrating Shot has a +{#}% increased Critical Strike Chance.`,
		id: 31,
		maxPoints: 1,
		values: [ "3", "20" ],
		x: 170.702,
		y: 550.185
	},
	"Rapid Fire": {
		connections: [ "Enhanced Rapid Fire", "Core" ],
		damageType: 0,
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Rapidly fire {#} arrows, each dealing {#}% damage.

Combo Points increase damage and arrows fired:
 1: {#}% damage, {#} arrows
 2: {#}% damage, {#} arrows
 3: {#}% damage, {#} arrows`,
		id: 32,
		maxPoints: 5,
		values: [ "25", "", "5", "20", "", "", "", "", "", "" ],
		x: 435.38,
		y: -0.04
	},
	"Enhanced Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Rapid Fire", "Advanced Rapid Fire", "Improved Rapid Fire" ],
		description: `Each subsequent arrow from Rapid Fire has +{#}% increased Critical Strike Chance, up to +{#}% for the {#}th arrow`,
		id: 33,
		maxPoints: 1,
		values: [ "5", "25", "5" ],
		x: 783.72,
		y: -0.2
	},
	"Advanced Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Rapid Fire deals x{#}% increased Critical Strike Damage for {#} seconds after you Evade.`,
		id: 34,
		maxPoints: 1,
		values: [ "30", "3" ],
		x: 1135.51,
		y: 81.74
	},
	"Improved Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Gain {#} Energy per cast of Rapid Fire when it damages a Vulnerable enemy.`,
		id: 35,
		maxPoints: 1,
		values: [ "15" ],
		x: 1129.825,
		y: -80.86
	},
	"Barrage": {
		connections: [ "Enhanced Barrage", "Core" ],
		damageType: 0,
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Unleash a barrage of {#} arrows that expands outwards, each dealing {#}% damage. Each arrow has a {#}% chance to ricochet off an enemy up to {#} time. Ricochets deal {#}% of the arrow's base damage.

Combo Points increase damage and arrows fired:
 1: {#}% damage, {#} arrows
 2: {#}% damage, {#} arrows
 3: {#}% damage, {#} arrows`,
		id: 36,
		maxPoints: 5,
		values: [ "30", "", "5", "26", "20", "1", "40", "", "", "", "", "", "" ],
		x: 233.866,
		y: -190.505
	},
	"Enhanced Barrage": {
		baseSkill: "Barrage",
		connections: [ "Barrage", "Advanced Barrage", "Improved Barrage" ],
		description: `Barrage's ricochet chance is increased to 100% for arrows that damage a Vulnerable enemy or Critically Strike any enemy.`,
		id: 37,
		maxPoints: 1,
		x: 415.264,
		y: -343.385
	},
	"Advanced Barrage": {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Whenever a single cast of Barrage ricochets at least {#} times, your next cast gains +{#}% increased Critical Strike Chance.`,
		id: 38,
		maxPoints: 1,
		values: [ "4", "20" ],
		x: 733.885,
		y: -425.085
	},
	"Improved Barrage": {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Every 3rd cast of Barrage makes enemies Vulnerable for {#} seconds.`,
		id: 39,
		maxPoints: 1,
		values: [ "2" ],
		x: 436.453,
		y: -512.535
	},
	"Sturdy": {
		connections: [ "Core", "Siphoning Strikes" ],
		description: `You gain x{#}% Close Damage Reduction.`,
		id: 40,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -629.025,
		y: -114.855
	},
	"Siphoning Strikes": {
		connections: [ "Sturdy" ],
		description: `Heal for {#}% of your Maximum Life when you Critically Strike Close enemies.`,
		id: 41,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: -1016.41,
		y: -186.075
	},
	"Stutter Step": {
		connections: [ "Core" ],
		description: `Critically Striking an enemy grants +{#}% Movement Speed for {#} seconds.`,
		id: 42,
		maxPoints: 3,
		values: [ "{5/10/15}", "4" ],
		x: 429.879,
		y: 223.895
	},
};

rogue["Agility"] = {
	"Shadow Step": {
		connections: [ "Enhanced Shadow Step", "Agility" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Become Unstoppable and quickly move through the shadows to stab your victim from behind for {#}% damage. Gain {#}% increased Movement Speed for {#} seconds afterwards.`,
		id: 43,
		maxPoints: 5,
		values: [ "9.0", "", "91", "50", "2" ],
		x: 4.215,
		y: -250.75
	},
	"Enhanced Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Shadow Step", "Methodical Shadow Step", "Disciplined Shadow Step" ],
		description: `Damaging an enemy with Shadow Step increases your Critical Strike Chance against them by +{#}% for {#} seconds.`,
		id: 44,
		maxPoints: 1,
		values: [ "8", "3" ],
		x: 3.415,
		y: -425.265
	},
	"Methodical Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Enemies damaged by Shadow Step are Immobilized for {#} seconds.`,
		id: 45,
		maxPoints: 1,
		values: [ "2" ],
		x: -151.635,
		y: -562.315
	},
	"Disciplined Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Shadow Step's Cooldown is reduced by {#} seconds when it damages an enemy you haven't dealt direct damage to in the last {#} seconds.`,
		id: 46,
		maxPoints: 1,
		values: [ "3", "4" ],
		x: 156.445,
		y: -567.315
	},
	"Dash": {
		connections: [ "Enhanced Dash", "Agility" ],
		damageType: 0,
		description: `Charges: {#}
Charge Cooldown: {#} seconds 
Lucky Hit Chance: {#}%
Dash forward and slash enemies for {#}% damage.`,
		id: 47,
		maxPoints: 5,
		values: [ "2", "10.0", "", "47" ],
		x: -440.17,
		y: 1.75
	},
	"Enhanced Dash": {
		baseSkill: "Dash",
		connections: [ "Dash", "Methodical Dash", "Disciplined Dash" ],
		description: `Enemies damaged by Dash take x{#}% increased Critical Strike Damage for {#} seconds.`,
		id: 48,
		maxPoints: 1,
		values: [ "20", "5" ],
		x: -785.115,
		y: 1.5
	},
	"Methodical Dash": {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dealing damage to Crowd Controlled enemies with Dash reduces its Charge Cooldown by {#} seconds, up to {#} seconds per cast.`,
		id: 49,
		maxPoints: 1,
		values: [ "0.5", "3" ],
		x: -1124.97,
		y: 75.74
	},
	"Disciplined Dash": {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dash Slows enemies it hits by {#}% for {#} seconds. Any enemy already Slowed will be Stunned for {#} seconds instead.`,
		id: 50,
		maxPoints: 1,
		values: [ "30", "3", "2" ],
		x: -1127.27,
		y: -88.195
	},
	"Weapon Mastery": {
		connections: [ "Agility" ],
		description: `Gain a bonus when attacking based on weapon type:
 Daggers: x{#}% increased damage to Healthy enemies.
 Swords: x{#}% increased damage.
 Bows: x{#}% increased damage to Vulnerable enemies.
 Crossbows: x{#}% increased Critical Strike Damage.`,
		id: 51,
		maxPoints: 3,
		values: [ "{5/10/15}", "{3/6/9}", "{4/8/12}", "{5/10/15}" ],
		x: -564.855,
		y: -257.695
	},
	"Concussive": {
		connections: [ "Agility" ],
		description: `After Knocking Back or Knocking Down an enemy, you gain +{#}% increased Critical Strike Chance against them for {#} seconds.`,
		id: 52,
		maxPoints: 3,
		values: [ "{5/10/15}", "3" ],
		x: -567.73,
		y: 255.705
	},
	"Caltrops": {
		connections: [ "Enhanced Caltrops", "Agility" ],
		damageType: 0,
		description: `Charges: {#}
Charge Cooldown: {#} seconds 
Lucky Hit Chance: {#}%
Leap backwards and throw caltrops on the ground, dealing {#}% damage and Slowing enemies by {#}%. Lasts {#} seconds.`,
		id: 53,
		maxPoints: 5,
		values: [ "2", "12.0", "", "38", "50", "6" ],
		x: -0.93,
		y: 235.52
	},
	"Enhanced Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Caltrops", "Methodical Caltrops", "Disciplined Caltrops" ],
		description: `Enemies take x{#}% increased damage from all sources each second they are in Caltrops.`,
		id: 54,
		maxPoints: 1,
		values: [ "3" ],
		x: 3.375,
		y: 412.295
	},
	"Methodical Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `Caltrops now deals Cold damage and Chills enemies for {#}% per second.`,
		id: 55,
		maxPoints: 1,
		values: [ "20" ],
		x: -148.98,
		y: 587.832
	},
	"Disciplined Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `You have +{#}% Critical Strike Chance against enemies inside your Caltrops. Double this amount against Vulnerable enemies.`,
		id: 56,
		maxPoints: 1,
		values: [ "5" ],
		x: 175.28,
		y: 588.884
	},
	"Rugged": {
		connections: [ "Agility", "Reactive Defense" ],
		description: `Gain x{#}% Damage Reduction against Damage Over Time effects.`,
		id: 57,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 572.705,
		y: 256.37
	},
	"Reactive Defense": {
		connections: [ "Rugged" ],
		description: `Gain x{#}% Damage Reduction while inflicted with Control Impairing Effects.`,
		id: 58,
		maxPoints: 3,
		values: [ "{4.5/9/13.5}" ],
		x: 851.645,
		y: 376.865
	},
};

rogue["Subterfuge"] = {
	"Dark Shroud": {
		connections: [ "Enhanced Dark Shroud", "Subterfuge" ],
		description: `Cooldown: {#} seconds
Surround yourself with up to {#} protective shadows. Gain +{#}% Damage Reduction per active shadow. Each time you take direct damage, that damage is reduced and a shadow is consumed.`,
		id: 59,
		maxPoints: 5,
		values: [ "20.0", "5", "8.0" ],
		x: -370.825,
		y: -129.275
	},
	"Enhanced Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Dark Shroud", "Subverting Dark Shroud", "Countering Dark Shroud" ],
		description: `Dark Shroud's shadows have a {#}% chance to not be consumed.`,
		id: 60,
		maxPoints: 1,
		values: [ "10" ],
		x: -656.66,
		y: -232.23
	},
	"Subverting Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `Each active shadow from Dark Shroud grants you +{#}% increased Movement Speed.`,
		id: 61,
		maxPoints: 1,
		values: [ "3" ],
		x: -809.69,
		y: -406.165
	},
	"Countering Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `While you have at least {#} active shadow from Dark Shroud, gain +{#}% Critical Strike Chance.`,
		id: 62,
		maxPoints: 1,
		values: [ "2", "10" ],
		x: -1027.384,
		y: -253.805
	},
	"Smoke Grenade": {
		connections: [ "Enhanced Smoke Grenade", "Subterfuge" ],
		description: `Cooldown: {#} seconds
Throw a smoky concoction at enemies that Dazes them for {#} seconds.`,
		id: 123,
		maxPoints: 5,
		values: [ "15.0", "4" ],
		x: -4.755,
		y: -197.595
	},
	"Enhanced Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Smoke Grenade", "Subverting Smoke Grenade", "Countering Smoke Grenade" ],
		description: `Enemies affected by Smoke Grenade take x{#}% increased damage.`,
		id: 124,
		maxPoints: 1,
		values: [ "15" ],
		x: -7.545,
		y: -376.035
	},
	"Subverting Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `If an enemy is Vulnerable, Slowed, or Immobilized Smoke Grenade Dazes them for x{#}% longer.`,
		id: 125,
		maxPoints: 1,
		values: [ "20" ],
		x: -186.285,
		y: -564.435
	},
	"Countering Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `Lucky Hit: Dealing direct damage to enemies affected by Smoke Grenade has up to a {#}% chance to reduce its Cooldown by {#} second, or by {#} seconds instead if the enemy is Vulnerable.`,
		id: 126,
		maxPoints: 1,
		values: [ "25", "1", "2" ],
		x: 187.08,
		y: -565.1
	},
	"Agile": {
		connections: [ "Subterfuge" ],
		description: `Using a Cooldown increases your Dodge Chance by x{#}% for {#} seconds.`,
		id: 67,
		maxPoints: 3,
		values: [ "{3/6/9}", "2" ],
		x: 480.215,
		y: -242.9
	},
	"Exploit": {
		connections: [ "Subterfuge", "Malice" ],
		description: `You deal x{#}% increased damage to Healthy and Injured enemies.`,
		id: 68,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: 471.72,
		y: 246.245
	},
	"Malice": {
		connections: [ "Exploit" ],
		description: `You deal x{#}% increased damage to Vulnerable enemies.`,
		id: 69,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 735.645,
		y: 371.04
	},
	"Poison Trap": {
		connections: [ "Enhanced Poison Trap", "Subterfuge" ],
		damageType: 4,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Place a trap that arms after {#} seconds. It activates when an enemy moves within range, applying {#}% Poisoning damage over {#} seconds to enemies in the area.`,
		id: 70,
		maxPoints: 5,
		values: [ "10.0", "", "1.25", "435", "9" ],
		x: 456.495,
		y: 1.1
	},
	"Enhanced Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Poison Trap", "Countering Poison Trap", "Subverting Poison Trap" ],
		description: `Poison Trap Immobilizes enemies for {#} seconds when it activates.`,
		id: 71,
		maxPoints: 1,
		values: [ "2" ],
		x: 804.305,
		y: 1.625
	},
	"Countering Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `Poison Trap has a {#}% chance to reset your Imbuement Skill Cooldowns when activated.`,
		id: 72,
		maxPoints: 1,
		values: [ "20" ],
		x: 1092.46,
		y: 65.025
	},
	"Subverting Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `Enemies take x{#}% increased Poisoning damage while standing in Poison Trap.`,
		id: 73,
		maxPoints: 1,
		values: [ "10" ],
		x: 1084.135,
		y: -86.245
	},
	"Concealment": {
		connections: [ "Enhanced Concealment", "Subterfuge" ],
		description: `Cooldown: {#} seconds
Vanish from sight, gaining Stealth for {#} seconds. During Concealment you additionally become Unstoppable, gain +{#}% Movement Speed, and can move through enemies freely.

Using an attack Skill during Concealment will break Concealment.`,
		id: 127,
		maxPoints: 5,
		values: [ "20.0", "4", "25" ],
		x: -343.91,
		y: 148.36
	},
	"Enhanced Concealment": {
		baseSkill: "Concealment",
		connections: [ "Concealment", "Countering Concealment", "Subverting Concealment" ],
		description: `You gain {#} Energy when you enter Concealment.`,
		id: 140,
		maxPoints: 1,
		values: [ "40" ],
		x: -618.815,
		y: 247.23
	},
	"Countering Concealment": {
		baseSkill: "Concealment",
		connections: [ "Enhanced Concealment" ],
		description: `The Skill that breaks Concealment will always be a guaranteed Critical Strike.`,
		id: 141,
		maxPoints: 1,
		x: -974.974,
		y: 310.71
	},
	"Subverting Concealment": {
		baseSkill: "Concealment",
		connections: [ "Enhanced Concealment" ],
		description: `The Skill that breaks Concealment makes enemies Vulnerable for {#} seconds.`,
		id: 142,
		maxPoints: 1,
		values: [ "3" ],
		x: -774.595,
		y: 429.055
	},
};

rogue["Imbuements"] = {
	"Deadly Venom": {
		connections: [ "Alchemical Advantage", "Debilitating Toxins", "Imbuements" ],
		description: `You deal x{#}% increased Poisoning damage.`,
		id: 78,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -677.685,
		y: 0.849
	},
	"Alchemical Advantage": {
		connections: [ "Deadly Venom" ],
		description: `You gain +{#}% increased Attack Speed for each enemy you've Poisoned, up to +{#}%.`,
		id: 79,
		maxPoints: 3,
		values: [ "{1/2/3}", "15" ],
		x: -1003.199,
		y: -84.462
	},
	"Debilitating Toxins": {
		connections: [ "Deadly Venom" ],
		description: `Poisoned enemies deal {#}% less damage.`,
		id: 80,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -997.049,
		y: 84.105
	},
	"Poison Imbuement": {
		connections: [ "Enhanced Poison Imbuement", "Imbuements" ],
		damageType: 4,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Imbue your weapons with lethal poison. Your next {#} Imbueable Skills deal Poison damage and apply up to {#}% Poisoning damage over {#} seconds.`,
		id: 128,
		maxPoints: 5,
		values: [ "9.0", "", "2", "105", "5" ],
		x: -230.87,
		y: -173.174
	},
	"Enhanced Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Poison Imbuement", "Mixed Poison Imbuement", "Blended Poison Imbuement" ],
		description: `Poison Imbuement’s Poisoning Duration is increased by {#} second.`,
		id: 129,
		maxPoints: 1,
		values: [ "1" ],
		x: -430.12,
		y: -326.753
	},
	"Mixed Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Lucky Hit: Poison Imbued Skills have up to a {#}% chance to apply double the amount of Poisoning damage over time.`,
		id: 130,
		maxPoints: 1,
		values: [ "30" ],
		x: -478.5,
		y: -527.447
	},
	"Blended Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Critical Strikes with Poison Imbued Skills deal x{#}% increased Poisoning damage.`,
		id: 131,
		maxPoints: 1,
		values: [ "30" ],
		x: -758.755,
		y: -423.11
	},
	"Shadow Crash": {
		connections: [ "Consuming Shadows", "Imbuements" ],
		description: `Lucky Hit: Shadow damage has up to a {#}% chance to Stun for {#} seconds.`,
		id: 85,
		maxPoints: 3,
		values: [ "10", "{0.5/1/1.5}" ],
		x: 707,
		y: -120.229
	},
	"Consuming Shadows": {
		connections: [ "Shadow Crash" ],
		description: `Each time you kill an enemy with Shadow Damage, you generate {#} Energy.`,
		id: 86,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: 1083.045,
		y: -198.046
	},
	"Shadow Imbuement": {
		connections: [ "Enhanced Shadow Imbuement", "Imbuements" ],
		damageType: 5,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Imbue your weapons with festering shadows. Your next {#} Imbueable Skills deal Shadow damage and infect enemies such that they explode for up to {#}% damage on death. Direct damage to infected enemies deals an additional {#}% Shadow damage.`,
		id: 132,
		maxPoints: 5,
		values: [ "9.0", "", "2", "39", "4" ],
		x: 218.89,
		y: -173.644
	},
	"Enhanced Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Shadow Imbuement", "Mixed Shadow Imbuement", "Blended Shadow Imbuement" ],
		description: `Lucky Hit: Critically Striking an enemy infected by Shadow Imbuement has up to a {#}% chance to create a mini explosion, dealing {#}% Shadow damage to them and surrounding enemies.`,
		id: 133,
		maxPoints: 1,
		values: [ "30", "14" ],
		x: 390.51,
		y: -324.321
	},
	"Mixed Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Enemies damaged by Shadow Imbued Skills take x{#}% increased non-Physical damage for {#} seconds.`,
		id: 134,
		maxPoints: 1,
		values: [ "12", "8" ],
		x: 459.19,
		y: -522.303
	},
	"Blended Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Shadow Imbuement’s primary explosion makes enemies Vulnerable for 2 seconds.`,
		id: 135,
		maxPoints: 1,
		x: 734.355,
		y: -419.381
	},
	"Potency": {
		connections: [ "Rapid Imbuement", "Imbuements", "Precision Imbuement" ],
		description: `Your Imbuement Skill effects have x{#}% increased potency.`,
		id: 91,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: -3.615,
		y: 295.163
	},
	"Rapid Imbuement": {
		connections: [ "Potency", "Trick Attacks" ],
		description: `The Cooldowns of your Imbuement Skills are reduced by x{#}%.`,
		id: 92,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -184.115,
		y: 448.624
	},
	"Trick Attacks": {
		connections: [ "Rapid Imbuement", "Precision Imbuement" ],
		description: `Lucky Hit: Up to a {#}% chance to apply a random equipped Imbuement Skill effect when dealing direct damage.`,
		id: 93,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -2.465,
		y: 600.38
	},
	"Precision Imbuement": {
		connections: [ "Potency", "Trick Attacks" ],
		description: `Imbued Skills gain +{#}% increased Critical Strike Chance.`,
		id: 94,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 159.45,
		y: 446.67
	},
	"Cold Imbuement": {
		connections: [ "Enhanced Cold Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Imbue your weapons with frigid energies. Your next {#} Imbueable Skills deal Cold damage and Chill enemies for up to {#}%. Cold Imbued skills deal x{#}% damage to Crowd Controlled enemies.`,
		id: 136,
		maxPoints: 5,
		values: [ "9.0", "2", "50", "15" ],
		x: 308.365,
		y: 139.104
	},
	"Enhanced Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Cold Imbuement", "Mixed Cold Imbuement", "Blended Cold Imbuement" ],
		description: `Lucky Hit: Cold Imbued Skills have up to a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 137,
		maxPoints: 1,
		values: [ "30", "3" ],
		x: 554.59,
		y: 259.627
	},
	"Mixed Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `Cold Imbued Skills deal x{#}% increased damage to Frozen enemies.`,
		id: 138,
		maxPoints: 1,
		values: [ "30" ],
		x: 644.64,
		y: 422.055
	},
	"Blended Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `Lucky Hit: Critical Strikes with Cold Imbued Skills have up to a {#}% chance to instantly Freeze enemies for {#} seconds.`,
		id: 139,
		maxPoints: 1,
		values: [ "20", "3" ],
		x: 869.38,
		y: 284.244
	},
	"Frigid Finesse": {
		connections: [ "Chilling Weight", "Imbuements" ],
		description: `You deal x{#}% increased damage to Chilled enemies. This bonus increases to x{#}% against Frozen enemies.`,
		id: 99,
		maxPoints: 3,
		values: [ "{5/10/15}", "{10/20/30}" ],
		x: 704.565,
		y: 26.567
	},
	"Chilling Weight": {
		connections: [ "Frigid Finesse" ],
		description: `Chilled enemies have their Movement Speed further reduced by up to {#}%.`,
		id: 100,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: 1107.46,
		y: 45.936
	},
};

rogue["Ultimate"] = {
	"Innervation": {
		connections: [ "Second Wind", "Ultimate", "Alchemist's Fortune" ],
		description: `Lucky Hit: Up to a {#}% chance to gain {#} Energy.`,
		id: 101,
		maxPoints: 3,
		values: [ "{10/20/30}", "8" ],
		x: -220.035,
		y: 292.515
	},
	"Second Wind": {
		connections: [ "Innervation" ],
		description: `Every {#} Energy you spend grants you +{#}% increased Lucky Hit Chance for {#} seconds.`,
		id: 102,
		maxPoints: 3,
		values: [ "100", "{5/10/15}", "5" ],
		x: -560.018,
		y: 365.58
	},
	"Alchemist's Fortune": {
		connections: [ "Innervation" ],
		description: `Non-Physical damage you deal has a +{#}% increased Lucky Hit Chance.`,
		id: 103,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -230.402,
		y: 466.255
	},
	"Shadow Clone": {
		connections: [ "Prime Shadow Clone", "Ultimate" ],
		description: `Cooldown: {#} seconds
Your shadow mimicks your actions for {#} seconds.
The shadow deals {#}% of your damage.`,
		id: 104,
		maxPoints: 1,
		values: [ "60.0", "15", "60" ],
		x: -3.973,
		y: -219.38
	},
	"Prime Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Shadow Clone", "Supreme Shadow Clone" ],
		description: `You are Unstoppable for {#} seconds after casting Shadow Clone.`,
		id: 105,
		maxPoints: 1,
		values: [ "5" ],
		x: -167.644,
		y: -390.21
	},
	"Supreme Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Prime Shadow Clone" ],
		description: `Your Shadow Clone deals an additional 20% of your damage.`,
		id: 106,
		maxPoints: 1,
		x: 46.146,
		y: -540.832
	},
	"Aftermath": {
		connections: [ "Ultimate" ],
		description: `After using an Ultimate Skill, restore {#} Energy.`,
		id: 107,
		maxPoints: 3,
		values: [ "{25/50/75}" ],
		x: -641.788,
		y: -70.895
	},
	"Death Trap": {
		connections: [ "Prime Death Trap", "Ultimate" ],
		damageType: 5,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Place a trap that arms after {#} seconds. It activates when an enemy moves within range, dealing {#}% damage to enemies in the area.`,
		id: 108,
		maxPoints: 1,
		values: [ "45.0", "", "1.25", "316" ],
		x: -380.217,
		y: 127.97
	},
	"Prime Death Trap": {
		baseSkill: "Death Trap",
		connections: [ "Death Trap", "Supreme Death Trap" ],
		description: `Enemies are Pulled into Death Trap when it activates.`,
		id: 109,
		maxPoints: 1,
		x: -780.253,
		y: 70.7
	},
	"Supreme Death Trap": {
		baseSkill: "Death Trap",
		connections: [ "Prime Death Trap" ],
		description: `If Death Trap kills an enemy, its Cooldown is reduced by {#} seconds.`,
		id: 110,
		maxPoints: 1,
		values: [ "10" ],
		x: -1056.268,
		y: 203.775
	},
	"Trap Mastery": {
		connections: [ "Ultimate" ],
		description: `When Poison Trap or Death Trap activates, you gain +{#}% increased Critical Strike Chance against Vulnerable and Crowd Controlled enemies for {#} seconds.`,
		id: 111,
		maxPoints: 3,
		values: [ "{4/8/12}", "4" ],
		x: -430.499,
		y: -254.43
	},
	"Rain of Arrows": {
		connections: [ "Prime Rain of Arrows", "Ultimate" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Arrows rain down over a large area {#} times, each wave dealing {#}% damage.`,
		id: 112,
		maxPoints: 1,
		values: [ "60.0", "", "2", "126" ],
		x: 462.258,
		y: 45.05
	},
	"Prime Rain of Arrows": {
		baseSkill: "Rain of Arrows",
		connections: [ "Rain of Arrows", "Supreme Rain of Arrows" ],
		description: `Imbuement Skill effects applied by Rain of Arrows have x{#}% increased potency.`,
		id: 113,
		maxPoints: 1,
		values: [ "20" ],
		x: 848.377,
		y: 93.275
	},
	"Supreme Rain of Arrows": {
		baseSkill: "Rain of Arrows",
		connections: [ "Prime Rain of Arrows" ],
		description: `Rain of Arrows' second wave Knocks Down enemies for {#} seconds.`,
		id: 114,
		maxPoints: 1,
		values: [ "3" ],
		x: 1021.102,
		y: 235.53
	},
	"Adrenaline Rush": {
		connections: [ "Impetus", "Haste", "Ultimate" ],
		description: `While moving, you gain x{#}% increased Energy Regeneration.`,
		id: 115,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 361.866,
		y: 285.235
	},
	"Impetus": {
		connections: [ "Adrenaline Rush" ],
		description: `After moving {#} meters, your next attack deals x{#}% increased damage.`,
		id: 116,
		maxPoints: 3,
		values: [ "15", "{7/14/21}" ],
		x: 382.893,
		y: 470.05
	},
	"Haste": {
		connections: [ "Adrenaline Rush" ],
		description: `While at or above {#}% maximum Energy, gain +{#}% increased Movement Speed. While below {#}% maximum Energy, gain +{#}% increased Attack Speed.`,
		id: 117,
		maxPoints: 3,
		values: [ "50", "{5/10/15}", "50", "{5/10/15}" ],
		x: 700.747,
		y: 367.135
	},
};

rogue["Capstone"] = {
	"Momentum": {
		connections: [ "Capstone" ],
		description: `Melee Skills grant a stack of Momentum for {#} seconds if they either:
 Hit a Stunned, Immobilized, or Frozen enemy
 Hit any enemy from behind

While at {#} stacks of Momentum you gain:
 {#}% increased Damage Reduction
 x{#}% increased Energy Regeneration
 +{#}% increased Attack Speed`,
		id: 118,
		maxPoints: 1,
		values: [ "8", "3", "20", "30", "15" ],
		x: -744.098,
		y: 297.065
	},
	"Close Quarters Combat": {
		connections: [ "Capstone" ],
		description: `Damaging a Close enemy with Ranged or Melee Skills each grant a +{#}% Attack Speed bonus for {#} seconds.

While both Attack Speed bonuses are active, you gain:
 Lucky Hit: Dealing direct damage to a Crowd Controlled enemy has up to a {#}% chance to generate {#} Energy and deal x{#}% increased damage.`,
		id: 119,
		maxPoints: 1,
		values: [ "5", "8", "75", "10", "15" ],
		x: -366.255,
		y: 296.375
	},
	"Victimize": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Dealing direct damage to a Vulnerable enemy has up to a {#}% chance to cause an explosion, dealing {#}% of the original damage to them and surrounding enemies.`,
		id: 120,
		maxPoints: 1,
		values: [ "30", "23" ],
		x: 380.665,
		y: 296.475
	},
	"Exposure": {
		connections: [ "Capstone" ],
		damageType: 0,
		description: `Lucky Hit: Dealing direct damage to an enemy affected by a Trap Skill has up to a {#}% chance to reduce the active Cooldowns of your Trap Skills by {#}% and drop a cluster of Stun Grenades that explode and deal {#}% total Physical damage and Stun enemies for {#} seconds.`,
		id: 121,
		maxPoints: 1,
		values: [ "35", "25", "40", "0.25" ],
		x: 756.707,
		y: 296.195
	},
	"Precision": {
		connections: [ "Capstone" ],
		description: `Critical Strikes with Ranged Skills grant you Precision. You gain x{#}% increased Critical Strike Damage per stack of Precision, up to a maximum of x{#}%.

When you reach maximum Precision, your next Ranged Skill is a guaranteed Critical Strike that deals x{#}% increased Critical Strike Damage, then consumes all stacks of Precision.`,
		id: 122,
		maxPoints: 1,
		values: [ "4", "20", "40" ],
		x: 6.915,
		y: 296.525
	},
};

export { rogue };