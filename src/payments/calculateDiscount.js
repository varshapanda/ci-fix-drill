// The function is correct — it applies the discount percentage correctly
function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}
module.exports = { calculateDiscount };
