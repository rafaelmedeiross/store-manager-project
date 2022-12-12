const salesService = require('../services/sales.services');

const postSales = async (req, res) => {
  const { body } = req;
  const { message } = await salesService.postSales(body);
  if (typeof (message) === 'string') return res.status(404).json({ message });
  const obj = {
    id: message,
    itemsSold: body,
  };
  return res.status(201).json(obj);
};

module.exports = {
  postSales,
};