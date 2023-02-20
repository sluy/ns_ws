const updateCCV = ({ io, req }) => {
  const clienteId = parseInt(req.query.cliente_id);
  if (!isNaN(clienteId) && clienteId > 0) {
    io.emit("update-ccv", clienteId);
  }
};

module.exports = updateCCV;
