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
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -1204.781,
		y: 4246.85
	},
	"Capstone": {
		requiredPoints: 33,
		x: -6.259,
		y: 4859.065
	},
};

rogueData["Basic"] = {
	"Blade Shift": {
		connections: [ "Enhanced Blade Shift", "Basic" ],
		description: `Generate Combo Point: {#}
Lucky Hit Chance: {#}%
Quickly stab your victim for {#}% damage and shift, allowing you to move freely through enemies for {#} seconds.`,
		id: 0,
		maxPoints: 5,
		values: [ "1", "35", "15", "3" ],
		x: -1.473,
		y: -323.735
	},
	"Enhanced Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Fundamental Blade Shift", "Blade Shift", "Primary Blade Shift" ],
		description: `Damaging an enemy with Blade Shift grants +{#}% Movement Speed while Blade Shift is active, up to +{#}%.`,
		id: 1,
		maxPoints: 1,
		values: [ "5", "20" ],
		x: 3.694,
		y: -527.345
	},
	"Fundamental Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `Moving through enemies while Blade Shift is active refreshes its duration. After moving through enemies {#} times, your next Blade Shift will Daze enemies for {#} seconds.`,
		id: 2,
		maxPoints: 1,
		values: [ "5", "2" ],
		x: 154.361,
		y: -636.79
	},
	"Primary Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `While Blade Shift is active you gain {#}% to all Non-Physical Resistances and reduce the duration of incoming Control Impairing Effects by {#}%.`,
		id: 3,
		maxPoints: 1,
		values: [ "15", "20" ],
		x: -170.121,
		y: -634.25
	},
	"Invigorating Strike": {
		connections: [ "Enhanced Invigorating Strike", "Basic" ],
		description: `Generate Combo Point: {#}
Lucky Hit Chance: {#}%
Melee attack an enemy, dealing {#}% damage and increasing Energy Regeneration by x{#}% for {#} seconds.`,
		id: 4,
		maxPoints: 5,
		values: [ "1", "50", "23", "20", "3" ],
		x: -393.363,
		y: -211.415
	},
	"Enhanced Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Invigorating Strike", "Primary Invigorating Strike", "Fundamental Invigorating Strike" ],
		description: `Damaging a Crowd Controlled or Injured enemy with Invigorating Strike increases its Energy Regeneration bonus to x{#}%.`,
		id: 5,
		maxPoints: 1,
		values: [ "30" ],
		x: -686.981,
		y: -357.315
	},
	"Primary Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Invigorating Strike additionally grants +{#}% Lucky Hit Chance. Hitting a Crowd Controlled or Injured enemy increases this bonus to +{#}% Lucky Hit Chance.`,
		id: 7,
		maxPoints: 1,
		values: [ "8", "16" ],
		x: -660.611,
		y: -496.7
	},
	"Fundamental Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Hitting an enemy with Invigorating Strike while you are below {#}% Energy makes them Vulnerable for {#} seconds.`,
		id: 6,
		maxPoints: 1,
		values: [ "50", "3" ],
		x: -955.226,
		y: -375.21
	},
	"Puncture": {
		connections: [ "Enhanced Puncture", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: {#}%
Throw blades a short distance, dealing {#}% damage. Every {#}rd cast Slows enemies by {#}% for {#} seconds. Critical Strikes will always Slow.`,
		id: 8,
		maxPoints: 5,
		values: [ "50", "21", "3", "20", "2" ],
		x: 391.432,
		y: -210.87
	},
	"Enhanced Puncture": {
		baseSkill: "Puncture",
		connections: [ "Puncture", "Fundamental Puncture", "Primary Puncture" ],
		description: `Gain {#} Energy when Puncture damages a Crowd Controlled enemy.`,
		id: 9,
		maxPoints: 1,
		values: [ "2" ],
		x: 665.19,
		y: -347.11
	},
	"Fundamental Puncture": {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Puncture now throws 3 blades in a spread, each dealing {#}% of its Base damage. Hitting an enemy with at least 2 blades at once makes them Vulnerable for {#} seconds.`,
		id: 10,
		maxPoints: 1,
		values: [ "35", "2" ],
		x: 939.345,
		y: -358.89
	},
	"Primary Puncture": {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Every {#}rd cast of Puncture will also ricochet up to 2 times. Critical Strikes will always ricochet.`,
		id: 11,
		maxPoints: 1,
		values: [ "3" ],
		x: 692.899,
		y: -483.34
	},
	"Heartseeker": {
		connections: [ "Enhanced Heartseeker", "Basic" ],
		description: `Generate Combo Point: {#}
Lucky Hit Chance: {#}%
Fire an arrow that seeks an enemy, dealing {#}% damage and increasing your Critical Strike Chance against them by +{#}% for {#} seconds, up to +{#}%.`,
		id: 12,
		maxPoints: 5,
		values: [ "1", "50", "22", "3", "4", "15" ],
		x: 517.08,
		y: -0.265
	},
	"Enhanced Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Heartseeker", "Fundamental Heartseeker", "Primary Heartseeker" ],
		description: `When Heartseeker Critically Strikes, gain +{#}% Attack Speed for {#} seconds. Double this amount if the enemy is Vulnerable.`,
		id: 13,
		maxPoints: 1,
		values: [ "8", "4" ],
		x: 878.274,
		y: -0.72
	},
	"Fundamental Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `Heartseeker also increases the Critical Strike Damage the enemy takes from you by +{#}% for {#} seconds, up to +{#}%.`,
		id: 14,
		maxPoints: 1,
		values: [ "5", "4", "25" ],
		x: 1078.76,
		y: -93.745
	},
	"Primary Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `Heartseeker ricochets to an additional enemy, dealing {#}% of the original damage.`,
		id: 15,
		maxPoints: 1,
		values: [ "30" ],
		x: 1082.04,
		y: 80.68
	},
	"Forceful Arrow": {
		connections: [ "Enhanced Forceful Arrow", "Basic" ],
		description: `Generate Combo Point: {#}
Lucky Hit Chance: {#}%
Fire a powerful arrow at an enemy, dealing {#}% damage. Every 3rd cast makes the enemy Vulnerable for {#} seconds.`,
		id: 16,
		maxPoints: 5,
		values: [ "1", "50", "20", "2" ],
		x: 396.765,
		y: 197.18
	},
	"Enhanced Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Forceful Arrow", "Fundamental Forceful Arrow", "Primary Forceful Arrow" ],
		description: `Every 3rd cast of Forceful Arrow additionally has a +{#}% increased Critical Strike Chance.`,
		id: 17,
		maxPoints: 1,
		values: [ "15" ],
		x: 668.675,
		y: 321.035
	},
	"Fundamental Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `Forceful Arrow Knocks Back Non-Elite enemies if they are Close. If they collide with another enemy, both are Knocked Down for {#} seconds.`,
		id: 18,
		maxPoints: 1,
		values: [ "1.5" ],
		x: 689.435,
		y: 457.555
	},
	"Primary Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `Forceful Arrow pierces through Vulnerable enemies.`,
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
Impale an enemy with your blades, dealing {#}% damage and making them take x{#}% increased damage from you while impaled. After {#} seconds the blades return to you, piercing enemies for {#}% damage.

Combo Points increase damage and grant a Movement Speed bonus:
 1 Point: {#}% damage, +{#}% bonus
 2 Points: {#}% damage, +{#}% bonus
 3 Points: {#}% damage, +{#}% bonus`,
		id: 20,
		maxPoints: 5,
		values: [ "30", "35", "57", "8", "1.5", "72", "", "20", "", "40", "", "60" ],
		x: -394.26,
		y: -207.555
	},
	"Enhanced Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Twisting Blades", "Advanced Twisting Blades", "Improved Twisting Blades" ],
		description: `Twisting Blades deals x{#}% increased damage when returning.`,
		id: 21,
		maxPoints: 1,
		values: [ "30" ],
		x: -673.39,
		y: -339.63
	},
	"Advanced Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `When your Twisting Blades return, your active Cooldowns are reduced by {#} second per enemy they passed through, up to {#} seconds.`,
		id: 22,
		maxPoints: 1,
		values: [ "1", "3" ],
		x: -925,
		y: -337.045
	},
	"Improved Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `Enemies are Dazed while impaled with Twisting Blades.`,
		id: 23,
		maxPoints: 1,
		x: -701.45,
		y: -465.235
	},
	"Flurry": {
		connections: [ "Enhanced Flurry", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Unleash a flurry of stabs and slashes, striking enemies in front of you {#} times and dealing a total of {#}% damage to each.

Combo Points increase damage and grant an Attack Speed bonus:
 1 Point: {#}% damage, +{#}% bonus
 2 Points: {#}% damage, +{#}% bonus
 3 Points: {#}% damage, +{#}% bonus`,
		id: 24,
		maxPoints: 5,
		values: [ "25", "8", "4", "60", "", "1.5", "", "3.0", "", "4.5" ],
		x: -382.935,
		y: 182.375
	},
	"Enhanced Flurry": {
		baseSkill: "Flurry",
		connections: [ "Flurry", "Improved Flurry", "Advanced Flurry" ],
		description: `Each time Flurry damages a Crowd Controlled or Vulnerable enemy, you are Healed for {#}% of your Maximum Life ({#}), up to {#}% Maximum Life ({#}) per cast.`,
		id: 25,
		maxPoints: 1,
		values: [ "1", "", "12", "" ],
		x: -659.145,
		y: 319.86
	},
	"Improved Flurry": {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `If Flurry hits any Vulnerable enemy it will make all enemies hit by that cast Vulnerable for {#} seconds.`,
		id: 26,
		maxPoints: 1,
		values: [ "3" ],
		x: -919.385,
		y: 329.755
	},
	"Advanced Flurry": {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `Evading through an enemy will cause your next Flurry to Stun enemies for {#} seconds.`,
		id: 27,
		maxPoints: 1,
		values: [ "2.5" ],
		x: -685.845,
		y: 462.11
	},
	"Penetrating Shot": {
		connections: [ "Enhanced Penetrating Shot", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Fire an arrow that pierces through all enemies in a line, dealing {#}% damage.

Combo Points increase damage and improve Lucky Hit Chance:
 1 Point: {#}% damage, +{#}% chance
 2 Points: {#}% damage, +{#}% chance
 3 Points: {#}% damage, +{#}% chance`,
		id: 28,
		maxPoints: 5,
		values: [ "35", "50", "70", "", "", "10", "", "20", "" ],
		x: 4.86,
		y: 290.085
	},
	"Enhanced Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Penetrating Shot", "Advanced Penetrating Shot", "Improved Penetrating Shot" ],
		description: `Penetrating Shot deals x{#}% increased damage per enemy it pierces.`,
		id: 29,
		maxPoints: 1,
		values: [ "20" ],
		x: 3.43,
		y: 491.945
	},
	"Advanced Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `When cast with full Energy, Penetrating Shot will Slow all enemies it hits by {#}% for {#} seconds. Elite enemies will also be Knocked Down for {#} seconds.`,
		id: 30,
		maxPoints: 1,
		values: [ "50", "3", "1.5" ],
		x: -151.43,
		y: 600.305
	},
	"Improved Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `If Penetrating Shot damages at least {#} enemies, your next Penetrating Shot has a +{#}% increased Critical Strike Chance.`,
		id: 31,
		maxPoints: 1,
		values: [ "3", "20" ],
		x: 167.52,
		y: 602.47
	},
	"Rapid Fire": {
		connections: [ "Enhanced Rapid Fire", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Rapidly fire {#} arrows, each dealing {#}% damage.

Combo Points increase damage and arrows fired:
 1 Point: {#}% damage, {#} arrows
 2 Points: {#}% damage, {#} arrows
 3 Points: {#}% damage, {#} arrows`,
		id: 32,
		maxPoints: 5,
		values: [ "25", "20", "5", "24", "", "6", "", "7", "", "8" ],
		x: 574.29,
		y: -57.45
	},
	"Enhanced Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Rapid Fire", "Advanced Rapid Fire", "Improved Rapid Fire" ],
		description: `Each subsequent arrow from Rapid Fire has +{#}% increased Critical Strike Chance, up to +{#}% for the {#}th arrow.`,
		id: 33,
		maxPoints: 1,
		values: [ "5", "25", "5" ],
		x: 953.768,
		y: -54.995
	},
	"Advanced Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Rapid Fire deals x{#}% increased Critical Strike Damage for {#} seconds after you Evade.`,
		id: 34,
		maxPoints: 1,
		values: [ "30", "3" ],
		x: 1172.98,
		y: 34.93
	},
	"Improved Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Gain {#} Energy per cast of Rapid Fire when it damages a Vulnerable enemy.`,
		id: 35,
		maxPoints: 1,
		values: [ "15" ],
		x: 1175.849,
		y: -134.515
	},
	"Barrage": {
		connections: [ "Enhanced Barrage", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: {#}%
Unleash a barrage of {#} arrows that expands outwards, each dealing {#}% damage. Each arrow has a {#}% chance to ricochet off an enemy up to {#} time. Ricochets deal {#}% of the arrow's Base damage.

Combo Points increase damage and arrows fired:
 1 Point: {#}% damage, {#} arrows
 2 Points: {#}% damage, {#} arrows
 3 Points: {#}% damage, {#} arrows`,
		id: 36,
		maxPoints: 5,
		values: [ "30", "20", "5", "21", "20", "1", "40", "", "6", "", "7", "", "8" ],
		x: -5,
		y: -292.875
	},
	"Enhanced Barrage": {
		baseSkill: "Barrage",
		connections: [ "Barrage", "Advanced Barrage", "Improved Barrage" ],
		description: `Barrage's ricochet chance is increased to 100% for arrows that damage a Vulnerable enemy or Critically Strike any enemy.`,
		id: 37,
		maxPoints: 1,
		x: -2.455,
		y: -503.82
	},
	"Advanced Barrage": {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Whenever a single cast of Barrage ricochets at least {#} times, your next cast gains +{#}% increased Critical Strike Chance.`,
		id: 38,
		maxPoints: 1,
		values: [ "4", "20" ],
		x: 171.15,
		y: -615.165
	},
	"Improved Barrage": {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Every 3rd cast of Barrage makes enemies Vulnerable for {#} seconds.`,
		id: 39,
		maxPoints: 1,
		values: [ "2" ],
		x: -162.535,
		y: -614.96
	},
	"Sturdy": {
		connections: [ "Core", "Siphoning Strikes" ],
		description: `You gain {#}% Close Damage Reduction.`,
		id: 40,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -508.635,
		y: 1.66
	},
	"Siphoning Strikes": {
		connections: [ "Sturdy" ],
		description: `Heal for {#}% of your Maximum Life ({#}) when you Critically Strike Close enemies.`,
		id: 41,
		maxPoints: 3,
		values: [ "{1/2/3}", "" ],
		x: -854.135,
		y: 2.815
	},
	"Stutter Step": {
		connections: [ "Core" ],
		description: `Critically Striking an enemy grants +{#}% Movement Speed for {#} seconds.`,
		id: 42,
		maxPoints: 3,
		values: [ "{5/10/15}", "4" ],
		x: 577.69,
		y: 84.675
	},
};

rogueData["Agility"] = {
	"Shadow Step": {
		connections: [ "Enhanced Shadow Step", "Agility" ],
		description: `Charges: {#}
Charge Cooldown: {#} seconds
Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Become Unstoppable and quickly move through the shadows to stab your victim from behind for {#}% damage. Gain {#}% increased Movement Speed for {#} seconds afterwards.`,
		id: 43,
		maxPoints: 5,
		values: [ "9", "", "", "100", "72", "50", "2" ],
		x: 5.42,
		y: -278.485
	},
	"Enhanced Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Shadow Step", "Methodical Shadow Step", "Disciplined Shadow Step" ],
		description: `Damaging an enemy with Shadow Step increases your Critical Strike Chance against them by +{#}% for {#} seconds.`,
		id: 44,
		maxPoints: 1,
		values: [ "8", "3" ],
		x: 4.62,
		y: -479.05
	},
	"Methodical Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Enemies damaged by Shadow Step are Stunned for {#} seconds.`,
		id: 45,
		maxPoints: 1,
		values: [ "2" ],
		x: -150.428,
		y: -594.06
	},
	"Disciplined Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Shadow Step's Cooldown is reduced by {#} seconds when it damages an enemy you haven't hit with Shadow Step in the last {#} seconds.`,
		id: 46,
		maxPoints: 1,
		values: [ "3", "4" ],
		x: 157.65,
		y: -595.05
	},
	"Dash": {
		connections: [ "Enhanced Dash", "Agility" ],
		description: `Charges: {#}
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Dash forward and slash enemies for {#}% damage.`,
		id: 47,
		maxPoints: 5,
		values: [ "2", "10", "25", "37" ],
		x: 9.47,
		y: 289.26
	},
	"Enhanced Dash": {
		baseSkill: "Dash",
		connections: [ "Dash", "Methodical Dash", "Disciplined Dash" ],
		description: `Enemies damaged by Dash take x{#}% increased Critical Strike Damage from you for {#} seconds.`,
		id: 48,
		maxPoints: 1,
		values: [ "20", "5" ],
		x: 10.465,
		y: 496.62
	},
	"Methodical Dash": {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dealing damage to Crowd Controlled enemies with Dash reduces its Charge Cooldown by {#} seconds, up to {#} seconds per cast.`,
		id: 49,
		maxPoints: 1,
		values: [ "0.5", "3" ],
		x: -154.131,
		y: 595.963
	},
	"Disciplined Dash": {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dash Slows enemies it hits by {#}% for {#} seconds. Any enemy already Slowed will be Dazed for {#} seconds instead.`,
		id: 50,
		maxPoints: 1,
		values: [ "30", "3", "2" ],
		x: 170.02,
		y: 597.246
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
		x: -590.813,
		y: 1.36
	},
	"Concussive": {
		connections: [ "Agility", "Trick Attacks" ],
		description: `After Knocking Back or Knocking Down an enemy, you gain +{#}% increased Critical Strike Chance against them for {#} seconds.`,
		id: 52,
		maxPoints: 3,
		values: [ "{5/10/15}", "3" ],
		x: 645.39,
		y: 181.745
	},
	"Trick Attacks": {
		connections: [ "Rapid Gambits", "Concussive" ],
		description: `When you Critically Strike a Dazed enemy they are Knocked Down for {#} seconds.`,
		id: 143,
		maxPoints: 3,
		values: [ "{0.5/1/1.5}" ],
		x: 483.505,
		y: 485.53
	},
	"Rapid Gambits": {
		connections: [ "Agility", "Trick Attacks" ],
		description: `Your Evade Cooldown is reduced by {#} seconds when you Daze an enemy.`,
		id: 144,
		maxPoints: 3,
		values: [ "{0.5/1/1.5}" ],
		x: 316.785,
		y: 288.665
	},
	"Caltrops": {
		connections: [ "Enhanced Caltrops", "Agility" ],
		description: `Charges: {#}
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Leap backwards and throw caltrops on the ground, dealing {#}% damage and Slowing enemies by {#}%. Lasts {#} seconds.`,
		id: 53,
		maxPoints: 5,
		values: [ "2", "12", "25", "30", "50", "6" ],
		x: 542.77,
		y: -1.12
	},
	"Enhanced Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Caltrops", "Methodical Caltrops", "Disciplined Caltrops" ],
		description: `Enemies take x{#}% increased damage from you each second they are in Caltrops.`,
		id: 54,
		maxPoints: 1,
		values: [ "3" ],
		x: 938.955,
		y: -0.925
	},
	"Methodical Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `Caltrops now deals Cold damage and Chills enemies for {#}% per second.`,
		id: 55,
		maxPoints: 1,
		values: [ "20" ],
		x: 1156.86,
		y: -91.955
	},
	"Disciplined Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `You have +{#}% Critical Strike Chance against enemies inside your Caltrops. Double this amount against Vulnerable enemies.`,
		id: 56,
		maxPoints: 1,
		values: [ "5" ],
		x: 1154.395,
		y: 99.55
	},
	"Rugged": {
		connections: [ "Agility", "Reactive Defense" ],
		description: `Gain {#}% Damage Reduction against Damage Over Time effects.`,
		id: 57,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 366.67,
		y: -223.635
	},
	"Reactive Defense": {
		connections: [ "Rugged" ],
		description: `Gain {#}% Damage Reduction while inflicted with Control Impairing Effects.`,
		id: 58,
		maxPoints: 3,
		values: [ "{4.5/9/13.5}" ],
		x: 645.62,
		y: -393.555
	},
};

rogueData["Subterfuge"] = {
	"Smoke Grenade": {
		connections: [ "Enhanced Smoke Grenade", "Subterfuge" ],
		description: `Cooldown: {#} seconds
Throw a smoky concoction at enemies that Dazes them for {#} seconds.`,
		id: 123,
		maxPoints: 5,
		values: [ "15", "4" ],
		x: -603.97,
		y: 4.535
	},
	"Enhanced Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Smoke Grenade", "Subverting Smoke Grenade", "Countering Smoke Grenade" ],
		description: `Enemies affected by Smoke Grenade take x{#}% increased damage from you.`,
		id: 124,
		maxPoints: 1,
		values: [ "15" ],
		x: -1015.755,
		y: 4.314
	},
	"Subverting Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `If an enemy is Vulnerable, Slowed, or Chilled then Smoke Grenade will Daze them for x{#}% longer.`,
		id: 125,
		maxPoints: 1,
		values: [ "20" ],
		x: -1235.79,
		y: 94.325
	},
	"Countering Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `Lucky Hit: Dealing direct damage to enemies affected by Smoke Grenade has up to a {#}% chance to reduce its Cooldown by {#} second, or by {#} seconds instead if the enemy is Vulnerable.`,
		id: 126,
		maxPoints: 1,
		values: [ "25", "1", "2" ],
		x: -1241.33,
		y: -67.379
	},
	"Concealment": {
		connections: [ "Subterfuge", "Enhanced Concealment" ],
		description: `Cooldown: {#} seconds
Vanish from sight, gaining an advanced form of Stealth for {#} seconds that will not be removed by taking damage.

Concealment also makes you Unstoppable, grants +{#}% Movement Speed, and allows you to move freely through enemies for its duration.

Using an attack Skill during Concealment will break Concealment.`,
		id: 127,
		maxPoints: 5,
		values: [ "20", "4", "25" ],
		x: -390.71,
		y: -209.637
	},
	"Enhanced Concealment": {
		baseSkill: "Concealment",
		connections: [ "Concealment", "Subverting Concealment", "Countering Concealment" ],
		description: `You gain {#} Energy when you enter Concealment.`,
		id: 140,
		maxPoints: 1,
		values: [ "40" ],
		x: -681.17,
		y: -340.45
	},
	"Subverting Concealment": {
		baseSkill: "Concealment",
		connections: [ "Enhanced Concealment" ],
		description: `The Skill that breaks Concealment makes enemies Vulnerable for {#} seconds.`,
		id: 142,
		maxPoints: 1,
		values: [ "3" ],
		x: -706.615,
		y: -486.354
	},
	"Countering Concealment": {
		baseSkill: "Concealment",
		connections: [ "Enhanced Concealment" ],
		description: `The Skill that breaks Concealment will always be a guaranteed Critical Strike.`,
		id: 141,
		maxPoints: 1,
		x: -951.19,
		y: -343.327
	},
	"Poison Trap": {
		connections: [ "Subterfuge", "Enhanced Poison Trap" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Place a trap that arms after {#} seconds. It activates when an enemy moves within range, applying {#}% Poisoning damage over {#} seconds to enemies in the area.

You can have {#} armed traps out at once.`,
		id: 70,
		maxPoints: 5,
		values: [ "10", "20", "1.25", "344", "9", "4" ],
		x: -411.99,
		y: 220.272
	},
	"Enhanced Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Poison Trap", "Countering Poison Trap", "Subverting Poison Trap" ],
		description: `Poison Trap Knocks Down enemies for {#} seconds when it activates.`,
		id: 71,
		maxPoints: 1,
		values: [ "1.5" ],
		x: -686.37,
		y: 364.826
	},
	"Countering Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `Poison Trap has a {#}% chance to reset your Imbuement Skill Cooldowns when activated.`,
		id: 72,
		maxPoints: 1,
		values: [ "20" ],
		x: -971.755,
		y: 363.911
	},
	"Subverting Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `You deal x{#}% increased Poison damage to enemies standing inside your Poison Trap.`,
		id: 73,
		maxPoints: 1,
		values: [ "10" ],
		x: -713.635,
		y: 514.772
	},
	"Dark Shroud": {
		connections: [ "Enhanced Dark Shroud", "Subterfuge" ],
		description: `Cooldown: {#} seconds
Surround yourself with up to {#} protective shadows. Gain {#}% Damage Reduction per active shadow. Each time you take direct damage, that damage is reduced and a shadow is consumed.`,
		id: 59,
		maxPoints: 5,
		values: [ "20", "5", "8.0" ],
		x: 546.385,
		y: 3.375
	},
	"Enhanced Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Dark Shroud", "Countering Dark Shroud", "Subverting Dark Shroud" ],
		description: `Dark Shroud's shadows have a {#}% chance to not be consumed.`,
		id: 60,
		maxPoints: 1,
		values: [ "10" ],
		x: 948.573,
		y: 3.039
	},
	"Countering Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `While you have at least {#} active shadows from Dark Shroud, gain +{#}% Critical Strike Chance.`,
		id: 62,
		maxPoints: 1,
		values: [ "2", "10" ],
		x: 1160.602,
		y: -68.416
	},
	"Subverting Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `Each active shadow from Dark Shroud grants you +{#}% increased Movement Speed.`,
		id: 61,
		maxPoints: 1,
		values: [ "3" ],
		x: 1157.68,
		y: 98.315
	},
	"Exploit": {
		connections: [ "Malice", "Subterfuge" ],
		description: `You deal x{#}% increased damage to Healthy and Injured enemies.`,
		id: 68,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: 1.475,
		y: 280.736
	},
	"Malice": {
		connections: [ "Exploit" ],
		description: `You deal x{#}% increased damage to Vulnerable enemies.`,
		id: 69,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 0.765,
		y: 481.536
	},
	"Agile": {
		connections: [ "Subterfuge", "Mending Obscurity" ],
		description: `Using a Cooldown increases your Dodge Chance by {#}% for {#} seconds.`,
		id: 67,
		maxPoints: 3,
		values: [ "{3/6/9}", "2" ],
		x: 0.75,
		y: -269.039
	},
	"Mending Obscurity": {
		connections: [ "Agile" ],
		description: `While Stealthed, you Heal for {#}% Maximum Life ({#}) per second.`,
		id: 145,
		maxPoints: 3,
		values: [ "{1/2/3}", "" ],
		x: 4.7,
		y: -479.249
	},
};

rogueData["Imbuements"] = {
	"Deadly Venom": {
		connections: [ "Alchemical Advantage", "Debilitating Toxins", "Imbuements" ],
		description: `You deal x{#}% increased Poisoning damage.`,
		id: 78,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 498.16,
		y: 90.21
	},
	"Alchemical Advantage": {
		connections: [ "Deadly Venom" ],
		description: `You gain +{#}% increased Attack Speed for each enemy you've Poisoned, up to +{#}%.`,
		id: 79,
		maxPoints: 3,
		values: [ "{1/2/3}", "{15/30/45}" ],
		x: 776.575,
		y: 174.9
	},
	"Debilitating Toxins": {
		connections: [ "Deadly Venom" ],
		description: `Poisoned enemies deal {#}% less damage.`,
		id: 80,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 776.715,
		y: 4.865
	},
	"Poison Imbuement": {
		connections: [ "Enhanced Poison Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Imbue your weapons with lethal poison. Your next {#} Imbueable Skills deal Poison damage and apply {#}% of their Base damage as additional Poisoning damage over {#} seconds.`,
		id: 128,
		maxPoints: 5,
		values: [ "9", "33", "2", "70", "5" ],
		x: 500.35,
		y: -114.65
	},
	"Enhanced Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Poison Imbuement", "Mixed Poison Imbuement", "Blended Poison Imbuement" ],
		description: `Poison Imbuement's Poisoning Duration is increased by {#} second.`,
		id: 129,
		maxPoints: 1,
		values: [ "1" ],
		x: 882.88,
		y: -208.685
	},
	"Mixed Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Lucky Hit: Poison Imbued Skills have up to a {#}% chance to apply double the amount of Poisoning damage over time.`,
		id: 130,
		maxPoints: 1,
		values: [ "30" ],
		x: 1140.45,
		y: -189.88
	},
	"Blended Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Critical Strikes with Poison Imbued Skills deal x{#}% increased Poisoning damage.`,
		id: 131,
		maxPoints: 1,
		values: [ "30" ],
		x: 969.07,
		y: -338.106
	},
	"Shadow Crash": {
		connections: [ "Consuming Shadows", "Imbuements" ],
		description: `Lucky Hit: Shadow damage has up to a {#}% chance to Stun for {#} seconds.`,
		id: 85,
		maxPoints: 3,
		values: [ "{10/20/30}", "0.5" ],
		x: -165.624,
		y: -327.788
	},
	"Consuming Shadows": {
		connections: [ "Shadow Crash" ],
		description: `Each time you kill an enemy with Shadow Damage, you generate {#} Energy.`,
		id: 86,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: -163.933,
		y: -493.045
	},
	"Shadow Imbuement": {
		connections: [ "Enhanced Shadow Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Imbue your weapons with festering shadows. Your next {#} Imbueable Skills deal Shadow damage and infect enemies for {#} seconds. Infected enemies explode on death, dealing {#}% damage to all surrounding enemies.

If the infection expires before the enemy dies, it will deal {#}% damage to only that enemy.`,
		id: 132,
		maxPoints: 5,
		values: [ "9", "33", "2", "6", "40", "40" ],
		x: 221.62,
		y: -249.835
	},
	"Enhanced Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Shadow Imbuement", "Mixed Shadow Imbuement", "Blended Shadow Imbuement" ],
		description: `You have +{#}% increased Critical Strike Chance against Injured enemies infected by Shadow Imbuement.`,
		id: 133,
		maxPoints: 1,
		values: [ "25" ],
		x: 415.425,
		y: -434.215
	},
	"Mixed Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Enemies damaged by Shadow Imbued Skills take x{#}% increased Non-Physical damage from you for {#} seconds.`,
		id: 134,
		maxPoints: 1,
		values: [ "12", "8" ],
		x: 665.515,
		y: -493.117
	},
	"Blended Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Shadow Imbuement's primary explosion makes enemies Vulnerable for {#} seconds.`,
		id: 135,
		maxPoints: 1,
		values: [ "2" ],
		x: 393.345,
		y: -571.263
	},
	"Cold Imbuement": {
		connections: [ "Enhanced Cold Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Imbue your weapons with frigid energies. Your next {#} Imbueable Skills deal Cold damage and Chill enemies for {#}% per hit.`,
		id: 136,
		maxPoints: 5,
		values: [ "9", "2", "25" ],
		x: 280.1,
		y: 265.1
	},
	"Enhanced Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Cold Imbuement", "Mixed Cold Imbuement", "Blended Cold Imbuement" ],
		description: `Lucky Hit: Cold Imbued Skills have up to a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 137,
		maxPoints: 1,
		values: [ "30", "3" ],
		x: 489.875,
		y: 445.235
	},
	"Mixed Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `Cold Imbued Skills deal x{#}% damage to Crowd Controlled enemies. Double this bonus against Frozen enemies.`,
		id: 138,
		maxPoints: 1,
		values: [ "20" ],
		x: 480.65,
		y: 583.225
	},
	"Blended Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `Lucky Hit: Critical Strikes with Cold Imbued Skills have up to a {#}% chance to instantly Freeze enemies for {#} seconds.`,
		id: 139,
		maxPoints: 1,
		values: [ "20", "3" ],
		x: 739.755,
		y: 471.33
	},
	"Frigid Finesse": {
		connections: [ "Chilling Weight", "Imbuements" ],
		description: `You deal x{#}% increased damage to Chilled enemies. This bonus increases to x{#}% against Frozen enemies.`,
		id: 99,
		maxPoints: 3,
		values: [ "{5/10/15}", "{10/20/30}" ],
		x: -160.371,
		y: 330.145
	},
	"Chilling Weight": {
		connections: [ "Frigid Finesse" ],
		description: `Chilled enemies have their Movement Speed further reduced by up to {#}%.`,
		id: 100,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: -164.62,
		y: 503.995
	},
	"Precision Imbuement": {
		connections: [ "Imbuements" ],
		description: `Imbued Skills gain +{#}% increased Critical Strike Chance.`,
		id: 94,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -614.69,
		y: 3.325
	},
};

rogueData["Ultimate"] = {
	"Innervation": {
		connections: [ "Ultimate", "Alchemist's Fortune", "Second Wind" ],
		description: `Lucky Hit: Up to a {#}% chance to gain {#} Energy.`,
		id: 101,
		maxPoints: 3,
		values: [ "{10/20/30}", "8" ],
		x: -337.03,
		y: -332.265
	},
	"Alchemist's Fortune": {
		connections: [ "Innervation" ],
		description: `Non-Physical damage you deal has a +{#}% increased Lucky Hit Chance.`,
		id: 103,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -329.83,
		y: -519.715
	},
	"Second Wind": {
		connections: [ "Innervation" ],
		description: `Every {#} Energy you spend grants you +{#}% increased Lucky Hit Chance for {#} seconds.`,
		id: 102,
		maxPoints: 3,
		values: [ "100", "{5/10/15}", "5" ],
		x: -565.345,
		y: -521.42
	},
	"Shadow Clone": {
		connections: [ "Prime Shadow Clone", "Ultimate" ],
		description: `Cooldown: {#} seconds
Your shadow mimicks your actions for {#} seconds.
The shadow deals {#}% of your damage.`,
		id: 104,
		maxPoints: 1,
		values: [ "60", "15", "60" ],
		x: 2.07,
		y: -283.5
	},
	"Prime Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Shadow Clone", "Supreme Shadow Clone" ],
		description: `You are Unstoppable for {#} seconds after casting Shadow Clone.`,
		id: 105,
		maxPoints: 1,
		values: [ "5" ],
		x: 6.085,
		y: -465.75
	},
	"Supreme Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Prime Shadow Clone" ],
		description: `Your Shadow Clone deals an additional 20% of your damage.`,
		id: 106,
		maxPoints: 1,
		x: 9.375,
		y: -623.95
	},
	"Aftermath": {
		connections: [ "Ultimate" ],
		description: `After using an Ultimate Skill, restore {#} Energy.`,
		id: 107,
		maxPoints: 3,
		values: [ "{25/50/75}" ],
		x: -537.565,
		y: 187.49
	},
	"Death Trap": {
		connections: [ "Prime Death Trap", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Place a trap that arms after {#} seconds. It activates when an enemy moves within range, dealing a total of {#}% damage to each enemy in the area.`,
		id: 108,
		maxPoints: 1,
		values: [ "45", "40", "1.25", "250" ],
		x: -543.29,
		y: 2.23
	},
	"Prime Death Trap": {
		baseSkill: "Death Trap",
		connections: [ "Death Trap", "Supreme Death Trap" ],
		description: `Enemies are Pulled into Death Trap when it activates.`,
		id: 109,
		maxPoints: 1,
		x: -905.975,
		y: 1.305
	},
	"Supreme Death Trap": {
		baseSkill: "Death Trap",
		connections: [ "Prime Death Trap" ],
		description: `If Death Trap kills an enemy, its Cooldown is reduced by {#} seconds.`,
		id: 110,
		maxPoints: 1,
		values: [ "10" ],
		x: -1195.38,
		y: 1.185
	},
	"Trap Mastery": {
		connections: [ "Ultimate" ],
		description: `When Poison Trap or Death Trap activates, you gain +{#}% increased Critical Strike Chance against Vulnerable and Crowd Controlled enemies for {#} seconds.`,
		id: 111,
		maxPoints: 3,
		values: [ "{4/8/12}", "4" ],
		x: -538.46,
		y: -182.505
	},
	"Rain of Arrows": {
		connections: [ "Prime Rain of Arrows", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Arrows rain down over a large area {#} times, each wave dealing {#}% damage.`,
		id: 112,
		maxPoints: 1,
		values: [ "60", "20", "2", "100" ],
		x: 5.58,
		y: 290.575
	},
	"Prime Rain of Arrows": {
		baseSkill: "Rain of Arrows",
		connections: [ "Rain of Arrows", "Supreme Rain of Arrows" ],
		description: `Imbuement Skill effects applied by Rain of Arrows have x{#}% increased potency.`,
		id: 113,
		maxPoints: 1,
		values: [ "20" ],
		x: 9.95,
		y: 488.685
	},
	"Supreme Rain of Arrows": {
		baseSkill: "Rain of Arrows",
		connections: [ "Prime Rain of Arrows" ],
		description: `Rain of Arrows' second wave Knocks Down enemies for {#} seconds.`,
		id: 114,
		maxPoints: 1,
		values: [ "3" ],
		x: 14.99,
		y: 646.1
	},
	"Adrenaline Rush": {
		connections: [ "Impetus", "Haste", "Ultimate" ],
		description: `While moving, you gain x{#}% increased Energy Regeneration.`,
		id: 115,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -325.67,
		y: 334.9
	},
	"Impetus": {
		connections: [ "Adrenaline Rush" ],
		description: `After moving {#} meters, your next attack deals x{#}% increased damage.`,
		id: 116,
		maxPoints: 3,
		values: [ "15", "{7/14/21}" ],
		x: -570.38,
		y: 507.995
	},
	"Haste": {
		connections: [ "Adrenaline Rush" ],
		description: `While at or above {#}% maximum Energy, gain +{#}% increased Movement Speed. While below {#}% maximum Energy, gain +{#}% increased Attack Speed.`,
		id: 117,
		maxPoints: 3,
		values: [ "50", "{5/10/15}", "50", "{5/10/15}" ],
		x: -323.665,
		y: 509.91
	},
};

rogueData["Capstone"] = {
	"Momentum": {
		connections: [ "Capstone" ],
		description: `Cutthroat Skills grant a stack of Momentum for {#} seconds if they either:
 Hit a Stunned, Dazed, or Frozen enemy
 Hit any enemy from behind

While at {#} stacks of Momentum you gain:
 {#}% increased Damage Reduction
 x{#}% increased Energy Regeneration
 +{#}% increased Movement Speed`,
		id: 118,
		maxPoints: 1,
		values: [ "8", "3", "20", "30", "15" ],
		x: -721.136,
		y: -1.72
	},
	"Close Quarters Combat": {
		connections: [ "Capstone" ],
		description: `Damaging a Close enemy with Marksman or Cutthroat Skills each grant a +{#}% Attack Speed bonus for {#} seconds.

While both Attack Speed bonuses are active, you deal x{#}% increased damage against Crowd Controlled enemies.`,
		id: 119,
		maxPoints: 1,
		values: [ "10", "8", "20" ],
		x: -564.571,
		y: 251.22
	},
	"Victimize": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Dealing direct damage to a Vulnerable enemy has up to a {#}% chance to cause an explosion, dealing {#}% of the original damage to them and surrounding enemies.`,
		id: 120,
		maxPoints: 1,
		values: [ "30", "23" ],
		x: 493.144,
		y: 247.36
	},
	"Exposure": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Dealing direct damage to an enemy affected by a Trap Skill has up to a {#}% chance to:
 Reduce the active Cooldowns of your Trap Skills by {#}%
 Drop a cluster of exploding Stun Grenades that deal {#}% total Physical damage and Stun enemies for {#} seconds.`,
		id: 121,
		maxPoints: 1,
		values: [ "25", "20", "40", "0.50" ],
		x: 779.668,
		y: -2.585
	},
	"Precision": {
		connections: [ "Capstone" ],
		description: `Critical Strikes with Marksman Skills grant you Precision. You gain x{#}% increased Critical Strike Damage per stack of Precision, up to a maximum of x{#}%.

When you reach maximum Precision, your next Marksman Skill is a guaranteed Critical Strike that deals x{#}% increased Critical Strike Damage, then consumes all stacks of Precision.`,
		id: 122,
		maxPoints: 1,
		values: [ "4", "20", "40" ],
		x: 3.252,
		y: 383.425
	},
};

export { rogueData };