const eqArrays = function(array1, array2) {
  //Check if array lengths are the same
  if (array1.length !== array2.length) {
    return false;
  }
  //Since the arrays need to be identical, loop thru both arrays and compare each element
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(arrayA,arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`🟢Assertion Passed, ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🔴Assertion Failed, ${arrayA} !== ${arrayB}`);
  }
};

const without = function(source, itemsToRemove) {
  //create a new output array that is empty
  let output = [];
  //loop thru each item in the source and nest loop thru the itemsToRemove array
  //to only copy elements not in the itemsToRemove array into the output array
  for (let element of source) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (element !== itemsToRemove[i] && i === itemsToRemove.length - 1) {
        output.push(element);
      }
    }
  }
  return output;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArrayEqual(words, ["hello", "world", "lighthouse"]);

