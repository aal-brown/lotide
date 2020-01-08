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
    console.log("Equal ✔️");
  } else {
    console.log("Not equal ✖️");
  }
  
};

/* receive arrays as argument into function

*/

const flatten = function(arrayInput) {
  let flattenedArray = [];
  
  for (let item of arrayInput) {
    if (item.length > 1 || Array.isArray(item)) {
      for (let subItem of item) {
        flattenedArray.push(subItem);
      }
    } else {
      flattenedArray.push(item);
    }
  }
  
  return flattenedArray;
};

// Doing the console log below is much quicker than using test assertions for checking, for more complex functions I'll use them.
console.log(flatten([1, 2, [3, 4], 5, [6]]));

console.log(flatten([1, 2, [3, 4], 5, [6,7,8,9,10,"a","b"]]));