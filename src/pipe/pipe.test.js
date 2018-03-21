const pipe = require('./pipe');

const compose = require('../compose');
const reverse = require('../reverse');

const args = [ x => x * 2, x => x + 3, x => `The value is ${x};` ];

describe('compose', () => {
  test('it is equivalent to pipe with arguments reverse', () => {
    expect(pipe(...args)(10)).toEqual(compose(...reverse(args))(10));
  });
});
