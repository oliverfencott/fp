const curry = require('../curry');

const filter = curry((fn, arr) => arr.filter(fn));

module.exports = filter;
