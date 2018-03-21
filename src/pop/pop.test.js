const pop = require('./index');

describe('pop', () => {
  test('it is an immutable version of Array.prototype.pop', () => {
    const first = [ 1, 2, 3 ];
    const second = pop(first);

    expect(first).toEqual([ 1, 2, 3 ]);
    expect(second).toEqual([ 1, 2 ]);
  });
});
