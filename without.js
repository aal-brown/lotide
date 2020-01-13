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

let without = function(source, itemsToRemove) {
  let newArray = source;

  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === itemsToRemove[i]) {
        newArray.splice(j,1);
      }
    }
  }

  return newArray;
};

assertArraysEqual(without([1,2,3],[2]),[1,3]);
assertArraysEqual(without(["one","two","three"],["one","three"]),["two"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;