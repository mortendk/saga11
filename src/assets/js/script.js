// Menu toggler
let btn = document.querySelector(".js-menu-toggle");
let menu = document.querySelector(".js-menu");

btn.onclick = function () {
  menu.classList.toggle("-left-full");
  menu.classList.toggle("left-0");
};

// image toggler
let btnImageToggle = document.querySelector(".js-image-toggle");
btnImageToggle.onclick = function (e) {
  e.preventDefault();
  document.body.classList.toggle("overflow-y-hidden");
  this.nextElementSibling.classList.toggle("gallery-open");
  this.nextElementSibling.classList.toggle("z-0");
};
