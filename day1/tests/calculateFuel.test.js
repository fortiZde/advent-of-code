const calcFuel = require("../calculateFuel");

/*
PART 1
==============
For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
*/

test("Day1 - Part 1 -- Given hints", () => {
  expect(calcFuel(12)).toBe(2);
  expect(calcFuel(14)).toBe(2);
  expect(calcFuel(1969)).toBe(654);
  expect(calcFuel(100756)).toBe(33583);
});
