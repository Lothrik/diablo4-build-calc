const buildNumber = 36331;

var otherJSON = "";
$.getJSON("build-" + buildNumber + ".json", null, successData => {
	const root = $("#root");
	const tree = jsonview.create(successData);
	root.text("");
	jsonview.render(tree, root[0]);
	jsonview.expand(tree);

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