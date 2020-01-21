function calc() {
  let inputPeople = document.querySelectorAll(".counter-block-input")[0],
      inputDay = document.querySelectorAll(".counter-block-input")[1],
      totalCalc = document.querySelector("#total"),
      selectPlace = document.querySelector("#select"),
      total = 0;
  totalCalc.textContent = "0";
  inputPeople.addEventListener("input", function () {
    if (this.value != "" && inputDay.value != "") {
      total = 1000 * Number(this.value) * Number(inputDay.value);
      totalCalc.textContent = total * +selectPlace.value;
    } else {
      totalCalc.textContent = "0";
    }
  });
  inputDay.addEventListener("input", function () {
    if (this.value != "" && inputPeople.value != "") {
      total = 1000 * Number(this.value) * Number(inputPeople.value);
      totalCalc.textContent = total * +selectPlace.value;
    } else {
      totalCalc.textContent = "0";
    }
  });
  selectPlace.addEventListener("input", function () {
    if (inputDay.value != "" && inputPeople.value != "") {
      totalCalc.textContent = total * +this.value;
    }
  }); //localStorage.setItem("number", "dfd");
} //module.exports = calc;


export { calc };