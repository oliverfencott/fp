//// Non-curryable ////

// String
const padEnd = (len, padder) => string => string.padEnd(len, padder);
const padStart = (len, padder) => string => string.padStart(len, padder);
const replace = (re, replaceWith) => string => string.replace(re, replaceWith);

// String/Array
const indexOf = (entry, start = 0) => arr => arr.indexOf(entry, start);
const slice = (start, end) => value => value.slice(start, end);

// Utils
const curry = fn => (...args) => (
  args.length < fn.length
  ? curry(args.reduce((memo, arg) => memo.bind(null, arg), fn))
  : fn(...args)
);

const composePipeMemo = (acc, fn) => fn(acc);
const composePipeBase = f => (...fns) => value => reduce(composePipeMemo, value, f(fns));

const pipe = composePipeBase(x => x);
const compose = composePipeBase(x => [ ...x ].reverse());

//// Curryable ////

// String/Array
const concat = curry((value, data) => data.concat(value));

// Array methods

// Default pure
const reduce = curry((fn, acc, arr) => arr.reduce(fn, acc));
const reduceRight = curry((fn, acc, arr) => arr.reduceRight(fn, acc));
const map = curry((fn, arr) => arr.map(fn));
const forEach = curry((fn, arr) => arr.forEach(fn));
const every = curry((fn, arr) => arr.every(fn));
const filter = curry((fn, arr) => arr.filter(fn));
const some = curry((fn, arr) => arr.some(fn));
const includes = curry((value, arr) => arr.includes(value));
const find = curry((fn, arr) => arr.find(fn));
const findIndex = curry((fn, arr) => arr.findIndex(fn));
const join = curry((joiner, arr) => arr.join(joiner));
const lastIndexOf = curry((value, string) => string.lastIndexOf(value));

// Impure -> pure
const reverse = arr => [ ...arr ].reverse();
const pop = slice(0, -1);
const push = concat;
const shift = arr => [ ...arr ].shift();
const sort = arr => [ ...arr ].sort();

// String
const split = curry((splitter, string) => string.split(splitter));
const match = curry((re, string) => string.match(re));
const repeat = curry((count, string) => string.repeat(count));
const search = curry((re, string) => string.search(re));
const toLowerCase = string => string.toLowerCase();
const toUpperCase = string => string.toUpperCase();
const trim = string => string.trim();
const trimLeft = string => string.trimLeft();
const trimRight = string => string.trimRight();

// Number
const toFixed = curry((fixer, number) => number.toFixed(fixer));

module.exports = {
  // Array
  reduce,
  reduceRight,
  map,
  forEach,
  every,
  filter,
  some,
  includes,
  find,
  findIndex,
  join,
  lastIndexOf,
  reverse,
  pop,
  push,
  shift,
  sort,

  // String
  split,
  match,
  repeat,
  search,
  toLowerCase,
  toUpperCase,
  trim,
  trimLeft,
  trimRight,
  padEnd,
  padStart,

  // String/Array
  concat,
  replace,
  indexOf,
  slice,

  // Number
  toFixed,

  // Utils
  curry,
  pipe,
  compose
};
