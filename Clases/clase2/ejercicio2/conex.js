const mongoose = require('mongoose');

const user = 'franpaleromartin';
const password = 'qqcqYH4q8gjfRCpy';
const db = '';
const uri = `mongodb+srv://${user}:${password}@cluster0.jjui6vw.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(async () => {
        const allCharacters = await CharacterData.find();
        if (allCharacters.length) {
            await Character.collection.drop();
        }
    })
    .catch((err) => console.log(`error deleting data: ${err}`))

    .then(async () => {
        await Character.inserMany(characterDocuments);
    })
    .catch((err) => console.log(`${err}`))
    .finally(() => mongoose.disconnect());
// mongodb+srv://franpaleromartin:<password>@cluster0.jjui6vw.mongodb.net/?retryWrites=true&w=majority
