const bills = 301;
const tips = 50 <= bills <= 300 ? bills * 0.15 : bills * 0.2;
console.log(`The bills was \$${bills}, the tips was \$${tips}, and the total value \$${bills + tips}`);

