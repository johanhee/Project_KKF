console.log("loaded");
$(function(){
	var mainTotal, mainCurrent;

	var mainSwiper = new Swiper(".mainSwiper", {
		speed: 1200,
        effect: true,
		/*
        autoplay: {
        	delay: 5000
        },
		*/

		on: {
			init: function(){
				mainTotal=this.slides.length-2;
				mainCurrent=this.activeIndex;
				$(".main_slider .account .current").text(mainCurrent);
				$(".main_slider .account .total").text(mainTotal);

				setTimeout(function(){
					// $(".main_slider .swiper-slide-active .text_box").addClass("active");
					sliderActiveEffect();
				}, 1000);
			},
			slideChange: function(){
				if(this.activeIndex <= mainTotal){
					mainCurrent=this.activeIndex;

					if(this.activeIndex == 0){
						mainCurrent=mainTotal;
					}
				}
				else {
					mainCurrent=1;
				}
				$(".main_slider .account .current").text(mainCurrent);
				$(".main_slider .text_box").removeClass("active");

				setTimeout(function(){
					// $(".main_slider .swiper-slide-active .text_box").addClass("active");
					sliderActiveEffect();
				}, 1000);
			}
		},
		pagination: {
		  el: ".mainSwiper .swiper-pagination",
		  clickable: true
		},
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

	$(".tabs li").eq(1).addClass("active");
	$(".tabs li").click(function(e){
		e.preventDefault();
		$(".tabs li").removeClass("active");
		$(this).addClass("active");
	});

	$(".tabs li").eq(1).addClass("active");
	$(".tabs li").click(function(e){
		e.preventDefault();
		$(".tabs li").removeClass("active");
		$(this).addClass("active");
	});
});