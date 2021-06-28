const assert = require('chai').assert;
const tail = require('../tail');

describe('tail#', () => {
  it('return array [\'Lighthouse\',\'Labs\'] for [\'Hello\',\'Lighthouse\',\'Labs\']', () => {
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']), ['Lighthouse','Labs']);
  });
  it('return array [] for [\'Hello\']', () => {
    assert.deepEqual(tail(['Hello']), []);
  });
  it('return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('return array [2,3] for [1,2,3]', () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
});
