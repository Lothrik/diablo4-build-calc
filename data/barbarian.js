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
		x: 1.903,
		y: 1066.03
	},
	"Defensive": {
		connections: [ "Brawling" ],
		requiredPoints: 6,
		x: -1021.147,
		y: 1999.455
	},
	"Brawling": {
		connections: [ "Weapon Mastery" ],
		requiredPoints: 11,
		x: -1025.572,
		y: 3130.94
	},
	"Weapon Mastery": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 1027.208,
		y: 3133.185
	},
	"Ultimate": {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 3.547,
		y: 4231.671
	},
	"Capstone": {
		requiredPoints: 33,
		x: 4.294,
		y: 4833.735
	},
};

barbarianData["Basic"] = {
	"Bash": {
		connections: [ "Basic", "Enhanced Bash" ],
		damageType: 0,
		description: `Generate Fury: {#}
Lucky Hit Chance: {#}%
Bash the enemy with your weapon, dealing {#}% damage. After bashing enemies {#} times, your next Bash will Stun for {#} seconds, this increases to {#} seconds if using a Two-Handed weapon.`,
		id: 0,
		maxPoints: 5,
		values: [ "10", "50", "31", "4", "1.25", "2" ],
		x: -297.919,
		y: -147.065
	},
	"Enhanced Bash": {
		baseSkill: "Bash",
		connections: [ "Bash", "Battle Bash", "Combat Bash" ],
		description: `Damaging a Stunned enemy with Bash grants you {#}% Base Life ({#}) as Fortify. Double this amount when using a Two-Handed weapon.`,
		id: 1,
		maxPoints: 1,
		values: [ "5", "" ],
		x: -534.132,
		y: -273.13
	},
	"Battle Bash": {
		baseSkill: "Bash",
		connections: [ "Enhanced Bash" ],
		description: `Damaging a Stunned enemy with Bash generates an additional {#} Fury, or {#} Fury if using a Two-Handed weapon.`,
		id: 2,
		maxPoints: 1,
		values: [ "3", "4" ],
		x: -804.282,
		y: -298.615
	},
	"Combat Bash": {
		baseSkill: "Bash",
		connections: [ "Enhanced Bash" ],
		description: `After Critically Striking {#} times with Bash using a Two-Handed weapon your next Core or Weapon Mastery skill will Overpower.`,
		id: 3,
		maxPoints: 1,
		values: [ "4" ],
		x: -613.512,
		y: -419.785
	},
	"Lunging Strike": {
		connections: [ "Basic", "Enhanced Lunging Strike" ],
		damageType: 0,
		description: `Generate Fury: {#}
Lucky Hit Chance: {#}%
Lunge forward and strike an enemy for {#}% damage.`,
		id: 4,
		maxPoints: 5,
		values: [ "9", "50", "31" ],
		x: -280.465,
		y: 154.03
	},
	"Enhanced Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Lunging Strike", "Combat Lunging Strike", "Battle Lunging Strike" ],
		description: `Lunging Strike deals x{#}% increased damage and Heals you for {#}% Maximum Life ({#}) when it damages a Healthy enemy.`,
		id: 5,
		maxPoints: 1,
		values: [ "30", "2", "" ],
		x: -517.912,
		y: 283.305
	},
	"Combat Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Enhanced Lunging Strike" ],
		description: `Critical Strikes with Lunging Strike grant you Berserking for {#} seconds.`,
		id: 6,
		maxPoints: 1,
		values: [ "1.5" ],
		x: -797.217,
		y: 315.345
	},
	"Battle Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Enhanced Lunging Strike" ],
		description: `Lunging Strike also inflicts {#}% Bleeding damage over {#} seconds.`,
		id: 7,
		maxPoints: 1,
		values: [ "21", "5" ],
		x: -571.827,
		y: 426.19
	},
	"Frenzy": {
		connections: [ "Basic", "Enhanced Frenzy" ],
		damageType: 0,
		description: `Generate Fury: {#}
Lucky Hit Chance: {#}%
Unleash a rapid flurry of blows, dealing {#}% damage with each pair of hits.

If Frenzy hits an enemy, its Attack Speed is increased by +{#}% for {#} seconds, up to +{#}%.`,
		id: 8,
		maxPoints: 5,
		values: [ "5", "30", "21", "20", "3", "60" ],
		x: 295.291,
		y: 155.45
	},
	"Enhanced Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Frenzy", "Battle Frenzy", "Combat Frenzy" ],
		description: `While Frenzy is granting +{#}% bonus Attack Speed, it also generates 1 additional Fury.`,
		id: 9,
		maxPoints: 1,
		values: [ "60" ],
		x: 541.243,
		y: 295.12
	},
	"Battle Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Enhanced Frenzy" ],
		description: `While Berserking, your other skills gain {#}% Attack Speed for each stack of Frenzy you have.`,
		id: 10,
		maxPoints: 1,
		values: [ "5" ],
		x: 640.298,
		y: 431.52
	},
	"Combat Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Enhanced Frenzy" ],
		description: `You gain x{#}% Damage Reduction for each stack of Frenzy you currently have.`,
		id: 11,
		maxPoints: 1,
		values: [ "8" ],
		x: 829.408,
		y: 308.185
	},
	"Flay": {
		connections: [ "Basic", "Enhanced Flay" ],
		damageType: 0,
		description: `Generate Fury: {#}
Lucky Hit Chance: {#}%
Flay the enemy, dealing {#}% damage. Inflicts {#}% Bleeding damage over {#} seconds.`,
		id: 12,
		maxPoints: 5,
		values: [ "9", "50", "5", "38", "5" ],
		x: 291.231,
		y: -150.545
	},
	"Enhanced Flay": {
		baseSkill: "Flay",
		connections: [ "Flay", "Battle Flay", "Combat Flay" ],
		description: `When Flay deals direct damage to an enemy, they take x{#}% increased Bleeding damage for the next {#} seconds.`,
		id: 13,
		maxPoints: 1,
		values: [ "10", "3" ],
		x: 549.073,
		y: -289.98
	},
	"Battle Flay": {
		baseSkill: "Flay",
		connections: [ "Enhanced Flay" ],
		description: `Flay has a {#}% chance to make the enemy Vulnerable for 2 seconds. Double this chance when using a Two-Handed weapon.`,
		id: 14,
		maxPoints: 1,
		values: [ "10" ],
		x: 604.228,
		y: -437.075
	},
	"Combat Flay": {
		baseSkill: "Flay",
		connections: [ "Enhanced Flay" ],
		description: `When Flay deals direct damage you gain {#}% damage reduction and {#} Thorns for {#} seconds.  This stacks up to {#} times.`,
		id: 15,
		maxPoints: 1,
		values: [ "1", "4", "3", "5" ],
		x: 839.658,
		y: -320.87
	},
};

barbarianData["Core"] = {
	"Hammer of the Ancients": {
		connections: [ "Core", "Enhanced Hammer of the Ancients" ],
		damageType: 0,
		description: `Fury Cost: {#}
Lucky Hit Chance: {#}%
Slam your hammer down with the fury of the Ancients, dealing {#}% damage to a concentrated area.`,
		id: 16,
		maxPoints: 5,
		values: [ "35", "40", "59" ],
		x: -314.782,
		y: -203.49
	},
	"Enhanced Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Hammer of the Ancients", "Violent Hammer of the Ancients", "Furious Hammer of the Ancients" ],
		description: `Gain {#}% more Fury for {#} seconds for each enemy damaged by Hammer of the Ancients stacking up to {#} times.`,
		id: 17,
		maxPoints: 1,
		values: [ "3", "5", "10" ],
		x: -531.275,
		y: -352.21
	},
	"Violent Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Enhanced Hammer of the Ancients" ],
		description: `After Overpowering with Hammer of the Ancients you deal {#}% more damage for {#} seconds.`,
		id: 18,
		maxPoints: 1,
		values: [ "30", "2.5" ],
		x: -779.56,
		y: -413.6
	},
	"Furious Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Enhanced Hammer of the Ancients" ],
		description: `Hammer of the Ancients deals {#}% additional damage for each point of Fury you had when using it.`,
		id: 19,
		maxPoints: 1,
		values: [ "1" ],
		x: -552.235,
		y: -498.525
	},
	"Upheaval": {
		connections: [ "Core", "Enhanced Upheaval" ],
		damageType: 0,
		description: `Fury Cost: {#}
Lucky Hit Chance: {#}%
Tear into the ground with your weapon and fling debris forward, dealing {#}% damage.`,
		id: 20,
		maxPoints: 5,
		values: [ "40", "20", "73" ],
		x: -404.749,
		y: 65.115
	},
	"Enhanced Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Upheaval", "Violent Upheaval", "Furious Upheaval" ],
		description: `Upheaval has a {#}% chance to Stun all enemies it damages for {#} seconds.`,
		id: 21,
		maxPoints: 1,
		values: [ "20", "2.5" ],
		x: -736.93,
		y: 112.495
	},
	"Violent Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Enhanced Upheaval" ],
		description: `If Upheaval deals damage to {#} or more enemies you gain Berserking for {#} seconds, or {#} seconds if it deals damage to {#} or more enemies.`,
		id: 22,
		maxPoints: 1,
		values: [ "2", "2", "3", "4" ],
		x: -1039.995,
		y: 90.585
	},
	"Furious Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Enhanced Upheaval" ],
		description: `Dealing direct damage to an enemy with a Skill that is not Upheaval causes your next cast of Upheaval to deal x{#}% increased damage, stacking up to {#} times.`,
		id: 23,
		maxPoints: 1,
		values: [ "8", "10" ],
		x: -934.745,
		y: 232.075
	},
	"Double Swing": {
		connections: [ "Core", "Enhanced Double Swing" ],
		damageType: 0,
		description: `Fury Cost: {#}
Lucky Hit Chance: {#}%
Sweep your weapons from opposite directions, dealing {#}% damage with each weapon. Enemies caught in the center are damaged by both.`,
		id: 24,
		maxPoints: 5,
		values: [ "25", "30", "38" ],
		x: 77.926,
		y: 208.37
	},
	"Enhanced Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Double Swing", "Furious Double Swing", "Violent Double Swing" ],
		description: `If Double Swing damages a Stunned or Knocked Down enemy, gain {#} Fury.`,
		id: 25,
		maxPoints: 1,
		values: [ "25" ],
		x: 145.457,
		y: 376.64
	},
	"Furious Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Enhanced Double Swing" ],
		description: `Casting Double Swing while Berserking grants {#} additional seconds of Berserking.`,
		id: 26,
		maxPoints: 1,
		values: [ "2" ],
		x: 103.505,
		y: 509.21
	},
	"Violent Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Enhanced Double Swing" ],
		description: `Hitting an enemy with both hits of Double Swing makes them Vulnerable for {#} second.`,
		id: 27,
		maxPoints: 1,
		values: [ "1" ],
		x: 359.004,
		y: 454.195
	},
	"Pressure Point": {
		connections: [ "Core" ],
		description: `Lucky Hit: Your Core skills have up to a {#}% chance to make enemies Vulnerable for 2 seconds.`,
		id: 28,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: -756.09,
		y: -117.275
	},
	"Rend": {
		connections: [ "Core", "Enhanced Rend" ],
		damageType: 0,
		description: `Fury Cost: {#}
Lucky Hit Chance: {#}%
Cleave enemies in front of you, dealing {#}% damage and inflicting {#}% Bleeding damage over {#} seconds.`,
		id: 29,
		maxPoints: 5,
		values: [ "35", "33", "13", "101", "5" ],
		x: 256.089,
		y: -201.51
	},
	"Enhanced Rend": {
		baseSkill: "Rend",
		connections: [ "Rend", "Violent Rend", "Furious Rend" ],
		description: `Dealing direct damage with Rend extends the duration of Vulnerable on enemies by {#} seconds.`,
		id: 30,
		maxPoints: 1,
		values: [ "2" ],
		x: 455.858,
		y: -352.25
	},
	"Violent Rend": {
		baseSkill: "Rend",
		connections: [ "Enhanced Rend" ],
		description: `Rend deals x{#}% increased Bleeding damage to enemies that are already Bleeding.`,
		id: 31,
		maxPoints: 1,
		values: [ "12" ],
		x: 462.361,
		y: -500.135
	},
	"Furious Rend": {
		baseSkill: "Rend",
		connections: [ "Enhanced Rend" ],
		description: `Direct damage with Rend grants {#} Fury per enemy hit, up to a maximum of {#} Fury.`,
		id: 32,
		maxPoints: 1,
		values: [ "4", "20" ],
		x: 694.21,
		y: -415.125
	},
	"Whirlwind": {
		connections: [ "Core", "Enhanced Whirlwind" ],
		damageType: 0,
		description: `Fury Cost: {#} per second
Lucky Hit Chance: {#}%
Rapidly attack surrounding enemies for {#}% damage.`,
		id: 33,
		maxPoints: 5,
		values: [ "20", "20", "12" ],
		x: 468.01,
		y: 2.835
	},
	"Enhanced Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Whirlwind", "Furious Whirlwind", "Violent Whirlwind" ],
		description: `Gain {#} Fury each time Whirlwind deals direct damage to an enemy, or {#} Fury against Elite enemies.`,
		id: 34,
		maxPoints: 1,
		values: [ "1", "3" ],
		x: 811.475,
		y: 5.54
	},
	"Furious Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Enhanced Whirlwind" ],
		description: `While using a Slashing weapon, Whirlwind also inflicts {#}% Bleeding damage over {#} seconds.`,
		id: 35,
		maxPoints: 1,
		values: [ "26", "5" ],
		x: 1019.47,
		y: 79.94
	},
	"Violent Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Enhanced Whirlwind" ],
		description: `After using Whirlwind for {#} seconds, Whirlwind deals x{#}% increased damage until it is cancelled.`,
		id: 36,
		maxPoints: 1,
		values: [ "2", "30" ],
		x: 1026.415,
		y: -63.565
	},
	"Endless Fury": {
		connections: [ "Core" ],
		description: `Basic skills generate x{#}% more Fury when using Two-Handed weapons.`,
		id: 37,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 537.505,
		y: 210.405
	},
};

barbarianData["Defensive"] = {
	"Challenging Shout": {
		connections: [ "Defensive", "Enhanced Challenging Shout" ],
		description: `Cooldown: {#} seconds
Taunt Nearby enemies and gain x{#}% Damage Reduction for {#} seconds.`,
		id: 38,
		maxPoints: 5,
		values: [ "25.0", "40", "8" ],
		x: -352.93,
		y: -191.54
	},
	"Enhanced Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Challenging Shout", "Strategic Challenging Shout", "Tactical Challenging Shout" ],
		description: `While Challenging Shout is active, gain x{#}% bonus Maximum Life.`,
		id: 39,
		maxPoints: 1,
		values: [ "20" ],
		x: -595.095,
		y: -328.055
	},
	"Strategic Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Enhanced Challenging Shout" ],
		description: `While Challenging Shout is active, gain Thorns equal to +{#}% of your Maximum Life.`,
		id: 40,
		maxPoints: 1,
		values: [ "50" ],
		x: -681.82,
		y: -477.185
	},
	"Tactical Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Enhanced Challenging Shout" ],
		description: `While Challenging Shout is active you gain {#} Fury each time you take damage.`,
		id: 41,
		maxPoints: 1,
		values: [ "3" ],
		x: -891.53,
		y: -358.345
	},
	"Iron Skin": {
		connections: [ "Defensive", "Enhanced Iron Skin" ],
		description: `Cooldown: {#} seconds
Steel yourself, gaining a Barrier that absorbs {#}% of your missing Life for {#} seconds.`,
		id: 42,
		maxPoints: 5,
		values: [ "14.0", "50", "5" ],
		x: -340.565,
		y: 180.695
	},
	"Enhanced Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Iron Skin", "Tactical Iron Skin", "Strategic Iron Skin" ],
		description: `Iron Skin absorbs +{#}% more Missing Life.`,
		id: 43,
		maxPoints: 1,
		values: [ "10" ],
		x: -560.645,
		y: 317.12
	},
	"Tactical Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Enhanced Iron Skin" ],
		description: `While Iron Skin is active, restore Life equal to {#}% of the Barrier's original amount per second.`,
		id: 44,
		maxPoints: 1,
		values: [ "10" ],
		x: -879.405,
		y: 366.965
	},
	"Strategic Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Enhanced Iron Skin" ],
		description: `Iron Skin also grants {#}% Base Life ({#}) as Fortify. Double this amount if cast while below {#}% Life.`,
		id: 45,
		maxPoints: 1,
		values: [ "9", "", "50" ],
		x: -628.23,
		y: 481.575
	},
	"Outburst": {
		connections: [ "Defensive", "Tough as Nails" ],
		description: `Gain {#} Thorns. Also gain {#} Thorns for each {#} bonus Maximum Life you have.`,
		id: 46,
		maxPoints: 3,
		values: [ "{2/4/6}", "2", "2" ],
		x: -523.995,
		y: -2.145
	},
	"Tough as Nails": {
		connections: [ "Outburst" ],
		description: `Increase your Thorns by +{#}%.`,
		id: 47,
		maxPoints: 3,
		values: [ "{20/40/60}" ],
		x: -871.425,
		y: -1.78
	},
	"Ground Stomp": {
		connections: [ "Defensive", "Enhanced Ground Stomp" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Smash the ground, dealing {#}% damage and Stunning surrounding enemies for {#} seconds.`,
		id: 48,
		maxPoints: 5,
		values: [ "16.0", "33", "10", "3" ],
		x: -1.45,
		y: -233.72
	},
	"Enhanced Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Ground Stomp", "Tactical Ground Stomp", "Strategic Ground Stomp" ],
		description: `Increase Ground Stomp’s duration by {#} second.`,
		id: 49,
		maxPoints: 1,
		values: [ "1" ],
		x: -3.54,
		y: -391.82
	},
	"Tactical Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Enhanced Ground Stomp" ],
		description: `Ground Stomp generates {#} Fury.`,
		id: 50,
		maxPoints: 1,
		values: [ "25" ],
		x: -159.695,
		y: -536.35
	},
	"Strategic Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Enhanced Ground Stomp" ],
		description: `Reduce the Cooldown of your Ultimate skill by {#} second for each enemy damaged by Ground Stomp.`,
		id: 51,
		maxPoints: 1,
		values: [ "1" ],
		x: 146.68,
		y: -537.22
	},
	"Rallying Cry": {
		connections: [ "Defensive", "Enhanced Rallying Cry" ],
		description: `Cooldown: {#} seconds
Bellow a rallying cry, granting allies +{#}% increased Movement Speed, and x{#}% increased Resource Generation for {#} seconds.`,
		id: 52,
		maxPoints: 5,
		values: [ "25.0", "30", "50", "6" ],
		x: 346.595,
		y: 186.035
	},
	"Enhanced Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Rallying Cry", "Strategic Rallying Cry", "Tactical Rallying Cry" ],
		description: `Rallying Cry grants Unstoppable while active.`,
		id: 53,
		maxPoints: 1,
		x: 615.412,
		y: 336.77
	},
	"Strategic Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Enhanced Rallying Cry" ],
		description: `Rallying Cry grants {#}% Base Life ({#}) as Fortify. While Rallying Cry is active, you gain an additional {#}% Base Life ({#}) as Fortify each time you take or deal direct damage.`,
		id: 54,
		maxPoints: 1,
		values: [ "10", "", "2", "" ],
		x: 706.577,
		y: 510.305
	},
	"Tactical Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Enhanced Rallying Cry" ],
		description: `Rallying Cry grants {#} Fury. You gain +{#}% increased Resource Generation from Rallying Cry`,
		id: 55,
		maxPoints: 1,
		values: [ "25", "50" ],
		x: 937.688,
		y: 394.765
	},
	"Imposing Presence": {
		connections: [ "Defensive", "Martial Vigor" ],
		description: `Gain x{#}% additional Maximum Life.`,
		id: 56,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 499.955,
		y: -0.505
	},
	"Martial Vigor": {
		connections: [ "Imposing Presence" ],
		description: `Damage Reduction against Elites is increased by x{#}%.`,
		id: 57,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 869.192,
		y: 0.69
	},
};

barbarianData["Brawling"] = {
	"Charge": {
		connections: [ "Brawling", "Enhanced Charge" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Become Unstoppable and rush forward, pushing enemies with you then swinging through them for {#}% damage and Knocking them Back.`,
		id: 58,
		maxPoints: 5,
		values: [ "17.0", "33", "26" ],
		x: -281.935,
		y: 182.909
	},
	"Enhanced Charge": {
		baseSkill: "Charge",
		connections: [ "Charge", "Power Charge", "Mighty Charge" ],
		description: `Enemies who are Knocked Back into terrain by Charge take {#}% damage and are Stunned for {#} seconds.`,
		id: 59,
		maxPoints: 1,
		values: [ "16", "3" ],
		x: -520.55,
		y: 327.459
	},
	"Power Charge": {
		baseSkill: "Charge",
		connections: [ "Enhanced Charge" ],
		description: `Reduce Charge's Cooldown by {#} seconds if it Knocks Back an enemy into terrain.`,
		id: 60,
		maxPoints: 1,
		values: [ "3" ],
		x: -764.505,
		y: 388.421
	},
	"Mighty Charge": {
		baseSkill: "Charge",
		connections: [ "Enhanced Charge" ],
		description: `Damaging enemies with Charge makes them Vulnerable for {#} seconds.`,
		id: 61,
		maxPoints: 1,
		values: [ "2" ],
		x: -545.135,
		y: 471.464
	},
	"War Cry": {
		connections: [ "Brawling", "Enhanced War Cry" ],
		description: `Cooldown: {#} seconds
Bellow a mighty war cry. You and Nearby allies deal x{#}% increased damage for {#} seconds.`,
		id: 62,
		maxPoints: 5,
		values: [ "25.0", "15", "8" ],
		x: -233.835,
		y: -208.505
	},
	"Enhanced War Cry": {
		baseSkill: "War Cry",
		connections: [ "War Cry", "Power War Cry", "Mighty War Cry" ],
		description: `War Cry grants you Berserking for {#} seconds.`,
		id: 63,
		maxPoints: 1,
		values: [ "3" ],
		x: -396.14,
		y: -350.13
	},
	"Power War Cry": {
		baseSkill: "War Cry",
		connections: [ "Enhanced War Cry" ],
		description: `If at least {#} enemies are nearby when War Cry is cast, its damage bonus is increased by {#}%.`,
		id: 64,
		maxPoints: 1,
		values: [ "4", "15" ],
		x: -660.65,
		y: -395.7
	},
	"Mighty War Cry": {
		baseSkill: "War Cry",
		connections: [ "Enhanced War Cry" ],
		description: `War Cry grants {#}% Base Life ({#}) as Fortify.`,
		id: 65,
		maxPoints: 1,
		values: [ "28", "" ],
		x: -462.62,
		y: -487.765
	},
	"Booming Voice": {
		connections: [ "Brawling", "Raid Leader", "Guttural Yell" ],
		description: `Shout skill durations are increased by x{#}%.`,
		id: 66,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: -536.805,
		y: -0.565
	},
	"Raid Leader": {
		connections: [ "Booming Voice" ],
		description: `Your Shouts also Heal allies for {#}% of their Maximum Life per second.`,
		id: 67,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: -887.65,
		y: -76.885
	},
	"Guttural Yell": {
		connections: [ "Booming Voice" ],
		description: `Your Shout Skills cause enemies to deal x{#}% less damage for {#} seconds.`,
		id: 68,
		maxPoints: 3,
		values: [ "{8/16/24}", "5" ],
		x: -879.855,
		y: 102.01
	},
	"Leap": {
		connections: [ "Brawling", "Enhanced Leap" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Leap forward and then slam down, dealing {#}% damage and Knocking Back surrounding enemies on impact.`,
		id: 69,
		maxPoints: 5,
		values: [ "17.0", "33", "34" ],
		x: 268.76,
		y: 178.719
	},
	"Enhanced Leap": {
		baseSkill: "Leap",
		connections: [ "Leap", "Mighty Leap", "Power Leap" ],
		description: `If Leap doesn't damage any enemies, its Cooldown is reduced by {#} seconds.`,
		id: 70,
		maxPoints: 1,
		values: [ "4" ],
		x: 513.765,
		y: 326.899
	},
	"Mighty Leap": {
		baseSkill: "Leap",
		connections: [ "Enhanced Leap" ],
		description: `Enemies damaged by Leap are Slowed by {#}% for {#} seconds.`,
		id: 71,
		maxPoints: 1,
		values: [ "50", "5" ],
		x: 787.476,
		y: 357.779
	},
	"Power Leap": {
		baseSkill: "Leap",
		connections: [ "Enhanced Leap" ],
		description: `If Leap damages at least one enemy, gain {#} Fury.`,
		id: 72,
		maxPoints: 1,
		values: [ "40" ],
		x: 615.906,
		y: 458.297
	},
	"Kick": {
		connections: [ "Enhanced Kick", "Brawling" ],
		damageType: 0,
		description: `Charges: {#}
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Throw a powerful kick that deals {#}% damage and Knocks Back enemies in front of you. Enemies who are Knocked Back into terrain take an additional {#}% damage and are Stunned for {#} seconds.`,
		id: 73,
		maxPoints: 5,
		values: [ "2", "17.0", "100", "19", "57", "3" ],
		x: 214.57,
		y: -209.195
	},
	"Enhanced Kick": {
		baseSkill: "Kick",
		connections: [ "Kick", "Mighty Kick", "Power Kick" ],
		description: `Kick makes enemies it damages Vulnerable for {#} seconds.`,
		id: 74,
		maxPoints: 1,
		values: [ "4" ],
		x: 358.05,
		y: -349.61
	},
	"Mighty Kick": {
		baseSkill: "Kick",
		connections: [ "Enhanced Kick" ],
		description: `Kicked enemies deal {#}% damage to enemies they collide with while being Knocked Back. Enemies damaged this way are Knocked Down for {#} seconds.`,
		id: 75,
		maxPoints: 1,
		values: [ "54", "2" ],
		x: 396.34,
		y: -487.3
	},
	"Power Kick": {
		baseSkill: "Kick",
		connections: [ "Enhanced Kick" ],
		description: `If Kick damages an enemy, it consumes all of your Fury and deals an additional {#}% damage per {#} Fury spent. Kick no longer Knocks Back enemies.`,
		id: 76,
		maxPoints: 1,
		values: [ "21", "10" ],
		x: 660.106,
		y: -393.24
	},
	"Aggressive Resistance": {
		connections: [ "Prolific Fury", "Battle Frenzy", "Brawling" ],
		description: `Gain {#}% Damage Reduction while Berserking.`,
		id: 77,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: -0.385,
		y: 314.173
	},
	"Prolific Fury": {
		connections: [ "Aggressive Resistance" ],
		description: `While Berserking, Fury Generation is increased by x{#}%.`,
		id: 78,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: 165.21,
		y: 513.014
	},
	"Battle Frenzy": {
		connections: [ "Aggressive Resistance" ],
		description: `When a Brawling Skill damages at least one enemy, gain Berserking for {#} seconds.`,
		id: 79,
		maxPoints: 3,
		values: [ "{1/2/3}" ],
		x: -166.53,
		y: 511.82
	},
	"Swiftness": {
		connections: [ "Brawling", "Quick Impulses" ],
		description: `Movement Speed is increased by +{#}%.`,
		id: 80,
		maxPoints: 3,
		values: [ "{4/8/12}" ],
		x: 604.811,
		y: -113.28
	},
	"Quick Impulses": {
		connections: [ "Swiftness" ],
		description: `Reduce the duration of Control Impairing Effects by x{#}%.`,
		id: 81,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: 951.192,
		y: -180.78
	},
};

barbarianData["Weapon Mastery"] = {
	"Steel Grasp": {
		connections: [ "Weapon Mastery", "Enhanced Steel Grasp" ],
		damageType: 0,
		description: `Charges: {#}
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Throw out a trio of chains that deal {#}% damage and Pull In enemies.`,
		id: 82,
		maxPoints: 5,
		values: [ "2", "11.0", "25", "24" ],
		x: 333.535,
		y: 169.019
	},
	"Enhanced Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Steel Grasp", "Warrior's Steel Grasp", "Fighter's Steel Grasp" ],
		description: `Steel Grasp also makes enemies Vulnerable for {#} seconds.`,
		id: 83,
		maxPoints: 1,
		values: [ "2.5" ],
		x: 561.555,
		y: 293.289
	},
	"Warrior's Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Enhanced Steel Grasp" ],
		description: `Steel Grasp gains {#} additional Charge.`,
		id: 84,
		maxPoints: 1,
		values: [ "1" ],
		x: 606.385,
		y: 458.861
	},
	"Fighter's Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Enhanced Steel Grasp" ],
		description: `If Steel Grasp damages an enemy, gain Berserking for {#} seconds.`,
		id: 85,
		maxPoints: 1,
		values: [ "2" ],
		x: 884.795,
		y: 366.914
	},
	"Thick Skin": {
		connections: [ "Weapon Mastery", "Counteroffensive", "Defensive Posture" ],
		description: `Each time you take direct damage gain {#}% Base Life ({#}) as Fortify.`,
		id: 86,
		maxPoints: 3,
		values: [ "{0.4/0.7/1.1}", "" ],
		x: 0.225,
		y: 334.476
	},
	"Counteroffensive": {
		connections: [ "Thick Skin" ],
		description: `While Fortified for over {#}% of your Maximum Life, you deal x{#}% increased damage.`,
		id: 87,
		maxPoints: 3,
		values: [ "50", "{5/10/15}" ],
		x: 166.395,
		y: 533.625
	},
	"Defensive Posture": {
		connections: [ "Thick Skin" ],
		description: `Increase the Damage Reduction gained while you are Fortified by an additional +{#}%.`,
		id: 88,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -157.31,
		y: 535.218
	},
	"Death Blow": {
		connections: [ "Weapon Mastery", "Enhanced Death Blow" ],
		damageType: 0,
		description: `Charges: {#}
Charge Cooldown: {#} seconds
Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Attempt a killing strike, dealing {#}% damage to enemies in front of you.

If this kills an enemy, the Cooldown is reset.`,
		id: 89,
		maxPoints: 5,
		values: [ "", "", "15.0", "50", "126" ],
		x: -325.565,
		y: -166.535
	},
	"Enhanced Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Death Blow", "Warrior's Death Blow", "Fighter's Death Blow" ],
		description: `Death Blow deals x{#}% increased damage to bosses.`,
		id: 90,
		maxPoints: 1,
		values: [ "100" ],
		x: -568.68,
		y: -305.265
	},
	"Warrior's Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Enhanced Death Blow" ],
		description: `If Death Blow damages at least one enemy, gain Berserking for {#} seconds.`,
		id: 91,
		maxPoints: 1,
		values: [ "3" ],
		x: -865.527,
		y: -366.715
	},
	"Fighter's Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Enhanced Death Blow" ],
		description: `If Death Blow damages at least one enemy, gain {#} Fury.`,
		id: 92,
		maxPoints: 1,
		values: [ "20" ],
		x: -648.16,
		y: -468.705
	},
	"Pit Fighter": {
		connections: [ "Weapon Mastery", "Slaying Strike", "No Mercy" ],
		description: `You deal x{#}% increased damage to Close enemies and gain {#}% Distant Damage Reduction.`,
		id: 93,
		maxPoints: 3,
		values: [ "{3/6/9}", "{2/4/6}" ],
		x: -2.05,
		y: -332.97
	},
	"Slaying Strike": {
		connections: [ "Pit Fighter", "Expose Vulnerability" ],
		description: `You deal x{#}% increased damage against Injured enemies.`,
		id: 94,
		maxPoints: 3,
		values: [ "{8/15/23}" ],
		x: 158.41,
		y: -504.97
	},
	"Expose Vulnerability": {
		connections: [ "No Mercy", "Slaying Strike" ],
		description: `Dealing direct damage with a Weapon Mastery skill causes your next Core Skill to make enemies Vulnerable for {#} seconds.`,
		id: 95,
		maxPoints: 3,
		values: [ "{1.5/3/4.5}" ],
		x: 2.605,
		y: -667.29
	},
	"No Mercy": {
		connections: [ "Expose Vulnerability", "Pit Fighter" ],
		description: `You deal x{#}% increased damage against Immobilized, Stunned, or Slowed enemies.`,
		id: 96,
		maxPoints: 3,
		values: [ "{5/9/13}" ],
		x: -150.43,
		y: -504.285
	},
	"Rupture": {
		connections: [ "Enhanced Rupture", "Weapon Mastery" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Charges: {#}
Charge Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Skewer enemies in front of you, dealing {#}% damage, then rip your weapon out, damaging enemies for their total Bleeding amount and removing all Bleeding damage from them.`,
		id: 97,
		maxPoints: 5,
		values: [ "15.0", "", "", "50", "14" ],
		x: 327.83,
		y: -166.52
	},
	"Enhanced Rupture": {
		baseSkill: "Rupture",
		connections: [ "Rupture", "Fighter's Rupture", "Warrior's Rupture" ],
		description: `If an enemy dies while being skewered by Rupture, then reset its Cooldown. Enemies who survive take x{#}% increased Bleeding damage for the next {#} seconds.`,
		id: 98,
		maxPoints: 1,
		values: [ "20", "8" ],
		x: 552.76,
		y: -304.595
	},
	"Fighter's Rupture": {
		baseSkill: "Rupture",
		connections: [ "Enhanced Rupture" ],
		description: `Enemies killed by Rupture Heal you for {#}% of your Maximum Life.`,
		id: 99,
		maxPoints: 1,
		values: [ "15" ],
		x: 880.23,
		y: -365.865
	},
	"Warrior's Rupture": {
		baseSkill: "Rupture",
		connections: [ "Enhanced Rupture" ],
		description: `Killing enemies with Rupture increases your Attack Speed by +{#}% for {#} seconds.`,
		id: 100,
		maxPoints: 1,
		values: [ "20", "4" ],
		x: 585.94,
		y: -469.18
	},
	"Hamstring": {
		connections: [ "Cut to the Bone", "Weapon Mastery" ],
		description: `Your Bleeding effects Slow enemies by {#}%.`,
		id: 101,
		maxPoints: 3,
		values: [ "{10/20/30}" ],
		x: 632.795,
		y: 0.03
	},
	"Cut to the Bone": {
		connections: [ "Hamstring" ],
		description: `Your Bleeding effects deal x{#}% increased damage to Vulnerable enemies.`,
		id: 102,
		maxPoints: 3,
		values: [ "{6/12/18}" ],
		x: 1008.41,
		y: -0.025
	},
};

barbarianData["Ultimate"] = {
	"Call of the Ancients": {
		connections: [ "Ultimate", "Prime Call of the Ancients" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Call upon 3 Ancients to aid you in battle for {#} seconds.

Korlic leaps at enemies, dealing {#}% damage and swings his weapons in a frenzy, dealing {#}% damage per hit.

Talic spins in a whirlwind rapidly attacking enemies for {#}% damage.

Madawc upheaves the ground, dealing {#}% damage.`,
		id: 103,
		maxPoints: 1,
		values: [ "50.0", "30", "6", "80", "30", "50", "150" ],
		x: -51.582,
		y: -242.094
	},
	"Prime Call of the Ancients": {
		baseSkill: "Call of the Ancients",
		connections: [ "Supreme Call of the Ancients", "Call of the Ancients" ],
		description: `While Call of the Ancients is active, gain +{#}% bonus Attack Speed and x{#}% increased damage.`,
		id: 104,
		maxPoints: 1,
		values: [ "10", "10" ],
		x: 112.66,
		y: -397.525
	},
	"Supreme Call of the Ancients": {
		baseSkill: "Call of the Ancients",
		connections: [ "Prime Call of the Ancients" ],
		description: `Each of the Ancients gains additional power:

Korlic: You gain 10 Fury each time Korlic damages an enemy with Frenzy.
Talic: Enemies are Slowed by {#}% for {#} second when damaged by his Whirlwind.
Madawc: {#}% chance to Stun enemies for {#} seconds when using his Upheaval.`,
		id: 105,
		maxPoints: 1,
		values: [ "50", "1", "30", "3" ],
		x: -18.609,
		y: -547.138
	},
	"Iron Maelstrom": {
		connections: [ "Ultimate", "Prime Iron Maelstrom" ],
		damageType: 0,
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Activate to attach a chain to your Two-Handed Bludgeoning weapon and slam the ground, dealing {#}% damage and Stunning them for {#} seconds.

Reactivate a second time to attach a chain to your Two-Handed Slashing weapon and swipe it in front of you, dealing {#}% damage and {#}% Bleeding damage over {#} seconds.

Reactivate a final time to attach a chain to your Dual Wield weapons and swing them around you, dealing {#}% damage per hit.`,
		id: 106,
		maxPoints: 1,
		values: [ "60.0", "40", "63", "2", "21", "126", "5", "34" ],
		x: -409.819,
		y: -8.495
	},
	"Prime Iron Maelstrom": {
		baseSkill: "Iron Maelstrom",
		connections: [ "Supreme Iron Maelstrom", "Iron Maelstrom" ],
		description: `Iron Maelstrom gains +{#}% increased Critical Strike Chance and deals x{#}% increased Critical Strike Damage`,
		id: 107,
		maxPoints: 1,
		values: [ "10", "20" ],
		x: -714.379,
		y: -29.264
	},
	"Supreme Iron Maelstrom": {
		baseSkill: "Iron Maelstrom",
		connections: [ "Prime Iron Maelstrom" ],
		description: `Dealing direct damage to an enemy after swapping weapons reduces Iron Maelstrom's Cooldown by {#} second.`,
		id: 108,
		maxPoints: 1,
		values: [ "1" ],
		x: -954.889,
		y: 30.87
	},
	"Duelist": {
		connections: [ "Ultimate" ],
		description: `Attack Speed is increased by +{#}% while using One-Handed weapons.`,
		id: 109,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -496.302,
		y: -261.705
	},
	"Wrath of the Berserker": {
		connections: [ "Ultimate", "Supreme Wrath of the Berserker" ],
		description: `Cooldown: {#} seconds
Lucky Hit Chance: {#}%
Gain Berserking and Unstoppable for {#} seconds.  For the next {#} seconds, dealing direct damage with Basic Skills grants Berserking for {#} seconds.`,
		id: 110,
		maxPoints: 1,
		values: [ "60.0", "40", "5", "10", "5" ],
		x: 293.361,
		y: 168.865
	},
	"Supreme Wrath of the Berserker": {
		baseSkill: "Wrath of the Berserker",
		connections: [ "Prime Wrath of the Berserker", "Wrath of the Berserker" ],
		description: `While Wrath of the Berserker is active, gain +{#}% increased Movement Speed and increase Fury Generation by x{#}%`,
		id: 111,
		maxPoints: 1,
		values: [ "50", "25" ],
		x: 438.829,
		y: 328.334
	},
	"Prime Wrath of the Berserker": {
		baseSkill: "Wrath of the Berserker",
		connections: [ "Supreme Wrath of the Berserker" ],
		description: `While Wrath of the Berserker is active, every {#} Fury you spend increases Berserk's damage bonus by x{#}%`,
		id: 112,
		maxPoints: 1,
		values: [ "20", "30" ],
		x: 623.391,
		y: 426.139
	},
	"Tempered Fury": {
		connections: [ "Ultimate", "Invigorating Fury", "Furious Impulse" ],
		description: `Increase your Maximum Fury by {#}.`,
		id: 113,
		maxPoints: 3,
		values: [ "{3/6/9}" ],
		x: -490.702,
		y: 263.36
	},
	"Invigorating Fury": {
		connections: [ "Tempered Fury" ],
		description: `Heals you for {#}% of your Maximum Life for each {#} Fury spent.`,
		id: 114,
		maxPoints: 3,
		values: [ "{2/4/6}", "100" ],
		x: -560.269,
		y: 457.204
	},
	"Furious Impulse": {
		connections: [ "Tempered Fury" ],
		description: `Each time you swap weapons, gain {#} Fury.`,
		id: 115,
		maxPoints: 3,
		values: [ "{2/4/6}" ],
		x: -869.834,
		y: 330.929
	},
	"Wallop": {
		connections: [ "Ultimate", "Brute Force", "Concussion" ],
		description: `Your Skills using Bludgeoning weapons deal x{#}% increased damage if the enemy is Stunned or Vulnerable.`,
		id: 116,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 517.506,
		y: -164.641
	},
	"Brute Force": {
		connections: [ "Wallop", "Heavy Handed" ],
		description: `Your Overpower deals x{#}% increased damage when using a Two-Handed weapon`,
		id: 117,
		maxPoints: 3,
		values: [ "{15/30/45}" ],
		x: 960.611,
		y: -108.571
	},
	"Heavy Handed": {
		connections: [ "Ultimate", "Brute Force" ],
		description: `While using Two-Handed weapons you deal x{#}% increased Critical Strike Damage.`,
		id: 118,
		maxPoints: 3,
		values: [ "{5/10/15}" ],
		x: 638.816,
		y: 39.155
	},
	"Concussion": {
		connections: [ "Wallop" ],
		description: `Lucky Hit: Skills using Bludgeoning weapons have up to a {#}% chance to Stun enemies for {#} seconds, or up to a {#}% chance when using a Two-Handed Bludgeoning weapon.`,
		id: 119,
		maxPoints: 3,
		values: [ "{10/20/30}", "3", "{15/30/45}" ],
		x: 821.771,
		y: -332.793
	},
};

barbarianData["Capstone"] = {
	"Unconstrained": {
		connections: [ "Capstone" ],
		description: `Increase Berserk's maximum duration by {#} seconds and increase its damage bonus by x{#}%.`,
		id: 120,
		maxPoints: 1,
		values: [ "5", "25" ],
		x: -562.656,
		y: 314.67
	},
	"Gushing Wounds": {
		connections: [ "Capstone" ],
		damageType: 0,
		description: `Killing a Bleeding enemy creates an explosion that inflicts {#}% Bleeding damage over {#} seconds.`,
		id: 121,
		maxPoints: 1,
		values: [ "12", "5" ],
		x: 559.849,
		y: 314.985
	},
	"Unbridled Rage": {
		connections: [ "Capstone" ],
		description: `Core Skills deal x{#}% increased damage, but cost x{#}% more.`,
		id: 122,
		maxPoints: 1,
		values: [ "135", "100" ],
		x: 186.229,
		y: 314.52
	},
	"Walking Arsenal": {
		connections: [ "Capstone" ],
		description: `Dealing direct damage with a Two-Handed Bludgeoning, Two-Handed Slashing, or Dual Wielded weapons grants x{#}% increased damage for {#} seconds.

While all three damage bonuses are active, you gain an additional x{#}% increased damage.`,
		id: 123,
		maxPoints: 1,
		values: [ "10", "6", "15" ],
		x: -188.068,
		y: 312.95
	},
};

export { barbarianData };