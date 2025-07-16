$(document).ready(function () {
  $("body.hitech-guides-topic-page .gu-search__toggle").click(function () {
		if(!document.body.classList.contains("hitech-guides-topic-page")) {
			return;
		}
    $(".gu-header_search-container").toggleClass("search-visible");

    // Check if backdrop exists, if not, add it
    if ($(".gu-search-backdrop").length === 0) {
      $("body").append('<div class="gu-search-backdrop"></div>');
    }
  });

  // Remove backdrop and close search when clicking outside
  $(document).on("click", function (event) {	  
    if (
      !$(event.target).closest(
        ".gu-header_search-container, .gu-search__toggle"
      ).length
    ) {
      $(".gu-header_search-container").removeClass("search-visible");
      $(".gu-search-backdrop").remove();
    }
  });
});

//fsi template specific handling of search
$(document).ready(function () {
	if(!document.body.classList.contains("fsi-guides-topic-page")) {
		return;
	}
  $(".gu-search__toggle").click(function () {
    $(".gu-header_search-container").toggleClass("search-visible");

    if ($(window).width() < 768) {
      // Adjust breakpoint as needed

      if ($(".gu-header_search-container").hasClass("search-visible")) {
        $("body").append('<div class="gu-search-backdrop"></div>');
      } else {
        $(".gu-search-backdrop").remove();
      }
    }
  });

  // Remove backdrop when clicking outside

  $(document).on("click", ".gu-search-backdrop", function () {
    $(".gu-header_search-container").removeClass("search-visible");

    $(this).remove();
  });
});

/* manufacturing template specific handling */

$(document).ready(function () {
	if(!document.body.classList.contains("manufacturing-guides-topic-page")) {
		return;
	}
  $(".gu-search__toggle").click(function () {
    $(".gu-header_search-container").toggleClass("search-visible");

    if ($(window).width() < 768) {
      // Adjust breakpoint as needed

      if ($(".gu-header_search-container").hasClass("search-visible")) {
        $("body").append('<div class="gu-search-backdrop"></div>');
      } else {
        $(".gu-search-backdrop").remove();
      }
    }
  });

  // Remove backdrop when clicking outside

  $(document).on("click", ".gu-search-backdrop", function () {
    $(".gu-header_search-container").removeClass("search-visible");

    $(this).remove();
  });
});
