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


export { tabs };