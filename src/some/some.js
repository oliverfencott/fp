const curry = require('../curry');

const some = curry((fn, arr) => arr.some(fn));

module.exports = some;
