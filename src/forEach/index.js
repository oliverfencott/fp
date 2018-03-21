const curry = require('../curry');

const forEach = curry((fn, arr) => arr.forEach(fn));

module.exports = forEach;
