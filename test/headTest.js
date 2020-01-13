const head = require('../head.js');
const assertEqual = require("../assertEqual.js");
const assert = require('chai').assert;

////Test cases
// console.log(head([]));
// assertEqual(head([1,2,3,4]),1);
// assertEqual(head([1]),1);
// assertEqual(head(["a","b","c"]),"a");
// assertEqual(head(["a","b","c"]),"b");

describe("#head" , () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns Hello for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});