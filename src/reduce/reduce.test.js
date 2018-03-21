const reduce = require('./reduce');

describe('reduce', () => {
  const fn = (acc, x) => acc + x;
  const memo = 0;
  const arr = [ 1, 2, 3 ];

  test('it is equal to Array.prototype.reduce', () => {
    expect(reduce(fn, memo, arr)).toEqual(arr.reduce(fn), memo);
  });

  test('(curried) it is equal to Array.prototype.reduce', () => {
    expect(reduce(fn)(memo, arr)).toEqual(arr.reduce(fn), memo);
    expect(reduce(fn, memo)(arr)).toEqual(arr.reduce(fn), memo);
    expect(reduce(fn)(memo)(arr)).toEqual(arr.reduce(fn), memo);
  });
});
