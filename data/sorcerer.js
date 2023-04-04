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
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1203.599,
		y: 4249.025
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -7.567,
		y: 4869.41
	},
};

sorcererData["Basic"] = {
	"Frost Bolt": {
		connections: [ "Basic", "Enhanced Frost Bolt" ],
		description: `Lucky Hit Chance: {#}%
Throw a bolt of frost at an enemy, dealing {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage and Chilling them for 15%.

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.

— Enchantment Effect —
Direct damage from Skills applies up to {#}% Chill.`,
		id: 0,
		maxPoints: 5,
		values: [ "30" ],
		extraValues: [ "30" ],
		x: -195.614,
		y: -247.035
	},
	"Enhanced Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Frost Bolt", "Flickering Frost Bolt", "Glinting Frost Bolt" ],
		description: `Frost Bolt has a 15% chance to explode on Chilled enemies, hitting surrounding enemies. Chance increased to 100% against Frozen enemies.

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		id: 1,
		maxPoints: 1,
		x: -336.656,
		y: -421.415
	},
	"Flickering Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Enhanced Frost Bolt" ],
		description: `Frost Bolt makes Frozen enemies Vulnerable for 3 seconds.

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		id: 2,
		maxPoints: 1,
		x: -592.019,
		y: -455.675
	},
	"Glinting Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Enhanced Frost Bolt" ],
		description: `Frost Bolt generates 4 Mana when hitting Chilled or Frozen enemies.

Tags: Basic, Frost, Chill, Damage, Cold, Crowd Control.`,
		id: 3,
		maxPoints: 1,
		x: -263.99,
		y: -545.8
	},
	"Spark": {
		connections: [ "Basic", "Enhanced Spark" ],
		description: `Lucky Hit Chance: {#}%
Launch a bolt of lightning that shocks an enemy 4 times, dealing {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% damage each hit.

Tags: Basic, Shock, Damage, Lightning.

— Enchantment Effect —
Killing an enemy has a {#}% chance to form a Crackling Energy.`,
		id: 4,
		maxPoints: 5,
		values: [ "9" ],
		extraValues: [ "10" ],
		x: -489.038,
		y: -81.23
	},
	"Enhanced Spark": {
		baseSkill: "Spark",
		connections: [ "Spark", "Flickering Spark", "Glinting Spark" ],
		description: `Each time Spark hits its primary target, it has a 20% chance to hit up to 3 additional enemies, dealing {5.6/6.2/6.7/7.3/7.8/8.4/9/9.5/10.1/10.6}% damage. If there are no other enemies to hit, Spark instead deals x20% increased damage to its primary target.

Tags: Basic, Shock, Damage, Lightning.`,
		id: 5,
		maxPoints: 1,
		x: -762.794,
		y: -204.92
	},
	"Flickering Spark": {
		baseSkill: "Spark",
		connections: [ "Enhanced Spark" ],
		description: `Each time Spark hits an enemy it has a 3% chance to form a Crackling Energy.

Tags: Basic, Shock, Damage, Lightning.`,
		id: 6,
		maxPoints: 1,
		x: -782.894,
		y: -342.245
	},
	"Glinting Spark": {
		baseSkill: "Spark",
		connections: [ "Enhanced Spark" ],
		description: `Spark grants +2% increased Critical Strike Chance per cast for 3 seconds, up to +10%.

Tags: Basic, Shock, Damage, Lightning.`,
		id: 7,
		maxPoints: 1,
		x: -1028.789,
		y: -207.505
	},
	"Arc Lash": {
		connections: [ "Basic", "Enhanced Arc Lash" ],
		description: `Lucky Hit Chance: {#}%
Unleash arcing lightning that deals {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% damage to enemies in front of you. Every 10 times Arc Lash swipes, it Stuns all enemies hit for 2 seconds.

Tags: Basic, Shock, Damage, Lightning, Crowd Control.

— Enchantment Effect —
When you use a Cooldown, enemies around you are Stunned for {#} seconds.`,
		id: 8,
		maxPoints: 5,
		values: [ "30" ],
		extraValues: [ "0.5" ],
		x: 487.781,
		y: -80.27
	},
	"Enhanced Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Arc Lash", "Glinting Arc Lash", "Flickering Arc Lash" ],
		description: `If Arc Lash's initial swipe Critically Strikes, it swipes an additional time.

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		id: 9,
		maxPoints: 1,
		x: 765.421,
		y: -208.87
	},
	"Glinting Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Enhanced Arc Lash" ],
		description: `Hitting a Stunned enemy with Arc Lash reduces your Cooldowns by 0.25 seconds.

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		id: 10,
		maxPoints: 1,
		x: 1040.126,
		y: -209
	},
	"Flickering Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Enhanced Arc Lash" ],
		description: `Gain +6% Movement Speed for 5 seconds per enemy hit with Arc Lash, up to +18%.

Tags: Basic, Shock, Damage, Lightning, Crowd Control.`,
		id: 11,
		maxPoints: 1,
		x: 759.211,
		y: -351.28
	},
	"Fire Bolt": {
		connections: [ "Basic", "Enhanced Fire Bolt" ],
		description: `Lucky Hit Chance: {#}%
Hurl a flaming bolt, dealing {10/11/12/13/14/15/16/17/18/19}% damage and Burning for {40/44/48/52/56/60/64/68/72/76}% damage over 8 seconds.

Tags: Basic, Pyromancy, Damage, Fire, Burn.

— Enchantment Effect —
Direct damage from Skills applies up to an additional {#} Burning damage over {#} seconds.`,
		id: 12,
		maxPoints: 5,
		values: [ "20" ],
		extraValues: [ "", "" ],
		x: 202.516,
		y: -251.18
	},
	"Enhanced Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Fire Bolt", "Glinting Fire Bolt", "Flickering Fire Bolt" ],
		description: `Fire Bolt pierces through Burning enemies.

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		id: 13,
		maxPoints: 1,
		x: 333.76,
		y: -423.11
	},
	"Glinting Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Enhanced Fire Bolt" ],
		description: `Critical Strikes with Fire Bolt increase the Burning damage you deal to the enemy by x20% for 4 seconds.

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		id: 14,
		maxPoints: 1,
		x: 586.526,
		y: -457.72
	},
	"Flickering Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Enhanced Fire Bolt" ],
		description: `Fire Bolt generates 2 Mana when hitting a Burning enemy.

Tags: Basic, Pyromancy, Damage, Fire, Burn.`,
		id: 15,
		maxPoints: 1,
		x: 249.014,
		y: -546.625
	},
};

sorcererData["Core"] = {
	"Charged Bolts": {
		connections: [ "Core", "Enhanced Charged Bolts" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Release {#} bolts of lightning that course along the ground in an erratic pattern, dealing {17.5/19.2/21/22.7/24.5/26.2/28/29.8/31.5/33.2}% damage each.

Tags: Core, Shock, Damage, Lightning, Mana.

— Enchantment Effect —
When you Stun an enemy, there's a {#}% chance to release 3 Charged Bolts from them.`,
		id: 16,
		maxPoints: 5,
		values: [ "40", "25", "5" ],
		extraValues: [ "40" ],
		x: 133.995,
		y: 322.79
	},
	"Enhanced Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Charged Bolts", "Greater Charged Bolts", "Destructive Charged Bolts" ],
		description: `Hitting an enemy at least 3 times with same cast of Charged Bolts releases a lightning nova, dealing 15% damage to enemies around them.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 17,
		maxPoints: 1,
		x: 198.23,
		y: 523.06
	},
	"Greater Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Enhanced Charged Bolts" ],
		description: `Charged Bolts deals x25% increased damage to Stunned enemies.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 18,
		maxPoints: 1,
		x: 92.625,
		y: 636.325
	},
	"Destructive Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Enhanced Charged Bolts" ],
		description: `Hitting an enemy with Charged Bolts reduces their damage dealt by 20% for 3 seconds.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 19,
		maxPoints: 1,
		x: 384.92,
		y: 599.82
	},
	"Frozen Orb": {
		connections: [ "Core", "Enhanced Frozen Orb" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Unleash an orb that Chills for 34% and expels piercing shards, dealing a total of {31.7/34.9/38/41.2/44.4/47.5/50.7/53.9/57/60.2}% damage. Upon expiration, Frozen Orb explodes, dealing {29.2/32.2/35.1/38/41/43.9/46.8/49.7/52.6/55.6}% damage and Chilling enemies for 8.7%.

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.

— Enchantment Effect —
Whenever you cast a Non-Basic Skill, you have a {#}% chance to launch a Frozen Orb at a Nearby enemy.`,
		id: 20,
		maxPoints: 5,
		values: [ "40", "20" ],
		extraValues: [ "20" ],
		x: -639.26,
		y: -93.76
	},
	"Enhanced Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Destructive Frozen Orb", "Greater Frozen Orb", "Frozen Orb" ],
		description: `When cast above 50 Mana, Frozen Orb's explosion damage is increased by x30%.

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		id: 21,
		maxPoints: 1,
		x: -965.455,
		y: -151.935
	},
	"Destructive Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Enhanced Frozen Orb" ],
		description: `Frozen Orb's explosion restores 5 Mana when hitting a Frozen enemy.

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		id: 22,
		maxPoints: 1,
		x: -1219.085,
		y: -125.825
	},
	"Greater Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Enhanced Frozen Orb" ],
		description: `Frozen Orb's explosion has a 25% chance to make all enemies hit Vulnerable for 2 seconds. Frozen Orb always makes Frozen enemies Vulnerable.

Tags: Core, Frost, Chill, Damage, Cold, Crowd Control, Mana.`,
		id: 23,
		maxPoints: 1,
		x: -1066.555,
		y: -284.32
	},
	"Incinerate": {
		connections: [ "Core", "Enhanced Incinerate" ],
		description: `Mana Cost: {#} per second
Lucky Hit Chance: {#}%
Channel a beam of fire, Burning enemies for {9.1/10/10.925/11.825/12.75/13.65/14.55/15.475/16.375/17.3}% damage per second. Damage per second increases over 4 seconds, up to {49.1/54/59/63.9/68.9/73.7/78.6/83.6/88.4/93.4}%.

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.

— Enchantment Effect —
Every {#} seconds, a serpent spawns and Incinerates enemies for 6 seconds.`,
		id: 24,
		maxPoints: 5,
		values: [ "20", "40" ],
		extraValues: [ "20" ],
		x: 0.845,
		y: -304.65
	},
	"Enhanced Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Incinerate", "Destructive Incinerate", "Greater Incinerate" ],
		description: `While channeling Incinerate, you Burn enemies around you for 15% of the damage per second.

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		id: 25,
		maxPoints: 1,
		x: -0.58,
		y: -500.805
	},
	"Destructive Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Enhanced Incinerate" ],
		description: `Enemies deal 20% less damage while Burning from Incinerate.

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		id: 26,
		maxPoints: 1,
		x: -137.58,
		y: -608.375
	},
	"Greater Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Enhanced Incinerate" ],
		description: `Every 4 seconds an enemy has been hit by Incinerate, they are Immobilized for 1 seconds.

Tags: Core, Pyromancy, Channeled, Damage, Burn, Mana.`,
		id: 27,
		maxPoints: 1,
		x: 144.77,
		y: -607.315
	},
	"Fireball": {
		connections: [ "Core", "Enhanced Fireball" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Hurl an exploding ball of fire, dealing {60/66/72/78/84/90/96/102/108/114}% damage to surrounding enemies.

Tags: Core, Pyromancy, Damage, Fire, Mana.

— Enchantment Effect —
When you kill an enemy, they explode in a Fireball for {#}% of its damage.`,
		id: 28,
		maxPoints: 5,
		values: [ "40", "33" ],
		extraValues: [ "50" ],
		x: -363.79,
		y: -251.52
	},
	"Enhanced Fireball": {
		baseSkill: "Fireball",
		connections: [ "Fireball", "Greater Fireball", "Destructive Fireball" ],
		description: `Fireball's radius is increased based on distance traveled, up to 50%.

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		id: 29,
		maxPoints: 1,
		x: -597.17,
		y: -411.325
	},
	"Greater Fireball": {
		baseSkill: "Fireball",
		connections: [ "Enhanced Fireball" ],
		description: `Fireball deals 10% of the Burning damage you've applied to enemies as additional direct damage.

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		id: 30,
		maxPoints: 1,
		x: -851.105,
		y: -424.01
	},
	"Destructive Fireball": {
		baseSkill: "Fireball",
		connections: [ "Enhanced Fireball" ],
		description: `Fireball's explosion's Critical Strike Damage is increased by +10%. Each enemy it hits increases this bonus by +5%, up to +25% total.

Tags: Core, Pyromancy, Damage, Fire, Mana.`,
		id: 31,
		maxPoints: 1,
		x: -599.05,
		y: -541.025
	},
	"Chain Lightning": {
		connections: [ "Core", "Enhanced Chain Lightning" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Unleash a stream of lightning that deals {42/46.2/50.4/54.6/58.8/63/67.2/71.4/75.6/79.8}% damage and chains between Nearby enemies and you up to 6 times, prioritizing enemies.

Tags: Core, Shock, Damage, Lightning, Mana.

— Enchantment Effect —
Chain Lightning forms automatically after spending {#} Mana.`,
		id: 32,
		maxPoints: 5,
		values: [ "35", "25" ],
		extraValues: [ "100" ],
		x: -205.425,
		y: 323.95
	},
	"Enhanced Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Chain Lightning", "Greater Chain Lightning", "Destructive Chain Lightning" ],
		description: `Chain Lightning gains a +3% increased Critical Strike Chance per bounce.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 33,
		maxPoints: 1,
		x: -357.145,
		y: 505.675
	},
	"Greater Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Enhanced Chain Lightning" ],
		description: `If Chain Lightning bounces off of you, its next hit deals x25% increased damage.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 34,
		maxPoints: 1,
		x: -579.895,
		y: 551.75
	},
	"Destructive Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Enhanced Chain Lightning" ],
		description: `When Chain Lightning Critically Strikes, it has a 25% chance to form a Crackling Energy.

Tags: Core, Shock, Damage, Lightning, Mana.`,
		id: 35,
		maxPoints: 1,
		x: -298.86,
		y: 634.625
	},
	"Ice Shards": {
		connections: [ "Core", "Enhanced Ice Shards" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Launch 5 shards that deal {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage each. Deals x25% increased damage to Frozen enemies.

Tags: Core, Frost, Frozen, Damage, Cold, Mana.

— Enchantment Effect —
Ice Shards automatically conjure and fly towards Frozen enemies.`,
		id: 36,
		maxPoints: 5,
		values: [ "30", "25" ],
		x: -639.885,
		y: 87.015
	},
	"Enhanced Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Ice Shards", "Greater Ice Shards", "Destructive Ice Shards" ],
		description: `Ice Shards have a 15% chance to ricochet to another enemy. Ice Shards always ricochet off of Frozen enemies.

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		id: 37,
		maxPoints: 1,
		x: -971.225,
		y: 141.315
	},
	"Greater Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Enhanced Ice Shards" ],
		description: `While you have a Barrier active, casts of Ice Shards treat enemies as if they were Frozen.

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		id: 38,
		maxPoints: 1,
		x: -1226.59,
		y: 115.585
	},
	"Destructive Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Enhanced Ice Shards" ],
		description: `Hitting an enemy with 5 Ice Shards in a single cast makes them Vulnerable for 2 seconds.

Tags: Core, Frost, Frozen, Damage, Cold, Mana.`,
		id: 39,
		maxPoints: 1,
		x: -1085.695,
		y: 260.63
	},
	"Devastation": {
		connections: [ "Core", "Elemental Dominance" ],
		description: `Your Maximum Mana is increased by {3/6/9/12/15/18/21/24/27/30}.

Tags: Mana.`,
		id: 40,
		maxPoints: 3,
		x: -520.555,
		y: 252.33
	},
	"Elemental Dominance": {
		connections: [ "Devastation" ],
		description: `Your Core Skills deal x{4/8/12/16/20/24/28/32/36/40}% increased damage when cast above 50 Mana.

Tags: Mana, Damage, Core.`,
		id: 41,
		maxPoints: 3,
		x: -856.385,
		y: 406.375
	},
	"Potent Warding": {
		connections: [ "Core" ],
		description: `After casting a Non-Basic Skill, you gain {2/4/6/8/10/12/14/16/18/20}% Resistance to all elements and {1/2/3/4/5/6/7/8/9/10}% additional Resistance to that Skill's element for 3 seconds.

Tags: Resistance, Non-Physical.`,
		id: 42,
		maxPoints: 3,
		x: 622.72,
		y: 2.07
	},
};

sorcererData["Defensive"] = {
	"Flame Shield": {
		connections: [ "Defensive", "Enhanced Flame Shield" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Engulf yourself in flames for {2/2.2/2.4/2.6/2.8/3/3.2/3.4/3.6/3.8} seconds, Burning surrounding enemies for {23.4/25.7/28.1/30.4/32.8/35.1/37.4/39.8/42.1/44.5}% damage per second.

While Flame Shield is active, you are Immune.

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.

— Enchantment Effect —
Flame Shield automatically activates when you take fatal damage. Can only happen once every {#} seconds.`,
		id: 43,
		maxPoints: 5,
		values: [ "20", "50" ],
		extraValues: [ "120" ],
		x: -1.14,
		y: -278.29
	},
	"Enhanced Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Flame Shield", "Mystical Flame Shield", "Shimmering Flame Shield" ],
		description: `Flame Shield grants +25% Movement Speed while active.

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		id: 44,
		maxPoints: 1,
		x: -4.89,
		y: -490.29
	},
	"Mystical Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Enhanced Flame Shield" ],
		description: `You gain 25% Mana Cost Reduction while Flame Shield is active.

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		id: 45,
		maxPoints: 1,
		x: -157.438,
		y: -605.77
	},
	"Shimmering Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Enhanced Flame Shield" ],
		description: `Flame Shield Heals you for 50% of your missing Life.

Tags: Defensive, Pyromancy, Immune, Damage, Burn, Cooldown.`,
		id: 46,
		maxPoints: 1,
		x: 151.31,
		y: -608.105
	},
	"Frost Nova": {
		connections: [ "Defensive", "Enhanced Frost Nova" ],
		description: `Cooldown: {#} seconds
Charges: 2
Charge Cooldown: {#} seconds
Unleash a torrent of frost, Freezing enemies around you for 2 seconds.

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.

— Enchantment Effect —
Lucky Hit: Your Conjuration Skills have a {#}% chance to unleash a Frost Nova when hitting enemies.`,
		id: 47,
		maxPoints: 5,
		values: [ "15", "15" ],
		extraValues: [ "30" ],
		x: 7.87,
		y: 296.675
	},
	"Enhanced Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Frost Nova", "Mystical Frost Nova", "Shimmering Frost Nova" ],
		description: `Killing enemies Frozen by Frost Nova reduces its Cooldown by 2 seconds, up to 6 seconds per cast.

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		id: 48,
		maxPoints: 1,
		x: 9.55,
		y: 507.05
	},
	"Mystical Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Enhanced Frost Nova" ],
		description: `Frost Nova makes enemies Vulnerable for 4 seconds, increased to 8 seconds against Bosses.

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		id: 49,
		maxPoints: 1,
		x: -144.443,
		y: 623.882
	},
	"Shimmering Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Enhanced Frost Nova" ],
		description: `Frost Nova generates 4 Mana per enemy hit.

Tags: Defensive, Frost, Frozen, Crowd Control, Cooldown.`,
		id: 50,
		maxPoints: 1,
		x: 165.83,
		y: 624.487
	},
	"Ice Armor": {
		connections: [ "Defensive", "Enhanced Ice Armor" ],
		description: `Cooldown: {#} seconds
A Barrier of ice forms around you for 6 seconds, absorbing {#}% of your Base Life in damage. While Ice Armor is active, 10% of your damage dealt is added to its Barrier.

Tags: Defensive, Frost, Barrier, Cooldown, Damage.

— Enchantment Effect —
Upon getting hit, you have a {#}% chance to apply Ice Armor.`,
		id: 51,
		maxPoints: 5,
		values: [ "20", "" ],
		extraValues: [ "5" ],
		x: 421.865,
		y: 200.98
	},
	"Enhanced Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Ice Armor", "Shimmering Ice Armor", "Mystical Ice Armor" ],
		description: `While Ice Armor is active, your Mana Regeneration is increased by x25%.

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		id: 52,
		maxPoints: 1,
		x: 707.875,
		y: 325.705
	},
	"Shimmering Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Enhanced Ice Armor" ],
		description: `Enemies that hit you while Ice Armor is active have a 15% chance to become Frozen for 3 seconds.

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		id: 53,
		maxPoints: 1,
		x: 787.605,
		y: 459.825
	},
	"Mystical Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Enhanced Ice Armor" ],
		description: `Damage against Vulnerable enemies contributes 100% more to Ice Armor's Barrier.

Tags: Defensive, Frost, Barrier, Cooldown, Damage.`,
		id: 54,
		maxPoints: 1,
		x: 979.38,
		y: 318.55
	},
	"Teleport": {
		connections: [ "Defensive", "Enhanced Teleport" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Transform into lightning, becoming Unstoppable and surging to the target location, dealing {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage around you upon arrival.

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.

— Enchantment Effect —
Evade is replaced with a short range Teleport on a {#} second Cooldown.`,
		id: 55,
		maxPoints: 5,
		values: [ "11", "40" ],
		extraValues: [ "17.0" ],
		x: 422.375,
		y: -202.015
	},
	"Enhanced Teleport": {
		baseSkill: "Teleport",
		connections: [ "Teleport", "Mystical Teleport", "Shimmering Teleport" ],
		description: `Teleport's Cooldown is decreased by 0.5 seconds per enemy hit, up to 3 seconds.

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		id: 56,
		maxPoints: 1,
		x: 707.335,
		y: -346.205
	},
	"Mystical Teleport": {
		baseSkill: "Teleport",
		connections: [ "Enhanced Teleport" ],
		description: `For 4 seconds after Teleporting, Crackling Energy hits 2 additional enemies.

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		id: 57,
		maxPoints: 1,
		x: 742.975,
		y: -485.9
	},
	"Shimmering Teleport": {
		baseSkill: "Teleport",
		connections: [ "Enhanced Teleport" ],
		description: `After Teleporting, you gain 30% Damage Reduction for 5 seconds.

Tags: Defensive, Shock, Damage, Lightning, Cooldown, Unstoppable.`,
		id: 58,
		maxPoints: 1,
		x: 967.73,
		y: -351.155
	},
	"Elemental Attunement": {
		connections: [ "Defensive" ],
		description: `Lucky Hit: Critical Strikes have a {5/10/15/20/25/30/35/40/45/50}% chance to reset the Cooldown of one of your Defensive Skills. Can only happen once every 10 seconds.

Tags: Defensive, Lucky Hit, Critical Strikes, Cooldown.`,
		id: 59,
		maxPoints: 3,
		x: -615.154,
		y: 1.335
	},
	"Glass Cannon": {
		connections: [ "Defensive" ],
		description: `You deal x{6/12/18/24/30/36/42/48/54/60}% increased damage, but take x{3/6/9/12/15/18/21/24/27/30}% more damage.

Tags: Damage.`,
		id: 60,
		maxPoints: 3,
		x: 630.605,
		y: 0.56
	},
};

sorcererData["Conjuration"] = {
	"Hydra": {
		connections: [ "Conjuration", "Enhanced Hydra" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a 3-headed hydra for {#} seconds. Each head spits fire at enemies, dealing {30/33/36/39/42/45/48/51/54/57}% damage.

Maximum {#} active Hydras at a time.

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.

— Enchantment Effect —
After spending {#} Mana, a 5-headed Hydra spawns for 5 seconds.`,
		id: 61,
		maxPoints: 5,
		values: [ "20", "77", "3", "1" ],
		extraValues: [ "300" ],
		x: 6.92,
		y: -281.666
	},
	"Enhanced Hydra": {
		baseSkill: "Hydra",
		connections: [ "Hydra", "Invoked Hydra", "Summoned Hydra" ],
		description: `While Healthy, your casts of Hydra gain 1 additional head.

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		id: 62,
		maxPoints: 1,
		x: 6.62,
		y: -486.715
	},
	"Invoked Hydra": {
		baseSkill: "Hydra",
		connections: [ "Enhanced Hydra" ],
		description: `After you Critically Strike, your Hydras gain +30% Critical Strike Chance for 3 seconds.

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		id: 63,
		maxPoints: 1,
		x: 158.38,
		y: -596.294
	},
	"Summoned Hydra": {
		baseSkill: "Hydra",
		connections: [ "Enhanced Hydra" ],
		description: `Hydra also Burns enemies for an additional 12% of its Base damage dealt over 6 seconds.

Tags: Conjuration, Pyromancy, Damage, Fire, Mana.`,
		id: 64,
		maxPoints: 1,
		x: -145.46,
		y: -594.569
	},
	"Ice Blades": {
		connections: [ "Conjuration", "Enhanced Ice Blades" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a pair of ice blades for {#} seconds that rapidly slash enemies for {30.7/33.7/36.8/39.9/42.9/46/49.1/52.1/55.2/58.3}% damage and have a 30% chance to make them Vulnerable for 2 seconds.

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.

— Enchantment Effect —
For every {#} seconds in Cooldowns you spend, you spawn an Ice Blades on a random enemy.`,
		id: 65,
		maxPoints: 5,
		values: [ "12", "71", "6.0" ],
		extraValues: [ "20" ],
		x: -533.46,
		y: -0.359
	},
	"Enhanced Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Ice Blades", "Summoned Ice Blades", "Invoked Ice Blades" ],
		description: `Ice Blades's Cooldown is reduced by 1 second each time it hits a Vulnerable enemy.

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		id: 66,
		maxPoints: 1,
		x: -898.675,
		y: -0.442
	},
	"Summoned Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Enhanced Ice Blades" ],
		description: `50% of Enhanced Ice Blades's Cooldown reduction is applied to your other Skills.

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		id: 67,
		maxPoints: 1,
		x: -1089.415,
		y: 85.628
	},
	"Invoked Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Enhanced Ice Blades" ],
		description: `Your Ice Blades gain +10% increased Attack Speed per active Ice Blades.

Tags: Conjuration, Frost, Vulnerable, Damage, Cold, Cooldown.`,
		id: 68,
		maxPoints: 1,
		x: -1080.445,
		y: -89.709
	},
	"Lightning Spear": {
		connections: [ "Conjuration", "Enhanced Lightning Spear" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a spear of lightning that seeks out enemies for {#} seconds, dealing {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% damage per hit.

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.

— Enchantment Effect —
Absorbing Crackling Energy has a {#}% chance to conjure a Lightning Spear.`,
		id: 69,
		maxPoints: 5,
		values: [ "20", "35", "6.0" ],
		extraValues: [ "10" ],
		x: -413.195,
		y: 220.974
	},
	"Enhanced Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Lightning Spear", "Summoned Lightning Spear", "Invoked Lightning Spear" ],
		description: `After Critically Striking, Lightning Spear gains a +5% increased stacking Critical Strike Chance for its duration.

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		id: 70,
		maxPoints: 1,
		x: -685.66,
		y: 367.663
	},
	"Summoned Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Enhanced Lightning Spear" ],
		description: `Collecting Crackling Energy increases the damage of your next Lightning Spear cast by x20%, up to x100%.

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		id: 71,
		maxPoints: 1,
		x: -931.92,
		y: 378.401
	},
	"Invoked Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Enhanced Lightning Spear" ],
		description: `Lightning Spear Stuns enemies for 2 seconds when Critically Striking.

Tags: Conjuration, Shock, Damage, Lightning, Cooldown.`,
		id: 72,
		maxPoints: 1,
		x: -732.94,
		y: 495.95
	},
	"Conjuration Mastery": {
		connections: [ "Conjuration" ],
		description: `You deal x{1/2/3/4/5/6/7/8/9/10}% increased damage for each active Conjuration.

Tags: Lucky Hit, Conjuration.`,
		id: 73,
		maxPoints: 3,
		x: -1.85,
		y: 301.34
	},
	"Precision Magic": {
		connections: [ "Conjuration" ],
		description: `Your Lucky Hit Chance is increased by +{5/10/15/20/25/30/35/40/45/50}%.

Tags: Lucky Hit.`,
		id: 74,
		maxPoints: 3,
		x: -449.215,
		y: -240.001
	},
	"Align the Elements": {
		connections: [ "Mana Shield", "Conjuration", "Protection" ],
		description: `You gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction against Elites for each second you haven't taken damage from one, up to 50%.

Tags: Damage Reduction, Elite Monsters.`,
		id: 75,
		maxPoints: 3,
		x: 532.58,
		y: 0.059
	},
	"Mana Shield": {
		connections: [ "Align the Elements" ],
		description: `Every time you spend 100 Mana, you gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction for 5 seconds.

Tags: Mana, Damage Reduction.`,
		id: 76,
		maxPoints: 3,
		x: 836.363,
		y: -77.321
	},
	"Protection": {
		connections: [ "Align the Elements" ],
		description: `Using a Cooldown grants {10/20/30/40/50/60/70/80/90/100}% of your Maximum Life as a Barrier for 5 seconds.

Tags: Barrier, Cooldown.`,
		id: 77,
		maxPoints: 3,
		x: 834.832,
		y: 80.406
	},
};

sorcererData["Mastery"] = {
	"Meteor": {
		connections: [ "Mastery", "Enhanced Meteor" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a meteor that strikes the target location, dealing {50/55/60/65/70/75/80/85/90/95}% damage and Burning the ground for {35/38.5/42/45.5/49/52.5/56/59.5/63/66.5}% damage over 3 seconds.

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.

— Enchantment Effect —
Lucky Hit: {#}% chance for a Meteor to fall on enemies.`,
		id: 78,
		maxPoints: 5,
		values: [ "40", "40" ],
		extraValues: [ "3" ],
		x: 601.53,
		y: -220.475
	},
	"Enhanced Meteor": {
		baseSkill: "Meteor",
		connections: [ "Meteor", "Mage's Meteor", "Wizard's Meteor" ],
		description: `If a cast of Meteor hits 3 or more enemies, there is a 30% chance an additional Meteor falls on the same location.

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		id: 79,
		maxPoints: 1,
		x: 915.055,
		y: -337.375
	},
	"Mage's Meteor": {
		baseSkill: "Meteor",
		connections: [ "Enhanced Meteor" ],
		description: `Meteor falls 30% faster.

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		id: 80,
		maxPoints: 1,
		x: 1174.005,
		y: -328.576
	},
	"Wizard's Meteor": {
		baseSkill: "Meteor",
		connections: [ "Enhanced Meteor" ],
		description: `Meteor's impact Immobilizes enemies for 2 seconds.

Tags: Mastery, Pyromancy, Damage, Fire, Mana, Burn.`,
		id: 81,
		maxPoints: 1,
		x: 991.17,
		y: -462.803
	},
	"Blizzard": {
		connections: [ "Mastery", "Enhanced Blizzard" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a frigid blizzard that deals {#}% damage and continually Chills enemies for 18% over 8 seconds.

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.

— Enchantment Effect —
Every {#} seconds, a Blizzard forms over you and follows you for 6 seconds.`,
		id: 82,
		maxPoints: 5,
		values: [ "40", "33", "120" ],
		extraValues: [ "15" ],
		x: 300.64,
		y: -339.596
	},
	"Enhanced Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Blizzard", "Mage's Blizzard", "Wizard's Blizzard" ],
		description: `Blizzard deals x25% increased damage to Frozen enemies.

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		id: 83,
		maxPoints: 1,
		x: 447.585,
		y: -525.399
	},
	"Mage's Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Enhanced Blizzard" ],
		description: `When cast above 50 Mana, Blizzard's duration is increased by 4 seconds.

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		id: 84,
		maxPoints: 1,
		x: 402.595,
		y: -654.156
	},
	"Wizard's Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Enhanced Blizzard" ],
		description: `While you have an active Blizzard, your Core Skills cost 10% less Mana.

Tags: Mastery, Frost, Chill, Damage, Cold, Mana, Crowd Control.`,
		id: 85,
		maxPoints: 1,
		x: 675.015,
		y: -585
	},
	"Ball Lightning": {
		connections: [ "Mastery", "Enhanced Ball Lightning" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Discharge a ball of lightning that slowly moves forward, continually zapping enemies for {#}% damage.

Tags: Mastery, Shock, Damage, Lightning, Mana.

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
		description: `Ball Lightning's damage rate is increased by 200% of your Attack Speed Bonus.

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		id: 87,
		maxPoints: 1,
		x: 431.875,
		y: 536.465
	},
	"Wizard's Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Enhanced Ball Lightning" ],
		description: `If an enemy is hit at least 4 times by a cast of Ball Lightning, a Crackling Energy is formed. Can only happen once per cast.

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		id: 88,
		maxPoints: 1,
		x: 399.115,
		y: 661.625
	},
	"Mage's Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Enhanced Ball Lightning" ],
		description: `After hitting Close enemies 50 times with Ball Lightning, your next cast of it Stuns enemies hit for 1 seconds.

Tags: Mastery, Shock, Damage, Lightning, Mana.`,
		id: 89,
		maxPoints: 1,
		x: 656.41,
		y: 586.43
	},
	"Inner Flames": {
		connections: [ "Mastery", "Crippling Flames", "Devouring Blaze" ],
		description: `Your Pyromancy Skills deal x{3/6/9/12/15/18/21/24/27/30}% increased damage while you are Healthy.

Tags: Healthy, Pyromancy, Damage.`,
		id: 90,
		maxPoints: 3,
		x: 594.325,
		y: 0.68
	},
	"Crippling Flames": {
		connections: [ "Inner Flames" ],
		description: `Lucky Hit: Your Pyromancy Skills have a {5/10/15/20/25/30/35/40/45/50}% chance to Immobilize enemies for 2 seconds. This chance is doubled while you are Healthy.

Tags: Healthy, Lucky Hit, Crowd Control, Pyromancy.`,
		id: 132,
		maxPoints: 3,
		x: 884.67,
		y: 83.63
	},
	"Devouring Blaze": {
		connections: [ "Inner Flames" ],
		description: `You deal x{10/20/30/40/50/60/70/80/90/100}% increased Critical Strike Damage against Burning enemies. If they are also Immobilized, this bonus is increased to x{25/50/75/100/125/150/175/200/225/250}%.

Tags: Damage, Burn, Critical Strikes, Crowd Control.`,
		id: 133,
		maxPoints: 3,
		x: 882.995,
		y: -75.715
	},
	"Static Discharge": {
		connections: [ "Invigorating Conduit", "Shocking Impact", "Mastery" ],
		description: `Lucky Hit: Critical Strikes with Shock Skills have up to a {5/10/15/20/25/30/35/40/45/50}% chance to form a Crackling Energy.

Tags: Crackling Energy, Shock, Lucky Hit, Critical Strikes.`,
		id: 94,
		maxPoints: 3,
		x: -133.43,
		y: 371.055
	},
	"Invigorating Conduit": {
		connections: [ "Static Discharge" ],
		description: `Upon absorbing Crackling Energy, you gain {4/8/12/16/20/24/28/32/36/40} Mana.

Tags: Crackling Energy, Mana.`,
		id: 134,
		maxPoints: 3,
		x: 4.47,
		y: 508.795
	},
	"Shocking Impact": {
		connections: [ "Static Discharge" ],
		description: `Every time you Stun an enemy, you deal {15/30/45/60/75/90/105/120/135/150}% Lightning damage to them.

Tags: Shock, Damage, Crowd Control, Lightning.`,
		id: 95,
		maxPoints: 3,
		x: -280.938,
		y: 509
	},
	"Icy Veil": {
		connections: [ "Mastery", "Snap Freeze", "Cold Front" ],
		description: `Your Barriers have a +{5/10/15/20/25/30/35/40/45/50}% increased duration.

Tags: Barrier.`,
		id: 96,
		maxPoints: 3,
		x: -141.488,
		y: -351.513
	},
	"Snap Freeze": {
		connections: [ "Icy Veil" ],
		description: `Lucky Hit: Frost Skills have a {3/6/9/12/15/18/21/24/27/30}% chance to instantly Freeze.

Tags: Frozen, Lucky Hit, Crowd Control, Frost.`,
		id: 135,
		maxPoints: 3,
		x: 2.725,
		y: -507.73
	},
	"Cold Front": {
		connections: [ "Icy Veil" ],
		description: `While you have a Barrier active, you apply x{8/16/24/32/40/48/56/64/72/80}% more Chill.

Tags: Barrier, Chill, Crowd Control.`,
		id: 98,
		maxPoints: 3,
		x: -276.711,
		y: -506.953
	},
	"Firewall": {
		connections: [ "Mastery", "Enhanced Firewall" ],
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Create a wall of flames that Burns enemies for {160/176/192/208/224/240/256/272/288/304}% damage over 8 seconds.

Tags: Mastery, Pyromancy, Damage, Burn, Mana.

— Enchantment Effect —
Each time an enemy takes Burning damage, there's a {#}% chance to spawn 2 Firewalls underneath them for 3 seconds.`,
		id: 99,
		maxPoints: 5,
		values: [ "30", "40" ],
		extraValues: [ "5" ],
		x: 592.435,
		y: 224.3
	},
	"Enhanced Firewall": {
		baseSkill: "Firewall",
		connections: [ "Firewall", "Wizard's Firewall", "Mage's Firewall" ],
		description: `Enemies take x25% increased Burning damage from you while standing in Firewall.

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		id: 100,
		maxPoints: 1,
		x: 905.955,
		y: 347.945
	},
	"Wizard's Firewall": {
		baseSkill: "Firewall",
		connections: [ "Enhanced Firewall" ],
		description: `You gain x5% increased Mana Regeneration per active Firewall, up to x25%.

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		id: 101,
		maxPoints: 1,
		x: 998.24,
		y: 479.99
	},
	"Mage's Firewall": {
		baseSkill: "Firewall",
		connections: [ "Enhanced Firewall" ],
		description: `Enemies continue Burning for 3 seconds after leaving Firewall.

Tags: Mastery, Pyromancy, Damage, Burn, Mana.`,
		id: 102,
		maxPoints: 1,
		x: 1170.415,
		y: 343.18
	},
};

sorcererData["Ultimate"] = {
	"Inferno": {
		connections: [ "Ultimate", "Prime Inferno" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Summon a fiery serpent that continually constricts the target area, Burning enemies for 295% damage over 8 seconds.

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		id: 103,
		maxPoints: 1,
		values: [ "45", "38" ],
		x: -526.72,
		y: -71.235
	},
	"Prime Inferno": {
		baseSkill: "Inferno",
		connections: [ "Inferno", "Supreme Inferno" ],
		description: `Inferno repeatedly Pulls enemies to its center.

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		id: 104,
		maxPoints: 1,
		x: -866.555,
		y: -183.635
	},
	"Supreme Inferno": {
		baseSkill: "Inferno",
		connections: [ "Prime Inferno" ],
		description: `While Inferno is active, your Pyromancy Skills cost no Mana.

Tags: Ultimate, Pyromancy, Damage, Burn, Cooldown.`,
		id: 105,
		maxPoints: 1,
		x: -1163.615,
		y: -183.18
	},
	"Unstable Currents": {
		connections: [ "Prime Unstable Currents", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lightning surges within you for 10 seconds. Whenever you cast a Shock Skill, a random Core, Conjuration, or Mastery Shock Skill is also cast.

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		id: 106,
		maxPoints: 1,
		values: [ "70.0" ],
		x: -347.8,
		y: 279.81
	},
	"Prime Unstable Currents": {
		baseSkill: "Unstable Currents",
		connections: [ "Unstable Currents", "Supreme Unstable Currents" ],
		description: `Unstable Currents increases your Attack Speed by +25% while active.

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		id: 107,
		maxPoints: 1,
		x: -568.77,
		y: 433.255
	},
	"Supreme Unstable Currents": {
		baseSkill: "Unstable Currents",
		connections: [ "Prime Unstable Currents" ],
		description: `While Unstable Currents is active, Crackling Energy continually pulses and consumes no charges.

Tags: Ultimate, Shock, Damage, Lightning, Cooldown.`,
		id: 108,
		maxPoints: 1,
		x: -571.55,
		y: 596.365
	},
	"Deep Freeze": {
		connections: [ "Prime Deep Freeze", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Encase yourself in ice, becoming Immune for 4 seconds, continually dealing 12.5% damage, and Chilling enemies for 20%. When Deep Freeze expires, it deals an additional 100% damage.

Casting Deep Freeze again ends the effect early.

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		id: 109,
		maxPoints: 1,
		values: [ "60", "5" ],
		x: -377.345,
		y: -274.565
	},
	"Prime Deep Freeze": {
		baseSkill: "Deep Freeze",
		connections: [ "Deep Freeze", "Supreme Deep Freeze" ],
		description: `When Deep Freeze ends, gain 10% of your Base Life as a Barrier for 6 seconds for each enemy you Froze while it was active.

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		id: 110,
		maxPoints: 1,
		x: -592.28,
		y: -430.76
	},
	"Supreme Deep Freeze": {
		baseSkill: "Deep Freeze",
		connections: [ "Prime Deep Freeze" ],
		description: `When Deep Freeze ends, your Non-Ultimate Cooldowns are reduced by 50%.

Tags: Ultimate, Frost, Immune, Chill, Damage, Cold, Cooldown, Crowd Control, Damage Reduction.`,
		id: 111,
		maxPoints: 1,
		x: -590.745,
		y: -581.04
	},
	"Permafrost": {
		connections: [ "Hoarfrost", "Ultimate", "Icy Touch" ],
		description: `Frost Skills deal x{5/10/15/20/25/30/35/40/45/50}% increased damage to Elites.

Tags: Elite Monsters, Damage, Frost.`,
		id: 113,
		maxPoints: 3,
		x: -3.97,
		y: -277.33
	},
	"Hoarfrost": {
		connections: [ "Permafrost", "Frigid Breeze" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Chilled enemies, and x{6/12/18/24/30/36/42/48/54/60}% increased damage to Frozen enemies.

Tags: Chill, Frozen, Damage, Crowd Control.`,
		id: 136,
		maxPoints: 3,
		x: -195.39,
		y: -421.43
	},
	"Frigid Breeze": {
		connections: [ "Hoarfrost", "Icy Touch" ],
		description: `Lucky Hit: Cold Damage against Vulnerable enemies has a 20% chance to generate {5/10/15/20/25/30/35/40/45/50} Mana.

Tags: Vulnerable, Cold, Lucky Hit, Mana.`,
		id: 137,
		maxPoints: 3,
		x: -5.22,
		y: -581.655
	},
	"Icy Touch": {
		connections: [ "Permafrost", "Frigid Breeze" ],
		description: `You deal x{4/8/12/16/20/24/28/32/36/40}% increased Cold Damage to Vulnerable enemies.

Tags: Vulnerable, Cold, Damage.`,
		id: 115,
		maxPoints: 3,
		x: 180.41,
		y: -421.81
	},
	"Coursing Currents": {
		connections: [ "Electrocution", "Conduction", "Ultimate" ],
		description: `Hitting enemies with Shock Skills increases your Critical Strike Chance by +{1/2/3/4/5/6/7/8/9/10}%. Resets upon getting a Critical Strike.

Tags: Critical Strikes, Shock.`,
		id: 116,
		maxPoints: 3,
		x: 2.03,
		y: 287.38
	},
	"Electrocution": {
		connections: [ "Coursing Currents", "Convulsions" ],
		description: `Enemies deal {5/10/15/20/25/30/35/40/45/50}% less damage for 5 seconds after being Critically Struck by your Shock Skills.

Tags: Critical Strikes, Damage Reduction, Shock.`,
		id: 117,
		maxPoints: 3,
		x: 201.78,
		y: 435.59
	},
	"Convulsions": {
		connections: [ "Conduction", "Electrocution" ],
		description: `Lucky Hit: Shock Skills have a {3/6/9/12/15/18/21/24/27/30}% chance to Stun enemies for 3 seconds.

Tags: Shock, Lucky Hit, Crowd Control.`,
		id: 118,
		maxPoints: 3,
		x: 3.66,
		y: 604.95
	},
	"Conduction": {
		connections: [ "Coursing Currents", "Convulsions" ],
		description: `Critical Strikes with Shock Skills increase your Movement Speed by +{3/6/9/12/15/18/21/24/27/30}% for 3 seconds.

Tags: Shock, Critical Strikes, Movement.`,
		id: 119,
		maxPoints: 3,
		x: -191.455,
		y: 436.8
	},
	"Fiery Surge": {
		connections: [ "Endless Pyre", "Soulfire", "Ultimate" ],
		description: `Killing a Burning enemy increases your Mana Regeneration by +{10/20/30/40/50/60/70/80/90/100}% for 3 seconds.

Tags: Burn, Mana.`,
		id: 123,
		maxPoints: 3,
		x: -533.615,
		y: 98.915
	},
	"Endless Pyre": {
		connections: [ "Warmth", "Fiery Surge" ],
		description: `You deal increased Burning damage to enemies for each second they remain Burning, up to x{5/10/15/20/25/30/35/40/45/50}% after 5 seconds.

Tags: Burn, Damage.`,
		id: 121,
		maxPoints: 3,
		x: -863.88,
		y: 204.975
	},
	"Warmth": {
		connections: [ "Soulfire", "Endless Pyre" ],
		description: `Every 1 second, you Heal for {0.3/0.6/0.9/1.2/1.5/1.8/2.1/2.4/2.7/3}% of your Maximum Life for each Nearby Burning enemy. Healing increased to {0.6/1.2/1.8/2.4/3/3.6/4.2/4.8/5.4/6}% from Bosses.

Tags: Healing, Burn.`,
		id: 138,
		maxPoints: 3,
		x: -1162.135,
		y: 102.405
	},
	"Soulfire": {
		connections: [ "Warmth", "Fiery Surge" ],
		description: `After standing still for 1.5 seconds, your Pyromancy Skills cost {5/10/15/20/25/30/35/40/45/50}% less Mana.

Tags: Mana, Pyromancy.`,
		id: 139,
		maxPoints: 3,
		x: -868.11,
		y: 2.82
	},
};

sorcererData["Key Passive"] = {
	"Shatter": {
		connections: [ "Key Passive" ],
		description: `After Freeze expires, enemies explode for 25% of the damage you dealt to them while Frozen.

Tags: Frozen, Crowd Control, Damage.`,
		id: 124,
		maxPoints: 1,
		x: -633.197,
		y: 203.26
	},
	"Avalanche": {
		connections: [ "Key Passive" ],
		description: `Lucky Hit: Your Frost Skills have up to a 10% chance to make your next cast of Ice Shards, Frozen Orb, or Blizzard consume no Mana and deal x40% increased damage. Chance is doubled against Vulnerable enemies.

Tags: Vulnerable, Lucky Hit, Mana, Damage, Frost.`,
		id: 140,
		maxPoints: 1,
		x: -636.932,
		y: -2.225
	},
	"Combustion": {
		connections: [ "Key Passive" ],
		description: `Your Burning effects deal x{2/4/6/8/10/12/14/16/18/20}% increased damage per unique source of Burning you have applied to the enemy. If the enemy is Burning from 3 or more sources, this bonus is doubled.

Tags: Burn, Damage.`,
		id: 141,
		maxPoints: 1,
		x: 633.813,
		y: -3.15
	},
	"Esu's Ferocity": {
		connections: [ "Key Passive" ],
		description: `Your Fire Critical Strike Damage is increased by x25% against enemies above 50% Life. Your Fire Critical Strike Chance is increased by +5% against enemies below 50% Life.

Killing an enemy with a Critical Strike grants both bonuses against all enemies for 3 seconds.

Tags: Damage, Critical Strikes, Life, Fire.`,
		id: 127,
		maxPoints: 1,
		x: 637.394,
		y: 202.605
	},
	"Overflowing Energy": {
		connections: [ "Key Passive" ],
		description: `Crackling Energy hits 1 additional enemy. Each time Crackling Energy hits an enemy, your Shock Skill Cooldowns are reduced by 0.1 seconds, increased to 0.25 seconds against Elites.

Tags: Crackling Energy, Cooldown, Elite Monsters, Damage, Shock.`,
		id: 128,
		maxPoints: 1,
		x: -187.52,
		y: 388.355
	},
	"Vyr's Mastery": {
		connections: [ "Key Passive" ],
		description: `Close enemies take x10% increased damage from your Shock Skills and deal 20% less damage to you. Critical Strikes increase these bonuses by 25% for 3 seconds.

Tags: Shock, Damage, Damage Reduction, Critical Strikes.`,
		id: 129,
		maxPoints: 1,
		x: 185.762,
		y: 389.005
	},
};

export { sorcererData };