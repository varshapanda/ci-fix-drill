const { calculateDiscount } = require('./calculateDiscount');

test('applies no discount when percent is 0', () => {
  expect(calculateDiscount(100, 0)).toBe(100); // This passes
});

test('applies 10 percent discount correctly', () => {
  // Function correctly returns 90 after applying a 10% discount.
  expect(calculateDiscount(100, 10)).toBe(90); 
});
