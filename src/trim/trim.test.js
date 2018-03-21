const trim = require('./index');

describe('trim', () => {
  test(`it returns the same value as String.prototype.trim`, () => {
    expect(trim('  hello?  ')).toBe(('  hello?  ').trim());
    expect(trim('hello?  ')).toBe(('hello?  ').trim());
    expect(trim('  hello?')).toBe(('  hello?').trim());
    expect(trim('hello?')).toBe(('hello?').trim());
  });
});
