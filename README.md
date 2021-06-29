# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@williamwyj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: return the first element of input array.
* `tail`: return the input array with the first element removed
* `middle`: return the middle element of an array, if the array have an even number of elements, then return the middle 2 elements.
* `countLetters` : return an object with keys being the letters in the input string, and value the number of times the key appeared in the string.
* `countOnly` : input a array of data and an object containing items as keys and values of true or false to indict weather to include them in the count or not. count the time of items appear in the array, output an object with item name as key and number of time it appears in the array
* `findKey` : input an object containing objects assigned to each element, and a function that assigns one variable to a property of each element object of the object.returns the name of the first element whos key value match the input variable assigned.
* `findKeyByValue` : input an object and key value, return the key of the first key-value pair where the value matchs the input value
* `flatten` : input an array that contain array as its elements, return an array with all elements in the first level of the array, only one level deep.
*  `letterPositions` : input a string, and output an object with each letter in the string (no duplicate) as keys and their positions in the string as values using index of 0.
* `map` : input an array and a function, return an array where each element is the output of the input function with the element of the array as input.
