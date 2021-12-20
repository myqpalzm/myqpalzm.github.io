<script>
	import { fade } from 'svelte/transition'

	import Home from "./Home.svelte"
	import Projects from "./Projects.svelte"
	import About from "./About.svelte"

	let navCounter = 1
</script>

<main>
	<ul id="navbar">
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
	</ul>

	{#key navCounter}
		{#if navCounter === 0}
			<div in:fade><Home/></div>
		{:else if navCounter === 1}
			<div in:fade><Projects/></div>
		{:else}
			<div in:fade><About/></div>
		{/if}
	{/key}
</main>

<style>
	main {
		padding: 0 10em;
		margin: 0 auto;
	}

	ul#navbar li {
		display : inline-block;
	}
</style>