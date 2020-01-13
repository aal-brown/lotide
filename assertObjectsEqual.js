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

    if (Array.isArray(object1[key])) {
      
      if (eqArrays(object1[key], object2[key]) !== true) return false;
    
    }  else if (object1[key] !== object2[key]) return false;
    
  }
  return true;
};

const assertObjectsEqual = function(inpObj1, inpObj2) {

  const inspect = require('util').inspect;
  
  if (eqObjects(inpObj1, inpObj2)) {
    console.log(`Equal ✔️: ${inspect(inpObj1)} === ${inspect(inpObj2)}`);
  } else {
    console.log(`Not equal ✖️: ${inspect(inpObj1)} !== ${inspect(inpObj2)}`);
  }
  
};

assertObjectsEqual({a:1,b:2,c:3,d:undefined},{a:1,b:2,d:4});

module.exports = assertObjectsEqual;