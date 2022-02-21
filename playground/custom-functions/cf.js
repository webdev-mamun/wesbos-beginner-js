/* function without parameter
let bill = 100;
let taxRate = 0.13;

function calculateBill() {
  const total = bill * (1 + taxRate);
  return total;
}

const myTotal = calculateBill();
bill = 200;
const myTotal2 = calculateBill();
console.log(myTotal, myTotal2);
*/

/* function with parameter
function calculateBill(bill, taxRate) {
  const total = bill * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);
*/

/* function with default parameter and passing variable as argument
function calculateBill(bill, taxRate = 0.13) {
  const total = bill * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(200);
const myBill = 300;
const myTaxtRate = 0.05;
const myTotal2 = calculateBill(myBill, myTaxtRate);
console.log(myTotal, myTotal2);
*/

/* passing expression or running expression as argument 
function calculateBill(bill, taxRate) {
  const total = bill * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(20 + 40 + 35, 0.13);
console.log(myTotal);
*/
/*
function calculateBill(bill, taxRate = 0.13, tipRate = 0.15) {
  const total = bill + bill * taxRate + bill * tipRate;
  return total;
}

const myTotal = calculateBill(100, undefined, 0.05);
*/
