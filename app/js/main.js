$(function(){

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="arrow-right">',
		asNavFor: '.slider-dots',
	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	});

});