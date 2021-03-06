const eqArray = function (array1, array2){
  //Check if array lengths are the same
  if (array1.length !== array2.length){
    return false;
  }
  //Since the arrays need to be identical, loop thru both arrays and compare each element
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      if(!eqArray(array1[i], array2[i])) {
        return false;
      }
    } else if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqArray
