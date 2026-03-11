const add = function ( a, b ) {
  return a + b;
};

const subtract = function ( a, b ) {
  return a - b;
};

const sum = function ( arr ) {
  let sum = 0;
  for ( let number of arr ) {
    sum += number;
  }
  return sum;
};

const multiply = function ( arr ) {
  let sum = 1;
  for ( let number of arr ) {
    sum *= number;
  }
  return sum;
};

const power = function ( a, b ) {
  let sum = 1;
  for ( i = 1; i <= b; i++ ) {
    sum *= a;
  }
  return sum;
};

const factorial = function ( a ) {
  let sum = 1;
  for ( i = a; i > 1; i-- ) {
    sum *= i;
  }
  return sum;
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
