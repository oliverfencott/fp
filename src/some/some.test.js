const some = require('./some');

describe('some', () => {
  const arr = [ 1, 2, 3 ];
  const isLessThanThree = x => x < 3;
  const isMoreThanThree = x => x > 3;

  test('it is equal to Array.prototype.some', () => {
    expect(some(isLessThanThree, arr)).toEqual(arr.some(isLessThanThree));
    expect(some(isMoreThanThree, arr)).toEqual(arr.some(isMoreThanThree));
  });

  test('(curried) it is equal to Array.prototype.some', () => {
    expect(some(isLessThanThree)(arr)).toEqual(arr.some(isLessThanThree));
    expect(some(isMoreThanThree)(arr)).toEqual(arr.some(isMoreThanThree));
  });
});
