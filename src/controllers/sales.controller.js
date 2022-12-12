const salesService = require('../services/sales.services');

const postSales = async (req, res) => {
  const { body } = req;
  const { message } = await salesService.postSales(body);
  const obj = {
    id: message,
    itemsSold: body,
  };
  res.status(201).json(obj);
};

module.exports = {
  postSales,
};