$(document).ready(function() {
  // Navigation
  $(window).bind('load scroll', function(){
     var y = $(window).scrollTop();
     var h = window.innerHeight;
     if (y <= h) {
       $('#lt-navigation nav').addClass('lt-no-background');
       $('.brand-logo').css({'opacity' : '0'});
     } else if (y > h) {
       $('#lt-navigation nav').removeClass('lt-no-background');
       $('.brand-logo').css({'opacity' : '1'});
     }
  });
  $('.lt-mobile-toggle').sideNav();

  // Slider
  $('.lt-slider').slider({full_width: true});
  $(window).resize(function() {
      $('.lt-slider').height($(window).height() + 15).css('position', 'relative');
  });
  $(window).trigger('resize');

  // Parallax
  $('.lt-parallax').parallax();

  // Tabs
  $('.lt-tabs').tabs();

  // Modal
  $('.lt-modal-trigger').leanModal();

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
      loop:true,
      items: 1,
      center: true
  })

  // Select
  $('select').material_select();

  // DatePicker
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15
  });

});
