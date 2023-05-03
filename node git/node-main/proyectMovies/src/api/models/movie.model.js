const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        year: { type: Number },
        genre: { type: String, required: true },
    },
    {
        timestamp: true,
    },
    {
        collection: 'movie',
    }
);
const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;
