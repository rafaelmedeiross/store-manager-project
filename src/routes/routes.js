const express = require('express');
const productsController = require('../controllers/products.controller');

const route = express.Router();

route.get('/products', productsController.getAllProducts);
route.get('/products/:id', productsController.getProductById);

module.exports = route;
