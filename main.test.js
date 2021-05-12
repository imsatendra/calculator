const assert = require("assert");

const {
    addition,
    subtraction,
    multiplication,
    division,
    calculator
} = require('../calculator_using_js/main');

//addition test cases
assert.strictEqual(addition(1, 2), 3);
assert.strictEqual(addition(-1, -2), -3);

//subtraction test cases
assert.strictEqual(subtraction(-4, -2), -2);
assert.strictEqual(subtraction(1, 2), -1);

//multiplication test cases
assert.strictEqual(multiplication(1, 2), 2);
assert.strictEqual(multiplication(-1, 2), -2);

//divison test cases
assert.strictEqual(division(2, 2), 1);
assert.strictEqual(division(4, -2), -2);
assert.strictEqual(division(10, 2), 5);

//calculator test cases
assert.strictEqual(calculator(1, "+", 2), 3);
assert.strictEqual(calculator(-4, "-", -2), -2);
assert.strictEqual(calculator(1, "*", 2), 2);
assert.strictEqual(calculator(2, "/", 2), 1);

