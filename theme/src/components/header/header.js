$(document).ready(function () {
	if(!document.body.classList.contains("fsi-guides-topic-page")) {
		return;
	}
    // Move the mobile toolbar to the toolbar container
    const $toolbarHeaderContainer = $(".toolbar-header-container");
    const $toolbarHeaderMobile = $(".toolbar.below-title.mobile");
    if ($toolbarHeaderMobile.length && $toolbarHeaderContainer.length) {
        $toolbarHeaderContainer.append($toolbarHeaderMobile);
    }
});

$(document).ready(function () {
	if(!document.body.classList.contains("manufacturing-guides-topic-page")) {
		return;
	}
    // Move the mobile toolbar to the toolbar container
    const $toolbarHeaderContainer = $(".toolbar-header-container");
    const $toolbarHeaderMobile = $(".toolbar.below-title.mobile");
    if ($toolbarHeaderMobile.length && $toolbarHeaderContainer.length) {
        $toolbarHeaderContainer.append($toolbarHeaderMobile);
    }
});
