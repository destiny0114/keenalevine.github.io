<script>
	import { Close, Redirect, Info } from '$lib/icons';

	export let item;
	export let node;
	export let sliderElement;
	export let sliderPaginationElement;

	export let toggleInfo = false;
	export let currentSlide = 0;
	export let totalSlide = 0;

	function handleToggleInfo() {
		toggleInfo = !toggleInfo;
	}

	function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				toggleInfo = false;
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<div class="project-showcase" bind:this={node}>
	<div class="project-showcase-inner">
		<div class="project-showcase-bg" />
		<div class="project-content">
			<div class="project-content-info" class:shown={toggleInfo}>
				<div class="project-content-description">{item.description}</div>
				<div class="project-content-cta">
					{#if item.website}
						<a href={item.website} class="project-content-cta-link">
							<span>Visit Website</span>
							<Redirect fill="black" width={18} height={18} />
						</a>
					{/if}
					{#if item.repository}
						<a href={item.repository} class="project-content-cta-link">
							<span>Open Source</span>
						</a>
					{/if}
				</div>
			</div>
			<button class="project-content-btn" class:close={toggleInfo} on:click={handleToggleInfo} use:clickOutside>
				<Close class="cross" width={15} height={15} />
				<Info class="project-content-icon" />
			</button>
			<div class="project-content-slider">
				<div class="slider" class:hidden={toggleInfo}>
					<div class="slider-inner">
						<div class="swiper-container" bind:this={sliderElement}>
							<div class="swiper-wrapper" />
						</div>
					</div>
				</div>
				<div class="slider-control">
					<div class="swiper-pagination" bind:this={sliderPaginationElement} />
					<div class="swiper-counter">{currentSlide} / {totalSlide}</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.project-showcase {
		height: 100%;
		width: 100%;
		position: relative;
	}

	.project-showcase .project-showcase-inner {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}

	.project-showcase .project-showcase-inner .project-showcase-bg {
		background: url('images/showcase-bg.jpg') no-repeat 50% 50% / cover;
		background-size: cover;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 100%;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-info {
		display: flex;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-info .project-content-description {
		font-size: 1.5rem;
		line-height: 1.5em;
		font-weight: 300;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-info .project-content-cta {
		position: absolute;
		right: 80px;
		text-align: right;
		display: flex;
		gap: 2rem;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-info .project-content-cta .project-content-cta-link {
		display: flex;
		align-items: center;
		font-size: 1.3rem;
		font-weight: 300;
		color: #000;
		transition: all 0.3s ease;
		pointer-events: all;
		text-decoration: none;
		gap: 10px;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-btn {
		outline: none;
		border: none;
		text-decoration: none;
		position: absolute;
		top: 18px;
		right: 23px;
		height: 38px;
		width: 38px;
		border-radius: 50%;
		padding: 1rem;
		transition: all 0.3s, visibility 0s 0.3s;
		transform: translateZ(35px);
		z-index: 3;
		opacity: 0.7;
		font-family: 'Rubik', sans-serif;
		font-size: 1.3rem;
		font-weight: 400;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-btn.close {
		width: 40px;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-btn :global(.cross) {
		position: absolute;
		top: calc(50% - 7px);
		left: calc(50% - 7px);
		transition: all 0.3s ease;
		opacity: 0;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-btn.close :global(.cross) {
		opacity: 1;
		transition-delay: 0.3s;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-btn:after {
		background: #fff;
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		border-radius: 20px;
		z-index: -1;
		opacity: 0.7;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-btn :global(.project-content-icon) {
		transition: all 0.3s 0.3s ease;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-btn.close :global(.project-content-icon) {
		opacity: 0;
		transition: all 0.1s 0s;
	}

	.project-showcase .project-showcase-inner .project-content {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}

	.project-showcase .project-showcase-inner .project-content .project-content-slider {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}

	.project-showcase .project-showcase-inner .project-content .slider {
		padding: 80px 0 0;
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.project-showcase .project-showcase-inner .project-content .slider .slider-inner {
		position: relative;
		width: 100%;
	}

	.project-showcase .project-showcase-inner .project-content .slider .slider-inner:before {
		content: '';
		display: block;
		padding-bottom: 60%;
	}

	.swiper-container {
		position: absolute !important;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: visible;
		touch-action: pan-x;
	}

	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		flex-direction: column;
		box-sizing: content-box;
	}

	:global(.swiper-slide) {
		font-size: 5em;
		color: white;
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		position: relative;
	}

	:global(.swiper-slide-inner) {
		margin: 0 -10px;
		display: flex;
		max-height: 100%;
		padding: 0 40px;
	}

	:global(.swiper-slide-image) {
		flex-grow: 1;
		padding: 0 10px;
		position: relative;
	}

	:global(.swiper-slide-image) :global(img) {
		height: auto;
		max-width: 100%;
		display: block;
		box-sizing: border-box;
		border-radius: 1.05vw;
	}

	.slider-control {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 18px;
		left: 23px;
		z-index: 2;
		width: 38px;
		transition: all 0.3s 0.3s;
	}

	.swiper-pagination {
		position: static;
		height: calc(100% - 40px);
		margin-bottom: 2.4rem;
		transform: translateZ(0) !important;
		opacity: 0;
		display: none;
	}

	.swiper-counter {
		align-items: center;
		display: flex;
		color: #000;
		background: #fff;
		height: 38px;
		width: 38px;
		border-radius: 50%;
		justify-content: center;
		opacity: 0.7;
	}

	:global(.swiper-pagination-bullet) {
		height: auto;
		flex-grow: 1;
		margin: 0 auto 0.7rem;
		width: 16px;
		opacity: 0.3;
		transition: opacity 0.2s ease;
		position: relative;
		background: transparent;
		cursor: pointer;
	}

	:global(.swiper-pagination-bullet):after {
		background: white;
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: calc(50% - 1px);
		border-radius: 1px;
		width: 4px;
	}

	:global(.swiper-pagination-bullet-active) {
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {
		.project-showcase .project-showcase-inner .project-content .slider .slider-inner {
			max-width: 600px;
			margin: 0 auto;
		}
	}

	@media only screen and (max-width: 998px) {
		.project-showcase .project-showcase-inner .project-content .slider.hidden {
			opacity: 0;
			transform: scale(0.9);
			transition: all 0.3s, visibility 0s 0.3s;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-info {
			position: absolute;
			visibility: hidden;
			opacity: 0;
			transition: all 0.3s, visibility 0s 0.3s;
			z-index: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			padding: 70px 33px 70px 23px;
			transform: scale(1.1);
		}

		.project-showcase .project-showcase-inner .project-content .project-content-info.shown {
			opacity: 1;
			visibility: visible;
			transform: scale(1);
			transition: all 0.3s 0.3s, visibility 0s 0.3s;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-info .project-content-cta .project-content-cta-link {
			visibility: hidden;
		}
	}

	@media only screen and (min-width: 999px) {
		.project-showcase .project-showcase-inner .project-showcase-bg {
			height: 150%;
			border-radius: 30px 0 0 30px;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-info {
			transform: translate3d(0, 30px, 0);
			margin-bottom: 6rem;
			position: relative;
			justify-content: space-between;
			align-items: center;
			z-index: 3;
			transition: transform 0.3s ease;
			min-height: 100px;
			pointer-events: none;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-info .project-content-description {
			font-size: 1.3rem;
			position: absolute;
			color: #000;
			background: #fff;
			width: 50%;
			border-radius: 17px;
			padding: 2.4em 2.6em;
			top: 100px;
			left: 60px;
			opacity: 0;
			transform-origin: 0 0;
			pointer-events: none;
			transform: translate3d(0, -10px, 0) scale(0.8);
			transition: opacity 0.3s, transform 0.3s;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-info.shown .project-content-description {
			opacity: 1;
			pointer-events: unset;
			transform: translateZ(0) scale(1);
		}

		.project-showcase .project-showcase-inner .project-content .project-content-info .project-content-cta {
			right: 80px;
			text-align: initial;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-info .project-content-cta .project-content-cta-link {
			background: #fff;
			border-radius: 20px;
			height: 40px;
			padding: 1em 2em;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-btn {
			left: 60px;
			top: 60px;
			padding: 1rem 2rem;
			border-radius: 20px;
			width: 74px;
			opacity: 1;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-btn:after {
			opacity: 1;
		}

		.project-showcase .project-showcase-inner .project-content .project-content-btn :global(.project-content-icon) {
			font-size: 1.3rem;
			line-height: 20px;
		}

		.swiper-container {
			width: 100%;
			max-height: 100%;
		}

		.slider-control {
			top: 30px;
			bottom: 30px;
			right: 10px;
			left: unset;
		}

		.swiper-pagination {
			opacity: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			z-index: 1;
		}

		.swiper-counter {
			color: white;
			font-size: 1.2em;
			text-align: center;
			background: none;
			opacity: 1;
		}

		:global(.swiper-slide-inner) {
			margin: 0 -14px;
			padding-right: 60px;
		}
	}

	@media only screen and (min-width: 1200px) {
		.slider-control {
			top: 56px;
			bottom: 32px;
			right: 32px;
		}

		:global(.swiper-slide-inner) {
			margin: 0 auto;
			max-width: 1200px;
		}
	}
</style>
