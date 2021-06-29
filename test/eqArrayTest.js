const assert = require('chai').assert;
const eqArray = require('../eqArray');

describe('eqArray#', () => {
  it('compare two input arrays of numbers, true if the same', () => {
    assert.deepStrictEqual(eqArray([5,6,7],[5,6,7]), true);
  });
  it('compare two input arrays of strings, true if the same', () => {
    assert.deepStrictEqual(eqArray(["Hello", "Lighthouse", "Labs"],["Hello", "Lighthouse", "Labs"]), true);
  });
  it('compare two input arrays of string, false if not the same', () => {
    assert.deepStrictEqual(eqArray(["Hello", "Lighthouse", "Labs"],["Hello", "Lighthouse"]), false);
  });
  it('compare two input arrays of numbers, with elements as arrays, true if the same', () => {
    assert.deepStrictEqual(eqArray([1,[2,3,4],[2,[2,3],4],1],[1,[2,3,4],[2,[2,3],4],1]), true);
  });
  it('compare two input arrays of numbers, with elements as arrays, false if not the same', () => {
    assert.deepStrictEqual(eqArray([1,[2,3,4],[2,[2,3],4],1],[1,[2,3,4],[2,[2,4],4],1]), false);
  });
});