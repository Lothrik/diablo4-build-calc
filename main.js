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

// check browser for AVIF or WEBP support
async function supportsEncode() {
	if (!createImageBitmap) return "jpg";
	const avifData = "data:image/avif;base64,AAAAHGZ0eXBtaWYxAAAAAG1pZjFhdmlmbWlhZgAAAPFtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAABEAAAQABAAAAAAEVAAEAAAAeAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUltYWdlAAAAAHBpcHJwAAAAUWlwY28AAAAUaXNwZQAAAAAAAAABAAAAAQAAABBwYXNwAAAAAQAAAAEAAAAVYXYxQ4EgAAAKBzgABpAQ0AIAAAAQcGl4aQAAAAADCAgIAAAAF2lwbWEAAAAAAAAAAQABBAECg4QAAAAmbWRhdAoHOAAGkBDQAjITFkAAAEgAAAB5TNw9UxdXU6F6oA==",
		webpData = "data:image/webp;base64,UklGRhwAAABXRUJQVlA4TBAAAAAvAAAAEAfQpv5HmQMR0f8A",
		avifBlob = await fetch(avifData).then((r) => r.blob());
	return createImageBitmap(avifBlob)
		.then(() => "avif")
		.catch(async() => {
		const webpBlob = await fetch(webpData).then((r) => r.blob());
		return createImageBitmap(webpBlob).then(() => "webp")
	}).catch(() => "jpg");
}
(async () => { document.body.classList.add(await supportsEncode()); })();

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

// same as $.on() but moves the binding to the front of the queue
$.fn.onFirst = function (type, selector, data, fn) {
    this.each(function () {
        const $this = $(this);
        const types = type.split(" ");

        for (const t in types) {
            $this.on(types[t], selector, data, fn);

            const currentBindings = $._data(this, "events")[types[t]];
            if ($.isArray(currentBindings)) currentBindings.unshift(currentBindings.pop());
        }
    });
    return this;
};

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
const tooltipWidth = 680;

// evil magic variables that probably need to be replaced later to support multiple languages
const BUILD_LOAD_ERROR_PREFIX = `An error occurred while loading this build: "`;
const BUILD_LOAD_ERROR_SUFFIX = `"; have you tried reloading the page?`;
const DESIRED_ZOOM_LEVEL_PROMPT = "Please enter your desired UI zoom level (min: 0.25, max: 4):\nThis applies mostly to buttons, including the one you just clicked.";
const DESIRED_ZOOM_LEVEL_TOOLTIP_PROMPT = "Please enter your desired tooltip zoom level (min: 0.25, max: 4):\nThis applies exclusively to node tooltips drawn inside the canvas.";
const DATABASE_LINK_HTML = `<a href="./database/" target="_blank">[Click here if you're looking for datamined information.]</a>`;
const TOOLTIP_COPY_TEXT = "[Copy to Clipboard]";
const TOOLTIP_COPIED_TEXT = "[Copied!]";
const OPEN_MENU_TEXT = "Open Menu";
const CLOSE_MENU_TEXT = "Close Menu";
const COPY_BUILD_SUMMARY_TEXT = "Copy Summary";
const COPY_BUILD_SUMMARY_SUCCESS_TEXT = "Copied to Clipboard!";
const ADJUST_ZOOM_LEVEL_TEXT = "Adjust Zoom";
const SHOW_DETAILS_WINDOW_TEXT = "Show Details";
const HIDE_DETAILS_WINDOW_TEXT = "Hide Details";
const ENABLE_TOOLTIP_CLAMP_TEXT = "Enable Tooltip Clamping";
const DISABLE_TOOLTIP_CLAMP_TEXT = "Disable Tooltip Clamping";
const MATCH_FOUND_TEXT = " match found for query: ";
const MATCHES_FOUND_TEXT = " matches found for query: ";
const REQUIRED_POINTS_DESC = "Spend {requiredPoints} additional skill points to unlock.";
const ENCHANTMENT_EFFECT_DESC = "— Enchantment Effect —";
const COOLDOWN_PREFIX = "Cooldown: ";
const ULTIMATE = "Ultimate";
const KEY_PASSIVE = "Key Passive";
const SKILL_TREE = "Skill Tree";
const PARAGON_BOARD = "Paragon Board";
const PARAGON_BOARD_RESET_PROMPT_PREFIX = "Are you sure you want to reset ";
const PARAGON_BOARD_GRID_PROMPT_PREFIX = "Please select a grid location for the ";
const PARAGON_BOARD_GRID_PROMPT_SUFFIX = " Paragon Board:\n";
const PARAGON_BOARD_GRID_PROMPT_END = `If you're unsure what to enter, try 2 and look directly above [Start].`;
const PARAGON_BOARD_EQUIP_PROMPT_HEADER = "Please select a paragon board to attach to ";
const CURRENT_GRID_LOCATION_TEXT = "Current grid location";
const GLYPH_SELECT_PROMPT_PREFIX = "Please select a glyph to socket in ";
const GLYPH_SELECT_PROMPT_SUFFIX = "(You cannot socket the same glyph multiple times.)";
const ASSIGN_INDEX_LABEL_TEXT = "Assign Index";
const RESET_BOARD_LABEL_TEXT = "Reset Board";
const CODEX_OF_POWER = "Codex of Power";
const CODEX_OF_POWER_DESC_BEFORE = "Legendary aspects in this category can be applied to: ";
const CODEX_OF_POWER_DESC_AFTER = "Unique items are only listed here for convenience, and cannot have their powers extracted.";
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

// sorted object groups, mostly used for summary text processing

const sortedTreeGroupTypes = [
	"Basic",
	"Core",
	"Spirit", // Druid - 2
	"Defensive",
	"Macabre", // Necromancer - 3
	"Agility", // Rogue - 3
	"Brawling", // Barbarian - 4
	"Companion", // Druid - 4
	"Corruption", // Necromancer - 4
	"Subterfuge", // Rogue - 4
	"Conjuration", // Sorcerer - 4
	"Weapon Mastery", // Barbarian - 5
	"Wrath", // Druid - 5
	"Summoning", // Necromancer - 5
	"Imbuements", // Rogue - 5
	"Mastery", // Sorcerer - 5
	"Ultimate",
	KEY_PASSIVE
];

const sortedParagonNodeTypes = [
	"Normal",
	"Magic",
	"Rare",
	"Socket",
	"Legendary"
];

const sortedCodexCategoryTypes = [
	"Offensive",
	"Defensive",
	"Utility",
	"Resource",
	"Mobility",
	"Other",
	"Unknown"
];

/*
const NODE_CIRCLE_ACTIVE = PIXI.Texture.from("images/node_circle_active.png");
const NODE_CIRCLE_INACTIVE = PIXI.Texture.from("images/node_circle_inactive.png");
const NODE_DIAMOND_ACTIVE = PIXI.Texture.from("images/node_diamond_active.png");
const NODE_DIAMOND_INACTIVE = PIXI.Texture.from("images/node_diamond_inactive.png");
const NODE_SQUARE_ACTIVE = PIXI.Texture.from("images/node_square_active.png");
const NODE_SQUARE_INACTIVE = PIXI.Texture.from("images/node_square_inactive.png");
*/

var pixiTooltipZoomLevel = 1; // configured via handleZoomButton

const pixiScalingFloor = devicePixelRatio < 2 ? 0.15 : 0.1;
const pixiScalingCeiling = 2;

const fontFamily = $("body").css("fontFamily");
const fontFamilyOverride = fontFamily.includes("Homenaje") ? fontFamily : "Homenaje, " + fontFamily;
const textColor = 0xFFFFFF;//Number(rgba2hex($("body").css("color")));
//const backgroundColorHEX = rgba2hex($("#header").css("background-color"));
const backgroundColor = 0;//backgroundColorHEX.length == 8 ? Number(backgroundColorHEX) : backgroundColorHEX >>> 8;
const backgroundOpacity = 0.8;//backgroundColorHEX.length == 8 ? 1 : (backgroundColorHEX & 0xFF) / 255;
//const borderColorHEX = rgba2hex($("#header").css("border-color"));
const borderColor = 0xFFFFFF;//borderColorHEX.length == 8 ? Number(borderColorHEX) : borderColorHEX >>> 8;
const borderOpacity = 1;//borderColorHEX.length == 8 ? 1 : (borderColorHEX & 0xFF) / 255;
const activeConnectorColor = 0xFF0000;
const activeNodeColor = 0xFF0000;

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
var detailsMode = readCookie("detailsMode") == "true" ? true : false;
var clampMode = readCookie("clampMode") == "true" ? true : false;

var detailsWindowIsMoving = false;
var detailsPreviousPosition = null;

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

PIXI.settings.RENDER_OPTIONS.resolution = devicePixelRatio;
PIXI.settings.RENDER_OPTIONS.autoDensity = true;
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.NEAREST;

// construct pixiJS custom application
const pixiJS = (() => {
	try {
		return {
			"renderer": new PIXI.Renderer({
				backgroundAlpha: 0,
				height: minCanvasHeight,
				width: minCanvasWidth
			}),
			"stage": new PIXI.Container(),
			"ticker": new PIXI.Ticker()
		}
	} catch (e) {
		$("#classSelectBox").addClass("disabled");
		$("#modalBox").text(e).removeClass("disabled");
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
function setNodeStyleThick(curNode) {
	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	const searchQueryMatch = curNode.nodeData.get("searchQueryMatch");
	const desiredNodeStyle = `thick${allocatedPoints > 0 ? "-allocated" : ""}${searchQueryMatch ? "-invert" : ""}`;
	if (curNode.activeNodeStyle == desiredNodeStyle) return;

	let _lineStyleThickSquare = { ...lineStyleThickSquare };
	if (searchQueryMatch) {
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

	if (allocatedPoints > 0) curNode.children[1].style.fontWeight = "bold";
	if (curNode.children.length > 3) {
		if (allocatedPoints > 0) {
			curNode.children[2].style.fontWeight = "bold";
			curNode.children[3].children[0].style.fontWeight = "bold";
			curNode.children[4].children[0].style.fontWeight = "bold";
		}
		curNode.children[5].updateLineStyle(_lineStyleThickSquare);
	} else {
		curNode.children[2].updateLineStyle(_lineStyleThickSquare);
	}

	curNode.activeNodeStyle = desiredNodeStyle;
}
function setNodeStyleThin(curNode) {
	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	const searchQueryMatch = curNode.nodeData.get("searchQueryMatch");
	const desiredLineStyle = `thin${allocatedPoints == 0 ? "" : "-allocated"}${searchQueryMatch ? "-invert" : ""}`;
	if (curNode.activeNodeStyle == desiredLineStyle) return;

	let _lineStyleThinSquare = { ...lineStyleThinSquare };
	if (curNode.nodeData.get("colorOverride") != undefined) {
		_lineStyleThinSquare.color = curNode.nodeData.get("colorOverride");
	}

	if (allocatedPoints == 0) curNode.children[1].style.fontWeight = "normal";
	if (curNode.children.length > 3) {
		if (allocatedPoints == 0) {
			curNode.children[2].style.fontWeight = "normal";
			curNode.children[3].children[0].style.fontWeight = "normal";
			curNode.children[4].children[0].style.fontWeight = "normal";
		}
		if (!searchQueryMatch) curNode.children[5].updateLineStyle(_lineStyleThinSquare);
	} else {
		if (!searchQueryMatch) curNode.children[2].updateLineStyle(_lineStyleThinSquare);
	}

	curNode.activeNodeStyle = desiredLineStyle;
}

// event handlers
const classString = "#classSelector option:selected";
function handleLocaleSelection(event) {
	writeCookie("activeLocale", $("#localeSelector option:selected").val());
	redrawAllNodes(false);
	resetFrameTimer();
}
function handleTooltipCopy(event) {
	const tooltipChildren = pixiTooltip.children.length;
	if (tooltipChildren > 0) {
		let tooltipText = "";
		for (let i = 0; i < tooltipChildren; i++) {
			const tooltipChild = pixiTooltip.children[i];
			if (tooltipChild.text != undefined) tooltipText += tooltipChild.text;
		}
		console.log(tooltipText);
		if (event == undefined) {
			navigator.clipboard.writeText(tooltipText);
		} else {
			event.originalEvent.clipboardData.setData("text/plain", tooltipText);
			event.preventDefault();
		}
		const tooltipCopyContainer = pixiTooltip.children[3];
		if (tooltipCopyContainer.children.length > 0) {
			tooltipCopyContainer.children[0].text = TOOLTIP_COPIED_TEXT;
			tooltipCopyContainer.children[0].x = pixiTooltip.children[2].width - tooltipCopyContainer.children[0].width;
		}
	}
}
function handleSummaryButton(event) {
	let allocatedTreeNodes = {};
	let allocatedParagonNodes = {};
	let allocatedCodexNodes = {};
	let allocatedBoonNodes = {};
	let allocatedBookNodes = {};
	pixiNodes.forEach(pixiNode => {
		const nodeName = pixiNode.nodeName;
		const nodeDesc = pixiNode.nodeDesc;
		const groupName = pixiNode.groupName;
		const nodeData = pixiNode.nodeData;
		const allocatedPoints = nodeData.get("allocatedPoints");
		if (allocatedPoints) {
			if (pixiNode.groupName == PARAGON_BOARD) {
				const boardName = nodeData.get("_boardName");
				const nodeType = nodeData.get("nodeType");
				if (!(boardName in allocatedParagonNodes)) allocatedParagonNodes[boardName] = {};
				if (!(nodeType in allocatedParagonNodes[boardName])) allocatedParagonNodes[boardName][nodeType] = {};
				allocatedParagonNodes[boardName][nodeType][nodeName] = nodeDesc;
			} else if (groupName == CODEX_OF_POWER) {
				const codexCategory = nodeData.get("codexCategory");
				if (!(codexCategory in allocatedCodexNodes)) allocatedCodexNodes[codexCategory] = {};
				allocatedCodexNodes[codexCategory][nodeName] = {
					"nodeDesc": nodeDesc,
					"itemSlot": nodeData.get("itemSlot"),
					"itemType": nodeData.get("itemType")
				};
			} else if (groupName == SPIRIT_BOONS) {
				if (nodeDesc != SPIRIT_BOON_DESC) allocatedBoonNodes[nodeName] = nodeDesc;
			} else if (groupName == BOOK_OF_THE_DEAD) {
				allocatedBookNodes[nodeName] = nodeDesc;
			} else {
				if (!(groupName in allocatedTreeNodes)) allocatedTreeNodes[groupName] = {};
				const baseSkill = nodeData.get("baseSkill");
				if (baseSkill != undefined) {
					// active skill modifier
					if (!(baseSkill in allocatedTreeNodes[groupName])) allocatedTreeNodes[groupName][baseSkill] = {};
					if (!("activeModifiers" in allocatedTreeNodes[groupName][baseSkill])) allocatedTreeNodes[groupName][baseSkill]["activeModifiers"] = [];
					allocatedTreeNodes[groupName][baseSkill]["activeModifiers"].push(nodeName.split(` ${baseSkill}`)[0]);
				} else if (groupName == KEY_PASSIVE) {
					allocatedTreeNodes[groupName] = {
						"nodeName": nodeName,
						"nodeDesc": nodeDesc
					};
				} else {
					if (!(nodeName in allocatedTreeNodes[groupName])) allocatedTreeNodes[groupName][nodeName] = {};
					allocatedTreeNodes[groupName][nodeName] = {
						"allocatedPoints": allocatedPoints,
						"maxPoints": nodeData.get("maxPoints"),
						"isPassive": nodeData.get("maxPoints") == 3
					};
				}
			}
		}
	});
	let treeOutput = `[${SKILL_TREE}]:`;
	for (const groupName of sortedTreeGroupTypes) {
		const groupData = allocatedTreeNodes[groupName];
		if (groupData == undefined) continue;
		if (groupName == KEY_PASSIVE) {
			treeOutput += `\n\t[${KEY_PASSIVE}]:\n\t\t[${groupData.nodeName}]: allocated.`;
		} else {
			treeOutput += `\n\t[${groupName}]:`;
			for (const [nodeName, nodeData] of Object.entries(groupData)) {
				treeOutput += `\n\t\t[${nodeName}]${nodeData.maxPoints == 1 ? " allocated" : ": " + nodeData.allocatedPoints + "/" + nodeData.maxPoints + " points"}`;
				if ("activeModifiers" in nodeData && nodeData["activeModifiers"].length > 0) treeOutput += `. Modifiers: ${nodeData.activeModifiers.join(", ")}`;
				treeOutput += ".";
			}
		}
	}
	let boonOutput = `[${SPIRIT_BOONS}]:`;
	for (const [boonName, boonDesc] of Object.entries(allocatedBoonNodes)) boonOutput += `\n\t[${boonName}]: ${boonDesc}`;
	let bookOutput = `[${BOOK_OF_THE_DEAD}]:`;
	for (const [bookName, bookDesc] of Object.entries(allocatedBookNodes)) bookOutput += `\n\t[${bookName}]: ${bookDesc}`;
	let codexOutput = `[${CODEX_OF_POWER}]:`;
	for (const codexCategory of sortedCodexCategoryTypes) {
		const categoryData = allocatedCodexNodes[codexCategory];
		if (categoryData == undefined) continue;
		codexOutput += `\n\t[${codexCategory}]:`;
		for (const [nodeName, nodeData] of Object.entries(categoryData)) {
			if (nodeData.itemSlot == undefined) {
				codexOutput += `\n\t\t[${nodeName} (${nodeData.itemType})]: ${nodeData.nodeDesc.split("\n\n— Location —")[0].replace(/\n/g, " ").replace(/  /g, " ")}`;
			} else {
				codexOutput += `\n\t\t[${nodeName} (${nodeData.itemType} ${nodeData.itemSlot})]: ${nodeData.nodeDesc.split("\n\n— Location —")[0].replace(/\n/g, " ").replace(/  /g, " ")}`;
			}
		}
	}
	let paragonOutput = `[${PARAGON_BOARD}]:`;
	for (const [boardName, boardData] of Object.entries(allocatedParagonNodes)) {
		paragonOutput += `\n\t[${boardName}]:`;
		for (const nodeType of sortedParagonNodeTypes) {
			const nodeData = boardData[nodeType];
			if (nodeData == undefined) continue;
			const nodeTypeCount = Object.keys(nodeData).length;
			const nodeTypeSuffix = nodeTypeCount == 1 ? "node" : "nodes";
			if (["Normal", "Magic"].includes(nodeType)) {
				paragonOutput += `\n\t\t${nodeTypeCount} ${nodeType.toLowerCase()} ${nodeTypeSuffix} allocated.`;
			} else if (nodeType == "Rare") {
				paragonOutput += `\n\t\t${nodeTypeCount} ${nodeType.toLowerCase()} ${nodeTypeSuffix} allocated: [${Object.keys(nodeData).join("], [")}].`;
			} else if (nodeType == "Socket") {
				paragonOutput += `\n\t\t${nodeTypeCount} glyph ${nodeType.toLowerCase()} allocated.`;
			} else if (nodeType == "Legendary") {
				paragonOutput += `\n\t\t${nodeTypeCount} ${nodeType.toLowerCase()} ${nodeTypeSuffix} allocated: "${Object.values(nodeData)[0].split("\n\nTags:")[0]}"`;
			}
		}
	}
	let finalOutput = "";
	if (treeOutput.includes("\t")) finalOutput = treeOutput;
	const summaryItems = [boonOutput, bookOutput, codexOutput, paragonOutput];
	for (const summaryItem of summaryItems) {
		if (summaryItem.includes("\t")) {
			if (finalOutput.length > 0) finalOutput += "\n\n";
			finalOutput += summaryItem;
		}
	}
	if (finalOutput.length > 0) {
		navigator.clipboard.writeText(finalOutput);
		console.log(finalOutput);
		$("#summaryButton span").text(`[${COPY_BUILD_SUMMARY_SUCCESS_TEXT}]`);
		setTimeout(() => $("#summaryButton span").text(`[${COPY_BUILD_SUMMARY_TEXT}]`), 2000);
	}
}
function handleZoomButton(event) {
	const oldZoomLevel = Number(readCookie("zoomLevel", 1));
	const newZoomLevel = Number(prompt(DESIRED_ZOOM_LEVEL_PROMPT, isNaN(oldZoomLevel) ? "1" : oldZoomLevel));
	if (!isNaN(newZoomLevel) && newZoomLevel >= 0.25 && newZoomLevel <= 4) writeCookie("zoomLevel", newZoomLevel);

	const oldZoomLevelTooltip = Number(readCookie("zoomLevelTooltip", 1));
	const newZoomLevelTooltip = Number(prompt(DESIRED_ZOOM_LEVEL_TOOLTIP_PROMPT, isNaN(oldZoomLevelTooltip) ? "1" : oldZoomLevelTooltip));
	if (!isNaN(newZoomLevel) && newZoomLevelTooltip >= 0.25 && newZoomLevelTooltip <= 4) writeCookie("zoomLevelTooltip", newZoomLevelTooltip);

	applyZoomLevel();
}
function applyZoomLevel() {
	let zoomLevel = Number(readCookie("zoomLevel", 1));

	if (window.innerWidth < 450 * zoomLevel && zoomLevel > 1) zoomLevel = Math.max(window.innerWidth / 450, 1);
	if (isNaN(zoomLevel) || zoomLevel < 0.25 || zoomLevel > 4) zoomLevel = 1;

	$("#detailsWindow").css({ "transform": `scale(${zoomLevel})`, "transform-origin": "left top" });
	$("#extraFooter").css({ "transform": `scale(${Math.max(zoomLevel, 1)})`, "transform-origin": "center bottom" });
	$("#modalBox .select2-container").width((window.innerWidth * 0.9 - 22));

	const zoomLevelTooltip = Number(readCookie("zoomLevelTooltip", 1));
	if (!isNaN(zoomLevel) && zoomLevel >= 0.25 && zoomLevel <= 4) pixiTooltipZoomLevel = zoomLevelTooltip;

	repositionDetailsWindow();
}
function handleDetailsButton(event) {
	detailsMode = !detailsMode;
	$("#detailsButton span").text(`[${detailsMode ? HIDE_DETAILS_WINDOW_TEXT : SHOW_DETAILS_WINDOW_TEXT}]`);
	writeCookie("detailsMode", detailsMode);
	refreshDetailsWindow();
}
function refreshDetailsWindow() {
	const className = $(classString).val();
	if (detailsMode && className != "none") {
		let baseStr = 7;
		let baseInt = 7;
		let baseWill = 7;
		let baseDex = 7;
		switch (className) {
			case "barbarian":
				baseStr = 10;
				baseDex = 8;
				break;
			case "druid":
				baseWill = 10;
				baseInt = 8;
				break;
			case "necromancer":
				baseInt = 10;
				baseWill = 8;
				break;
			case "rogue":
				baseDex = 10;
				baseWill = 8;
				break;
			case "sorcerer":
				baseInt = 10;
				baseWill = 8;
				break;
		}
		const levelAttributes = Number($("#charLevel").text()) - 1;
		$("#detailsWindowContents").html(`<div>${Math.floor(baseStr + levelAttributes + paragonAttributeTotals["Strength"])} Strength</div>`
			+ `<div>${Math.floor(baseInt + levelAttributes + paragonAttributeTotals["Intelligence"])} Intelligence</div>`
			+ `<div>${Math.floor(baseWill + levelAttributes + paragonAttributeTotals["Willpower"])} Willpower</div>`
			+ `<div>${Math.floor(baseDex + levelAttributes + paragonAttributeTotals["Dexterity"])} Dexterity</div>`
			+ `<div>[Base + Level + Paragon]</div>`);
		$("#detailsWindow").removeClass("disabled");
		repositionDetailsWindow();
	} else {
		$("#detailsWindow").addClass("disabled");
		$("#detailsWindowContents").empty();
	}
}
function repositionDetailsWindow(detailsLeft = null, detailsTop = null) {
	const zoomLevel = Number(readCookie("zoomLevel", 1));
	const detailsWidth = $("#detailsWindow").outerWidth(true) * zoomLevel;
	const detailsHeight = $("#detailsWindow").outerHeight(true) * zoomLevel;

	detailsLeft = detailsLeft == null ? readCookie("detailsLeft", 0) : detailsLeft;
	detailsTop = detailsTop == null ? readCookie("detailsTop", 0) : detailsTop;

	$("#detailsWindow").css({
		"left": Math.max(Math.min(detailsLeft, $("body").width() - detailsWidth), 0),
		"top": Math.max(Math.min(detailsTop, $("body").height() - detailsHeight), 0)
	});
}
function handleClampButton(event) {
	clampMode = !clampMode;
	$("#clampButton span").text(`[${clampMode ? DISABLE_TOOLTIP_CLAMP_TEXT : ENABLE_TOOLTIP_CLAMP_TEXT}]`);
	writeCookie("clampMode", clampMode);

	repositionTooltip();
	resetFrameTimer();
	resizeSearchInput();
}
const localVersion = "0.8.1.39858-36";
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
		if (devicePixelRatio < 2) {
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
		if (devicePixelRatio < 2) redrawAllNodes(true);
	}
}
function handleDocumentEvent(event) {
	if (detailsWindowIsMoving) {
		switch (event.type) {
			case "mousemove":
			case "touchmove":
				let currentPosition;
				if (event.type == "mousemove") {
					currentPosition = [detailsPreviousPosition[0] - event.clientX, detailsPreviousPosition[1] - event.clientY];
					detailsPreviousPosition = [event.clientX, event.clientY];
				} else if (event.type == "touchmove") {
					const touchEvent = event.originalEvent.touches[0];
					currentPosition = [detailsPreviousPosition[0] - touchEvent.clientX, detailsPreviousPosition[1] - touchEvent.clientY];
					detailsPreviousPosition = [touchEvent.clientX, touchEvent.clientY];
				}

				let curOffset = $("#detailsWindow").offset();
				repositionDetailsWindow(curOffset.left - currentPosition[0], curOffset.top - currentPosition[1]);

				curOffset = $("#detailsWindow").offset();
				writeCookie("detailsLeft", curOffset.left);
				writeCookie("detailsTop", curOffset.top);
				break;
			case "mouseup":
			case "touchend":
				detailsWindowIsMoving = false;
				$("#detailsWindowHeader").removeAttr("style");
				detailsPreviousPosition = null;
				break;
		}
	}
}
function handleDetailsEvent(event) {
	detailsWindowIsMoving = true;
	$("#detailsWindowHeader").css("cursor", "grabbing");
	if (event.type == "mousedown") {
		detailsPreviousPosition = [event.clientX, event.clientY];
	} else if (event.type == "touchstart") {
		const touchEvent = event.originalEvent.touches[0];
		detailsPreviousPosition = [touchEvent.clientX, touchEvent.clientY];
	}
}
function handleCanvasEvent(event) {
	switch (event.type) {
		case "mousedown":
		case "touchstart":
			$("#searchInput").blur();
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
			if (pixiTooltip.children.length > 0) drawTooltip(pixiNodes[pixiTooltip.nodeIndex]);
		} else {
			stageScale = pixiJS.stage.scale.x;
		}
	}
	resetFrameTimer();
	event.preventDefault();
}
function handleClassSelection(event, postHookFunction = null) {
	const classText = $(classString).text();
	if (classText != $("#className").text()) {
		$("#classSelectBox").addClass("disabled");
		if (classText != "None") $("#modalBox").text("[Loading...]").removeClass("disabled");
		setTimeout(() => {
			$("#className").text(classText);
			if (classText == "None") {
				$("#header h2, #versionLabel, #extraButtons1, #extraButtons2, #groupSelector, #searchInput").addClass("disabled");
				$("#classSelectBox").removeClass("disabled");
				$("#extraInfo").html(DATABASE_LINK_HTML).css("width", "auto").removeClass("disabled");
				$("#groupSelector").empty();
				$("#searchInput").removeAttr("style");
			} else {
				$("#header h2, #versionLabel, #extraButtons1, #extraButtons2, #groupSelector, #searchInput").removeClass("disabled");
				$("#classSelectBox").addClass("disabled");
				closeExtraInfo();
			}
			rebuildCanvas();
			$("#modalBox").addClass("disabled");
			if (typeof postHookFunction == "function") setTimeout(postHookFunction, 50);
		}, 50);
	} else if (typeof postHookFunction == "function") postHookFunction();
}
function handleGroupSelection(event) {
	const newGroupName = $("#groupSelector option:selected").text();
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
			let nodeHeader = pixiNode.nodeData.get("nameOverride");
			if (nodeHeader == undefined) {
				nodeHeader = pixiNode.nodeName;
				const itemSlot = pixiNode.nodeData.get("itemSlot");
				const itemType = pixiNode.nodeData.get("itemType");
				if (itemSlot != undefined) {
					nodeHeader += ` (${itemType} ${itemSlot})`;
				} else if (itemType != undefined) {
					nodeHeader += ` (${itemType})`;
				}
			}
			if (nodeHeader.toLowerCase().includes(newSearchText)) {
				pixiNode.nodeData.set("searchQueryMatch", true);
				setNodeStyleThick(pixiNode);
				return true;
			} else {
				// failed to find `newSearchText` in any `nodeName`, trying `nodeDesc` next
				const nodeDesc = "localizedDesc" in pixiNode ? pixiNode.localizedDesc : pixiNode.nodeDesc;
				if (nodeDesc != undefined && nodeDesc.length > 0 && nodeDesc.toLowerCase().includes(newSearchText)) {
					pixiNode.nodeData.set("searchQueryMatch", true);
					setNodeStyleThick(pixiNode);
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
			// paragon board nodes require some additional math to determine the correct position, as they can move and rotate
			let [nodeX, nodeY] = [nodeMatch.x, nodeMatch.y];
			if (nodeMatch.nodeData.get("_boardName") != undefined) {
				[nodeX, nodeY] = rotateAngle(0, 0, nodeMatch.x, nodeMatch.y, nodeMatch.angle);
				[nodeX, nodeY] = [nodeX + nodeMatch.parent.x, nodeY + nodeMatch.parent.y];
			}

			pixiJS.stage.pivot.set(nodeX - oldWidth / pixiJS.stage.scale.x * 0.5, nodeY - oldHeight / pixiJS.stage.scale.y * 0.5);
			drawTooltip(nodeMatch);
		}
	}
	oldSearchText = newSearchText;
	resetFrameTimer();

	if (event.type == "blur" || nodeCount == 0) {
		const extraInfoHTML = $("#extraInfo").html();
		if ([MATCH_FOUND_TEXT, MATCHES_FOUND_TEXT].some(matchText => extraInfoHTML.includes(matchText))) closeExtraInfo();
	} else {
		$("#extraInfo").html("<span>" + nodeCount + (nodeCount == 1 ? MATCH_FOUND_TEXT : MATCHES_FOUND_TEXT) + "`" + newSearchText + "`.</span>").removeClass("disabled");
	}
}
function handleMenuButton(event) {
	if ($("#menuButton").text() == OPEN_MENU_TEXT) {
		$("#extraInfo").html(`<div id="detailsButton"><img src="images/list.svg">&nbsp;<span>[${detailsMode ? HIDE_DETAILS_WINDOW_TEXT : SHOW_DETAILS_WINDOW_TEXT}]</span></div>`
			+ `<div id="summaryButton"><img src="images/sigma.svg">&nbsp;<span>[${COPY_BUILD_SUMMARY_TEXT}]</span></div>`
			+ `<div id="zoomButton"><img src="images/zoom.svg">&nbsp;<span>[${ADJUST_ZOOM_LEVEL_TEXT}]</span></div>`
			+ `<div class="break"></div>`
			+ `<div id="clampButton"><img src="images/clamp.svg">&nbsp;<span>[${clampMode ? DISABLE_TOOLTIP_CLAMP_TEXT : ENABLE_TOOLTIP_CLAMP_TEXT}]</span></div>`)
			.removeClass("disabled");

		$("#detailsButton").on("click", handleDetailsButton);
		$("#zoomButton").on("click", handleZoomButton);
		$("#summaryButton").on("click", handleSummaryButton);
		$("#clampButton").on("click", handleClampButton);

		$("#menuButton").text(CLOSE_MENU_TEXT);
	} else {
		closeExtraInfo();
	}
}
function closeExtraInfo() {
	$("#extraInfo").empty().addClass("disabled");
	$("#menuButton").text(OPEN_MENU_TEXT);
}
function handleSaveButton() {
	const className = $(classString).val();
	if (className == "none") {
		window.location.replace(window.location.href.split(/[#?&]/)[0]);
	} else {
		let nodeData = { className: className, boardData: [] };
		if (Object.keys(paragonBoardGridData).length > 0) nodeData.boardData[0] = paragonBoardGridData;
		if (Object.keys(paragonBoardRotationData).length > 0) nodeData.boardData[1] = paragonBoardRotationData;
		if (Object.keys(paragonBoardEquipIndices).length > 0) nodeData.boardData[2] = paragonBoardEquipIndices;
		if (Object.keys(paragonBoardGlyphData).length > 0) nodeData.boardData[3] = paragonBoardGlyphData;
		if (Object.keys(paragonBoardGlyphRankData).length > 0) nodeData.boardData[4] = paragonBoardGlyphRankData;

		for (let i = 0, n = nodeData.boardData.length; i < n; i++) if (nodeData.boardData[i] == undefined) nodeData.boardData[i] = 0;

		if (nodeData.boardData.length == 0) {
			delete nodeData.boardData;
		} else {
			nodeData.boardData = LZString.compressToEncodedURIComponent(JSON.stringify(nodeData.boardData).replace(/"/g, ""));
		}

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
	const className = $(classString).val();
	const urlHash = window.location.hash.replace("#", "").split(/[?&]/)[0];

	let nodeData = { className: className };
	if (urlHash.length > 0) {
		const jsonData = LZString.decompressFromEncodedURIComponent(urlHash);
		// valid JSON always requires quotes around key names; we strip those (and object "1-values") to increase compression
		nodeData = jsonData.includes('"') ? JSON.parse(jsonData) :
			JSON.parse(jsonData
				.replace(/([,\[\]{}])([^:,\[\]{}]+)/g, '$1"$2"')					// restore key double quotes
				.replace(/","/g, '":1,"') 											// restore object "1-values"
				.replace(/("(?:className|boardData)":)([^,\[\]{}]+)/g, '$1"$2"')	// restore class name and paragon board data double quotes
				.replace(/(,"[^:,]+")}/g, '$1:1}')									// restore final object value
			);
	}

	if (nodeData.className == "none") {
		$("#classSelectBox").removeClass("disabled");
		$("#extraInfo").html(DATABASE_LINK_HTML).css("width", "auto").removeClass("disabled");
	} else {
		$("#classSelector").val(nodeData.className);
		handleClassSelection(null, finishLoading);

		function finishLoading() {
			if ("boardData" in nodeData) {
				nodeData.boardData = JSON.parse(LZString.decompressFromEncodedURIComponent(nodeData.boardData)
					.replace(/([,\[\]{}])([^:,\[\]{}]+)/g, '$1"$2"')
					.replace(/:([\w]+)(,|})/g, ':"$1"$2'));

				for (const [boardIndex, gridLocation] of Object.entries(paragonBoardGridData)) moveParagonBoard(Number(boardIndex), 0);
				if (nodeData.boardData.length > 0) for (const [boardIndex, gridLocation] of Object.entries(nodeData.boardData[0])) moveParagonBoard(Number(boardIndex), gridLocation);

				for (const [boardIndex, rotationAngle] of Object.entries(paragonBoardRotationData)) rotateParagonBoard(Number(boardIndex), 0);
				if (nodeData.boardData.length > 1) for (const [boardIndex, rotationAngle] of Object.entries(nodeData.boardData[1])) rotateParagonBoard(Number(boardIndex), Number(rotationAngle));

				for (const [boardIndex, equipIndex] of Object.entries(paragonBoardEquipIndices)) setParagonBoardEquipIndex(Number(boardIndex), 0);
				if (nodeData.boardData.length > 2) for (const [boardIndex, equipIndex] of Object.entries(nodeData.boardData[2])) setParagonBoardEquipIndex(Number(boardIndex), Number(equipIndex));

				paragonBoardGlyphData = {};
				if (nodeData.boardData.length > 3) for (const [boardIndex, glyphIndex] of Object.entries(nodeData.boardData[3])) paragonBoardGlyphData[Number(boardIndex)] = Number(glyphIndex);

				paragonBoardGlyphRankData = {};
				if (nodeData.boardData.length > 4) for (const [boardIndex, glyphRank] of Object.entries(nodeData.boardData[4])) paragonBoardGlyphRankData[Number(boardIndex)] = Number(glyphRank);

				delete nodeData.boardData;
			}

			delete nodeData.className;

			function compareNodes(firstNode, secondNode) {
				let firstNodeId = firstNode.nodeData.get("id");
				let firstSavedPoints = 0;
				if (firstNodeId in nodeData) {
					firstSavedPoints = nodeData[firstNodeId];
				} else {
					firstNodeId = convertNodeId(firstNodeId, firstNode.groupName);
					if (firstNodeId in nodeData) firstSavedPoints = nodeData[firstNodeId];
				}

				let secondNodeId = secondNode.nodeData.get("id");
				let secondSavedPoints = 0;
				if (secondNodeId in nodeData) {
					secondSavedPoints = nodeData[secondNodeId];
				} else {
					secondNodeId = convertNodeId(secondNodeId, secondNode.groupName);
					if (secondNodeId in nodeData) secondSavedPoints = nodeData[secondNodeId];
				}

				return firstSavedPoints - secondSavedPoints;
			}

			function processNode(curNode) {
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

			// sort nodes based on their saved points, so nodes get deallocated first (to free up unused points) before allocating new nodes
			const sortedNodes = [...pixiNodes].filter(pixiNode => pixiNode.groupName != undefined).sort(compareNodes);
			for (let i = 0, n = sortedNodes.length; i < n; i++) processNode(sortedNodes[i]);

			// recalculate paragon attribute totals
			paragonAttributeTotals = {
				"Strength": 0,
				"Intelligence": 0,
				"Willpower": 0,
				"Dexterity": 0
			};
			for (const pixiNode of pixiNodes) {
				if (pixiNode.groupName != PARAGON_BOARD) continue;
				const allocatedPoints = pixiNode.nodeData.get("allocatedPoints");
				updateParagonAttributes(pixiNode, allocatedPoints);
			}

			updateCharacterLevel();
			resetFrameTimer();
		}
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
	$(pixiJS.renderer.view).css("cursor", pixiTooltip.children.length > 0 ? pixiNodes[pixiTooltip.nodeIndex].cursor : "auto");
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
			if ($(pixiJS.renderer.view).css("cursor") != "move") $(pixiJS.renderer.view).css("cursor", "move");
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
	if ($("#fadeOverlay").hasClass("disabled")) drawTooltip(this);
}
function onMouseOut(event) {
	if (!pixiDragging) eraseTooltip();
}
function resetParagonBoard(boardHeader) {
	if (!confirm(`${PARAGON_BOARD_RESET_PROMPT_PREFIX}[${boardHeader.nodeName}]?`)) return;

	const boardIndex = boardHeader.nodeData.get("boardIndex");
	const boardContainer = boardHeader.nodeData.get("boardContainer");

	for (let i = 0, n = boardContainer.children.length; i < n; i++) handleMinusButton(boardContainer.children[i]);

	/*moveParagonBoard(boardIndex, 0);
	rotateParagonBoard(boardIndex, 0);
	setParagonBoardEquipIndex(boardIndex, 0);*/

	delete paragonBoardGlyphData[boardIndex];
	delete paragonBoardGlyphRankData[boardIndex];
	boardHeader.nodeData.get("glyphSocket").nodeData.delete("nameOverride");
	if (pixiTooltip.children.length > 0) eraseTooltip(); // force tooltip erase, mostly for mobile
}
const paragonBoardGridCoordinates = {
	"E": [-6500, -16850], "F": [-3250, -16850], "G": [0, -16850], "H": [3250, -16850], "I": [6500, -16850],
	"D": [-6500, -13500], "J": [-3250, -13500], "K": [0, -13500], "L": [3250, -13500], "M": [6500, -13500],
	"C": [-6500, -10150], "7": [-3250, -10150], "8": [0, -10150], "9": [3250, -10150], "N": [6500, -10150],
	"B": [-6500,  -6800], "4": [-3250,  -6800], "5": [0,  -6800], "6": [3250,  -6800], "O": [6500,  -6800],
	"A": [-6500,  -3450], "1": [-3250,  -3450], "2": [0,  -3450], "3": [3250,  -3450], "P": [6500,  -3450],
};
let paragonBoardGridData = {};
function moveParagonBoard(boardIndex, forcedGridLocation = null) {
	const boardHeader = pixiNodes.find(pixiNode => pixiNode.nodeData.get("boardIndex") == boardIndex);
	const boardContainer = boardHeader.nodeData.get("boardContainer");

	let gridLocation;
	if (forcedGridLocation == null) {
		const currentGridLocation = paragonBoardGridData[boardIndex];
		const promptInput = prompt(PARAGON_BOARD_GRID_PROMPT_PREFIX + `[${boardHeader.nodeName}]` + PARAGON_BOARD_GRID_PROMPT_SUFFIX
			+ "E F G H I\n"
			+ "D J K L M\n"
			+ "C 7 8 9 N\n"
			+ "B 4 5 6 O\n"
			+ "A 1 2 3 P\n"
			+ PARAGON_BOARD_GRID_PROMPT_END, currentGridLocation == undefined ? "0" : currentGridLocation);
		if (promptInput == null) return;
		gridLocation = String(promptInput).toUpperCase();
	} else {
		gridLocation = String(forcedGridLocation).toUpperCase();
	}

	if (!isNaN(gridLocation)) gridLocation = Number(gridLocation);
	if (gridLocation == paragonBoardGridData[boardIndex]) return;

	let gridPosition = new PIXI.Point(0, 0);
	if (gridLocation in paragonBoardGridCoordinates) {
		gridPosition.x = paragonBoardGridCoordinates[gridLocation][0] - boardContainer.startPosition.x;
		gridPosition.y = paragonBoardGridCoordinates[gridLocation][1];
	}

	const oldGridIndex = Object.keys(paragonBoardGridData).find(key => paragonBoardGridData[key] == gridLocation);
	if (oldGridIndex != undefined) moveParagonBoard(oldGridIndex, 0);

	for (const boardObject of [boardHeader, boardContainer]) {
		if (boardObject.position.offsetX == undefined) boardObject.position.offsetX = 0;
		if (boardObject.position.offsetY == undefined) boardObject.position.offsetY = 0;
		boardObject.position.x = boardObject.position.x - boardObject.position.offsetX + gridPosition.x;
		boardObject.position.y = boardObject.position.y - boardObject.position.offsetY + gridPosition.y;
		boardObject.position.offsetX = gridPosition.x;
		boardObject.position.offsetY = gridPosition.y;
	}

	delete paragonBoardGridData[boardIndex];
	boardContainer.position.gridLocation = gridLocation in paragonBoardGridCoordinates ? gridLocation : undefined;
	if (gridLocation in paragonBoardGridCoordinates) paragonBoardGridData[boardIndex] = gridLocation;
}
let paragonBoardRotationData = {};
function rotateParagonBoard(boardIndex, rotationAngle, relativeAngle = false) {
	const boardHeader = pixiNodes.find(pixiNode => pixiNode.nodeData.get("boardIndex") == boardIndex);
	const boardContainer = boardHeader.nodeData.get("boardContainer");

	boardContainer.angle = (rotationAngle + (relativeAngle ? boardContainer.angle : 0)) % 360;
	boardContainer.children.forEach(pixiNode => pixiNode.angle = -boardContainer.angle);
	if (boardContainer.angle == 0) {
		delete paragonBoardRotationData[boardIndex];
	} else {
		paragonBoardRotationData[boardIndex] = boardContainer.angle;
	}
}
let paragonBoardEquipIndices = {};
function setParagonBoardEquipIndex(boardIndex, forcedEquipIndex = null) {
	const boardHeader = pixiNodes.find(pixiNode => pixiNode.nodeData.get("boardIndex") == boardIndex);
	const boardContainer = boardHeader.nodeData.get("boardContainer");
	let equipIndex;
	if (forcedEquipIndex == null) {
		const currentEquipIndex = paragonBoardEquipIndices[boardIndex];
		const promptInput = prompt(`You are currently setting the "equip index" for [${boardHeader.nodeName}].\n\nThis index determines the attribute requirements for additional bonuses listed on rare nodes.\n\nBoards you equip later will have higher attribute requirements.\n\nIf this is the first paragon board you plan to equip, you should set its "equip index" to 1:`, currentEquipIndex == undefined ? "0" : currentEquipIndex);
		if (promptInput == null) return;
		equipIndex = promptInput;
	} else {
		equipIndex = forcedEquipIndex;
	}

	if (isNaN(equipIndex)) return;
	equipIndex = parseInt(equipIndex);

	if (equipIndex < 1 || equipIndex > 9) {
		delete paragonBoardEquipIndices[boardIndex];
	} else {
		paragonBoardEquipIndices[boardIndex] = equipIndex;
	}
}
let paragonBoardGlyphData = {};
let paragonBoardGlyphRankData = {};
function equipParagonBoardGlyph(curNode) {
	if (curNode.nodeData.get("allocatedPoints") == 0 && getUnusedPoints(true) == 0) return;
	handlePlusButton(curNode);

	const activeLocale = readCookie("activeLocale", "enUS");
	const boardIndex = curNode.nodeData.get("_boardIndex");
	const boardHeader = curNode.nodeData.get("_boardHeader");
	const boardContainer = boardHeader.nodeData.get("boardContainer");
	const className = $(classString).val();
	const classText = className[0].toUpperCase() + className.slice(1);

	const paragonGlyphs = paragonData[classText]["Glyph"];
	const sortedGlyphKeys = Object.keys(paragonGlyphs).sort((a, b) => {
		const aName = paragonGlyphs[a].name;
		const bName = paragonGlyphs[b].name;
		return aName.localeCompare(bName);
	});
	let modalOptions = "";
	for (const glyphName of sortedGlyphKeys) {
		const glyphData = paragonGlyphs[glyphName];
		if (glyphName.includes("_Barb") && classText != "Barbarian") continue;
		if (glyphName.includes("_Druid") && classText != "Druid") continue;
		if (glyphName.includes("_Necro") && classText != "Necromancer") continue;
		if (glyphName.includes("_Rogue") && classText != "Rogue") continue;
		if (glyphName.includes("_Sorc") && classText != "Sorcerer") continue;
		if (glyphName + "_Barb" in paragonGlyphs && classText == "Barbarian") continue;
		if (glyphName + "_Druid" in paragonGlyphs && classText == "Druid")  continue;
		if (glyphName + "_Necro" in paragonGlyphs && classText == "Necromancer") continue;
		if (glyphName + "_Rogue" in paragonGlyphs && classText == "Rogue") continue;
		if (glyphName + "_Sorc" in paragonGlyphs && classText == "Sorcerer") continue;
		const glyphIndex = Number(glyphName.match(/\d+/)[0]);
		const glyphBoard = Object.keys(paragonBoardGlyphData).find(key => paragonBoardGlyphData[key] == glyphIndex);
		const localizedGlyphName = activeLocale in glyphData.nameLocalized ? glyphData.nameLocalized[activeLocale] : glyphData.name;
		const localizedGlyphBonus = activeLocale in glyphData.bonusLocalized ? glyphData.bonusLocalized[activeLocale] : glyphData.bonus;
		if (glyphBoard == undefined) {
			modalOptions += `<option value="${glyphIndex}">${localizedGlyphName} &mdash; ${localizedGlyphBonus}</option>`;
		} else {
			const socketHeader = pixiNodes.find(pixiNode => pixiNode.nodeData.get("boardIndex") == glyphBoard);
			modalOptions += `<option value="${glyphIndex}">${localizedGlyphName} &mdash; ${localizedGlyphBonus} (Socketed in: [${socketHeader.nodeName}])</option>`;
		}
	}

	$("#fadeOverlay").removeClass("disabled");
	$("#modalBox").html(`<div id="modalDiv1">${GLYPH_SELECT_PROMPT_PREFIX}[${boardHeader.nodeName}]:</div>`
		+ `<div id="modalDiv2"><select id="modalSelect">${modalOptions}</select></div>`
		+ `<div id="modalDiv3"><input type="range" min="1" max="20" value="1" id="modalSlider"></div>`
		+ `<div id="modalDiv4"></div>`
		+ `<div id="modalDiv5">${GLYPH_SELECT_PROMPT_SUFFIX}</div>`
		+ `<div id="modalDiv6"><button id="modalConfirm" type="button">Confirm</button> `
		+ `<button id="modalCancel" type="button">Cancel</button></div>`).removeClass("disabled");

	$("#modalSelect").select2({
		dropdownParent: $("#modalDiv2")
	});
	$("#modalBox").on("select2:open", e => {
		$(".select2-search__field[aria-controls='select2-" + e.target.id + "-results']").each((key, value) => value.focus())
	})
	applyZoomLevel(); // hacky workaround for select2 transform bug

	function updateGlyphDescText() {
		const glyphIndex = Number($("#modalSelect").val());
		const glyphRank = Number($("#modalSlider").val());
		const glyphData = getGlyphData(glyphIndex);
		const localizedGlyphDesc = (activeLocale in glyphData.descLocalized ? glyphData.descLocalized[activeLocale] : glyphData.desc)
			.replace(/{(.+?)}/g, (matchString, captureString) => {
			const outputString = captureString.split("/");
			return outputString[glyphRank > 0 ? Math.min(glyphRank, outputString.length) - 1 : 0];
		});
		$("#modalDiv4").text(`Rank ${glyphRank}: ${localizedGlyphDesc}`);
	}

	$("#modalSelect").on("change", updateGlyphDescText);
	$("#modalSlider").on("change", updateGlyphDescText);

	if (paragonBoardGlyphData[boardIndex] != undefined) $("#modalSelect").val(paragonBoardGlyphData[boardIndex]).trigger("change");
	if (paragonBoardGlyphRankData[boardIndex] != undefined) $("#modalSlider").val(paragonBoardGlyphRankData[boardIndex]).trigger("change");
	updateGlyphDescText();

	$("#modalConfirm").on("click", () => {
		updateGlyphBonusesFromNodes(boardHeader, -1);

		const glyphIndex = Number($("#modalSelect").val());
		paragonBoardGlyphData[boardIndex] = glyphIndex;

		const glyphRank = Number($("#modalSlider").val());
		if (glyphRank > 1) {
			paragonBoardGlyphRankData[boardIndex] = glyphRank;
		} else {
			delete paragonBoardGlyphRankData[boardIndex];
		}

		updateGlyphBonusesFromNodes(boardHeader, 1);

		if (pixiTooltip.children.length > 0) drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true); // force tooltip redraw, mostly for mobile

		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
	$("#modalCancel").on("click", () => {
		updateGlyphBonusesFromNodes(boardHeader, -1);

		delete paragonBoardGlyphData[boardIndex];
		delete paragonBoardGlyphRankData[boardIndex];
		curNode.nodeData.delete("nameOverride");
		handleMinusButton(curNode);

		updateGlyphBonusesFromNodes(boardHeader, 1);

		if (pixiTooltip.children.length > 0) eraseTooltip(); // force tooltip erase, mostly for mobile

		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
}
function equipParagonBoard(curNode) {
	const nodeData = curNode.nodeData;

	const boardIndex = nodeData.get("_boardIndex");
	const gridLocations = [["E", "F", "G", "H", "I"],
						   ["D", "J", "K", "L", "M"],
						   ["C", "7", "8", "9", "N"],
						   ["B", "4", "5", "6", "O"],
						   ["A", "1", "2", "3", "P"]];
	let gridTarget = null;
	if (boardIndex == 0) {
		gridTarget = gridLocations[4][2];
	} else if (boardIndex in paragonBoardGridData) {
		const gridLocation = String(paragonBoardGridData[boardIndex]);
		const _nodeId = nodeData.get("id").split("-");
		let xPosition = Number(_nodeId[_nodeId.length - 2]);
		let yPosition = Number(_nodeId[_nodeId.length - 1]);
		[xPosition, yPosition] = rotateAngle(10, 10, xPosition, yPosition, curNode.angle);
		[xPosition, yPosition] = [parseInt(xPosition), parseInt(yPosition)];
		const gridX = gridLocations.findIndex(gridRow => gridRow.indexOf(gridLocation) >= 0);
		const gridY = gridLocations[gridX].indexOf(gridLocation);
		if (xPosition == 0) {
			if (gridY > 0) gridTarget = gridLocations[gridX][gridY - 1];
		} else if (xPosition == 20) {
			if (gridY < 4) gridTarget = gridLocations[gridX][gridY + 1];
		} else if (yPosition == 0) {
			if (gridX > 0) gridTarget = gridLocations[gridX - 1][gridY];
		} else {
			if (gridX < 4) gridTarget = gridLocations[gridX + 1][gridY];
		}
	}
	if (gridTarget == null) return;

	const gridBoardIndex = Object.keys(paragonBoardGridData).find(key => paragonBoardGridData[key] == gridTarget);
	if (gridBoardIndex != null) return;

	const className = $(classString).val();
	const classText = className[0].toUpperCase() + className.slice(1);

	const paragonBoards = Object.keys(paragonData[classText]["Board"]);
	let modalOptions = "";
	let unsortedIndex = 0;
	for (const boardName of paragonBoards) {
		if (![0, boardIndex].includes(unsortedIndex)) {
			const gridLocation = paragonBoardGridData[unsortedIndex];
			const boardHeader = pixiNodes.find(pixiNode => pixiNode.nodeData.get("boardIndex") == unsortedIndex);
			const boardContainer = boardHeader.nodeData.get("boardContainer");
			const legendaryNode = boardContainer.children.find(pixiNode => pixiNode.nodeData.get("nodeType") == "Legendary");
			const legendaryDesc = legendaryNode.nodeDesc.split("\n")[0];
			if (gridLocation == undefined) {
				modalOptions += `<option value="${unsortedIndex}">${boardName} &mdash; ${legendaryDesc}</option>`;
			} else {
				modalOptions += `<option value="${unsortedIndex}">${boardName} &mdash; ${legendaryDesc} (${CURRENT_GRID_LOCATION_TEXT}: [${gridLocation}])</option>`;
			}
		}
		unsortedIndex++;
	}

	$("#fadeOverlay").removeClass("disabled");
	$("#modalBox").html(`<div id="modalDiv1">${PARAGON_BOARD_EQUIP_PROMPT_HEADER}[${nodeData.get("_boardHeader").nodeName}]:</div>`
		+ `<div id="modalDiv2"><select id="modalSelect">${modalOptions}</select></div>`
		+ `<div id="modalDiv6"><button id="modalConfirm" type="button">Confirm</button> `
		+ `<button id="modalCancel" type="button">Cancel</button></div>`).removeClass("disabled");

	$("#modalSelect").select2({
		dropdownParent: $("#modalDiv2")
	});
	$("#modalBox").on("select2:open", e => {
		$(".select2-search__field[aria-controls='select2-" + e.target.id + "-results']").each((key, value) => value.focus())
	})
	applyZoomLevel(); // hacky workaround for select2 transform bug

	$("#modalConfirm").on("click", () => {
		moveParagonBoard($("#modalSelect").val(), gridTarget);
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
	$("#modalCancel").on("click", () => {
		handleMinusButton(curNode);
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
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

	refreshDetailsWindow();
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
	if ([ULTIMATE, KEY_PASSIVE, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(curNode.groupName)) {
		return true;
	} else if (curNode.groupName == PARAGON_BOARD) {
		return getUnusedPoints(true) > 0;
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

		const shapeType = curNode.nodeData.get("shapeType");
		if (newPoints == 0) {
			/*if (curNode.children[0].children.length > 1) {
				if (shapeType == "circle") {
					curNode.children[0].children[1].texture = NODE_CIRCLE_INACTIVE;
				} else if (shapeType == "diamond") {
					curNode.children[0].children[1].texture = NODE_DIAMOND_INACTIVE;
				} else {
					curNode.children[0].children[1].texture = NODE_SQUARE_INACTIVE;
				}
			}*/
			setNodeStyleThin(curNode);
		} else {
			/*if (curNode.children[0].children.length > 1) {
				if (shapeType == "circle") {
					curNode.children[0].children[1].texture = NODE_CIRCLE_ACTIVE;
				} else if (shapeType == "diamond") {
					curNode.children[0].children[1].texture = NODE_DIAMOND_ACTIVE;
				} else {
					curNode.children[0].children[1].texture = NODE_SQUARE_ACTIVE;
				}
			}*/
			setNodeStyleThick(curNode);
		}

		const className = $(classString).val();
		const classData = classMap.get(className);
		if (classData != undefined) {
			const trunkData = classData.get("Trunk Data");
			pixiNodes.filter(pixiNode => pixiNode.groupName == undefined).forEach(groupNode => {
				const requiredPoints = groupNode.nodeData.get("requiredPoints");
				const validConnection = requiredPoints <= getAllocatedSkillPoints(groupNode.nodeName);
				validConnection ? setNodeStyleThick(groupNode) : setNodeStyleThin(groupNode);
			});
		}

		pixiConnectors.forEach(connector => updateConnectorLineStyle(connector, connector.startNode, connector.endNode));
	}
}
function getGlyphData(glyphIndex) {
	const className = $(classString).val();
	const classText = className[0].toUpperCase() + className.slice(1);

	const paragonGlyphs = paragonData[classText]["Glyph"];
	const glyphName = "ParagonGlyph_" + String(glyphIndex).padStart(3, "0");

	if (classText == "Barbarian" && glyphName + "_Barb" in paragonGlyphs) {
		return paragonGlyphs[glyphName + "_Barb"];
	} else if (classText == "Druid" && glyphName + "_Druid" in paragonGlyphs) {
		return paragonGlyphs[glyphName + "_Druid"];
	} else if (classText == "Necromancer" && glyphName + "_Necro" in paragonGlyphs) {
		return paragonGlyphs[glyphName + "_Necro"];
	} else if (classText == "Rogue" && glyphName + "_Rogue" in paragonGlyphs) {
		return paragonGlyphs[glyphName + "_Rogue"];
	} else if (classText == "Sorcerer" && glyphName + "_Sorc" in paragonGlyphs) {
		return paragonGlyphs[glyphName + "_Sorc"];
	}
	return paragonGlyphs[glyphName];
}
function isNodeInGlyphRadius(curNode) {
	if (curNode.nodeData.has("inGlyphRadius")) return curNode.nodeData.get("inGlyphRadius");

	const boardHeader = curNode.nodeData.get("_boardHeader");
	const glyphSocket = boardHeader.nodeData.get("glyphSocket");

	const nodePosition = curNode.position;
	const glyphPosition = glyphSocket.position;

	const [nodeWidth, nodeHeight] = [curNode.nodeData.get("_nodeWidth"), curNode.nodeData.get("_nodeHeight")];

	const outlineRadius = 695;
	const nodeSpacing = (nodeWidth + nodeHeight) * 0.5 + 25;

	const offsetX = Math.abs(glyphPosition.x - nodePosition.x);
	const offsetY = Math.abs(glyphPosition.y - nodePosition.y);
	const inGlyphRadius = offsetX == 0 && offsetY <= outlineRadius
		|| offsetX == nodeSpacing && offsetY <= outlineRadius - nodeSpacing
		|| offsetX == nodeSpacing * 2 && offsetY <= outlineRadius - nodeSpacing * 2
		|| offsetX == nodeSpacing * 3 && offsetY <= outlineRadius - nodeSpacing * 3
		|| offsetX == nodeSpacing * 4 && offsetY <= outlineRadius - nodeSpacing * 4;

	curNode.nodeData.set("inGlyphRadius", inGlyphRadius);
	return inGlyphRadius;
}
function getNodeGlyphMultiplier(curNode) {
	const nodeType = curNode.nodeData.get("nodeType");
	if (nodeType == "Magic" || nodeType == "Rare") {
		const boardIndex = curNode.nodeData.get("_boardIndex");

		if (boardIndex in paragonBoardGlyphData && isNodeInGlyphRadius(curNode)) {
			const glyphRank = boardIndex in paragonBoardGlyphRankData ? paragonBoardGlyphRankData[boardIndex] : 1;
			const glyphData = getGlyphData(paragonBoardGlyphData[boardIndex]);
			if (glyphData["desc"].toLowerCase().includes(`bonus to all ${nodeType.toLowerCase()} nodes`)) {
				const glyphDesc = glyphData["desc"].replace(/{(.+?)}/g, (matchString, captureString) => {
					const outputString = captureString.split("/");
					return outputString[glyphRank > 0 ? Math.min(glyphRank, outputString.length) - 1 : 0];
				});
				return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to all/i)) / 100;
			}
		}
	}
	return 1;
}
function updateGlyphBonusesFromNodes(boardHeader, updateVector) {
	const boardContainer = boardHeader.nodeData.get("boardContainer");

	for (let i = 0, n = boardContainer.children.length; i < n; i++) {
		const pixiNode = boardContainer.children[i];
		const pixiType = pixiNode.nodeData.get("nodeType");
		if (pixiType != "Magic" && pixiType != "Rare") continue;
		const pixiPoints = pixiNode.nodeData.get("allocatedPoints");
		if (pixiPoints == 0) continue;
		if (isNodeInGlyphRadius(pixiNode)) updateParagonAttributes(pixiNode, pixiPoints * updateVector);
	}

	refreshDetailsWindow();
}
var paragonAttributeTotals = {
	"Strength": 0,
	"Intelligence": 0,
	"Willpower": 0,
	"Dexterity": 0
};
function updateParagonAttributes(curNode, diffPoints) {
	if (curNode.nodeDesc == undefined || diffPoints == 0) return;

	const glyphMultiplier = getNodeGlyphMultiplier(curNode);
	const addFloats = (arg1, arg2) => parseFloat(arg1) + parseFloat(arg2);

	const nodeStr = curNode.nodeDesc.match(/\+(\d*\.?\d+) Strength/ig);
	if (nodeStr != undefined) paragonAttributeTotals["Strength"] += parseFloat(nodeStr.reduce(addFloats)) * diffPoints * glyphMultiplier;

	const nodeInt = curNode.nodeDesc.match(/\+(\d*\.?\d+) Intelligence/ig);
	if (nodeInt != undefined) paragonAttributeTotals["Intelligence"] += parseFloat(nodeInt.reduce(addFloats)) * diffPoints * glyphMultiplier;

	const nodeWill = curNode.nodeDesc.match(/\+(\d*\.?\d+) Willpower/ig);
	if (nodeWill != undefined) paragonAttributeTotals["Willpower"] += parseFloat(nodeWill.reduce(addFloats)) * diffPoints * glyphMultiplier;

	const nodeDex = curNode.nodeDesc.match(/\+(\d*\.?\d+) Dexterity/ig);
	if (nodeDex != undefined) paragonAttributeTotals["Dexterity"] += parseFloat(nodeDex.reduce(addFloats)) * diffPoints * glyphMultiplier;
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
					if (pixiNode.groupName == SPIRIT_BOONS && pixiNode.nodeDesc == SPIRIT_BOON_DESC
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
				updateParagonAttributes(curNode, newPoints - allocatedPoints);
				pixiAllocatedParagonPoints++;
				updateCharacterLevel();
				if (curNode.nodeData.get("nodeType") == "Gate") equipParagonBoard(curNode);
			}
		}
	} else {
		const baseSkill = curNode.nodeData.get("baseSkill");
		let minUnusedPoints = 0;
		let isUltimateSkill = false;
		if (curNode.groupName == KEY_PASSIVE) {
			minUnusedPoints = -1;
		} else if (curNode.groupName == ULTIMATE) {
			isUltimateSkill = curNode.nodeDesc.includes(COOLDOWN_PREFIX);
			if (isUltimateSkill) minUnusedPoints = -1;
		} else if (baseSkill != undefined) {
			// this may need to change in the future if branching skill modifiers are added
			const modifierCount = pixiNodes.filter(pixiNode => {
				if (pixiNode.groupName != curNode.groupName) return false;
				if (!pixiNode.nodeData.get("allocatedPoints")) return false;
				if (pixiNode.nodeData.get("baseSkill") != baseSkill) return false;
				return true;
			}).length + 1;
			if (modifierCount > 2) minUnusedPoints = -1;
		}

		if (getUnusedPoints(false) <= minUnusedPoints) return;

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

		// immediately deallocate any nodes that are mutually exclusive with the one we just allocated
		pixiNodes.forEach(pixiNode => {
			if (pixiNode.groupName == curNode.groupName && pixiNode != curNode && pixiNode.nodeData.get("allocatedPoints")) {
				let deallocateNode = false;
				if (pixiNode.groupName == KEY_PASSIVE) {
					deallocateNode = true;
				} else if (pixiNode.groupName == ULTIMATE && isUltimateSkill && pixiNode.nodeDesc.includes(COOLDOWN_PREFIX)) {
					deallocateNode = true;
				} else if (baseSkill != undefined && pixiNode.nodeData.get("baseSkill") == baseSkill) {
					const connections = [...pixiNode.nodeData.get("connections").values()];
					if (!connections.some(connection => [baseSkill, curNode.groupName].includes(connection))) deallocateNode = true;
				}
				if (deallocateNode) {
					pixiAllocatedPoints.set(pixiNode.groupName, pixiAllocatedPoints.get(pixiNode.groupName) - 1);
					updateNodePoints(pixiNode, 0);
					validateAllDependentNodes();
					updateCharacterLevel();
				}
			}
		});
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
				updateParagonAttributes(curNode, newPoints - allocatedPoints);
				pixiAllocatedParagonPoints--;
				updateCharacterLevel();
			}
		}

		if (curNode.groupName == SPIRIT_BOONS && curNode.nodeDesc == SPIRIT_BOON_DESC) {
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
	drawNode(curNode.nodeName, curNode.nodeData, curNode.groupName, curNode.extraData, curNode.nodeIndex, curNode.position);
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
function drawNode(nodeName, nodeData, groupName, extraData = null, nodeIndex = pixiNodes.length, nodePosition = null) {
	const scaleFactor = devicePixelRatio >= 2 ? 1 : (newRenderScale >= 0.45 ? 2 : 1) / devicePixelRatio * newRenderScale;
	const activeLocale = readCookie("activeLocale", "enUS");

	let node = null;
	if (pixiNodes.length > nodeIndex) {
		node = pixiNodes[nodeIndex];

		// skip node redraw if we already have the correct one displayed
		if (node.scaleFactor == scaleFactor && node.activeLocale == activeLocale) return;
	}
	const updateExistingNode = node != null;

	let x = nodePosition == null ? nodeData.get("x") : nodePosition.x;
	let y = nodePosition == null ? nodeData.get("y") : nodePosition.y;

	if (x == undefined || y == undefined) return;

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
	if (updateExistingNode) {
		displayName = node.displayName;
		displayNameSize = node.displayNameSize;
	} else {
		const maxLabelSize = Math.round(7.5 * _nodeWidth * shapeSize * circleFactor / nodeWidth);
		if (displayName.length > maxLabelSize) displayName = nodeName.split([" ", "—"]).map((n) => n[0]).join("");
		if (displayName.length >= maxLabelSize - 2) displayNameSize = 32;
	}

	const allocatedPoints = nodeData.get("allocatedPoints");
	const maxPoints = nodeData.get("maxPoints");
	const requiredPoints = nodeData.get("requiredPoints");

	// `searchQueryMatch` implies `useThickNodeStyle` and `invertColor`; is set in `handleSearchInput(...)`; and is only used for restoring node style after `redrawNode` is called
	const searchQueryMatch = nodeData.get("searchQueryMatch");

	const useThickNodeStyle = searchQueryMatch || (groupName == undefined ? requiredPoints <= getAllocatedSkillPoints(nodeName) : allocatedPoints > 0);

	const colorOverride = nodeData.get("colorOverride");
	const _textColor = colorOverride != undefined ? colorOverride : textColor;

	let extraContainer, extraContainer2, extraContainer3, extraContainer4, extraContainer5;
	if (extraData != null) {
		if (groupName == PARAGON_BOARD) {
			const boardIndex = extraData;

			extraContainer = updateExistingNode ? pixiNodes[nodeIndex].children[0].children[1] : new PIXI.Container();
			extraContainer.cursor = "pointer";
			extraContainer.eventMode = "static";
			if (!updateExistingNode) {
				extraContainer
					.on("click", () => rotateParagonBoard(boardIndex, -90, true))
					.on("tap", () => rotateParagonBoard(boardIndex, -90, true));
			}
			const extraText = updateExistingNode ? extraContainer.children[0] : new PIXI.Text();
			extraText.text = "↺";
			extraText.style = {
				align: "left",
				fill: _textColor,
				fontFamily: fontFamily,
				fontSize: displayNameSize * scaleFactor * 2,
				fontVariant: "small-caps",
				fontWeight: useThickNodeStyle ? "bold" : "normal",
				padding: 10
			};
			extraText.eventMode = "auto";
			extraText.scale.set(1 / scaleFactor);
			extraText.anchor.set(0.5);
			extraText.x = (extraText.width - _nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 + 16;
			if (!updateExistingNode) extraContainer.addChild(extraText);

			extraContainer2 = updateExistingNode ? pixiNodes[nodeIndex].children[0].children[2] : new PIXI.Container();
			extraContainer2.cursor = "pointer";
			extraContainer2.eventMode = "static";
			if (!updateExistingNode) {
				extraContainer2
					.on("click", () => setParagonBoardEquipIndex(boardIndex))
					.on("tap", () => setParagonBoardEquipIndex(boardIndex));
			}
			const extraText2 = updateExistingNode ? extraContainer2.children[0] : new PIXI.Text();
			extraText2.text = ASSIGN_INDEX_LABEL_TEXT;
			extraText2.style = {
				align: "right",
				fill: _textColor,
				fontFamily: fontFamily,
				fontSize: displayNameSize * scaleFactor * 1.5,
				fontVariant: "small-caps",
				fontWeight: useThickNodeStyle ? "bold" : "normal",
				padding: 10
			};
			extraText2.eventMode = "auto";
			extraText2.scale.set(1 / scaleFactor);
			extraText2.anchor.set(0.5);
			extraText2.x = (extraText2.width - _nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 + 200;
			extraText2.y = 0;
			if (!updateExistingNode) extraContainer2.addChild(extraText2);

			extraContainer3 = updateExistingNode ? pixiNodes[nodeIndex].children[0].children[3] : new PIXI.Container();
			extraContainer3.cursor = "pointer";
			extraContainer3.eventMode = "static";
			if (!updateExistingNode) {
				extraContainer3
					.on("click", () => resetParagonBoard(node))
					.on("tap", () => resetParagonBoard(node));
			}
			const extraText3 = updateExistingNode ? extraContainer3.children[0] : new PIXI.Text();
			extraText3.text = RESET_BOARD_LABEL_TEXT;
			extraText3.style = {
				align: "right",
				fill: _textColor,
				fontFamily: fontFamily,
				fontSize: displayNameSize * scaleFactor * 1.5,
				fontVariant: "small-caps",
				fontWeight: useThickNodeStyle ? "bold" : "normal",
				padding: 10
			};
			extraText3.eventMode = "auto";
			extraText3.scale.set(1 / scaleFactor);
			extraText3.anchor.set(0.5);
			extraText3.x = (extraText3.width - _nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 + 600;
			extraText3.y = 0;
			if (!updateExistingNode) extraContainer3.addChild(extraText3);

			extraContainer4 = updateExistingNode ? pixiNodes[nodeIndex].children[0].children[4] : new PIXI.Container();
			extraContainer4.cursor = "pointer";
			extraContainer4.eventMode = "static";
			if (!updateExistingNode) {
				extraContainer4
					.on("click", () => moveParagonBoard(boardIndex))
					.on("tap", () => moveParagonBoard(boardIndex));
			}
			const extraText4 = updateExistingNode ? extraContainer4.children[0] : new PIXI.Text();
			extraText4.text = "←↕→";
			extraText4.style = {
				align: "right",
				fill: _textColor,
				fontFamily: fontFamily,
				fontSize: displayNameSize * scaleFactor * 2,
				fontVariant: "small-caps",
				fontWeight: useThickNodeStyle ? "bold" : "normal",
				padding: 10
			};
			extraText4.eventMode = "auto";
			extraText4.scale.set(1 / scaleFactor);
			extraText4.anchor.set(0.5);
			extraText4.x = (_nodeWidth * shapeSize * circleFactor * diamondFactor - extraText4.width) * 0.5 - 200;
			extraText4.y = -8;
			if (!updateExistingNode) extraContainer4.addChild(extraText4);

			extraContainer5 = updateExistingNode ? pixiNodes[nodeIndex].children[0].children[5] : new PIXI.Container();
			extraContainer5.cursor = "pointer";
			extraContainer5.eventMode = "static";
			if (!updateExistingNode) {
				extraContainer5
					.on("click", () => rotateParagonBoard(boardIndex, 90, true))
					.on("tap", () => rotateParagonBoard(boardIndex, 90, true));
			}
			const extraText5 = updateExistingNode ? extraContainer5.children[0] : new PIXI.Text();
			extraText5.text = "↻";
			extraText5.style = {
				align: "right",
				fill: _textColor,
				fontFamily: fontFamily,
				fontSize: displayNameSize * scaleFactor * 2,
				fontVariant: "small-caps",
				fontWeight: useThickNodeStyle ? "bold" : "normal",
				padding: 10
			};
			extraText5.eventMode = "auto";
			extraText5.scale.set(1 / scaleFactor);
			extraText5.anchor.set(0.5);
			extraText5.x = (_nodeWidth * shapeSize * circleFactor * diamondFactor - extraText5.width) * 0.5 - 16;
			if (!updateExistingNode) extraContainer5.addChild(extraText5);
		} else if (nodePosition == null) {
			x += extraData.get("x");
			y += extraData.get("y");
		}
	}

	const nodeText = updateExistingNode ? pixiNodes[nodeIndex].children[1] : new PIXI.Text();
	nodeText.text = displayName;
	nodeText.style = {
		align: "center",
		fill: _textColor,
		fontFamily: fontFamily,
		fontSize: displayNameSize * scaleFactor * (_nodeWidth > 400 ? 1.5 : 1),
		fontVariant: "small-caps",
		fontWeight: useThickNodeStyle ? "bold" : "normal",
		padding: 10
	};
	nodeText.eventMode = "auto";
	nodeText.scale.set(1 / scaleFactor);
	nodeText.anchor.set(0.5);

	let nodeText2, nodeText3, nodeText4, plusContainer, minusContainer;
	if (groupName != undefined && ![PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(groupName) && maxPoints > 1) {
		nodeText2 = updateExistingNode ? pixiNodes[nodeIndex].children[2] : new PIXI.Text();
		nodeText2.text = allocatedPoints + "/" + maxPoints;
		nodeText2.style = {
			align: "right",
			fill: _textColor,
			fontFamily: fontFamily,
			fontSize: 24 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		};
		nodeText2.eventMode = "auto";
		nodeText2.scale.set(1 / scaleFactor);
		nodeText2.anchor.set(0.5);
		nodeText2.x = (_nodeWidth * shapeSize * circleFactor * diamondFactor - nodeText2.width) * 0.5 - 5;
		nodeText2.y = (nodeText2.height - _nodeHeight * shapeSize * circleFactor * diamondFactor) * 0.5 + (shapeType == "circle" ? -2 : 2);

		minusContainer = updateExistingNode ? pixiNodes[nodeIndex].children[3] : new PIXI.Container();
		minusContainer.cursor = "pointer";
		minusContainer.eventMode = "static";
		if (!updateExistingNode) {
			minusContainer
				.on("click", (e) => {
					handleMinusButton(node);
					e.stopPropagation();
				})
				.on("tap", (e) => {
					handleMinusButton(node);
					e.stopPropagation();
				});
		}
		nodeText3 = pixiNodes.length > nodeIndex ? minusContainer.children[0] : new PIXI.Text();
		nodeText3.text = "–";
		nodeText3.style = {
			align: "left",
			fill: _textColor,
			fontFamily: fontFamilyOverride,
			fontSize: 48 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		};
		nodeText3.eventMode = "auto";
		nodeText3.scale.set(1 / scaleFactor);
		nodeText3.anchor.set(0.5);
		nodeText3.x = (nodeText3.width - _nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 + 4;
		nodeText3.y = (_nodeHeight * shapeSize * circleFactor * diamondFactor - nodeText3.height) * 0.5 + (shapeType == "circle" ? 8 : 0);
		if (!updateExistingNode) minusContainer.addChild(nodeText3);

		plusContainer = updateExistingNode ? pixiNodes[nodeIndex].children[4] : new PIXI.Container();
		plusContainer.cursor = "pointer";
		plusContainer.eventMode = "static";
		if (!updateExistingNode) {
			plusContainer
				.on("click", (e) => {
					handlePlusButton(node);
					e.stopPropagation();
				})
				.on("tap", (e) => {
					handlePlusButton(node);
					e.stopPropagation();
				});
		}
		nodeText4 = updateExistingNode ? plusContainer.children[0] : new PIXI.Text();
		nodeText4.text = "+";
		nodeText4.style = {
			align: "right",
			fill: _textColor,
			fontFamily: fontFamilyOverride,
			fontSize: 48 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		};
		nodeText4.eventMode = "auto";
		nodeText4.scale.set(1 / scaleFactor);
		nodeText4.anchor.set(0.5);
		nodeText4.x = (_nodeWidth * shapeSize * circleFactor * diamondFactor - nodeText4.width) * 0.5;
		nodeText4.y = (_nodeHeight * shapeSize * circleFactor * diamondFactor - nodeText4.height) * 0.5 + (shapeType == "circle" ? 12 : 4);
		if (!updateExistingNode) plusContainer.addChild(nodeText4);
	}

	const nodeBorder = updateExistingNode ? pixiNodes[nodeIndex].children[pixiNodes[nodeIndex].children.length - 1] : new PIXI.Graphics();
	nodeBorder.cursor = maxPoints > 0 ? "pointer" : "auto";
	nodeBorder.eventMode = "auto";
	nodeBorder.clear();
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

	const nodeContainer = updateExistingNode ? pixiNodes[nodeIndex].children[0] : new PIXI.Container();
	nodeContainer.cursor = maxPoints > 0 ? "pointer" : "auto";
	nodeContainer.eventMode = "static";

	const nodeBackground = updateExistingNode ? nodeContainer.children[0] : new PIXI.Graphics();
	nodeBackground.cursor = maxPoints > 0 ? "pointer" : "auto";
	nodeBackground.eventMode = "auto";
	nodeBackground.clear();
	nodeBackground.beginFill(backgroundColor);
	if (shapeType == "circle") {
		nodeBackground.drawCircle(_nodeWidth * 0.5 * shapeSize, _nodeHeight * 0.5 * shapeSize, (_nodeWidth + _nodeHeight) * 0.5 * shapeSize);
	} else {
		nodeBackground.drawRect(0, 0, _nodeWidth * shapeSize, _nodeHeight * shapeSize);
	}
	nodeBackground.alpha = backgroundOpacity;
	nodeBackground.pivot.x = _nodeWidth * 0.5 * shapeSize;
	nodeBackground.pivot.y = _nodeHeight * 0.5 * shapeSize;

	if (!updateExistingNode) {
		nodeContainer.addChild(nodeBackground);
		if (extraContainer != undefined) nodeContainer.addChild(extraContainer);
		if (extraContainer2 != undefined) nodeContainer.addChild(extraContainer2);
		if (extraContainer3 != undefined) nodeContainer.addChild(extraContainer3);
		if (extraContainer4 != undefined) nodeContainer.addChild(extraContainer4);
		if (extraContainer5 != undefined) nodeContainer.addChild(extraContainer5);
	}

	if (nodeData.get("nodeType") == "Socket") {
		const glyphOutline = updateExistingNode ? nodeContainer.children[nodeContainer.children.length - 1] : new PIXI.Sprite(PIXI.Texture.from("images/glyph_overlay.png"));
		glyphOutline.pivot.x = 695;
		glyphOutline.pivot.y = 695;
		glyphOutline.eventMode = "none";
		if (!updateExistingNode) nodeContainer.addChild(glyphOutline);
	}

	/*
	if (groupName != undefined && ![PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD].includes(groupName)) {
		let nodeImage;
		if (shapeType == "circle") {
			//nodeImage = new PIXI.Sprite(allocatedPoints > 0 ? NODE_CIRCLE_ACTIVE : NODE_CIRCLE_INACTIVE);
		} else if (shapeType == "diamond") {
			nodeImage = new PIXI.Sprite(allocatedPoints > 0 ? NODE_DIAMOND_ACTIVE : NODE_DIAMOND_INACTIVE);
		} else {
			nodeImage = new PIXI.Sprite(allocatedPoints > 0 ? NODE_SQUARE_ACTIVE : NODE_SQUARE_INACTIVE);
		}
		nodeImage.eventMode = "auto";
		if (nodeImage != undefined) {
			nodeImage.anchor.set(0.5);
			nodeContainer.addChild(nodeImage);
		}
	}
	*/

	if (shapeType == "diamond") {
		nodeBackground.angle = 45;
		nodeBorder.angle = 45;
	}

	if (!updateExistingNode) {
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

		if (maxPoints == 1) {
			if (nodeData.get("nodeType") == "Socket") {
				node
					.on("click", () => equipParagonBoardGlyph(node))
					.on("tap", () => equipParagonBoardGlyph(node));
			} else {
				node
					.on("click", () => handleToggleButton(node))
					.on("tap", () => handleToggleButton(node));
			}
		} else {
			node.on("click", () => handlePlusButton(node));
		}
		if (nodeData.get("nodeType") != "Socket") node.on("rightclick", () => handleMinusButton(node));

		node.cullable = true;
		node.cursor = maxPoints > 0 ? "pointer" : "auto";
		node.eventMode = "static";

		node.nodeName = nodeName;
		node.nodeData = nodeData;
		node.groupName = groupName;
		node.extraData = extraData;
		node.nodeIndex = nodeIndex;

		node.displayName = displayName;
		node.displayNameSize = displayNameSize;
	}

	if (!updateExistingNode) node.nodeDesc = nodeData.get("description");
	if (nodeData.get("descriptionLocalized") != null && node.activeLocale != activeLocale) {
		const localDesc = nodeData.get("descriptionLocalized").get(activeLocale);
		node.localizedDesc = localDesc;
		node.activeLocale = activeLocale;
	}

	if (requiredPoints == undefined) {
		if (!updateExistingNode) node.nodeDesc = processDescription(node.nodeDesc);
		node.localizedDesc = processDescription(node.localizedDesc);
		function processDescription(curDesc) {
			if (curDesc == undefined || curDesc.length == 0) return curDesc;
			let nodeValues = node.nodeData.get("values");
			if (nodeValues != undefined) {
				let [nodeDesc1, nodeDesc2] = curDesc.split(ENCHANTMENT_EFFECT_DESC);
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
					}
					curDesc = nodeDesc1 + ENCHANTMENT_EFFECT_DESC + nodeDesc2;
				} else {
					curDesc = nodeDesc1;
				}
			}
			return curDesc;
		}
	}

	if (!updateExistingNode) {
		if ([PARAGON_BOARD, CODEX_OF_POWER, SPIRIT_BOONS, BOOK_OF_THE_DEAD, undefined].includes(groupName) || maxPoints <= 1) {
			node.addChild(nodeContainer, nodeText, nodeBorder);
		} else {
			node.addChild(nodeContainer, nodeText, nodeText2, minusContainer, plusContainer, nodeBorder);
		}
		pixiNodes[nodeIndex] = pixiJS.stage.addChild(node);
	}

	node.stale = false;
	node.position.x = x;
	node.position.y = y;
	node.scaleFactor = scaleFactor;
}
function drawAllNodes() {
	const className = $(classString).val();
	const classText = className[0].toUpperCase() + className.slice(1);
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
							["description", minionData.get("description")],
							["maxPoints", 0],
							["nameOverride", minionData.get("name")],
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
							if (["description", "name"].includes(minionTypeName)) continue;
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
						} else if (groupName == KEY_PASSIVE) {
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
				["widthOverride", paragonBoardNodes * nodeSpacingX], // (paragonBoardCount * paragonBoardNodes * nodeSpacingX) + (nodeSpacingX * (paragonBoardCount - 1) * 0.5)
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

				const boardContainer = new PIXI.Container();

				const paragonBoardNode = new Map([
					["allocatedPoints", 0],
					["boardContainer", boardContainer],
					["boardIndex", unsortedIndex],
					["widthOverride", nodeSpacingX * paragonBoardNodes],
					["maxPoints", 0],
					["shapeSize", 1],
					["shapeType", "rectangle"],
					["x", boardX],
					["y", boardY]
				]);
				drawNode(boardName, paragonBoardNode, PARAGON_BOARD, unsortedIndex > 0 ? unsortedIndex : null);
				const boardHeader = pixiNodes[pixiNodes.length - 1];

				for (const [yPosition, rowData] of Object.entries(boardData)) {
					for (const [xPosition, nodeData] of Object.entries(rowData)) {
						if (nodeData.length > 0) {
							let nodeName = nodeData;
							let nodeDesc = "";
							let nodeNameLocalized = null;
							let nodeDescLocalized = null;
							let thresholdRequirements = null;
							for (const classKey in paragonData) {
								if ("Node" in paragonData[classKey] && nodeData in paragonData[classKey]["Node"]) {
									nodeName = paragonData[classKey]["Node"][nodeData]["name"];
									nodeDesc = paragonData[classKey]["Node"][nodeData]["description"];
									nodeNameLocalized = paragonData[classKey]["Node"][nodeData]["nameLocalized"];
									nodeDescLocalized = paragonData[classKey]["Node"][nodeData]["descriptionLocalized"];
									thresholdRequirements = paragonData[classKey]["Node"][nodeData]["thresholdRequirements"];
									break;
								}
							}
							const nodeType = nodeData.includes("_Normal_") ? "Normal"
								: nodeData.includes("_Magic_") ? "Magic"
								: nodeData.includes("_Rare_") ? "Rare"
								: nodeData.includes("_Legendary_") ? "Legendary"
								: nodeData.includes("StartNode") ? "Start"
								: nodeData == "Generic_Gate" ? "Gate"
								: nodeData == "Generic_Socket" ? "Socket" : "";
							const boardNode = new Map([
								["allocatedPoints", 0],
								["_boardHeader", boardHeader],
								["_boardIndex", unsortedIndex],
								["_boardName", boardName],
								["colorOverride", COLOR_OVERRIDE[nodeType]],
								["description", nodeDesc],
								["descriptionLocalized", nodeDescLocalized == null ? undefined : new Map(Object.entries(nodeDescLocalized))],
								["id", `paragon-${unsortedIndex}-${xPosition}-${yPosition}`],
								["maxPoints", 1],
								["nameLocalized", nodeNameLocalized == null ? undefined : new Map(Object.entries(nodeNameLocalized))],
								["nodeType", nodeType],
								["thresholdRequirements", thresholdRequirements],
								["widthOverride", nodeWidth],
								["heightOverride", nodeHeight],
								["shapeSize", 1],
								["shapeType", "rectangle"],
								["x", nodeSpacingX * (Number(xPosition) - 10)],
								["y", nodeSpacingY * (Number(yPosition) - 10)]
							]);
							drawNode(nodeName, boardNode, PARAGON_BOARD);
							if (nodeType == "Socket") paragonBoardNode.set("glyphSocket", pixiNodes[pixiNodes.length - 1]);
							boardContainer.addChild(pixiNodes[pixiNodes.length - 1]);
						}
					}
				}
				boardContainer.startPosition = new PIXI.Point(boardX, boardY + nodeSpacingY * 11);
				boardContainer.position.copyFrom(boardContainer.startPosition);
				pixiJS.stage.addChild(boardContainer);
				sortedIndex++;
			}
			$("#groupSelector").append(`<option value="${PARAGON_BOARD.replace(/\s/g, "").toLowerCase()}">${PARAGON_BOARD}</option>`);
		}

		const sortedCodexItemTypeIndex = {
			"Legendary": 0,
			"Unique": 1
		};

		const validSlotTypesGeneric = ["Amulet", "Ring", "Helm", "Chest", "Gloves", "Pants", "Boots"];
		// TODO: some slot types might be missing
		const validSlotTypes = {
			"barbarian": validSlotTypesGeneric.concat(["2H Polearm", "2H Axe", "2H Sword", "2H Mace", "1H Axe", "1H Mace", "1H Sword"]),
			"druid": validSlotTypesGeneric.concat(["2H Staff", "2H Axe", "2H Mace", "1H Axe", "1H Mace", "Totem"]),
			"necromancer": validSlotTypesGeneric.concat(["2H Scythe", "1H Scythe", "2H Sword", "1H Sword", "1H Dagger", "1H Wand", "Shield", "Focus"]),
			"rogue": validSlotTypesGeneric.concat(["2H Bow", "2H Crossbow", "1H Dagger", "1H Sword"]),
			"sorcerer": validSlotTypesGeneric.concat(["2H Staff", "1H Wand", "Focus"]),
		};

		const unsortedCodex = getCodexData(["Generic", classText], null, validSlotTypes[className]);

		if (Object.keys(unsortedCodex).length > 0) {
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

			for (const codexCategoryName of sortedCodexCategoryTypes) {
				const codexCategory = unsortedCodex[codexCategoryName];
				if (codexCategory == undefined) continue;
				const numCodexPowers = Object.keys(codexCategory).length;
				if (numCodexPowers > 0) {
					codexY += nodeSpacingY;

					let codexCategoryDesc = codexCategoryName == "Other" || codexCategoryName == "Unknown" ? "" : CODEX_OF_POWER_DESC_BEFORE;
					if (codexData["Categories"][codexCategoryName] != undefined) codexCategoryDesc += codexData["Categories"][codexCategoryName];
					codexCategoryDesc += codexCategoryDesc.length > 0 ? `\n\n${CODEX_OF_POWER_DESC_AFTER}` : CODEX_OF_POWER_DESC_AFTER;
					const codexCategoryNode = new Map([
						["allocatedPoints", 0],
						["description", codexCategoryDesc],
						["widthOverride", nodeSpacingX * 4 - 50],
						["maxPoints", 0],
						["shapeSize", 1],
						["shapeType", "rectangle"],
						["x", startX],
						["y", codexY]
					]);

					drawNode(codexCategoryName, codexCategoryNode, CODEX_OF_POWER);

					const sortedCodexPowers = Object.keys(codexCategory).sort((a, b) => {
						const aValue = sortedCodexItemTypeIndex[codexCategory[a].type];
						const bValue = sortedCodexItemTypeIndex[codexCategory[b].type];
						return aValue == bValue ? a.localeCompare(b) : aValue - bValue;
					});

					let codexPowerIdx = 0;
					for (const codexPowerName of sortedCodexPowers) {
						const codexPower = codexCategory[codexPowerName];
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

						let powerDescription = codexPower.description;
						let powerDescriptionLocalized = codexPower.descriptionLocalized;
						let powerLocation = [];
						if (codexPower.dungeon) powerLocation.push(codexPower.dungeon);
						if (codexPower.region) powerLocation.push(codexPower.region);
						if (powerLocation.length > 0) {
							powerDescription += "\n\n— Location —\n" + powerLocation.join(" — ");
							if (powerDescriptionLocalized != null) {
								const localKeys = Object.keys(powerDescriptionLocalized);
								for (const localKey of localKeys) {
									powerDescriptionLocalized[localKey] += "\n\n— Location —\n" + powerLocation.join(" — ");
								}
							}
						}

						const codexPowerNode = new Map([
							["allocatedPoints", 0],
							["codexCategory", codexCategoryName],
							["description", powerDescription],
							["descriptionLocalized", new Map(Object.entries(powerDescriptionLocalized))],
							["id", `codex-${codexPower.id}`],
							["itemSlot", codexPower.slot],
							["itemType", codexPower.type],
							["maxPoints", 1],
							["nameLocalized", new Map(Object.entries(codexPower.nameLocalized))],
							["widthOverride", nodeWidth],
							["shapeSize", 1],
							["shapeType", "rectangle"],
							["values", codexPower.values],
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
	const clampRenderScale = Math.min(1, (window.innerWidth - 40) / tooltipWidth) * pixiTooltipZoomLevel;
	const clampScale = clampRenderScale / stageScale;
	const scaleFactor = devicePixelRatio >= 2 ? 1 : (clampRenderScale >= 0.45 ? 2 : 1) / devicePixelRatio * clampRenderScale;

	// skip tooltip redraw if we already have the correct one displayed
	if (!forceDraw && !debugMode && pixiTooltip.nodeIndex == curNode.nodeIndex && pixiTooltip.scaleFactor == scaleFactor) return;

	eraseTooltip();

	let nodeDesc = debugMode
		? `x: ${getNodePosition(curNode).join(" / y: ")}`
		: (curNode.localizedDesc == undefined || curNode.localizedDesc.length == 0)
		? curNode.nodeDesc
		: curNode.localizedDesc;
	if (nodeDesc == undefined) nodeDesc = "";

	let localizedName = curNode.nodeName;
	const activeLocale = readCookie("activeLocale", "enUS");
	if (curNode.nodeData.get("nameLocalized") != null) {
		const localName = curNode.nodeData.get("nameLocalized").get(activeLocale);
		if (localName != null) {
			if (localName.includes("[") && localName.includes("]")) {
				localizedName = localName.split("]")[1].split("[")[0];
			} else {
				localizedName = localName;
			}
		}
	}

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
		if (curNode.groupName == CODEX_OF_POWER) {
			nodeDesc = nodeDesc.replace(/{(.+?)}/g, (matchString, captureString) => {
				const outputString = captureString.split("/");
				return `[${outputString.join(" - ")}]`;
			});
		} else {
			const boardIndex = curNode.nodeData.get("_boardIndex");
			const className = $(classString).val();
			const classText = className[0].toUpperCase() + className.slice(1);

			const nodeType = curNode.nodeData.get("nodeType");
			let radiusAttributeTotals = {
				"Strength": 0,
				"Intelligence": 0,
				"Willpower": 0,
				"Dexterity": 0
			};
			if (nodeType == "Socket") {
				const boardHeader = curNode.nodeData.get("_boardHeader");
				const boardContainer = boardHeader.nodeData.get("boardContainer");
				const addFloats = (arg1, arg2) => parseFloat(arg1) + parseFloat(arg2);
				for (const boardNode of boardContainer.children) {
					const allocatedPoints = boardNode.nodeData.get("allocatedPoints");
					if (allocatedPoints == 0) continue;
					if (!isNodeInGlyphRadius(boardNode)) continue;
					if (boardNode.nodeDesc == undefined) continue;

					const glyphMultiplier = getNodeGlyphMultiplier(boardNode);

					const nodeStr = boardNode.nodeDesc.match(/\+(\d*\.?\d+) Strength/ig);
					if (nodeStr != undefined) radiusAttributeTotals["Strength"] += parseFloat(nodeStr.reduce(addFloats)) * allocatedPoints * glyphMultiplier;

					const nodeInt = boardNode.nodeDesc.match(/\+(\d*\.?\d+) Intelligence/ig);
					if (nodeInt != undefined) radiusAttributeTotals["Intelligence"] += parseFloat(nodeInt.reduce(addFloats)) * allocatedPoints * glyphMultiplier;

					const nodeWill = boardNode.nodeDesc.match(/\+(\d*\.?\d+) Willpower/ig);
					if (nodeWill != undefined) radiusAttributeTotals["Willpower"] += parseFloat(nodeWill.reduce(addFloats)) * allocatedPoints * glyphMultiplier;

					const nodeDex = boardNode.nodeDesc.match(/\+(\d*\.?\d+) Dexterity/ig);
					if (nodeDex != undefined) radiusAttributeTotals["Dexterity"] += parseFloat(nodeDex.reduce(addFloats)) * allocatedPoints * glyphMultiplier;
				}
				const paragonGlyphs = paragonData[classText]["Glyph"];
				if (boardIndex in paragonBoardGlyphData) {
					const glyphIndex = paragonBoardGlyphData[boardIndex];
					const glyphRank = boardIndex in paragonBoardGlyphRankData ? paragonBoardGlyphRankData[boardIndex] : 1;
					const glyphData = getGlyphData(glyphIndex);
					const localizedGlyphName = activeLocale in glyphData.nameLocalized ? glyphData.nameLocalized[activeLocale] : glyphData.name;
					const localizedGlyphDesc = (activeLocale in glyphData.descLocalized ? glyphData.descLocalized[activeLocale] : glyphData.desc)
						.replace(/{(.+?)}/g, (matchString, captureString) => {
						const outputString = captureString.split("/");
						return outputString[glyphRank > 0 ? Math.min(glyphRank, outputString.length) - 1 : 0];
					});
					const localizedGlyphBonus = activeLocale in glyphData.bonusLocalized ? glyphData.bonusLocalized[activeLocale] : glyphData.bonus;
					curNode.nodeData.set("nameOverride", `${localizedName} [${localizedGlyphName} — Rank ${glyphRank}]`);
					curNode.nodeData.set("thresholdRequirements", glyphData["thresholdRequirements"]);
					nodeDesc = `${localizedGlyphDesc}\n\nAdditional Bonus: (if requirements met)\n${localizedGlyphBonus}\n\nRequirements: (purchased in radius range)\n{thresholdRequirements}`;
				} else {
					nodeDesc = "Allocate this node to see a list of available glyphs.";
				}
			} else if (nodeType == "Magic" || nodeType == "Rare") {
				const glyphMultiplier = getNodeGlyphMultiplier(curNode);
				nodeDesc = nodeDesc.replace(/(\-?\d*\.?\d+)/g, (matchString, captureString) => Math.round(parseFloat(captureString) * glyphMultiplier * 2) / 2);
			}

			nodeDesc = nodeDesc.replace(/{(.+?)}/g, (matchString, captureString) => {
				if (captureString.includes("thresholdRequirements") && curNode.nodeData.has("thresholdRequirements")) {
					captureString = curNode.nodeData.get("thresholdRequirements");
					if (typeof captureString != "string") captureString = captureString[classText];
					if (typeof captureString != "string") captureString = captureString.join("; or ");
					if (nodeType == "Socket") {
						captureString = captureString.replace(/(\d+ Strength)/gi, `${Math.round(radiusAttributeTotals["Strength"] * 2) / 2} Strength | $1`);
						captureString = captureString.replace(/(\d+ Intelligence)/gi, `${Math.round(radiusAttributeTotals["Intelligence"] * 2) / 2} Intelligence | $1`);
						captureString = captureString.replace(/(\d+ Willpower)/gi, `${Math.round(radiusAttributeTotals["Willpower"] * 2) / 2} Willpower | $1`);
						captureString = captureString.replace(/(\d+ Dexterity)/gi, `${Math.round(radiusAttributeTotals["Dexterity"] * 2) / 2} Dexterity | $1`);
					}
				}
				if (captureString.includes("ParagonBoardEquipIndex")) {
					let equipIndex = "EquipIndex";
					if (boardIndex == 0) {
						equipIndex = "0";
					} else if (boardIndex in paragonBoardEquipIndices) {
						equipIndex = paragonBoardEquipIndices[boardIndex];
					}
					captureString = captureString.replace(/ParagonBoardEquipIndex/g, equipIndex);
					if (equipIndex != "EquipIndex") {
						if (captureString.includes("{") && captureString.includes("}")) {
							captureString = captureString.replace(/{([^{}]+)}/g, (subMatch, subCapture) => eval(subCapture));
						} else {
							captureString = String(eval(captureString));
						}
					}
				}
				let outputString = captureString.split("/");
				return outputString[allocatedPoints > 0 ? Math.min(allocatedPoints, outputString.length) - 1 : 0].replace("|", "/");
			});
		}
	}
	if (curNode.displayName == localizedName && nodeDesc.length == 0) return;

	let nodeHeader = curNode.nodeData.get("nameOverride");
	if (nodeHeader == undefined) {
		nodeHeader = localizedName;
		const itemSlot = curNode.nodeData.get("itemSlot");
		const itemType = curNode.nodeData.get("itemType");
		if (itemSlot != undefined) {
			nodeHeader += ` (${itemType} ${itemSlot})`;
		} else if (itemType != undefined) {
			nodeHeader += ` (${itemType})`;
		}
	}
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
			fontSize: 8
		});
	}

	const tooltipCopyContainer = new PIXI.Container();
	if (tooltipText2.width > tooltipText1.width + 200) {
		const tooltipCopyText = new PIXI.Text(TOOLTIP_COPY_TEXT, {
			align: "right",
			breakWords: true,
			fill: textColor,
			fontFamily: fontFamily,
			fontSize: 32 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: "bold",
			padding: 10
		});
		tooltipCopyText.eventMode = "auto";
		tooltipCopyText.scale.set(1 / scaleFactor);
		tooltipCopyText.anchor.set(0);
		tooltipCopyText.x = tooltipText2.width - tooltipCopyText.width;
		tooltipCopyContainer.cursor = "pointer";
		tooltipCopyContainer.eventMode = "static";
		tooltipCopyContainer.addChild(tooltipCopyText);
		tooltipCopyContainer
			.on("click", () => handleTooltipCopy())
			.on("tap", () => handleTooltipCopy());
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
	pixiTooltip.addChild(tooltipBackground, tooltipText1, tooltipText2, tooltipCopyContainer, tooltipBorder, tooltipSeperator);

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

	// paragon board nodes require some additional math to determine the correct position, as they can move and rotate
	let [nodeX, nodeY] = [curNode.x, curNode.y];
	if (nodeData.get("_boardName") != undefined) {
		[nodeX, nodeY] = rotateAngle(0, 0, curNode.x, curNode.y, curNode.angle);
		[nodeX, nodeY] = [nodeX + curNode.parent.x, nodeY + curNode.parent.y];
	}

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

		pixiTooltip.position.x = nodeX + diffX / pixiJS.stage.scale.x + _nodeWidth * shapeSize * circleFactor * diamondFactor * 0.5 + 20 * pixiTooltip.scale.x;
		pixiTooltip.position.y = nodeY + diffY / pixiJS.stage.scale.y - _nodeHeight * shapeSize * circleFactor * diamondFactor * 0.5 + 10 * pixiTooltip.scale.y;
	} else {
		pixiTooltip.position.x = nodeX + _nodeWidth * shapeSize * circleFactor * diamondFactor * 0.5 + marginSize * 2 * pixiTooltip.scale.x;
		pixiTooltip.position.y = nodeY - _nodeHeight * shapeSize * circleFactor * diamondFactor * 0.5 + marginSize * pixiTooltip.scale.y;
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
	pixiBackground.eventMode = "static";
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
function getCodexData(desiredGroups = null, desiredTypes = null, desiredSlots = []) {
	let codexResult = {};
	for (const [codexGroupName, codexGroup] of Object.entries(codexData)) {
		if (desiredGroups === null || desiredGroups.includes(codexGroupName)) {
			for (const [codexCategoryName, codexCategory] of Object.entries(codexGroup)) {
				if (desiredTypes === null || desiredTypes.includes(codexCategoryName)) {
					if (!codexResult[codexCategoryName]) codexResult[codexCategoryName] = {};
					for (const [codexPowerName, codexPower] of Object.entries(codexCategory)) {
						if (!("slot" in codexPower) || desiredSlots.length == 0 || desiredSlots.includes(codexPower["slot"])) {
							codexResult[codexCategoryName][codexPowerName] = codexPower;
						}
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
	const targetWidth = $("#extraButtons2").width() - $("#classSelector").outerWidth(true) - $("#groupSelector").outerWidth(true) - parseFloat($("#groupSelector").css("margin-left")) * 2;
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

	paragonAttributeTotals = {
		"Strength": 0,
		"Intelligence": 0,
		"Willpower": 0,
		"Dexterity": 0
	};

	paragonBoardGridData = {};
	paragonBoardRotationData = {};
	paragonBoardGlyphData = {};
	paragonBoardGlyphRankData = {};

	drawBackground();
	drawAllNodes();
	drawAllConnectors();

	resizeCanvas();
	resetFrameTimer();

	$("#charLevel").text("1");
	$("#renownLevel").empty();

	refreshDetailsWindow();
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

		if (pixiTooltip.children.length > 0) drawTooltip(pixiNodes[pixiTooltip.nodeIndex]);

		if ($("#extraButtons2").width() > 0) $("#extraInfo").outerWidth($("#extraButtons2").width() - parseInt($("#groupSelector").css("padding-left")));
		$("body").css({"width": newWidth, "height": newHeight }); // prevent undesirable mobile scrolling
		applyZoomLevel();
		resizeSearchInput();
	}
}
function readCookie(name, fallback = "") {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length == 2) {
		const output = parts.pop().split(';').shift();
		writeCookie(name, output); // refresh cookie duration
		return output;
	}
	return fallback;
}
function writeCookie(name, value) {
	let date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// finalize the page once DOM has loaded
$(document).ready(function() {
	$("#localeSelector").removeClass("disabled").select2();
	$("#localeSelector").val(readCookie("activeLocale", "enUS")).trigger("change");
	$("#localeSelector").on("change", handleLocaleSelection);

	$("#versionLabel").on("click", handleVersionLabel);
	handleVersionInterval();
	versionInterval = setInterval(handleVersionInterval, 900000);

	$("#menuButton").on("click", handleMenuButton);
	$("#resetButton").on("click", rebuildCanvas);
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

	$("#detailsWindowHeader").on("mousedown touchstart", handleDetailsEvent);
	$(window).on("mousemove touchmove mouseup touchend", handleDocumentEvent);

	$("#canvasContainer").append(pixiJS.renderer.view);
	$("#canvasContainer").on("wheel mousedown touchstart mousemove touchmove mouseup touchend contextmenu", handleCanvasEvent);
	$(window).on("copy", handleTooltipCopy);
	$(window).on("resize", resizeCanvas);

	refreshDetailsWindow();
	try {
		handleReloadButton();
	} catch (e) {
		$("#classSelectBox").addClass("disabled");
		$("#modalBox").text(`${BUILD_LOAD_ERROR_PREFIX}${e}${BUILD_LOAD_ERROR_SUFFIX}`).removeClass("disabled");
		throw new Error(e);
	}
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