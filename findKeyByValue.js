const findKeyByValue = function(object, value) {
  for (let item in object) {
    if (object[item] === value) {
      return item;
    }
  }
};

module.exports = findKeyByValue