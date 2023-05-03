const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

const conect = async () => {
    try {
        const db = await mongoose.conect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const { name, host } = db.connection;
        console.log(`Base de datos ${name} y host ${host}`);
    } catch (error) {}
};

module.exports = { conect };
