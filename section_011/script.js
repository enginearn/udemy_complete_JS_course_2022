// 'use strict';

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Converting strings to numbers
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// Checking if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// Math and rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
// toFixed() method returns a string
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// Remainder operator
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(6 % 2);

console.log(7 % 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

const diameter = 287_460_000_000_000;
console.log(diameter);

console.log(7n);
console.log(BigInt(7));

// Operations
console.log(10000n + 10000n);
console.log(10000n * 10000n);

const huge = 22134556778865430989000548322n;
let num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');
console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

// Creating dates
// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2021 18:05:41'));
console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
let future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000)); // 2037-11-19T14:23:00.000Z

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// Operations with dates
future = new Date(2037, 10, 19, 15, 23);
const future2 = new Date(2037, 10, 31, 15, 23);

console.log(+future);
console.log(+future2);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);

// Internationalizing numbers (Intl)
num = 3884764.23;

const options = {
    style: 'currency',
    unit: 'celsius',
    currency: 'EUR',
    // useGrouping: false,
    };

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
    navigator.language,
    new Intl.NumberFormat(navigator.language, options).format(num)
    );

// Timers: setTimeout and setInterval
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
    3000,
    ...ingredients
    );
console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setTimeout
setTimeout(function () {
    const now = new Date();
    console.log(now);
    }
    , 3000);

// setInterval(function () {
//     const now = new Date();
//     console.log(now);
//     }
//     , 1000);

// setInterval(function () {
//     const now = new Date();
//     const hour = now.getHours();
//     const min = now.getMinutes();
//     const sec = now.getSeconds();
//     console.log(`${hour}:${min}:${sec}`);
//     }
//     , 1000);

// setInterval(function () {
//     const now = new Date();
//     const hour = String(now.getHours()).padStart(2, 0);
//     const min = String(now.getMinutes()).padStart(2, 0);
//     const sec = String(now.getSeconds()).padStart(2, 0);
//     console.log(`${hour}:${min}:${sec}`);
//     }
//     , 1000);

// setInterval(function () {
//     const now = new Date();
//     const hour = String(now.getHours()).padStart(2, 0);
//     const min = String(now.getMinutes()).padStart(2, 0);
//     const sec = String(now.getSeconds()).padStart(2, 0);
//     console.log(`${hour}:${min}:${sec}`);
//     }
//     , 1000);

