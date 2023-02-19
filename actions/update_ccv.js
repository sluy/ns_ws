const updateCCV = ({ io }) => {
  io.emit("update-ccv", true);
};

module.exports = updateCCV;
