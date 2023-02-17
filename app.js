const actionHandler = require("./libs/handlers/action");
const secretKeyCheckMiddleware = require("./libs/middlewares/secret_key_check");
const { app, server } = require("./libs/server");

app.use(secretKeyCheckMiddleware);
app.get("/:action", actionHandler);

server.listen(8080, () => {
  console.log("listening on *:8080");
});
