'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice(1, -2);
    const allDogs = dogsJuliaCorrected.concat(dogsKate);
    allDogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    });
}

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);
