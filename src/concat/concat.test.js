const concat = require('./concat');

describe('concat', () => {
  test(`it is equal to String.prototype.concat and Array.prototype.concat`, () => {
    expect(concat(10, [ 1 ])).toEqual([ 1 ].concat(10));
    expect(concat('bar', 'foo')).toEqual(('foo').concat('bar'));
  });

  test(`(curried) it is equal to String.prototype.concat and Array.prototype.concat`, () => {
    expect(concat(10)([ 1 ])).toEqual([ 1 ].concat(10));
    expect(concat('bar')('foo')).toEqual(('foo').concat('bar'));
  });
});
