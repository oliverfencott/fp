const reverse = require('../reverse');

const compose = (...fns) => reverse(fns).reduce((f, g) => (...args) => g(f(...args)));

module.exports = compose;
