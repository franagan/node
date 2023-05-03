const { query } = require('express');
const Producto = require('../models/productos.model');

const getAllProductos = async (req, res) => {
    try {
        const allProductos = await Producto.find();
        return res.json(allProductos);
    } catch (error) {
        console.log(error);
    }
};

const setNewProducto = async (req, res) => {
    try {
        // const newObject = {};
        // for (let key in req.body) {
        //     newObject[key] = newObject[key].toLowerCase();
        //     console.log(newObject[key]);
        // }
        const newProduct = new Producto(req.body);
        const createdProduct = await newProduct.save();
        return res.status(200).json(createdProduct);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getAllProductos,
    setNewProducto,
};
