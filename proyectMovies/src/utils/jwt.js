const jwt = require('jsonwebtoken');

//const JWT_KEY = 'Updagra2023oiyb.787878*nbsafgytdgknx548789789v.';

const generateSign = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_KEY, { expiresIn: '1h' });
};

const verifySign = (token) => {
    return jwt.verify(token, JWT_KEY);
};

module.exports = { generateSign, verifySign };
