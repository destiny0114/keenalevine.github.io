<script>
	import { createAccordionContext } from '$lib/context/AccordionContext';

	export let current = null;

	const { current: currentStore } = createAccordionContext(current);

	$: currentStore.set(current);
	$: current = $currentStore;
</script>

<div class="accordion">
	<slot />
</div>

<style>
	.accordion {
		width: 100%;
		min-height: 50rem;
		display: flex;
		flex-direction: column;
		gap: 4em;
	}
</style>
