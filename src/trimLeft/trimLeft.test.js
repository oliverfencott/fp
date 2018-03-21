const trimLeft = require('./index');

describe('trimLeft', () => {
  test(`it returns the same value as String.prototype.trimLeft`, () => {
    expect(trimLeft('  hello?  ')).toBe(('  hello?  ').trimLeft());
    expect(trimLeft('hello?  ')).toBe(('hello?  ').trimLeft());
    expect(trimLeft('  hello?')).toBe(('  hello?').trimLeft());
    expect(trimLeft('hello?')).toBe(('hello?').trimLeft());
  });
});
