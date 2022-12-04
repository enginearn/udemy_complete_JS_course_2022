// 'use strict';

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
let movementsArray = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movementsArray) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

for (const [i, movement] of movementsArray.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }

    console.log('---- FOREACH ----');
    movementsArray.forEach(function (movement, index, array) {
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

let eurToUsd = 1.1;

// const movementsUSD = movementsArray.map(function (mov) {
//   return mov * eurToUsd;
// });

// MAP
const movementsUSD = movementsArray.map((mov) => (mov * eurToUsd).toFixed(2));
console.log(movementsArray);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movementsArray) movementsUSDfor.push((mov * eurToUsd).toFixed(2));
console.log(movementsUSDfor);

const movementsDescriptions = movementsArray.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${
            mov > 0 ? 'deposited' : 'withdrew'
        } ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

// FILTER
const deposits = movementsArray.filter(function (mov) {
    return mov > 0;
});
console.log(movementsArray);
console.log(deposits);

const withdrawals = movementsArray.filter((mov) => mov < 0);
console.log(withdrawals);

// REDUCE
// accumulator -> SNOWBALL
const balance1 = movementsArray.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + cur;
}, 0);
console.log(balance1);

const balance2 = movementsArray.reduce((acc, cur) => acc + cur, 0);
console.log(balance2);

// Maximum value
let max = movementsArray.reduce(function (acc, mov) {
    if (acc > mov) return acc;
    else return mov;
}, movementsArray[0]);
console.log(max);

// Maximum value
max = movementsArray.reduce((acc, mov) => (acc > mov ? acc : mov), movementsArray[0]);
console.log(max);

// CHAINING METHODS
eurToUsd = 1.1;
const totalDepositsUSD = movementsArray
    .filter((mov) => mov > 0)
    .map((mov) => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD.toFixed(2));

// FIND
const firstWithdrawal = movementsArray.find((mov) => mov < 0);
console.log(movementsArray);
console.log(firstWithdrawal);

// SOME: CONDITION
console.log(movementsArray);
// returns true if any element is positive
console.log(movementsArray.includes(-130));

// EQUALITY
// returns true if any element is positive
console.log(movementsArray.some((mov) => mov === -130));

// CONDITION
const anyDeposits = movementsArray.some((mov) => mov > 1500);
console.log(anyDeposits);

// EVERY: CONDITION
console.log(movementsArray.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movementsArray.some(deposit));
console.log(movementsArray.every(deposit));
console.log(movementsArray.filter(deposit));

// FLAT and FLATMAP
arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

///////////////////////////////////////////
// Data
const account11 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account22 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account33 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account44 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts100 = [account11, account22, account33, account44];
///////////////////////////////////////////

const accountMovements = accounts100.map((acc) => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallBalance2 = accounts100
    .map((acc) => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

const overallBalance3 = accounts100
    .flatMap((acc) => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance3);

// SORTING ARRAYS
const owners
    = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Numbers
console.log(movementsArray);
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
movementsArray.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
});
movementsArray.sort((a, b) => a - b);
console.log(movementsArray);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Descending
movementsArray.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
});
movementsArray.sort((a, b) => b - a);
console.log(movementsArray);

// MORE WAYS OF CREATING AND FILLING ARRAYS
arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const randomDiceRolls = Array.from(
    { length: 100 },
    () => Math.trunc(Math.random() * 6) + 1
);
console.log(randomDiceRolls);

const labelBalance0 = document.querySelector('.balance__value');
labelBalance0.addEventListener('click', function () {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        (el) => Number(el.textContent.replace('€', ''))
    );

    console.log(movementsUI);
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

// ARRAY METHODS PRACTICE

