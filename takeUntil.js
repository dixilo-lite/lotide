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

const takeUntil = function(array, callback) {
  let result=[];
  let newArray=array;
  
  result=array.filter(callback);
  for (let i =0; i<array.length;i ++)
  {
    for (const index of result)
    {
    if (array[i]===index)
    {
      newArray.splice(i);
    }
  }
  }
  console.log(newArray);
  return newArray;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5, -3];
const results1 = takeUntil(data1, x => x < 0);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(takeUntil(data1, x=>x<0),[ 1, 2, 5, 7, 2 ])
assertArrayEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);