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

	$(".main").onepage_scroll({
		 sectionContainer: "article",
		 easing: "ease",

		 animationTime: 1000,
		 pagination: false,
		 updateURL: false,
		 beforeMove: function(index) {},
		 afterMove: function(index) {},
		 loop: false,
		 keyboard: true,
		 responsiveFallback: false,


		 direction: "vertical"
	});


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
			$('#modal_div_1').find('h').css({'color' : 'white'});
	 });

	 $('#svg_second').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_8').find('h').css({'color' : 'red'});
	 });

	 $('#svg_second').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_8').find('h').css({'color' : 'white'});
	 });

	 $('#svg_seventh').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_6').find('h').css({'color' : 'red'});
	 });

	 $('#svg_seventh').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_6').find('h').css({'color' : 'white'});
	 });

	 $('#svg_eighth').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_5').find('h').css({'color' : 'red'});
	 });

	 $('#svg_eighth').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_5').find('h').css({'color' : 'white'});
	 });

	 $('#svg_sixth').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_4').find('h').css({'color' : 'red'});
	 });

	 $('#svg_sixth').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_4').find('h').css({'color' : 'white'});
	 });

	 $('#svg_first').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_2').find('h').css({'color' : 'red'});
	 });

	 $('#svg_first').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_2').find('h').css({'color' : 'white'});
	 });

	 $('#svg_third').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_3').find('h').css({'color' : 'red'});
	 });

	 $('#svg_third').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_3').find('h').css({'color' : 'white'});
	 });

	 $('#svg_fifth').mouseover(function(){
			var e = $(this).attr('id');
			moversvg(e);
			$('#modal_div_7').find('h').css({'color' : 'red'});
	 });

	 $('#svg_fifth').mouseleave(function(){
			var e = $(this).attr('id');
			mleavesvg(e);
			$('#modal_div_7').find('h').css({'color' : 'white'});
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

		$('.diamond_gallery').click(function(){
			 var back_img = $(this).find('.diamond_img_content').css('background-image');
			 $('#diamond_img_content_3').css('background-image',back_img);
	 });

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
            $("#modal_div_8").offset({ top: eTop-eTop*0.18, left: eLeft+pWidth/4});

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

  var gallery
});
