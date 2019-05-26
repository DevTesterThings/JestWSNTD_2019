function sum(a, b, c) {
  return a + b + c;
}

test('Joins words to forms a sentence', () => {
  expect(sum('NTD ', 'is ', 'AWESOME!')).toBe('NTD is AWESOME!');
});
