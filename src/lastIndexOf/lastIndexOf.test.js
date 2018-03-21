const lastIndexOf = require('./lastIndexOf');

const arr = [ 1, 2, 3, 4, 5 ];

describe('lastIndexOf', () => {
  test('it is equal to Array.prototype.lastIndexOf', () => {
    expect(lastIndexOf(5)(arr)).toEqual(arr.lastIndexOf(5));
  });
});
