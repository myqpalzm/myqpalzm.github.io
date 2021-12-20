<script>
    let projectList = [
        {
            id: 1,
            title: 'SushiPay',
            desc: 'This is a description',
            myRole: 'I design the logo',
            type: 'Prototype Online Restaurant',
            link: 'https://sushipay-pemweb.xyz/',
            src: 'https://clarkpaintings.com/wp-content/uploads/2014/12/Pencil_Cat_3.jpg'
        },
        {
            id: 2,
            title: 'ConsolePay',
            desc: 'This is a description',
            myRole: 'I design the logo',
            type: 'Prototype Game Console Rental',
            link: 'http://console.sushipay-pemweb.xyz/',
            src: 'http://console.sushipay-pemweb.xyz/'
        },
        {
            id: 3,
            title: 'Paycation',
            desc: 'This is a description',
            myRole: 'I design the logo',
            type: 'Prototype ',
            src: 'https://hotel.sushipay-pemweb.xyz/'
        },
    ]

    let gameList = [
        {
            id: 1,
            title: 'Hendry Run',
            desc: 'Hendry Run is a 3D platformer.',
            myRole: 'I design the logo',
            type: '3D Platformer',
            src: 'https://umn.itch.io/hendry-run'
        }
    ]
</script>

<main>
    <h1>Projects:</h1>

    {#each projectList as { id, title, desc, myRole, type, src }}
    <div class="container">
        <div class="projectDesc">
            <h1>{title}</h1>
            <h5>{type}</h5>
            <p>{desc}</p>
        </div>
        <div class="projectImage">
            <img {src} alt="">
        </div>
    </div>
    {/each}
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
                "projectDesc projectDesc projectDesc projectImage";
        }

        .projectDesc {
            grid-area: 1 / 1 / 2 / 4;
        }

        .projectImage {
            grid-area: 1 / 4 / 2 / 5;
        }
    }

    @media (min-width: 0px) and (max-width: 640px) {
		.container {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-template-areas:
				"projectDesc"
				"projectImage";
		}

		.projectDesc {
			grid-area: 1 / 1 / 2 / 2;
		}

		.projectImage {
			grid-area: 2 / 1 / 2 / 3;
		}
	}
    
</style>