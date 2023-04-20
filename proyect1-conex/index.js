const mongoose = require('mongoose');

require('./conex');

const express = require('express');
require('dotenv').config();

const server = express();

const PORT = 3000;

server.use('/movies/getYear/:year', (req, res) => {
    // console.log(req.params);
    // const year = req.params.year;
    const { year } = req.params;
    const movies = movies.seed;
    const movieYear = movies.find((movie) => movie.year > 2010);
    res.json(movieYear);
});

server.use('/movies/getGenre/:genre', (req, res) => {
    // console.log(req.params);
    // const titleParams = req.params.titleParams;
    const { genre } = req.params;
    const movies = movies.seed;
    const movieGenre = movies.find((movie) => movie.genre == genre);
    res.json(movieGenre);
});

server.use('/movies/getTitle/:titleParams', (req, res) => {
    // console.log(req.params);
    // const titleParams = req.params.titleParams;
    const { titleParams } = req.params;
    const movies = movies.seed;
    const movieId = movies.find((movie) => movie.id == id);
    res.json(movieId);
});

server.use('/movies', (req, res) => {
    const movies = movies.seed;
    res.json(movies);
});

server.use('/', (req, res) => {
    res.send('esto funciona');
});

server.listen(PORT, () => {
    console.log(
        'el servidor esta levantado en la ruta http://localhost' + PORT
    );
});
