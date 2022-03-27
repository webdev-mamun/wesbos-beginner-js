const p = document.querySelector("p");
const image = document.querySelector(".item img");
//const item2 = document.querySelector(".item2");
//const item2Image = item2.querySelector("img");
//const heading = document.querySelector("h2");

//heading.textContent = "Mamun is cool";

// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

//const pizza = document.querySelector(".pizza");
//pizza.textContent = "🍕" + pizza.textContent + "🍕";
//pizza.innerText = "🍕" + pizza.innerText + "🍕";

//pizza.insertAdjacentText("beforeend", "🍕");
//pizza.insertAdjacentText("afterbegin", "🍕");
// pizza.insertAdjacentText("beforebegin", "🍕");
// pizza.insertAdjacentText("afterend", "🍕");

//const pic = document.querySelector(".nice");
// pic.classList.add("cool");
// console.log(pic.classList);
// pic.classList.remove("cool");
// console.log(pic.classList);
// function toggleOpen() {
//   pic.classList.toggle("open");
// }

// pic.addEventListener("click", toggleOpen);

// pic.alt = "cool pic";
// //pic.title = "pic";
// pic.setAttribute("title", "pic");
// console.log(pic.getAttribute("title"));

//const custom = document.querySelector(".custom");
// console.log(custom.dataset.name);

const names = document.querySelectorAll("[data-name]");

names.forEach((name) => {
  name.addEventListener("click", (e) => {
    const element = e.target;
    console.log(element.dataset.name);
  });
});
