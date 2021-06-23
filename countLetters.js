const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let output = {}
  for ( let letter of sentence) {
    if (output[letter] && letter !== ' ') {
      output[letter] += 1;
    } else if (letter !== ' ') {
      output[letter] = 1;
    }
  }
  return output;
}

result = countLetters('this is sparta')

assertEqual(result["t"], 2)
assertEqual(result["h"], 1)
assertEqual(result["i"], 2)
assertEqual(result["s"], 3)
assertEqual(result["p"], 1)
assertEqual(result["a"], 2)

console.log(result)