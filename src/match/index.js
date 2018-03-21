const curry = require('../curry');

const match = curry((re, string) => string.match(re));

module.exports = match;
