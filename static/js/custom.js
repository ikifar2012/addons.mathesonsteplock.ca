// custom.js
document.addEventListener('DOMContentLoaded', () => {
const observer = new MutationObserver((mutations) => {
  const navbar = document.querySelector('.navbar.navbar--fixed-top');
  if (navbar) {
      // console.log('Navbar found!', navbar);
      observer.disconnect(); // Stop observing once found
      window.addEventListener("scroll", function () {
        const scroll = window.scrollY;
        if (scroll > 20) { // Adjust the scroll position at which the effect triggers
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
  }
});
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
});
