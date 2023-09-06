<script>
	import { getAccordionContext } from '$lib/context/AccordionContext';
	import Minus from '$lib/icons/Minus.svelte';
	import Show from '$lib/icons/Show.svelte';

	export let key;
	export let item;

	const { current } = getAccordionContext();

	function handleClick() {
		$current = open ? null : key;
	}

	$: open = $current == key;
</script>

<div class={`accordion-item`}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="label" on:click={handleClick}>
		<h4><span class="numeric">0{key + 1}</span>{item.label}</h4>
		<div class="icon">
			{#if open}
				<Minus />
			{:else}
				<Show />
			{/if}
		</div>
	</div>
	<div class={open ? 'content active' : 'content'}>
		<p class="description">
			{item.description}
		</p>
	</div>
</div>

<style>
	.accordion-item {
		opacity: 0;
		transform: translateY(100px);
	}

	.accordion-item .label {
		font-family: 'Rubik', sans-serif;
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 145%;
		color: #ffffff;
		margin: 0;
		background-color: #0b756f;
		border-radius: 15px;
		padding: 0.6em 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0px 10px 25px rgba(21, 44, 46, 0.25);
		cursor: pointer;
	}

	.label h4 {
		display: flex;
		align-items: center;
		margin: 0;
	}

	.label .numeric {
		color: #b2cfc5;
		margin-right: 1em;
	}

	.label .icon {
		height: 1.8em;
		min-width: 3rem;
	}

	.accordion-item .content {
		background-color: #00382f;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 145%;
		color: #95b8b6;
		border-radius: 0 0 15px 15px;
		overflow: hidden;
		max-height: 0;
		transition: all 0.5s cubic-bezier(0, 1, 0, 1);
	}

	.accordion-item .content .description {
		padding: 1.8em 1.5em;
		opacity: 0;
		margin: 0;
		transition: opacity 1s ease-in;
	}

	.accordion-item .content.active {
		height: auto;
		max-height: 100vh;
		transition: all 0.5s cubic-bezier(1, 0, 1, 0);
	}

	.accordion-item .content.active .description {
		opacity: 1;
	}

	@media only screen and (min-width: 1440px) {
		.accordion-item .label {
			font-size: 2.4rem;
			line-height: 145%;
		}

		.label h4 {
			display: flex;
			align-items: center;
			margin: 0;
		}

		.label .numeric {
			color: #b2cfc5;
			margin-right: 1em;
		}

		.label .icon {
			height: 1.4em;
		}

		.accordion-item .content {
			font-size: 1.5rem;
			line-height: 145%;
		}

		.accordion-item .content .description {
			padding: 1.8em 1.5em;
		}
	}
</style>
