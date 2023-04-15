const { log } = require('console');
const fs = require('fs');

const avengers = [
    {
        name: 'SpiderMan',
        power: 70,
    },
    {
        name: 'Dr.Strange',
        power: 80,
    },
    {
        name: 'Hulk',
        power: 110,
    },
];

const avengersJson = JSON.stringify(avengers);

fs.writeFile('avengers.json', avengersJson, () => {
    console.log('avengers.json created!');
});

// const fs = require('fs');
const { parse } = require('path');

fs.readFile('avengers.json', (err, avengers) => {
    if (err) {
        console.log('there was an error');
    } else {
        const parsedAvengers = JSON.parse(avengers);
        console.log(parsedAvengers);
    }
});
