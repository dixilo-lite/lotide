const countLetters = function(letters) {
  let lettersObject = {};
  // for loop to iterate through all letters of a string and add the number of times it appears for each letter in an object
  for (const char of letters) {
    if (char !== ' ') {
      if (lettersObject[char]) {
        lettersObject[char] += 1;
      } else  {
        lettersObject[char] = 1;
      }
    }
  }
  return lettersObject;
};


module.exports = countLetters;