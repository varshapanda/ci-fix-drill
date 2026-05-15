function formatCurrency(amount, currency) {
  return { amount: parseFloat(amount.toFixed(2)), currency: currency };
}
module.exports = { formatCurrency };
