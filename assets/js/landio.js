//=require libs/bootstrap/popper.min.js
//=require libs/bootstrap/util.js
//=require libs/bootstrap/carousel.js
//=require libs/bootstrap/collapse.js
//=require libs/bootstrap/dropdown.js
//=require libs/bootstrap/modal.js
//=require libs/jquery.waypoints.min.js
//=require libs/video.js
//=require libs/jquery.vimeo.api.min.js
//=require libs/Chart.min.js

(function ($) {
  "use strict";


  function onScrollAnimations() {
    $('.wp-1').waypoint(function() {
      $('.wp-1').addClass('animated fadeInUp');
    }, {
      offset: '75%'
    });
    $('.wp-2').waypoint(function() {
      $('.wp-2').addClass('animated fadeInUp');
    }, {
      offset: '75%'
    });
    $('.wp-3').waypoint(function() {
      $('.wp-3').addClass('animated fadeInUp');
    }, {
      offset: '75%'
    });
    $('.wp-4').waypoint(function() {
      $('.wp-4').addClass('animated fadeIn');
    }, {
      offset: '75%'
    });
    $('.wp-5').waypoint(function() {
      $('.wp-5').addClass('animated fadeInRight');
    }, {
      offset: '50%'
    });
    $('.wp-6').waypoint(function() {
      $('.wp-6').addClass('animated fadeInLeft');
    }, {
      offset: '50%'
    });
    $('.wp-7').waypoint(function() {
      $('.wp-7').addClass('animated fadeInUp');
    }, {
      offset: '60%'
    });
    $('.wp-8').waypoint(function() {
      $('.wp-8').addClass('animated fadeInUp');
    }, {
      offset: '60%'
    });
  }


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
    // dark navbar
    $('#collapsingMobileUserInverse').on('show.bs.collapse', function () {
      $('#collapsingNavbarInverse').removeClass('in');
      $('[data-target="#collapsingNavbarInverse"]').attr('aria-expanded', 'false');
    });
    $('#collapsingNavbarInverse').on('show.bs.collapse', function () {
      $('#collapsingMobileUserInverse').removeClass('in');
      $('[data-target="#collapsingMobileUserInverse"]').attr('aria-expanded', 'false');
    });
  }


  function navSearch() {
    // hide first nav items when search is opened
    $('.nav-dropdown-search').on('show.bs.dropdown', function () {
      $(this).siblings().not('.navbar-nav .dropdown').addClass('sr-only');
    });
    // cursor focus
    $('.nav-dropdown-search').on('shown.bs.dropdown', function () {
      $('.navbar-search-input').focus();
    });
    // show all nav items when search is closed
    $('.nav-dropdown-search').on('hide.bs.dropdown', function () {
      $(this).siblings().removeClass('sr-only');
    });
  }


  function htmlVideo() {
    videojs("demo_video", {
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
      var aspectRatio = 5 / 12; // aspect ratio 12:5 (video frame 960x400)
      function resizeVideoJS() {
          var width = document.getElementById(myPlayer.id()).parentElement.offsetWidth;
          myPlayer.width(width).height(width * aspectRatio);
      }
      resizeVideoJS();
      window.onresize = resizeVideoJS;
    });
  }


  function scrollToTop() {
    $('.scroll-top').on( 'click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }


  function videoModal() {

    // VIMEO

    $('#videoModal').on('shown.bs.modal', function () {
      $("#vimeo-play").vimeo("play");
    });

    $('#videoModal').on('hidden.bs.modal', function () {
      $("#vimeo-play").vimeo("pause");
    });

    // YOUTUBE

    $('#youtube-trigger').click(function () {

      var videoSRC     = $(this).attr("data-video"),
          videoSRCauto = videoSRC + "?autoplay=1&html5=1&rel=0&showinfo=0";

      $('#youtubeModal').on('shown.bs.modal', function () {
        $('#youtube-play').attr('src', videoSRCauto);
      });

      $('#youtubeModal').on('hidden.bs.modal', function () {
        $('#youtube-play').attr('src', videoSRC);
      });

    });
  }


  function init() {
    onScrollAnimations();
    navMobileCollapse();
    navSearch();
    htmlVideo();
    scrollToTop();
    videoModal();
  }


  init();

})(jQuery);
