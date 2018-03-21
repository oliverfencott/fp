const curry = require('../curry');

const lastIndexOf = curry((value, string) => string.lastIndexOf(value));

module.exports = lastIndexOf;
