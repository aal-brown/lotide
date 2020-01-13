const eqArrays = require("./eqArrays.js");

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2)) {
    console.log(`Equal ✔️: ${array1} === ${array2}`);
  } else {
    console.log(`Not equal ✖️: ${array1} !== ${array2}`);
  }
  
};

module.exports = assertArraysEqual;