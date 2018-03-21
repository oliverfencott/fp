const find = require('./find');

const arr = [ 1, 2, 3, 4, 5 ];

describe('find', () => {
  test('it is equal to Array.prototype.find', () => {
    expect(find(i => i < 3)(arr)).toEqual(arr.find(i => i < 3));
  });
});
