//Map function will take in two arguments
// Array to map
// Callback  function

const eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2)) {
    console.log(`Equal ✔️: ${array1} === ${array2}`);
  } else {
    console.log(`Not equal ✖️: ${array1} !== ${array2}`);
  }
  
};



const words = ["ground", "control", "to", "major", "tom"];

let map = function(array,filterFunc) {

  let modArray = [];
  
  for (let item of array) {
    
    modArray.push(filterFunc(item));

  }

  return modArray;

};

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map([1,2,3,4,5], value => (value % 2 === 0)), [false, true, false, true, false]);


