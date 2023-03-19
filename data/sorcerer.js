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
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -1203.599,
		y: 4249.025
	},
	"Capstone": {
		requiredPoints: 33,
		x: -7.567,
		y: 4869.41
	},
};

sorcererData["Basic"] = {
	"Frost Bolt": {
		connections: [ "Basic", "Enhanced Frost Bolt" ],
		description: `Lucky Hit Chance: {#}%
Throw a bolt of frost at an enemy, dealing {#}% damage and Chilling them for {#}%.

— Enchantment Effect —
Direct damage from Skills applies up to {#}% Chill.`,
		id: 0,
		maxPoints: 5,
		values: [ "30", "35", "15" ],
		extraValues: [ "30" ],
		x: -195.614,
		y: -247.035
	},
	"Enhanced Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Frost Bolt", "Flickering Frost Bolt", "Glinting Frost Bolt" ],
		description: `Frost Bolt has a {#}% chance to explode on Chilled enemies, hitting surrounding enemies. Chance increased to 100% against Frozen enemies.`,
		id: 1,
		maxPoints: 1,
		values: [ "15" ],
		x: -336.656,
		y: -421.415
	},
	"Flickering Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Enhanced Frost Bolt" ],
		description: `Frost Bolt makes Frozen enemies Vulnerable for {#} seconds.`,
		id: 2,
		maxPoints: 1,
		values: [ "3" ],
		x: -592.019,
		y: -455.675
	},
	"Glinting Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Enhanced Frost Bolt" ],
		description: `Frost Bolt generates {#} Mana when hitting Chilled or Frozen enemies.`,
		id: 3,
		maxPoints: 1,
		values: [ "4" ],
		x: -263.99,
		y: -545.8
	},
	"Spark": {
		connections: [ "Basic", "Enhanced Spark" ],
		description: `Lucky Hit Chance: {#}%
Launch a bolt of lightning that shocks an enemy {#} times, dealing {#}% damage each hit.

— Enchantment Effect —
Killing an enemy has a {#}% chance to form a Crackling Energy.`,
		id: 4,
		maxPoints: 5,
		values: [ "9", "4", "8" ],
		extraValues: [ "10" ],
		x: -489.038,
		y: -81.23
	},
	"Enhanced Spark": {
		baseSkill: "Spark",
		connections: [ "Spark", "Flickering Spark", "Glinting Spark" ],
		description: `Each time Spark hits its primary target, it has a {#}% chance to hit up to {#} additional enemies, dealing {#}% damage. If there are no other enemies to hit, Spark instead deals x{#}% increased damage to its primary target.`,
		id: 5,
		maxPoints: 1,
		values: [ "20", "3", "6", "20" ],
		x: -762.794,
		y: -204.92
	},
	"Flickering Spark": {
		baseSkill: "Spark",
		connections: [ "Enhanced Spark" ],
		description: `Each time Spark hits an enemy it has a {#}% chance to form a Crackling Energy.`,
		id: 6,
		maxPoints: 1,
		values: [ "3" ],
		x: -782.894,
		y: -342.245
	},
	"Glinting Spark": {
		baseSkill: "Spark",
		connections: [ "Enhanced Spark" ],
		description: `Spark grants +{#}% increased Critical Strike Chance per cast for {#} seconds, up to +{#}%.`,
		id: 7,
		maxPoints: 1,
		values: [ "2", "3", "10" ],
		x: -1028.789,
		y: -207.505
	},
	"Arc Lash": {
		connections: [ "Basic", "Enhanced Arc Lash" ],
		description: `Lucky Hit Chance: {#}%
Unleash arcing lightning that deals {#}% damage to enemies in front of you. Every {#} times Arc Lash swipes, it Stuns all enemies hit for {#} seconds.

— Enchantment Effect —
When you use a Cooldown, enemies around you are Stunned for {#} seconds.`,
		id: 8,
		maxPoints: 5,
		values: [ "30", "42", "10", "2" ],
		extraValues: [ "0.5" ],
		x: 487.781,
		y: -80.27
	},
	"Enhanced Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Arc Lash", "Glinting Arc Lash", "Flickering Arc Lash" ],
		description: `If Arc Lash's initial swipe Critically Strikes, it swipes an additional time.`,
		id: 9,
		maxPoints: 1,
		x: 765.421,
		y: -208.87
	},
	"Glinting Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Enhanced Arc Lash" ],
		description: `Hitting a Stunned enemy with Arc Lash reduces your Cooldowns by {#} seconds.`,
		id: 10,
		maxPoints: 1,
		values: [ "0.25" ],
		x: 1040.126,
		y: -209
	},
	"Flickering Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Enhanced Arc Lash" ],
		description: `Gain +{#}% Movement Speed for {#} seconds per enemy hit with Arc Lash, up to +{#}%.`,
		id: 11,
		maxPoints: 1,
		values: [ "6", "5", "18" ],
		x: 759.211,
		y: -351.28
	},
	"Fire Bolt": {
		connections: [ "Basic", "Enhanced Fire Bolt" ],
		description: `Lucky Hit Chance: {#}%
Hurl a flaming bolt, dealing {#}% damage and Burning for {#}% damage over {#} seconds.

— Enchantment Effect —
Direct damage from Skills applies up to an additional {#}% Burning damage over {#} seconds.`,
		id: 12,
		maxPoints: 5,
		values: [ "20", "10", "40", "8" ],
		extraValues: [ "23", "8" ],
		x: 202.516,
		y: -251.18
	},
	"Enhanced Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Fire Bolt", "Glinting Fire Bolt", "Flickering Fire Bolt" ],
		description: `Fire Bolt pierces through Burning enemies.`,
		id: 13,
		maxPoints: 1,
		x: 333.76,
		y: -423.11
	},
	"Glinting Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Enhanced Fire Bolt" ],
		description: `Critical Strikes with Fire Bolt increase the Burning damage you deal to the enemy by x{#}% for {#} seconds.`,
		id: 14,
		maxPoints: 1,
		values: [ "20", "4" ],
		x: 586.526,
		y: -457.72
	},
	"Flickering Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Enhanced Fire Bolt" ],
		description: `Fire Bolt generates {#} Mana when hitting a Burning enemy.`,
		id: 15,
		maxPoints: 1,
		values: [ "2" ],
		x: 249.014,
		y: -546.625
	},
};

sorcererData["Core"] = {
	"Charged Bolts": {
		connections: [ "Core", "Enhanced Charged Bolts" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Release {#} bolts of lightning that course along the ground in an erratic pattern, dealing {#}% damage each.

— Enchantment Effect —
When you Stun an enemy, there's a {#}% chance to release {#} Charged Bolts from them.`,
		id: 16,
		maxPoints: 5,
		values: [ "40", "25", "5", "17" ],
		extraValues: [ "40", "3" ],
		x: 133.995,
		y: 322.79
	},
	"Enhanced Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Charged Bolts", "Greater Charged Bolts", "Destructive Charged Bolts" ],
		description: `Hitting an enemy at least {#} times with same cast of Charged Bolts releases a lightning nova, dealing {#}% damage to enemies around them.`,
		id: 17,
		maxPoints: 1,
		values: [ "3", "15" ],
		x: 198.23,
		y: 523.06
	},
	"Greater Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Enhanced Charged Bolts" ],
		description: `Charged Bolts deals x{#}% increased damage to Stunned enemies.`,
		id: 18,
		maxPoints: 1,
		values: [ "25" ],
		x: 92.625,
		y: 636.325
	},
	"Destructive Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Enhanced Charged Bolts" ],
		description: `Hitting an enemy with Charged Bolts reduces their damage dealt by {#}% for {#} seconds.`,
		id: 19,
		maxPoints: 1,
		values: [ "20", "3" ],
		x: 384.92,
		y: 599.82
	},
	"Frozen Orb": {
		connections: [ "Core", "Enhanced Frozen Orb" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Unleash an orb that Chills for {#}% and expels piercing shards, dealing a total of {#}% damage. Upon expiration, Frozen Orb explodes, dealing {#}% damage and Chilling enemies for {#}%.

— Enchantment Effect —
Whenever you cast a Non-Basic Skill, you have a {#}% chance to launch a Frozen Orb at a Nearby enemy.`,
		id: 20,
		maxPoints: 5,
		values: [ "40", "20", "34", "32", "29", "9" ],
		extraValues: [ "20" ],
		x: -639.26,
		y: -93.76
	},
	"Enhanced Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Destructive Frozen Orb", "Greater Frozen Orb", "Frozen Orb" ],
		description: `When cast above {#} Mana, Frozen Orb's explosion damage is increased by x{#}%.`,
		id: 21,
		maxPoints: 1,
		values: [ "50", "30" ],
		x: -965.455,
		y: -151.935
	},
	"Destructive Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Enhanced Frozen Orb" ],
		description: `Frozen Orb's explosion restores {#} Mana when hitting a Frozen enemy.`,
		id: 22,
		maxPoints: 1,
		values: [ "5" ],
		x: -1219.085,
		y: -125.825
	},
	"Greater Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Enhanced Frozen Orb" ],
		description: `Frozen Orb's explosion has a {#}% chance to make all enemies hit Vulnerable for {#} seconds. Frozen Orb always makes Frozen enemies Vulnerable.`,
		id: 23,
		maxPoints: 1,
		values: [ "25", "2" ],
		x: -1066.555,
		y: -284.32
	},
	"Incinerate": {
		connections: [ "Core", "Enhanced Incinerate" ],
		description: `Mana Cost: {#} per second
Lucky Hit Chance: {#}%
Channel a beam of fire, Burning enemies for {#}% damage per second. Damage per second increases over {#} seconds, up to {#}.

— Enchantment Effect —
Every {#} seconds, a serpent spawns and Incinerates enemies for {#} seconds.`,
		id: 24,
		maxPoints: 5,
		values: [ "20", "40", "36", "4", "49%" ],
		extraValues: [ "20", "6" ],
		x: 0.845,
		y: -304.65
	},
	"Enhanced Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Incinerate", "Destructive Incinerate", "Greater Incinerate" ],
		description: `While channeling Incinerate, you Burn enemies around you for {#}% of the damage per second.`,
		id: 25,
		maxPoints: 1,
		values: [ "15" ],
		x: -0.58,
		y: -500.805
	},
	"Destructive Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Enhanced Incinerate" ],
		description: `Enemies deal {#}% less damage while Burning from Incinerate.`,
		id: 26,
		maxPoints: 1,
		values: [ "20" ],
		x: -137.58,
		y: -608.375
	},
	"Greater Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Enhanced Incinerate" ],
		description: `Every {#} seconds an enemy has been hit by Incinerate, they are Immobilized for {#} seconds.`,
		id: 27,
		maxPoints: 1,
		values: [ "4", "1" ],
		x: 144.77,
		y: -607.315
	},
	"Fireball": {
		connections: [ "Core", "Enhanced Fireball" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Hurl an exploding ball of fire, dealing {#}% damage to surrounding enemies.

— Enchantment Effect —
When you kill an enemy, they explode in a Fireball for {#}% of its damage.`,
		id: 28,
		maxPoints: 5,
		values: [ "40", "33", "60" ],
		extraValues: [ "50" ],
		x: -363.79,
		y: -251.52
	},
	"Enhanced Fireball": {
		baseSkill: "Fireball",
		connections: [ "Fireball", "Greater Fireball", "Destructive Fireball" ],
		description: `Fireball's radius is increased based on distance traveled, up to {#}%.`,
		id: 29,
		maxPoints: 1,
		values: [ "50" ],
		x: -597.17,
		y: -411.325
	},
	"Greater Fireball": {
		baseSkill: "Fireball",
		connections: [ "Enhanced Fireball" ],
		description: `Fireball deals {#}% of the Burning damage you've applied to enemies as additional direct damage.`,
		id: 30,
		maxPoints: 1,
		values: [ "10" ],
		x: -851.105,
		y: -424.01
	},
	"Destructive Fireball": {
		baseSkill: "Fireball",
		connections: [ "Enhanced Fireball" ],
		description: `Fireball's explosion's Critical Strike Damage is increased by +{#}%. Each enemy it hits increases this bonus by +{#}%, up to +{#}% total.`,
		id: 31,
		maxPoints: 1,
		values: [ "10", "5", "25" ],
		x: -599.05,
		y: -541.025
	},
	"Chain Lightning": {
		connections: [ "Core", "Enhanced Chain Lightning" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Unleash a stream of lightning that deals {#}% damage and chains between Nearby enemies and you up to {#} times, prioritizing enemies.

— Enchantment Effect —
Chain Lightning forms automatically after spending {#} Mana.`,
		id: 32,
		maxPoints: 5,
		values: [ "35", "25", "42", "6" ],
		extraValues: [ "100" ],
		x: -205.425,
		y: 323.95
	},
	"Enhanced Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Chain Lightning", "Greater Chain Lightning", "Destructive Chain Lightning" ],
		description: `Chain Lightning gains a +{#}% increased Critical Strike Chance per bounce.`,
		id: 33,
		maxPoints: 1,
		values: [ "3" ],
		x: -357.145,
		y: 505.675
	},
	"Greater Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Enhanced Chain Lightning" ],
		description: `If Chain Lightning bounces off of you, its next hit deals x{#}% increased damage.`,
		id: 34,
		maxPoints: 1,
		values: [ "25" ],
		x: -579.895,
		y: 551.75
	},
	"Destructive Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Enhanced Chain Lightning" ],
		description: `When Chain Lightning Critically Strikes, it has a {#}% chance to form a Crackling Energy.`,
		id: 35,
		maxPoints: 1,
		values: [ "25" ],
		x: -298.86,
		y: 634.625
	},
	"Ice Shards": {
		connections: [ "Core", "Enhanced Ice Shards" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Launch {#} shards that deal {#}% damage each. Deals x{#}% increased damage to Frozen enemies.

— Enchantment Effect —
Ice Shards automatically conjure and fly towards Frozen enemies.`,
		id: 36,
		maxPoints: 5,
		values: [ "30", "25", "5", "25", "25" ],
		x: -639.885,
		y: 87.015
	},
	"Enhanced Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Ice Shards", "Greater Ice Shards", "Destructive Ice Shards" ],
		description: `Ice Shards have a {#}% chance to ricochet to another enemy. Ice Shards always ricochet off of Frozen enemies.`,
		id: 37,
		maxPoints: 1,
		values: [ "15" ],
		x: -971.225,
		y: 141.315
	},
	"Greater Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Enhanced Ice Shards" ],
		description: `While you have a Barrier active, casts of Ice Shards treat enemies as if they were Frozen.`,
		id: 38,
		maxPoints: 1,
		x: -1226.59,
		y: 115.585
	},
	"Destructive Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Enhanced Ice Shards" ],
		description: `Hitting an enemy with {#} Ice Shards in a single cast makes them Vulnerable for {#} seconds.`,
		id: 39,
		maxPoints: 1,
		values: [ "5", "2" ],
		x: -1085.695,
		y: 260.63
	},
	"Devastation": {
		connections: [ "Core", "Elemental Dominance" ],
		description: `Your Maximum Mana is increased by {#}.`,
		id: 40,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -520.555,
		y: 252.33
	},
	"Elemental Dominance": {
		connections: [ "Devastation" ],
		description: `Your Core Skills deal x{#}% increased damage when cast above {#} Mana.`,
		id: 41,
		maxPoints: 3,
		values: [ "{4/8/12}", "50" ],
		x: -856.385,
		y: 406.375
	},
	"Potent Warding": {
		connections: [ "Core" ],
		description: `After casting a Non-Basic Skill, you gain {#}% Resistance to all elements and {#}% additional Resistance to that Skill's element for {#} seconds.`,
		id: 42,
		maxPoints: 3,
		values: [ "{2/4/6}", "{1/2/3}", "3" ],
		x: 622.72,
		y: 2.07
	},
};

sorcererData["Defensive"] = {
	"Flame Shield": {
		connections: [ "Defensive", "Enhanced Flame Shield" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Engulf yourself in flames for {#} seconds, Burning surrounding enemies for {#}% damage per second.

While Flame Shield is active, you are Immune.

— Enchantment Effect —
Flame Shield automatically activates when you take fatal damage. Can only happen once every {#} seconds.`,
		id: 43,
		maxPoints: 5,
		values: [ "20", "50", "2", "23" ],
		extraValues: [ "120" ],
		x: -1.14,
		y: -278.29
	},
	"Enhanced Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Flame Shield", "Mystical Flame Shield", "Shimmering Flame Shield" ],
		description: `Flame Shield grants +{#}% Movement Speed while active.`,
		id: 44,
		maxPoints: 1,
		values: [ "25" ],
		x: -4.89,
		y: -490.29
	},
	"Mystical Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Enhanced Flame Shield" ],
		description: `You gain {#}% Mana Cost Reduction while Flame Shield is active.`,
		id: 45,
		maxPoints: 1,
		values: [ "25" ],
		x: -157.438,
		y: -605.77
	},
	"Shimmering Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Enhanced Flame Shield" ],
		description: `Flame Shield Heals you for {#}% of your missing Life.`,
		id: 46,
		maxPoints: 1,
		values: [ "50" ],
		x: 151.31,
		y: -608.105
	},
	"Frost Nova": {
		connections: [ "Defensive", "Enhanced Frost Nova" ],
		description: `Cooldown: {#} seconds
Charges: {#}
Charge Cooldown: {#} seconds
Unleash a torrent of frost, Freezing enemies around you for {#} seconds.

— Enchantment Effect —
Lucky Hit: Your Conjuration Skills have a {#}% chance to unleash a Frost Nova when hitting enemies.`,
		id: 47,
		maxPoints: 5,
		values: [ "15", "", "", "2" ],
		extraValues: [ "30" ],
		x: 7.87,
		y: 296.675
	},
	"Enhanced Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Frost Nova", "Mystical Frost Nova", "Shimmering Frost Nova" ],
		description: `Killing enemies Frozen by Frost Nova reduces its Cooldown by {#} seconds, up to {#} seconds per cast.`,
		id: 48,
		maxPoints: 1,
		values: [ "2", "6" ],
		x: 9.55,
		y: 507.05
	},
	"Mystical Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Enhanced Frost Nova" ],
		description: `Frost Nova makes enemies Vulnerable for {#} seconds, increased to {#} seconds against Bosses.`,
		id: 49,
		maxPoints: 1,
		values: [ "4", "8" ],
		x: -144.443,
		y: 623.882
	},
	"Shimmering Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Enhanced Frost Nova" ],
		description: `Frost Nova generates {#} Mana per enemy hit.`,
		id: 50,
		maxPoints: 1,
		values: [ "4" ],
		x: 165.83,
		y: 624.487
	},
	"Ice Armor": {
		connections: [ "Defensive", "Enhanced Ice Armor" ],
		description: `Cooldown: {#} seconds
A Barrier of ice forms around you for {#} seconds, absorbing {#}% of your Base Life ({#}) in damage. While Ice Armor is active, {#}% of your damage dealt is added to its Barrier.

— Enchantment Effect —
Upon getting hit, you have a {#}% chance to apply Ice Armor.`,
		id: 51,
		maxPoints: 5,
		values: [ "20", "6", "30", "", "10" ],
		extraValues: [ "5" ],
		x: 421.865,
		y: 200.98
	},
	"Enhanced Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Ice Armor", "Shimmering Ice Armor", "Mystical Ice Armor" ],
		description: `While Ice Armor is active, your Mana Regeneration is increased by x{#}%.`,
		id: 52,
		maxPoints: 1,
		values: [ "25" ],
		x: 707.875,
		y: 325.705
	},
	"Shimmering Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Enhanced Ice Armor" ],
		description: `Enemies that hit you while Ice Armor is active have a {#}% chance to become Frozen for {#} seconds.`,
		id: 53,
		maxPoints: 1,
		values: [ "15", "3" ],
		x: 787.605,
		y: 459.825
	},
	"Mystical Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Enhanced Ice Armor" ],
		description: `Damage against Vulnerable enemies contributes {#}% more to Ice Armor's Barrier.`,
		id: 54,
		maxPoints: 1,
		values: [ "100" ],
		x: 979.38,
		y: 318.55
	},
	"Teleport": {
		connections: [ "Defensive", "Enhanced Teleport" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Transform into lightning, becoming Unstoppable and surging to the target location, dealing {#}% damage around you upon arrival.

— Enchantment Effect —
Evade is replaced with a short range Teleport on a {#} second Cooldown.`,
		id: 55,
		maxPoints: 5,
		values: [ "11", "40", "25" ],
		extraValues: [ "17.0" ],
		x: 422.375,
		y: -202.015
	},
	"Enhanced Teleport": {
		baseSkill: "Teleport",
		connections: [ "Teleport", "Mystical Teleport", "Shimmering Teleport" ],
		description: `Teleport's Cooldown is decreased by {#} seconds per enemy hit, up to {#} seconds.`,
		id: 56,
		maxPoints: 1,
		values: [ "0.5", "3" ],
		x: 707.335,
		y: -346.205
	},
	"Mystical Teleport": {
		baseSkill: "Teleport",
		connections: [ "Enhanced Teleport" ],
		description: `For {#} seconds after Teleporting, Crackling Energy hits {#} additional enemies.`,
		id: 57,
		maxPoints: 1,
		values: [ "4", "2" ],
		x: 742.975,
		y: -485.9
	},
	"Shimmering Teleport": {
		baseSkill: "Teleport",
		connections: [ "Enhanced Teleport" ],
		description: `After Teleporting, you gain {#}% Damage Reduction for {#} seconds.`,
		id: 58,
		maxPoints: 1,
		values: [ "30", "5" ],
		x: 967.73,
		y: -351.155
	},
	"Elemental Attunement": {
		connections: [ "Defensive" ],
		description: `Lucky Hit: Critical Strikes have a {#}% chance to reset the Cooldown of one of your Defensive Skills. Can only happen once every {#} seconds.`,
		id: 59,
		maxPoints: 3,
		values: [ "{5/10/15}", "10" ],
		x: -615.154,
		y: 1.335
	},
	"Glass Cannon": {
		connections: [ "Defensive" ],
		description: `You deal x{#}% increased damage, but take x{#}% more damage.`,
		id: 60,
		maxPoints: 3,
		values: [ "{6/12/18}", "{3/6/9}" ],
		x: 630.605,
		y: 0.56
	},
};

sorcererData["Conjuration"] = {
	"Hydra": {
		connections: [ "Conjuration", "Enhanced Hydra" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a {#}-headed hydra for {#} seconds. Each head spits fire at enemies, dealing {#}% damage.

Maximum {#} active Hydras at a time.

— Enchantment Effect —
After spending {#} Mana, a {#}-headed Hydra spawns for {#} seconds.`,
		id: 61,
		maxPoints: 5,
		values: [ "20", "77", "3", "12.0", "30", "1" ],
		extraValues: [ "300", "5", "5" ],
		x: 6.92,
		y: -281.666
	},
	"Enhanced Hydra": {
		baseSkill: "Hydra",
		connections: [ "Hydra", "Invoked Hydra", "Summoned Hydra" ],
		description: `While Healthy, your casts of Hydra gain {#} additional head.`,
		id: 62,
		maxPoints: 1,
		values: [ "1" ],
		x: 6.62,
		y: -486.715
	},
	"Invoked Hydra": {
		baseSkill: "Hydra",
		connections: [ "Enhanced Hydra" ],
		description: `After you Critically Strike, your Hydras gain +{#}% Critical Strike Chance for {#} seconds.`,
		id: 63,
		maxPoints: 1,
		values: [ "30", "3" ],
		x: 158.38,
		y: -596.294
	},
	"Summoned Hydra": {
		baseSkill: "Hydra",
		connections: [ "Enhanced Hydra" ],
		description: `Hydra also Burns enemies for an additional {#}% of its Base damage dealt over {#} seconds.`,
		id: 64,
		maxPoints: 1,
		values: [ "12", "6" ],
		x: -145.46,
		y: -594.569
	},
	"Ice Blades": {
		connections: [ "Conjuration", "Enhanced Ice Blades" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a pair of ice blades for {#} seconds that rapidly slash enemies for {#}% damage and have a {#}% chance to make them Vulnerable for {#} seconds.

— Enchantment Effect —
For every {#} seconds in Cooldowns you spend, you spawn an Ice Blades on a random enemy.`,
		id: 65,
		maxPoints: 5,
		values: [ "12", "71", "6.0", "31", "30", "2" ],
		extraValues: [ "20" ],
		x: -533.46,
		y: -0.359
	},
	"Enhanced Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Ice Blades", "Summoned Ice Blades", "Invoked Ice Blades" ],
		description: `Ice Blades's Cooldown is reduced by {#} second each time it hits a Vulnerable enemy.`,
		id: 66,
		maxPoints: 1,
		values: [ "1" ],
		x: -898.675,
		y: -0.442
	},
	"Summoned Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Enhanced Ice Blades" ],
		description: `{#}% of Enhanced Ice Blades's Cooldown reduction is applied to your other Skills.`,
		id: 67,
		maxPoints: 1,
		values: [ "50" ],
		x: -1089.415,
		y: 85.628
	},
	"Invoked Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Enhanced Ice Blades" ],
		description: `Your Ice Blades gain +{#}% increased Attack Speed per active Ice Blades.`,
		id: 68,
		maxPoints: 1,
		values: [ "10" ],
		x: -1080.445,
		y: -89.709
	},
	"Lightning Spear": {
		connections: [ "Conjuration", "Enhanced Lightning Spear" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a spear of lightning that seeks out enemies for {#} seconds, dealing {#}% damage per hit.

— Enchantment Effect —
Absorbing Crackling Energy has a {#}% chance to conjure a Lightning Spear.`,
		id: 69,
		maxPoints: 5,
		values: [ "20", "35", "6.0", "15" ],
		extraValues: [ "10" ],
		x: -413.195,
		y: 220.974
	},
	"Enhanced Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Lightning Spear", "Summoned Lightning Spear", "Invoked Lightning Spear" ],
		description: `After Critically Striking, Lightning Spear gains a +{#}% increased stacking Critical Strike Chance for its duration.`,
		id: 70,
		maxPoints: 1,
		values: [ "5" ],
		x: -685.66,
		y: 367.663
	},
	"Summoned Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Enhanced Lightning Spear" ],
		description: `Collecting Crackling Energy increases the damage of your next Lightning Spear cast by x{#}%, up to x{#}%.`,
		id: 71,
		maxPoints: 1,
		values: [ "20", "100" ],
		x: -931.92,
		y: 378.401
	},
	"Invoked Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Enhanced Lightning Spear" ],
		description: `Lightning Spear Stuns enemies for {#} seconds when Critically Striking.`,
		id: 72,
		maxPoints: 1,
		values: [ "2" ],
		x: -732.94,
		y: 495.95
	},
	"Conjuration Mastery": {
		connections: [ "Conjuration" ],
		description: `You deal x{#}% increased damage for each active Conjuration.`,
		id: 73,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: -1.85,
		y: 301.34
	},
	"Precision Magic": {
		connections: [ "Conjuration" ],
		description: `Your Lucky Hit Chance is increased by +{#}%.`,
		id: 74,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -449.215,
		y: -240.001
	},
	"Align the Elements": {
		connections: [ "Mana Shield", "Conjuration", "Protection" ],
		description: `You gain {#}% Damage Reduction against Elites for each second you haven't taken damage from one, up to {#}%.`,
		id: 75,
		maxPoints: 3,
		values: [ "{5/10/15}", "50" ],
		x: 532.58,
		y: 0.059
	},
	"Mana Shield": {
		connections: [ "Align the Elements" ],
		description: `Every time you spend {#} Mana, you gain {#}% Damage Reduction for {#} seconds.`,
		id: 76,
		maxPoints: 3,
		values: [ "100", "{5/10/15}", "5" ],
		x: 836.363,
		y: -77.321
	},
	"Protection": {
		connections: [ "Align the Elements" ],
		description: `Using a Cooldown grants {#}% of your Maximum Life ({#}) as a Barrier for {#} seconds.`,
		id: 77,
		maxPoints: 3,
		values: [ "{10/20/30}", "", "5" ],
		x: 834.832,
		y: 80.406
	},
};

sorcererData["Mastery"] = {
	"Meteor": {
		connections: [ "Mastery", "Enhanced Meteor" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a meteor that strikes the target location, dealing {#}% damage and Burning the ground for {#}% damage over {#} seconds.

— Enchantment Effect —
Lucky Hit: {#}% chance for a Meteor to fall on enemies.`,
		id: 78,
		maxPoints: 5,
		values: [ "40", "40", "50", "35", "3" ],
		extraValues: [ "3" ],
		x: 601.53,
		y: -220.475
	},
	"Enhanced Meteor": {
		baseSkill: "Meteor",
		connections: [ "Meteor", "Mage's Meteor", "Wizard's Meteor" ],
		description: `If a cast of Meteor hits {#} or more enemies, there is a {#}% chance an additional Meteor falls on the same location.`,
		id: 79,
		maxPoints: 1,
		values: [ "3", "30" ],
		x: 915.055,
		y: -337.375
	},
	"Mage's Meteor": {
		baseSkill: "Meteor",
		connections: [ "Enhanced Meteor" ],
		description: `Meteor falls {#}% faster.`,
		id: 80,
		maxPoints: 1,
		values: [ "30" ],
		x: 1174.005,
		y: -328.576
	},
	"Wizard's Meteor": {
		baseSkill: "Meteor",
		connections: [ "Enhanced Meteor" ],
		description: `Meteor's impact Immobilizes enemies for {#} seconds.`,
		id: 81,
		maxPoints: 1,
		values: [ "2" ],
		x: 991.17,
		y: -462.803
	},
	"Blizzard": {
		connections: [ "Mastery", "Enhanced Blizzard" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a frigid blizzard that deals {#}% damage and continually Chills enemies for {#}% over {#} seconds.

— Enchantment Effect —
Every {#} seconds, a Blizzard forms over you and follows you for {#} seconds.`,
		id: 82,
		maxPoints: 5,
		values: [ "40", "33", "120", "18", "8" ],
		extraValues: [ "15", "4" ],
		x: 300.64,
		y: -339.596
	},
	"Enhanced Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Blizzard", "Mage's Blizzard", "Wizard's Blizzard" ],
		description: `Blizzard deals x{#}% increased damage to Frozen enemies.`,
		id: 83,
		maxPoints: 1,
		values: [ "25" ],
		x: 447.585,
		y: -525.399
	},
	"Mage's Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Enhanced Blizzard" ],
		description: `When cast above {#} Mana, Blizzard's duration is increased by {#} seconds.`,
		id: 84,
		maxPoints: 1,
		values: [ "50", "4" ],
		x: 402.595,
		y: -654.156
	},
	"Wizard's Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Enhanced Blizzard" ],
		description: `While you have an active Blizzard, your Core Skills cost {#}% less Mana.`,
		id: 85,
		maxPoints: 1,
		values: [ "10" ],
		x: 675.015,
		y: -585
	},
	"Ball Lightning": {
		connections: [ "Mastery", "Enhanced Ball Lightning" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Discharge a ball of lightning that slowly moves forward, continually zapping enemies for {#}% damage.

— Enchantment Effect —
Lucky Hit: Critical Strikes have a {#}% chance to spawn a static Ball Lightning.`,
		id: 86,
		maxPoints: 5,
		values: [ "50", "20", "18" ],
		extraValues: [ "25" ],
		x: 274.81,
		y: 344.08
	},
	"Enhanced Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Ball Lightning", "Wizard's Ball Lightning", "Mage's Ball Lightning" ],
		description: `Ball Lightning's damage rate is increased by {#}% of your Attack Speed Bonus.`,
		id: 87,
		maxPoints: 1,
		values: [ "200" ],
		x: 431.875,
		y: 536.465
	},
	"Wizard's Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Enhanced Ball Lightning" ],
		description: `If an enemy is hit at least {#} times by a cast of Ball Lightning, a Crackling Energy is formed. Can only happen once per cast.`,
		id: 88,
		maxPoints: 1,
		values: [ "4" ],
		x: 399.115,
		y: 661.625
	},
	"Mage's Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Enhanced Ball Lightning" ],
		description: `After hitting Close enemies {#} times with Ball Lightning, your next cast of it Stuns enemies hit for {#} seconds.`,
		id: 89,
		maxPoints: 1,
		values: [ "50", "1" ],
		x: 656.41,
		y: 586.43
	},
	"Inner Flames": {
		connections: [ "Mastery", "Crippling Flames", "Devouring Blaze" ],
		description: `Your Pyromancy Skills deal x{#}% increased damage while you are Healthy.`,
		id: 90,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 594.325,
		y: 0.68
	},
	"Crippling Flames": {
		connections: [ "Inner Flames" ],
		description: `Lucky Hit: Your Pyromancy Skills have a {#}% chance to Immobilize enemies for {#} seconds. This chance is doubled while you are Healthy.`,
		id: 132,
		maxPoints: 3,
		values: [ "5", "2" ],
		x: 884.67,
		y: 83.63
	},
	"Devouring Blaze": {
		connections: [ "Inner Flames" ],
		description: `You deal x{#}% increased Critical Strike Damage against Burning enemies. If they are also Immobilized, this bonus is increased to x{#}%.`,
		id: 133,
		maxPoints: 3,
		values: [ "10", "25" ],
		x: 882.995,
		y: -75.715
	},
	"Static Discharge": {
		connections: [ "Invigorating Conduit", "Shocking Impact", "Mastery" ],
		description: `Lucky Hit: Critical Strikes with Shock Skills have up to a {#}% chance to form a Crackling Energy.`,
		id: 94,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -133.43,
		y: 371.055
	},
	"Invigorating Conduit": {
		connections: [ "Static Discharge" ],
		description: `Upon absorbing Crackling Energy, you gain {#} Mana.`,
		id: 134,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 4.47,
		y: 508.795
	},
	"Shocking Impact": {
		connections: [ "Static Discharge" ],
		description: `Every time you Stun an enemy, you deal {#}% Lightning damage to them.`,
		id: 95,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: -280.938,
		y: 509
	},
	"Icy Veil": {
		connections: [ "Mastery", "Snap Freeze", "Cold Front" ],
		description: `Your Barriers have a +{#}% increased duration.`,
		id: 96,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -141.488,
		y: -351.513
	},
	"Snap Freeze": {
		connections: [ "Icy Veil" ],
		description: `Lucky Hit: Frost Skills have a {#}% chance to instantly Freeze.`,
		id: 135,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 2.725,
		y: -507.73
	},
	"Cold Front": {
		connections: [ "Icy Veil" ],
		description: `While you have a Barrier active, you apply x{#}% more Chill.`,
		id: 98,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: -276.711,
		y: -506.953
	},
	"Firewall": {
		connections: [ "Mastery", "Enhanced Firewall" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Create a wall of flames that Burns enemies for {#}% damage over {#} seconds.

— Enchantment Effect —
Each time an enemy takes Burning damage, there's a {#}% chance to spawn 2 Firewalls underneath them for {#} seconds.`,
		id: 99,
		maxPoints: 5,
		values: [ "30", "40", "160", "8" ],
		extraValues: [ "5", "3" ],
		x: 592.435,
		y: 224.3
	},
	"Enhanced Firewall": {
		baseSkill: "Firewall",
		connections: [ "Firewall", "Wizard's Firewall", "Mage's Firewall" ],
		description: `Enemies take x{#}% increased Burning damage from you while standing in Firewall.`,
		id: 100,
		maxPoints: 1,
		values: [ "25" ],
		x: 905.955,
		y: 347.945
	},
	"Wizard's Firewall": {
		baseSkill: "Firewall",
		connections: [ "Enhanced Firewall" ],
		description: `You gain x{#}% increased Mana Regeneration per active Firewall, up to x{#}%.`,
		id: 101,
		maxPoints: 1,
		values: [ "5", "25" ],
		x: 998.24,
		y: 479.99
	},
	"Mage's Firewall": {
		baseSkill: "Firewall",
		connections: [ "Enhanced Firewall" ],
		description: `Enemies continue Burning for {#} seconds after leaving Firewall.`,
		id: 102,
		maxPoints: 1,
		values: [ "3" ],
		x: 1170.415,
		y: 343.18
	},
};

sorcererData["Ultimate"] = {
	"Inferno": {
		connections: [ "Ultimate", "Prime Inferno" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Summon a fiery serpent that continually constricts the target area, Burning enemies for {#}% damage over {#} seconds.`,
		id: 103,
		maxPoints: 1,
		values: [ "45", "38", "295", "8" ],
		x: -526.72,
		y: -71.235
	},
	"Prime Inferno": {
		baseSkill: "Inferno",
		connections: [ "Inferno", "Supreme Inferno" ],
		description: `Inferno repeatedly Pulls enemies to its center.`,
		id: 104,
		maxPoints: 1,
		x: -866.555,
		y: -183.635
	},
	"Supreme Inferno": {
		baseSkill: "Inferno",
		connections: [ "Prime Inferno" ],
		description: `While Inferno is active, your Pyromancy Skills cost no Mana.`,
		id: 105,
		maxPoints: 1,
		x: -1163.615,
		y: -183.18
	},
	"Unstable Currents": {
		connections: [ "Prime Unstable Currents", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lightning surges within you for {#} seconds. Whenever you cast a Shock Skill, a random Core, Conjuration, or Mastery Shock Skill is also cast.`,
		id: 106,
		maxPoints: 1,
		values: [ "70.0", "10" ],
		x: -347.8,
		y: 279.81
	},
	"Prime Unstable Currents": {
		baseSkill: "Unstable Currents",
		connections: [ "Unstable Currents", "Supreme Unstable Currents" ],
		description: `Unstable Currents increases your Attack Speed by +{#}% while active.`,
		id: 107,
		maxPoints: 1,
		values: [ "25" ],
		x: -568.77,
		y: 433.255
	},
	"Supreme Unstable Currents": {
		baseSkill: "Unstable Currents",
		connections: [ "Prime Unstable Currents" ],
		description: `While Unstable Currents is active, Crackling Energy continually pulses and consumes no charges.`,
		id: 108,
		maxPoints: 1,
		x: -571.55,
		y: 596.365
	},
	"Deep Freeze": {
		connections: [ "Prime Deep Freeze", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Encase yourself in ice, becoming Immune for {#} seconds, continually dealing {#}% damage, and Chilling enemies for {#}%. When Deep Freeze expires, it deals an additional {#}% damage.

Casting Deep Freeze again ends the effect early.`,
		id: 109,
		maxPoints: 1,
		values: [ "60", "5", "4", "13", "20", "100" ],
		x: -377.345,
		y: -274.565
	},
	"Prime Deep Freeze": {
		baseSkill: "Deep Freeze",
		connections: [ "Deep Freeze", "Supreme Deep Freeze" ],
		description: `When Deep Freeze ends, gain {#}% of your Base Life ({#}) as a Barrier for {#} seconds for each enemy you Froze while it was active.`,
		id: 110,
		maxPoints: 1,
		values: [ "10", "", "6" ],
		x: -592.28,
		y: -430.76
	},
	"Supreme Deep Freeze": {
		baseSkill: "Deep Freeze",
		connections: [ "Prime Deep Freeze" ],
		description: `When Deep Freeze ends, your Non-Ultimate Cooldowns are reduced by {#}%.`,
		id: 111,
		maxPoints: 1,
		values: [ "50" ],
		x: -590.745,
		y: -581.04
	},
	"Permafrost": {
		connections: [ "Hoarfrost", "Ultimate", "Icy Touch" ],
		description: `Frost Skills deal x{#}% increased damage to Elites.`,
		id: 113,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -3.97,
		y: -277.33
	},
	"Hoarfrost": {
		connections: [ "Permafrost", "Frigid Breeze" ],
		description: `You deal x{#}% increased damage to Chilled enemies, and x{#}% increased damage to Frozen enemies.`,
		id: 136,
		maxPoints: 3,
		values: [ "{3/6/9}", "{6/12/18}" ],
		x: -195.39,
		y: -421.43
	},
	"Frigid Breeze": {
		connections: [ "Hoarfrost", "Icy Touch" ],
		description: `Lucky Hit: Cold Damage against Vulnerable enemies has a {#}% chance to generate {#} Mana.`,
		id: 137,
		maxPoints: 3,
		values: [ "{20/40/60}", "5" ],
		x: -5.22,
		y: -581.655
	},
	"Icy Touch": {
		connections: [ "Permafrost", "Frigid Breeze" ],
		description: `You deal x{#}% increased Cold Damage to Vulnerable enemies.`,
		id: 115,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 180.41,
		y: -421.81
	},
	"Coursing Currents": {
		connections: [ "Electrocution", "Conduction", "Ultimate" ],
		description: `Hitting enemies with Shock Skills increases your Critical Strike Chance by +{#}%. Resets upon getting a Critical Strike.`,
		id: 116,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: 2.03,
		y: 287.38
	},
	"Electrocution": {
		connections: [ "Coursing Currents", "Convulsions" ],
		description: `Enemies deal {#}% less damage for {#} seconds after being Critically Struck by your Shock Skills.`,
		id: 117,
		maxPoints: 3,
		values: [ "{5/10/15}", "5" ],
		x: 201.78,
		y: 435.59
	},
	"Convulsions": {
		connections: [ "Conduction", "Electrocution" ],
		description: `Lucky Hit: Shock Skills have a {#}% chance to Stun enemies for {#} seconds.`,
		id: 118,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: 3.66,
		y: 604.95
	},
	"Conduction": {
		connections: [ "Coursing Currents", "Convulsions" ],
		description: `Critical Strikes with Shock Skills increase your Movement Speed by +{#}% for {#} seconds.`,
		id: 119,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: -191.455,
		y: 436.8
	},
	"Fiery Surge": {
		connections: [ "Endless Pyre", "Soulfire", "Ultimate" ],
		description: `Killing a Burning enemy increases your Mana Regeneration by +{#}% for {#} seconds.`,
		id: 123,
		maxPoints: 3,
		values: [ "{10/20/30}", "3" ],
		x: -533.615,
		y: 98.915
	},
	"Endless Pyre": {
		connections: [ "Warmth", "Fiery Surge" ],
		description: `You deal increased Burning damage to enemies for each second they remain Burning, up to x{#}% after {#} seconds.`,
		id: 121,
		maxPoints: 3,
		values: [ "{5/10/15}", "5" ],
		x: -863.88,
		y: 204.975
	},
	"Warmth": {
		connections: [ "Soulfire", "Endless Pyre" ],
		description: `Every {#} second, you Heal for {#}% of your Maximum Life ({#}) for each Nearby Burning enemy. Healing increased to {#}% from Bosses.`,
		id: 138,
		maxPoints: 3,
		values: [ "1", "{0.3/0.6/0.9}", "", "{0.6/1.2/1.8}" ],
		x: -1162.135,
		y: 102.405
	},
	"Soulfire": {
		connections: [ "Warmth", "Fiery Surge" ],
		description: `After standing still for {#} seconds, your Pyromancy Skills cost {#}% less Mana.`,
		id: 139,
		maxPoints: 3,
		values: [ "1.5", "{5/10/15}" ],
		x: -868.11,
		y: 2.82
	},
};

sorcererData["Capstone"] = {
	"Shatter": {
		connections: [ "Capstone" ],
		description: `After Freeze expires, enemies explode for {#}% of the damage you dealt to them while Frozen.`,
		id: 124,
		maxPoints: 1,
		values: [ "25" ],
		x: -633.197,
		y: 203.26
	},
	"Avalanche": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Your Frost Skills have up to a {#}% chance to make your next cast of Ice Shards, Frozen Orb, or Blizzard consume no Mana and deal x{#}% increased damage. Chance is doubled against Vulnerable enemies.`,
		id: 140,
		maxPoints: 1,
		values: [ "10", "40" ],
		x: -636.932,
		y: -2.225
	},
	"Combustion": {
		connections: [ "Capstone" ],
		description: `Your Burning effects deal x{#}% increased damage per unique source of Burning you have applied to the enemy. If the enemy is Burning from {#} or more sources, this bonus is doubled.`,
		id: 141,
		maxPoints: 1,
		values: [ "2", "3" ],
		x: 633.813,
		y: -3.15
	},
	"Esu's Ferocity": {
		connections: [ "Capstone" ],
		description: `Your Fire Critical Strike Damage is increased by x{#}% against enemies above 50% Life. Your Fire Critical Strike Chance is increased by +{#}% against enemies below 50% Life.

Killing an enemy with a Critical Strike grants both bonuses against all enemies for {#} seconds.`,
		id: 127,
		maxPoints: 1,
		values: [ "25", "5", "3" ],
		x: 637.394,
		y: 202.605
	},
	"Overflowing Energy": {
		connections: [ "Capstone" ],
		description: `Crackling Energy hits {#} additional enemy. Each time Crackling Energy hits an enemy, your Shock Skill Cooldowns are reduced by {#} seconds, increased to {#} seconds against Elites.`,
		id: 128,
		maxPoints: 1,
		values: [ "1", "0.1", "0.25" ],
		x: -187.52,
		y: 388.355
	},
	"Vyr's Mastery": {
		connections: [ "Capstone" ],
		description: `Close enemies take x{#}% increased damage from your Shock Skills and deal {#}% less damage to you. Critical Strikes increase these bonuses by {#}% for {#} seconds.`,
		id: 129,
		maxPoints: 1,
		values: [ "10", "20", "25", "3" ],
		x: 185.762,
		y: 389.005
	},
};

export { sorcererData };