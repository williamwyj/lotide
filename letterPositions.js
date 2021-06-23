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

const letterPositions = function(sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] && sentence[i] !== ' ') {
      results[sentence[i]].push(i)
    } else if (sentence[i] !== ' ') {
      results[sentence[i]] = [i]
    }
  }
  // logic to update results here
  return results;
};

results = letterPositions("lighthouse in the house")

assertArrayEqual(results['l'], [0]);
assertArrayEqual(results['i'], [1, 11]);
assertArrayEqual(results['g'], [2]);
assertArrayEqual(results['h'], [3,5,15,18]);
assertArrayEqual(results['t'], [4, 14]);
assertArrayEqual(results['o'], [6, 19]);
assertArrayEqual(results['u'], [7, 20]);
assertArrayEqual(results['s'], [8, 21]);
assertArrayEqual(results['e'], [9, 16, 22]);
assertArrayEqual(results['n'], [12]);
