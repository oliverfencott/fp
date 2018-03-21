const composePipeBase = require('../composePipeBase');
const compose = composePipeBase(x => [ ...x ].reverse());

module.exports = compose;
