const curry = fn => (...args) => (
  args.length < fn.length
  ? curry(args.reduce((memo, arg) => memo.bind(null, arg), fn))
  : fn(...args)
);

module.exports = curry;
