const express = require('express');
const cors = require('cors');
const { connect } = require('./src/utils/database');
const routerPersona = require('./src/api/routes/persona.routes');
const routerProductos = require('./src/api/routes/producto.routes');

const app = express();
app.use(cors());
connect();
app.use(express.json());
const PORT = 3000;

app.use('/persona', routerPersona);
app.use('/producto', routerProductos);

app.listen(PORT, () => {
    console.log(`Url del servidor : http://localhost:${PORT}`);
});
