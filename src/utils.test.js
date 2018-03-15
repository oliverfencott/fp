const {
  // Array
  reduce,
  reduceRight,
  map, // ✅
  forEach, // ✅
  every, // ✅
  filter, // ✅
  some, // ✅
  includes, // ✅
  find,
  findIndex,
  join, // ✅
  lastIndexOf,
  reverse, // ✅
  pop, // ✅
  push, // ✅
  shift,
  sort,

  // String
  split, // ✅
  match, // ✅
  repeat, // ✅
  search, // ✅
  toLowerCase, // ✅
  toUpperCase, // ✅
  trim, // ✅
  trimLeft, // ✅
  trimRight, // ✅
  padEnd, // ✅
  padStart, // ✅

  // String/Array
  concat,  // ✅
  replace,
  indexOf,
  slice,

  // Number
  toFixed, // ✅

  // Utils
  curry,
  pipe,
  compose
} = require(`./utils`);

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

// describe('split', () => {
//   //
// });

describe('split', () => {
  test(`it is equal to String.prototype.split`, () => {
    expect(split('', 'hello')).toEqual(('hello').split(''));
    expect(split('e')('hello')).toEqual(('hello').split('e'));
  });

  test(`(curried) it is equal to String.prototype.split`, () => {
    expect(split('')('hello')).toEqual([ 'h', 'e', 'l', 'l', 'o' ]);
    expect(split('e', 'hello')).toEqual([ 'h', 'llo' ]);
  });
});

describe('match', () => {
  test(`it is equal to String.prototype.match`, () => {
    expect(match('', 'hello')).toEqual(('hello').match(''));
    expect(match('ll', 'hello')).toEqual(('hello').match('ll'));
  });

  test(`(curried) it is equal to String.prototype.match`, () => {
    expect(match('')('hello')).toEqual(('hello').match(''));
    expect(match('ll')('hello')).toEqual(('hello').match('ll'));
  });
});

describe('repeat', () => {
  test(`it returns the same value as String.prototype.repeat`, () => {
    expect(repeat(0, 'hello')).toBe(('hello').repeat(0));
    expect(repeat(3, 'hello')).toBe(('hello').repeat(3));
  });

  test(`(curried) it returns the same value as String.prototype.repeat`, () => {
    expect(repeat(0)('hello')).toBe('');
    expect(repeat(3)('hello')).toBe('hellohellohello');
  });
});

describe('search', () => {
  test(`it returns the same value as String.prototype.search`, () => {
    expect(search('h', 'hello')).toBe(('hello').search('h'));
    expect(search('o', 'hello')).toBe(('hello').search('o'));
    expect(search(3, 'hello')).toBe(('hello').search(3));
  });

  test(`(curried) it returns the same value as String.prototype.search`, () => {
    expect(search('h')('hello')).toBe(('hello').search('h'));
    expect(search('o')('hello')).toBe(('hello').search('o'));
    expect(search(3)('hello')).toBe(('hello').search(3));
  });
});

describe('toLowerCase', () => {
  test(`it returns the same value as String.prototype.toLowerCase`, () => {
    expect(toLowerCase('WHATSUP?')).toBe(('WHATSUP?').toLowerCase());
  });
});

describe('toUpperCase', () => {
  test(`it returns the same value as String.prototype.toUpperCase`, () => {
    expect(toUpperCase('whatsup?')).toBe(('whatsup?').toUpperCase());
  });
});

describe('trim', () => {
  test(`it returns the same value as String.prototype.trim`, () => {
    expect(trim('  hello?  ')).toBe(('  hello?  ').trim());
    expect(trim('hello?  ')).toBe(('hello?  ').trim());
    expect(trim('  hello?')).toBe(('  hello?').trim());
    expect(trim('hello?')).toBe(('hello?').trim());
  });
});


describe('trimLeft', () => {
  test(`it returns the same value as String.prototype.trimLeft`, () => {
    expect(trimLeft('  hello?  ')).toBe(('  hello?  ').trimLeft());
    expect(trimLeft('hello?  ')).toBe(('hello?  ').trimLeft());
    expect(trimLeft('  hello?')).toBe(('  hello?').trimLeft());
    expect(trimLeft('hello?')).toBe(('hello?').trimLeft());
  });
});


describe('trimRight', () => {
  test(`it returns the same value as String.prototype.trimRight`, () => {
    expect(trimRight('  hello?  ')).toBe(('  hello?  ').trimRight());
    expect(trimRight('hello?  ')).toBe(('hello?  ').trimRight());
    expect(trimRight('  hello?')).toBe(('  hello?').trimRight());
    expect(trimRight('hello?')).toBe(('hello?').trimRight());
  });
});

describe('padStart', () => {
  test(`it returns the same value as String.prototype.padStart`, () => {
    expect(padStart(10, ' ')('hello')).toBe(('hello').padStart(10, ' '));
    expect(padStart(4, ' ')('hello')).toBe(('hello').padStart(4, ' '));
  });
});

describe('padEnd', () => {
  test(`it returns the same value as String.prototype.padEnd`, () => {
    expect(padEnd(10, ' ')('hello')).toBe(('hello').padEnd(10, ' '));
    expect(padEnd(4, ' ')('hello')).toBe(('hello').padEnd(4, ' '));
  });
});

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


describe('pop', () => {
  test('it is an immutable version of Array.prototype.pop', () => {
    const first = [ 1, 2, 3 ];
    const second = pop(first);

    expect(first).toEqual([ 1, 2, 3 ]);
    expect(second).toEqual([ 1, 2 ]);
  });
});

describe('reverse', () => {
  test('it is an immutable version of Array.prototype.reverse', () => {
    const first = [ 1, 2, 3 ];
    const second = reverse(first);

    expect(first).toEqual([ 1, 2, 3 ]);
    expect(second).toEqual([ 3, 2, 1 ]);
  });
});


describe('join', () => {
  test('it is equal to Array.prototype.join', () => {
    expect(join('', [1, 2, 3])).toEqual([1, 2, 3].join(''));
    expect(join('hello', [1, 2, 3])).toEqual([1, 2, 3].join('hello'));
  });

  test('(curried) it is equal to Array.prototype.join', () => {
    expect(join('')([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].join(''));
    expect(join('hello')([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].join('hello'));
  });
});

describe('map', () => {
  test('it is equal to Array.prototype.map', () => {
    expect(map(x => x * 2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => x * 2));
    expect(map(x => `x is equal to ${x}`, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => `x is equal to ${x}`));
  });

  test('(curried) it is equal to Array.prototype.map', () => {
    expect(map(x => x * 2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => x * 2));
    expect(map(x => `x is equal to ${x}`)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => `x is equal to ${x}`));
  });
});

describe('forEach', () => {
  test('it is equal to Array.prototype.forEach', () => {
    expect(forEach(x => x * 2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].forEach(x => x * 2));
  });

  test('(curried) it is equal to Array.prototype.forEach', () => {
    expect(forEach(x => x * 2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].forEach(x => x * 2));
  });
});

describe('every', () => {
  const arr = [ 1, 2, 3 ];
  const isLessThanThree = x => x < 3;
  const isMoreThanThree = x => x > 3;

  test('it is equal to Array.prototype.every', () => {
    expect(every(isLessThanThree, arr)).toEqual(arr.every(isLessThanThree));
    expect(every(isMoreThanThree, arr)).toEqual(arr.every(isMoreThanThree));
  });

  test('(curried) it is equal to Array.prototype.every', () => {
    expect(every(isLessThanThree)(arr)).toEqual(arr.every(isLessThanThree));
    expect(every(isMoreThanThree)(arr)).toEqual(arr.every(isMoreThanThree));
  });
});

describe('filter', () => {
  const arr = [ 1, 2, 3 ];
  const isLessThanThree = x => x < 3;
  const isMoreThanThree = x => x > 3;

  test('it is equal to Array.prototype.filter', () => {
    expect(filter(isLessThanThree, arr)).toEqual(arr.filter(isLessThanThree));
    expect(filter(isMoreThanThree, arr)).toEqual(arr.filter(isMoreThanThree));
  });

  test('(curried) it is equal to Array.prototype.filter', () => {
    expect(filter(isLessThanThree)(arr)).toEqual(arr.filter(isLessThanThree));
    expect(filter(isMoreThanThree)(arr)).toEqual(arr.filter(isMoreThanThree));
  });
});

describe('some', () => {
  const arr = [ 1, 2, 3 ];
  const isLessThanThree = x => x < 3;
  const isMoreThanThree = x => x > 3;

  test('it is equal to Array.prototype.some', () => {
    expect(some(isLessThanThree, arr)).toEqual(arr.some(isLessThanThree));
    expect(some(isMoreThanThree, arr)).toEqual(arr.some(isMoreThanThree));
  });

  test('(curried) it is equal to Array.prototype.some', () => {
    expect(some(isLessThanThree)(arr)).toEqual(arr.some(isLessThanThree));
    expect(some(isMoreThanThree)(arr)).toEqual(arr.some(isMoreThanThree));
  });
});

describe('includes', () => {
  test('it is equal to Array.prototype.includes', () => {
    expect(includes(2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(2));
    expect(includes(10, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(10));
  });

  test('(curried) it is equal to Array.prototype.includes', () => {
    expect(includes(2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(2));
    expect(includes(10)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(10));
  });
});

describe('reduce', () => {
  const fn = (acc, x) => acc + x;
  const memo = 0;
  const arr = [ 1, 2, 3 ];

  test('it is equal to Array.prototype.reduce', () => {
    expect(reduce(fn, memo, arr)).toEqual(arr.reduce(fn), memo);
  });

  test('(curried) it is equal to Array.prototype.reduce', () => {
    expect(reduce(fn)(memo, arr)).toEqual(arr.reduce(fn), memo);
    expect(reduce(fn, memo)(arr)).toEqual(arr.reduce(fn), memo);
    expect(reduce(fn)(memo)(arr)).toEqual(arr.reduce(fn), memo);
  });
});

describe('reduceRight', () => {
  const fn = (acc, x) => acc + x;
  const memo = 0;
  const arr = [ 1, 2, 3 ];

  test('it is equal to Array.prototype.reduceRight', () => {
    expect(reduceRight(fn, memo, arr)).toEqual(arr.reduceRight(fn), memo);
  });

  test('(curried) it is equal to Array.prototype.reduceRight', () => {
    expect(reduceRight(fn)(memo, arr)).toEqual(arr.reduceRight(fn), memo);
    expect(reduceRight(fn, memo)(arr)).toEqual(arr.reduceRight(fn), memo);
    expect(reduceRight(fn)(memo)(arr)).toEqual(arr.reduceRight(fn), memo);
  });
});
