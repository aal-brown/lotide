const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log("Assertion Passed 👍️👍️👍️: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed 👎️: " + actual + " !== " + expected);
  }

};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1,"1");
assertEqual("this is a string", "this is a string");