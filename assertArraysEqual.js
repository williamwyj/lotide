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
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArrayEqual = function(arrayA,arrayB) {
  if(eqArrays(arrayA, arrayB)){
    console.log(`🟢Assertion Passed, arrays are equal`);
  } else {
    console.log(`🔴Assertion Failed, arrays are not equal`);
  }
};

