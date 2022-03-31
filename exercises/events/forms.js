const wes = document.querySelector(".wes");
wes.addEventListener("click", function (event) {
  const shouldChangePage = confirm(
    "This website might be malicious, do you wish to proceed?"
  );
  if (!shouldChangePage) event.preventDefault();
});

const signup = document.querySelector('[name="signup"]');
signup.addEventListener("submit", function (e) {
  if (!e.currentTarget.agree.checked) e.preventDefault();
  console.log(e.currentTarget.name.value);
  console.log(e.currentTarget.email.value);
  console.log(e.currentTarget.agree.checked);
});

function handleEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signup.name.addEventListener("keyup", handleEvent);
signup.name.addEventListener("keydown", handleEvent);
signup.name.addEventListener("focus", handleEvent);
signup.name.addEventListener("blur", handleEvent);
