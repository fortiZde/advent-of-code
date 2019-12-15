/**
 * opcode -> Operation
 * 1 - addition
 * 2 - multiplication
 * 99 - HALT
 */

const Operation = opc => {
  const OPCODE = {
    "1": (a, b) => +a + +b,
    "2": (a, b) => +a * +b,
    "99": () => "HALT"
  };
  return OPCODE[opc];
};

module.exports = Operation;
