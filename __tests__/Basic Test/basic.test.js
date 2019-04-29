function sum(a, b, c, d) {
  return a + b + c + d;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum('Nordic ', 'Testing ', 'Days ', '2019')).toBe('Nordic Testing Days 2019');
});