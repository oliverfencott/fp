const curry = require('./curry');

const notCurried = (a, b, c) => a + b + c;
const curried = curry(notCurried);

describe('curry', () => {
  test(`a curried function is equivalent to its non-curried version`, () => {
    expect(notCurried(1, 2, 3)).toEqual(curried(1, 2, 3));
    expect(notCurried(1, 2, 3)).toEqual(curried(1)(2, 3));
    expect(notCurried(1, 2, 3)).toEqual(curried(1, 2)(3));
    expect(notCurried(1, 2, 3)).toEqual(curried(1)(2)(3));
  });
});
