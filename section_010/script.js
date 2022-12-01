'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1); // remove last element
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(`arr2.reverse(): ${arr2.reverse()}`);
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(' - '));

arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.at(2));

// get index of element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.slice(-1)[0]);
console.log('jonas'.slice(-1)[0]);
console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }

    console.log('---- FOREACH ----');
    movements.forEach(function (movement, index, array) {
        if (movement > 0) {
            console.log(`Movement ${index + 1}: You deposited ${movement}`);
        } else {
            console.log(
                `Movement ${index + 1}: You withdrew ${Math.abs(movement)}`
            );
        }
    });

    // 0: function(200)
    // 1: function(450)
    // 2: function(400)
    // ...
}

// forEach with Maps and Sets
// Map
let currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
});

// forEach with Maps and Sets
// Map
currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

