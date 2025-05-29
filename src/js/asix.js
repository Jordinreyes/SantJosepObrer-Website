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

    // Cerrar todos los modales antes de abrir uno nuevo
    document.querySelectorAll('[id^="modal-expandible-"]').forEach((otherModal) => {
      const otherContenido = otherModal.querySelector('[id^="contenido-expandible-"]');
      const otherIcon = otherModal.querySelector('[id^="modal-icon-"]');
      if (otherModal !== modal) {
        otherModal.setAttribute("aria-expanded", "false");
        otherModal.style.maxHeight = "56px";
        otherContenido.style.opacity = 0;
        otherContenido.style.pointerEvents = "none";
        otherIcon.textContent = "+";
      }
    });

    // Toggle actual
    const contenido = modal.querySelector('[id^="contenido-expandible-"]');
    const icon = modal.querySelector('[id^="modal-icon-"]');

    if (expanded) {
      // Cerrar el modal si ya estaba abierto
      modal.setAttribute("aria-expanded", "false");
      modal.style.maxHeight = "56px";
      contenido.style.opacity = 0;
      contenido.style.pointerEvents = "none";
      icon.textContent = "+";
    } else {
      // Abrir el modal
      modal.setAttribute("aria-expanded", "true");
      modal.style.maxHeight = "1000px"; // máximo alto para expandir, ajusta si quieres
      contenido.style.opacity = 1;
      contenido.style.pointerEvents = "auto";
      icon.textContent = "−";
    }
  });
});

/**
 * formulario de contacto
 */
