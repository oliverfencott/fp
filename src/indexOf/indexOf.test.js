const indexOf = require('./indexOf');

const arr = [ 1, 2, 3, 4, 5 ];

describe('indexOf', () => {
  test('it is equal to Array.prototype.indexOf', () => {
    expect(indexOf(5)(arr)).toEqual(arr.indexOf(5));
  });
});
