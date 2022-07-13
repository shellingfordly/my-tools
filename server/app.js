const express = require("express");
const app = express();

app.all("*", function (req, res, next) {
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.use(express.static("dist"));

app.listen("3081", () => {
  console.log("http://localhost:3081 open");
});
