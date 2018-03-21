const curry = require('../curry');

const find = curry((fn, arr) => arr.find(fn));

module.exports = find;
