<script>
	import Responsive from '$lib/components/Responsive.svelte';
</script>

<Responsive query="(max-width: 767px)" let:matches>
	{#if matches}
		<svg
			width="66"
			height="66"
			viewBox="0 0 66 66"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<rect x="1.22412" y="0.905762" width="64" height="64" rx="24.5" fill="white" />
			<rect x="1.22412" y="0.905762" width="64" height="64" rx="24.5" stroke="white" />
			<rect width="29.25" height="28.76" transform="translate(19 18)" fill="url(#pattern0)" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use
						xlink:href="#image0_69_316"
						transform="matrix(0.00588235 0 0 0.00598257 0 -0.00851877)"
					/>
				</pattern>
				<image
					id="image0_69_316"
					width="170"
					height="170"
					xlink:href="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="121"
			height="121"
			fill="none"
			viewBox="0 0 121 121"
		>
			<rect width="119" height="119" x="1.224" y=".906" fill="#fff" rx="31.5" />
			<rect width="119" height="119" x="1.224" y=".906" stroke="#fff" rx="31.5" />
			<g clip-path="url(#a)">
				<path
					fill="#FBBD71"
					d="M66.064 46.518c-1.35.675-1.935 1.935-1.935 5.357 0 0 .675-.676 1.755-1.08a7.175 7.175 0 0 0 1.756-.969c1.17-.877 1.35-1.935 1.35-3.78-.022 0-1.868-.114-2.926.472Z"
				/>
				<path
					fill="#000"
					d="M57.804 47.306c-1.17.967-1.463 2.633-1.463 2.633l-3.782 14.495-3.106-11.862c-.292-1.26-.877-2.813-1.755-3.894-1.08-1.372-3.331-1.462-3.602-1.462-.202 0-2.43.09-3.6 1.462-.879 1.08-1.464 2.634-1.756 3.894l-2.927 11.862-3.78-14.495s-.293-1.553-1.464-2.633C28.724 45.64 26 46.046 26 46.046l7.203 27.121s2.34.203 3.51-.382c1.554-.788 2.342-1.35 3.22-5.065.877-3.308 3.218-12.942 3.398-13.617.09-.293.293-1.17.878-1.17s.788.787.878 1.17c.202.675 2.52 10.309 3.398 13.617.968 3.692 1.644 4.277 3.22 5.065 1.17.585 3.51.382 3.51.382l7.158-27.122s-2.723-.383-4.57 1.26Zm11.164 3.106s-.495.675-1.463 1.26c-.675.383-1.26.585-1.936.968-1.17.585-1.463 1.17-1.463 2.048v18.389s1.846.203 3.016-.382c1.553-.788 1.846-1.553 1.846-4.862V50.412Zm17.894 9.25L96 46.135s-3.781-.675-5.74 1.08c-1.26 1.08-2.52 3.106-2.52 3.106l-3.31 4.862c-.202.293-.382.495-.674.495-.293 0-.586-.292-.676-.495l-3.308-4.861s-1.35-1.936-2.521-3.107c-1.936-1.755-5.74-1.08-5.74-1.08l8.846 13.505-9.048 13.505s3.984.495 5.942-1.26c1.26-1.081 2.43-2.927 2.43-2.927l3.31-4.862c.202-.292.382-.495.675-.495.292 0 .585.293.675.495l3.309 4.862s1.26 1.846 2.43 2.926c1.936 1.756 5.83 1.26 5.83 1.26l-9.048-13.482Z"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h70v27.235H0z" transform="translate(26 46)" />
				</clipPath>
			</defs>
		</svg>
	{/if}
</Responsive>
