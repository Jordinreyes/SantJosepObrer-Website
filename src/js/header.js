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

    // Cambiar imagen del logo
    const logo = header.querySelector("img");
    logo.src = "public/logo/image2.webp";

    fixed = true;
  }

  lastScroll = currentScroll;
});

/**
 * MENU DE NAVEGACIÓN
 */
// Menú móvil
// Menú móvil
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.remove("-translate-x-full");
});

document.getElementById("close-menu").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.add("-translate-x-full");
});

// Submenús móviles (solo con el icono)
document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
  const icon = toggle.querySelector("i");
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = toggle.nextElementSibling;
    submenu.classList.toggle("hidden");
  });
});

// Submenús desktop (solo con el icono)
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

// Cierra los submenús si haces click fuera
document.addEventListener("click", (e) => {
  if (!e.target.closest(".submenu-desktop-toggle")) {
    document.querySelectorAll(".submenu-desktop-toggle + ul").forEach((ul) => ul.classList.add("hidden"));
  }
});
