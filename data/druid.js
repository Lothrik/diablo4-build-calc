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
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -1204.559,
		y: 4247.91
	},
	"Capstone": {
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
		description: `Cooldown: {#} seconds
Generate Spirit: {#}
Lucky Hit Chance: {#}%
Sunder the earth, impaling the first enemy hit for {#}% damage.`,
		id: 162,
		maxPoints: 5,
		values: [ "", "", "", "" ],
		x: -409.637,
		y: -122.635
	},
	"Enhanced Earth Spike": {
		baseSkill: "Earth Spike",
		connections: [ "Earth Spike", "Wild Earth Spike", "Fierce Earth Spike" ],
		description: `Earth Spike has a {#}% chance to Stun for {#} seconds.`,
		id: 163,
		maxPoints: 1,
		values: [ "", "" ],
		x: -718.25,
		y: -217.87
	},
	"Wild Earth Spike": {
		baseSkill: "Earth Spike",
		connections: [ "Enhanced Earth Spike" ],
		description: `Summon a second Earth Spike when hitting an Immobilized or Stunned enemy.`,
		id: 164,
		maxPoints: 1,
		x: -741.72,
		y: -341.93
	},
	"Fierce Earth Spike": {
		baseSkill: "Earth Spike",
		connections: [ "Enhanced Earth Spike" ],
		description: `Fortify for {#}% of your Base Life ({#}) whenever Earth Spike damages enemies who are Stunned, Immobilized, or Knocked Back.`,
		id: 165,
		maxPoints: 1,
		values: [ "", "" ],
		x: -948.965,
		y: -208.475
	},
	"Maul": {
		connections: [ "Basic", "Enhanced Maul" ],
		description: `Generate Spirit: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werebear and maul enemies in front of you, dealing {#}% damage.`,
		id: 4,
		maxPoints: 5,
		values: [ "11", "33", "21" ],
		x: 376.573,
		y: 153.87
	},
	"Enhanced Maul": {
		baseSkill: "Maul",
		connections: [ "Maul", "Wild Maul", "Fierce Maul" ],
		description: `If an enemy is hit by Maul, then Fortify for {#}% of your Base Life ({#}).`,
		id: 5,
		maxPoints: 1,
		values: [ "0.64", "" ],
		x: 662.861,
		y: 275.905
	},
	"Wild Maul": {
		baseSkill: "Maul",
		connections: [ "Enhanced Maul" ],
		description: `Maul has a {#}% chance to Knock Down enemies for {#} seconds.`,
		id: 6,
		maxPoints: 1,
		values: [ "15", "2" ],
		x: 693.195,
		y: 399.79
	},
	"Fierce Maul": {
		baseSkill: "Maul",
		connections: [ "Enhanced Maul" ],
		description: `Increases the range and radius of Maul by {#}%.`,
		id: 7,
		maxPoints: 1,
		values: [ "" ],
		x: 902.52,
		y: 279.665
	},
	"Wind Shear": {
		connections: [ "Basic", "Enhanced Wind Shear" ],
		description: `Generate Spirit: {#}
Lucky Hit Chance: {#}%
Conjure a piercing blade of wind, dealing {#}% damage.`,
		id: 8,
		maxPoints: 5,
		values: [ "12", "33", "17.85" ],
		x: -114.365,
		y: -239.92
	},
	"Enhanced Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Wind Shear", "Fierce Wind Shear", "Wild Wind Shear" ],
		description: `Wind Shear has a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 9,
		maxPoints: 1,
		values: [ "35", "4" ],
		x: -198.861,
		y: -426.135
	},
	"Fierce Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Enhanced Wind Shear" ],
		description: `Each enemy hit by Wind Shear increases your Movement Speed by +{#}% for {#} seconds, up to +{#}%.`,
		id: 10,
		maxPoints: 1,
		values: [ "5", "3", "20" ],
		x: -396.793,
		y: -516.16
	},
	"Wild Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Enhanced Wind Shear" ],
		description: `Wind Shear grants {#} additional Spirit for each enemy hit beyond the first.`,
		id: 11,
		maxPoints: 1,
		values: [ "" ],
		x: -107.221,
		y: -552.75
	},
	"Storm Strike": {
		connections: [ "Basic", "Enhanced Storm Strike" ],
		description: `Generate Spirit: {#}
Lucky Hit Chance: {#}%
Electricity gathers around your weapon, dealing {#}% damage to your target and chaining to up to {#} surrounding enemies, dealing {#}% less damage each time it chains.

You gain {#}% Damage Reduction for {#} seconds after dealing damage with Storm Strike.`,
		id: 12,
		maxPoints: 5,
		values: [ "15", "25", "28.35", "", "", "25", "3" ],
		x: 276.665,
		y: -215.355
	},
	"Enhanced Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Storm Strike", "Fierce Storm Strike", "Wild Storm Strike" ],
		description: `Storm Strike has a {#}% chance to Immobilize all enemies hit for {#} seconds.`,
		id: 13,
		maxPoints: 1,
		values: [ "", "" ],
		x: 481.829,
		y: -372.805
	},
	"Fierce Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Enhanced Storm Strike" ],
		description: `Storm Strike has a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 14,
		maxPoints: 1,
		values: [ "50", "3" ],
		x: 471.808,
		y: -509.25
	},
	"Wild Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Enhanced Storm Strike" ],
		description: `Storm Strike chains to {#} additional targets.`,
		id: 15,
		maxPoints: 1,
		values: [ "" ],
		x: 738.505,
		y: -381.855
	},
	"Claw": {
		connections: [ "Basic", "Enhanced Claw" ],
		description: `Generate Spirit: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and claw at an enemy for {#}% damage.`,
		id: 16,
		maxPoints: 5,
		values: [ "9", "50", "21" ],
		x: 499.625,
		y: -41.135
	},
	"Enhanced Claw": {
		baseSkill: "Claw",
		connections: [ "Claw", "Fierce Claw", "Wild Claw" ],
		description: `Claw's Attack Speed is increased by +{#}%.`,
		id: 17,
		maxPoints: 1,
		values: [ "10" ],
		x: 865.42,
		y: -70.405
	},
	"Fierce Claw": {
		baseSkill: "Claw",
		connections: [ "Enhanced Claw" ],
		description: `Claw applies {#}% Poisoning damage over {#} seconds.`,
		id: 18,
		maxPoints: 1,
		values: [ "", "3" ],
		x: 1070.101,
		y: -2.05
	},
	"Wild Claw": {
		baseSkill: "Claw",
		connections: [ "Enhanced Claw" ],
		description: `Claw has a {#}% chance to attack twice.`,
		id: 19,
		maxPoints: 1,
		values: [ "10" ],
		x: 1035.416,
		y: -164.095
	},
};

druidData["Spirit"] = {
	"Landslide": {
		connections: [ "Spirit", "Enhanced Landslide" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Crush enemies between 2 pillars of earth, dealing up to {#}% damage.`,
		id: 20,
		maxPoints: 5,
		values: [ "30", "20", "78.75" ],
		x: 527.495,
		y: -1.355
	},
	"Enhanced Landslide": {
		baseSkill: "Landslide",
		connections: [ "Landslide", "Raging Landslide", "Primal Landslide" ],
		description: `After Landslide damages enemies {#} times, the next hit will Immobilize enemies for {#} seconds.`,
		id: 21,
		maxPoints: 1,
		values: [ "", "3" ],
		x: 925.578,
		y: -2.315
	},
	"Raging Landslide": {
		baseSkill: "Landslide",
		connections: [ "Enhanced Landslide" ],
		description: `When you strike an Immobilized or Stunned enemy with Landslide, an additional pillar of earth is formed.`,
		id: 22,
		maxPoints: 1,
		x: 1121.353,
		y: 85.54
	},
	"Primal Landslide": {
		baseSkill: "Landslide",
		connections: [ "Enhanced Landslide" ],
		description: `When you Immobilize or Stun an enemy, you gain a Terramote. Each enemy hit by Landslide consumes a Terramote causing a guaranteed Critical Strike with x{#}% Critical Strike Damage. Bosses always have up to a {#}% chance to grant a Terramote when hit.`,
		id: 23,
		maxPoints: 1,
		values: [ "10", "30" ],
		x: 1123.278,
		y: -78.075
	},
	"Pulverize": {
		connections: [ "Spirit", "Enhanced Pulverize" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werebear and slam the ground, dealing {#}% damage to surrounding enemies.`,
		id: 24,
		maxPoints: 5,
		values: [ "35", "33", "52.5" ],
		x: -662.09,
		y: 108.51
	},
	"Enhanced Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Pulverize", "Primal Pulverize", "Raging Pulverize" ],
		description: `Your next Pulverize will Overpower every {#} seconds while you remain Healthy.`,
		id: 25,
		maxPoints: 1,
		values: [ "" ],
		x: -1030.275,
		y: 169.15
	},
	"Primal Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Enhanced Pulverize" ],
		description: `Enemies hit with Pulverize deal {#}% reduced damage for {#} seconds.`,
		id: 26,
		maxPoints: 1,
		values: [ "15", "4" ],
		x: -1158.38,
		y: 294.075
	},
	"Raging Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Enhanced Pulverize" ],
		description: `Enemies are Stunned for {#} seconds when they are Overpowered with Pulverize.`,
		id: 27,
		maxPoints: 1,
		values: [ "" ],
		x: -1271.72,
		y: 125.535
	},
	"Tornado": {
		connections: [ "Spirit", "Enhanced Tornado" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Conjure a swirling tornado that deals {#}% damage.`,
		id: 28,
		maxPoints: 5,
		values: [ "40", "33", "105" ],
		x: -658.16,
		y: -95.45
	},
	"Enhanced Tornado": {
		baseSkill: "Tornado",
		connections: [ "Tornado", "Raging Tornado", "Primal Tornado" ],
		description: `Each time you cast Tornado, you have a {#}% chance to spawn an additional Tornado.`,
		id: 29,
		maxPoints: 1,
		values: [ "20" ],
		x: -1022.51,
		y: -146.015
	},
	"Raging Tornado": {
		baseSkill: "Tornado",
		connections: [ "Enhanced Tornado" ],
		description: `Enemies hit with Tornado have a {#}% chance to become Vulnerable for {#} seconds.`,
		id: 30,
		maxPoints: 1,
		values: [ "5", "3" ],
		x: -1245.89,
		y: -85.1
	},
	"Primal Tornado": {
		baseSkill: "Tornado",
		connections: [ "Enhanced Tornado" ],
		description: `Enemies damaged by Tornado are Slowed by {#}% for {#} seconds, stacking up to {#}%.`,
		id: 31,
		maxPoints: 1,
		values: [ "8", "3", "" ],
		x: -1165.365,
		y: -263.91
	},
	"Shred": {
		connections: [ "Spirit", "Enhanced Shred" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and perform a trio of combo attacks:
1st Attack: Deal {#}% damage.
2nd Attack: Deal {#}% damage.
3rd Attack: Perform a larger finishing move dealing {#}% damage.`,
		id: 33,
		maxPoints: 5,
		values: [ "35", "20", "", "", "" ],
		x: -446.83,
		y: 275.82
	},
	"Enhanced Shred": {
		baseSkill: "Shred",
		connections: [ "Shred", "Raging Shred", "Primal Shred" ],
		description: `Shred gains +{#}% Attack Speed and Heals for {#}% of your Maximum Life ({#}) if an enemy is struck.`,
		id: 34,
		maxPoints: 1,
		values: [ "", "2", "" ],
		x: -710.395,
		y: 428.735
	},
	"Raging Shred": {
		baseSkill: "Shred",
		connections: [ "Enhanced Shred" ],
		description: `Shred's third combo attack is larger and applies an additional {#}% Poisoning damage over {#} seconds.`,
		id: 36,
		maxPoints: 1,
		values: [ "", "" ],
		x: -968.945,
		y: 450.595
	},
	"Primal Shred": {
		baseSkill: "Shred",
		connections: [ "Enhanced Shred" ],
		description: `Shred's second and third attacks also perform a dash. In addition, Shred's Critical Strike Damage is increased by x{#}%.`,
		id: 35,
		maxPoints: 1,
		values: [ "" ],
		x: -709.735,
		y: 566.865
	},
	"Lightning Storm": {
		connections: [ "Spirit", "Enhanced Lightning Storm" ],
		description: `Spirit Cost: {#} per strike
Lucky Hit Chance: {#}%
Conjure a growing lightning storm that deals {#}% damage per strike and increases the number of strikes the longer it is channeled up to a maximum of {#}.`,
		id: 37,
		maxPoints: 5,
		values: [ "15", "15", "26.25", "5" ],
		x: -452.28,
		y: -268.415
	},
	"Enhanced Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Lightning Storm", "Primal Lightning Storm", "Raging Lightning Storm" ],
		description: `The size of your Lightning Storm is preserved for {#} seconds after channeling.`,
		id: 38,
		maxPoints: 1,
		values: [ "4" ],
		x: -684.545,
		y: -435.935
	},
	"Primal Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Enhanced Lightning Storm" ],
		description: `Lightning Storm has a {#}% chance to Immobilize enemies hit for {#} seconds.`,
		id: 39,
		maxPoints: 1,
		values: [ "8", "3" ],
		x: -956.755,
		y: -443.375
	},
	"Raging Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Enhanced Lightning Storm" ],
		description: `Lightning Storm gains 1 additional lightning strike.`,
		id: 40,
		maxPoints: 1,
		x: -700.415,
		y: -572.245
	},
	"Heart of the Wild": {
		connections: [ "Spirit", "Wild Impulses", "Abundance" ],
		description: `Maximum Spirit is increased by {#}.`,
		id: 42,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -2.48,
		y: -269.805
	},
	"Wild Impulses": {
		connections: [ "Heart of the Wild" ],
		description: `Your Core Skills cost x{#}% more Spirit but deal x{#}% increased damage.`,
		id: 32,
		maxPoints: 3,
		values: [ "{5/10/15}", "{10/20/30}" ],
		x: 140.505,
		y: -403.84
	},
	"Abundance": {
		connections: [ "Heart of the Wild" ],
		description: `Basic Skills generate x{#}% more Spirit.`,
		id: 41,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -151.965,
		y: -404.925
	},
	"Predatory Instinct": {
		connections: [ "Spirit", "Iron Fur", "Digitigrade Gait" ],
		description: `Critical Strike Chance against Close enemies is increased by +{#}%.`,
		id: 136,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -4.22,
		y: 274.21
	},
	"Iron Fur": {
		connections: [ "Predatory Instinct" ],
		description: `You gain {#}% Damage Reduction while in Werebear form.

This bonus persists for {#} seconds after leaving Werebear form.`,
		id: 137,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: 126.735,
		y: 410.19
	},
	"Digitigrade Gait": {
		connections: [ "Predatory Instinct" ],
		description: `You gain +{#}% Movement Speed while in Werewolf form.

This bonus persists for {#} seconds after leaving Werewolf form.`,
		id: 138,
		maxPoints: 3,
		values: [ "{4/8/12}", "3" ],
		x: -145.46,
		y: 412.55
	},
};

druidData["Defensive"] = {
	"Earthen Bulwark": {
		connections: [ "Defensive", "Enhanced Earthen Bulwark" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Rocks surround you for {#} seconds, granting a Barrier that absorbs {#}% of your Base Life ({#}) in damage.`,
		id: 43,
		maxPoints: 5,
		values: [ "16.0", "50", "3", "10", "" ],
		x: -2.035,
		y: -310.27
	},
	"Enhanced Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Earthen Bulwark", "Innate Earthen Bulwark", "Preserving Earthen Bulwark" ],
		description: `Earthen Bulwark makes you Unstoppable while active.`,
		id: 44,
		maxPoints: 1,
		x: 5.025,
		y: -529.025
	},
	"Innate Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Rock shrapnel flies outward when Earthen Bulwark is destroyed or expires, dealing {#}% to surrounding enemies. This damage is increased by Barrier bonuses.`,
		id: 45,
		maxPoints: 1,
		values: [ "300" ],
		x: -159.395,
		y: -636.45
	},
	"Preserving Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Casting Earthen Bulwark grants {#}% Base Life ({#}) as Fortify.`,
		id: 46,
		maxPoints: 1,
		values: [ "7.2", "" ],
		x: 160.175,
		y: -637.145
	},
	"Debilitating Roar": {
		connections: [ "Defensive", "Enhanced Debilitating Roar" ],
		description: `Cooldown: {#} seconds
Shapeshift into a Werebear and bellow a mighty roar, reducing Nearby enemies' damage dealt by {#}% for {#} seconds.`,
		id: 47,
		maxPoints: 5,
		values: [ "22.0", "50", "4" ],
		x: 4.69,
		y: 314.825
	},
	"Enhanced Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Debilitating Roar", "Preserving Debilitating Roar", "Innate Debilitating Roar" ],
		description: `Debilitating Roar also Fortifies you for {#}% Base Life ({#}).`,
		id: 48,
		maxPoints: 1,
		values: [ "8.8", "" ],
		x: 4.11,
		y: 515.641
	},
	"Preserving Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Enhanced Debilitating Roar" ],
		description: `Debilitating Roar also Heals you for {#}% of your Maximum Life ({#}) each second for its duration.`,
		id: 49,
		maxPoints: 1,
		values: [ "4", "" ],
		x: 158.01,
		y: 633.444
	},
	"Innate Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Enhanced Debilitating Roar" ],
		description: `Debilitating Roar also Slows enemies by {#}% for its duration.`,
		id: 50,
		maxPoints: 1,
		values: [ "40" ],
		x: -150.868,
		y: 633.023
	},
	"Ancestral Fortitude": {
		connections: [ "Defensive", "Vigilance" ],
		description: `Increase your Non-Physical Resistances by {#}%.`,
		id: 51,
		maxPoints: 3,
		values: [ "" ],
		x: -552.215,
		y: 1.025
	},
	"Vigilance": {
		connections: [ "Ancestral Fortitude" ],
		description: `You gain {#}% Damage Reduction for {#} seconds after using a Defensive Skill.`,
		id: 52,
		maxPoints: 3,
		values: [ "", "" ],
		x: -923.905,
		y: 0.39
	},
	"Blood Howl": {
		connections: [ "Defensive", "Enhanced Blood Howl" ],
		description: `Cooldown: {#} seconds
Shapeshift into a Werewolf and howl furiously, Healing you for {#}% of your Maximum Life ({#}).`,
		id: 53,
		maxPoints: 5,
		values: [ "15.0", "20.0", "" ],
		x: 445.755,
		y: 169.805
	},
	"Enhanced Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Blood Howl", "Innate Blood Howl", "Preserving Blood Howl" ],
		description: `Kills reduce the Cooldown of Blood Howl by {#} second.`,
		id: 54,
		maxPoints: 1,
		values: [ "1" ],
		x: 774.845,
		y: 289.015
	},
	"Innate Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Enhanced Blood Howl" ],
		description: `Blood Howl also generates {#} Spirit.`,
		id: 55,
		maxPoints: 1,
		values: [ "20" ],
		x: 848.495,
		y: 414.8
	},
	"Preserving Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Enhanced Blood Howl" ],
		description: `Blood Howl also increases your Attack Speed by +{#}% for {#} seconds.`,
		id: 56,
		maxPoints: 1,
		values: [ "15", "4" ],
		x: 1024.25,
		y: 280.42
	},
	"Cyclone Armor": {
		connections: [ "Defensive", "Enhanced Cyclone Armor" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: Powerful winds surround you, granting {#}% Non-Physical Damage Reduction.

Active: The winds rapidly expand, Knocking Back enemies and dealing {#}% damage.`,
		id: 57,
		maxPoints: 5,
		values: [ "15.0", "25", "20", "15.75" ],
		x: 415.99,
		y: -192.375
	},
	"Enhanced Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Cyclone Armor", "Preserving Cyclone Armor", "Innate Cyclone Armor" ],
		description: `Enemies who are Knocked Back by Cyclone Armor are also Slowed by {#}% for {#} seconds.`,
		id: 58,
		maxPoints: 1,
		values: [ "40", "3" ],
		x: 726.745,
		y: -326.92
	},
	"Preserving Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Every {#} seconds, Cyclone Armor intensifies, causing incoming damage to grant you {#}% Damage Reduction for {#} seconds.`,
		id: 59,
		maxPoints: 1,
		values: [ "10", "40", "" ],
		x: 754.5,
		y: -466.305
	},
	"Innate Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Enemies Knocked Back by Cyclone Armor become Vulnerable for {#} seconds.`,
		id: 60,
		maxPoints: 1,
		values: [ "" ],
		x: 995.69,
		y: -331.115
	},
};

druidData["Companion"] = {
	"Ravens": {
		connections: [ "Companion", "Enhanced Ravens" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: {#} Ravens fly above you and periodically attack your enemies for {#}% damage every {#} seconds.

Active: The target area is swarmed with ravens, dealing {#}% damage over {#} seconds.`,
		id: 62,
		maxPoints: 5,
		values: [ "25.0", "33", "", "89.25", "6", "", "" ],
		x: 0.92,
		y: 293.68
	},
	"Enhanced Ravens": {
		baseSkill: "Ravens",
		connections: [ "Ravens", "Brutal Ravens", "Ferocious Ravens" ],
		description: `You have +{#}% increased Critical Strike Chance for {#} seconds against Enemies hit by Ravens.`,
		id: 63,
		maxPoints: 1,
		values: [ "13.85", "5" ],
		x: 1.905,
		y: 492.536
	},
	"Brutal Ravens": {
		baseSkill: "Ravens",
		connections: [ "Enhanced Ravens" ],
		description: `{#} additional Ravens periodically attack enemies.`,
		id: 64,
		maxPoints: 1,
		values: [ "2" ],
		x: -148.35,
		y: 612.144
	},
	"Ferocious Ravens": {
		baseSkill: "Ravens",
		connections: [ "Enhanced Ravens" ],
		description: `Enemies inside the swarm of Ravens when it is activated become Vulnerable for {#} seconds.`,
		id: 65,
		maxPoints: 1,
		values: [ "3" ],
		x: 134.94,
		y: 611.014
	},
	"Call of the Wild": {
		connections: [ "Companion" ],
		description: `Your companions deal x{#}% bonus damage.`,
		id: 66,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: 550.22,
		y: 0.364
	},
	"Vine Creeper": {
		connections: [ "Companion", "Enhanced Vine Creeper" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: A vine creeper periodically emerges from the ground every {#} seconds and applies {#}% Poisoning damage over {#} seconds to an enemy in the area.

Active: Vines strangle all surrounding enemies, Immobilizing them for {#} seconds and poisoning them for {#}% damage over {#} seconds.`,
		id: 67,
		maxPoints: 5,
		values: [ "20.0", "40", "7", "37.8", "6", "2", "31.5", "2" ],
		x: -535.155,
		y: -0.594
	},
	"Enhanced Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Vine Creeper", "Ferocious Vine Creeper", "Brutal Vine Creeper" ],
		description: `Vine Creeper's Immobilize duration is increased by {#} second.`,
		id: 68,
		maxPoints: 1,
		values: [ "1" ],
		x: -918.845,
		y: 0.299
	},
	"Ferocious Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Enhanced Vine Creeper" ],
		description: `Vine Creeper's active Poisoning duration is increased by {#} seconds.`,
		id: 69,
		maxPoints: 1,
		values: [ "3" ],
		x: -1107.645,
		y: 88.49
	},
	"Brutal Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Enhanced Vine Creeper" ],
		description: `Your Critical Strike Chance is increased by +{#}% against enemies strangled by Vine Creeper.`,
		id: 70,
		maxPoints: 1,
		values: [ "20" ],
		x: -1097.525,
		y: -94.798
	},
	"Wolves": {
		connections: [ "Companion", "Enhanced Wolves" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: Summon {#} wolf companions that bite enemies for {#}% damage.

Active: Direct your wolves to focus an enemy, leaping to them and striking for {#}% damage.`,
		id: 71,
		maxPoints: 5,
		values: [ "14.0", "50", "2", "8.19", "36.75" ],
		x: 7.69,
		y: -289.968
	},
	"Enhanced Wolves": {
		baseSkill: "Wolves",
		connections: [ "Wolves", "Brutal Wolf Pack", "Ferocious Wolf Pack" ],
		description: `Wolves deal x{#}% increased damage to Immobilized, Stunned, Slowed, or Poisoned enemies.`,
		id: 139,
		maxPoints: 1,
		values: [ "20" ],
		x: 7.025,
		y: -503.006
	},
	"Brutal Wolf Pack": {
		baseSkill: "Wolves",
		connections: [ "Enhanced Wolves" ],
		description: `When you Critically Strike, your Wolves gain +{#}% Attack Speed for {#} seconds.`,
		id: 74,
		maxPoints: 1,
		values: [ "", "" ],
		x: -161.61,
		y: -605.781
	},
	"Ferocious Wolf Pack": {
		baseSkill: "Wolves",
		connections: [ "Enhanced Wolves" ],
		description: `Lucky Hit: Your Wolves' attacks have up to a {#}% chance to Fortify you for {#}% Base Life ({#}).`,
		id: 73,
		maxPoints: 1,
		values: [ "", "", "" ],
		x: 170.175,
		y: -604.816
	},
	"Nature's Reach": {
		connections: [ "Companion" ],
		description: `Deal x{#}% increased damage to Distant enemies. Double this bonus if they are also Slowed, Stunned, Immobilized, or Knocked Back.`,
		id: 75,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -372.585,
		y: -196.762
	},
	"Clarity": {
		connections: [ "Companion" ],
		description: `Gain {#} Spirit when transforming into Human form.`,
		id: 76,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -373.905,
		y: 228.091
	},
};

druidData["Wrath"] = {
	"Elemental Exposure": {
		connections: [ "Charged Atmosphere", "Wrath", "Endless Tempest" ],
		description: `Lucky Hit: Your Storm Skills have up to a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 80,
		maxPoints: 3,
		values: [ "{20/40/60}", "1" ],
		x: -180.95,
		y: -344.481
	},
	"Charged Atmosphere": {
		connections: [ "Elemental Exposure", "Electric Shock", "Bad Omen" ],
		description: `Every {#} seconds, a lightning strike hits a Nearby enemy dealing {#}% damage.`,
		id: 81,
		maxPoints: 3,
		values: [ "{18/13.5/10}", "47.25" ],
		x: -373.152,
		y: -445.477
	},
	"Electric Shock": {
		connections: [ "Charged Atmosphere", "Bad Omen" ],
		description: `Lucky Hit: Dealing Lightning damage to enemies has a {#}% chance to Immobilize them for {#} seconds.

If the target is already Immobilized, the Lightning damage dealt to them is increased by x{#}% instead.`,
		id: 82,
		maxPoints: 3,
		values: [ "{5/10/15}", "3", "" ],
		x: -373.93,
		y: -598.557
	},
	"Bad Omen": {
		connections: [ "Charged Atmosphere", "Electric Shock", "Endless Tempest" ],
		description: `Lucky Hit: Up to a {#}% chance when dealing damage to a Vulnerable, Immobilized or Stunned enemy that a lightning strike also hits dealing {#}% damage.`,
		id: 83,
		maxPoints: 3,
		values: [ "{10/20/30}", "57.25" ],
		x: 3.305,
		y: -597.918
	},
	"Endless Tempest": {
		connections: [ "Elemental Exposure", "Bad Omen" ],
		description: `Increase the duration of Hurricane and Cataclysm by x{#}%.`,
		id: 84,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 2.355,
		y: -446.745
	},
	"Boulder": {
		connections: [ "Wrath", "Enhanced Boulder" ],
		description: `Spirit Cost: {#}
Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Unearth a large rolling boulder that Knocks Back and crushes enemies, dealing {#}% damage with each hit.`,
		id: 85,
		maxPoints: 5,
		values: [ "10.0", "20", "34.65", "" ],
		x: 528.095,
		y: -212.19
	},
	"Enhanced Boulder": {
		baseSkill: "Boulder",
		connections: [ "Boulder", "Natural Boulder", "Savage Boulder" ],
		description: `When Boulder reaches the end of its path, enemies hit are Slowed by {#}% for {#} seconds. If Boulder Overpowered, enemies are Stunned for {#} seconds instead.`,
		id: 86,
		maxPoints: 1,
		values: [ "30", "2", "" ],
		x: 826.57,
		y: -328.209
	},
	"Natural Boulder": {
		baseSkill: "Boulder",
		connections: [ "Enhanced Boulder" ],
		description: `While you have any Fortify, Boulder has +{#}% increased Critical Strike Chance.`,
		id: 87,
		maxPoints: 1,
		values: [ "75" ],
		x: 892.545,
		y: -454.143
	},
	"Savage Boulder": {
		baseSkill: "Boulder",
		connections: [ "Enhanced Boulder" ],
		description: `Boulder's Critical Strike Chance is increased by +{#}% each time it deals damage.`,
		id: 88,
		maxPoints: 1,
		values: [ "3" ],
		x: 1067.875,
		y: -321.359
	},
	"Trample": {
		connections: [ "Wrath", "Enhanced Trample" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werebear, become Unstoppable, and charge forward, dealing {#}% damage and Knocking Back enemies.

Enemies who are Knocked Back into terrain take an additional {#}% damage and are Stunned for {#} seconds.`,
		id: 89,
		maxPoints: 5,
		values: [ "14.0", "33", "26.25", "47.25", "3" ],
		x: -538.268,
		y: 76.5
	},
	"Enhanced Trample": {
		baseSkill: "Trample",
		connections: [ "Trample", "Natural Trample", "Savage Trample" ],
		description: `Trample deals x{#}% bonus damage. This bonus is reduced by x{#}% for each enemy hit after the first.`,
		id: 90,
		maxPoints: 1,
		values: [ "", "" ],
		x: -913.338,
		y: 77.55
	},
	"Natural Trample": {
		baseSkill: "Trample",
		connections: [ "Enhanced Trample" ],
		description: `Casting Trample grants {#}% Base Life ({#}) as Fortify.`,
		id: 91,
		maxPoints: 1,
		values: [ "6", "" ],
		x: -1104.485,
		y: 4.955
	},
	"Savage Trample": {
		baseSkill: "Trample",
		connections: [ "Enhanced Trample" ],
		description: `Casting Trample grants {#} Spirit.`,
		id: 92,
		maxPoints: 1,
		values: [ "20" ],
		x: -1110.255,
		y: 154.84
	},
	"Crushing Earth": {
		connections: [ "Wrath", "Safeguard", "Stone Guard" ],
		description: `Earth Skills deal x{#}% increased damage to Slowed, Stunned, Immobilized or Knocked Back enemies.`,
		id: 93,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 527.13,
		y: 1.665
	},
	"Safeguard": {
		connections: [ "Crushing Earth" ],
		description: `Critical Strikes with Earth Skills Fortify you for {#}% Base Life ({#}).`,
		id: 94,
		maxPoints: 3,
		values: [ "", "" ],
		x: 827.855,
		y: -81.72
	},
	"Stone Guard": {
		connections: [ "Crushing Earth" ],
		description: `While you have Fortify for over {#}% of your Maximum Life, your Earth Skills deal x{#}% increased damage.`,
		id: 95,
		maxPoints: 3,
		values: [ "50", "{4/8/12}" ],
		x: 824.875,
		y: 86.045
	},
	"Hurricane": {
		connections: [ "Wrath", "Enhanced Hurricane" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Form a hurricane around you that deals {#}% damage to surrounding enemies over {#} seconds.`,
		id: 99,
		maxPoints: 5,
		values: [ "20.0", "33", "102.37", "8" ],
		x: 255.145,
		y: -347.168
	},
	"Enhanced Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Hurricane", "Natural Hurricane", "Savage Hurricane" ],
		description: `Enemies who are damaged by Hurricane are Slowed by {#}% for {#} seconds.`,
		id: 100,
		maxPoints: 1,
		values: [ "25", "2" ],
		x: 394.545,
		y: -539.728
	},
	"Natural Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Enhanced Hurricane" ],
		description: `Hurricane has a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 101,
		maxPoints: 1,
		values: [ "15", "3" ],
		x: 317.175,
		y: -657.602
	},
	"Savage Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Enhanced Hurricane" ],
		description: `Enemies affected by Hurricane deal {#}% less damage.`,
		id: 102,
		maxPoints: 1,
		values: [ "20" ],
		x: 615.43,
		y: -591.031
	},
	"Rabies": {
		connections: [ "Wrath", "Enhanced Rabies" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and perform an infectious bite on the target dealing {#}% damage, and applying an additional {#}% Poisoning damage over {#} seconds.

Infected enemies spread Rabies to other surrounding targets.`,
		id: 103,
		maxPoints: 5,
		values: [ "12.0", "50", "29.4", "55.65", "6" ],
		x: 522.33,
		y: 283.86
	},
	"Enhanced Rabies": {
		baseSkill: "Rabies",
		connections: [ "Rabies", "Natural Rabies", "Savage Rabies" ],
		description: `Rabies' Poisoning damage also increases over the lifetime of the disease, dealing x{#}% bonus damage at max duration.`,
		id: 104,
		maxPoints: 1,
		values: [ "4" ],
		x: 774.63,
		y: 431.475
	},
	"Natural Rabies": {
		baseSkill: "Rabies",
		connections: [ "Enhanced Rabies" ],
		description: `Rabies spreads {#}% faster.`,
		id: 105,
		maxPoints: 1,
		values: [ "10" ],
		x: 791.44,
		y: 566.785
	},
	"Savage Rabies": {
		baseSkill: "Rabies",
		connections: [ "Enhanced Rabies" ],
		description: `Rabies deals its total Poisoning damage in {#} seconds instead of {#}.`,
		id: 106,
		maxPoints: 1,
		values: [ "", "" ],
		x: 1026.475,
		y: 443.83
	},
	"Mending": {
		connections: [ "Wrath", "Provocation" ],
		description: `While in Werebear form, you receive +{#}% additional Healing from all sources.`,
		id: 97,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -545.966,
		y: -78.47
	},
	"Provocation": {
		connections: [ "Mending" ],
		description: `When you remain in Werebear form for at least {#} seconds, your next Skill will Overpower.`,
		id: 98,
		maxPoints: 3,
		values: [ "30" ],
		x: -906.653,
		y: -78.28
	},
	"Neurotoxin": {
		connections: [ "Wrath", "Toxic Claws", "Envenom" ],
		description: `Poisoned enemies are slowed by {#}%.`,
		id: 79,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: 0.3,
		y: 283.825
	},
	"Toxic Claws": {
		connections: [ "Neurotoxin" ],
		description: `Critical Strikes with Werewolf Skills deal {#}% of their Base damage as Poisoning damage over {#} seconds.`,
		id: 78,
		maxPoints: 3,
		values: [ "{8/16/24}", "4" ],
		x: 142.805,
		y: 424.725
	},
	"Envenom": {
		connections: [ "Neurotoxin" ],
		description: `Poisoned enemies take x{#}% additional Critical Strike Damage.`,
		id: 166,
		maxPoints: 3,
		values: [ "" ],
		x: -150.834,
		y: 424.885
	},
};

druidData["Ultimate"] = {
	"Grizzly Rage": {
		connections: [ "Ultimate", "Prime Grizzly Rage" ],
		description: `Cooldown: {#} seconds
Shapeshift into  Dire Werebear for {#} seconds gaining x{#}% bonus damage and {#}% Damage Reduction. Damage bonus is increased by {#}% each second while in this form.

Kills extend the duration by {#} second up to {#} additional seconds.`,
		id: 107,
		maxPoints: 1,
		values: [ "60.0", "10", "20", "20", "3", "1", "10" ],
		x: 4.395,
		y: 301.055
	},
	"Prime Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Supreme Grizzly Rage", "Grizzly Rage" ],
		description: `You are Unstoppable while Grizzly Rage is active.`,
		id: 108,
		maxPoints: 1,
		x: 148.47,
		y: 497.15
	},
	"Supreme Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Prime Grizzly Rage" ],
		description: `Gain {#}% Base Life ({#}) as Fortify per second while Grizzly Rage is active.`,
		id: 109,
		maxPoints: 1,
		values: [ "3.2", "" ],
		x: -1.065,
		y: 641.92
	},
	"Petrify": {
		connections: [ "Ultimate", "Prime Petrify" ],
		description: `Cooldown: {#} seconds
Encase all Nearby enemies in stone, Stunning them for {#} seconds. You deal x{#}% increased Critical Strike Damage to enemies affected by Petrify.

Against Bosses, the Critical Strike Damage bonus is increased to x{#}% and its duration is increased to {#} seconds.`,
		id: 110,
		maxPoints: 1,
		values: [ "60.0", "3", "25", "", "" ],
		x: 3.895,
		y: -279.14
	},
	"Prime Petrify": {
		baseSkill: "Petrify",
		connections: [ "Supreme Petrify", "Petrify" ],
		description: `Petrify's effect durations are increased by {#} second.`,
		id: 111,
		maxPoints: 1,
		values: [ "1" ],
		x: 193.785,
		y: -466.65
	},
	"Supreme Petrify": {
		baseSkill: "Petrify",
		connections: [ "Prime Petrify" ],
		description: `Killing an enemy affected by Petrify grants {#} Spirit.`,
		id: 112,
		maxPoints: 1,
		values: [ "25" ],
		x: -0.87,
		y: -605.175
	},
	"Defensive Posture": {
		connections: [ "Ultimate", "Thick Hide", "Nature's Resolve" ],
		description: `Increases the amount of Fortify you gain from all sources by +{#}%.`,
		id: 113,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 509.67,
		y: 1.205
	},
	"Thick Hide": {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `Whenever you are Stunned, Immobilized, or Knocked Down, Fortify for {#}% Base Life ({#}).`,
		id: 114,
		maxPoints: 3,
		values: [ "2.56", "" ],
		x: 781.551,
		y: -84.42
	},
	"Unrestrained": {
		connections: [ "Thick Hide", "Nature's Resolve" ],
		description: `Reduce the duration of Control Impairing Effects by {#}%. Triple this effect while you have Fortify for over {#}% of your Maximum Life.`,
		id: 115,
		maxPoints: 3,
		values: [ "{3/6/9}", "20" ],
		x: 1046.071,
		y: -0.59
	},
	"Nature's Resolve": {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `{#}% chance when struck to Fortify you for {#}% Base Life ({#}).`,
		id: 116,
		maxPoints: 3,
		values: [ "{5/10/15}", "1.76", "" ],
		x: 782.325,
		y: 91.16
	},
	"Quickshift": {
		connections: [ "Ultimate", "Natural Fortitude", "Heightened Senses" ],
		description: `When a Shapeshifting Skill transforms you into a different form, it deals x{#}% increased damage.`,
		id: 117,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -406.14,
		y: 294.95
	},
	"Natural Fortitude": {
		connections: [ "Quickshift" ],
		description: `Shapeshifting Fortifies you for {#}% Base Life ({#}).`,
		id: 118,
		maxPoints: 3,
		values: [ "{0.56/1.12/1.68}", "" ],
		x: -565.17,
		y: 421.475
	},
	"Heightened Senses": {
		connections: [ "Quickshift" ],
		description: `Upon shapeshifting into a Werewolf or Werebear, gain {#}% Damage Reduction against Elites for {#} seconds.`,
		id: 119,
		maxPoints: 3,
		values: [ "{4/8/12}", "3" ],
		x: -254.14,
		y: 423.295
	},
	"Lacerate": {
		connections: [ "Ultimate", "Prime Lacerate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf, become Immune and quickly dash {#} times between enemies in the area dealing up to {#}% damage.`,
		id: 120,
		maxPoints: 1,
		values: [ "50.0", "15", "10", "420" ],
		x: -581.85,
		y: 142.205
	},
	"Prime Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Supreme Lacerate", "Lacerate" ],
		description: `Each time Lacerate deals a Critical Strike, Heal for {#}% Maximum Life ({#}).`,
		id: 121,
		maxPoints: 1,
		values: [ "3", "" ],
		x: -953.225,
		y: 146.245
	},
	"Supreme Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Prime Lacerate" ],
		description: `Lacerate's initial strike is guaranteed to Critically Strike and deals x{#}% increased damage.`,
		id: 122,
		maxPoints: 1,
		values: [ "200" ],
		x: -1155.4,
		y: 290.655
	},
	"Cataclysm": {
		connections: [ "Ultimate", "Prime Cataclysm" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
A massive storm follows you for {#} seconds. Tornadoes Knock Back enemies, and lightning strikes wildly dealing {#}% damage.`,
		id: 123,
		maxPoints: 1,
		values: [ "80.0", "82", "8", "54.6" ],
		x: -581.665,
		y: -104.025
	},
	"Prime Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Supreme Cataclysm", "Cataclysm" ],
		description: `Cataclysm's duration is increased by {#} seconds.`,
		id: 124,
		maxPoints: 1,
		values: [ "2" ],
		x: -951.14,
		y: -111.45
	},
	"Supreme Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Prime Cataclysm" ],
		description: `Lightning strikes from Cataclysm make enemies Vulnerable for 2 seconds.`,
		id: 125,
		maxPoints: 1,
		x: -1152.59,
		y: -253.34
	},
	"Defiance": {
		connections: [ "Ultimate", "Circle of Life", "Natural Disaster" ],
		description: `Nature Magic Skills deal x{#}% increased damage to Elites.`,
		id: 126,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -433.135,
		y: -261.99
	},
	"Circle of Life": {
		connections: [ "Defiance", "Resonance" ],
		description: `Nature Magic Skills that consume Spirit Heal you for {#}% of your Maximum Life ({#}).`,
		id: 127,
		maxPoints: 3,
		values: [ "{1/2/3}", "" ],
		x: -603.125,
		y: -405.69
	},
	"Resonance": {
		connections: [ "Natural Disaster", "Circle of Life" ],
		description: `Nature Magic Skills deal x{#}% increased damage. Triple this bonus if an Earth Skill is the next Skill cast after a Storm Skill, or a  Storm Skill is the next Skill cast after an Earth Skill.`,
		id: 128,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -425.3,
		y: -549.32
	},
	"Natural Disaster": {
		connections: [ "Defiance", "Resonance" ],
		description: `Your Earth Skills deal x{#}% increased damage to Vulnerable enemies.

Your Storm Skills deal x{#}% increased damage to enemies that are Stunned, Immobilized, or Knocked Back.`,
		id: 129,
		maxPoints: 3,
		values: [ "{4/8/12}", "{4/8/12}" ],
		x: -257.095,
		y: -407.48
	},
};

druidData["Capstone"] = {
	"Nature's Fury": {
		connections: [ "Capstone" ],
		description: `Casting an Earth Skill has a {#}% chance to trigger a free Storm Skill of the same category.

In addition, casting a Storm Skill has a {#}% chance to trigger a free Earth Skill of the same category.`,
		id: 130,
		maxPoints: 1,
		values: [ "20", "20" ],
		x: 551.172,
		y: -296.755
	},
	"Earthen Might": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Damaging enemies with Earth Skills has up to a {#}% chance to:
 Restore all of your Spirit
 Cause your attacks to be guaranteed Critical Strikes for {#} seconds

This chance is increased by:
 {#}% for Critical Strikes
 {#}% if the target is Stunned, Immobilized, or Knocked Back.`,
		id: 131,
		maxPoints: 1,
		values: [ "5", "10", "10", "100" ],
		x: 551.997,
		y: -60.41
	},
	"Lupine Ferocity": {
		connections: [ "Capstone" ],
		description: `Every 6th Werewolf Skill hit Critically Strikes and deals x{#}% increased damage.`,
		id: 132,
		maxPoints: 1,
		values: [ "60" ],
		x: -87.174,
		y: 309.645
	},
	"Bestial Rampage": {
		connections: [ "Capstone" ],
		description: `After being a Werewolf for {#} seconds, gain +{#}% Attack Speed for {#} seconds.

After being a Werebear for {#} seconds, deal x{#}% increased damage for {#} seconds.`,
		id: 133,
		maxPoints: 1,
		values: [ "2.5", "20", "15", "2.5", "20", "15" ],
		x: -579.178,
		y: 308.825
	},
	"Perfect Storm": {
		connections: [ "Capstone" ],
		description: `Your Storm Skills grant {#} Spirit and deal x{#}% increased damage when damaging a Vulnerable, Immobilized or Slowed enemy.`,
		id: 134,
		maxPoints: 1,
		values: [ "2", "20" ],
		x: 128.936,
		y: -296.355
	},
	"Ursine Strength": {
		connections: [ "Capstone" ],
		description: `Gain x{#}% additional Maximum Life while in Werebear form and for {#} seconds after leaving Werebear form.

While Healthy, deal x{#}% increased damage.`,
		id: 135,
		maxPoints: 1,
		values: [ "20", "3", "20" ],
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
			values: [ "10" ],
			description: `Gain +{#} Maximum Spirit.`,
			id: 143
		},
		"Wariness": {
			values: [ "10" ],
			description: `Take {#}% reduced damage from Elites.`,
			id: 144
		},
		"Advantageous Beast": {
			values: [ "15" ],
			description: `Reduce the duration of Control Impairing Effects by {#}%.`,
			id: 145
		}
	},
	"Eagle": {
		id: 159,
		"Scythe Talons": {
			values: [ "5" ],
			description: `Gain +{#}% increased Critical Strike Chance.`,
			id: 146
		},
		"Iron Feather": {
			values: [ "10" ],
			description: `Gain x{#}% Maximum Life.`,
			id: 147
		},
		"Swooping Attacks": {
			values: [ "10" ],
			description: `Gain +{#}% Attack Speed.`,
			id: 148
		},
		"Avian Wrath": {
			values: [ "30" ],
			description: `Gain x{#}% Critical Strike Damage.`,
			id: 149
		}
	},
	"Snake": {
		id: 161,
		"Obsidian Slam": {
			values: [ "" ],
			description: `Every {#}th kill will cause your next Earth Skill to Overpower.`,
			id: 154
		},
		"Overload": {
			values: [ "20", "60" ],
			description: `Lucky Hit: Dealing Lightning damage has up to a {#}% chance to cause the target to emit a static discharge, dealing {#}% Lightning damage to surrounding enemies.`,
			id: 155
		},
		"Masochistic": {
			values: [ "3", "" ],
			description: `Critical Strikes with Shapeshifting Skills Heal you for {#}% Maximum Life ({#}).`,
			id: 156
		},
		"Calm Before the Storm": {
			values: [ "15", "2" ],
			description: `Lucky Hit: Nature Magic Skills have up to a {#}% chance to reduce the Cooldown of your Ultimate Skill by {#} seconds.`,
			id: 157
		}
	},
	"Wolf": {
		id: 160,
		"Packleader": {
			values: [ "20" ],
			description: `Lucky Hit: Critical Strikes have up to a {#}% chance to reset the Cooldowns of your Companion Skills.`,
			id: 150
		},
		"Energize": {
			values: [ "15", "10" ],
			description: `Lucky Hit: Dealing damage has up to a {#}% chance to restore {#} Spirit.`,
			id: 151
		},
		"Bolster": {
			values: [ "10" ],
			description: `Fortify for {#}% of your Maximum Life when you use a Defensive Skill.`,
			id: 152
		},
		"Calamity": {
			values: [ "25" ],
			description: `Extend the duration of Ultimate Skills by {#}%.`,
			id: 153
		}
	}
};

export { druidData };