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

const flatten= function (arr)
{
  let newArr=[];
  for (let i =0;i <arr.length; i++)
  {
    if(Array.isArray(arr[i])===false)
    {
      newArr.push(arr[i]);
    }

    else
    {
      for (let j=0; j<arr[i].length; j++)
      {
        newArr.push(arr[i][j]);
      }
    }
  }
  console.log(newArr);
  return(newArr);
}

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]