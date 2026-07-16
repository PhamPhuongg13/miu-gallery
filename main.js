const panel = document.querySelectorAll(".panel");

let last = -1;
for (let i = 0; i < panel.length; i++) {
  panel[i].addEventListener("click", function () {
    if (last === i) {
      panel[i].classList.toggle("active");
    } else {
      if (last !== -1) panel[last].classList.remove("active");
      panel[i].classList.add("active");
    }
    last = i;
  });
}
