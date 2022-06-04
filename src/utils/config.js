const PORT = parseInt(process.env.PORT || "3004", 10);

/**
 * Get the application port number
 * @returns {number}
 */
module.exports.getAppPort = () => PORT;

module.exports.metricsPrefix = "gettingstarted_metrics";

module.exports.instanceLabel = process.env.INSTANCE_LABEL || "instance1";
