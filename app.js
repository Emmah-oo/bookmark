const firstHead = document.getElementById("head-1");
const secondHead = document.getElementById("head-2");
const thirdHead = document.getElementById("head-3");
const firstSlide = document.querySelector(".carousel-1");
const secondSlide = document.querySelector(".carousel-2");
const thirdSlide = document.querySelector(".carousel-3");
const firstArrow = document.querySelectorAll(".question img")[0];
const secondArrow = document.querySelectorAll(".question img")[1];
const thirdArrow = document.querySelectorAll(".question img")[2];
const fourthArrow = document.querySelectorAll(".question img")[3];
const firstAnswer = document.querySelectorAll(".answer")[0];
const secondAnswer = document.querySelectorAll(".answer")[1];
const thirdAnswer = document.querySelectorAll(".answer")[2];
const fourthAnswer = document.querySelectorAll(".answer")[3];
const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");
const socials = document.querySelector(".nav-socials");
const btn = document.querySelector(".submit");
const form = document.getElementById("email");
const invalid = document.querySelector(".invalid");
const verification = document.querySelector(".verification");

btn.addEventListener("click", () => {
  let input = form.value;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    verification.textContent = "";
    form.value = "";
    form.className = "valid-email";
    verification.className = "verification";
    return true;
  } else {
    form.className = "invalid-email";
    verification.textContent = "Whoops, make sure it's an email";
    verification.className = "verification-active";
    return false;
  }
});

firstHead.addEventListener("click", () => {
  firstHead.classList.add("active-carousel");
  removeActiveClasses3();
  removeActiveClasses2();
  firstSlide.classList.add("show-carousel");
  secondSlide.classList.remove("show-carousel");
  thirdSlide.classList.remove("show-carousel");
});

secondHead.addEventListener("click", () => {
  removeActiveClasses1();
  removeActiveClasses3();
  secondHead.classList.add("active-carousel");
  secondSlide.classList.add("show-carousel");
  firstSlide.classList.remove("show-carousel");
  thirdSlide.classList.remove("show-carousel");
});

thirdHead.addEventListener("click", () => {
  removeActiveClasses2();
  removeActiveClasses1();
  thirdHead.classList.add("active-carousel");
  thirdSlide.classList.add("show-carousel");
  firstSlide.classList.remove("show-carousel");
  secondSlide.classList.remove("show-carousel");
});

function removeActiveClasses1() {
  firstHead.classList.remove("active-carousel");
}

function removeActiveClasses2() {
  secondHead.classList.remove("active-carousel");
}

function removeActiveClasses3() {
  thirdHead.classList.remove("active-carousel");
}

firstArrow.addEventListener("click", () => {
  firstAnswer.classList.toggle("show-answer");
  firstArrow.classList.toggle("rotate-arrow");
});

secondArrow.addEventListener("click", () => {
  secondAnswer.classList.toggle("show-answer");
  secondArrow.classList.toggle("rotate-arrow");
});

thirdArrow.addEventListener("click", () => {
  thirdAnswer.classList.toggle("show-answer");
  thirdArrow.classList.toggle("rotate-arrow");
});

fourthArrow.addEventListener("click", () => {
  fourthAnswer.classList.toggle("show-answer");
  fourthArrow.classList.toggle("rotate-arrow");
});

burger.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  burger.classList.toggle("toggle");
  socials.classList.toggle("nav-socials-active");
});
