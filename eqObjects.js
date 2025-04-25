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
    for (const ob1 of Object.keys(object1))
    {
      if (Array.isArray(object1[ob1]))
      {
        if(eqArrays(object1[ob1],object2[ob1]))
          {
            return true;
          }
          else{
            return false;
          }
      }
      else if(object1[ob1] !== object2[ob1])
      {
          return false;
      } 
      
    }
  return true;
  }
  else 
  {
    return false;
  }
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject),true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject),false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),false); // => false