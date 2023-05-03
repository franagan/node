const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('./src/utils/database');
const userRoutes = require('./src/api/routes/user.routes');

dotenv.config();
const app = express();
app.use(cors());
connect();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use('/user', userRoutes);
app.listen(PORT, () => {
    console.log(`Url del servidor : http://localhost:${PORT}`);
});
