const curry = require('../curry');

const every = curry((fn, arr) => arr.every(fn));

module.exports = every;
