const Operation = require("../Operation");

describe("opcode to operation", () => {
  const AddOperation = Operation(1);
  const MultiplyOperation = Operation(2);
  const HaltOperation = Operation(99);
  const AnotherOperation = Operation(3);

  test("Opcode exists", () => {
    expect(typeof AddOperation).toBe("function");
    expect(typeof MultiplyOperation).toBe("function");
    expect(typeof HaltOperation).toBe("function");

    //Encountering an unknown opcode means something went wrong.
    expect(AnotherOperation).toBeUndefined();
  });

  test("HaltOperation should be HALT", () => {
    expect(HaltOperation(Math.random() * 100, Math.random * 100)).toBe("HALT");
  });

  test.each([
    [1, 2, 3],
    [2, 4, 6],
    [123, 234, 357],
    [111, 222, 333]
  ])("Addition (%d)", (a, b, expected) => {
    expect(AddOperation(a, b)).toBe(expected);
  });
  test.each([
    [1, 2, 2],
    [2, 4, 8],
    [123, 234, 123 * 234],
    [111, 222, 111 * 222]
  ])("Multiply (%d)", (a, b, expected) => {
    expect(MultiplyOperation(a, b)).toBe(expected);
  });
});
