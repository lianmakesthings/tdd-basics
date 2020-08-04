
// get mass
// divide by 3
// round down
// subtract 2
let calculateFuel = (mass) => {
  let fuel = 0;
  let input = mass;
  let addedFuel = 1;

  while (addedFuel > 0) {
    let calc = input / 3;
    calc = Math.floor(calc);
    addedFuel = Math.max(calc - 2, 0);

    fuel = fuel + addedFuel;
    input = addedFuel;
  }
  return fuel;
}

let calculateTotalFuel = (masses) => {
  let totalFuel = masses.reduce((pre, curr) => {
    let fuel = calculateFuel(curr);
    return fuel + pre
  }, 0);
  return totalFuel;
}
module.exports = {
 calculateFuel, calculateTotalFuel
}