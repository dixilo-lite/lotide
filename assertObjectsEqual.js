const eqArrays = function (arr1, arr2)
{
  if(arr1.length!==arr2.length)
  {
    return false;
  }
  for (let i = 0; i< arr1.length; i++)
  {
    if(arr1[i]!==arr2[i])
    {
      return (false);
    }
  }
  return (true);
}

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) 
{
  if(Object.keys(object1).length === Object.keys(object2).length)
  {
    for (const key of Object.keys(object1))
    {
      if(Array.isArray(object1[key]))
      {
        if(!eqArrays(object1[key],object2[key]))
        {
          return false;
        }
      }
      else if(object1[key]!==object2[key])
      {
        return false;
      }
    }
    return true;
  }
  return false;
}

const assertObjectsEqual = function (actual, expected)
{
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if(eqObjects(actual,expected))
    {
      console.log(`✅✅ Assertion Passed ${inspect(actual)} equal to ${inspect(expected)}`);
    }
    else{
      console.log(`⛔️⛔️ Assertion Failed ${inspect(actual)} doesn't match ${inspect(expected)}`);
    }
}
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject,anotherShirtObject);
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertObjectsEqual(multiColorShirtObject,longSleeveMultiColorShirtObject);