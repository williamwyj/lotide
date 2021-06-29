const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue#', () => {
  it('return key by inputing value of an object', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse" ,
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.deepStrictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  })
})