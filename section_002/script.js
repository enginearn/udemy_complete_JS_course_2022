"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// Functions
function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(`age1: ${age1}`);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(`age2: ${age2}`);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(`age3: ${age3}`);

let yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Reviewing functions
let calcAge = function (birthYear) {
    return 2037 - birthYear;
}

yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

let friends = ["Michael", "Steven", "Peter"];
console.log(`friends: ${friends}`);

let years = new Array(1991, 1984, 2008, 2020, 2022);
console.log(`years: ${years}`);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

let firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
calcAge = function (birthYear) {
    return 2037 - birthYear;
}

years = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(`ages: ${ages}`);

// Basic array operations (Methods)
friends = ["Michael", "Steven", "Peter"];

// unshift - add element to the beginning of the array
// shift   - remove element from the beginning of the array
// push    - add element to the end of the array
// pop     - remove element from the end of the array

// Add elements
const newLength = friends.push("Jay");
console.log(`friends: ${friends}`);
console.log(`newLength: ${newLength}`);

friends.unshift("John");
console.log(`friends: ${friends}`);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(`friends: ${friends}`);
console.log(`popped: ${popped}`);

friends.shift(); // First
console.log(`friends: ${friends}`);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
} else {
    console.log("You don't have a friend called Steven");
}

// Introduction to objects
const yourArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

const yourDataObject = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};

// Dot vs. bracket notation
let person = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};

console.log(person);

console.log(person.lastName);
console.log(person["lastName"]);

const nameKey = "Name";
console.log(person["first" + nameKey]);
console.log(person["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

// if (person[interestedIn]) {
//     console.log(person[interestedIn]);
// } else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
// }

console.log(`${person.firstName} has ${person.friends.length} friends,\
and his best friend is called ${person.friends[0]}`);

person.location = "Portugal";
console.log(person);

person["twitter"] = "@jonasschmedtman";
console.log(person);

// Object methods
person = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    calcAge: function () {
        // console.log(`this: ${this}`);
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};

console.log(`${person.firstName} is ${person.calcAge()} years old.`);
console.log(`${person.firstName} is ${person["calcAge"]()} years old.`);
console.log(`${person.firstName} is ${person.calcAge(person.birthYear)} years old.`);
console.log(`${person.firstName} is ${person["calcAge"](person.birthYear)} years old.`);
console.log(`${person.firstName} is ${person.age} years old.`);

console.log(person.getSummary());

// Iteration: The for loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Looping arrays, breaking and continuing
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

years = [1991, 2007, 1969, 2020];
let agesArray = [];

for (let i = 0; i < years.length; i++) {
    agesArray.push(2037 - years[i]);
}

console.log(agesArray);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

// Looping backwards and loops in loops
const myArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(i, myArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

// The while loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log("Loop is about to end...");
}




