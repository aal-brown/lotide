const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion Passed 👍️👍️👍️: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎️: ${actual} !== ${expected}`);
  }

};

/* Pseudocode
function that takes in an object and a value, it will scan the object and return the first
key which contains the given value, if no key is found, it will return undefined
function that takes in two arguments
define a new var = undefined
loop through object
if(obj[key] === value)
new var = key

return new var
*/

const findKeyByValue = function(objectInput, value) {

  let foundKey = undefined;

  for (let key in objectInput) {
    if (objectInput[key] === value) {
      foundKey = key;
    }
  }

  return foundKey;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;