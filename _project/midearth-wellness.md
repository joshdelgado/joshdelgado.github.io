---
title: Midearth Wellness
description: A single page website for a Lord of the Rings inspired mobile massage therapy business. 
alias: midearth-wellness
cardImage: /assets/img/midearth-wellness/midearth-wellness--thumb.png
socialImage: /assets/img/midearth-wellness/midearth-wellness--social-image.jpg
layout: project
display: true
tools:
- Jekyll
- UI/UX
- Netlify
- Mobile First
jsarr:
- js/main.js
---

<section class="project-section project-section--intro">
	<div class="project-section__inner">
		<div class="project-section__intro-text">
			<p class="project-section__summary" markdown="1">A single page website for a mobile massage therapy business inspired by Lord of the Rings.</p>
		</div>
		<ul class="project-section__cta-list">
			<li class="project-section__cta-socket">
				<a class="button" href="https://www.midearthwellness.com" target="_blank">See it live</a>
			</li>
			<li class="project-section__cta-socket">
				<a class="button" href="https://github.com/joshdelgado/midearth-wellness" target="_blank">See the code</a>
			</li>
		</ul>
		<span class="project-section__img project-section__img--intro">
			<span markdown="1">![Roll 4d6](/assets/img/midearth-wellness/midearth-wellness--intro.png)</span>
		</span>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Origin</h2>
		<div class="project-section__copy-area">
			<p>I built this for two reasons: The only framework I had experience with at the time was Angular so I wanted to explore other Javascript frameworks and because my buddy was constantly running into a situation where he needed a character generated on the fly.</p>
			<p markdown="1">The best way to see what this project is all about is to check out [Roll4d6](https://www.roll4d6.com) live and to read through the [code on Github](https://github.com/joshdelgado/roll4d6). But if you want to see some highlights and my reflections on the building process feel free to continue below.</p>
		</div>
	</div>
</section>
<section class="project-section project-section--project">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Project</h2>
		<div class="project-section__mockups project-section__mockups--roll4d6 device-slider">
			<div class="js-mockup device-slider__slide device-slider__slide--visible" data-slide="1">
				<div class="desktop" >
					<div class="desktop__screen">
						<img src="/assets/img/roll4d6/roll4d6--desktop.webp" />
					</div>
					<div class="desktop__stand"></div>
					<div class="desktop__base"></div>
				</div>
			</div>
			<div class="js-mockup device-slider__slide" data-slide="2">
				<div class="tablet">
					<div class="tablet__screen">
						<img src="/assets/img/roll4d6/roll4d6--tablet.webp" />
					</div>
				</div>
			</div>
			<div class="js-mockup device-slider__slide" data-slide="3">
				<div class="iphone">
					<div class="iphone__screen">
						<img src="/assets/img/roll4d6/roll4d6--phone.webp" />
					</div>
				</div>
			</div>
		</div>
		<ul class="project-section__mockups-nav">
			<li class="project-section__mockups-nav-item js-slider-left"><i class="fa fa-chevron-left"></i></li>
			<li class="project-section__mockups-nav-item js-slider-right"><i class="fa fa-chevron-right"></i></li>
		</ul>
	</div>
</section>
<section class="project-section project-section--process">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Highlights</h2>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<p>Users can choose how random the character should be plus generate a randomized plot hook to play with.</p>
			</div>
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span>
						<img src="/assets/img/roll4d6/roll4d6--form.webp" />
					</span>
				</span>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span>
						<img src="/assets/img/roll4d6/roll4d6--attributes.webp" />
					</span>
				</span>
			</div>
			<div class="project-section__process-cell">
				<p markdown="1">The app uses [D&D 5e API](https://www.dnd5eapi.co/) to gather info. Most attributes have a uniform distribution other than the height, weight, and age which have a standard distribution.</p>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<p>The character biography is basically a MadLib. A series of random number generations are plugged into a skeleton paragraph to give us a unique biography.</p>
			</div>
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span>
						<img src="/assets/img/roll4d6/roll4d6--bio.webp" />
					</span>
				</span>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span>
						<img src="/assets/img/roll4d6/roll4d6--stats.webp" />
					</span>
				</span>
			</div>
			<div class="project-section__process-cell">
				<p markdown="1">The NPC's stats start on a [positively skewed standard distribution](https://anydice.com/articles/4d6-drop-lowest/) and will stay that way unless the user selects "distribute points intelligently", in which case, it will apply points based on the class.</p>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<p>According to Google's PageSpeed Insights it's pretty speedy.</p>
			</div>
			<div class="project-section__process-cell project-section__process-cell--two-images">
				<span class="project-section__img" style="flex: 1 1 300px">
					<span>
						<img src="/assets/img/roll4d6/pagespeed-insights--mobile.webp" />
					</span>
				</span>
				<span class="project-section__img" style="flex: 1 1 300px">
					<span>
						<img src="/assets/img/roll4d6/pagespeed-insights--desktop.webp" />
					</span>
				</span>
			</div>
		</div>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">Closing Thoughts</h2>
		<div class="project-section__copy-area">
			<p>I really enjoyed using React to bring a project to life. Coming from an Angular background, React felt much more customizable and let build the application in a way that I felt fit best for the project.</p>
			<p>I've now used Github Pages and Netlify to push a product to production and I found Netlify's dashboard and plugins made launching a product and then iterating on it a breeze. Going forward, I'll likely use Netlify for anything I build that is supported.</p>
			<p>There are still a few things I'd like to enhance the product with like: adding more pictures for each possible NPC combination (216 in total), allowing the user to print/save their NPC, and creating a database of NPCs that can be referenced later. I hope to get to those one day. If not, I hope that someone forks my branch and takes up the mantle. If not that, I just hope people have fun with Roll4d6.</p>
		</div>
	</div>
</section>