const fs = require('fs')
const fuelCounterUpper = require('./src/day1.js');

// Read the file and print its contents.
fs.readFile("data/day1.txt", 'utf8', function(err, data) {
  if (err) throw err;
  var lines = data.split(/\r?\n/)
  console.log(lines)
  let totalFuel = fuelCounterUpper.calculateTotalFuel(lines);
  console.log(totalFuel)
});