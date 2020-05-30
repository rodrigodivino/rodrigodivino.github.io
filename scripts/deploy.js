const ghpages = require('gh-pages');
console.log('Starting Deploy');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/rodrigodivino/rodrigodivino.github.io',
        user: {
            name: 'rodrigodivino',
            email: 'rodrigo.sad.lima@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)