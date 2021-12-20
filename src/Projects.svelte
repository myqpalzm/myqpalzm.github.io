<script>
    let projectList = [
        {
            id: 1,
            title: 'SushiPay',
            desc: 'This is a description.',
            myRole: 'I designed the logo.',
            type: 'Online Restaurant Order',
            link: 'https://sushipay-pemweb.xyz/',
            logo: './image/sushipay.svg',
            preview: './image/sushipay-preview.png'
        },
        {
            id: 2,
            title: 'ConsolePay',
            desc: 'This too is a description',
            myRole: 'I also designed the logo.',
            type: 'Online Game Console Rental',
            link: 'http://console.sushipay-pemweb.xyz/',
            logo: './image/consolepay.svg',
            preview: './image/consolepay-preview.png'
        },
        {
            id: 3,
            title: 'Paycation',
            desc: 'Hi, I\'m a description.',
            myRole: 'I designed this logo too.',
            type: 'Online Hotel Booking',
            link: 'http://hotel.sushipay-pemweb.xyz/',
            logo: './image/paycation.svg',
            preview: './image/paycation-preview.png'
        },
    ]

    let gameList = [
        {
            id: 1,
            title: 'Hendry Run',
            desc: 'Hendry Run is a 3D platformer.',
            myRole: 'This logo too.',
            type: '3D Platformer',
            link: 'https://umn.itch.io/hendry-run',
            logo: './image/hendryrun.svg',
            preview: './image/hendryrun-preview.png'
        },
    ]
</script>

<main>
    <h1>Front-End Projects:</h1>

    {#each projectList as { id, title, desc, myRole, type, link, logo, preview }}
    <div class="container">
        <div class="projectDesc">
            <img src={logo} alt={title}>
            <br/>
            <h5><i>{type}</i></h5>
            <p>{desc}</p>
            <p>{myRole}</p>
            <a href={link} target=”_blank”>Visit website</a>
        </div>
        <div class="projectImage">
            <img class="previewImage" src={preview} alt="">
        </div>
    </div>
    {/each}

    <h1>Game Project(s):</h1>

    {#each gameList as { id, title, desc, myRole, type, link, logo, preview }}
    <div class="container">
        <div class="projectDesc">
            <img src={logo} alt={title}>
            <br/>
            <h5><i>{type}</i></h5>
            <p>{desc}</p>
            <p>{myRole}</p>
            <a href={link} target=”_blank”>Visit website</a>
        </div>
        <div class="projectImage">
            <img class="previewImage" src={preview} alt="">
        </div>
    </div>
    {/each}
</main>

<style>
    h1 {
        margin-bottom: 3em;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .previewImage {
        box-shadow: rgba(0, 0, 0, 0.24) 0 0.3em 0.8em;
    }

    @media (min-width: 641px) {
        .container {
            display: grid;
            align-items: center;
			justify-items: left;
            margin-bottom: 3em;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 1fr;
            grid-template-areas:
                "projectDesc projectDesc projectImage projectImage projectImage";
        }

        .projectDesc {
            grid-area: 1 / 1 / 2 / 3;
        }

        .projectImage {
            grid-area: 1 / 3 / 2 / 6;
        }
    }

    @media (min-width: 0px) and (max-width: 640px) {
		.container {
			display: grid;
            align-items: center;
			justify-items: left;
            margin-bottom: 3em;
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