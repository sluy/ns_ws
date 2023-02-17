const updateCcvHandler = require("./libs/handlers/update_ccv");
const secretKeyCheckMiddleware = require("./libs/middlewares/secret_key_check");
const { app, server } = require("./libs/server");

app.use(secretKeyCheckMiddleware);
app.get("/update-ccv", updateCcvHandler);

server.listen(8080, () => {
  console.log("listening on *:8080");
});
