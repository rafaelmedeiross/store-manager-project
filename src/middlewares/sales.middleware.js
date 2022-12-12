const verifier = (req, res, next) => {
  const message1 = '"quantity" is required';
  const message2 = '"productId" is required';
  const message3 = '"quantity" must be greater than or equal to 1';

  const productIdCheck = req.body.some((product) => product.productId === undefined);
  const quantityCheck = req.body.some((product) => product.quantity === undefined);
  const minimumValue = req.body.some((product) => product.quantity < 1);
  if (quantityCheck) return res.status(400).json({ message: message1 });
  if (productIdCheck) return res.status(400).json({ message: message2 });
  if (minimumValue) return res.status(422).json({ message: message3 });
  
  next();
};

module.exports = {
  verifier,
};
