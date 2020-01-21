/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/calc */ "./js/parts/calc.js");
/* harmony import */ var _parts_contact_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/contact-form */ "./js/parts/contact-form.js");
/* harmony import */ var _parts_main_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/main-form */ "./js/parts/main-form.js");
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/modal */ "./js/parts/modal.js");
/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js");
/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/tabs */ "./js/parts/tabs.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/timer */ "./js/parts/timer.js");








window.addEventListener("DOMContentLoaded", function () {
    "use strict"

    Object(_parts_calc__WEBPACK_IMPORTED_MODULE_0__["calc"])();
    Object(_parts_contact_form__WEBPACK_IMPORTED_MODULE_1__["contactForm"])();
    Object(_parts_main_form__WEBPACK_IMPORTED_MODULE_2__["mainForm"])();
    Object(_parts_modal__WEBPACK_IMPORTED_MODULE_3__["modal"])();
    Object(_parts_slider__WEBPACK_IMPORTED_MODULE_4__["slider"])();
    Object(_parts_tabs__WEBPACK_IMPORTED_MODULE_5__["tabs"])();
    Object(_parts_timer__WEBPACK_IMPORTED_MODULE_6__["timer"])();
})

/***/ }),

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
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




/***/ }),

/***/ "./js/parts/contact-form.js":
/*!**********************************!*\
  !*** ./js/parts/contact-form.js ***!
  \**********************************/
/*! exports provided: contactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactForm", function() { return contactForm; });
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




/***/ }),

/***/ "./js/parts/main-form.js":
/*!*******************************!*\
  !*** ./js/parts/main-form.js ***!
  \*******************************/
/*! exports provided: mainForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainForm", function() { return mainForm; });
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




/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
function modal() {
  let more = document.querySelector(".more"),
      overlay = document.querySelector(".overlay"),
      popupClose = document.querySelector(".popup-close");
  more.addEventListener("click", function () {
    overlay.style.display = "block";
    this.classList.add("more-splach");
    document.body.style.overflow = "hidden";
  });
  popupClose.addEventListener("click", function () {
    overlay.style.display = "none";
    more.classList.remove("more-splach");
    document.body.style.overflow = "";
  });
} //module.exports = modal;




/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
function slider() {
  let sliderItems = document.querySelectorAll(".slider-item"),
      prev = document.querySelector(".prev"),
      next = document.querySelector(".next"),
      sliderDots = document.querySelector(".slider-dots"),
      dots = document.querySelectorAll(".dot"),
      sliderIndex = 1;
  slider(sliderIndex);
  sliderDots.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length; i++) {
      if (event.target === dots[i]) {
        sliderIndex = i + 1;
        slider(sliderIndex);
      }
    }
  });
  prev.addEventListener("click", function () {
    sliderIndex -= 1;

    if (sliderIndex < 1) {
      sliderIndex = sliderItems.length;
    }

    slider(sliderIndex);
  });
  next.addEventListener("click", function () {
    sliderIndex += 1;

    if (sliderIndex > sliderItems.length) {
      sliderIndex = 1;
    }

    slider(sliderIndex);
  });

  function slider(i) {
    sliderItems.forEach(function (item) {
      item.style.display = "none";
    });
    dots.forEach(function (item) {
      item.classList.remove("dot-active");
    });
    sliderItems[i - 1].style.display = "block";
    dots[i - 1].classList.add("dot-active");
  }
} //module.exports = slider;




/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
function tabs() {
  let infoHeaderTab = document.querySelectorAll(".info-header-tab"),
      infoTabContent = document.querySelectorAll(".info-tabcontent");

  for (let i = 1; i < infoTabContent.length; i++) {
    infoTabContent[i].classList.add("hide");
  }

  for (let i = 0; i < infoHeaderTab.length; i++) {
    infoHeaderTab[i].addEventListener("click", function () {
      for (let j = 0; j < infoTabContent.length; j++) {
        infoTabContent[j].classList.add("hide");
      }

      infoTabContent[i].classList.remove("hide");
    });
  }
} //module.exports = tabs;




/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
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




/***/ })

/******/ });
//# sourceMappingURL=main.js.map