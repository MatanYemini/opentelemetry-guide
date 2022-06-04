const express = require("express");
const { requestCounterMetric } = require("../opentelemetry/monitoring");

const helloWorldRouter = express.Router();

helloWorldRouter.get("/", (_req, res) => {
  requestCounterMetric.inc(1);
  res.status(200).json("Hello World!");
});

module.exports = helloWorldRouter;
