import { barbarianData } from "./data/barbarian.js";
import { druidData } from "./data/druid.js";
import { necromancerData } from "./data/necromancer.js";
import { rogueData } from "./data/rogue.js";
import { sorcererData } from "./data/sorcerer.js";
import { paragonData } from "./data/paragon.js";
import { codexData } from "./data/codex-of-power.js";

// splitMulti allows String.prototype.split to process multiple delimiters at once
function splitMulti(str, tokens) {
	let tempChar = tokens[0];
	for (let i = 1, n = tokens.length; i < n; i++) {
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
// lines will automatically rotate around c1, c2, c3, and c4 center points if the optional angle parameter is provided
function lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4, angle = 0, c1 = [], c2 = [], c3 = [], c4 = []) {
	if (angle % 360 != 0) {
		if (c1.length > 0) [x1, y1] = rotateAngle(c1[0], c1[1], x1, y1, angle);
		if (c2.length > 0) [x2, y2] = rotateAngle(c2[0], c2[1], x2, y2, angle);
		if (c3.length > 0) [x3, y3] = rotateAngle(c3[0], c3[1], x3, y3, angle);
		if (c4.length > 0) [x4, y4] = rotateAngle(c4[0], c4[1], x4, y4, angle);
	}

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

// rotateAngle returns [x, y] rotated around [cx, cy] by angle (in degrees)
function rotateAngle(cx, cy, x, y, angle) {
	const radians = (Math.PI / 180) * angle,
		cos = Math.cos(radians),
		sin = Math.sin(radians),
		nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
		ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
	return [ nx, ny ];
}

// populateMap fills a map with the values of an object, using nested maps
function populateMap(map, object, keys) {
	if (!keys.length) return map;

	let key = keys.shift();
	let value = object[key];

	if (typeof value === "object" && value !== null) value = populateMap(new Map(), value, Object.keys(value));

	map.set(key, value);

	return populateMap(map, object, keys);
}

// convertBase returns an input value converted from one base (radix) to another, up to base 62
function convertBase(value, from_base, to_base) {
	const range = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	const from_range = range.slice(0, from_base);
	const to_range = range.slice(0, to_base);

	var dec_value = value.split("").reverse().reduce((carry, digit, index) => {
		if (from_range.indexOf(digit) == -1) throw new Error("Invalid digit `" + digit + "` for base `" + from_base + "`.");
		return carry += from_range.indexOf(digit) * Math.pow(from_base, index);
	}, 0);

	var new_value = "";
	while (dec_value > 0) {
		new_value = to_range[dec_value % to_base] + new_value;
		dec_value = (dec_value - (dec_value % to_base)) / to_base;
	}
	return new_value || "0";
}

// rgba2hex converts a `rgba(255, 255, 255, 1)` string into an equivalent hex string: `0xffffffff`
function rgba2hex(rgba) {
	return `0x${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i == 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, "0").replace("NaN", "")).join("")}`;
}

// construct a nested map of all class data
const classObj = { "barbarian": barbarianData, "druid": druidData, "necromancer": necromancerData, "rogue": rogueData, "sorcerer": sorcererData };
var classMap = new Map();
populateMap(classMap, classObj, Object.keys(classObj));

// canvas size constants
const minCanvasWidth = 0;
const maxCanvasWidth = 65535;
const minCanvasHeight = 0;
const maxCanvasHeight = 65535;
const nodeWidth = 100;
const nodeHeight = 100;
const tooltipWidth = 540;
const tooltipHeight = 200;

// evil magic variables that probably need to be replaced later to support multiple languages
const COLOR_HOVER_HTML = "Click to customize connector and node colors.<br>Custom color choices will persist across sessions.";
const COLOR_LINE_TEXT = "Choose your preferred active line color.";
const COLOR_NODE_TEXT = "Choose your preferred active node color.";
const DATABASE_LINK_HTML = `<a href="./database/" target="_blank">[Click here if you're looking for datamined information.]</a>`;
const ENABLE_CLAMP_TEXT = "Enable Clamping";
const DISABLE_CLAMP_TEXT = "Disable Clamping";
const SMALL_CLAMP_TEXT = "Clamp";
const MATCH_FOUND_TEXT = " match found for query: ";
const MATCHES_FOUND_TEXT = " matches found for query: ";
const REQUIRED_POINTS_DESC = "Spend {requiredPoints} additional skill points to unlock.";
const ENCHANTMENT_EFFECT_DESC = "— Enchantment Effect —";
const PHYSICAL = "Physical";
const FIRE = "Fire";
const LIGHTNING = "Lightning";
const COLD = "Cold";
const POISON = "Poison";
const SHADOW = "Shadow";
const UNKNOWN = "Unknown";
const ANY_DAMAGE_TYPE = [PHYSICAL, FIRE, LIGHTNING, COLD, POISON, SHADOW];
const COOLDOWN = "Cooldown";
const ULTIMATE = "Ultimate";
const CAPSTONE = "Capstone";
const PARAGON_BOARD = "Paragon Board";
const CODEX_OF_POWER = "Codex of Power";
const CODEX_OF_POWER_DESC = "This aspect type can be applied to: ";
const SPIRIT_BOONS = "Spirit Boons";
const SPIRIT_BOON_DESC = "Specializing in this spirit type will allow you to allocate two boons instead of only one.";
const BOOK_OF_THE_DEAD = "Book of the Dead";

const COLOR_OVERRIDE = {
	"Magic": 0x0077FF,
	"Rare": 0xFFFF00,
	"Legendary": 0xFF7700,
	"Start": 0xFF0000,
	"Gate": 0xFF0000,
	"Socket": 0xFF0000,
	"Allocated": 0xFF0000
};

const pixiScalingFloor = 0.15;
const pixiScalingCeiling = 1;
const tooltipScalingFloor = 1;
const tooltipScalingCeiling = 1;

const fontFamily = $("body").css("fontFamily");
const fontFamilyOverride = fontFamily.includes("Homenaje") ? fontFamily : "Homenaje, " + fontFamily;
const textColor = Number(rgba2hex($("body").css("color")));
const backgroundColorHEX = rgba2hex($("#header").css("background-color"));
const backgroundColor = backgroundColorHEX.length == 8 ? Number(backgroundColorHEX) : backgroundColorHEX >>> 8;
const backgroundOpacity = backgroundColorHEX.length == 8 ? 1 : (backgroundColorHEX & 0xFF) / 255;
const borderColorHEX = rgba2hex($("#header").css("border-color"));
const borderColor = borderColorHEX.length == 8 ? Number(borderColorHEX) : borderColorHEX >>> 8;
const borderOpacity = borderColorHEX.length == 8 ? 1 : (borderColorHEX & 0xFF) / 255;
const activeColorDefault = "ff0000";
var activeConnectorColor = Number("0x" + (readCookie("activeConnectorColor").length > 0 ? readCookie("activeConnectorColor") : activeColorDefault));
var activeNodeColor = Number("0x" + (readCookie("activeNodeColor").length > 0 ? readCookie("activeNodeColor") : activeColorDefault));

const lineStyleThinSquare = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: borderColor, native: true, width: 1 };
const lineStyleThinButt = { alpha: borderOpacity, cap: PIXI.LINE_CAP.BUTT, color: borderColor, native: true, width: 1 };
const lineStyleThickSquareTooltip = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: borderColor, native: false, width: 8 };
var lineStyleThickSquare = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: activeNodeColor, native: false, width: 8 };
var lineStyleThickButt = { alpha: 1, cap: PIXI.LINE_CAP.BUTT, color: activeConnectorColor, native: false, width: 8 };

var pixiAllocatedPoints = new Map();
var pixiAllocatedParagonPoints = 0;

var pixiNodes = [];

var pixiConnectors = [];
var pixiConnectorPairs = [];

var pixiEventQueue = [];

var pixiBackground = PIXI.Sprite.from(PIXI.Texture.EMPTY);
var pixiTooltip = new PIXI.Container();
var pixiDragging = null;

var debugMode = false;
var clampMode = readCookie("clampMode") == "true" ? true : false;

var touchTimer = null;
var isTouching = false;
var initialTouchDistance = 0;
var initialScale = 1;
var stageScale = 1;
var curRenderScale = 1;
var newRenderScale = 1;

var frameTimer = Date.now();

var oldWidth = 0;
var oldHeight = 0;

PIXI.settings.RESOLUTION = devicePixelRatio;
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

// construct pixiJS custom application
const pixiJS = (() => {
	try {
		return {
			"renderer": new PIXI.Renderer({
				antialias: false,
				autoDensity: true,
				backgroundAlpha: 0,
				height: minCanvasHeight,
				width: minCanvasWidth
			}),
			"stage": new PIXI.Container(),
			"ticker": new PIXI.Ticker()
		}
	} catch (e) {
		$("#classSelectBox").text(e).removeClass("disabled");
		throw new Error(e);
	}
})();
pixiJS.ticker.add(() => pixiJS.renderer.render(pixiJS.stage), PIXI.UPDATE_PRIORITY.LOW);
pixiJS.ticker.start();

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
function setNodeStyleThick(curNode, invertColor = false) {
	let _lineStyleThickSquare = { ...lineStyleThickSquare };
	if (invertColor) {
		if ([0xFF0000, 0xFFFFFF].includes(_lineStyleThickSquare.color)) {
			_lineStyleThickSquare.color = 0x00FF00;
		} else {
			_lineStyleThickSquare.color = _lineStyleThickSquare.color ^ 0xFFFFFF;
		}
	} else if (curNode.groupName == PARAGON_BOARD) {
		_lineStyleThickSquare.color = COLOR_OVERRIDE["Allocated"];
	} else if (curNode.nodeData.get("colorOverride") != undefined) {
		_lineStyleThickSquare.color = curNode.nodeData.get("colorOverride");
	}
	curNode.children[1].style.fontWeight = "bold";
	if (curNode.children.length > 3) {
		curNode.children[2].style.fontWeight = "bold";
		curNode.children[3].children[0].style.fontWeight = "bold";
		curNode.children[4].children[0].style.fontWeight = "bold";
		curNode.children[5].updateLineStyle(_lineStyleThickSquare);
	} else {
		curNode.children[2].updateLineStyle(_lineStyleThickSquare);
	}
}
function setNodeStyleThin(curNode) {
	let _lineStyleThinSquare = { ...lineStyleThinSquare };
	if (curNode.nodeData.get("colorOverride") != undefined) {
		_lineStyleThinSquare.color = curNode.nodeData.get("colorOverride");
	}
	curNode.children[1].style.fontWeight = "normal";
	if (curNode.children.length > 3) {
		curNode.children[2].style.fontWeight = "normal";
		curNode.children[3].children[0].style.fontWeight = "normal";
		curNode.children[4].children[0].style.fontWeight = "normal";
		curNode.children[5].lineStyle(_lineStyleThinSquare);
		curNode.children[5].updateLineStyle(_lineStyleThinSquare);
	} else {
		curNode.children[2].lineStyle(_lineStyleThinSquare);
		curNode.children[2].updateLineStyle(_lineStyleThinSquare);
	}
}

// event handlers
const classString = "#classSelector option:selected";
const groupString = "#groupSelector option:selected";
function handleConnectorColorInput(event) {
	writeCookie("activeConnectorColor", $("#colorConnectorInput").val().slice(1));

	activeConnectorColor = Number("0x" + (readCookie("activeConnectorColor").length > 0 ? readCookie("activeConnectorColor") : activeColorDefault));
	lineStyleThickButt = { alpha: 1, cap: PIXI.LINE_CAP.BUTT, color: activeConnectorColor, native: false, width: 8 };

	pixiConnectors.forEach(connector => updateConnectorLineStyle(connector, connector.startNode, connector.endNode));

	handleCanvasEvent({ type: "mousedown", simulatedEvent: 1 }); // fake an early touch event to make mobile color selection a bit more responsive
}
function handleNodeColorInput(event) {
	writeCookie("activeNodeColor", $("#colorNodeInput").val().slice(1));

	activeNodeColor = Number("0x" + (readCookie("activeNodeColor").length > 0 ? readCookie("activeNodeColor") : activeColorDefault));
	lineStyleThickSquare = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: activeNodeColor, native: false, width: 8 };

	pixiNodes.forEach(curNode => {
		if (curNode.groupName != undefined) {
			const allocatedPoints = curNode.nodeData.get("allocatedPoints");
			if (allocatedPoints > 0) {
				let _lineStyleThickSquare = { ...lineStyleThickSquare };
				if (curNode.groupName == PARAGON_BOARD) {
					_lineStyleThickSquare.color = COLOR_OVERRIDE["Allocated"];
				} else if (curNode.nodeData.get("colorOverride") != undefined) {
					_lineStyleThickSquare.color = curNode.nodeData.get("colorOverride");
				}

				curNode.children[curNode.children.length > 3 ? 5 : 2].updateLineStyle(_lineStyleThickSquare);
			}
		}
	});

	const className = $(classString).val();
	const classData = classMap.get(className);
	if (classData != undefined) {
		const trunkData = classData.get("Trunk Data");
		pixiNodes.filter(pixiNode => trunkData.has(pixiNode.nodeName)).forEach(groupNode => {
			const requiredPoints = groupNode.nodeData.get("requiredPoints");
			const validConnection = requiredPoints <= getAllocatedSkillPoints(groupNode.nodeName);
			if (validConnection) {
				let _lineStyleThickSquare = { ...lineStyleThickSquare };
				if (groupNode.nodeData.get("colorOverride") != undefined) _lineStyleThickSquare.color = groupNode.nodeData.get("colorOverride");

				groupNode.children[2].updateLineStyle(_lineStyleThickSquare);
			}
		});
	}

	handleCanvasEvent({ type: "mousedown", simulatedEvent: 2 }); // fake an early touch event to make mobile color selection a bit more responsive
}
function handleColorButton(event) {
	const extraInfoHTML = $("#extraInfo").html();
	if (event.type == "mouseenter" && extraInfoHTML.length == 0) {
		$("#extraInfo").html(COLOR_HOVER_HTML).removeClass("hidden");
	} else if (event.type == "mouseleave" && extraInfoHTML == COLOR_HOVER_HTML) {
		$("#extraInfo").empty().addClass("hidden");
	} else if (event.type == "click" && extraInfoHTML != COLOR_LINE_TEXT) {
		setTimeout(() => $("#colorConnectorInput").click(), 800);
		$("#extraInfo").text(COLOR_LINE_TEXT).removeClass("hidden");
	}
}
const localVersion = "0.8.0.39517-2";
var remoteVersion = "";
var versionInterval = null;
function handleVersionLabel(event) {
	if (event.type == "click" && versionCompare(localVersion, remoteVersion) == -1) window.location.reload();
}
function handleVersionInterval() {
	$.get(`VERSION?t=${Date.now()}`, null, versionData => {
		if (versionCompare(localVersion, versionData) == -1) {
			$("#versionLabel").text(" [Update!]").css("cursor", "pointer");
			clearInterval(versionInterval);
		} else {
			$("#versionLabel").text(` [${localVersion.split("-")[0]}]`).css("cursor", "auto");
		}
		remoteVersion = versionData;
	});
}
function versionCompare(a, b) {
	if (a.startsWith(b + "-")) return -1;
	if (b.startsWith(a + "-")) return  1;
	return a.localeCompare(b, undefined, { numeric: true, sensitivity: "case", caseFirst: "upper" });
}
function handleIntervalEvent() {
	newRenderScale = Math.min(pixiJS.stage.scale.x, 1);
	if (newRenderScale != curRenderScale) {
		// skip `redrawAllNodes` on high pixel density devices
		if (PIXI.settings.RESOLUTION < 4) {
			redrawAllNodes(false);
			if (pixiTooltip.children.length > 0) drawTooltip(pixiNodes[pixiTooltip.nodeIndex]);
		}
		curRenderScale = newRenderScale;
	}

	while (pixiEventQueue.length > 0) (pixiEventQueue.shift())();

	if (frameTimer != null && Date.now() - frameTimer > 800) {
		frameTimer = null;
		[pixiJS.ticker.minFPS, pixiJS.ticker.maxFPS] = [1, 1];
		// skip `redrawAllNodes` on high pixel density devices
		if (PIXI.settings.RESOLUTION < 4) redrawAllNodes(true);
	}
}
function handleCanvasEvent(event) {
	if (document.activeElement != $("#searchInput")[0]) window.getSelection().removeAllRanges();
	switch (event.type) {
		case "mousedown":
		case "touchstart":
			$("#searchInput").blur();
			const extraInfoHTML = $("#extraInfo").html();
			if (extraInfoHTML == COLOR_LINE_TEXT) {
				setTimeout(() => $("#colorNodeInput").click(), 800);
				$("#extraInfo").text(COLOR_NODE_TEXT).removeClass("hidden");
				resizeCanvas();
			} else if (extraInfoHTML == COLOR_NODE_TEXT && [undefined, 2].includes(event.simulatedEvent)) {
				$("#extraInfo").empty().addClass("hidden");
				resizeCanvas();
			}
			if (event.type == "mousedown") return;

			touchTimer = Date.now();
			if (event.originalEvent.touches.length == 2) {
				isTouching = true;
				initialScale = stageScale;
				initialTouchDistance = Math.hypot(
					event.originalEvent.touches[0].clientX - event.originalEvent.touches[1].clientX,
					event.originalEvent.touches[0].clientY - event.originalEvent.touches[1].clientY);
			}
			break;
		case "touchend":
			touchTimer = null;
			isTouching = false;
			break;
		case "touchmove":
			if (touchTimer != null && Date.now() - touchTimer > 1500) {
				touchTimer = null;
				eraseTooltip();
			}
			break;
	}
	if (event.type == "wheel" || (event.type == "touchmove" && isTouching)) {
		if (event.type == "wheel") {
			const stepSize = pixiJS.stage.scale.x >= 1.5 ? 0.1 : 0.05;
			if (event.originalEvent.deltaY < 0) {
				stageScale = Math.round((pixiJS.stage.scale.x + stepSize) * 100) / 100;
			} else if (event.originalEvent.deltaY > 0) {
				stageScale = Math.round((pixiJS.stage.scale.x - stepSize) * 100) / 100;
			}
		} else {
			stageScale = Math.hypot(
				event.originalEvent.touches[0].clientX - event.originalEvent.touches[1].clientX,
				event.originalEvent.touches[0].clientY - event.originalEvent.touches[1].clientY)
				* initialScale / initialTouchDistance;
		}
		if (stageScale >= pixiScalingFloor && stageScale <= pixiScalingCeiling) {
			if (pixiTooltip.children.length > 0) drawTooltip(pixiNodes[pixiTooltip.nodeIndex]);
			if (event.type == "wheel") {
				pixiJS.stage.pivot.x = Math.round(event.clientX / pixiJS.stage.scale.x + pixiJS.stage.pivot.x - event.clientX / stageScale);
				pixiJS.stage.pivot.y = Math.round(event.clientY / pixiJS.stage.scale.y + pixiJS.stage.pivot.y - event.clientY / stageScale);
			} else {
				const averageX = (event.originalEvent.touches[0].clientX + event.originalEvent.touches[1].clientX) * 0.5;
				const averageY = (event.originalEvent.touches[0].clientY + event.originalEvent.touches[1].clientY) * 0.5;
				pixiJS.stage.pivot.x = Math.round(averageX / pixiJS.stage.scale.x + pixiJS.stage.pivot.x - averageX / stageScale);
				pixiJS.stage.pivot.y = Math.round(averageY / pixiJS.stage.scale.y + pixiJS.stage.pivot.y - averageY / stageScale);
			}
			pixiJS.stage.scale.set(stageScale);
		} else {
			stageScale = pixiJS.stage.scale.x;
		}
	}
	resetFrameTimer();
	event.preventDefault();
}
function handleClassSelection(event) {
	const classText = $(classString).text();
	if (classText != $("#className").text()) {
		$("#className").text(classText);
		if (classText == "None") {
			$("#header h2, #versionLabel, #colorButton, #extraButtons1, #extraButtons2, #groupSelector, #searchInput").addClass("disabled");
			$("#classSelectBox").removeClass("disabled");
			$("#extraInfo").html(DATABASE_LINK_HTML).css("width", "auto").removeClass("hidden");
			$("#groupSelector").empty();
			$("#searchInput").removeAttr("style");
		} else {
			$("#header h2, #versionLabel, #colorButton, #extraButtons1, #extraButtons2, #groupSelector, #searchInput").removeClass("disabled");
			$("#classSelectBox").addClass("disabled");
			$("#extraInfo").empty().addClass("hidden");
		}
		rebuildCanvas();
	}
}
function handleGroupSelection(event) {
	const newGroupName = $(groupString).text();
	const newGroupNode = pixiNodes.find(pixiNode => pixiNode.nodeName == newGroupName);
	if (newGroupNode != undefined) pixiJS.stage.pivot.set(newGroupNode.x - oldWidth / pixiJS.stage.scale.x * 0.5, newGroupNode.y - oldHeight / pixiJS.stage.scale.y * 0.5);
	resetFrameTimer();
}
var oldSearchIdx = -1;
var oldSearchText = "";
function handleSearchInput(event) {
	const newSearchText = $("#searchInput").val().toLowerCase();

	let nodeMatch = pixiNodes.filter(pixiNode => {
		if (newSearchText.length >= 3) {
			// search `nodeHeader` for `newSearchText`
			const nodeHeader = pixiNode.nodeName + (pixiNode.damageType != undefined && !ANY_DAMAGE_TYPE.some(damageType => pixiNode.nodeName.includes(damageType) || pixiNode.nodeDesc.includes(damageType)) ? ` (${pixiNode.damageType})` : "");
			if (nodeHeader.toLowerCase().includes(newSearchText)) {
				pixiNode.nodeData.set("searchQueryMatch", true);
				setNodeStyleThick(pixiNode, true);
				return true;
			} else {
				// failed to find `newSearchText` in any `nodeName`, trying `nodeDesc` next
				const nodeDesc = pixiNode.nodeDesc;
				if (nodeDesc != undefined && nodeDesc.length > 0 && nodeDesc.toLowerCase().includes(newSearchText)) {
					pixiNode.nodeData.set("searchQueryMatch", true);
					setNodeStyleThick(pixiNode, true);
					return true;
				}
			}
		}
		pixiNode.nodeData.set("searchQueryMatch", false);
		if (pixiNode.groupName == undefined) {
			const requiredPoints = pixiNode.nodeData.get("requiredPoints");
			const validConnection = requiredPoints <= getAllocatedSkillPoints(pixiNode.nodeName);
			validConnection ? setNodeStyleThick(pixiNode) : setNodeStyleThin(pixiNode);
		} else {
			const allocatedPoints = pixiNode.nodeData.get("allocatedPoints");
			allocatedPoints > 0 ? setNodeStyleThick(pixiNode) : setNodeStyleThin(pixiNode);
		}
		return false;
	});

	const nodeCount = nodeMatch.length;

	if (oldSearchText != newSearchText) oldSearchIdx = -1;

	if (newSearchText.length >= 3 && event.keyCode == 13) {
		if (oldSearchText != newSearchText || oldSearchIdx + 1 >= nodeCount) {
			nodeMatch = nodeMatch[0];
			oldSearchIdx = 0;
		} else {
			nodeMatch = nodeMatch[oldSearchIdx + 1];
			oldSearchIdx++;
		}
		if (nodeMatch != undefined) {
			pixiJS.stage.pivot.set(nodeMatch.x - oldWidth / pixiJS.stage.scale.x * 0.5, nodeMatch.y - oldHeight / pixiJS.stage.scale.y * 0.5);
			drawTooltip(nodeMatch);
		}
	}
	oldSearchText = newSearchText;
	resetFrameTimer();

	if (event.type == "blur" || nodeCount == 0) {
		const extraInfoHTML = $("#extraInfo").html();
		if ([MATCH_FOUND_TEXT, MATCHES_FOUND_TEXT].some(matchText => extraInfoHTML.includes(matchText))) $("#extraInfo").empty().addClass("hidden");
	} else {
		$("#extraInfo").html(nodeCount + (nodeCount == 1 ? MATCH_FOUND_TEXT : MATCHES_FOUND_TEXT) + "`" + newSearchText + "`.").removeClass("hidden");
	}
}
function handleClampButton() {
	clampMode = !clampMode;
	$("#clampButton").text(window.innerWidth < 450 ? SMALL_CLAMP_TEXT : clampMode ? DISABLE_CLAMP_TEXT : ENABLE_CLAMP_TEXT);
	writeCookie("clampMode", clampMode);

	repositionTooltip();
	resetFrameTimer();
	resizeSearchInput();
}
function handleSaveButton() {
	const className = $(classString).val();
	if (className == "none") {
		window.location.replace(window.location.href.split(/[#?&]/)[0]);
	} else {
		let nodeData = { className: className };
		pixiNodes.forEach(curNode => {
			if (curNode.groupName != undefined) {
				const allocatedPoints = curNode.nodeData.get("allocatedPoints");
				if (allocatedPoints > 0) {
					const nodeId = convertNodeId(curNode.nodeData.get("id"), curNode.groupName);
					nodeData[nodeId] = allocatedPoints;
				}
			}
		});
		if (debugMode) console.log(nodeData);
		const jsonData = JSON.stringify(nodeData).replace(/("|:1)/g, "");
		const compressedData = LZString.compressToEncodedURIComponent(jsonData);
		const newURL = window.location.href.split(/[#?&]/)[0] + "#" + compressedData;
		window.location.replace(newURL);
	}
}
function handleReloadButton() {
	const urlHash = window.location.hash.replace("#", "").split(/[?&]/)[0];
	if (urlHash.length > 0) {
		const jsonData = LZString.decompressFromEncodedURIComponent(urlHash);
		// valid JSON always requires quotes around key names; we strip those (and object "1-values") to increase compression
		const nodeData = jsonData.includes('"') ? JSON.parse(jsonData) :
			JSON.parse(jsonData
				.replace(/([{,])([^:,}]+)/g, '$1"$2"')			// restore key double quotes
				.replace(/","/g, '":1,"') 						// restore object "1-values"
				.replace(/("className":)([a-z]+)/g, '$1"$2"')	// restore class name double quotes
				.replace(/(,"[^:,]+")}/g, '$1:1}')				// restore final object value
			);

		$.when($("#classSelector").val(nodeData.className).change()).then(finishLoading);

		function finishLoading() {
			delete nodeData.className;
			function compareNodes(firstNode, secondNode) {
				return nodeData[firstNode.nodeData.get("id")] - nodeData[secondNode.nodeData.get("id")];
			}
			function processNode(curNode) {
				if (curNode.groupName != undefined) {
					let nodeId = curNode.nodeData.get("id");
					let savedPoints = 0;
					if (nodeId in nodeData) {
						savedPoints = nodeData[nodeId];
					} else {
						nodeId = convertNodeId(nodeId, curNode.groupName);
						if (nodeId in nodeData) savedPoints = nodeData[nodeId];
					}

					const allocatedPoints = curNode.nodeData.get("allocatedPoints");
					const maxPoints = curNode.nodeData.get("maxPoints");

					let newPoints = Math.max(Math.min(savedPoints, maxPoints), 0);
					if (curNode.groupName == PARAGON_BOARD) {
						newPoints = Math.min(newPoints, getUnusedPoints(true) + allocatedPoints);
					} else if (![CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(curNode.groupName)) {
						newPoints = Math.min(newPoints, getUnusedPoints(false) + allocatedPoints);
					}

					if (newPoints < allocatedPoints || (newPoints != allocatedPoints && canAllocate(curNode))) {
						if (curNode.groupName == PARAGON_BOARD) {
							pixiAllocatedParagonPoints = pixiAllocatedParagonPoints - allocatedPoints + newPoints;
						} else if (![CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(curNode.groupName)) {
							pixiAllocatedPoints.set(curNode.groupName, pixiAllocatedPoints.get(curNode.groupName) - allocatedPoints + newPoints);
						}
						updateNodePoints(curNode, newPoints);
					}
				}
			}
			// sort nodes based on their saved points, so nodes get deallocated first (to free up unused points) before allocating new nodes
			const sortedNodes = [...pixiNodes].filter(pixiNode => pixiNode.groupName != undefined).sort(compareNodes);
			for (let i = 0, n = sortedNodes.length; i < n; i++) processNode(sortedNodes[i]);
			updateCharacterLevel();

			resetFrameTimer();
		}
	} else {
		$("#classSelectBox").removeClass("disabled");
		$("#extraInfo").html(DATABASE_LINK_HTML).css("width", "auto").removeClass("hidden");
	}
}
function handleShareButton() {
	navigator.clipboard.writeText(window.location.href);
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
	for (let i = 0, n = pixiJS.stage.children.length; i < n; i++) {
		const pixiChild = pixiJS.stage.children[i];
		pixiChild.position.startX = pixiChild.position.x;
		pixiChild.position.startY = pixiChild.position.y;
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
			for (let i = 0, n = pixiJS.stage.children.length; i < n; i++) {
				const pixiChild = pixiJS.stage.children[i];
				pixiChild.position.x = pixiChild.position.startX - pixiDragging.startX + event.global.x / pixiJS.stage.scale.x;
				pixiChild.position.y = pixiChild.position.startY - pixiDragging.startY + event.global.y / pixiJS.stage.scale.y;
			}
		} else if (pixiDragging) {
			return onDragMove(event, true);
		}
	}
	if (pixiTooltip.children.length > 0) repositionTooltip();
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
		// 1 paragon point gained at level 50, then 4 per level from 51-100 inclusive (level total: 201); plus 20 from renown (final total: 221)
		const maxParagonPoints = 221;
		return maxParagonPoints - pixiAllocatedParagonPoints;
	} else {
		// 1 skill point per level from 2-49 inclusive (level total: 48); plus 10 from renown (final total: 58)
		const maxSkillPoints = 58;
		const curSkillPoints = Array.from(pixiAllocatedPoints.values()).reduce((a, b) => a + b, 0);
		return maxSkillPoints - curSkillPoints;
	}
}
function updateCharacterLevel() {
	const unusedPoints = getUnusedPoints(false);
	const unusedParagonPoints = getUnusedPoints(true);

	let charLevel = 1;
	let renownLevel = 0;
	const maxSkillPoints = 58;
	const maxRenownLevel = 10;

	if (unusedPoints >= maxRenownLevel) {
		charLevel = 1 + maxSkillPoints - unusedPoints;
	} else {
		charLevel = 50;
		renownLevel = maxRenownLevel - unusedPoints;
	}

	if (unusedParagonPoints < 21) {
		charLevel = 100;
		renownLevel += 20 - unusedParagonPoints;
	} else if (unusedParagonPoints < 221) {
		charLevel = 49 + Math.ceil((221 - unusedParagonPoints) / 4);
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
	if ([CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(curNode.groupName)) {
		return true;
	} else if (curNode.groupName == PARAGON_BOARD) {
		return getUnusedPoints(true) > 0;
	} else if (curNode.groupName == CAPSTONE) {
		return pixiNodes.find(pixiNode => {
			if (pixiNode.groupName != curNode.groupName || pixiNode == curNode) return false;
			if ((pixiNode.nodeData.get("allocatedPoints") || 0) == 0) return false;
			return [...pixiNode.nodeData.get("connections").values()].includes(curNode.groupName);
		}) == undefined;
	} else if (curNode.groupName == ULTIMATE) {
		if (curNode.nodeData.get("description").includes(COOLDOWN)) {
			return pixiNodes.find(pixiNode => {
				if (pixiNode.groupName != curNode.groupName || pixiNode == curNode) return false;
				if ((pixiNode.nodeData.get("allocatedPoints") || 0) == 0) return false;
				if (!pixiNode.nodeData.get("description").includes(COOLDOWN)) return false;
				return [...pixiNode.nodeData.get("connections").values()].includes(curNode.groupName);
			}) == undefined;
		} else {
			return true;
		}
	}
	const baseSkill = curNode.nodeData.get("baseSkill");
	if (baseSkill != undefined) {
		// this may need to change in the future if branching skill modifiers are added
		const modifierCount = pixiNodes.filter(pixiNode => {
			if (pixiNode.groupName != curNode.groupName) return false;
			if ((pixiNode.nodeData.get("allocatedPoints") || 0) == 0) return false;
			if (pixiNode.nodeData.get("baseSkill") != baseSkill) return false;
			return true;
		}).length + 1;
		if (modifierCount > 2) return false;
		return pixiNodes.find(pixiNode => {
			if (pixiNode.groupName != curNode.groupName || pixiNode == curNode) return false;
			if ((pixiNode.nodeData.get("allocatedPoints") || 0) == 0) return false;
			if (pixiNode.nodeData.get("baseSkill") != baseSkill) return false;
			return [...pixiNode.nodeData.get("connections").values()].includes(curNode.groupName);
		}) == undefined;
	}
	return true;
}
function updateNodePoints(curNode, newPoints) {
	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	const maxPoints = curNode.nodeData.get("maxPoints");
	if (maxPoints == 0) {
		curNode.children[1].style.fontWeight = "bold";
	} else {
		//console.assert(newPoints != allocatedPoints);

		curNode.nodeData.set("allocatedPoints", newPoints);
		if (maxPoints > 1) curNode.children[2].text = newPoints + "/" + maxPoints;

		newPoints > 0 ? setNodeStyleThick(curNode) : setNodeStyleThin(curNode);

		const className = $(classString).val();
		const classData = classMap.get(className);
		if (classData != undefined) {
			const trunkData = classData.get("Trunk Data");
			pixiNodes.filter(pixiNode => trunkData.has(pixiNode.nodeName)).forEach(groupNode => {
				const requiredPoints = groupNode.nodeData.get("requiredPoints");
				const validConnection = requiredPoints <= getAllocatedSkillPoints(groupNode.nodeName);
				validConnection ? setNodeStyleThick(groupNode) : setNodeStyleThin(groupNode);
			});
		}

		pixiConnectors.forEach(connector => updateConnectorLineStyle(connector, connector.startNode, connector.endNode));
	}
}
function handleToggleButton(curNode) {
	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	if (allocatedPoints == 0) {
		handlePlusButton(curNode);
		if ([PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(curNode.groupName)) {
			const exclusiveNodes = curNode.nodeData.get("exclusiveNodes");
			if (exclusiveNodes != undefined) {
				let allocatedBoons = [];
				let extraBoonAvailable = false;
				pixiNodes.forEach(pixiNode => {
					if (pixiNode.groupName == SPIRIT_BOONS && pixiNode.nodeData.get("description") == SPIRIT_BOON_DESC
						&& pixiNode.nodeData.get("allocatedPoints") > 0 && pixiNode.nodeName == curNode.nodeData.get("boonTypeName")) {
						extraBoonAvailable = true;
					}
				});
				pixiNodes.forEach(pixiNode => {
					if (pixiNode != curNode && exclusiveNodes.includes(pixiNode.nodeName)) {
						if (pixiNode.groupName == SPIRIT_BOONS) {
							extraBoonAvailable && pixiNode.nodeData.get("allocatedPoints") > 0 ? allocatedBoons.push(pixiNode) : handleMinusButton(pixiNode);
						} else if (pixiNode.groupName == BOOK_OF_THE_DEAD) {
							handleMinusButton(pixiNode);
						}
					}
				});
				if (extraBoonAvailable && allocatedBoons.length > 1) allocatedBoons.slice(1).forEach(allocatedBoon => handleMinusButton(allocatedBoon));
			}
		}
	} else {
		handleMinusButton(curNode);
	}
}
function handlePlusButton(curNode) {
	if (!canAllocate(curNode)) return;

	if ([PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(curNode.groupName)) {
		const allocatedPoints = curNode.nodeData.get("allocatedPoints");
		const maxPoints = curNode.nodeData.get("maxPoints");
		const newPoints = Math.min(allocatedPoints + 1, maxPoints);

		if (newPoints != allocatedPoints) {
			updateNodePoints(curNode, newPoints);
			if (curNode.groupName == PARAGON_BOARD) {
				pixiAllocatedParagonPoints++;
				updateCharacterLevel();
			}
		}
	} else {
		if (getUnusedPoints(false) <= 0) return;

		let validConnection = false;
		const nodeConnectionValues = curNode.nodeData.get("connections").values();
		for (const connectedNode of nodeConnectionValues) {
			for (let i = 0, n = pixiNodes.length; i < n; i++) {
				const parentNode = pixiNodes[i];
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
			drawTooltip(curNode, newPoints > 1);
		}
	}
}
function handleMinusButton(curNode) {
	if ([PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(curNode.groupName)) {
		const allocatedPoints = curNode.nodeData.get("allocatedPoints");
		const maxPoints = curNode.nodeData.get("maxPoints");
		const newPoints = Math.max(allocatedPoints - 1, 0);

		if (newPoints != allocatedPoints) {
			updateNodePoints(curNode, newPoints);
			if (curNode.groupName == PARAGON_BOARD) {
				pixiAllocatedParagonPoints--;
				updateCharacterLevel();
			}
		}

		if (curNode.groupName == SPIRIT_BOONS && curNode.nodeData.get("description") == SPIRIT_BOON_DESC) {
			let foundBoon = false;
			pixiNodes.forEach(pixiNode => {
				if (pixiNode.groupName == SPIRIT_BOONS
					&& pixiNode.nodeData.get("allocatedPoints") > 0 && pixiNode.nodeData.get("boonTypeName") == curNode.nodeName) {
					if (foundBoon) handleMinusButton(pixiNode);
					foundBoon = true;
				}
			});
		}
	} else {
		let validConnection = false;
		const nodeConnectionValues = curNode.nodeData.get("connections").values();
		for (const connectedNode of nodeConnectionValues) {
			for (let i = 0, n = pixiNodes.length; i < n; i++) {
				const parentNode = pixiNodes[i];
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
			drawTooltip(curNode, allocatedPoints > 1);
		}
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
	for (let i = 0, n = pixiNodes.length; i < n; i++) {
		const pixiNode = pixiNodes[i];
		if (pixiNode.nodeName == startNode) {
			if (pixiNode.groupName == undefined) {
				return pixiNode.nodeData.get("requiredPoints") <= getAllocatedSkillPoints(pixiNode.nodeName);
			} else if (pixiNode.nodeData.get("allocatedPoints") > 0) {
				if (recursionDepth < MAX_RECURSION_DEPTH) {
					const nodeConnectionValues = pixiNode.nodeData.get("connections").values();
					for (const connectedNode of nodeConnectionValues) {
						if (recursivePathValidation(connectedNode, recursionDepth + 1)) return true;
					}
				}
			}
			return false;
		}
	}
	return false;
}
function validateAllDependentNodes() {
	for (let i = 0, n = pixiNodes.length; i < n; i++) {
		const pixiNode = pixiNodes[i];
		const nodeConnections = pixiNode.nodeData.get("connections");
		if (nodeConnections != undefined) {
			let validConnection = false;
			const nodeConnectionValues = nodeConnections.values();
			for (const connectedNode of nodeConnectionValues) {
				validConnection = recursivePathValidation(connectedNode);
				if (validConnection) break;
			}
			if (!validConnection) {
				const allocatedPoints = pixiNode.nodeData.get("allocatedPoints");
				const maxPoints = pixiNode.nodeData.get("maxPoints");

				if (allocatedPoints != 0) {
					pixiAllocatedPoints.set(pixiNode.groupName, pixiAllocatedPoints.get(pixiNode.groupName) - allocatedPoints);
					updateNodePoints(pixiNode, 0);
				}
			}
		}
	}
}
function redrawNode(curNode) {
	drawNode(curNode.nodeName, curNode.nodeData, curNode.groupName, curNode.branchData, curNode.nodeIndex, curNode.position);
}
function redrawAllNodes(idleMode = false) {
	pixiEventQueue = [];
	for (let i = 0, n = pixiNodes.length; i < n; i++) {
		const pixiNode = pixiNodes[i];
		if (idleMode) {
			redrawNode(pixiNode);
		} else {
			pixiNode.stale = true;
		}
	}
}
function drawNode(nodeName, nodeData, groupName, branchData, nodeIndex = pixiNodes.length, nodePosition = null) {
	const scaleFactor = PIXI.settings.RESOLUTION >= 4 ? 1 : (newRenderScale >= 0.6 ? 4 : newRenderScale >= 0.5 ? 2 : 1) / PIXI.settings.RESOLUTION * newRenderScale;

	let node = null;
	if (pixiNodes.length > nodeIndex) {
		node = pixiNodes[nodeIndex];
		// skip node redraw if we already have the correct one displayed
		if (node.scaleFactor == scaleFactor) return;
		// destroy all existing node children if we need to replace them
		while (node.children[0]) node.children[0].destroy(true);
	}

	let x = nodePosition == null ? nodeData.get("x") : nodePosition.x;
	let y = nodePosition == null ? nodeData.get("y") : nodePosition.y;

	if (x == undefined || y == undefined) return;

	if (branchData != undefined && nodePosition == null) {
		x += branchData.get("x");
		y += branchData.get("y");
	}

	const shapeType = nodeData.get("shapeType");
	const shapeSize = nodeData.get("shapeSize");

	const circleFactor = shapeType == "circle" ? Math.SQRT2 : 1;
	const diamondFactor = shapeType == "diamond" ? 1.5 : 1;

	const _nodeWidth = nodeData.get("widthOverride") != undefined ? nodeData.get("widthOverride") : nodeWidth;
	const _nodeHeight = nodeData.get("heightOverride") != undefined ? nodeData.get("heightOverride") : nodeHeight;
	nodeData.set("_nodeWidth", _nodeWidth);
	nodeData.set("_nodeHeight", _nodeHeight);

	let displayName = nodeName;
	let displayNameSize = 36;
	if (node == null) {
		const maxLabelSize = Math.round(7.5 * _nodeWidth * shapeSize * circleFactor / nodeWidth);
		if (displayName.length > maxLabelSize) displayName = nodeName.split([" ", "—"]).map((n) => n[0]).join("");
		if (displayName.length >= maxLabelSize - 2) displayNameSize = 32;
	} else {
		displayName = node.displayName;
		displayNameSize = node.displayNameSize;
	}

	const allocatedPoints = nodeData.get("allocatedPoints");
	const maxPoints = nodeData.get("maxPoints");
	const requiredPoints = nodeData.get("requiredPoints");

	// `searchQueryMatch` implies `useThickNodeStyle` and `invertColor`; is set in `handleSearchInput(...)`; and is only used for restoring node style after `redrawNode` is called
	const searchQueryMatch = nodeData.get("searchQueryMatch");

	const useThickNodeStyle = searchQueryMatch || (groupName == undefined ? requiredPoints <= getAllocatedSkillPoints(nodeName) : allocatedPoints > 0);

	const colorOverride = nodeData.get("colorOverride");
	const _textColor = colorOverride != undefined ? colorOverride : textColor;

	const nodeText = new PIXI.Text(displayName, {
		align: "center",
		fill: _textColor,
		fontFamily: fontFamily,
		fontSize: displayNameSize * scaleFactor,
		fontVariant: "small-caps",
		fontWeight: useThickNodeStyle ? "bold" : "normal",
		padding: 10
	});
	nodeText.scale.set(1 / scaleFactor);
	nodeText.anchor.set(0.5);

	let nodeText2, nodeText3, nodeText4, plusContainer, minusContainer;
	if (groupName != undefined && ![PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(groupName) && maxPoints > 1) {
		nodeText2 = new PIXI.Text(allocatedPoints + "/" + maxPoints, {
			align: "right",
			fill: _textColor,
			fontFamily: fontFamily,
			fontSize: 24 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		});
		nodeText2.scale.set(1 / scaleFactor);
		nodeText2.anchor.set(0.5);
		nodeText2.x = (_nodeWidth * shapeSize * circleFactor * diamondFactor - nodeText2.width) * 0.5 - 5;
		nodeText2.y = (nodeText2.height - _nodeHeight * shapeSize * circleFactor * diamondFactor) * 0.5 + (shapeType == "circle" ? -2 : 2);

		nodeText3 = new PIXI.Text("+", {
			align: "right",
			fill: _textColor,
			fontFamily: fontFamilyOverride,
			fontSize: 48 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		});
		nodeText3.scale.set(1 / scaleFactor);
		nodeText3.anchor.set(0.5);
		nodeText3.x = (_nodeWidth * shapeSize * circleFactor * diamondFactor - nodeText3.width) * 0.5;
		nodeText3.y = (_nodeHeight * shapeSize * circleFactor * diamondFactor - nodeText3.height) * 0.5 + (shapeType == "circle" ? 12 : 4);

		nodeText4 = new PIXI.Text("–", {
			align: "left",
			fill: _textColor,
			fontFamily: fontFamilyOverride,
			fontSize: 48 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		});
		nodeText4.scale.set(1 / scaleFactor);
		nodeText4.anchor.set(0.5);
		nodeText4.x = (nodeText4.width - _nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 + 4;
		nodeText4.y = (_nodeHeight * shapeSize * circleFactor * diamondFactor - nodeText4.height) * 0.5 + (shapeType == "circle" ? 8 : 0);

		plusContainer = new PIXI.Container();
		plusContainer.cursor = "pointer";
		plusContainer.interactive = true;
		plusContainer.addChild(nodeText3);
		plusContainer
			.on("click", () => handlePlusButton(node))
			.on("tap", () => handlePlusButton(node));

		minusContainer = new PIXI.Container();
		minusContainer.cursor = "pointer";
		minusContainer.interactive = true;
		minusContainer.addChild(nodeText4);
		minusContainer
			.on("click", () => handleMinusButton(node))
			.on("tap", () => handleMinusButton(node));
	}

	const nodeBackground = new PIXI.Graphics();
	nodeBackground.beginFill(backgroundColor);
	if (shapeType == "circle") {
		nodeBackground.drawCircle(_nodeWidth * 0.5 * shapeSize, _nodeHeight * 0.5 * shapeSize, (_nodeWidth + _nodeHeight) * 0.5 * shapeSize);
	} else {
		nodeBackground.drawRect(0, 0, _nodeWidth * shapeSize, _nodeHeight * shapeSize);
	}
	nodeBackground.alpha = backgroundOpacity;
	nodeBackground.pivot.x = _nodeWidth * 0.5 * shapeSize;
	nodeBackground.pivot.y = _nodeHeight * 0.5 * shapeSize;

	const nodeBorder = new PIXI.Graphics();
	nodeBorder.pivot.x = _nodeWidth * 0.5 * shapeSize;
	nodeBorder.pivot.y = _nodeHeight * 0.5 * shapeSize;
	if (([PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD, undefined].includes(groupName) && requiredPoints == 0) || useThickNodeStyle) {
		let _lineStyleThickSquare = { ...lineStyleThickSquare };
		if (searchQueryMatch) { // aka `invertColor`
			if ([0xFF0000, 0xFFFFFF].includes(_lineStyleThickSquare.color)) {
				_lineStyleThickSquare.color = 0x00FF00;
			} else {
				_lineStyleThickSquare.color = _lineStyleThickSquare.color ^ 0xFFFFFF;
			}
		} else if (groupName == PARAGON_BOARD) {
			_lineStyleThickSquare.color = COLOR_OVERRIDE["Allocated"];
		} else if (colorOverride != undefined) {
			_lineStyleThickSquare.color = colorOverride;
		}
		nodeBorder.lineStyle(_lineStyleThickSquare);
	} else {
		let _lineStyleThinSquare = { ...lineStyleThinSquare };
		if (colorOverride != undefined) _lineStyleThinSquare.color = colorOverride;

		nodeBorder.lineStyle(_lineStyleThinSquare);
	}
	if (shapeType == "circle") {
		nodeBorder.drawCircle(_nodeWidth * 0.5 * shapeSize, _nodeHeight * 0.5 * shapeSize, (_nodeWidth + _nodeHeight) * 0.5 * shapeSize);
	} else {
		nodeBorder.moveTo(0, 0);
		nodeBorder.lineTo(_nodeWidth * shapeSize, 0);
		nodeBorder.moveTo(_nodeWidth * shapeSize, 0);
		nodeBorder.lineTo(_nodeWidth * shapeSize, _nodeHeight * shapeSize);
		nodeBorder.moveTo(_nodeWidth * shapeSize, _nodeHeight * shapeSize);
		nodeBorder.lineTo(0, _nodeHeight * shapeSize);
		nodeBorder.moveTo(0, _nodeHeight * shapeSize);
		nodeBorder.lineTo(0, 0);
	}

	if (shapeType == "diamond") {
		nodeBackground.angle = 45;
		nodeBorder.angle = 45;
	}

	if (node == null) {
		node = new PIXI.Container();

		node._renderHooked = node._render;
		node._render = (...args) => {
			if (node.stale) {
				node.stale = false;
				pixiEventQueue.push(() => redrawNode(node));
			} else {
				node._renderHooked(...args);
			}
		};

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

		if ([PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(groupName) || maxPoints <= 1) {
			if (maxPoints != 0) {
				node.cursor = "pointer";
				node.interactive = true;
				node
					.on("click", () => handleToggleButton(node))
					.on("tap", () => handleToggleButton(node));
			}
		}

		switch (nodeData.get("damageType")) {
			case -1:
			case undefined:
				break;
			case 0:
				node.damageType = PHYSICAL;
				break;
			case 1:
				node.damageType = FIRE;
				break;
			case 2:
				node.damageType = LIGHTNING;
				break;
			case 3:
				node.damageType = COLD;
				break;
			case 4:
				node.damageType = POISON;
				break;
			case 5:
				node.damageType = SHADOW;
				break;
			default:
				node.damageType = UNKNOWN;
				break;
		}
		node.nodeName = nodeName;
		node.nodeData = nodeData;
		node.groupName = groupName;
		node.branchData = branchData;
		node.nodeIndex = nodeIndex;

		node.displayName = displayName;
		node.displayNameSize = displayNameSize;

		node.nodeDesc = nodeData.get("description");
		if (node.nodeDesc != undefined && node.nodeDesc.length > 0 && requiredPoints == undefined) {
			let nodeValues = node.nodeData.get("values");
			if (nodeValues != undefined) {
				let [nodeDesc1, nodeDesc2] = node.nodeDesc.split(ENCHANTMENT_EFFECT_DESC);
				nodeValues = nodeValues.values();
				for (const nodeValue of nodeValues) {
					nodeDesc1 = nodeDesc1.replace(/{#}/, nodeValue.length > 0 ? nodeValue: "#");
				}
				if (nodeDesc2 != undefined) {
					let extraValues = node.nodeData.get("extraValues");
					if (extraValues != undefined) {
						extraValues = extraValues.values();
						for (const extraValue of extraValues) {
							nodeDesc2 = nodeDesc2.replace(/{#}/, extraValue.length > 0 ? extraValue: "#");
						}
						node.nodeDesc = nodeDesc1 + ENCHANTMENT_EFFECT_DESC + nodeDesc2;
					}
				} else {
					node.nodeDesc = nodeDesc1;
				}
			}
		}

		pixiNodes[nodeIndex] = pixiJS.stage.addChild(node);
	}

	node.cullable = true;
	node.interactive = true;
	node.stale = false;
	node.position.x = x;
	node.position.y = y;
	node.scaleFactor = scaleFactor;

	if ([PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD, undefined].includes(groupName) || maxPoints <= 1) {
		node.addChild(nodeBackground, nodeText, nodeBorder);
	} else {
		node.addChild(nodeBackground, nodeText, nodeText2, plusContainer, minusContainer, nodeBorder);
	}
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
				if (branchData.get("requiredPoints") != undefined) {
					groupNode.set("description", REQUIRED_POINTS_DESC);
				}
				groupNode.set("shapeSize", 1 / Math.SQRT2 * 1.5);
				groupNode.set("shapeType", "circle");
				groupNode.set("requiredPoints", branchData.get("requiredPoints") || 0);
				groupNode.set("x", branchData.get("x"));
				groupNode.set("y", branchData.get("y"));
				if (groupName == SPIRIT_BOONS) {
					groupNode.set("colorOverride", 0xFFFFFF);
					groupNode.set("shapeSize", 1);
					groupNode.set("shapeType", "rectangle");
					groupNode.set("widthOverride", 1700);

					drawNode(groupName, groupNode);

					const nodeSpacingX = 350;
					const nodeSpacingY = 150;
					const nodeLimitX = 5;
					const nodeLimitY = 2;

					const exclusiveBoonTypes = Array.from(groupData.keys()).map(boonTypeName => boonTypeName);

					let extraY = nodeSpacingY;
					for (const [boonTypeName, _boonTypeData] of groupData) {
						let extraX = -nodeSpacingX * 2;
						const boonTypeNode = new Map([
							["allocatedPoints", 0],
							["description", SPIRIT_BOON_DESC],
							["exclusiveNodes", exclusiveBoonTypes],
							["id", _boonTypeData.get("id")],
							["maxPoints", 1],
							["shapeSize", 1],
							["shapeType", "rectangle"],
							["widthOverride", 300],
							["x", extraX],
							["y", extraY]
						]);

						drawNode(boonTypeName, boonTypeNode, groupName, branchData);

						let boonTypeData = new Map(_boonTypeData);
						boonTypeData.delete("id");
						const exclusiveBoons = Array.from(boonTypeData.keys()).map(boonData => boonData);

						extraX += nodeSpacingX;
						for (const [boonName, boonData] of boonTypeData) {
							const boonModifiers = 4;
							const boonNode = new Map([
								["allocatedPoints", 0],
								["boonTypeName", boonTypeName],
								["description", boonData.get("description")],
								["exclusiveNodes", exclusiveBoons],
								["id", boonData.get("id")],
								["maxPoints", 1],
								["shapeSize", 1],
								["shapeType", "rectangle"],
								["values", boonData.get("values")],
								["widthOverride", 300],
								["x", extraX],
								["y", extraY]
							]);

							drawNode(boonName, boonNode, groupName, branchData);

							extraX += nodeSpacingX;
						}
						extraY += nodeSpacingY * (nodeLimitY - 1);
					}
				} else if (groupName == BOOK_OF_THE_DEAD) {
					groupNode.set("colorOverride", 0xFFFFFF);
					groupNode.set("shapeSize", 1);
					groupNode.set("shapeType", "rectangle");
					groupNode.set("widthOverride", 1600);
					drawNode(groupName, groupNode);
					const nodeSpacingX = 150;
					const nodeSpacingY = 150;
					const nodeLimitX = 5;
					const nodeLimitY = 2;
					let extraX = -nodeSpacingX * (nodeLimitX - 1);
					for (const [minionName, minionData] of groupData) {
						const minionNode = new Map([
							["allocatedPoints", 0],
							["maxPoints", 0],
							["shapeSize", 1],
							["shapeType", "rectangle"],
							["widthOverride", 400],
							["x", extraX],
							["y", nodeSpacingY]
						]);

						drawNode(minionName, minionNode, groupName, branchData);

						const exclusiveNodes = Array.from(minionData.keys());

						let extraY = nodeSpacingY * (nodeLimitY - 0.5);
						for (const [minionTypeName, minionTypeData] of minionData) {
							const minionUpgrades = [minionTypeData.get("sacrifice"), ...minionTypeData.get("upgrades").values()];
							const minionTypeNode = new Map([
								["allocatedPoints", 0],
								["description", minionTypeData.get("description")],
								["exclusiveNodes", exclusiveNodes],
								["id", minionTypeData.get("id")],
								["maxPoints", 1],
								["shapeSize", 1],
								["shapeType", "rectangle"],
								["x", extraX - nodeSpacingX * Math.ceil(minionUpgrades.length * 0.5) * 0.5],
								["y", nodeSpacingY + extraY]
							]);

							drawNode(minionTypeName, minionTypeNode, groupName, branchData);

							let exclusiveUpgradeNodes = [];
							let upgradeItr = 0;
							for (const minionUpgrade of minionUpgrades) {
								if (upgradeItr == 0) {
									exclusiveUpgradeNodes.push(minionTypeName + " — Sacrifice");
								} else {
									exclusiveUpgradeNodes.push(minionTypeName + " — Upgrade " + upgradeItr);
								}
								upgradeItr++;
							}

							upgradeItr = 0;
							for (const minionUpgrade of minionUpgrades) {
								const minionUpgradeNode = new Map([
									["allocatedPoints", 0],
									["description", minionUpgrade],
									["exclusiveNodes", exclusiveUpgradeNodes],
									["id", `${minionTypeData.get("id")}-${upgradeItr}`],
									["maxPoints", 1],
									["shapeSize", 1],
									["shapeType", "rectangle"],
									["x", extraX + nodeSpacingX * (upgradeItr == 0 ? 1 : Math.ceil((upgradeItr - 2) * 0.5))],
									["y", nodeSpacingY + extraY + (upgradeItr == 0 ? 0 : nodeSpacingY * (upgradeItr % 2 == 0 ? 0.5 : -0.5))]
								]);

								drawNode(exclusiveUpgradeNodes[upgradeItr], minionUpgradeNode, groupName, branchData);

								upgradeItr++;
							}
							extraY += nodeSpacingY * nodeLimitY;
						}
						extraX += nodeSpacingX * (nodeLimitX - 1);
					}
				} else {
					drawNode(groupName, groupNode);
					pixiAllocatedPoints.set(groupName, 0);
					for (const [nodeName, nodeData] of groupData) {
						const curNode = groupData.get(nodeName);
						curNode.set("allocatedPoints", 0);
						if (curNode.get("baseSkill") != undefined) {
							// active skill modifier
							curNode.set("shapeType", "diamond");
							curNode.set("shapeSize", 0.75);
						} else if (curNode.get("maxPoints") == 3) {
							// passive skill
							curNode.set("shapeType", "circle");
							curNode.set("shapeSize", 1 / Math.SQRT2 * 0.9);
						} else if (groupName == "Capstone") {
							// special behavior for capstone skills
							curNode.set("shapeType", "circle");
							curNode.set("shapeSize", 1 / Math.SQRT2 * 1.1);
						} else {
							// active skill
							curNode.set("shapeType", "rectangle");
							curNode.set("shapeSize", 1.3);
						}
						if (curNode.get("maxPoints") == undefined) {
							// default to 5 max points, if unspecified
							curNode.set("maxPoints", 5);
						}
						drawNode(nodeName, curNode, groupName, branchData);
					}
				}
			}
		}

		const classText = $(classString).text();

		const paragonBoardCount = Object.keys(paragonData[classText]["Board"]).length;
		if (paragonBoardCount > 0) {
			const paragonBoardNodes = 21;

			const nodeWidth = 125;
			const nodeHeight = 125;
			const nodeSpacingX = nodeWidth + 25;
			const nodeSpacingY = nodeHeight + 25;

			const paragonNode = new Map([
				["colorOverride", 0xFFFFFF],
				["requiredPoints", 0],
				["widthOverride", (paragonBoardCount * paragonBoardNodes * nodeSpacingX) + (nodeSpacingX * (paragonBoardCount - 1) * 0.5)],
				["shapeSize", 1],
				["shapeType", "rectangle"],
				["x", 0],
				["y", -nodeSpacingY * (paragonBoardNodes + 1) - 950]
			]);

			drawNode(PARAGON_BOARD, paragonNode);

			const unsortedBoards = Object.entries(paragonData[classText]["Board"]);
			const unsortedMidpoint = Math.ceil(unsortedBoards.length / 2);
			const sortedBoards = unsortedBoards.slice(1, unsortedMidpoint).concat([unsortedBoards[0]], unsortedBoards.slice(unsortedMidpoint));

			let sortedIndex = 0;
			for (const [boardName, boardData] of sortedBoards) {
				const unsortedIndex = unsortedBoards.findIndex(unsortedBoard => unsortedBoard[0] == boardName);

				const startX = (paragonBoardNodes + 0.5) * nodeSpacingX * (sortedIndex - (paragonBoardCount - 1) * 0.5);
				const startY = -(paragonBoardNodes + 1) * nodeSpacingY - 800;

				let [boardX, boardY] = [startX, startY];

				const paragonBoardNode = new Map([
					["allocatedPoints", 0],
					//["description", ""],
					["widthOverride", nodeSpacingX * paragonBoardNodes],
					["maxPoints", 0],
					["shapeSize", 1],
					["shapeType", "rectangle"],
					["x", boardX],
					["y", boardY]
				]);

				drawNode(boardName, paragonBoardNode, PARAGON_BOARD);
				for (const [yPosition, rowData] of Object.entries(boardData)) {
					for (const [xPosition, nodeData] of Object.entries(rowData)) {
						if (nodeData.length > 0) {
							const nodeName = nodeData in paragonData["Generic"]["Node"] ? paragonData["Generic"]["Node"][nodeData]["name"]
								: nodeData in paragonData[classText]["Node"] ? paragonData[classText]["Node"][nodeData]["name"]
								: nodeData.includes("_Magic_") ? nodeData
									.replace(/.+_Magic_/g, "")
									.replace(/([0-9A-Z])/g, " $1")
									.replace(/([0-9A-Z]) ([0-9A-Z])/g, "$1$2")
									.trim()
								: nodeData;
							const nodeDesc = nodeData in paragonData[classText]["Node"] && "description" in paragonData[classText]["Node"][nodeData]
								? `${paragonData[classText]["Node"][nodeData]["description"]}\n` : "";
							const nodeType = nodeData.includes("_Normal_") ? "Normal"
								: nodeData.includes("_Magic_") ? "Magic"
								: nodeData.includes("_Rare_") ? "Rare"
								: nodeData.includes("_Legendary_") ? "Legendary"
								: nodeData.includes("StartNode") ? "Start"
								: nodeData == "Generic_Gate" ? "Gate"
								: nodeData == "Generic_Socket" ? "Socket" : "";
							const boardNode = new Map([
								["allocatedPoints", 0],
								["colorOverride", COLOR_OVERRIDE[nodeType]],
								["description", `${nodeDesc}${nodeData}`],
								["id", `paragon-${unsortedIndex}-${xPosition}-${yPosition}`],
								["maxPoints", 1],
								["widthOverride", nodeWidth],
								["heightOverride", nodeHeight],
								["shapeSize", 1],
								["shapeType", "rectangle"],
								["x", boardX + nodeSpacingX * (Number(xPosition) - ((paragonBoardNodes - 1) * 0.5))],
								["y", boardY + nodeSpacingY * (Number(yPosition) + 0.5) + 100]
							]);
							drawNode(nodeName, boardNode, PARAGON_BOARD);
						}
					}
				}
				sortedIndex++;
			}
			$("#groupSelector").append(`<option value="${PARAGON_BOARD.replace(/\s/g, "").toLowerCase()}">${PARAGON_BOARD}</option>`);
		}

		const codexResult = getCodexData(["General", classText]);
		if (Object.keys(codexResult).length > 0) {
			const startX = -4000;
			const startY = 0;
			const nodeWidth = 400;
			const nodeSpacingX = nodeWidth + 50;
			const nodeSpacingY = 150;

			let [codexX, codexY] = [startX, startY];

			const codexNode = new Map([
				["colorOverride", 0xFFFFFF],
				["requiredPoints", 0],
				["widthOverride", nodeSpacingX * 4 - 50],
				["shapeSize", 1],
				["shapeType", "rectangle"],
				["x", codexX],
				["y", codexY]
			]);

			drawNode(CODEX_OF_POWER, codexNode);

			for (const [codexTypeName, codexType] of Object.entries(codexResult)) {
				const numCodexPowers = Object.keys(codexType).length;
				if (numCodexPowers > 0) {
					codexY += nodeSpacingY;

					const codexTypeNode = new Map([
						["allocatedPoints", 0],
						["description", CODEX_OF_POWER_DESC + codexData["Slots"][codexTypeName]],
						["widthOverride", nodeSpacingX * 4 - 50],
						["maxPoints", 0],
						["shapeSize", 1],
						["shapeType", "rectangle"],
						["x", startX],
						["y", codexY]
					]);

					drawNode(codexTypeName, codexTypeNode, CODEX_OF_POWER);

					let codexPowerIdx = 0;
					for (const [codexPowerName, codexPower] of Object.entries(codexType)) {
						if (codexPowerIdx % 4 == 0) {
							codexX = startX - nodeSpacingX * 1.5;
							if (codexPowerIdx + 4 > numCodexPowers) codexX += nodeSpacingX * (2 - (0.5 * (numCodexPowers % 4)));
							codexY += nodeSpacingY;
						} else {
							if (codexPowerIdx + 4 > numCodexPowers) {
								codexX += nodeSpacingX;
							} else {
								codexX = startX - nodeSpacingX * 1.5 + nodeSpacingX * (codexPowerIdx % 4);
							}
						}

						let powerDescription = codexPower.power;
						let powerLocation = [];
						if (codexPower.dungeon) powerLocation.push(codexPower.dungeon);
						if (codexPower.region) powerLocation.push(codexPower.region);
						if (powerLocation.length > 0) powerDescription += "\n\n— Location —\n" + powerLocation.join(" — ");

						const codexPowerNode = new Map([
							["allocatedPoints", 0],
							["description", powerDescription],
							["id", `codex-${codexPower.id}`],
							["maxPoints", 1],
							["widthOverride", nodeWidth],
							["shapeSize", 1],
							["shapeType", "rectangle"],
							["x", codexX],
							["y", codexY]
						]);

						drawNode(codexPowerName, codexPowerNode, CODEX_OF_POWER);

						codexPowerIdx++;
					}
				}
			}
			$("#groupSelector").append(`<option value="${CODEX_OF_POWER.replace(/\s/g, "").toLowerCase()}">${CODEX_OF_POWER}</option>`);
		}

		resizeSearchInput();
	}
}
function drawTooltip(curNode, forceDraw) {
	const clampScale = stageScale < tooltipScalingFloor ? tooltipScalingFloor / stageScale : stageScale > tooltipScalingCeiling ? tooltipScalingCeiling / stageScale : 1;
	const clampRenderScale = stageScale * clampScale;
	const scaleFactor = PIXI.settings.RESOLUTION >= 4 ? 1 : (clampRenderScale >= 0.6 ? 4 : clampRenderScale >= 0.5 ? 2 : 1) / PIXI.settings.RESOLUTION * clampRenderScale;

	// skip tooltip redraw if we already have the correct one displayed
	if (!forceDraw && !debugMode && pixiTooltip.nodeIndex == curNode.nodeIndex && pixiTooltip.scaleFactor == scaleFactor) return;

	eraseTooltip();

	let nodeDesc = debugMode ? `x: ${getNodePosition(curNode).join(" / y: ")}` : curNode.nodeDesc;
	if (nodeDesc == undefined) nodeDesc = "";

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
			nodeDesc = "";
		}
	} else {
		const allocatedPoints = curNode.nodeData.get("allocatedPoints");
		nodeDesc = nodeDesc.replace(/{(.+?)}/g, (matchString, captureString) => {
			const captureSplit = captureString.split("/");
			return captureSplit[allocatedPoints > 0 ? Math.min(allocatedPoints, captureSplit.length) - 1 : 0];
		});
	}

	if (curNode.displayName == curNode.nodeName && nodeDesc.length == 0) return;

	const nodeHeader = curNode.nodeName + (curNode.damageType != undefined && !ANY_DAMAGE_TYPE.some(damageType => curNode.nodeName.includes(damageType) || curNode.nodeDesc.includes(damageType)) ? ` (${curNode.damageType})` : "");
	const tooltipText1 = new PIXI.Text(nodeHeader, {
		align: "left",
		breakWords: true,
		fill: textColor,
		fontFamily: fontFamily,
		fontSize: 32 * scaleFactor,
		fontVariant: "small-caps",
		fontWeight: "bold",
		padding: 10
	});
	tooltipText1.scale.set(1 / scaleFactor);
	tooltipText1.anchor.set(0);

	let tooltipText2;
	if (nodeDesc.length > 0) {
		tooltipText2 = new PIXI.Text("\n" + nodeDesc, {
			align: "center",
			breakWords: true,
			fill: textColor,
			fontFamily: fontFamily,
			fontSize: 32 * scaleFactor,
			padding: 10,
			wordWrap: true,
			wordWrapWidth: tooltipWidth * scaleFactor
		});
		tooltipText2.scale.set(1 / scaleFactor);
		tooltipText2.anchor.set(0);
		tooltipText2.position.y = 20;
	} else {
		tooltipText2 = new PIXI.Text("", {
			fontSize: 20
		});
	}

	const tooltipBackground = new PIXI.Graphics();
	tooltipBackground.beginFill(backgroundColor);
	tooltipBackground.drawRect(0, 0, Math.max(tooltipText1.width, tooltipText2.width) + 20, tooltipText1.height + tooltipText2.height + 13);
	tooltipBackground.alpha = backgroundOpacity;
	tooltipBackground.pivot.x = 10;
	tooltipBackground.pivot.y = 10;

	const tooltipBorder = new PIXI.Graphics();
	tooltipBorder.lineStyle(lineStyleThickSquareTooltip);
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
	if (nodeDesc.length > 0) {
		tooltipSeperator.lineStyle(lineStyleThinSquare);
		tooltipSeperator.moveTo(0, tooltipText1.height + 12);
		tooltipSeperator.lineTo(tooltipBackground.width - 20, tooltipText1.height + 12);
	}

	pixiTooltip.nodeIndex = curNode.nodeIndex;
	pixiTooltip.zIndex = 2;

	pixiTooltip.scale.set(clampScale);
	pixiTooltip.addChild(tooltipBackground, tooltipText1, tooltipText2, tooltipBorder, tooltipSeperator);

	pixiJS.stage.addChild(pixiTooltip);

	repositionTooltip();
}
function eraseTooltip() {
	while (pixiTooltip.children[0]) pixiTooltip.children[0].destroy(true);
}
function repositionTooltip() {
	if (pixiTooltip.children.length == 0) return;

	const borderWidth = 8;
	const marginSize = 10;
	const xOffsetFix = 2;

	const curNode = pixiNodes[pixiTooltip.nodeIndex];
	const nodeData = curNode.nodeData;

	const shapeType = nodeData.get("shapeType");
	const shapeSize = nodeData.get("shapeSize");
	const circleFactor = shapeType == "circle" ? 2 : 1;
	const diamondFactor = shapeType == "diamond" ? 1.5 : 1;

	const _nodeWidth = nodeData.get("widthOverride") != undefined ? nodeData.get("widthOverride") : nodeWidth;
	const _nodeHeight = nodeData.get("heightOverride") != undefined ? nodeData.get("heightOverride") : nodeHeight;

	if (clampMode) {
		const offsetTop = $("#header").outerHeight(true);
		const offsetBottom = $("#extraButtons1").outerHeight(true) + $("#extraButtons2").outerHeight(true) + $("#footer").outerHeight(true);

		const globalPosition = curNode.getGlobalPosition();

		const minX = marginSize - xOffsetFix;
		const minY = offsetTop + marginSize;

		const maxX = document.documentElement.offsetWidth - marginSize - xOffsetFix - pixiTooltip.width * pixiJS.stage.scale.x;
		const maxY = document.documentElement.offsetHeight - offsetBottom - marginSize - pixiTooltip.height * pixiJS.stage.scale.y;

		const globalX = globalPosition.x + (_nodeWidth + borderWidth) * shapeSize * circleFactor * diamondFactor * pixiJS.stage.scale.x * 0.5;
		const globalY = globalPosition.y - (_nodeHeight + borderWidth) * shapeSize * circleFactor * diamondFactor * pixiJS.stage.scale.y * 0.5;

		const diffX = (globalX > maxX) ? maxX - globalX : (globalX < minX) ? minX - globalX : 0;
		const diffY = (globalY > maxY) ? maxY - globalY : (globalY < minY) ? minY - globalY : 0;

		pixiTooltip.position.x = curNode.x + diffX / pixiJS.stage.scale.x + _nodeWidth * shapeSize * circleFactor * diamondFactor * 0.5 + 20 * pixiTooltip.scale.x;
		pixiTooltip.position.y = curNode.y + diffY / pixiJS.stage.scale.y - _nodeHeight * shapeSize * circleFactor * diamondFactor * 0.5 + 10 * pixiTooltip.scale.y;
	} else {
		pixiTooltip.position.x = curNode.x + _nodeWidth * shapeSize * circleFactor * diamondFactor * 0.5 + marginSize * 2 * pixiTooltip.scale.x;
		pixiTooltip.position.y = curNode.y - _nodeHeight * shapeSize * circleFactor * diamondFactor * 0.5 + marginSize * pixiTooltip.scale.y;
	}
}
function drawConnector(startNode, endNode) {
	if (startNode.groupName != undefined && endNode.groupName != undefined && startNode.groupName != endNode.groupName) {
		return;
	}

	const connectorPair = startNode.nodeName < endNode.nodeName ? [endNode.nodeName, startNode.nodeName].join(" / ") : [startNode.nodeName, endNode.nodeName].join(" / ");
	if (pixiConnectorPairs[connectorPair]) {
		return;
	} else {
		pixiConnectorPairs[connectorPair] = true;
	}

	const connector = new PIXI.Graphics();
	connector.zIndex = -1;

	updateConnectorLineStyle(connector, startNode, endNode);

	const startPos = [startNode.x, startNode.y];
	const startShape = [startNode.nodeData.get("shapeSize"), startNode.nodeData.get("shapeType")];
	const startWidthOffset = startNode.nodeData.get("_nodeWidth") * 0.5 * startShape[0];
	const startHeightOffset = startNode.nodeData.get("_nodeHeight") * 0.5 * startShape[0];
	const startRotation = startShape[1] == "diamond" ? 45 : 0;

	const endPos = [endNode.x, endNode.y];
	const endShape = [endNode.nodeData.get("shapeSize"), endNode.nodeData.get("shapeType")];
	const endWidthOffset = endNode.nodeData.get("_nodeWidth") * 0.5 * endShape[0];
	const endHeightOffset = endNode.nodeData.get("_nodeHeight") * 0.5 * endShape[0];
	const endRotation = endShape[1] == "diamond" ? 45 : 0;

	// polygon 1
	let [ newStartX, newStartY, newEndX, newEndY ] = [ NaN, NaN, NaN, NaN ];
	if (startShape[1] == "circle") {
		const vX = endPos[0] - startPos[0];
		const vY = endPos[1] - startPos[1];
		const magV = Math.hypot(vX, vY);
		const radius = startWidthOffset + startHeightOffset;
		[ newStartX, newStartY ] = [ startPos[0] + vX / magV * radius, startPos[1] + vY / magV * radius ];
	}
	if (Number.isNaN(newStartX)) [ newStartX, newStartY ] = lineIntersect(startPos[0], startPos[1], endPos[0], endPos[1], startPos[0] - startWidthOffset, startPos[1] - startHeightOffset, startPos[0] + startWidthOffset, startPos[1] - startHeightOffset, startRotation, undefined, undefined, startPos, startPos); // top left to top right
	if (Number.isNaN(newStartX)) [ newStartX, newStartY ] = lineIntersect(startPos[0], startPos[1], endPos[0], endPos[1], startPos[0] + startWidthOffset, startPos[1] - startHeightOffset, startPos[0] + startWidthOffset, startPos[1] + startHeightOffset, startRotation, undefined, undefined, startPos, startPos); // top right to bottom right
	if (Number.isNaN(newStartX)) [ newStartX, newStartY ] = lineIntersect(startPos[0], startPos[1], endPos[0], endPos[1], startPos[0] + startWidthOffset, startPos[1] + startHeightOffset, startPos[0] - startWidthOffset, startPos[1] + startHeightOffset, startRotation, undefined, undefined, startPos, startPos); // bottom right to bottom left
	if (Number.isNaN(newStartX)) [ newStartX, newStartY ] = lineIntersect(startPos[0], startPos[1], endPos[0], endPos[1], startPos[0] - startWidthOffset, startPos[1] + startHeightOffset, startPos[0] - startWidthOffset, startPos[1] - startHeightOffset, startRotation, undefined, undefined, startPos, startPos); // bottom left to top right

	// polygon 2
	if (endShape[1] == "circle") {
		const vX = startPos[0] - endPos[0];
		const vY = startPos[1] - endPos[1];
		const magV = Math.hypot(vX, vY);
		const radius = endWidthOffset + endHeightOffset;
		[ newEndX, newEndY ] = [ endPos[0] + vX / magV * radius, endPos[1] + vY / magV * radius ];
	}
	if (Number.isNaN(newEndX)) [ newEndX, newEndY ] = lineIntersect(startPos[0], startPos[1], endPos[0], endPos[1], endPos[0] - endWidthOffset, endPos[1] - endHeightOffset, endPos[0] + endWidthOffset, endPos[1] - endHeightOffset, endRotation, undefined, undefined, endPos, endPos); // top left to top right
	if (Number.isNaN(newEndX)) [ newEndX, newEndY ] = lineIntersect(startPos[0], startPos[1], endPos[0], endPos[1], endPos[0] + endWidthOffset, endPos[1] - endHeightOffset, endPos[0] + endWidthOffset, endPos[1] + endHeightOffset, endRotation, undefined, undefined, endPos, endPos); // top right to bottom right
	if (Number.isNaN(newEndX)) [ newEndX, newEndY ] = lineIntersect(startPos[0], startPos[1], endPos[0], endPos[1], endPos[0] + endWidthOffset, endPos[1] + endHeightOffset, endPos[0] - endWidthOffset, endPos[1] + endHeightOffset, endRotation, undefined, undefined, endPos, endPos); // bottom right to bottom left
	if (Number.isNaN(newEndX)) [ newEndX, newEndY ] = lineIntersect(startPos[0], startPos[1], endPos[0], endPos[1], endPos[0] - endWidthOffset, endPos[1] + endHeightOffset, endPos[0] - endWidthOffset, endPos[1] - endHeightOffset, endRotation, undefined, undefined, endPos, endPos); // bottom left to top right

	connector.moveTo(newStartX, newStartY);
	connector.lineTo(newEndX, newEndY);

	connector.startNode = startNode;
	connector.endNode = endNode;

	connector.cullable = true;

	pixiConnectors.push(pixiJS.stage.addChild(connector));
}
function drawAllConnectors() {
	pixiConnectorPairs = [];
	for (let i = pixiConnectors.length - 1; i >= 0; i--) pixiConnectors.pop().destroy(true);
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
					for (let j = 0, n2 = pixiNodes.length; j < n2; j++) {
						const pixiNode = pixiNodes[j];
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
						for (let k = 0, n3 = pixiNodes.length; k < n3; k++) {
							const pixiNode = pixiNodes[k];
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
function getCodexData(desiredCategories = null, desiredTypes = null) {
	let codexResult = {};
	for (const [codexCategoryName, codexCategory] of Object.entries(codexData)) {
		if (desiredCategories === null || desiredCategories.includes(codexCategoryName)) {
			for (const [codexTypeName, codexType] of Object.entries(codexCategory)) {
				if (desiredTypes === null || desiredTypes.includes(codexTypeName)) {
					if (!codexResult[codexTypeName]) codexResult[codexTypeName] = {};
					for (const [codexPowerName, codexPower] of Object.entries(codexType)) {
						codexResult[codexTypeName][codexPowerName] = codexPower;
					}
				}
			}
		}
	}
	return codexResult;
}
function convertNodeId(nodeData, groupName, decodeBase = false) {
	if (nodeData == undefined) {
		return undefined;
	} else if (groupName == PARAGON_BOARD) {
		if (nodeData.includes("paragon")) {
			if (decodeBase) return nodeData;
			const paragonArray = nodeData.split("-");
			const boardIndex = convertBase(paragonArray[1], 10, 62);
			const xPosition = convertBase(paragonArray[2], 10, 62);
			const yPosition = convertBase(paragonArray[3], 10, 62);
			return `p${boardIndex}${xPosition}${yPosition}`;
		} else {
			if (!decodeBase) return nodeData;
			const boardIndex = convertBase(nodeData.slice(1, -2), 62, 10);
			const xPosition = convertBase(nodeData.slice(-2, 1), 62, 10);
			const yPosition = convertBase(nodeData.slice(-1), 62, 10);
			return `paragon-${boardIndex}-${xPosition}-${yPosition}`;
		}
	} else if (groupName == CODEX_OF_POWER) {
		if (nodeData.includes("codex")) {
			if (decodeBase) return nodeData;
			const codexArray = nodeData.split("-");
			const codexId = convertBase(codexArray[1], 10, 62);
			return `c${codexId}`;
		} else {
			if (!decodeBase) return nodeData;
			const codexId = convertBase(nodeData.slice(1), 62, 10);
			return `codex-${codexId}`;
		}
	} else {
		return nodeData;
	}
}
function resizeSearchInput() {
	const targetWidth = $("#extraButtons2").width() - $("#classSelector").outerWidth(true) - $("#groupSelector").outerWidth(true) - 5;
	$("#searchInput").outerWidth(targetWidth);
}
function resetFrameTimer() {
	frameTimer = Date.now();
	pixiJS.ticker.maxFPS = 0;
}
function rebuildCanvas() {
	while (pixiJS.stage.children[0]) pixiJS.stage.children[0].destroy(true);

	pixiAllocatedPoints = new Map();
	pixiAllocatedParagonPoints = 0;

	pixiNodes = [];

	pixiConnectors = [];
	pixiConnectorPairs = [];

	pixiEventQueue = [];

	pixiBackground = PIXI.Sprite.from(PIXI.Texture.EMPTY);
	pixiTooltip = new PIXI.Container();
	pixiDragging = null;

	pixiJS.stage.pivot.set(0);
	pixiJS.stage.scale.set(1);

	stageScale = 1;
	curRenderScale = 1;
	newRenderScale = 1;

	oldWidth = 0;
	oldHeight = 0;

	drawBackground();
	drawAllNodes();
	drawAllConnectors();

	resizeCanvas();
	resetFrameTimer();

	$("#charLevel").text("1");
	$("#renownLevel").empty();
}
function resizeCanvas() {
	$("#header, #footer").css("display", window.innerHeight < 400 ? "none" : "block");
	let [newWidth, newHeight] = [window.innerWidth, window.innerHeight];
	if (oldWidth != newWidth || oldHeight != newHeight) {
		const offsetTop = $("#header").outerHeight(true);
		const offsetBottom = $("#extraInfo").outerHeight(true) + $("#extraButtons1").outerHeight(true) + $("#extraButtons2").outerHeight(true) + $("#footer").outerHeight(true);

		pixiJS.renderer.resize(minCanvasWidth, minCanvasHeight);
		[newWidth, newHeight] = [window.innerWidth, window.innerHeight];
		pixiJS.renderer.resize(newWidth, newHeight);

		for (let i = 0, n = pixiJS.stage.children.length; i < n; i++) {
			const pixiChild = pixiJS.stage.children[i];
			pixiChild.position.x = pixiChild.position.x - oldWidth * 0.5 + newWidth * 0.5;
			pixiChild.position.y = pixiChild.position.y - oldHeight * 0.5 + newHeight * 0.5;
		}
		[oldWidth, oldHeight] = [newWidth, newHeight];

		resetFrameTimer();

		const optimalClampText = window.innerWidth < 450 ? SMALL_CLAMP_TEXT : clampMode ? DISABLE_CLAMP_TEXT : ENABLE_CLAMP_TEXT;
		if ($("#clampButton").text() != optimalClampText) $("#clampButton").text(optimalClampText);

		if ($("#extraButtons2").width() > 0) $("#extraInfo").outerWidth($("#extraButtons2").width() - 5);
		resizeSearchInput();
		$("body").height(newHeight); // prevent undesirable mobile vertical scroll
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
	document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// read cookie settings immediately
$("#colorConnectorInput").val("#" + (readCookie("activeConnectorColor").length > 0 ? readCookie("activeConnectorColor") : activeColorDefault));
$("#colorNodeInput").val("#" + (readCookie("activeNodeColor").length > 0 ? readCookie("activeNodeColor") : activeColorDefault));
$("#clampButton").text(clampMode ? DISABLE_CLAMP_TEXT : ENABLE_CLAMP_TEXT);

// finalize the page once DOM has loaded
$(document).ready(function() {
	$("#colorConnectorInput").on("change", handleConnectorColorInput);
	$("#colorNodeInput").on("change", handleNodeColorInput);
	$("#colorButton").on("click mouseenter mouseleave", handleColorButton);

	$("#versionLabel").on("click", handleVersionLabel);
	handleVersionInterval();
	versionInterval = setInterval(handleVersionInterval, 900000);

	$("#resetButton").on("click", rebuildCanvas);
	$("#clampButton").on("click", handleClampButton);
	$("#saveButton").on("click", handleSaveButton);
	$("#reloadButton").on("click", handleReloadButton);
	$("#shareButton").on("click", handleShareButton);
	$("#classSelector").on("change", handleClassSelection);
	$("#barbarianSelect").on("click", () => $("#classSelector").val("barbarian").change());
	$("#druidSelect").on("click", () => $("#classSelector").val("druid").change());
	$("#necromancerSelect").on("click", () => $("#classSelector").val("necromancer").change());
	$("#rogueSelect").on("click", () => $("#classSelector").val("rogue").change());
	$("#sorcererSelect").on("click", () => $("#classSelector").val("sorcerer").change());
	$("#groupSelector").on("change", handleGroupSelection);
	$("#searchInput").on("keyup focus blur", handleSearchInput);

	$("#canvasContainer").append(pixiJS.renderer.view);
	$("#canvasContainer").on("wheel mousedown touchstart mousemove touchmove touchend contextmenu", handleCanvasEvent);
	$(window).on("resize", resizeCanvas);

	handleReloadButton();
	resizeCanvas();
	setInterval(handleIntervalEvent, 100);

	if (debugMode) {
		let drawCount = 0;
		const renderer = pixiJS.renderer;
		const drawElements = renderer.gl.drawElements;
		renderer.gl.drawElements = (...args) => {
			drawElements.call(renderer.gl, ...args);
			drawCount++;
		};

		pixiJS.ticker.add(deltaTime => {
			console.log(`drawCount: ${drawCount}`);
			drawCount = 0;
		});
	}
});