<script>
	import { fade } from 'svelte/transition'

	import Projects from "./Projects.svelte";

	export const name = 'Jonathan Franzeli';
	let role = 'front-end developer';

	let words = [
		'front-end developer',
		'3D hobbyist',
		'college student',
		'human, definitely..'
	]

	let i = 0
	let clear

	let swap = () => {
		if (i === 3){
			role = words[i]
			i = 0
		} else {
			role = words[i]
			i++
		}
	}

	$: {
		clearInterval(clear)
		clear = setInterval(swap, 2000)
	}
</script>

<main>
	<nav>
		
	</nav>

	<div class="container">
		<div class="item1">
			<h1>Hello, this is {name}.</h1>
			<h3>He's a 
				{#key role}
					<span in:fade>{role}.</span>
				{/key}
			</h3>
		</div>
		<div class="item2">
			<img src="https://clarkpaintings.com/wp-content/uploads/2014/12/Pencil_Cat_3.jpg" alt="">
		</div>
	</div>
</main>

<style>
	@media (min-width: 641px) {

		.container {
			display: grid;
			align-items: center;
			justify-items: center;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr;
			grid-template-areas:
				"item1 item1 item1 item2";
		}

		.item1 {
			grid-area: 1 / 1 / 2 / 4;
		}

		.item2 {
			grid-area: 1 / 4 / 2 / 5;
		}
	}

	@media (min-width: 0px) and (max-width: 640px) {
		.container {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(5, 1fr);
			grid-template-areas:
				"item1"
				"item2";
		}

		.item1 {
			grid-area: 1 / 1 / 2 / 2;
		}

		.item2 {
			grid-area: 2 / 1 / 2 / 3;
		}
	}
</style>