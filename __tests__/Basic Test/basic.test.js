function sum(a, b, c, d) {
  return a + b + c + d;
}
// module.exports = sum;


// const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum('Nordic ', 'Testing ', 'Days ', '2019')).toBe('Nordic Testing Days 2019');
});