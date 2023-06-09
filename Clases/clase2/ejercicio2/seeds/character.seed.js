const mongoose = require('mongoose');

const Character = require('./models/Character');

const character = [
    {
        name: 'Ursula Corberó',
        age: 32,
        alias: 'Tokio',
    },
    {
        name: 'Pedro Alonso',
        age: 50,
        alias: 'Berlín',
    },
    {
        name: 'Álvaro Morte',
        age: 46,
        alias: 'Profesor',
    },
    {
        name: 'Alba Flores',
        age: 34,
        alias: 'Nairobi',
    },
    {
        name: 'Jaime Lorente',
        age: 29,
        alias: 'Denver',
    },
    {
        name: 'Darko Peric',
        age: 44,
        alias: 'Helsinki',
    },
];

const characterDocuments = characters.map(
    (character) => new Character(character)
);
