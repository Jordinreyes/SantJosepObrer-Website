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
