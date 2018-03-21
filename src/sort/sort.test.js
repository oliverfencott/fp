const sort = require('./sort');

const fn = (a, b) => {
  if (a === b) {
    return 0;
  }

  return a < b ? 1 : -1;
};

describe('sort', () => {
  test('it an immutable version of Array.prototype.sort', () => {
    const arr = [ 1, 3, 2, 5, 4 ];
    expect(sort(fn, arr)).toEqual(arr.sort(fn));
  });

  test('(curried) it an immutable version of Array.prototype.sort', () => {
    const arr = [ 1, 3, 2, 5, 4 ];
    expect(sort(fn)(arr)).toEqual(arr.sort(fn));
  });
});
