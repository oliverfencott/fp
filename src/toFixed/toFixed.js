const curry = require('../curry');

const toFixed = curry((fixer, number) => number.toFixed(fixer));

module.exports = toFixed;
