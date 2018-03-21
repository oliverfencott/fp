const forEach = require('./index');

describe('forEach', () => {
  test('it is equal to Array.prototype.forEach', () => {
    expect(forEach(x => x * 2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].forEach(x => x * 2));
  });

  test('(curried) it is equal to Array.prototype.forEach', () => {
    expect(forEach(x => x * 2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].forEach(x => x * 2));
  });
});
