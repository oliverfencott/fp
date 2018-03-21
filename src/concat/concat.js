const curry = require('../curry');

const concat = curry((value, data) => data.concat(value));

module.exports = concat;
