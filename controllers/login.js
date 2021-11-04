const crypto = require('crypto');

const number = crypto.randomBytes(8).toString('hex');
const tokenNumber = (req, res, _next) => {
  res.status(200).json({ token: number });
};

module.exports = { tokenNumber };
