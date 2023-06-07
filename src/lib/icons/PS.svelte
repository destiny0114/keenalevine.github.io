<script>
	import Responsive from '$lib/components/Responsive.svelte';
</script>

<Responsive query="(max-width: 767px)" let:matches>
	{#if matches}
		<svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="none" viewBox="0 0 66 66">
			<rect width="64" height="64" x=".948" y=".906" fill="#fff" rx="24.5" />
			<rect width="64" height="64" x=".948" y=".906" stroke="#fff" rx="24.5" />
			<path fill="url(#a)" d="M18 18.5h29.25v28.763H18V18.5Z" />
			<path fill="url(#b)" d="M20.326 20.787h24.598v24.188H20.326V20.787Z" />
			<path
				fill="url(#c)"
				d="M25.069 26.607s1.85-.05 3.371-.05c1.539 0 2.636.363 3.372.999.704.6 1.179 1.625 1.179 2.792 0 1.166-.36 2.12-1.015 2.791-.851.866-1.843 1.379-3.536 1.45-.467.02-.9.024-.9.024v3.791h-2.47V26.606Zm2.471 5.905c.269.026.437.014.835.01 1.326-.017 2.144-.823 2.144-2.042 0-1.096-.675-1.995-1.947-2.041-.508-.019-1.032 0-1.032 0v4.073Z"
			/>
			<path
				fill="url(#d)"
				d="M33.934 35.763c.498.306 1.673.763 2.474.763.82 0 1.157-.288 1.157-.738s-.267-.923-1.282-1.265c-1.797-.613-2.492-1.345-2.474-2.371 0-1.657 1.389-2.899 3.542-2.899 1.015 0 1.825.332 2.359.602v1.988c-.392-.216-1.522-.7-2.27-.7-.658 0-1.032.271-1.032.72 0 .415.338.63 1.406 1.01 1.655.575 2.35 1.421 2.367 2.717 0 1.639-1.263 2.942-3.773 2.863-.861-.027-1.816-.368-2.475-.728v-1.962Z"
			/>
			<defs>
				<linearGradient
					id="a"
					x1="25.108"
					x2="36.321"
					y1="16.998"
					y2="40.691"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#A0CBFF" />
					<stop offset=".394" stop-color="#A0CBFE" />
					<stop offset=".583" stop-color="#8EC2FC" />
					<stop offset=".784" stop-color="#83BCFB" />
					<stop offset="1" stop-color="#7FBAFB" />
				</linearGradient>
				<linearGradient
					id="b"
					x1="29.088"
					x2="35.426"
					y1="21.128"
					y2="42.188"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#090058" />
					<stop offset="1" stop-color="#070033" />
				</linearGradient>
				<linearGradient
					id="c"
					x1="21.621"
					x2="32.833"
					y1="18.259"
					y2="41.951"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#A0CBFF" />
					<stop offset=".394" stop-color="#A0CBFE" />
					<stop offset=".583" stop-color="#8EC2FC" />
					<stop offset=".784" stop-color="#83BCFB" />
					<stop offset="1" stop-color="#7FBAFB" />
				</linearGradient>
				<linearGradient
					id="d"
					x1="28.008"
					x2="39.264"
					y1="15.165"
					y2="38.951"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#A0CBFF" />
					<stop offset=".394" stop-color="#A0CBFE" />
					<stop offset=".583" stop-color="#8EC2FC" />
					<stop offset=".784" stop-color="#83BCFB" />
					<stop offset="1" stop-color="#7FBAFB" />
				</linearGradient>
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
			<rect width="119" height="119" x=".948" y=".906" fill="#fff" rx="31.5" />
			<rect width="119" height="119" x=".948" y=".906" stroke="#fff" rx="31.5" />
			<path fill="url(#a)" d="M26.667 27.222h66.666v65.556H26.667V27.222Z" />
			<path fill="url(#b)" d="M31.969 32.435h56.063v55.13H31.969v-55.13Z" />
			<path
				fill="url(#c)"
				d="M42.777 45.699s4.215-.111 7.685-.111c3.506 0 6.006.825 7.685 2.274 1.604 1.37 2.686 3.705 2.686 6.363 0 2.659-.821 4.834-2.313 6.363-1.94 1.974-4.2 3.142-8.058 3.303a74.8 74.8 0 0 1-2.052.056v8.64h-5.633V45.7Zm5.633 13.46c.612.06.996.031 1.903.02 3.022-.036 4.886-1.873 4.886-4.652 0-2.497-1.537-4.546-4.438-4.653-1.156-.042-2.35 0-2.35 0v9.285Z"
			/>
			<path
				fill="url(#d)"
				d="M62.983 66.568c1.135.697 3.814 1.74 5.64 1.74 1.866 0 2.636-.658 2.636-1.683 0-1.026-.608-2.104-2.92-2.884-4.098-1.395-5.68-3.065-5.64-5.403 0-3.776 3.165-6.607 8.073-6.607 2.313 0 4.16.756 5.376 1.371v4.532c-.893-.493-3.469-1.594-5.172-1.594-1.502 0-2.354.616-2.354 1.64 0 .945.772 1.437 3.206 2.3 3.772 1.312 5.354 3.24 5.394 6.195 0 3.734-2.878 6.704-8.6 6.523-1.963-.061-4.139-.837-5.64-1.657v-4.473Z"
			/>
			<defs>
				<linearGradient
					id="a"
					x1="42.868"
					x2="68.423"
					y1="23.799"
					y2="77.799"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#A0CBFF" />
					<stop offset=".394" stop-color="#A0CBFE" />
					<stop offset=".583" stop-color="#8EC2FC" />
					<stop offset=".784" stop-color="#83BCFB" />
					<stop offset="1" stop-color="#7FBAFB" />
				</linearGradient>
				<linearGradient
					id="b"
					x1="51.939"
					x2="66.383"
					y1="33.212"
					y2="81.213"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#090058" />
					<stop offset="1" stop-color="#070033" />
				</linearGradient>
				<linearGradient
					id="c"
					x1="34.919"
					x2="60.475"
					y1="26.672"
					y2="80.672"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#A0CBFF" />
					<stop offset=".394" stop-color="#A0CBFE" />
					<stop offset=".583" stop-color="#8EC2FC" />
					<stop offset=".784" stop-color="#83BCFB" />
					<stop offset="1" stop-color="#7FBAFB" />
				</linearGradient>
				<linearGradient
					id="d"
					x1="49.476"
					x2="75.132"
					y1="19.621"
					y2="73.835"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#A0CBFF" />
					<stop offset=".394" stop-color="#A0CBFE" />
					<stop offset=".583" stop-color="#8EC2FC" />
					<stop offset=".784" stop-color="#83BCFB" />
					<stop offset="1" stop-color="#7FBAFB" />
				</linearGradient>
			</defs>
		</svg>
	{/if}
</Responsive>
