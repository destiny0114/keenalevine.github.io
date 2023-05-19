<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	import Navbar from '$lib/components/Navbar.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import {
		Arrow,
		Subtract,
		Square,
		Plus,
		PS,
		AI,
		XD,
		Figma,
		Wordpress,
		Webflow,
		Wix,
		Redirect,
		Github,
		Download,
		Gmail,
		Twitter,
		Arrowup
	} from '$lib/icons';

	import { AccordionStore } from '$lib/stores/AccordionStore';

	let marquee;
	let accordionState = {
		current: 0
	};

	onMount(() => {
		const hashID = sessionStorage.getItem('hash');

		if (hashID) {
			document.querySelector(hashID).scrollIntoView({
				behavior: 'smooth'
			});
			sessionStorage.removeItem('hash');
		}

		const resizeMarquee = () => {
			const marqueeList = marquee.firstChild;
			const cloneMarqueeList = marqueeList.cloneNode(true);
			marquee.append(cloneMarqueeList);

			const width = parseInt(getComputedStyle(marqueeList).getPropertyValue('width'), 10);
			const gap = parseInt(getComputedStyle(marqueeList).getPropertyValue('column-gap'), 10);
			const distance = -1 * ((Number.isNaN(gap) ? 0 : gap) + width);

			gsap.to(
				marquee.children,

				{
					x: `+=${distance}`,
					duration: 20,
					ease: 'none',
					repeat: -1,
					modifiers: {
						x: (x) => {
							return (parseFloat(x) % distance) + 'px';
						}
					}
				}
			);
		};

		resizeMarquee();

		window.addEventListener('resize', resizeMarquee);
	});
</script>

<main>
	<section class="hero">
		<div class="wrapper">
			<Navbar />

			<div class="content">
				<h1 class="heading">I create beautiful websites your users will love</h1>
				<p class="subhead">
					I am a web developer with three years experience who is passionate about web development
					and figuring out solutions to improve usability and functionality of websites and systems.
				</p>

				<div class="cta-btns">
					<a href="" class="primary-cta">My Work</a>
					<a href="" class="secondary-cta">
						<span>Download Resume</span>
						<Arrow class="arrow-icon" />
					</a>
				</div>

				<img class="hero-img" src="/images/mockup.png" alt="hero_image" />
			</div>
		</div>
	</section>
	<section class="marquee" bind:this={marquee}>
		<ul class="marquee-list">
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>
			<li class="marquee-elem marquee-text">Design</li>
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>
			<li class="marquee-elem marquee-text">Development</li>
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>

			<li class="marquee-elem marquee-text">Website</li>
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>

			<li class="marquee-elem marquee-text">E-commerce</li>
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>
			<li class="marquee-elem marquee-text">UI/UX</li>
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>
			<li class="marquee-elem marquee-text">Wordpress</li>
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>
			<li class="marquee-elem marquee-text">Webflow</li>
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>
			<li class="marquee-elem marquee-text">Wix</li>
			<li class="marquee-elem marquee-icon">
				<Subtract />
			</li>
			<li class="marquee-elem marquee-text">Web Hosting</li>
		</ul>
	</section>
	<section class="services">
		<div class="services-content wrapper">
			<div class="left-col">
				<h5>Services</h5>
			</div>
			<div class="right-col">
				<h3 class="title">I can <span class="highlight">help</span> you with ...</h3>
				<div class="description">
					<p>
						I specialise in offering bespoke web design and web development services to small and
						big businesses alike. My aim is to help businesses establish a strong online presence
						and connect with their target audience effectively.
					</p>
					<div class="experience">
						<h5>3</h5>
						<small>Years of experience</small>
					</div>
					<div class="experience">
						<h5>100+</h5>
						<small>Project done</small>
					</div>
				</div>
				<div class="process">
					<div class="card">
						<div class="numeric">01</div>
						<h5>Design</h5>
						<p>
							I make web designs that engage your audience and create the user experience you want.
						</p>
					</div>
					<div class="card">
						<div class="numeric">02</div>
						<h5>Development</h5>
						<p>Bringing visuals to life through developing highly functional web solutions.</p>
					</div>
					<div class="card">
						<div class="numeric">03</div>
						<h5>The Full Package</h5>
						<p>
							Get the best of both worlds for your website, capture your brand identity and get
							fully functional features.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="about" id="about">
		<div class="wrapper">
			<div class="art plus-1">
				<Plus />
			</div>
			<div class="art plus-2">
				<Plus />
			</div>
			<div class="art plus-3">
				<Plus />
			</div>
			<div class="square">
				<Square />
			</div>
			<div class="hire">
				<div class="left-col">
					<img src="/images/profile.png" alt="profile" class="profile-img" />
				</div>
				<div class="right-col">
					<h5>About me</h5>
					<h3 class="title">Why <span class="highlight">Hire Me </span>For Your Next Project ?</h3>
					<div class="description">
						<p>
							I am a self-employed, self-motivated, and self-taught web developer with three years
							experience who is passionate about web development and figuring out solutions to
							improve usability and functionality of websites and systems.
						</p>
						<p>
							My skills are manipulating and customizing themes and plugins, building themes from
							scratch, e-commerce implementation and advanced programming. I also convert designs
							from any format (Photoshop, Illustrator, Image, Figma, other or even a paper sketch)
							to a fully working website that’s either based on a website builder or coded free
							handedly. My conversions are pixel perfect and 100% faithful to the source material
							without exceptions.
						</p>
						<p>
							And thanks to my expertise in various of web development languages include frontend
							and backend, I can build fully customizable Web applications following your vision and
							the functionalities desired.
						</p>
						<p>Are you excited work with me to your project? I know I am!</p>
					</div>
				</div>
			</div>
			<div class="expertise">
				<div class="left-col">
					<h3 class="title">My way of getting <span class="highlight">things done</span></h3>
					<div class="skillset">
						<div class="icon">
							<PS />
						</div>
						<div class="icon">
							<AI />
						</div>
						<div class="icon">
							<XD />
						</div>
						<div class="icon">
							<Figma />
						</div>
						<div class="icon">
							<Wordpress />
						</div>
						<div class="icon">
							<Webflow />
						</div>
						<div class="icon">
							<Wix />
						</div>
					</div>
				</div>
				<div class="right-col">
					<h5>Expertise</h5>
					<p>
						I specialise in offering bespoke web design and web development services to small and
						big businesses alike. My aim is to help businesses establish a strong online presence
						and connect with their target audience effectively.
					</p>
					<Accordion bind:current={accordionState.current}>
						{#each $AccordionStore as AccordionMenu, index}
							<AccordionItem key={index}>
								<div slot="label">{AccordionMenu.label}</div>
								<div slot="description">
									{AccordionMenu.description}
								</div>
							</AccordionItem>
						{/each}
					</Accordion>
				</div>
			</div>
		</div>
	</section>
	<section class="showcase">
		<div class="wrapper">
			<div class="heading">
				<h5>Exploration</h5>
				<h1>Featured Projects</h1>
			</div>
			<div class="project-wrapper">
				<div class="project-grid">
					<div class="project-card">
						<div class="content">
							<div class="heading">
								<div class="text">
									<h3>Duis mauris.</h3>
									<p>
										Mauris ut condimentum massa. Curabitur odio dui, semper id justo eu, tempor
										cursus libero. Donec iaculis, tellus non efficitur ullamcorper.
									</p>
								</div>
								<a href="/" class="cta-go"><Redirect /></a>
							</div>
						</div>
						<img src="https://nextweb.fi/_nuxt/portfolio_getsport_io.8b5ca986.webp" alt="" />
					</div>
					<div class="project-card">
						<div class="content">
							<div class="heading">
								<div class="text">
									<h3>Duis mauris.</h3>
									<p>
										Mauris ut condimentum massa. Curabitur odio dui, semper id justo eu, tempor
										cursus libero. Donec iaculis, tellus non efficitur ullamcorper.
									</p>
								</div>
								<a href="/" class="cta-go"><Redirect /></a>
							</div>
						</div>
						<img src="https://nextweb.fi/_nuxt/portfolio_getsport_io.8b5ca986.webp" alt="" />
					</div>
					<div class="project-card">
						<div class="content">
							<div class="heading">
								<div class="text">
									<h3>Duis mauris.</h3>
									<p>
										Mauris ut condimentum massa. Curabitur odio dui, semper id justo eu, tempor
										cursus libero. Donec iaculis, tellus non efficitur ullamcorper.
									</p>
								</div>
								<a href="/" class="cta-go"><Redirect /></a>
							</div>
						</div>
						<img src="https://nextweb.fi/_nuxt/portfolio_getsport_io.8b5ca986.webp" alt="" />
					</div>
					<div class="project-card">
						<div class="content">
							<div class="heading">
								<div class="text">
									<h3>Duis mauris.</h3>
									<p>
										Mauris ut condimentum massa. Curabitur odio dui, semper id justo eu, tempor
										cursus libero. Donec iaculis, tellus non efficitur ullamcorper.
									</p>
								</div>
								<a href="/" class="cta-go"><Redirect /></a>
							</div>
						</div>
						<img src="https://nextweb.fi/_nuxt/portfolio_getsport_io.8b5ca986.webp" alt="" />
					</div>
				</div>
				<div class="project-repo">
					<div class="repo">
						<div class="label">
							<h5>Project Name</h5>
							<div class="stack">
								<small>Laravel</small>
								<small>Wordpress</small>
								<small>Vue</small>
							</div>
						</div>
						<div class="cta-btns">
							<div class="cta-github">
								<Github fill="black" />
							</div>
							<div class="cta-link2">
								<Redirect fill="black" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="collaborate">
		<div class="wrapper">
			<h1>Starting a new project or want to collaborate with me?</h1>
			<div class="contact">
				<div class="cta-btns">
					<a href="" class="cta-talk">
						<span>Let's talk</span>
						<Arrow class="arrow-icon" width="37" height="18" fill="#1e312e" />
					</a>
					<a href="" class="cta-resume">
						<span>Download Resume</span>
						<Download />
					</a>
				</div>
				<div class="social">
					<h5>keenalevine97@gmail.com</h5>
					<div class="media">
						<a href="https://github.com/destiny0114"><Github /></a>
						<a href="https://twitter.com/home"><Twitter /></a>
						<a href="mailto:keenelevine97@gmail.com"><Gmail /></a>
					</div>
				</div>
			</div>

			<footer class="footer">
				<h5>© Keena Levine 2022</h5>
				<h5>Back to top <span><Arrowup /></span></h5>
			</footer>
		</div>
	</section>
</main>

<style>
	section.hero {
		background: linear-gradient(107.47deg, #304b41 -19.31%, #0c181c 109.3%);
	}

	.hero .content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 4em;
		margin-top: 11em;
	}

	.hero .content h1.heading {
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 6.4rem;
		line-height: 120%;
		text-align: center;
		color: #ffffff;
		max-width: 970px;
		margin: 0;
	}

	.hero .content p.subhead {
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 150%;
		text-align: center;
		color: #d0e0e3;
		max-width: 610px;
	}

	.hero .cta-btns {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 4em;
	}

	.hero .cta-btns .primary-cta {
		text-decoration: none;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 120%;
		padding: 1em 2em;
		background-color: #15dcae;
		color: #32524d;
		border-radius: 0.5em;
	}

	.hero .cta-btns .secondary-cta {
		text-decoration: none;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 120%;
		color: #ffea7b;
		display: block;
	}

	.hero .secondary-cta :global(.arrow-icon) {
		transition: transform 0.3s;
	}

	.hero .secondary-cta:hover :global(.arrow-icon) {
		transform: translateX(10px);
	}

	.hero .hero-img {
		width: 1200px;
		padding: 4em;
	}

	section.marquee {
		position: relative;
		overflow: hidden;
		display: flex;
		padding: 2em 0;
		background-color: #272b2c;
	}

	.marquee-list {
		display: flex;
		justify-content: flex-start;
		flex-shrink: 0;
		align-items: center;
		white-space: nowrap;
	}

	.marquee-text {
		color: white;
		font-family: 'Newsreader', serif;
		font-style: normal;
		font-weight: 300;
		font-size: 5rem;
		display: block;
	}

	.marquee-icon :global(svg) {
		width: 3em;
		height: 100%;
		margin: 0 2em;
	}

	section.services {
		background: #29413a;
		box-shadow: 0px -8px 25px rgba(0, 0, 0, 0.25);
		padding: 15em 0;
	}

	.services-content.wrapper {
		display: flex;
	}

	.services-content .left-col {
		width: 20%;
	}

	.services-content .right-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 7em;
	}

	.services-content .left-col h5 {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 1.3rem;
		letter-spacing: 0.25em;
		color: #85aeac;
		text-transform: uppercase;
		margin: 0;
	}

	.services-content .right-col .title {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 6.4rem;
		color: #b2cfc599;
		line-height: 80%;
		margin: 0;
	}

	.services-content .title .highlight {
		color: #e6e0c6;
	}

	.services-content .right-col .description {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 7em;
	}

	.services-content .description p {
		max-width: 35%;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 1.6rem;
		line-height: 145%;
		color: #d0e0e3;
	}

	.services-content .description .experience {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 10em;
	}

	.services-content .description .experience h5 {
		font-family: 'Rubik', sans-serif;
		font-size: 6.4rem;
		font-weight: 400;
		text-align: left;
		color: #b2cfc5;
		margin: 0;
	}

	.services-content .description .experience small {
		font-family: 'Rubik', sans-serif;
		font-weight: 200;
		font-size: 1.4rem;
		line-height: 1.7rem;
		color: #7e8f8b;
		margin: 0;
		max-width: 5em;
	}

	.services-content .right-col .process {
		display: flex;
		justify-content: flex-start;
		align-items: stretch;
		gap: 4em;
	}

	.services-content .process .card {
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding: 4em;
		background: #264d49;
		box-shadow: 10px 10px 50px rgba(35, 40, 46, 0.25);
	}

	.process .card .numeric {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 4.8rem;
		color: #92a9a44d;
	}

	.process .card h5,
	.process .card p {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		line-height: 2.8rem;
		color: #e6e0c6;
		margin: 0;
	}

	.process .card h5 {
		font-size: 2.4rem;
	}

	.process .card p {
		font-size: 1.4rem;
		max-width: 15em;
	}

	section.about {
		background: #1e312e;
		padding: 15em 0;
		position: relative;
	}

	.about .square {
		position: absolute;
		width: 85em;
		left: -3em;
		top: 6em;
	}

	.about .art {
		position: absolute;
		z-index: 15;
	}

	.about .plus-1 {
		left: 8em;
		top: 96em;
	}

	.about .plus-2 {
		left: 30em;
	}

	.about .plus-3 {
		right: 60%;
		top: 80em;
	}

	.about .hire {
		display: flex;
		margin-bottom: 17em;
	}

	.hire .left-col {
		flex: 1;
		position: relative;
	}

	.hire .left-col .profile-img {
		position: absolute;
		min-width: 60em;
		bottom: -8em;
		z-index: 5;
	}

	.hire .right-col {
		max-width: 75em;
		display: flex;
		flex-direction: column;
		gap: 3em;
	}

	.hire .right-col h5 {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 1.3rem;
		letter-spacing: 0.25em;
		color: #b2cfc5;
		text-transform: uppercase;
		margin: 0;
	}

	.hire .right-col .title {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 7.4rem;
		color: #b2cfc5;
		line-height: 7.6rem;
		margin: 0;
	}

	.hire .title .highlight {
		color: #fff7ac;
	}

	.hire .description {
		display: flex;
		flex-direction: column;
	}

	.hire .description p {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 200;
		font-size: 1.5rem;
		line-height: 145%;
		color: white;
	}

	.about .expertise {
		display: flex;
		flex-direction: row;
		gap: 10em;
		margin-top: 35em;
	}

	.expertise .left-col {
		max-width: 50%;
	}

	.expertise .left-col .title {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 7.4rem;
		color: #b2cfc5;
		line-height: 7.6rem;
		margin: 0;
	}

	.expertise .left-col .skillset {
		margin-top: 10em;
		display: grid;
		grid-template-columns: repeat(4, min-content);
		gap: 3em;
	}

	.expertise .left-col .skillset .icon {
		box-shadow: 0px 4px 40px 0px #09090c1a;
	}

	.expertise .title .highlight {
		color: #fff7ac;
	}

	.expertise .right-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 3em;
	}

	.expertise .right-col h5 {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 1.3rem;
		letter-spacing: 0.25em;
		color: #85aeac;
		text-transform: uppercase;
		margin: 0;
		text-align: right;
	}

	.expertise .right-col p {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 145%;
		color: #d0e0e3;
	}

	section.showcase {
		padding: 10em 0;
		background-color: #fffcf1;
	}

	.showcase .heading h5 {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 1.3rem;
		letter-spacing: 0.25em;
		color: #1e312e;
		text-transform: uppercase;
	}

	.showcase .heading h1 {
		font-family: Rubik;
		font-size: 9.6rem;
		font-weight: 700;
		text-align: left;
		margin: 0;
		margin-left: -5px;
		color: #1e312e;
		text-transform: uppercase;
	}

	.showcase .project-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 8em;
		margin-top: 6em;
	}

	.showcase .project-grid {
		display: grid;
		gap: 2.5em;
		grid-template-columns: 56rem 50rem;
		grid-template-rows: 50rem;
	}

	.showcase .project-grid .project-card {
		height: 50rem;
		border-radius: 30px;
		box-shadow: 4px 8px 4px 0px #0000001a;
		position: relative;
		overflow: hidden;
	}

	.showcase .project-grid .project-card img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		user-select: none;
		transform-origin: 0 0;
		transition: transform 0.5s ease;
	}

	.showcase .project-grid .project-card .content {
		background: linear-gradient(180deg, rgba(15, 27, 30, 0.65) 33.33%, rgba(20, 45, 33, 0) 100%);
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		padding: 5em;
	}

	.showcase .project-grid .project-card .content .heading {
		display: flex;
		justify-content: space-between;
	}

	.showcase .project-grid .project-card .content .heading .text {
		max-width: 70%;
	}

	.showcase .project-grid .project-card .content .heading .text h3 {
		font-family: Rubik, sans-serif;
		font-size: 4rem;
		font-weight: 500;
		line-height: 4.7rem;
		color: white;
		margin: 0;
	}

	.showcase .project-grid .project-card .content .heading .text p {
		font-family: Rubik, sans-serif;
		font-size: 1.4rem;
		font-weight: 400;
		line-height: 2rem;
		color: white;
	}

	.showcase .project-grid .project-card .content .heading .cta-go {
		text-decoration: none;
		backdrop-filter: blur(50px);
		background-color: #ffffff05;
		border-radius: 99px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 64px;
		height: 64px;
		padding: 20px;
		opacity: 0;
		margin-top: 20px;
		transition: all 0.3s ease-in-out;
	}

	.showcase .project-grid .project-card .content .heading .cta-go:hover {
		scale: 0.9;
	}

	.showcase .project-grid .project-card:hover img {
		transform: scale(1.2);
	}

	.showcase .project-grid .project-card:hover .content .heading .cta-go {
		margin-top: 0;
		opacity: 1;
	}

	.showcase .project-grid .project-card:first-child {
		grid-column: 1 / span 1;
		grid-row: 1/2;
		min-width: 56rem;
	}

	.showcase .project-grid .project-card:nth-child(2) {
		grid-column: 2 / span 1;
		grid-row: 1/2;
		min-width: 50rem;
	}

	.showcase .project-grid .project-card:nth-child(3) {
		grid-column: 1 / span 1;
		grid-row: 2/3;
		min-width: 50rem;
		width: 50rem;
	}

	.showcase .project-grid .project-card:nth-child(4) {
		grid-column: 2 / span 1;
		grid-row: 2/3;
		min-width: 56rem;
		transform: translateX(-6rem);
	}

	.showcase .project-repo {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	.showcase .project-repo .repo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90em;
		border-bottom: 1px solid #000000;
		padding-left: 2em;
		padding-right: 2em;
		padding-bottom: 0.5em;
	}

	.showcase .project-repo .repo .label {
		display: flex;
		align-items: baseline;
		gap: 3em;
	}

	.showcase .project-repo .repo .label h5 {
		font-family: Rubik, sans-serif;
		font-size: 2rem;
		font-weight: 400;
		line-height: 2.4rem;
		color: #1e312e;
		margin: 0;
	}

	.showcase .project-repo .repo .label .stack {
		display: flex;
		gap: 1em;
	}

	.showcase .project-repo .repo .label .stack small {
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 300;
		line-height: 2.2rem;
		color: #1e312e;
	}

	.showcase .project-repo .repo .cta-btns {
		display: flex;
		align-items: center;
		gap: 2em;
	}

	section.collaborate {
		background: #1e312e;
		padding-top: 8em;
		padding-bottom: 2em;
	}

	.collaborate h1 {
		font-family: Rubik, sans-serif;
		font-size: 7.4rem;
		font-weight: 300;
		line-height: 10.3rem;
		color: white;
		margin: 0;
		max-width: 15em;
	}

	.collaborate .contact {
		display: flex;
		justify-content: space-between;
		margin: 4em 0;
	}

	.collaborate .contact .cta-btns {
		display: flex;
		align-items: center;
		gap: 5em;
	}

	.collaborate .contact .cta-btns .cta-talk {
		text-decoration: none;
		font-family: Rubik, sans-serif;
		font-size: 3.5rem;
		font-weight: 300;
		line-height: 3.8rem;
		color: #1e312e;
		background-color: #15dcae;
		border-radius: 50px;
		padding: 0.5em 1.2em;
	}

	.collaborate .contact .cta-btns .cta-talk > :global(.arrow-icon) {
		transition: transform 0.3s;
	}

	.collaborate .contact .cta-btns .cta-talk:hover > :global(.arrow-icon) {
		transform: translateX(10px);
	}

	.collaborate .contact .cta-btns .cta-resume {
		text-decoration: none;
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.8rem;
		color: white;
		display: flex;
		align-items: center;
	}

	.collaborate .contact .social {
		display: flex;
		align-items: center;
		gap: 2em;
	}

	.collaborate .contact .social h5 {
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.8rem;
		color: white;
		margin: 0;
	}

	.collaborate footer {
		display: flex;
		justify-content: space-between;
	}

	.collaborate footer h5 {
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.8rem;
		color: #87b6a1;
		margin: 0;
	}

	.collaborate footer h5:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	@media only screen and (min-width: 680px) {
		.hero-img {
			width: 600px;
		}
	}

	@media only screen and (min-width: 920px) {
		.hero-img {
			width: 900px;
		}
	}

	@media only screen and (min-width: 1440px) {
		.wrapper {
			max-width: 1440px;
			margin: 0 auto;
		}
	}
</style>
