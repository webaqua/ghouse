//PRELOADER

$(window).on('load', function() {
 preloader_func();

	setTimeout(function() {
 }, 2000);

 function preloader_func(){
		 var s = Snap('#preloader_svg');
		 var srose = s.select('#preloader_svg_path');
	 var pathLength = srose.getTotalLength();
		 srose.attr({
				 'stroke-dasharray': '' + pathLength + ' 0'
		 });
		 Snap.animate(0, pathLength, function(t){
				 srose.attr({'stroke-dasharray': '' + t + ' ' + (pathLength - t)});
		 }, 7000);
 }

 setTimeout(function() {
	 $('#preloader').fadeOut('slow', function() {});
 }, 3000);

});




$(document).ready(function(){


    if(window.location.href != 'http://ghouse.kz/' && window.location.href != 'http://ghouse.kz/index.html' && window.location.href != 'http://www.ghouse.kz/index.html' && window.location.href != 'http://www.ghouse.kz/'){

      $(".main").onepage_scroll({
         sectionContainer: "article",
         easing: "ease",

         animationTime: 1000,
         pagination: false,
         updateURL: false,
         beforeMove: function(index) {},
         afterMove: function(index) {
           if ($('.container.section.active').data('index') == 5){
                $('.navigation').css({'visibility':'hidden'});
                $('.navigation').css({'opacity':'0'});
              }
             else{
                $('.navigation').css({'visibility':'visible'})
                $('.navigation').css({'opacity':'1'});;
             }
             if ($('.container.section.active').data('index') == 2){
               $('.modal_div').css({'opacity':'1'});

               var eTop = $('#svg_null_line').offset().top;
               var eLeft = $('#svg_null_line').offset().left;
               $("#modal_div_1").offset({ top: eTop-eTop*0.2, left: eLeft-pWidth-15});

               var eTop = $('#svg_first_line').offset().top;
               var eLeft = $('#svg_first_line').offset().left;
               $("#modal_div_2").offset({ top: eTop-eTop*0.16, left: eLeft-pWidth-15});

               var eTop = $('#svg_third_line').offset().top;
               var eLeft = $('#svg_third_line').offset().left;
               $("#modal_div_3").offset({ top: eTop-eTop*0.01, left: eLeft-pWidth-15});

               var eTop = $('#svg_sixth_line').offset().top;
               var eLeft = $('#svg_sixth_line').offset().left;
               $("#modal_div_4").offset({ top: eTop+eTop*0.01, left: eLeft-pWidth-15});

               var eTop = $('#svg_eighth_line').offset().top;
               var eLeft = $('#svg_eighth_line').offset().left;
               $("#modal_div_5").offset({ top: eTop+eTop*0.01, left: eLeft+pWidth/4});

               var eTop = $('#svg_seventh_line').offset().top;
               var eLeft = $('#svg_seventh_line').offset().left;
               $("#modal_div_6").offset({ top: eTop-eTop*0.02, left: eLeft+pWidth/4});

               var eTop = $('#svg_fifth_line').offset().top;
               var eLeft = $('#svg_fifth_line').offset().left;
               $("#modal_div_7").offset({ top: eTop-eTop*0.09, left: eLeft+pWidth/4});

               var eTop = $('#svg_second_line').offset().top;
               var eLeft = $('#svg_second_line').offset().left;
               $("#modal_div_8").offset({ top: eTop-eTop*0.18, left: eLeft+pWidth/4});}
         },
         loop: false,
         keyboard: true,
         responsiveFallback: 4000,


         direction: "vertical"
      });

    } else{

      $(".main").onepage_scroll({
         sectionContainer: "article",
         easing: "ease",

         animationTime: 1000,
         pagination: false,
         updateURL: false,
         beforeMove: function(index) {},
         afterMove: function(index) {
           if ($('.container.section.active').data('index') == 5){
                $('.navigation').css({'visibility':'hidden'});
                $('.navigation').css({'opacity':'0'});
              }
             else{
                $('.navigation').css({'visibility':'visible'})
                $('.navigation').css({'opacity':'1'});;
             }
             if ($('.container.section.active').data('index') == 2){
               $('.modal_div').css({'opacity':'1'});

               var eTop = $('#svg_null_line').offset().top;
               var eLeft = $('#svg_null_line').offset().left;
               $("#modal_div_1").offset({ top: eTop-eTop*0.2, left: eLeft-pWidth-15});

               var eTop = $('#svg_first_line').offset().top;
               var eLeft = $('#svg_first_line').offset().left;
               $("#modal_div_2").offset({ top: eTop-eTop*0.16, left: eLeft-pWidth-15});

               var eTop = $('#svg_third_line').offset().top;
               var eLeft = $('#svg_third_line').offset().left;
               $("#modal_div_3").offset({ top: eTop-eTop*0.01, left: eLeft-pWidth-15});

               var eTop = $('#svg_sixth_line').offset().top;
               var eLeft = $('#svg_sixth_line').offset().left;
               $("#modal_div_4").offset({ top: eTop+eTop*0.01, left: eLeft-pWidth-15});

               var eTop = $('#svg_eighth_line').offset().top;
               var eLeft = $('#svg_eighth_line').offset().left;
               $("#modal_div_5").offset({ top: eTop+eTop*0.01, left: eLeft+pWidth/4});

               var eTop = $('#svg_seventh_line').offset().top;
               var eLeft = $('#svg_seventh_line').offset().left;
               $("#modal_div_6").offset({ top: eTop-eTop*0.02, left: eLeft+pWidth/4});

               var eTop = $('#svg_fifth_line').offset().top;
               var eLeft = $('#svg_fifth_line').offset().left;
               $("#modal_div_7").offset({ top: eTop-eTop*0.09, left: eLeft+pWidth/4});

               var eTop = $('#svg_second_line').offset().top;
               var eLeft = $('#svg_second_line').offset().left;
               $("#modal_div_8").offset({ top: eTop-eTop*0.18, left: eLeft+pWidth/4});}
         },
         loop: false,
         keyboard: true,
         responsiveFallback: 800,


         direction: "vertical"
      });

    }




	$(".js-vertical-tab-content").hide();
	$(".js-vertical-tab-content:first").show();

	/* if in tab mode */

	$(".js-vertical-tab").mouseover(function(event) {
	event.preventDefault();

	$(".js-vertical-tab-content").hide();
	var activeTab = $(this).attr("rel");
	$("#"+activeTab).show();

	$(".js-vertical-tab").removeClass("is-active");
	$(this).addClass("is-active");

	$(".js-vertical-tab-accordion-heading").removeClass("is-active");
	$(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");


  $('.forvidos').addClass('backblur');
	});

  $(".js-vertical-tab").mouseleave(function(event) {
	event.preventDefault();
  $('.forvidos').removeClass('backblur');
	});

	/* if in accordion mode */

	$(".js-vertical-tab-accordion-heading").click(function(event) {
	event.preventDefault();

	$(".js-vertical-tab-content").hide();
	var accordion_activeTab = $(this).attr("rel");
	$("#"+accordion_activeTab).show();

	$(".js-vertical-tab-accordion-heading").removeClass("is-active");
	$(this).addClass("is-active");

	$(".js-vertical-tab").removeClass("is-active");
	$(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
	});


	$(window).resize(function() {
		var more = document.getElementById("js-navigation-more");
		if ($(more).length > 0) {
			var windowWidth = $(window).width();
			var moreLeftSideToPageLeftSide = $(more).offset().left;
			var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

			if (moreLeftSideToPageRightSide < 330) {
				$("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
				$("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
			}

			if (moreLeftSideToPageRightSide > 330) {
				$("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
				$("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
			}
		}
	});

	$(document).ready(function() {
		var menuToggle = $("#js-mobile-menu").unbind();
		$("#js-navigation-menu").removeClass("show");

		menuToggle.on("click", function(e) {
			e.preventDefault();
			$("#js-navigation-menu").slideToggle(function(){
				if($("#js-navigation-menu").is(":hidden")) {
					$("#js-navigation-menu").removeAttr("style");
				}
			});
		});
	});


	$(function() {
		$("#modal-1").on("change", function() {
			if ($(this).is(":checked")) {
				$("body").addClass("modal-open");
			} else {
				$("body").removeClass("modal-open");
			}
		});

		$(".modal-fade-screen, .modal-close").on("click", function() {
			$(".modal-state:checked").prop("checked", false).change();
		});

		$(".modal-inner").on("click", function(e) {
			e.stopPropagation();
		});
	});


	//Diamonds script

	$('#svg_null').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_1').find('h').css({'color' : 'red'});
	 });

	 $('#svg_null').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_1').find('h').css({'color' : '#02a902'});
	 });

	 $('#svg_second').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_8').find('h').css({'color' : 'red'});
	 });

	 $('#svg_second').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_8').find('h').css({'color' : '#02a902'});
	 });

	 $('#svg_seventh').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_6').find('h').css({'color' : 'red'});
	 });

	 $('#svg_seventh').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_6').find('h').css({'color' : '#02a902'});
	 });

	 $('#svg_eighth').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_5').find('h').css({'color' : 'red'});
	 });

	 $('#svg_eighth').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_5').find('h').css({'color' : '#02a902'});
	 });

	 $('#svg_sixth').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_4').find('h').css({'color' : 'red'});
	 });

	 $('#svg_sixth').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_4').find('h').css({'color' : '#02a902'});
	 });

	 $('#svg_first').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_2').find('h').css({'color' : 'red'});
	 });

	 $('#svg_first').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_2').find('h').css({'color' : '#02a902'});
	 });

	 $('#svg_third').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_3').find('h').css({'color' : 'red'});
	 });

	 $('#svg_third').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_3').find('h').css({'color' : '#02a902'});
	 });

	 $('#svg_fifth').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_7').find('h').css({'color' : 'red'});
	 });

	 $('#svg_fifth').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_7').find('h').css({'color' : '#02a902'});
	 });

	 function moversvg(e){
			 if ($('#'+e).hasClass("non_active_svg")){
					$('#'+e).removeClass('non_active_svg').addClass('active_svg');
					 var s = Snap('#'+e);
				 var srose = s.select('#'+e+"_item");
				 var pathLength = srose.getTotalLength();
					 srose.attr({
							 'stroke-dasharray': '' + pathLength + ' 0'
					 });
					 Snap.animate(0, pathLength, function(t){
							 srose.attr({'stroke-dasharray': '' + t + ' ' + (pathLength - t)});
					 }, 2000);
					 $('#'+e+"_line").css({"fill":"red"});
					 $('#'+e+"_circle").css({"fill":"red"});
			 }
	 }

	 function mleavesvg(e){
			$('#'+e).removeClass('active_svg').addClass('non_active_svg');
			$('#'+e+"_line").css({"fill":"white"});
			$('#'+e+"_circle").css({"fill":"white"});
	 }

	 $('#cooperation_seventh_svg').mouseover(function(){
			 mouse_over_coop(7);
			 var e = $(this).attr('id');
			 moversvg_2(e);
	 });

	 $('#cooperation_seventh_svg').mouseleave(function(){
			 var e = $(this).attr('id');
			 mleavesvg_2(e);
	 });

	 $('#cooperation_fourth_svg').mouseover(function(){
			 mouse_over_coop(4);
			 var e = $(this).attr('id');
			 moversvg_2(e);
	 });

	 $('#cooperation_fourth_svg').mouseleave(function(){
			 var e = $(this).attr('id');
			 mleavesvg_2(e);
	 });

	 $('#cooperation_first_svg').mouseover(function(){
			 mouse_over_coop(1);
			 var e = $(this).attr('id');
			 moversvg_2(e);
	 });

	 $('#cooperation_first_svg').mouseleave(function(){
			 var e = $(this).attr('id');
			 mleavesvg_2(e);
	 });

	 $('#cooperation_eighth_svg').mouseover(function(){
			 mouse_over_coop(8);
			 var e = $(this).attr('id');
			 moversvg_2(e);
	 });

	 $('#cooperation_eighth_svg').mouseleave(function(){
			 var e = $(this).attr('id');
			 mleavesvg_2(e);
	 });

	 $('#cooperation_fifth_svg').mouseover(function(){
			 mouse_over_coop(5);
			 var e = $(this).attr('id');
			 moversvg_2(e);
	 });

	 $('#cooperation_fifth_svg').mouseleave(function(){
			 var e = $(this).attr('id');
			 mleavesvg_2(e);
	 });

		$('#cooperation_second_svg').mouseover(function(){
			 mouse_over_coop(2);
			 var e = $(this).attr('id');
			 moversvg_2(e);
	 });

	 $('#cooperation_second_svg').mouseleave(function(){
			 var e = $(this).attr('id');
			 mleavesvg_2(e);
	 });

		$('#cooperation_third_svg').mouseover(function(){
			 mouse_over_coop(3);
			 var e = $(this).attr('id');
			 moversvg_2(e);
	 });

	 $('#cooperation_third_svg').mouseleave(function(){
			 var e = $(this).attr('id');
			 mleavesvg_2(e);
	 });

	 $('#cooperation_sixth_svg').mouseover(function(){
			 mouse_over_coop(6);
			 var e = $(this).attr('id');
			 moversvg_2(e);
	 });

	 $('#cooperation_sixth_svg').mouseleave(function(){
			 var e = $(this).attr('id');
			 mleavesvg_2(e);
	 });

	 function mouse_over_coop(e_id){
			 for (i = 1; i<=8; i++){
					 $("#coop_slide_"+i).removeClass("coop_slide_active").addClass("coop_slide_not_active");
			 }
			 $("#coop_slide_"+e_id).removeClass("coop_slide_not_active").addClass("coop_slide_active");
	 }

	 function moversvg_2(e){
								if ($('#'+e).hasClass("non_active_svg")){
									 $('#'+e).removeClass('non_active_svg').addClass('active_svg');
										var s = Snap('#'+e);
											var srose = s.select('.'+e+"_path");
											var pathLength = srose.getTotalLength();
												srose.attr({
														'stroke-dasharray': '' + pathLength + ' 0'
												});
												Snap.animate(0, pathLength, function(t){
														srose.attr({'stroke-dasharray': '' + t + ' ' + (pathLength - t)});
												}, 2000);
								}

								var et = e.replace('_svg','');
							 $('#'+et).children().find('h').css({'color' : 'white'});
		}

		function mleavesvg_2(e){
							 $('#'+e).removeClass('active_svg').addClass('non_active_svg');

								var et = e.replace('_svg','');
							 $('#'+et).children().find('h').css({'color' : 'green'});
		}


    function gallery_func(e){
      var gal_id = e.find('.diamond_img_content').attr('id');
      gal_id = gal_id.replace('diamond_img_content_','');
      console.log(gal_id);
      setGallery(gal_id);

    }

    function mobile_gallery_func(e){
      var gal_id = e.attr('id');
      console.log(gal_id);
      gal_id = gal_id.replace('diamond_img_content_','');
      setGallery(gal_id);

    }

    $('.sub-img-content').click(function(){
      mobile_gallery_func($(this));

   				$('.gallery_wrapper_background').css({'visibility':'visible'});
           $('.gallery_wrapper').css({'visibility':'visible'});
    })

    var

        gal_array_1 = new Array('techs_img (1).jpg','techs_img (2).jpg','techs_img (3).jpg','techs_img (4).jpg', 'techs_img (5).jpg', 'techs_img (6).jpg', 'techs_img (7).jpg', 'techs_img (8).jpg', 'techs_img (9).jpg', 'techs_img (10).jpg');
        gal_array_2 = new Array('staff_img (1).jpg','staff_img (2).jpg','staff_img (3).jpg','staff_img (4).jpg', 'staff_img (5).jpg', 'staff_img (6).jpg', 'staff_img (7).jpg', 'staff_img (8).jpg', 'staff_img (9).jpg', 'staff_img (10).jpg');
        gal_array_3 = new Array('roses_img (1).jpg','roses_img (2).jpg','roses_img (3).jpg','roses_img (4).jpg', 'roses_img (5).jpg', 'roses_img (6).jpg', 'roses_img (7).jpg', 'roses_img (8).jpg', 'roses_img (9).jpg', 'roses_img (10).jpg');
        gal_array_4 = new Array('ghouse_img (1).jpg','ghouse_img (2).jpg','ghouse_img (3).jpg','ghouse_img (4).jpg', 'ghouse_img (5).jpg', 'ghouse_img (6).jpg', 'ghouse_img (7).jpg', 'ghouse_img (8).jpg', 'ghouse_img (9).jpg', 'ghouse_img (10).jpg');
        gal_array_5 = new Array('pack_img (1).jpg','pack_img (2).jpg','pack_img (3).jpg','pack_img (4).jpg', 'pack_img (5).jpg', 'pack_img (6).jpg', 'pack_img (7).jpg', 'pack_img (8).jpg', 'pack_img (9).jpg', 'pack_img (10).jpg');

        $('.diamond_gallery').click(function(){
    			 var back_img = $(this).find('.diamond_img_content').css('background-image');
    			 $('#diamond_img_content_3').css('background-image',back_img);
           gallery_func($(this));
    	 });

    function setGallery(gal_id){
      if(gal_id == 1){
        for (var i = 1; i <= 10; i++){
          $('#limg_'+i).attr('src', 'img/'+gal_array_1[i-1]);
        }
      }
      if(gal_id == 2){
        for (var i = 1; i <= 10; i++){
          $('#limg_'+i).attr('src', 'img/'+gal_array_2[i-1]);
        }
      }
      if(gal_id == 4){
        for (var i = 1; i <= 10; i++){
          $('#limg_'+i).attr('src', 'img/'+gal_array_3[i-1]);
        }
      }
      if(gal_id == 6){
        for (var i = 1; i <= 10; i++){
          $('#limg_'+i).attr('src', 'img/'+gal_array_4[i-1]);
        }
      }
      if(gal_id == 7){
        for (var i = 1; i <= 10; i++){
          $('#limg_'+i).attr('src', 'img/'+gal_array_5[i-1]);
        }
      }

    }

	 $('#diamond_img_content_3').click(function(){
				$('.gallery_wrapper_background').css({'visibility':'visible'});
        $('.gallery_wrapper').css({'visibility':'visible'});
	 });

   $('.gallery_wrapper_background').click(function(){
				$('.gallery_wrapper_background').css({'visibility':'hidden'});
        $('.gallery_wrapper').css({'visibility':'hidden'});
	 });



   //Text positioning script

   var pWidth = $('.modal_div').width();


   window.setInterval(function(){



        }, 1000);

    //Modal_video script

    $('ul.navigation-menu li:last-child').click(function(){
 				$('.modal_video_wrapper').css({'visibility':'visible'});
        $('.modal_video_wrapper').css({'opacity':'1'});
 	 });

   $('.modal_video_wrapper').click(function(e){
     e.preventDefault;
       $('.modal_video_wrapper').css({'visibility':'hidden'});
       $('.modal_video_wrapper').css({'opacity':'0'});
  });

    //Modal contact form

    var keys = {
       37: 1,
       38: 1,
       39: 1,
       40: 1
   };

   function preventDefault(e) {
       e = e || window.event;
       if (e.preventDefault)
           e.preventDefault();
       e.returnValue = false;
   }

   function preventDefaultForScrollKeys(e) {
       if (keys[e.keyCode]) {
           preventDefault(e);
           return false;
       }
   }

   function disableScroll() {
       if (window.addEventListener) // older FF
           window.addEventListener('DOMMouseScroll', preventDefault, false);
       window.onwheel = preventDefault; // modern standard
       window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
       window.ontouchmove = preventDefault; // mobile
       document.onkeydown = preventDefaultForScrollKeys;
   }

   function enableScroll() {
       if (window.removeEventListener)
           window.removeEventListener('DOMMouseScroll', preventDefault, false);
       window.onmousewheel = document.onmousewheel = null;
       window.onwheel = null;
       window.ontouchmove = null;
       document.onkeydown = null;
   }

   function openNav() {
       $(document).scrollTop( $("#video").offset().top );
       document.getElementById("myNav").style.width = "100%";
       disableScroll();
       $('body').addClass('stop-scrolling');
   }

   /* Close when someone clicks on the "x" symbol inside the overlay */
   function closeNav() {
       document.getElementById("myNav").style.width = "0%";
       enableScroll();
       $('body').removeClass('stop-scrolling');
   }

   $("#licontact").click(function() {
     openNav();
   });

   $("#closebtn").click(function() {
     closeNav();
   });



    //Gallery script

});
  //Gallery script
  $(document).ready(function() {


  var $firstSlide = $('.carousel li').first(),
    $lastSlide = $('.carousel li').last(),
    $slideWidth = $('.carousel-container').width(),
    $numOfSlides = $('.carousel li').length;
  $('.carousel li').each(function(index) {
    $this = $(this);
    $this.addClass('slide-' + index);
  });

  function slideResize() {
    $slideWidth = $('.carousel-container').width();
    $('.carousel li').css('width', $slideWidth);
    $('.arrow').css('height', '100%');
  }
  slideResize();

  $firstSlide.addClass('active');
  $lastSlide.insertBefore($firstSlide);

  $('.carousel').css('margin-left', '-100%');

  $(window).on('resize', slideResize);

  function nextSlide(interval, iterations) {
    var howMany = 0;

    function goNext() {
      $firstSlide = $('.carousel li').first();
      $lastSlide = $('.carousel li').last();

      slideResize();
      $('.arrow').hide();
      $firstSlide.animate({
        width: "0"
      }, interval, function() {

        $firstSlide.insertAfter($lastSlide);
        $firstSlide.css('width', $slideWidth);

        $('.carousel li.active').next('li').addClass('active');
        $('.carousel li.active').first().removeClass('active');
        howMany++;
        if (howMany < iterations) {
          goNext();
        } else {
        $('.arrow').show();
        }
      });
    }
    goNext();
  }

  function prevSlide(interval, iterations) {
    var howMany = 0;

    function goPrev() {
      $firstSlide = $('.carousel li').first();
      $lastSlide = $('.carousel li').last();

      slideResize();
      $('.arrow').hide();
      var $prevSlide = $('.active').prev();
      $lastSlide.css('width', '0');
      $lastSlide.insertBefore($firstSlide);
      $lastSlide.animate({
        width: $slideWidth
      }, interval, function() {
        $('.carousel li.active').prev('li').addClass('active');
        $('.carousel li.active').last().removeClass('active');


        howMany++;
        if (howMany < iterations) {
          goPrev();
        } else {
        $('.arrow').show();
        }
      });
    }
    goPrev();
  }
    $('.carousel-container').on('swipeleft', function() {
      if ($('li:animated').length === 0) {
    nextSlide(1000);
      } else {
        return;
      }
  });

  $('.carousel-container').on('swiperight', function() {
    if ($('li:animated').length === 0) {
    prevSlide(1000);
    } else {
      return;
    }
  });

  $('.right-arrow').on('click', function() {
    nextSlide(1000);
  });

  $('.left-arrow').on('click', function() {
    prevSlide(1000);
  });

});
$(document).ready(function() {


  var $firstSlide = $('.carousel2 li').first(),
    $lastSlide = $('.carousel2 li').last(),
    $slideWidth = $('.carousel-container2').width(),
    $numOfSlides = $('.carousel2 li').length;
  $('.carousel2 li').each(function(index) {
    $this = $(this);
    $this.addClass('slide-' + index);
  });

  function slideResize() {
    $slideWidth = $('.carousel-container2').width();
    $('.carousel2 li').css('width', $slideWidth);
    $('.arrow2').css('height', '100%');
  }
  slideResize();

  $firstSlide.addClass('active');
  $lastSlide.insertBefore($firstSlide);

  $('.carousel2').css('margin-left', '-100%');

  $(window).on('resize', slideResize);

  function nextSlide(interval, iterations) {
    var howMany = 0;

    function goNext() {
      $firstSlide = $('.carousel2 li').first();
      $lastSlide = $('.carousel2 li').last();

      slideResize();
      $('.arrow2').hide();
      $firstSlide.animate({
        width: "0"
      }, interval, function() {

        $firstSlide.insertAfter($lastSlide);
        $firstSlide.css('width', $slideWidth);

        $('.carousel2 li.active').next('li').addClass('active');
        $('.carousel2 li.active').first().removeClass('active');
        howMany++;
        if (howMany < iterations) {
          goNext();
        } else {
        $('.arrow2').show();
        }
      });
    }
    goNext();
  }

  function prevSlide(interval, iterations) {
    var howMany = 0;

    function goPrev() {
      $firstSlide = $('.carousel2 li').first();
      $lastSlide = $('.carousel2 li').last();

      slideResize();
      $('.arrow2').hide();
      var $prevSlide = $('.active').prev();
      $lastSlide.css('width', '0');
      $lastSlide.insertBefore($firstSlide);
      $lastSlide.animate({
        width: $slideWidth
      }, interval, function() {
        $('.carousel2 li.active').prev('li').addClass('active');
        $('.carousel2 li.active').last().removeClass('active');


        howMany++;
        if (howMany < iterations) {
          goPrev();
        } else {
        $('.arrow2').show();
        }
      });
    }
    goPrev();
  }
    $('.carousel-container2').on('swipeleft', function() {
      if ($('li:animated').length === 0) {
    nextSlide(1000);
      } else {
        return;
      }
  });

  $('.carousel-container2').on('swiperight', function() {
    if ($('li:animated').length === 0) {
    prevSlide(1000);
    } else {
      return;
    }
  });

  $('.right-arrow2').on('click', function() {
    nextSlide(1000);
  });

  $('.left-arrow').on('click', function() {
    prevSlide(1000);
  });

});
$(document).ready(function() {


  var $firstSlide = $('.carousel3 li').first(),
    $lastSlide = $('.carousel3 li').last(),
    $slideWidth = $('.carousel-container3').width(),
    $numOfSlides = $('.carousel3 li').length;
  $('.carousel3 li').each(function(index) {
    $this = $(this);
    $this.addClass('slide-' + index);
  });

  function slideResize() {
    $slideWidth = $('.carousel-container3').width();
    $('.carousel3 li').css('width', $slideWidth);
    $('.arrow3').css('height', '100%');
  }
  slideResize();

  $firstSlide.addClass('active');
  $lastSlide.insertBefore($firstSlide);

  $('.carousel3').css('margin-left', '-100%');

  $(window).on('resize', slideResize);

  function nextSlide(interval, iterations) {
    var howMany = 0;

    function goNext() {
      $firstSlide = $('.carousel3 li').first();
      $lastSlide = $('.carousel3 li').last();

      slideResize();
      $('.arrow3').hide();
      $firstSlide.animate({
        width: "0"
      }, interval, function() {

        $firstSlide.insertAfter($lastSlide);
        $firstSlide.css('width', $slideWidth);

        $('.carousel3 li.active').next('li').addClass('active');
        $('.carousel3 li.active').first().removeClass('active');
        howMany++;
        if (howMany < iterations) {
          goNext();
        } else {
        $('.arrow3').show();
        }
      });
    }
    goNext();
  }

  function prevSlide(interval, iterations) {
    var howMany = 0;

    function goPrev() {
      $firstSlide = $('.carousel3 li').first();
      $lastSlide = $('.carousel3 li').last();

      slideResize();
      $('.arrow3').hide();
      var $prevSlide = $('.active').prev();
      $lastSlide.css('width', '0');
      $lastSlide.insertBefore($firstSlide);
      $lastSlide.animate({
        width: $slideWidth
      }, interval, function() {
        $('.carousel3 li.active').prev('li').addClass('active');
        $('.carousel3 li.active').last().removeClass('active');


        howMany++;
        if (howMany < iterations) {
          goPrev();
        } else {
        $('.arrow3').show();
        }
      });
    }
    goPrev();
  }
    $('.carousel-container3').on('swipeleft', function() {
      if ($('li:animated').length === 0) {
    nextSlide(1000);
      } else {
        return;
      }
  });

  $('.carousel-container3').on('swiperight', function() {
    if ($('li:animated').length === 0) {
    prevSlide(1000);
    } else {
      return;
    }
  });

  $('.right-arrow3').on('click', function() {
    nextSlide(1000);
  });

  $('.left-arrow').on('click', function() {
    prevSlide(1000);
  });



});
