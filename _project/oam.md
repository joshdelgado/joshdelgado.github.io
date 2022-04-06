---
title: Owner Management Portal
alias: oam
cardImage: /assets/img/oam/oam-init-step.png
layout: project
display: true
tools:
- Angular
- SCSS
- JSP
- Java
jsarr:
- js/main.js
---

<section class="project-section project-section--intro">
	<div class="project-section__inner">
		<div class="project-section__intro-text">
			<p class="project-section__summary">An Angular 11 application living inside a legacy Java application to guide users through common functions of the Owner Account Management portal.</p>
		</div>
		<ul class="project-section__team">
			<li class="project-section__team-member">
				<strong>Designer</strong>
				<span>Angela Shockey</span>
			</li>
			<li class="project-section__team-member">
				<strong>Lead Angular Developer</strong>
				<span>Josh Delgado</span>
			</li>
			<li class="project-section__team-member">
				<strong>Angular Developers</strong>
				<span markdown="1">[Rebecca Terry](https://rebeccaterry.dev/),<br>Shianne Dyges</span>
			</li>
			<li class="project-section__team-member">
				<strong>Java Developers</strong>
				<span>Khondaker Sadman,<br>Francisco Felix</span>
			</li>
			<li class="project-section__team-member">
				<strong>Client</strong>
				<span>Westgate Resorts</span>
			</li>
		</ul>
		<span class="project-section__img project-section__img--intro">
			<span markdown="1">![Florida Beach Weddings - Shopify - 2022](/assets/img/oam/oam-dashboard--best.png)</span>
		</span>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Problem(s)</h2>
		<div class="project-section__copy-area">
			<p>This was one of the older projects in the company's codebase which means there was A LOT of undocumneted and spaghetti code. Few developers wanted to work on the project since it was difficult to find the code you needed to address and when you did, it would often change something else in addition.</p>
			<p>The demographic for this application skews older and less tech-savvy so support calls and messages were aggressively high.</p>
			<p>This is a the first part of a multi-phase transition to an entirely angular application. The phase one purpose was to create a guided flow that would direct the user to the existing page to complete their goal. Since this was an addition to the site instead of a conversion, it allowed our team to discover pitfalls in our design through live user testing.</p>
		</div>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Project</h2>
		<div class="project-section__mockups project-section__mockups--oam">
			<div class="desktop js-mockup mockup--visible" data-slide="1">
				<div class="desktop__screen">
					<img src="/assets/img/oam/oam-desktop--best.png" />
				</div>
				<div class="desktop__stand"></div>
				<div class="desktop__base"></div>
			</div>
			<div class="tablet js-mockup" data-slide="2">
				<div class="tablet__screen">
					<img src="/assets/img/oam/oam-tablet--best2.png" />
					</div>
			</div>
			<div class="iphone js-mockup" data-slide="3">
				<div class="iphone__screen">
					<img src="/assets/img/oam/oam-mobile--best.png" />
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
				<p>The Angular application lives within the existing Java/JSP website. Angular preloads the base module and remains hidden until the user clicks the "Show Guided Flow" bar that exists throughout the website.</p>
			</div>
			<div class="project-section__process-cell">
				<div class="desktop">
					<div class="desktop__screen">
						<video width="100%" autoplay muted loop playsinline>
							<source src="/assets/video/oam/oam-guided-flow-from-dash-loop.webm" type="video/webm">
							<source src="/assets/video/oam/oam-guided-flow-from-dash-loop.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
					<div class="desktop__stand"></div>
					<div class="desktop__base"></div>
				</div>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				{% include multi-code.html %}
			</div>
			<div class="project-section__process-cell">
				<p>It has a data-driven, card-based design reduces the number of front-end components that need to be written.</p>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<p>The project is split into multiple modules to reduce bandwidth and speed up page load times.</p>
			</div>
			<div class="project-section__process-cell">
				<span class="project-section__img project-section__img--max-width">
					<span>
						<img src="/assets/img/oam/file-structure.png" alt="File Structure">
					</span>
				</span>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<div class="iphone iphone--large">
					<div class="iphone__screen">
						<video width="100%" autoplay muted loop playsinline>
							<source src="/assets/video/oam/oam-mobile-guided-flow.webm" type="video/webm">
							<source src="/assets/video/oam/oam-mobile-guided-flow.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
			<div class="project-section__process-cell">
				<p markdown="1">The user base is 90% desktop users (the demographic skews older) but the development is still mobile focused.</p>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				<p>We utilize Angular Material Forms and Icons to do some of the heavy lifting and reduce our development time. Who wants to reinvent the wheel? </p>
			</div>
			<div class="project-section__process-cell">
				<span class="project-section__img">
					<span markdown="1">![Icons](/assets/img/angular-common/final/icons-svg.jpg)</span>
				</span>
			</div>
		</div>
		<div class="project-section__process-row">
			<div class="project-section__process-cell">
				{% include multi-code2.html %}
			</div>
			<div class="project-section__process-cell">
				<p>We create Angular analogs for services, objects, etc that exist on the Java side. This helps our front-end and back-end devs communicate and eliminates many common misunderstandings.</p>
			</div>
		</div>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">Conclusion</h2>
		<div class="flex-row flex-row--container flex-row--justify-center">
			<div class="flex-row__column flex-row__column--8">
				<p>This project pushed us to bring our common angular library to the next level with further abstractions and increased organization. It was a pain at first to stop development to work on the library but the time has already been made up for.</p>
				<p>Early user testing has been received well. The common use-cases are much easier for our applications demographic to navigate through.</p>
				<p>Going forward, more documentation for the project is needed. As it's an in-progress application, certain patterns are still up for debate so we haven't written extensive documentation for it. If you'd like to see examples of my documentation style you can do so here.</p>
				<p markdown="1">And lastly, If you happen to have a Westgate account, [check it out!](https://my.westgateresorts.com/)</p>
			</div>
		</div>
	</div>
</section>