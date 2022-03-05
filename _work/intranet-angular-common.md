---
title: Internal Angular Library
alias: internal-angular-library
cardImage: /assets/img/angular-common/colors.svg
layout: work
display: true
tools:
- Angular
- SCSS
- HTML
jsarr:
- js/main.js
---

<section class="project-section">
	<div class="project-section__inner">
		<div class="flex-row flex-row--container flex-row--align-center">
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img" markdown="1">![Buttons](/assets/img/angular-common/typography.svg)</span>
			</div>
			<!-- <div class="flex-row__column flex-row__column--7">
				<video width="100%" autoplay muted loop playsinline>
					<source src="/assets/video/oam/oam-guided-flow-from-dash-loop.webm" type="video/webm">
					<source src="/assets/video/oam/oam-guided-flow-from-dash-loop.mp4" type="video/mp4">
					Your browser does not support the video tag.
				</video>
			</div> -->
			<div class="flex-row__column flex-row__column--5 project-section__intro">
				<div>
					<p class="project-section__summary">An Angular library for all projects made for Westgate.</p>
				</div>
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
		</div>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Problem(s)</h2>
		<div class="flex-row flex-row--container">
			<div class="flex-row__column">
				<p>There was a very limited library for angular components across 30+ angularJS apps. To copy a pattern for a new angular app, the process was to copy the code from an existing app and place it in the new one.</p>
				<p>All sites used blue but few sites used the same blues.</p>
				<p>A lot of dev time was spent creating things that already existed leading to review comments of "this already exists, go here and copy the code"</p>
				<p>The Goal: To reduce the amount of duplicative code written, create a consistent UI/UX through the entire Intranet, to create basic documentation.</p>
			</div>
		</div>
	</div>
</section>
<section class="project-section">
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
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Process</h2>
		<div class="flex-row flex-row--container">
			<div class="flex-row__column flex-row__column--6">
				<p>Defined essential components, styles, and services</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img project-section__img--1" markdown="1">![Buttons](/assets/img/angular-common/fields-controls.svg)</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>Went through all the applications gathering colors to create a list. Consolidated the blues down to a consistent color palette. Added those colors to the library so developers no longer needed to define colors other than in edge cases. - colors and old colors</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img project-section__img--2" markdown="1">![Buttons](/assets/img/angular-common/colors.svg)</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>Identified common layouts elements (header, footer, search templates) and patterns (buttons, cards, navigation elements) across apps and abstracted them into the library.</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img project-section__img--3" markdown="1">![Buttons](/assets/img/angular-common/menu.svg)</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p markdown="1">Implemented [Block Element Modifier](http://getbem.com/) naming conventions - get a screenshot of code</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				{% include code.html %}
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p markdown="1">Used [Compodoc](https://compodoc.app/) to generate documentation for components and services</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img project-section__img--4" markdown="1">![Buttons](/assets/img/angular-common/compodoc.png)</span>
			</div>
			<div class="flex-row__column">
				<p>Abstracted services</p>
				<p>Upgraded applications from AngularJS to Angular 7 and later to Angular 11 -  no idea</p>
			</div>
		</div>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">Conclusion</h2>
		<div class="flex-row flex-row--container">
			<div class="flex-row__column project-section__intro">
				<p>Created a scalable and organized framework for angular components</p>
				<p>Reduced the training time and amount of basic questions from developers new to the project</p>
				<p>Created a consistent UI and UX between applications</p>
				<p>Decreased the number of review comments for all angular related tickets</p>
				<p>Implemented a framework for Angular development where there had been none before.</p>
			</div>
		</div>
	</div>
</section>


<span markdown="1">
![Buttons](/assets/img/angular-common/colors.svg)
![Buttons](/assets/img/angular-common/typography.svg)
![Buttons](/assets/img/angular-common/icons.svg)
![Buttons](/assets/img/angular-common/navigations.svg)
![Buttons](/assets/img/angular-common/menu.svg)
</span>