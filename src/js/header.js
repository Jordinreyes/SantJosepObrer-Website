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
