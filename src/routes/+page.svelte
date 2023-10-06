<script>
	import { gsap } from '$lib/helpers/gsap';
	import { onMount } from 'svelte';

	import Navbar from '$lib/components/Navbar.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import { Arrow, Subtract, Square, Plus, PS, AI, XD, Figma, Wordpress, Webflow, Wix, Linkedin, Github, Download, Gmail, Twitter, Arrowup } from '$lib/icons';

	import { AccordionStore } from '$lib/stores/AccordionStore';

	let marquee;
	let activeAccordionIndex = 0;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		const hashID = sessionStorage.getItem('hash');

		if (hashID) {
			document.querySelector(hashID).scrollIntoView({
				behavior: 'smooth'
			});
			sessionStorage.removeItem('hash');
		}

		function initScrollAnimation() {
			const tl = gsap.timeline();

			tl.to('section.hero .content .heading', {
				opacity: 1,
				duration: 1,
				ease: 'power3.inOut'
			});
			tl.to('section.hero .content .subhead', {
				opacity: 1,
				y: 0,
				ease: 'power4.inOut'
			});
			tl.to('section.hero .cta-btns .primary-cta', {
				opacity: 1,
				x: 0,
				ease: 'back.out'
			});
			tl.to('section.hero .cta-btns .secondary-cta', {
				opacity: 1,
				x: 0,
				ease: 'back.out'
			});

			gsap
				.timeline({
					scrollTrigger: {
						trigger: 'section.services',
						start: 'top center',
						end: 'bottom center',
						toggleActions: 'play none none none'
					}
				})
				.to('section.services .left-col h5', {
					opacity: 1,
					x: 0
				})
				.to('section.services .right-col .title span', {
					y: 0,
					duration: 1.7,
					ease: 'power2'
				})
				.to(
					'section.services .right-col .description > *',
					{
						opacity: 1,
						stagger: 0.5
					},
					'-=0.75'
				)
				.to(
					'section.services .right-col .process .card',
					{
						opacity: 1,
						y: 0,
						duration: 1.7,
						ease: 'power2',
						stagger: 0.5
					},
					'-=0.5'
				);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: 'section.about .hire',
						start: 'top center',
						end: 'bottom center',
						toggleActions: 'play none none none'
					}
				})
				.to('section.about .square svg', {
					x: 0,
					opacity: 1,
					rotation: 180,
					duration: 1
				})
				.to('section.about .hire img.profile-img', { opacity: 1 })
				.to('section.about .hire h5', { x: 0, opacity: 1 })
				.to('section.about .hire .title', { opacity: 1, ease: 'back.out' })
				.to('section.about .hire .description', { opacity: 1, ease: 'back.out' })
				.to(
					'section.about .art svg',
					{
						opacity: 1,
						y: -25,
						duration: 2,
						stagger: {
							repeat: -1,
							each: 0.4,
							yoyo: true
						},
						ease: 'power2.easeOut'
					},
					'-=1'
				);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: 'section.about .expertise',
						start: 'top center',
						end: 'bottom center',
						toggleActions: 'play none none none'
					}
				})
				.to('section.about .expertise .info  > *', { x: 0, opacity: 1, stagger: 0.5 })
				.to('section.about .expertise .title', {
					opacity: 1,
					ease: 'back.out'
				})
				.to('section.about .expertise .skillset', {
					opacity: 1
				})
				.to('section.about .expertise .accordion > *', {
					y: 0,
					opacity: 1,
					stagger: 0.5,
					ease: 'power2.easeOut'
				});

			gsap
				.timeline({
					scrollTrigger: {
						trigger: 'section.collaborate',
						start: 'top bottom',
						end: 'bottom bottom',
						toggleActions: 'play none none none'
					}
				})
				.to('section.collaborate h1 span.text', {
					y: 0,
					duration: 1.5,
					stagger: 0.5,
					ease: 'power2'
				})
				.to('section.collaborate .contact .cta-btns > *', {
					opacity: 1,
					stagger: 0.5,
					ease: 'power2'
				})
				.to('section.collaborate .contact .social > *', {
					opacity: 1,
					stagger: 0.5,
					ease: 'power2'
				});
		}

		function resizeMarquee() {
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
		}

		initScrollAnimation();

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
				<p class="subhead">I am a web developer with three years experience who is passionate about web development and figuring out solutions to improve usability and functionality of websites and systems.</p>

				<div class="cta-btns">
					<a href="/work" class="primary-cta">My Work</a>
					<a href="/images/resume.pdf" class="secondary-cta" download>
						<span>Download Resume</span>
						<Arrow class="arrow-icon" />
					</a>
				</div>

				<img class="hero-img" src="/images/hero.png" alt="hero_image" />
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
				<h3 class="title">
					<span class="text">I can <span class="highlight">help</span> you with ...</span>
				</h3>
				<div class="description">
					<p>I specialise in offering bespoke web design and web development services to small and big businesses alike. My aim is to help businesses establish a strong online presence and connect with their target audience effectively.</p>
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
						<p>I make web designs that engage your audience and create the user experience you want.</p>
					</div>
					<div class="card">
						<div class="numeric">02</div>
						<h5>Development</h5>
						<p>Bringing visuals to life through developing highly functional web solutions.</p>
					</div>
					<div class="card">
						<div class="numeric">03</div>
						<h5>The Full Package</h5>
						<p>Get the best of both worlds for your website, capture your brand identity and get fully functional features.</p>
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
						<p>I am a self-employed, self-motivated, and self-taught web developer with three years experience who is passionate about web development and figuring out solutions to improve usability and functionality of websites and systems.</p>
						<p>My skills are manipulating and customizing themes and plugins, building themes from scratch, e-commerce implementation and advanced programming. I also convert designs from any format (Photoshop, Illustrator, Image, Figma, other or even a paper sketch) to a fully working website that’s either based on a website builder or coded free handedly. My conversions are pixel perfect and 100% faithful to the source material without exceptions.</p>
						<p>And thanks to my expertise in various of web development languages include frontend and backend, I can build fully customizable Web applications following your vision and the functionalities desired.</p>
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
					<div class="info">
						<h5>Expertise</h5>
						<p>I specialise in offering bespoke web design and web development services to small and big businesses alike. My aim is to help businesses establish a strong online presence and connect with their target audience effectively.</p>
					</div>

					<Accordion bind:current={activeAccordionIndex}>
						{#each $AccordionStore as item, index}
							<AccordionItem {item} key={index} />
						{/each}
					</Accordion>
				</div>
			</div>
		</div>
	</section>
	<section class="collaborate">
		<div class="wrapper">
			<h1><span class="text">Starting a new project or want to collaborate with me?</span></h1>
			<div class="contact">
				<div class="cta-btns">
					<a href="/contact" class="cta-talk">
						<span>Let's talk</span>
						<Arrow class="arrow-icon" width="37" height="18" fill="#1e312e" />
					</a>
					<a href="/images/resume.pdf" class="cta-resume" download>
						<span>Download Resume</span>
						<Download />
					</a>
				</div>
				<div class="social">
					<h5>keenalevine97@gmail.com</h5>
					<div class="media">
						<a href="https://www.linkedin.com/in/keena-levine"><Linkedin /></a>
						<a href="https://github.com/destiny0114"><Github /></a>
						<a href="https://twitter.com/home"><Twitter /></a>
						<a href="mailto:keenelevine97@gmail.com"><Gmail /></a>
					</div>
				</div>
			</div>

			<footer class="footer">
				<h5>© Keena Levine 2022</h5>
				<button class="cta-scroll" on:click={scrollToTop}>
					Back to top <span><Arrowup /></span>
				</button>
			</footer>
		</div>
	</section>
</main>

<style>
	section.hero {
		overflow: hidden;
		background: linear-gradient(107.47deg, #304b41 -19.31%, #0c181c 109.3%);
	}

	.hero .content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 4em;
		margin-top: 2em;
	}

	.hero .content h1.heading {
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 2.5rem;
		line-height: 120%;
		text-align: center;
		color: #ffffff;
		margin: 0;
		opacity: 0;
	}

	.hero .content p.subhead {
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 150%;
		text-align: center;
		color: #d0e0e3;
		opacity: 0;
		transform: translateY(50px);
	}

	.hero .cta-btns {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 2em;
	}

	.hero .cta-btns .primary-cta {
		text-decoration: none;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 120%;
		padding: 0.8em 2em;
		background-color: #15dcae;
		color: #32524d;
		border-radius: 0.5em;
		opacity: 0;
		transform: translateX(-100px);
	}

	.hero .cta-btns .secondary-cta {
		text-decoration: none;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 120%;
		color: #ffea7b;
		transform: translateX(100px);
		opacity: 0;
	}

	.hero .secondary-cta :global(.arrow-icon) {
		transition: transform 0.3s;
	}

	.hero .secondary-cta:hover :global(.arrow-icon) {
		transform: translateX(10px);
	}

	.hero .hero-img {
		width: 100%;
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
		padding: 2em 0;
		overflow: hidden;
	}

	.services-content.wrapper {
		display: flex;
		flex-direction: column;
	}

	.services-content .left-col {
		width: 100%;
	}

	.services-content .left-col h5 {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 1.3rem;
		letter-spacing: 0.25em;
		color: #85aeac;
		text-transform: uppercase;
		margin-bottom: 3rem;
		opacity: 0;
		transform: translateX(-100px);
	}

	.services-content .right-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 4em;
	}

	.services-content .right-col .title {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 3.4rem;
		color: #b2cfc599;
		line-height: 120%;
		margin: 0;
		overflow: hidden;
	}

	.services-content .right-col .title .text {
		display: block;
		transform: translateY(100px);
	}

	.services-content .title .highlight {
		color: #e6e0c6;
	}

	.services-content .right-col .description {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 4em;
	}

	.services-content .description p {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 145%;
		color: #d0e0e3;
		opacity: 0;
	}

	.services-content .description .experience {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		opacity: 0;
	}

	.services-content .description .experience h5 {
		font-family: 'Rubik', sans-serif;
		font-size: 6.4rem;
		font-weight: 400;
		text-align: center;
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
		align-self: center;
	}

	.services-content .right-col .process {
		display: flex;
		justify-content: flex-start;
		align-items: stretch;
		flex-direction: column;
		gap: 4em;
	}

	.services-content .process .card {
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding: 2.5em;
		background: #264d49;
		box-shadow: 10px 10px 50px rgba(35, 40, 46, 0.25);
		opacity: 0;
		transform: translateY(100px);
	}

	.process .card .numeric {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 4rem;
		color: #92a9a44d;
	}

	.process .card h5,
	.process .card p {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		color: #e6e0c6;
		margin: 0;
	}

	.process .card h5 {
		font-size: 2.4rem;
		line-height: 2.8rem;
	}

	.process .card p {
		font-size: 1.2rem;
		line-height: 2rem;
	}

	section.about {
		background: #1e312e;
		position: relative;
		padding: 2em 0;
		overflow: hidden;
	}

	.about .square {
		position: absolute;
		width: auto;
		left: 9em;
		top: 8em;
		transform: scale(1.5);
	}

	.about .square :global(svg) {
		opacity: 0;
		transform: translateX(-300px);
	}

	.about .art {
		position: absolute;
		z-index: 15;
	}

	.about .art :global(svg) {
		opacity: 0;
	}

	.about .plus-1 {
		left: 4em;
		top: 6em;
	}

	.about .plus-2 {
		right: 4em;
		top: 15em;
	}

	.about .plus-3 {
		right: 60%;
		top: 35em;
	}

	.about .hire {
		display: flex;
		flex-direction: column;
	}

	.hire .left-col {
		flex: 1;
		position: relative;
	}

	.hire .left-col .profile-img {
		position: absolute;

		left: 50%;
		transform: translateX(-50%);
		width: 30em;
		z-index: 5;
		opacity: 0;
	}

	.hire .right-col {
		display: flex;
		flex-direction: column;
		margin-top: 40em;
	}

	.hire .right-col h5 {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 1.3rem;
		letter-spacing: 0.25em;
		color: #b2cfc5;
		text-transform: uppercase;
		opacity: 0;
		transform: translateX(100px);
	}

	.hire .right-col .title {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 4.4rem;
		color: #b2cfc5;
		line-height: 4.6rem;
		margin: 0;
		opacity: 0;
	}

	.hire .title .highlight {
		color: #fff7ac;
	}

	.hire .description {
		display: flex;
		flex-direction: column;
		opacity: 0;
	}

	.hire .description p {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 200;
		font-size: 1.5rem;
		line-height: 145%;
		color: white;
	}

	.expertise .left-col .title {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 4.4rem;
		color: #b2cfc5;
		line-height: 5.6rem;
		margin: 0;
		opacity: 0;
	}

	.expertise .title .highlight {
		color: #fff7ac;
	}

	.expertise .left-col .skillset {
		display: grid;
		grid-template-columns: repeat(8, min-content);
		gap: 1em;
		justify-content: space-evenly;
		margin: 2em 0;
		opacity: 0;
	}

	.expertise .left-col .skillset .icon {
		grid-column: span 2;
		box-shadow: 0px 4px 40px 0px #09090c1a;
	}

	.expertise .left-col .skillset .icon:nth-last-child(3) {
		grid-column-end: 4;
	}

	.expertise .left-col .skillset .icon:nth-last-child(2) {
		grid-column-end: 6;
	}

	.expertise .left-col .skillset .icon:last-child {
		grid-column-end: 8;
	}

	.expertise .right-col {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}
	.expertise .right-col .info > * {
		opacity: 0;
		transform: translateX(100px);
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
		font-size: 1.3rem;
		line-height: 145%;
		color: #d0e0e3;
	}

	section.collaborate {
		background: #1e312e;
		padding-top: 8em;
		padding-bottom: 2em;
		overflow: hidden;
	}

	.collaborate h1 {
		font-family: Rubik, sans-serif;
		font-size: 3.4rem;
		font-weight: 300;
		line-height: 4.6rem;
		color: white;
		margin: 0;
		max-width: 15em;
		overflow: hidden;
	}

	.collaborate h1 span {
		display: block;
		transform: translateY(200px);
	}

	.collaborate .contact {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 2em 0;
		gap: 2em;
	}

	.collaborate .contact .cta-btns {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
	}

	.collaborate .contact .cta-btns > * {
		opacity: 0;
	}

	.collaborate .contact .cta-btns .cta-talk {
		text-decoration: none;
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 300;
		line-height: 1.8rem;
		color: #1e312e;
		background-color: #15dcae;
		border-radius: 50px;
		padding: 0.5em 1.2em;
	}

	.collaborate .contact .cta-btns .cta-talk > :global(.arrow-icon) {
		width: 20px;
		height: 100%;
		transition: transform 0.3s;
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

	.collaborate .contact .cta-btns .cta-resume span {
		width: min-content;
	}

	.collaborate .contact .social {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
	}

	.collaborate .contact .social {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
	}

	.collaborate .contact .social > * {
		opacity: 1;
	}

	.collaborate .contact .social h5 {
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.8rem;
		color: white;
		margin: 0;
	}

	.collaborate .contact .social .media {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	.collaborate .contact .social .media a {
		padding: 0;
	}

	.collaborate footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.collaborate footer h5,
	.collaborate footer button {
		font-family: Rubik, sans-serif;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.8rem;
		color: #87b6a1;
		margin: 0;
	}

	.collaborate footer button {
		display: flex;
		align-items: center;
		gap: 1em;
		cursor: pointer;
		text-decoration: none;
		outline: none;
		background: none;
		border: none;
	}

	@media only screen and (max-width: 767px) {
		.wrapper {
			max-width: 767px;
			margin: 0 35px;
		}
	}

	@media only screen and (min-width: 768px) {
		.wrapper {
			max-width: 768px;
			margin: 0 auto;
		}

		.hero .content {
			gap: 2em;
		}
		.hero .content p.subhead {
			max-width: 44em;
		}

		.hero-img {
			min-width: 768px;
			padding: 2em;
		}

		.hero .cta-btns {
			flex-direction: row;
			gap: 4em;
		}

		section.services {
			padding: 2em;
		}

		.services-content .right-col {
			gap: 7em;
		}

		.services-content .right-col .description {
			flex-direction: row;
			gap: 7em;
		}

		.services-content .right-col .title {
			line-height: 80%;
			font-size: 6.4rem;
		}

		.services-content .description .experience h5 {
			text-align: left;
		}

		.services-content .description .experience small {
			align-self: auto;
			max-width: 5em;
		}

		.services-content .right-col .process {
			flex-direction: row;
			justify-content: space-between;
		}

		.services-content .process .card {
			padding: 2em;
			gap: 1em;
		}

		.process .card .numeric {
			font-size: 3.8rem;
		}

		.process .card h5 {
			font-size: 2.2rem;
			line-height: 2.8rem;
		}

		.process .card p {
			font-size: 1.2rem;
			max-width: 15em;
			line-height: 2.5rem;
		}

		section.about {
			padding: 2em;
		}

		.about .square {
			position: absolute;
			width: auto;
			left: 60%;
			top: 18em;
			transform: scale(2);
		}

		.about .art {
			position: absolute;
			z-index: 15;
		}

		.about .plus-1 {
			left: 4em;
			top: 6em;
		}

		.about .plus-2 {
			right: 4em;
			top: 15em;
		}

		.about .plus-3 {
			right: 60%;
			top: 35em;
		}

		.hire .left-col .profile-img {
			position: absolute;
			width: auto;
			z-index: 5;
			top: 2em;
			left: 50%;
			width: 60em;
			transform: translateX(-50%);
			scale: (1);
		}

		.hire .right-col {
			max-width: 75em;
			gap: 3em;
			margin-top: 60em;
			z-index: 10;
		}

		.hire .right-col h5 {
			margin: 0;
		}

		.hire .right-col .title {
			font-size: 7.4rem;
			line-height: 7.6rem;
		}

		section.collaborate {
			padding: 2em;
		}

		.collaborate h1 {
			font-size: 7.4rem;
			line-height: 10.3rem;
		}

		.collaborate .contact {
			flex-direction: row;
			margin: 4em 0;
			gap: unset;
		}

		.collaborate .contact .cta-btns {
			gap: 2em;
		}

		.collaborate .contact .cta-btns .cta-talk {
			font-size: 2.5rem;
			line-height: 3.8rem;
			padding: 0.5em 1.2em;
		}

		.collaborate .contact .cta-btns .cta-talk > :global(.arrow-icon) {
			width: 1em;
			transition: transform 0.3s;
		}

		.collaborate .contact .social {
			flex-direction: row;
			gap: 1em;
		}

		.collaborate .contact .cta-btns .cta-resume {
			font-size: 1.5rem;
			line-height: 1.8rem;
		}

		.collaborate .contact .cta-btns .cta-resume span {
			width: auto;
		}

		.collaborate footer h5 {
			font-size: 1.5rem;
			line-height: 1.8rem;
		}

		.collaborate footer button {
			font-size: 1.5rem;
		}
	}

	@media only screen and (min-width: 1440px) {
		.wrapper {
			max-width: 1440px;
			margin: 0 auto;
		}

		.hero .content {
			margin-top: 11em;
		}

		.hero .content h1.heading {
			font-size: 6.4rem;
			max-width: 970px;
		}

		.hero .content p.subhead {
			font-size: 1.5rem;
			max-width: 610px;
		}

		.hero .cta-btns {
			flex-direction: row;
			gap: 4em;
		}

		.hero .cta-btns .primary-cta {
			font-size: 1.5rem;
			padding: 1em 2em;
		}

		.hero .hero-img {
			width: 1200px;
			padding: 4em;
		}

		section.services {
			padding: 15em 0;
		}

		.services-content.wrapper {
			flex-direction: row;
		}

		.services-content .left-col {
			width: 20%;
		}

		.services-content .left-col h5 {
			margin: 0;
		}

		.services-content .right-col {
			gap: 7em;
		}

		.services-content .right-col .title {
			line-height: 80%;
			font-size: 6.4rem;
		}

		.services-content .description p {
			max-width: 35%;
			font-size: 1.6rem;
		}

		.services-content .right-col .description {
			flex-direction: row;
			gap: 7em;
		}

		.services-content .description .experience {
			width: 10em;
		}

		.services-content .description .experience h5 {
			text-align: left;
		}

		.services-content .description .experience small {
			align-self: auto;
			max-width: 5em;
		}

		.services-content .right-col .process {
			flex-direction: row;
			justify-content: flex-start;
		}

		.services-content .process .card {
			padding: 4em;
			gap: 2em;
		}

		.process .card .numeric {
			font-size: 4.8rem;
		}

		.process .card h5 {
			font-size: 2.4rem;
			line-height: 2.8rem;
		}

		.process .card p {
			font-size: 1.4rem;
			max-width: 15em;
			line-height: 2.8rem;
		}

		section.about {
			padding: 15em 0;
		}

		.about .square {
			position: absolute;
			width: 85em;
			left: -3em;
			top: 6em;
			transform: scale(1);
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
			flex-direction: row;
			margin-bottom: 17em;
		}

		.hire .left-col {
			flex: 1;
			position: relative;
		}

		.hire .left-col .profile-img {
			position: absolute;
			min-width: 60em;
			width: auto;
			left: -16em;
			top: -14em;
			bottom: -10em;
			z-index: 5;
			transform: scale(1);
		}

		.hire .right-col {
			max-width: 75em;
			gap: 3em;
			margin: 0;
			z-index: 10;
		}

		.hire .right-col h5 {
			margin: 0;
		}

		.hire .right-col .title {
			font-size: 7.4rem;
			line-height: 7.6rem;
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
			font-size: 7.4rem;
			line-height: 7.6rem;
		}

		.expertise .left-col .skillset {
			margin-top: 8em;
			grid-template-columns: repeat(4, min-content);
			gap: 3em;
			justify-content: left;
		}

		.expertise .left-col .skillset .icon {
			grid-column: unset;
		}

		.expertise .left-col .skillset .icon:nth-last-child(3) {
			grid-column-end: unset;
		}

		.expertise .left-col .skillset .icon:nth-last-child(2) {
			grid-column-end: unset;
		}

		.expertise .left-col .skillset .icon:last-child {
			grid-column-end: unset;
		}

		.expertise .right-col {
			gap: 3em;
		}

		.expertise .right-col h5 {
			font-size: 1.3rem;
			letter-spacing: 0.25em;
		}

		.expertise .right-col p {
			font-size: 1.6rem;
			line-height: 145%;
		}

		.collaborate .contact .cta-btns .cta-talk:hover > :global(.arrow-icon) {
			transform: translateX(10px);
		}

		.collaborate .contact .cta-btns {
			gap: 5em;
		}
	}
</style>
