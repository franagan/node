const express = require('express');
require('dotenv').config();

const server = express();

const PORT = process.env.PORT;

server.use('/movies/getYear/:year', (req, res) => {
    // console.log(req.params);
    // const year = req.params.year;
    const { year } = req.params;
    const movies = [
        {
            id: 1,
            title: 'The Matrix',
            director: 'Hermanas Wachowski',
            year: 1999,
            genre: 'Acción',
        },
        {
            id: 2,
            title: 'The Matrix Reloaded',
            director: 'Hermanas Wachowski',
            year: 2003,
            genre: 'Acción',
        },
        {
            id: 3,
            title: 'Buscando a Nemo',
            director: 'Andrew Stanton',
            year: 2003,
            genre: 'Animación',
        },
        {
            id: 4,
            title: 'Buscando a Dory',
            director: 'Andrew Stanton',
            year: 2016,
            genre: 'Animación',
        },
        {
            id: 5,
            title: 'Interestelar',
            director: 'Christopher Nolan',
            year: 2014,
            genre: 'Ciencia ficción',
        },
        {
            id: 6,
            title: '50 primeras citas',
            director: 'Peter Segal',
            year: 2004,
            genre: 'Comedia romántica',
        },
    ];
    const movieYear = movies.find((movie) => movie.year > 2010);
    res.json(movieYear);
});

server.use('/movies/getGenre/:genre', (req, res) => {
    // console.log(req.params);
    // const titleParams = req.params.titleParams;
    const { genre } = req.params;
    const movies = [
        {
            id: 1,
            title: 'The Matrix',
            director: 'Hermanas Wachowski',
            year: 1999,
            genre: 'Acción',
        },
        {
            id: 2,
            title: 'The Matrix Reloaded',
            director: 'Hermanas Wachowski',
            year: 2003,
            genre: 'Acción',
        },
        {
            id: 3,
            title: 'Buscando a Nemo',
            director: 'Andrew Stanton',
            year: 2003,
            genre: 'Animación',
        },
        {
            id: 4,
            title: 'Buscando a Dory',
            director: 'Andrew Stanton',
            year: 2016,
            genre: 'Animación',
        },
        {
            id: 5,
            title: 'Interestelar',
            director: 'Christopher Nolan',
            year: 2014,
            genre: 'Ciencia ficción',
        },
        {
            id: 6,
            title: '50 primeras citas',
            director: 'Peter Segal',
            year: 2004,
            genre: 'Comedia romántica',
        },
    ];
    const movieGenre = movies.find((movie) => movie.genre == genre);
    res.json(movieGenre);
});

server.use('/movies/getTitle/:titleParams', (req, res) => {
    // console.log(req.params);
    // const titleParams = req.params.titleParams;
    const { titleParams } = req.params;
    const movies = [
        {
            id: 1,
            title: 'The Matrix',
            director: 'Hermanas Wachowski',
            year: 1999,
            genre: 'Acción',
        },
        {
            id: 2,
            title: 'The Matrix Reloaded',
            director: 'Hermanas Wachowski',
            year: 2003,
            genre: 'Acción',
        },
        {
            id: 3,
            title: 'Buscando a Nemo',
            director: 'Andrew Stanton',
            year: 2003,
            genre: 'Animación',
        },
        {
            id: 4,
            title: 'Buscando a Dory',
            director: 'Andrew Stanton',
            year: 2016,
            genre: 'Animación',
        },
        {
            id: 5,
            title: 'Interestelar',
            director: 'Christopher Nolan',
            year: 2014,
            genre: 'Ciencia ficción',
        },
        {
            id: 6,
            title: '50 primeras citas',
            director: 'Peter Segal',
            year: 2004,
            genre: 'Comedia romántica',
        },
    ];
    const movieTitle = movies.find((movie) => movie.title == titleParams);
    const findMovieIndex = movies.indexOf(nameMovie);
    if (findMovieIndex === -1) {
        res.send('No se ha encontrado la película');
    }
    res.send(movies[findMovieIndex]);
    res.json(movieTitle);
});

server.use('/movies/:id', (req, res) => {
    // console.log(req.params);
    // const id = req.params.id;
    const { id } = req.params;
    const movies = [
        {
            id: 1,
            title: 'The Matrix',
            director: 'Hermanas Wachowski',
            year: 1999,
            genre: 'Acción',
        },
        {
            id: 2,
            title: 'The Matrix Reloaded',
            director: 'Hermanas Wachowski',
            year: 2003,
            genre: 'Acción',
        },
        {
            id: 3,
            title: 'Buscando a Nemo',
            director: 'Andrew Stanton',
            year: 2003,
            genre: 'Animación',
        },
        {
            id: 4,
            title: 'Buscando a Dory',
            director: 'Andrew Stanton',
            year: 2016,
            genre: 'Animación',
        },
        {
            id: 5,
            title: 'Interestelar',
            director: 'Christopher Nolan',
            year: 2014,
            genre: 'Ciencia ficción',
        },
        {
            id: 6,
            title: '50 primeras citas',
            director: 'Peter Segal',
            year: 2004,
            genre: 'Comedia romántica',
        },
    ];
    const movieId = movies.find((movie) => movie.id == id);
    res.json(movieId);
});

server.use('/movies', (req, res) => {
    const movies = [
        {
            title: 'The Matrix',
            director: 'Hermanas Wachowski',
            year: 1999,
            genre: 'Acción',
        },
        {
            title: 'The Matrix Reloaded',
            director: 'Hermanas Wachowski',
            year: 2003,
            genre: 'Acción',
        },
        {
            title: 'Buscando a Nemo',
            director: 'Andrew Stanton',
            year: 2003,
            genre: 'Animación',
        },
        {
            title: 'Buscando a Dory',
            director: 'Andrew Stanton',
            year: 2016,
            genre: 'Animación',
        },
        {
            title: 'Interestelar',
            director: 'Christopher Nolan',
            year: 2014,
            genre: 'Ciencia ficción',
        },
        {
            title: '50 primeras citas',
            director: 'Peter Segal',
            year: 2004,
            genre: 'Comedia romántica',
        },
    ];
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
