const express = require("express");
const router = express.Router();
const Facilitators = require("../models/facilitators");

router.get("/", async (req, res) => {
  await Facilitators.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({ remark: "Internal Server Error", error: err });
    });
});

module.exports = router;
