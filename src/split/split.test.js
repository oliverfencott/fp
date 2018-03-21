const split = require('./split');

describe('split', () => {
  test(`it is equal to String.prototype.split`, () => {
    expect(split('', 'hello')).toEqual(('hello').split(''));
    expect(split('e')('hello')).toEqual(('hello').split('e'));
  });

  test(`(curried) it is equal to String.prototype.split`, () => {
    expect(split('')('hello')).toEqual([ 'h', 'e', 'l', 'l', 'o' ]);
    expect(split('e', 'hello')).toEqual([ 'h', 'llo' ]);
  });
});
