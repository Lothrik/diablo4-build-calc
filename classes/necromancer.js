let necromancer = {};

necromancer["Trunk Data"] = {
	["Basic"]: {
		x: 0,
		y: 0,
	},
};

necromancer["Basic"] = {
	["Decompose"]: {
		connections: [ "Basic" ],
		description: "Tear the flesh from an enemy, dealing {#}% damage per second and forming a usable Corpse with the flesh every 2.5 seconds.",
		x: -150,
		y: -150,
	},
	["Hemmorhage"]: {
		connections: [ "Basic" ],
		description: "Burst an enemy's blood, dealing {#}% damage. Hemmorhage has a 20% chance to form a Blood Orb.",
		x: 150,
		y: -150,
	},
	["Bone Splinters"]: {
		connections: [ "Basic" ],
		description: "Fire 3 bone splinters, dealing {#}% damage each. Each subsequent time an enemy is hit by the same cast of Bone Splinters, you gain 1 Essence.",
		x: 150,
		y: 150,
	},
	["Reap"]: {
		connections: [ "Basic" ],
		description: "Sweep an ethereal scythe in front of you, dealing {#}% damage. Hitting an enemy with Reap increases your damage reduction by 15% for 2 seconds.",
		x: -150,
		y: 150,
	},
};

necromancer["Core"] = {
	["Blight"]: {
		description: "Unleash concentrated Blight that deals {#}% damage and leaves behind a defiled area, dealing {#}% damage over 6 seconds.",
	},
	["Blood Surge"]: {
		description: "Draw blood from enemies, dealing {#}% damage, and expel a nova, dealing {#}% damage. Blood Surge's nova damage is increased by {#}% per enemy drained, up to {#}%.",
	},
	["Blood Lance"]: {
		description: "Throw a blood lance that lingers in an enemy for 3 seconds, dealing {#}% damage to the enemy and all other lanced enemies.",
	},
	["Bone Spear"]: {
		description: "Conjure a bone spear from the ground, dealing {#}% damage and piercing through enemies.",
	},
	["Sever"]: {
		description: "A spectre of you charges forward and attacks with its scythe for {#}% damage.",
	},
};

necromancer["Macabre"] = {
	["Blood Mist"]: {
		description: "Disperse into a bloody mist, becoming Immune for 3 seconds. Your Movement Speed is reduced by {#}% and you periodically deal {#}% damage to enemies, healing for 100% of the damage dealt.",
	},
	["Bone Prison"]: {
		description: "Unearth a prison of bone with x Life that surrounds the target area for 6 seconds.",
	},
	["Bone Spirit"]: {
		description: "Consume all of your Essence to conjure a spirit of bone that seeks enemies. Upon reaching an enemy, the spirit explodes, dealing {#}% damage to the target and all nearby enemies. Damage is increased by {#}% for each point of Essence spent casting Bone Spirit.",
	},
};

necromancer["Corruption"] = {
	["Corpse Explosion"]: {
		description: "Detonate a Corpse, dealing {#}% damage to nearby enemies.",
	},
	["Iron Maiden"]: {
		description: "Curse the target area. Enemies afflicted by Iron Maiden take {#}% damage each time they deal direct damage. Lasts 10 seconds.",
	},
	["Decrepify"]: {
		description: "Curse the target area. Enemies afflicted by Decrepify are Slowed by {#}% and deal {#}% less damage for 10 seconds.",
	},
	["Corpse Tendrils"]: {
		description: "Veins burst out of a Corpse, pulling in enemies, Stunning them for 3 seconds, and dealing {#}% damage to them.",
	},
};

necromancer["Ultimate"] = {
	["Army of the Dead"]: {
		description: "Call forth the deep buried dead. Volatile undead emerge over the next 7 seconds that explode near enemies, dealing {#}% damage.",
	},
	["Blood Wave"]: {
		description: "Conjure a tidal wave of blood that deals {#}% damage and knocks enemies back.",
	},
	["Bone Storm"]: {
		description: "A swirling storm of bones surrounds you and your Golem, dealing {#}% damage to nearby enemies over 10 seconds.",
	},
};

necromancer["Book of the Dead"] = {};

necromancer["Paragon"] = {};

export { necromancer };