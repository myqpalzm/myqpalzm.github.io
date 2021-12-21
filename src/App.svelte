<script>
	import { fade } from 'svelte/transition'

	import Fa from 'svelte-fa'
	import { faAdjust } from '@fortawesome/free-solid-svg-icons'
	import { faGithub } from '@fortawesome/free-brands-svg-icons'
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
	import { faItchIo } from '@fortawesome/free-brands-svg-icons'
	import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

	import Home from "./Home.svelte"
	import Projects from "./Projects.svelte"
	import About from "./About.svelte"

	let navCounter = 0

	function toggle() {
		window.document.body.classList.toggle('dark-mode')
	}
</script>

<main>
	<ul id="navbar">
		<div class="logo">
			
		</div>
		<div class="nav">
			{#if navCounter === 0}
				<li><a href="/" on:click|preventDefault={() => (navCounter = 0)}><strong>Home</strong></a></li> |
			{:else}
				<li><a href="/" on:click|preventDefault={() => (navCounter = 0)}>Home</a></li> |
			{/if}

			{#if navCounter === 1}
				<li><a href="/" on:click|preventDefault={() => (navCounter = 1)}><strong>Projects</strong></a></li> |
			{:else}
				<li><a href="/" on:click|preventDefault={() => (navCounter = 1)}>Projects</a></li> |
			{/if}

			{#if navCounter === 2}
				<li><a href="/" on:click|preventDefault={() => (navCounter = 2)}><strong>About</strong></a></li>
			{:else}
				<li><a href="/" on:click|preventDefault={() => (navCounter = 2)}>About</a></li>
			{/if}
		</div>
		<div class="darkBtn">
			<button on:click={toggle}>
				<Fa icon={faAdjust} size="2x"/>
			</button>
		</div>
	</ul>

	{#key navCounter}
		{#if navCounter === 0}
			<div in:fade><Home /></div>
		{:else if navCounter === 1}
			<div in:fade><Projects /></div>
		{:else}
			<div in:fade><About /></div>
		{/if}
	{/key}
	
	<footer>
		<a href="https://github.com/myqpalzm" title="Github" target="_blank"><Fa icon={faGithub} size="2x"/></a>
		<a href="https://www.linkedin.com/in/jonathan-franzeli-b15094114/" title="Linkedin" target="_blank"><Fa icon={faLinkedin} size="2x"/></a>
		<a href="https://myqpalzm.itch.io/" title="Itch.io" target="_blank"><Fa icon={faItchIo} size="2x"/></a>
		<a href="mailto:jonathan.franzeli@student.umn.ac.id" title="Email"><Fa icon={faEnvelopeOpenText} size="1.9x"/></a>
	</footer>
</main>

<style>
	:global(body) {
		background-color: #fff;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #1a1a1a;
		color: #bfc2c7;
	}

	main {
		padding: 0 5em;
		margin: 0 auto;
	}

	@media (min-width: 641px) {
		#navbar {
			display: grid;
			align-items: center;
			justify-items: center;
			padding-top: 1em;
			margin-bottom: 6em;
			grid-template-columns: repeat(10, 1fr);
			grid-template-rows: 1fr;
			grid-template-areas:
				"nav nav nav nav nav nav nav nav nav darkBtn";
			text-align: center;
		}

		.nav {
			grid-area: 1 / 1 / 2 / 11;
		}

		.darkBtn {
			grid-area: 1 / 10 / 2 / 11;
		}
	}

	@media (min-width: 0px) and (max-width: 640px) {
		#navbar {
			display: grid;
			align-items: center;
			justify-items: center;
			padding-top: 1em;
			margin-bottom: 6em;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(2, 1fr);
			grid-template-areas:
				"nav"
				"darkBtn";
			text-align: center;
		}

		.nav {
			grid-area: 1 / 1 / 2 / 2;
		}

		.darkBtn {
			grid-area: 2 / 1 / 3 / 2;
		}
	}

	button {
		margin: 1em;
		padding: 0.3em 1em 1em 1em;
	}

	:global(body.dark-mode) button {
		background-color: #1a1a1a;
		color: white;
	}

	ul {
		margin: 1em;
	}

	ul#navbar li {
		display : inline-block;
	}

	footer {
		margin: 5em 0;
		text-align: center;
		border: none;
	}

	footer a {
		margin: 0 0.5em;
	}
</style>