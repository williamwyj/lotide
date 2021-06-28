//returns the input array with the first element removed and reindexed.
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
  
};

module.exports = tail;

