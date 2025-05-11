const eqObjects = require("./eqObjects");
const assertObjectsEqual = function(actual, expected)  {
  // used inspect function ti display the object in actual and expected
  const inspect = require("util").inspect;
  if (eqObjects(actual,expected))  {
    console.log(`✅✅ Assertion Passed ${inspect(actual)} equal to ${inspect(expected)}`);
  } else {
    console.log(`⛔️⛔️ Assertion Failed ${inspect(actual)} doesn't match ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;