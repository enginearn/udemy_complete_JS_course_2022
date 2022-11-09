'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

    openingHours: {
        sun: {
            open: 0, // Open 24 hours
            close: 24,
        },
        mon: {
            open: 12,
            close: 22,
        },
        thu: {
            open: 12,
            close: 22,
        },
        wed: {
            open: 12,
            close: 22,
        },
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

// Destructuring Arrays
let arr = [2, 3, 4];
let a = arr[0];
let b = arr[1];
let c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(`x: ${typeof x} y: ${typeof x} z: ${typeof z}`);
console.log(typeof arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
a = 111;
b = 999;
let obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
    fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

// Spread Operator
arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menuArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuArray);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real-world example
// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =
arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [e, f, ...xOthers] = [1, 2, 3, 4, 5];
console.log(e, f, xOthers);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// 2) Objects
const { g, h, ...yOthers } = { a: 1, b: 2, c: 3, d: 4 };
console.log(g, h, yOthers);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 3) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const xx = [23, 5, 7];
add(...xx);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// Short Circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting
console.log('--- OR ---');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--- AND ---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// The Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10;
console.log(guests);

// Looping Arrays: The for-of Loop
const menuX = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuX) console.log(item);

for (const [i, el] of menuX.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: '' }];
