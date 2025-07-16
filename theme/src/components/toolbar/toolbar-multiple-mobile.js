$(document).ready(function () {
	if(!document.body.classList.contains("fsi-guides-topic-page")) {
		return;
	}
    // Move the mobile toolbar to the toolbar container
    const $toolbarHeaderContainer = $(".toolbar-scenario-mobile");
    const $toolbarHeaderMobile = $(".toolbar.above-title.mobile");
    if ($toolbarHeaderMobile.length && $toolbarHeaderContainer.length) {
        $toolbarHeaderContainer.append($toolbarHeaderMobile);
    }
});

//manufacturing template specific handling
$(document).ready(function () {
	if(!document.body.classList.contains("manufacturing-guides-topic-page")) {
		return;
	}
    // Move the mobile toolbar to the toolbar container
    const $toolbarHeaderContainer = $(".toolbar-scenario-mobile");
    const $toolbarHeaderMobile = $(".toolbar.above-title.mobile");
    if ($toolbarHeaderMobile.length && $toolbarHeaderContainer.length) {
        $toolbarHeaderContainer.append($toolbarHeaderMobile);
    }
});

