const saveLog = require("../libs/log");
const { io } = require("../libs/server");
const updateCcvHandler = (req, res) => {
  io.emit("update-ccv", true);
  saveLog("update-ccv", true);
  res.json({ status: true });
};
module.exports = updateCcvHandler;
