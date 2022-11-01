const aveScoreOfDolphins = (96 + 130 + 89) / 3;
const aveScoreOfKoalas = (88 + 91 + 123) / 3;
console.log(`aveScoreOfDolphins: ${aveScoreOfDolphins.toFixed(2)}`);
console.log(`aveScoreOfKoalas: ${aveScoreOfKoalas.toFixed(2)}`);

if (aveScoreOfDolphins > aveScoreOfKoalas) {
    console.log(`Dolphins win!`);
} else if (aveScoreOfDolphins < aveScoreOfKoalas) {
    console.log(`Koalas win!`);
} else {
    console.log(`It's a draw!`);
}

const minScoreOfDolphins = Math.min(96, 108, 89);
const minScoreOfKoalas = Math.min(88, 91, 110);
console.log(`minScoreOfDolphins: ${minScoreOfDolphins}`);
console.log(`minScoreOfKoalas: ${minScoreOfKoalas}`);

if (minScoreOfDolphins > minScoreOfKoalas && aveScoreOfDolphins >= 100) {
    console.log(`Dolphins win!😋`);
} else if (minScoreOfDolphins < minScoreOfKoalas && aveScoreOfKoalas >= 100) {
    console.log(`Koalas win!🤩`);
} else {
    console.log(`It's a draw! 🍕`);
}
