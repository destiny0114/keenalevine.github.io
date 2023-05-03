<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import MockUp from '$lib/images/mockup.png';
	import Profile from '$lib/images/profile.png';

	import Subtract from '$lib/assets/subtract.svg?raw';
	import Square from '$lib/assets/square.svg?raw';
	import Plus from '$lib/assets/plus.svg?raw';

	let marquee;

	onMount(() => {
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="8"
							fill="none"
							viewBox="0 0 17 8"
						>
							<path
								fill="#FFEA7B"
								d="M16.836 4.354a.5.5 0 0 0 0-.708L13.654.464a.5.5 0 1 0-.707.708L15.775 4l-2.828 2.828a.5.5 0 1 0 .707.708l3.182-3.182ZM.482 4.5h16v-1h-16v1Z"
							/>
						</svg>
					</a>
				</div>

				<img class="hero-img" src={MockUp} alt="hero_image" />
			</div>
		</div>
	</section>
	<section class="marquee" bind:this={marquee}>
		<ul class="marquee-list">
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
			</li>
			<li class="marquee-elem marquee-text">Design</li>
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
			</li>
			<li class="marquee-elem marquee-text">Development</li>
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
			</li>

			<li class="marquee-elem marquee-text">Website</li>
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
			</li>

			<li class="marquee-elem marquee-text">E-commerce</li>
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
			</li>
			<li class="marquee-elem marquee-text">UI/UX</li>
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
			</li>
			<li class="marquee-elem marquee-text">Wordpress</li>
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
			</li>
			<li class="marquee-elem marquee-text">Webflow</li>
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
			</li>
			<li class="marquee-elem marquee-text">Wix</li>
			<li class="marquee-elem marquee-icon">
				{@html Subtract}
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
	<section class="about">
		<div class="wrapper">
			<div class="icon plus-1">
				{@html Plus}
			</div>
			<div class="icon plus-2">
				{@html Plus}
			</div>
			<div class="icon plus-3">
				{@html Plus}
			</div>
			<div class="square">
				{@html Square}
			</div>
			<div class="hire">
				<div class="left-col">
					<img src={Profile} alt="profile" class="profile-img" />
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
		</div>
	</section>
</main>

<style>
	section.hero {
		background: linear-gradient(107.47deg, #304b41 -19.31%, #0c181c 109.3%);
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 4em;
		margin-top: 11em;
	}

	.content h1.heading {
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

	.content p.subhead {
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 150%;
		text-align: center;
		color: #d0e0e3;
		max-width: 610px;
	}

	.cta-btns {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 4em;
	}

	.cta-btns .primary-cta {
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

	.cta-btns .secondary-cta {
		text-decoration: none;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 120%;
		color: #ffea7b;
		display: block;
	}

	.secondary-cta svg {
		margin-left: 0.5em;
		transition: transform 0.3s;
	}

	.secondary-cta:hover svg {
		transform: translateX(10px);
	}

	.hero-img {
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
		top: 2em;
	}

	.about .icon {
		position: absolute;
		z-index: 15;
	}

	.about .plus-1 {
		left: 8em;
		bottom: 5em;
	}

	.about .plus-2 {
		left: 30em;
	}

	.about .plus-3 {
		right: 60%;
		bottom: 18em;
	}

	.about .hire {
		display: flex;
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
