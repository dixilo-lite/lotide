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

const assertArraysEqual = function(arr1,arr2)
{
  if(eqArrays(arr1,arr2))
  {
    console.log(`✅✅ Assertion Passed ${arr1} equal to ${arr2}`);
  }
  else{
    console.log(`⛔️⛔️ Assertion Failed${arr1} doesn't match ${arr2}`);
  }
}

const without = function(source, itemToRemove)
{
  let newString=[];
  for (let i = 0; i < source.length; i ++)
  {
    for (let j = 0; j < itemToRemove.length; j ++)
    {
      if(itemToRemove[j]!==source[i])
      {
        newString.push(source[i]);
      }
    }
  }
  console.log(newString);
  
}
// TEST CODE

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);