/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;

  for (let i = 0; i < days; i++) {
    total += 40;
  }

  if (days >= 7) {
    total -= 50;
  } else if (days >= 3) {
    total -= 20;
  } else if (days <= 0) {
    return 0;
  }

  return total;
}

module.exports = calculateRentalCost;
