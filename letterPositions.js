const eqArrays = function (arr1, arr2)
{
  if(arr1.length===arr2.length)
  {
  for (let i = 0; i< arr1.length; i++)
  {
    if(arr1[i]!==arr2[i])
    {
      return (false);
    }
  }
  return (true);
}
return (false);
}

const assertArrayEqual = function(arr1,arr2)
{
  if(eqArrays(arr1,arr2))
  {
    console.log(`✅✅ Assertion Passed ${arr1} equal to ${arr2}`);
  }
  else{
    console.log(`⛔️⛔️ Assertion Failed${arr1} doesn't match ${arr2}`);
  }
}


const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++)
  {
   if(sentence[i] !== ' ')
   {
      if(results[sentence[i]])
      {
        results[sentence[i]].push(i);
      }
      else{
        results[sentence[i]]=[i];
      }
   }
   
  }
  console.log(results)
  return results;
};

// TEST CODE
assertArrayEqual(JSON.stringify(letterPositions('lighthouse in the house')),JSON.stringify({
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
})
);