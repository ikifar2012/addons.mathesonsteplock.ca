// static/js/custom.js

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar.navbar--fixed-top");

  window.addEventListener("scroll", function () {
    var scroll = window.scrollY;

    if (scroll > 20) { // Adjust the scroll position at which the effect triggers
      navbar.classList.add("scrolled");
      console.log("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      console.log("not scrolled");
    }
  });
});
