const eqArrays = function (arr1, arr2)
{
  if(arr1.length === arr2.length)
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
const middle = function(arr)
{
  let arrLength = arr.length;
  let middleIndex = Math.floor(arrLength/2);
  if (arrLength <= 2)
    {
      return [];
    }
  else if (arrLength % 2 === 0)
  {
    return [arr[middleIndex-1],arr[middleIndex]]
  }
else 
{
  return [arr[middleIndex]]
}
}

assertArraysEqual(middle([1]),[]); // => [])
assertArraysEqual(middle([1, 2]),[]); // => []

assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
