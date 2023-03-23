const buildNumber = 39657;
const localVersion = `0.8.0.${buildNumber}-3`;
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

$.getJSON("build-" + buildNumber + ".json", null, data => {
	const root = $("#root");
	const tree = jsonview.create(data);

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
		const children = line.querySelectorAll(".caret-icon, .empty-icon, .json-key, .json-size, .json-separator");
		const label = document.createElement("div");
		label.className = "json-label";
		line.prepend(label);
		for (const child of children) {
			if (child.classList.contains("json-key")) child.innerHTML = child.innerHTML.replace(/_/g, "<wbr>_");
			label.append(child);
		}
	}
});