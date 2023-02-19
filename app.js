const dotenv = require("dotenv");
dotenv.config();
const actionHandler = require("./handlers/action");
const authMiddleware = require("./middlewares/auth");
const { app, server } = require("./libs/server");
app.use(authMiddleware); //All requests must be validated with auth.
app.get("/:action", actionHandler); //Action system handler.

server.listen(process.env.PORT, () => {
  console.log("Listening on *:" + process.env.PORT);
});
