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
		id: 39,
		maxPoints: 1,
		x: -162.535,
		y: -614.96
	},
	"Sturdy": {
		connections: [ "Core", "Siphoning Strikes" ],
		description: `You gain {4/8/12/16/20/24/28/32/36/40}% Close Damage Reduction.

Tags: Damage Reduction.`,
		id: 40,
		maxPoints: 3,
		x: -508.635,
		y: 1.66
	},
	"Siphoning Strikes": {
		connections: [ "Sturdy" ],
		description: `Heal for {1/2/3/4/5/6/7/8/9/10}% of your Maximum Life when you Critically Strike Close enemies.

Tags: Critical Strikes, Healing.`,
		id: 41,
		maxPoints: 3,
		x: -854.135,
		y: 2.815
	},
	"Stutter Step": {
		connections: [ "Core" ],
		description: `Critically Striking an enemy grants +{5/10/15/20/25/30/35/40/45/50}% Movement Speed for 4.0 seconds.

Tags: Critical Strikes, Movement.`,
		id: 42,
		maxPoints: 3,
		x: 577.69,
		y: 84.675
	},
};

rogueData["Agility"] = {
	"Shadow Step": {
		connections: [ "Enhanced Shadow Step", "Agility" ],
		description: `Charges: 2
Charge Cooldown: {#} seconds
Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Become Unstoppable and quickly move through the shadows to stab your victim from behind for {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% damage. Gain 50% increased Movement Speed for 2 seconds afterwards.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		id: 43,
		maxPoints: 5,
		values: [ "9", "9", "100" ],
		x: 5.42,
		y: -278.485
	},
	"Enhanced Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Shadow Step", "Methodical Shadow Step", "Disciplined Shadow Step" ],
		description: `Damaging an enemy with Shadow Step increases your Critical Strike Chance against them by +8% for 3 seconds.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
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
		id: 47,
		maxPoints: 5,
		values: [ "10", "25" ],
		x: 9.47,
		y: 289.26
	},
	"Enhanced Dash": {
		baseSkill: "Dash",
		connections: [ "Dash", "Methodical Dash", "Disciplined Dash" ],
		description: `Enemies damaged by Dash take x20% increased Critical Strike Damage from you for 5 seconds.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown, Movement.`,
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
		id: 51,
		maxPoints: 3,
		x: -590.813,
		y: 1.36
	},
	"Concussive": {
		connections: [ "Agility", "Trick Attacks" ],
		description: `After Knocking Back or Knocking Down an enemy, you gain +{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Chance against them for 3 seconds.

Tags: Crowd Control, Critical Strikes.`,
		id: 52,
		maxPoints: 3,
		x: 645.39,
		y: 181.745
	},
	"Trick Attacks": {
		connections: [ "Rapid Gambits", "Concussive" ],
		description: `When you Critically Strike a Dazed enemy they are Knocked Down for {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds.

Tags: Daze, Crowd Control, Critical Strikes.`,
		id: 143,
		maxPoints: 3,
		x: 483.505,
		y: 485.53
	},
	"Rapid Gambits": {
		connections: [ "Agility", "Trick Attacks" ],
		description: `Your Evade Cooldown is reduced by {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds when you Daze an enemy.

Tags: Daze, Crowd Control, Cooldown, .`,
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
		id: 56,
		maxPoints: 1,
		x: 1154.395,
		y: 99.55
	},
	"Rugged": {
		connections: [ "Agility", "Reactive Defense" ],
		description: `Gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction against Damage Over Time effects.

Tags: Damage Reduction.`,
		id: 57,
		maxPoints: 3,
		x: 366.67,
		y: -223.635
	},
	"Reactive Defense": {
		connections: [ "Rugged" ],
		description: `Gain {4.5/9/13.5/18/22.5/27/31.5/36/40.5/45}% Damage Reduction while inflicted with Control Impairing Effects.

Tags: Damage Reduction, Crowd Control.`,
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
		id: 127,
		maxPoints: 5,
		values: [ "20" ],
		x: -390.71,
		y: -209.637
	},
	"Enhanced Stealth": {
		baseSkill: "Concealment",
		connections: [ "Concealment", "Subverting Stealth", "Countering Stealth" ],
		description: `You gain 40 Energy when you enter Concealment.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
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
		id: 61,
		maxPoints: 1,
		x: 1157.68,
		y: 98.315
	},
	"Exploit": {
		connections: [ "Malice", "Subterfuge" ],
		description: `You deal x{6/12/18/24/30/36/42/48/54/60}% increased damage to Healthy and Injured enemies.

Tags: Healthy, Injured, Damage.`,
		id: 68,
		maxPoints: 3,
		x: 1.475,
		y: 280.736
	},
	"Malice": {
		connections: [ "Exploit" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Vulnerable enemies.

Tags: Vulnerable, Damage.`,
		id: 69,
		maxPoints: 3,
		x: 0.765,
		y: 481.536
	},
	"Agile": {
		connections: [ "Subterfuge", "Mending Obscurity" ],
		description: `Using a Cooldown increases your Dodge Chance by {3/6/9/12/15/18/21/24/27/30}% for 2 seconds.

Tags: Dodge, Cooldown.`,
		id: 67,
		maxPoints: 3,
		x: 0.75,
		y: -269.039
	},
	"Mending Obscurity": {
		connections: [ "Agile" ],
		description: `While Stealthed, you Heal for {1/2/3/4/5/6/7/8/9/10}% Maximum Life per second.

Tags: Stealth, Healing.`,
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
		id: 78,
		maxPoints: 3,
		x: 498.16,
		y: 90.21
	},
	"Alchemical Advantage": {
		connections: [ "Deadly Venom" ],
		description: `You gain +{1/2/3/4/5/6/7/8/9/10}% increased Attack Speed for each enemy you've Poisoned, up to [0.15*100|%+|].

Tags: Poison, Attack Speed.`,
		id: 79,
		maxPoints: 3,
		x: 776.575,
		y: 174.9
	},
	"Debilitating Toxins": {
		connections: [ "Deadly Venom" ],
		description: `Poisoned enemies deal {5/10/15/20/25/30/35/40/45/50}% less damage.

Tags: Poison, Damage Reduction.`,
		id: 80,
		maxPoints: 3,
		x: 776.715,
		y: 4.865
	},
	"Poison Imbuement": {
		connections: [ "Enhanced Poison Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Imbue your weapons with lethal poison. Your next 2 Imbueable Skills deal Poison damage and apply {#}% of their Base damage as additional Poisoning damage over {#} seconds.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		id: 128,
		maxPoints: 5,
		values: [ "9", "33", "70", "5" ],
		x: 500.35,
		y: -114.65
	},
	"Enhanced Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Poison Imbuement", "Mixed Poison Imbuement", "Blended Poison Imbuement" ],
		description: `Poison Imbuement's Poisoning Duration is increased by 1 second.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
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
		id: 131,
		maxPoints: 1,
		x: 969.07,
		y: -338.106
	},
	"Shadow Crash": {
		connections: [ "Consuming Shadows", "Imbuements" ],
		description: `Lucky Hit: Shadow damage has up to a 10% chance to Stun for {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds.

Tags: Crowd Control, Shadow, Lucky Hit.`,
		id: 85,
		maxPoints: 3,
		x: -165.624,
		y: -327.788
	},
	"Consuming Shadows": {
		connections: [ "Shadow Crash" ],
		description: `Each time you kill an enemy with Shadow Damage, you generate {10/20/30/40/50/60/70/80/90/100} Energy.

Tags: Shadow, Energy.`,
		id: 86,
		maxPoints: 3,
		x: -163.933,
		y: -493.045
	},
	"Shadow Imbuement": {
		connections: [ "Enhanced Shadow Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Imbue your weapons with festering shadows. Your next 2 Imbueable Skills deal Shadow damage and infect enemies for 6 seconds. Infected enemies explode on death, dealing {#}% damage to all surrounding enemies.

If the infection expires before the enemy dies, it will deal {#}% damage to only that enemy.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		id: 132,
		maxPoints: 5,
		values: [ "9", "33", "40", "40" ],
		x: 221.62,
		y: -249.835
	},
	"Enhanced Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Shadow Imbuement", "Mixed Shadow Imbuement", "Blended Shadow Imbuement" ],
		description: `You have +25% increased Critical Strike Chance against Injured enemies infected by Shadow Imbuement.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
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
		id: 135,
		maxPoints: 1,
		x: 393.345,
		y: -571.263
	},
	"Cold Imbuement": {
		connections: [ "Enhanced Cold Imbuement", "Imbuements" ],
		description: `Cooldown: {#} seconds
Imbue your weapons with frigid energies. Your next 2 Imbueable Skills deal Cold damage and Chill enemies for {#}% per hit.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		id: 136,
		maxPoints: 5,
		values: [ "9", "25" ],
		x: 280.1,
		y: 265.1
	},
	"Enhanced Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Cold Imbuement", "Mixed Cold Imbuement", "Blended Cold Imbuement" ],
		description: `Lucky Hit: Cold Imbued Skills have up to a 30% chance to make enemies Vulnerable for 3 seconds.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
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
		id: 139,
		maxPoints: 1,
		x: 739.755,
		y: 471.33
	},
	"Frigid Finesse": {
		connections: [ "Chilling Weight", "Imbuements" ],
		description: `You deal x{5/10/15/20/25/30/35/40/45/50}% increased damage to Chilled enemies. This bonus increases to x{10/20/30/40/50/60/70/80/90/100}% against Frozen enemies.

Tags: Chill, Frozen, Crowd Control, Damage.`,
		id: 99,
		maxPoints: 3,
		x: -160.371,
		y: 330.145
	},
	"Chilling Weight": {
		connections: [ "Frigid Finesse" ],
		description: `Chilled enemies have their Movement Speed further reduced by up to {10/20/30/40/50/60/70/80/90/100}%.

Tags: Chill, Crowd Control, Movement.`,
		id: 100,
		maxPoints: 3,
		x: -164.62,
		y: 503.995
	},
	"Precision Imbuement": {
		connections: [ "Imbuements" ],
		description: `Imbued Skills gain +{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Chance.

Tags: Critical Strikes, Imbuement.`,
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
		id: 101,
		maxPoints: 3,
		x: -337.03,
		y: -332.265
	},
	"Alchemist's Fortune": {
		connections: [ "Innervation" ],
		description: `Non-Physical damage you deal has a +{5/10/15/20/25/30/35/40/45/50}% increased Lucky Hit Chance.

Tags: Non-Physical, Lucky Hit.`,
		id: 103,
		maxPoints: 3,
		x: -329.83,
		y: -519.715
	},
	"Second Wind": {
		connections: [ "Innervation" ],
		description: `Every 100 Energy you spend grants you +{5/10/15/20/25/30/35/40/45/50}% increased Lucky Hit Chance for 5 seconds.

Tags: Energy, Lucky Hit.`,
		id: 102,
		maxPoints: 3,
		x: -565.345,
		y: -521.42
	},
	"Shadow Clone": {
		connections: [ "Prime Shadow Clone", "Ultimate" ],
		description: `Cooldown: {#} seconds
Your shadow mimicks your actions for 15 seconds.
The shadow deals {#}% of your damage.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		id: 104,
		maxPoints: 1,
		values: [ "60", "60" ],
		x: 2.07,
		y: -283.5
	},
	"Prime Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Shadow Clone", "Supreme Shadow Clone" ],
		description: `You are Unstoppable for 5 seconds after casting Shadow Clone.

Tags: Ultimate, Damage, Physical, Cooldown.`,
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
		id: 106,
		maxPoints: 1,
		x: 9.375,
		y: -623.95
	},
	"Aftermath": {
		connections: [ "Ultimate" ],
		description: `After using an Ultimate Skill, restore {25/50/75/100/125/150/175/200/225/250} Energy.

Tags: Energy, Ultimate.`,
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
		id: 110,
		maxPoints: 1,
		x: -1195.38,
		y: 1.185
	},
	"Trap Mastery": {
		connections: [ "Ultimate" ],
		description: `When Poison Trap or Death Trap activates, you gain +{4/8/12/16/20/24/28/32/36/40}% increased Critical Strike Chance against Vulnerable and Crowd Controlled enemies for 4 seconds.

Tags: Vulnerable, Crowd Control, Critical Strikes, Trap.`,
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
		id: 114,
		maxPoints: 1,
		x: 14.99,
		y: 646.1
	},
	"Adrenaline Rush": {
		connections: [ "Impetus", "Haste", "Ultimate" ],
		description: `While moving, you gain x{5/10/15/20/25/30/35/40/45/50}% increased Energy Regeneration.

Tags: Energy, Movement.`,
		id: 115,
		maxPoints: 3,
		x: -325.67,
		y: 334.9
	},
	"Impetus": {
		connections: [ "Adrenaline Rush" ],
		description: `After moving 15 meters, your next attack deals x{7/14/21/28/35/42/49/56/63/70}% increased damage.

Tags: Damage, Movement.`,
		id: 116,
		maxPoints: 3,
		x: -570.38,
		y: 507.995
	},
	"Haste": {
		connections: [ "Adrenaline Rush" ],
		description: `While at or above 50% maximum Energy, gain +{5/10/15/20/25/30/35/40/45/50}% increased Movement Speed. While below 50% maximum Energy, gain +{5/10/15/20/25/30/35/40/45/50}% increased Attack Speed.

Tags: Movement, Attack Speed, Energy.`,
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
		id: 119,
		maxPoints: 1,
		x: -564.571,
		y: 251.22
	},
	"Victimize": {
		connections: [ "Key Passive" ],
		description: `Lucky Hit: Dealing direct damage to a Vulnerable enemy has up to a 30% chance to cause an explosion, dealing 23% of the original damage to them and surrounding enemies.

Tags: Vulnerable, Damage, Physical, Lucky Hit.`,
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
		id: 122,
		maxPoints: 1,
		x: 3.252,
		y: 383.425
	},
};

export { rogueData };