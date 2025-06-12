const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => (arr.length !== 0) ? arr.reduce((prev, current) => prev + current) : 0;

const multiply = (arr) => arr.reduce((prev, current) => prev * current);

const power = (a, n) => a ** n;

const factorial = function(num) {
	if (num === 0) return 1;
  if (num < 0) return "ERROR";
  return parseInt(num) * factorial(parseInt(num) - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
