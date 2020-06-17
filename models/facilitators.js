const mongoose = require("mongoose");

const facilitatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
  },
  github: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Facilitators = mongoose.model("facilitators", facilitatorSchema);

module.exports = Facilitators;
