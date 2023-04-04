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
		description: `Generate Spirit: 8
Lucky Hit Chance: {#}%
Sunder the earth, impaling the first enemy hit for {16/17.6/19.2/20.8/22.4/24/25.6/27.2/28.8/30.4}% damage.

Tags: Basic, Nature Magic, Earth, Damage, Spirit, Physical.`,
		id: 162,
		maxPoints: 5,
		values: [ "25" ],
		x: -409.637,
		y: -122.635
	},
	"Enhanced Earth Spike": {
		baseSkill: "Earth Spike",
		connections: [ "Earth Spike", "Wild Earth Spike", "Fierce Earth Spike" ],
		description: `Earth Spike has a 10% chance to Stun for 2.5 seconds.

Tags: Basic, Nature Magic, Earth, Damage, Spirit, Physical.`,
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
		id: 164,
		maxPoints: 1,
		x: -741.72,
		y: -341.93
	},
	"Fierce Earth Spike": {
		baseSkill: "Earth Spike",
		connections: [ "Enhanced Earth Spike" ],
		description: `Fortify for 2.4% of your Base Life whenever Earth Spike damages enemies who are Stunned, Immobilized, or Knocked Back.

Tags: Basic, Nature Magic, Earth, Damage, Spirit, Physical.`,
		id: 165,
		maxPoints: 1,
		x: -948.965,
		y: -208.475
	},
	"Maul": {
		connections: [ "Basic", "Enhanced Maul" ],
		description: `Generate Spirit: 11
Lucky Hit Chance: {#}%
Shapeshift into a Werebear and maul enemies in front of you, dealing {20/22/24/26/28/30/32/34/36/38}% damage.

Tags: Basic, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		id: 4,
		maxPoints: 5,
		values: [ "25" ],
		x: 376.573,
		y: 153.87
	},
	"Enhanced Maul": {
		baseSkill: "Maul",
		connections: [ "Maul", "Wild Maul", "Fierce Maul" ],
		description: `If an enemy is hit by Maul, then Fortify for 1.6% of your Base Life.

Tags: Basic, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		id: 5,
		maxPoints: 1,
		x: 662.861,
		y: 275.905
	},
	"Wild Maul": {
		baseSkill: "Maul",
		connections: [ "Enhanced Maul" ],
		description: `Maul has a 10% chance to Knock Down enemies for 1.5 seconds.

Tags: Basic, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		id: 6,
		maxPoints: 1,
		x: 693.195,
		y: 399.79
	},
	"Fierce Maul": {
		baseSkill: "Maul",
		connections: [ "Enhanced Maul" ],
		description: `Increases the range and radius of Maul by 30%.

Tags: Basic, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		id: 7,
		maxPoints: 1,
		x: 902.52,
		y: 279.665
	},
	"Wind Shear": {
		connections: [ "Basic", "Enhanced Wind Shear" ],
		description: `Generate Spirit: 12
Lucky Hit Chance: {#}%
Conjure a piercing blade of wind, dealing {17/18.7/20.4/22.1/23.8/25.5/27.2/28.9/30.6/32.3}% damage.

Tags: Basic, Nature Magic, Storm, Damage, Spirit, Physical.`,
		id: 8,
		maxPoints: 5,
		values: [ "33" ],
		x: -114.365,
		y: -239.92
	},
	"Enhanced Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Wind Shear", "Fierce Wind Shear", "Wild Wind Shear" ],
		description: `Wind Shear has a 20% chance to make enemies Vulnerable for 4 seconds.

Tags: Basic, Nature Magic, Storm, Damage, Spirit, Physical.`,
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
		id: 11,
		maxPoints: 1,
		x: -107.221,
		y: -552.75
	},
	"Storm Strike": {
		connections: [ "Basic", "Enhanced Storm Strike" ],
		description: `Generate Spirit: 15
Lucky Hit Chance: {#}%
Electricity gathers around your weapon, dealing {20/22/24/26/28/30/32/34/36/38}% damage to your target and chaining to up to {#} surrounding enemies, dealing 20% less damage each time it chains.

You gain 25% Damage Reduction for 3 seconds after dealing damage with Storm Strike.

Tags: Basic, Nature Magic, Storm, Damage, Damage Reduction, Spirit, Lightning.`,
		id: 12,
		maxPoints: 5,
		values: [ "25", "3" ],
		x: 276.665,
		y: -215.355
	},
	"Enhanced Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Storm Strike", "Fierce Storm Strike", "Wild Storm Strike" ],
		description: `Storm Strike has a 15% chance to Immobilize all enemies hit for 2.5 seconds.

Tags: Basic, Nature Magic, Storm, Damage, Damage Reduction, Spirit, Lightning.`,
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
		id: 15,
		maxPoints: 1,
		x: 738.505,
		y: -381.855
	},
	"Claw": {
		connections: [ "Basic", "Enhanced Claw" ],
		description: `Generate Spirit: 9
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and claw at an enemy for {20/22/24/26/28/30/32/34/36/38}% damage.

Tags: Basic, Shapeshifting, Werewolf, Damage, Spirit, Physical.`,
		id: 16,
		maxPoints: 5,
		values: [ "50" ],
		x: 499.625,
		y: -41.135
	},
	"Enhanced Claw": {
		baseSkill: "Claw",
		connections: [ "Claw", "Fierce Claw", "Wild Claw" ],
		description: `Claw's Attack Speed is increased by +10%.

Tags: Basic, Shapeshifting, Werewolf, Damage, Spirit, Physical.`,
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
Lucky Hit Chance: {#}%
Crush enemies between 2 pillars of earth, dealing up to {112.5/123.9/135/146.4/157.5/168.6/180/191.4/202.5/213.6}% damage.

Tags: Core, Nature Magic, Earth, Spirit, Damage.`,
		id: 20,
		maxPoints: 5,
		values: [ "30", "20" ],
		x: 527.495,
		y: -1.355
	},
	"Enhanced Landslide": {
		baseSkill: "Landslide",
		connections: [ "Landslide", "Raging Landslide", "Primal Landslide" ],
		description: `After Landslide damages enemies 4 times, the next hit will Immobilize enemies for 3 seconds.

Tags: Core, Nature Magic, Earth, Spirit, Damage.`,
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
		id: 23,
		maxPoints: 1,
		x: 1123.278,
		y: -78.075
	},
	"Pulverize": {
		connections: [ "Spirit", "Enhanced Pulverize" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werebear and slam the ground, dealing {50/55/60/65/70/75/80/85/90/95}% damage to surrounding enemies.

Tags: Core, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		id: 24,
		maxPoints: 5,
		values: [ "35", "33" ],
		x: -662.09,
		y: 108.51
	},
	"Enhanced Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Pulverize", "Primal Pulverize", "Raging Pulverize" ],
		description: `Your next Pulverize will Overpower every 10 seconds while you remain Healthy.

Tags: Core, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
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
		id: 26,
		maxPoints: 1,
		x: -1158.38,
		y: 294.075
	},
	"Raging Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Enhanced Pulverize" ],
		description: `Enemies are Stunned for 2 seconds when they are Overpowered with Pulverize.

Tags: Core, Shapeshifting, Werebear, Spirit, Damage, Physical.`,
		id: 27,
		maxPoints: 1,
		x: -1271.72,
		y: 125.535
	},
	"Tornado": {
		connections: [ "Spirit", "Enhanced Tornado" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Conjure a swirling tornado that deals {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage.

Tags: Core, Nature Magic, Storm, Spirit, Damage, Physical.`,
		id: 28,
		maxPoints: 5,
		values: [ "40", "33" ],
		x: -658.16,
		y: -95.45
	},
	"Enhanced Tornado": {
		baseSkill: "Tornado",
		connections: [ "Tornado", "Raging Tornado", "Primal Tornado" ],
		description: `Each time you cast Tornado, you have a 20% chance to spawn an additional Tornado.

Tags: Core, Nature Magic, Storm, Spirit, Damage, Physical.`,
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
		id: 31,
		maxPoints: 1,
		x: -1165.365,
		y: -263.91
	},
	"Shred": {
		connections: [ "Spirit", "Enhanced Shred" ],
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and perform a trio of combo attacks:
• 1st Attack: Deal {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage.
• 2nd Attack: Deal {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage.
• 3rd Attack: Perform a larger finishing move dealing {60/66/72/78/84/90/96/102/108/114}% damage.

Tags: Core, Shapeshifting, Werewolf, Spirit, Damage, Physical.`,
		id: 33,
		maxPoints: 5,
		values: [ "35", "20" ],
		x: -446.83,
		y: 275.82
	},
	"Enhanced Shred": {
		baseSkill: "Shred",
		connections: [ "Shred", "Raging Shred", "Primal Shred" ],
		description: `Shred gains +30% Attack Speed and Heals for 2% of your Maximum Life if an enemy is struck.

Tags: Core, Shapeshifting, Werewolf, Spirit, Damage, Physical.`,
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
		id: 35,
		maxPoints: 1,
		x: -709.735,
		y: 566.865
	},
	"Lightning Storm": {
		connections: [ "Spirit", "Enhanced Lightning Storm" ],
		description: `Spirit Cost: {#} per strike
Lucky Hit Chance: {#}%
Conjure a growing lightning storm that deals {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage per strike and increases the number of strikes the longer it is channeled up to a maximum of {#}.

Tags: Core, Nature Magic, Storm, Channeled, Spirit, Damage, Lightning.`,
		id: 37,
		maxPoints: 5,
		values: [ "15", "15", "5" ],
		x: -452.28,
		y: -268.415
	},
	"Enhanced Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Lightning Storm", "Primal Lightning Storm", "Raging Lightning Storm" ],
		description: `The size of your Lightning Storm is preserved for 4 seconds after channeling.

Tags: Core, Nature Magic, Storm, Channeled, Spirit, Damage, Lightning.`,
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
		id: 40,
		maxPoints: 1,
		x: -700.415,
		y: -572.245
	},
	"Heart of the Wild": {
		connections: [ "Spirit", "Wild Impulses", "Abundance" ],
		description: `Maximum Spirit is increased by {3/6/9/12/15/18/21/24/27/30}.

Tags: Spirit.`,
		id: 42,
		maxPoints: 3,
		x: -2.48,
		y: -269.805
	},
	"Wild Impulses": {
		connections: [ "Heart of the Wild" ],
		description: `Your Core Skills cost x{5/10/15/20/25/30/35/40/45/50}% more Spirit but deal x{10/20/30/40/50/60/70/80/90/100}% increased damage.

Tags: Damage, Spirit, Core.`,
		id: 32,
		maxPoints: 3,
		x: 140.505,
		y: -403.84
	},
	"Abundance": {
		connections: [ "Heart of the Wild" ],
		description: `Basic Skills generate x{10/20/30/40/50/60/70/80/90/100}% more Spirit.

Tags: Spirit, Basic.`,
		id: 41,
		maxPoints: 3,
		x: -151.965,
		y: -404.925
	},
	"Predatory Instinct": {
		connections: [ "Spirit", "Iron Fur", "Digitigrade Gait" ],
		description: `Critical Strike Chance against Close enemies is increased by +{3/6/9/12/15/18/21/24/27/30}%.

Tags: Critical Strikes.`,
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
Lucky Hit Chance: {#}%
Rocks surround you for 3 seconds, granting a Barrier that absorbs {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% of your Base Life in damage.

Tags: Defensive, Nature Magic, Earth, Barrier, Cooldown.`,
		id: 43,
		maxPoints: 5,
		values: [ "16", "50" ],
		x: -2.035,
		y: -310.27
	},
	"Enhanced Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Earthen Bulwark", "Innate Earthen Bulwark", "Preserving Earthen Bulwark" ],
		description: `Earthen Bulwark makes you Unstoppable while active.

Tags: Defensive, Nature Magic, Earth, Barrier, Cooldown.`,
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
		id: 46,
		maxPoints: 1,
		x: 160.175,
		y: -637.145
	},
	"Debilitating Roar": {
		connections: [ "Defensive", "Enhanced Debilitating Roar" ],
		description: `Cooldown: {#} seconds
Shapeshift into a Werebear and bellow a mighty roar, reducing Nearby enemies' damage dealt by 50% for 4 seconds.

Tags: Defensive, Shapeshifting, Werebear, Cooldown, Damage Reduction.`,
		id: 47,
		maxPoints: 5,
		values: [ "22" ],
		x: 4.69,
		y: 314.825
	},
	"Enhanced Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Debilitating Roar", "Preserving Debilitating Roar", "Innate Debilitating Roar" ],
		description: `Debilitating Roar also Fortifies you for 22% Base Life.

Tags: Defensive, Shapeshifting, Werebear, Cooldown, Damage Reduction.`,
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
		id: 49,
		maxPoints: 1,
		x: 158.01,
		y: 633.444
	},
	"Innate Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Enhanced Debilitating Roar" ],
		description: `Debilitating Roar also Slows enemies by 40% for its duration.

Tags: Defensive, Shapeshifting, Werebear, Cooldown, Damage Reduction.`,
		id: 50,
		maxPoints: 1,
		x: -150.868,
		y: 633.023
	},
	"Ancestral Fortitude": {
		connections: [ "Defensive", "Vigilance" ],
		description: `Increase your Non-Physical Resistances by {5/10/15/20/25/30/35/40/45/50}%.

Tags: Non-Physical, Resistance.`,
		id: 51,
		maxPoints: 3,
		x: -552.215,
		y: 1.025
	},
	"Vigilance": {
		connections: [ "Ancestral Fortitude" ],
		description: `You gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction for 6 seconds after using a Defensive Skill.

Tags: Damage Reduction, Defensive.`,
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
		id: 56,
		maxPoints: 1,
		x: 1024.25,
		y: 280.42
	},
	"Cyclone Armor": {
		connections: [ "Defensive", "Enhanced Cyclone Armor" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: Powerful winds surround you, granting {20/21.8/23.5/25.2/26.8/28.4/30/31.6/33.1/34.6}% Non-Physical Damage Reduction.

Active: The winds rapidly expand, Knocking Back enemies and dealing {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% damage.

Tags: Defensive, Nature Magic, Storm, Cooldown, Damage, Damage Reduction, Non-Physical, Physical, Crowd Control.`,
		id: 57,
		maxPoints: 5,
		values: [ "18", "25" ],
		x: 415.99,
		y: -192.375
	},
	"Enhanced Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Cyclone Armor", "Preserving Cyclone Armor", "Innate Cyclone Armor" ],
		description: `Enemies who are Knocked Back by Cyclone Armor are also Slowed by 70% for 1.5 seconds.

Tags: Defensive, Nature Magic, Storm, Cooldown, Damage, Damage Reduction, Non-Physical, Physical, Crowd Control.`,
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
Lucky Hit Chance: {#}%
Passive: {#} Ravens fly above you and periodically attack your enemies for {#}% damage every 5 seconds.

Active: The target area is swarmed with ravens, dealing {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% damage over 6 seconds.

Tags: Companion, Physical, Damage, Cooldown.`,
		id: 62,
		maxPoints: 5,
		values: [ "15", "33", "", "13" ],
		x: 0.92,
		y: 293.68
	},
	"Enhanced Ravens": {
		baseSkill: "Ravens",
		connections: [ "Ravens", "Brutal Ravens", "Ferocious Ravens" ],
		description: `You have +5% increased Critical Strike Chance for 6 seconds against Enemies hit by Ravens.

Tags: Companion, Physical, Damage, Cooldown.`,
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
		id: 65,
		maxPoints: 1,
		x: 134.94,
		y: 611.014
	},
	"Call of the Wild": {
		connections: [ "Companion" ],
		description: `Your companions deal x{10/20/30/40/50/60/70/80/90/100}% bonus damage.

Tags: Companion, Damage.`,
		id: 66,
		maxPoints: 3,
		x: 550.22,
		y: 0.364
	},
	"Vine Creeper": {
		connections: [ "Companion", "Enhanced Vine Creeper" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: A vine creeper periodically emerges from the ground every {#} seconds and applies {#} Poisoning damage over {#} seconds to an enemy in the area.

Active: Vines strangle all surrounding enemies, Immobilizing them for {#} seconds and poisoning them for {#}% damage over {#} seconds.

Tags: Companion, Poison, Damage, Cooldown, Crowd Control.`,
		id: 67,
		maxPoints: 5,
		values: [ "20", "40", "7", "36", "6", "2", "30", "2" ],
		x: -535.155,
		y: -0.594
	},
	"Enhanced Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Vine Creeper", "Ferocious Vine Creeper", "Brutal Vine Creeper" ],
		description: `Vine Creeper's Immobilize duration is increased by 1 second.

Tags: Companion, Poison, Damage, Cooldown, Crowd Control.`,
		id: 68,
		maxPoints: 1,
		x: -918.845,
		y: 0.299
	},
	"Ferocious Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Enhanced Vine Creeper" ],
		description: `Vine Creeper's active Poisoning duration is increased by 3 seconds.

Tags: Companion, Poison, Damage, Cooldown, Crowd Control.`,
		id: 69,
		maxPoints: 1,
		x: -1107.645,
		y: 88.49
	},
	"Brutal Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Enhanced Vine Creeper" ],
		description: `Your Critical Strike Chance is increased by +20% against enemies strangled by Vine Creeper.

Tags: Companion, Poison, Damage, Cooldown, Crowd Control.`,
		id: 70,
		maxPoints: 1,
		x: -1097.525,
		y: -94.798
	},
	"Wolves": {
		connections: [ "Companion", "Enhanced Wolf Pack" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: Summon {#} wolf companions that bite enemies for {#}% damage.

Active: Direct your wolves to focus an enemy, leaping to them and striking for {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage.

Tags: Companion, Cooldown, Damage, Physical.`,
		id: 71,
		maxPoints: 5,
		values: [ "14", "50", "2", "8" ],
		x: 7.69,
		y: -289.968
	},
	"Enhanced Wolf Pack": {
		baseSkill: "Wolves",
		connections: [ "Wolves", "Brutal Wolf Pack", "Ferocious Wolf Pack" ],
		description: `Wolves deal x20% increased damage to Immobilized, Stunned, Slowed, or Poisoned enemies.

Tags: Companion, Cooldown, Damage, Physical.`,
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
		id: 73,
		maxPoints: 1,
		x: 170.175,
		y: -604.816
	},
	"Nature's Reach": {
		connections: [ "Companion" ],
		description: `Deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Distant enemies. Double this bonus if they are also Slowed, Stunned, Immobilized, or Knocked Back.

Tags: Damage, Crowd Control.`,
		id: 75,
		maxPoints: 3,
		x: -372.585,
		y: -196.762
	},
	"Clarity": {
		connections: [ "Companion" ],
		description: `Gain {2/4/6/8/10/12/14/16/18/20} Spirit when transforming into Human form.

Tags: Spirit, Shapeshifting.`,
		id: 76,
		maxPoints: 3,
		x: -373.905,
		y: 228.091
	},
};

druidData["Wrath"] = {
	"Elemental Exposure": {
		connections: [ "Charged Atmosphere", "Wrath", "Endless Tempest" ],
		description: `Lucky Hit: Your Storm Skills have up to a 20% chance to make enemies Vulnerable for {1/2/3/4/5/6/7/8/9/10} seconds.

Tags: Vulnerable, Lucky Hit, Storm, Nature Magic.`,
		id: 80,
		maxPoints: 3,
		x: -180.95,
		y: -344.481
	},
	"Charged Atmosphere": {
		connections: [ "Elemental Exposure", "Electric Shock", "Bad Omen" ],
		description: `Every {18/15/12/9/6/3/0/-3/-6/-9} seconds, a lightning strike hits a Nearby enemy dealing 45% damage.

Tags: Storm, Nature Magic, Damage, Lightning.`,
		id: 81,
		maxPoints: 3,
		x: -373.152,
		y: -445.477
	},
	"Electric Shock": {
		connections: [ "Charged Atmosphere", "Bad Omen" ],
		description: `Lucky Hit: Dealing Lightning damage to enemies has a {5/10/15/20/25/30/35/40/45/50}% chance to Immobilize them for 3 seconds.

If the target is already Immobilized, the Lightning damage dealt to them is increased by x{5/10/15/20/25/30/35/40/45/50}% instead.

Tags: Crowd Control, Lightning, Lucky Hit, Damage.`,
		id: 82,
		maxPoints: 3,
		x: -373.93,
		y: -598.557
	},
	"Bad Omen": {
		connections: [ "Charged Atmosphere", "Electric Shock", "Endless Tempest" ],
		description: `Lucky Hit: Up to a {10/20/30/40/50/60/70/80/90/100}% chance when dealing damage to a Vulnerable, Immobilized or Stunned enemy that a lightning strike also hits dealing 55% damage.

Tags: Vulnerable, Lightning, Damage, Nature Magic, Storm, Lucky Hit, Crowd Control.`,
		id: 83,
		maxPoints: 3,
		x: 3.305,
		y: -597.918
	},
	"Endless Tempest": {
		connections: [ "Elemental Exposure", "Bad Omen" ],
		description: `Increase the duration of Hurricane and Cataclysm by x{5/10/15/20/25/30/35/40/45/50}%.

Tags: Damage, Storm, Nature Magic.`,
		id: 84,
		maxPoints: 3,
		x: 2.355,
		y: -446.745
	},
	"Boulder": {
		connections: [ "Wrath", "Enhanced Boulder" ],
		description: `Spirit Cost: {#}
Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Unearth a large rolling boulder that Knocks Back and crushes enemies, dealing {33/36.3/39.6/42.9/46.2/49.5/52.8/56.1/59.4/62.7}% damage with each hit.

Tags: Wrath, Nature Magic, Earth, Physical, Damage, Cooldown, Crowd Control.`,
		id: 85,
		maxPoints: 5,
		values: [ "", "10", "20" ],
		x: 528.095,
		y: -212.19
	},
	"Enhanced Boulder": {
		baseSkill: "Boulder",
		connections: [ "Boulder", "Natural Boulder", "Savage Boulder" ],
		description: `When Boulder reaches the end of its path, enemies hit are Slowed by 30% for 3 seconds. If Boulder Overpowered, enemies are Stunned for 4 seconds instead.

Tags: Wrath, Nature Magic, Earth, Physical, Damage, Cooldown, Crowd Control.`,
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
		id: 88,
		maxPoints: 1,
		x: 1067.875,
		y: -321.359
	},
	"Trample": {
		connections: [ "Wrath", "Enhanced Trample" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werebear, become Unstoppable, and charge forward, dealing {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage and Knocking Back enemies.

Enemies who are Knocked Back into terrain take an additional {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% damage and are Stunned for 3 seconds.

Tags: Wrath, Shapeshifting, Werebear, Unstoppable, Physical, Damage, Cooldown, Crowd Control.`,
		id: 89,
		maxPoints: 5,
		values: [ "14", "33" ],
		x: -538.268,
		y: 76.5
	},
	"Enhanced Trample": {
		baseSkill: "Trample",
		connections: [ "Trample", "Natural Trample", "Savage Trample" ],
		description: `Trample deals x30% bonus damage. This bonus is reduced by x15% for each enemy hit after the first.

Tags: Wrath, Shapeshifting, Werebear, Unstoppable, Physical, Damage, Cooldown, Crowd Control.`,
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
		id: 92,
		maxPoints: 1,
		x: -1110.255,
		y: 154.84
	},
	"Crushing Earth": {
		connections: [ "Wrath", "Safeguard", "Stone Guard" ],
		description: `Earth Skills deal x{5/10/15/20/25/30/35/40/45/50}% increased damage to Slowed, Stunned, Immobilized or Knocked Back enemies.

Tags: Damage, Crowd Control, Earth, Nature Magic.`,
		id: 93,
		maxPoints: 3,
		x: 527.13,
		y: 1.665
	},
	"Safeguard": {
		connections: [ "Crushing Earth" ],
		description: `Critical Strikes with Earth Skills Fortify you for {2.2/4.4/6.6/8.8/11/13.2/15.4/17.6/19.8/22}% Base Life.

Tags: Fortify, Critical Strikes, Earth, Nature Magic.`,
		id: 94,
		maxPoints: 3,
		x: 827.855,
		y: -81.72
	},
	"Stone Guard": {
		connections: [ "Crushing Earth" ],
		description: `While you have Fortify for over [0.5*100|%|] of your Maximum Life, your Earth Skills deal x{4/8/12/16/20/24/28/32/36/40}% increased damage.

Tags: Fortify, Damage, Life, Earth, Nature Magic.`,
		id: 95,
		maxPoints: 3,
		x: 824.875,
		y: 86.045
	},
	"Hurricane": {
		connections: [ "Wrath", "Enhanced Hurricane" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Form a hurricane around you that deals {97.5/107.2/117/126.8/136.5/146.2/156/165.8/175.5/185.2}% damage to surrounding enemies over 8 seconds.

Tags: Wrath, Nature Magic, Storm, Physical, Damage, Cooldown.`,
		id: 99,
		maxPoints: 5,
		values: [ "20", "33" ],
		x: 255.145,
		y: -347.168
	},
	"Enhanced Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Hurricane", "Natural Hurricane", "Savage Hurricane" ],
		description: `Enemies who are damaged by Hurricane are Slowed by 25% for 2 seconds.

Tags: Wrath, Nature Magic, Storm, Physical, Damage, Cooldown.`,
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
		id: 102,
		maxPoints: 1,
		x: 615.43,
		y: -591.031
	},
	"Rabies": {
		connections: [ "Wrath", "Enhanced Rabies" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and perform an infectious bite on the target dealing {28/30.8/33.6/36.4/39.2/42/44.8/47.6/50.4/53.2}% damage, and applying an additional {#} Poisoning damage over {#} seconds.

Infected enemies spread Rabies to other surrounding targets.

Tags: Wrath, Shapeshifting, Werewolf, Poison, Damage, Cooldown.`,
		id: 103,
		maxPoints: 5,
		values: [ "12", "50", "53", "6" ],
		x: 522.33,
		y: 283.86
	},
	"Enhanced Rabies": {
		baseSkill: "Rabies",
		connections: [ "Rabies", "Natural Rabies", "Savage Rabies" ],
		description: `Rabies' Poisoning damage also increases over the lifetime of the disease, dealing x30% bonus damage at max duration.

Tags: Wrath, Shapeshifting, Werewolf, Poison, Damage, Cooldown.`,
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
		id: 106,
		maxPoints: 1,
		x: 1026.475,
		y: 443.83
	},
	"Mending": {
		connections: [ "Wrath", "Provocation" ],
		description: `While in Werebear form, you receive +{5/10/15/20/25/30/35/40/45/50}% additional Healing from all sources.

Tags: Shapeshifting, Healing, Werebear.`,
		id: 97,
		maxPoints: 3,
		x: -545.966,
		y: -78.47
	},
	"Provocation": {
		connections: [ "Mending" ],
		description: `When you remain in Werebear form for at least {25/20/15/10/5/0/-5/-10/-15/-20} seconds, your next Skill will Overpower.

Tags: Overpower, Shapeshifting, Werebear.`,
		id: 98,
		maxPoints: 3,
		x: -906.653,
		y: -78.28
	},
	"Neurotoxin": {
		connections: [ "Wrath", "Toxic Claws", "Envenom" ],
		description: `Poisoned enemies are slowed by {8/16/24/32/40/48/56/64/72/80}%.

Tags: Poison, Crowd Control.`,
		id: 79,
		maxPoints: 3,
		x: 0.3,
		y: 283.825
	},
	"Toxic Claws": {
		connections: [ "Neurotoxin" ],
		description: `Critical Strikes with Werewolf Skills deal {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% of their Base damage as Poisoning damage over 4 seconds.

Tags: Critical Strikes, Werewolf, Poison, Damage, Shapeshifting.`,
		id: 78,
		maxPoints: 3,
		x: 142.805,
		y: 424.725
	},
	"Envenom": {
		connections: [ "Neurotoxin" ],
		description: `Poisoned enemies take x{10/20/30/40/50/60/70/80/90/100}% additional Critical Strike Damage.

Tags: Poison, Critical Strikes, Damage.`,
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
		id: 107,
		maxPoints: 1,
		values: [ "60" ],
		x: 4.395,
		y: 301.055
	},
	"Prime Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Supreme Grizzly Rage", "Grizzly Rage" ],
		description: `You are Unstoppable while Grizzly Rage is active.

Tags: Ultimate, Shapeshifting, Werebear, Damage Reduction, Damage, Cooldown.`,
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
		id: 109,
		maxPoints: 1,
		x: -1.065,
		y: 641.92
	},
	"Petrify": {
		connections: [ "Ultimate", "Prime Petrify" ],
		description: `Cooldown: {#} seconds
Encase all Nearby enemies in stone, Stunning them for {#} seconds. You deal x25% increased Critical Strike Damage to enemies affected by Petrify.

Against Bosses, the Critical Strike Damage bonus is increased to x50% and its duration is increased to {#} seconds.

Tags: Ultimate, Nature Magic, Earth, Crowd Control, Cooldown, Critical Strikes.`,
		id: 110,
		maxPoints: 1,
		values: [ "60", "3", "25" ],
		x: 3.895,
		y: -279.14
	},
	"Prime Petrify": {
		baseSkill: "Petrify",
		connections: [ "Supreme Petrify", "Petrify" ],
		description: `Petrify's effect durations are increased by 1 second.

Tags: Ultimate, Nature Magic, Earth, Crowd Control, Cooldown, Critical Strikes.`,
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
		id: 112,
		maxPoints: 1,
		x: -0.87,
		y: -605.175
	},
	"Defensive Posture": {
		connections: [ "Ultimate", "Thick Hide", "Nature's Resolve" ],
		description: `Increases the amount of Fortify you gain from all sources by +{5/10/15/20/25/30/35/40/45/50}%.

Tags: Fortify.`,
		id: 113,
		maxPoints: 3,
		x: 509.67,
		y: 1.205
	},
	"Thick Hide": {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `Whenever you are Stunned, Immobilized, or Knocked Down, Fortify for {6.4/12.8/19.2/25.6/32/38.4/44.8/51.2/57.6/64}% Base Life.

Tags: Fortify, Crowd Control.`,
		id: 114,
		maxPoints: 3,
		x: 781.551,
		y: -84.42
	},
	"Unrestrained": {
		connections: [ "Thick Hide", "Nature's Resolve" ],
		description: `Reduce the duration of Control Impairing Effects by {3/6/9/12/15/18/21/24/27/30}%. Triple this effect while you have Fortify for over 50% of your Maximum Life.

Tags: Fortify, Life, Crowd Control.`,
		id: 115,
		maxPoints: 3,
		x: 1046.071,
		y: -0.59
	},
	"Nature's Resolve": {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `{5/10/15/20/25/30/35/40/45/50}% chance when struck to Fortify you for 4.4% Base Life.

Tags: Fortify.`,
		id: 116,
		maxPoints: 3,
		x: 782.325,
		y: 91.16
	},
	"Quickshift": {
		connections: [ "Ultimate", "Natural Fortitude", "Heightened Senses" ],
		description: `When a Shapeshifting Skill transforms you into a different form, it deals x{5/10/15/20/25/30/35/40/45/50}% increased damage.

Tags: Shapeshifting, Damage.`,
		id: 117,
		maxPoints: 3,
		x: -406.14,
		y: 294.95
	},
	"Natural Fortitude": {
		connections: [ "Quickshift" ],
		description: `Shapeshifting Fortifies you for {1.4/2.8/4.2/5.6/7/8.4/9.8/11.2/12.6/14}% Base Life.

Tags: Fortify, Shapeshifting.`,
		id: 118,
		maxPoints: 3,
		x: -565.17,
		y: 421.475
	},
	"Heightened Senses": {
		connections: [ "Quickshift" ],
		description: `Upon shapeshifting into a Werewolf or Werebear, gain {4/8/12/16/20/24/28/32/36/40}% Damage Reduction against Elites for 5 seconds.

Tags: Damage Reduction, Shapeshifting, Elite Monsters, Werebear, Werewolf.`,
		id: 119,
		maxPoints: 3,
		x: -254.14,
		y: 423.295
	},
	"Lacerate": {
		connections: [ "Ultimate", "Prime Lacerate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf, become Immune and quickly dash 10 times between enemies in the area dealing up to 400% damage.

Tags: Ultimate, Shapeshifting, Werewolf, Immune, Physical, Damage, Cooldown, Damage Reduction.`,
		id: 120,
		maxPoints: 1,
		values: [ "50", "15" ],
		x: -581.85,
		y: 142.205
	},
	"Prime Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Supreme Lacerate", "Lacerate" ],
		description: `Each time Lacerate deals a Critical Strike, Heal for 3% Maximum Life.

Tags: Ultimate, Shapeshifting, Werewolf, Immune, Physical, Damage, Cooldown, Damage Reduction.`,
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
		id: 122,
		maxPoints: 1,
		x: -1155.4,
		y: 290.655
	},
	"Cataclysm": {
		connections: [ "Ultimate", "Prime Cataclysm" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
A massive storm follows you for {#} seconds. Tornadoes Knock Back enemies, and lightning strikes wildly dealing 52% damage.

Tags: Ultimate, Nature Magic, Storm, Lightning, Damage, Cooldown, Crowd Control.`,
		id: 123,
		maxPoints: 1,
		values: [ "80", "82", "8" ],
		x: -581.665,
		y: -104.025
	},
	"Prime Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Supreme Cataclysm", "Cataclysm" ],
		description: `Cataclysm's duration is increased by 2 seconds.

Tags: Ultimate, Nature Magic, Storm, Lightning, Damage, Cooldown, Crowd Control.`,
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
		id: 125,
		maxPoints: 1,
		x: -1152.59,
		y: -253.34
	},
	"Defiance": {
		connections: [ "Ultimate", "Circle of Life", "Natural Disaster" ],
		description: `Nature Magic Skills deal x{4/8/12/16/20/24/28/32/36/40}% increased damage to Elites.

Tags: Damage, Elite Monsters, Nature Magic.`,
		id: 126,
		maxPoints: 3,
		x: -433.135,
		y: -261.99
	},
	"Circle of Life": {
		connections: [ "Defiance", "Resonance" ],
		description: `Nature Magic Skills that consume Spirit Heal you for {1/2/3/4/5/6/7/8/9/10}% of your Maximum Life.

Tags: Healing, Nature Magic, Spirit.`,
		id: 127,
		maxPoints: 3,
		x: -603.125,
		y: -405.69
	},
	"Resonance": {
		connections: [ "Natural Disaster", "Circle of Life" ],
		description: `Nature Magic Skills deal x{2/4/6/8/10/12/14/16/18/20}% increased damage. Triple this bonus if an Earth Skill is the next Skill cast after a Storm Skill, or a  Storm Skill is the next Skill cast after an Earth Skill.

Tags: Damage, Nature Magic, Earth, Storm.`,
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
		id: 131,
		maxPoints: 1,
		x: 551.997,
		y: -60.41
	},
	"Lupine Ferocity": {
		connections: [ "Key Passive" ],
		description: `Every 6th Werewolf Skill hit Critically Strikes and deals x60% increased damage.

Tags: Critical Strikes, Damage, Werewolf, Shapeshifting.`,
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
		id: 133,
		maxPoints: 1,
		x: -579.178,
		y: 308.825
	},
	"Perfect Storm": {
		connections: [ "Key Passive" ],
		description: `Your Storm Skills grant 2 Spirit and deal x20% increased damage when damaging a Vulnerable, Immobilized or Slowed enemy.

Tags: Vulnerable, Damage, Spirit, Storm, Crowd Control, Nature Magic.`,
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
			values: [ "20" ],
			description: `Lucky Hit: Dealing Lightning damage has up to a 20% chance to cause the target to emit a static discharge, dealing {#} Lightning damage to surrounding enemies.`,
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