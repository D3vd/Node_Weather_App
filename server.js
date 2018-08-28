const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

const api_key = "ce70aedf70a7a7224b4bd422d27c4a06";


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res) {
  let query = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}&units=metric`;
  
  request(url, function)
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
