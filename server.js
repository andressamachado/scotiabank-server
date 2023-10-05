const cors = require("cors");
const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
