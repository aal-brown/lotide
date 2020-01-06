const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion Passed 👍️👍️👍️: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎️: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {

  return array.slice(1);
  
};

//Test cases
console.log(tail([]));
assertEqual(tail([1,2,3,4]),[2,3,4]);
assertEqual(tail([1]),1);
assertEqual(tail(["a","b","c"]),["b","c"]);
