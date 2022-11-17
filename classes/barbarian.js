let barbarian = {};

barbarian["Trunk Data"] = {
	["Basic"]: {
		x: 0,
		y: 0,
	},
	["Core"]: {
		connections: [ "Basic" ],
		requiredPoints: 2,
		x: 0,
		y: 1100,
	},
	["Defensive"]: {
		connections: [ "Core" ],
		requiredPoints: 5,
		x: -600,
		y: 2300,
	},
};

barbarian["Basic"] = {
	["Bash"]: {
		connections: [ "Basic" ],
		description: "Bash the enemy with your weapon, dealing {#}% damage. Has 20% chance to Stun for 1.25 seconds.",
		x: -150,
		y: -150,
	},
	["Bash — Modifier 1"]: {
		connections: [ "Bash" ],
		description: "Damaging an enemy with Bash grants you {#} Fortify. Double this amount when using a Two-Handed weapon.",
		maxPoints: 1,
		x: -300,
		y: -300,
	},
	["Bash — Modifier 2"]: {
		connections: [ "Bash — Modifier 1" ],
		description: "Increased Bash's Stun duration to {#} seconds, or to {#} seconds if using a Two-Handed weapon.",
		maxPoints: 1,
		x: -450,
		y: -300,
	},
	["Bash — Modifier 3"]: {
		connections: [ "Bash — Modifier 1" ],
		description: "Bash deals {#}% bonus Overpower damage and grants {#} additional Fury when Overpowering enemies.",
		maxPoints: 1,
		x: -300,
		y: -450,
	},
	["Flay"]: {
		connections: [ "Basic" ],
		description: "Flay the enemy, dealing {#}% damage. Inflicts {#}% Bleeding damage over 5 seconds.",
		x: 150,
		y: -150,
	},
	["Flay — Modifier 1"]: {
		connections: [ "Flay" ],
		description: "Flay has a {#}% chance to make the enemy Vulnerable for 2 seconds. Double this chance when using a Two-Handed weapon.",
		maxPoints: 1,
		x: 300,
		y: -300,
	},
	["Flay — Modifier 2"]: {
		connections: [ "Flay — Modifier 1" ],
		description: "While Berserking, Flay's Attack Speed is increased by +{#}%.",
		maxPoints: 1,
		x: 450,
		y: -300,
	},
	["Flay — Modifier 3"]: {
		connections: [ "Flay — Modifier 1" ],
		description: "When Flay deals direct damage to an enemy, they take x{#}% increased Bleeding damage for the next {#} seconds.",
		maxPoints: 1,
		x: 300,
		y: -450,
	},
	["Frenzy"]: {
		connections: [ "Basic" ],
		description: "Unleash a rapid flurry of blows, dealing {#}% damage with each pair of hits. Dealing damage with Frenzy increases Frenzy's Attack Speed by +{#}% for 3 seconds, up to +{#}%.",
		x: 150,
		y: 150,
	},
	["Frenzy — Modifier 1"]: {
		connections: [ "Frenzy" ],
		description: "While Frenzy is granting +{#}% bonus Attack Speed, it also generates 1 additional Fury.",
		maxPoints: 1,
		x: 300,
		y: 300,
	},
	["Frenzy — Modifier 2"]: {
		connections: [ "Frenzy — Modifier 1" ],
		description: "You gain x{#}% Damage Reduction for each stack of Frenzy you currently have.",
		maxPoints: 1,
		x: 450,
		y: 300,
	},
	["Frenzy — Modifier 3"]: {
		connections: [ "Frenzy — Modifier 1" ],
		description: "Frenzy deals x{#}% increased damage while Berserking.",
		maxPoints: 1,
		x: 300,
		y: 450,
	},
	["Lunging Strike"]: {
		connections: [ "Basic" ],
		description: "Lunge forward and strike an enemy for {#}% damage.",
		x: -150,
		y: 150,
	},
	["Lunging Strike — Modifier 1"]: {
		connections: [ "Lunging Strike" ],
		description: "Critical Strikes with Lunging Strike grant you Berserking for {#} seconds.",
		maxPoints: 1,
		x: -300,
		y: 300,
	},
	["Lunging Strike — Modifier 2"]: {
		connections: [ "Lunging Strike — Modifier 1" ],
		description: "Lunging Strike deals x{#}% increased damage and Heals you for {#} Life when it damages a Healthy enemy.",
		maxPoints: 1,
		x: -450,
		y: 300,
	},
	["Lunging Strike — Modifier 3"]: {
		connections: [ "Lunging Strike — Modifier 1" ],
		description: "When using a Slashing weapon, Lunging Strike has a {#}% chance to make enemies Vulnerable for {#} seconds.",
		maxPoints: 1,
		x: -300,
		y: 450,
	},
	["Swiftness"]: {
		connections: [ "Basic" ],
		description: "Movement Speed is increased by {#}%.",
		maxPoints: 3,
		x: -450,
		y: 0,
	},
	["Imposing Presence"]: {
		connections: [ "Basic" ],
		description: "Gain {#}% additional Maximum Life.",
		maxPoints: 3,
		x: 450,
		y: 0,
	},
};

barbarian["Core"] = {
	["Hammer of the Ancients"]: {
		connections: [ "Core" ],
		description: "Slam your hammer down with the fury of the ancients, dealing {#}% damage to a concentrated area.",
		x: -150,
		y: -150,
	},
	["Hammer of the Ancients — Modifier 1"]: {
		connections: [ "Hammer of the Ancients" ],
		description: "Gain {#} Fury when Hammer of the Ancients damages {#} or more enemies.",
		maxPoints: 1,
		x: -300,
		y: -300,
	},
	["Hammer of the Ancients — Modifier 2"]: {
		connections: [ "Hammer of the Ancients — Modifier 1" ],
		description: "After {#} Critical Strikes with Hammer of the Ancients, your next cast Overpowers all enemies it damages.",
		maxPoints: 1,
		x: -450,
		y: -300,
	},
	["Hammer of the Ancients — Modifier 3"]: {
		connections: [ "Hammer of the Ancients — Modifier 1" ],
		description: "Gain Berserking for {#} seconds when hitting x or more enemies with Hammer of the Ancients.",
		maxPoints: 1,
		x: -300,
		y: -450,
	},
	["Rend"]: {
		connections: [ "Core" ],
		description: "Cleave enemies in front of you, dealing {#}% damage and inflicting {#}% bleeding damage over 5 seconds.",
		x: 150,
		y: -150,
	},
	["Rend — Modifier 1"]: {
		connections: [ "Rend" ],
		description: "Dealing direct damage with Rend extends the duration of Vulnerable on enemies by {#} seconds.",
		maxPoints: 1,
		x: 300,
		y: -300,
	},
	["Rend — Modifier 2"]: {
		connections: [ "Rend — Modifier 1" ],
		description: "Direct damage with Rend grants {#} Fury per enemy hit, up to a maximum of {#} Fury.",
		maxPoints: 1,
		x: 450,
		y: -300,
	},
	["Rend — Modifier 3"]: {
		connections: [ "Rend — Modifier 1" ],
		description: "Rend deals {#}% increased Bleeding damage to enemies that are already Bleeding.",
		maxPoints: 1,
		x: 300,
		y: -450,
	},
	["Whirlwind"]: {
		connections: [ "Core" ],
		description: "Rapidly attack nearby enemies for {#}% damage.",
		x: 300,
		y: 0,
	},
	["Whirlwind — Modifier 1"]: {
		connections: [ "Whirlwind" ],
		description: "Gain {#} Fury each time Whirlwind deals direct damage to an enemy, or {#} Fury if the enemy is Stunned.",
		maxPoints: 1,
		x: 450,
		y: 0,
	},
	["Whirlwind — Modifier 2"]: {
		connections: [ "Whirlwind — Modifier 1" ],
		description: "After using Whirlwind for {#} seconds, Whirlwind deals {#}% increased damage until it is cancelled.",
		maxPoints: 1,
		x: 600,
		y: -150,
	},
	["Whirlwind — Modifier 3"]: {
		connections: [ "Whirlwind — Modifier 1" ],
		description: "While using a Slashing weapon, Whirlwind also inflicts {#} Bleeding damage over x seconds.",
		maxPoints: 1,
		x: 600,
		y: 150,
	},
	["Double Swing"]: {
		connections: [ "Core" ],
		description: "Sweep your weapons from opposite directions, dealing {#}% damage with each weapon. Enemies caught in the center are damaged by both.",
		x: 100,
		y: 250,
	},
	["Double Swing — Modifier 1"]: {
		connections: [ "Double Swing" ],
		description: "If Double Swing damages a Stunned or Knocked Down enemy, gain {#} Fury.",
		maxPoints: 1,
		x: 175,
		y: 400,
	},
	["Double Swing — Modifier 2"]: {
		connections: [ "Double Swing — Modifier 1" ],
		description: "Damaging an enemy with Double Swing causes its next cast within {#} seconds to deal {#}% increased damage.",
		maxPoints: 1,
		x: 325,
		y: 400,
	},
	["Double Swing — Modifier 3"]: {
		connections: [ "Double Swing — Modifier 1" ],
		description: "Casting Double Swing while Berserking grants {#} additional seconds of Berserking.",
		maxPoints: 1,
		x: 175,
		y: 550,
	},
	["Slaying Strike"]: {
		connections: [ "Core" ],
		description: "You deal {#}% increased damage against Injured enemies.",
		maxPoints: 3,
		x: 325,
		y: 200,
	},
	["Upheaval"]: {
		connections: [ "Core" ],
		description: "Tear into the ground with your weapon and fling debris forward, dealing {#}% damage.",
		x: -200,
		y: 175,
	},
	["Upheaval — Modifier 1"]: {
		connections: [ "Upheaval" ],
		description: "Upheaval has a {#}% chance to Stun all enemies it damages for {#} seconds.",
		maxPoints: 1,
		x: -350,
		y: 300,
	},
	["Upheaval — Modifier 2"]: {
		connections: [ "Upheaval — Modifier 1" ],
		description: "If Upheaval deals damage to an enemy you gain Berserking for {#} seconds, or {#} seconds if it deals damage to {#} or more enemies.",
		maxPoints: 1,
		x: -500,
		y: 300,
	},
	["Upheaval — Modifier 3"]: {
		connections: [ "Upheaval — Modifier 1" ],
		description: "Upheaval has a {#}% chance to Stun all enemies it damages for {#} seconds.",
		maxPoints: 1,
		x: -350,
		y: 450,
	},
	["Pressure Point"]: {
		connections: [ "Core" ],
		description: "Your Core skills have up to a {#}% chance to make enemies Vulnerable for 2 seconds.",
		maxPoints: 3,
		x: -350,
		y: 0,
	},
};

barbarian["Defensive"] = {
	["Challenging Shout"]: {
		connections: [ "Defensive" ],
		description: "Taunt nearby enemies and gain {#}% damage reduction for 8 seconds.",
		x: -225,
		y: -175,
	},
	["Challenging Shout — Modifier 1"]: {
		connections: [ "Challenging Shout" ],
		description: "While Challenging Shout is active, gain {#}% bonus Maximum Life.",
		maxPoints: 1,
		x: -375,
		y: -325,
	},
	["Challenging Shout — Modifier 2"]: {
		connections: [ "Challenging Shout — Modifier 1" ],
		description: "While Challenging Shout is active you gain {#} Fury each time you take damage.",
		maxPoints: 1,
		x: -525,
		y: -325,
	},
	["Challenging Shout — Modifier 3"]: {
		connections: [ "Challenging Shout — Modifier 1" ],
		description: "While Challenging Shout is active, gain Thorns equal to +{#}% of your Maximum Life.",
		maxPoints: 1,
		x: -375,
		y: -475,
	},
	["Ground Stomp"]: {
		connections: [ "Defensive" ],
		description: "Smash the ground, dealing {#}% damage and stunning nearby enemies for 3 seconds.",
		x: 0,
		y: -250,
	},
	["Ground Stomp — Modifier 1"]: {
		connections: [ "Ground Stomp" ],
		description: "Increase Ground Stomp's duration by {#} seconds.",
		maxPoints: 1,
		x: 0,
		y: -400,
	},
	["Ground Stomp — Modifier 2"]: {
		connections: [ "Ground Stomp — Modifier 1" ],
		description: "Ground Stomp generates {#} Fury.",
		maxPoints: 1,
		x: -100,
		y: -550,
	},
	["Ground Stomp — Modifier 3"]: {
		connections: [ "Ground Stomp — Modifier 1" ],
		description: "Reduce the Cooldown of your Ultimate skill by {#} second for each enemy damaged by Ground Stomp.",
		maxPoints: 1,
		x: 100,
		y: -550,
	},
	["Martial Vigor"]: {
		connections: [ "Defensive" ],
		description: "Damage Reduction against Elites, Bosses, and Players is increased by {#}%.",
		maxPoints: 3,
		x: 350,
		y: 0,
	},
	["Rallying Cry"]: {
		connections: [ "Defensive" ],
		description: "Bellow a rallying cry, granting allies 30% increased movement speed and 50% increased resource generation for 6 seconds.",
		x: 150,
		y: 150,
	},
	["Rallying Cry — Modifier 1"]: {
		connections: [ "Rallying Cry" ],
		description: "Rallying Cry grants Unstoppable while active.",
		maxPoints: 1,
		x: 300,
		y: 300,
	},
	["Rallying Cry — Modifier 2"]: {
		connections: [ "Rallying Cry — Modifier 1" ],
		description: "Rallying Cry grants {#} Fury. You gain +{#}% increased Resource Generation from Rallying Cry.",
		maxPoints: 1,
		x: 450,
		y: 300,
	},
	["Rallying Cry — Modifier 3"]: {
		connections: [ "Rallying Cry — Modifier 1" ],
		description: "Rallying Cry grants {#} Fortify. While Rallying Cry is active, you gain an additional {#} Fortify each time you take or deal direct damage.",
		maxPoints: 1,
		x: 300,
		y: 450,
	},
	["Iron Skin"]: {
		connections: [ "Defensive" ],
		description: "Steel yourself, gaining a barrier that absorbs 50% of your missing life for 5 seconds.",
		x: -150,
		y: 150,
	},
	["Iron Skin — Modifier 1"]: {
		connections: [ "Iron Skin" ],
		description: "Iron Skin absorbs +{#}% more Missing Life.",
		maxPoints: 1,
		x: -300,
		y: 300,
	},
	["Iron Skin — Modifier 2"]: {
		connections: [ "Iron Skin — Modifier 1" ],
		description: "While Iron Skin is active, restore Life equal to {#}% of the Barrier's original amount per second.",
		maxPoints: 1,
		x: -450,
		y: 300,
	},
	["Iron Skin — Modifier 3"]: {
		connections: [ "Iron Skin — Modifier 1" ],
		description: "Iron Skin also grants {#} Fortify. Double this amount if cast while below {#}% Life.",
		maxPoints: 1,
		x: -300,
		y: 450,
	},
	["Outburst"]: {
		connections: [ "Defensive" ],
		description: "Gain {#} Thorns. Also gain {#} Thorns for each {#} bonus Maximum Life you have.",
		maxPoints: 3,
		x: -350,
		y: 0,
	},
	["Tough as Nails"]: {
		connections: [ "Outburst" ],
		description: "Increase your Thorns by +{#}%.",
		maxPoints: 3,
		x: -500,
		y: 0,
	},
};

barbarian["Brawling"] = {
	["War Cry"]: {
		description: "Bellow a mighty war cry, granting you and nearby allies deal {#}% increased damage for 8 seconds.",
	},
	["Kick"]: {
		description: "Throw a powerful kick that deals {#}% damage and knocks back enemies in front of you. Enemies who are knocked back into terrain take an additional {#}% damage and are stunned for 3 seconds.",
	},
	["Leap"]: {
		description: "Leap forward and then slam down, dealing {#}% damage and knocking back nearby enemies on impact.",
	},
	["Charge"]: {
		description: "Become Unstoppable and rush forward, pushing enemies with you then swinging through them for {#}% damage and knocking them back.",
	},
};

barbarian["Weapon Mastery"] = {
	["Death Blow"]: {
		description: "Attempt a killing strike, dealing {#}% damage to enemies in front of you. If this kills an enemy, the cooldown is reset.",
	},
	["Rupture"]: {
		description: "Skewer enemies in front of you, dealing {#}% damage, then rip your weapon out, damaging enemies for their total bleeding amount and removing all bleeding damage from them.",
	},
	["Steel Grasp"]: {
		description: "Throw out a trio of chains that deal {#}% damage and pull in enemies.",
	},
};

barbarian["Ultimate"] = {
	["Iron Maelstrom"]: {
		description: "Activate to attach a chain to your two-handed bludgeoning weapon and slam the ground, dealing {#}% damage and stunning them for 2 seconds. Reactivate a second time to attach a chain to your two-handed slashing weapon and swipe in front of you, dealing {#}% damage, and {#}% bleeding damage over 5 seconds. Reactivate a final time to attach a chain to your dual wield weapons and swing them around you, dealing {#}% damage per hit.",
	},
	["Call of the Ancients"]: {
		description: "Call upon 3 ancients to aid you in battle for 6 seconds. Korlic leaps at enemies, dealing {#}% damage and swings his weapons in a frenzy, dealing {#}% damage per hit. Talic spins in a whirlwind rapidly attacking enemies for {#}% damage. Madawc upheaves the ground, dealing {#}% damage.",
	},
	["Wrath of the Berserker"]: {
		description: "Gain Berserking and Unstoppable for 5 seconds. For the next 10 seconds, dealing direct damage with Basic Skills grants Berserking for 5 seconds.",
	},
};

barbarian["Capstone"] = {
	["Unconstrained"]: {
		description: "",
	},
	["Walking Arsenal"]: {
		description: "",
	},
	["Unbridled Rage"]: {
		description: "",
	},
	["Gushing Wounds"]: {
		description: "",
	},
};

barbarian["Paragon"] = {};

export { barbarian };