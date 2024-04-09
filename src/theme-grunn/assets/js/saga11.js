// General utilities used by 11ty
// 👋 src/theme-grunn/assets/js/saga11.js
//

// Set a warning under rendered youtube videos that if they press play etc
const tube = document.querySelectorAll('.md-youtube')
const div = document.createElement("div");
div.textContent = "FYI: When clicking play on the youtube video - youtube will set cookies";
// div.classList.add('')

tube.forEach(function (element) {
  element.appendChild(div);
});


const themeselector = document.querySelector(".themeselector");
themeselector.setAttribute("data-theme", "germany");
const theme = themeselector.getAttribute("data-theme");

console.log(theme);
