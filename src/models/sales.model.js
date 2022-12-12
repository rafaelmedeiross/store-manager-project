const connection = require('./connection');

const salesProducts = async ({ productId, quantity }, saleID) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleID, productId, quantity],
  );
  return result;
};

const postSales = async (sales) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );
  await Promise.all(sales.map(async (sale) => {
    await salesProducts(sale, insertId);
  }));
  return insertId;
};

module.exports = {
  postSales,
};
