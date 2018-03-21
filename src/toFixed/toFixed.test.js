const toFixed = require('./toFixed');

describe('toFixed', () => {
  test(`it returns the same value as Number.prototype.toFixed`, () => {
    expect(toFixed(0, 3.1)).toBe((3.1).toFixed(0));
    expect(toFixed(2, 3.1)).toBe((3.1).toFixed(2));
  });

  test(`(curried) it returns the same value as Number.prototype.toFixed`, () => {
    expect(toFixed(0)(3.1)).toBe((3.1).toFixed(0));
    expect(toFixed(2)(3.1)).toBe((3.1).toFixed(2));
  });
});
