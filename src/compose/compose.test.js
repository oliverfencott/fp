const compose = require('./compose');
const pipe = require('../pipe');
const reverse = require('../reverse');

const args = [ x => x * 2, x => x + 3, x => `The value is ${x};` ];

describe('compose', () => {
  test('it is equivalent to pipe with arguments reverse', () => {
    expect(compose(...args)(10)).toEqual(pipe(...reverse(args))(10));
  });
});
