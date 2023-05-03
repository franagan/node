const express = require('express');

const router = express.Router();

const {
    getAllMovies,
    setNewMovie,
    getMovieId,
    getMovieTitle,
    getMovieGenre,
    getMovieYear,
    modMovie,
    deleteMovie,
} = require('../controllers/movie.controller');

router.get('/title/:title', getMovieTitle);
router.get('/genre', getMovieGenre);
router.get('/year/:year', getMovieYear);
router.put('/:id', modMovie);
router.delete('/:id', deleteMovie);
router.get('/movies', getAllMovies);
router.get('/:id', getMovieId);
router.post('/', setNewMovie);

module.exports = router;
