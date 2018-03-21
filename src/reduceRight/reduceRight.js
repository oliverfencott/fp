const curry = require('../curry');

const reduceRight = curry((fn, acc, arr) => arr.reduceRight(fn, acc));

module.exports = reduceRight;
