const mongoose = require("mongoose");

const pastInternSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const PastIntern = mongoose.model("PastIntern", pastInternSchema);

module.exports = PastIntern;
