/* eslint-disable no-console */
// Require dependencies
const opentelemetry = require("@opentelemetry/sdk-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const { diag, DiagConsoleLogger, DiagLogLevel } = require("@opentelemetry/api");
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");
const {
  SemanticResourceAttributes,
} = require("@opentelemetry/semantic-conventions");
const { Resource } = require("@opentelemetry/resources");

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const spanExporter = new ZipkinExporter();

const sdk = new opentelemetry.NodeSDK({
  traceExporter: spanExporter,
  spanProcessor: new opentelemetry.tracing.BatchSpanProcessor(spanExporter),
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "getting-started",
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: "development",
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk
  .start()
  .then(() => {
    console.log("Tracing initialized");
  })
  .catch((error) => console.log("Error initializing tracing", error));

process.on("SIGTERM", () => {
  sdk
    .shutdown()
    .then(() => console.log("Tracing terminated"))
    .catch((error) => console.log("Error terminating tracing", error))
    .finally(() => process.exit(0));
});
