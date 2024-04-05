const tube = document.querySelectorAll('div.md-youtube')
const div = document.createElement("div");
div.textContent = "When clicking play on the youtube video  youtube will set cookies - just so were clear";
div.classList.add('')
div.classList.add('')
tube.forEach(function (element) {
  element.appendChild(div);
});




