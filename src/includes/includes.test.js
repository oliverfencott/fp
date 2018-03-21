const includes = require('./includes');

describe('includes', () => {
  test('it is equal to Array.prototype.includes', () => {
    expect(includes(2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(2));
    expect(includes(10, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(10));
  });

  test('(curried) it is equal to Array.prototype.includes', () => {
    expect(includes(2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(2));
    expect(includes(10)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(10));
  });
});
