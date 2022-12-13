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

const updateProductById = async (productId, name) => {
  const selectedProduct = await productsModel.getProductById(productId);
  if (!selectedProduct) return { message: 'Product not found' };
  await productsModel.updateProductById(productId, name);
  const updatedProduct = await productsModel.getProductById(productId);
  return { message: updatedProduct };
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
  updateProductById,
};