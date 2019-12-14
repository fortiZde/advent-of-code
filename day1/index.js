const fs = require("fs");

// Part1 and Part2 of fuel calculations
const calcFuel = require("./calculateFuel");
const calcFuelRecursivly = require("./calculateFuelRecursivly");

// Getting masses
const buffer = fs.readFileSync(`${__dirname}/input.txt`);
const inputMasses = buffer.toString().split("\n");

const GetFuelByCalculation = fuelCalculation => masses => {
  return masses.reduce((fuelTotal, mass) => {
    return fuelTotal + fuelCalculation(mass);
  }, 0);
};

const normalMassesCalculator = GetFuelByCalculation(calcFuel);
const recursiveMassesCalculator = GetFuelByCalculation(calcFuelRecursivly);

const Solutions = {
  Part1: normalMassesCalculator(inputMasses),
  Part2: recursiveMassesCalculator(inputMasses)
};

module.exports = Solutions;
