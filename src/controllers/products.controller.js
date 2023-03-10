const productsService = require('../services/products.services');

const getAllProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();
  res.status(200).json(message);
};

const getProductById = async (req, res) => {
  // console.log(res);
  const { id } = req.params;
  const convertedId = Number(id);
  const { message } = await productsService.getProductById(convertedId);
  if (typeof (message) === 'string') return res.status(404).json({ message });
   return res.status(200).json(message);
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const convertedId = Number(id);
  const { name } = req.body;
  const { message } = await productsService.updateProductById(convertedId, name);
  if (typeof (message) === 'string') return res.status(404).json({ message });
  return res.status(200).json(message);
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const convertedId = Number(id);
  const { message } = await productsService.deleteProductById(convertedId);
  if (typeof (message) === 'string') return res.status(404).json({ message });
  return res.status(204).json(message);
};

const searchProducts = async (req, res) => {
  const { q } = req.query;
  const { message } = await productsService.searchProducts(q);
  if (typeof (message) === 'string') return res.status(404).json({ message });
  return res.status(200).json(message);
};

const postProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.postProduct(name);
  if (typeof (message) === 'string') return res.status(404).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  postProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts,
};