const express = require("express");
const intern = require("../routes/intern");
const cors = require("cors");
const validate = require("../middleware/request_validator/interns");
const pastIntern = require("../routes/pastIntern");
const facilitators = require("../routes/facilitators");
const alldata = require("../routes/alldata");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api/register", validate, intern);
  app.use("/api/pastinterns", pastIntern);
  app.use("/api/facilitators", facilitators);
  app.use("/api/alldata", alldata);
};
