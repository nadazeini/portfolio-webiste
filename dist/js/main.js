//selecting dom items
//want menu button
//menu overlay
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-branding");
//more than one cant use query selector
const navItems = document.querySelectorAll(".nav-item");
menuBtn.addEventListener("click", toggleMenu);
let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
