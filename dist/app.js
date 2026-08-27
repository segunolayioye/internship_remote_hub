"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter amount to convert (USD): ", (inputAmount) => {
    const startingAmount = parseFloat(inputAmount);
    const conversionRate = 1500;
    const feePercent = 0.02;
    const convertedAmount = startingAmount * conversionRate;
    const feeAmount = convertedAmount * feePercent;
    const finalAmount = convertedAmount - feeAmount;
    console.log("===================================");
    console.log("      InvestFlow Currency Engine    ");
    console.log("===================================");
    console.log(`Amount (USD):        $${startingAmount.toFixed(2)}`);
    console.log(`Conversion Rate:     ${conversionRate}`);
    console.log(`Converted (NGN):     ₦${convertedAmount.toFixed(2)}`);
    console.log(`Processing Fee (2%): ₦${feeAmount.toFixed(2)}`);
    console.log("-----------------------------------");
    console.log(`Final Amount:        ₦${finalAmount.toFixed(2)}`);
    console.log("===================================");
    rl.close();
});
//# sourceMappingURL=app.js.map