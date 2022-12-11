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

module.exports = {
  getAllProducts,
  getProductById,
};