const every = require('./index');

describe('every', () => {
  const arr = [ 1, 2, 3 ];
  const isLessThanThree = x => x < 3;
  const isMoreThanThree = x => x > 3;

  test('it is equal to Array.prototype.every', () => {
    expect(every(isLessThanThree, arr)).toEqual(arr.every(isLessThanThree));
    expect(every(isMoreThanThree, arr)).toEqual(arr.every(isMoreThanThree));
  });

  test('(curried) it is equal to Array.prototype.every', () => {
    expect(every(isLessThanThree)(arr)).toEqual(arr.every(isLessThanThree));
    expect(every(isMoreThanThree)(arr)).toEqual(arr.every(isMoreThanThree));
  });
});
