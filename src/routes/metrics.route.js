const express = require("express");
const { registerClient } = require("../opentelemetry/monitoring");

const metricsRouter = express.Router();

metricsRouter.get("/", async (_req, res) => {
  res.setHeader("Content-type", registerClient.contentType);
  res.end(await registerClient.metrics());
});

module.exports = metricsRouter;
