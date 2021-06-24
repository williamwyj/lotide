const findKey = (object,callback) => {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);// => "noma"

console.log(results);
