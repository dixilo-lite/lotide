const eqArrays = require("./eqArrays");
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
// TEST CODE


module.exports = assertArrayEqual;