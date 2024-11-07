/**
 * 2. Discount on Bulk Purchase
 *    - A store offers a 10% discount if the number of items purchased is more than 10.
 *    - If 10 items or fewer are bought, there is no discount.
 *    - Create a function that accepts the number of items and the price per item, and returns the total amount after applying any applicable discount.
 */

function getDiscount(purchasedItems) {
 // if (purchasedItems > 10) {
 //     return "Get 10% Discount"
 // } else {
 //     return "There is no Discount"
 // }

 return purchasedItems > 10 ? "Get 10% Discount" : "There is no Discount"


}

// console.log(getDiscount(12));
// console.log(getDiscount(11));
// console.log(getDiscount(9));
// console.log(getDiscount(10));

