const assert = require ("chai").assert;
const middle = require ("../middle");
/*

assertArraysEqual(middle([1]),[]); // => [])
assertArraysEqual(middle([1, 2]),[]); // => []

assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
*/
describe("#middle",()=>{
  it("should return an empty array if there is an array with 1 element inside",()=>{
    assert.strictEqual(middle([1]).length,0);
  });

   it("should return an empty array if there is an array with 2 element inside",()=>{
    assert.strictEqual(middle([1,2]).length,0);
  });
   it("should return an array with one value if there is an array with 3 element inside",()=>{
    assert.strictEqual(middle([1,2,3]).length,1);
  });

   it("should return an array with one value if there is an array with 3 element inside",()=>{
    assert.strictEqual(middle([1,2,3])[0],2);
  });
});