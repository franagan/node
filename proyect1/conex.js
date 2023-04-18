const mongoose = require('mongoose');

const user = 'franpaleromartin';
const password = 'qqcqYH4q8gjfRCpy';
const db = 'movies';
const uri = `mongodb+srv://${user}:${password}@cluster0.jjui6vw.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('conectado a mongodb'))

    .catch((e) => console.log('error de conexión', e));

// mongodb+srv://franpaleromartin:<password>@cluster0.jjui6vw.mongodb.net/?retryWrites=true&w=majority
