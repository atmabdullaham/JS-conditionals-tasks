/**
 * 4. Cinema Ticket Pricing
 *    - A cinema offers a 50% discount on tickets for people under the age of 18 or over the age of 60.
 *    - For everyone else, the ticket price is 200 Taka.
 *    - Write a function that accepts the age of a person and returns the ticket price based on the applicable discount, if any.
 */

function getTicketPrice(age) {
 return age < 18 || age > 60 ? "You got 50% discount on ticket price" : "The ticket Price is 200tk"
}

console.log(getTicketPrice(17));
console.log(getTicketPrice(18));
console.log(getTicketPrice(19));
console.log(getTicketPrice(59));
console.log(getTicketPrice(60));
console.log(getTicketPrice(61));