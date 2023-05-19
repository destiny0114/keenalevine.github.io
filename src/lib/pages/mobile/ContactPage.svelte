<script>
	import { Line, Arrow } from '$lib/icons';
</script>

<div class="content">
	<h1 class="heading">Drop a line</h1>
	<h1 class="heading-2"><span class="lets"> Let’s <Line width="60" /></span> work together ?</h1>
	<p>
		If you’re interested in working with me, or collaborating on a project, i’m love to hear from
		you.
	</p>

	<div class="cta-btn">
		<h5>Get in touch</h5>
		<a href="mailto:keenelevine97@gmail.com" class="cta-email">
			<span>keenelevine97@gmail.com</span>
			<Arrow class="arrow-icon" width="20" height="100%" fill="#1e312e" />
		</a>
	</div>

	<div class="footer">
		<h5>© Keena Levine 2022</h5>
	</div>
</div>

<style>
	.content h1 {
		font-family: Rubik, sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 5.2rem;
	}

	.content p {
		font-family: Rubik, sans-serif;
		font-size: 1.4rem;
		font-weight: 300;
		color: white;
	}

	.content .heading {
		text-align: center;
		color: white;
	}

	.content .heading-2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 6.4rem;
		color: #b2cfc5;
	}

	.content .heading-2 .lets {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.content .cta-btn h5 {
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 500;
		color: #ffd682;
	}

	.content .cta-btn .cta-email {
		text-decoration: none;
		width: 100%;
		font-family: Rubik, sans-serif;
		font-size: 1.2rem;
		font-weight: 300;
		background-color: #ffd682;
		color: black;
		border-radius: 50px;
		padding: 0.7em 1.4em;
	}

	.content .cta-btn .cta-email > :global(.arrow-icon) {
		transition: transform 0.3s;
	}

	.content .cta-btn .cta-email:active > :global(.arrow-icon) {
		transform: translateX(10px);
	}

	.content .footer {
		margin-top: 3em;
		margin-bottom: 0.5em;
	}

	.content .footer h5 {
		font-family: Rubik, sans-serif;
		font-size: 1.5rem;
		font-weight: 400;
		color: #87b6a1;
		margin: 0;
	}

	@media only screen and (min-width: 576px) {
		.content h1 {
			font-size: 7.6rem;
		}

		.content p {
			font-size: 1.8rem;
		}

		.content .heading-2 {
			font-size: 7.4rem;
		}

		.content .cta-btn h5 {
			font-size: 2rem;
		}

		.content .cta-btn .cta-email {
			font-size: 1.5rem;
		}
	}
</style>
