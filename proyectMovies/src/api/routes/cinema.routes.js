const express = require('express');

const router = express.Router();

const {
    setNewCinema,
    getCinema,
    modCinema,
    deleteCinema,
} = require('../controllers/cinema.controller');

router.get('/cinemas', getCinema);
router.post('/', setNewCinema);
router.put('/:id', modCinema);
router.delete('/:id', deleteCinema);

module.exports = router;
