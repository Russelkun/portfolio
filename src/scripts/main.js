console.log("I am connected");

const body = document.body;

const primaryNavigation = document.querySelector(".primary-navigation");
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.querySelector(".main-nav-nav");

navToggle.addEventListener("click", () => {
  const switchAttribute = navToggle.getAttribute("aria-expanded");
  mainNav.classList.toggle("open");
  body.classList.toggle("open");

  if (switchAttribute == "false") {
    navToggle.setAttribute("aria-expanded", "true");
    primaryNavigation.setAttribute("data-visible", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
    primaryNavigation.setAttribute("data-visible", "false");
  }
});
