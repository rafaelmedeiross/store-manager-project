const connection = require('./connection');

const salesProducts = async ({ productId, quantity }, saleID) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleID, productId, quantity],
  );
  return result;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s ON sp.sale_id = s.id 
        ORDER BY sp.sale_id AND sp.product_id;`,
  );
  return result;
};

const getSaleById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT s.date, sp.product_id, sp.quantity FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s ON sp.sale_id = s.id 
        WHERE sale_id = ?;`, [saleId],
  );
  return result;
};

const deleteSaleById = async (saleId) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [saleId],
  );
  return affectedRows;
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

const updateSaleById = async (convertedId, sales) => {
  console.log(sales);
    await Promise.all(sales.map(async (sale) => {
      await connection.execute(
        `UPDATE StoreManager.sales_products SET quantity = ?
          WHERE sale_id = ?
          AND product_id = ?`,
            [sale.quantity, convertedId, sale.productId],
      );
  }));
};

module.exports = {
  getAllSales,
  getSaleById,
  postSales,
  deleteSaleById,
  updateSaleById,
};
