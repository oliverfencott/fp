const composePipeMemo = require('../composePipeMemo');

const composePipeBase = f => (...fns) => value => reduce(composePipeMemo, value, f(fns));

module.exports = composePipeBase;
