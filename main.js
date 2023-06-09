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
const UPDATE_AVAILABLE_TEXT = "An updated version is available, refresh the page (Ctrl+F5)!";
const UPDATE_AVAILABLE_LABEL_TEXT = "[Update!]";
const OVERCAPPED_TEXT = "Your build currently has too many points allocated somewhere and is considered invalid!";
const OVERCAPPED_LABEL_TEXT = "[Error!]";
const TOOLTIP_COPY_TEXT = "[Copy to Clipboard]";
const TOOLTIP_COPIED_TEXT = "[Copied!]";
const RESET_BUTTON_CONFIRM_TEXT = "Are you sure you want to reset? All of your changes will be lost.";
const OPEN_MENU_TEXT = "Open Menu";
const CLOSE_MENU_TEXT = "Close Menu";
const COPY_BUILD_SUMMARY_TEXT = "Copy Summary";
const COPY_BUILD_SUMMARY_SUCCESS_TEXT = "Copied to Clipboard!";
const ADJUST_ZOOM_LEVEL_TEXT = "Adjust Zoom";
const SHOW_DETAILS_WINDOW_TEXT = "Show Details";
const HIDE_DETAILS_WINDOW_TEXT = "Hide Details";
const ENABLE_TOOLTIP_CLAMP_TEXT = "Enable Tooltip Clamping";
const DISABLE_TOOLTIP_CLAMP_TEXT = "Disable Tooltip Clamping";
const VERSION_HISTORY_TEXT = "Version History";
const MATCH_FOUND_TEXT = " match found for query: ";
const MATCHES_FOUND_TEXT = " matches found for query: ";
const REQUIRED_POINTS_DESC = "Spend {requiredPoints} additional skill points to unlock.";
const COOLDOWN_PREFIX = "Cooldown: ";
const ULTIMATE = "Ultimate";
const KEY_PASSIVE = "Key Passive";
const SKILL_TREE = "Skill Tree";
const PARAGON_BOARD = "Paragon Board";
const PARAGON_BOARD_RESET_PROMPT_PREFIX = "Are you sure you want to reset ";
const PARAGON_BOARD_RESET_ALL_PROMPT = "Are you sure you want to completely reset every paragon board?";
const PARAGON_BOARD_GRID_PROMPT_PREFIX = "Please select a grid location for the ";
const PARAGON_BOARD_GRID_PROMPT_SUFFIX = " Paragon Board:\n";
const PARAGON_BOARD_GRID_PROMPT_END = `You can reset the position of this board by entering 0.\nIf you're unsure what to enter, try 2 and look directly above [Start].`;
const PARAGON_BOARD_EQUIP_PROMPT_HEADER = "Please select a paragon board to attach to ";
const CURRENT_GRID_LOCATION_TEXT = "Current grid location";
const GLYPH_SELECT_PROMPT_PREFIX = "Please select a glyph to socket in ";
const GLYPH_SELECT_PROMPT_SUFFIX = "(You cannot socket the same glyph multiple times.)";
const ASSIGN_INDEX_LABEL_TEXT = "Assign Index";
const RESET_BOARD_LABEL_TEXT = "Reset Board";
const RESET_ALL_BOARDS_LABEL_TEXT = "Reset Everything";
const ALTARS_OF_LILITH = "Altars of Lilith";
const EQUIPMENT_PANEL_PROMPT_HEADER_PREFIX = "Please select a legendary aspect or unique item to equip in your ";
const EQUIPMENT_PANEL_PROMPT_HEADER_SUFFIX = " slot:";
const EQUIPMENT_PANEL = "Equipment Panel";
const EQUIPMENT_PANEL_ITEM_DESC = "Click to see a list of legendary aspects and unique items.";
const TECHNIQUE_SLOT = "Technique Slot";
const TECHNIQUE_SLOT_DESC = "Click to see a list of weapon expertise effects.";
const TECHNIQUE_SLOT_PROMPT_HEADER = "Please select a weapon expertise type to use as your [Technique]:";
const ENCHANT_EFFECT_DESC = "— Enchantment Effect —";
const ENCHANT_SLOTS = "Enchantment Slots";
const ENCHANT_SLOT = "Enchantment";
const ENCHANT_SLOT_PROMPT_HEADER_PREFIX = "Please select a skill to use as your ";
const ENCHANT_FIRST = "primary";
const ENCHANT_SECOND = "secondary";
const ENCHANT_SLOT_PROMPT_HEADER_SUFFIX = " [Enchantment]:";
const ENCHANT_SLOT_DESC = "Click to see a list of enchantment effects.";
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
	"Start": 0xFFFF00,
	"Gate": 0xFFFF00,
	"Socket": 0xFF00FF,
	"Allocated": 0xFF0000,
	"Allocated Socket": 0xFF00FF
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
const searchQueryMatchColor = 0x00FF00;

const lineStyleThinSquare = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: borderColor, native: true, width: 1 };
const lineStyleThinButt = { alpha: borderOpacity, cap: PIXI.LINE_CAP.BUTT, color: borderColor, native: true, width: 1 };
const lineStyleThickSquareTooltip = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: borderColor, native: false, width: 8 };
const lineStyleThickSquare = { alpha: borderOpacity, cap: PIXI.LINE_CAP.SQUARE, color: activeNodeColor, native: false, width: 8 };
const lineStyleThickButt = { alpha: 1, cap: PIXI.LINE_CAP.BUTT, color: activeConnectorColor, native: false, width: 8 };

var pixiAllocatedPoints = new Map();
var pixiAllocatedParagonPoints = 0;

var pixiNodes = [];

var pixiConnectors = [];
var pixiConnectorPairs = [];

var pixiEventQueue = new Set();

var pixiBackground = PIXI.Sprite.from(PIXI.Texture.EMPTY);
var pixiTooltip = new PIXI.Container();
var pixiDragging = null;

var debugMode = false;
var detailsMode = readCookie("detailsMode") == "false" ? false : true;
var clampMode = readCookie("clampMode") == "true" ? true : false;

var touchTimer = null;
var isTouching = false;
var initialTouchDistance = 0;
var initialScale = 1;
var stageScale = 1;
var curRenderScale = 1;
var newRenderScale = 1;

var frameTimer = Date.now();
var isEventHandlerBusy = false;

var curWidth = 0;
var curHeight = 0;

PIXI.settings.RENDER_OPTIONS.resolution = devicePixelRatio;
PIXI.settings.RENDER_OPTIONS.autoDensity = true;
PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.LINEAR;

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
var PIXI_TEXTURES = {};
function rebuildTextures() {
	const className = $(classString).length == 0 ? "none" : $(classString).val();
	PIXI_TEXTURES = {
		NODE_PASSIVE: PIXI.Texture.from("images/tree/node_passive.png"),
		NODE_PASSIVE_ALLOCATED: PIXI.Texture.from("images/tree/node_passive_allocated.png"),
		NODE_ACTIVE_SKILL: PIXI.Texture.from("images/tree/node_active_skill.png"),
		NODE_ACTIVE_SKILL_ALLOCATED: PIXI.Texture.from("images/tree/node_active_skill_allocated.png"),
		NODE_ACTIVE_SKILL_MODIFIER: PIXI.Texture.from("images/tree/node_active_skill_modifier.png"),
		NODE_ACTIVE_SKILL_MODIFIER_ALLOCATED: PIXI.Texture.from("images/tree/node_active_skill_modifier_allocated.png"),
		NODE_GROUP: PIXI.Texture.from("images/tree/node_group.png"),
		NODE_GROUP_ALLOCATED: PIXI.Texture.from("images/tree/node_group_allocated.png"),
		NODE_KEY_PASSIVE: PIXI.Texture.from("images/tree/node_key_passive.png"),
		NODE_KEY_PASSIVE_ALLOCATED: PIXI.Texture.from("images/tree/node_key_passive_allocated.png"),
		GLYPH_RADIUS_INDICATOR: PIXI.Texture.from("images/tree/glyph_overlay.png"),
	}
	if (className == "barbarian") {
		PIXI_TEXTURES = {
			...PIXI_TEXTURES,
			BASH: {
				MAX: PIXI.Texture.from("images/tree/barbarian_1.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_2.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_3.png")
			},
			GROUND_STOMP: {
				MAX: PIXI.Texture.from("images/tree/barbarian_5.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_6.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_7.png")
			},
			HAMMER_OF_THE_ANCIENTS: {
				MAX: PIXI.Texture.from("images/tree/barbarian_9.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_10.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_11.png")
			},
			CHARGE: {
				MAX: PIXI.Texture.from("images/tree/barbarian_18.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_19.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_17.png")
			},
			DOUBLE_SWING: {
				MAX: PIXI.Texture.from("images/tree/barbarian_22.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_23.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_21.png")
			},
			STEEL_GRASP: {
				MAX: PIXI.Texture.from("images/tree/barbarian_26.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_27.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_25.png")
			},
			KICK: {
				MAX: PIXI.Texture.from("images/tree/barbarian_30.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_31.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_29.png")
			},
			LEAP: {
				MAX: PIXI.Texture.from("images/tree/barbarian_34.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_35.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_33.png")
			},
			WHIRLWIND: {
				MAX: PIXI.Texture.from("images/tree/barbarian_38.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_39.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_37.png")
			},
			FRENZY: {
				MAX: PIXI.Texture.from("images/tree/barbarian_42.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_43.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_41.png")
			},
			DEATH_BLOW: {
				MAX: PIXI.Texture.from("images/tree/barbarian_46.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_47.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_45.png")
			},
			IRON_MAELSTROM: {
				MAX: PIXI.Texture.from("images/tree/barbarian_50.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_51.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_49.png")
			},
			REND: {
				MAX: PIXI.Texture.from("images/tree/barbarian_54.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_55.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_53.png")
			},
			WRATH_OF_THE_BERSERKER: {
				MAX: PIXI.Texture.from("images/tree/barbarian_58.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_59.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_57.png")
			},
			UPHEAVAL: {
				MAX: PIXI.Texture.from("images/tree/barbarian_62.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_63.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_61.png")
			},
			RUPTURE: {
				MAX: PIXI.Texture.from("images/tree/barbarian_66.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_67.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_65.png")
			},
			RALLYING_CRY: {
				MAX: PIXI.Texture.from("images/tree/barbarian_70.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_71.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_69.png")
			},
			FLAY: {
				MAX: PIXI.Texture.from("images/tree/barbarian_74.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_75.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_73.png")
			},
			LUNGING_STRIKE: {
				MAX: PIXI.Texture.from("images/tree/barbarian_78.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_79.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_77.png")
			},
			IRON_SKIN: {
				MAX: PIXI.Texture.from("images/tree/barbarian_82.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_83.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_81.png")
			},
			WAR_CRY: {
				MAX: PIXI.Texture.from("images/tree/barbarian_86.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_87.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_85.png")
			},
			CHALLENGING_SHOUT: {
				MAX: PIXI.Texture.from("images/tree/barbarian_89.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_88.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_90.png")
			},
			CALL_OF_THE_ANCIENTS: {
				MAX: PIXI.Texture.from("images/tree/barbarian_93.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/barbarian_92.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/barbarian_94.png")
			}
		}
	} else if (className == "druid") {
		PIXI_TEXTURES = {
			...PIXI_TEXTURES,
			BOULDER: {
				MAX: PIXI.Texture.from("images/tree/druid_2.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_3.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_1.png")
			},
			CATACLYSM: {
				MAX: PIXI.Texture.from("images/tree/druid_6.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_7.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_5.png")
			},
			CYCLONE_ARMOR: {
				MAX: PIXI.Texture.from("images/tree/druid_10.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_11.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_9.png")
			},
			DEBILITATING_ROAR: {
				MAX: PIXI.Texture.from("images/tree/druid_14.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_15.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_13.png")
			},
			EARTHEN_BULWARK: {
				MAX: PIXI.Texture.from("images/tree/druid_18.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_19.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_17.png")
			},
			EARTH_SPIKE: {
				MAX: PIXI.Texture.from("images/tree/druid_22.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_23.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_21.png")
			},
			GRIZZLY_RAGE: {
				MAX: PIXI.Texture.from("images/tree/druid_26.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_27.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_25.png")
			},
			HURRICANE: {
				MAX: PIXI.Texture.from("images/tree/druid_30.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_31.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_29.png")
			},
			LACERATE: {
				MAX: PIXI.Texture.from("images/tree/druid_34.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_35.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_33.png")
			},
			LANDSLIDE: {
				MAX: PIXI.Texture.from("images/tree/druid_38.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_39.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_37.png")
			},
			MAUL: {
				MAX: PIXI.Texture.from("images/tree/druid_42.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_43.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_41.png")
			},
			PETRIFY: {
				MAX: PIXI.Texture.from("images/tree/druid_46.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_47.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_45.png")
			},
			PULVERIZE: {
				MAX: PIXI.Texture.from("images/tree/druid_50.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_51.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_49.png")
			},
			RAVENS: {
				MAX: PIXI.Texture.from("images/tree/druid_54.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_55.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_53.png")
			},
			STORM_STRIKE: {
				MAX: PIXI.Texture.from("images/tree/druid_58.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_59.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_57.png")
			},
			TORNADO: {
				MAX: PIXI.Texture.from("images/tree/druid_62.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_63.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_61.png")
			},
			TRAMPLE: {
				MAX: PIXI.Texture.from("images/tree/druid_66.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_67.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_65.png")
			},
			POISON_CREEPER: {
				MAX: PIXI.Texture.from("images/tree/druid_70.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_71.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_69.png")
			},
			WIND_SHEAR: {
				MAX: PIXI.Texture.from("images/tree/druid_74.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_75.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_73.png")
			},
			WOLVES: {
				MAX: PIXI.Texture.from("images/tree/druid_78.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_79.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_77.png")
			},
			CLAW: {
				MAX: PIXI.Texture.from("images/tree/druid_82.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_83.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_81.png")
			},
			BLOOD_HOWL: {
				MAX: PIXI.Texture.from("images/tree/druid_86.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_87.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_85.png")
			},
			RABIES: {
				MAX: PIXI.Texture.from("images/tree/druid_90.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_91.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_89.png")
			},
			SHRED: {
				MAX: PIXI.Texture.from("images/tree/druid_94.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_95.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_93.png")
			},
			LIGHTNING_STORM: {
				MAX: PIXI.Texture.from("images/tree/druid_97.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/druid_96.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/druid_98.png")
			}
		}
	} else if (className == "necromancer") {
		PIXI_TEXTURES = {
			...PIXI_TEXTURES,
			ARMY_OF_THE_DEAD: {
				MAX: PIXI.Texture.from("images/tree/necromancer_2.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_3.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_1.png")
			},
			BLIGHT: {
				MAX: PIXI.Texture.from("images/tree/necromancer_6.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_7.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_5.png")
			},
			BLOOD_LANCE: {
				MAX: PIXI.Texture.from("images/tree/necromancer_10.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_11.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_9.png")
			},
			BLOOD_MIST: {
				MAX: PIXI.Texture.from("images/tree/necromancer_14.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_15.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_13.png")
			},
			BLOOD_SURGE: {
				MAX: PIXI.Texture.from("images/tree/necromancer_18.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_19.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_17.png")
			},
			BLOOD_WAVE: {
				MAX: PIXI.Texture.from("images/tree/necromancer_22.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_23.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_21.png")
			},
			BONE_SPEAR: {
				MAX: PIXI.Texture.from("images/tree/necromancer_26.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_27.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_25.png")
			},
			BONE_SPIRIT: {
				MAX: PIXI.Texture.from("images/tree/necromancer_30.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_31.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_29.png")
			},
			BONE_SPLINTERS: {
				MAX: PIXI.Texture.from("images/tree/necromancer_34.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_35.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_33.png")
			},
			BONE_STORM: {
				MAX: PIXI.Texture.from("images/tree/necromancer_38.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_39.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_37.png")
			},
			BONE_PRISON: {
				MAX: PIXI.Texture.from("images/tree/necromancer_42.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_43.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_41.png")
			},
			CORPSE_EXPLOSION: {
				MAX: PIXI.Texture.from("images/tree/necromancer_46.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_47.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_45.png")
			},
			CORPSE_TENDRILS: {
				MAX: PIXI.Texture.from("images/tree/necromancer_50.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_51.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_49.png")
			},
			DECOMPOSE: {
				MAX: PIXI.Texture.from("images/tree/necromancer_54.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_55.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_53.png")
			},
			DECREPIFY: {
				MAX: PIXI.Texture.from("images/tree/necromancer_58.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_59.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_57.png")
			},
			HEMORRHAGE: {
				MAX: PIXI.Texture.from("images/tree/necromancer_66.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_67.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_65.png")
			},
			IRON_MAIDEN: {
				MAX: PIXI.Texture.from("images/tree/necromancer_70.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_71.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_69.png")
			},
			REAP: {
				MAX: PIXI.Texture.from("images/tree/necromancer_74.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_75.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_73.png")
			},
			SEVER: {
				MAX: PIXI.Texture.from("images/tree/necromancer_78.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/necromancer_79.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/necromancer_77.png")
			}
		}
	} else if (className == "rogue") {
		PIXI_TEXTURES = {
			...PIXI_TEXTURES,
			SMOKE_GRENADE: {
				MAX: PIXI.Texture.from("images/tree/rogue_0.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_1.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_213.png")
			},
			DASH: {
				MAX: PIXI.Texture.from("images/tree/rogue_4.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_5.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_3.png")
			},
			FLURRY: {
				MAX: PIXI.Texture.from("images/tree/rogue_19.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_20.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_18.png")
			},
			HEARTSEEKER: {
				MAX: PIXI.Texture.from("images/tree/rogue_35.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_36.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_34.png")
			},
			COLD_IMBUEMENT: {
				MAX: PIXI.Texture.from("images/tree/rogue_51.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_52.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_50.png")
			},
			POISON_IMBUEMENT: {
				MAX: PIXI.Texture.from("images/tree/rogue_55.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_56.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_54.png")
			},
			SHADOW_IMBUEMENT: {
				MAX: PIXI.Texture.from("images/tree/rogue_59.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_60.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_58.png")
			},
			PENETRATING_SHOT: {
				MAX: PIXI.Texture.from("images/tree/rogue_63.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_64.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_62.png")
			},
			PUNCTURE: {
				MAX: PIXI.Texture.from("images/tree/rogue_79.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_80.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_78.png")
			},
			RAPID_FIRE: {
				MAX: PIXI.Texture.from("images/tree/rogue_95.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_96.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_94.png")
			},
			SHADOW_CLONE: {
				MAX: PIXI.Texture.from("images/tree/rogue_111.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_112.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_110.png")
			},
			SHADOW_STEP: {
				MAX: PIXI.Texture.from("images/tree/rogue_115.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_116.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_114.png")
			},
			CALTROPS: {
				MAX: PIXI.Texture.from("images/tree/rogue_131.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_132.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_130.png")
			},
			BLADE_SHIFT: {
				MAX: PIXI.Texture.from("images/tree/rogue_135.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_136.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_134.png")
			},
			TWISTING_BLADES: {
				MAX: PIXI.Texture.from("images/tree/rogue_151.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_152.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_150.png")
			},
			FORCEFUL_ARROW: {
				MAX: PIXI.Texture.from("images/tree/rogue_167.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_168.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_166.png")
			},
			RAIN_OF_ARROWS: {
				MAX: PIXI.Texture.from("images/tree/rogue_183.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_184.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_182.png")
			},
			INVIGORATING_STRIKE: {
				MAX: PIXI.Texture.from("images/tree/rogue_199.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_200.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_198.png")
			},
			BARRAGE: {
				MAX: PIXI.Texture.from("images/tree/rogue_217.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_218.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_216.png")
			},
			DEATH_TRAP: {
				MAX: PIXI.Texture.from("images/tree/rogue_237.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_238.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_236.png")
			},
			POISON_TRAP: {
				MAX: PIXI.Texture.from("images/tree/rogue_241.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_242.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_240.png")
			},
			CONCEALMENT: {
				MAX: PIXI.Texture.from("images/tree/rogue_249.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_248.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_250.png")
			},
			DARK_SHROUD: {
				MAX: PIXI.Texture.from("images/tree/rogue_253.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/rogue_252.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/rogue_254.png")
			}
		}
	} else if (className == "sorcerer") {
		PIXI_TEXTURES = {
			...PIXI_TEXTURES,
			CHARGED_BOLTS: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_2.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_3.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_1.png")
			},
			TELEPORT: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_6.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_7.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_5.png")
			},
			FIREWALL: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_10.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_11.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_9.png")
			},
			INFERNO: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_14.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_15.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_13.png")
			},
			SPARK: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_18.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_19.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_17.png")
			},
			FIREBALL: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_22.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_23.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_21.png")
			},
			LIGHTNING_SPEAR: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_26.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_27.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_25.png")
			},
			BALL_LIGHTNING: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_34.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_35.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_33.png")
			},
			CHAIN_LIGHTNING: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_38.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_39.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_37.png")
			},
			FLAME_SHIELD: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_42.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_43.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_41.png")
			},
			ICE_ARMOR: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_45.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_46.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_47.png")
			},
			BLIZZARD: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_50.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_51.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_49.png")
			},
			ARC_LASH: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_54.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_55.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_53.png")
			},
			DEEP_FREEZE: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_58.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_59.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_57.png")
			},
			FIRE_BOLT: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_66.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_67.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_65.png")
			},
			FROST_BOLT: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_70.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_71.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_69.png")
			},
			FROST_NOVA: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_74.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_75.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_73.png")
			},
			FROZEN_ORB: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_78.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_79.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_77.png")
			},
			HYDRA: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_82.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_83.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_81.png")
			},
			ICE_BLADES: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_86.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_87.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_85.png")
			},
			ICE_SHARDS: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_90.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_91.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_89.png")
			},
			INCINERATE: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_94.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_95.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_93.png")
			},
			METEOR: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_98.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_99.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_97.png")
			},
			UNSTABLE_CURRENTS: {
				MAX: PIXI.Texture.from("images/tree/sorcerer_106.png"),
				ALLOCATED: PIXI.Texture.from("images/tree/sorcerer_107.png"),
				UNALLOCATED: PIXI.Texture.from("images/tree/sorcerer_105.png")
			}
		}
	}
}
function setNodeStyleThick(curNode) {
	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	const searchQueryMatch = curNode.nodeData.get("searchQueryMatch");
	const desiredNodeStyle = `thick${allocatedPoints > 0 ? "-allocated" : ""}${searchQueryMatch ? "-match" : ""}`;

	if (curNode.activeNodeStyle == desiredNodeStyle) return;

	const colorOverride = curNode.nodeData.get("colorOverride");
	const _textColor = searchQueryMatch ? searchQueryMatchColor : colorOverride == undefined ? textColor : colorOverride;

	let _lineStyleThickSquare = { ...lineStyleThickSquare };
	if (searchQueryMatch) {
		_lineStyleThickSquare.color = searchQueryMatchColor;
	} else if (curNode.groupName == PARAGON_BOARD) {
		_lineStyleThickSquare.color = COLOR_OVERRIDE[curNode.nodeData.get("nodeType") == "Socket" ? "Allocated Socket" : "Allocated"];
	} else if (colorOverride != undefined) {
		_lineStyleThickSquare.color = colorOverride;
	}

	for (let i = 1, n = curNode.children[0].children.length; i < n; i++) {
		const extraText = curNode.children[0].children[i].children[0];
		if (extraText == undefined) continue;
		extraText.style.fontWeight = "normal";
		extraText.style.fill = _textColor;
	}
	curNode.children[1].style.fill = _textColor;
	if (allocatedPoints > 0) curNode.children[1].style.fontWeight = "bold";
	if (curNode.children.length > 3) {
		curNode.children[2].style.fill = _textColor;
		curNode.children[3].children[0].style.fill = _textColor;
		curNode.children[4].children[0].style.fill = _textColor;
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
	const desiredLineStyle = `thin${allocatedPoints == 0 ? "" : "-allocated"}${searchQueryMatch ? "-match" : ""}`;

	if (curNode.activeNodeStyle == desiredLineStyle) return;

	const colorOverride = curNode.nodeData.get("colorOverride");
	const _textColor = searchQueryMatch ? searchQueryMatchColor : colorOverride == undefined ? textColor : colorOverride;

	let _lineStyleThinSquare = { ...lineStyleThinSquare };
	if (colorOverride != undefined) {
		_lineStyleThinSquare.color = colorOverride;
	}

	for (let i = 1, n = curNode.children[0].children.length; i < n; i++) {
		const extraText = curNode.children[0].children[i].children[0];
		if (extraText == undefined) continue;
		extraText.style.fontWeight = "normal";
		extraText.style.fill = _textColor;
	}
	curNode.children[1].style.fill = _textColor;
	if (allocatedPoints == 0) curNode.children[1].style.fontWeight = "normal";
	if (curNode.children.length > 3) {
		curNode.children[2].style.fill = _textColor;
		curNode.children[3].children[0].style.fill = _textColor;
		curNode.children[4].children[0].style.fill = _textColor;
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
}
const localeFlagPairs = {
	"deDE": "de",
	"enUS": "us",
	"esES": "es",
	"esMX": "mx",
	"frFR": "fr",
	"itIT": "it",
	"jaJP": "jp",
	"koKR": "kr",
	"plPL": "pl",
	"ptBR": "br",
	"ruRU": "ru",
	"trTR": "tr",
	"zhCN": "cn",
	"zhTW": "tw"
};
const localeFlagPairEntries = Object.entries(localeFlagPairs);
function handleLocaleTemplateResult(data) {
	let dataText = data.text;
	for (const [localeFull, localeShort] of localeFlagPairEntries) {
		dataText = dataText.replace(`[${localeFull}]`, `<span class="fi fi-${localeShort} fi-dropdown"></span>`);
	}
	return dataText;
}
function handleLocaleTemplateSelection(data) {
	for (const [localeFull, localeShort] of localeFlagPairEntries) {
		if (data.text.includes(`[${localeFull}]`)) return `<span class="fi fi-${localeShort}"></span>`;
	}
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
	let rawParagonData = {};
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
				if (allocatedPoints > 0 && ["Normal", "Magic", "Rare", "Gate"].includes(nodeType)) {
					if (!(boardName in rawParagonData)) rawParagonData[boardName] = [
						{
							"Strength": { minValue: 0, maxValue: 0 },
							"Intelligence": { minValue: 0, maxValue: 0 },
							"Willpower": { minValue: 0, maxValue: 0 },
							"Dexterity": { minValue: 0, maxValue: 0 }
						}, {}
					];
					rawParagonData[boardName] = updateParagonStatTotals(pixiNode, allocatedPoints, rawParagonData[boardName], true);
				}
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
		const boardHeader = pixiNodes.find(pixiNode => pixiNode.nodeName == boardName);
		const boardIndex = boardHeader.nodeData.get("boardIndex");
		paragonOutput += `\n\t[${boardName}]:`;
		if (rawParagonData[boardName] != undefined && rawParagonData[boardName][0] != undefined) {
			const sortedRawParagonData = Object.keys(rawParagonData[boardName][0]).sort((a, b) => {
				const aName = "name" in rawParagonData[boardName][0][a] ? rawParagonData[boardName][0][a].name : a;
				const bName = "name" in rawParagonData[boardName][0][b] ? rawParagonData[boardName][0][b].name : b;
				if (aName == "Strength" || (aName == "Intelligence" && bName != "Strength") || (aName == "Willpower" && bName != "Intelligence") || (aName == "Dexterity" && bName != "Willpower")) return -1;
				if (bName == "Strength" || (bName == "Intelligence" && aName != "Strength") || (bName == "Willpower" && aName != "Intelligence") || (bName == "Dexterity" && aName != "Willpower")) return 1;
				return aName.localeCompare(bName);
			});
			let paragonOutputList = [];
			for (const statName of sortedRawParagonData) {
				const statData = rawParagonData[boardName][0][statName];
				if (["Strength", "Intelligence", "Willpower", "Dexterity"].includes(statName)) {
					paragonOutputList.push(`${Math.floor(statData.minValue)} ${statName}`);
				} else {
					if (statData.maxValue == 0) continue;
					if (statData.maxValue > statData.minValue) {
						paragonOutputList.push(`${statData.prefix}[${Math.round(statData.minValue * 10) / 10} - ${Math.round(statData.maxValue * 10) / 10}]${statData.suffix}${statData.name}`);
					} else {
						paragonOutputList.push(`${statData.prefix}${Math.round(statData.minValue * 10) / 10}${statData.suffix}${statData.name}`);
					}
				}
			}
			if (paragonOutputList.length > 0) paragonOutput += `\n\t\t${paragonOutputList.join(", ")}.`;
		}
		for (const nodeType of sortedParagonNodeTypes) {
			const nodeData = boardData[nodeType];
			if (nodeData == undefined) continue;
			const nodeTypeCount = Object.keys(nodeData).length;
			const nodeTypeSuffix = nodeTypeCount == 1 ? "node" : "nodes";
			if (["Normal", "Magic"].includes(nodeType)) {
				//paragonOutput += `\n\t\t${nodeTypeCount} ${nodeType.toLowerCase()} ${nodeTypeSuffix} allocated.`;
			} else if (nodeType == "Rare") {
				paragonOutput += `\n\t\t${nodeTypeCount} ${nodeType.toLowerCase()} ${nodeTypeSuffix} allocated: [${Object.keys(nodeData).join("], [")}].`;
			} else if (nodeType == "Socket") {
				paragonOutput += `\n\t\t${nodeTypeCount} glyph ${nodeType.toLowerCase()} allocated`;
				if (boardIndex in paragonBoardGlyphData) {
					const glyphData = getGlyphData(paragonBoardGlyphData[boardIndex]);
					paragonOutput += `: [${glyphData.name}] — "${glyphData.bonus}"`;
				} else {
					paragonOutput += `.`;
				}
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
		console.log(rawParagonData);
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

	$("#extraFooter").css({ "transform": `scale(${Math.max(zoomLevel, 1)})`, "transform-origin": "center bottom" });
	$("#modalBox .select2-container").width((window.innerWidth * 0.9 - 22));

	const zoomLevelTooltip = Number(readCookie("zoomLevelTooltip", 1));
	if (!isNaN(zoomLevel) && zoomLevel >= 0.25 && zoomLevel <= 4) pixiTooltipZoomLevel = zoomLevelTooltip;
}
function handleDetailsButton(event) {
	detailsMode = !detailsMode;
	$("#detailsButton span").text(`[${detailsMode ? HIDE_DETAILS_WINDOW_TEXT : SHOW_DETAILS_WINDOW_TEXT}]`);
	writeCookie("detailsMode", detailsMode);
	updateDetailsWindow();
}
function getBaseAttributes() {
	const className = $(classString).length == 0 ? "none" : $(classString).val();
	let [baseStr, baseInt, baseWill, baseDex] = [7, 7, 7, 7];
	let levelAttributes = Number($("#charLevel").text()) - 1;
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
	const altarNodes = pixiNodes.filter(pixiNode => pixiNode.groupName == ALTARS_OF_LILITH);
	for (const altarNode of altarNodes) {
		const nodeData = altarNode.nodeData;
		if (nodeData.get("allocatedPoints") == 0) continue;
		const altarData = nodeData.get("altarData");

		baseStr += altarData.strength;
		baseInt += altarData.intelligence;
		baseWill += altarData.willpower;
		baseDex += altarData.dexterity;
	}
	return [baseStr + levelAttributes, baseInt + levelAttributes, baseWill + levelAttributes, baseDex + levelAttributes];
}
function updateDetailsWindow() {
	const className = $(classString).length == 0 ? "none" : $(classString).val();
	if (detailsMode && className != "none") {
		const savedScrollPosition = $("#detailsWindowBox").scrollTop();

		if (!("+{#} Armor" in paragonStatTotals)) paragonStatTotals["+{#} Armor"] = { name: "Armor", prefix: "+", suffix: " ", minValue: 0, maxValue: 0 };
		if (!("+{#}% Dodge Chance" in paragonStatTotals)) paragonStatTotals["+{#}% Dodge Chance"] = { name: "Dodge Chance", prefix: "+", suffix: "% ", minValue: 0, maxValue: 0 };
		if (!("+{#}% Critical Strike Chance" in paragonStatTotals)) paragonStatTotals["+{#}% Critical Strike Chance"] = { name: "Critical Strike Chance", prefix: "+", suffix: "% ", minValue: 0, maxValue: 0 };
		if (!("+{#}% Healing Received" in paragonStatTotals)) paragonStatTotals["+{#}% Healing Received"] = { name: "Healing Received", prefix: "+", suffix: "% ", minValue: 0, maxValue: 0 };
		if (!("+{#}% Overpower Damage" in paragonStatTotals)) paragonStatTotals["+{#}% Overpower Damage"] = { name: "Overpower Damage", prefix: "+", suffix: "% ", minValue: 0, maxValue: 0 };
		if (!("{#}% Resistance to All Elements" in paragonStatTotals)) paragonStatTotals["{#}% Resistance to All Elements"] = { name: "Resistance to All Elements", prefix: "", suffix: "% ", minValue: 0, maxValue: 0 };
		if (!("x{#}% Resource Generation" in paragonStatTotals)) paragonStatTotals["x{#}% Resource Generation"] = { name: "Resource Generation", prefix: "x", suffix: "% ", minValue: 0, maxValue: 0 };
		if (!("x{#}% Skill Damage" in paragonStatTotals)) paragonStatTotals["x{#}% Skill Damage"] = { name: "Skill Damage", prefix: "x", suffix: "% ", minValue: 0, maxValue: 0 };

		const sortedParagonStatTotals = Object.keys(paragonStatTotals).sort((a, b) => {
			const aName = "name" in paragonStatTotals[a] ? paragonStatTotals[a].name : a;
			const bName = "name" in paragonStatTotals[b] ? paragonStatTotals[b].name : b;
			if (aName == "Strength" || (aName == "Intelligence" && bName != "Strength") || (aName == "Willpower" && bName != "Intelligence") || (aName == "Dexterity" && bName != "Willpower")) return -1;
			if (bName == "Strength" || (bName == "Intelligence" && aName != "Strength") || (bName == "Willpower" && aName != "Intelligence") || (bName == "Dexterity" && aName != "Willpower")) return 1;
			return aName.localeCompare(bName);
		});

		let [curStr, curInt, curWill, curDex] = getBaseAttributes();

		function summarizeParagonStats(attributeMode = false) {
			let outputHTML = "";
			let alternateHTML = "";
			for (const statName of sortedParagonStatTotals) {
				const statData = paragonStatTotals[statName];
				if (["Strength", "Intelligence", "Willpower", "Dexterity"].includes(statName) != attributeMode) continue;
				if (attributeMode) {
					if (statName == "Strength") {
						curStr += Math.floor(statData.minValue);
						outputHTML += `<div>${curStr} ${statName}</div>`;
					} else if (statName == "Intelligence") {
						curInt += Math.floor(statData.minValue);
						outputHTML += `<div>${curInt} ${statName}</div>`;
					} else if (statName == "Willpower") {
						curWill += Math.floor(statData.minValue);
						outputHTML += `<div>${curWill} ${statName}</div>`;
					} else {
						curDex += Math.floor(statData.minValue);
						outputHTML += `<div>${curDex} ${statName}</div>`;
					}
				} else {
					let [minValue, maxValue] = [statData.minValue, statData.maxValue];

					if (statData.name == "Armor") {
						[minValue, maxValue] = [minValue + curStr, maxValue + curStr];
					} else if (statData.name == "Dodge Chance") {
						[minValue, maxValue] = [minValue + curDex * 0.025, maxValue + curDex * 0.025];
					} else if (statData.name == "Critical Strike Chance") {
						if (["barbarian", "druid", "necromancer", "sorcerer"].includes(className)) {
							[minValue, maxValue] = [minValue + curDex * 0.02, maxValue + curDex * 0.02];
						} else if (className == "rogue") {
							[minValue, maxValue] = [minValue + curInt * 0.02, maxValue + curInt * 0.02];
						}
					} else if (statData.name == "Healing Received") {
						[minValue, maxValue] = [minValue + curWill * 0.1, maxValue + curWill * 0.1];
					} else if (statData.name == "Overpower Damage") {
						[minValue, maxValue] = [minValue + curWill * 0.25, maxValue + curWill * 0.25];
					} else if (statData.name == "Resistance to All Elements") {
						[minValue, maxValue] = [minValue + curInt * 0.05, maxValue + curInt * 0.05];
					} else if (statData.name == "Resource Generation") {
						if (["barbarian", "necromancer", "sorcerer"].includes(className)) {
							[minValue, maxValue] = [minValue + curWill * 0.1, maxValue + curWill * 0.1];
						} else if (className == "druid") {
							[minValue, maxValue] = [minValue + curInt * 0.1, maxValue + curInt * 0.1];
						} else if (className == "rogue") {
							[minValue, maxValue] = [minValue + curStr * 0.1, maxValue + curStr * 0.1];
						}
					} else if (statData.name == "Skill Damage") {
						if (className == "barbarian") {
							[minValue, maxValue] = [minValue + curStr * 0.1, maxValue + curStr * 0.1];
						} else if (["necromancer", "sorcerer"].includes(className)) {
							[minValue, maxValue] = [minValue + curInt * 0.1, maxValue + curInt * 0.1];
						} else if (className == "druid") {
							[minValue, maxValue] = [minValue + curWill * 0.1, maxValue + curWill * 0.1];
						} else if (className == "rogue") {
							[minValue, maxValue] = [minValue + curDex * 0.1, maxValue + curDex * 0.1];
						}
					}

					[minValue, maxValue] = [Math.round(minValue * 10) / 10, Math.round(maxValue * 10) / 10];

					if (maxValue == 0) continue;

					let prefixSplit = [statData.prefix.slice(0, -1), statData.prefix.slice(-1)];
					if (!["+", "x"].includes(prefixSplit[1])) prefixSplit = [statData.prefix, ""];

					let suffixSplit = [statData.suffix.slice(0, 1), statData.suffix.slice(1)];
					if (suffixSplit[0] != "%") suffixSplit = ["", statData.suffix];

					if (statData.maxValue > statData.minValue) {
						alternateHTML += `<tr><td>${prefixSplit[0]}</td><td>${prefixSplit[1]}</td><td>[${minValue} - ${maxValue}]</td><td>${suffixSplit[0]}</td><td>${suffixSplit[1]}${statData.name}</td></tr>`;
						outputHTML += `<div>${statData.prefix}[${minValue} - ${maxValue}]${statData.suffix}${statData.name}</div>`;
					} else {
						alternateHTML += `<tr><td>${prefixSplit[0]}</td><td>${prefixSplit[1]}</td><td>${minValue}</td><td>${suffixSplit[0]}</td><td>${suffixSplit[1]}${statData.name}</td></tr>`;
						outputHTML += `<div>${statData.prefix}${minValue}${statData.suffix}${statData.name}</div>`;
					}
				}
			}
			if (outputHTML.length > 0) {
				if (attributeMode) return `${outputHTML}`;
				return `<hr><div id="detailsWindowBox">${outputHTML}<table>${alternateHTML}</table></div>`;
			}
			return "";
		}
		$("#detailsWindowContents").html(summarizeParagonStats(true) + summarizeParagonStats(false));

		$("#detailsWindow").removeClass("disabled");
		$("#detailsWindowBox").on("scroll", resetFrameTimer);

		handleDetailsWindowEvent(null, null, savedScrollPosition);
	} else {
		$("#detailsWindow").addClass("disabled");
		$("#detailsWindowContents").empty();
	}
}
function handleDetailsWindowEvent(event, eventType, savedScrollPosition) {
	const [detailsWindow, detailsWindowBox] = [$("#detailsWindow"), $("#detailsWindowBox")];

	let [detailsLeft, detailsTop] = [readCookie("detailsLeft", 0), readCookie("detailsTop", 0)];
	let [detailsWidth, detailsHeight] = [readCookie("detailsWidth", 160), readCookie("detailsHeight", 160)];
	if (eventType == "drag") {
		[detailsLeft, detailsTop] = [event.rect.left, event.rect.top];
		writeCookie("detailsLeft", detailsLeft);
		writeCookie("detailsTop", detailsTop);
	} else if (eventType == "resize") {
		detailsWidth = Math.max(event.rect.width, parseFloat(detailsWindow.css("min-width")) || 0)
		if (!detailsWindow.data("no-resize")) detailsHeight = Math.max(event.rect.height, parseFloat(detailsWindow.css("min-height")) || 0);
		writeCookie("detailsWidth", detailsWidth);
		if (!detailsWindow.data("no-resize")) writeCookie("detailsHeight", detailsHeight);
	}

	const detailsWindowChildrenLength = detailsWindowBox.children().length;
	const detailsWindowBoxMinHeight = Math.min(28 * detailsWindowChildrenLength, 112) - 5;

	detailsWindowBox.css({
		"min-height": Math.max(0, detailsWindowBoxMinHeight),
		"max-height": curHeight - 202,
		"height": Math.max(detailsHeight - 198, detailsWindowBoxMinHeight)
	});

	detailsWindow
		.css({
			"min-width": 200,
			"min-height": detailsWindow.data("no-resize") ? "" : detailsWindowChildrenLength > 0 ? 195 + detailsWindowBoxMinHeight : 170,
			"max-width": curWidth - 2,
			"max-height": curHeight - 2,
			"width": detailsWindowChildrenLength > 0 ? detailsWidth : 200,
			"height": detailsWindow.data("no-resize") ? "" : detailsWindowChildrenLength > 0 ? detailsHeight : 170
		})
		.css({
			"left": Math.max(Math.min(detailsLeft, curWidth - detailsWindow.outerWidth(true)), 0),
			"top": Math.max(Math.min(detailsTop, curHeight - detailsWindow.outerHeight(true)), 0)
		});

	if (detailsWindow.outerWidth(true) > 500) {
		$("#detailsWindowBox > div").css("display", "none");
		$("#detailsWindowBox > table").css("display", "");
	} else {
		$("#detailsWindowBox > table").css("display", "none");
		$("#detailsWindowBox > div").css("display", "");
	}

	if (savedScrollPosition == null) {
		resetFrameTimer();
	} else {
		$("#detailsWindowBox").scrollTop(savedScrollPosition);
	}
}
function handleDetailsWindowToggleButton(event) {
	const wasHidden = $("#detailsWindowContents").css("display") == "none";
	if (wasHidden) {
		$("#detailsWindowHeader").css("border-bottom", "1px solid #fff");
		$("#detailsWindowToggle").attr("src", "images/collapse.svg");
		$("#detailsWindow").removeData("no-resize");
	} else {
		$("#detailsWindow").css({ "height": "", "min-height": "" });
	}
	$("#detailsWindowContents").slideToggle(250, () => {
		if (wasHidden) {
			handleDetailsWindowEvent();
		} else {
			$("#detailsWindow").data("no-resize", "true");
			$("#detailsWindowHeader").css("border-bottom", "none");
			$("#detailsWindowToggle").attr("src", "images/expand.svg");
		}
	});
}
function handleClampButton(event) {
	clampMode = !clampMode;
	$("#clampButton span").text(`[${clampMode ? DISABLE_TOOLTIP_CLAMP_TEXT : ENABLE_TOOLTIP_CLAMP_TEXT}]`);
	writeCookie("clampMode", clampMode);

	repositionTooltip();
	resizeSearchInput();
}
function handleHistoryButton(event) {
	window.open("./history/");
}
const localVersion = "1.0.2.42167-1";
var remoteVersion = "";
var versionInterval = null;
function handleVersionLabel(event) {
	if (event.type == "click" && versionCompare(localVersion, remoteVersion) == -1) window.location.reload();
}
function handleVersionInterval() {
	$.get(`VERSION?t=${Date.now()}`, null, versionData => {
		if (versionCompare(localVersion, versionData) == -1) {
			$("#versionLabel").html(` <span class="green" title="${UPDATE_AVAILABLE_TEXT}">${UPDATE_AVAILABLE_LABEL_TEXT}</span>`).css("cursor", "pointer");
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
	if (isEventHandlerBusy) return;

	const idleTime = frameTimer == null ? 1000 : Date.now() - frameTimer;
	if (idleTime < 200) return;

	newRenderScale = Math.min(pixiJS.stage.scale.x, 2);
	if (newRenderScale == curRenderScale) {
		const partialEventQueue = [...pixiEventQueue].slice(0, 199);
		for (const nodeIndex of partialEventQueue) {
			if (pixiNodes[nodeIndex].stale) {
				redrawNode(pixiNodes[nodeIndex]);
				pixiEventQueue.delete(nodeIndex);
			}
			if (isEventHandlerBusy) break;
		}
	} else {
		// skip `redrawAllNodes` on high pixel density devices
		if (devicePixelRatio < 2) {
			redrawAllNodes(false);
			if (pixiTooltip.children.length > 0) drawTooltip(pixiNodes[pixiTooltip.nodeIndex]);
		}
		curRenderScale = newRenderScale;
	}

	if (idleTime > 3000) {
		redrawAllNodes(true);
		[pixiJS.ticker.minFPS, pixiJS.ticker.maxFPS] = [1, 1];
		frameTimer = null;
	}
}
function handleCanvasEvent(event) {
	resetFrameTimer();
	isEventHandlerBusy = true;

	switch (event.type) {
		case "mousedown":
		case "touchstart":
			window.getSelection().removeAllRanges();
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
		case "mouseenter":
		case "mouseleave":
			if (!pixiDragging) eraseTooltip();
			return;
		case "touchmove":
			if (touchTimer != null && Date.now() - touchTimer > 1500) {
				touchTimer = null;
				eraseTooltip();
			}
			break;
		case "touchend":
			touchTimer = null;
			isTouching = false;
			return;
		case "contextmenu":
			event.preventDefault();
			return;
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
	isEventHandlerBusy = false;
}
function handleClassSelection(event, postHookFunction = null) {
	const className = $(classString).length == 0 ? "none" : $(classString).val();
	const classText = className[0].toUpperCase() + className.slice(1);

	if (classText != $("#className").text()) {
		$("#classSelectBox").addClass("disabled");
		if (className != "none") $("#modalBox").text("[Loading...]").removeClass("disabled");
		setTimeout(() => {
			$("#className").text(classText);
			if (className == "none") {
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
	if (newGroupNode != undefined) pixiJS.stage.pivot.set(newGroupNode.x - curWidth / pixiJS.stage.scale.x * 0.5, newGroupNode.y - curHeight / pixiJS.stage.scale.y * 0.5);
}
var oldSearchIdx = -1;
var oldSearchText = "";
function handleSearchInput(event) {
	const newSearchText = $("#searchInput").val().normalize("NFD").replace(/[\u0300-\u036F]/g, "").toLowerCase();

	if (newSearchText.length >= 2) resetFrameTimer();
	let nodeMatch = pixiNodes.filter(pixiNode => {
		if (newSearchText.length >= 2) {
			// search `nodeHeader` for `newSearchText`
			let nodeHeader = pixiNode.nodeData.get("nameOverride");
			if (nodeHeader == undefined) {
				nodeHeader = pixiNode.localizedName;
				const itemSlot = pixiNode.nodeData.get("itemSlot");
				const itemType = pixiNode.nodeData.get("itemType");
				if (itemSlot != undefined) {
					nodeHeader += ` (${itemType} ${itemSlot})`;
				} else if (itemType != undefined) {
					nodeHeader += ` (${itemType})`;
				}
			}
			if (nodeHeader.normalize("NFD").replace(/[\u0300-\u036F]/g, "").toLowerCase().includes(newSearchText)) {
				pixiNode.nodeData.set("searchQueryMatch", true);
				setNodeStyleThick(pixiNode);
				return true;
			} else {
				// failed to find `newSearchText` in any `nodeName`, trying `nodeDesc` next
				const nodeDesc = pixiNode.localizedDesc;
				if (nodeDesc != undefined && nodeDesc.length > 0
					&& nodeDesc.normalize("NFD").replace(/[\u0300-\u036F]/g, "").toLowerCase().includes(newSearchText)) {
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

			pixiJS.stage.pivot.set(nodeX - curWidth / pixiJS.stage.scale.x * 0.5, nodeY - curHeight / pixiJS.stage.scale.y * 0.5);
			drawTooltip(nodeMatch);
		}
	}
	oldSearchText = newSearchText;

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
			+ `<div id="clampButton"><img src="images/clamp.svg">&nbsp;<span>[${clampMode ? DISABLE_TOOLTIP_CLAMP_TEXT : ENABLE_TOOLTIP_CLAMP_TEXT}]</span></div>`
			+ `<div id="historyButton"><img src="images/history.svg">&nbsp;<span>[${VERSION_HISTORY_TEXT}]</span></div>`)
			.removeClass("disabled");

		$("#detailsButton").on("click", handleDetailsButton);
		$("#zoomButton").on("click", handleZoomButton);
		$("#summaryButton").on("click", handleSummaryButton);
		$("#clampButton").on("click", handleClampButton);
		$("#historyButton").on("click", handleHistoryButton);

		$("#menuButton").text(CLOSE_MENU_TEXT);
	} else {
		closeExtraInfo();
	}
}
function closeExtraInfo() {
	$("#extraInfo").empty().addClass("disabled");
	$("#menuButton").text(OPEN_MENU_TEXT);
}
function handleResetButton() {
	if (confirm(RESET_BUTTON_CONFIRM_TEXT)) {
		const className = $(classString).length == 0 ? "none" : $(classString).val();
		return className == "none" ? handleClassSelection() : rebuildCanvas();
	}
}
function handleSaveButton() {
	const className = $(classString).length == 0 ? "none" : $(classString).val();
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

		if (Object.keys(equipmentPanelData).length > 0) {
			nodeData.equipData = {};
			for (const [equipSlot, codexPower] of Object.entries(equipmentPanelData)) {
				nodeData.equipData[convertNodeId(equipSlot, EQUIPMENT_PANEL)] = convertNodeId(codexPower, CODEX_OF_POWER);
			}
			nodeData.equipData = LZString.compressToEncodedURIComponent(JSON.stringify(nodeData.equipData).replace(/"/g, ""));
		}

		if (techniqueSlotData != null) nodeData.techniqueData = techniqueSlotData;

		if (Object.keys(enchantSlotData).length > 0) nodeData.enchantSlotData = LZString.compressToEncodedURIComponent(JSON.stringify(enchantSlotData).replace(/"/g, ""));

		pixiNodes.forEach(curNode => {
			if (![undefined, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS].includes(curNode.groupName)) {
				const allocatedPoints = curNode.nodeData.get("allocatedPoints");
				if (allocatedPoints > 0) {
					const nodeId = convertNodeId(curNode.nodeData.get("id"), curNode.groupName);
					nodeData[nodeId] = allocatedPoints;
				}
			}
		});

		if (debugMode) console.log(nodeData);
		const jsonData = JSON.stringify(nodeData)
			.replace(/("|:1)/g, "")
			.replace(/({|,)className:/, "$1c:")
			.replace(/({|,)boardData:/, "$1b:")
			.replace(/({|,)equipData:/, "$1e:")
			.replace(/({|,)techniqueData:/, "$1t:")
			.replace(/({|,)enchantSlotData:/, "$1E:");
		const compressedData = LZString.compressToEncodedURIComponent(jsonData);
		const newURL = window.location.href.split(/[#?&]/)[0] + "#" + compressedData;
		window.location.replace(newURL);
	}
}
function handleReloadButton() {
	const className = $(classString).length == 0 ? "none" : $(classString).val();
	const urlHash = window.location.hash.replace("#", "").split(/[?&]/)[0];

	let nodeData = { className: className };
	if (urlHash.length > 0) {
		const jsonData = LZString.decompressFromEncodedURIComponent(urlHash);
		// valid JSON always requires quotes around key names; we strip those (and object "1-values") to increase compression
		nodeData = jsonData.includes('"') ? JSON.parse(jsonData) :
			JSON.parse(jsonData
				.replace(/({|,)c:/, "$1className:")
				.replace(/({|,)b:/, "$1boardData:")
				.replace(/({|,)e:/, "$1equipData:")
				.replace(/({|,)t:/, "$1techniqueData:")
				.replace(/({|,)E:/, "$1enchantSlotData:")
				.replace(/([,\[\]{}])([^:,\[\]{}]+)/g, '$1"$2"')															// restore key double quotes
				.replace(/","/g, '":1,"') 																					// restore object "1-values"
				.replace(/("(?:className|boardData|equipData|techniqueData|enchantSlotData)":)([^,\[\]{}]+)/g, '$1"$2"')	// restore various data double quotes
				.replace(/(,"[^:,]+")}/g, '$1:1}')																			// restore final object value
			);
	}

	if (nodeData.className == "none") {
		handleClassSelection();
	} else {
		$("#classSelector").val(nodeData.className);
		handleClassSelection(null, finishLoading);

		function finishLoading() {
			delete nodeData.className;

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

			if ("equipData" in nodeData) {
				nodeData.equipData = JSON.parse(LZString.decompressFromEncodedURIComponent(nodeData.equipData)
					.replace(/([,\[\]{}])([^:,\[\]{}]+)/g, '$1"$2"')
					.replace(/:([\w]+)(,|})/g, ':"$1"$2'));

				for (let i = 0; i < 14; i++) {
					const equipId = `equip-${i}`;
					const equipNode = pixiNodes.find(pixiNode => pixiNode.nodeData.get("id") == equipId);
					const codexId = nodeData.equipData[convertNodeId(equipId, EQUIPMENT_PANEL)];
					if (codexId == null) {
						if (equipNode != null) unequipPanelPower(equipNode);
					} else {
						equipPanelPower(equipNode, convertNodeId(codexId, CODEX_OF_POWER, true));
					}
				}
				delete nodeData.equipData;
			}

			if ("techniqueData" in nodeData) {
				const techniqueId = nodeData.techniqueData;
				equipTechnique(techniqueId);
				delete nodeData.techniqueData;
			} else {
				unequipTechnique();
			}

			if ("enchantSlotData" in nodeData) {
				nodeData.enchantSlotData = JSON.parse(LZString.decompressFromEncodedURIComponent(nodeData.enchantSlotData)
					.replace(/([,\[\]{}])([^:,\[\]{}]+)/g, '$1"$2"')
					.replace(/:([\w]+)(,|})/g, ':"$1"$2'));

				for (let i = 0; i < 2; i++) {
					const enchantNode = enchantSlotNodes[i];
					const enchantId = nodeData.enchantSlotData[i];
					if (enchantId == null) {
						if (enchantNode != null) unequipEnchant(enchantNode);
					} else {
						equipEnchant(enchantNode, enchantId);
					}
				}
				delete nodeData.enchantSlotData;
			}

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
				const newPoints = Math.max(Math.min(savedPoints, maxPoints), 0);

				if (curNode.groupName == PARAGON_BOARD) {
					let paragonNodeValue = 1;
					if (curNode.nodeName == "Board Attachment Gate") {
						paragonNodeValue = 0.5;
					} else if (curNode.nodeName == "Paragon Starting Node") {
						paragonNodeValue = 0;
					}
					pixiAllocatedParagonPoints += (newPoints - allocatedPoints) * paragonNodeValue;
				} else if (![SPIRIT_BOONS, BOOK_OF_THE_DEAD, ALTARS_OF_LILITH, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS, CODEX_OF_POWER].includes(curNode.groupName)) {
					pixiAllocatedPoints.set(curNode.groupName, pixiAllocatedPoints.get(curNode.groupName) - allocatedPoints + newPoints);
				}
				updateNodePoints(curNode, newPoints);
			}

			// sort nodes based on their saved points, so nodes get deallocated first (to free up unused points) before allocating new nodes
			const sortedNodes = [...pixiNodes].filter(pixiNode => ![undefined, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS].includes(pixiNode.groupName)).sort(compareNodes);
			for (let i = 0, n = sortedNodes.length; i < n; i++) processNode(sortedNodes[i]);

			glyphRadiusAttributeTotals = {};
			paragonStatTotals = {
				"Strength": { minValue: 0, maxValue: 0 },
				"Intelligence": { minValue: 0, maxValue: 0 },
				"Willpower": { minValue: 0, maxValue: 0 },
				"Dexterity": { minValue: 0, maxValue: 0 }
			};
			// recalculate glyph radius attribute totals and paragon stat totals
			for (const pixiNode of pixiNodes) {
				if (pixiNode.groupName != PARAGON_BOARD) continue;
				const allocatedPoints = pixiNode.nodeData.get("allocatedPoints");
				if (pixiNode.nodeData.get("nodeType") != "Socket") updateParagonStatTotals(pixiNode, allocatedPoints);
			}

			updateCharacterLevel();
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
	this.__zIndex = this.zIndex;
	this.zIndex = 9;
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
	this.zIndex = this.__zIndex;
	delete this.__zIndex;
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
function onMouseOverNode(event) {
	if ($("#fadeOverlay").hasClass("disabled")) drawTooltip(this);
}
function onMouseOverBackground(event) {
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
function resetAllParagonBoards() {
	if (!confirm(`${PARAGON_BOARD_RESET_ALL_PROMPT}`)) return;

	const paragonNodes = pixiNodes.filter(pixiNode => pixiNode.groupName == PARAGON_BOARD);
	for (const paragonNode of paragonNodes) {
		handleMinusButton(paragonNode);
		const nodeData = paragonNode.nodeData;
		if (nodeData.get("nodeType") == "Socket") nodeData.delete("nameOverride");
	}

	for (const [boardIndex, gridLocation] of Object.entries(paragonBoardGridData)) moveParagonBoard(Number(boardIndex), 0);
	for (const [boardIndex, rotationAngle] of Object.entries(paragonBoardRotationData)) rotateParagonBoard(Number(boardIndex), 0);
	for (const [boardIndex, equipIndex] of Object.entries(paragonBoardEquipIndices)) setParagonBoardEquipIndex(Number(boardIndex), 0);
	paragonBoardGlyphData = {};
	paragonBoardGlyphRankData = {};

	if (pixiTooltip.children.length > 0) eraseTooltip(); // force tooltip erase, mostly for mobile
}
const paragonBoardGridCoordinates = {
	"V": [-9750, -16850], "E": [-6500, -16850], "F": [-3250, -16850], "G": [0, -16850], "H": [3250, -16850], "I": [6500, -16850], "U": [9750, -16850],
	"W": [-9750, -13500], "D": [-6500, -13500], "J": [-3250, -13500], "K": [0, -13500], "L": [3250, -13500], "M": [6500, -13500], "T": [9750, -13500],
	"X": [-9750, -10150], "C": [-6500, -10150], "7": [-3250, -10150], "8": [0, -10150], "9": [3250, -10150], "N": [6500, -10150], "S": [9750, -10150],
	"Y": [-9750,  -6800], "B": [-6500,  -6800], "4": [-3250,  -6800], "5": [0,  -6800], "6": [3250,  -6800], "O": [6500,  -6800], "R": [9750,  -6800],
	"Z": [-9750,  -3450], "A": [-6500,  -3450], "1": [-3250,  -3450], "2": [0,  -3450], "3": [3250,  -3450], "P": [6500,  -3450], "Q": [9750,  -3450],
};
let paragonBoardGridData = {};
function moveParagonBoard(boardIndex, forcedGridLocation = null) {
	const boardHeader = pixiNodes.find(pixiNode => pixiNode.nodeData.get("boardIndex") == boardIndex);
	const boardContainer = boardHeader.nodeData.get("boardContainer");

	let gridLocation;
	if (forcedGridLocation == null) {
		const currentGridLocation = paragonBoardGridData[boardIndex];
		const promptInput = prompt(PARAGON_BOARD_GRID_PROMPT_PREFIX + `[${boardHeader.nodeName}]` + PARAGON_BOARD_GRID_PROMPT_SUFFIX
			+ "V E F G H I U\n"
			+ "W D J K L M T\n"
			+ "X C 7 8 9 N S\n"
			+ "Y B 4 5 6 O R\n"
			+ "Z A 1 2 3 P Q\n"
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

	if (paragonBoardEquipIndices[boardIndex] == equipIndex) return;
	if (equipIndex < 1 || equipIndex > 9) {
		delete paragonBoardEquipIndices[boardIndex];
	} else {
		paragonBoardEquipIndices[boardIndex] = equipIndex;
	}

	boardHeader.scaleFactor = -1; // force redraw
	redrawNode(boardHeader);
}
let paragonBoardGlyphData = {};
let paragonBoardGlyphRankData = {};
function handleParagonGlyphSocket(curNode) {
	const nodeData = curNode.nodeData;
	if (nodeData.get("allocatedPoints") == 0 && getUnusedPoints(true) == 0) return;
	handlePlusButton(curNode);

	const activeLocale = readCookie("activeLocale", "enUS");
	const boardIndex = nodeData.get("_boardIndex");
	const boardHeader = nodeData.get("_boardHeader");
	const boardContainer = boardHeader.nodeData.get("boardContainer");

	const className = $(classString).length == 0 ? "none" : $(classString).val();
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
		if (glyphName + "_Druid" in paragonGlyphs && classText == "Druid") continue;
		if (glyphName + "_Necro" in paragonGlyphs && classText == "Necromancer") continue;
		if (glyphName + "_Rogue" in paragonGlyphs && classText == "Rogue") continue;
		if (glyphName + "_Sorc" in paragonGlyphs && classText == "Sorcerer") continue;
		const glyphIndex = Number(glyphName.match(/\d+/)[0]);
		const glyphBoard = Object.keys(paragonBoardGlyphData).find(key => paragonBoardGlyphData[key] == glyphIndex);
		const localizedGlyphName = activeLocale in glyphData.nameLocalized ? glyphData.nameLocalized[activeLocale] : glyphData.name;
		const localizedGlyphDesc = (activeLocale in glyphData.descLocalized ? glyphData.descLocalized[activeLocale] : glyphData.desc)
			.replace(/{(.+?)}/g, (matchText, captureText) => {
			const outputText = captureText.split("/");
			return outputText[outputText.length - 1];
		});
		const localizedGlyphBonus = activeLocale in glyphData.bonusLocalized ? glyphData.bonusLocalized[activeLocale] : glyphData.bonus;
		modalOptions += `<option value="${glyphIndex}">${localizedGlyphName} — ${localizedGlyphDesc}[br]`;
		modalOptions += `${localizedGlyphBonus}[br]Requires: ${glyphData.thresholdRequirements}.`;
		if (glyphBoard == undefined) {
			modalOptions += `</option>`;
		} else {
			const socketHeader = pixiNodes.find(pixiNode => pixiNode.nodeData.get("boardIndex") == glyphBoard);
			modalOptions += ` Current Board: [${socketHeader.nodeName}].</option>`;
		}
	}

	$("#fadeOverlay").removeClass("disabled");
	$("#modalBox").html(`<div id="modalDiv1">${GLYPH_SELECT_PROMPT_PREFIX}[${boardHeader.nodeName}]:</div>`
		+ `<div id="modalDiv2"><select id="modalSelect">${modalOptions}</select></div>`
		+ `<div id="modalDiv3"><input type="range" min="1" max="21" value="1" id="modalSlider"></div>`
		+ `<div id="modalDiv4"></div>`
		+ `<div id="modalDiv5">${GLYPH_SELECT_PROMPT_SUFFIX}</div>`
		+ `<div id="modalDiv6"><button id="modalConfirm" type="button">Confirm</button>`
		+ `&nbsp;<button id="modalCancel" type="button">Cancel</button></div>`).removeClass("disabled");

	$("#modalSelect").select2({
		dropdownParent: $("#modalDiv2"),
		escapeMarkup: data => data,
		templateResult: data => data.text.replaceAll("[br]", curWidth < 1400 ? " " : "<br>"),
		templateSelection: data => {
			const selectionText1 = data.text.split(" — ");
			const selectionText2 = selectionText1[1].split("[br]");
			return `${selectionText1[0]} — ${selectionText2[1]} ${selectionText2[2]}`;
		}
	});
	applyZoomLevel(); // hacky workaround for select2 transform bug

	function updateGlyphDescText(event) {
		const glyphIndex = Number($("#modalSelect").val());
		const glyphRank = Number(event && event.type == "input" ? this.value : $("#modalSlider").val());
		const glyphData = getGlyphData(glyphIndex);
		const localizedGlyphDesc = (activeLocale in glyphData.descLocalized ? glyphData.descLocalized[activeLocale] : glyphData.desc)
			.replace(/{(.+?)}/g, (matchText, captureText) => {
			const outputText = captureText.split("/");
			return outputText[glyphRank > 0 ? Math.min(glyphRank, outputText.length) - 1 : 0];
		});
		$("#modalDiv4").text(`Rank ${glyphRank}: ${localizedGlyphDesc}`);
	}

	$("#modalSelect").on("change", updateGlyphDescText);
	$("#modalSlider").on("input", updateGlyphDescText);

	if (paragonBoardGlyphData[boardIndex] != undefined) $("#modalSelect").val(paragonBoardGlyphData[boardIndex]).trigger("change");
	if (paragonBoardGlyphRankData[boardIndex] != undefined) $("#modalSlider").val(paragonBoardGlyphRankData[boardIndex]).trigger("change");
	updateGlyphDescText();

	$("#modalConfirm").on("click", () => {
		updateGlyphBonusesFromNodes(boardHeader, -1, ["Magic", "Rare"]);
		updateGlyphBonusesFromNodes(boardHeader, -1, ["Socket"]);

		const glyphIndex = Number($("#modalSelect").val());
		paragonBoardGlyphData[boardIndex] = glyphIndex;

		const glyphRank = Number($("#modalSlider").val());
		if (glyphRank > 1) {
			paragonBoardGlyphRankData[boardIndex] = glyphRank;
		} else {
			delete paragonBoardGlyphRankData[boardIndex];
		}

		updateGlyphBonusesFromNodes(boardHeader, 1, ["Socket"]);
		updateGlyphBonusesFromNodes(boardHeader, 1, ["Magic", "Rare"]);

		if (pixiTooltip.children.length > 0) drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true); // force tooltip redraw, mostly for mobile

		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
	$("#modalCancel").on("click", () => {
		unequipParagonGlyph(curNode, false);
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
}
function unequipParagonGlyph(curNode, redrawTooltip = false) {
	const nodeData = curNode.nodeData;
	const boardIndex = nodeData.get("_boardIndex");
	const boardHeader = nodeData.get("_boardHeader");

	updateGlyphBonusesFromNodes(boardHeader, -1, ["Magic", "Rare", "Socket"]);

	delete paragonBoardGlyphData[boardIndex];
	delete paragonBoardGlyphRankData[boardIndex];
	nodeData.delete("nameOverride");
	handleMinusButton(curNode);

	updateGlyphBonusesFromNodes(boardHeader, 1, ["Magic", "Rare"]);

	if (pixiTooltip.children.length > 0) {
		if (redrawTooltip) {
			drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true);
		} else {
			eraseTooltip();
		}
	}
}
function handleBoardAttachmentNode(curNode) {
	const nodeData = curNode.nodeData;

	const boardIndex = nodeData.get("_boardIndex");
	const gridLocations = [["V", "E", "F", "G", "H", "I", "U"],
						   ["W", "D", "J", "K", "L", "M", "T"],
						   ["X", "C", "7", "8", "9", "N", "S"],
						   ["Y", "B", "4", "5", "6", "O", "R"],
						   ["Z", "A", "1", "2", "3", "P", "Q"]];
	let gridTarget = null;
	if (boardIndex == 0) {
		gridTarget = gridLocations[4][3];
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
			if (gridY < 6) gridTarget = gridLocations[gridX][gridY + 1];
		} else if (yPosition == 0) {
			if (gridX > 0) gridTarget = gridLocations[gridX - 1][gridY];
		} else {
			if (gridX < 4) gridTarget = gridLocations[gridX + 1][gridY];
		}
	}
	if (gridTarget == null) return;

	const gridBoardIndex = Object.keys(paragonBoardGridData).find(key => paragonBoardGridData[key] == gridTarget);
	if (gridBoardIndex != null) return;

	const className = $(classString).length == 0 ? "none" : $(classString).val();
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
				modalOptions += `<option value="${unsortedIndex}">${boardName} — ${legendaryDesc}</option>`;
			} else {
				modalOptions += `<option value="${unsortedIndex}">${boardName} — ${legendaryDesc} (${CURRENT_GRID_LOCATION_TEXT}: [${gridLocation}])</option>`;
			}
		}
		unsortedIndex++;
	}

	$("#fadeOverlay").removeClass("disabled");
	$("#modalBox").html(`<div id="modalDiv1">${PARAGON_BOARD_EQUIP_PROMPT_HEADER}[${nodeData.get("_boardHeader").nodeName}]:</div>`
		+ `<div id="modalDiv2"><select id="modalSelect">${modalOptions}</select></div>`
		+ `<div id="modalDiv6"><button id="modalConfirm" type="button">Confirm</button> `
		+ `<button id="modalCancel" type="button">Cancel</button></div>`).removeClass("disabled");

	$("#modalSelect").select2({ dropdownParent: $("#modalDiv2") });
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
let equipmentPanelData = {};
function handleEquipmentPanelButton(curNode) {
	const nodeData = curNode.nodeData;
	const nodeId = nodeData.get("id");
	const validEquipment = nodeData.get("validEquipment");

	let modalOptions = "";
	let modalOptionsAll = "";
	const codexNodes = pixiNodes.filter(pixiNode => pixiNode.groupName == CODEX_OF_POWER);
	for (const codexNode of codexNodes) {
		const codexData = codexNode.nodeData;
		if (codexData.get("maxPoints") > 0) {
			const codexCategory = codexData.get("codexCategory");
			const itemSlot = codexData.get("itemSlot");
			const itemType = codexData.get("itemType");

			if (itemType == "Legendary" && !validEquipment.includes(codexCategory)) continue;
			if (itemType == "Unique" && !validEquipment.includes(itemSlot)) continue;

			const codexDesc = codexNode.localizedDesc.split("\n\n— Location —\n")[0].replace(/{(.+?)}/g, (matchText, captureText) => {
				const outputText = captureText.split("/");
				return `[${outputText.join(" - ")}]`;
			}).replace(/\n+/g, "[br]");

			const modalOption = `<option value="${codexData.get("id")}">${codexNode.localizedName} — ${codexDesc}</option>`;
			modalOptionsAll += modalOption;
			if (codexData.get("allocatedPoints") > 0) modalOptions += modalOption;
		}
	}

	$("#fadeOverlay").removeClass("disabled");
	const slotName = "slotName" in curNode ? curNode.slotName : curNode.nodeName;
	$("#modalBox").html(`<div id="modalDiv1">${EQUIPMENT_PANEL_PROMPT_HEADER_PREFIX}[${slotName}]${EQUIPMENT_PANEL_PROMPT_HEADER_SUFFIX}</div>`
		+ `<div id="modalDiv2"><select id="modalSelect">${modalOptions.length > 0 ? modalOptions : modalOptionsAll}</select></div>`
		+ `<div id="modalDiv5">These results are filtered based on what you have selected in your Codex of Power.</div>`
		+ `<div id="modalDiv6"><button id="modalConfirm" type="button">Confirm</button> `
		+ `<button id="modalCancel" type="button">Cancel</button></div>`).removeClass("disabled");

	$("#modalSelect").select2({
		dropdownParent: $("#modalDiv2"),
		escapeMarkup: data => data,
		templateResult: data => data.text.replaceAll("[br]", curWidth < 1400 ? " " : "<br>"),
		templateSelection: data => data.text.replaceAll("[br]", " ")
	});
	applyZoomLevel(); // hacky workaround for select2 transform bug

	if (equipmentPanelData[nodeId] != undefined) $("#modalSelect").val(equipmentPanelData[nodeId]).trigger("change");

	$("#modalConfirm").on("click", () => {
		equipPanelPower(curNode, $("#modalSelect").val());
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
	$("#modalCancel").on("click", () => {
		unequipPanelPower(curNode);
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
}
function equipPanelPower(curNode, codexId, redrawTooltip = false) {
	const nodeData = curNode.nodeData;
	const nodeId = nodeData.get("id");

	const codexNode = pixiNodes.find(pixiNode => pixiNode.nodeData.get("id") == codexId);
	const codexData = codexNode.nodeData;

	const activeLocale = readCookie("activeLocale", "enUS");

	equipmentPanelData[nodeId] = codexId;

	nodeData.set("description", codexData.get("description"));
	nodeData.set("descriptionLocalized", codexData.get("descriptionLocalized"));
	curNode.nodeDesc = codexNode.nodeDesc;
	curNode.localizedDesc = (codexData.get("descriptionLocalized") instanceof Map
		&& codexData.get("descriptionLocalized").has(activeLocale))
		? codexData.get("descriptionLocalized").get(activeLocale) : codexNode.nodeDesc;

	nodeData.set("nameLocalized", codexData.get("nameLocalized"));
	if (curNode.slotName == undefined) curNode.slotName = curNode.nodeName;
	curNode.nodeName = codexNode.nodeName;
	curNode.localizedName = (codexData.get("nameLocalized") instanceof Map
		&& codexData.get("nameLocalized").has(activeLocale))
		?  codexData.get("nameLocalized").get(activeLocale) : codexNode.nodeName;
	curNode.displayName = `${curNode.nodeName} (${curNode.slotName})`;

	nodeData.set("allocatedPoints", 1);

	curNode.scaleFactor = -1; // force redraw
	redrawNode(curNode);

	if (pixiTooltip.children.length > 0) {
		if (redrawTooltip) {
			drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true);
		} else {
			eraseTooltip();
		}
	}
}
function unequipPanelPower(curNode, redrawTooltip = false) {
	const nodeData = curNode.nodeData;
	const nodeId = nodeData.get("id");

	delete equipmentPanelData[nodeId];

	if (curNode.slotName != undefined) {
		nodeData.set("description", EQUIPMENT_PANEL_ITEM_DESC);
		nodeData.set("descriptionLocalized", EQUIPMENT_PANEL_ITEM_DESC);
		[curNode.nodeDesc, curNode.localizedDesc] = [EQUIPMENT_PANEL_ITEM_DESC, EQUIPMENT_PANEL_ITEM_DESC];

		nodeData.delete("nameLocalized");
		[curNode.nodeName, curNode.localizedName, curNode.displayName] = [curNode.slotName, curNode.slotName, curNode.slotName];
	}

	nodeData.set("allocatedPoints", 0);

	curNode.scaleFactor = -1; // force redraw
	redrawNode(curNode);

	if (pixiTooltip.children.length > 0) {
		if (redrawTooltip) {
			drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true);
		} else {
			eraseTooltip();
		}
	}
}
var techniqueSlotData = null;
var techniqueSlotNode = null;
function handleTechniqueSlotButton(curNode) {
	const activeLocale = readCookie("activeLocale", "enUS");

	const className = $(classString).length == 0 ? "none" : $(classString).val();
	const classData = classMap.get(className);
	const techniqueDataFull = classData.get("Weapon Expertise");

	let modalOptions = "";
	for (const [techniqueName, techniqueData] of techniqueDataFull) {
		const nameLocalized = (techniqueData.get("nameLocalized") instanceof Map
			&& techniqueData.get("nameLocalized").has(activeLocale))
			? techniqueData.get("nameLocalized").get(activeLocale) : techniqueName;
		const descLocalized = ((techniqueData.get("descriptionLocalized") instanceof Map
			&& techniqueData.get("descriptionLocalized").has(activeLocale))
			? techniqueData.get("descriptionLocalized").get(activeLocale) : techniqueData.get("description"))
			.replace(/{(.+?)}/g, (matchText, captureText) => captureText.split("/").at(-1));
		const bonusLocalized = (techniqueData.get("descriptionLocalized") instanceof Map
			&& techniqueData.get("bonusLocalized").has(activeLocale))
			? techniqueData.get("bonusLocalized").get(activeLocale) : techniqueData.get("bonus");
		modalOptions += `<option value="${techniqueData.get("id")}">${nameLocalized} — ${descLocalized}[br]${bonusLocalized}</option>`;
	}

	$("#fadeOverlay").removeClass("disabled");
	$("#modalBox").html(`<div id="modalDiv1">${TECHNIQUE_SLOT_PROMPT_HEADER}</div>`
		+ `<div id="modalDiv2"><select id="modalSelect">${modalOptions}</select></div>`
		+ `<div id="modalDiv6"><button id="modalConfirm" type="button">Confirm</button> `
		+ `<button id="modalCancel" type="button">Cancel</button></div>`).removeClass("disabled");

	$("#modalSelect").select2({
		dropdownParent: $("#modalDiv2"),
		escapeMarkup: data => data,
		templateResult: data => data.text.replaceAll("[br]", curWidth < 1400 ? " " : "<br>"),
		templateSelection: data => data.text.replaceAll("[br]", " ")
	});
	applyZoomLevel(); // hacky workaround for select2 transform bug

	if (techniqueSlotData != null) $("#modalSelect").val(techniqueSlotData).trigger("change");

	$("#modalConfirm").on("click", () => {
		equipTechnique($("#modalSelect").val());
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
	$("#modalCancel").on("click", () => {
		unequipTechnique();
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
}
function equipTechnique(techniqueId, redrawTooltip = false) {
	if (techniqueSlotNode == null) return;

	const className = $(classString).length == 0 ? "none" : $(classString).val();
	const classData = classMap.get(className);
	const [techniqueName, techniqueData] = [...classData.get("Weapon Expertise")].find(([key, value]) => value.get("id") == techniqueId);
	if (techniqueName == undefined) return;

	const nodeData = techniqueSlotNode.nodeData;

	const activeLocale = readCookie("activeLocale", "enUS");

	techniqueSlotData = techniqueId;

	nodeData.set("description", techniqueData.get("description"));
	nodeData.set("descriptionLocalized", techniqueData.get("descriptionLocalized"));
	techniqueSlotNode.nodeDesc = techniqueData.get("description");
	techniqueSlotNode.localizedDesc = (techniqueData.get("descriptionLocalized") instanceof Map
		&& techniqueData.get("descriptionLocalized").has(activeLocale))
		? techniqueData.get("descriptionLocalized").get(activeLocale) : techniqueData.get("description");

	nodeData.set("bonus", techniqueData.get("bonus"));
	nodeData.set("bonusLocalized", techniqueData.get("bonusLocalized"));
	techniqueSlotNode.nodeBonus = techniqueData.get("bonus");
	techniqueSlotNode.localizedBonus = (techniqueData.get("bonusLocalized") instanceof Map
		&& techniqueData.get("bonusLocalized").has(activeLocale))
		? techniqueData.get("bonusLocalized").get(activeLocale) : techniqueData.get("bonus");

	nodeData.set("nameLocalized", techniqueData.get("nameLocalized"));
	if (techniqueSlotNode.slotName == undefined) techniqueSlotNode.slotName = techniqueSlotNode.nodeName;
	techniqueSlotNode.nodeName = techniqueName;
	techniqueSlotNode.localizedName = (techniqueData.get("nameLocalized") instanceof Map
		&& techniqueData.get("nameLocalized").has(activeLocale))
		?  techniqueData.get("nameLocalized").get(activeLocale) : techniqueName;
	techniqueSlotNode.displayName = techniqueSlotNode.nodeName;

	nodeData.set("allocatedPoints", 1);

	techniqueSlotNode.scaleFactor = -1; // force redraw
	redrawNode(techniqueSlotNode);

	if (pixiTooltip.children.length > 0) {
		if (redrawTooltip) {
			drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true);
		} else {
			eraseTooltip();
		}
	}
}
function unequipTechnique(redrawTooltip = false) {
	if (techniqueSlotNode == null) return;
	const nodeData = techniqueSlotNode.nodeData;

	techniqueSlotData = null;

	if (techniqueSlotNode.slotName != undefined) {
		nodeData.set("description", TECHNIQUE_SLOT_DESC);
		nodeData.set("descriptionLocalized", TECHNIQUE_SLOT_DESC);
		techniqueSlotNode.nodeDesc = TECHNIQUE_SLOT_DESC;
		techniqueSlotNode.localizedDesc = TECHNIQUE_SLOT_DESC;

		nodeData.delete("bonus");
		nodeData.delete("bonusLocalized");
		delete techniqueSlotNode.nodeBonus;
		delete techniqueSlotNode.localizedBonus;

		nodeData.delete("nameLocalized");
		[techniqueSlotNode.nodeName, techniqueSlotNode.localizedName, techniqueSlotNode.displayName] = [techniqueSlotNode.slotName, techniqueSlotNode.slotName, techniqueSlotNode.slotName];
	}

	nodeData.set("allocatedPoints", 0);

	techniqueSlotNode.scaleFactor = -1; // force redraw
	redrawNode(techniqueSlotNode);

	if (pixiTooltip.children.length > 0) {
		if (redrawTooltip) {
			drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true);
		} else {
			eraseTooltip();
		}
	}
}
var enchantSlotData = {};
var enchantSlotNodes = [];
function handleEnchantSlotButton(curNode) {
	const nodeData = curNode.nodeData;
	const nodeId = Number(nodeData.get("id").match(/\d+/)[0]);

	const enchantNodes = pixiNodes.filter(pixiNode => pixiNode.nodeDesc != undefined && pixiNode.nodeDesc.includes(ENCHANT_EFFECT_DESC));

	const activeLocale = readCookie("activeLocale", "enUS");

	let modalOptions = "";
	for (const enchantNode of enchantNodes) {
		const enchantData = enchantNode.nodeData;
		const enchantPoints = enchantData.get("allocatedPoints");

		let nameLocalized = (enchantData.get("nameLocalized") instanceof Map
			&& enchantData.get("nameLocalized").has(activeLocale))
			? enchantData.get("nameLocalized").get(activeLocale) : enchantNode.nodeName;
		if (nameLocalized.includes("[") && nameLocalized.includes("]")) nameLocalized = nameLocalized.split("]")[1].split("[")[0];

		const descLocalized = ((enchantData.get("descriptionLocalized") instanceof Map
			&& enchantData.get("descriptionLocalized").has(activeLocale))
			? enchantData.get("descriptionLocalized").get(activeLocale) : enchantNode.nodeDesc)
			.split(ENCHANT_EFFECT_DESC)[1].trim()
			.replace(/{(.+?)}/g, (matchText, captureText) => {
				const outputText = captureText.split("/");
				return outputText[enchantPoints > 0 ? Math.min(enchantPoints, outputText.length) - 1 : 0];
			});

		modalOptions += `<option value="${enchantData.get("id")}">${nameLocalized} — ${descLocalized}</option>`;
	}

	$("#fadeOverlay").removeClass("disabled");
	$("#modalBox").html(`<div id="modalDiv1">${ENCHANT_SLOT_PROMPT_HEADER_PREFIX}${nodeId == 0 ? ENCHANT_FIRST : ENCHANT_SECOND}${ENCHANT_SLOT_PROMPT_HEADER_SUFFIX}</div>`
		+ `<div id="modalDiv2"><select id="modalSelect">${modalOptions}</select></div>`
		+ `<div id="modalDiv6"><button id="modalConfirm" type="button">Confirm</button> `
		+ `<button id="modalCancel" type="button">Cancel</button></div>`).removeClass("disabled");

	$("#modalSelect").select2({
		dropdownParent: $("#modalDiv2"),
		escapeMarkup: data => data,
		templateResult: data => data.text.replaceAll("[br]", curWidth < 1400 ? " " : "<br>"),
		templateSelection: data => data.text.replaceAll("[br]", " ")
	});
	applyZoomLevel(); // hacky workaround for select2 transform bug

	if (enchantSlotData[nodeId] != undefined) $("#modalSelect").val(enchantSlotData[nodeId]).trigger("change");

	$("#modalConfirm").on("click", () => {
		equipEnchant(curNode, $("#modalSelect").val());
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
	$("#modalCancel").on("click", () => {
		unequipEnchant(curNode);
		$("#fadeOverlay, #modalBox").empty().addClass("disabled");
	});
}
function equipEnchant(curNode, enchantId, redrawTooltip = false) {
	const nodeData = curNode.nodeData;
	const nodeId = Number(nodeData.get("id").match(/\d+/)[0]);

	const enchantNode = pixiNodes.find(pixiNode => pixiNode.nodeData.get("id") == enchantId);
	const enchantData = enchantNode.nodeData;

	const activeLocale = readCookie("activeLocale", "enUS");

	enchantSlotData[nodeId] = enchantId;

	nodeData.set("description", enchantData.get("description"));
	nodeData.set("descriptionLocalized", enchantData.get("descriptionLocalized"));
	curNode.nodeDesc = enchantNode.nodeDesc;
	curNode.localizedDesc = (enchantData.get("descriptionLocalized") instanceof Map
		&& enchantData.get("descriptionLocalized").has(activeLocale))
		? enchantData.get("descriptionLocalized").get(activeLocale) : enchantNode.nodeDesc;

	nodeData.set("nameLocalized", enchantData.get("nameLocalized"));
	if (curNode.slotName == undefined) curNode.slotName = curNode.nodeName;
	curNode.nodeName = enchantNode.nodeName;
	curNode.localizedName = (enchantData.get("nameLocalized") instanceof Map
		&& enchantData.get("nameLocalized").has(activeLocale))
		?  enchantData.get("nameLocalized").get(activeLocale) : enchantNode.nodeName;
	curNode.displayName = `${curNode.nodeName} (${curNode.slotName})`;

	nodeData.set("allocatedPoints", 1);

	curNode.scaleFactor = -1; // force redraw
	redrawNode(curNode);

	if (pixiTooltip.children.length > 0) {
		if (redrawTooltip) {
			drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true);
		} else {
			eraseTooltip();
		}
	}
}
function unequipEnchant(curNode, redrawTooltip = false) {
	const nodeData = curNode.nodeData;
	const nodeId = Number(nodeData.get("id").match(/\d+/)[0]);

	delete enchantSlotData[nodeId];

	if (curNode.slotName != undefined) {
		nodeData.set("description", ENCHANT_SLOT_DESC);
		nodeData.set("descriptionLocalized", ENCHANT_SLOT_DESC);
		[curNode.nodeDesc, curNode.localizedDesc] = [ENCHANT_SLOT_DESC, ENCHANT_SLOT_DESC];

		nodeData.delete("nameLocalized");
		[curNode.nodeName, curNode.localizedName, curNode.displayName] = [curNode.slotName, curNode.slotName, curNode.slotName];
	}

	nodeData.set("allocatedPoints", 0);

	curNode.scaleFactor = -1; // force redraw
	redrawNode(curNode);

	if (pixiTooltip.children.length > 0) {
		if (redrawTooltip) {
			drawTooltip(pixiNodes[pixiTooltip.nodeIndex], true);
		} else {
			eraseTooltip();
		}
	}
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
		// 1 paragon point gained at level 50, then 4 per level from 51-100 inclusive (level total: 201); plus 20 from renown; plus 4 from altars (final total: 225)
		const maxParagonPoints = 225;
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

	const maxLevel = 50;
	const maxRenown = 10;
	const maxSkillPoints = 58;

	const maxLevelParagon = 100;
	const maxRenownParagon = 20;
	const maxParagonPoints = 225;
	const maxParagonPointsBase = 200;

	if (unusedPoints >= maxRenown) {
		charLevel = 1 + maxSkillPoints - Math.max(unusedPoints, 0);
	} else {
		charLevel = maxLevel;
		renownLevel = maxRenown - Math.max(unusedPoints, 0);
	}

	if (unusedParagonPoints < maxParagonPoints - maxParagonPointsBase) {
		charLevel = maxLevelParagon;
		renownLevel += maxRenownParagon - Math.max(unusedParagonPoints, 0);
	} else if (unusedParagonPoints < maxParagonPoints) {
		charLevel = maxLevel - 1 + Math.ceil((maxParagonPoints - unusedParagonPoints) / 4);
	}

	$("#charLevel").text(charLevel);
	if (unusedPoints < 0 || unusedParagonPoints < 0) {
		$("#renownLevel").html((renownLevel > 0 ? ` (Renown ${renownLevel})` : "") + ` <span class="red" title="${OVERCAPPED_TEXT}">${OVERCAPPED_LABEL_TEXT}</span>`);
	} else {
		$("#renownLevel").text(renownLevel > 0 ? ` (Renown ${renownLevel})` : "");
	}

	updateDetailsWindow();
}
function updateConnectorLineStyle(nodeConnector, startNode, endNode) {
	const startPoints = startNode.nodeData.get("allocatedPoints") || 0;
	const endPoints = endNode.nodeData.get("allocatedPoints") || 0;
	if (startNode.groupName == undefined && endNode.groupName == undefined) {
		const startHasRequiredPointsAllocated = startNode.nodeData.get("requiredPoints") <= getAllocatedSkillPoints(startNode.nodeName);
		const endHasRequiredPointsAllocated = endNode.nodeData.get("requiredPoints") <= getAllocatedSkillPoints(endNode.nodeName);

		if (startHasRequiredPointsAllocated && endHasRequiredPointsAllocated) {
			nodeConnector.lineStyle(lineStyleThickButt);
			nodeConnector.updateLineStyle(lineStyleThickButt);
		} else {
			nodeConnector.lineStyle(lineStyleThinButt);
			nodeConnector.updateLineStyle(lineStyleThinButt);
		}

		const startTexture = startHasRequiredPointsAllocated ? PIXI_TEXTURES.NODE_GROUP_ALLOCATED : PIXI_TEXTURES.NODE_GROUP;
		if (startNode.children[0].children[1].texture != startTexture) {
			startNode.children[0].children[1].texture = startTexture;
			startNode.scaleFactor = -1; // force redraw
			redrawNode(startNode);
		}
		const endTexture = endHasRequiredPointsAllocated ? PIXI_TEXTURES.NODE_GROUP_ALLOCATED : PIXI_TEXTURES.NODE_GROUP;
		if (endNode.children[0].children[1].texture != endTexture) {
			endNode.children[0].children[1].texture = endTexture;
			endNode.scaleFactor = -1; // force redraw
			redrawNode(endNode);
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
	if (curNode.groupName == PARAGON_BOARD) {
		let paragonNodeValue = 1;
		if (curNode.nodeName == "Board Attachment Gate") {
			paragonNodeValue = 0.5;
		} else if (curNode.nodeName == "Paragon Starting Node") {
			paragonNodeValue = 0;
		}
		return getUnusedPoints(true) >= paragonNodeValue;
	}
	return true;
}
function updateNodePoints(curNode, newPoints) {
	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	const maxPoints = curNode.nodeData.get("maxPoints");
	if (maxPoints > 0) {
		//console.assert(newPoints != allocatedPoints);

		curNode.nodeData.set("allocatedPoints", newPoints);
		if (maxPoints > 1) curNode.children[2].text = newPoints + "/" + maxPoints;

		const shapeType = curNode.nodeData.get("shapeType");
		if (newPoints == 0) {
			if (curNode.children[0].children.length > 1 && curNode.nodeData.get("nodeType") != "Socket") {
				let [newTexture, newIcon] = [null, null];
				if (curNode.nodeData.get("baseSkill") != undefined) {
					newTexture = PIXI_TEXTURES.NODE_ACTIVE_SKILL_MODIFIER;
				} else if (curNode.nodeData.get("maxPoints") == 3) {
					newTexture = PIXI_TEXTURES.NODE_PASSIVE;
				} else if (curNode.groupName == KEY_PASSIVE) {
					newTexture = PIXI_TEXTURES.NODE_KEY_PASSIVE;
				} else {
					newTexture = PIXI_TEXTURES.NODE_ACTIVE_SKILL;
					const _nodeName = curNode.nodeName.toUpperCase().replaceAll(" ", "_");
					if (_nodeName in PIXI_TEXTURES) newIcon = PIXI_TEXTURES[_nodeName].UNALLOCATED;
				}
				if (curNode.children[0].children[1].texture != newTexture) {
					curNode.children[0].children[1].texture = newTexture;
					if (newIcon != null) curNode.children[0].children[2].texture = newIcon;
					curNode.scaleFactor = -1; // force redraw
					redrawNode(curNode);
				}
			}
			setNodeStyleThin(curNode);
		} else {
			if (curNode.children[0].children.length > 1 && curNode.nodeData.get("nodeType") != "Socket") {
				let [newTexture, newIcon] = [null, null];
				if (curNode.nodeData.get("baseSkill") != undefined) {
					newTexture = PIXI_TEXTURES.NODE_ACTIVE_SKILL_MODIFIER_ALLOCATED;
				} else if (curNode.nodeData.get("maxPoints") == 3) {
					newTexture = PIXI_TEXTURES.NODE_PASSIVE_ALLOCATED;
				} else if (curNode.groupName == KEY_PASSIVE) {
					newTexture = PIXI_TEXTURES.NODE_KEY_PASSIVE_ALLOCATED;
				} else {
					newTexture = PIXI_TEXTURES.NODE_ACTIVE_SKILL_ALLOCATED;
					const _nodeName = curNode.nodeName.toUpperCase().replaceAll(" ", "_");
					if (_nodeName in PIXI_TEXTURES) newIcon = newPoints == maxPoints ? PIXI_TEXTURES[_nodeName].MAX : PIXI_TEXTURES[_nodeName].ALLOCATED;
				}
				if (curNode.children[0].children[1].texture != newTexture
					|| (newIcon != null && curNode.children[0].children[2].texture != newIcon)) {
					curNode.children[0].children[1].texture = newTexture;
					if (newIcon != null) curNode.children[0].children[2].texture = newIcon;
					curNode.scaleFactor = -1; // force redraw
					redrawNode(curNode);
				}
			}
			setNodeStyleThick(curNode);
		}

		const className = $(classString).length == 0 ? "none" : $(classString).val();
		const classData = classMap.get(className);
		pixiNodes.filter(pixiNode => pixiNode.groupName == undefined).forEach(groupNode => {
			const requiredPoints = groupNode.nodeData.get("requiredPoints");
			const validConnection = requiredPoints <= getAllocatedSkillPoints(groupNode.nodeName);
			validConnection ? setNodeStyleThick(groupNode) : setNodeStyleThin(groupNode);
		});

		pixiConnectors.forEach(connector => updateConnectorLineStyle(connector, connector.startNode, connector.endNode));
	}
}
function getGlyphData(glyphIndex) {
	const className = $(classString).length == 0 ? "none" : $(classString).val();
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
	const nodeData = curNode.nodeData;
	const nodeType = nodeData.get("nodeType");
	if (nodeType == "Magic" || nodeType == "Rare") {
		const boardIndex = nodeData.get("_boardIndex");
		if (boardIndex in paragonBoardGlyphData && isNodeInGlyphRadius(curNode)) {
			const glyphRank = boardIndex in paragonBoardGlyphRankData ? paragonBoardGlyphRankData[boardIndex] : 1;
			const glyphData = getGlyphData(paragonBoardGlyphData[boardIndex]);
			const glyphDescLower = glyphData["desc"].toLowerCase();
			if (glyphDescLower.includes(`bonus to all ${nodeType.toLowerCase()} nodes`)) {
				const glyphDesc = glyphData["desc"].replace(/{(.+?)}/g, (matchText, captureText) => {
					const outputText = captureText.split("/");
					return outputText[glyphRank > 0 ? Math.min(glyphRank, outputText.length) - 1 : 0];
				});
				return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to all/i)) / 100;
			}
		}
	}
	return 1;
}
function getNodeGlyphMultiplierSpecial(curNode) {
	const nodeData = curNode.nodeData;
	const nodeType = nodeData.get("nodeType");
	if (nodeType == "Magic" || nodeType == "Rare") {
		const boardIndex = nodeData.get("_boardIndex");
		if (boardIndex in paragonBoardGlyphData && isNodeInGlyphRadius(curNode)) {
			const glyphRank = boardIndex in paragonBoardGlyphRankData ? paragonBoardGlyphRankData[boardIndex] : 1;
			const glyphData = getGlyphData(paragonBoardGlyphData[boardIndex]);
			const glyphDesc = glyphData["desc"].replace(/{(.+?)}/g, (matchText, captureText) => {
				const outputText = captureText.split("/");
				return outputText[glyphRank > 0 ? Math.min(glyphRank, outputText.length) - 1 : 0];
			});
			const glyphDescLower = glyphData["desc"].toLowerCase();
			if (glyphDescLower.includes(`bonus to their physical`)) {
				if (curNode.nodeDesc.match(/Physical|Bleed/) && !curNode.nodeDesc.match("Non-Physical")) return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to their physical/i)) / 100;
			} else if (glyphDescLower.includes(`bonus to their non-physical`)) {
				if (curNode.nodeDesc.match(/Non-Physical|Elemental|Fire|Lightning|Cold|Poison|Shadow/)) return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to their non-physical/i)) / 100;
			} else if (glyphDescLower.includes(`bonus to their fire`)) {
				if (curNode.nodeDesc.match(/Fire|Burn/)) return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to their fire/i)) / 100;
			} else if (glyphDescLower.includes(`bonus to their lightning`)) {
				if (curNode.nodeDesc.match(/Lightning|Crackling/)) return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to their lightning/i)) / 100;
			} else if (glyphDescLower.includes(`bonus to their cold`)) {
				if (curNode.nodeDesc.match(/Cold|Chill/)) return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to their cold/i)) / 100;
			} else if (glyphDescLower.includes(`bonus to their poison`)) {
				if (curNode.nodeDesc.match("Poison")) return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to their poison/i)) / 100;
			} else if (glyphDescLower.includes(`bonus to their shadow`)) {
				if (curNode.nodeDesc.match("Shadow")) return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to their shadow/i)) / 100;
			} else if (glyphDescLower.includes(`bonus to their minion`)) {
				if (curNode.nodeDesc.match("Minion")) return 1 + parseFloat(glyphDesc.match(/(\d+)% bonus to their minion/i)) / 100;
			}
		}
	}
	return 1;
}
function updateGlyphBonusesFromNodes(boardHeader, updateVector, validTypes) {
	const boardContainer = boardHeader.nodeData.get("boardContainer");

	for (let i = 0, n = boardContainer.children.length; i < n; i++) {
		const pixiNode = boardContainer.children[i];
		const pixiType = pixiNode.nodeData.get("nodeType");
		if (!validTypes.includes(pixiType)) continue;
		const pixiPoints = pixiNode.nodeData.get("allocatedPoints");
		if (pixiPoints == 0) continue;
		if (isNodeInGlyphRadius(pixiNode)) updateParagonStatTotals(pixiNode, pixiPoints * updateVector);
	}

	updateDetailsWindow();
}
var glyphRadiusAttributeTotals = {};
var paragonStatTotals = {
	"Strength": { minValue: 0, maxValue: 0 },
	"Intelligence": { minValue: 0, maxValue: 0 },
	"Willpower": { minValue: 0, maxValue: 0 },
	"Dexterity": { minValue: 0, maxValue: 0 }
};
function updateParagonStatTotals(curNode, diffPoints, outputData = [paragonStatTotals, glyphRadiusAttributeTotals], directOutputMode = false) {
	if (diffPoints == 0) return;
	const nodeType = curNode.nodeData.get("nodeType");
	if (!["Normal", "Magic", "Rare", "Gate", "Socket"].includes(nodeType)) return;

	const boardIndex = curNode.nodeData.get("_boardIndex");
	const boardHeader = curNode.nodeData.get("_boardHeader");
	const glyphSocket = boardHeader.nodeData.get("glyphSocket");
	const glyphMultiplier = getNodeGlyphMultiplier(curNode);
	const glyphMultiplierSpecial = getNodeGlyphMultiplierSpecial(curNode);

	if (!(boardIndex in outputData[1])) outputData[1][boardIndex] = { "Strength": 0, "Intelligence": 0, "Willpower": 0, "Dexterity": 0 };

	let descLines = "";
	if (nodeType == "Socket") {
		const glyphIndex = paragonBoardGlyphData[boardIndex];
		const glyphRank = boardIndex in paragonBoardGlyphRankData ? paragonBoardGlyphRankData[boardIndex] : 1;
		const glyphData = getGlyphData(glyphIndex);
		if (glyphData != undefined) {
			descLines = glyphData.desc.replace(/{(.+?)}/g, (matchText, captureText) => {
				const outputText = captureText.split("/");
				return outputText[glyphRank > 0 ? Math.min(glyphRank, outputText.length) - 1 : 0];
			}).split(/within range, /);
		}
		if (descLines.length < 2) return;
		descLines[1] = descLines[1].replace(/you(?: and your minions)? deal /, "").replace(/\.$/, "");
		if (descLines[0].includes("Strength")) {
			descLines = [ descLines[1].replace(/(\d*\.?\d+)/, parseFloat(descLines[1].match(/(\d*\.?\d+)/)) * outputData[1][boardIndex]["Strength"] * 0.2) ];
		} else if (descLines[0].includes("Intelligence")) {
			descLines = [ descLines[1].replace(/(\d*\.?\d+)/, parseFloat(descLines[1].match(/(\d*\.?\d+)/)) * outputData[1][boardIndex]["Intelligence"] * 0.2) ];
		} else if (descLines[0].includes("Willpower")) {
			descLines = [ descLines[1].replace(/(\d*\.?\d+)/, parseFloat(descLines[1].match(/(\d*\.?\d+)/)) * outputData[1][boardIndex]["Willpower"] * 0.2) ];
		} else if (descLines[0].includes("Dexterity")) {
			descLines = [ descLines[1].replace(/(\d*\.?\d+)/, parseFloat(descLines[1].match(/(\d*\.?\d+)/)) * outputData[1][boardIndex]["Dexterity"] * 0.2) ];
		}
	} else {
		descLines = curNode.nodeDesc.split(/\r?\n/);
	}

	if (nodeType != "Socket" && isNodeInGlyphRadius(curNode)) {
		if (!directOutputMode) [paragonStatTotals, glyphRadiusAttributeTotals] = outputData;
		updateParagonStatTotals(glyphSocket, -1, outputData, directOutputMode);
	}

	for (let i = 0, n = descLines.length; i < n; i++) {
		const descLine = descLines[i];
		if (descLine.length == 0) continue;

		const descMatch = /(\+?)(\d*\.?\d+)([^a-zA-Z]+)(.*)/.exec(descLine);
		if (descMatch == undefined) continue;

		const _glyphMultiplier = glyphMultiplier * (["Strength", "Intelligence", "Willpower", "Dexterity"].some(element => descLine.includes(element)) ? 1 : glyphMultiplierSpecial);
		const statValue = Math.round(parseFloat(descMatch[2]) * _glyphMultiplier * 10) / 10;

		let statName = descMatch[4].split(" if requirements met:")[0]
			.replace("increased damage to Vulnerable targets", "Vulnerable Damage")
			.replace("increased ", "")
			.replace("damage", "Damage");
		let statPrefix = descMatch[1];
		let statSuffix = descMatch[3];

		if (descLine.includes("Core Skills deal")) {
			statPrefix = `Core Skills deal ${statPrefix}`;
		} else if (descLine.includes("Skills that Swap")) {
			statPrefix = `Skills that Swap to a different Weapon deal ${statPrefix}`;
		} else if (descLine.includes("Companion Skills deal")) {
			statPrefix = `Companion Skills deal ${statPrefix}`;
		} else if (descLine.includes("Golems gain")) {
			statPrefix = `Golems gain ${statPrefix}`;
		} else if (descLine.includes("Skeleton Mages deal")) {
			statPrefix = `Skeleton Mages deal ${statPrefix}`;
		} else if (descLine.includes("Skeletal Warriors deal")) {
			statPrefix = `Skeletal Warriors deal ${statPrefix}`;
		} else if (descLine.includes("Cutthroat Skills deal")) {
			statPrefix = `Cutthroat Skills deal ${statPrefix}`;
		} else if (descLine.includes("Marksman Skills deal")) {
			statPrefix = `Marksman Skills deal ${statPrefix}`;
		} else if (descLine.includes("Trap Skills deal")) {
			statPrefix = `Trap Skills deal ${statPrefix}`;
		} else if (descLine.includes("Mastery Skills gain")) {
			statPrefix = `Mastery Skills gain ${statPrefix}`;
		} else if (descLine.includes("Crackling Energy deals")) {
			statPrefix = `Crackling Energy deals ${statPrefix}`;
		} else if (descLine.includes("Conjuration Skills gain")) {
			statPrefix = `Conjuration Skills gain ${statPrefix}`;
		}

		let statNameFull;
		if (["Strength", "Intelligence", "Willpower", "Dexterity"].includes(statName)) {
			statNameFull = statName;
			if (isNodeInGlyphRadius(curNode)) outputData[1][boardIndex][statNameFull] += statValue * diffPoints;
		} else {
			statNameFull = `${statPrefix}{#}${statSuffix}${statName}`;
			if (!(statNameFull in outputData[0])) {
				outputData[0][statNameFull] = {
					name: statName,
					prefix: statPrefix,
					suffix: statSuffix,
					minValue: 0,
					maxValue: 0
				};
			}
		}

		if (descLine.includes("Damage Reduction")) {
			if (!descMatch[4].includes(" if requirements met:")) {
				outputData[0][statNameFull].minValue = outputData[0][statNameFull].minValue > 0 ? 1 - outputData[0][statNameFull].minValue * 0.01 : 1;
				if (diffPoints > 0) {
					outputData[0][statNameFull].minValue *= 1 - statValue * 0.01;
				} else {
					outputData[0][statNameFull].minValue /= 1 - statValue * 0.01;
				}
				outputData[0][statNameFull].minValue = (1 - outputData[0][statNameFull].minValue) * 100;
			}
			outputData[0][statNameFull].maxValue = outputData[0][statNameFull].maxValue > 0 ? 1 - outputData[0][statNameFull].maxValue * 0.01 : 1;
			if (diffPoints > 0) {
				outputData[0][statNameFull].maxValue *= 1 - statValue * 0.01;
			} else {
				outputData[0][statNameFull].maxValue /= 1 - statValue * 0.01;
			}
			outputData[0][statNameFull].maxValue = (1 - outputData[0][statNameFull].maxValue) * 100;
		} else {
			if (!descMatch[4].includes(" if requirements met:")) {
				outputData[0][statNameFull].minValue += statValue * diffPoints;
			}
			outputData[0][statNameFull].maxValue += statValue * diffPoints;
		}

		if (descMatch[4].includes(" if requirements met:")) break;
	}

	if (nodeType != "Socket" && isNodeInGlyphRadius(curNode)) {
		if (!directOutputMode) [paragonStatTotals, glyphRadiusAttributeTotals] = outputData;
		updateParagonStatTotals(glyphSocket, 1, outputData, directOutputMode);
	}

	if (directOutputMode) {
		return outputData;
	} else {
		[paragonStatTotals, glyphRadiusAttributeTotals] = outputData;
	}
}
function handleToggleButton(curNode) {
	const allocatedPoints = curNode.nodeData.get("allocatedPoints");
	if (allocatedPoints == 0) {
		handlePlusButton(curNode);
		if ([SPIRIT_BOONS, BOOK_OF_THE_DEAD, PARAGON_BOARD, ALTARS_OF_LILITH, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS, CODEX_OF_POWER].includes(curNode.groupName)) {
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
	if (curNode.groupName == ALTARS_OF_LILITH) updateDetailsWindow();
}
function handlePlusButton(curNode) {
	if (!canAllocate(curNode)) return;

	if ([SPIRIT_BOONS, BOOK_OF_THE_DEAD, PARAGON_BOARD, ALTARS_OF_LILITH, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS, CODEX_OF_POWER].includes(curNode.groupName)) {
		const allocatedPoints = curNode.nodeData.get("allocatedPoints");
		const maxPoints = curNode.nodeData.get("maxPoints");
		const newPoints = Math.min(allocatedPoints + 1, maxPoints);

		if (newPoints != allocatedPoints) {
			updateNodePoints(curNode, newPoints);
			if (curNode.groupName == PARAGON_BOARD) {
				const nodeType = curNode.nodeData.get("nodeType");
				updateParagonStatTotals(curNode, newPoints - allocatedPoints);
				let paragonNodeValue = 1;
				if (curNode.nodeName == "Board Attachment Gate") {
					paragonNodeValue = 0.5;
				} else if (curNode.nodeName == "Paragon Starting Node") {
					paragonNodeValue = 0;
				}
				pixiAllocatedParagonPoints += paragonNodeValue;
				updateCharacterLevel();
				if (nodeType == "Gate") handleBoardAttachmentNode(curNode);
			}
		}
	} else {
		const baseSkill = curNode.nodeData.get("baseSkill");
		let minUnusedPoints = 0;
		let isUltimateSkill = false;
		if (curNode.groupName == KEY_PASSIVE) {
			const allocatedKeyPassives = pixiNodes.filter(pixiNode => pixiNode.groupName == KEY_PASSIVE && pixiNode.nodeData.get("allocatedPoints") > 0);
			minUnusedPoints = -allocatedKeyPassives.length;
		} else if (curNode.groupName == ULTIMATE) {
			isUltimateSkill = curNode.nodeDesc.includes(COOLDOWN_PREFIX);
			if (isUltimateSkill) {
				const allocatedUltimateSkills = pixiNodes.filter(pixiNode => pixiNode.groupName == ULTIMATE && pixiNode.nodeData.get("allocatedPoints") > 0 && pixiNode.nodeDesc.includes(COOLDOWN_PREFIX));
				minUnusedPoints = -allocatedUltimateSkills.length;
			}
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
	if ([SPIRIT_BOONS, BOOK_OF_THE_DEAD, PARAGON_BOARD, ALTARS_OF_LILITH, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS, CODEX_OF_POWER].includes(curNode.groupName)) {
		const allocatedPoints = curNode.nodeData.get("allocatedPoints");
		const maxPoints = curNode.nodeData.get("maxPoints");
		const newPoints = Math.max(allocatedPoints - 1, 0);

		if (newPoints != allocatedPoints) {
			updateNodePoints(curNode, newPoints);
			if (curNode.groupName == PARAGON_BOARD) {
				const nodeType = curNode.nodeData.get("nodeType");
				if (nodeType != "Socket") updateParagonStatTotals(curNode, newPoints - allocatedPoints);
				let paragonNodeValue = 1;
				if (curNode.nodeName == "Board Attachment Gate") {
					paragonNodeValue = 0.5;
				} else if (curNode.nodeName == "Paragon Starting Node") {
					paragonNodeValue = 0;
				}
				pixiAllocatedParagonPoints -= paragonNodeValue;
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
	const scaleFactor = devicePixelRatio >= 2 ? 1 : 2 / devicePixelRatio * newRenderScale;
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

	const allocatedPoints = nodeData.get("allocatedPoints");
	const maxPoints = nodeData.get("maxPoints");
	const requiredPoints = nodeData.get("requiredPoints");

	const hasTextureEnabled = ![SPIRIT_BOONS, BOOK_OF_THE_DEAD, PARAGON_BOARD, ALTARS_OF_LILITH, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS, CODEX_OF_POWER].includes(groupName);
	const isActiveSkill = hasTextureEnabled && groupName != KEY_PASSIVE && [1, 5].includes(maxPoints) && nodeData.get("baseSkill") == undefined;

	let displayName = ["Strength", "Intelligence", "Willpower", "Dexterity"].includes(nodeName) ? nodeName[0] : nodeName;
	let displayNameSize = 36;
	if (updateExistingNode) {
		displayName = node.displayName;
		displayNameSize = node.displayNameSize;
	} else if (!isActiveSkill) {
		const maxLabelSize = Math.round(7.5 * _nodeWidth * shapeSize * circleFactor / nodeWidth);
		if (displayName.length > maxLabelSize) displayName = nodeName.split([" ", "—"]).map((n) => n[0]).join("");
		if (displayName.length >= maxLabelSize - 2) displayNameSize = 32;
	}
	if (extraData != null && groupName == PARAGON_BOARD && extraData in paragonBoardEquipIndices) {
		const equipIndex = paragonBoardEquipIndices[extraData];
		const equipIndexText = ` [Equip Index: ${equipIndex}]`;
		const equipIndexRegex = / \[Equip Index: [0-9]+\]/;
		if (displayName.match(equipIndexRegex)) {
			displayName = displayName.replace(equipIndexRegex, equipIndexText);
		} else {
			displayName += equipIndexText;
		}
	}

	const searchQueryMatch = nodeData.get("searchQueryMatch");
	const useThickNodeStyle = searchQueryMatch || (groupName == undefined ? requiredPoints <= getAllocatedSkillPoints(nodeName) : allocatedPoints > 0);

	const colorOverride = nodeData.get("colorOverride");
	const _textColor = searchQueryMatch ? searchQueryMatchColor : colorOverride == undefined ? textColor : colorOverride;

	let extraContainer, extraContainer2, extraContainer3, extraContainer4, extraContainer5;
	if (extraData != null) {
		if (groupName == PARAGON_BOARD) {
			const boardIndex = extraData;
			if (boardIndex == 0) {
				extraContainer = updateExistingNode ? pixiNodes[nodeIndex].children[0].children[1] : new PIXI.Container();
				extraContainer.cursor = "pointer";
				extraContainer.eventMode = "static";
				if (!updateExistingNode) {
					extraContainer
						.on("click", () => resetAllParagonBoards())
						.on("tap", () => resetAllParagonBoards());
				}
				const extraText = updateExistingNode ? extraContainer.children[0] : new PIXI.Text();
				extraText.text = RESET_ALL_BOARDS_LABEL_TEXT;
				extraText.style = {
					align: "left",
					fill: _textColor,
					fontFamily: fontFamily,
					fontSize: displayNameSize * scaleFactor * 1.5,
					fontVariant: "small-caps",
					fontWeight: useThickNodeStyle ? "bold" : "normal",
					padding: 10
				};
				extraText.eventMode = "auto";
				extraText.scale.set(1 / scaleFactor);
				extraText.anchor.set(0.5);
				extraText.x = (extraText.width - _nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 + 16;
				if (!updateExistingNode) extraContainer.addChild(extraText);
			} else {
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
			}
		} else if (nodePosition == null) {
			x += extraData.get("x");
			y += extraData.get("y");
		}
	}

	const nodeText = updateExistingNode ? pixiNodes[nodeIndex].children[1] : new PIXI.Text();
	nodeText.text = displayName;
	nodeText.style = {
		align: "center",
		dropShadow: hasTextureEnabled,
		dropShadowBlur: 4,
		dropShadowDistance: 0,
		fill: _textColor,
		fontFamily: fontFamily,
		fontSize: displayNameSize * scaleFactor * (_nodeWidth > 400 ? 1.5 : _nodeWidth > 300 ? 1.15 : 1) * (groupName == ALTARS_OF_LILITH ? 1.3 : 1),
		fontVariant: "small-caps",
		fontWeight: useThickNodeStyle ? "bold" : "normal",
		padding: 10
	};
	nodeText.eventMode = "none";
	nodeText.scale.set(1 / scaleFactor);
	nodeText.anchor.set(0.5);
	const nodeTextInvertAlignment = ["Rapid Fire"]; // ugly workaround, but whatever...
	if (isActiveSkill) nodeText.y = nodeTextInvertAlignment.includes(nodeName) ? -85 : 85;

	let nodeText2, nodeText3, nodeText4, plusContainer, minusContainer;
	if (groupName != undefined && ![SPIRIT_BOONS, BOOK_OF_THE_DEAD, PARAGON_BOARD, ALTARS_OF_LILITH, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS, CODEX_OF_POWER].includes(groupName) && maxPoints > 1) {
		nodeText2 = updateExistingNode ? pixiNodes[nodeIndex].children[2] : new PIXI.Text();
		nodeText2.text = allocatedPoints + "/" + maxPoints;
		nodeText2.style = {
			align: "right",
			dropShadow: hasTextureEnabled,
			dropShadowBlur: 4,
			dropShadowDistance: 0,
			fill: _textColor,
			fontFamily: fontFamily,
			fontSize: 24 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		};
		nodeText2.eventMode = "none";
		nodeText2.scale.set(1 / scaleFactor);
		nodeText2.anchor.set(1, 0);
		nodeText2.x = (_nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 - 8;
		nodeText2.y = -(_nodeHeight * shapeSize * circleFactor * diamondFactor) * 0.5 + (shapeType == "circle" ? 1 : 7);

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
			dropShadow: hasTextureEnabled,
			dropShadowBlur: 4,
			dropShadowDistance: 0,
			fill: _textColor,
			fontFamily: fontFamilyOverride,
			fontSize: 48 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		};
		nodeText3.eventMode = "auto";
		nodeText3.scale.set(1 / scaleFactor);
		nodeText3.anchor.set(0, 1);
		nodeText3.x = -(_nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 + 8;
		nodeText3.y = (_nodeHeight * shapeSize * circleFactor * diamondFactor) * 0.5 + (shapeType == "circle" ? 3 : -5);
		const nodeBackground3 = pixiNodes.length > nodeIndex ? minusContainer.children[1] : PIXI.Sprite.from(PIXI.Texture.EMPTY);
		nodeBackground3.anchor.set(0, 1);
		[nodeBackground3.width, nodeBackground3.height, nodeBackground3.x, nodeBackground3.y] = [50, 50, -60, 60];
		if (!updateExistingNode) minusContainer.addChild(nodeText3, nodeBackground3);

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
			dropShadow: hasTextureEnabled,
			dropShadowBlur: 4,
			dropShadowDistance: 0,
			fill: _textColor,
			fontFamily: fontFamilyOverride,
			fontSize: 48 * scaleFactor,
			fontVariant: "small-caps",
			fontWeight: useThickNodeStyle ? "bold" : "normal",
			padding: 10
		};
		nodeText4.eventMode = "auto";
		nodeText4.scale.set(1 / scaleFactor);
		nodeText4.anchor.set(1, 1);
		nodeText4.x = (_nodeWidth * shapeSize * circleFactor * diamondFactor) * 0.5 - 2;
		nodeText4.y = (_nodeHeight * shapeSize * circleFactor * diamondFactor) * 0.5 + (shapeType == "circle" ? 7 : -1);
		const nodeBackground4 = pixiNodes.length > nodeIndex ? plusContainer.children[1] : PIXI.Sprite.from(PIXI.Texture.EMPTY);
		nodeBackground4.anchor.set(1, 1);
		[nodeBackground4.width, nodeBackground4.height, nodeBackground4.x, nodeBackground4.y] = [50, 50, 60, 60];
		if (!updateExistingNode) plusContainer.addChild(nodeText4, nodeBackground4);
	}

	const nodeBorder = updateExistingNode ? pixiNodes[nodeIndex].children[pixiNodes[nodeIndex].children.length - 1] : new PIXI.Graphics();
	nodeBorder.cursor = maxPoints > 0 ? "pointer" : "auto";
	nodeBorder.eventMode = "none";
	nodeBorder.clear();
	nodeBorder.pivot.x = _nodeWidth * 0.5 * shapeSize;
	nodeBorder.pivot.y = _nodeHeight * 0.5 * shapeSize;
	if (([SPIRIT_BOONS, BOOK_OF_THE_DEAD, PARAGON_BOARD, ALTARS_OF_LILITH, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS, CODEX_OF_POWER, undefined].includes(groupName) && requiredPoints == 0) || useThickNodeStyle) {
		let _lineStyleThickSquare = { ...lineStyleThickSquare };
		if (searchQueryMatch) {
			_lineStyleThickSquare.color = searchQueryMatchColor;
		} else if (groupName == PARAGON_BOARD) {
			_lineStyleThickSquare.color = COLOR_OVERRIDE[nodeData.get("nodeType") == "Socket" ? "Allocated Socket" : "Allocated"];
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
		const glyphOutline = updateExistingNode ? nodeContainer.children[nodeContainer.children.length - 1] : new PIXI.Sprite(PIXI_TEXTURES.GLYPH_RADIUS_INDICATOR);
		glyphOutline.pivot.x = 695;
		glyphOutline.pivot.y = 695;
		glyphOutline.eventMode = "none";
		if (!updateExistingNode) nodeContainer.addChild(glyphOutline);
	}

	if (hasTextureEnabled) {
		let [nodeTexture, nodeIcon] = [null, null];
		if (updateExistingNode) {
			nodeTexture = nodeContainer.children[1];
			nodeTexture = nodeContainer.children[2];
		} else {
			if (nodeData.get("baseSkill") != undefined) {
				nodeTexture = new PIXI.Sprite(PIXI_TEXTURES.NODE_ACTIVE_SKILL_MODIFIER);
				nodeTexture.scale.set(1.1);
			} else if (nodeData.get("maxPoints") == 3) {
				nodeTexture = new PIXI.Sprite(PIXI_TEXTURES.NODE_PASSIVE);
				nodeTexture.scale.set(1.25);
			} else if (groupName == KEY_PASSIVE) {
				nodeTexture = new PIXI.Sprite(PIXI_TEXTURES.NODE_KEY_PASSIVE);
				nodeTexture.scale.set(0.7);
			} else if (nodeData.get("shapeType") == "diamond") {
				nodeTexture = new PIXI.Sprite(PIXI_TEXTURES.NODE_GROUP);
				nodeTexture.scale.set(0.9);
			} else if (groupName != undefined) {
				nodeTexture = new PIXI.Sprite(PIXI_TEXTURES.NODE_ACTIVE_SKILL);
				nodeTexture.scale.set(0.9);
				const _nodeName = nodeName.toUpperCase().replaceAll(" ", "_");
				if (_nodeName in PIXI_TEXTURES) {
					nodeIcon = new PIXI.Sprite(PIXI_TEXTURES[_nodeName].UNALLOCATED);
					nodeIcon.scale.set(0.95);
				}
			}
		}
		if (nodeTexture != null) {
			nodeTexture.eventMode = "none";
			nodeTexture.anchor.set(0.5);
			nodeContainer.addChild(nodeTexture);
		}
		if (nodeIcon != null) {
			nodeIcon.eventMode = "none";
			nodeIcon.anchor.set(0.5);
			nodeContainer.addChild(nodeIcon);
		}
	}

	if (shapeType == "diamond") {
		nodeBackground.angle = 45;
		nodeBorder.angle = 45;
	}

	if (!updateExistingNode) {
		node = new PIXI.Container();

		const enableNodeInteraction = (maxPoints > 0) || nodeData.has("description") || (extraData != null && groupName == PARAGON_BOARD);
		node._renderWithCullingHooked = node._renderWithCulling;
		node._renderWithCulling = (...args) => {
			node.interactiveChildren = false;
			node.eventMode = "none";
			node._renderWithCullingHooked(...args);
		};
		node._renderHooked = node._render;
		node._render = (...args) => {
			node.interactiveChildren = enableNodeInteraction;
			node.eventMode = enableNodeInteraction ? "static" : "none";
			if (node.stale) {
				pixiEventQueue.add(nodeIndex);
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
			.on("mouseover", onMouseOverNode)
			.on("tap", onMouseOverNode);

		if (maxPoints == 1) {
			if (nodeData.get("nodeType") == "Socket") {
				node
					.on("click", () => handleParagonGlyphSocket(node))
					.on("tap", () => handleParagonGlyphSocket(node));
			} else if (groupName == EQUIPMENT_PANEL) {
				node
					.on("click", () => handleEquipmentPanelButton(node))
					.on("tap", () => handleEquipmentPanelButton(node));
			} else if (groupName == TECHNIQUE_SLOT) {
				node
					.on("click", () => handleTechniqueSlotButton(node))
					.on("tap", () => handleTechniqueSlotButton(node));
			} else if (groupName == ENCHANT_SLOTS) {
				node
					.on("click", () => handleEnchantSlotButton(node))
					.on("tap", () => handleEnchantSlotButton(node));
			} else {
				node
					.on("click", () => handleToggleButton(node))
					.on("tap", () => handleToggleButton(node));
			}
		} else {
			node.on("click", () => handlePlusButton(node));
		}
		if (nodeData.get("nodeType") == "Socket") {
			node.on("rightclick", () => unequipParagonGlyph(node, true));
		} else if (groupName == EQUIPMENT_PANEL) {
			node.on("rightclick", () => unequipPanelPower(node, true));
		} else if (groupName == TECHNIQUE_SLOT) {
			node.on("rightclick", () => unequipTechnique(true));
		} else if (groupName == ENCHANT_SLOTS) {
			node.on("rightclick", () => unequipEnchant(node, true));
		} else {
			node.on("rightclick", () => handleMinusButton(node));
		}

		node.cullable = true;
		node.cursor = maxPoints > 0 ? "pointer" : "auto";

		const forcedLowerIndex = ["Rapid Fire", "Ice Shards"]; // ugly workaround, but whatever...
		node.zIndex = maxPoints > 0 && !forcedLowerIndex.includes(nodeName) ? maxPoints : 0;

		node.nodeName = nodeName;
		node.nodeData = nodeData;
		node.groupName = groupName;
		node.extraData = extraData;
		node.nodeIndex = nodeIndex;

		node.displayName = displayName;
		node.displayNameSize = displayNameSize;
	}

	if (!updateExistingNode) {
		node.nodeDesc = nodeData.get("description");
		node.nodeBonus = nodeData.get("bonus");
	}
	if (node.activeLocale != activeLocale) {
		node.localizedName = (nodeData.get("nameLocalized") instanceof Map
			&& nodeData.get("nameLocalized").has(activeLocale))
			? nodeData.get("nameLocalized").get(activeLocale) : node.nodeName;
		if (node.localizedName.includes("[") && node.localizedName.includes("]")) node.localizedName = node.localizedName.split("]")[1].split("[")[0];

		node.localizedDesc = (nodeData.get("descriptionLocalized") instanceof Map
			&& nodeData.get("descriptionLocalized").has(activeLocale))
			? nodeData.get("descriptionLocalized").get(activeLocale) : node.nodeDesc;

		node.localizedBonus = (nodeData.get("bonusLocalized") instanceof Map
			&& nodeData.get("bonusLocalized").has(activeLocale))
			? nodeData.get("bonusLocalized").get(activeLocale) : node.nodeBonus;

		node.activeLocale = activeLocale;
	}

	if (requiredPoints == undefined) {
		if (!updateExistingNode) node.nodeDesc = processDescription(node.nodeDesc);
		node.localizedDesc = processDescription(node.localizedDesc);
		function processDescription(curDesc) {
			if (curDesc == undefined || curDesc.length == 0) return curDesc;
			let nodeValues = node.nodeData.get("values");
			if (nodeValues != undefined) {
				let [nodeDesc1, nodeDesc2] = curDesc.split(ENCHANT_EFFECT_DESC);
				nodeValues = nodeValues.values();
				for (const nodeValue of nodeValues) {
					nodeDesc1 = nodeDesc1.replace(/{#}/, nodeValue.length > 0 ? nodeValue : "#");
				}
				if (nodeDesc2 != undefined) {
					let extraValues = node.nodeData.get("extraValues");
					if (extraValues != undefined) {
						extraValues = extraValues.values();
						for (const extraValue of extraValues) {
							nodeDesc2 = nodeDesc2.replace(/{#}/, extraValue.length > 0 ? extraValue : "#");
						}
					}
					curDesc = nodeDesc1 + ENCHANT_EFFECT_DESC + nodeDesc2;
				} else {
					curDesc = nodeDesc1;
				}
			}
			return curDesc;
		}
	}

	if (!updateExistingNode) {
		if ([SPIRIT_BOONS, BOOK_OF_THE_DEAD, PARAGON_BOARD, ALTARS_OF_LILITH, EQUIPMENT_PANEL, TECHNIQUE_SLOT, ENCHANT_SLOTS, CODEX_OF_POWER, undefined].includes(groupName) || maxPoints <= 1) {
			node.addChild(nodeContainer, nodeText, nodeBorder);
		} else {
			node.addChild(nodeContainer, nodeText, nodeText2, minusContainer, plusContainer, nodeBorder);
		}
		pixiNodes[nodeIndex] = nodeData.has("_boardIndex") ? node : pixiJS.stage.addChild(node);
	}

	node.stale = false;
	node.position.x = x;
	node.position.y = y;
	node.scaleFactor = scaleFactor;
}
function drawAllNodes() {
	const className = $(classString).length == 0 ? "none" : $(classString).val();

	const classData = classMap.get(className);
	if (classData == undefined) return;

	const trunkData = classData.get("Trunk Data");
	const classText = className[0].toUpperCase() + className.slice(1);

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
			groupNode.set("shapeSize", 1.8);
			groupNode.set("shapeType", "diamond");
			groupNode.set("requiredPoints", branchData.get("requiredPoints") || 0);
			groupNode.set("x", branchData.get("x"));
			groupNode.set("y", branchData.get("y"));
			if (groupName == SPIRIT_BOONS) {
				groupNode.set("colorOverride", textColor);
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
				groupNode.set("colorOverride", textColor);
				groupNode.set("shapeSize", 1);
				groupNode.set("shapeType", "rectangle");
				groupNode.set("widthOverride", 1700);
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
						["widthOverride", 505],
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
					nodeData.set("allocatedPoints", 0);
					if (nodeData.get("baseSkill") != undefined) {
						// active skill modifier
						nodeData.set("shapeType", "diamond");
						nodeData.set("shapeSize", 0.75);
					} else if (nodeData.get("maxPoints") == 3) {
						// passive skill
						nodeData.set("shapeType", "circle");
						nodeData.set("shapeSize", 1 / Math.SQRT2 * 0.85);
					} else if (groupName == KEY_PASSIVE) {
						nodeData.set("shapeType", "circle");
						nodeData.set("shapeSize", 1 / Math.SQRT2 * 0.85);
					} else {
						// active skill
						nodeData.set("shapeType", "rectangle");
						nodeData.set("shapeSize", 1.3);
					}
					if (nodeData.get("maxPoints") == undefined) {
						// default to 5 max points, if unspecified
						nodeData.set("maxPoints", 5);
					}
					drawNode(nodeName, nodeData, groupName, branchData);
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
			["colorOverride", textColor],
			["requiredPoints", 0],
			["widthOverride", paragonBoardNodes * nodeSpacingX],
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
			drawNode(boardName, paragonBoardNode, PARAGON_BOARD, unsortedIndex);
			const boardHeader = pixiNodes[pixiNodes.length - 1];

			let socketData = null;
			for (const [yPosition, rowData] of Object.entries(boardData)) {
				for (const [xPosition, nodeData] of Object.entries(rowData)) {
					if (nodeData.length > 0) {
						let nodeName = nodeData;
						let nodeDesc = null;
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
						if (nodeType == "Socket") {
							socketData = [nodeName, boardNode]; // defer drawing glyph socket (z-index texture workaround)
						} else {
							drawNode(nodeName, boardNode, PARAGON_BOARD);
							boardContainer.addChild(pixiNodes[pixiNodes.length - 1]);
						}
					}
				}
			}
			if (socketData != null) {
				drawNode(socketData[0], socketData[1], PARAGON_BOARD);
				boardContainer.addChild(pixiNodes[pixiNodes.length - 1]);
				paragonBoardNode.set("glyphSocket", pixiNodes[pixiNodes.length - 1]);
			}
			boardContainer.startPosition = new PIXI.Point(boardX, boardY + nodeSpacingY * 11);
			boardContainer.position.copyFrom(boardContainer.startPosition);
			pixiJS.stage.addChild(boardContainer);
			sortedIndex++;
		}
		$("#groupSelector").append(`<option value="${PARAGON_BOARD.replace(/\s/g, "").toLowerCase()}">${PARAGON_BOARD}</option>`);
	}

	const lilithAltarX = -4000;
	const lilithAltarY = -300;

	const lilithAltarNode = new Map([
		["colorOverride", textColor],
		["requiredPoints", 0],
		["widthOverride", 1750],
		["shapeSize", 1],
		["shapeType", "rectangle"],
		["x", lilithAltarX],
		["y", lilithAltarY]
	]);

	drawNode(ALTARS_OF_LILITH, lilithAltarNode);

	const lilithAltarZoneData = {
		"Dry Steppes": { id: 0, strength: 12, intelligence: 18, willpower: 16, dexterity: 12 },
		"Fractured Peaks": { id: 1, strength: 12, intelligence: 12, willpower: 12, dexterity: 12 },
		"Hawezar": { id: 2, strength: 12, intelligence: 12, willpower: 12, dexterity: 12 },
		"Kehjistan": { id: 3, strength: 12, intelligence: 12, willpower: 12, dexterity: 14 },
		"Scosglen": { id: 4, strength: 20, intelligence: 14, willpower: 16, dexterity: 18 }
	};

	for (const [zoneName, zoneData] of Object.entries(lilithAltarZoneData)) {
		const lilithAltarZoneNode = new Map([
			["allocatedPoints", 0],
			["altarData", zoneData],
			["description", `+${zoneData.strength} Strength\n+${zoneData.intelligence} Intelligence\n+${zoneData.willpower} Willpower\n+${zoneData.dexterity} Dexterity`],
			["id", `altar-${zoneData.id}`],
			["maxPoints", 1],
			["widthOverride", 305],
			["shapeSize", 1],
			["shapeType", "rectangle"],
			["x", lilithAltarX + 360 * (zoneData.id - 2)],
			["y", lilithAltarY + 150]
		]);
		drawNode(zoneName, lilithAltarZoneNode, ALTARS_OF_LILITH);
	}

	$("#groupSelector").append(`<option value="${ALTARS_OF_LILITH.replace(/\s/g, "").toLowerCase()}">${ALTARS_OF_LILITH}</option>`);

	const equipmentPanelX = -4000;
	const equipmentPanelY = 0;

	const equipmentPanelNode = new Map([
		["colorOverride", textColor],
		["requiredPoints", 0],
		["widthOverride", 1750],
		["shapeSize", 1],
		["shapeType", "rectangle"],
		["x", equipmentPanelX],
		["y", equipmentPanelY]
	]);

	drawNode(EQUIPMENT_PANEL, equipmentPanelNode);

	const equipmentSlots = {
		0: "Helmet",
		1: "Chest",
		2: "Gloves",
		3: "Pants",
		4: "Boots",
		5: className == "barbarian" ? "2H Slashing" : null,
		6: className == "rogue" ? "Ranged Weapon" : className == "barbarian" ? "2H Bludgeoning" : "Mainhand",
		7: null,
		8: "Amulet",
		9: "Ring",
		10: "Ring",
		11: null,
		12: ["barbarian", "rogue"].includes(className) ? "1H Weapon" : null,
		13: ["barbarian", "rogue"].includes(className) ? "1H Weapon" : "Offhand"
	};

	const allOneHandWeaponTypes = ["1H Axe", "1H Dagger", "1H Mace", "1H Scythe", "1H Sword", "1H Wand"];
	const allTwoHandWeaponTypes = ["2H Axe", "2H Bow", "2H Crossbow", "2H Mace", "2H Polearm", "2H Scythe", "2H Staff", "2H Sword"];
	const validEquipmentPerSlot = {
		"Helmet": ["Defensive", "Utility", "Helm"],
		"Chest": ["Defensive", "Utility", "Chest"],
		"Gloves": ["Offensive", "Utility", "Gloves"],
		"Pants": ["Defensive", "Pants"],
		"Boots": ["Mobility", "Utility", "Boots"],
		"Amulet": ["Defensive", "Mobility", "Offensive", "Utility", "Amulet"],
		"Ring": ["Offensive", "Resource", "Ring"],
		"2H Slashing": ["Offensive", "2H Axe", "2H Polearm", "2H Scythe", "2H Sword"],
		"2H Bludgeoning": ["Offensive", "2H Mace", "2H Staff"],
		"1H Weapon": ["Offensive"].concat(allOneHandWeaponTypes),
		"Ranged Weapon": ["Offensive", "2H Bow", "2H Crossbow"],
		"Mainhand": ["Offensive"].concat(allOneHandWeaponTypes, allTwoHandWeaponTypes),
		"Offhand": [className == "necromancer" ? "Defensive" : null, "Offensive", "Utility"].concat(allOneHandWeaponTypes)
	};

	for (let [equipSlotId, equipSlotName] of Object.entries(equipmentSlots)) {
		if (equipSlotName == null) continue;
		const equipSlotNode = new Map([
			["allocatedPoints", 0],
			["description", EQUIPMENT_PANEL_ITEM_DESC],
			["id", `equip-${equipSlotId}`],
			["maxPoints", 1],
			["validEquipment", validEquipmentPerSlot[equipSlotName]],
			["widthOverride", 850],
			["shapeSize", 1],
			["shapeType", "rectangle"],
			["x", equipSlotId < 7 ? equipmentPanelX - 450 : equipmentPanelX + 450],
			["y", equipmentPanelY + 150 * ((equipSlotId % 7) + 1)]
		]);
		drawNode(equipSlotName, equipSlotNode, EQUIPMENT_PANEL);
	}

	$("#groupSelector").append(`<option value="${EQUIPMENT_PANEL.replace(/\s/g, "").toLowerCase()}">${EQUIPMENT_PANEL}</option>`);

	if (className == "barbarian") {
		const techniqueSlotGroupX = -5350;
		const techniqueSlotGroupY = 900;

		const techniqueSlotGroupNodeData = new Map([
			["colorOverride", textColor],
			["requiredPoints", 0],
			["widthOverride", 850],
			["shapeSize", 1],
			["shapeType", "rectangle"],
			["x", techniqueSlotGroupX],
			["y", techniqueSlotGroupY]
		]);
		drawNode(TECHNIQUE_SLOT, techniqueSlotGroupNodeData);

		const techniqueSlotNodeData = new Map([
			["allocatedPoints", 0],
			["description", TECHNIQUE_SLOT_DESC],
			["id", `techniqueSlot`],
			["maxPoints", 1],
			["widthOverride", 850],
			["shapeSize", 1],
			["shapeType", "rectangle"],
			["x", techniqueSlotGroupX],
			["y", techniqueSlotGroupY + 150]
		]);
		drawNode("Weapon Expertise", techniqueSlotNodeData, TECHNIQUE_SLOT);

		// rather than using `pixiNodes.filter(...)` constantly, we just create a reference to the technique slot
		techniqueSlotNode = pixiNodes[pixiNodes.length - 1];

		$("#groupSelector").append(`<option value="${TECHNIQUE_SLOT.replace(/\s/g, "").toLowerCase()}">${TECHNIQUE_SLOT}</option>`);
	} else if (className == "sorcerer") {
		const enchantSlotGroupX = -5350;
		const enchantSlotGroupY = 750;

		const enchantSlotGroupNodeData = new Map([
			["colorOverride", textColor],
			["requiredPoints", 0],
			["widthOverride", 850],
			["shapeSize", 1],
			["shapeType", "rectangle"],
			["x", enchantSlotGroupX],
			["y", enchantSlotGroupY]
		]);

		drawNode(ENCHANT_SLOTS, enchantSlotGroupNodeData);

		for (let i = 0; i < 2; i++) {
			const enchantSlotNodeData = new Map([
				["allocatedPoints", 0],
				["description", ENCHANT_SLOT_DESC],
				["id", `enchant-${i}`],
				["maxPoints", 1],
				["widthOverride", 850],
				["shapeSize", 1],
				["shapeType", "rectangle"],
				["x", enchantSlotGroupX],
				["y", enchantSlotGroupY + 150 * (i + 1)]
			]);
			drawNode(ENCHANT_SLOT, enchantSlotNodeData, ENCHANT_SLOTS);
		}

		// rather than using `pixiNodes.filter(...)` constantly, we just create a reference to each enchant slot
		enchantSlotNodes = [pixiNodes[pixiNodes.length - 2], pixiNodes[pixiNodes.length - 1]];

		$("#groupSelector").append(`<option value="${ENCHANT_SLOTS.replace(/\s/g, "").toLowerCase()}">${ENCHANT_SLOTS}</option>`);
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
		const startY = 1200;
		const nodeWidth = 400;
		const nodeSpacingX = nodeWidth + 50;
		const nodeSpacingY = 150;

		let [codexX, codexY] = [startX, startY];

		const codexNode = new Map([
			["colorOverride", textColor],
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
}
function drawTooltip(curNode, forceDraw) {
	const clampRenderScale = Math.min(1, (window.innerWidth - 40) / tooltipWidth) * pixiTooltipZoomLevel;
	const clampScale = clampRenderScale / stageScale;
	const scaleFactor = devicePixelRatio >= 2 ? 1 : (clampRenderScale >= 0.45 ? 2 : 1) / devicePixelRatio * clampRenderScale;

	// skip tooltip redraw if we already have the correct one displayed
	if (!forceDraw && !debugMode && pixiTooltip.nodeIndex == curNode.nodeIndex && pixiTooltip.scaleFactor == scaleFactor) return;

	eraseTooltip();

	const nodeData = curNode.nodeData;
	let nodeDesc = debugMode
		? `x: ${getNodePosition(curNode).join(" / y: ")}`
		: (curNode.localizedDesc == undefined || curNode.localizedDesc.length == 0)
		? curNode.nodeDesc
		: curNode.localizedDesc;
	if (nodeDesc == undefined) nodeDesc = "";

	const requiredPoints = nodeData.get("requiredPoints");
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
		const allocatedPoints = nodeData.get("allocatedPoints");
		const activeLocale = readCookie("activeLocale", "enUS");
		if ([EQUIPMENT_PANEL, CODEX_OF_POWER].includes(curNode.groupName)) {
			nodeDesc = nodeDesc.replace(/{(.+?)}/g, (matchText, captureText) => {
				const outputText = captureText.split("/");
				return `[${outputText.join(" - ")}]`;
			});
		} else if (curNode.groupName == TECHNIQUE_SLOT) {
			nodeDesc = nodeDesc.replace(/{(.+?)}/g, (matchText, captureText) => captureText.split("/").at(-1));
			if (curNode.localizedBonus != null) nodeDesc += `\n${curNode.localizedBonus}`;
		} else if (curNode.groupName == ENCHANT_SLOTS) {
			const nodeId = Number(nodeData.get("id").match(/\d+/)[0]);
			const enchantId = enchantSlotData[nodeId];
			if (enchantId != undefined) {
				const enchantNode = pixiNodes.filter(pixiNode => pixiNode.nodeData.get("id") == enchantId)[0];
				const enchantPoints = enchantNode.nodeData.get("allocatedPoints");
				nodeDesc = nodeDesc.split(ENCHANT_EFFECT_DESC)[1].trim()
					.replace(/{(.+?)}/g, (matchText, captureText) => captureText.split("/").at(enchantPoints > 0 ? enchantPoints - 1 : 0));
			}
		} else {
			const boardIndex = nodeData.get("_boardIndex");

			const className = $(classString).length == 0 ? "none" : $(classString).val();
			const classText = className[0].toUpperCase() + className.slice(1);

			const nodeType = nodeData.get("nodeType");
			if (nodeType == "Socket") {
				const paragonGlyphs = paragonData[classText]["Glyph"];
				if (boardIndex in paragonBoardGlyphData) {
					const glyphIndex = paragonBoardGlyphData[boardIndex];
					const glyphRank = boardIndex in paragonBoardGlyphRankData ? paragonBoardGlyphRankData[boardIndex] : 1;
					const glyphData = getGlyphData(glyphIndex);
					const localizedGlyphName = activeLocale in glyphData.nameLocalized ? glyphData.nameLocalized[activeLocale] : glyphData.name;
					const localizedGlyphDesc = (activeLocale in glyphData.descLocalized ? glyphData.descLocalized[activeLocale] : glyphData.desc)
						.replace(/{(.+?)}/g, (matchText, captureText) => {
						const outputText = captureText.split("/");
						return outputText[glyphRank > 0 ? Math.min(glyphRank, outputText.length) - 1 : 0];
					});
					const localizedGlyphBonus = activeLocale in glyphData.bonusLocalized ? glyphData.bonusLocalized[activeLocale] : glyphData.bonus;
					nodeData.set("nameOverride", `${curNode.localizedName} [${localizedGlyphName} — Rank ${glyphRank}]`);
					nodeData.set("thresholdRequirements", glyphData.thresholdRequirements);
					nodeDesc = `${localizedGlyphDesc}\n\nAdditional Bonus: (if requirements met)\n${localizedGlyphBonus}\n\nRequirements: (purchased in radius range)\n{thresholdRequirements}`;
				} else {
					nodeDesc = "Allocate this node to see a list of available glyphs.";
				}
			} else if (nodeType == "Magic" || nodeType == "Rare") {
				const glyphMultiplier = getNodeGlyphMultiplier(curNode);
				const glyphMultiplierSpecial = getNodeGlyphMultiplierSpecial(curNode);
				nodeDesc = nodeDesc.replace(/(\-?\d*\.?\d+)(.*)/g, (matchText, captureText1, captureText2) => {
					const _glyphMultiplier = glyphMultiplier * (["Strength", "Intelligence", "Willpower", "Dexterity"].some(element => matchText.includes(element)) ? 1 : glyphMultiplierSpecial);
					return String(Math.round(parseFloat(captureText1) * _glyphMultiplier * 10) / 10) + captureText2;
				});
			}

			if (!(boardIndex in glyphRadiusAttributeTotals)) glyphRadiusAttributeTotals[boardIndex] = { "Strength": 0, "Intelligence": 0, "Willpower": 0, "Dexterity": 0 };
			nodeDesc = nodeDesc.replace(/{(.+?)}/g, (matchText, captureText) => {
				if (captureText.includes("thresholdRequirements") && nodeData.has("thresholdRequirements")) {
					captureText = nodeData.get("thresholdRequirements");
					if (typeof captureText != "string") captureText = captureText[classText];
					if (typeof captureText != "string") captureText = captureText.join("\n");
					captureText = captureText.replace(" and ", "\n");
					if (nodeType == "Socket") {
						captureText = captureText.replace(/(\d+ Strength)/gi, `${Math.round(glyphRadiusAttributeTotals[boardIndex]["Strength"] * 10) / 10} Strength | $1`);
						captureText = captureText.replace(/(\d+ Intelligence)/gi, `${Math.round(glyphRadiusAttributeTotals[boardIndex]["Intelligence"] * 10) / 10} Intelligence | $1`);
						captureText = captureText.replace(/(\d+ Willpower)/gi, `${Math.round(glyphRadiusAttributeTotals[boardIndex]["Willpower"] * 10) / 10} Willpower | $1`);
						captureText = captureText.replace(/(\d+ Dexterity)/gi, `${Math.round(glyphRadiusAttributeTotals[boardIndex]["Dexterity"] * 10) / 10} Dexterity | $1`);
					}
				}
				if (captureText.includes("ParagonBoardEquipIndex")) {
					let equipIndex = "EquipIndex";
					if (boardIndex == 0) {
						equipIndex = "0";
					} else if (boardIndex in paragonBoardEquipIndices) {
						equipIndex = paragonBoardEquipIndices[boardIndex];
					}
					captureText = captureText.replace(/ParagonBoardEquipIndex/g, equipIndex);
					if (equipIndex != "EquipIndex") {
						if (captureText.includes("{") && captureText.includes("}")) {
							captureText = captureText.replace(/{([^{}]+)}/g, (subMatch, subCapture) => eval(subCapture));
						} else {
							captureText = String(eval(captureText));
						}
						const [baseStr, baseInt, baseWill, baseDex] = getBaseAttributes();
						captureText = captureText.replace(/(\d+ Strength)/gi, `${baseStr + Math.floor(paragonStatTotals["Strength"].minValue)} Strength | $1`);
						captureText = captureText.replace(/(\d+ Intelligence)/gi, `${baseInt + Math.floor(paragonStatTotals["Intelligence"].minValue)} Intelligence | $1`);
						captureText = captureText.replace(/(\d+ Willpower)/gi, `${baseWill + Math.floor(paragonStatTotals["Willpower"].minValue)} Willpower | $1`);
						captureText = captureText.replace(/(\d+ Dexterity)/gi, `${baseDex + Math.floor(paragonStatTotals["Dexterity"].minValue)} Dexterity | $1`);
					}
				}
				let outputText = captureText.split("/");
				const baseSkill = nodeData.get("baseSkill");
				if (baseSkill == undefined) {
					return outputText[allocatedPoints > 0 ? Math.min(allocatedPoints, outputText.length) - 1 : 0].replaceAll("|", "/");
				} else {
					const baseAllocatedPoints = pixiNodes.find(pixiNode => pixiNode.nodeName == baseSkill).nodeData.get("allocatedPoints");
					return outputText[baseAllocatedPoints > 0 ? Math.min(baseAllocatedPoints, outputText.length) - 1 : 0].replaceAll("|", "/");
				}
			});
		}
	}
	if (curNode.displayName == curNode.localizedName && nodeDesc.length == 0) return;

	let nodeHeader = nodeData.get("nameOverride");
	if (nodeHeader == undefined) {
		if ([EQUIPMENT_PANEL, ENCHANT_SLOTS].includes(curNode.groupName) && curNode.slotName != undefined) {
			nodeHeader = `${curNode.localizedName} (${curNode.slotName})`;
		} else {
			nodeHeader = curNode.localizedName;
			const itemSlot = nodeData.get("itemSlot");
			const itemType = nodeData.get("itemType");
			if (itemSlot != undefined) {
				nodeHeader += ` (${itemType} ${itemSlot})`;
			} else if (itemType != undefined) {
				nodeHeader += ` (${itemType})`;
			}
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
	pixiTooltip.zIndex = 9;

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
	connector.eventMode = "none";

	pixiConnectors.push(pixiJS.stage.addChild(connector));
}
function drawAllConnectors() {
	pixiConnectorPairs = [];
	for (let i = pixiConnectors.length - 1; i >= 0; i--) pixiConnectors.pop().destroy(true);

	const className = $(classString).length == 0 ? "none" : $(classString).val();

	const classData = classMap.get(className);
	if (classData == undefined) return;

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
	} else if (groupName == ALTARS_OF_LILITH) {
		if (nodeData.includes("altar")) {
			if (decodeBase) return nodeData;
			const altarArray = nodeData.split("-");
			const altarId = convertBase(altarArray[1], 10, 62);
			return `a${altarId}`;
		} else {
			if (!decodeBase) return nodeData;
			const altarId = convertBase(nodeData.slice(1), 62, 10);
			return `altar-${altarId}`;
		}
	} else if (groupName == EQUIPMENT_PANEL) {
		if (nodeData.includes("equip")) {
			if (decodeBase) return nodeData;
			const equipArray = nodeData.split("-");
			const equipId = convertBase(equipArray[1], 10, 62);
			return `e${equipId}`;
		} else {
			if (!decodeBase) return nodeData;
			const equipId = convertBase(nodeData.slice(1), 62, 10);
			return `equip-${equipId}`;
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
	[pixiJS.ticker.minFPS, pixiJS.ticker.maxFPS] = [1, document.hasFocus() ? 120 : 1];
}
function rebuildCanvas() {
	while (pixiJS.stage.children[0]) pixiJS.stage.children[0].destroy(true);

	rebuildTextures();

	pixiAllocatedPoints = new Map();
	pixiAllocatedParagonPoints = 0;

	pixiNodes = [];

	pixiConnectors = [];
	pixiConnectorPairs = [];

	pixiEventQueue = new Set();

	pixiBackground = PIXI.Sprite.from(PIXI.Texture.EMPTY);
	pixiBackground.on("mouseover", onMouseOverBackground);

	pixiTooltip = new PIXI.Container();
	pixiDragging = null;

	pixiJS.stage.pivot.set(0);
	pixiJS.stage.scale.set(1);

	stageScale = 1;
	curRenderScale = 1;
	newRenderScale = 1;

	curWidth = 0;
	curHeight = 0;

	glyphRadiusAttributeTotals = {};
	paragonStatTotals = {
		"Strength": { minValue: 0, maxValue: 0 },
		"Intelligence": { minValue: 0, maxValue: 0 },
		"Willpower": { minValue: 0, maxValue: 0 },
		"Dexterity": { minValue: 0, maxValue: 0 }
	};

	paragonBoardGridData = {};
	paragonBoardRotationData = {};
	paragonBoardGlyphData = {};
	paragonBoardGlyphRankData = {};
	equipmentPanelData = {};
	techniqueSlotData = null;
	techniqueSlotNode = null;
	enchantSlotData = {};
	enchantSlotNodes = [];

	drawBackground();
	drawAllNodes();
	resizeSearchInput();
	drawAllConnectors();

	resizeCanvas();

	$("#charLevel").text("1");
	$("#renownLevel").empty();

	updateDetailsWindow();
}
function resizeCanvas() {
	$("#header, #footer").css("display", window.innerHeight < 400 ? "none" : "block");
	let [newWidth, newHeight] = [window.innerWidth, window.innerHeight];
	if (curWidth != newWidth || curHeight != newHeight) {
		const offsetTop = $("#header").outerHeight(true);
		const offsetBottom = $("#extraInfo").outerHeight(true) + $("#extraButtons1").outerHeight(true) + $("#extraButtons2").outerHeight(true) + $("#footer").outerHeight(true);

		pixiJS.renderer.resize(minCanvasWidth, minCanvasHeight);
		[newWidth, newHeight] = [window.innerWidth, window.innerHeight];
		pixiJS.renderer.resize(newWidth, newHeight);

		for (let i = 0, n = pixiJS.stage.children.length; i < n; i++) {
			const pixiChild = pixiJS.stage.children[i];
			pixiChild.position.x = pixiChild.position.x - curWidth * 0.5 + newWidth * 0.5;
			pixiChild.position.y = pixiChild.position.y - curHeight * 0.5 + newHeight * 0.5;
		}
		[curWidth, curHeight] = [newWidth, newHeight];

		if (pixiTooltip.children.length > 0) drawTooltip(pixiNodes[pixiTooltip.nodeIndex]);

		if ($("#extraButtons2").width() > 0) $("#extraInfo").outerWidth($("#extraButtons2").width() - parseInt($("#groupSelector").css("padding-left")));
		$("body").css({"width": newWidth, "height": newHeight }); // prevent undesirable mobile scrolling
		resetFrameTimer();
		applyZoomLevel();
		resizeSearchInput();
		handleDetailsWindowEvent();
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
	document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=None;Secure`;
}

// finalize the page once DOM has loaded
$(document).ready(function() {
	$("#localeSelector").removeClass("disabled").select2({
		escapeMarkup: data => data,
		templateResult: handleLocaleTemplateResult,
		templateSelection: handleLocaleTemplateSelection
	});
	$("#localeSelector").val(readCookie("activeLocale", "enUS")).trigger("change");
	$("#localeSelector").on("change", handleLocaleSelection);

	$("#versionLabel").on("click", handleVersionLabel);
	handleVersionInterval();
	versionInterval = setInterval(handleVersionInterval, 900000);

	$("#menuButton").on("click", handleMenuButton);
	$("#resetButton").on("click", handleResetButton);
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

	interact("#detailsWindow")
		.resizable({
			edges: { left: true, right: true, bottom: true, top: true },
			listeners: { move: e => handleDetailsWindowEvent(e, "resize") }
		})
		.draggable({
			listeners: { move: e => handleDetailsWindowEvent(e, "drag") },
			ignoreFrom: "#detailsWindowBox"
		});
	$("#detailsWindowToggle").on("click", handleDetailsWindowToggleButton);

	$("#canvasContainer").append(pixiJS.renderer.view);
	$("#canvasContainer").on("wheel mousedown touchstart mousemove touchmove mouseenter mouseleave mouseup touchend contextmenu", handleCanvasEvent);
	$(window).on("copy", handleTooltipCopy);
	$(window).on("resize", resizeCanvas);
	if (window.matchMedia("(any-pointer:fine)").matches) {
		$(window).on("select2:open", e => $(".select2-search__field[aria-controls='select2-" + e.target.id + "-results']").each((key, value) => value.focus()));
	}
	$(window).on("select2:open", e => {
		const container = $(e.target).parent();
		const position = container.offset().top;
		const availableHeight = $(window).height() - position - container.outerHeight();
		$(".select2-results__options").css("max-height", availableHeight - 80);
		if (e.target.id == "localeSelector") {
			$("#floatLeft, #floatLeft .select2-container").width(160);
		}
	});
	$(window).on("select2:close", e => {
		if (e.target.id == "localeSelector") {
			$("#floatLeft, #floatLeft .select2-container").width(60);
		}
	});

	rebuildTextures();
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