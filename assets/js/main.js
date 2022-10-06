jQuery(document).ready(function () {
	localStorage.setItem('theme', localStorage['theme'] ? localStorage['theme'] : 'dark');
	let theme = localStorage['theme'];

	$('html').attr('data-theme', theme ? theme : 'dark');
	if (theme === 'light') {
		$('.js-toggle-theme').removeClass('theme-toggle--dark-mode');
		$('.js-home-hero').removeClass('section--hero-dark');
	}

	$('.js-toggle-theme').on('click', function () {
		$(this).toggleClass('theme-toggle--dark-mode');

		$('html').addClass('theme-in-transition');

		if ($('html').attr('data-theme') === 'light') {
			$('html').attr('data-theme', 'dark');
			$('.js-home-hero').addClass('section--hero-dark');
			localStorage.setItem('theme', 'dark');
		} else {
			$('html').attr('data-theme', 'light');
			$('.js-home-hero').removeClass('section--hero-dark');
			localStorage.setItem('theme', 'light');
		}
		setTimeout(() => {
			$('html').removeClass('theme-in-transition');
		}, 500);
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
		let currentSlide = $('.device-slider__slide--visible').attr('data-slide'),
			nextSlide = +currentSlide + 1,
			totalSlides = $('.js-mockup').length;

		if (nextSlide > totalSlides) {
			nextSlide = 1;
		}

		$('.device-slider__slide--visible').addClass('device-slider__slide--transition');
		setTimeout(function () {
			$('.device-slider__slide--visible').removeClass('device-slider__slide--transition').removeClass('device-slider__slide--visible');
			$('.js-mockup[data-slide=' + nextSlide + ']').addClass('device-slider__slide--visible');
		}, 500);
	});

	$('.js-slider-left').on('click', function () {
		let currentSlide = $('.device-slider__slide--visible').attr('data-slide'),
			nextSlide = +currentSlide - 1,
			totalSlides = $('.js-mockup').length;

		if (nextSlide <= 0) {
			nextSlide = totalSlides;
		}

		$('.device-slider__slide--visible').addClass('device-slider__slide--transition');
		setTimeout(function () {
			$('.device-slider__slide--visible').removeClass('device-slider__slide--transition').removeClass('device-slider__slide--visible');
			$('.js-mockup[data-slide=' + nextSlide + ']').addClass('device-slider__slide--visible');
		}, 500);
	});

	$('a').on('click', function (event) {
		if (this.hash !== '') {
			var hash = this.hash,
				timeout = 0;

			if (!$('.js-nav-dropdown').hasClass('nav-dropdown--closed')) {
				setTimeout(() => {
					$('.js-nav-dropdown').addClass('nav-dropdown--closed');
				}, 500);
			}

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500, function () {
				window.location.hash = hash;
			});

			return false;
		}
	});
});