GitHubActivity.feed({
	username: "jesseokeya",
	repository: "",  optional
	selector: "#feed",
	limit: 10  optional
});

function initMap() {
  const pos = {
    lat: 45.365932799999996,
    lng: -75.7043425
  };
  const map = new google.maps.Map(document.getElementById('viewMap'), {
    zoom: 11,
    center: pos
  });
  const marker = new google.maps.Marker({position: pos, map: map});
};

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({target: '#sideNav'});

})(jQuery); // End of use strict
