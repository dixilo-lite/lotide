const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectEqual = require("./assertObjectsEqual");
const countLetters = require ("./countLetters");
const eqArrays = require ("./eqArrays");
const eqObjects = require ("./eqObjects");
const findKey = require ("./findKey");
const findKeyByValue = require ("./findKeyByValue");
const flatten = require ("./flatten");
const head   = require("./head");
const letterPosition = require ("./letterPositions");
const map = require ("./map");
const tail   = require("./tail");
const middle = require("./middle");
const takeUntil = require ("./takeUntil");
const without = require ("./without");

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual,
  countLetters: countLetters,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPosition: letterPosition,
  map: map,
  takeUntil: takeUntil,
  without: without
};