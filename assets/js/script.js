$(document).ready(function() {

  // Sticky Navigation
  $("#features").waypoint(function(direction) {
    if (direction === "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  }, {
    offset: '60px'
  });

  // Navigation and button scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 1000);
          return false;
        }
      }
    });
  });

  // Scroll animations
  $(".js-wp-1").waypoint(function(direction) {
    $(".js-wp-1").addClass("animated fadeIn");
  }, {
    offset: '50%'
  });

  $(".js-wp-2").waypoint(function(direction) {
    $(".js-wp-2").addClass("animated fadeInUp");
  }, {
    offset: '50%'
  });

  $(".js-wp-3").waypoint(function(direction) {
    $(".js-wp-3").addClass("animated fadeIn");
  }, {
    offset: '50%'
  });

  $(".js-wp-4").waypoint(function(direction) {
    $(".js-wp-4").addClass("animated pulse");
  }, {
    offset: '50%'
  });

  // Mobile navigation
  $(".mobile-nav-icon").click(function() {
    let nav = $(".main-nav");
    let icon = $(".mobile-nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("fa-bars")) {
      icon.removeClass("fa-bars");
      icon.addClass("fa-times");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });

});
