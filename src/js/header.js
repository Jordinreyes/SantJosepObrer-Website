/**
 * INICIO HEADER CAMBIO DE COLOR
 */
const header = document.getElementById("header");
const main = document.getElementById("main");

let lastScroll = 0;
let fixed = false;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (fixed) return;

  if (currentScroll > lastScroll && currentScroll > 50) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  if (currentScroll >= main.offsetTop - header.offsetHeight) {
    header.classList.remove("header-hidden");
    header.classList.add("header-white");
    const logo = header.querySelector("img");
    logo.src = "public/logo/image2.webp";

    fixed = true;
  }

  lastScroll = currentScroll;
});
/**
 * TERMINA HEADER CAMBIO DE COLOR
 */

/**
 * MENU DE NAVEGACIÓN
 */
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.remove("-translate-x-full");
});

document.getElementById("close-menu").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.add("-translate-x-full");
});

document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
  const icon = toggle.querySelector("i");
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = toggle.nextElementSibling;
    submenu.classList.toggle("hidden");
  });
});

document.querySelectorAll(".submenu-desktop-toggle").forEach((toggle) => {
  const icon = toggle.querySelector("i");
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = toggle.nextElementSibling;
    document.querySelectorAll(".submenu-desktop-toggle + ul").forEach((ul) => {
      if (ul !== submenu) ul.classList.add("hidden");
    });
    submenu.classList.toggle("hidden");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".submenu-desktop-toggle")) {
    document.querySelectorAll(".submenu-desktop-toggle + ul").forEach((ul) => ul.classList.add("hidden"));
  }
});
/**
 * TERMINA MENU DE NAVEGACIÓN
 */

/**
 * ALERT CAROSELL
 */

/**
 * TERNINA ALERT CAROUSEL
 */

/**
 * STICKY NAVBAR
 */

// Al cargar la página, aplicar el enlace activo desde localStorage
/**
 * document.addEventListener("DOMContentLoaded", () => {
  const activeHref = localStorage.getItem("activeLink");
  if (activeHref) {
    const links = document.querySelectorAll(".navbar__list a, #mobile-menu a");
    links.forEach((link) => {
      if (link.href === activeHref) {
        link.classList.add("active-link");
      }
    });
  }

  // Guardar el href del enlace clicado
  const allLinks = document.querySelectorAll(".navbar__list a, #mobile-menu a");
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      localStorage.setItem("activeLink", link.href);
    });
  });
});

 */
