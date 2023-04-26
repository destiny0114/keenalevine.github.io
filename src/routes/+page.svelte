<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import MockUp from '$lib/images/mockup.png';
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
		font-family: 'Rubik';
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
		font-family: 'Rubik';
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

	@media only screen and (min-width: 1440px) {
		.wrapper {
			max-width: 1440px;
			margin: 0 auto;
		}
	}
</style>
