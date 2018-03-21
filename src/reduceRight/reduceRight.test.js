const reduceRight = require('./reduceRight');

describe('reduceRight', () => {
  const fn = (acc, x) => acc + x;
  const memo = 0;
  const arr = [ 1, 2, 3 ];

  test('it is equal to Array.prototype.reduceRight', () => {
    expect(reduceRight(fn, memo, arr)).toEqual(arr.reduceRight(fn), memo);
  });

  test('(curried) it is equal to Array.prototype.reduceRight', () => {
    expect(reduceRight(fn)(memo, arr)).toEqual(arr.reduceRight(fn), memo);
    expect(reduceRight(fn, memo)(arr)).toEqual(arr.reduceRight(fn), memo);
    expect(reduceRight(fn)(memo)(arr)).toEqual(arr.reduceRight(fn), memo);
  });
});
