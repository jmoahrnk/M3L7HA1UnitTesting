// let obj = {
//   num1: 100,
//   num2: 50,
//   sum: 150,
//   difference: 50,
//   product: 500,
//   qoutient: 20,
// };

// function showData(obj) {
//   console.log("First Number: " + obj.num1);
//   console.log("Second Number: " + obj.num2);
//   console.log("The sum is: " + obj.sum);
//   console.log("The difference is: " + obj.difference);
//   console.log("The product is: " + obj.product);
//   console.log("The quotient is: " + obj.qoutient);
//   console.log("==============================");
// }

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

// function test_add() {
//   const result = add(4, 5);
//   const expected = 9;

//   console.assert(
//     result === expected,
//     `Check add function - Expects: ${expected} Recieved ${result}`
//   );
// }
// test_add();

// function test_subtract() {
//   const result = subtract(4, 5);
//   const expected = -1;

//   console.assert(
//     result === expected,
//     `Check subtract function - Expects: ${expected} Recieved ${result}`
//   );
// }
// test_subtract();

// test_multiply();
// function test_multiply() {
//   const result = multiply(4, 5);
//   const expected = 20;

//   console.assert(
//     result === expected,
//     `Check multiply function - Expects: ${expected} Recieved ${result}`
//   );
// }
// test_multiply();

// function test_divide() {
//   const result = divide(8, 4);
//   const expected = 2;

//   console.assert(
//     result === expected,
//     `Check divide function - Expects: ${expected} Recieved ${result}`
//   );
// }
// test_divide();

// function newSetOfNumbers(num1, num2) {
//   obj.num1 = num1;
//   obj.num2 = num2;
//   obj.sum = add(num1, num2);
//   obj.difference = subtract(num1, num2);
//   obj.product = multiply(num1, num2);
//   obj.qoutient = divide(num1, num2);
// }

// showData(obj);
// newSetOfNumbers(200, 10);
// showData(obj);
// newSetOfNumbers(500, 20);
// showData(obj);
