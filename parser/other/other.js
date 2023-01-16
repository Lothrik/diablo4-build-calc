const buildNumber = 36331;

function traverse(node, callback) {
	callback(node);
	if (node.children.length > 0) {
		node.children.forEach(child => {
			traverse(child, callback);
		});
	}
}

var otherJSON = "";
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

	const jsonKeys = $(".json-key");
	jsonKeys.html((index, oldHTML) => {
		const newHTML = oldHTML.replace(/_/g, "<wbr>_");
		const nextSibling = $(jsonKeys[index].nextElementSibling);
		if (nextSibling.hasClass("json-size") || nextSibling.hasClass("json-separator")) {
			const siblingHTML = nextSibling.prop("outerHTML");
			nextSibling.remove();
			return newHTML + siblingHTML;
		} else {
			return newHTML;
		}
	});

	const caretIcons = $(".caret-icon");
	caretIcons.html((index, oldHTML) => {
		const nextSibling = $(caretIcons[index].nextElementSibling);
		if (nextSibling.hasClass("json-key")) {
			const siblingHTML = nextSibling.prop("outerHTML");
			nextSibling.remove();
			return oldHTML + siblingHTML;
		} else {
			return oldHTML;
		}
	});
});