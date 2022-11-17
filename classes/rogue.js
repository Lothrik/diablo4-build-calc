let rogue = {};

rogue["Trunk Data"] = {
	["Basic"]: {
		x: 0,
		y: 0,
	},
};

rogue["Basic"] = {
	["Puncture"]: {
		connections: [ "Basic" ],
		description: "Throw your blades, dealing {#}% damage and Slowing enemies by 20% for 2 seconds.",
		x: -150,
		y: -150,
	},
	["Heart Seeker"]: {
		connections: [ "Basic" ],
		description: "Fire an arrow that seeks an enemy, dealing {#}% damage and increasing your Critical Strike Chance against them by 3% for 4 seconds, up to 15%.",
		x: 150,
		y: -150,
	},
	["Forceful Arrow"]: {
		connections: [ "Basic" ],
		description: "Fire a powerful arrow at an enemy, dealing {#}% damage and making them Vulnurable for 2 seconds.",
		x: 200,
		y: 75,
	},
	["Invigorating Strike"]: {
		connections: [ "Basic" ],
		description: "Melee attack an enemy, dealing {#}% damage and increasing Energy Regeneration by x20% for 3 seconds.",
		x: 0,
		y: 200,
	},
	["Blade Shift"]: {
		connections: [ "Basic" ],
		description: "Stab your victim for {#}% damage and use their vitality to shift, allowing you to move freely through enemies for 3 seconds.",
		x: -200,
		y: 75,
	},
};

export { rogue };