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

const middle = function(arrayInput) {
  let middle = [];
  let middleIndex = 0;
  
  if (arrayInput.length % 2 === 0) {
    middleIndex = (Math.floor(arrayInput.length / 2)) - 1;
    middle.push(arrayInput[middleIndex], arrayInput[middleIndex + 1]);
  } else if (arrayInput.length % 2 !== 0 && arrayInput.length >= 2) {
    middleIndex = Math.floor(arrayInput.length / 2);
    middle.push(arrayInput[middleIndex]);
  }
  return middle;
};

assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([10,1,2,4,15,6]),[2,4]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle(["a",1,-1,"w","x",6]),[-1,"w"]);
