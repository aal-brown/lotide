const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion Passed 👍️👍️👍️: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎️: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItemsArr, itemsToCountObj) {
  
  let countedObj = {};
  
  for (let key in itemsToCountObj) {
    if (itemsToCountObj[key] === true) {
      countedObj[key] = 0;
    }
  }

  for (let values of allItemsArr) {
    for (let key in itemsToCountObj) {
      if (values === key && itemsToCountObj[key]) {
        countedObj[key] += 1;
      }
    }
  }

  for (let key in countedObj) {
    if (countedObj[key] === 0) {
      countedObj[key] = undefined;
    }
  }

  return countedObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
