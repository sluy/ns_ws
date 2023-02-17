const updateCCV = ({ io, saveLog }) => {
  io.emit("update-ccv", true);
  saveLog("update-ccv", true);
  return { status: true };
};

module.exports = updateCCV;
