"use strict";

const calcTip = bill => {
    const tipsArray = [0.15, 0.2];
    return 50 <= bill <= 300 ? bill * tipsArray[0] : bill * tipsArray[1];
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

for (let i = 0; i < bills.length; i++) {
    console.log(`bill: \$${bills[i]}`);
    console.log(`tips: \$${tips[i]}`);
    console.log(`totals: \$${totals[i]}`);
}
