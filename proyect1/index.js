const express = require('express');
const mongoose = require('mongoose');
require('./conex');
const PORT = 3000;
const server = express();
server.listen(PORT, () => {
    console.log(`se ha conectado a http://localhost:${PORT} `);
});
