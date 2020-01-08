//Pseudocode:
// Take in a string and return an object where the position of each character is stored
//Make a function that takes in a string
//Simplify the string
//Define a new object
//loop through the string
//Make a key for each unique character
//If character exists then record the index of it appended to the existing key value
//return the object

let letterPositions = function(stringInput) {
  
  let cleanString = stringInput.toLowerCase().split(" ").join("");
  let letterPosObj = {};

  for (let char in cleanString) {
    
    if (letterPosObj[cleanString[char]]) {
      letterPosObj[cleanString[char]] += ", " + char;

    } else {
      letterPosObj[cleanString[char]] = char;
    }
  
  }

  return letterPosObj;

};

console.log(letterPositions("Lighthouse in the house"));
console.log(letterPositions("LLlllll o oOO jkawdopmpko"));