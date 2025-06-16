const images = [
  "public/picture/desktop/170266111_fb-link_normal_none.jpg",
  "public/picture/desktop/193694714_m_normal_none.jpg",
  "public/picture/desktop/170266111_fb-link_normal_none.jpg",
  "public/picture/desktop/170266111_fb-link_normal_none.jpg",
  "public/picture/desktop/170266111_fb-link_normal_none.jpg",
  "public/picture/desktop/170266111_fb-link_normal_none.jpg",
  "public/picture/desktop/170266111_fb-link_normal_none.jpg",
];
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById("modal-img").src = images[currentIndex];
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("modal-img").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("modal-img").src = images[currentIndex];
}
