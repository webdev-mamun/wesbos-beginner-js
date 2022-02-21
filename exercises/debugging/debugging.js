const people = [
  { name: "Wes", cool: true, country: "Canada" },
  { name: "Scott", cool: true, country: "Merica" },
  { name: "Snickers", cool: false, country: "Dog Country" },
];

// Console Methods ==>
/* console.log
people.forEach((person, index) => {
  console.log(person.name);
});
*/
/* console.error
people.forEach((person, index) => {
  console.error(person.name);
});
*/
/* console.warn
people.forEach((person, index) => {
  console.warn(person.name);
});
*/
/*console.group / console.groupCollapsed
people.forEach((person, index) => {
  console.groupCollapsed(person.name);
  console.log(person.cool);
  console.log(person.country);
  console.groupEnd(person.name);
});
*/
/* console.table
console.table(people);
*/

// Callstack ==>

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet("Wes"));
  console.log(name);
}

const button = document.querySelector(".bigger");
button.addEventListener("click", function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain",
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
