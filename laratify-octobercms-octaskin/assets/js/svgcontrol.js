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