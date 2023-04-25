const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personaSchema = new Schema(
    {
        name: { type: String, require: true },
        lastName: { type: String, require: true },
        email: { type: String, require: true },
        city: { type: String, require: false },
        phone: { type: Number, require: false },
    },
    {
        collection: 'persona',
    }
);
const Persona = mongoose.model('persona', personaSchema);
module.exports = Persona;
