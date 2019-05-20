function sum(a, b, c, d) {
  return a + b + c + d;
}

test('Joins words to forms a sentence', () => {
  expect(sum('Code ', 'X ', 'is', 'AWESOME!')).toBe('Code X is AWESOME!');
});s