'use strict';

const bill = Number(prompt('Enter a bill payment: '));
const billValue = new Number(bill);

if (bill == billValue) {
  const tipCalc = function (bill) {
    if (bill <= 50) {
      console.log(`Your bill is $${bill}. Tip 10% ($${bill * 0.1})`);
    } else if (() => 51) {
      console.log(`Your bill is $${bill}. Tip 15% ($${bill * 0.15})`);
    } else {
      return;
    }
  };
  tipCalc(bill);
} else {
  console.log('You did not enter a valid number. Try again!');
}
