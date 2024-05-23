U54107257

// cc_1 Steven's Tip Calculator
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`);

// Function to calculate tip based on the bill amount.
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test the function.
const testbill = 100;
console.log(`The tip for a $${testBill} bill is $${calcTip(testBill)}`);

// Array of bill values for Data 1.
const Bills = [275, 40, 430];
const Tips = bills.map(calcTip);
const totals1 = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// Additional array of bill values for Data 2.
const bills = [125, 555, 44];
const tips = bills2.map(calcTip);
const totals2 = bills2.map((bill, index) => bill + tips2[index]);

//Log the results.
console.log('Bills:', bills2);
console.log('Tips:', tips2);
console.log('Totals:', totals2);
