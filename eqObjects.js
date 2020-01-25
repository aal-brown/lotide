const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion Passed 👍️👍️👍️: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎️: ${actual} !== ${expected}`);
  }

};

/* Requirement: Take in two objects, return whether they are equal or not
order in object doesnt matter apparently, keys must match, values must match
Pseudocode:
function (object 1 object2)
if lengths dont match, return false
for loop through each item

if items are arrays then use array checker else
if keys dont match and values dont match
return false

outside of loop return true.
Because if you can go through all those tests and no return false is triggered, then return true.
*/

const eqArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  
  for (let key in object1) {

    if (typeof object1[key] === "object") {

      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
    
      }  else {
        return eqObjects(object1[key], object2[key]);
      }
    
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;

const abcd = { a: 1, b: 2, c: {d: 3}};
const dcba = { c: {d: 3}, b: 2, a: 1 };
// console.log(eqObjects(abcd, dcba)); // => ?
// console.log(Object.keys(abcd) === Object.keys(dcba));
// console.log(Object.keys(abcd))
// console.log(Object.keys(dcba))


console.log(eqObjects(abcd, dcba));

eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true

eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }))


console.log(eqObjects({ a: { z: [1,2,3,4,5] }, b: 2 }, { a: { z: [1,2,3,4,5] }, b: 2 }))


console.log(eqObjects({ a: { z: [1,2,3,4,5] }, b: 2 }, { a: { z: [1,2,3,4,5] }, b: 2 }))