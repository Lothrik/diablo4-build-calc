import { nodeHistory } from "./node-history.js";
import { nodeValues } from "./node-values.js";
import { druidBoons } from "./druid-boons.js";
import { necromancerMinions } from "./necromancer-minions.js";
import { sorcererEnchants } from "./sorcerer-enchants.js";

const buildNumber = 36331;

var skillJSON = "";
var otherJSON = "";
$.getJSON("tree/build-" + buildNumber + ".json", null, treeData => {
	skillJSON = treeData;
	$("#debugOutput").html("Successfully loaded `tree/build-" + buildNumber + ".json`.");
	$.getJSON("other/build-" + buildNumber + ".json", null, otherData => {
		otherJSON = otherData;
		$("#debugOutput").append("\nSuccessfully loaded `other/build-" + buildNumber + ".json`.");
		// call runParser once after loading so fixJSON affects node connections recursively
		runParser(false);
	});
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

function sanitizeNodeDescription(descriptionText) {
	let sanitizedText = descriptionText
		.replace(/{c_.+?}/gi, "")									// `{c_white}`, `{c_yellow}`, `{c_green}`, ...
		.replace(/{\/c_.+?}/gi, "")									// `{/c_white}`, `{/c_yellow}`, `{/c_green}`, ...
		.replace(/{\/c}/gi, "")										// `{/c}`, exact.
		.replace(/{\/?u}/gi, "")									// `{u}` and `{/u}`.
		.replace(/{icon.+?}/gi, "")									// `{icon:bullet}`, and similar.
		.replace(/{if:.+?}[a-z]{0,2}{\/if}/gi, "")					// `{if:SF_21}s{/if}` and similar.
		.replace(/{if:mod.+?}(.|\r?\n)+?({else}|{\/if})/gi, "")		// `{if:Mod.UpgradeA}` -> `{/if}`, and similar.
		.replace(/{if:.+?}/gi, "")									// `{if:ADVANCED_TOOLTIP}`, and similar.
		.replace(/{\/if}/gi, "")									// `{/if}`, exact.
		.replace(/sLevel/g, "")										// `sLevel`, exact.
		.replace(/4second\.:/g, "")									// `4second.:`, exact.
		.replace(/ *\* */g, "")										// `*`, including any nearby whitespace.
		.replace(/ *\| */g, "")										// `|`, including any nearby whitespace.
		.replace(/ \./g, ".")										// Replace ` .` with `.`.
		.replace(/%\]/g, "]%")										// Replace `%]` with `]%`.
		.replace(/{else}/gi, "\n")									// Replace `{else}` with a newline.
		.replace(/{(dot|payload):.+?}/gi, "{#}%")					// Replace `{dot:...}` and `{payload:...}` with `{#}%`.
		.replace(/ *{.+?} */g, "{#}")								// Replace anything inside curly brackets with `{#}`.
		.replace(/ *\[.+?\] */g, "{#}")								// Replace anything inside square brackets with `{#}`.
		.replace(/{.+?}{.+?}/g, "{#}")								// Replace `{#}{#}` with `{#}`.
		.replace(/([^x+ ]+?){#}/g, "$1 {#}")						// Ensure there is a space between any character (except `x`, `+`, and ` `) and the start of `{#}`.
		.replace(/{#}([a-z]+?)/gi, "{#} $1")						// Ensure there is a space between any letter (`a-z`, `A-Z`) and the end of `{#}`.
		.replace(/\( *{/g, "({")									// Remove any whitespace between `(` and `{`.
		.replace(/} *\)/g, "})")									// Remove any whitespace between `}` and `)`.
		.replace(/{#} +(st|nd|rd|th) /g, "{#}$1 ")					// Remove any whitespace between {#} and (`st `, `nd `, `rd `, or `th `).
		.replace(/ +(\r?\n)/g, "$1")								// Remove any whitespace at the end of a line.
		.replace(/(dealing {#}%?)( per hit| each)/g, "$1 damage$2")	// Add ` damage` between `dealing {#}` and (`per hit`, or `each`) if not already present.
																	// Add ` damage` between `poisons enemies for {#}` and ` over` if not already present.
		.replace(/(bleeds|bleeding|burns|burning|zaps|zapping|poisons|poisoning)( surrounding)?( enemies for {#}%?)( over)/gi, "$1$2$3 damage$4")
		.replace(/({#})( damage)/gi, "$1%$2")						// Add `%` between `{#}` and ` damage` if not already present.
		.replace(/(cooldown: {#})(\r?\n)/gi, "$1 seconds$2")		// Add ` seconds` after `Cooldown: {#}` if not already present.
		.replace(/(\r?\n)([^:\+]+)([a-z]+)$/gi, "$1$2$3.")			// Ensure the last line ends with a `.`, unless that line contains `:` or `+`, or ends with a character other than (`a-z`, `A-Z`).
		.replace(/(if this kills.+cooldown is reset).+(if this kills.+charge is refunded)/gi, "$1")
																	// Special handling for Death Blow conditional description logic.
		.trim();

	return sanitizedText;
}

function namedConnections(rawConnections, currentNode, classData, fallbackNode) {
	let namedConnections = "";
	rawConnections.forEach(connectedNode => {
		if (classData["Nodes"][connectedNode]["SkillName"] == null) {
			if (namedConnections.length > 0) namedConnections += ", ";
			namedConnections += '"' + fallbackNode + '"';
		} else if (classData["Nodes"][connectedNode]["SkillName"] != currentNode) {
			if (namedConnections.length > 0) namedConnections += ", ";
			namedConnections += '"' + classData["Nodes"][connectedNode]["SkillName"] + '"';
		}
	});
	if (namedConnections.length > 0) {
		return "[ " + namedConnections + " ]";
	} else {
		return '[ "' + fallbackNode + '" ]';
	}
}

function fixJSON(classData, curNode, rootNodeName) {
	const nodeData = classData["Nodes"][curNode];
	if (buildNumber == 36023 || buildNumber == 36331) {
		if (nodeData["SkillName"] != nodeData["SkillName"].trim()) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `" + nodeData["SkillName"].trim() + "`.");
			nodeData["SkillName"] = nodeData["SkillName"].trim();
		}
		// `Supreme Unstable Currents` was incorrectly assigned the duplicate name `Prime Unstable Currents` in 36023, causing a naming collision.
		if (nodeData["SkillName"] == "Prime Unstable Currents" && nodeData["Id"] == 619) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Supreme Unstable Currents`.");
			nodeData["SkillName"] = "Supreme Unstable Currents";
		// `Prime Inferno` was incorrectly assigned the name `Upgrade 1` in 36023.
		} else if (nodeData["SkillName"] == "Upgrade 1" && nodeData["Id"] == 617) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Prime Inferno`.");
			nodeData["SkillName"] = "Prime Inferno";
		// `Supreme Inferno` was incorrectly assigned the name `Upgrade 2` in 36023.
		} else if (nodeData["SkillName"] == "Upgrade 2" && nodeData["Id"] == 620) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Supreme Inferno`.");
			nodeData["SkillName"] = "Supreme Inferno";
		// `Enhanced Charged Bolts` was incorrectly assigned the name `Enhanced Charged Bolt` in 36023.
		} else if (nodeData["SkillName"] == "Enhanced Charged Bolt" && nodeData["Id"] == 731) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Enhanced Charged Bolts`.");
			nodeData["SkillName"] = "Enhanced Charged Bolts";
		// `Wolf Pack` was renamed to `Wolves` in 36023, but its modifier nodes were not renamed at the same time.
		} else if (nodeData["SkillName"] == "Wolf Pack" && nodeData["Id"] == 459) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Wolves`.");
			nodeData["SkillName"] = "Wolves";
		} else if (nodeData["SkillName"] == "Enhanced Wolf Pack" && nodeData["Id"] == 509) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Enhanced Wolves`.");
			nodeData["SkillName"] = "Enhanced Wolves";
		} else if (nodeData["SkillName"] == "Ferocious Wolf Pack" && nodeData["Id"] == 388) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Ferocious Wolves`.");
			nodeData["SkillName"] = "Ferocious Wolves";
		} else if (nodeData["SkillName"] == "Brutal Wolf Pack" && nodeData["Id"] == 389) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Brutal Wolves`.");
			nodeData["SkillName"] = "Brutal Wolves";
		// `Stealth` was renamed to `Concealment` in 36331, but its modifier nodes were not renamed at the same time.
		} else if (nodeData["SkillName"] == "Stealth" && nodeData["Id"] == 245) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Concealment`.");
			nodeData["SkillName"] = "Concealment";
		} else if (nodeData["SkillName"] == "Enhanced Stealth" && nodeData["Id"] == 374) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Enhanced Concealment`.");
			nodeData["SkillName"] = "Enhanced Concealment";
		} else if (nodeData["SkillName"] == "Countering Stealth" && nodeData["Id"] == 246) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Countering Concealment`.");
			nodeData["SkillName"] = "Countering Concealment";
		} else if (nodeData["SkillName"] == "Subverting Stealth" && nodeData["Id"] == 247) {
			$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "` -> `Subverting Concealment`.");
			nodeData["SkillName"] = "Subverting Concealment";
		}
		if (nodeData["SkillName"] != undefined) {
			// ultimate skills don't have ranks
			if (rootNodeName == "Ultimate" && /cooldown:/i.test(nodeData["SkillDesc"]) && nodeData["Reward"]["dwMaxTalentRanks"] == 5) {
				$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "`; dwMaxTalentRanks: " + nodeData["Reward"]["dwMaxTalentRanks"] + " -> 1.");
				nodeData["Reward"]["dwMaxTalentRanks"] = 1;
			} else {
				const namedConnectionList = JSON.parse(namedConnections(nodeData["Connections"], nodeData["SkillName"], classData, rootNodeName));
				let chainedConnectionList = namedConnectionList;
				namedConnectionList.forEach(namedConnection => {
					classData["Nodes"].filter(chainedData => {
						if (chainedData["SkillName"] == namedConnection) {
							chainedConnectionList.push(...JSON.parse(namedConnections(chainedData["Connections"], chainedData["SkillName"], classData, rootNodeName)));
						}
					});
				});
				chainedConnectionList = [...new Set(chainedConnectionList)];
				const unmodifiedName = nodeData["SkillName"].split(" ").slice(1).join(" ");
				let unmodifiedNameSpecial = null;
				if (unmodifiedName == "Wolf Pack" && rootNodeName == "Companion") {
					unmodifiedNameSpecial = "Wolves";
				} else if (unmodifiedName == "Stealth" && rootNodeName == "Subterfuge") {
					unmodifiedNameSpecial = "Concealment";
				}
				if (unmodifiedName.length > 0 && (chainedConnectionList.indexOf(unmodifiedName) != -1 || (unmodifiedNameSpecial != null && chainedConnectionList.indexOf(unmodifiedNameSpecial) != -1))) {
					if (nodeData["Reward"]["dwMaxTalentRanks"] == 3) {
						$("#debugOutput").append("\nFixing nodeID " + nodeData["Id"] + "; SkillName: `" + nodeData["SkillName"] + "`; dwMaxTalentRanks: " + nodeData["Reward"]["dwMaxTalentRanks"] + " -> 1.");
						nodeData["Reward"]["dwMaxTalentRanks"] = 1;
					}
					nodeData["baseSkillName"] = unmodifiedNameSpecial == null ? unmodifiedName : unmodifiedNameSpecial; // for reference later in recursiveSkillTreeScan
				}
			}
		}
	}
}

const MAX_RECURSION_DEPTH = 10;
function recursiveSkillTreeScan(connectionData, classData, className, rootNode, rootNodeName, mappedIDs, recursionDepth = 0) {
	let output = "";
	if (recursionDepth < MAX_RECURSION_DEPTH) {
		connectionData.forEach((connectedNode, connectedIndex) => {
			const nodeData = classData["Nodes"][connectedNode];
			if (!mappedIDs[nodeData["Id"]]) {
				mappedIDs[nodeData["Id"]] = true;
				if (!classProcessed[className]) fixJSON(classData, connectedNode, rootNodeName);
				output += '\t"' + nodeData["SkillName"] + '": {\n';
				const baseSkillName = nodeData["baseSkillName"];
				if (baseSkillName != undefined) {
					output += '\t\tbaseSkill: "' + baseSkillName + '",\n';
				}
				output += "		connections: " + namedConnections(nodeData["Connections"], nodeData["SkillName"], classData, rootNodeName) + ",\n";
				// output damage type for any non-modifier skill nodes, as long as they have a hit or DoT payload
				if (baseSkillName == undefined && /{payload:.+?}|{dot:.+?}/i.test(nodeData["SkillDesc"]) && nodeData["DamageType"] >= 0) {
					output += "\t\tdamageType: " + nodeData["DamageType"] + ",\n";
				}
				const sanitizedDescription = sanitizeNodeDescription(nodeData["SkillDesc"]);
				if (className == "Sorcerer" && sorcererEnchants[rootNodeName] != undefined) {
					const extraDescription = sorcererEnchants[rootNodeName][nodeData["SkillName"]];
					if (extraDescription != undefined && extraDescription.length > 0) {
						output += "\t\tdescription: `" + sanitizedDescription + "\n\n— Enchantment Effect —\n" + extraDescription + "`,\n";
					} else {
						output += "\t\tdescription: `" + sanitizedDescription + "`,\n";
					}
				} else {
					output += "\t\tdescription: `" + sanitizedDescription + "`,\n";
				}
				const nodeHistoricalId = nodeHistory[className][rootNodeName + ": " + nodeData["SkillName"]];
				if (nodeHistoricalId != undefined) {
					output += "\t\tid: " + nodeHistoricalId + ",\n";
				} else {
					const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
					nodeHistory[className][rootNodeName + ": " + nodeData["SkillName"]] = nodeHistoryLength;
					output += "\t\tid: " + nodeHistoryLength + ",\n";
				}
				output += "\t\tmaxPoints: " + nodeData["Reward"]["dwMaxTalentRanks"] + ",\n";
				if (nodeValues[className][rootNodeName] == undefined) nodeValues[className][rootNodeName] = {};
				if (nodeValues[className][rootNodeName][nodeData["SkillName"]] == undefined) nodeValues[className][rootNodeName][nodeData["SkillName"]] = [];
				const descLength = (sanitizedDescription.match(/{#}/g) || []).length;
				const savedValues = nodeValues[className][rootNodeName][nodeData["SkillName"]];
				if (descLength > savedValues.length) {
					savedValues.push(...Array(descLength - savedValues.length).fill(""));
				} else {
					savedValues.length = descLength;
				}
				if (savedValues.length > 1) {
					output += `\t\tvalues: [ "${savedValues.join('", "')}" ],\n`
				} else if (savedValues.length > 0) {
					output += `\t\tvalues: [ "${savedValues[0]}" ],\n`;
				} else {
					delete nodeValues[className][rootNodeName][nodeData["SkillName"]];
				}
				output += "\t\tx: " + parseFloat(((nodeData["X"] - rootNode["X"]) * scaleRatio).toFixed(3)) + ",\n";
				output += "\t\ty: " + parseFloat(((nodeData["Y"] - rootNode["Y"]) * scaleRatio).toFixed(3)) + "\n";
				output += "\t},\n";
				output += recursiveSkillTreeScan(nodeData["Connections"], classData, className, rootNode, rootNodeName, mappedIDs, recursionDepth + 1);
			}
		});
	}
	return output;
}

function runParser(downloadMode) {
	console.clear();

	for (const [classIndex, classData] of Object.entries(skillJSON)) {
		const className = classData["ClassName"];
		const classNameLower = className.toLowerCase();
		const classObjectName = classNameLower + "Data";
		if (!classProcessed[className]) {
			$("#debugOutput").append("\nProcessing node data for class `" + className + "`:");
		}

		const rootNodes = classData["Nodes"].filter(curNode => curNode["RootNode"]);
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
					if (rootNode["ReqPointsSpent"] > 0) {
						formattedData += "\t\trequiredPoints: " + rootNode["ReqPointsSpent"] + ",\n";
					}
					formattedData += "\t\tx: " + parseFloat(((rootNode["X"] - originNode["X"]) * scaleRatio).toFixed(3)) + ",\n";
					formattedData += "\t\ty: " + parseFloat(((rootNode["Y"] - originNode["Y"]) * scaleRatio).toFixed(3)) + "\n";
					formattedData += "\t},\n";
				}
			});
		}
		if (className == "Necromancer" && necromancerMinions != undefined) {
			formattedData += '\t"Book of the Dead": {\n';
			formattedData += "\t\tx: 2500,\n";
			formattedData += "\t\ty: 0\n";
			formattedData += "\t},\n";
		} else if (className == "Druid" && druidBoons != undefined) {
			formattedData += '\t"Spirit Boons": {\n';
			formattedData += "\t\tx: 2500,\n";
			formattedData += "\t\ty: 0\n";
			formattedData += "\t},\n";
		}
		formattedData += "};\n\n";

		for (let i = 0; i < Object.keys(rootNodeNamesSorted[className]).length; i++) {
			rootNodes.forEach((rootNode, rootIndex) => {
				const rootNodeName = rootNodeNames[className][rootIndex];
				if (rootNodeName == rootNodeNamesSorted[className][i]) {
					let mappedIDs = [];
					mappedIDs[rootNode["Id"]] = true;

					formattedData += classObjectName + '["' + rootNodeNames[className][rootIndex] + '"] = {\n';
					formattedData += recursiveSkillTreeScan(rootNode["Connections"], classData, className, rootNode, rootNodeName, mappedIDs, 0);
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
		} else if (className == "Druid" && druidBoons != undefined) {
			formattedData += classObjectName + '["Spirit Boons"] = {\n';
			for (const [boonTypeName, boonTypeData] of Object.entries(druidBoons)) {
				formattedData += '	"' + boonTypeName + '": {\n';
				const nodeHistoricalId = nodeHistory[className]["Spirit Boons: " + boonTypeName];
				if (nodeHistoricalId != undefined) {
					formattedData += "\t\tid: " + nodeHistoricalId + ",\n";
				} else {
					const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
					nodeHistory[className]["Spirit Boons: " + boonTypeName] = nodeHistoryLength;
					formattedData += "\t\tid: " + nodeHistoryLength + ",\n";
				}
				for (const [boonName, boonData] of Object.entries(boonTypeData)) {
					formattedData += '\t\t"' + boonName + '": {\n';
					formattedData += "\t\t\tdescription: `" + boonData + "`,\n";
					const nodeHistoricalId = nodeHistory[className]["Spirit Boons: " + boonName];
					if (nodeHistoricalId != undefined) {
						formattedData += "\t\t\tid: " + nodeHistoricalId + ",\n";
					} else {
						const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
						nodeHistory[className]["Spirit Boons: " + boonName] = nodeHistoryLength;
						formattedData += "\t\t\tid: " + nodeHistoryLength + ",\n";
					}
					formattedData += "\t\t},\n";
				}
				formattedData += "\t},\n";
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

	let paragonData = {};
	for (const [className, otherData] of Object.entries(otherJSON)) {
		paragonData[className] = {};
		if (otherData["Paragon (Board)"] != undefined) {
			paragonData[className]["Board"] = {};
			for (const [boardName, boardData] of Object.entries(otherData["Paragon (Board)"])) {
				paragonData[className]["Board"][boardData["name"]] = [];
				for (const [rowIndex, rowData] of Object.entries(boardData["data"])) {
					paragonData[className]["Board"][boardData["name"]].push(rowData.split(","));
				}
			}
		}
		if (otherData["Paragon (Node)"] != undefined) {
			paragonData[className]["Node"] = {};
			for (const [nodeName, nodeData] of Object.entries(otherData["Paragon (Node)"])) {
				let nodeDesc;
				if (nodeName.toLowerCase().includes("legendary") && "Paragon (Legendary)" in otherData) {
					const nodeId = nodeName.replace(/\D/g, "");
					for (const [legendaryKey, legendaryData] of Object.entries(otherData["Paragon (Legendary)"])) {
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