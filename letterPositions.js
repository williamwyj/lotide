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

module.exports = letterPositions