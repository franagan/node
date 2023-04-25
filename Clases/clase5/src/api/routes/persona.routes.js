const express = require('express');

const router = express.Router();

const {
    getAllPersonas,
    setNewPersona,
    modPersona,
    deletePersona,
    filterByCity,
    filterByName,
} = require('../controllers/persona.controller');

const { postAllPersonas } = require('../controllers/persona.controller');

router.get('/', getAllPersonas);

router.post('/', setNewPersona);

router.put('/:id', modPersona);

router.delete('/:id', deletePersona);

router.get('/city', filterByCity);

router.get('/filterName', filterByName);

module.exports = router;
