const curry = require('../curry');

const reduce = curry((fn, acc, arr) => arr.reduce(fn, acc));

module.exports = reduce;
