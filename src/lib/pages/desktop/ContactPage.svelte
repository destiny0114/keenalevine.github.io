<script>
	import { Line, Arrow } from '$lib/icons';
</script>

<div class="content">
	<h1 class="heading">Drop a line</h1>
	<h1 class="heading-2"><Line />Let’s work together ?</h1>
	<p>
		If you’re interested in working with me, or collaborating on a project, i’m love to hear from
		you.
	</p>

	<div class="cta-btn">
		<h5>Get in touch</h5>
		<a href="mailto:keenelevine97@gmail.com" class="cta-email">
			<span>keenelevine97@gmail.com</span>
			<Arrow class="arrow-icon" width="27" height="100%" fill="#1e312e" />
		</a>
	</div>

	<footer class="footer">
		<h5>© Keena Levine 2022</h5>
	</footer>
</div>

<style>
	@media only screen and (min-width: 1440px) {
		.content h1 {
			font-family: Rubik, sans-serif;
			font-style: normal;
			font-size: 10.2rem;
			font-weight: 300;
		}

		.content p {
			font-family: Rubik, sans-serif;
			font-size: 2.4rem;
			font-weight: 300;
			color: white;
		}

		.content .heading {
			color: white;
		}

		.content .heading-2 {
			text-align: right;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 0.5em;
			color: #b2cfc5;
		}

		.content .cta-btn h5 {
			font-family: Rubik, sans-serif;
			font-size: 2rem;
			font-weight: 500;
			color: #ffd682;
		}

		.content .cta-btn .cta-email {
			text-decoration: none;
			font-family: Rubik, sans-serif;
			font-size: 2rem;
			font-weight: 300;
			background-color: #ffd682;
			color: black;
			border-radius: 50px;
			padding: 0.7em 1.4em;
		}

		.content .cta-btn .cta-email > :global(.arrow-icon) {
			transition: transform 0.3s;
		}

		.content .cta-btn .cta-email:hover > :global(.arrow-icon) {
			transform: translateX(10px);
		}

		.content .footer {
			position: absolute;
			bottom: 0;
			padding-bottom: 2em;
		}

		.content .footer h5 {
			font-family: Rubik, sans-serif;
			font-size: 1.5rem;
			font-weight: 400;
			line-height: 1.8rem;
			color: #87b6a1;
			margin: 0;
		}
	}
</style>
