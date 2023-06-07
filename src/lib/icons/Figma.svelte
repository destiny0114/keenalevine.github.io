<script>
	import Responsive from '$lib/components/Responsive.svelte';
</script>

<Responsive query="(max-width: 767px)" let:matches>
	{#if matches}
		<svg xmlns="http://www.w3.org/2000/svg" width="66" height="65" fill="none" viewBox="0 0 66 65">
			<rect width="64" height="64" x="1.396" y=".5" fill="#fff" rx="24.5" />
			<rect width="64" height="64" x="1.396" y=".5" stroke="#fff" rx="24.5" />
			<path fill="#0ACF83" d="M29 48c2.76 0 5-2.24 5-5v-5h-5c-2.76 0-5 2.24-5 5s2.24 5 5 5Z" />
			<path fill="#A259FF" d="M24 33c0-2.76 2.24-5 5-5h5v10h-5c-2.76 0-5-2.24-5-5Z" />
			<path fill="#F24E1E" d="M24 23c0-2.76 2.24-5 5-5h5v10h-5c-2.76 0-5-2.24-5-5Z" />
			<path fill="#FF7262" d="M34 18h5c2.76 0 5 2.24 5 5s-2.24 5-5 5h-5V18Z" />
			<path fill="#1ABCFE" d="M44 33c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5Z" />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="121"
			height="120"
			fill="none"
			viewBox="0 0 121 120"
		>
			<rect width="119" height="119" x="1.396" y=".5" fill="#fff" rx="31.5" />
			<rect width="119" height="119" x="1.396" y=".5" stroke="#fff" rx="31.5" />
			<path
				fill="#0ACF83"
				d="M50 93c6.072 0 11-4.928 11-11V71H50c-6.072 0-11 4.928-11 11s4.928 11 11 11Z"
			/>
			<path fill="#A259FF" d="M39 60c0-6.072 4.928-11 11-11h11v22H50c-6.072 0-11-4.928-11-11Z" />
			<path fill="#F24E1E" d="M39 38c0-6.072 4.928-11 11-11h11v22H50c-6.072 0-11-4.928-11-11Z" />
			<path fill="#FF7262" d="M61 27h11c6.072 0 11 4.928 11 11s-4.928 11-11 11H61V27Z" />
			<path
				fill="#1ABCFE"
				d="M83 60c0 6.072-4.928 11-11 11s-11-4.928-11-11 4.928-11 11-11 11 4.928 11 11Z"
			/>
		</svg>
	{/if}
</Responsive>
