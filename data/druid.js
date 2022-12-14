let druid = {};

druid["Trunk Data"] = {
	"Basic": {
		connections: [ "Spirit" ],
		x: 0,
		y: 0,
	},
	"Spirit": {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: 5.146,
		y: 1132.94,
	},
	"Defensive": {
		connections: [ "Companion" ],
		requiredPoints: 6,
		x: -1248.81,
		y: 2232.505,
	},
	"Companion": {
		connections: [ "Wrath" ],
		requiredPoints: 11,
		x: 1251.46,
		y: 2231.245,
	},
	"Wrath": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: -1242.16,
		y: 3763.334,
	},
	"Ultimate": {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 1240.835,
		y: 3765.088,
	},
	"Capstone": {
		requiredPoints: 33,
		x: 8.196,
		y: 4695.885,
	},
	"Spirit Boons": {
		x: 2500,
		y: 0
	},
};

druid["Basic"] = {
	"Earthspike": {
		connections: [ "Basic", "Enhanced Earthspike" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Generate Spirit: {#}
Lucky Hit Chance: {#}%
Sunder the earth, impaling the first enemy hit for {#}% damage.`,
		id: 0,
		maxPoints: 5,
		values: [ "", "8", "25", "16.8" ],
		x: -348.701,
		y: -67.625
	},
	"Enhanced Earthspike": {
		baseSkill: "Earthspike",
		connections: [ "Earthspike", "Wild Earthspike", "Fierce Earthspike" ],
		description: `Earthspike has an {#}% chance to Stun for {#} seconds.`,
		id: 1,
		maxPoints: 1,
		values: [ "10", "2.5" ],
		x: -677.445,
		y: -139.94
	},
	"Wild Earthspike": {
		baseSkill: "Earthspike",
		connections: [ "Enhanced Earthspike" ],
		description: `Summon a second Earthspike when hitting an Immobilized or Stunned enemy.`,
		id: 2,
		maxPoints: 1,
		x: -804.45,
		y: -293.3
	},
	"Fierce Earthspike": {
		baseSkill: "Earthspike",
		connections: [ "Enhanced Earthspike" ],
		description: `Fortify for {#}% of your Base Life ({#}) whenever Earth Spike damages enemies who are Stunned, Immobilized, or Knocked Back.`,
		id: 3,
		maxPoints: 1,
		values: [ "0.96", "" ],
		x: -1023.235,
		y: -145.735
	},
	"Maul": {
		connections: [ "Basic", "Enhanced Maul" ],
		damageType: 0,
		description: `Generate Spirit: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werebear and maul enemies in front of you, dealing {#}% damage.`,
		id: 4,
		maxPoints: 5,
		values: [ "11", "33", "21" ],
		x: -262.904,
		y: 151.445
	},
	"Enhanced Maul": {
		baseSkill: "Maul",
		connections: [ "Maul", "Wild Maul", "Fierce Maul" ],
		description: `If an enemy is hit by Maul, then Fortify for {#}% Base Life ({#}).`,
		id: 5,
		maxPoints: 1,
		values: [ "0.64", "" ],
		x: -513.505,
		y: 282.48
	},
	"Wild Maul": {
		baseSkill: "Maul",
		connections: [ "Enhanced Maul" ],
		description: `Maul has a {#}% chance to Knock Down enemies for {#} seconds.`,
		id: 6,
		maxPoints: 1,
		values: [ "15", "2" ],
		x: -827.765,
		y: 318.3
	},
	"Fierce Maul": {
		baseSkill: "Maul",
		connections: [ "Enhanced Maul" ],
		description: `Increases the range and radius of Maul by {#}%.`,
		id: 7,
		maxPoints: 1,
		values: [ "4" ],
		x: -578.085,
		y: 450.045
	},
	"Wind Shear": {
		connections: [ "Basic", "Enhanced Wind Shear" ],
		damageType: 0,
		description: `Generate Spirit: {#}
Lucky Hit Chance: {#}%
Conjure a piercing blade of wind, dealing {#}% damage.`,
		id: 8,
		maxPoints: 5,
		values: [ "12", "33", "17.85" ],
		x: -2.291,
		y: -199.935
	},
	"Enhanced Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Wind Shear", "Fierce Wind Shear", "Wild Wind Shear" ],
		description: `Wind Shear has a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 9,
		maxPoints: 1,
		values: [ "35", "4" ],
		x: 0.368,
		y: -368.37
	},
	"Fierce Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Enhanced Wind Shear" ],
		description: `Each enemy hit by Wind Shear increases your movement speed by {#}% for {#} seconds, up to {#}%.`,
		id: 10,
		maxPoints: 1,
		values: [ "5", "3", "20" ],
		x: -126.703,
		y: -500.785
	},
	"Wild Wind Shear": {
		baseSkill: "Wind Shear",
		connections: [ "Enhanced Wind Shear" ],
		description: `Wind Shear grants {#} additional Spirit for each enemy hit beyond the first.`,
		id: 11,
		maxPoints: 1,
		values: [ "" ],
		x: 130.379,
		y: -501.09
	},
	"Storm Strike": {
		connections: [ "Basic", "Enhanced Storm Strike" ],
		damageType: 2,
		description: `Generate Spirit: {#}
Lucky Hit Chance: {#}%
Electricity gathers around your weapon, dealing {#}% damage to your target and chaining to up to {#} surrounding enemies, dealing {#}% less damage each time it chains.

Dealing damage with Storm Strike reduces your damage taken by {#}% for {#} seconds.`,
		id: 12,
		maxPoints: 5,
		values: [ "15", "25", "28.35", "", "", "25", "3" ],
		x: 346.71,
		y: -68.24
	},
	"Enhanced Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Storm Strike", "Fierce Storm Strike", "Wild Storm Strike" ],
		description: `Storm Strike has a {#}% chance to Immobilize all enemies hit for {#} seconds.`,
		id: 13,
		maxPoints: 1,
		values: [ "", "" ],
		x: 671.83,
		y: -141.815
	},
	"Fierce Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Enhanced Storm Strike" ],
		description: `Storm Strike has a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 14,
		maxPoints: 1,
		values: [ "50", "3" ],
		x: 812.63,
		y: -296.275
	},
	"Wild Storm Strike": {
		baseSkill: "Storm Strike",
		connections: [ "Enhanced Storm Strike" ],
		description: `Storm Strike chains to {#} additional targets.`,
		id: 15,
		maxPoints: 1,
		values: [ "" ],
		x: 1027.3,
		y: -150.99
	},
	"Claw": {
		connections: [ "Basic", "Enhanced Claw" ],
		damageType: 0,
		description: `Generate Spirit: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and claw at an enemy for {#}% damage.`,
		id: 16,
		maxPoints: 5,
		values: [ "9", "50", "21" ],
		x: 274.729,
		y: 154.92
	},
	"Enhanced Claw": {
		baseSkill: "Claw",
		connections: [ "Claw", "Fierce Claw", "Wild Claw" ],
		description: `Claw's Attack Speed is increased by +{#}%.`,
		id: 17,
		maxPoints: 1,
		values: [ "10" ],
		x: 528.355,
		y: 288.635
	},
	"Fierce Claw": {
		baseSkill: "Claw",
		connections: [ "Enhanced Claw" ],
		description: `Claw poisons enemies for {#}% damage over {#} seconds.`,
		id: 18,
		maxPoints: 1,
		values: [ "10.5", "3" ],
		x: 586.595,
		y: 458.08
	},
	"Wild Claw": {
		baseSkill: "Claw",
		connections: [ "Enhanced Claw" ],
		description: `Claw has an additional +{#}% Critical Strike Chance and deals x{#}% increased Critical Strike Damage.`,
		id: 19,
		maxPoints: 1,
		values: [ "10", "15" ],
		x: 844.165,
		y: 323.69
	},
};

druid["Spirit"] = {
	"Landslide": {
		connections: [ "Spirit", "Enhanced Landslide" ],
		damageType: 0,
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Crush enemies between 3 pillars of earth, dealing up to {#}% damage.`,
		id: 20,
		maxPoints: 5,
		values: [ "30", "20", "78.75" ],
		x: -225.944,
		y: -166.79
	},
	"Enhanced Landslide": {
		baseSkill: "Landslide",
		connections: [ "Landslide", "Raging Landslide", "Primal Landslide" ],
		description: `Enemies hit by all 3 Landslide pillars have a {#}% chance to be Immobilized for {#} seconds by the final hit.`,
		id: 21,
		maxPoints: 1,
		values: [ "25", "3" ],
		x: -405.12,
		y: -322.47
	},
	"Raging Landslide": {
		baseSkill: "Landslide",
		connections: [ "Enhanced Landslide" ],
		description: `For {#} seconds after Landslide is cast, the Spirit cost is reduced by {#}.`,
		id: 22,
		maxPoints: 1,
		values: [ "2", "10" ],
		x: -453.53,
		y: -483.315
	},
	"Primal Landslide": {
		baseSkill: "Landslide",
		connections: [ "Enhanced Landslide" ],
		description: `Landslide has a {#}% increased Critical Strike Chance and deals x{#}% increased Critical Strike Damage against enemies who are Stunned, Immobilized or Knocked Back.`,
		id: 23,
		maxPoints: 1,
		values: [ "10", "30" ],
		x: -690.516,
		y: -360.81
	},
	"Pulverize": {
		connections: [ "Spirit", "Enhanced Pulverize" ],
		damageType: 0,
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werebear and slam the ground, dealing {#}% damage to surrounding enemies.`,
		id: 24,
		maxPoints: 5,
		values: [ "35", "33", "52.5" ],
		x: -370.985,
		y: 43.955
	},
	"Enhanced Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Pulverize", "Primal Pulverize", "Raging Pulverize" ],
		description: `Pulverize deals x{#}% increased bonus damage when hitting {#} or more enemies.`,
		id: 25,
		maxPoints: 1,
		values: [ "20", "2" ],
		x: -709.316,
		y: 76.73
	},
	"Primal Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Enhanced Pulverize" ],
		description: `Enemies hit with Pulverize deal {#}% reduced damage for {#} seconds.`,
		id: 26,
		maxPoints: 1,
		values: [ "15", "4" ],
		x: -880.426,
		y: 214.1
	},
	"Raging Pulverize": {
		baseSkill: "Pulverize",
		connections: [ "Enhanced Pulverize" ],
		description: `Pulverize has a {#}% chance to Immobilize all enemies hit for {#} seconds.`,
		id: 27,
		maxPoints: 1,
		values: [ "20", "3" ],
		x: -1043.241,
		y: 59.665
	},
	"Tornado": {
		connections: [ "Spirit", "Enhanced Tornado" ],
		damageType: 0,
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Conjure a swirling tornado that deals {#}% damage.`,
		id: 28,
		maxPoints: 5,
		values: [ "40", "33", "105" ],
		x: 256.877,
		y: -173.905
	},
	"Enhanced Tornado": {
		baseSkill: "Tornado",
		connections: [ "Tornado", "Raging Tornado", "Primal Tornado" ],
		description: `Each time you cast Tornado, you have a {#}% chance to spawn an additional Tornado.`,
		id: 29,
		maxPoints: 1,
		values: [ "20" ],
		x: 467.705,
		y: -314.8
	},
	"Raging Tornado": {
		baseSkill: "Tornado",
		connections: [ "Enhanced Tornado" ],
		description: `Each time an enemy is damaged by a Tornado, they take x{#}% increased damage from Tornado for {#} seconds, stacking up to x{#}% increased damage.`,
		id: 30,
		maxPoints: 1,
		values: [ "5", "3", "15" ],
		x: 523.809,
		y: -473.39
	},
	"Primal Tornado": {
		baseSkill: "Tornado",
		connections: [ "Enhanced Tornado" ],
		description: `Enemies damaged by Tornado are Slowed by {#}% for {#} seconds, stacking up to {#}%.`,
		id: 31,
		maxPoints: 1,
		values: [ "8", "3", "" ],
		x: 793.079,
		y: -357
	},
	"Shred": {
		connections: [ "Spirit", "Enhanced Shred" ],
		damageType: 0,
		description: `Spirit Cost: {#}
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and perform a 3-combo attack.

1st Attack: Dash towards the target and deal {#}% damage.
2nd Attack: Deal {#}% damage.
3rd Attack: Perform a larger finishing move dealing {#}% damage.`,
		id: 33,
		maxPoints: 5,
		values: [ "35", "20", "", "", "" ],
		x: 44.547,
		y: 225.17
	},
	"Enhanced Shred": {
		baseSkill: "Shred",
		connections: [ "Shred", "Raging Shred", "Primal Shred" ],
		description: `Shred gains {#}% attack speed and heals for {#}% of your maximum Life if an enemy is struck.`,
		id: 34,
		maxPoints: 1,
		values: [ "", "2" ],
		x: 77.78,
		y: 395.08
	},
	"Raging Shred": {
		baseSkill: "Shred",
		connections: [ "Enhanced Shred" ],
		description: `Shred's third combo attack is larger and applies a potent poison to enemies hit dealing an additional {#}% damage over {#} seconds.`,
		id: 36,
		maxPoints: 1,
		values: [ "", "" ],
		x: -31.192,
		y: 569.605
	},
	"Primal Shred": {
		baseSkill: "Shred",
		connections: [ "Enhanced Shred" ],
		description: `Shred's second combo attack also performs a dash. In addition, Shred's Critical Strike Chance is increased by +{#}% for the first two combo attacks.`,
		id: 35,
		maxPoints: 1,
		values: [ "" ],
		x: 311.864,
		y: 543.51
	},
	"Lightning Storm": {
		connections: [ "Spirit", "Enhanced Lightning Storm" ],
		damageType: 2,
		description: `Spirit Cost: {#} per strike
Lucky Hit Chance: {#}%
Conjure a growing lightning storm that deals {#}% damage per strike and increases the number of strikes the longer it is channeled up to a maximum of {#}.`,
		id: 37,
		maxPoints: 5,
		values: [ "15", "15", "26.25", "5" ],
		x: 451.305,
		y: 2.77
	},
	"Enhanced Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Lightning Storm", "Primal Lightning Storm", "Raging Lightning Storm" ],
		description: `The size of your Lightning Storm is preserved for {#} seconds after channeling.`,
		id: 38,
		maxPoints: 1,
		values: [ "4" ],
		x: 710.564,
		y: -30.53
	},
	"Primal Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Enhanced Lightning Storm" ],
		description: `Lightning Storm has a {#}% chance to Immobilize enemies hit for {#} seconds.`,
		id: 39,
		maxPoints: 1,
		values: [ "8", "3" ],
		x: 981.759,
		y: -150.685
	},
	"Raging Lightning Storm": {
		baseSkill: "Lightning Storm",
		connections: [ "Enhanced Lightning Storm" ],
		description: `Lightning Storm gains 1 additional lightning strike.`,
		id: 40,
		maxPoints: 1,
		x: 980.359,
		y: 60.06
	},
	"Heart of the Wild": {
		connections: [ "Spirit", "Wild Impulses", "Abundance" ],
		description: `Maximum Spirit is increased by {#}.`,
		id: 42,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -519.321,
		y: -90.235
	},
	"Wild Impulses": {
		connections: [ "Heart of the Wild" ],
		description: `Your Core skills cost x{#}% more Spirit but deal x{#}% increased damage.`,
		id: 32,
		maxPoints: 3,
		values: [ "{5/10/15}", "{10/20/30}" ],
		x: -770.566,
		y: -237.475
	},
	"Abundance": {
		connections: [ "Heart of the Wild" ],
		description: `Basic skills generate {#}% more Spirit.`,
		id: 41,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -885.641,
		y: -102.775
	},
	"Predatory Instinct": {
		connections: [ "Spirit", "Iron Fur", "Digitigrade Gait" ],
		description: `Critical Strike Chance against Close enemies is increased by {#}%.`,
		id: 136,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 411.097,
		y: 186.195
	},
	"Iron Fur": {
		connections: [ "Predatory Instinct" ],
		description: `While in Werebear form, damage reduction is increased by {#}%.

This bonus persists for {#} seconds after leaving Werebear form.`,
		id: 137,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: 802.404,
		y: 185.94
	},
	"Digitigrade Gait": {
		connections: [ "Predatory Instinct" ],
		description: `While in Werewolf form, your Movement Speed is increased by {#}%.

This bonus persists for {#} seconds after leaving Werewolf form.`,
		id: 138,
		maxPoints: 3,
		values: [ "{4/8/12}", "3" ],
		x: 595.059,
		y: 373.7
	},
};

druid["Defensive"] = {
	"Earthen Bulwark": {
		connections: [ "Defensive", "Enhanced Earthen Bulwark" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Rocks surround you for {#} seconds, granting a Barrier that absorbs {#}% of your Base Life ({#}) in damage.`,
		id: 43,
		maxPoints: 5,
		values: [ "16.0", "50", "3", "10", "" ],
		x: -371.465,
		y: -166.005
	},
	"Enhanced Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Earthen Bulwark", "Innate Earthen Bulwark", "Preserving Earthen Bulwark" ],
		description: `Earthen Bulwark makes you Unstoppable while active.`,
		id: 44,
		maxPoints: 1,
		x: -614.835,
		y: -283.58
	},
	"Innate Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Upon expiration, Earthen Bulwark shatters, dealing {#}% of the remaining Barrier amount to surrounding enemies.`,
		id: 45,
		maxPoints: 1,
		values: [ "300" ],
		x: -906.825,
		y: -302.41
	},
	"Preserving Earthen Bulwark": {
		baseSkill: "Earthen Bulwark",
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Casting Earthen Bulwark grants {#}% Base Life ({#}) as Fortify.`,
		id: 46,
		maxPoints: 1,
		values: [ "7.2", "" ],
		x: -683.695,
		y: -438.695
	},
	"Debilitating Roar": {
		connections: [ "Defensive", "Enhanced Debilitating Roar" ],
		description: `Cooldown: {#} seconds
Shapeshift into a Werebear and bellow a mighty roar, reducing damage dealt of Nearby enemies by {#}% for {#} seconds.`,
		id: 47,
		maxPoints: 5,
		values: [ "22.0", "50", "4" ],
		x: -374.945,
		y: 169.89
	},
	"Enhanced Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Debilitating Roar", "Preserving Debilitating Roar", "Innate Debilitating Roar" ],
		description: `Debilitating Roar also Fortifies you for {#}% Base Life ({#}).`,
		id: 48,
		maxPoints: 1,
		values: [ "8.8", "" ],
		x: -604.84,
		y: 279.69
	},
	"Preserving Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Enhanced Debilitating Roar" ],
		description: `Debilitating Roar also heals you for {#}% of your maximum Life each second for its duration.`,
		id: 49,
		maxPoints: 1,
		values: [ "4" ],
		x: -691.605,
		y: 443.5
	},
	"Innate Debilitating Roar": {
		baseSkill: "Debilitating Roar",
		connections: [ "Enhanced Debilitating Roar" ],
		description: `Debilitating Roar also slows enemies by {#}% for its duration.`,
		id: 50,
		maxPoints: 1,
		values: [ "40" ],
		x: -918.365,
		y: 307.475
	},
	"Ancestral Fortitude": {
		connections: [ "Defensive", "Vigilance" ],
		description: `Increase your non-physical resistances by {#}%.`,
		id: 51,
		maxPoints: 3,
		values: [ "" ],
		x: -816.55,
		y: 1.025
	},
	"Vigilance": {
		connections: [ "Ancestral Fortitude" ],
		description: `You take {#}% reduced damage for {#} seconds after using a Defensive skill.`,
		id: 52,
		maxPoints: 3,
		values: [ "", "" ],
		x: -1188.24,
		y: 0.39
	},
	"Blood Howl": {
		connections: [ "Defensive", "Enhanced Blood Howl" ],
		description: `Cooldown: {#} seconds
Shapeshift into a Werewolf and howl furiously, restoring {#}% Life.`,
		id: 53,
		maxPoints: 5,
		values: [ "15.0", "20.0" ],
		x: 0.085,
		y: 234.29
	},
	"Enhanced Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Blood Howl", "Innate Blood Howl", "Preserving Blood Howl" ],
		description: `Kills reduce the cooldown of Blood Howl by {#} second.`,
		id: 54,
		maxPoints: 1,
		values: [ "1" ],
		x: 1.245,
		y: 400.21
	},
	"Innate Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Enhanced Blood Howl" ],
		description: `Blood Howl also generates {#} Spirit.`,
		id: 55,
		maxPoints: 1,
		values: [ "20" ],
		x: -131.31,
		y: 545.905
	},
	"Preserving Blood Howl": {
		baseSkill: "Blood Howl",
		connections: [ "Enhanced Blood Howl" ],
		description: `Blood Howl also increases your Attack Speed by {#}% for {#} seconds.`,
		id: 56,
		maxPoints: 1,
		values: [ "15", "4" ],
		x: 135.885,
		y: 542.49
	},
	"Cyclone Armor": {
		connections: [ "Defensive", "Enhanced Cyclone Armor" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: Powerful winds surround you, granting {#}% non-Physical damage reduction.  

Active: The winds rapidly expand, Knocking Back enemies and dealing {#}% damage.`,
		id: 57,
		maxPoints: 5,
		values: [ "15.0", "25", "20", "15.75" ],
		x: -1.22,
		y: -265.385
	},
	"Enhanced Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Cyclone Armor", "Preserving Cyclone Armor", "Innate Cyclone Armor" ],
		description: `Enemies who are Knocked Back by Cyclone Armor are also Slowed by {#}% for {#} seconds.`,
		id: 58,
		maxPoints: 1,
		values: [ "40", "3" ],
		x: 0.115,
		y: -425.535
	},
	"Preserving Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Every {#} seconds, Cyclone Armor intensifies, reducing the next instance of non-Physical damage by an additional {#}%.`,
		id: 59,
		maxPoints: 1,
		values: [ "10", "40" ],
		x: -136.745,
		y: -576.38
	},
	"Innate Cyclone Armor": {
		baseSkill: "Cyclone Armor",
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Enemies Knocked Back by Cyclone Armor become Vulnerable for 2 seconds.`,
		id: 60,
		maxPoints: 1,
		x: 126.12,
		y: -573.495
	},
};

druid["Companion"] = {
	"Ravens": {
		connections: [ "Companion", "Enhanced Ravens" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Active: The target area is swarmed with ravens, dealing {#}% damage over {#} seconds.`,
		id: 62,
		maxPoints: 5,
		values: [ "25.0", "33", "89.25", "6" ],
		x: -1.05,
		y: 231.07
	},
	"Enhanced Ravens": {
		baseSkill: "Ravens",
		connections: [ "Ravens", "Brutal Ravens", "Ferocious Ravens" ],
		description: `Passive: Ravens fly above you and periodically attack your enemies for {#}% damage every {#} seconds.`,
		id: 63,
		maxPoints: 1,
		values: [ "13.85", "5" ],
		x: -0.065,
		y: 380.99
	},
	"Brutal Ravens": {
		baseSkill: "Ravens",
		connections: [ "Enhanced Ravens" ],
		description: `{#} additional Ravens appear when they periodically attack enemies.`,
		id: 64,
		maxPoints: 1,
		values: [ "2" ],
		x: -150.32,
		y: 549.535
	},
	"Ferocious Ravens": {
		baseSkill: "Ravens",
		connections: [ "Enhanced Ravens" ],
		description: `Enemies inside the swarm of Ravens when it is activated become Vulnerable for {#} seconds.`,
		id: 65,
		maxPoints: 1,
		values: [ "3" ],
		x: 132.97,
		y: 548.405
	},
	"Call of the Wild": {
		connections: [ "Companion" ],
		description: `You deal x{#}% increased Critical Strike Damage against your Wolves' focus target.

Raven attacks deal x{#}% increased damage to Vulnerable enemies.

Vine Creeper's poison duration is increased by {#}%.`,
		id: 66,
		maxPoints: 3,
		values: [ "{8/16/24}", "{8/16/24}", "{8/16/24}" ],
		x: 548.33,
		y: 313.155
	},
	"Vine Creeper": {
		connections: [ "Companion", "Enhanced Vine Creeper" ],
		damageType: 4,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: A vine creeper periodically emerges from the ground every {#} seconds and poisons an enemy in the area for {#}% damage over {#} seconds.

Active: Vines strangle all surrounding enemies, Immobilizing them for {#} seconds and poisoning them for {#}% damage over {#} seconds.`,
		id: 67,
		maxPoints: 5,
		values: [ "20.0", "40", "7", "37.8", "6", "2", "31.5", "2" ],
		x: -0.085,
		y: -233.405
	},
	"Enhanced Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Vine Creeper", "Ferocious Vine Creeper", "Brutal Vine Creeper" ],
		description: `Vine Creeper's Immobilize duration is increased by {#} second.`,
		id: 68,
		maxPoints: 1,
		values: [ "1" ],
		x: -1.25,
		y: -382.875
	},
	"Ferocious Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Enhanced Vine Creeper" ],
		description: `Vine Creeper's active poison duration is increased by {#} seconds.`,
		id: 69,
		maxPoints: 1,
		values: [ "3" ],
		x: -139.98,
		y: -563.965
	},
	"Brutal Vine Creeper": {
		baseSkill: "Vine Creeper",
		connections: [ "Enhanced Vine Creeper" ],
		description: `Your chance to Critically Strike is increased by +{#}% against enemies strangled by Vine Creeper.`,
		id: 70,
		maxPoints: 1,
		values: [ "20" ],
		x: 116.36,
		y: -566.07
	},
	"Wolves": {
		connections: [ "Companion", "Enhanced Wolves" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Passive: Summon {#} wolf companions that bite enemies for {#}% damage.

Active: Direct the wolves to focus an enemy, leaping to them and striking for {#}% damage.`,
		id: 71,
		maxPoints: 5,
		values: [ "14.0", "50", "2", "8.19", "36.75" ],
		x: 438.495,
		y: 1.855
	},
	"Enhanced Wolves": {
		baseSkill: "Wolves",
		connections: [ "Wolves", "Ferocious Wolves", "Brutal Wolves" ],
		description: `Wolves deal x{#}% increased damage to Immobilized, Stunned, Slowed, or poisoned enemies.`,
		id: 139,
		maxPoints: 1,
		values: [ "20" ],
		x: 742.125,
		y: 2.585
	},
	"Ferocious Wolves": {
		baseSkill: "Wolves",
		connections: [ "Enhanced Wolves" ],
		description: `You deal x{#}% increased damage to your Wolves' focus target.`,
		id: 140,
		maxPoints: 1,
		values: [ "10" ],
		x: 1030.955,
		y: -73.505
	},
	"Brutal Wolves": {
		baseSkill: "Wolves",
		connections: [ "Enhanced Wolves" ],
		description: `Your Wolves' first attack against a focused enemy makes them Vulnerable for {#} seconds.`,
		id: 141,
		maxPoints: 1,
		values: [ "2" ],
		x: 1032.485,
		y: 73.84
	},
	"Nature's Reach": {
		connections: [ "Companion" ],
		description: `Deal x{#}% increased damage to Distant enemies.  Double this bonus if they are also Slowed, Stunned, Immobilized, or Knocked Back.`,
		id: 75,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 542.1,
		y: -263.42
	},
	"Clarity": {
		connections: [ "Companion" ],
		description: `Gain {#} Spirit when transforming into Human form.`,
		id: 76,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -535.33,
		y: -264.37
	},
};

druid["Wrath"] = {
	"Elemental Exposure": {
		connections: [ "Charged Atmosphere", "Wrath", "Endless Tempest" ],
		description: `Lucky Hit: Your Storm skills have up to a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 80,
		maxPoints: 3,
		values: [ "{20/40/60}", "1" ],
		x: -283.195,
		y: -294.575
	},
	"Charged Atmosphere": {
		connections: [ "Elemental Exposure", "Electric Shock", "Bad Omen" ],
		damageType: 2,
		description: `Every {#} seconds, a Lightning Strike hits a Nearby enemy dealing {#}% damage.`,
		id: 81,
		maxPoints: 3,
		values: [ "{18/13.5/10}", "47.25" ],
		x: -649.87,
		y: -377.85
	},
	"Electric Shock": {
		connections: [ "Charged Atmosphere", "Bad Omen" ],
		description: `Lucky Hit: Dealing Lightning damage to enemies has a {#}% chance to Immobilize them for {#} seconds.

If the target is already Immobilized, the Lightning damage dealt to them is increased by x{#}% instead.`,
		id: 82,
		maxPoints: 3,
		values: [ "{5/10/15}", "3", "" ],
		x: -979.275,
		y: -645.395
	},
	"Bad Omen": {
		connections: [ "Charged Atmosphere", "Electric Shock", "Endless Tempest" ],
		damageType: 2,
		description: `Lucky Hit: Up to a {#}% chance when dealing damage to a Vulnerable, Immobilized or Stunned enemy that a Lightning Strike also hits dealing {#}% damage.`,
		id: 83,
		maxPoints: 3,
		values: [ "{10/20/30}", "57.25" ],
		x: -504.05,
		y: -698.569
	},
	"Endless Tempest": {
		connections: [ "Elemental Exposure", "Bad Omen" ],
		description: `Increase the duration of Hurricane and Cataclysm by {#}%.`,
		id: 84,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -257.265,
		y: -509.659
	},
	"Boulder": {
		connections: [ "Wrath", "Enhanced Boulder" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Unearth a large rolling boulder that Knocks Back and crushes enemies, dealing {#}% damage with each hit.`,
		id: 85,
		maxPoints: 5,
		values: [ "10.0", "20", "34.65" ],
		x: -415.96,
		y: -81.885
	},
	"Enhanced Boulder": {
		baseSkill: "Boulder",
		connections: [ "Boulder", "Natural Boulder", "Savage Boulder" ],
		description: `Enemies are slowed by {#}% for {#} seconds after being hit with Boulder.`,
		id: 86,
		maxPoints: 1,
		values: [ "30", "2" ],
		x: -787.38,
		y: -150.56
	},
	"Natural Boulder": {
		baseSkill: "Boulder",
		connections: [ "Enhanced Boulder" ],
		description: `Your Basic skills grant {#}% bonus Spirit while damaging enemies who are Knocked Back by Boulder.`,
		id: 87,
		maxPoints: 1,
		values: [ "75" ],
		x: -1043.1,
		y: -302.409
	},
	"Savage Boulder": {
		baseSkill: "Boulder",
		connections: [ "Enhanced Boulder" ],
		description: `The first enemy damaged by Boulder is made Vulnerable for {#} seconds.`,
		id: 88,
		maxPoints: 1,
		values: [ "3" ],
		x: -1165.425,
		y: -135.355
	},
	"Trample": {
		connections: [ "Wrath", "Enhanced Trample" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werebear and charge forward, dealing {#}% damage and Knocking Back enemies.

Enemies who are Knocked Back into terrain take an additional {#}% damage and are stunned for {#} seconds.`,
		id: 89,
		maxPoints: 5,
		values: [ "14.0", "33", "26.25", "47.25", "3" ],
		x: -283.24,
		y: 180.74
	},
	"Enhanced Trample": {
		baseSkill: "Trample",
		connections: [ "Trample", "Natural Trample", "Savage Trample" ],
		description: `You are Unstoppable during Trample.`,
		id: 90,
		maxPoints: 1,
		x: -483,
		y: 312.295
	},
	"Natural Trample": {
		baseSkill: "Trample",
		connections: [ "Enhanced Trample" ],
		description: `Casting Trample grants {#}% Base Life ({#}) as Fortify.`,
		id: 91,
		maxPoints: 1,
		values: [ "6", "" ],
		x: -782.485,
		y: 380.895
	},
	"Savage Trample": {
		baseSkill: "Trample",
		connections: [ "Enhanced Trample" ],
		description: `Casting Trample grants {#} Spirit.`,
		id: 92,
		maxPoints: 1,
		values: [ "20" ],
		x: -557.04,
		y: 471.43
	},
	"Crushing Earth": {
		connections: [ "Wrath", "Safeguard", "Stone Guard" ],
		description: `Earth skills deal x{#}% increased damage to Slowed, Stunned, Immobilized or Knocked Back enemies.`,
		id: 93,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -703.3,
		y: 97.49
	},
	"Safeguard": {
		connections: [ "Crushing Earth" ],
		description: `Critical Strikes with Earth skills Fortify you for {#}% Base Life ({#}).`,
		id: 94,
		maxPoints: 3,
		values: [ "0.88", "" ],
		x: -1037.34,
		y: 275.51
	},
	"Stone Guard": {
		connections: [ "Crushing Earth" ],
		description: `While Fortified over {#}% of your Maximum Life, your Earth skills deal  x{#}% increased damage.`,
		id: 95,
		maxPoints: 3,
		values: [ "50", "{4/8/12}" ],
		x: -1129.275,
		y: 79.23
	},
	"Hurricane": {
		connections: [ "Wrath", "Enhanced Hurricane" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Form a hurricane around you that deals {#}% damage to surrounding enemies over {#} seconds.`,
		id: 99,
		maxPoints: 5,
		values: [ "20.0", "33", "102.37", "8" ],
		x: 113.005,
		y: -268.023
	},
	"Enhanced Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Hurricane", "Natural Hurricane", "Savage Hurricane" ],
		description: `Enemies who are damaged by Hurricane are Slowed by {#}% for {#} seconds.`,
		id: 100,
		maxPoints: 1,
		values: [ "25", "2" ],
		x: 205.48,
		y: -454.768
	},
	"Natural Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Enhanced Hurricane" ],
		description: `Hurricane has a {#}% chance to make enemies Vulnerable for {#} seconds.`,
		id: 101,
		maxPoints: 1,
		values: [ "15", "3" ],
		x: 123.565,
		y: -639.983
	},
	"Savage Hurricane": {
		baseSkill: "Hurricane",
		connections: [ "Enhanced Hurricane" ],
		description: `Enemies who are in Hurricane's radius have their damage reduced by {#}%.`,
		id: 102,
		maxPoints: 1,
		values: [ "20" ],
		x: 462.075,
		y: -597.113
	},
	"Rabies": {
		connections: [ "Wrath", "Enhanced Rabies" ],
		damageType: 4,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf and perform an infectious bite on the target dealing {#}% damage, and an additional {#}% damage over {#} seconds. 

Infected enemies spread Rabies to other surrounding targets.`,
		id: 103,
		maxPoints: 5,
		values: [ "12.0", "50", "29.4", "55.65", "6" ],
		x: 202.015,
		y: 186.695
	},
	"Enhanced Rabies": {
		baseSkill: "Rabies",
		connections: [ "Rabies", "Natural Rabies", "Savage Rabies" ],
		description: `Once Rabies infects {#} targets, it deals x{#}% increased Poison damage against all targets.`,
		id: 104,
		maxPoints: 1,
		values: [ "4", "30" ],
		x: 371.195,
		y: 333.44
	},
	"Natural Rabies": {
		baseSkill: "Rabies",
		connections: [ "Enhanced Rabies" ],
		description: `The initial bite of Rabies heals you for {#}% of your maximum Life.`,
		id: 105,
		maxPoints: 1,
		values: [ "10" ],
		x: 392.865,
		y: 515.555
	},
	"Savage Rabies": {
		baseSkill: "Rabies",
		connections: [ "Enhanced Rabies" ],
		description: `The initial bite of Rabies deals x{#}% increased damage against enemies who are Immobilized or Stunned.`,
		id: 106,
		maxPoints: 1,
		values: [ "100" ],
		x: 690.495,
		y: 442.976
	},
	"Mending": {
		connections: [ "Wrath", "Provocation" ],
		description: `While in Werebear form, you receive {#}% additional healing from all sources.`,
		id: 97,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -41.03,
		y: 309.375
	},
	"Provocation": {
		connections: [ "Mending" ],
		description: `Your next Werebear skill every {#} seconds is guaranteed to Overpower.`,
		id: 98,
		maxPoints: 3,
		values: [ "30" ],
		x: -99.02,
		y: 513.075
	},
	"Toxic Claws": {
		connections: [ "Wrath", "Neurotoxin" ],
		description: `Critical strikes with Werewolf skills deal {#}% of their base damage as Poison damage over {#} seconds.`,
		id: 78,
		maxPoints: 3,
		values: [ "{8/16/24}", "4" ],
		x: 465.52,
		y: 84.516
	},
	"Neurotoxin": {
		connections: [ "Toxic Claws" ],
		description: `Poisoned enemies are slowed by {#}%.`,
		id: 79,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: 814.438,
		y: 147.582
	},
};

druid["Ultimate"] = {
	"Grizzly Rage": {
		connections: [ "Ultimate", "Prime Grizzly Rage" ],
		description: `Cooldown: {#} seconds
Shapeshift into  Dire Werebear for {#} seconds gaining x{#}% bonus damage and x{#}% damage reduction. Damage bonus is increased by +{#}% each second while in this form.

Kills extend the duration by {#} second up to +{#} additional seconds.`,
		id: 107,
		maxPoints: 1,
		values: [ "60.0", "10", "20", "20", "3", "1", "10" ],
		x: 430.055,
		y: 63.605
	},
	"Prime Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Supreme Grizzly Rage", "Grizzly Rage" ],
		description: `You are Unstoppable while Grizzly Rage is active.`,
		id: 108,
		maxPoints: 1,
		x: 819.815,
		y: 96.38
	},
	"Supreme Grizzly Rage": {
		baseSkill: "Grizzly Rage",
		connections: [ "Prime Grizzly Rage" ],
		description: `Gain {#}% Base Life ({#}) as Fortify per second while Grizzly Rage is active.`,
		id: 109,
		maxPoints: 1,
		values: [ "3.2", "" ],
		x: 878.345,
		y: 266.63
	},
	"Petrify": {
		connections: [ "Ultimate", "Prime Petrify" ],
		description: `Cooldown: {#} seconds
Petrify all Nearby enemies, Stunning them for {#} seconds. You deal x{#}% increased Critical Strike Damage to Petrified enemies.`,
		id: 110,
		maxPoints: 1,
		values: [ "60.0", "3", "25" ],
		x: 209.315,
		y: -196.232
	},
	"Prime Petrify": {
		baseSkill: "Petrify",
		connections: [ "Supreme Petrify", "Petrify" ],
		description: `Petrify's duration is increased by {#} second.`,
		id: 111,
		maxPoints: 1,
		values: [ "1" ],
		x: 368.4,
		y: -377.659
	},
	"Supreme Petrify": {
		baseSkill: "Petrify",
		connections: [ "Prime Petrify" ],
		description: `Killing a Petrified enemy grants {#} Spirit.`,
		id: 112,
		maxPoints: 1,
		values: [ "25" ],
		x: 216,
		y: -520.98
	},
	"Defensive Posture": {
		connections: [ "Ultimate", "Thick Hide", "Nature's Resolve" ],
		description: `Increases the amount of Fortify you gain from all sources by {#}%.`,
		id: 113,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 635.525,
		y: -116.355
	},
	"Thick Hide": {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `Whenever you are Stunned, Immobilized, or Knocked Down, Fortify for {#}% Base Life ({#}).`,
		id: 114,
		maxPoints: 3,
		values: [ "2.56", "" ],
		x: 765.5,
		y: -322.625
	},
	"Unrestrained": {
		connections: [ "Thick Hide", "Nature's Resolve" ],
		description: `Reduce the duration of control impairing effects by {#}%.  Triple this effect while you are Fortified for over {#}% of your maximum Life.`,
		id: 115,
		maxPoints: 3,
		values: [ "{3/6/9}", "20" ],
		x: 1124.05,
		y: -229.587
	},
	"Nature's Resolve": {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `{#}% chance when struck to Fortify you for {#}% Base Life ({#}).`,
		id: 116,
		maxPoints: 3,
		values: [ "{5/10/15}", "1.76", "" ],
		x: 1015.865,
		y: -13.34
	},
	"Quickshift": {
		connections: [ "Ultimate", "Natural Fortitude", "Heightened Senses" ],
		description: `When a Shapeshifting skill transforms you into a different form, it deals x{#}% increased damage.`,
		id: 117,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 344.6,
		y: 287.59
	},
	"Natural Fortitude": {
		connections: [ "Quickshift" ],
		description: `Shapeshifting Fortifies you for {#}% Base Life ({#}).`,
		id: 118,
		maxPoints: 3,
		values: [ "{0.56/1.12/1.68}", "" ],
		x: 340.775,
		y: 457.657
	},
	"Heightened Senses": {
		connections: [ "Quickshift" ],
		description: `Upon shapeshifting into a Werewolf or Werebear, gain {#}% damage reduction against Elites for {#} seconds.`,
		id: 119,
		maxPoints: 3,
		values: [ "{4/8/12}", "3" ],
		x: 649.085,
		y: 366.088
	},
	"Lacerate": {
		connections: [ "Ultimate", "Prime Lacerate" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Shapeshift into a Werewolf, become Immune and quickly dash {#} times between enemies in the area dealing up to {#}% damage.`,
		id: 120,
		maxPoints: 1,
		values: [ "50.0", "15", "10", "420" ],
		x: -5.075,
		y: 234.915
	},
	"Prime Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Supreme Lacerate", "Lacerate" ],
		description: `Each time Lacerate deals a Critical Strike, heal for {#}% of your maximum Life.`,
		id: 121,
		maxPoints: 1,
		values: [ "3" ],
		x: -192.17,
		y: 412.833
	},
	"Supreme Lacerate": {
		baseSkill: "Lacerate",
		connections: [ "Prime Lacerate" ],
		description: `Lacerate's final strike deals x{#}% increased damage.`,
		id: 122,
		maxPoints: 1,
		values: [ "200" ],
		x: 30.06,
		y: 540.783
	},
	"Cataclysm": {
		connections: [ "Ultimate", "Prime Cataclysm" ],
		damageType: 2,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
A massive storm follows you for {#} seconds. Tornadoes knock back enemies, and lightning strikes wildly dealing {#}% damage.`,
		id: 123,
		maxPoints: 1,
		values: [ "80.0", "82", "8", "54.6" ],
		x: -397.415,
		y: -109.56
	},
	"Prime Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Supreme Cataclysm", "Cataclysm" ],
		description: `Cataclysm's duration is increased by {#} seconds.`,
		id: 124,
		maxPoints: 1,
		values: [ "2" ],
		x: -793.645,
		y: -256.893
	},
	"Supreme Cataclysm": {
		baseSkill: "Cataclysm",
		connections: [ "Prime Cataclysm" ],
		description: `Lightning strikes from Cataclysm make enemies Vulnerable for 2 seconds.`,
		id: 125,
		maxPoints: 1,
		x: -819.245,
		y: -418.923
	},
	"Defiance": {
		connections: [ "Ultimate", "Circle of Life", "Natural Disaster" ],
		description: `Nature Magic skills deal x{#}% increased damage to Elites.`,
		id: 126,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -184.37,
		y: -290.31
	},
	"Circle of Life": {
		connections: [ "Defiance", "Resonance" ],
		description: `Nature Magic skills that consume Spirit restore {#}% of your maximum Life.`,
		id: 127,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: -505.765,
		y: -446.596
	},
	"Resonance": {
		connections: [ "Natural Disaster", "Circle of Life" ],
		description: `Nature Magic skills deal x{#}% increased damage. Triple this bonus if an Earth skill is the next skill cast after a Storm skill, or a  Storm skill is the next skill cast after an  Earth skill.`,
		id: 128,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -392.905,
		y: -653.792
	},
	"Natural Disaster": {
		connections: [ "Defiance", "Resonance" ],
		description: `Your Earth skills deal x{#}% increased damage to Vulnerable enemies.

Your Storm skills deal x{#}% increased damage to enemies that are Stunned, Immobilized, or Knocked Back.`,
		id: 129,
		maxPoints: 3,
		values: [ "{4/8/12}", "{4/8/12}" ],
		x: -103.945,
		y: -508.076
	},
};

druid["Capstone"] = {
	"Nature's Fury": {
		connections: [ "Capstone" ],
		description: `Casting an Earth skill has a {#}% chance to trigger a free Storm skill of the same category. 

In addition, casting a Storm skill has a {#}% chance to trigger a free Earth skill of the same category.`,
		id: 130,
		maxPoints: 1,
		values: [ "20", "20" ],
		x: 559.134,
		y: 367.52
	},
	"Earthen Might": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Damaging enemies with Earth skills has up to a {#}% chance to grant Earthen Might.

This chance is increased by {#}% for Critical Strikes, and is further increased by {#}% if the target is Stunned, Immobilized, or Knocked Back. 

Earthen Might restores all of your Spirit & grants you {#}% Critical Strike Chance for {#} seconds.`,
		id: 131,
		maxPoints: 1,
		values: [ "5", "10", "10", "100", "5" ],
		x: 186.284,
		y: 368.005
	},
	"Lupine Ferocity": {
		connections: [ "Capstone" ],
		description: `Every 6th Werewolf skill hit Critically Strikes and deals x{#}% increased damage.`,
		id: 132,
		maxPoints: 1,
		values: [ "60" ],
		x: -191.047,
		y: 366.455
	},
	"Bestial Rampage": {
		connections: [ "Capstone" ],
		description: `After being a Werewolf for {#} seconds, gain {#}% Attack Speed for {#} seconds. 

After being a Werebear for {#} seconds, deal x{#}% increased damage for {#} seconds.`,
		id: 133,
		maxPoints: 1,
		values: [ "2.5", "20", "15", "2.5", "20", "15" ],
		x: -567.981,
		y: 365.85
	},
	"Perfect Storm": {
		connections: [ "Capstone" ],
		description: `Your Storm skills grant {#} Spirit and deal x{#}% increased damage when damaging a Vulnerable, immobilized or slowed enemy.`,
		id: 134,
		maxPoints: 1,
		values: [ "2", "20" ],
		x: 932.943,
		y: 367.865
	},
	"Ursine Strength": {
		connections: [ "Capstone" ],
		description: `Gain {#}% additional maximum Life while in Werebear form and for {#} seconds after leaving Werebear form.

While Healthy, deal x{#}% increased damage.`,
		id: 135,
		maxPoints: 1,
		values: [ "20", "3", "20" ],
		x: -943.646,
		y: 367.035
	},
};

druid["Spirit Boons"] = {
	"Deer": {
		id: 158,
		"Prickleskin": {
			description: `Gain +796 Thorns.`,
			id: 142,
		},
		"Gift of the Stag": {
			description: `Gain +10 Maximum Spirit.`,
			id: 143,
		},
		"Wariness": {
			description: `Take x10% Reduced Damage from Elites.`,
			id: 144,
		},
		"Advantageous Beast": {
			description: `Reduce the duration of incoming crowd control effects by 15%.`,
			id: 145,
		},
	},
	"Eagle": {
		id: 159,
		"Scythe Talons": {
			description: `+5% Critical Strike Chance.`,
			id: 146,
		},
		"Iron Feather": {
			description: `x10% Maximum Health.`,
			id: 147,
		},
		"Swooping Attacks": {
			description: `+10% Attack Speed.`,
			id: 148,
		},
		"Avian Wrath": {
			description: `+30% Critical Strike Damage.`,
			id: 149,
		},
	},
	"Wolf": {
		id: 160,
		"Packleader": {
			description: `Lucky Hit: Critical Strikes have up to a 20% chance to reset the cooldown of your Companion skills.`,
			id: 150,
		},
		"Energize": {
			description: `Lucky Hit: Dealing damage has up to a 15% chance to restore 10 Spirit.`,
			id: 151,
		},
		"Bolster": {
			description: `Fortify for 10% of your maximum Life when you use a Defensive skill.`,
			id: 152,
		},
		"Calamity": {
			description: `Extend the duration of Ultimate skills by 25%.`,
			id: 153,
		},
	},
	"Snake": {
		id: 161,
		"Obsidian Slam": {
			description: `Lucky Hit: Earth skills have up to a 15% chance to Stun enemies for # seconds. If the target is already Stunned and is not a boss, they Overpower the target instead.`,
			id: 154,
		},
		"Overload": {
			description: `Lucky Hit: Lightning damage has up to a 20% chance to cause the target to emit a static discharge, dealing 63.53% damage to surrounding enemies.`,
			id: 155,
		},
		"Masochistic": {
			description: `Critical Strikes with Shapeshifting skills heal you for 3% of your maximum Life.`,
			id: 156,
		},
		"Calm Before the Storm": {
			description: `Lucky Hit: Nature Magic skills have up to a 15% chance to reduce the cooldown of your Ultimate skill by 2 seconds.`,
			id: 157,
		},
	},
};

export { druid };