let necromancer = {};

necromancer["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	"Core": {
		connections: [ "Macabre" ],
		requiredPoints: 2,
		x: -2.353,
		y: 1135.79,
	},
	"Macabre": {
		connections: [ "Corruption" ],
		requiredPoints: 6,
		x: 1240.933,
		y: 2069.72,
	},
	"Corruption": {
		connections: [ "Summoning" ],
		requiredPoints: 11,
		x: 1241.038,
		y: 3005.145,
	},
	"Summoning": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: -1135.477,
		y: 3007.775,
	},
	"Ultimate": {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -9.557,
		y: 4138.157,
	},
	"Capstone": {
		requiredPoints: 33,
		x: -11.71,
		y: 4933.965,
	},
	"Book of the Dead": {
		x: 2500,
		y: 0
	},
};

necromancer["Basic"] = {
	"Decompose": {
		connections: [ "Enhanced Decompose", "Basic" ],
		damageType: 5,
		description: `Generate Essence: {#} per second
Lucky Hit Chance: {#}%
Tear the flesh from an enemy, dealing {#}% damage per second and forming a usable Corpse with the flesh every {#} seconds.`,
		id: 0,
		maxPoints: 5,
		values: [ "7", "40", "30", "2.5" ],
		x: -302.458,
		y: -154.39
	},
	"Enhanced Decompose": {
		baseSkill: "Decompose",
		connections: [ "Decompose", "Acolyte's Decompose", "Initiate's Decompose" ],
		description: `If an enemy dies while being Decomposed, you gain {#} Essence.`,
		id: 1,
		maxPoints: 1,
		values: [ "10" ],
		x: -535.502,
		y: -276.92
	},
	"Acolyte's Decompose": {
		baseSkill: "Decompose",
		connections: [ "Enhanced Decompose" ],
		description: `You and your Minions deal x{#}% increased damage to enemies who are being Decomposed.`,
		id: 2,
		maxPoints: 1,
		values: [ "10" ],
		x: -852.607,
		y: -322.1
	},
	"Initiate's Decompose": {
		baseSkill: "Decompose",
		connections: [ "Enhanced Decompose" ],
		description: `Decompose Slows enemies by {#}%.`,
		id: 3,
		maxPoints: 1,
		values: [ "30" ],
		x: -629.022,
		y: -437.845
	},
	"Reap": {
		connections: [ "Enhanced Reap", "Basic" ],
		damageType: 5,
		description: `Generate Essence: {#} per enemy hit
Lucky Hit Chance: {#}%
Sweep an ethereal scythe in front of you, dealing {#}% damage. Hitting an enemy with Reap increases your Damage Reduction by {#}% for {#} seconds.`,
		id: 4,
		maxPoints: 5,
		values: [ "4", "17", "12", "15", "2" ],
		x: -276.92,
		y: 154.47
	},
	"Enhanced Reap": {
		baseSkill: "Reap",
		connections: [ "Reap", "Initiate's Reap", "Acolyte's Reap" ],
		description: `If an enemy hit by Reap dies within {#} seconds, you gain {#}% Attack Speed for {#} seconds.`,
		id: 5,
		maxPoints: 1,
		values: [ "2", "30", "3" ],
		x: -519.257,
		y: 283.565
	},
	"Initiate's Reap": {
		baseSkill: "Reap",
		connections: [ "Enhanced Reap" ],
		description: `Reap instantly executes non-Bosses below {#}% Life.`,
		id: 6,
		maxPoints: 1,
		values: [ "5" ],
		x: -850.547,
		y: 324
	},
	"Acolyte's Reap": {
		baseSkill: "Reap",
		connections: [ "Enhanced Reap" ],
		description: `Reap forms a Corpse under the first enemy hit. Can only occur every {#} seconds.`,
		id: 7,
		maxPoints: 1,
		values: [ "5" ],
		x: -599.482,
		y: 454.96
	},
	"Hemorrhage": {
		connections: [ "Enhanced Hemorrhage", "Basic" ],
		damageType: 0,
		description: `Generate Essence: {#}
Lucky Hit Chance: {#}%
Burst an enemy's blood, dealing {#}% damage. Hemorrhage has a {#}% chance to form a Blood Orb.`,
		id: 8,
		maxPoints: 5,
		values: [ "7", "40", "25", "20" ],
		x: 279.313,
		y: -153.68
	},
	"Enhanced Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Hemorrhage", "Acolyte's Hemorrhage", "Initiate's Hemorrhage" ],
		description: `After picking up a Blood Orb, your next Hemorrhage also deals damage to enemies around your target and grants {#} additional Essence per enemy hit.`,
		id: 9,
		maxPoints: 1,
		values: [ "2" ],
		x: 515.388,
		y: -269.005
	},
	"Acolyte's Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Enhanced Hemorrhage" ],
		description: `Hemorrhage gains an additional {#}% Attack Speed while Healthy.`,
		id: 10,
		maxPoints: 1,
		values: [ "20" ],
		x: 848.648,
		y: -316.2
	},
	"Initiate's Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Enhanced Hemorrhage" ],
		description: `Hemorrhage grants {#}% Base Life ({#}) as Fortify each time it hits an enemy, and has a {#}% chance per enemy hit to Fortify you for {#}% Base Life ({#}).`,
		id: 11,
		maxPoints: 1,
		values: [ "0.64", "", "1.5", "100", "" ],
		x: 618.878,
		y: -434.435
	},
	"Bone Splinters": {
		connections: [ "Enhanced Bone Splinters", "Basic" ],
		damageType: 0,
		description: `Generate Essence: {#}
Lucky Hit Chance: {#}%
Fire 3 bone splinters, dealing {#}% damage each. Each subsequent time an enemy is hit by the same cast of Bone Splinters, you gain {#} Essence.`,
		id: 12,
		maxPoints: 5,
		values: [ "5", "17", "22.5", "1" ],
		x: 267.113,
		y: 153.42
	},
	"Enhanced Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Bone Splinters", "Acolyte's Bone Splinters", "Initiate's Bone Splinters" ],
		description: `Bone Splinters has a {#}% chance to fire {#} additional projectile if cast while you have {#} or more Essence.`,
		id: 13,
		maxPoints: 1,
		values: [ "30", "2", "50" ],
		x: 502.278,
		y: 282.14
	},
	"Acolyte's Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Enhanced Bone Splinters" ],
		description: `Hitting the same enemy at least {#} times with the same cast of Bone Splinters grants {#}% Critical Strike Chance for {#} seconds.`,
		id: 14,
		maxPoints: 1,
		values: [ "3", "8", "4" ],
		x: 598.598,
		y: 454.575
	},
	"Initiate's Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Enhanced Bone Splinters" ],
		description: `Bone Splinters has a {#}% chance per hit to make enemies Vulnerable for {#} seconds.`,
		id: 15,
		maxPoints: 1,
		values: [ "20", "2" ],
		x: 843.398,
		y: 320.755
	},
};

necromancer["Core"] = {
	"Blight": {
		connections: [ "Enhanced Blight", "Core" ],
		damageType: 5,
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Unleash concentrated blight that deals {#}% damage and leaves behind a defiled area, dealing {#}% damage over {#} seconds.`,
		id: 16,
		maxPoints: 5,
		values: [ "25", "40", "30", "80", "6" ],
		x: -224.532,
		y: -184.935
	},
	"Enhanced Blight": {
		baseSkill: "Blight",
		connections: [ "Blight", "Paranormal Blight", "Supernatural Blight" ],
		description: `Blight Slows enemies by {#}%.`,
		id: 17,
		maxPoints: 1,
		values: [ "25" ],
		x: -450.974,
		y: -361.8
	},
	"Paranormal Blight": {
		baseSkill: "Blight",
		connections: [ "Enhanced Blight" ],
		description: `Blight has a {#}% chance to Immobilize enemies for {#} seconds on impact.`,
		id: 18,
		maxPoints: 1,
		values: [ "10", "2" ],
		x: -815.994,
		y: -416.965
	},
	"Supernatural Blight": {
		baseSkill: "Blight",
		connections: [ "Enhanced Blight" ],
		description: `You and your Minions deal x{#}% increased damage to enemies within Blight.`,
		id: 19,
		maxPoints: 1,
		values: [ "10" ],
		x: -489.679,
		y: -551.275
	},
	"Sever": {
		connections: [ "Enhanced Sever", "Core" ],
		damageType: 5,
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
A specter of you charges forward and attacks with its scythe for {#}% damage then returns to you and attacks again for {#}% damage.`,
		id: 20,
		maxPoints: 5,
		values: [ "20", "20", "42", "" ],
		x: -411.075,
		y: 0.155
	},
	"Enhanced Sever": {
		baseSkill: "Sever",
		connections: [ "Sever", "Paranormal Sever", "Supernatural Sever" ],
		description: `Sever damages enemies along its path for {#}% of its damage.`,
		id: 21,
		maxPoints: 1,
		values: [ "" ],
		x: -768.379,
		y: 0.325
	},
	"Paranormal Sever": {
		baseSkill: "Sever",
		connections: [ "Enhanced Sever" ],
		description: `Every 4th cast of Sever makes enemies Vulnerable for {#} seconds.`,
		id: 22,
		maxPoints: 1,
		values: [ "" ],
		x: -1102.254,
		y: -100.28
	},
	"Supernatural Sever": {
		baseSkill: "Sever",
		connections: [ "Enhanced Sever" ],
		description: `Sever deals x{#}% increased damage for each Minion you have upon cast.`,
		id: 23,
		maxPoints: 1,
		values: [ "" ],
		x: -1100.739,
		y: 97.62
	},
	"Blood Surge": {
		connections: [ "Enhanced Blood Surge", "Core" ],
		damageType: 0,
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Draw blood from enemies, dealing {#}% damage, and expel a blood nova, dealing {#}% damage. Blood Surge's nova damage is increased by x{#}% per enemy drained, up to x{#}%.`,
		id: 24,
		maxPoints: 5,
		values: [ "30", "20", "20", "50", "10", "50" ],
		x: 230.535,
		y: -185.16
	},
	"Enhanced Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Blood Surge", "Supernatural Blood Surge", "Paranormal Blood Surge" ],
		description: `Blood Surge heals you for {#}% of your maximum Life when drawing blood from enemies. If {#} or more enemies are drawn from, then heal for an additional {#}% of your maximum Life.`,
		id: 25,
		maxPoints: 1,
		values: [ "1", "", "" ],
		x: 458.771,
		y: -363.255
	},
	"Supernatural Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Enhanced Blood Surge" ],
		description: `Each time an enemy is hit by Blood Surge's nova, you are Fortified for {#}% Base Life ({#}). While you are Fortified for over {#}% of your Maximum Life, Blood Surge deals {#}% increased damage.`,
		id: 26,
		maxPoints: 1,
		values: [ "", "", "", "" ],
		x: 811.856,
		y: -414.23
	},
	"Paranormal Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Enhanced Blood Surge" ],
		description: `If an enemy is damaged by Blood Surge's nova while you are Healthy, then gain 1 stack of Overwhelming Blood. When you have 5 stacks of Overwhelming Blood, your next Blood Surge Overpowers.`,
		id: 27,
		maxPoints: 1,
		x: 499.171,
		y: -552.28
	},
	"Blood Lance": {
		connections: [ "Enhanced Blood Lance", "Core" ],
		damageType: 0,
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Throw a blood lance that lingers in an enemy for {#} seconds, dealing {#}% damage to the enemy and all other lanced enemies.`,
		id: 28,
		maxPoints: 5,
		values: [ "10", "40", "3", "45" ],
		x: 380.122,
		y: 38.46
	},
	"Enhanced Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Blood Lance", "Supernatural Blood Lance", "Paranormal Blood Lance" ],
		description: `Blood Lance Pierces through enemies who are currently lanced, dealing {#}% reduced damage to subsequent enemies after the first.`,
		id: 29,
		maxPoints: 1,
		values: [ "15" ],
		x: 726.711,
		y: 65.695
	},
	"Supernatural Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Enhanced Blood Lance" ],
		description: `After casting Blood Lance {#} times, your next cast of Blood Lance is guaranteed to Overpower and spawns a Blood Orb under the first enemy hit.`,
		id: 30,
		maxPoints: 1,
		values: [ "" ],
		x: 985.341,
		y: 189.005
	},
	"Paranormal Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Enhanced Blood Lance" ],
		description: `While at least {#} enemies or a Boss are affected by Blood Lance, you gain {#}% Attack Speed and Blood Lance's Essence cost is reduced by {#}.`,
		id: 31,
		maxPoints: 1,
		values: [ "2", "10", "1" ],
		x: 1055.921,
		y: 24.71
	},
	"Bone Spear": {
		connections: [ "Enhanced Bone Spear", "Core" ],
		damageType: 0,
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Conjure a bone spear from the ground, dealing {#}% damage and Piercing through enemies.`,
		id: 32,
		maxPoints: 5,
		values: [ "25", "50", "85" ],
		x: -53.082,
		y: 204.585
	},
	"Enhanced Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Bone Spear", "Paranormal Bone Spear", "Supernatural Bone Spear" ],
		description: `Bone Spear breaks into {#} shards when it is destroyed, dealing {#}% damage each.`,
		id: 33,
		maxPoints: 1,
		values: [ "", "10" ],
		x: -106.376,
		y: 383.87
	},
	"Paranormal Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Enhanced Bone Spear" ],
		description: `Bone Spear has a {#}% increased Critical Strike Chance. If Bone Spear's primary projectile Critically Strikes, it fires {#} additional bone shards upon being destroyed.`,
		id: 34,
		maxPoints: 1,
		values: [ "", "" ],
		x: -340.216,
		y: 524.725
	},
	"Supernatural Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Enhanced Bone Spear" ],
		description: `Bone Spear makes the first enemy hit Vulnerable for {#} seconds.`,
		id: 35,
		maxPoints: 1,
		values: [ "3" ],
		x: -15.686,
		y: 547.47
	},
	"Unliving Energy": {
		connections: [ "Core", "Imperfectly Balanced" ],
		description: `Your maximum Essence is increased by {#}.`,
		id: 36,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 527.726,
		y: -113.765
	},
	"Imperfectly Balanced": {
		connections: [ "Unliving Energy" ],
		description: `Your Core Skills cost {#}% more Essence, but deal x{#}% increased damage.`,
		id: 37,
		maxPoints: 3,
		values: [ "{5/10/15}", "{10/20/30}" ],
		x: 889.681,
		y: -190.74
	},
	"Reconstitution": {
		connections: [ "Core" ],
		description: `Lucky Hit: Your damage has up to a {#}% chance to create a corpse at the target's location. 

This chance is doubled against bosses.`,
		id: 38,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -417.867,
		y: 186.82
	},
};

necromancer["Macabre"] = {
	"Corpse Explosion": {
		connections: [ "Enhanced Corpse Explosion", "Macabre" ],
		damageType: 0,
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Detonate a Corpse, dealing {#}% damage to surrounding enemies.`,
		id: 39,
		maxPoints: 5,
		values: [ "", "40", "75" ],
		x: -385,
		y: 0.11
	},
	"Enhanced Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Corpse Explosion", "Abhorrent Corpse Explosion", "Horrid Corpse Explosion" ],
		description: `Corpse Explosion's radius is increased by {#}%.`,
		id: 40,
		maxPoints: 1,
		values: [ "15" ],
		x: -756.693,
		y: -0.91
	},
	"Abhorrent Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Enhanced Corpse Explosion" ],
		description: `Instead of exploding, Corpse Explosion releases a vile miasma dealing {#}% Shadow Damage over {#} seconds.`,
		id: 41,
		maxPoints: 1,
		values: [ "110", "6" ],
		x: -1048.735,
		y: -100.365
	},
	"Horrid Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Enhanced Corpse Explosion" ],
		description: `Corpse Explosion deals x{#}% increased damage to enemies that are Slowed, Stunned or Vulnerable.`,
		id: 42,
		maxPoints: 1,
		values: [ "15" ],
		x: -1046.376,
		y: 101.125
	},
	"Grim Harvest": {
		connections: [ "Fueled by Death", "Macabre" ],
		description: `Consuming a Corpse generates {#} Essence.`,
		id: 43,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -370.215,
		y: 233.465
	},
	"Fueled by Death": {
		connections: [ "Grim Harvest" ],
		description: `You deal x{#}% increased damage for {#} seconds after consuming a Corpse.`,
		id: 44,
		maxPoints: 3,
		values: [ "{4/8/12}", "4" ],
		x: -632.315,
		y: 401.995
	},
	"Necrotic Carapace": {
		connections: [ "Macabre" ],
		description: `When a Corpse is formed from your Skills or your Minions, Fortify for {#}% Base Life ({#}).`,
		id: 45,
		maxPoints: 3,
		values: [ "{0.8/1.6/2.4}", "" ],
		x: 755.135,
		y: -138.065
	},
	"Blood Mist": {
		connections: [ "Enhanced Blood Mist", "Macabre" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Disperse into a bloody mist, becoming Immune for {#} seconds. Your Movement Speed is reduced by {#}% and you periodically deal {#}% damage to enemies, healing for {#}% of the damage dealt.`,
		id: 46,
		maxPoints: 5,
		values: [ "19.0", "9", "3", "50", "1.75", "100" ],
		x: 79.31,
		y: -196.6
	},
	"Enhanced Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Blood Mist", "Ghastly Blood Mist", "Dreadful Blood Mist" ],
		description: `Blood Mist's Movement Speed penalty is reduced to {#}%.`,
		id: 47,
		maxPoints: 1,
		values: [ "20" ],
		x: 141.245,
		y: -354.24
	},
	"Ghastly Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Enhanced Blood Mist" ],
		description: `Blood Mist leaves behind a Corpse every {#} second.`,
		id: 48,
		maxPoints: 1,
		values: [ "1" ],
		x: 118.76,
		y: -537.495
	},
	"Dreadful Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Enhanced Blood Mist" ],
		description: `Blood Mist Fortifies you for {#}% Base Life ({#}) each time it hits an enemy.`,
		id: 49,
		maxPoints: 1,
		values: [ "0.2", "" ],
		x: 394.43,
		y: -496.67
	},
	"Bone Prison": {
		connections: [ "Enhanced Bone Prison", "Macabre" ],
		description: `Cooldown: {#} seconds
Unearth a prison of bone with {#} Life that surrounds the target area for {#} seconds.`,
		id: 50,
		maxPoints: 5,
		values: [ "20.0", "12", "6" ],
		x: 271.91,
		y: 145.285
	},
	"Enhanced Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Bone Prison", "Ghastly Bone Prison", "Dreadful Bone Prison" ],
		description: `Gain {#} Essence each time an enemy hits your Bone Prison.`,
		id: 51,
		maxPoints: 1,
		values: [ "3" ],
		x: 497.525,
		y: 268.625
	},
	"Ghastly Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Enhanced Bone Prison" ],
		description: `Enemies inside of Bone Prison are Vulnerable.`,
		id: 52,
		maxPoints: 1,
		x: 605.505,
		y: 435.61
	},
	"Dreadful Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Enhanced Bone Prison" ],
		description: `Fortify for {#}% Base Life ({#}) for each enemy trapped by Bone Prison.`,
		id: 53,
		maxPoints: 1,
		values: [ "1.5", "" ],
		x: 834.045,
		y: 309.03
	},
	"Skeletal Warrior Mastery": {
		connections: [ "Macabre" ],
		description: `Increase the damage and Life of your Skeletal Warriors by {#}%.`,
		id: 54,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: 755.34,
		y: 67.235
	},
};

necromancer["Corruption"] = {
	"Iron Maiden": {
		connections: [ "Enhanced Iron Maiden", "Corruption" ],
		damageType: 0,
		description: `Essence Cost: {#}
Curse the target area. Enemies afflicted by Iron Maiden take {#}% damage each time they deal direct damage. Lasts {#} seconds.`,
		id: 55,
		maxPoints: 5,
		values: [ "10", "10", "10" ],
		x: -312.7,
		y: 165.29
	},
	"Enhanced Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Iron Maiden", "Horrid Iron Maiden", "Abhorrent Iron Maiden" ],
		description: `Iron Maiden no longer costs Essence. Instead, gain {#} Essence for each enemy Cursed. Does not work with enemies who are already cursed with Iron Maiden.`,
		id: 56,
		maxPoints: 1,
		values: [ "5" ],
		x: -561.73,
		y: 297.35
	},
	"Horrid Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Enhanced Iron Maiden" ],
		description: `When at least {#} enemies are afflicted by Iron Maiden, its damage is increased by x{#}%.`,
		id: 57,
		maxPoints: 1,
		values: [ "3", "15" ],
		x: -941.446,
		y: 368.383
	},
	"Abhorrent Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Enhanced Iron Maiden" ],
		description: `Heal for {#}% of your maximum Life when an enemy dies while afflicted with Iron Maiden.`,
		id: 58,
		maxPoints: 1,
		values: [ "5" ],
		x: -686.755,
		y: 495.878
	},
	"Skeletal Mage Mastery": {
		connections: [ "Corruption" ],
		description: `Increase the damage and Life of your Skeletal Mages by {#}%.`,
		id: 59,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: 810.22,
		y: 0.575
	},
	"Amplify Damage": {
		connections: [ "Corruption" ],
		description: `You deal x{#}% increased damage to Cursed enemies.`,
		id: 60,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 3.12,
		y: 431.694
	},
	"Decrepify": {
		connections: [ "Enhanced Decrepify", "Corruption" ],
		description: `Essence Cost: {#}
Curse the target area. Enemies afflicted by Decrepify are Slowed by {#}% and deal {#}% less damage for {#} seconds.`,
		id: 61,
		maxPoints: 5,
		values: [ "10", "50", "25", "10" ],
		x: 313.525,
		y: 166.38
	},
	"Enhanced Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Decrepify", "Abhorrent Decrepify", "Horrid Decrepify" ],
		description: `Lucky Hit: Enemies hit while afflicted with Decrepify have up to a {#}% chance to be Stunned for {#} seconds.`,
		id: 62,
		maxPoints: 1,
		values: [ "10", "2" ],
		x: 558.24,
		y: 299.96
	},
	"Abhorrent Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Enhanced Decrepify" ],
		description: `Lucky Hit: Enemies hit while afflicted with Decrepify have up to a {#}% chance to reduce your active cooldowns by {#} seconds.`,
		id: 63,
		maxPoints: 1,
		values: [ "15", "1.5" ],
		x: 687.2,
		y: 499.062
	},
	"Horrid Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Enhanced Decrepify" ],
		description: `When you or your Minions hit an enemy afflicted with Decrepify below {#}% Life, they are instantly killed. Does not work on Bosses.`,
		id: 64,
		maxPoints: 1,
		values: [ "10" ],
		x: 935.27,
		y: 363.898
	},
	"Death's Embrace": {
		connections: [ "Corruption" ],
		description: `Close enemies take x{#}% more damage from you and deal {#}% less damage to you.`,
		id: 65,
		maxPoints: 3,
		values: [ "{2/4/6}", "{3/6/9}" ],
		x: -434.44,
		y: -269.59
	},
	"Death's Reach": {
		connections: [ "Corruption" ],
		description: `You deal x{#}% increased damage to Distant enemies.`,
		id: 66,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 443.845,
		y: -270.025
	},
};

necromancer["Summoning"] = {
	"Corpse Tendrils": {
		connections: [ "Enhanced Corpse Tendrils", "Summoning" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Veins burst out of a Corpse, pulling in enemies, Stunning them for {#} seconds, and dealing {#}% damage to them. Does not consume the Corpse.`,
		id: 67,
		maxPoints: 5,
		values: [ "11.0", "20", "3", "20" ],
		x: 303.62,
		y: -136.85
	},
	"Enhanced Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Corpse Tendrils", "Horrid Corpse Tendrils", "Abhorrent Corpse Tendrils" ],
		description: `Enemies who are in range of Corpse Tendrils are Slowed by {#}% before being pulled.`,
		id: 68,
		maxPoints: 1,
		values: [ "50" ],
		x: 561.44,
		y: -250.575
	},
	"Horrid Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Enhanced Corpse Tendrils" ],
		description: `Enemies Stunned by Corpse Tendrils take x{#}% more damage from Corpse Explosion.`,
		id: 69,
		maxPoints: 1,
		values: [ "25" ],
		x: 872.848,
		y: -267.56
	},
	"Abhorrent Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Enhanced Corpse Tendrils" ],
		description: `Enemies slain while Stunned by Corpse Tendrils have a {#}% chance to drop a Blood Orb.`,
		id: 70,
		maxPoints: 1,
		values: [ "40" ],
		x: 649.155,
		y: -412.305
	},
	"Reaper's Pursuit": {
		connections: [ "Gloom", "Crippling Darkness", "Summoning" ],
		description: `Damaging enemies with Darkness Skills increases your Movement Speed by {#}% for {#} seconds.`,
		id: 71,
		maxPoints: 3,
		values: [ "{5/10/15}", "3" ],
		x: -547.81,
		y: -169.615
	},
	"Gloom": {
		connections: [ "Reaper's Pursuit", "Terror" ],
		description: `When you damage enemies with Darkness Skills, they take x{#}% increased Shadow Damage for {#} seconds, stacking up to {#} times.`,
		id: 72,
		maxPoints: 3,
		values: [ "{2/4/6}", "2", "3" ],
		x: -721.67,
		y: -369.505
	},
	"Terror": {
		connections: [ "Gloom", "Crippling Darkness" ],
		description: `Darkness Skills deal x{#}% increased damage against Immobilized, Slowed, or Stunned enemies. This also applies to Shadow Damage dealt by your Minions.`,
		id: 73,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -1150.985,
		y: -388.355
	},
	"Crippling Darkness": {
		connections: [ "Reaper's Pursuit", "Terror" ],
		description: `Lucky Hit: Darkness Skills have up to a {#}% chance to Stun for {#} seconds.`,
		id: 74,
		maxPoints: 3,
		values: [ "15", "{1/2/3}" ],
		x: -1003.06,
		y: -181.13
	},
	"Blood Begets Blood": {
		connections: [ "Coalesced Blood", "Tides of Blood", "Summoning" ],
		description: `While below 50% Life, you receive {#}% more healing from all sources.`,
		id: 75,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: 5.82,
		y: -372.435
	},
	"Coalesced Blood": {
		connections: [ "Transfusion", "Blood Begets Blood" ],
		description: `After being Healthy for {#} seconds, your next Blood skill Overpowers.`,
		id: 76,
		maxPoints: 3,
		values: [ "" ],
		x: 188.085,
		y: -545.375
	},
	"Transfusion": {
		connections: [ "Coalesced Blood", "Tides of Blood" ],
		description: `Blood Orbs also heal your Minions for {#}% of the amount.`,
		id: 77,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: 188.105,
		y: -740.47
	},
	"Tides of Blood": {
		connections: [ "Drain Vitality", "Transfusion", "Blood Begets Blood" ],
		description: `Your Blood Skills deal x{#}% increased Overpower damage. This bonus is doubled while you are Healthy.`,
		id: 78,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: -186.055,
		y: -545.11
	},
	"Drain Vitality": {
		connections: [ "Tides of Blood" ],
		description: `Lucky Hit: Hitting enemies with Blood Skills has up to a {#}% chance to Fortify you for {#}% Base Life ({#}).`,
		id: 79,
		maxPoints: 3,
		values: [ "{25/50/75}", "1", "" ],
		x: -187.67,
		y: -741.395
	},
	"Bone Spirit": {
		connections: [ "Enhanced Bone Spirit", "Summoning" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Essence Cost: All Remaining Essence
Lucky Hit Chance: {#}%
Consume all of your Essence to conjure a spirit of bone that seeks enemies. Upon reaching an enemy, the spirit explodes, dealing {#}% damage to the target and all surrounding enemies. Damage is increased by {#}% for each point of Essence spent casting Bone Spirit.`,
		id: 80,
		maxPoints: 5,
		values: [ "12.0", "33", "80", "3" ],
		x: -81.99,
		y: 195.105
	},
	"Enhanced Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Bone Spirit", "Ghastly Bone Spirit", "Dreadful Bone Spirit" ],
		description: `If Bone Spirit Critically Strikes, its cooldown is reduced by {#} seconds.  This effect can only happen once per cast.`,
		id: 81,
		maxPoints: 1,
		values: [ "6" ],
		x: -165.82,
		y: 378.073
	},
	"Ghastly Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Enhanced Bone Spirit" ],
		description: `Bone Spirit has an additional {#}% Critical Strike Chance.`,
		id: 82,
		maxPoints: 1,
		values: [ "10" ],
		x: -109.19,
		y: 542.62
	},
	"Dreadful Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Enhanced Bone Spirit" ],
		description: `After Bone Spirit hits an enemy, you generate {#} Essence over the next {#} seconds.`,
		id: 83,
		maxPoints: 1,
		values: [ "30", "4" ],
		x: -417.01,
		y: 502.139
	},
	"Serration": {
		connections: [ "Rapid Ossification", "Compound Fracture", "Summoning" ],
		description: `Your Bone Skills have a {#}% increased Critical Strike Chance for each 10 Essence you have upon cast.`,
		id: 84,
		maxPoints: 3,
		values: [ "{0.5/1/1.5}" ],
		x: -557.22,
		y: 93.025
	},
	"Rapid Ossification": {
		connections: [ "Serration", "Evulsion" ],
		description: `Every {#} Essence you spend reduces the cooldowns of your Bone Skills by {#} seconds.`,
		id: 85,
		maxPoints: 3,
		values: [ "100", "{0.5/1/1.5}" ],
		x: -958.755,
		y: 74.64
	},
	"Evulsion": {
		connections: [ "Compound Fracture", "Rapid Ossification" ],
		description: `Your Bone Skills deal x{#}% increased Critical Strike Damage to Vulnerable enemies.`,
		id: 86,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: -1226.03,
		y: 232.795
	},
	"Compound Fracture": {
		connections: [ "Serration", "Evulsion" ],
		description: `After Critically Striking {#} times with Bone Skills, your Bone Skills deal x{#}% increased damage for {#} seconds.`,
		id: 87,
		maxPoints: 3,
		values: [ "10", "{6/12/18}", "5" ],
		x: -809.63,
		y: 254.365
	},
	"Spiked Armor": {
		connections: [ "Summoning" ],
		description: `Gain {#} Thorns.`,
		id: 109,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: 492.57,
		y: 143.2
	},
};

necromancer["Ultimate"] = {
	"Bonded in Essence": {
		connections: [ "Death's Defense", "Ultimate" ],
		description: `Your Minions gain {#}% of your Resistances.`,
		id: 89,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: -244.033,
		y: 245.369
	},
	"Death's Defense": {
		connections: [ "Bonded in Essence", "Hellbent Commander" ],
		description: `Your Minions can't lose more than {#}% of their maximum Life from a single damage instance.`,
		id: 90,
		maxPoints: 3,
		values: [ "{50/35/20}" ],
		x: -685.035,
		y: 319.583
	},
	"Hellbent Commander": {
		connections: [ "Inspiring Command", "Ultimate", "Death's Defense" ],
		description: `Your Minions deal x{#}% increased damage while you are Close to them.`,
		id: 91,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: -496.655,
		y: 100.921
	},
	"Inspiring Command": {
		connections: [ "Hellbent Commander" ],
		description: `After you have been Healthy for at least {#} seconds, you and your Minions gain {#}% Attack Speed.`,
		id: 92,
		maxPoints: 3,
		values: [ "4", "{4/8/12}" ],
		x: -949.115,
		y: 125.486
	},
	"Army of the Dead": {
		connections: [ "Prime Army of the Dead", "Ultimate" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Call forth the deep buried dead. Volatile undead emerge over the next {#} seconds that explode when around enemies, dealing {#}% damage.`,
		id: 93,
		maxPoints: 1,
		values: [ "90.0", "54", "7", "30" ],
		x: -412.909,
		y: -101.334
	},
	"Prime Army of the Dead": {
		baseSkill: "Army of the Dead",
		connections: [ "Army of the Dead", "Supreme Army of the Dead" ],
		description: `When Army of the Dead's Skeletons explode, they have a {#}% chance to leave behind a Corpse.`,
		id: 94,
		maxPoints: 1,
		values: [ "15" ],
		x: -761.575,
		y: -190.081
	},
	"Supreme Army of the Dead": {
		baseSkill: "Army of the Dead",
		connections: [ "Prime Army of the Dead" ],
		description: `Army of the Dead also raises your Skeletal Warriors and Skeletal Mages.`,
		id: 95,
		maxPoints: 1,
		x: -1035.045,
		y: -69.654
	},
	"Blood Wave": {
		connections: [ "Prime Blood Wave", "Ultimate" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a tidal wave of blood that deals {#}% damage and knocks enemies back.`,
		id: 96,
		maxPoints: 1,
		values: [ "50.0", "30", "90" ],
		x: 308.891,
		y: -165.596
	},
	"Prime Blood Wave": {
		baseSkill: "Blood Wave",
		connections: [ "Blood Wave", "Supreme Blood Wave" ],
		description: `Blood Wave Slows enemies by {#}% for {#} seconds.`,
		id: 97,
		maxPoints: 1,
		values: [ "50", "4" ],
		x: 464.882,
		y: -324.303
	},
	"Supreme Blood Wave": {
		baseSkill: "Blood Wave",
		connections: [ "Prime Blood Wave" ],
		description: `Blood Wave leaves behind 3 Blood Orbs as it travels.`,
		id: 98,
		maxPoints: 1,
		x: 817.735,
		y: -299.367
	},
	"Stand Alone": {
		connections: [ "Memento Mori", "Ultimate" ],
		description: `Increases Damage Reduction by {#}%, reduced by {#}% for each active Minion.`,
		id: 99,
		maxPoints: 3,
		values: [ "{6/12/18}", "2" ],
		x: 686.73,
		y: -0.375
	},
	"Memento Mori": {
		connections: [ "Stand Alone" ],
		description: `Sacrificing both Skeletal Warriors and Skeletal Mages increases their Sacrifice bonuses by {#}%.`,
		id: 100,
		maxPoints: 3,
		values: [ "{20/40/60}" ],
		x: 1059.535,
		y: -0.955
	},
	"Bone Storm": {
		connections: [ "Prime Bone Storm", "Ultimate" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
A swirling storm of bones appears around you and your Golem, dealing {#}% to surrounding enemies over {#} seconds.`,
		id: 101,
		maxPoints: 1,
		values: [ "60.0", "40", "180", "10" ],
		x: 310.324,
		y: 168.163
	},
	"Prime Bone Storm": {
		baseSkill: "Bone Storm",
		connections: [ "Bone Storm", "Supreme Bone Storm" ],
		description: `Your Damage Reduction is increased by {#}% while Bone Storm is active.`,
		id: 102,
		maxPoints: 1,
		values: [ "15" ],
		x: 477.673,
		y: 330.114
	},
	"Supreme Bone Storm": {
		baseSkill: "Bone Storm",
		connections: [ "Prime Bone Storm" ],
		description: `While Bone Storm is active, you consume nearby Corpses. Each Corpse consumed adds {#} seconds to Bonestorm's duration, up to {#} seconds.`,
		id: 103,
		maxPoints: 1,
		values: [ "2", "10" ],
		x: 815.48,
		y: 299.433
	},
	"Golem Mastery": {
		connections: [ "Ultimate" ],
		description: `Increase the damage and Life of your Golem by {#}%.`,
		id: 104,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: 5.062,
		y: -324.445
	},
};

necromancer["Capstone"] = {
	"Ossified Essence": {
		connections: [ "Capstone" ],
		description: `Your Bone Skills deal x{#}% increased damage for each point of Essence you have above {#} upon cast.`,
		id: 105,
		maxPoints: 1,
		values: [ "1", "50" ],
		x: 563.343,
		y: 304.93
	},
	"Shadowblight": {
		connections: [ "Capstone" ],
		damageType: 5,
		description: `Shadow Damage infects enemies with Shadowblight for {#} seconds.

Every {#}th time an enemy receives Shadow Damage from you or your Minions while they are affected by Shadowblight, they take additional {#}% Shadow Damage.`,
		id: 106,
		maxPoints: 1,
		values: [ "2", "10", "20" ],
		x: -187.538,
		y: 305.485
	},
	"Rathma's Vigor": {
		connections: [ "Capstone" ],
		description: `Increase your maximum Life by {#}%. While Healthy, you deal x{#}% increased damage.`,
		id: 107,
		maxPoints: 1,
		values: [ "10", "25" ],
		x: 187.548,
		y: 305.925
	},
	"Strength in Numbers": {
		connections: [ "Capstone" ],
		description: `While you have at least {#} Minions, they gain {#}% Attack Speed.`,
		id: 108,
		maxPoints: 1,
		values: [ "7", "20" ],
		x: -563.262,
		y: 305.87
	},
};

necromancer["Book of the Dead"] = {
	"Skeletal Warriors": {
		"Skeletal Skirmishers": {
			description: `Sword-wielding damage dealers that deal 30% increased damage but have 15% reduced Life.`,
			id: 110,
			sacrifice: `Your critical strike chance is increase by 5%, but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`You can raise an additional Skirmisher.`,
				`Each time you critically strike, your Skirmishers next attack critically strikes as well. Can only happen every 3 seconds.`
			]
		},
		"Skeletal Defenders": {
			description: `Durable shield-bearers with 15% increased Life.`,
			id: 111,
			sacrifice: `You gain 15% non-physical resistance, but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`Every 8 seconds your Defenders negate the next instance of direct damage they would take.`,
				`Increase the amount of thorns that Defenders inherit from you from 30% to 50%.`
			]
		},
		"Skeletal Reapers": {
			description: `Deals area damage with a slow and powerful scythe, and has a special wind-up attack, dealing heavy damage every 10 seconds.`,
			id: 112,
			sacrifice: `You deal x10% increased Shadow Damage but you can no longer raise Skeletal Warriors.`,
			upgrades: [
				`Reaper attacks against enemies who are Immobilized, Slowed, Stunned or Vulnerable reduce the cooldown of their powerful wind-up attack by 2 seconds.`,
				`Reapers have a 10% chance to carve the flesh off enemies, forming a corpse. This cannot happen on the same enemy more than once every 5 seconds.`
			]
		},
	},
	"Skeletal Mages": {
		"Shadow Mages": {
			description: `Deals moderate Shadow Damage.`,
			id: 113,
			sacrifice: `Your maximum essence is increased by 15, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Shadow Mage attacks have a 10% chance to Stun for 2.13 seconds. This cannot happen on the same enemy more than once every 5 seconds.`,
				`Shadow Mages fire an additional shadow bolt every 6th attack.`
			]
		},
		"Cold Mages": {
			description: `Chills and Freezes enemies.`,
			id: 114,
			sacrifice: `You deal x15% increased damage to Vulnerable enemies, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Each time your Cold Mages damage enemies with their primary attack, you gain 2 essence.`,
				`Enemies who are Frozen by or damaged while Frozen by your Cold Mages primary attack are made Vulnerable for 3 seconds.`
			]
		},
		"Bone Mages": {
			description: `Uses its own bones as projectiles, dealing heavy damage for a Life cost.`,
			id: 115,
			sacrifice: `Your Overpower damage is increased by 30%, but you can no longer raise Skeletal Mages.`,
			upgrades: [
				`Reduce the life cost of your Bone Mages attacks from 15% to 10%. After being alive for 5 seconds, Bone Mages deal 40% increased damage.`,
				`Each time a Bone Mage dies from its own attack, they leave behind a corpse and Fortify you for #.`
			]
		},
	},
	"Golem": {
		"Bone Golem": {
			description: `Taunts enemies in a wide area.`,
			id: 116,
			sacrifice: `You gain 10% increased attack speed, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Each time your Golem takes up to 20% of its maximum Life as damage, it sheds a corpse.`,
				`Your Golem gains 10% maximum Life and the amount of thorns they inherit from you is increased from 30% to 50%.`
			]
		},
		"Blood Golem": {
			description: `Drains Life from nearby enemies.`,
			id: 117,
			sacrifice: `Your maximum Life is increased by 10%, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Your Golem absorbs 15% of the damage you would take.`,
				`While healthy, your Golem gains 25% damage reduction and x25% increased damage.`
			]
		},
		"Iron Golem": {
			description: `Slams the ground and Stuns enemies.`,
			id: 118,
			sacrifice: `You deal x30% increased critical strike damage, but you lose the ability to summon a Golem.`,
			upgrades: [
				`Every 5th Golem attack causes a shockwave, dealing 16% damage to the primary enemy and to enemies behind them.`,
				`Your Golem slam attack also makes enemies Vulnerable for 3 seconds.`
			]
		},
	},
};

export { necromancer };