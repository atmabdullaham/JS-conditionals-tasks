
/**
 * 5. Loyalty Card Points
 *    - A store offers 2 points per dollar spent for purchases of 500 Taka or more.
 *    - For purchases less than 500 Taka, the customer earns 1 point per dollar spent.
 *    - Write a function that takes the purchase amount and returns the total loyalty points earned.
 */
function getLoyaltyPoints(purchaseAmount) {
    return purchaseAmount >= 500 ? "Eligible to get 2 points for per dollar spent" : "Eligible to get 1 points for per dollar spent"
}

console.log(getLoyaltyPoints(500));
console.log(getLoyaltyPoints(400));
console.log(getLoyaltyPoints(600));
console.log(getLoyaltyPoints(501));
console.log(getLoyaltyPoints(499));