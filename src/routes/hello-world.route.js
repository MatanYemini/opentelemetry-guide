const express = require("express");

module.exports.helloWorldRouter = express.Router();

this.helloWorldRouter.get("/", (req, res, _next) => {
    res.status(200).json("Hello World!");
});
