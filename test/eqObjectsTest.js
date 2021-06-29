const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('eqObjects#', () => {
  it('compare two inputed objects, true if the same', () => {
    const object1 = {a:1,b:1,c:2}
    const object2 = {a:1,b:1,c:2}
    assert.deepStrictEqual(eqObjects(object1, object2),true);
  })
})

describe('eqObjects#', () => {
  it('compare two inputed objects, false if not the same', () => {
    const object1 = {a:1,b:1,c:2}
    const object2 = {a:1,b:1,c:3}
    assert.deepStrictEqual(eqObjects(object1, object2),false);
  })
})