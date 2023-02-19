const updateCCV = ({ io }) => {
  io.emit("update-ccv", true);
  return { status: true };
};

module.exports = updateCCV;
