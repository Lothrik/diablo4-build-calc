const buildNumber = 42167;
const localVersion = `1.0.2.${buildNumber}-1`;
var remoteVersion = "";
var versionInterval = null;

function handleVersionLabel(event) {
	if (event.type == "click" && versionCompare(localVersion, remoteVersion) == -1) window.location.reload();
}

function handleVersionInterval() {
	$.get(`../VERSION?t=${Date.now()}`, null, versionData => {
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

$("#versionLabel").on("click", handleVersionLabel);
handleVersionInterval();
versionInterval = setInterval(handleVersionInterval, 900000);

function traverse(node, callback) {
	callback(node);
	if (node.children.length > 0) {
		node.children.forEach(child => {
			traverse(child, callback);
		});
	}
}

const localizationMarkers = [
	"deDE",
	"esES",
	"esMX",
	"frFR",
	"itIT",
	"jaJP",
	"koKR",
	"plPL",
	"ptBR",
	"ruRU",
	"zhCN",
	"zhTW"
];

function processJSON(object) {
	for (const key in object) {
		if (localizationMarkers.some(marker => key.includes(marker)) || key.toLowerCase().includes("localized")) {
			delete object[key];
		} else if (typeof object[key] == "object") {
			processJSON(object[key]);
		}
	}
	return object;
}

$.getJSON("build-" + buildNumber + ".json", null, fullData => {
	const processedJSON = processJSON(fullData);

	const root = $("#root");
	const tree = jsonview.create(processedJSON);

	$("#loading").remove();

	// recursively reduce `tree` node depth by 1
	traverse(tree, node => node.depth -= 1);

	// render and expand `tree`, skipping the root node
	tree.children.forEach(data => {
		jsonview.render(data, root[0]);
		jsonview.expand(data);
		data.children.forEach(child => {
			jsonview.collapse(child);
			traverse(child, node => {
				if (node.depth > 1) node.isExpanded = true;
			});
		});
	});

	// group JSON label text into a single element per line to improve word wrap behavior and text alignment
	// we use DOM functions exclusively here instead of jQuery because this affects a HUGE number of elements, and speed is important
	const lines = document.querySelectorAll(".line");
	for (const line of lines) {
		const children = line.querySelectorAll(".caret-icon, .empty-icon, .json-key, .json-size, .json-separator, .json-value");
		const label = document.createElement("div");
		label.className = "json-label";
		line.prepend(label);
		for (const child of children) {
			if (child.classList.contains("json-key")) {
				child.innerHTML = child.innerHTML.replace(/_/g, "<wbr>_");
			} else if (child.classList.contains("json-value")) {
				child.innerHTML = child.innerHTML.replace(/\//g, "<wbr>/").replace(/\n/g, "<br>");
				continue;
			}
			label.append(child);
		}
	}
});