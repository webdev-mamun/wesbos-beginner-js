const item = document.querySelector(".item");
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = "cute pup";
console.log(document.querySelector(".wrapper"));
const html = `
    <div class="wrapper">
        <img src="${src}" alt="${desc}" />
        <h2>${desc}</h2>
    </div>`;

const myFragment = document.createRange().createContextualFragment(html);
myFragment.querySelector("img").classList.add("open");

item.append(myFragment);
