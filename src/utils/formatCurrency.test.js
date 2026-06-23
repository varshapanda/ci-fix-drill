const { formatCurrency } = require('./formatCurrency');

test('formats currency correctly', () => {
// Objects should be compared with toEqual.
  expect(formatCurrency(10.005, 'USD')).toEqual({ amount: 10.01, currency: 'USD' });
});
