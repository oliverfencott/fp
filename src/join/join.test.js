const join = require('./index');

describe('join', () => {
  test('it is equal to Array.prototype.join', () => {
    expect(join('', [1, 2, 3])).toEqual([1, 2, 3].join(''));
    expect(join('hello', [1, 2, 3])).toEqual([1, 2, 3].join('hello'));
  });

  test('(curried) it is equal to Array.prototype.join', () => {
    expect(join('')([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].join(''));
    expect(join('hello')([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].join('hello'));
  });
});
