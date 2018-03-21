const curry = require('../curry');

const findIndex = curry((fn, arr) => arr.findIndex(fn));

module.exports = findIndex;
