const calculator = require("./javascript_function.js");

test("Check if add function is working", () => {
  expect(calculator.add(70, 170)).toBe(240);
});

test("Check if subtract function is working", () => {
  expect(calculator.subtract(70, 170)).toBe(-100);
});

test("Check if subtract function is working", () => {
  expect(calculator.multiply(7, 8)).toBe(56);
});

test("Check if subtract function is working", () => {
  expect(calculator.divide(210, 7)).toBe(30);
});
