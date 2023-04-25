const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        movies: [{ type: String, required: true }],
    },
    {
        collection: 'cinema',
    }
);
const Cinema = mongoose.model('cinema', cinemaSchema);
module.exports = Cinema;
