const request = require("request");
const argv = require("yargs").argv;

let api_key = "ce70aedf70a7a7224b4bd422d27c4a06";
let query = argv.c || "Gatka";

let url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}&units=metric`;

request(url, function(err, response, body) {
  if (err) console.log("error: ", err);
  else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
