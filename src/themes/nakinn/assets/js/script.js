// Menu toggler
let btn = document.querySelector(".js-menu-toggle");
let menu = document.querySelector(".js-menu");

btn.onclick = function () {
  // menu.classList.toggle("hidden");
  menu.classList.toggle("-left-full");
  menu.classList.toggle("left-0");
  // show hide the menu icons
  btn.children[0].classList.toggle("hidden");
  btn.children[1].classList.toggle("hidden");
};
