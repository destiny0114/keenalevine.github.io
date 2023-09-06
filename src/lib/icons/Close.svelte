<script>
	let className;
	export { className as class };

	export let width = 32;
	export let height = 32;
	export let open = false;

	function handleClick() {
		open = !open;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
	on:click={handleClick}
	class={className}
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 24 24"
	><path
		fill="currentColor"
		d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
	/></svg
>
