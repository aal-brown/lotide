const assertEqual = function(actual, expected) {

  
  if (actual === expected) {
    console.log(`Assertion Passed 👍️👍️👍️: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎️: ${actual} !== ${expected}`);
  }

};

// PSeudocode
// Look through an array, count the number of times each letter appears
//Take in a string
//Function that takes in a string,
//Remove spaces from the string and convert all to lowercase
//Initialize an object
//
//Loop through the string and for each unique character define a new key, if that key already exists then count up, if not create a new key.

let countLetters = function(stringInput) {
  
  let cleanString = stringInput.toLowerCase().split(" ").join("");
  
  let countedLetters = {};

  for (let char of cleanString) {
    if (countedLetters[char]) {
      countedLetters[char] += 1;
    } else {
      countedLetters[char] = 1;
    }
  }
  return countedLetters;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;