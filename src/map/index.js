const curry = require('../curry');

const map = curry((fn, arr) => arr.map(fn));

module.exports = map;
