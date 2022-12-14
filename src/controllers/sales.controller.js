const salesService = require('../services/sales.services');

const getAllSales = async (req, res) => {
  const { message } = await salesService.getAllSales();
  return res.status(200).json(message);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const convertedId = Number(id);
  const { message } = await salesService.getSaleById(convertedId);
  if (typeof (message) === 'string') return res.status(404).json({ message });
  return res.status(200).json(message);
};

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

const deleteSaleById = async (req, res) => {
  const { id } = req.params;
  const convertedId = Number(id);
  const { message } = await salesService.deleteSaleById(convertedId);
  if (typeof (message) === 'string') return res.status(404).json({ message });
  return res.status(204).json(message);
};

const updateSaleById = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const convertedId = Number(id);
  const { message } = await salesService.updateSaleById(convertedId, body);
  if (typeof (message) === 'string') return res.status(404).json({ message });
  const obj = {
    saleId: convertedId,
    itemsUpdated: body,
  };
  return res.status(200).json(obj);
};

module.exports = {
  postSales,
  getAllSales,
  getSaleById,
  deleteSaleById,
  updateSaleById,
};