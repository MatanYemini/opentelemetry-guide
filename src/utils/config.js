const PORT = parseInt(process.env.PORT || "8000", 10);

/**
 * Get the application port number
 * @returns {number}
 */
module.exports.getAppPort = () => {
    return PORT;
}


