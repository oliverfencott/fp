const filter = require('./index');

describe('filter', () => {
  const arr = [ 1, 2, 3 ];
  const isLessThanThree = x => x < 3;
  const isMoreThanThree = x => x > 3;

  test('it is equal to Array.prototype.filter', () => {
    expect(filter(isLessThanThree, arr)).toEqual(arr.filter(isLessThanThree));
    expect(filter(isMoreThanThree, arr)).toEqual(arr.filter(isMoreThanThree));
  });

  test('(curried) it is equal to Array.prototype.filter', () => {
    expect(filter(isLessThanThree)(arr)).toEqual(arr.filter(isLessThanThree));
    expect(filter(isMoreThanThree)(arr)).toEqual(arr.filter(isMoreThanThree));
  });
});
