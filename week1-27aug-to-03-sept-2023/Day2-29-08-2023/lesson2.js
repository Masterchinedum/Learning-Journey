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

//2d Let's say we want to always round a number down (2.8 => 2)
let number = 2.8;
let roundedNumber = Math.floor(number);
console.log(`2.8 is rounded to: ${roundedNumber}`);

//2e. Let's say we want to always round a number up (2.2 => 3)
let number2 = 2.2;
let roundedNumber2 = Math.ceil(number2);
console.log(`2.2 is rounded to: ${roundedNumber2}`);


//2f. The temperature is 25C. calculate the temperature in Fahrenheit
let celsius = 25;
let fahrenheit = celsius * 1.8 + 32;
console.log(`the temperature in fahrenheit is: ${fahrenheit}F`);

//2g. The temperature is 70F. calculate the temperature in Celsius
let fahrenheit2 = 70;
let celsius2 = (fahrenheit2 - 32) / 1.8;
console.log(`the temperature in celsius is: ${Math.round(celsius2)}C`);

//2h. The temperature is 25C. calculate the temperature in Kelvin
let celsius3 = 25;
let kelvin = celsius3 + 273.15;
console.log(`the temperature in kelvin is: ${kelvin}K`);

//2i. The temperature is 70F. calculate the temperature in Kelvin
let fahrenheit3 = 70;
let kelvin2 = (fahrenheit3 - 32) / 1.8 + 273.15;
console.log(`the temperature in kelvin is: ${Math.round(kelvin2)}K`);

//2g. The temperature is -5C. calculate the temperature in Fahrenheit
let celsius4 = -5;
let fahrenheit4 = celsius4 * 1.8 + 32;
console.log(`the temperature in fahrenheit is: ${fahrenheit4}F`);