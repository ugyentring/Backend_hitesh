const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/twitter", (req, res) => {
  res.send("ugyenboss");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login At ugyen.com</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Ugyen Official</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}`);
});
