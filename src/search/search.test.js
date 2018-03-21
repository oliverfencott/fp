const search = require('./search');

describe('search', () => {
  test(`it returns the same value as String.prototype.search`, () => {
    expect(search('h', 'hello')).toBe(('hello').search('h'));
    expect(search('o', 'hello')).toBe(('hello').search('o'));
    expect(search(3, 'hello')).toBe(('hello').search(3));
  });

  test(`(curried) it returns the same value as String.prototype.search`, () => {
    expect(search('h')('hello')).toBe(('hello').search('h'));
    expect(search('o')('hello')).toBe(('hello').search('o'));
    expect(search(3)('hello')).toBe(('hello').search(3));
  });
});
