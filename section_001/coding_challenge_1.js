function bmi1(mass, height) {
    return mass / (height * height);
}

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = bmi1(markMass, markHeight);
const johnBMI = bmi1(johnMass, johnHeight);

console.log(`markBMI: ${markBMI.toFixed(2)}`);
console.log(`johnBMI: ${johnBMI.toFixed(2)}`);

const markHigherBMI = markBMI > johnBMI;
console.log(`markHigherBMI: ${markHigherBMI}`);

