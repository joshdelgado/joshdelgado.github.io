jQuery(document).ready(function () {
	$('.js-toggle-theme').on('click', function () {
		$(this).toggleClass('header__theme-toggle--light-mode');
		$('.body').toggleClass('body__light-mode');
	});
});