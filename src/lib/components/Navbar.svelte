<script>
	import { Github, Twitter, Gmail, HamburgerMenu, Close } from '$lib/icons';

	import { onMount } from 'svelte';

	let navEl;
	let open = false;
	// onMount(() => {
	// 	navEl.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	// 		anchor.addEventListener('click', function (e) {
	// 			e.preventDefault();

	// 			if (window.location.pathname === '/') {
	// 				document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
	// 					behavior: 'smooth'
	// 				});
	// 				return;
	// 			}
	// 			sessionStorage.setItem('hash', e.currentTarget.getAttribute('href'));
	// 			window.location.href = '/';
	// 		});
	// 	});
	// });
</script>

<header>
	<a href="/" class="logo">
		<img src="/logo.svg" alt="logo" />
	</a>
	<nav bind:this={navEl} class={open ? 'open-nav' : ''}>
		<Close bind:open class="close-btn" />

		<ul>
			<li><a href="#about">About</a></li>
			<li><a href="#">Work</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>

		<div class="vl" />

		<ul class="social">
			<li><a href="https://github.com/destiny0114"><Github fill="#304b41" /></a></li>
			<li><a href="https://twitter.com/home"><Twitter fill="#304b41" /></a></li>
			<li><a href="mailto:keenelevine97@gmail.com"><Gmail fill="#304b41" /></a></li>
		</ul>
	</nav>

	<HamburgerMenu bind:open class="menu-btn" />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 4em;
		padding-bottom: 4em;
	}

	.logo {
		width: 15em;
	}

	:global(.menu-btn) {
		cursor: pointer;
	}

	nav {
		position: fixed;
		top: 0;
		right: 0;
		background: white;
		height: 100vh;
		width: 50%;
		z-index: 999;
		text-transform: uppercase;
		transform: translateX(100%);
		transition: transform 0.5s ease-in-out;
	}

	nav :global(.close-btn) {
		float: right;
		margin: 2em;
		cursor: pointer;
	}

	nav ul {
		list-style-type: none;
		padding: 0;
		margin-top: 8em;
		opacity: 0;
		transition: opacity 0.3s ease-in;
	}

	nav.open-nav ul {
		opacity: 1;
	}

	nav ul li a {
		text-decoration: none;
		color: #304b41;
		position: relative;
		font-size: 1.4rem;
		padding: 0.75em 2em;
		display: block;
	}

	nav ul.social {
		display: flex;
		padding: 0 2em;
	}

	nav ul.social li a {
		padding: 0;
	}

	@media only screen and (min-width: 768px) {
		:global(.menu-btn) {
			display: none;
		}

		nav {
			transform: translateX(0);
			position: unset;
			background: none;
			width: auto;
			height: auto;
			display: flex;
			align-items: center;
		}

		nav :global(.close-btn) {
			display: none;
		}

		nav ul {
			margin: 0;
			padding: 0;
			display: flex;
			gap: 1em;
			opacity: 1;
		}

		nav ul li a {
			color: white;
		}

		.vl {
			display: block;
			position: relative;
			margin: 0 2em;
		}

		.vl:after {
			content: '';
			position: absolute;
			width: 2px;
			min-height: 20px;
			right: -3px;
			background: #54746e;
			top: 50%;
			transform: translate(0, -50%);
		}
	}
	/* .logo {
		width: 25em;
	}

	nav {
		display: flex;
		align-items: center;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 1em;
	}

	nav ul:first-child {
		gap: 4em;
	}

	nav ul li a {
		text-decoration: none;
		color: white;
		position: relative;
		font-size: 1.4rem;
	}

	nav ul:first-child li a.active:before {
		position: absolute;
		content: '';
		width: 35%;
		height: 1px;
		border-bottom: 2px solid white;
		bottom: -6px;
	}

	nav ul:first-child li a:before {
		position: absolute;
		content: '';
		width: 0%;
		height: 1px;
		border-bottom: 2px solid white;
		bottom: -6px;
		transition: width 0.3s;
	}

	nav ul:first-child li a:hover:before {
		width: 35%;
	}

	.vl {
		position: relative;
		margin: 0 2em;
	}

	.vl:after {
		content: '';
		position: absolute;
		width: 2px;
		min-height: 20px;
		right: -3px;
		background: #54746e;
		top: 50%;
		transform: translate(0, -50%);
	} */
	.open-nav {
		transform: translateX(0%);
	}
</style>
