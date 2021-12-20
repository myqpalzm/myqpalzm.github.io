var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/myqpalzm/portfolio-joy.git', // Update to point to your repository  
        user: {
            name: 'Jonathan Franzeli', // update to use your name
            email: 'jonathan.franzeli@student.umn.ac.id' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)