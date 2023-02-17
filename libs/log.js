const fs = require("fs");
const saveLog = (action, data) => {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");
  const path = __dirname + `/../tmp/logs/${action}`;
  const strData = data !== undefined ? " " + JSON.stringify(data) : "";
  const content = `${date} [${action}]${strData}` + "\n";
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, content);
  } else {
    const old = fs.readFileSync(path);
    const fd = fs.openSync(path, "w+");
    fs.writeSync(fd, content, 0, content.length, 0);
    fs.writeSync(fd, old, 0, old.length, content.length);
    fs.close(fd);
  }
};
module.exports = saveLog;
