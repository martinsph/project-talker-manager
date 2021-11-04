const errorHandler = (err, _req, res, _next) => { 
  console.log(err);
  res.status(500).json({ message: err.message });
};

module.exports = { errorHandler };
