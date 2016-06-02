var options = {
	offset: 800
}
var header = new Headhesive('.head', options);
$(document).ready(function(){

	$('.publication_slider').owlCarousel({
		center: true,
		items:3,
		loop:true,
		margin:189,
		//autoplay:true,
    	//autoplayTimeout:3000,
    	nav:true,
		responsive:{
			600:{
				items:1
			}
		}
	});
	$('.slider_review').owlCarousel({
		center: true,
		items:3,
		loop:true,
		margin:189,
		//autoplay:true,
    	//autoplayTimeout:3000,
    	nav:true,
		responsive:{
			600:{
				items:1
			}
		}
	});
	$('.slider_photo').owlCarousel({
		center: true,
		items:2,
		loop:true,
		margin:88,
		//autoplay:true,
    	//autoplayTimeout:3000,
    	nav:true,
		responsive:{
			600:{
				items:4
			}
		}
	});
	$(".link").fancybox({
		'scrolling' : 'no',
		'titleShow' : false,
		'padding'   : 45,
		'maxWidth'  : 256,
		'onClosed'  : function() {
			//$(".order").hide();
		}
	});
});