const Sum = x => ({
  concat: ({ __val }) => Sum(x + __val),
  empty: () => Sum(0),
  __val: x
});

module.exports = Sum;
