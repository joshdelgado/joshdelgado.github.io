---
title: Josh Delgado
layout: blog
jsarr:
- js/main.js
---

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