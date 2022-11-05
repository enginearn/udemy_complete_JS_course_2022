"use strict"

// Coding Challenge #3
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    }
}

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI : function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(2);
        return this.bmi;
    }
}

markMiller.calcBMI();
johnSmith.calcBMI();

if (markMiller.bmi > johnSmith.bmi) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s (${johnSmith.bmi})!`);
} else if (johnSmith.bmi > markMiller.bmi) {
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s (${markMiller.bmi})!`);
}
