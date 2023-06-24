import { nodeHistory } from "./node-history.js";
import { nodeValues } from "./node-values.js";

import { codexHistory } from "./codex-history.js";
import { codexValues } from "./codex-values.js";

import { necromancerMinions } from "./necromancer-minions.js";

const buildNumber = 42338;

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
		6: "Key Passive"
	},
	"Druid": {
		0: "Basic",
		1: "Spirit",
		2: "Defensive",
		3: "Companion",
		4: "Wrath",
		5: "Ultimate",
		6: "Key Passive"
	},
	"Necromancer": {
		0: "Basic",
		1: "Key Passive",
		2: "Core",
		3: "Corruption",
		4: "Summoning",
		5: "Ultimate",
		6: "Macabre"
	},
	"Rogue": {
		0: "Key Passive",
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
		4: "Key Passive",
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
		6: "Key Passive"
	},
	"Druid": {
		0: "Basic",
		1: "Spirit",
		2: "Defensive",
		3: "Companion",
		4: "Wrath",
		5: "Ultimate",
		6: "Key Passive"
	},
	"Necromancer": {
		0: "Basic",
		1: "Core",
		2: "Macabre",
		3: "Corruption",
		4: "Summoning",
		5: "Ultimate",
		6: "Key Passive",
	},
	"Rogue": {
		0: "Basic",
		1: "Core",
		2: "Agility",
		3: "Subterfuge",
		4: "Imbuements",
		5: "Ultimate",
		6: "Key Passive",
	},
	"Sorcerer": {
		0: "Basic",
		1: "Core",
		2: "Defensive",
		3: "Conjuration",
		4: "Mastery",
		5: "Ultimate",
		6: "Key Passive",
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

function updateSavedValues(className, rootNodeName, skillName, currentDescription, extraValues = false) {
	const extraLabel = className == "Sorcerer" ? "Enchantment" : "Extra";
	const extraName = extraValues ? `${skillName} — ${extraLabel}` : skillName;
	let savedValues = nodeValues[className][rootNodeName];
	if (savedValues == undefined) savedValues = {};
	if (savedValues[extraName] == undefined) savedValues[extraName] = [];
	const descLength = (currentDescription.match(/{#}/g) || []).length;

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

const codexCategoryNames = {
	"0": "Offensive",
	"1": "Defensive",
	"2": "Utility",
	"3": "Resource",
	"4": "Mobility",
	"5": "Other",
	"6": "Unknown"
};

function getCodexId(codexPowerName, codexCategoryName, className) {
	const codexHistoricalId = codexHistory[codexCategoryName + ": " + codexPowerName];
	if (codexHistoricalId != undefined) {
		return codexHistoricalId;
		$("#debugOutput").html($("#debugOutput").html() + "Loading existing codexHistory ID: `" + codexHistoricalId + "` for powerName: `" + codexCategoryName + ": " + codexPowerName + "`.");
	} else {
		const codexHistoryLength = Object.keys(codexHistory).length;
		codexHistory[codexCategoryName + ": " + codexPowerName] = codexHistoryLength;
		return codexHistoricalId;
		$("#debugOutput").html($("#debugOutput").html() + "Adding new codexHistory ID: `" + codexHistoryLength + "` for powerName: `" + codexCategoryName + ": " + codexPowerName + "`.");
	}
}

function getCodexValues(codexPowerName, codexCategoryName, className, currentDescription) {
	if (!(className in codexValues)) codexValues[className] = {};
	if (!(codexCategoryName in codexValues[className])) codexValues[className][codexCategoryName] = {};
	if (!(codexPowerName in codexValues[className][codexCategoryName])) codexValues[className][codexCategoryName][codexPowerName] = {};
	const codexMatch = codexValues[className][codexCategoryName][codexPowerName];
	if (codexPowerName.includes("Aspect")) {
		if (!("dungeon" in codexMatch)) codexMatch["dungeon"] = "";
		if (!("region" in codexMatch)) codexMatch["region"] = "";
	}
	if (!("values" in codexMatch)) codexMatch["values"] = [];

	const descLength = (currentDescription.match(/{#}/g) || []).length;

	if (descLength > codexMatch["values"].length) {
		codexMatch["values"].push(...Array(descLength - codexMatch["values"].length).fill(""));
	} else {
		codexMatch["values"].length = descLength;
	}

	if (currentDescription.length > 0) codexMatch["recentlyAdded"] = true;
	return codexMatch;
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
					const skillNameLocalized = "skill_name_localized" in nodeData["power"] ? nodeData["power"]["skill_name_localized"] : null;
					output += '\t"' + skillName + '": {\n';
					const baseSkillName = nodeData["BASE_SKILL_NAME"];
					if (baseSkillName != undefined) {
						output += '\t\tbaseSkill: "' + baseSkillName + '",\n';
					}
					output += "\t\tconnections: " + namedConnections(nodeData["connections"], skillName, classData, rootNodeName) + ",\n";
					let currentDescription = nodeData["power"]["skill_desc"];
					let currentDescriptionLocalized = "skill_desc_localized" in nodeData["power"] ? Object.assign({}, nodeData["power"]["skill_desc_localized"]) : null;
					const localKeys = currentDescriptionLocalized == null ? [] : Object.keys(currentDescriptionLocalized);
					if (baseSkillName == undefined && nodeData["power"]["power_tags"] != undefined) {
						const filteredTags = nodeData["power"]["power_tags"].filter(tag => !tag.includes("_")).join(", ");
						if (filteredTags.length > 0) {
							if (currentDescription == undefined) {
								currentDescription = "";
							} else {
								currentDescription += "\n\n";
							}
							const tagText = `Tags: ${filteredTags}.`;
							currentDescription += tagText;
						}
						for (const localKey of localKeys) {
							let filteredTags = nodeData["power"]["power_tags_localized"][localKey].filter(tag => !tag.includes("_"));
							if (filteredTags.length == 0) continue;
							for (let i = 0, n = filteredTags.length; i < n; i++) {
								if (filteredTags[i].includes("[") && filteredTags[i].includes("]")) filteredTags[i] = filteredTags[i].split("]")[1].split("[")[0];
							}
							filteredTags = filteredTags.join(", ");
							if (currentDescriptionLocalized[localKey] == undefined) {
								currentDescriptionLocalized[localKey] = "";
							} else {
								currentDescriptionLocalized[localKey] += "\n\n";
							}
							const tagText = `Tags: ${filteredTags}.`;
							currentDescriptionLocalized[localKey] += tagText;
						}
					}
					let extraDescription = "";
					let extraDescriptionLocalized = {};
					if (className == "Sorcerer" && nodeData["reward"]["max_talent_ranks"] == 5) {
						const MAX_TEXT_DISTANCE = 4;
						const sorcererEnchants = classData["Enchantment"];
						let textDistance1 = Number.MAX_SAFE_INTEGER;
						for (const [enchantKey, enchantValue] of Object.entries(sorcererEnchants)) {
							const textDistance2 = levenshteinDistance(enchantKey.split("_").at(-1).toLowerCase(), skillName.toLowerCase());
							if (textDistance2 < textDistance1 && textDistance2 < MAX_TEXT_DISTANCE) {
								extraDescription = enchantValue["desc"];
								extraDescriptionLocalized = enchantValue["desc_localized"];
								textDistance1 = textDistance2;
							}
						}
						if (extraDescription.length > 0) {
							const enchantText = "\n\n— Enchantment Effect —\n" + extraDescription;
							currentDescription += enchantText;
						}
						for (const localKey of localKeys) {
							if (extraDescriptionLocalized[localKey].length == 0) continue;
							const enchantText = "\n\n— Enchantment Effect —\n" + extraDescriptionLocalized[localKey];
							currentDescriptionLocalized[localKey] += enchantText;
						}
						output += "\t\tdescription: `" + currentDescription + "`,\n";
					} else {
						output += "\t\tdescription: `" + currentDescription + "`,\n";
					}
					if (skillNameLocalized != null) {
						output += "\t\tnameLocalized: " + JSON.stringify(skillNameLocalized, null, "\t\t\t") + ",\n";
					}
					if (currentDescriptionLocalized != null) {
						output += "\t\tdescriptionLocalized: " + JSON.stringify(currentDescriptionLocalized, null, "\t\t\t") + ",\n";
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
					output += updateSavedValues(className, rootNodeName, skillName, currentDescription);
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

	let zip = new JSZip();

	let paragonData = {};
	let codexData = {
		"Categories": codexValues["Categories"]
	};

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
			if (className == "Druid") {
				formattedData += '\t"Spirit Boons": {\n';
				formattedData += "\t\tx: 2500,\n";
				formattedData += "\t\ty: 0\n";
				formattedData += "\t},\n";
			} else if (className == "Necromancer" && necromancerMinions != undefined) {
				formattedData += '\t"Book of the Dead": {\n';
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
			if (className == "Barbarian") {
				const weaponExpertise = classData["Expertise"];
				formattedData += classObjectName + '["Weapon Expertise"] = {\n';
				let expertiseFormatted = [];
				for (const [expertiseFullName, expertiseData] of Object.entries(weaponExpertise)) {
					const expertiseFullNameArray = expertiseFullName.split("_");
					if (["Rank10", "Technique"].includes(expertiseFullNameArray.at(-1))) continue;
					const expertiseTypeName = expertiseFullNameArray.at(-1);

					formattedData += '\t"' + expertiseData["name"] + '": {\n';

					const maxRankData = weaponExpertise[`${expertiseFullName}_Rank10` in weaponExpertise ? `${expertiseFullName}_Rank10` : `${expertiseFullName}_Bonus_Rank10`];

					//const expertiseSavedValues = updateSavedValues(className, "Weapon Expertise", expertiseData["name"], currentDescription);
					//if (expertiseSavedValues.length > 0) formattedData += `\t${expertiseSavedValues}`;

					formattedData += "\t\tdescription: `" + expertiseData["desc"] + "`,\n";
					formattedData += "\t\tbonus: `" + maxRankData["desc"] + "`,\n";
					formattedData += "\t\tnameLocalized: " + JSON.stringify(expertiseData["name_localized"], null, "\t\t\t").slice(0, -2) + "\n\t\t},\n";
					formattedData += "\t\tdescriptionLocalized: " + JSON.stringify(expertiseData["desc_localized"], null, "\t\t\t").slice(0, -2) + "\n\t\t},\n";
					formattedData += "\t\tbonusLocalized: " + JSON.stringify(maxRankData["desc_localized"], null, "\t\t\t").slice(0, -2) + "\n\t\t},\n";
					const nodeHistoricalId = nodeHistory[className]["Weapon Expertise: " + expertiseData["name"]];
					if (nodeHistoricalId != undefined) {
						formattedData += "\t\tid: " + nodeHistoricalId + "\n";
					} else {
						const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
						nodeHistory[className]["Weapon Expertise: " + expertiseData["name"]] = nodeHistoryLength;
						formattedData += "\t\tid: " + nodeHistoryLength + "\n";
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
					const currentDescription = boonData["desc"];
					const boonSavedValues = updateSavedValues(className, "Spirit Boons", boonData["name"], currentDescription);
					if (boonSavedValues.length > 0) formattedData += `\t${boonSavedValues}`;
					formattedData += "\t\t\tdescription: `" + currentDescription + "`,\n";
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
			} else if (className == "Necromancer" && necromancerMinions != undefined) {
				formattedData += classObjectName + '["Book of the Dead"] = {\n';
				for (const [minionName, minionData] of Object.entries(necromancerMinions)) {
					formattedData += '\t"' + minionName + '": {\n';
					let minionDetails = null;
					if (`Necromancer_${minionName}` in classData["Book of the Dead"]) {
						minionDetails = classData["Book of the Dead"][`Necromancer_${minionName}`];
					} else {
						minionDetails = classData["Book of the Dead"][`Necromancer_RaiseSkeleton`];
					}
					const [minionSkillDesc, minionSkillName] = [minionDetails["desc"], minionDetails["name"]];
					formattedData += "\t\tdescription: `" + minionSkillDesc + "`,\n";
					formattedData += "\t\tname: `" + minionSkillName + "`,\n";
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
			}
			formattedData += "export { " + classObjectName + " };";
			if (fixedJSON) {
				downloadMode ? zip.folder("data").file(classNameLower + ".js", formattedData) : console.log(formattedData);
			}
			classProcessed[className] = true;
		}

		// process paragon board
		paragonData[className] = {};
		if ("Paragon (Board)" in classData) {
			paragonData[className]["Board"] = {};
			for (const [boardName, boardData] of Object.entries(classData["Paragon (Board)"])) {
				paragonData[className]["Board"][boardData["name"]] = [];
				for (const [rowIndex, rowData] of Object.entries(boardData["data"])) {
					paragonData[className]["Board"][boardData["name"]].push(rowData.split(","));
				}
			}
		}
		if ("Paragon (Node)" in classData) {
			paragonData[className]["Node"] = {};
			for (const [nodeName, nodeData] of Object.entries(classData["Paragon (Node)"])) {
				let currentDescription = nodeData["desc"];
				let currentDescriptionLocalized = "desc_localized" in nodeData ? Object.assign({}, nodeData["desc_localized"]) : null;
				const localKeys = currentDescriptionLocalized == null ? [] : Object.keys(currentDescriptionLocalized);
				if ("threshold_bonus" in nodeData) {
					const thresholdText = "\n\nBonus: Another " + nodeData["threshold_bonus"] + " if requirements met:\n{thresholdRequirements}";
					currentDescription += thresholdText;
					for (const localKey of localKeys) currentDescriptionLocalized[localKey] += thresholdText;
				}
				if ("tags" in nodeData) {
					const filteredTags = nodeData["tags"].filter(tag => !tag.includes("_")).join(", ");
					if (filteredTags.length > 0) {
						if (currentDescription == undefined) {
							currentDescription = "";
						} else {
							currentDescription += "\n\n";
						}
						const tagText = `Tags: ${filteredTags}.`;
						currentDescription += tagText;
					}
					for (const localKey of localKeys) {
						let filteredTags = nodeData["tags_localized"][localKey].filter(tag => !tag.includes("_"));
						if (filteredTags.length == 0) continue;
						for (let i = 0, n = filteredTags.length; i < n; i++) {
							if (filteredTags[i].includes("[") && filteredTags[i].includes("]")) filteredTags[i] = filteredTags[i].split("]")[1].split("[")[0];
						}
						filteredTags = filteredTags.join(", ");
						if (currentDescriptionLocalized[localKey] == undefined) {
							currentDescriptionLocalized[localKey] = "";
						} else {
							currentDescriptionLocalized[localKey] += "\n\n";
						}
						const tagText = `Tags: ${filteredTags}.`;
						currentDescriptionLocalized[localKey] += tagText;
					}
				}
				paragonData[className]["Node"][nodeName] = {
					name: nodeData["name"],
					description: currentDescription,
					nameLocalized: nodeData["name_localized"],
					descriptionLocalized: currentDescriptionLocalized,
					thresholdRequirements: nodeData["threshold_requirements"]
				};
			}
		}
		if ("Paragon (Glyph)" in classData) {
			paragonData[className]["Glyph"] = {};
			for (const [nodeName, nodeData] of Object.entries(classData["Paragon (Glyph)"])) {
				paragonData[className]["Glyph"][nodeName] = {
					name: nodeData["name"],
					desc: nodeData["desc"],
					bonus: nodeData["bonus"],
					nameLocalized: nodeData["name_localized"],
					descLocalized: nodeData["desc_localized"],
					bonusLocalized: nodeData["bonus_localized"],
					thresholdRequirements: nodeData["threshold_requirements"]
				};
			}
		}

		// process legendary affixes
		codexData[className] = {};
		if ("Legendary" in classData) {
			for (const [nodeName, nodeData] of Object.entries(classData["Legendary"])) {
				const codexPowerName = nodeData["name"].startsWith("of ") ? `Aspect ${nodeData["name"]}` : `${nodeData["name"]} Aspect`;
				const codexCategoryName = "category" in nodeData ? codexCategoryNames[nodeData["category"]] : "Unknown";

				let currentDescription = nodeData["desc"];
				let currentDescriptionLocalized = "desc_localized" in nodeData ? Object.assign({}, nodeData["desc_localized"]) : null;
				const localKeys = currentDescriptionLocalized == null ? [] : Object.keys(currentDescriptionLocalized);
				// currently unused
				/*
				if (nodeData["tags"] != undefined) {
					const filteredTags = nodeData["tags"].filter(tag => !tag.includes("_")).join(", ");
					if (filteredTags.length > 0) {
						if (currentDescription == undefined) {
							currentDescription = "";
						} else {
							currentDescription += "\n\n";
						}
						const tagText = `Tags: ${filteredTags}.`;
						currentDescription += tagText;
						for (const localKey of localKeys) currentDescriptionLocalized[localKey] += `\n\n${tagText}`;
					}
				}
				*/

				const codexValues = getCodexValues(codexPowerName, codexCategoryName, className, currentDescription);
				if (!(codexCategoryName in codexData[className])) codexData[className][codexCategoryName] = {};
				codexData[className][codexCategoryName][codexPowerName] = {
					id: getCodexId(codexPowerName, codexCategoryName, className),
					type: "Legendary",
					dropWeight: nodeData["drop_weight"],
					description: currentDescription,
					flavor: nodeData["flavor"],
					nameLocalized: nodeData["name_localized"],
					descriptionLocalized: currentDescriptionLocalized,
					flavorLocalized: nodeData["flavor_localized"],
					dungeon: codexValues["dungeon"],
					region: codexValues["region"]
				};
				if (codexValues["values"].length > 0) {
					codexData[className][codexCategoryName][codexPowerName]["values"] = codexValues["values"];
				}
			}
		}

		// process unique affixes
		if ("Unique" in classData) {
			for (const [nodeName, nodeData] of Object.entries(classData["Unique"])) {
				const codexPowerName = nodeData["name"];
				const codexCategoryName = codexCategoryNames[nodeData["category"]];
				const currentDescription = nodeData["desc"];
				const currentDescriptionLocalized = "desc_localized" in nodeData ? nodeData["desc_localized"] : null;
				const codexValues = getCodexValues(codexPowerName, codexCategoryName, className, currentDescription);
				if (!(codexCategoryName in codexData[className])) codexData[className][codexCategoryName] = {};
				codexData[className][codexCategoryName][codexPowerName] = {
					id: getCodexId(codexPowerName, codexCategoryName, className),
					type: "Unique",
					slot: nodeName.split("_")[0].replace(/(1H?|2H?)(.+)/gi, "$1 $2").trim(),
					dropWeight: nodeData["drop_weight"],
					description: currentDescription,
					flavor: nodeData["flavor"],
					nameLocalized: nodeData["name_localized"],
					descriptionLocalized: currentDescriptionLocalized,
					flavorLocalized: nodeData["flavor_localized"],
				};
				if (codexValues["values"].length > 0) {
					codexData[className][codexCategoryName][codexPowerName]["values"] = codexValues["values"];
				}
			}
		}
	}

	if (fixedJSON) {
		let formattedParagon = "let paragonData = ";
		formattedParagon += JSON.stringify(paragonData, null, "\t");
		formattedParagon += "\n\nexport { paragonData };";
		downloadMode ? zip.folder("data").file("paragon.js", formattedParagon) : console.log(formattedParagon);

		let formattedCodex = "let codexData = ";
		formattedCodex += JSON.stringify(codexData, null, "\t");
		formattedCodex += "\n\nexport { codexData };";
		downloadMode ? zip.folder("data").file("codex-of-power.js", formattedCodex) : console.log(formattedCodex);

		let formattedCodexHistory = "let codexHistory = ";
		formattedCodexHistory += JSON.stringify(codexHistory, null, "\t");
		formattedCodexHistory += "\n\nexport { codexHistory };";
		downloadMode ? zip.folder("parser").file("codex-history.js", formattedCodexHistory) : console.log(formattedCodexHistory);

		for (const [codexClassKey, codexClassData] of Object.entries(codexValues)) {
			if (codexClassKey == "Categories") continue;
			for (const [codexCategoryKey, codexCategoryData] of Object.entries(codexClassData)) {
				for (const [codexEntryKey, codexEntryData] of Object.entries(codexCategoryData)) {
					if (codexEntryData["recentlyAdded"]) {
						delete codexValues[codexClassKey][codexCategoryKey][codexEntryKey]["recentlyAdded"];
					} else {
						delete codexValues[codexClassKey][codexCategoryKey][codexEntryKey];
					}
				}
			}
		}

		let formattedCodexValues = "let codexValues = ";
		formattedCodexValues += JSON.stringify(codexValues, null, "\t");
		formattedCodexValues += "\n\nexport { codexValues };";
		downloadMode ? zip.folder("parser").file("codex-values.js", formattedCodexValues) : console.log(formattedCodexValues);

		let formattedNodeHistory = "let nodeHistory = ";
		formattedNodeHistory += JSON.stringify(nodeHistory, null, "\t");
		formattedNodeHistory += "\n\nexport { nodeHistory };";
		downloadMode ? zip.folder("parser").file("node-history.js", formattedNodeHistory) : console.log(formattedNodeHistory);

		for (const [nodeClassKey, nodeClassData] of Object.entries(nodeValues)) {
			for (const [nodeGroupKey, nodeGroupData] of Object.entries(nodeClassData)) {
				for (const [nodeSkillKey, nodeSkillData] of Object.entries(nodeGroupData)) {
					if (nodeSkillData["recentlyAdded"]) {
						delete nodeValues[nodeClassKey][nodeGroupKey][nodeSkillKey]["recentlyAdded"];
					} else {
						delete nodeValues[nodeClassKey][nodeGroupKey][nodeSkillKey];
					}
				}
			}
		}

		let formattedNodeValues = "let nodeValues = ";
		formattedNodeValues += JSON.stringify(nodeValues, null, "\t");
		formattedNodeValues += "\n\nexport { nodeValues };";
		downloadMode ? zip.folder("parser").file("node-values.js", formattedNodeValues) : console.log(formattedNodeValues);

		if (downloadMode) {
			zip.generateAsync({ type: "base64", compression: "deflate" }).then(zipFile => window.location.href = "data:application/zip;base64," + zipFile);
		}
	}
	fixedJSON = true;
}

$("#parseToFile").on("click", () => { runParser(true); });
$("#parseToConsole").on("click", () => { runParser(false); });