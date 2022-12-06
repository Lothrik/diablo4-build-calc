import { barbarian } from "./classes/barbarian.js";
import { druid } from "./classes/druid.js";
import { necromancer } from "./classes/necromancer.js";
import { rogue } from "./classes/rogue.js";
import { sorcerer } from "./classes/sorcerer.js";

// splitMulti allows String.prototype.split to process multiple delimiters at once
function splitMulti(str, tokens) {
	let tempChar = tokens[0];
	for (let i = 1; i < tokens.length; i++) {
		str = str.split(tokens[i]).join(tempChar);
	}
	str = str.split(tempChar);
	return str;
}
var splitOrig = String.prototype.split;
String.prototype.split = function() {
	if (arguments[0].length > 0) {
		if (Object.prototype.toString.call(arguments[0]) == "[object Array]") {
			return splitMulti(this, arguments[0]);
		}
	}
	return splitOrig.apply(this, arguments);
};

// lineIntersect returns [x, y] intersect coordinates for two given lines [[[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]]]
function lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
	if ((x1 == x2 && y1 == y2) || (x3 == x4 && y3 == y4)) return [ NaN, NaN ];

	const denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

	if (denominator == 0) return [ NaN, NaN ];

	const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
	const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return [ NaN, NaN ];

	const x = x1 + ua * (x2 - x1);
	const y = y1 + ua * (y2 - y1);

	return [ x, y ];
}

// populateMap fills a map with the values of an object using nested maps
function populateMap(map, object, keys) {
	if (!keys.length) return map;

	let key = keys.shift();
	let value = object[key];

	if (typeof value == "object") value = populateMap(new Map(), value, Object.keys(value));

	map.set(key, value);

	return populateMap(map, object, keys);
}

// rgba2hex converts a `rgba(255, 255, 255, 1)` string into an equivalent hex string: `0xffffffff`
function rgba2hex (rgba) {
	return `0x${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i == 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, "0").replace("NaN", "")).join("")}`;
}

// construct a nested map of all class data
const classObj = { barbarian, druid, necromancer, rogue, sorcerer };
var classMap = new Map();
populateMap(classMap, classObj, Object.keys(classObj));

// canvas size constants
const minCanvasWidth = 0;
const maxCanvasWidth = 65535;
const minCanvasHeight = 0;
const maxCanvasHeight = 65535;
const nodeWidth = 100;
const nodeHeight = 100;
const tooltipWidth = 480;
const tooltipHeight = 200;

const preventConnectorScaling = false; // this improves non-native connector quality in some situations, but has a negative performance impact
const tooltipScalingFloor = 0.75;
const tooltipScalingCeiling = 1.25;

const fontFamily = $("body").css("fontFamily");
const fontFamilyOverride = fontFamily.includes("Homenaje") ? fontFamily : "Homenaje, " + fontFamily;
const textColor = Number(rgba2hex($("*").css("color")));
const backgroundColorHEX = rgba2hex($("#header").css("background-color"));
const backgroundColor = backgroundColorHEX.length == 8 ? Number(backgroundColorHEX) : backgroundColorHEX >>> 8;
const backgroundOpacity = backgroundColorHEX.length == 8 ? 1 : (backgroundColorHEX & 0xFF) / 255;
const borderColorHEX = rgba2hex($("#header").css("border-color"));
const borderColor = borderColorHEX.length == 8 ? Number(borderColorHEX) : borderColorHEX >>> 8;
const borderOpacity = borderColorHEX.length == 8 ? 1 : (borderColorHEX & 0xFF) / 255;
const activeConnectorColorDefault = "ff0000";
var activeConnectorColor = Number("0x" + (readCookie("activeConnectorColor").length > 0 ? readCookie("activeConnectorColor") : activeConnectorColorDefault));

const lineStyleThinSquare = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: borderColor, native: true, width: 1 };
const lineStyleThinButt = { alpha: borderOpacity, cap: PIXI.LINE_CAP.BUTT, color: borderColor, native: true, width: 1 };
const lineStyleThickSquare = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: borderColor, native: false, width: 8 };
var lineStyleThickButt = { alpha: 1, cap: PIXI.LINE_CAP.BUTT, color: activeConnectorColor, native: false, width: 8 };

var pixiAllocatedPoints = new Map();
var pixiNodes = [];
var pixiConnectors = [];
var pixiConnectorPairs = [];

var pixiBackground;
var pixiTooltip;
var pixiDragging;

var debugMode = false;

var isTouching = false;
var initialScale;
var initialTouchDistance;

var oldWidth = 0;
var oldHeight = 0;

PIXI.settings.RESOLUTION = devicePixelRatio;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

// pixiJS application helper
const pixiJS = new PIXI.Application({
	antialias: false,
	autoDensity: true,
	backgroundAlpha: 0,
	height: minCanvasHeight,
	width: minCanvasWidth,
});

PIXI.Graphics.prototype.updateLineStyle = function({ alpha = null, cap = null, color = null, width = null, native = null } = {}) {
	let styleChanged = false;
	this.geometry.graphicsData.forEach(data => {
		if (alpha != null && alpha != data.lineStyle.alpha) {
			data.lineStyle.alpha = alpha;
			styleChanged = true;
		}
		if (cap != null && cap != data.lineStyle.cap) {
			data.lineStyle.cap = cap;
			styleChanged = true;
		}
		if (color != null && color != data.lineStyle.color) {
			data.lineStyle.color = color;
			styleChanged = true;
		}
		if (width != null && width != data.lineStyle.width) {
			data.lineStyle.width = width;
			styleChanged = true;
		}
		if (native != null && native != data.lineStyle.native) {
			data.lineStyle.native = native;
			styleChanged = true;
		}
	});
	if (styleChanged) {
		this.geometry.invalidate();
	}
}

// event handlers
const classString = "#classSelector option:selected";
const groupString = "#groupSelector option:selected";
function handleColorInput(event) {
	writeCookie("activeConnectorColor", $("#colorInput").val().slice(1));

	activeConnectorColor = Number(readCookie("activeConnectorColor").length > 0 ? "0x" + readCookie("activeConnectorColor") : 0xff0000);
	lineStyleThickButt = { alpha: 1, cap: PIXI.LINE_CAP.BUTT, color: activeConnectorColor, native: false, width: 8 };

	pixiConnectors.forEach(connector => updateConnectorLineStyle(connector, connector.startNode, connector.endNode));
}
function handleColorButton(event) {
	$("#colorInput").click();
	event.preventDefault();
}
function handleSkillTreeZoom(event) {
	switch (event.type) {
		case "touchstart":
			if (event.originalEvent.touches.length == 2) {
				isTouching = true;
				initialScale = pixiJS.stage.scale.x;
				initialTouchDistance = Math.hypot(
					event.originalEvent.touches[0].clientX - event.originalEvent.touches[1].clientX,
					event.originalEvent.touches[0].clientY - event.originalEvent.touches[1].clientY);
			}
			break;
		case "touchend":
			isTouching = false;
			break;
	}
	if (event.type == "wheel" || (event.type == "touchmove" && isTouching)) {
		let newScale = 0;
		if (event.type == "wheel") {
			if (event.originalEvent.deltaY < 0) {
				newScale = Math.round((pixiJS.stage.scale.x + 0.05) * 100) / 100;
			} else if (event.originalEvent.deltaY > 0) {
				newScale = Math.round((pixiJS.stage.scale.x - 0.05) * 100) / 100;
			}
		} else {
			newScale = Math.hypot(
				event.originalEvent.touches[0].clientX - event.originalEvent.touches[1].clientX,
				event.originalEvent.touches[0].clientY - event.originalEvent.touches[1].clientY)
				* initialScale / initialTouchDistance;
		}
		if (newScale >= 0.25 && newScale <= 2) {
			if (event.type == "wheel") {
				pixiJS.stage.pivot.x = Math.round(event.clientX / pixiJS.stage.scale.x + pixiJS.stage.pivot.x - event.clientX / newScale);
				pixiJS.stage.pivot.y = Math.round(event.clientY / pixiJS.stage.scale.y + pixiJS.stage.pivot.y - event.clientY / newScale);
			} else {
				const averageX = (event.originalEvent.touches[0].clientX + event.originalEvent.touches[1].clientX) / 2;
				const averageY = (event.originalEvent.touches[0].clientY + event.originalEvent.touches[1].clientY) / 2;
				pixiJS.stage.pivot.x = Math.round(averageX / pixiJS.stage.scale.x + pixiJS.stage.pivot.x - averageX / newScale);
				pixiJS.stage.pivot.y = Math.round(averageY / pixiJS.stage.scale.y + pixiJS.stage.pivot.y - averageY / newScale);
			}
			pixiJS.stage.scale.x = newScale;
			pixiJS.stage.scale.y = newScale;
			if (pixiTooltip) {
				drawTooltip(pixiNodes[pixiTooltip.nodeIndex]);
			}
			if (preventConnectorScaling) {
				drawAllConnectors();
			}
		}
	}
	event.preventDefault();
}
function handleClassSelection(event) {
	const newClass = $(classString);
	if (newClass.text() != $("#className").text()) {
		if (newClass.val() == "none") {
			$("#className").text("None");
			$("#header h2").addClass("hidden");
			$("#groupSelector, #resetButton").prop("disabled", true);
			$("#groupSelector, #searchInput, #searchButton").addClass("disabled");
			$("#groupSelector").empty();
			$("#searchInput").removeAttr("style");
		} else {
			$("#className").text(newClass.text());
			$("#header h2").removeClass("hidden");
			$("#groupSelector, #resetButton").prop("disabled", false);
			$("#groupSelector, #searchInput, #searchButton").removeClass("disabled");
		}
		rebuildCanvas();
	}
}
function handleGroupSelection(event) {
	const newGroupName = $(groupString).text();
	const newGroupNode = pixiNodes.find(pixiNode => pixiNode.nodeName == newGroupName);
	if (newGroupNode != undefined) {
		pixiJS.stage.pivot.x = newGroupNode.x - oldWidth / pixiJS.stage.scale.x / 2;
		pixiJS.stage.pivot.y = newGroupNode.y - oldHeight / pixiJS.stage.scale.y / 2;
	}
}
var oldSearchIdx = 0;
var oldSearchText = "";
function handleSearchInput(event) {
	let newSearchIdx = 0;
	const newSearchText = $("#searchInput").val();
	if (newSearchText.length > 2 && (oldSearchText != newSearchText || event.keyCode == 13 || event.type == "click")) {
		let firstMatch;
		let firstMatchIdx = 0;
		const nodeMatch = pixiNodes.find(pixiNode => {
			// search `nodeHeader` for `newSearchText`
			const nodeHeader = pixiNode.nodeName + (pixiNode.damageType != undefined ? ` (${pixiNode.damageType})` : "");
			if (nodeHeader.toLowerCase().includes(newSearchText.toLowerCase())) {
				if (firstMatch == undefined) {
					firstMatch = pixiNode;
					firstMatchIdx = newSearchIdx;
				}
				if (oldSearchText == newSearchText) {
					if (oldSearchIdx >= newSearchIdx) {
						newSearchIdx++;
					} else {
						oldSearchIdx = newSearchIdx;
						return true;
					}
				} else {
					return true;
				}
			} else {
				// failed to find `newSearchText` in any `nodeName`, trying `nodeDesc` next
				const nodeDesc = pixiNode.nodeData.get("description");
				if (!nodeDesc || nodeDesc.length == 0) return false;
				if (nodeDesc.toLowerCase().includes(newSearchText.toLowerCase())) {
					if (firstMatch == undefined) {
						firstMatch = pixiNode;
						firstMatchIdx = newSearchIdx;
					}
					if (oldSearchText == newSearchText) {
						if (oldSearchIdx >= newSearchIdx) {
							newSearchIdx++;
						} else {
							oldSearchIdx = newSearchIdx;
							return true;
						}
					} else {
						return true;
					}
				}
			}
			return false;
		});
		if (nodeMatch != undefined) {
			pixiJS.stage.pivot.x = nodeMatch.x - oldWidth / pixiJS.stage.scale.x / 2;
			pixiJS.stage.pivot.y = nodeMatch.y - oldHeight / pixiJS.stage.scale.y / 2;
			drawTooltip(nodeMatch);
		} else if (firstMatch != undefined) {
			pixiJS.stage.pivot.x = firstMatch.x - oldWidth / pixiJS.stage.scale.x / 2;
			pixiJS.stage.pivot.y = firstMatch.y - oldHeight / pixiJS.stage.scale.y / 2;
			drawTooltip(firstMatch);
			oldSearchIdx = firstMatchIdx;
		}
		if (oldSearchText != newSearchText) {
			oldSearchIdx = 0;
			oldSearchText = newSearchText;
		}
	}
}
function resizeSearchInput() {
	const targetWidth = $("#extraButtons2").innerWidth() - $("#classSelector").outerWidth(true) - $("#groupSelector").outerWidth(true) - $("#searchButton").outerWidth(true) - 5;
	$("#searchInput").outerWidth(targetWidth);
}
function handleResetButton() {
	rebuildCanvas();
}
function handleDebugButton() {
	debugMode = !debugMode;
	$("#debugButton").text(debugMode ? "Disable Debugging" : "Enable Debugging");
}
function handleSaveButton() {
	const className = $(classString).val();
	if (className == "none") {
		window.location.replace(window.location.href.split("#")[0]);
	} else {
		let nodeData = {
			className: className,
		};
		pixiNodes.forEach(curNode => {
			if (curNode.groupName != undefined) {
				const allocatedPoints = curNode.nodeData.get("allocatedPoints");
				if (allocatedPoints > 0) {
					//const fullNodeName = curNode.groupName + ": " + curNode.nodeName;
					const uniqueNodeId = Number(curNode.nodeData.get("id"));
					nodeData[uniqueNodeId] = curNode.nodeData.get("allocatedPoints");
				}
			}
		});
		const jsonData = JSON.stringify(nodeData);
		const compressedData = LZString.compressToEncodedURIComponent(jsonData);
		const newURL = window.location.href.split("#")[0] + "#" + compressedData;
		window.location.replace(newURL);
	}
}
function handleReloadButton() {
	const urlData = window.location.href.split("#");
	if (urlData[1] != undefined && urlData[1].length > 0) {
		const jsonData = LZString.decompressFromEncodedURIComponent(urlData[1]);
		const nodeData = JSON.parse(jsonData);

		$.when($("#classSelector").val(nodeData.className).change()).then(finishLoading);

		function finishLoading() {
			delete nodeData.className;
			function compareNodes(firstNode, secondNode) {
				const firstFullNodeName = firstNode.groupName + ": " + firstNode.nodeName;
				const firstUniqueNodeId = Number(firstNode.nodeData.get("id"));
				const firstSavedPoints = nodeData[firstUniqueNodeId] == undefined ? (nodeData[firstFullNodeName] == undefined ? 0 : nodeData[firstFullNodeName]) : nodeData[firstUniqueNodeId];

				const secondFullNodeName = secondNode.groupName + ": " + secondNode.nodeName;
				const secondUniqueNodeId = Number(secondNode.nodeData.get("id"));
				const secondSavedPoints = nodeData[secondUniqueNodeId] == undefined ? (nodeData[secondFullNodeName] == undefined ? 0 : nodeData[secondFullNodeName]) : nodeData[secondUniqueNodeId];

				return firstSavedPoints - secondSavedPoints;
			}
			function processNode(curNode) {
				if (curNode.groupName != undefined) {
					const fullNodeName = curNode.groupName + ": " + curNode.nodeName;
					const uniqueNodeId = Number(curNode.nodeData.get("id"));
					const savedPoints = nodeData[uniqueNodeId] == undefined ? (nodeData[fullNodeName] == undefined ? 0 : nodeData[fullNodeName]) : nodeData[uniqueNodeId];

					const unusedPoints = getUnusedPoints(false);
					const allocatedPoints = curNode.nodeData.get("allocatedPoints");
					const maxPoints = curNode.nodeData.get("maxPoints");

					const newPoints = Math.min(Math.max(Math.min(savedPoints, maxPoints), 0), unusedPoints + allocatedPoints);

					if (newPoints < allocatedPoints || canAllocate(curNode)) {
						pixiAllocatedPoints.set(curNode.groupName, pixiAllocatedPoints.get(curNode.groupName) - allocatedPoints + newPoints);
						updateNodePoints(curNode, newPoints);
					}
				}
			}
			// sort nodes based on their saved points, so nodes get deallocated first (to free up unused points) before allocating new nodes
			const sortedNodes = [...pixiNodes].filter(pixiNode => pixiNode.groupName != undefined).sort(compareNodes);
			for (const curNode of sortedNodes) processNode(curNode);
			updateCharacterLevel();
		}
	}
}
function handleShareButton() {
	navigator.clipboard.writeText(window.location.href);
}
function onContextMenu(event) {
	event.preventDefault();
}
function clearTextSelect(event) {
	if (document.activeElement != $("#searchInput")[0]) window.getSelection()?.removeAllRanges();
}
function onDragStart(event) {
	if (!debugMode) return onDragAllStart(event);
	pixiDragging = this;
	this.offsetX = Math.floor(event.global.x / pixiJS.stage.scale.x - pixiDragging.x);
	this.offsetY = Math.floor(event.global.y / pixiJS.stage.scale.y - pixiDragging.y);
	this.zIndex = 3;
	pixiJS.stage.sortChildren();
}
function onDragAllStart(event) {
	pixiBackground.startX = event.global.x / pixiJS.stage.scale.x;
	pixiBackground.startY = event.global.y / pixiJS.stage.scale.y;
	for (let i = 0; i < pixiJS.stage.children.length; i++) {
		pixiJS.stage.children[i].position.startX = pixiJS.stage.children[i].position.x;
		pixiJS.stage.children[i].position.startY = pixiJS.stage.children[i].position.y;
	}
	pixiDragging = pixiBackground;
}
function onDragEnd(event) {
	if (!debugMode) return onDragAllEnd(event);
	pixiDragging = null;
	this.zIndex = 1;
	pixiJS.stage.sortChildren();
}
function onDragAllEnd(event) {
	pixiDragging = null;
}
function onDragMove(event, dragOverride) {
	if (!debugMode) return onDragAllMove(event);
	if (pixiDragging == this || dragOverride) {
		const mouseX = Math.floor(event.global.x / pixiJS.stage.scale.x) - pixiDragging.offsetX;
		const mouseY = Math.floor(event.global.y / pixiJS.stage.scale.y) - pixiDragging.offsetY;
		if (pixiDragging.position.x != mouseX || pixiDragging.position.y != mouseY) {
			pixiDragging.position.x = mouseX;
			pixiDragging.position.y = mouseY;
			drawTooltip(pixiDragging);
			drawAllConnectors();
		}
	}
}
function onDragAllMove(event) {
	if (!isTouching) {
		if (pixiDragging == pixiBackground) {
			for (let i = 0; i < pixiJS.stage.children.length; i++) {
				pixiJS.stage.children[i].position.x = pixiJS.stage.children[i].position.startX - pixiDragging.startX + event.global.x / pixiJS.stage.scale.x;
				pixiJS.stage.children[i].position.y = pixiJS.stage.children[i].position.startY - pixiDragging.startY + event.global.y / pixiJS.stage.scale.y;
			}
		} else if (pixiDragging) {
			return onDragMove(event, true);
		}
	}
	if (pixiTooltip) {
		repositionTooltip();
	}
}
function onMouseOver(event) {
	drawTooltip(this);
}
function onMouseOut(event) {
	if (!pixiDragging) eraseTooltip();
}
// returns the current [x, y] position of curNode relative to pixiBackground or the parent groupNode
function getNodePosition(curNode) {
	if (curNode.groupName == undefined) {
		const x = Math.round(curNode.position.x - pixiBackground.position.x - maxCanvasWidth);
		const y = Math.round(curNode.position.y - pixiBackground.position.y - maxCanvasHeight);
		return [x, y];
	} else {
		const groupNode = pixiNodes.find(pixiNode => pixiNode.nodeName == curNode.groupName);
		const x = Math.round(curNode.position.x - groupNode.position.x);
		const y = Math.round(curNode.position.y - groupNode.position.y);
		return [x, y];
	}
}
function getUnusedPoints(paragonPoints = false) {
	if (paragonPoints) {
		// 1 paragon point gained at level 50, then 2 per level from 51-100 inclusive (level total: 201); plus 20 from renown (final total: 221)
		const maxParagonPoints = 221;
		// TODO: implement paragon points
		return 0;
	} else {
		// 1 skill point per level from 2-49 inclusive (level total: 48); plus 15 from renown (final total: 63)
		const maxSkillPoints = 63;
		const curSkillPoints = Array.from(pixiAllocatedPoints.values()).reduce((a, b) => a + b, 0);
		return maxSkillPoints - curSkillPoints;
	}
}
function updateCharacterLevel() {
	const unusedPoints = getUnusedPoints(false);
	let charLevel = 1;
	let renownLevel = 0;
	if (unusedPoints >= 15) {
		charLevel = 64 - unusedPoints;
	} else {
		charLevel = 50;
		renownLevel = 15 - unusedPoints;
	}
	$("#charLevel").text(charLevel);
	$("#renownLevel").text(renownLevel > 0 ? " (Renown " + renownLevel + ")" : "");
}
function updateConnectorLineStyle(nodeConnector, startNode, endNode) {
	const startPoints = startNode.nodeData.get("allocatedPoints") || 0;
	const endPoints = endNode.nodeData.get("allocatedPoints") || 0;
	if (startNode.groupName == undefined && endNode.groupName == undefined) {
		const requiredPointsStart = startNode.nodeData.get("requiredPoints");
		const requiredPointsEnd = endNode.nodeData.get("requiredPoints");
		const validConnection = requiredPointsStart <= getAllocatedSkillPoints(startNode.nodeName) && requiredPointsEnd <= getAllocatedSkillPoints(endNode.nodeName);
		if (validConnection) {
			nodeConnector.lineStyle(lineStyleThickButt);
			nodeConnector.updateLineStyle(lineStyleThickButt);
		} else {
			nodeConnector.lineStyle(lineStyleThinButt);
			nodeConnector.updateLineStyle(lineStyleThinButt);
		}
	} else if ((startNode.groupName == undefined && endPoints > 0) || (endNode.groupName == undefined && startPoints > 0) || (startPoints > 0 && endPoints > 0)) {
		nodeConnector.lineStyle(lineStyleThickButt);
		nodeConnector.updateLineStyle(lineStyleThickButt);
	} else {
		nodeConnector.lineStyle(lineStyleThinButt);
		nodeConnector.updateLineStyle(lineStyleThinButt);
	}
}
function canAllocate(curNode) {
	if (curNode.groupName == "Capstone") {
		return pixiNodes.find(pixiNode => {
			if (pixiNode.groupName != curNode.groupName || pixiNode == curNode) return false;
			if (![...pixiNode.nodeData.get("connections").values()].includes(curNode.groupName)) return false;
			return (pixiNode.nodeData.get("allocatedPoints") || 0) > 0;
		}) == undefined;
	} else if (curNode.groupName == "Ultimate") {
		if (curNode.nodeData.get("description").includes("Cooldown")) {
			return pixiNodes.find(pixiNode => {
				if (pixiNode.groupName != curNode.groupName || pixiNode == curNode) return false;
				if (![...pixiNode.nodeData.get("connections").values()].includes(curNode.groupName)) return false;
				if (!pixiNode.nodeData.get("description").includes("Cooldown")) return false;
				return (pixiNode.nodeData.get("allocatedPoints") || 0) > 0;
			}) == undefined;
		} else {
			return true;
		}
	}
	const baseSkill = curNode.nodeData.get("baseSkill");
	const upgradePrefixes = ["Enhanced"];
	if (baseSkill != undefined && !upgradePrefixes.some(upgradePrefix => curNode.nodeName.indexOf(upgradePrefix) != -1)) {
		return pixiNodes.find(pixiNode => {
			if (pixiNode.groupName != curNode.groupName || pixiNode == curNode) return false;
			if (pixiNode.nodeData.get("baseSkill") != baseSkill) return false;
			if ((pixiNode.nodeData.get("allocatedPoints") || 0) == 0) return false;
			return !upgradePrefixes.some(upgradePrefix => pixiNode.nodeName.indexOf(upgradePrefix) != -1);
		}) == undefined;
	}
	return true;
}
function updateNodePoints(curNode, newPoints) {
	if (curNode.nodeData.get("allocatedPoints") == 0 && newPoints == 0) return;

	curNode.nodeData.set("allocatedPoints", newPoints);
	curNode.children[2].text = newPoints + "/" + curNode.nodeData.get("maxPoints");

	if (newPoints > 0) {
		curNode.children[1].style.fontWeight = "bold";
		curNode.children[2].style.fontWeight = "bold";
		curNode.children[3].children[0].style.fontWeight = "bold";
		curNode.children[4].children[0].style.fontWeight = "bold";
		curNode.children[5].updateLineStyle(lineStyleThickSquare);
	} else {
		curNode.children[1].style.fontWeight = "normal";
		curNode.children[2].style.fontWeight = "normal";
		curNode.children[3].children[0].style.fontWeight = "normal";
		curNode.children[4].children[0].style.fontWeight = "normal";
		curNode.children[5].updateLineStyle(lineStyleThinSquare);
	}

	const className = $(classString).val();
	const classData = classMap.get(className);
	if (classData != undefined) {
		const trunkData = classData.get("Trunk Data");
		pixiNodes.filter(pixiNode => trunkData.has(pixiNode.nodeName)).forEach(groupNode => {
			const requiredPoints = groupNode.nodeData.get("requiredPoints");
			const validConnection = requiredPoints <= getAllocatedSkillPoints(groupNode.nodeName);
			if (validConnection) {
				groupNode.children[1].style.fontWeight = "bold";
				groupNode.children[2].updateLineStyle(lineStyleThickSquare);
			} else {
				groupNode.children[1].style.fontWeight = "normal";
				groupNode.children[2].updateLineStyle(lineStyleThinSquare);
			}
		});
	}

	pixiConnectors.forEach(connector => updateConnectorLineStyle(connector, connector.startNode, connector.endNode));
}
function handlePlusButton(curNode) {
	if (getUnusedPoints(false) <= 0 || !canAllocate(curNode)) return;

	let validConnection = false;
	const nodeConnections = curNode.nodeData.get("connections");
	for (const connectedNode of nodeConnections.values()) {
		for (const parentNode of pixiNodes) {
			if (parentNode.nodeName == connectedNode) {
				if (parentNode.groupName == undefined) {
					const requiredPoints = parentNode.nodeData.get("requiredPoints");
					validConnection = requiredPoints <= getAllocatedSkillPoints(parentNode.nodeName);
				} else {
					validConnection = parentNode.nodeData.get("allocatedPoints") > 0;
				}
				break;
			}
		}
		if (validConnection) break;
	}
	if (!validConnection) return;

	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	const maxPoints = curNode.nodeData.get("maxPoints");
	const newPoints = Math.min(allocatedPoints + 1, maxPoints);

	if (newPoints != allocatedPoints) {
		pixiAllocatedPoints.set(curNode.groupName, pixiAllocatedPoints.get(curNode.groupName) + 1);
		updateNodePoints(curNode, newPoints);
		updateCharacterLevel();
	}
}
function handleMinusButton(curNode) {
	let validConnection = false;
	const nodeConnections = curNode.nodeData.get("connections");
	for (const connectedNode of nodeConnections.values()) {
		for (const parentNode of pixiNodes) {
			if (parentNode.nodeName == connectedNode) {
				if (parentNode.groupName == undefined) {
					const requiredPoints = parentNode.nodeData.get("requiredPoints");
					validConnection = requiredPoints <= getAllocatedSkillPoints(parentNode.nodeName);
				} else {
					validConnection = parentNode.nodeData.get("allocatedPoints") > 0;
				}
				break;
			}
		}
		if (validConnection) break;
	}
	if (!validConnection) return;

	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	const maxPoints = curNode.nodeData.get("maxPoints");
	const newPoints = Math.max(allocatedPoints - 1, 0);

	if (newPoints != allocatedPoints) {
		pixiAllocatedPoints.set(curNode.groupName, pixiAllocatedPoints.get(curNode.groupName) - 1);
		updateNodePoints(curNode, newPoints);
		validateAllDependentNodes();
		updateCharacterLevel();
	}
}
// returns the number of allocated skill points in every node leading up to (but not including) groupName
function getAllocatedSkillPoints(groupName) {
	let points = 0;

	for (const [key, value] of pixiAllocatedPoints.entries()) {
		if (key == groupName) break;
		points += value;
	}

	return points;
}
const MAX_RECURSION_DEPTH = 3;
function recursivePathValidation(startNode, recursionDepth = 0) {
	for (const pixiNode of pixiNodes) {
		if (pixiNode.nodeName == startNode) {
			if (pixiNode.groupName == undefined) {
				return pixiNode.nodeData.get("requiredPoints") <= getAllocatedSkillPoints(pixiNode.nodeName);
			} else if (pixiNode.nodeData.get("allocatedPoints") > 0) {
				if (recursionDepth < MAX_RECURSION_DEPTH) {
					const nodeConnections = pixiNode.nodeData.get("connections");
					if (nodeConnections != undefined) {
						for (const connectedNode of nodeConnections.values()) {
							if (recursivePathValidation(connectedNode, recursionDepth + 1)) {
								return true;
							}
						}
					}
				}
			}
			return false;
		}
	}
	return false;
}
function validateAllDependentNodes() {
	for (const pixiNode of pixiNodes) {
		const nodeConnections = pixiNode.nodeData.get("connections");
		if (nodeConnections != undefined) {
			let validConnection = false;
			for (const connectedNode of nodeConnections.values()) {
				validConnection = recursivePathValidation(connectedNode);
				if (validConnection) break;
			}
			if (!validConnection) {
				const allocatedPoints = pixiNode.nodeData.get("allocatedPoints");
				const maxPoints = pixiNode.nodeData.get("maxPoints");

				pixiAllocatedPoints.set(pixiNode.groupName, pixiAllocatedPoints.get(pixiNode.groupName) - allocatedPoints);
				updateNodePoints(pixiNode, 0);
			}
		}
	}
}
function drawNode(nodeName, nodeData, groupName, branchData) {
	let x = nodeData.get("x");
	let y = nodeData.get("y");

	if (x == undefined || y == undefined) return;

	if (branchData != undefined) {
		x += branchData.get("x");
		y += branchData.get("y");
	}

	let nameFontSize = 36;
	let displayName = nodeName;
	if (nodeName.length > 6) {
		displayName = nodeName.split([" ", "—"]).map((n) => n[0]).join("");
	}
	if (displayName.length > 4) {
		nameFontSize = 32;
	}

	const nodeText = new PIXI.Text(displayName, {
		align: "center",
		cacheAsBitmap: true,
		fill: textColor,
		fontFamily: fontFamily,
		fontSize: nameFontSize * 4,
		fontVariant: "small-caps",
		width: nodeWidth * 4,
	});
	nodeText.scaleMode = PIXI.SCALE_MODES.LINEAR;
	nodeText.scale.set(0.25);
	nodeText.anchor.set(0.5);

	let nodeText2, nodeText3, nodeText4, plusContainer, minusContainer;
	if (groupName != undefined) {
		const allocatedPoints = nodeData.get("allocatedPoints");
		const maxPoints = nodeData.get("maxPoints");
		nodeText2 = new PIXI.Text(allocatedPoints + "/" + maxPoints, {
			align: "right",
			cacheAsBitmap: true,
			fill: textColor,
			fontFamily: fontFamily,
			fontSize: 24 * 4,
			fontVariant: "small-caps",
			width: nodeWidth * 4,
		});
		nodeText2.scaleMode = PIXI.SCALE_MODES.LINEAR;
		nodeText2.scale.set(0.25);
		nodeText2.anchor.set(0.5);
		nodeText2.x = (nodeWidth - nodeText2.width) / 2 - 5;
		nodeText2.y = (nodeText2.height - nodeHeight) / 2 + 2;

		const nodeText3 = new PIXI.Text("+", {
			align: "right",
			cacheAsBitmap: true,
			fill: textColor,
			fontFamily: fontFamilyOverride,
			fontSize: 48 * 4,
			fontVariant: "small-caps",
			width: nodeWidth * 4,
		});
		nodeText3.scaleMode = PIXI.SCALE_MODES.LINEAR;
		nodeText3.scale.set(0.25);
		nodeText3.anchor.set(0.5);
		nodeText3.x = (nodeWidth - nodeText3.width) / 2;
		nodeText3.y = (nodeHeight - nodeText3.height) / 2 + 4;

		nodeText4 = new PIXI.Text("–", {
			align: "left",
			cacheAsBitmap: true,
			fill: textColor,
			fontFamily: fontFamilyOverride,
			fontSize: 48 * 4,
			fontVariant: "small-caps",
			width: nodeWidth * 4,
		});
		nodeText4.scaleMode = PIXI.SCALE_MODES.LINEAR;
		nodeText4.scale.set(0.25);
		nodeText4.anchor.set(0.5);
		nodeText4.x = (nodeText4.width - nodeWidth) / 2 + 4;
		nodeText4.y = (nodeHeight - nodeText4.height) / 2;

		plusContainer = new PIXI.Container();
		plusContainer.interactive = true;
		plusContainer.addChild(nodeText3);

		minusContainer = new PIXI.Container();
		minusContainer.interactive = true;
		minusContainer.addChild(nodeText4);
	}

	const nodeBackground = new PIXI.Graphics();
	nodeBackground.beginFill(backgroundColor);
	nodeBackground.drawRect(0, 0, nodeWidth, nodeHeight);
	nodeBackground.alpha = backgroundOpacity * 2 / 3;
	nodeBackground.pivot.x = nodeWidth / 2;
	nodeBackground.pivot.y = nodeHeight / 2;

	const nodeBorder = new PIXI.Graphics();
	nodeBorder.pivot.x = nodeWidth / 2;
	nodeBorder.pivot.y = nodeHeight / 2;
	if (groupName == undefined && nodeData.get("requiredPoints") == 0) {
		nodeBorder.lineStyle(lineStyleThickSquare);
	} else {
		nodeBorder.lineStyle(lineStyleThinSquare);
	}
	nodeBorder.moveTo(0, 0);
	nodeBorder.lineTo(nodeWidth, 0);
	nodeBorder.moveTo(nodeWidth, 0);
	nodeBorder.lineTo(nodeWidth, nodeHeight);
	nodeBorder.moveTo(nodeWidth, nodeHeight);
	nodeBorder.lineTo(0, nodeHeight);
	nodeBorder.moveTo(0, nodeHeight);
	nodeBorder.lineTo(0, 0);

	const node = new PIXI.Container();
	node.interactive = true;
	node.position.x = x;
	node.position.y = y;
	node.nodeName = nodeName;
	node.nodeData = nodeData;
	node.groupName = groupName;
	//node.branchData = branchData;
	node.nodeIndex = pixiNodes.length;
	if (groupName == undefined) {
		node.addChild(nodeBackground, nodeText, nodeBorder);
	} else {
		node.addChild(nodeBackground, nodeText, nodeText2, plusContainer, minusContainer, nodeBorder);
	}

	switch (nodeData.get("damageType")) {
		case -1:
		case undefined:
			break;
		case 0:
			node.damageType = "Physical";
			break;
		case 1:
			node.damageType = "Fire";
			break;
		case 2:
			node.damageType = "Lightning";
			break;
		case 3:
			node.damageType = "Cold";
			break;
		case 4:
			node.damageType = "Poison";
			break;
		case 5:
			node.damageType = "Shadow";
			break;
		default:
			node.damageType = "Unknown";
			break;
	}

	node
		.on("mousedown", onDragStart)
		.on("touchstart", onDragStart)
		.on("mouseup", onDragEnd)
		.on("mouseupoutside", onDragEnd)
		.on("touchend", onDragEnd)
		.on("touchendoutside", onDragEnd)
		.on("mousemove", onDragMove)
		.on("touchmove", onDragMove)
		.on("mouseover", onMouseOver)
		.on("mouseout", onMouseOut)
		.on("tap", onMouseOver);

	if (groupName != undefined) {
		plusContainer
			.on("click", () => handlePlusButton(node))
			.on("tap", () => handlePlusButton(node));
		minusContainer
			.on("click", () => handleMinusButton(node))
			.on("tap", () => handleMinusButton(node));
	}

	pixiNodes.push(pixiJS.stage.addChild(node));
}
function drawAllNodes() {
	const className = $(classString).val();
	const classData = classMap.get(className);
	if (classData != undefined) {
		const trunkData = classData.get("Trunk Data");
		$("#groupSelector").empty();
		for (const [groupName, groupData] of classData) {
			const branchData = trunkData.get(groupName);
			if (branchData != undefined) {
				$("#groupSelector").append(`<option value="${groupName.replace(/\s/g, "").toLowerCase()}">${groupName}</option>`);
				// special logic for group node
				const groupNode = new Map();
				groupNode.set("description", "Spend {requiredPoints} additional skill points to unlock.");
				groupNode.set("requiredPoints", branchData.get("requiredPoints") || 0);
				groupNode.set("x", branchData.get("x") + minCanvasWidth / 2);
				groupNode.set("y", branchData.get("y") + minCanvasHeight / 2);
				drawNode(groupName, groupNode);
				pixiAllocatedPoints.set(groupName, 0);
				for (const [nodeName, nodeData] of groupData) {
					const curNode = groupData.get(nodeName);
					curNode.set("allocatedPoints", 0);
					if (curNode.get("maxPoints") == undefined) {
						// default to 5 max points, if unspecified
						curNode.set("maxPoints", 5);
					}
					drawNode(nodeName, curNode, groupName, branchData);
				}
			}
		}
		resizeSearchInput();
	}
}
function sanitizeNodeDescription(descriptionText) {
	let sanitizedText = descriptionText
		.replace(/{c_.+?}/g, "")								// `{c_white}`, `{c_yellow}`, `{c_green}`, ...
		.replace(/{\/c_.+?}/g, "")								// `{/c_white}`, `{/c_yellow}`, `{/c_green}`, ...
		.replace(/{\/c}/g, "")									// `{/c}`, exact.
		.replace(/{\/?u}/g, "")									// `{u}` and `{/u}`.
		.replace(/{icon.+?}/g, "")								// `{icon:bullet}`, and similar.
		.replace(/{if:Mod.+?}(.|\n)+?({else}|{\/if})/g, "")		// `{if:Mod.UpgradeA}` -> `{/if}`, and similar.
		.replace(/{if:.+?}/g, "")								// `{if:ADVANCED_TOOLTIP}`, and similar.
		.replace(/{\/if}/g, "")									// `{/if}`, exact.
		.replace(/sLevel/g, "")									// `sLevel`, exact.
		.replace(/4second\.:/g, "")								// `4second.:`, exact.
		.replace(/ *\* */g, "")									// `*`, including any nearby whitespace.
		.replace(/ *\| */g, "")									// `|`, including any nearby whitespace.
		.replace(/ \./g, ".")									// Replace ` .` with `.`.
		.replace(/%\]/g, "]%")									// Replace `%]` with `]%`.
		.replace(/{else}/g, "\n")								// Replace `{else}` with a newline.
		.replace(/ *{.+?} */g, "{#}")							// Replace anything inside curly brackets with {#}.
		.replace(/ *\[.+?\] */g, "{#}")							// Replace anything inside square brackets with {#}.
		.replace(/{.+?}{.+?}/g, "{#}")							// Replace {#}{#} with {#}.
		.replace(/([^x+ ]+?){#}/g, "$1 {#}")					// Ensure there is a space between any character (except `x`, `+`, and ` `) and the start of {#}.
		.replace(/{#}([a-zA-Z]+?)/g, "{#} $1")					// Ensure there is a space between any letter (`a-z`, `A-Z`) and the end of {#}.
		.replace(/\( *{/g, "({")								// Remove any whitespace between `(` and `{`.
		.replace(/} *\)/g, "})")								// Remove any whitespace between `}` and `)`.
		.replace(/{#} +(st|nd|rd|th) /g, "{#}$1 ");				// Remove any whitespace between {#} and (`st `, `nd `, `rd `, or `th `).

	return sanitizedText;
}
function drawTooltip(curNode) {
	const stageScaleX = pixiJS.stage.scale.x;
	const stageScaleY = pixiJS.stage.scale.y;

	// skip tooltip redraw if we already have the correct one displayed
	if (!debugMode && pixiTooltip && pixiTooltip.nodeIndex == curNode.nodeIndex && pixiTooltip.stageScaleX == stageScaleX) return;

	eraseTooltip();

	let nodeDesc = curNode.nodeData.get("description");
	if (!nodeDesc || nodeDesc.length == 0) return;

	const requiredPoints = curNode.nodeData.get("requiredPoints");
	if (requiredPoints != undefined) {
		let missingPoints = requiredPoints;
		if (curNode.groupName == undefined) {
			missingPoints -= getAllocatedSkillPoints(curNode.nodeName);
		} else {
			missingPoints -= getAllocatedSkillPoints(curNode.groupName);
		}
		if (missingPoints > 0) {
			nodeDesc = nodeDesc.replace(/{requiredPoints}/g, missingPoints);
			if (missingPoints == 1) {
				nodeDesc = nodeDesc.replace(/points/g, "point");
			}
		} else {
			return;
		}
	} else {
		nodeDesc = sanitizeNodeDescription(nodeDesc);
	}

	if (debugMode) {
		const [debugX, debugY] = getNodePosition(curNode);
		nodeDesc += "\nx: " + debugX + "\ny: " + debugY;
	}

	const nodeHeader = curNode.nodeName + (curNode.damageType != undefined ? ` (${curNode.damageType})` : "");

	$("#tooltipSummaryHeader").text(nodeHeader);
	$("#tooltipSummaryContainer").text(nodeDesc);

	if (document.body.clientWidth < 800) {
		$("#tooltipSummaryHeader").removeClass("disabled");
		$("#tooltipSummaryContainer").removeClass("disabled");
	} else {
		$("#tooltipSummaryHeader").addClass("disabled");
		$("#tooltipSummaryContainer").addClass("disabled");
	}

	resizeCanvas();

	if (document.body.clientWidth < 800) {
		return;
	}

	const tooltipText1 = new PIXI.Text(nodeHeader, {
		align: "left",
		breakWords: true,
		cacheAsBitmap: true,
		fill: textColor,
		fontFamily: fontFamily,
		fontSize: 36 * 4,
		fontVariant: "small-caps",
		fontWeight: "bold",
		width: tooltipWidth * 4,
		wordWrap: true,
		wordWrapWidth: tooltipWidth * 4,
	});
	tooltipText1.scaleMode = PIXI.SCALE_MODES.LINEAR;
	tooltipText1.scale.set(0.25);
	tooltipText1.anchor.set(0);

	const tooltipText2 = new PIXI.Text("\n" + nodeDesc, {
		align: "center",
		breakWords: true,
		cacheAsBitmap: true,
		fill: textColor,
		fontFamily: fontFamily,
		fontSize: 36 * 4,
		width: tooltipWidth * 4,
		wordWrap: true,
		wordWrapWidth: tooltipWidth * 4,
	});
	tooltipText2.scaleMode = PIXI.SCALE_MODES.LINEAR;
	tooltipText2.scale.set(0.25);
	tooltipText2.anchor.set(0);
	tooltipText2.position.y = 18;

	const tooltipBackground = new PIXI.Graphics();
	tooltipBackground.beginFill(backgroundColor);
	tooltipBackground.drawRect(0, 0, Math.max(tooltipText1.width, tooltipText2.width) + 20, tooltipText1.height + tooltipText2.height + 3);
	tooltipBackground.alpha = backgroundOpacity;
	tooltipBackground.pivot.x = 10;
	tooltipBackground.pivot.y = 10;

	const tooltipBorder = new PIXI.Graphics();
	tooltipBorder.lineStyle(lineStyleThickSquare);
	tooltipBorder.moveTo(0, 0);
	tooltipBorder.lineTo(tooltipBackground.width, 0);
	tooltipBorder.moveTo(tooltipBackground.width, 0);
	tooltipBorder.lineTo(tooltipBackground.width, tooltipBackground.height);
	tooltipBorder.moveTo(tooltipBackground.width, tooltipBackground.height);
	tooltipBorder.lineTo(0, tooltipBackground.height);
	tooltipBorder.moveTo(0, tooltipBackground.height);
	tooltipBorder.lineTo(0, 0);
	tooltipBorder.pivot.x = 10;
	tooltipBorder.pivot.y = 10;

	const tooltipSeperator = new PIXI.Graphics();
	tooltipSeperator.lineStyle(lineStyleThinSquare);
	tooltipSeperator.moveTo(0, tooltipText1.height + 12);
	tooltipSeperator.lineTo(tooltipBackground.width - 20, tooltipText1.height + 12);

	const tooltip = new PIXI.Container();
	tooltip.zIndex = 2;

	if (stageScaleX < tooltipScalingFloor) {
		tooltip.scale.x = tooltipScalingFloor / stageScaleX;
		tooltip.scale.y = tooltipScalingFloor / stageScaleY;
	} else if (stageScaleX > tooltipScalingCeiling) {
		tooltip.scale.x = tooltipScalingCeiling / stageScaleX;
		tooltip.scale.y = tooltipScalingCeiling / stageScaleY;
	} else {
		tooltip.scale.x = 1;
		tooltip.scale.y = 1;
	}

	tooltip.addChild(tooltipBackground, tooltipText1, tooltipText2, tooltipBorder, tooltipSeperator);

	pixiTooltip = pixiJS.stage.addChild(tooltip);

	pixiTooltip.nodeIndex = curNode.nodeIndex;
	pixiTooltip.stageScaleX = stageScaleX;
	//pixiTooltip.stageScaleY = stageScaleY; // unused

	repositionTooltip();
}
function eraseTooltip() {
	if (pixiTooltip) {
		pixiTooltip.destroy(true);
		pixiTooltip = null;
	}
}
function repositionTooltip() {
	if (!pixiTooltip) return;

	const offsetTop = $("#header").outerHeight(true);
	const offsetBottom = $("#extraButtons1").outerHeight(true) + $("#extraButtons2").outerHeight(true) + $("#summaryContainer").outerHeight(true);

	const globalPosition = pixiNodes[pixiTooltip.nodeIndex].getGlobalPosition();

	const borderWidth = 8;
	const marginSize = 10;
	const xOffsetFix = 2;

	const minX = marginSize - xOffsetFix;
	const minY = offsetTop + marginSize;

	const maxX = pixiJS.renderer.width - marginSize - xOffsetFix - pixiTooltip.width * pixiJS.stage.scale.x;
	const maxY = pixiJS.renderer.height - offsetBottom - marginSize - pixiTooltip.height * pixiJS.stage.scale.y;

	const globalX = globalPosition.x + (nodeWidth + borderWidth) * pixiJS.stage.scale.x / 2;
	const globalY = globalPosition.y - (nodeHeight + borderWidth) * pixiJS.stage.scale.y / 2;

	const diffX = (globalX > maxX) ? maxX - globalX : (globalX < minX) ? minX - globalX : 0;
	const diffY = (globalY > maxY) ? maxY - globalY : (globalY < minY) ? minY - globalY : 0;

	pixiTooltip.position.x = pixiNodes[pixiTooltip.nodeIndex].x + diffX / pixiJS.stage.scale.x + nodeWidth / 2 + 20 * pixiTooltip.scale.x;
	pixiTooltip.position.y = pixiNodes[pixiTooltip.nodeIndex].y + diffY / pixiJS.stage.scale.y - nodeHeight / 2 + 10 * pixiTooltip.scale.y;
}
function drawConnector(startNode, endNode) {
	const connector = new PIXI.Graphics();
	connector.zIndex = -1;

	if (startNode.groupName != undefined && endNode.groupName != undefined && startNode.groupName != endNode.groupName) {
		return;
	}

	const connectorPair = startNode.nodeName < endNode.nodeName ? [endNode.nodeName, startNode.nodeName].join(" / ") : [startNode.nodeName, endNode.nodeName].join(" / ");
	if (pixiConnectorPairs[connectorPair]) {
		return;
	} else {
		pixiConnectorPairs[connectorPair] = true;
	}

	updateConnectorLineStyle(connector, startNode, endNode);

	let startX = startNode.x;
	let startY = startNode.y;
	let endX = endNode.x;
	let endY = endNode.y;
	let nodeWidthOffset = nodeWidth / 2;
	let nodeHeightOffset = nodeHeight / 2;

	if (preventConnectorScaling) {
		startX *= pixiJS.stage.scale.x;
		startY *= pixiJS.stage.scale.y;
		endX *= pixiJS.stage.scale.x;
		endY *= pixiJS.stage.scale.y;
		nodeWidthOffset *= pixiJS.stage.scale.x;
		nodeHeightOffset *= pixiJS.stage.scale.y;
		connector.scale.x = 1 / pixiJS.stage.scale.x;
		connector.scale.y = 1 / pixiJS.stage.scale.y;
	}

	// polygon 1
	let newStartX, newStartY, newEndX, newEndY;
	[ newStartX, newStartY ] = lineIntersect(startX, startY, endX, endY, startX - nodeWidthOffset, startY - nodeHeightOffset, startX + nodeWidthOffset, startY - nodeHeightOffset); // top left to top right
	if (Number.isNaN(newStartX)) [ newStartX, newStartY ] = lineIntersect(startX, startY, endX, endY, startX + nodeWidthOffset, startY - nodeHeightOffset, startX + nodeWidthOffset, startY + nodeHeightOffset); // top right to bottom right
	if (Number.isNaN(newStartX)) [ newStartX, newStartY ] = lineIntersect(startX, startY, endX, endY, startX + nodeWidthOffset, startY + nodeHeightOffset, startX - nodeWidthOffset, startY + nodeHeightOffset); // bottom right to bottom left
	if (Number.isNaN(newStartX)) [ newStartX, newStartY ] = lineIntersect(startX, startY, endX, endY, startX - nodeWidthOffset, startY + nodeHeightOffset, startX - nodeWidthOffset, startY - nodeHeightOffset); // bottom left to top right

	// polygon 2
	[ newEndX, newEndY ] = lineIntersect(startX, startY, endX, endY, endX - nodeWidthOffset, endY - nodeHeightOffset, endX + nodeWidthOffset, endY - nodeHeightOffset); // top left to top right
	if (Number.isNaN(newEndX)) [ newEndX, newEndY ] = lineIntersect(startX, startY, endX, endY, endX + nodeWidthOffset, endY - nodeHeightOffset, endX + nodeWidthOffset, endY + nodeHeightOffset); // top right to bottom right
	if (Number.isNaN(newEndX)) [ newEndX, newEndY ] = lineIntersect(startX, startY, endX, endY, endX + nodeWidthOffset, endY + nodeHeightOffset, endX - nodeWidthOffset, endY + nodeHeightOffset); // bottom right to bottom left
	if (Number.isNaN(newEndX)) [ newEndX, newEndY ] = lineIntersect(startX, startY, endX, endY, endX - nodeWidthOffset, endY + nodeHeightOffset, endX - nodeWidthOffset, endY - nodeHeightOffset); // bottom left to top right

	connector.moveTo(newStartX, newStartY);
	connector.lineTo(newEndX, newEndY);

	connector.startNode = startNode;
	connector.endNode = endNode;

	pixiConnectors.push(pixiJS.stage.addChild(connector));
}
function drawAllConnectors() {
	pixiConnectorPairs = [];
	for (let i = pixiConnectors.length; i > 0; i--) {
		pixiConnectors.pop().destroy(true);
	}
	const className = $(classString).val();
	const classData = classMap.get(className);
	if (classData != undefined) {
		const trunkData = classData.get("Trunk Data");
		let currentNodeItr = 1;
		for (const [groupName, groupData] of classData) {
			const branchData = trunkData.get(groupName);
			if (branchData != undefined) {
				let branchConnections = branchData.get("connections");
				if (branchConnections) {
					branchConnections = [...branchConnections.values()];
					const maxConnectors = branchConnections.length;
					let drawnConnectors = 0;
					for (let targetNodeItr = 0; targetNodeItr < pixiNodes.length; targetNodeItr++) {
						const pixiNode = pixiNodes[targetNodeItr];
						if (branchConnections.includes(pixiNode.nodeName)) {
							drawConnector(pixiNodes[currentNodeItr - 1], pixiNode);
							drawnConnectors++;
						}
						if (drawnConnectors >= maxConnectors) break;
					}
				}
				for (const [nodeName, nodeData] of groupData) {
					const curNode = groupData.get(nodeName);
					let nodeConnections = curNode.get("connections");
					if (nodeConnections) {
						nodeConnections = [...nodeConnections.values()];
						const maxConnectors = nodeConnections.length;
						let drawnConnectors = 0;
						for (let targetNodeItr = 0; targetNodeItr < pixiNodes.length; targetNodeItr++) {
							const pixiNode = pixiNodes[targetNodeItr];
							if (nodeConnections.includes(pixiNode.nodeName)) {
								drawConnector(pixiNodes[currentNodeItr], pixiNode);
								drawnConnectors++;
							}
						if (drawnConnectors >= maxConnectors) break;
						}
					}
					currentNodeItr++;
				}
				currentNodeItr++;
			}
		}
		pixiJS.stage.sortChildren();
	}
}
function drawBackground() {
	pixiBackground = PIXI.Sprite.from(PIXI.Texture.EMPTY);
	pixiBackground.x = -maxCanvasWidth;
	pixiBackground.y = -maxCanvasHeight;
	pixiBackground.width = maxCanvasWidth * 2;
	pixiBackground.height = maxCanvasHeight * 2;
	pixiBackground.interactive = true;
	pixiBackground.renderable = false;
	pixiBackground
		.on("mousedown", onDragAllStart)
		.on("touchstart", onDragAllStart)
		.on("mouseup", onDragAllEnd)
		.on("mouseupoutside", onDragAllEnd)
		.on("touchend", onDragAllEnd)
		.on("touchendoutside", onDragAllEnd)
		.on("mousemove", onDragAllMove)
		.on("touchmove", onDragAllMove);
	pixiJS.stage.addChild(pixiBackground);
}
function rebuildCanvas() {
	while (pixiJS.stage.children[0]) {
		pixiJS.stage.children[0].destroy(true);
	}
	pixiAllocatedPoints = new Map();
	pixiNodes = [];
	pixiConnectors = [];
	pixiConnectorPairs = [];

	pixiTooltip = null;
	pixiDragging = null;

	oldWidth = 0;
	oldHeight = 0;

	pixiJS.stage.pivot.x = 0;
	pixiJS.stage.pivot.y = 0;
	pixiJS.stage.scale.x = 1;
	pixiJS.stage.scale.y = 1;

	drawBackground();
	drawAllNodes();
	drawAllConnectors();

	resizeCanvas();

	$("#charLevel").text("1");
	$("#renownLevel").empty();
}
function resizeCanvas() {
	let [newWidth, newHeight] = [document.documentElement.clientWidth, document.documentElement.clientHeight];
	if (oldWidth != newWidth || oldHeight != newHeight) {
		const offsetTop = $("#header").outerHeight(true);
		const offsetBottom = $("#extraButtons1").outerHeight(true) + $("#extraButtons2").outerHeight(true) + $("#summaryContainer").outerHeight(true);
		$("#skillTree").css({ "margin": "-" + offsetTop + "px auto -" + offsetBottom + "px" });

		pixiJS.renderer.resize(minCanvasWidth, minCanvasHeight);
		[newWidth, newHeight] = [document.documentElement.clientWidth, document.documentElement.clientHeight];
		pixiJS.renderer.resize(newWidth, newHeight);

		for (let i = 0; i < pixiJS.stage.children.length; i++) {
			pixiJS.stage.children[i].position.x = pixiJS.stage.children[i].position.x - oldWidth / 2 + newWidth / 2;
			pixiJS.stage.children[i].position.y = pixiJS.stage.children[i].position.y - oldHeight / 2 + newHeight / 2;
		}

		[oldWidth, oldHeight] = [newWidth, newHeight];

		resizeSearchInput();
	}
}
function readCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length == 2) {
		return parts.pop().split(';').shift();
	}
	return "";
}
function writeCookie(name, value) {
	let date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	const expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

// finalize the page once DOM has loaded
$(document).ready(function() {
	$("#colorInput").val("#" + (readCookie("activeConnectorColor").length > 0 ? readCookie("activeConnectorColor") : activeConnectorColorDefault));
	$("#colorInput").on("change", handleColorInput);
	$("#colorButton").on("click", handleColorButton);
	$("#resetButton").on("click", handleResetButton);
	$("#debugButton").on("click", handleDebugButton);
	$("#saveButton").on("click", handleSaveButton);
	$("#reloadButton").on("click", handleReloadButton);
	$("#shareButton").on("click", handleShareButton);
	$("#classSelector").on("change", handleClassSelection);
	$("#groupSelector").on("change", handleGroupSelection);
	$("#searchInput").on("keyup", handleSearchInput);
	$("#searchButton").on("click", handleSearchInput);
	$("#skillTree").on("wheel touchstart touchend touchmove", handleSkillTreeZoom);
	$("#skillTree").on("contextmenu", onContextMenu);
	$("#skillTree").on("mousemove touchmove", clearTextSelect);
	$("#skillTree").append(pixiJS.view);
	$(window).on("resize", resizeCanvas);
	handleReloadButton();
});