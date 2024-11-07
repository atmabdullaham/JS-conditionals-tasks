/**
 * 1. Free Dessert Promotion
 *    - If a customer's total order is more than 1000 Taka, they receive a free dessert.
 *    - Otherwise, the dessert costs 50 Taka.
 *    - Write a function that takes the total order amount as input and returns whether the dessert is free or costs 50 Taka.
 */

function getDessertPrice(orderPrice) {
 if (orderPrice > 500) {
  return "Free Dessert";
 } else {
  return "Dessert: 50 Taka";
 }
}

// Example usage
console.log(getDessertPrice(500));
console.log(getDessertPrice(1100));
