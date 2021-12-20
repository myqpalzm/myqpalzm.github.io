<script>
	import { fade } from 'svelte/transition'

	import Home from "./Home.svelte"
	import Projects from "./Projects.svelte"

	let navCounter = 1
</script>

<main>
	<ul id="navbar">
		<li><a href="/" on:click|preventDefault={() => (navCounter = 0)}>Home</a></li> |
		<li><a href="/" on:click|preventDefault={() => (navCounter = 1)}>Profile</a></li>
	</ul>
	
	{#if navCounter === 0}
		<Home/>
	{:else if navCounter === 1}
		<Projects/>
	{:else}
		<Home/>
		<Projects/>
	{/if}
</main>

<style>
	main {
		padding: 0 5em;
		margin: 0 auto;
	}

	ul#navbar li {
		display : inline;
	}
</style>