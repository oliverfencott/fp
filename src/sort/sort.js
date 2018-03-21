const curry = require('../curry');

const sort = curry((fn, arr) => [ ...arr ].sort(fn));

module.exports = sort;
