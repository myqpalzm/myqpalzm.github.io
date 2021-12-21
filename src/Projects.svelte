<script>
    let php = './image/php.svg'
    let mysql = './image/mysql.svg'
    let laravel = './image/laravel.svg'
    let unity = './image/unity.svg'

    export let projectList = [
        {
            id: 1,
            title: 'Sushipay',
            desc: 'Sushipay is an online restaurant website from a team project. A customer can browse through the available menu and order to their liking.',
            myRole: 'I designed the website logo and CSS.',
            type: 'Online Restaurant Order',
            link: 'https://sushipay-pemweb.xyz/',
            logo: './image/sushipay.svg',
            preview: './image/sushipay-preview.png',
            badge: [
                {
                    badgeLink: php
                },
                {
                    badgeLink: mysql
                }
            ]
        },
        {
            id: 2,
            title: 'Consolepay',
            desc: 'Consolepay is an online gaming console rental website from a team project. A customer can choose from a wide selection of gaming consoles and book a rent for it.',
            myRole: 'I contributed on the overall design of the website and provided all the image assets.',
            type: 'Online Game Console Rental',
            link: 'http://console.sushipay-pemweb.xyz/',
            logo: './image/consolepay.svg',
            preview: './image/consolepay-preview.png',
            badge: [
                {
                    badgeLink: laravel
                },
                {
                    badgeLink: php
                },
                {
                    badgeLink: mysql
                }
            ]
        },
        {
            id: 3,
            title: 'Paycation',
            desc: 'Paycation is an online hotel booking website from a team project. A customer can filter a curated list of hotels and book a hotel of their choosing with ease.',
            myRole: 'I contributed on the overall design of the website and provided dozens of SVGs with its own variations for each hotels. The logo design was "inspired" by a certain online ticketing service company.',
            type: 'Online Hotel Booking',
            link: 'http://hotel.sushipay-pemweb.xyz/',
            logo: './image/paycation.svg',
            preview: './image/paycation-preview.png',
            badge: [
                {
                    badgeLink: laravel
                },
                {
                    badgeLink: php
                },
                {
                    badgeLink: mysql
                }
            ]
        },
    ]

    let gameList = [
        {
            id: 1,
            title: 'Hendry Run',
            desc: 'Hendry Run is a 3D platformer game, made with Unity. The player is tasked with guiding Hendry The Fox to treasure and riches.',
            myRole: 'I was the lead game programmer and designer of the project. I supervised the level designs and game mechanics to ensure playability.',
            type: '3D Platformer',
            link: 'https://umn.itch.io/hendry-run',
            logo: './image/hendryrun.svg',
            preview: './image/hendryrun-preview.png',
            badge: [
                {
                    badgeLink: unity
                }
            ]
        }
    ]
</script>

<main>
    <h1>Front-End Projects:</h1>

    

    {#each projectList as projectList}
    <div class="container">
        <div class="projectDesc">
            <img class="logoImage" src={projectList.logo} alt={projectList.title}>
            {#each projectList.badge as badge}
                <img class="badge" src={badge.badgeLink} alt={projectList.title}>
            {/each}
            <br/><br/>
            <p>{projectList.desc}</p>
            <p>{projectList.myRole}</p>
            <a href={projectList.link} target=”_blank”>Visit website</a>
        </div>
        <div class="projectImage">
            <img class="previewImage" src={projectList.preview} alt="">
        </div>
    </div>
    {/each}

    <h1>Game Project(s):</h1>

    {#each gameList as gameList}
    <div class="container">
        <div class="projectDesc">
            <img class="logoImage" src={gameList.logo} alt={gameList.title}>
            {#each gameList.badge as badge}
                <img class="badge" src={badge.badgeLink} alt={gameList.title}>
            {/each}
            <br/><br/>
            <p>{gameList.desc}</p>
            <p>{gameList.myRole}</p>
            <a href={gameList.link} target=”_blank”>Download game</a>
        </div>
        <div class="projectImage">
            <img class="previewImage" src={gameList.preview} alt="">
        </div>
    </div>
    {/each}

    <h1>Music Project(s):</h1>

    <iframe title="Amusement Park (Recreation)" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1181734933&amp;color=%32e43b&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=true"></iframe>
</main>

<style>
    h1 {
        margin-top: 1em;
        margin-bottom: 2em;
        text-align: center;
    }

    p {
        text-align: justify;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .badge {
        display: inline;
        width: auto;
        height: 20%;
        margin: 0.15em;
        border-radius: 0.3em;
    }

    .logoImage {
        margin-bottom: 1em;
    }

    .previewImage {
        box-shadow: #0000003d 0 0.3em 0.8em;
    }

    @media (min-width: 641px) {
        .container {
            display: grid;
            align-items: center;
			justify-items: left;
            margin-bottom: 6em;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 1fr;
            grid-template-areas:
                "projectDesc projectDesc projectImage projectImage projectImage";
        }

        .projectDesc {
            grid-area: 1 / 1 / 2 / 3;
            margin-right: 4em;
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