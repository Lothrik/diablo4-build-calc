import { barbarian } from "./classes/barbarian.js";
import { druid } from "./classes/druid.js";
import { necromancer } from "./classes/necromancer.js";
import { rogue } from "./classes/rogue.js";
import { sorceress } from "./classes/sorceress.js";

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

// construct a nested map of all class data
const classObj = { barbarian, druid, necromancer, rogue, sorceress };
var classMap = new Map();
populateMap(classMap, classObj, Object.keys(classObj));

// canvas size constants
const minCanvasWidth = 0;
const maxCanvasWidth = 65535;
const minCanvasHeight = 0;
const maxCanvasHeight = 65535;
const nodeWidth = 100;
const nodeHeight = 100;
const tooltipWidth = 400;
const tooltipHeight = 200;

const preventConnectorScaling = false; // this improves non-native connector quality in some situations, but has a negative performance impact
const tooltipScalingFloor = 0.75;
const tooltipScalingCeiling = 1.25;

const lineStyleThinSquare = { cap: PIXI.LINE_CAP.SQUARE, color: 0xFFFFFF, native: true, width: 1 };
const lineStyleThinButt = { cap: PIXI.LINE_CAP.BUTT, color: 0xFFFFFF, native: true, width: 1 };
const lineStyleThickSquare = { cap: PIXI.LINE_CAP.SQUARE, color: 0xFFFFFF, native: false, width: 4 };
const lineStyleThickButt = { cap: PIXI.LINE_CAP.BUTT, color: 0xFFFFFF, native: false, width: 4 };

// pixiJS application helper
PIXI.settings.RESOLUTION = devicePixelRatio;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const pixiJS = new PIXI.Application({
	antialias: false,
	autoDensity: true,
	backgroundAlpha: 0,
	height: minCanvasHeight,
	width: minCanvasWidth,
});

var pixiAllocatedPoints = new Map();
var pixiNodes = [];
var pixiConnectors = [];

var pixiBackground;
var pixiTooltip;
var pixiDragging;

var debugMode = false;

var initialTouchDistance = 0;

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
function handleDocumentInput(event) {
	switch (event.type) {
		case "keydown":
			switch (event.keyCode) {
				case 9: // tab key
					handleButtonState();
					break;
			}
			break;
	}
}
function handleButtonState(event) {
	if (event && event.type == "mouseleave") {
		$(this).children().prop("disabled", false);
	} else {
		$("#resetButton").prop("disabled", $(classString).val() == "none");
		$("#debugButton").prop("disabled", false);
		$("#saveButton").prop("disabled", $(classString).val() == "none");
		$("#reloadButton").prop("disabled", window.location.href.split("#")[1] == undefined);
		$("#shareButton").prop("disabled", false);
	}
}
function handleSkillTreeZoom(event) {
	let isTouching = false;
	switch (event.type) {
		case "touchstart":
			if (event.originalEvent.touches.length == 2) {
				initialTouchDistance = Math.hypot(event.originalEvent.touches[0].pageX - event.originalEvent.touches[1].pageX, event.originalEvent.touches[0].pageY - event.originalEvent.touches[1].pageY);
				isTouching = true;
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
			newScale = Math.hypot(event.originalEvent.touches[0].pageX - event.originalEvent.touches[1].pageX, event.originalEvent.touches[0].pageY - event.originalEvent.touches[1].pageY) / initialTouchDistance;
		}
		if (newScale >= 0.5 && newScale <= 2) {
			pixiJS.stage.pivot.x = Math.round(event.pageX / pixiJS.stage.scale.x + pixiJS.stage.pivot.x - event.pageX / newScale);
			pixiJS.stage.pivot.y = Math.round(event.pageY / pixiJS.stage.scale.y + pixiJS.stage.pivot.y - event.pageY / newScale);
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
	let newClass = $(classString);
	$("#header h2").removeClass("hidden");
	if (newClass.val() == "none") {
		$("#className").text("None");
		$("#header h2").addClass("hidden");
		$("#resetButton").prop("disabled", true);
	} else {
		$("#className").text(newClass.text());
		$("#resetButton").prop("disabled", false);
	}
	rebuildCanvas();
}
function handleResetButton(event) {
	rebuildCanvas();
}
function handleDebugButton(event) {
	debugMode = !debugMode;
	if (debugMode) {
		$("#debugButton").text("Disable Debugging");
	} else {
		$("#debugButton").text("Enable Debugging");
	}
}
function handleSaveButton(event) {
	let nodeData = {
		className: $(classString).val(),
	};
	pixiNodes.forEach(curNode => {
		if (curNode.groupName != undefined) {
			const allocatedPoints = curNode.nodeData.get("allocatedPoints");
			if (allocatedPoints > 0) {
				nodeData[curNode.nodeName] = curNode.nodeData.get("allocatedPoints");
			}
		}
	});
	const jsonData = JSON.stringify(nodeData);
	const compressedData = LZString.compressToEncodedURIComponent(jsonData);
	const newURL = window.location.href.split("#")[0] + "#" + compressedData;
	window.location.replace(newURL);
}
function handleReloadButton() {
	const urlData = window.location.href.split("#");
	if (urlData[1] != undefined) {
		const jsonData = LZString.decompressFromEncodedURIComponent(urlData[1]);
		const nodeData = JSON.parse(jsonData);

		$.when($("#classSelector").val(nodeData.className).change()).then(finishLoading);

		function finishLoading() {
			delete nodeData.className;

			for (const [savedName, savedPoints] of Object.entries(nodeData)) {
				const curNode = pixiNodes.find(pixiNode => pixiNode.nodeName == savedName);

				const allocatedPoints = curNode.nodeData.get("allocatedPoints");
				const maxPoints = curNode.nodeData.get("maxPoints");
				const newPoints = Math.max(Math.min(savedPoints, maxPoints), 0);

				pixiAllocatedPoints.set(curNode.groupName, pixiAllocatedPoints.get(curNode.groupName) - allocatedPoints + newPoints);
				updateNodePoints(curNode, newPoints);
			}
			updateCharacterLevel();
		}
	}
}
function handleShareButton() {
	navigator.clipboard.writeText(window.location.href);
}

// pixiJS magic
function onContextMenu(event) {
	event.preventDefault();
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
	if (pixiDragging == pixiBackground) {
		for (let i = 0; i < pixiJS.stage.children.length; i++) {
			pixiJS.stage.children[i].position.x = pixiJS.stage.children[i].position.startX - pixiDragging.startX + event.global.x / pixiJS.stage.scale.x;
			pixiJS.stage.children[i].position.y = pixiJS.stage.children[i].position.startY - pixiDragging.startY + event.global.y / pixiJS.stage.scale.y;
		}
	} else if (pixiDragging) {
		return onDragMove(event, true);
	}
}
function onMouseOver(event) {
	drawTooltip(this);
}
function onMouseOut(event) {
	eraseTooltip();
}
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
function getRemainingPoints(paragonPoints = false) {
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
	const remainingPoints = getRemainingPoints(false);
	let charLevel = 1;
	let renownLevel = 0;
	if (remainingPoints >= 15) {
		charLevel = 64 - remainingPoints;
	} else {
		charLevel = 50;
		renownLevel = 15 - remainingPoints;
	}
	$("#charLevel").text(charLevel);
	$("#renownLevel").text(renownLevel > 0 ? " (Renown " + renownLevel + ")" : "");
}
function updateNodePoints(curNode, newPoints) {
	curNode.nodeData.set("allocatedPoints", newPoints);
	curNode.children[2].text = newPoints + "/" + curNode.nodeData.get("maxPoints");

	if (newPoints > 0) {
		curNode.children[5].updateLineStyle(lineStyleThickSquare);
		pixiConnectors.find(connector => connector.nodeName == curNode.nodeName).updateLineStyle(lineStyleThickButt);
	} else {
		curNode.children[5].updateLineStyle(lineStyleThinSquare);
		pixiConnectors.find(connector => connector.nodeName == curNode.nodeName).updateLineStyle(lineStyleThinButt);
	}

	const className = $(classString).val();
	const classData = classMap.get(className);
	if (classData != undefined) {
		const trunkData = classData.get("Trunk Data");
		pixiNodes.filter(pixiNode => trunkData.has(pixiNode.nodeName)).forEach(groupNode => {
			const requiredPoints = groupNode.nodeData.get("requiredPoints");
			const validConnection = requiredPoints <= getAllocatedSkillPoints(groupNode.nodeName);
			const trunkConnector = pixiConnectors.find(connector => connector.nodeName == groupNode.nodeName);
			if (validConnection) {
				groupNode.children[2].updateLineStyle(lineStyleThickSquare);
				if (trunkConnector != undefined) trunkConnector.updateLineStyle(lineStyleThickButt);
			} else {
				groupNode.children[2].updateLineStyle(lineStyleThinSquare);
				if (trunkConnector != undefined) trunkConnector.updateLineStyle(lineStyleThinButt);
			}
		});
	}
}
function handlePlusButton(curNode) {
	if (getRemainingPoints(false) <= 0) return;

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
function validateAllDependentNodes() {
	for (const childNode of pixiNodes) {
		const nodeConnections = childNode.nodeData.get("connections");
		if (nodeConnections != undefined) {
			let validConnection = false;
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
			if (!validConnection) {
				const allocatedPoints = childNode.nodeData.get("allocatedPoints");
				const maxPoints = childNode.nodeData.get("maxPoints");

				pixiAllocatedPoints.set(childNode.groupName, pixiAllocatedPoints.get(childNode.groupName) - allocatedPoints);
				updateNodePoints(childNode, 0);
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
		fill: 0xFFFFFF,
		fontFamily: "Homenaje, Impact, sans-serif",
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
			fill: 0xFFFFFF,
			fontFamily: "Homenaje, Impact, sans-serif",
			fontSize: 24 * 4,
			fontVariant: "small-caps",
			width: nodeWidth * 4,
		});
		nodeText2.scaleMode = PIXI.SCALE_MODES.LINEAR;
		nodeText2.scale.set(0.25);
		nodeText2.anchor.set(0.5);
		nodeText2.x = (nodeWidth - nodeText2.width) / 2 - 3;
		nodeText2.y = (nodeText2.height - nodeHeight) / 2;

		const nodeText3 = new PIXI.Text("+", {
			align: "right",
			cacheAsBitmap: true,
			fill: 0xFFFFFF,
			fontFamily: "Homenaje, Impact, sans-serif",
			fontSize: 48 * 4,
			fontVariant: "small-caps",
			width: nodeWidth * 4,
		});
		nodeText3.scaleMode =  PIXI.SCALE_MODES.LINEAR;
		nodeText3.scale.set(0.25);
		nodeText3.anchor.set(0.5);
		nodeText3.x = (nodeWidth - nodeText3.width) / 2 + 2;
		nodeText3.y = (nodeHeight - nodeText3.height) / 2 + 6;

		nodeText4 = new PIXI.Text("–", {
			align: "left",
			cacheAsBitmap: true,
			fill: 0xFFFFFF,
			fontFamily: "Homenaje, Impact, sans-serif",
			fontSize: 48 * 4,
			fontVariant: "small-caps",
			width: nodeWidth * 4,
		});
		nodeText4.scaleMode =  PIXI.SCALE_MODES.LINEAR;
		nodeText4.scale.set(0.25);
		nodeText4.anchor.set(0.5);
		nodeText4.x = (nodeText4.width - nodeWidth) / 2 + 2;
		nodeText4.y = (nodeHeight - nodeText4.height) / 2 + 2;

		plusContainer = new PIXI.Container();
		plusContainer.interactive = true;
		plusContainer.addChild(nodeText3);

		minusContainer = new PIXI.Container();
		minusContainer.interactive = true;
		minusContainer.addChild(nodeText4);
	}

	const nodeBackground = PIXI.Sprite.from("images/node.png");
	nodeBackground.anchor.set(0.5);
	nodeBackground.width = nodeWidth;
	nodeBackground.height = nodeHeight;

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
	if (groupName != undefined) {
		nodeBorder.moveTo(nodeWidth - nodeText2.width - 6, 0);
		nodeBorder.lineTo(nodeWidth - nodeText2.width - 6, nodeText2.height + 2);
		nodeBorder.moveTo(nodeWidth - nodeText2.width - 6, nodeText2.height + 2);
		nodeBorder.lineTo(nodeWidth, nodeText2.height + 2);
	}

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
		for (const [groupName, groupData] of classData) {
			const branchData = trunkData.get(groupName);
			if (branchData != undefined) {
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
	}
}
function drawTooltip(curNode) {
	// skip tooltip redraw if we already have the correct one displayed
	if (pixiTooltip && pixiTooltip.nodeIndex == curNode.nodeIndex) return;

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
	}

	if (debugMode) {
		const [debugX, debugY] = getNodePosition(curNode);
		nodeDesc += "\nx: " + debugX + "\ny: " + debugY;
	}

	const tooltipText1 = new PIXI.Text(curNode.nodeName, {
		align: "left",
		breakWords: true,
		cacheAsBitmap: true,
		fill: 0xFFFFFF,
		fontFamily: "Homenaje, Impact, sans-serif",
		fontSize: 36 * 4,
		fontVariant: "small-caps",
		fontWeight: "bold",
		width: tooltipWidth * 4,
		wordWrap: true,
		wordWrapWidth: 480 * 4,
	});
	tooltipText1.scaleMode = PIXI.SCALE_MODES.LINEAR;
	tooltipText1.scale.set(0.25);
	tooltipText1.anchor.set(0);

	const tooltipText2 = new PIXI.Text("\n" + nodeDesc, {
		align: "center",
		breakWords: true,
		cacheAsBitmap: true,
		fill: 0xFFFFFF,
		fontFamily: "Homenaje, Impact, sans-serif",
		fontSize: 36 * 4,
		width: tooltipWidth * 4,
		wordWrap: true,
		wordWrapWidth: 480 * 4,
	});
	tooltipText2.scaleMode = PIXI.SCALE_MODES.LINEAR;
	tooltipText2.scale.set(0.25);
	tooltipText2.anchor.set(0);
	tooltipText2.position.y = 18;

	const tooltipBackground = PIXI.Sprite.from("images/tooltip.png");
	tooltipBackground.width = Math.max(tooltipText1.width, tooltipText2.width) + 20;
	tooltipBackground.height = tooltipText1.height + tooltipText2.height + 3;
	tooltipBackground.anchor.set(10 / tooltipBackground.width, 10 / tooltipBackground.height);

	const tooltipBorder = new PIXI.Graphics();
	tooltipBorder.pivot.x = 10;
	tooltipBorder.pivot.y = 10;
	tooltipBorder.lineStyle(lineStyleThickSquare);
	tooltipBorder.moveTo(0, 0);
	tooltipBorder.lineTo(tooltipBackground.width, 0);
	tooltipBorder.moveTo(tooltipBackground.width, 0);
	tooltipBorder.lineTo(tooltipBackground.width, tooltipBackground.height);
	tooltipBorder.moveTo(tooltipBackground.width, tooltipBackground.height);
	tooltipBorder.lineTo(0, tooltipBackground.height);
	tooltipBorder.moveTo(0, tooltipBackground.height);
	tooltipBorder.lineTo(0, 0);

	const tooltipSeperator = new PIXI.Graphics();
	tooltipSeperator.lineStyle(lineStyleThinSquare);
	tooltipSeperator.moveTo(0, tooltipText1.height + 12);
	tooltipSeperator.lineTo(tooltipBackground.width - 20, tooltipText1.height + 12);

	const tooltip = new PIXI.Container();
	tooltip.zIndex = 2;
	const xScale = pixiJS.stage.scale.x;
	const yScale = pixiJS.stage.scale.y;
	if (xScale < tooltipScalingFloor) {
		tooltip.scale.x = tooltipScalingFloor / xScale;
		tooltip.scale.y = tooltipScalingFloor / yScale;
	} else if (xScale > tooltipScalingCeiling) {
		tooltip.scale.x = tooltipScalingCeiling / xScale;
		tooltip.scale.y = tooltipScalingCeiling / yScale;
	} else {
		tooltip.scale.x = 1;
		tooltip.scale.y = 1;
	}
	tooltip.position.x = curNode.x + nodeWidth / 2 + 20 / (1 / tooltip.scale.x);
	tooltip.position.y = curNode.y - nodeHeight / 2 + 10 / (1 / tooltip.scale.y);
	tooltip.addChild(tooltipBackground, tooltipText1, tooltipText2, tooltipBorder, tooltipSeperator);

	pixiTooltip = pixiJS.stage.addChild(tooltip);
	pixiTooltip.nodeIndex = curNode.nodeIndex;
}
function eraseTooltip() {
	if (pixiTooltip) {
		pixiTooltip.destroy(true);
		pixiTooltip = null;
	}
}
function drawConnector(startNode, endNode) {
	const connector = new PIXI.Graphics();
	connector.zIndex = -1;

	if (startNode.groupName == undefined) {
		const requiredPoints = startNode.nodeData.get("requiredPoints");
		const validConnection = requiredPoints <= getAllocatedSkillPoints(startNode.nodeName);
		if (validConnection) {
			connector.lineStyle(lineStyleThickButt);
		} else {
			connector.lineStyle(lineStyleThinButt);
		}
	} else {
		if (startNode.nodeData.get("allocatedPoints") > 0) {
			connector.lineStyle(lineStyleThickButt);
		} else {
			connector.lineStyle(lineStyleThinButt);
		}
	}

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

	connector.nodeName = startNode.nodeName;

	pixiConnectors.push(pixiJS.stage.addChild(connector));
}
function drawAllConnectors() {
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

	pixiJS.renderer.resize(minCanvasWidth, minCanvasHeight);

	pixiJS.stage.pivot.x = 0;
	pixiJS.stage.pivot.y = 0;
	pixiJS.stage.scale.x = 1;
	pixiJS.stage.scale.y = 1;

	drawBackground();
	drawAllNodes();
	drawAllConnectors();

	resizeCanvas();

	$("#charLevel").text("1");
	$("#renownLevel").text("");
}
function resizeCanvas() {
	const parent = pixiJS.view.parentNode;

	const oldWidth = pixiJS.renderer.width;
	const oldHeight = pixiJS.renderer.height;

	pixiJS.renderer.resize(minCanvasWidth, minCanvasHeight);

	const newWidth = Math.floor(Math.max(Math.min(document.body.clientWidth, maxCanvasWidth), minCanvasWidth));
	const newHeight = Math.floor(Math.max(Math.min($("#skillTree").height(), maxCanvasHeight), minCanvasHeight));

	pixiJS.renderer.resize(newWidth, newHeight);

	for (let i = 0; i < pixiJS.stage.children.length; i++) {
		pixiJS.stage.children[i].position.x = pixiJS.stage.children[i].position.x - oldWidth / 2 + newWidth / 2;
		pixiJS.stage.children[i].position.y = pixiJS.stage.children[i].position.y - oldHeight / 2 + newHeight / 2;
	}
}

// finalize the page once DOM has loaded
$(document).ready(function() {
	$(document).on("keydown", handleDocumentInput);
	$("#resetButton").on("click", handleResetButton);
	$("#debugButton").on("click", handleDebugButton);
	$("#saveButton").on("click", handleSaveButton);
	$("#reloadButton").on("click", handleReloadButton);
	$("#shareButton").on("click", handleShareButton);
	$("#classSelector, #extraButtons").on("keydown mouseenter mouseleave", handleButtonState);
	$("#classSelector").on("change", handleClassSelection);
	$("#skillTree").on("wheel touchstart touchend touchmove", handleSkillTreeZoom);
	$("#skillTree").on("contextmenu", onContextMenu);
	$("#skillTree").append(pixiJS.view);
	$(window).on("resize", resizeCanvas);
	handleReloadButton();
});