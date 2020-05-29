const express = require("express");
require("dotenv").config();
const app = express();

require("./config/routes")(app);
require("./config/db")();
require("./config/prod")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ⚙ 🔥`);
});
