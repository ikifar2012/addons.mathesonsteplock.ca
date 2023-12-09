// static/custom.js

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar.navbar--fixed-top");

  window.addEventListener("scroll", function () {
    var scroll = window.scrollY;
    // Adjust the scroll position and blur value as needed
    if (scroll > 0) {
      blurValue = 20;
    }

    navbar.style.backdropFilter = "blur(" + blurValue + "px)";
  });
});
