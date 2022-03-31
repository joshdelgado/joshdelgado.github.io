<header class="header">
	<div class="header__inner">
		<div class="header__left">
			<div class="header__logo">
				{% include logo.html %}
			</div>
			<nav class="header__nav">
				<a href="/" class="header__nav-item header__nav-item--active">Home</a>
				<a href="/about" class="header__nav-item">About</a>
				<a href="/work" class="header__nav-item">Projects</a>
				<!-- <a href="/blog" class="header__nav-item">Blog</a> -->
				<a href="/" class="header__nav-item">Resume</a>
			</nav>
		</div>
		<div class="header__right">
			<div class="header__theme-toggle header__theme-toggle--dark-mode js-toggle-theme">
				<i class="header__theme-toggle-moon far fa-moon"></i>
			</div>
			<div class="social-links-dropdown">
				<i class="social-links-dropdown__trigger fa fa-bars js-social-dropdown-trigger"></i>
				<ul class="social-links social-links--dropdown social-links--closed js-social-dropdown">
					<li class="social-links__icon">
						<a href="https://github.com/joshdelgado" class="fab fa-github" target="_blank"></a>
					</li>
					<li class="social-links__icon">
						<a href="https://www.linkedin.com/in/josh-delgado/" class="fab fa-linkedin" target="_blank"></a>
					</li>
					<li class="social-links__icon">
						<a href="https://codepen.io/joshdelgado" class="fab fa-codepen" target="_blank"></a>
					</li>
					<li class="social-links__icon">
						<a href="mailto:contact@joshdelgado.me" class="far fa-envelope" target="_blank"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="header__bottom"></div>
</header>