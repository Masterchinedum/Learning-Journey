//numbers and math
2+2+2;
2.2+2.2;
10.9 * 20.29;

// calculate the 10% of a number
let mybunmber = (20.95 + 7.99 * 2) *  0.1;

//rounding up numbers
let carprice = Math.round((2034.4595 + 7.99 * 2) *  0.1);
console.log(carprice);
console.log(mybunmber); 

//2a. at a resturant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use Javascript to calculate the cost of the order.
let soup = 10;
let burger = 8;
let iceCream = 5;
let totalCost = soup + burger * 3 + iceCream;
console.log( 'the total cost is: $' + totalCost);

//2b. You are at a resturant with 2 friends (3 people in total) and make the same order as 2a. calculate howmuch each person pays.
let eachPersonPays = totalCost / 3;
console.log( 'each person pays: $' + eachPersonPays);

//2c. calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each)
let toaster = 18.50;
let shirt = 7.50;
let totalpay = toaster + shirt * 2;
console.log( `the total expected payment is: $${totalpay}`);



