<script>

</script>

<main>
    <div class="container">
        <p>Hi! I'm Jonathan Franzeli, a front-end developer with a passion for learning new things! I'm currently an undergraduate student looking for opportunities to skill up. I specialize in front-end development, graphic design, and video game development, with an interest in music producing and sound engineering.</p>
        <p>This portfolio website is made with <a href="https://svelte.dev/">Svelte</a>, a Javascript framework that I'm currently learning.</p>
        <p>Feel free to take a look at my <a href="./JonathanFranzeli_Resume.pdf" target="_blank">resume</a>.</p>
        <p>Thank you for reading and have a nice day!</p>
    </div>
</main>

<style>
    ::-webkit-scrollbar {
        overflow: scroll;
    }

    p {
        text-align: justify;
    }

    @media (min-width: 641px) {
        .container {
            margin: 0 5em;
        }
    }

    @media (min-width: 0px) and (max-width: 640px) {
        .container {
            margin: 0 0em;
        }

        p {
            text-align: justify;
            text-justify: distribute;
            text-align-last: left;
        }
    }
    
</style>