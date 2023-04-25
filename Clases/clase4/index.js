const express = require('express');
const cors = require('cors');
// const mongoose = require(' mongoose');
const routeUser = require('./routes/users-routes');
const routeAdmin = require('./routes/admin-routes');

const server = express();
server.use(cors());
server.use(express.json());
const PORT = 5000;

server.use('/info', (req, res) => {
    const persona = {
        nombre: 'Petra',
        apellido: 'Ramirez',
    };
    res.send(persona);
});

server.use('/admin', routeAdmin);
server.use('/users', routeUser);

server.listen(PORT, () => {
    console.log(`Url del servidor : http://localhost:${PORT}`);
});
