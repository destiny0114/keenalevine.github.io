<script>
	export let width = '17';
	export let height = '8';
	export let fill = '#FFEA7B';
</script>

<svg
	class={$$props.class}
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	fill="none"
	viewBox="0 0 17 8"
>
	<path
		{fill}
		d="M16.836 4.354a.5.5 0 0 0 0-.708L13.654.464a.5.5 0 1 0-.707.708L15.775 4l-2.828 2.828a.5.5 0 1 0 .707.708l3.182-3.182ZM.482 4.5h16v-1h-16v1Z"
	/>
</svg>

<style>
	svg {
		margin-left: 0.5em;
	}
</style>
