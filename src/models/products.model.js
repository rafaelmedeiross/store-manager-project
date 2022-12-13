const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getProductById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return result;
};

const searchProducts = async (q) => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE name LIKE '%${q}%';`,
  );
  return result;
};

const updateProductById = async (productId, name) => {
   const [{ changedRows }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, productId],
   );
  return changedRows;
};

const deleteProductById = async (productId) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products  WHERE id = ?',
    [productId],
  );
  return affectedRows;
};

const postProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product],
  );
  // console.log(result);
  return insertId;
};

module.exports = {
  postProduct,
  getAllProducts,
  getProductById,
  searchProducts,
  updateProductById,
  deleteProductById,
};