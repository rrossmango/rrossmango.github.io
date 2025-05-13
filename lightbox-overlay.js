// open the lightbox with the clicked media’s src
document.querySelectorAll('.video-wrapper img', '.gif-tile img', '.carousel-track img')
  .forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      const src = el.tagName === 'IMG'
        ? el.src
        : (el.tagName === 'VIDEO' ? el.currentSrc || el.src : el.src);
      const lb = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');
      img.src = src;
      lb.style.display = 'flex';
    });
  });

// close on overlay click
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}