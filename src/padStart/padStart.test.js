const padStart = require('./index');

describe('padStart', () => {
  test(`it returns the same value as String.prototype.padStart`, () => {
    expect(padStart(10, ' ')('hello')).toBe(('hello').padStart(10, ' '));
    expect(padStart(4, ' ')('hello')).toBe(('hello').padStart(4, ' '));
  });
});
