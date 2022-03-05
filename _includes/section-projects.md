<section class="section section--work">
	<div class="section__inner">
		<h1 class="section__title">See What I Can Do</h1>
		<p class="section__subtitle" markdown="1">Check out some of my work below or visit my [Github](https://github.com/joshdelgado) and [CodePen](https://codepen.io/joshdelgado) for more bite-sized projects</p>
		<!-- <p>I've like, done a lot of work. Call me an Orc Peon because I [work work](https://www.youtube.com/watch?v=eO6OaVnbqaY).</p> -->
		<div class="section__works">
			{% assign workToDisplay = site.work | where: "display", "true" %}
			<!-- {% for work in site.work limit: 6 %} display 6 {% endfor %}-->
			{% for work in workToDisplay %}
			<div class="work-card work-card--{{work.alias}}"> 
				{% if work.cardImage %}
					<div class="work-card__image" style="background-image: url({{ work.cardImage }})"></div>
				{% endif %}
				<a class="work-card__text" href="{{ work.url | prepend: site.baseurl }}">
					<h2 class="work-card__title">{{ work.title }}</h2>
					<span class="work-card__link fa fa-caret-right"></span>
				</a>
			</div>
			{% endfor %}
		</div>
	</div>
</section>