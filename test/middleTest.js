const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");
const assert = require('chai').assert;

describe("#middle" , () => {
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns 2 for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});


/* assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([10,1,2,4,15,6]),[2,4]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle(["a",1,-1,"w","x",6]),[-1,"w"]); */