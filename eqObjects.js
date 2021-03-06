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

// Returns if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item1 in object1) {
    if (typeof object1[item1] === 'object' && !Array.isArray(object1[item1])) {
      if (typeof object2[item1] !== 'object') {
        return false;
      } else {
        if (!eqObjects(object1[item1], object2[item1])) {
          return false;
        }
      }
    } else {
      if (typeof(object1[item1]) === 'object') {
        if (!eqArrays(object1[item1], object2[item1])) {
          return false;
        }
      } else if (object1[item1] !== object2[item1]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects