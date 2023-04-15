const express = require('express');

require('./utils/db.js');

const PORT = 3000;
const server = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello all good');
});
router.get('/movies', (req, res) => {
    const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
    res.send(movies);
});
router.get('/movies/:movie', (req, res) => {
    const nameMovie = req.params.movie;
    const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
    const findMovieIndex = movies.indexOf(nameMovie);
    if (findMovieIndex === -1) {
        res.send('no existe lapelicula');
    }
    res.send(movies[findMovieIndex]);
});

server.use('/', router);

server.listen(PORT, () => {
    console.log(`server runing in http://localhost:${PORT}`);
});
