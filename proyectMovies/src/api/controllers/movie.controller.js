const { query } = require('express');
const Movie = require('../models/movie.model');

const getAllMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.json(allMovies);
    } catch (error) {
        console.log(error);
    }
};

const getMovieId = async (req, res) => {
    try {
        // console.log(req.query);
        let { idSearch } = req.query;
        const movieId = await Movie.find({ _id: idSearch });
        if (!movieId) {
            return res.status(404).json({ mensaje: 'id no encontrada' });
        }
        return res.status(200).json(movieId);
    } catch (error) {
        console.log(error);
    }
};

const getMovieTitle = async (req, res) => {
    try {
        console.log(req.query);
        let { titleSearch } = req.query;
        const movieTitle = await Movie.find({
            title: titleSearch.toLowerCase(),
        });
        if (!movieTitle) {
            return res.status(404).json({ mensaje: 'Title no encontrado' });
        }
        return res.status(200).json(movieTitle);
    } catch (error) {
        console.log(error);
    }
};

const getMovieGenre = async (req, res) => {
    try {
        console.log(req.query);
        let { genreSearch } = req.query;
        const movieGenre = await Movie.find({
            genre: genreSearch,
        });
        if (!movieGenre) {
            return res.status(404).json({ mensaje: 'genero no encontrado' });
        }
        return res.status(200).json(movieGenre);
    } catch (error) {
        console.log(error);
    }
};

const getMovieYear = async (req, res) => {
    try {
        let { yearSearch } = req.query;
        console.log(yearSearch);
        const movieYear = await Movie.find({
            year: { $gt: yearSearch },
        });
        if (!movieYear) {
            return res.status(404).json('no year');
        }
        return res.status(200).json(movieYear);
    } catch (error) {
        console.log(error);
    }
};

const setNewMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const createdMovie = await newMovie.save();
        return res.status(200).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const modMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {
            new: true,
        });
        return res.status(200).json(updateMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovie = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const deleteMovie = await Movie.findByIdAndDelete(id);
        if (!deleteMovie) {
            return res.status(404).json({ mensaje: 'movie no encontrada' });
        }
        return res.status(200).json(deleteMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getAllMovies,
    setNewMovie,
    getMovieId,
    getMovieTitle,
    getMovieGenre,
    getMovieYear,
    modMovie,
    deleteMovie,
};
