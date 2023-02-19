const log = require("../libs/log");
const { io } = require("../libs/server");
const actions = require("../actions");

const actionHandler = (req, res) => {
  if (
    typeof req.params.action === "string" &&
    typeof actions[req.params.action] === "function"
  ) {
    try {
      let data = actions[req.params.action]({ req, res, io, log });
      res.json({ status: true, message: "ok", data });
    } catch (error) {
      res
        .status(500)
        .json({ status: false, message: "Internal error", data: error });
    }
  } else {
    res.status(404).json({ status: false, message: "Not Found." });
  }
};
module.exports = actionHandler;
