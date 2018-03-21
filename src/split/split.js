const curry = require('../curry');

const split = curry((splitter, string) => string.split(splitter));

module.exports = split;
