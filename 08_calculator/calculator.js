const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if (arr.length == 0) {
    return 0;
  }

  return arr.reduce((partialSum, a) => partialSum + a);
};

const multiply = function(arr) {
  return arr.reduce((partialProduct, a) => partialProduct * a);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
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
