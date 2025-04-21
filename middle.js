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
  console.log("this is arr1 " + arr1);
  console.log("this is arr2 " +arr2);
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


 /* console.log("this is the middle arr" + arr);
  let evenArray=[];
  if (arr.length<=2)
  {
    return([]);
  }
  else if(arr.length>2 && arr.length%2!==0)
  {
    return(evenArray.push(arr[(arr.length/2)-1]));
  }
  else
  {
    evenArray.push(arr[(arr.length/2)-1]);
    evenArray.push(arr[arr.length/2]);
    return (evenArray);
  }
    */


}

assertArraysEqual(middle([1]),[]); // => [])
assertArraysEqual(middle([1, 2]),[]); // => []

assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
