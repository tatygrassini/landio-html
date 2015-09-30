(function ($) {
  "use strict";

  // Bootstrap JS
  // @codekit-prepend "bootstrap/util.js";
  // @codekit-prepend "bootstrap/alert.js";
  // @codekit-prepend "bootstrap/button.js";
  // @codekit-prepend "bootstrap/carousel.js";
  // @codekit-prepend "bootstrap/collapse.js";
  // @codekit-prepend "bootstrap/dropdown.js";
  // @codekit-prepend "bootstrap/modal.js";
  // @codekit-prepend "bootstrap/scrollspy.js";
  // @codekit-prepend "bootstrap/tab.js";
  // @codekit-prepend "bootstrap/tooltip.js";
  // @codekit-prepend "bootstrap/popover.js";

  // Video JS
  // @codekit-prepend "plugins/video.js";

  function navMobileCollapse() {
    // avoid having both mobile navs opened at the same time
    $('#collapsingMobileUser').on('show.bs.collapse', function () {
      $('#collapsingNavbar').removeClass('in');
      $('[data-target="#collapsingNavbar"]').attr('aria-expanded', 'false');
    });
    $('#collapsingNavbar').on('show.bs.collapse', function () {
      $('#collapsingMobileUser').removeClass('in');
      $('[data-target="#collapsingMobileUser"]').attr('aria-expanded', 'false');
    });
  }

  function navSearch() {
    // hide first nav items when search is opened
    $('#searchDropdown').on('show.bs.dropdown', function () {
      $('.navbar-nav .nav-item, .navbar-nav .navbar-divider').not('.navbar-nav .dropdown').addClass('sr-only');
    });
    // cursor focus
    $('#searchDropdown').on('shown.bs.dropdown', function () {
      $('#navbar-search-input').focus();
    });
    // show all nav items when search is closed
    $('#searchDropdown').on('hide.bs.dropdown', function () {
      $('.navbar-nav .nav-item, .navbar-nav .navbar-divider').removeClass('sr-only');
    });
  }

  function htmlVideo() {
    videojs("my_video_1", {
        controlBar: {
          timeDivider: false,
          fullscreenToggle: false,
          playToggle: false,
          remainingTimeDisplay: false
        },
        "height": "auto",
        "width": "auto"
    }).ready(function() {
        var myPlayer = this;
        var aspectRatio = 5 / 12; // aspect ratio 12:5 (960x400)
        function resizeVideoJS() {
            var width = document.getElementById(myPlayer.id()).parentElement.offsetWidth;
            myPlayer.width(width).height(width * aspectRatio);
        }
        resizeVideoJS();
        window.onresize = resizeVideoJS;
    });
  }

  function init() {
    navMobileCollapse();
    navSearch();
    htmlVideo();
  }

  init();

})(jQuery);