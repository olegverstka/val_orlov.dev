$(document).ready(function(){

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
	// $(".bxslider").bxSlider({
	//  minSlides : 5,
	//  maxSlides : 5,
	//  moveSlides: 1,
	//  slideWidth : 386
	// });

	// $(".bxreviews").bxSlider({
	//  minSlides : 3,
	//  maxSlides : 3,
	//  moveSlides: 1,
	//  slideWidth : 690
	// });
});