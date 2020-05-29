const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 250,
  },
  track: {
    type: String,
    required: true,
    maxlength: 250,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  proficiency: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  registerationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Intern = mongoose.model("intern", internSchema);

module.exports = Intern;
