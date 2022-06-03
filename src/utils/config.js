const PORT = parseInt(process.env.PORT || "3000", 10);

/**
 * Get the application port number
 * @returns {number}
 */
module.exports.getAppPort = () => PORT;
