const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const logements = require("./logements.json");

app.get("/logements", (req, res) => {
  console.log("Request received");
  res.json(logements);
});

app.listen(port, () => {
  console.log("Server running at https://localhost:${port}");
});
