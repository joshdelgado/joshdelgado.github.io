jQuery(document).ready(function () {
	$('.js-toggle-theme').on('click', function () {
		$(this).toggleClass('header__theme-toggle--dark-mode');
		$('.body').toggleClass('body__light-mode');
	});
});