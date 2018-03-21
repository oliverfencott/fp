const slice = require('./slice');

const arr = [ 1, 2, 3, 4, 5 ];

describe('slice', () => {
  test('it is equal to Array.prototype.slice', () => {
    expect(slice(0, 1)(arr)).toEqual(arr.slice(0, 1));
  });
});
