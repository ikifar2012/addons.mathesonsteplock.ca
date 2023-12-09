// static/js/custom.js

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar.navbar--fixed-top");

  window.addEventListener("scroll", function () {
    console.log("scrolling");
    // Set the current scroll position
    console.log(window.scrollY);
    var scroll = window.scrollY;
    // Adjust the scroll position and blur value as needed
    if (scroll > 0) {
      blurValue = 20;
      navbar.style.backdropFilter = "blur(" + blurValue + "px)";
    }

  });
});
