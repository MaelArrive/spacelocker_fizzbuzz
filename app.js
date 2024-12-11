const express = require("express");
const bodyParser = require("body-parser");
const generateFizzBuzz = require("./fizzbuzz");
const monitorSystem = require('./monitor');
const osUtils = require('os-utils');

const app = express();
const PORT = process.env.PORT || 3000;


const CPU_THRESHOLD = 5;
const ALERT_DURATION = 5;
monitorSystem(CPU_THRESHOLD, ALERT_DURATION);

app.use(bodyParser.json());

app.post("/fizzbuzz", (req, res) => {
  const { fizz_nb, buzz_nb, start, end } = req.body;

  if (
    typeof fizz_nb !== "number" ||
    typeof buzz_nb !== "number" ||
    typeof start !== "number" ||
    typeof end !== "number"
  ) {
    return res.status(400).json({ error: "All inputs must be numbers." });
  }

  try {
    const result = generateFizzBuzz(fizz_nb, buzz_nb, start, end);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("FizzBuzz API is running. Use POST /fizzbuzz to test...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app
