<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main>
	<div class="wrapper">
		<Navbar />

		<section class="hero">
			<h1>Passionate to craft Amazing Product.</h1>
			<p>
				I am a web developer with three years experience who is passionate about web development and
				figuring out solutions to improve usability and functionality of websites and systems.
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
		</section>
	</div>
</main>

<style>
	main {
		margin: 1.4em;
	}

	@media only screen and (min-width: 1440px) {
		.wrapper {
			max-width: 1440px;
			margin: 0 auto;
		}
	}
</style>
