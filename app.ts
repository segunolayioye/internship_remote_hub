const startingUsd: number = 100;
const conversionRate: number = 1500;
const feeRate: number = 0.02;

const convertedAmount: number = startingUsd * conversionRate;
const transactionFee: number = convertedAmount * feeRate;
const finalAmount: number = convertedAmount - transactionFee;

console.log("================================");
console.log("       CURRENCY RECEIPT");
console.log("================================");
console.log("USD Amount:       $" + startingUsd);
console.log("Exchange Rate:    ₦" + conversionRate + " / USD");
console.log("Converted Amount:  ₦" + convertedAmount);
console.log("Processing Fee:    ₦" + transactionFee);
console.log("Final Amount:      ₦" + finalAmount);
console.log("================================");
console.log("Transaction complete.");

