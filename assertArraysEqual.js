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

assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([1,2,3,4],[1,2,,4]);