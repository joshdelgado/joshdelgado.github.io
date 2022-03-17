---
title: Internal Angular Library
alias: internal-angular-library
cardImage: /assets/img/angular-common/colors.svg
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
			<p class="project-section__summary">A common-code library for all Angular projects made for Westgate. We  upgraded from AngularJS to Angular 7 and later upgraded to Angular 11.</p>
		</div>
		<ul class="flex-row__column project-section__team project-section__team--inline">
			<li class="project-section__team-member">
				<strong>Designer</strong>
				<span>Jose De La Vega</span>
			</li>
			<li class="project-section__team-member">
				<strong>Developers</strong>
				<span>Josh Delgado, Terry Davies</span>
			</li>
			<li class="project-section__team-member">
				<strong>Client</strong>
				<span>Westgate Resorts</span>
			</li>
		</ul>
		<span class="project-section__img">
			<span markdown="1">![Buttons](/assets/img/angular-common/navigations.svg)</span>
		</span>
	</div>
</section>
<section class="project-section project-section--problem">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Problem(s)</h2>
		<div class="flex-row flex-row--container flex-row--justify-center">
			<div class="flex-row__column flex-row__column--8">
				<p markdown="1">Have you ever played one of those "spot the difference" games from [Highlights Magazine](https://pbs.twimg.com/media/DNZrTQ9UIAYn8eP.jpg)? That's what it was like developing our internal applications before we created this library. Sure, we had a common library, but it was maintained the same way an 6 year old maintains a fish tank: poorly and only when someone in charge noticed the fish were dying.</p> 
				<p markdown="1">Some components were treated as a StackOverflow examples to be [copypasta](https://en.wikipedia.org/wiki/Copypasta)-ed. Others began as application-specific components but later were copied into a new application instead of abstracted into the library, leaving us with two (or more) snippets to maintain in parallel. And what was most frustrating for our designers, the few blues in our brand had evolved into a mess of (no joke) 37 slight blue variations.</p>
				<p>All this inconsistency led to increased development times, development of redundant code, and an eerie sense of discord when navigating within our Intranet.</p>
				<p>Unfortunately, the code repository is private by corporate decree and all legacy repositories before 2020 are lost. I've included select imagery below to help illustrate what was done.</p>
			</div>
			<!-- <div class="flex-row__column">
				<p>There was a very limited library for angular components across 30+ angularJS apps. To copy a pattern for a new angular app, the process was to copy the code from an existing app and place it in the new one.</p>
				<p>All sites used blue but few sites used the same blues.</p>
				<p>A lot of dev time was spent creating things that already existed leading to review comments of "this already exists, go here and copy the code"</p>
				<p>The Goal: To reduce the amount of duplicative code written, create a consistent UI/UX through the entire Intranet, to create basic documentation.</p>
			</div> -->
		</div>
	</div>
</section>
<section class="project-section project-section--project">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Project</h2>
		<div class="flex-row flex-row--container">
			<div class="flex-row__column">
				<div class="project-section__mockups">
					<div class="desktop">
						<div class="desktop__screen"></div>
						<div class="desktop__stand"></div>
						<div class="desktop__base"></div>
					</div>
					<div class="tablet">
						<div class="tablet__screen"></div>
					</div>
					<div class="iphone">
						<div class="iphone__screen"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="project-section project-section--process">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Process</h2>
		<div class="flex-row flex-row--container">
			<div class="flex-row__column">
				<p>All applications were written in AngularJS so the library, and all aplications, were upgraded to Angular 7 and later to Angular 11</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>We defined essential components, styles, and services across apps such as form inputs.</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img">
					<span markdown="1">![Buttons](/assets/img/angular-common/fields-controls.svg)</span>
				</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				{% include code2.html %}
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>Created flexible abstractions of our most-used components</p>
				<!-- <p>Abstracted commonly used services and components to reduce redundancy.</p> -->
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>Created a clear style guide and consolidated colors into a reasonable collection of blues, neutrals, and accents. Defined variables for our colors and other brand styles. And lastly, tested our color combinations for ADA compliance.</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img">
					<span markdown="1">![Buttons](/assets/img/angular-common/colors.svg)</span>
				</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img">
					<!-- <span markdown="1">![Buttons](/assets/img/angular-common/menu.svg)</span> -->
					<span markdown="1">![Buttons](/assets/img/angular-common/buttons.svg)</span>
				</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>Identified and abstracted frequently used components, elements, and patterns across applications</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p markdown="1">Converted all style declarations to use the [Block Element Modifier](http://getbem.com/) naming convention which greatly increased developer orientation within projects</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				{% include code.html %}
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img project-section__img--no-scroll" markdown="1">![Buttons](/assets/img/angular-common/compodoc.png)
				</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p markdown="1">Used [Compodoc](https://compodoc.app/) to easily generate basic documentation for components and services</p>
			</div>
		</div>
	</div>
</section>
<section class="project-section project-section--conclusion">
	<div class="project-section__inner">
		<h2 class="project-section__title">Conclusion</h2>
		<div class="flex-row flex-row--container flex-row--justify-center">
			<div class="flex-row__column flex-row__column--8 project-section__intro">
				<p>Since the company continues to develop new applications with unique needs, this is a living library. But in the time it's been a part of our development cycle the number of basic questions and "this already exists" review comments has greatly decreased. Additionally, the barrier-to-entry knowledge needed to create a well-functioning and on-brand application has gone from a few months to a few weeks.</p>
				<p>Our internal applications have escaped the uncanny valley and feel like a single cohesive brand.</p>
			</div>
		</div>
	</div>
</section>
