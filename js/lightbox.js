document.addEventListener("DOMContentLoaded", function () {
  const images = Array.from(document.querySelectorAll(".media-photo-grid img"));

  if (!images.length) return;

  let currentIndex = 0;

  const overlay = document.createElement("div");
  overlay.className = "rfr-lightbox";
  overlay.innerHTML = `
    <button class="rfr-lightbox-close" type="button">×</button>
    <button class="rfr-lightbox-prev" type="button">‹</button>
    <img class="rfr-lightbox-img" src="" alt="">
    <button class="rfr-lightbox-next" type="button">›</button>
  `;

  document.body.appendChild(overlay);

  const lightboxImg = overlay.querySelector(".rfr-lightbox-img");
  const closeBtn = overlay.querySelector(".rfr-lightbox-close");
  const prevBtn = overlay.querySelector(".rfr-lightbox-prev");
  const nextBtn = overlay.querySelector(".rfr-lightbox-next");

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt || "Gallery photo";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox(currentIndex);
  }

  images.forEach(function (img, index) {
    img.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", previousImage);
  nextBtn.addEventListener("click", nextImage);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (!overlay.classList.contains("open")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") previousImage();
    if (event.key === "ArrowRight") nextImage();
  });
});
