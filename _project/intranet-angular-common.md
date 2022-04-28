---
title: Internal Angular Library
alias: internal-angular-library
cardImage: assets/img/angular-common/colors-svg.svg
layout: project
display: true
tools:
- Angular
- SCSS
- HTML
jsarr:
- js/main.js
---

<section class="project-section project-section--intro">
	<div class="project-section__inner">
		<div class="project-section__intro-text">
			<p class="project-section__summary">A common-code library for all Angular projects made for Westgate. Originally written in AngularJS but upgraded to Angular 7, and later, Angular 11.</p>
		</div>
		<ul class="project-section__team">
			<li class="project-section__team-member">
				<strong>Designer</strong>
				<span markdown="1">[Jose De La Vega](https://dlvjose.com/)</span>
			</li>
			<li class="project-section__team-member">
				<strong>Developers</strong>
				<span>Josh Delgado,<br> Terry Davies</span>
			</li>
			<li class="project-section__team-member">
				<strong>Client</strong>
				<span>Westgate Resorts</span>
			</li>
		</ul>
		<span class="project-section__img project-section__img--intro">
			<span markdown="1">![Angular Library Navigations](/assets/img/angular-common/navigations-svg.svg)</span>
		</span>
	</div>
</section>
<section class="project-section project-section--problem">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Problem(s)</h2>
		<div class="project-section__copy-area">
			<p markdown="1">Have you ever played one of those "spot the difference" games from [Highlights Magazine](https://pbs.twimg.com/media/DNZrTQ9UIAYn8eP.jpg)? That's what it was like developing our internal applications before we created this library. Sure, we had a common library, but it was maintained the same way an 6 year old maintains a fish tank: poorly and only when someone in charge noticed the fish were dying.</p> 
			<p markdown="1">Some components were treated as a StackOverflow examples to be [copypasta](https://en.wikipedia.org/wiki/Copypasta)-ed. Others began as application-specific components but later were copied into a new application instead of abstracted into the library, leaving us with two (or more) snippets to maintain in parallel. And what was most frustrating for our designers, the few blues in our brand had evolved into a mess of (no joke) 37 slight blue variations.</p>
			<p>All this inconsistency led to increased development times, development of redundant code, and an eerie sense of discord when navigating within our Intranet.</p>
			<p>Unfortunately, the code repository is private by corporate decree and all legacy repositories before 2020 are lost. I've included code snippets and images from the style guide to help illustrate what was done.</p>
		</div>
	</div>
</section>
<section class="project-section project-section--project">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Project</h2>
		<div class="project-section__mockups project-section__mockups--ac">
			<div class="js-mockup device-slider__slide device-slider__slide--visible" data-slide="1">
				<div class="desktop">
					<div class="desktop__screen">
						<img src="/assets/img/angular-common/greeter-desktop--best.png" />
					</div>
					<div class="desktop__stand"></div>
					<div class="desktop__base"></div>
				</div>
			</div>
			<div class="js-mockup device-slider__slide" data-slide="2">
				<div class="tablet">
					<div class="tablet__screen">
						<img src="/assets/img/angular-common/greeter-tablet--best.png" />
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
		<h2 class="project-section__title">The Process</h2>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<p>We define essential components, styles, and services across apps such as form fields and controls.</p>
			</div>
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span markdown="1">![Angular Library Inputs](/assets/img/angular-common/fields-controls-svg.svg)</span>
				</span>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				{% include code2.html %}
			</div>
			<div class="project-section__process-cell">
				<p>The most used complex components, such as modals and search forms, have flexible abstractions which reduces development time and eases the learning curve.</p>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<p>The framework contains variables for all colors and branding elements used throughout our Intranet. Additionally, every color combination is verified to be ADA compliant.</p>
			</div>
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span markdown="1">![Angular Library Colors](/assets/img/angular-common/colors-svg.svg)</span>
				</span>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span markdown="1">![Angular Library Button Styles](/assets/img/angular-common/buttons-svg.svg)</span>
				</span>
			</div>
			<div class="project-section__process-cell">
				<p>Frequently used components, elements, and patterns that don't require abstraction exist to be invoked wherever needed.</p>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<p markdown="1">All style declarations are written using the [Block Element Modifier](http://getbem.com/) naming convention which greatly helps developers zero-in on bugs.</p>
			</div>
			<div class="project-section__process-cell">
				{% include code.html %}
			</div>
			</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span>
						<img src="/assets/img/angular-common/compodoc.PNG" alt="Compodoc">
					</span>
				</span>
			</div>
			<div class="project-section__process-cell">
				<p markdown="1">We use [Compodoc](https://compodoc.app/) to generate basic documentation for the components and services within the library.</p>
			</div>
		</div>
	</div>
</section>
<section class="project-section project-section--conclusion">
	<div class="project-section__inner">
		<h2 class="project-section__title">Conclusion</h2>
		<div class="project-section__copy-area">
			<p>Since the company continues to develop new applications with unique needs and use-cases, this is a living library. But in the time it's been a part of our development cycle the number of basic questions and "this already exists" review comments has drastically decreased. Additionally, the level of knowledge developers need to create a well-functioning and on-brand application has gone from a few months to a few weeks.</p>
			<p>Our internal applications have escaped the uncanny valley and feel like a single cohesive brand.</p>
		</div>
	</div>
</section>
