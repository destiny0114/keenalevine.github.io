<script>
	import { onMount, onDestroy } from 'svelte';
	import Swiper, { Navigation, Pagination, FreeMode, Mousewheel, Manipulation } from 'swiper';
	import { gsap } from '$lib/helpers/gsap';
	import Showcase from '$lib/components/Showcase.svelte';

	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import { Back, Dot, Gmail } from '$lib/icons';
	import { ProjectStore } from '$lib/stores/ProjectStore';

	let swiper;
	let swiperElement;
	let swiperPaginationElement;

	let showcaseElement;
	let showcaseBgElement;
	let showcaseContentElement;

	$: totalSlide = 0;
	$: activeSlideIndex = 1;

	$: selectedProject = $ProjectStore[0];
	$: activeInfo = false;

	onMount(() => {
		showcaseBgElement = showcaseElement.querySelector('.project-showcase-bg');
		showcaseContentElement = showcaseElement.querySelector('.project-content');

		swiper = new Swiper(swiperElement, {
			direction: 'vertical',
			modules: [Navigation, Pagination, FreeMode, Mousewheel, Manipulation],
			mousewheel: {
				releaseOnEdges: true
			},
			pagination: {
				el: swiperPaginationElement,
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="swiper-pagination-bullet"></span>`;
				}
			},
			resistance: true,
			resistanceRatio: 0,
			breakpoints: {
				320: {
					freeMode: {
						enabled: false
					}
				},
				1024: {
					freeMode: {
						enabled: true
					}
				}
			}
		});

		swiper.on('setTranslate', function (swiper, translate) {
			if (swiper.currentBreakpoint < 768) return;

			var rate = Math.round(translate * 0.5) / 100;

			if (swiper.isEnd) {
				showcaseBgElement.style.transform = 'translate3d(0px,' + -33 + '%, 0px)';
				return;
			}

			showcaseBgElement.style.transform = 'translate3d(0px,' + rate + '%, 0px)';
		});

		swiper.on('activeIndexChange', function (swiper) {
			activeSlideIndex = swiper.activeIndex + 1;
		});

		swiper.on('update', function (swiper) {
			activeInfo = false;
			showcaseBgElement.style.transform = 'translate3d(0px, 0px, 0px)';
			activeSlideIndex = swiper.activeIndex + 1;
			totalSlide = swiper.slides.length;
		});

		swiper.on('resize', function (swiper) {
			swiper.update();
		});

		buildSlider(selectedProject, swiper);
	});

	function buildSlider(selectedProject, swiper) {
		if (gsap.isTweening(showcaseContentElement)) {
			gsap.killTweensOf(showcaseContentElement);
		}

		gsap.set(showcaseContentElement, { x: 600, opacity: 0 });

		if (swiper.slides.length) {
			swiper.removeAllSlides();
		}

		selectedProject.images.map((image) => {
			swiper.appendSlide(`
				<div class="swiper-slide">
					<div class="swiper-slide-inner">
						<div class="swiper-slide-image">
							<img src="${image.normal}" alt="" />
						</div>
					</div>
				</div>
			`);
		});

		swiper.update();

		gsap.to(showcaseContentElement, { x: 0, opacity: 1, ease: 'power2', duration: 1.5 });
	}

	function onProjectItemSelect(event) {
		selectedProject = event.detail.item;
		if (!swiper) return;

		buildSlider(selectedProject, swiper);
	}

	onDestroy(() => {
		if (!swiper) return;
		swiper.destroy();
	});
</script>

<main>
	<div class="wrapper">
		<div class="header hide-desktop">
			<a href="/" class="cta-back"><Back class="back" /></a>
			<a href="/#about" class="tag">Keena Levine</a>
		</div>
		<div class="left-col">
			<div class="header">
				<a href="/" class="cta-back"><Back class="back" /></a>
				<div class="intro">
					<a href="/#about" class="tag">Keena Levine</a>
					<span class="divider"><Dot /></span>
					<span class="intro-text">is developer with the multi-disciplinary approach, creates websites & graphics.</span>
				</div>
			</div>
			<div class="main">
				<div class="mobile-nav hide-desktop">
					<div class="title">Projects</div>
					<ul class="social">
						<li><a href="mailto:keenelevine97@gmail.com"><Gmail class="social-btn" /></a></li>
					</ul>
				</div>
				<div class="textual-content">
					<h1 class="title">Passionate to craft Amazing Product.</h1>
					<div class="project-list">
						<div class="scroll-list">
							<ul class="project-list-wrapper">
								{#each $ProjectStore as item (item.id)}
									<ProjectItem {item} isActive={selectedProject === item} on:select={onProjectItemSelect} />
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="footer">
				<p>Interested to hire me?</p>
				<a href="mailto:keenelevine97@gmail.com" class="footer-email">keenalevine97@gmail.com</a>
			</div>
		</div>
		<div class="right-col">
			<div class="content">
				<div class="content-inner">
					<Showcase bind:item={selectedProject} bind:node={showcaseElement} bind:sliderElement={swiperElement} bind:sliderPaginationElement={swiperPaginationElement} bind:toggleInfo={activeInfo} bind:currentSlide={activeSlideIndex} bind:totalSlide />
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.tag {
		position: relative;
		text-decoration: none;
		color: white;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.3rem;
		margin-right: 10px;
	}

	.tag:before {
		background-color: #50ffa9;
		content: '';
		position: absolute;
		left: -13px;
		right: -13px;
		height: 28px;
		top: calc(50% - 14px);
		opacity: 0.07;
		border-radius: 14px;
	}

	.wrapper {
		display: flex;
		height: 100vh;
		flex-direction: column;
		align-items: stretch;
		overflow: hidden;
	}

	.wrapper .header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 6em;
		background-color: #162525;
		padding: 0 2.2rem;
	}

	.wrapper .header .cta-back {
		text-decoration: none;
		outline: none;
		background: none;
		border: none;
		padding: 0;
	}

	.wrapper .left-col {
		flex-grow: 1;
		background-color: #162525;
		order: 3;
	}

	.left-col .header {
		display: none;
	}

	.left-col .header .intro .intro-text {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.3rem;
		line-height: 1.77;
		color: white;
		margin: 0;
		text-align: right;
	}

	.left-col .header .intro .divider {
		display: inline-flex;
		align-items: center;
		line-height: inherit;
		padding: 0 8px;
	}

	.left-col .main {
		max-height: calc(100% - 165px);
		display: flex;
		flex-direction: column;
	}

	.left-col .main .mobile-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2.4rem;
		position: relative;
	}

	.left-col .main .mobile-nav:after {
		background: white;
		left: 22px;
		right: 22px;
		content: '';
		height: 1px;
		bottom: 0;
		position: absolute;
	}

	.left-col .main .mobile-nav .title {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 1.6rem;
		line-height: 120%;
		color: white;
		margin: 0;
	}
	.left-col .main .mobile-nav .social {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.left-col .textual-content {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.left-col .textual-content .title {
		position: relative;
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 3rem;
		line-height: 120%;
		color: white;
		padding: 2em 1em 1.8em;
		min-height: calc(2.5em + 0.5em);
		margin: 0;
		display: none;
	}

	.left-col .textual-content .title:after {
		background: white;
		left: 35px;
		right: 35px;
		content: '';
		height: 1px;
		bottom: -1px;
		position: absolute;
	}

	.left-col .textual-content .project-list {
		height: 100vh;
		display: flex;
		flex-direction: column;
		mask-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 7%, rgb(0, 0, 0) 93%, rgba(0, 0, 0, 0) 100%);
		-webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 7%, rgb(0, 0, 0) 93%, rgba(0, 0, 0, 0) 100%);
		overflow: hidden;
	}

	.left-col .textual-content .project-list .scroll-list::-webkit-scrollbar {
		display: none;
	}

	.left-col .textual-content .project-list .scroll-list {
		overflow: auto;
		height: 100%;
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;
		padding: 0 2.4rem;
	}

	.left-col .textual-content .project-list .scroll-list .project-list-wrapper {
		position: relative;
		list-style: none;
		margin: 0;
		padding: 1.6em 1em 1.6em 1em;
	}

	.left-col .footer {
		display: none;
	}

	.wrapper .right-col {
		flex-shrink: 0;
		height: 75vw;
		max-height: 40vh;
	}

	.right-col .content {
		position: relative;
		height: 100%;
		overflow: hidden;
	}

	.right-col .content .content-inner {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	@media only screen and (min-width: 999px) {
		.tag {
			font-size: 1.3rem;
		}

		.hide-desktop {
			display: none !important;
		}

		.wrapper {
			flex-direction: row;
		}

		.wrapper .header {
			display: none;
		}

		.wrapper .left-col {
			flex-shrink: 0;
			width: 40%;
			max-width: 40em;
			padding-right: 25px;
			height: 100%;
			order: initial;
			display: flex;
			flex-direction: column;
		}

		.left-col .header {
			display: flex;
			align-items: stretch;
			justify-content: flex-start;
			padding: 0;
			min-height: 90px;
		}

		.left-col .header .cta-back {
			cursor: pointer;
			text-decoration: none;
			outline: none;
			background: #2d4d4d;
			border: none;
			width: 15em;
			height: 100%;
			position: relative;
		}

		.left-col .header .cta-back :global(.back) {
			position: absolute;
			top: calc(50% - 15px);
			left: calc(50% - 15px);
		}

		.left-col .header .intro {
			padding: 24px 35px 20px;
		}

		.left-col .textual-content .title {
			display: block;
		}

		.left-col .textual-content .project-list .scroll-list {
			padding: 0 5.4em 0 3.5em;
			margin-right: -2.4em;
		}

		.left-col .textual-content .project-list .scroll-list .project-list-wrapper {
			padding: 1.6em 1em 1.6em 0;
		}

		.left-col .footer:before {
			background: white;
			left: 35px;
			right: 35px;
			content: '';
			height: 1px;
			top: 0;
			position: absolute;
		}

		.left-col .footer {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-height: 6.5em;
			padding: 2.6em 3.5em 3.2em;
		}

		.left-col .footer p,
		.left-col .footer .footer-email {
			font-family: 'Rubik', sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 1.3rem;
			color: white;
			margin: 0;
		}

		.left-col .footer .footer-email {
			display: inline-block;
			position: relative;
			line-height: 1.3;
			padding: 6px 14px;
			text-decoration: none;
		}

		.left-col .footer .footer-email:before {
			border-radius: 15px;
			content: '';
			background-color: #50ffa9;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			opacity: 0.07;
		}

		.wrapper .right-col {
			height: 100vh;
			max-height: unset;
			flex-grow: 1;
		}
	}

	@media only screen and (min-width: 1200px) {
		.wrapper .left-col {
			max-width: 55em;
			padding-right: 55px;
		}

		.left-col .textual-content .title {
			font-size: 3.5rem;
		}
	}
</style>
