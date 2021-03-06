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

	$('.surf-slider').slick({
		prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="arrow-right">',
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.map',

	});

	$('.map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
	});

	$('.shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="arrow-left">',
		nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="arrow-right">',
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	// CodePen Home input number custom style:

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.png" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/minus.png" alt="minus"></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
		var spinner = $(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	$('.quantity-button').on('click', function(){
		let summ = $('.nights').val() * $('.summ').data('nights') + $('.guests').val() * $('.summ').data('guests');
		$('.summ').html('$' + summ);
	});

	let summ = $('.nights').val() * $('.summ').data('nights') + $('.guests').val() * $('.summ').data('guests');
	$('.summ').html('$' + summ);

	$('.surfboard__box-circle').on('click', function(){
		$(this).toggleClass('active')
	});

});