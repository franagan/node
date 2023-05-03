const express = require('express');

const { login, register } = require('../controllers/user.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.post('/login', () => {
    console.log(' este es el login');
});

router.post('/register', register);

router.post('/checkSession', [isAuth], checkSession);

module.exports = router;
