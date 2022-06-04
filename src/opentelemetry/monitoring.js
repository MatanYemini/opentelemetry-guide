const client = require("prom-client");
const { metricsPrefix, instanceLabel } = require("../utils/config");

module.exports.registerClient = new client.Registry();

client.collectDefaultMetrics({
  gcDurationBuckets: [0.1, 0.2, 0.3],
  register: this.registerClient,
  prefix: metricsPrefix,
  eventLoopMonitoringPrecision: 10,
  labels: { NODE_APP_INSTANCE: instanceLabel },
});

module.exports.requestCounterMetric = new client.Counter({
  name: "requestscounter",
  help: "Counttherequests",
});

this.registerClient.registerMetric(this.requestCounterMetric);

this.registerClient.setDefaultLabels({
  app: instanceLabel,
});

client.collectDefaultMetrics({ register: this.registerClient });
