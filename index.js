const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Its my first deployment in Heroku");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
