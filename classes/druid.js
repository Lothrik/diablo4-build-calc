let druid = {};

druid["Trunk Data"] = {
	["Basic"]: {
		x: 0,
		y: 0,
	},
};

druid["Basic"] = {
	["Wind Shear"]: {
		connections: [ "Basic" ],
		description: "Conjure a piercing blade of wind, dealing {#}% damage.",
		x: -150,
		y: -150,
	},
	["Storm Strike"]: {
		connections: [ "Basic" ],
		description: "Electricity gathers around your weapon, dealing {#}% damage split between your target and up to 3 nearby enemies.",
		x: 150,
		y: -150,
	},
	["Claw"]: {
		connections: [ "Basic" ],
		description: "Shapeshift into a Werewolf and claw at an enemy for {#}% damage.",
		x: 200,
		y: 75,
	},
	["Maul"]: {
		connections: [ "Basic" ],
		description: "Shapeshift into a Werebear and maul nearby enemies, dealing {#}% damage.",
		x: 0,
		y: 200,
	},
	["Earthspike"]: {
		connections: [ "Basic" ],
		description: "Sunder the earth, impaling the first enemy hit for {#}% damage.",
		x: -200,
		y: 75,
	},
};

export { druid };
