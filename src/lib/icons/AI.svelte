<script>
	import Responsive from '$lib/components/Responsive.svelte';
</script>

<Responsive query="(max-width: 767px)" let:matches>
	{#if matches}
		<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.890625" y="0.905762" width="64" height="64" rx="24.5" fill="white" />
			<rect x="0.890625" y="0.905762" width="64" height="64" rx="24.5" stroke="white" />
			<path d="M18.6667 18.5H47.9167V47.26H18.6667V18.5Z" fill="url(#paint0_linear_69_401)" />
			<path
				d="M29.337 33.141H31.9297L30.6334 28.0926L29.337 33.141ZM20.8796 20.7517V45.0219H45.7408V20.7517H20.8796ZM33.3525 38.6763L32.4039 35.3954H28.8943L27.9457 38.6763H25.5426L28.9259 27.0766V25.8066H32.151L36.0085 38.6763H33.3525V38.6763ZM39.7397 38.6763H37.147V28.8865H39.7397V38.6763ZM38.459 27.7117C37.7168 27.7117 37.1151 27.1146 37.1151 26.3782C37.1151 25.6417 37.7167 25.0446 38.459 25.0446C39.2013 25.0446 39.8029 25.6417 39.8029 26.3782C39.8029 27.1146 39.2012 27.7117 38.459 27.7117Z"
				fill="url(#paint1_linear_69_401)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_69_401"
					x1="47.7644"
					y1="18.347"
					x2="18.9792"
					y2="47.0127"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#FFAA2A" />
					<stop offset="1" stop-color="#FFC06C" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_69_401"
					x1="33.3102"
					y1="20.711"
					x2="33.3102"
					y2="44.8994"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#251200" />
					<stop offset="1" />
				</linearGradient>
			</defs>
		</svg>
	{:else}
		<svg
			width="121"
			height="121"
			viewBox="0 0 121 121"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="1.224" y="0.905762" width="119" height="119" rx="31.5" fill="white" />
			<rect x="1.224" y="0.905762" width="119" height="119" rx="31.5" stroke="white" />
			<path
				d="M27.6667 27.3611H94.3334V92.6389H27.6667V27.3611Z"
				fill="url(#paint0_linear_27_76)"
			/>
			<path
				d="M51.9864 60.5929H57.8956L54.9411 49.1343L51.9864 60.5929ZM32.7104 32.4724V87.5596H89.3741V32.4724H32.7104ZM61.1386 73.1565L58.9766 65.7097H50.9773L48.8153 73.1565H43.3383L51.0493 46.8283V43.9457H58.4001L67.1921 73.1565H61.1386V73.1565ZM75.6962 73.1565H69.7869V50.9362H75.6962V73.1565ZM72.7773 48.2698C71.0857 48.2698 69.7143 46.9146 69.7143 45.243C69.7143 43.5714 71.0855 42.2162 72.7773 42.2162C74.4692 42.2162 75.8402 43.5714 75.8402 45.243C75.8402 46.9146 74.469 48.2698 72.7773 48.2698Z"
				fill="url(#paint1_linear_27_76)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_27_76"
					x1="93.9861"
					y1="27.0137"
					x2="28.6506"
					y2="92.3493"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#FFAA2A" />
					<stop offset="1" stop-color="#FFC06C" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_27_76"
					x1="61.0422"
					y1="32.3799"
					x2="61.0422"
					y2="87.2815"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#251200" />
					<stop offset="1" />
				</linearGradient>
			</defs>
		</svg>
	{/if}
</Responsive>
