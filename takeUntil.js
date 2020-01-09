//Function to return a slice of an array with elements taken from the beginning
//Make a function that takes in an array and collects items from the array until
//the callback function returns a truthy value.
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

/*
use filter to loop through the array
check each array item against the callback
if the callback is false then push the item into your array
return the final array
*/


const takeUntil = function(array, callback) {

  const newArray = [];
  
  for (let value of array) {

    if (!callback(value)) {

      newArray.push(value);

    } else {

      break;

    }

  }

  return newArray;

};

//const checkFunction = function(value)



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data1, value => value > 5);
console.log(results1);

assertArraysEqual(results1,[1, 2, 5, 7, 2]);
assertArraysEqual(results2,[1, 2, 5]);