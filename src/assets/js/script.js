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

//Menu resize on scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector(".js-header");
  // header.classList.toggle("h-20", window.scrollY > 0);
  if (this.window.scrollY > 20) {
    header.classList.remove("md:h-20");
    header.classList.add("md:h-12");
  } else {
    header.classList.remove("md:h-12");
    header.classList.add("md:h-20");
  }
});

// TODO:darkmode spaghetti
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }
//
// localStorage.theme = "light";
// localStorage.theme = "dark";
// localStorage.removeItem("theme");
