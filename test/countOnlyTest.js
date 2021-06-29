const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('countOnly#', () => {
  it('return an object with key value pairs: Jason:1, Fang:2', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhana",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    assert.deepStrictEqual(countOnly(firstNames, {"Jason": true, "Karima" : true, "Fang" : true, "Agouhanna": false}), {'Jason':1, 'Fang':2});
  })
})