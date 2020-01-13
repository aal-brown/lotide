const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');


//Test cases
console.log(tail([]));
assertEqual(tail([1,2,3,4]),[2,3,4]);
assertEqual(tail([1]),1);
assertEqual(tail(["a","b","c"]),["b","c"]);
