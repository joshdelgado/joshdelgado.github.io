---
title: OAM
alias: oam
cardImage: /assets/img/oam-init-step.png
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
		<ul class="flex-row__column project-section__team project-section__team--inline">
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
				<span>Rebecca Terry,<br>Shianne Dyges</span>
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
		<span class="project-section__img">
			<span markdown="1">![Florida Beach Weddings - Shopify - 2022](/assets/img/oam-init-step.png)</span>
		</span>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Problem(s)</h2>
		<div class="flex-row flex-row--container flex-row--justify-center">
			<div class="flex-row__column flex-row__column--8">
				<p>This was one of the older projects in the company's codebase which means there was A LOT of undocumneted and spaghetti code. Few developers wanted to work on the project since it was difficult to find the code you needed to address. And when you did, it would often change something unintended.</p>
				<p>The demographic for this application skewed older and less tech-savvy so support calls and messages were aggerssively high.</p>
				<p>This is a multi-phase transition to an entirely angular application. The phase one focus was to convert the most common use-case into a guided flow in order to grow our teams knowledge of the angular framework and to get user testing feedback to improve future flows.</p>
			</div>
		</div>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">The Project</h2>
		<div class="flex-row flex-row--container">
			<div class="flex-row__column">
				<p>The app utilizes a Java back-end to supply all database data that is shared with the Java/JSP application it's nested inside.</p>
				<p>The app is fully responsive and leverages existing libraries (largely Angular Material and our inhouse AngularCommon library) to keep a consistent UX, speed up the development time, and reduce potential bugs in production.</p>
				<p>We create Angular analogs for services, objects, etc used on the Java side of the project. This helps our front-end and back-end devs communicate by eliminating most common misunderstandings. - [snippet of java and angular endpoints]</p>
				<p></p>
			</div>
			<div class="flex-row__column">
				<div class="project-section__mockups">
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
					<div class="tablet">
						<div class="tablet__screen"></div>
					</div>
					<div class="iphone">
						<div class="iphone__screen">
							<video width="100%" autoplay muted loop playsinline>
								<source src="/assets/video/oam/oam-mobile-guided-flow.webm" type="video/webm">
								<source src="/assets/video/oam/oam-mobile-guided-flow.mp4" type="video/mp4">
								Your browser does not support the video tag.
							</video>
						</div>
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
			<div class="flex-row__column flex-row__column--6">
				<p>We designed the product in Figma and built the application Angular 11. The intention was to allow seamless transition between the existing Java application and the new Angular one. So the Angular app preloads and remains hidden until the user clicks (or taps) on the bar that exists at the top of all dashboard pages.</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
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
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img">
					<span markdown="1">![Buttons](/assets/img/angular-common/fields-controls.svg)</span>
				</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>The team held weekly standup meetings to give everyone a high level overview of the going-ons throughout the project. Additionally the developers would informally meet near-daily to ask each other questions and ensure there were little to no blocking tasks.</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>The project is split into multiple modules for quicker load times.</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img">
					<span markdown="1">![Buttons](/assets/img/oam/file-structure.png)</span>
				</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				{% include multi-code.html %}
				<!-- <span class="project-section__img">
					<span markdown="1">![Buttons](/assets/img/oam-init-step.png)</span>
				</span> -->
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>Data-driven card-based design</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p markdown="1">This project showed us that our previous angular library contained a lot of code that was specific to our Intranet applications [see other project]. I decided we should split up gargantuan library into more manageable [Angular Common](/project/intranet-angular-common) and Intranet Common libraries. In the future, we will add an OAM Common library for the planned angular apps across the OAM project.</p>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img">
					<span markdown="1">![Buttons](/assets/img/angular-common/fields-controls.svg)</span>
				</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<span class="project-section__img">
					<span markdown="1">![Icons](/assets/img/angular-common/icons.svg)</span>
				</span>
			</div>
			<div class="flex-row__column flex-row__column--6">
				<p>Who wants to reinvent the wheel? We utilized Angular Material Forms and Icons to do some of the heavy lifting and reduce our development time.</p>
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