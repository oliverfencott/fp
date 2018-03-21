const toUpperCase = require('./index');

describe('toUpperCase', () => {
  test(`it returns the same value as String.prototype.toUpperCase`, () => {
    expect(toUpperCase('whatsup?')).toBe(('whatsup?').toUpperCase());
  });
});
