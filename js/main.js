

const btnBurger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const navLinks = document.querySelectorAll(".nav__link");
const year = document.querySelector(".footer__year");

const openMenu = () => {
  navMobile.classList.toggle("nav-mobile--active");
  btnBurger.classList.toggle("is-active");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("nav-mobile--active");
      btnBurger.classList.remove("is-active");
    });
  });
};

const setYear = () => {
  let date = new Date().getFullYear();
  year.textContent = date;
};

setYear();
btnBurger.addEventListener("click", openMenu);


