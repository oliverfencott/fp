const curry = require('../curry');

const join = curry((joiner, arr) => arr.join(joiner));

module.exports = join;
