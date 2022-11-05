"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`max: ${max} min: ${min}`);
    return max - min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const arr1 = [5, 2, 4];
console.log(arr1.sort());
const arr2 = [1, 5, 2, 4];
console.log(arr2.sort());

console.log(arr1.concat(arr2).sort());

const calcTempAmplitudeNew = function(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`max: ${max} min: ${min}`);
    return max - min;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const inputNumber = number => {
    return number.replace(/[ａ-ｚＡ-Ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
};

const measureKelvin = function() {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: prompt("Degrees celsius:"),
    };
    if (typeof measurement.value === "string") {
        measurement.value = Number(inputNumber(measurement.value));
    }

    console.table(measurement);

    console.log(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());
