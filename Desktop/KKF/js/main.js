$(function(){
	$(".gnb > ul > li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	$(".gnb  > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$(".gnb li li:last-child a").focusout(function(){
		$(this).parents(".submenu").parent("li").removeClass("active");
	});

	var mainTotal, mainCurrent; 

	var mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
		},
		on: {
			init: function(){
				mainTotal=this.slides.length;
				mainCurrent=this.activeIndex+1;
				$(".main_slider .account .current").text(mainCurrent);
				$(".main_slider .account .total").text(mainTotal);

				setTimeout(function(){
					sliderActiveEffect();
				}, 1000);	
			},
			slideChange: function(){
				mainCurrent=this.activeIndex+1;
				$(".main_slider .account .current").text(mainCurrent);
				$(".main_slider .account .total").text(mainTotal);
				
				$(".main_slider .text_box").removeClass("active");

				setTimeout(function(){
					sliderActiveEffect();
				}, 1000);	
			}
		}
	});

	function sliderActiveEffect(){
		$(".main_slider .swiper-slide").each(function(i){
			if($(this).hasClass("swiper-slide-active")){
				$(this).find(".text_box span").animate({opacity: 1, marginTop: 0}, 600);
				$(this).find(".text_box p").delay(500).animate({opacity: 1, marginTop: 0}, 600);
				$(this).find(".text_box a").delay(1000).animate({opacity: 1, marginTop: 0}, 600);
			}
			else{
				$(this).find(".text_box span").removeAttr("style");
				$(this).find(".text_box p").removeAttr("style");
				$(this).find(".text_box a").removeAttr("style");
			}
		});
	}
});