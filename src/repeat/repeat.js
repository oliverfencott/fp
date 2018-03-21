const curry = require('../curry');

const repeat = curry((count, string) => string.repeat(count));

module.exports = repeat;
