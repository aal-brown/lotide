const eqArrays = require("../eqArrays.js");
const assertArraysEqual = require("../assertArraysEqual.js");

assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([1,2,3,4],[1,2,,4]);