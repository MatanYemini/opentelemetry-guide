const express = require("express");
const helloWorldRouter = require("./routes/hello-world.route");
const { getAppPort } = require("./utils/config");
const metricsRouter = require("./routes/metrics.route");

const app = express();

const appPort = getAppPort();

// simple route for OpenTelemetry testing
app.use("/", helloWorldRouter);
app.use("/metrics", metricsRouter);

app.use((req, res) => {
  console.log(`Error 404 on ${req.method} ${req.url}`);
  res.status(404).json("404");
});

app.listen(appPort, () => {
  console.log("Listening for requests on port: ", appPort);
});

process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));
