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
    console.log(`🟢Assertion Passed, ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🔴Assertion Failed, ${arrayA} !== ${arrayB}`);
  }
};

const middle = function(array){
  output = [];
  if(array.length === 1 || array.length === 2) {
    return output;
  } else if (array.length % 2 !== 0) {
    output.push(array[Math.ceil(array.length / 2 - 1)]);
    return output;
  } else if (array.length %2 === 0) {
    output.push(array[array.length/2 - 1])
    output.push(array[array.length/2])
    return output;
  }
}

assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1,2]), []);
assertArrayEqual(middle([1,2,3,4]), [2,3]);
assertArrayEqual(middle([1,2,3,4,5]), [3]);