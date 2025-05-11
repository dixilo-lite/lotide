# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @dixilo-lite/lotide`

**Require it:**

`const _ = require('@dixilo-lite/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual`: compares two entries and provides a pass or fail message if the entries match
- `head`: returns the first item of a string
- `tail`: returns everything but the first item in a string
- `eqArrays`:compares if two arrays are equal
- `assertArraysEqual`: provides a pass or fail message if the arrays match
- `without`: given an array and an item to remove, it returns an aray with the removed item
- `flatten`: given an array with nested arrays, it returns an array without the nested array
- `middle`: given an array, it returns the middle index of the array.
- `countOnly`: given an array an and object, it'll return an object with the number of times each key appears
- `countLetters`: given a string, it returns a count of each letter in the sentence
- `letterPositions`: given a string, it will return all the indices in the string where each character is found
- `findKeyByValue`: given an object and the value, it will return the key
- `eqObjects`: given two objects, it'll true or false if the objects match
- `assertObjectsEqual`: provides a pass or fail message if the objects match
- `map`: given an object and a callback, it'll apply the callback to the items in the object
- `takeUntil`: given an array and a callback, it'll return the items in the array until the condition is not satisfied.
- `findKey`: given an object and a callback, it will return the first key that satisfies the condition of the callback