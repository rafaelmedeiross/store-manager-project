const express = require('express');
const productsController = require('../controllers/products.controller');
const productMiddleware = require('../middlewares/products.middleware');

const route = express.Router();

route.get('/products', productsController.getAllProducts);
route.post('/products', productMiddleware.verifier, productsController.postProduct);

route.get('/products/:id', productsController.getProductById);

module.exports = route;
