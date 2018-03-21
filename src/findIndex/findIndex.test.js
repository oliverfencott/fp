const findIndex = require('./findIndex');

const arr = [ 1, 2, 3, 4, 5 ];

describe('findIndex', () => {
  test('it is equal to Array.prototype.findIndex', () => {
    expect(findIndex(i => i < 3)(arr)).toEqual(arr.findIndex(i => i < 3));
  });
});
