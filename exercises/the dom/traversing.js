const text = document.querySelector(".text");

console.log("element method ==>");
console.log(text.children);
console.log(text.firstElementChild);
console.log(text.lastElementChild);
console.log(text.previousElementSibling);
console.log(text.nextElementSibling);
console.log(text.parentElement);
console.log("node method ==>");
console.log(text.childNodes);
console.log(text.firstChild);
console.log(text.lastChild);
console.log(text.previousSibling);
console.log(text.nextSibling);
console.log(text.parentNode);

text.remove();
document.body.appendChild(text);

const p = document.createElement("p");
p.textContent = "I will be removed";
document.body.appendChild(p);
p.remove();
//document.body.appendChild(p);
