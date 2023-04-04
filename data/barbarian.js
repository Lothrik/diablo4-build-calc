let barbarianData = {};

barbarianData["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0
	},
	"Core": {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: -1195.793,
		y: 608.605
	},
	"Defensive": {
		connections: [ "Brawling" ],
		requiredPoints: 6,
		x: 513.061,
		y: 1515.17
	},
	"Brawling": {
		connections: [ "Weapon Mastery" ],
		requiredPoints: 11,
		x: -1196.428,
		y: 2431.825
	},
	"Weapon Mastery": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 508.717,
		y: 3341.88
	},
	"Ultimate": {
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1201.379,
		y: 4252.025
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -6.388,
		y: 4863.1
	},
};

barbarianData["Basic"] = {
	"Bash": {
		connections: [ "Basic", "Enhanced Bash" ],
		description: `Generate Fury: 10
Lucky Hit Chance: {#}%
Bash the enemy with your weapon, dealing {30/33/36/39/42/45/48/51/54/57}% damage. After bashing enemies 4 times, your next Bash will Stun for 1.25 seconds, this increases to 2 seconds if using a Two-Handed weapon.

Tags: Basic, Bludgeoning, Fury, Physical, Damage, Crowd Control, Two-Handed.`,
		id: 0,
		maxPoints: 5,
		values: [ "50" ],
		x: -205.484,
		y: -249.495
	},
	"Enhanced Bash": {
		baseSkill: "Bash",
		connections: [ "Bash", "Battle Bash", "Combat Bash" ],
		description: `Damaging a Stunned enemy with Bash grants you 5% Base Life as Fortify. Double this amount when using a Two-Handed weapon.

Tags: Basic, Bludgeoning, Fury, Physical, Damage, Crowd Control, Two-Handed.`,
		id: 1,
		maxPoints: 1,
		x: -276.815,
		y: -436.63
	},
	"Battle Bash": {
		baseSkill: "Bash",
		connections: [ "Enhanced Bash" ],
		description: `Damaging a Stunned enemy with Bash generates an additional 3 Fury, or 4 Fury if using a Two-Handed weapon.

Tags: Basic, Bludgeoning, Fury, Physical, Damage, Crowd Control, Two-Handed.`,
		id: 2,
		maxPoints: 1,
		x: -423.864,
		y: -544.455
	},
	"Combat Bash": {
		baseSkill: "Bash",
		connections: [ "Enhanced Bash" ],
		description: `After Critically Striking 4 times with Bash using a Two-Handed weapon, your next Core or Weapon Mastery Skill will Overpower.

Tags: Basic, Bludgeoning, Fury, Physical, Damage, Crowd Control, Two-Handed.`,
		id: 3,
		maxPoints: 1,
		x: -160.21,
		y: -548.215
	},
	"Lunging Strike": {
		connections: [ "Basic", "Enhanced Lunging Strike" ],
		description: `Generate Fury: 9
Lucky Hit Chance: {#}%
Lunge forward and strike an enemy for {30/33/36/39/42/45/48/51/54/57}% damage.

Tags: Basic, Damage, Physical, Fury, Movement.`,
		id: 4,
		maxPoints: 5,
		values: [ "50" ],
		x: -557.739,
		y: -96.16
	},
	"Enhanced Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Lunging Strike", "Combat Lunging Strike", "Battle Lunging Strike" ],
		description: `Lunging Strike deals x30% increased damage and Heals you for 2% Maximum Life when it damages a Healthy enemy.

Tags: Basic, Damage, Physical, Fury, Movement.`,
		id: 5,
		maxPoints: 1,
		x: -687.389,
		y: -267.355
	},
	"Combat Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Enhanced Lunging Strike" ],
		description: `Critical Strikes with Lunging Strike grant you Berserking for 1.5 seconds.

Tags: Basic, Damage, Physical, Fury, Movement.`,
		id: 6,
		maxPoints: 1,
		x: -630.918,
		y: -392.32
	},
	"Battle Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Enhanced Lunging Strike" ],
		description: `Lunging Strike also inflicts {20/22/24/26/28/30/32/34/36/38}% Bleeding damage over 5 seconds.

Tags: Basic, Damage, Physical, Fury, Movement.`,
		id: 7,
		maxPoints: 1,
		x: -923.284,
		y: -339.18
	},
	"Frenzy": {
		connections: [ "Basic", "Enhanced Frenzy" ],
		description: `Generate Fury: 4
Lucky Hit Chance: {#}%
Unleash a rapid flurry of blows, dealing {20/22/24/26/28/30/32/34/36/38}% damage with each pair of hits.

If Frenzy hits an enemy, its Attack Speed is increased by +20% for 3 seconds, up to +60%.

Tags: Basic, Dual Wield, Fury, Physical, Damage, Attack Speed.`,
		id: 8,
		maxPoints: 5,
		values: [ "30" ],
		x: 210.912,
		y: -250.91
	},
	"Enhanced Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Frenzy", "Battle Frenzy", "Combat Frenzy" ],
		description: `While Frenzy is granting +60% bonus Attack Speed, it also generates 2 additional Fury.

Tags: Basic, Dual Wield, Fury, Physical, Damage, Attack Speed.`,
		id: 9,
		maxPoints: 1,
		x: 285.5,
		y: -442.24
	},
	"Battle Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Enhanced Frenzy" ],
		description: `While Berserking, your other Skills gain +5% Attack Speed for each stack of Frenzy you have.

Tags: Basic, Dual Wield, Fury, Physical, Damage, Attack Speed.`,
		id: 10,
		maxPoints: 1,
		x: 435.463,
		y: -548.355
	},
	"Combat Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Enhanced Frenzy" ],
		description: `You gain 8% Damage Reduction for each stack of Frenzy you currently have.

Tags: Basic, Dual Wield, Fury, Physical, Damage, Attack Speed.`,
		id: 11,
		maxPoints: 1,
		x: 145.246,
		y: -549.04
	},
	"Flay": {
		connections: [ "Basic", "Enhanced Flay" ],
		description: `Generate Fury: 9
Lucky Hit Chance: {#}%
Flay the enemy, dealing {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% damage and inflicting {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% Bleeding damage over 5 seconds.

Tags: Basic, Bleed, Slashing, Fury, Damage, Physical.`,
		id: 12,
		maxPoints: 5,
		values: [ "50" ],
		x: 561.736,
		y: -94.605
	},
	"Enhanced Flay": {
		baseSkill: "Flay",
		connections: [ "Flay", "Battle Flay", "Combat Flay" ],
		description: `Flay has a 10% chance to make the enemy Vulnerable for 2 seconds. Double this chance when using a Two-Handed weapon.

Tags: Basic, Bleed, Slashing, Fury, Damage, Physical.`,
		id: 13,
		maxPoints: 1,
		x: 721.251,
		y: -266.475
	},
	"Battle Flay": {
		baseSkill: "Flay",
		connections: [ "Enhanced Flay" ],
		description: `When Flay deals direct damage to an enemy, they take x10% increased Bleeding damage from you for the next 3 seconds.

Tags: Basic, Bleed, Slashing, Fury, Damage, Physical.`,
		id: 14,
		maxPoints: 1,
		x: 638.801,
		y: -389.175
	},
	"Combat Flay": {
		baseSkill: "Flay",
		connections: [ "Enhanced Flay" ],
		description: `When Flay deals direct damage to an enemy, you gain 3% Damage Reduction and 50 Thorns for 3 seconds. This stacks up to 4 times.

Tags: Basic, Bleed, Slashing, Fury, Damage, Physical.`,
		id: 15,
		maxPoints: 1,
		x: 946.316,
		y: -322.925
	},
};

barbarianData["Core"] = {
	"Hammer of the Ancients": {
		connections: [ "Core", "Enhanced Hammer of the Ancients" ],
		description: `Fury Cost: {#}
Lucky Hit Chance: {#}%
Slam your hammer down with the fury of the Ancients, dealing {56/61.6/67.2/72.8/78.4/84/89.6/95.2/100.8/106.4}% damage to a concentrated area.

Tags: Core, Bludgeoning, Fury, Physical, Damage, Two-Handed.`,
		id: 16,
		maxPoints: 5,
		values: [ "35", "40" ],
		x: -418.74,
		y: -259.245
	},
	"Enhanced Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Hammer of the Ancients", "Violent Hammer of the Ancients", "Furious Hammer of the Ancients" ],
		description: `Gain x3% more Fury for 5 seconds for each enemy damaged by Hammer of the Ancients, stacking up to 10 times.

Tags: Core, Bludgeoning, Fury, Physical, Damage, Two-Handed.`,
		id: 17,
		maxPoints: 1,
		x: -654.995,
		y: -413.33
	},
	"Violent Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Enhanced Hammer of the Ancients" ],
		description: `After Overpowering with Hammer of the Ancients, you deal x30% more damage for 2.5 seconds.

Tags: Core, Bludgeoning, Fury, Physical, Damage, Two-Handed.`,
		id: 18,
		maxPoints: 1,
		x: -918.03,
		y: -430.69
	},
	"Furious Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Enhanced Hammer of the Ancients" ],
		description: `Hammer of the Ancients deals x1% additional damage for each point of Fury you had when using it.

Tags: Core, Bludgeoning, Fury, Physical, Damage, Two-Handed.`,
		id: 19,
		maxPoints: 1,
		x: -661.27,
		y: -553.505
	},
	"Upheaval": {
		connections: [ "Core", "Enhanced Upheaval" ],
		description: `Fury Cost: {#}
Lucky Hit Chance: {#}%
Tear into the ground with your weapon and fling debris forward, dealing {70/77/84/91/98/105/112/119/126/133}% damage.

Tags: Core, Damage, Physical, Fury, Two-Handed.`,
		id: 20,
		maxPoints: 5,
		values: [ "40", "20" ],
		x: -584.54,
		y: 150.91
	},
	"Enhanced Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Upheaval", "Violent Upheaval", "Furious Upheaval" ],
		description: `Upheaval has a 20% chance to Stun all enemies it damages for 2.5 seconds.

Tags: Core, Damage, Physical, Fury, Two-Handed.`,
		id: 21,
		maxPoints: 1,
		x: -903.275,
		y: 232.2
	},
	"Violent Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Enhanced Upheaval" ],
		description: `If Upheaval damages at least 2 enemies, you gain Berserking for 2 seconds, increased to 3 seconds if it damages at least 4 enemies.

Tags: Core, Damage, Physical, Fury, Two-Handed.`,
		id: 22,
		maxPoints: 1,
		x: -1169.22,
		y: 215.73
	},
	"Furious Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Enhanced Upheaval" ],
		description: `Dealing direct damage to an enemy with a Skill that is not Upheaval causes your next cast of Upheaval to deal x8% increased damage, stacking up to 10 times.

Tags: Core, Damage, Physical, Fury, Two-Handed.`,
		id: 23,
		maxPoints: 1,
		x: -1021.685,
		y: 367.49
	},
	"Double Swing": {
		connections: [ "Core", "Enhanced Double Swing" ],
		description: `Fury Cost: {#}
Lucky Hit Chance: {#}%
Sweep your weapons from opposite directions, dealing {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% damage with each weapon. Enemies caught in the center are damaged by both.

Tags: Core, Dual Wield, Damage, Physical, Fury.`,
		id: 24,
		maxPoints: 5,
		values: [ "25", "30" ],
		x: -271.825,
		y: 307.88
	},
	"Enhanced Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Double Swing", "Furious Double Swing", "Violent Double Swing" ],
		description: `If Double Swing damages a Stunned or Knocked Down enemy, gain 15 Fury.

Tags: Core, Dual Wield, Damage, Physical, Fury.`,
		id: 25,
		maxPoints: 1,
		x: -458.17,
		y: 495.325
	},
	"Furious Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Enhanced Double Swing" ],
		description: `Casting Double Swing while Berserking grants 2 additional seconds of Berserking.

Tags: Core, Dual Wield, Damage, Physical, Fury.`,
		id: 26,
		maxPoints: 1,
		x: -713.785,
		y: 545.495
	},
	"Violent Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Enhanced Double Swing" ],
		description: `Hitting an enemy with both hits of Double Swing makes them Vulnerable for 1 second.

Tags: Core, Dual Wield, Damage, Physical, Fury.`,
		id: 27,
		maxPoints: 1,
		x: -418.57,
		y: 639.185
	},
	"Pressure Point": {
		connections: [ "Core" ],
		description: `Lucky Hit: Your Core skills have up to a {10/20/30/40/50/60/70/80/90/100}% chance to make enemies Vulnerable for 2 seconds.

Tags: Vulnerable, Core, Lucky Hit.`,
		id: 28,
		maxPoints: 3,
		x: -584.87,
		y: -96.25
	},
	"Rend": {
		connections: [ "Core", "Enhanced Rend" ],
		description: `Fury Cost: {#}
Lucky Hit Chance: {#}%
Cleave enemies in front of you, dealing {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% damage and inflicting {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% Bleeding damage over 5 seconds.

Tags: Core, Bleed, Damage, Physical, Fury, Slashing.`,
		id: 29,
		maxPoints: 5,
		values: [ "35", "33" ],
		x: 517.835,
		y: 0.645
	},
	"Enhanced Rend": {
		baseSkill: "Rend",
		connections: [ "Rend", "Violent Rend", "Furious Rend" ],
		description: `Dealing direct damage with Rend extends the duration of Vulnerable on enemies by 2 seconds.

Tags: Core, Bleed, Damage, Physical, Fury, Slashing.`,
		id: 30,
		maxPoints: 1,
		x: 903.276,
		y: 1.13
	},
	"Violent Rend": {
		baseSkill: "Rend",
		connections: [ "Enhanced Rend" ],
		description: `Rend deals x12% increased damage to Vulnerable enemies.

Tags: Core, Bleed, Damage, Physical, Fury, Slashing.`,
		id: 31,
		maxPoints: 1,
		x: 1115.578,
		y: -88.96
	},
	"Furious Rend": {
		baseSkill: "Rend",
		connections: [ "Enhanced Rend" ],
		description: `Direct damage with Rend grants 4 Fury per enemy hit, up to a maximum of 20 Fury.

Tags: Core, Bleed, Damage, Physical, Fury, Slashing.`,
		id: 32,
		maxPoints: 1,
		x: 1113.346,
		y: 83.49
	},
	"Whirlwind": {
		connections: [ "Core", "Enhanced Whirlwind" ],
		description: `Fury Cost: {#} per second
Lucky Hit Chance: {#}%
Rapidly attack surrounding enemies for {13/14.3/15.6/16.9/18.2/19.5/20.8/22.1/23.4/24.7}% damage.

Tags: Core, Channeled, Fury, Physical, Damage.`,
		id: 33,
		maxPoints: 5,
		values: [ "20", "20" ],
		x: -0.76,
		y: -323.275
	},
	"Enhanced Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Whirlwind", "Furious Whirlwind", "Violent Whirlwind" ],
		description: `Gain 1 Fury each time Whirlwind deals direct damage to an enemy, or 3 Fury against Elite enemies.

Tags: Core, Channeled, Fury, Physical, Damage.`,
		id: 34,
		maxPoints: 1,
		x: 0.875,
		y: -533.645
	},
	"Furious Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Enhanced Whirlwind" ],
		description: `While using a Slashing weapon, Whirlwind also inflicts 20% of its Base damage as Bleeding damage over 5 seconds.

Tags: Core, Channeled, Fury, Physical, Damage.`,
		id: 35,
		maxPoints: 1,
		x: 157.99,
		y: -638.195
	},
	"Violent Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Enhanced Whirlwind" ],
		description: `After using Whirlwind for 2 seconds, Whirlwind deals x30% increased damage until it is cancelled.

Tags: Core, Channeled, Fury, Physical, Damage.`,
		id: 36,
		maxPoints: 1,
		x: -154.095,
		y: -636.49
	},
	"Endless Fury": {
		connections: [ "Core" ],
		description: `Basic Skills generate x{5/10/15/20/25/30/35/40/45/50}% more Fury when using Two-Handed weapons.

Tags: Fury, Basic, Two-Handed.`,
		id: 37,
		maxPoints: 3,
		x: 176.84,
		y: 315.55
	},
};

barbarianData["Defensive"] = {
	"Challenging Shout": {
		connections: [ "Defensive", "Enhanced Challenging Shout" ],
		description: `Cooldown: {#} seconds
Taunt Nearby enemies and gain {#}% Damage Reduction for 8 seconds.

Tags: Defensive, Shout, Crowd Control, Damage Reduction, Cooldown.`,
		id: 38,
		maxPoints: 5,
		values: [ "25", "{40/45/50/55/60}" ],
		x: 1.54,
		y: 310.475
	},
	"Enhanced Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Challenging Shout", "Strategic Challenging Shout", "Tactical Challenging Shout" ],
		description: `While Challenging Shout is active, gain x20% bonus Maximum Life.

Tags: Defensive, Shout, Crowd Control, Damage Reduction, Cooldown.`,
		id: 39,
		maxPoints: 1,
		x: 1.835,
		y: 515.956
	},
	"Strategic Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Enhanced Challenging Shout" ],
		description: `While Challenging Shout is active, gain Thorns equal to 50% of your Maximum Life.

Tags: Defensive, Shout, Crowd Control, Damage Reduction, Cooldown.`,
		id: 40,
		maxPoints: 1,
		x: 178.71,
		y: 629.341
	},
	"Tactical Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Enhanced Challenging Shout" ],
		description: `While Challenging Shout is active, you gain 3 Fury each time you take damage.

Tags: Defensive, Shout, Crowd Control, Damage Reduction, Cooldown.`,
		id: 41,
		maxPoints: 1,
		x: -169.118,
		y: 631.547
	},
	"Iron Skin": {
		connections: [ "Defensive", "Enhanced Iron Skin" ],
		description: `Cooldown: {#} seconds
Steel yourself, gaining a Barrier that absorbs {50/55/60/65/70/75/80/85/90/95}% of your missing Life for 5 seconds.

Tags: Defensive, Barrier, Cooldown, Life.`,
		id: 42,
		maxPoints: 5,
		values: [ "14" ],
		x: 573.26,
		y: 125.615
	},
	"Enhanced Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Iron Skin", "Tactical Iron Skin", "Strategic Iron Skin" ],
		description: `Iron Skin's Barrier absorbs 5% more of your Maximum Life.

Tags: Defensive, Barrier, Cooldown, Life.`,
		id: 43,
		maxPoints: 1,
		x: 918.56,
		y: 221.9
	},
	"Tactical Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Enhanced Iron Skin" ],
		description: `While Iron Skin is active, Heal for 10% of the Barrier's original amount as Life per second.

Tags: Defensive, Barrier, Cooldown, Life.`,
		id: 44,
		maxPoints: 1,
		x: 1063.14,
		y: 337.895
	},
	"Strategic Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Enhanced Iron Skin" ],
		description: `Iron Skin also grants 9% Base Life as Fortify. Double this amount if cast while below 50% Life.

Tags: Defensive, Barrier, Cooldown, Life.`,
		id: 45,
		maxPoints: 1,
		x: 1176.1,
		y: 176.81
	},
	"Outburst": {
		connections: [ "Defensive", "Tough as Nails" ],
		description: `Gain {20/40/60/80/100/120/140/160/180/200} Thorns. Also gain 20 Thorns for each 25 bonus Maximum Life you have.

Tags: Life, Thorns.`,
		id: 46,
		maxPoints: 3,
		x: 357.46,
		y: 279.435
	},
	"Tough as Nails": {
		connections: [ "Outburst" ],
		description: `Increase your Thorns by +{20/40/60/80/100/120/140/160/180/200}%. When enemies hit you, they take an additional 1% of your Thorns as Bleeding damage over 5 seconds.

Tags: Bleed, Thorns, Damage.`,
		id: 47,
		maxPoints: 3,
		x: 495.69,
		y: 445.865
	},
	"Ground Stomp": {
		connections: [ "Defensive", "Enhanced Ground Stomp" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Smash the ground, dealing {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% damage and Stunning surrounding enemies for {#} seconds.

Tags: Defensive, Crowd Control, Damage, Physical, Cooldown.`,
		id: 48,
		maxPoints: 5,
		values: [ "16", "33", "10" ],
		x: 4.675,
		y: -306.735
	},
	"Enhanced Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Ground Stomp", "Tactical Ground Stomp", "Strategic Ground Stomp" ],
		description: `Increase Ground Stomp's duration by 1 second.

Tags: Defensive, Crowd Control, Damage, Physical, Cooldown.`,
		id: 49,
		maxPoints: 1,
		x: -2.235,
		y: -518.305
	},
	"Tactical Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Enhanced Ground Stomp" ],
		description: `Ground Stomp generates 25 Fury.

Tags: Defensive, Crowd Control, Damage, Physical, Cooldown.`,
		id: 50,
		maxPoints: 1,
		x: -158.388,
		y: -643.565
	},
	"Strategic Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Enhanced Ground Stomp" ],
		description: `Reduce the Cooldown of your Ultimate Skill by 1 second for each enemy damaged by Ground Stomp.

Tags: Defensive, Crowd Control, Damage, Physical, Cooldown.`,
		id: 51,
		maxPoints: 1,
		x: 147.985,
		y: -644.43
	},
	"Rallying Cry": {
		connections: [ "Defensive", "Enhanced Rallying Cry" ],
		description: `Cooldown: {#} seconds
Bellow a rallying cry, increasing your Movement Speed by +{#}% and Resource Generation by x{#}% for 6 seconds, and Nearby allies for 3 seconds.

Tags: Defensive, Shout, Fury, Movement, Cooldown.`,
		id: 52,
		maxPoints: 5,
		values: [ "25", "30", "50" ],
		x: 571.525,
		y: -107.125
	},
	"Enhanced Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Rallying Cry", "Strategic Rallying Cry", "Tactical Rallying Cry" ],
		description: `Rallying Cry grants you Unstoppable while active.

Tags: Defensive, Shout, Fury, Movement, Cooldown.`,
		id: 53,
		maxPoints: 1,
		x: 908.815,
		y: -187.395
	},
	"Strategic Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Enhanced Rallying Cry" ],
		description: `Rallying Cry grants you 10% Base Life as Fortify. While Rallying Cry is active, you gain an additional 2% Base Life as Fortify each time you take or deal direct damage.

Tags: Defensive, Shout, Fury, Movement, Cooldown.`,
		id: 54,
		maxPoints: 1,
		x: 1169.235,
		y: -153.51
	},
	"Tactical Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Enhanced Rallying Cry" ],
		description: `Rallying Cry generates 25 Fury and grants you an additional x50% Resource Generation.

Tags: Defensive, Shout, Fury, Movement, Cooldown.`,
		id: 55,
		maxPoints: 1,
		x: 1044.75,
		y: -301.6
	},
	"Imposing Presence": {
		connections: [ "Defensive", "Martial Vigor" ],
		description: `Gain x{5/10/15/20/25/30/35/40/45/50}% additional Maximum Life.

Tags: Life.`,
		id: 56,
		maxPoints: 3,
		x: 362.14,
		y: -272.12
	},
	"Martial Vigor": {
		connections: [ "Imposing Presence" ],
		description: `Damage Reduction against Elites is increased by {4/8/12/16/20/24/28/32/36/40}%.

Tags: Damage Reduction, Elite Monsters.`,
		id: 57,
		maxPoints: 3,
		x: 495.85,
		y: -440.32
	},
};

barbarianData["Brawling"] = {
	"Charge": {
		connections: [ "Brawling", "Enhanced Charge" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Become Unstoppable and rush forward, pushing enemies with you then swinging through them for {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage and Knocking them Back.

Tags: Brawling, Unstoppable, Crowd Control, Damage, Physical, Cooldown.`,
		id: 58,
		maxPoints: 5,
		values: [ "17", "33" ],
		x: -652.69,
		y: 158.534
	},
	"Enhanced Charge": {
		baseSkill: "Charge",
		connections: [ "Charge", "Power Charge", "Mighty Charge" ],
		description: `Enemies who are Knocked Back into terrain by Charge take 15% damage and are Stunned for 3 seconds.

Tags: Brawling, Unstoppable, Crowd Control, Damage, Physical, Cooldown.`,
		id: 59,
		maxPoints: 1,
		x: -1012.34,
		y: 235.537
	},
	"Power Charge": {
		baseSkill: "Charge",
		connections: [ "Enhanced Charge" ],
		description: `Reduce Charge's Cooldown by 3 seconds if it Knocks Back an enemy into terrain.

Tags: Brawling, Unstoppable, Crowd Control, Damage, Physical, Cooldown.`,
		id: 60,
		maxPoints: 1,
		x: -1272.485,
		y: 209.457
	},
	"Mighty Charge": {
		baseSkill: "Charge",
		connections: [ "Enhanced Charge" ],
		description: `Damaging enemies with Charge makes them Vulnerable for 2 seconds.

Tags: Brawling, Unstoppable, Crowd Control, Damage, Physical, Cooldown.`,
		id: 61,
		maxPoints: 1,
		x: -1146.62,
		y: 364.822
	},
	"War Cry": {
		connections: [ "Brawling", "Enhanced War Cry" ],
		description: `Cooldown: {#} seconds
Bellow a mighty war cry, increasing your damage dealt by x{#}% for 8 seconds, and Nearby allies for 4 seconds.

Tags: Brawling, Shout, Damage, Cooldown.`,
		id: 62,
		maxPoints: 5,
		values: [ "25", "15.0" ],
		x: -401.86,
		y: -211.156
	},
	"Enhanced War Cry": {
		baseSkill: "War Cry",
		connections: [ "War Cry", "Power War Cry", "Mighty War Cry" ],
		description: `War Cry grants you Berserking for 4 seconds.

Tags: Brawling, Shout, Damage, Cooldown.`,
		id: 63,
		maxPoints: 1,
		x: -698.5,
		y: -341.465
	},
	"Power War Cry": {
		baseSkill: "War Cry",
		connections: [ "Enhanced War Cry" ],
		description: `If at least 6 enemies are Nearby when you cast War Cry, your damage bonus is increased to x{#}%.

Tags: Brawling, Shout, Damage, Cooldown.`,
		id: 64,
		maxPoints: 1,
		values: [ "30" ],
		x: -972.08,
		y: -339.504
	},
	"Mighty War Cry": {
		baseSkill: "War Cry",
		connections: [ "Enhanced War Cry" ],
		description: `War Cry grants you 28% Base Life as Fortify.

Tags: Brawling, Shout, Damage, Cooldown.`,
		id: 65,
		maxPoints: 1,
		x: -768.515,
		y: -486.19
	},
	"Booming Voice": {
		connections: [ "Brawling", "Raid Leader", "Guttural Yell" ],
		description: `Your Shout Skill effect durations are increased by x{10/20/30/40/50/60/70/80/90/100}%.

Tags: Shout.`,
		id: 66,
		maxPoints: 3,
		x: -659.44,
		y: -63.313
	},
	"Raid Leader": {
		connections: [ "Booming Voice" ],
		description: `Your Shouts also Heal allies for {1/2/3/4/5/6/7/8/9/10}% of their Maximum Life per second.

Tags: Shout, Healing.`,
		id: 67,
		maxPoints: 3,
		x: -933.825,
		y: -146.157
	},
	"Guttural Yell": {
		connections: [ "Booming Voice" ],
		description: `Your Shout Skills cause enemies to deal {8/16/24/32/40/48/56/64/72/80}% less damage for 5 seconds.

Tags: Damage Reduction.`,
		id: 68,
		maxPoints: 3,
		x: -942.85,
		y: 22.136
	},
	"Leap": {
		connections: [ "Brawling", "Enhanced Leap" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Leap forward and then slam down, dealing {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% damage and Knocking Back surrounding enemies on impact.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		id: 69,
		maxPoints: 5,
		values: [ "17", "33" ],
		x: -402.935,
		y: 315.986
	},
	"Enhanced Leap": {
		baseSkill: "Leap",
		connections: [ "Leap", "Mighty Leap", "Power Leap" ],
		description: `If Leap doesn't damage any enemies, its Cooldown is reduced by 4 seconds.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		id: 70,
		maxPoints: 1,
		x: -623.595,
		y: 476.895
	},
	"Mighty Leap": {
		baseSkill: "Leap",
		connections: [ "Enhanced Leap" ],
		description: `Enemies damaged by Leap are Slowed by 50% for 5 seconds.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		id: 71,
		maxPoints: 1,
		x: -623.425,
		y: 626.645
	},
	"Power Leap": {
		baseSkill: "Leap",
		connections: [ "Enhanced Leap" ],
		description: `If Leap damages at least one enemy, gain 40 Fury.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		id: 72,
		maxPoints: 1,
		x: -893.655,
		y: 505.577
	},
	"Kick": {
		connections: [ "Enhanced Kick", "Brawling" ],
		description: `Charges: 2
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Throw a powerful kick that deals 18% damage and Knocks Back enemies in front of you. Enemies who are Knocked Back into terrain take an additional 54% damage and are Stunned for 3 seconds.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		id: 73,
		maxPoints: 5,
		values: [ "17", "100" ],
		x: -3.2,
		y: -277.614
	},
	"Enhanced Kick": {
		baseSkill: "Kick",
		connections: [ "Kick", "Mighty Kick", "Power Kick" ],
		description: `Damaging enemies with Kick makes them Vulnerable for 4 seconds.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		id: 74,
		maxPoints: 1,
		x: -3.035,
		y: -483.68
	},
	"Mighty Kick": {
		baseSkill: "Kick",
		connections: [ "Enhanced Kick" ],
		description: `Kicked enemies deal 54% damage to enemies they collide with while being Knocked Back. Enemies damaged this way are Knocked Down for 2 seconds.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		id: 75,
		maxPoints: 1,
		x: -174.78,
		y: -602.08
	},
	"Power Kick": {
		baseSkill: "Kick",
		connections: [ "Enhanced Kick" ],
		description: `If Kick damages an enemy, it consumes all of your Fury and deals an additional 20% damage per 10 Fury spent. Kick no longer Knocks Back enemies.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		id: 76,
		maxPoints: 1,
		x: 172.96,
		y: -598.935
	},
	"Aggressive Resistance": {
		connections: [ "Prolific Fury", "Battle Fervor", "Brawling" ],
		description: `Gain {4/8/12/16/20/24/28/32/36/40}% Damage Reduction while Berserking.

Tags: Berserking, Damage Reduction.`,
		id: 77,
		maxPoints: 3,
		x: -0.385,
		y: 314.173
	},
	"Prolific Fury": {
		connections: [ "Aggressive Resistance" ],
		description: `While Berserking, Fury Generation is increased by x{6/12/18/24/30/36/42/48/54/60}%.

Tags: Berserking, Fury.`,
		id: 78,
		maxPoints: 3,
		x: 171.72,
		y: 479.91
	},
	"Battle Fervor": {
		connections: [ "Aggressive Resistance" ],
		description: `When a Brawling Skill damages at least one enemy, gain Berserking for {1/2/3/4/5/6/7/8/9/10} seconds.

Tags: Berserking, Brawling.`,
		id: 125,
		maxPoints: 3,
		x: -170.435,
		y: 479.412
	},
	"Swiftness": {
		connections: [ "Brawling", "Quick Impulses" ],
		description: `Movement Speed is increased by +{4/8/12/16/20/24/28/32/36/40}%.

Tags: Movement.`,
		id: 80,
		maxPoints: 3,
		x: 530.265,
		y: 0.354
	},
	"Quick Impulses": {
		connections: [ "Swiftness" ],
		description: `Reduce the duration of Control Impairing Effects by {6/12/18/24/30/36/42/48/54/60}%.

Tags: Crowd Control.`,
		id: 81,
		maxPoints: 3,
		x: 912.579,
		y: 1.565
	},
};

barbarianData["Weapon Mastery"] = {
	"Steel Grasp": {
		connections: [ "Weapon Mastery", "Enhanced Steel Grasp" ],
		description: `Charges: {#}
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Throw out a trio of chains that deal {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% damage and Pull In enemies.

Tags: Weapon Mastery, Crowd Control, Damage, Physical, Cooldown.`,
		id: 82,
		maxPoints: 5,
		values: [ "2", "11", "25" ],
		x: 416.495,
		y: 219.35
	},
	"Enhanced Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Steel Grasp", "Warrior's Steel Grasp", "Fighter's Steel Grasp" ],
		description: `Steel Grasp also makes enemies Vulnerable for 2.5 seconds.

Tags: Weapon Mastery, Crowd Control, Damage, Physical, Cooldown.`,
		id: 83,
		maxPoints: 1,
		x: 686.125,
		y: 352.175
	},
	"Warrior's Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Enhanced Steel Grasp" ],
		description: `Steel Grasp gains 1 additional Charge.

Tags: Weapon Mastery, Crowd Control, Damage, Physical, Cooldown.`,
		id: 84,
		maxPoints: 1,
		x: 753.34,
		y: 495.51
	},
	"Fighter's Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Enhanced Steel Grasp" ],
		description: `If Steel Grasp damages an enemy, gain Berserking for 2 seconds.

Tags: Weapon Mastery, Crowd Control, Damage, Physical, Cooldown.`,
		id: 85,
		maxPoints: 1,
		x: 945.955,
		y: 357.905
	},
	"Thick Skin": {
		connections: [ "Weapon Mastery", "Counteroffensive", "Defensive Stance" ],
		description: `Each time you take direct damage gain {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% Base Life as Fortify.

Tags: Fortify.`,
		id: 86,
		maxPoints: 3,
		x: 0.22,
		y: 334.475
	},
	"Counteroffensive": {
		connections: [ "Thick Skin" ],
		description: `While you have Fortify for over 50% of your Maximum Life, you deal x{5/10/15/20/25/30/35/40/45/50}% increased damage.

Tags: Fortify, Life, Damage.`,
		id: 87,
		maxPoints: 3,
		x: 156.02,
		y: 483.6
	},
	"Defensive Stance": {
		connections: [ "Thick Skin" ],
		description: `Increase the Damage Reduction gained while you are Fortified by an additional {3/6/9/12/15/18/21/24/27/30}%.

Tags: Fortify, Damage Reduction.`,
		id: 126,
		maxPoints: 3,
		x: -158.837,
		y: 482.93
	},
	"Death Blow": {
		connections: [ "Weapon Mastery", "Enhanced Death Blow" ],
		description: `Charges: 2
Charge Cooldown: {#} seconds
Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Attempt a killing strike, dealing {120/132/144/156/168/180/192/204/216/228}% damage to enemies in front of you.

If this kills an enemy, its Cooldown is reset.

Tags: Weapon Mastery, Damage, Physical, Cooldown.`,
		id: 89,
		maxPoints: 5,
		values: [ "15", "15", "50" ],
		x: -528.139,
		y: -0.735
	},
	"Enhanced Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Death Blow", "Warrior's Death Blow", "Fighter's Death Blow" ],
		description: `Death Blow deals x100% increased damage to Bosses.

Tags: Weapon Mastery, Damage, Physical, Cooldown.`,
		id: 90,
		maxPoints: 1,
		x: -923.053,
		y: -0.575
	},
	"Warrior's Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Enhanced Death Blow" ],
		description: `If Death Blow damages at least one enemy, gain Berserking for 3 seconds.

Tags: Weapon Mastery, Damage, Physical, Cooldown.`,
		id: 91,
		maxPoints: 1,
		x: -1133.18,
		y: 99.26
	},
	"Fighter's Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Enhanced Death Blow" ],
		description: `If Death Blow damages at least one enemy, gain 20 Fury.

Tags: Weapon Mastery, Damage, Physical, Cooldown.`,
		id: 92,
		maxPoints: 1,
		x: -1132.87,
		y: -94.525
	},
	"Pit Fighter": {
		connections: [ "Weapon Mastery", "Slaying Strike", "No Mercy" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Close enemies and gain {2/4/6/8/10/12/14/16/18/20}% Distant Damage Reduction.

Tags: Damage Reduction, Damage.`,
		id: 93,
		maxPoints: 3,
		x: 0.37,
		y: -340.528
	},
	"Slaying Strike": {
		connections: [ "Pit Fighter", "Expose Vulnerability" ],
		description: `You deal x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% increased damage against Injured enemies.

Tags: Injured, Damage.`,
		id: 94,
		maxPoints: 3,
		x: 203.61,
		y: -473.84
	},
	"Expose Vulnerability": {
		connections: [ "No Mercy", "Slaying Strike" ],
		description: `Dealing direct damage with a Weapon Mastery skill causes your next Core Skill to make enemies Vulnerable for {1/2/3/4/5/6/7/8/9/10} seconds.

Tags: Vulnerable, Core, Weapon Mastery.`,
		id: 95,
		maxPoints: 3,
		x: -0.085,
		y: -594.703
	},
	"No Mercy": {
		connections: [ "Expose Vulnerability", "Pit Fighter" ],
		description: `You have +{3/6/9/12/15/18/21/24/27/30}% increased Critical Strike chance against Immobilized, Stunned, or Slowed enemies.

Tags: Critical Strikes, Crowd Control.`,
		id: 96,
		maxPoints: 3,
		x: -194.839,
		y: -469.563
	},
	"Rupture": {
		connections: [ "Enhanced Rupture", "Weapon Mastery" ],
		description: `Cooldown: {#} seconds
Charges: 2
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Skewer enemies in front of you, dealing 13% damage, then rip your weapon out, damaging enemies for their total Bleeding amount and removing all Bleeding damage from them.

Tags: Weapon Mastery, Bleed, Damage, Physical, Cooldown, Slashing.`,
		id: 97,
		maxPoints: 5,
		values: [ "10", "10", "50" ],
		x: 408.44,
		y: -222.34
	},
	"Enhanced Rupture": {
		baseSkill: "Rupture",
		connections: [ "Rupture", "Fighter's Rupture", "Warrior's Rupture" ],
		description: `Ripping your weapon out of enemies during Rupture causes an explosion that deals 30% Bleeding damage over 5 seconds.

Tags: Weapon Mastery, Bleed, Damage, Physical, Cooldown, Slashing.`,
		id: 98,
		maxPoints: 1,
		x: 672.735,
		y: -379.125
	},
	"Fighter's Rupture": {
		baseSkill: "Rupture",
		connections: [ "Enhanced Rupture" ],
		description: `Hitting at least 1 enemy with Rupture Heals you for 15% of your Maximum Life.

Tags: Weapon Mastery, Bleed, Damage, Physical, Cooldown, Slashing.`,
		id: 99,
		maxPoints: 1,
		x: 962.76,
		y: -398.403
	},
	"Warrior's Rupture": {
		baseSkill: "Rupture",
		connections: [ "Enhanced Rupture" ],
		description: `Hitting enemies with Rupture increases your Attack Speed by +20% for 4 seconds.

Tags: Weapon Mastery, Bleed, Damage, Physical, Cooldown, Slashing.`,
		id: 100,
		maxPoints: 1,
		x: 674.33,
		y: -520.847
	},
	"Hamstring": {
		connections: [ "Cut to the Bone", "Weapon Mastery" ],
		description: `Your Bleeding effects Slow enemies by {10/20/30/40/50/60/70/80/90/100}%.

Tags: Bleed, Crowd Control.`,
		id: 101,
		maxPoints: 3,
		x: 480.67,
		y: 0.455
	},
	"Cut to the Bone": {
		connections: [ "Hamstring" ],
		description: `Your Bleeding effects deal x{6/12/18/24/30/36/42/48/54/60}% increased damage to Vulnerable enemies.

Tags: Vulnerable, Bleed, Damage.`,
		id: 102,
		maxPoints: 3,
		x: 856.285,
		y: 0.4
	},
};

barbarianData["Ultimate"] = {
	"Call of the Ancients": {
		connections: [ "Ultimate", "Prime Call of the Ancients" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Call upon 3 Ancients to aid you in battle for 6 seconds.
• Korlic leaps at enemies, dealing 104% damage and swings his weapons in a frenzy, dealing 39% damage per hit.
• Talic spins in a whirlwind rapidly attacking enemies for 65% damage.
• Madawc upheaves the ground, dealing 195% damage.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		id: 103,
		maxPoints: 1,
		values: [ "50", "30" ],
		x: -2.535,
		y: -280.23
	},
	"Prime Call of the Ancients": {
		baseSkill: "Call of the Ancients",
		connections: [ "Supreme Call of the Ancients", "Call of the Ancients" ],
		description: `While Call of the Ancients is active, gain +10% bonus Attack Speed and x10% increased damage.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		id: 104,
		maxPoints: 1,
		x: 2.05,
		y: -481.575
	},
	"Supreme Call of the Ancients": {
		baseSkill: "Call of the Ancients",
		connections: [ "Prime Call of the Ancients" ],
		description: `Each of the Ancients gains additional power:
Korlic: You gain 10 Fury each time Korlic damages an enemy with his Frenzy.
Talic: Enemies are Slowed by 50% for 1 second when damaged by his Whirlwind.
Madawc: 30% chance to Stun enemies for 3 seconds when using his Upheaval.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		id: 105,
		maxPoints: 1,
		x: 6.2,
		y: -644.245
	},
	"Iron Maelstrom": {
		connections: [ "Ultimate", "Prime Iron Maelstrom" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Activate three times to attach chains to each of your weapons and perform an attack:
• First your Two-Handed Bludgeoning weapon slams into the ground, dealing 60% damage and Stunning enemies for 2 seconds.
• Second your Two-Handed Slashing weapon swipes in front of you, dealing 20% damage and inflicting 120% Bleeding damage over 5 seconds.
• Third your Dual Wield weapons swing around you, dealing 32.5% damage per hit.

Tags: Ultimate, Crowd Control, Bleed, Damage, Physical, Cooldown, Two-Handed, Bludgeoning, Dual Wield, Slashing.`,
		id: 106,
		maxPoints: 1,
		values: [ "60", "40" ],
		x: -539.3,
		y: -1.915
	},
	"Prime Iron Maelstrom": {
		baseSkill: "Iron Maelstrom",
		connections: [ "Supreme Iron Maelstrom", "Iron Maelstrom" ],
		description: `Iron Maelstrom gains +10% increased Critical Strike Chance and deals x20% increased Critical Strike Damage

Tags: Ultimate, Crowd Control, Bleed, Damage, Physical, Cooldown, Two-Handed, Bludgeoning, Dual Wield, Slashing.`,
		id: 107,
		maxPoints: 1,
		x: -913.285,
		y: -2.255
	},
	"Supreme Iron Maelstrom": {
		baseSkill: "Iron Maelstrom",
		connections: [ "Prime Iron Maelstrom" ],
		description: `Dealing direct damage to an enemy after swapping weapons reduces Iron Maelstrom's Cooldown by 1 second.

Tags: Ultimate, Crowd Control, Bleed, Damage, Physical, Cooldown, Two-Handed, Bludgeoning, Dual Wield, Slashing.`,
		id: 108,
		maxPoints: 1,
		x: -1218.25,
		y: -2.685
	},
	"Duelist": {
		connections: [ "Ultimate" ],
		description: `Attack Speed is increased by +{3/6/9/12/15/18/21/24/27/30}% while using One-Handed weapons.

Tags: Attack Speed, Dual Wield.`,
		id: 109,
		maxPoints: 3,
		x: -396.295,
		y: -207.635
	},
	"Wrath of the Berserker": {
		connections: [ "Ultimate", "Prime Wrath of the Berserker" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Gain Berserking and Unstoppable for 5 seconds.  For the next 10 seconds, dealing direct damage with Basic Skills grants Berserking for 5 seconds.

Tags: Ultimate, Unstoppable, Berserking, Cooldown, Basic.`,
		id: 110,
		maxPoints: 1,
		values: [ "60", "40" ],
		x: 4.845,
		y: 277.735
	},
	"Prime Wrath of the Berserker": {
		baseSkill: "Wrath of the Berserker",
		connections: [ "Supreme Wrath of the Berserker", "Wrath of the Berserker" ],
		description: `While Wrath of the Berserker is active, gain +20% increased Movement Speed and increase Fury Generation by x30%.

Tags: Ultimate, Unstoppable, Berserking, Cooldown, Basic.`,
		id: 112,
		maxPoints: 1,
		x: 2.985,
		y: 475.01
	},
	"Supreme Wrath of the Berserker": {
		baseSkill: "Wrath of the Berserker",
		connections: [ "Prime Wrath of the Berserker" ],
		description: `While Wrath of the Berserker is active, every 50 Fury you spend increases Berserk's damage bonus by x25%.

Tags: Ultimate, Unstoppable, Berserking, Cooldown, Basic.`,
		id: 111,
		maxPoints: 1,
		x: 3.835,
		y: 647.065
	},
	"Tempered Fury": {
		connections: [ "Ultimate", "Invigorating Fury", "Furious Impulse" ],
		description: `Increase your Maximum Fury by {3/6/9/12/15/18/21/24/27/30}.

Tags: Fury.`,
		id: 113,
		maxPoints: 3,
		x: -448.63,
		y: 231.255
	},
	"Invigorating Fury": {
		connections: [ "Tempered Fury" ],
		description: `Heal for {3/6/9/12/15/18/21/24/27/30}% of your Maximum Life for each 100 Fury spent.

Tags: Fury, Healing.`,
		id: 114,
		maxPoints: 3,
		x: -452.625,
		y: 418.48
	},
	"Furious Impulse": {
		connections: [ "Tempered Fury" ],
		description: `Each time you swap weapons, gain {2/4/6/8/10/12/14/16/18/20} Fury.

Tags: Fury.`,
		id: 115,
		maxPoints: 3,
		x: -772.395,
		y: 233.415
	},
	"Wallop": {
		connections: [ "Ultimate", "Brute Force", "Concussion" ],
		description: `Your Skills using Bludgeoning weapons deal x{5/10/15/20/25/30/35/40/45/50}% increased damage if the enemy is Stunned or Vulnerable.

Tags: Vulnerable, Crowd Control, Bludgeoning, Damage.`,
		id: 116,
		maxPoints: 3,
		x: 577.06,
		y: 69.045
	},
	"Brute Force": {
		connections: [ "Wallop", "Heavy Handed" ],
		description: `Your Overpowers deal x{15/30/45/60/75/90/105/120/135/150}% increased damage when using a Two-Handed weapon.

Tags: Overpower, Damage, Two-Handed.`,
		id: 117,
		maxPoints: 3,
		x: 857.583,
		y: -7.82
	},
	"Heavy Handed": {
		connections: [ "Ultimate", "Brute Force" ],
		description: `While using Two-Handed weapons you deal x{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Damage.

Tags: Critical Strikes, Damage, Two-Handed.`,
		id: 118,
		maxPoints: 3,
		x: 582.895,
		y: -81.46
	},
	"Concussion": {
		connections: [ "Wallop" ],
		description: `Lucky Hit: Skills using Bludgeoning weapons have up to a {10/20/30/40/50/60/70/80/90/100}% chance to Stun enemies for 3 seconds, or up to a {15/30/45/60/75/90/105/120/135/150}% chance when using a Two-Handed Bludgeoning weapon.

Tags: Crowd Control, Bludgeoning, Two-Handed, Lucky Hit.`,
		id: 119,
		maxPoints: 3,
		x: 861.562,
		y: 167.235
	},
};

barbarianData["Key Passive"] = {
	"Unconstrained": {
		connections: [ "Key Passive" ],
		description: `Increase Berserk's maximum duration by 5 seconds and increase its damage bonus by +{25/50/75/100/125/150/175/200/225/250}%.

Tags: Berserking, Damage.`,
		id: 120,
		maxPoints: 1,
		x: -667.071,
		y: 0.035
	},
	"Gushing Wounds": {
		connections: [ "Key Passive" ],
		description: `When causing an enemy to Bleed, you have a chance equal to your Critical Strike Chance to increase the Bleed amount by 100% of your Critical Strike Damage bonus.

Overpowering a Bleeding enemy creates an explosion that inflicts 11% Bleeding damage over 5 seconds.

Tags: Bleed, Critical Strikes, Overpower, Damage.`,
		id: 121,
		maxPoints: 1,
		x: 666.365,
		y: 0.035
	},
	"Unbridled Rage": {
		connections: [ "Key Passive" ],
		description: `Core Skills deal x135% increased damage, but cost x100% more Fury.

Tags: Fury, Damage.`,
		id: 122,
		maxPoints: 1,
		x: 415.642,
		y: 277.12
	},
	"Walking Arsenal": {
		connections: [ "Key Passive" ],
		description: `Dealing direct damage with a Two-Handed Bludgeoning, Two-Handed Slashing, or Dual Wielded weapons grants x10% increased damage for 6 seconds.

While all three damage bonuses are active, you gain an additional x15% increased damage.

Tags: Damage, Two-Handed, Dual Wield, Bludgeoning, Slashing.`,
		id: 123,
		maxPoints: 1,
		x: -425.632,
		y: 283.735
	},
};

export { barbarianData };