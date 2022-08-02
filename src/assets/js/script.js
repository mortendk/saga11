// Menu toggler
let btn = document.querySelector(".js-menu-toggle");
let menu = document.querySelector(".js-menu");

btn.onclick = function () {
  menu.classList.toggle("-left-full");
  menu.classList.toggle("left-0");
  btn.children[0].classList.toggle("hidden");
  btn.children[1].classList.toggle("hidden");
};

// image toggler
let btnImageToggle = document.querySelector(".js-image-toggle");
btnImageToggle.onclick = function (e) {
  e.preventDefault();
  this.nextElementSibling.classList.toggle("gallery-open");
  this.nextElementSibling.classList.toggle("z-0");
};
