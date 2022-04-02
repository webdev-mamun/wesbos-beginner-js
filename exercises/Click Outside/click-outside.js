const cardButtons = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");
function handleButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest(".card");
  const imageSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  const name = card.querySelector("h2").textContent;
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imageSrc.replace(
      "200",
      "600"
    )}" alt="${name}" />
    <p>${desc}</p>
  `;
  modalOuter.classList.add("open");
}

cardButtons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function (e) {
  const isOutside = !e.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
