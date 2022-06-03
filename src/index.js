const express = require("express");
const { helloWorldRouter } = require("./routes/hello-world.route");
const { getAppPort } = require("./utils/config");

const app = express();

const appPort = getAppPort();

// simple route for OpenTelemetry testing
app.get("/", helloWorldRouter);

app.listen(appPort, () => {
  console.log("Listening for requests on port: ", appPort);
});

process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));
