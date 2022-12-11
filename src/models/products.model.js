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
};