let mediaVisible = true;

function toggleMedia() {
  mediaVisible = !mediaVisible;

  const gallerySection = document.getElementById("gallerySection");
  const button = document.getElementById("mediaToggleBtn");

  if (mediaVisible) {
    gallerySection.style.display = "block";
    button.textContent = "Hide Media";
  } else {
    gallerySection.style.display = "none";
    button.textContent = "Show Media";
  }
}