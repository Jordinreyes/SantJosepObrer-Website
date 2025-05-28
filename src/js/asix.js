window.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navbar = document.getElementById("sticky-navbar");

  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", () => {
    const headerBottom = header.getBoundingClientRect().bottom;
    const navbarTop = navbar.getBoundingClientRect().top;

    // Si el bottom del header está tocando o pasando el top de la navbar
    if (headerBottom >= navbarTop) {
      navbar.classList.add("stuck");
      navbar.style.top = `${headerHeight}px`;
    } else {
      navbar.classList.remove("stuck");
      navbar.style.top = "auto";
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const navbar = document.getElementById("sticky-navbar");

  let navbarTimeout = null;
  navbar.style.opacity = "0";
  navbar.style.pointerEvents = "none";
  navbar.style.position = "fixed";
  navbar.style.width = "100%";
  navbar.style.left = "0";
  navbar.style.bottom = "auto";
  navbar.style.top = "0";

  window.addEventListener("scroll", () => {
    const headerBottom = header.getBoundingClientRect().bottom;
    const mainTop = main.getBoundingClientRect().top;

    if (headerBottom >= mainTop) {
      if (!navbar.classList.contains("visible")) {
        if (navbarTimeout) clearTimeout(navbarTimeout);
        navbarTimeout = setTimeout(() => {
          navbar.style.opacity = "1";
          navbar.style.pointerEvents = "auto";
          navbar.classList.add("visible");
          navbar.style.top = `${header.offsetHeight}px`;
        }, 100);
      }
    } else {
      if (navbar.classList.contains("visible")) {
        if (navbarTimeout) clearTimeout(navbarTimeout);
        navbar.classList.remove("visible");
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none";
        navbar.style.top = "0";
      }
    }
  });
});

/**
 * VENTANA MODAL
 */

document.querySelectorAll('[id^="modal-expandible-"]').forEach((modal) => {
  modal.addEventListener("click", () => {
    const expanded = modal.getAttribute("aria-expanded") === "true";
    const contenido = modal.querySelector('[id^="contenido-expandible-"]');
    const icon = modal.querySelector('[id^="modal-icon-"]');

    if (expanded) {
      modal.setAttribute("aria-expanded", "false");
      modal.style.maxHeight = "56px";
      contenido.style.opacity = 0;
      contenido.style.pointerEvents = "none";
      icon.textContent = "+";
    } else {
      modal.setAttribute("aria-expanded", "true");
      modal.style.maxHeight = "1000px"; // o el máximo que necesites
      contenido.style.opacity = 1;
      contenido.style.pointerEvents = "auto";
      icon.textContent = "−";
    }
  });
});
