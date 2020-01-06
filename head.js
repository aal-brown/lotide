const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion Passed 👍️👍️👍️: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎️: ${actual} !== ${expected}`);
  }

};

const head = function(array) {

  return array[0];
  
}
/* Test cases
console.log(head([]));
assertEqual(head([1,2,3,4]),1);
assertEqual(head([1]),1);
assertEqual(head(["a","b","c"]),"a");
assertEqual(head(["a","b","c"]),"b");
*/