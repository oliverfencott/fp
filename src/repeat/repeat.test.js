const repeat = require('./repeat');

describe('repeat', () => {
  test(`it returns the same value as String.prototype.repeat`, () => {
    expect(repeat(0, 'hello')).toBe(('hello').repeat(0));
    expect(repeat(3, 'hello')).toBe(('hello').repeat(3));
  });

  test(`(curried) it returns the same value as String.prototype.repeat`, () => {
    expect(repeat(0)('hello')).toBe('');
    expect(repeat(3)('hello')).toBe('hellohellohello');
  });
});
