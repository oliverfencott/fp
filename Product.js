const Product = x => ({
  concat: ({ __val }) => Product(x * __val),
  empty: () => Product(1),
  __val: x
});

module.exports = Product;
