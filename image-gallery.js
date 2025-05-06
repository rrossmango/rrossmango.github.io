// Simple horizontal scrolling
let scrollIndex = 0;

function scrollCarousel(direction) {
  const trackWrapper = document.querySelector('.carousel-track-wrapper');
  const track = document.querySelector('.carousel-track');
  const images = track.querySelectorAll('img');

  if (images.length === 0) return;

  const imageWidth = images[0].offsetWidth + 16; // account for gap
  const wrapperWidth = trackWrapper.offsetWidth;
  const imagesPerView = Math.floor(wrapperWidth / imageWidth);

  const scrollAmount = imageWidth * imagesPerView;

  trackWrapper.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

function getVisibleCount() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 500) return 2;
  if (screenWidth < 800) return 3;
  return 5;
}

window.addEventListener('resize', () => scrollCarousel(0)); // reset transform on resize