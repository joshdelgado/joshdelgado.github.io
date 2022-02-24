<section class="section section--work">
	<div class="section__inner">
		<h1 class="section__title">Check out my work</h1>
		<p class="section__subtitle">I've like, done a lot of work. Call me an Orc Peon because I <a
				href="https://www.youtube.com/watch?v=eO6OaVnbqaY">work work</a>.</p>
		<div class="section__works">
			{% assign workToDisplay = site.work | where: "display", "true" %}
			<!-- {% for work in site.work limit: 6 %} display 6 {% endfor %}-->
			{% for work in workToDisplay %}
			<div class="work-card" {% if work.cardImage %} style="background-image: url({{ work.cardImage }})" {% endif
				%}>
				<a class="work-card__text" href="{{ work.url | prepend: site.baseurl }}">
					<h2 class="work-card__title">{{ work.title }}</h2>
					<span class="work-card__link fa fa-caret-right"></span>
				</a>
			</div>
			{% endfor %}
		</div>
	</div>
</section>