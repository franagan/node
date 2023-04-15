const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:3000/upgrade_class_3';
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
