---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Josh Delgado
layout: default
jsarr:
- js/main.js
---

<section class="section section--hero">
	<div class="section__inner">
		<h1 class="section__title">Something something this is an intro</h1>
		<p class="section__text">Here is a short witty description of who I am and what I am about. It probably needs to be a bit longer than I'd normally do</p>
	</div>
	<div class="animation">
		<div class="animation__star"></div>
		<div class="animation__mountain"></div>
		<div class="animation__mountain-small"></div>
		<div class="animation__mountain-small-2"></div>
		<div class="animation__mountain-small-3"></div>
		<div class="animation__mountain-med"></div>
		<div class="animation__mountain-med-2"></div>
		<div class="animation__mountain-large"></div>
		<div class="animation__mountain-back"></div>
		<!-- <div class="animation__gradient"></div> -->
		<div class="animation__gradient animation__gradient--to-right"></div>
		<div class="animation__gradient animation__gradient--to-bottom"></div>
		<div class='animation__gradient animation__gradient--to-top-left'></div>
	</div>
</section>

<section class="section section--about">
	<div class="section__inner">
		<h1 class="section__title">Watchu Know About Me</h1>
		<div class="section__row section__row--align-items-center">
			<div class="section__column">
				<p class="section__text">Likely nothing, that's why you're here. Here is a bit about me boiled down to effectively a series of tweets.</p>
				<p class="section__text">Likely nothing, that's why you're here. Here is a bit about me boiled down to effectively a series of tweets. Likely nothing, that's why you're here. Here is a bit about me boiled down to effectively a series of tweets.</p>
				<ul class="section__skills-list">
					<li class="section__list-item">Angular</li>
					<li class="section__list-item">Typescript</li>
					<li class="section__list-item">Jekyll</li>
					<li class="section__list-item">CSS3</li>
					<li class="section__list-item">Wordpress</li>
					<li class="section__list-item">Developer Mentorship</li>
				</ul>
			</div>
			<div class="section__column">
				<img src="http://www.joshdelgado.me/wp-content/uploads/2017/08/slack-photo.jpg" class="section__img" />
			</div>
		</div>
	</div>
</section>

<!-- <section class="section section--skills">
	<div class="section__inner">
		<h1 class="section__title">Girls like guys with Skills</h1>
		<p class="section__subtitle">A Jack of all trades but a master of none, is oftentimes better than a master of one.</p>
	</div>
</section> -->


<section class="section section--work">
	<div class="section__inner">
		<h1 class="section__title">Check out my work</h1>
		<p class="section__subtitle">I've like, done a lot of work. Call me an Orc Peon because I <a href="https://www.youtube.com/watch?v=eO6OaVnbqaY">work work</a>.</p>
		<div class="section__works">
			{% for work in site.work limit: 6 %}
			<div class="work-card">
				<a class="work-card__text" href="{{ work.url | prepend: site.baseurl }}">
					<h2 class="work-card__title">{{ work.title }}</h2>
					<span class="work-card__link fa fa-caret-right"></span>
				</a>
			</div>
			{% endfor %}
		</div>
	</div>
</section>

<section class="section section--blog">
	<div class="section__inner">
		<h1 class="section__title">Read My Thoughts</h1>
		<p class="section__subtitle">If you're psychic feel free to skip this section. If you'd like to see how I think please explore below.</p>
		<div class="section__works">
			{% for post in site.posts limit: 3 %}
			<div class="work-card">
				<a class="work-card__text" href="{{ post.url | prepend: site.baseurl }}">
					<h2 class="work-card__title">{{ post.title }}</h2>
					<span  class="work-card__link fa fa-caret-right"></span>
				</a>
			</div>
			{% endfor %}
		</div>
	</div>
</section>


<section class="section section--contact">
	<div class="section__inner">
		<h1 class="section__title">Get In Touch</h1>
		<p class="section__subtitle">I may or may not be looking for new oppourtunities. There's only one way to find out!</p>
		<a class="button" href="mailto:contact@joshdelgado.me">Say What's Up</a>
	</div>
</section>