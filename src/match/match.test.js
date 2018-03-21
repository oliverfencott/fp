const match = require('./index');

describe('match', () => {
  test(`it is equal to String.prototype.match`, () => {
    expect(match('', 'hello')).toEqual(('hello').match(''));
    expect(match('ll', 'hello')).toEqual(('hello').match('ll'));
  });

  test(`(curried) it is equal to String.prototype.match`, () => {
    expect(match('')('hello')).toEqual(('hello').match(''));
    expect(match('ll')('hello')).toEqual(('hello').match('ll'));
  });
});
