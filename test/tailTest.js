const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;


describe("#tail" , () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
  

// //Test cases
// console.log(tail([]));
// assertEqual(tail([1,2,3,4]),[2,3,4]);
// assertEqual(tail([1]),1);
// assertEqual(tail(["a","b","c"]),["b","c"]);
