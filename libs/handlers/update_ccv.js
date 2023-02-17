const saveLog = require("../log");
const { io } = require("../server");
const updateCcvHandler = (req, res) => {
  io.emit("update-ccv", true);
  saveLog("update-ccv", true);
  res.json({ status: true });
};
module.exports = updateCcvHandler;
