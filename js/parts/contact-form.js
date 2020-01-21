function contactForm() {
	let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так..."
  };
  
  let contactForm = document.querySelector("#form"),
	statusMessage = document.createElement("div"),
      inputContactForm = contactForm.getElementsByTagName("input");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactForm.appendChild(statusMessage);
    let request = new XMLHttpRequest();
    request.open("POST", "../server.php");
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    let contactFormData = new FormData(contactForm);
	console.log(contactFormData);
    function formData(form) {
      return new Promise(function (resolve, reject) {
        let obj = {};
        form.forEach(function (value, key) {
          obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);
        request.addEventListener("readystatechange", function () {
          if (request.readyState > 4) {
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
      for (let i = 0; i < inputContactForm.length; i++) {
        inputContactForm[i].value = "";
      }
    }

    formData(contactFormData).then(() => {
      statusMessage.textContent = message.loading;
    }).then(() => {
      statusMessage.textContent = message.success;
    }).catch(() => {
      statusMessage.textContent = message.failure;
    }).then(deleteValue);
  });
} //module.exports = contactForm;


export { contactForm };