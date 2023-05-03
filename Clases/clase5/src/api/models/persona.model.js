const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personaSchema = new Schema(
    {
        name: { type: String, require: true },
        lastName: { type: String, require: true },
        email: { type: String, required: true },
        city: { type: String, required: false },
        phone: { type: Number, required: false },
        productos: [{ type: Schema.Types.ObjectId, ref: 'producto' }],
    },
    {
        collection: 'persona',
    }
);
const Persona = mongoose.model('persona', personaSchema);
module.exports = Persona;
