let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// let firstName = "Matilda";
// console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let javascriptIsFun = true;
console.log(javascriptIsFun);

let PI = 3.1415;
let job1 = "programmer";
let job2 = "teacher";

let myCountry = "India";
let myContinent = "Asia";
let myPopulation = 1300000000;
console.log(`myCountry: ${myCountry}`);
console.log(`myContinent: ${myContinent}`);
console.log(`$myPopulation: ${myPopulation}`);

let = true;
console.log(true);
let jsFun = true;
console.log(jsFun);
console.log(typeof true);
console.log(typeof jsFun);
console.log(typeof 23);
console.log(`jonas: ${typeof "Jonas"}`);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

// lastName = "Schmedtmann";
// console.log(lastName);

const now = 2037;
const ageJonas = now - 1979;
const ageSarah = now - 2022;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
console.log(`x: ${x}`);
x--; // x = x - 1
x--;
console.log(`x: ${x}`);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(`isFullAge: ${isFullAge}`);

console.log(now - 1991 > now - 2018);

let a, b;
a = b = 25 - 10 - 5; // a = b = 10, a = 10
console.log(`a: ${a}, b: ${b}`);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(`averageAge: ${averageAge}`);

const myName = "Jonas";
const myJob = "teacher";
const birthOfYear = 1991;

const jonas = "I'm " + myName + ", a " + (now - birthOfYear) + " years old " + myJob + "!";
console.log(`jonas: ${jonas}`);

const jonasNew = `I'm ${myName}, a ${now - birthOfYear} years old ${myJob}!`;
console.log(`jonasNew: ${jonasNew}`);

console.log(`String with \n multiple \n lines`);

console.log(`Just a regular string...`);

const yourAge = 30;
const oldEnough = 18;
const isOldEnough = yourAge >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = oldEnough - yourAge;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const inputYear = "1991";
console.log(`inputYear: ${inputYear}`);
console.log(`inputYear + 18: ${inputYear + 18}`);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1; // "11"
n = n - 1;
console.log(`n: ${n}`);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));         // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas"));   // true
console.log(Boolean({}));        // true
console.log(Boolean(""));        // false
console.log(Boolean(" "));       // true
console.log(Boolean("0"));       // true

const money = 0.1;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}

const myAge = 18;
if (myAge === 18) console.log(`You just became an adult (strict)`);
if (myAge == 18) console.log(`You just became an adult (loose)`);

// let favorite = Number(prompt("What's your favorite number?"));
// let favorite = prompt("What's your favorite number?");
// console.log(`prompt typeof favorite: ${typeof favorite}\nvalue\: ${favorite}`);

// const favoriteNumber = favorite => {
//     return favorite.replace(/[ａ-ｚＡ-Ｚ０-９]/g, function(s) {
//         return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
//     });
// };

// console.log(`favoriteNumber: ${favoriteNumber("１２３４５６７８９０")}`);

// if (typeof favorite === "string") {
// if (typeof favorite != "number") {
//     favorite = Number(favoriteNumber(favorite));
//     console.log(`typeof favorite: ${typeof favorite}`);
//     console.log(`favorite number: ${favorite}`);
// } else {
//     console.log(`favorite number(this is else block): ${Number(favorite)}`);
// }

// if (favorite === 23) {
//     console.log(`Cool! 23 is an amazing number!`);
// } else if (favorite === 7) {
//     console.log(`7 is also a cool number`);
// }

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
console.log(`shouldDrive: ${shouldDrive}`);

if (shouldDrive) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}

let day = "monday";

switch (day) {
    case "monday": // day === "monday"
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case "tuesday":
        console.log(`Prepare theory videos`);
        break;
    case "wednesday":
    case "thursday":
        console.log(`Write code examples`);
        break;
    case "friday":
        console.log(`Record videos`);
        break;
    case "saturday":
    case "sunday":
        console.log(`Enjoy the weekend :)`);
        break;
    default:
        console.log(`Not a valid day!`);
}

day = "sunday";

if (day === "monday") {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
    console.log(`Prepare theory videos`);
} else if (day === "wednesday" || day === "thursday") {
    console.log(`Write code examples`);
} else if (day === "friday") {
    console.log(`Record videos`);
} else if (day === "saturday" || day === "sunday") {
    console.log(`Enjoy the weekend :)`);
} else {
    console.log(`Not a valid day!`);
}

age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(`drink: ${drink}`);

let drink2;
if (age >= 18) {
    drink2 = `wine 🍷`;
} else {
    drink2 = `water 💧`;
}

console.log(`drink2: ${drink2}`);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);

let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was \$${bill}, the tip was \$${tip}, and the total value \$${bill + tip}`);

bill = 275;
tip = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was \$${bill}, the tip was \$${tip}, and the total value \$${bill + tip}`);

const person = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};

console.log(person);
