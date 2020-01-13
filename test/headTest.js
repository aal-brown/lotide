const head = require('../head.js');
const assertEqual = require("../assertEqual.js");

///Test cases
console.log(head([]));
assertEqual(head([1,2,3,4]),1);
assertEqual(head([1]),1);
assertEqual(head(["a","b","c"]),"a");
assertEqual(head(["a","b","c"]),"b");

