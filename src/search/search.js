const curry = require('../curry');

const search = curry((re, string) => string.search(re));

module.exports = search;
