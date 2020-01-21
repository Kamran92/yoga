function mainForm() {
  let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так..."
  };
  let mainForm = document.querySelector(".main-form"),
      inputMainForm = mainForm.getElementsByTagName("input"),
      statusMessage = document.createElement("div");
  statusMessage.classList.add("status");
  mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    mainForm.appendChild(statusMessage);
    let request = new XMLHttpRequest();
    request.open('POST', '../server.php'); //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    let mainFormData = new FormData(mainForm); //request.send(formData);

    function formData(form) {
      return new Promise(function (resolve, reject) {
        let obj = {};
        form.forEach(function (value, key) {
          obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);
        request.addEventListener("readystatechange", function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200) {
              resolve();
            } else {
              reject();
            }
          }
        });
      });
    }

    function deleteValue() {
      for (let i = 0; i < inputMainForm.length; i++) {
        inputMainForm[i].value = "";
      }
    }

    formData(mainFormData).then(() => {
      statusMessage.textContent = message.loading;
    }).then(() => {
      statusMessage.textContent = message.success;
    }).catch(() => {
      statusMessage.textContent = message.failure;
    }).then(deleteValue);
  });
} //module.exports = mainForm;


export { mainForm };