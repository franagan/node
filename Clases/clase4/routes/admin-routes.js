const { log } = require('console');
const express = require('express');

const routerAdmin = express.Router();

const products = ['zapas', 'camis', 'gorras', 'calcetines'];

routerAdmin.get('/products', (req, res) => {
    res.status(200);
    res.send(products);
});

routerAdmin.get('/products/:name', (req, res) => {
    console.log(req.params);
    const filteredProducts = products.filter((product) => {
        return product.toLowerCase().includes(req.params.name.toLowerCase());
    });
    if (filteredProducts.length === 0) {
        res.status(404);
        res.send('no existe el producto');
    } else {
        res.status(200);
        res.send(filteredProducts);
    }
    res.status(200);
    res.send(products);
});

routerAdmin.get('/productFilter', (req, res) => {
    console.log(req.query);
    res.send(products[req.query.position]);
});

routerAdmin.post('/add', (request, response) => {
    console.log('hola');
    products.push(request.body.name);
    response.json(products);
});

module.exports = routerAdmin;
