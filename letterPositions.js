const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++)  {
    if (sentence[i] !== ' ')  {
      if (results[sentence[i]])  {
        results[sentence[i]].push(i);
      } else  {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;