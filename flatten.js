// const eqArrays = function(array1, array2) {
//   //Check if array lengths are the same
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   //Since the arrays need to be identical, loop thru both arrays and compare each element
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArrayEqual = function(arrayA,arrayB) {
//   if (eqArrays(arrayA, arrayB)) {
//     console.log(`🟢Assertion Passed, ${arrayA} === ${arrayB}`);
//   } else {
//     console.log(`🔴Assertion Failed, ${arrayA} !== ${arrayB}`);
//   }
// };


const flatten = function(array) {
  let output = [];
  for (element of array) {
    if (Array.isArray(element)){
      for(item of element) {
        output.push(item);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};
module.exports = flatten

// assertArrayEqual(flatten([1,2,[3,4],5,[6], []]), [1,2,3,4,5,6]);
