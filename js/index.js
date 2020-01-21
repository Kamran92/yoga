import {calc} from "./parts/calc";
import {contactForm} from "./parts/contact-form";
import {mainForm} from "./parts/main-form";
import {modal} from "./parts/modal";
import {slider} from "./parts/slider";
import {tabs} from "./parts/tabs";
import {timer} from "./parts/timer";

window.addEventListener("DOMContentLoaded", function () {
    "use strict"

    calc();
    contactForm();
    mainForm();
    modal();
    slider();
    tabs();
    timer();
})