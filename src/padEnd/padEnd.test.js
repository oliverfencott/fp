const padEnd = require('./index');

describe('padEnd', () => {
  test(`it returns the same value as String.prototype.padEnd`, () => {
    expect(padEnd(10, ' ')('hello')).toBe(('hello').padEnd(10, ' '));
    expect(padEnd(4, ' ')('hello')).toBe(('hello').padEnd(4, ' '));
  });
});
