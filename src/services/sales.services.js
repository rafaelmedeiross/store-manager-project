const salesModel = require('../models/sales.model');
const productModel = require('../models/products.model');

const postSales = async (sales) => {
  const productCheck = await Promise.all(sales
    .map(async ({ productId }) => productModel.getProductById(productId)));
  const productValidation = productCheck.some((product) => !product);
  if (productValidation) return { message: 'Product not found' };
  const saleId = await salesModel.postSales(sales);
  return { message: saleId };
};

module.exports = {
  postSales,
};
