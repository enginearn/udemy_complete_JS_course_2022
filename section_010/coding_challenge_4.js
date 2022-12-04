'use strict';

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Create a new array called 'recommendedFood', which contains the recommended food portion for each dog (the result of multiplying the current weight by 0.75).
// Store the data into a new property called 'recommendedFood' on each object. Do NOT create a new array, simply loop over the 'dogs' array and FOR EACH DOG add the new property 'recommendedFood'
const recommendedFood = dogs.map(
    (dog) => (dog.recommendedFood = dog.weight * 0.75)
);
console.log(recommendedFood);

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little.
// Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(sarahDog);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

// 4. Log a string to the console for each array created in 3., like this:
//"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const checkEatingOkay = (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const eatingOkay = dogs.filter(checkEatingOkay);
console.log(eatingOkay);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
const dogsSorted = dogs
    .slice()
    .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);

// Hints: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉

// TEST DATA:

// Data 1: [5, 2, 4] -> sorted: [2, 4, 5]
// Data 2: [5, 2, 4, 1, 15, 8, 3] -> sorted: [1, 2, 3, 4, 5, 8, 15]
// Data 3: [17, 21, 23] -> sorted: [17, 21, 23]
// Data 4: [17, 21, 23, 11, 2, 3, 66, 72, 73] -> sorted: [2, 3, 11, 17, 21, 23, 66, 72, 73]

// GOOD LUCK 😀
