const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(x, y) {
	return Math.pow(x,y);
};

const factorial = function(n) {
	if (n === 0 | n === 1){
    return 1;
  } else if (n < 0) {
    return "Factorial is not defined for negative numbers!";
  } else {
    return n * (factorial(n -1));
  }
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
