const express = require("express");
const router = express.Router();
const PastIntern = require("../models/pastIntern");

router.get("/", async (req, res) => {
  await PastIntern.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({ remark: "Internal Server Error", error: err });
    });
});

module.exports = router;
