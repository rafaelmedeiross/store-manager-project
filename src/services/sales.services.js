const salesModel = require('../models/sales.model');
const productModel = require('../models/products.model');

const getAllSales = async () => { 
  const allSales = await salesModel.getAllSales();
  const convertedAllSales = allSales.map((sale) => (
    {
      saleId: sale.sale_id,
      date: sale.date,
      productId: sale.product_id,
      quantity: sale.quantity,
    }
  ));
  console.log(allSales);
  return { message: convertedAllSales };
};

const getSaleById = async (saleId) => {
  const selectedSale = await salesModel.getSaleById(saleId);
  if (!(selectedSale.length)) return { message: 'Sale not found' };
    const convertedselectedSale = selectedSale.map((sale) => (
    {
      date: sale.date,
      productId: sale.product_id,
      quantity: sale.quantity,
    }
    ));
  return { message: convertedselectedSale };
};

const deleteSaleById = async (saleId) => {
  const selectedSale = await salesModel.getSaleById(saleId);
  if (!(selectedSale.length)) return { message: 'Sale not found' };
  await salesModel.deleteSaleById(saleId);
  // const deletedSale = await salesModel.getSaleById(saleId);
  // const convertedDeletedSale = deletedSale.map((sale) => (
  //   {
  //     date: sale.date,
  //     productId: sale.product_id,
  //     quantity: sale.quantity,
  //   }
  // ));
  // return { message: deletedSale };
};

const postSales = async (sales) => {
  const productCheck = await Promise.all(sales
    .map(async ({ productId }) => productModel.getProductById(productId)));
  const productValidation = productCheck.some((product) => !product);
  if (productValidation) return { message: 'Product not found' };
  const saleId = await salesModel.postSales(sales);
  return { message: saleId };
};

module.exports = {
  getAllSales,
  getSaleById,
  postSales,
  deleteSaleById,
};
