const saveLog = require("../log");
const { io } = require("../server");
const actions = require("../actions");

const actionHandler = (req, res) => {
  if (
    typeof req.params.action === "string" &&
    typeof actions[req.params.action] === "function"
  ) {
    let data = actions[req.params.action]({ req, res, io, saveLog });
    if (typeof data !== "object" || data === null) {
      data = { status: false };
    }
    res.json(data);
  }
};
module.exports = updateCcvHandler;
