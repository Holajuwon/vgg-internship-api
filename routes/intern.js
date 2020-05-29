const express = require("express");
const router = express.Router();
const Intern = require("../models/intern");

router.post("/", async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    dob,
    track,
    proficiency,
    city,
    state,
    country,
  } = req.body;

  let intern = await Intern.findOne({ email });
  if (intern)
    return res
      .status(400)
      .send("You have already registered for this internship");

  intern = new Intern({
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    track,
    proficiency,
    city,
    state,
    country,
    dateOfBirth: dob,
  });

  try {
    await intern.save();
    return res.status(200).send({
      message: "You have successfully registered for this internship",
      data: intern,
    });
  } catch (ex) {
    for (field in ex.errors) {
      console.log(ex.errors[field].message);
      res.status(500).send("something failed");
    }
  }
});

module.exports = router;
