const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (letters)
{
  let lettersObject={};
  for (const char of letters)
  {
    if(char!== ' ')
    {
    if(lettersObject[char])
    {
      lettersObject[char]+=1;
    }
    else{
      lettersObject[char]=1;
    }
  }
  }
  return lettersObject;
};

assertEqual(JSON.stringify(countLetters('lhl')), JSON.stringify({ l: 2, h: 1 }));