const replace = require('./replace');

describe('replace', () => {
  test('it is an immutable version of String.prototype.replace', () => {
    expect(replace('foo', 'bar')('foobar')).toBe(('foobar').replace('foo', 'bar'));
  });
});
