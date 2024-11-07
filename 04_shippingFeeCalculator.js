/**

 * 3. Shipping Fee Calculator
 *    - For online orders, if the total amount is above 800 Taka, shipping is free.
 *    - If the total amount is 800 Taka or less, the shipping fee is 40 Taka.
 *    - Write a function that takes the total order amount and returns the final price including any shipping fees.
 */

function getShippingFee(orderAmount) {
    return orderAmount > 800 ? "Shipping is free" : "The shipping fee is 40 Taka"
}
console.log(getShippingFee(500));
console.log(getShippingFee(800));
console.log(getShippingFee(900));




