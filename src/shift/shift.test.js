const shift = require('./shift');

const arr = [ 1, 2, 3, 4 ];

describe('shift', () => {
  test(`it returns the same value as Array.prototype.shift`, () => {
    expect(shift(arr)).toBe(arr.shift());
  });
});
