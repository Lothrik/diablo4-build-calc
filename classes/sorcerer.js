let sorcerer = {};

sorcerer["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	"Core": {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: 0.405,
		y: 1199.005,
	},
	"Defensive": {
		connections: [ "Conjuration" ],
		requiredPoints: 6,
		x: -1248.967,
		y: 2330.66,
	},
	"Conjuration": {
		connections: [ "Mastery" ],
		requiredPoints: 11,
		x: 1248.218,
		y: 2332.78,
	},
	"Mastery": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: -1254.712,
		y: 3747.074,
	},
	"Ultimate": {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 1246.083,
		y: 3744.594,
	},
	"Capstone": {
		requiredPoints: 33,
		x: 209.883,
		y: 4569.17,
	},
};

sorcerer["Basic"] = {
	"Frost Bolt": {
		connections: [ "Basic", "Enhanced Frost Bolt" ],
		damageType: 3,
		description: `Lucky Hit Chance: {#}%
Throw a bolt of frost at an enemy, dealing {#}% damage and Chilling them for {#}%.

— Enchantment Effect —
Lucky Hit: Your direct damage has up to a 100% chance to Chill for 30%.`,
		id: 0,
		maxPoints: 5,
		values: [ "", "35", "15" ],
		x: -314.79,
		y: -169.615
	},
	"Enhanced Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Frost Bolt", "Flickering Frost Bolt", "Glinting Frost Bolt" ],
		description: `Frost Bolt has a {#}% chance to explode on Chilled targets, hitting surrounding enemies. Chance increased to 100% against Frozen targets.`,
		id: 1,
		maxPoints: 1,
		values: [ "15" ],
		x: -553.367,
		y: -301.91
	},
	"Flickering Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Enhanced Frost Bolt" ],
		description: `Frost Bolt makes Frozen enemies Vulnerable for {#} seconds.`,
		id: 2,
		maxPoints: 1,
		values: [ "3" ],
		x: -859.027,
		y: -329.83
	},
	"Glinting Frost Bolt": {
		baseSkill: "Frost Bolt",
		connections: [ "Enhanced Frost Bolt" ],
		description: `Frost Bolt generates {#} Mana when hitting Chilled or Frozen enemies.`,
		id: 3,
		maxPoints: 1,
		values: [ "4" ],
		x: -653.422,
		y: -453.325
	},
	"Spark": {
		connections: [ "Basic", "Enhanced Spark" ],
		damageType: 2,
		description: `Lucky Hit Chance: {#}%
Launch a bolt of lightning that shocks an enemy {#} times, dealing {#}% damage each hit.

— Enchantment Effect —
Killing an enemy has a 10% chance to form a Crackling Energy.`,
		id: 4,
		maxPoints: 5,
		values: [ "", "4", "8" ],
		x: -294.368,
		y: 167.01
	},
	"Enhanced Spark": {
		baseSkill: "Spark",
		connections: [ "Spark", "Flickering Spark", "Glinting Spark" ],
		description: `Each time Spark hits, it has a {#}% chance to hit up to {#} additional enemies, dealing {#}% damage. If there are no other enemies to hit, Spark instead deals {#}% increased damage to its primary target.`,
		id: 5,
		maxPoints: 1,
		values: [ "20", "3", "6", "20" ],
		x: -544.167,
		y: 312.77
	},
	"Flickering Spark": {
		baseSkill: "Spark",
		connections: [ "Enhanced Spark" ],
		description: `Each time Spark hits an enemy it has a {#}% chance to spawn a Crackling Energy.`,
		id: 6,
		maxPoints: 1,
		values: [ "3" ],
		x: -804.317,
		y: 359.95
	},
	"Glinting Spark": {
		baseSkill: "Spark",
		connections: [ "Enhanced Spark" ],
		description: `Spark grants {#}% increased Critical Strike Chance per cast for {#} seconds, up to {#}%.`,
		id: 7,
		maxPoints: 1,
		values: [ "2", "3", "10" ],
		x: -605.717,
		y: 459.955
	},
	"Arc Lash": {
		connections: [ "Basic", "Enhanced Arc Lash" ],
		damageType: 2,
		description: `Lucky Hit Chance: {#}%
Unleash arcing lightning that shocks enemies in front of you for {#}%. Every {#} times Arc Lash swipes, it Stuns all enemies hit for {#} seconds.

— Enchantment Effect —
Whenever you are hit, there is a 20% chance the attacker is Stunned for 1 second.`,
		id: 8,
		maxPoints: 5,
		values: [ "", "42", "10", "2" ],
		x: 309.665,
		y: 169.14
	},
	"Enhanced Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Arc Lash", "Glinting Arc Lash", "Flickering Arc Lash" ],
		description: `If Arc Lash's initial swipe Critically Strikes, it swipes an additional time.`,
		id: 9,
		maxPoints: 1,
		x: 571.208,
		y: 320.835
	},
	"Glinting Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Enhanced Arc Lash" ],
		description: `Hitting a Stunned enemy with Arc Lash reduces your cooldowns by {#} seconds.`,
		id: 10,
		maxPoints: 1,
		values: [ "0.25" ],
		x: 647.288,
		y: 464.815
	},
	"Flickering Arc Lash": {
		baseSkill: "Arc Lash",
		connections: [ "Enhanced Arc Lash" ],
		description: `Gain {#}% Movement Speed for {#} seconds per enemy hit with Arc Lash, up to {#}%.`,
		id: 11,
		maxPoints: 1,
		values: [ "6", "5", "18" ],
		x: 871.328,
		y: 352.725
	},
	"Fire Bolt": {
		connections: [ "Basic", "Enhanced Fire Bolt" ],
		damageType: 1,
		description: `Lucky Hit Chance: {#}%
Hurl a flaming bolt, dealing {#}% damage and Burning for {#}% over {#} seconds.

— Enchantment Effect —
Lucky Hit: Your direct damage has up to a 100% chance to Burn enemies for 23% over 8 seconds.`,
		id: 12,
		maxPoints: 5,
		values: [ "", "10", "40", "8" ],
		x: 309.424,
		y: -168.96
	},
	"Enhanced Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Fire Bolt", "Glinting Fire Bolt", "Flickering Fire Bolt" ],
		description: `Fire Bolt pierces Burning enemies.`,
		id: 13,
		maxPoints: 1,
		x: 547.598,
		y: -314.185
	},
	"Glinting Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Enhanced Fire Bolt" ],
		description: `Critical Strikes with Fire Bolt increase the Burning damage the target takes by x{#}% for {#} seconds.`,
		id: 14,
		maxPoints: 1,
		values: [ "20", "4" ],
		x: 820.993,
		y: -349.635
	},
	"Flickering Fire Bolt": {
		baseSkill: "Fire Bolt",
		connections: [ "Enhanced Fire Bolt" ],
		description: `Fire Bolt generates {#} Mana when hitting a Burning enemy.`,
		id: 15,
		maxPoints: 1,
		values: [ "2" ],
		x: 638.958,
		y: -457.985
	},
};

sorcerer["Core"] = {
	"Charged Bolts": {
		connections: [ "Core", "Enhanced Charged Bolts" ],
		damageType: 2,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Release {#} bolts of lightning that course along the ground in an erratic pattern, dealing {#}% each.

— Enchantment Effect —
Whenever you are hit, there is a 40% chance to release 5 Charged Bolts.`,
		id: 16,
		maxPoints: 5,
		values: [ "40", "", "5", "15" ],
		x: 356.997,
		y: 194.845
	},
	"Enhanced Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Charged Bolts", "Greater Charged Bolts", "Destructive Charged Bolts" ],
		description: `Charged Bolts gains an extra projectile.`,
		id: 17,
		maxPoints: 1,
		x: 596.883,
		y: 327.095
	},
	"Greater Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Enhanced Charged Bolts" ],
		description: `Charged Bolts deals x{#}% increased damage to Stunned enemies.`,
		id: 18,
		maxPoints: 1,
		values: [ "25" ],
		x: 671.203,
		y: 470.3
	},
	"Destructive Charged Bolts": {
		baseSkill: "Charged Bolts",
		connections: [ "Enhanced Charged Bolts" ],
		description: `Hitting an enemy at least {#} times with Charged Bolts in a single cast reduces their damage dealt by {#}% for {#} seconds.`,
		id: 19,
		maxPoints: 1,
		values: [ "5", "20", "3" ],
		x: 866.973,
		y: 354.415
	},
	"Frozen Orb": {
		connections: [ "Core", "Enhanced Frozen Orb" ],
		damageType: 3,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Unleash an orb that Chills for {#}% and expels piercing shards dealing a total of {#}% damage. Upon expiration, Frozen Orb explodes, dealing {#}% damage and Chilling enemies for {#}%.

— Enchantment Effect —
Whenever you cast a non-Basic Skill, you have a 20% chance to launch a Frozen Orb at a Nearby enemy.`,
		id: 20,
		maxPoints: 5,
		values: [ "40", "", "34", "32", "29", "9" ],
		x: -276.076,
		y: -213.185
	},
	"Enhanced Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Destructive Frozen Orb", "Greater Frozen Orb", "Frozen Orb" ],
		description: `When cast above {#} Mana, Frozen Orb's explosion damage is increased by x{#}%.`,
		id: 21,
		maxPoints: 1,
		values: [ "50", "30" ],
		x: -451.149,
		y: -344.71
	},
	"Destructive Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Enhanced Frozen Orb" ],
		description: `Frozen Orb's explosion restores {#} Mana when hitting a Frozen enemy.`,
		id: 22,
		maxPoints: 1,
		values: [ "5" ],
		x: -706.237,
		y: -409.725
	},
	"Greater Frozen Orb": {
		baseSkill: "Frozen Orb",
		connections: [ "Enhanced Frozen Orb" ],
		description: `Frozen Orb's explosion has a {#}% chance to make all enemies hit Vulnerable for {#} seconds.`,
		id: 23,
		maxPoints: 1,
		values: [ "25", "2" ],
		x: -492.592,
		y: -496.78
	},
	"Incinerate": {
		connections: [ "Core", "Enhanced Incinerate" ],
		damageType: 1,
		description: `Mana Cost: {#} per second
Lucky Hit Chance: {#}%
Channel a beam of fire, Burning enemies for {#}%. Damage increases by {#}% per second, up to {#}%.

— Enchantment Effect —
Lucky Hit: Direct damage has up to a 8% chance to spawn a rotating Incinerate beam.`,
		id: 24,
		maxPoints: 5,
		values: [ "20", "", "36", "18", "71" ],
		x: 465.318,
		y: -36.915
	},
	"Enhanced Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Incinerate", "Destructive Incinerate", "Greater Incinerate" ],
		description: `While Channeling Incinerate, you take {#}% less damage from Close enemies.`,
		id: 25,
		maxPoints: 1,
		values: [ "30" ],
		x: 757.168,
		y: -63.055
	},
	"Destructive Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Enhanced Incinerate" ],
		description: `While Channeling Incinerate, you burn enemies around you for {#}% of the damage per second.`,
		id: 26,
		maxPoints: 1,
		values: [ "15" ],
		x: 967.483,
		y: -164.345
	},
	"Greater Incinerate": {
		baseSkill: "Incinerate",
		connections: [ "Enhanced Incinerate" ],
		description: `Incinerate now starts at full power, but its Channeling cost is increased by {#}%.`,
		id: 27,
		maxPoints: 1,
		values: [ "80" ],
		x: 1011.948,
		y: -21.03
	},
	"Fireball": {
		connections: [ "Core", "Enhanced Fireball" ],
		damageType: 1,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Hurl an exploding ball of fire, dealing {#}% damage to surrounding enemies.

— Enchantment Effect —
When you kill an enemy, they explode in a Fireball for 50% of its damage.`,
		id: 28,
		maxPoints: 5,
		values: [ "50", "", "60" ],
		x: 227.451,
		y: -214.915
	},
	"Enhanced Fireball": {
		baseSkill: "Fireball",
		connections: [ "Fireball", "Greater Fireball", "Destructive Fireball" ],
		description: `Fireball costs {#} less Mana.`,
		id: 29,
		maxPoints: 1,
		values: [ "10" ],
		x: 403.019,
		y: -351.865
	},
	"Greater Fireball": {
		baseSkill: "Fireball",
		connections: [ "Enhanced Fireball" ],
		description: `When you cast Fireball while Healthy, it has a {#}% increased radius and deals x{#}% increased Critical Strike Damage.`,
		id: 30,
		maxPoints: 1,
		values: [ "50", "20" ],
		x: 408.298,
		y: -496.54
	},
	"Destructive Fireball": {
		baseSkill: "Fireball",
		connections: [ "Enhanced Fireball" ],
		description: `Fireball deals x{#}% increased damage to the first enemy hit by its explosion.`,
		id: 31,
		maxPoints: 1,
		values: [ "20" ],
		x: 652.668,
		y: -422.025
	},
	"Chain Lightning": {
		connections: [ "Core", "Enhanced Chain Lightning" ],
		damageType: 2,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Unleash a stream of lightning that deals {#}% damage and chains between Nearby enemies and you up to {#} times, prioritizing enemies.

— Enchantment Effect —
Chain Lightning forms automatically after spending 100 Mana.`,
		id: 32,
		maxPoints: 5,
		values: [ "35", "", "42", "4" ],
		x: 6.471,
		y: 258.33
	},
	"Enhanced Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Chain Lightning", "Greater Chain Lightning", "Destructive Chain Lightning" ],
		description: `Chain Lightning bounces to {#} additional enemy.`,
		id: 33,
		maxPoints: 1,
		values: [ "1" ],
		x: 12.326,
		y: 443.24
	},
	"Greater Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Enhanced Chain Lightning" ],
		description: `Chain Lightning deals x{#}% increased damage per enemy hit.`,
		id: 34,
		maxPoints: 1,
		values: [ "5" ],
		x: -165.373,
		y: 558.965
	},
	"Destructive Chain Lightning": {
		baseSkill: "Chain Lightning",
		connections: [ "Enhanced Chain Lightning" ],
		description: `When Chain Lightning Critically Strikes, it has a {#}% chance to spawn a Crackling Energy.`,
		id: 35,
		maxPoints: 1,
		values: [ "25" ],
		x: 189.963,
		y: 571.73
	},
	"Ice Shards": {
		connections: [ "Core", "Enhanced Ice Shards" ],
		damageType: 3,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Launch {#} shards that deal {#}% damage each. Deals x{#}% increased damage to Frozen enemies.

— Enchantment Effect —
Ice Shards automatically conjure and fly towards Frozen enemies.`,
		id: 36,
		maxPoints: 5,
		values: [ "30", "", "5", "25", "25" ],
		x: -408.65,
		y: -11.405
	},
	"Enhanced Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Ice Shards", "Greater Ice Shards", "Destructive Ice Shards" ],
		description: `Ice Shards have a {#}% chance to ricochet to another enemy.`,
		id: 37,
		maxPoints: 1,
		values: [ "15" ],
		x: -703.372,
		y: -24.405
	},
	"Greater Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Enhanced Ice Shards" ],
		description: `While you have a Barrier active, Ice Shards treats enemies as if they were Frozen.`,
		id: 38,
		maxPoints: 1,
		x: -945.282,
		y: -88.375
	},
	"Destructive Ice Shards": {
		baseSkill: "Ice Shards",
		connections: [ "Enhanced Ice Shards" ],
		description: `Hitting an enemy with {#} Ice Shards in a single cast makes them Vulnerable for {#} seconds.`,
		id: 39,
		maxPoints: 1,
		values: [ "5", "2" ],
		x: -953.972,
		y: 29.11
	},
	"Devastation": {
		connections: [ "Core", "Elemental Dominance" ],
		description: `Deal x{#}% increased damage to Healthy enemies.`,
		id: 40,
		maxPoints: 3,
		values: [ "{8/15/23}" ],
		x: -507.657,
		y: 206.855
	},
	"Elemental Dominance": {
		connections: [ "Devastation" ],
		description: `Your damage increases over time, up to a maximum of {#}% after {#} seconds. Casting a Skill resets this effect.`,
		id: 41,
		maxPoints: 3,
		values: [ "{8/16/24}", "3" ],
		x: -802.882,
		y: 328.45
	},
	"Potent Warding": {
		connections: [ "Core" ],
		description: `Your non-Physical Damage and Resistances are increased by {#}%.`,
		id: 42,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: 745.643,
		y: 149.76
	},
};

sorcerer["Defensive"] = {
	"Flame Shield": {
		connections: [ "Defensive", "Enhanced Flame Shield" ],
		damageType: 1,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Engulf yourself in flames for {#} seconds, Burning surrounding enemies for {#}% per second.

While Flame Shield is active, you are Immune.

— Enchantment Effect —
Flame Shield automatically activates when you take fatal damage. It takes 120 seconds to recharge.`,
		id: 43,
		maxPoints: 5,
		values: [ "19.6", "", "2", "7" ],
		x: -37.995,
		y: -228.055
	},
	"Enhanced Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Flame Shield", "Mystical Flame Shield", "Shimmering Flame Shield" ],
		description: `Flame Shield grants {#}% Movement Speed while active.`,
		id: 44,
		maxPoints: 1,
		values: [ "25" ],
		x: -78.675,
		y: -402.1
	},
	"Mystical Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Enhanced Flame Shield" ],
		description: `Enemies continue Burning for {#} additional seconds after being hit by Flame Shield.`,
		id: 45,
		maxPoints: 1,
		values: [ "3" ],
		x: -218.94,
		y: -516.065
	},
	"Shimmering Flame Shield": {
		baseSkill: "Flame Shield",
		connections: [ "Enhanced Flame Shield" ],
		description: `Flame Shield makes enemies Vulnerable for {#} seconds.`,
		id: 46,
		maxPoints: 1,
		values: [ "4" ],
		x: 26.33,
		y: -521.79
	},
	"Frost Nova": {
		connections: [ "Defensive", "Enhanced Frost Nova" ],
		description: `Cooldown: {#} seconds
Charges: {#}
Charge Cooldown: {#} seconds
Unleash a torrent of frost, Freezing enemies around you for {#} seconds.

— Enchantment Effect —
Lucky Hit: Critical Strikes have up to a 30% chance to make your active Conjuration Skills unleash a Frost Nova.`,
		id: 47,
		maxPoints: 5,
		values: [ "14.7", "", "", "2" ],
		x: -429.64,
		y: 2.21
	},
	"Enhanced Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Frost Nova", "Mystical Frost Nova", "Shimmering Frost Nova" ],
		description: `Frost Nova's radius is increased by {#}%.`,
		id: 48,
		maxPoints: 1,
		values: [ "25" ],
		x: -732.36,
		y: 0.7
	},
	"Mystical Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Enhanced Frost Nova" ],
		description: `Frost Nova's Freeze duration is increased by {#}% when hitting {#} or more enemies.`,
		id: 49,
		maxPoints: 1,
		values: [ "20", "3" ],
		x: -961.06,
		y: -59.035
	},
	"Shimmering Frost Nova": {
		baseSkill: "Frost Nova",
		connections: [ "Enhanced Frost Nova" ],
		description: `Frost Nova generates {#} Mana per enemy hit.`,
		id: 50,
		maxPoints: 1,
		values: [ "4" ],
		x: -958.045,
		y: 72.445
	},
	"Ice Armor": {
		connections: [ "Defensive", "Enhanced Ice Armor" ],
		description: `Cooldown: {#} seconds
A Barrier of ice forms around you for {#} seconds, absorbing {#}% of your Base Life ({#}) in damage. While Ice Armor is active, {#}% of your Cold Damage dealt is added to its Barrier.

— Enchantment Effect —
Upon getting hit, you have a 5% chance to apply Ice Armor.`,
		id: 51,
		maxPoints: 5,
		values: [ "19.6", "6", "30", "", "10" ],
		x: -253.36,
		y: 202.875
	},
	"Enhanced Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Ice Armor", "Shimmering Ice Armor", "Mystical Ice Armor" ],
		description: `While Ice Armor is active, your Mana Regeneration is increased by {#}%.`,
		id: 52,
		maxPoints: 1,
		values: [ "25" ],
		x: -426.975,
		y: 358.17
	},
	"Shimmering Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Enhanced Ice Armor" ],
		description: `Enemies that hit you while Ice Armor is active have a {#}% chance to be Frozen for {#} seconds.`,
		id: 53,
		maxPoints: 1,
		values: [ "15", "3" ],
		x: -661.015,
		y: 414.34
	},
	"Mystical Ice Armor": {
		baseSkill: "Ice Armor",
		connections: [ "Enhanced Ice Armor" ],
		description: `While Ice Armor’s Barrier is at or above its original amount, you deal x{#}% increased damage.`,
		id: 54,
		maxPoints: 1,
		values: [ "30" ],
		x: -444.135,
		y: 493.195
	},
	"Teleport": {
		connections: [ "Defensive", "Enhanced Teleport" ],
		damageType: 2,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Transform into lightning, becoming Unstoppable and surging to the target location dealing {#}% damage around you upon arrival.

— Enchantment Effect —
Evade is replaced with Teleport on a 17.0 second cooldown.`,
		id: 55,
		maxPoints: 5,
		values: [ "10.8", "", "25" ],
		x: 375.285,
		y: 141.665
	},
	"Enhanced Teleport": {
		baseSkill: "Teleport",
		connections: [ "Teleport", "Mystical Teleport", "Shimmering Teleport" ],
		description: `After Teleporting, take {#}% less damage for {#} seconds.`,
		id: 56,
		maxPoints: 1,
		values: [ "30", "5" ],
		x: 662.025,
		y: 258.09
	},
	"Mystical Teleport": {
		baseSkill: "Teleport",
		connections: [ "Enhanced Teleport" ],
		description: `For {#} seconds after Teleporting, Crackling Energy deals x{#}% more damage.`,
		id: 57,
		maxPoints: 1,
		values: [ "4", "40" ],
		x: 933.15,
		y: 263.49
	},
	"Shimmering Teleport": {
		baseSkill: "Teleport",
		connections: [ "Enhanced Teleport" ],
		description: `Teleport’s cooldown is decreased by {#} seconds per enemy hit, up to {#} seconds.`,
		id: 58,
		maxPoints: 1,
		values: [ "0.5", "3" ],
		x: 805.699,
		y: 378.73
	},
	"Elemental Attunement": {
		connections: [ "Defensive" ],
		description: `Elemental Critical Strikes reduce the cooldown of your Defensive Skills by {#}%. This effect cannot occur more than once every {#} seconds.`,
		id: 59,
		maxPoints: 3,
		values: [ "{3/6/9}", "10" ],
		x: -543.765,
		y: -268.415
	},
	"Glass Cannon": {
		connections: [ "Defensive" ],
		description: `You deal x{#}% increased damage, but take {#}% more damage.`,
		id: 60,
		maxPoints: 3,
		values: [ "{6/12/18}", "{3/6/9}" ],
		x: 148.49,
		y: 365.61
	},
};

sorcerer["Conjuration"] = {
	"Hydra": {
		connections: [ "Conjuration", "Enhanced Hydra" ],
		damageType: 1,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a {#} headed hydra for {#} seconds. Each head spits fire at a Nearby enemy, dealing {#}% damage.

— Enchantment Effect —
When a Burning enemy is killed, a Hydra head spawns from its corpse for 3 seconds.`,
		id: 61,
		maxPoints: 5,
		values: [ "20", "", "3", "8.0", "30" ],
		x: 376.215,
		y: -182.8
	},
	"Enhanced Hydra": {
		baseSkill: "Hydra",
		connections: [ "Hydra", "Invoked Hydra", "Summoned Hydra" ],
		description: `Hydras last for an additional {#} seconds.`,
		id: 62,
		maxPoints: 1,
		values: [ "4" ],
		x: 619.795,
		y: -308.1
	},
	"Invoked Hydra": {
		baseSkill: "Hydra",
		connections: [ "Enhanced Hydra" ],
		description: `After you Critically Strike, Hydras gain {#}% Attack Speed for {#} seconds.`,
		id: 63,
		maxPoints: 1,
		values: [ "15", "3" ],
		x: 896.09,
		y: -347.11
	},
	"Summoned Hydra": {
		baseSkill: "Hydra",
		connections: [ "Enhanced Hydra" ],
		description: `Hydra also Burns enemies for an additional {#}% of its base damage dealt over {#} seconds.`,
		id: 64,
		maxPoints: 1,
		values: [ "12", "6" ],
		x: 698.625,
		y: -447.785
	},
	"Ice Blades": {
		connections: [ "Conjuration", "Enhanced Ice Blades" ],
		damageType: 3,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure ice blades for {#} seconds that rapidly slashes enemies for {#}% damage and has a {#}% chance to make them Vulnerable for {#} seconds.

— Enchantment Effect —
Killing an enemy has a 10% chance to conjure Ice Blades.`,
		id: 65,
		maxPoints: 5,
		values: [ "11.8", "", "6.0", "31", "20", "2" ],
		x: -392.77,
		y: -171.33
	},
	"Enhanced Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Ice Blades", "Summoned Ice Blades", "Invoked Ice Blades" ],
		description: `Ice Blades has a {#}% increased chance to make enemies Vulnerable.`,
		id: 66,
		maxPoints: 1,
		values: [ "10" ],
		x: -649.14,
		y: -287.95
	},
	"Summoned Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Enhanced Ice Blades" ],
		description: `Every time Ice Blades hits a Vulnerable enemy, it gains {#}% Attack Speed, up to {#}%.`,
		id: 67,
		maxPoints: 1,
		values: [ "25", "100" ],
		x: -899.299,
		y: -333.805
	},
	"Invoked Ice Blades": {
		baseSkill: "Ice Blades",
		connections: [ "Enhanced Ice Blades" ],
		description: `Killing a Vulnerable enemy increases your active Ice Blades' duration by {#} second.`,
		id: 68,
		maxPoints: 1,
		values: [ "1" ],
		x: -719.095,
		y: -424.735
	},
	"Lightning Spear": {
		connections: [ "Conjuration", "Enhanced Lightning Spear" ],
		damageType: 2,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a crackling spear of lightning that seeks out enemies for {#} seconds, dealing {#}% damage per hit.

— Enchantment Effect —
Absorbing Crackling Energy has a 10% chance to conjure a Lightning Spear.`,
		id: 69,
		maxPoints: 5,
		values: [ "19.6", "", "6.0", "15" ],
		x: 3.935,
		y: 249.83
	},
	"Enhanced Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Lightning Spear", "Summoned Lightning Spear", "Invoked Lightning Spear" ],
		description: `Lightning Spear has a {#}% increased chance to critically strike against Stunned enemies.`,
		id: 70,
		maxPoints: 1,
		values: [ "10" ],
		x: 5.03,
		y: 439.99
	},
	"Summoned Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Enhanced Lightning Spear" ],
		description: `Collecting Crackling Energy reduces the cooldown of Lightning Spear by {#} seconds.`,
		id: 71,
		maxPoints: 1,
		values: [ "0.5" ],
		x: -127.075,
		y: 583.565
	},
	"Invoked Lightning Spear": {
		baseSkill: "Lightning Spear",
		connections: [ "Enhanced Lightning Spear" ],
		description: `After critically striking, Lightning Spear has a {#}% increased stacking critical strike chance for its duration.`,
		id: 72,
		maxPoints: 1,
		values: [ "5" ],
		x: 157.525,
		y: 584.88
	},
	"Conjuration Mastery": {
		connections: [ "Conjuration" ],
		description: `While you have an active Conjuration Skill, you deal x{#}% increased damage.`,
		id: 73,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: 459.155,
		y: 235.405
	},
	"Precision Magic": {
		connections: [ "Conjuration" ],
		description: `Your Lucky Hit Chance is increased by up to {#}%.`,
		id: 74,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 4.345,
		y: -340.545
	},
	"Align the Elements": {
		connections: [ "Mana Shield", "Conjuration", "Protection" ],
		description: `You gain {#}% Damage Reduction against Elites for each second you don't take damage from any of these sources, up to {#}%.`,
		id: 75,
		maxPoints: 3,
		values: [ "{5/10/15}", "50" ],
		x: 691.315,
		y: 0.835
	},
	"Mana Shield": {
		connections: [ "Align the Elements" ],
		description: `Every time you spend {#} Mana, you gain {#}% Damage Reduction for {#} seconds.`,
		id: 76,
		maxPoints: 3,
		values: [ "100", "{5/10/15}", "5" ],
		x: 998.925,
		y: -101.03
	},
	"Protection": {
		connections: [ "Align the Elements" ],
		description: `Using a cooldown grants {#}% of your Maximum Life ({#}) as a Barrier for {#} seconds.`,
		id: 77,
		maxPoints: 3,
		values: [ "{10/20/30}", "", "5" ],
		x: 1006.32,
		y: 99.545
	},
};

sorcerer["Mastery"] = {
	"Meteor": {
		connections: [ "Mastery", "Enhanced Meteor" ],
		damageType: 1,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a meteor that strikes the target location, dealing {#}% damage and Burning the ground for {#}% damage over {#} seconds.

— Enchantment Effect —
Every time an enemy takes Burning damage, there's a 3% chance a Meteor falls on them.`,
		id: 78,
		maxPoints: 5,
		values: [ "40", "", "50", "35", "3" ],
		x: 380.18,
		y: 119.219
	},
	"Enhanced Meteor": {
		baseSkill: "Meteor",
		connections: [ "Meteor", "Mage's Meteor", "Wizard's Meteor" ],
		description: `If Meteor hits {#} or more enemies, there is a {#}% chance an additional Meteor falls on the same location.`,
		id: 79,
		maxPoints: 1,
		values: [ "3", "30" ],
		x: 661.115,
		y: 205.714
	},
	"Mage's Meteor": {
		baseSkill: "Meteor",
		connections: [ "Enhanced Meteor" ],
		description: `Meteor falls {#}% faster and costs {#} less Mana.`,
		id: 80,
		maxPoints: 1,
		values: [ "30", "6" ],
		x: 781.195,
		y: 314.158
	},
	"Wizard's Meteor": {
		baseSkill: "Meteor",
		connections: [ "Enhanced Meteor" ],
		description: `Meteor’s impact Immobilizes enemies for {#} seconds.`,
		id: 81,
		maxPoints: 1,
		values: [ "2" ],
		x: 913.144,
		y: 212.959
	},
	"Blizzard": {
		connections: [ "Mastery", "Enhanced Blizzard" ],
		damageType: 3,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Summon a frigid blizzard that deals {#}% damage and continuously Chills enemies for {#}% over {#} seconds.

— Enchantment Effect —
Every 15 seconds, a Blizzard forms over you and follows you for 4 seconds.`,
		id: 82,
		maxPoints: 5,
		values: [ "40", "", "120", "18", "6" ],
		x: -3.215,
		y: -218.79
	},
	"Enhanced Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Blizzard", "Mage's Blizzard", "Wizard's Blizzard" ],
		description: `Blizzard’s duration is increased by {#} seconds.`,
		id: 83,
		maxPoints: 1,
		values: [ "2" ],
		x: -1.79,
		y: -379.785
	},
	"Mage's Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Enhanced Blizzard" ],
		description: `Every second an enemy is in Blizzard, they take x{#}% increased damage from you, up to x{#}%.`,
		id: 84,
		maxPoints: 1,
		values: [ "2.5", "20" ],
		x: -133.77,
		y: -498.589
	},
	"Wizard's Blizzard": {
		baseSkill: "Blizzard",
		connections: [ "Enhanced Blizzard" ],
		description: `While you have an active Blizzard, your Core Skills cost {#}% less Mana.`,
		id: 85,
		maxPoints: 1,
		values: [ "10" ],
		x: 131.4,
		y: -504.274
	},
	"Ball Lightning": {
		connections: [ "Mastery", "Enhanced Ball Lightning" ],
		damageType: 2,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Conjure a ball of lightning that slowly moves forward, continually zapping enemies for {#}% damage

— Enchantment Effect —
When Crackling Energy would form, there's a 10% chance Ball Lightning is formed instead.`,
		id: 86,
		maxPoints: 5,
		values: [ "50", "", "15" ],
		x: -399.365,
		y: 2.04
	},
	"Enhanced Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Ball Lightning", "Wizard's Ball Lightning", "Mage's Ball Lightning" ],
		description: `Ball Lightning deals damage {#}% more frequently.`,
		id: 87,
		maxPoints: 1,
		values: [ "30" ],
		x: -735.725,
		y: 0.485
	},
	"Wizard's Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Enhanced Ball Lightning" ],
		description: `If an enemy is hit at least {#} times by a cast of Ball Lightning, a Crackling Energy is formed.`,
		id: 88,
		maxPoints: 1,
		values: [ "4" ],
		x: -945.255,
		y: -58.66
	},
	"Mage's Ball Lightning": {
		baseSkill: "Ball Lightning",
		connections: [ "Enhanced Ball Lightning" ],
		description: `Each time Ball Lightning hits an enemy, it deals x{#}% increased damage, up to x{#}%.`,
		id: 89,
		maxPoints: 1,
		values: [ "2", "30" ],
		x: -940.325,
		y: 63.214
	},
	"Inner Flames": {
		connections: [ "Mastery", "Soulfire", "Devouring Flames" ],
		description: `Your Pyromancy Skills deal x{#}% increased damage after you haven't taken damage for {#} seconds.`,
		id: 90,
		maxPoints: 3,
		values: [ "{8/16/24}", "3" ],
		x: 255.625,
		y: 316.583
	},
	"Soulfire": {
		connections: [ "Inner Flames" ],
		description: `Fireball and Meteor have an {#}% increased chance to Critically Strike per enemy hit.`,
		id: 91,
		maxPoints: 3,
		values: [ "{1.5/3/4.5}" ],
		x: 277.195,
		y: 524.501
	},
	"Devouring Flames": {
		connections: [ "Inner Flames" ],
		description: `Your Pyromancy Skills deal x{#}% increased direct damage for each source of Burning on an enemy, up to x{#}%.`,
		id: 92,
		maxPoints: 3,
		values: [ "{1/2/3}", "{4/16/36}" ],
		x: 532.345,
		y: 474.579
	},
	"Regenerative Conduit": {
		connections: [ "Static Discharge", "Shocking Impact", "Mastery" ],
		description: `Crackling Energy restores {#} Mana upon pickup.`,
		id: 93,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -546.19,
		y: 219.629
	},
	"Static Discharge": {
		connections: [ "Regenerative Conduit" ],
		description: `Lucky Hit: Critical Strikes with Shock Skills have a {#}% chance to form a Crackling Energy.`,
		id: 94,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -747.6,
		y: 402.772
	},
	"Shocking Impact": {
		connections: [ "Regenerative Conduit" ],
		damageType: 0,
		description: `Every time you Stun an enemy you deal {#}% Lightning Damage to them.`,
		id: 95,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: -937.78,
		y: 288.748
	},
	"Icy Veil": {
		connections: [ "Mastery", "Hoarfrost", "Cold Front" ],
		description: `Your Barriers have a {#}% increased duration.`,
		id: 96,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -512.78,
		y: -241.534
	},
	"Hoarfrost": {
		connections: [ "Icy Veil" ],
		description: `You deal more damage to enemies the more Chilled they are, up to x{#}% while they are Frozen.`,
		id: 97,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: -674.6,
		y: -423.901
	},
	"Cold Front": {
		connections: [ "Icy Veil" ],
		description: `While you have a Barrier active, you apply {#}% more Chill.`,
		id: 98,
		maxPoints: 3,
		values: [ "{8/16/24}" ],
		x: -857.805,
		y: -313.911
	},
	"Firewall": {
		connections: [ "Mastery", "Enhanced Firewall" ],
		damageType: 1,
		description: `Mana Cost: {#}
Lucky Hit Chance: {#}%
Create a wall of flames that Burns enemies for {#}% damage over {#} seconds.

— Enchantment Effect —
Lucky Hit: Direct damage has up to a 15% chance to spawn a Firewall for 3 seconds.`,
		id: 99,
		maxPoints: 5,
		values: [ "30", "", "160", "8" ],
		x: -104.505,
		y: 231.796
	},
	"Enhanced Firewall": {
		baseSkill: "Firewall",
		connections: [ "Firewall", "Wizard's Firewall", "Mage's Firewall" ],
		description: `Enemies that stand in Firewall for at least {#} seconds take x{#}% increased Burning damage from all sources.`,
		id: 100,
		maxPoints: 1,
		values: [ "2", "25" ],
		x: -191.11,
		y: 388.572
	},
	"Wizard's Firewall": {
		baseSkill: "Firewall",
		connections: [ "Enhanced Firewall" ],
		description: `You deal x{#}% increased damage per active Firewall.`,
		id: 101,
		maxPoints: 1,
		values: [ "5" ],
		x: -371.865,
		y: 493.621
	},
	"Mage's Firewall": {
		baseSkill: "Firewall",
		connections: [ "Enhanced Firewall" ],
		description: `Each enemy standing in Firewall increases your Mana Regeneration by {#}%.`,
		id: 102,
		maxPoints: 1,
		values: [ "5" ],
		x: -133.4,
		y: 525.176
	},
};

sorcerer["Ultimate"] = {
	"Inferno": {
		connections: [ "Ultimate", "Prime Inferno" ],
		damageType: 1,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Ignite a roaring inferno that pulses in and out of the target area, Burning enemies for {#}% damage over {#} seconds, and then explodes, dealing {#}% damage to enemies on the outer edge.`,
		id: 103,
		maxPoints: 1,
		values: [ "44.1", "", "295", "8", "50" ],
		x: 318.105,
		y: -144.186
	},
	"Prime Inferno": {
		baseSkill: "Inferno",
		connections: [ "Inferno", "Supreme Inferno" ],
		description: `Enemies inside of Inferno's final explosion are Immobilized for {#} seconds.`,
		id: 104,
		maxPoints: 1,
		values: [ "4" ],
		x: 490.8,
		y: -293.335
	},
	"Supreme Inferno": {
		baseSkill: "Inferno",
		connections: [ "Prime Inferno" ],
		description: `Killing a Burning enemy reduces Inferno's cooldown by {#} second.`,
		id: 105,
		maxPoints: 1,
		values: [ "1" ],
		x: 792.495,
		y: -324.078
	},
	"Unstable Currents": {
		connections: [ "Prime Unstable Currents", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lightning surges within you for {#} seconds. Whenever you cast a Lightning Skill, another random non-Basic Lightning Skill is also cast.`,
		id: 106,
		maxPoints: 1,
		values: [ "68.6", "10" ],
		x: 314.75,
		y: 150.596
	},
	"Prime Unstable Currents": {
		baseSkill: "Unstable Currents",
		connections: [ "Unstable Currents", "Supreme Unstable Currents" ],
		description: `Unstable Currents increases Attack Speed by {#}% while active.`,
		id: 107,
		maxPoints: 1,
		values: [ "25" ],
		x: 558.53,
		y: 247.643
	},
	"Supreme Unstable Currents": {
		baseSkill: "Unstable Currents",
		connections: [ "Prime Unstable Currents" ],
		description: `While Unstable Currents is active, collecting Crackling Energy increases its duration by {#} seconds.`,
		id: 108,
		maxPoints: 1,
		values: [ "0.25" ],
		x: 615.31,
		y: 372.135
	},
	"Deep Freeze": {
		connections: [ "Prime Deep Freeze", "Ultimate" ],
		damageType: 3,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Encase yourself in ice, becoming Immune for {#} seconds, continually Chilling enemies for {#}%. When Deep Freeze ends, Frozen enemies shatter for {#}%. Casting Deep Freeze again ends the effect early.`,
		id: 109,
		maxPoints: 1,
		values: [ "58.8", "", "4", "20", "200" ],
		x: -295.855,
		y: -140.251
	},
	"Prime Deep Freeze": {
		baseSkill: "Deep Freeze",
		connections: [ "Deep Freeze", "Supreme Deep Freeze" ],
		description: `Gain {#}% of your Base Life ({#}) as a Barrier for {#} seconds for each enemy shattered by Deep Freeze.`,
		id: 110,
		maxPoints: 1,
		values: [ "5", "", "6" ],
		x: -507.53,
		y: -256.42
	},
	"Supreme Deep Freeze": {
		baseSkill: "Deep Freeze",
		connections: [ "Prime Deep Freeze" ],
		description: `When Deep Freeze ends, your non-Ultimate cooldowns are reduced by {#}%.`,
		id: 111,
		maxPoints: 1,
		values: [ "50" ],
		x: -799.664,
		y: -259.82
	},
	"Frostbite": {
		connections: [ "Permafrost", "Ultimate", "Icy Touch" ],
		description: `You deal x{#}% more damage to Frozen or Vulnerable enemies, and x{#}% more damage to enemies who are both Frozen and Vulnerable.`,
		id: 112,
		maxPoints: 3,
		values: [ "{3/6/9}", "{6/12/18}" ],
		x: -0.71,
		y: -295.441
	},
	"Permafrost": {
		connections: [ "Frostbite", "Snap Freeze" ],
		description: `Frost Skills deal x{#}% increased damage to Elites.`,
		id: 113,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -146.565,
		y: -443.177
	},
	"Snap Freeze": {
		connections: [ "Permafrost", "Icy Touch" ],
		description: `Lucky Hit: Frost Skills have up to a {#}% chance to instantly Freeze.`,
		id: 114,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -1.96,
		y: -586.799
	},
	"Icy Touch": {
		connections: [ "Frostbite", "Snap Freeze" ],
		description: `You deal x{#}% increased damage to Vulnerable enemies.`,
		id: 115,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 135.1,
		y: -439.918
	},
	"Coursing Currents": {
		connections: [ "Electrocution", "Conduction", "Ultimate" ],
		description: `Hitting enemies with Shock Skills increases your Critical Strike Chance by {#}%. Resets upon getting a Critical Strike.`,
		id: 116,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: 14.79,
		y: 281.384
	},
	"Electrocution": {
		connections: [ "Coursing Currents", "Convulsions" ],
		description: `Enemies deal {#}% less damage for {#} seconds after being Critically Struck by your Shock Skills.`,
		id: 117,
		maxPoints: 3,
		values: [ "{5/10/15}", "5" ],
		x: 174.065,
		y: 429.587
	},
	"Convulsions": {
		connections: [ "Conduction", "Electrocution" ],
		description: `Lucky Hit: Shock Skills have up to a {#}% chance to Stun enemies for {#} seconds.`,
		id: 118,
		maxPoints: 3,
		values: [ "{3/6/9}", "2" ],
		x: 24.29,
		y: 587.361
	},
	"Conduction": {
		connections: [ "Coursing Currents", "Convulsions" ],
		description: `Critical Strikes with Shock Skills increase your Attack Speed by {#}% for {#} seconds.`,
		id: 119,
		maxPoints: 3,
		values: [ "{5/10/15}", "2" ],
		x: -125.19,
		y: 431.627
	},
	"Immolated Flesh": {
		connections: [ "Endless Pyre", "Fiery Surge", "Ultimate" ],
		description: `Burning enemies deal {#}% reduced damage.`,
		id: 120,
		maxPoints: 3,
		values: [ "{4.5/9/13.5}" ],
		x: 566.69,
		y: 0.646
	},
	"Endless Pyre": {
		connections: [ "Pyromania", "Immolated Flesh" ],
		description: `Burning effects last {#}% longer.`,
		id: 121,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: 832.9,
		y: 75.957
	},
	"Pyromania": {
		connections: [ "Fiery Surge", "Endless Pyre" ],
		description: `You deal x{#}% increased Critical Strike Damage per Nearby Burning enemy, up to x{#}%.`,
		id: 122,
		maxPoints: 3,
		values: [ "{3/6/9}", "50" ],
		x: 1088.14,
		y: 0.014
	},
	"Fiery Surge": {
		connections: [ "Pyromania", "Immolated Flesh" ],
		description: `Killing a Burning enemy grants {#}% Attack Speed for {#} seconds.`,
		id: 123,
		maxPoints: 3,
		values: [ "{3/6/9}", "3" ],
		x: 822.8,
		y: -87.71
	},
};

sorcerer["Capstone"] = {
	"Shatter": {
		connections: [ "Capstone" ],
		description: `After Freeze expires, enemies explode for {#}% of the damage you dealt to them while Frozen.`,
		id: 124,
		maxPoints: 1,
		values: [ "25" ],
		x: -562.921,
		y: 368.895
	},
	"Icefall": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Your Frost Skills have up to a {#}% chance to make your next Ice Shards, Frozen Orb, or Blizzard consume no Mana and deal x{#}% more damage. Chance is doubled against Vulnerable enemies.`,
		id: 125,
		maxPoints: 1,
		values: [ "10", "40" ],
		x: -917.155,
		y: 368.385
	},
	"Warmth": {
		connections: [ "Capstone" ],
		description: `Lucky Hit: Up to a {#}% chance to gain {#} Mana per source of Burning on the enemy.`,
		id: 126,
		maxPoints: 1,
		values: [ "50", "1" ],
		x: 498.261,
		y: 369.695
	},
	"Esu's Ferocity": {
		connections: [ "Capstone" ],
		description: `You deal x{#}% increased Burning damage to enemies over {#}% Life and x{#}% increased Pyromancy Skill Direct Damage to enemies under {#}% Life.`,
		id: 127,
		maxPoints: 1,
		values: [ "25", "50", "25", "50" ],
		x: 880.17,
		y: 371.42
	},
	"Overflowing Energy": {
		connections: [ "Capstone" ],
		description: `Crackling Energy hits {#} additional enemy. Each time Crackling Energy hits an enemy, your Shock Skill cooldowns are reduced by {#} seconds, increased to {#} seconds against Elites.`,
		id: 128,
		maxPoints: 1,
		values: [ "1", "0.1", "0.25" ],
		x: -200.689,
		y: 364.71
	},
	"Vyr's Mastery": {
		connections: [ "Capstone" ],
		description: `Close enemies take x{#}% more damage from your Shock Skills and deal x{#}% less damage to you.`,
		id: 129,
		maxPoints: 1,
		values: [ "10", "20" ],
		x: 150.695,
		y: 368.055
	},
};

export { sorcerer };