const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const { connect } = require('./src/utils/database');
const routerMovie = require('./src/api/routes/movie.routes');
const routerCinema = require('./src/api/routes/cinema.routes');
const routerUser = require('./src/api/routes/user.routes');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 6000;
connect();
app.use(express.json());

app.use('/movie', routerMovie);
app.use('/cinema', routerCinema);
app.use('/user', routerUser);

app.listen(PORT, () => {
    console.log(
        `el servidor esta levantado en la ruta http://localhost ${PORT}`
    );
});
