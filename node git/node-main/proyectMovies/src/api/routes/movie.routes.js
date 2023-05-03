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

router.get('/movies', getAllMovies);
router.post('/', setNewMovie);
router.get('/id', getMovieId);
router.get('/title', getMovieTitle);
router.get('/genre', getMovieGenre);
router.get('/year', getMovieYear);
router.put('/:id', modMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
