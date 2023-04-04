let necromancerData = {};

necromancerData["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0
	},
	"Core": {
		connections: [ "Macabre" ],
		requiredPoints: 2,
		x: -1193.775,
		y: 612.52
	},
	"Macabre": {
		connections: [ "Corruption" ],
		requiredPoints: 6,
		x: 507.47,
		y: 1513.16
	},
	"Corruption": {
		connections: [ "Summoning" ],
		requiredPoints: 11,
		x: -1200.65,
		y: 2438.479
	},
	"Summoning": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 507.125,
		y: 3343.385
	},
	"Ultimate": {
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1201.801,
		y: 4246.085
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -10.884,
		y: 4865.98
	},
	"Book of the Dead": {
		x: 2500,
		y: 0
	},
};

necromancerData["Basic"] = {
	"Decompose": {
		connections: [ "Enhanced Decompose", "Basic" ],
		description: `Generate Essence: 6 per second
Lucky Hit Chance: {#}%
Tear the flesh from an enemy, dealing {30/33/36/39/42/45/48/51/54/57}% damage per second and forming a usable Corpse with the flesh every 2.5 seconds.

Tags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.`,
		id: 0,
		maxPoints: 5,
		values: [ "40" ],
		x: -217.817,
		y: -258.02
	},
	"Enhanced Decompose": {
		baseSkill: "Decompose",
		connections: [ "Decompose", "Acolyte's Decompose", "Initiate's Decompose" ],
		description: `If an enemy dies while being Decomposed, you gain 10 Essence.

Tags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.`,
		id: 1,
		maxPoints: 1,
		x: -392.051,
		y: -430.79
	},
	"Acolyte's Decompose": {
		baseSkill: "Decompose",
		connections: [ "Enhanced Decompose" ],
		description: `You and your Minions deal x10% increased damage to enemies who are being Decomposed.

Tags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.`,
		id: 2,
		maxPoints: 1,
		x: -632.476,
		y: -478.095
	},
	"Initiate's Decompose": {
		baseSkill: "Decompose",
		connections: [ "Enhanced Decompose" ],
		description: `Decompose Slows enemies by 30%.

Tags: Basic, Darkness, Channeled, Damage, Shadow Damage Over Time, Essence, Corpse.`,
		id: 3,
		maxPoints: 1,
		x: -371.68,
		y: -569.72
	},
	"Reap": {
		connections: [ "Enhanced Reap", "Basic" ],
		description: `Generate Essence: 4 per enemy hit
Lucky Hit Chance: {#}%
Sweep an ethereal scythe in front of you, dealing {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% damage. Hitting an enemy with Reap increases your Damage Reduction by 15% for 2 seconds.

Tags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.`,
		id: 4,
		maxPoints: 5,
		values: [ "17" ],
		x: -498.75,
		y: -99.975
	},
	"Enhanced Reap": {
		baseSkill: "Reap",
		connections: [ "Reap", "Initiate's Reap", "Acolyte's Reap" ],
		description: `If an enemy hit by Reap dies within 2 seconds, you gain +30% Attack Speed for 3 seconds.

Tags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.`,
		id: 5,
		maxPoints: 1,
		x: -830.87,
		y: -161.91
	},
	"Initiate's Reap": {
		baseSkill: "Reap",
		connections: [ "Enhanced Reap" ],
		description: `Reap instantly kills targets below 5% Life.

This does not work on bosses or players.

Tags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.`,
		id: 6,
		maxPoints: 1,
		x: -921.775,
		y: -287.89
	},
	"Acolyte's Reap": {
		baseSkill: "Reap",
		connections: [ "Enhanced Reap" ],
		description: `Reap forms a Corpse under the first enemy hit. Can only occur every 5 seconds.

Tags: Basic, Darkness, Damage, Shadow, Essence, Damage Reduction.`,
		id: 7,
		maxPoints: 1,
		x: -1072.505,
		y: -107.4
	},
	"Hemorrhage": {
		connections: [ "Enhanced Hemorrhage", "Basic" ],
		description: `Generate Essence: 8
Lucky Hit Chance: {#}%
Burst an enemy's blood, dealing {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage. Hemorrhage has a 20% chance to form a Blood Orb.

Tags: Basic, Blood, Blood Orb, Damage, Physical, Essence.`,
		id: 8,
		maxPoints: 5,
		values: [ "40" ],
		x: 214.396,
		y: -265.9
	},
	"Enhanced Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Hemorrhage", "Acolyte's Hemorrhage", "Initiate's Hemorrhage" ],
		description: `After picking up a Blood Orb, your next Hemorrhage also deals damage to enemies around your target and grants 2 additional Essence per enemy hit.

Tags: Basic, Blood, Blood Orb, Damage, Physical, Essence.`,
		id: 9,
		maxPoints: 1,
		x: 356.625,
		y: -432.41
	},
	"Acolyte's Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Enhanced Hemorrhage" ],
		description: `Hemorrhage gains an additional +20% Attack Speed while Healthy.

Tags: Basic, Blood, Blood Orb, Damage, Physical, Essence.`,
		id: 10,
		maxPoints: 1,
		x: 607.455,
		y: -493.645
	},
	"Initiate's Hemorrhage": {
		baseSkill: "Hemorrhage",
		connections: [ "Enhanced Hemorrhage" ],
		description: `Hemorrhage grants 1.6% Base Life as Fortify each time it hits an enemy, and has a 1.5% chance per enemy hit to Fortify you for 100% Base Life.

Tags: Basic, Blood, Blood Orb, Damage, Physical, Essence.`,
		id: 11,
		maxPoints: 1,
		x: 328.303,
		y: -569.91
	},
	"Bone Splinters": {
		connections: [ "Enhanced Bone Splinters", "Basic" ],
		description: `Generate Essence: 5
Lucky Hit Chance: {#}%
Fire 3 bone splinters, dealing {22.5/24.8/27/29.3/31.5/33.8/36/38.2/40.5/42.8}% damage each. Each subsequent time an enemy is hit by the same cast of Bone Splinters, you gain 1 Essence.

Tags: Basic, Bone, Damage, Physical, Essence.`,
		id: 12,
		maxPoints: 5,
		values: [ "17" ],
		x: 488.405,
		y: -91.8
	},
	"Enhanced Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Bone Splinters", "Acolyte's Bone Splinters", "Initiate's Bone Splinters" ],
		description: `Bone Splinters has a 30% chance to fire 2 additional projectiles if cast while you have 50 or more Essence.

Tags: Basic, Bone, Damage, Physical, Essence.`,
		id: 13,
		maxPoints: 1,
		x: 877.154,
		y: -161.18
	},
	"Acolyte's Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Enhanced Bone Splinters" ],
		description: `Hitting the same enemy at least 3 times with the same cast of Bone Splinters grants +8% Critical Strike Chance for 4 seconds.

Tags: Basic, Bone, Damage, Physical, Essence.`,
		id: 14,
		maxPoints: 1,
		x: 1137.875,
		y: -122.755
	},
	"Initiate's Bone Splinters": {
		baseSkill: "Bone Splinters",
		connections: [ "Enhanced Bone Splinters" ],
		description: `Bone Splinters has a 20% chance per hit to make enemies Vulnerable for 2 seconds.

Tags: Basic, Bone, Damage, Physical, Essence.`,
		id: 15,
		maxPoints: 1,
		x: 989.495,
		y: -302.135
	},
};

necromancerData["Core"] = {
	"Blight": {
		connections: [ "Enhanced Blight", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Unleash concentrated blight that deals {30/33/36/39/42/45/48/51/54/57}% damage and leaves behind a defiled area, dealing {79.8/88.2/96/103.8/112.2/120/127.8/136.2/144/151.8}% damage over 6 seconds.

Tags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.`,
		id: 16,
		maxPoints: 5,
		values: [ "25", "40" ],
		x: -543.69,
		y: 87.56
	},
	"Enhanced Blight": {
		baseSkill: "Blight",
		connections: [ "Blight", "Paranormal Blight", "Supernatural Blight" ],
		description: `Blight Slows enemies by 25%.

Tags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.`,
		id: 17,
		maxPoints: 1,
		x: -922.335,
		y: 147.785
	},
	"Paranormal Blight": {
		baseSkill: "Blight",
		connections: [ "Enhanced Blight" ],
		description: `Blight has a 30% chance to Immobilize enemies for 1.5 seconds on impact.

Tags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.`,
		id: 18,
		maxPoints: 1,
		x: -1096.55,
		y: 268.61
	},
	"Supernatural Blight": {
		baseSkill: "Blight",
		connections: [ "Enhanced Blight" ],
		description: `You and your Minions deal x15% increased damage to enemies within Blight.

Tags: Core, Darkness, Damage, Shadow Damage Over Time, Essence.`,
		id: 19,
		maxPoints: 1,
		x: -1190.43,
		y: 103.745
	},
	"Sever": {
		connections: [ "Enhanced Sever", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
A specter of you charges forward and attacks with its scythe for {63/69.3/75.6/81.9/88.2/94.5/100.8/107.1/113.4/119.7}% damage then returns to you and attacks again for {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% damage.

Tags: Core, Darkness, Damage, Shadow, Essence.`,
		id: 20,
		maxPoints: 5,
		values: [ "20", "20" ],
		x: -281.15,
		y: 258.115
	},
	"Enhanced Sever": {
		baseSkill: "Sever",
		connections: [ "Sever", "Paranormal Sever", "Supernatural Sever" ],
		description: `Sever damages enemies along its path for 25% of its initial damage.

Tags: Core, Darkness, Damage, Shadow, Essence.`,
		id: 21,
		maxPoints: 1,
		x: -574.38,
		y: 439.87
	},
	"Paranormal Sever": {
		baseSkill: "Sever",
		connections: [ "Enhanced Sever" ],
		description: `Every 4th cast of Sever makes enemies Vulnerable for 2 seconds.

Tags: Core, Darkness, Damage, Shadow, Essence.`,
		id: 22,
		maxPoints: 1,
		x: -840.68,
		y: 482.04
	},
	"Supernatural Sever": {
		baseSkill: "Sever",
		connections: [ "Enhanced Sever" ],
		description: `Sever deals x2% increased damage for each Minion you have upon cast.

Tags: Core, Darkness, Damage, Shadow, Essence.`,
		id: 23,
		maxPoints: 1,
		x: -597.79,
		y: 590.745
	},
	"Blood Surge": {
		connections: [ "Enhanced Blood Surge", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Draw blood from enemies, dealing {20/22/24/26/28/30/32/34/36/38}% damage, and expel a blood nova, dealing {50/55/60/65/70/75/80/85/90/95}% damage. Blood Surge's nova damage is increased by x10% per enemy drained, up to x50%.

Tags: Core, Blood, Damage, Physical, Essence.`,
		id: 24,
		maxPoints: 5,
		values: [ "30", "20" ],
		x: -542.58,
		y: -124.71
	},
	"Enhanced Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Blood Surge", "Supernatural Blood Surge", "Paranormal Blood Surge" ],
		description: `Blood Surge Heals you for 2.5% of your Maximum Life when drawing blood from enemies. If 4 or more enemies are drawn from, then Heal for an additional 2.5% of your Maximum Life.

Tags: Core, Blood, Damage, Physical, Essence.`,
		id: 25,
		maxPoints: 1,
		x: -912.83,
		y: -200.94
	},
	"Supernatural Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Enhanced Blood Surge" ],
		description: `Each time an enemy is hit by Blood Surge's nova, you are Fortified for 1.1% Base Life. While you have Fortify for over 50% of your Maximum Life, Blood Surge deals x20% increased damage.

Tags: Core, Blood, Damage, Physical, Essence.`,
		id: 26,
		maxPoints: 1,
		x: -1048.315,
		y: -328.79
	},
	"Paranormal Blood Surge": {
		baseSkill: "Blood Surge",
		connections: [ "Enhanced Blood Surge" ],
		description: `If an enemy is damaged by Blood Surge's nova while you are Healthy, then gain 1 stack of Overwhelming Blood. When you have 5 stacks of Overwhelming Blood, your next Blood Surge Overpowers.

Tags: Core, Blood, Damage, Physical, Essence.`,
		id: 27,
		maxPoints: 1,
		x: -1170.475,
		y: -160.385
	},
	"Blood Lance": {
		connections: [ "Enhanced Blood Lance", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Throw a blood lance that lingers in an enemy for {#} seconds, dealing {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% damage to the enemy and all other lanced enemies.

Tags: Core, Blood, Damage, Physical, Essence.`,
		id: 28,
		maxPoints: 5,
		values: [ "10", "40", "3" ],
		x: -278.15,
		y: -274.3
	},
	"Enhanced Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Blood Lance", "Supernatural Blood Lance", "Paranormal Blood Lance" ],
		description: `Blood Lance pierces through enemies who are currently lanced, dealing 15% reduced damage to subsequent enemies after the first.

Tags: Core, Blood, Damage, Physical, Essence.`,
		id: 29,
		maxPoints: 1,
		x: -470.775,
		y: -466.65
	},
	"Supernatural Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Enhanced Blood Lance" ],
		description: `After casting Blood Lance 8 times, your next cast of Blood Lance is guaranteed to Overpower and spawns a Blood Orb under the first enemy hit.

Tags: Core, Blood, Damage, Physical, Essence.`,
		id: 30,
		maxPoints: 1,
		x: -445.5,
		y: -604.16
	},
	"Paranormal Blood Lance": {
		baseSkill: "Blood Lance",
		connections: [ "Enhanced Blood Lance" ],
		description: `While at least 2 enemies or a Boss are affected by Blood Lance, you gain +15% Attack Speed and Blood Lance's Essence cost is reduced by 2.

Tags: Core, Blood, Damage, Physical, Essence.`,
		id: 31,
		maxPoints: 1,
		x: -727.57,
		y: -520.325
	},
	"Bone Spear": {
		connections: [ "Enhanced Bone Spear", "Core" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Conjure a bone spear from the ground, dealing {85/93.5/102/110.5/119/127.5/136/144.5/153/161.5}% damage and piercing through enemies.

Tags: Core, Bone, Damage, Physical, Essence.`,
		id: 32,
		maxPoints: 5,
		values: [ "25", "50" ],
		x: 551.14,
		y: -0.17
	},
	"Enhanced Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Bone Spear", "Paranormal Bone Spear", "Supernatural Bone Spear" ],
		description: `Bone Spear breaks into 3 shards when it is destroyed, dealing {10/11/12/13/14/15/16/17/18/19}% damage each.

Tags: Core, Bone, Damage, Physical, Essence.`,
		id: 33,
		maxPoints: 1,
		x: 968.272,
		y: 0.325
	},
	"Paranormal Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Enhanced Bone Spear" ],
		description: `Bone Spear has a +5% increased Critical Strike Chance. If Bone Spear's primary projectile Critically Strikes, it fires 2 additional bone shards upon being destroyed.

Tags: Core, Bone, Damage, Physical, Essence.`,
		id: 34,
		maxPoints: 1,
		x: 1180.912,
		y: 94.56
	},
	"Supernatural Bone Spear": {
		baseSkill: "Bone Spear",
		connections: [ "Enhanced Bone Spear" ],
		description: `Bone Spear makes the first enemy hit Vulnerable for 3 seconds.

Tags: Core, Bone, Damage, Physical, Essence.`,
		id: 35,
		maxPoints: 1,
		x: 1183.487,
		y: -89.765
	},
	"Unliving Energy": {
		connections: [ "Core", "Imperfectly Balanced" ],
		description: `Your maximum Essence is increased by {3/6/9/12/15/18/21/24/27/30}.

Tags: Essence.`,
		id: 36,
		maxPoints: 3,
		x: 149.05,
		y: -273.915
	},
	"Imperfectly Balanced": {
		connections: [ "Unliving Energy" ],
		description: `Your Core Skills cost x{5/10/15/20/25/30/35/40/45/50}% more Essence, but deal x{10/20/30/40/50/60/70/80/90/100}% increased damage.

Tags: Damage, Essence, Core.`,
		id: 37,
		maxPoints: 3,
		x: 150.19,
		y: -449.76
	},
	"Hewed Flesh": {
		connections: [ "Core" ],
		description: `Lucky Hit: Your damage has up to a {4/8/12/16/20/24/28/32/36/40}% chance to create a Corpse at the target's location.

This chance is doubled against Bosses.

Tags: Lucky Hit, Corpse.`,
		id: 121,
		maxPoints: 3,
		x: 150.135,
		y: 264.425
	},
};

necromancerData["Macabre"] = {
	"Corpse Explosion": {
		connections: [ "Enhanced Corpse Explosion", "Macabre" ],
		description: `Essence Cost: {#}
Lucky Hit Chance: {#}%
Detonate a Corpse, dealing {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% damage to surrounding enemies.

Tags: Corpse, Corruption, Damage, Physical, Cooldown.`,
		id: 39,
		maxPoints: 5,
		values: [ "", "40" ],
		x: -570.055,
		y: -2.03
	},
	"Enhanced Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Corpse Explosion", "Blighted Corpse Explosion", "Plagued Corpse Explosion" ],
		description: `Corpse Explosion's radius is increased by 15%.

Tags: Corpse, Corruption, Damage, Physical, Cooldown.`,
		id: 40,
		maxPoints: 1,
		x: -964.178,
		y: -2.155
	},
	"Blighted Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Enhanced Corpse Explosion" ],
		description: `Corpse Explosion becomes a Darkness Skill and, instead of exploding, releases a vile miasma dealing {109.8/121.2/132/142.8/154.2/165/175.8/187.2/198/208.8}% Shadow Damage over 6 seconds.

Tags: Corpse, Corruption, Damage, Physical, Cooldown.`,
		id: 122,
		maxPoints: 1,
		x: -1186.325,
		y: -102.68
	},
	"Plagued Corpse Explosion": {
		baseSkill: "Corpse Explosion",
		connections: [ "Enhanced Corpse Explosion" ],
		description: `Corpse Explosion deals x10% increased damage to enemies that are Slowed, Stunned or Vulnerable. These damage bonuses can stack.

Tags: Corpse, Corruption, Damage, Physical, Cooldown.`,
		id: 123,
		maxPoints: 1,
		x: -1183.965,
		y: 98.81
	},
	"Grim Harvest": {
		connections: [ "Fueled by Death", "Macabre" ],
		description: `Consuming a Corpse generates {3/6/9/12/15/18/21/24/27/30} Essence.

Tags: Essence, Corpse.`,
		id: 43,
		maxPoints: 3,
		x: -3.265,
		y: 300.7
	},
	"Fueled by Death": {
		connections: [ "Grim Harvest" ],
		description: `You deal x{4/8/12/16/20/24/28/32/36/40}% increased damage for 4 seconds after consuming a Corpse.

Tags: Damage, Corpse.`,
		id: 44,
		maxPoints: 3,
		x: -0.3,
		y: 530.055
	},
	"Spiked Armor": {
		connections: [ "Macabre" ],
		description: `Gain {40/80/120/160/200/240/280/320/360/400} Thorns.

Tags: Thorns.`,
		id: 124,
		maxPoints: 3,
		x: 401.03,
		y: -216.235
	},
	"Blood Mist": {
		connections: [ "Enhanced Blood Mist", "Macabre" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Disperse into a bloody mist, becoming Immune for 3 seconds. Your Movement Speed is reduced by 20% and you periodically deal 1.7% damage to enemies and Healing for {0.5/0.6/0.6/0.7/0.7/0.8/0.8/0.8/0.9/1}% of your Maximum Life.

Tags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.`,
		id: 46,
		maxPoints: 5,
		values: [ "20", "9" ],
		x: 6.515,
		y: -278.795
	},
	"Enhanced Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Blood Mist", "Ghastly Blood Mist", "Dreadful Blood Mist" ],
		description: `Casting a Skill that Overpowers reduces the cooldown of Blood Mist by 2 seconds.

Tags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.`,
		id: 47,
		maxPoints: 1,
		x: 4.72,
		y: -504.595
	},
	"Ghastly Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Enhanced Blood Mist" ],
		description: `Blood Mist leaves behind a Corpse every 0.95 second.

Tags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.`,
		id: 48,
		maxPoints: 1,
		x: -173.752,
		y: -623.38
	},
	"Dreadful Blood Mist": {
		baseSkill: "Blood Mist",
		connections: [ "Enhanced Blood Mist" ],
		description: `Blood Mist Fortifies you for 0.5% Base Life each time it hits an enemy.

Tags: Macabre, Blood, Immune, Damage, Physical, Cooldown, Healing, Damage Reduction.`,
		id: 49,
		maxPoints: 1,
		x: 195.505,
		y: -624.15
	},
	"Bone Prison": {
		connections: [ "Enhanced Bone Prison", "Macabre" ],
		description: `Cooldown: {#} seconds
Unearth a prison of bone with {#} Life that surrounds the target area for 6 seconds.

Tags: Macabre, Bone, Cooldown.`,
		id: 50,
		maxPoints: 5,
		values: [ "20", "" ],
		x: 411.49,
		y: 218.61
	},
	"Enhanced Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Bone Prison", "Ghastly Bone Prison", "Dreadful Bone Prison" ],
		description: `If an enemy is trapped by Bone Prison, gain 15 Essence, plus an additional 5 per enemy trapped.

Tags: Macabre, Bone, Cooldown.`,
		id: 51,
		maxPoints: 1,
		x: 725.485,
		y: 358.205
	},
	"Ghastly Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Enhanced Bone Prison" ],
		description: `Enemies inside of Bone Prison are Vulnerable.

Tags: Macabre, Bone, Cooldown.`,
		id: 52,
		maxPoints: 1,
		x: 769.465,
		y: 494.305
	},
	"Dreadful Bone Prison": {
		baseSkill: "Bone Prison",
		connections: [ "Enhanced Bone Prison" ],
		description: `Fortify for 5% Base Life for each enemy trapped by Bone Prison.

Tags: Macabre, Bone, Cooldown.`,
		id: 53,
		maxPoints: 1,
		x: 998.005,
		y: 367.725
	},
	"Skeletal Warrior Mastery": {
		connections: [ "Macabre" ],
		description: `Increase the damage and Life of your Skeletal Warriors by x{15/30/45/60/75/90/105/120/135/150}%.

Tags: Minion, Damage, Life.`,
		id: 54,
		maxPoints: 3,
		x: 562.475,
		y: -0.165
	},
};

necromancerData["Corruption"] = {
	"Iron Maiden": {
		connections: [ "Enhanced Iron Maiden", "Corruption" ],
		description: `Essence Cost: {#}
Curse the target area. Enemies afflicted by Iron Maiden take {10/11/12/13/14/15/16/17/18/19}% damage each time they deal direct damage. Lasts 10 seconds.

Tags: Curse, Corruption, Essence, Damage.`,
		id: 55,
		maxPoints: 5,
		values: [ "10" ],
		x: -452.675,
		y: -233.982
	},
	"Enhanced Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Iron Maiden", "Horrid Iron Maiden", "Abhorrent Iron Maiden" ],
		description: `Iron Maiden no longer costs Essence. Instead, gain 5 Essence for each enemy Cursed. Does not work with enemies who are already Cursed with Iron Maiden.

Tags: Curse, Corruption, Essence, Damage.`,
		id: 56,
		maxPoints: 1,
		x: -771.585,
		y: -385.35
	},
	"Horrid Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Enhanced Iron Maiden" ],
		description: `When at least 3 enemies are afflicted by Iron Maiden, its damage is increased by x15%.

Tags: Curse, Corruption, Essence, Damage.`,
		id: 57,
		maxPoints: 1,
		x: -806.375,
		y: -523.514
	},
	"Abhorrent Iron Maiden": {
		baseSkill: "Iron Maiden",
		connections: [ "Enhanced Iron Maiden" ],
		description: `Heal for 5% of your Maximum Life when an enemy dies while afflicted with Iron Maiden.

Tags: Curse, Corruption, Essence, Damage.`,
		id: 58,
		maxPoints: 1,
		x: -1050.125,
		y: -372.255
	},
	"Skeletal Mage Mastery": {
		connections: [ "Corruption" ],
		description: `Increase the damage and Life of your Skeletal Mages by x{15/30/45/60/75/90/105/120/135/150}%.

Tags: Damage, Life, Minion.`,
		id: 59,
		maxPoints: 3,
		x: -2.93,
		y: 322.683
	},
	"Amplify Damage": {
		connections: [ "Corruption" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Cursed enemies.

Tags: Damage, Curse.`,
		id: 60,
		maxPoints: 3,
		x: -558.415,
		y: 1.584
	},
	"Decrepify": {
		connections: [ "Enhanced Decrepify", "Corruption" ],
		description: `Essence Cost: {#}
Curse the target area. Enemies afflicted by Decrepify are Slowed by {40/43/45.8/48.5/51.1/53.5/55.8/58/60.1/62.1}% and deal {20/20/20.9/22/23.1/24.3/25.4/26.6/28/29.4}% less damage for 10 seconds.

Tags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.`,
		id: 61,
		maxPoints: 5,
		values: [ "10" ],
		x: -457.14,
		y: 240.226
	},
	"Enhanced Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Decrepify", "Abhorrent Decrepify", "Horrid Decrepify" ],
		description: `Lucky Hit: Enemies hit while afflicted with Decrepify have up to a 10% chance to Stun them for 2 seconds.

Tags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.`,
		id: 62,
		maxPoints: 1,
		x: -757.225,
		y: 392.89
	},
	"Abhorrent Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Enhanced Decrepify" ],
		description: `Lucky Hit: Enemies hit while afflicted with Decrepify have up to a 15% chance to reduce your active Cooldowns by 1 second.

Tags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.`,
		id: 63,
		maxPoints: 1,
		x: -1026.955,
		y: 390.108
	},
	"Horrid Decrepify": {
		baseSkill: "Decrepify",
		connections: [ "Enhanced Decrepify" ],
		description: `When you or your Minions hit an enemy afflicted with Decrepify below 10% Life, they are instantly killed. Does not work on Bosses.

Tags: Curse, Corruption, Crowd Control, Essence, Damage Reduction.`,
		id: 64,
		maxPoints: 1,
		x: -810.09,
		y: 533.678
	},
	"Death's Embrace": {
		connections: [ "Corruption" ],
		description: `Close enemies take x{2/4/6/8/10/12/14/16/18/20}% more damage from you and deal {3/6/9/12/15/18/21/24/27/30}% less damage to you.

Tags: Damage, Damage Reduction.`,
		id: 65,
		maxPoints: 3,
		x: 1.235,
		y: -289.131
	},
	"Death's Reach": {
		connections: [ "Corruption" ],
		description: `You deal x{4/8/12/16/20/24/28/32/36/40}% increased damage to Distant enemies.

Tags: Damage.`,
		id: 66,
		maxPoints: 3,
		x: 576.795,
		y: 2.084
	},
};

necromancerData["Summoning"] = {
	"Corpse Tendrils": {
		connections: [ "Enhanced Corpse Tendrils", "Summoning" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Veins burst out of a Corpse, Pulling in enemies, Stunning them for 3 seconds, and dealing {20/22/24/26/28/30/32/34/36/38}% damage to them. Does not consume the Corpse.

Tags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.`,
		id: 67,
		maxPoints: 5,
		values: [ "11", "20" ],
		x: 444.22,
		y: -228.515
	},
	"Enhanced Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Corpse Tendrils", "Plagued Corpse Tendrils", "Blighted Corpse Tendrils" ],
		description: `Enemies who are in range of Corpse Tendrils are Slowed by 50% before being Pulled.

Tags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.`,
		id: 68,
		maxPoints: 1,
		x: 740.58,
		y: -392.601
	},
	"Plagued Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Enhanced Corpse Tendrils" ],
		description: `Enemies damaged by Corpse Tendrils are made Vulnerable for 3 seconds.

Tags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.`,
		id: 125,
		maxPoints: 1,
		x: 999.47,
		y: -388.527
	},
	"Blighted Corpse Tendrils": {
		baseSkill: "Corpse Tendrils",
		connections: [ "Enhanced Corpse Tendrils" ],
		description: `Corpse Tendrils has a 20% chance when damaging enemies to drop a Blood Orb.

Tags: Corpse, Corruption, Cooldown, Damage, Crowd Control, Physical.`,
		id: 126,
		maxPoints: 1,
		x: 762.735,
		y: -532.53
	},
	"Reaper's Pursuit": {
		connections: [ "Gloom", "Crippling Darkness", "Summoning" ],
		description: `Damaging enemies with Darkness Skills increases your Movement Speed by +{5/10/15/20/25/30/35/40/45/50}% for 3 seconds.

Tags: Movement, Darkness.`,
		id: 71,
		maxPoints: 3,
		x: -539.448,
		y: 0.085
	},
	"Gloom": {
		connections: [ "Reaper's Pursuit", "Terror" ],
		description: `When you damage enemies with Darkness Skills, they take x{2/4/6/8/10/12/14/16/18/20}% increased Shadow Damage from you and your Minions for 2 seconds, stacking up to 3 times.

Tags: Damage, Shadow, Minion, Darkness.`,
		id: 72,
		maxPoints: 3,
		x: -812.116,
		y: -96.84
	},
	"Terror": {
		connections: [ "Gloom", "Crippling Darkness" ],
		description: `Darkness Skills deal x{3/6/9/12/15/18/21/24/27/30}% bonus damage to enemies who are Slowed, and x{3/6/9/12/15/18/21/24/27/30}% bonus damage to enemies who are Stunned or Immobilized. These bonuses stack and apply to Shadow Damage dealt by your Minions.

Tags: Crowd Control, Damage, Shadow, Darkness, Minion.`,
		id: 73,
		maxPoints: 3,
		x: -1072.725,
		y: 1.175
	},
	"Crippling Darkness": {
		connections: [ "Reaper's Pursuit", "Terror" ],
		description: `Lucky Hit: Darkness Skills have up to a 15% chance to Stun for {1/2/3/4/5/6/7/8/9/10} seconds.

Tags: Crowd Control, Darkness, Lucky Hit.`,
		id: 74,
		maxPoints: 3,
		x: -812.306,
		y: 96.35
	},
	"Gruesome Mending": {
		connections: [ "Transfusion", "Coalesced Blood", "Summoning" ],
		description: `While below 50% Life, you receive +{10/20/30/40/50/60/70/80/90/100}% more Healing from all sources.

Tags: Life, Healing.`,
		id: 127,
		maxPoints: 3,
		x: 1.18,
		y: -309.335
	},
	"Transfusion": {
		connections: [ "Tides of Blood", "Gruesome Mending" ],
		description: `Blood Orbs also Heal your Minions for {15/30/45/60/75/90/105/120/135/150}% of the amount.

Tags: Blood Orb, Minion, Healing.`,
		id: 77,
		maxPoints: 3,
		x: 191.07,
		y: -457.803
	},
	"Tides of Blood": {
		connections: [ "Transfusion", "Coalesced Blood" ],
		description: `Your Blood Skills deal x{5/10/15/20/25/30/35/40/45/50}% increased Overpower damage. This bonus is doubled while you are Healthy.

Tags: Healthy, Overpower, Blood, Damage.`,
		id: 78,
		maxPoints: 3,
		x: 3.55,
		y: -609.869
	},
	"Coalesced Blood": {
		connections: [ "Drain Vitality", "Tides of Blood", "Gruesome Mending" ],
		description: `While Healthy your Blood Skills deal x{6/12/18/24/30/36/42/48/54/60}% increased damage.

Tags: Healthy, Damage, Blood.`,
		id: 76,
		maxPoints: 3,
		x: -190.339,
		y: -455.995
	},
	"Drain Vitality": {
		connections: [ "Coalesced Blood" ],
		description: `Lucky Hit: Hitting enemies with Blood Skills has up to a 25% chance to Fortify you for {2.5/5/7.5/10/12.5/15/17.5/20/22.5/25}% Base Life.

Tags: Fortify, Lucky Hit, Blood.`,
		id: 79,
		maxPoints: 3,
		x: -382.557,
		y: -610.311
	},
	"Bone Spirit": {
		connections: [ "Enhanced Bone Spirit", "Summoning" ],
		description: `Cooldown: {#} seconds
Essence Cost: All Remaining Essence
Lucky Hit Chance: {#}%
Consume all of your Essence to conjure a spirit of bone that seeks enemies. Upon reaching an enemy, the spirit explodes, dealing {80/88/96/104/112/120/128/136/144/152}% damage to the target and all surrounding enemies. Damage is increased by x3% for each point of Essence spent casting Bone Spirit.

Tags: Macabre, Bone, Damage, Cooldown, Essence, Physical.`,
		id: 80,
		maxPoints: 5,
		values: [ "12", "33" ],
		x: 441.425,
		y: 214.93
	},
	"Enhanced Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Bone Spirit", "Ghastly Bone Spirit", "Dreadful Bone Spirit" ],
		description: `If Bone Spirit Critically Strikes, its Cooldown is reduced by 6 seconds. This effect can only happen once per cast.

Tags: Macabre, Bone, Damage, Cooldown, Essence, Physical.`,
		id: 81,
		maxPoints: 1,
		x: 737.945,
		y: 347.195
	},
	"Ghastly Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Enhanced Bone Spirit" ],
		description: `Bone Spirit has an additional +10% Critical Strike Chance.

Tags: Macabre, Bone, Damage, Cooldown, Essence, Physical.`,
		id: 82,
		maxPoints: 1,
		x: 1016.045,
		y: 348.86
	},
	"Dreadful Bone Spirit": {
		baseSkill: "Bone Spirit",
		connections: [ "Enhanced Bone Spirit" ],
		description: `After Bone Spirit hits an enemy, you generate 30 Essence over the next 4 seconds.

Tags: Macabre, Bone, Damage, Cooldown, Essence, Physical.`,
		id: 83,
		maxPoints: 1,
		x: 787.835,
		y: 492.635
	},
	"Serration": {
		connections: [ "Rapid Ossification", "Compound Fracture", "Summoning" ],
		description: `Your Bone Skills have a +{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}% increased Critical Strike Chance for each 10 Essence you have upon cast.

Tags: Critical Strikes, Essence, Bone.`,
		id: 84,
		maxPoints: 3,
		x: -3.41,
		y: 280.62
	},
	"Rapid Ossification": {
		connections: [ "Serration", "Evulsion" ],
		description: `Every 100 Essence you spend reduces the cooldowns of your Bone Skills by {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds.

Tags: Essence, Cooldown, Bone.`,
		id: 85,
		maxPoints: 3,
		x: -187.052,
		y: 416.56
	},
	"Evulsion": {
		connections: [ "Compound Fracture", "Rapid Ossification" ],
		description: `Your Bone Skills deal x{6/12/18/24/30/36/42/48/54/60}% increased Critical Strike Damage to Vulnerable enemies.

Tags: Vulnerable, Critical Strikes, Damage, Bone.`,
		id: 86,
		maxPoints: 3,
		x: -3.545,
		y: 558.38
	},
	"Compound Fracture": {
		connections: [ "Serration", "Evulsion" ],
		description: `After Critically Striking 10 times with Bone Skills, your Bone Skills deal x{5/10/15/20/25/30/35/40/45/50}% increased damage for 5 seconds.

Tags: Critical Strikes, Damage, Bone.`,
		id: 87,
		maxPoints: 3,
		x: 183.23,
		y: 416.205
	},
	"Necrotic Carapace": {
		connections: [ "Summoning" ],
		description: `When a Corpse is formed from your Skills or your Minions, Fortify for {2/4/6/8/10/12/14/16/18/20}% Base Life.

Tags: Fortify, Corpse, Minion.`,
		id: 128,
		maxPoints: 3,
		x: 541.815,
		y: 2.895
	},
};

necromancerData["Ultimate"] = {
	"Bonded in Essence": {
		connections: [ "Death's Defense", "Ultimate" ],
		description: `Every 5 seconds, your Skeletal Priest's Healing will Heal your skeletons for {20/40/60/80/100/120/140/160/180/200}% of their Maximum Life.

Tags: Minion, Healing.`,
		id: 89,
		maxPoints: 3,
		x: -293.765,
		y: 208.59
	},
	"Death's Defense": {
		connections: [ "Bonded in Essence", "Inspiring Leader" ],
		description: `Your Minions cannot lose more than {75/50/25/0/-25/-50/-75/-100/-125/-150}% of their Maximum Life from a single damage instance.

Tags: Life, Damage Reduction, Minion.`,
		id: 90,
		maxPoints: 3,
		x: -451.67,
		y: 328.78
	},
	"Inspiring Leader": {
		connections: [ "Hellbent Commander", "Ultimate", "Death's Defense" ],
		description: `After you have been Healthy for at least 4 seconds, you and your Minions gain +{4/8/12/16/20/24/28/32/36/40}% Attack Speed.

Tags: Healthy, Minion, Attack Speed.`,
		id: 129,
		maxPoints: 3,
		x: -606.325,
		y: 83.67
	},
	"Hellbent Commander": {
		connections: [ "Inspiring Leader" ],
		description: `Your Minions deal x{10/20/30/40/50/60/70/80/90/100}% increased damage while you are Close to them.

Tags: Damage, Minion.`,
		id: 91,
		maxPoints: 3,
		x: -805.99,
		y: 208.305
	},
	"Army of the Dead": {
		connections: [ "Prime Army of the Dead", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Call forth the deep buried dead. Volatile Skeletons emerge over the next 7 seconds that explode when around enemies, dealing 30% damage.

Tags: Ultimate, Damage, Cooldown, Physical.`,
		id: 93,
		maxPoints: 1,
		values: [ "90", "54" ],
		x: -591.12,
		y: -96.445
	},
	"Prime Army of the Dead": {
		baseSkill: "Army of the Dead",
		connections: [ "Army of the Dead", "Supreme Army of the Dead" ],
		description: `When Army of the Dead's Volatile Skeletons explode, they have a 15% chance to leave behind a Corpse.

Tags: Ultimate, Damage, Cooldown, Physical.`,
		id: 94,
		maxPoints: 1,
		x: -832.855,
		y: -247.695
	},
	"Supreme Army of the Dead": {
		baseSkill: "Army of the Dead",
		connections: [ "Prime Army of the Dead" ],
		description: `Army of the Dead also raises your Skeletal Warriors and Skeletal Mages.

Tags: Ultimate, Damage, Cooldown, Physical.`,
		id: 95,
		maxPoints: 1,
		x: -1169.725,
		y: -246.42
	},
	"Blood Wave": {
		connections: [ "Prime Blood Wave", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Conjure a tidal wave of blood that deals 90% damage and Knocks Back enemies.

Tags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.`,
		id: 96,
		maxPoints: 1,
		values: [ "50", "30" ],
		x: 0.355,
		y: -282.205
	},
	"Prime Blood Wave": {
		baseSkill: "Blood Wave",
		connections: [ "Blood Wave", "Supreme Blood Wave" ],
		description: `Blood Wave Slows enemies by 50% for 4 seconds.

Tags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.`,
		id: 97,
		maxPoints: 1,
		x: -3.18,
		y: -507.345
	},
	"Supreme Blood Wave": {
		baseSkill: "Blood Wave",
		connections: [ "Prime Blood Wave" ],
		description: `Blood Wave leaves behind 3 Blood Orbs as it travels.

Tags: Ultimate, Blood, Damage, Cooldown, Crowd Control, Physical.`,
		id: 98,
		maxPoints: 1,
		x: -377.265,
		y: -506.98
	},
	"Stand Alone": {
		connections: [ "Memento Mori", "Ultimate" ],
		description: `Increases Damage Reduction by {6/12/18/24/30/36/42/48/54/60}%, reduced by 2% for each active Minion.

Tags: Damage Reduction, Minion.`,
		id: 99,
		maxPoints: 3,
		x: 533.97,
		y: 0.78
	},
	"Memento Mori": {
		connections: [ "Stand Alone" ],
		description: `Sacrificing both Skeletal Warriors and Skeletal Mages increases their Sacrifice bonuses by {20/40/60/80/100/120/140/160/180/200}%.

Tags: Minion.`,
		id: 100,
		maxPoints: 3,
		x: 929.458,
		y: 1.63
	},
	"Bone Storm": {
		connections: [ "Prime Bone Storm", "Ultimate" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
A swirling storm of bones appears around you and your Golem, dealing 180% to surrounding enemies over 10 seconds.

Tags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.`,
		id: 101,
		maxPoints: 1,
		values: [ "60", "40" ],
		x: 3.41,
		y: 307.975
	},
	"Prime Bone Storm": {
		baseSkill: "Bone Storm",
		connections: [ "Bone Storm", "Supreme Bone Storm" ],
		description: `Your Damage Reduction is increased by 15% while Bone Storm is active.

Tags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.`,
		id: 102,
		maxPoints: 1,
		x: -4.345,
		y: 506.955
	},
	"Supreme Bone Storm": {
		baseSkill: "Bone Storm",
		connections: [ "Prime Bone Storm" ],
		description: `Your Critical Strike Chance is increased by +20% while Bone Storm is active.

Tags: Ultimate, Bone, Physical, Cooldown, Damage, Minion.`,
		id: 103,
		maxPoints: 1,
		x: -378.16,
		y: 507.51
	},
	"Golem Mastery": {
		connections: [ "Ultimate" ],
		description: `Increase the damage and Life of your Golem by x{15/30/45/60/75/90/105/120/135/150}%.

Tags: Life, Minion, Damage.`,
		id: 104,
		maxPoints: 3,
		x: -340.515,
		y: -223.78
	},
};

necromancerData["Key Passive"] = {
	"Ossified Essence": {
		connections: [ "Key Passive" ],
		description: `Your Bone Skills deal x1% increased damage for each point of Essence you have above 50 upon cast.

Tags: Damage, Essence, Bone.`,
		id: 105,
		maxPoints: 1,
		x: -4.466,
		y: -320.48
	},
	"Shadowblight": {
		connections: [ "Key Passive" ],
		description: `Shadow Damage infects enemies with Shadowblight for 2 seconds. You and your minions deal x10% bonus damage to enemies with Shadowblight.

Every 10th time an enemy receives Shadow Damage from you or your Minions while they are affected by Shadowblight, they take additional  20% Shadow Damage.

Tags: Damage, Shadow, Minion.`,
		id: 106,
		maxPoints: 1,
		x: -2.974,
		y: 344.505
	},
	"Rathma's Vigor": {
		connections: [ "Key Passive" ],
		description: `Increase your Maximum Life by x10%. After being Healthy for 15 seconds, your next Blood Skill Overpowers.

Tags: Healthy, Overpower, Life, Blood.`,
		id: 107,
		maxPoints: 1,
		x: 659.499,
		y: -0.755
	},
	"Kalan's Edict": {
		connections: [ "Key Passive" ],
		description: `After you have not taken damage in the last 3 seconds, your Minions gain +15% Attack Speed. While you have at least 7 Minions, this bonus is doubled.

Tags: Attack Speed, Minion.`,
		id: 130,
		maxPoints: 1,
		x: -685.026,
		y: -1.45
	},
};

necromancerData["Book of the Dead"] = {
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

export { necromancerData };