"use strict";
const arrow = document.querySelectorAll(".arrow");
const options = document.querySelectorAll(".options-wrapper");
const preferences = document.querySelector(".preferences");
const beanType = document.querySelector(".bean-type");
const quantity = document.querySelector(".quantity");
const grindOption = document.querySelector(".grind-option");
const deliveries = document.querySelector(".deliveries");
const prf = document.querySelectorAll(".pref");
const nvg = document.querySelector(".nav-wrapper");
const tstclass = document.querySelectorAll(".test-class");
const create = document.querySelector(".create");
const overlay = document.querySelector(".overlay");
const finalOrder = document.querySelector(".final-order");
const price = document.querySelector(".price");
const orderSteps = document.querySelector(".order-steps-wrapper");
const burger = document.querySelector(".burger");
const navigationUl = document.querySelector(".navigation-ul");

let viewWidth = window.innerWidth;
const spanHow = document.querySelectorAll(".spanHow");
const spanbeanT = document.querySelectorAll(".spanbeanT");
const spanQtty = document.querySelectorAll(".spanQtty");
const spanGrind = document.querySelectorAll(".spanGrind");
const spanDelivery = document.querySelectorAll(".spanDelivery");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const numbers = document.querySelectorAll(".numbers");
// console.log(tstclass);
// console.log(options);
// console.log(arrow);
const stringArray = { type: "type of coffee" };

// console.log(prf);
arrow.forEach((elem) =>
  elem.addEventListener("click", function (e) {
    const clickedOn = e.target.parentElement;
    const sibling = clickedOn.nextElementSibling;
    sibling.classList.toggle("hidden");
    sibling.classList.toggle("opacity1");
    elem.classList.toggle("rotate");
  })
);

let how;
let beanT;
let qtty;
let grind;
let delivery;

options.forEach((elem) =>
  elem.addEventListener("click", function (e) {
    function preferinta() {
      const selectedHow = e.target.closest(".test-class");
      const parentHow = selectedHow.parentElement;

      if (parentHow.classList.contains("preferences")) {
        document
          .querySelectorAll(".pref")
          .forEach((elem) => elem.classList.remove("selected"));
        selectedHow.classList.toggle("selected");
        const howstring =
          selectedHow.firstElementChild.firstElementChild.innerHTML;
        how = howstring;
      }
      if (parentHow.classList.contains("bean-type")) {
        document
          .querySelectorAll(".types")
          .forEach((elem) => elem.classList.remove("selected"));
        selectedHow.classList.toggle("selected");
        const typestring =
          selectedHow.firstElementChild.firstElementChild.innerHTML;
        beanT = typestring;
      }
      if (parentHow.classList.contains("quantity")) {
        document
          .querySelectorAll(".qtty")
          .forEach((elem) => elem.classList.remove("selected"));
        selectedHow.classList.toggle("selected");
        const qttystring =
          selectedHow.firstElementChild.firstElementChild.innerHTML;
        qtty = qttystring;
      }
      if (parentHow.classList.contains("grind-option")) {
        document
          .querySelectorAll(".grind")
          .forEach((elem) => elem.classList.remove("selected"));
        selectedHow.classList.toggle("selected");
        const grindstring =
          selectedHow.firstElementChild.firstElementChild.innerHTML;
        grind = grindstring;
      }
      if (parentHow.classList.contains("deliveries")) {
        document
          .querySelectorAll(".delliv")
          .forEach((elem) => elem.classList.remove("selected"));
        selectedHow.classList.toggle("selected");
        const deliverytring =
          selectedHow.firstElementChild.firstElementChild.innerHTML;
        delivery = deliverytring;
      }
    }

    preferinta();
    if (typeof how !== "undefined") {
      const html = `${how}`;
      spanHow.forEach((elem) => (elem.innerHTML = ""));
      spanHow.forEach((elem) => elem.insertAdjacentHTML("afterbegin", html));
      // spanHow.innerHTML = "";
      // spanHow.insertAdjacentHTML("afterbegin", html);
    }
    if (typeof beanT !== "undefined") {
      const html = `${beanT}`;
      spanbeanT.forEach((elem) => (elem.innerHTML = ""));
      spanbeanT.forEach((elem) => elem.insertAdjacentHTML("afterbegin", html));
    }
    if (typeof qtty !== "undefined") {
      const html = `${qtty} `;
      spanQtty.forEach((elem) => (elem.innerHTML = ""));
      spanQtty.forEach((elem) => elem.insertAdjacentHTML("afterbegin", html));
    }
    if (typeof grind !== "undefined") {
      const html = `${grind},`;
      spanGrind.forEach((elem) => (elem.innerHTML = ""));
      spanGrind.forEach((elem) => elem.insertAdjacentHTML("afterbegin", html));
    }
    if (typeof delivery !== "undefined") {
      const html = `${delivery}`;
      spanDelivery.forEach((elem) => (elem.innerHTML = ""));
      spanDelivery.forEach((elem) =>
        elem.insertAdjacentHTML("afterbegin", html)
      );
    }
    if (
      typeof how !== "undefined" &&
      typeof beanT !== "undefined" &&
      typeof qtty !== "undefined" &&
      typeof grind !== "undefined" &&
      typeof delivery !== "undefined"
    ) {
      create.setAttribute("href", "./index.html");
      create.classList.remove("displabled-link");
    }
    if (delivery === "Every week") {
      price.innerHTML = "$14.00";
    }
    if (delivery === "Every 2 weeks") {
      price.innerHTML = "$17.25";
    }
    if (delivery === "Every month") {
      price.innerHTML = "$22.50";
    }
    function removeAdd(cls) {
      numbers.forEach((elem) => elem.classList.remove("selected-num"));
      cls.classList.add("selected-num");
    }
    if (typeof how !== "undefined") {
      removeAdd(one);
    }
    if (typeof beanT !== "undefined") {
      removeAdd(two);
    }
    if (typeof qtty !== "undefined") {
      removeAdd(three);
    }
    if (typeof grind !== "undefined") {
      removeAdd(four);
    }
    if (typeof delivery !== "undefined") {
      removeAdd(five);
    }
  })
);

create.addEventListener("click", function (e) {
  e.preventDefault();
  if (!create.classList.contains("displabled-link")) {
    overlay.classList.remove("hidden");
    finalOrder.classList.remove("hidden");
  }
});

//Close Overlay
document.body.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    overlay.classList.add("hidden");
    finalOrder.classList.add("hidden");
  }
});
overlay.addEventListener("click", function (e) {
  const clickedOn = e.target;
  if (clickedOn.classList.contains("overlay")) {
    overlay.classList.add("hidden");
    finalOrder.classList.add("hidden");
  }
});

visualViewport.addEventListener("resize", () => {
  if (visualViewport.width <= 800) {
    orderSteps.classList.add("hidden");
    navigationUl.classList.add("hidden");
  } else {
    orderSteps.classList.remove("hidden");
    navigationUl.classList.remove("hidden");
  }
});
burger.addEventListener("click", function (e) {
  navigationUl.classList.toggle("hidden");
});
