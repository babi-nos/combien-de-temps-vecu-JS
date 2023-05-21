const inputAge = document.getElementById("age");
const inputMonth = document.getElementById("month");
const inputDay = document.getElementById("day");
const form = document.getElementById("form");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

function calcAge(e) {
  e.preventDefault();
  const valueAge = inputAge.value;
  const valueMonth = inputMonth.value;
  const valueDay = inputDay.value;

  inputAge.classList.remove("red");
  inputMonth.classList.remove("red");
  inputDay.classList.remove("red");

  if (valueAge === "") {
    inputAge.classList.add("red");
    result.innerHTML = `<h1>Les valeur sont vide ou inncorect<h1>`;
  } else if (valueMonth === "") {
    inputMonth.classList.add("red");
    result.innerHTML = `<h1>Les valeur sont vide ou inncorect<h1>`;
  } else if (valueDay === "") {
    inputDay.classList.add("red");
    result.innerHTML = `<h1>Les valeur sont vide ou inncorect<h1>`;
  } else {
    const calcYears = valueAge * 365 + valueMonth * 30 + parseInt(valueDay);
    const monthAll = calcYears / 30;
    const secondAll = calcYears * 86400;

    result.innerHTML = `
    <h1>Vous avez passer <span class="green"> ${calcYears.toLocaleString(
      "FR-fr"
    )} jours</span>, vecu :<span class="green"> ${Math.floor(
      monthAll
    )} mois </span> et passer <span class="green"> ${secondAll.toLocaleString(
      "FR-fr"
    )} secondes </span> sur terre !!
            </h1>
            `;
  }
}
form.addEventListener("submit", (e) => calcAge(e));
