const push = require('./push');

describe('push', () => {
  test('it is an immutable version of Array.prototype.push', () => {
    const first = [ 1, 2, 3 ];
    const second = push(4, first);

    expect(first).toEqual([ 1, 2, 3 ]);
    expect(second).toEqual([ 1, 2, 3, 4 ]);
  });

  test('(curried) it is an immutable version of Array.prototype.push', () => {
    const first = [ 1, 2, 3 ];
    const second = push(4)(first);

    expect(first).toEqual([ 1, 2, 3 ]);
    expect(second).toEqual([ 1, 2, 3, 4 ]);
  });
});
