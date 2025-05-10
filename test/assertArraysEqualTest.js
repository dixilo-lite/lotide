const eqArrays = require ("../eqArrays");
const assertArrayEqual = require("../assertArraysEqual");

assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false