'use strict';

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages => ages
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge(testData1);
const avg2 = calcAverageHumanAge(testData2);
console.log(avg1, avg2);

// 1. Create an array containing all the movements from all accounts, then calculate the sum of the deposits and the sum of the withdrawals
const movements = accounts.map(acc => acc.movements);
console.log(movements);
const allMovements = movements.flat();
console.log(allMovements);
const deposits = allMovements.filter(mov => mov > 0);
console.log(deposits);
const withdrawals = allMovements.filter(mov => mov < 0);
console.log(withdrawals);
const sumDeposits = deposits.reduce((acc, mov) => acc + mov, 0);
console.log(sumDeposits);
const sumWithdrawals = withdrawals.reduce((acc, mov) => acc + mov, 0);
console.log(sumWithdrawals);

// 2. This is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
    const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
        .join(' ');
    return titleCase;
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// 3. Create a function that accepts an array of arrays and returns a new array with all the arrays flattened
const flattenArray = function (arr) {
    const flattenedArray = arr.flat();
    return flattenedArray;
}

console.log(flattenArray([[1, 2, 3], [4, 5, 6], 7, 8]));
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7, 8]]));
console.log(flattenArray([[1, 2], 3, [4, 5], 6, [7, 8]]));

// 4. Create a function that accepts an array of arrays and returns a new array with all the arrays flattened
const flattenArrayDeep = function (arr) {
    const flattenedArray = arr.flat(Infinity);
    return flattenedArray;
}

console.log(flattenArrayDeep([[1, 2, 3], [4, 5, 6], 7, 8]));
console.log(flattenArrayDeep([[1, 2], [3, 4], [5, 6], [7, 8]]));
console.log(flattenArrayDeep([[1, 2], 3, [4, 5], 6, [7, 8]]));

// 5. Create a function that accepts an array of arrays and returns a new array with all the arrays flattened
const flattenArrayDeep2 = function (arr) {
    const flattenedArray = arr.flat(Infinity);
    return flattenedArray;
}

console.log(flattenArrayDeep2([[1, 2, 3], [4, 5, 6], 7, 8]));
console.log(flattenArrayDeep2([[1, 2], [3, 4], [5, 6], [7, 8]]));
console.log(flattenArrayDeep2([[1, 2], 3, [4, 5], 6, [7, 8]]));

