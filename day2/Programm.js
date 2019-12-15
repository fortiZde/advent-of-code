const Operation = require("./Operation");

const InitProgramm = programm => {
  return (noun = programm[1], verb = programm[2]) => {
    const memory = [...programm];
    // set inputs
    memory[1] = noun;
    memory[2] = verb;

    for (let i = 0; i < memory.length; i += 4) {
      // extract instruction block
      let instruction = memory.slice(i, i + 4);
      // get operation by opcode
      let op = Operation(instruction[0]);

      let value1 = memory[instruction[1]];
      let value2 = memory[instruction[2]];

      let result = op(value1, value2);
      if (result === "HALT") {
        return memory;
      }
      memory[instruction[3]] = result;
    }
  };
};

module.exports = InitProgramm;
