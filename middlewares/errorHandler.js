const errorHandler = (err, req, res, next) => {
  res.status(err.status);
  res.json({
    error: err.message,
  });
};

module.exports = errorHandler;
