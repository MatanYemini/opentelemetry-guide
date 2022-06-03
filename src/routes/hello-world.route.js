const express = require("express");

module.exports.helloWorldRouter = express.Router();

this.helloWorldRouter.get("/", (_req, res) => {
  res.status(200).json("Hello World!");
});
