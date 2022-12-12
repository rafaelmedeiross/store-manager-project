const salesModel = require('../models/sales.model');

const postSales = async (sales) => {
  const saleId = await salesModel.postSales(sales);
  return { message: saleId };
};

module.exports = {
  postSales,
};
