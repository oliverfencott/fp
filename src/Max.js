const Max = x => ({
  concat: ({ __val }) => Max(x > __val ? x : __val),
  empty: () => Max(-Infinity),
  __val: x
});

module.exports = Max;
