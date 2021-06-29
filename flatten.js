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