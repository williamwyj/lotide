const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2){
  //Check if array lengths are the same
  if (array1.length !== array2.length){
    return false;
  }
  //Since the arrays need to be identical, loop thru both arrays and compare each element
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      if(!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArrayEqual = function(arrayA,arrayB) {
  if(eqArrays(arrayA, arrayB)){
    console.log(`🟢Assertion Passed, ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🔴Assertion Failed, ${arrayA} !== ${arrayB}`);
  }
};

assertArrayEqual([[2, 3], [4]], [[2, 3], [4]]) // => true

assertArrayEqual([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
assertArrayEqual([[2, 3], [4]], [[2, 3], 4]) // => false

