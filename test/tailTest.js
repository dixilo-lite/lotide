const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail",()=>{
  it ("Should return an empty array if the array is empty", () =>{
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail([]).length ,0);
  });

   it ("Should return a length one less than the original array", () =>{
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length ,2);
  });
  it ("Should return an empty array if the original has one element", () =>{
    assert.strictEqual(tail(["test"]).length ,0);
  });
  it ("Should return ['Lighthouse', 'Labs'] when input is ['Yo Yo', 'Lighthouse', 'Labs']", () =>{
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
});
})