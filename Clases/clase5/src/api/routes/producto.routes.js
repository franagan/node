const express = require('express');

const router = express.Router();

const {
    getAllPersonas,
    setNewPersona,
} = require('../controllers/persona.controller');
const {
    getAllProductos,
    setNewProducto,
} = require('../controllers/producto.controller');

router.get('/', getAllProductos);

router.post('/', setNewProducto);

module.exports = router;
