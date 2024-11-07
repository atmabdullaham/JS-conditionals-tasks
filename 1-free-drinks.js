/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 600;

if (burgerPrice > 500) {
    // console.log('free Coke')
} else {
    // console.log('give 30tk for coke');
}

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
// console.log(getDessertPrice(500));
// console.log(getDessertPrice(1100));





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

/**
 * 3. Shipping Fee Calculator
 *    - For online orders, if the total amount is above 800 Taka, shipping is free.
 *    - If the total amount is 800 Taka or less, the shipping fee is 40 Taka.
 *    - Write a function that takes the total order amount and returns the final price including any shipping fees.
 */

function getShippingFee(orderAmount) {
    return orderAmount > 800 ? "Shipping is free" : "The shipping fee is 40 Taka"
}
// console.log(getShippingFee(500));
// console.log(getShippingFee(800));
// console.log(getShippingFee(900));





/**
 * 4. Cinema Ticket Pricing
 *    - A cinema offers a 50% discount on tickets for people under the age of 18 or over the age of 60.
 *    - For everyone else, the ticket price is 200 Taka.
 *    - Write a function that accepts the age of a person and returns the ticket price based on the applicable discount, if any.
 */

function getTicketPrice(age) {
    return age < 18 || age > 60 ? "You got 50% discount on ticket price" : "The ticket Price is 200tk"
}

// console.log(getTicketPrice(17));
// console.log(getTicketPrice(18));
// console.log(getTicketPrice(19));
// console.log(getTicketPrice(59));
// console.log(getTicketPrice(60));
// console.log(getTicketPrice(61));

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