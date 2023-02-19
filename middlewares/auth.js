const auth = (req, res, next) => {
  if (process.env.AUTH_KEY !== req.query.secret) {
    res.status(403).json({ status: false, message: "Unauthorized." });
  } else {
    next();
  }
};
module.exports = auth;
