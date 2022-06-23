const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT;

app.get("/", (_, res) => {
  res.send("Deployment not found");
});

app.listen(port, () => {
  console.log(`hmci-default is listening on port ${port}`);
});
