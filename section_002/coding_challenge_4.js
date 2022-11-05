"use strict";

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    return 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

for (let i = 0; i < bills.length; i++) {
    console.log(`Bill: \$${bills[i]} Tip: \$${tips[i]} Total: \$${totals[i]}`);
}
