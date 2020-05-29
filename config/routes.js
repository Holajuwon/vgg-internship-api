const express = require("express");
const intern = require("../routes/intern");
const cors = require("cors");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api/register", intern);
};
