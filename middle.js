const assertArraysEqual = require("./assertArraysEqual.js")

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

module.exports = middle;