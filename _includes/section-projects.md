<section class="section section--projects">
	<div class="section__inner">
		<h1 class="section__title section__title--has-subtitle">See What I Can Do</h1>
		<p class="section__subtitle" markdown="1">Check out some of my work below or visit my [Github](https://github.com/joshdelgado) and [CodePen](https://codepen.io/joshdelgado) for more bite-sized projects</p>
		<div class="section__projects">
			{% assign projectsToDisplay = site.project | where: "display", "true" %}
			{% for project in projectsToDisplay %}
			<div class="project-card project-card--{{project.alias}}"> 
				{% if project.cardImage %}
					<div class="project-card__image" style="background-image: url({{ project.cardImage }})"></div>
				{% endif %}
				<a class="project-card__text" href="{{ project.url | prepend: site.baseurl }}">
					<h2 class="project-card__title">{{ project.title }}</h2>
					<span class="project-card__link fa fa-caret-right"></span>
				</a>
			</div>
			{% endfor %}
		</div>
	</div>
</section>