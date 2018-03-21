const curry = require('../curry');

const includes = curry((value, arr) => arr.includes(value));

module.exports = includes;
