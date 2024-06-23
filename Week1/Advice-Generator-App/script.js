const adviceEl = document.querySelector(".advice-content");
const displayEl = document.querySelector(".display-advice");
const adviceId = document.querySelector(".advice-id");
const loaderEl = document.querySelector(".loader");

function HandleAdvice() {
  loaderEl.style.display = "block";
  adviceEl.innerHTML = "";
  adviceId.innerHTML = "";
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      loaderEl.style.display = "none";
      if (data) {
        adviceEl.innerHTML = data.slip.advice;
        adviceId.innerHTML = data.slip.id;
      } else {
        alert("Try Again");
      }
    })
    .catch((error) => {
      console.log(error);
      loaderEl.style.display = "none";
    });
}

HandleAdvice();

displayEl.addEventListener("click", HandleAdvice);
