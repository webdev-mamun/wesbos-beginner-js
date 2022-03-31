const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log("clicked!");
});

const coolBtn = document.querySelector(".coolBtn");
coolBtn.addEventListener("click", () => {
  console.log("Get click!");
});

const special = document.querySelector(".special");
function handleSpecial() {
  console.log("Get special click!");
}
special.addEventListener("click", handleSpecial);
//special.removeEventListener("click", handleSpecial);

const arrow = document.querySelector(".arrow");
const handleArrow = () => console.log("Get arrow click!");
arrow.addEventListener("click", handleArrow);

const buyNows = document.querySelectorAll(".buyBtn");

buyNows.forEach(function (buyNow) {
  buyNow.addEventListener("click", function () {
    console.log("Buy Now!");
  });
});

function handleBuy() {
  console.log("Buy now!!");
}

buyNows.forEach(function (buyNow) {
  buyNow.addEventListener("click", handleBuy);
});

buyNows.forEach((buyNow) =>
  buyNow.addEventListener("click", () => console.log("Buy now!!!"))
);

const handleBuyArrow = () => console.log("Buy now!!!!");
buyNows.forEach((buyNow) => buyNow.addEventListener("click", handleBuyArrow));

const handleBuyButtonClick = (btn) =>
  btn.addEventListener("click", handleArrow);

buyNows.forEach(handleBuyButtonClick);

function handleBuyClick(button) {
  button.addEventListener("click", handleBuyArrow);
}
buyNows.forEach(handleBuyClick);

function handleBuyButtonClick(e) {
  e.stopPropagation();
  const button = e.target;
  //console.log(button.textContent);
  //console.log(button.dataset.price);
  //console.log("You are buying it!");
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);
}

buyNows.forEach(function (buyNow) {
  buyNow.addEventListener("click", handleBuyButtonClick);
});
window.addEventListener("click", function (event) {
  console.log("clicking on the window");
  //console.log(event.target);
});
