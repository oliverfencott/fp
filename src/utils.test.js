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

test(`toFixed to return the same value as Number.prototype.toFixed`, () => {
  expect(toFixed(0, 3.1)).toBe((3.1).toFixed(0));
  expect(toFixed(2, 3.1)).toBe((3.1).toFixed(2));
});

test(`toFixed (curried) to return the same value as Number.prototype.toFixed`, () => {
  expect(toFixed(0)(3.1)).toBe((3.1).toFixed(0));
  expect(toFixed(2)(3.1)).toBe((3.1).toFixed(2));
});

test(`split is equal to String.prototype.split`, () => {
  expect(split('', 'hello')).toEqual(('hello').split(''));
  expect(split('e')('hello')).toEqual(('hello').split('e'));
});

test(`split is equal to String.prototype.split (curried)`, () => {
  expect(split('')('hello')).toEqual([ 'h', 'e', 'l', 'l', 'o' ]);
  expect(split('e', 'hello')).toEqual([ 'h', 'llo' ]);
});

test(`match is equal to String.prototype.match`, () => {
  expect(match('', 'hello')).toEqual(('hello').match(''));
  expect(match('ll', 'hello')).toEqual(('hello').match('ll'));
});

test(`match (curried) is equal to String.prototype.match`, () => {
  expect(match('')('hello')).toEqual(('hello').match(''));
  expect(match('ll')('hello')).toEqual(('hello').match('ll'));
});

test(`repeat to return the same value as String.prototype.repeat`, () => {
  expect(repeat(0, 'hello')).toBe(('hello').repeat(0));
  expect(repeat(3, 'hello')).toBe(('hello').repeat(3));
});

test(`repeat (curried) to return the same value as String.prototype.repeat`, () => {
  expect(repeat(0)('hello')).toBe('');
  expect(repeat(3)('hello')).toBe('hellohellohello');
});

test(`search to return the same value as String.prototype.search`, () => {
  expect(search('h', 'hello')).toBe(('hello').search('h'));
  expect(search('o', 'hello')).toBe(('hello').search('o'));
  expect(search(3, 'hello')).toBe(('hello').search(3));
});

test(`search (curried) to return the same value as String.prototype.search`, () => {
  expect(search('h')('hello')).toBe(('hello').search('h'));
  expect(search('o')('hello')).toBe(('hello').search('o'));
  expect(search(3)('hello')).toBe(('hello').search(3));
});


test(`toLowerCase to return the same value as String.prototype.toLowerCase`, () => {
  expect(toLowerCase('WHATSUP?')).toBe(('WHATSUP?').toLowerCase());
});

test(`toUpperCase to return the same value as String.prototype.toUpperCase`, () => {
  expect(toUpperCase('whatsup?')).toBe(('whatsup?').toUpperCase());
});

test(`trim to return the same value as String.prototype.trim`, () => {
  expect(trim('  hello?  ')).toBe(('  hello?  ').trim());
  expect(trim('hello?  ')).toBe(('hello?  ').trim());
  expect(trim('  hello?')).toBe(('  hello?').trim());
  expect(trim('hello?')).toBe(('hello?').trim());
});

test(`trimLeft to return the same value as String.prototype.trimLeft`, () => {
  expect(trimLeft('  hello?  ')).toBe(('  hello?  ').trimLeft());
  expect(trimLeft('hello?  ')).toBe(('hello?  ').trimLeft());
  expect(trimLeft('  hello?')).toBe(('  hello?').trimLeft());
  expect(trimLeft('hello?')).toBe(('hello?').trimLeft());
});

test(`trimRight to return the same value as String.prototype.trimRight`, () => {
  expect(trimRight('  hello?  ')).toBe(('  hello?  ').trimRight());
  expect(trimRight('hello?  ')).toBe(('hello?  ').trimRight());
  expect(trimRight('  hello?')).toBe(('  hello?').trimRight());
  expect(trimRight('hello?')).toBe(('hello?').trimRight());
});

test(`padStart to return the same value as String.prototype.padStart`, () => {
  expect(padStart(10, ' ')('hello')).toBe(('hello').padStart(10, ' '));
  expect(padStart(4, ' ')('hello')).toBe(('hello').padStart(4, ' '));
});

test(`padEnd to return the same value as String.prototype.padEnd`, () => {
  expect(padEnd(10, ' ')('hello')).toBe(('hello').padEnd(10, ' '));
  expect(padEnd(4, ' ')('hello')).toBe(('hello').padEnd(4, ' '));
});

test(`concat is equal to String.prototype.concat and Array.prototype.concat`, () => {
  expect(concat(10, [ 1 ])).toEqual([ 1 ].concat(10));
  expect(concat('bar', 'foo')).toEqual(('foo').concat('bar'));
});

test(`concat (curried) is equal to String.prototype.concat and Array.prototype.concat`, () => {
  expect(concat(10)([ 1 ])).toEqual([ 1 ].concat(10));
  expect(concat('bar')('foo')).toEqual(('foo').concat('bar'));
});

test('push is an immutable version of Array.prototype.push', () => {
  const first = [ 1, 2, 3 ];
  const second = push(4, first);

  expect(first).toEqual([ 1, 2, 3 ]);
  expect(second).toEqual([ 1, 2, 3, 4 ]);
});

test('push (curried) is an immutable version of Array.prototype.push', () => {
  const first = [ 1, 2, 3 ];
  const second = push(4)(first);

  expect(first).toEqual([ 1, 2, 3 ]);
  expect(second).toEqual([ 1, 2, 3, 4 ]);
});

test('pop is an immutable version of Array.prototype.pop', () => {
  const first = [ 1, 2, 3 ];
  const second = pop(first);

  expect(first).toEqual([ 1, 2, 3 ]);
  expect(second).toEqual([ 1, 2 ]);
});

test('reverse is an immutable version of Array.prototype.reverse', () => {
  const first = [ 1, 2, 3 ];
  const second = reverse(first);

  expect(first).toEqual([ 1, 2, 3 ]);
  expect(second).toEqual([ 3, 2, 1 ]);
});

test('join is equal to Array.prototype.join', () => {
  expect(join('', [1, 2, 3])).toEqual([1, 2, 3].join(''));
  expect(join('hello', [1, 2, 3])).toEqual([1, 2, 3].join('hello'));
});

test('join (curried) is equal to Array.prototype.join', () => {
 expect(join('')([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].join(''));
 expect(join('hello')([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].join('hello'));
});

test('map is equal to Array.prototype.map', () => {
 expect(map(x => x * 2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => x * 2));
 expect(map(x => `x is equal to ${x}`, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => `x is equal to ${x}`));
});

test('map (curried) is equal to Array.prototype.map', () => {
 expect(map(x => x * 2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => x * 2));
 expect(map(x => `x is equal to ${x}`)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].map(x => `x is equal to ${x}`));
});

test('forEach is equal to Array.prototype.forEach', () => {
 expect(forEach(x => x * 2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].forEach(x => x * 2));
});

test('forEach (curried) is equal to Array.prototype.forEach', () => {
 expect(forEach(x => x * 2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].forEach(x => x * 2));
});

test('every is equal to Array.prototype.every', () => {
 expect(every(x => x < 3, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].every(x => x < 3));
 expect(every(x => x > 3, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].every(x => x > 3));
});

test('every (curried) is equal to Array.prototype.every', () => {
 expect(every(x => x < 3)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].every(x => x < 3));
 expect(every(x => x > 3)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].every(x => x > 3));
});

test('filter is equal to Array.prototype.filter', () => {
 expect(filter(x => x < 3, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].filter(x => x < 3));
 expect(filter(x => x > 3, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].filter(x => x > 3));
});

test('filter (curried) is equal to Array.prototype.filter', () => {
 expect(filter(x => x < 3)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].filter(x => x < 3));
 expect(filter(x => x > 3)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].filter(x => x > 3));
});

test('some is equal to Array.prototype.some', () => {
 expect(some(x => x < 3, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].some(x => x < 3));
 expect(some(x => x > 3, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].some(x => x > 3));
});

test('some (curried) is equal to Array.prototype.some', () => {
 expect(some(x => x < 3)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].some(x => x < 3));
 expect(some(x => x > 3)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].some(x => x > 3));
});

test('includes is equal to Array.prototype.includes', () => {
 expect(includes(2, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(2));
 expect(includes(10, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(10));
});

test('includes (curried) is equal to Array.prototype.includes', () => {
 expect(includes(2)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(2));
 expect(includes(10)([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ].includes(10));
});
