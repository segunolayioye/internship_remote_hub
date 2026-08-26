// app.ts
import readline = require('readline');
const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter amount to convert (USD): ", (inputAmount: string) => {
  const startingAmount: number = parseFloat(inputAmount);
  const conversionRate: number = 1500;
  const feePercent: number = 0.02;

  
  const convertedAmount: number = startingAmount * conversionRate;
  const feeAmount: number = convertedAmount * feePercent;
  const finalAmount: number = convertedAmount - feeAmount;

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