const express = require('express');
const productsController = require('../controllers/products.controller');
const productMiddleware = require('../middlewares/products.middleware');
const salesController = require('../controllers/sales.controller');
const salesMiddleware = require('../middlewares/sales.middleware');

const route = express.Router();
// product.route
route.get('/products', productsController.getAllProducts);
route.post('/products', productMiddleware.verifier, productsController.postProduct);
route.get('/products/:id', productsController.getProductById);
route.put('/products/:id', productMiddleware.verifier, productsController.updateProductById);
route.delete('/products/:id', productsController.deleteProductById);
// sale.route
route.get('/sales', salesController.getAllSales);
route.get('/sales/:id', salesController.getSaleById);
route.post('/sales', salesMiddleware.verifier, salesController.postSales);

module.exports = route;
