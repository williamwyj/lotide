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

// Returns if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item1 in object1) {
    if (typeof(object1[item1]) === 'object') {
      if (!eqArrays(object1[item1], object2[item1])) {
        return false;
      }
    } else if (object1[item1] !== object2[item1]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🟢Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🔴Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


const cd2 = { c: "1", d: ["2", 3, 4] };



assertObjectsEqual(cd,dc);
assertObjectsEqual(dc,cd2);

