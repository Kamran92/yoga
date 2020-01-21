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


export { modal };