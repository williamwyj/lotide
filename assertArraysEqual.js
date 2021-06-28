const eqArray = require('./eqArray')

const assertArraysEqual = function(arrayA,arrayB) {
  if(eqArray(arrayA, arrayB)){
    console.log(`🟢Assertion Passed, ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🔴Assertion Failed, ${arrayA} !== ${arrayB}`);
  }
};

module.exports = assertArraysEqual

