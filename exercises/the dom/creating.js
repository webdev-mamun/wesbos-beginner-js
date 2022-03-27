const pragraph = document.createElement("p");
pragraph.textContent = "I am a p";
pragraph.classList.add("special");

const image = document.createElement("img");
image.src = "https://picsum.photos/500";
image.alt = "nice pic";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.appendChild(pragraph);
wrapper.appendChild(image);
document.body.appendChild(wrapper);

//we need to add something to the top

const heading = document.createElement("h2");
heading.innerText = "cool thing";
wrapper.insertAdjacentElement("afterbegin", heading);

const list = document.createElement("ul");
const item2 = document.createElement("li");
item2.textContent = "two";
list.append(item2);

wrapper.insertAdjacentElement("beforeend", list);

const item1 = item2.cloneNode();
item1.textContent = "one";
item2.insertAdjacentElement("beforebegin", item1);
