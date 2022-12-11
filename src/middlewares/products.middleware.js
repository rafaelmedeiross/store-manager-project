const verifier = (req, res, next) => {
  const { name } = req.body;
  const message1 = '"name" is required';
  const message2 = '"name" length must be at least 5 characters long';
  if (!name) return res.status(400).json({ message: message1 });
  if (name.length < 5) return res.status(422).json({ message: message2 });
  next();
};

module.exports = {
  verifier,
};