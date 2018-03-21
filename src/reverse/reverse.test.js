const reverse = require('./index');

describe('reverse', () => {
  test('it is an immutable version of Array.prototype.reverse', () => {
    const first = [ 1, 2, 3 ];
    const second = reverse(first);

    expect(first).toEqual([ 1, 2, 3 ]);
    expect(second).toEqual([ 3, 2, 1 ]);
  });
});
