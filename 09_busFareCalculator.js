/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

function getTicketPrice(age, isStudent) {
    return age < 10 ? "free" :
        (age >= 60) ? "Get 15% discount" :
            (isStudent == true) ? "Get 50% discount" :
                "regular ticket fare 800tk"
}

console.log(getTicketPrice(undefined, true));
console.log(getTicketPrice(60));
console.log(getTicketPrice(9));
console.log(getTicketPrice(10));