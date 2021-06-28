const assertEqual = require('../assertEqual')
const eqArray = require('../eqArray')

assertEqual(eqArray([5,6,7],[5,6,7]), true);
assertEqual(eqArray(["Hello", "Lighthouse", "Labs"],["Hello", "Lighthouse", "Labs"]), true);
assertEqual(eqArray(["Hello", "Lighthouse", "Labs"],["Hello", "Lighthouse"]), false);
assertEqual(eqArray([1,[2,3,4],[2,[2,3],4],1],[1,[2,3,4],[2,[2,3],4],1]), true);
assertEqual(eqArray([1,[2,3,4],[2,[2,3],4],1],[1,[2,3,4],[2,[2,4],4],1]), false);