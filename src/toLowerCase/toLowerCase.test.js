const toLowerCase = require('./index');

describe('toLowerCase', () => {
  test(`it returns the same value as String.prototype.toLowerCase`, () => {
    expect(toLowerCase('WHATSUP?')).toBe(('WHATSUP?').toLowerCase());
  });
});
