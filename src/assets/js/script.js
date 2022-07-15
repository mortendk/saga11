// Menu toggler
let btn = document.querySelector(".js-menu-toggle");
let menu = document.querySelector(".js-menu");

btn.onclick = function () {
  menu.classList.toggle("hidden");
  menu.classList.toggle("-left-full");
  menu.classList.toggle("left-0");
  // show hide the menu icons
  btn.children[0].classList.toggle("hidden");
  btn.children[1].classList.toggle("hidden");
};

//Menu resize on scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector(".js-header");
  // header.classList.toggle("h-20", window.scrollY > 0);
  if (this.window.scrollY > 20) {
    console.log("go");
    header.classList.remove("h-20");
    header.classList.add("h-10");
  } else {
    console.log("home");
    header.classList.remove("h-10");
    header.classList.add("h-20");
  }
});
