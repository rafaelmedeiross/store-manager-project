const express = require('express');
const productsController = require('../controllers/products.controller');
const productMiddleware = require('../middlewares/products.middleware');
const salesController = require('../controllers/sales.controller');

const route = express.Router();

route.get('/products', productsController.getAllProducts);
route.post('/products', productMiddleware.verifier, productsController.postProduct);
route.post('/sales', salesController.postSales);
route.get('/products/:id', productsController.getProductById);

module.exports = route;
