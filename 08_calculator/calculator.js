const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function([...arr]) {
	let add = 0;
  arr.forEach((x) => {add += x});
  return add;
};

const multiply = function([...arr]) {
  let multiply = 1;
  arr.forEach((x) => {multiply *= x});
  return multiply;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
	let arr = [];
  let multiply = 1;
  for (let i = 1; i <= x; i++) {
    arr.push(i);
  }
  arr.forEach((x) => {multiply *= x});
  return multiply;

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
