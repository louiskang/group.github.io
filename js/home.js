// Grayscale (https://startbootstrap.com/theme/grayscale)
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 100,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").removeClass("navbar-expanded");
    } else {
      $("#mainNav").addClass("navbar-expanded");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict


// Toggle text on click
$('.toggle-hide').removeClass('.toggle-hide').hide();
$('.toggle-text').click(function() {
  $(this).find('span').each(function() {
    $(this).toggle();
  });
});

// Copy to clipboard tooltip
$('.btn-copy').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip(btn) {
  setTimeout(function() {
    $(btn).tooltip('hide');
  }, 1000);
}

// Copy to clipboard
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
  setTooltip(e.trigger, 'Copied to clipboard');
  hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
  setTooltip(e.trigger, 'Copy failed');
  hideTooltip(e.trigger);
});

// Initialize carousel
$('#newsCarousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

$('.research-section .project').on({
  click: function() {
    $(this).parent().parent().find('.icon').trigger('click');
  },
  mouseenter: function() {
    $(this).parent().parent().find('.icon').addClass('hover');
  },
  mouseleave: function() {
    $(this).parent().parent().find('.icon').removeClass('hover');
  }
}, '.content');
