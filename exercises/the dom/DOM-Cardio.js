// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div);
// make an unordered list
const list = document.createElement("ul");
// add three list items with the words "one, two, three" in them
const item1 = document.createElement("li");
item1.textContent = "one";
list.appendChild(item1);
const item2 = item1.cloneNode();
item2.innerText = "two";
list.appendChild(item2);
const item3 = item1.cloneNode(true);
item3.textContent = "three";
list.append(item3);

// put that list into the above wrapper
div.append(list);
// create an image
const image = document.createElement("img");
// set the source to an image
image.src = "https://picsum.photos/200";
// set the width to 250
image.width = "250";
// add a class of cute
image.classList.add("cute");
// add an alt of Cute Puppy
image.alt = "Cute Puppy";
// Append that image to the wrapper
div.appendChild(image);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `<div class="items">
                    <p>First paragraph</p>
                    <p>Second paragraph</p>
                </div>`;
// put this div before the unordered list from above
div.insertAdjacentHTML("afterbegin", myHTML);
// add a class to the second paragraph called warning
const items = document.querySelector(".items");
items.lastElementChild.classList.add("warning");
// remove the first paragraph
items.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  return ` <div class="playerCard">
      <h2>${name} — ${age}</h2>
       <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
     </div>`;
}

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");

// make 4 player cards using generatePlayerCard
const playerOne = generatePlayerCard("Mamun", 26, 1.651);
const playerTwo = generatePlayerCard("Tanjim", 27, 1.651);
const playerThree = generatePlayerCard("Jeshan", 29, 1.651);
const playerFour = generatePlayerCard("Imran", 28, 1.8796);
//append those cards to the div
cards.insertAdjacentHTML("afterbegin", playerOne);
cards.insertAdjacentHTML("afterbegin", playerTwo);
cards.insertAdjacentHTML("afterbegin", playerThree);
cards.insertAdjacentHTML("afterbegin", playerFour);
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const players = document.querySelectorAll(".playerCard");
players.forEach((player) => {
  const button = document.createElement("button");
  button.textContent = "delete";
  console.log(player);
  player.appendChild(button);
});
// select all the buttons!
const allButton = document.querySelectorAll("button");
// make out delete function
function deleteButton(event) {
  event.currentTarget.closest(".playerCard").remove();
}
// loop over them and attach a listener
allButton.forEach((button) => button.addEventListener("click", deleteButton));
