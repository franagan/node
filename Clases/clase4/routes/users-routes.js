const user = {
    email: 'dayana@gmail.com',
    password: '123456',
};

const users = [user];

//registrar permite añadir un nuevo usuario al array e users
const express = require('express');
const routerUser = express.Router();

routerUser.post('/add', (req, res) => {
    // console.log(req.body);
    const newUser = req.body;
    users.push(newUser.name);
    res.send(users);
});

// login busque usuario y contraseña y devuelva  un mensaje si ha iniciado sesion o no

// routerUser.post('/login', (req, res) => {
//     console.log(req.params);
//     const filteredUser = users.filter(
//         (user) =>
//             user.email === req.body.email && user.password === req.body.password
//     );
//     if (filteredUser.length > 0) {
//         res.status(404);
//         res.send('ha iniciado sesion');
//         console.log('ha iniciado sesion');
//     } else {
//         res.status(200);
//         res.send(' no ha iniciado sesion');
//         console.log('no ha iniciado sesion');
//     }
// });

routerUser.post('/login', (req, res) => {
    console.log('hola');
    const userFind = users.find((user) => {
        return (
            user.email === req.body.email && user.password === req.body.password
        );
    });
    if (userFind) {
        res.status(404);
        res.send('ha iniciado sesion');
        console.log('ha iniciado sesion');
    } else {
        res.status(200);
        res.send(' no ha iniciado sesion');
        console.log('no ha iniciado sesion');
    }
    console.log(userFind);
});

module.exports = routerUser;
