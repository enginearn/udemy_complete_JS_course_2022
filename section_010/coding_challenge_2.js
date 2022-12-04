'use strict';

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcSverageHumanAge = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    // const average = adults.reduce(function (acc, age, i, arr) {
    //     return acc + age;
    // }, 0) / adults.length;
    return average.toFixed(2);
}

console.log(calcSverageHumanAge(data1));
console.log(calcSverageHumanAge(data2));
