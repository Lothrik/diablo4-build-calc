import { nodeHistory } from "./nodehistory.js";

const buildNumber = 36023;

var skillJSON = "";
$.getJSON("tree/build-" + buildNumber + ".json", null, successData => { skillJSON = fixJSON(successData); });

const scaleRatio = 0.5;

const rootNodeNames = {
	["Barbarian"]: {
		[0]: "Ultimate",
		[1]: "Weapon Mastery",
		[2]: "Brawling",
		[3]: "Defensive",
		[4]: "Core",
		[5]: "Basic",
		[6]: "Capstone"
	},
	["Druid"]: {
		[0]: "Basic",
		[1]: "Spirit",
		[2]: "Defensive",
		[3]: "Companion",
		[4]: "Wrath",
		[5]: "Ultimate",
		[6]: "Capstone"
	},
	["Necromancer"]: {
		[0]: "Basic",
		[1]: "Capstone",
		[2]: "Core",
		[3]: "Corruption",
		[4]: "Summoning",
		[5]: "Ultimate",
		[6]: "Macabre"
	},
	["Rogue"]: {
		[0]: "Capstone",
		[1]: "Imbuements",
		[2]: "Agility",
		[3]: "Core",
		[4]: "Basic",
		[5]: "Ultimate",
		[6]: "Subterfuge"
	},
	["Sorcerer"]: {
		[0]: "Conjuration",
		[1]: "Ultimate",
		[2]: "Mastery",
		[3]: "Basic",
		[4]: "Capstone",
		[5]: "Defensive",
		[6]: "Core"
	},
}

const rootNodeNamesSorted = {
	["Barbarian"]: {
		[0]: "Basic",
		[1]: "Core",
		[2]: "Defensive",
		[3]: "Brawling",
		[4]: "Weapon Mastery",
		[5]: "Ultimate",
		[6]: "Capstone"
	},
	["Druid"]: {
		[0]: "Basic",
		[1]: "Spirit",
		[2]: "Defensive",
		[3]: "Companion",
		[4]: "Wrath",
		[5]: "Ultimate",
		[6]: "Capstone"
	},
	["Necromancer"]: {
		[0]: "Basic",
		[1]: "Core",
		[2]: "Macabre",
		[3]: "Corruption",
		[4]: "Summoning",
		[5]: "Ultimate",
		[6]: "Capstone",
	},
	["Rogue"]: {
		[0]: "Basic",
		[1]: "Core",
		[2]: "Agility",
		[3]: "Subterfuge",
		[4]: "Imbuements",
		[5]: "Ultimate",
		[6]: "Capstone",
	},
	["Sorcerer"]: {
		[0]: "Basic",
		[1]: "Core",
		[2]: "Defensive",
		[3]: "Conjuration",
		[4]: "Mastery",
		[5]: "Ultimate",
		[6]: "Capstone",
	},
}

function namedConnections(rawConnections, currentNode, classData, fallbackNode, requireFallbackNode) {
	let namedConnections = "";
	rawConnections.forEach(connectedNode => {
		if (classData.Nodes[connectedNode]["SkillName"] != null && classData.Nodes[connectedNode]["SkillName"] != currentNode) {
			namedConnections += '"' + classData.Nodes[connectedNode]["SkillName"] + '", ';
		}
	});
	if (namedConnections.length > 0) {
		if (requireFallbackNode) {
			return '"' + fallbackNode + '", ' + namedConnections;
		} else {
			return namedConnections;
		}
	} else {
		return '"' + fallbackNode + '", ';
	}
}

function fixJSON(skillJSON) {
	$("#debugOutput").html("Successfully loaded `tree/build-" + buildNumber + ".json`.");
	skillJSON.forEach((classData, classIndex) => {
		$("#debugOutput").html($("#debugOutput").html() + "\nProcessing node data for class `" + classData["ClassName"] + "`:");
		classData["Nodes"].forEach(nodeData => {
			if (buildNumber == 36023) {
				if (nodeData["SkillName"] == "Prime Unstable Currents" && nodeData["Id"] == 619) {
					$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "` -> `Supreme Unstable Currents`.");
					nodeData["SkillName"] = "Supreme Unstable Currents";
				} else if (nodeData["SkillName"] == "Upgrade 1" && nodeData["Id"] == 617) {
					$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "` -> `Prime Inferno`.");
					nodeData["SkillName"] = "Prime Inferno";
				} else if (nodeData["SkillName"] == "Upgrade 2" && nodeData["Id"] == 620) {
					$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "` -> `Supreme Inferno`.");
					nodeData["SkillName"] = "Supreme Inferno";
				}
				if (nodeData["SkillName"]) {
					const namedConnectionList = namedConnections(nodeData["Connections"], nodeData["SkillName"], classData, "");
					const unmodifiedName = nodeData["SkillName"].split(" ").slice(1).join(" ");
					if (unmodifiedName.length > 0
						&& namedConnectionList.includes(unmodifiedName)
						&& nodeData["Reward"]["dwMaxTalentRanks"] == 3) {
						$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "`; dwMaxTalentRanks: " + nodeData["Reward"]["dwMaxTalentRanks"] + " -> 1.");
						nodeData["Reward"]["dwMaxTalentRanks"] = 1;
					}
				}
			}
		});
	});
	return skillJSON;
}

const MAX_RECURSION_DEPTH = 10;
function recursiveSkillTreeScan(connectionData, classData, rootNode, rootNodeName, mappedIDs, recursionDepth = 0) {
	let output = "";
	if (recursionDepth < MAX_RECURSION_DEPTH) {
		connectionData.forEach((connectedNode, connectedIndex) => {
			if (!mappedIDs[classData.Nodes[connectedNode]["Id"]]) {
				mappedIDs[classData.Nodes[connectedNode]["Id"]] = true;
				output += '	["' + classData["Nodes"][connectedNode]["SkillName"] + '"]: {\n';
				output += "		connections: [ " + namedConnections(classData["Nodes"][connectedNode]["Connections"], classData["Nodes"][connectedNode]["SkillName"], classData, rootNodeName, recursionDepth == 0) + "],\n";
				output += "		description: `" + classData["Nodes"][connectedNode]["SkillDesc"] + "`,\n";
				const nodeHistoricalId = nodeHistory[classData["ClassName"]][rootNodeName + ": " + classData["Nodes"][connectedNode]["SkillName"]];
				if (nodeHistoricalId != undefined) {
					output += "		id: " + nodeHistoricalId + ",\n";
				} else {
					const nodeHistoryLength = Object.keys(nodeHistory[classData["ClassName"]]).length;
					nodeHistory[classData["ClassName"]][rootNodeName + ": " + classData["Nodes"][connectedNode]["SkillName"]] = nodeHistoryLength;
					output += "		id: " + nodeHistory[rootNodeName + ": " + classData["Nodes"][connectedNode]["SkillName"]] + ",\n";
				}
				output += "		maxPoints: " + classData["Nodes"][connectedNode]["Reward"]["dwMaxTalentRanks"] + ",\n";
				output += "		x: " + (classData["Nodes"][connectedNode]["X"] - rootNode["X"]) * scaleRatio + ",\n";
				output += "		y: " + (classData["Nodes"][connectedNode]["Y"] - rootNode["Y"]) * scaleRatio + ",\n";
				output += "	},\n";
				output += recursiveSkillTreeScan(classData["Nodes"][connectedNode]["Connections"], classData, rootNode, rootNodeName, mappedIDs, recursionDepth + 1);
			}
		});
	}
	return output;
}

function runParser(downloadMode) {
	console.clear();
	skillJSON.forEach((classData, classIndex) => {
		const className = classData["ClassName"];
		const classNameLower = className.toLowerCase();

		const rootNodes = classData["Nodes"].filter(curNode => curNode["RootNode"]);
		const originNode = rootNodes.find((curNode, curIndex) => rootNodeNames[className][curIndex] == "Basic");

		let formattedData = "let " + classNameLower + " = {};\n\n";
		formattedData += classNameLower + '["Trunk Data"] = {\n';
		for (let i = 0; i < Object.keys(rootNodeNamesSorted[className]).length; i++) {
			rootNodes.forEach((rootNode, rootIndex) => {
				const rootNodeName = rootNodeNames[className][rootIndex];
				if (rootNodeName == rootNodeNamesSorted[className][i]) {
					formattedData += '	["' + rootNodeName + '"]: {\n';
					const nextRootNode = rootNodeNamesSorted[className][i + 1];
					if (nextRootNode && nextRootNode.length != undefined) {
						formattedData += '		connections: [ "' + nextRootNode + '" ],\n';
					}
					if (rootNode["ReqPointsSpent"] > 0) {
						formattedData += "		requiredPoints: " + rootNode["ReqPointsSpent"] + ",\n";
					}
					formattedData += "		x: " + (rootNode["X"] - originNode["X"]) * scaleRatio + ",\n";
					formattedData += "		y: " + (rootNode["Y"] - originNode["Y"]) * scaleRatio + ",\n";
					formattedData += "	},\n";
				}
			});
		}
		formattedData += "};\n\n";

		for (let i = 0; i < Object.keys(rootNodeNamesSorted[className]).length; i++) {
			rootNodes.forEach((rootNode, rootIndex) => {
				const rootNodeName = rootNodeNames[className][rootIndex];
				if (rootNodeName == rootNodeNamesSorted[className][i]) {
					let mappedIDs = [];
					mappedIDs[rootNode["Id"]] = true;

					formattedData += classNameLower + '["' + rootNodeNames[className][rootIndex] + '"] = {\n';
					formattedData += recursiveSkillTreeScan(rootNode["Connections"], classData, rootNode, rootNodeName, mappedIDs, 0);
					formattedData += "};\n\n";
				}
			});
		}
		formattedData += "export { " + classNameLower + " };";
		if (downloadMode) {
			let downloadElement = document.createElement("a");
			downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedData);
			downloadElement.download = classNameLower + ".js";
			downloadElement.click();
		} else {
			console.log(formattedData);
		}
	});
	let formattedNodeHistory = "let nodeHistory = ";
	formattedNodeHistory += JSON.stringify(nodeHistory, null, "\t");
	formattedNodeHistory += "\n\nexport { nodeHistory };";
	if (downloadMode) {
		let downloadElement = document.createElement("a");
		downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedNodeHistory);
		downloadElement.download = "nodehistory.js";
		downloadElement.click();
	} else {
		console.log(formattedNodeHistory);
	}
}

$("#parseToFile").on("click", () => { runParser(true); });
$("#parseToConsole").on("click", () => { runParser(false); });