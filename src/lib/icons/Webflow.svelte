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
			<rect x="0.724121" y="0.905762" width="64" height="64" rx="24.5" fill="white" />
			<rect x="0.724121" y="0.905762" width="64" height="64" rx="24.5" stroke="white" />
			<rect width="29.25" height="28.76" transform="translate(18.5 18)" fill="url(#pattern0)" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use
						xlink:href="#image0_69_313"
						transform="matrix(0.00588235 0 0 0.00598257 0 -0.00851877)"
					/>
				</pattern>
				<image
					id="image0_69_313"
					width="170"
					height="170"
					xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqBAMAAADPWMmxAAAAFVBMVEVDU/////9hb//q7P/P0/+qsf+Ejv/o95DPAAADCElEQVRo3u2YP3PbMAzFdaqt/YVSZiV2MtdO5FlUG892rpdZbtp+/4/QQST4z2lF6K5L8aYEsX8C8QiQSlGIRCKRSCQSiUQikUgkEolE/1D3H/2hvP975EN9eX69Fn789tSFkSqJ/EEaOLRJVj8ANEHo5w64nU09A+jaK1DUMRTDbOoFgDqGse0OAGrvWQ87ADjNpt4BgAo+X2kAgHLUUgOAGmdTNwCAwId3xNTpQ/X8nfVpQnjJVjtDHaPIYT51hThZkyowhqliP5+6jhMrTaqu2FNVc8wqKsMYouQ9yoP5vZ1PLc1XGn8DT+rDkmSYRQu2jlMBKH0buc0ZLzpcryuApa7jGuVQ+2gH0E66Q7ZZro77uKyWqpOmmDkIXNkqV1YTsWWtCw61CYqYRg5ZVNM4JpdNQt1yzKJv1UHmLvLOMYtWOI1T7VNbz748s0Jq6UEnkB0CeWbRIFBtZNY0cSpOZ3njtHXT1huF9jmf86jBIJjMUtpRtyyzqHBqJLOasyNdWGa5jhwp75uLo56jQZk5CNRIRewvbuBoTmd5axypiCd3UJWszvIO6tH+qNotUdc8s1zrn2wxGpvzDQ3xOtcsi1Anux0ONsNbemS2WXSmnGybDZbakJXZZnmlW0X4hrbAwKb2ZrlqtF1c2w2sss2iQXAyy62pG1Sx3vE6yw2CvqBLmrFN2Zrkm0XUgcyi2dC6LZYt68gq6f72PbwbMQbBsHGzy4TGc3TnZFDP7igxoVfNNYuuPEftjhKz8je2WUTtdu5mZBr1hdtZ7rB68qbTJggNHOoqOQKvhbgt6828VRpaRG0+CmUPAh8xpKE9i+q9CtijpEpDS6imhn6I1QPhRbBLH8Qra/AuMKQP2i+m0ounXrhbgwv2lTfEjgn1Xgb69EGvXOo27aLLssYK+nOI5xhzslx54fDn2IJUr13RTPqqZ0Ntf3ZpUY7FUmrwv7Ip/a5dQC01gJc2nmPqZQm0KLV6fmuj6ai+vi2CFsXj9wTw634hUyQSiUQikUgkEolEIpHof9Fve3Okp7/ixmIAAAAASUVORK5CYII="
				/>
			</defs>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="120"
			height="120"
			fill="none"
			viewBox="0 0 120 120"
		>
			<rect width="119" height="119" x=".5" y=".5" fill="#fff" rx="31.5" />
			<path
				fill="#4353FF"
				d="M47.603 58.066c0-1.255-1.221-2.589-3.334-2.589-2.373 0-4.98 1.74-5.378 5.214-.407 3.507 1.775 5.066 3.975 5.066s3.351-.858 4.53-2c-1.014-1.274-2.322-.685-2.573-.555-.277.139-.632.329-1.36.329-.848 0-1.714-.381-1.714-1.966 5.438-.537 5.854-2.243 5.854-3.498Zm-2.693.208c-.035.39-.19 1.057-2.945 1.43.58-2.062 1.689-2.218 2.2-2.218a.72.72 0 0 1 .745.788Zm-9.215.338s-1.169 3.672-1.264 3.975c-.035-.312-.892-6.902-.892-6.902-1.992 0-3.057 1.42-3.62 2.918l-1.541 3.993a747.1 747.1 0 0 0-.217-3.95c-.121-1.835-1.801-2.952-3.161-2.952l1.645 9.985c2.088-.009 3.213-1.42 3.802-2.919 0 0 1.256-3.247 1.308-3.395.009.139.9 6.314.9 6.314 2.096 0 3.222-1.325 3.828-2.772l2.936-7.213c-2.07 0-3.16 1.411-3.724 2.918Zm19.598-3.152c-1.29 0-2.277.701-3.109 1.732v-.009l.745-6.001c-1.715 0-3.109 1.49-3.378 3.706l-1.299 10.713c.988 0 2.036-.286 2.598-1.013.503.65 1.256 1.169 2.373 1.169 2.893 0 4.876-3.36 4.876-6.513-.017-2.875-1.411-3.784-2.806-3.784Zm-.268 5.152c-.303 1.759-1.282 2.954-2.226 2.954-.953 0-1.36-.425-1.36-.425.182-1.541.295-2.485.641-3.3.347-.813 1.17-2.112 2.027-2.112.84 0 1.22 1.117.918 2.883Zm10.297-4.918h-2.018l.008-.104c.14-1.317.45-2.01 1.481-2.122.702-.07 1.014-.433 1.092-.832.06-.311.25-1.394.25-1.394-4.052-.026-5.325 1.724-5.654 4.391l-.009.06h-.043c-.659 0-1.386.745-1.507 1.69l-.043.346h1.35l-1.134 9.37-.346 1.68c.043 0 .095.009.138.009 1.897-.07 3.11-1.568 3.378-3.742l.883-7.317h.632c.624 0 1.351-.624 1.481-1.663l.06-.372Zm10.496-.174c-2.33 0-4.53 1.715-5.205 4.408-.675 2.694.346 5.88 3.776 5.88 3.42 0 5.395-3.316 5.395-6.079 0-2.745-1.862-4.209-3.966-4.209Zm.944 5.006c-.121 1.221-.658 3.074-2.13 3.074-1.482 0-1.274-2.165-1.127-3.195.156-1.1.771-2.668 2.096-2.668 1.187 0 1.3 1.412 1.16 2.789Zm14.531-1.914s-1.169 3.672-1.264 3.975c-.035-.312-.892-6.902-.892-6.902-1.992 0-3.057 1.42-3.62 2.918l-1.541 3.993c-.009-.286-.217-3.95-.217-3.95-.121-1.835-1.801-2.952-3.16-2.952l1.636 9.985c2.087-.009 3.213-1.42 3.802-2.919 0 0 1.255-3.247 1.299-3.395.008.139.9 6.314.9 6.314 2.096 0 3.222-1.325 3.828-2.772L95 55.694c-2.061 0-3.152 1.411-3.707 2.918Zm-24.066-7.37-1.698 13.692-.346 1.689c.043 0 .095.008.139.008 1.827-.026 3.126-1.628 3.368-3.646l.98-7.854c.293-2.4-1.135-3.889-2.443-3.889Z"
			/>
			<rect width="119" height="119" x=".5" y=".5" stroke="#fff" rx="31.5" />
		</svg>
	{/if}
</Responsive>
