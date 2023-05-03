const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const { connect } = require('./src/utils/database');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 6000;
connect();
app.use(express.json());

// app.use('/team', routerTeam);

app.listen(PORT, () => {
    console.log(`el servidor esta levantado en el puerto ${PORT}`);
});
