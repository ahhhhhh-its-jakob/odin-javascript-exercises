const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, num) => {return total + num}, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => {return total * num}, 1);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	let total = 1;
  
  if(num === 0 || num === 1){
    return 1;
  }
  
  for(i = num; i > 1; i--){
    total *= i;
  }

  return total;
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
