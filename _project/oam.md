---
title: OAM
alias: oam
cardImage: /assets/img/oam-init-step.png
layout: project
display: true
tools:
- Figma 
- Angular
- SCSS
- JSP
- Java
jsarr:
- js/main.js
---

<section class="project-section">
	<div class="project-section__inner">
		<div class="flex-row flex-row--container">
			<span class="flex-row__column flex-row__column--6" markdown="1">![Florida Beach Weddings - Shopify - 2022](/assets/img/oam-init-step.png)</span>
			<div class="flex-row__column flex-row__column--5 project-section__intro">
				<div>
					<p class="project-section__summary">An Angular 11 application living inside a legacy Java application to guide users through common functions of the Owner Account Management portal.</p>
				</div>
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
					<span>Rebecca Terry, Shianne Dyges</span>
				</li>
				<li class="project-section__team-member">
					<strong>Java Developers</strong>
					<span>Khondaker Sadman, Francisco Felix</span>
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
				<p>This was one of the older projects in the company's codebase which means there was A LOT of undocumneted and spaghetti code.</p>
				<p>Few developers wanted to work on the project since it was difficult to find the code you needed to address. And when you did, it would often change something unintended.</p>
				<p>Users of the application skewed older and less tech-savvy so support calls and messages were aggerssively high.</p>
				<p>The Goal: To create a better UX, transition to a scalable framework, and reduce support requests</p>
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
			<div class="flex-row__column">
				<p>We designed the product in Figma and built the application Angular 11. The intention was to allow seamless transition between the existing Java application and the new Angular one. So the Angular app preloads and remains hidden until the user clicks (or taps) on the bar that exists at the top of all dashboard pages. [show picture of dashboard or put video here]</p>
				<p>The team held weekly standup meetings to give everyone a high level overview of the going-ons throughout the project. Additionally the developers would informally meet near-daily to ask each other questions and ensure there were little to no blocking tasks.</p>
				<p>This project showed us that our previous angular library contained a lot of code that was specific to our Intranet applications [see other project]. I decided we should split up gargantuan library into more manageable Angular Common and Intranet Common libraries. In the future, we will add an OAM Common library for the planned angular apps across the OAM project.</p>
				<p>Who wants to recreate the wheel? We utilized Angular Material Forms and Icons to do some of the heavy lifting and reduce our development time.</p>
			</div>
		</div>
	</div>
</section>
<section class="project-section">
	<div class="project-section__inner">
		<h2 class="project-section__title">Conclusion</h2>
		<div class="flex-row flex-row--container">
			<div class="flex-row__column flex-row__column--6 project-section__intro">
				<ul>
					<li>A lot of heavy lifitng was done for future projects. Creating multiple internal angular libraries</li> 
					<li>A guided flow helps new users understand what can be done and feel more secure</li>
					<li>More documentation is needed (in progress)</li>
					<li><span markdown="1">If you happen to have a Westgate account, [check it out!](https://my.westgateresorts.com/)</span></li>
				</ul>
			</div>
		</div>
	</div>
</section>

- Designed in Figma
- Angular 11 used
- Embeded in a JSP application for seamless transition between Dashboard
- Data-driven Java back-end
- Responsive
- Utilizes known libraries such as Material
- Utilizes custom libraries developed in house (by me)
- Nested \<app-router>
- Dynamic text

<!-- <video width="100%">
<video width="100%" autoplay muted loop playsinline>
	<source src="/assets/video/oam/oam-guided-flow-from-dash-loop.webm" type="video/webm">
	<source src="/assets/video/oam/oam-guided-flow-from-dash-loop.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video> -->


- stuff from preformance reviews
- make it more of a story