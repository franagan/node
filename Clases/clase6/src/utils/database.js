const mongoose = require('mongoose');

const user = 'franpaleromartin';
const password = 'qqcqYH4q8gjfRCpy';
const db = 'clientes';

const DB_URL = `mongodb+srv://${user}:${password}@cluster0.jjui6vw.mongodb.net/${db}?retryWrites=true&w=majority`;

const connect = async () => {
    try {
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const { name, host } = db.connection;
        console.log(`Base de datos: ${name} y host ${host}`);
    } catch (error) {}
};
module.exports = { connect };
