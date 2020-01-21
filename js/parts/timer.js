function timer() {
  setInterval(timer, 1000);

  function timer() {
    let timerElem = document.querySelector("#timer"),
        hoursValue = timerElem.querySelector(".hours"),
        minutesValue = timerElem.querySelector(".minutes"),
        secondsVale = timerElem.querySelector(".seconds"),
        date = new Date(),
        dateNew = new Date();
    dateNew.setDate(date.getDate() + 1);
    dateNew.setHours(0, 0, 0, 0);
    let time = dateNew.getTime() - date.getTime(),
        seconds = Math.floor(time / 1000 % 60),
        minutes = Math.floor(time / 1000 / 60 % 60),
        hours = Math.floor(time / 1000 / 60 / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    ;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    ;

    if (hours < 10) {
      hours = "0" + hours;
    }

    hoursValue.textContent = hours;
    minutesValue.textContent = minutes;
    secondsVale.textContent = seconds;
  }
} //module.exports = timer;


export { timer };