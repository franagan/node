
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
{
    title: {type: String, required: true},
    director: {type: String, required: true},
    year: {type: Number},
    genre: {type: String, required: true},
},
{
    timestamps : true;
}
);
const Character = mongoose.model('Character', characterSchema);
module.exports = Character;