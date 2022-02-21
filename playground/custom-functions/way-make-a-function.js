/* name function 
function inchToCM(inch) {
  const cm = inch * 2.54;
  return cm;
}
*/

/* anonymous function
function() {
    function body
}
*/

/* function expression
const inchToCM = function (inch) {
  const cm = inch * 2.54;
  return cm;
};
*/

/* function expression to arrow function
const inchToCM = function (inch) {
  const cm = inch * 2.54;
  return cm;
};

const inchToCM = function (inch) {
  return inch * 2.54;
};

const inchToCM = (inch) => {
  return inch * 2.54;
};

arrow function
const inchToCM = (inch) => inch * 2.54;
*/
/* calculate bill with arrow function
const calculateBill = (bill, taxRate = 0.13, tipRate = 0.15) =>
  bill + bill * taxRate + bill * tipRate;
*/
/* implicit return object with arrow function
const person = (name, age) => ({ name: name, age: age });
const mamun = person("mamun", 27);
*/

/*
const mamun = {
//method
  name: "mamun",
  sayHi: function () {
    return `Hi ${this.name}`;
  },
  //short hand method
  sayHello() {
    return `Hello ${this.name}`;
  },
  //arrow method
  sayBye: (name) => `Bye ${name}`,
};
*/

//callback function
/* callback anonymous function 
setTimeout(function () {
  console.log("its okay now!!");
}, 2000);
*/

/* callback name function
function sayOkay() {
  console.log("its okay now");
}

setTimeout(sayOkay, 2000);
*/
/* callback arrow function
setTimeout(() => console.log("its okay now!"), 2000);
*/
