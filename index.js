//// Curryable ////

// Array methods

// Default pure
const reduce = (fn, acc, arr) => arr.reduce(fn, acc);
const reduceRight = (fn, acc, arr) => arr.reduceRight(fn, acc);
const map = (fn, arr) => arr.map(fn);
const forEach = (fn, arr) => arr.forEach(fn);
const every = (fn, arr) => arr.every(fn);
const filter = (fn, arr) => arr.filter(fn);
const some = (fn, arr) => arr.some(fn);
const includes = (value, arr) => arr.includes(value);
const find = (fn, arr) => arr.find(fn);
const findIndex = (fn, arr) => arr.findIndex(fn);
const join = (joiner, arr) => arr.join(joiner);
const lastIndexOf = (value, string) => string.lastIndexOf(value);

// Impure -> pure
const reverse = arr => [ ...arr ].reverse();
const pop = arr => [ ...arr ].pop();
const push = arr => [ ...arr ].push();
const shift = arr => [ ...arr ].shift();
const sort = arr => [ ...arr ].sort();

// String
const split = (splitter, string) => string.split(splitter);
const match = (re, string) => string.match(re);
const repeat = (count, string) => string.repeat(count);
const search = (re, string) => string.search(re);
const toLowerCase = string => string.toLowerCase();
const toUpperCase = string => string.toUpperCase();
const trim = string => string.trim();
const trimLeft = string => string.trimLeft();
const trimRight = string => string.trimRight();

// String/Array
const concat = (value, data) => data.concat(value);

// Number
const toFixed = (fixer, number) => number.toFixed(fixer);


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
  ? args.reduce((memo, arg) => memo.bind(null, arg), fn)
  : fn(...args)
);

const composePipeMemo = (acc, fn) => fn(acc);
const composePipeBase = f => (...fns) => value => reduce(composePipeMemo, value, f(fns));

const pipe = composePipeBase(x => x);
const compose = composePipeBase(reverse);

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
