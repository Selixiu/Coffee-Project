"use strict";
const burger = document.querySelector(".burger");
const navigationUl = document.querySelector(".navigation-ul");
let viewWidth = window.innerWidth;

burger.addEventListener("click", function (e) {
  navigationUl.classList.toggle("hidden");
});
visualViewport.addEventListener("resize", () => {
  if (visualViewport.width > 800) {
    navigationUl.classList.remove("hidden");
  }
  if (visualViewport.width <= 800) {
    navigationUl.classList.add("hidden");
  }
});
console.log(visualViewport);
