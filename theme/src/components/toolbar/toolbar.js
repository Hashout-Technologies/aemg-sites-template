$(document).ready(function () {
	if(!document.body.classList.contains("hitech-guides-topic-page")) {
		return;
	}
    let colGrid = $(".col-9grid-container");
    let toolbarComponent = $(".gu-toolbar_wrapper");
    let copyLinkComponent = $(".toolbar.desktop .copy-link-component");
    let title = $(".topic__container h1");

    if(colGrid && toolbarComponent) {
        colGrid.append(toolbarComponent);
    }
    if (copyLinkComponent.length && title.length) {
        copyLinkComponent.insertAfter(title);
    }
});

//FSI template specific handling of toolbar 
$(document).ready(function () {
	if(!document.body.classList.contains("fsi-guides-topic-page")) {
		return;
	}
    const $toolbarContainer = $(".toolbar-container");
    const $headerToolbarContainer = $(".gu-header__toolbar-container");
    const $toolbarTopic = $(".toolbar.toolbar-topic.desktop");
    const $toolbarHeader = $(".toolbar.toolbar-header.desktop");
    if ($toolbarTopic.length && $toolbarContainer.length) {
        $toolbarContainer.append($toolbarTopic);
    }
    if ($toolbarHeader.length && $headerToolbarContainer.length) {
        $headerToolbarContainer.append($toolbarHeader);
    }
    $(".toolbar.above-title .lat-button").click(function () {
        $('.toolbar.above-title .lat-section').removeClass("hidden");
        $('.toolbar.above-title .lat-section').addClass("display-flex");
        $('.overlay').removeClass('hidden');
    });
    
    $('.toolbar.above-title .lat-closebutton').click(function () {
        $('.toolbar.above-title .lat-section').addClass("hidden");
        $('.toolbar.above-title .lat-section').removeClass("display-flex");
        $('.overlay').addClass('hidden');
    });
    function adjustPopupHeight() {
        var topOffset = 96; 
        var newHeight = $(window).height() - topOffset;
        $('.toolbar.above-title .lat-section').css('height', newHeight + 'px');
    }

    adjustPopupHeight();
    $(window).resize(function () {
        adjustPopupHeight();
    }); 
});

document.addEventListener("DOMContentLoaded", () => {
	if(!document.body.classList.contains("fsi-guides-topic-page")) {
		return;
	}
    const toggleVisibility = () => {
        const isMobileView = window.innerWidth <= 1023; // Example breakpoint for mobile

        // Handle mobile elements
        Array.from(document.querySelectorAll(".mobile")).forEach((element) => {
            element.classList.toggle("hidden", !isMobileView);
        });

        // Handle desktop elements
        Array.from(document.querySelectorAll(".desktop")).forEach((element) => {
            element.classList.toggle("hidden", isMobileView);
        });
    };

    // Initial check
    toggleVisibility();
    // Recheck on window resize
    window.addEventListener("resize", toggleVisibility);
});

/* manufacturing template specific handling */

$(document).ready(function () {
	if(!document.body.classList.contains("manufacturing-guides-topic-page")) {
		return;
	}

  const $toolbarContainer = $(".toolbar-container");
  const $headerToolbarContainer = $(".gu-header__toolbar-container");
  const $toolbarTopic = $(".toolbar.toolbar-topic.desktop");
  const $toolbarHeader = $(".toolbar.toolbar-header.desktop");
  if ($toolbarTopic.length && $toolbarContainer.length) {
    $toolbarContainer.append($toolbarTopic);
  }
  if ($toolbarHeader.length && $headerToolbarContainer.length) {
    $headerToolbarContainer.append($toolbarHeader);
  }
  $(".toolbar.above-title .lat-button").click(function () {
    $(".toolbar.above-title .lat-section").removeClass("hidden");
    $(".toolbar.above-title .lat-section").addClass("display-flex");
    $(".overlay").removeClass("hidden");
  });

  $(".toolbar.above-title .lat-closebutton").click(function () {
    $(".toolbar.above-title .lat-section").addClass("hidden");
    $(".toolbar.above-title .lat-section").removeClass("display-flex");
    $(".overlay").addClass("hidden");
  });
  function adjustPopupHeight() {
    var topOffset = 96;
    var newHeight = $(window).height() - topOffset;
    $(".toolbar.above-title .lat-section").css("height", newHeight + "px");
  }

  adjustPopupHeight();
  $(window).resize(function () {
    adjustPopupHeight();
  });
});

document.addEventListener("DOMContentLoaded", () => {
	if(!document.body.classList.contains("manufacturing-guides-topic-page")) {
		return;
	}

  const toggleVisibility = () => {
    const isMobileView = window.innerWidth <= 1023; // Example breakpoint for mobile

    // Handle mobile elements
    Array.from(document.querySelectorAll(".mobile")).forEach((element) => {
      element.classList.toggle("hidden", !isMobileView);
    });

    // Handle desktop elements
    Array.from(document.querySelectorAll(".desktop")).forEach((element) => {
      element.classList.toggle("hidden", isMobileView);
    });
  };

  // Initial check
  toggleVisibility();
  // Recheck on window resize
  window.addEventListener("resize", toggleVisibility);
});

// change marge based on contributors
document.addEventListener("DOMContentLoaded", function () {
	if(!document.body.classList.contains("manufacturing-guides-topic-page")) {
		return;
	}
  const contributors = document.querySelector(
    "div.topic .topic__updated .updated__container .contributors"
  );
  const toolbarSection = document.querySelector(
    ".below-updated.mobile .toolsection"
  );
  if (window.innerWidth <= 768 && toolbarSection) {
    if (contributors && contributors.children.length > 0) {
      toolbarSection.style.marginTop = "-3.3rem";
    } else {
      toolbarSection.style.marginTop = "-2.6rem";
      contributors.style.background = "red";
    }
  }
});
