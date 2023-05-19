<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Responsive from '$lib/components/Responsive.svelte';
	import MobileContactPage from '$lib/pages/mobile/ContactPage.svelte';
	import TabletContactPage from '$lib/pages/tablet/ContactPage.svelte';
	import DesktopContactPage from '$lib/pages/desktop/ContactPage.svelte';
</script>

<main>
	<section class="hero">
		<div class="wrapper">
			<Navbar />

			<Responsive query="(max-width: 767px)" let:matches>
				{#if matches}
					<MobileContactPage />
				{/if}
			</Responsive>

			<Responsive query="(min-width: 768px) and (max-width: 1439px)" let:matches>
				{#if matches}
					<TabletContactPage />
				{/if}
			</Responsive>

			<Responsive query="(min-width: 1440px)" let:matches>
				{#if matches}
					<DesktopContactPage />
				{/if}
			</Responsive>
		</div>
	</section>
</main>

<style>
	/* Mobile is <600

Tablet portrait (768px) is between 600-900

Tablet landscape (1024px) is 900-1200

Desktop (1368px or 1440px) is 1200-1800

Big ass screen/iMac is >1800 */
	section.hero {
		background: linear-gradient(107.47deg, #304b41 -19.31%, #0c181c 109.3%);
		min-height: 100vh;
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
	}
</style>
