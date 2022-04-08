jQuery(document).ready(function () {
	$('.js-toggle-theme').on('click', function () {
		$(this).toggleClass('theme-toggle--dark-mode');
		$('.body').toggleClass('body__light-mode');
	});

	$('.js-tab-option').on('click', function () {
		let option = $(this).attr('data-id');

		$(this).parent().find('.multi-code__option').removeClass('multi-code__option--selected');
		$(this).addClass('multi-code__option--selected');
		$(this).parent().parent().find('.multi-code__pane').removeClass('multi-code__pane--selected');
		$(this).parent().parent().find('.multi-code__pane[data-pane=' + option + ']').addClass('multi-code__pane--selected');
	});

	$('.js-social-dropdown-trigger').on('click', function () {
		$(this).parent().toggleClass('nav-dropdown--closed');
	});

	$('.js-slider-right').on('click', function () {
		let currentSlide = $('.mockup--visible').attr('data-slide'),
			nextSlide = +currentSlide + 1,
			totalSlides = $('.js-mockup').length;

		if (nextSlide > totalSlides) {
			nextSlide = 1;
		}

		$('.mockup--visible').addClass('mockup--transition');
		setTimeout(function () {
			$('.mockup--visible').removeClass('mockup--transition').removeClass('mockup--visible');
			$('.js-mockup[data-slide=' + nextSlide + ']').addClass('mockup--visible');
		}, 500);
	});

	$('.js-slider-left').on('click', function () {
		let currentSlide = $('.mockup--visible').attr('data-slide'),
			nextSlide = +currentSlide - 1,
			totalSlides = $('.js-mockup').length;

		if (nextSlide <= 0) {
			nextSlide = totalSlides;
		}

		$('.mockup--visible').addClass('mockup--transition');
		setTimeout(function () {
			$('.mockup--visible').removeClass('mockup--transition').removeClass('mockup--visible');
			$('.js-mockup[data-slide=' + nextSlide + ']').addClass('mockup--visible');
		}, 500);
	});
});