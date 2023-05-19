<script>
	let className;
	export { className as class };

	export let open = false;

	function handleClick() {
		console.log('clicked');
		open = !open;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
	on:click={handleClick}
	class={className}
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	fill="none"
	viewBox="0 0 24 24"
>
	<path
		stroke="#fff"
		stroke-linecap="round"
		stroke-width="1.5"
		d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
	/>
</svg>
