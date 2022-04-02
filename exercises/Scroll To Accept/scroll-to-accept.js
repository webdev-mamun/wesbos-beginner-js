const terms = document.querySelector(".terms-and-conditions");
const accept = document.querySelector(".accept");
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

function obCallback(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio === 1) {
      accept.disabled = false;
      ob.unobserve(entry.target);
    }
  });
}

ob.observe(terms.lastElementChild);
