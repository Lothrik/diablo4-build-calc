import { nodeHistory } from "./node-history.js";
import { nodeValues } from "./node-values.js";
import { necromancerMinions } from "./necromancer-minions.js";

const buildNumber = 39517;

var fullJSON = "";
$.getJSON("../database/build-" + buildNumber + ".json", null, fullData => {
	fullJSON = fullData;
	$("#debugOutput").html("Successfully loaded `../database/build-" + buildNumber + ".json`.");
	// call runParser once after loading so fixJSON affects node connections recursively
	runParser(false);
});

const scaleRatio = 0.5;

const rootNodeNames = {
	"Barbarian": {
		0: "Ultimate",
		1: "Weapon Mastery",
		2: "Brawling",
		3: "Defensive",
		4: "Core",
		5: "Basic",
		6: "Capstone"
	},
	"Druid": {
		0: "Basic",
		1: "Spirit",
		2: "Defensive",
		3: "Companion",
		4: "Wrath",
		5: "Ultimate",
		6: "Capstone"
	},
	"Necromancer": {
		0: "Basic",
		1: "Capstone",
		2: "Core",
		3: "Corruption",
		4: "Summoning",
		5: "Ultimate",
		6: "Macabre"
	},
	"Rogue": {
		0: "Capstone",
		1: "Imbuements",
		2: "Agility",
		3: "Core",
		4: "Basic",
		5: "Ultimate",
		6: "Subterfuge"
	},
	"Sorcerer": {
		0: "Conjuration",
		1: "Ultimate",
		2: "Mastery",
		3: "Basic",
		4: "Capstone",
		5: "Defensive",
		6: "Core"
	},
}

const rootNodeNamesSorted = {
	"Barbarian": {
		0: "Basic",
		1: "Core",
		2: "Defensive",
		3: "Brawling",
		4: "Weapon Mastery",
		5: "Ultimate",
		6: "Capstone"
	},
	"Druid": {
		0: "Basic",
		1: "Spirit",
		2: "Defensive",
		3: "Companion",
		4: "Wrath",
		5: "Ultimate",
		6: "Capstone"
	},
	"Necromancer": {
		0: "Basic",
		1: "Core",
		2: "Macabre",
		3: "Corruption",
		4: "Summoning",
		5: "Ultimate",
		6: "Capstone",
	},
	"Rogue": {
		0: "Basic",
		1: "Core",
		2: "Agility",
		3: "Subterfuge",
		4: "Imbuements",
		5: "Ultimate",
		6: "Capstone",
	},
	"Sorcerer": {
		0: "Basic",
		1: "Core",
		2: "Defensive",
		3: "Conjuration",
		4: "Mastery",
		5: "Ultimate",
		6: "Capstone",
	},
}

let classProcessed = [];
let fixedJSON = false;

function levenshteinDistance(str1 = "", str2 = "") {
	const len1 = str1.length;
	const len2 = str2.length;
	const track = Array(len2 + 1).fill(null).map(() => Array(len1 + 1).fill(null));
	for (let i = 0; i <= len1; i++) track[0][i] = i;
	for (let j = 0; j <= len2; j++) track[j][0] = j;
	for (let j = 1; j <= len2; j++) {
		for (let i = 1; i <= len1; i++) {
			const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
			track[j][i] = Math.min(
				track[j][i - 1] + 1,			// deletion
				track[j - 1][i] + 1,			// insertion
				track[j - 1][i - 1] + indicator	// substitution
			);
		}
	}
	return track[len2][len1];
};

function sanitizeNodeDescription(descriptionText) {
	let sanitizedText = descriptionText
		.replace(/{c_.+?}/gi, "")										// `{c_white}`, `{c_yellow}`, `{c_green}`, ...
		.replace(/{\/c_.+?}/gi, "")										// `{/c_white}`, `{/c_yellow}`, `{/c_green}`, ...
		.replace(/{\/c}/gi, "")											// `{/c}`, exact.
		.replace(/{\/?u}/gi, "")										// `{u}` and `{/u}`.
		.replace(/{icon.+?}/gi, "")										// `{icon:bullet}`, and similar.
		.replace(/{if:.+?}[a-z]{0,2}{\/if}/gi, "")						// `{if:SF_21}s{/if}` and similar.
		.replace(/{if:mod.+?}(.|\r?\n)+?({else}|{\/if})/gi, "")			// `{if:Mod.UpgradeA}` -> `{/if}`, and similar.
		.replace(/{if:.+?}/gi, "")										// `{if:ADVANCED_TOOLTIP}`, and similar.
		.replace(/{\/if}/gi, "")										// `{/if}`, exact.
		.replace(/sLevel/g, "")											// `sLevel`, exact.
		.replace(/\|4([^:]+):([^;]+);/g, "$2")							// `|4first:second;` => `second`.
		.replace(/\|4([^:]+):([^\.]+)\./g, "$2.")						// `|4first:second.` => `second.`.
		.replace(/\[([^\]\|]+)\|\d?(%?)\d?([x\+]?)\|\]/g, "$3[$1]$2")	// Replace `[...|%x|]` with `x[...]%`, and similar.
		.replace(/\[([^\]\|]+)\|\d?([x\+]?)\d?(%?)\|\]/g, "$2[$1]$3")	// Replace `[...|x%|]` with `x[...]%`, and similar.
		.replace(/ *\* */g, "")											// `*`, including any nearby whitespace.
		.replace(/ *\| */g, "")											// `|`, including any nearby whitespace.
		.replace(/ \./g, ".")											// Replace ` .` with `.`.
		.replace(/{else}/gi, "\n")										// Replace `{else}` with a newline.
		.replace(/{(dot|payload):.+?}/gi, "{#}%")						// Replace `{dot:...}` and `{payload:...}` with `{#}%`.
		.replace(/ *{.+?} */g, "{#}")									// Replace anything inside curly brackets with `{#}`.
		.replace(/ *\[.+?\] */g, "{#}")									// Replace anything inside square brackets with `{#}`.
		.replace(/{.+?}{.+?}/g, "{#}")									// Replace `{#}{#}` with `{#}`.
		.replace(/([^x+ ]+?){#}/g, "$1 {#}")							// Ensure there is a space between any character (except `x`, `+`, and ` `) and the start of `{#}`.
		.replace(/{#}([a-z]+?)/gi, "{#} $1")							// Ensure there is a space between any letter (`a-z`, `A-Z`) and the end of `{#}`.
		.replace(/\( *{/g, "({")										// Remove any whitespace between `(` and `{`.
		.replace(/} *\)/g, "})")										// Remove any whitespace between `}` and `)`.
		.replace(/{#} +(st|nd|rd|th) /g, "{#}$1 ")						// Remove any whitespace between {#} and (`st `, `nd `, `rd `, or `th `).
		.replace(/ +(\r?\n)/g, "$1")									// Remove any whitespace at the end of a line.
		.replace(/(dealing {#}%?)( per hit| each)/g, "$1 damage$2")		// Add ` damage` between `dealing {#}` and (`per hit`, or `each`) if not already present.
																		// Add ` damage` between `poisons enemies for {#}` and ` over` if not already present.
		.replace(/(bleeds|bleeding|burns|burning|zaps|zapping|poisons|poisoning)( surrounding)?( enemies for {#}%?)( over)/gi, "$1$2$3 damage$4")
		.replace(/({#})( damage)/gi, "$1%$2")							// Add `%` between `{#}` and ` damage` if not already present.
		.replace(/(cooldown: {#})(\r?\n)/gi, "$1 seconds$2")			// Add ` seconds` after `Cooldown: {#}` if not already present.
		.replace(/(\r?\n)([^:\+]+)([a-z]+)$/gi, "$1$2$3.")				// Ensure the last line ends with a `.`, unless that line contains `:` or `+`, or ends with a character other than (`a-z`, `A-Z`).
		.replace(/(if this kills.+cooldown is reset).+(if this kills.+charge is refunded)/gi, "$1")
																		// Special handling for Death Blow conditional description logic.
		.trim();

	return sanitizedText;
}

function namedConnections(rawConnections, currentNode, classData, fallbackNode) {
	let namedConnections = "";
	const skillTreeValues = Object.values(classData["Skill Tree"]).filter((el, id) => typeof el === "object");
	Object.values(rawConnections).forEach(connectedNode => {
		if (connectedNode in skillTreeValues) {
			const connectedNodePower = skillTreeValues[connectedNode]["power"];
			const connectedNodeReward = skillTreeValues[connectedNode]["reward"];

			let connectedSkillName = undefined;
			if (connectedNodePower != undefined && "skill_name" in connectedNodePower) {
				connectedSkillName = connectedNodePower["skill_name"];
			} else if (connectedNodeReward != undefined && "reward_name" in connectedNodeReward) {
				connectedSkillName = connectedNodeReward["reward_name"];
			}

			if (connectedNodePower == undefined || connectedSkillName == undefined) {
				if (namedConnections.length > 0) namedConnections += ", ";
				namedConnections += '"' + fallbackNode + '"';
			} else if (connectedSkillName != currentNode) {
				if (namedConnections.length > 0) namedConnections += ", ";
				namedConnections += '"' + connectedSkillName + '"';
			}
		} else {
			throw new Error("connectedNode not in skillTreeValues");
		}
	});
	if (namedConnections.length > 0) {
		return "[ " + namedConnections + " ]";
	} else {
		return '[ "' + fallbackNode + '" ]';
	}
}

function fixJSON(classData, curNode, rootNodeName) {
	const skillTreeValues = Object.values(classData["Skill Tree"]).filter((el, id) => typeof el === "object");
	const nodeData = skillTreeValues[String(curNode)];
	if (buildNumber == 39517) {
		let skillName = undefined;
		if ("power" in nodeData && "skill_name" in nodeData["power"]) {
			skillName = nodeData["power"]["skill_name"];
		} else if ("reward" in nodeData && "reward_name" in nodeData["reward"]) {
			skillName = nodeData["reward"]["reward_name"];
		}

		if (skillName != undefined && skillName != skillName.trim()) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `" + skillName.trim() + "`.");
			nodeData["power"]["skill_name"] = skillName.trim();
		}
		// `Supreme Unstable Currents` was incorrectly assigned the duplicate name `Prime Unstable Currents` in 36023, causing a naming collision.
		if (skillName == "Prime Unstable Currents" && nodeData["id"] == 619) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Supreme Unstable Currents`.");
			nodeData["power"]["skill_name"] = "Supreme Unstable Currents";
		// `Prime Inferno` was incorrectly assigned the name `Upgrade 1` in 36023.
		} else if (skillName == "Upgrade 1" && nodeData["id"] == 617) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Prime Inferno`.");
			nodeData["power"]["skill_name"] = "Prime Inferno";
		// `Supreme Inferno` was incorrectly assigned the name `Upgrade 2` in 36023.
		} else if (skillName == "Upgrade 2" && nodeData["id"] == 620) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Supreme Inferno`.");
			nodeData["power"]["skill_name"] = "Supreme Inferno";
		// `Enhanced Charged Bolts` was incorrectly assigned the name `Enhanced Charged Bolt` in 36023.
		} else if (skillName == "Enhanced Charged Bolt" && nodeData["id"] == 731) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Enhanced Charged Bolts`.");
			nodeData["power"]["skill_name"] = "Enhanced Charged Bolts";
		// `Wolf Pack` was renamed to `Wolves` in 36023, but its modifier nodes were not renamed at the same time.
		} else if (skillName == "Wolf Pack" && nodeData["id"] == 459) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Wolves`.");
			nodeData["power"]["skill_name"] = "Wolves";
		} else if (skillName == "Enhanced Wolf Pack" && nodeData["id"] == 509) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Enhanced Wolves`.");
			nodeData["power"]["skill_name"] = "Enhanced Wolves";
		} else if (skillName == "Ferocious Wolf Pack" && nodeData["id"] == 388) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Ferocious Wolves`.");
			nodeData["power"]["skill_name"] = "Ferocious Wolves";
		} else if (skillName == "Brutal Wolf Pack" && nodeData["id"] == 389) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Brutal Wolves`.");
			nodeData["power"]["skill_name"] = "Brutal Wolves";
		// `Stealth` was renamed to `Concealment` in 36331, but its modifier nodes were not renamed at the same time.
		} else if (skillName == "Stealth" && nodeData["id"] == 245) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Concealment`.");
			nodeData["power"]["skill_name"] = "Concealment";
		} else if (skillName == "Enhanced Stealth" && nodeData["id"] == 374) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Enhanced Concealment`.");
			nodeData["power"]["skill_name"] = "Enhanced Concealment";
		} else if (skillName == "Countering Stealth" && nodeData["id"] == 246) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Countering Concealment`.");
			nodeData["power"]["skill_name"] = "Countering Concealment";
		} else if (skillName == "Subverting Stealth" && nodeData["id"] == 247) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "` -> `Subverting Concealment`.");
			nodeData["power"]["skill_name"] = "Subverting Concealment";
		}
		if (skillName != undefined) {
			// ultimate skills don't have ranks
			if (rootNodeName == "Ultimate" && /cooldown:/i.test(nodeData["power"]["skill_desc"]) && nodeData["reward"]["max_talent_ranks"] == 5) {
				$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "`; maxTalentRanks: " + nodeData["reward"]["max_talent_ranks"] + " -> 1.");
				nodeData["reward"]["max_talent_ranks"] = 1;
			} else {
				const namedConnectionList = JSON.parse(namedConnections(nodeData["connections"], skillName, classData, rootNodeName));
				let chainedConnectionList = namedConnectionList;
				namedConnectionList.forEach(namedConnection => {
					skillTreeValues.filter(chainedData => {
						if (chainedData["power"] != undefined && chainedData["power"]["skill_name"] == namedConnection) {
							chainedConnectionList.push(...JSON.parse(namedConnections(chainedData["connections"], chainedData["power"]["skill_name"], classData, rootNodeName)));
						}
					});
				});
				chainedConnectionList = [...new Set(chainedConnectionList)];

				let unmodifiedName = null;
				let unmodifiedNameSpecial = null;

				if (nodeData["reward"]["power_mod_hash"] > 0) {
					if (skillName.includes(" ")) {
						unmodifiedName = skillName.split(" ").slice(1).join(" ");
					} else if (skillName.includes("_Mod_")) {
						unmodifiedName = skillName.split("_Mod_")[1].split("_")[0].replace(/([A-Z])/g, " $1").trim();
					}
					if (unmodifiedName == skillName) unmodifiedName = null;

					if (unmodifiedName == "Wolf Pack" && rootNodeName == "Companion") {
						unmodifiedNameSpecial = "Wolves";
					} else if (unmodifiedName == "Stealth" && rootNodeName == "Subterfuge") {
						unmodifiedNameSpecial = "Concealment";
					}
				}

				if (nodeData["reward"]["max_talent_ranks"] == 3 && nodeData["reward"]["power_mod_hash"] > 0) {
					$("#debugOutput").append("\nFixing nodeID " + nodeData["id"] + "; SkillName: `" + skillName + "`; maxTalentRanks: " + nodeData["reward"]["max_talent_ranks"] + " -> 1.");
					nodeData["reward"]["max_talent_ranks"] = 1;
				}
				nodeData["BASE_SKILL_NAME"] = unmodifiedNameSpecial == null ? unmodifiedName : unmodifiedNameSpecial; // for reference later in recursiveSkillTreeScan
			}
		}
	}
}

function updateSavedValues(className, rootNodeName, skillName, sanitizedDescription, extraValues = false) {
	const extraLabel = className == "Sorcerer" ? "Enchantment" : "Extra";
	const extraName = extraValues ? `${skillName} — ${extraLabel}` : skillName;
	const savedValues = nodeValues[className][rootNodeName];
	if (savedValues == undefined) savedValues = {};
	if (savedValues[extraName] == undefined) savedValues[extraName] = [];
	const descLength = (sanitizedDescription.match(/{#}/g) || []).length;

	const skillValues = savedValues[extraName];
	if (descLength > skillValues.length) {
		skillValues.push(...Array(descLength - skillValues.length).fill(""));
	} else {
		skillValues.length = descLength;
	}

	const name = extraValues ? "extraValues" : "values";
	let output = "";
	if (skillValues.length > 1) {
		output = `\t\t${name}: [ "${skillValues.join('", "')}" ],\n`
	} else if (skillValues.length > 0) {
		output = `\t\t${name}: [ "${skillValues[0]}" ],\n`;
	}

	if (descLength > 0) skillValues["recentlyAdded"] = true;
	return output;
}

const MAX_RECURSION_DEPTH = 10;
function recursiveSkillTreeScan(connectionData, classData, className, rootNode, rootNodeName, mappedIDs, recursionDepth = 0) {
	let output = "";
	if (recursionDepth < MAX_RECURSION_DEPTH) {
		connectionData.forEach((connectedNode, connectedIndex) => {
			const skillTreeValues = Object.values(classData["Skill Tree"]).filter((el, id) => typeof el === "object");
			if (!mappedIDs[connectedNode] && connectedNode in skillTreeValues) {
				const nodeData = skillTreeValues[String(connectedNode)];
				mappedIDs[connectedNode] = true;
				if (!classProcessed[className]) fixJSON(classData, connectedNode, rootNodeName);
				if (nodeData["power"] != undefined) {
					const skillName = "skill_name" in nodeData["power"] ? nodeData["power"]["skill_name"] : nodeData["reward"]["reward_name"];
					output += '\t"' + skillName + '": {\n';
					const baseSkillName = nodeData["BASE_SKILL_NAME"];
					if (baseSkillName != undefined) {
						output += '\t\tbaseSkill: "' + baseSkillName + '",\n';
					}
					output += "		connections: " + namedConnections(nodeData["connections"], skillName, classData, rootNodeName) + ",\n";
					// TODO: damage type is not currently exported, update or remove..?
					// output damage type for any non-modifier skill nodes, as long as they have a hit or DoT payload
					/*if (baseSkillName == undefined && /{payload:.+?}|{dot:.+?}/i.test(nodeData["power"]["skill_desc"]) && nodeData["damage_type"] >= 0) {
						output += "\t\tdamageType: " + nodeData["damage_type"] + ",\n";
					}*/
					const sanitizedDescription = sanitizeNodeDescription(nodeData["power"]["skill_desc"]);
					let extraDescription = "";
					if (className == "Sorcerer" && nodeData["reward"]["max_talent_ranks"] == 5) {
						const MAX_TEXT_DISTANCE = 4;
						const sorcererEnchants = classData["Enchantment"];
						let textDistance1 = Number.MAX_SAFE_INTEGER;
						for (const [enchantKey, enchantValue] of Object.entries(sorcererEnchants)) {
							const textDistance2 = levenshteinDistance(enchantKey.split("_").at(-1).toLowerCase(), skillName.toLowerCase());
							if (textDistance2 < textDistance1 && textDistance2 < MAX_TEXT_DISTANCE) {
								extraDescription = enchantValue["desc"];
								textDistance1 = textDistance2;
							}
						}
						extraDescription = sanitizeNodeDescription(extraDescription);
						if (extraDescription.length > 0) {
							output += "\t\tdescription: `" + sanitizedDescription + "\n\n— Enchantment Effect —\n" + extraDescription + "`,\n";
						} else {
							output += "\t\tdescription: `" + sanitizedDescription + "`,\n";
						}
					} else {
						output += "\t\tdescription: `" + sanitizedDescription + "`,\n";
					}
					const nodeHistoricalId = nodeHistory[className][rootNodeName + ": " + skillName];
					if (nodeHistoricalId != undefined) {
						output += "\t\tid: " + nodeHistoricalId + ",\n";
					} else {
						const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
						nodeHistory[className][rootNodeName + ": " + skillName] = nodeHistoryLength;
						output += "\t\tid: " + nodeHistoryLength + ",\n";
					}
					output += "\t\tmaxPoints: " + nodeData["reward"]["max_talent_ranks"] + ",\n";
					output += updateSavedValues(className, rootNodeName, skillName, sanitizedDescription);
					if (extraDescription.length > 0) {
						output += updateSavedValues(className, rootNodeName, skillName, extraDescription, true);
					}
					output += "\t\tx: " + parseFloat(((nodeData["x_pos"] - rootNode["x_pos"]) * scaleRatio).toFixed(3)) + ",\n";
					output += "\t\ty: " + parseFloat(((nodeData["y_pos"] - rootNode["y_pos"]) * scaleRatio).toFixed(3)) + "\n";
					output += "\t},\n";
					output += recursiveSkillTreeScan(nodeData["connections"], classData, className, rootNode, rootNodeName, mappedIDs, recursionDepth + 1);
				}
			}
		});
	}
	return output;
}

function runParser(downloadMode) {
	console.clear();

	let paragonData = {};
	for (const [className, classData] of Object.entries(fullJSON)) {
		// process skill tree, if present in classData
		if ("Skill Tree" in classData) {
			const classNameLower = className.toLowerCase();
			const classObjectName = classNameLower + "Data";
			if (!classProcessed[className]) {
				$("#debugOutput").append("\nProcessing node data for class `" + className + "`:");
			}

			const skillTreeValues = Object.values(classData["Skill Tree"]).filter((el, id) => typeof el === "object");

			const rootNodes = skillTreeValues.filter(curNode => curNode["root_node"]);
			const originNode = rootNodes.find((curNode, curIndex) => rootNodeNames[className][curIndex] == "Basic");

			let formattedData = "let " + classObjectName + " = {};\n\n";
			formattedData += classObjectName + '["Trunk Data"] = {\n';
			for (let i = 0; i < Object.keys(rootNodeNamesSorted[className]).length; i++) {
				rootNodes.forEach((rootNode, rootIndex) => {
					const rootNodeName = rootNodeNames[className][rootIndex];
					if (rootNodeName == rootNodeNamesSorted[className][i]) {
						formattedData += '\t"' + rootNodeName + '": {\n';
						const nextRootNode = rootNodeNamesSorted[className][i + 1];
						if (nextRootNode && nextRootNode.length != undefined) {
							formattedData += '\t\tconnections: [ "' + nextRootNode + '" ],\n';
						}
						if (rootNode["req_points"] > 0) {
							formattedData += "\t\trequiredPoints: " + rootNode["req_points"] + ",\n";
						}
						formattedData += "\t\tx: " + parseFloat(((rootNode["x_pos"] - originNode["x_pos"]) * scaleRatio).toFixed(3)) + ",\n";
						formattedData += "\t\ty: " + parseFloat(((rootNode["y_pos"] - originNode["y_pos"]) * scaleRatio).toFixed(3)) + "\n";
						formattedData += "\t},\n";
					}
				});
			}
			if (className == "Necromancer" && necromancerMinions != undefined) {
				formattedData += '\t"Book of the Dead": {\n';
				formattedData += "\t\tx: 2500,\n";
				formattedData += "\t\ty: 0\n";
				formattedData += "\t},\n";
			} else if (className == "Druid") {
				formattedData += '\t"Spirit Boons": {\n';
				formattedData += "\t\tx: 2500,\n";
				formattedData += "\t\ty: 0\n";
				formattedData += "\t},\n";
			}
			formattedData += "};\n\n";

			for (let i = 0, n = Object.keys(rootNodeNamesSorted[className]).length; i < n; i++) {
				rootNodes.forEach((rootNode, rootIndex) => {
					const rootNodeName = rootNodeNames[className][rootIndex];
					if (rootNodeName == rootNodeNamesSorted[className][i]) {
						let mappedIDs = [];
						formattedData += classObjectName + '["' + rootNodeNames[className][rootIndex] + '"] = {\n';
						formattedData += recursiveSkillTreeScan(rootNode["connections"], classData, className, rootNode, rootNodeName, mappedIDs, 0);
						formattedData += "};\n\n";
					}
				});
			}
			if (className == "Necromancer" && necromancerMinions != undefined) {
				formattedData += classObjectName + '["Book of the Dead"] = {\n';
				for (const [minionName, minionData] of Object.entries(necromancerMinions)) {
					formattedData += '\t"' + minionName + '": {\n';
					for (const [minionTypeName, minionTypeData] of Object.entries(minionData)) {
						formattedData += '\t\t"' + minionTypeName + '": {\n';
						formattedData += "\t\t\tdescription: `" + minionTypeData["Description"] + "`,\n";
						const nodeHistoricalId = nodeHistory[className]["Book of the Dead: " + minionTypeName];
						if (nodeHistoricalId != undefined) {
							formattedData += "\t\t\tid: " + nodeHistoricalId + ",\n";
						} else {
							const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
							nodeHistory[className]["Book of the Dead: " + minionTypeName] = nodeHistoryLength;
							formattedData += "\t\t\tid: " + nodeHistoryLength + ",\n";
						}
						formattedData += "\t\t\tsacrifice: `" + minionTypeData["Sacrifice"] + "`,\n";
						formattedData += "\t\t\tupgrades: [\n";
						minionTypeData["Upgrades"].forEach((upgradeText, upgradeIndex) => {
							formattedData += "\t\t\t\t`" + upgradeText + "`";
							if (upgradeIndex < minionTypeData["Upgrades"].length - 1) {
								formattedData += ",\n";
							} else {
								formattedData += "\n";
							}
						});
						formattedData += "\t\t\t]\n";
						formattedData += "\t\t},\n";
					}
					formattedData += "\t},\n";
				}
				formattedData += "};\n\n";
			} else if (className == "Druid") {
				const druidBoons = classData["Spirit Boons"];
				formattedData += classObjectName + '["Spirit Boons"] = {\n';
				let boonTypeFormatted = [];
				for (const [boonFullName, boonData] of Object.entries(druidBoons)) {
					const boonFullNameArray = boonFullName.split("_");
					const boonTypeName = boonFullNameArray.at(-2);
					const boonModifierId = Number(boonFullNameArray.at(-1));
					if (!boonTypeFormatted[boonTypeName]) {
						formattedData += '	"' + boonTypeName + '": {\n';
						const nodeHistoricalId = nodeHistory[className]["Spirit Boons: " + boonTypeName];
						if (nodeHistoricalId != undefined) {
							formattedData += "\t\tid: " + nodeHistoricalId + ",\n";
						} else {
							const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
							nodeHistory[className]["Spirit Boons: " + boonTypeName] = nodeHistoryLength;
							formattedData += "\t\tid: " + nodeHistoryLength + ",\n";
						}
						boonTypeFormatted[boonTypeName] = true;
					}

					formattedData += '\t\t"' + boonData["name"] + '": {\n';
					const sanitizedDescription = sanitizeNodeDescription(boonData["desc"]);
					formattedData += `\t${updateSavedValues(className, "Spirit Boons", boonData["name"], sanitizedDescription)}`;
					formattedData += "\t\t\tdescription: `" + sanitizedDescription + "`,\n";
					const nodeHistoricalId = nodeHistory[className]["Spirit Boons: " + boonData["name"]];
					if (nodeHistoricalId != undefined) {
						formattedData += "\t\t\tid: " + nodeHistoricalId + "\n";
					} else {
						const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
						nodeHistory[className]["Spirit Boons: " + boonData["name"]] = nodeHistoryLength;
						formattedData += "\t\t\tid: " + nodeHistoryLength + "\n";
					}

					if (boonModifierId == 4) {
						formattedData += "\t\t}\n";
						if (boonTypeName == "Wolf") {
							formattedData += "\t}\n";
						} else {
							formattedData += "\t},\n";
						}
					} else {
						formattedData += "\t\t},\n";
					}
				}
				formattedData += "};\n\n";
			}
			formattedData += "export { " + classObjectName + " };";
			if (fixedJSON) {
				if (downloadMode) {
					let downloadElement = document.createElement("a");
					downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedData);
					downloadElement.download = classNameLower + ".js";
					downloadElement.click();
				} else {
					console.log(formattedData);
				}
			}
			classProcessed[className] = true;
		}

		// process paragon board
		paragonData[className] = {};
		if (classData["Paragon (Board)"] != undefined) {
			paragonData[className]["Board"] = {};
			for (const [boardName, boardData] of Object.entries(classData["Paragon (Board)"])) {
				paragonData[className]["Board"][boardData["name"]] = [];
				for (const [rowIndex, rowData] of Object.entries(boardData["data"])) {
					paragonData[className]["Board"][boardData["name"]].push(rowData.split(","));
				}
			}
		}
		if (classData["Paragon (Node)"] != undefined) {
			paragonData[className]["Node"] = {};
			for (const [nodeName, nodeData] of Object.entries(classData["Paragon (Node)"])) {
				let nodeDesc;
				if (nodeName.toLowerCase().includes("legendary") && "Paragon (Legendary)" in classData) {
					const nodeId = nodeName.replace(/\D/g, "");
					for (const [legendaryKey, legendaryData] of Object.entries(classData["Paragon (Legendary)"])) {
						if (legendaryKey.replace(/\D/g, "") == nodeId) {
							nodeDesc = sanitizeNodeDescription(legendaryData["desc"]);
							break;
						}
					}
				}
				paragonData[className]["Node"][nodeName] = {
					name: nodeData["name"],
					description: nodeDesc
				};
			}
		}
	}

	if (fixedJSON) {
		let formattedParagonData = "let paragonData = ";
		formattedParagonData += JSON.stringify(paragonData, null, "\t");
		formattedParagonData += "\n\nexport { paragonData };";
		if (downloadMode) {
			let downloadElement = document.createElement("a");
			downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedParagonData);
			downloadElement.download = "paragon.js";
			downloadElement.click();
		} else {
			console.log(formattedParagonData);
		}

		let formattedNodeHistory = "let nodeHistory = ";
		formattedNodeHistory += JSON.stringify(nodeHistory, null, "\t");
		formattedNodeHistory += "\n\nexport { nodeHistory };";
		if (downloadMode) {
			let downloadElement = document.createElement("a");
			downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedNodeHistory);
			downloadElement.download = "node-history.js";
			downloadElement.click();
		} else {
			console.log(formattedNodeHistory);
		}

		for (const [nodeClassKey, nodeClassData] of Object.entries(nodeValues)) {
			for (const [nodeGroupKey, nodeGroupData] of Object.entries(nodeClassData)) {
				for (const [nodeSkillKey, nodeSkillData] of Object.entries(nodeGroupData)) {
					if (nodeSkillData["recentlyAdded"]) continue;
					delete nodeValues[nodeClassKey][nodeGroupKey][nodeSkillKey];
				}
			}
		}

		let formattedNodeValues = "let nodeValues = ";
		formattedNodeValues += JSON.stringify(nodeValues, null, "\t");
		formattedNodeValues += "\n\nexport { nodeValues };";
		if (downloadMode) {
			let downloadElement = document.createElement("a");
			downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedNodeValues);
			downloadElement.download = "node-values.js";
			downloadElement.click();
		} else {
			console.log(formattedNodeValues);
		}
	}
	fixedJSON = true;
}

$("#parseToFile").on("click", () => { runParser(true); });
$("#parseToConsole").on("click", () => { runParser(false); });