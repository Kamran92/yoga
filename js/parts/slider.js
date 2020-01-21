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


export { slider };