const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return { message: allProducts };
};

const getProductById = async (productId) => {
  const selectedProduct = await productsModel.getProductById(productId);
  if (!selectedProduct) return { message: 'Product not found' };
  return { message: selectedProduct };
};

const postProduct = async (name) => {
  const productId = await productsModel.postProduct(name);
  const product = await productsModel.getProductById(productId);
  return { message: product };
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
};