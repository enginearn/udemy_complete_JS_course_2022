const bmi2 = (mass, height) => {
    return (mass / height ** 2).toFixed(2);
};

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = bmi2(massMark, heightMark);
const bmiJohn = bmi2(massJohn, heightJohn);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}
