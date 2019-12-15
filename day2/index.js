const fs = require("fs");

// Getting intCode
const buffer = fs.readFileSync(`${__dirname}/input.txt`);
const intCode = buffer.toString().split(",");

const execute = require("./Programm")(intCode);

/**
 * PART 1
 * replace position 1 with the value 12
 * replace position 2 with the value 2.
 * What value is left at position 0 after the program halts?
 */

const part1 = () => execute(12, 2)[0];

/**
 * PART 2
 * Find the input noun and verb that cause the program to produce the output 19690720.
 * What is 100 * noun + verb? (For example, if noun=12 and verb=2, the answer would be 1202.)
 */

const part2 = () => {
  let tmpResult;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      tmpResult = execute(i, j)[0];
      if (tmpResult == 19690720) {
        return 100 * i + j;
      }
    }
  }
};

const Solutions = {
  Part1: part1(),
  Part2: part2()
};

module.exports = Solutions;
