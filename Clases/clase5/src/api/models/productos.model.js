const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productoSchema = new Schema(
    {
        name: { type: String, require: true },
        precio: { type: Number, require: true },
        dezcription: { type: String, require: false },
    },
    {
        timestamps: true,
    },
    {
        collection: 'producto',
    }
);
const Producto = mongoose.model('producto', productoSchema);
module.exports = Producto;
