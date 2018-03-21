const map = require('./map');

describe('map', () => {
  test('it is equal to Array.prototype.map', () => {
    expect(map(x => x * 2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => x * 2));
    expect(map(x => `x is equal to ${x}`, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => `x is equal to ${x}`));
  });

  test('(curried) it is equal to Array.prototype.map', () => {
    expect(map(x => x * 2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => x * 2));
    expect(map(x => `x is equal to ${x}`)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => `x is equal to ${x}`));
  });
});
