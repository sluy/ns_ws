const cfg = require("../../config");
const saveLog = require("../log");

const secretKeyCheckMiddleware = (req, res, next) => {
  if (cfg.secretKey !== req.query.secret) {
    saveLog("secret_key_check", false);
    res.json({ status: false });
  } else {
    saveLog("secret_key_check", true);
    next();
  }
};
module.exports = secretKeyCheckMiddleware;
