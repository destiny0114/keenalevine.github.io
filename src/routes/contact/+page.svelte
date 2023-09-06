<script>
	import { gsap } from '$lib/helpers/gsap';
	import { onMount } from 'svelte';

	import Navbar from '$lib/components/Navbar.svelte';
	import { Line, Arrow } from '$lib/icons';

	onMount(() => {
		const tl = gsap.timeline();

		tl.to('.heading', { x: 0, opacity: 1, duration: 0.8 });
		tl.to('.heading-2', {
			opacity: 1,
			y: 0
		});
		tl.to('.heading-2 .line', { width: 'auto' });
		tl.to('p', { opacity: 1, y: 0 });
		tl.to('.cta-btn h5', { opacity: 1 });
		tl.to('.cta-email', { opacity: 1, marginLeft: 0, ease: 'back.out' });
	});
</script>

<main>
	<section class="hero">
		<div class="wrapper">
			<Navbar />

			<div class="content">
				<h1 class="heading">Drop a line</h1>
				<h1 class="heading-2"><Line class="line" />Let’s work together ?</h1>
				<p>If you’re interested in working with me, or collaborating on a project, i’m love to hear from you.</p>

				<div class="cta-btn">
					<h5>Get in touch</h5>
					<a href="mailto:keenelevine97@gmail.com" class="cta-email">
						<span>keenelevine97@gmail.com</span>
						<Arrow class="arrow-icon" width="27" height="100%" fill="#1e312e" />
					</a>
				</div>

				<footer class="footer">
					<h5>© Keena Levine 2022</h5>
				</footer>
			</div>
		</div>
	</section>
</main>

<style>
	section.hero {
		background: linear-gradient(107.47deg, #304b41 -19.31%, #0c181c 109.3%);
		min-height: 100vh;
	}

	.content h1 {
		font-family: Rubik, sans-serif;
		font-style: normal;
		font-size: 4.2rem;
		font-weight: 300;
	}

	.content p {
		font-family: Rubik, sans-serif;
		font-size: 1.3rem;
		font-weight: 300;
		color: white;
		opacity: 0;
		transform: translateY(50px);
	}

	.content .heading {
		color: white;
		opacity: 0;
		transform: translateX(-100px);
	}

	.content .heading-2 {
		text-align: right;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 0.5em;
		color: #b2cfc5;
		margin-left: 2em;
		opacity: 0;
		transform: translateY(100px);
	}

	.content .heading-2 > :global(.line) {
		display: none;
		transform-origin: top left;
		width: 0;
	}

	.content .cta-btn h5 {
		font-family: Rubik, sans-serif;
		font-size: 1.3rem;
		font-weight: 500;
		color: #ffd682;
		opacity: 0;
	}

	.content .cta-btn .cta-email {
		text-decoration: none;
		font-family: Rubik, sans-serif;
		font-size: 1.3rem;
		font-weight: 300;
		background-color: #ffd682;
		color: black;
		border-radius: 50px;
		padding: 0.7em 1.4em;
		margin-left: -100px;
		opacity: 0;
	}

	.content .cta-btn .cta-email > :global(.arrow-icon) {
		transition: transform 0.3s;
	}

	.content .cta-btn .cta-email:hover > :global(.arrow-icon) {
		transform: translateX(10px);
	}

	.content .footer {
		margin-top: 6em;
		margin-bottom: 2em;
	}

	.content .footer h5 {
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.8rem;
		color: #87b6a1;
		margin: 0;
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
			margin: 0 35px;
		}

		.content h1 {
			font-size: 7.2rem;
		}

		.content p {
			font-size: 2rem;
		}

		.content .cta-btn h5 {
			font-size: 2rem;
		}

		.content .cta-btn .cta-email {
			font-size: 2rem;
			padding: 0.7em 1.4em;
		}
	}

	@media only screen and (min-width: 1024px) {
		.wrapper {
			max-width: 1024px;
			min-height: 100vh;
			margin: 0 auto;
		}
	}

	@media only screen and (min-width: 1440px) {
		.wrapper {
			max-width: 1440px;
			min-height: 100vh;
			margin: 0 auto;
		}

		.content h1 {
			font-size: 10.2rem;
		}

		.content p {
			font-size: 2.4rem;
		}

		.content .heading {
			color: white;
		}

		.content .heading-2 {
			margin: 0;
		}

		.content .heading-2 > :global(.line) {
			display: block;
		}

		.content .cta-btn h5 {
			font-size: 2rem;
		}

		.content .cta-btn .cta-email {
			font-size: 2rem;
			padding: 0.7em 1.4em;
		}

		.content .cta-btn .cta-email > :global(.arrow-icon) {
			transition: transform 0.3s;
		}

		.content .cta-btn .cta-email:hover > :global(.arrow-icon) {
			transform: translateX(10px);
		}

		.content .footer {
			position: absolute;
			bottom: 0;
			padding-bottom: 2em;
			margin: 0;
		}

		.content .footer h5 {
			font-size: 1.5rem;
			line-height: 1.8rem;
		}
	}
</style>
