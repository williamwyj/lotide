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

module.exports = middle