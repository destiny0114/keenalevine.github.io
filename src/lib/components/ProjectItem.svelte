<script>
	import { createEventDispatcher } from 'svelte';

	export let item;
	export let isActive = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('select', { item });
	}
</script>

<li class="project-item">
	<button class="item-link" on:click|preventDefault={handleClick} class:active={isActive}>
		<div class="title">{item.title}</div>
		<div class="badge">
			<span>{item.tags[0]}</span>
		</div>
		<div class="year"><span>{item.years}</span></div>
	</button>
</li>

<style>
	.project-item {
		margin-bottom: 10px;
	}

	.item-link:before {
		position: absolute;
		content: '';
		background-color: #a3efff;
		top: 5px;
		bottom: 5px;
		left: -16px;
		right: -16px;
		border-radius: 24.5px;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.item-link:hover:before {
		opacity: 0.07;
	}

	.item-link {
		display: flex;
		align-items: center;
		outline: none;
		background: none;
		border: none;
		text-decoration: none;
		color: white;
		padding: 1.3em 0;
		margin: 0.5em 0;
		width: 100%;
		position: relative;
	}

	.item-link:after {
		position: absolute;
		content: '';
		background-color: white;
		height: 5px;
		width: 5px;
		border-radius: 50%;
		top: calc(50% - 2.5px);
		right: 25px;
		opacity: 0;
		transform: scale(0);
		transition: all 0.2s ease;
	}

	.item-link .title {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 1.8rem;
		line-height: 120%;
		color: white;
		margin-right: auto;
	}

	.item-link .badge:before {
		border-radius: 11px;
		content: '';
		background: #a3efff;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		opacity: 0.09;
	}

	.item-link .badge {
		color: white;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.2rem;
		padding: 0.2em 0.8em;
		border-radius: 50px;
		position: relative;
		display: none;
	}

	.item-link .badge span {
		opacity: 0.5;
	}

	.item-link .year:before {
		border-radius: 11px;
		content: '';
		background: #a3efff;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		opacity: 0.09;
	}

	.item-link .year {
		color: white;
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.2rem;
		padding: 0.2em 0.8em;
		border-radius: 50px;
		position: relative;
		margin-left: 2em;
	}

	.item-link .year span {
		opacity: 0.5;
	}

	@media only screen and (min-width: 1440px) {
		.item-link .badge {
			display: block;
		}

		.item-link.active:before {
			opacity: 0.07;
		}

		.item-link:after {
			right: -35px;
		}

		.item-link.active:after {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
