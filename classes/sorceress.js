let sorceress = {};

sorceress["Trunk Data"] = {
	["Basic"]: {
		x: 0,
		y: 0,
	},
};

sorceress["Basic"] = {
	["Fire Bolt"]: {
		connections: [ "Basic" ],
		description: "Hurl a flaming bolt, dealing {#}% damage and Burning for {#}% damage over 8 seconds.",
		x: -150,
		y: -150,
	},
	["Arc Lash"]: {
		connections: [ "Basic" ],
		description: "Unleash arcing lightning that shocks enemies in front of you for {#}%. Every 10 times Arc Lash swipes, it Stuns all enemies hit for 2 seconds.",
		x: 150,
		y: -150,
	},
	["Spark"]: {
		connections: [ "Basic" ],
		description: "Launch a bolt of lighting that shocks an enemy 4 times, dealing {#}% damage each hit.",
		x: 150,
		y: 150,
	},
	["Frost Bolt"]: {
		connections: [ "Basic" ],
		description: "Throw a bolt of frost at an enemy, dealing {#}% damage and Chilling them for {#}%.",
		x: -150,
		y: 150,
	},
};

export { sorceress };